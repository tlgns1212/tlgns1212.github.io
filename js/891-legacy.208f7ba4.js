"use strict";(self["webpackChunktest03"]=self["webpackChunktest03"]||[]).push([[891],{8272:function(t,e,n){n.r(e),n.d(e,{default:function(){return F}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"fill-height"},[n("link",{attrs:{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}}),n("v-col",[n("v-sheet",{attrs:{height:"64"}},[n("v-toolbar",{attrs:{flat:""}},[n("v-btn",{staticClass:"mr-4",attrs:{color:"primary"},on:{click:t.StartNewEvent}},[t._v(" New Event ")]),n("v-btn",{staticClass:"mr-4",attrs:{outlined:"",color:"grey darken-2"},on:{click:t.setToday}},[t._v(" Today ")]),n("v-btn",{attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.prev}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-left ")]),t._v(" 4 "),n("div",[t._v(t._s(this.eventsExample))])],1),n("v-btn",{staticClass:"mr-4",attrs:{fab:"",text:"",small:"",color:"grey darken-2"},on:{click:t.next}},[n("v-icon",{attrs:{small:""}},[t._v(" mdi-chevron-right ")])],1),t.$refs.calendar?n("v-toolbar-title",[t._v(" "+t._s(t.$refs.calendar.title)+" ")]):t._e(),n("v-btn",{on:{click:function(e){t.dialogOpicData=!0}}}),n("v-spacer"),n("v-menu",{attrs:{bottom:"",right:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on,i=e.attrs;return[n("v-btn",t._g(t._b({attrs:{outlined:"",color:"grey darken-2"}},"v-btn",i,!1),a),[n("span",[t._v(t._s(t.typeToLabel[t.type]))]),n("v-icon",{attrs:{right:""}},[t._v(" mdi-menu-down ")])],1)]}}])},[n("v-list",[n("v-list-item",{on:{click:function(e){t.type="month"}}},[n("v-list-item-title",[t._v("Month")])],1),n("v-list-item",{on:{click:function(e){t.type="week"}}},[n("v-list-item-title",[t._v("Week")])],1),n("v-list-item",{on:{click:function(e){t.type="4day"}}},[n("v-list-item-title",[t._v("4 days")])],1),n("v-list-item",{on:{click:function(e){t.type="day"}}},[n("v-list-item-title",[t._v("Day")])],1)],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[n("v-card",[n("v-container",[""===this.endEndDrag?n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEvent.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail"},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-text-field",{attrs:{type:"datetime-local",label:"start (required)"},model:{value:t.start,callback:function(e){t.start=e},expression:"start"}}),n("v-text-field",{attrs:{type:"datetime-local",label:"end (required)"},model:{value:t.end,callback:function(e){t.end=e},expression:"end"}}),n("v-text-field",{attrs:{type:"color",label:"color (click to open color menu)"},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" Create Event ")])],1):n("v-form",{on:{submit:function(e){return e.preventDefault(),t.addEventDrag.apply(null,arguments)}}},[n("v-text-field",{attrs:{type:"text",label:"event name (required)",value:"type"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),n("v-text-field",{attrs:{type:"text",label:"detail",value:""},model:{value:t.details,callback:function(e){t.details=e},expression:"details"}}),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" Create Event ")])],1)],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogOpicData,callback:function(e){t.dialogOpicData=e},expression:"dialogOpicData"}},[n("v-card",[n("v-container",[n("v-form",{on:{submit:function(e){return e.preventDefault(),t.EndDialogOpic.apply(null,arguments)}}},[n("v-select",{staticStyle:{"margin-right":"2%",width:"40%"},attrs:{items:this.OpicSuccessed,label:"합격 여부를 고르시오",dense:""},model:{value:t.OpicSuccess,callback:function(e){t.OpicSuccess=e},expression:"OpicSuccess"}}),"합격"==this.OpicSuccess?n("v-select",{staticStyle:{"margin-right":"2%",width:"40%"},attrs:{items:this.OpicTypes,label:"취득한 자격증의 등급을 고르시오",dense:""},model:{value:t.OpicType,callback:function(e){t.OpicType=e},expression:"OpicType"}}):t._e(),""!=this.OpicType?n("v-text-field",{attrs:{type:"text",label:"공부한 시간(일)을 작성하시오"},model:{value:t.OpicTakenTime,callback:function(e){t.OpicTakenTime=e},expression:"OpicTakenTime"}}):t._e(),n("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialogOpicData=!1}}},[t._v(" 저장하기 ")])],1)],1)],1)],1),n("v-sheet",{attrs:{height:"600"}},[n("v-calendar",{ref:"calendar",attrs:{color:"primary",events:t.events,"event-color":t.getEventColor,type:t.type,"event-ripple":!1},on:{"click:event":t.showEvent,"click:more":t.viewDay,"click:date":t.viewDay,"mousedown:time":t.startTime,"touchstart:time":t.startTime,"touchmove:time":t.mouseMove,"mousemove:time":t.mouseMove,"touchend:time":t.endDrag,"mouseup:time":t.endDrag},nativeOn:{mouseleave:function(e){return t.cancelDrag.apply(null,arguments)}},scopedSlots:t._u([{key:"event",fn:function(e){var a=e.event,i=e.timed,r=e.eventSummary;return[n("div",{staticClass:"v-event-draggable",domProps:{innerHTML:t._s(r())}}),i?n("div",{staticClass:"v-event-drag-bottom",on:{mousedown:function(e){return e.stopPropagation(),t.extendBottom(a)}}}):t._e()]}}]),model:{value:t.focus,callback:function(e){t.focus=e},expression:"focus"}}),n("v-menu",{attrs:{"close-on-content-click":!1,activator:t.selectedElement,"offset-x":""},model:{value:t.selectedOpen,callback:function(e){t.selectedOpen=e},expression:"selectedOpen"}},[n("v-card",{attrs:{color:"grey lighten-4","min-width":"350px",flat:""}},[n("v-toolbar",{attrs:{color:t.selectedEvent.color,dark:""}},[n("v-btn",{attrs:{icon:""},on:{click:function(e){return t.deleteEvent(t.selectedEvent.id)}}},[n("v-icon",[t._v("mdi-delete")])],1),n("v-toolbar-title",{domProps:{innerHTML:t._s(t.selectedEvent.name)}}),n("v-spacer")],1),n("v-card-text",[t.currentlyEditing!==t.selectedEvent.id?n("form",[t._v(" "+t._s(t.selectedEvent.details)+" ")]):n("form",[n("textarea-autosize",{staticStyle:{width:"100%"},attrs:{type:"text","min-height":100,placeholder:"add note"},model:{value:t.selectedEvent.details,callback:function(e){t.$set(t.selectedEvent,"details",e)},expression:"selectedEvent.details"}})],1)]),n("v-card-actions",[n("v-btn",{attrs:{text:"",color:"secondary"},on:{click:function(e){t.selectedOpen=!1}}},[t._v(" Close ")]),t.currentlyEditing!==t.selectedEvent.id?n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.editEvent(t.selectedEvent)}}},[t._v(" Edit ")]):n("v-btn",{attrs:{text:""},on:{click:function(e){return e.preventDefault(),t.updateEvent(t.selectedEvent)}}},[t._v(" Save ")])],1)],1)],1)],1)],1)],1)},i=[],r=n(6198),s=(n(5666),n(2222),n(1539),n(4747),n(8309),n(561),n(3824)),c={data:function(){return{today:(new Date).toISOString().substr(0,10),focus:(new Date).toISOString().substr(0,10),type:"month",typeToLabel:{month:"Month",week:"Week",day:"Day","4day":"4 Days"},name:null,details:null,start:null,end:null,color:"#1936D2",colors:["#2196F3","#3F51B5","#673AB7","#00BCD4","#4CAF50","#FF9800","#757575"],names:["Meeting","Holiday","PTO","Travel","Event","Birthday","Conference","Party"],currentlyEditing:null,selectedEvent:{},selectedElement:null,selectedOpen:!1,events:[],eventsExample:[],dialog:!1,dialogOpicData:!1,value:"",ready:!1,startEndDrag:"",endEndDrag:"",dragEvent:null,dragStart:null,createEvent:null,createStart:null,extendOriginal:null,OpicSuccess:"",OpicSuccessed:["합격","불합격"],OpicType:"",OpicTypes:["AL","IH","IM3","IM2","IM1","IL","NH","NM","NL"],OpicTakenTime:""}},computed:{title:function(){var t=this.start,e=this.end;if(!t||!e)return"";var n=this.monthFormatter(t),a=this.monthFormatter(e),i=n===a?"":a,r=t.year,s=e.year,c=r===s?"":s,o=t.day+this.nth(t.day),l=e.day+this.nth(e.day);switch(this.type){case"month":return"".concat(n," ").concat(r);case"week":case"4day":return"".concat(n," ").concat(o," ").concat(r," - ").concat(i," ").concat(l," ").concat(c);case"day":return"".concat(n," ").concat(o," ").concat(r)}return""},monthFormatter:function(){return this.$refs.calendar.getFormatter({timeZone:"UTC",month:"long"})}},mounted:function(){var t=this;this.getEvents(),console.log("Before1"),this.$axios.get("/api/announcements?keywords=개발&job_type=1&edu_lv=0&loc_cd=101010&job_mid_cd=2&count=50").then((function(e){t.eventsExample=e})),console.log("Before2")},methods:{getEvents:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,s.db.collection("calEvent").get();case 2:n=e.sent,a=[],n.forEach((function(t){var e=t.data();e.id=t.id,a.push(e)})),t.events=a;case 6:case"end":return e.stop()}}),e)})))()},addEvent:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!(t.name&&t.start&&t.end)){e.next=13;break}return e.next=3,s.db.collection("calEvent").add({name:t.name,details:t.details,start:t.start,end:t.end,color:t.color});case 3:t.getEvents(),t.name="",t.details="",t.endEndDrag="",t.startEndDrag="",t.start="",t.end="",t.color="#1936D2",e.next=14;break;case 13:alert("Name, Start and End date are required");case 14:case"end":return e.stop()}}),e)})))()},addEventDrag:function(){var t=this;return(0,r.Z)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t.name){e.next=13;break}return e.next=3,s.db.collection("calEvent").add({name:t.name,details:t.details,start:t.startEndDrag,end:t.endEndDrag,color:t.color});case 3:t.getEvents(),t.name="",t.details="",t.endEndDrag="",t.startEndDrag="",t.start="",t.end="",t.color="#1936D2",e.next=14;break;case 13:alert("Name is required");case 14:case"end":return e.stop()}}),e)})))()},updateEvent:function(t){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,s.db.collection("calEvent").doc(e.currentlyEditing).update({details:t.details});case 2:e.selectedOpen=!1,e.currentlyEditing=null;case 4:case"end":return n.stop()}}),n)})))()},deleteEvent:function(t){var e=this;return(0,r.Z)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if("오픽Opic 합격자 발표일"!=t.details){n.next=8;break}return n.next=3,s.db.collection("calEvent").doc(t).delete();case 3:e.selectedOpen=!1,e.getEvents(),e.dialogOpicData=!0,n.next=12;break;case 8:return n.next=10,s.db.collection("calEvent").doc(t).delete();case 10:e.selectedOpen=!1,e.getEvents();case 12:case"end":return n.stop()}}),n)})))()},getEventColor:function(t){return t.color},viewDay:function(t){var e=t.date;this.focus=e,this.type="day"},setToday:function(){this.focus=""},prev:function(){this.$refs.calendar.prev()},next:function(){this.$refs.calendar.next()},editEvent:function(t){this.currentlyEditing=t.id},showEvent:function(t){var e=this,n=t.nativeEvent,a=t.event,i=function(){e.selectedEvent=a,e.selectedElement=n.target,requestAnimationFrame((function(){return requestAnimationFrame((function(){return e.selectedOpen=!0}))}))};this.selectedOpen?(this.selectedOpen=!1,requestAnimationFrame((function(){return requestAnimationFrame((function(){return i()}))}))):i(),n.stopPropagation()},updateRange:function(t){for(var e=t.start,n=t.end,a=[],i=new Date("".concat(e.date,"T00:00:00")),r=new Date("".concat(n.date,"T23:59:59")),s=(r.getTime()-i.getTime())/864e5,c=this.rnd(s,s+20),o=0;o<c;o++){var l=0===this.rnd(0,3),d=this.rnd(i.getTime(),r.getTime()),u=new Date(d-d%9e5),v=9e5*this.rnd(2,l?288:8),m=new Date(u.getTime()+v);a.push({name:this.names[this.rnd(0,this.names.length-1)],start:u,end:m,color:this.colors[this.rnd(0,this.colors.length-1)],timed:!l})}this.events=a},rnd:function(t,e){return Math.floor((e-t+1)*Math.random())+t},rndElement:function(t){return t[this.rnd(0,t.length-1)]},startDrag:function(t){var e=t.event,n=t.timed;e&&n&&(this.dragEvent=e,this.dragTime=null,this.extendOriginal=null)},startTime:function(t){var e=this.toTime(t);if(this.startEndDrag=t.date+"T"+t.time,this.dragEvent&&null===this.dragTime){var n=this.dragEvent.start;this.dragTime=e-n}else this.createStart=this.roundTime(e),this.createEvent={name:"Event #".concat(this.events.length),color:this.rndElement(this.colors),start:this.createStart,end:this.createStart,timed:!0},this.isDown=!0,this.events.push(this.createEvent)},extendBottom:function(t){this.createEvent=t,this.createStart=t.start,this.extendOriginal=t.end},mouseMove:function(t){var e=this.toTime(t);if(this.dragEvent&&null!==this.dragTime){var n=this.dragEvent.start,a=this.dragEvent.end,i=a-n,r=e-this.dragTime,s=this.roundTime(r),c=s+i;this.dragEvent.start=s,this.dragEvent.end=c}else if(this.createEvent&&null!==this.createStart){var o=this.roundTime(e,!1),l=Math.min(o,this.createStart),d=Math.max(o,this.createStart);this.createEvent.start=l,this.createEvent.end=d}},endDrag:function(t){1==this.isDown&&(this.isDown=!1,this.dialog=!0,this.endEndDrag=t.date+"T"+t.time,this.color=this.createEvent.color),this.events.pop(),this.dragTime=null,this.dragEvent=null,this.createEvent=null,this.createStart=null,this.extendOriginal=null},cancelDrag:function(){if(this.createEvent)if(this.extendOriginal)this.createEvent.end=this.extendOriginal;else{var t=this.events.indexOf(this.createEvent);-1!==t&&this.events.splice(t,1)}this.createEvent=null,this.createStart=null,this.dragTime=null,this.dragEvent=null},roundTime:function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=5,a=60*n*1e3;return e?t-t%a:t+(a-t%a)},toTime:function(t){return new Date(t.year,t.month-1,t.day,t.hour,t.minute).getTime()},StartNewEvent:function(){this.dialog=!0,this.endEndDrag=""},EndDialogOpic:function(){this.dialogOpicData=!1,this.OpicSuccess="",this.OpicType="",this.OpicTakenTime=""}}},o=c,l=n(1001),d=n(3453),u=n.n(d),v=n(680),m=n(8538),h=n(3237),p=n(7118),f=n(2102),g=n(9846),E=n(7336),y=n(6232),b=n(6428),x=n(6816),k=n(7620),T=n(2786),D=n(6768),O=n(2877),w=n(5340),_=n(3385),S=n(9762),C=n(5978),Z=n(7688),V=n(7921),M=(0,l.Z)(o,a,i,!1,null,null,null),F=M.exports;u()(M,{VBtn:v.Z,VCalendar:m.Z,VCard:h.Z,VCardActions:p.h7,VCardText:p.ZB,VCol:f.Z,VContainer:g.Z,VDialog:E.Z,VForm:y.Z,VIcon:b.Z,VList:x.Z,VListItem:k.Z,VListItemTitle:T.V9,VMenu:D.Z,VRow:O.Z,VSelect:w.Z,VSheet:_.Z,VSpacer:S.Z,VTextField:C.Z,VToolbar:Z.Z,VToolbarTitle:V.qW})}}]);
//# sourceMappingURL=891-legacy.208f7ba4.js.map