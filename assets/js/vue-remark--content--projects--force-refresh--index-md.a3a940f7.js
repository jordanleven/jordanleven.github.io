(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}},lWEE:function(e,t,o){"use strict";o.r(t);var r=o("KHd+"),n=o("UQSp"),s=o("Kw5r");function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}s.default.config.optionMergeStrategies;var u={VueRemarkRoot:n.a},a=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(u).forEach((function(e){"object"===i(u[e])&&"function"==typeof u[e].render||"function"==typeof u[e]&&"function"==typeof u[e].options.render?t[e]=u[e]:o[e]=function(){return u[e]}}))},c=s.default.config.optionMergeStrategies,p="__vueRemarkFrontMatter",f={excerpt:null,title:"Force Refresh",postDate:"2020-07-16T00:00:00.000Z",backgroundImage:"./images/blue-background.png",screenshotImage:"./images/hero.png",shortIntro:!0,summary:"A WordPress plugin for forcing page refreshes.",thumbnail:"./images/thumbnail.png",projectUrl:"https://wordpress.org/plugins/force-refresh/"};var l=function(e){e.options[p]&&(e.options[p]=f),s.default.util.defineReactive(e.options,p,f),e.options.computed=c.computed({$frontmatter:function(){return e.options[p]}},e.options.computed)},h=Object(r.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("VueRemarkRoot",[t("p",[this._v("Force Refresh is a lightweight WordPress plugin born out of a simple necessity: the ability to force a user to refresh their browser on single-page applications. This plugin allows site owners to request users that are currently connected to their website by storing current site and page versions as hexadecimal representations of the time the refresh was requested. Browsers then periodically check to see if the stored site version corresponded to the current site version and, if not, refresh the page.")]),t("p",[this._v("Force Refresh is an "),t("a",{attrs:{href:"https://github.com/jordanleven/force-refresh",target:"_blank",rel:"nofollow noopener noreferrer"}},[this._v("open-source")]),this._v(" plugin with a custom Vue-powered admin front-end that uses a series of WordPress-flavored HTTP APIs for authentication and storing current versions of the site.")])])}),[],!1,null,null,null);"function"==typeof a&&a(h),"function"==typeof l&&l(h);t.default=h.exports}}]);