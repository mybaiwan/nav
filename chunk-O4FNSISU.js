import"./chunk-IEDFX3CB.js";import{a as H,b as tt}from"./chunk-D2DVPHPI.js";import"./chunk-3EJNUL6R.js";import{a as N}from"./chunk-IFQGZMNC.js";import{d as et,f as it,h as nt,i as ot,j as rt,k as at,l as lt}from"./chunk-KHXOORMY.js";import"./chunk-LYLQ7SOO.js";import{l as Y,m as Z}from"./chunk-FOPZF2PQ.js";import"./chunk-K6QJIR2C.js";import{F as S}from"./chunk-KHQWWUXV.js";import{a as W,b as G,c as R}from"./chunk-JR25KO44.js";import"./chunk-E5MYCEA7.js";import{a as J,b as q}from"./chunk-5Z5LNM55.js";import{b as j}from"./chunk-P4KEG5F4.js";import{$ as E,Hb as K,Jb as Q,Mb as X,Wb as I}from"./chunk-RJILJG74.js";import{$d as U,Bc as $,Ca as x,Cb as M,Cd as B,Da as v,Gc as P,Ib as u,Ld as F,Nd as V,Ob as l,Td as A,ac as i,bc as n,be as C,cc as T,ee as d,gc as b,jc as g,lc as f,nb as D,nd as k,od as L,qb as e,vb as z,wd as O,xc as a,yc as c,zc as y}from"./chunk-JPZQCUPP.js";function mt(o,r){if(o&1){let t=b();i(0,"button",11),g("click",function(){x(t);let s=f(2);return v(s.handleSubmit())}),a(1),n()}if(o&2){let t=f(2);l("nzLoading",t.submitting),e(),y(" ",t.$t("_save")," ")}}function ct(o,r){o&1&&(i(0,"div",12),a(1," \u5904\u7406\u5B8C\u6210\u6240\u6709\u6570\u636E\u540E\u9700\u8981\u70B9\u51FB\u4E00\u6B21\u4FDD\u5B58\u65B9\u53EF\u751F\u6548 "),n())}function st(o,r){if(o&1&&T(0,"tag-list",21),o&2){let t=f().$implicit;l("data",t.tags)}}function dt(o,r){if(o&1&&(i(0,"td",9),a(1),n()),o&2){let t=f().$implicit;e(),$(" ",t.extra.oneName," / ",t.extra.twoName," / ",t.extra.threeName," ")}}function pt(o,r){if(o&1){let t=b();i(0,"tr")(1,"td")(2,"div")(3,"a",13),g("click",function(){let s=x(t),_=s.$implicit,h=s.index,p=f(2);return v(p.handleConfirmGet(_,h))}),a(4),n()(),i(5,"div",14)(6,"a",15),g("nzOnConfirm",function(){let s=x(t).index,_=f(2);return v(_.handleDelete(s))}),a(7),n()()(),i(8,"td"),a(9),n(),i(10,"td"),T(11,"app-logo",16),n(),i(12,"td")(13,"a",17),a(14),n()(),i(15,"td"),u(16,st,1,1,"tag-list",18),n(),i(17,"td")(18,"pre",19),a(19),n()(),u(20,dt,2,3,"td",20),i(21,"td"),a(22),n()()}if(o&2){let t=r.$implicit,m=f(2);e(4),c(m.$t("_collect")),e(2),l("nzPopconfirmTitle",m.$t("_confirmDel")),e(),y(" ",m.$t("_del")," "),e(2),c(m.typeMap[t.extra.type]),e(2),l("src",t.icon)("name",t.name),e(2),l("href",t.url,D),e(),c(t.name),e(2),l("ngIf",t.tags),e(3),c(t.desc),e(),l("ngIf",t.extra),e(2),c(t.createdAt)}}function ft(o,r){if(o&1){let t=b();i(0,"div"),u(1,mt,2,2,"button",3),i(2,"button",4),g("click",function(){x(t);let s=f();return v(s.getUserCollect())}),a(3),n(),u(4,ct,2,0,"div",5),i(5,"nz-table",6,0)(7,"thead")(8,"tr")(9,"th",7),a(10),n(),i(11,"th",7),a(12),n(),i(13,"th",7),a(14),n(),i(15,"th",8),a(16),n(),i(17,"th",8),a(18),n(),i(19,"th",9),a(20),n(),i(21,"th",9),a(22),n(),i(23,"th"),a(24),n()()(),i(25,"tbody"),u(26,pt,23,12,"tr",10),n()()()}if(o&2){let t=f();e(),l("ngIf",!t.isSelfDevelop),e(),l("nzLoading",t.submitting),e(),y(" ",t.$t("_refresh")," "),e(),l("ngIf",!t.isSelfDevelop),e(),l("nzData",t.dataList)("nzShowPagination",!1),e(5),c(t.$t("_action")),e(2),c(t.$t("_type")),e(2),c(t.$t("_icon")),e(2),c(t.$t("_webName")),e(2),c(t.$t("_associatedLabels")),e(2),c(t.$t("_webDesc")),e(2),c(t.$t("_webTag")),e(2),c(t.$t("_createAt")),e(2),l("ngForOf",t.dataList)("ngForTrackBy",t.trackByItem)}}var w=class o{constructor(r,t,m){this.message=r;this.modal=t;this.notification=m}$t=d;isSelfDevelop=A;submitting=!1;isPermission=!!F();dataList=[];authCode="";tagMap=U;typeMap={1:d("_add"),2:d("_edit"),3:d("_del")};ngOnInit(){this.getUserCollect()}handleDelete(r){this.submitting=!0,X({data:this.dataList[r]}).then(t=>{this.dataList=t.data?.data||[]}).finally(()=>{this.submitting=!1})}getUserCollect(){this.submitting=!0,Q().then(r=>{this.isPermission=!0,this.dataList=r.data?.data||[]}).finally(()=>{this.submitting=!1})}handleSubmitAuthCode(){this.submitting||!this.authCode||(V(this.authCode),this.getUserCollect())}handleConfirmGet(r,t){let m=this,s=0,_=0,h=0;try{s=C.findIndex(p=>p.title===r.extra.oneName),_=C[s].nav.findIndex(p=>p.title===r.extra.twoName),h=C[s].nav[_].nav.findIndex(p=>p.title===r.extra.threeName)}catch(p){this.notification.error(d("_error"),`${d("_classNoMatch")}\uFF1A${p.message}`)}try{E.emit("CREATE_WEB",{detail:r,oneIndex:s,twoIndex:_,threeIndex:h,isMove:!0}),E.emit("SET_CREATE_WEB",{detail:null,callback(){m.handleDelete(t)}})}catch(p){this.notification.error(d("_error"),p.message)}}handleSubmit(){this.submitting||this.modal.info({nzTitle:d("_syncDataOut"),nzOkText:d("_confirmSync"),nzContent:d("_confirmSyncTip"),nzOnOk:()=>{this.submitting=!0,K({message:"update db",content:JSON.stringify(C),path:B}).then(()=>{this.message.success(d("_syncSuccessTip"))}).finally(()=>{this.submitting=!1})}})}trackByItem(r,t){return t.id}static \u0275fac=function(t){return new(t||o)(z(I),z(S),z(N))};static \u0275cmp=M({type:o,selectors:[["user-collect"]],features:[P([I,S,N])],decls:2,vars:2,consts:[["basicTable",""],["nzTip","Loading...",3,"nzSpinning"],[4,"ngIf"],["class","mt-2.5 mr-2.5","nz-button","","nzType","primary",3,"nzLoading","click",4,"ngIf"],["nz-button","",3,"click","nzLoading"],["class","mb-2.5 mt-2.5 color-red font-bold",4,"ngIf"],[3,"nzData","nzShowPagination"],["nzWidth","80px"],["nzWidth","100px"],["nzWidth","300px"],[4,"ngFor","ngForOf","ngForTrackBy"],["nz-button","","nzType","primary",1,"mt-2.5","mr-2.5",3,"click","nzLoading"],[1,"mb-2.5","mt-2.5","color-red","font-bold"],[3,"click"],[1,"mt-2.5"],["nz-popconfirm","","nzPopconfirmPlacement","rightTop","nzOkType","danger","nzPopconfirmPlacement","bottom",1,"color-red",3,"nzOnConfirm","nzPopconfirmTitle"],[3,"src","name"],["target","_blank",3,"href"],[3,"data",4,"ngIf"],[1,"desc"],["nzWidth","300px",4,"ngIf"],[3,"data"]],template:function(t,m){t&1&&(i(0,"nz-spin",1),u(1,ft,27,16,"div",2),n()),t&2&&(l("nzSpinning",m.submitting),e(),l("ngIf",m.isPermission))},dependencies:[O,k,L,q,J,R,G,W,j,lt,ot,et,it,at,nt,rt,Z,Y,H,tt],styles:[".add-btn[_ngcontent-%COMP%]{margin-bottom:20px;margin-right:20px}.desc[_ngcontent-%COMP%]{width:300px;white-space:pre-wrap}.ant-table-wrapper[_ngcontent-%COMP%]{overflow:auto}"]})};export{w as default};
