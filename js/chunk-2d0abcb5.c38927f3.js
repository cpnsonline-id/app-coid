(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0abcb5"],{1792:function(e,s,t){"use strict";t.r(s);var o=t("7a23");const a={class:"flex flex-col items-center mb-4"},l=Object(o["h"])("label",{class:"w-full font-semibold mb-2 text-base"}," Password Sebelumnya ",-1),d={class:"relative w-full"},c=["type"],n={class:"absolute top-0 right-0 rounded-r w-10 h-full flex items-center justify-center text-gray-600 cursor-pointer"},r={class:"flex flex-col items-center"},b=Object(o["h"])("label",{class:"w-full font-semibold mb-2 text-base"}," Password Baru ",-1),w={class:"relative w-full"},i=["type"],u={class:"absolute top-0 right-0 rounded-r w-10 h-full flex items-center justify-center text-gray-600 cursor-pointer"},h={class:"flex flex-row justify-end"};function p(e,s,t,p,j,P){const O=Object(o["G"])("EyeIcon"),f=Object(o["G"])("EyeOffIcon"),m=Object(o["G"])("ModalTemplate");return Object(o["y"])(),Object(o["e"])(m,{"modal-id":"modal-ubah-password",title:"Ubah Password"},{content:Object(o["Q"])(()=>[Object(o["h"])("div",a,[l,Object(o["h"])("div",d,[Object(o["R"])(Object(o["h"])("input",{type:e.visible.oldPassword?"text":"password",class:"input pr-12 w-full border col-span-10",placeholder:"Password",id:"oldPassword","onUpdate:modelValue":s[0]||(s[0]=s=>e.form.oldPassword=s)},null,8,c),[[o["M"],e.form.oldPassword]]),Object(o["h"])("div",n,[e.visible.oldPassword?Object(o["f"])("",!0):(Object(o["y"])(),Object(o["e"])(O,{key:0,onClick:s[1]||(s[1]=s=>e.visible.oldPassword=!0)})),e.visible.oldPassword?(Object(o["y"])(),Object(o["e"])(f,{key:1,onClick:s[2]||(s[2]=s=>e.visible.oldPassword=!1)})):Object(o["f"])("",!0)])])]),Object(o["h"])("div",r,[b,Object(o["h"])("div",w,[Object(o["R"])(Object(o["h"])("input",{type:e.visible.newPassword?"text":"password",class:"input pr-12 w-full border col-span-10",placeholder:"Password",id:"newPassword","onUpdate:modelValue":s[3]||(s[3]=s=>e.form.newPassword=s)},null,8,i),[[o["M"],e.form.newPassword]]),Object(o["h"])("div",u,[e.visible.newPassword?Object(o["f"])("",!0):(Object(o["y"])(),Object(o["e"])(O,{key:0,onClick:s[4]||(s[4]=s=>e.visible.newPassword=!0)})),e.visible.newPassword?(Object(o["y"])(),Object(o["e"])(f,{key:1,onClick:s[5]||(s[5]=s=>e.visible.newPassword=!1)})):Object(o["f"])("",!0)])])])]),buttons:Object(o["Q"])(()=>[Object(o["h"])("div",h,[Object(o["h"])("button",{type:"button",class:"button w-20 bg-theme-6 text-white mr-2",onClick:s[6]||(s[6]=(...s)=>e.onCancelClick&&e.onCancelClick(...s))}," Batal "),Object(o["h"])("button",{type:"button",class:"button w-auto bg-theme-1 text-white",onClick:s[7]||(s[7]=(...s)=>e.requestUbahPassword&&e.requestUbahPassword(...s))}," Ubah Password ")])]),_:1})}var j=t("33d8");const P=Object(o["l"])(()=>t.e("chunk-2d0b61df").then(t.bind(null,"1c90"))),O=async()=>await t.e("chunk-21605222").then(t.bind(null,"070a"));var f=Object(o["m"])({name:"ModalUpdateProfile",components:{ModalTemplate:P},setup(){const e=Object(o["C"])({oldPassword:"",newPassword:""}),s=()=>{e.oldPassword="",e.newPassword=""};Object(o["w"])(()=>{s()});const t=async()=>{const{resetPassword:t}=await O();j["b"].gLoading.show();try{const o=new URLSearchParams;o.append("oldPassword",e.oldPassword),o.append("newPassword",e.newPassword),await t(o),await j["b"].gLoading.hide(),s(),j["b"].handleSdsV2("Ubah Password Berhasil","toast"),j["b"].hideModal("#modal-ubah-password")}catch(o){const e=o.response;console.log("err response ",e),j["b"].gLoading.hide(),j["b"].handleEds(o)}},a=Object(o["C"])({oldPassword:!1,newPassword:!1}),l=()=>{s(),a.oldPassword=!1,a.newPassword=!1,j["b"].hideModal("#modal-ubah-password")};return{gpf:j["b"],form:e,requestUbahPassword:t,visible:a,onCancelClick:l}}}),m=t("6b0d"),y=t.n(m);const v=y()(f,[["render",p]]);s["default"]=v}}]);
//# sourceMappingURL=chunk-2d0abcb5.c38927f3.js.map