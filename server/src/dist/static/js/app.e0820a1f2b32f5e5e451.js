webpackJsonp([1],{"/Nz5":function(e,t){},"3fX7":function(e,t){},"5oFX":function(e,t){},"7zck":function(e,t){},JNcj:function(e,t){},KUpA:function(e,t){},Kizi:function(e,t){},MJH3:function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=r("7+uW"),n=r("ESwS"),a=r.n(n),o={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"nav"},[r("v-app-bar",{attrs:{fixed:"",dark:"",src:"https://media.gettyimages.com/photos/man-playing-guitar-on-stage-picture-id820375234?s=2048x2048"}},[r("v-toolbar-title",[r("router-link",{staticClass:"logo",attrs:{tag:"span",to:{name:"songs"}}},[e._v("GuitarTabs\n        ")])],1),e._v(" "),r("v-btn",{staticClass:"ml-4",attrs:{text:"",to:{name:"songs"}}},[e._v("\n      Browse\n      "),r("v-icon",{staticClass:"ml-2"},[e._v("mdi-format-align-left")])],1),e._v(" "),r("v-spacer"),e._v(" "),e.$store.state.isUserLoggedIn?e._e():r("v-btn",{attrs:{text:"",to:{name:"login"}}},[e._v("\n      Login\n      "),r("v-icon",[e._v("mdi-account")])],1),e._v(" "),e.$store.state.isUserLoggedIn?e._e():r("v-btn",{attrs:{text:"",to:{name:"register"}}},[e._v("\n      Sign Up\n      "),r("v-icon")],1),e._v(" "),e.$store.state.isUserLoggedIn?r("v-btn",{attrs:{text:""},on:{click:e.logout}},[e._v("\n      Log Out\n      "),r("v-icon",[e._v("mdi-chevron-right")])],1):e._e()],1)],1)},staticRenderFns:[]};var i={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-footer",{attrs:{dark:"",color:"grey darken-2"}},[r("v-row",{staticClass:"mt-3",attrs:{justify:"center"}},[e._v("\n    GuitarTabs • Vue\n  ")]),e._v(" "),r("v-col",{attrs:{cols:"12"}},[r("v-divider")],1),e._v(" "),r("v-row",{attrs:{justify:"center"}},[r("v-btn",{attrs:{icon:"",href:"https://www.instagram.com",target:"_blank"}},[r("v-icon",[e._v("mdi-instagram")])],1),e._v(" "),r("v-btn",{attrs:{icon:"",href:"https://www.facebook.com",target:"_blank"}},[r("v-icon",[e._v("mdi-facebook")])],1),e._v(" "),r("v-btn",{attrs:{icon:"",href:"https://www.youtube.com",target:"_blank"}},[r("v-icon",[e._v("mdi-youtube")])],1)],1)],1)},staticRenderFns:[]};var l={name:"App",components:{PageHeader:r("VU/8")({methods:{logout:function(){this.$store.dispatch("setToken",null),this.$store.dispatch("setToken",null),this.$router.push({name:"songs"})}}},o,!1,function(e){r("JNcj")},"data-v-046966c7",null).exports,PageFooter:r("VU/8")(null,i,!1,function(e){r("5oFX")},"data-v-8d37fe7a",null).exports}},c={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("v-app",[t("PageHeader"),this._v(" "),t("v-container",[t("router-view")],1),this._v(" "),t("PageFooter")],1)],1)},staticRenderFns:[]};var u=r("VU/8")(l,c,!1,function(e){r("b04p")},null,null).exports,d=r("5/be"),v=r("/ocq"),m=r("Xxa5"),p=r.n(m),g=r("exGp"),f=r.n(g),b=r("mtWM"),h=r.n(b),_=function(){return h.a.create({baseURL:"http://localhost:8081/"})},x=function(e){return _().post("register",e)},w=function(e){return _().post("login",e)},y=r("+cKO"),$={validations:{email:{required:y.required,email:y.email},password:{required:y.required,minLength:Object(y.minLength)(8)}},data:function(){return{email:"",password:"",error:null}},computed:{emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.email&&e.push("Must be valid e-mail"),!this.$v.email.required&&e.push("E-mail is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.minLength&&e.push("Must be minimum of 8 characters"),!this.$v.password.required&&e.push("Password is required"),e):e}},methods:{register:function(){var e=this;return f()(p.a.mark(function t(){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,x({email:e.email,password:e.password});case 3:r=t.sent,e.$store.dispatch("setToken",r.data.token),e.$store.dispatch("setUser",r.data.token),e.$router.push({name:"songs"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 12:e.$v.$touch();case 13:case"end":return t.stop()}},t,e,[[0,9]])}))()}}},k={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"register"},[r("v-container",[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var s=t.hover;return[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"550",height:"600",elevation:s?10:6}},[r("section",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"mt-12"},[e._v("Registration")])])])],1),e._v(" "),r("v-row",{staticClass:"justify-center"},[r("v-col",{attrs:{cols:"11",sm:"9",md:"8"}},[r("v-card-text",[r("v-form",{ref:"form",staticClass:"px-3",attrs:{autocomplete:"off"}},[r("v-text-field",{attrs:{required:"",type:"email",name:"email",placeholder:"Enter your e-mail account","error-messages":e.emailErrors,"prepend-icon":"mdi-email-outline"},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("br"),e._v(" "),r("v-text-field",{attrs:{type:"password",name:"password",placeholder:"Enter your password","error-messages":e.passwordErrors,"prepend-icon":"mdi-format-text",autocomplete:"new-password"},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"errortext",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{color:"primary"},on:{click:e.register,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}}},[e._v("Register")])],1)],1)],1)],1)],1)]}}])})],1)],1)},staticRenderFns:[]};var C=r("VU/8")($,k,!1,function(e){r("RCJy")},"data-v-399acf0d",null).exports,q={validations:{email:{required:y.required},password:{required:y.required}},data:function(){return{email:"",password:"",error:null}},computed:{emailErrors:function(){var e=[];return this.$v.email.$dirty?(!this.$v.email.required&&e.push("Login is required"),e):e},passwordErrors:function(){var e=[];return this.$v.password.$dirty?(!this.$v.password.required&&e.push("Password is required"),e):e}},methods:{login:function(){var e=this;return f()(p.a.mark(function t(){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,w({email:e.email,password:e.password});case 3:r=t.sent,e.$store.dispatch("setToken",r.data.token),e.$store.dispatch("setUser",r.data.user),e.$router.push({name:"songs"}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),e.error=t.t0.response.data.error;case 12:e.$v.$touch();case 13:case"end":return t.stop()}},t,e,[[0,9]])}))()}}},U={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("v-container",[r("v-hover",{scopedSlots:e._u([{key:"default",fn:function(t){var s=t.hover;return[r("v-card",{staticClass:"mx-auto",attrs:{"max-width":"550",height:"600",elevation:s?10:6}},[r("section",[r("v-col",{attrs:{cols:"12"}},[r("div",{staticClass:"text-center"},[r("h1",{staticClass:"mt-12"},[e._v("Login")])])])],1),e._v(" "),r("v-row",{staticClass:"justify-center"},[r("v-col",{attrs:{cols:"11",sm:"9",md:"8"}},[r("v-card-text",[r("v-form",{ref:"form",staticClass:"px-3"},[r("v-text-field",{attrs:{required:"",type:"email",name:"email",placeholder:"E-mail","error-messages":e.emailErrors,"prepend-icon":"mdi-email-outline"},on:{input:function(t){return e.$v.email.$touch()},blur:function(t){return e.$v.email.$touch()}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),e._v(" "),r("br"),e._v(" "),r("v-text-field",{attrs:{type:"password",name:"password",placeholder:"Password","error-messages":e.passwordErrors,"prepend-icon":"mdi-format-text "},on:{input:function(t){return e.$v.password.$touch()},blur:function(t){return e.$v.password.$touch()}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"errortext",domProps:{innerHTML:e._s(e.error)}}),e._v(" "),r("br"),e._v(" "),r("br"),e._v(" "),r("v-btn",{attrs:{dark:"",color:"primary"},on:{click:e.login,keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.register(t)}}},[e._v("login")])],1)],1)],1)],1)],1)]}}])})],1)],1)},staticRenderFns:[]};var I=r("VU/8")(q,U,!1,function(e){r("3fX7")},"data-v-e7f9659e",null).exports,E=r("Dd8w"),L=r.n(E),R=function(e){return _().get("songs",{params:{search:e}})},S=function(e){return _().get("songs/"+e)},T=function(e){return _().post("songs",e)},F=function(e){return _().put("songs/"+e.id,e)},j={data:function(){return{songs:null}},watch:{"$route.query.search":{immediate:!0,handler:function(e){var t=this;return f()(p.a.mark(function r(){return p.a.wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,R(e);case 2:t.songs=r.sent.data;case 3:case"end":return r.stop()}},r,t)}))()}}}},V={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("panel",{attrs:{title:"Songs",description:"Click the plus button to add songs."}},[r("v-btn",{staticClass:"cyan accent-3",attrs:{slot:"action",to:"/songs/create",fab:"",light:"",right:"",absolute:""},slot:"action"},[r("v-icon",{attrs:{large:""}},[e._v("mdi-plus")])],1),e._v(" "),e._l(e.songs,function(t){return r("div",{key:t.id,staticClass:"song"},[r("v-row",[r("v-col",[r("hr"),e._v(" "),r("div",{staticClass:"song-title mt-12"},[e._v("\n            "+e._s(t.title)+"\n            ")]),e._v(" "),r("div",{staticClass:"song-artist"},[e._v("\n            "+e._s(t.artist)+"\n            ")]),e._v(" "),r("div",{staticClass:"song-genre"},[e._v("\n            "+e._s(t.genre)+"\n            ")]),e._v(" "),r("v-btn",{staticClass:"primary",attrs:{rounded:"",to:{name:"song",params:{songId:t.id}}}},[e._v("\n            View\n            ")])],1),e._v(" "),r("v-col",[r("v-card",{staticClass:"mx-auto",attrs:{raised:"",shaped:"","max-width":"200"}},[r("v-img",{staticClass:"album-image mt-12",attrs:{width:"200",src:t.albumImageUrl}})],1)],1)],1)],1)})],2)},staticRenderFns:[]};var P,A=r("VU/8")(j,V,!1,function(e){r("KUpA")},"data-v-08d1ac3b",null).exports,M=r("M4fF"),O={data:function(){return{search:""}},watch:{search:r.n(M).a.debounce((P=f()(p.a.mark(function e(t){var r;return p.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:r={path:"songs"},""!==this.search&&(r.query={search:this.search}),this.$router.push(r);case 3:case"end":return e.stop()}},e,this)})),function(e){return P.apply(this,arguments)}),500),"$route.query.search":{immediate:!0,handler:function(e){this.search=e}}}},J={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("panel",{attrs:{title:"Search"}},[r("v-text-field",{staticClass:"line",attrs:{clearable:"",placeholder:"Search by title, artist, album or genre","prepend-icon":"mdi-music-note"},model:{value:e.search,callback:function(t){e.search=t},expression:"search"}})],1)},staticRenderFns:[]};var N=r("VU/8")(O,J,!1,function(e){r("yjo2")},"data-v-4aad0184",null).exports,G=r("NYxO"),z={components:{SongsPanel:A,SongsSearchPanel:N},data:function(){return{songs:null}},computed:L()({},Object(G.b)(["isUserLoggedIn"])),mounted:function(){var e=this;return f()(p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,R();case 2:e.songs=t.sent.data;case 3:case"end":return t.stop()}},t,e)}))()}},H={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-row",{staticClass:"justify-center"},[this.isUserLoggedIn?t("v-col",{attrs:{cols:"10",sm:"9",md:"9",lg:"7",xl:"5"}},[t("songs-search-panel"),this._v(" "),t("songs-panel")],1):t("v-col",{attrs:{cols:"10",sm:"9",md:"9",lg:"7",xl:"5"}},[t("panel",{attrs:{title:"Songs",description:"Please login to see your content."}})],1)],1)},staticRenderFns:[]};var Y=r("VU/8")(z,H,!1,function(e){r("MJH3")},"data-v-2344494f",null).exports,K=r("fZjL"),X=r.n(K),D={data:function(){return{song:{title:null,artist:null,genre:null,album:null,albumImageUrl:null,youtubeId:null,lyrics:null,tab:null},error:null,required:function(e){return!!e||"Required"}}},methods:{create:function(){var e=this;return f()(p.a.mark(function t(){return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.error=null,X()(e.song).every(function(t){return!!e.song[t]})){t.next=5;break}return e.error="You must fill in the required fields",t.abrupt("return");case 5:return t.prev=5,t.next=8,T(e.song);case 8:e.$router.push({name:"songs"}),t.next=14;break;case 11:t.prev=11,t.t0=t.catch(5),console.log(t.t0);case 14:case"end":return t.stop()}},t,e,[[5,11]])}))()}}},Z={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"justify-center"},[r("v-col",{attrs:{cols:"11",sm:"9",md:"5",lg:"5",xl:"3"}},[r("panel",{attrs:{title:"Create song"}},[r("v-text-field",{staticClass:"first",attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Title*"},model:{value:e.song.title,callback:function(t){e.$set(e.song,"title",t)},expression:"song.title"}}),e._v(" "),r("v-text-field",{attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Artist*"},model:{value:e.song.artist,callback:function(t){e.$set(e.song,"artist",t)},expression:"song.artist"}}),e._v(" "),r("v-text-field",{attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Genre*"},model:{value:e.song.genre,callback:function(t){e.$set(e.song,"genre",t)},expression:"song.genre"}}),e._v(" "),r("v-text-field",{attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Album*"},model:{value:e.song.album,callback:function(t){e.$set(e.song,"album",t)},expression:"song.album"}}),e._v(" "),r("v-text-field",{attrs:{outlined:"",dense:"",clearable:"",label:"Album Image URL"},model:{value:e.song.albumImageUrl,callback:function(t){e.$set(e.song,"albumImageUrl",t)},expression:"song.albumImageUrl"}}),e._v(" "),r("v-text-field",{attrs:{required:"",outlined:"",dense:"",clearable:"",label:"YouTube ID"},model:{value:e.song.youtubeId,callback:function(t){e.$set(e.song,"youtubeId",t)},expression:"song.youtubeId"}})],1)],1),e._v(" "),r("v-col",{attrs:{cols:"11",sm:"9",md:"7",lg:"7",xl:"6"}},[r("panel",{attrs:{title:"Song structure"}},[r("v-textarea",{staticClass:"second",attrs:{required:"",rules:[e.required],outlined:"",dense:"",label:"Tabs*"},model:{value:e.song.tab,callback:function(t){e.$set(e.song,"tab",t)},expression:"song.tab"}}),e._v(" "),r("v-textarea",{staticClass:"second",attrs:{required:"",rules:[e.required],outlined:"",dense:"",label:"Lyrics*"},model:{value:e.song.lyrics,callback:function(t){e.$set(e.song,"lyrics",t)},expression:"song.lyrics"}})],1),e._v(" "),e.error?r("div",{staticClass:"required-alert-create-song mt-5"},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e(),e._v(" "),r("v-btn",{staticClass:"indigo mt-3",attrs:{dark:""},on:{click:e.create}},[r("v-icon",{staticClass:"mr-2"},[e._v("mdi-music")]),e._v("\n            Create song\n        ")],1)],1)],1)},staticRenderFns:[]};var Q=r("VU/8")(D,Z,!1,function(e){r("Kizi")},"data-v-3d32a115",null).exports,W={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("panel",{attrs:{title:"Song details"}},[r("v-row",[r("v-col",[r("v-card",{staticClass:"ml-11 mb-9 mr-9",attrs:{raised:"","max-width":"220","max-height":"250"}},[r("v-img",{staticClass:"album-image mt-12",attrs:{width:"220",height:"250",src:e.song.albumImageUrl}})],1)],1),e._v(" "),r("v-col",{staticClass:"my-auto mr-10"},[r("div",{staticClass:"song-album"},[e._v("\n                  "+e._s(e.song.album)+"\n                ")]),e._v(" "),r("div",{staticClass:"song-title"},[e._v("\n                    "+e._s(e.song.title)+"\n                ")]),e._v(" "),r("br"),e._v(" "),r("div",{staticClass:"song-artist"},[e._v("\n                    "+e._s(e.song.artist)+"\n                ")]),e._v(" "),r("div",{staticClass:"song-genre"},[e._v("\n                    "+e._s(e.song.genre)+"\n                ")]),e._v(" "),r("v-btn",{staticClass:"primary my-3",attrs:{rounded:"",to:{name:"song-edit",params:{songId:e.song.id}}}},[e._v("\n                  Edit\n                ")])],1)],1)],1)],1)},staticRenderFns:[]};var B=r("VU/8")({props:["song"]},W,!1,function(e){r("/Nz5")},"data-v-22003c08",null).exports,ee={render:function(){var e=this.$createElement,t=this._self._c||e;return t("panel",{attrs:{title:"YouTube video"}},[t("v-row",[t("v-col",[t("youtube",{attrs:{"video-id":this.youtubeId,"player-width":"500","player-height":"303"}})],1)],1)],1)},staticRenderFns:[]};var te=r("VU/8")({props:["youtubeId"]},ee,!1,function(e){r("S84r")},"data-v-45274e24",null).exports,re={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("panel",{attrs:{title:"Lyrics"}},[r("v-row",[r("v-col",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.song.lyrics,expression:"song.lyrics"}],attrs:{readonly:""},domProps:{value:e.song.lyrics},on:{input:function(t){t.target.composing||e.$set(e.song,"lyrics",t.target.value)}}})])],1)],1)},staticRenderFns:[]};var se=r("VU/8")({props:["song"]},re,!1,function(e){r("fJAd")},"data-v-d4f3d978",null).exports,ne={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("panel",{attrs:{title:"Tabs"}},[r("v-row",[r("v-col",[r("textarea",{directives:[{name:"model",rawName:"v-model",value:e.song.tab,expression:"song.tab"}],attrs:{readonly:""},domProps:{value:e.song.tab},on:{input:function(t){t.target.composing||e.$set(e.song,"tab",t.target.value)}}})])],1)],1)},staticRenderFns:[]};var ae=r("VU/8")({props:["song"]},ne,!1,function(e){r("bZum")},"data-v-08d50b04",null).exports,oe={data:function(){return{song:null}},computed:L()({},Object(G.b)(["isUserLoggedIn","user","route"])),mounted:function(){var e=this;return f()(p.a.mark(function t(){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r=e.route.params.songId,t.next=3,S(r);case 3:e.song=t.sent.data;case 4:case"end":return t.stop()}},t,e)}))()},components:{SongMetadata:B,YouTube:te,Lyrics:se,Tab:ae}},ie={render:function(){var e=this.$createElement,t=this._self._c||e;return t("v-container",[t("v-row",{staticClass:"justify-center"},[t("v-col",{attrs:{cols:"10",sm:"11",md:"11",lg:"6",xl:"6"}},[t("song-metadata",{attrs:{song:this.song}})],1),this._v(" "),t("v-col",{attrs:{cols:"10",sm:"11",md:"11",lg:"6",xl:"6"}},[t("you-tube",{attrs:{youtubeId:this.song.youtubeId}})],1),this._v(" "),t("v-col",{attrs:{cols:"10",sm:"11",md:"11",lg:"7",xl:"7"}},[t("tab",{attrs:{song:this.song}})],1),this._v(" "),t("v-col",{attrs:{cols:"10",sm:"11",md:"11",lg:"5",xl:"5"}},[t("lyrics",{attrs:{song:this.song}})],1)],1)],1)},staticRenderFns:[]};var le=r("VU/8")(oe,ie,!1,function(e){r("zxq8")},"data-v-72d586e2",null).exports,ce={data:function(){return{song:{title:null,artist:null,genre:null,album:null,albumImageUrl:null,youtubeId:null,lyrics:null,tab:null},error:null,required:function(e){return!!e||"Required."}}},methods:{save:function(){var e=this;return f()(p.a.mark(function t(){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(e.error=null,X()(e.song).every(function(t){return!!e.song[t]})){t.next=5;break}return e.error="Please fill in all the required fields",t.abrupt("return");case 5:return r=e.$store.state.route.params.songId,t.prev=6,t.next=9,F(e.song);case 9:e.$router.push({name:"song",params:{songId:r}}),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(6),console.log(t.t0);case 15:case"end":return t.stop()}},t,e,[[6,12]])}))()}},mounted:function(){var e=this;return f()(p.a.mark(function t(){var r;return p.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,r=e.$store.state.route.params.songId,t.next=4,S(r);case 4:e.song=t.sent.data,t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.log(t.t0);case 10:case"end":return t.stop()}},t,e,[[0,7]])}))()}},ue={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-row",{staticClass:"justify-center"},[r("v-col",{attrs:{cols:"11",sm:"9",md:"5",lg:"5",xl:"3"}},[r("panel",{attrs:{title:"Edit song"}},[r("v-text-field",{staticClass:"first",attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Title*"},model:{value:e.song.title,callback:function(t){e.$set(e.song,"title",t)},expression:"song.title"}}),e._v(" "),r("v-text-field",{attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Artist*"},model:{value:e.song.artist,callback:function(t){e.$set(e.song,"artist",t)},expression:"song.artist"}}),e._v(" "),r("v-text-field",{attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Genre*"},model:{value:e.song.genre,callback:function(t){e.$set(e.song,"genre",t)},expression:"song.genre"}}),e._v(" "),r("v-text-field",{attrs:{required:"",rules:[e.required],outlined:"",dense:"",clearable:"",label:"Album*"},model:{value:e.song.album,callback:function(t){e.$set(e.song,"album",t)},expression:"song.album"}}),e._v(" "),r("v-text-field",{attrs:{outlined:"",dense:"",clearable:"",label:"Album Image URL"},model:{value:e.song.albumImageUrl,callback:function(t){e.$set(e.song,"albumImageUrl",t)},expression:"song.albumImageUrl"}}),e._v(" "),r("v-text-field",{attrs:{required:"",outlined:"",dense:"",clearable:"",label:"YouTube ID"},model:{value:e.song.youtubeId,callback:function(t){e.$set(e.song,"youtubeId",t)},expression:"song.youtubeId"}})],1)],1),e._v(" "),r("v-col",{attrs:{cols:"11",sm:"9",md:"7",lg:"7",xl:"6"}},[r("panel",{attrs:{title:"Song structure"}},[r("v-textarea",{staticClass:"second",attrs:{required:"",rules:[e.required],outlined:"",dense:"",label:"Tabs*"},model:{value:e.song.tab,callback:function(t){e.$set(e.song,"tab",t)},expression:"song.tab"}}),e._v(" "),r("v-textarea",{staticClass:"second",attrs:{required:"",rules:[e.required],outlined:"",dense:"",label:"Lyrics*"},model:{value:e.song.lyrics,callback:function(t){e.$set(e.song,"lyrics",t)},expression:"song.lyrics"}})],1),e._v(" "),e.error?r("div",{staticClass:"required-alert-create-song"},[e._v("\n            "+e._s(e.error)+"\n        ")]):e._e(),e._v(" "),r("v-btn",{staticClass:"indigo",attrs:{dark:""},on:{click:e.save}},[r("v-icon",{staticClass:"mr-2"},[e._v("mdi-content-save-all")]),e._v("\n            Save song\n        ")],1)],1)],1)},staticRenderFns:[]};var de=r("VU/8")(ce,ue,!1,function(e){r("oGob")},"data-v-763160a3",null).exports;s.default.use(v.a);var ve=new v.a({routes:[{path:"/register",name:"register",component:C},{path:"/login",name:"login",component:I},{path:"/songs",name:"songs",component:Y},{path:"/songs/create",name:"songs-create",component:Q},{path:"/songs/:songId",name:"song",component:le},{path:"/songs/:songId/edit",name:"song-edit",component:de},{path:"*",redirect:"songs"}]}),me=(r("csSS"),r("9JMe")),pe=r("424j");s.default.use(G.a);var ge=new G.a.Store({strict:!0,plugins:[Object(pe.a)()],state:{token:null,user:null,isUserLoggedIn:!1},mutations:{setToken:function(e,t){e.token=t,e.isUserLoggedIn=!!t},setUser:function(e,t){e.user=t}},actions:{setToken:function(e,t){(0,e.commit)("setToken",t)},setUser:function(e,t){(0,e.commit)("setUser",t)}}}),fe=r("3EgV"),be=r.n(fe),he=(r("7zck"),{render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"panel"},[r("v-card",{attrs:{color:"grey lighten-3"}},[r("v-toolbar",{attrs:{dense:"",dark:"",color:"indigo darken-1"}},[r("v-toolbar-title",[e._v(e._s(e.title)+"\n              ")]),e._v(" "),e._t("action")],2),e._v(" "),r("div",[e._t("default",[r("br"),e._v("\n                  No slot content defined.\n                  "),r("br"),e._v("\n                  "+e._s(e.description)+"\n                  "),r("br"),e._v(" "),r("br")])],2)],1)],1)},staticRenderFns:[]});var _e=r("VU/8")({props:["title","description"]},he,!1,function(e){r("Q0GY")},"data-v-872b9f38",null).exports;s.default.config.productionTip=!1,s.default.use(d.a),s.default.use(be.a),s.default.use(a.a),s.default.component("panel",_e),Object(me.sync)(ge,ve),new s.default({el:"#app",vuetify:new be.a({}),router:ve,store:ge,components:{App:u},template:"<App/>",render:function(e){return e(u)}})},Q0GY:function(e,t){},RCJy:function(e,t){},S84r:function(e,t){},b04p:function(e,t){},bZum:function(e,t){},csSS:function(e,t){},fJAd:function(e,t){},oGob:function(e,t){},yjo2:function(e,t){},zxq8:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.e0820a1f2b32f5e5e451.js.map