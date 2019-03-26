(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{135:function(e,n,t){e.exports=t(389)},144:function(e,n,t){},151:function(e,n,t){},389:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),c=t(109),i=t.n(c),l=t(131),o=t(49),u=(t(144),t(122)),p=t(123),s=t(132),m=t(124),d=t(133),f=t(115),g=Object(a.createContext)(),h=g.Provider,v=g.Consumer,b={SpotlightProvider:function(e){var n=e.children,t=function(){var e=Object(a.useState)(""),n=Object(f.a)(e,2),t=n[0],r=n[1],c=Object(a.useState)(!0),i=Object(f.a)(c,2);return{headerTitle:t,setHeaderTitle:r,isNavVisible:i[0],setIsNavVisible:i[1]}}();return r.a.createElement(h,{value:t},n)},SpotlightConsumer:v,SpotlightContext:g},E=t(10),x=t(11),y="\u63a2\u7d22\u666f\u9ede",j="\u8a08\u756b\u65c5\u7a0b",_="\u65c5\u904a\u7246",P="\u6211\u7684",w="\u7de8\u8f2f\u65c5\u7a0b",O="\u4fee\u6539\u65c5\u7a0b",k=function(){return"\n  width: 100%;\n  max-width: ".concat(1024,"px;\n")},N=t(56),z=t(34),S=Object(z.a)({basename:"/Spotlight_Frontend"});function C(){var e=Object(E.a)(["\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  position: relative;\n  font-size: 20px;\n\n  .header-container__icon-wrapper {\n    position: absolute;\n    margin: 0px 6px;\n  }\n  .icon-style {\n    color: white;\n    margin: 0px 8px;\n    cursor: pointer;\n    font-size: 18px;\n  }\n  .icon-transition {\n    transform: rotate(90deg);\n  }\n  .icon-right {\n    right: 0;\n  }\n  .icon-left {\n    left: 0;\n  }\n"]);return C=function(){return e},e}var T=x.a.div(C()),D=function(){return r.a.createElement(T,null,"\u767b\u5165")},I=function(){return r.a.createElement(T,null,y)},V=function(){return r.a.createElement(T,null,r.a.createElement("div",null,j),r.a.createElement("div",{className:"header-container__icon-wrapper icon-right"},r.a.createElement("i",{className:"fas fa-exchange-alt icon-style icon-transition"}),r.a.createElement("i",{className:"fas fa-plus icon-style"})))},W=function(){return r.a.createElement(T,null,_)},A=function(){return r.a.createElement(T,null,P)};function J(){var e=Object(E.a)(["\n  ","\n  display: flex;\n  justify-content: space-between;\n"]);return J=function(){return e},e}function M(){var e=Object(E.a)(["\n  ","\n  line-height: 1.5;\n  background-color: lightgray;\n  font-size: 16px;\n"]);return M=function(){return e},e}function B(){var e=Object(E.a)(["\n  ","\n  border: solid 1px lightgray;\n  font-size: 16px;\n"]);return B=function(){return e},e}function F(){var e=Object(E.a)(["\n  ","\n  margin-top: 24px;\n  border: solid 1px lightgray;\n  font-size: 16px;\n"]);return F=function(){return e},e}var H="\n  width: 300px;\n  display: block;\n  margin: 0 auto 24px;\n",L=x.a.input(F(),H),R=x.a.input(B(),H),U=x.a.button(M(),H),G=x.a.div(J(),H),$=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(L,{placeholder:"\u8f38\u5165\u96fb\u5b50\u4fe1\u7bb1/\u7528\u6236\u540d"}),r.a.createElement(R,{placeholder:"\u8f38\u5165\u5bc6\u78bc"}),r.a.createElement(G,null,r.a.createElement("label",null,r.a.createElement("input",{id:"remember-password",type:"checkbox"}),"\u8a18\u4f4f\u5bc6\u78bc"),r.a.createElement("label",null,r.a.createElement("input",{id:"auto-login",type:"checkbox"}),"\u81ea\u52d5\u767b\u5165")),r.a.createElement(U,null,"\u767b\u5165"),r.a.createElement(G,null,r.a.createElement(o.b,null,"\u7acb\u5373\u8a3b\u518a"),r.a.createElement(o.b,null,"\u5fd8\u8a18\u5bc6\u78bc\uff1f")))};function q(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n"]);return q=function(){return e},e}function K(){var e=Object(E.a)(["\n  display: inline-block;\n  padding: 6px 12px;\n  background: lightgray;\n"]);return K=function(){return e},e}function Q(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: center;\n  margin-top: 36px;\n"]);return Q=function(){return e},e}function X(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 6px;\n  background: lightgray;\n"]);return X=function(){return e},e}function Y(){var e=Object(E.a)(["\n  width: 300px;\n  height: 300px;\n  object-fit: cover;\n"]);return Y=function(){return e},e}function Z(){var e=Object(E.a)(["\n  display: block;\n"]);return Z=function(){return e},e}function ee(){var e=Object(E.a)(["\n  padding-top: 36px;\n"]);return ee=function(){return e},e}var ne=x.a.div(ee()),te=x.a.div(Z()),ae=x.a.img(Y()),re=x.a.div(X()),ce=x.a.div(Q()),ie=x.a.button(K()),le=x.a.div(q()),oe=function(){return r.a.createElement(ne,null,r.a.createElement(le,null,r.a.createElement(te,null,r.a.createElement(ae,{src:"https://www.telegraph.co.uk/content/dam/Travel/2017/May/taipei-night-market.jpg?imwidth=450"}),r.a.createElement(re,null,"\u53f0\u5317101",r.a.createElement("i",{class:"fas fa-heart"},"666")))),r.a.createElement(ce,null,r.a.createElement(ie,null,"\u8df3\u904e"),r.a.createElement(ie,null,"\u8a73\u7d30"),r.a.createElement(ie,null,"\u60f3\u53bb")))};function ue(){var e=Object(E.a)(['\n  margin-top: 10px;\n  position: relative;\n  cursor: pointer;\n  .project-card__cover {\n    background-image: url("https://www.telegraph.co.uk/content/dam/Travel/2017/May/taipei-night-market.jpg?imwidth=450");\n    background-size: cover;\n    height: 160px;\n    width: 100%;\n  }\n  .project-card__body {\n    background: white;\n    position: absolute;\n    width: 100%;\n    bottom: 0;\n    opacity: 0.9;\n    padding: 8px 10px;\n  }\n  .project-card__body-title {\n    font-size: 14px;\n  }\n  .project-card__body-content {\n    font-size: 12px;\n  }\n']);return ue=function(){return e},e}var pe=x.a.div(ue()),se=function(e){var n=e.title,t=e.id,c=Object(a.useCallback)(function(){var e="/".concat(w);S.push({pathname:"".concat(e,"/").concat(t)})},[t]);return r.a.createElement(pe,{onClick:c},r.a.createElement("div",{className:"project-card__cover"},r.a.createElement("div",{className:"project-card__body"},r.a.createElement("div",{className:"project-card__body-title"},n),r.a.createElement("div",{className:"project-card__body-content"},"2019\u5e746\u67085\u65e5-2019\u5e746\u67089\u65e5 / 4\u5929"))))};function me(){var e=Object(E.a)(["\n  padding: 0px 28px;\n  overflow: scroll;\n"]);return me=function(){return e},e}var de=x.a.div(me()),fe=function(){var e=new Array(10).fill(0).map(function(e,n){return n});return r.a.createElement(de,null,e.map(function(e){return r.a.createElement(se,{key:e,id:e,title:"\u53f0\u5317\u8cfc\u7269\u4e4b\u65c5"})}))},ge=function(){return r.a.createElement("div",null,"TravelWallPage")},he=function(){return r.a.createElement("div",null,r.a.createElement(o.b,{to:"/"},"\u767b\u51fa"))};function ve(){var e=Object(E.a)(["\n  border-right: 1px solid #ccc;\n  width: 70px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  color: #707070;\n  cursor: pointer;\n  &:hover {\n    border-bottom: 3px solid #707070;\n    box-sizing: border-box;\n  }\n  .tab__date {\n    font-size: 12px;\n  }\n  .tab__number {\n    font-size: 14px;\n  }\n"]);return ve=function(){return e},e}var be=x.a.div(ve()),Ee=function(e){var n=e.id,t=e.location;return r.a.createElement(be,{onClick:function(){S.push({pathname:"".concat(t.pathname),search:"?day=".concat(n+1)})}},r.a.createElement("div",{className:"tab__date"},"6/".concat(n+5)),r.a.createElement("div",{className:"tab__number"},"\u7b2c",n+1,"\u5929"))};function xe(){var e=Object(E.a)(["\n  background: lightgray;\n  height: 42px;\n  display: flex;\n"]);return xe=function(){return e},e}var ye=x.a.div(xe()),je=function(e){var n=new Array(4).fill(0).map(function(e,n){return n});return r.a.createElement(ye,null,n.map(function(n){return r.a.createElement(Ee,Object.assign({key:n,id:n},e))}))},_e=function(e){var n=e.location,t=new URLSearchParams(n.search).get("day");return r.a.createElement("div",null,"Day",t)};function Pe(){var e=Object(E.a)(["\n  .edit-planning__cover {\n    background: lightgray;\n    height: 70px;\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    padding: 8px 16px;\n    .edit-planning__cover-title {\n      font-size: 18px;\n      padding: 10px 0px;\n    }\n    .edit-planning__cover-period {\n      font-size: 12px;\n    }\n    .icon__pen {\n      font-size: 14px;\n      margin: 0px 10px;\n    }\n  }\n"]);return Pe=function(){return e},e}var we=x.a.div(Pe()),Oe=function(e){return r.a.createElement(we,null,r.a.createElement("div",{className:"edit-planning__cover"},r.a.createElement("div",{className:"edit-planning__cover-title"},r.a.createElement("span",null,"\u53f0\u5317\u8cfc\u7269\u4e4b\u65c5"),r.a.createElement("i",{className:"fas fa-pen icon__pen"})),r.a.createElement("div",{className:"edit-planning__cover-period"},"2019\u5e746\u67085\u65e5-2019\u5e746\u67088\u65e5 / 4\u5929")),r.a.createElement(je,e),r.a.createElement(_e,e))},ke=function(){return r.a.createElement("div",null,"UpdatePlanningPage")},Ne={login:"/",explorePagePath:"/".concat(y),planningPagePath:"/".concat(j),travelWallPagePath:"/".concat(_),personalPagePath:"/".concat(P),editPlanningPagePath:"/".concat(w,"/:projectId"),updatePlanningPagePath:"/".concat(O)},ze=function(){return r.a.createElement(N.b,{history:S},r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:Ne.login,component:$}),r.a.createElement(N.a,{exact:!0,path:Ne.explorePagePath,component:oe}),r.a.createElement(N.a,{exact:!0,path:Ne.planningPagePath,component:fe}),r.a.createElement(N.a,{exact:!0,path:Ne.travelWallPagePath,component:ge}),r.a.createElement(N.a,{exact:!0,path:Ne.personalPagePath,component:he}),r.a.createElement(N.a,{exact:!0,path:Ne.editPlanningPagePath,component:Oe}),r.a.createElement(N.a,{exact:!0,path:Ne.updatePlanningPagePath,component:ke})))},Se=b.SpotlightContext,Ce=function(){var e=Object(a.useContext)(Se).setIsNavVisible;Object(a.useEffect)(function(){return e(!1),function(){e(!0)}});var n=Object(a.useCallback)(function(){S.push(Ne.planningPagePath)},[]);return r.a.createElement(T,null,r.a.createElement("div",{className:"header-container__icon-wrapper icon-left"},r.a.createElement("i",{className:"fas fa-arrow-left icon-style",onClick:n})),r.a.createElement("div",null,w),r.a.createElement("div",{className:"header-container__icon-wrapper icon-right"},r.a.createElement("i",{className:"fas fa-exchange-alt icon-style icon-transition"}),r.a.createElement("i",{className:"fas fa-check icon-style"})))},Te=function(){return r.a.createElement(T,null,O)},De=function(){return r.a.createElement(N.b,{history:S},r.a.createElement(N.c,null,r.a.createElement(N.a,{exact:!0,path:Ne.login,component:D}),r.a.createElement(N.a,{exact:!0,path:Ne.explorePagePath,component:I}),r.a.createElement(N.a,{exact:!0,path:Ne.planningPagePath,component:V}),r.a.createElement(N.a,{exact:!0,path:Ne.travelWallPagePath,component:W}),r.a.createElement(N.a,{exact:!0,path:Ne.personalPagePath,component:A}),r.a.createElement(N.a,{exact:!0,path:Ne.editPlanningPagePath,component:Ce}),r.a.createElement(N.a,{exact:!0,path:Ne.updatePlanningPagePath,component:Te})))};function Ie(){var e=Object(E.a)(["\n  background: lightgray;\n  ","\n"]);return Ie=function(){return e},e}var Ve=x.a.div(Ie(),k()),We=function(){return r.a.createElement(Ve,null,r.a.createElement(De,null))};function Ae(){var e=Object(E.a)(["\n  ","\n"]);return Ae=function(){return e},e}var Je=x.a.div(Ae(),k()),Me=function(){return r.a.createElement(Je,null,r.a.createElement(ze,null))};function Be(){var e=Object(E.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  background: #D3D3D3;\n  font-size: 12px;\n  width: 100%;\n  cursor: pointer;\n  &:hover {\n    background: #D3D3D380;\n  }\n\n  .nav-tab__image {\n    height: 30px;\n    width: 30px;\n    margin: 2px;\n  }\n"]);return Be=function(){return e},e}var Fe=x.a.div(Be()),He=function(e){var n=e.title;return r.a.createElement(Fe,{"data-page-path":n,onClick:function(e){var n=function(e,n){for(var t=e.currentTarget,a=e.target,r=a.getAttribute(n);a!==t&&!r&&null!==(a=a.parentElement);)r=a.getAttribute(n);return r}(e,"data-page-path");S.push(n)}},r.a.createElement("img",{className:"nav-tab__image",src:"https://freeiconshop.com/wp-content/uploads/edd/bulb-curvy-flat.png",alt:""}),r.a.createElement("div",null,n))};function Le(){var e=Object(E.a)(["\n  display: flex;\n  justify-content: space-around;\n  ","\n"]);return Le=function(){return e},e}var Re=x.a.div(Le(),k()),Ue=function(){return r.a.createElement(Re,null,r.a.createElement(He,{title:y}),r.a.createElement(He,{title:j}),r.a.createElement(He,{title:_}),r.a.createElement(He,{title:P}))};function Ge(){var e=Object(E.a)(["\n  display: grid;\n  ",'\n  grid-template-areas:\n    "header"\n    "content"\n    "navigation";\n\n  height: 100vh;\n  .spot-light__header-container {\n    grid-area: header;\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n  }\n  .spot-light__content-container {\n    grid-area: content;\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n    overflow-y: scroll;\n  }\n  .spot-light__navigation-container {\n    grid-area: navigation;\n    border: 1px solid grey;\n    display: flex;\n    justify-content: center;\n  }\n']);return Ge=function(){return e},e}var $e=x.a.div(Ge(),function(e){return e.isNavVisible?"grid-template-rows: ".concat(50,"px auto ").concat(60,"px;"):"grid-template-rows: ".concat(50,"px auto 0px")}),qe=b.SpotlightProvider,Ke=b.SpotlightConsumer,Qe=function(){return r.a.createElement(qe,null,r.a.createElement(Ke,null,function(e){var n=e.isNavVisible;return r.a.createElement($e,{isNavVisible:n},r.a.createElement("div",{className:"spot-light__header-container"},r.a.createElement(We,null)),r.a.createElement("div",{className:"spot-light__content-container"},r.a.createElement(Me,null)),n&&r.a.createElement("div",{className:"spot-light__navigation-container"},r.a.createElement(Ue,null)))}))},Xe=(t(151),function(e){function n(){return Object(u.a)(this,n),Object(s.a)(this,Object(m.a)(n).apply(this,arguments))}return Object(d.a)(n,e),Object(p.a)(n,[{key:"render",value:function(){return r.a.createElement(Qe,null)}}]),n}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ye=t(110),Ze=t(61),en=t(83),nn=t(128),tn=Object(Ze.fromJS)({});var an=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:tn;return(arguments.length>1?arguments[1]:void 0).type,e};var rn=t(130),cn=t(392),ln=t(393),on=t(129),un="".concat("SPOT_LIGHT","/INIT"),pn=[function(e,n){return e.ofType(un).switchMap(function(){return on.Observable.empty()})}],sn=Object(Ye.a)(pn);var mn=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=(arguments.length>1&&arguments[1],new rn.BehaviorSubject(cn.a.apply(void 0,Object(Ye.a)(sn)))),t=Object(ln.a)(),a=[t],r=[en.a.apply(void 0,a)],c=en.c,i=Object(en.d)(Object(nn.combineReducers)({spotlight:an}),Object(Ze.fromJS)(e),c.apply(void 0,r));return t.run(function(e,t,a){return n.mergeMap(function(n){return n(e,t,a).catch(function(e,n){return setTimeout(function(){throw e},0),n})})}),i}();i.a.render(r.a.createElement(l.a,{store:mn},r.a.createElement(o.a,{basename:"/Spotlight_Frontend"},r.a.createElement(Xe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[135,1,2]]]);
//# sourceMappingURL=main.71ea9ca6.chunk.js.map