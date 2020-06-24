(this.webpackJsonpcovid19countrydataviz=this.webpackJsonpcovid19countrydataviz||[]).push([[0],{230:function(a,e,l){a.exports=l(479)},239:function(a,e,l){},419:function(a,e,l){},475:function(a,e,l){},476:function(a,e,l){},477:function(a,e,l){},479:function(a,e,l){"use strict";l.r(e);var t=l(1),n=l.n(t),u=l(34),r=l.n(u),i=l(56),o=l(49),c=l(133);function v(a){return{type:"SET_COUNTRY",country:a}}var b={value:"",label:""};var s=Object(o.b)({country:function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"SET_COUNTRY":return Object(c.a)(Object(c.a)({},a),{},{value:e.country.value,label:e.country.label});default:return a}}}),d=(l(239),l(25)),m=l(26),h=l(28),y=l(27),p=l(204),E=l(13),M=l(57),f=l.n(M),S=l(83),g=l(15),C=l.n(g),D=l(14),A=l(60),T=l.n(A),I=function(a){var e;switch(a){case"DAILY_CASE":e=7;break;case"MORTALITY_RATE_PERCENTAGE":e=3;break;default:e=1}return e},N=function(a,e,l,t,n){var u=[],r=Object.entries(e);return"DAILY_CASE"===a?r.map((function(a,e){if(C()(a[0]).isBetween(t,n)){var i=0;(null!=r[e-l]?r.slice(e-l,e):r.slice(0,e)).map((function(a){i+=a[1].new_daily_cases}));var o=i/l;u.push({date:C()(a[0]).format("DD/M/YY"),average:Math.floor(100*o)/100,max:1e4})}})):"MORTALITY_RATE_PERCENTAGE"===a?r.map((function(a,e){if(C()(a[0]).isBetween(t,n)){var i=0;(null!=r[e-l]?r.slice(e-l,e):r.slice(0,e)).map((function(a){i+=a[1].total_deaths/a[1].total_cases}));var o=i/l;u.push({date:C()(a[0]).format("DD/M/YY"),average:Math.floor(1e4*o)/1e4})}})):"DAILY_DEATH_CHANGE"===a&&r.map((function(a,e){if(C()(a[0]).isBetween(t,n)){var i=0;null!=r[e-l]&&(i=r[e][1].new_daily_deaths-r[e-l][1].new_daily_deaths),u.push({date:C()(a[0]).format("DD/M/YY"),dailydeathchange:i})}})),u},G=(l(419),function(a){Object(h.a)(l,a);var e=Object(y.a)(l);function l(a){var t;return Object(d.a)(this,l),(t=e.call(this,a)).state={dayValueOfMovingAverage:I(t.props.mode),startDate:C()().subtract(60,"days").format("M/DD/YY"),endDate:C()().format("M/DD/YY")},t}return Object(m.a)(l,[{key:"render",value:function(){var a=this.props,e=a.mode,l=a.countryData;if(null==l)return null;var t,u=this.state,r=u.dayValueOfMovingAverage,i=u.startDate,o=u.endDate;switch(e){case"DAILY_CASE":t="moving average of daily cases";break;case"MORTALITY_RATE_PERCENTAGE":t="moving average of mortality rate";break;default:t=7}var c=N(e,l,r,i,o),v="",b=0;return c.map((function(a,e){c[e].average>b&&(v=c[e].date,b=c[e].average)})),console.log("dataMaxX",v),console.log("dataMaxY",b),n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"linechart-container"},n.a.createElement("div",{className:"linechart-name"},n.a.createElement("select",null,n.a.createElement("option",{value:r},r,"-day")),t),n.a.createElement("div",{className:"linechart-wrapper"},n.a.createElement(D.i,{width:"95%",height:350,display:"inline-block"},n.a.createElement(D.f,{data:c,margin:{top:5,right:15,left:15,bottom:5}},n.a.createElement(D.e,{type:"monotone",dataKey:"average",stroke:"#d88484",isAnimationActive:!1,dot:!1}),n.a.createElement(D.c,{stroke:"#ccc",strokeDasharray:"3 3"}),n.a.createElement(D.k,{dataKey:"date",interval:"preserveEnd"}),n.a.createElement(D.l,{type:"number",interval:"preserveStartEnd",domain:[0,function(a){return 1.2*a<10?Math.floor(1.2*a*100)/100:100*Math.ceil(Math.trunc(a)/100)}]}),n.a.createElement(D.j,null),n.a.createElement(D.g,{isFront:!0,x:v,y:b,label:"MAX",fill:"red",stroke:"none"}))))),n.a.createElement("div",{className:"linechart-dates-container"},n.a.createElement("div",{className:"linechart-date-container linechart-startdate"},n.a.createElement("span",null,"Start date"),n.a.createElement(T.a,{dateFormat:"dd/M/yy",selected:new Date(i)})),n.a.createElement("div",{className:"linechart-date-container linechart-enddate"},n.a.createElement("span",null,"End date"),n.a.createElement(T.a,{dateFormat:"dd/M/yy",selected:new Date(o)}))))}}]),l}(t.Component)),B=(l(475),function(a){Object(h.a)(l,a);var e=Object(y.a)(l);function l(a){var t;return Object(d.a)(this,l),(t=e.call(this,a)).state={dayValueOfMovingAverage:I(t.props.mode),startDate:C()().subtract(60,"days").format("M/DD/YY"),endDate:C()().format("M/DD/YY")},t}return Object(m.a)(l,[{key:"render",value:function(){var a=this.props,e=a.mode,l=a.countryData;if(null==l)return null;var t,u=this.state,r=u.dayValueOfMovingAverage,i=u.startDate,o=u.endDate;switch(e){case"DAILY_DEATH_CHANGE":t="Daily new deaths changed from the previous day\u2019s death count";break;default:t=""}var c=N(e,l,r,i,o);return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"barchart-container"},n.a.createElement("div",{className:"barchart-name"},t),n.a.createElement("div",{className:"barchart-wrapper"},n.a.createElement(D.i,{width:"95%",height:350,display:"inline-block"},n.a.createElement(D.b,{data:c,margin:{top:5,right:15,left:15,bottom:5}},n.a.createElement(D.a,{dataKey:"dailydeathchange",fill:"#8884d8"},c.map((function(a,e){return n.a.createElement(D.d,{key:"cell-".concat(e),fill:a.dailydeathchange>0?"#D62728":"#2E8B57"})}))),n.a.createElement(D.k,{dataKey:"date",interval:"preserveEnd"}),n.a.createElement(D.l,{type:"number",domain:["dataMin","dataMax"]}),n.a.createElement(D.h,{y:0,stroke:"#000"}),n.a.createElement(D.j,null))))),n.a.createElement("div",{className:"barchart-dates-container"},n.a.createElement("div",{className:"barchart-date-container barchart-startdate"},n.a.createElement("span",null,"Start date"),n.a.createElement(T.a,{dateFormat:"dd/M/yy",selected:new Date(i)})),n.a.createElement("div",{className:"barchart-date-container barchart-enddate"},n.a.createElement("span",null,"End date"),n.a.createElement(T.a,{dateFormat:"dd/M/yy",selected:new Date(o)}))))}}]),l}(t.Component)),O=[{value:"AF",label:"Afghanistan"},{value:"AX",label:"\xc5land Islands"},{value:"AL",label:"Albania"},{value:"DZ",label:"Algeria"},{value:"AS",label:"American Samoa"},{value:"AD",label:"Andorra"},{value:"AO",label:"Angola"},{value:"AI",label:"Anguilla"},{value:"AQ",label:"Antarctica"},{value:"AG",label:"Antigua and Barbuda"},{value:"AR",label:"Argentina"},{value:"AM",label:"Armenia"},{value:"AW",label:"Aruba"},{value:"AU",label:"Australia"},{value:"AT",label:"Austria"},{value:"AZ",label:"Azerbaijan"},{value:"BS",label:"Bahamas"},{value:"BH",label:"Bahrain"},{value:"BD",label:"Bangladesh"},{value:"BB",label:"Barbados"},{value:"BY",label:"Belarus"},{value:"BE",label:"Belgium"},{value:"BZ",label:"Belize"},{value:"BJ",label:"Benin"},{value:"BM",label:"Bermuda"},{value:"BT",label:"Bhutan"},{value:"BO",label:"Bolivia, Plurinational State of"},{value:"BQ",label:"Bonaire, Sint Eustatius and Saba"},{value:"BA",label:"Bosnia and Herzegovina"},{value:"BW",label:"Botswana"},{value:"BV",label:"Bouvet Island"},{value:"BR",label:"Brazil"},{value:"IO",label:"British Indian Ocean Territory"},{value:"BN",label:"Brunei Darussalam"},{value:"BG",label:"Bulgaria"},{value:"BF",label:"Burkina Faso"},{value:"BI",label:"Burundi"},{value:"KH",label:"Cambodia"},{value:"CM",label:"Cameroon"},{value:"CA",label:"Canada"},{value:"CV",label:"Cape Verde"},{value:"KY",label:"Cayman Islands"},{value:"CF",label:"Central African Republic"},{value:"TD",label:"Chad"},{value:"CL",label:"Chile"},{value:"CN",label:"China"},{value:"CX",label:"Christmas Island"},{value:"CC",label:"Cocos (Keeling) Islands"},{value:"CO",label:"Colombia"},{value:"KM",label:"Comoros"},{value:"CG",label:"Congo"},{value:"CD",label:"Congo, the Democratic Republic of the"},{value:"CK",label:"Cook Islands"},{value:"CR",label:"Costa Rica"},{value:"CI",label:"C\xf4te d'Ivoire"},{value:"HR",label:"Croatia"},{value:"CU",label:"Cuba"},{value:"CW",label:"Cura\xe7ao"},{value:"CY",label:"Cyprus"},{value:"CZ",label:"Czech Republic"},{value:"DK",label:"Denmark"},{value:"DJ",label:"Djibouti"},{value:"DM",label:"Dominica"},{value:"DO",label:"Dominican Republic"},{value:"EC",label:"Ecuador"},{value:"EG",label:"Egypt"},{value:"SV",label:"El Salvador"},{value:"GQ",label:"Equatorial Guinea"},{value:"ER",label:"Eritrea"},{value:"EE",label:"Estonia"},{value:"ET",label:"Ethiopia"},{value:"FK",label:"Falkland Islands (Malvinas)"},{value:"FO",label:"Faroe Islands"},{value:"FJ",label:"Fiji"},{value:"FI",label:"Finland"},{value:"FR",label:"France"},{value:"GF",label:"French Guiana"},{value:"PF",label:"French Polynesia"},{value:"TF",label:"French Southern Territories"},{value:"GA",label:"Gabon"},{value:"GM",label:"Gambia"},{value:"GE",label:"Georgia"},{value:"DE",label:"Germany"},{value:"GH",label:"Ghana"},{value:"GI",label:"Gibraltar"},{value:"GR",label:"Greece"},{value:"GL",label:"Greenland"},{value:"GD",label:"Grenada"},{value:"GP",label:"Guadeloupe"},{value:"GU",label:"Guam"},{value:"GT",label:"Guatemala"},{value:"GG",label:"Guernsey"},{value:"GN",label:"Guinea"},{value:"GW",label:"Guinea-Bissau"},{value:"GY",label:"Guyana"},{value:"HT",label:"Haiti"},{value:"HM",label:"Heard Island and McDonald Islands"},{value:"VA",label:"Holy See (Vatican City State)"},{value:"HN",label:"Honduras"},{value:"HK",label:"Hong Kong"},{value:"HU",label:"Hungary"},{value:"IS",label:"Iceland"},{value:"IN",label:"India"},{value:"ID",label:"Indonesia"},{value:"IR",label:"Iran, Islamic Republic of"},{value:"IQ",label:"Iraq"},{value:"IE",label:"Ireland"},{value:"IM",label:"Isle of Man"},{value:"IL",label:"Israel"},{value:"IT",label:"Italy"},{value:"JM",label:"Jamaica"},{value:"JP",label:"Japan"},{value:"JE",label:"Jersey"},{value:"JO",label:"Jordan"},{value:"KZ",label:"Kazakhstan"},{value:"KE",label:"Kenya"},{value:"KI",label:"Kiribati"},{value:"KP",label:"Korea, Democratic People's Republic of"},{value:"KR",label:"Korea, Republic of"},{value:"KW",label:"Kuwait"},{value:"KG",label:"Kyrgyzstan"},{value:"LA",label:"Lao People's Democratic Republic"},{value:"LV",label:"Latvia"},{value:"LB",label:"Lebanon"},{value:"LS",label:"Lesotho"},{value:"LR",label:"Liberia"},{value:"LY",label:"Libya"},{value:"LI",label:"Liechtenstein"},{value:"LT",label:"Lithuania"},{value:"LU",label:"Luxembourg"},{value:"MO",label:"Macao"},{value:"MK",label:"Macedonia, the Former Yugoslav Republic of"},{value:"MG",label:"Madagascar"},{value:"MW",label:"Malawi"},{value:"MY",label:"Malaysia"},{value:"MV",label:"Maldives"},{value:"ML",label:"Mali"},{value:"MT",label:"Malta"},{value:"MH",label:"Marshall Islands"},{value:"MQ",label:"Martinique"},{value:"MR",label:"Mauritania"},{value:"MU",label:"Mauritius"},{value:"YT",label:"Mayotte"},{value:"MX",label:"Mexico"},{value:"FM",label:"Micronesia, Federated States of"},{value:"MD",label:"Moldova, Republic of"},{value:"MC",label:"Monaco"},{value:"MN",label:"Mongolia"},{value:"ME",label:"Montenegro"},{value:"MS",label:"Montserrat"},{value:"MA",label:"Morocco"},{value:"MZ",label:"Mozambique"},{value:"MM",label:"Myanmar"},{value:"NA",label:"Namibia"},{value:"NR",label:"Nauru"},{value:"NP",label:"Nepal"},{value:"NL",label:"Netherlands"},{value:"NC",label:"New Caledonia"},{value:"NZ",label:"New Zealand"},{value:"NI",label:"Nicaragua"},{value:"NE",label:"Niger"},{value:"NG",label:"Nigeria"},{value:"NU",label:"Niue"},{value:"NF",label:"Norfolk Island"},{value:"MP",label:"Northern Mariana Islands"},{value:"NO",label:"Norway"},{value:"OM",label:"Oman"},{value:"PK",label:"Pakistan"},{value:"PW",label:"Palau"},{value:"PS",label:"Palestine, State of"},{value:"PA",label:"Panama"},{value:"PG",label:"Papua New Guinea"},{value:"PY",label:"Paraguay"},{value:"PE",label:"Peru"},{value:"PH",label:"Philippines"},{value:"PN",label:"Pitcairn"},{value:"PL",label:"Poland"},{value:"PT",label:"Portugal"},{value:"PR",label:"Puerto Rico"},{value:"QA",label:"Qatar"},{value:"RE",label:"R\xe9union"},{value:"RO",label:"Romania"},{value:"RU",label:"Russian Federation"},{value:"RW",label:"Rwanda"},{value:"BL",label:"Saint Barth\xe9lemy"},{value:"SH",label:"Saint Helena, Ascension and Tristan da Cunha"},{value:"KN",label:"Saint Kitts and Nevis"},{value:"LC",label:"Saint Lucia"},{value:"MF",label:"Saint Martin (French part)"},{value:"PM",label:"Saint Pierre and Miquelon"},{value:"VC",label:"Saint Vincent and the Grenadines"},{value:"WS",label:"Samoa"},{value:"SM",label:"San Marino"},{value:"ST",label:"Sao Tome and Principe"},{value:"SA",label:"Saudi Arabia"},{value:"SN",label:"Senegal"},{value:"RS",label:"Serbia"},{value:"SC",label:"Seychelles"},{value:"SL",label:"Sierra Leone"},{value:"SG",label:"Singapore"},{value:"SX",label:"Sint Maarten (Dutch part)"},{value:"SK",label:"Slovakia"},{value:"SI",label:"Slovenia"},{value:"SB",label:"Solomon Islands"},{value:"SO",label:"Somalia"},{value:"ZA",label:"South Africa"},{value:"GS",label:"South Georgia and the South Sandwich Islands"},{value:"SS",label:"South Sudan"},{value:"ES",label:"Spain"},{value:"LK",label:"Sri Lanka"},{value:"SD",label:"Sudan"},{value:"SR",label:"Suriname"},{value:"SJ",label:"Svalbard and Jan Mayen"},{value:"SZ",label:"Swaziland"},{value:"SE",label:"Sweden"},{value:"CH",label:"Switzerland"},{value:"SY",label:"Syrian Arab Republic"},{value:"TW",label:"Taiwan, Province of China"},{value:"TJ",label:"Tajikistan"},{value:"TZ",label:"Tanzania, United Republic of"},{value:"TH",label:"Thailand"},{value:"TL",label:"Timor-Leste"},{value:"TG",label:"Togo"},{value:"TK",label:"Tokelau"},{value:"TO",label:"Tonga"},{value:"TT",label:"Trinidad and Tobago"},{value:"TN",label:"Tunisia"},{value:"TR",label:"Turkey"},{value:"TM",label:"Turkmenistan"},{value:"TC",label:"Turks and Caicos Islands"},{value:"TV",label:"Tuvalu"},{value:"UG",label:"Uganda"},{value:"UA",label:"Ukraine"},{value:"AE",label:"United Arab Emirates"},{value:"GB",label:"United Kingdom"},{value:"US",label:"United States"},{value:"UM",label:"United States Minor Outlying Islands"},{value:"UY",label:"Uruguay"},{value:"UZ",label:"Uzbekistan"},{value:"VU",label:"Vanuatu"},{value:"VE",label:"Venezuela, Bolivarian Republic of"},{value:"VN",label:"Viet Nam"},{value:"VG",label:"Virgin Islands, British"},{value:"VI",label:"Virgin Islands, U.S."},{value:"WF",label:"Wallis and Futuna"},{value:"EH",label:"Western Sahara"},{value:"YE",label:"Yemen"},{value:"ZM",label:"Zambia"},{value:"ZW",label:"Zimbabwe"}],R=(l(476),{setCountry:v}),k=function(a){Object(h.a)(l,a);var e=Object(y.a)(l);function l(a){var t;return Object(d.a)(this,l),(t=e.call(this,a)).getCountryData=Object(S.a)(f.a.mark((function a(){var e,l,n,u;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.props.country,console.log("country",e),a.next=4,fetch("https://api.thevirustracker.com/free-api?countryTimeline="+e.value);case 4:return l=a.sent,a.next=7,l.text();case 7:n=(n=a.sent).split("<br />"),console.log("resCountryDataText",n),null!=(u=JSON.parse(n)).timelineitems&&"ok"===u.timelineitems[0].stat&&t.setState({countryData:u.timelineitems[0]});case 12:case"end":return a.stop()}}),a)}))),t.handleChangeCountry=function(a){var e=document.getElementById("country-select"),l=e.options[e.selectedIndex],n={value:l.value,label:l.text};console.log("currentCountry",n),t.props.setCountry(n)},t.state={},t}return Object(m.a)(l,[{key:"componentDidMount",value:function(){this.getCountryData()}},{key:"componentDidUpdate",value:function(a){this.props.country!==a.country&&(console.log("Updated"),this.getCountryData())}},{key:"render",value:function(){return n.a.createElement("div",{className:"Home"},n.a.createElement("h1",null,"COVID-19 Country Data Visualization"),n.a.createElement("select",{id:"country-select",defaultValue:"",onChange:this.handleChangeCountry},n.a.createElement("option",{value:"",hidden:!0},"Choose a country"),null!=O&&O.map((function(a){return n.a.createElement("option",{key:a.value,value:a.value},a.label)}))),n.a.createElement(G,{mode:"DAILY_CASE",countryData:this.state.countryData}),n.a.createElement(G,{mode:"MORTALITY_RATE_PERCENTAGE",countryData:this.state.countryData}),n.a.createElement(B,{mode:"DAILY_DEATH_CHANGE",countryData:this.state.countryData}))}}]),l}(t.Component),w=Object(i.b)((function(a){return{country:a.country}}),R)(k),L=(l(477),{setCountry:v}),P=function(a){Object(h.a)(l,a);var e=Object(y.a)(l);function l(a){var t;return Object(d.a)(this,l),(t=e.call(this,a)).getCountryData=Object(S.a)(f.a.mark((function a(){var e,l,n,u;return f.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return e=t.props.country,console.log("country",e),a.next=4,fetch("https://api.thevirustracker.com/free-api?countryTimeline="+e.value);case 4:return l=a.sent,a.next=7,l.text();case 7:n=(n=a.sent).split("<br />"),console.log("resCountryDataText",n),null!=(u=JSON.parse(n)).timelineitems&&"ok"===u.timelineitems[0].stat&&t.setState({countryData:u.timelineitems[0]});case 12:case"end":return a.stop()}}),a)}))),t.state={},t}return Object(m.a)(l,[{key:"componentDidMount",value:function(){var a={value:this.props.match.params.countryvalue};console.log("currentCountry",a),this.props.setCountry(a),this.getCountryData()}},{key:"render",value:function(){return n.a.createElement("div",{className:"country-container"},n.a.createElement("span",null,this.props.country.label),null!=this.state.countryData&&n.a.createElement(G,{countryData:this.state.countryData}))}}]),l}(t.Component),Y=Object(i.b)((function(a){return{country:a.country}}),L)(P),F=function(a){Object(h.a)(l,a);var e=Object(y.a)(l);function l(){return Object(d.a)(this,l),e.apply(this,arguments)}return Object(m.a)(l,[{key:"render",value:function(){return n.a.createElement(p.a,null,n.a.createElement(E.c,null,n.a.createElement(E.a,{exact:!0,path:"/",component:w}),n.a.createElement(E.a,{path:"/country/:countryvalue",component:Y})))}}]),l}(t.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var j=Object(o.c)(s);r.a.render(n.a.createElement(i.a,{store:j},n.a.createElement(n.a.StrictMode,null,n.a.createElement(F,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(a){a.unregister()})).catch((function(a){console.error(a.message)}))}},[[230,1,2]]]);
//# sourceMappingURL=main.63034156.chunk.js.map