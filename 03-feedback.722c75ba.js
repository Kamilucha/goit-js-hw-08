function e(e){return e&&e.__esModule?e.default:e}var t,n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o="Expected a function",r=NaN,i="[object Symbol]",u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,l=/^0o[0-7]+$/i,c=parseInt,s="object"==typeof n&&n&&n.Object===Object&&n,d="object"==typeof self&&self&&self.Object===Object&&self,p=s||d||Function("return this")(),v=Object.prototype.toString,m=Math.max,g=Math.min,y=function(){return p.Date.now()};function b(e,t,n){var r,i,u,a,f,l,c=0,s=!1,d=!1,p=!0;if("function"!=typeof e)throw new TypeError(o);function v(t){var n=r,o=i;return r=i=void 0,c=t,a=e.apply(o,n)}function b(e){var n=e-l;return void 0===l||n>=t||n<0||d&&e-c>=u}function S(){var e=y();if(b(e))return j(e);f=setTimeout(S,function(e){var n=t-(e-l);return d?g(n,u-(e-c)):n}(e))}function j(e){return f=void 0,p&&r?v(e):(r=i=void 0,a)}function O(){var e=y(),n=b(e);if(r=arguments,i=this,l=e,n){if(void 0===f)return function(e){return c=e,f=setTimeout(S,t),s?v(e):a}(l);if(d)return f=setTimeout(S,t),v(l)}return void 0===f&&(f=setTimeout(S,t)),a}return t=x(t)||0,E(n)&&(s=!!n.leading,u=(d="maxWait"in n)?m(x(n.maxWait)||0,t):u,p="trailing"in n?!!n.trailing:p),O.cancel=function(){void 0!==f&&clearTimeout(f),c=0,r=l=i=f=void 0},O.flush=function(){return void 0===f?a:j(y())},O}function E(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function x(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&v.call(e)==i}(e))return r;if(E(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=E(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(u,"");var n=f.test(e);return n||l.test(e)?c(e.slice(2),n?2:8):a.test(e)?r:+e}t=function(e,t,n){var r=!0,i=!0;if("function"!=typeof e)throw new TypeError(o);return E(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),b(e,t,{leading:r,maxWait:t,trailing:i})};const S={formEl:document.querySelector(".feedback-form"),textareaEl:document.querySelector("textarea"),inputEl:document.querySelector("input")},j=e(t)((function(){console.log(S.inputEl.value,S.textareaEl.value),localStorage.setItem(O,JSON.stringify({email:S.inputEl.value,message:S.textareaEl.value}))}),500);S.formEl.addEventListener("input",j),S.formEl.addEventListener("submit",(function(e){e.preventDefault(),console.log("ляляля тапаля"),e.currentTarget.reset(),localStorage.removeItem(O)}));const O="feedback-form-state";!function(){const e=localStorage.getItem(O);if(e){const t=JSON.parse(e);S.inputEl.value=t.email,S.textareaEl.value=t.message}console.log(e,JSON.parse(e))}();
//# sourceMappingURL=03-feedback.722c75ba.js.map