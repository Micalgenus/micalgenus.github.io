(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,n){},120:function(e,t,n){"use strict";n.r(t);n(76);var a=n(1),r=n.n(a),o=n(49),c=n.n(o),l=n(16),u=n(17),i=n(19),s=n(18),p=n(20),h=n(122),m=n(123),b=n(124),d=n(121),f=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("header",null,this.props.routers.map(function(e,t){return e.path?r.a.createElement(d.a,{key:t,to:e.path},e.title):null}))}}]),t}(a.Component);f.defaultProps={routers:[]};var j=f,O=(n(118),function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",null,r.a.createElement(j,{routers:this.props.routers}),r.a.createElement("div",{className:"container"},r.a.createElement(a.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(m.a,null,this.props.routers.map(function(e,t){return e.Component?r.a.createElement(b.a,{key:t,exact:e.exact,path:e.path,component:function(t){return r.a.createElement(e.Component,t)}}):null}))))))}}]),t}(a.Component));O.defaultProps={routers:[]};var v=O,E=n(73),y=n(72),w=Object(a.lazy)(function(){return n.e(4).then(n.bind(null,125))}),k=Object(a.lazy)(function(){return n.e(3).then(n.bind(null,126))}),C=Object(a.lazy)(function(){return n.e(5).then(n.bind(null,127))}),g=document.createElement("a");g.href=y.a||"http://localhost:3000";var x="/"===g.pathname?"":g.pathname,z=[{title:"\ud648",Component:w,path:"/",exact:!0},{title:"\uc18c\uac1c",Component:k,path:"/intro"},{title:"\ud504\ub85c\uc81d\ud2b8",Component:C,path:"/projects"}].map(function(e){return Object(E.a)({},e,{path:(t=e.path,x+t)});var t}),B=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement(v,Object.assign({},this.props,{routers:z}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var J=document.getElementById("root");J.hasChildNodes()?c.a.hydrate(r.a.createElement(B,null),J):c.a.render(r.a.createElement(B,null),J),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},72:function(e){e.exports={a:"https://micalgenus.github.io/portfolio"}},75:function(e,t,n){e.exports=n(120)}},[[75,1,2]]]);
//# sourceMappingURL=main.558042b8.chunk.js.map