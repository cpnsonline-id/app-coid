(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-76a9783c"],{"1bd8":function(e,t,a){"use strict";(function(e){var l=a("7a23"),o=a("33d8"),n=a("7198");const s=Object(l["l"])(()=>a.e("chunk-2d0b61df").then(a.bind(null,"1c90"))),c=async()=>await a.e("chunk-21605222").then(a.bind(null,"070a"));t["a"]=Object(l["m"])({name:"ModalUpdateProfile",components:{ModalTemplate:s},setup(t,{emit:a}){const s=Object(l["C"])({name:"",phone:"",email:"",photo:"",nameBanner:"Choose File",oversizeBanner:!1,tempBanner:""}),r=()=>{s.nameBanner="Choose File",s.photo="",e("#showImage").attr("src","")},i=()=>{const e=n["a"],t=s;t.name=e.name,t.phone=e.phone,t.email=e.email,t.photo=e.photo,t.nameBanner="Choose File",t.oversizeBanner=!1,t.tempBanner=""};Object(l["w"])(()=>{i()});const m=async()=>{const{updateProfile:e}=await c();o["b"].gLoading.show();try{const t=s,l=new FormData;l.append("name",t.name),l.append("phone",t.phone),l.append("email",t.email),l.append("photo",t.photo),await e(l),o["b"].handleSdsV2("Update Profile Berhasil","toast"),o["b"].hideModal("#modal-update-profile"),a("get-data-profile"),i(),o["b"].gLoading.hide()}catch(t){const e=t.response;console.log("err response ",e),o["b"].gLoading.hide(),o["b"].handleEds(t)}};return{gpf:o["b"],form:s,hitUpdateProfile:m,removeBanner:r}},methods:{chooseBanner(){const e="fileBannerDM",t=document.getElementById(e);t.click()},handleFile(e){const t=e.target,a=t.files,l=t.files[0].size,o=this.form;if(l>1e6)o.oversizeBanner=!0,this.removeBanner();else{const e=t.files[0].name;o.nameBanner=e,o.photo=a[0],o.oversizeBanner=!1,this.renderImage(t.files[0])}},renderImage(t){const a=new FileReader;a.onload=function(t){e("#showImage").attr("src",t.target.result)},a.readAsDataURL(t)}}})}).call(this,a("e409"))},"4dce":function(e,t,a){"use strict";a.r(t);var l=a("7a23");const o={class:"flex flex-col sm:flex-row items-center mt-3"},n=Object(l["h"])("label",{class:"w-full sm:w-20 sm:text-right sm:mr-5"},"Nama",-1),s={class:"flex flex-col sm:flex-row items-center mt-3"},c=Object(l["h"])("label",{class:"w-full sm:w-20 sm:text-right sm:mr-5"},"Phone",-1),r={class:"flex flex-col sm:flex-row items-center mt-3"},i=Object(l["h"])("label",{class:"w-full sm:w-20 sm:text-right sm:mr-5"},"Email",-1),m={class:"flex flex-col sm:flex-row items-center mt-3"},h=Object(l["h"])("label",{class:"w-full sm:w-20 sm:text-right sm:mr-5"},"Photo",-1),d={class:"flex flex-col w-10/12"},b={class:"flex items-center mb-2"},p={class:"text-sm ml-2 truncate"},f=Object(l["h"])("span",{class:"text-sm"},"Maks Ukuran File Photo = 1MB.",-1),u={key:0,class:"text-sm text-red-700"},w={class:"flex flex-col sm:flex-row items-center mt-3"},O=Object(l["h"])("label",{class:"w-full sm:w-20 sm:text-right sm:mr-5"}," Preview Image ",-1),j={class:"show-image w-80"},x=["src"],g={class:"flex flex-row justify-end"};function B(e,t,a,B,v,y){const k=Object(l["G"])("ModalTemplate");return Object(l["y"])(),Object(l["e"])(k,{"modal-id":"modal-update-profile",title:"Update Profile"},{content:Object(l["Q"])(()=>[Object(l["h"])("div",o,[n,Object(l["R"])(Object(l["h"])("input",{type:"email",class:"input w-full border flex-1",placeholder:"Nama","onUpdate:modelValue":t[0]||(t[0]=t=>e.form.name=t)},null,512),[[l["O"],e.form.name]])]),Object(l["h"])("div",s,[c,Object(l["R"])(Object(l["h"])("input",{type:"email",class:"input w-full border flex-1",placeholder:"Phone","onUpdate:modelValue":t[1]||(t[1]=t=>e.form.phone=t)},null,512),[[l["O"],e.form.phone]])]),Object(l["h"])("div",r,[i,Object(l["R"])(Object(l["h"])("input",{type:"email",class:"input w-full border flex-1",placeholder:"Email","onUpdate:modelValue":t[2]||(t[2]=t=>e.form.email=t)},null,512),[[l["O"],e.form.email]])]),Object(l["h"])("div",m,[h,Object(l["h"])("div",d,[Object(l["h"])("div",b,[Object(l["h"])("input",{type:"file",class:"button w-10 border flex-1 hidden",placeholder:"Photo",id:"fileBannerDM",onChange:t[3]||(t[3]=t=>e.handleFile(t))},null,32),""===e.form.photo?(Object(l["y"])(),Object(l["g"])("button",{key:0,onClick:t[4]||(t[4]=(...t)=>e.chooseBanner&&e.chooseBanner(...t)),class:"button bg-theme-1 hover:bg-primary text-white w-28 whitespace-nowrap"}," Choose File ")):(Object(l["y"])(),Object(l["g"])("button",{key:1,onClick:t[5]||(t[5]=(...t)=>e.removeBanner&&e.removeBanner(...t)),class:"button bg-theme-1 hover:bg-primary text-white w-32 whitespace-nowrap"}," Remove Photo ")),Object(l["h"])("span",p,Object(l["K"])(e.form.nameBanner),1)]),f,e.form.oversizeBanner?(Object(l["y"])(),Object(l["g"])("span",u," Ukuran Photo melebihi 1MB, Silahkan Pilih Banner kembali. ")):Object(l["f"])("",!0)])]),Object(l["h"])("div",w,[O,Object(l["h"])("div",j,[Object(l["h"])("img",{id:"showImage",src:e.form.photo,alt:""},null,8,x)])])]),buttons:Object(l["Q"])(()=>[Object(l["h"])("div",g,[Object(l["h"])("button",{type:"button",class:"button w-20 bg-theme-6 text-white mr-2",onClick:t[6]||(t[6]=t=>e.gpf.hideModal("#modal-update-profile"))}," Batal "),Object(l["h"])("button",{type:"button",class:"button w-auto bg-theme-1 text-white",onClick:t[7]||(t[7]=(...t)=>e.hitUpdateProfile&&e.hitUpdateProfile(...t))}," Update Profile ")])]),_:1})}var v=a("1bd8"),y=a("6b0d"),k=a.n(y);const P=k()(v["a"],[["render",B]]);t["default"]=P}}]);
//# sourceMappingURL=chunk-76a9783c.5ab33182.js.map