(ns simplify-debts.core
    (:require
      [reagent.core :as r]
      [clojure.string :as str]))

;; -------------------------
;; Views

(def participants
  (r/atom []))

(defn update-participants [event]
  (let [value (.. event -target -value)
        participant-list (str/split value #"[,\s]+")]
    (reset! participants participant-list)))

(defn- participants-input []
  [:textarea {:style {:width "300px"
                      :height "60px"}
              :on-change update-participants}])

(defn- participant-dropdown []
  [:td
   [:select
    (for [p @participants]
      ^{:key p} [:option p])]])

(defn- row []
  [:tr
   [participant-dropdown]
   [participant-dropdown]
   [:td
    [:input]]])

(defn home-page []
  [:div [:h2 "Simplify Debts"]
   [:div "Input people names (e.g. \"Bob, Mary, Alice\") "]
   [:div [participants-input]]
   [:div "Input the debts"]
   [:table
    [:thead
     [:tr
      [:th "From"]
      [:th "To"]
      [:th "Amount"]]]
    [:tbody
     [row]]]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
