(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{140:function(e,t,a){"use strict";a.r(t),a.d(t,"pageQuery",function(){return f});a(296),a(51);var n=a(7),r=a.n(n),o=a(182),i=a.n(o),l=a(0),c=a.n(l),u=a(183),s=a.n(u),m=a(210),d=a(158),h=function(e){function t(){return e.apply(this,arguments)||this}return r()(t,e),t.prototype.render=function(){var e=s()(this,"props.data.site.siteMetadata.title"),t=s()(this,"props.data.site.siteMetadata.description");console.log("This is trouble");var a=s()(this,"props.data.allMdx.edges");return a.map(function(e){var t=e.node;console.log("/"+t.parent.sourceInstanceName+"/"+t.parent.name),t.fields={slug:"/"+t.parent.sourceInstanceName+"/"+t.parent.name}}),c.a.createElement(d.a,{location:this.props.location},c.a.createElement(i.a,{htmlAttributes:{lang:"en"},meta:[{name:"description",content:t}],title:e}),c.a.createElement("main",null,a.map(function(e){var t=e.node,a=s()(t,"frontmatter.title")||t.fields.slug;return c.a.createElement("div",{key:t.fields.slug},null===t.frontmatter.cover?c.a.createElement(m.a,{link:t.fields.slug,cover:"",title:a,date:t.frontmatter.date,htmlExcerpt:{__html:t.excerpt}}):c.a.createElement(m.a,{link:t.fields.slug,cover:t.frontmatter.cover.childImageSharp.fluid.src,title:a,date:t.frontmatter.date,htmlExcerpt:{__html:t.excerpt}}))})))},t}(l.Component);t.default=h;var f="2386920561"},149:function(e,t){e.exports={title:"Choice of Energy",description:"This is an attempt to share knowledge about energy",siteUrl:"https://choiceofenergy.com",footerText:"**Choice of Energy**<br><br>trying to share energy knowledge",author:"Nikhil Kondabala",authorImage:"./src/componenets/biopic.jpg",authorBio:"Hello, I'm Nikhil Kondabala I work in the advanced energy economy. This is space where I try to explore open datasets about the energy and share the knowledge from them.",social:{twitter:"codenamenikky",github:"codenamenikky",reddit:""},googleAnalyticsTrackingId:"ADD YOUR TRACKING ID HERE",font:"Roboto",fontHeadings:"Merriweather",brandColor:"#7eafab",backgroundColor:"#fff"}},152:function(e,t,a){var n;e.exports=(n=a(157))&&n.default||n},153:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return f}),a.d(t,"StaticQueryContext",function(){return d}),a.d(t,"StaticQuery",function(){return h});var n=a(0),r=a.n(n),o=a(4),i=a.n(o),l=a(148),c=a.n(l);a.d(t,"Link",function(){return c.a}),a.d(t,"withPrefix",function(){return l.withPrefix}),a.d(t,"navigate",function(){return l.navigate}),a.d(t,"push",function(){return l.push}),a.d(t,"replace",function(){return l.replace}),a.d(t,"navigateTo",function(){return l.navigateTo});var u=a(152),s=a.n(u);a.d(t,"PageRenderer",function(){return s.a});var m=a(34);a.d(t,"parsePath",function(){return m.a});var d=r.a.createContext({}),h=function(e){return r.a.createElement(d.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}h.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},156:function(e,t,a){e.exports=a.p+"static/biopic-540297b09e86ab9e4ac8c3c9856f1231.jpg"},157:function(e,t,a){"use strict";a.r(t);var n=a(10),r=a.n(n),o=a(0),i=a.n(o),l=a(4),c=a.n(l),u=a(50),s=a(2),m=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return i.a.createElement(u.a,r()({location:t,pageResources:a},a.json))};m.propTypes={location:c.a.shape({pathname:c.a.string.isRequired}).isRequired},t.default=m},158:function(e,t,a){"use strict";var n=a(169),r=a.n(n),o=a(359),i=a(360),l=a(151),c=a(0),u=a.n(c),s=a(149),m=a.n(s),d={global:{font:{family:m.a.font},colors:{brand:m.a.brandColor}},heading:{font:{family:m.a.fontHeadings}}},h=a(361),f=a(362),p=a(363),g=a(358),b=a(355),E=a(356),y=a(357),v=a(156),w=a.n(v),x=function(){return u.a.createElement("section",null,u.a.createElement(i.a,{round:"small",pad:"medium",margin:"small",background:"light-2"},u.a.createElement(i.a,{direction:"row"},u.a.createElement(i.a,{pad:{top:"none",bottom:"medium",right:"medium",left:"none"},round:"large",height:"xsmall",width:"xsmall"},u.a.createElement(h.a,{fit:"contain",title:m.a.author,alt:m.a.author,src:w.a})),u.a.createElement(i.a,null,u.a.createElement(f.a,{weight:"bold",size:"large",margin:{left:"small"}},m.a.author),u.a.createElement(i.a,{direction:"row"},m.a.social.twitter.length>1?u.a.createElement(p.a,{href:"https://twitter.com/"+m.a.social.twitter,icon:u.a.createElement(b.a,{size:"small"})}):"",m.a.social.github.length>1?u.a.createElement(p.a,{href:"https://github.com/"+m.a.social.github,icon:u.a.createElement(E.a,{size:"small"})}):"",m.a.social.reddit.length>1?u.a.createElement(p.a,{href:"https://reddit.com/user/"+m.a.social.reddit,icon:u.a.createElement(y.a,{size:"small"})}):""))),u.a.createElement(f.a,{size:"small"},u.a.createElement(g.a,null,m.a.authorBio))))},k=function(){return u.a.createElement("footer",null,u.a.createElement(i.a,{background:"light-2",pad:"large",align:"center"},u.a.createElement(g.a,null,m.a.footerText)))},C=a(364),I=a(153),T=function(){return u.a.createElement("header",null,u.a.createElement(i.a,{margin:"small"},u.a.createElement(I.Link,{style:{boxShadow:"none",textDecoration:"none"},to:"/"},u.a.createElement(C.a,{textAlign:"center",color:"brand",margin:"small"},m.a.title)),u.a.createElement(f.a,{textAlign:"center",color:"brand"},m.a.description)))};function q(){var e=r()(["\n  img {\n    border-radius: 14px;\n    max-width: 100%;\n  }\n  body {\n    margin: 0;\n  }\n  a:hover {\n    opacity: 0.9;\n  }\n"]);return q=function(){return e},e}Object(l.c)(q());t.a=function(e){return u.a.createElement("div",null,u.a.createElement(o.a,{theme:d},u.a.createElement(i.a,{background:m.a.backgroundColor,style:{minHeight:"100vh"},responsive:!0,margin:"small",align:"center"},u.a.createElement(T,null),u.a.createElement(i.a,{direction:"row-responsive"},u.a.createElement(i.a,{width:"large"},e.children),u.a.createElement("aside",null,u.a.createElement(i.a,{width:"medium"},u.a.createElement(x,null))))),u.a.createElement(k,null)))}},210:function(e,t,a){"use strict";a(211);var n=a(360),r=a(364),o=a(362),i=a(153),l=a(0),c=a.n(l),u=a(151),s=u.b.div.withConfig({displayName:"CardPost__CardHover",componentId:"sc-1nlywk7-0"})([":hover{opacity:0.8;}"]),m=Object(u.b)(n.a).withConfig({displayName:"CardPost__BoxCover",componentId:"sc-1nlywk7-1"})(["border-top-left-radius:12px;border-top-right-radius:12px;border-bottom-right-radius:0px;border-bottom-left-radius:0px;"]);t.a=function(e){return c.a.createElement("article",null,c.a.createElement(s,null,c.a.createElement(i.Link,{to:e.link,style:{boxShadow:"none",textDecoration:"none",textColor:"none"}},c.a.createElement(n.a,{round:"small",elevation:"small",background:"light-1",margin:{top:"small",bottom:"medium",right:"small",left:"small"}},e.cover<1?"":c.a.createElement(m,{basis:"medium",fill:"true",background:{image:"url("+e.cover+")"}}),c.a.createElement(n.a,{pad:"medium"},c.a.createElement(r.a,{margin:"xsmall",level:"2"},e.title),c.a.createElement(o.a,{dangerouslySetInnerHTML:e.htmlExcerpt}),c.a.createElement(o.a,{margin:{top:"small"},size:"small"},e.date))))))}},211:function(e,t,a){"use strict";a(212)("link",function(e){return function(t){return e(this,"a","href",t)}})},212:function(e,t,a){var n=a(6),r=a(17),o=a(26),i=/"/g,l=function(e,t,a,n){var r=String(o(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),l+">"+r+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),n(n.P+n.F*r(function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3}),"String",a)}},296:function(e,t,a){var n=a(27).f,r=Function.prototype,o=/^\s*function ([^ (]*)/;"name"in r||a(18)&&n(r,"name",{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=component---src-pages-index-js-cebdd2388bd3eb17f82e.js.map