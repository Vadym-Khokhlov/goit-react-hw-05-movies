"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[951],{1951:function(e,t,n){n.r(t),n.d(t,{default:function(){return Z}});var r,a,c,o,s=n(5861),i=n(9439),p=n(7757),u=n.n(p),h=n(4390),l=n(2791),f=n(1087),v=n(168),g=n(6444),d=g.ZP.h2(r||(r=(0,v.Z)(["\n  text-align: center;\n  color: red;\n  font-size: 30px;\n"]))),m=g.ZP.ul(a||(a=(0,v.Z)(["\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n  list-style: none;\n"]))),w=g.ZP.div(c||(c=(0,v.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 300px;\n  height: 400px;\n"]))),x=g.ZP.p(o||(o=(0,v.Z)(["\n  text-align: center;\n"]))),y=n(4651),k=n(184);var Z=function(){var e=(0,l.useState)([]),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,l.useState)(""),c=(0,i.Z)(a,2),o=c[0],p=c[1];return(0,l.useEffect)((function(){function e(){return(e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.fetchHomepageMovies();case 3:t=e.sent,r(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),p(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),(0,k.jsx)(k.Fragment,{children:o?(0,k.jsx)("p",{children:o}):(0,k.jsxs)(k.Fragment,{children:[(0,k.jsxs)(d,{children:["Trending! ",(0,k.jsx)(y.mt8,{color:"red"})]}),(0,k.jsx)(m,{children:n&&n.map((function(e){return(0,k.jsx)(w,{children:(0,k.jsxs)(f.rU,{to:"movies/".concat(e.id),children:[(0,k.jsx)("img",{src:"https://image.tmdb.org/t/p/w200".concat(e.poster_path),alt:e.title}),(0,k.jsx)(x,{children:e.title})]})},e.id)}))})]})})}},4390:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),o=n(2388),s="b84ac87767a32f4b7dddc0cfcc03fc4c";function i(){return(i=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s,"&language=en-US&page=1"));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=").concat(n));case 3:if(r=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data.cast);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f={fetchHomepageMovies:function(){return i.apply(this,arguments)},fetchMoviesById:u,fetchMoviesByName:p,fetchReview:l,fetchCast:h};t.Z=f}}]);
//# sourceMappingURL=951.eb40e485.chunk.js.map