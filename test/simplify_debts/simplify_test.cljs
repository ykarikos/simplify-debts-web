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

(def complex-edges
  [{:from "*" :to "Sue" :amount 1200}
   {:from "*" :to "Bob" :amount 5400}
   {:from "Joe" :to "Bob" :amount 12}
   {:from "Bob" :to "Sue" :amount 90}
   {:from "Michael" :to "Sue" :amount 294}
   {:from "Ellen" :to "Sue" :amount 24}
   {:from "Michael" :to "*" :amount 3045}])

(def complex-empty-nodes
  ["Trevor"])

(def complex-expected
  [{:from "Michael" :to "Bob" :amount 3931.5}
   {:from "Ellen" :to "Sue" :amount 616.5}
   {:from "Joe" :to "Bob" :amount 604.5}
   {:from "Trevor" :to "Sue" :amount 592.5}
   {:from "Sue" :to "Bob" :amount 193.5}])

(deftest simplify
  (let [simple-result (s/simplify simple-edges [])
        zerosum-result (s/simplify zerosum-edges [])
        complex-result (s/simplify complex-edges complex-empty-nodes)]
    (is (= simple-result simple-expected))
    (is (= zerosum-result zerosum-expected))
    (is (= complex-result complex-expected))))
