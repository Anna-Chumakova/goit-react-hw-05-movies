"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[87],{87:function(r,t,e){e.r(t),e.d(t,{default:function(){return l}});var n=e(861),a=e(885),c=e(757),u=e.n(c),s=e(506),i=e(791),o=e(639),p=e(470),f=e(184),d=function(r){var t=r.item.map((function(r){var t=r.name,e=r.credit_id,n=r.character,a=r.profile_path;return a&&(0,f.jsxs)("li",{children:[(0,f.jsx)("img",{src:"https://image.tmdb.org/t/p/w500".concat(a),alt:"name"}),(0,f.jsx)("p",{children:t}),(0,f.jsx)("p",{children:n})]},e)}));return(0,f.jsx)("ul",{children:t})},l=function(){var r=(0,i.useState)(null),t=(0,a.Z)(r,2),e=t[0],c=t[1],l=(0,i.useState)(!1),v=(0,a.Z)(l,2),h=v[0],m=v[1],x=(0,i.useState)(null),b=(0,a.Z)(x,2),w=b[0],k=b[1],_=(0,p.UO)().id;return(0,i.useEffect)((function(){var r=function(){var r=(0,n.Z)(u().mark((function r(){var t;return u().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,m(!0),k(null),r.next=5,(0,s.Hj)(_);case 5:t=r.sent,c(t),r.next=12;break;case 9:r.prev=9,r.t0=r.catch(0),k(r.t0);case 12:return r.prev=12,m(!1),r.finish(12);case 15:case"end":return r.stop()}}),r,null,[[0,9,12,15]])})));return function(){return r.apply(this,arguments)}}();r()}),[_]),(0,f.jsxs)("div",{children:[h&&(0,f.jsx)(o.Z,{}),w&&(0,f.jsx)("p",{children:"Something went wrong"}),e&&(0,f.jsx)(d,{item:e.cast})]})}},506:function(r,t,e){e.d(t,{Bc:function(){return l},Hj:function(){return v},QX:function(){return d},Y_:function(){return m},Yc:function(){return h}});var n=e(861),a=e(757),c=e.n(a),u=e(44),s=e(7),i=e.n(s),o="https://api.themoviedb.org/3",p="/movie/",f="1026e0f194f2bc4cc4b6e148bd5c040a",d=function(){var r=(0,n.Z)(c().mark((function r(){var t,e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=u.Z.create({baseURL:"".concat(o).concat("/trending/all/day"),params:{api_key:f}}),r.next=3,t.get();case 3:return e=r.sent,n=e.data,r.abrupt("return",n);case 6:case"end":return r.stop()}}),r)})));return function(){return r.apply(this,arguments)}}(),l=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=u.Z.create({baseURL:"".concat(o).concat(p).concat(t),params:{api_key:f}}),r.next=3,e.get();case 3:return n=r.sent,a=n.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),v=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n,a;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=u.Z.create({baseURL:"".concat(o).concat(p).concat(t).concat("/credits"),params:{api_key:f}}),r.next=3,e.get();case 3:return n=r.sent,a=n.data,r.abrupt("return",a);case 6:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),h=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=u.Z.create({baseURL:"".concat(o).concat(p).concat(t).concat("/reviews"),params:{api_key:f}}),n=e.get(),r.abrupt("return",n);case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}(),m=function(){var r=(0,n.Z)(c().mark((function r(t){var e,n;return c().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return e=u.Z.create({baseURL:"".concat(o).concat("/search/movie"),params:{api_key:f,query:t}}),n=e.get(),r.abrupt("return",n);case 3:case"end":return r.stop()}}),r)})));return function(t){return r.apply(this,arguments)}}();l.propTypes={id:i().number.isRequired,searchQuery:i().string}},639:function(r,t,e){e.d(t,{Z:function(){return u}});var n="Loader_backdrop__gjec2",a="Loader_loader__+lRPl",c=e(184);function u(){return(0,c.jsx)("div",{className:n,children:(0,c.jsx)("div",{className:a})})}}}]);
//# sourceMappingURL=87.fc27c419.chunk.js.map