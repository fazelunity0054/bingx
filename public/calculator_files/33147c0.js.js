/*! For license information please see LICENSES */
!function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {}
          , t = (new Error).stack;
        t && (e._sentryDebugIds = e._sentryDebugIds || {},
        e._sentryDebugIds[t] = "17eaf68c-6746-4d45-9542-e560c5e4c38a",
        e._sentryDebugIdIdentifier = "sentry-dbid-17eaf68c-6746-4d45-9542-e560c5e4c38a")
    } catch (e) {}
}();
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
    id: "4.53.4-prod"
},
(window.webpackJsonp = window.webpackJsonp || []).push([[32], {
    110: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        ));
        var r = "global/onUpdateLoginState"
    },
    120: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "c", (function() {
            return o
        }
        )),
        n.d(t, "b", (function() {
            return c
        }
        ));
        var r = {
            ST_ORDER_OPEN: "st_order_open",
            ST_ORDER_PRE_OPEN: "st_order_pre_open",
            ST_ORDER_CLOSE: "st_order_close",
            ST_ORDER_PRE_CLOSE: "st_order_pre_close",
            ST_ORDER_PRE_CLOSE_ALL: "st_order_pre_close_all",
            ST_ORDER_CLOSE_ALL: "st_order_close_all",
            ST_ORDER_CLOSE_ALL_CANCEL: "st_order_close_all_cancel",
            ST_ORDER_CLOSE_CANCEL: "st_order_close_cancel",
            ST_ORDER_TP_SL_SHOW: "st_order_tp_sl_show",
            ST_ORDER_TP_SL_CANCEL: "st_order_tp_sl_cancel",
            ST_ORDER_TP_SL_CONFIRM: "st_order_tp_sl_confirm",
            ST_ORDER_DG_OPEN: "st_order_dg_open",
            ST_ORDER_ADJUST_MARGIN_CONFIRM: "st_order_adjust_margin_confirm",
            ST_ORDER_ADJUST_MARGIN_CANCEL: "st_order_adjust_margin_cancel",
            ST_ORDER_ADJUST_MARGIN_PRE: "st_order_adjust_margin_pre",
            ST_ORDER_DG_CANCEL: "st_order_dg_cancel",
            ST_ORDER_DG_TP_SL_CONFIRM: "st_order_dg_tp_sl_confirm",
            ST_ORDER_DG_TP_SL_CANCEL: "st_order_dg_tp_sl_cancel",
            ST_ORDER_DG_TP_SL_SHOW: "st_order_dg_tp_sl_show",
            PP_ORDER_CREATE: "pp_order_create",
            PP_ORDER_MF_MARGIN: "pp_order_mf_margin",
            PP_ORDER_CLOSE_ALL: "pp_order_close_all",
            PP_ORDER_CLOSE_ALL_CANCEL: "pp_order_close_all_cancel",
            PP_ORDER_CLOSE_ALL_PRE: "pp_order_close_all_pre",
            PP_ORDER_CANCEL: "pp_order_cancel",
            PP_ORDER_PRE_CANCEL: "pp_order_pre_cancel",
            PP_ORDER_TP_SL_PRE: "pp_order_tp_sl_pre",
            PP_ORDER_TP_SL_CANCEL: "pp_order_tp_sl_cancel",
            SP_ORDER_CREATE: "sp_order_create",
            OP_HOME_BANNER_CLICK: "op_home_banner_click",
            OP_HOME_POP_CLICK: "op_home_pop_click",
            OP_HOME_NAVI_CLICK: "op_home_navi_click",
            ACT_RECHARGE: "act_recharge",
            ACT_APPLY: "act_apply",
            ACT_TRADE: "act_trade",
            ACT_COPY_TRADE: "act_copy_trade",
            CRS_ONLINE: "csr_online",
            CRS_QUESTION_MODULE: "csr_question_module",
            CRS_QUESTION_ITEM: "csr_question_item",
            CRS_QUESTION_MANUAL: "csr_question_manual",
            CRS_QUESTION_MSG: "csr_question_msg",
            ZENDESK_SCRIPT_LOADING: "zendesk_script_loading",
            SHARE_CODE_CLICK: "share_code_click",
            TRADER_LIST_VIEW_FEED: "trader_list_view_feed",
            SHARE_FEED: "share_feed",
            SHARE_FEED_BY_LINK: "share_feed_by_link",
            CPTD_TRADER_DETAILS: "cptd_trader_details",
            CPTD_TRADER_DETAILS_COPY_CONFIRM: "cptd_trader_details_copy_confirm",
            CPTD_CREATE_COPY_CONFIRM: "cptd_create_copy_confirm",
            TOP_BANNER_CLICK: "topbanner_click",
            TRADER_APPLY_SUCCESS: "trader_apply_success",
            REGISTER_SUCCESS: "register_success",
            CHANGE_PASSWORD_CLICK: "change_password_click",
            KYC_VERIFICATION_CLICK: "KYC_verification_click",
            DOWNLOAD_APP_CLICK: "download_app_click",
            BINBX_VERIFY: "BingX_verification_click",
            VIEW_ALL_CLICK0: "view_all_click0",
            VIEW_ALL_CLICK1: "view_all_click1",
            VIEW_ALL_CLICK1_4: "view_all_click1-4",
            VIEW_ALL_CLICK2: "view_all_click2",
            VIEW_ALL_CLICK2_2: "view_all_click2-2",
            VIEW_ALL_CLICK2_3: "view_all_click2-3",
            VIEW_ALL_CLICK3: "view_all_click3",
            VIEW_ALL_CLICK4: "view_all_click4",
            SPOT_FEES_CLICK: "spot_fees_click",
            CONTENT1_CLICK: "content1_click",
            CONTENT2_CLICK: "content2_click",
            CONTENT3_CLICK: "content3_click",
            CONTENT4_CLICK: "content4_click",
            GO_ACADEMY_CLICK: "go_academy_click",
            VIDEO1_CLICK: "video1_click",
            VIDEO2_CLICK: "video2_click",
            VIDEO3_CLICK: "video3_click",
            VIDEO4_CLICK: "video4_click",
            COPY_TRADE_CLICK: "copytrade_click",
            TRADE_CLICK1: "trade_click1",
            TRADE_CLICK2: "trade_click2",
            SEE_BONUS_CLICK: "seebonus_click",
            ACADEMY_CONTENT1_CLICK: "academycontent1_click",
            ACADEMY_CONTENT2_CLICK: "academycontent2_click",
            ACADEMY_CONTENT3_CLICK: "academycontent3_click",
            ACADEMY_CONTENT4_CLICK: "academycontent4_click",
            VIEW_MORE_CLICK: "viewmore_click",
            GO_HELPCENTER_CLICK: "go_helpcenter_click",
            COMMUNITY_MEDAL: "community_medal",
            FEED_LANGUAGE_FILTER: "feed_language_filter",
            TPL_LINK_CLICK: "tpl_link_click",
            COMMON_EXCHANGE_REGISTERTOREQUIRE_CLICK: "common_exchange_registertorequire_click",
            COMMON_EXCHANGE_GETSTARTED_CLICK1: "common_exchange_getstarted_click1",
            COMMON_EXCHANGE_GETSTARTED_CLICK2: "common_exchange_getstarted_click2",
            COMMON_EXCHANGE_GETCODE_CLICK: "common_exchange_getcode_click",
            COMMON_EXCHANGE_REGISTER_CLICK: "common_exchange_register_click",
            COMMON_COPYTRADE_REGISTERTOREQUIRE_CLICK: "common_copytrade_registertorequire_click",
            COMMON_COPYTRADE_GETSTARTED_CLICK1: "common_copytrade_getstarted_click1",
            COMMON_COPYTRADE_GETSTARTED_CLICK2: "common_copytrade_getstarted_click2",
            COMMON_COPYTRADE_GETCODE_CLICK: "common_copytrade_getcode_click",
            COMMON_COPYTRADE_REGISTER_CLICK: "common_copytrade_register_click",
            COMMON_COPYTRADE_COPY_CLICK: "common_copytrade_copy_click",
            C2C_ORDER: "c2c_order",
            C2C_ORDER_CONFIRM: "c2c_order_confirm",
            DOWNLOAD_IOS_CLICK: "download_iOS_click",
            DOWNLOAD_ANDROID_CLICK: "download_android_click",
            SWITH_SHARETRADING_ACCOUNT: "swith_sharetrading_account",
            ENTER_HOMEPAGE: "enter_homepage",
            NEW_TRADER_GUIDE: "new_trader_guide",
            GO_TO_TRADE_BINGX: "go_to_trade_bingx",
            GO_TO_TRADE_BINANCE: "go_to_trade_binance",
            GO_TO_USE_GRID: "go_to_use_grid",
            SPOT_GRID_LIST_SORT: "spot_grid_list_sort",
            SPOT_GRID_LIST_CHOOSE: "spot_grid_list_choose",
            SPOT_GRID_LIST_SEARCH: "spot_grid_list_search",
            SPOT_GRID_LIST_COPY: "spot_grid_list_copy",
            HOME_WELFARE_CLOSE: "home_welfare_close",
            HOME_WELFARE_POPUPOPEN: "home_welfare_popupopen",
            HOME_WELFARE_CLICK: "home_welfare_click",
            HOME_WELFARE_ENTRANCECLICK: "home_welfare_entranceclick",
            NEWUSER_WELFARE_CLICK: "newuser_welfare_click",
            NEWUSER_RULE_CLICK: "newuser_rule_click",
            NEWUSER_BUTTON_CLICK: "newuser_button_click",
            NEWUSER_FOLLOW_HITCOUNT: "newuser_follow_hitcount",
            NEWUSER_CARDVOUCHER_VISIT: "newuser_cardvoucher_visit",
            GOCHECK_SIMULATIONGOLD: "Gocheck_simulationgold",
            GOCHECK_CASHCOUPON: "Gocheck_cashcoupon",
            FEED_MARKET_QUOTATION_TEXT: "feed_market_quotation_text",
            FEED_MARKET_QUOTATION_CARD: "feed_market_quotation_card",
            FEED_LINK_QUOTATION_TEXT: "feed_link_quotation_text",
            FEED_LINK_QUOTATION_CARD: "feed_link_quotation_card",
            FEED_ACCOUNT_QUOTATION_TEXT: "feed_account_quotation_text",
            FEED_ACCOUNT_QUOTATION_CARD: "feed_account_quotation_card",
            FEED_POST_ENTRY: "feed_post_entry",
            FEED_POST_CANCEL: "feed_post_cancel",
            LIST_TRADER: "list_trader",
            SEE_ALL: "see_all",
            ALL_TRADER: "all_trader",
            APPLY_FOR_TRADER: "apply_for_trader",
            SWITCH_PROFIT_PERIOD: "switch_profit_period",
            SEE_NOTE: "see_note",
            SWITCH_PROFIT_CHART_PERIOD: "switch_profit_chart_period",
            SWITCH_WEEKLY_PROFIT_CHART_PERIOD: "switch_weekly_profit_chart_period",
            SWITCH_RISK_SCORE_CHART_PERIOD: "switch_risk_score_chart_period",
            SWITCH_CATEGORY_PREFERENCE_CHART_PERIOD: "switch_category_preference_chart_period",
            HOMEPAGE_MSGCENTER_CLICK: "homepage_msgcenter_click",
            MSGCENTER_MSGGROUP_CLICK: "msgcenter_msggroup_click",
            MSGLIST_MSGLINK_CLICK: "msglist_msglink_click",
            TANCHUANG_LINK_CLICK: "tanchuang_link_click",
            TANCHUANG_CLOSE_CLICK: "tanchuang_close_click",
            STD_CAL_PAGE_CAL_CLICK: "stdCal_page_cal_click",
            INVITE_ENTRY_CLICK: "invite_entry_click",
            HOME_CREDITCARDBUY: "home_creditcardbuy",
            STANDARD_RULES_ADJUSTPAGE_LEARNMORE_CLICK: "standard_rules_adjustPage_learnMore_click"
        }
          , o = {
            ST_ORDER_HOLD: "st_order_hold",
            ST_CREATE_ORDER: "st_create_order",
            ST_ORDER_HISTORY: "st_order_history",
            PP_SIMPLE_ORDER_HOLD: "pp_simple_order_hold",
            PP_SIMPLE_ORDER_HISTORY: "pp_simple_order_history",
            SP_MARKET_DETAIL: "sp_market_detail",
            SP_ORDER_LIST: "sp_order_list",
            SP_ORDER_DETAIL: "sp_order_detail",
            HOME: "home",
            TRADE: "trade",
            COMMUNITY: "community",
            ASSET: "asset",
            MINE: "mine",
            CASH: "cash",
            WITHDRAW: "withdraw",
            RECHARGE: "recharge",
            TRANSFER: "transfer",
            FIAT_ORDER_DETAIL: "fiat_order_detail",
            FIAT_ORDER_LIST: "fiat_order_list",
            FIAT_BUY: "fiat_buy",
            BONUS_HOLD: "bonus_hold",
            BONUS_HISTORY: "bonus_history",
            PROXY: "proxy",
            RED_PACKET: "red_packet",
            SETTING: "setting",
            TRADE_SETTING: "trade_setting",
            COPY_MANAGER: "copy_manager",
            BRING_LIST_MANAGER: "bring_list_manager",
            RECOMMEND: "recommend",
            GOOGLE_VERIFY_FIRST: "google_verify_first",
            GOOGLE_VERIFY_SECOND: "google_verify_second",
            WITHDRAW_ADDRESS_LIST: "withdraw_address_list",
            WITHDRAW_ADD_ADDRESS: "withdraw_add_address",
            CHANGE_SECURITY_UPLOAD: "change_security_upload",
            CHANGE_SECURITY_SELECT: "change_security_select",
            ASSET_DETAIL: "asset_detail",
            PP_CONTRACT_DETAIL: "pp_contract_detail",
            ST_CONTRACT_DETAIL: "st_contract_detail",
            LANGUAGE: "language",
            MESSAGE_CENTER: "message_center",
            MESSAGE_DETAIL_LIST: "message_detail_list",
            NEWCOMER_TASK: "newcomer_task",
            PP_KLINE_DETAIL: "pp_kline_detail",
            PRE_CERTIFICATION: "pre_certification",
            CERTIFICATION_UPLOAD: "certification_upload",
            TRADER_INFO_DETAIL: "trader_info_detail",
            REMOVE_PRIVATE_FOLLOWER: "remove_private_follower",
            ST_TRADE_RULE: "st_trade_rule",
            ST_TRADE_ACCOUNT: "st_trade_account",
            ST_TRADE_SCALE_SETTING: "st_trade_scale_setting",
            FEED_DETAIL: "feed_details",
            REGISTER: "register",
            INFLUENCER: "influencer",
            INFLUENCER_HOMEPAGE: "influencer_homepage",
            TRADER_HOMEPAGE_NEWS_SCREEN: "trader_homepage_news_screen",
            COMMUNITY_NEWS_SCREEN: "community_news_screen",
            COMMON_EXCHANGE_PV: "common_exchange_pv",
            COMMON_EXCHANGE_POPUP_PV: "common_exchange_popup_pv",
            COMMON_COPYTRADE_PV: "common_copytrade_pv",
            COMMON_COPYTRADE_POPUP_PV: "common_copytrade_popup_pv",
            C2C_VISIT: "c2c_visit",
            DOWNLOAD_VIEW: "download_view",
            HOME_WELFARE_POPUP: "home_welfare_popup",
            NEWUSER_WELFARE_EXPOSURE: "newuser_welfare_exposure",
            NEWUSER_LOGIN_SUCCESSFUL: "newuser_login_successful",
            SPOT_GRID_LIST: "spot_grid_list",
            FUTURES_LIST: "futures_list",
            TRADER_CURRENT_SPOT_GRID: "trader_current_spot_grid",
            TRADER_SPOT_GRID_DETAIL: "trader_spot_grid_detail",
            TRADER_PAST_SPOT_GRID: "trader_past_spot_grid",
            TRADER_SPOT_GRID_FOLLOWERS: "trader_spot_grid_followers",
            USDT_FOLLOWING_LIST_FUTURES: "usdt_following_list_futures",
            USDT_FOLLOWING_LIST_SPOT_GRID: "usdt_following_list_spot_grid",
            USDT_FOLLOWING_SPOT_GRID_DETAIL: "usdt_following_spot_grid_detail",
            USDT_FOLLOWED_LIST_FUTURES: "usdt_followed_list_futures",
            USDT_FOLLOWED_LIST_SPOT_GRID: "usdt_followed_list_spot_grid",
            USDT_FOLLOWED_DETAIL_SPOT_GRID: "usdt_followed_detail_spot_grid",
            FEED_LIST: "feed_list",
            TRADER_DETAILS: "trader_details",
            LIST_DETAILS: "list_details",
            DATA_INFO: "data_info",
            STAY_PROFIT_RATE_CHART: "stay_profit_rate_chart",
            STAY_WEEKLY_PROFIT_CHART: "stay_weekly_profit_chart",
            STAY_RISK_SCORE_CHART: "stay_risk_score_chart",
            STAY_CATEGORY_PREFERENCE_CHART: "stay_category_preference_chart",
            STAY_FEED_LIST: "stay_feed_list",
            STAY_FEED_DETAILS: "stay_feed_details",
            MSGLIST_MSG_SHOW: "msglist_msg_show",
            TANCHUANG_PAGE_SHOW: "tanchuang_page_show",
            STD_CAL_PAGE_VIEW: "stdCal_page_view",
            STANDARD_RULES_PAGE_VIEW: "standard_rules_page_view"
        }
          , c = {
            DOMAIN_PROBE: "domainProbe",
            DOMAIN_SWITCH: "domainSwitch",
            ST_TV_USE_SERVER_TIME: "st_tv_use_server_time",
            ST_TV_150_PRICE: "st_tv_150_price",
            ST_TV_VISIBILITY_CHANGE: "st_tv_visibility_change",
            ST_TV_RE_INITIAL: "st_tv_re_initial",
            ST_TV_SYMBOL_SWITCH_ERROR: "st_tv_symbol_change_error",
            ST_TV_LOAD_HISTORICAL_DATA: "st_tv_load_historical_data",
            SP_TV_USE_SERVER_TIME: "sp_tv_use_server_time",
            SP_TV_150_PRICE: "sp_tv_150_price",
            SP_TV_VISIBILITY_CHANGE: "sp_tv_visibility_change",
            SP_TV_RE_INITIAL: "sp_tv_re_initial",
            SP_TV_SYMBOL_SWITCH_ERROR: "sp_tv_symbol_change_error",
            SP_TV_LOAD_HISTORICAL_DATA: "sp_tv_load_historical_data",
            VERIFY_SDK_LOAD: "verify_sdk_load",
            VERIFY_RECORD: "verify_record",
            APP_GET_TOKEN_RESULT: "app_get_token_result",
            SYS_VISIBLE_CHANGE: "system_visible_change",
            SYS_NETWORK_CHANGE_LOG: "system_network_change_log",
            KYC_UPLOAD_FAIL: "kyc_upload_fail",
            GLOBAL_WEAK_NETWORK: "global_weak_network",
            TOKEN_SYNC: "token_sync",
            FINGERPRINT_INFO: "fingerprint_info"
        }
    },
    13: function(e, t, n) {
        "use strict";
        n.d(t, "i", (function() {
            return o
        }
        )),
        n.d(t, "j", (function() {
            return c
        }
        )),
        n.d(t, "l", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return d
        }
        )),
        n.d(t, "a", (function() {
            return f
        }
        )),
        n.d(t, "m", (function() {
            return h
        }
        )),
        n.d(t, "d", (function() {
            return _
        }
        )),
        n.d(t, "c", (function() {
            return m
        }
        )),
        n.d(t, "f", (function() {
            return v
        }
        )),
        n.d(t, "h", (function() {
            return y
        }
        )),
        n.d(t, "k", (function() {
            return E
        }
        )),
        n.d(t, "e", (function() {
            return O
        }
        )),
        n.d(t, "g", (function() {
            return w
        }
        )),
        n.d(t, "n", (function() {
            return T
        }
        ));
        var r, o = 2, c = !1, l = "user_token", d = 2e4, f = 5e3, h = "http://support.bingx.com", _ = ("http://static.zdassets.com/ekr/snippet.js?key=".concat("32e59745-43ee-4a5b-9bda-31f67921b965"),
        ["Bingbon", "BingX"]), m = "/module", v = "FtklfbKqfD.frontend.", y = {
            USDT: 2,
            BTC: 6,
            ETH: 4,
            VST: 2,
            XRP: 4,
            SHIB: 8,
            LINK: 4,
            LTC: 2,
            TRX: 6,
            ADA: 6,
            FIL: 4,
            DOGE: 7,
            default: 4
        }, E = "http://static-app.bb-os.com", O = "http://blog.bingx.com", w = {
            DESKTOP: 30,
            ANDROID_APP_H5: 60,
            IOS_APP_H5: 70,
            ANDROID_H5: 80,
            IOS_H5: 90
        };
        !function(e) {
            e.ENTRANCE2CopyTrading = "trade:copyTrade",
            e.ENTRANCE2spot = "trade:spot",
            e.ENTRANCE2swap = "trade:perpetual_contract",
            e.ENTRANCE2futures = "trade:stand_contract",
            e.ENTRANCE2strategy = "trade:grid",
            e.ENTRANCE2mission = "user:NewUserBenefits",
            e.ENTRANCE2offlineMerchant = "user:storeEvents",
            e.ENTRANCE2welfare = "user:rewardHub",
            e.ENTRANCE2bonus = "user:coupon",
            e.ENTRANCE2kyc = "user:kyc",
            e.ENTRANCE2invite = "user:invite",
            e.ENTRANCE2subAccount = "user:subAccount:manage",
            e.ENTRANCE2APImanage = "user:openApi",
            e.ENTRANCE2recharge = "asset:chainRecharge",
            e.ENTRANCE2withdraw = "asset:withdraw",
            e.ENTRANCE2transfer = "asset:transfer",
            e.ENTRANCE2bankTransfer = "asset:fiat:bankRecharge",
            e.ENTRANCE2p2p = "asset:fiat:p2p",
            e.ENTRANCE2c2c = "asset:fiat:rapidBuy",
            e.ELEMENT2exchange = "asset:convert",
            e.ELEMENT2inviteInfo = "invite:myInviter",
            e.ELEMENT2googleAuth = "user:security:googleCode",
            e.ELEMENT2phoneSecurity = "user:security:phone",
            e.ELEMENT2emailSecurity = "user:security:email",
            e.ELEMENT2passwordSecurity = "user:security:password",
            e.ELEMENT2payPwdSecurity = "user:security:payPwd"
        }(r || (r = {}));
        var T = ["spot-symbol", "multichart-business", "futures-channel-symbol"]
    },
    141: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return r
        }
        )),
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return c
        }
        ));
        var r = {
            NAVIGATION_BAR: "navigation_bar",
            HOMEPAGE: "homepage",
            REGISTER: "register",
            STANDARD_CONTRACT_CATEGORY: "standard_contract_category",
            STANDARD_CONTRACT_CHART: "standard_contract_chart",
            STANDARD_CONTRACT_OPEN: "standard_contract_open",
            STANDARD_CONTRACT_ORDERS: "standard_contract_orders",
            STANDARD_CONTRACT_INFO: "standard_contract_info",
            COPY_TRADING: "copy_trading",
            BUY_CRYPTO: "buy_crypto",
            EXCHANGE: "exchange",
            INVITE: "invite",
            LEVERAGE: "leverage",
            REGISTER_SUCCESS: "register_success",
            TASK_CENTER: "task_center",
            CLOSE_POSITION: "close_position",
            HISTORICAL_ORDER: "historical_order",
            ADJUST_MARGIN: "adjust_margin",
            PROMOTE: "promote",
            ADS_BTC_INTRO: "ads_btc_intro",
            ADS_TRANSIT: "ads_transit",
            ADS_COPY_TRADING: "ads_copy_trading",
            FIAT: "fiat",
            STEP: "step",
            WITHDRAW: "withdraw",
            DEPOSIT: "deposit",
            CELEBRATE: "celebrate",
            SPOT: "spot",
            COPY_TRADE: "copy_trade",
            VST_APPLY: "vst_apply",
            COM_ACT_WIDGET: "comAct_widget",
            K_TRADE: "k_trade",
            PNL: "pnl",
            ACT_DRAW: "act_draw",
            FOOTER: "footer",
            SHARE: "share",
            TRADER_DETAIL: "trader_detail",
            TRADER_NEWS: "trader_news",
            HOT_ACTIVITY: "hot_activity",
            ACTIVITY: "activity"
        }
          , o = {
            ENTER_INTO: "enter_into",
            MESSAGE_CENTER: "message_center",
            DOWNLOAD: "download",
            SWITCH_LANGUAGE: "switch_language",
            LOGIN: "login",
            ENTER_REGISTER: "enter_register",
            VISIT: "visit",
            ENTER_REGISTER_PAGE: "enter_register_page",
            CLICK_BANNER: "click_banner",
            CLICK_ANNOUNCEMENT: "click_announcement",
            CLICK_CATEGORY: "click_category",
            NEXT_REGISTER: "next_register",
            REG_BTN: "reg_btn",
            PRICE_PERIOD: "price_period",
            SELECT_INDEX: "select_index",
            FULL_SCREEN: "full_screen",
            SELECT_LONG_SHORT: "select_long_short",
            SWITCH_ACCOUNT: "switch_account",
            SELECT_ORDER_TYPE: "select_order_type",
            INPUT_MARGIN: "input_margin",
            SLIDE_MARGIN: "slide_margin",
            SELECT_LEVERAGE: "select_leverage",
            STOP_LOSS: "stop_loss",
            TAKE_PROFIT: "take_profit",
            ADD_SUBTRACT: "add_subtract",
            OPEN_ORDER_COST: "open_order_cost",
            OPEN_ORDER: "open_order",
            SELECT_TAB: "select_tab",
            CLOSE_ALL_BUTTON: "close_all_button",
            CLOSE_ALL_CONFIRM: "close_all_confirm",
            CLOSE_ORDER: "close_order",
            CLOSE_ORDER_COST: "close_order_cost",
            CLICK_TAB_INFO: "click_tab_info",
            SEARCH_TRADER: "search_trader",
            CLICK_TRADER_LIST: "click_trader_list",
            CLICK_TRADER_PROFILE: "click_trader_profile",
            CLICK_COPY: "click_copy",
            CONFIRM_COPY: "confirm_copy",
            CLICK_SHARE_TRADERS: "click_share_traders",
            COPYLINK: "copylink",
            ASK_SERVICE_PROVIDER: "ask_service_provider",
            PURCHASE: "purchase",
            CLICK_COIN: "click_coin",
            CLICK_RATIO: "click_ratio",
            EXCHANGE_EXECUTE: "exchange_execute",
            COPY_INVITECODE: "copy_invitecode",
            COPY_LINK: "copy_link",
            SHARE_MEDIA: "share_media",
            CUSTOM_LEVERAGE: "custom_leverage",
            CUSTOM_LEVERAGE_COMFIRM: "custom_leverage_comfirm",
            CLICK_BONUS_ICON: "click_bonus_icon",
            FINISH_TASK: "finish_task",
            VISIT_TASK_CENTER: "visit_task_center",
            CANCEL_TASK_CENTER: "cancel_task_center",
            BUTTON_GO: "button_go",
            BUTTON_USE_BONUS: "button_use_bonus",
            CLOSE_PARTLY_CONFIRM: "close_partly_confirm",
            ADJUST_CLOSE_RATIO: "adjust_close_ratio",
            ENTER_PEFERENCE: "enter_peference",
            SWITCH_ON_CONFIRM: "switchoff_on_confirm",
            SWITCH_CLOSE_CONFIRM: "switchon_close_confirm",
            PARTLY_CLOSE_UNAVAILABLE_HINT: "partly_close_unavailable_hint",
            CHECK_ORIGINAL_ORDER_NO: "check_original_order_no",
            ADD_MARGIN_CONFIRM: "add_margin_confirm",
            REMOVE_MARGIN_CONFIRM: "remove_margin_confirm",
            TPSL_UNAVIAILABLE_HINT: "TPSL_unavailable_hint",
            ADJUST_RATIO: "adjust_ratio",
            SELECT_MAX: "select_max",
            ENTRANCE_CLICK: "entrance_click",
            FOOTER_HELPCENTER_CLICK: "footer_helpcenter_click",
            FOOTER_BEGINNERGUIDE_CLICK: "footer_beginnerguide_click",
            FOOTER_ANNOUNCEMENT_CLICK: "footer_announcement_click",
            FOOTER_BLOG_CLICK: "footer_blog_click",
            FOOTER_BINGX_DYNAMIC: "footer_bingx_dynamic",
            NAV_BINGX_DYNAMIC: "nav_bingx_dynamic",
            ADS_EXP: "ads_exp",
            ADS_REG: "ads_reg",
            REG_1: "reg_1",
            REG_2: "reg_2",
            REG_3: "reg_3",
            ADS_TRANSIT_VISIT: "ads_transit_visit",
            ADS_TRANSIT_BUY: "ads_transit_buy",
            ADS_TRANSIT_TRADE: "ads_transit_trade",
            ADS_TRANSIT_COPY_TRADE: "ads_transit_copyTrade",
            ADS_TRANSIT_CUSTOMER_SERVER: "ads_transit_customerService",
            ADS_COPY_TRADING_IVST: "ads_copy_trading_visit",
            ADS_LANGUAGE: "ads_language",
            ADS_COPY_TRADING_ARTIFICIAL: "ads_copy_trading_artificial",
            ADS_COPY_TRADING_ARTIFICIAL_VIEW: "ads_copy_trading_artificial_view",
            ADS_COPY_TRADING_AUTOMATIC: "ads_copy_trading_automatic",
            ADS_COPY_TRADING_AUTOMATIC_BUY: "ads_copy_trading_automatic_buy",
            ADS_COPY_TRADING_AUTOMATIC_DEPOSIT: "ads_copy_trading_automatic_deposit",
            ADS_COPY_TRADING_AUTOMATIC_CUSTOMER: "ads_copy_trading_automatic_customer",
            ADS_COPY_TRADING_AUTOMATIC_HELP: "ads_copy_trading_automatic_help",
            CELE_VISIT: "cele_visit",
            CELE_REG: "cele_reg",
            CELE_LOGIN: "cele_login",
            CELE_JOIN: "cele_join",
            CELE_DEPO: "cele_depo",
            CELE_TRANS: "cele_trans",
            CELE_TRADE: "cele_trade",
            CELE_SHARE_VOTE: "cele_share_vote",
            CELE_SHARE_JOIN: "cele_share_join",
            APPLY: "apply",
            RECHARGE: "recharge",
            TRADE: "trade",
            COPY_TRADE: "copyTrade",
            SIGNIN_CLICK: "signin_click",
            TRADE_CLICK: "trade_click",
            RECORD_CLICK: "record_click",
            BUY_1: "buy_1",
            INQUIRE: "inquire",
            PROVIDER_BUY: "provider_buy",
            CONFIRM: "comfirm",
            STEP_MAX_MARGIN_SHOW: "step_max_margin_show",
            STEP_MAX_MARGIN_CLICK: "step_max_margin_click",
            STEP_MAX_MARGIN_POP_BTN: "step_max_margin_pop_btn",
            DEPO_ACCOUNT_GUIDE: "depo_account_guide",
            DEPO_ACCOUNT_GUIDE_SWITCH: "depo_account_guide_switch",
            DEPO_ACCOUNT_ENTRY: "depo_account_entry",
            DEPO_ACCOUNT_SWITCH: "depo_account_switch",
            DEPO_CHAIN_POP_SHOW: "depo_chain_pop_show",
            DEPO_CHAIN_POP_BTN: "depo_chain_pop_btn",
            WITHDRAW_ACCOUNT_EXPAND: "withdraw_account_expand",
            WITHDRAW_ACCOUNT_SWITCH: "withdraw_account_switch",
            WITHDRAW_CHAIN_POP_SHOW: "withdraw_chain_pop_show",
            WITHDRAW_CHAIN_POP_BTN: "withdraw_chain_pop_btn",
            EXCHANGE_ACCOUNT_EXPAND: "exchange_account_expand",
            EXCHANGE_ACCOUNT_SWITCH: "exchange_account_switch",
            SPOT_PAIR_VISIT: "spot_pair_visit",
            SPOT_TRADE_BTN: "spot_trade_btn",
            DEPO_FIAT_SHOW: "depo_fiat_show",
            DEPO_FIAT_CLICK: "depo_fiat_click",
            SHARETRADING_PROFIT: "sharetrading_profit",
            SHARETRADING_FOLLOWER: "sharetrading_follower",
            INVITE_FOLLOWER: "invite_follower",
            INVITE_FOLLOWER_SET_LIMIT: "invite_follower_set_limit",
            INIVITE_FOLLOWER_SHARE: "inivite_follower_share",
            REMOVE_FOLLOWER: "remove_follower",
            REMOVE_FOLLOWER_CONFIRM: "remove_follower_confirm",
            ACCEPT_COPY_INVITATION: "accept_copy_invitation",
            CPTD_TRADER_DETAILS: "cptd_trader_details",
            COPY_RESERVE: "copy_reserve",
            COPY_CANCEL_RESERVE: "copy_cancel_reserve",
            COPY_PRIORITY_MORE: "copy_priority_more",
            LINING_UP_SPEED_UP: "lining_up_speed_up",
            INVITED_COPY_STATEMENT: "invited_copy_statement",
            OUT_COUNT_DOWN_MORE: "out_count_down_more",
            HISTORICAL_COPY: "historical_copy",
            CPTD_SET_SELF_INFO: "cptd_set_self_info",
            CPTD_DEPOSIT: "cptd_deposit",
            CPTD_TRADE: "cptd_trade",
            CPTD_INVITE: "cptd_invite",
            VST_ASSET_ENTRY_CLICK: "vst_asset_entry_click",
            VST_TRADING_ENTRY_VIEW: "vst_trading_entry_view",
            VST_TRADING_ENTRY_CLICK: "vst_trading_entry_click",
            VST_APPLY_BUTTON: "vst_apply_button",
            ADD_GOOGLE_INTEREST: "ads_google_interest",
            ADS_GOOGLE_ATTEND: "ads_google_attend",
            K_TRADE_CLOSE: "k_trade_close",
            K_TRADE_TP_OR_SL_DRAG: "k_trade_tp_or_sl_drag",
            K_TRADE_CANCEL_TP_OR_SL: "k_trade_cancel_tp_or_sl",
            PNL_ENTRANCE_CLICK: "pnl_entrance_click",
            PNL_VIEW: "pnl_view",
            PNL_TIME_SELECT: "pnl_time_select",
            PNL_H5_WEBVIEW: "pnl_h5_webview",
            PNL_H5_TIME_SELECT: "pnl_h5_time_select",
            SHARE_POSITION: "share_position",
            SHARE_HIS_ORDER: "share_his_order",
            SHARE_INVITE: "share_invite",
            CPTD_MANAGEMENT: "cptd_management",
            CPTD_MANAGEMENT_DETAIL: "cptd_management_detail",
            CPTD_MANAGEMENT_SETTING: "cptd_management_setting",
            CPTD_HISTORY: "cptd_history",
            CPTD_TRADER_PROFIT_SHARE_CLICK: "cptd_trader_profit_share_click",
            CPTD_CREATE_DEPOSIT_CLICK: "cptd_create_deposit_click",
            CPTD_CREATE_GUIDE: "cptd_create_guide",
            CPTD_HOME_BANNER_CLICK: "cptd_home_banner_click",
            TRADER_DETAIL_INTRO_MORE: "trader_detail_intro_more",
            TRADER_DETAIL_INTRO_TRANSLATE: "trader_detail_intro_translate",
            COMMUNITY_NEWS: "community_news",
            COMMUNITY_NEWS_SCREEN: "community_news_screen",
            NEWS_AVATAR: "news_avatar",
            TRADER_HOMEPAGE_NEWS_SCREEN: "trader_homepage_news_screen",
            TRADER_HOMEPAGE_NEWS: "trader_homepage_news",
            ENTRY_NEWS_POST: "entry_news_post",
            NEWS_HIDE_TRANSLATION: "news_hide_translation",
            NEWS_SEE_TRANSLATION: "news_see_translation",
            BUY: "buy",
            HOT_ACTIVITY_CLICK: "hot_activity_click",
            COPYCONTEST_PV: "copycontest_pv",
            COPYCONTEST_REGISTER: "copycontest_register",
            COPYCONTEST_APPLICATION: "copycontest_application",
            COPYCONTEST_ENROLMENT: "copycontest_enrolment",
            COPYCONTEST_LOGIN: "copycontest_login",
            COPYCONTEST_SHARE: "copycontest_share",
            COPYCONTEST_RECHARGE: "copycontest_recharge",
            COPYCONTEST_TRANSFER: "copycontest_transfer",
            COPYCONTEST_ALLPY_TRADER: "copycontest_applytrader",
            COPYCONTEST_REGISTER_NOW: "copycontest_registernow",
            COPYCONTEST_TRADINGARENA: "copycontest_tradingarena_pv",
            COPYCONTEST_MY_COPY: "copycontest_mycopy",
            COPYCONTEST_COPY: "copycontest_copy",
            COPYCONTEST_TRADE: "copycontest_trade",
            ORDER_SYMBOL_CLICK: "order_symbol_click"
        }
          , c = {
            HOME_PAGE: "home_page",
            PROFESSIONAL_CONTRACT: "professional_contract",
            STANDARD_CONTRACT: "standard_contract",
            LEARN: "learn",
            HELP_CENTER: "help_center",
            REFERRAL_PROGRAM: "referral_program",
            AFFILIATE_PROGRAM: "affiliate_program",
            CLICK_TOP_COMMUNITY: "click_top_community",
            VIEW_TOP_COMMUNITY: "view_top_community",
            ABOUT_US: "about_us",
            JOIN_US: "join_us",
            FEED: "feed",
            RECRUITING: "recruiting",
            COPY_TRADING: "copy_trading",
            COMMUNITY: "community",
            BUY_CRYPTO: "buy_crypto",
            C2C: "fiat_c2c",
            BUY_CRYPTO_RECORDS: "buy_crypto_records",
            EXCHANGE: "exchange",
            ANNOUNCEMENT: "announcement",
            MY_ASSETS: "my_assets",
            ASSETS_RECORD: "assets_record",
            RECHARGE: "recharge",
            WITHDRAW: "withdraw",
            TRANSFER: "transfer",
            CHECK_ALL: "check_all",
            APP_STORE: "app_store",
            GOOGLE_PLAY: "google_play",
            LOGGED: "logged",
            NOT_LOGGED_IN: "not_logged_in",
            WITH_INFO: "with_info",
            WITHOUT_INFO: "without_info",
            MOBILE: "mobile",
            EMAIL: "e-mail",
            LONG: "long",
            SHORT: "short",
            MARKET: "market",
            TRIGGER: "trigger",
            SET_PRICE: "set_price",
            SET_PNL_RATE: "set_pnl_rate",
            PRICE_STOP_LOSS: "price_stop_loss",
            PNL_STOP_LOSS: "pnl_stop_loss",
            PRICE_TAKE_PROFIT: "price_take_profit",
            PNL_TAKE_PROFIT: "pnl_take_profit",
            CUSTOM: "custom",
            TASK_CENTER: "task_center",
            BLOG: "Blog",
            THREE_YEAR_ANNIVERSARY: "3-Year Anniversary",
            DETAIL: "detail",
            CANCEL: "cancel",
            BONUS_USE: "bonus_use",
            BONUS_CANCEL: "bonus_cancel",
            STANDARD: "standard",
            ADD: "add",
            REMOVE: "remove",
            MAX_OF_PAIR: "max_of_pair",
            NOT_MAX_OF_PAIR: "not_max_of_pair",
            CONFIRM: "confirm",
            ADJ_CONFIRM: "adj_confirm",
            FUND: "fund",
            PERPETUAL: "perpetual",
            SPOT: "spot",
            BUY: "buy",
            SELL: "sell",
            COPY_AVAILABLE: "copy_available",
            RESERVE_AVAILABLE: "reserve_available",
            RESERVED: "reserved",
            COUNT_DOWN: "count_down",
            SPEED_UP: "speed_up",
            VST_TRANSFER: "vst_transfer",
            CLICKABLE: "clickable",
            UNCLICKABLE: "ubclickable",
            VER: "ver",
            HOR: "hor",
            POSITION: "position",
            HISTORY_ORDER: "history_order",
            COPY_MANAGEMENT: "copy_management",
            COPY_MANAGEMENT_DETAIL: "copy_management_detail",
            CPCT_CREATE: "cpct_create",
            COPY_MANAGEMENT_SETTING: "copy_management_setting",
            TITLE: "title",
            CHART_SHARE: "chart_share",
            HOMEPAGE: "homepage",
            COMMUNITY_NEWS: "community_news",
            ACTIVITY_CENTER: "activity_center",
            WELFARE_CENTER: "welfare_center",
            STRATEGY: "strategy",
            WIKI: "wiki"
        }
    },
    163: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        ));
        n(43),
        n(45),
        n(44),
        n(5),
        n(63),
        n(40),
        n(66),
        n(3),
        n(48);
        var r = function() {
            var e, t, n, r = window.gtag || window.$nuxt && (null === (n = null === (t = null === (e = null === window || void 0 === window ? void 0 : window.$nuxt) || void 0 === e ? void 0 : e.context) || void 0 === t ? void 0 : t.app) || void 0 === n ? void 0 : n.$gtag);
            return "function" == typeof r ? r : function() {
                console.warn("please inject gtag plugins")
            }
        }
          , o = function(e, t, label, n) {
            var o = r();
            e ? o && "function" == typeof o ? o("event", e, {
                event_category: t,
                event_label: label,
                value: n
            }) : console.log("谷歌事件初始化未完成或者初始化失败!") : console.log("发送谷歌事件必须有操作!")
        }
    },
    170: function(e, t, n) {
        "use strict";
        var r = n(272)
          , o = n.n(r);
        t.a = o()()
    },
    173: function(e, t, n) {
        "use strict";
        n.d(t, "d", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return c
        }
        )),
        n.d(t, "b", (function() {
            return l
        }
        )),
        n.d(t, "a", (function() {
            return d
        }
        ));
        n(5),
        n(77),
        n(98),
        n(18);
        var r = n(235)
          , o = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "LOGIN"
              , n = arguments.length > 2 ? arguments[2] : void 0
              , r = arguments.length > 3 ? arguments[3] : void 0
              , o = !1;
            return new Promise((function(c, d) {
                var f = Date.now();
                l(e).then((function(l) {
                    l || n({
                        channel: 2,
                        type: 1,
                        state: 0,
                        cost: Date.now() - f
                    });
                    var h = window.grecaptcha
                      , _ = Date.now();
                    h.enterprise.ready((function() {
                        n({
                            channel: 2,
                            type: 1,
                            step: 1,
                            state: 0,
                            cost: Date.now() - _
                        });
                        var l = Date.now();
                        h.enterprise.execute(e, {
                            action: t
                        }).then((function(e) {
                            o || (o = !0,
                            r({
                                channel: 2,
                                state: 0,
                                cost: Date.now() - l
                            }),
                            c(e))
                        }
                        )).catch((function(e) {
                            o || (o = !0,
                            r({
                                channel: 2,
                                state: 1,
                                cost: Date.now() - l,
                                detail: e && e.toString()
                            }),
                            d(e))
                        }
                        ))
                    }
                    )),
                    setTimeout((function() {
                        o || (console.log("grecaptcha init timeout"),
                        o = !0,
                        n({
                            channel: 2,
                            type: 1,
                            step: 1,
                            state: -1,
                            cost: Date.now() - _
                        }),
                        d())
                    }
                    ), 1e4)
                }
                )).catch((function(e) {
                    o || (o = !0,
                    n({
                        channel: 2,
                        type: 1,
                        state: /timeout/.test(e) ? -1 : 1,
                        cost: Date.now() - f,
                        detail: e && e.toString()
                    }),
                    d(e))
                }
                ))
            }
            ))
        }
          , c = function(e) {
            var t = arguments.length > 2 ? arguments[2] : void 0
              , n = !1;
            return new Promise((function(r, o) {
                var c = Date.now();
                d().then((function(l) {
                    if (l || t({
                        channel: 3,
                        type: 1,
                        state: 0,
                        cost: Date.now() - c
                    }),
                    !window.grecaptcha.enterprise.render || "function" != typeof window.grecaptcha.enterprise.render)
                        return o(new Error("script not ready"));
                    var d = document.createElement("div");
                    d.setAttribute("id", "_grecaptcha_v2"),
                    d.setAttribute("z-index", "10000"),
                    d.setAttribute("style", "position: fixed;top: 50%;left: 50%;transform: translate(-50%, -50%);z-index: 10000;"),
                    d.setAttribute("width", "200px"),
                    d.setAttribute("height", "200px"),
                    document.body.appendChild(d);
                    var f = function(e) {
                        document.body.removeChild(d),
                        r(e)
                    };
                    window.grecaptcha.enterprise.ready((function() {
                        n || (n = !0,
                        window.grecaptcha.enterprise.render("_grecaptcha_v2", {
                            sitekey: e,
                            callback: f
                        }))
                    }
                    )),
                    setTimeout((function() {
                        n || (n = !0,
                        t({
                            channel: 3,
                            type: 1,
                            step: 1,
                            state: -1,
                            cost: Date.now() - c
                        }),
                        o(new Error("timeout")))
                    }
                    ), 1e4)
                }
                )).catch((function(e) {
                    n || (n = !0,
                    t({
                        channel: 3,
                        type: 1,
                        state: /timeout/.test(e) ? -1 : 1,
                        cost: Date.now() - c,
                        detail: e && e.toString()
                    }),
                    o(e))
                }
                ))
            }
            ))
        }
          , l = function(e) {
            return Object(r.a)({
                url: "".concat("http://www.google.com/recaptcha/enterprise.js?render=").concat(e),
                id: "grecaptchav3",
                timeout: 5e3
            })
        }
          , d = function() {
            return Object(r.a)({
                url: "http://www.google.com/recaptcha/enterprise.js?render=explicit",
                id: "grecaptchav2",
                timeout: 5e3
            })
        }
    },
    180: function(e, t, n) {
        "use strict";
        var r = n(163);
        n.d(t, "e", (function() {
            return r.a
        }
        ));
        var o = n(141);
        n.d(t, "c", (function() {
            return o.a
        }
        )),
        n.d(t, "d", (function() {
            return o.b
        }
        ));
        n(215),
        n(331),
        n(173);
        var c = n(120);
        n.d(t, "f", (function() {
            return c.b
        }
        ));
        var l = n(13);
        n.d(t, "a", (function() {
            return l.l
        }
        )),
        n.d(t, "b", (function() {
            return l.m
        }
        ))
    },
    200: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return c
        }
        )),
        n.d(t, "d", (function() {
            return l
        }
        )),
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r = n(13)
          , o = {
            "zh-cn": "zh-cn",
            "zh-hk": "zh-tw",
            "zh-tw": "zh-tw",
            "ko-kr": "ko",
            "vi-vn": "vi",
            "en-us": "en",
            "en-au": "en",
            "en-gb": "en",
            "en-sa": "en",
            "ru-ru": "ru",
            "ja-jp": "ja",
            "es-es": "es",
            "es-co": "es",
            "es-ar": "es",
            "id-id": "id",
            "tr-tr": "tr",
            "nl-nl": "en",
            "pt-br": "pt-pt",
            "fa-ir": "en",
            "de-de": "de",
            "th-th": "th",
            "ar-ar": "ar",
            "fr-fr": "fr",
            "it-it": "it",
            "uk-ua": "en",
            "ku-ku": "en"
        }
          , c = {
            "zh-cn": "zho",
            "zh-hk": "zho-tw",
            "zh-tw": "zho-tw",
            "ko-kr": "kor",
            "vi-vn": "eng",
            "en-us": "eng",
            "en-au": "eng",
            "en-gb": "eng",
            "en-sa": "eng",
            "ru-ru": "rus",
            "ja-jp": "jpn",
            "es-es": "spa",
            "es-co": "spa",
            "es-ar": "spa",
            "id-id": "ind",
            "tr-tr": "eng",
            "nl-nl": "eng",
            "pt-br": "por",
            "fa-ir": "eng",
            "de-de": "deu",
            "th-th": "eng",
            "ar-ar": "ara",
            "fr-fr": "fra",
            "it-it": "eng",
            "uk-ua": "eng",
            "ku-ku": "eng"
        }
          , l = {
            "zh-cn": "抱歉，网络好像有点问题",
            "zh-hk": "抱歉，網絡好像有點問題",
            "zh-tw": "抱歉，網絡好像有點問題",
            "ko-kr": "죄송합니다. 네트워크에 문제가 있는 것 같습니다.",
            "vi-vn": "Xin lỗi, có vẻ như mạng có vấn đề",
            "en-us": "Sorry, it seems there is a problem with the network",
            "en-au": "Sorry, it seems there is a problem with the network",
            "en-gb": "Sorry, it seems there is a problem with the network",
            "en-sa": "Sorry, it seems there is a problem with the network",
            "ru-ru": "Извините, обнаружена проблема с соединением",
            "ja-jp": "ネットワークエラー",
            "es-es": "Lo siento, parece que hay algún problema con la red",
            "es-co": "Lo siento, parece que hay algún problema con la red",
            "es-ar": "Lo siento, parece que hay algún problema con la red",
            "id-id": "Maaf, sepertinya ada yang salah dengan jaringan",
            "tr-tr": "Üzgünüz, ağda bir sorun var gibi görünüyor",
            "nl-nl": "Sorry, er lijkt iets mis te zijn met het netwerk",
            "pt-br": "Desculpe, parece haver um problema com a rede",
            "fa-ir": "با عرض پوزش، به نظر می رسد مشکلی در شبکه وجود دارد",
            "de-de": "Entschuldigung, es scheint ein Problem mit dem Netzwerk zu geben",
            "th-th": "ขออภัย ดูเหมือนว่าเครือข่ายจะมีปัญหา",
            "ar-ar": "عذرا، يبدو أن هناك مشكلة في الشبكة",
            "fr-fr": "Désolé, il semble y avoir un problème avec le réseau",
            "it-it": "Spiacente, sembra esserci un problema con la rete",
            "uk-ua": "Вибачте, з'явилася проблема з мережею",
            "ku-ku": "Sorry, it seems there is a problem with the network"
        }
          , d = {
            "zh-hk": "zh-HK",
            "zh-tw": "zh-HK",
            "zh-cn": "zh-chs",
            "en-us": "en",
            "en-au": "en-AU",
            "en-gb": "en-GB",
            "en-sa": "en-SA",
            "vi-vn": "vi-VN",
            "ko-kr": "ko-KR",
            "ru-ru": "ru-RU",
            "ja-jp": "ja-JP",
            "es-es": "es-ES",
            "es-co": "es-CO",
            "es-ar": "es-AR",
            "id-id": "id-ID",
            "tr-tr": "tr-TR",
            "nl-nl": "nl-NL",
            "pt-br": "pt-BR",
            "fa-ir": "fa-IR",
            "de-de": "de-DE",
            "th-th": "th-TH",
            "ar-ar": "ar-AR",
            "fr-fr": "fr-FR",
            "it-it": "it-IT",
            "uk-ua": "uk-UA",
            "ku-ku": "ku-KU"
        };
        "".concat(r.e, "/zh/"),
        "".concat(r.e, "/zh/"),
        "".concat(r.e, "/zh/"),
        "".concat(r.e, "/ko/"),
        "".concat(r.e, "/vi/"),
        r.e,
        r.e,
        r.e,
        r.e,
        "".concat(r.e, "/ru/"),
        "".concat(r.e, "/ja/"),
        "".concat(r.e, "/es/"),
        "".concat(r.e, "/es/"),
        "".concat(r.e, "/es/"),
        r.e,
        "".concat(r.e, "/tr/"),
        r.e,
        r.e,
        r.e,
        r.e,
        r.e,
        r.e,
        r.e,
        r.e,
        r.e,
        r.e
    },
    215: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return r
        }
        )),
        n.d(t, "b", (function() {
            return o
        }
        ));
        var r = /^([A-Za-z0-9+_\-.\u4E00-\u9FA5])+@([A-Za-z0-9+_\-.])+\.([A-Za-z]{2,20})$/
          , o = /^1[3456789]\d{9}$/
    },
    229: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return o
        }
        )),
        n.d(t, "c", (function() {
            return c
        }
        )),
        n.d(t, "d", (function() {
            return l
        }
        )),
        n.d(t, "b", (function() {
            return d
        }
        ));
        n(80);
        var r = n(141)
          , o = (n(83),
        {
            appId: 30004,
            mainAppId: 10009,
            title: "BingX"
        })
          , c = {
            GOOGLE: "GOOGLE",
            SMS: "SMS",
            EMAIL: "EMAIL"
        }
          , l = {
            LOGIN: "login",
            RESET_PWD: "resetPwd",
            RESET_TRADE_PWD: "resetTradePwd",
            RESET_SECURITY: "resetSecurity",
            WITHDRAW: "withdraw",
            BIND_MOBILE: "bindMobile",
            BIND_EMAIL: "bindEmail",
            API_MODIFY: "apiModify",
            WD_ADDR: "wdAddr",
            C2C_CONFIRM: "C2CConfirm",
            REMOVE_ACCOUNT: "removeAccount"
        }
          , d = (r.c.FUND,
        r.c.STANDARD,
        r.c.PERPETUAL,
        ["100001"].map((function(code) {
            return String(code)
        }
        )))
    },
    235: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        n(219),
        n(5),
        n(54),
        n(246),
        n(247),
        n(248),
        n(249),
        n(250),
        n(251),
        n(252),
        n(253),
        n(254),
        n(255),
        n(256),
        n(257),
        n(258),
        n(50),
        n(40),
        n(98);
        var r = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "resolve"
              , n = arguments.length > 2 ? arguments[2] : void 0;
            var r = window;
            if (r.__bbScriptMap && r.__bbScriptMap.has(e)) {
                var o = r.__bbScriptMap.get(e);
                o && o.length && o.forEach((function(e) {
                    "function" == typeof e[t] && e[t](n)
                }
                )),
                r.__bbScriptMap && r.__bbScriptMap.delete(e)
            }
        }
          , o = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = window;
            n.__bbScriptLoadRecord || (n.__bbScriptLoadRecord = new Map),
            n.__bbScriptLoadRecord.set(e, t)
        }
          , c = function(e) {
            var t = window;
            return !!t.__bbScriptLoadRecord && (t.__bbScriptLoadRecord.has(e) && t.__bbScriptLoadRecord.get(e))
        }
          , l = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "add"
              , n = arguments.length > 2 ? arguments[2] : void 0;
            if ("add" === t) {
                if (!document.getElementById(e) && n) {
                    var head = document.getElementsByTagName("head")[0];
                    head.appendChild(n)
                }
            } else if (document.getElementById(e)) {
                var r = document.getElementsByTagName("head")[0];
                r.removeChild(document.getElementById(e))
            }
        }
          , d = function(param) {
            var e = param.id;
            return document.getElementById(e) ? (console.log("".concat(e, " script existed!")),
            c(e) ? Promise.resolve(0) : new Promise((function(t, n) {
                var r, o, c;
                r = e,
                o = {
                    resolve: t,
                    reject: n
                },
                (c = window).__bbScriptMap || (c.__bbScriptMap = new Map),
                c.__bbScriptMap.has(r) ? c.__bbScriptMap.set(r, c.__bbScriptMap.get(r).push(o)) : c.__bbScriptMap.set(r, [o])
            }
            ))) : new Promise((function(t, n) {
                var script = document.createElement("script");
                script.charset = "UTF-8",
                script.async = !0,
                script.id = e,
                script.onerror = function(t) {
                    l(e, "remove"),
                    o(e, !1),
                    r(e, "reject", t),
                    n(t)
                }
                ,
                script.onload = script.onreadystatechange = function() {
                    c(e) || script.readyState && "loaded" !== script.readyState && "complete" !== script.readyState || (o(e, !0),
                    setTimeout((function() {
                        r(e, "resolve", 1),
                        t(!0)
                    }
                    ), 0))
                }
                ,
                script.src = param.url,
                l(e, "add", script),
                param.timeout && setTimeout((function() {
                    c(e) || (o(e, !1),
                    l(e, "remove"),
                    r(param.id, "reject", new Error("timeout")),
                    n(new Error("timeout")))
                }
                ), param.timeout)
            }
            ))
        }
    },
    245: function(e, t, n) {
        "use strict";
        var r = n(67);
        t.a = r.h
    },
    268: function(e, t, n) {
        (function(t) {
            var n = Object.assign ? Object.assign : function(e, t, n, r) {
                for (var i = 1; i < arguments.length; i++)
                    d(Object(arguments[i]), (function(t, n) {
                        e[n] = t
                    }
                    ));
                return e
            }
              , r = function() {
                if (Object.create)
                    return function(e, t, r, o) {
                        var c = l(arguments, 1);
                        return n.apply(this, [Object.create(e)].concat(c))
                    }
                    ;
                {
                    function e() {}
                    return function(t, r, o, c) {
                        var d = l(arguments, 1);
                        return e.prototype = t,
                        n.apply(this, [new e].concat(d))
                    }
                }
            }()
              , o = String.prototype.trim ? function(e) {
                return String.prototype.trim.call(e)
            }
            : function(e) {
                return e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
              , c = "undefined" != typeof window ? window : t;
            function l(e, t) {
                return Array.prototype.slice.call(e, t || 0)
            }
            function d(e, t) {
                f(e, (function(e, n) {
                    return t(e, n),
                    !1
                }
                ))
            }
            function f(e, t) {
                if (h(e)) {
                    for (var i = 0; i < e.length; i++)
                        if (t(e[i], i))
                            return e[i]
                } else
                    for (var n in e)
                        if (e.hasOwnProperty(n) && t(e[n], n))
                            return e[n]
            }
            function h(e) {
                return null != e && "function" != typeof e && "number" == typeof e.length
            }
            e.exports = {
                assign: n,
                create: r,
                trim: o,
                bind: function(e, t) {
                    return function() {
                        return t.apply(e, Array.prototype.slice.call(arguments, 0))
                    }
                },
                slice: l,
                each: d,
                map: function(e, t) {
                    var n = h(e) ? [] : {};
                    return f(e, (function(e, r) {
                        return n[r] = t(e, r),
                        !1
                    }
                    )),
                    n
                },
                pluck: f,
                isList: h,
                isFunction: function(e) {
                    return e && "[object Function]" === {}.toString.call(e)
                },
                isObject: function(e) {
                    return e && "[object Object]" === {}.toString.call(e)
                },
                Global: c
            }
        }
        ).call(this, n(93))
    },
    281: function(e, t, n) {
        "use strict";
        n(43),
        n(45),
        n(44),
        n(5),
        n(63),
        n(40),
        n(66);
        var r, o = n(3), c = (n(690),
        n(174),
        n(426)), l = n.n(c), d = (n(693),
        n(438)), f = n.n(d), h = (n(746),
        n(461)), _ = n.n(h), m = (n(747),
        n(462)), v = n.n(m), y = (n(695),
        n(439)), E = n.n(y), O = (n(53),
        n(65),
        n(165),
        n(18),
        n(77),
        n(142),
        n(95)), w = n(501), T = n(502), S = n.n(T);
        function C(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function R(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? C(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : C(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var A = ["dev", "beta", "gray"].includes("prod")
          , I = {
            name: "ApiDomainSwitch",
            components: (r = {},
            Object(o.a)(r, E.a.name, E.a),
            Object(o.a)(r, v.a.name, v.a),
            Object(o.a)(r, _.a.name, _.a),
            Object(o.a)(r, f.a.name, f.a),
            Object(o.a)(r, l.a.name, l.a),
            Object(o.a)(r, "BButton", w.a),
            r),
            data: function() {
                return {
                    visible: !1,
                    autoSwitch: !0,
                    currentHeader: "",
                    isBetaOrGray: A,
                    token: ""
                }
            },
            computed: {
                showI18nKey: {
                    get: function() {
                        var e, t;
                        return null === (e = this.$store.state) || void 0 === e || null === (t = e.devConfig) || void 0 === t ? void 0 : t.showI18nKey
                    },
                    set: function(e) {
                        this.updateShowI18nKey(e)
                    }
                },
                testBusinessHosts: function() {
                    return this.$apiRouting.testBusinessHosts && this.$apiRouting.testBusinessHosts.hosts
                },
                betaHeader: {
                    cache: !1,
                    get: function() {
                        return this.currentTestConfig && this.currentTestConfig.header
                    }
                },
                currentTestConfig: {
                    cache: !1,
                    get: function() {
                        return this.$apiRouting.currentTestConfig
                    }
                }
            },
            watch: {
                betaHeader: {
                    immediate: !0,
                    handler: "updateCurrentHeader"
                },
                currentTestConfig: {
                    immediate: !0,
                    handler: "updateCurrentAutoSwitch"
                },
                autoSwitch: function() {
                    var e = this;
                    this.$nextTick((function() {
                        e.$refs.apiDomainSwitch.updatePopper()
                    }
                    ))
                }
            },
            mounted: function() {
                this.copyToken(!0)
            },
            methods: R(R({}, Object(O.c)("devConfig", {
                updateShowI18nKey: "updateShowI18nKey"
            })), {}, {
                onShow: function() {
                    this.updateCurrentHeader(this.betaHeader),
                    this.updateCurrentAutoSwitch(this.currentTestConfig.autoSwitch),
                    this.visible = !0
                },
                onHide: function() {
                    this.visible = !1
                },
                onReset: function() {
                    this.$apiRouting.reset(),
                    this.visible = !1
                },
                updateCurrentHeader: function(e) {
                    this.currentHeader = e
                },
                updateCurrentAutoSwitch: function(e) {
                    "boolean" == typeof e && (this.autoSwitch = e)
                },
                onConfirm: function() {
                    var e = this;
                    this.$apiRouting.updateCurrentTestConfig({
                        header: this.autoSwitch ? "" : this.currentHeader,
                        autoSwitch: this.autoSwitch
                    }),
                    this.$nextTick((function() {
                        e.onHide(),
                        window.location.reload()
                    }
                    ))
                },
                copyToken: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                      , n = this.$refs.copyTokenBtn
                      , r = this.getCookie("user_token");
                    if (r || t) {
                        var o = new S.a(n,{
                            text: function() {
                                return r
                            }
                        });
                        o.on("success", (function() {
                            e.$message.success("复制成功"),
                            o.destroy()
                        }
                        )),
                        o.on("error", (function() {
                            e.$message.error("复制失败"),
                            o.destroy()
                        }
                        ))
                    } else
                        this.$message.error("当前不是登录态，没有token可以复制")
                },
                setToken: function() {
                    this.token ? (this.setCookie("user_token", this.token),
                    this.$message.success("设置成功")) : this.$message.error("请输入token后再设置")
                },
                getCookie: function(e) {
                    var t, n = new RegExp("(^| )" + e + "=([^;]*)(;|$)");
                    return (t = document.cookie.match(n)) ? decodeURIComponent(t[2]) : null
                },
                setCookie: function(e, t) {
                    var n = new Date;
                    n.setTime(n.getTime() + 2592e6),
                    document.cookie = e + "=" + escape(t) + ";expires=" + n.toGMTString() + ";path=/"
                }
            })
        }
          , N = I
          , k = (n(753),
        n(754),
        n(127))
          , component = Object(k.a)(N, (function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "api-domain-switch-wrapper"
            }, [n("el-popover", {
                ref: "apiDomainSwitch",
                attrs: {
                    placement: "top-start",
                    width: "260",
                    value: e.visible,
                    "popper-class": "api-domain-switch",
                    trigger: "click"
                },
                on: {
                    show: e.onShow,
                    hide: e.onHide
                }
            }, [n("div", {
                staticClass: "content"
            }, [n("div", {
                staticClass: "inline"
            }, [n("el-switch", {
                attrs: {
                    "active-text": "显示翻译key",
                    "inactive-text": "显示翻译"
                },
                model: {
                    value: e.showI18nKey,
                    callback: function(t) {
                        e.showI18nKey = t
                    },
                    expression: "showI18nKey"
                }
            })], 1), e._v(" "), e.isBetaOrGray ? [n("div", {
                staticClass: "line"
            }, [n("el-switch", {
                attrs: {
                    "active-text": "自动切换",
                    "inactive-text": "手动选择"
                },
                model: {
                    value: e.autoSwitch,
                    callback: function(t) {
                        e.autoSwitch = t
                    },
                    expression: "autoSwitch"
                }
            })], 1), e._v(" "), e.autoSwitch ? e._e() : n("div", {
                staticClass: "line"
            }, [n("el-radio-group", {
                model: {
                    value: e.currentHeader,
                    callback: function(t) {
                        e.currentHeader = t
                    },
                    expression: "currentHeader"
                }
            }, e._l(e.testBusinessHosts, (function(t, r) {
                return n("el-radio", {
                    key: r,
                    staticClass: "radio-item",
                    attrs: {
                        label: t.header
                    }
                }, [e._v("\n              " + e._s(t.name) + " - " + e._s(t.header) + "\n            ")])
            }
            )), 1)], 1), e._v(" "), n("div", {
                staticClass: "line operation"
            }, [n("b-button", {
                staticClass: "op-btn",
                attrs: {
                    size: "small",
                    type: "primary"
                },
                on: {
                    click: e.onConfirm
                }
            }, [e._v("\n            确认\n          ")]), e._v(" "), n("b-button", {
                staticClass: "op-btn",
                attrs: {
                    size: "small"
                },
                on: {
                    click: e.onReset
                }
            }, [e._v("\n            重置\n          ")]), e._v(" "), n("b-button", {
                staticClass: "op-btn",
                attrs: {
                    size: "small"
                },
                on: {
                    click: e.onHide
                }
            }, [e._v("\n            取消\n          ")])], 1)] : e._e(), e._v(" "), n("div", {
                staticClass: "line operation"
            }, [n("button", {
                ref: "copyTokenBtn",
                staticClass: "copy-btn",
                attrs: {
                    type: "button"
                },
                on: {
                    click: e.copyToken
                }
            }, [e._v("\n          复制token\n        ")]), e._v(" "), n("button", {
                staticClass: "copy-btn",
                attrs: {
                    size: "small",
                    type: "primary"
                },
                on: {
                    click: e.setToken
                }
            }, [e._v("\n        设置token\n        ")]), e._v(" "), n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.token,
                    expression: "token"
                }],
                staticClass: "token-input",
                attrs: {
                    type: "text",
                    placeholder: "token"
                },
                domProps: {
                    value: e.token
                },
                on: {
                    input: function(t) {
                        t.target.composing || (e.token = t.target.value)
                    }
                }
            })])], 2), e._v(" "), n("el-button", {
                attrs: {
                    slot: "reference",
                    size: "large",
                    type: "primary",
                    icon: "el-icon-s-promotion",
                    circle: ""
                },
                slot: "reference"
            })], 1)], 1)
        }
        ), [], !1, null, "b37d56f6", null);
        t.a = component.exports
    },
    285: function(e, t, n) {
        "use strict";
        var r = {
            name: "NoSsr",
            functional: !0,
            props: {
                placeholder: String,
                placeholderTag: {
                    type: String,
                    default: "div"
                }
            },
            render: function(e, t) {
                var n = t.parent
                  , r = t.slots
                  , o = t.props
                  , c = r()
                  , l = c.default;
                void 0 === l && (l = []);
                var d = c.placeholder;
                return n._isMounted ? l : (n.$once("hook:mounted", (function() {
                    n.$forceUpdate()
                }
                )),
                o.placeholderTag && (o.placeholder || d) ? e(o.placeholderTag, {
                    class: ["no-ssr-placeholder"]
                }, o.placeholder || d) : l.length > 0 ? l.map((function() {
                    return e(!1)
                }
                )) : e(!1))
            }
        };
        e.exports = r
    },
    318: function(e, t, n) {
        "use strict";
        (function(e) {
            n.d(t, "b", (function() {
                return P
            }
            ));
            n(45),
            n(44),
            n(63),
            n(66);
            var r, o, c = n(6), l = n(71), d = n(12), f = n(3), h = (n(103),
            n(53),
            n(152),
            n(48),
            n(99),
            n(43),
            n(5),
            n(54),
            n(50),
            n(351),
            n(266),
            n(18),
            n(65),
            n(332),
            n(98),
            n(40),
            n(165),
            n(77),
            n(76),
            n(67)), _ = n(83), m = n(683), v = n(633), y = n(13), E = n(229), O = n(78), w = n(634), T = n(110), S = n(245);
            function C(object, e) {
                var t = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(object);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(object, e).enumerable
                    }
                    ))),
                    t.push.apply(t, n)
                }
                return t
            }
            function R(e) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = null != arguments[i] ? arguments[i] : {};
                    i % 2 ? C(Object(source), !0).forEach((function(t) {
                        Object(f.a)(e, t, source[t])
                    }
                    )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : C(Object(source)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                    }
                    ))
                }
                return e
            }
            var A, I = new v.a, N = ["dev", "beta"].includes("prod"), k = ["dev", "beta", "gray"].includes("prod"), L = function(e, t) {
                if (e.url.includes("/v1/users/check/payPwd") && 0 !== t.data.code && (t.data.msg = Object(O.g)(t, "data.data.hints", t.data.msg)),
                e.url.includes("/v1/wallets/withdraw") && 0 !== t.data.code) {
                    var title = Object(O.g)(t, "data.data.title", "");
                    title = title.length > 0 ? title + "," : "",
                    t.data.msg = title + Object(O.g)(t, "data.data.reason", t.data.msg)
                }
                e.url.includes("/v1/task/receive") && 0 !== t.data.code && t.data.data && (t.data.msg = t.data.data)
            }, P = function(data, e, t, n, r) {
                var o = n.$appInfo
                  , c = n.$cookies
                  , l = n.$appConfig
                  , d = n.i18n
                  , f = n.$apiRouting
                  , m = n.$ua
                  , v = R({}, data);
                m && (v.device_brand = "".concat(m.os(), "_").concat(m.browser(), "_").concat(m.browserVersion()));
                var E = c.get(y.l)
                  , w = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                      , n = "".concat(c.get(e));
                    return "undefined" === n ? t : n
                }("app_device_id", "") || l.uuid;
                return E && void 0 !== e && (v.Authorization = "Bearer ".concat(E)),
                v.device_id = w,
                v.platformId = l.platformId,
                data.isPopularize ? (v.originType = data.originType,
                v.channel = data.channel,
                v.reg_channel = data.channel,
                delete v.isPopularize) : (delete v.originType,
                v.channel = o.channel || sessionStorage.getItem("ch") || "official",
                v.reg_channel = o.channel || sessionStorage.getItem("ch") || "official"),
                v.channel || (v.channel = "official",
                v.reg_channel = "official"),
                sessionStorage.getItem("channel") && "tv" === sessionStorage.getItem("channel") && (v.platformId = 50),
                v.app_version = l.version,
                v.lang = _.h[d.locale],
                v.appId = o.appId,
                v.mainAppId = o.mainAppId,
                v.timestamp = t,
                v.timeZone = Object(h.p)(),
                v.traceId && delete v.traceId,
                v.traceId = Object(O.f)(),
                (null == f ? void 0 : f.betaHeader) && k && (v["x-router-tag"] = f.betaHeader),
                delete v["x-router-tag"],
                v
            };
            !function(e) {
                e.CF = "CF",
                e.AWS = "AWS",
                e.WS = "WS"
            }(A || (A = {}));
            var D = (r = {},
            Object(f.a)(r, A.CF, "cloudflare"),
            Object(f.a)(r, A.AWS, "cloudfront"),
            Object(f.a)(r, A.WS, "wangsu"),
            r)
              , x = (o = {},
            Object(f.a)(o, A.CF, "cf-ray"),
            Object(f.a)(o, A.AWS, "x-amz-cf-id"),
            Object(f.a)(o, A.WS, "x-ws-request-id"),
            o)
              , j = function(e) {
                var t = performance.getEntriesByName(e)
                  , n = t[t.length - 1];
                if (n) {
                    var r = n.domainLookupStart
                      , o = n.domainLookupEnd
                      , c = n.secureConnectionStart
                      , l = n.connectStart
                      , d = n.connectEnd
                      , f = n.fetchStart
                      , _ = n.requestStart
                      , m = n.responseStart
                      , v = n.responseEnd
                      , y = n.duration
                      , E = Object(h.A)(_, f)
                      , O = Object(h.A)(v, f)
                      , w = Object(h.A)(o, r, {
                        precision: 8
                    })
                      , T = Object(h.A)(d, l, {
                        precision: 8
                    })
                      , S = Object(h.A)(d, c, {
                        precision: 8
                    })
                      , C = Object(h.A)(v, m);
                    return {
                        cost: Math.max(y, 0),
                        apiCost: Math.max(O, 0),
                        wait: Math.max(E, 0),
                        dns: Math.max(w, 0),
                        connect: Math.max(T, 0),
                        ssl: Math.max(S, 0),
                        download: C >= y ? 0 : Math.max(C, 0)
                    }
                }
                return null
            }
              , M = function(e) {
                var t = {
                    cdnChannel: "",
                    cdnTraceId: ""
                };
                if (e)
                    for (var n = Object.keys(x), i = 0, r = n.length; i < r; i++) {
                        var o = n[i];
                        if (e[x[o]]) {
                            t.cdnChannel = D[o],
                            t.cdnTraceId = e[x[o]];
                            break
                        }
                    }
                return t
            }
              , H = function(e) {
                var t, n = e.apiUrl, r = e.res, o = e.resolveSource, c = e.commonErrorMsg, code = null === (t = r.data) || void 0 === t ? void 0 : t.code;
                if (100205 === code && ["/v3/code/send/newVersion", "/main/v3/code/mobile/send", "/main/v3/code/mobile/send/register", "/main/v3/code/email/send", "/main/v3/code/email/send/register"].includes(n))
                    return Promise.reject(r.data);
                if (202002 === code && "/v3/users/register" === n)
                    return Promise.reject(r.data);
                if ("/v2/wallets/withdraw/newVersion" === n && [101201, 100207, 101501, 1].includes(code))
                    return Promise.reject("".concat(r.data.data.title, ": ").concat(r.data.data.reason));
                if ("/v3/users/login" === n && 102402 === code)
                    return Promise.resolve(r.data);
                var data = r.data || {}
                  , l = (o ? data : data.msg) || c;
                return "number" != typeof code && "string" != typeof code || "string" != typeof l || !E.b.includes(String(code)) ? Promise.reject(l) : Promise.reject(Object(O.b)(String(code)) + l)
            }
              , U = function(data) {
                return data
            };
            t.a = function(t, n) {
                var r = t.app
                  , o = t.$axios
                  , f = t.redirect
                  , v = (t.req,
                r.$cookies)
                  , E = r.router
                  , C = r.$apiLog
                  , A = r.$appConfig
                  , D = r.$apiRouting
                  , x = r.$eventEmitter
                  , B = A.api
                  , G = o.create({
                    timeout: B.timeout,
                    withCredentials: !0,
                    headers: {
                        "Content-Type": "application/json"
                    },
                    transformResponse: w.a
                })
                  , W = !0;
                E && E.beforeEach((function(e, t, n) {
                    I.clearAll(),
                    n()
                }
                ));
                n("request", (function n(o) {
                    var w = R({}, o)
                      , F = R({}, o)
                      , V = v.get("locale") || "en-us";
                    F.timeoutErrorMessage = Object(O.j)(V);
                    var map = F.url
                      , Y = F.method
                      , K = F.url
                      , z = Object(h.s)(F.url);
                    F.url = function(t, n, r, o, c) {
                        var l = o.api
                          , d = 80 === Number(l.port) ? "" : ":" + l.port;
                        if (("/login" === t || "/oauth/login" === t) && "POST" === n)
                            return l.authHost + t;
                        if ("/health" === t)
                            return "".concat(c.apiBase).concat(d).concat(t);
                        if (Object(h.s)(t))
                            return c.swapApiBase + d + l.basePath + t;
                        var f = N ? "http://".concat(l.host) : r ? c.getDiffApi("businessHosts", c.apiBase) : c.apiBase;
                        return t.includes("//") ? t.replaceAll("//","") : "".concat(f).concat(l.basePath).concat(t)
                    }(F.url, Y, F.isRetry, A, D);
                    var $ = (new Date).getTime()
                      , J = {};
                    w.data && w.data.isPopularize && (J.isPopularize = w.data.isPopularize,
                    J.channel = w.data.ch || "",
                    J.reg_channel = w.data.ch || ""),
                    J.originType = w.data && w.data.originType || "",
                    w.data && (delete w.data.originType,
                    delete w.data.ch,
                    delete w.data.isPopularize),
                    F.headers = P(R(R({}, F.headers), J), K, $, r, t),
                    F.data = Object(O.a)(F.data || {});
                    var data = F.data;
                    F.method && "POST" !== F.method.toUpperCase() && (F.params = Object(O.a)(F.params || {}),
                    data = F.params || {});
                    var X = Object(h.c)({
                        timestamp: $,
                        traceId: F.headers.traceId,
                        deviceId: F.headers.device_id,
                        platformId: F.headers.platformId,
                        appVersion: F.headers.app_version,
                        requestPayload: R({}, data)
                    })
                      , Q = X.sign
                      , Z = X.encryptionContent;
                    F.headers.sign = Q;
                    var ee = v.get("visitorPId")
                      , te = ee ? encodeURIComponent(ee) : "-1";
                    te && (F.headers.visitorId = te),
                    "GET" !== Y && "get" !== Y || delete F.data;
                    var ne = {
                        bizType: z ? "swapBusinessHosts" : "businessHosts",
                        invokeHost: z ? D.swapApiBase : D.apiBase
                    }
                      , re = Date.now();
                    return I.checkApi(F) ? (v.get("bingx.ws.log") && console.log(F, "重复请求=======>>>"),
                    I.addApi(F)) : G.request(F).then((function(e) {
                        var n = function(n) {
                            var o, c, h, _ = arguments.length > 1 && void 0 !== arguments[1] && arguments[1], w = I.generateReqKey(n), N = I.checkapiIsWhiteList(w), k = N ? Object(m.a)(e) : e, P = U;
                            n.render && (P = n.render),
                            delete n.render;
                            var G = e.request && e.request.responseURL
                              , F = M(R({}, k.headers));
                            L(n, k);
                            var code = null === (o = k.data) || void 0 === o ? void 0 : o.code
                              , V = {
                                cost: 0,
                                wait: 0,
                                dns: 0,
                                connect: 0,
                                ssl: 0,
                                download: 0
                            }
                              , z = Date.now() - re;
                            G && "undefined" != typeof performance && "function" == typeof performance.getEntriesByName && (V = j(G));
                            var $ = (null == V ? void 0 : V.cost) || z
                              , J = function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                                  , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                                "/v1/contract/spread" !== map && C(R(R({
                                    invokeServer: ee,
                                    time: re,
                                    api: "/api".concat(map),
                                    result: e,
                                    status: code
                                }, V || {}), {}, {
                                    cost: $,
                                    detail: _ ? "".concat(t, ";duplicated") : t,
                                    netResult: 0,
                                    traceId: n.headers.traceId,
                                    scheme: "http"
                                }, F))
                            };
                            D.analyzeResponse(ne.bizType, !0, $, k.status);
                            var X = new URL(k.config.url)
                              , ee = X.host;
                            if (0 === code) {
                                J();
                                var te = P(k.data.data);
                                return "/health" === K ? Promise.resolve(Object.assign({}, k.data, {
                                    cost: $
                                })) : Promise.resolve(n.resolveSource ? k.data : te)
                            }
                            var oe = "100001" === code || 100001 === code
                              , ie = v.get(y.l)
                              , ae = /5\d{2}$/.test(code) ? 1 : 0;
                            if ("/v1/contract/spread" !== map) {
                                var se = null === (c = k.data) || void 0 === c ? void 0 : c.msg;
                                "object" === Object(d.a)(n.data) && "{}" !== JSON.stringify(n.data) && (se += "; ".concat(JSON.stringify(n.data), "; ").concat(Z, "; ").concat(Q, ";")),
                                oe && (se += ie),
                                J(ae, se)
                            }
                            B.apiLog && console.error(Y, map, k.data.msg);
                            var ce = window.location.href
                              , ue = "/login/"
                              , le = A.domains.main
                              , pe = r.localePath({
                                path: ue,
                                query: {
                                    redirect: ce
                                }
                            })
                              , de = "".concat(le).concat(pe);
                            if (oe) {
                                v.remove(y.l, A.cookiesOptions),
                                v.remove(y.l),
                                x ? x.emit(T.a, {
                                    isLogin: !1,
                                    redirect: f,
                                    loginPageJumpUrl: de
                                }) : S.a.emit(T.a, {
                                    isLogin: !1,
                                    redirect: f,
                                    loginPageJumpUrl: de
                                });
                                var fe = E.history.current && E.history.current.path;
                                if (!/login/.test(fe)) {
                                    try {
                                        var he = (null === (h = null == t ? void 0 : t.route) || void 0 === h ? void 0 : h.name) || ""
                                          , _e = Object(l.a)(y.n)
                                          , ge = _e.some((function(e) {
                                            return he.startsWith(e)
                                        }
                                        ));
                                        ge || f(de)
                                    } catch (e) {
                                        console.log(e && e.message)
                                    }
                                    if (W) {
                                        W = !1,
                                        setTimeout((function() {
                                            return W = !0
                                        }
                                        ), 3e3);
                                        var me = k.data.msg;
                                        me && me.includes("????") && Object(O.p)(me)
                                    }
                                }
                            }
                            return H({
                                apiUrl: map,
                                res: R({}, k),
                                resolveSource: n.resolveSource,
                                commonErrorMsg: n.timeoutErrorMessage
                            })
                        }
                          , o = n(F, !1);
                        return (I.getCbList(F) || []).forEach((function(e) {
                            if (e.cb && "function" == typeof e.cb) {
                                var t = n(e.config, !0);
                                e.cb(t, !0)
                            }
                        }
                        )),
                        I.clearMap(F),
                        o
                    }
                    )).catch((function(e) {
                        var t = function() {
                            var t = Object(c.a)(regeneratorRuntime.mark((function t() {
                                var o, c, l, f, h, m, v, y, E, O, T, S, A, I, N, L, P, x = arguments;
                                return regeneratorRuntime.wrap((function(t) {
                                    for (; ; )
                                        switch (t.prev = t.next) {
                                        case 0:
                                            o = x.length > 0 && void 0 !== x[0] && x[0],
                                            console.log("on catch", F.url),
                                            E = M((null === (c = e.response) || void 0 === c ? void 0 : c.headers) || null),
                                            O = Date.now() - re,
                                            T = new RegExp("network error","i"),
                                            S = !1;
                                            try {
                                                A = "object" === Object(d.a)(e) ? JSON.stringify(e) : e.toString && e.toString(),
                                                S = T.test(A)
                                            } catch (e) {
                                                S = !0
                                            }
                                            if (I = 1,
                                            N = S ? "NETWORK_ERROR" : 1,
                                            "/v1/contract/spread" === map || "object" !== Object(d.a)(e)) {
                                                t.next = 32;
                                                break
                                            }
                                            if ("ECONNABORTED" === e.code ? (e.status = "timeout",
                                            I = 1,
                                            N = "timeout") : e.response && (N = e.response.status),
                                            L = e && e.message || "",
                                            "object" === Object(d.a)(F.data) && "{}" !== JSON.stringify(F.data) && (L += "; ".concat(JSON.stringify(F.data), "; ").concat(Z, "; ").concat(Q, ";")),
                                            C(R({
                                                invokeServer: ne.invokeHost.replace(/http(s):\/\//, ""),
                                                time: re,
                                                cost: O,
                                                api: "/api".concat(map),
                                                result: 1,
                                                detail: o ? "".concat(L, ";duplicated") : L,
                                                status: N,
                                                netResult: I,
                                                traceId: F.headers.traceId,
                                                scheme: "http"
                                            }, E)),
                                            D.analyzeResponse(ne.bizType, !1, O, e.response && e.response.status || 500),
                                            t.prev = 15,
                                            !(null === (l = e.response) || void 0 === l ? void 0 : l.status) || !_.m[null === (f = e.response) || void 0 === f ? void 0 : f.status]) {
                                                t.next = 19;
                                                break
                                            }
                                            return P = _.m[null === (h = e.response) || void 0 === h ? void 0 : h.status][r.i18n.locale || "en-us"] || _.m[null === (m = e.response) || void 0 === m ? void 0 : m.status]["en-us"],
                                            t.abrupt("return", Promise.reject(P));
                                        case 19:
                                            if (!((null === (v = e.response) || void 0 === v ? void 0 : v.status) > 500 && (null === (y = e.response) || void 0 === y ? void 0 : y.status) < 600)) {
                                                t.next = 21;
                                                break
                                            }
                                            return t.abrupt("return", Promise.reject(F.timeoutErrorMessage));
                                        case 21:
                                            t.next = 26;
                                            break;
                                        case 23:
                                            t.prev = 23,
                                            t.t0 = t.catch(15),
                                            console.error("请求失败", t.t0);
                                        case 26:
                                            if (!(w.retryTimes && w.retryTimes > 0)) {
                                                t.next = 32;
                                                break
                                            }
                                            return w.retryTimes -= 1,
                                            w.isRetry = !0,
                                            t.next = 31,
                                            n(w);
                                        case 31:
                                            return t.abrupt("return", t.sent);
                                        case 32:
                                            if (k && console.error("请求失败", Y + " " + map, e),
                                            k || console.warn("请求失败", Y + " " + map, e),
                                            !F.resolveSource) {
                                                t.next = 36;
                                                break
                                            }
                                            return t.abrupt("return", Promise.reject(e));
                                        case 36:
                                            return t.abrupt("return", Promise.reject(S ? F.timeoutErrorMessage : "string" == typeof e ? e : (null == e ? void 0 : e.message) || (null == e ? void 0 : e.msg) || ""));
                                        case 37:
                                        case "end":
                                            return t.stop()
                                        }
                                }
                                ), t, null, [[15, 23]])
                            }
                            )));
                            return function() {
                                return t.apply(this, arguments)
                            }
                        }()
                          , o = t();
                        return (I.getCbList(F) || []).forEach((function(t) {
                            t.cb && "function" == typeof t.cb && t.cb(e, !1)
                        }
                        )),
                        I.clearMap(F),
                        o
                    }
                    ))
                }
                ))
            }
        }
        ).call(this, n(265))
    },
    32: function(e, t, n) {
        (function(t) {
            var n;
            n = function() {
                "use strict";
                var e = function(e) {
                    var t = e.id
                      , n = e.viewBox
                      , content = e.content;
                    this.id = t,
                    this.viewBox = n,
                    this.content = content
                };
                function n(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports),
                    t.exports
                }
                e.prototype.stringify = function() {
                    return this.content
                }
                ,
                e.prototype.toString = function() {
                    return this.stringify()
                }
                ,
                e.prototype.destroy = function() {
                    var e = this;
                    ["id", "viewBox", "content"].forEach((function(t) {
                        return delete e[t]
                    }
                    ))
                }
                ,
                "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
                var r = n((function(e, t) {
                    e.exports = function() {
                        function e(e) {
                            return e && "object" == typeof e && "[object RegExp]" !== Object.prototype.toString.call(e) && "[object Date]" !== Object.prototype.toString.call(e)
                        }
                        function t(e) {
                            return Array.isArray(e) ? [] : {}
                        }
                        function n(n, r) {
                            return r && !0 === r.clone && e(n) ? c(t(n), n, r) : n
                        }
                        function r(t, source, r) {
                            var o = t.slice();
                            return source.forEach((function(l, i) {
                                void 0 === o[i] ? o[i] = n(l, r) : e(l) ? o[i] = c(t[i], l, r) : -1 === t.indexOf(l) && o.push(n(l, r))
                            }
                            )),
                            o
                        }
                        function o(t, source, r) {
                            var o = {};
                            return e(t) && Object.keys(t).forEach((function(e) {
                                o[e] = n(t[e], r)
                            }
                            )),
                            Object.keys(source).forEach((function(l) {
                                e(source[l]) && t[l] ? o[l] = c(t[l], source[l], r) : o[l] = n(source[l], r)
                            }
                            )),
                            o
                        }
                        function c(e, source, t) {
                            var c = Array.isArray(source)
                              , l = (t || {
                                arrayMerge: r
                            }).arrayMerge || r;
                            return c ? Array.isArray(e) ? l(e, source, t) : n(source, t) : o(e, source, t)
                        }
                        return c.all = function(e, t) {
                            if (!Array.isArray(e) || e.length < 2)
                                throw new Error("first argument should be an array with at least two elements");
                            return e.reduce((function(e, n) {
                                return c(e, n, t)
                            }
                            ))
                        }
                        ,
                        c
                    }()
                }
                ))
                  , o = n((function(e, t) {
                    t.default = {
                        svg: {
                            name: "xmlns",
                            uri: "http://www.w3.org/2000/svg"
                        },
                        xlink: {
                            name: "xmlns:xlink",
                            uri: "http://www.w3.org/1999/xlink"
                        }
                    },
                    e.exports = t.default
                }
                ))
                  , svg = o.svg
                  , c = o.xlink
                  , l = {};
                l[svg.name] = svg.uri,
                l[c.name] = c.uri;
                var d = function(content, e) {
                    void 0 === content && (content = "");
                    var t = function(e) {
                        return Object.keys(e).map((function(t) {
                            return t + '="' + e[t].toString().replace(/"/g, "&quot;") + '"'
                        }
                        )).join(" ")
                    }(r(l, e || {}));
                    return "<svg " + t + ">" + content + "</svg>"
                }
                  , f = function(e) {
                    function t() {
                        e.apply(this, arguments)
                    }
                    e && (t.__proto__ = e),
                    t.prototype = Object.create(e && e.prototype),
                    t.prototype.constructor = t;
                    var n = {
                        isMounted: {}
                    };
                    return n.isMounted.get = function() {
                        return !!this.node
                    }
                    ,
                    t.createFromExistingNode = function(e) {
                        return new t({
                            id: e.getAttribute("id"),
                            viewBox: e.getAttribute("viewBox"),
                            content: e.outerHTML
                        })
                    }
                    ,
                    t.prototype.destroy = function() {
                        this.isMounted && this.unmount(),
                        e.prototype.destroy.call(this)
                    }
                    ,
                    t.prototype.mount = function(e) {
                        if (this.isMounted)
                            return this.node;
                        var t = "string" == typeof e ? document.querySelector(e) : e
                          , n = this.render();
                        return this.node = n,
                        t.appendChild(n),
                        n
                    }
                    ,
                    t.prototype.render = function() {
                        var content = this.stringify();
                        return function(content) {
                            var e = !!document.importNode
                              , t = (new DOMParser).parseFromString(content, "image/svg+xml").documentElement;
                            return e ? document.importNode(t, !0) : t
                        }(d(content)).childNodes[0]
                    }
                    ,
                    t.prototype.unmount = function() {
                        this.node.parentNode.removeChild(this.node)
                    }
                    ,
                    Object.defineProperties(t.prototype, n),
                    t
                }(e);
                return f
            }
            ,
            e.exports = n()
        }
        ).call(this, n(93))
    },
    33: function(e, t, n) {
        (function(t) {
            var n;
            n = function() {
                "use strict";
                function e(e, t) {
                    return e(t = {
                        exports: {}
                    }, t.exports),
                    t.exports
                }
                "undefined" != typeof window ? window : void 0 !== t || "undefined" != typeof self && self;
                var n = e((function(e, t) {
                    e.exports = function() {
                        function e(e) {
                            return e && "object" == typeof e && "[object RegExp]" !== Object.prototype.toString.call(e) && "[object Date]" !== Object.prototype.toString.call(e)
                        }
                        function t(e) {
                            return Array.isArray(e) ? [] : {}
                        }
                        function n(n, r) {
                            return r && !0 === r.clone && e(n) ? c(t(n), n, r) : n
                        }
                        function r(t, source, r) {
                            var o = t.slice();
                            return source.forEach((function(l, i) {
                                void 0 === o[i] ? o[i] = n(l, r) : e(l) ? o[i] = c(t[i], l, r) : -1 === t.indexOf(l) && o.push(n(l, r))
                            }
                            )),
                            o
                        }
                        function o(t, source, r) {
                            var o = {};
                            return e(t) && Object.keys(t).forEach((function(e) {
                                o[e] = n(t[e], r)
                            }
                            )),
                            Object.keys(source).forEach((function(l) {
                                e(source[l]) && t[l] ? o[l] = c(t[l], source[l], r) : o[l] = n(source[l], r)
                            }
                            )),
                            o
                        }
                        function c(e, source, t) {
                            var c = Array.isArray(source)
                              , l = (t || {
                                arrayMerge: r
                            }).arrayMerge || r;
                            return c ? Array.isArray(e) ? l(e, source, t) : n(source, t) : o(e, source, t)
                        }
                        return c.all = function(e, t) {
                            if (!Array.isArray(e) || e.length < 2)
                                throw new Error("first argument should be an array with at least two elements");
                            return e.reduce((function(e, n) {
                                return c(e, n, t)
                            }
                            ))
                        }
                        ,
                        c
                    }()
                }
                ))
                  , r = e((function(e, t) {
                    t.default = {
                        svg: {
                            name: "xmlns",
                            uri: "http://www.w3.org/2000/svg"
                        },
                        xlink: {
                            name: "xmlns:xlink",
                            uri: "http://www.w3.org/1999/xlink"
                        }
                    },
                    e.exports = t.default
                }
                ))
                  , svg = r.svg
                  , o = r.xlink
                  , c = {};
                c[svg.name] = svg.uri,
                c[o.name] = o.uri;
                var l, d = function(content, e) {
                    void 0 === content && (content = "");
                    var t = function(e) {
                        return Object.keys(e).map((function(t) {
                            return t + '="' + e[t].toString().replace(/"/g, "&quot;") + '"'
                        }
                        )).join(" ")
                    }(n(c, e || {}));
                    return "<svg " + t + ">" + content + "</svg>"
                }, f = r.svg, h = r.xlink, _ = {
                    attrs: (l = {
                        style: ["position: absolute", "width: 0", "height: 0"].join("; "),
                        "aria-hidden": "true"
                    },
                    l[f.name] = f.uri,
                    l[h.name] = h.uri,
                    l)
                }, m = function(e) {
                    this.config = n(_, e || {}),
                    this.symbols = []
                };
                m.prototype.add = function(symbol) {
                    var e = this.symbols
                      , t = this.find(symbol.id);
                    return t ? (e[e.indexOf(t)] = symbol,
                    !1) : (e.push(symbol),
                    !0)
                }
                ,
                m.prototype.remove = function(e) {
                    var t = this.symbols
                      , symbol = this.find(e);
                    return !!symbol && (t.splice(t.indexOf(symbol), 1),
                    symbol.destroy(),
                    !0)
                }
                ,
                m.prototype.find = function(e) {
                    return this.symbols.filter((function(s) {
                        return s.id === e
                    }
                    ))[0] || null
                }
                ,
                m.prototype.has = function(e) {
                    return null !== this.find(e)
                }
                ,
                m.prototype.stringify = function() {
                    var e = this.config.attrs
                      , t = this.symbols.map((function(s) {
                        return s.stringify()
                    }
                    )).join("");
                    return d(t, e)
                }
                ,
                m.prototype.toString = function() {
                    return this.stringify()
                }
                ,
                m.prototype.destroy = function() {
                    this.symbols.forEach((function(s) {
                        return s.destroy()
                    }
                    ))
                }
                ;
                var v = function(e) {
                    var t = e.id
                      , n = e.viewBox
                      , content = e.content;
                    this.id = t,
                    this.viewBox = n,
                    this.content = content
                };
                v.prototype.stringify = function() {
                    return this.content
                }
                ,
                v.prototype.toString = function() {
                    return this.stringify()
                }
                ,
                v.prototype.destroy = function() {
                    var e = this;
                    ["id", "viewBox", "content"].forEach((function(t) {
                        return delete e[t]
                    }
                    ))
                }
                ;
                var y = function(content) {
                    var e = !!document.importNode
                      , t = (new DOMParser).parseFromString(content, "image/svg+xml").documentElement;
                    return e ? document.importNode(t, !0) : t
                }
                  , E = function(e) {
                    function t() {
                        e.apply(this, arguments)
                    }
                    e && (t.__proto__ = e),
                    t.prototype = Object.create(e && e.prototype),
                    t.prototype.constructor = t;
                    var n = {
                        isMounted: {}
                    };
                    return n.isMounted.get = function() {
                        return !!this.node
                    }
                    ,
                    t.createFromExistingNode = function(e) {
                        return new t({
                            id: e.getAttribute("id"),
                            viewBox: e.getAttribute("viewBox"),
                            content: e.outerHTML
                        })
                    }
                    ,
                    t.prototype.destroy = function() {
                        this.isMounted && this.unmount(),
                        e.prototype.destroy.call(this)
                    }
                    ,
                    t.prototype.mount = function(e) {
                        if (this.isMounted)
                            return this.node;
                        var t = "string" == typeof e ? document.querySelector(e) : e
                          , n = this.render();
                        return this.node = n,
                        t.appendChild(n),
                        n
                    }
                    ,
                    t.prototype.render = function() {
                        var content = this.stringify();
                        return y(d(content)).childNodes[0]
                    }
                    ,
                    t.prototype.unmount = function() {
                        this.node.parentNode.removeChild(this.node)
                    }
                    ,
                    Object.defineProperties(t.prototype, n),
                    t
                }(v)
                  , O = {
                    autoConfigure: !0,
                    mountTo: "body",
                    syncUrlsWithBaseTag: !1,
                    listenLocationChangeEvent: !0,
                    locationChangeEvent: "locationChange",
                    locationChangeAngularEmitter: !1,
                    usagesToUpdate: "use[*|href]",
                    moveGradientsOutsideSymbol: !1
                }
                  , w = function(e) {
                    return Array.prototype.slice.call(e, 0)
                }
                  , T = function() {
                    return /firefox/i.test(navigator.userAgent)
                }
                  , S = function() {
                    return /msie/i.test(navigator.userAgent) || /trident/i.test(navigator.userAgent)
                }
                  , C = function() {
                    return /edge/i.test(navigator.userAgent)
                }
                  , R = function(e) {
                    return (e || window.location.href).split("#")[0]
                }
                  , A = function(e) {
                    angular.module("ng").run(["$rootScope", function(t) {
                        t.$on("$locationChangeSuccess", (function(t, n, r) {
                            var o, data, c;
                            o = e,
                            data = {
                                oldUrl: r,
                                newUrl: n
                            },
                            (c = document.createEvent("CustomEvent")).initCustomEvent(o, !1, !1, data),
                            window.dispatchEvent(c)
                        }
                        ))
                    }
                    ])
                }
                  , I = function(svg, e) {
                    return void 0 === e && (e = "linearGradient, radialGradient, pattern, mask, clipPath"),
                    w(svg.querySelectorAll("symbol")).forEach((function(symbol) {
                        w(symbol.querySelectorAll(e)).forEach((function(e) {
                            symbol.parentNode.insertBefore(e, symbol)
                        }
                        ))
                    }
                    )),
                    svg
                }
                  , N = r.xlink.uri
                  , k = "xlink:href"
                  , L = /[{}|\\\^\[\]`"<>]/g;
                function P(e) {
                    return e.replace(L, (function(e) {
                        return "%" + e[0].charCodeAt(0).toString(16).toUpperCase()
                    }
                    ))
                }
                var D, x = ["clipPath", "colorProfile", "src", "cursor", "fill", "filter", "marker", "markerStart", "markerMid", "markerEnd", "mask", "stroke", "style"], j = x.map((function(e) {
                    return "[" + e + "]"
                }
                )).join(","), M = function(svg, e, t, n) {
                    var r = P(t)
                      , o = P(n)
                      , c = function(e, t) {
                        return w(e).reduce((function(e, n) {
                            if (!n.attributes)
                                return e;
                            var r = w(n.attributes)
                              , o = t ? r.filter(t) : r;
                            return e.concat(o)
                        }
                        ), [])
                    }(svg.querySelectorAll(j), (function(e) {
                        var t = e.localName
                          , n = e.value;
                        return -1 !== x.indexOf(t) && -1 !== n.indexOf("url(" + r)
                    }
                    ));
                    c.forEach((function(e) {
                        return e.value = e.value.replace(new RegExp(r.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),"g"), o)
                    }
                    )),
                    function(e, t, n) {
                        w(e).forEach((function(e) {
                            var r = e.getAttribute(k);
                            if (r && 0 === r.indexOf(t)) {
                                var o = r.replace(t, n);
                                e.setAttributeNS(N, k, o)
                            }
                        }
                        ))
                    }(e, r, o)
                }, H = "mount", U = "symbol_mount", B = function(e) {
                    function t(t) {
                        var r = this;
                        void 0 === t && (t = {}),
                        e.call(this, n(O, t));
                        var o, c = (o = o || Object.create(null),
                        {
                            on: function(e, t) {
                                (o[e] || (o[e] = [])).push(t)
                            },
                            off: function(e, t) {
                                o[e] && o[e].splice(o[e].indexOf(t) >>> 0, 1)
                            },
                            emit: function(e, t) {
                                (o[e] || []).map((function(e) {
                                    e(t)
                                }
                                )),
                                (o["*"] || []).map((function(n) {
                                    n(e, t)
                                }
                                ))
                            }
                        });
                        this._emitter = c,
                        this.node = null;
                        var l = this.config;
                        if (l.autoConfigure && this._autoConfigure(t),
                        l.syncUrlsWithBaseTag) {
                            var d = document.getElementsByTagName("base")[0].getAttribute("href");
                            c.on(H, (function() {
                                return r.updateUrls("#", d)
                            }
                            ))
                        }
                        var f = this._handleLocationChange.bind(this);
                        this._handleLocationChange = f,
                        l.listenLocationChangeEvent && window.addEventListener(l.locationChangeEvent, f),
                        l.locationChangeAngularEmitter && A(l.locationChangeEvent),
                        c.on(H, (function(e) {
                            l.moveGradientsOutsideSymbol && I(e)
                        }
                        )),
                        c.on(U, (function(e) {
                            var t;
                            l.moveGradientsOutsideSymbol && I(e.parentNode),
                            (S() || C()) && (t = [],
                            w(e.querySelectorAll("style")).forEach((function(style) {
                                style.textContent += "",
                                t.push(style)
                            }
                            )))
                        }
                        ))
                    }
                    e && (t.__proto__ = e),
                    t.prototype = Object.create(e && e.prototype),
                    t.prototype.constructor = t;
                    var r = {
                        isMounted: {}
                    };
                    return r.isMounted.get = function() {
                        return !!this.node
                    }
                    ,
                    t.prototype._autoConfigure = function(e) {
                        var t = this.config;
                        void 0 === e.syncUrlsWithBaseTag && (t.syncUrlsWithBaseTag = void 0 !== document.getElementsByTagName("base")[0]),
                        void 0 === e.locationChangeAngularEmitter && (t.locationChangeAngularEmitter = void 0 !== window.angular),
                        void 0 === e.moveGradientsOutsideSymbol && (t.moveGradientsOutsideSymbol = T())
                    }
                    ,
                    t.prototype._handleLocationChange = function(e) {
                        var t = e.detail
                          , n = t.oldUrl
                          , r = t.newUrl;
                        this.updateUrls(n, r)
                    }
                    ,
                    t.prototype.add = function(symbol) {
                        var t = e.prototype.add.call(this, symbol);
                        return this.isMounted && t && (symbol.mount(this.node),
                        this._emitter.emit(U, symbol.node)),
                        t
                    }
                    ,
                    t.prototype.attach = function(e) {
                        var t = this
                          , n = this;
                        if (n.isMounted)
                            return n.node;
                        var r = "string" == typeof e ? document.querySelector(e) : e;
                        return n.node = r,
                        this.symbols.forEach((function(symbol) {
                            symbol.mount(n.node),
                            t._emitter.emit(U, symbol.node)
                        }
                        )),
                        w(r.querySelectorAll("symbol")).forEach((function(e) {
                            var symbol = E.createFromExistingNode(e);
                            symbol.node = e,
                            n.add(symbol)
                        }
                        )),
                        this._emitter.emit(H, r),
                        r
                    }
                    ,
                    t.prototype.destroy = function() {
                        var e = this
                          , t = e.config
                          , n = e.symbols
                          , r = e._emitter;
                        n.forEach((function(s) {
                            return s.destroy()
                        }
                        )),
                        r.off("*"),
                        window.removeEventListener(t.locationChangeEvent, this._handleLocationChange),
                        this.isMounted && this.unmount()
                    }
                    ,
                    t.prototype.mount = function(e, t) {
                        void 0 === e && (e = this.config.mountTo),
                        void 0 === t && (t = !1);
                        var n = this;
                        if (n.isMounted)
                            return n.node;
                        var r = "string" == typeof e ? document.querySelector(e) : e
                          , o = n.render();
                        return this.node = o,
                        t && r.childNodes[0] ? r.insertBefore(o, r.childNodes[0]) : r.appendChild(o),
                        this._emitter.emit(H, o),
                        o
                    }
                    ,
                    t.prototype.render = function() {
                        return y(this.stringify())
                    }
                    ,
                    t.prototype.unmount = function() {
                        this.node.parentNode.removeChild(this.node)
                    }
                    ,
                    t.prototype.updateUrls = function(e, t) {
                        if (!this.isMounted)
                            return !1;
                        var n = document.querySelectorAll(this.config.usagesToUpdate);
                        return M(this.node, n, R(e) + "#", R(t) + "#"),
                        !0
                    }
                    ,
                    Object.defineProperties(t.prototype, r),
                    t
                }(m), G = e((function(e) {
                    var t, n, r, o, c, l;
                    e.exports = (n = [],
                    r = document,
                    o = r.documentElement.doScroll,
                    c = "DOMContentLoaded",
                    (l = (o ? /^loaded|^c/ : /^loaded|^i|^c/).test(r.readyState)) || r.addEventListener(c, t = function() {
                        for (r.removeEventListener(c, t),
                        l = 1; t = n.shift(); )
                            t()
                    }
                    ),
                    function(e) {
                        l ? setTimeout(e, 0) : n.push(e)
                    }
                    )
                }
                )), W = "__SVG_SPRITE_NODE__";
                window.__SVG_SPRITE__ ? D = window.__SVG_SPRITE__ : (D = new B({
                    attrs: {
                        id: W,
                        "aria-hidden": "true"
                    }
                }),
                window.__SVG_SPRITE__ = D);
                var F = function() {
                    var e = document.getElementById(W);
                    e ? D.attach(e) : D.mount(document.body, !0)
                };
                return document.body ? F() : G(F),
                D
            }
            ,
            e.exports = n()
        }
        ).call(this, n(93))
    },
    331: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return m
        }
        ));
        n(45),
        n(44),
        n(66);
        var r = n(12)
          , o = n(3)
          , c = n(26)
          , l = n(27)
          , d = (n(63),
        n(5),
        n(40),
        n(43),
        n(18),
        n(98),
        n(1));
        function f(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function h(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? f(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : f(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var _ = function() {
            function e(t) {
                Object(c.a)(this, e);
                var n = d.default.extend({
                    name: "ComponentApp",
                    data: function() {
                        return {
                            props: t.props || t.propsData || {},
                            on: t.on || {}
                        }
                    },
                    render: function(e) {
                        return e(t.component, {
                            props: this.$data.props,
                            on: this.$data.on
                        })
                    }
                })
                  , r = t.app.$root
                  , o = {};
                Object.keys(r.$options).forEach((function(e) {
                    /^\$/.test(e) && (o[e] = r.$options[e])
                }
                ));
                var l = h({
                    i18n: r.$options.i18n,
                    store: r.$options.store,
                    router: r.$options.router
                }, o);
                this.vm = new n(h(h({}, l), {}, {
                    el: document.createElement("div")
                })),
                document.body.appendChild(this.vm.$el)
            }
            return Object(l.a)(e, [{
                key: "el",
                get: function() {
                    return this.vm.$el
                }
            }, {
                key: "updateOptions",
                value: function(e) {
                    Object.assign(this.vm.$data, e)
                }
            }, {
                key: "destroy",
                value: function() {
                    var e = this
                      , t = this.vm.$el;
                    setTimeout((function() {
                        try {
                            document.body.removeChild(t),
                            e.vm && (e.vm.$destroy(),
                            Object.keys(e.vm).forEach((function(t) {
                                var n, r, desc;
                                /^\$/.test(t) && (n = e.vm,
                                r = t,
                                desc = Object.getOwnPropertyDescriptor(n, r) || {},
                                Boolean(desc.writable)) && delete e.vm[t]
                            }
                            )),
                            e.vm = null)
                        } catch (e) {}
                    }
                    ), 0)
                }
            }]),
            e
        }()
          , m = function(e) {
            return new Promise((function(t) {
                var n = new _(h(h({}, e), {}, {
                    on: {
                        destroy: function(e) {
                            var o = e;
                            "object" === Object(r.a)(o) && (o = JSON.parse(JSON.stringify(o))),
                            n.destroy(),
                            t(o)
                        }
                    }
                }))
            }
            ))
        }
    },
    353: function(e) {
        e.exports = JSON.parse('{"loadFailed":"The network is abnormal and the verification timed out, please refresh the page and try again or contact customer support"}')
    },
    390: function(e, t, n) {
        "use strict";
        var r = n(27)
          , o = n(26)
          , c = function() {
            function e(t) {
                Object(o.a)(this, e),
                this.request = t
            }
            return Object(r.a)(e, [{
                key: "getUserInfo",
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
                key: "getUserPersonalInformation",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/users/personal/information"
                    })
                }
            }, {
                key: "getBonusTotal",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/voucher/v1/total"
                    })
                }
            }, {
                key: "getUnreadNotificationCount",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/notification/un-read-count"
                    })
                }
            }, {
                key: "setMsgAllRead",
                value: function() {
                    return this.request({
                        method: "POST",
                        url: "/infra-notify/v1/msg-center/mark-all-as-read"
                    })
                }
            }, {
                key: "requestCustomerServiceList",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/operation/v1/customer-service/conversions"
                    })
                }
            }, {
                key: "getNotificationListGroup",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/notification/list-group"
                    })
                }
            }, {
                key: "changeUserLang",
                value: function(e) {
                    return this.request({
                        method: "GET",
                        url: "/v1/users/lang/change",
                        params: {
                            lang: e
                        }
                    })
                }
            }, {
                key: "getRestrictInfo",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/ip/restrict-info"
                    })
                }
            }, {
                key: "getWebEntryPopup",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/task/web-entry-popup"
                    })
                }
            }, {
                key: "entryPopup",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v2/task/web-entry-popup",
                        params: {
                            timestamp: Date.now()
                        }
                    })
                }
            }, {
                key: "logout",
                value: function() {
                    return this.request({
                        method: "POST",
                        url: "/v3/users/logout"
                    })
                }
            }, {
                key: "notificationUnread",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/notification/un-read-count"
                    })
                }
            }, {
                key: "supportFiatCurrency",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v1/config/support-fiat-currency"
                    })
                }
            }, {
                key: "updateFiatCurrency",
                value: function(data) {
                    return this.request({
                        method: "POST",
                        url: "/v1/users/update-fiat-currency",
                        data: data
                    })
                }
            }, {
                key: "barHints",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/platform-tool/v1/hint/list",
                        headers: {
                            "x-router-tag": "pre-product1"
                        }
                    })
                }
            }, {
                key: "banners",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 101;
                    return this.request({
                        method: "GET",
                        url: "/v1/config/banners",
                        params: {
                            type: e
                        }
                    })
                }
            }, {
                key: "hasNewMoments",
                value: function(e) {
                    return this.request({
                        url: "/social-feed/v1/community/hasReadLastFeed",
                        method: "GET",
                        params: {
                            langs: e
                        }
                    })
                }
            }, {
                key: "getApplyAuto",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/v3/trader/apply/auto",
                        resolveSource: !0
                    })
                }
            }, {
                key: "applyAuto",
                value: function() {
                    return this.request({
                        method: "POST",
                        url: "/v2/trader/apply/auto"
                    })
                }
            }, {
                key: "getSubAccountPermission",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/user-service/v1/permission/info"
                    })
                }
            }, {
                key: "getAssetsInfo",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/asset-manager/v1/assets/account-total-overview"
                    })
                }
            }, {
                key: "getMt5AccountInfo",
                value: function() {
                    return this.request({
                        method: "GET",
                        url: "/swap/v1/mt5-agent/account/user-relative"
                    })
                }
            }]),
            e
        }()
          , l = Object(r.a)((function e(t) {
            Object(o.a)(this, e),
            this.common = new c(t)
        }
        ));
        t.a = l
    },
    399: function(e, t, n) {
        var r = n(801)
          , o = n(802)
          , c = [n(809)];
        e.exports = r.createStore(o, c)
    },
    436: function(e) {
        e.exports = JSON.parse('{"loadFailed":"La red es anormal y se agotó el tiempo de verificación, actualice la página o comuníquese con el Servicio al Cliente"}')
    },
    444: function(e, t, n) {
        "use strict";
        n(163),
        n(141),
        n(215),
        n(331),
        n(173);
        var r = n(120);
        n.d(t, "c", (function() {
            return r.c
        }
        ));
        n(110);
        var o = n(13);
        n.d(t, "a", (function() {
            return o.f
        }
        )),
        n.d(t, "b", (function() {
            return o.k
        }
        ))
    },
    454: function(e, t, n) {
        "use strict";
        var r = ["compactDisplay", "currency", "currencyDisplay", "currencySign", "localeMatcher", "notation", "numberingSystem", "signDisplay", "style", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits"]
          , o = ["dateStyle", "timeStyle", "calendar", "localeMatcher", "hour12", "hourCycle", "timeZone", "formatMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName"];
        function c(e, t) {
            "undefined" != typeof console && (console.warn("[vue-i18n] " + e),
            t && console.warn(t.stack))
        }
        var l = Array.isArray;
        function d(e) {
            return null !== e && "object" == typeof e
        }
        function f(e) {
            return "string" == typeof e
        }
        var h = Object.prototype.toString;
        function _(e) {
            return "[object Object]" === h.call(e)
        }
        function m(e) {
            return null == e
        }
        function v(e) {
            return "function" == typeof e
        }
        function y() {
            for (var e = [], t = arguments.length; t--; )
                e[t] = arguments[t];
            var n = null
              , r = null;
            return 1 === e.length ? d(e[0]) || l(e[0]) ? r = e[0] : "string" == typeof e[0] && (n = e[0]) : 2 === e.length && ("string" == typeof e[0] && (n = e[0]),
            (d(e[1]) || l(e[1])) && (r = e[1])),
            {
                locale: n,
                params: r
            }
        }
        function E(e) {
            return JSON.parse(JSON.stringify(e))
        }
        function O(e, t) {
            return !!~e.indexOf(t)
        }
        var w = Object.prototype.hasOwnProperty;
        function T(e, t) {
            return w.call(e, t)
        }
        function S(e) {
            for (var t = arguments, output = Object(e), i = 1; i < arguments.length; i++) {
                var source = t[i];
                if (null != source) {
                    var n = void 0;
                    for (n in source)
                        T(source, n) && (d(source[n]) ? output[n] = S(output[n], source[n]) : output[n] = source[n])
                }
            }
            return output
        }
        function C(a, b) {
            if (a === b)
                return !0;
            var e = d(a)
              , t = d(b);
            if (!e || !t)
                return !e && !t && String(a) === String(b);
            try {
                var n = l(a)
                  , r = l(b);
                if (n && r)
                    return a.length === b.length && a.every((function(e, i) {
                        return C(e, b[i])
                    }
                    ));
                if (n || r)
                    return !1;
                var o = Object.keys(a)
                  , c = Object.keys(b);
                return o.length === c.length && o.every((function(e) {
                    return C(a[e], b[e])
                }
                ))
            } catch (e) {
                return !1
            }
        }
        function R(e) {
            return null != e && Object.keys(e).forEach((function(t) {
                "string" == typeof e[t] && (e[t] = e[t].replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;"))
            }
            )),
            e
        }
        var A = {
            name: "i18n",
            functional: !0,
            props: {
                tag: {
                    type: [String, Boolean, Object],
                    default: "span"
                },
                path: {
                    type: String,
                    required: !0
                },
                locale: {
                    type: String
                },
                places: {
                    type: [Array, Object]
                }
            },
            render: function(e, t) {
                var data = t.data
                  , n = t.parent
                  , r = t.props
                  , o = t.slots
                  , c = n.$i18n;
                if (c) {
                    var path = r.path
                      , l = r.locale
                      , d = r.places
                      , f = o()
                      , h = c.i(path, l, function(e) {
                        var t;
                        for (t in e)
                            if ("default" !== t)
                                return !1;
                        return Boolean(t)
                    }(f) || d ? function(e, t) {
                        var n = t ? function(e) {
                            0;
                            return Array.isArray(e) ? e.reduce(N, {}) : Object.assign({}, e)
                        }(t) : {};
                        if (!e)
                            return n;
                        var r = (e = e.filter((function(e) {
                            return e.tag || "" !== e.text.trim()
                        }
                        ))).every(k);
                        0;
                        return e.reduce(r ? I : N, n)
                    }(f.default, d) : f)
                      , _ = r.tag && !0 !== r.tag || !1 === r.tag ? r.tag : "span";
                    return _ ? e(_, data, h) : h
                }
            }
        };
        function I(e, t) {
            return t.data && t.data.attrs && t.data.attrs.place && (e[t.data.attrs.place] = t),
            e
        }
        function N(e, t, n) {
            return e[n] = t,
            e
        }
        function k(e) {
            return Boolean(e.data && e.data.attrs && e.data.attrs.place)
        }
        var L, P = {
            name: "i18n-n",
            functional: !0,
            props: {
                tag: {
                    type: [String, Boolean, Object],
                    default: "span"
                },
                value: {
                    type: Number,
                    required: !0
                },
                format: {
                    type: [String, Object]
                },
                locale: {
                    type: String
                }
            },
            render: function(e, t) {
                var n = t.props
                  , o = t.parent
                  , data = t.data
                  , c = o.$i18n;
                if (!c)
                    return null;
                var l = null
                  , h = null;
                f(n.format) ? l = n.format : d(n.format) && (n.format.key && (l = n.format.key),
                h = Object.keys(n.format).reduce((function(e, t) {
                    var o;
                    return O(r, t) ? Object.assign({}, e, ((o = {})[t] = n.format[t],
                    o)) : e
                }
                ), null));
                var _ = n.locale || c.locale
                  , m = c._ntp(n.value, _, l, h)
                  , v = m.map((function(e, t) {
                    var n, slot = data.scopedSlots && data.scopedSlots[e.type];
                    return slot ? slot(((n = {})[e.type] = e.value,
                    n.index = t,
                    n.parts = m,
                    n)) : e.value
                }
                ))
                  , y = n.tag && !0 !== n.tag || !1 === n.tag ? n.tag : "span";
                return y ? e(y, {
                    attrs: data.attrs,
                    class: data.class,
                    staticClass: data.staticClass
                }, v) : v
            }
        };
        function D(e, t, n) {
            M(e, n) && H(e, t, n)
        }
        function x(e, t, n, r) {
            if (M(e, n)) {
                var o = n.context.$i18n;
                (function(e, t) {
                    var n = t.context;
                    return e._locale === n.$i18n.locale
                }
                )(e, n) && C(t.value, t.oldValue) && C(e._localeMessage, o.getLocaleMessage(o.locale)) || H(e, t, n)
            }
        }
        function j(e, t, n, r) {
            if (n.context) {
                var o = n.context.$i18n || {};
                t.modifiers.preserve || o.preserveDirectiveContent || (e.textContent = ""),
                e._vt = void 0,
                delete e._vt,
                e._locale = void 0,
                delete e._locale,
                e._localeMessage = void 0,
                delete e._localeMessage
            } else
                c("Vue instance does not exists in VNode context")
        }
        function M(e, t) {
            var n = t.context;
            return n ? !!n.$i18n || (c("VueI18n instance does not exists in Vue instance"),
            !1) : (c("Vue instance does not exists in VNode context"),
            !1)
        }
        function H(e, t, n) {
            var r, o, l = function(e) {
                var path, t, n, r;
                f(e) ? path = e : _(e) && (path = e.path,
                t = e.locale,
                n = e.args,
                r = e.choice);
                return {
                    path: path,
                    locale: t,
                    args: n,
                    choice: r
                }
            }(t.value), path = l.path, d = l.locale, h = l.args, m = l.choice;
            if (path || d || h)
                if (path) {
                    var v = n.context;
                    e._vt = e.textContent = null != m ? (r = v.$i18n).tc.apply(r, [path, m].concat(U(d, h))) : (o = v.$i18n).t.apply(o, [path].concat(U(d, h))),
                    e._locale = v.$i18n.locale,
                    e._localeMessage = v.$i18n.getLocaleMessage(v.$i18n.locale)
                } else
                    c("`path` is required in v-t directive");
            else
                c("value type not supported")
        }
        function U(e, t) {
            var n = [];
            return e && n.push(e),
            t && (Array.isArray(t) || _(t)) && n.push(t),
            n
        }
        function B(e, t) {
            void 0 === t && (t = {
                bridge: !1
            }),
            B.installed = !0;
            (L = e).version && Number(L.version.split(".")[0]);
            (function(e) {
                e.prototype.hasOwnProperty("$i18n") || Object.defineProperty(e.prototype, "$i18n", {
                    get: function() {
                        return this._i18n
                    }
                }),
                e.prototype.$t = function(e) {
                    for (var t = [], n = arguments.length - 1; n-- > 0; )
                        t[n] = arguments[n + 1];
                    var r = this.$i18n;
                    return r._t.apply(r, [e, r.locale, r._getMessages(), this].concat(t))
                }
                ,
                e.prototype.$tc = function(e, t) {
                    for (var n = [], r = arguments.length - 2; r-- > 0; )
                        n[r] = arguments[r + 2];
                    var o = this.$i18n;
                    return o._tc.apply(o, [e, o.locale, o._getMessages(), this, t].concat(n))
                }
                ,
                e.prototype.$te = function(e, t) {
                    var n = this.$i18n;
                    return n._te(e, n.locale, n._getMessages(), t)
                }
                ,
                e.prototype.$d = function(e) {
                    for (var t, n = [], r = arguments.length - 1; r-- > 0; )
                        n[r] = arguments[r + 1];
                    return (t = this.$i18n).d.apply(t, [e].concat(n))
                }
                ,
                e.prototype.$n = function(e) {
                    for (var t, n = [], r = arguments.length - 1; r-- > 0; )
                        n[r] = arguments[r + 1];
                    return (t = this.$i18n).n.apply(t, [e].concat(n))
                }
            }
            )(L),
            L.mixin(function(e) {
                function t() {
                    this !== this.$root && this.$options.__INTLIFY_META__ && this.$el && this.$el.setAttribute("data-intlify", this.$options.__INTLIFY_META__)
                }
                return void 0 === e && (e = !1),
                e ? {
                    mounted: t
                } : {
                    beforeCreate: function() {
                        var e = this.$options;
                        if (e.i18n = e.i18n || (e.__i18nBridge || e.__i18n ? {} : null),
                        e.i18n) {
                            if (e.i18n instanceof re) {
                                if (e.__i18nBridge || e.__i18n)
                                    try {
                                        var t = e.i18n && e.i18n.messages ? e.i18n.messages : {};
                                        (e.__i18nBridge || e.__i18n).forEach((function(e) {
                                            t = S(t, JSON.parse(e))
                                        }
                                        )),
                                        Object.keys(t).forEach((function(n) {
                                            e.i18n.mergeLocaleMessage(n, t[n])
                                        }
                                        ))
                                    } catch (e) {}
                                this._i18n = e.i18n,
                                this._i18nWatcher = this._i18n.watchI18nData()
                            } else if (_(e.i18n)) {
                                var n = this.$root && this.$root.$i18n && this.$root.$i18n instanceof re ? this.$root.$i18n : null;
                                if (n && (e.i18n.root = this.$root,
                                e.i18n.formatter = n.formatter,
                                e.i18n.fallbackLocale = n.fallbackLocale,
                                e.i18n.formatFallbackMessages = n.formatFallbackMessages,
                                e.i18n.silentTranslationWarn = n.silentTranslationWarn,
                                e.i18n.silentFallbackWarn = n.silentFallbackWarn,
                                e.i18n.pluralizationRules = n.pluralizationRules,
                                e.i18n.preserveDirectiveContent = n.preserveDirectiveContent),
                                e.__i18nBridge || e.__i18n)
                                    try {
                                        var r = e.i18n && e.i18n.messages ? e.i18n.messages : {};
                                        (e.__i18nBridge || e.__i18n).forEach((function(e) {
                                            r = S(r, JSON.parse(e))
                                        }
                                        )),
                                        e.i18n.messages = r
                                    } catch (e) {}
                                var o = e.i18n.sharedMessages;
                                o && _(o) && (e.i18n.messages = S(e.i18n.messages, o)),
                                this._i18n = new re(e.i18n),
                                this._i18nWatcher = this._i18n.watchI18nData(),
                                (void 0 === e.i18n.sync || e.i18n.sync) && (this._localeWatcher = this.$i18n.watchLocale()),
                                n && n.onComponentInstanceCreated(this._i18n)
                            }
                        } else
                            this.$root && this.$root.$i18n && this.$root.$i18n instanceof re ? this._i18n = this.$root.$i18n : e.parent && e.parent.$i18n && e.parent.$i18n instanceof re && (this._i18n = e.parent.$i18n)
                    },
                    beforeMount: function() {
                        var e = this.$options;
                        e.i18n = e.i18n || (e.__i18nBridge || e.__i18n ? {} : null),
                        e.i18n ? (e.i18n instanceof re || _(e.i18n)) && (this._i18n.subscribeDataChanging(this),
                        this._subscribing = !0) : (this.$root && this.$root.$i18n && this.$root.$i18n instanceof re || e.parent && e.parent.$i18n && e.parent.$i18n instanceof re) && (this._i18n.subscribeDataChanging(this),
                        this._subscribing = !0)
                    },
                    mounted: t,
                    beforeDestroy: function() {
                        if (this._i18n) {
                            var e = this;
                            this.$nextTick((function() {
                                e._subscribing && (e._i18n.unsubscribeDataChanging(e),
                                delete e._subscribing),
                                e._i18nWatcher && (e._i18nWatcher(),
                                e._i18n.destroyVM(),
                                delete e._i18nWatcher),
                                e._localeWatcher && (e._localeWatcher(),
                                delete e._localeWatcher)
                            }
                            ))
                        }
                    }
                }
            }(t.bridge)),
            L.directive("t", {
                bind: D,
                update: x,
                unbind: j
            }),
            L.component(A.name, A),
            L.component(P.name, P),
            L.config.optionMergeStrategies.i18n = function(e, t) {
                return void 0 === t ? e : t
            }
        }
        var G = function() {
            this._caches = Object.create(null)
        };
        G.prototype.interpolate = function(e, t) {
            if (!t)
                return [e];
            var n = this._caches[e];
            return n || (n = function(e) {
                var t = []
                  , n = 0
                  , text = "";
                for (; n < e.length; ) {
                    var r = e[n++];
                    if ("{" === r) {
                        text && t.push({
                            type: "text",
                            value: text
                        }),
                        text = "";
                        var sub = "";
                        for (r = e[n++]; void 0 !== r && "}" !== r; )
                            sub += r,
                            r = e[n++];
                        var o = "}" === r
                          , c = W.test(sub) ? "list" : o && F.test(sub) ? "named" : "unknown";
                        t.push({
                            value: sub,
                            type: c
                        })
                    } else
                        "%" === r ? "{" !== e[n] && (text += r) : text += r
                }
                return text && t.push({
                    type: "text",
                    value: text
                }),
                t
            }(e),
            this._caches[e] = n),
            function(e, t) {
                var n = []
                  , r = 0
                  , o = Array.isArray(t) ? "list" : d(t) ? "named" : "unknown";
                if ("unknown" === o)
                    return n;
                for (; r < e.length; ) {
                    var c = e[r];
                    switch (c.type) {
                    case "text":
                        n.push(c.value);
                        break;
                    case "list":
                        n.push(t[parseInt(c.value, 10)]);
                        break;
                    case "named":
                        "named" === o && n.push(t[c.value])
                    }
                    r++
                }
                return n
            }(n, t)
        }
        ;
        var W = /^(?:\d)+/
          , F = /^(?:\w)+/;
        var V = [];
        V[0] = {
            ws: [0],
            ident: [3, 0],
            "[": [4],
            eof: [7]
        },
        V[1] = {
            ws: [1],
            ".": [2],
            "[": [4],
            eof: [7]
        },
        V[2] = {
            ws: [2],
            ident: [3, 0],
            0: [3, 0],
            number: [3, 0]
        },
        V[3] = {
            ident: [3, 0],
            0: [3, 0],
            number: [3, 0],
            ws: [1, 1],
            ".": [2, 1],
            "[": [4, 1],
            eof: [7, 1]
        },
        V[4] = {
            "'": [5, 0],
            '"': [6, 0],
            "[": [4, 2],
            "]": [1, 3],
            eof: 8,
            else: [4, 0]
        },
        V[5] = {
            "'": [4, 0],
            eof: 8,
            else: [5, 0]
        },
        V[6] = {
            '"': [4, 0],
            eof: 8,
            else: [6, 0]
        };
        var Y = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;
        function K(e) {
            if (null == e)
                return "eof";
            switch (e.charCodeAt(0)) {
            case 91:
            case 93:
            case 46:
            case 34:
            case 39:
                return e;
            case 95:
            case 36:
            case 45:
                return "ident";
            case 9:
            case 10:
            case 13:
            case 160:
            case 65279:
            case 8232:
            case 8233:
                return "ws"
            }
            return "ident"
        }
        function z(path) {
            var e, a, t, n = path.trim();
            return ("0" !== path.charAt(0) || !isNaN(path)) && (t = n,
            Y.test(t) ? (a = (e = n).charCodeAt(0)) !== e.charCodeAt(e.length - 1) || 34 !== a && 39 !== a ? e : e.slice(1, -1) : "*" + n)
        }
        var $ = function() {
            this._cache = Object.create(null)
        };
        $.prototype.parsePath = function(path) {
            var e = this._cache[path];
            return e || (e = function(path) {
                var e, t, n, r, o, c, l, d = [], f = -1, h = 0, _ = 0, m = [];
                function v() {
                    var e = path[f + 1];
                    if (5 === h && "'" === e || 6 === h && '"' === e)
                        return f++,
                        n = "\\" + e,
                        m[0](),
                        !0
                }
                for (m[1] = function() {
                    void 0 !== t && (d.push(t),
                    t = void 0)
                }
                ,
                m[0] = function() {
                    void 0 === t ? t = n : t += n
                }
                ,
                m[2] = function() {
                    m[0](),
                    _++
                }
                ,
                m[3] = function() {
                    if (_ > 0)
                        _--,
                        h = 4,
                        m[0]();
                    else {
                        if (_ = 0,
                        void 0 === t)
                            return !1;
                        if (!1 === (t = z(t)))
                            return !1;
                        m[1]()
                    }
                }
                ; null !== h; )
                    if (f++,
                    "\\" !== (e = path[f]) || !v()) {
                        if (r = K(e),
                        8 === (o = (l = V[h])[r] || l.else || 8))
                            return;
                        if (h = o[0],
                        (c = m[o[1]]) && (n = void 0 === (n = o[2]) ? e : n,
                        !1 === c()))
                            return;
                        if (7 === h)
                            return d
                    }
            }(path),
            e && (this._cache[path] = e)),
            e || []
        }
        ,
        $.prototype.getPathValue = function(e, path) {
            if (!d(e))
                return null;
            var t = this.parsePath(path);
            if (0 === t.length)
                return null;
            for (var n = t.length, r = e, i = 0; i < n; ) {
                var o = r[t[i]];
                if (null == o)
                    return null;
                r = o,
                i++
            }
            return r
        }
        ;
        var J, X = /<\/?[\w\s="/.':;#-\/]+>/, Q = /(?:@(?:\.[a-zA-Z]+)?:(?:[\w\-_|./]+|\([\w\-_:|./]+\)))/g, Z = /^@(?:\.([a-zA-Z]+))?:/, ee = /[()]/g, te = {
            upper: function(e) {
                return e.toLocaleUpperCase()
            },
            lower: function(e) {
                return e.toLocaleLowerCase()
            },
            capitalize: function(e) {
                return "" + e.charAt(0).toLocaleUpperCase() + e.substr(1)
            }
        }, ne = new G, re = function(e) {
            var t = this;
            void 0 === e && (e = {}),
            !L && "undefined" != typeof window && window.Vue && B(window.Vue);
            var n = e.locale || "en-US"
              , r = !1 !== e.fallbackLocale && (e.fallbackLocale || "en-US")
              , o = e.messages || {}
              , c = e.dateTimeFormats || e.datetimeFormats || {}
              , l = e.numberFormats || {};
            this._vm = null,
            this._formatter = e.formatter || ne,
            this._modifiers = e.modifiers || {},
            this._missing = e.missing || null,
            this._root = e.root || null,
            this._sync = void 0 === e.sync || !!e.sync,
            this._fallbackRoot = void 0 === e.fallbackRoot || !!e.fallbackRoot,
            this._fallbackRootWithEmptyString = void 0 === e.fallbackRootWithEmptyString || !!e.fallbackRootWithEmptyString,
            this._formatFallbackMessages = void 0 !== e.formatFallbackMessages && !!e.formatFallbackMessages,
            this._silentTranslationWarn = void 0 !== e.silentTranslationWarn && e.silentTranslationWarn,
            this._silentFallbackWarn = void 0 !== e.silentFallbackWarn && !!e.silentFallbackWarn,
            this._dateTimeFormatters = {},
            this._numberFormatters = {},
            this._path = new $,
            this._dataListeners = new Set,
            this._componentInstanceCreatedListener = e.componentInstanceCreatedListener || null,
            this._preserveDirectiveContent = void 0 !== e.preserveDirectiveContent && !!e.preserveDirectiveContent,
            this.pluralizationRules = e.pluralizationRules || {},
            this._warnHtmlInMessage = e.warnHtmlInMessage || "off",
            this._postTranslation = e.postTranslation || null,
            this._escapeParameterHtml = e.escapeParameterHtml || !1,
            "__VUE_I18N_BRIDGE__"in e && (this.__VUE_I18N_BRIDGE__ = e.__VUE_I18N_BRIDGE__),
            this.getChoiceIndex = function(e, n) {
                var r = Object.getPrototypeOf(t);
                if (r && r.getChoiceIndex)
                    return r.getChoiceIndex.call(t, e, n);
                var o, c;
                return t.locale in t.pluralizationRules ? t.pluralizationRules[t.locale].apply(t, [e, n]) : (o = e,
                c = n,
                o = Math.abs(o),
                2 === c ? o ? o > 1 ? 1 : 0 : 1 : o ? Math.min(o, 2) : 0)
            }
            ,
            this._exist = function(e, n) {
                return !(!e || !n) && (!m(t._path.getPathValue(e, n)) || !!e[n])
            }
            ,
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || Object.keys(o).forEach((function(e) {
                t._checkLocaleMessage(e, t._warnHtmlInMessage, o[e])
            }
            )),
            this._initVM({
                locale: n,
                fallbackLocale: r,
                messages: o,
                dateTimeFormats: c,
                numberFormats: l
            })
        }, oe = {
            vm: {
                configurable: !0
            },
            messages: {
                configurable: !0
            },
            dateTimeFormats: {
                configurable: !0
            },
            numberFormats: {
                configurable: !0
            },
            availableLocales: {
                configurable: !0
            },
            locale: {
                configurable: !0
            },
            fallbackLocale: {
                configurable: !0
            },
            formatFallbackMessages: {
                configurable: !0
            },
            missing: {
                configurable: !0
            },
            formatter: {
                configurable: !0
            },
            silentTranslationWarn: {
                configurable: !0
            },
            silentFallbackWarn: {
                configurable: !0
            },
            preserveDirectiveContent: {
                configurable: !0
            },
            warnHtmlInMessage: {
                configurable: !0
            },
            postTranslation: {
                configurable: !0
            },
            sync: {
                configurable: !0
            }
        };
        re.prototype._checkLocaleMessage = function(e, t, n) {
            var r = function(e, t, n, o) {
                if (_(n))
                    Object.keys(n).forEach((function(c) {
                        var l = n[c];
                        _(l) ? (o.push(c),
                        o.push("."),
                        r(e, t, l, o),
                        o.pop(),
                        o.pop()) : (o.push(c),
                        r(e, t, l, o),
                        o.pop())
                    }
                    ));
                else if (l(n))
                    n.forEach((function(n, c) {
                        _(n) ? (o.push("[" + c + "]"),
                        o.push("."),
                        r(e, t, n, o),
                        o.pop(),
                        o.pop()) : (o.push("[" + c + "]"),
                        r(e, t, n, o),
                        o.pop())
                    }
                    ));
                else if (f(n)) {
                    if (X.test(n)) {
                        var d = "Detected HTML in message '" + n + "' of keypath '" + o.join("") + "' at '" + t + "'. Consider component interpolation with '<i18n>' to avoid XSS. See http://bit.ly/2ZqJzkp";
                        "warn" === e ? c(d) : "error" === e && function(e, t) {
                            "undefined" != typeof console && (console.error("[vue-i18n] " + e),
                            t && console.error(t.stack))
                        }(d)
                    }
                }
            };
            r(t, e, n, [])
        }
        ,
        re.prototype._initVM = function(data) {
            var e = L.config.silent;
            L.config.silent = !0,
            this._vm = new L({
                data: data,
                __VUE18N__INSTANCE__: !0
            }),
            L.config.silent = e
        }
        ,
        re.prototype.destroyVM = function() {
            this._vm.$destroy()
        }
        ,
        re.prototype.subscribeDataChanging = function(e) {
            this._dataListeners.add(e)
        }
        ,
        re.prototype.unsubscribeDataChanging = function(e) {
            !function(e, t) {
                if (e.delete(t))
                    ;
            }(this._dataListeners, e)
        }
        ,
        re.prototype.watchI18nData = function() {
            var e = this;
            return this._vm.$watch("$data", (function() {
                for (var t, n, r = (t = e._dataListeners,
                n = [],
                t.forEach((function(a) {
                    return n.push(a)
                }
                )),
                n), i = r.length; i--; )
                    L.nextTick((function() {
                        r[i] && r[i].$forceUpdate()
                    }
                    ))
            }
            ), {
                deep: !0
            })
        }
        ,
        re.prototype.watchLocale = function(e) {
            if (e) {
                if (!this.__VUE_I18N_BRIDGE__)
                    return null;
                var t = this
                  , n = this._vm;
                return this.vm.$watch("locale", (function(r) {
                    n.$set(n, "locale", r),
                    t.__VUE_I18N_BRIDGE__ && e && (e.locale.value = r),
                    n.$forceUpdate()
                }
                ), {
                    immediate: !0
                })
            }
            if (!this._sync || !this._root)
                return null;
            var r = this._vm;
            return this._root.$i18n.vm.$watch("locale", (function(e) {
                r.$set(r, "locale", e),
                r.$forceUpdate()
            }
            ), {
                immediate: !0
            })
        }
        ,
        re.prototype.onComponentInstanceCreated = function(e) {
            this._componentInstanceCreatedListener && this._componentInstanceCreatedListener(e, this)
        }
        ,
        oe.vm.get = function() {
            return this._vm
        }
        ,
        oe.messages.get = function() {
            return E(this._getMessages())
        }
        ,
        oe.dateTimeFormats.get = function() {
            return E(this._getDateTimeFormats())
        }
        ,
        oe.numberFormats.get = function() {
            return E(this._getNumberFormats())
        }
        ,
        oe.availableLocales.get = function() {
            return Object.keys(this.messages).sort()
        }
        ,
        oe.locale.get = function() {
            return this._vm.locale
        }
        ,
        oe.locale.set = function(e) {
            this._vm.$set(this._vm, "locale", e)
        }
        ,
        oe.fallbackLocale.get = function() {
            return this._vm.fallbackLocale
        }
        ,
        oe.fallbackLocale.set = function(e) {
            this._localeChainCache = {},
            this._vm.$set(this._vm, "fallbackLocale", e)
        }
        ,
        oe.formatFallbackMessages.get = function() {
            return this._formatFallbackMessages
        }
        ,
        oe.formatFallbackMessages.set = function(e) {
            this._formatFallbackMessages = e
        }
        ,
        oe.missing.get = function() {
            return this._missing
        }
        ,
        oe.missing.set = function(e) {
            this._missing = e
        }
        ,
        oe.formatter.get = function() {
            return this._formatter
        }
        ,
        oe.formatter.set = function(e) {
            this._formatter = e
        }
        ,
        oe.silentTranslationWarn.get = function() {
            return this._silentTranslationWarn
        }
        ,
        oe.silentTranslationWarn.set = function(e) {
            this._silentTranslationWarn = e
        }
        ,
        oe.silentFallbackWarn.get = function() {
            return this._silentFallbackWarn
        }
        ,
        oe.silentFallbackWarn.set = function(e) {
            this._silentFallbackWarn = e
        }
        ,
        oe.preserveDirectiveContent.get = function() {
            return this._preserveDirectiveContent
        }
        ,
        oe.preserveDirectiveContent.set = function(e) {
            this._preserveDirectiveContent = e
        }
        ,
        oe.warnHtmlInMessage.get = function() {
            return this._warnHtmlInMessage
        }
        ,
        oe.warnHtmlInMessage.set = function(e) {
            var t = this
              , n = this._warnHtmlInMessage;
            if (this._warnHtmlInMessage = e,
            n !== e && ("warn" === e || "error" === e)) {
                var r = this._getMessages();
                Object.keys(r).forEach((function(e) {
                    t._checkLocaleMessage(e, t._warnHtmlInMessage, r[e])
                }
                ))
            }
        }
        ,
        oe.postTranslation.get = function() {
            return this._postTranslation
        }
        ,
        oe.postTranslation.set = function(e) {
            this._postTranslation = e
        }
        ,
        oe.sync.get = function() {
            return this._sync
        }
        ,
        oe.sync.set = function(e) {
            this._sync = e
        }
        ,
        re.prototype._getMessages = function() {
            return this._vm.messages
        }
        ,
        re.prototype._getDateTimeFormats = function() {
            return this._vm.dateTimeFormats
        }
        ,
        re.prototype._getNumberFormats = function() {
            return this._vm.numberFormats
        }
        ,
        re.prototype._warnDefault = function(e, t, n, r, o, c) {
            if (!m(n))
                return n;
            if (this._missing) {
                var l = this._missing.apply(null, [e, t, r, o]);
                if (f(l))
                    return l
            } else
                0;
            if (this._formatFallbackMessages) {
                var d = y.apply(void 0, o);
                return this._render(t, c, d.params, t)
            }
            return t
        }
        ,
        re.prototype._isFallbackRoot = function(e) {
            return (this._fallbackRootWithEmptyString ? !e : m(e)) && !m(this._root) && this._fallbackRoot
        }
        ,
        re.prototype._isSilentFallbackWarn = function(e) {
            return this._silentFallbackWarn instanceof RegExp ? this._silentFallbackWarn.test(e) : this._silentFallbackWarn
        }
        ,
        re.prototype._isSilentFallback = function(e, t) {
            return this._isSilentFallbackWarn(t) && (this._isFallbackRoot() || e !== this.fallbackLocale)
        }
        ,
        re.prototype._isSilentTranslationWarn = function(e) {
            return this._silentTranslationWarn instanceof RegExp ? this._silentTranslationWarn.test(e) : this._silentTranslationWarn
        }
        ,
        re.prototype._interpolate = function(e, t, n, r, o, c, d) {
            if (!t)
                return null;
            var h, y = this._path.getPathValue(t, n);
            if (l(y) || _(y))
                return y;
            if (m(y)) {
                if (!_(t))
                    return null;
                if (!f(h = t[n]) && !v(h))
                    return null
            } else {
                if (!f(y) && !v(y))
                    return null;
                h = y
            }
            return f(h) && (h.indexOf("@:") >= 0 || h.indexOf("@.") >= 0) && (h = this._link(e, t, h, r, "raw", c, d)),
            this._render(h, o, c, n)
        }
        ,
        re.prototype._link = function(e, t, n, r, o, c, d) {
            var f = n
              , h = f.match(Q);
            for (var _ in h)
                if (h.hasOwnProperty(_)) {
                    var link = h[_]
                      , m = link.match(Z)
                      , v = m[0]
                      , y = m[1]
                      , E = link.replace(v, "").replace(ee, "");
                    if (O(d, E))
                        return f;
                    d.push(E);
                    var w = this._interpolate(e, t, E, r, "raw" === o ? "string" : o, "raw" === o ? void 0 : c, d);
                    if (this._isFallbackRoot(w)) {
                        if (!this._root)
                            throw Error("unexpected error");
                        var T = this._root.$i18n;
                        w = T._translate(T._getMessages(), T.locale, T.fallbackLocale, E, r, o, c)
                    }
                    w = this._warnDefault(e, E, w, r, l(c) ? c : [c], o),
                    this._modifiers.hasOwnProperty(y) ? w = this._modifiers[y](w) : te.hasOwnProperty(y) && (w = te[y](w)),
                    d.pop(),
                    f = w ? f.replace(link, w) : f
                }
            return f
        }
        ,
        re.prototype._createMessageContext = function(e, t, path, n) {
            var r = this
              , o = l(e) ? e : []
              , c = d(e) ? e : {}
              , f = this._getMessages()
              , h = this.locale;
            return {
                list: function(e) {
                    return o[e]
                },
                named: function(e) {
                    return c[e]
                },
                values: e,
                formatter: t,
                path: path,
                messages: f,
                locale: h,
                linked: function(e) {
                    return r._interpolate(h, f[h] || {}, e, null, n, void 0, [e])
                }
            }
        }
        ,
        re.prototype._render = function(e, t, n, path) {
            if (v(e))
                return e(this._createMessageContext(n, this._formatter || ne, path, t));
            var r = this._formatter.interpolate(e, n, path);
            return r || (r = ne.interpolate(e, n, path)),
            "string" !== t || f(r) ? r : r.join("")
        }
        ,
        re.prototype._appendItemToChain = function(e, t, n) {
            var r = !1;
            return O(e, t) || (r = !0,
            t && (r = "!" !== t[t.length - 1],
            t = t.replace(/!/g, ""),
            e.push(t),
            n && n[t] && (r = n[t]))),
            r
        }
        ,
        re.prototype._appendLocaleToChain = function(e, t, n) {
            var r, o = t.split("-");
            do {
                var c = o.join("-");
                r = this._appendItemToChain(e, c, n),
                o.splice(-1, 1)
            } while (o.length && !0 === r);
            return r
        }
        ,
        re.prototype._appendBlockToChain = function(e, t, n) {
            for (var r = !0, i = 0; i < t.length && "boolean" == typeof r; i++) {
                var o = t[i];
                f(o) && (r = this._appendLocaleToChain(e, o, n))
            }
            return r
        }
        ,
        re.prototype._getLocaleChain = function(e, t) {
            if ("" === e)
                return [];
            this._localeChainCache || (this._localeChainCache = {});
            var n = this._localeChainCache[e];
            if (!n) {
                t || (t = this.fallbackLocale),
                n = [];
                for (var r, o = [e]; l(o); )
                    o = this._appendBlockToChain(n, o, t);
                (o = f(r = l(t) ? t : d(t) ? t.default ? t.default : null : t) ? [r] : r) && this._appendBlockToChain(n, o, null),
                this._localeChainCache[e] = n
            }
            return n
        }
        ,
        re.prototype._translate = function(e, t, n, r, o, c, l) {
            for (var d, f = this._getLocaleChain(t, n), i = 0; i < f.length; i++) {
                var h = f[i];
                if (!m(d = this._interpolate(h, e[h], r, o, c, l, [r])))
                    return d
            }
            return null
        }
        ,
        re.prototype._t = function(e, t, n, r) {
            for (var o, c = [], l = arguments.length - 4; l-- > 0; )
                c[l] = arguments[l + 4];
            if (!e)
                return "";
            var d = y.apply(void 0, c);
            this._escapeParameterHtml && (d.params = R(d.params));
            var f = d.locale || t
              , h = this._translate(n, f, this.fallbackLocale, e, r, "string", d.params);
            if (this._isFallbackRoot(h)) {
                if (!this._root)
                    throw Error("unexpected error");
                return (o = this._root).$t.apply(o, [e].concat(c))
            }
            return h = this._warnDefault(f, e, h, r, c, "string"),
            this._postTranslation && null != h && (h = this._postTranslation(h, e)),
            h
        }
        ,
        re.prototype.t = function(e) {
            for (var t, n = [], r = arguments.length - 1; r-- > 0; )
                n[r] = arguments[r + 1];
            return (t = this)._t.apply(t, [e, this.locale, this._getMessages(), null].concat(n))
        }
        ,
        re.prototype._i = function(e, t, n, r, o) {
            var c = this._translate(n, t, this.fallbackLocale, e, r, "raw", o);
            if (this._isFallbackRoot(c)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n.i(e, t, o)
            }
            return this._warnDefault(t, e, c, r, [o], "raw")
        }
        ,
        re.prototype.i = function(e, t, n) {
            return e ? (f(t) || (t = this.locale),
            this._i(e, t, this._getMessages(), null, n)) : ""
        }
        ,
        re.prototype._tc = function(e, t, n, r, o) {
            for (var c, l = [], d = arguments.length - 5; d-- > 0; )
                l[d] = arguments[d + 5];
            if (!e)
                return "";
            void 0 === o && (o = 1);
            var f = {
                count: o,
                n: o
            }
              , h = y.apply(void 0, l);
            return h.params = Object.assign(f, h.params),
            l = null === h.locale ? [h.params] : [h.locale, h.params],
            this.fetchChoice((c = this)._t.apply(c, [e, t, n, r].concat(l)), o)
        }
        ,
        re.prototype.fetchChoice = function(e, t) {
            if (!e || !f(e))
                return null;
            var n = e.split("|");
            return n[t = this.getChoiceIndex(t, n.length)] ? n[t].trim() : e
        }
        ,
        re.prototype.tc = function(e, t) {
            for (var n, r = [], o = arguments.length - 2; o-- > 0; )
                r[o] = arguments[o + 2];
            return (n = this)._tc.apply(n, [e, this.locale, this._getMessages(), null, t].concat(r))
        }
        ,
        re.prototype._te = function(e, t, n) {
            for (var r = [], o = arguments.length - 3; o-- > 0; )
                r[o] = arguments[o + 3];
            var c = y.apply(void 0, r).locale || t;
            return this._exist(n[c], e)
        }
        ,
        re.prototype.te = function(e, t) {
            return this._te(e, this.locale, this._getMessages(), t)
        }
        ,
        re.prototype.getLocaleMessage = function(e) {
            return E(this._vm.messages[e] || {})
        }
        ,
        re.prototype.setLocaleMessage = function(e, t) {
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(e, this._warnHtmlInMessage, t),
            this._vm.$set(this._vm.messages, e, t)
        }
        ,
        re.prototype.mergeLocaleMessage = function(e, t) {
            "warn" !== this._warnHtmlInMessage && "error" !== this._warnHtmlInMessage || this._checkLocaleMessage(e, this._warnHtmlInMessage, t),
            this._vm.$set(this._vm.messages, e, S(void 0 !== this._vm.messages[e] && Object.keys(this._vm.messages[e]).length ? Object.assign({}, this._vm.messages[e]) : {}, t))
        }
        ,
        re.prototype.getDateTimeFormat = function(e) {
            return E(this._vm.dateTimeFormats[e] || {})
        }
        ,
        re.prototype.setDateTimeFormat = function(e, t) {
            this._vm.$set(this._vm.dateTimeFormats, e, t),
            this._clearDateTimeFormat(e, t)
        }
        ,
        re.prototype.mergeDateTimeFormat = function(e, t) {
            this._vm.$set(this._vm.dateTimeFormats, e, S(this._vm.dateTimeFormats[e] || {}, t)),
            this._clearDateTimeFormat(e, t)
        }
        ,
        re.prototype._clearDateTimeFormat = function(e, t) {
            for (var n in t) {
                var r = e + "__" + n;
                this._dateTimeFormatters.hasOwnProperty(r) && delete this._dateTimeFormatters[r]
            }
        }
        ,
        re.prototype._localizeDateTime = function(e, t, n, r, o, c) {
            for (var l = t, d = r[l], f = this._getLocaleChain(t, n), i = 0; i < f.length; i++) {
                var h = f[i];
                if (l = h,
                !m(d = r[h]) && !m(d[o]))
                    break
            }
            if (m(d) || m(d[o]))
                return null;
            var _, v = d[o];
            if (c)
                _ = new Intl.DateTimeFormat(l,Object.assign({}, v, c));
            else {
                var y = l + "__" + o;
                (_ = this._dateTimeFormatters[y]) || (_ = this._dateTimeFormatters[y] = new Intl.DateTimeFormat(l,v))
            }
            return _.format(e)
        }
        ,
        re.prototype._d = function(e, t, n, r) {
            if (!n)
                return (r ? new Intl.DateTimeFormat(t,r) : new Intl.DateTimeFormat(t)).format(e);
            var o = this._localizeDateTime(e, t, this.fallbackLocale, this._getDateTimeFormats(), n, r);
            if (this._isFallbackRoot(o)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n.d(e, n, t)
            }
            return o || ""
        }
        ,
        re.prototype.d = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
                t[n] = arguments[n + 1];
            var r = this.locale
              , c = null
              , l = null;
            return 1 === t.length ? (f(t[0]) ? c = t[0] : d(t[0]) && (t[0].locale && (r = t[0].locale),
            t[0].key && (c = t[0].key)),
            l = Object.keys(t[0]).reduce((function(e, n) {
                var r;
                return O(o, n) ? Object.assign({}, e, ((r = {})[n] = t[0][n],
                r)) : e
            }
            ), null)) : 2 === t.length && (f(t[0]) && (c = t[0]),
            f(t[1]) && (r = t[1])),
            this._d(e, r, c, l)
        }
        ,
        re.prototype.getNumberFormat = function(e) {
            return E(this._vm.numberFormats[e] || {})
        }
        ,
        re.prototype.setNumberFormat = function(e, t) {
            this._vm.$set(this._vm.numberFormats, e, t),
            this._clearNumberFormat(e, t)
        }
        ,
        re.prototype.mergeNumberFormat = function(e, t) {
            this._vm.$set(this._vm.numberFormats, e, S(this._vm.numberFormats[e] || {}, t)),
            this._clearNumberFormat(e, t)
        }
        ,
        re.prototype._clearNumberFormat = function(e, t) {
            for (var n in t) {
                var r = e + "__" + n;
                this._numberFormatters.hasOwnProperty(r) && delete this._numberFormatters[r]
            }
        }
        ,
        re.prototype._getNumberFormatter = function(e, t, n, r, o, c) {
            for (var l = t, d = r[l], f = this._getLocaleChain(t, n), i = 0; i < f.length; i++) {
                var h = f[i];
                if (l = h,
                !m(d = r[h]) && !m(d[o]))
                    break
            }
            if (m(d) || m(d[o]))
                return null;
            var _, v = d[o];
            if (c)
                _ = new Intl.NumberFormat(l,Object.assign({}, v, c));
            else {
                var y = l + "__" + o;
                (_ = this._numberFormatters[y]) || (_ = this._numberFormatters[y] = new Intl.NumberFormat(l,v))
            }
            return _
        }
        ,
        re.prototype._n = function(e, t, n, r) {
            if (!re.availabilities.numberFormat)
                return "";
            if (!n)
                return (r ? new Intl.NumberFormat(t,r) : new Intl.NumberFormat(t)).format(e);
            var o = this._getNumberFormatter(e, t, this.fallbackLocale, this._getNumberFormats(), n, r)
              , c = o && o.format(e);
            if (this._isFallbackRoot(c)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n.n(e, Object.assign({}, {
                    key: n,
                    locale: t
                }, r))
            }
            return c || ""
        }
        ,
        re.prototype.n = function(e) {
            for (var t = [], n = arguments.length - 1; n-- > 0; )
                t[n] = arguments[n + 1];
            var o = this.locale
              , c = null
              , l = null;
            return 1 === t.length ? f(t[0]) ? c = t[0] : d(t[0]) && (t[0].locale && (o = t[0].locale),
            t[0].key && (c = t[0].key),
            l = Object.keys(t[0]).reduce((function(e, n) {
                var o;
                return O(r, n) ? Object.assign({}, e, ((o = {})[n] = t[0][n],
                o)) : e
            }
            ), null)) : 2 === t.length && (f(t[0]) && (c = t[0]),
            f(t[1]) && (o = t[1])),
            this._n(e, o, c, l)
        }
        ,
        re.prototype._ntp = function(e, t, n, r) {
            if (!re.availabilities.numberFormat)
                return [];
            if (!n)
                return (r ? new Intl.NumberFormat(t,r) : new Intl.NumberFormat(t)).formatToParts(e);
            var o = this._getNumberFormatter(e, t, this.fallbackLocale, this._getNumberFormats(), n, r)
              , c = o && o.formatToParts(e);
            if (this._isFallbackRoot(c)) {
                if (!this._root)
                    throw Error("unexpected error");
                return this._root.$i18n._ntp(e, t, n, r)
            }
            return c || []
        }
        ,
        Object.defineProperties(re.prototype, oe),
        Object.defineProperty(re, "availabilities", {
            get: function() {
                if (!J) {
                    var e = "undefined" != typeof Intl;
                    J = {
                        dateTimeFormat: e && void 0 !== Intl.DateTimeFormat,
                        numberFormat: e && void 0 !== Intl.NumberFormat
                    }
                }
                return J
            }
        }),
        re.install = B,
        re.version = "8.28.2",
        t.a = re
    },
    459: function(e, t, n) {
        "use strict";
        var r = {
            name: "ClientOnly",
            functional: !0,
            props: {
                placeholder: String,
                placeholderTag: {
                    type: String,
                    default: "div"
                }
            },
            render: function(e, t) {
                var n = t.parent
                  , r = t.slots
                  , o = t.props
                  , c = r()
                  , l = c.default;
                void 0 === l && (l = []);
                var d = c.placeholder;
                return n._isMounted ? l : (n.$once("hook:mounted", (function() {
                    n.$forceUpdate()
                }
                )),
                o.placeholderTag && (o.placeholder || d) ? e(o.placeholderTag, {
                    class: ["client-only-placeholder"]
                }, o.placeholder || d) : l.length > 0 ? l.map((function() {
                    return e(!1)
                }
                )) : e(!1))
            }
        };
        e.exports = r
    },
    465: function(e, t, n) {
        "use strict";
        n(5),
        n(54),
        n(50),
        n(351),
        n(266),
        n(48);
        var r = n(229);
        t.a = function(e, t) {
            var n = {};
            n = function(e) {
                var t = new URL(e).searchParams;
                return {
                    appId: +(t.get("appId") || r.a.appId),
                    mainAppId: +r.a.mainAppId,
                    channel: "".concat(t.get("ch") || ""),
                    reg_channel: "".concat(t.get("ch") || "")
                }
            }(window.location.href),
            t("appInfo", n)
        }
    },
    466: function(e, t, n) {
        "use strict";
        var r = n(365)
          , o = n.n(r);
        t.a = function(e, t) {
            t("eventEmitter", new o.a)
        }
    },
    467: function(e, t, n) {
        "use strict";
        (function(e) {
            n(5),
            n(54),
            n(50),
            n(351),
            n(266),
            n(193),
            n(92),
            n(506),
            n(53),
            n(99),
            n(48),
            n(18),
            n(218),
            n(165),
            n(77);
            var r = n(13)
              , o = n(78)
              , c = "prod"
              , l = "4.53.4"
              , d = !0
              , f = "pre-api-app.teststar.cc"
              , h = "api-app.qq-os.com"
              , _ = "api-base.bingx.io"
              , m = "ws-app.qq-os.com"
              , v = "ws-spot.qq-os.com"
              , y = "ws-market-swap.qq-os.com";
            function E() {
                var e = {
                    dev: {
                        protocol: "wss",
                        host: "pre-market-app.teststar.cc",
                        spot: "wss://pre-ws-spot.teststar.cc/market",
                        swap: "wss://pre-ws-swap.teststar.cc/ws",
                        privatePush: "wss://pre-private-push-app.teststar.cc/private/common/v1",
                        port: 80,
                        basePath: "/market",
                        wsLog: r.j
                    },
                    beta: {
                        protocol: "wss",
                        host: "pre-market-app.teststar.cc",
                        spot: "wss://pre-ws-spot.teststar.cc/market",
                        swap: "wss://pre-ws-swap.teststar.cc/ws",
                        privatePush: "wss://pre-private-push-app.teststar.cc/private/common/v1",
                        port: 80,
                        basePath: "/market",
                        wsLog: r.j
                    },
                    gray: {
                        protocol: "wss",
                        host: m,
                        spot: "wss://".concat(v, "/market"),
                        swap: "wss://".concat(y, "/ws"),
                        privatePush: "wss://uat-private-push-app.teststar.cc/private/common/v1",
                        port: 80,
                        basePath: "/market",
                        wsLog: r.j
                    },
                    prod: {
                        protocol: "wss",
                        host: m,
                        spot: "wss://".concat(v, "/market"),
                        swap: "wss://".concat(y, "/ws"),
                        privatePush: "wss://ws-private.we-api.com/private/common/v1",
                        port: 80,
                        basePath: "/market",
                        wsLog: r.j
                    }
                }.prod;
                return e.defaultPageSize = 40,
                e.exchangeId = r.i,
                e
            }
            t.a = function(t, n) {
                var m, v;
                console.log("%c".concat(c, "-").concat(l), "color: #F0F");
                t.req;
                var y = t.app
                  , O = y.$cookies
                  , w = y.$ua
                  , T = y.store
                  , S = "".concat(window.location.pathname).concat(window.location.search)
                  , C = window.location.host || "bingx.com"
                  , R = {
                    domain: Object(o.k)(C),
                    path: "/",
                    sameSite: "lax",
                    secure: d
                }
                  , A = O.get("uuid")
                  , I = A ? encodeURIComponent(A) : "";
                I || (I = Object(o.f)(),
                O.set("uuid", I, Object.assign({}, R, {
                    maxAge: 31536e5
                })));
                var N, k, L, P, D, x, j = w._ua && new RegExp(r.d.join("|")).test(w._ua), M = w.isFromSmartphone() || j, H = w.isFromTablet(), U = w.isFromIos(), B = w.isFromAndroidOs(), G = U && j, W = B && j, F = M ? G ? r.g.IOS_APP_H5 : W ? r.g.ANDROID_APP_H5 : U ? r.g.IOS_H5 : r.g.ANDROID_H5 : r.g.DESKTOP, V = /\/hybrid|h5|act|activity|promotion\//.test(S), Y = /preheating=1/.test(S), K = (null === (m = null == T ? void 0 : T.state) || void 0 === m ? void 0 : m.global) || (null === (v = null == T ? void 0 : T.state) || void 0 === v ? void 0 : v.core), z = ((null == K ? void 0 : K.allowAccess) || V) && !Y;
                n("appConfig", {
                    api: ("http://".concat(f),
                    "http://".concat(f),
                    "http://".concat(_),
                    x = {
                        protocol: "http",
                        host: h,
                        serverHost: "http://internal-bon-inner-gateway-1071779009.ap-southeast-1.elb.amazonaws.com",
                        authHost: "http://oauth-server.bingx.com",
                        configBase: "http://".concat(_),
                        swapHost: "38.180.105.102:3000/fake/fetch/http/api-swap.qq-os.com",
                        port: 80,
                        basePath: "/api",
                        apiLog: !1
                    },
                    x.timeout = r.b,
                    x.serverTimeout = r.a,
                    x),
                    socket: E(),
                    domains: (N = "http://" + C,
                    k = [{
                        main: "http://bingx.com",
                        c2c: "http://bingx.paycat.com",
                        swap: "http://swap.bingx.com",
                        mContract: "http://h5.bingx.com",
                        mSite: "http://m.bingx.com",
                        kyc: "http://by-dex.com"
                    }, {
                        main: "http://bingx.pro",
                        c2c: "http://bingx.paycat.info",
                        swap: "http://swap.bingx.pro",
                        mContract: "http://h5.bingx.pro",
                        mSite: "http://m.bingx.pro",
                        kyc: "http://by-dex.com"
                    }, {
                        main: "http://bingxhome.com",
                        c2c: "http://c2c.bingxhome.com",
                        swap: "http://swap.bingxhome.com",
                        mContract: "http://h5.bingxhome.com",
                        mSite: "http://m.bingxhome.com",
                        kyc: "http://by-dex.com"
                    }, {
                        main: "http://bingxtech.com",
                        c2c: "http://bingx.paycat.info",
                        swap: "http://swap.bingxtech.com",
                        mContract: "http://h5.bingxtech.com",
                        mSite: "http://m.bingxtech.com",
                        kyc: "http://by-dex.com"
                    }, {
                        main: "http://bingxzone.com",
                        c2c: "http://bingx.paycat.info",
                        swap: "http://swap.bingxzone.com",
                        mContract: "http://h5.bingxzone.com",
                        mSite: "http://m.bingxzone.com",
                        kyc: "http://by-dex.com"
                    }, {
                        main: "http://bingx.io",
                        c2c: "http://bingx.paycat.info",
                        swap: "http://swap.bingx.io",
                        mContract: "http://h5.bingx.io",
                        mSite: "http://m.bingx.io",
                        kyc: "http://by-dex.com"
                    }],
                    L = {
                        dev: {
                            main: e.env.MAIN_DOMAIN || "",
                            c2c: "http://pre-web-c2c.teststar.cc",
                            swap: "http://pre-swap.teststar.cc",
                            mContract: "http://pre-bb-contract.teststar.cc",
                            mSite: "http://pre-m.teststar.cc",
                            kyc: "http://pre-web.by-dex.com"
                        },
                        beta: {
                            main: "http://pre-web.teststar.cc",
                            c2c: "http://pre-web-c2c.teststar.cc",
                            swap: "http://pre-swap.teststar.cc",
                            mContract: "http://pre-bb-contract.teststar.cc",
                            mSite: "http://pre-m.teststar.cc",
                            kyc: "http://pre-web.by-dex.com"
                        },
                        gray: {
                            main: "http://uat.bingx.com",
                            c2c: "http://uat.paycat.com",
                            swap: "http://uat-swap.bingx.com",
                            mContract: "http://h5.bingx.com",
                            mSite: "http://uat-m.bingx.com",
                            kyc: "http://uat.by-dex.com"
                        },
                        prod: k[0]
                    },
                    P = new URL(N).host,
                    D = k.find((function(e) {
                        return Object.values(e).join("|").includes(P)
                    }
                    )),
                    D || L.prod),
                    isInApp: j,
                    isMobile: M,
                    isTablet: H,
                    isIos: U,
                    isAndroid: B,
                    isIosApp: G,
                    isAndroidApp: W,
                    cookiesOptions: R,
                    env: "production",
                    runEnv: c,
                    version: l,
                    enableArms: z,
                    sentryEnable: z,
                    enableLogger: !1,
                    lang: "zh_HK",
                    uuid: I,
                    platformId: F
                })
            }
        }
        ).call(this, n(265))
    },
    468: function(e, t, n) {
        "use strict";
        n(48),
        n(548),
        n(65),
        n(80),
        n(92),
        n(5),
        n(77),
        n(54),
        n(50),
        n(266);
        t.a = function(e, t) {
            var n = e.app;
            e.$appConfig;
            t("getLocalePath", (function(e, t) {
                var r = t && t.locale ? t.locale : n.i18n.locale
                  , o = t && t.baseDomain ? t.baseDomain : n.$appConfig.domains.main;
                if ("string" == typeof e)
                    return "".concat(o, "/").concat(r).concat(e).concat(e.endsWith("/") ? "" : "/");
                var c = "";
                if (e.path)
                    c = "/".concat(r).concat(e.path),
                    e.params && console.warn("暂时不能处理 path + params 的组合，请使用 name+params 组合");
                else if (e.name) {
                    var l = e.name.split("-");
                    e.params && (l = l.map((function(t) {
                        return e.params[t] ? e.params[t] : t
                    }
                    ))),
                    c = "/".concat(r, "/").concat(l.join("/"))
                }
                var d = new URLSearchParams(e.query).toString();
                return "".concat(o).concat(c).concat(c.endsWith("/") ? "" : "/").concat(d ? "?" + d : "")
            }
            ))
        }
    },
    469: function(e, t, n) {
        "use strict";
        n(45),
        n(44),
        n(63),
        n(66);
        var r = n(3)
          , o = (n(5),
        n(40),
        n(43),
        n(48),
        n(53),
        n(83));
        function c(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function l(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? c(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : c(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var d = "kline_color_type"
          , f = "theme";
        t.a = function(e, t) {
            var n = e.app
              , r = n.$cookies
              , c = n.$appConfig;
            t("theme", {
                getThemeConfig: o.r,
                getKlineColorConfig: o.p,
                getThemeConfigInlineStyle: function(e) {
                    var t = Object(o.r)(e)
                      , n = "";
                    return Object.keys(t).forEach((function(e) {
                        n += "--".concat(e, ": ").concat(t[e], ";")
                    }
                    )),
                    ":root{\n          ".concat(n, "\n      }")
                },
                setKlineColorType: function(e) {
                    r.set(d, e, l(l({}, c.cookiesOptions), {}, {
                        maxAge: 31536e5
                    }))
                },
                getKlineColorType: function() {
                    return r.get(d) || o.t.GURD
                },
                setTheme: function(e) {
                    r.set(f, e, l(l({}, c.cookiesOptions), {}, {
                        maxAge: 31536e5
                    }))
                },
                getTheme: function() {
                    var e = r.get(f);
                    return ["light", "dark"].includes(e) ? e : "light"
                }
            })
        }
    },
    470: function(e, t, n) {
        "use strict";
        var r = n(6)
          , o = (n(103),
        n(48),
        n(5),
        n(54),
        n(50),
        n(98),
        n(77),
        n(18),
        n(142),
        n(399))
          , c = n.n(o)
          , l = n(83)
          , d = n(245)
          , f = n(110)
          , h = n(13)
          , _ = n(120)
          , m = function(e) {
            if (!e)
                return "";
            var t = e.length
              , n = e.substring(0, 10)
              , r = e.substring(t - 10, t);
            return "".concat(n, "***").concat(r)
        };
        t.a = function(e) {
            var t = e.app
              , n = t.$appConfig
              , o = t.router
              , v = t.$cookies
              , y = t.$eventEmitter
              , E = t.$log
              , O = t.$ua
              , w = t.$theme
              , T = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                    isLogin: !1
                };
                v.remove(h.l),
                e.isLogin && v.set(h.l, e.token, n.cookiesOptions),
                e.isLogin && (y ? y.emit(f.a, e) : d.a.emit(f.a, e))
            };
            o && o.beforeEach(function() {
                var e = Object(r.a)(regeneratorRuntime.mark((function e(r, o, d) {
                    var f, y, S, C, R, A, I, N, k, code;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (f = v.get(h.l),
                                !n.isInApp) {
                                    e.next = 18;
                                    break
                                }
                                return e.prev = 2,
                                y = t.$bridge.getAppInfo(),
                                S = {
                                    1: l.t.GURD,
                                    2: l.t.RUGD
                                },
                                w && (w.setKlineColorType(S["".concat(y.klineColorMode || "1")]),
                                w.setTheme(y.theme || "light")),
                                (C = t.$bridge.getDeviceId() || "") && v.set("app_device_id", C, n.cookiesOptions),
                                e.next = 10,
                                Promise.race([t.$bridge.getToken(!1), new Promise((function(e) {
                                    setTimeout((function() {
                                        console.log("get token time out"),
                                        e({
                                            source: "app",
                                            timeout: !0
                                        })
                                    }
                                    ), 5e3)
                                }
                                ))]);
                            case 10:
                                "app" === (R = e.sent).source && (T({
                                    isLogin: !!R.token,
                                    token: R.token || null
                                }),
                                A = R.token !== (v.get(h.l) || ""),
                                E({
                                    type: "sys",
                                    event: _.b.APP_GET_TOKEN_RESULT,
                                    prop: {
                                        success: "0",
                                        login: R.token ? "0" : "1",
                                        newToken: m(R.token || ""),
                                        oldToken: m(f || ""),
                                        currentToken: m(v.get(h.l) || ""),
                                        detail: "".concat(R.timeout ? "timeout" : "", "; ").concat(A ? "token_not_match" : "token_match"),
                                        userAgent: O && O._ua
                                    }
                                })),
                                e.next = 18;
                                break;
                            case 14:
                                e.prev = 14,
                                e.t0 = e.catch(2),
                                T({
                                    isLogin: !1
                                }),
                                E({
                                    type: "sys",
                                    event: _.b.APP_GET_TOKEN_RESULT,
                                    prop: {
                                        success: "1",
                                        login: "1",
                                        newToken: "",
                                        oldToken: m(f || ""),
                                        currentToken: m(v.get(h.l) || ""),
                                        detail: "".concat(e.t0 && e.t0.toString()),
                                        userAgent: O && O._ua
                                    }
                                });
                            case 18:
                                I = r.fullPath,
                                (N = I.split("?")).length > 1 && (k = decodeURIComponent(N[1]).match(/ref=(.*)/),
                                code = r.query && r.query.ref || k && k[1] || null,
                                "[object Array]" === Object.prototype.toString.call(code) && code.length > 0 && (code = code[0]),
                                code && c.a.get("inviteCode") !== code && c.a.set("inviteCode", code && code.substr(0, 36))),
                                d();
                            case 20:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[2, 14]])
                }
                )));
                return function(t, n, r) {
                    return e.apply(this, arguments)
                }
            }()),
            o && o.afterEach((function(e) {
                t.$gtag && (t.$gtag("set", "page", e.fullPath),
                t.$gtag("send", "pageview"))
            }
            ))
        }
    },
    472: function(e, t, n) {
        "use strict";
        n(45),
        n(63),
        n(66),
        n(49),
        n(65),
        n(121),
        n(54),
        n(129),
        n(131),
        n(50);
        var r = n(12)
          , o = n(6)
          , c = n(3)
          , l = n(26)
          , d = n(27)
          , f = (n(103),
        n(53),
        n(18),
        n(5),
        n(40),
        n(98),
        n(48),
        n(193),
        n(44),
        n(43),
        n(99),
        n(76),
        n(157))
          , h = n.n(f)
          , _ = n(310)
          , m = n.n(_)
          , v = n(632)
          , y = n.n(v)
          , E = n(929)
          , O = n(683)
          , w = n(67)
          , T = n(120)
          , S = n(318);
        function C(e, t) {
            var n = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (!n) {
                if (Array.isArray(e) || (n = function(e, t) {
                    if (!e)
                        return;
                    if ("string" == typeof e)
                        return R(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    "Object" === n && e.constructor && (n = e.constructor.name);
                    if ("Map" === n || "Set" === n)
                        return Array.from(e);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                        return R(e, t)
                }(e)) || t && e && "number" == typeof e.length) {
                    n && (e = n);
                    var i = 0
                      , r = function() {};
                    return {
                        s: r,
                        n: function() {
                            return i >= e.length ? {
                                done: !0
                            } : {
                                done: !1,
                                value: e[i++]
                            }
                        },
                        e: function(e) {
                            throw e
                        },
                        f: r
                    }
                }
                throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
            var o, c = !0, l = !1;
            return {
                s: function() {
                    n = n.call(e)
                },
                n: function() {
                    var e = n.next();
                    return c = e.done,
                    e
                },
                e: function(e) {
                    l = !0,
                    o = e
                },
                f: function() {
                    try {
                        c || null == n.return || n.return()
                    } finally {
                        if (l)
                            throw o
                    }
                }
            }
        }
        function R(e, t) {
            (null == t || t > e.length) && (t = e.length);
            for (var i = 0, n = new Array(t); i < t; i++)
                n[i] = e[i];
            return n
        }
        function A(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function I(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? A(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : A(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var N = "V9.5"
          , k = "apiRoutingDetect_domainConfig".concat(N)
          , L = "apiRoutingDetect_domainConfigCurrent".concat(N)
          , P = "ARD_curTestConf_v2"
          , D = "prod"
          , x = ["dev", "beta"].includes(D)
          , j = ["dev", "beta", "gray"].includes(D)
          , M = {}
          , H = j
          , U = {
            dev: {
                configs: {
                    hostv2: {
                        swapMarketBusinessHosts: '{"hosts":[{"host":"http://pre-swap-api.teststar.cc","priority":5},{"host":"pre-swap-api.teststar.cc","priority":4}],"probeUri":"/api/v1/quote/check/health"}',
                        probeMaxInterval: "60",
                        testBusinessHosts: '{\n    "hosts": [\n        {\n            "name": "产品线测试环境1",\n            "header": "pre-product1"\n        },\n        {\n            "name": "产品线测试环境2",\n            "header": "pre-product2"\n        },\n        {\n            "name": "市场线测试环境1",\n            "header": "pre-growth1"\n        },\n        {\n            "name": "社交线测试环境1",\n            "header": "pre-social1"\n        },\n        {\n            "name": "社交线测试环境2",\n            "header": "pre-social2"\n        },\n        {\n            "name": "发布前验证环境1",\n            "header": "pre-release1"\n        },\n        {\n            "name": "产品线开发环境1",\n            "header": "dev-product1"\n        },\n        {\n            "name": "产品线开发环境2",\n            "header": "dev-product2"\n        },\n        {\n            "name": "产品线开发环境3",\n            "header": "dev-product3"\n        },\n        {\n            "name": "产品线开发环境4",\n            "header": "dev-product4"\n        },\n        {\n            "name": "产品线开发环境5",\n            "header": "dev-product5"\n        },\n        {\n            "name": "产品线开发环境6",\n            "header": "dev-product6"\n        },\n        {\n            "name": "市场线开发环境1",\n            "header": "dev-growth1"\n        },\n        {\n            "name": "市场线开发环境2",\n            "header": "dev-growth2"\n        },\n        {\n            "name": "社交线开发环境1",\n            "header": "dev-social1"\n        },\n        {\n            "name": "社交线开发环境2",\n            "header": "dev-social2"\n        },\n        {\n            "name": "社交线开发环境3",\n            "header": "dev-social3"\n        },\n        {\n            "name": "压测环境",\n            "header": "press-gateway"\n        }\n    ],\n    "url": "http://pre-api-app.teststar.cc"\n}',
                        wsPrivatePushHosts: '{"hosts":[{"host":"wss://pre-private-push-app.teststar.cc","priority":5},{"host":"wss://pre-private-push-app.teststar.cc","priority":4}],"probeUri":"/health"}',
                        swapBusinessHosts: '{"hosts":[{"host":"http://pre-swap-api.teststar.cc","priority":5},{"host":"http://pre-swap-api.teststar.cc","priority":4}],"probeUri":"/api/v1/bingbon/check/health"}',
                        wsBusinessHosts: '{"hosts":[{"host":"wss://pre-market-app.teststar.cc","priority":5},{"host":"wss://pre-market-app.teststar.cc","priority":4}],"probeUri":"/health"}',
                        slowTime: "4",
                        spotWsBusinessHosts: '{"hosts":[{"host":"wss://pre-ws-spot.teststar.cc","priority":6}],"probeUri":"/health"}',
                        businessHosts: '{\n    "hosts": [{\n        "host": "pre-web.teststar.cc",\n        "priority": 5\n    }, {\n        "host": "http://pre-api2.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://pre-api3.teststar.cc",\n        "priority": 5\n    }, {\n        "host": "http://pre-api4.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://pre-api5.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://pre-api6.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://api-gateway.cmlucky.com",\n        "priority": 4\n    }],\n    "probeUri": "/health"\n}',
                        swapWsBusinessHosts: '{"hosts":[{"host":"wss://pre-ws-swap.teststar.cc","priority":5},{"host":"wss://pre-ws-swap.teststar.cc","priority":4}],"probeUri":"/health"}',
                        probeInitInterval: "5"
                    }
                },
                mainVersion: "1.1.3"
            },
            beta: {
                configs: {
                    hostv2: {
                        swapMarketBusinessHosts: '{"hosts":[{"host":"http://pre-swap-api.teststar.cc","priority":5},{"host":"pre-swap-api.teststar.cc","priority":4}],"probeUri":"/api/v1/quote/check/health"}',
                        probeMaxInterval: "60",
                        testBusinessHosts: '{\n    "hosts": [\n        {\n            "name": "产品线测试环境1",\n            "header": "pre-product1"\n        },\n        {\n            "name": "产品线测试环境2",\n            "header": "pre-product2"\n        },\n        {\n            "name": "市场线测试环境1",\n            "header": "pre-growth1"\n        },\n        {\n            "name": "社交线测试环境1",\n            "header": "pre-social1"\n        },\n        {\n            "name": "社交线测试环境2",\n            "header": "pre-social2"\n        },\n        {\n            "name": "发布前验证环境1",\n            "header": "pre-release1"\n        },\n        {\n            "name": "产品线开发环境1",\n            "header": "dev-product1"\n        },\n        {\n            "name": "产品线开发环境2",\n            "header": "dev-product2"\n        },\n        {\n            "name": "产品线开发环境3",\n            "header": "dev-product3"\n        },\n        {\n            "name": "产品线开发环境4",\n            "header": "dev-product4"\n        },\n        {\n            "name": "产品线开发环境5",\n            "header": "dev-product5"\n        },\n        {\n            "name": "产品线开发环境6",\n            "header": "dev-product6"\n        },\n        {\n            "name": "市场线开发环境1",\n            "header": "dev-growth1"\n        },\n        {\n            "name": "市场线开发环境2",\n            "header": "dev-growth2"\n        },\n        {\n            "name": "社交线开发环境1",\n            "header": "dev-social1"\n        },\n        {\n            "name": "社交线开发环境2",\n            "header": "dev-social2"\n        },\n        {\n            "name": "社交线开发环境3",\n            "header": "dev-social3"\n        },\n        {\n            "name": "压测环境",\n            "header": "press-gateway"\n        }\n    ],\n    "url": "http://pre-api-app.teststar.cc"\n}',
                        wsPrivatePushHosts: '{"hosts":[{"host":"wss://pre-private-push-app.teststar.cc","priority":5},{"host":"wss://pre-private-push-app.teststar.cc","priority":4}],"probeUri":"/health"}',
                        swapBusinessHosts: '{"hosts":[{"host":"http://pre-swap-api.teststar.cc","priority":5},{"host":"http://pre-swap-api.teststar.cc","priority":4}],"probeUri":"/api/v1/bingbon/check/health"}',
                        wsBusinessHosts: '{"hosts":[{"host":"wss://pre-market-app.teststar.cc","priority":5},{"host":"wss://pre-market-app.teststar.cc","priority":4}],"probeUri":"/health"}',
                        slowTime: "4",
                        spotWsBusinessHosts: '{"hosts":[{"host":"wss://pre-ws-spot.teststar.cc","priority":6}],"probeUri":"/health"}',
                        businessHosts: '{\n    "hosts": [{\n        "host": "pre-web.teststar.cc",\n        "priority": 5\n    }, {\n        "host": "http://pre-api2.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://pre-api3.teststar.cc",\n        "priority": 5\n    }, {\n        "host": "http://pre-api4.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://pre-api5.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://pre-api6.teststar.cc",\n        "priority": 4\n    }, {\n        "host": "http://api-gateway.cmlucky.com",\n        "priority": 4\n    }],\n    "probeUri": "/health"\n}',
                        swapWsBusinessHosts: '{"hosts":[{"host":"wss://pre-ws-swap.teststar.cc","priority":5},{"host":"wss://pre-ws-swap.teststar.cc","priority":4}],"probeUri":"/health"}',
                        probeInitInterval: "5"
                    }
                },
                mainVersion: "1.1.3"
            },
            gray: {
                configs: {
                    host: {
                        businessHosts: "http://api-app.luck-in.com"
                    },
                    hostv2: {
                        probeMaxInterval: "60",
                        swapMarketBusinessHosts: '{"hosts":[{"host":"http://market-swap.we-api.com","priority":5},{"host":"http://market-swap.qq-os.com","priority":4},{"host":"http://market-swap.luck-in.com","priority":3}],"probeUri":"/api/v1/quote/check/health"}',
                        testBusinessHosts: '{"hosts":[{"name":"灰度1","header":"gray-develop"},{"name":"灰度2","header":"gray-merge"}]}',
                        wsPrivatePushHosts: '{"hosts":[{"host":"wss://uat-private-push-app.teststar.cc","priority":5}],"probeUri":"/health"}',
                        swapBusinessHosts: '{"hosts":[{"host":"http://gray-ct-38.180.105.102:3000/fake/fetch/http/api-swap.qq-os.com","priority":6}],"probeUri":"/health"}',
                        businessHostsBak: '{"hosts":[{"host":"http://uat.bingx.com","priority":6},{"host":"http://api-app.we-api.com","priority":5},{"host":"http://api-app.qq-os.com","priority":4}],"probeUri":"/health"}',
                        slowTime: "5",
                        wsBusinessHosts: '{"hosts":[{"host":"wss://ws-uat-app.teststar.cc","priority":5}],"probeUri":"/health"}',
                        spotWsBusinessHosts: '{"hosts":[{"host":"wss://ws-uat-spot.teststar.cc","priority":5}],"probeUri":"/health"}',
                        businessHosts: '{"hosts":[{"host":"http://gray-ct-api-app.qq-os.com","priority":6}],"probeUri":"/health"}',
                        swapWsBusinessHosts: '{"hosts":[{"host":"wss://ws-market-swap.we-api.com", "priority":5},{"host":"wss://ws-market-swap.qq-os.com","priority":4}],"probeUri":"/health"}',
                        probeInitInterval: "5"
                    }
                }
            },
            prod: {
                configs: {
                    host: {
                        businessHosts: "http://api-app.luck-in.com"
                    },
                    hostv2: {
                        probeMaxInterval: "60",
                        swapMarketBusinessHosts: '{"hosts":[{"host":"http://market-swap.we-api.com","priority":5},{"host":"http://market-swap.qq-os.com","priority":4},{"host":"http://market-swap.luck-in.com","priority":3}],"probeUri":"/api/v1/quote/check/health"}',
                        testBusinessHosts: '{"hosts":[{"name":"灰度1","header":"gray-develop"},{"name":"灰度2","header":"gray-merge"}]}',
                        wsPrivatePushHosts: '{"hosts":[{"host":"wss://ws-private.we-api.com","priority":5},{"host":"wss://ws-private.qq-os.com","priority":4}],"probeUri":"/health"}',
                        swapBusinessHosts: '{"hosts":[{"host":"http://api-swap.we-api.com","priority":5},{"host":"http://38.180.105.102:3000/fake/fetch/http/api-swap.qq-os.com","priority":4},{"host":"http://api-swap.luck-in.com","priority":3}],"probeUri":"/api/v1/bingbon/check/health"}',
                        slowTime: "5",
                        wsBusinessHosts: '{"hosts":[{"host":"wss://ws-app.we-api.com","priority":5},{"host":"wss://ws-app.qq-os.com","priority":4}],"probeUri":"/health"}',
                        spotWsBusinessHosts: '{"hosts":[{"host":"wss://ws-spot.we-api.com","priority":6},{"host":"wss://ws-spot.qq-os.com","priority":5}],"probeUri":"/health"}',
                        businessHosts: '{"hosts":[{"host":"http://bingx.com","priority":6},{"host":"http://api-app.we-api.com","priority":5},{"host":"http://api-app.qq-os.com","priority":4},{"host":"http://api-app.luck-in.com","priority":3}],"probeUri":"/health"}',
                        swapWsBusinessHosts: '{"hosts":[{"host":"wss://ws-market-swap.we-api.com", "priority":5},{"host":"wss://ws-market-swap.qq-os.com","priority":4}],"probeUri":"/health"}',
                        probeInitInterval: "5"
                    }
                }
            }
        }
          , B = function() {
            function e(t) {
                var n = this;
                Object(l.a)(this, e),
                this._appId = 0,
                this._mainAppId = 0,
                this._log = null,
                this.domainConfig = null,
                this.detectTimer = 0,
                this.googleDelay = 0,
                this.isListenedChangeEvent = !1,
                this.isVisibility = !0,
                this.shouldRefreshDetectAll = !1,
                this.detectRecord = {
                    businessHosts: {
                        disabledDomain: "",
                        detecting: !1,
                        times: 0,
                        lastTime: ""
                    },
                    wsBusinessHosts: {
                        disabledDomain: "",
                        detecting: !1,
                        times: 0,
                        lastTime: ""
                    },
                    spotWsBusinessHosts: {
                        disabledDomain: "",
                        detecting: !1,
                        times: 0,
                        lastTime: ""
                    },
                    wsPrivatePushHosts: {
                        disabledDomain: "",
                        detecting: !1,
                        times: 0,
                        lastTime: ""
                    },
                    swapWsBusinessHosts: {
                        disabledDomain: "",
                        detecting: !1,
                        times: 0,
                        lastTime: ""
                    },
                    swapBusinessHosts: {
                        disabledDomain: "",
                        detecting: !1,
                        times: 0,
                        lastTime: ""
                    }
                },
                this.currentTestConfig = {
                    header: "",
                    autoSwitch: !0
                },
                this.currentConfig = {
                    businessHosts: {
                        host: "",
                        delay: 0,
                        autoSwitch: !0
                    },
                    wsBusinessHosts: {
                        host: "",
                        delay: 0,
                        autoSwitch: !0
                    },
                    spotWsBusinessHosts: {
                        host: "",
                        delay: 0,
                        autoSwitch: !0
                    },
                    wsPrivatePushHosts: {
                        host: "",
                        delay: 0,
                        autoSwitch: !0
                    },
                    swapWsBusinessHosts: {
                        host: "",
                        delay: 0,
                        autoSwitch: !0
                    },
                    swapBusinessHosts: {
                        host: "",
                        delay: 0,
                        autoSwitch: !0
                    }
                },
                this.detectHistory = {
                    businessHosts: {},
                    wsBusinessHosts: {},
                    spotWsBusinessHosts: {},
                    wsPrivatePushHosts: {},
                    swapBusinessHosts: {},
                    swapWsBusinessHosts: {}
                },
                this.enableHostTypes = [],
                this.initialed = !1,
                this.interfaceCostRecordsSubscribes = [],
                this.interfaceCostRecords = {
                    businessHosts: [],
                    wsBusinessHosts: [],
                    spotWsBusinessHosts: [],
                    wsPrivatePushHosts: [],
                    swapBusinessHosts: [],
                    swapWsBusinessHosts: []
                },
                this.store = {
                    set: function(e, t) {
                        try {
                            window[H ? "localStorage" : "sessionStorage"].setItem(e, JSON.stringify(t))
                        } catch (e) {
                            console.log("can not set storage", e && e.message)
                        }
                    },
                    get: function(e) {
                        var t = window[H ? "localStorage" : "sessionStorage"].getItem(e);
                        try {
                            return t && JSON.parse(t)
                        } catch (e) {
                            return t
                        }
                    },
                    remove: function(e) {
                        window[H ? "localStorage" : "sessionStorage"].removeItem(e)
                    }
                },
                this.executeInterfaceCostRecordsSubscribes = Object(E.a)((function() {
                    n.interfaceCostRecordsSubscribes.length && n.interfaceCostRecordsSubscribes.forEach((function(e) {
                        e && e()
                    }
                    ))
                }
                ), 5e3);
                var r = t.app
                  , o = r.$appInfo
                  , c = o.appId
                  , d = o.mainAppId;
                this._appId = c,
                this._mainAppId = d,
                this._log = r.$log,
                this._config = r.$appConfig,
                this._cookies = r.$cookies,
                this.host = (null === window || void 0 === window ? void 0 : window.location.host) || "",
                this.http = h.a.create({
                    withCredentials: !0,
                    headers: Object(S.b)(I({
                        appId: this._appId,
                        "Content-Type": "application/json"
                    }, M), void 0, Date.now(), r, t),
                    transformResponse: [function(data) {
                        return m()({
                            storeAsString: !0
                        }).parse(data)
                    }
                    ],
                    transformRequest: [function(data, e) {
                        var t = Date.now();
                        e.timestamp = "".concat(t);
                        var n = Object(w.c)({
                            timestamp: t,
                            traceId: null == e ? void 0 : e.traceId,
                            deviceId: null == e ? void 0 : e.device_id,
                            platformId: null == e ? void 0 : e.platformId,
                            appVersion: null == e ? void 0 : e.app_version,
                            requestPayload: {}
                        }).sign;
                        return e.sign = n,
                        data
                    }
                    ]
                })
            }
            var t;
            return Object(d.a)(e, [{
                key: "initial",
                value: (t = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n, o, c, l, d, f = this;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (this.enableHostTypes = t && t.enableHostTypes || ["businessHosts", "wsBusinessHosts", "spotWsBusinessHosts", "wsPrivatePushHosts", "swapWsBusinessHosts", "swapBusinessHosts"],
                                !this.initialed) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", !0);
                            case 3:
                                e.next = 6;
                                break;
                            case 6:
                                if (this.isListenedChangeEvent || (n = navigator,
                                o = (null == n ? void 0 : n.connection) || (null == n ? void 0 : n.mozConnection) || (null == n ? void 0 : n.webkitConnection),
                                this.isListenedChangeEvent = !0,
                                document.addEventListener("visibilitychange", this.onVisibilitychange),
                                o && o.addEventListener("change", this.onConnectionChange)),
                                c = function(e) {
                                    e && (f.domainConfig = e,
                                    f.store.set(k, e));
                                    var t = f.store.get(L);
                                    if (t && (f.currentConfig = t),
                                    j) {
                                        var n = f.getCurrentTestConfigCacheKeyData();
                                        n && (f.currentTestConfig = n)
                                    }
                                    f.initialed = !0,
                                    f.crateTimer(),
                                    window.addEventListener("load", (function() {
                                        setTimeout((function() {
                                            f.detectAll(),
                                            f.detectGoogle(),
                                            console.log("api routing initialed")
                                        }
                                        ), 6e3)
                                    }
                                    ), {
                                        once: !0
                                    })
                                }
                                ,
                                !((l = this.store.get(k)) && l._preUnit && Date.now() - l._preUnit <= 864e5)) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return", c(l));
                            case 11:
                                return e.next = 13,
                                this.http.request({
                                    method: "GET",
                                    url: "api/v2/config/base",
                                    baseURL: this.api.configBase
                                }).then((function(e) {
                                    if (e.data && 0 === e.data.code) {
                                        var t = e.data.data;
                                        return t && "object" === Object(r.a)(t) ? Object.assign(t, {
                                            _preUnit: Date.now()
                                        }) : e.data.data
                                    }
                                    return null
                                }
                                )).catch((function() {
                                    return U.prod || null
                                }
                                ));
                            case 13:
                                return d = e.sent,
                                e.abrupt("return", c(d));
                            case 15:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, this)
                }
                ))),
                function(e) {
                    return t.apply(this, arguments)
                }
                )
            }, {
                key: "api",
                get: function() {
                    return this._config.api
                }
            }, {
                key: "betaHeader",
                get: function() {
                    return this.currentTestConfig.autoSwitch ? "" : this.currentTestConfig.header
                }
            }, {
                key: "hostConfig",
                get: function() {
                    return this.initialed ? this.domainConfig && this.domainConfig.configs && this.domainConfig.configs.hostv2 : null
                }
            }, {
                key: "testBusinessHosts",
                get: function() {
                    return this.hostConfig && j && this.hostConfig.testBusinessHosts ? JSON.parse(this.hostConfig.testBusinessHosts) : null
                }
            }, {
                key: "businessHosts",
                get: function() {
                    return this.hostConfig ? JSON.parse(this.hostConfig.businessHosts) : null
                }
            }, {
                key: "wsBusinessHosts",
                get: function() {
                    return this.hostConfig ? JSON.parse(this.hostConfig.wsBusinessHosts) : null
                }
            }, {
                key: "spotWsBusinessHosts",
                get: function() {
                    return this.hostConfig ? JSON.parse(this.hostConfig.spotWsBusinessHosts) : null
                }
            }, {
                key: "wsPrivatePushHosts",
                get: function() {
                    return this.hostConfig ? JSON.parse(this.hostConfig.wsPrivatePushHosts) : null
                }
            }, {
                key: "swapWsBusinessHosts",
                get: function() {
                    return this.hostConfig ? JSON.parse(this.hostConfig.swapWsBusinessHosts) : null
                }
            }, {
                key: "swapBusinessHosts",
                get: function() {
                    return this.hostConfig ? JSON.parse(this.hostConfig.swapBusinessHosts) : null
                }
            }, {
                key: "probeMaxInterval",
                get: function() {
                    return this.hostConfig ? this.hostConfig.probeMaxInterval : 60
                }
            }, {
                key: "slowTime",
                get: function() {
                    return this.hostConfig ? 1e3 * +this.hostConfig.slowTime : 3e3
                }
            }, {
                key: "weakNetworkThreshold",
                get: function() {
                    return 2e3
                }
            }, {
                key: "apiBase",
                get: function() {
                    return this.initialed && this.currentConfig.businessHosts.host ? this.businessHosts.hosts && 1 === this.businessHosts.hosts.length ? "".concat(this.businessHosts.hosts[0].host) : "".concat(this.currentConfig.businessHosts.host) : this.api ? "".concat(this.api.protocol, "://").concat(this.api.host) : ""
                }
            }, {
                key: "wsBase",
                get: function() {
                    return this.initialed && this.currentConfig.wsBusinessHosts.host ? this.wsBusinessHosts && this.wsBusinessHosts.hosts && 1 === this.wsBusinessHosts.hosts.length ? this.wsBusinessHosts.hosts[0].host : this.currentConfig.wsBusinessHosts.host : "".concat(this._config.socket.protocol, "://").concat(this._config.socket.host)
                }
            }, {
                key: "spotWsBase",
                get: function() {
                    return this.initialed && this.currentConfig.wsBusinessHosts.host ? this.spotWsBusinessHosts && this.spotWsBusinessHosts.hosts && 1 === this.spotWsBusinessHosts.hosts.length ? "".concat(this.spotWsBusinessHosts.hosts[0].host, "/market") : "".concat(this.currentConfig.spotWsBusinessHosts.host, "/market") : "".concat(this._config.socket.spot)
                }
            }, {
                key: "wsPrivatePushBase",
                get: function() {
                    return this.initialed && this.currentConfig.wsPrivatePushHosts.host ? this.wsPrivatePushHosts && this.wsPrivatePushHosts.hosts && 1 === this.wsPrivatePushHosts.hosts.length ? "".concat(this.wsPrivatePushHosts.hosts[0].host, "/ws") : "".concat(this.currentConfig.wsPrivatePushHosts.host, "/ws") : "".concat(this._config.socket.privatePush)
                }
            }, {
                key: "swapBase",
                get: function() {
                    return this.initialed && this.currentConfig.swapWsBusinessHosts && this.currentConfig.swapWsBusinessHosts.host ? this.swapWsBusinessHosts && this.swapWsBusinessHosts.hosts && 1 === this.swapWsBusinessHosts.hosts.length ? "".concat(this.swapWsBusinessHosts.hosts[0].host, "/ws") : "".concat(this.currentConfig.swapWsBusinessHosts.host, "/ws") : "".concat(this._config.socket.swap)
                }
            }, {
                key: "swapApiBase",
                get: function() {
                    return this.initialed && this.currentConfig.swapBusinessHosts && this.currentConfig.swapBusinessHosts.host ? this.swapBusinessHosts && this.swapBusinessHosts.hosts && 1 === this.swapBusinessHosts.hosts.length ? "".concat(this.swapBusinessHosts.hosts[0].host) : "".concat(this.currentConfig.swapBusinessHosts && this.currentConfig.swapBusinessHosts.host) : "http://".concat(this._config.api.swapHost)
                }
            }, {
                key: "authBase",
                get: function() {
                    return this.initialed ? "" : "".concat(this.api.protocol, "://").concat(this.api.swapHost)
                }
            }, {
                key: "onVisibilitychange",
                value: function() {
                    var e = "visible" === document.visibilityState;
                    this.shouldRefreshDetectAll && e && (this.shouldRefreshDetectAll = !1,
                    this.detectAll()),
                    this.isVisibility = e
                }
            }, {
                key: "onConnectionChange",
                value: function() {
                    this.isVisibility ? this.detectAll() : this.shouldRefreshDetectAll = !0
                }
            }, {
                key: "getDiffApi",
                value: function(e, t) {
                    var n = this[e];
                    return n.hosts.length < 2 ? t : n.hosts.find((function(e) {
                        return e.host !== t
                    }
                    )).host || t
                }
            }, {
                key: "getDelayTime",
                value: function(e) {
                    var t = this.detectRecord[e];
                    if (0 === t.times)
                        return 0;
                    var n = 5 * Math.pow(2, t.times - 1);
                    return 1e3 * (n > 60 ? 60 : n)
                }
            }, {
                key: "crateTimer",
                value: function() {
                    var e = this;
                    this.detectTimer = setInterval((function() {
                        e.detectAll(1),
                        e.detectGoogle()
                    }
                    ), 3e5)
                }
            }, {
                key: "destroy",
                value: function() {
                    this.initialed = !1,
                    clearInterval(this.detectTimer),
                    this.detectTimer = null;
                    var e = navigator
                      , t = (null == e ? void 0 : e.connection) || (null == e ? void 0 : e.mozConnection) || (null == e ? void 0 : e.webkitConnection);
                    document.removeEventListener("visibilitychange", this.onVisibilitychange),
                    t && t.removeEventListener("change", this.onConnectionChange),
                    this.isListenedChangeEvent = !1
                }
            }, {
                key: "updateCurrentTestConfig",
                value: function(e) {
                    this.currentTestConfig = e,
                    this._cookies.set(P, w.d.encode(JSON.stringify(this.currentTestConfig)), {
                        domain: "",
                        path: "/"
                    })
                }
            }, {
                key: "getCurrentTestConfigCacheKeyData",
                value: function() {
                    var e = this._cookies.get(P) || null;
                    try {
                        e = e && JSON.parse(w.d.decode(e)) || null
                    } catch (e) {
                        console.error("BetaHeaderParseError", e)
                    }
                    return e
                }
            }, {
                key: "getCurrentTestConfigCacheKeyHeader",
                value: function() {
                    var e = this.getCurrentTestConfigCacheKeyData();
                    return e ? e.header : ""
                }
            }, {
                key: "updateCurrentConfig",
                value: function(e, t) {
                    var n;
                    t.host && (n = t.host,
                    !/^http:\/\/|^wss:\/\//.test(n)) || (this.currentConfig[e] = t,
                    this.store.set(L, this.currentConfig))
                }
            }, {
                key: "saveHistory",
                value: function(e, t, n) {
                    this.detectHistory[e][t] = n
                }
            }, {
                key: "detectGoogle",
                value: function() {
                    var e = this;
                    (new y.a).ping("http://www.google.com", (function(t, data) {
                        e.googleDelay = +data || -1,
                        t && console.log("error loading resource", data + " " + t),
                        e._cookies.set("network_delay", e.googleDelay, e._config.cookiesOptions)
                    }
                    ))
                }
            }, {
                key: "detectAll",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2;
                    if (!this.hostConfig || x || window.document.hidden)
                        return !1;
                    var t, n = Object.keys(this.hostConfig || {}).filter((function(e) {
                        return /(business|wsBusiness|spotWsBusiness|wsPrivatePush|swapWsBusiness|swapBusiness)Hosts$/.test(e)
                    }
                    )), r = C(n);
                    try {
                        for (r.s(); !(t = r.n()).done; ) {
                            var o = t.value;
                            this.enableHostTypes.includes(o) && (this.detectRecord[o].times = 0,
                            this.detectRecord[o].lastTime = 0,
                            this.detectRecord[o].detecting = !1,
                            this.detect(o, e))
                        }
                    } catch (e) {
                        r.e(e)
                    } finally {
                        r.f()
                    }
                }
            }, {
                key: "reportWeakNetwork",
                value: function(e) {
                    var t = e.cost
                      , n = void 0 === t ? 0 : t
                      , r = e.type
                      , o = void 0 === r ? "businessHosts" : r;
                    n > this.weakNetworkThreshold && this._log && this._log({
                        type: "sys",
                        event: T.b.GLOBAL_WEAK_NETWORK,
                        prop: {
                            apiDelay: "".concat(n),
                            googleDelay: "".concat(this.googleDelay),
                            hostKey: o
                        }
                    })
                }
            }, {
                key: "detect",
                value: function(e, t) {
                    var n = this;
                    var r = this[e] || []
                      , o = r.hosts || [];
                    if (navigator.onLine && 0 !== o.length && this.currentConfig[e] && (void 0 === this.currentConfig[e].autoSwitch || this.currentConfig[e].autoSwitch))
                        return new Promise((function(t) {
                            var c, l = 0, d = C(o);
                            try {
                                var f = function() {
                                    var d = c.value.host
                                      , f = n.detectRecord[e].disabledDomain;
                                    if (n.saveHistory(e, d, 0),
                                    f && f === d)
                                        return l += 1,
                                        n.currentConfig[e].host === d && n.updateCurrentConfig(e, {
                                            host: "",
                                            delay: 0
                                        }),
                                        "continue";
                                    var h = (new Date).getTime()
                                      , _ = "".concat(d.replace(/^ws(s)/, "http")).concat(r.probeUri);
                                    n.http.request({
                                        url: _,
                                        method: "GET"
                                    }).then((function() {
                                        var t = (new Date).getTime() - h
                                          , r = n.currentConfig[e].host
                                          , o = n.currentConfig[e].delay;
                                        n.saveHistory(e, d, t),
                                        (!r || 0 === o || r === d || r !== d && o > t) && n.updateCurrentConfig(e, {
                                            host: d,
                                            delay: t
                                        })
                                    }
                                    )).catch((function() {
                                        n.saveHistory(e, d, -1),
                                        n.currentConfig[e].host === d && n.updateCurrentConfig(e, {
                                            host: "",
                                            delay: 0
                                        })
                                    }
                                    )).finally((function() {
                                        (l += 1) === o.length && (n.detectRecord[e].detecting = !1,
                                        n.currentConfig[e].host || (n.updateCurrentConfig(e, {
                                            host: o[0].host,
                                            delay: 0
                                        }),
                                        n._log && n._log({
                                            invokeServer: "local",
                                            api: "domainSwitch/bothFailure",
                                            detail: "".concat(e, " ").concat(JSON.stringify(o))
                                        })),
                                        n.detectRecord[e].disabledDomain = "",
                                        t(!0))
                                    }
                                    ))
                                };
                                for (d.s(); !(c = d.n()).done; )
                                    f()
                            } catch (e) {
                                d.e(e)
                            } finally {
                                d.f()
                            }
                        }
                        ))
                }
            }, {
                key: "setInterfaceCostRecord",
                value: function(e) {
                    var t = e.cost
                      , n = void 0 === t ? 0 : t
                      , r = e.type
                      , o = void 0 === r ? "businessHosts" : r;
                    if (!(n > 2e4)) {
                        var c = Object(O.a)(this.interfaceCostRecords);
                        c[o] && c[o].unshift(n),
                        c[o].length > 100 && c[o].pop(),
                        this.interfaceCostRecords = c,
                        this.executeInterfaceCostRecordsSubscribes()
                    }
                }
            }, {
                key: "subscribeInterfaceCostRecordUpdated",
                value: function(e) {
                    e && this.interfaceCostRecordsSubscribes.push(e)
                }
            }, {
                key: "analyzeResponse",
                value: function(e, t, n, r) {
                    var c = this;
                    if (!x)
                        return new Promise(function() {
                            var l = Object(o.a)(regeneratorRuntime.mark((function o(l) {
                                var d;
                                return regeneratorRuntime.wrap((function(o) {
                                    for (; ; )
                                        switch (o.prev = o.next) {
                                        case 0:
                                            if (c.setInterfaceCostRecord({
                                                cost: n,
                                                type: e
                                            }),
                                            !(void 0 !== c.currentConfig[e].autoSwitch && !c.currentConfig[e].autoSwitch || t && n <= c.slowTime)) {
                                                o.next = 3;
                                                break
                                            }
                                            return o.abrupt("return", l(!0));
                                        case 3:
                                            if (!(r >= 500 || n > c.slowTime)) {
                                                o.next = 22;
                                                break
                                            }
                                            if (d = function() {
                                                var t = setInterval((function() {
                                                    c.detectRecord[e].detecting || (clearInterval(t),
                                                    t = null,
                                                    l(!0))
                                                }
                                                ), 20)
                                            }
                                            ,
                                            !c.detectRecord[e].detecting) {
                                                o.next = 9;
                                                break
                                            }
                                            return o.next = 8,
                                            d();
                                        case 8:
                                            return o.abrupt("return");
                                        case 9:
                                            if (!(Date.now() - c.detectRecord[e].lastTime < c.getDelayTime(e))) {
                                                o.next = 13;
                                                break
                                            }
                                            return o.next = 12,
                                            d();
                                        case 12:
                                            return o.abrupt("return");
                                        case 13:
                                            return c.detectRecord[e].disabledDomain = r >= 500 ? c.currentConfig[e].host : "",
                                            c.detectRecord[e].times += 1,
                                            c.detectRecord[e].lastTime = Date.now(),
                                            c.updateCurrentConfig(e, {
                                                host: "",
                                                delay: 0
                                            }),
                                            o.next = 19,
                                            c.detect(e, 3);
                                        case 19:
                                            return console.log("analyze done done"),
                                            l(!0),
                                            o.abrupt("return");
                                        case 22:
                                            l(!0);
                                        case 23:
                                        case "end":
                                            return o.stop()
                                        }
                                }
                                ), o)
                            }
                            )));
                            return function(e) {
                                return l.apply(this, arguments)
                            }
                        }())
                }
            }, {
                key: "reset",
                value: function() {
                    this.initialed = !1,
                    this.store.remove(L),
                    this.store.remove(k),
                    this.initial()
                }
            }]),
            e
        }();
        t.a = function(e, t) {
            t("apiRouting", new B(e))
        }
    },
    473: function(e, t, n) {
        "use strict";
        var r = n(390);
        t.a = function(e, t) {
            var n = e.app.$request;
            t("coreServices", new r.a(n))
        }
    },
    476: function(e, t, n) {
        "use strict";
        var r = n(12)
          , o = (n(165),
        n(18),
        n(77),
        n(92),
        n(142),
        n(152),
        n(53),
        n(99),
        n(76),
        n(218),
        n(834),
        n(5),
        n(48),
        n(287),
        n(43),
        n(65),
        n(25))
          , c = n.n(o)
          , l = n(477)
          , d = n.n(l)
          , f = n(637)
          , h = n.n(f)
          , _ = n(478)
          , m = n.n(_)
          , v = n(310)
          , y = n.n(v)
          , E = n(13)
          , O = {}
          , w = function() {
            var e = navigator.userAgent
              , t = RegExp("(".concat(E.d.join("|"), ")\\/(\\d+\\.\\d+\\.\\d+)"))
              , n = e.match(t)
              , r = !!n && n[2]
              , o = r ? r.split(".") : [];
            return !1 !== r && {
                less: function(e) {
                    for (var t = e.split("."), i = 0; i < t.length; i++) {
                        if (Number(o[i]) < Number(t[i]))
                            return !0;
                        if (Number(o[i]) > Number(t[i]))
                            return !1
                    }
                    return !1
                },
                more: function(e) {
                    for (var t = e.split("."), i = 0; i < t.length; i++) {
                        if (Number(o[i]) < Number(t[i]))
                            return !1;
                        if (Number(o[i]) > Number(t[i]))
                            return !0
                    }
                    return !1
                },
                equals: function(e) {
                    return !!r && r === e
                }
            }
        }
          , T = function() {
            return navigator.userAgent.includes("Android")
        };
        function S() {
            var e = w();
            return !!e && e.more("0.0.0")
        }
        function C(e, t) {
            for (var n in t)
                "object" === Object(r.a)(t[n]) && null !== t[n] ? (e[n] || (e[n] = {}),
                C(e[n], t[n])) : e[n] = t[n];
            return e
        }
        function R(e, t) {
            var n = /:/.test(e)
              , r = (null == t ? void 0 : t.baseDomain) || window.location.origin
              , o = n ? e : "".concat(r + e);
            if (S()) {
                var l = {
                    bizLink: o,
                    bizType: "0",
                    bizInfo: {
                        shareType: "0"
                    }
                };
                C(l, Object.freeze((null == t ? void 0 : t.info) || {})),
                c.a.call("router.openBizInfo", l)
            } else
                window.location.href = o
        }
        var A = function(e) {
            var t = e.$cookies
              , n = e.$appConfig
              , r = e.app;
            return {
                isInApp: function() {
                    return S()
                },
                isAndroid: function() {
                    return T()
                },
                appVersion: function() {
                    return w()
                },
                redirect: function(e) {
                    return function(e) {
                        var t = window.location.search.replace("?", "")
                          , n = {};
                        t && d()(t, n);
                        var r = h()(e).query
                          , o = {};
                        r && d()(r, o);
                        var l = Object.assign(n, o)
                          , f = "?" + m()(l)
                          , _ = w();
                        S() && !T() && _ && (_.equals("3.23.0") || _.equals("3.25.0")) || (e = e.replace(/\?.*/, ""),
                        "?" !== f && (e += f));
                        var base = E.c
                          , v = /:/.test(e);
                        if (S()) {
                            var y = {}
                              , O = window.location.origin;
                            y.bizLink = v ? e : O + base + "/" + e,
                            y.bizType = "0",
                            y.bizInfo = {
                                shareType: "0"
                            },
                            c.a.call("router.openBizInfo", y)
                        } else
                            window.location.href = v ? e : base + "/" + e
                    }(e)
                },
                open: R,
                call: function(e, option) {
                    return c.a.call(e, option)
                },
                initTitle: function(e) {
                    if (S()) {
                        var t = {
                            statusBarStyle: 1,
                            title: {
                                style: 0,
                                onlyOneTitle: ""
                            }
                        };
                        if ("string" == typeof e)
                            t.title.onlyOneTitle = e,
                            document.title = e;
                        else {
                            var text = e.text
                              , n = e.backgroundColor
                              , r = e.tintColor
                              , o = e.moreItem;
                            n && (t.backgroundColor = n),
                            r && (t.tintColor = r),
                            t.title.onlyOneTitle = text || "",
                            t.moreItem = o || {},
                            document.title = text || ""
                        }
                        c.a.call("UI.updateNativeStyle", t)
                    }
                },
                request: function(e) {
                    return new Promise((function(t, n) {
                        if ("POST" === e.method.toUpperCase()) {
                            var r = m()(e.params);
                            "" !== r && (r = "?" + r),
                            e.url = e.url + r
                        }
                        c.a.call("request.request", e, (function(e) {
                            if ("" === e)
                                n(new Error("APP Request Error"));
                            else {
                                var r = y()({
                                    storeAsString: !0
                                }).parse(e);
                                t({
                                    data: r
                                })
                            }
                        }
                        ))
                    }
                    ))
                },
                getToken: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    return S() ? new Promise((function(t, n) {
                        c.a.call("account.token", (function(r) {
                            r ? t({
                                source: "app",
                                token: r
                            }) : e ? (c.a.call("account.showLoginPanelIfNeed"),
                            n(new Error("请重新登录"))) : t({
                                source: "app",
                                token: ""
                            })
                        }
                        ))
                    }
                    )) : Promise.resolve({
                        source: "web"
                    })
                },
                selectSymbol: function() {
                    c.a.call("UI.selectSymbol")
                },
                selectSymbolId: function() {
                    c.a.call("UI.selectSymbolId")
                },
                getLang: function() {
                    return c.a.call("AppInfo.getAppLanguage")
                },
                getAppInfo: function() {
                    var e = c.a.call("AppInfo.getAppInfo")
                      , t = {};
                    try {
                        t = JSON.parse(e)
                    } catch (e) {
                        t = {}
                    }
                    return t
                },
                getKycStatus: function() {
                    return c.a.call("AppInfo.getIdentifyStatus")
                },
                goKycVerify: function() {
                    return S() ? new Promise((function(e) {
                        c.a.call("AppInfo.gotoIdentifyVerify", (function(data) {
                            e({
                                source: "app",
                                data: data
                            })
                        }
                        ))
                    }
                    )) : Promise.resolve({
                        source: "web"
                    })
                },
                getTokenSync: function() {
                    return c.a.call("account.tokenSync")
                },
                getDeviceId: function() {
                    return c.a.call("AppInfo.deviceId")
                },
                logout: function() {
                    c.a.call("account.logout")
                },
                login: function() {
                    var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    if (n.isInApp)
                        c.a.call("account.showLoginPanelIfNeed");
                    else {
                        var t = r.i18n.locale
                          , o = e ? encodeURIComponent(window.location.href) : window.location.href
                          , l = window.location.search ? "".concat(window.location.search, "&redirect=").concat(o) : "?redirect=".concat(o)
                          , d = "/".concat(t, "/login/").concat(l);
                        window.location.href = d
                    }
                },
                objKeySort: function(e) {
                    for (var t = Object.keys(e).sort(), n = {}, i = 0; i < t.length; i++)
                        n[t[i]] = e[t[i]];
                    return n
                },
                tools: {
                    saveImage: function(image) {
                        S() && c.a.call("router.saveImage", {
                            image: image
                        })
                    },
                    saveImageBatch: function(e) {
                        return S() ? new Promise((function(t) {
                            c.a.call("router.saveImageBatch", {
                                image: e
                            }, (function(e) {
                                try {
                                    t(JSON.parse(e))
                                } catch (e) {
                                    t(!1)
                                }
                            }
                            ))
                        }
                        )) : Promise.resolve(!1)
                    },
                    shareToCommunity: function(e) {
                        S() && c.a.call("router.shareToCommunity", e)
                    }
                },
                page: {
                    login: function() {
                        S() && c.a.call("account.showLoginPanelIfNeed")
                    },
                    changeSecurityTologin: function() {
                        S() && c.a.call("router.openBizInfo", {
                            bizLink: "safety_reset_go_login",
                            bizType: "10"
                        })
                    },
                    cardPayBack: function() {
                        S() && c.a.call("router.openBizInfo", {
                            bizLink: "card_payment_back",
                            bizType: "10"
                        })
                    },
                    register: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://account/register",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "0"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    recharge: function() {
                        var symbol = arguments.length > 0 && void 0 !== arguments[0] && arguments[0]
                          , e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (S()) {
                            var t = {
                                bizType: "5",
                                bizInfo: {
                                    coinAssetId: "" + e,
                                    coinName: symbol
                                },
                                bizLink: "wallet:topup"
                            };
                            c.a.call("router.openBizInfo", t)
                        }
                    },
                    transfer: function() {
                        if (S()) {
                            c.a.call("router.openBizInfo", {
                                bizType: "0",
                                bizInfo: {},
                                bizLink: "bingbon://wallet/transfer"
                            })
                        }
                    },
                    upgrade: function() {
                        if (S()) {
                            c.a.call("router.openBizInfo", {
                                bizType: "0",
                                bizInfo: {},
                                bizLink: "bingbon://common?action=updateversion"
                            })
                        }
                    },
                    back: function() {
                        S() && c.a.call("router.openBizInfo", {
                            bizLink: "back",
                            bizType: "10",
                            bizInfo: {}
                        })
                    },
                    backH5: function() {
                        if (!S())
                            return history.back();
                        c.a.call("router.openBizInfo", {
                            bizLink: "backH5Page",
                            bizType: "10",
                            bizInfo: {}
                        })
                    },
                    shareGift: function(e) {
                        S() && c.a.call("router.openBizInfo", {
                            bizLink: "shareGift",
                            bizType: "10",
                            bizInfo: e
                        })
                    },
                    invite: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://operate?action=invitefriend",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "0"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    messageCenter: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://message/center",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "0"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    telegram: function(e) {
                        if (S()) {
                            var t = {};
                            t.bizLink = "browser://" + e,
                            t.bizType = "0",
                            t.bizInfo = {
                                shareType: "0"
                            },
                            c.a.call("router.openBizInfo", t)
                        }
                    },
                    connnetServer: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://common?action=contract",
                                bizType: "0",
                                bizInfo: {
                                    shareType: -1
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    identify: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://account/identify",
                                bizType: "0",
                                bizInfo: {
                                    shareType: -1
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    transaction: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "ETH"
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "USDT";
                        if (S()) {
                            var n = {};
                            n.bizLink = "bingbon://trade/perpetual/transaction?symbol=".concat(e, "-").concat(t, "&simpleType=0"),
                            n.bizType = "0",
                            n.bizInfo = {
                                shareType: "-1"
                            },
                            c.a.call("router.openBizInfo", n)
                        }
                    },
                    trade: function(symbol) {
                        if (S()) {
                            var e = "";
                            symbol && (e = "?marginCoinName=".concat(symbol));
                            var t = {};
                            t.bizLink = "bingbon://trade/detail".concat(e),
                            t.bizType = "0",
                            t.bizInfo = {
                                shareType: "-1"
                            },
                            c.a.call("router.openBizInfo", t)
                        }
                    },
                    taskcenter: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://activity/newcomer/taskcenter",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "-1"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    walletRecharge: function(e, t) {
                        if (S()) {
                            var n = {};
                            n.bizLink = "bingbon://wallet/recharge?assetId=".concat(e, "&assetName=").concat(t),
                            n.bizType = "0",
                            n.bizInfo = {
                                shareType: "-1"
                            },
                            c.a.call("router.openBizInfo", n)
                        }
                    },
                    redemptionCode: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://wallet/redemption/code",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "-1"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    share: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                            linkUri: "",
                            content: "",
                            title: "",
                            imgUrl: "",
                            inviteCode: "",
                            showPreview: !1,
                            shareCommunity: !1,
                            shareCommunityInfo: void 0,
                            shareImage: ""
                        }
                          , t = {};
                        t.data = e,
                        c.a.call("share.appShare", t)
                    },
                    bonusList: function() {
                        if (S()) {
                            c.a.call("router.openBizInfo", {
                                bizType: "0",
                                bizInfo: {},
                                bizLink: "bingbon://bonus/list"
                            })
                        }
                    },
                    spotTrade: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                        if (S()) {
                            var n = "";
                            e && t && (n = "?coin=".concat(e, "&valuationCoin=").concat(t));
                            var r = {};
                            r.bizLink = "bingbon://spot/order".concat(n),
                            r.bizType = "0",
                            r.bizInfo = {
                                shareType: "-1"
                            },
                            c.a.call("router.openBizInfo", r)
                        }
                    },
                    copyManage: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://copyer/order/manager",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "-1"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    copyTrader: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : ""
                          , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        if (S()) {
                            var n = {};
                            n.bizLink = "bingbon://userPersonal?userUid=".concat(e, "&apiIdentity=").concat(t),
                            n.bizType = "0",
                            n.bizInfo = {
                                shareType: "-1"
                            },
                            c.a.call("router.openBizInfo", n)
                        }
                    },
                    sharetradingManager: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://sharetrading/manager",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "-1"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    },
                    deposit: function() {
                        if (S()) {
                            var e = {
                                bizLink: "bingbon://user/deposit",
                                bizType: "0",
                                bizInfo: {
                                    shareType: "-1"
                                }
                            };
                            c.a.call("router.openBizInfo", e)
                        }
                    }
                },
                listen: {
                    register: function() {
                        c.a.register("account", {
                            tag: "account",
                            notifyAccountTokenChange: function(e) {
                                t.set(E.l, e, n.cookiesOptions),
                                O.hasOwnProperty("notifyAccountTokenChange") && O.notifyAccountTokenChange(e)
                            },
                            notifyAccountInfoUpdate: function(e) {
                                O.hasOwnProperty("notifyAccountInfoUpdate") && O.notifyAccountInfoUpdate(e)
                            },
                            notify: function(e) {
                                var t = JSON.parse(e);
                                O.hasOwnProperty(t.name) && (0,
                                O[t.name])(t.data)
                            }
                        }),
                        c.a.register("AppInfo", {
                            tag: "AppInfo",
                            notifyAppLanguageUpdate: function(e) {
                                O.hasOwnProperty("notifyAppLanguageUpdate") && O.notifyAppLanguageUpdate(e)
                            }
                        }),
                        c.a.register("ui", {
                            tag: "ui",
                            notify: function() {
                                O.hasOwnProperty("refresh_page") && O.refresh_page()
                            },
                            selectSymbol: function(e) {
                                O.hasOwnProperty("selectSymbol") && O.selectSymbol(JSON.parse(e))
                            },
                            selectSymbolId: function(data) {
                                if (O.hasOwnProperty("selectSymbolId")) {
                                    var e = JSON.parse(data);
                                    O.selectSymbolId(e.quotationId)
                                }
                            }
                        })
                    },
                    token: function(e) {
                        O.notifyAccountTokenChange = e
                    },
                    lang: function(e) {
                        O.notifyAppLanguageUpdate = e
                    },
                    userInfo: function(e) {
                        O.notifyAccountInfoUpdate = e
                    },
                    assetsUpdate: function(e) {
                        O["notify.AssetsUpdate"] = e
                    },
                    orderClose: function(e) {
                        O["notify.OrderClose"] = e
                    },
                    refreshPage: function(e) {
                        O.refresh_page = e
                    },
                    selectSymbol: function(e) {
                        O.selectSymbol = e
                    },
                    selectSymbolId: function(e) {
                        O.selectSymbolId = e
                    }
                },
                notify: {
                    assetsUpdate: function() {
                        var e = {
                            name: "notify.AssetsUpdate",
                            data: {}
                        };
                        c.a.call("account.notifyInfoNeedUpdate", e)
                    },
                    orderClose: function(e) {
                        var t = {
                            name: "notify.OrderClose"
                        };
                        t.data = {
                            id: e
                        },
                        c.a.call("account.notifyInfoNeedUpdate", t)
                    }
                }
            }
        };
        t.a = function(e, t) {
            A(e).listen.register(),
            t("bridge", A(e))
        }
    },
    493: function(e, t, n) {
        "use strict";
        var r = n(12)
          , o = (n(53),
        n(67))
          , c = (n(43),
        n(45),
        n(63),
        n(40),
        n(66),
        n(71))
          , l = n(3)
          , d = n(26)
          , f = n(27)
          , h = (n(44),
        n(5),
        n(80),
        n(929))
          , _ = n(157)
          , m = n.n(_);
        function v(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        var y = "SAMPLING_MARK"
          , E = function() {
            function e(t, n, r) {
                var o = this;
                Object(d.a)(this, e),
                this._logPool = [],
                this._api = "http://" + n + "." + t + "/logstores/" + r + "/track",
                this._throttleUpload = Object(h.a)((function() {
                    o.sendLog()
                }
                ), 2e3)
            }
            return Object(f.a)(e, [{
                key: "getUploadDataBody",
                value: function(e) {
                    return JSON.stringify({
                        __logs__: e
                    })
                }
            }, {
                key: "getUploadHeaders",
                value: function(e) {
                    var t = e.length;
                    return {
                        "Content-Type": "application/json",
                        "x-log-apiversion": "0.6.0",
                        "x-log-bodyrawsize": "".concat(t)
                    }
                }
            }, {
                key: "pushObj",
                value: function(e) {
                    if ("object" === Object(r.a)(e)) {
                        var t = function(e) {
                            for (var i = 1; i < arguments.length; i++) {
                                var source = null != arguments[i] ? arguments[i] : {};
                                i % 2 ? v(Object(source), !0).forEach((function(t) {
                                    Object(l.a)(e, t, source[t])
                                }
                                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : v(Object(source)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                                }
                                ))
                            }
                            return e
                        }({}, e);
                        for (var n in t)
                            "number" == typeof t[n] && (t[n] = "".concat(t[n]));
                        this._logPool.push(t)
                    }
                }
            }, {
                key: "sendLog",
                value: function() {
                    var e = this;
                    if (!this._logPool.length)
                        return !1;
                    var t = Object(c.a)(this.filterLogs());
                    this._logPool = [];
                    var n = this.getUploadDataBody(t);
                    return m()({
                        url: this._api,
                        method: "POST",
                        withCredentials: !1,
                        headers: this.getUploadHeaders(n),
                        data: n
                    }).catch((function() {
                        var n;
                        console.log("fail to log data"),
                        (n = e._logPool).unshift.apply(n, Object(c.a)(t))
                    }
                    ))
                }
            }, {
                key: "logger",
                value: function(e) {
                    return e ? this.sendLog() : this._throttleUpload()
                }
            }, {
                key: "filterLogs",
                value: function() {
                    var e = this._logPool.length;
                    return e >= 1e3 && e < 1e4 ? this.setLogMark(this._logPool.filter((function() {
                        return Math.floor(9 * Math.random()) + 1 < 3
                    }
                    )), y) : e >= 1e4 && e < 1e5 ? this.setLogMark(this._logPool.filter((function() {
                        return Math.floor(99 * Math.random()) + 1 < 3
                    }
                    )), y) : e >= 1e5 && e < 1e6 ? this.setLogMark(this._logPool.filter((function() {
                        return Math.floor(999 * Math.random()) + 1 < 3
                    }
                    )), y) : this._logPool
                }
            }, {
                key: "setLogMark",
                value: function(e, t) {
                    return e.map((function(e) {
                        e.mark = t
                    }
                    )),
                    e
                }
            }]),
            e
        }()
          , O = n(229)
          , w = (n(18),
        n(76),
        n(152),
        n(508),
        n(77),
        n(98),
        n(164))
          , T = n.n(w)
          , S = n(631)
          , C = n.n(S)
          , R = n(800);
        function A(e) {
            var pattern = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "YYYY/MM/DD HH:mm:ss";
            return T()(e).format(pattern)
        }
        T.a.extend(R),
        T.a.extend(C.a);
        var I = n(78)
          , N = {
            host: "log-global.aliyuncs.com",
            logStoreApi: "terminal",
            logStoreEvent: "event",
            projectName: ["dev", "beta"].includes("prod") ? "pre-bb-client-new" : "bb-client-new"
        }
          , k = null
          , L = null;
        t.a = function(e, t) {
            var n = e.$cookies
              , c = e.$appConfig
              , l = e.app
              , d = e.$appInfo
              , f = function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ""
                  , r = "".concat(n.get(e));
                return "undefined" === r ? t : r
            }
              , h = function() {
                var e = document.hidden ? "1" : "0"
                  , time = Date.now()
                  , t = n.get("visitorPId")
                  , r = f("app_device_id", "") || c.uuid;
                return {
                    uid: f("uid", "0"),
                    muid: f("muid", "0"),
                    appId: O.a.appId || "",
                    server: c.isMobile ? "h5" : "pc",
                    version: c.version,
                    deviceId: r,
                    channel: d.channel || sessionStorage.getItem("ch") || "official",
                    reg_channel: d.channel || sessionStorage.getItem("ch") || "official",
                    net: Object(I.i)(),
                    appDeviceId: f("app_device_id", ""),
                    h5DeviceId: c.uuid || "",
                    delay: f("network_delay", "-1"),
                    time: time,
                    timeFormat: A(time),
                    timeZone: Object(o.p)(),
                    userVisible: e,
                    platformId: c.platformId,
                    visitorId: t ? encodeURIComponent(t) : "-1"
                }
            }
              , _ = function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                void 0 !== ("undefined" == typeof window ? "undefined" : Object(r.a)(window)) && "string" == typeof t.detail && (t.detail += "; pageUrl: ".concat(window.location.href));
                var o = "api" === e ? k : L;
                return o || (o = "api" === e ? k = new E(N.host,N.projectName,N.logStoreApi) : L = new E(N.host,N.projectName,N.logStoreEvent)),
                o.pushObj(Object.assign({}, h(), t)),
                o.logger(n)
            };
            t("apiLog", (function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return _("api", e, t)
            }
            )),
            t("log", (function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (e.type)
                    return _("event", Object.assign({}, e, {
                        prop: JSON.stringify(e.prop || ""),
                        lang: l.i18n && l.i18n.locale || "en-us"
                    }), t);
                console.warn("log format incorrect!", e)
            }
            )),
            t("getCommonMetaInfo", h)
        }
    },
    494: function(e, t, n) {
        "use strict";
        n(45),
        n(44),
        n(63),
        n(66);
        var r = n(71)
          , o = n(6)
          , c = n(3)
          , l = (n(103),
        n(5),
        n(40),
        n(43),
        n(77),
        n(65),
        n(121),
        n(54),
        n(53),
        n(99),
        n(18),
        n(200))
          , d = n(173)
          , f = (n(98),
        n(13))
          , h = n(235)
          , _ = "".concat(f.k, "/fe-common/lib/geetest/gt.js")
          , m = "".concat(f.k, "/fe-common/lib/geetest/gt4.js")
          , v = "".concat(f.k, "/fe-common/lib/botion/boc1.js")
          , y = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                gt: "",
                challenge: "",
                offline: !1,
                lang: "en"
            }
              , t = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                e.loadLog && "function" == typeof e.loadLog && e.loadLog({
                    channel: 1,
                    type: 1,
                    step: t,
                    state: n,
                    cost: r
                })
            }
              , n = !1;
            return new Promise((function(r, o) {
                var c = Date.now();
                E().then((function(l) {
                    l || t(0, 0, Date.now() - c);
                    var d = Date.now();
                    console.log("ready to init geetest");
                    try {
                        window.initGeetest({
                            gt: e.gt,
                            challenge: e.challenge,
                            offline: e.offline,
                            timeout: "5000",
                            product: "bind",
                            width: "300px",
                            lang: e.lang,
                            http: !0
                        }, (function(e) {
                            n || (t(1, 0, Date.now() - d),
                            n = !0,
                            r(e))
                        }
                        ))
                    } catch (e) {
                        t(1, 1, Date.now() - d)
                    }
                    setTimeout((function() {
                        n || (console.log("gtv3 init timeout"),
                        n = !0,
                        t(1, -1, Date.now() - d),
                        o(new Error("gtv3 init timeout")))
                    }
                    ), 1e4)
                }
                )).catch((function(e) {
                    n || (console.log("reject", e),
                    t(0, -1, Date.now() - c),
                    n = !0,
                    o(e))
                }
                ))
            }
            ))
        }
          , E = function() {
            return Object(h.a)({
                url: _,
                id: "geetest",
                timeout: 1e4
            })
        }
          , O = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                captchaId: "",
                lang: "en"
            }
              , t = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                e.loadLog && "function" == typeof e.loadLog && e.loadLog({
                    channel: 1,
                    type: 1,
                    step: t,
                    state: n,
                    cost: r
                })
            }
              , n = !1;
            return new Promise((function(r, o) {
                var c = Date.now();
                w().then((function(l) {
                    l || t(0, 0, Date.now() - c);
                    var d = Date.now();
                    console.log("ready to init geetestv4");
                    try {
                        window.initGeetest4({
                            captchaId: e.captchaId,
                            timeout: "5000",
                            product: "bind",
                            nextWidth: "300px",
                            language: e.lang,
                            protocol: "http://",
                            offlineCb: function(e) {
                                console.log("offline", e),
                                t(1, -1, Date.now() - d),
                                o(e)
                            },
                            onError: function(e) {
                                console.log("error", e),
                                t(1, -1, Date.now() - d),
                                o(e)
                            }
                        }, (function(e) {
                            n || (n = !0,
                            t(1, 0, Date.now() - d),
                            r(e))
                        }
                        ))
                    } catch (e) {
                        t(1, 1, Date.now() - d)
                    }
                    setTimeout((function() {
                        n || (console.log("gtv4 init timeout"),
                        n = !0,
                        t(1, -1, Date.now() - d),
                        o(new Error("gtv4 init timeout")))
                    }
                    ), 1e4)
                }
                )).catch((function(e) {
                    n || (console.log("reject", e),
                    t(0, -1, Date.now() - c),
                    n = !0,
                    o(e))
                }
                ))
            }
            ))
        }
          , w = function() {
            return Object(h.a)({
                url: m,
                id: "geetestv4",
                timeout: 1e4
            })
        }
          , T = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                captchaId: "",
                lang: "en"
            }
              , t = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0
                  , n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
                  , r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                e.loadLog && "function" == typeof e.loadLog && e.loadLog({
                    channel: 1,
                    type: 1,
                    step: t,
                    state: n,
                    cost: r
                })
            }
              , n = !1;
            return new Promise((function(r, o) {
                var c = Date.now();
                S().then((function(l) {
                    l || t(0, 0, Date.now() - c);
                    var d = Date.now();
                    console.log("ready to init botionv1");
                    try {
                        window.initBotion({
                            captchaId: e.captchaId,
                            timeout: "5000",
                            product: "bind",
                            nextWidth: "300px",
                            language: e.lang,
                            protocol: "http://",
                            offlineCb: function(e) {
                                console.log("offline", e),
                                t(1, -1, Date.now() - d),
                                o(e)
                            },
                            onError: function(e) {
                                console.log("error", e),
                                t(1, -1, Date.now() - d),
                                o(e)
                            }
                        }, (function(e) {
                            n || (n = !0,
                            t(1, 0, Date.now() - d),
                            r(e))
                        }
                        ))
                    } catch (e) {
                        t(1, 1, Date.now() - d)
                    }
                    setTimeout((function() {
                        n || (console.log("botionv1 init timeout"),
                        n = !0,
                        t(1, -1, Date.now() - d),
                        o(new Error("botionv1 init timeout")))
                    }
                    ), 1e4)
                }
                )).catch((function(e) {
                    n || (console.log("reject", e),
                    t(0, -1, Date.now() - c),
                    n = !0,
                    o(e))
                }
                ))
            }
            ))
        }
          , S = function() {
            return Object(h.a)({
                url: v,
                id: "botionv1",
                timeout: 1e4
            })
        }
          , C = n(78)
          , R = n(120)
          , A = {
            "zh-cn": n(837),
            "en-us": n(353),
            "en-au": n(353),
            "en-gb": n(353),
            "en-sa": n(353),
            "es-es": n(436),
            "es-co": n(436),
            "es-ar": n(436),
            "id-id": n(838),
            "ja-jp": n(839),
            "ko-kr": n(840),
            "ru-ru": n(841),
            "tr-tr": n(842),
            "vi-vn": n(843),
            "zh-hk": n(607),
            "zh-tw": n(607),
            "nl-nl": n(844),
            "pt-br": n(845),
            "fa-ir": n(846),
            "de-de": n(847),
            "th-th": n(848),
            "ar-ar": n(849),
            "fr-fr": n(850),
            "it-it": n(851),
            "uk-ua": n(852),
            "ku-ku": n(853)
        };
        function I(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function N(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? I(Object(source), !0).forEach((function(t) {
                    Object(c.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : I(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var k = 1
          , L = 2
          , P = 3
          , D = 4
          , x = 5
          , j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
              , t = {};
            return Object.keys(e).forEach((function(n) {
                t[n] = "".concat(e[n])
            }
            )),
            t
        }
          , M = function(e) {
            return "string" == typeof e ? e : e instanceof Error ? e.toString() : JSON.stringify({
                name: (null == e ? void 0 : e.name) || "",
                message: (null == e ? void 0 : e.message) || "",
                stack: (null == e ? void 0 : e.stack) || ""
            })
        };
        t.a = function(e, t) {
            var n = e.app
              , f = n.$request
              , h = n.i18n
              , _ = n.$log
              , m = 0
              , v = {}
              , I = {}
              , H = function(e) {
                return f({
                    method: "GET",
                    url: "/v2/gee-test/startCaptcha",
                    params: N({}, e)
                })
            }
              , U = function(e) {
                _({
                    type: "sys",
                    event: R.b.VERIFY_SDK_LOAD,
                    prop: j(N(N({}, e), {}, {
                        step: e.step || 0
                    }))
                })
            }
              , B = function(e) {
                _({
                    type: "sys",
                    event: R.b.VERIFY_RECORD,
                    prop: j(e)
                })
            }
              , G = function(e) {
                _({
                    type: "sys",
                    event: "overall_all_geetest_info",
                    prop: j(e)
                })
            }
              , W = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                H({
                                    channel: P
                                }).then(function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    Object(d.c)(n, t, U, B);
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.prev = 6,
                                e.t0 = e.catch(0),
                                e.abrupt("return", Promise.reject(""));
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 6]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , F = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                return e.prev = 0,
                                e.next = 3,
                                H({
                                    channel: L
                                }).then(function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(n) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2,
                                                    Object(d.d)(n, t, U, B);
                                                case 2:
                                                    return e.abrupt("return", e.sent);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.prev = 6,
                                e.t0 = e.catch(0),
                                e.abrupt("return", Promise.resolve(""));
                            case 9:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[0, 6]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , V = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                                        var n, r = arguments;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return n = !(r.length > 1 && void 0 !== r[1]) || r[1],
                                                    e.abrupt("return", new Promise((function(e) {
                                                        var r = 0
                                                          , o = function() {
                                                            r = Date.now();
                                                            try {
                                                                t.verify()
                                                            } catch (t) {
                                                                return B({
                                                                    channel: k,
                                                                    state: 1,
                                                                    cost: Date.now() - r,
                                                                    detail: M(t)
                                                                }),
                                                                G({
                                                                    channel: k,
                                                                    geetest_status: "failure",
                                                                    scene: "showCaptcha",
                                                                    remark: M(t)
                                                                }),
                                                                e(null)
                                                            }
                                                        };
                                                        t.onReady((function() {
                                                            o()
                                                        }
                                                        )),
                                                        t.onSuccess((function() {
                                                            try {
                                                                var n = t.getValidate();
                                                                return n ? (B({
                                                                    channel: k,
                                                                    state: 0,
                                                                    cost: r ? Date.now() - r : 0,
                                                                    detail: JSON.stringify(n)
                                                                }),
                                                                G({
                                                                    channel: k,
                                                                    geetest_status: "success",
                                                                    remark: JSON.stringify((null == n ? void 0 : n.captcha_output) || "")
                                                                }),
                                                                e({
                                                                    challenge: n.geetest_challenge,
                                                                    seccode: n.geetest_seccode,
                                                                    validate: n.geetest_validate
                                                                })) : (B({
                                                                    channel: k,
                                                                    state: 1,
                                                                    cost: r ? Date.now() - r : 0,
                                                                    detail: "get empty validate result"
                                                                }),
                                                                G({
                                                                    channel: k,
                                                                    geetest_status: "failure",
                                                                    remark: "get empty validate result"
                                                                }),
                                                                e(null))
                                                            } catch (t) {
                                                                return B({
                                                                    channel: k,
                                                                    state: 1,
                                                                    cost: r ? Date.now() - r : 0,
                                                                    detail: M(t)
                                                                }),
                                                                G({
                                                                    channel: k,
                                                                    geetest_status: "failure",
                                                                    scene: "getValidate",
                                                                    remark: M(t)
                                                                }),
                                                                e(null)
                                                            }
                                                        }
                                                        )),
                                                        t.onError((function(t) {
                                                            return B({
                                                                channel: k,
                                                                state: 1,
                                                                cost: r ? Date.now() - r : 0,
                                                                detail: M(t)
                                                            }),
                                                            G({
                                                                channel: k,
                                                                geetest_status: "failure",
                                                                remark: M(t)
                                                            }),
                                                            e(null)
                                                        }
                                                        )),
                                                        t.onClose((function() {
                                                            return e(-1)
                                                        }
                                                        )),
                                                        n || o()
                                                    }
                                                    )));
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                e.prev = 1,
                                !(window.__gt_captcha && m && m > Date.now() - 3e5)) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 5,
                                n(window.__gt_captcha, !1);
                            case 5:
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.next = 8,
                                H({
                                    channel: k,
                                    action: t
                                }).then(function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                                        var param, r;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return param = JSON.parse(t),
                                                    e.prev = 1,
                                                    e.next = 4,
                                                    y({
                                                        gt: param.gt,
                                                        challenge: param.challenge,
                                                        offline: !param.success,
                                                        lang: l.b[h.locale],
                                                        loadLog: U
                                                    });
                                                case 4:
                                                    if (!(r = e.sent)) {
                                                        e.next = 11;
                                                        break
                                                    }
                                                    return m = Date.now(),
                                                    window.__gt_captcha = r,
                                                    e.next = 10,
                                                    n(r);
                                                case 10:
                                                    return e.abrupt("return", e.sent);
                                                case 11:
                                                    return e.abrupt("return", Promise.resolve(null));
                                                case 14:
                                                    return e.prev = 14,
                                                    e.t0 = e.catch(1),
                                                    e.abrupt("return", Promise.resolve(null));
                                                case 17:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[1, 14]])
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(1),
                                e.abrupt("return", Promise.resolve(null));
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , Y = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = function(e) {
                                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    return new Promise((function(o) {
                                        var c = 0
                                          , l = function() {
                                            c = Date.now();
                                            try {
                                                var t = document.documentElement.dir || "ltr"
                                                  , n = document.getElementsByClassName("geetest_box");
                                                "ltr" !== t && n.length >= 1 && Array.from(Object(r.a)(n)).forEach((function(e) {
                                                    e.style.direction = "ltr"
                                                }
                                                ))
                                            } catch (e) {
                                                console.log(e)
                                            }
                                            try {
                                                e.showCaptcha()
                                            } catch (e) {
                                                return B({
                                                    channel: D,
                                                    state: 1,
                                                    cost: Date.now() - c,
                                                    detail: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                G({
                                                    channel: D,
                                                    geetest_status: "failure",
                                                    scene: "showCaptcha",
                                                    remark: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                o(null)
                                            }
                                        };
                                        e.onReady((function() {
                                            l()
                                        }
                                        )),
                                        e.onSuccess((function() {
                                            try {
                                                var n = e.getValidate();
                                                return n ? (B({
                                                    channel: D,
                                                    state: 0,
                                                    cost: c ? Date.now() - c : 0,
                                                    detail: JSON.stringify(n)
                                                }),
                                                G({
                                                    channel: D,
                                                    geetest_status: "success",
                                                    remark: JSON.stringify((null == n ? void 0 : n.captcha_output) || "")
                                                }),
                                                o({
                                                    lotNumber: n.lot_number,
                                                    captchaOutput: n.captcha_output,
                                                    passToken: n.pass_token,
                                                    genTime: n.gen_time,
                                                    action: t
                                                })) : (B({
                                                    channel: D,
                                                    state: 1,
                                                    cost: c ? Date.now() - c : 0,
                                                    detail: "get empty validate result"
                                                }),
                                                G({
                                                    channel: D,
                                                    geetest_status: "failure",
                                                    remark: "get empty validate result"
                                                }),
                                                o(null))
                                            } catch (e) {
                                                return B({
                                                    channel: D,
                                                    state: 1,
                                                    cost: c ? Date.now() - c : 0,
                                                    detail: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                G({
                                                    channel: D,
                                                    geetest_status: "failure",
                                                    scene: "getValidate",
                                                    remark: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                o(null)
                                            }
                                        }
                                        )),
                                        e.onError((function(e) {
                                            return B({
                                                channel: D,
                                                state: 1,
                                                cost: c ? Date.now() - c : 0,
                                                detail: M(e)
                                            }),
                                            G({
                                                channel: D,
                                                scene: "onError",
                                                geetest_status: "failure",
                                                remark: M(e)
                                            }),
                                            o(null)
                                        }
                                        )),
                                        e.onClose((function() {
                                            return o(-1)
                                        }
                                        )),
                                        n || l()
                                    }
                                    ))
                                }
                                ,
                                e.prev = 1,
                                !(window.__gt_captchaV4 && window.__gt_captchaV4[t] && v && v[t] && v[t] > Date.now() - 3e5)) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 5,
                                n(window.__gt_captchaV4[t], !1);
                            case 5:
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.next = 8,
                                H({
                                    channel: D,
                                    action: t
                                }).then(function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(r) {
                                        var o;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    O({
                                                        captchaId: r,
                                                        lang: l.c[h.locale],
                                                        loadLog: U
                                                    });
                                                case 3:
                                                    if (!(o = e.sent)) {
                                                        e.next = 11;
                                                        break
                                                    }
                                                    return v[t] = Date.now(),
                                                    window.__gt_captchaV4 || (window.__gt_captchaV4 = {}),
                                                    window.__gt_captchaV4[t] = o,
                                                    e.next = 10,
                                                    n(o, !0);
                                                case 10:
                                                    return e.abrupt("return", e.sent);
                                                case 11:
                                                    return e.abrupt("return", Promise.resolve(null));
                                                case 14:
                                                    return e.prev = 14,
                                                    e.t0 = e.catch(0),
                                                    console.log("on error", e.t0),
                                                    e.abrupt("return", Promise.resolve(null));
                                                case 18:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 14]])
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(1),
                                e.abrupt("return", Promise.resolve(null));
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , K = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (n = function(e) {
                                    var n = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                                    return new Promise((function(o) {
                                        var c = 0
                                          , l = function() {
                                            c = Date.now();
                                            try {
                                                var t = document.documentElement.dir || "ltr"
                                                  , n = document.getElementsByClassName("botion_box");
                                                "ltr" !== t && n.length >= 1 && Array.from(Object(r.a)(n)).forEach((function(e) {
                                                    e.style.direction = "ltr"
                                                }
                                                ))
                                            } catch (e) {
                                                console.log(e)
                                            }
                                            try {
                                                e.showCaptcha()
                                            } catch (e) {
                                                return B({
                                                    channel: x,
                                                    state: 1,
                                                    cost: Date.now() - c,
                                                    detail: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                G({
                                                    channel: x,
                                                    geetest_status: "failure",
                                                    scene: "showCaptcha",
                                                    remark: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                o(null)
                                            }
                                        };
                                        e.onReady((function() {
                                            l()
                                        }
                                        )),
                                        e.onSuccess((function() {
                                            try {
                                                var n = e.getValidate();
                                                return n ? (B({
                                                    channel: x,
                                                    state: 0,
                                                    cost: c ? Date.now() - c : 0,
                                                    detail: JSON.stringify(n)
                                                }),
                                                G({
                                                    channel: x,
                                                    geetest_status: "success",
                                                    remark: JSON.stringify((null == n ? void 0 : n.captcha_output) || "")
                                                }),
                                                o({
                                                    lotNumber: n.lot_number,
                                                    captchaOutput: n.captcha_output,
                                                    passToken: n.pass_token,
                                                    genTime: n.gen_time,
                                                    action: t
                                                })) : (B({
                                                    channel: x,
                                                    state: 1,
                                                    cost: c ? Date.now() - c : 0,
                                                    detail: "get empty validate result"
                                                }),
                                                G({
                                                    channel: x,
                                                    geetest_status: "failure",
                                                    remark: "get empty validate result"
                                                }),
                                                o(null))
                                            } catch (e) {
                                                return B({
                                                    channel: x,
                                                    state: 1,
                                                    cost: c ? Date.now() - c : 0,
                                                    detail: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                G({
                                                    channel: x,
                                                    geetest_status: "failure",
                                                    scene: "getValidate",
                                                    remark: JSON.stringify((null == e ? void 0 : e.message) || "")
                                                }),
                                                o(null)
                                            }
                                        }
                                        )),
                                        e.onError((function(e) {
                                            return B({
                                                channel: x,
                                                state: 1,
                                                cost: c ? Date.now() - c : 0,
                                                detail: M(e)
                                            }),
                                            G({
                                                channel: x,
                                                geetest_status: "failure",
                                                scene: "onError",
                                                remark: M(e)
                                            }),
                                            o(null)
                                        }
                                        )),
                                        e.onClose((function() {
                                            return o(-1)
                                        }
                                        )),
                                        n || l()
                                    }
                                    ))
                                }
                                ,
                                e.prev = 1,
                                !(window.__boc_captchaV1 && window.__boc_captchaV1[t] && I && I[t] && I[t] > Date.now() - 3e5)) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 5,
                                n(window.__boc_captchaV1[t], !1);
                            case 5:
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 6:
                                return e.next = 8,
                                H({
                                    channel: x,
                                    action: t
                                }).then(function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(r) {
                                        var o;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    T({
                                                        captchaId: r,
                                                        lang: l.c[h.locale],
                                                        loadLog: U
                                                    });
                                                case 3:
                                                    if (!(o = e.sent)) {
                                                        e.next = 11;
                                                        break
                                                    }
                                                    return I[t] = Date.now(),
                                                    window.__boc_captchaV1 || (window.__boc_captchaV1 = {}),
                                                    window.__boc_captchaV1[t] = o,
                                                    e.next = 10,
                                                    n(o, !0);
                                                case 10:
                                                    return e.abrupt("return", e.sent);
                                                case 11:
                                                    return e.abrupt("return", Promise.resolve(null));
                                                case 14:
                                                    return e.prev = 14,
                                                    e.t0 = e.catch(0),
                                                    console.log("on error", e.t0),
                                                    e.abrupt("return", Promise.resolve(null));
                                                case 18:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 14]])
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 11:
                                return e.prev = 11,
                                e.t0 = e.catch(1),
                                e.abrupt("return", Promise.resolve(null));
                            case 14:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[1, 11]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , z = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n, r, l, d, f, _, m, v, y, E, O, w, T, S, R, I, N, j, M, i, H, U, B, G, z, $, J, X = arguments;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (r = X.length > 1 && void 0 !== X[1] ? X[1] : "LOGIN",
                                X.length > 2 && void 0 !== X[2] ? X[2] : "",
                                l = {
                                    challenge: "",
                                    seccode: "",
                                    validate: ""
                                },
                                d = {
                                    expectedAction: r,
                                    recaptchaResponse: ""
                                },
                                f = {
                                    success: !1,
                                    verificationContext: {
                                        currentChannel: k,
                                        geeTestDto: null,
                                        recaptchaDto: null
                                    }
                                },
                                _ = 0 === t.length,
                                m = function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    F(r);
                                                case 3:
                                                    return (t = e.sent) && (d.recaptchaResponse = t),
                                                    e.abrupt("return", !!d.recaptchaResponse);
                                                case 8:
                                                    return e.prev = 8,
                                                    e.t0 = e.catch(0),
                                                    e.abrupt("return", !1);
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 8]])
                                    }
                                    )));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                v = function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    W(r);
                                                case 3:
                                                    return (t = e.sent) && (d.recaptchaResponse = t),
                                                    e.abrupt("return", !!d.recaptchaResponse);
                                                case 8:
                                                    return e.prev = 8,
                                                    e.t0 = e.catch(0),
                                                    e.abrupt("return", !1);
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 8]])
                                    }
                                    )));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                y = function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    V(r);
                                                case 3:
                                                    return (t = e.sent) && -1 !== t && (l = t),
                                                    e.abrupt("return", t);
                                                case 9:
                                                    return e.prev = 9,
                                                    e.t0 = e.catch(0),
                                                    e.abrupt("return", !1);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 9]])
                                    }
                                    )));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                E = function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    Y(r);
                                                case 3:
                                                    return (t = e.sent) && -1 !== t && (l = t),
                                                    e.abrupt("return", t);
                                                case 9:
                                                    return e.prev = 9,
                                                    e.t0 = e.catch(0),
                                                    e.abrupt("return", !1);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 9]])
                                    }
                                    )));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                O = function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                        var t;
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0,
                                                    e.next = 3,
                                                    K(r);
                                                case 3:
                                                    return (t = e.sent) && -1 !== t && (l = t),
                                                    e.abrupt("return", t);
                                                case 9:
                                                    return e.prev = 9,
                                                    e.t0 = e.catch(0),
                                                    e.abrupt("return", !1);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e, null, [[0, 9]])
                                    }
                                    )));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                w = A[h.locale] && A[h.locale].loadFailed,
                                T = function(e, t) {
                                    return f.success = e,
                                    f.verificationContext.currentChannel = t,
                                    f.verificationContext.geeTestDto = void 0,
                                    f.verificationContext.recaptchaDto = d,
                                    !e && C.p && Object(C.p)(w, "warning"),
                                    f
                                }
                                ,
                                S = function(e, t) {
                                    return f.success = -1 !== e && !!e,
                                    f.verificationContext.currentChannel = t,
                                    f.verificationContext.recaptchaDto = void 0,
                                    f.verificationContext.geeTestDto = l,
                                    e || -1 === e || Object(C.p)(w, "warning"),
                                    f
                                }
                                ,
                                !_) {
                                    e.next = 16;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve({
                                    success: !0,
                                    verificationContext: {
                                        currentChannel: k,
                                        recaptchaDto: void 0,
                                        geeTestDto: void 0
                                    }
                                }));
                            case 16:
                                if (n = {},
                                Object(c.a)(n, k, {
                                    channel: k,
                                    verify: function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        y();
                                                    case 2:
                                                        return e.abrupt("return", e.sent);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    resolve: function(e) {
                                        return S(e, k)
                                    }
                                }),
                                Object(c.a)(n, L, {
                                    channel: L,
                                    verify: function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        m();
                                                    case 2:
                                                        return e.abrupt("return", e.sent);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    resolve: function(e) {
                                        return T(e, L)
                                    }
                                }),
                                Object(c.a)(n, P, {
                                    channel: P,
                                    verify: function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        v();
                                                    case 2:
                                                        return e.abrupt("return", e.sent);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    resolve: function(e) {
                                        return T(e, P)
                                    }
                                }),
                                Object(c.a)(n, D, {
                                    channel: D,
                                    verify: function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        E();
                                                    case 2:
                                                        return e.abrupt("return", e.sent);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    resolve: function(e) {
                                        return S(e, D)
                                    }
                                }),
                                Object(c.a)(n, x, {
                                    channel: x,
                                    verify: function() {
                                        var e = Object(o.a)(regeneratorRuntime.mark((function e() {
                                            return regeneratorRuntime.wrap((function(e) {
                                                for (; ; )
                                                    switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2,
                                                        O();
                                                    case 2:
                                                        return e.abrupt("return", e.sent);
                                                    case 3:
                                                    case "end":
                                                        return e.stop()
                                                    }
                                            }
                                            ), e)
                                        }
                                        )));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(),
                                    resolve: function(e) {
                                        return S(e, x)
                                    }
                                }),
                                R = n,
                                I = [],
                                t.forEach((function(e) {
                                    I.push(R[e])
                                }
                                )),
                                1 !== I.length) {
                                    e.next = 26;
                                    break
                                }
                                return N = I[0],
                                j = N.verify,
                                M = N.resolve,
                                e.t0 = M,
                                e.next = 24,
                                j();
                            case 24:
                                return e.t1 = e.sent,
                                e.abrupt("return", (0,
                                e.t0)(e.t1));
                            case 26:
                                i = 0;
                            case 27:
                                if (!(i < I.length)) {
                                    e.next = 48;
                                    break
                                }
                                if (I[i]) {
                                    e.next = 30;
                                    break
                                }
                                return e.abrupt("continue", 45);
                            case 30:
                                return H = I[i],
                                U = H.verify,
                                B = H.resolve,
                                e.next = 33,
                                U();
                            case 33:
                                if ((G = e.sent) || i !== I.length - 2) {
                                    e.next = 43;
                                    break
                                }
                                return z = I[i + 1],
                                $ = z.verify,
                                J = z.resolve,
                                e.t2 = J,
                                e.next = 39,
                                $();
                            case 39:
                                return e.t3 = e.sent,
                                e.abrupt("return", (0,
                                e.t2)(e.t3));
                            case 43:
                                if (!G) {
                                    e.next = 45;
                                    break
                                }
                                return e.abrupt("return", B(G));
                            case 45:
                                i++,
                                e.next = 27;
                                break;
                            case 48:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e)
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
              , $ = function() {
                var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                    var n, r, c, l, f;
                    return regeneratorRuntime.wrap((function(e) {
                        for (; ; )
                            switch (e.prev = e.next) {
                            case 0:
                                if (t && 0 !== t.length) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                if (t.includes(k) && (n = Date.now(),
                                E().then((function() {
                                    U({
                                        channel: k,
                                        type: 0,
                                        state: 0,
                                        cost: Date.now() - n
                                    })
                                }
                                )).catch((function(e) {
                                    U({
                                        channel: k,
                                        type: 0,
                                        state: /timeout/.test(e) ? -1 : 1,
                                        cost: Date.now() - n,
                                        detail: e && e.toString()
                                    }),
                                    console.log("preload geetest failed:", e)
                                }
                                ))),
                                !t.includes(L)) {
                                    e.next = 15;
                                    break
                                }
                                return r = 0,
                                e.prev = 5,
                                e.next = 8,
                                H({
                                    channel: L
                                }).then(function() {
                                    var e = Object(o.a)(regeneratorRuntime.mark((function e(t) {
                                        return regeneratorRuntime.wrap((function(e) {
                                            for (; ; )
                                                switch (e.prev = e.next) {
                                                case 0:
                                                    return r = Date.now(),
                                                    e.next = 3,
                                                    Object(d.b)(t).then((function() {
                                                        U({
                                                            channel: L,
                                                            type: 0,
                                                            state: 0,
                                                            cost: Date.now() - r
                                                        })
                                                    }
                                                    ));
                                                case 3:
                                                    return e.abrupt("return", e.sent);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                                }
                                        }
                                        ), e)
                                    }
                                    )));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                            case 8:
                                return e.abrupt("return", e.sent);
                            case 11:
                                e.prev = 11,
                                e.t0 = e.catch(5),
                                U({
                                    channel: L,
                                    type: 0,
                                    state: /timeout/.test(e.t0) ? -1 : 1,
                                    cost: r ? Date.now() - r : 0,
                                    detail: e.t0 && e.t0.toString()
                                }),
                                console.log("preload recaptcha failed:", e.t0);
                            case 15:
                                if (!t.includes(P)) {
                                    e.next = 27;
                                    break
                                }
                                return c = 0,
                                e.prev = 17,
                                e.next = 20,
                                Object(d.a)().then((function() {
                                    U({
                                        channel: P,
                                        type: 0,
                                        state: 0,
                                        cost: Date.now() - c
                                    })
                                }
                                )).catch((function(e) {
                                    U({
                                        channel: P,
                                        type: 0,
                                        state: /timeout/.test(e) ? -1 : 1,
                                        cost: Date.now() - c,
                                        detail: e && e.toString()
                                    })
                                }
                                ));
                            case 20:
                                return e.abrupt("return", e.sent);
                            case 23:
                                e.prev = 23,
                                e.t1 = e.catch(17),
                                U({
                                    channel: P,
                                    type: 0,
                                    state: /timeout/.test(e.t1) ? -1 : 1,
                                    cost: c ? Date.now() - c : 0,
                                    detail: e.t1 && e.t1.toString()
                                }),
                                console.log("preload recaptcha failed:", e.t1);
                            case 27:
                                if (!t.includes(D)) {
                                    e.next = 39;
                                    break
                                }
                                return l = 0,
                                e.prev = 29,
                                e.next = 32,
                                w().then((function() {
                                    U({
                                        channel: D,
                                        type: 0,
                                        state: 0,
                                        cost: Date.now() - l
                                    })
                                }
                                )).catch((function(e) {
                                    U({
                                        channel: D,
                                        type: 0,
                                        state: /timeout/.test(e) ? -1 : 1,
                                        cost: Date.now() - l,
                                        detail: e && e.toString()
                                    }),
                                    console.log("preload geetest failed:", e)
                                }
                                ));
                            case 32:
                                return e.abrupt("return", e.sent);
                            case 35:
                                e.prev = 35,
                                e.t2 = e.catch(29),
                                U({
                                    channel: D,
                                    type: 0,
                                    state: /timeout/.test(e.t2) ? -1 : 1,
                                    cost: l ? Date.now() - l : 0,
                                    detail: e.t2 && e.t2.toString()
                                }),
                                console.log("preload recaptcha failed:", e.t2);
                            case 39:
                                if (!t.includes(x)) {
                                    e.next = 51;
                                    break
                                }
                                return f = 0,
                                e.prev = 41,
                                e.next = 44,
                                S().then((function() {
                                    U({
                                        channel: x,
                                        type: 0,
                                        state: 0,
                                        cost: Date.now() - f
                                    })
                                }
                                )).catch((function(e) {
                                    U({
                                        channel: x,
                                        type: 0,
                                        state: /timeout/.test(e) ? -1 : 1,
                                        cost: Date.now() - f,
                                        detail: e && e.toString()
                                    }),
                                    console.log("preload botionv1 failed:", e)
                                }
                                ));
                            case 44:
                                return e.abrupt("return", e.sent);
                            case 47:
                                e.prev = 47,
                                e.t3 = e.catch(41),
                                U({
                                    channel: x,
                                    type: 0,
                                    state: /timeout/.test(e.t3) ? -1 : 1,
                                    cost: f ? Date.now() - f : 0,
                                    detail: e.t3 && e.t3.toString()
                                }),
                                console.log("preload botionv1 recaptcha failed:", e.t3);
                            case 51:
                            case "end":
                                return e.stop()
                            }
                    }
                    ), e, null, [[5, 11], [17, 23], [29, 35], [41, 47]])
                }
                )));
                return function(t) {
                    return e.apply(this, arguments)
                }
            }();
            t("verify", z),
            t("verifyScriptPreload", $)
        }
    },
    501: function(e, t, n) {
        "use strict";
        n(552),
        n(174);
        var r = n(363)
          , o = {
            name: "BButton",
            directives: {
                loading: n.n(r).a.directive
            },
            props: {
                disabled: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                size: {
                    type: String,
                    default: function() {
                        return "normal"
                    }
                },
                type: {
                    type: String,
                    default: function() {
                        return "default"
                    }
                },
                ghost: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                btnType: {
                    type: String,
                    default: function() {
                        return "button"
                    }
                },
                customClass: {
                    type: String,
                    default: function() {
                        return ""
                    }
                },
                loading: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                },
                autoTheme: {
                    type: Boolean,
                    default: function() {
                        return !1
                    }
                }
            }
        }
          , c = (n(752),
        n(127))
          , component = Object(c.a)(o, (function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("button", e._g({
                directives: [{
                    name: "loading",
                    rawName: "v-loading",
                    value: e.loading,
                    expression: "loading"
                }],
                class: ["b-button", e.size, e.type, {
                    ghost: e.ghost,
                    "adaptive-theme": e.autoTheme
                }, e.customClass],
                attrs: {
                    type: e.btnType,
                    disabled: e.disabled,
                    "element-loading-background": "rgba(0, 0, 0, 0.2)"
                }
            }, e.$listeners), [e._t("default")], 2)
        }
        ), [], !1, null, "7c4d4e2d", null);
        t.a = component.exports
    },
    503: function(e, t, n) {
        "use strict";
        n(5),
        n(43),
        n(18),
        n(40),
        n(44),
        n(49),
        n(48);
        var r, o = n(1), c = n(19);
        (r = (r = o.default) || o.default) && !r.__composition_api_installed__ && o.default.use(c.f);
        var l = o.default
          , d = (o.default.version,
        n(140))
          , f = n(270)
          , h = n(480)
          , _ = function() {
            return (_ = Object.assign || function(e) {
                for (var t, n = 1, r = arguments.length; n < r; n++)
                    for (var o in t = arguments[n])
                        Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                return e
            }
            ).apply(this, arguments)
        }
          , m = ["getWidth", "getHeight", "getDom", "getOption", "resize", "dispatchAction", "convertToPixel", "convertFromPixel", "containPixel", "getDataURL", "getConnectedDataURL", "appendData", "clear", "isDisposed", "dispose"];
        var v = {
            autoresize: Boolean
        }
          , y = {
            loading: Boolean,
            loadingOptions: Object
        }
          , E = []
          , O = [];
        !function(e, t) {
            if (e && "undefined" != typeof document) {
                var n, r = !0 === t.prepend ? "prepend" : "append", o = !0 === t.singleTag, i = "string" == typeof t.container ? document.querySelector(t.container) : document.getElementsByTagName("head")[0];
                if (o) {
                    var a = E.indexOf(i);
                    -1 === a && (a = E.push(i) - 1,
                    O[a] = {}),
                    n = O[a] && O[a][r] ? O[a][r] : O[a][r] = u()
                } else
                    n = u();
                65279 === e.charCodeAt(0) && (e = e.substring(1)),
                n.styleSheet ? n.styleSheet.cssText += e : n.appendChild(document.createTextNode(e))
            }
            function u() {
                var e = document.createElement("style");
                if (e.setAttribute("type", "text/css"),
                t.attributes)
                    for (var n = Object.keys(t.attributes), o = 0; o < n.length; o++)
                        e.setAttribute(n[o], t.attributes[n[o]]);
                var a = "prepend" === r ? "afterbegin" : "beforeend";
                return i.insertAdjacentElement(a, e),
                e
            }
        }("x-vue-echarts{display:block;width:100%;height:100%}", {});
        var w = /^on[^a-z]/
          , T = function(e) {
            return w.test(e)
        };
        l && l.config.ignoredElements.push("x-vue-echarts");
        var S = Object(c.h)({
            name: "echarts",
            props: _(_({
                option: Object,
                theme: {
                    type: [Object, String]
                },
                initOptions: Object,
                updateOptions: Object,
                group: String,
                manualUpdate: Boolean
            }, v), y),
            inheritAttrs: !1,
            setup: function(i, e) {
                var p = e.attrs
                  , t = e.listeners
                  , n = Object(c.N)()
                  , r = Object(c.N)()
                  , o = Object(c.N)()
                  , l = Object(c.n)("ecTheme", null)
                  , v = Object(c.n)("ecInitOptions", null)
                  , y = Object(c.n)("ecUpdateOptions", null)
                  , E = Object(c.Q)(i)
                  , O = E.autoresize
                  , w = E.manualUpdate
                  , S = E.loading
                  , C = E.loadingOptions
                  , R = Object(c.b)((function() {
                    return o.value || i.option || Object.create(null)
                }
                ))
                  , A = Object(c.b)((function() {
                    return i.theme || Object(c.S)(l) || {}
                }
                ))
                  , I = Object(c.b)((function() {
                    return i.initOptions || Object(c.S)(v) || {}
                }
                ))
                  , N = Object(c.b)((function() {
                    return i.updateOptions || Object(c.S)(y) || {}
                }
                ))
                  , k = Object(c.b)((function() {
                    return function(e) {
                        var t = {};
                        for (var n in e)
                            T(n) || (t[n] = e[n]);
                        return t
                    }(p)
                }
                ));
                function L(e) {
                    if (!r.value && n.value) {
                        var o = r.value = Object(d.b)(n.value, A.value, I.value);
                        i.group && (o.group = i.group);
                        var l = t;
                        l || (l = {},
                        Object.keys(p).filter((function(e) {
                            return 0 === e.indexOf("on") && e.length > 2
                        }
                        )).forEach((function(e) {
                            var t = e.charAt(2).toLowerCase() + e.slice(3);
                            l[t] = p[e]
                        }
                        ))),
                        Object.keys(l).forEach((function(e) {
                            var t = l[e];
                            t && (0 === e.indexOf("zr:") ? o.getZr().on(e.slice(3).toLowerCase(), t) : o.on(e.toLowerCase(), t))
                        }
                        )),
                        O.value ? Object(c.t)((function() {
                            !function() {
                                if (o && !o.isDisposed())
                                    try {
                                        o.resize()
                                    } catch (e) {
                                        if ("Cannot read property 'get' of undefined" === e.message)
                                            return;
                                        throw e
                                    }
                            }(),
                            f()
                        }
                        )) : f()
                    }
                    function f() {
                        o.setOption(e || R.value, N.value)
                    }
                }
                function P() {
                    r.value && (r.value.dispose(),
                    r.value = void 0)
                }
                var q = null;
                Object(c.Y)(w, (function(e) {
                    "function" == typeof q && (q(),
                    q = null),
                    e || (q = Object(c.Y)((function() {
                        return i.option
                    }
                    ), (function(e) {
                        e && (r.value ? r.value.setOption(e, N.value) : L())
                    }
                    ), {
                        deep: !0
                    }))
                }
                ), {
                    immediate: !0
                }),
                Object(c.Y)([A, I], (function() {
                    P(),
                    L()
                }
                ), {
                    deep: !0
                }),
                Object(c.Z)((function() {
                    i.group && r.value && (r.value.group = i.group)
                }
                ));
                var D, x, j, M = (D = r,
                x = L,
                j = Object.create(null),
                m.forEach((function(e) {
                    j[e] = function(e) {
                        return function() {
                            for (var t = [], n = 0; n < arguments.length; n++)
                                t[n] = arguments[n];
                            if (D.value || x(),
                            !D.value)
                                throw new Error("ECharts is not initialized yet.");
                            return D.value[e].apply(D.value, t)
                        }
                    }(e)
                }
                )),
                j);
                return function(e, i, a) {
                    var u = Object(c.n)("ecLoadingOptions", {})
                      , t = Object(c.b)((function() {
                        return _(_({}, Object(c.S)(u)), null == a ? void 0 : a.value)
                    }
                    ));
                    Object(c.Z)((function() {
                        var n = e.value;
                        n && (i.value ? n.showLoading(t.value) : n.hideLoading())
                    }
                    ))
                }(r, S, C),
                function(e, t, n) {
                    var r = null;
                    Object(c.Y)([n, e, t], (function(e, t, n) {
                        var o = e[0]
                          , i = e[1]
                          , a = e[2];
                        o && i && a && (r = Object(f.b)((function() {
                            i.resize()
                        }
                        ), 100),
                        Object(h.a)(o, r)),
                        n((function() {
                            r && o && Object(h.b)(o, r)
                        }
                        ))
                    }
                    ))
                }(r, O, n),
                Object(c.A)((function() {
                    i.option && L()
                }
                )),
                Object(c.D)(P),
                _({
                    chart: r,
                    root: n,
                    setOption: function(e, t) {
                        i.manualUpdate && (o.value = e),
                        r.value ? r.value.setOption(e, t || {}) : L(e)
                    },
                    nonEventAttrs: k
                }, M)
            },
            render: function() {
                var e = _({}, this.nonEventAttrs);
                return e.ref = "root",
                e.class = e.class ? ["echarts"].concat(e.class) : "echarts",
                Object(c.m)("x-vue-echarts", e)
            }
        });
        t.a = S
    },
    553: function(e, t, n) {},
    554: function(e, t, n) {},
    555: function(e, t, n) {},
    607: function(e) {
        e.exports = JSON.parse('{"loadFailed":"網路異常，驗證超時，請重新整理頁面重試或者聯絡客服"}')
    },
    621: function(e, t, n) {
        "use strict";
        t.a = function(e, t) {
            return t = t || {},
            new Promise((function(n, r) {
                var s = new XMLHttpRequest
                  , o = []
                  , u = []
                  , i = {}
                  , a = function() {
                    return {
                        ok: 2 == (s.status / 100 | 0),
                        statusText: s.statusText,
                        status: s.status,
                        url: s.responseURL,
                        text: function() {
                            return Promise.resolve(s.responseText)
                        },
                        json: function() {
                            return Promise.resolve(s.responseText).then(JSON.parse)
                        },
                        blob: function() {
                            return Promise.resolve(new Blob([s.response]))
                        },
                        clone: a,
                        headers: {
                            keys: function() {
                                return o
                            },
                            entries: function() {
                                return u
                            },
                            get: function(e) {
                                return i[e.toLowerCase()]
                            },
                            has: function(e) {
                                return e.toLowerCase()in i
                            }
                        }
                    }
                };
                for (var c in s.open(t.method || "get", e, !0),
                s.onload = function() {
                    s.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm, (function(e, t, n) {
                        o.push(t = t.toLowerCase()),
                        u.push([t, n]),
                        i[t] = i[t] ? i[t] + "," + n : n
                    }
                    )),
                    n(a())
                }
                ,
                s.onerror = r,
                s.withCredentials = "include" == t.credentials,
                t.headers)
                    s.setRequestHeader(c, t.headers[c]);
                s.send(t.body || null)
            }
            ))
        }
    },
    624: function(e, t, n) {
        "use strict";
        n(43),
        n(45),
        n(44),
        n(5),
        n(63),
        n(40),
        n(66);
        var r = n(3)
          , o = (n(53),
        n(83))
          , c = n(120);
        function l(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function d(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? l(Object(source), !0).forEach((function(t) {
                    Object(r.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : l(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var f = {
            namespaced: !0,
            state: function() {
                return {
                    tabState: {
                        visible: !0,
                        leaveTime: 0,
                        backTime: 0
                    },
                    onlineState: {
                        online: "online",
                        changelog: []
                    },
                    weakNetworkState: {
                        weak: !1
                    },
                    screenWidth: 1920,
                    bodyWidth: 1920,
                    klineColorType: o.t.GURD,
                    klineColorConfig: {
                        "kline-up": "",
                        "kline-down": ""
                    },
                    themeConfig: {},
                    themeConfigInlineStyle: "",
                    theme: "light",
                    prevTheme: "light",
                    lockTheme: !1
                }
            },
            getters: {
                tabActive: function(e) {
                    return e.tabState.visible
                },
                isOnline: function(e) {
                    return "online" === e.onlineState.online
                },
                isWeakNetwork: function(e) {
                    return e.weakNetworkState.weak
                },
                padScreen: function(e) {
                    return e.screenWidth > 750 && e.screenWidth < 1200
                },
                desktopScreen: function(e) {
                    return e.screenWidth > 1200
                },
                mobileScreen: function(e) {
                    return e.screenWidth < 750
                },
                reverseLayout: function(e, t, n) {
                    return ["fa-ir", "ar-ar", "ku-ku"].includes(n.i18n.locale)
                },
                klineColor: function(e) {
                    return {
                        up: e.klineColorConfig["kline-up"],
                        down: e.klineColorConfig["kline-down"]
                    }
                },
                isKlineColorReverse: function(e) {
                    return e.klineColorType === o.t.RUGD
                }
            },
            mutations: {
                SET_TAB_VISIBLE: function(e, t) {
                    e.tabState.visible = t,
                    t ? e.tabState.backTime = Date.now() : (e.tabState.leaveTime = Date.now(),
                    e.tabState.backTime = 0)
                },
                SET_NETWORK_ONLINE: function(e, t) {
                    e.onlineState.online = t,
                    e.onlineState.changelog.push({
                        online: t,
                        time: Date.now()
                    })
                },
                CLEAR_NETWORK_ONLINE_CHANGELOG: function(e) {
                    e.onlineState.changelog = []
                },
                SET_SCREEN_WIDTH: function(e, t) {
                    e.screenWidth = t
                },
                SET_BODY_WIDTH: function(e, t) {
                    e.bodyWidth = t
                },
                GENERATE_THEME_CONFIG: function(e) {
                    e.klineColorConfig = this.$theme.getKlineColorConfig(e.klineColorType, e.theme),
                    e.themeConfig = this.$theme.getThemeConfig({
                        klineColorType: e.klineColorType,
                        theme: e.theme
                    }),
                    e.themeConfigInlineStyle = this.$theme.getThemeConfigInlineStyle({
                        klineColorType: e.klineColorType,
                        theme: e.theme
                    })
                },
                SET_KLINE_COLOR_TYPE: function(e, t) {
                    e.klineColorType = t
                },
                SET_THEME: function(e, t) {
                    e.theme = t
                },
                SET_PREV_THEME: function(e, t) {
                    e.prevTheme = t
                },
                SET_LOCK_THEME: function(e, t) {
                    e.lockTheme = t
                }
            },
            actions: {
                toggleTabActive: function(e) {
                    (0,
                    e.commit)("SET_TAB_VISIBLE", !e.state.tabState.visible)
                },
                updateTabVisibleState: function(e) {
                    var t = e.commit
                      , n = e.state;
                    t("SET_TAB_VISIBLE", "visible" === document.visibilityState),
                    n.tabState.leaveTime && n.tabState.backTime && this.$log({
                        type: "sys",
                        event: c.b.SYS_VISIBLE_CHANGE,
                        prop: d(d({}, n.tabState), {}, {
                            duration: (n.tabState.backTime - n.tabState.leaveTime) / 1e3,
                            memory: JSON.stringify(window.performance && window.performance.memory || {})
                        })
                    })
                },
                updateNetworkOnlineState: function(e, t) {
                    var n = e.commit
                      , r = e.state
                      , o = e.getters;
                    n("SET_NETWORK_ONLINE", t),
                    r.onlineState.changelog.length > 1 && o.isOnline && (this.$log({
                        type: "sys",
                        event: c.b.SYS_NETWORK_CHANGE_LOG,
                        prop: JSON.stringify(r.onlineState.changelog)
                    }),
                    n("CLEAR_NETWORK_ONLINE_CHANGELOG"))
                },
                updateScreenWidth: function(e) {
                    (0,
                    e.commit)("SET_SCREEN_WIDTH", window.document.body.clientWidth)
                },
                getKlineColorType: function(e) {
                    var t = e.commit;
                    t("SET_KLINE_COLOR_TYPE", this.$theme.getKlineColorType()),
                    t("GENERATE_THEME_CONFIG")
                },
                setKlineColorType: function(e, t) {
                    var n = e.commit;
                    this.$theme.setKlineColorType(t),
                    n("SET_KLINE_COLOR_TYPE", t),
                    n("GENERATE_THEME_CONFIG")
                },
                getTheme: function(e) {
                    var t = e.commit;
                    try {
                        t("SET_THEME", this.$theme.getTheme())
                    } catch (e) {
                        t("SET_THEME", "light"),
                        console.log(e)
                    }
                    t("GENERATE_THEME_CONFIG")
                },
                setTheme: function(e, t) {
                    var n = e.commit;
                    this.$theme.setTheme(t),
                    n("SET_THEME", t),
                    n("GENERATE_THEME_CONFIG")
                },
                lockTheme: function(e, t) {
                    var n = e.commit;
                    n("SET_PREV_THEME", e.state.theme),
                    n("SET_LOCK_THEME", !0),
                    n("SET_THEME", t),
                    n("GENERATE_THEME_CONFIG")
                },
                unlockTheme: function(e) {
                    var t = e.dispatch
                      , n = e.commit
                      , r = e.state;
                    n("SET_LOCK_THEME", !1),
                    t("setTheme", r.prevTheme)
                }
            }
        };
        t.a = f
    },
    625: function(e, t, n) {
        "use strict";
        t.a = {
            namespaced: !0,
            state: function() {
                return {
                    showI18nKey: !1
                }
            },
            actions: {
                updateShowI18nKey: function(e, t) {
                    (0,
                    e.commit)("SET_SHOW_I18N_KEY", t)
                }
            },
            mutations: {
                SET_SHOW_I18N_KEY: function(e, t) {
                    e.showI18nKey = t
                }
            }
        }
    },
    627: function(e, t) {
        function n(e, t) {
            var r = {
                name: e.name,
                path: e.path,
                hash: e.hash,
                query: e.query,
                params: e.params,
                fullPath: e.fullPath,
                meta: e.meta
            };
            return t && (r.from = n(t)),
            Object.freeze(r)
        }
        t.sync = function(e, t, r) {
            var o = (r || {}).moduleName || "route";
            e.registerModule(o, {
                namespaced: !0,
                state: n(t.currentRoute),
                mutations: {
                    ROUTE_CHANGED: function(t, r) {
                        e.state[o] = n(r.to, r.from)
                    }
                }
            });
            var c, l = !1, d = e.watch((function(e) {
                return e[o]
            }
            ), (function(e) {
                var n = e.fullPath;
                n !== c && (null != c && (l = !0,
                t.push(e)),
                c = n)
            }
            ), {
                sync: !0
            }), f = t.afterEach((function(t, n) {
                l ? l = !1 : (c = t.fullPath,
                e.commit(o + "/ROUTE_CHANGED", {
                    to: t,
                    from: n
                }))
            }
            ));
            return function() {
                null != f && f(),
                null != d && d(),
                e.unregisterModule(o)
            }
        }
    },
    630: function(e, t, n) {
        var r;
        !function() {
            var n = "1.11.1"
              , o = {};
            !function() {
                var e = o
                  , t = (e.KEY_LABEL = "label",
                e.KEY_NAME = "name",
                e.KEY_TYPE = "type",
                e.KEY_CATEGORY = "category",
                e.KEY_OS = "os",
                e.KEY_OS_VERSION = "os_version",
                e.KEY_VENDOR = "vendor",
                e.KEY_VERSION = "version",
                e.CATEGORY_PC = "pc")
                  , n = e.CATEGORY_SMARTPHONE = "smartphone"
                  , r = e.CATEGORY_MOBILEPHONE = "mobilephone"
                  , c = e.CATEGORY_CRAWLER = "crawler"
                  , l = e.CATEGORY_APPLIANCE = "appliance"
                  , d = e.CATEGORY_MISC = "misc"
                  , f = e.ATTRIBUTE_NAME = "name"
                  , h = e.ATTRIBUTE_CATEGORY = "category"
                  , _ = e.ATTRIBUTE_OS = "os"
                  , m = e.ATTRIBUTE_OS_VERSION = "os_version"
                  , v = e.ATTRIBUTE_VENDOR = "vendor"
                  , y = e.ATTRIBUTE_VERSION = "version"
                  , E = e.VALUE_UNKNOWN = "UNKNOWN"
                  , O = (e.CATEGORY_LIST = [t, n, r, c, l, d, E],
                e.ATTRIBUTE_LIST = [f, h, _, v, y, m],
                {
                    MSIE: {
                        label: "MSIE",
                        name: "Internet Explorer",
                        type: "browser",
                        vendor: "Microsoft"
                    },
                    Edge: {
                        label: "Edge",
                        name: "Edge",
                        type: "browser",
                        vendor: "Microsoft"
                    },
                    Chrome: {
                        label: "Chrome",
                        name: "Chrome",
                        type: "browser",
                        vendor: "Google"
                    },
                    Safari: {
                        label: "Safari",
                        name: "Safari",
                        type: "browser",
                        vendor: "Apple"
                    },
                    Firefox: {
                        label: "Firefox",
                        name: "Firefox",
                        type: "browser",
                        vendor: "Mozilla"
                    },
                    Opera: {
                        label: "Opera",
                        name: "Opera",
                        type: "browser",
                        vendor: "Opera"
                    },
                    Vivaldi: {
                        label: "Vivaldi",
                        name: "Vivaldi",
                        type: "browser",
                        vendor: "Vivaldi Technologies"
                    },
                    Sleipnir: {
                        label: "Sleipnir",
                        name: "Sleipnir",
                        type: "browser",
                        vendor: "Fenrir Inc."
                    },
                    GSA: {
                        label: "GSA",
                        name: "Google Search App",
                        type: "browser",
                        vendor: "Google"
                    },
                    Webview: {
                        label: "Webview",
                        name: "Webview",
                        type: "browser",
                        vendor: "OS vendor"
                    },
                    YaBrowser: {
                        label: "YaBrowser",
                        name: "Yandex Browser",
                        type: "browser",
                        vendor: "Yandex"
                    },
                    Win: {
                        label: "Win",
                        name: "Windows UNKNOWN Ver",
                        type: "os",
                        category: "pc"
                    },
                    Win10: {
                        label: "Win10",
                        name: "Windows 10",
                        type: "os",
                        category: "pc"
                    },
                    "Win8.1": {
                        label: "Win8.1",
                        name: "Windows 8.1",
                        type: "os",
                        category: "pc"
                    },
                    Win8: {
                        label: "Win8",
                        name: "Windows 8",
                        type: "os",
                        category: "pc"
                    },
                    Win7: {
                        label: "Win7",
                        name: "Windows 7",
                        type: "os",
                        category: "pc"
                    },
                    WinVista: {
                        label: "WinVista",
                        name: "Windows Vista",
                        type: "os",
                        category: "pc"
                    },
                    WinXP: {
                        label: "WinXP",
                        name: "Windows XP",
                        type: "os",
                        category: "pc"
                    },
                    Win2000: {
                        label: "Win2000",
                        name: "Windows 2000",
                        type: "os",
                        category: "pc"
                    },
                    WinNT4: {
                        label: "WinNT4",
                        name: "Windows NT 4.0",
                        type: "os",
                        category: "pc"
                    },
                    WinMe: {
                        label: "WinMe",
                        name: "Windows Me",
                        type: "os",
                        category: "pc"
                    },
                    Win98: {
                        label: "Win98",
                        name: "Windows 98",
                        type: "os",
                        category: "pc"
                    },
                    Win95: {
                        label: "Win95",
                        name: "Windows 95",
                        type: "os",
                        category: "pc"
                    },
                    WinPhone: {
                        label: "WinPhone",
                        name: "Windows Phone OS",
                        type: "os",
                        category: "smartphone"
                    },
                    WinCE: {
                        label: "WinCE",
                        name: "Windows CE",
                        type: "os",
                        category: "smartphone"
                    },
                    OSX: {
                        label: "OSX",
                        name: "Mac OSX",
                        type: "os",
                        category: "pc"
                    },
                    MacOS: {
                        label: "MacOS",
                        name: "Mac OS Classic",
                        type: "os",
                        category: "pc"
                    },
                    Linux: {
                        label: "Linux",
                        name: "Linux",
                        type: "os",
                        category: "pc"
                    },
                    BSD: {
                        label: "BSD",
                        name: "BSD",
                        type: "os",
                        category: "pc"
                    },
                    ChromeOS: {
                        label: "ChromeOS",
                        name: "ChromeOS",
                        type: "os",
                        category: "pc"
                    },
                    Android: {
                        label: "Android",
                        name: "Android",
                        type: "os",
                        category: "smartphone"
                    },
                    iPhone: {
                        label: "iPhone",
                        name: "iPhone",
                        type: "os",
                        category: "smartphone"
                    },
                    iPad: {
                        label: "iPad",
                        name: "iPad",
                        type: "os",
                        category: "smartphone"
                    },
                    iPod: {
                        label: "iPod",
                        name: "iPod",
                        type: "os",
                        category: "smartphone"
                    },
                    iOS: {
                        label: "iOS",
                        name: "iOS",
                        type: "os",
                        category: "smartphone"
                    },
                    FirefoxOS: {
                        label: "FirefoxOS",
                        name: "Firefox OS",
                        type: "os",
                        category: "smartphone"
                    },
                    BlackBerry: {
                        label: "BlackBerry",
                        name: "BlackBerry",
                        type: "os",
                        category: "smartphone"
                    },
                    BlackBerry10: {
                        label: "BlackBerry10",
                        name: "BlackBerry 10",
                        type: "os",
                        category: "smartphone"
                    },
                    docomo: {
                        label: "docomo",
                        name: "docomo",
                        type: "full",
                        vendor: "docomo",
                        category: "mobilephone",
                        os: "docomo"
                    },
                    au: {
                        label: "au",
                        name: "au by KDDI",
                        type: "full",
                        vendor: "au",
                        category: "mobilephone",
                        os: "au"
                    },
                    SoftBank: {
                        label: "SoftBank",
                        name: "SoftBank Mobile",
                        type: "full",
                        vendor: "SoftBank",
                        category: "mobilephone",
                        os: "SoftBank"
                    },
                    willcom: {
                        label: "willcom",
                        name: "WILLCOM",
                        type: "full",
                        vendor: "WILLCOM",
                        category: "mobilephone",
                        os: "WILLCOM"
                    },
                    jig: {
                        label: "jig",
                        name: "jig browser",
                        type: "full",
                        vendor: "",
                        category: "mobilephone",
                        os: "jig"
                    },
                    emobile: {
                        label: "emobile",
                        name: "emobile",
                        type: "full",
                        vendor: "",
                        category: "mobilephone",
                        os: "emobile"
                    },
                    SymbianOS: {
                        label: "SymbianOS",
                        name: "SymbianOS",
                        type: "full",
                        vendor: "",
                        category: "mobilephone",
                        os: "SymbianOS"
                    },
                    MobileTranscoder: {
                        label: "MobileTranscoder",
                        name: "Mobile Transcoder",
                        type: "full",
                        vendor: "",
                        category: "mobilephone",
                        os: "Mobile Transcoder"
                    },
                    Nintendo3DS: {
                        label: "Nintendo3DS",
                        name: "Nintendo 3DS",
                        type: "full",
                        vendor: "Nintendo",
                        category: "appliance",
                        os: "Nintendo 3DS"
                    },
                    NintendoDSi: {
                        label: "NintendoDSi",
                        name: "Nintendo DSi",
                        type: "full",
                        vendor: "Nintendo",
                        category: "appliance",
                        os: "Nintendo DSi"
                    },
                    NintendoWii: {
                        label: "NintendoWii",
                        name: "Nintendo Wii",
                        type: "full",
                        vendor: "Nintendo",
                        category: "appliance",
                        os: "Nintendo Wii"
                    },
                    NintendoWiiU: {
                        label: "NintendoWiiU",
                        name: "Nintendo Wii U",
                        type: "full",
                        vendor: "Nintendo",
                        category: "appliance",
                        os: "Nintendo Wii U"
                    },
                    PSP: {
                        label: "PSP",
                        name: "PlayStation Portable",
                        type: "full",
                        vendor: "Sony",
                        category: "appliance",
                        os: "PlayStation Portable"
                    },
                    PSVita: {
                        label: "PSVita",
                        name: "PlayStation Vita",
                        type: "full",
                        vendor: "Sony",
                        category: "appliance",
                        os: "PlayStation Vita"
                    },
                    PS3: {
                        label: "PS3",
                        name: "PlayStation 3",
                        type: "full",
                        vendor: "Sony",
                        category: "appliance",
                        os: "PlayStation 3"
                    },
                    PS4: {
                        label: "PS4",
                        name: "PlayStation 4",
                        type: "full",
                        vendor: "Sony",
                        category: "appliance",
                        os: "PlayStation 4"
                    },
                    Xbox360: {
                        label: "Xbox360",
                        name: "Xbox 360",
                        type: "full",
                        vendor: "Microsoft",
                        category: "appliance",
                        os: "Xbox 360"
                    },
                    XboxOne: {
                        label: "XboxOne",
                        name: "Xbox One",
                        type: "full",
                        vendor: "Microsoft",
                        category: "appliance",
                        os: "Xbox One"
                    },
                    DigitalTV: {
                        label: "DigitalTV",
                        name: "InternetTVBrowser",
                        type: "full",
                        vendor: "",
                        category: "appliance",
                        os: "DigitalTV"
                    },
                    SafariRSSReader: {
                        label: "SafariRSSReader",
                        name: "Safari RSSReader",
                        type: "full",
                        vendor: "Apple",
                        category: "misc"
                    },
                    GoogleDesktop: {
                        label: "GoogleDesktop",
                        name: "Google Desktop",
                        type: "full",
                        vendor: "Google",
                        category: "misc"
                    },
                    WindowsRSSReader: {
                        label: "WindowsRSSReader",
                        name: "Windows RSSReader",
                        type: "full",
                        vendor: "Microsoft",
                        category: "misc"
                    },
                    VariousRSSReader: {
                        label: "VariousRSSReader",
                        name: "RSSReader",
                        type: "full",
                        vendor: "",
                        category: "misc"
                    },
                    HTTPLibrary: {
                        label: "HTTPLibrary",
                        name: "HTTP Library",
                        type: "full",
                        vendor: "",
                        category: "misc"
                    },
                    GoogleBot: {
                        label: "GoogleBot",
                        name: "Googlebot",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    GoogleBotMobile: {
                        label: "GoogleBotMobile",
                        name: "Googlebot Mobile",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    GoogleMediaPartners: {
                        label: "GoogleMediaPartners",
                        name: "Google Mediapartners",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    GoogleFeedFetcher: {
                        label: "GoogleFeedFetcher",
                        name: "Google Feedfetcher",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    GoogleAppEngine: {
                        label: "GoogleAppEngine",
                        name: "Google AppEngine",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    GoogleWebPreview: {
                        label: "GoogleWebPreview",
                        name: "Google Web Preview",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    YahooSlurp: {
                        label: "YahooSlurp",
                        name: "Yahoo! Slurp",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    YahooJP: {
                        label: "YahooJP",
                        name: "Yahoo! Japan",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    YahooPipes: {
                        label: "YahooPipes",
                        name: "Yahoo! Pipes",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    Baiduspider: {
                        label: "Baiduspider",
                        name: "Baiduspider",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    msnbot: {
                        label: "msnbot",
                        name: "msnbot",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    bingbot: {
                        label: "bingbot",
                        name: "bingbot",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    BingPreview: {
                        label: "BingPreview",
                        name: "BingPreview",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    Yeti: {
                        label: "Yeti",
                        name: "Naver Yeti",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    FeedBurner: {
                        label: "FeedBurner",
                        name: "Google FeedBurner",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    facebook: {
                        label: "facebook",
                        name: "facebook",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    twitter: {
                        label: "twitter",
                        name: "twitter",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    trendictionbot: {
                        label: "trendictionbot",
                        name: "trendiction",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    mixi: {
                        label: "mixi",
                        name: "mixi",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    IndyLibrary: {
                        label: "IndyLibrary",
                        name: "Indy Library",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    ApplePubSub: {
                        label: "ApplePubSub",
                        name: "Apple iCloud",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    Genieo: {
                        label: "Genieo",
                        name: "Genieo Web Filter",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    topsyButterfly: {
                        label: "topsyButterfly",
                        name: "topsy Butterfly",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    rogerbot: {
                        label: "rogerbot",
                        name: "SeoMoz rogerbot",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    AhrefsBot: {
                        label: "AhrefsBot",
                        name: "ahref AhrefsBot",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    radian6: {
                        label: "radian6",
                        name: "salesforce radian6",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    Hatena: {
                        label: "Hatena",
                        name: "Hatena",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    goo: {
                        label: "goo",
                        name: "goo",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    livedoorFeedFetcher: {
                        label: "livedoorFeedFetcher",
                        name: "livedoor FeedFetcher",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    },
                    VariousCrawler: {
                        label: "VariousCrawler",
                        name: "misc crawler",
                        type: "full",
                        vendor: "",
                        category: "crawler"
                    }
                });
                e.get = function(label) {
                    return O[label]
                }
            }();
            var c = {};
            !function() {
                var e = c;
                e.updateMap = function(e, source) {
                    for (var t in source)
                        t !== o.KEY_LABEL && t !== o.KEY_TYPE && source[t] && source[t].length > 0 && (e[t] = source[t])
                }
                ,
                e.updateCategory = function(e, t) {
                    e[o.ATTRIBUTE_CATEGORY] = t
                }
                ,
                e.updateVersion = function(e, t) {
                    e[o.ATTRIBUTE_VERSION] = t
                }
                ,
                e.updateOs = function(e, t) {
                    e[o.ATTRIBUTE_OS] = t
                }
                ,
                e.updateOsVersion = function(e, t) {
                    e[o.ATTRIBUTE_OS_VERSION] = t
                }
            }();
            var l = {};
            !function() {
                var e = l
                  , t = /MSIE ([.0-9]+);/
                  , n = /Trident\/[.0-9]+;/
                  , r = / rv:([.0-9]+)/
                  , c = /IEMobile\/([.0-9]+);/
                  , d = (e.challengeMSIE = function(e, l) {
                    if (e.indexOf("compatible; MSIE") < 0 && e.indexOf("Trident/") < 0 && e.indexOf("IEMobile/"))
                        return !1;
                    var d, f = t.exec(e);
                    return f || n.exec(e) && (f = r.exec(e)),
                    f || (f = c.exec(e)),
                    d = f ? f[1] : o.VALUE_UNKNOWN,
                    y(l, o.get("MSIE")),
                    T(l, d),
                    !0
                }
                ,
                /YaBrowser\/([.0-9]+)/)
                  , f = (e.challengeYandexBrowser = function(e, t) {
                    if (e.indexOf("YaBrowser/") < 0)
                        return !1;
                    var n, r = d.exec(e);
                    return n = r ? r[1] : o.VALUE_UNKNOWN,
                    y(t, o.get("YaBrowser")),
                    T(t, n),
                    !0
                }
                ,
                /(?:Edge|Edg|EdgiOS|EdgA)\/([.0-9]+)/)
                  , h = /FxiOS\/([.0-9]+)/
                  , _ = /(?:Chrome|CrMo|CriOS)\/([.0-9]+)/
                  , m = /OPR\/([.0-9]+)/
                  , v = /GSA\/([.0-9]+)/
                  , w = /Version\/([.0-9]+)/
                  , S = (e.challengeSafariChrome = function(e, t) {
                    if (e.indexOf("Safari/") < 0)
                        return !1;
                    if (e.indexOf("Chrome") >= 0 && e.indexOf("wv") >= 0)
                        return !1;
                    var n, r, c = o.VALUE_UNKNOWN;
                    return (n = f.exec(e)) ? (c = n[1],
                    y(t, o.get("Edge")),
                    T(t, c),
                    !0) : (n = h.exec(e)) ? (c = n[1],
                    y(t, o.get("Firefox")),
                    T(t, c),
                    !0) : (n = _.exec(e)) ? (r = m.exec(e)) ? (c = r[1],
                    y(t, o.get("Opera")),
                    T(t, c),
                    !0) : (c = n[1],
                    y(t, o.get("Chrome")),
                    T(t, c),
                    !0) : (n = v.exec(e)) ? (c = n[1],
                    y(t, o.get("GSA")),
                    T(t, c),
                    !0) : ((n = w.exec(e)) && (c = n[1]),
                    y(t, o.get("Safari")),
                    T(t, c),
                    !0)
                }
                ,
                /Firefox\/([.0-9]+)/)
                  , C = (e.challengeFirefox = function(e, t) {
                    if (e.indexOf("Firefox/") < 0)
                        return !1;
                    var n = o.VALUE_UNKNOWN
                      , r = S.exec(e);
                    return r && (n = r[1]),
                    y(t, o.get("Firefox")),
                    T(t, n),
                    !0
                }
                ,
                /Version\/([.0-9]+)/)
                  , R = /Opera[\/ ]([.0-9]+)/
                  , A = (e.challengeOpera = function(e, t) {
                    if (e.indexOf("Opera") < 0)
                        return !1;
                    var n = o.VALUE_UNKNOWN
                      , r = C.exec(e);
                    return (r || (r = R.exec(e))) && (n = r[1]),
                    y(t, o.get("Opera")),
                    T(t, n),
                    !0
                }
                ,
                /iP(hone;|ad;|od) .*like Mac OS X/)
                  , I = /Version\/([.0-9]+)/
                  , N = (e.challengeWebview = function(e, t) {
                    var n, r = o.VALUE_UNKNOWN;
                    return e.indexOf("Chrome") >= 0 && e.indexOf("wv") >= 0 ? ((n = I.exec(e)) && (r = n[1]),
                    y(t, o.get("Webview")),
                    T(t, r),
                    !0) : !!A.exec(e) && (!(e.indexOf("Safari/") > -1) && ((n = I.exec(e)) && (r = n[1]),
                    y(t, o.get("Webview")),
                    T(t, r),
                    !0))
                }
                ,
                /Sleipnir\/([.0-9]+)/)
                  , k = (e.challengeSleipnir = function(e, t) {
                    if (e.indexOf("Sleipnir/") < 0)
                        return !1;
                    var n = o.VALUE_UNKNOWN
                      , r = N.exec(e);
                    r && (n = r[1]),
                    y(t, o.get("Sleipnir")),
                    T(t, n);
                    var c = o.get("Win");
                    return E(t, c[o.KEY_CATEGORY]),
                    O(t, c[o.KEY_NAME]),
                    !0
                }
                ,
                /Vivaldi\/([.0-9]+)/);
                e.challengeVivaldi = function(e, t) {
                    if (e.indexOf("Vivaldi/") < 0)
                        return !1;
                    var n = o.VALUE_UNKNOWN
                      , r = k.exec(e);
                    return r && (n = r[1]),
                    y(t, o.get("Vivaldi")),
                    T(t, n),
                    !0
                }
            }();
            var d = {};
            !function() {
                var e = d
                  , t = /Windows ([ .a-zA-Z0-9]+)[;\\)]/
                  , n = /^Phone(?: OS)? ([.0-9]+)/;
                e.challengeWindows = function(e, r) {
                    if (e.indexOf("Windows") < 0)
                        return !1;
                    var c;
                    if (e.indexOf("Xbox") > -1)
                        return c = e.indexOf("Xbox; Xbox One)") > -1 ? o.get("XboxOne") : o.get("Xbox360"),
                        y(r, c),
                        !0;
                    var data = o.get("Win")
                      , l = t.exec(e);
                    if (!l)
                        return E(r, data[o.KEY_CATEGORY]),
                        O(r, data[o.KEY_NAME]),
                        !0;
                    var d = l[1];
                    return "NT 10.0" === d ? data = o.get("Win10") : "NT 6.3" === d ? data = o.get("Win8.1") : "NT 6.2" === d ? data = o.get("Win8") : "NT 6.1" === d ? data = o.get("Win7") : "NT 6.0" === d ? data = o.get("WinVista") : "NT 5.1" === d ? data = o.get("WinXP") : (l = n.exec(d)) ? (data = o.get("WinPhone"),
                    d = l[1]) : "NT 5.0" === d ? data = o.get("Win2000") : "NT 4.0" === d ? data = o.get("WinNT4") : "98" === d ? data = o.get("Win98") : "95" === d ? data = o.get("Win95") : "CE" === d && (data = o.get("WinCE")),
                    E(r, data[o.KEY_CATEGORY]),
                    O(r, data[o.KEY_NAME]),
                    w(r, d),
                    !0
                }
                ,
                e.challengeOSX = function(e, t) {
                    if (e.indexOf("Mac OS X") < 0)
                        return !1;
                    var n, r, data = o.get("OSX");
                    return e.indexOf("like Mac OS X") >= 0 ? (e.indexOf("iPhone;") >= 0 ? data = o.get("iPhone") : e.indexOf("iPad;") >= 0 ? data = o.get("iPad") : e.indexOf("iPod") >= 0 && (data = o.get("iPod")),
                    (r = /; CPU(?: iPhone)? OS (\d+_\d+(?:_\d+)?) like Mac OS X/.exec(e)) && (n = r[1].replace(/_/g, "."))) : (r = /Mac OS X (10[._]\d+(?:[._]\d+)?)(?:\)|;)/.exec(e)) && (n = r[1].replace(/_/g, ".")),
                    E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_NAME]),
                    n && w(t, n),
                    !0
                }
                ,
                e.challengeLinux = function(e, t) {
                    if (e.indexOf("Linux") < 0)
                        return !1;
                    var n, r, data = o.get("Linux");
                    return e.indexOf("Android") >= 0 && (data = o.get("Android"),
                    (r = /Android[- ](\d+(?:\.\d+(?:\.\d+)?)?)/.exec(e)) && (n = r[1])),
                    E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_NAME]),
                    n && w(t, n),
                    !0
                }
                ,
                e.challengeSmartPhone = function(e, t) {
                    var n, data = null, r = null;
                    return e.indexOf("iPhone") >= 0 ? data = o.get("iPhone") : e.indexOf("iPad") >= 0 ? data = o.get("iPad") : e.indexOf("iPod") >= 0 ? data = o.get("iPod") : e.indexOf("Android") >= 0 ? data = o.get("Android") : e.indexOf("CFNetwork") >= 0 ? data = o.get("iOS") : e.indexOf("BB10") >= 0 ? (data = o.get("BlackBerry10"),
                    (n = /BB10(?:.+)Version\/([.0-9]+)/.exec(e)) && (r = n[1])) : e.indexOf("BlackBerry") >= 0 && (data = o.get("BlackBerry"),
                    (n = /BlackBerry(?:\d+)\/([.0-9]+) /.exec(e)) && (r = n[1])),
                    t[o.KEY_NAME] && t[o.KEY_NAME] === o.get("Firefox")[o.KEY_NAME] && (n = /^Mozilla\/[.0-9]+ \((?:Mobile|Tablet);(?:.*;)? rv:([.0-9]+)\) Gecko\/[.0-9]+ Firefox\/[.0-9]+$/.exec(e)) && (data = o.get("FirefoxOS"),
                    r = n[1]),
                    !!data && (E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_NAME]),
                    r && w(t, r),
                    !0)
                }
                ,
                e.challengeMobilePhone = function(e, t) {
                    var data, n;
                    if (e.indexOf("KDDI-") >= 0 && (n = /KDDI-([^- \/;()"']+)/.exec(e))) {
                        var r = n[1];
                        return data = o.get("au"),
                        E(t, data[o.KEY_CATEGORY]),
                        O(t, data[o.KEY_OS]),
                        T(t, r),
                        !0
                    }
                    return (e.indexOf("WILLCOM") >= 0 || e.indexOf("DDIPOCKET") >= 0) && (n = /(?:WILLCOM|DDIPOCKET);[^\/]+\/([^ \/;()]+)/.exec(e)) ? (r = n[1],
                    data = o.get("willcom"),
                    E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_OS]),
                    T(t, r),
                    !0) : e.indexOf("SymbianOS") >= 0 ? (data = o.get("SymbianOS"),
                    E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_OS]),
                    !0) : e.indexOf("Google Wireless Transcoder") >= 0 ? (y(t, o.get("MobileTranscoder")),
                    T(t, "Google"),
                    !0) : e.indexOf("Naver Transcoder") >= 0 && (y(t, o.get("MobileTranscoder")),
                    T(t, "Naver"),
                    !0)
                }
                ,
                e.challengeAppliance = function(e, t) {
                    var data;
                    return e.indexOf("Nintendo DSi;") >= 0 ? (data = o.get("NintendoDSi"),
                    E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_OS]),
                    !0) : e.indexOf("Nintendo Wii;") >= 0 && (data = o.get("NintendoWii"),
                    E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_OS]),
                    !0)
                }
                ,
                e.challengeMisc = function(e, t) {
                    var data, n, r;
                    return e.indexOf("(Win98;") >= 0 ? (data = o.get("Win98"),
                    n = "98") : e.indexOf("Macintosh; U; PPC;") >= 0 ? (data = o.get("MacOS"),
                    (r = /rv:(\d+\.\d+\.\d+)/.exec(e)) && (n = r[1])) : e.indexOf("Mac_PowerPC") >= 0 ? data = o.get("MacOS") : e.indexOf("X11; FreeBSD ") >= 0 ? (data = o.get("BSD"),
                    (r = /FreeBSD ([^;\)]+);/.exec(e)) && (n = r[1])) : e.indexOf("X11; CrOS ") >= 0 && (data = o.get("ChromeOS"),
                    (r = /CrOS ([^\)]+)\)/.exec(e)) && (n = r[1])),
                    !!data && (E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_NAME]),
                    n && w(t, n),
                    !0)
                }
            }();
            var f = {};
            !function() {
                var e = f
                  , t = /DoCoMo\/[.0-9]+[ \/]([^- \/;()"']+)/
                  , n = /\(([^;)]+);FOMA;/
                  , r = (e.challengeDocomo = function(e, r) {
                    if (e.indexOf("DoCoMo") < 0 && e.indexOf(";FOMA;") < 0)
                        return !1;
                    var c, l = o.VALUE_UNKNOWN;
                    return ((c = t.exec(e)) || (c = n.exec(e))) && (l = c[1]),
                    y(r, o.get("docomo")),
                    T(r, l),
                    !0
                }
                ,
                /KDDI-([^- \/;()"']+)/)
                  , c = (e.challengeAu = function(e, t) {
                    if (e.indexOf("KDDI-") < 0)
                        return !1;
                    var n = o.VALUE_UNKNOWN
                      , c = r.exec(e);
                    return c && (n = c[1]),
                    y(t, o.get("au")),
                    T(t, n),
                    !0
                }
                ,
                /(?:SoftBank|Vodafone|J-PHONE)\/[.0-9]+\/([^ \/;()]+)/)
                  , l = (e.challengeSoftbank = function(e, t) {
                    if (e.indexOf("SoftBank") < 0 && e.indexOf("Vodafone") < 0 && e.indexOf("J-PHONE") < 0)
                        return !1;
                    var n = o.VALUE_UNKNOWN
                      , r = c.exec(e);
                    return r && (n = r[1]),
                    y(t, o.get("SoftBank")),
                    T(t, n),
                    !0
                }
                ,
                /(?:WILLCOM|DDIPOCKET);[^\/]+\/([^ \/;()]+)/);
                e.challengeWillcom = function(e, t) {
                    if (e.indexOf("WILLCOM") < 0 && e.indexOf("DDIPOCKET") < 0)
                        return !1;
                    var n = o.VALUE_UNKNOWN
                      , r = l.exec(e);
                    return r && (n = r[1]),
                    y(t, o.get("willcom")),
                    T(t, n),
                    !0
                }
                ,
                e.challengeMisc = function(e, t) {
                    var n;
                    return e.indexOf("jig browser") >= 0 ? (y(t, o.get("jig")),
                    (n = /jig browser[^;]+; ([^);]+)/.exec(e)) && T(t, n[1]),
                    !0) : e.indexOf("emobile/") >= 0 || e.indexOf("OpenBrowser") >= 0 || e.indexOf("Browser/Obigo-Browser") >= 0 ? (y(t, o.get("emobile")),
                    !0) : e.indexOf("SymbianOS") >= 0 ? (y(t, o.get("SymbianOS")),
                    !0) : e.indexOf("Hatena-Mobile-Gateway/") >= 0 ? (y(t, o.get("MobileTranscoder")),
                    T(t, "Hatena"),
                    !0) : e.indexOf("livedoor-Mobile-Gateway/") >= 0 && (y(t, o.get("MobileTranscoder")),
                    T(t, "livedoor"),
                    !0)
                }
            }();
            var h = {};
            !function() {
                var e = h;
                e.challengeGoogle = function(e, t) {
                    return !(e.indexOf("Google") < 0) && (e.indexOf("compatible; Googlebot") >= 0 ? e.indexOf("compatible; Googlebot-Mobile") >= 0 ? (y(t, o.get("GoogleBotMobile")),
                    !0) : (y(t, o.get("GoogleBot")),
                    !0) : e.indexOf("Googlebot-Image/") >= 0 ? (y(t, o.get("GoogleBot")),
                    !0) : e.indexOf("Mediapartners-Google") >= 0 && (e.indexOf("compatible; Mediapartners-Google") >= 0 || "Mediapartners-Google" === e) ? (y(t, o.get("GoogleMediaPartners")),
                    !0) : e.indexOf("Feedfetcher-Google;") >= 0 ? (y(t, o.get("GoogleFeedFetcher")),
                    !0) : e.indexOf("AppEngine-Google") >= 0 ? (y(t, o.get("GoogleAppEngine")),
                    !0) : e.indexOf("Google Web Preview") >= 0 && (y(t, o.get("GoogleWebPreview")),
                    !0))
                }
                ,
                e.challengeCrawlers = function(e, t) {
                    if (e.indexOf("Yahoo") >= 0 || e.indexOf("help.yahoo.co.jp/help/jp/") >= 0 || e.indexOf("listing.yahoo.co.jp/support/faq/") >= 0) {
                        if (e.indexOf("compatible; Yahoo! Slurp") >= 0)
                            return y(t, o.get("YahooSlurp")),
                            !0;
                        if (e.indexOf("YahooFeedSeekerJp") >= 0 || e.indexOf("YahooFeedSeekerBetaJp") >= 0)
                            return y(t, o.get("YahooJP")),
                            !0;
                        if (e.indexOf("crawler (http://listing.yahoo.co.jp/support/faq/") >= 0 || e.indexOf("crawler (http://help.yahoo.co.jp/help/jp/") >= 0)
                            return y(t, o.get("YahooJP")),
                            !0;
                        if (e.indexOf("Y!J-BRZ/YATSHA crawler") >= 0 || e.indexOf("Y!J-BRY/YATSH crawler") >= 0)
                            return y(t, o.get("YahooJP")),
                            !0;
                        if (e.indexOf("Yahoo Pipes") >= 0)
                            return y(t, o.get("YahooPipes")),
                            !0
                    }
                    return e.indexOf("msnbot") >= 0 ? (y(t, o.get("msnbot")),
                    !0) : e.indexOf("bingbot") >= 0 && e.indexOf("compatible; bingbot") >= 0 ? (y(t, o.get("bingbot")),
                    !0) : e.indexOf("BingPreview") >= 0 ? (y(t, o.get("BingPreview")),
                    !0) : e.indexOf("Baidu") >= 0 && (e.indexOf("compatible; Baiduspider") >= 0 || e.indexOf("Baiduspider+") >= 0 || e.indexOf("Baiduspider-image+") >= 0) ? (y(t, o.get("Baiduspider")),
                    !0) : e.indexOf("Yeti") >= 0 && (e.indexOf("http://help.naver.com/robots") >= 0 || e.indexOf("http://help.naver.com/support/robots.html") >= 0 || e.indexOf("http://naver.me/bot") >= 0) ? (y(t, o.get("Yeti")),
                    !0) : e.indexOf("FeedBurner/") >= 0 ? (y(t, o.get("FeedBurner")),
                    !0) : e.indexOf("facebookexternalhit") >= 0 ? (y(t, o.get("facebook")),
                    !0) : e.indexOf("Twitterbot/") >= 0 ? (y(t, o.get("twitter")),
                    !0) : e.indexOf("ichiro") >= 0 && (e.indexOf("http://help.goo.ne.jp/door/crawler.html") >= 0 || e.indexOf("compatible; ichiro/mobile goo;") >= 0) || e.indexOf("gooblogsearch/") >= 0 ? (y(t, o.get("goo")),
                    !0) : e.indexOf("Apple-PubSub") >= 0 ? (y(t, o.get("ApplePubSub")),
                    !0) : e.indexOf("(www.radian6.com/crawler)") >= 0 ? (y(t, o.get("radian6")),
                    !0) : e.indexOf("Genieo/") >= 0 ? (y(t, o.get("Genieo")),
                    !0) : e.indexOf("labs.topsy.com/butterfly/") >= 0 ? (y(t, o.get("topsyButterfly")),
                    !0) : e.indexOf("rogerbot/1.0 (http://www.seomoz.org/dp/rogerbot") >= 0 ? (y(t, o.get("rogerbot")),
                    !0) : e.indexOf("compatible; AhrefsBot/") >= 0 ? (y(t, o.get("AhrefsBot")),
                    !0) : e.indexOf("livedoor FeedFetcher") >= 0 || e.indexOf("Fastladder FeedFetcher") >= 0 ? (y(t, o.get("livedoorFeedFetcher")),
                    !0) : e.indexOf("Hatena ") >= 0 && (e.indexOf("Hatena Antenna") >= 0 || e.indexOf("Hatena Pagetitle Agent") >= 0 || e.indexOf("Hatena Diary RSS") >= 0) ? (y(t, o.get("Hatena")),
                    !0) : e.indexOf("mixi-check") >= 0 || e.indexOf("mixi-crawler") >= 0 || e.indexOf("mixi-news-crawler") >= 0 ? (y(t, o.get("mixi")),
                    !0) : e.indexOf("Indy Library") >= 0 && e.indexOf("compatible; Indy Library") >= 0 ? (y(t, o.get("IndyLibrary")),
                    !0) : e.indexOf("trendictionbot") >= 0 && (y(t, o.get("trendictionbot")),
                    !0)
                }
                ,
                e.challengeMaybeCrawler = function(e, t) {
                    return (/(bot|crawler|spider)(?:[-_ .\/;@()]|$)/i.exec(e) || /(?:Rome Client |UnwindFetchor\/|ia_archiver |Summify |PostRank\/)/.exec(e) || e.indexOf("ASP-Ranker Feed Crawler") >= 0 || /(feed|web) ?parser/i.exec(e) || !!/watch ?dog/i.exec(e)) && (y(t, o.get("VariousCrawler")),
                    !0)
                }
            }();
            var _ = {};
            !function() {
                var e = _;
                e.challengePlaystation = function(e, t) {
                    var n, data = null, r = null;
                    return e.indexOf("PSP (PlayStation Portable);") >= 0 ? (data = o.get("PSP"),
                    (n = /PSP \(PlayStation Portable\); ([.0-9]+)\)/.exec(e)) && (r = n[1])) : e.indexOf("PlayStation Vita") >= 0 ? (data = o.get("PSVita"),
                    (n = /PlayStation Vita ([.0-9]+)\)/.exec(e)) && (r = n[1])) : e.indexOf("PLAYSTATION 3 ") >= 0 || e.indexOf("PLAYSTATION 3;") >= 0 ? (data = o.get("PS3"),
                    (n = /PLAYSTATION 3;? ([.0-9]+)\)/.exec(e)) && (r = n[1])) : e.indexOf("PlayStation 4 ") >= 0 && (data = o.get("PS4"),
                    (n = /PlayStation 4 ([.0-9]+)\)/.exec(e)) && (r = n[1])),
                    !!data && (y(t, data),
                    r && w(t, r),
                    !0)
                }
                ,
                e.challengeNintendo = function(e, t) {
                    var data = null;
                    return e.indexOf("Nintendo 3DS;") >= 0 ? data = o.get("Nintendo3DS") : e.indexOf("Nintendo DSi;") >= 0 ? data = o.get("NintendoDSi") : e.indexOf("Nintendo Wii;") >= 0 ? data = o.get("NintendoWii") : e.indexOf("(Nintendo WiiU)") >= 0 && (data = o.get("NintendoWiiU")),
                    !!data && (y(t, data),
                    !0)
                }
                ,
                e.challengeDigitalTV = function(e, t) {
                    var data = null;
                    return e.indexOf("InettvBrowser/") >= 0 && (data = o.get("DigitalTV")),
                    !!data && (y(t, data),
                    !0)
                }
            }();
            var m = {};
            !function() {
                var e = m;
                e.challengeDesktopTools = function(e, t) {
                    var data = null;
                    return e.indexOf("AppleSyndication/") >= 0 ? data = o.get("SafariRSSReader") : e.indexOf("compatible; Google Desktop/") >= 0 ? data = o.get("GoogleDesktop") : e.indexOf("Windows-RSS-Platform") >= 0 && (data = o.get("WindowsRSSReader")),
                    !!data && (y(t, data),
                    !0)
                }
                ,
                e.challengeSmartPhonePatterns = function(e, t) {
                    var data;
                    return e.indexOf("CFNetwork/") >= 0 && (data = o.get("iOS"),
                    E(t, data[o.KEY_CATEGORY]),
                    O(t, data[o.KEY_NAME]),
                    !0)
                }
                ,
                e.challengeHTTPLibrary = function(e, t) {
                    var data, n;
                    return /^(?:Apache-HttpClient\/|Jakarta Commons-HttpClient\/|Java\/)/.exec(e) || /[- ]HttpClient(\/|$)/.exec(e) || e.indexOf("Java(TM) 2 Runtime Environment,") >= 0 ? (data = o.get("HTTPLibrary"),
                    n = "Java") : /^Wget/.exec(e) ? (data = o.get("HTTPLibrary"),
                    n = "wget") : /^(?:libwww-perl|WWW-Mechanize|LWP::Simple|LWP |lwp-trivial)/.exec(e) ? (data = o.get("HTTPLibrary"),
                    n = "perl") : /^(?:Ruby|feedzirra|Typhoeus)/.exec(e) ? (data = o.get("HTTPLibrary"),
                    n = "ruby") : /^(?:Python-urllib\/|Twisted )/.exec(e) ? (data = o.get("HTTPLibrary"),
                    n = "python") : /^(:?PHP|WordPress|CakePHP|PukiWiki|PECL::HTTP)(?:\/| |$)/.exec(e) || /(?:PEAR |)HTTP_Request(?: class|2)/.exec(e) || e.indexOf("PEAR HTTP_Request class;") >= 0 ? (data = o.get("HTTPLibrary"),
                    n = "php") : e.indexOf("curl/") >= 0 && (data = o.get("HTTPLibrary"),
                    n = "curl"),
                    !!data && (y(t, data),
                    T(t, n),
                    !0)
                }
                ,
                e.challengeMaybeRSSReader = function(e, t) {
                    var data = null;
                    return (/rss(?:reader|bar|[-_ \/;()]|[ +]*\/)/i.exec(e) || /headline-reader/i.exec(e) || e.indexOf("cococ/") >= 0) && (data = o.get("VariousRSSReader")),
                    !!data && (y(t, data),
                    !0)
                }
            }();
            var v = {};
            !function() {
                var e = v;
                e.VERSION = n,
                e.parse = function(e) {
                    return function(e) {
                        e[o.ATTRIBUTE_NAME] || (e[o.ATTRIBUTE_NAME] = o.VALUE_UNKNOWN);
                        e[o.ATTRIBUTE_CATEGORY] || (e[o.ATTRIBUTE_CATEGORY] = o.VALUE_UNKNOWN);
                        e[o.ATTRIBUTE_OS] || (e[o.ATTRIBUTE_OS] = o.VALUE_UNKNOWN);
                        e[o.ATTRIBUTE_OS_VERSION] || (e[o.ATTRIBUTE_OS_VERSION] = o.VALUE_UNKNOWN);
                        e[o.ATTRIBUTE_VERSION] || (e[o.ATTRIBUTE_VERSION] = o.VALUE_UNKNOWN);
                        e[o.ATTRIBUTE_VENDOR] || (e[o.ATTRIBUTE_VENDOR] = o.VALUE_UNKNOWN);
                        return e
                    }(function(e) {
                        var n = {};
                        if (!e || "-" === e)
                            return n;
                        if (t(e, n))
                            return n;
                        if (function(e, t) {
                            return !!l.challengeMSIE(e, t) || (!!l.challengeVivaldi(e, t) || (!!l.challengeYandexBrowser(e, t) || (!!l.challengeSafariChrome(e, t) || (!!l.challengeFirefox(e, t) || (!!l.challengeOpera(e, t) || !!l.challengeWebview(e, t))))))
                        }(e, n))
                            return r(e, n),
                            n;
                        return function(e, t) {
                            return !!f.challengeDocomo(e, t) || (!!f.challengeAu(e, t) || (!!f.challengeSoftbank(e, t) || (!!f.challengeWillcom(e, t) || !!f.challengeMisc(e, t))))
                        }(e, n) || function(e, t) {
                            return !!_.challengePlaystation(e, t) || (!!_.challengeNintendo(e, t) || !!_.challengeDigitalTV(e, t))
                        }(e, n) || function(e, t) {
                            return !!m.challengeDesktopTools(e, t)
                        }(e, n) || r(e, n) || function(e, t) {
                            !!m.challengeSmartPhonePatterns(e, t) || (!!l.challengeSleipnir(e, t) || (!!m.challengeHTTPLibrary(e, t) || (!!m.challengeMaybeRSSReader(e, t) || h.challengeMaybeCrawler(e, t))))
                        }(e, n),
                        n
                    }(e))
                }
                ,
                e.isCrawler = function(e) {
                    return !!e && "-" !== e && t(e, {})
                }
                ;
                function t(e, t) {
                    return !!h.challengeGoogle(e, t) || !!h.challengeCrawlers(e, t)
                }
                function r(e, t) {
                    return !!d.challengeWindows(e, t) || (!!d.challengeOSX(e, t) || (!!d.challengeLinux(e, t) || (!!d.challengeSmartPhone(e, t) || (!!d.challengeMobilePhone(e, t) || (!!d.challengeAppliance(e, t) || !!d.challengeMisc(e, t))))))
                }
                var c = {};
                c[o.ATTRIBUTE_NAME] = o.VALUE_UNKNOWN,
                c[o.ATTRIBUTE_CATEGORY] = o.VALUE_UNKNOWN,
                c[o.ATTRIBUTE_OS] = o.VALUE_UNKNOWN,
                c[o.ATTRIBUTE_OS_VERSION] = o.VALUE_UNKNOWN,
                c[o.ATTRIBUTE_VERSION] = o.VALUE_UNKNOWN,
                c[o.ATTRIBUTE_VENDOR] = o.VALUE_UNKNOWN
            }();
            var y = c.updateMap
              , E = c.updateCategory
              , O = c.updateOs
              , w = c.updateOsVersion
              , T = c.updateVersion;
            void 0 === (r = function() {
                return v
            }
            .apply(t, [])) || (e.exports = r)
        }()
    },
    633: function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return d
        }
        ));
        var r = n(26)
          , o = n(27)
          , c = (n(5),
        n(53),
        n(99),
        n(92),
        n(395))
          , l = n.n(c)
          , d = function() {
            function e() {
                Object(r.a)(this, e),
                this.pendingRequest = {},
                this.apiWhiteList = ["users/info", "users/config"],
                this.timeout = 3e3
            }
            return Object(o.a)(e, [{
                key: "checkapiIsWhiteList",
                value: function(e) {
                    return this.apiWhiteList.some((function(t) {
                        return e.includes(t)
                    }
                    ))
                }
            }, {
                key: "generateReqKey",
                value: function(e) {
                    var t = e.url
                      , n = e.method
                      , r = e.params
                      , data = e.data
                      , o = e.headers;
                    return [t, n.toLowerCase(), l.a.stringify(r), l.a.stringify(data), l.a.stringify(null == o ? void 0 : o.token)].join("&")
                }
            }, {
                key: "addApi",
                value: function(e) {
                    var t = this
                      , n = this.generateReqKey(e)
                      , r = function(e, t) {
                        return function(n, r) {
                            r ? e(n) : t(n)
                        }
                    };
                    return new Promise((function(o, c) {
                        t.pendingRequest[n].push({
                            cb: r(o, c),
                            config: e
                        })
                    }
                    ))
                }
            }, {
                key: "addFirstApi",
                value: function(e) {
                    this.pendingRequest[e] = [Date.now()]
                }
            }, {
                key: "checkApi",
                value: function(e) {
                    if ("get" !== e.method.toLowerCase())
                        return !1;
                    if (e.notOptimizationApi)
                        return !1;
                    var t = this.generateReqKey(e);
                    if (!this.checkapiIsWhiteList(t))
                        return !1;
                    var n = this.pendingRequest[t];
                    return n && n.length ? !(Date.now() - n[0] > this.timeout) : (this.addFirstApi(t),
                    !1)
                }
            }, {
                key: "getCbList",
                value: function(e) {
                    var t = this.generateReqKey(e);
                    return this.checkapiIsWhiteList(t) ? this.pendingRequest[t] : []
                }
            }, {
                key: "clearMap",
                value: function(e) {
                    var t = this.generateReqKey(e);
                    this.pendingRequest[t] && delete this.pendingRequest[t]
                }
            }, {
                key: "clearAll",
                value: function() {
                    this.pendingRequest = {}
                }
            }]),
            e
        }()
    },
    634: function(e, t, n) {
        "use strict";
        n(5);
        var r = n(310)({
            storeAsString: !0
        });
        t.a = function(e) {
            try {
                if ("string" == typeof e)
                    return r.parse(e)
            } catch (t) {
                return e
            }
            return null == e || (t = e,
            Object.prototype.toString.call(t)),
            e;
            var t
        }
    },
    657: function(e, t, n) {
        "use strict";
        var r = function(e) {
            return null == e || "function" != typeof e && "object" != typeof e
        }
          , o = Object.freeze({
            __proto__: null,
            default: r,
            __moduleExports: r
        })
          , c = function(e, t) {
            if (null == e)
                throw new TypeError("expected first argument to be an object.");
            if (void 0 === t || "undefined" == typeof Symbol)
                return e;
            if ("function" != typeof Object.getOwnPropertySymbols)
                return e;
            for (var n = Object.prototype.propertyIsEnumerable, r = Object(e), o = arguments.length, i = 0; ++i < o; )
                for (var c = Object(arguments[i]), l = Object.getOwnPropertySymbols(c), d = 0; d < l.length; d++) {
                    var f = l[d];
                    n.call(c, f) && (r[f] = c[f])
                }
            return r
        }
          , l = Object.freeze({
            __proto__: null,
            default: c,
            __moduleExports: c
        })
          , d = Object.prototype.toString
          , f = function(e) {
            var t = typeof e;
            return "undefined" === t ? "undefined" : null === e ? "null" : !0 === e || !1 === e || e instanceof Boolean ? "boolean" : "string" === t || e instanceof String ? "string" : "number" === t || e instanceof Number ? "number" : "function" === t || e instanceof Function ? void 0 !== e.constructor.name && "Generator" === e.constructor.name.slice(0, 9) ? "generatorfunction" : "function" : void 0 !== Array.isArray && Array.isArray(e) ? "array" : e instanceof RegExp ? "regexp" : e instanceof Date ? "date" : "[object RegExp]" === (t = d.call(e)) ? "regexp" : "[object Date]" === t ? "date" : "[object Arguments]" === t ? "arguments" : "[object Error]" === t ? "error" : "[object Promise]" === t ? "promise" : function(e) {
                return e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }(e) ? "buffer" : "[object Set]" === t ? "set" : "[object WeakSet]" === t ? "weakset" : "[object Map]" === t ? "map" : "[object WeakMap]" === t ? "weakmap" : "[object Symbol]" === t ? "symbol" : "[object Map Iterator]" === t ? "mapiterator" : "[object Set Iterator]" === t ? "setiterator" : "[object String Iterator]" === t ? "stringiterator" : "[object Array Iterator]" === t ? "arrayiterator" : "[object Int8Array]" === t ? "int8array" : "[object Uint8Array]" === t ? "uint8array" : "[object Uint8ClampedArray]" === t ? "uint8clampedarray" : "[object Int16Array]" === t ? "int16array" : "[object Uint16Array]" === t ? "uint16array" : "[object Int32Array]" === t ? "int32array" : "[object Uint32Array]" === t ? "uint32array" : "[object Float32Array]" === t ? "float32array" : "[object Float64Array]" === t ? "float64array" : "object"
        };
        var h = Object.freeze({
            __proto__: null,
            default: f,
            __moduleExports: f
        })
          , _ = o && r || o
          , m = l && c || l
          , v = h && f || h;
        function y(e) {
            e = e || {};
            var t = arguments.length
              , i = 0;
            if (1 === t)
                return e;
            for (; ++i < t; ) {
                var n = arguments[i];
                _(e) && (e = n),
                O(n) && E(e, n)
            }
            return e
        }
        function E(e, t) {
            for (var n in m(e, t),
            t)
                if (T(n) && w(t, n)) {
                    var r = t[n];
                    O(r) ? ("undefined" === v(e[n]) && "function" === v(r) && (e[n] = r),
                    e[n] = y(e[n] || {}, r)) : e[n] = r
                }
            return e
        }
        function O(e) {
            return "object" === v(e) || "function" === v(e)
        }
        function w(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function T(e) {
            return "__proto__" !== e && "constructor" !== e && "prototype" !== e
        }
        var S = y;
        const C = "undefined" != typeof window && null !== window
          , R = function() {
            if (C && "IntersectionObserver"in window && "IntersectionObserverEntry"in window && "intersectionRatio"in window.IntersectionObserverEntry.prototype)
                return "isIntersecting"in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                }),
                !0;
            return !1
        }();
        const A = "event"
          , I = "observer"
          , N = function() {
            if (C)
                return "function" == typeof window.CustomEvent ? window.CustomEvent : (e.prototype = window.Event.prototype,
                e);
            function e(e, t) {
                t = t || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: void 0
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail),
                n
            }
        }();
        function k(e, t) {
            if (!e.length)
                return;
            const n = e.indexOf(t);
            return n > -1 ? e.splice(n, 1) : void 0
        }
        function L(e, t) {
            if ("IMG" !== e.tagName || !e.getAttribute("data-srcset"))
                return;
            let n = e.getAttribute("data-srcset");
            const r = []
              , o = e.parentNode.offsetWidth * t;
            let c, l, d;
            n = n.trim().split(","),
            n.map((e=>{
                e = e.trim(),
                c = e.lastIndexOf(" "),
                -1 === c ? (l = e,
                d = 999998) : (l = e.substr(0, c),
                d = parseInt(e.substr(c + 1, e.length - c - 2), 10)),
                r.push([d, l])
            }
            )),
            r.sort((function(a, b) {
                if (a[0] < b[0])
                    return 1;
                if (a[0] > b[0])
                    return -1;
                if (a[0] === b[0]) {
                    if (-1 !== b[1].indexOf(".webp", b[1].length - 5))
                        return 1;
                    if (-1 !== a[1].indexOf(".webp", a[1].length - 5))
                        return -1
                }
                return 0
            }
            ));
            let f, h = "";
            for (let i = 0; i < r.length; i++) {
                f = r[i],
                h = f[1];
                const e = r[i + 1];
                if (e && e[0] < o) {
                    h = f[1];
                    break
                }
                if (!e) {
                    h = f[1];
                    break
                }
            }
            return h
        }
        function P(e, t) {
            let n;
            for (let i = 0, r = e.length; i < r; i++)
                if (t(e[i])) {
                    n = e[i];
                    break
                }
            return n
        }
        const D = (e=1)=>C && window.devicePixelRatio || e;
        function x() {
            if (!C)
                return !1;
            let e = !0;
            try {
                const t = document.createElement("canvas");
                t.getContext && t.getContext("2d") && (e = 0 === t.toDataURL("image/webp").indexOf("data:image/webp"))
            } catch (t) {
                e = !1
            }
            return e
        }
        const j = function() {
            if (!C)
                return;
            let e = !1;
            try {
                let t = Object.defineProperty({}, "passive", {
                    get: function() {
                        e = !0
                    }
                });
                window.addEventListener("test", null, t)
            } catch (e) {}
            return e
        }()
          , M = {
            on(e, t, n, r=!1) {
                j ? e.addEventListener(t, n, {
                    capture: r,
                    passive: !0
                }) : e.addEventListener(t, n, r)
            },
            off(e, t, n, r=!1) {
                e.removeEventListener(t, n, r)
            }
        }
          , H = (e,t,n)=>{
            let image = new Image;
            if (!e || !e.src) {
                const e = new Error("image src is required");
                return n(e)
            }
            image.src = e.src,
            e.cors && (image.crossOrigin = e.cors),
            image.onload = function() {
                t({
                    naturalHeight: image.naturalHeight,
                    naturalWidth: image.naturalWidth,
                    src: image.src
                })
            }
            ,
            image.onerror = function(e) {
                n(e)
            }
        }
          , style = (e,t)=>"undefined" != typeof getComputedStyle ? getComputedStyle(e, null).getPropertyValue(t) : e.style[t]
          , U = e=>style(e, "overflow") + style(e, "overflow-y") + style(e, "overflow-x");
        function B() {}
        class G {
            constructor({max: e}) {
                this.options = {
                    max: e || 100
                },
                this._caches = []
            }
            has(e) {
                return this._caches.indexOf(e) > -1
            }
            add(e) {
                this.has(e) || (this._caches.push(e),
                this._caches.length > this.options.max && this.free())
            }
            free() {
                this._caches.shift()
            }
        }
        class W {
            constructor({el: e, src: t, error: n, loading: r, bindType: o, $parent: c, options: l, cors: d, elRenderer: f, imageCache: h}) {
                this.el = e,
                this.src = t,
                this.error = n,
                this.loading = r,
                this.bindType = o,
                this.attempt = 0,
                this.cors = d,
                this.naturalHeight = 0,
                this.naturalWidth = 0,
                this.options = l,
                this.rect = null,
                this.$parent = c,
                this.elRenderer = f,
                this._imageCache = h,
                this.performanceData = {
                    init: Date.now(),
                    loadStart: 0,
                    loadEnd: 0
                },
                this.filter(),
                this.initState(),
                this.render("loading", !1)
            }
            initState() {
                "dataset"in this.el ? this.el.dataset.src = this.src : this.el.setAttribute("data-src", this.src),
                this.state = {
                    loading: !1,
                    error: !1,
                    loaded: !1,
                    rendered: !1
                }
            }
            record(e) {
                this.performanceData[e] = Date.now()
            }
            update({src: e, loading: t, error: n}) {
                const r = this.src;
                this.src = e,
                this.loading = t,
                this.error = n,
                this.filter(),
                r !== this.src && (this.attempt = 0,
                this.initState())
            }
            getRect() {
                this.rect = this.el.getBoundingClientRect()
            }
            checkInView() {
                return this.getRect(),
                this.rect.top < window.innerHeight * this.options.preLoad && this.rect.bottom > this.options.preLoadTop && this.rect.left < window.innerWidth * this.options.preLoad && this.rect.right > 0
            }
            filter() {
                (function(e) {
                    if (!(e instanceof Object))
                        return [];
                    if (Object.keys)
                        return Object.keys(e);
                    {
                        let t = [];
                        for (let n in e)
                            e.hasOwnProperty(n) && t.push(n);
                        return t
                    }
                }
                )(this.options.filter).map((e=>{
                    this.options.filter[e](this, this.options)
                }
                ))
            }
            renderLoading(e) {
                this.state.loading = !0,
                H({
                    src: this.loading,
                    cors: this.cors
                }, (data=>{
                    this.render("loading", !1),
                    this.state.loading = !1,
                    e()
                }
                ), (()=>{
                    e(),
                    this.state.loading = !1,
                    this.options.silent || console.warn(`VueLazyload log: load failed with loading image(${this.loading})`)
                }
                ))
            }
            load(e=B) {
                return this.attempt > this.options.attempt - 1 && this.state.error ? (this.options.silent || console.log(`VueLazyload log: ${this.src} tried too more than ${this.options.attempt} times`),
                void e()) : this.state.rendered && this.state.loaded ? void 0 : this._imageCache.has(this.src) ? (this.state.loaded = !0,
                this.render("loaded", !0),
                this.state.rendered = !0,
                e()) : void this.renderLoading((()=>{
                    this.attempt++,
                    this.options.adapter.beforeLoad && this.options.adapter.beforeLoad(this, this.options),
                    this.record("loadStart"),
                    H({
                        src: this.src,
                        cors: this.cors
                    }, (data=>{
                        this.naturalHeight = data.naturalHeight,
                        this.naturalWidth = data.naturalWidth,
                        this.state.loaded = !0,
                        this.state.error = !1,
                        this.record("loadEnd"),
                        this.render("loaded", !1),
                        this.state.rendered = !0,
                        this._imageCache.add(this.src),
                        e()
                    }
                    ), (e=>{
                        !this.options.silent && console.error(e),
                        this.state.error = !0,
                        this.state.loaded = !1,
                        this.render("error", !1)
                    }
                    ))
                }
                ))
            }
            render(e, t) {
                this.elRenderer(this, e, t)
            }
            performance() {
                let e = "loading"
                  , time = 0;
                return this.state.loaded && (e = "loaded",
                time = (this.performanceData.loadEnd - this.performanceData.loadStart) / 1e3),
                this.state.error && (e = "error"),
                {
                    src: this.src,
                    state: e,
                    time: time
                }
            }
            $destroy() {
                this.el = null,
                this.src = null,
                this.error = null,
                this.loading = null,
                this.bindType = null,
                this.attempt = 0
            }
        }
        const F = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          , V = ["scroll", "wheel", "mousewheel", "resize", "animationend", "transitionend", "touchmove"]
          , Y = {
            rootMargin: "0px",
            threshold: 0
        };
        function K(e) {
            return class {
                constructor({preLoad: e, error: t, throttleWait: n, preLoadTop: r, dispatchEvent: o, loading: c, attempt: l, silent: d=!0, scale: f, listenEvents: h, hasbind: _, filter: filter, adapter: m, observer: v, observerOptions: y}) {
                    this.version = '"1.3.4"',
                    this.mode = A,
                    this.ListenerQueue = [],
                    this.TargetIndex = 0,
                    this.TargetQueue = [],
                    this.options = {
                        silent: d,
                        dispatchEvent: !!o,
                        throttleWait: n || 200,
                        preLoad: e || 1.3,
                        preLoadTop: r || 0,
                        error: t || F,
                        loading: c || F,
                        attempt: l || 3,
                        scale: f || D(f),
                        ListenEvents: h || V,
                        hasbind: !1,
                        supportWebp: x(),
                        filter: filter || {},
                        adapter: m || {},
                        observer: !!v,
                        observerOptions: y || Y
                    },
                    this._initEvent(),
                    this._imageCache = new G({
                        max: 200
                    }),
                    this.lazyLoadHandler = function(e, t) {
                        let n = null
                          , r = null
                          , o = 0
                          , c = !1;
                        return function() {
                            if (c = !0,
                            n)
                                return;
                            let l = Date.now() - o
                              , d = this
                              , f = arguments
                              , h = function() {
                                o = Date.now(),
                                n = !1,
                                e.apply(d, f)
                            };
                            l >= t ? h() : n = setTimeout(h, t),
                            c && (clearTimeout(r),
                            r = setTimeout(h, 2 * t))
                        }
                    }(this._lazyLoadHandler.bind(this), this.options.throttleWait),
                    this.setMode(this.options.observer ? I : A)
                }
                config(e={}) {
                    S(this.options, e)
                }
                performance() {
                    let e = [];
                    return this.ListenerQueue.map((t=>{
                        e.push(t.performance())
                    }
                    )),
                    e
                }
                addLazyBox(e) {
                    this.ListenerQueue.push(e),
                    C && (this._addListenerTarget(window),
                    this._observer && this._observer.observe(e.el),
                    e.$el && e.$el.parentNode && this._addListenerTarget(e.$el.parentNode))
                }
                add(t, n, r) {
                    if (function(e, t) {
                        let n = !1;
                        for (let i = 0, r = e.length; i < r; i++)
                            if (t(e[i])) {
                                n = !0;
                                break
                            }
                        return n
                    }(this.ListenerQueue, (e=>e.el === t)))
                        return this.update(t, n),
                        e.nextTick(this.lazyLoadHandler);
                    let {src: o, loading: c, error: l, cors: d} = this._valueFormatter(n.value);
                    e.nextTick((()=>{
                        o = L(t, this.options.scale) || o,
                        this._observer && this._observer.observe(t);
                        const f = Object.keys(n.modifiers)[0];
                        let h;
                        f && (h = r.context.$refs[f],
                        h = h ? h.$el || h : document.getElementById(f)),
                        h || (h = (e=>{
                            if (!C)
                                return;
                            if (!(e instanceof HTMLElement))
                                return window;
                            let t = e;
                            for (; t && t !== document.body && t !== document.documentElement && t.parentNode; ) {
                                if (/(scroll|auto)/.test(U(t)))
                                    return t;
                                t = t.parentNode
                            }
                            return window
                        }
                        )(t));
                        const _ = new W({
                            bindType: n.arg,
                            $parent: h,
                            el: t,
                            loading: c,
                            error: l,
                            src: o,
                            cors: d,
                            elRenderer: this._elRenderer.bind(this),
                            options: this.options,
                            imageCache: this._imageCache
                        });
                        this.ListenerQueue.push(_),
                        C && (this._addListenerTarget(window),
                        this._addListenerTarget(h)),
                        this.lazyLoadHandler(),
                        e.nextTick((()=>this.lazyLoadHandler()))
                    }
                    ))
                }
                update(t, n, r) {
                    let {src: o, loading: c, error: l} = this._valueFormatter(n.value);
                    o = L(t, this.options.scale) || o;
                    const d = P(this.ListenerQueue, (e=>e.el === t));
                    d ? d.update({
                        src: o,
                        loading: c,
                        error: l
                    }) : this.add(t, n, r),
                    this._observer && (this._observer.unobserve(t),
                    this._observer.observe(t)),
                    this.lazyLoadHandler(),
                    e.nextTick((()=>this.lazyLoadHandler()))
                }
                remove(e) {
                    if (!e)
                        return;
                    this._observer && this._observer.unobserve(e);
                    const t = P(this.ListenerQueue, (t=>t.el === e));
                    t && (this._removeListenerTarget(t.$parent),
                    this._removeListenerTarget(window),
                    k(this.ListenerQueue, t),
                    t.$destroy())
                }
                removeComponent(e) {
                    e && (k(this.ListenerQueue, e),
                    this._observer && this._observer.unobserve(e.el),
                    e.$parent && e.$el.parentNode && this._removeListenerTarget(e.$el.parentNode),
                    this._removeListenerTarget(window))
                }
                setMode(e) {
                    R || e !== I || (e = A),
                    this.mode = e,
                    e === A ? (this._observer && (this.ListenerQueue.forEach((e=>{
                        this._observer.unobserve(e.el)
                    }
                    )),
                    this._observer = null),
                    this.TargetQueue.forEach((e=>{
                        this._initListen(e.el, !0)
                    }
                    ))) : (this.TargetQueue.forEach((e=>{
                        this._initListen(e.el, !1)
                    }
                    )),
                    this._initIntersectionObserver())
                }
                _addListenerTarget(e) {
                    if (!e)
                        return;
                    let t = P(this.TargetQueue, (t=>t.el === e));
                    return t ? t.childrenCount++ : (t = {
                        el: e,
                        id: ++this.TargetIndex,
                        childrenCount: 1,
                        listened: !0
                    },
                    this.mode === A && this._initListen(t.el, !0),
                    this.TargetQueue.push(t)),
                    this.TargetIndex
                }
                _removeListenerTarget(e) {
                    this.TargetQueue.forEach(((t,n)=>{
                        t.el === e && (t.childrenCount--,
                        t.childrenCount || (this._initListen(t.el, !1),
                        this.TargetQueue.splice(n, 1),
                        t = null))
                    }
                    ))
                }
                _initListen(e, t) {
                    this.options.ListenEvents.forEach((n=>M[t ? "on" : "off"](e, n, this.lazyLoadHandler)))
                }
                _initEvent() {
                    this.Event = {
                        listeners: {
                            loading: [],
                            loaded: [],
                            error: []
                        }
                    },
                    this.$on = (e,t)=>{
                        this.Event.listeners[e] || (this.Event.listeners[e] = []),
                        this.Event.listeners[e].push(t)
                    }
                    ,
                    this.$once = (e,t)=>{
                        const n = this;
                        this.$on(e, (function r() {
                            n.$off(e, r),
                            t.apply(n, arguments)
                        }
                        ))
                    }
                    ,
                    this.$off = (e,t)=>{
                        if (t)
                            k(this.Event.listeners[e], t);
                        else {
                            if (!this.Event.listeners[e])
                                return;
                            this.Event.listeners[e].length = 0
                        }
                    }
                    ,
                    this.$emit = (e,t,n)=>{
                        this.Event.listeners[e] && this.Event.listeners[e].forEach((e=>e(t, n)))
                    }
                }
                _lazyLoadHandler() {
                    const e = [];
                    this.ListenerQueue.forEach(((t,n)=>{
                        t.el && t.el.parentNode || e.push(t);
                        t.checkInView() && t.load()
                    }
                    )),
                    e.forEach((e=>{
                        k(this.ListenerQueue, e),
                        e.$destroy()
                    }
                    ))
                }
                _initIntersectionObserver() {
                    R && (this._observer = new IntersectionObserver(this._observerHandler.bind(this),this.options.observerOptions),
                    this.ListenerQueue.length && this.ListenerQueue.forEach((e=>{
                        this._observer.observe(e.el)
                    }
                    )))
                }
                _observerHandler(e, t) {
                    e.forEach((e=>{
                        e.isIntersecting && this.ListenerQueue.forEach((t=>{
                            if (t.el === e.target) {
                                if (t.state.loaded)
                                    return this._observer.unobserve(t.el);
                                t.load()
                            }
                        }
                        ))
                    }
                    ))
                }
                _elRenderer(e, t, n) {
                    if (!e.el)
                        return;
                    const {el: r, bindType: o} = e;
                    let c;
                    switch (t) {
                    case "loading":
                        c = e.loading;
                        break;
                    case "error":
                        c = e.error;
                        break;
                    default:
                        c = e.src
                    }
                    if (o ? r.style[o] = 'url("' + c + '")' : r.getAttribute("src") !== c && r.setAttribute("src", c),
                    r.setAttribute("lazy", t),
                    this.$emit(t, e, n),
                    this.options.adapter[t] && this.options.adapter[t](e, this.options),
                    this.options.dispatchEvent) {
                        const n = new N(t,{
                            detail: e
                        });
                        r.dispatchEvent(n)
                    }
                }
                _valueFormatter(e) {
                    let t = e
                      , n = this.options.loading
                      , r = this.options.error;
                    var o;
                    return null !== (o = e) && "object" == typeof o && (e.src || this.options.silent || console.error("Vue Lazyload warning: miss src with " + e),
                    t = e.src,
                    n = e.loading || this.options.loading,
                    r = e.error || this.options.error),
                    {
                        src: t,
                        loading: n,
                        error: r
                    }
                }
            }
        }
        K.install = (e,t={})=>{
            const n = new (K(e))(t);
            "2" === e.version.split(".")[0] ? e.directive("lazy", {
                bind: n.add.bind(n),
                update: n.update.bind(n),
                componentUpdated: n.lazyLoadHandler.bind(n),
                unbind: n.remove.bind(n)
            }) : e.directive("lazy", {
                bind: n.lazyLoadHandler.bind(n),
                update(e, t) {
                    S(this.vm.$refs, this.vm.$els),
                    n.add(this.el, {
                        modifiers: this.modifiers || {},
                        arg: this.arg,
                        value: e,
                        oldValue: t
                    }, {
                        context: this.vm
                    })
                },
                unbind() {
                    n.remove(this.el)
                }
            })
        }
        ;
        const z = e=>({
            props: {
                tag: {
                    type: String,
                    default: "div"
                }
            },
            render(e) {
                return e(this.tag, null, this.show ? this.$slots.default : null)
            },
            data: ()=>({
                el: null,
                state: {
                    loaded: !1
                },
                rect: {},
                show: !1
            }),
            mounted() {
                this.el = this.$el,
                e.addLazyBox(this),
                e.lazyLoadHandler()
            },
            beforeDestroy() {
                e.removeComponent(this)
            },
            methods: {
                getRect() {
                    this.rect = this.$el.getBoundingClientRect()
                },
                checkInView() {
                    return this.getRect(),
                    C && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0
                },
                load() {
                    this.show = !0,
                    this.state.loaded = !0,
                    this.$emit("show", this)
                },
                destroy() {
                    return this.$destroy
                }
            }
        });
        z.install = function(e, t={}) {
            const n = new (K(e))(t);
            e.component("lazy-component", z(n))
        }
        ;
        class $ {
            constructor({lazy: e}) {
                this.lazy = e,
                e.lazyContainerMananger = this,
                this._queue = []
            }
            bind(e, t, n) {
                const r = new X({
                    el: e,
                    binding: t,
                    vnode: n,
                    lazy: this.lazy
                });
                this._queue.push(r)
            }
            update(e, t, n) {
                const r = P(this._queue, (t=>t.el === e));
                r && r.update({
                    el: e,
                    binding: t,
                    vnode: n
                })
            }
            unbind(e, t, n) {
                const r = P(this._queue, (t=>t.el === e));
                r && (r.clear(),
                k(this._queue, r))
            }
        }
        const J = {
            selector: "img"
        };
        class X {
            constructor({el: e, binding: t, vnode: n, lazy: r}) {
                this.el = null,
                this.vnode = n,
                this.binding = t,
                this.options = {},
                this.lazy = r,
                this._queue = [],
                this.update({
                    el: e,
                    binding: t
                })
            }
            update({el: e, binding: t}) {
                this.el = e,
                this.options = S({}, J, t.value);
                this.getImgs().forEach((e=>{
                    this.lazy.add(e, S({}, this.binding, {
                        value: {
                            src: "dataset"in e ? e.dataset.src : e.getAttribute("data-src"),
                            error: ("dataset"in e ? e.dataset.error : e.getAttribute("data-error")) || this.options.error,
                            loading: ("dataset"in e ? e.dataset.loading : e.getAttribute("data-loading")) || this.options.loading
                        }
                    }), this.vnode)
                }
                ))
            }
            getImgs() {
                return function(e) {
                    let t = e.length;
                    const n = [];
                    for (let i = 0; i < t; i++)
                        n.push(e[i]);
                    return n
                }(this.el.querySelectorAll(this.options.selector))
            }
            clear() {
                this.getImgs().forEach((e=>this.lazy.remove(e))),
                this.vnode = null,
                this.binding = null,
                this.lazy = null
            }
        }
        X.install = (e,t={})=>{
            const n = new (K(e))(t)
              , r = new X({
                lazy: n
            });
            "2" === e.version.split(".")[0] ? e.directive("lazy-container", {
                bind: r.bind.bind(r),
                componentUpdated: r.update.bind(r),
                unbind: r.unbind.bind(r)
            }) : e.directive("lazy-container", {
                update(e, t) {
                    r.update(this.el, {
                        modifiers: this.modifiers || {},
                        arg: this.arg,
                        value: e,
                        oldValue: t
                    }, {
                        context: this.vm
                    })
                },
                unbind() {
                    r.unbind(this.el)
                }
            })
        }
        ;
        const Q = e=>({
            props: {
                src: [String, Object],
                tag: {
                    type: String,
                    default: "img"
                }
            },
            render(e) {
                return e(this.tag, {
                    attrs: {
                        src: this.renderSrc
                    }
                }, this.$slots.default)
            },
            data: ()=>({
                el: null,
                options: {
                    src: "",
                    error: "",
                    loading: "",
                    attempt: e.options.attempt
                },
                state: {
                    loaded: !1,
                    error: !1,
                    attempt: 0
                },
                rect: {},
                renderSrc: ""
            }),
            watch: {
                src() {
                    this.init(),
                    e.addLazyBox(this),
                    e.lazyLoadHandler()
                }
            },
            created() {
                this.init(),
                this.renderSrc = this.options.loading
            },
            mounted() {
                this.el = this.$el,
                e.addLazyBox(this),
                e.lazyLoadHandler()
            },
            beforeDestroy() {
                e.removeComponent(this)
            },
            methods: {
                init() {
                    const {src: t, loading: n, error: r} = e._valueFormatter(this.src);
                    this.state.loaded = !1,
                    this.options.src = t,
                    this.options.error = r,
                    this.options.loading = n,
                    this.renderSrc = this.options.loading
                },
                getRect() {
                    this.rect = this.$el.getBoundingClientRect()
                },
                checkInView() {
                    return this.getRect(),
                    C && this.rect.top < window.innerHeight * e.options.preLoad && this.rect.bottom > 0 && this.rect.left < window.innerWidth * e.options.preLoad && this.rect.right > 0
                },
                load(t=B) {
                    if (this.state.attempt > this.options.attempt - 1 && this.state.error)
                        return e.options.silent || console.log(`VueLazyload log: ${this.options.src} tried too more than ${this.options.attempt} times`),
                        void t();
                    const n = this.options.src;
                    H({
                        src: n
                    }, (({src: e})=>{
                        this.renderSrc = e,
                        this.state.loaded = !0
                    }
                    ), (e=>{
                        this.state.attempt++,
                        this.renderSrc = this.options.error,
                        this.state.error = !0
                    }
                    ))
                }
            }
        });
        Q.install = (e,t={})=>{
            const n = new (K(e))(t);
            e.component("lazy-image", Q(n))
        }
        ;
        var Z = {
            install(e, t={}) {
                const n = new (K(e))(t)
                  , r = new $({
                    lazy: n
                })
                  , o = "2" === e.version.split(".")[0];
                e.prototype.$Lazyload = n,
                t.lazyComponent && e.component("lazy-component", z(n)),
                t.lazyImage && e.component("lazy-image", Q(n)),
                o ? (e.directive("lazy", {
                    bind: n.add.bind(n),
                    update: n.update.bind(n),
                    componentUpdated: n.lazyLoadHandler.bind(n),
                    unbind: n.remove.bind(n)
                }),
                e.directive("lazy-container", {
                    bind: r.bind.bind(r),
                    componentUpdated: r.update.bind(r),
                    unbind: r.unbind.bind(r)
                })) : (e.directive("lazy", {
                    bind: n.lazyLoadHandler.bind(n),
                    update(e, t) {
                        S(this.vm.$refs, this.vm.$els),
                        n.add(this.el, {
                            modifiers: this.modifiers || {},
                            arg: this.arg,
                            value: e,
                            oldValue: t
                        }, {
                            context: this.vm
                        })
                    },
                    unbind() {
                        n.remove(this.el)
                    }
                }),
                e.directive("lazy-container", {
                    update(e, t) {
                        r.update(this.el, {
                            modifiers: this.modifiers || {},
                            arg: this.arg,
                            value: e,
                            oldValue: t
                        }, {
                            context: this.vm
                        })
                    },
                    unbind() {
                        r.unbind(this.el)
                    }
                }))
            }
        };
        t.a = Z
    },
    661: function(e, t, n) {
        "use strict";
        function r(e, t, n) {
            e.addEventListener("message", (function(r) {
                var o = r.data
                  , a = o.id;
                if ("RPC" === o.type && null != a)
                    if (o.method) {
                        var s = t[o.method];
                        null == s ? e.postMessage({
                            type: "RPC",
                            id: a,
                            error: "NO_SUCH_METHOD"
                        }) : Promise.resolve().then((function() {
                            return s.apply(null, o.params)
                        }
                        )).then((function(t) {
                            e.postMessage({
                                type: "RPC",
                                id: a,
                                result: t
                            })
                        }
                        )).catch((function(t) {
                            e.postMessage({
                                type: "RPC",
                                id: a,
                                error: "" + t
                            })
                        }
                        ))
                    } else {
                        var i = n[a];
                        if (null == i)
                            throw Error("Unknown callback " + a);
                        delete n[a],
                        o.error ? i[1](Error(o.error)) : i[0](o.result)
                    }
            }
            ))
        }
        t.a = function(e, t) {
            var n = {}
              , o = "__xpo" + Math.random().toString().substring(2) + "__";
            "function" == typeof e && (e = "(" + Function.prototype.toString.call(e) + ")(" + o + ")"),
            e = function(e, t, n) {
                return e = (e = e.replace(/^(\s*)export\s+default\s+/m, (function(e, r) {
                    return n.default = !0,
                    "" + r + t + ".default="
                }
                ))).replace(/^(\s*)export\s+((?:async\s*)?function(?:\s*\*)?|const|let|var)(\s+)([a-zA-Z$_][a-zA-Z0-9$_]*)/gm, (function(e, r, o, a, s) {
                    return n[s] = !0,
                    "" + r + t + "." + s + "=" + o + a + s
                }
                )),
                "var " + t + "={};\n" + e + "\n" + t + ";"
            }(e, o, n) + "\n(" + Function.prototype.toString.call(r) + ")(self," + o + ",{})";
            var a, s = URL.createObjectURL(new Blob([e],{
                type: "text/javascript"
            })), i = new Worker(s,t), c = i.terminate, l = {}, u = 0;
            for (a in i.kill = function(e) {
                i.postMessage({
                    type: "KILL",
                    signal: e
                }),
                setTimeout(i.terminate)
            }
            ,
            i.terminate = function() {
                URL.revokeObjectURL(s),
                c.call(i)
            }
            ,
            i.call = function(e, t) {
                return new Promise((function(n, r) {
                    var o = "rpc" + ++u;
                    l[o] = [n, r],
                    i.postMessage({
                        type: "RPC",
                        id: o,
                        method: e,
                        params: t
                    })
                }
                ))
            }
            ,
            i.rpcMethods = {},
            r(i, i.rpcMethods, l),
            i.expose = function(e) {
                i[e] = function() {
                    return i.call(e, [].slice.call(arguments))
                }
            }
            ,
            n)
                a in i || i.expose(a);
            return i
        }
    },
    677: function(e, t, n) {
        "use strict";
        n(152);
        var r = n(170)
          , o = (n(43),
        n(45),
        n(63),
        n(40),
        n(66),
        n(3))
          , c = n(6)
          , l = (n(193),
        n(5),
        n(80),
        n(44),
        n(18),
        n(53),
        n(99),
        n(103),
        n(78))
          , d = n(13)
          , f = n(164)
          , h = n.n(f)
          , _ = "core/setAllowAccess"
          , m = "core/setIsInApp"
          , v = "core/setIsMobile"
          , y = "core/setUserInformation"
          , E = "core/setUserLoginState"
          , O = "core/setUserInfo"
          , w = "core/setUserConfig"
          , T = "core/setUserBonusAmount"
          , S = "core/setShowTaskCenter"
          , C = "core/setUserUnreadNotificationCount"
          , R = "core/setCustomerServiceList"
          , A = "core/setUserNotificationListGroup"
          , I = "core/setUserChannel";
        function N(object, e) {
            var t = Object.keys(object);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(object);
                e && (n = n.filter((function(e) {
                    return Object.getOwnPropertyDescriptor(object, e).enumerable
                }
                ))),
                t.push.apply(t, n)
            }
            return t
        }
        function k(e) {
            for (var i = 1; i < arguments.length; i++) {
                var source = null != arguments[i] ? arguments[i] : {};
                i % 2 ? N(Object(source), !0).forEach((function(t) {
                    Object(o.a)(e, t, source[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(source)) : N(Object(source)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(source, t))
                }
                ))
            }
            return e
        }
        var L, P = {
            getUserInfo: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.getUserInfo();
                            case 4:
                                return o = n.sent,
                                r(O, o),
                                n.abrupt("return", o);
                            case 9:
                                n.prev = 9,
                                n.t0 = n.catch(1),
                                console.log("getUserInfo failed: ", n.t0);
                            case 12:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 9]])
                }
                )))()
            },
            getUserPersonalInformation: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.getUserPersonalInformation();
                            case 4:
                                return o = n.sent,
                                r(y, o),
                                n.abrupt("return", o);
                            case 9:
                                n.prev = 9,
                                n.t0 = n.catch(1),
                                console.log("getUserPersonalInformation failed: ", n.t0);
                            case 12:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 9]])
                }
                )))()
            },
            getBonusTotal: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o, c, d;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.getBonusTotal();
                            case 4:
                                o = n.sent,
                                c = Object(l.d)(o.amount || 0),
                                d = "$".concat(c),
                                r(T, d),
                                n.next = 13;
                                break;
                            case 10:
                                n.prev = 10,
                                n.t0 = n.catch(1),
                                console.log(n.t0);
                            case 13:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 10]])
                }
                )))()
            },
            getUnreadNotification: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o, c, l;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.getUnreadNotificationCount();
                            case 4:
                                o = n.sent,
                                c = o.notificationUnReadCountsList.find((function(e) {
                                    return 3 === e.notificationGroup
                                }
                                )),
                                l = o.totalUnReadCounts,
                                c && c.unReadCounts > 0 && l >= c.unReadCounts && (l -= c.unReadCounts),
                                r(C, l),
                                n.next = 14;
                                break;
                            case 11:
                                n.prev = 11,
                                n.t0 = n.catch(1),
                                console.log("getUnreadNotification failed: ", n.t0);
                            case 14:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 11]])
                }
                )))()
            },
            requestCustomerServiceList: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o, c;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.requestCustomerServiceList().catch((function() {
                                    return null
                                }
                                ));
                            case 4:
                                o = n.sent,
                                c = (o && o.conversions || []).map((function(e) {
                                    var t, n, r, o = k({}, e);
                                    return o._nickName = (null == e || null === (t = e.customerManager) || void 0 === t ? void 0 : t.nickName) || "--",
                                    o._avatar = (null == e || null === (n = e.customerManager) || void 0 === n ? void 0 : n.avatar) || "--",
                                    o._unreadCount = e.unreadCount >= 100 ? "99+" : e.unreadCount,
                                    o._shortGroupId = (null === (r = e.groupId) || void 0 === r ? void 0 : r.substr(0, 10)) || "",
                                    o._lastTime = e.firstUnreadMessageTime ? h()(e.firstUnreadMessageTime).format("YYYY-MM-DD HH:mm") : "--",
                                    o
                                }
                                )),
                                r(R, c),
                                n.next = 12;
                                break;
                            case 9:
                                n.prev = 9,
                                n.t0 = n.catch(1),
                                console.log("requestCustomerServiceList failed: ", n.t0);
                            case 12:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 9]])
                }
                )))()
            },
            getNotificationListGroup: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o, c;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.getNotificationListGroup();
                            case 4:
                                o = n.sent,
                                c = o.notificationGroupVoList.filter((function(e) {
                                    return 3 !== e.notificationGroup
                                }
                                )),
                                r(A, c),
                                n.next = 12;
                                break;
                            case 9:
                                n.prev = 9,
                                n.t0 = n.catch(1),
                                console.log("getNotificationListGroup failed", n.t0);
                            case 12:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 9]])
                }
                )))()
            },
            getUserConfig: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.getUserConfig();
                            case 4:
                                o = n.sent,
                                r(w, o),
                                n.next = 11;
                                break;
                            case 8:
                                n.prev = 8,
                                n.t0 = n.catch(1),
                                console.log("getUserConfig failed", n.t0);
                            case 11:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 8]])
                }
                )))()
            },
            logout: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.dispatch,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.logout();
                            case 4:
                                r("updateLoginState", {
                                    isLogin: !1
                                }),
                                n.next = 10;
                                break;
                            case 7:
                                n.prev = 7,
                                n.t0 = n.catch(1),
                                console.log("logout failed", n.t0);
                            case 10:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 7]])
                }
                )))()
            },
            initLoginState: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                r = e.commit,
                                o = t.$cookies.get(d.l),
                                r(E, !!o);
                            case 3:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n)
                }
                )))()
            },
            updateLoginState: function(e, t) {
                var n = this;
                return Object(c.a)(regeneratorRuntime.mark((function r() {
                    var o;
                    return regeneratorRuntime.wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                o = e.commit,
                                e.dispatch,
                                t && t.isLogin ? (n.$cookies.set(d.l, t.token, n.$appConfig.cookiesOptions),
                                o(E, !0)) : (n.$cookies.remove(d.l, n.$appConfig.cookiesOptions),
                                n.$cookies.remove("isTrader", n.$appConfig.cookiesOptions),
                                n.$cookies.remove("isTrader"),
                                n.$cookies.remove(d.l),
                                o(E, !1));
                            case 2:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r)
                }
                )))()
            },
            updateUserChannel: function(e, t) {
                (0,
                e.commit)(I, t || "")
            },
            updateIsInApp: function(e, t) {
                (0,
                e.commit)(m, t)
            },
            updateIsMobile: function(e, t) {
                (0,
                e.commit)(v, t)
            },
            checkAccessPermission: function(e, t) {
                var n = this;
                return Object(c.a)(regeneratorRuntime.mark((function r() {
                    var o, c, l, d, f;
                    return regeneratorRuntime.wrap((function(r) {
                        for (; ; )
                            switch (r.prev = r.next) {
                            case 0:
                                if (o = e.commit,
                                c = n.$router.currentRoute.query && "tv" === n.$router.currentRoute.query.channel,
                                l = n.$router.currentRoute.path && /support/.test(n.$router.currentRoute.path),
                                d = ["popularize", "hybrid"],
                                !(c || l || d.includes(t))) {
                                    r.next = 7;
                                    break
                                }
                                return o("SET_ALLOW_ACCESS", !0),
                                r.abrupt("return");
                            case 7:
                                return r.next = 9,
                                n.$coreServices.common.getRestrictInfo();
                            case 9:
                                f = r.sent,
                                o(_, f.allowPc || !1);
                            case 11:
                            case "end":
                                return r.stop()
                            }
                    }
                    ), r)
                }
                )))()
            },
            getWebEntryPopup: function(e) {
                var t = this;
                return Object(c.a)(regeneratorRuntime.mark((function n() {
                    var r, o;
                    return regeneratorRuntime.wrap((function(n) {
                        for (; ; )
                            switch (n.prev = n.next) {
                            case 0:
                                return r = e.commit,
                                n.prev = 1,
                                n.next = 4,
                                t.$coreServices.common.getWebEntryPopup();
                            case 4:
                                o = n.sent,
                                r(S, o && o.showTask),
                                n.next = 10;
                                break;
                            case 8:
                                n.prev = 8,
                                n.t0 = n.catch(1);
                            case 10:
                            case "end":
                                return n.stop()
                            }
                    }
                    ), n, null, [[1, 8]])
                }
                )))()
            }
        }, D = (L = {},
        Object(o.a)(L, E, (function(e, t) {
            e.isLogin = t
        }
        )),
        Object(o.a)(L, I, (function(e, t) {
            e.channel = t
        }
        )),
        Object(o.a)(L, O, (function(e, t) {
            e.userInfo = t
        }
        )),
        Object(o.a)(L, y, (function(e, t) {
            e.userInformation = t
        }
        )),
        Object(o.a)(L, w, (function(e, t) {
            r.a.set("showKo", t.showKo),
            r.a.set("showNl", t.showNl),
            e.userConfig = t
        }
        )),
        Object(o.a)(L, T, (function(e, t) {
            e.bonusTotal = t
        }
        )),
        Object(o.a)(L, C, (function(e, t) {
            e.userUnreadNotificationCount = t
        }
        )),
        Object(o.a)(L, R, (function(e, t) {
            e.customerServiceList = t || []
        }
        )),
        Object(o.a)(L, A, (function(e, t) {
            e.userNotificationListGroup = t
        }
        )),
        Object(o.a)(L, _, (function(e, t) {
            e.allowAccess = t
        }
        )),
        Object(o.a)(L, "SET_USER_INFO", (function(e, t) {
            e.postSocialFeed = 1 === t.postSocialFeed ? 1 : 0,
            e.showEmail = t.showEmail,
            e.copyShow = t.copyShow,
            e.supportOrderBook = t.supportOrderBook,
            e.verifyGeeTest = t.verifyGeeTest,
            e.availableVerifyChannels = t.availableVerifyChannels || (t.verifyGeeTest ? [1] : []),
            e.emailPriority = t.emailPriority,
            e.showBuy = t.showBuy,
            e.showC2c = t.showC2c,
            e.showC2cOptional = t.showC2cOptional,
            e.countryShortCode = t.countryShortCode || "",
            e.showSwapApi = t.showSwapApi,
            e.spotTabTopFlag = t.spotTabTopFlag,
            e.swapShowType = t.swapShowType,
            e.traderProtect = t.traderProtect,
            e.maxVstAssetsThreashold = t.maxVstAssetsThreashold,
            e.applyVstMinDays = t.applyVstMinDays
        }
        )),
        Object(o.a)(L, "CHANGE_LOGIN_STATE", (function(e, t) {
            if (t.isLogin) {
                var n = t.token;
                this.$auth.setLoginToken(n)
            } else
                this.$auth.logout();
            e.isLogin = t.isLogin
        }
        )),
        Object(o.a)(L, v, (function(e, t) {
            e.isMobile = t
        }
        )),
        Object(o.a)(L, m, (function(e, t) {
            e.isInApp = t
        }
        )),
        Object(o.a)(L, S, (function(e, t) {
            e.showTaskCenter = t
        }
        )),
        L), x = n(71), j = n(83), M = {
            uid: function(e) {
                return e.userInfo.uid || ""
            },
            muid: function(e) {
                return e.userInfo.muid || ""
            },
            shortUid: function(e) {
                return e.userInformation.shortUid || ""
            },
            avatarFile: function(e) {
                return e.userInformation.avatarFile && e.userInformation.avatarFile.url
            },
            nickName: function(e) {
                return e.userInformation.nickName
            },
            mobile: function(e) {
                return e.userInformation.mobile
            },
            email: function(e) {
                return e.userInfo.email || ""
            },
            trader: function(e) {
                return e.userInfo.trader || ""
            },
            realEmail: function(e) {
                return e.userInfo.email || ""
            },
            realMobile: function(e) {
                return e.userInfo.mobile || ""
            },
            callingCode: function(e) {
                return e.userInfo.callingCode && e.userInfo.callingCode.callingCode
            },
            showSwap: function(e) {
                var t = e.userConfig.swapShowType;
                return [1, 2].includes(t)
            },
            showSpot: function(e) {
                var t = e.userConfig.swapShowType;
                return [2, 3].includes(t)
            },
            showBuy: function(e) {
                return e.userConfig.showBuy
            },
            showC2c: function(e) {
                return e.userConfig.showC2c
            },
            vipLevel: function(e) {
                return e.userConfig.vipLevel
            },
            showC2cOptional: function(e) {
                return e.userConfig.showC2cOptional
            },
            countryShortCode: function(e) {
                return e.userConfig.countryShortCode
            },
            showSwapApi: function(e) {
                return e.userConfig.showSwapApi
            },
            copyShow: function(e) {
                return e.userConfig.copyShow
            },
            showEmail: function(e) {
                return e.userConfig.showEmail
            },
            blackLocaleList: function(e) {
                var t = Object(x.a)(j.i);
                return 1 !== e.userConfig.showKo && t.push("ko-kr"),
                1 !== e.userConfig.showNl && t.push("nl-nl"),
                t
            },
            availableSecurityOptions: function(e) {
                return e.userInfo.availableSecurityOptions || []
            },
            latestWithDrawOption: function(e) {
                return e.userInfo.latestWithDrawOption
            },
            availableVerifyChannels: function(e) {
                return e.userConfig.availableVerifyChannels || (e.userConfig.verifyGeeTest ? [1] : []) || []
            },
            allTypeUnReadCounts: function(e) {
                var t = 0;
                return (e.customerServiceList || []).forEach((function(e) {
                    e && "number" == typeof e.unreadCount && (t += e.unreadCount)
                }
                )),
                e.userUnreadNotificationCount + t
            }
        };
        t.a = {
            namespaced: !0,
            state: function() {
                return {
                    allowAccess: !0,
                    userInformation: {},
                    userInfo: {},
                    userMessage: {},
                    bonusTotal: "",
                    isLogin: !1,
                    userConfig: {
                        showKo: Number(r.a.get("showKo")) || 0,
                        showNl: Number(r.a.get("showNl")) || 0
                    },
                    showTaskCenter: !1,
                    channel: "",
                    userUnreadNotificationCount: 0,
                    userNotificationListGroup: [],
                    customerServiceList: [],
                    isMobile: !1,
                    isInApp: !1,
                    vipLevel: null
                }
            },
            getters: M,
            actions: P,
            mutations: D
        }
    },
    752: function(e, t, n) {
        "use strict";
        n(553)
    },
    753: function(e, t, n) {
        "use strict";
        n(554)
    },
    754: function(e, t, n) {
        "use strict";
        n(555)
    },
    78: function(e, t, n) {
        "use strict";
        n.d(t, "g", (function() {
            return P.a
        }
        )),
        n.d(t, "j", (function() {
            return D
        }
        )),
        n.d(t, "e", (function() {
            return x
        }
        )),
        n.d(t, "l", (function() {
            return j
        }
        )),
        n.d(t, "m", (function() {
            return M
        }
        )),
        n.d(t, "n", (function() {
            return U
        }
        )),
        n.d(t, "p", (function() {
            return B
        }
        )),
        n.d(t, "o", (function() {
            return G
        }
        )),
        n.d(t, "d", (function() {
            return F
        }
        )),
        n.d(t, "c", (function() {
            return V
        }
        )),
        n.d(t, "a", (function() {
            return Y
        }
        )),
        n.d(t, "k", (function() {
            return K
        }
        )),
        n.d(t, "h", (function() {
            return z
        }
        )),
        n.d(t, "i", (function() {
            return $
        }
        )),
        n.d(t, "f", (function() {
            return J
        }
        )),
        n.d(t, "b", (function() {
            return X
        }
        ));
        var r, o = n(59), c = (n(500),
        n(244)), l = n.n(c), d = (n(759),
        n(174),
        n(463)), f = n.n(d), h = n(12), _ = (n(165),
        n(18),
        n(77),
        n(142),
        n(218),
        n(287),
        n(43),
        n(5),
        n(152),
        n(76),
        n(398),
        n(510),
        n(48),
        n(80),
        n(98),
        n(40),
        n(92),
        n(65),
        n(49),
        n(305),
        n(153),
        n(44),
        n(696),
        n(565),
        n(67)), m = n(156), v = n.n(m), y = new Uint8Array(16);
        function E() {
            if (!r && !(r = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" != typeof msCrypto && "function" == typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto)))
                throw new Error("crypto.getRandomValues() not supported. See http://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return r(y)
        }
        var O = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        for (var w = function(e) {
            return "string" == typeof e && O.test(e)
        }, T = [], S = 0; S < 256; ++S)
            T.push((S + 256).toString(16).substr(1));
        var C = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0
              , n = (T[e[t + 0]] + T[e[t + 1]] + T[e[t + 2]] + T[e[t + 3]] + "-" + T[e[t + 4]] + T[e[t + 5]] + "-" + T[e[t + 6]] + T[e[t + 7]] + "-" + T[e[t + 8]] + T[e[t + 9]] + "-" + T[e[t + 10]] + T[e[t + 11]] + T[e[t + 12]] + T[e[t + 13]] + T[e[t + 14]] + T[e[t + 15]]).toLowerCase();
            if (!w(n))
                throw TypeError("Stringified UUID is invalid");
            return n
        };
        var R, A = function(e, t, n) {
            var r = (e = e || {}).random || (e.rng || E)();
            if (r[6] = 15 & r[6] | 64,
            r[8] = 63 & r[8] | 128,
            t) {
                n = n || 0;
                for (var i = 0; i < 16; ++i)
                    t[n + i] = r[i];
                return t
            }
            return C(r)
        }, I = n(13), N = n(170), k = (n(245),
        n(200)), L = n(215), P = n(946), D = (I.f,
        _.z,
        function(e) {
            return k.d[e || "en-us"] || k.d["en-us"]
        }
        ), x = function(e, t) {
            if (!t)
                return "";
            if (1 === e)
                return 11 === t.length ? t.replace(/^(\d{3})\d{4}(\d+)/, "$1****$2") : t.replace(/^(\d{2})\d{3}(\d+)/, "$1****$2");
            var n = t.split("@")
              , r = "";
            return n[0].length <= 3 ? (r = "*",
            n[0] = n[0].substr(0, n[0].length) + r) : (r = "***",
            n[0] = n[0].substr(0, 1) + r + n[0].charAt(n[0].length - 1)),
            n[0] + "@" + n[1]
        }, j = function() {
            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
            return L.a.test(e)
        }, M = function(e) {
            var code = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
            return !(/[^\d]/.test(e) || !/[\d]{6}/.test(e) || ("86" === code || "+86" === code) && !L.b.test(e))
        }, H = function(e, t) {
            var n = t || N.a.get("locale") || "en-us"
              , r = e ? "".concat(window.location.protocol, "//").concat(window.location.host) : "";
            window.location.href = "".concat(r, "/").concat(n, "/download")
        }, U = {
            open: function(text) {
                l.a.open({
                    spinnerType: "fading-circle",
                    text: text
                })
            },
            close: function() {
                l.a.close()
            }
        }, B = function(text) {
            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "info";
            f()({
                message: text,
                type: e
            })
        }, G = function(e) {
            var t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1]
              , n = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
            try {
                window.location.href = "bingbon://pro.bingbon",
                setTimeout((function() {
                    t && H(n, e)
                }
                ), 2e3)
            } catch (r) {
                t && H(n, e)
            }
        }, W = function(e) {
            return "".concat(e).replace(/(\.)(\d*?)0+$/, (function(e, t, n) {
                return n ? "".concat(t).concat(n) : ""
            }
            ))
        }, F = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2
              , n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : ""
              , r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
              , o = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            if (null === e || "" === e || isNaN(+e))
                return n;
            var c = new v.a(e).toFixed(t, v.a.ROUND_DOWN);
            return /^-0(\.0+)?$/.test(c) && (c = c.slice(1)),
            o && "-" !== c[0] && (c = "+".concat(c)),
            r ? W(c) : c
        };
        !function(e) {
            e[e.FORCE_POSITIVE = 0] = "FORCE_POSITIVE",
            e[e.KEEP_SIGN = 1] = "KEEP_SIGN",
            e[e.FORCE_SIGN = 2] = "FORCE_SIGN"
        }(R || (R = {}));
        var V = function(e) {
            var option = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
              , t = void 0 === option.precision ? 2 : option.precision
              , n = void 0 === option.defaultValue ? "" : option.defaultValue
              , r = void 0 === option.keepEndZero || option.keepEndZero
              , o = void 0 === option.zeroMode ? R.KEEP_SIGN : option.zeroMode
              , c = void 0 !== option.withSign && option.withSign;
            if ("" === e || isNaN(+e))
                return n;
            var l = new v.a(e)
              , d = l.toFixed(t, v.a.ROUND_DOWN)
              , f = !1;
            if (/^-0(\.0+)?$/.test(d) && (d = d.slice(1),
            f = !0),
            c)
                switch (o) {
                case R.FORCE_POSITIVE:
                    "-" !== d[0] && (d = "+".concat(d));
                    break;
                case R.KEEP_SIGN:
                    f ? d = "-".concat(d) : l.isPositive() && !l.isZero() && (d = "+".concat(d));
                    break;
                case R.FORCE_SIGN:
                    f ? d = "-".concat(d) : l.isNegative() || (d = "+".concat(d))
                }
            return r || (d = W(d)),
            d
        }
          , Y = function e(t) {
            return Object.entries(t).forEach((function(n) {
                var r = Object(o.a)(n, 2)
                  , c = r[0]
                  , l = r[1];
                l && "object" === Object(h.a)(l) && e(l),
                (l && "object" === Object(h.a)(l) && !Object.keys(l).length || null == l) && (Array.isArray(t) ? t.splice(+c, 1) : delete t[c])
            }
            )),
            t
        }
          , K = function(e) {
            var t = e
              , n = t.split(".").filter((function(e) {
                return !!e
            }
            ))
              , r = t;
            return n.length > 2 && n.length < 4 && (r = n.splice(-2).join(".")),
            r && r.indexOf(":") > 0 && (r = r.substr(0, r.indexOf(":"))),
            /\./.test(r) ? ".".concat(r) : r
        }
          , z = function(e) {
            return "".concat(I.k, "/icon/").concat(e, ".png")
        }
          , $ = function() {
            var e = navigator
              , t = (null == e ? void 0 : e.connection) || (null == e ? void 0 : e.mozConnection) || (null == e ? void 0 : e.webkitConnection)
              , n = t && (t.type || t.effectiveType) || "unknown";
            return navigator.onLine || (n = "no_net"),
            n
        };
        function J() {
            return A().replace(/-/g, "").toLowerCase()
        }
        function X(e) {
            for (var t = "", i = 0; i < e.length; i++)
                for (var n = e.charCodeAt(i).toString(2).padStart(8, "0"), r = 0; r < n.length; r++) {
                    t += "0" === n.charAt(r) ? "‌" : "‍"
                }
            return t
        }
    },
    801: function(e, t, n) {
        var r = n(268)
          , o = r.slice
          , c = r.pluck
          , l = r.each
          , d = r.bind
          , f = r.create
          , h = r.isList
          , _ = r.isFunction
          , m = r.isObject;
        e.exports = {
            createStore: y
        };
        var v = {
            version: "2.0.12",
            enabled: !1,
            get: function(e, t) {
                var data = this.storage.read(this._namespacePrefix + e);
                return this._deserialize(data, t)
            },
            set: function(e, t) {
                return void 0 === t ? this.remove(e) : (this.storage.write(this._namespacePrefix + e, this._serialize(t)),
                t)
            },
            remove: function(e) {
                this.storage.remove(this._namespacePrefix + e)
            },
            each: function(e) {
                var t = this;
                this.storage.each((function(n, r) {
                    e.call(t, t._deserialize(n), (r || "").replace(t._namespaceRegexp, ""))
                }
                ))
            },
            clearAll: function() {
                this.storage.clearAll()
            },
            hasNamespace: function(e) {
                return this._namespacePrefix == "__storejs_" + e + "_"
            },
            createStore: function() {
                return y.apply(this, arguments)
            },
            addPlugin: function(e) {
                this._addPlugin(e)
            },
            namespace: function(e) {
                return y(this.storage, this.plugins, e)
            }
        };
        function y(e, t, n) {
            n || (n = ""),
            e && !h(e) && (e = [e]),
            t && !h(t) && (t = [t]);
            var r = n ? "__storejs_" + n + "_" : ""
              , y = n ? new RegExp("^" + r) : null;
            if (!/^[a-zA-Z0-9_\-]*$/.test(n))
                throw new Error("store.js namespaces can only have alphanumerics + underscores and dashes");
            var E = {
                _namespacePrefix: r,
                _namespaceRegexp: y,
                _testStorage: function(e) {
                    try {
                        var t = "__storejs__test__";
                        e.write(t, t);
                        var n = e.read(t) === t;
                        return e.remove(t),
                        n
                    } catch (e) {
                        return !1
                    }
                },
                _assignPluginFnProp: function(e, t) {
                    var n = this[t];
                    this[t] = function() {
                        var t = o(arguments, 0)
                          , r = this;
                        function c() {
                            if (n)
                                return l(arguments, (function(e, i) {
                                    t[i] = e
                                }
                                )),
                                n.apply(r, t)
                        }
                        var d = [c].concat(t);
                        return e.apply(r, d)
                    }
                },
                _serialize: function(e) {
                    return JSON.stringify(e)
                },
                _deserialize: function(e, t) {
                    if (!e)
                        return t;
                    var n = "";
                    try {
                        n = JSON.parse(e)
                    } catch (t) {
                        n = e
                    }
                    return void 0 !== n ? n : t
                },
                _addStorage: function(e) {
                    this.enabled || this._testStorage(e) && (this.storage = e,
                    this.enabled = !0)
                },
                _addPlugin: function(e) {
                    var t = this;
                    if (h(e))
                        l(e, (function(e) {
                            t._addPlugin(e)
                        }
                        ));
                    else if (!c(this.plugins, (function(t) {
                        return e === t
                    }
                    ))) {
                        if (this.plugins.push(e),
                        !_(e))
                            throw new Error("Plugins must be function values that return objects");
                        var n = e.call(this);
                        if (!m(n))
                            throw new Error("Plugins must return an object of function properties");
                        l(n, (function(n, r) {
                            if (!_(n))
                                throw new Error("Bad plugin property: " + r + " from plugin " + e.name + ". Plugins should only return functions.");
                            t._assignPluginFnProp(n, r)
                        }
                        ))
                    }
                },
                addStorage: function(e) {
                    !function() {
                        var e = "undefined" == typeof console ? null : console;
                        if (e) {
                            (e.warn ? e.warn : e.log).apply(e, arguments)
                        }
                    }("store.addStorage(storage) is deprecated. Use createStore([storages])"),
                    this._addStorage(e)
                }
            }
              , O = f(E, v, {
                plugins: []
            });
            return O.raw = {},
            l(O, (function(e, t) {
                _(e) && (O.raw[t] = d(O, e))
            }
            )),
            l(e, (function(e) {
                O._addStorage(e)
            }
            )),
            l(t, (function(e) {
                O._addPlugin(e)
            }
            )),
            O
        }
    },
    802: function(e, t, n) {
        e.exports = [n(803), n(804), n(805), n(806), n(807), n(808)]
    },
    803: function(e, t, n) {
        var r = n(268).Global;
        function o() {
            return r.localStorage
        }
        function c(e) {
            return o().getItem(e)
        }
        e.exports = {
            name: "localStorage",
            read: c,
            write: function(e, data) {
                return o().setItem(e, data)
            },
            each: function(e) {
                for (var i = o().length - 1; i >= 0; i--) {
                    var t = o().key(i);
                    e(c(t), t)
                }
            },
            remove: function(e) {
                return o().removeItem(e)
            },
            clearAll: function() {
                return o().clear()
            }
        }
    },
    804: function(e, t, n) {
        var r = n(268).Global;
        e.exports = {
            name: "oldFF-globalStorage",
            read: function(e) {
                return o[e]
            },
            write: function(e, data) {
                o[e] = data
            },
            each: c,
            remove: function(e) {
                return o.removeItem(e)
            },
            clearAll: function() {
                c((function(e, t) {
                    delete o[e]
                }
                ))
            }
        };
        var o = r.globalStorage;
        function c(e) {
            for (var i = o.length - 1; i >= 0; i--) {
                var t = o.key(i);
                e(o[t], t)
            }
        }
    },
    805: function(e, t, n) {
        var r = n(268).Global;
        e.exports = {
            name: "oldIE-userDataStorage",
            write: function(e, data) {
                if (d)
                    return;
                var t = h(e);
                l((function(e) {
                    e.setAttribute(t, data),
                    e.save(o)
                }
                ))
            },
            read: function(e) {
                if (d)
                    return;
                var t = h(e)
                  , n = null;
                return l((function(e) {
                    n = e.getAttribute(t)
                }
                )),
                n
            },
            each: function(e) {
                l((function(t) {
                    for (var n = t.XMLDocument.documentElement.attributes, i = n.length - 1; i >= 0; i--) {
                        var r = n[i];
                        e(t.getAttribute(r.name), r.name)
                    }
                }
                ))
            },
            remove: function(e) {
                var t = h(e);
                l((function(e) {
                    e.removeAttribute(t),
                    e.save(o)
                }
                ))
            },
            clearAll: function() {
                l((function(e) {
                    var t = e.XMLDocument.documentElement.attributes;
                    e.load(o);
                    for (var i = t.length - 1; i >= 0; i--)
                        e.removeAttribute(t[i].name);
                    e.save(o)
                }
                ))
            }
        };
        var o = "storejs"
          , c = r.document
          , l = function() {
            if (!c || !c.documentElement || !c.documentElement.addBehavior)
                return null;
            var e, t, n;
            try {
                (t = new ActiveXObject("htmlfile")).open(),
                t.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></iframe>'),
                t.close(),
                e = t.w.frames[0].document,
                n = e.createElement("div")
            } catch (t) {
                n = c.createElement("div"),
                e = c.body
            }
            return function(t) {
                var r = [].slice.call(arguments, 0);
                r.unshift(n),
                e.appendChild(n),
                n.addBehavior("#default#userData"),
                n.load(o),
                t.apply(this, r),
                e.removeChild(n)
            }
        }()
          , d = (r.navigator ? r.navigator.userAgent : "").match(/ (MSIE 8|MSIE 9|MSIE 10)\./);
        var f = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");
        function h(e) {
            return e.replace(/^\d/, "___$&").replace(f, "___")
        }
    },
    806: function(e, t, n) {
        var r = n(268)
          , o = r.Global
          , c = r.trim;
        e.exports = {
            name: "cookieStorage",
            read: function(e) {
                if (!e || !h(e))
                    return null;
                var t = "(?:^|.*;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*((?:[^;](?!;))*[^;]?).*";
                return unescape(l.cookie.replace(new RegExp(t), "$1"))
            },
            write: function(e, data) {
                if (!e)
                    return;
                l.cookie = escape(e) + "=" + escape(data) + "; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/"
            },
            each: d,
            remove: f,
            clearAll: function() {
                d((function(e, t) {
                    f(t)
                }
                ))
            }
        };
        var l = o.document;
        function d(e) {
            for (var t = l.cookie.split(/; ?/g), i = t.length - 1; i >= 0; i--)
                if (c(t[i])) {
                    var n = t[i].split("=")
                      , r = unescape(n[0]);
                    e(unescape(n[1]), r)
                }
        }
        function f(e) {
            e && h(e) && (l.cookie = escape(e) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/")
        }
        function h(e) {
            return new RegExp("(?:^|;\\s*)" + escape(e).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=").test(l.cookie)
        }
    },
    807: function(e, t, n) {
        var r = n(268).Global;
        function o() {
            return r.sessionStorage
        }
        function c(e) {
            return o().getItem(e)
        }
        e.exports = {
            name: "sessionStorage",
            read: c,
            write: function(e, data) {
                return o().setItem(e, data)
            },
            each: function(e) {
                for (var i = o().length - 1; i >= 0; i--) {
                    var t = o().key(i);
                    e(c(t), t)
                }
            },
            remove: function(e) {
                return o().removeItem(e)
            },
            clearAll: function() {
                return o().clear()
            }
        }
    },
    808: function(e, t) {
        e.exports = {
            name: "memoryStorage",
            read: function(e) {
                return n[e]
            },
            write: function(e, data) {
                n[e] = data
            },
            each: function(e) {
                for (var t in n)
                    n.hasOwnProperty(t) && e(n[t], t)
            },
            remove: function(e) {
                delete n[e]
            },
            clearAll: function(e) {
                n = {}
            }
        };
        var n = {}
    },
    809: function(e, t, n) {
        e.exports = function() {
            return n(810),
            {}
        }
    },
    810: function(module, exports) {
        "object" != typeof JSON && (JSON = {}),
        function() {
            "use strict";
            var rx_one = /^[\],:{}\s]*$/, rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, rx_four = /(?:^|:|,)(?:\s*\[)+/g, rx_escapable = /[\\"\u0000-\u001f\u007f-\u009f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, rx_dangerous = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta, rep;
            function f(e) {
                return e < 10 ? "0" + e : e
            }
            function this_value() {
                return this.valueOf()
            }
            function quote(e) {
                return rx_escapable.lastIndex = 0,
                rx_escapable.test(e) ? '"' + e.replace(rx_escapable, (function(a) {
                    var e = meta[a];
                    return "string" == typeof e ? e : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }
                )) + '"' : '"' + e + '"'
            }
            function str(e, t) {
                var i, n, r, o, c, l = gap, d = t[e];
                switch (d && "object" == typeof d && "function" == typeof d.toJSON && (d = d.toJSON(e)),
                "function" == typeof rep && (d = rep.call(t, e, d)),
                typeof d) {
                case "string":
                    return quote(d);
                case "number":
                    return isFinite(d) ? String(d) : "null";
                case "boolean":
                case "null":
                    return String(d);
                case "object":
                    if (!d)
                        return "null";
                    if (gap += indent,
                    c = [],
                    "[object Array]" === Object.prototype.toString.apply(d)) {
                        for (o = d.length,
                        i = 0; i < o; i += 1)
                            c[i] = str(i, d) || "null";
                        return r = 0 === c.length ? "[]" : gap ? "[\n" + gap + c.join(",\n" + gap) + "\n" + l + "]" : "[" + c.join(",") + "]",
                        gap = l,
                        r
                    }
                    if (rep && "object" == typeof rep)
                        for (o = rep.length,
                        i = 0; i < o; i += 1)
                            "string" == typeof rep[i] && (r = str(n = rep[i], d)) && c.push(quote(n) + (gap ? ": " : ":") + r);
                    else
                        for (n in d)
                            Object.prototype.hasOwnProperty.call(d, n) && (r = str(n, d)) && c.push(quote(n) + (gap ? ": " : ":") + r);
                    return r = 0 === c.length ? "{}" : gap ? "{\n" + gap + c.join(",\n" + gap) + "\n" + l + "}" : "{" + c.join(",") + "}",
                    gap = l,
                    r
                }
            }
            "function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
                return isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" : null
            }
            ,
            Boolean.prototype.toJSON = this_value,
            Number.prototype.toJSON = this_value,
            String.prototype.toJSON = this_value),
            "function" != typeof JSON.stringify && (meta = {
                "\b": "\\b",
                "\t": "\\t",
                "\n": "\\n",
                "\f": "\\f",
                "\r": "\\r",
                '"': '\\"',
                "\\": "\\\\"
            },
            JSON.stringify = function(e, t, n) {
                var i;
                if (gap = "",
                indent = "",
                "number" == typeof n)
                    for (i = 0; i < n; i += 1)
                        indent += " ";
                else
                    "string" == typeof n && (indent = n);
                if (rep = t,
                t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length))
                    throw new Error("JSON.stringify");
                return str("", {
                    "": e
                })
            }
            ),
            "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
                var j;
                function walk(e, t) {
                    var n, r, o = e[t];
                    if (o && "object" == typeof o)
                        for (n in o)
                            Object.prototype.hasOwnProperty.call(o, n) && (void 0 !== (r = walk(o, n)) ? o[n] = r : delete o[n]);
                    return reviver.call(e, t, o)
                }
                if (text = String(text),
                rx_dangerous.lastIndex = 0,
                rx_dangerous.test(text) && (text = text.replace(rx_dangerous, (function(a) {
                    return "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
                }
                ))),
                rx_one.test(text.replace(rx_two, "@").replace(rx_three, "]").replace(rx_four, "")))
                    return j = eval("(" + text + ")"),
                    "function" == typeof reviver ? walk({
                        "": j
                    }, "") : j;
                throw new SyntaxError("JSON.parse")
            }
            )
        }()
    },
    815: function(e, t, n) {
        "use strict";
        var r = n(227)
          , o = n(821)
          , c = n(825)
          , l = r("%TypeError%")
          , d = r("%WeakMap%", !0)
          , f = r("%Map%", !0)
          , h = o("WeakMap.prototype.get", !0)
          , _ = o("WeakMap.prototype.set", !0)
          , m = o("WeakMap.prototype.has", !0)
          , v = o("Map.prototype.get", !0)
          , y = o("Map.prototype.set", !0)
          , E = o("Map.prototype.has", !0)
          , O = function(e, t) {
            for (var n, r = e; null !== (n = r.next); r = n)
                if (n.key === t)
                    return r.next = n.next,
                    n.next = e.next,
                    e.next = n,
                    n
        };
        e.exports = function() {
            var e, t, n, r = {
                assert: function(e) {
                    if (!r.has(e))
                        throw new l("Side channel does not contain " + c(e))
                },
                get: function(r) {
                    if (d && r && ("object" == typeof r || "function" == typeof r)) {
                        if (e)
                            return h(e, r)
                    } else if (f) {
                        if (t)
                            return v(t, r)
                    } else if (n)
                        return function(e, t) {
                            var n = O(e, t);
                            return n && n.value
                        }(n, r)
                },
                has: function(r) {
                    if (d && r && ("object" == typeof r || "function" == typeof r)) {
                        if (e)
                            return m(e, r)
                    } else if (f) {
                        if (t)
                            return E(t, r)
                    } else if (n)
                        return function(e, t) {
                            return !!O(e, t)
                        }(n, r);
                    return !1
                },
                set: function(r, o) {
                    d && r && ("object" == typeof r || "function" == typeof r) ? (e || (e = new d),
                    _(e, r, o)) : f ? (t || (t = new f),
                    y(t, r, o)) : (n || (n = {
                        key: {},
                        next: null
                    }),
                    function(e, t, n) {
                        var r = O(e, t);
                        r ? r.value = n : e.next = {
                            key: t,
                            next: e.next,
                            value: n
                        }
                    }(n, r, o))
                }
            };
            return r
        }
    },
    832: function(e, t, n) {
        var r = n(833);
        e.exports = function(e, t, n) {
            return void 0 === n ? r(e, t, !1) : r(e, n, !1 !== t)
        }
    },
    833: function(e, t) {
        e.exports = function(e, t, n, r) {
            var o, c = 0;
            return "boolean" != typeof t && (r = n,
            n = t,
            t = void 0),
            function() {
                var l = this
                  , d = Number(new Date) - c
                  , f = arguments;
                function h() {
                    c = Number(new Date),
                    n.apply(l, f)
                }
                function _() {
                    o = void 0
                }
                r && !o && h(),
                o && clearTimeout(o),
                void 0 === r && d > e ? h() : !0 !== t && (o = setTimeout(r ? _ : h, void 0 === r ? e - d : e))
            }
        }
    },
    837: function(e) {
        e.exports = JSON.parse('{"loadFailed":"网络异常，验证超时，请刷新页面重试或者联系客服"}')
    },
    838: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Jaringan tidak normal dan waktu verifikasi habis, harap segarkan halaman dan coba lagi atau hubungi layanan pelanggan"}')
    },
    839: function(e) {
        e.exports = JSON.parse('{"loadFailed":"ネットワーク異常、処理時間がタイムアウトしました。ページの更新をするか、カスタマー サービスにお問い合わせください。"}')
    },
    840: function(e) {
        e.exports = JSON.parse('{"loadFailed":"네트워크가 비정상적이고 확인 시간이 초과되었습니다. 페이지를 새로고침하고 다시 시도하거나 고객 지원팀에 문의하세요."}')
    },
    841: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Сеть работает некорректно, время проверки истекло, обновите страницу и повторите попытку или обратитесь в службу поддержки."}')
    },
    842: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Ağ anormal ve doğrulama zaman aşımına uğradı, lütfen sayfayı yenileyin ve tekrar deneyin veya müşteri hizmetleri ile iletişime geçin."}')
    },
    843: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Mạng có bất thường. Đã quá thời gian xác thực, vui lòng làm mới trang và thử lại hoặc liên hệ CSKH"}')
    },
    844: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Het netwerk is fout gegaan en de verificatie is verlopen, ververs de pagina en probeer het opnieuw of neem contact op met de klantenondersteuning"}')
    },
    845: function(e) {
        e.exports = JSON.parse('{"loadFailed":"A rede está anormal e a verificação expirou. Atualize a página e tente novamente ou entre em contato com o suporte ao cliente"}')
    },
    846: function(e) {
        e.exports = JSON.parse('{"loadFailed":"شبکه دچار ناهنجاری است و کد تأیید منقضی شده است، لطفاً صفحه را تازه‌سازی کرده و دوباره امتحان کنید یا با پشتیبانی مشتریان تماس بگیرید"}')
    },
    847: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Das Netzwerk ist nicht normal und die Verifizierung wurde abgebrochen. Bitte aktualisieren Sie die Seite und versuchen Sie es erneut oder kontaktieren Sie den Support"}')
    },
    848: function(e) {
        e.exports = JSON.parse('{"loadFailed":"เครือข่ายผิดปกติและการยืนยันหมดเวลาแล้ว โปรดรีเฟรชหน้าเพจและลองอีกครั้ง หรือติดต่อฝ่ายสนับสนุนลูกค้า"}')
    },
    849: function(e) {
        e.exports = JSON.parse('{"loadFailed":"الشبكة غير مشتقرة وانتهت مهلة التحقق، يُرجى تحديث الصفحة والمحاولة مرة أُخرى أو التواصل مع دعم العملاء"}')
    },
    850: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Le réseau ne fonctionne pas correctement et la vérification a été interrompue. Veuillez actualiser la page et réessayer ou contacter le service clientèle."}')
    },
    851: function(e) {
        e.exports = JSON.parse('{"loadFailed":"La rete è anomala e il tempo di verifica è scaduto, si prega di aggiornare la pagina e riprovare o di rivolgersi all’Assistenza"}')
    },
    852: function(e) {
        e.exports = JSON.parse('{"loadFailed":"Помилка мережі, час перевірки вичерпано. Оновіть сторінку та спробуйте ще раз або зверніться до служби підтримки клієнтів"}')
    },
    853: function(e) {
        e.exports = JSON.parse("{}")
    }
}]);
