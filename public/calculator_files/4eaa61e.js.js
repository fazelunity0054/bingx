!function(){try{var t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},e=(new Error).stack;e&&(t._sentryDebugIds=t._sentryDebugIds||{},t._sentryDebugIds[e]="930cc932-effd-4cd8-8fd9-7651397e5340",t._sentryDebugIdIdentifier="sentry-dbid-930cc932-effd-4cd8-8fd9-7651397e5340")}catch(t){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"4.53.4-prod"},(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{161:function(t,e,n){"use strict";n.r(e),n.d(e,"MARKET_SET_LOADING_STATE",(function(){return r})),n.d(e,"MARKET_SET_SECOND_TYPE",(function(){return o})),n.d(e,"MARKET_SET_SORT",(function(){return c})),n.d(e,"MARKET_SET_SPOT_DATA",(function(){return d}));var r="market/setLoadingState",o="market/setSecondType",c="market/setSort",d="market/setSpotData"},236:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return d}));n(398);var r=n(156),o=n.n(r),c=(n(70),function(t,e){return isNaN(t)||isNaN(e)||0===t?0:new o.a(t).minus(e).div(e).times(100).toFixed(2,o.a.ROUND_DOWN)}),d=function(t){var e=t.open,n=void 0===e?0:e,r=t.close,o=void 0===r?0:r,d=t.rate,l=void 0===d?void 0:d,f=t.defaultVal,E=void 0===f?"--":f,T=t.isAddPlus,_=void 0===T||T,S=l||c(o,n);return isNaN(+S)?E:(+S>0&&_?"+":"")+"".concat(S,"%")}},28:function(t,e,n){"use strict";n.r(e),n.d(e,"SET_EARNING_TREND",(function(){return r})),n.d(e,"SET_WEEKLY_PNL",(function(){return o})),n.d(e,"SET_RISK_ASSESSMENT",(function(){return c})),n.d(e,"SET_SYMBOL_PREFERENCE",(function(){return d})),n.d(e,"SET_CHART_TYPE",(function(){return l})),n.d(e,"SET_API_IDENTITY",(function(){return f})),n.d(e,"SET_TRADER_ID",(function(){return E})),n.d(e,"SET_LAST_DAY_NUM",(function(){return T})),n.d(e,"SET_STATICS_DESC",(function(){return _})),n.d(e,"SET_VALID",(function(){return S})),n.d(e,"SET_ACCOUNT_ENUM",(function(){return m})),n.d(e,"UPDATE_FEED_LIST_TO_READ",(function(){return I})),n.d(e,"SET_REPORTED_FEED_IDS",(function(){return y})),n.d(e,"SET_INSURANCE_USABLE",(function(){return v})),n.d(e,"SET_COPY_TRADER_USER_CONFIG",(function(){return O})),n.d(e,"SET_RIGHT_AND_CONDITION",(function(){return N})),n.d(e,"SET_IS_FROM_NATURAL",(function(){return A})),n.d(e,"SET_SPOT_EARNING_TREND",(function(){return D})),n.d(e,"SET_PAGE_TRADER_INFO",(function(){return h}));var r="SET_EARNING_TREND",o="SET_WEEKLY_PNL",c="SET_RISK_ASSESSMENT",d="SET_SYMBOL_PREFERENCE",l="SET_CHART_TYPE",f="SET_API_IDENTITY",E="SET_TRADER_ID",T="SET_LAST_DAY_NUM",_="SET_STATICS_DESC",S="SET_VALID",m="SET_ACCOUNT_ENUM",I="UPDATE_FEED_LIST_TO_READ",y="SET_REPORTED_FEED_IDS",v="SET_INSURANCE_USABLE",O="SET_COPY_TRADER_USER_CONFIG",N="SET_RIGHT_AND_CONDITION",A="SET_IS_FROM_NATURAL",D="SET_SPOT_EARNING_TREND",h="SET_PAGE_TRADER_INFO"},307:function(t,e,n){"use strict";n.d(e,"a",(function(){return c})),n.d(e,"b",(function(){return l}));n(5),n(40),n(49),n(48),n(18),n(76),n(92),n(80);var r=n(70),o=n(78);function c(content,t){if(Array.isArray(t)){var e="",n=content,o=0;return t.forEach((function(t){var c=d(t),l=t.startOffset-o,f=t.endOffset-o,E=Object(r.r)(n.slice(0,l)),T=n.slice(l,f);3===t.elementType?e+="".concat(E,'<a href="').concat(c,'" style="color: #2a54ff" target="_blank" rel="nofollow noopener noreferrer" >').concat(T,"</a>"):e+="".concat(E,'<span style="color: #2a54ff" data-type="').concat(t.elementType,'" data-url="').concat(c,'">').concat(T,"</span>"),o+=f,n=n.slice(f)})),e+=Object(r.r)(n)}return Object(r.r)(content)}function d(t){switch(t.elementType){case 1:switch(t.bizType){case 10:return"bingbon://trade/detail?coinName=".concat(t.coinName,"&valuationCoinName=").concat(t.valuationCoinName,"&precision=").concat(t.precision,"&quotationId=").concat(t.quotationId);case 11:return"bingbon://trade/detail?coinId=".concat(t.coinId,"&coinName=").concat(t.coinName,"&valuationCoinName=").concat(t.valuationCoinName,"&precision=").concat(t.precision,"&quotationId=").concat(t.quotationId);case 20:return/(Android)/i.test(navigator.userAgent)?"bingbon://pro.bingbon?symbol=".concat(t.coinName,"-").concat(t.valuationCoinName,"&perpetual=1"):"bingbon://trade/perpetual/transaction?symbol=".concat(t.coinName,"-").concat(t.valuationCoinName);case 30:return"bingbon://spot/order?coin=".concat(t.coinName,"&valuationCoin=").concat(t.valuationCoinName)}return"";case 2:return"bingbon://userPersonal?userUid=".concat(t.traderUid,"&apiIdentity=").concat(2===t.category?-1:t.apiIdentity);case 3:return t.jumpUrl}}function l(t){var e=t.items||[],n={},r=[],l=[],f=null,E="",T=!1,title="";if(e.forEach((function(e){switch(e.type){case"title":T=!0,title=e.content,E=e.content,e.typeIndex=0;break;case"text":!1===T&&(E+=e.content),void 0!==n.text?n.text+=1:n.text=T?1:0,e.typeIndex=n.text,1!==t.hideElement&&!f&&e.elements&&e.elements.length>0&&(f=function(element){switch(element.elementType){case 1:return{cardType:"symbol",name:"".concat(element.coinName,"/").concat(element.valuationCoinName),bizType:element.bizType,iconUrl:element.iconUrl,closePrice:element.closePrice,rateStr:Object(o.d)(100*(element.closePrice/element.openPrice-1),2,"--",!0,!0)+"%",schema:d(element)};case 2:return{cardType:"trader",trader:element.traderUid,apiIdentity:element.apiIdentity,category:element.category,nickName:element.nickName,displayName:element.displayName,schema:d(element)};case 3:return{cardType:"link",link:element.orgUrl}}return null}(e.elements[0])),e.content=c(e.content,e.elements),r.push(e);break;case"picture":void 0!==n.picture?n.picture+=1:n.picture=0,e.typeIndex=n.picture,l.push(e)}})),r.length>0){var _=r[r.length-1];_.content=_.content.replace(/<br>$/,"")}var S=r.map((function(t){return t.content})).join("\n"),m=l.map((function(t){var e=t.params.width/t.params.height;return{isLong:e<1,isSuperLong:e<.25,ratio:e,url:t.content,width:t.params.width,height:t.params.height}}));return t.title=title,t.content=S,t.text=title+S,t.imgs=m,t.cardPreview=f,t.shareText=E,t.contentFrom=(t.contentFrom||"").replace("BingX",""),t}},369:function(t,e,n){"use strict";n.r(e),n.d(e,"SPOT_UPDATE_MODULE_INFO_OVERVIEW_DATA",(function(){return r}));var r="spot/updateModuleInfoOverviewData"},370:function(t,e,n){"use strict";n.r(e),n.d(e,"SWAP_UPDATE_POSITION_DATA",(function(){return r}));var r="swap/updatePositionData"},429:function(t,e,n){"use strict";n.r(e),n.d(e,"TypeEnum",(function(){return m})),n.d(e,"SortByEnum",(function(){return I})),n.d(e,"SortOrderEnum",(function(){return y}));n(43),n(45),n(44),n(63),n(66);var r,o=n(6),c=n(3),d=(n(103),n(5),n(40),n(48),n(287),n(65),n(54),n(50),n(364)),l=n.n(d),f=n(161),E=n(70),T=n(236);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function S(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m={ALL:"all",FUTURES:"futures",SPOT:"spot",FAVORITE:"favorite",NEWEST:"newest"},I={PRICE:"price",WORTH:"worth",CHANGE:"change"},y={DESC:"DESC",ASC:"ASC"},v=function(t){var e=t.value,n=t.precision,r=void 0===n?12:n,o=t.symbol,symbol=void 0===o?"":o;return!e||isNaN(e)?"--":l()(e,{precision:r,symbol:symbol}).format()},O={namespaced:!0,state:function(){return{sort:{by:I.WORTH,order:y.DESC},spotData:"",loading:{spot:!1},secondType:4021,dataCacheKeyMap:{}}},getters:{quotationType:function(){return m.SPOT},loading:function(t,e){return t.loading[e.quotationType]},getSpotDataSource:function(t,e,n){return function(){var e,r=(null===(e=t.spotData)||void 0===e?void 0:e.quotationList)||[],o=[];return r.forEach((function(t){var e=n.spot.symbolPriceMap["".concat(t.coinName,"_").concat(t.valuationCoinName)]||{};o.push(S(S({},t),{},{close:e.close||t.close,rate:e.rate||0,rateText:Object(T.b)((null==e?void 0:e.rate)||0)}))})),t.sort.by&&t.sort.order&&o.sort((function(a,b){switch(t.sort.by){case I.PRICE:return t.sort.order===y.DESC?b.close-a.close:a.close-b.close;case I.CHANGE:return t.sort.order===y.DESC?b.rate-a.rate:a.rate-b.rate;case I.WORTH:return t.sort.order===y.DESC?b.marketVal-a.marketVal:a.marketVal-b.marketVal}})),o}},getTypeDisplayData:function(t,e){return function(t){var n=[],r=[];return t===m.SPOT&&(r=e.getSpotDataSource()||[]),r&&r.forEach((function(t){var e=Object(T.a)(t.close,t.open);n.push(S(S({},t),{},{fullName:t.fullName||t.name,icon:Object(E.f)(t.coinName),change24H:t.rate||e,valuationCoinName:t.valuationCoinName||t.valCoinName,change24HTxt:Object(T.b)({rate:t.rate||e}),futuresType:t.futuresType,high24:t.high24?v({value:t.high24,precision:t.valuationPrecision}):"--",low24:t.low24?v({value:t.low24,precision:t.valuationPrecision}):"--",closeTxt:t.close?v({value:t.close,precision:t.valuationPrecision}):"--",marketValue:t.marketVal,marketValueTxt:t.marketVal?"$"+Object(E.t)(t.marketVal):"--"}))})),n}},quotationList:function(t,e){return e.getTypeDisplayData(e.quotationType)},iconUrlPrefix:function(t){var e;return(null===(e=t.spotData)||void 0===e?void 0:e.iconUrlPrefix)||""}},mutations:(r={},Object(c.a)(r,f.MARKET_SET_SPOT_DATA,(function(t,data){t.spotData=data})),Object(c.a)(r,f.MARKET_SET_SORT,(function(t,e){t.sort=Object.assign({},t.sort,e)})),Object(c.a)(r,f.MARKET_SET_SECOND_TYPE,(function(t,e){t.secondType=e})),Object(c.a)(r,f.MARKET_SET_LOADING_STATE,(function(t,e){var n=e.type,r=e.loading,o=e.cacheKey;t.dataCacheKeyMap[n]=o,t.loading[n]=r})),r),actions:{initData:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var r,o,c,d,l,E,T,_;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,o=t.state,c=t.getters,d=t.rootState,l=c.quotationType,E="".concat(d.i18n.locale,"_").concat(d.core.isLogin),T=E===o.dataCacheKeyMap[l],r(f.MARKET_SET_LOADING_STATE,{type:l,loading:!0,cacheKey:E}),_=[],l===m.SPOT&&(T&&o.spotData?_.push(Promise.resolve(!0)):_.push(e.$api.zone.moduleDetail({bizType:30,zoneId:o.secondType}).then((function(t){r(f.MARKET_SET_SPOT_DATA,t)})))),n.next=9,Promise.all(_).finally((function(){r(f.MARKET_SET_LOADING_STATE,{type:l,loading:!1,cacheKey:E})}));case 9:return n.abrupt("return",n.sent);case 10:case"end":return n.stop()}}),n)})))()},updateSort:function(t,e){var n=t.commit,r=t.state,o=e.by,c=e.order;n(f.MARKET_SET_SORT,S(S({},r.sort),{},{by:o,order:c}))},changeSecondType:function(t,e){(0,t.commit)(f.MARKET_SET_SECOND_TYPE,e)}}};e.default=O},440:function(t,e,n){"use strict";n.r(e);var r=n(6),o=(n(103),{getUserInfo:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,o;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r=t.commit,n.prev=1,n.next=4,e.$api.users.info();case 4:o=n.sent,r("SET_USER_INFO",o),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log("EORRO:SET_USER_INFO",n.t0);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()}});e.default={namespaced:!0,state:function(){return{userInfo:null}},getters:{userInfo:function(t){return t.userInfo}},actions:o,mutations:{SET_USER_INFO:function(t,e){t.userInfo=e}}}},441:function(t,e,n){"use strict";n.r(e);e.default={namespaced:!0,state:function(){return{keepAliveCom:[]}},getters:{getKeepAliveCom:function(t){return t.keepAliveCom}},actions:{addKeepAliveCom:function(t,e){(0,t.commit)("SET_KEEP_ALIVE_COM",e)}},mutations:{SET_KEEP_ALIVE_COM:function(t,e){t.keepAliveCom=e}}}},442:function(t,e,n){"use strict";n.r(e);n(152);var r=n(443),o=n(445),c={getFeedTranslation:function(t){return t.feedTranslation},getHisHoldOrders:function(t){return t.hisHoldOrders},getFeedList:function(t){return t.feedList},isLose:function(t){return 2===Number(t.valid)},exchangeId:function(t){return{BINGX_FEATURE:0,BINANCE_FEATURE:1,BINGX_SWAP_FUTURES:2}[t.accountEnum]}};e.default={namespaced:!0,state:function(){return{pageTraderInfo:{tabActive:1,scrollTop:{1:0,2:0}},copyTraderUserConfig:{beTrader:!1,followerType:1,isOldTrader:0},feedTranslation:{},hisHoldOrders:{result:[],pageId:0,allLoaded:!1},feedList:[],verifyLabes:[],traderId:"",apiIdentity:0,accountEnum:"",valid:1,lastDayNum:{dataOverview:30,earningsTrend:30,spotEarningsTrend:30,weeklyPnl:30,riskAssessment:30,symbolPreference:30},chartType:0,spotChartType:0,dataOverview:{},earningsTrend:{},spotEarningsTrend:{},weeklyPnl:{},riskAssessment:{},symbolPreference:{},staticsDesc:{BINGX_FEATURE:{},BINANCE_FEATURE:{},BINGX_SWAP_FUTURES:{},BINGX_SPOT_FIXD_MARGIN:{}},reportedFeedIds:[],insuranceTextMap:{},isFromNatural:0,rightAndCondition:{kolStandardVo:{twitterFacebookFans:0,tradingViewFans:0,tgUserNum:0,copyTradeAsset:""},right:[],condition:[],rightWhitExchangeId:[],pageProperty:[],isTrader:0,isTraderToTips:1,isApplyKol:0,isBindApi:0}}},getters:c,actions:r.default,mutations:o.default}},443:function(t,e,n){"use strict";n.r(e);var r=n(71),o=n(6),c=(n(80),n(49),n(92),n(103),n(307)),d=n(28);e.default={setFeedTranslation:function(t,e){(0,t.commit)("SET_FEED_TRANSLATION",e)},reqHisHoldOrders:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,d,l,f,E,T,_;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.state,c=t.commit,d=e.uid,l=e.apiIdentity,f=e.copyTradeLabelType,!(null==(E=o.hisHoldOrders)?void 0:E.allLoaded)){r.next=5;break}return r.abrupt("return");case 5:return r.next=7,n.$api.trader.orders(e);case 7:(T=r.sent)&&(_=T.pageId===e.pageId,c("SET_HISHOLD_ORDERS",{data:T,allLoaded:_,uid:d,apiIdentity:l,copyTradeLabelType:f}));case 9:case"end":return r.stop()}}),r)})))()},setFeedList:function(t,e){var n=t.commit,r=e.type,data=e.data;switch(r){case"push":n("PUSH_FEED_LIST",data.map((function(t){return Object(c.b)(t)})));break;case"unshift":n("UNSHIFT_FEED_LIST",data.map((function(t){return Object(c.b)(t)})));break;case"reset":n("RESET_FEED_LIST")}},updateFeedListToRead:function(t,e){(0,t.commit)(d.UPDATE_FEED_LIST_TO_READ,e)},changeLike:function(t,e){var n=t.commit,r=e.type,o=e.feedId;switch(r){case"like":n("LIKE",{feedId:o});break;case"cancelLike":n("CANCEL_LIKE",{feedId:o})}},reqVerifyLabels:function(t){var e=t.commit;if(!(t.state.verifyLabes.length>0))return this.$api.trader.getVerifyLabels().then((function(t){e("SET_VERIFY_LABELS",t)}))},getStatistics:function(t){var e=t.commit,n=t.state,r={traderId:n.traderId,apiIdentity:n.apiIdentity,recentDays:n.lastDayNum.earningsTrend};this.$api.trader.getStatistics(r).then((function(t){e(d.SET_EARNING_TREND,t)})).catch((function(t){console.error("getStatisticsErr",t),e(d.SET_EARNING_TREND,null)}))},getSpotStatistics:function(t){var e=t.commit,n=t.state,r={uid:n.traderId,recentDays:n.lastDayNum.earningsTrend};this.$api.trader.getSpotChartStatistics(r).then((function(t){console.log("getSpotChartStatistics",t),e(d.SET_SPOT_EARNING_TREND,t)})).catch((function(t){console.error("getStatisticsErr",t),e(d.SET_SPOT_EARNING_TREND,null)}))},getWeeklyPnl:function(t){var e=t.commit,n=t.state,r={traderId:n.traderId,apiIdentity:n.apiIdentity,recentDays:n.lastDayNum.weeklyPnl};this.$api.trader.getWeeklyPnl(r).then((function(t){e(d.SET_WEEKLY_PNL,t)})).catch((function(t){console.error("getWeeklyPnl",t),e(d.SET_WEEKLY_PNL,null)}))},getRiskScore:function(t){var e=t.commit,n=t.state,r={traderId:n.traderId,apiIdentity:n.apiIdentity,recentDays:n.lastDayNum.riskAssessment};this.$api.trader.getRiskScore(r).then((function(t){e(d.SET_RISK_ASSESSMENT,t)})).catch((function(t){console.error("getRiskScoreErr",t),e(d.SET_RISK_ASSESSMENT,null)}))},getSymbolPrefer:function(t){var e=t.commit,n=t.state,r={traderId:n.traderId,apiIdentity:n.apiIdentity,recentDays:n.lastDayNum.symbolPreference};this.$api.trader.getSymbolPrefer(r).then((function(t){e(d.SET_SYMBOL_PREFERENCE,t)})).catch((function(t){console.error("getSymbolPreferErr",t),e(d.SET_SYMBOL_PREFERENCE,null)}))},changeChartType:function(t,e){var n=t.commit,r=t.state,o=t.dispatch;n(d.SET_CHART_TYPE,e),o("earningsTrendChangeDay",r.lastDayNum.earningsTrend)},changeSpotChartType:function(t){var e=t.state;(0,t.dispatch)("spotEarningsTrendChangeDay",e.lastDayNum.earningsTrend)},dataOverviewChangeDay:function(t,e){(0,t.commit)(d.SET_LAST_DAY_NUM,{type:"dataOverview",day:e})},earningsTrendChangeDay:function(t,e){var n=t.commit,r=t.dispatch;n(d.SET_LAST_DAY_NUM,{type:"earningsTrend",day:e}),r("getStatistics")},spotEarningsTrendChangeDay:function(t,e){var n=t.commit,r=t.dispatch;n(d.SET_LAST_DAY_NUM,{type:"spotEarningsTrend",day:e}),r("getSpotStatistics")},weeklyPnlChangeDay:function(t,e){var n=t.commit,r=t.dispatch;n(d.SET_LAST_DAY_NUM,{type:"weeklyPnl",day:e}),r("getWeeklyPnl")},riskScoreChangeDay:function(t,e){var n=t.commit,r=t.dispatch;n(d.SET_LAST_DAY_NUM,{type:"riskAssessment",day:e}),r("getRiskScore")},symbolPreferenceChangeDay:function(t,e){var n=t.commit,r=t.dispatch;n(d.SET_LAST_DAY_NUM,{type:"symbolPreference",day:e}),r("getSymbolPrefer")},setValid:function(t){var e=t.commit,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;e(d.SET_VALID,n)},changeAccount:function(t,e){var n=t.commit,r=t.dispatch,o=(null==e?void 0:e.rankStatisticDays)||30;n(d.SET_TRADER_ID,e.traderId),n(d.SET_API_IDENTITY,e.apiIdentity),n(d.SET_ACCOUNT_ENUM,e.accountEnum),"BINGX_SPOT_FIXD_MARGIN"===e.accountEnum?r("spotEarningsTrendChangeDay",o):(r("dataOverviewChangeDay",o),r("earningsTrendChangeDay",o),r("weeklyPnlChangeDay",o),r("riskScoreChangeDay",o),r("symbolPreferenceChangeDay",o))},resetStaticsDesc:function(t){(0,t.commit)(d.SET_STATICS_DESC,null)},getStaticsDesc:function(t,e){var n=this;return Object(o.a)(regeneratorRuntime.mark((function r(){var o,c,l,f,E,T;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(o=t.commit,c=t.state,l=e.accountEnum,f=e.indicator,E=e.traderUid,!c.staticsDesc[l]||!c.staticsDesc[l][f]){r.next=4;break}return r.abrupt("return");case 4:return r.next=6,n.$api.trader.leaderToastV2(l,f,E);case 6:T=r.sent,o(d.SET_STATICS_DESC,{accountEnum:l,indicator:f,toast:null==T?void 0:T.toast});case 8:case"end":return r.stop()}}),r)})))()},setReportedFeedIds:function(t,e){var n,o=t.commit,c=t.state.reportedFeedIds.slice();Array.isArray(e)&&e.length>0?(n=c).push.apply(n,Object(r.a)(e)):c=[];o(d.SET_REPORTED_FEED_IDS,c)},getInsuranceUsable:function(t,e){var n=t.commit;console.log("getInsuranceUsable");var r=e;"BINGX_SWAP_FUTURES"===e&&(r=["BINGX_SWAP_FUTURES","BINGX_SWAP_FIXD_MARGIN"].join(",")),this.$api.trader.getInsuranceUsable(r).then((function(t){n(d.SET_INSURANCE_USABLE,{accountEnum:e,data:t})}))},getCopyTraderUserConfig:function(t){var e=t.commit;this.$api.trader.getCopyTraderUserConfig().then((function(t){e(d.SET_COPY_TRADER_USER_CONFIG,t)}))},getRightAndCondition:function(t){var e=t.commit;this.$api.traderApply.getRightAndCondition().then((function(t){e(d.SET_RIGHT_AND_CONDITION,t)}))},setIsFromNatural:function(t,data){(0,t.commit)(d.SET_IS_FROM_NATURAL,data)},setPageTraderInfo:function(t,data){(0,t.commit)(d.SET_PAGE_TRADER_INFO,data)}}},445:function(t,e,n){"use strict";n.r(e);var r,o=n(3),c=n(71),d=(n(193),n(5),n(152),n(18),n(76),n(40),n(53),n(99),n(48),n(43),n(45),n(44),n(63),n(66),n(78)),l=n(28);function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function E(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.default=(r={SET_FEED_TRANSLATION:function(t,e){t.feedTranslation[e.feedId]=e.text},SET_HISHOLD_ORDERS:function(t,e){var n,data=e.data,r=e.allLoaded;(n=t.hisHoldOrders.result).push.apply(n,Object(c.a)(data.result)),t.hisHoldOrders.allLoaded=r,t.hisHoldOrders.pageId=data.pageId},RESET_HISHOLD_ORDERS:function(t){Object.assign(t.hisHoldOrders,{pageId:0,result:[],allLoaded:!1})},PUSH_FEED_LIST:function(t,e){var n;(n=t.feedList).push.apply(n,Object(c.a)(e))},UNSHIFT_FEED_LIST:function(t,e){var n;(n=t.feedList).unshift.apply(n,Object(c.a)(e))},RESET_FEED_LIST:function(t){t.feedList=[]},LIKE:function(t,e){var n=e.feedId,r=t.feedList.find((function(t){return t.feedId===n}));r&&(r.likeCount=Number(r.likeCount)+1,r.liked=!0)},CANCEL_LIKE:function(t,e){var n=e.feedId,r=t.feedList.find((function(t){return t.feedId===n}));r&&(r.likeCount-=1,r.liked=!1)},SET_VERIFY_LABELS:function(t,e){t.verifyLabes=e}},Object(o.a)(r,l.SET_EARNING_TREND,(function(t,data){t.earningsTrend=data})),Object(o.a)(r,l.SET_SPOT_EARNING_TREND,(function(t,data){t.spotEarningsTrend=data})),Object(o.a)(r,l.SET_WEEKLY_PNL,(function(t,data){t.weeklyPnl=data})),Object(o.a)(r,l.SET_RISK_ASSESSMENT,(function(t,data){t.riskAssessment=data})),Object(o.a)(r,l.SET_SYMBOL_PREFERENCE,(function(t,data){t.symbolPreference=data})),Object(o.a)(r,l.SET_CHART_TYPE,(function(t,e){t.chartType=e})),Object(o.a)(r,l.SET_API_IDENTITY,(function(t,e){t.apiIdentity=e})),Object(o.a)(r,l.SET_TRADER_ID,(function(t,e){t.traderId=e})),Object(o.a)(r,l.SET_LAST_DAY_NUM,(function(t,data){var e=data.type,n=data.day;t.lastDayNum[e]=n})),Object(o.a)(r,l.SET_STATICS_DESC,(function(t,data){if(null!==data){var e=data.indicator,n=data.accountEnum,r=data.toast;t.staticsDesc[n]||(t.staticsDesc[n]={}),t.staticsDesc[n][e]=r.replace(/\n/g,"<br/>"),t.staticsDesc=JSON.parse(JSON.stringify(t.staticsDesc))}})),Object(o.a)(r,l.SET_VALID,(function(t,e){t.valid=e})),Object(o.a)(r,l.SET_ACCOUNT_ENUM,(function(t,e){t.accountEnum=e})),Object(o.a)(r,l.UPDATE_FEED_LIST_TO_READ,(function(t,e){t.feedList.forEach((function(t){e.includes(t.feedId)&&(t.read=!0)}))})),Object(o.a)(r,l.SET_REPORTED_FEED_IDS,(function(t,e){t.reportedFeedIds=e})),Object(o.a)(r,l.SET_INSURANCE_USABLE,(function(t,e){var n=e.accountEnum,data=e.data,text="";if((null==data?void 0:data.maxUsableAmount)>0){var r=data.usableCount,c=data.maxUsableAmount,l=data.assetName;text=this.$i18n.t(r>1?"traderInfo.insuranceMoney.followMaxUse":"traderInfo.insuranceMoney.followEnableUse",{num:"<em>".concat(Object(d.c)(c,{keepEndZero:!1})," ").concat(l,"</em>")})}t.insuranceTextMap=Object.assign({},t.insuranceTextMap,Object(o.a)({},n,E(E({},data),{},{text:text})))})),Object(o.a)(r,l.SET_COPY_TRADER_USER_CONFIG,(function(t,data){t.copyTraderUserConfig=data})),Object(o.a)(r,l.SET_RIGHT_AND_CONDITION,(function(t,data){t.rightAndCondition=data})),Object(o.a)(r,l.SET_IS_FROM_NATURAL,(function(t,data){t.isFromNatural=data})),Object(o.a)(r,l.SET_PAGE_TRADER_INFO,(function(t,data){Object.assign(t.pageTraderInfo,data)})),r)},446:function(t,e,n){"use strict";n.r(e);var r=n(3),o=(n(5),n(40),n(48),n(236)),c=n(369);e.default={namespaced:!0,state:function(){return{symbolPriceMap:{}}},actions:{subscribeModuleInfoOverview:function(t){var e=t.commit;this.$spotSocket.overview.subscribe((function(data){e(c.SPOT_UPDATE_MODULE_INFO_OVERVIEW_DATA,data)}))},unSubscribeModuleInfoOverview:function(){this.$spotSocket.overview.unSubscribe()}},mutations:Object(r.a)({},c.SPOT_UPDATE_MODULE_INFO_OVERVIEW_DATA,(function(t,data){var e=data.data.l;if(e&&e.length){var n={};e.forEach((function(symbol){var t="".concat(symbol.n,"_").concat(symbol.m).toUpperCase(),e=Object(o.a)(symbol.c,symbol.o);n["".concat(t)]={open:symbol.o,close:symbol.c,rate:e,rateText:Object(o.b)({rate:e})}})),t.symbolPriceMap=Object.assign({},t.symbolPriceMap,n)}}))}},447:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(370);e.default={namespaced:!0,state:function(){return{swapPosition:{}}},actions:{subScribePosition:function(t){var e=t.commit;this.$swapSocket.account.subscribePositions("account.account.positions.ALL.COIN",(function(data){e(o.SWAP_UPDATE_POSITION_DATA,data)}))},unSubscribePosition:function(){this.$swapSocket.account.unSubscribePositions("account.account.positions.ALL.COIN")}},mutations:Object(r.a)({},o.SWAP_UPDATE_POSITION_DATA,(function(t,data){t.swapPosition=Object.assign({},data.data)}))}},448:function(t,e,n){"use strict";n.r(e);n(80);var r=n(449),o=n(450);e.default={namespaced:!0,state:function(){return{topicTabKey:"topicTraderMoments",topicMomentsMap:{},topicTraderMomentsIds:[],topicNewestMomentsIds:[]}},getters:{topicTraderMomentsList:function(t){return t.topicTraderMomentsIds.map((function(e){return t.topicMomentsMap[e]}))},topicNewestMomentsList:function(t){return t.topicNewestMomentsIds.map((function(e){return t.topicMomentsMap[e]}))}},actions:r.default,mutations:o.default}},449:function(t,e,n){"use strict";n.r(e);var r=n(71);n(80),n(48);e.default={setTopicTabKey:function(t,e){(0,t.commit)("SET_TOPIC_TAB_KEY",e)},setTopicMomentList:function(t,e){var n=t.commit,o=t.state,c=e.isReset,d=e.list,l=d.map((function(t){return t.feedId}));n("ADD_TOPIC_MOMENTS",d),n("SET_TOPIC_MOMENT_IDS",c?l:[].concat(Object(r.a)(o.topicTraderMomentsIds),Object(r.a)(l)))},setTopicNewestMomentList:function(t,e){var n=t.commit,o=t.state,c=e.isReset,d=e.list,l=d.map((function(t){return t.feedId}));n("ADD_TOPIC_MOMENTS",d),n("SET_TOPIC_Newest_MOMENT_IDS",c?l:[].concat(Object(r.a)(o.topicNewestMomentsIds),Object(r.a)(l)))},changeLike:function(t,e){var n=t.commit,r=e.type,o=e.feedId;switch(r){case"like":n("LIKE",{feedId:o});break;case"cancelLike":n("CANCEL_LIKE",{feedId:o})}}}},450:function(t,e,n){"use strict";n.r(e);n(5),n(40),n(152);e.default={SET_TOPIC_TAB_KEY:function(t,e){t.topicTabKey=e},ADD_TOPIC_MOMENTS:function(t,e){var map={};e.forEach((function(t){map[t.feedId]=t})),t.topicMomentsMap=Object.assign({},t.topicMomentsMap,map)},SET_TOPIC_MOMENT_IDS:function(t,e){t.topicTraderMomentsIds=e},SET_TOPIC_Newest_MOMENT_IDS:function(t,e){t.topicNewestMomentsIds=e},LIKE:function(t,e){var n=e.feedId,r=t.topicMomentsMap[n];r&&(r.likeCount=Number(r.likeCount)+1,r.liked=!0)},CANCEL_LIKE:function(t,e){var n=e.feedId,r=t.topicMomentsMap[n];r&&(r.likeCount-=1,r.liked=!1)}}},451:function(t,e,n){"use strict";n.r(e);var r=n(452),o=n(453);e.default={namespaced:!0,state:function(){return{defaultFiatCurrency:"",defaultFiatSymbol:"",defaultRate:0,isMSite:!1,mSiteDomain:""}},actions:r.default,mutations:o.default}},452:function(t,e,n){"use strict";n.r(e);n(65),n(5),n(18);var r=n(70);e.default={initUserConfig:function(t){var e=t.commit,n=t.state,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1];!r&&n.defaultFiatCurrency||this.$api.users.getUserConfig().then((function(t){e("SET_USER_INFO",t)}))},refreshMSite:function(t){var e,n,o,c=t.commit,d=t.rootState,l=t.state,f=null===(e=d.route)||void 0===e?void 0:e.name,E=null===(n=d.route)||void 0===n||null===(o=n.query)||void 0===o?void 0:o.redirect;f&&E&&[/h5-traderInfo/,/h5-traderApply/].some((function(t){return t.test(f||"")}))?"true"===Object(r.i)(E,"isMSite")?(c("SET_IS_M_SITE",!0),c("SET_M_SITE_DOMAIN",Object(r.h)(E))):c("SET_IS_M_SITE",!1):l.isMSite&&c("SET_IS_M_SITE",!1)}}},453:function(t,e,n){"use strict";n.r(e),e.default={SET_USER_INFO:function(t,e){t.defaultFiatCurrency=e.defaultFiatCurrency,t.defaultFiatSymbol=e.defaultFiatSymbol||"",t.defaultRate=e.rate||0},SET_IS_M_SITE:function(t,e){t.isMSite=e},SET_M_SITE_DOMAIN:function(t,e){t.mSiteDomain=e}}},70:function(t,e,n){"use strict";n.d(e,"g",(function(){return _})),n.d(e,"b",(function(){return S})),n.d(e,"c",(function(){return m})),n.d(e,"v",(function(){return I})),n.d(e,"k",(function(){return y})),n.d(e,"n",(function(){return v})),n.d(e,"p",(function(){return O})),n.d(e,"l",(function(){return N})),n.d(e,"m",(function(){return A})),n.d(e,"u",(function(){return D})),n.d(e,"j",(function(){return h})),n.d(e,"s",(function(){return R})),n.d(e,"r",(function(){return P})),n.d(e,"a",(function(){return C})),n.d(e,"f",(function(){return L})),n.d(e,"t",(function(){return M})),n.d(e,"i",(function(){return w})),n.d(e,"h",(function(){return U})),n.d(e,"e",(function(){return k})),n.d(e,"d",(function(){return j})),n.d(e,"o",(function(){return F})),n.d(e,"q",(function(){return x}));n(500);var r=n(244),o=n.n(r),c=n(12),d=(n(165),n(18),n(77),n(142),n(218),n(152),n(398),n(80),n(48),n(53),n(99),n(98),n(76),n(193),n(5),n(49),n(54),n(50),n(351),n(266),n(92),n(67)),l=n(444),f=n(156),E=n.n(f),T=l.a,_=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;var n=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),r=window.location.search.substr(1).match(n);return null!=r?decodeURIComponent(r[2]):e},S=function(t,e){var n=Number(t);if(0===n||isNaN(n))return Number(0).toFixed(e);var r=Math.pow(10,e);return(n>0?Math.floor(n*r)/r:Math.ceil(n*r)/r).toFixed(e)},m=function(t,e){return Number(S(t,e))},I={set:function(t,e){var n=T+t;"object"===Object(c.a)(e)&&(e=JSON.stringify(e)),window.localStorage.setItem(n,e)},get:function(t,e){var n,r=T+t,o=localStorage.getItem(r);if(null===o||"undefined"===o)return e;try{n=JSON.parse(o)}catch(t){n=o}return n},del:function(t){var e=T+t;window.localStorage.removeItem(e)},clear:function(){for(var t=new RegExp("^"+T),e=[],i=0;i<window.localStorage.length;i++){var n=window.localStorage.key(i);t.test(n)&&e.push(n)}e.map((function(t){return window.localStorage.removeItem(t)}))}},y=function(t){var e=t.uid,n=t.apiIdentity,r=t.inviteCode,o=t.avatar,c=t.inviteId,d=t.rankStatisticDays,l=t.channel,f=t.ch,E="bingbon://userPersonal?userUid=".concat(e,"&apiIdentity=").concat(n||0,"&referenceUCode=").concat(r||"","&recommendCode=").concat(r||"","&userAvatar=").concat(o||"","&rankStatisticDays=").concat(d,"&channel=").concat(l,"&ch=").concat(f);c&&(E="".concat(E,"&inviteId=").concat(c)),console.log(E),window.location.href=E},v=function(t){var e="bingbon://dynamic/detail?feed_id=".concat(t);window.location.href=e},O=function(t){var e="bingbon://dynamic/topic/detail?topic_id=".concat(t);window.location.href=e},N=function(t,e){e?D(e):A(t)},A=function(t){location.href="http://bingx.com/".concat(t,"/download")},D=function(t){var e=sessionStorage.getItem("ch");location.href="http://bingx.com/invite/".concat(t).concat(e?"?ch=".concat(e):"")},h=function(t,e){var n;t.$bridge&&(null===(n=t.$bridge)||void 0===n||n.redirect(e)),t.$appConfig.isInApp||setTimeout((function(){var e;A(null===(e=null==t?void 0:t.$i18n)||void 0===e?void 0:e.locale)}),1e3)},R={open:function(text){o.a.open({spinnerType:"fading-circle",text:text})},close:function(){o.a.close()}};function P(t){var output=t;return output=(output=(output=(output=(output=output.replace(/&/g,"&amp;")).replace(/>/g,"&gt;")).replace(/</g,"&lt;")).replace(/"/g,"&quot;")).replace(/'/g,"&#39;")}function C(t){var e,n=""+t,r=/["'&<>]/.exec(n);if(!r)return n;var html="",o=0,c=0;for(o=r.index;o<n.length;o++){switch(n.charCodeAt(o)){case 34:e="&quot;";break;case 38:e="&amp;";break;case 39:e="&#39;";break;case 60:e="&lt;";break;case 62:e="&gt;";break;default:continue}c!==o&&(html+=n.substring(c,o)),c=o+1,html+=e}return c!==o?html+n.substring(c,o):html}var L=function(t){return"".concat(l.b,"/icon/").concat(t,".png")},M=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=[{value:1,symbol:""},{value:1e6,symbol:"M"},{value:1e9,symbol:"B"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}],r=/\.0+$|(\.[0-9]*[1-9])0+$/,o=n.slice().reverse().find((function(e){return t>=e.value}));return o?new E.a(t/o.value).toFixed(e,E.a.ROUND_DOWN).replace(r,"$1")+o.symbol:"0"},w=function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0;try{var r=new URL(t);return r.searchParams.get(e)}catch(t){return n}},U=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;try{var n=new URL(t);return n.origin}catch(t){return e}},k=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"--%",o=n?Object(d.v)(t,100):t,c=Object(d.y)(o,{keepEndZero:!1,isAddSign:e,defaultValue:r});return c.includes("%")?c:c+"%"},j=function(t){var e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:2,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"--";return Object(d.y)(t,{precision:n,keepEndZero:!1,isAddSign:e,defaultValue:r})},F=function(t,e,n,r,o){var c={lead:"/copy-trading/lead/",bindApi:"/copy-trading/api/create/?isTraderApply=1",followForm:"/copy-trading/follow-form/"};if(c[n]){var d=(null==o?void 0:o.join("/"))||"",l=t.localePath({path:c[n]+d,query:r});window.location.href="".concat(e,"/").concat(t.$i18n.locale).concat(l)}},x=function(t,e){var n,r=null===(n=t.$i18n)||void 0===n?void 0:n.locale;return"/".concat(r,"/support/articles/").concat(e)}},744:function(t,e,n){},745:function(t,e,n){},758:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(95),c=n(677),d=n(624),l=n(625),f=n(440),E=n(441),T=n(442),_=n(429),S=n(446),m=n(447),I=n(448),y=n(451);r.default.use(o.b),e.default=function(){return new o.a({strict:!0,modules:{core:c.a,users:f.default,pageConfig:E.default,trader:T.default,market:_.default,spot:S.default,swap:m.default,system:d.a,topic:I.default,global:y.default,devConfig:l.a}})}}},[[942,108,36,37,33,23,14,16,21,28,29,24,18,19,26,20,22,25,35,15,32,27,34,30,17]]]);