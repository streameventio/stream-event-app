(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(2),c=n.n(r),i=(n(12),n(3)),l=n(4),s=n(5),u=n(6),h=(n(13),function(e){Object(u.a)(n,e);var t=Object(s.a)(n);function n(e){var o;return Object(i.a)(this,n),(o=t.call(this,e)).state={flower:{}},o.getFlower(),o}return Object(l.a)(n,[{key:"getFlower",value:function(){var e=this;fetch("/flower").then((function(e){return e.json()})).then((function(t){e.setState({flower:t})}))}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("h1",null,this.state.flower.name),a.a.createElement("p",null,this.state.flower.colour))}}]),n}(o.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.304f1cec.chunk.js.map