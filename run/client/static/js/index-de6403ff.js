import{H as n,g as o,_ as s}from"./logo-430a89d0.js";import{d as a,r as e,X as l,Y as r,Z as t,a as i,_ as d,o as u}from"./vendor-41d77483.js";import{_ as c}from"./index-da62318a.js";const m=a({name:"ViewsHome",components:{HelloWorld:n},setup(n){return s=this,a=null,e=function*(){const n=yield o();return{title:n.bodyMessage.name,info:"3",infos:{},data:n}},new Promise(((n,o)=>{var l=n=>{try{t(e.next(n))}catch(s){o(s)}},r=n=>{try{t(e.throw(n))}catch(s){o(s)}},t=o=>o.done?n(o.value):Promise.resolve(o.value).then(l,r);t((e=e.apply(s,a)).next())}));var s,a,e}}),v=r("img",{src:s},null,-1);var f=c(m,[["render",function(n,o,s,a,c,m){const f=e("HelloWorld"),g=e("SvgIcon");return u(),l(d,null,[r("div",null,t(n.title),1),r("div",null,t(n.info),1),r("div",null,t(n.infos),1),v,i(f,{msg:n.info},null,8,["msg"]),r("div",null,[i(g,{"icon-class":"a-bug"}),i(g,{"icon-class":"projectManage"})])],64)}]]);export{f as default};
