var e,t,n,_,o,r,l={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,t){for(var n in t)e[n]=t[n];return e}function c(e){var t=e.parentNode;t&&t.removeChild(e)}function a(t,n,_){var o,r,l,i={};for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];if(arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),"function"==typeof t&&null!=t.defaultProps)for(l in t.defaultProps)void 0===i[l]&&(i[l]=t.defaultProps[l]);return p(t,i,o,r,null)}function p(e,_,o,r,l){var i={type:e,props:_,key:o,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==l?++n:l};return null==l&&null!=t.vnode&&t.vnode(i),i}function f(e){return e.children}function d(e,t){this.props=e,this.context=t}function h(e,t){if(null==t)return e.__?h(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return"function"==typeof e.type?h(e):null}function v(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return v(e)}}function y(e){(!e.__d&&(e.__d=!0)&&_.push(e)&&!m.__r++||r!==t.debounceRendering)&&((r=t.debounceRendering)||o)(m)}function m(){for(var e;m.__r=_.length;)e=_.sort(function(e,t){return e.__v.__b-t.__v.__b}),_=[],e.some(function(e){var t,n,_,o,r,l;e.__d&&(r=(o=(t=e).__v).__e,(l=t.__P)&&(n=[],(_=s({},o)).__v=o.__v+1,P(l,o,_,t.__n,void 0!==l.ownerSVGElement,null!=o.__h?[r]:null,n,null==r?h(o):r,o.__h),S(n,o),o.__e!=r&&v(o)))})}function b(e,t,n,_,o,r,u,s,c,a){var d,v,y,m,b,x,C,E=_&&_.__k||i,w=E.length;for(n.__k=[],d=0;d<t.length;d++)if(null!=(m=n.__k[d]=null==(m=t[d])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?p(null,m,null,null,m):Array.isArray(m)?p(f,{children:m},null,null,null):m.__b>0?p(m.type,m.props,m.key,null,m.__v):m)){if(m.__=n,m.__b=n.__b+1,null===(y=E[d])||y&&m.key==y.key&&m.type===y.type)E[d]=void 0;else for(v=0;v<w;v++){if((y=E[v])&&m.key==y.key&&m.type===y.type){E[v]=void 0;break}y=null}P(e,m,y=y||l,o,r,u,s,c,a),b=m.__e,(v=m.ref)&&y.ref!=v&&(C||(C=[]),y.ref&&C.push(y.ref,null,m),C.push(v,m.__c||b,m)),null!=b?(null==x&&(x=b),"function"==typeof m.type&&m.__k===y.__k?m.__d=c=g(m,c,e):c=k(e,m,y,E,b,c),"function"==typeof n.type&&(n.__d=c)):c&&y.__e==c&&c.parentNode!=e&&(c=h(y))}for(n.__e=x,d=w;d--;)null!=E[d]&&("function"==typeof n.type&&null!=E[d].__e&&E[d].__e==n.__d&&(n.__d=h(_,d+1)),L(E[d],E[d]));if(C)for(d=0;d<C.length;d++)N(C[d],C[++d],C[++d])}function g(e,t,n){for(var _,o=e.__k,r=0;o&&r<o.length;r++)(_=o[r])&&(_.__=e,t="function"==typeof _.type?g(_,t,n):k(n,_,_,o,_.__e,t));return t}function k(e,t,n,_,o,r){var l,i,u;if(void 0!==t.__d)l=t.__d,t.__d=void 0;else if(null==n||o!=r||null==o.parentNode)e:if(null==r||r.parentNode!==e)e.appendChild(o),l=null;else{for(i=r,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==o)break e;e.insertBefore(o,r),l=r}return void 0!==l?l:o.nextSibling}function x(e,t,n){"-"===t[0]?e.setProperty(t,n):e[t]=null==n?"":"number"!=typeof n||u.test(t)?n:n+"px"}function C(e,t,n,_,o){var r;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(t in _)n&&t in n||x(e.style,t,"");if(n)for(t in n)_&&n[t]===_[t]||x(e.style,t,n[t])}else if("o"===t[0]&&"n"===t[1])r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?_||e.addEventListener(t,r?w:E,r):e.removeEventListener(t,r?w:E,r);else if("dangerouslySetInnerHTML"!==t){if(o)t=t.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==t&&"list"!==t&&"form"!==t&&"tabIndex"!==t&&"download"!==t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null!=n&&(!1!==n||"a"===t[0]&&"r"===t[1])?e.setAttribute(t,n):e.removeAttribute(t))}}function E(e){this.l[e.type+!1](t.event?t.event(e):e)}function w(e){this.l[e.type+!0](t.event?t.event(e):e)}function P(e,n,_,o,r,l,i,u,c){var a,p,h,v,y,m,g,k,x,C,E,w=n.type;if(void 0!==n.constructor)return null;null!=_.__h&&(c=_.__h,u=n.__e=_.__e,n.__h=null,l=[u]),(a=t.__b)&&a(n);try{e:if("function"==typeof w){if(k=n.props,x=(a=w.contextType)&&o[a.__c],C=a?x?x.props.value:a.__:o,_.__c?g=(p=n.__c=_.__c).__=p.__E:("prototype"in w&&w.prototype.render?n.__c=p=new w(k,C):(n.__c=p=new d(k,C),p.constructor=w,p.render=A),x&&x.sub(p),p.props=k,p.state||(p.state={}),p.context=C,p.__n=o,h=p.__d=!0,p.__h=[]),null==p.__s&&(p.__s=p.state),null!=w.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=s({},p.__s)),s(p.__s,w.getDerivedStateFromProps(k,p.__s))),v=p.props,y=p.state,h)null==w.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else{if(null==w.getDerivedStateFromProps&&k!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(k,C),!p.__e&&null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(k,p.__s,C)||n.__v===_.__v){p.props=k,p.state=p.__s,n.__v!==_.__v&&(p.__d=!1),p.__v=n,n.__e=_.__e,n.__k=_.__k,n.__k.forEach(function(e){e&&(e.__=n)}),p.__h.length&&i.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(k,p.__s,C),null!=p.componentDidUpdate&&p.__h.push(function(){p.componentDidUpdate(v,y,m)})}p.context=C,p.props=k,p.state=p.__s,(a=t.__r)&&a(n),p.__d=!1,p.__v=n,p.__P=e,a=p.render(p.props,p.state,p.context),p.state=p.__s,null!=p.getChildContext&&(o=s(s({},o),p.getChildContext())),h||null==p.getSnapshotBeforeUpdate||(m=p.getSnapshotBeforeUpdate(v,y)),E=null!=a&&a.type===f&&null==a.key?a.props.children:a,b(e,Array.isArray(E)?E:[E],n,_,o,r,l,i,u,c),p.base=n.__e,n.__h=null,p.__h.length&&i.push(p),g&&(p.__E=p.__=null),p.__e=!1}else null==l&&n.__v===_.__v?(n.__k=_.__k,n.__e=_.__e):n.__e=T(_.__e,n,_,o,r,l,i,c);(a=t.diffed)&&a(n)}catch(e){n.__v=null,(c||null!=l)&&(n.__e=u,n.__h=!!c,l[l.indexOf(u)]=null),t.__e(e,n,_)}}function S(e,n){t.__c&&t.__c(n,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(e){e.call(n)})}catch(e){t.__e(e,n.__v)}})}function T(t,n,_,o,r,i,u,s){var a,p,f,d=_.props,v=n.props,y=n.type,m=0;if("svg"===y&&(r=!0),null!=i)for(;m<i.length;m++)if((a=i[m])&&"setAttribute"in a==!!y&&(y?a.localName===y:3===a.nodeType)){t=a,i[m]=null;break}if(null==t){if(null===y)return document.createTextNode(v);t=r?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),i=null,s=!1}if(null===y)d===v||s&&t.data===v||(t.data=v);else{if(i=i&&e.call(t.childNodes),p=(d=_.props||l).dangerouslySetInnerHTML,f=v.dangerouslySetInnerHTML,!s){if(null!=i)for(d={},m=0;m<t.attributes.length;m++)d[t.attributes[m].name]=t.attributes[m].value;(f||p)&&(f&&(p&&f.__html==p.__html||f.__html===t.innerHTML)||(t.innerHTML=f&&f.__html||""))}if(function(e,t,n,_,o){var r;for(r in n)"children"===r||"key"===r||r in t||C(e,r,null,n[r],_);for(r in t)o&&"function"!=typeof t[r]||"children"===r||"key"===r||"value"===r||"checked"===r||n[r]===t[r]||C(e,r,t[r],n[r],_)}(t,v,d,r,s),f)n.__k=[];else if(m=n.props.children,b(t,Array.isArray(m)?m:[m],n,_,o,r&&"foreignObject"!==y,i,u,i?i[0]:_.__k&&h(_,0),s),null!=i)for(m=i.length;m--;)null!=i[m]&&c(i[m]);s||("value"in v&&void 0!==(m=v.value)&&(m!==d.value||m!==t.value||"progress"===y&&!m)&&C(t,"value",m,d.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==t.checked&&C(t,"checked",m,d.checked,!1))}return t}function N(e,n,_){try{"function"==typeof e?e(n):e.current=n}catch(e){t.__e(e,_)}}function L(e,n,_){var o,r;if(t.unmount&&t.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||N(o,null,n)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount()}catch(e){t.__e(e,n)}o.base=o.__P=null}if(o=e.__k)for(r=0;r<o.length;r++)o[r]&&L(o[r],n,"function"!=typeof e.type);_||null==e.__e||c(e.__e),e.__e=e.__d=void 0}function A(e,t,n){return this.constructor(e,n)}function D(n,_,o){var r,i,u;t.__&&t.__(n,_),i=(r="function"==typeof o)?null:o&&o.__k||_.__k,u=[],P(_,n=(!r&&o||_).__k=a(f,null,[n]),i||l,l,void 0!==_.ownerSVGElement,!r&&o?[o]:i?null:_.firstChild?e.call(_.childNodes):null,u,!r&&o?o:i?i.__e:_.firstChild,r),S(u,n)}function U(e,t){D(e,t,U)}function M(t,n,_){var o,r,l,i=s({},t.props);for(l in n)"key"==l?o=n[l]:"ref"==l?r=n[l]:i[l]=n[l];return arguments.length>2&&(i.children=arguments.length>3?e.call(arguments,2):_),p(t.type,i,o||t.key,r||t.ref,null)}function O(){return(O=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var _ in n)Object.prototype.hasOwnProperty.call(n,_)&&(e[_]=n[_])}return e}).apply(this,arguments)}function H(e){this.getChildContext=function(){return e.context};var t=e.children,n=function(e,t){if(null==e)return{};var n,_,o={},r=Object.keys(e);for(_=0;_<r.length;_++)t.indexOf(n=r[_])>=0||(o[n]=e[n]);return o}(e,["context","children"]);return M(t,n)}function W(){var e=new CustomEvent("_preact",{detail:{},bubbles:!0,cancelable:!0});this.dispatchEvent(e),this._vdom=a(H,O({},this._props,{context:e.detail.context}),function e(t,n){if(3===t.nodeType)return t.data;if(1!==t.nodeType)return null;var _=[],o={},r=0,l=t.attributes,i=t.childNodes;for(r=l.length;r--;)"slot"!==l[r].name&&(o[l[r].name]=l[r].value,o[j(l[r].name)]=l[r].value);for(r=i.length;r--;){var u=e(i[r],null),s=i[r].slot;s?o[s]=a(B,{name:s},u):_[r]=u}var c=n?a(B,null,_):_;return a(n||t.nodeName.toLowerCase(),o,c)}(this,this._vdomComponent)),(this.hasAttribute("hydrate")?U:D)(this._vdom,this._root)}function j(e){return e.replace(/-(\w)/g,function(e,t){return t?t.toUpperCase():""})}function F(e,t,n){if(this._vdom){var _={};_[e]=n=null==n?void 0:n,_[j(e)]=n,this._vdom=M(this._vdom,_),D(this._vdom,this._root)}}function R(){D(this._vdom=null,this._root)}function B(e,t){var n=this;return a("slot",O({},e,{ref:function(e){e?(n.ref=e,n._listener||(n._listener=function(e){e.stopPropagation(),e.detail.context=t},e.addEventListener("_preact",n._listener))):n.ref.removeEventListener("_preact",n._listener)}}))}e=i.slice,t={__e:function(e,t){for(var n,_,o;t=t.__;)if((n=t.__c)&&!n.__)try{if((_=n.constructor)&&null!=_.getDerivedStateFromError&&(n.setState(_.getDerivedStateFromError(e)),o=n.__d),null!=n.componentDidCatch&&(n.componentDidCatch(e),o=n.__d),o)return n.__E=n}catch(t){e=t}throw e}},n=0,d.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},n),this.props)),e&&s(n,e),null!=e&&this.__v&&(t&&this.__h.push(t),y(this))},d.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),y(this))},d.prototype.render=f,_=[],o="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,m.__r=0;var I=function(e){var t=e.primary,n=e.secondary;return a("section",{className:(void 0).text},a("p",{className:(void 0).text__primary},t||"..."),n&&a("p",{className:(void 0).text__secondary},n))};!function(e,t,n,_){function o(){var t=Reflect.construct(HTMLElement,[],o);return t._vdomComponent=e,t._root=t,t}(o.prototype=Object.create(HTMLElement.prototype)).constructor=o,o.prototype.connectedCallback=W,o.prototype.attributeChangedCallback=F,o.prototype.disconnectedCallback=R,n=n||e.observedAttributes||Object.keys(e.propTypes||{}),o.observedAttributes=n,n.forEach(function(e){Object.defineProperty(o.prototype,e,{get:function(){return this._vdom.props[e]},set:function(t){this._vdom?this.attributeChangedCallback(e,null,t):(this._props||(this._props={}),this._props[e]=t,this.connectedCallback());var n=typeof t;null!=t&&"string"!==n&&"boolean"!==n&&"number"!==n||this.setAttribute(e,t)}})}),customElements.define("w-text-block",o)}(I,0,["primary","secondary"]),exports.TextBlock=I;
//# sourceMappingURL=blocks.js.map
