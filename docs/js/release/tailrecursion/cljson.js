// Compiled by ClojureScript 1.10.238 {:static-fns true, :optimize-constants true}
goog.provide('tailrecursion.cljson');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('cljs.reader');
goog.require('goog.date.DateTime');
goog.require('clojure.string');


/**
 * Encode a cljs thing o as a JS tagged literal of the form {tag: value}, where
 *   value is composed of JS objects that can be encoded as JSON.
 * @interface
 */
tailrecursion.cljson.EncodeTagged = function(){};

tailrecursion.cljson._encode = (function tailrecursion$cljson$_encode(o){
if(((!((o == null))) && (!((o.tailrecursion$cljson$EncodeTagged$_encode$arity$1 == null))))){
return o.tailrecursion$cljson$EncodeTagged$_encode$arity$1(o);
} else {
var x__4211__auto__ = (((o == null))?null:o);
var m__4212__auto__ = (tailrecursion.cljson._encode[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return (m__4212__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto__.cljs$core$IFn$_invoke$arity$1(o) : m__4212__auto__.call(null,o));
} else {
var m__4212__auto____$1 = (tailrecursion.cljson._encode["_"]);
if(!((m__4212__auto____$1 == null))){
return (m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1 ? m__4212__auto____$1.cljs$core$IFn$_invoke$arity$1(o) : m__4212__auto____$1.call(null,o));
} else {
throw cljs.core.missing_protocol("EncodeTagged.-encode",o);
}
}
}
});

/**
 * Convert clj data to JSON string.
 */
tailrecursion.cljson.clj__GT_cljson = (function tailrecursion$cljson$clj__GT_cljson(v){
return JSON.stringify((tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1(v) : tailrecursion.cljson.encode.call(null,v)));
});
/**
 * Convert JSON string to clj data.
 */
tailrecursion.cljson.cljson__GT_clj = (function tailrecursion$cljson$cljson__GT_clj(s){
var G__7649 = JSON.parse(s);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7649) : tailrecursion.cljson.decode.call(null,G__7649));
});
tailrecursion.cljson.enc_coll = (function tailrecursion$cljson$enc_coll(tag,val){
var len = cljs.core.count(val);
var out = [tag];
var i = (0);
var c = val;
while(true){
if((i < len)){
var i__$1 = (i + (1));
(out[i__$1] = cljs.core.first(c));

var G__7650 = i__$1;
var G__7651 = cljs.core.rest(c);
i = G__7650;
c = G__7651;
continue;
} else {
return out;
}
break;
}
});
Date.prototype.tailrecursion$cljson$EncodeTagged$ = cljs.core.PROTOCOL_SENTINEL;

Date.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){
var o__$1 = this;
return ["inst",cljs.core.subs.cljs$core$IFn$_invoke$arity$3(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([o__$1], 0)),(7),(36))];
});

cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.UUID.prototype.tailrecursion$cljson$EncodeTagged$_encode$arity$1 = (function (o){
var o__$1 = this;
return ["uuid",o__$1.uuid];
});
/**
 * Attempts to encode an object that does not satisfy EncodeTagged,
 *   but for which the printed representation contains a tag.
 */
tailrecursion.cljson.interpret = (function tailrecursion$cljson$interpret(x){
var temp__5457__auto__ = cljs.core.second(cljs.core.re_matches(/#([^<].*)/,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([x], 0))));
if(cljs.core.truth_(temp__5457__auto__)){
var match = temp__5457__auto__;
var tag = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(match);
var val = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(match,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join('').length));
return [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag)].join(''),(tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1(val) : tailrecursion.cljson.encode.call(null,val))];
} else {
return null;
}
});
tailrecursion.cljson.encode = (function tailrecursion$cljson$encode(x){
var temp__5455__auto__ = (function (){var and__3911__auto__ = cljs.core._STAR_print_meta_STAR_;
if(and__3911__auto__){
return cljs.core.meta(x);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var m = temp__5455__auto__;
return ["z",(tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1(m) : tailrecursion.cljson.encode.call(null,m)),(function (){var G__7652 = cljs.core.with_meta(x,null);
return (tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.encode.cljs$core$IFn$_invoke$arity$1(G__7652) : tailrecursion.cljson.encode.call(null,G__7652));
})()];
} else {
if(((!((x == null)))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === x.tailrecursion$cljson$EncodeTagged$))))?true:(((!x.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(tailrecursion.cljson.EncodeTagged,x):false)):cljs.core.native_satisfies_QMARK_(tailrecursion.cljson.EncodeTagged,x))){
return tailrecursion.cljson._encode(x);
} else {
if((x instanceof cljs.core.Keyword)){
return ["k",cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join(''),(1))];
} else {
if((x instanceof cljs.core.Symbol)){
return ["y",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('')];
} else {
if(cljs.core.vector_QMARK_(x)){
return tailrecursion.cljson.enc_coll("v",cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.cljson.encode,x));
} else {
if(cljs.core.seq_QMARK_(x)){
return tailrecursion.cljson.enc_coll("l",cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.cljson.encode,x));
} else {
if(((cljs.core.map_QMARK_(x)) && (!(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (67108864))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IRecord$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x):false)):cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,x)))))){
return tailrecursion.cljson.enc_coll("m",cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.cljson.encode,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,x)));
} else {
if(cljs.core.set_QMARK_(x)){
return tailrecursion.cljson.enc_coll("s",cljs.core.map.cljs$core$IFn$_invoke$arity$2(tailrecursion.cljson.encode,x));
} else {
if(((typeof x === 'string') || (typeof x === 'number') || ((x == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,x)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,x)))){
return x;
} else {
var or__3922__auto__ = tailrecursion.cljson.interpret(x);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
throw (new Error(["No cljson encoding for type '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.type(x)),"'."].join('')));
}

}
}
}
}
}
}
}
}
}
});
tailrecursion.cljson.decode_tagged = (function tailrecursion$cljson$decode_tagged(o){
var tag = (o[(0)]);
var G__7656 = tag;
switch (G__7656) {
case "v":
var i = (1);
var len = o.length;
var out = cljs.core.transient$(cljs.core.PersistentVector.EMPTY);
while(true){
if((i < len)){
var G__7667 = (i + (1));
var G__7668 = len;
var G__7669 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(function (){var G__7657 = (o[i]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7657) : tailrecursion.cljson.decode.call(null,G__7657));
})());
i = G__7667;
len = G__7668;
out = G__7669;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}

break;
case "m":
var i = (1);
var len = o.length;
var out = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var G__7670 = (i + (2));
var G__7671 = len;
var G__7672 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out,(function (){var G__7658 = (o[i]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7658) : tailrecursion.cljson.decode.call(null,G__7658));
})(),(function (){var G__7659 = (o[(i + (1))]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7659) : tailrecursion.cljson.decode.call(null,G__7659));
})());
i = G__7670;
len = G__7671;
out = G__7672;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}

break;
case "l":
var i = (o.length - (1));
var out = cljs.core.List.EMPTY;
while(true){
if((i > (0))){
var G__7673 = (i - (1));
var G__7674 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,(function (){var G__7660 = (o[i]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7660) : tailrecursion.cljson.decode.call(null,G__7660));
})());
i = G__7673;
out = G__7674;
continue;
} else {
return out;
}
break;
}

break;
case "s":
var i = (1);
var len = o.length;
var out = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
while(true){
if((i < len)){
var G__7675 = (i + (1));
var G__7676 = len;
var G__7677 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(out,(function (){var G__7661 = (o[i]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7661) : tailrecursion.cljson.decode.call(null,G__7661));
})());
i = G__7675;
len = G__7676;
out = G__7677;
continue;
} else {
return cljs.core.persistent_BANG_(out);
}
break;
}

break;
case "k":
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((o[(1)]));

break;
case "y":
var val = (o[(1)]);
var idx = val.indexOf("/");
if((idx < (0))){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(val);
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(val.slice((0),idx),val.slice((idx + (1))));
}

break;
case "z":
var m = (function (){var G__7662 = (o[(1)]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7662) : tailrecursion.cljson.decode.call(null,G__7662));
})();
var v = (function (){var G__7663 = (o[(2)]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7663) : tailrecursion.cljson.decode.call(null,G__7663));
})();
return cljs.core.with_meta(v,m);

break;
default:
var temp__5455__auto__ = (function (){var or__3922__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(cljs.reader._STAR_tag_table_STAR_),tag);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.deref(cljs.reader._STAR_default_data_reader_fn_STAR_);
}
})();
if(cljs.core.truth_(temp__5455__auto__)){
var reader = temp__5455__auto__;
var G__7664 = (function (){var G__7665 = (o[(1)]);
return (tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1 ? tailrecursion.cljson.decode.cljs$core$IFn$_invoke$arity$1(G__7665) : tailrecursion.cljson.decode.call(null,G__7665));
})();
return (reader.cljs$core$IFn$_invoke$arity$1 ? reader.cljs$core$IFn$_invoke$arity$1(G__7664) : reader.call(null,G__7664));
} else {
throw (new Error(["No reader function for tag '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(tag),"'."].join('')));
}

}
});
tailrecursion.cljson.decode = (function tailrecursion$cljson$decode(v){
if(cljs.core.array_QMARK_(v)){
return tailrecursion.cljson.decode_tagged(v);
} else {
return v;
}
});
