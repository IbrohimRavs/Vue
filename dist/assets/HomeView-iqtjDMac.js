import{a,_ as f}from"./HeaderComp-7JV-UOsw.js";import{_ as g}from"./HomeComp-5Ssi161z.js";import{o as _,c,a as d,r as m,b as s,F as p,d as h,u,e,w as $,t as i}from"./index-kKekfedS.js";import{g as v,a as x}from"./Service-Eyt3HNKY.js";import{_ as w}from"./MarkComp-krtuK0Wt.js";import{_ as k}from"./FooterComp-3XIiEiDa.js";const C={class:"hero"},b=d('<div class="container"><div class="hero__wrapper"><div class="hero__title-wr"><h2 class="hero__title">Новые объявления</h2><h2 class="hero__text">Лучщие предложения</h2><span class="hero__span-border"></span></div></div></div>',1),S=[b],A={__name:"HeroComp",setup(o){return(r,l)=>(_(),c("section",C,S))}},V={class:"card"},y={class:"container"},B={class:"card__wrapper"},N={class:"card__list"},F=["src"],H={class:"card__item-wr-text"},I={class:"card__item-title"},D=s("p",{class:"card__item-time"},"Вчера 22:55",-1),E={class:"card__item-text"},L=s("span",{class:"card__span-border"},null,-1),j={__name:"CardComp",setup(o){return a.getAll.splice(0,4),v(),(r,l)=>{const n=m("router-link");return _(),c("section",V,[s("div",y,[s("div",B,[s("ul",N,[(_(!0),c(p,null,h(u(a).getAll,t=>(_(),c("li",{class:"card__item",key:t.id},[e(n,{to:{name:"cardId",params:{id:t.id}}},{default:$(()=>[s("img",{src:t.image,alt:"",class:"card__item-img"},null,8,F),s("div",H,[s("p",I,i(t.title),1),D,s("p",E,i(t.price+"$"),1)])]),_:2},1032,["to"])]))),128))]),L])])])}}},q={class:"splice"},z={class:"container"},G={class:"splice__wrapper"},J=d('<div class="splice__text-wr"><h2 class="splice__title">Просмотренные</h2><h2 class="splice__text">Выбор редакции</h2><h2 class="splice__text">Сниженные цены</h2></div><span class="splice__span-border"></span>',2),K={class:"splice__list"},M=["src"],O={class:"splice__item-wr-text"},P={class:"splice__item-title"},Q=s("p",{class:"splice__item-time"},"Вчера 22:55",-1),R={class:"splice__item-text"},T=s("span",{class:"span__border"},null,-1),U={__name:"SpliceComp",setup(o){return a.getAll.splice(0,16),x(),(r,l)=>{const n=m("router-link");return _(),c("section",q,[s("div",z,[s("div",G,[J,s("ul",K,[(_(!0),c(p,null,h(u(a).getSplice,t=>(_(),c("li",{key:t.id,class:"splice__item"},[e(n,{to:{name:"cardId",params:{id:t.id}}},{default:$(()=>[s("img",{src:t.image,alt:"",class:"splice__item-img"},null,8,M),s("div",O,[s("p",P,i(t.title),1),Q,s("p",R,i(t.price+"$"),1)])]),_:2},1032,["to"])]))),128))]),T])])])}}},es={__name:"HomeView",setup(o){return(r,l)=>(_(),c(p,null,[e(f),s("main",null,[e(g),e(A),e(j),e(U),e(w)]),e(k)],64))}};export{es as default};
