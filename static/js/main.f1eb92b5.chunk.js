(this["webpackJsonpgoit-react-hw-04-movies"]=this["webpackJsonpgoit-react-hw-04-movies"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},31:function(e,t,c){},32:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var s=c(1),i=c.n(s),a=c(16),n=c.n(a),o=c(4),r=(c(23),c(2)),l=(c(24),c(0));function j(){return Object(l.jsx)("header",{className:"header",children:Object(l.jsxs)("nav",{children:[Object(l.jsx)(o.b,{exact:!0,className:"home-link",to:"/goit-react-hw-05-movies",activeClassName:"activelink",children:"Home"}),Object(l.jsx)(o.b,{className:"home-link",to:"/goit-react-hw-05-movies/movies",activeClassName:"activelink",children:"Movies"})]})})}var h=c(5);var d={fetchApi:function(e,t){return fetch("".concat(e,"api_key=").concat("13b30df76de0172d03d948f4ffbca658","&language=en-US&page=1&include_adult=false=quere&query=").concat(t)).then((function(e){if(console.log(e,"add"),e.ok)return e.json()}))}};function m(e){var t=Object(s.useState)(""),c=Object(h.a)(t,2),i=c[0],a=c[1],n=Object(r.i)().url;return Object(s.useEffect)((function(){return d.fetchApi("https://api.themoviedb.org/3/trending/movie/week?").then((function(e){a(e.results),window.localStorage.setItem("url",n)})),function(){}}),[n]),Object(l.jsxs)("div",{className:"home-wrap",children:[Object(l.jsx)("h1",{children:"Trending today"}),i&&Object(l.jsx)("ul",{children:i.map((function(e){var t=e.name,c=e.original_title,s=e.id;return Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{className:"home-item",to:"/goit-react-hw-05-movies/movies/".concat(s),children:t||c})},s)}))})]})}c(31);function b(e){var t=Object(r.h)().movieId,c=Object(s.useState)([]),i=Object(h.a)(c,2),a=i[0],n=i[1],o="https://api.themoviedb.org/3/movie/".concat(t,"/credits?");return Object(s.useEffect)((function(){d.fetchApi(o).then((function(e){console.log(e,"actors"),n(e.cast)})).catch((function(e){console.log(e)}))}),[o]),Object(l.jsxs)("div",{className:"cast-wrap",children:[Object(l.jsx)("p",{children:"Additional Information"}),Object(l.jsx)("ul",{className:"cast-list",children:a&&a.map((function(e){var t=e.name,c=e.profile_path,s=e.character,i=e.id;return Object(l.jsxs)("li",{className:"cast-item",children:[Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(c),alt:t,width:"150"}),Object(l.jsx)("h3",{children:t}),Object(l.jsxs)("p",{children:["Character: ",Object(l.jsx)("span",{children:s})]})]},i)}))})]})}function u(e){var t=Object(r.h)().movieId,c=Object(s.useState)([]),i=Object(h.a)(c,2),a=i[0],n=i[1],o="https://api.themoviedb.org/3/movie/".concat(t,"/reviews?");Object(s.useEffect)((function(){d.fetchApi(o).then((function(e){console.log(e,"reviews"),n(e.results)})).catch((function(e){console.log(e)}))}),[o]);var j=function(e){if(console.log(e),e)return e.startsWith("/https")?e.slice(1):"https://image.tmdb.org/t/p/original".concat(e)};return Object(l.jsxs)("div",{className:"reviews-wrap",children:[Object(l.jsx)("ul",{className:"reviews-list",children:a&&a.map((function(e){var t=e.author,c=e.content,s=e.id,i=e.author_details;return Object(l.jsxs)("li",{className:"reviews-item",children:[Object(l.jsxs)("div",{className:"reviews-profile",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsx)("img",{className:"reviews-img",src:j(i.avatar_path),alt:"",width:"100"},i.id)]}),Object(l.jsx)("p",{className:"reviews-description",children:c})]},s)}))}),0===a.length&&Object(l.jsx)("p",{children:"We don't have ane reviews for this movie."})]})}function v(){var e=Object(r.h)().movieId,t="https://api.themoviedb.org/3/movie/".concat(e,"?"),c=Object(s.useState)([]),i=Object(h.a)(c,2),a=i[0],n=i[1],j=Object(r.i)().url,m=Object(r.f)(),v=Object(r.g)();console.log(e,"quy"),Object(s.useEffect)((function(){d.fetchApi(t).then((function(e){console.log(e,"movie"),n(e)})).catch((function(e){console.log(e)}))}),[t]);var O=function(){return a.title?a.title:a.original_title};return Object(l.jsxs)("div",{className:"wrap-page",children:[Object(l.jsx)("button",{className:"page-btn",onClick:function(){console.log(j,"url"),console.log(m,"HISTORY"),console.log(v.pathname),v.pathname!==j?m.push(v.state.from):m.goBack()},children:"Go Back"}),Object(l.jsxs)("div",{className:"card-page",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:"https://image.tmdb.org/t/p/original".concat(a.poster_path?a.poster_path:a.backdrop_path),alt:O()?O():"No info",width:"300"})}),Object(l.jsxs)("div",{className:"description-page",children:[Object(l.jsxs)("h1",{children:[O()?O():"No info",Object(l.jsxs)("span",{children:["(",parseInt(a.release_date),")"]})]}),Object(l.jsxs)("p",{className:"scope-page",children:["User scope: ",Object(l.jsxs)("span",{children:[10*a.vote_average,"% "]})]}),Object(l.jsx)("h2",{children:"Overview"}),Object(l.jsx)("p",{children:a.overview}),Object(l.jsx)("h2",{children:"Genres"}),Object(l.jsx)("p",{className:"genres-page",children:a.genres&&a.genres.map((function(e){var t=e.name,c=e.id;return Object(l.jsx)("span",{children:t},c)}))})]})]}),Object(l.jsxs)("div",{className:"wrap-dop",children:[Object(l.jsxs)(o.b,{className:"link-page",to:{pathname:"/goit-react-hw-05-movies/movies/".concat(e,"/cast"),state:{from:"".concat(window.localStorage.getItem("url"))}},activeClassName:"activelink",children:["Cast"," "]},"1"),Object(l.jsx)(o.b,{className:"link-page",to:{pathname:"/goit-react-hw-05-movies/movies/".concat(e,"/reviews"),state:{from:"".concat(window.localStorage.getItem("url"))}},activeClassName:"activelink",children:"Reviews"},"2")]}),Object(l.jsxs)("div",{children:[Object(l.jsx)(r.a,{path:"/goit-react-hw-05-movies/movies/:movieId/cast",children:Object(l.jsx)(b,{})}),Object(l.jsx)(r.a,{path:"/goit-react-hw-05-movies/movies/:movieId/reviews",children:Object(l.jsx)(u,{})})]})]})}var O=c(14);function p(e){var t=e.onSubmit,c=Object(s.useState)(""),i=Object(h.a)(c,2),a=i[0],n=i[1],o=Object(r.f)(),j=Object(r.g)();return Object(l.jsx)("div",{className:"form-wrap",children:Object(l.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),t(a),o.push(Object(O.a)(Object(O.a)({},j),{},{search:"query=".concat(a)})),n("")},children:[Object(l.jsx)("input",{className:"SearchForm-input",type:"text",value:a,autoComplete:"off",onChange:function(e){n(e.target.value.toLowerCase().trim())},autoFocus:!0,placeholder:"Search images and photos"}),Object(l.jsx)("button",{className:"form-btn",type:"submit","aria-label":"Search",children:"Search"})]})})}function f(e){var t=Object(s.useState)(""),c=Object(h.a)(t,2),i=c[0],a=c[1],n=function(e,t){var c=Object(s.useState)((function(){var c;return null!==(c=JSON.parse(window.localStorage.getItem(e)))&&void 0!==c?c:t})),i=Object(h.a)(c,2),a=i[0],n=i[1];return Object(s.useEffect)((function(){window.localStorage.setItem(e,JSON.stringify(a))}),[e,a]),[a,n]}("movies",[]),j=Object(h.a)(n,2),m=j[0],b=j[1],u=Object(r.g)(),v=Object(r.i)().url;console.log(v);var O="https://api.themoviedb.org/3/search/movie?";Object(s.useEffect)((function(){if(""===u.search)return window.localStorage.clear(),void b([]);i?d.fetchApi(O,i).then((function(e){b(e.results)})).catch((function(e){console.log(e)})):console.log("\u0432\u044b \u0437\u0430\u0448\u043b\u0438 \u0432 movies")}),[u.search,i,O,b]);return Object(l.jsxs)("div",{className:"movies-wrap",children:[Object(l.jsx)(p,{onSubmit:function(e){window.localStorage.setItem("url",v+"?query=".concat(e)),a(e),console.log(v,"url")}}),0!==m.length?Object(l.jsx)("ul",{className:"movies-list",children:m.map((function(e){var t=e.name,c=e.original_title,s=e.id;return Object(l.jsx)("li",{children:Object(l.jsx)(o.b,{className:"movies-item",to:"/goit-react-hw-05-movies/movies/".concat(s),children:t||c})},s)}))}):Object(l.jsx)("p",{children:"Enter correct film's name"})]})}function g(e){return Object(l.jsx)("div",{children:Object(l.jsx)("h1",{children:"404 Not found pages"})})}c(32);var x=function(){return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsx)(j,{}),Object(l.jsxs)(r.c,{children:[Object(l.jsx)(r.a,{exact:!0,path:"/goit-react-hw-05-movies",children:Object(l.jsx)(m,{})}),Object(l.jsx)(r.a,{path:"/goit-react-hw-05-movies/movies/:movieId",children:Object(l.jsx)(v,{})}),Object(l.jsx)(r.a,{path:"/goit-react-hw-05-movies/movies",children:Object(l.jsx)(f,{})}),Object(l.jsx)(r.a,{children:Object(l.jsx)(g,{})})]})]})};n.a.render(Object(l.jsx)(i.a.StrictMode,{children:Object(l.jsx)(o.a,{children:Object(l.jsx)(x,{})})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.f1eb92b5.chunk.js.map