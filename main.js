(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[function(e,t,n){"use strict";var r=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(a,o){function i(e){try{c(r.next(e))}catch(e){o(e)}}function s(e){try{c(r.throw(e))}catch(e){o(e)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(i,s)}c((r=r.apply(e,t||[])).next())}))},a=this&&this.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;
case 4:return i.label++,{value:o[1],done:!1};
case 5:i.label++,r=o[1],o=[0];continue;
case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=i.trys,(a=a.length>0&&a[a.length-1])||6!==o[0]&&2!==o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=t.call(e,i)}catch(e){o=[6,e],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}};Object.defineProperty(t,"__esModule",{value:!0});var o,i,s,c,l,u,d,f,v,b,p=n(1),h=n(2);n(3),"serviceWorker"in navigator&&window.addEventListener("load",(function(){return r(void 0,void 0,void 0,(function(){var e,t;return a(this,(function(n)
{switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,navigator.serviceWorker.register("service-worker.js",{scope:"."})];
case 1:return e=n.sent(),console.log("SW registered: ",e),[3,3];
case 2:return t=n.sent(),console.log("SW registration failed: ",t),[3,3];
case 3:return[2]}}))}))}));var m,w,g=1,y=new p.Terminal({scrollback:1e4}),E=new h.FitAddon;y.loadAddon(E);var k=new TextEncoder,I="";function B(e){for(var t=0;t<o.options.length;++t){var n=o.options[t];if("prompt"!==n.value){var r=n;if(r.port===e)return r}}return null}function L(e){var t=document.createElement("option");return t.textContent="Port "+g++,t.port=e,o.appendChild(t),t}function R(){if(!y)throw new Error("no terminal instance found");if(0!==y.rows){y.selectAll();var e=y.getSelection();y.clearSelection();var t=URL.createObjectURL(new Blob([(new TextEncoder).encode(e).buffer],{type:"text/plain"})),n=document.createElement("a");n.download="terminal_content_"+(new Date).getTime()+".txt",n.href=t,n.click()}else console.log("No output yet")}function x(){return r(this,void 0,void 0,(function(){var e;return a(this,(function(t)
{switch(t.label){case 0:if("prompt"!=o.value)return[3,5];t.label=1;
case 1:return t.trys.push([1,3,,4]),[4,navigator.serial.requestPort({})];
case 2:return m=t.sent(),[3,4];
case 3:return t.sent(),[2];
case 4:return(function(e){var t=B(e);return t||L(e)}(m)).selected=!0,[3,6];
case 5:e=o.selectedOptions[0],m=e.port,t.label=6;
case 6:return[2]}}))}))}function C(){return"custom"==s.value?Number.parseInt(c.value):Number.parseInt(s.value)}function N(){y.writeln("<DISCONNECTED>"),o.disabled=!1,i.textContent="Connect",s.disabled=!1,c.disabled=!1,l.disabled=!1,u.disabled=!1,d.disabled=!1,f.disabled=!1,m=void 0}y.onData((function(e){if(v.checked&&y.writeUtf8(k.encode(e)),null!=(null==m?void 0:m.writable)){var t=m.writable.getWriter();b.checked?(I+=e,"\r"===e&&(t.write(k.encode(I)),t.releaseLock(),I="")):t.write(k.encode(e)),t.releaseLock()}else console.warn("unable to find writable port")})),document.addEventListener("DOMContentLoaded",(function(){return r(void 0,void 0,void 0,(function(){var e;return a(this,(function(t){
switch(t.label)
{case 0:return(e=document.getElementById("terminal"))&&(y.open(e),E.fit()),document.getElementById("download").addEventListener("click",R),o=document.getElementById("ports"),(i=document.getElementById("connect")).addEventListener("click",(function(){m?function(){r(this,void 0,void 0,(function(){var e,t;return a(this,(function(n)
{switch(n.label)
{case 0:return e=m,m=void 0,w?[4,w.cancel()]:[3,2];
case 1:n.sent(),n.label=2;
case 2:if(!e)return[3,6];n.label=3;
case 3:return n.trys.push([3,5,,6]),[4,e.close()];
case 4:return n.sent(),[3,6];
case 5:return t=n.sent(),console.error(t),y.writeln("<ERROR: "+t.message+">"),[3,6];
case 6:return N(),[2]}}))}))}():function(){r(this,void 0,void 0,(function(){var e,t,n,r,v,b;return a(this,(function(a)
{switch(a.label){case 0:return[4,x()];
case 1:return a.sent(),m?(e={baudRate:C(),dataBits:Number.parseInt(l.value),parity:u.value,stopBits:Number.parseInt(d.value),flowControl:f.checked?"hardware":"none",baudrate:C(),databits:Number.parseInt(l.value),stopbits:Number.parseInt(d.value),rtscts:f.checked},console.log(e),[4,m.open(e)]):[2];
case 2:a.sent(),o.disabled=!0,i.textContent="Disconnect",s.disabled=!0,c.disabled=!0,l.disabled=!0,u.disabled=!0,d.disabled=!0,f.disabled=!0,y.writeln("<CONNECTED>"),a.label=3;
case 3:if(!m||!m.readable)return[3,11];a.label=4;
case 4:a.trys.push([4,9,,10]),w=m.readable.getReader(),a.label=5;
case 5:return[4,w.read()];
case 6:if(t=a.sent(),n=t.value,r=t.done,n&&y.writeUtf8(((getRectArea(n))+ ' '),r))return[3,8];a.label=7;  //(getRectArea(n))+ ' ')
case 7:return[3,5];
case 8:return w.releaseLock(),w=void 0,[3,10];
case 9:return v=a.sent(),console.error(v),y.writeln("<ERROR: "+v.message+">"),[3,10];
case 10:return[3,3];
case 11:if(!m)return[3,16];a.label=12;
case 12:return a.trys.push([12,14,,15]),[4,m.close()];
case 13:return a.sent(),[3,15];
case 14:return b=a.sent(),console.error(b),y.writeln("<ERROR: "+b.message+">"),[3,15];
case 15:N(),a.label=16;
case 16:return[2]}}))}))}()})),(s=document.getElementById("baudrate")).addEventListener("input",(function(){"custom"==s.value?c.hidden=!1:c.hidden=!0})),c=document.getElementById("custom_baudrate"),l=document.getElementById("databits"),u=document.getElementById("parity"),d=document.getElementById("stopbits"),f=document.getElementById("rtscts"),v=document.getElementById("echo"),b=document.getElementById("enter_flush"),[4,navigator.serial.getPorts()];
case 1:return t.sent().forEach((function(e){return L(e)})),navigator.serial.addEventListener("connect",(function(e){L(e.port||e.target)})),navigator.serial.addEventListener("disconnect",(function(e){var t=B(e.port||e.target);t&&t.remove()})),[2]}}))}))}))}],[[0,1,2]]]);