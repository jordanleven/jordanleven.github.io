(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"/8oZ":function(t,e,i){},"3XMW":function(t,e,i){"use strict";var o=i("hNR7"),r=i("VTBJ"),s=(i("DQNa"),Object(r.a)(Object(r.a)({},{timeZone:"America/New_York"}),{},{day:"numeric",month:"long",year:"numeric"})),n=function(t){return Object(r.a)({},function(t){switch(t){case"medium":default:return s}}(t))},a={name:"PortfolioListItemArticle",props:{date:o.a.string,summary:o.a.string,title:o.a.string.isRequired},computed:{formattedDate:function(){return t=this.date,i=null==(e={dateFormat:"medium"})?void 0:e.dateFormat,o=new Date(t),r=n(i),o.toLocaleDateString("en-US",r);var t,e,i,o,r}}},l=(i("7+e5"),i("7uw+")),c=Object(l.a)(a,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"portfolio-list-item-article"},[t.date?i("p",{staticClass:"portfolio-list-item-article__date",attrs:{"data-test":"date"}},[t._v("\n    "+t._s(t.formattedDate)+"\n  ")]):t._e(),i("div",{staticClass:"portfolio-list-item-article__header-container"},[i("h3",{staticClass:"portfolio-list-item-article__header",attrs:{"data-test":"header"}},[t._v("\n      "+t._s(t.title)+"\n    ")])]),t.summary?i("p",{staticClass:"portfolio-list-item-article__summary",attrs:{"data-test":"summary"}},[t._v("\n    "+t._s(t.summary)+"\n  ")]):t._e()])}),[],!1,null,"83fe6e3c",null).exports,u={name:"PortfolioListItemProject",props:{summary:o.a.string,title:o.a.string.isRequired}},m=(i("Ck6W"),{name:"PortfolioListItem",components:{PortfolioListItemArticle:c,PortfolioListItemProject:Object(l.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"portfolio-list-item-project"},[e("div",{staticClass:"portfolio-list-item-project__header-container"},[e("h3",{staticClass:"portfolio-list-item-project__header",attrs:{"data-test":"header"}},[this._v("\n      "+this._s(this.title)+"\n    ")])]),e("p",{staticClass:"portfolio-list-item-project__summary",attrs:{"data-test":"summary"}},[this._v("\n    "+this._s(this.summary)+"\n  ")])])}),[],!1,null,"491353cc",null).exports},props:{animationDelayInMs:o.a.number,columns:o.a.oneOf([0,1,2,3,4]).def(1),portfolioItem:o.a.shape({date:o.a.string,path:o.a.string.isRequired,summary:o.a.string.isRequired,thumbnail:o.a.object.isRequired,title:o.a.string.isRequired}),portfolioItemType:o.a.oneOf(["article","project"]).isRequired},data:function(){return{isLoaded:!1}},computed:{backgroundThumbnailStyle:function(){return{backgroundImage:"url('".concat(this.portfolioItem.thumbnail.src,"')")}},classPortfolioList:function(){var t=this.columns,e=this.portfolioItemType;return{"portfolio-list-item--four":4===t,"portfolio-list-item--light":t>=3&&"project"===e,"portfolio-list-item--primary":1===t,"portfolio-list-item--three":3===t,"portfolio-list-item--two":2===t}},isVisible:function(){return this.isLoaded},portfolioItemSummary:function(){return this.portfolioItemsIsPrimary?this.portfolioItem.summary:null},portfolioItemsIsPrimary:function(){return 1===this.columns},stylePortfolioList:function(){return{transitionDelay:"".concat(this.animationDelayInMs,"ms")}}},mounted:function(){this.isLoaded=!0},methods:{isPortfolioItemType:function(t){return this.portfolioItemType===t}}}),f=(i("NYqk"),Object(l.a)(m,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("transition",{attrs:{name:"fade"}},[i("li",{directives:[{name:"show",rawName:"v-show",value:t.isVisible,expression:"isVisible"}],staticClass:"portfolio-list-item",class:t.classPortfolioList,style:t.stylePortfolioList,attrs:{"data-test":"list-item"}},[i("div",{staticClass:"portfolio-list-item__inner"},[i("g-link",{staticClass:"portfolio-list-item__link",attrs:{to:t.portfolioItem.path}},[i("div",{staticClass:"portfolio-list-item__thumbnail-container"},[i("div",{staticClass:"portfolio-list-item__thumbnail",style:t.backgroundThumbnailStyle})]),i("div",{staticClass:"portfolio-list-item__summary-container"},[t.isPortfolioItemType("article")?i("PortfolioListItemArticle",{attrs:{date:t.portfolioItem.date,title:t.portfolioItem.title,summary:t.portfolioItemSummary}}):t.isPortfolioItemType("project")?i("PortfolioListItemProject",{attrs:{title:t.portfolioItem.title,summary:t.portfolioItem.summary}}):t._e()],1)])],1)])])}),[],!1,null,"43551b1c",null).exports),p={name:"PortfolioList",components:{PortfolioListItem:f},props:{animationPreviousItemLength:o.a.number.def(0),columns:f.props.columns,portfolioItemType:f.props.portfolioItemType,portfolioItems:o.a.arrayOf(f.props.portfolioItem)},methods:{getAnimationDelay:function(t){return 100*t+100*this.animationPreviousItemLength}}},d=(i("Vow0"),Object(l.a)(p,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",{staticClass:"portfolio-list"},t._l(t.portfolioItems,(function(e,o){return i("PortfolioListItem",{key:o,attrs:{columns:t.columns,"portfolio-item":e,"portfolio-item-type":t.portfolioItemType,"animation-delay-in-ms":t.getAnimationDelay(o)}})})),1)}),[],!1,null,"7c8d844c",null));e.a=d.exports},"5H3o":function(t,e,i){},"6CHQ":function(t,e,i){},"7+e5":function(t,e,i){"use strict";i("/8oZ")},Ck6W:function(t,e,i){"use strict";i("YdRg")},DQNa:function(t,e,i){var o=i("4zBA"),r=i("busE"),s=Date.prototype,n=o(s.toString),a=o(s.getTime);"Invalid Date"!=String(new Date(NaN))&&r(s,"toString",(function(){var t=a(this);return t==t?n(this):"Invalid Date"}))},F3eR:function(t,e,i){"use strict";i.r(e);i("DQNa"),i("TeQF"),i("07d7"),i("Junv"),i("2B1R"),i("yq1k"),i("JTJg");var o=i("sX7g"),r=i("hNR7"),s={name:"PortfolioGallery",props:{header:r.a.string.isRequired,showRecent:r.a.bool.def(!0)}},n=(i("coj5"),i("7uw+")),a=Object(n.a)(s,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"portfolio__container"},[i("h1",{staticClass:"portfolio__header",attrs:{"data-test":"header"}},[t._v("\n    "+t._s(t.header)+"\n  ")]),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showRecent,expression:"showRecent"}],staticClass:"portfolio__list-container",attrs:{"data-test":"portfolio-recent"}},[i("h2",{staticClass:"portfolio__subheader"},[t._v("\n      Recent\n    ")]),t._t("recent")],2),i("hr",{directives:[{name:"show",rawName:"v-show",value:t.showRecent,expression:"showRecent"}],staticClass:"portfolio__list-divider",attrs:{"data-test":"portfolio-divider"}}),i("div",{staticClass:"portfolio__list-container",attrs:{"data-test":"portfolio-all"}},[i("h2",{staticClass:"portfolio__subheader"},[t._v("\n      All\n    ")]),t._t("all")],2)])}),[],!1,null,"7cbefe1e",null).exports,l=i("3XMW"),c=function(t,e){return Object(o.d)(Object(o.e)(e),o.h,o.g)(t)},u={name:"PageArticleGallery",components:{PortfolioGallery:a,PortfolioList:l.a},metaInfo:{titleTemplate:"Articles - %s"},computed:{articles:function(){var t,e,i=Object(o.c)(Object(o.e)("node"),this.$page.allArticle.edges),r=new Date,s=i.filter((function(t){var e=t.publicationDate;return!(new Date(e)-r>0)}));return(t=s,e="publicationDate",Object(o.f)(Object(o.b)(c)(o.a,e),t)).reverse()},articlesRecent:function(){var t=this.articles;return this.getRecentArticles(t)},portfolioItemsAll:function(){var t=this.articlesRecent.map((function(t){return t.id})),e=this.articles.filter((function(e){var i=e.id;return!t.includes(i)}));return this.getFormattedPortfolioItems(e)},portfolioItemsRecent:function(){return this.getFormattedPortfolioItems(this.articlesRecent)},portfolioItemsRecentLength:function(){return this.portfolioItemsRecent.length},recentArticlesExist:function(){return this.portfolioItemsRecentLength>0}},methods:{getFormattedPortfolioItems:function(t){return t.map((function(t){return{date:t.publicationDate,path:t.path,summary:t.summary,thumbnail:t.thumbnail,title:t.title}}))},getRecentArticles:function(t){var e=new Date;return t.filter((function(t){var i=t.publicationDate,o=new Date(i),r=Math.abs(e-o);return Math.ceil(r/864e5)<=120}))}}},m=null,f=Object(n.a)(u,(function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("Layout",[i("PortfolioGallery",{attrs:{header:"Articles","show-recent":t.recentArticlesExist},scopedSlots:t._u([{key:"recent",fn:function(){return[i("PortfolioList",{attrs:{"data-test":"recent-articles",columns:1,"portfolio-items":t.portfolioItemsRecent,"portfolio-item-type":"article"}})]},proxy:!0},{key:"all",fn:function(){return[i("PortfolioList",{attrs:{"animation-previous-item-length":t.portfolioItemsRecentLength,columns:3,"portfolio-items":t.portfolioItemsAll,"portfolio-item-type":"article"}})]},proxy:!0}])})],1)}),[],!1,null,null,null);"function"==typeof m&&m(f);e.default=f.exports},JTJg:function(t,e,i){"use strict";var o=i("I+eb"),r=i("4zBA"),s=i("WjRb"),n=i("HYAF"),a=i("V37c"),l=i("qxPZ"),c=r("".indexOf);o({target:"String",proto:!0,forced:!l("includes")},{includes:function(t){return!!~c(a(n(this)),a(s(t)),arguments.length>1?arguments[1]:void 0)}})},Junv:function(t,e,i){"use strict";var o=i("I+eb"),r=i("4zBA"),s=i("6LWA"),n=r([].reverse),a=[1,2];o({target:"Array",proto:!0,forced:String(a)===String(a.reverse())},{reverse:function(){return s(this)&&(this.length=this.length),n(this)}})},NYqk:function(t,e,i){"use strict";i("6CHQ")},TeQF:function(t,e,i){"use strict";var o=i("I+eb"),r=i("tycR").filter;o({target:"Array",proto:!0,forced:!i("Hd5f")("filter")},{filter:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},Vow0:function(t,e,i){"use strict";i("pAoG")},YdRg:function(t,e,i){},coj5:function(t,e,i){"use strict";i("5H3o")},pAoG:function(t,e,i){},yq1k:function(t,e,i){"use strict";var o=i("I+eb"),r=i("TWQb").includes,s=i("RNIs");o({target:"Array",proto:!0},{includes:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),s("includes")}}]);