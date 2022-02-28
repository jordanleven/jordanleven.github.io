(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"/8oZ":function(t,e,o){},"3XMW":function(t,e,o){"use strict";var i=o("hNR7"),r=o("VTBJ"),s=(o("DQNa"),Object(r.a)(Object(r.a)({},{timeZone:"America/New_York"}),{},{day:"numeric",month:"long",year:"numeric"})),n=function(t){return Object(r.a)({},function(t){switch(t){case"medium":default:return s}}(t))},a={name:"PortfolioListItemArticle",props:{date:i.a.string,summary:i.a.string,title:i.a.string.isRequired},computed:{formattedDate:function(){return t=this.date,o=null==(e={dateFormat:"medium"})?void 0:e.dateFormat,i=new Date(t),r=n(o),i.toLocaleDateString("en-US",r);var t,e,o,i,r}}},l=(o("7+e5"),o("7uw+")),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"portfolio-list-item-article"},[t.date?o("p",{staticClass:"portfolio-list-item-article__date",attrs:{"data-test":"date"}},[t._v("\n    "+t._s(t.formattedDate)+"\n  ")]):t._e(),o("div",{staticClass:"portfolio-list-item-article__header-container"},[o("h3",{staticClass:"portfolio-list-item-article__header",attrs:{"data-test":"header"}},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t.summary?o("p",{staticClass:"portfolio-list-item-article__summary",attrs:{"data-test":"summary"}},[t._v("\n    "+t._s(t.summary)+"\n  ")]):t._e()])}),[],!1,null,"83fe6e3c",null).exports,u={name:"PortfolioListItemProject",props:{summary:i.a.string,title:i.a.string.isRequired}},m=(o("Ck6W"),{name:"PortfolioListItem",components:{PortfolioListItemArticle:c,PortfolioListItemProject:Object(l.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portfolio-list-item-project"},[e("div",{staticClass:"portfolio-list-item-project__header-container"},[e("h3",{staticClass:"portfolio-list-item-project__header",attrs:{"data-test":"header"}},[this._v("\n      "+this._s(this.title)+"\n    ")])]),e("p",{staticClass:"portfolio-list-item-project__summary",attrs:{"data-test":"summary"}},[this._v("\n    "+this._s(this.summary)+"\n  ")])])}),[],!1,null,"491353cc",null).exports},props:{animationDelayInMs:i.a.number,columns:i.a.oneOf([1,2,3,4]).def(1),portfolioItem:i.a.shape({date:i.a.string,path:i.a.string.isRequired,summary:i.a.string.isRequired,thumbnail:i.a.object.isRequired,title:i.a.string.isRequired}),portfolioItemType:i.a.oneOf(["article","project"]).isRequired},data:function(){return{isLoaded:!1}},computed:{backgroundThumbnailStyle:function(){return{backgroundImage:"url('".concat(this.portfolioItem.thumbnail.src,"')")}},classPortfolioList:function(){var t=this.columns,e=this.portfolioItemType;return{"portfolio-list-item--four":4===t,"portfolio-list-item--light":t>=3&&"project"===e,"portfolio-list-item--primary":1===t,"portfolio-list-item--three":3===t,"portfolio-list-item--two":2===t}},isVisible:function(){return this.isLoaded},portfolioItemSummary:function(){return this.portfolioItemsIsPrimary?this.portfolioItem.summary:null},portfolioItemsIsPrimary:function(){return 1===this.columns},stylePortfolioList:function(){return{transitionDelay:"".concat(this.animationDelayInMs,"ms")}}},mounted:function(){this.isLoaded=!0},methods:{isPortfolioItemType:function(t){return this.portfolioItemType===t}}}),f=(o("cRu8"),Object(l.a)(m,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("transition",{attrs:{name:"fade"}},[o("li",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"portfolio-list-item",class:t.classPortfolioList,style:t.stylePortfolioList,attrs:{"data-test":"list-item"}},[o("div",{staticClass:"portfolio-list-item__inner"},[o("g-link",{staticClass:"portfolio-list-item__link",attrs:{to:t.portfolioItem.path}},[o("div",{staticClass:"portfolio-list-item__thumbnail-container"},[o("div",{staticClass:"portfolio-list-item__thumbnail",style:t.backgroundThumbnailStyle})]),o("div",{staticClass:"portfolio-list-item__summary-container"},[t.isPortfolioItemType("article")?o("PortfolioListItemArticle",{attrs:{date:t.portfolioItem.date,title:t.portfolioItem.title,summary:t.portfolioItemSummary}}):t.isPortfolioItemType("project")?o("PortfolioListItemProject",{attrs:{title:t.portfolioItem.title,summary:t.portfolioItem.summary}}):t._e()],1)])],1)])])}),[],!1,null,"7c5cd2d4",null).exports),p={name:"PortfolioList",components:{PortfolioListItem:f},props:{animationPreviousItemLength:i.a.number.def(0),columns:f.props.columns,portfolioItemType:f.props.portfolioItemType,portfolioItems:i.a.arrayOf(f.props.portfolioItem)},methods:{getAnimationDelay:function(t){return 100*t+100*this.animationPreviousItemLength}}},d=(o("Vow0"),Object(l.a)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{staticClass:"portfolio-list"},t._l(t.portfolioItems,(function(e,i){return o("PortfolioListItem",{key:i,attrs:{columns:t.columns,"portfolio-item":e,"portfolio-item-type":t.portfolioItemType,"animation-delay-in-ms":t.getAnimationDelay(i)}})})),1)}),[],!1,null,"7c8d844c",null));e.a=d.exports},"5H3o":function(t,e,o){},"7+e5":function(t,e,o){"use strict";o("/8oZ")},Ck6W:function(t,e,o){"use strict";o("YdRg")},DQNa:function(t,e,o){var i=o("4zBA"),r=o("busE"),s=Date.prototype,n=i(s.toString),a=i(s.getTime);"Invalid Date"!=String(new Date(NaN))&&r(s,"toString",(function(){var t=a(this);return t==t?n(this):"Invalid Date"}))},JTJg:function(t,e,o){"use strict";var i=o("I+eb"),r=o("4zBA"),s=o("WjRb"),n=o("HYAF"),a=o("V37c"),l=o("qxPZ"),c=r("".indexOf);i({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(a(n(this)),a(s(t)),arguments.length>1?arguments[1]:void 0)}})},"NX//":function(t,e,o){},TeQF:function(t,e,o){"use strict";var i=o("I+eb"),r=o("tycR").filter;i({target:"Array",proto:!0,forced:!o("Hd5f")("filter")},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},Vow0:function(t,e,o){"use strict";o("pAoG")},YdRg:function(t,e,o){},cRu8:function(t,e,o){"use strict";o("NX//")},coj5:function(t,e,o){"use strict";o("5H3o")},ejZB:function(t,e,o){"use strict";o.d(e,"a",(function(){return s}));var i=o("sX7g"),r=function(t,e){return Object(i.d)(Object(i.e)(e),i.h,i.g)(t)},s=function(t,e){return Object(i.f)(Object(i.b)(r)(i.a,e),t)}},"fvH/":function(t,e,o){"use strict";var i=o("hNR7"),r={name:"PortfolioGallery",props:{header:i.a.string.isRequired,showRecent:i.a.bool.def(!0)}},s=(o("coj5"),o("7uw+")),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"portfolio__container"},[o("h1",{staticClass:"portfolio__header",attrs:{"data-test":"header"}},[t._v("\n    "+t._s(t.header)+"\n  ")]),o("div",{directives:[{name:"show",rawName:"v-show",value:t.showRecent,expression:"showRecent"}],staticClass:"portfolio__list-container",attrs:{"data-test":"portfolio-recent"}},[o("h2",{staticClass:"portfolio__subheader"},[t._v("\n      Recent\n    ")]),t._t("recent")],2),o("hr",{directives:[{name:"show",rawName:"v-show",value:t.showRecent,expression:"showRecent"}],staticClass:"portfolio__list-divider",attrs:{"data-test":"portfolio-divider"}}),o("div",{staticClass:"portfolio__list-container",attrs:{"data-test":"portfolio-all"}},[o("h2",{staticClass:"portfolio__subheader"},[t._v("\n      All\n    ")]),t._t("all")],2)])}),[],!1,null,"7cbefe1e",null);e.a=n.exports},fx0o:function(t,e,o){"use strict";o.r(e);o("2B1R"),o("TeQF"),o("07d7"),o("yq1k"),o("JTJg"),o("DQNa");var i=o("sX7g"),r=o("fvH/"),s=o("3XMW"),n=o("ejZB"),a={name:"PageProjectGallery",components:{PortfolioGallery:r.a,PortfolioList:s.a},metaInfo:{titleTemplate:"Projects - %s"},computed:{portfolioItemsAll:function(){var t=this.projectsRecent.map((function(t){return t.id})),e=this.projectsAllSorted.filter((function(e){var o=e.id;return!t.includes(o)}));return this.getFormattedPortfolioItems(e)},portfolioItemsRecent:function(){return this.getFormattedPortfolioItems(this.projectsRecent)},portfolioItemsRecentColumnNumber:function(){return Math.min(2,this.portfolioItemsRecentLength)},portfolioItemsRecentLength:function(){return this.portfolioItemsRecent.length},projectsAllSorted:function(){var t=Object(i.c)(Object(i.e)("node"),this.$page.allProject.edges);return Object(n.a)(t,"title")},projectsRecent:function(){var t=this.projectsAllSorted;return this.getRecentProjects(t)},recentProjectsExist:function(){return this.portfolioItemsRecentLength>0}},methods:{getFormattedPortfolioItems:function(t){return t.map((function(t){return{path:t.path,summary:t.summary,thumbnail:t.thumbnail,title:t.title}}))},getRecentProjects:function(t){var e=new Date;return t.filter((function(t){var o=t.postDate,i=new Date(o),r=Math.abs(e-i);return Math.ceil(r/864e5)<=120}))}}},l=o("7uw+"),c=null,u=Object(l.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Layout",[o("PortfolioGallery",{attrs:{header:"Projects","show-recent":t.recentProjectsExist},scopedSlots:t._u([{key:"recent",fn:function(){return[o("PortfolioList",{ref:"recentProjects",attrs:{"data-test":"recent-projects",columns:t.portfolioItemsRecentColumnNumber,"portfolio-items":t.portfolioItemsRecent,"portfolio-item-type":"project"}})]},proxy:!0},{key:"all",fn:function(){return[o("PortfolioList",{attrs:{"animation-previous-item-length":t.portfolioItemsRecentLength,columns:3,"portfolio-items":t.portfolioItemsAll,"portfolio-item-type":"project"}})]},proxy:!0}])})],1)}),[],!1,null,null,null);"function"==typeof c&&c(u);e.default=u.exports},pAoG:function(t,e,o){},yq1k:function(t,e,o){"use strict";var i=o("I+eb"),r=o("TWQb").includes,s=o("RNIs");i({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);