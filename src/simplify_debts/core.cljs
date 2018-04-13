(ns simplify-debts.core
    (:require
      [reagent.core :as r]
      [clojure.string :as str]
      [simplify-debts.simplify :as s]))

;; -------------------------
;; Views

(defonce participants
  (r/atom []))

(defonce row-count
  (r/atom 1))

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

(defn- row [rownum]
  [:tr
   [participant-dropdown]
   [participant-dropdown]
   [:td
    [:input]]
   [:td
    [:a {:href "#"
         :on-click #(swap! row-count inc)}
     "➕"]
    [:a {:href "#"
         :on-click #(when (> @row-count 1) (swap! row-count dec))}
     "➖"]]])

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
     (for [r (range @row-count)]
       ^{:key r} [row r])]]
   [:div [:input {:type "submit"
                  :value "show result"}]]
   [:div ]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
