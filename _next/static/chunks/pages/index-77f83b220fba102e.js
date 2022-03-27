(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8581:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4369)}])},4369:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return o}});var n=t(5893),l=t(7536),s=t(860);t(3372);function c(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function d(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{},n=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),n.forEach((function(r){c(e,r,t[r])}))}return e}var a=function(e){return(0,n.jsxs)("p",{children:["Min is ",e.data]})},i=function(e){return(0,n.jsxs)("p",{children:["Max is ",e.data]})};function o(){var e,r,t,c,o,x,u,m=(0,l.cI)({defaultValues:{psc:0,arr:0,fclk:0,time:0,mode:16},mode:"onChange"}),p=m.register,b=m.watch,h=m.reset,f=m.formState.errors,j=b("psc"),N=b("arr"),v=b("time"),w=b("fclk"),y=b("mode","16"),k=(o=Number(v),x=Number(w),u=Number(N),o*x/(u+1)-1),g=function(e,r,t){return e*r/(t+1)-1}(Number(v),Number(w),Number(j)),_=function(e,r,t){return(e+1)*(r+1)/t}(Number(j),Number(N),Number(w)),O=function(e,r,t){return(e+1)*(r+1)/t}(Number(j),Number(N),Number(v)),P="32"===y?4294967296:65536;return console.log(P),(0,n.jsxs)("div",{className:"min-h-screen w-full bg-black text-white flex flex-col items-center pt-10 font-bold",children:[(0,n.jsxs)("table",{className:"border-2 p-3",children:[(0,n.jsxs)("tr",{className:"border-2",children:[(0,n.jsx)("th",{className:"w-[120px] text-center border-r-2",children:"PSC"}),(0,n.jsx)("th",{className:"w-[120px] text-center border-r-2",children:"ARR"}),(0,n.jsx)("th",{className:"w-[120px] text-center border-r-2",children:"TIME"}),(0,n.jsx)("th",{className:"w-[120px] text-center",children:"Fclk"})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{className:"w-[120px] text-center border-r-2",children:k}),(0,n.jsx)("td",{className:"w-[120px] text-center border-r-2",children:g}),(0,n.jsx)("td",{className:"w-[120px] text-center border-r-2",children:_}),(0,n.jsxs)("td",{className:"w-[120px] text-center",children:[" ",O]})]})]}),(0,n.jsxs)("div",{className:"flex flex-col space-y-5 mt-5",children:[(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",d({type:"number"},p("psc",{min:0,max:65536}),{className:"w-[300px] h-[50px] rounded-md mr-4 text-black font-bold ".concat((null===f||void 0===f?void 0:f.psc)?"px-7":"px-3")})),(0,n.jsx)("label",{htmlFor:"",children:"PSC"}),(null===f||void 0===f?void 0:f.psc)&&(0,n.jsx)(s.ZP,{content:(0,n.jsxs)(n.Fragment,{children:["min"===(null===(e=f.psc)||void 0===e?void 0:e.type)&&(0,n.jsx)(a,{data:0}),"max"===(null===f||void 0===f||null===(r=f.psc)||void 0===r?void 0:r.type)&&(0,n.jsx)(i,{data:65536})]}),children:(0,n.jsx)("div",{className:"absolute text-red-500 top-1/2 transform -translate-y-1/2 left-1 rounded-full border-2 w-[20px] h-[20px] grid place-items-center border-red-500 text-sm",children:"i"})})]}),(0,n.jsxs)("div",{className:"relative",children:[(0,n.jsx)("input",d({type:"number"},p("arr",{min:0,max:P}),{className:"w-[300px] h-[50px] rounded-md mr-4 text-black font-bold ".concat((null===f||void 0===f?void 0:f.arr)?"px-7":"px-3")})),(0,n.jsxs)("label",{htmlFor:"",children:["ARR"," ",(0,n.jsxs)("select",d({className:"bg-black font-bold"},p("mode"),{children:[(0,n.jsx)("option",{value:"16",children:"16 Bit mode"}),(0,n.jsx)("option",{value:"32",children:"32 Bit mode"})]}))]}),(null===f||void 0===f?void 0:f.arr)&&(0,n.jsx)(s.ZP,{content:(0,n.jsxs)(n.Fragment,{children:["min"===(null===(t=f.arr)||void 0===t?void 0:t.type)&&(0,n.jsx)(a,{data:0}),"max"===(null===f||void 0===f||null===(c=f.arr)||void 0===c?void 0:c.type)&&(0,n.jsx)(i,{data:P})]}),children:(0,n.jsx)("div",{className:"absolute text-red-500 top-1/2 transform -translate-y-1/2 left-1 rounded-full border-2 w-[20px] h-[20px] grid place-items-center border-red-500 text-sm",children:"i"})})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",d({type:"number"},p("time"),{className:"w-[300px] h-[50px] rounded-md mr-4 text-black px-3 font-bold",min:0})),(0,n.jsx)("label",{htmlFor:"",children:"Time"})]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("input",d({type:"number"},p("fclk"),{className:"w-[300px] h-[50px] rounded-md mr-4 text-black px-3 font-bold",min:0})),(0,n.jsx)("label",{htmlFor:"",children:"FCLK"})]})]}),(0,n.jsx)("button",{onClick:function(){return h()},className:"bg-white text-black px-10 mt-5 py-2 rounded-md ",children:"Clear"})]})}}},function(e){e.O(0,[965,774,888,179],(function(){return r=8581,e(e.s=r);var r}));var r=e.O();_N_E=r}]);