"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[78],{3493:function(e,n,t){t.d(n,{Ff:function(){return m},PY:function(){return y},TU:function(){return h},XC:function(){return d},Zx:function(){return x},lK:function(){return w},n4:function(){return g},uA:function(){return v}});var r,a,c,i,o,s,u,p,l=t(168),f=t(6444),h=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: start;\n"]))),d=f.ZP.li(a||(a=(0,l.Z)(["\n  list-style: none;\n"]))),v=f.ZP.div(c||(c=(0,l.Z)(["\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 25px;\n  display: flex;\n  justify-content: start;\n  max-height: 500px;\n  gap: 40px;\n"]))),x=f.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),g=f.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=f.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),w=f.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),y=f.ZP.ul(p||(p=(0,l.Z)(["\n  margin-top: 40px;\n  list-style: none;\n"])))},9078:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var r,a=t(5861),c=t(9439),i=t(7757),o=t.n(i),s=t(1087),u=t(7689),p=t(2791),l=t(168),f=t(8617),h=t(6444),d=t(184),v=(0,h.ZP)(s.rU)(r||(r=(0,l.Z)(["\n  display: inline-flex;\n  align-items: center;\n  margin-left: 20px;\n  gap: 4px;\n  padding: 8px 0;\n  color: black;\n  text-decoration: none;\n  font-weight: 500;\n  text-transform: uppercase;\n\n  :hover {\n    color: orangered;\n  }\n"]))),x=function(e){var n=e.to,t=e.children;return(0,d.jsxs)(v,{to:n,children:[(0,d.jsx)(f.jTe,{size:"24"}),t]})},g=t(4390),m=t(3493),w=function(){var e,n,t=(0,p.useState)([]),r=(0,c.Z)(t,2),i=r[0],l=r[1],f=(0,p.useState)(""),h=(0,c.Z)(f,2),v=h[0],w=h[1],y=(0,u.UO)().movieId,Z=(0,u.TH)();(0,p.useEffect)((function(){function e(){return(e=(0,a.Z)(o().mark((function e(){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g.Z.fetchMoviesById(Number(y));case 3:n=e.sent,l(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),w(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[y]);var j,b=i.id,k=i.name,S=i.poster_path,_=i.title,P=i.overview,U=i.genres,E=i.release_date,C=i.vote_average,M=null!==(e=null===(n=Z.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/";if(i)return(0,d.jsx)("main",{children:v?(0,d.jsx)("p",{children:v}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{to:M,children:"Back to movies"}),(0,d.jsxs)(m.uA,{children:[(0,d.jsx)("img",{src:"https://image.tmdb.org/t/p/w300".concat(S),alt:k}),(0,d.jsxs)(m.Zx,{children:[(0,d.jsxs)(m.n4,{children:[(0,d.jsxs)("h2",{children:[_,"(",function(e){if(e){var n=Date.parse(e);return new Date(n).getFullYear()}}(E),")"]}),(0,d.jsxs)("p",{children:["Users Score: ",(j=C,Math.round(10*j)),"% "]}),(0,d.jsx)("h3",{children:"Overview:"}),(0,d.jsx)("p",{children:P}),(0,d.jsx)("h3",{children:"Genres:"}),(0,d.jsx)("ul",{children:U&&U.map((function(e){return(0,d.jsx)("li",{children:e.name},e.id)}))})]}),(0,d.jsxs)(m.Ff,{children:[(0,d.jsx)("h3",{children:" Additional information"}),(0,d.jsxs)(m.lK,{children:[(0,d.jsx)(s.rU,{to:"cast",children:"Cast"}),(0,d.jsx)(s.rU,{to:"review",children:"Review"})]})]})]})]},b),(0,d.jsx)(p.Suspense,{fallback:(0,d.jsx)("div",{children:"Loading..."}),children:(0,d.jsx)(u.j3,{})})]})})}},4390:function(e,n,t){var r=t(5861),a=t(7757),c=t.n(a),i=t(2388),o="b84ac87767a32f4b7dddc0cfcc03fc4c";function s(){return(s=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(o,"&language=en-US&page=1"));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var u=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(o,"&language=en-US&query=").concat(n,"&page=").concat(t));case 3:if(r=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(o));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data.cast);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),h={fetchHomepageMovies:function(){return s.apply(this,arguments)},fetchMoviesById:p,fetchMoviesByName:u,fetchReview:f,fetchCast:l};n.Z=h}}]);
//# sourceMappingURL=78.efa9d27f.chunk.js.map