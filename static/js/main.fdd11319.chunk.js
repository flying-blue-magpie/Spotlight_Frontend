(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{134:function(e,n,t){e.exports=t(388)},143:function(e,n,t){},150:function(e,n,t){},388:function(e,n,t){"use strict";t.r(n);var a=t(2),r=t.n(a),o=t(108),c=t.n(o),i=t(130),l=t(110),u=(t(143),t(121)),d=t(122),p=t(131),s=t(123),m=t(132),g=t(50),v=t(51),f=function(){return"\n  width: 100%;\n  max-width: ".concat(1024,"px;\n")};function h(){var e=Object(g.a)(["\n  background: yellow;\n  ","\n"]);return h=function(){return e},e}var b=v.a.div(h(),f()),E=function(){return r.a.createElement(b,null,"Header")},y=t(55),j=t(32),w=Object(j.a)({basename:"/Spotlight_Frontend"}),O=function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Page1"))},_=function(){return r.a.createElement("div",null,"Page2")},x="/1",k="/2",S=function(){return r.a.createElement(y.b,{history:w},r.a.createElement(y.c,null,r.a.createElement(y.a,{exact:!0,path:x,component:O}),r.a.createElement(y.a,{exact:!0,path:k,component:_})))};function T(){var e=Object(g.a)(["\n  background: yellow;\n  ","\n"]);return T=function(){return e},e}var P=v.a.div(T(),f()),I=function(){return r.a.createElement(P,null,r.a.createElement(S,null))};function J(){var e=Object(g.a)(["\n  background: yellow;\n  ","\n"]);return J=function(){return e},e}var N=v.a.div(J(),f()),B=function(){var e=function(e){var n=function(e,n){for(var t=e.currentTarget,a=e.target,r=a.getAttribute(n);a!==t&&!r&&null!==(a=a.parentElement);)r=a.getAttribute(n);return r}(e,"data-page");w.push(n)};return r.a.createElement(N,null,r.a.createElement("button",{"data-page":"1",onClick:e},"Page1"),r.a.createElement("button",{"data-page":"2",onClick:e},"Page2"))};function C(){var e=Object(g.a)(["\n  display: grid;\n  grid-template-rows: ","px auto ",'px;\n  grid-template-areas:\n    "header"\n    "content"\n    "navigation";\n\n  height: 100vh;\n  .spot-light__header-container {\n    grid-area: header;\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n  }\n  .spot-light__content-container {\n    grid-area: content;\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n  }\n  .spot-light__navigation-container {\n    grid-area: navigation;\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n  }\n']);return C=function(){return e},e}var A=v.a.div(C(),50,50),F=function(){return r.a.createElement(A,null,r.a.createElement("div",{className:"spot-light__header-container"},r.a.createElement(E,null)),r.a.createElement("div",{className:"spot-light__content-container"},r.a.createElement(I,null)),r.a.createElement("div",{className:"spot-light__navigation-container"},r.a.createElement(B,null)))},H=(t(150),function(e){function n(){return Object(u.a)(this,n),Object(p.a)(this,Object(s.a)(n).apply(this,arguments))}return Object(m.a)(n,e),Object(d.a)(n,[{key:"render",value:function(){return r.a.createElement(F,null)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var M=t(109),W=t(60),G=t(82),L=t(127),R=Object(W.fromJS)({});var $=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R;return(arguments.length>1?arguments[1]:void 0).type,e};var q=t(129),z=t(391),D=t(392),K=t(128),Q="".concat("SPOT_LIGHT","/INIT"),U=[function(e,n){return e.ofType(Q).switchMap(function(){return K.Observable.empty()})}],V=Object(M.a)(U);var X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(arguments.length>1&&arguments[1],new q.BehaviorSubject(z.a.apply(void 0,Object(M.a)(V)))),t=Object(D.a)(),a=[t],r=[G.a.apply(void 0,a)],o=G.c,c=Object(G.d)(Object(L.combineReducers)({spotlight:$}),Object(W.fromJS)(e),o.apply(void 0,r));return t.run(function(e,t,a){return n.mergeMap(function(n){return n(e,t,a).catch(function(e,n){return setTimeout(function(){throw e},0),n})})}),c}();c.a.render(r.a.createElement(i.a,{store:X},r.a.createElement(l.a,{basename:"/Spotlight_Frontend"},r.a.createElement(H,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[134,1,2]]]);
//# sourceMappingURL=main.fdd11319.chunk.js.map