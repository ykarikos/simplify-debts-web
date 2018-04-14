(ns simplify-debts.core
  (:require [reagent.core :as r]
            (simplify-debts.views :as views)))

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [views/home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
