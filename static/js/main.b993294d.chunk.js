(this["webpackJsonpbots-rolodex"]=this["webpackJsonpbots-rolodex"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),o=n.n(c),s=n(3),a=n.n(s),r=(n(12),n(4)),i=n(5),h=n(7),l=n(6),u=(n(13),n(14),n(0)),d=function(e){return Object(u.jsxs)("div",{className:"card",children:[Object(u.jsx)("img",{src:"https://robohash.org/".concat(e.bot.id,"?set=set1&size?180\xd7180"),alt:e.bot.id}),Object(u.jsx)("h2",{children:e.bot.name}),Object(u.jsx)("h3",{children:e.bot.email})]})},b=function(e){return Object(u.jsx)("div",{className:"card-list",children:e.bots.map((function(e){return Object(u.jsx)(d,{bot:e},e.id)}))})},j=(n(16),n(17),function(e){var t=e.placeHolder,n=e.handleChange;return Object(u.jsx)("input",{className:"search",type:"search",placeholder:t,onChange:n})}),f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e,c){var o;return Object(r.a)(this,n),(o=t.call(this,e,c)).handleChange=function(e){o.setState({searchField:e.target.value})},o.state={bots:[],searchField:""},o}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("http://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({bots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.bots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("h1",{children:"Bots Rolodex"}),Object(u.jsx)(j,{placeHolder:"Search bots",handleChange:this.handleChange}),Object(u.jsx)(b,{name:"hello",bots:c})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,o=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),o(e),s(e),a(e)}))};a.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.b993294d.chunk.js.map