!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "321738cd-7f41-42c3-942c-4b7ae868a1be",
        e._sentryDebugIdIdentifier = "sentry-dbid-321738cd-7f41-42c3-942c-4b7ae868a1be")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "4.53.4-prod"
},
(window.webpackJsonp = window.webpackJsonp || []).push([[34], {
    333: function(e, t, r) {
        "use strict";
        r.d(t, "c", (function() {
            return n
        }
        )),
        r.d(t, "d", (function() {
            return o
        }
        )),
        r.d(t, "e", (function() {
            return c
        }
        )),
        r.d(t, "a", (function() {
            return l
        }
        )),
        r.d(t, "b", (function() {
            return d
        }
        ));
        var n = "socket/onSpotSocketReconnect"
          , o = "socket/onSwapSocketReconnect"
          , c = "topic/onMomentListLoadMore"
          , l = "moment/onClickMomentTab"
          , d = "moment/onLoadMoreMomentList"
    },
    504: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = {
            name: "SvgIcon",
            props: {
                iconClass: {
                    type: String,
                    required: !0
                },
                className: {
                    type: String,
                    default: ""
                }
            },
            computed: {
                iconName: function() {
                    return "#icon-".concat(this.iconClass)
                },
                svgClass: function() {
                    return this.className ? "svg-icon " + this.className : "svg-icon"
                }
            }
        }
          , o = (r(892),
        r(127))
          , component = Object(o.a)(n, (function() {
            var e = this
              , t = e.$createElement
              , r = e._self._c || t;
            return r("svg", e._g({
                class: e.svgClass,
                attrs: {
                    "aria-hidden": "true"
                }
            }, e.$listeners), [r("use", {
                attrs: {
                    "xlink:href": e.iconName
                }
            })])
        }
        ), [], !1, null, "836eeaa4", null);
        t.default = component.exports
    },
    614: function(e, t, r) {
        e.exports = r.p + "img/lazyload-img.ca90e2a.jpg"
    },
    615: function(e, t, r) {},
    673: function(e, t, r) {
        "use strict";
        var n = r(27)
          , o = r(26)
          , c = (r(5),
        r(128),
        r(61))
          , l = r(62)
          , d = r(31)
          , f = Object(n.a)((function e(t) {
            Object(o.a)(this, e),
            this.request = t
        }
        ));
        function h(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var v = function(e) {
            Object(c.a)(r, e);
            var t = h(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "restrictInfo",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/ip/restrict-info"
                    })
                }
            }, {
                key: "agreeRisk",
                value: function() {
                    return this.request({
                        method: "POST",
                        url: "/v1/users/personal/information",
                        data: {
                            signRiskAgreement: !0
                        }
                    })
                }
            }, {
                key: "riskInfo",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v3/users/risk-info",
                        data: data
                    })
                }
            }, {
                key: "info",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/users/info"
                    })
                }
            }, {
                key: "getUserConfig",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/users/config"
                    })
                }
            }, {
                key: "newsDetail",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/v1/information/detail/".concat(e)
                    })
                }
            }, {
                key: "cancelRecord",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/users/cancel/record"
                    })
                }
            }, {
                key: "cancelCondition",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/users/cancelCondition"
                    })
                }
            }, {
                key: "cancelApply",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v1/users/cancel/apply",
                        resolveSource: !0,
                        data: data
                    })
                }
            }]),
            r
        }(f)
          , y = (r(48),
        r(92),
        r(40),
        r(121),
        r(54),
        r(572),
        r(573),
        r(574),
        r(575),
        r(576),
        r(577),
        r(578),
        r(579),
        r(580),
        r(581),
        r(582),
        r(583),
        r(584),
        r(585),
        r(586),
        r(587),
        r(588),
        r(50),
        r(307));
        function m(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var w = function(e) {
            Object(c.a)(r, e);
            var t = m(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "info",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/trader/info"
                    })
                }
            }, {
                key: "orders",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/v3/trader/orders/v3",
                        params: e
                    })
                }
            }, {
                key: "resume",
                value: function(e, t) {
                    return this.request({
                        method: "GET",
                        url: "/v8/trader/resume",
                        params: {
                            uid: e,
                            inviteId: t
                        }
                    })
                }
            }, {
                key: "sharingAccounts",
                value: function(e, t) {
                    return this.request({
                        method: "GET",
                        url: "/v1/trader/sharing-accounts",
                        params: {
                            uid: e,
                            inviteId: t
                        }
                    })
                }
            }, {
                key: "futuresStat",
                value: function(e, t, r) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v4/trader/account/futures/stat",
                        params: {
                            uid: e,
                            apiIdentity: t,
                            inviteId: r
                        }
                    })
                }
            }, {
                key: "leaderToast",
                value: function(e, t) {
                    return this.request({
                        method: "GET",
                        url: "/trader/v1/statics/desc/".concat(e, "/").concat(t)
                    })
                }
            }, {
                key: "follow",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v1/follower/copy-trader-config",
                        data: data
                    })
                }
            }, {
                key: "acceptInvite",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v1/follower/accept-invite",
                        data: data
                    })
                }
            }, {
                key: "checkInvite",
                value: function(e) {
                    return this.request({
                        method: "POST",
                        url: "/v5/trader/check-invite",
                        data: e
                    })
                }
            }, {
                key: "getStatistics",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/statistics/v1/trader/pnl-statistics",
                        params: e
                    })
                }
            }, {
                key: "translate",
                value: function(e, text, t) {
                    return this.request({
                        method: "POST",
                        url: "/v2/follower/translate",
                        data: {
                            trader: e,
                            text: text,
                            targetLang: t
                        },
                        headers: {
                            "x-router-tag": "pre-social1"
                        }
                    })
                }
            }, {
                key: "getFollowers",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "0";
                    return this.request({
                        method: "GET",
                        url: "/v3/trader/followers/info",
                        params: {
                            trader: e,
                            apiIdentity: t
                        }
                    })
                }
            }, {
                key: "getUserFeedList",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v2/user/feed-list",
                        params: e
                    })
                }
            }, {
                key: "getStrategyPoint",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v1/order/strategy/query",
                        params: {
                            orderStrategyId: e
                        }
                    })
                }
            }, {
                key: "setFeedLike",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/social-feed/v1/feed/like",
                        data: data
                    })
                }
            }, {
                key: "setFeedCancelLike",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/social-feed/v1/feed/cancel-like",
                        data: data
                    })
                }
            }, {
                key: "getFeedTranslation",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v2/feed/translationList",
                        params: {
                            feedIds: e.join(",")
                        },
                        render: function(data) {
                            if (data.translations)
                                for (var e in data.translations) {
                                    var t = data.translations[e];
                                    Array.isArray(t) && t.forEach((function(e) {
                                        e.translation = Object(y.a)(e.translation, e.transElement)
                                    }
                                    ))
                                }
                            return data.translations
                        }
                    })
                }
            }, {
                key: "setFeedRead",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/social-feed/v1/feed/read",
                        data: data
                    })
                }
            }, {
                key: "setFeedBrowse",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/social-feed/v1/feed/browse",
                        data: {
                            feedIds: Array.from(new Set(data.feedIds))
                        }
                    })
                }
            }, {
                key: "getFeedInfo",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v2/feed/feed-info",
                        params: {
                            feedId: e
                        },
                        headers: {
                            "x-router-tag": "pre-social1"
                        }
                    })
                }
            }, {
                key: "getTinyUrl",
                value: function(e) {
                    return this.request({
                        method: "POST",
                        url: "/social-feed/v1/feed/tinyUrl",
                        params: {
                            feedId: e
                        }
                    })
                }
            }, {
                key: "getStragecyShortUrl",
                value: function(e) {
                    return this.request({
                        url: "/social-feed/v1/order/strategy/share",
                        params: {
                            feedId: e
                        },
                        method: "Get"
                    })
                }
            }, {
                key: "getVerifyLabels",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v1/user/verify-labels"
                    })
                }
            }, {
                key: "getGridOrder",
                value: function(e, t, r) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade/spot/v1/trader/resume/open-order",
                        params: {
                            trader: e,
                            pageId: t,
                            pageSize: r
                        }
                    })
                }
            }, {
                key: "getGridHistoryOrder",
                value: function(e, t, r) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade/spot/v1/trader/resume/history-orders",
                        params: {
                            trader: e,
                            pageId: t,
                            pageSize: r
                        }
                    })
                }
            }, {
                key: "getTraderPositions",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v2/real/trader/positions",
                        params: e
                    })
                }
            }, {
                key: "getTraderOpenOrders",
                value: function(e, t, r) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade/spot/v1/trader/resume/open-orders",
                        params: {
                            trader: e,
                            pageId: t,
                            pageSize: r
                        }
                    })
                }
            }, {
                key: "getPreviewUrl",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/tinyurl/v1/preview",
                        params: {
                            url: e
                        }
                    })
                }
            }, {
                key: "getFeatureStat",
                value: function(e, t) {
                    return this.request({
                        method: "GET",
                        url: "/v1/trader/sharing-accounts/social-feed/futures/stat",
                        params: {
                            apiIdentity: t,
                            uid: e
                        }
                    })
                }
            }, {
                key: "getWeeklyPnl",
                value: function(e) {
                    return this.request({
                        method: "get",
                        url: "/statistics/v1/trader/weekly-pnl",
                        params: e
                    })
                }
            }, {
                key: "getRiskScore",
                value: function(e) {
                    return this.request({
                        method: "get",
                        url: "/statistics/v2/trader/risk-score",
                        params: e
                    })
                }
            }, {
                key: "getSymbolPrefer",
                value: function(e) {
                    return this.request({
                        method: "get",
                        url: "/statistics/v1/trader/symbol-prefer",
                        params: e
                    })
                }
            }, {
                key: "getTraderConfig",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/trader/trader-config"
                    })
                }
            }, {
                key: "getTraderBxHold",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    return this.request({
                        method: "GET",
                        url: "/v1/copy-trade/traderContractHold",
                        params: {
                            trader: e,
                            pageId: t,
                            pageSize: r
                        }
                    })
                }
            }, {
                key: "spotCurPositons",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/spot/trader-order/current",
                        params: {
                            trader: e,
                            pageId: t,
                            pageSize: r
                        }
                    })
                }
            }, {
                key: "spotHistoryPositons",
                value: function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/spot/trader-order/history",
                        params: {
                            trader: e,
                            pageId: t,
                            pageSize: r
                        }
                    })
                }
            }, {
                key: "getInsuranceUsable",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v2/copy-trade/insurance/usable",
                        params: {
                            accountEnum: e
                        }
                    })
                }
            }, {
                key: "getOtherFeedsList",
                value: function(e) {
                    return this.request({
                        url: "/social-feed/v1/feed/otherFeedsList",
                        method: "GET",
                        params: {
                            fromFeedId: e
                        }
                    })
                }
            }, {
                key: "getNewTraderMission",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v3/trader/apply/new-trader-mission"
                    })
                }
            }, {
                key: "shareOrderReport",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v3/trader/apply/share-order-report"
                    })
                }
            }, {
                key: "getCopyTraderUserConfig",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/copytrade/v1/copy-trade/user/config"
                    })
                }
            }, {
                key: "getTopicDetail",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v1/topic/detail",
                        params: {
                            topicId: e
                        }
                    })
                }
            }, {
                key: "getTopicFeedList",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v1/topic/feed-list",
                        params: e
                    })
                }
            }, {
                key: "getTransferDetail",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0
                      , n = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
                    return this.request({
                        method: "GET",
                        url: "/v1/trader/sharing-accounts/transfer-detail",
                        params: {
                            uid: e,
                            apiIdentity: t,
                            pageId: r,
                            pageSize: n
                        }
                    })
                }
            }, {
                key: "spotAccountStat",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/spot/trader/stat",
                        params: {
                            uid: e
                        }
                    })
                }
            }, {
                key: "getSpotChartStatistics",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/spot/trader/pnl-statistics",
                        params: e
                    })
                }
            }, {
                key: "leaderToastV2",
                value: function(e, t, r) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/spot/copy-trade/statics/desc",
                        params: {
                            copyTradeAccountEnum: e,
                            indicator: t,
                            traderUid: r
                        }
                    })
                }
            }, {
                key: "getTraderOrderHistoryDetail",
                value: function(e, t, r) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/trader-copy/order/history/details",
                        params: {
                            pageId: e,
                            pageSize: t,
                            positionNo: r
                        }
                    })
                }
            }, {
                key: "getCouponTraders",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                      , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 10;
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/insurance/trader/list",
                        params: {
                            couponId: e,
                            pageId: t,
                            pageSize: r
                        }
                    })
                }
            }, {
                key: "createSubscribe",
                value: function(e) {
                    return this.request({
                        method: "POST",
                        url: "/social-feed/v1/user/subscribe/create",
                        data: {
                            uid: e
                        }
                    })
                }
            }]),
            r
        }(f);
        function C(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var k = function(e) {
            Object(c.a)(r, e);
            var t = C(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "apply",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v3/trader/apply",
                        data: data,
                        resolveSource: !0
                    })
                }
            }, {
                key: "applyStatus",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v3/trader/apply/status"
                    })
                }
            }, {
                key: "configOss",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    return this.request({
                        method: "GET",
                        url: "/v1/config/oss",
                        params: {
                            type: e
                        }
                    })
                }
            }, {
                key: "checkAccountName",
                value: function(e, t) {
                    return this.request({
                        method: "GET",
                        url: "/social-feed/v2/feed/social/accountCheck",
                        params: {
                            extUserName: e,
                            site: t
                        },
                        resolveSource: !0
                    })
                }
            }, {
                key: "getRightAndCondition",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v3/trader/apply/right-and-condition"
                    })
                }
            }]),
            r
        }(f);
        function L(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var O = {
            gray: "gray-merge"
        }
          , x = function(e) {
            Object(c.a)(r, e);
            var t = L(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "pnlStatistics",
                value: function(e, t, r) {
                    return this.request({
                        resolveSource: !0,
                        method: "GET",
                        url: "/statistics/v1/contract/pnl-statistics",
                        params: {
                            recentDays: e,
                            startTime: t,
                            endTime: r
                        }
                    })
                }
            }, {
                key: "getContractInfo",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/statistics/v1/contract/info"
                    })
                }
            }, {
                key: "getSummaryInfo",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/statistics/v2/pnl-statistics-info",
                        headers: {
                            "x-router-tag": O.prod
                        },
                        params: {
                            accountType: e
                        }
                    })
                }
            }, {
                key: "getCalendarAndAsset",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/statistics/v2/pnl-statistics-calendar",
                        headers: {
                            "x-router-tag": O.prod
                        },
                        params: {
                            accountType: e
                        }
                    })
                }
            }, {
                key: "getChartData",
                value: function(e, t, r) {
                    return this.request({
                        method: "GET",
                        url: "/statistics/v2/pnl-statistics-analyze",
                        headers: {
                            "x-router-tag": O.prod
                        },
                        params: {
                            accountType: e,
                            startTime: t,
                            endTime: r
                        }
                    })
                }
            }]),
            r
        }(f);
        function T(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var M = function(e) {
            Object(c.a)(r, e);
            var t = T(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "emailSubscribe",
                value: function(data, e) {
                    return this.request({
                        method: "POST",
                        url: "/notification/v1/email/subscrip",
                        data: data,
                        params: e
                    })
                }
            }, {
                key: "emailSubscribeList",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/notification/v1/email/subscrip-list",
                        params: e
                    })
                }
            }]),
            r
        }(f);
        function B(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var j = function(e) {
            Object(c.a)(r, e);
            var t = B(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "gridSubPendingOrders",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade/spot/v2/trader/grid/sub-pending-orders-uid",
                        params: e
                    })
                }
            }, {
                key: "gridOpenOrder",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade/spot/v2/trader/grid/open-order",
                        params: e
                    })
                }
            }, {
                key: "gridSubDealOrders",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade/spot/v2/trader/grid/sub-deal-orders",
                        params: e
                    })
                }
            }, {
                key: "gridDealDetail",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/v1/spot/grid/deal-detail-uid",
                        params: e
                    })
                }
            }, {
                key: "getSpotFollowers",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/copy-trade-facade/v1/spot/trader/followers-info",
                        params: {
                            uid: e
                        }
                    })
                }
            }]),
            r
        }(f);
        function E(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var G = function(e) {
            Object(c.a)(r, e);
            var t = E(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "getNftPoolList",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/nft/v1/pool/list",
                        params: {
                            status: e
                        },
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "getNftPoolDetail",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/nft/v1/pool/detail",
                        params: {
                            id: e
                        },
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "getShareOrderList",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/nft/v1/pool/share-order/listSummary",
                        params: {
                            poolId: e
                        },
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "createShareOrder",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/nft/v1/pool/share-order/create",
                        data: data,
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "getNftAssetList",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/nft/v1/asset/list",
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "getNftAssetDetail",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/nft/v1/asset/detail",
                        params: {
                            assetId: e
                        },
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "voteToSell",
                value: function(e) {
                    return this.request({
                        method: "POST",
                        url: "/nft/v1/vote/vote",
                        data: {
                            assetId: e
                        },
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "cancelVote",
                value: function(e) {
                    return this.request({
                        method: "POST",
                        url: "/nft/v1/vote/cancel",
                        data: {
                            assetId: e
                        },
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }]),
            r
        }(f);
        function S(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var R = function(e) {
            Object(c.a)(r, e);
            var t = S(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "chainInfo",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/v1/wallets/chain-info",
                        params: e
                    })
                }
            }, {
                key: "accountInfo",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/v2/wallets/account/info",
                        params: e
                    })
                }
            }]),
            r
        }(f);
        function A(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var _ = function(e) {
            Object(c.a)(r, e);
            var t = A(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "getShareInfo",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/v1/config/share-info",
                        params: e,
                        headers: {
                            "x-router-tag": "dev-product1"
                        }
                    })
                }
            }, {
                key: "getConfigInfo",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/config/info",
                        params: {
                            platformId: 30
                        }
                    })
                }
            }]),
            r
        }(f);
        function I(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var P = function(e) {
            Object(c.a)(r, e);
            var t = I(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "getBannerList",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v1/traderHelp/banner",
                        data: data
                    })
                }
            }, {
                key: "getProblemList",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v1/traderHelp/problem",
                        data: data
                    })
                }
            }, {
                key: "getProblemAnswer",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v1/traderHelp/problemAnswer",
                        data: data
                    })
                }
            }]),
            r
        }(f);
        function F(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var Z = function(e) {
            Object(c.a)(r, e);
            var t = F(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "moduleInfo",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/main/v1/zone/moduleInfo",
                        params: e,
                        headers: {
                            "x-router-tag": "pre-product1"
                        }
                    })
                }
            }, {
                key: "moduleDetail",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/main/v1/zone/moduleDetail",
                        params: e,
                        headers: {
                            "x-router-tag": "pre-product1"
                        }
                    })
                }
            }]),
            r
        }(f);
        function H(e) {
            var t = function() {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                    return !1;
                if (Reflect.construct.sham)
                    return !1;
                if ("function" == typeof Proxy)
                    return !0;
                try {
                    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}
                    ))),
                    !0
                } catch (e) {
                    return !1
                }
            }();
            return function() {
                var r, n = Object(d.a)(e);
                if (t) {
                    var o = Object(d.a)(this).constructor;
                    r = Reflect.construct(n, arguments, o)
                } else
                    r = n.apply(this, arguments);
                return Object(l.a)(this, r)
            }
        }
        var V = function(e) {
            Object(c.a)(r, e);
            var t = H(r);
            function r() {
                return Object(o.a)(this, r),
                t.apply(this, arguments)
            }
            return Object(n.a)(r, [{
                key: "getAccountInfo",
                value: function(e, symbol) {
                    var t = {
                        userId: e,
                        symbol: symbol,
                        tradingUnit: "COIN"
                    };
                    return this.request({
                        method: "GET",
                        url: "/swap/v1/proxy/account/info/get",
                        params: t
                    })
                }
            }, {
                key: "getQuoteContracts",
                value: function(e) {
                    var t = {
                        tradingUnit: e
                    };
                        window.request = this.request;
                    return this.request({
                        method: "GET",
                        url: "/v1/quote/all/contracts/get",
                        params: t
                    })
                }
            }, {
                key: "getOrderLiquidationPrice",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return this.request({
                        resolveSource: !0,
                        method: "GET",
                        url: "/swap/v1/proxy/trade/order/liquidationPrice/get",
                        params: e
                    })
                }
            }, {
                key: "getOrderAccMortgageAsset",
                value: function(e) {
                    return this.request({
                        resolveSource: !0,
                        method: "GET",
                        url: "/swap/v1/proxy/trade/order/mock/mortgageAsset",
                        params: e
                    })
                }
            }, {
                key: "swapMarginTiered",
                value: function(e) {
                    return this.request({
                        resolveSource: !0,
                        method: "GET",
                        url: "/v1/quote/contract/marginTiered/get",
                        params: e
                    })
                }
            }, {
                key: "getVipInfos",
                value: function() {
                    return this.request({
                        resolveSource: !0,
                        method: "GET",
                        url: "/user-service/v1/vip/info"
                    })
                }
            }]),
            r
        }(f)
          , z = Object(n.a)((function e(t) {
            Object(o.a)(this, e),
            this.request = t,
            this.users = new v(t),
            this.trader = new w(t),
            this.traderApply = new k(t),
            this.analysis = new x(t),
            this.emailSubscribe = new M(t),
            this.spot = new j(t),
            this.nft = new G(t),
            this.wallets = new R(t),
            this.config = new _(t),
            this.traderHelp = new P(t),
            this.zone = new Z(t),
            this.swap = new V(t)
        }
        ));
        t.a = z
    },
    892: function(e, t, r) {
        "use strict";
        r(615)
    },
    893: function(e, t, r) {
        var map = {
            "./arrow-down.svg": 894,
            "./arrow_down_01.svg": 895,
            "./arrow_right2.svg": 896,
            "./arrows-right.svg": 897,
            "./back.svg": 898,
            "./button-translate.svg": 899,
            "./copy-link.svg": 900,
            "./copy.svg": 901,
            "./google.svg": 902,
            "./ic-confirm-close.svg": 903,
            "./ic-copy-primary.svg": 904,
            "./ic-share.svg": 905,
            "./ic-topic-title.svg": 906,
            "./icon-close.svg": 907,
            "./icon-man.svg": 908,
            "./icon-market.svg": 909,
            "./icon-official.svg": 910,
            "./icon-tips.svg": 911,
            "./icon-trader.svg": 912,
            "./icon-woman.svg": 913,
            "./mini-waring.svg": 914,
            "./radar.svg": 915,
            "./share.svg": 916,
            "./twitter.svg": 917
        };
        function n(e) {
            var t = o(e);
            return r(t)
        }
        function o(e) {
            if (!r.o(map, e)) {
                var t = new Error("Cannot find module '" + e + "'");
                throw t.code = "MODULE_NOT_FOUND",
                t
            }
            return map[e]
        }
        n.keys = function() {
            return Object.keys(map)
        }
        ,
        n.resolve = o,
        e.exports = n,
        n.id = 893
    },
    894: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-arrow-down",
            use: "icon-arrow-down-usage",
            viewBox: "0 0 8 6",
            content: '<symbol viewBox="0 0 8 6" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-arrow-down">\n<path d="M0.478213 0.5C0.093754 0.5 -0.113655 0.950953 0.136548 1.24286L3.65815 5.35139C3.83774 5.56091 4.16189 5.56091 4.34148 5.35139L7.86308 1.24286C8.11328 0.950953 7.90587 0.5 7.52141 0.5H0.478213Z" fill="#262626" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    895: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-arrow_down_01",
            use: "icon-arrow_down_01-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-arrow_down_01">\n<path d="M4.35355 5.64645C4.15829 5.45118 3.84171 5.45118 3.64645 5.64645C3.45118 5.84171 3.45118 6.15829 3.64645 6.35355L4.35355 5.64645ZM8 10L7.64645 10.3536C7.84171 10.5488 8.15829 10.5488 8.35355 10.3536L8 10ZM12.3536 6.35355C12.5488 6.15829 12.5488 5.84171 12.3536 5.64645C12.1583 5.45118 11.8417 5.45118 11.6464 5.64645L12.3536 6.35355ZM3.64645 6.35355L7.64645 10.3536L8.35355 9.64645L4.35355 5.64645L3.64645 6.35355ZM8.35355 10.3536L12.3536 6.35355L11.6464 5.64645L7.64645 9.64645L8.35355 10.3536Z" fill="#1A1A1A" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    896: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-arrow_right2",
            use: "icon-arrow_right2-usage",
            viewBox: "0 0 6 12",
            content: '<symbol viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-arrow_right2">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0.146447 11.3536C-0.0488157 11.1583 -0.0488157 10.8417 0.146447 10.6464L4.79289 6L0.146448 1.35355C-0.0488148 1.15829 -0.0488148 0.841709 0.146448 0.646446C0.34171 0.451184 0.658292 0.451184 0.853554 0.646446L5.85355 5.64645C6.04882 5.84171 6.04882 6.15829 5.85355 6.35355L0.853553 11.3536C0.658291 11.5488 0.341709 11.5488 0.146447 11.3536Z" fill="#262626" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    897: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-arrows-right",
            use: "icon-arrows-right-usage",
            viewBox: "0 0 16 10",
            content: '<symbol viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-arrows-right">\n<path d="M0 4.98718H14" stroke="#979797" stroke-width="1.5" />\n<path d="M10 1L14.3661 4.98719L10 9.16871" stroke="#979797" stroke-width="1.5" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    898: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-back",
            use: "icon-back-usage",
            viewBox: "0 0 10 18",
            content: '<symbol viewBox="0 0 10 18" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-back">\n<path d="M9.544 1.53033C9.8369 1.23744 9.8369 0.762563 9.544 0.46967C9.25111 0.176777 8.77624 0.176777 8.48334 0.46967L9.544 1.53033ZM1.01367 9L0.483342 8.46967C0.190449 8.76256 0.190449 9.23744 0.483342 9.53033L1.01367 9ZM8.48334 17.5303C8.77624 17.8232 9.25111 17.8232 9.544 17.5303C9.8369 17.2374 9.8369 16.7626 9.544 16.4697L8.48334 17.5303ZM8.48334 0.46967L0.483342 8.46967L1.544 9.53033L9.544 1.53033L8.48334 0.46967ZM0.483342 9.53033L8.48334 17.5303L9.544 16.4697L1.544 8.46967L0.483342 9.53033Z" fill="#1A1A1A" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    899: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-button-translate",
            use: "icon-button-translate-usage",
            viewBox: "0 0 76 76",
            content: '<symbol viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-button-translate">\n<g filter="url(#icon-button-translate_filter0_d_902_10756)">\n<circle cx="38" cy="34" r="30" fill="white" />\n</g>\n<path fill-rule="evenodd" clip-rule="evenodd" d="M35.0811 20C33.9765 20 33.0811 20.8954 33.0811 22V27.84H39.4023C39.394 27.8252 39.3871 27.8127 39.3815 27.8026L39.3698 27.7812L39.3665 27.7752L39.1833 27.3278L40.0151 27.3278L40.5673 27.3237L40.5676 27.3242L40.5696 27.3278L40.7544 27.3278L40.8191 27.3279L40.8651 27.4188C40.9339 27.536 41.019 27.6784 41.1187 27.84H41.1602C42.0419 27.84 42.7903 28.4105 43.0564 29.2024C43.666 28.3653 44.0888 27.5853 44.3764 26.9527C44.5836 26.4969 44.7202 26.1182 44.8055 25.8511L36.6879 25.8511L36.6879 24.3724L48.5176 24.3724V25.8511H46.3439L46.3374 25.8765C46.3141 25.9671 46.2788 26.0951 46.2285 26.2554C46.128 26.5759 45.9673 27.0261 45.7225 27.5646C45.2926 28.5104 44.6021 29.7313 43.5208 30.9997C44.2657 31.7763 45.1957 32.6847 45.968 33.4253C46.3876 33.8276 46.7584 34.1783 47.0242 34.4283C47.1571 34.5533 47.2637 34.6531 47.3369 34.7215L47.4209 34.7998L47.4496 34.8265L46.9465 35.3683L46.4434 35.9101L46.4132 35.882L46.3276 35.8022C46.2532 35.7327 46.1454 35.6317 46.0111 35.5054C45.7426 35.2529 45.3683 34.8989 44.9446 34.4926C44.3948 33.9654 43.758 33.3465 43.1602 32.7456V39.0399H50.121C51.2256 39.0399 52.121 38.1445 52.121 37.04V22C52.121 20.8954 51.2256 20 50.121 20H35.0811ZM41.8614 22.8001V24.3712H43.3402V22.8001H41.8614Z" fill="#2A54FF" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M23 30.96C23 29.8554 23.8954 28.96 25 28.96H40.04C41.1445 28.96 42.0399 29.8554 42.0399 30.96V45.9999C42.0399 47.1045 41.1445 47.9999 40.0399 47.9999H25C23.8954 47.9999 23 47.1045 23 45.9999V30.96ZM32.5191 34.8993C30.5417 34.8993 28.9388 36.5023 28.9388 38.4796C28.9388 40.457 30.5417 42.0599 32.5191 42.0599C34.1461 42.0599 35.5197 40.9746 35.9553 39.4885L32.521 39.4885V37.4688L38.0292 37.4688V37.4759C38.0883 37.8023 38.1191 38.1378 38.1191 38.4796C38.1191 38.8226 38.0882 39.1584 38.0292 39.4843V39.4885H38.0284C37.5534 42.0998 35.2674 44.0796 32.5191 44.0796C29.4263 44.0796 26.9191 41.5724 26.9191 38.4796C26.9191 35.3868 29.4263 32.8796 32.5191 32.8796C33.8815 32.8796 35.1327 33.3675 36.1035 34.1769L34.8101 35.7281C34.1888 35.2101 33.3916 34.8993 32.5191 34.8993Z" fill="#FFC929" />\n<defs>\n<filter id="icon-button-translate_filter0_d_902_10756" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">\n<feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>\n<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix>\n<feOffset dy="4"></feOffset>\n<feGaussianBlur stdDeviation="4"></feGaussianBlur>\n<feComposite in2="hardAlpha" operator="out"></feComposite>\n<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"></feColorMatrix>\n<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_902_10756"></feBlend>\n<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_902_10756" result="shape"></feBlend>\n</filter>\n</defs>\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    900: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-copy-link",
            use: "icon-copy-link-usage",
            viewBox: "0 0 50 50",
            content: '<symbol viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-copy-link">\n<circle cx="25" cy="25" r="25" fill="#FFBA50" />\n<path d="M28.2252 22.0183C28.0261 21.8193 27.8138 21.6398 27.5951 21.4734L27.5947 21.4738C27.3695 21.2573 27.0639 21.1239 26.7268 21.1239C26.0351 21.1239 25.4745 21.6846 25.4745 22.3763C25.4745 22.6823 25.5844 22.9627 25.7668 23.1802H25.7668C25.7668 23.1802 25.7669 23.1803 25.7669 23.1803C25.8545 23.2848 25.9588 23.3749 26.0758 23.4463C26.1939 23.5436 26.3098 23.6395 26.4182 23.7479L26.5214 23.8512C27.8194 25.1476 27.4319 27.3811 26.1339 28.6791L20.5951 34.2163C19.2972 35.5127 17.187 35.5127 15.889 34.2163L15.7849 34.1121C14.4868 32.8142 14.4868 30.7024 15.7849 29.4076L18.2319 26.9614C18.5459 26.7122 18.7474 26.3276 18.7474 25.8957C18.7474 25.1444 18.1384 24.5354 17.3871 24.5354C17.1037 24.5354 16.8405 24.6222 16.6226 24.7706C16.6219 24.7691 16.6212 24.7678 16.6205 24.7663L16.5944 24.7907C16.4981 24.8599 16.411 24.9411 16.3357 25.0327L13.7928 27.4122C11.4024 29.8042 11.4024 33.7164 13.7928 36.1051L13.896 36.2083C16.2864 38.5971 20.1969 38.5971 22.5873 36.2083L28.1245 30.6695C30.5115 28.2793 30.714 24.5087 28.3269 22.1199L28.2252 22.0183Z" fill="white" />\n<path d="M36.2067 13.896L36.1035 13.7927C33.7131 11.4023 29.8026 11.4023 27.4123 13.7927L21.8751 19.3315C19.4847 21.7219 19.3531 25.1737 21.7435 27.5657L21.8451 27.6657C21.9536 27.7742 22.0663 27.8766 22.1813 27.9747C22.2646 28.0677 22.3624 28.1473 22.4711 28.2102C22.4719 28.2109 22.4728 28.2116 22.4736 28.2122L22.474 28.2119C22.6473 28.3116 22.8481 28.3689 23.0623 28.3689C23.7153 28.3689 24.2446 27.8395 24.2446 27.1866C24.2446 27.0023 24.2024 26.8278 24.1272 26.6723C23.9709 26.3214 23.6783 26.1077 23.4759 25.9053L23.3743 25.8053C22.0763 24.5074 22.5692 22.6216 23.8672 21.3237L29.4076 15.7865C30.7024 14.4884 32.8133 14.4884 34.1113 15.7865L34.2146 15.8881C35.5126 17.1861 35.5126 19.2987 34.2146 20.5951L31.7756 23.0357C31.4438 23.2815 31.2287 23.6759 31.2287 24.1205C31.2287 24.8656 31.8327 25.4698 32.5779 25.4698C32.8373 25.4698 33.0795 25.3964 33.2851 25.2696C33.2866 25.2722 33.2881 25.2747 33.2896 25.2773L33.3275 25.2424C33.444 25.1644 33.5475 25.0686 33.6345 24.9591L36.205 22.5872C38.5971 20.1969 38.5971 16.2863 36.2067 13.896Z" fill="white" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    901: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-copy",
            use: "icon-copy-usage",
            viewBox: "0 0 12 12",
            content: '<symbol viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-copy">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M1.67484 12H7.94739C8.87458 12 9.62222 11.2538 9.62222 10.3252V4.05261C9.62222 3.12542 8.87605 2.37778 7.94739 2.37778H1.67484C0.747643 2.37778 0 3.12395 0 4.05261V10.3252C0 11.2524 0.746171 12 1.67484 12ZM0.903647 4.09677C0.903647 3.65966 1.26128 3.28142 1.71899 3.28142H7.90323C8.34034 3.28142 8.71858 3.63906 8.71858 4.09677V10.281C8.71858 10.7181 8.36094 11.0964 7.90323 11.0964H1.71899C1.28188 11.0964 0.903647 10.7387 0.903647 10.281V4.09677ZM12 8.68031C11.9765 8.88194 11.8028 9.0556 11.5791 9.0556C11.3569 9.0556 11.1552 8.87311 11.1552 8.63174V1.81465C11.1552 1.27011 10.7108 0.825644 10.1662 0.825644L3.3506 0.827117C3.12836 0.827117 2.92673 0.644622 2.92673 0.403256C2.94734 0.181025 3.12836 0 3.3506 0H10.1883C11.1611 0 11.947 0.752058 12 1.71163V8.68031Z" fill="#C6C6CB" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    902: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-google",
            use: "icon-google-usage",
            viewBox: "0 0 44 15",
            content: '<symbol viewBox="0 0 44 15" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-google">\n  <path d="M8.41089 2.62426L9.49833 1.53682C9.49833 1.53682 7.88365 -0.209678 5.18151 0.0209913C2.47938 0.251661 1.02946 2.09702 0.337451 3.71171C-0.354558 5.32639 -0.2557 8.78644 3.3032 10.6647C5.74171 11.9499 9.99263 10.6647 10.6846 7.60014C10.6846 7.60014 11.113 6.31498 10.8164 5.06277H5.67581V6.5786H9.33357C9.33357 6.5786 9.23471 8.45691 7.58707 9.21483C5.93943 9.97274 3.8634 9.64321 2.84186 8.52282C1.82033 7.40242 1.4908 6.21612 1.72147 4.66734C1.95214 3.11856 3.73159 1.56977 5.28037 1.53682C6.82916 1.50387 7.65298 1.8993 8.41089 2.62426Z" fill="#4284F4" />\n  <path d="M15.034 5.45846C16.2203 5.45846 17.1759 6.41409 17.1759 7.60039C17.1759 8.7867 16.2203 9.74233 15.034 9.74233C13.8477 9.74233 12.8921 8.7867 12.8921 7.60039C12.8921 6.41409 13.8477 5.45846 15.034 5.45846ZM15.034 3.97559C13.0239 3.97559 11.4092 5.59027 11.4092 7.60039C11.4092 9.61052 13.0239 11.2252 15.034 11.2252C17.0441 11.2252 18.6588 9.61052 18.6588 7.60039C18.6588 5.59027 17.0441 3.97559 15.034 3.97559Z" fill="#EA4435" />\n  <path d="M22.8455 5.45846C24.0318 5.45846 24.9874 6.41409 24.9874 7.60039C24.9874 8.7867 24.0318 9.74233 22.8455 9.74233C21.6592 9.74233 20.7036 8.7867 20.7036 7.60039C20.7036 6.41409 21.6592 5.45846 22.8455 5.45846ZM22.8455 3.97559C20.8354 3.97559 19.2207 5.59027 19.2207 7.60039C19.2207 9.61052 20.8354 11.2252 22.8455 11.2252C24.8556 11.2252 26.4703 9.61052 26.4703 7.60039C26.4703 5.59027 24.8227 3.97559 22.8455 3.97559Z" fill="#FBBD04" />\n  <path d="M32.5647 4.2387V4.8648C32.5647 4.8648 31.4443 3.48078 29.7308 4.13984C28.0172 4.7989 27.4241 6.01815 27.1934 7.13855C26.9298 8.52256 27.8854 10.7963 29.8626 11.1258C31.8068 11.4224 32.5647 10.4009 32.5647 10.4009C32.6306 11.4224 32.4988 11.7849 32.334 12.1144C32.1693 12.4439 31.8727 13.0371 30.6205 13.0371C29.3683 13.0701 28.841 11.7849 28.841 11.7849L27.457 12.3121C27.457 12.3121 27.6547 12.8394 28.4786 13.6303C29.2694 14.4211 31.1807 14.7506 32.5977 13.9268C34.0146 13.103 34.0476 10.9281 34.0476 10.9281V4.2387H32.5647ZM30.8182 9.80772C29.566 9.80772 28.9728 8.88504 28.841 8.45666C28.7422 8.09418 28.5774 7.2374 28.9399 6.51244C29.4671 5.45795 30.6864 5.32614 31.1148 5.45795C31.5761 5.58976 32.6636 6.14996 32.6306 7.53398C32.5977 8.85209 32.0375 9.80772 30.8182 9.80772Z" fill="#4284F4" />\n  <path d="M35.1348 0.383301H36.6176V10.9282H35.1348V0.383301Z" fill="#34A852" />\n  <path d="M40.8365 9.80846C39.5184 9.80846 39.1559 8.68806 39.1559 8.68806L43.9999 6.67794C43.9999 6.67794 43.4068 4.53601 41.5285 4.10762C39.6502 3.67923 38.365 4.73372 37.8048 5.78821C37.2446 6.8427 37.2776 8.62216 38.0355 9.80846C38.8264 10.9618 40.4081 11.2913 41.199 11.1925C42.0228 11.0936 43.0114 10.797 43.8681 9.64369L42.6489 8.81987C42.6818 8.78692 42.1546 9.80846 40.8365 9.80846ZM40.5399 5.39278C41.6603 5.19506 42.1546 6.15069 42.1546 6.15069L38.8923 7.50176C38.8923 6.80975 39.2218 5.62345 40.5399 5.39278V5.39278Z" fill="#EA4435" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    903: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-ic-confirm-close",
            use: "icon-ic-confirm-close-usage",
            viewBox: "0 0 24 24",
            content: '<symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-ic-confirm-close"><path d="M3.515 3.515l16.97 16.97M20.485 3.515l-16.97 16.97" stroke="#1A1A1A" stroke-width="1.5" /></symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    904: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-ic-copy-primary",
            use: "icon-ic-copy-primary-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-ic-copy-primary"><path stroke="#2A54FF" stroke-width="1.2" stroke-linejoin="round" d="M2.5 5H11v8.5H2.5z" /><path d="M5.5 3.594V2H14v8.5h-1.594" stroke="#2A54FF" stroke-width="1.2" stroke-linejoin="round" /></symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    905: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-ic-share",
            use: "icon-ic-share-usage",
            viewBox: "0 0 24 24",
            content: '<symbol viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-ic-share">\n<path d="M7 9L12 3.99998L17 9" stroke="#555555" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />\n<path d="M4 14V20H20V14" stroke="#555555" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />\n<path d="M12 5V15" stroke="#555555" stroke-width="1.5" stroke-linecap="square" stroke-linejoin="round" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    906: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-ic-topic-title",
            use: "icon-ic-topic-title-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-ic-topic-title"><g clip-path="url(#icon-ic-topic-title_clip0_2359_5481)"><path fill-rule="evenodd" clip-rule="evenodd" d="M13.855 13.451a8 8 0 1 0-5.197 2.522L8.615 16h6.77l-1.53-2.549z" fill="#2A54FF" /><path d="M7.03 4.046l-1.532 7.948M10.33 4.046l-1.532 7.948M4.062 6.42h8M3.815 9.497h8" stroke="#fff" stroke-width="1.2" stroke-linecap="round" /></g><defs><clipPath id="icon-ic-topic-title_clip0_2359_5481"><path fill="#fff" d="M0 0h16v16H0z" /></clipPath></defs></symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    907: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-icon-close",
            use: "icon-icon-close-usage",
            viewBox: "0 0 12 12",
            content: '<symbol viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-icon-close">\n<path d="M10.9027 1.05021L1.00325 10.9497" stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" />\n<path d="M10.9028 10.9497L1.0033 1.05025" stroke="#7B7B7B" stroke-width="1.5" stroke-linecap="round" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    908: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-icon-man",
            use: "icon-icon-man-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-icon-man">\n<circle cx="8" cy="8" r="7.25" fill="#819AFF" stroke="#819AFF" stroke-width="0.5" />\n<circle cx="7" cy="9" r="2.35" stroke="white" stroke-width="1.3" />\n<path d="M11.9596 4.95962C12.2135 4.70578 12.2135 4.29422 11.9596 4.04038C11.7058 3.78654 11.2942 3.78654 11.0404 4.04038L11.9596 4.95962ZM8.54038 6.54038C8.28654 6.79422 8.28654 7.20578 8.54038 7.45962C8.79422 7.71346 9.20578 7.71346 9.45962 7.45962L8.54038 6.54038ZM9.45962 7.45962L11.9596 4.95962L11.0404 4.04038L8.54038 6.54038L9.45962 7.45962Z" fill="white" />\n<path d="M9 4.5H11.5V7" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    909: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-icon-market",
            use: "icon-icon-market-usage",
            viewBox: "0 0 24 25",
            content: '<symbol viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-icon-market"><path d="M7.545 8.407v2.275M7.545 19.407v2.275" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" /><path stroke="#1A1A1A" stroke-width="1.5" stroke-linejoin="round" d="M5 11.278h5.091v8.051H5z" /><path d="M16.454 18.5v4M16.454 3.5v2.093" stroke="#1A1A1A" stroke-width="1.5" stroke-linecap="round" /><path stroke="#1A1A1A" stroke-width="1.5" stroke-linejoin="round" d="M13.909 6.371H19V18.24h-5.091z" /></symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    910: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-icon-official",
            use: "icon-icon-official-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-icon-official">\n<path d="M7.25 0.433013C7.7141 0.165064 8.2859 0.165064 8.75 0.433013L14.1782 3.56699C14.6423 3.83494 14.9282 4.33013 14.9282 4.86603V11.134C14.9282 11.6699 14.6423 12.1651 14.1782 12.433L8.75 15.567C8.2859 15.8349 7.7141 15.8349 7.25 15.567L1.8218 12.433C1.3577 12.1651 1.0718 11.6699 1.0718 11.134V4.86603C1.0718 4.33013 1.3577 3.83494 1.8218 3.56699L7.25 0.433013Z" fill="#2490FF" />\n<path d="M11 6L7.67029 10.1621C7.4049 10.4939 6.87289 10.3644 6.78957 9.94784L6 6" stroke="white" stroke-width="1.8" stroke-linecap="round" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    911: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-icon-tips",
            use: "icon-icon-tips-usage",
            viewBox: "0 0 12 12",
            content: '<symbol viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-icon-tips"><g clip-path="url(#icon-icon-tips_clip0_6625_26511)"><g clip-path="url(#icon-icon-tips_clip1_6625_26511)"><circle cx="6" cy="6" r="5.25" stroke="#999" stroke-width=".9" stroke-linecap="round" /><path d="M6.15 2.625a.75.75 0 1 0 0 1.5.75.75 0 0 0 0-1.5z" fill="#999" /><path d="M5.25 5.25h.9c.041 0 .075.034.075.075V8.25M4.95 8.625H7.5" stroke="#999" stroke-width=".9" stroke-linecap="round" /></g></g><defs><clipPath id="icon-icon-tips_clip0_6625_26511"><path fill="#fff" d="M0 0h12v12H0z" /></clipPath><clipPath id="icon-icon-tips_clip1_6625_26511"><path fill="#fff" d="M0 0h12v12H0z" /></clipPath></defs></symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    912: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-icon-trader",
            use: "icon-icon-trader-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-icon-trader">\n<path d="M7.02707 0.829121C7.58771 0.35135 8.41229 0.351351 8.97293 0.829122L10.0796 1.77222C10.3198 1.97696 10.6186 2.10069 10.9332 2.1258L12.3826 2.24146C13.1169 2.30006 13.6999 2.88312 13.7585 3.61739L13.8742 5.0668C13.8993 5.38145 14.023 5.68015 14.2278 5.9204L15.1709 7.02707C15.6486 7.58771 15.6486 8.41229 15.1709 8.97293L14.2278 10.0796C14.023 10.3198 13.8993 10.6186 13.8742 10.9332L13.7585 12.3826C13.6999 13.1169 13.1169 13.6999 12.3826 13.7585L10.9332 13.8742C10.6186 13.8993 10.3198 14.023 10.0796 14.2278L8.97293 15.1709C8.41229 15.6486 7.58771 15.6486 7.02707 15.1709L5.9204 14.2278C5.68015 14.023 5.38144 13.8993 5.0668 13.8742L3.61739 13.7585C2.88312 13.6999 2.30006 13.1169 2.24146 12.3826L2.1258 10.9332C2.10069 10.6186 1.97696 10.3198 1.77222 10.0796L0.829121 8.97293C0.35135 8.41229 0.351351 7.58771 0.829122 7.02707L1.77222 5.9204C1.97696 5.68015 2.10069 5.38144 2.1258 5.0668L2.24146 3.61738C2.30006 2.88312 2.88312 2.30006 3.61739 2.24146L5.0668 2.1258C5.38145 2.10069 5.68015 1.97696 5.9204 1.77222L7.02707 0.829121Z" fill="#FFBF1C" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M4.28696 9.96593C4.39314 10.0369 4.51797 10.0748 4.64569 10.0748C4.73051 10.0749 4.81452 10.0583 4.89288 10.0258C4.97124 9.9933 5.0424 9.94566 5.10229 9.88558L8.36113 6.62675L8.37039 6.61749L9.88566 5.10222C9.97687 5.01103 10.0387 4.89461 10.0631 4.76797C10.0876 4.64133 10.0735 4.51027 10.0228 4.39169C9.97206 4.2731 9.88699 4.17243 9.77852 4.10263C9.67006 4.03284 9.54318 3.99713 9.41424 4.00011L6.65763 4.06426C6.5357 4.06707 6.41707 4.10436 6.31546 4.1718C6.21385 4.23925 6.13341 4.33409 6.08347 4.44536C6.03353 4.55662 6.01612 4.67975 6.03326 4.8005C6.0504 4.92125 6.10139 5.03467 6.18032 5.12764L7.03123 6.13108L4.18909 8.97238C4.09879 9.0627 4.03731 9.17777 4.0124 9.30303C3.98749 9.42829 4.00028 9.55812 4.04915 9.67612C4.09802 9.79411 4.18078 9.89496 4.28696 9.96593ZM6.21225 11.891C6.31842 11.962 6.44324 11.9999 6.57094 11.9999L6.58593 11.9997L9.34254 11.9363C9.46817 11.9333 9.59023 11.8938 9.69373 11.8226C9.79724 11.7513 9.87769 11.6514 9.92524 11.535C9.97278 11.4187 9.98535 11.291 9.9614 11.1677C9.93744 11.0443 9.87801 10.9306 9.79039 10.8405L8.90698 9.93139L11.8111 7.02746C11.9322 6.90636 12.0002 6.74211 12.0002 6.57086C12.0002 6.3996 11.9322 6.23535 11.8111 6.11425C11.69 5.99316 11.5257 5.92512 11.3545 5.92512C11.1832 5.92512 11.019 5.99316 10.8979 6.11425L7.54627 9.46586L7.54072 9.47125L6.11451 10.8976C6.02421 10.9879 5.9627 11.103 5.93778 11.2282C5.91285 11.3534 5.92562 11.4833 5.97448 11.6012C6.02333 11.7192 6.10608 11.8201 6.21225 11.891Z" fill="white" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    913: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-icon-woman",
            use: "icon-icon-woman-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-icon-woman">\n<circle cx="8" cy="8" r="7.25" fill="#FF7AAA" stroke="#FF7AAA" stroke-width="0.5" />\n<circle cx="9" cy="7" r="2.35" stroke="white" stroke-width="1.3" />\n<path d="M7.45963 9.45962C7.71347 9.20578 7.71348 8.79422 7.45964 8.54038C7.2058 8.28654 6.79424 8.28654 6.5404 8.54038L7.45963 9.45962ZM4.04038 11.0404C3.78654 11.2942 3.78654 11.7058 4.04038 11.9596C4.29422 12.2135 4.70578 12.2135 4.95962 11.9596L4.04038 11.0404ZM4.95962 11.9596L7.45963 9.45962L6.5404 8.54038L4.04038 11.0404L4.95962 11.9596Z" fill="white" />\n<path d="M4.5 8.5L7.5 11.5" stroke="white" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    914: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-mini-waring",
            use: "icon-mini-waring-usage",
            viewBox: "0 0 14 14",
            content: '<symbol viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-mini-waring">\n<path fill-rule="evenodd" clip-rule="evenodd" d="M7 0C3.13438 0 0 3.13438 0 7C0 10.8656 3.13438 14 7 14C10.8656 14 14 10.8656 14 7C14 3.13438 10.8656 0 7 0ZM6.125 7.875C6.125 7.39175 6.51675 7 7 7C7.48325 7 7.875 7.39175 7.875 7.875V10.5C7.875 10.9832 7.48325 11.375 7 11.375C6.51675 11.375 6.125 10.9832 6.125 10.5V7.875ZM7 3.5C7.60406 3.5 8.09375 3.98969 8.09375 4.59375C8.09375 5.19781 7.60406 5.6875 7 5.6875C6.39594 5.6875 5.90625 5.19781 5.90625 4.59375C5.90625 3.98969 6.39594 3.5 7 3.5Z" fill="#FFC929" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    915: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-radar",
            use: "icon-radar-usage",
            viewBox: "0 0 16 16",
            content: '<symbol viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-radar">\n<path d="M14.4884 11.0767C13.3361 13.5023 10.8638 15.1793 7.9998 15.1793C4.03468 15.1793 0.820312 11.9649 0.820312 7.9998C0.820312 4.03468 4.03468 0.820312 7.9998 0.820312C11.9649 0.820312 15.1793 4.03468 15.1793 7.9998C15.1793 8.38365 15.1492 8.76046 15.0912 9.128" stroke="url(#icon-radar_paint0_angular_292_6117)" stroke-miterlimit="16" stroke-linecap="round" stroke-linejoin="round" />\n<circle cx="8" cy="8" r="1" fill="white" />\n<circle cx="8" cy="8" r="3.75" stroke="white" stroke-width="0.5" />\n<path d="M8 8L14 11" stroke="white" stroke-width="0.5" />\n<defs>\n<radialGradient id="icon-radar_paint0_angular_292_6117" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.9998 7.9998) rotate(31.5043) scale(7.45832)">\n<stop offset="0.455841" stop-color="white" stop-opacity="0.6" />\n<stop offset="0.960834" stop-color="#2A54FF" stop-opacity="0" />\n<stop offset="0.961876" stop-color="white" />\n</radialGradient>\n</defs>\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    916: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-share",
            use: "icon-share-usage",
            viewBox: "0 0 20 20",
            content: '<symbol viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-share">\n<path d="M10 2.5H5C3.61929 2.5 2.5 3.61929 2.5 5V15C2.5 16.3807 3.61929 17.5 5 17.5H15C16.3807 17.5 17.5 16.3807 17.5 15V11.25" stroke-width="1.25" stroke-linecap="round" />\n<path d="M8.75 13.75V12.5C8.75 8.35786 12.1079 5 16.25 5H17.5" stroke-width="1.25" stroke-linecap="round" />\n<path d="M15 2.5L17.5 5L15 7.5" stroke-width="1.25" stroke-linecap="round" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    },
    917: function(e, t, r) {
        "use strict";
        r.r(t);
        var n = r(32)
          , o = r.n(n)
          , c = r(33)
          , l = r.n(c)
          , symbol = new o.a({
            id: "icon-twitter",
            use: "icon-twitter-usage",
            viewBox: "0 0 50 51",
            content: '<symbol viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg" id="icon-twitter">\n<path d="M25 0.0243665C11.1925 0.0243665 0 11.219 0 25.0244C0 38.8297 11.1925 50.0229 25 50.0229C38.8075 50.0229 50 38.8297 50 25.0229C50 11.2162 38.8075 0.0229492 25 0.0229492V0.0243665Z" fill="white" />\n<path fill-rule="evenodd" clip-rule="evenodd" d="M0 25.0244C0 11.219 11.1925 0.0243665 25 0.0243665V0.0229492C38.8075 0.0229492 50 11.2162 50 25.0229C50 38.8297 38.8075 50.0229 25 50.0229C11.1925 50.0229 0 38.8297 0 25.0244ZM38.4517 21.3738C38.4517 21.0832 38.4475 20.7955 38.4336 20.5091C39.7186 19.5601 40.8263 18.3922 41.7061 17.0588C40.5092 17.5968 39.2375 17.9497 37.9345 18.1056C39.3124 17.2696 40.3396 15.9614 40.8247 14.4245C39.536 15.1953 38.1258 15.7415 36.6541 16.0399C35.4599 14.7415 33.7528 13.9255 31.8662 13.9255C28.2434 13.9255 25.3045 16.9115 25.3045 20.5939C25.3054 21.1047 25.3628 21.6138 25.4755 22.1119C20.0286 21.8395 15.1907 19.1857 11.9571 15.1544C11.3941 16.1372 11.0674 17.2799 11.0674 18.499C11.0586 20.7184 12.1532 22.7971 13.9882 24.0456C12.9451 24.0171 11.9251 23.7316 11.0187 23.2143L11.0174 23.3046C11.0174 26.5269 13.2778 29.221 16.2807 29.8424C15.7288 29.9884 15.1463 30.069 14.5485 30.069C14.1273 30.069 13.7199 30.0328 13.3168 29.9467C14.1509 32.6101 16.5754 34.5285 19.4448 34.5758C16.7108 36.7659 13.2084 37.7599 9.73145 37.3324C12.6342 39.2369 16.0805 40.3378 19.7868 40.3378C31.8524 40.3378 38.4517 30.176 38.4517 21.3738Z" fill="#1CA1F2" />\n</symbol>'
        });
        l.a.add(symbol);
        t.default = symbol
    }
}]);
