// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('simplify_debts.simplify');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('clojure.set');
simplify_debts.simplify.add_weight = (function simplify_debts$simplify$add_weight(weights,edge){
var from_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(edge));
var to_key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(edge));
var weight = cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(edge);
var old_from_weight = (from_key.cljs$core$IFn$_invoke$arity$1 ? from_key.cljs$core$IFn$_invoke$arity$1(weights) : from_key.call(null,weights));
var old_to_weight = (to_key.cljs$core$IFn$_invoke$arity$1 ? to_key.cljs$core$IFn$_invoke$arity$1(weights) : to_key.call(null,weights));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(weights,to_key,(old_to_weight + weight),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([from_key,(old_from_weight - weight)], 0));
});
simplify_debts.simplify.find_greater_weight = (function simplify_debts$simplify$find_greater_weight(weight,weights){
return cljs.core.first(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7708_SHARP_){
return (cljs.core.val(p1__7708_SHARP_) >= weight);
}),weights)));
});
simplify_debts.simplify.find_target = (function simplify_debts$simplify$find_target(current_weight,weights,nodes){
var target = simplify_debts.simplify.find_greater_weight(Math.abs(current_weight),weights);
if((((current_weight < (0))) && (!((target == null))))){
return target;
} else {
return cljs.core.first(nodes);
}
});
simplify_debts.simplify.weight_to_edge = (function simplify_debts$simplify$weight_to_edge(result,node){
var weights = cljs.core.cst$kw$weights.cljs$core$IFn$_invoke$arity$1(result);
var sorted_weights = cljs.core.cst$kw$sorted_DASH_weights.cljs$core$IFn$_invoke$arity$1(result);
var rest_nodes = cljs.core.cst$kw$rest_DASH_nodes.cljs$core$IFn$_invoke$arity$1(result);
var edges = cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(result);
var current_weight = (node.cljs$core$IFn$_invoke$arity$1 ? node.cljs$core$IFn$_invoke$arity$1(weights) : node.call(null,weights));
var transact = Math.abs(current_weight);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_weight,(0))){
return result;
} else {
var target = simplify_debts.simplify.find_target(current_weight,weights,rest_nodes);
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$weights,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(weights,target,((target.cljs$core$IFn$_invoke$arity$1 ? target.cljs$core$IFn$_invoke$arity$1(weights) : target.call(null,weights)) + current_weight)),cljs.core.cst$kw$sorted_DASH_weights,sorted_weights,cljs.core.cst$kw$rest_DASH_nodes,cljs.core.rest(rest_nodes),cljs.core.cst$kw$edges,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(edges,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,cljs.core.name(node),cljs.core.cst$kw$to,cljs.core.name(target),cljs.core.cst$kw$amount,transact], null))], null);
}
});
simplify_debts.simplify.split_from = (function simplify_debts$simplify$split_from(unique_nodes){
var unique_count = cljs.core.count(unique_nodes);
return ((function (unique_count){
return (function (edge){
var iter__4292__auto__ = ((function (unique_count){
return (function simplify_debts$simplify$split_from_$_iter__7709(s__7710){
return (new cljs.core.LazySeq(null,((function (unique_count){
return (function (){
var s__7710__$1 = s__7710;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__7710__$1);
if(temp__5457__auto__){
var s__7710__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7710__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__7710__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__7712 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__7711 = (0);
while(true){
if((i__7711 < size__4291__auto__)){
var from = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__7711);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(edge))){
cljs.core.chunk_append(b__7712,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(edge),cljs.core.cst$kw$amount,(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(edge) / unique_count)], null));

var G__7713 = (i__7711 + (1));
i__7711 = G__7713;
continue;
} else {
var G__7714 = (i__7711 + (1));
i__7711 = G__7714;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7712),simplify_debts$simplify$split_from_$_iter__7709(cljs.core.chunk_rest(s__7710__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7712),null);
}
} else {
var from = cljs.core.first(s__7710__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(from,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(edge))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,from,cljs.core.cst$kw$to,cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(edge),cljs.core.cst$kw$amount,(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(edge) / unique_count)], null),simplify_debts$simplify$split_from_$_iter__7709(cljs.core.rest(s__7710__$2)));
} else {
var G__7715 = cljs.core.rest(s__7710__$2);
s__7710__$1 = G__7715;
continue;
}
}
} else {
return null;
}
break;
}
});})(unique_count))
,null,null));
});})(unique_count))
;
return iter__4292__auto__(unique_nodes);
});
;})(unique_count))
});
simplify_debts.simplify.split_to = (function simplify_debts$simplify$split_to(unique_nodes){
var unique_count = cljs.core.count(unique_nodes);
return ((function (unique_count){
return (function (edge){
var iter__4292__auto__ = ((function (unique_count){
return (function simplify_debts$simplify$split_to_$_iter__7716(s__7717){
return (new cljs.core.LazySeq(null,((function (unique_count){
return (function (){
var s__7717__$1 = s__7717;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__7717__$1);
if(temp__5457__auto__){
var s__7717__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__7717__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__7717__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__7719 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__7718 = (0);
while(true){
if((i__7718 < size__4291__auto__)){
var to = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__7718);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(edge))){
cljs.core.chunk_append(b__7719,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(edge),cljs.core.cst$kw$to,to,cljs.core.cst$kw$amount,(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(edge) / unique_count)], null));

var G__7720 = (i__7718 + (1));
i__7718 = G__7720;
continue;
} else {
var G__7721 = (i__7718 + (1));
i__7718 = G__7721;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__7719),simplify_debts$simplify$split_to_$_iter__7716(cljs.core.chunk_rest(s__7717__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__7719),null);
}
} else {
var to = cljs.core.first(s__7717__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(to,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(edge))){
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$from,cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(edge),cljs.core.cst$kw$to,to,cljs.core.cst$kw$amount,(cljs.core.cst$kw$amount.cljs$core$IFn$_invoke$arity$1(edge) / unique_count)], null),simplify_debts$simplify$split_to_$_iter__7716(cljs.core.rest(s__7717__$2)));
} else {
var G__7722 = cljs.core.rest(s__7717__$2);
s__7717__$1 = G__7722;
continue;
}
}
} else {
return null;
}
break;
}
});})(unique_count))
,null,null));
});})(unique_count))
;
return iter__4292__auto__(unique_nodes);
});
;})(unique_count))
});
simplify_debts.simplify.starry_edge_QMARK_ = (function simplify_debts$simplify$starry_edge_QMARK_(edge){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(edge),"*")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(edge),"*")));
});
simplify_debts.simplify.split_star_nodes = (function simplify_debts$simplify$split_star_nodes(edges,empty_nodes){
var from_nodes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from,edges));
var to_nodes = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to,edges));
var unique_nodes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (from_nodes,to_nodes){
return (function (p1__7723_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("*",p1__7723_SHARP_);
});})(from_nodes,to_nodes))
,clojure.set.union.cljs$core$IFn$_invoke$arity$variadic(from_nodes,to_nodes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.set(empty_nodes)], 0)));
var from_star = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (from_nodes,to_nodes,unique_nodes){
return (function (p1__7724_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(p1__7724_SHARP_),"*");
});})(from_nodes,to_nodes,unique_nodes))
,edges);
var split_from_edges = cljs.core.map.cljs$core$IFn$_invoke$arity$2(simplify_debts.simplify.split_from(unique_nodes),from_star);
var to_star = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (from_nodes,to_nodes,unique_nodes,from_star,split_from_edges){
return (function (p1__7725_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(p1__7725_SHARP_),"*");
});})(from_nodes,to_nodes,unique_nodes,from_star,split_from_edges))
,edges);
var split_to_edges = cljs.core.map.cljs$core$IFn$_invoke$arity$2(simplify_debts.simplify.split_to(unique_nodes),to_star);
var non_star_edges = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (from_nodes,to_nodes,unique_nodes,from_star,split_from_edges,to_star,split_to_edges){
return (function (p1__7726_SHARP_){
return cljs.core.not(simplify_debts.simplify.starry_edge_QMARK_(p1__7726_SHARP_));
});})(from_nodes,to_nodes,unique_nodes,from_star,split_from_edges,to_star,split_to_edges))
,edges);
return cljs.core.flatten(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(split_from_edges,split_to_edges,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([non_star_edges], 0)));
});
simplify_debts.simplify.edges_to_weights = (function simplify_debts$simplify$edges_to_weights(edges){
return cljs.core.sort.cljs$core$IFn$_invoke$arity$2((function (p1__7728_SHARP_,p2__7729_SHARP_){
return cljs.core.compare(cljs.core.val(p1__7728_SHARP_),cljs.core.val(p2__7729_SHARP_));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__7727_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.val(p1__7727_SHARP_));
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(simplify_debts.simplify.add_weight,cljs.core.PersistentArrayMap.EMPTY,edges)));
});
/**
 * Minify transactions to balance debts in given edges.
 *   An example edge: {:from "Peter" :to "John" :amount 10}
 *   Edges parameter is a vector of edges.
 *   Empty-nodes parameter is a list of node names that do not have
 *   individual debts but will be taken into account in 'to-all' and
 *   'from-all' debts that are marked with an asterisk, e.g. like this:
 *   {:from "Peter" :to "*" :amount 100}
 *   Return value has the same format as edges.
 */
simplify_debts.simplify.simplify = (function simplify_debts$simplify$simplify(edges,empty_nodes){
var split_edges = simplify_debts.simplify.split_star_nodes(edges,empty_nodes);
var sorted_weights = simplify_debts.simplify.edges_to_weights(split_edges);
var weights_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),sorted_weights);
var nodes = cljs.core.keys(sorted_weights);
var start_nodes = cljs.core.take.cljs$core$IFn$_invoke$arity$2((cljs.core.count(nodes) - (1)),nodes);
return cljs.core.cst$kw$edges.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(simplify_debts.simplify.weight_to_edge,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$weights,weights_map,cljs.core.cst$kw$rest_DASH_nodes,cljs.core.rest(nodes),cljs.core.cst$kw$edges,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$sorted_DASH_weights,sorted_weights], null),start_nodes));
});
