function e(){return e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},e.apply(this,arguments)}var t,n,o,r,_,l,i={},u=[],s=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function a(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function p(e,n,o){var r,_,l,i={};for(l in n)"key"==l?r=n[l]:"ref"==l?_=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?t.call(arguments,2):o),"function"==typeof e&&null!=e.defaultProps)for(l in e.defaultProps)void 0===i[l]&&(i[l]=e.defaultProps[l]);return f(e,i,r,_,null)}function f(e,t,r,_,l){var i={type:e,props:t,key:r,ref:_,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++o:l};return null==l&&null!=n.vnode&&n.vnode(i),i}function d(e){return e.children}function h(e,t){this.props=e,this.context=t}function v(e,t){if(null==t)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?v(e):null}function y(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return y(e)}}function m(e){(!e.__d&&(e.__d=!0)&&r.push(e)&&!b.__r++||l!==n.debounceRendering)&&((l=n.debounceRendering)||_)(b)}function b(){for(var e;b.__r=r.length;)e=r.sort(function(e,t){return e.__v.__b-t.__v.__b}),r=[],e.some(function(e){var t,n,o,r,_,l;e.__d&&(_=(r=(t=e).__v).__e,(l=t.__P)&&(n=[],(o=a({},r)).__v=r.__v+1,S(l,r,o,t.__n,void 0!==l.ownerSVGElement,null!=r.__h?[_]:null,n,null==_?v(r):_,r.__h),T(n,r),r.__e!=_&&y(r)))})}function g(e,t,n,o,r,_,l,s,a,c){var p,h,y,m,b,g,x,w=o&&o.__k||u,E=w.length;for(n.__k=[],p=0;p<t.length;p++)if(null!=(m=n.__k[p]=null==(m=t[p])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?f(null,m,null,null,m):Array.isArray(m)?f(d,{children:m},null,null,null):m.__b>0?f(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=w[p])||y&&m.key==y.key&&m.type===y.type)w[p]=void 0;else for(h=0;h<E;h++){if((y=w[h])&&m.key==y.key&&m.type===y.type){w[h]=void 0;break}y=null}S(e,m,y=y||i,r,_,l,s,a,c),b=m.__e,(h=m.ref)&&y.ref!=h&&(x||(x=[]),y.ref&&x.push(y.ref,null,m),x.push(h,m.__c||b,m)),null!=b?(null==g&&(g=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=a=k(m,a,e):a=C(e,m,y,w,b,a),"function"==typeof n.type&&(n.__d=a)):a&&y.__e==a&&a.parentNode!=e&&(a=v(y))}for(n.__e=g,p=E;p--;)null!=w[p]&&("function"==typeof n.type&&null!=w[p].__e&&w[p].__e==n.__d&&(n.__d=v(o,p+1)),O(w[p],w[p]));if(x)for(p=0;p<x.length;p++)N(x[p],x[++p],x[++p])}function k(e,t,n){for(var o,r=e.__k,_=0;r&&_<r.length;_++)(o=r[_])&&(o.__=e,t="function"==typeof o.type?k(o,t,n):C(n,o,o,r,o.__e,t));return t}function C(e,t,n,o,r,_){var l,i,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||r!=_||null==r.parentNode)e:if(null==_||_.parentNode!==e)e.appendChild(r),l=null;else{for(i=_,u=0;(i=i.nextSibling)&&u<o.length;u+=2)if(i==r)break e;e.insertBefore(r,_),l=_}return void 0!==l?l:r.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||s.test(t)?n:n+"px"}function w(e,t,n,o,r){var _;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof o&&(e.style.cssText=o=""),o)for(t in o)n&&t in n||x(e.style,t,"");if(n)for(t in n)o&&n[t]===o[t]||x(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])_=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+_]=n,n?o||e.addEventListener(t,_?P:E,_):e.removeEventListener(t,_?P:E,_);else if("dangerouslySetInnerHTML"!==t){if(r)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function E(e){this.l[e.type+!1](n.event?n.event(e):e)}function P(e){this.l[e.type+!0](n.event?n.event(e):e)}function S(e,t,o,r,_,l,i,u,s){var c,p,f,v,y,m,b,k,C,x,w,E=t.type;if(void 0!==t.constructor)return null;null!=o.__h&&(s=o.__h,u=t.__e=o.__e,t.__h=null,l=[u]),(c=n.__b)&&c(t);try{e:if("function"==typeof E){if(k=t.props,C=(c=E.contextType)&&r[c.__c],x=c?C?C.props.value:c.__:r,o.__c?b=(p=t.__c=o.__c).__=p.__E:("prototype"in E&&E.prototype.render?t.__c=p=new E(k,x):(t.__c=p=new h(k,x),p.constructor=E,p.render=A),C&&C.sub(p),p.props=k,p.state||(p.state={}),p.context=x,p.__n=r,f=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=E.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=a({},p.__s)),a(p.__s,E.getDerivedStateFromProps(k,p.__s))),v=p.props,y=p.state,f)null==E.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==E.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,x),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,x)||t.__v===o.__v){p.props=k,p.state=p.__s,t.__v!==o.__v&&(p.__d=!1),p.__v=t,t.__e=o.__e,t.__k=o.__k,t.__k.forEach(function(e){e&&(e.__=t)}),p.__h.length&&i.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,x),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(v,y,m)})}p.context=x,p.props=k,p.state=p.__s,(c=n.__r)&&c(t),p.__d=!1,p.__v=t,p.__P=e,c=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(r=a(a({},r),p.getChildContext())),f||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),w=null!=c&&c.type===d&&null==c.key?c.props.children:c,g(e,Array.isArray(w)?w:[w],t,o,r,_,l,i,u,s),p.base=t.__e,t.__h=null,p.__h.length&&i.push(p),b&&(p.__E=p.__=null),p.__e=!1}else null==l&&t.__v===o.__v?(t.__k=o.__k,t.__e=o.__e):t.__e=L(o.__e,t,o,r,_,l,i,s);(c=n.diffed)&&c(t)}catch(e){t.__v=null,(s||null!=l)&&(t.__e=u,t.__h=!!s,l[l.indexOf(u)]=null),n.__e(e,t,o)}}function T(e,t){n.__c&&n.__c(t,e),e.some(function(t){try{e=t.__h,t.__h=[],e.some(function(e){e.call(t)})}catch(e){n.__e(e,t.__v)}})}function L(e,n,o,r,_,l,u,s){var a,p,f,d=o.props,h=n.props,y=n.type,m=0;if("svg"===y&&(_=!0),null!=l)for(;m<l.length;m++)if((a=l[m])&&"setAttribute"in a==!!y&&(y?a.localName===y:3===a.nodeType)){e=a,l[m]=null;break}if(null==e){if(null===y)return document.createTextNode(h);e=_?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,h.is&&h),l=null,s=!1}if(null===y)d===h||s&&e.data===h||(e.data=h);else{if(l=l&&t.call(e.childNodes),p=(d=o.props||i).dangerouslySetInnerHTML,f=h.dangerouslySetInnerHTML,!s){if(null!=l)for(d={},m=0;m<e.attributes.length;m++)d[e.attributes[m].name]=e.attributes[m].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===e.innerHTML)||(e.innerHTML=f&&f.__html||""))}if(function(e,t,n,o,r){var _;for(_ in n)"children"===_||"key"===_||_ in t||w(e,_,null,n[_],o);for(_ in t)r&&"function"!=typeof t[_]||"children"===_||"key"===_||"value"===_||"checked"===_||n[_]===t[_]||w(e,_,t[_],n[_],o)}(e,h,d,_,s),f)n.__k=[];else if(m=n.props.children,g(e,Array.isArray(m)?m:[m],n,o,r,_&&"foreignObject"!==y,l,u,l?l[0]:o.__k&&v(o,0),s),null!=l)for(m=l.length;m--;)null!=l[m]&&c(l[m]);s||("value"in h&&void 0!==(m=h.value)&&(m!==d.value||m!==e.value||"progress"===y&&!m)&&w(e,"value",m,d.value,!1),"checked"in h&&void 0!==(m=h.checked)&&m!==e.checked&&w(e,"checked",m,d.checked,!1))}return e}function N(e,t,o){try{"function"==typeof e?e(t):e.current=t}catch(e){n.__e(e,o)}}function O(e,t,o){var r,_;if(n.unmount&&n.unmount(e),(r=e.ref)&&(r.current&&r.current!==e.__e||N(r,null,t)),null!=(r=e.__c)){if(r.componentWillUnmount)try{r.componentWillUnmount()}catch(e){n.__e(e,t)}r.base=r.__P=null}if(r=e.__k)for(_=0;_<r.length;_++)r[_]&&O(r[_],t,"function"!=typeof e.type);o||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function A(e,t,n){return this.constructor(e,n)}function D(e,o,r){var _,l,u;n.__&&n.__(e,o),l=(_="function"==typeof r)?null:r&&r.__k||o.__k,u=[],S(o,e=(!_&&r||o).__k=p(d,null,[e]),l||i,i,void 0!==o.ownerSVGElement,!_&&r?[r]:l?null:o.firstChild?t.call(o.childNodes):null,u,!_&&r?r:l?l.__e:o.firstChild,_),T(u,e)}function M(e,t){D(e,t,M)}function U(e,n,o){var r,_,l,i=a({},e.props);for(l in n)"key"==l?r=n[l]:"ref"==l?_=n[l]:i[l]=n[l];return arguments.length>2&&(i.children=arguments.length>3?t.call(arguments,2):o),f(e.type,i,r||e.key,_||e.ref,null)}function j(){return(j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function H(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(e,t){if(null==e)return{};var n,o,r={},_=Object.keys(e);for(o=0;o<_.length;o++)t.indexOf(n=_[o])>=0||(r[n]=e[n]);return r}(e,["context","children"]);return U(t,n)}function W(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=p(H,j({},this._props,{context:e.detail.context}),function e(t,n){if(3===t.nodeType)return t.data;if(1!==t.nodeType)return null;var o=[],r={},_=0,l=t.attributes,i=t.childNodes;for(_=l.length;_--;)"slot"!==l[_].name&&(r[l[_].name]=l[_].value,r[F(l[_].name)]=l[_].value);for(_=i.length;_--;){var u=e(i[_],null),s=i[_].slot;s?r[s]=p(B,{name:s},u):o[_]=u}var a=n?p(B,null,o):o;return p(n||t.nodeName.toLowerCase(),r,a)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?M:D)(this._vdom,this._root)}function F(e){return e.replace(/-(\w)/g,function(e,t){return t?t.toUpperCase():""})}function I(e,t,n){if(this._vdom){var o={};o[e]=n=null==n?void 0:n,o[F(e)]=n,this._vdom=U(this._vdom,o),D(this._vdom,this._root)}}function R(){D(this._vdom=null,this._root)}function B(e,t){var n=this;return p("slot",j({},e,{ref:function(e){e?(n.ref=e,n._listener||(n._listener=function(e){e.stopPropagation(),e.detail.context=t},e.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}function $(e,t,n,o){function r(){var t=Reflect.construct(HTMLElement,[],r);return t._vdomComponent=e,t._root=o&&o.shadow?t.attachShadow({mode:"open"}):t,t}return(r.prototype=Object.create(HTMLElement.prototype)).constructor=r,r.prototype.connectedCallback=W,r.prototype.attributeChangedCallback=I,r.prototype.disconnectedCallback=R,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),r.observedAttributes=n,n.forEach(function(e){Object.defineProperty(r.prototype,e,{get:function(){return this._vdom.props[e]},set:function(t){this._vdom?this.attributeChangedCallback(e,null,t):(this._props||(this._props={}),this._props[e]=t,this.connectedCallback());var n=typeof t;null!=t&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(e,t)}})}),customElements.define(t||e.tagName||e.displayName||e.name,r)}t=u.slice,n={__e:function(e,t){for(var n,o,r;t=t.__;)if((n=t.__c)&&!n.__)try{if((o=n.constructor)&&null!=o.getDerivedStateFromError&&(n.setState(o.getDerivedStateFromError(e)),r=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),r=n.__d),r)return n.__E=n}catch(t){e=t}throw e}},o=0,h.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=a({},this.state),"function"==typeof e&&(e=e(a({},n),this.props)),e&&a(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=d,r=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0;const G=e=>e?{dangerouslySetInnerHTML:{__html:e}}:{},V=({data:t,primary:n,secondary:o})=>p("section",{part:"root"},p("p",e({part:"primary"},G(null==t?void 0:t.primary)),n),((null==t?void 0:t.secondary)||o)&&p("p",e({part:"secondary"},G(null==t?void 0:t.secondary)),o));$(V,"w-text-block",["data"],{shadow:!0});const z={display:"block",opacity:1,width:"100%",height:"100%","object-fit":"cover"},q=t=>p("section",{part:"root"},p("div",{part:"image"},p("img",{src:"data"in t?t.data.src:t.src,alt:"data"in t?t.data.alt:t.alt,style:z})),p("div",{part:"text"},"data"in t?p(d,null,p("p",e({part:"description"},G(t.data.description))),p("p",e({part:"secondary"},G(t.data.secondary)))):p(d,null,p("p",{part:"description"},t.description),p("p",{part:"secondary"},t.secondary))));$(q,"w-image-block",["data","src","alt"],{shadow:!0});export{q as ImageBlock,V as TextBlock};
//# sourceMappingURL=blocks.modern.js.map
