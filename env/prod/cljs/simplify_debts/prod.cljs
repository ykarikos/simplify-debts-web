(ns simplify-debts.prod
  (:require
    [simplify-debts.core :as core]))

;;ignore println statements in prod
(set! *print-fn* (fn [& _]))

(core/init!)
