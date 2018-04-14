// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('simplify_debts.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('simplify_debts.views');
simplify_debts.core.mount_root = (function simplify_debts$core$mount_root(){
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplify_debts.views.home_page], null),document.getElementById("app"));
});
simplify_debts.core.init_BANG_ = (function simplify_debts$core$init_BANG_(){
return simplify_debts.core.mount_root();
});
