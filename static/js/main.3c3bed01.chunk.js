(this.webpackJsonpimdb=this.webpackJsonpimdb||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),i=n.n(a),r=n(9),s=n.n(r),o=(n(16),n(2)),h=n(3),u=n(5),j=n(4),l=(n.p,n(8),n(7)),b=n.n(l),m=n(10),d=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).state={movieData:""},t}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var t=Object(m.a)(b.a.mark((function t(){var e,n,c;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e="http://www.omdbapi.com/?i=tt3896198&apikey=2128c072&plot=full&t="+this.props.movieName,t.next=3,fetch(e);case 3:return n=t.sent,t.next=6,n.json();case 6:c=t.sent,this.setState({movieData:c}),console.log(this.state.movieData);case 9:case"end":return t.stop()}}),t,this)})));return function(){return t.apply(this,arguments)}}()},{key:"render",value:function(){var t=this.state.movieData;return Object(c.jsxs)("div",{children:[Object(c.jsx)("img",{src:t.Poster,alt:t.Title}),Object(c.jsx)("h1",{children:t.Title}),Object(c.jsxs)("h4",{children:["Actor : ",t.Actors]}),Object(c.jsxs)("h4",{children:["Production : ",t.Production]}),Object(c.jsxs)("h4",{children:["Director : ",t.Director]}),Object(c.jsxs)("h4",{children:["IMDB Rating : ",t.imdbRating]}),Object(c.jsx)("p",{children:t.Plot})]})}}]),n}(i.a.Component),p=function(t){Object(u.a)(n,t);var e=Object(j.a)(n);function n(){var t;return Object(o.a)(this,n),(t=e.call(this)).SearchMovie=function(e){t.setState((function(t){return{show:!0}})),console.log(t.state.movieName)},t.textChange=function(e){t.setState((function(t){return{movieName:e.target.value,show:!1}}))},t.state={show:!1,movieName:""},t}return Object(h.a)(n,[{key:"render",value:function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"IMDB"}),Object(c.jsx)("input",{type:"search",id:"txtSearch",className:"App-button",onChange:this.textChange,placeholder:"Search movie by name"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"App-button",onClick:this.SearchMovie,children:"Search"}),this.state.show?Object(c.jsx)(d,{movieName:this.state.movieName}):null]})}}]),n}(a.Component),v=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(e){var n=e.getCLS,c=e.getFID,a=e.getFCP,i=e.getLCP,r=e.getTTFB;n(t),c(t),a(t),i(t),r(t)}))};s.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root")),v()},8:function(t,e,n){}},[[18,1,2]]]);
//# sourceMappingURL=main.3c3bed01.chunk.js.map