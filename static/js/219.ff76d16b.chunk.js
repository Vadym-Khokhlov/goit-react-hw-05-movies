"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[219],{4219:function(e,t,n){n.r(t),n.d(t,{default:function(){return k}});var r,a,c,o,s=n(5861),i=n(9439),p=n(7757),u=n.n(p),h=n(4390),l=n(2791),f=n(7689),d=n(168),g=n(6444),v=g.ZP.ul(r||(r=(0,d.Z)(["\n  display: flex;\n  justify-content: start;\n  gap: 30px;\n  flex-wrap: wrap;\n  list-style: none;\n"]))),x=g.ZP.li(a||(a=(0,d.Z)(["\n  gap: 5px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-height: 350px;\n  width: auto;\n  padding: 5px 10px;\n  /* border: 3px solid yellowgreen; */\n  /* border-radius: 0px 0px 14px 14px; */\n"]))),w=g.ZP.img(c||(c=(0,d.Z)(["\n  width: 230px;\n  height: 300px;\n"]))),m=g.ZP.p(o||(o=(0,d.Z)(["\n  margin: 0;\n  padding: 0;\n"]))),y=n(6907),b=n(184),k=function(){var e=(0,l.useState)(""),t=(0,i.Z)(e,2),n=t[0],r=t[1],a=(0,l.useState)([]),c=(0,i.Z)(a,2),o=c[0],p=c[1],d=(0,f.UO)().movieId;if((0,l.useEffect)((function(){function e(){return(e=(0,s.Z)(u().mark((function e(){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.Z.fetchCast(Number(d));case 3:t=e.sent,p(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),r(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[d]),o.length)return(0,b.jsx)("section",{children:(0,b.jsx)(v,{children:n?(0,b.jsx)("p",{children:n}):o.map((function(e){var t=e.cast_id,n=e.original_name,r=e.character,a=e.profile_path;return(0,b.jsxs)(x,{children:[a&&(0,b.jsx)(w,{src:"https://image.tmdb.org/t/p/w200/".concat(a),alt:n}),!a&&(0,b.jsx)(y.PIQ,{size:240,color:"silver"}),(0,b.jsx)(m,{children:n}),(0,b.jsxs)(m,{children:["Character: ",r]})]},t)}))})})}},4390:function(e,t,n){var r=n(5861),a=n(7757),c=n.n(a),o=n(2388),s="b84ac87767a32f4b7dddc0cfcc03fc4c";function i(){return(i=(0,r.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/trending/movie/day?api_key=".concat(s,"&language=en-US&page=1"));case 3:if(t=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",t.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))).apply(this,arguments)}var p=function(){var e=(0,r.Z)(c().mark((function e(t,n){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/search/movie?api_key=".concat(s,"&language=en-US&query=").concat(t,"&page=").concat(n));case 3:if(r=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",r.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t,n){return e.apply(this,arguments)}}(),u=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"?api_key=").concat(s));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=").concat(s,"&language=en-US"));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data.cast);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(c().mark((function e(t){var n;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("https://api.themoviedb.org/3/movie/".concat(t,"/reviews?api_key=").concat(s,"&language=en-US&page=1"));case 3:if(n=e.sent){e.next=6;break}throw new Error("Sorry, something wrong's happened");case 6:return e.abrupt("return",n.data.results);case 9:e.prev=9,e.t0=e.catch(0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),f={fetchHomepageMovies:function(){return i.apply(this,arguments)},fetchMoviesById:u,fetchMoviesByName:p,fetchReview:l,fetchCast:h};t.Z=f}}]);
//# sourceMappingURL=219.ff76d16b.chunk.js.map