import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{f as l,i as m}from"./assets/vendor-77e16229.js";const e={startBtn:document.querySelector("[data-start]"),timer:document.querySelector(".timer"),days:document.querySelector("[data-days]"),hours:document.querySelector("[data-hours]"),minutes:document.querySelector("[data-minutes]"),seconds:document.querySelector("[data-seconds]"),input:document.querySelector(".input-timer")},s={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(t){t=t[0],e.startBtn.disabled=!0,t<new Date?(e.startBtn.classList.remove("button-on"),m.show({iconUrl:"../img/javascript.svg",title:"Error",titleColor:"white",message:"Illegal operation",messageColor:"white",messageSize:"16px",backgroundColor:"#ef4040",position:"topRight",theme:"dark"})):(e.startBtn.disabled=!1,e.startBtn.classList.add("button-on"))}};console.log(s.defaultDate);l("#datetime-picker",s);let a;e.startBtn.disabled=!0;e.startBtn.addEventListener("click",()=>{e.input.disabled=!0;const t=new Date(e.input.value);e.startBtn.classList.remove("button-on"),e.startBtn.disabled=!0,a=setInterval(()=>{const o=Date.now(),n=t-o,r=p(n);f(r)},1e3),setTimeout(()=>{clearInterval(a),e.input.disabled=!1},t-Date.now())});function p(t){const i=Math.floor(t/864e5),u=Math.floor(t%864e5/36e5),d=Math.floor(t%864e5%36e5/6e4),c=Math.floor(t%864e5%36e5%6e4/1e3);return{days:i,hours:u,minutes:d,seconds:c}}function f({days:t,hours:o,minutes:n,seconds:r}){return t=t.toString().padStart(2,0),o=o.toString().padStart(2,0),n=n.toString().padStart(2,0),r=r.toString().padStart(2,0),`${e.days.textContent=t} 
  ${e.hours.textContent=o} 
  ${e.minutes.textContent=n} 
  ${e.seconds.textContent=r}`}
//# sourceMappingURL=commonHelpers.js.map
