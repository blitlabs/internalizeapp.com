"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[989],{72:function(e){var t=function(e,t){if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);var a;return e=Array.isArray(e)?e.map((function(e){return e.trim()})).filter((function(e){return e.length})).join("-"):e.trim(),0===e.length?"":1===e.length?t.pascalCase?e.toUpperCase():e.toLowerCase():(e!==e.toLowerCase()&&(e=function(e){for(var t=!1,a=!1,r=!1,n=0;n<e.length;n++){var i=e[n];t&&/[a-zA-Z]/.test(i)&&i.toUpperCase()===i?(e=e.slice(0,n)+"-"+e.slice(n),t=!1,r=a,a=!0,n++):a&&r&&/[a-zA-Z]/.test(i)&&i.toLowerCase()===i?(e=e.slice(0,n-1)+"-"+e.slice(n-1),r=a,a=!1,t=!0):(t=i.toLowerCase()===i&&i.toUpperCase()!==i,r=a,a=i.toUpperCase()===i&&i.toLowerCase()!==i)}return e}(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,(function(e,t){return t.toUpperCase()})).replace(/\d+(\w|$)/g,(function(e){return e.toUpperCase()})),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a)};e.exports=t,e.exports.default=t},3723:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return w},P:function(){return b},S:function(){return M},_:function(){return s},a:function(){return l},b:function(){return c},g:function(){return m},h:function(){return o}});var r=a(7294),n=(a(72),a(5697)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}var o=function(){return"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype};function c(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function m(e,t,a,r,n,i,s,o){var c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);var m=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}var u,d=["children"],p=function(e){var t=e.layout,a=e.width,n=e.height;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg height='"+n+"' width='"+a+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){var t=e.children,a=s(e,d);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],v=function(e){var t=e.src,a=e.srcSet,n=e.loading,i=e.alt,o=void 0===i?"":i,c=e.shouldLoad,m=s(e,f);return r.createElement("img",l({},m,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?a:void 0,"data-srcset":c?void 0:a,alt:o}))},y=function(e){var t=e.fallback,a=e.sources,n=void 0===a?[]:a,i=e.shouldLoad,o=void 0===i||i,c=s(e,h),m=c.sizes||(null==t?void 0:t.sizes),u=r.createElement(v,l({},c,t,{sizes:m,shouldLoad:o}));return n.length?r.createElement("picture",null,n.map((function(e){var t=e.media,a=e.srcSet,n=e.type;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,sizes:m})})),u):u};v.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};var E=["fallback"],b=function(e){var t=e.fallback,a=s(e,E);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};b.displayName="Placeholder",b.propTypes={fallback:n.string,sources:null==(u=y.propTypes)?void 0:u.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};var w=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};w.displayName="MainImage",w.propTypes=y.propTypes;var N,k,L=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},C={image:i().object.isRequired,alt:L},x=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],S=["style","className"],z=new Set,_=function(e){var t=e.as,n=void 0===t?"div":t,i=e.image,c=e.style,m=e.backgroundColor,u=e.className,d=e.class,p=e.onStartLoad,g=e.onLoad,f=e.onError,h=s(e,x),v=i.width,y=i.height,E=i.layout,b=function(e,t,a){var r={},n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}(v,y,E),w=b.style,L=b.className,C=s(b,S),_=(0,r.useRef)(),T=(0,r.useMemo)((function(){return JSON.stringify(i.images)}),[i.images]);d&&(u=d);var I=function(e,t,a){var r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg height=\''+a+"' width='"+t+"' xmlns='http://www.w3.org/2000/svg' version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(E,v,y);return(0,r.useEffect)((function(){N||(N=Promise.all([a.e(774),a.e(217)]).then(a.bind(a,9217)).then((function(e){var t=e.renderImageToString,a=e.swapPlaceholderImage;return k=t,{renderImageToString:t,swapPlaceholderImage:a}})));var e,t,r=_.current.querySelector("[data-gatsby-image-ssr]");return r&&o()?(r.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),r.addEventListener("load",(function e(){r.removeEventListener("load",e),null==g||g({wasCached:!0}),setTimeout((function(){r.removeAttribute("data-gatsby-image-ssr")}),0)}))),void z.add(T)):k&&z.has(T)?void 0:(N.then((function(a){var r=a.renderImageToString,n=a.swapPlaceholderImage;_.current&&(_.current.innerHTML=r(l({isLoading:!0,isLoaded:z.has(T),image:i},h)),z.has(T)||(e=requestAnimationFrame((function(){_.current&&(t=n(_.current,T,z,c,p,g,f))}))))})),function(){e&&cancelAnimationFrame(e),t&&t()})}),[i]),(0,r.useLayoutEffect)((function(){z.has(T)&&k&&(_.current.innerHTML=k(l({isLoading:z.has(T),isLoaded:z.has(T),image:i},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[i]),(0,r.createElement)(n,l({},C,{style:l({},w,c,{backgroundColor:m}),className:L+(u?" "+u:""),ref:_,dangerouslySetInnerHTML:{__html:I},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(_,e):null}));T.propTypes=C,T.displayName="GatsbyImage";var I,j=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"],A=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},O=new Set(["fixed","fullWidth","constrained"]),q={src:i().string.isRequired,alt:L,width:A,height:A,sizes:i().string,layout:function(e){if(void 0!==e.layout&&!O.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}},M=(I=T,function(e){var t=e.src,a=e.__imageData,n=e.__error,i=s(e,j);return n&&console.warn(n),a?r.createElement(I,l({image:a},i)):(console.warn("Image not loaded",t),null)});M.displayName="StaticImage",M.propTypes=q},8678:function(e,t,a){var r=a(7294),n=a(1082);t.Z=function(e){var t,a=e.location,i=e.title,l=e.children,s="/articles/"===a.pathname,o=r.createElement("div",{className:"banner_outer"},r.createElement("header",null,r.createElement("div",{className:"container"},r.createElement("nav",{className:"navbar navbar-expand-lg navbar-light"},r.createElement("a",{className:"navbar-brand",href:"/"},r.createElement("img",{src:"//internalizeapp.com/assets/images/internalize-icon.svg",alt:"",className:"img-fluid internalize-icon"}),r.createElement("img",{src:"//internalizeapp.com/assets/images/internalize-text.svg",alt:"",className:"img-fluid internalize-text"})),r.createElement("button",{className:"navbar-toggler collapsed",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.createElement("span",{className:"navbar-toggler-icon"}),r.createElement("span",{className:"navbar-toggler-icon"}),r.createElement("span",{className:"navbar-toggler-icon"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.createElement("ul",{className:"navbar-nav ml-auto"},r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"/#about"},"About")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"/#basic-feature"},"Features")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"/#faq"},"FAQ")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link",href:"/articles"},"Articles")),r.createElement("li",{className:"nav-item"},r.createElement("a",{className:"nav-link try_free_btn",href:"https://apps.apple.com/app/internalize/id6446457429",target:"_blank"},"Download"))))))));return t=s?r.createElement("h1",{className:"main-heading"},r.createElement(n.Link,{to:"/"},i)):r.createElement(n.Link,{className:"header-link-home",to:"/"},i),r.createElement("div",{className:"global-wrapper","data-is-root-path":s},o,r.createElement("header",{className:"global-header"},t),r.createElement("main",null,l),r.createElement("footer",null,"© ",(new Date).getFullYear()," Blit Labs"))}},9357:function(e,t,a){var r=a(7294),n=a(1082),i=function(e){var t,a,i,l=e.description,s=(e.lang,e.title),o=e.children,c=(0,n.useStaticQuery)("3000541721").site,m=l||c.siteMetadata.description,u=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,u?s+" | "+u:s),r.createElement("meta",{name:"description",content:m}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:m}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.twitter)||""}),r.createElement("meta",{name:"twitter:title",content:s}),r.createElement("meta",{name:"twitter:description",content:m}),o,r.createElement("script",{src:"//internalizeapp.com/assets/js/jquery-3.6.0.min.js"}," "),r.createElement("script",{src:"//internalizeapp.com/assets/js/bootstrap.min.js"}," "),r.createElement("script",{src:"//internalizeapp.com/assets/js/animation_links.js"}),r.createElement("script",{src:"//internalizeapp.com/assets/js/animation.js"}))};i.defaultProps={description:""},t.Z=i},7828:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c},default:function(){return m}});var r=a(7294),n=a(1082),i=a(3723),l=function(){var e;null===(e=(0,n.useStaticQuery)("3274528899").site.siteMetadata)||void 0===e||e.author;return r.createElement("a",{href:"https://apps.apple.com/app/internalize/id6446457429",title:"Internalize App",target:"_blank"},r.createElement("div",{className:"bio"},r.createElement(i.S,{layout:"fixed",formats:["auto","webp","avif"],src:"../images/app-screen.png",width:320,quality:95,alt:"App Icon",__imageData:a(1255)}),r.createElement("p",null,r.createElement("strong",null,"Internalize")," is the app that helps you focus on what's within your control and achieve the impossible.",r.createElement("a",{className:"btn btn-primary",role:"button"},"Download Internalize"))))},s=a(8678),o=a(9357),c=function(e){var t=e.data.markdownRemark;return r.createElement(o.Z,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})},m=function(e){var t,a=e.data,i=a.previous,o=a.next,c=a.site,m=a.markdownRemark,u=e.location,d=(null===(t=c.siteMetadata)||void 0===t?void 0:t.title)||"Title";return r.createElement(s.Z,{location:u,title:d},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},m.frontmatter.title)),r.createElement("section",{dangerouslySetInnerHTML:{__html:m.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(l,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,i&&r.createElement(n.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),r.createElement("li",null,o&&r.createElement(n.Link,{to:o.fields.slug,rel:"next"},o.frontmatter.title," →")))))}},1255:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/articles/static/67f7485c8f53c8567ffa3aa77c46ca60/28dc1/app-screen.png","srcSet":"/articles/static/67f7485c8f53c8567ffa3aa77c46ca60/28dc1/app-screen.png 320w","sizes":"320px"},"sources":[{"srcSet":"/articles/static/67f7485c8f53c8567ffa3aa77c46ca60/59452/app-screen.avif 320w","type":"image/avif","sizes":"320px"},{"srcSet":"/articles/static/67f7485c8f53c8567ffa3aa77c46ca60/2100e/app-screen.webp 320w","type":"image/webp","sizes":"320px"}]},"width":320,"height":283}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6aca27566477af5dc70b.js.map