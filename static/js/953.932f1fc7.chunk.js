"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[953],{1953:function(e,n,t){t.r(n),t.d(n,{default:function(){return m}});var r,a,c=t(5861),o=t(9439),i=t(7757),s=t.n(i),u=t(4390),p=t(2791),l=t(7689),f=t(3493),h=t(168),v=t(6444),d=v.ZP.h2(r||(r=(0,h.Z)(["\n  margin-left: 20px;\n  color: silver;\n"]))),g=v.ZP.p(a||(a=(0,h.Z)(["\n  color: rebeccapurple;\n  font-size: large;\n  font-style: italic;\n"]))),x=t(184),m=function(){var e=(0,p.useState)([]),n=(0,o.Z)(e,2),t=n[0],r=n[1],a=(0,l.UO)().movieId;return(0,p.useEffect)((function(){function e(){return(e=(0,c.Z)(s().mark((function e(){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.Z.fetchReview(Number(a));case 3:n=e.sent,r(n),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[a]),(0,x.jsxs)("section",{children:[(0,x.jsxs)(d,{children:["Reviews(",t.length,"):"]}),(0,x.jsx)(f.PY,{children:t.length>0?t.map((function(e){var n=e.id,t=e.author,r=e.content;return(0,x.jsxs)("li",{children:[(0,x.jsx)(g,{children:t}),(0,x.jsx)("p",{children:r})]},n)})):(0,x.jsx)("p",{children:"This movie has no reviews"})})]})}},3493:function(e,n,t){t.d(n,{Ff:function(){return m},PY:function(){return Z},TU:function(){return h},XC:function(){return v},Zx:function(){return g},lK:function(){return w},n4:function(){return x},uA:function(){return d}});var r,a,c,o,i,s,u,p,l=t(168),f=t(6444),h=f.ZP.ul(r||(r=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: left;\n  justify-content: start;\n"]))),v=f.ZP.li(a||(a=(0,l.Z)(["\n  list-style: none;\n"]))),d=f.ZP.div(c||(c=(0,l.Z)(["\n  margin-left: 20px;\n  margin-right: 20px;\n  border-radius: 25px;\n  display: flex;\n  justify-content: start;\n  height: auto;\n  max-width: 1000px;\n  gap: 40px;\n"]))),g=f.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n"]))),x=f.ZP.div(i||(i=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),m=f.ZP.div(s||(s=(0,l.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),w=f.ZP.div(u||(u=(0,l.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),Z=f.ZP.ul(p||(p=(0,l.Z)(["\n  margin-top: 40px;\n  list-style: none;\n"])))},4390:function(e,n,t){var r=t(5861),a=t(7757),c=t.n(a),o=t(2388),i="b84ac87767a32f4b7dddc0cfcc03fc4c";function s(){return(s=(0,r.Z)(c().mark((function e(){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(i,"&language=en-US&page=1"));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var u=function(){var e=(0,r.Z)(c().mark((function e(n,t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(i,"&language=en-US&query=").concat(n,"&page=").concat(t));case 3:if(r=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n,t){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"?api_key=").concat(i));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data.cast);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(c().mark((function e(n){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(n){return e.apply(this,arguments)}}(),h={fetchHomepageMovies:function(){return s.apply(this,arguments)},fetchMoviesById:p,fetchMoviesByName:u,fetchReview:f,fetchCast:l};n.Z=h}}]);
//# sourceMappingURL=953.932f1fc7.chunk.js.map