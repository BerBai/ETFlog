(function(e){function t(t){for(var r,c,a=t[0],i=t[1],s=t[2],p=0,f=[];p<a.length;p++)c=a[p],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(f.length)f.shift()();return u.push.apply(u,s||[]),n()}function n(){for(var e,t=0;t<u.length;t++){for(var n=u[t],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(u.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},o={app:0},u=[];function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/ETFlog/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],i=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=i;u.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("button",{on:{click:function(t){e.runSql("SELECT COUNT(*) FROM sentences")}}},[e._v(" SELECT COUNT(*) FROM mytable ")]),n("button",{on:{click:function(t){return e.runSql("SELECT * FROM sentences")}}},[e._v(" SELECT * FROM mytable ")]),n("pre",[e._v(e._s(e.result))])])},u=[],c=n("1da1"),a=(n("96cf"),n("d3b7"),n("3ca3"),n("ddb0"),n("2b3d"),n("25f0"),n("0c34"));function i(e){var t=n.p,r="";return(!t||t.indexOf("://")<0)&&(r+=window.location.protocol+"//"+window.location.host),r+=t||"/",r+e}var s="/ETFlog/",l=new URL("".concat(s,"sql.js-httpvfs/sqlite.worker.js"),{url:i("src/App.vue?vue&type=script&lang=js&")}.url),p=new URL("".concat(s,"sql.js-httpvfs/sql-wasm.wasm"),{url:i("src/App.vue?vue&type=script&lang=js&")}.url),f={name:"App",components:{},data:function(){return{result:void 0}},mounted:function(){return Object(c["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})))()},created:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(a["createDbWorker"])([{from:"inline",config:{serverMode:"full",url:"".concat(s,"db/ber.db"),requestChunkSize:4096}}],l.toString(),p.toString());case 2:e.worker=t.sent,e.runSql("SELECT name _id FROM sqlite_master WHERE type ='table'");case 4:case"end":return t.stop()}}),t)})))()},methods:{runSql:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.worker.db.query(e);case 2:t.result=n.sent;case 3:case"end":return n.stop()}}),n)})))()}}},d=f,b=(n("034f"),n("2877")),v=Object(b["a"])(d,o,u,!1,null,null,null),w=v.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(w)}}).$mount("#app")},"85ec":function(e,t,n){}});
//# sourceMappingURL=app.8d3bbbe3.js.map