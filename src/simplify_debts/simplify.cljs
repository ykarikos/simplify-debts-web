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



; (reduce add-weight {} edges

(defn edges-to-weights [edges]
  (->> edges
       (reduce add-weight {})
       (filter #(not= 0 (val %)))
       (sort #(compare (val %1) (val %2)))))
