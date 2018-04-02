(ns simplify-debts.simplify-test
  (:require [cljs.test :refer-macros [deftest is testing run-tests]]
            [simplify-debts.simplify :as s]))


(def simple-edges
  [{:from "Peter" :to "John" :amount 10}
   {:from "Fred" :to "John" :amount 20}
   {:from "John" :to "Michael" :amount 30}])

(def simple-expected
  [{:from "Fred" :to "Michael" :amount 20}
   {:from "Peter" :to "Michael" :amount 10}])

(def zerosum-edges
  [{:from "Peter" :to "John" :amount 10}
   {:from "Fred" :to "John" :amount 20}
   {:from "John" :to "Michael" :amount 30}
   {:from "Michael" :to "Peter" :amount 30}
   {:from "Peter" :to "Fred" :amount 20}])

(def zerosum-expected [])

(deftest simplify
  (let [simple-result (s/simplify simple-edges)
        zerosum-result (s/simplify zerosum-edges)]
    (is (= simple-result simple-expected))
    (is (= zerosum-result zerosum-expected))))
