let GLOBAL = "https://corona.lmao.ninja/v2/all"
let COUNTRY = "https://corona.lmao.ninja/v2/countries?sort=cases"

const requestGLOBAL = axios.get(GLOBAL)
const requestCOUNTRY = axios.get(COUNTRY)

const api = new Vue({
    el: '#app',
    data() {
        return {
            loading: false,
            item: null,
            list: null,
            limit: 10,
            nothing: "无数据",
            error: ""
        };
    },
    computed: {
        filterNull: function() {
            return this.list.filter(value => {
                return value.countryInfo.iso2 !== null
            })
        }
    },
    methods:{
        getNumber: function(val) {
            if (val !== null)
                return val.toLocaleString('en')
        },
        getDateTime: function(val) {
            return `更新于 ${moment(val).utc(8).format('Y年M月D日 HH点mm分')}`
        },
        getLowerCase: function(val) {
            if (val !== null)
                return val.toLowerCase()
        },
        loadMore: function() {
            this.limit += 10;
        },
        getFlags: function(val) {
            return (val !== null ? 'fflag-' + val : 'fflag-unknown')
        },
        getCountryName: function(val) {
            var isoCountries = {
                "AO" : "安哥拉",
                "AF" : "阿富汗",
                "AL" : "阿尔巴尼亚",
                "DZ" : "阿尔及利亚",
                "AD" : "安道尔共和国",
                "AI" : "安圭拉岛",
                "AG" : "安提瓜和巴布达",
                "AR" : "阿根廷",
                "AM" : "亚美尼亚",
                "AU" : "澳大利亚",
                "AT" : "奥地利",
                "AW" : "阿鲁巴",
                "AZ" : "阿塞拜疆",
                "BA" : "波黑",
                "BS" : "巴哈马",
                "BH" : "巴林",
                "BD" : "孟加拉国",
                "BB" : "巴巴多斯",
                "BL" : "圣巴斯岛",
                "BY" : "白俄罗斯",
                "BE" : "比利时",
                "BZ" : "伯利兹",
                "BJ" : "贝宁",
                "BM" : "百慕大群岛",
                "BO" : "玻利维亚",
                "BW" : "博茨瓦纳",
                "BR" : "巴西",
                "BN" : "文莱",
                "BG" : "保加利亚",
                "BF" : "布基纳法索",
                "BQ" : "荷兰加勒比区",
                "BT" : "不丹王国",
                "MM" : "缅甸",
                "BI" : "布隆迪",
                "CM" : "喀麦隆",
                "CA" : "加拿大",
                "CF" : "中非共和国",
                "CV" : "佛得角共和国",
                "TD" : "乍得",
                "CD" : "刚果(金)",
                "CI" : "科特迪瓦",
                "CL" : "智利",
                "CN" : "中国",
                "CO" : "哥伦比亚",
                "CG" : "刚果",
                "CK" : "库克群岛",
                "CR" : "哥斯达黎加",
                "CU" : "古巴",
                "CW" : "库拉索",
                "CY" : "塞浦路斯",
                "CZ" : "捷克",
                "DK" : "丹麦",
                "DJ" : "吉布提",
                "DM" : "多米尼克国",
                "DO" : "多米尼加共和国",
                "EC" : "厄瓜多尔",
                "EG" : "埃及",
                "ER" : "厄立特里亚",
                "SV" : "萨尔瓦多",
                "EE" : "爱沙尼亚",
                "EH" : "阿拉伯撒哈拉民主共和国",
                "ET" : "埃塞俄比亚",
                "FJ" : "斐济",
                "FI" : "芬兰",
                "FK" : "马尔维纳斯群岛",
                "FO" : "法罗群岛",
                "FR" : "法国",
                "GF" : "法属圭亚那",
                "GA" : "加蓬",
                "GL" : "格陵兰岛",
                "GM" : "冈比亚",
                "GE" : "格鲁吉亚",
                "DE" : "德国",
                "GH" : "加纳",
                "GI" : "直布罗陀",
                "GP" : "瓜德罗普",
                "GR" : "希腊",
                "GD" : "格林纳达",
                "GU" : "关岛",
                "GQ" : "赤道几内亚",
                "GT" : "危地马拉",
                "GN" : "几内亚",
                "GW" : "几内亚比绍共和国",
                "GY" : "圭亚那",
                "HT" : "海地",
                "HN" : "洪都拉斯",
                "HK" : "香港",
                "HR" : "克罗地亚",
                "HU" : "匈牙利",
                "IS" : "冰岛",
                "IN" : "印度",
                "ID" : "印度尼西亚",
                "IR" : "伊朗",
                "IQ" : "伊拉克",
                "IE" : "爱尔兰",
                "IL" : "以色列",
                "IM" : "马恩岛",
                "IT" : "意大利",
                "JE" : "海峡群岛",
                "JM" : "牙买加",
                "JP" : "日本",
                "JO" : "约旦",
                "KH" : "柬埔寨",
                "KZ" : "哈萨克斯坦",
                "KE" : "肯尼亚",
                "KN" : "圣基茨和尼维斯联邦",
                "KR" : "韩国",
                "KW" : "科威特",
                "KY" : "开曼群岛",
                "KG" : "吉尔吉斯坦",
                "LA" : "老挝",
                "LV" : "拉脱维亚",
                "LB" : "黎巴嫩",
                "LS" : "莱索托",
                "LR" : "利比里亚",
                "LY" : "利比亚",
                "LI" : "列支敦士登",
                "LT" : "立陶宛",
                "LU" : "卢森堡",
                "MK" : "马其顿",
                "MO" : "澳门",
                "MG" : "马达加斯加",
                "MW" : "马拉维",
                "MY" : "马来西亚",
                "MV" : "马尔代夫",
                "ML" : "马里",
                "MR" : "毛里塔尼亚伊斯兰共和国",
                "MT" : "马耳他",
                "MU" : "毛里求斯",
                "MX" : "墨西哥",
                "MD" : "摩尔多瓦",
                "MC" : "摩纳哥",
                "ME" : "黑山共和国",
                "MN" : "蒙古",
                "MQ" : "马提尼克",
                "MS" : "蒙特塞拉特岛",
                "MA" : "摩洛哥",
                "MZ" : "莫桑比克",
                "NA" : "纳米比亚",
                "NC" : "新喀里多尼亚",
                "NR" : "瑙鲁",
                "NP" : "尼泊尔",
                "NL" : "荷兰",
                "NZ" : "新西兰",
                "NI" : "尼加拉瓜",
                "NE" : "尼日尔",
                "MF" : "法属圣马丁",
                "NG" : "尼日利亚",
                "KP" : "朝鲜",
                "NO" : "挪威",
                "OM" : "阿曼",
                "PK" : "巴基斯坦",
                "PA" : "巴拿马",
                "PG" : "巴布亚新几内亚",
                "PY" : "巴拉圭",
                "PE" : "秘鲁",
                "PH" : "菲律宾",
                "PL" : "波兰",
                "PM" : "圣皮埃尔和密克隆群岛",
                "PF" : "法属玻利尼西亚",
                "PS" : "巴勒斯坦",
                "PT" : "葡萄牙",
                "PR" : "波多黎各",
                "QA" : "卡塔尔",
                "RE" : "留尼汪",
                "RO" : "罗马尼亚",
                "RS" : "塞尔维亚",
                "RU" : "俄罗斯",
                "RW" : "卢旺达",
                "LC" : "圣卢西亚",
                "VC" : "圣文森特岛",
                "SM" : "圣马力诺",
                "ST" : "圣多美和普林西比",
                "SA" : "沙特阿拉伯",
                "SN" : "塞内加尔",
                "SC" : "塞舌尔",
                "SL" : "塞拉利昂",
                "SG" : "新加坡",
                "SK" : "斯洛伐克",
                "SI" : "斯洛文尼亚",
                "SB" : "所罗门群岛",
                "SO" : "索马里",
                "SX" : "荷兰属圣马丁",
                "ZA" : "南非",
                "ES" : "西班牙",
                "LK" : "斯里兰卡",
                "SD" : "苏丹",
                "SR" : "苏里南",
                "SZ" : "斯威士兰",
                "SE" : "瑞典",
                "SS" : "南苏丹共和国",
                "CH" : "瑞士",
                "SY" : "叙利亚",
                "TC" : "特克斯和凯科斯群岛",
                "TW" : "台湾省",
                "TL" : "东帝汶民主共和国",
                "TJ" : "塔吉克斯坦",
                "TZ" : "坦桑尼亚",
                "TH" : "泰国",
                "TG" : "多哥",
                "TO" : "汤加",
                "TT" : "特立尼达和多巴哥",
                "TN" : "突尼斯",
                "TR" : "土耳其",
                "TM" : "土库曼斯坦",
                "UG" : "乌干达",
                "UA" : "乌克兰",
                "AE" : "阿拉伯联合酋长国",
                "GB" : "英国",
                "US" : "美国",
                "UY" : "乌拉圭",
                "UZ" : "乌兹别克斯坦",
                "VA" : "梵蒂冈",
                "VE" : "委内瑞拉",
                "VG" : "英属维尔京群岛",
                "VN" : "越南",
                "YT" : "马约特",
                "YE" : "也门",
                "YU" : "南斯拉夫",
                "ZW" : "津巴布韦",
                "ZR" : "扎伊尔",
                "ZM" : "赞比亚",
                null : "钻石公主号或尚丹号"
            }
            if (isoCountries.hasOwnProperty(val)) {
                return isoCountries[val];
            } else {
                return val;
            }
        }
    },
    created: function() {
        this.loading = true
        axios
        .all([requestGLOBAL, requestCOUNTRY])
        .then(
            axios.spread((responsesGLOBAL, responsesCOUNTRY) => {
                this.loading = false
                this.item = responsesGLOBAL.data
                this.list = responsesCOUNTRY.data
            })
        )
        .catch(err => {
            this.loading = false
            this.error = err
        });
    }
});

// vue smooth scroll
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueSmoothScroll=t():e.VueSmoothScroll=t()}(this,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";function n(e){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}o.r(t);var r=Symbol("smoothScrollCtx"),i={install:function(e,t){e.directive("smooth-scroll",{inserted:function(e,o,i){if("object"===("undefined"==typeof window?"undefined":n(window))&&void 0!==window.pageYOffset){var u=i.data.attrs.href,f={duration:500,offset:0,container:window,updateHistory:!0};t&&Object.assign(f,t);var c=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){window.setTimeout(e,16)},l=o.value||{},a=l.duration,d=l.offset,s=l.container,p=l.updateHistory;a=a||f.duration,d=d||f.offset,p=void 0!==p?p:f.updateHistory,"string"==typeof(s=s||f.container)&&(s=document.querySelector(s));var y=function(e){e.preventDefault();var t=document.getElementById(u.substring(1));if(t){p&&window.history.pushState&&location.hash!==u&&window.history.pushState("","",u);var o,n,r=s.scrollTop||window.pageYOffset,i=(n=r,"HTML"===(o=t).nodeName?-n:o.getBoundingClientRect().top+n);i+=d;var f=Date.now();!function e(){var o,n=Date.now()-f,u=i;n<a?(u=r+(i-r)*((o=n/a)<.5?4*o*o*o:(o-1)*(2*o-2)*(2*o-2)+1),c(e)):p&&location.replace("#"+t.id),s===window?s.scrollTo(0,u):s.scrollTop=u}()}};e.addEventListener("click",y),e[r]={clickHandler:y}}},unbind:function(e){e.removeEventListener("click",e[r].clickHandler),e[r]=null}})}};t.default=i,"undefined"!=typeof window&&window.Vue&&window.Vue.use(i)}])}));
