"use strict";(self["webpackChunktest03"]=self["webpackChunktest03"]||[]).push([[22],{4980:function(t,e,n){n.r(e),n.d(e,{default:function(){return Z}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height"},[n("link",{attrs:{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}}),n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.StartNewEvent}},[t._v(" New Event ")]),n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-left ")]),t._v(" 5 "),n("div",[t._v(t._s(this.eventsExample))])],1),n("v-btn",{staticClass:"mr-4",attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1),t.$refs.calendar?n("v-toolbar-title",[t._v(" "+t._s(t.$refs.calendar.title)+" ")]):t._e(),n("v-btn",{on:{click:function(e){t.dialogOpicData=!0}}}),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",i,!1),a),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),n("v-icon",{attrs:{right:""}},[t._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("Month")])],1),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("Week")])],1),n("v-list-item",{on:{click:function(e){t.type="4day"}}},[n("v-list-item-title",[t._v("4 days")])],1),n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("Day")])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-container",[""===this.endEndDrag?n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEvent.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail"},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-text-field",{attrs:{type:"datetime-local",label:"start (required)"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("v-text-field",{attrs:{type:"datetime-local",label:"end (required)"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"color (click to open color menu)"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" Create Event ")])],1):n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEventDrag.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)",value:"type"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail",value:""},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" Create Event ")])],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogOpicData,callback:function(e){t.dialogOpicData=e},expression:"dialogOpicData"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.EndDialogOpic.apply(null,arguments)}}},[n("v-select",{staticStyle:{"margin-right":"2%",width:"40%"},attrs:{items:this.OpicSuccessed,label:"합격 여부를 고르시오",dense:""},model:{value:t.OpicSuccess,callback:function(e){t.OpicSuccess=e},expression:"OpicSuccess"}}),"합격"==this.OpicSuccess?n("v-select",{staticStyle:{"margin-right":"2%",width:"40%"},attrs:{items:this.OpicTypes,label:"취득한 자격증의 등급을 고르시오",dense:""},model:{value:t.OpicType,callback:function(e){t.OpicType=e},expression:"OpicType"}}):t._e(),""!=this.OpicType?n("v-text-field",{attrs:{type:"text",label:"공부한 시간(일)을 작성하시오"},model:{value:t.OpicTakenTime,callback:function(e){t.OpicTakenTime=e},expression:"OpicTakenTime"}}):t._e(),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialogOpicData=!1}}},[t._v(" 저장하기 ")])],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type,"event-ripple":!1},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,"mousedown:time":t.startTime,"touchstart:time":t.startTime,"touchmove:time":t.mouseMove,"mousemove:time":t.mouseMove,"touchend:time":t.endDrag,"mouseup:time":t.endDrag},nativeOn:{mouseleave:function(e){return t.cancelDrag.apply(null,arguments)}},scopedSlots:t._u([{key:"event",fn:function(e){var a=e.event,i=e.timed,s=e.eventSummary;return[n("div",{staticClass:"v-event-draggable",domProps:{innerHTML:t._s(s())}}),i?n("div",{staticClass:"v-event-drag-bottom",on:{mousedown:function(e){return e.stopPropagation(),t.extendBottom(a)}}}):t._e()]}}]),model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteEvent(t.selectedEvent.id)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),n("v-spacer")],1),n("v-card-text",[t.currentlyEditing!==t.selectedEvent.id?n("form",[t._v(" "+t._s(t.selectedEvent.details)+" ")]):n("form",[n("textarea-autosize",{staticStyle:{width:"100%"},attrs:{type:"text","min-height":100,placeholder:"add note"},model:{value:t.selectedEvent.details,callback:function(e){t.$set(t.selectedEvent,"details",e)},expression:"selectedEvent.details"}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v(" Close ")]),t.currentlyEditing!==t.selectedEvent.id?n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.editEvent(t.selectedEvent)}}},[t._v(" Edit ")]):n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.updateEvent(t.selectedEvent)}}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)},i=[],s=n(3824),l={data:()=>({today:(new Date).toISOString().substr(0,10),focus:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},name:null,details:null,start:null,end:null,color:"#1936D2",colors:["#2196F3","#3F51B5","#673AB7","#00BCD4","#4CAF50","#FF9800","#757575"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],eventsExample:[],dialog:!1,dialogOpicData:!1,value:"",ready:!1,startEndDrag:"",endEndDrag:"",dragEvent:null,dragStart:null,createEvent:null,createStart:null,extendOriginal:null,OpicSuccess:"",OpicSuccessed:["합격","불합격"],OpicType:"",OpicTypes:["AL","IH","IM3","IM2","IM1","IL","NH","NM","NL"],OpicTakenTime:""}),computed:{title(){const{start:t,end:e}=this;if(!t||!e)return"";const n=this.monthFormatter(t),a=this.monthFormatter(e),i=n===a?"":a,s=t.year,l=e.year,r=s===l?"":l,o=t.day+this.nth(t.day),c=e.day+this.nth(e.day);switch(this.type){case"month":return`${n} ${s}`;case"week":case"4day":return`${n} ${o} ${s} - ${i} ${c} ${r}`;case"day":return`${n} ${o} ${s}`}return""},monthFormatter(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}},mounted(){this.getEvents(),console.log("Before1"),this.$axios.get("/api/announcements?keywords=개발&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2&count=50").then((t=>{this.eventsExample=t})),console.log("Before2")},methods:{async getEvents(){let t=await s.db.collection("calEvent").get(),e=[];t.forEach((t=>{let n=t.data();n.id=t.id,e.push(n)})),this.events=e},async addEvent(){this.name&&this.start&&this.end?(await s.db.collection("calEvent").add({name:this.name,details:this.details,start:this.start,end:this.end,color:this.color}),this.getEvents(),this.name="",this.details="",this.endEndDrag="",this.startEndDrag="",this.start="",this.end="",this.color="#1936D2"):alert("Name, Start and End date are required")},async addEventDrag(){this.name?(await s.db.collection("calEvent").add({name:this.name,details:this.details,start:this.startEndDrag,end:this.endEndDrag,color:this.color}),this.getEvents(),this.name="",this.details="",this.endEndDrag="",this.startEndDrag="",this.start="",this.end="",this.color="#1936D2"):alert("Name is required")},async updateEvent(t){await s.db.collection("calEvent").doc(this.currentlyEditing).update({details:t.details}),this.selectedOpen=!1,this.currentlyEditing=null},async deleteEvent(t){"오픽Opic 합격자 발표일"==t.details?(await s.db.collection("calEvent").doc(t).delete(),this.selectedOpen=!1,this.getEvents(),this.dialogOpicData=!0):(await s.db.collection("calEvent").doc(t).delete(),this.selectedOpen=!1,this.getEvents())},getEventColor(t){return t.color},viewDay({date:t}){this.focus=t,this.type="day"},setToday(){this.focus=""},prev(){this.$refs.calendar.prev()},next(){this.$refs.calendar.next()},editEvent(t){this.currentlyEditing=t.id},showEvent({nativeEvent:t,event:e}){const n=()=>{this.selectedEvent=e,this.selectedElement=t.target,requestAnimationFrame((()=>requestAnimationFrame((()=>this.selectedOpen=!0))))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((()=>requestAnimationFrame((()=>n()))))):n(),t.stopPropagation()},updateRange({start:t,end:e}){const n=[],a=new Date(`${t.date}T00:00:00`),i=new Date(`${e.date}T23:59:59`),s=(i.getTime()-a.getTime())/864e5,l=this.rnd(s,s+20);for(let r=0;r<l;r++){const t=0===this.rnd(0,3),e=this.rnd(a.getTime(),i.getTime()),s=new Date(e-e%9e5),l=9e5*this.rnd(2,t?288:8),r=new Date(s.getTime()+l);n.push({name:this.names[this.rnd(0,this.names.length-1)],start:s,end:r,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!t})}this.events=n},rnd(t,e){return Math.floor((e-t+1)*Math.random())+t},rndElement(t){return t[this.rnd(0,t.length-1)]},startDrag({event:t,timed:e}){t&&e&&(this.dragEvent=t,this.dragTime=null,this.extendOriginal=null)},startTime(t){const e=this.toTime(t);if(this.startEndDrag=t.date+"T"+t.time,this.dragEvent&&null===this.dragTime){const t=this.dragEvent.start;this.dragTime=e-t}else this.createStart=this.roundTime(e),this.createEvent={name:`Event #${this.events.length}`,color:this.rndElement(this.colors),start:this.createStart,end:this.createStart,timed:!0},this.isDown=!0,this.events.push(this.createEvent)},extendBottom(t){this.createEvent=t,this.createStart=t.start,this.extendOriginal=t.end},mouseMove(t){const e=this.toTime(t);if(this.dragEvent&&null!==this.dragTime){const t=this.dragEvent.start,n=this.dragEvent.end,a=n-t,i=e-this.dragTime,s=this.roundTime(i),l=s+a;this.dragEvent.start=s,this.dragEvent.end=l}else if(this.createEvent&&null!==this.createStart){const t=this.roundTime(e,!1),n=Math.min(t,this.createStart),a=Math.max(t,this.createStart);this.createEvent.start=n,this.createEvent.end=a}},endDrag(t){1==this.isDown&&(this.isDown=!1,this.dialog=!0,this.endEndDrag=t.date+"T"+t.time,this.color=this.createEvent.color),this.events.pop(),this.dragTime=null,this.dragEvent=null,this.createEvent=null,this.createStart=null,this.extendOriginal=null},cancelDrag(){if(this.createEvent)if(this.extendOriginal)this.createEvent.end=this.extendOriginal;else{const t=this.events.indexOf(this.createEvent);-1!==t&&this.events.splice(t,1)}this.createEvent=null,this.createStart=null,this.dragTime=null,this.dragEvent=null},roundTime(t,e=!0){const n=5,a=60*n*1e3;return e?t-t%a:t+(a-t%a)},toTime(t){return new Date(t.year,t.month-1,t.day,t.hour,t.minute).getTime()},StartNewEvent(){this.dialog=!0,this.endEndDrag=""},EndDialogOpic(){this.dialogOpicData=!1,this.OpicSuccess="",this.OpicType="",this.OpicTakenTime=""}}},r=l,o=n(1001),c=n(3453),d=n.n(c),v=n(680),h=n(8538),u=n(3237),m=n(7118),p=n(2102),g=n(9846),E=n(7336),y=n(6232),f=n(6428),b=n(6816),x=n(7620),T=n(2786),k=n(6768),D=n(2877),O=n(5340),w=n(3385),_=n(9762),S=n(5978),C=n(5218),V=n(7921),$=(0,o.Z)(r,a,i,!1,null,null,null),Z=$.exports;d()($,{VBtn:v.Z,VCalendar:h.Z,VCard:u.Z,VCardActions:m.h7,VCardText:m.ZB,VCol:p.Z,VContainer:g.Z,VDialog:E.Z,VForm:y.Z,VIcon:f.Z,VList:b.Z,VListItem:x.Z,VListItemTitle:T.V9,VMenu:k.Z,VRow:D.Z,VSelect:O.Z,VSheet:w.Z,VSpacer:_.Z,VTextField:S.Z,VToolbar:C.Z,VToolbarTitle:V.qW})}}]);
//# sourceMappingURL=22.b83b4ad0.js.map