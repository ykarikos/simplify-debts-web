(ns simplify-debts.views
  (:require [reagent.core :as r]
            [clojure.string :as str]
            [simplify-debts.simplify :as s]
            [goog.string.format]))

(defonce participants
  (r/atom []))

(defonce rows
  (r/atom [{:id 0}]))

(defonce result-visible
  (r/atom false))

(defn update-participants [event]
  (let [value (.. event -target -value)
        participant-list (str/split value #"[,\s]+")]
    (reset! participants participant-list)))

(defn- participants-input []
  [:textarea {:style {:width "300px"
                      :height "60px"}
              :on-change update-participants}])

(defn- get-row-updater [id key value]
  (fn [row]
    (if (= (:id row) id)
      (assoc row key value)
      row)))

(defn- update-rows
  ([id key] (update-rows id key identity))
  ([id key filter]
   (fn [event]
     (let [value (.. event -target -value)
           filtered-value (filter value)]
       (swap! rows #(->> %
                         (map (get-row-updater id key filtered-value))
                         vec))))))

(defn- participant-dropdown [id key]
  [:td
   [:select
    {:on-change (update-rows id key)}
    [:option]
    [:option {:value "*"} "[Everyone]"]
    (for [p @participants]
      ^{:key p} [:option p])]])

(defn- remove-row [id]
  (fn [] (when (> (count @rows) 1))
    (reset! rows
            (->> @rows
              (remove #(= id (:id %)))
              vec))))

(defn- max-row-id []
  (apply max (map :id @rows)))

(defn- row [id]
  [:tr
   [participant-dropdown id :from]
   [participant-dropdown id :to]
   [:td
    [:input {:on-change (update-rows id :amount js/parseFloat)}]]
   [:td
    (when (> (count @rows) 1)
      [:a {:href "#"
           :on-click (remove-row id)
           :title "Remove row"}
       "➖"])]
   [:td
    (when (= id (max-row-id))
      [:a {:href "#"
           :on-click #(swap! rows conj {:id (inc id)})
           :title "Add a new row"}
       "➕"])]])

(defn- valid-input? [rows]
  (and
   (every? #(not (empty? %)) (map :from rows))
   (every? #(not (empty? %)) (map :to rows))
   (every? #(not= (:from %1) (:to %1)) rows)
   (every? #(and (number? %1) (pos? %1)) (map :amount rows))))

(defn- format-sum [s]
  (goog.string.format "%.2f" s))

(defn- format-result [result]
  [:ul
   (for [{:keys [from to amount]} result]
     ^{:key (str from to amount)}
     [:li (str from " pays " to ": " (format-sum amount))])])

(defn home-page []
  [:div
   [:h1 "Simplify Debts"]
   [:div
    {:class "section"}
    "1. Input people names (e.g. \"Bob, Mary, Alice\") "]
   [:div [participants-input]]
   [:div
    {:class "section"}
    "2. Input the debts"]
   [:table
    [:thead
     [:tr
      [:th "From"]
      [:th "To"]
      [:th "Amount"]]]
    [:tbody
     (for [{:keys [id]} @rows]
       ^{:key id} [row id])]]
   [:div
    {:class "section"}
    "3. "
    [:input
     {:type "submit"
      :value (str (if @result-visible "Hide" "Show") " the result")
      :on-click #(swap! result-visible not)}]]
   [:div {:style {:display (if @result-visible "block" "none")}}
     [:h2 "Result"]
     (if (valid-input? @rows)
         (format-result (s/simplify @rows @participants))
         [:div "No valid input"])]])
