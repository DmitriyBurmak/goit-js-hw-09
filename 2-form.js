import"./assets/styles-DV3z7nwM.js";const e={email:"",message:""},s=document.querySelector(".feedback-form"),r=s.querySelector('input[name="email"]'),m=s.querySelector('textarea[name="message"]');function l(){localStorage.setItem("feedback-form-state",JSON.stringify(e))}s.addEventListener("input",a=>{const{name:t,value:o}=a.target;e[t]=o.trim(),l()});document.addEventListener("DOMContentLoaded",()=>{const a=localStorage.getItem("feedback-form-state");if(a){const t=JSON.parse(a);r.value=t.email,m.value=t.message,e.email=t.email,e.message=t.message}});s.addEventListener("submit",a=>{if(a.preventDefault(),e.email===""||e.message===""){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),s.reset(),Object.keys(e).forEach(t=>{e[t]=""})});
//# sourceMappingURL=2-form.js.map
