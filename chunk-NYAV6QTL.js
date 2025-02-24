import{a as ee,b as _,d as te}from"./chunk-YI77HVEE.js";import{o as Z,p as q,r as J}from"./chunk-SID3MH4F.js";import{Da as Y,Ea as Q,S as G,d as U,db as K,eb as X,fb as $}from"./chunk-NEPXOWIL.js";import{Ab as M,Da as g,Ea as u,Ga as N,Kb as b,La as D,Mb as B,Nb as p,Pb as c,Qc as W,Rb as C,Sb as E,Tb as V,Xc as j,Yb as F,a as k,bc as d,cc as v,dc as H,ec as f,fc as z,hc as L,kc as R,mc as m,oa as S,pb as s,qb as I,w as O,x as y,xb as w,yb as x,yc as h,zb as A,zc as P}from"./chunk-LPI4T5OW.js";var oe=(e=>(e[e.Side=1]="Side",e[e.Shortcut=2]="Shortcut",e))(oe||{}),ie=(n=>(n[n.Calendar=1]="Calendar",n[n.OffWork=2]="OffWork",n[n.Runtime=3]="Runtime",n[n.Image=4]="Image",n[n.Countdown=5]="Countdown",n[n.HTML=6]="HTML",n[n.Holiday=7]="Holiday",n))(ie||{});var ne=class t{constructor(i){this.sanitized=i}transform(i){return this.sanitized.bypassSecurityTrustHtml(i)}static \u0275fac=function(e){return new(e||t)(I(U,16))};static \u0275pipe=M({name:"safeHtml",type:t,pure:!0})};function le(t,i){if(t&1&&(f(0),h(1),z()),t&2){let e=m(3);s(),P(e.nzTitle)}}function se(t,i){if(t&1&&(d(0,"div",7),p(1,le,2,1,"ng-container",9),v()),t&2){let e=m(2);s(),c("nzStringTemplateOutlet",e.nzTitle)}}function pe(t,i){if(t&1&&(f(0),h(1),z()),t&2){let e=m(2);s(),P(e.nzContent)}}function ce(t,i){if(t&1&&(d(0,"div",2)(1,"div",3)(2,"div",4),H(3,"span",5),v(),d(4,"div",6)(5,"div"),p(6,se,2,1,"div",7),d(7,"div",8),p(8,pe,2,1,"ng-container",9),v()()()()()),t&2){let e=m();E(e.nzOverlayStyle),V(e._classMap),C("ant-popover-rtl",e.dir==="rtl"),c("@.disabled",!!(e.noAnimation!=null&&e.noAnimation.nzNoAnimation))("nzNoAnimation",e.noAnimation==null?null:e.noAnimation.nzNoAnimation)("@zoomBigMotion","active"),s(6),F(e.nzTitle?6:-1),s(2),c("nzStringTemplateOutlet",e.nzContent)}}var de="popover",Me=(()=>{let t=ee,i,e=[],l=[];return class T extends t{static{let a=typeof Symbol=="function"&&Symbol.metadata?Object.create(t[Symbol.metadata]??null):void 0;i=[G()],O(null,null,i,{kind:"field",name:"nzPopoverBackdrop",static:!1,private:!1,access:{has:r=>"nzPopoverBackdrop"in r,get:r=>r.nzPopoverBackdrop,set:(r,n)=>{r.nzPopoverBackdrop=n}},metadata:a},e,l),a&&Object.defineProperty(this,Symbol.metadata,{enumerable:!0,configurable:!0,writable:!0,value:a})}_nzModuleName=de;arrowPointAtCenter;title;content;directiveTitle;trigger="hover";placement="top";origin;visible;mouseEnterDelay;mouseLeaveDelay;overlayClassName;overlayStyle;overlayClickable;directiveContent=null;nzPopoverBackdrop=y(this,e,!1);visibleChange=(y(this,l),new D);getProxyPropertyMap(){return k({nzPopoverBackdrop:["nzBackdrop",()=>this.nzPopoverBackdrop]},super.getProxyPropertyMap())}constructor(){super(re)}static \u0275fac=function(r){return new(r||T)};static \u0275dir=A({type:T,selectors:[["","nz-popover",""]],hostVars:2,hostBindings:function(r,n){r&2&&C("ant-popover-open",n.visible)},inputs:{arrowPointAtCenter:[2,"nzPopoverArrowPointAtCenter","arrowPointAtCenter",j],title:[0,"nzPopoverTitle","title"],content:[0,"nzPopoverContent","content"],directiveTitle:[0,"nz-popover","directiveTitle"],trigger:[0,"nzPopoverTrigger","trigger"],placement:[0,"nzPopoverPlacement","placement"],origin:[0,"nzPopoverOrigin","origin"],visible:[0,"nzPopoverVisible","visible"],mouseEnterDelay:[0,"nzPopoverMouseEnterDelay","mouseEnterDelay"],mouseLeaveDelay:[0,"nzPopoverMouseLeaveDelay","mouseLeaveDelay"],overlayClassName:[0,"nzPopoverOverlayClassName","overlayClassName"],overlayStyle:[0,"nzPopoverOverlayStyle","overlayStyle"],overlayClickable:[0,"nzPopoverOverlayClickable","overlayClickable"],nzPopoverBackdrop:"nzPopoverBackdrop"},outputs:{visibleChange:"nzPopoverVisibleChange"},exportAs:["nzPopover"],features:[B,b]})}})(),re=(()=>{class t extends te{_prefix="ant-popover";get hasBackdrop(){return this.nzTrigger==="click"?this.nzBackdrop:!1}isEmpty(){return _(this.nzTitle)&&_(this.nzContent)}static \u0275fac=(()=>{let e;return function(o){return(e||(e=N(t)))(o||t)}})();static \u0275cmp=w({type:t,selectors:[["nz-popover"]],exportAs:["nzPopoverComponent"],features:[b],decls:2,vars:6,consts:[["overlay","cdkConnectedOverlay"],["cdkConnectedOverlay","","nzConnectedOverlay","",3,"overlayOutsideClick","detach","positionChange","cdkConnectedOverlayHasBackdrop","cdkConnectedOverlayOrigin","cdkConnectedOverlayPositions","cdkConnectedOverlayOpen","cdkConnectedOverlayPush","nzArrowPointAtCenter"],[1,"ant-popover",3,"nzNoAnimation"],[1,"ant-popover-content"],[1,"ant-popover-arrow"],[1,"ant-popover-arrow-content"],["role","tooltip",1,"ant-popover-inner"],[1,"ant-popover-title"],[1,"ant-popover-inner-content"],[4,"nzStringTemplateOutlet"]],template:function(l,o){if(l&1){let a=L();p(0,ce,9,11,"ng-template",1,0,W),R("overlayOutsideClick",function(n){return g(a),u(o.onClickOutside(n))})("detach",function(){return g(a),u(o.hide())})("positionChange",function(n){return g(a),u(o.onPositionChange(n))})}l&2&&c("cdkConnectedOverlayHasBackdrop",o.hasBackdrop)("cdkConnectedOverlayOrigin",o.origin)("cdkConnectedOverlayPositions",o._positions)("cdkConnectedOverlayOpen",o._visible)("cdkConnectedOverlayPush",o.cdkConnectedOverlayPush)("nzArrowPointAtCenter",o.nzArrowPointAtCenter)},dependencies:[Q,Y,q,Z,J,$,X],encapsulation:2,data:{animation:[K]},changeDetection:0})}return t})(),Be=(()=>{class t{static \u0275fac=function(l){return new(l||t)};static \u0275mod=x({type:t});static \u0275inj=S({imports:[re]})}return t})();export{oe as a,ie as b,ne as c,Me as d,Be as e};
