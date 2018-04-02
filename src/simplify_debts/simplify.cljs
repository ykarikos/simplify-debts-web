(ns simplify-debts.simplify)

; edge: {:from "Peter", :to "John", :amount 10}

; edges
; [{:from "Peter", :to "John", :amount 10}
;  {:from "Fred", :to "John", :amount 20})
;  {:from "John", :to "Michael", :amount 30}

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
      (filter #(> (second %) weight))
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
      (let [target (find-target current-weight sorted-weights rest-nodes)]
        {:weights (assoc weights target (+ (target weights) current-weight))
         :sorted-weights sorted-weights
         :rest-nodes (rest rest-nodes)
         :edges (conj edges {:from (name node) :to (name target) :amount transact})}))))


(defn- edges-to-weights [edges]
  (->> edges
       (reduce add-weight {})
       (filter #(not= 0 (val %)))
       (sort #(compare (val %1) (val %2)))))

(defn simplify [edges]
  (let [sorted-weights (edges-to-weights edges)
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
