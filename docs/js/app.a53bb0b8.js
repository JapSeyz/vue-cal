(function(e){function t(t){for(var i,l,r=t[0],c=t[1],o=t[2],d=0,v=[];d<r.length;d++)l=r[d],s[l]&&v.push(s[l][0]),s[l]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);u&&u(t);while(v.length)v.shift()();return n.push.apply(n,o||[]),a()}function a(){for(var e,t=0;t<n.length;t++){for(var a=n[t],i=!0,r=1;r<a.length;r++){var c=a[r];0!==s[c]&&(i=!1)}i&&(n.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},s={app:0},n=[];function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/vue-cal/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var o=0;o<r.length;o++)t(r[o]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0699":function(e){e.exports={weekDays:["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi","Dimanche"],months:["Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"],years:"Années",week:"Semaine",today:"Aujourd'hui",noEvent:"Aucun événement",dateFormat:"DDDD d mmmm yyyy"}},"17ac":function(e,t,a){"use strict";var i=a("85e1"),s=a.n(i);s.a},"4da1":function(e,t,a){var i={"./fr.json":"0699","./it.json":"eed7"};function s(e){var t=n(e);return a(t)}function n(e){var t=i[e];if(!(t+1)){var a=new Error("Cannot find module '"+e+"'");throw a.code="MODULE_NOT_FOUND",a}return t}s.keys=function(){return Object.keys(i)},s.resolve=n,e.exports=s,s.id="4da1"},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("097d");var i=a("2b0e"),s=a("ce5b"),n=a.n(s);a("bf40");i["default"].use(n.a,{iconfont:"md"});var l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-app",{staticClass:"ma-0"},[i("v-content",{staticClass:"white"},[i("img",{attrs:{alt:"Vue logo",src:a("cf05"),width:"50"}}),i("p",[e._v("A Vue JS full calendar, no dependency, no BS. :metal:\n"),i("br"),i("em",[e._v("- under construction -")])]),i("h2",{staticClass:"mt-5"},[e._v("To do...")]),i("p",[e._v("Support for scheddule events coming soon!")]),i("h3",{staticClass:"mt-5"},[e._v("# Demo 1")]),i("p",[e._v("Given time range (8 - 22) and time step (1 hour), 24-hour format, hide weekends. Double click cell to go narrower view.")]),i("v-card",{staticClass:"my-2 ma-auto main-content"},[i("vue-cal",{attrs:{"time-from":480,"time-to":1320,"time-step":60,"hide-weekends":""}})],1),i("h3",{staticClass:"mt-5"},[e._v("# Demo 2")]),i("p",[e._v("Smaller view, 12-hour time format, hidden header, default month view."),i("br"),e._v("\nSimple click cell to go narrower view.")]),i("v-card",{staticClass:"my-2 ma-auto main-content",staticStyle:{width:"460px",height:"400px"}},[i("vue-cal",{attrs:{small:"","hide-view-selector":"","12-hour":"","default-view":"month","click-to-navigate":""}})],1),i("h3",{staticClass:"mt-5"},[e._v("# Demo 3")]),i("p",[e._v("Extra-small, no timeline."),i("br")]),i("v-card",{staticClass:"my-2 ma-auto main-content",staticStyle:{width:"260px",height:"260px"}},[i("vue-cal",{attrs:{"hide-view-selector":"",time:!1,xsmall:""}})],1),i("h3",{staticClass:"mt-5"},[e._v("# Demo 4")]),i("p",[e._v("i18n."),i("br")]),i("v-card",{staticClass:"my-2 ma-auto main-content",staticStyle:{width:"460px",height:"320px"}},[i("vue-cal",{attrs:{"hide-view-selector":"",time:!1,xsmall:"",locale:"fr"}})],1),i("h3",{staticClass:"mt-5"},[e._v("# Demo 5")]),i("p",[e._v("Different layout. Week view disabled.")]),i("v-card",{staticClass:"my-2 ma-auto main-content round",staticStyle:{width:"280px",height:"300px"}},[i("vue-cal",{attrs:{xsmall:"","hide-view-selector":"","12-hour":"",time:!1,"default-view":"month","disable-views":["week"]}})],1),i("h3",{staticClass:"mt-5"},[e._v("# Demo 6")]),i("p",[e._v("Split days passing a CSS class & a label per split. Disabled views years, year, month.")]),i("v-card",{staticClass:"my-2 ma-auto main-content"},[i("vue-cal",{attrs:{"time-from":480,"time-step":60,"disable-views":["years","year","month"],"split-days":[{class:"him",label:"Him"},{class:"her",label:"Her"}]}})],1),i("h3",{staticClass:"mt-5"},[e._v("# Demo 7")]),i("p",[e._v("Events.")]),i("v-card",{staticClass:"my-2 ma-auto main-content"},[i("vue-cal",{attrs:{"time-step":60,"disable-views":["years","year","month"],"hide-weekends":"",events:e.events}})],1)],1)],1)},r=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"vuecal__flex vuecal",class:e.cssClasses,attrs:{column:""}},[a("div",{staticClass:"vuecal__header"},[e.hideViewSelector?e._e():a("ul",{staticClass:"vuecal__flex vuecal__menu"},e._l(e.views,function(t,i){return t.enabled?a("li",{class:{active:e.view.id===i},on:{click:function(t){e.switchView(i)}}},[e._v(e._s(t.label))]):e._e()})),a("div",{staticClass:"vuecal__title"},[a("div",{staticClass:"vuecal__arrow vuecal__arrow--prev",on:{click:e.previous}},[e._v("←")]),a("span",{class:{clickable:!!e.broaderView},on:{click:function(t){e.switchToBroaderView()}}},[e._v(e._s(e.view.title))]),a("div",{staticClass:"vuecal__arrow vuecal__arrow--next",on:{click:e.next}},[e._v("→")])]),!e.view.headings.length||e.hasSplits&&"week"===e.view.id?e._e():a("div",{staticClass:"vuecal__flex vuecal__weekdays-headings"},e._l(e.view.headings,function(t,i){return a("div",{key:i,staticClass:"vuecal__flex vuecal__heading",class:t.class},[e._v(e._s(t.label))])}))]),a("div",{staticClass:"vuecal__flex vuecal__body",attrs:{grow:""}},[a("div",{class:{vuecal__flex:!e.hasTimeColumn},staticStyle:{"min-width":"100%"}},[a("div",{staticClass:"vuecal__flex vuecal__bg",attrs:{grow:""}},[e.time&&["week","day"].indexOf(e.view.id)>-1?a("div",{staticClass:"vuecal__time-column"},e._l(e.view.timeCells,function(t,i){return a("div",{key:i,staticClass:"vuecal__time-cell",style:"height: "+e.timeCellHeight},[e._v(e._s(t.label))])})):e._e(),a("div",{staticClass:"vuecal__flex vuecal__cells",attrs:{grow:"",column:e.hasSplits&&"week"===e.view.id}},[e.hasSplits&&"week"===e.view.id?a("div",{staticClass:"vuecal__flex vuecal__weekdays-headings"},e._l(e.view.headings,function(t,i){return a("div",{key:i,staticClass:"vuecal__flex vuecal__heading",class:t.class},[e._v(e._s(t.label))])})):e._e(),e.hasSplits?a("div",{staticClass:"vuecal__flex",attrs:{grow:""}},e._l(e.view.cells,function(t,i){return a("vuecal-cell",{key:i,class:t.class,attrs:{date:t.date,events:t.events,content:t.content,splits:e.splitDays},nativeOn:{click:function(a){e.selectCell(t)},dblclick:function(t){e.dblClickToNavigate&&e.switchToNarrowerView()}}})})):e._l(e.view.cells,function(t,i){return a("vuecal-cell",{key:i,class:t.class,attrs:{date:t.date,events:t.events,content:t.content},nativeOn:{click:function(a){e.selectCell(t)},dblclick:function(t){e.dblClickToNavigate&&e.switchToNarrowerView()}}})})],2)])])])])},o=[],u=a("ade3"),d=a("be94"),v=(a("28a5"),a("3835")),h=(a("f386"),a("a481"),a("7514"),a("ac6a"),a("456d"),a("c5f6"),a("6b54"),{en:{weekDays:["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],years:"Years",week:"Week",today:"Today",noEvent:"No Event",dateFormat:"DDDD mmmm d{S}, yyyy"}}),w=new Date,m=function(e){var t=a("4da1")("./".concat(e,".json"));h[e]=t};Date.prototype.addDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()+e),t},Date.prototype.subtractDays=function(e){var t=new Date(this.valueOf());return t.setDate(t.getDate()-e),t},Date.prototype.getWeek=function(){var e=new Date(Date.UTC(this.getFullYear(),this.getMonth(),this.getDate())),t=e.getUTCDay()||7;e.setUTCDate(e.getUTCDate()+4-t);var a=new Date(Date.UTC(e.getUTCFullYear(),0,1));return Math.ceil(((e-a)/864e5+1)/7)};var y=function(e){return g(e)===g(w)},f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=e&&new Date(e.valueOf())||new Date;return t.setDate(t.getDate()-(t.getDay()+6)%7),t},p=function(e,t){var a=new Date(t,e,1),i=[];while(a.getMonth()===e)i.push(new Date(a)),a.setDate(a.getDate()+1);return i},D=function(e){if(e>3&&e<21)return"th";switch(e%10){case 1:return"st";case 2:return"nd";case 3:return"rd";default:return"th"}},_=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"HH:mm",a=Math.floor(e/60),i=a%12?a%12:12,s=a<12?"am":"pm",n=e%60,l={H:a,h:i,HH:(a<10?"0":"")+a,hh:(i<10?"0":"")+i,am:s,AM:s.toUpperCase(),m:n,mm:(n<10?"0":"")+n};return t.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g,function(e,t){return l[t.replace(/\{|\}/g,"")]})},g=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"yyyy-mm-dd",a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"en",i=e.getDate(),s=e.getMonth()+1,n={D:e.getDay(),DDD:h[a].weekDays[(e.getDay()-1+7)%7].substr(0,3),DDDD:h[a].weekDays[(e.getDay()-1+7)%7],d:i,dd:(i<10?"0":"")+i,S:D(i),m:s,mm:(s<10?"0":"")+s,mmm:h[a].months[s-1].substr(0,3),mmmm:h[a].months[s-1],yyyy:e.getFullYear(),yy:e.getFullYear().toString().substr(2,4)};return t.replace(/(\{[a-zA-Z]+\}|[a-zA-Z]+)/g,function(e,t){return n[t.replace(/\{|\}/g,"")]})},b=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.splits.length?a("div",{staticClass:"vuecal__cell",class:e.cssClass},e._l(e.splits.length,function(t){return a("div",{staticClass:"vuecal__cell-content",class:e.splits[t-1].class},[a("div",{staticClass:"split-label",domProps:{innerHTML:e._s(e.splits[t-1].label)}}),e.content?a("div",{domProps:{innerHTML:e._s(e.content)}}):a("div",[e.events.length?e._l(e.events,function(t,i){return a("div",{key:i,staticClass:"vuecal__event"},[e._v(e._s(t.title))])}):a("div",{staticClass:"vuecal__no-event"},[e._v(e._s(e.texts.noEvent))])],2)])})):a("div",{staticClass:"vuecal__cell",class:e.cssClass},[e.content?a("div",{staticClass:"vuecal__cell-content",domProps:{innerHTML:e._s(e.content)}}):a("div",{staticClass:"vuecal__cell-content"},[e.events.length?e._l(e.events,function(t,i){return a("div",{key:i,staticClass:"vuecal__event",style:e.eventPosition(t)},[a("div",{staticClass:"vuecal__event-title"},[e._v(e._s(t.title))]),a("div",{staticClass:"vuecal__event-time"},[e._v(e._s(t.startTime)),t.endTime?a("span",[e._v(" - "+e._s(t.endTime))]):e._e()])])}):a("div",{staticClass:"vuecal__no-event"},[e._v(e._s(e.texts.noEvent))])],2)])},k=[],C={props:{cssClass:{type:String,default:""},date:{type:Date,required:!0},events:{type:Array,default:function(){return[]}},content:{type:[String,Number],default:""},splits:{type:Array,default:function(){return[]}}},data:function(){return{}},methods:{eventPosition:function(e){var t=e.startTime.split(":"),a=Object(v["a"])(t,2),i=a[0],s=a[1];i=parseInt(i),s=parseInt(s);var n=Math.round((i+s/60)*parseInt(this.$parent.timeCellHeight)),l=e.endTime.split(":"),r=Object(v["a"])(l,2),c=r[0],o=r[1];c=parseInt(c),o=parseInt(o);var u=Math.round((c+o/60)*parseInt(this.$parent.timeCellHeight));return{top:n+"px",height:u-n+"px"}}},computed:{texts:function(){return this.$parent.texts}}},x=C,O=(a("d011"),a("2877")),S=Object(O["a"])(x,b,k,!1,null,null,null);S.options.__file="cell.vue";var V=S.exports,T={name:"vue-cal",components:{"vuecal-cell":V},props:{time:{type:Boolean,default:!0},timeFrom:{type:Number,default:0},timeTo:{type:Number,default:1440},timeStep:{type:Number,default:30},timeCellHeight:{type:String,default:"40px"},small:{type:Boolean,default:!1},xsmall:{type:Boolean,default:!1},clickToNavigate:{type:Boolean,default:!1},dblClickToNavigate:{type:Boolean,default:!0},hideViewSelector:{type:Boolean,default:!1},"12Hour":{type:Boolean,default:!1},hideWeekends:{type:Boolean,default:!1},defaultView:{type:String,default:"week"},splitDays:{type:Array,default:function(){return[]}},locale:{type:String,default:"en"},disableViews:{type:Array,default:function(){return[]}},events:{type:Array,default:function(){return[]}}},data:function(){return{now:{Date:w,day:null,week:null,weekFirstDay:null,month:null,year:null},selectedDate:null,monthDays:Array[31],view:{id:"",title:"",headings:[],cells:[],timeCells:[],startDate:null}}},methods:{previous:function(){switch(this.view.id){case"years":this.switchView(this.view.id,this.view.startDate.getFullYear()-25);break;case"year":var e=new Date(this.view.startDate.getFullYear()-1,1,1);this.switchView(this.view.id,e);break;case"month":var t=new Date(this.view.startDate.getFullYear(),this.view.startDate.getMonth()-1,1);this.switchView(this.view.id,t);break;case"week":var a=f(this.view.startDate).subtractDays(7);this.switchView(this.view.id,a);break;case"day":var i=this.view.startDate.subtractDays(1);this.switchView(this.view.id,i);break}},next:function(){switch(this.view.id){case"years":this.switchView(this.view.id,this.view.startDate.getFullYear()+25);break;case"year":var e=new Date(this.view.startDate.getFullYear()+1,0,1);this.switchView(this.view.id,e);break;case"month":var t=new Date(this.view.startDate.getFullYear(),this.view.startDate.getMonth()+1,1);this.switchView(this.view.id,t);break;case"week":var a=f(this.view.startDate).addDays(7);this.switchView(this.view.id,a);break;case"day":var i=this.view.startDate.addDays(1);this.switchView(this.view.id,i);break}},switchToBroaderView:function(){this.broaderView&&this.switchView(this.broaderView)},switchToNarrowerView:function(){var e=this,t=Object.keys(this.views);t=t.slice(t.indexOf(this.view.id)+1);var a=t.find(function(t){return e.views[t].enabled});a&&this.switchView(a)},switchView:function(e){this.view.id=e;for(var t=arguments.length,a=new Array(t>1?t-1:0),i=1;i<t;i++)a[i-1]=arguments[i];this["load"+this.view.id.replace(/\b\w/g,function(e){return e.toUpperCase()})+"View"].apply(this,a)},loadYearsView:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=t||2e3,this.view.id="years",this.view.startDate=new Date(t,0,1),this.view.title=this.texts.years,this.view.headings=[],this.view.cells=Array.apply(null,Array(25)).map(function(a,i){return{content:t+i,date:new Date(t+i,0,1),class:{current:t+i===e.now.year,selected:e.selectedDate&&t+i===e.selectedDate.getFullYear()}}})},loadYearView:function(e){var t=this;e=e||this.selectedDate||this.view.startDate;var a=e.getFullYear();this.view.id="year",this.view.startDate=new Date(a,0,1),this.view.title=a,this.view.headings=[],this.view.cells=Array.apply(null,Array(12)).map(function(i,s){return{content:t.xsmall?t.months[s].label.substr(0,3):t.months[s].label,date:new Date(a,s,1),class:{current:s===t.now.month&&a===t.now.year,selected:s===e.getMonth()&&a===e.getFullYear()}}})},loadMonthView:function(e){var t=this;e=e||this.selectedDate||this.view.startDate;var a=e.getMonth(),i=e.getFullYear(),s=p(a,i),n=s[0].getDay();if(1!==s[0].getDay()){for(var l=f(s[0]),r=[],c=0;c<7;c++)if(r.push(new Date(l)),l.setDate(l.getDate()+1),l.getDay()===n)break;s.unshift.apply(s,r)}this.view.id="month",this.view.startDate=new Date(i,a,1),this.view.title="".concat(this.months[a].label," ").concat(i),this.view.headings=this.weekDays.slice(0,this.hideWeekends?5:7).map(function(e){return{label:t.small||t.xsmall?e.label.substr(0,3):e.label,class:{}}});var o=!1,u=0;this.view.cells=Array.apply(null,Array(42)).map(function(e,n){var l=s[n]||new Date(i,a+1,++u),r=l&&!o&&l.getDate()===t.now.Date.getDate()&&l.getMonth()===t.now.month&&l.getFullYear()===t.now.year;r&&(o=!0);var c=t.events.length&&t.calEvents[g(l,"yyyy-mm-dd",t.locale)]||[];return{content:l.getDate(),date:l,events:c,class:{today:r,"out-of-scope":l.getMonth()!==a,selected:t.selectedDate&&l.getTime()===t.selectedDate.getTime()}}}),this.hideWeekends&&(this.view.cells=this.view.cells.filter(function(e){return e.date.getDay()>0&&e.date.getDay()<6}))},loadWeekView:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t=t||f(this.selectedDate)||f(this.view.startDate),this.view.id="week",this.view.startDate=t,this.view.title="".concat(this.texts.week," ").concat(t.getWeek()," (").concat(g(t,this.xsmall?"mmm yyyy":"mmmm yyyy",this.locale),")"),this.view.cells=this.weekDays.slice(0,this.hideWeekends?5:7).map(function(a,i){var s=t.addDays(i),n=e.events.length&&e.calEvents[g(s,"yyyy-mm-dd",e.locale)]||[];return{date:s,events:n,class:{today:!1,selected:e.selectedDate&&t.addDays(i).getTime()===e.selectedDate.getTime(),splitted:e.hasSplits}}}),this.view.headings=this.weekDays.slice(0,this.hideWeekends?5:7).map(function(a,i){var s=t.addDays(i),n=y(s),l=e.small||e.xsmall?a.label.substr(0,3):a.label;return n&&(e.view.cells[i].class.today=!0),{label:"".concat(l," ").concat(s.getDate()),class:{}}})},loadDayView:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;e=e||this.selectedDate||this.view.startDate;var t=this.events.length&&this.calEvents[g(e,"yyyy-mm-dd",this.locale)]||[];this.view.id="day",this.view.startDate=e,this.view.title=g(e,this.texts.dateFormat,this.locale),this.view.headings=[],this.view.cells=[{date:e,events:t,class:{splitted:this.hasSplits}}]},selectCell:function(e){var t=this;this.selectedDate=e.date,this.view.cells.forEach(function(e){e.class.selected&&(e.class.selected=!1),e.date===t.selectedDate&&(e.class.selected=!0)}),this.clickToNavigate&&this.switchToNarrowerView()}},created:function(){"en"!==this.locale&&m(this.locale);for(var e=this.timeFrom,t=this.timeTo;e<=t;e+=this.timeStep)this.view.timeCells.push({label:_(e,this["12Hour"]?"h:mm{am}":"H:mm"),value:e});this.now.year=this.now.Date.getFullYear(),this.now.month=this.now.Date.getMonth(),this.now.week=this.now.Date.getWeek(),this.now.weekFirstDay=f(this.now.Date),this.now.day=this.now.Date.getDay(),this.selectedDate=new Date(this.now.year,this.now.month,this.now.Date.getDate()),this.switchView(this.defaultView)},computed:{texts:function(){return h[this.locale]},views:function(){return{years:{label:"Years",enabled:-1===this.disableViews.indexOf("years")},year:{label:"Year",enabled:-1===this.disableViews.indexOf("year")},month:{label:"Month",enabled:-1===this.disableViews.indexOf("month")},week:{label:"Week",enabled:-1===this.disableViews.indexOf("week")},day:{label:"Day",enabled:-1===this.disableViews.indexOf("day")}}},broaderView:function(){var e=this,t=Object.keys(this.views);return t=t.slice(0,t.indexOf(this.view.id)),t.reverse(),t.find(function(t){return e.views[t].enabled})},hasTimeColumn:function(){return this.time&&["week","day"].indexOf(this.view.id)>-1},hasSplits:function(){return!!this.splitDays.length&&["week","day"].indexOf(this.view.id)>-1},weekDays:function(){return this.texts.weekDays.map(function(e){return{label:e}})},months:function(){return this.texts.months.map(function(e){return{label:e}})},calEvents:function(){var e={};return this.events.forEach(function(t){var a=t.start.split(" "),i=Object(v["a"])(a,2),s=i[0],n=i[1],l=t.end.split(" "),r=Object(v["a"])(l,2),c=r[1];e[s]||(e[s]=[]),e[s].push(Object(d["a"])({},t,{startTime:n,endTime:c}))}),e},cssClasses:function(){var e;return e={},Object(u["a"])(e,"vuecal--".concat(this.view.id,"-view"),!0),Object(u["a"])(e,"view-with-time",this.hasTimeColumn),Object(u["a"])(e,"vuecal--time-12-hour",this["12Hour"]),Object(u["a"])(e,"click-to-navigate",this.clickToNavigate),Object(u["a"])(e,"vuecal--hide-weekends",this.hideWeekends),Object(u["a"])(e,"vuecal--split-days",this.splitDays.length),Object(u["a"])(e,"vuecal--small",this.small),Object(u["a"])(e,"vuecal--xsmall",this.xsmall),e}}},M=T,j=(a("17ac"),Object(O["a"])(M,c,o,!1,null,null,null));j.options.__file="index.vue";var A=j.exports,F={name:"app",components:{VueCal:A},data:function(){return{events:[{start:"2018-11-16 10:30",end:"2018-11-16 11:30",title:"Doctor appointment 1"},{start:"2018-11-19 10:35",end:"2018-11-19 11:30",title:"Doctor appointment"},{start:"2018-11-19 20:30",end:"2018-11-19 21:30",title:"Dentist appointment"}]}}},N=F,Y=(a("5c0b"),Object(O["a"])(N,l,r,!1,null,null,null));Y.options.__file="App.vue";var E=Y.exports;i["default"].config.productionTip=!1,new i["default"]({render:function(e){return e(E)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var i=a("5e27"),s=a.n(i);s.a},"5e27":function(e,t,a){},"6b6a":function(e,t,a){},"85e1":function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"},d011:function(e,t,a){"use strict";var i=a("6b6a"),s=a.n(i);s.a},eed7:function(e){e.exports={weekDays:["Lunedì","Martedì","Mercoledì","Giovedì","Venerdì","Sabato","Domenica"],months:["Gennaio","Febbraio","Marzo","Aprile","Maggio","Giugno","Luglio","Agosto","Settembre","Ottobre","Novembre","Dicembre"],years:"Anni",week:"Settimana",today:"Oggi",noEvent:"No evento",dateFormat:"DDDD d mmmm yyyy"}}});
//# sourceMappingURL=app.a53bb0b8.js.map