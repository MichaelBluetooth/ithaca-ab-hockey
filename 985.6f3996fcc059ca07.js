"use strict";(self.webpackChunkithaca_ab_hockey=self.webpackChunkithaca_ab_hockey||[]).push([[985],{6985:(O,d,i)=>{i.r(d),i.d(d,{HomeModule:()=>q});var c=i(6814),p=i(9862),r=i(9310),e=i(4946),l=i(6593);let m=(()=>{var t;class s{constructor(n){this.videoUrl=n.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/yq3AekUa5mQ")}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(l.H7))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-featured-content"]],decls:2,vars:1,consts:[[1,"wrapper"],["frameborder","0","height","400px","width","100%","allowfullscreen","","allow","autoplay",3,"src"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"iframe",1),e.qZA()),2&n&&(e.xp6(1),e.Q6J("src",a.videoUrl,e.uOi))},styles:["[_nghost-%COMP%]{height:100%;width:100%}.wrapper[_ngcontent-%COMP%]{position:relative}.content-text[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:20px;right:20px}.main-text[_ngcontent-%COMP%]:hover{text-decoration:underline}.detail-text[_ngcontent-%COMP%]{font-size:12px}@media (min-width: 992px){.detail-text[_ngcontent-%COMP%]{font-size:inherit}}.header-image[_ngcontent-%COMP%]{background-image:url(/assets/images/lfg.png);background-size:cover}"]}),s})(),u=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-secondary-content"]],decls:35,vars:0,consts:[[1,"wrapper"],[1,"content","d-flex","flex-grow"],[1,"card"],["src","assets/images/dianes_vs_outlaws.png","height","200",1,"card-img-top"],[1,"card-body"],[1,"card-title","fw-bold"],[1,"card-text"],["href","https://youtu.be/sx-14ueDDHU?list=PL8tPgYeZwSRUUXdyqQfD9_P6HXXvIVKlQ&t=95",1,"d-flex","flex-grow"],["src","assets/images/orcutt_vs_blacksheep.png","height","200",1,"card-img-top"],[1,"d-flex","align-items-center","gap-3"],["src","assets/images/who_is_e_net.png","width","35%",1,"rounded","border"],[1,"fw-bold"],["src","assets/images/mansour_vs_orcutt_1.png","width","35%",1,"rounded"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"div",2),e._UZ(4,"img",3),e.TgZ(5,"div",4)(6,"div",5),e._uU(7,"Dianes Dipsticks Dominate"),e.qZA(),e.TgZ(8,"p",6),e._uU(9,"Dianes Dipsticks deliver decisive defeat to Outlaws in 8-2 victory"),e.qZA()()()()(),e.TgZ(10,"div",1)(11,"a",7)(12,"div",2),e._UZ(13,"img",8),e.TgZ(14,"div",4)(15,"div",5),e._uU(16,"Ahahaha, Shutout"),e.qZA(),e.TgZ(17,"p",6),e._uU(18,"Goalies Alex Chang and Thomas Conroy keep the game tight as Black Sheep beat Orcutt 1-0."),e.qZA()()()()()(),e.TgZ(19,"div")(20,"div",9),e._UZ(21,"img",10),e.TgZ(22,"div")(23,"div",11),e._uU(24,'Who is "E. Net?"'),e.qZA(),e.TgZ(25,"p"),e._uU(26,"Mystery player known only as E. Net key difference maker in 5-4 Mansour victory over Instant Replay"),e.qZA()()()(),e.TgZ(27,"div")(28,"div",9),e._UZ(29,"img",12),e.TgZ(30,"div")(31,"div",11),e._uU(32,"Sunday Showdown!"),e.qZA(),e.TgZ(33,"p"),e._uU(34,"Mansours Jewelers can't shine bright enough - fall to Orcutt Real Estate 9-2"),e.qZA()()()())},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:20px}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:inherit}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.content[_ngcontent-%COMP%]{width:100%}@media (min-width: 992px){.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:12px}.content[_ngcontent-%COMP%]{width:50%}}"]}),s})();var g=i(1659);function h(t,s){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._UZ(2,"img",6),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()),2&t){const o=s.$implicit;e.xp6(2),e.Q6J("src","assets/teams/"+o.logo,e.LSH),e.xp6(2),e.hij(" ",2*o.wins+o.ties," "),e.xp6(2),e.hij(" ",o.wins+o.losses+o.ties," "),e.xp6(2),e.hij(" ",o.wins," "),e.xp6(2),e.hij(" ",o.losses," "),e.xp6(2),e.hij(" ",o.ties," ")}}const f=function(){return["/standings"]};let Z=(()=>{var t;class s{constructor(n){this.http=n,this.teams=[]}ngOnInit(){this.http.get("assets/teams/standings.json").subscribe(n=>{this.teams=n})}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(p.eN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-standings-panel"]],decls:22,vars:5,consts:[[1,"card","shadow"],[1,"card-body"],[3,"routerLink"],[1,"table","table-sm"],["scope","col"],[4,"ngFor","ngForOf"],["height","25px",3,"src"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2)(3,"h3"),e._uU(4,"Standings"),e.qZA()(),e.TgZ(5,"table",3)(6,"thead")(7,"tr"),e._UZ(8,"th",4),e.TgZ(9,"th",4),e._uU(10,"PTS"),e.qZA(),e.TgZ(11,"th",4),e._uU(12,"GP"),e.qZA(),e.TgZ(13,"th",4),e._uU(14,"W"),e.qZA(),e.TgZ(15,"th",4),e._uU(16,"L"),e.qZA(),e.TgZ(17,"th",4),e._uU(18,"T"),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,h,13,6,"tr",5),e.ALo(21,"sortStandings"),e.qZA()()()()),2&n&&(e.xp6(2),e.Q6J("routerLink",e.DdM(4,f)),e.xp6(18),e.Q6J("ngForOf",e.lcZ(21,2,a.teams)))},dependencies:[c.sg,r.rH,g.X],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),s})();const _=function(){return["/schedule"]};let v=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-calendar-panel"]],decls:27,vars:2,consts:[[1,"card","shadow"],[1,"card-body","d-flex","flex-column","gap-1"],[3,"routerLink"],[1,"fw-bold"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4")(3,"a",2),e._uU(4," Schedule "),e.qZA()(),e.TgZ(5,"div",3),e._uU(6," October 1, 2023 (Sunday) "),e.qZA(),e.TgZ(7,"div"),e._uU(8," In-person registration (6-8pm) and evaluation skates (6:45pm and 8:15pm). "),e.qZA(),e.TgZ(9,"div",3),e._uU(10," October 8, 2023 (Sunday) "),e.qZA(),e.TgZ(11,"div")(12,"div"),e._uU(13," Season begins "),e.qZA(),e.TgZ(14,"div"),e._uU(15," Time slots are: "),e.qZA(),e.TgZ(16,"ul")(17,"li"),e._uU(18," Sunday 6:15, 7:45 , 9:15 "),e.qZA(),e.TgZ(19,"li"),e._uU(20," Monday 8:30 , 10:00 "),e.qZA(),e.TgZ(21,"li"),e._uU(22," Wednesday 9:15 "),e.qZA()()(),e.TgZ(23,"div",3),e._uU(24," March 10, 2023 (Sunday) "),e.qZA(),e.TgZ(25,"div"),e._uU(26," Championship games "),e.qZA()()()),2&n&&(e.xp6(3),e.Q6J("routerLink",e.DdM(1,_)))},dependencies:[r.rH],styles:["a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),s})(),C=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-documents-panel"]],decls:17,vars:0,consts:[[1,"card","shadow"],[1,"card-body"],[1,"d-flex","flex-column","gap-1"],["href","assets/documents/AB Discipline Document 2023.docx"],[1,"bi","bi-file-earmark-word"],["href","assets/documents/AB Rules Document 2023 Version 1.docx"],["href","assets/documents/Adult A-B Appication Form.docx"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3,"Documents"),e.qZA(),e.TgZ(4,"div",2)(5,"div")(6,"a",3),e._UZ(7,"i",4),e._uU(8," Discipline Policy "),e.qZA()(),e.TgZ(9,"div")(10,"a",5),e._UZ(11,"i",4),e._uU(12," AB Rules Document "),e.qZA()(),e.TgZ(13,"div")(14,"a",6),e._UZ(15,"i",4),e._uU(16," Application Form "),e.qZA()()()()())}}),s})(),y=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-right-side"]],decls:4,vars:0,consts:[[1,"d-flex","flex-column","gap-3"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-calendar-panel")(2,"app-standings-panel")(3,"app-documents-panel"),e.qZA())},dependencies:[Z,v,C]}),s})();function x(t,s){if(1&t&&(e.ynx(0),e.TgZ(1,"div",4)(2,"a",5),e._UZ(3,"img",6),e.qZA()(),e.BQk()),2&t){const o=s.$implicit,n=s.index;e.xp6(1),e.ekj("border-top",n>0),e.xp6(1),e.Q6J("href",o.website,e.LSH),e.xp6(1),e.Q6J("src","assets/sponsors/"+o.image,e.LSH)("alt",o.name)("title",o.name)}}const T=function(){return["/sponsors"]};let w=(()=>{var t;class s{constructor(n){this.http=n,this.sponsors=[]}ngOnInit(){this.http.get("assets/sponsors/sponsors.json").subscribe(n=>{this.sponsors=n})}}return(t=s).\u0275fac=function(n){return new(n||t)(e.Y36(p.eN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-sponsors-panel"]],decls:6,vars:3,consts:[[1,"card","shadow"],[1,"card-body"],[3,"routerLink"],[4,"ngFor","ngForOf"],[1,"p-2","d-flex","flex-column","gap-3","justify-content-center","align-items-center"],["target","_blank",3,"href"],["width","100%",3,"src","alt","title"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3")(3,"a",2),e._uU(4," Sponsors "),e.qZA()(),e.YNc(5,x,4,6,"ng-container",3),e.qZA()()),2&n&&(e.xp6(3),e.Q6J("routerLink",e.DdM(2,T)),e.xp6(2),e.Q6J("ngForOf",a.sponsors))},dependencies:[c.sg,r.rH],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),s})(),A=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-community-panel"]],decls:7,vars:0,consts:[[1,"card","shadow"],[1,"card-body"],[1,"p-2","d-flex","justify-content-center","align-items-center"],["href","https://crcithaca.com/","target","_blank"],["src","assets/images/lansing_rink_logo.png","width","100%","alt","Community Recreation Center","title","Community Recreation Center"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3,"Community"),e.qZA(),e.TgZ(4,"div",2)(5,"a",3),e._UZ(6,"img",4),e.qZA()()()())}}),s})(),U=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-left-side"]],decls:3,vars:0,consts:[[1,"d-flex","flex-column","gap-3"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0),e._UZ(1,"app-sponsors-panel")(2,"app-community-panel"),e.qZA())},dependencies:[w,A]}),s})();const P=[{path:"",component:(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-home"]],decls:10,vars:0,consts:[[1,"wrapper"],[1,"left-section"],[1,"center-section","flex-grow-1"],[1,"card","shadow"],[1,"card-body","d-flex","flex-column","gap-3"],[1,"right-section"]],template:function(n,a){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-left-side"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"app-featured-content")(7,"app-secondary-content"),e.qZA()()(),e.TgZ(8,"div",5),e._UZ(9,"app-right-side"),e.qZA()())},dependencies:[m,u,y,U],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.left-section[_ngcontent-%COMP%]{order:3;width:100%}.right-section[_ngcontent-%COMP%]{order:2;width:100%}.center-section[_ngcontent-%COMP%]{order:1}@media (min-width: 992px){.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:12px}.left-section[_ngcontent-%COMP%]{order:1;width:25%}.right-section[_ngcontent-%COMP%]{order:3;width:33%}}"]}),s})()}];let S=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[r.Bz.forChild(P),r.Bz]}),s})();var M=i(8081);let q=(()=>{var t;class s{}return(t=s).\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[c.ez,S,p.JF,M.I]}),s})()}}]);