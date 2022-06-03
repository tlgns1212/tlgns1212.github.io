"use strict";(self["webpackChunktest03"]=self["webpackChunktest03"]||[]).push([[920],{2102:function(t,e,i){i(6699),i(7273);var o=i(144),n=i(6290),a=i(4589);const s=["sm","md","lg","xl"],l=(()=>s.reduce(((t,e)=>(t[e]={type:[Boolean,String,Number],default:!1},t)),{}))(),r=(()=>s.reduce(((t,e)=>(t["offset"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),c=(()=>s.reduce(((t,e)=>(t["order"+(0,a.jC)(e)]={type:[String,Number],default:null},t)),{}))(),d={col:Object.keys(l),offset:Object.keys(r),order:Object.keys(c)};function u(t,e,i){let o=t;if(null!=i&&!1!==i){if(e){const i=e.replace(t,"");o+=`-${i}`}return"col"!==t||""!==i&&!0!==i?(o+=`-${i}`,o.toLowerCase()):o.toLowerCase()}}const m=new Map;e["Z"]=o.Z.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...l,offset:{type:[String,Number],default:null},...r,order:{type:[String,Number],default:null},...c,alignSelf:{type:String,default:null,validator:t=>["auto","start","end","center","baseline","stretch"].includes(t)},tag:{type:String,default:"div"}},render(t,{props:e,data:i,children:o,parent:a}){let s="";for(const n in e)s+=String(e[n]);let l=m.get(s);if(!l){let t;for(t in l=[],d)d[t].forEach((i=>{const o=e[i],n=u(t,i,o);n&&l.push(n)}));const i=l.some((t=>t.startsWith("col-")));l.push({col:!i||!e.cols,[`col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),m.set(s,l)}return t(e.tag,(0,n.ZP)(i,{class:l}),o)}})},5920:function(t,e,i){i.r(e),i.d(e,{default:function(){return _}});var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"header-wrap"},[i("ul",{staticClass:"menu1",staticStyle:{"list-style":"none"}},[i("li",{staticClass:"menu"},[i("router-link",{staticStyle:{"text-decoration":"none","box-sizing":"border-box",padding:"10px 20px","background-color":"#c7f9ff",display:"table-cell","font-size":"1.1rem","border-radius":"10px","font-family":"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"},attrs:{to:"/Announce"}},[t._v(" 채용공고 검색")])],1),i("p",{staticStyle:{width:"5%"}}),i("li",{staticClass:"menu"},[i("router-link",{staticStyle:{"text-decoration":"none","box-sizing":"border-box",padding:"10px 20px","background-color":"#c7f9ff",display:"table-cell","font-size":"1.1rem","border-radius":"10px","font-family":"'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif"},attrs:{to:"/CustomAnnounce",onclick:"colorchange()"}},[t._v(" 맞춤 채용공고")])],1)])]),i("div",[i("v-row",{attrs:{align:"center"}},[i("v-col",{staticClass:"d-flex",staticStyle:{position:"relative",left:"8%",width:"100%","margin-right":"15%"}},[i("v-text-field",{staticStyle:{position:"relative","font-size":"1vh","margin-right":"2%",width:"40%"},attrs:{label:"키워드를 검색하시오",dense:""},model:{value:t.keyword,callback:function(e){t.keyword=e},expression:"keyword"}}),i("v-select",{staticStyle:{"margin-right":"2%",width:"40%"},attrs:{items:this.jobMidCD,label:"희망 직군을 고르시오",dense:""},model:{value:t.job_mid_cd,callback:function(e){t.job_mid_cd=e},expression:"job_mid_cd"}}),i("v-select",{staticStyle:{width:"40%"},attrs:{items:this.locStates,label:"희망 지역을 고르시오",dense:""},model:{value:t.loc_cd,callback:function(e){t.loc_cd=e},expression:"loc_cd"}})],1)],1),i("a",{staticClass:"btnSearch btn",staticStyle:{"background-color":"#c7f9ff","margin-bottom":"10px",position:"relative",left:"70%",top:"0px","font-weight":"bolder",width:"20%"},attrs:{href:"javascript:;"},on:{click:t.fnSearch}},[t._v("검색")])],1),i("div",{staticClass:"listWrap"},[i("table",{staticClass:"tbList"},[t._m(0),t._m(1),t._l(this.events.data.jobs.job,(function(e,o){return i("tr",{key:e.id},[i("td",{staticStyle:{"text-align":"center"}},[t._v(t._s(o+1))]),i("td",{staticClass:"txt_left"},[i("p",[t._v(t._s(e.position.title))]),i("v-btn",{attrs:{href:e.url}},[t._v("자세히 보기")]),i("v-btn",{on:{click:function(i){return t.consoleGo(e)}}},[t._v("일정에 추가")])],1),i("td",[t._v(t._s(e.company.detail.name))]),e["expiration-timestamp"]>17e8?i("td",[t._v("상시 채용")]):i("td",[t._v(t._s(t.UnixToDate(e["opening-timestamp"]))+" ~ "+t._s(t.UnixToDate(e["expiration-timestamp"])))])])})),t._e()],2)])])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("colgroup",[i("col",{attrs:{width:"8%"}}),i("col",{attrs:{width:"*"}}),i("col",{attrs:{width:"15%"}}),i("col",{attrs:{width:"15%"}})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("tr",{staticStyle:{"text-align":"center","background-color":"#c6c7c5"}},[i("th",[t._v("no")]),i("th",[t._v("제목")]),i("th",[t._v("아이디")]),i("th",[t._v("날짜")])])}],a=i(6289),s={data:()=>({name:"",details:"",start:"",end:"",color:"red",events:[],keyword:"",loc_cd:"",job_mid_cd:"",jobMidCD:["(16)기획·전략","(14)마케팅·홍보·조사","(3)회계·세무·재무","(5)인사·노무·HRD","(4)총무·법무·사무","(2)IT개발·데이터","(15)디자인","(8)영업·판매·무역","(21)고객상담·TM","(18)구매·자재·물류","(12)상품기획·MD","(7)운전·운송·배송","(10)서비스","(11)생산","(22)건설·건축","(6)의료","(9)연구·R&D","(19)교육","(13)미디어·문화·스포츠","(17)금융·보험","(20)공공·복지"],locStates:["서울(101000)","경기(102000)","광주(103000)","대구(104000)","대전(105000)","부산(106000)","울산(107000)","인천(108000)","강원(109000)","경남(110000)","경북(111000)","전남(112000)","전북(113000)","충북(114000)","충남(115000)","제주(116000)","전국(117000)","세종(118000)"],apiSearch:"api/announcements?",dialog:[!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1,!1]}),mounted(){this.getEvents()},methods:{async getEvents(){this.$axios.get("http://uocnas.kut.ac.kr:8081/api/announcements?keywords=%EA%B0%9C%EB%B0%9C&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2&count=10").then((t=>{this.events=t}))},UnixToDate(t){const e=new Date(1e3*t),i=e.getFullYear(),o=e.getMonth()+1,n=e.getDate(),a=`${i}-${o}-${n}`;return a},async consoleGo(t){t["expiration-timestamp"]>17e8?await a.db.collection("calEvent").add({name:t.company.detail.name+" [상시 모집]",details:t.position.title,start:this.UnixToDate(t["opening-timestamp"]),end:this.UnixToDate(t["opening-timestamp"]),color:"red"}):(await a.db.collection("calEvent").add({name:t.company.detail.name+" [모집 시작일]",details:t.position.title,start:this.UnixToDate(t["opening-timestamp"]),end:this.UnixToDate(t["opening-timestamp"]),color:"green"}),await a.db.collection("calEvent").add({name:t.company.detail.name+" [모집 마감일]",details:t.position.title,start:this.UnixToDate(t["expiration-timestamp"]),end:this.UnixToDate(t["expiration-timestamp"]),color:"red"})),alert("일정에 추가되었습니다."),this.getEvents()},async fnSearch(){this.job_mid_cd=this.job_mid_cd.substr(1,2),")"==this.job_mid_cd[1]&&(this.job_mid_cd=this.job_mid_cd.substr(0,1)),this.$axios.get("api/announcements?keywords="+this.keyword+"&job_type=1&edu_lv=0&loc_cd="+this.loc_cd.substr(3,6)+"&job_mid_cd="+this.job_mid_cd).then((t=>{this.events=t})),await a.db.collection("keyword").add({name:this.keyword}),console.log(this.keyword)},changeColor(){this.$("li").click((function(){$("li").removeClass(),$(this).addClass("on")}))}}},l=s,r=i(1001),c=i(3453),d=i.n(c),u=i(680),m=i(2102),p=i(2877),f=i(5340),h=i(5978),b=(0,r.Z)(l,o,n,!1,null,null,null),_=b.exports;d()(b,{VBtn:u.Z,VCol:m.Z,VRow:p.Z,VSelect:f.Z,VTextField:h.Z})}}]);
//# sourceMappingURL=920.2798359d.js.map