(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{344:function(e){e.exports=[{category:"\ud55c\uacbd\uc218",links:[{icon:"mail",color:"black",href:"mailto:micalgenus@gmail.com"},{icon:"github",color:"black",href:"https://github.com/micalgenus/"},{icon:"linkedin",color:"blue",href:"https://linkedin.com/in/gyeong-su-han/"},{icon:"edit",color:"grey",href:"https://micalgenus.github.io/"}],description:"\uc8fc\ub85c Node.js\ub97c \uc0ac\uc6a9\ud558\uc5ec \uac1c\ubc1c\uc744 \ud558\uace0\uc788\ub294 \uc2e0\uc785 \ubc31\uc5d4\ub4dc\uac1c\ubc1c\uc790 \uc785\ub2c8\ub2e4. \ud604\uc7ac DevOps\uc5d0 \uad00\uc2ec\uc774 \ub9ce\uc2b5\ub2c8\ub2e4."},{category:"Work Experience",items:[{title:"\ubaa8\ube4c\ub9ac\ud2f0\ub7a9",links:[{icon:"github",color:"black",href:"https://github.com/micalgenus/vgram-web"},{icon:"github",color:"black",href:"https://github.com/micalgenus/vgram-app"},{icon:"github",color:"black",href:"https://github.com/micalgenus/vgram-image-server"}],date:"2016.12. ~ 2017.12.",description:"VR \ubbf8\ub514\uc5b4\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc778\ud14c\ub9ac\uc5b4 \uc5c5\uc790\uc640 \uac74\ubb3c\uc8fc\ub97c \uc5f0\uacb0\uc2dc\ucf1c \uc8fc\ub294 \uc6f9/\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158 \uac1c\ubc1c"}]},{category:"Projects",items:[{title:"\ud478\ub4dc\uc138\uc77c O2O \uc8fc\ubb38 \ucc57\ubd07 - \ubb34\ubc14",links:[{icon:"github",color:"black",href:"https://github.com/MubaBot/"}],description:"\uc789\uc5ec \uc74c\uc2dd\uc744 \ud6a8\uc728\uc801\uc73c\ub85c \ucc98\ub9ac\ud558\uace0 \uc18c\ube44\uc790\ub4e4\uc5d0\uac8c \uc2e0\uc120\ud55c \uc74c\uc2dd\uc744 \uc81c\uacf5\ud558\ub294 \ud478\ub4dc\uc138\uc77c \ud50c\ub7ab\ud3fc."},{title:"\uc2ec\ub9ac\uc0c1\ub2f4\uc13c\ud130",links:[{icon:"home",color:"black",href:"https://jjrodem.org/"}],description:"2017 SW \uc7ac\ub2a5\uae30\ubd80 \ucc4c\ub9b0\uc9c0 \uc9c0\uc6d0\uc73c\ub85c \uc9c4\ud589\ub41c \ud504\ub85c\uc81d\ud2b8\ub85c \uc2ec\ub9ac\uc0c1\ub2f4\uc13c\ud130\ub97c \uc6b4\uc601\ud558\uc2dc\ub294 \uc18c\uc0c1\uacf5\uc778\uc744 \uc704\ud55c \ud648\ud398\uc774\uc9c0 \ubc0f \uc0c1\ub2f4 \ud658\uacbd \uad6c\ucd95."}]},{category:"Educations",items:[{title:"Software Maestro 9th.",links:[{icon:"home",color:"black",href:"http://swmaestro.kr/"}],date:"2018. 06. ~ 2018. 12."}]},{category:"Toy Projects",items:[{title:"Portfolio",links:[{icon:"home",color:"black",href:"https://portfolio.micalgenus.com/"},{icon:"github",color:"black",href:"https://github.com/micalgenus/portfolio"},{icon:"docker",color:"blue",href:"https://hub.docker.com/r/micalgenus/portfolio"}],description:"GCP + Travis-ci + Docker \ud658\uacbd\uc5d0\uc11c React + DevOps\uac1c\ubc1c \uacf5\ubd80"}]},{category:"Contributes",items:[{title:"XpressEngine",links:[{icon:"linkify",color:"black",href:"https://github.com/xpressengine/xe-core/commits?author=micalgenus"}]}]},{category:"Others",items:[{title:"Github Page Blog",links:[{icon:"home",color:"black",href:"https://micalgenus.github.io/"}]}]}]},345:function(e,t,n){"use strict";n.r(t);var o=n(3),c=n(7),r=n(5),i=n(4),a=n(6),l=n(0),s=n.n(l),u=function(e){function t(){var e,n;Object(o.a)(this,t);for(var c=arguments.length,a=new Array(c),l=0;l<c;l++)a[l]=arguments[l];return(n=Object(r.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(a)))).componentDidMount=function(){n.props.endLoadPage&&"function"===typeof n.props.endLoadPage&&n.props.endLoadPage(n.props.link)},n}return Object(a.a)(t,e),t}(l.Component),h=n(343),p=n(52),m=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.href,n=e.icon,o=e.color;return s.a.createElement(p.a,{href:t},s.a.createElement(h.a,{name:n,color:o,size:"small"}))}}]),t}(l.Component);m.defaultProps={icon:"bug",color:"black"};var b=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return this.props.links.map(function(e,t){return s.a.createElement(m,{key:t,icon:e.icon,color:e.color,href:e.href})})}}]),t}(l.Component);b.defaultProps={links:[]};var f=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.category,n=e.description,o=e.children,c=e.links;return s.a.createElement("div",null,s.a.createElement("h1",null,t,s.a.createElement(b,{links:c})),n?s.a.createElement("p",null,n):null,o)}}]),t}(l.Component),g=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.links,o=e.date,c=e.description;return s.a.createElement("div",null,s.a.createElement("h3",null,t,s.a.createElement(b,{links:n})),o?s.a.createElement("p",null,o):null,c?s.a.createElement("p",null,c):null)}}]),t}(l.Component),k=n(344);n.d(t,"default",function(){return d});var d=function(e){function t(){return Object(o.a)(this,t),Object(r.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(a.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return k.map(function(e,t){return s.a.createElement(f,{key:t,category:e.category,description:e.description,links:e.links},e.items&&e.items.map(function(e,t){return s.a.createElement(g,Object.assign({key:t},e))}))})}}]),t}(u)}}]);
//# sourceMappingURL=3.f7bc15e2.chunk.js.map