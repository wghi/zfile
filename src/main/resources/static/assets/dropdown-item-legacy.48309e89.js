!function(){function e(e,n){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),o.push.apply(o,r)}return o}function n(n){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?e(Object(t),!0).forEach((function(e){o(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):e(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(e,n,o){return n in e?Object.defineProperty(e,n,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[n]=o,e}function r(e){return function(e){if(Array.isArray(e))return l(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||t(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,n){if(e){if("string"==typeof e)return l(e,n);var o=Object.prototype.toString.call(e).slice(8,-1);return"Object"===o&&e.constructor&&(o=e.constructor.name),"Map"===o||"Set"===o?Array.from(e):"Arguments"===o||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(o)?l(e,n):void 0}}function l(e,n){(null==n||n>e.length)&&(n=e.length);for(var o=0,r=new Array(n);o<n;o++)r[o]=e[o];return r}var i=document.createElement("style");i.innerHTML='.el-dropdown{--el-dropdown-menu-box-shadow: var(--el-box-shadow-light);--el-dropdown-menuItem-hover-fill: var(--el-color-primary-light-9);--el-dropdown-menuItem-hover-color: var(--el-color-primary);--el-dropdown-menu-index: 10;display:inline-flex;position:relative;color:var(--el-text-color-regular);font-size:var(--el-font-size-base);line-height:1;vertical-align:top}.el-dropdown.is-disabled{color:var(--el-text-color-placeholder);cursor:not-allowed}.el-dropdown__popper{--el-dropdown-menu-box-shadow: var(--el-box-shadow-light);--el-dropdown-menuItem-hover-fill: var(--el-color-primary-light-9);--el-dropdown-menuItem-hover-color: var(--el-color-primary);--el-dropdown-menu-index: 10}.el-dropdown__popper.el-popper{background:var(--el-bg-color-overlay);border:1px solid var(--el-border-color-light);box-shadow:var(--el-dropdown-menu-box-shadow)}.el-dropdown__popper.el-popper .el-popper__arrow:before{border:1px solid var(--el-border-color-light)}.el-dropdown__popper.el-popper[data-popper-placement^=top] .el-popper__arrow:before{border-top-color:transparent;border-left-color:transparent}.el-dropdown__popper.el-popper[data-popper-placement^=bottom] .el-popper__arrow:before{border-bottom-color:transparent;border-right-color:transparent}.el-dropdown__popper.el-popper[data-popper-placement^=left] .el-popper__arrow:before{border-left-color:transparent;border-bottom-color:transparent}.el-dropdown__popper.el-popper[data-popper-placement^=right] .el-popper__arrow:before{border-right-color:transparent;border-top-color:transparent}.el-dropdown__popper .el-dropdown-menu{border:none}.el-dropdown__popper .el-dropdown__popper-selfdefine{outline:none}.el-dropdown__popper .el-scrollbar__bar{z-index:calc(var(--el-dropdown-menu-index) + 1)}.el-dropdown__popper .el-dropdown__list{list-style:none;padding:0;margin:0;box-sizing:border-box}.el-dropdown .el-dropdown__caret-button{padding-left:0;padding-right:0;display:inline-flex;justify-content:center;align-items:center;width:32px;border-left:none}.el-dropdown .el-dropdown__caret-button>span{display:inline-flex}.el-dropdown .el-dropdown__caret-button:before{content:"";position:absolute;display:block;width:1px;top:-1px;bottom:-1px;left:0;background:var(--el-overlay-color-lighter)}.el-dropdown .el-dropdown__caret-button.el-button:before{background:var(--el-border-color);opacity:.5}.el-dropdown .el-dropdown__caret-button .el-dropdown__icon{font-size:inherit;padding-left:0}.el-dropdown .el-dropdown-selfdefine{outline:none}.el-dropdown--large .el-dropdown__caret-button{width:40px}.el-dropdown--small .el-dropdown__caret-button{width:24px}.el-dropdown-menu{position:relative;top:0;left:0;z-index:var(--el-dropdown-menu-index);padding:5px 0;margin:0;background-color:var(--el-bg-color-overlay);border:none;border-radius:var(--el-border-radius-base);box-shadow:none;list-style:none}.el-dropdown-menu__item{display:flex;align-items:center;white-space:nowrap;list-style:none;line-height:22px;padding:5px 16px;margin:0;font-size:var(--el-font-size-base);color:var(--el-text-color-regular);cursor:pointer;outline:none}.el-dropdown-menu__item:not(.is-disabled):focus{background-color:var(--el-dropdown-menuItem-hover-fill);color:var(--el-dropdown-menuItem-hover-color)}.el-dropdown-menu__item i{margin-right:5px}.el-dropdown-menu__item--divided{margin:6px 0;border-top:1px solid var(--el-border-color-lighter)}.el-dropdown-menu__item.is-disabled{cursor:not-allowed;color:var(--el-text-color-disabled)}.el-dropdown-menu--large{padding:7px 0}.el-dropdown-menu--large .el-dropdown-menu__item{padding:7px 20px;line-height:22px;font-size:14px}.el-dropdown-menu--large .el-dropdown-menu__item--divided{margin:8px 0}.el-dropdown-menu--small{padding:3px 0}.el-dropdown-menu--small .el-dropdown-menu__item{padding:2px 12px;line-height:20px;font-size:12px}.el-dropdown-menu--small .el-dropdown-menu__item--divided{margin:4px 0}\n',document.head.appendChild(i),System.register(["./base-legacy.300d11a2.js","./popper-legacy.0e5cbcae.js","./index-legacy.8a2d13a7.js","./dropdown-legacy.1696e2b1.js","./event-legacy.0bfbd831.js","./index-legacy.5c2a5b9a.js","./index-legacy.4e6c4971.js","./refs-legacy.991970ad.js","./focus-trap-legacy.6b3273d9.js"],(function(e){"use strict";var l,i,a,u,d,p,c,s,f,m,v,g,b,w,h,y,_,x,I,k,E,F,C,S,R,T,O,P,D,j,z,A,M,K,B,G,$,L,H,N,U,J,W,Y,q,V,X,Z,Q,ee,ne,oe,re,te,le,ie,ae,ue,de,pe,ce,se,fe,me;return{setters:[function(e){l=e.b,i=e.d,a=e.O,u=e._,d=e.X,p=e.r,c=e.E,s=e.a6,f=e.u,m=e.a0,v=e.a4,g=e.w,b=e.j},function(e){w=e.E,h=e.O},function(e){y=e.E},function(e){_=e.c,x=e.E,I=e.d,k=e.a,E=e.C,F=e.b,C=e.e,S=e.f,R=e.g,T=e.F,O=e.L},function(e){P=e.a,D=e.o,j=e.c,z=e.w},function(e){A=e.d,M=e.r,K=e.E,B=e.c,G=e.v,$=e.a3,L=e.x,H=e.u,N=e.w,U=e.o,J=e.H,W=e.g,Y=e.ai,q=e.a,V=e.b,X=e.e,Z=e.h,Q=e.A,ee=e.aB,ne=e.Z,oe=e.a0,re=e.f,te=e.I,le=e.z,ie=e.n,ae=e.k,ue=e.p,de=e.q,pe=e.F,ce=e.i},function(e){se=e.u},function(e){fe=e.c},function(e){me=e.F}],execute:function(){var ve=l({style:{type:i([String,Array,Object])},currentTabId:{type:i(String)},defaultCurrentTabId:String,loop:Boolean,dir:{type:String,values:["ltr","rtl"],default:"ltr"},orientation:{type:i(String)},onBlur:Function,onFocus:Function,onMousedown:Function}),ge=_("RovingFocusGroup"),be=ge.ElCollection,we=ge.ElCollectionItem,he=ge.COLLECTION_INJECTION_KEY,ye=ge.COLLECTION_ITEM_INJECTION_KEY,_e=Symbol("elRovingFocusGroup"),xe=Symbol("elRovingFocusGroupItem"),Ie={ArrowLeft:"prev",ArrowUp:"prev",ArrowRight:"next",ArrowDown:"next",PageUp:"first",Home:"first",PageDown:"last",End:"last"},ke=function(e,n,o){var r=function(e,n){if("rtl"!==n)return e;switch(e){case a.right:return a.left;case a.left:return a.right;default:return e}}(e.key,o);if(!("vertical"===n&&[a.left,a.right].includes(r)||"horizontal"===n&&[a.up,a.down].includes(r)))return Ie[r]},Ee=function(e){var n,o=document.activeElement,r=function(e,n){var o="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!o){if(Array.isArray(e)||(o=t(e))||n&&e&&"number"==typeof e.length){o&&(e=o);var r=0,l=function(){};return{s:l,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,u=!1;return{s:function(){o=o.call(e)},n:function(){var e=o.next();return a=e.done,e},e:function(e){u=!0,i=e},f:function(){try{a||null==o.return||o.return()}finally{if(u)throw i}}}}(e);try{for(r.s();!(n=r.n()).done;){var l=n.value;if(l===o)return;if(l.focus(),o!==document.activeElement)return}}catch(i){r.e(i)}finally{r.f()}},Fe="currentTabIdChange",Ce="rovingFocusGroup.entryFocus",Se={bubbles:!1,cancelable:!0},Re=A({name:"ElRovingFocusGroupImpl",inheritAttrs:!1,props:ve,emits:[Fe,"entryFocus"],setup:function(e,n){var o,t=n.emit,l=M(null!=(o=e.currentTabId||e.defaultCurrentTabId)?o:null),i=M(!1),a=M(!1),u=M(null),d=K(he,void 0).getItems,p=B((function(){return[{outline:"none"},e.style]})),c=j((function(n){var o;null==(o=e.onMousedown)||o.call(e,n)}),(function(){a.value=!0})),s=j((function(n){var o;null==(o=e.onFocus)||o.call(e,n)}),(function(e){var n=!H(a),o=e.target,t=e.currentTarget;if(o===t&&n&&!H(i)){var u=new Event(Ce,Se);if(null==t||t.dispatchEvent(u),!u.defaultPrevented){var p=d().filter((function(e){return e.focusable})),c=[p.find((function(e){return e.active})),p.find((function(e){return e.id===H(l)}))].concat(r(p)).filter(Boolean).map((function(e){return e.ref}));Ee(c)}}a.value=!1})),f=j((function(n){var o;null==(o=e.onBlur)||o.call(e,n)}),(function(){i.value=!1})),m=function(){for(var e=arguments.length,n=new Array(e),o=0;o<e;o++)n[o]=arguments[o];t.apply(void 0,["entryFocus"].concat(n))};G(_e,{currentTabbedId:$(l),loop:L(e,"loop"),tabIndex:B((function(){return H(i)?-1:0})),rovingFocusGroupRef:u,rovingFocusGroupRootStyle:p,orientation:L(e,"orientation"),dir:L(e,"dir"),onItemFocus:function(e){t(Fe,e)},onItemShiftTab:function(){i.value=!0},onBlur:f,onFocus:s,onMousedown:c}),N((function(){return e.currentTabId}),(function(e){l.value=null!=e?e:null})),U((function(){var e=H(u);P(e,Ce,m)})),J((function(){var e=H(u);D(e,Ce,m)}))}});var Te=A({name:"ElRovingFocusGroup",components:{ElFocusGroupCollection:be,ElRovingFocusGroupImpl:u(Re,[["render",function(e,n,o,r,t,l){return W(e.$slots,"default")}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group-impl.vue"]])}});var Oe=u(Te,[["render",function(e,n,o,r,t,l){var i=Y("el-roving-focus-group-impl"),a=Y("el-focus-group-collection");return q(),V(a,null,{default:X((function(){return[Z(i,Q(ee(e.$attrs)),{default:X((function(){return[W(e.$slots,"default")]})),_:3},16)]})),_:3})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-group.vue"]]),Pe=A({components:{ElRovingFocusCollectionItem:we},props:{focusable:{type:Boolean,default:!0},active:{type:Boolean,default:!1}},emits:["mousedown","focus","keydown"],setup:function(e,n){var o=n.emit,r=K(_e,void 0),t=r.currentTabbedId,l=r.loop,i=r.onItemFocus,u=r.onItemShiftTab,p=K(he,void 0).getItems,c=d(),s=M(null),f=j((function(e){o("mousedown",e)}),(function(n){e.focusable?i(H(c)):n.preventDefault()})),m=j((function(e){o("focus",e)}),(function(){i(H(c))})),v=j((function(e){o("keydown",e)}),(function(e){var n=e.key,o=e.shiftKey,r=e.target,t=e.currentTarget;if(n===a.tab&&o)u();else if(r===t){var i,d,c=ke(e);if(c){e.preventDefault();var s=p().filter((function(e){return e.focusable})).map((function(e){return e.ref}));switch(c){case"last":s.reverse();break;case"prev":case"next":"prev"===c&&s.reverse();var f=s.indexOf(t);s=l.value?(d=f+1,(i=s).map((function(e,n){return i[(n+d)%i.length]}))):s.slice(f+1)}ne((function(){Ee(s)}))}}})),g=B((function(){return t.value===H(c)}));return G(xe,{rovingFocusGroupItemRef:s,tabIndex:B((function(){return H(g)?0:-1})),handleMousedown:f,handleFocus:m,handleKeydown:v}),{id:c,handleKeydown:v,handleFocus:m,handleMousedown:f}}});var De=u(Pe,[["render",function(e,n,o,r,t,l){var i=Y("el-roving-focus-collection-item");return q(),V(i,{id:e.id,focusable:e.focusable,active:e.active},{default:X((function(){return[W(e.$slots,"default")]})),_:3},8,["id","focusable","active"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/roving-focus-group/src/roving-focus-item.vue"]]),je=Symbol("elDropdown"),ze=p.ButtonGroup,Ae=A({name:"ElDropdown",components:{ElButton:p,ElButtonGroup:ze,ElScrollbar:y,ElDropdownCollection:x,ElTooltip:w,ElRovingFocusGroup:Oe,ElOnlyChild:h,ElIcon:c,ArrowDown:s},props:I,emits:["visible-change","click","command"],setup:function(e,n){var o=n.emit,r=oe(),t=f("dropdown"),l=se().t,i=M(),u=M(),p=M(null),c=M(null),s=M(null),g=M(null),b=M(!1),w=[a.enter,a.space,a.down],h=B((function(){return{maxHeight:m(e.maxHeight)}})),y=B((function(){return[t.m(k.value)]})),_=d().value,x=B((function(){return e.id||_}));function I(){var e;null==(e=p.value)||e.onClose()}var k=v();G(je,{contentRef:c,role:B((function(){return e.role})),triggerId:x,isUsingKeyboard:b,onItemEnter:function(){},onItemLeave:function(){var e=H(c);null==e||e.focus(),g.value=null}}),G("elDropdown",{instance:r,dropdownSize:k,handleClick:function(){I()},commandHandler:function(){for(var e=arguments.length,n=new Array(e),r=0;r<e;r++)n[r]=arguments[r];o.apply(void 0,["command"].concat(n))},trigger:L(e,"trigger"),hideOnClick:L(e,"hideOnClick")});return{t:l,ns:t,scrollbar:s,wrapStyle:h,dropdownTriggerKls:y,dropdownSize:k,triggerId:x,triggerKeys:w,currentTabId:g,handleCurrentTabIdChange:function(e){g.value=e},handlerMainButtonClick:function(e){o("click",e)},handleEntryFocus:function(e){b.value||(e.preventDefault(),e.stopImmediatePropagation())},handleClose:I,handleOpen:function(){var e;null==(e=p.value)||e.onOpen()},handleShowTooltip:function(e){"keydown"===(null==e?void 0:e.type)&&c.value.focus(),o("visible-change",!0)},handleHideTooltip:function(){o("visible-change",!1)},onFocusAfterTrapped:function(e){var n,o;e.preventDefault(),null==(o=null==(n=c.value)?void 0:n.focus)||o.call(n,{preventScroll:!0})},popperRef:p,contentRef:c,triggeringElementRef:i,referenceElementRef:u}}});var Me=u(Ae,[["render",function(e,n,o,r,t,l){var i,a=Y("el-dropdown-collection"),u=Y("el-roving-focus-group"),d=Y("el-scrollbar"),p=Y("el-only-child"),c=Y("el-tooltip"),s=Y("el-button"),f=Y("arrow-down"),m=Y("el-icon"),v=Y("el-button-group");return q(),re("div",{class:ie([e.ns.b(),e.ns.is("disabled",e.disabled)])},[Z(c,{ref:"popperRef",role:e.role,effect:e.effect,"fallback-placements":["bottom","top"],"popper-options":e.popperOptions,"gpu-acceleration":!1,"hide-after":"hover"===e.trigger?e.hideTimeout:0,"manual-mode":!0,placement:e.placement,"popper-class":[e.ns.e("popper"),e.popperClass],"reference-element":null==(i=e.referenceElementRef)?void 0:i.$el,trigger:e.trigger,"trigger-keys":e.triggerKeys,"trigger-target-el":e.contentRef,"show-after":"hover"===e.trigger?e.showTimeout:0,"stop-popper-mouse-event":!1,"virtual-ref":e.triggeringElementRef,"virtual-triggering":e.splitButton,disabled:e.disabled,transition:"".concat(e.ns.namespace.value,"-zoom-in-top"),teleported:"",pure:"",persistent:"",onShow:e.handleShowTooltip,onHide:e.handleHideTooltip},te({content:X((function(){return[Z(d,{ref:"scrollbar","wrap-style":e.wrapStyle,tag:"div","view-class":e.ns.e("list")},{default:X((function(){return[Z(u,{loop:e.loop,"current-tab-id":e.currentTabId,orientation:"horizontal",onCurrentTabIdChange:e.handleCurrentTabIdChange,onEntryFocus:e.handleEntryFocus},{default:X((function(){return[Z(a,null,{default:X((function(){return[W(e.$slots,"dropdown")]})),_:3})]})),_:3},8,["loop","current-tab-id","onCurrentTabIdChange","onEntryFocus"])]})),_:3},8,["wrap-style","view-class"])]})),_:2},[e.splitButton?void 0:{name:"default",fn:X((function(){return[Z(p,{id:e.triggerId,role:"button",tabindex:e.tabindex},{default:X((function(){return[W(e.$slots,"default")]})),_:3},8,["id","tabindex"])]}))}]),1032,["role","effect","popper-options","hide-after","placement","popper-class","reference-element","trigger","trigger-keys","trigger-target-el","show-after","virtual-ref","virtual-triggering","disabled","transition","onShow","onHide"]),e.splitButton?(q(),V(v,{key:0},{default:X((function(){return[Z(s,le({ref:"referenceElementRef"},e.buttonProps,{size:e.dropdownSize,type:e.type,disabled:e.disabled,tabindex:e.tabindex,onClick:e.handlerMainButtonClick}),{default:X((function(){return[W(e.$slots,"default")]})),_:3},16,["size","type","disabled","tabindex","onClick"]),Z(s,le({id:e.triggerId,ref:"triggeringElementRef"},e.buttonProps,{role:"button",size:e.dropdownSize,type:e.type,class:e.ns.e("caret-button"),disabled:e.disabled,tabindex:e.tabindex,"aria-label":e.t("el.dropdown.toggleDropdown")}),{default:X((function(){return[Z(m,{class:ie(e.ns.e("icon"))},{default:X((function(){return[Z(f)]})),_:1},8,["class"])]})),_:1},16,["id","size","type","class","disabled","tabindex","aria-label"])]})),_:3})):ae("v-if",!0)],2)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown.vue"]]),Ke=A({name:"DropdownItemImpl",components:{ElIcon:c},props:k,emits:["pointermove","pointerleave","click","clickimpl"],setup:function(e,n){var r=n.emit,t=f("dropdown"),l=K(je,void 0).role,i=K(E,void 0).collectionItemRef,u=K(ye,void 0).collectionItemRef,d=K(xe,void 0),p=d.rovingFocusGroupItemRef,c=d.tabIndex,s=d.handleFocus,m=d.handleKeydown,v=d.handleMousedown,g=fe(i,u,p),b=B((function(){return"menu"===l.value?"menuitem":"navigation"===l.value?"link":"button"})),w=j((function(e){var n=e.code;if(n===a.enter||n===a.space)return e.preventDefault(),e.stopImmediatePropagation(),r("clickimpl",e),!0}),m);return{ns:t,itemRef:g,dataset:o({},F,""),role:b,tabIndex:c,handleFocus:s,handleKeydown:w,handleMousedown:v}}}),Be=["aria-disabled","tabindex","role"];var Ge=u(Ke,[["render",function(e,o,r,t,l,i){var a=Y("el-icon");return q(),re(pe,null,[e.divided?(q(),re("li",le({key:0,role:"separator",class:e.ns.bem("menu","item","divided")},e.$attrs),null,16)):ae("v-if",!0),ue("li",le({ref:e.itemRef},n(n({},e.dataset),e.$attrs),{"aria-disabled":e.disabled,class:[e.ns.be("menu","item"),e.ns.is("disabled",e.disabled)],tabindex:e.tabIndex,role:e.role,onClick:o[0]||(o[0]=function(n){return e.$emit("clickimpl",n)}),onFocus:o[1]||(o[1]=function(){return e.handleFocus&&e.handleFocus.apply(e,arguments)}),onKeydown:o[2]||(o[2]=function(){return e.handleKeydown&&e.handleKeydown.apply(e,arguments)}),onMousedown:o[3]||(o[3]=function(){return e.handleMousedown&&e.handleMousedown.apply(e,arguments)}),onPointermove:o[4]||(o[4]=function(n){return e.$emit("pointermove",n)}),onPointerleave:o[5]||(o[5]=function(n){return e.$emit("pointerleave",n)})}),[e.icon?(q(),V(a,{key:0},{default:X((function(){return[(q(),V(de(e.icon)))]})),_:1})):ae("v-if",!0),W(e.$slots,"default")],16,Be)],64)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item-impl.vue"]]),$e=function(){var e=K("elDropdown",{}),n=B((function(){return null==e?void 0:e.dropdownSize}));return{elDropdown:e,_elDropdownSize:n}},Le=A({name:"ElDropdownItem",components:{ElDropdownCollectionItem:C,ElRovingFocusItem:De,ElDropdownItemImpl:Ge},inheritAttrs:!1,props:k,emits:["pointermove","pointerleave","click"],setup:function(e,o){var r=o.emit,t=o.attrs,l=$e().elDropdown,i=oe(),a=M(null),u=B((function(){var e,n;return null!=(n=null==(e=H(a))?void 0:e.textContent)?n:""})),d=K(je,void 0),p=d.onItemEnter,c=d.onItemLeave,s=j((function(e){return r("pointermove",e),e.defaultPrevented}),z((function(n){var o;e.disabled?c(n):(p(n),n.defaultPrevented||null==(o=n.currentTarget)||o.focus())}))),f=j((function(e){return r("pointerleave",e),e.defaultPrevented}),z((function(e){c(e)})));return{handleClick:j((function(e){return r("click",e),"keydown"!==e.type&&e.defaultPrevented}),(function(n){var o,r,t;e.disabled?n.stopImmediatePropagation():((null==(o=null==l?void 0:l.hideOnClick)?void 0:o.value)&&(null==(r=l.handleClick)||r.call(l)),null==(t=l.commandHandler)||t.call(l,e.command,i,n))})),handlePointerMove:s,handlePointerLeave:f,textContent:u,propsAndAttrs:B((function(){return n(n({},e),t)}))}}});var He=u(Le,[["render",function(e,n,o,r,t,l){var i,a=Y("el-dropdown-item-impl"),u=Y("el-roving-focus-item"),d=Y("el-dropdown-collection-item");return q(),V(d,{disabled:e.disabled,"text-value":null!=(i=e.textValue)?i:e.textContent},{default:X((function(){return[Z(u,{focusable:!e.disabled},{default:X((function(){return[Z(a,le(e.propsAndAttrs,{onPointerleave:e.handlePointerLeave,onPointermove:e.handlePointerMove,onClickimpl:e.handleClick}),{default:X((function(){return[W(e.$slots,"default")]})),_:3},16,["onPointerleave","onPointermove","onClickimpl"])]})),_:3},8,["focusable"])]})),_:3},8,["disabled","text-value"])}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-item.vue"]]),Ne=A({name:"ElDropdownMenu",props:S,setup:function(e){var n=f("dropdown"),o=$e()._elDropdownSize.value,r=K(me,void 0),t=r.focusTrapRef,l=r.onKeydown,i=K(je,void 0),u=i.contentRef,d=i.role,p=i.triggerId,c=K(R,void 0),s=c.collectionRef,m=c.getItems,v=K(_e,void 0),g=v.rovingFocusGroupRef,b=v.rovingFocusGroupRootStyle,w=v.tabIndex,h=v.onBlur,y=v.onFocus,_=v.onMousedown,x=K(he,void 0).collectionRef,I=B((function(){return[n.b("menu"),n.bm("menu",null==o?void 0:o.value)]})),k=fe(u,s,t,g,x),E=j((function(n){var o;null==(o=e.onKeydown)||o.call(e,n)}),(function(e){var n=e.currentTarget,o=e.code,r=e.target;if(n.contains(r),a.tab===o&&e.stopImmediatePropagation(),e.preventDefault(),r===H(u)&&T.includes(o)){var t=m().filter((function(e){return!e.disabled})).map((function(e){return e.ref}));O.includes(o)&&t.reverse(),Ee(t)}}));return{size:o,rovingFocusGroupRootStyle:b,tabIndex:w,dropdownKls:I,role:d,triggerId:p,dropdownListWrapperRef:k,handleKeydown:function(e){E(e),l(e)},onBlur:h,onFocus:y,onMousedown:_}}}),Ue=["role","aria-labelledby"];var Je=u(Ne,[["render",function(e,n,o,r,t,l){return q(),re("ul",{ref:e.dropdownListWrapperRef,class:ie(e.dropdownKls),style:ce(e.rovingFocusGroupRootStyle),tabindex:-1,role:e.role,"aria-labelledby":e.triggerId,onBlur:n[0]||(n[0]=function(){return e.onBlur&&e.onBlur.apply(e,arguments)}),onFocus:n[1]||(n[1]=function(){return e.onFocus&&e.onFocus.apply(e,arguments)}),onKeydown:n[2]||(n[2]=function(){return e.handleKeydown&&e.handleKeydown.apply(e,arguments)}),onMousedown:n[3]||(n[3]=function(){return e.onMousedown&&e.onMousedown.apply(e,arguments)})},[W(e.$slots,"default")],46,Ue)}],["__file","/home/runner/work/element-plus/element-plus/packages/components/dropdown/src/dropdown-menu.vue"]]);e("b",g(Me,{DropdownItem:He,DropdownMenu:Je})),e("E",b(He)),e("a",b(Je))}}}))}();