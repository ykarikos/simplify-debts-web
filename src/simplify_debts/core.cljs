(ns simplify-debts.core
    (:require
      [reagent.core :as r]
      [clojure.string :as str]
      [simplify-debts.simplify :as s]))

;; -------------------------
;; Views

(defonce participants
  (r/atom []))

(defonce rows
  (r/atom [{:id 0}]))

(defn update-participants [event]
  (let [value (.. event -target -value)
        participant-list (str/split value #"[,\s]+")]
    (reset! participants participant-list)))

(defn- participants-input []
  [:textarea {:style {:width "300px"
                      :height "60px"}
              :on-change update-participants}])

(defn- participant-dropdown [name key]
  [:td
   [:select
    {:on-change}
    (for [p @participants]
      ^{:key p}
      [:option p
       (when (= p name) {:selected true})])]])

(defn- remove-row [id]
  (fn [] (when (> (count @rows) 1))
    (reset! rows
            (->> @rows
              (remove #(= id (:id %)))
              vec))))

(defn- max-row-id []
  (apply max (map :id @rows)))

(defn- row [id from to amount]
  [:tr
   [participant-dropdown from :from]
   [participant-dropdown to :to]
   [:td
    [:input (when (not (nil? amount)) {:value amount})]]
   [:td
    (when (= id (max-row-id))
      [:a {:href "#"
           :on-click #(swap! rows conj {:id (inc id)})}
       "➕"])]
   [:td
    [:a {:href "#"
         :on-click (remove-row id)}
     "➖"]]])

(defn- valid-input? []
  (every? number? (map :amount @rows)))

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
     (for [{:keys [id from to amount]} @rows]
       ^{:key id} [row id from to amount])]]
   [:div [:input {:type "submit"
                  :value "show result"}]]
   [:div (str @rows)]])
   ; [:div (when (> (count @rows) 1)
   ;         (s/simplify @rows []))]])

;; -------------------------
;; Initialize app

(defn mount-root []
  (r/render [home-page] (.getElementById js/document "app")))

(defn init! []
  (mount-root))
