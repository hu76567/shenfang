(function(e){function n(n){for(var a,t,s=n[0],d=n[1],g=n[2],p=0,u=[];p<s.length;p++)t=s[p],Object.prototype.hasOwnProperty.call(o,t)&&o[t]&&u.push(o[t][0]),o[t]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);c&&c(n);while(u.length)u.shift()();return r.push.apply(r,g||[]),i()}function i(){for(var e,n=0;n<r.length;n++){for(var i=r[n],a=!0,t=1;t<i.length;t++){var d=i[t];0!==o[d]&&(a=!1)}a&&(r.splice(n--,1),e=s(s.s=i[0]))}return e}var a={},o={index:0},r=[];function t(e){return s.p+"static/js/"+({"pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980":"pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980","pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2":"pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2","pages-commited-index":"pages-commited-index","pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666":"pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666","pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index":"pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index","pages-prescribingInfo-index":"pages-prescribingInfo-index","pages-prescriptionDetail-index":"pages-prescriptionDetail-index","pages-pendingProcess-index":"pages-pendingProcess-index","pages-processed-index":"pages-processed-index","pages-login-index~pages-tabBar-index~pages-tabBar-uCenter":"pages-login-index~pages-tabBar-index~pages-tabBar-uCenter","pages-login-index":"pages-login-index","pages-tabBar-index":"pages-tabBar-index","pages-tabBar-uCenter":"pages-tabBar-uCenter","pages-tabBar-message":"pages-tabBar-message"}[e]||e)+"."+{"pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980":"18bd7a5a","pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2":"1444ce09","pages-commited-index":"46502b4b","pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666":"949389a2","pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index":"880a2ce8","pages-prescribingInfo-index":"d4a2912a","pages-prescriptionDetail-index":"e5557edc","pages-pendingProcess-index":"4a8654ae","pages-processed-index":"8ec487f1","pages-login-index~pages-tabBar-index~pages-tabBar-uCenter":"9d8f7802","pages-login-index":"1286d40a","pages-tabBar-index":"c3c6302e","pages-tabBar-uCenter":"9ab32a90","pages-tabBar-message":"3f684560"}[e]+".js"}function s(n){if(a[n])return a[n].exports;var i=a[n]={i:n,l:!1,exports:{}};return e[n].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.e=function(e){var n=[],i=o[e];if(0!==i)if(i)n.push(i[2]);else{var a=new Promise((function(n,a){i=o[e]=[n,a]}));n.push(i[2]=a);var r,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=t(e);var g=new Error;r=function(n){d.onerror=d.onload=null,clearTimeout(p);var i=o[e];if(0!==i){if(i){var a=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;g.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",g.name="ChunkLoadError",g.type=a,g.request=r,i[1](g)}o[e]=void 0}};var p=setTimeout((function(){r({type:"timeout",target:d})}),12e4);d.onerror=d.onload=r,document.head.appendChild(d)}return Promise.all(n)},s.m=e,s.c=a,s.d=function(e,n,i){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)s.d(i,a,function(n){return e[n]}.bind(null,a));return i},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var d=window["webpackJsonp"]=window["webpackJsonp"]||[],g=d.push.bind(d);d.push=n,d=d.slice();for(var p=0;p<d.length;p++)n(d[p]);var c=g;r.push([0,"chunk-vendors"]),i()})({0:function(e,n,i){e.exports=i("4dc9")},"021c":function(e,n,i){var a=i("e646");"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var o=i("4f06").default;o("01927f80",a,!0,{sourceMap:!1,shadowMode:!1})},"0356":function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.isAuth=n.removeToken=n.setToken=n.getToken=void 0;var a=function(){return uni.getStorageSync("token")||""};n.getToken=a;var o=function(e){uni.setStorageSync("token",e)};n.setToken=o;var r=function(){uni.removeStorageSync("token")};n.removeToken=r;var t=function(){return!!a()};n.isAuth=t},"4dc9":function(e,n,i){"use strict";var a=i("4ea4"),o=a(i("5530"));i("e260"),i("e6cf"),i("cca6"),i("a79d"),i("d331"),i("1c31");var r=a(i("abf5")),t=a(i("fa89")),s=a(i("e143")),d=a(i("4c28"));s.default.use(d.default),s.default.config.productionTip=!1,r.default.mpType="app";var g=new s.default((0,o.default)({store:t.default},r.default));g.$mount()},"7c64":function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a={};n.default=a},abf5:function(e,n,i){"use strict";i.r(n);var a=i("b52c"),o=i("d8d3");for(var r in o)"default"!==r&&function(e){i.d(n,e,(function(){return o[e]}))}(r);i("b245");var t,s=i("f0c5"),d=Object(s["a"])(o["default"],a["b"],a["c"],!1,null,null,null,!1,a["a"],t);n["default"]=d.exports},b245:function(e,n,i){"use strict";var a=i("021c"),o=i.n(a);o.a},b52c:function(e,n,i){"use strict";var a;i.d(n,"b",(function(){return o})),i.d(n,"c",(function(){return r})),i.d(n,"a",(function(){return a}));var o=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("App",{attrs:{keepAliveInclude:e.keepAliveInclude}})},r=[]},d331:function(e,n,i){"use strict";(function(e){var n=i("4ea4");i("13d5"),i("d3b7"),i("ac1f"),i("5319"),i("ddb0");var a=n(i("e143")),o={keys:function(){return[]}};e["____DDA2BD7____"]=!0,delete e["____DDA2BD7____"],e.__uniConfig={easycom:{"^u-(.*)":"uview-ui/components/u-$1/u-$1.vue","^unicloud-db$":"@dcloudio/uni-cli-shared/components/unicloud-db.vue","^page-meta$":"@dcloudio/uni-cli-shared/components/page-meta.vue","^navigation-bar$":"@dcloudio/uni-cli-shared/components/navigation-bar.vue","^uni-match-media$":"@dcloudio/uni-cli-shared/components/uni-match-media.vue"},globalStyle:{navigationBarTextStyle:"black",navigationBarTitleText:"uni-app",navigationBarBackgroundColor:"#F8F8F8",backgroundColor:"#F8F8F8"},tabBar:{color:"#7A7E83",selectedColor:"#22A6F1",borderStyle:"black",backgroundColor:"#fff",fontSize:"13px",list:[{pagePath:"pages/tabBar/index",text:"首页",iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{pagePath:"pages/tabBar/message",text:"消息",iconPath:"",selectedIconPath:"",redDot:!1,badge:""},{pagePath:"pages/tabBar/uCenter",text:"我的",iconPath:"",selectedIconPath:"",redDot:!1,badge:""}]}},e.__uniConfig.compilerVersion="3.3.13",e.__uniConfig.router={mode:"hash",base:"/"},e.__uniConfig.publicPath="/",e.__uniConfig["async"]={loading:"AsyncLoading",error:"AsyncError",delay:200,timeout:6e4},e.__uniConfig.debug=!1,e.__uniConfig.networkTimeout={request:6e4,connectSocket:6e4,uploadFile:6e4,downloadFile:6e4},e.__uniConfig.sdkConfigs={},e.__uniConfig.qqMapKey=void 0,e.__uniConfig.googleMapKey=void 0,e.__uniConfig.locale="",e.__uniConfig.fallbackLocale=void 0,e.__uniConfig.locales=o.keys().reduce((function(e,n){var i=n.replace(/\.\/(uni-app.)?(.*).json/,"$2"),a=o(n);return Object.assign(e[i]||(e[i]={}),a.common||a),e}),{}),e.__uniConfig.nvue={"flex-direction":"column"},e.__uniConfig.__webpack_chunk_load__=i.e,a.default.component("pages-tabBar-index",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666"),i.e("pages-login-index~pages-tabBar-index~pages-tabBar-uCenter"),i.e("pages-tabBar-index")]).then(function(){return e(i("f5ba"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-tabBar-message",(function(e){var n={component:i.e("pages-tabBar-message").then(function(){return e(i("3159"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-tabBar-uCenter",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666"),i.e("pages-login-index~pages-tabBar-index~pages-tabBar-uCenter"),i.e("pages-tabBar-uCenter")]).then(function(){return e(i("865a"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-login-index",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index"),i.e("pages-login-index~pages-tabBar-index~pages-tabBar-uCenter"),i.e("pages-login-index")]).then(function(){return e(i("3ba7"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-processed-index",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2"),i.e("pages-processed-index")]).then(function(){return e(i("d7ab"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-pendingProcess-index",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2"),i.e("pages-pendingProcess-index")]).then(function(){return e(i("777a"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-commited-index",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2"),i.e("pages-commited-index")]).then(function(){return e(i("03f4"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-prescriptionDetail-index",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index"),i.e("pages-prescriptionDetail-index")]).then(function(){return e(i("9c58"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),a.default.component("pages-prescribingInfo-index",(function(e){var n={component:Promise.all([i.e("pages-commited-index~pages-login-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-~60d78980"),i.e("pages-commited-index~pages-pendingProcess-index~pages-prescribingInfo-index~pages-prescriptionDetail~bbdab6d2"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index~pages-tabBar-index~page~a304a666"),i.e("pages-login-index~pages-prescribingInfo-index~pages-prescriptionDetail-index"),i.e("pages-prescribingInfo-index")]).then(function(){return e(i("4bc6"))}.bind(null,i)).catch(i.oe),delay:__uniConfig["async"].delay,timeout:__uniConfig["async"].timeout};return __uniConfig["async"]["loading"]&&(n.loading={name:"SystemAsyncLoading",render:function(e){return e(__uniConfig["async"]["loading"])}}),__uniConfig["async"]["error"]&&(n.error={name:"SystemAsyncError",render:function(e){return e(__uniConfig["async"]["error"])}}),n})),e.__uniRoutes=[{path:"/",alias:"/pages/tabBar/index",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-tabBar-index",{slot:"page"})])}},meta:{id:1,name:"pages-tabBar-index",isNVue:!1,maxWidth:0,pagePath:"pages/tabBar/index",isQuit:!0,isEntry:!0,isTabBar:!0,tabBarIndex:0,windowTop:0}},{path:"/pages/tabBar/message",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:1},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#22A6F1",navigationBarTitleText:"消息"})},[e("pages-tabBar-message",{slot:"page"})])}},meta:{id:2,name:"pages-tabBar-message",isNVue:!1,maxWidth:0,pagePath:"pages/tabBar/message",isQuit:!0,isTabBar:!0,tabBarIndex:1,windowTop:44}},{path:"/pages/tabBar/uCenter",component:{render:function(e){return e("Page",{props:Object.assign({isQuit:!0,isTabBar:!0,tabBarIndex:2},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-tabBar-uCenter",{slot:"page"})])}},meta:{id:3,name:"pages-tabBar-uCenter",isNVue:!1,maxWidth:0,pagePath:"pages/tabBar/uCenter",isQuit:!0,isTabBar:!0,tabBarIndex:2,windowTop:0}},{path:"/pages/login/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationStyle:"custom"})},[e("pages-login-index",{slot:"page"})])}},meta:{name:"pages-login-index",isNVue:!1,maxWidth:0,pagePath:"pages/login/index",windowTop:0}},{path:"/pages/processed/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#22A6F1",navigationBarTitleText:"已处理"})},[e("pages-processed-index",{slot:"page"})])}},meta:{name:"pages-processed-index",isNVue:!1,maxWidth:0,pagePath:"pages/processed/index",windowTop:44}},{path:"/pages/pendingProcess/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#22A6F1",navigationBarTitleText:"待处理"})},[e("pages-pendingProcess-index",{slot:"page"})])}},meta:{name:"pages-pendingProcess-index",isNVue:!1,maxWidth:0,pagePath:"pages/pendingProcess/index",windowTop:44}},{path:"/pages/commited/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#22A6F1",navigationBarTitleText:"已提交"})},[e("pages-commited-index",{slot:"page"})])}},meta:{name:"pages-commited-index",isNVue:!1,maxWidth:0,pagePath:"pages/commited/index",windowTop:44}},{path:"/pages/prescriptionDetail/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#22A6F1",navigationBarTitleText:"处方详情"})},[e("pages-prescriptionDetail-index",{slot:"page"})])}},meta:{name:"pages-prescriptionDetail-index",isNVue:!1,maxWidth:0,pagePath:"pages/prescriptionDetail/index",windowTop:44}},{path:"/pages/prescribingInfo/index",component:{render:function(e){return e("Page",{props:Object.assign({},__uniConfig.globalStyle,{navigationBarBackgroundColor:"#22A6F1",navigationBarTitleText:"处方信息"})},[e("pages-prescribingInfo-index",{slot:"page"})])}},meta:{name:"pages-prescribingInfo-index",isNVue:!1,maxWidth:0,pagePath:"pages/prescribingInfo/index",windowTop:44}},{path:"/preview-image",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-preview-image",{slot:"page"})])}},meta:{name:"preview-image",pagePath:"/preview-image"}},{path:"/choose-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-choose-location",{slot:"page"})])}},meta:{name:"choose-location",pagePath:"/choose-location"}},{path:"/open-location",component:{render:function(e){return e("Page",{props:{navigationStyle:"custom"}},[e("system-open-location",{slot:"page"})])}},meta:{name:"open-location",pagePath:"/open-location"}}],e.UniApp&&new e.UniApp}).call(this,i("c8ba"))},d8d3:function(e,n,i){"use strict";i.r(n);var a=i("7c64"),o=i.n(a);for(var r in a)"default"!==r&&function(e){i.d(n,e,(function(){return a[e]}))}(r);n["default"]=o.a},de68:function(e,n,i){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.removeUser=n.setUser=n.getUser=void 0;var a=function(){return uni.getStorageSync("user")||""};n.getUser=a;var o=function(e){uni.setStorageSync("user",e)};n.setUser=o;var r=function(){uni.removeStorageSync("user")};n.removeUser=r},e646:function(e,n,i){var a=i("24fb");n=a(!1),n.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* uni.scss */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */\r\n/* 注意要写在第一行，同时给style标签加入lang="scss"属性 */.u-line-1{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:1;-webkit-box-orient:vertical!important}.u-line-2{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:2;-webkit-box-orient:vertical!important}.u-line-3{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:3;-webkit-box-orient:vertical!important}.u-line-4{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:4;-webkit-box-orient:vertical!important}.u-line-5{display:-webkit-box!important;overflow:hidden;text-overflow:ellipsis;word-break:break-all;-webkit-line-clamp:5;-webkit-box-orient:vertical!important}.u-border{border-width:.5px!important;border-color:#dadbde!important;border-style:solid}.u-border-top{border-top-width:.5px!important;border-color:#dadbde!important;border-top-style:solid}.u-border-left{border-left-width:.5px!important;border-color:#dadbde!important;border-left-style:solid}.u-border-right{border-right-width:.5px!important;border-color:#dadbde!important;border-right-style:solid}.u-border-bottom{border-bottom-width:.5px!important;border-color:#dadbde!important;border-bottom-style:solid}.u-border-top-bottom{border-top-width:.5px!important;border-bottom-width:.5px!important;border-color:#dadbde!important;border-top-style:solid;border-bottom-style:solid}.u-reset-button{padding:0;background-color:initial;font-size:inherit;line-height:inherit;color:inherit}.u-reset-button::after{border:none}.u-hover-class{opacity:.7}.u-primary-light{color:#ecf5ff}.u-warning-light{color:#fdf6ec}.u-success-light{color:#f5fff0}.u-error-light{color:#fef0f0}.u-info-light{color:#f4f4f5}.u-primary-light-bg{background-color:#ecf5ff}.u-warning-light-bg{background-color:#fdf6ec}.u-success-light-bg{background-color:#f5fff0}.u-error-light-bg{background-color:#fef0f0}.u-info-light-bg{background-color:#f4f4f5}.u-primary-dark{color:#398ade}.u-warning-dark{color:#f1a532}.u-success-dark{color:#53c21d}.u-error-dark{color:#e45656}.u-info-dark{color:#767a82}.u-primary-dark-bg{background-color:#398ade}.u-warning-dark-bg{background-color:#f1a532}.u-success-dark-bg{background-color:#53c21d}.u-error-dark-bg{background-color:#e45656}.u-info-dark-bg{background-color:#767a82}.u-primary-disabled{color:#9acafc}.u-warning-disabled{color:#f9d39b}.u-success-disabled{color:#a9e08f}.u-error-disabled{color:#f7b2b2}.u-info-disabled{color:#c4c6c9}.u-primary{color:#3c9cff}.u-warning{color:#f9ae3d}.u-success{color:#5ac725}.u-error{color:#f56c6c}.u-info{color:#909399}.u-primary-bg{background-color:#3c9cff}.u-warning-bg{background-color:#f9ae3d}.u-success-bg{background-color:#5ac725}.u-error-bg{background-color:#f56c6c}.u-info-bg{background-color:#909399}.u-main-color{color:#303133}.u-content-color{color:#606266}.u-tips-color{color:#909193}.u-light-color{color:#c0c4cc}.u-safe-area-inset-top{padding-top:0;padding-top:constant(safe-area-inset-top);padding-top:env(safe-area-inset-top)}.u-safe-area-inset-right{padding-right:0;padding-right:constant(safe-area-inset-right);padding-right:env(safe-area-inset-right)}.u-safe-area-inset-bottom{padding-bottom:0;padding-bottom:constant(safe-area-inset-bottom);padding-bottom:env(safe-area-inset-bottom)}.u-safe-area-inset-left{padding-left:0;padding-left:constant(safe-area-inset-left);padding-left:env(safe-area-inset-left)}uni-toast{z-index:10090}uni-toast .uni-toast{z-index:10090}::-webkit-scrollbar{display:none;width:0!important;height:0!important;-webkit-appearance:none;background:transparent}',""]),e.exports=n},fa89:function(e,n,i){"use strict";var a=i("4ea4");Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=a(i("e143")),r=a(i("26cb")),t=i("0356"),s=i("de68");o.default.use(r.default);var d=new r.default.Store({state:{token:(0,t.getToken)(),user:(0,s.getUser)()},mutations:{setToken:function(e,n){e.token=n,(0,t.setToken)(n)},delToken:function(e){e.token="",(0,t.removeToken)()},saveUser:function(e,n){e.user=n,(0,s.setUser)(n)},delUser:function(e){e.user={},(0,s.removeUser)()}},actions:{}});n.default=d}});