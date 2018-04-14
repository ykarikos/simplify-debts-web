// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('simplify_debts.views');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('simplify_debts.simplify');
goog.require('goog.string.format');
if(typeof simplify_debts.views.participants !== 'undefined'){
} else {
simplify_debts.views.participants = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if(typeof simplify_debts.views.rows !== 'undefined'){
} else {
simplify_debts.views.rows = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,(0)], null)], null));
}
if(typeof simplify_debts.views.result_visible !== 'undefined'){
} else {
simplify_debts.views.result_visible = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
simplify_debts.views.update_participants = (function simplify_debts$views$update_participants(event){
var value = event.target.value;
var participant_list = clojure.string.split.cljs$core$IFn$_invoke$arity$2(value,/[,\s]+/);
return cljs.core.reset_BANG_(simplify_debts.views.participants,participant_list);
});
simplify_debts.views.participants_input = (function simplify_debts$views$participants_input(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$textarea,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"300px",cljs.core.cst$kw$height,"60px"], null),cljs.core.cst$kw$on_DASH_change,simplify_debts.views.update_participants], null)], null);
});
simplify_debts.views.get_row_updater = (function simplify_debts$views$get_row_updater(id,key,value){
return (function (row){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(row),id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(row,key,value);
} else {
return row;
}
});
});
simplify_debts.views.update_rows = (function simplify_debts$views$update_rows(var_args){
var G__5592 = arguments.length;
switch (G__5592) {
case 2:
return simplify_debts.views.update_rows.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return simplify_debts.views.update_rows.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

simplify_debts.views.update_rows.cljs$core$IFn$_invoke$arity$2 = (function (id,key){
return simplify_debts.views.update_rows.cljs$core$IFn$_invoke$arity$3(id,key,cljs.core.identity);
});

simplify_debts.views.update_rows.cljs$core$IFn$_invoke$arity$3 = (function (id,key,filter){
return (function (event){
var value = event.target.value;
var filtered_value = (filter.cljs$core$IFn$_invoke$arity$1 ? filter.cljs$core$IFn$_invoke$arity$1(value) : filter.call(null,value));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(simplify_debts.views.rows,((function (value,filtered_value){
return (function (p1__5590_SHARP_){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(simplify_debts.views.get_row_updater(id,key,filtered_value),p1__5590_SHARP_));
});})(value,filtered_value))
);
});
});

simplify_debts.views.update_rows.cljs$lang$maxFixedArity = 3;

simplify_debts.views.participant_dropdown = (function simplify_debts$views$participant_dropdown(id,key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$select,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,simplify_debts.views.update_rows.cljs$core$IFn$_invoke$arity$2(id,key)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$value,"*"], null),"[Everyone]"], null),(function (){var iter__4292__auto__ = (function simplify_debts$views$participant_dropdown_$_iter__5594(s__5595){
return (new cljs.core.LazySeq(null,(function (){
var s__5595__$1 = s__5595;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5595__$1);
if(temp__5457__auto__){
var s__5595__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5595__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__5595__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__5597 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__5596 = (0);
while(true){
if((i__5596 < size__4291__auto__)){
var p = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__5596);
cljs.core.chunk_append(b__5597,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p], null)));

var G__5598 = (i__5596 + (1));
i__5596 = G__5598;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5597),simplify_debts$views$participant_dropdown_$_iter__5594(cljs.core.chunk_rest(s__5595__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5597),null);
}
} else {
var p = cljs.core.first(s__5595__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$option,p], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,p], null)),simplify_debts$views$participant_dropdown_$_iter__5594(cljs.core.rest(s__5595__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.deref(simplify_debts.views.participants));
})()], null)], null);
});
simplify_debts.views.remove_row = (function simplify_debts$views$remove_row(id){
return (function (){
if((cljs.core.count(cljs.core.deref(simplify_debts.views.rows)) > (1))){
} else {
}

return cljs.core.reset_BANG_(simplify_debts.views.rows,cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__5599_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(p1__5599_SHARP_));
}),cljs.core.deref(simplify_debts.views.rows))));
});
});
simplify_debts.views.max_row_id = (function simplify_debts$views$max_row_id(){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$id,cljs.core.deref(simplify_debts.views.rows)));
});
simplify_debts.views.row = (function simplify_debts$views$row(id){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplify_debts.views.participant_dropdown,id,cljs.core.cst$kw$from], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplify_debts.views.participant_dropdown,id,cljs.core.cst$kw$to], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$on_DASH_change,simplify_debts.views.update_rows.cljs$core$IFn$_invoke$arity$3(id,cljs.core.cst$kw$amount,parseFloat)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,(((cljs.core.count(cljs.core.deref(simplify_debts.views.rows)) > (1)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,simplify_debts.views.remove_row(id),cljs.core.cst$kw$title,"Remove row"], null),"\u2796"], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$td,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,simplify_debts.views.max_row_id()))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$href,"#",cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(simplify_debts.views.rows,cljs.core.conj,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$id,(id + (1))], null));
}),cljs.core.cst$kw$title,"Add a new row"], null),"\u2795"], null):null)], null)], null);
});
simplify_debts.views.valid_input_QMARK_ = (function simplify_debts$views$valid_input_QMARK_(rows){
return ((cljs.core.every_QMARK_((function (p1__5600_SHARP_){
return !(cljs.core.empty_QMARK_(p1__5600_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from,rows))) && (cljs.core.every_QMARK_((function (p1__5601_SHARP_){
return !(cljs.core.empty_QMARK_(p1__5601_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$to,rows))) && (cljs.core.every_QMARK_((function (p1__5602_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$from.cljs$core$IFn$_invoke$arity$1(p1__5602_SHARP_),cljs.core.cst$kw$to.cljs$core$IFn$_invoke$arity$1(p1__5602_SHARP_));
}),rows)) && (cljs.core.every_QMARK_((function (p1__5603_SHARP_){
return ((typeof p1__5603_SHARP_ === 'number') && ((p1__5603_SHARP_ > (0))));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$amount,rows))));
});
simplify_debts.views.format_sum = (function simplify_debts$views$format_sum(s){
return goog.string.format("%.2f",s);
});
simplify_debts.views.format_result = (function simplify_debts$views$format_result(result){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$ul,(function (){var iter__4292__auto__ = (function simplify_debts$views$format_result_$_iter__5604(s__5605){
return (new cljs.core.LazySeq(null,(function (){
var s__5605__$1 = s__5605;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5605__$1);
if(temp__5457__auto__){
var s__5605__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5605__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__5605__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__5607 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__5606 = (0);
while(true){
if((i__5606 < size__4291__auto__)){
var map__5608 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__5606);
var map__5608__$1 = ((((!((map__5608 == null)))?(((((map__5608.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5608.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5608):map__5608);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5608__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5608__$1,cljs.core.cst$kw$to);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5608__$1,cljs.core.cst$kw$amount);
cljs.core.chunk_append(b__5607,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)," pays ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(simplify_debts.views.format_sum(amount))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount)].join('')], null)));

var G__5612 = (i__5606 + (1));
i__5606 = G__5612;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5607),simplify_debts$views$format_result_$_iter__5604(cljs.core.chunk_rest(s__5605__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5607),null);
}
} else {
var map__5610 = cljs.core.first(s__5605__$2);
var map__5610__$1 = ((((!((map__5610 == null)))?(((((map__5610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5610):map__5610);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5610__$1,cljs.core.cst$kw$from);
var to = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5610__$1,cljs.core.cst$kw$to);
var amount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5610__$1,cljs.core.cst$kw$amount);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$li,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from)," pays ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(simplify_debts.views.format_sum(amount))].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(from),cljs.core.str.cljs$core$IFn$_invoke$arity$1(to),cljs.core.str.cljs$core$IFn$_invoke$arity$1(amount)].join('')], null)),simplify_debts$views$format_result_$_iter__5604(cljs.core.rest(s__5605__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(result);
})()], null);
});
simplify_debts.views.home_page = (function simplify_debts$views$home_page(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h1,"Simplify Debts"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"section"], null),"1. Input people names (e.g. \"Bob, Mary, Alice\") "], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplify_debts.views.participants_input], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"section"], null),"2. Input the debts"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$table,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$thead,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tr,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"From"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"To"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$th,"Amount"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$tbody,(function (){var iter__4292__auto__ = (function simplify_debts$views$home_page_$_iter__5613(s__5614){
return (new cljs.core.LazySeq(null,(function (){
var s__5614__$1 = s__5614;
while(true){
var temp__5457__auto__ = cljs.core.seq(s__5614__$1);
if(temp__5457__auto__){
var s__5614__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_(s__5614__$2)){
var c__4290__auto__ = cljs.core.chunk_first(s__5614__$2);
var size__4291__auto__ = cljs.core.count(c__4290__auto__);
var b__5616 = cljs.core.chunk_buffer(size__4291__auto__);
if((function (){var i__5615 = (0);
while(true){
if((i__5615 < size__4291__auto__)){
var map__5617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4290__auto__,i__5615);
var map__5617__$1 = ((((!((map__5617 == null)))?(((((map__5617.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5617.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5617):map__5617);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5617__$1,cljs.core.cst$kw$id);
cljs.core.chunk_append(b__5616,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplify_debts.views.row,id], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)));

var G__5621 = (i__5615 + (1));
i__5615 = G__5621;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__5616),simplify_debts$views$home_page_$_iter__5613(cljs.core.chunk_rest(s__5614__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__5616),null);
}
} else {
var map__5619 = cljs.core.first(s__5614__$2);
var map__5619__$1 = ((((!((map__5619 == null)))?(((((map__5619.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__5619.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__5619):map__5619);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__5619__$1,cljs.core.cst$kw$id);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [simplify_debts.views.row,id], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,id], null)),simplify_debts$views$home_page_$_iter__5613(cljs.core.rest(s__5614__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__(cljs.core.deref(simplify_debts.views.rows));
})()], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$class,"section"], null),"3. ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$type,"submit",cljs.core.cst$kw$value,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(simplify_debts.views.result_visible))?"Hide":"Show"))," the result"].join(''),cljs.core.cst$kw$on_DASH_click,(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(simplify_debts.views.result_visible,cljs.core.not);
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$display,(cljs.core.truth_(cljs.core.deref(simplify_debts.views.result_visible))?"block":"none")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h2,"Result"], null),(cljs.core.truth_(simplify_debts.views.valid_input_QMARK_(cljs.core.deref(simplify_debts.views.rows)))?simplify_debts.views.format_result(simplify_debts.simplify.simplify(cljs.core.deref(simplify_debts.views.rows),cljs.core.deref(simplify_debts.views.participants))):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,"No valid input"], null))], null)], null);
});
