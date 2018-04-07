(ns simplify-debts.simplify
  (:require [clojure.set :as set]))

(defn- add-weight [weights edge]
  (let [from-key (keyword (:from edge))
        to-key (keyword (:to edge))
        weight (:amount edge)
        old-from-weight (from-key weights)
        old-to-weight (to-key weights)]
    (assoc weights
           to-key (+ old-to-weight weight)
           from-key (- old-from-weight weight))))

(defn- find-greater-weight [weight weights]
  (->> weights
      (filter #(> (val %) weight))
      first
      first))

(defn- find-target [current-weight weights nodes]
  (let [target (find-greater-weight (Math/abs current-weight) weights)]
    (if (and (< current-weight 0) (not (nil? target)))
      target
      (first nodes))))

(defn- weight-to-edge [result node]
  (let [weights (:weights result)
        sorted-weights (:sorted-weights result)
        rest-nodes (:rest-nodes result)
        edges (:edges result)
        current-weight (node weights)
        transact (Math/abs current-weight)]
    (if (= current-weight 0)
      result
      (let [target (find-target current-weight weights rest-nodes)]
        {:weights (assoc weights target (+ (target weights) current-weight))
         :sorted-weights sorted-weights
         :rest-nodes (rest rest-nodes)
         :edges (conj edges {:from (name node) :to (name target) :amount transact})}))))

(defn- split-from [unique-nodes]
  (let [unique-count (count unique-nodes)]
    (fn [edge]
      (for [from unique-nodes :when (not= from (:to edge))]
        {:from from
         :to (:to edge)
         :amount (/ (:amount edge) unique-count)}))))

(defn- split-to [unique-nodes]
  (let [unique-count (count unique-nodes)]
    (fn [edge]
      (for [to unique-nodes :when (not= to (:from edge))]
        {:from (:from edge)
         :to to
         :amount (/ (:amount edge) unique-count)}))))

(defn- starry-edge? [edge]
  (or (= (:from edge) "*")
      (= (:to edge) "*")))

(defn- split-star-nodes [edges empty-nodes]
  (let [from-nodes (->> edges (map :from) set)
        to-nodes (->> edges (map :to) set)
        unique-nodes (filter #(not= "*" %)
                             (set/union from-nodes to-nodes (set empty-nodes)))
        from-star (filter #(= (:from %) "*") edges)
        split-from-edges (map (split-from unique-nodes) from-star)
        to-star (filter #(= (:to %) "*") edges)
        split-to-edges (map (split-to unique-nodes) to-star)
        non-star-edges (filter #(not (starry-edge? %)) edges)]
    (flatten (concat split-from-edges split-to-edges non-star-edges))))

(defn- edges-to-weights [edges]
  (->> edges
       (reduce add-weight {})
       (filter #(not= 0 (val %)))
       (sort #(compare (val %1) (val %2)))))

(defn simplify
  "Minify transactions to balance debts in given edges.
  An example edge: {:from \"Peter\", :to \"John\", :amount 10}
  Edges parameter is a vector of edges.
  Empty-nodes parameter is a list of node names that do not have
  individual debts but will be taken into account in 'to-all' and
  'from-all' debts that are marked with an asterisk, e.g. like this:
  {:from \"Peter\", :to \"*\", :amount 100}
  Return value has the same format as edges."
  [edges empty-nodes]
  (let [split-edges (split-star-nodes edges empty-nodes)
        sorted-weights (edges-to-weights split-edges)
        weights-map (into (sorted-map) sorted-weights)
        nodes (keys sorted-weights)
        start-nodes (take (- (count nodes) 1) nodes)]
    (->> start-nodes
      (reduce weight-to-edge
            {:weights weights-map
             :rest-nodes (rest nodes)
             :edges []
             :sorted-weights sorted-weights})
      :edges)))
