"use strict";(self.webpackChunkithaca_ab_hockey=self.webpackChunkithaca_ab_hockey||[]).push([[985],{6985:(q,d,i)=>{i.r(d),i.d(d,{HomeModule:()=>O});var c=i(6733),p=i(2939),r=i(8291),e=i(9665),l=i(3232);let m=(()=>{var n;class s{constructor(t){this.videoUrl=t.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/KbiszOZ0geU")}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(l.H7))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-featured-content"]],decls:2,vars:1,consts:[[1,"wrapper"],["frameborder","0","height","400px","width","100%","allowfullscreen","","allow","autoplay",3,"src"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"iframe",1),e.qZA()),2&t&&(e.xp6(1),e.Q6J("src",a.videoUrl,e.uOi))},styles:["[_nghost-%COMP%]{height:100%;width:100%}.wrapper[_ngcontent-%COMP%]{position:relative}.content-text[_ngcontent-%COMP%]{position:absolute;bottom:20px;left:20px;right:20px}.main-text[_ngcontent-%COMP%]:hover{text-decoration:underline}.detail-text[_ngcontent-%COMP%]{font-size:12px}@media (min-width: 992px){.detail-text[_ngcontent-%COMP%]{font-size:inherit}}.header-image[_ngcontent-%COMP%]{background-image:url(/assets/images/lfg.png);background-size:cover}"]}),s})(),u=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-secondary-content"]],decls:35,vars:0,consts:[[1,"wrapper"],[1,"content","d-flex","flex-grow"],[1,"card"],["src","assets/images/mba_vs_mansour_10-16-2023.png","height","200",1,"card-img-top"],[1,"card-body"],[1,"card-title","fw-bold"],[1,"card-text"],[1,"d-flex","flex-grow"],["src","assets/images/dianes_vs_instant_replay_10-16-2023.png","height","200",1,"card-img-top"],[1,"d-flex","align-items-center","gap-3"],["src","assets/images/blacksheep_vs_orcutt2.png","width","35%",1,"rounded"],[1,"fw-bold"],["src","assets/images/who_is_e_net.png","width","35%",1,"rounded","border"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div")(3,"div",2),e._UZ(4,"img",3),e.TgZ(5,"div",4)(6,"div",5),e._uU(7,"Outlaws Outclass Mansours"),e.qZA(),e.TgZ(8,"p",6),e._uU(9,"Mansours Jewelers taught a lesson by MBAs in 2-5 defeat"),e.qZA()()()()(),e.TgZ(10,"div",1)(11,"div",7)(12,"div",2),e._UZ(13,"img",8),e.TgZ(14,"div",4)(15,"div",5),e._uU(16,"Dianes Dipsticks Deliver"),e.qZA(),e.TgZ(17,"p",6),e._uU(18,"E. Net scores again as Dianes Dipsticks defeat Instant Replay, win 5-2"),e.qZA()()()()()(),e.TgZ(19,"div")(20,"div",9),e._UZ(21,"img",10),e.TgZ(22,"div")(23,"div",11),e._uU(24,"Black Sheep Baaaaash"),e.qZA(),e.TgZ(25,"p"),e._uU(26,"Black Sheep bash Orcutts Pineapples in 10-2 victory"),e.qZA()()()(),e.TgZ(27,"div")(28,"div",9),e._UZ(29,"img",12),e.TgZ(30,"div")(31,"div",11),e._uU(32,"E. Net Scores Again?"),e.qZA(),e.TgZ(33,"p"),e._uU(34,'Mystery Player known only as "E. Net" just keeps scoring'),e.qZA()()()())},styles:["[_nghost-%COMP%]{display:flex;flex-direction:column;gap:20px}a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:hover{text-decoration:underline;color:inherit}.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:8px}.content[_ngcontent-%COMP%]{width:100%}@media (min-width: 992px){.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:12px}.content[_ngcontent-%COMP%]{width:50%}}"]}),s})();var g=i(1659);function f(n,s){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._UZ(2,"img",6),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.qZA(),e.TgZ(9,"td"),e._uU(10),e.qZA(),e.TgZ(11,"td"),e._uU(12),e.qZA()()),2&n){const o=s.$implicit;e.xp6(2),e.Q6J("src","assets/teams/"+o.logo,e.LSH),e.xp6(2),e.hij(" ",2*o.wins+o.ties," "),e.xp6(2),e.hij(" ",o.wins+o.losses+o.ties," "),e.xp6(2),e.hij(" ",o.wins," "),e.xp6(2),e.hij(" ",o.losses," "),e.xp6(2),e.hij(" ",o.ties," ")}}const h=function(){return["/standings"]};let Z=(()=>{var n;class s{constructor(t){this.http=t,this.teams=[]}ngOnInit(){this.http.get("assets/teams/standings.json").subscribe(t=>{this.teams=t})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(p.eN))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-standings-panel"]],decls:22,vars:5,consts:[[1,"card","shadow"],[1,"card-body"],[3,"routerLink"],[1,"table","table-sm"],["scope","col"],[4,"ngFor","ngForOf"],["height","25px",3,"src"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"a",2)(3,"h3"),e._uU(4,"Standings"),e.qZA()(),e.TgZ(5,"table",3)(6,"thead")(7,"tr"),e._UZ(8,"th",4),e.TgZ(9,"th",4),e._uU(10,"PTS"),e.qZA(),e.TgZ(11,"th",4),e._uU(12,"GP"),e.qZA(),e.TgZ(13,"th",4),e._uU(14,"W"),e.qZA(),e.TgZ(15,"th",4),e._uU(16,"L"),e.qZA(),e.TgZ(17,"th",4),e._uU(18,"T"),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,f,13,6,"tr",5),e.ALo(21,"sortStandings"),e.qZA()()()()),2&t&&(e.xp6(2),e.Q6J("routerLink",e.DdM(4,h)),e.xp6(18),e.Q6J("ngForOf",e.lcZ(21,2,a.teams)))},dependencies:[c.sg,r.rH,g.X],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),s})();const _=function(){return["/schedule"]};let v=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-calendar-panel"]],decls:27,vars:2,consts:[[1,"card","shadow"],[1,"card-body","d-flex","flex-column","gap-1"],[3,"routerLink"],[1,"fw-bold"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h4")(3,"a",2),e._uU(4," Schedule "),e.qZA()(),e.TgZ(5,"div",3),e._uU(6," October 1, 2023 (Sunday) "),e.qZA(),e.TgZ(7,"div"),e._uU(8," In-person registration (6-8pm) and evaluation skates (6:45pm and 8:15pm). "),e.qZA(),e.TgZ(9,"div",3),e._uU(10," October 8, 2023 (Sunday) "),e.qZA(),e.TgZ(11,"div")(12,"div"),e._uU(13," Season begins "),e.qZA(),e.TgZ(14,"div"),e._uU(15," Time slots are: "),e.qZA(),e.TgZ(16,"ul")(17,"li"),e._uU(18," Sunday 6:15, 7:45 , 9:15 "),e.qZA(),e.TgZ(19,"li"),e._uU(20," Monday 8:30 , 10:00 "),e.qZA(),e.TgZ(21,"li"),e._uU(22," Wednesday 9:15 "),e.qZA()()(),e.TgZ(23,"div",3),e._uU(24," March 10, 2023 (Sunday) "),e.qZA(),e.TgZ(25,"div"),e._uU(26," Championship games "),e.qZA()()()),2&t&&(e.xp6(3),e.Q6J("routerLink",e.DdM(1,_)))},dependencies:[r.rH],styles:["a[_ngcontent-%COMP%]{color:inherit;text-decoration:none}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),s})(),C=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-documents-panel"]],decls:17,vars:0,consts:[[1,"card","shadow"],[1,"card-body"],[1,"d-flex","flex-column","gap-1"],["href","assets/documents/AB Discipline Document 2023.docx"],[1,"bi","bi-file-earmark-word"],["href","assets/documents/AB Rules Document 2023 Version 1.docx"],["href","assets/documents/Adult A-B Appication Form.docx"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3,"Documents"),e.qZA(),e.TgZ(4,"div",2)(5,"div")(6,"a",3),e._UZ(7,"i",4),e._uU(8," Discipline Policy "),e.qZA()(),e.TgZ(9,"div")(10,"a",5),e._UZ(11,"i",4),e._uU(12," AB Rules Document "),e.qZA()(),e.TgZ(13,"div")(14,"a",6),e._UZ(15,"i",4),e._uU(16," Application Form "),e.qZA()()()()())}}),s})(),x=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-right-side"]],decls:4,vars:0,consts:[[1,"d-flex","flex-column","gap-3"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-calendar-panel")(2,"app-standings-panel")(3,"app-documents-panel"),e.qZA())},dependencies:[Z,v,C]}),s})();function y(n,s){if(1&n&&(e.ynx(0),e.TgZ(1,"div",4)(2,"a",5),e._UZ(3,"img",6),e.qZA()(),e.BQk()),2&n){const o=s.$implicit,t=s.index;e.xp6(1),e.ekj("border-top",t>0),e.xp6(1),e.Q6J("href",o.website,e.LSH),e.xp6(1),e.Q6J("src","assets/sponsors/"+o.image,e.LSH)("alt",o.name)("title",o.name)}}const T=function(){return["/sponsors"]};let w=(()=>{var n;class s{constructor(t){this.http=t,this.sponsors=[]}ngOnInit(){this.http.get("assets/sponsors/sponsors.json").subscribe(t=>{this.sponsors=t})}}return(n=s).\u0275fac=function(t){return new(t||n)(e.Y36(p.eN))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-sponsors-panel"]],decls:6,vars:3,consts:[[1,"card","shadow"],[1,"card-body"],[3,"routerLink"],[4,"ngFor","ngForOf"],[1,"p-2","d-flex","flex-column","gap-3","justify-content-center","align-items-center"],["target","_blank",3,"href"],["width","100%",3,"src","alt","title"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3")(3,"a",2),e._uU(4," Sponsors "),e.qZA()(),e.YNc(5,y,4,6,"ng-container",3),e.qZA()()),2&t&&(e.xp6(3),e.Q6J("routerLink",e.DdM(2,T)),e.xp6(2),e.Q6J("ngForOf",a.sponsors))},dependencies:[c.sg,r.rH],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:inherit}a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),s})(),A=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-community-panel"]],decls:7,vars:0,consts:[[1,"card","shadow"],[1,"card-body"],[1,"p-2","d-flex","justify-content-center","align-items-center"],["href","https://crcithaca.com/","target","_blank"],["src","assets/images/lansing_rink_logo.png","width","100%","alt","Community Recreation Center","title","Community Recreation Center"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1)(2,"h3"),e._uU(3,"Community"),e.qZA(),e.TgZ(4,"div",2)(5,"a",3),e._UZ(6,"img",4),e.qZA()()()())}}),s})(),U=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-left-side"]],decls:3,vars:0,consts:[[1,"d-flex","flex-column","gap-3"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0),e._UZ(1,"app-sponsors-panel")(2,"app-community-panel"),e.qZA())},dependencies:[w,A]}),s})();const P=[{path:"",component:(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-home"]],decls:10,vars:0,consts:[[1,"wrapper"],[1,"left-section"],[1,"center-section","flex-grow-1"],[1,"card","shadow"],[1,"card-body","d-flex","flex-column","gap-3"],[1,"right-section"]],template:function(t,a){1&t&&(e.TgZ(0,"div",0)(1,"div",1),e._UZ(2,"app-left-side"),e.qZA(),e.TgZ(3,"div",2)(4,"div",3)(5,"div",4),e._UZ(6,"app-featured-content")(7,"app-secondary-content"),e.qZA()()(),e.TgZ(8,"div",5),e._UZ(9,"app-right-side"),e.qZA()())},dependencies:[m,u,x,U],styles:[".wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:column;gap:12px}.left-section[_ngcontent-%COMP%]{order:3;width:100%}.right-section[_ngcontent-%COMP%]{order:2;width:100%}.center-section[_ngcontent-%COMP%]{order:1}@media (min-width: 992px){.wrapper[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:12px}.left-section[_ngcontent-%COMP%]{order:1;width:25%}.right-section[_ngcontent-%COMP%]{order:3;width:33%}}"]}),s})()}];let M=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[r.Bz.forChild(P),r.Bz]}),s})();var S=i(8081);let O=(()=>{var n;class s{}return(n=s).\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[c.ez,M,p.JF,S.I]}),s})()}}]);