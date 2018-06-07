!function(t){"use strict";function e(t){var e=getComputedStyle(t);this.units={px:1},this.element=t;var i=function(t){return t&&t.length?parseInt(t):0};this.margins=[e.marginTop,e.marginRight,e.marginBottom,e.marginLeft],this.margins=this.margins.map(i),this.borders=[e.borderTopWidth,e.borderRightWidth,e.borderBottomWidth,e.borderLeftWidth],this.borders=this.borders.map(i),this.paddings=[e.paddingTop,e.paddingRight,e.paddingBottom,e.paddingLeft],this.paddings=this.paddings.map(i),this.borderBox={x:0,y:0,width:t.offsetWidth,height:t.offsetHeight},this.marginBox={x:-this.margins[3],y:-this.margins[0],width:t.offsetWidth+this.margins[1]+this.margins[3],height:t.offsetHeight+this.margins[0]+this.margins[2]};var r=this,s=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"];this.borderBox.radii=s.map(function(t){return t=e[t].split(/\s+/),[r.toPixels(t[0],r.borderBox.width),r.toPixels(t.length>1?t[1]:t[0],r.borderBox.height)]}),this.cssFloat=e.cssFloat}function i(t,e,i){return(i.x-t.x)*(e.y-t.y)-(e.x-t.x)*(i.y-t.y)}function r(t,e,r){return Math.abs(i(t,e,r))<350}function s(t,e){return t.x==e.x&&t.y==e.y}function n(t,e,i){return i.x>=Math.min(t.x,e.x)&&i.x<=Math.max(t.x,e.x)&&r(t,e,i)}function o(){}function h(t,e,i,r){if(t.y>=i&&t.y<=r)return{x1:t.x-e,x2:t.x+e};var s,n;return r<t.y?(s=r-t.y,n=L(s,e,e),{x1:t.x-n,x2:t.x+n}):(s=i-t.y,n=L(s,e,e),{x1:t.x-n,x2:t.x+n})}function a(t,e,i){this.init(t,e,i)}function p(t,e){var i=t.polygon.shapeMargin,r=e.x*i,s=e.y*i;this.anchorEdge=t,this.normalUnitVector=e;var n={x:t.vertex1.x+r,y:t.vertex1.y+s},o={x:t.vertex2.x+r,y:t.vertex2.y+s};this.init(t.polygon,n,o)}function c(t){for(var e=0,r=1;r<t.length;++r){var s=t[r];(s.y<t[e].y||s.y==t[e].y&&s.x<t[e].x)&&(e=r)}var n=t[(e+1)%t.length],o=t[(e+t.length-1)%t.length];return i(o,t[e],n)<0}function u(t,e,i){if(this.m_vertices=t,this.fillRule=e,this.shapeMargin=i,t.length<3)return this.m_edges=[],void(this.shapeMarginEdges=[]);var s=[],n=t.length>0?t[0].x:void 0,o=t.length>0?t[0].y:void 0,h=n,u=o,l=c(t),d=0;do{var g=this.nextEdgeVertexIndex(d,l);s.push(new a(this,t[d],t[g]));var f=t[d].x,x=t[d].y;n=Math.min(f,n),o=Math.min(x,o),h=Math.max(f,h),u=Math.max(x,u),d=g}while(0!==d);for(var m,y=0;y<s.length&&s.length>3;)m=(y+1)%s.length,r(s[y].vertex1,s[y].vertex2,s[m].vertex2)?(s[y].vertex2=s[m].vertex2,s.splice(m,1)):y++;if(0===i)this.shapeMarginEdges=s;else{for(var v=[],b=0;b<s.length;b++)v.push(new p(s[b],s[b].outwardNormal())),v.push(new p(s[b],s[b].inwardNormal()));this.shapeMarginEdges=v}this.m_edges=s,this.bounds=new M(n-i,o-i,2*i+(h-n),2*i+(u-o))}function l(t,e){return t.minX-e.minX}function d(t,e){return e.x-t.x}function g(t,e){return e.maxX-t.maxX}function f(t,e){return t.x-e.x}function x(t,e,i){this.y=t,this.startX=e,this.endX=i}function m(t,e){this.intervals=[],this.yOffset=t,this.size=e;for(var i=0;e>i;i++)this.intervals[i]=m.none;this.minY=-t,this.maxY=e-t}function y(t){this.shapeMargin=t,this.xIntercepts=[];for(var e=0;t>=e;e++)this.xIntercepts[e]=Math.sqrt(t*t-e*e)}function v(t,e){console.log("Unable to load image ",t,". It's probably missing or you've run into a CORS issue."),e&&console.log("The exact problem was ",e)}function b(t,e,i){var r=document.createElement("canvas");this.width=r.width=e,this.height=r.height=i;var s=r.getContext("2d");s.drawImage(t,0,0,e,i);try{this.imageData=s.getImageData(0,0,e,i)}catch(n){v(t.src,n)}}function w(t,e,i,r,s,n){this.url=t,this.box=e,this.shapeImageThreshold=256*i,this.shapeMargin=r,this.clip=s,this.init(n)}function R(t,e){this.width=t,this.height=e}function M(t,e,i,r){this.x=t,this.y=e,this.width=i,this.height=r,this.maxX=t+i,this.maxY=e+r}function E(t,e,i,r,s){this.rect=t,this.radii={topLeft:e,topRight:i,bottomLeft:r,bottomRight:s}}function L(t,e,i){return e*Math.sqrt(1-t*t/(i*i))}function A(t,e,i){return 0===e?1:Math.round(0===t||i>t*e/2?e:Math.sqrt(2*i*(e/t)))}function Y(t,e){return t.maxX-e}function S(t,e){return t.x+e}function X(t){return t.x}function I(t){return t.maxX}function C(t,e,i,r){return function(s,n,o){if(!this.rect.overlapsYRange(s,n))return[{x:void 0,height:n-s}];var h=[];s<this.rect.y&&h.push({x:void 0,height:this.rect.y-s});var a,p,c,u,l,d,g=t.call(this),f=e.call(this),x=new M(this.rect.x,g.maxY,this.rect.width,f.y-g.maxY);if(g.overlapsYRange(s,n))for(a=A(g.width,g.height,o),p=Math.max(g.y,s),c=Math.min(g.maxY,n),u=p;c>u;u+=a)l=g.maxY-Math.min(u+a,c),d=L(l,g.width,g.height),h.push({height:Math.min(a,c-u),x:r(g,d)});if(p=Math.max(x.y,s),c=Math.min(x.maxY,n),x.overlapsYRange(s,n)&&h.push({x:i(x),height:c-p}),f.overlapsYRange(s,n))for(a=A(f.width,f.height,o),p=Math.max(s,f.y),c=Math.min(f.maxY,n),u=p;c>u;u+=a)l=u-f.y,d=L(l,f.width,f.height),h.push({height:Math.min(a,c-u),x:r(f,d)});return n>this.rect.maxY&&h.push({x:void 0,height:n-this.rect.maxY}),h}}function T(t,e){var i=t.r+e,r=new R(i,i);return new E(new M(t.cx-i,t.cy-i,2*i,2*i),r,r,r,r)}function P(t,e){var i=new R(t.rx+e,t.ry+e);return new E(new M(t.cx-i.width,t.cy-i.height,2*i.width,2*i.height),i,i,i,i)}function B(t,e){function i(t){return new R(t[0]+e,t[1]+e)}var r=i(t.radii[0]),s=i(t.radii[1]),n=i(t.radii[2]),o=i(t.radii[3]),h=new M(t.x-e,t.y-e,t.width+2*e,t.height+2*e);return new E(h,r,s,o,n)}function O(t,e){function i(t){return new R(t[0]+e,t[1]+e)}var r=i(t.radii[0]),s=i(t.radii[1]),n=i(t.radii[2]),o=i(t.radii[3]),h=new M(-e,-e,t.width+2*e,t.height+2*e);return new E(h,r,s,o,n)}function z(t,e,i,r,s,n){var o=new M(s.x,s.y,s.width,s.height);return new w(t,e,i,r,o,n)}function F(t,e){return new u(t.points,t.fillRule,e)}function N(t,e){var i,r=void 0===t.shapeMargin?0:t.shapeMargin;if(t.shape){switch(t.shape.type){case"circle":i=T(t.shape,r);break;case"ellipse":i=P(t.shape,r);break;case"inset":i=B(t.shape,r),i.isRenderable()||i.adjustRadii();break;case"polygon":i=F(t.shape,r)}return e(),i}return t.url?z(t.url,t.box,t.shapeImageThreshold,r,t.clip,e):t.box?(i=O(t.box,r),e(),i):void console.error("Unrecognized shape")}function V(t){this.metrics=new e(t);var i={metrics:this.metrics,shapeOutside:t.getAttribute("data-shape-outside"),shapeMargin:t.getAttribute("data-shape-margin"),shapeImageThreshold:t.getAttribute("data-shape-image-threshold")};this.shapeValue=new _(i);var r=this;this.geometry=N(this.shapeValue,function(){r.ready=!0,r.callback&&r.callback()})}function k(t){this.scope=t;var e=document.currentScript;e||(e=document.getElementsByTagName("script"),e=e[e.length-1]);var i=this,r="false"!==e.getAttribute("data-auto-run");r&&t.addEventListener&&t.addEventListener("load",function(){i.run()})}function q(t,e){var i,r=document.createElement("div");e.forEach(function(t){var e=t.bottom-t.top,s=document.createElement("div");s.className="sandbag",i={cssFloat:t.cssFloat,width:t.offset+"px",height:e+"px",clear:t.cssFloat};for(var n in i)s.style[n]=i[n];r.appendChild(s)}),i={position:"relative",width:"auto",height:"0",clear:"both",pointerEvents:"none"};for(var s in i)r.style[s]=i[s];var n,o=t.parentNode,h=getComputedStyle(o),a=parseFloat(h.borderTop)+parseFloat(h.borderBottom);i={position:"absolute",top:"0",width:"100%",height:o.clientHeight-a,left:"0"},n=document.createElement("div");for(s in i)n.style[s]=i[s];r.appendChild(n),t.parentNode&&t.parentNode.insertBefore(r,t),n.appendChild(t),r.setAttribute("data-shape-outside-container","true")}function j(t,e){var i;return function(){var r=this,s=arguments;clearTimeout(i),i=setTimeout(function(){i=null,t.apply(r,s)},e)}}function _(t){return t&&t.metrics&&t.shapeOutside?(this.url=this.parseUrl(t.shapeOutside),this.box=this.parseBox(this.url?"content-box":t.shapeOutside,t.metrics),this.shape=this.parseBasicShape(t.shapeOutside,this.box,t.metrics),this.clip=this.computeClip(this.box,t.metrics),this.shapeMargin=this.parseShapeMargin(t.shapeMargin,this.box,t.metrics),void(this.shapeImageThreshold=this.parseShapeImageThreshold(t.shapeImageThreshold))):void console.error("ShapeValue requires at least a metrics object and shape-outside string")}function U(t,e,i){var r=i.reduce(function(t,e){return t+e[0]},0),s=i.reduce(function(t,e){return t+e[1]},0),n=i.reduce(function(t,e){return t+e[2]},0),o=i.reduce(function(t,e){return t+e[3]},0);t.x-=e*o,t.y-=e*r,t.width+=e*(o+s),t.height+=e*(r+n)}function W(t,e,i){if(0>e)return Math.max(t+e*i,0);var r=Math.abs(t/i);return 1>r?Math.max(t+i*(1+Math.pow(r-1,3)),0):t+i}function H(t,e,i){var r=i.reduce(function(t,e){return t+e[0]},0),s=i.reduce(function(t,e){return t+e[1]},0),n=i.reduce(function(t,e){return t+e[2]},0),o=i.reduce(function(t,e){return t+e[3]},0);t[0][0]=W(t[0][0],e,o),t[0][1]=W(t[0][1],e,r),t[1][0]=W(t[1][0],e,s),t[1][1]=W(t[1][1],e,r),t[2][0]=W(t[2][0],e,s),t[2][1]=W(t[2][1],e,n),t[3][0]=W(t[3][0],e,o),t[3][1]=W(t[3][1],e,n)}function D(t,e){return t.map(function(t){return t[e]})}function G(t,e,i){t=t.split(/\s+/);var r="TopLeft",s=0;switch(t[0]){case"top":case"left":break;case"bottom":case"right":r="BottomRight";break;case"center":s=e/2;break;default:s=i.toPixels(t[0],e)}return t.length>1&&(s=i.toPixels(t[1],e)),"TopLeft"===r?s:e-s}function J(t,e,i,r){return"closest-side"===t?Math.min.apply(null,e):"farthest-side"===t?Math.max.apply(null,e):r.toPixels(t,i)}function Z(){var t,e,i=document,r=[];if("function"==typeof i.querySelectorAll)r=i.querySelectorAll('link[rel="stylesheet"], style'),r=Array.prototype.slice.call(r,0);else{var s=i.getElementsByTagName("link");if(s.length)for(t=0,e=s.length;e>t;t++)"stylesheet"===s[t].getAttribute("rel")&&r.push(s[t]);for(s=i.getElementsByTagName("style"),t=0,e=s.length;e>t;t++)r.push(s[t])}return r}function $(t){this.source=t,this.url=t.href||null,this.cssText=""}function K(t){return this instanceof K?(this.stylesheets=[],this.queueCount=0,this.callback=t||function(){},void this.init()):new K(t)}function Q(t){this.callback=t||function(){};var e=this;new K(function(t){e.onStylesLoaded(t)})}e.prototype.unitToPx=function(t){if(this.units[t])return this.units[t];var e=this.element.style.getPropertyValue("line-height");return this.element.style.setProperty("line-height",1+t),this.units[t]=parseFloat(getComputedStyle(this.element).getPropertyValue("line-height")),this.element.style.setProperty("line-height",e),this.units[t]},e.prototype.getUnitsMap=function(t){var e=["em","ex","ch","rem","vw","vh","vmin","vmax","cm","mm","in","px","pt","pc"],i=document.createElement("div");i.style.width="0px",i.style.height="0px",t.appendChild(i);var r=getComputedStyle(i),s={};return e.forEach(function(t){i.style.lineHeight="1"+t,s[t]=parseFloat(r.lineHeight)}),i.parentNode.removeChild(i),s},e.prototype.toPixels=function(t,e){var i=/([\-0-9\.]*)([a-z%]*)/.exec(t);return i[1]=parseFloat(i[1]),i[2]?"%"===i[2]?i[1]*e/100:i[1]*this.unitToPx(i[2]):i[1]},o.prototype.init=function(t,e,i){this.polygon=t,this.vertex1=e,this.vertex2=i,this.minX=Math.min(this.vertex1.x,this.vertex2.x),this.maxX=Math.max(this.vertex1.x,this.vertex2.x)},o.prototype.containsPoint=function(t){return n(this.vertex1,this.vertex2,t)},o.prototype.overlapsYRange=function(t,e){var i=this.vertex1.y,r=this.vertex2.y;return e>=Math.min(i,r)&&t<=Math.max(i,r)},o.prototype.isWithinYRange=function(t,e){var i=this.vertex1.y,r=this.vertex2.y;return t<=Math.min(i,r)&&e>=Math.max(i,r)},o.prototype.inwardNormal=function(){var t=this.vertex2.x-this.vertex1.x,e=this.vertex2.y-this.vertex1.y,i=Math.sqrt(t*t+e*e);return{x:-e/i,y:t/i}},o.prototype.outwardNormal=function(){var t=this.inwardNormal();return{x:-t.x,y:-t.y}},o.prototype.xIntercept=function(t){var e=this.vertex1.y,i=this.vertex2.y;return e==i?Math.min(this.vertex1.x,this.vertex2.x):t==Math.min(e,i)?i>e?this.vertex1.x:this.vertex2.x:t==Math.max(e,i)?e>i?this.vertex1.x:this.vertex2.x:this.vertex1.x+(t-e)*(this.vertex2.x-this.vertex1.x)/(i-e)},o.prototype.clippedEdgeXRange=function(t,e){if(this.isWithinYRange(t,e)){var i=this.vertex1.x,r=this.vertex2.x;return{x1:Math.min(i,r),x2:Math.max(i,r)}}var s,n;this.vertex1.y<this.vertex2.y?(s=this.vertex1,n=this.vertex2):(s=this.vertex2,n=this.vertex1);var o=s.y<t?this.xIntercept(t):s.x,h=n.y>e?this.xIntercept(e):n.x;return{x1:Math.min(o,h),x2:Math.max(o,h)}},a.prototype=new o,p.prototype=new o,u.prototype.vertexAt=function(t){return this.m_vertices[t]},u.prototype.edgeAt=function(t){return this.m_edges[t]},u.prototype.isEmpty=function(){return this.m_edges.length<3||this.bounds.isEmpty()},u.prototype.vertices=function(){return this.m_vertices.slice(0)},u.prototype.edges=function(){return this.m_edges.slice(0)},u.prototype.overlapsYRange=function(t,e){return t<this.bounds.maxY&&e>=this.bounds.y},u.prototype.nextVertexIndex=function(t,e){var i=this.m_vertices.length;return(e?t+1:t-1+i)%i},u.prototype.nextEdgeVertexIndex=function(t,e){for(var i=(this.m_vertices.length,this.nextVertexIndex(t,e));i&&s(this.vertexAt(t),this.vertexAt(i));)i=this.nextVertexIndex(i,e);for(;i;){var n=this.nextVertexIndex(i,e);if(!r(this.vertexAt(t),this.vertexAt(i),this.vertexAt(n)))break;i=n}return i},u.prototype.containsPointEvenOdd=function(t){for(var e=0,i=0;i<this.m_edges.length;++i){var r=this.edgeAt(i);if(r.containsPoint(t))return!0;var s=r.vertex1,n=r.vertex2;if(s.y<=t.y&&n.y>t.y||s.y>t.y&&n.y<=t.y){var o=(t.y-s.y)/(n.y-s.y);t.x<s.x+o*(n.x-s.x)&&++e}}return 0!==(1&e)},u.prototype.containsPointNonZero=function(t){for(var e=0,r=0;r<this.m_edges.length;++r){var s=this.edgeAt(r);if(s.containsPoint(t))return!0;var n=s.vertex1,o=s.vertex2;o.y<t.y?n.y>t.y&&i(n,o,t)>0&&++e:o.y>t.y&&n.y<=t.y&&i(n,o,t)<0&&--e}return 0!==e},u.prototype.containsPoint=function(t){return this.bounds.containsPoint(t)?"nonzero"==this.fillRule?this.containsPointNonZero(t):this.containsPointEvenOdd(t):!1},u.prototype.edgeVerticesThatOverlapYRange=function(t,e){for(var i=[],r=0;r<this.m_edges.length;r++){var s=this.edgeAt(r).vertex1;s.y>=t&&s.y<e&&i.push(s)}return i},u.prototype.edgesThatOverlapYRange=function(t,e){for(var i=[],r=0;r<this.m_edges.length;r++){var s=this.edgeAt(r);s.overlapsYRange(t,e)&&i.push(s)}return i},u.prototype.shapeMarginEdgesThatOverlapYRange=function(t,e){for(var i=[],r=0;r<this.shapeMarginEdges.length;r++){var s=this.shapeMarginEdges[r];s.overlapsYRange(t,e)&&i.push(s)}return i},u.prototype.leftExclusionEdge=function(t,e){if(this.isEmpty()||!this.bounds.overlapsYRange(t,e))return void 0;var i,r,s,n=this.shapeMarginEdgesThatOverlapYRange(t,e);if(0!==n.length)for(n.sort(l),i=n[0].clippedEdgeXRange(t,e).x1,r=1;r<n.length&&!(n[r].minX>i);r++)s=n[r].clippedEdgeXRange(t,e),i=void 0===i?s.x1:Math.min(i,s.x1);var o=this.shapeMargin;if(o>0){var a=this.edgeVerticesThatOverlapYRange(t-o,e+o);for(a.sort(d),r=0;r<a.length;r++)s=h(a[r],o,t,e),i=void 0===i?s.x1:Math.min(i,s.x1)}return void 0===i&&console.error("Polygon leftExclusionEdge() failed"),i},u.prototype.rightExclusionEdge=function(t,e){if(this.isEmpty()||!this.bounds.overlapsYRange(t,e))return void 0;var i,r,s,n=this.shapeMarginEdgesThatOverlapYRange(t,e);if(0!==n.length)for(n.sort(g),i=n[0].clippedEdgeXRange(t,e).x2,r=1;r<n.length&&!(n[r].maxX<i);r++)s=n[r].clippedEdgeXRange(t,e),i=Math.max(i,s.x2);var o=this.shapeMargin;if(o>0){var a=this.edgeVerticesThatOverlapYRange(t-o,e+o);for(a.sort(f),r=0;r<a.length;r++)s=h(a[r],o,t,e),i=void 0===i?s.x2:Math.max(i,s.x2)}return void 0===i&&console.error("Polygon rightExclusionEdge() failed"),i},m.none={},m.prototype.intervalAt=function(t){return this.intervals[t+this.yOffset]},m.prototype.setIntervalAt=function(t,e){this.intervals[t+this.yOffset]=e},m.prototype.uniteIntervalAt=function(t,e){var i=this.intervalAt(t);i===m.none?this.setIntervalAt(t,e):(i.startX=Math.min(i.startX,e.startX),i.endX=Math.max(i.endX,e.endX))},m.prototype.intervalAtContains=function(t,e){var i=this.intervalAt(t);return i==m.none?!1:i.startX<=e.startX&&i.endX>=e.endX},y.prototype.generateIntervalAt=function(t,e){var i=Math.abs(t-e.y),r=i>this.shapeMargin?0:this.xIntercepts[i];return new x(t,e.startX-r,e.endX+r)},m.prototype.computeMarginIntervals=function(t){for(var e=new y(t),i=new m(this.yOffset,this.size),r=this.minY;r<this.maxY;++r){var s=this.intervalAt(r);if(s!=m.none){var n,o=Math.max(this.minY,r-t),h=Math.min(this.maxY-1,r+t);for(n=r-1;n>=o&&!(n>0&&this.intervalAtContains(n,s));--n)i.uniteIntervalAt(n,e.generateIntervalAt(n,s));for(i.uniteIntervalAt(r,e.generateIntervalAt(r,s)),n=r+1;h>=n&&!(n<this.maxY&&this.intervalAtContains(n,s));++n)i.uniteIntervalAt(n,e.generateIntervalAt(n,s))}}return i},b.prototype.hasData=function(){return!!this.imageData},b.prototype.alphaAt=function(t,e){return this.imageData.data[4*t+3+e*this.width*4]},w.prototype.init=function(t){var e,i=this,r=new Image,s=document.createElement("canvas");if(s.getContext||(v(i.url),t()),r.onload=function(){i.intervals=i.computeIntervals(r),i.intervals&&i.shapeMargin>0&&(i.intervals=i.intervals.computeMarginIntervals(i.shapeMargin,i.clip)),e&&URL.revokeObjectURL(e),t()},r.onerror=function(){v(i.url),t()},!r.hasOwnProperty("crossOrigin")&&window.URL&&window.URL.createObjectURL){var n=new XMLHttpRequest;n.onreadystatechange=function(){4===n.readyState&&(200===n.status?(e=URL.createObjectURL(n.response),r.src=e):(v(i.url),t()))},n.open("GET",i.url,!0),n.responseType="blob",n.send()}else r.crossOrigin="anonymous",r.src=i.url},w.prototype.computeIntervals=function(t){var e=this.clip,i=this.shapeImageThreshold,r=this.box.width,s=this.box.height,n=new b(t,r,s);if(!n.hasData())return void 0;for(var o=new m(-e.y,e.height),h=Math.min(e.height,this.box.height),a=0;h>a;a++)for(var p=-1,c=0;c<this.box.width;c++){var u=n.alphaAt(c,a);-1==p&&u>i?(p=c,o.intervalAt(a)===m.none&&o.setIntervalAt(a,new x(a,p,r))):-1!=p&&i>=u&&(o.intervalAt(a).endX=c,p=-1)}return o},w.prototype.rightExclusionEdge=function(t,e){var i=this.intervals;if(!i)return this.clip.width;for(var r,s=Math.max(t,this.clip.y);e>=s&&s<this.clip.maxY;s++){var n=i.intervalAt(s).endX;(void 0===r||void 0!==n&&n>r)&&(r=n)}return r},w.prototype.leftExclusionEdge=function(t,e){var i=this.intervals;if(!i)return 0;for(var r,s=Math.max(t,this.clip.y);e>=s&&s<this.clip.maxY;s++){var n=i.intervalAt(s).startX;(void 0===r||void 0!==n&&r>n)&&(r=n)}return r},R.zeroSize={width:0,height:0},R.prototype.isEmpty=function(){return this.width<=0||this.height<=0},R.prototype.scale=function(t){this.width*=t,this.height*=t},M.prototype.isEmpty=function(){return this.width<=0||this.height<=0},M.prototype.containsX=function(t){return t>=this.x&&t<this.maxX},M.prototype.containsY=function(t){return t>=this.y&&t<this.maxY},M.prototype.containsPoint=function(t){return this.containsX(t.x)&&this.containsY(t.y)},M.prototype.shiftLeftEdgeTo=function(t){this.width-=t-this.x,this.x=t},M.prototype.shiftTopEdgeTo=function(t){this.height-=t-this.y,this.y=t},M.prototype.shiftRightEdgeTo=function(t){this.width=t-this.x},M.prototype.shiftBottomEdgeTo=function(t){this.height=t-this.y},M.prototype.overlapsYRange=function(t,e){return!this.isEmpty()&&e>=this.y&&t<this.maxY},M.prototype.overlapsXRange=function(t,e){return!this.isEmpty()&&e>=this.x&&t<this.maxX},E.prototype.isEmpty=function(){return this.width<=0||this.height<=0},E.prototype.topLeftCorner=function(){return new M(this.rect.x,this.rect.y,this.radii.topLeft.width,this.radii.topLeft.height)},E.prototype.topRightCorner=function(){return new M(this.rect.maxX-this.radii.topRight.width,this.rect.y,this.radii.topRight.width,this.radii.topRight.height)},E.prototype.bottomLeftCorner=function(){return new M(this.rect.x,this.rect.maxY-this.radii.bottomLeft.height,this.radii.bottomLeft.width,this.radii.bottomLeft.height)},E.prototype.bottomRightCorner=function(){return new M(this.rect.maxX-this.radii.bottomRight.width,this.rect.maxY-this.radii.bottomRight.height,this.radii.bottomRight.width,this.radii.bottomRight.height)},E.prototype.isRounded=function(){function t(t){return t.width>0&&t.height>0}return t(this.radii.topLeft)||t(this.radii.topRight)||t(this.radii.bottomLeft)||t(this.radii.bottomRight)},E.prototype.cornersInsetRect=function(){var t=this.topLeftCorner(),e=this.topRightCorner(),i=this.bottomLeftCorner(),r=this.bottomRightCorner(),s=Math.max(t.maxX,i.maxX),n=Math.max(t.maxY,e.maxY);return new M(s,n,Math.min(e.x,r.x)-s,Math.min(i.y,r.y)-n)},E.prototype.scaleRadii=function(t){if(1!=t){var e=this.radii;e.topLeft.scale(t),e.topLeft.isEmpty()&&(e.topLeft=R.zeroSize),e.topRight.scale(t),e.topRight.isEmpty()&&(e.topRight=R.zeroSize),e.bottomLeft.scale(t),e.bottomLeft.isEmpty()&&(e.bottomLeft=R.zeroSize),e.bottomRight.scale(t),e.bottomRight.isEmpty()&&(e.bottomRight=R.zeroSize)}},E.prototype.isRenderable=function(){var t=this.radii,e=this.rect;return t.topLeft.width+t.topRight.width<=e.width&&t.bottomLeft.width+t.bottomRight.width<=e.width&&t.topLeft.height+t.bottomLeft.height<=e.height&&t.topRight.height+t.bottomRight.height<=e.height},E.prototype.adjustRadii=function(){var t=this.radii,e=Math.max(t.topLeft.width+t.topRight.width,t.bottomLeft.width+t.bottomRight.width),i=Math.max(t.topLeft.height+t.bottomLeft.height,t.topRight.height+t.bottomRight.height);if(0>=e||0>=i)return void(this.radii={topLeft:R.zeroSize,topRight:R.zeroSize,bottomRight:R.zeroSize,bottomLeft:R.zeroSize});var r=this.rect,s=r.width/e,n=r.height/i;this.scaleRadii(n>s?s:n)},E.prototype.minXInterceptAt=function(t,e){if(!this.rect.containsY(t))return e;var i,r=this.topLeftCorner();if(r.containsY(t))return i=r.maxY-t,r.maxX-L(i,r.width,r.height);var s=this.bottomLeftCorner();return s.containsY(t)?(i=t-s.y,s.maxX-L(i,s.width,s.height)):this.rect.x},E.prototype.maxXInterceptAt=function(t,e){if(!this.rect.containsY(t))return e;var i,r=this.topRightCorner();if(r.containsY(t))return i=r.maxY-t,r.x+L(i,r.width,r.height);var s=this.bottomRightCorner();return s.containsY(t)?(i=t-s.y,s.x+L(i,s.width,s.height)):this.rect.maxX},E.prototype.rightExclusionEdge=function(t,e){return this.rect.isEmpty()||!this.rect.overlapsYRange(t,e)?void 0:!this.isRounded()||this.cornersInsetRect().overlapsYRange(t,e)?this.rect.maxX:Math.max(this.maxXInterceptAt(t,this.rect.x),this.maxXInterceptAt(e,this.rect.x))},E.prototype.leftExclusionEdge=function(t,e){return this.rect.isEmpty()||!this.rect.overlapsYRange(t,e)?void 0:!this.isRounded()||this.cornersInsetRect().overlapsYRange(t,e)?this.rect.x:Math.min(this.minXInterceptAt(t,this.rect.maxX),this.minXInterceptAt(e,this.rect.maxX))},E.prototype.rightExclusionOffsets=C(E.prototype.topRightCorner,E.prototype.bottomRightCorner,I,S),E.prototype.leftExclusionOffsets=C(E.prototype.topLeftCorner,E.prototype.bottomLeftCorner,X,Y),V.prototype.onReady=function(t){this.ready?t():this.callback=t},V.prototype.leftExclusionEdge=function(t){return this.geometry?this.geometry.leftExclusionEdge(t.top,t.bottom):t.left},V.prototype.rightExclusionEdge=function(t){return this.geometry?this.geometry.rightExclusionEdge(t.top,t.bottom):t.right},V.prototype.computeStepOffsets=function(t){for(var e,i=[],r=0;r<Math.ceil(this.metrics.marginBox.height/t);r++){var s={left:0,right:this.shapeValue.box.width,top:r*t,bottom:Math.min((r+1)*t,this.metrics.marginBox.height)};s.top-=this.metrics.margins[0]+this.shapeValue.box.y,s.bottom-=this.metrics.margins[0]+this.shapeValue.box.y,"left"===this.metrics.cssFloat?(e=this.rightExclusionEdge(s),e=void 0===e?0:e+this.shapeValue.box.x+this.metrics.margins[3]):(e=this.leftExclusionEdge(s),e=void 0===e?0:this.metrics.marginBox.width-(e+this.shapeValue.box.x+this.metrics.margins[3])),i.push({cssFloat:this.metrics.cssFloat,top:s.top+this.shapeValue.box.y+this.metrics.margins[0],bottom:s.bottom+this.shapeValue.box.y+this.metrics.margins[0],offset:Math.min(e,this.metrics.marginBox.width)})}return i},V.prototype.computeAdaptiveOffsets=function(t){for(var e=this.shapeValue.box.x+this.metrics.margins[3],i=this.metrics.margins[0]+this.shapeValue.box.y,r="left"===this.metrics.cssFloat?this.geometry.rightExclusionOffsets(-i,this.metrics.marginBox.height-i,t):this.geometry.leftExclusionOffsets(-i,this.metrics.marginBox.height-i,t),s=[],n=0,o=0;o<r.length;o++){var h;void 0===r[o].x?h=0:(h="left"==this.metrics.cssFloat?r[o].x+e:this.metrics.marginBox.width-(r[o].x+e),h=Math.min(h,this.metrics.marginBox.width)),s.push({offset:h,top:n,bottom:n+r[o].height,cssFloat:this.metrics.cssFloat}),n+=r[o].height}return s},V.prototype.offsets=function(t){return this.geometry instanceof E?"step"==(t&&t.mode)?this.computeStepOffsets(t.step):this.computeAdaptiveOffsets(t.limit):this.computeStepOffsets(t.step)},k.prototype.polyfill=function(t,e){var i=getComputedStyle(t);if(/left|right/.test(i.cssFloat)&&t.getAttribute("data-shape-outside")){var r=e&&e.step||parseInt(i.fontSize),s=e&&e.mode||"adaptive",n=e&&e.limit||1.8*r,o=new V(t),h=this;o.onReady(function(){var i=o.offsets({mode:s,limit:n,step:r});q(t,i),e&&e.callback&&"function"==typeof e.callback&&e.callback.call(h.scope)})}},k.prototype.removePolyfill=function(t){var e=t.parentNode;for(e=t.parentNode;e&&e.hasAttribute&&!e.hasAttribute("data-shape-outside-container");e=e.parentNode);e&&e.hasAttribute&&(e.parentNode.insertBefore(t,e),e.parentNode.removeChild(e))},k.prototype.run=function(t){var e=this,i=t&&t.force,r=(i&&(i===this.Force.Layout||i===this.Force.LayoutStyles),i&&(i===this.Force.Styles||i===this.Force.LayoutStyles));if(i===this.Force.LayoutStyles?t.force=this.Force.Layout:i&&delete t.force,void 0===this.hasNativeSupport){var s=document.createElement("div"),n=["shape-outside","-webkit-shape-outside"];n.forEach(function(t){s.style.setProperty(t,"content-box"),e.hasNativeSupport=e.hasNativeSupport||s.style.getPropertyValue(t)})}if(!this.hasNativeSupport||i){if(!this.stylesLoaded||r){this.stylesLoaded=!0,new Q(function(i){i.forEach(function(t){for(var e=document.querySelectorAll(t.selector),i=0;i<e.length;i++)e[i].setAttribute("data-"+t.property,t.value)}),e.run(t)});var o=j(function(){e.teardown(),e.run(t)},300);return void this.scope.addEventListener("resize",o)}for(var h=document.querySelectorAll("[data-shape-outside]"),a=0;a<h.length;a++)this.polyfill(h[a],t)}},k.prototype.teardown=function(){for(var t=document.querySelectorAll("[data-shape-outside]"),e=0;e<t.length;e++)this.removePolyfill(t[e])},k.prototype.Force={Layout:"force-layout",Styles:"force-styles",LayoutStyles:"force-layout-styles"},Object.freeze&&(k.prototype.Force=Object.freeze(k.prototype.Force)),_.prototype.parseUrl=function(t){var e=/url\((.*)\)/.exec(t);return e?(e=e[1],e=e.replace(/^['"]/,""),e=e.replace(/['"]$/,"")):null},_.prototype.parseBox=function(t,e){var i=/margin-box|border-box|padding-box|content-box/.exec(t);i=i?i[0]:"margin-box";var r=JSON.parse(JSON.stringify(e.borderBox.radii)),s={text:i,x:e.borderBox.x,y:e.borderBox.y,width:e.borderBox.width,height:e.borderBox.height,radii:r};switch(i){case"content-box":U(s,-1,[e.paddings,e.borders]),H(s.radii,-1,[e.paddings,e.borders]);break;case"padding-box":U(s,-1,[e.borders]),H(s.radii,-1,[e.borders]);break;case"border-box":break;case"margin-box":U(s,1,[e.margins]),H(s.radii,1,[e.margins])}return s},_.prototype.printShape=function(){if(this.shape)switch(this.shape.type){case"inset":return"inset("+this.shape.insets.join(" ")+" round "+D(this.shape.radii,0).join(" ")+" / "+D(this.shape.radii,1).join(" ")+")";case"circle":return"circle("+this.shape.r+" at "+this.shape.cx+" "+this.shape.cy+")";case"ellipse":return"ellipse("+this.shape.rx+" "+this.shape.ry+" at "+this.shape.cx+" "+this.shape.cy+")";case"polygon":return"polygon("+this.shape.fillRule+", "+this.shape.points.map(function(t){return t.x+" "+t.y}).join(", ")+")";default:return"not yet implemented for "+this.shape.type}return"no shape specified"},_.prototype.printBox=function(){return this.box?this.box.text+" { x: "+this.box.x+", y: "+this.box.y+", width: "+this.box.width+", height: "+this.box.height+", radii: "+D(this.box.radii,0).join(" ")+" / "+D(this.box.radii,1).join(" ")+" }":"no box specified"},_.prototype.parseBasicShape=function(t,e,i){var r=/(inset|circle|ellipse|polygon)\((.*)\)/.exec(t);if(!r)return null;var s=r[1],n=r[2]?r[2]:"";switch(s){case"inset":return this.parseInset(n,e,i);case"circle":return this.parseCircle(n,e,i);case"ellipse":return this.parseEllipse(n,e,i);case"polygon":return this.parsePolygon(n,e,i);default:return null}},_.prototype.parseInset=function(t,e,i){var r=/((?:[^r]|r(?!o))*)?\s*(?:round\s+([^\/]*)(?:\s*\/\s*(.*))?)?/;t=r.exec(t);var s={type:"inset",insets:[0,0,0,0],radii:[[0,0],[0,0],[0,0],[0,0]]};if(t&&t[1]){var n=t[1].trim();n=n.split(/\s+/),s.insets[0]=n[0],s.insets[1]=n.length>1?n[1]:s.insets[0],s.insets[2]=n.length>2?n[2]:s.insets[0],s.insets[3]=n.length>3?n[3]:s.insets[1],s.insets[0]=i.toPixels(s.insets[0],e.height),s.insets[1]=i.toPixels(s.insets[1],e.width),s.insets[2]=i.toPixels(s.insets[2],e.height),s.insets[3]=i.toPixels(s.insets[3],e.width)}var o;return t&&t[2]&&(o=t[2].trim(),o=o.split(/\s+/),o.length<2&&o.push(o[0]),o.length<3&&o.push(o[0]),o.length<4&&o.push(o[1]),s.radii=o.map(function(t){return t=i.toPixels(t,e.width),[t,t]})),t&&t[3]&&(o=t[3].trim(),o=o.split(/\s+/),o.length<2&&o.push(o[0]),o.length<3&&o.push(o[0]),o.length<4&&o.push(o[1]),o.forEach(function(t,r){s.radii[r][1]=i.toPixels(t,e.height)})),s.x=s.insets[3],s.y=s.insets[0],s.width=e.width-(s.insets[1]+s.insets[3]),s.height=e.height-(s.insets[0]+s.insets[2]),s},_.prototype.parseEllipsoid=function(t){var e=/((?:[^a]|a(?!t))*)?\s*(?:at\s+(.*))?/;t=e.exec(t);var i={};if(t&&t[1]){var r=t[1].trim();r=r.split(/\s+/),i.rx=r[0],i.ry=r.length>1?r[1]:r[0]}else i.rx=i.ry="closest-side";var s=[];if(t&&t[2]){var n=t[2].trim();n=n.split(/\s+/);var o=!1;n.forEach(function(t){/\d+/.test(t)&&o?s[s.length-1]+=" "+t:s.push(t),o=/top|bottom|left|right/.test(t)&&n.length>2})}for(;s.length<2;)s.push("center");if(/top|bottom/.test(s[0])||/left|right/.test(s[1])){var h=s[0];s[0]=s[1],s[1]=h}return i.cx=s[0],i.cy=s[1],i},_.prototype.parseCircle=function(t,e,i){var r=this.parseEllipsoid(t);return r.type="circle",r.cx=G(r.cx,e.width,i),r.cy=G(r.cy,e.height,i),r.r=J(r.rx,[Math.abs(r.cx),Math.abs(e.width-r.cx),Math.abs(r.cy),Math.abs(e.height-r.cy)],Math.sqrt((e.width*e.width+e.height*e.height)/2),i),delete r.rx,delete r.ry,r},_.prototype.parseEllipse=function(t,e,i){var r=this.parseEllipsoid(t);return r.type="ellipse",r.cx=G(r.cx,e.width,i),r.cy=G(r.cy,e.height,i),r.rx=J(r.rx,[Math.abs(r.cx),Math.abs(e.width-r.cx)],e.width,i),r.ry=J(r.ry,[Math.abs(r.cy),Math.abs(e.height-r.cy)],e.height,i),r},_.prototype.parsePolygon=function(t,e,i){t=t.split(/\s*,\s*/);var r="nonzero";t.length>0&&/nonzero|evenodd/.test(t[0])&&(r=t[0].trim(),t=t.slice(1));var s=t.map(function(t){var r=t.split(/\s+/);return{x:i.toPixels(r[0],e.width),y:i.toPixels(r[1],e.height)}});return{type:"polygon",fillRule:r,points:s}},_.prototype.computeClip=function(t,e){var i=e.margins[3],r=e.margins[0],s=e.margins[3]+e.margins[1],n=e.margins[0]+e.margins[2];return{x:-t.x-i,y:-t.y-r,width:e.borderBox.width+s,height:e.borderBox.height+n}},_.prototype.parseShapeMargin=function(t,e,i){return parseInt(t)?Math.max(0,i.toPixels(t,e.width)):0},_.prototype.parseShapeImageThreshold=function(t){var e=parseFloat(t);return e?Math.min(Math.max(0,e),1):0},$.prototype.load=function(t,e,i){var r=this;if(this.url){var s=new XMLHttpRequest;s.onreadystatechange=function(){4===s.readyState&&(200===s.status?(r.cssText=s.responseText,t.call(i,r)):e.call(i,r))},s.open("GET",this.url);try{s.send(null)}catch(n){console.log("An error occurred loading a stylesheet, probably because we can't access the local file system"),e.call(i,r)}}else this.cssText=this.source.textContent,t.call(i,r)},K.prototype.init=function(){var t,e,i=Z(),r=i.length;for(this.queueCount=r,e=0;r>e;e++)t=new $(i[e]),this.stylesheets.push(t),t.load(this.onStyleSheetLoad,this.onStyleSheetError,this)},K.prototype.onStyleSheetLoad=function(){this.queueCount--,this.onComplete.call(this)},K.prototype.onStyleSheetError=function(t){var e,i=this.stylesheets.length;for(e=0;i>e;e++)if(t.source===this.stylesheets[e].source)return this.stylesheets.splice(e,1),this.queueCount--,void this.onComplete.call(this)},K.prototype.onComplete=function(){0===this.queueCount&&this.callback.call(this,this.stylesheets)},Q.prototype.onStylesLoaded=function(t){var e,i,r="\\s*([^{}]*[^\\s])\\s*{[^\\}]*",s="\\s*:\\s*((?:[^;\\(]|\\([^\\)]*\\))*)\\s*;",n=[],o=["shape-outside","shape-margin","shape-image-threshold"];
o.forEach(function(o){e=new RegExp(r+"("+o+")"+s,"ig"),t.forEach(function(t){for(;null!==(i=e.exec(t.cssText));)n.push({selector:i[1],property:i[2],value:i[3]})})}),this.callback(n)},t.ShapesPolyfill=new k(t)}(window);