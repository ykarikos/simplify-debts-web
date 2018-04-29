(ns simplify-debts.core
  (:require [reagent.core :as r]
            [simplify-debts.views :as views]
            [cljsjs.cytoscape]))

(def cy-style
  {:style [{:selector "node"
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



(def cy-map
  {:container (.getElementById js/document "cy")
   :elements {:nodes [ {:data {:id "John"}}
                       {:data {:id "Alice"}}]
              :edges [ {:data {:source "John"
                               :target "Alice"
                               :label 10}}]}})

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [views/home-page] (.getElementById js/document "app")))

(defn mount-cy []
  (js/cytoscape (clj->js (merge cy-map cy-style))))

(defn init! []
  (mount-cy)
  (mount-root))
