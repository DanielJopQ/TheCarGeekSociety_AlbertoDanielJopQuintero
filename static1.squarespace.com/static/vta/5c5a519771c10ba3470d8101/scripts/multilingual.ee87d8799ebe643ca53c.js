/*! For license information please see multilingual.ee87d8799ebe643ca53c.js.LICENSE.txt */
"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [5652], {
        37856: function(t, e) {
            var n;
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.default = void 0,
                function(t) {
                    t.NONE = "none", t.GLOBE = "globe", t.FLAG = "flag"
                }(n || (n = {}));
            var r = n;
            e.default = r, t.exports = e.default
        },
        8481: function(t, e) {
            e.T3 = "UserAccountApi", e.f5 = "isUserAuthenticated", e.ir = "openAccountScreen"
        },
        63814: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return L
                }
            });
            n(94226);
            var r = n(67373),
                o = n(37856),
                a = n.n(o),
                i = n(8481),
                u = {
                    af: "za",
                    am: "et",
                    ar: "sa",
                    az: "az",
                    ba: "ru",
                    be: "by",
                    bg: "bg",
                    bn: "bd",
                    br: "br",
                    bs: "ba",
                    ca: "es-ca",
                    co: "fr-co",
                    cs: "cz",
                    cy: "gb-wls",
                    da: "dk",
                    de: "de",
                    el: "gr",
                    en: "gb",
                    eo: "eo",
                    es: "es",
                    et: "ee",
                    eu: "eus",
                    fa: "ir",
                    fi: "fi",
                    fj: "fj",
                    fl: "ph",
                    fr: "fr",
                    fy: "nl",
                    ga: "ie",
                    gd: "gb-sct",
                    gl: "es-ga",
                    gu: "in",
                    ha: "ne",
                    he: "il",
                    hi: "in",
                    hr: "hr",
                    ht: "ht",
                    hu: "hu",
                    hw: "hw",
                    hy: "am",
                    id: "id",
                    ig: "ne",
                    is: "is",
                    it: "it",
                    ja: "jp",
                    jv: "id",
                    ka: "ge",
                    kk: "kz",
                    km: "kh",
                    kn: "in",
                    ko: "kr",
                    ku: "iq",
                    ky: "kg",
                    la: "it",
                    lb: "lu",
                    lo: "la",
                    lt: "lt",
                    lv: "lv",
                    mg: "mg",
                    mi: "nz",
                    mk: "mk",
                    ml: "in",
                    mn: "mn",
                    mr: "in",
                    ms: "my",
                    mt: "mt",
                    my: "mm",
                    ne: "np",
                    nl: "nl",
                    no: "no",
                    ny: "mw",
                    pa: "in",
                    pl: "pl",
                    ps: "af",
                    pt: "pt",
                    ro: "ro",
                    ru: "ru",
                    sd: "pk",
                    si: "lk",
                    sk: "sk",
                    sl: "si",
                    sm: "ws",
                    sn: "zw",
                    so: "so",
                    sq: "al",
                    sr: "rs",
                    st: "ng",
                    su: "sd",
                    sv: "se",
                    sw: "ke",
                    ta: "in",
                    te: "in",
                    tg: "tj",
                    th: "th",
                    tl: "in",
                    to: "to",
                    tr: "tr",
                    tt: "tr",
                    tw: "tw",
                    ty: "pf",
                    uk: "ua",
                    ur: "pk",
                    uz: "uz",
                    vi: "vn",
                    xh: "za",
                    yi: "il",
                    yo: "ng",
                    zh: "cn",
                    zu: "za",
                    hm: "hmn",
                    cb: "ph",
                    or: "in",
                    tk: "tr",
                    ug: "uig",
                    fc: "ca",
                    as: "in",
                    sa: "rs"
                };

            function c(t) {
                return c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, c(t)
            }

            function l() {
                l = function() {
                    return e
                };
                var t, e = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, n) {
                        t[e] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    i = a.iterator || "@@iterator",
                    u = a.asyncIterator || "@@asyncIterator",
                    s = a.toStringTag || "@@toStringTag";

                function f(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    f({}, "")
                } catch (t) {
                    f = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function g(t, e, n, r) {
                    var a = e && e.prototype instanceof b ? e : b,
                        i = Object.create(a.prototype),
                        u = new P(r || []);
                    return o(i, "_invoke", {
                        value: _(t, n, u)
                    }), i
                }

                function h(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = g;
                var p = "suspendedStart",
                    d = "suspendedYield",
                    v = "executing",
                    y = "completed",
                    m = {};

                function b() {}

                function w() {}

                function L() {}
                var k = {};
                f(k, i, (function() {
                    return this
                }));
                var E = Object.getPrototypeOf,
                    S = E && E(E(C([])));
                S && S !== n && r.call(S, i) && (k = S);
                var x = L.prototype = b.prototype = Object.create(k);

                function j(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        f(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function O(t, e) {
                    function n(o, a, i, u) {
                        var l = h(t[o], t, a);
                        if ("throw" !== l.type) {
                            var s = l.arg,
                                f = s.value;
                            return f && "object" == c(f) && r.call(f, "__await") ? e.resolve(f.__await).then((function(t) {
                                n("next", t, i, u)
                            }), (function(t) {
                                n("throw", t, i, u)
                            })) : e.resolve(f).then((function(t) {
                                s.value = t, i(s)
                            }), (function(t) {
                                return n("throw", t, i, u)
                            }))
                        }
                        u(l.arg)
                    }
                    var a;
                    o(this, "_invoke", {
                        value: function(t, r) {
                            function o() {
                                return new e((function(e, o) {
                                    n(t, r, e, o)
                                }))
                            }
                            return a = a ? a.then(o, o) : o()
                        }
                    })
                }

                function _(e, n, r) {
                    var o = p;
                    return function(a, i) {
                        if (o === v) throw Error("Generator is already running");
                        if (o === y) {
                            if ("throw" === a) throw i;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (r.method = a, r.arg = i;;) {
                            var u = r.delegate;
                            if (u) {
                                var c = A(u, r);
                                if (c) {
                                    if (c === m) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (o === p) throw o = y, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            o = v;
                            var l = h(e, n, r);
                            if ("normal" === l.type) {
                                if (o = r.done ? y : d, l.arg === m) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (o = y, r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function A(e, n) {
                    var r = n.method,
                        o = e.iterator[r];
                    if (o === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, A(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), m;
                    var a = h(o, e.iterator, n.arg);
                    if ("throw" === a.type) return n.method = "throw", n.arg = a.arg, n.delegate = null, m;
                    var i = a.arg;
                    return i ? i.done ? (n[e.resultName] = i.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, m) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, m)
                }

                function T(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function N(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function P(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(T, this), this.reset(!0)
                }

                function C(e) {
                    if (e || "" === e) {
                        var n = e[i];
                        if (n) return n.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var o = -1,
                                a = function n() {
                                    for (; ++o < e.length;)
                                        if (r.call(e, o)) return n.value = e[o], n.done = !1, n;
                                    return n.value = t, n.done = !0, n
                                };
                            return a.next = a
                        }
                    }
                    throw new TypeError(c(e) + " is not iterable")
                }
                return w.prototype = L, o(x, "constructor", {
                    value: L,
                    configurable: !0
                }), o(L, "constructor", {
                    value: w,
                    configurable: !0
                }), w.displayName = f(L, s, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === w || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, L) : (t.__proto__ = L, f(t, s, "GeneratorFunction")), t.prototype = Object.create(x), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, j(O.prototype), f(O.prototype, u, (function() {
                    return this
                })), e.AsyncIterator = O, e.async = function(t, n, r, o, a) {
                    void 0 === a && (a = Promise);
                    var i = new O(g(t, n, r, o), a);
                    return e.isGeneratorFunction(n) ? i : i.next().then((function(t) {
                        return t.done ? t.value : i.next()
                    }))
                }, j(x), f(x, s, "Generator"), f(x, i, (function() {
                    return this
                })), f(x, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        n = [];
                    for (var r in e) n.push(r);
                    return n.reverse(),
                        function t() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in e) return t.value = r, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = C, P.prototype = {
                    constructor: P,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(N), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;

                        function o(r, o) {
                            return u.type = "throw", u.arg = e, n.next = r, o && (n.method = "next", n.arg = t), !!o
                        }
                        for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                            var i = this.tryEntries[a],
                                u = i.completion;
                            if ("root" === i.tryLoc) return o("end");
                            if (i.tryLoc <= this.prev) {
                                var c = r.call(i, "catchLoc"),
                                    l = r.call(i, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0);
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                } else if (c) {
                                    if (this.prev < i.catchLoc) return o(i.catchLoc, !0)
                                } else {
                                    if (!l) throw Error("try statement without catch or finally");
                                    if (this.prev < i.finallyLoc) return o(i.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var a = o;
                                break
                            }
                        }
                        a && ("break" === t || "continue" === t) && a.tryLoc <= e && e <= a.finallyLoc && (a = null);
                        var i = a ? a.completion : {};
                        return i.type = t, i.arg = e, a ? (this.method = "next", this.next = a.finallyLoc, m) : this.complete(i)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), m
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), N(n), m
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    N(n)
                                }
                                return o
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: C(e),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = t), m
                    }
                }, e
            }

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return f(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === n && t.constructor && (n = t.constructor.name);
                    if ("Map" === n || "Set" === n) return Array.from(t);
                    if ("Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return f(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function g(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, m(r.key), r)
                }
            }

            function h(t, e, n) {
                return e = d(e),
                    function(t, e) {
                        if (e && ("object" === c(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], d(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function d(t) {
                return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, d(t)
            }

            function v(t, e) {
                return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, v(t, e)
            }

            function y(t, e, n) {
                return (e = m(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function m(t) {
                var e = function(t, e) {
                    if ("object" != c(t) || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != c(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == c(e) ? e : e + ""
            }

            function b(t, e, n, r, o, a, i) {
                try {
                    var u = t[a](i),
                        c = u.value
                } catch (t) {
                    return void n(t)
                }
                u.done ? e(c) : Promise.resolve(c).then(r, o)
            }

            function w() {
                var t;
                return t = l().mark((function t() {
                    var e, r, o, a, i;
                    return l().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                return t.next = 2, n.e(9195).then(n.t.bind(n, 89437, 23));
                            case 2:
                                return e = t.sent.default, t.next = 5, Promise.all([n.e(3270), n.e(9807), n.e(5984), n.e(7650), n.e(5034)]).then(n.bind(n, 37650));
                            case 5:
                                r = t.sent, o = r.UserSessionApi, a = r.UserSessionApiAxios, (i = e.get("siteUserCrumb")) && (a.setXsrfToken(i), o.updateLocale());
                            case 10:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })), w = function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, o) {
                        var a = t.apply(e, n);

                        function i(t) {
                            b(a, r, o, i, u, "next", t)
                        }

                        function u(t) {
                            b(a, r, o, i, u, "throw", t)
                        }
                        i(void 0)
                    }))
                }, w.apply(this, arguments)
            }
            var L = function(t) {
                function e(t) {
                    var n, r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), y(r = h(this, e, [t]), "scriptLoadCallback", (function(t) {
                        var e;
                        "Weglot" === (null === (e = t.data) || void 0 === e ? void 0 : e.extensionName) && (r.events.removeListener(r.events.pageEventType.ScriptLoad, r.scriptLoadCallback), r.initializeLanguagePickers())
                    })), y(r, "handleLanguageClick", (function(t) {
                        return function(e) {
                            e.preventDefault(), e.target.blur(), r.newLanguageSelected = !0, window.Weglot.switchTo(t)
                        }
                    }));
                    var o = r.props.headerNode;
                    r.languagePickersToRender = [{
                        node: o.querySelector("#multilingual-language-picker-desktop"),
                        className: "language-item"
                    }, {
                        node: o.querySelector("#multilingual-language-picker-mobile"),
                        className: "header-menu-nav-item"
                    }], r.languageData = JSON.parse(o.getAttribute("data-language-picker"));
                    var i = r.languageData || {},
                        u = i.iconEnabled,
                        c = i.iconType,
                        l = i.languageFlags;
                    r.hasFlags = u && c === a().FLAG, r.hasFlags && (r.languageFlagLookup = l.reduce((function(t, e) {
                        return t[e.languageCode] = e.countryCode, t
                    }), {}), r.currentFlagNodes = o.querySelectorAll(".current-language img.flag"), r.flagAltTextTranslated = r.currentFlagNodes[0].getAttribute("data-alt-text")), r.currentLanguageNodes = o.querySelectorAll(".current-language-name");
                    var s = null === (n = window.ExtensionScriptsSDK) || void 0 === n ? void 0 : n["1.0"];
                    return r.events = null == s ? void 0 : s.page.events, r.initAttempts = 0, r.weglotLanguageData = {}, r.newLanguageSelected = !1, r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && v(t, e)
                }(e, t), n = e, r = [{
                    key: "checkWeglotAndInitialize",
                    value: function() {
                        var t;
                        window.Weglot ? this.initializeLanguagePickers() : null === (t = this.events) || void 0 === t || t.addListener(this.events.pageEventType.ScriptLoad, this.scriptLoadCallback)
                    }
                }, {
                    key: "initializeLanguagePickers",
                    value: function() {
                        var t, e, n = this,
                            r = window.Weglot;
                        if (r) {
                            var o = null === (t = r.options) || void 0 === t ? void 0 : t.language_from,
                                a = null === (e = r.options) || void 0 === e ? void 0 : e.languages;
                            if (a || r.initialized) {
                                var i = r.getCurrentLang();
                                this.replaceCurrentLanguage(i);
                                var u = a.filter((function(t) {
                                    return t.enabled
                                })).map((function(t) {
                                    var e = t.custom_code || t.language_to;
                                    return n.weglotLanguageData[e] = {
                                        isCustom: !!t.custom_code,
                                        customLocalName: t.custom_local_name,
                                        customFlagCountry: t.custom_flag
                                    }, e
                                })).concat(o);
                                this.languagePickersToRender.forEach((function(t) {
                                    var e, r = u.map((function(e) {
                                        return n.getLanguageSelectionHtml(e, t.className)
                                    }));
                                    (e = t.node.querySelector(".language-picker-content")).append.apply(e, s(r))
                                })), window.Weglot.on("languageChanged", (function(t) {
                                    n.newLanguageSelected && (n.updateSiteUserLocale(t), n.replaceCurrentLanguage(t), n.newLanguageSelected = !1)
                                }))
                            } else this.initAttempts < 2 && setTimeout((function() {
                                n.initAttempts += 1, n.initializeLanguagePickers()
                            }), 100)
                        }
                    }
                }, {
                    key: "getLanguageSelectionHtml",
                    value: function(t, e) {
                        var n = document.createElement("span");
                        n.textContent = this.getDisplayName(t);
                        var r = document.createElement("a");
                        if (r.href = "#", r.addEventListener("click", this.handleLanguageClick(t)), this.hasFlags) {
                            var o = document.createElement("img");
                            o.classList.add("flag", "icon--lg"), this.addFlagDataToImg(o, t), r.appendChild(o)
                        }
                        r.appendChild(n);
                        var a = document.createElement("div");
                        return a.classList.add(e), a.appendChild(r), a
                    }
                }, {
                    key: "replaceCurrentLanguage",
                    value: function(t) {
                        var e = this;
                        this.currentLanguageNodes.forEach((function(n) {
                            n.innerHTML = e.getDisplayName(t)
                        })), this.hasFlags && this.currentFlagNodes.forEach((function(n) {
                            e.addFlagDataToImg(n, t)
                        }))
                    }
                }, {
                    key: "updateSiteUserLocale",
                    value: function(t) {
                        var e, n;
                        (null === (e = this.weglotLanguageData[t]) || void 0 === e ? void 0 : e.isCustom) || (null !== (n = window[i.T3]) && void 0 !== n && n[i.f5] ? (0, window[i.T3][i.f5])() && function() {
                            w.apply(this, arguments)
                        }() : console.warn("UserAccounts API not available"))
                    }
                }, {
                    key: "addFlagDataToImg",
                    value: function(t, e) {
                        var n = this.languageData.flagShape,
                            r = this.getFlagCountry(e);
                        t.src = "https://cdn.weglot.com/flags/".concat(n, "/").concat(r, ".svg"), t.alt = "".concat(window.Weglot.getLanguageName(e), " ").concat(this.flagAltTextTranslated)
                    }
                }, {
                    key: "getDisplayName",
                    value: function(t) {
                        var e = this.weglotLanguageData[t];
                        return null != e && e.isCustom ? e.customLocalName : window.Weglot.getLanguageName(t)
                    }
                }, {
                    key: "getFlagCountry",
                    value: function(t) {
                        var e = this.weglotLanguageData[t];
                        return this.languageFlagLookup[t] || u[t] || (null == e ? void 0 : e.customFlagCountry)
                    }
                }], r && g(n.prototype, r), o && g(n, o), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, r, o
            }(r.A)
        }
    }
]);