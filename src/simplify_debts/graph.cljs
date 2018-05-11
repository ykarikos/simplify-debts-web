(ns simplify-debts.graph
  (:require [cljsjs.cytoscape]
            [simplify-debts.views :as v]))

(def cy-style
  {:container (.getElementById js/document "cy")
   :style [{:selector "node"
            :style {"content" "data(id)"
                    "text-opacity" 0.5
                    "text-valign" "center"
                    "text-halign" "right"
                    "background-color" "#11479e"}}
           {:selector "edge"
            :style {"curve-style" "bezier"
                    "width" 4
                    "label" "data(label)"
                    "target-arrow-shape" "triangle"
                    "line-color" "#9dbaea"
                    "target-arrow-color" "#9dbaea"}}]})

(defn- result-to-cy-edge [{:keys [from to amount]}]
  {:data {:source from
          :target to
          :label (v/format-sum amount)}})

(defn- create-cy-data [result participants]
  (let [nodes (map (fn [n] {:data {:id n}}) participants)
        edges (map result-to-cy-edge result)]
    {:elements
     {:nodes nodes
      :edges edges}}))

(defn init [result participants]
  (->> (create-cy-data result participants)
       (merge cy-style)
       clj->js
       js/cytoscape))
