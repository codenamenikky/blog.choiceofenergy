(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{147:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(164),i=n.n(o),c=n(0),l=n.n(c),u=n(179),s=n(159),d={React:l.a,MDXTag:s.MDXTag},f=n(214);n.d(t,"pageQuery",function(){return p});var p="2750763803";t.default=function(e){var t=e.children,n=i()(e,["children"]);return l.a.createElement(u.MDXScopeProvider,{__mdxScope:a()({},d)},l.a.createElement(f.a,n,t))}},149:function(e,t){e.exports={title:"Choice of Energy",description:"This is an attempt to share knowledge about energy",siteUrl:"https://choiceofenergy.com",footerText:"**Choice of Energy**<br><br>trying to share energy knowledge",author:"Nikhil Kondabala",authorImage:"./src/componenets/biopic.jpg",authorBio:"Hello, I'm Nikhil Kondabala I work in the advanced energy economy. This is space where I try to explore open datasets about the energy and share the knowledge from them.",social:{twitter:"codenamenikky",github:"codenamenikky",reddit:""},googleAnalyticsTrackingId:"ADD YOUR TRACKING ID HERE",font:"Roboto",fontHeadings:"Merriweather",brandColor:"#7eafab",backgroundColor:"#fff"}},152:function(e,t,n){var r;e.exports=(r=n(157))&&r.default||r},153:function(e,t,n){"use strict";n.r(t),n.d(t,"graphql",function(){return m}),n.d(t,"StaticQueryContext",function(){return f}),n.d(t,"StaticQuery",function(){return p});var r=n(0),a=n.n(r),o=n(4),i=n.n(o),c=n(148),l=n.n(c);n.d(t,"Link",function(){return l.a}),n.d(t,"withPrefix",function(){return c.withPrefix}),n.d(t,"navigate",function(){return c.navigate}),n.d(t,"push",function(){return c.push}),n.d(t,"replace",function(){return c.replace}),n.d(t,"navigateTo",function(){return c.navigateTo});var u=n(152),s=n.n(u);n.d(t,"PageRenderer",function(){return s.a});var d=n(34);n.d(t,"parsePath",function(){return d.a});var f=a.a.createContext({}),p=function(e){return a.a.createElement(f.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):a.a.createElement("div",null,"Loading (StaticQuery)")})};function m(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.withMDXComponents=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=c(n(0)),o=c(n(49)),i=c(n(4));function c(e){return e&&e.__esModule?e:{default:e}}var l=(0,o.default)({}),u=l.Provider,s=l.Consumer;t.withMDXComponents=function(e){return function(t){var n=t.components,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["components"]);return a.default.createElement(s,null,function(t){return a.default.createElement(e,r({components:n||t},o))})}};var d=function(e){var t=e.components,n=e.children;return a.default.createElement(u,{value:t},n)};d.propTypes={components:i.default.object.isRequired,children:i.default.element.isRequired},t.default=d},156:function(e,t,n){e.exports=n.p+"static/biopic-540297b09e86ab9e4ac8c3c9856f1231.jpg"},157:function(e,t,n){"use strict";n.r(t);var r=n(10),a=n.n(r),o=n(0),i=n.n(o),c=n(4),l=n.n(c),u=n(50),s=n(2),d=function(e){var t=e.location,n=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,a()({location:t,pageResources:n},n.json))};d.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=d},158:function(e,t,n){"use strict";var r=n(169),a=n.n(r),o=n(359),i=n(364),c=n(151),l=n(0),u=n.n(l),s=n(149),d=n.n(s),f={global:{font:{family:d.a.font},colors:{brand:d.a.brandColor}},heading:{font:{family:d.a.fontHeadings}}},p=n(360),m=n(361),h=n(362),g=n(358),b=n(355),v=n(356),y=n(357),E=n(156),w=n.n(E),O=function(){return u.a.createElement("section",null,u.a.createElement(i.a,{round:"small",pad:"medium",margin:"small",background:"light-2"},u.a.createElement(i.a,{direction:"row"},u.a.createElement(i.a,{pad:{top:"none",bottom:"medium",right:"medium",left:"none"},round:"large",height:"xsmall",width:"xsmall"},u.a.createElement(p.a,{fit:"contain",title:d.a.author,alt:d.a.author,src:w.a})),u.a.createElement(i.a,null,u.a.createElement(m.a,{weight:"bold",size:"large",margin:{left:"small"}},d.a.author),u.a.createElement(i.a,{direction:"row"},d.a.social.twitter.length>1?u.a.createElement(h.a,{href:"https://twitter.com/"+d.a.social.twitter,icon:u.a.createElement(b.a,{size:"small"})}):"",d.a.social.github.length>1?u.a.createElement(h.a,{href:"https://github.com/"+d.a.social.github,icon:u.a.createElement(v.a,{size:"small"})}):"",d.a.social.reddit.length>1?u.a.createElement(h.a,{href:"https://reddit.com/user/"+d.a.social.reddit,icon:u.a.createElement(y.a,{size:"small"})}):""))),u.a.createElement(m.a,{size:"small"},u.a.createElement(g.a,null,d.a.authorBio))))},j=function(){return u.a.createElement("footer",null,u.a.createElement(i.a,{background:"light-2",pad:"large",align:"center"},u.a.createElement(g.a,null,d.a.footerText)))},_=n(363),P=n(153),k=function(){return u.a.createElement("header",null,u.a.createElement(i.a,{margin:"small"},u.a.createElement(P.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},u.a.createElement(_.a,{textAlign:"center",color:"brand",margin:"small"},d.a.title)),u.a.createElement(m.a,{textAlign:"center",color:"brand"},d.a.description)))};function x(){var e=a()(["\n  img {\n    border-radius: 14px;\n    max-width: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  a:hover {\n    opacity: 0.9;\n  }\n"]);return x=function(){return e},e}Object(c.c)(x());t.a=function(e){return u.a.createElement("div",null,u.a.createElement(o.a,{theme:f},u.a.createElement(i.a,{background:d.a.backgroundColor,style:{minHeight:"100vh"},responsive:!0,margin:"small",align:"center"},u.a.createElement(k,null),u.a.createElement(i.a,{direction:"row-responsive"},u.a.createElement(i.a,{width:"large"},e.children),u.a.createElement("aside",null,u.a.createElement(i.a,{width:"medium"},u.a.createElement(O,null))))),u.a.createElement(j,null)))}},159:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(162);Object.defineProperty(t,"MDXTag",{enumerable:!0,get:function(){return o(r).default}});var a=n(155);function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"MDXProvider",{enumerable:!0,get:function(){return o(a).default}})},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),o=n(0),i=u(o),c=u(n(168)),l=n(155);function u(e){return e&&e.__esModule?e:{default:e}}var s={inlineCode:"code",wrapper:"div"},d=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,o.Component),a(t,[{key:"render",value:function(){var e=this.props,t=e.name,n=e.parentName,a=e.props,o=void 0===a?{}:a,l=e.children,u=e.components,d=void 0===u?{}:u,f=e.Layout,p=e.layoutProps,m=d[n+"."+t]||d[t]||s[t]||t;return f?((0,c.default)(this,f),i.default.createElement(f,r({components:d},p),i.default.createElement(m,o,l))):i.default.createElement(m,o,l)}}]),t}();t.default=(0,l.withMDXComponents)(d)},179:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.MDXScopeProvider=t.withMDXScope=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a=o(n(0));function o(e){return e&&e.__esModule?e:{default:e}}var i=(0,o(n(49)).default)({}),c=i.Provider,l=i.Consumer;t.withMDXScope=function(e){return function(t){var n=t.scope,o=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n}(t,["scope"]);return a.default.createElement(l,null,function(t){return a.default.createElement(e,r({scope:n||t},o))})}};t.MDXScopeProvider=function(e){var t=e.__mdxScope,n=e.children;return a.default.createElement(c,{value:t},n)}},214:function(e,t,n){"use strict";var r=n(164),a=n.n(r),o=n(7),i=n.n(o),c=n(0),l=n.n(c),u=n(155),s=n(179),d=Object(s.withMDXScope)(Object(u.withMDXComponents)(({scope:e={},components:t={},children:n,...r})=>{const a={components:t,props:r,...e},o=Object.keys(a),i=o.map(e=>a[e]);return new Function("_fn",...o,`${n}`)({},...i)({components:t,...r})})),f=n(159),p=n(158);n.d(t,"a",function(){return m});var m=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){var e=this.props,t=e.children,n=e.data,r=a()(e,["children","data"]);return l.a.createElement(f.MDXProvider,{components:{h1:function(e){var t=e.children,n=a()(e,["children"]);return l.a.createElement("h1",n,t)},wrapper:"article"}},l.a.createElement(p.a,null,l.a.createElement("div",null,l.a.createElement("div",null,t),l.a.createElement(d,r,n.mdx.code.body))))},t}(c.Component)}}]);
//# sourceMappingURL=component---cache-gatsby-mdx-mdx-wrappers-dir-b-3-a-5-d-442-ddd-7-e-3-cc-91605-c-418-a-3765-bf-scope-hash-3010-b-3-badc-54-a-9-dfa-4-a-4-c-80-e-419-a-41-b-2-js-db4b8d4a00bfd54fc73f.js.map