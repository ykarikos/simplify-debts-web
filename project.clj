(defproject simplify-debts "1.0"
  :description "Simplify debts by minimizing transactions"
  :url "https://simplify-debts.peruna.fi/"
  :license {:name "MIT"
            :url "https://github.com/ykarikos/simplify-debts-web/blob/master/LICENSE"}

  :dependencies [[org.clojure/clojure "1.9.0"]
                 [org.clojure/clojurescript "1.10.238"]
                 [reagent "0.7.0"]
                 [lein-doo "0.1.10"]
                 [jakarta.xml.bind/jakarta.xml.bind-api "2.3.2"]
                 [org.glassfish.jaxb/jaxb-runtime "2.3.2"]
                 [alandipert/storage-atom "1.2.4"]]

  :plugins [[lein-cljsbuild "1.1.5"]
            [lein-figwheel "0.5.15"]
            [lein-doo "0.1.10"]]

  :min-lein-version "2.5.0"

  :clean-targets ^{:protect false}
  [:target-path
   [:cljsbuild :builds :app :compiler :output-dir]
   [:cljsbuild :builds :app :compiler :output-to]]

  :resource-paths ["docs"]

  :figwheel {:http-server-root "."
             :nrepl-port 7002
             :nrepl-middleware ["cemerick.piggieback/wrap-cljs-repl"]
             :css-dirs ["docs/css"]}

  :cljsbuild {:test-commands {"test" ["lein" "doo" "phantom" "test" "auto"]}
              :builds {:app
                       {:source-paths ["src" "env/dev/cljs"]
                        :compiler
                        {:main "simplify-debts.dev"
                         :output-to "docs/js/app.js"
                         :output-dir "docs/js/out"
                         :asset-path   "js/out"
                         :source-map true
                         :optimizations :none
                         :pretty-print  true}
                        :figwheel
                        {:on-jsload "simplify-debts.core/mount-root"
                         :open-urls ["http://localhost:3449/index.html"]}}
                       :release
                       {:source-paths ["src" "env/prod/cljs"]
                        :compiler
                        {:output-to "docs/js/app.js"
                         :output-dir "docs/js/release"
                         :asset-path   "js/out"
                         :optimizations :advanced
                         :pretty-print false}}
                       :test
                       {:source-paths ["src" "test"]
                        :compiler {:main runners.doo
                                   :optimizations :none
                                   :output-to "resources/docs/cljs/tests/all-tests.js"}}}}

  :aliases {"package" ["do" "clean" ["cljsbuild" "once" "release"]]}

  :profiles {:dev {:dependencies [[binaryage/devtools "0.9.7"]
                                  [figwheel-sidecar "0.5.15"]
                                  [org.clojure/tools.nrepl "0.2.13"]
                                  [com.cemerick/piggieback "0.2.2"]]}})
