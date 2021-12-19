(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{I4FR:function(e,t,o){"use strict";o.r(t);var n=o("7uw+"),r=o("UQSp"),a=o("Kw5r");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.default.config.optionMergeStrategies;var i={VueRemarkRoot:r.a},s=function(e){var t=e.options.components=e.options.components||{},o=e.options.computed=e.options.computed||{};Object.keys(i).forEach((function(e){"object"===l(i[e])&&"function"==typeof i[e].render||"function"==typeof i[e]&&"function"==typeof i[e].options.render?t[e]=i[e]:o[e]=function(){return i[e]}}))},u=a.default.config.optionMergeStrategies,c="__vueRemarkFrontMatter",d={excerpt:null,title:"Billables Buddy",postDate:"2021-12-06T00:00:00.000Z",backgroundImage:"./images/billables-buddy-background.jpg",screenshotImage:"./images/hero.png",shortIntro:!0,summary:"A small but powerful xbar applet to keep track of billable expectations via Forecast and Harvest APIs.",thumbnail:"./images/thumbnail.png",projectUrl:"https://github.com/jordanleven/billables-buddy",photoGallery:[{image:"./images/gallery/billables-buddy-1.jpg"},{image:"./images/gallery/billables-buddy-2.jpg"},{image:"./images/gallery/billables-buddy-3.jpg"}]};var p=function(e){e.options[c]&&(e.options[c]=d),a.default.util.defineReactive(e.options,c,d),e.options.computed=u.computed({$frontmatter:function(){return e.options[c]}},e.options.computed)},b=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("VueRemarkRoot",[o("p",[e._v("Billables Buddy was created out of a simple necessity: to help monitor your progress towards billable expectations when using "),o("a",{attrs:{href:"https://www.forecast.app/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Forecast")]),e._v(" for scheduling and "),o("a",{attrs:{href:"https://getharvest.com",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Harvest")]),e._v(" for time tracking. It does this by leveraging data provided by public APIs from both platforms and calculating billable expectations given the starting time for the user and the hours they've billed. Throughout the day, the status and estimated end-of-day will be automatically recalculated based on real-time progress towards billable expectations set in Forecast. Breakdowns include expected and actual hours by type (billable and non-billable) and by individual project.")]),o("p",[e._v("A single "),o("a",{attrs:{href:"https://github.com/jordanleven/billables-buddy/blob/main/main.go#L13",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("easy-to-understand emoji")]),e._v(" is used to convey the current status based on the current date and time and the "),o("a",{attrs:{href:"https://github.com/jordanleven/billables-buddy#definitions",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("user's current start time")]),e._v(". On-track (✅) indicates that users are on-track, ahead of, or within fifteen minutes of current billable expectations. Behind (❌) indicates that users are at least 15 minutes behind current billable expectations. Over (🛑) indicates users are over total billable for the week.")]),o("p",[e._v("Billables Buddy, an "),o("a",{attrs:{href:"https://github.com/jordanleven/billables-buddy",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("open-source")]),e._v(" project, is written entirely in "),o("a",{attrs:{href:"https://go.dev/",target:"_blank",rel:"nofollow noopener noreferrer"}},[e._v("Go")]),e._v(" and is compiled to a single executable binary to make recalculations quick and lightweight.")])])}),[],!1,null,null,null);"function"==typeof s&&s(b),"function"==typeof p&&p(b);t.default=b.exports},UQSp:function(e,t,o){"use strict";t.a={name:"VueRemarkRoot",render:function(e){return e("div",null,this.$slots.default)}}}}]);