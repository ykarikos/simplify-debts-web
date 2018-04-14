// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__5066__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5066 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5067__i = 0, G__5067__a = new Array(arguments.length -  0);
while (G__5067__i < G__5067__a.length) {G__5067__a[G__5067__i] = arguments[G__5067__i + 0]; ++G__5067__i;}
  args = new cljs.core.IndexedSeq(G__5067__a,0,null);
} 
return G__5066__delegate.call(this,args);};
G__5066.cljs$lang$maxFixedArity = 0;
G__5066.cljs$lang$applyTo = (function (arglist__5068){
var args = cljs.core.seq(arglist__5068);
return G__5066__delegate(args);
});
G__5066.cljs$core$IFn$_invoke$arity$variadic = G__5066__delegate;
return G__5066;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__5069__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__5069 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__5070__i = 0, G__5070__a = new Array(arguments.length -  0);
while (G__5070__i < G__5070__a.length) {G__5070__a[G__5070__i] = arguments[G__5070__i + 0]; ++G__5070__i;}
  args = new cljs.core.IndexedSeq(G__5070__a,0,null);
} 
return G__5069__delegate.call(this,args);};
G__5069.cljs$lang$maxFixedArity = 0;
G__5069.cljs$lang$applyTo = (function (arglist__5071){
var args = cljs.core.seq(arglist__5071);
return G__5069__delegate(args);
});
G__5069.cljs$core$IFn$_invoke$arity$variadic = G__5069__delegate;
return G__5069;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});
