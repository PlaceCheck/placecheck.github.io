(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{"2Wme":function(t,e,i){"use strict";i.r(e),i.d(e,"ProfilePageModule",(function(){return O}));var c=i("SVse"),n=i("s7LF"),s=i("sZkV"),o=i("iInd"),a=i("vkgz"),l=i("pLZG"),r=i("lJxs"),b=i("wZ+X"),p=i("8Y7J"),u=i("9Ku7"),f=i("lyr6");function d(t,e){if(1&t){const t=p.Qb();p.Pb(0,"ion-item",3),p.Xb("click",(function(){p.nc(t);const i=e.$implicit;return p.bc(2).navigateToPlaceVisitorList(i.place_uuid)})),p.Pb(1,"ion-label"),p.Pb(2,"h2"),p.sc(3),p.Ob(),p.Pb(4,"h3"),p.sc(5),p.Ob(),p.Ob(),p.Ob()}if(2&t){const t=e.$implicit;p.Ab(3),p.tc(t.place_name),p.Ab(2),p.tc(t.place_address)}}function P(t,e){if(1&t&&(p.Pb(0,"ion-list"),p.Pb(1,"ion-list-header"),p.sc(2," Places "),p.Ob(),p.qc(3,d,6,2,"ion-item",2),p.Ob()),2&t){const t=p.bc();p.Ab(3),p.hc("ngForOf",t.placeList)}}const h=[{path:"",component:(()=>{class t{constructor(t,e,i){this.router=t,this.authenticationService=e,this.placeAdminService=i,this.placeList=[],this.setupPlaces()}setupPlaces(){this.placeAdminService.getAdminPlaceListByAuthPermissions().pipe(Object(a.a)(t=>{console.log("ProfilePage -> constructor -> placesQueryResultErrors",t.errors)}),Object(l.a)(t=>{var e;return Object(b.a)(null===(e=t.data)||void 0===e?void 0:e.place)}),Object(r.a)(({data:t})=>t.place),Object(a.a)(t=>{this.placeList=t})).subscribe()}ngOnInit(){}navigateToPlaceVisitorList(t){this.router.navigate(["place",t,"visitors-list"])}}return t.\u0275fac=function(e){return new(e||t)(p.Kb(o.g),p.Kb(u.a),p.Kb(f.a))},t.\u0275cmp=p.Eb({type:t,selectors:[["app-profile"]],decls:6,vars:3,consts:[["color","cobaltblue"],[4,"ngIf"],["button","",3,"click",4,"ngFor","ngForOf"],["button","",3,"click"]],template:function(t,e){1&t&&(p.Pb(0,"ion-header"),p.Pb(1,"ion-toolbar",0),p.Pb(2,"ion-title"),p.sc(3),p.Ob(),p.Ob(),p.Ob(),p.Pb(4,"ion-content"),p.qc(5,P,4,1,"ion-list",1),p.Ob()),2&t&&(p.Ab(3),p.vc(" ",e.placeList&&e.placeList[0]&&e.placeList[0].place_name?e.placeList[0].place_name+"'s":"Your"," COVIDSafe Place",e.placeList.length>1?"s":""," "),p.Ab(2),p.hc("ngIf",e.placeList.length>0))},directives:[s.n,s.C,s.B,s.i,c.m,s.w,s.x,c.l,s.q,s.v],styles:[""]}),t})()}];let m=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[o.i.forChild(h)],o.i]}),t})(),O=(()=>{class t{}return t.\u0275mod=p.Ib({type:t}),t.\u0275inj=p.Hb({factory:function(e){return new(e||t)},imports:[[c.c,n.g,s.D,m]]}),t})()}}]);