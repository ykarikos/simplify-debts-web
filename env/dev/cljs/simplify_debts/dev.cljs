(ns ^:figwheel-no-load simplify-debts.dev
  (:require
    [simplify-debts.core :as core]
    [devtools.core :as devtools]))


(enable-console-print!)

(devtools/install!)

(core/init!)
