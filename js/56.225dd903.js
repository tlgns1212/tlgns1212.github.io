"use strict";(self["webpackChunktest03"]=self["webpackChunktest03"]||[]).push([[56],{9331:function(t,e,a){a.r(e),a.d(e,{default:function(){return I}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"MyPageWrap"},[s("link",{attrs:{href:"//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css",rel:"stylesheet",id:"bootstrap-css"}}),s("header",[s("form",{staticClass:"mypage",attrs:{action:""}},[s("div",{staticClass:"row"},[s("div",{staticClass:"container col-10",staticStyle:{width:"100%"}},[t._m(0),s("div",{staticClass:"container-info-main",staticStyle:{width:"100%"}},[s("div",{staticClass:"form-group row"},[s("div",{staticClass:"bar"},[t._v("아이디")]),s("div",{staticClass:"value"},t._l(this.events,(function(e){return s("div",{key:e.email,staticClass:"UserName",staticStyle:{"font-size":"2vw"}},[t._v(" "+t._s(e.email)+" ")])})),0),s("div",{staticClass:"bar"},[t._v("이름")]),s("div",{staticClass:"value"},t._l(this.events,(function(e){return s("div",{key:e.email,staticClass:"UserName"},[t._v(" "+t._s(e.name)+" ")])})),0)]),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("성별")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].mySex))])]),s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("나이")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myAge))])])]),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("목표 기업")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.wantToGo))])]),s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("학점")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].mySchoolScore))])])]),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("토익 점수")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myToeicScore))])]),s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("토익 스피킹")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myToeicSpeakingScore))])])]),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("오픽")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myOpicScore))])]),s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("수상경력")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myContest))])])]),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("자격증")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myCertification))])]),s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("사용가능 언어")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myForeign))])])]),s("div",{staticClass:"form-group row align-items-center"},[s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("인턴 경험")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myIntern))])]),s("label",{staticClass:"bar",attrs:{for:"targetCompany"}},[t._v("해외 경험")]),s("div",{staticClass:"value"},[s("div",{staticClass:"UserName"},[t._v(t._s(this.events[0].myTravel))])])])])])])])]),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("v-card",{staticClass:"pop-up"},[s("v-container",[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.DialogEvent.apply(null,arguments)}}},[s("v-text-field",{attrs:{type:"text",label:"성별"},model:{value:t.mySex,callback:function(e){t.mySex=e},expression:"mySex"}}),s("v-text-field",{attrs:{type:"text",label:"나이"},model:{value:t.myAge,callback:function(e){t.myAge=e},expression:"myAge"}}),s("v-text-field",{attrs:{type:"text",label:"목표 기업"},model:{value:t.wantToGo,callback:function(e){t.wantToGo=e},expression:"wantToGo"}}),s("v-text-field",{attrs:{type:"text",label:"토익 점수"},model:{value:t.myToeicScore,callback:function(e){t.myToeicScore=e},expression:"myToeicScore"}}),s("v-text-field",{attrs:{type:"text",label:"토익 스피킹 점수"},model:{value:t.myToeicSpeakingScore,callback:function(e){t.myToeicSpeakingScore=e},expression:"myToeicSpeakingScore"}}),s("v-select",{staticStyle:{"margin-right":"2%",width:"40%"},attrs:{items:this.OpicTypes,label:"오픽 등급",dense:""},model:{value:t.myOpicScore,callback:function(e){t.myOpicScore=e},expression:"myOpicScore"}}),s("v-text-field",{attrs:{type:"text",label:"학점"},model:{value:t.mySchoolScore,callback:function(e){t.mySchoolScore=e},expression:"mySchoolScore"}}),s("v-text-field",{attrs:{type:"text",label:"자격증 개수"},model:{value:t.myCertification,callback:function(e){t.myCertification=e},expression:"myCertification"}}),s("v-text-field",{attrs:{type:"text",label:"대회 수상 경력"},model:{value:t.myContest,callback:function(e){t.myContest=e},expression:"myContest"}}),s("v-text-field",{attrs:{type:"text",label:"사용 가능 언어 개수"},model:{value:t.myForeign,callback:function(e){t.myForeign=e},expression:"myForeign"}}),s("v-text-field",{attrs:{type:"text",label:"인턴 경험 횟수"},model:{value:t.myIntern,callback:function(e){t.myIntern=e},expression:"myIntern"}}),s("v-text-field",{attrs:{type:"text",label:"해외 경험 횟수"},model:{value:t.myTravel,callback:function(e){t.myTravel=e},expression:"myTravel"}}),s("v-btn",{staticClass:"mr-4",attrs:{type:"submit",color:"primary"},on:{click:function(e){e.stopPropagation(),t.dialog=!1}}},[t._v(" 저장하기 ")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogCal,callback:function(e){t.dialogCal=e},expression:"dialogCal"}},[s("v-card",[s("v-container",[!0===t.dialogToeic?s("v-form",[s("p",[t._v("일정에 추가되었습니다!!!!")]),s("v-btn",{attrs:{href:"https://exam.toeic.co.kr/receipt/receiptStep1.php"},on:{click:t.GetOutFromAddedCal}},[t._v("확인")])],1):!0===t.dialogToeicSpeaking?s("v-form",[s("p",[t._v("추가되었습니다!!!!")]),s("v-btn",{attrs:{href:"https://www.toeicswt.co.kr/receipt/receiptStep1.php?sbGoodsType1=TOS"},on:{click:t.GetOutFromAddedCal}},[t._v("확인")])],1):!0===t.dialogOpic?s("v-form",[s("p",[t._v("추가되었습니다!!!!")]),s("v-btn",{attrs:{href:"https://www.opic.or.kr/opics/servlet/controller.opic.site.receipt.ExamReceiptServlet?p_process=select-list&p_nav=1_1"},on:{click:t.GetOutFromAddedCal}},[t._v("확인")])],1):s("v-form",[s("p",[t._v("추가되었습니다!!!!")]),s("v-btn",{attrs:{href:"https://www.toeicswt.co.kr/receipt/receiptStep1.php?sbGoodsType1=TOS"},on:{click:t.GetOutFromAddedCal}},[t._v("확인")])],1)],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogToeic,callback:function(e){t.dialogToeic=e},expression:"dialogToeic"}},[s("v-card",[s("v-container",t._l(this.eventsToeic,(function(e){return s("v-form",{key:e.id},[s("p",[t._v(t._s(e.name)+" 접수마감일 : "+t._s(e.end)+" 시험일 : "+t._s(e.test.substr(0,10)))]),s("v-btn",{on:{click:function(a){return t.consoleGo(e)}}},[t._v("추가하기")]),s("v-btn",{attrs:{href:"https://exam.toeic.co.kr/receipt/receiptStep1.php"}},[t._v("접수하러가기")])],1)})),1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogSchool,callback:function(e){t.dialogSchool=e},expression:"dialogSchool"}},[s("v-card",[s("v-container",[s("v-form",[this.eventsTexts[1]?s("div",[s("p",[t._v(t._s(this.eventsTexts[this.randomNumber].text))]),s("v-btn",{on:{click:t.AllDialogFalseAndRandom}},[t._v("힘내기!!")])],1):t._e()])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogCertification,callback:function(e){t.dialogCertification=e},expression:"dialogCertification"}},[s("v-card",[s("v-container",[s("v-form",{on:{submit:function(t){t.preventDefault()}}},[this.eventsTexts[1]?s("div",[s("p",[t._v(t._s(this.eventsTexts[this.randomNumber].text))]),s("v-btn",{on:{click:t.AllDialogFalseAndRandom}},[t._v("힘내기!!")])],1):t._e()])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogForeign,callback:function(e){t.dialogForeign=e},expression:"dialogForeign"}},[s("v-card",[s("v-container",[s("v-form",{on:{submit:function(t){t.preventDefault()}}},[this.eventsTexts[1]?s("div",[s("p",[t._v(t._s(this.eventsTexts[this.randomNumber].text))]),s("v-btn",{on:{click:t.AllDialogFalseAndRandom}},[t._v("힘내기!!")])],1):t._e()])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogToeicSpeaking,callback:function(e){t.dialogToeicSpeaking=e},expression:"dialogToeicSpeaking"}},[s("v-card",[s("v-container",t._l(this.eventsToeicSpeaking,(function(e){return s("v-form",{key:e.id},[s("p",[t._v(t._s(e.name)+" 접수마감일 : "+t._s(e.end.substr(0,10))+" 시험일 : "+t._s(e.test.substr(0,10)))]),s("v-btn",{on:{click:function(a){return t.consoleGo(e)}}},[t._v("추가하기")]),s("v-btn",{attrs:{href:"https://www.toeicswt.co.kr/receipt/receiptStep1.php?sbGoodsType1=TOS"}},[t._v("접수하러가기")])],1)})),1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogOpic,callback:function(e){t.dialogOpic=e},expression:"dialogOpic"}},[s("v-card",[s("v-container",t._l(this.eventsOpic,(function(e){return s("v-form",{key:e.id},[t.IsDate>30*parseInt(e.test.substr(5,2))+parseInt(e.test.substr(8,2))-10&&t.IsDate<30*parseInt(e.test.substr(5,2))+parseInt(e.test.substr(8,2))+10?s("div",[s("p",[t._v(t._s(e.name)+" 접수마감일 : "+t._s(e.end.substr(0,10))+" 시험일 : "+t._s(e.test.substr(0,10)))]),s("v-btn",{on:{click:function(a){return t.consoleGo(e)}}},[t._v("추가하기")]),s("v-btn",{attrs:{href:"https://www.opic.or.kr/opics/servlet/controller.opic.site.receipt.ExamReceiptServlet?p_process=select-list&p_nav=1_1"}},[t._v("접수하러가기")])],1):t._e()])})),1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogTravel,callback:function(e){t.dialogTravel=e},expression:"dialogTravel"}},[s("v-card",[s("v-container",[s("v-form",{on:{submit:function(t){t.preventDefault()}}},[this.eventsTexts[1]?s("div",[s("p",[t._v(t._s(this.eventsTexts[this.randomNumber].text))]),s("v-btn",{on:{click:t.AllDialogFalseAndRandom}},[t._v("힘내기!!")])],1):t._e()])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogIntern,callback:function(e){t.dialogIntern=e},expression:"dialogIntern"}},[s("v-card",[s("v-container",[s("v-form",{on:{submit:function(t){t.preventDefault()}}},[this.eventsTexts[1]?s("div",[s("p",[t._v(t._s(this.eventsTexts[this.randomNumber].text))]),s("v-btn",{on:{click:t.AllDialogFalseAndRandom}},[t._v("힘내기!!")])],1):t._e()])],1)],1)],1),s("v-dialog",{attrs:{"max-width":"500"},model:{value:t.dialogContest,callback:function(e){t.dialogContest=e},expression:"dialogContest"}},[s("v-card",[s("v-container",[s("v-form",{on:{submit:function(t){t.preventDefault()}}},[s("p",[t._v("지금이라도 늦지 않았으니 아래 페이지에서 여러 대회들을 찾아봐요!!!!!")]),s("v-btn",{attrs:{href:"https://www.contestkorea.com/"}},[t._v("접수하러가기")])],1)],1)],1)],1),s("v-dialog",{staticStyle:{width:"70%"},model:{value:t.dialogCheck,callback:function(e){t.dialogCheck=e},expression:"dialogCheck"}},[s("v-card",[s("v-container",[s("v-form",{on:{submit:function(e){return e.preventDefault(),t.DialogCheckEvent.apply(null,arguments)}}},[0==t.loading?s("div",{staticClass:"spinner-div"},[s("div",[s("img",{staticStyle:{width:"750px",position:"relative",right:"50px"},attrs:{src:a(2116)}})]),s("q-spinner-cube",{attrs:{color:"primary",size:"5em"}}),s("div",{staticClass:"form-group1 row align-items-center"},[s("label",{staticClass:"keys",attrs:{for:"targetCompany"}},[t._v("오픽 "+t._s(this.events[0].myOpicScore)+" -> "+t._s(this.eventsCompany.companyOpicScore))]),s("div",{staticClass:"results"},[s("div",{staticClass:"input-group"},[s("div",{staticClass:"UserName"},[s("v-btn",{on:{click:function(e){t.dialogOpic=!0}}},[t._v(" "+t._s(this.MathforOpicScore())+" 일")])],1)])])])],1):s("div",{staticClass:"spinner-div",staticStyle:{width:"300px"}}),s("div",{staticClass:"form-group1 row align-items-center"},[s("v-text-field",{staticStyle:{position:"relative","font-size":"25px",width:"500px"},attrs:{type:"text",label:"하루 평균 공부시간(hour)"},model:{value:t.tempStudyTime,callback:function(e){t.tempStudyTime=e},expression:"tempStudyTime"}}),s("v-text-field",{staticStyle:{"font-size":"25px",width:"400px"},attrs:{type:"text",label:"수능 영어 등급"},model:{value:t.tempSoon,callback:function(e){t.tempSoon=e},expression:"tempSoon"}}),s("LoadingButton",{ref:"button",staticStyle:{position:"relative",left:"0px",width:"100px"},attrs:{loading:this.loading},on:{click:t.buttonClicked}},[t._v(" 다시 검색 ")])],1),"최"==this.managementGroup1.substr(0,1)||parseInt(this.managementTime.substr(0,1))>=6?s("div",{staticClass:"management"},[s("p",[t._v("사용자는 현재 비슷한 실력의 사용자들에 비해 많은 노력을 하고 있습니다.")]),s("p",[t._v("현재 상태를 유지하면서 다른 스펙도 쌓아서")]),s("p",[t._v("취업에 성공하시길 바라겠습니다!!!!")])]):s("div",{staticClass:"management"},[s("p",[t._v("사용자는 현재 "+t._s(this.managementGroup1))]),s("p",[t._v("하루 평균 공부시간을 "+t._s(this.managementTime)+"으로 끌어올려 보세요 !")]),s("p",[t._v(" "+t._s(this.managementGroup2)+" 번째 군집의 사용자들에 해당해 준비기간을 "+t._s(this.managementDay)+" 일로 줄일 수 있습니다! ")])])])],1)],1)],1),s("v-row",{staticClass:"container2"},[s("div",{staticClass:"contain-target"},[s("div",{staticClass:"navbar-header",staticStyle:{height:"40px"}},[s("div",{staticClass:"target"},[t._v("나의 목표 역량")]),s("button",{staticClass:"btn btn-success btn-md pull-right",staticStyle:{"margin-top":"5px"},on:{click:function(e){t.dialog=!0}}},[t._v(" 정보갱신 ")])])])]),s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"col"},[s("div",{staticClass:"row2"},[s("div",{staticClass:"container3"},[s("h4",[t._v("목표 역량 대비 현재 나의 역량")]),s("v-select",{staticStyle:{"margin-left":"25%",width:"50%","margin-top":"3%"},attrs:{"v-model":this.wantToGo,items:this.companyItems,label:"희망 기업을 선택하세요.",dense:""},on:{change:t.ChangeCompany}}),t._v(" 토익 -> "),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyToeicScore))]),s("div",{staticClass:"progress"},[s("div",{class:t.ToeicProgressBar,style:t.ToeicPercentage,attrs:{role:"progressbar","aria-valuenow":"70","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].myToeicScore)/parseFloat(this.eventsCompany.companyToeicScore)*100)>100?100:Math.floor(parseFloat(this.events[0].myToeicScore)/parseFloat(this.eventsCompany.companyToeicScore)*100))+"% ")])]),t._v(" 학점 ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companySchoolScore))]),s("div",{staticClass:"progress"},[s("div",{class:t.SchoolProgressBar,style:t.SchoolPercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].mySchoolScore)/parseFloat(this.eventsCompany.companySchoolScore)*100)>100?100:Math.floor(parseFloat(this.events[0].mySchoolScore)/parseFloat(this.eventsCompany.companySchoolScore)*100))+"% ")])]),t._v(" 자격증 개수 ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyCertification))]),s("div",{staticClass:"progress"},[s("div",{class:t.CertificationProgressBar,style:t.CertificationPercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].myCertification)/parseFloat(this.eventsCompany.companyCertification)*100)>100?100:Math.floor(parseFloat(this.events[0].myCertification)/parseFloat(this.eventsCompany.companyCertification)*100))+"% ")])]),t._v(" 외국어(기타) ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyForeign))]),s("div",{staticClass:"progress",staticStyle:{"text-align":"right"}},[s("div",{class:t.ForeignProgressBar,style:t.ForeignPercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].myForeign)/parseFloat(this.eventsCompany.companyForeign)*100)>100?100:Math.floor(parseFloat(this.events[0].myForeign)/parseFloat(this.eventsCompany.companyForeign)*100))+"% ")])]),t._v(" 토익 스피킹 ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyToeicSpeakingScore))]),s("div",{staticClass:"progress",staticStyle:{"text-align":"right"}},[s("div",{class:t.ToeicSpeakingScoreProgressBar,style:t.ToeicSpeakingScorePercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].myToeicSpeakingScore)/parseFloat(this.eventsCompany.companyToeicSpeakingScore)*100)>100?100:Math.floor(parseFloat(this.events[0].myToeicSpeakingScore)/parseFloat(this.eventsCompany.companyToeicSpeakingScore)*100))+"% ")])]),t._v(" 오픽 ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyOpicScore))]),s("div",{staticClass:"progress",staticStyle:{"text-align":"right"}},[s("div",{class:t.OpicScoreProgressBar,style:t.OpicScorePercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.OpicState[this.events[0].myOpicScore])/parseFloat(this.OpicState[this.eventsCompany.companyOpicScore])*100)>100?100:Math.floor(parseFloat(this.OpicState[this.events[0].myOpicScore])/parseFloat(this.OpicState[this.eventsCompany.companyOpicScore])*100))+"% ")])]),t._v(" 해외 경험 ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyTravel))]),s("div",{staticClass:"progress",staticStyle:{"text-align":"right"}},[s("div",{class:t.TravelProgressBar,style:t.TravelPercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].myTravel)/parseFloat(this.eventsCompany.companyTravel)*100)>100?100:Math.floor(parseFloat(this.events[0].myTravel)/parseFloat(this.eventsCompany.companyTravel)*100))+"% ")])]),t._v(" 인턴 경험 ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyIntern))]),s("div",{staticClass:"progress",staticStyle:{"text-align":"right"}},[s("div",{class:t.InternProgressBar,style:t.InternPercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].myIntern)/parseFloat(this.eventsCompany.companyIntern)*100)>100?100:Math.floor(parseFloat(this.events[0].myIntern)/parseFloat(this.eventsCompany.companyIntern)*100))+"% ")])]),t._v(" 수상내역 ->"),s("span",{staticClass:"pull-right strong",staticStyle:{"margin-left":"5px"}},[t._v(t._s(this.eventsCompany.companyContest))]),s("div",{staticClass:"progress",staticStyle:{"text-align":"right"}},[s("div",{class:t.ContestProgressBar,style:t.ContestPercentage,attrs:{role:"progressbar","aria-valuenow":"100","aria-valuemin":"0","aria-valuemax":"100"}},[t._v(" "+t._s(Math.floor(parseFloat(this.events[0].myContest)/parseFloat(this.eventsCompany.companyContest)*100)>100?100:Math.floor(parseFloat(this.events[0].myContest)/parseFloat(this.eventsCompany.companyContest)*100))+"% ")])])],1)])]),s("div",{staticClass:"footer1"},[s("v-text-field",{staticStyle:{"font-size":"25px",position:"relative",top:"10px",width:"250px","margin-top":"10px",display:"inline-block"},attrs:{type:"text",label:"하루 평균 공부시간(hour)"},model:{value:t.tempStudyTime,callback:function(e){t.tempStudyTime=e},expression:"tempStudyTime"}}),s("v-text-field",{staticStyle:{"font-size":"25px",position:"relative",top:"10px",width:"250px",left:"50px","margin-top":"10px",display:"inline-block"},attrs:{type:"text",label:"수능 영어 등급"},model:{value:t.tempSoon,callback:function(e){t.tempSoon=e},expression:"tempSoon"}}),s("v-btn",{staticStyle:{position:"relative",left:"8%"},on:{click:t.DialogCheckEvent}},[t._v("검사받기")])],1)])],1)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row1"},[a("h6",{staticClass:"text-center col-12 mb-0"},[t._v("My Page [유저 정보]")])])}],o=a(6289),n=a(629),r=a(7378);var c={components:{LoadingButton:r.Z},name:"mypage",data:()=>({events:[],eventsCompany:[],eventsToeic:[],eventsToeicSpeaking:[],eventsOpic:[],eventsTexts:[],companyItems:[],eventNameCompany:"KEPC",wantToGo:"",myToeicScore:"",myToeicSpeakingScore:"",myOpicScore:"",mySchoolScore:"",myCertification:"",myForeign:"",myTravel:"",myIntern:"",myContest:"",myAge:"",mySex:"",myEnglishTest:"",myStudyTime:"",mySoon:"",companyToeicScore:"",companyToeicSpeakingScore:"",companyOpicScore:"",companySchoolScore:"",companyCertification:"",companyForeign:"",companyTravel:"",companyIntern:"",companyContest:"",isLoading:!1,dialog:!1,dialogCheck:!1,dialogToeic:!1,dialogSchool:!1,dialogCertification:!1,dialogForeign:!1,dialogToeicSpeaking:!1,dialogOpic:!1,dialogTravel:!1,dialogIntern:!1,dialogContest:!1,dialogCal:!1,currentlyEditing:null,selectedEvent:{},loading:!1,randomNumber:2,tempStudyTime:"",tempSoon:"",OpicState:{"없음":0,NL:1,NM:2,NH:3,IL:4,IM1:5,IM2:6,IM3:7,AL:8},OpicType:"",OpicTypes:["AL","IH","IM3","IM2","IM1","IL","NH","NM","NL","없음"],managementGroup1:0,managementGroup2:0,managementTime:0,managementDay:0}),computed:{...(0,n.rn)(["userInfo"]),IsDate(){const t=this.getToday(),e=this.getDates2(t,this.MathforOpicScore()),a=parseInt(30*e.substr(5,2))+parseInt(e.substr(8,2));return a},ToeicScore(){return Math.floor(parseFloat(this.events[0].myToeicScore)/parseFloat(this.eventsCompany.companyToeicScore)*100).toString()},ToeicPercentage(){return{width:(parseInt(this.ToeicScore)>100?100:this.ToeicScore)+"%"}},ToeicProgressBar(){let t=this.ToeicScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"},SchoolScore(){return Math.floor(parseFloat(this.events[0].mySchoolScore)/parseFloat(this.eventsCompany.companySchoolScore)*100).toString()},SchoolPercentage(){return{width:(parseInt(this.SchoolScore)>100?100:this.SchoolScore)+"%"}},SchoolProgressBar(){let t=this.SchoolScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"},CertificationScore(){return Math.floor(parseFloat(this.events[0].myCertification)/parseFloat(this.eventsCompany.companyCertification)*100).toString()},CertificationPercentage(){return{width:(parseInt(this.CertificationScore)>100?100:this.CertificationScore)+"%"}},CertificationProgressBar(){let t=this.CertificationScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"},ForeignScore(){return Math.floor(parseFloat(this.events[0].myForeign)/parseFloat(this.eventsCompany.companyForeign)*100).toString()},ForeignPercentage(){return{width:(parseInt(this.ForeignScore)>100?100:this.ForeignScore)+"%"}},ForeignProgressBar(){let t=this.ForeignScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"},ToeicSpeakingScoreScore(){return Math.floor(parseFloat(this.events[0].myToeicSpeakingScore)/parseFloat(this.eventsCompany.companyToeicSpeakingScore)*100).toString()},ToeicSpeakingScorePercentage(){return{width:(parseInt(this.ToeicSpeakingScoreScore)>100?100:this.ToeicSpeakingScoreScore)+"%"}},ToeicSpeakingScoreProgressBar(){let t=this.ToeicSpeakingScoreScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<0?"progress-bar-warning":"progress-bar-success"},OpicScoreScore(){return Math.floor(parseFloat(this.OpicState[this.events[0].myOpicScore])/parseFloat(this.OpicState[this.eventsCompany.companyOpicScore])*100).toString()},OpicScorePercentage(){return{width:(parseInt(this.OpicScoreScore)>100?100:this.OpicScoreScore)+"%"}},OpicScoreProgressBar(){let t=this.OpicScoreScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"},TravelScore(){return Math.floor(parseFloat(this.events[0].myTravel)/parseFloat(this.eventsCompany.companyTravel)*100).toString()},TravelPercentage(){return{width:(parseInt(this.TravelScore)>100?100:this.TravelScore)+"%"}},TravelProgressBar(){let t=this.TravelScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"},InternScore(){return Math.floor(parseFloat(this.events[0].myIntern)/parseFloat(this.eventsCompany.companyIntern)*100).toString()},InternPercentage(){return{width:(parseInt(this.InternScore)>100?100:this.InternScore)+"%"}},InternProgressBar(){let t=this.InternScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"},ContestScore(){return Math.floor(parseFloat(this.events[0].myContest)/parseFloat(this.eventsCompany.companyContest)*100).toString()},ContestPercentage(){return{width:(parseInt(this.ContestScore)>100?100:this.ContestScore)+"%"}},ContestProgressBar(){let t=this.ContestScore;return parseInt(t)<40?"progress-bar-danger":parseInt(t)<90?"progress-bar-warning":"progress-bar-success"}},mounted(){this.getEvents(),this.getCheckEvents()},methods:{async getEvents(){let t=await o.db.collection("user").get(),e=[];t.forEach((t=>{let a=t.data();a.id=t.id,e.push(a)})),this.events=e,this.wantToGo=e[0].wantToGo,this.myToeicScore=e[0].myToeicScore,this.mySchoolScore=e[0].mySchoolScore,this.myCertification=e[0].myCertification,this.myForeign=e[0].myForeign,this.myAge=e[0].myAge,this.mySex=e[0].mySex,this.myStudyTime=e[0].myStudyTime,this.mySoon=e[0].mySoon,this.tempSoon=e[0].mySoon,this.tempStudyTime=e[0].myStudyTime,this.myToeicSpeakingScore=e[0].myToeicSpeakingScore,this.myOpicScore=e[0].myOpicScore,this.myContest=e[0].myContest,this.myIntern=e[0].myIntern,this.myTravel=e[0].myTravel,this.isCompanyName(),this.InitalData(),this.CompanyItems()},async getCheckEvents(){let t=await o.db.collection("toeic").get(),e=[];t.forEach((t=>{let a=t.data();a.id=t.id,e.push(a)})),this.eventsToeic=e,t=await o.db.collection("toeicSpeaking").get(),e=[],t.forEach((t=>{let a=t.data();a.id=t.id,e.push(a)})),this.eventsToeicSpeaking=e,t=await o.db.collection("opic").get(),e=[],t.forEach((t=>{let a=t.data();a.id=t.id,e.push(a)}));let a=e;a.sort((function(t,e){let a=t.end.substr(5,2)+t.end.substr(8,2),s=e.end.substr(5,2)+e.end.substr(8,2);return a>s?1:a<s?-1:0})),this.eventsOpic=a,t=await o.db.collection("texts").get(),e=[],t.forEach((t=>{let a=t.data();a.id=t.id,e.push(a)})),this.eventsTexts=e},InitalData(){this.wantToGo=this.events[0].wantToGo,this.myToeicScore=this.events[0].myToeicScore,this.mySchoolScore=this.events[0].mySchoolScore,this.myCertification=this.events[0].myCertification,this.myForeign=this.events[0].myForeign,this.companyToeicScore=this.eventsCompany.companyToeicScore,this.companySchoolScore=this.eventsCompany.companySchoolScore,this.companyCertification=this.eventsCompany.companyCertification,this.companyForeign=this.eventsCompany.companyForeign},async addEvent(){this.id&&this.password?(await o.db.collection("user").add({id:this.id,password:this.password}),this.getEvents(),this.id=""):alert("Name, Start and End date are required")},async updateEvent(t){await o.db.collection("user").doc("KEPC").update({myToeicScore:this.myToeicScore,mySchoolScore:this.mySchoolScore,myCertification:this.myCertification,myForeign:this.myForeign}),this.getEvents()},async deleteEvent(t){await o.db.collection("calEvent").doc(t).delete(),this.selectedOpen=!1,this.getEvents()},async DialogEvent(){await o.db.collection("user").doc("KEPC").update({wantToGo:this.wantToGo,myToeicScore:this.myToeicScore,myToeicSpeakingScore:this.myToeicSpeakingScore,myOpicScore:this.myOpicScore,mySchoolScore:this.mySchoolScore,myCertification:this.myCertification,myContest:this.myContest,myForeign:this.myForeign,myIntern:this.myIntern,myTravel:this.myTravel}),this.getEvents(),this.dialog=!1},isCompanyName(){"Nexon"==this.events[0].wantToGo?this.eventsCompany=this.events[2]:"Netmarble"==this.events[0].wantToGo?this.eventsCompany=this.events[1]:this.eventsCompany=this.events[0]},async DialogCheckEvent(){await o.db.collection("user").doc("KEPC").update({myStudyTime:this.tempStudyTime,mySoon:this.tempSoon}),this.getEvents(),this.dialogCheck=!0,this.isLoading=!0,this.loading=!0,this.myStudyTime=this.tempStudyTime,this.mySoon=this.tempSoon,setTimeout((()=>{this.loading=!1}),1e3),this.getCheckEvents()},async buttonClicked(){await o.db.collection("user").doc("KEPC").update({myStudyTime:this.tempStudyTime,mySoon:this.tempSoon}),this.loading=!0,this.myStudyTime=this.tempStudyTime,this.mySoon=this.tempSoon,setTimeout((()=>{this.loading=!1}),1e3),this.getCheckEvents()},async consoleGo(t){await o.db.collection("calEvent").add({name:t.detail1,details:t.name+t.detail1,start:t.end,end:t.end,color:"orange"}),await o.db.collection("calEvent").add({name:t.detail2,details:t.name+t.detail2,start:t.test,end:t.test,color:"green"}),await o.db.collection("calEvent").add({name:"OPIc 합격자 발표일",details:"오픽Opic 합격자 발표일",start:this.getDates(t.end),end:this.getDates(t.end),color:"blue"}),this.getEvents(),this.AddedToCal()},AddedToCal(){this.dialogCal=!0},GetOutFromAddedCal(){this.dialogCal=!1},RandomNumber(){this.randomNumber=Math.floor(13*Math.random())},AllDialogFalseAndRandom(){this.dialogToeic=!1,this.dialogSchool=!1,this.dialogCertification=!1,this.dialogForeign=!1,this.dialogToeicSpeaking=!1,this.dialogOpic=!1,this.dialogTravel=!1,this.dialogIntern=!1,this.dialogContest=!1,this.RandomNumber()},MathforToeic(){let t=4,e=parseInt(this.ToeicScore)>800?1:parseInt(this.ToeicScore)>600?2:parseInt(this.ToeicScore)>400?3:parseInt(this.ToeicScore)>1?4:5,a=1;a*="남자"==this.mySex?.6:.3,a*=parseInt(this.myTravel)>0?.4:.8,a*=parseInt(this.myCertification)>0?.3:.7;let s=this.companyToeicScore-this.myToeicScore,i=s*e*a*t;return Math.ceil(i/parseInt(this.myStudyTime))},MathforCertification(){let t=250,e=parseInt(this.myCertification)>4?1:parseInt(this.myCertification)>3?2:parseInt(this.myCertification)>2?3:parseInt(this.myCertification)>1?4:5,a=1;a*="남자"==this.mySex?.6:.3,a*=parseInt(this.myTravel)>0?.4:.8,a*=parseInt(this.myCertification)>0?.3:.7;let s=this.companyCertification-this.myCertification,i=s*e*a*t;return Math.ceil(i/parseInt(this.myStudyTime))},MathforForeign(){let t=500,e=parseInt(this.myForeign)>4?1:parseInt(this.myForeign)>3?2:parseInt(this.myForeign)>2?3:parseInt(this.myForeign)>1?4:5,a=1;a*="남자"==this.mySex?.6:.3,a*=parseInt(this.myTravel)>0?.4:.8,a*=parseInt(this.myCertification)>0?.3:.7;let s=this.companyForeign-this.myForeign,i=s*e*a*t;return Math.ceil(i/parseInt(this.myStudyTime))},MathforToeicSpeakingScore(){let t=500,e=parseInt(this.myToeicSpeakingScore)>6?1:parseInt(this.myToeicSpeakingScore)>4?2:parseInt(this.myToeicSpeakingScore)>2?3:parseInt(this.myToeicSpeakingScore)>1?4:5,a=1;a*="남자"==this.mySex?.6:.3,a*=parseInt(this.myTravel)>0?.4:.8,a*=parseInt(this.myCertification)>0?.3:.7;let s=this.companyToeicSpeakingScore-this.myToeicSpeakingScore,i=s*e*a*t;return Math.ceil(i/parseInt(this.myStudyTime))},MathforOpicScore(){if(0==parseInt(this.myOpicScore)&&0==parseInt(this.myToeicSpeakingScore)&&0==parseInt(this.myToeicScore)){if(1==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>1)return 31;if(1==parseInt(this.mySoon)&&1==parseInt(this.myStudyTime))return 51;if(2==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>3)return 31;if(2==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>3)return 31;if(2==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 51;if(3==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>5)return 31;if(3==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>3)return 51;if(3==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 78;if(4==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>5)return 51;if(4==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>1)return 78;if(4==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 97;if(5==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>3)return 78;if(5==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 97;if(6==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>5)return 78;if(6==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>2)return 97;if(6==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 32;if(7==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 32;if(8==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 32;if(9==parseInt(this.mySoon)&&parseInt(this.myStudyTime)>0)return 32}else{if(parseInt(this.mySoon)<3&&parseInt(this.myStudyTime)<3)return this.managementGroup1="2 번째 집단에 속합니다.",this.managementGroup2=1,this.managementTime="3시간 이상",this.managementDay=11,31;if(parseInt(this.mySoon)<3&&parseInt(this.myStudyTime)<5&&parseInt(this.myStudyTime)>=3)return this.managementGroup1="최상위 집단에 속합니다.",this.managementGroup2=1,this.managementTime="4시간 이상",this.managementDay=11,11;if(parseInt(this.mySoon)<3&&parseInt(this.myStudyTime)>4)return this.managementGroup1="최상위 집단에 속합니다.",this.managementGroup2=1,this.managementTime=4,this.managementDay=11,11;if(parseInt(this.mySoon)>=3&&parseInt(this.mySoon)<5&&parseInt(this.myStudyTime)<3)return this.managementGroup1="3 번째 집단에 속합니다.",this.managementGroup2=2,this.managementTime="3시간 이상",this.managementDay=31,58;if(parseInt(this.mySoon)>=3&&parseInt(this.mySoon)<5&&parseInt(this.myStudyTime)<5&&parseInt(this.myStudyTime)>=3)return this.managementGroup1="2 번째 집단에 속합니다.",this.managementGroup2=1,this.managementTime="5시간 이상",this.managementDay=11,31;if(parseInt(this.mySoon)>=3&&parseInt(this.mySoon)<5&&parseInt(this.myStudyTime)>4)return this.managementGroup1="최상위 집단에 속합니다.",this.managementGroup2=1,this.managementTime="4시간 이상",this.managementDay=11,11;if(parseInt(this.mySoon)>=5&&parseInt(this.mySoon)<8&&parseInt(this.myStudyTime)<3)return this.managementGroup1="4 번째 집단에 속합니다.",this.managementGroup2=3,this.managementTime="3시간 이상",this.managementDay=58,77;if(parseInt(this.mySoon)>=5&&parseInt(this.mySoon)<8&&parseInt(this.myStudyTime)<5&&parseInt(this.myStudyTime)>=3)return this.managementGroup1="3 번째 집단에 속합니다.",this.managementGroup2=2,this.managementTime="5시간 이상",this.managementDay=31,58;if(parseInt(this.mySoon)>=5&&parseInt(this.mySoon)<8&&parseInt(this.myStudyTime)>4)return this.managementGroup1="3 번째 집단에 속합니다.",this.managementGroup2=2,this.managementTime="6시간 이상",this.managementDay=31,31;if(parseInt(this.mySoon)>=7&&parseInt(this.myStudyTime)<3)return this.managementGroup1="5 번째 집단에 속합니다.",this.managementGroup2=4,this.managementTime="3시간 이상",this.managementDay=77,124;if(parseInt(this.mySoon)>=7&&parseInt(this.myStudyTime)<5&&parseInt(this.myStudyTime)>=3)return this.managementGroup1="4 번째 집단에 속합니다.",this.managementGroup2=3,this.managementTime="5시간 이상",this.managementDay=58,77;if(parseInt(this.mySoon)>=7&&parseInt(this.myStudyTime)>4)return this.managementGroup1="3 번째 집단에 속합니다.",this.managementGroup2=2,this.managementTime="7시간 이상",this.managementDay=31,58}},MathforTravel(){let t=500,e=parseInt(this.myTravel)>4?1:parseInt(this.myTravel)>3?2:parseInt(this.myTravel)>2?3:parseInt(this.myTravel)>1?4:5,a=1;a*="남자"==this.mySex?.6:.3,a*=parseInt(this.myTravel)>0?.4:.8,a*=parseInt(this.myCertification)>0?.3:.7;let s=this.companyTravel-this.myTravel,i=s*e*a*t;return Math.ceil(i/parseInt(this.myStudyTime))},MathforContest(){let t=500,e=parseInt(this.myContest)>4?1:parseInt(this.myContest)>3?2:parseInt(this.myContest)>2?3:parseInt(this.myContest)>1?4:5,a=1;a*="남자"==this.mySex?.6:.3,a*=parseInt(this.myTravel)>0?.4:.8,a*=parseInt(this.myCertification)>0?.3:.7;let s=this.companyContest-this.myContest,i=s*e*a*t;return Math.ceil(i/parseInt(this.myStudyTime))},CompanyItems(){for(let t=0;t<this.events.length;t++)this.companyItems.push(this.events[t].id)},async ChangeCompany(t){this.wantToGo=t,await o.db.collection("user").doc("KEPC").update({wantToGo:this.wantToGo}),this.getEvents()},getDates(t){let e=new Date(t);return e.setDate(e.getDate()+7),this.UnixToDate(e.getTime())},getDates2(t,e){let a=new Date(t);return a.setDate(a.getDate()+e),this.UnixToDate(a.getTime())},UnixToDate(t){const e=new Date(t),a=e.getFullYear(),s=e.getMonth()+1,i=e.getDate();let o="";return o=s<10&&i<10?`${a}-0${s}-0${i}`:s<10?`${a}-0${s}-${i}`:i<10?`${a}-${s}-0${i}`:`${a}-${s}-${i}`,o},getToday(){const t=new Date,e=t.getFullYear(),a=("0"+(t.getMonth()+1)).slice(-2),s=("0"+t.getDate()).slice(-2);return e+"-"+a+"-"+s}}},l=c,m=a(1001),p=a(3453),h=a.n(p),y=a(680),v=a(3237),d=a(9846),g=a(7336),u=a(6232),S=a(2877),C=a(5340),f=a(5978),T=(0,m.Z)(l,s,i,!1,null,null,null),I=T.exports;h()(T,{VBtn:y.Z,VCard:v.Z,VContainer:d.Z,VDialog:g.Z,VForm:u.Z,VRow:S.Z,VSelect:C.Z,VTextField:f.Z})},2116:function(t,e,a){t.exports=a.p+"img/clust.18bfd8ce.png"}}]);
//# sourceMappingURL=56.225dd903.js.map