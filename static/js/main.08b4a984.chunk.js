(this["webpackJsonpwiki-react-typescript-practice"]=this["webpackJsonpwiki-react-typescript-practice"]||[]).push([[0],{54:function(e,t,c){},82:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),r=c(21),s=c.n(r),o=c(4),l=(c(54),c(10)),d=c(13),b=c.p+"static/media/logo.e32fe965.png",j=c(14),u=c(17),h=c(12),O=c(6),p=Object(O.a)(),f=new URLSearchParams(p.location.search).get("q")||"",m="SET_SEARCH_FORM_QUERY",x={query:f},v=function(){var e=Object(o.f)(),t=Object(u.b)(),c=Object(u.c)((function(e){return e.searchForm})),i=Object(a.useState)(c.query),r=Object(j.a)(i,2),s=r[0],l=r[1];return Object(n.jsxs)("div",{className:"field has-addons has-addons-centered",children:[Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("input",{className:"input",value:s,onChange:function(e){l(e.target.value)}})}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{className:"button is-primary",onClick:function(){t({type:m,payload:{query:s}}),e.push("/search?q=".concat(s))},children:"Search"})})]})},y=c(11);function g(){var e=Object(l.a)(["\n  .navbar__title {\n    margin-left: 1rem;\n  }\n  .navbar__item-search-form {\n    width: 85%;\n  }\n"]);return g=function(){return e},e}var N=y.a.nav(g()),k=function(){return Object(n.jsx)(N,{className:"navbar is-light",children:Object(n.jsxs)("div",{className:"navbar-brand",children:[Object(n.jsx)(d.b,{to:"/",className:"navbar-item",children:Object(n.jsx)("span",{className:"image is-24x24",children:Object(n.jsx)("img",{className:"is-rounded",src:b,width:"24",height:"24"})})}),Object(n.jsxs)(o.c,{children:["1",Object(n.jsx)(o.a,{path:"/",exact:!0}),Object(n.jsx)(o.a,{children:Object(n.jsx)("div",{className:"navbar__item-search-form navbar-item",children:Object(n.jsx)(v,{})})})]})]})})},w=c(43);function S(){var e=Object(l.a)(["\n  padding: 3rem;\n"]);return S=function(){return e},e}var C=y.a.footer(S()),_=function(){return Object(n.jsx)(C,{className:"footer has-background-light",children:Object(n.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[Object(n.jsx)("p",{className:"control",children:"\xa9\ufe0e2020 biyokoyama"}),Object(n.jsx)("p",{className:"control",children:Object(n.jsxs)("a",{href:"https://github.com/biyokoyama/wiki-react-typescript-practice",target:"_blank",rel:"noreferrer",className:"button is-small",children:[Object(n.jsx)(w.a,{className:"icon",icon:["fab","github"]}),Object(n.jsx)("span",{children:"Github"})]})})]})})},q=function(){return Object(n.jsx)("div",{className:"index",children:Object(n.jsx)("section",{className:"hero is-light is-fullheight",children:Object(n.jsx)("div",{className:"hero-body",children:Object(n.jsxs)("div",{className:"container has-text-centered",children:[Object(n.jsx)("h1",{className:"title",children:"wiki-react-typescript-practice"}),Object(n.jsx)(v,{})]})})})})},F=c(25),R=c.n(F),E=c(44),L=c.n(E),P=[{id:1001,title:"\u30b5\u30f3\u30d7\u30eb\u8a18\u4e8b1\u30bf\u30a4\u30c8\u30eb",body:"\u30b5\u30f3\u30d7\u30eb\u8a18\u4e8b1\u672c\u6587\n\u672c\u6587\n\u672c\u6587\u672c\u6587\n\u672c\u6587\u672c\u6587\u672c\u6587"},{id:1002,title:"\u30b5\u30f3\u30d7\u30eb\u8a18\u4e8b2\u30bf\u30a4\u30c8\u30eb",body:"\u30b5\u30f3\u30d7\u30eb\u8a18\u4e8b2\u672c\u6587\n\u672c\u6587\n\u672c\u6587\u672c\u6587\n\u672c\u6587\u672c\u6587\u672c\u6587"},{id:1003,title:"\u30b5\u30f3\u30d7\u30eb\u8a18\u4e8b3\u30bf\u30a4\u30c8\u30eb",body:"\u30b5\u30f3\u30d7\u30eb\u8a18\u4e8b3\u672c\u6587\n\u672c\u6587\n\u672c\u6587\u672c\u6587\n\u672c\u6587\u672c\u6587\u672c\u6587"}],U=/\/api\/articles\/(\d+)/,I=function(e){var t=e.match(U);return t?parseInt(t[1]):null},T=function(e){return P.find((function(t){return t.id===e}))||null},A=/\/api\/articles(\?.*)?/,G=[function(e){e.onGet(U).reply((function(e){var t=I("".concat(e.url)),c=t?T(t):null;return c?[200,c]:[404]}))},function(e){e.onPut(U).reply((function(e){var t=I("".concat(e.url)),c=t?T(t):null;if(!c)return[404];var n=JSON.parse(e.data);return c.title=n.title,c.body=n.body,[200]}))},function(e){e.onGet(A).reply((function(e){var t=function(e){var t=e.match(A),c=t?new URLSearchParams(t[1]):null;return c&&c.get("q")||""}("".concat(e.url));return[200,P.filter((function(e){return e.title.includes(t)||e.body.includes(t)}))]}))}],J=new URL("https://biyokoyama.github.io/wiki-react-typescript-practice").pathname,B=R.a.create({baseURL:J});(function(e){var t=new L.a(e,{delayResponse:500});G.forEach((function(e){e(t)}))})(B);var D=B,M=c(45),z=c(46),H=function(){function e(t){Object(M.a)(this,e),this.data=void 0,this.data=t}return Object(z.a)(e,[{key:"id",get:function(){return this.data.id}},{key:"path",get:function(){return"/articles/".concat(this.id)}},{key:"title",get:function(){return this.data.title}},{key:"body",get:function(){return this.data.body}}]),e}();function Q(){var e=Object(l.a)(["\n  .box:hover {\n    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);\n    transition: 0.5s;\n  }\n"]);return Q=function(){return e},e}var W=y.a.div(Q()),Y=function(e){return Object(n.jsx)(W,{className:"searched-articles section",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:e.articles.map((function(e){return Object(n.jsxs)(d.b,{to:e.path,className:"box",children:[Object(n.jsx)("p",{className:"subtitle",children:e.title}),Object(n.jsx)("p",{children:e.body})]},e.id)}))})})})},K=function(){var e=Object(u.c)((function(e){return e.searchForm})),t=Object(a.useState)([]),c=Object(j.a)(t,2),i=c[0],r=c[1];return Object(a.useEffect)((function(){D.get("/api/articles?q=".concat(e.query)).then((function(e){r(e.data.map((function(e){return new H(e)})))}))}),[e]),Object(n.jsx)("div",{className:"search has-background-light",children:Object(n.jsx)(Y,{articles:i})})};function V(){var e=Object(l.a)(["\n  .article-content__body-paragraph {\n    white-space: pre-wrap;\n  }\n"]);return V=function(){return e},e}var X=y.a.div(V()),Z=function(e){var t=Object(a.useState)(!1),c=Object(j.a)(t,2),i=c[0],r=c[1],s={title:"",body:""},o=Object(a.useState)(s),l=Object(j.a)(o,2),d=l[0],b=l[1];return Object(n.jsxs)(X,{className:"article-content content",children:[Object(n.jsxs)("div",{className:"field is-grouped",children:[Object(n.jsxs)("div",{className:"control is-expanded",children:[!i&&Object(n.jsx)("h1",{className:"title",children:e.article.title}),i&&Object(n.jsx)("input",{type:"text",className:"input",placeholder:"title here",value:d.title,onChange:function(e){b(Object(h.a)(Object(h.a)({},d),{},{title:e.target.value}))}})]}),Object(n.jsx)("div",{className:"control",children:Object(n.jsxs)("div",{className:"buttons is-right",children:[!i&&Object(n.jsx)("button",{className:"button",onClick:function(){b({title:e.article.title,body:e.article.body}),r(!i)},children:"Edit"}),i&&Object(n.jsx)("button",{className:"button is-primary",onClick:function(){e.saveArticleContentForm(d),r(!i)},children:"Save"}),i&&Object(n.jsx)("button",{className:"button",onClick:function(){b(s),r(!i)},children:"Cancel"})]})})]}),Object(n.jsx)("div",{className:"field",children:Object(n.jsxs)("div",{className:"control",children:[!i&&Object(n.jsx)("p",{className:"article-content__body-paragraph",children:e.article.body}),i&&Object(n.jsx)("textarea",{className:"textarea has-fixed-size",placeholder:"body here",value:d.body,onChange:function(e){b(Object(h.a)(Object(h.a)({},d),{},{body:e.target.value}))}})]})})]})},$=function(){var e=Object(o.g)(),t=parseInt(e.id),c=new H({id:t,title:"",body:""}),i=Object(a.useState)(c),r=Object(j.a)(i,2),s=r[0],l=r[1];Object(a.useEffect)((function(){D.get("/api/articles/".concat(t)).then((function(e){l(new H(e.data))}))}),[]);return Object(n.jsx)("div",{className:"articles-id",children:Object(n.jsx)("div",{className:"section",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(Z,{article:s,saveArticleContentForm:function(e){D.put("/api/articles/".concat(t),e).then((function(){l(new H(Object(h.a)({id:t},e)))}))}})})})})};function ee(){var e=Object(l.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n\n  & > div {\n    flex: 1;\n  }\n"]);return ee=function(){return e},e}var te=y.a.div(ee()),ce=function(){return Object(n.jsx)(te,{id:"app",className:"app",children:Object(n.jsxs)(d.a,{basename:J,children:[Object(n.jsx)(k,{}),Object(n.jsx)(o.a,{exact:!0,path:"/",component:q}),Object(n.jsx)(o.a,{exact:!0,path:"/search",component:K}),Object(n.jsx)(o.a,{exact:!0,path:"/articles/:id",component:$}),Object(n.jsx)(_,{})]})})},ne=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,83)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),i(e),r(e)}))},ae=c(18),ie=c(47);ae.b.add(ie.a);var re=c(19),se=c(48),oe=Object(re.combineReducers)({searchForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(h.a)(Object(h.a)({},e),{},{query:t.payload.query});default:return e}}}),le=Object(re.createStore)(oe,Object(se.composeWithDevTools)());s.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(u.a,{store:le,children:Object(n.jsx)(o.b,{history:p,children:Object(n.jsx)(ce,{})})})}),document.getElementById("root")),ne()}},[[82,1,2]]]);
//# sourceMappingURL=main.08b4a984.chunk.js.map