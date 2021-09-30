(this["webpackJsonpwebsites-punk"]=this["webpackJsonpwebsites-punk"]||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),i=n(4),s=n.n(i),a=(n(10),n(5)),o=(n(11),n(12),n(0)),l=function(){return Object(o.jsxs)("header",{className:"header",children:[Object(o.jsx)("h1",{className:"header__title",children:"PUNK BEERS"}),Object(o.jsx)("h2",{className:"header__subtitle",children:"LEARN ABOUT BREWDOG'S CRAFT BEERS"})]})},j=(n(14),n(15),function(e){var t=e.searchInput;return Object(o.jsxs)("div",{className:"search",children:[Object(o.jsx)("label",{htmlFor:"search",className:"search__label",children:"Search"}),Object(o.jsx)("input",{onInput:t,id:"search",className:"search__input",placeholder:"ENTER BEER NAME",type:"text"})]})}),h=(n(16),n(2)),u=function(e){var t=e.filterByAbvAbove6,n=e.filterByPhLowerThan4;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"filter__label",children:["Filter ",Object(o.jsx)(h.a,{})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onClick:t,id:"abv",name:"filterSortOption",type:"radio"}),Object(o.jsx)("label",{htmlFor:"abv",children:"ABV above 6%"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onClick:n,id:"ph",name:"filterSortOption",type:"radio"}),Object(o.jsx)("label",{htmlFor:"ph",children:"PH lower than 4"})]})]})},b=(n(17),function(e){var t=e.sortByProductNameAZ,n=e.sortByAbvLowHigh,r=e.sortByPhLowHigh;return Object(o.jsxs)("div",{children:[Object(o.jsxs)("p",{className:"sort__label",children:["Sort ",Object(o.jsx)(h.b,{})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onClick:t,id:"productName",name:"filterSortOption",type:"radio"}),Object(o.jsx)("label",{htmlFor:"productName",children:"Product Name - A-Z"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onClick:n,id:"abv",name:"filterSortOption",type:"radio"}),Object(o.jsx)("label",{htmlFor:"abv",children:"ABV - LOW TO HIGH"})]}),Object(o.jsxs)("div",{children:[Object(o.jsx)("input",{onClick:r,id:"whatsNew",name:"filterSortOption",type:"radio"}),Object(o.jsx)("label",{htmlFor:"whatsNew",children:"PH - LOW TO HIGH"})]})]})}),d=function(e){var t=e.searchInput,n=e.filterByAbvAbove6,r=e.filterByPhLowerThan4,c=e.sortByProductNameAZ,i=e.sortByAbvLowHigh,s=e.sortByPhLowHigh;return Object(o.jsxs)("nav",{className:"nav",children:[Object(o.jsx)(j,{searchInput:t}),Object(o.jsx)(u,{filterByAbvAbove6:n,filterByPhLowerThan4:r}),Object(o.jsx)(b,{sortByProductNameAZ:c,sortByAbvLowHigh:i,sortByPhLowHigh:s})]})},f=(n(18),n(19),function(e){var t=e.beer;return Object(o.jsxs)("article",{className:"card",children:[Object(o.jsx)("img",{className:"card__image",src:t.image_url,alt:t.name}),Object(o.jsx)("h3",{className:"card__name",children:t.name}),Object(o.jsx)("h4",{className:"card__tagline",children:t.tagline}),Object(o.jsx)("p",{className:"card__text",children:t.first_brewed}),Object(o.jsxs)("p",{className:"card__text",children:["abv ",t.abv,"% | ph",t.ph]})]},t.id)}),O=function(e){var t=e.beersArr.map((function(e){return Object(o.jsx)(f,{beer:e})}));return Object(o.jsx)("main",{className:"main",children:Object(o.jsx)("section",{className:"card__list",children:t})})},m=function(){var e=Object(r.useState)([]),t=Object(a.a)(e,2),n=t[0],c=t[1];Object(r.useEffect)((function(){fetch("https://api.punkapi.com/v2/beers").then((function(e){return e.json()})).then((function(e){return c(e)})).catch((function(e){return console.log("error")}))}),[]);var i=function(e,t){return e.name<t.name?-1:e.name>t.name?1:0};return Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(l,{}),Object(o.jsx)(d,{searchInput:function(e){var t=e.target.value.toLowerCase(),r=n.filter((function(e){return e.name.toLowerCase().includes(t)}));c(r)},filterByAbvAbove6:function(){var e=n.filter((function(e){return e.abv>6}));c(e)},filterByPhLowerThan4:function(){var e=n.filter((function(e){return e.ph<4}));c(e)},sortByProductNameAZ:function(){var e=n.filter((function(e){return e})).sort(i);c(e)},sortByAbvLowHigh:function(){var e=n.filter((function(e){return e})).sort((function(e,t){return e.abv-t.abv}));c(e)},sortByPhLowHigh:function(){var e=n.filter((function(e){return e})).sort((function(e,t){return e.ph-t.ph}));c(e)}}),Object(o.jsx)(O,{beersArr:n})]})},p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,21)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),r(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(m,{})}),document.getElementById("root")),p()}],[[20,1,2]]]);
//# sourceMappingURL=main.e986fa3d.chunk.js.map