"use strict";(self["webpackChunktest03"]=self["webpackChunktest03"]||[]).push([[72],{2102:function(t,e,n){var r=n(3796),o=n(4367),a=(n(1539),n(9653),n(7941),n(4916),n(5306),n(1532),n(8783),n(3948),n(6699),n(4747),n(6755),n(7273),n(144)),i=n(6290),c=n(4589),s=["sm","md","lg","xl"],l=function(){return s.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{})}(),d=function(){return s.reduce((function(t,e){return t["offset"+(0,c.jC)(e)]={type:[String,Number],default:null},t}),{})}(),u=function(){return s.reduce((function(t,e){return t["order"+(0,c.jC)(e)]={type:[String,Number],default:null},t}),{})}(),f={col:Object.keys(l),offset:Object.keys(d),order:Object.keys(u)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n),r.toLowerCase()):r.toLowerCase()}}var p=new Map;e["Z"]=a.Z.extend({name:"v-col",functional:!0,props:(0,o.Z)((0,o.Z)((0,o.Z)((0,o.Z)({cols:{type:[Boolean,String,Number],default:!1}},l),{},{offset:{type:[String,Number],default:null}},d),{},{order:{type:[String,Number],default:null}},u),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,o=e.data,a=e.children,c=(e.parent,"");for(var s in n)c+=String(n[s]);var l=p.get(c);return l||function(){var t,e;for(e in l=[],f)f[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&l.push(o)}));var o=l.some((function(t){return t.startsWith("col-")}));l.push((t={col:!o||!n.cols},(0,r.Z)(t,"col-".concat(n.cols),n.cols),(0,r.Z)(t,"offset-".concat(n.offset),n.offset),(0,r.Z)(t,"order-".concat(n.order),n.order),(0,r.Z)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),p.set(c,l)}(),t(n.tag,(0,i.ZP)(o,{class:l}),a)}})},3072:function(t,e,n){n.r(e),n.d(e,{default:function(){return g}});var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"header-wrap"},[n("ul",{staticClass:"menu1",staticStyle:{"list-style":"none"}},[n("li",{staticClass:"menu"},[n("router-link",{staticStyle:{"text-decoration":"none","box-sizing":"border-box",padding:"10px 20px","background-color":"#c7f9ff",display:"table-cell","font-size":"1.1rem","border-radius":"10px","font-family":"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"},attrs:{to:"/Announce"}},[t._v(" 채용공고 검색")])],1),n("p",{staticStyle:{width:"5%"}}),n("li",{staticClass:"menu"},[n("router-link",{staticStyle:{"text-decoration":"none","box-sizing":"border-box",padding:"10px 20px","background-color":"#c7f9ff",display:"table-cell","font-size":"1.1rem","border-radius":"10px","font-family":"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"},attrs:{to:"/CustomAnnounce",onclick:"colorchange()"}},[t._v(" 맞춤 채용공고")])],1)])]),n("div",[n("v-row",{attrs:{align:"center"}},[n("v-col",{staticClass:"d-flex",staticStyle:{position:"relative",left:"8%",width:"100%","margin-right":"15%"}},[n("v-text-field",{staticStyle:{position:"relative","font-size":"1vh","margin-right":"2%",width:"40%"},attrs:{label:"키워드를 검색하시오",dense:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),n("v-select",{staticStyle:{"margin-right":"2%",width:"40%"},attrs:{items:this.jobMidCD,label:"희망 직군을 고르시오",dense:""},model:{value:t.job_mid_cd,callback:function(e){t.job_mid_cd=e},expression:"job_mid_cd"}}),n("v-select",{staticStyle:{width:"40%"},attrs:{items:this.locStates,label:"희망 지역을 고르시오",dense:""},model:{value:t.loc_cd,callback:function(e){t.loc_cd=e},expression:"loc_cd"}})],1)],1),n("a",{staticClass:"btnSearch btn",staticStyle:{"background-color":"#c7f9ff","margin-bottom":"10px",position:"relative",left:"70%","font-weight":"bolder",width:"20%"},attrs:{href:"javascript:;"},on:{click:t.fnSearch}},[t._v("검색")])],1),n("div",{staticClass:"listWrap"},[n("table",{staticClass:"tbList"},[t._m(0),t._m(1),t._l(this.events.data.jobs.job,(function(e,r){return n("tr",{key:e.id},[n("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(r+1))]),n("td",{staticClass:"txt_left"},[n("p",[t._v(t._s(e.position.title))]),n("v-btn",{attrs:{href:e.url}},[t._v("자세히 보기")]),n("v-btn",{on:{click:function(n){return t.consoleGo(e)}}},[t._v("일정에 추가")])],1),n("td",[t._v(t._s(e.company.detail.name))]),e["expiration-timestamp"]>17e8?n("td",[t._v("상시 채용")]):n("td",[t._v(t._s(t.UnixToDate(e["opening-timestamp"]))+" ~ "+t._s(t.UnixToDate(e["expiration-timestamp"])))])])})),t._e()],2)])])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("colgroup",[n("col",{attrs:{width:"8%"}}),n("col",{attrs:{width:"*"}}),n("col",{attrs:{width:"15%"}}),n("col",{attrs:{width:"15%"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticStyle:{"text-align":"center","background-color":"#c6c7c5"}},[n("th",[t._v("no")]),n("th",[t._v("제목")]),n("th",[t._v("아이디")]),n("th",[t._v("날짜")])])}],a=n(6198),i=(n(2222),n(8309),n(5666),n(6289)),c={data:function(){return{name:"",details:"",start:"",end:"",color:"red",events:[],keyword:"",loc_cd:"",job_mid_cd:"",jobMidCD:["(16)기획·전략","(14)마케팅·홍보·조사","(3)회계·세무·재무","(5)인사·노무·HRD","(4)총무·법무·사무","(2)IT개발·데이터","(15)디자인","(8)영업·판매·무역","(21)고객상담·TM","(18)구매·자재·물류","(12)상품기획·MD","(7)운전·운송·배송","(10)서비스","(11)생산","(22)건설·건축","(6)의료","(9)연구·R&D","(19)교육","(13)미디어·문화·스포츠","(17)금융·보험","(20)공공·복지"],locStates:["서울(101000)","경기(102000)","광주(103000)","대구(104000)","대전(105000)","부산(106000)","울산(107000)","인천(108000)","강원(109000)","경남(110000)","경북(111000)","전남(112000)","전북(113000)","충북(114000)","충남(115000)","제주(116000)","전국(117000)","세종(118000)"],apiSearch:"api/announcements?",dialog:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}},mounted:function(){this.getEvents()},methods:{getEvents:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.$axios.get("api/announcements?keywords=개발&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2").then((function(e){t.events=e}));case 1:case"end":return e.stop()}}),e)})))()},UnixToDate:function(t){var e=new Date(1e3*t),n=e.getFullYear(),r=e.getMonth()+1,o=e.getDate(),a="".concat(n,"-").concat(r,"-").concat(o);return a},consoleGo:function(t){var e=this;return(0,a.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!(t["expiration-timestamp"]>17e8)){n.next=5;break}return n.next=3,i.db.collection("calEvent").add({name:t.company.detail.name+" [상시 모집]",details:t.position.title,start:e.UnixToDate(t["opening-timestamp"]),end:e.UnixToDate(t["opening-timestamp"]),color:"red"});case 3:n.next=9;break;case 5:return n.next=7,i.db.collection("calEvent").add({name:t.company.detail.name+" [모집 시작일]",details:t.position.title,start:e.UnixToDate(t["opening-timestamp"]),end:e.UnixToDate(t["opening-timestamp"]),color:"green"});case 7:return n.next=9,i.db.collection("calEvent").add({name:t.company.detail.name+" [모집 마감일]",details:t.position.title,start:e.UnixToDate(t["expiration-timestamp"]),end:e.UnixToDate(t["expiration-timestamp"]),color:"red"});case 9:alert("일정에 추가되었습니다."),e.getEvents();case 11:case"end":return n.stop()}}),n)})))()},fnSearch:function(){var t=this;return(0,a.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.job_mid_cd=t.job_mid_cd.substr(1,2),")"==t.job_mid_cd[1]&&(t.job_mid_cd=t.job_mid_cd.substr(0,1)),t.$axios.get("api/announcements?keywords="+t.keyword+"&job_type=1&edu_lv=0&loc_cd="+t.loc_cd.substr(3,6)+"&job_mid_cd="+t.job_mid_cd).then((function(e){t.events=e})),e.next=5,i.db.collection("keyword").add({name:t.keyword});case 5:console.log(t.keyword);case 6:case"end":return e.stop()}}),e)})))()},changeColor:function(){this.$("li").click((function(){$("li").removeClass(),$(this).addClass("on")}))}}},s=c,l=n(1001),d=n(3453),u=n.n(d),f=n(680),m=n(2102),p=n(2877),v=n(5340),b=n(5978),_=(0,l.Z)(s,r,o,!1,null,null,null),g=_.exports;u()(_,{VBtn:f.Z,VCol:m.Z,VRow:p.Z,VSelect:v.Z,VTextField:b.Z})}}]);
//# sourceMappingURL=72-legacy.44e0b9ef.js.map