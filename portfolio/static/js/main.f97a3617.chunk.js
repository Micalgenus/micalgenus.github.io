(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);n(76);var a=n(0),r=n.n(a),o=n(49),c=n.n(o),l=n(16),u=n(17),i=n(19),s=n(18),p=n(20),h=n(122),m=n(123),d=n(124),b=n(121),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,r.a.createElement("div",{className:"blur"}),r.a.createElement("div",null,r.a.createElement(b.a,{to:"/"},"GyeongSu Han's Portfolio")),r.a.createElement("nav",null,this.props.routers.map(function(e,t){return e.path&&"/"!==e.path?r.a.createElement(b.a,{key:t,to:e.path},e.title):null})))}}]),t}(a.Component);f.defaultProps={routers:[]};n(118);var j=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(f,{routers:this.props.routers}),r.a.createElement("div",{className:"container"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(m.a,null,this.props.routers.map(function(e,t){return e.Component?r.a.createElement(d.a,{key:t,exact:e.exact,path:e.path,component:function(t){return r.a.createElement(e.Component,t)}}):null}))))))}}]),t}(a.Component);j.defaultProps={routers:[]};var E=j,v=n(73),O=n(72),y=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,125))}),w=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,126))}),k=document.createElement("a");k.href=O.a||"http://localhost:3000";var g="/"===k.pathname?"":k.pathname,C=[{title:"\ud648",Component:y,path:"/",exact:!0},{title:"\ud504\ub85c\uc81d\ud2b8",Component:w,path:"/projects"}].map(function(e){return Object(v.a)({},e,{path:(t=e.path,g+t)});var t}),x=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(E,Object.assign({},this.props,{routers:C}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var N=document.getElementById("root");N.hasChildNodes()?c.a.hydrate(r.a.createElement(x,null),N):c.a.render(r.a.createElement(x,null),N),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e){e.exports={a:"https://micalgenus.github.io/portfolio"}},75:function(e,t,n){e.exports=n(120)}},[[75,1,2]]]);
//# sourceMappingURL=main.f97a3617.chunk.js.map