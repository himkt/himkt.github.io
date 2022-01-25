(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[680],{6145:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/interest",function(){return t(8339)}])},8339:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return v}});var r=t(5893),a=t(7294),s=t(9583),i=function(e){var n=e.setSearchKeyword;return(0,r.jsx)("nav",{className:"flex p-8 bg-white/40",style:{position:"fixed",width:"100%",top:0},children:(0,r.jsx)("div",{className:"sm:container mx-auto flex justify-center",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("div",{className:"absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none",children:(0,r.jsx)("span",{className:"text-gray-500 sm:text-sm",children:(0,r.jsx)(s.U41,{})})}),(0,r.jsx)("input",{type:"text",name:"keyword",className:" rounded-md p-2 pl-10 ring-4 ring-transparent outline-none text-gray-800 bg-gray-200 focus:outline-offset-0 focus:bg-gray focus:border-black focus:ring-indigo-200 focus:ring-opacity-50 transition ",placeholder:"ACL",onChange:function(e){n(e.currentTarget.value)}})]})})})},o=t(1664),l=t(5131),c=t(6518),d=function(e){var n="";return"Conference paper"==e.paperType?(n+="@inproceedings{".concat(function(e){var n;return null===(n=e.shift())||void 0===n?void 0:n.split(" ").shift()}(e.authors)+e.year,",\n"),n+="  booktitle = {Proceedings of ".concat(e.source,"},\n")):(n+="@article\n",n+="  journal = {".concat(e.source,"},\n")),n+="  title  = {".concat(e.title,"},\n"),n+="  author = {".concat(e.authors.join(" and "),"},\n"),n+="  year   = {".concat(e.year,"},\n"),n+="}"},u=function(e){var n=e.paper,t=e.setIsOpen;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{children:(0,r.jsx)("pre",{className:" my-4 bg-slate-100/20 backdrop-blur-sm shadow-md rounded-md px-6 pb-4 pt-6 text-xs whitespace-pre-wrap ",children:d(n)})}),(0,r.jsxs)("div",{className:"space-x-2",children:[(0,r.jsx)("button",{className:"outline-none rounded-md bg-white hover:bg-blue-500 transition duration-700",children:(0,r.jsx)("p",{className:"text-xs font-bold mx-2 my-1",children:"Copy"})}),(0,r.jsx)("button",{className:"outline-none rounded-md bg-white hover:bg-blue-500 transition duration-700",onClick:function(){return t(!1)},children:(0,r.jsx)("p",{className:"text-xs font-bold mx-2 my-1",children:"Close"})})]})]})},x=function(e){var n=e.isOpen,t=e.setIsOpen,s=e.paper;return(0,r.jsx)(l.u,{appear:!0,show:n,as:a.Fragment,children:(0,r.jsx)(c.V,{as:"div",className:"fixed inset-0 z-10 overflow-y-auto",onClose:function(){return t(!1)},children:(0,r.jsxs)("div",{className:"min-h-screen px-4 text-center",children:[(0,r.jsx)(l.u.Child,{as:a.Fragment,enter:"ease-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-out duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)(c.V.Overlay,{className:"fixed inset-0 backdrop-blur-sm bg-sky-400/30"})}),(0,r.jsx)("span",{className:"inline-block h-screen align-middle","aria-hidden":"true",children:"\u200b"}),(0,r.jsx)(l.u.Child,{as:a.Fragment,enter:"ease-out duration-500",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-500",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsxs)("div",{className:" inline-block w-full max-w-[80%] p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-violet-100/60 shadow-xl rounded-2xl backdrop-blur-sm ",children:[(0,r.jsx)(c.V.Title,{className:"text-lg font-bold leading-6 text-gray-900",children:s.title}),(0,r.jsx)(u,{paper:s,setIsOpen:t})]})})]})})})},p=function(e){var n=(0,a.useState)(!1),t=n[0],s=n[1];return(0,r.jsxs)("div",{onClick:function(){return s(!0)},className:"transition duration-300 md:hover:bg-indigo-300 rounded-md max-w-3xl mx-auto",children:[(0,r.jsxs)("div",{className:"text-lg font-mono mx-4 py-2",children:[(0,r.jsx)(o.default,{href:e.paper.paperLink,children:(0,r.jsx)("a",{className:"text-indigo-600 hover:text-indigo-900",children:e.paper.title})}),(0,r.jsx)("div",{className:"text-sm text-gray-500",children:e.paper.authors.join(" ")}),(0,r.jsx)("span",{className:"flex",children:(0,r.jsx)("div",{className:"my-1 bg-red-300 rounded-md",children:(0,r.jsxs)("div",{className:"text-sm font-mono mx-1",children:[e.paper.sourceShort,e.paper.year]})})})]}),(0,r.jsx)(x,{isOpen:t,setIsOpen:s,paper:e.paper})]})},m=function(e){var n=e.papers,t=e.searchKeyword,a=null===n||void 0===n?void 0:n.filter((function(e){return function(e,n){if(""===n)return!0;var t=[e.title,e.authors.join(" "),e.source,e.sourceShort],r=!0,a=!1,s=void 0;try{for(var i,o=t[Symbol.iterator]();!(r=(i=o.next()).done);r=!0){var l=i.value,c=n.toLocaleLowerCase();if(l.toLocaleLowerCase().match(c))return!0}}catch(d){a=!0,s=d}finally{try{r||null==o.return||o.return()}finally{if(a)throw s}}return!1}(e,t)}));return(0,r.jsx)("div",{children:(0,r.jsx)("div",{className:"table-fixed space-y-2",children:null===a||void 0===a?void 0:a.map((function(e,n){return(0,r.jsx)(p,{paper:e},n)}))})})},h=t(821),f=t(9008),v=function(){var e="https://script.google.com/macros/s/".concat("AKfycbx1BW2FiLIOs-NPVDm-w2bBE2e_ci2KiqX0ezMqHKJbV1EtGOVldYzCQm6F6rZER6dj","/exec"),n=(0,a.useState)(""),t=n[0],s=n[1],o=(0,h.ZP)(e,(function(e){return fetch(e).then((function(e){return e.json()}))})),l=o.data,c=!o.error&&!l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.default,{children:(0,r.jsx)("title",{children:"Profile"})}),c&&(0,r.jsx)("div",{className:"w-full h-screen flex items-center justify-center",children:(0,r.jsx)("h1",{className:"font-mono text-3xl animate-pulse",children:"Loading..."})}),!c&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(i,{setSearchKeyword:s}),(0,r.jsx)("div",{className:"sm:container mx-auto px-10 mt-32 mb-10",children:(0,r.jsx)(m,{papers:l,searchKeyword:t})})]})]})}}},function(e){e.O(0,[445,831,794,774,888,179],(function(){return n=6145,e(e.s=n);var n}));var n=e.O();_N_E=n}]);