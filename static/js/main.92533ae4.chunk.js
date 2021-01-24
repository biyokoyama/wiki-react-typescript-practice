(this["webpackJsonpwiki-react-typescript-practice"]=this["webpackJsonpwiki-react-typescript-practice"]||[]).push([[0],{53:function(e,t,c){},81:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c(0),i=c.n(a),s=c(21),r=c.n(s),l=c(4),o=(c(53),c(10)),j=c(13),b=c.p+"static/media/logo.e32fe965.png",d=c(14),u=c(17),h=c(12),O=c(6),x=Object(O.a)(),m=new URLSearchParams(x.location.search).get("q")||"",p="SET_SEARCH_FORM_QUERY",f={query:m},v=function(){var e=Object(l.f)(),t=Object(u.b)(),c=Object(u.c)((function(e){return e.searchForm})),i=Object(a.useState)(c.query),s=Object(d.a)(i,2),r=s[0],o=s[1];return Object(n.jsxs)("div",{className:"field has-addons has-addons-centered",children:[Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("input",{className:"input",value:r,onChange:function(e){o(e.target.value)}})}),Object(n.jsx)("div",{className:"control",children:Object(n.jsx)("button",{className:"button is-primary",onClick:function(){t({type:p,payload:{query:r}}),e.push("/search?q=".concat(r))},children:"Search"})})]})},g=c(11);function N(){var e=Object(o.a)(["\n  .navbar__title {\n    margin-left: 1rem;\n  }\n  .navbar__item-search-form {\n    width: 85%;\n  }\n"]);return N=function(){return e},e}var y=g.a.nav(N()),k=function(){return Object(n.jsx)(y,{className:"navbar is-light",children:Object(n.jsxs)("div",{className:"navbar-brand",children:[Object(n.jsx)(j.b,{to:"/",className:"navbar-item",children:Object(n.jsx)("span",{className:"image is-24x24",children:Object(n.jsx)("img",{className:"is-rounded",src:b,width:"24",height:"24"})})}),Object(n.jsxs)(l.c,{children:["1",Object(n.jsx)(l.a,{path:"/",exact:!0}),Object(n.jsx)(l.a,{children:Object(n.jsx)("div",{className:"navbar__item-search-form navbar-item",children:Object(n.jsx)(v,{})})})]})]})})},w=c(43);function C(){var e=Object(o.a)(["\n  padding: 3rem;\n"]);return C=function(){return e},e}var _=g.a.footer(C()),S=function(){return Object(n.jsx)(_,{className:"footer has-background-light",children:Object(n.jsxs)("div",{className:"field is-grouped is-grouped-centered",children:[Object(n.jsx)("p",{className:"control",children:"\xa9\ufe0e2020 biyokoyama"}),Object(n.jsx)("p",{className:"control",children:Object(n.jsxs)("a",{href:"https://github.com/biyokoyama/wiki-react-typescript-practice",target:"_blank",rel:"noreferrer",className:"button is-small",children:[Object(n.jsx)(w.a,{className:"icon",icon:["fab","github"]}),Object(n.jsx)("span",{children:"Github"})]})})]})})},F=function(){return Object(n.jsx)("div",{className:"index",children:Object(n.jsx)("section",{className:"hero is-light is-fullheight",children:Object(n.jsx)("div",{className:"hero-body",children:Object(n.jsxs)("div",{className:"container has-text-centered",children:[Object(n.jsx)("h1",{className:"title",children:"wiki-react-typescript-practice"}),Object(n.jsx)(v,{})]})})})})},q=c(25),E=c.n(q),R=(c(44),E.a.create({baseURL:"/"}));var L=R,A=c(45),I=c(46),P=function(){function e(t){Object(A.a)(this,e),this.data=void 0,this.data=t}return Object(I.a)(e,[{key:"id",get:function(){return this.data.id}},{key:"path",get:function(){return"/articles/".concat(this.id)}},{key:"title",get:function(){return this.data.title}},{key:"body",get:function(){return this.data.body}}]),e}();function T(){var e=Object(o.a)(["\n  .box:hover {\n    box-shadow: 0 10px 16px rgba(0, 0, 0, 0.13), 0 6px 6px rgba(0, 0, 0, 0.19);\n    transition: 0.5s;\n  }\n"]);return T=function(){return e},e}var U=g.a.div(T()),B=function(e){return Object(n.jsx)(U,{className:"searched-articles section",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)("div",{className:"content",children:e.articles.map((function(e){return Object(n.jsxs)(j.b,{to:e.path,className:"box",children:[Object(n.jsx)("p",{className:"subtitle",children:e.title}),Object(n.jsx)("p",{children:e.body})]},e.id)}))})})})},J=function(){var e=Object(u.c)((function(e){return e.searchForm})),t=Object(a.useState)([]),c=Object(d.a)(t,2),i=c[0],s=c[1];return Object(a.useEffect)((function(){L.get("/api/articles?q=".concat(e.query)).then((function(e){s(e.data.map((function(e){return new P(e)})))}))}),[e]),Object(n.jsx)("div",{className:"search has-background-light",children:Object(n.jsx)(B,{articles:i})})};function M(){var e=Object(o.a)(["\n  .article-content__body-paragraph {\n    white-space: pre-wrap;\n  }\n"]);return M=function(){return e},e}var z=g.a.div(M()),D=function(e){var t=Object(a.useState)(!1),c=Object(d.a)(t,2),i=c[0],s=c[1],r={title:"",body:""},l=Object(a.useState)(r),o=Object(d.a)(l,2),j=o[0],b=o[1];return Object(n.jsxs)(z,{className:"article-content content",children:[Object(n.jsxs)("div",{className:"field is-grouped",children:[Object(n.jsxs)("div",{className:"control is-expanded",children:[!i&&Object(n.jsx)("h1",{className:"title",children:e.article.title}),i&&Object(n.jsx)("input",{type:"text",className:"input",placeholder:"title here",value:j.title,onChange:function(e){b(Object(h.a)(Object(h.a)({},j),{},{title:e.target.value}))}})]}),Object(n.jsx)("div",{className:"control",children:Object(n.jsxs)("div",{className:"buttons is-right",children:[!i&&Object(n.jsx)("button",{className:"button",onClick:function(){b({title:e.article.title,body:e.article.body}),s(!i)},children:"Edit"}),i&&Object(n.jsx)("button",{className:"button is-primary",onClick:function(){e.saveArticleContentForm(j),s(!i)},children:"Save"}),i&&Object(n.jsx)("button",{className:"button",onClick:function(){b(r),s(!i)},children:"Cancel"})]})})]}),Object(n.jsx)("div",{className:"field",children:Object(n.jsxs)("div",{className:"control",children:[!i&&Object(n.jsx)("p",{className:"article-content__body-paragraph",children:e.article.body}),i&&Object(n.jsx)("textarea",{className:"textarea has-fixed-size",placeholder:"body here",value:j.body,onChange:function(e){b(Object(h.a)(Object(h.a)({},j),{},{body:e.target.value}))}})]})})]})},G=function(){var e=Object(l.g)(),t=parseInt(e.id),c=new P({id:t,title:"",body:""}),i=Object(a.useState)(c),s=Object(d.a)(i,2),r=s[0],o=s[1];Object(a.useEffect)((function(){L.get("/api/articles/".concat(t)).then((function(e){o(new P(e.data))}))}),[]);return Object(n.jsx)("div",{className:"articles-id",children:Object(n.jsx)("div",{className:"section",children:Object(n.jsx)("div",{className:"container",children:Object(n.jsx)(D,{article:r,saveArticleContentForm:function(e){L.put("/api/articles/".concat(t),e).then((function(){o(new P(Object(h.a)({id:t},e)))}))}})})})})};function H(){var e=Object(o.a)(["\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n\n  & > div {\n    flex: 1;\n  }\n"]);return H=function(){return e},e}var Q=g.a.div(H()),Y=function(){return Object(n.jsx)(Q,{id:"app",className:"app",children:Object(n.jsxs)(j.a,{children:[Object(n.jsx)(k,{}),Object(n.jsx)(l.a,{exact:!0,path:"/",component:F}),Object(n.jsx)(l.a,{exact:!0,path:"/search",component:J}),Object(n.jsx)(l.a,{exact:!0,path:"/articles/:id",component:G}),Object(n.jsx)(S,{})]})})},K=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,82)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,i=t.getLCP,s=t.getTTFB;c(e),n(e),a(e),i(e),s(e)}))},V=c(18),W=c(47);V.b.add(W.a);var X=c(20),Z=Object(X.b)({searchForm:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(h.a)(Object(h.a)({},e),{},{query:t.payload.query});default:return e}}}),$=Object(X.c)(Z);r.a.render(Object(n.jsx)(i.a.StrictMode,{children:Object(n.jsx)(u.a,{store:$,children:Object(n.jsx)(l.b,{history:x,children:Object(n.jsx)(Y,{})})})}),document.getElementById("root")),K()}},[[81,1,2]]]);
//# sourceMappingURL=main.92533ae4.chunk.js.map