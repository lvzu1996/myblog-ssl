webpackJsonp([1],{164:function(e,t,s){"use strict";var n=s(3),a=s(259),i=s(250),r=s.n(i),o=s(251),c=s.n(o),l=s(252),u=s.n(l),m=s(253),_=s.n(m);n.default.use(a.a),t.a=new a.a({routes:[{path:"/hello",name:"Hello",component:r.a},{path:"/",name:"Home",component:c.a},{path:"/register",name:"Register",component:_.a},{path:"/main",name:"Main",component:u.a}]})},166:function(e,t){},167:function(e,t,s){function n(e){s(244)}var a=s(10)(s(191),s(254),n,null,null);e.exports=a.exports},191:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"app"}},192:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"hello",data:function(){return{msg:"Welcome to Your Vue.js App"}}}},193:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(31),a=s.n(n),i=s(0),r=s.n(i);t.default={name:"home",data:function(){return{question_str:"what do you want to do ?",user_name:"",now_time:r()().format("h:mm:ss a"),show_welcome:!1,show_name:!1,show_question:!1,show_comments:!1,show_chat:!1,show_choices:!1,show_time:!1,comment_str:"",chat_str:"",comment_interval_flag:!0,picList:[],bg_url:"",overlay_url:"",hostname:"47.94.129.112"}},mounted:function(){var e=this;if(setInterval(function(){e.now_time=r()().format("h:mm:ss a")},1e3),fetch("http://"+e.hostname+"/api/get_pic_urls",{method:"get"}).then(function(e){return e.json()}).then(function(t){var s=!0,n=!1,i=void 0;try{for(var r,o=a()(t.list);!(s=(r=o.next()).done);s=!0){var c=r.value;e.picList.push({pic_name:c.fields.pic_name,pic_url:c.fields.pic_url}),"background"==c.fields.pic_name&&(e.bg_url=c.fields.pic_url),"overlay"==c.fields.pic_name&&(e.overlay_url=c.fields.pic_url)}}catch(e){n=!0,i=e}finally{try{!s&&o.return&&o.return()}finally{if(n)throw i}}var l=new Image;l.src=e.bg_url,l.onload=function(){$(".mine-home").css("background-position","center"),$(".mine-home").css("height",$(window).height()),$(".overlay").css("height",$(window).height())}}),"true"==localStorage.isVisited&&localStorage.username)return e.show_welcome=!1,e.show_question=!0,e.show_choices=!0,void(e.show_time=!0);localStorage.isVisited=!0,e.show_welcome=!0,setTimeout(function(){e.show_welcome=!1},3e3),setTimeout(function(){e.show_name=!0},4600)},methods:{_conmment:function(){if(this.chat_str="",this.question_str="what do you want to do ?",!this.show_chat)return void(this.show_comments=!0);var e=this;this.show_chat=!1,setTimeout(function(){e.show_comments=!0},500)},_submitComment:function(e){var t=this,s=this;return""==e.target.value?void this.$message({showClose:!0,message:"评论请勿为空"}):0==this.comment_interval_flag?void this.$message({showClose:!0,message:"请勿短时间提交多次评论！"}):(this.show_comments=!1,this.comment_str="",this.comment_interval_flag=!1,setTimeout(function(){s.comment_interval_flag=!0},5e3),void fetch("http://"+s.hostname+"/api/comment?user="+localStorage.username+"&comment="+e.target.value,{method:"get"}).then(function(e){return e.json()}).then(function(e){"success"==e.msg&&t.$message({showClose:!0,message:"评论已成功送到lvzu那边了😂！"})}))},_submitName:function(e){var t=this;if(""==e.target.value)return void this.$message({showClose:!0,message:"姓名请勿为空"});localStorage.username=e.target.value,this.show_name=!1,setTimeout(function(){t.show_choices=!0,t.show_time=!0,t.show_question=!0},1e3)},_chat:function(){if(this.comment_str="",!this.show_comments)return void(this.show_chat=!0);var e=this;this.show_comments=!1,setTimeout(function(){e.show_chat=!0},1e3)},_submitChat:function(){var e=this;fetch("http://www.tuling123.com/openapi/api?key=add0513d906d4febabfd0ce2a42102ef&info="+e.chat_str+"&userid="+localStorage.username,{}).then(function(e){return e.json()}).then(function(t){if(console.log(t.text.substr(0,20)),t.text.length>20){var s=t.text.substr(0,17);s+="...",e.question_str=s}else e.question_str=t.text}),this.chat_str=""}}}},194:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Main",data:function(){return{}}}},195:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(31),a=s.n(n);t.default={name:"Register",data:function(){return{picList:[],bg_url:"",log_username:"",log_password:"",register_nickname:"",register_username:"",register_password:"",register_verifycode:"",isLog:!1,remember:!1,login_icon_hrefs:["#icon-ziyuan","#icon-shejiao-instagram","#icon-shejiao-github","#icon-shejiao1","#icon-shejiao-facebook"],register_icon_hrefs:["#icon-ziyuan","#icon-weibo","#icon-shejiao-twitter","#icon-shejiao1","#icon-shejiao-github"],user_msg_showing:!1,verify_code_show:!1,hostname:"47.94.129.112"}},mounted:function(){var e=this;fetch("http://"+e.hostname+"/api/get_pic_urls",{method:"get"}).then(function(e){return e.json()}).then(function(t){var s=!0,n=!1,i=void 0;try{for(var r,o=a()(t.list);!(s=(r=o.next()).done);s=!0){var c=r.value;e.picList.push({pic_name:c.fields.pic_name,pic_url:c.fields.pic_url}),"background"==c.fields.pic_name&&(e.bg_url=c.fields.pic_url)}}catch(e){n=!0,i=e}finally{try{!s&&o.return&&o.return()}finally{if(n)throw i}}})},methods:{setLog:function(){if(!this.isLog)return this.setNull(),this.isLog=!0,void(this.verify_code_show=!1)},setReg:function(){if(this.isLog)return this.setNull(),void(this.isLog=!1)},setNull:function(){this.log_username="",this.log_password="",this.register_nickname="",this.register_username="",this.register_password="",this.register_verifycode=""},_login:function(){var e=this,t=this;if(11!=t.log_username.length)return this.$message.error("您的手机号输入有误，请重新输入"),void(t.log_username="");fetch("http://"+t.hostname+"/api/account_login",{method:"post",body:"username="+t.log_username+"&password="+t.log_password,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).then(function(s){return"success"==s.msg?void e.$message({message:"登录成功！",type:"success"}):"passwordError"==s.msg?(e.$message.error("账号密码有误，请重新输入"),void(t.log_password="")):"notRegisterd"==s.msg?(e.$message({message:"此用户名未注册，请先注册",type:"warning"}),void t.setReg()):void 0})},_verify:function(){var e=this;if(11!=e.register_username.length){if(0==e.register_username.length)return;return this.$message.error("您的手机号输入有误，请重新输入"),void(e.register_username="")}$(".main-part").css("height","600px"),$("#after-move").css("transform","translateY(25px)"),e.verify_code_show=!0},_getVerifyCode:function(){var e=this;if(11!=e.register_username.length)return this.$message.error("您的手机号输入有误，请重新输入"),void(e.register_username="");setTimeout(function(){e.register_verifycode=123456},3e3)},_register:function(){var e=this,t=this;return t.register_nickname.length<7?void this.$message.error("您输入的昵称过短，长度应大于6"):11!=t.register_username.length?void this.$message.error("您的手机号输入有误，请重新输入"):void fetch("http://"+t.hostname+"/api/account_register",{method:"post",body:"username="+t.register_username+"&password="+t.register_password+"&nickname="+t.register_nickname,headers:{Accept:"application/json","Content-Type":"application/x-www-form-urlencoded"}}).then(function(e){return e.json()}).then(function(t){"success"==t.msg?e.$message({message:"恭喜您，注册成功！",type:"success"}):"registerd username"==t.msg&&e.$message({message:"该用户名已被注册",type:"warning"})})}}}},196:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s(3),a=s(167),i=s.n(a),r=s(164),o=s(165),c=s.n(o),l=s(168),u=s(166);s.n(u);n.default.config.productionTip=!1,n.default.use(c.a),n.default.use(l.a),new n.default({el:"#app",router:r.a,template:"<App/>",components:{App:i.a}})},244:function(e,t){},245:function(e,t){},246:function(e,t){},247:function(e,t){},248:function(e,t){},249:function(e,t,s){function n(e){return s(a(e))}function a(e){var t=i[e];if(!(t+1))throw new Error("Cannot find module '"+e+"'.");return t}var i={"./af":48,"./af.js":48,"./ar":55,"./ar-dz":49,"./ar-dz.js":49,"./ar-kw":50,"./ar-kw.js":50,"./ar-ly":51,"./ar-ly.js":51,"./ar-ma":52,"./ar-ma.js":52,"./ar-sa":53,"./ar-sa.js":53,"./ar-tn":54,"./ar-tn.js":54,"./ar.js":55,"./az":56,"./az.js":56,"./be":57,"./be.js":57,"./bg":58,"./bg.js":58,"./bn":59,"./bn.js":59,"./bo":60,"./bo.js":60,"./br":61,"./br.js":61,"./bs":62,"./bs.js":62,"./ca":63,"./ca.js":63,"./cs":64,"./cs.js":64,"./cv":65,"./cv.js":65,"./cy":66,"./cy.js":66,"./da":67,"./da.js":67,"./de":70,"./de-at":68,"./de-at.js":68,"./de-ch":69,"./de-ch.js":69,"./de.js":70,"./dv":71,"./dv.js":71,"./el":72,"./el.js":72,"./en-au":73,"./en-au.js":73,"./en-ca":74,"./en-ca.js":74,"./en-gb":75,"./en-gb.js":75,"./en-ie":76,"./en-ie.js":76,"./en-nz":77,"./en-nz.js":77,"./eo":78,"./eo.js":78,"./es":80,"./es-do":79,"./es-do.js":79,"./es.js":80,"./et":81,"./et.js":81,"./eu":82,"./eu.js":82,"./fa":83,"./fa.js":83,"./fi":84,"./fi.js":84,"./fo":85,"./fo.js":85,"./fr":88,"./fr-ca":86,"./fr-ca.js":86,"./fr-ch":87,"./fr-ch.js":87,"./fr.js":88,"./fy":89,"./fy.js":89,"./gd":90,"./gd.js":90,"./gl":91,"./gl.js":91,"./gom-latn":92,"./gom-latn.js":92,"./he":93,"./he.js":93,"./hi":94,"./hi.js":94,"./hr":95,"./hr.js":95,"./hu":96,"./hu.js":96,"./hy-am":97,"./hy-am.js":97,"./id":98,"./id.js":98,"./is":99,"./is.js":99,"./it":100,"./it.js":100,"./ja":101,"./ja.js":101,"./jv":102,"./jv.js":102,"./ka":103,"./ka.js":103,"./kk":104,"./kk.js":104,"./km":105,"./km.js":105,"./kn":106,"./kn.js":106,"./ko":107,"./ko.js":107,"./ky":108,"./ky.js":108,"./lb":109,"./lb.js":109,"./lo":110,"./lo.js":110,"./lt":111,"./lt.js":111,"./lv":112,"./lv.js":112,"./me":113,"./me.js":113,"./mi":114,"./mi.js":114,"./mk":115,"./mk.js":115,"./ml":116,"./ml.js":116,"./mr":117,"./mr.js":117,"./ms":119,"./ms-my":118,"./ms-my.js":118,"./ms.js":119,"./my":120,"./my.js":120,"./nb":121,"./nb.js":121,"./ne":122,"./ne.js":122,"./nl":124,"./nl-be":123,"./nl-be.js":123,"./nl.js":124,"./nn":125,"./nn.js":125,"./pa-in":126,"./pa-in.js":126,"./pl":127,"./pl.js":127,"./pt":129,"./pt-br":128,"./pt-br.js":128,"./pt.js":129,"./ro":130,"./ro.js":130,"./ru":131,"./ru.js":131,"./sd":132,"./sd.js":132,"./se":133,"./se.js":133,"./si":134,"./si.js":134,"./sk":135,"./sk.js":135,"./sl":136,"./sl.js":136,"./sq":137,"./sq.js":137,"./sr":139,"./sr-cyrl":138,"./sr-cyrl.js":138,"./sr.js":139,"./ss":140,"./ss.js":140,"./sv":141,"./sv.js":141,"./sw":142,"./sw.js":142,"./ta":143,"./ta.js":143,"./te":144,"./te.js":144,"./tet":145,"./tet.js":145,"./th":146,"./th.js":146,"./tl-ph":147,"./tl-ph.js":147,"./tlh":148,"./tlh.js":148,"./tr":149,"./tr.js":149,"./tzl":150,"./tzl.js":150,"./tzm":152,"./tzm-latn":151,"./tzm-latn.js":151,"./tzm.js":152,"./uk":153,"./uk.js":153,"./ur":154,"./ur.js":154,"./uz":156,"./uz-latn":155,"./uz-latn.js":155,"./uz.js":156,"./vi":157,"./vi.js":157,"./x-pseudo":158,"./x-pseudo.js":158,"./yo":159,"./yo.js":159,"./zh-cn":160,"./zh-cn.js":160,"./zh-hk":161,"./zh-hk.js":161,"./zh-tw":162,"./zh-tw.js":162};n.keys=function(){return Object.keys(i)},n.resolve=a,e.exports=n,n.id=249},250:function(e,t,s){function n(e){s(245)}var a=s(10)(s(192),s(255),n,"data-v-51896dd4",null);e.exports=a.exports},251:function(e,t,s){function n(e){s(247)}var a=s(10)(s(193),s(257),n,"data-v-d5f7386a",null);e.exports=a.exports},252:function(e,t,s){function n(e){s(246)}var a=s(10)(s(194),s(256),n,"data-v-9d0310b6",null);e.exports=a.exports},253:function(e,t,s){function n(e){s(248)}var a=s(10)(s(195),s(258),n,"data-v-fff1dce2",null);e.exports=a.exports},254:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},staticRenderFns:[]}},255:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"hello"},[s("h1",[e._v(e._s(e.msg))]),e._v(" "),s("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),s("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("Core Docs")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("Forum")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://gitter.im/vuejs/vue",target:"_blank"}},[e._v("Gitter Chat")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("Twitter")])]),e._v(" "),s("br"),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("Docs for This Template")])])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ul",[s("li",[s("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[e._v("vue-router")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[e._v("vuex")])]),e._v(" "),s("li",[s("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[e._v("vue-loader")])]),e._v(" "),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[e._v("awesome-vue")])])])}]}},256:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{attrs:{id:"Main"}},[e._v("\n  123123123123\n")])},staticRenderFns:[]}},257:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"mine-home",style:{backgroundImage:"url("+e.bg_url+")"}},[s("div",{staticClass:"overlay",style:{backgroundImage:"url("+e.overlay_url+")"}},[s("transition",{attrs:{name:"fade"}},[e.show_welcome?s("div",{staticClass:"welcome1 move-lvzu"},[e._v("\n          Hello, welcome !\n        ")]):e._e()]),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.show_name?s("div",{staticClass:"welcome1"},[e._v("\n            what is your name ?\n            "),s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user_name,expression:"user_name"}],staticClass:"comment-input",attrs:{type:"text"},domProps:{value:e.user_name},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e._submitName(t)},input:function(t){t.target.composing||(e.user_name=t.target.value)}}})])]):e._e()]),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.show_time?s("div",{staticClass:"my-time"},[e._v("\n          "+e._s(e.now_time)+"\n        ")]):e._e()]),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.show_question?s("div",{staticClass:"welcome"},[s("span",[e._v(e._s(e.question_str))])]):e._e()]),e._v(" "),e.show_choices?s("div",{staticClass:"choices move-lvzu"},[s("a",{attrs:{href:"#/register"}},[e._v("RST&LOG")]),e._v(" "),s("span",[e._v("|")]),e._v(" "),s("span",{staticClass:"comment-button",on:{click:e._chat}},[e._v("Chat")]),e._v(" "),s("span",[e._v("|")]),e._v(" "),s("span",{staticClass:"comment-button",on:{click:e._conmment}},[e._v("Comment")])]):e._e(),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.show_comments?s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.comment_str,expression:"comment_str"}],staticClass:"comment-input",attrs:{type:"text"},domProps:{value:e.comment_str},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e._submitComment(t)},input:function(t){t.target.composing||(e.comment_str=t.target.value)}}})]):e._e()]),e._v(" "),s("transition",{attrs:{name:"fade"}},[e.show_chat?s("div",{},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.chat_str,expression:"chat_str"}],staticClass:"comment-input",attrs:{type:"text"},domProps:{value:e.chat_str},on:{keydown:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13))return null;e._submitChat(t)},input:function(t){t.target.composing||(e.chat_str=t.target.value)}}})]):e._e()])],1)])])},staticRenderFns:[]}},258:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"register-vue"},[s("div",{staticClass:"main-part"},[s("div",{staticClass:"ope"},[s("a",{staticClass:"normal",class:{active:e.isLog},on:{click:e.setLog}},[e._v("登录")]),e._v(" "),s("b",{staticClass:"point"},[e._v("·")]),e._v(" "),s("a",{staticClass:"normal",class:{active:!e.isLog},on:{click:e.setReg}},[e._v("注册")])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.isLog,expression:"isLog"}],staticClass:"if-class",class:{"move-lvzu":e.isLog}},[s("div",{staticClass:"login-input"},[s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-yonghuming1"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.log_username,expression:"log_username"}],staticClass:"us-pd-input",attrs:{maxlength:"11",spellcheck:"false",placeholder:"手机号"},domProps:{value:e.log_username},on:{input:function(t){t.target.composing||(e.log_username=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.log_password,expression:"log_password"}],staticClass:"us-pd-input",attrs:{maxlength:"16",type:"password",placeholder:"密码"},domProps:{value:e.log_password},on:{input:function(t){t.target.composing||(e.log_password=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"clarify"},[s("el-checkbox",{model:{value:e.remember,callback:function(t){e.remember=t},expression:"remember"}}),e._v(" "),s("span",{staticClass:"remember"},[e._v(" 记住我 ")]),e._v(" "),s("span",{staticClass:"login-problem"},[e._v("登录遇到问题?")])],1),e._v(" "),s("div",{staticClass:"button"},[s("el-button",{staticClass:"login-button",attrs:{type:"info",size:"large"},on:{click:e._login}},[e._v("登 录")])],1),e._v(" "),e._m(0),e._v(" "),s("div",{staticClass:"other-icons"},e._l(4,function(t){return s("svg",{staticClass:"icon icons",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":e.login_icon_hrefs[t]}})])}))]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:!e.isLog,expression:"!isLog"}],staticClass:"el-class",class:{"move-lvzu":!e.isLog}},[s("div",{staticClass:"register-input"},[s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-nicheng"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.register_nickname,expression:"register_nickname"}],staticClass:"us-pd-input",attrs:{maxlength:"16",spellcheck:"false",placeholder:"你的昵称"},domProps:{value:e.register_nickname},on:{input:function(t){t.target.composing||(e.register_nickname=t.target.value)}}})]),e._v(" "),s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-shouji"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.register_username,expression:"register_username"}],staticClass:"us-pd-input",attrs:{maxlength:"11",spellcheck:"false",placeholder:"手机号"},domProps:{value:e.register_username},on:{blur:e._verify,input:function(t){t.target.composing||(e.register_username=t.target.value)}}})]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.verify_code_show,expression:"verify_code_show"}],staticClass:"us-pw-input-pre",class:{"move-lvzu-2":e.verify_code_show}},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-yanzhengma"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.register_verifycode,expression:"register_verifycode"}],staticClass:"us-pd-input",staticStyle:{width:"100px",float:"left","margin-left":"8px"},attrs:{maxlength:"6",type:"text",spellcheck:"false",placeholder:"验证码"},domProps:{value:e.register_verifycode},on:{input:function(t){t.target.composing||(e.register_verifycode=t.target.value)}}}),e._v(" "),s("el-button",{staticClass:"get-verifycode",attrs:{type:"info"},on:{click:e._getVerifyCode}},[e._v("获取验证码")])],1),e._v(" "),s("div",{staticClass:"us-pw-input-pre"},[s("svg",{staticClass:"icon bef-icon",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":"#icon-mima1"}})]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.register_password,expression:"register_password"}],staticClass:"us-pd-input",attrs:{maxlength:"22",type:"password",spellcheck:"false",placeholder:"密码"},domProps:{value:e.register_password},on:{input:function(t){t.target.composing||(e.register_password=t.target.value)}}})])]),e._v(" "),s("div",{attrs:{id:"after-move"}},[s("div",{staticClass:"button"},[s("el-button",{staticClass:"login-button",attrs:{id:"reg_but",type:"info",size:"large"},on:{click:e._register}},[e._v("注 册")])],1),e._v(" "),e._m(1),e._v(" "),e._m(2),e._v(" "),s("div",{staticClass:"other-icons"},e._l(4,function(t){return s("svg",{staticClass:"icon icons",attrs:{"aria-hidden":"true"}},[s("use",{attrs:{"xlink:href":e.register_icon_hrefs[t]}})])}))])])])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"others"},[s("h6",{staticClass:"social-text"},[e._v("社交账号登录")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"sign-up-msg"},[e._v("点击 “注册” 即表示您同意并愿意遵守"),s("br"),e._v(" "),s("a",{staticStyle:{color:"#58B7FF"},attrs:{href:"#"}},[e._v("用户协议")]),e._v("和\n      "),s("a",{staticStyle:{color:"#58B7FF"},attrs:{href:"#"}},[e._v("隐私政策")]),e._v("。\n    ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"others"},[s("h6",{staticClass:"social-text"},[e._v("社交账号注册")])])}]}},263:function(e,t){}},[196]);
//# sourceMappingURL=app.a66425df37d85302ae8a.js.map