(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [2775], {
        281165: function(u) {
            u.exports = {}
        },
        104427: function(u) {
            u.exports = {}
        },
        948390: function(u) {
            u.exports = {}
        },
        376370: function(u) {
            u.exports = {}
        },
        801579: function(u, e, t) {
            "use strict";
            var o = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(t(987195)),
                l = o(t(845076)),
                d = o(t(174161)),
                a = t(647871);
            t(281165);
            var c = function(O) {
                    var r = O.checked,
                        A = O.onChange,
                        N = O.inputProps,
                        s = function() {
                            A(!r)
                        };
                    return d.default.createElement("div", {
                        className: "toggle-wrapper"
                    }, d.default.createElement("p", null, r ? (0, a.t)("On", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is on"
                    }) : (0, a.t)("Off", null, {
                        project: "gdpr-cookie-banner",
                        notes: "A toggle is off"
                    })), d.default.createElement("label", {
                        className: (0, l.default)("sqs-toggle", {
                            checked: r,
                            "sqs-toggle--on": r,
                            "sqs-toggle--off": !r
                        })
                    }, d.default.createElement("input", (0, n.default)({
                        type: "checkbox",
                        checked: r,
                        onChange: s
                    }, N))))
                },
                y = e.default = c;
            u.exports = e.default
        },
        721963: function(u, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.MANAGE_COOKIES_OVERLAY_CLASS_NAME = e.MANAGE_COOKIES_BAR_CLASS_NAME = e.COOKIE_BANNER_ROOT_CLASS_NAME = void 0;
            var t = e.COOKIE_BANNER_ROOT_CLASS_NAME = "gdpr-cookie-banner",
                o = e.MANAGE_COOKIES_BAR_CLASS_NAME = "manage-cookies-bar",
                n = e.MANAGE_COOKIES_OVERLAY_CLASS_NAME = "manage-cookies-overlay"
        },
        162049: function(u, e, t) {
            "use strict";
            var o = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.useGetWindowWidth = a;
            var n = o(t(375798)),
                l = o(t(418008)),
                d = t(174161);

            function a() {
                var c = (0, d.useState)(window.innerWidth),
                    y = (0, n.default)(c, 2),
                    g = y[0],
                    O = y[1];

                function r() {
                    O(window.innerWidth)
                }
                var A = (0, d.useMemo)(function() {
                    return (0, l.default)(r, 250)
                }, [r]);
                return (0, d.useEffect)(function() {
                    return window.addEventListener("resize", r),
                        function() {
                            window.removeEventListener("resize", r)
                        }
                }, [A]), g
            }
        },
        647871: function(u, e, t) {
            "use strict";
            var o = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.t = e.pluralize = e.parseNumber = e.getCurrencySymbol = e.formatRelativeTime = e.formatQuantity = e.formatNumber = e.formatIcuMessage = e.formatDateTime = e.formatCurrencyToParts = e.formatCurrency = e.T = void 0;
            var n = o(t(687606)),
                l = o(t(153017)),
                d = o(t(134933)),
                a = t(218673),
                c = (0, a.getI18nInstance)(),
                y = new n.default(c),
                g = new l.default(c),
                O = new d.default(c),
                r = e.formatIcuMessage = y.formatIcuMessage,
                A = e.parseNumber = g.parseNumber,
                N = e.T = O.T,
                s = e.formatNumber = c.formatNumber,
                M = e.formatCurrency = c.formatCurrency,
                T = e.formatCurrencyToParts = c.formatCurrencyToParts,
                P = e.getCurrencySymbol = c.getCurrencySymbol,
                k = e.formatQuantity = c.formatQuantity,
                i = e.formatDateTime = c.formatDateTime,
                E = e.formatRelativeTime = c.formatRelativeTime,
                f = e.t = c.translate,
                h = e.pluralize = c.pluralize
        },
        79803: function(u, e, t) {
            "use strict";
            var o = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(t(174161)),
                l = function() {
                    return n.default.createElement("svg", {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }, n.default.createElement("path", {
                        d: "M7 5.58594L12.293 0.292969L13.7072 1.70718L8.41421 7.00015L13.7072 12.2931L12.293 13.7073L7 8.41436L1.70718 13.7072L0.292969 12.293L5.58579 7.00015L0.292969 1.70733L1.70718 0.293119L7 5.58594Z",
                        fill: "white"
                    }))
                },
                d = e.default = l;
            u.exports = e.default
        },
        602775: function(u, e, t) {
            "use strict";
            var o = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "BannerPosition", {
                enumerable: !0,
                get: function() {
                    return c.BannerPosition
                }
            }), Object.defineProperty(e, "COOKIE_BANNER_ROOT_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return a.COOKIE_BANNER_ROOT_CLASS_NAME
                }
            }), Object.defineProperty(e, "CookieBannerProps", {
                enumerable: !0,
                get: function() {
                    return c.CookieBannerProps
                }
            }), Object.defineProperty(e, "MANAGE_COOKIES_BAR_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return a.MANAGE_COOKIES_BAR_CLASS_NAME
                }
            }), Object.defineProperty(e, "MANAGE_COOKIES_OVERLAY_CLASS_NAME", {
                enumerable: !0,
                get: function() {
                    return a.MANAGE_COOKIES_OVERLAY_CLASS_NAME
                }
            }), Object.defineProperty(e, "SavedPreferencesLayout", {
                enumerable: !0,
                get: function() {
                    return c.SavedPreferencesLayout
                }
            }), e.default = void 0;
            var n = o(t(784712)),
                l = o(t(945261)),
                d = o(t(496174)),
                a = t(721963),
                c = t(345380),
                y = e.default = {
                    Banner: n.default,
                    ManageBar: l.default,
                    ManageOverlay: d.default
                }
        },
        784712: function(u, e, t) {
            "use strict";
            var o = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(t(845076)),
                l = o(t(174161)),
                d = t(721963),
                a = t(647871),
                c = t(162049),
                y = t(345380);
            t(104427);
            var g = 576,
                O = function() {},
                r = function(s) {
                    var M = s.acceptCookiesLabel,
                        T = s.bannerPosition,
                        P = s.bannerText,
                        k = s.declineCookiesLabel,
                        i = s.hasManageCookies,
                        E = s.hasDeclineCookies,
                        f = s.manageButtonRef,
                        h = s.manageCookiesLabel,
                        b = s.theme,
                        C = b === void 0 ? "" : b,
                        S = s.onAccept,
                        K = S === void 0 ? O : S,
                        R = s.onDecline,
                        z = R === void 0 ? O : R,
                        B = s.toggleManageOverlay,
                        W = B === void 0 ? O : B,
                        H = s.isPreview,
                        I = T !== y.BannerPosition.TOP && T !== y.BannerPosition.BOTTOM,
                        F = (0, c.useGetWindowWidth)(),
                        j = "wide";
                    (I || F < g) && (j = "narrow");
                    var Y = (0, n.default)("accept", "sqs-button-element--primary", "sqs-cookie-banner-v2-accept", "sqs-cookie-banner-v2-cta"),
                        Q = (0, n.default)("decline", "sqs-button-element--secondary", "sqs-cookie-banner-v2-deny", "sqs-cookie-banner-v2-cta"),
                        p = (0, n.default)("button-group", "sqs-cookie-banner-v2-cta-container"),
                        V = (0, n.default)("disclaimer-text", "sqs-cookie-banner-v2-text"),
                        D = l.default.createElement("button", {
                            className: Y,
                            onClick: K
                        }, l.default.createElement("span", null, M)),
                        L = l.default.createElement("button", {
                            className: Q,
                            onClick: z
                        }, l.default.createElement("span", null, k)),
                        $ = l.default.createElement("button", {
                            className: "manage sqs-button-element--tertiary",
                            onClick: function() {
                                W(!0)
                            },
                            ref: f
                        }, l.default.createElement("span", null, h)),
                        U = l.default.createElement("div", {
                            className: p
                        }, i && $, E && L, D),
                        Z = l.default.createElement("div", {
                            className: p
                        }, D, E && L, i && $);
                    return l.default.createElement("section", {
                        "data-section-theme": C,
                        "aria-label": (0, a.t)("Cookie banner", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        className: (0, n.default)(d.COOKIE_BANNER_ROOT_CLASS_NAME, T, C, {
                            bar: !I,
                            popup: I,
                            "full-styling": !H
                        })
                    }, l.default.createElement("p", {
                        className: V,
                        dangerouslySetInnerHTML: {
                            __html: P
                        }
                    }), j === "wide" ? U : Z)
                },
                A = e.default = r;
            u.exports = e.default
        },
        945261: function(u, e, t) {
            "use strict";
            var o = t(875832);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = o(t(845076)),
                l = o(t(174161)),
                d = t(721963),
                a = t(647871),
                c = t(345380);
            t(948390);
            var y = function(r) {
                    var A = r.savedPreferencesLayout,
                        N = A === void 0 ? c.SavedPreferencesLayout.PILL : A,
                        s = r.savedPreferencesText,
                        M = s === void 0 ? (0, a.t)("Cookie Preferences", null, {
                            project: "gdpr-cookie-banner"
                        }) : s,
                        T = r.theme,
                        P = T === void 0 ? "" : T,
                        k = r.openOverlay,
                        i = r.manageButtonRef;
                    return l.default.createElement("section", {
                        "data-dynamic-strings": "",
                        "data-section-theme": P,
                        "aria-label": (0, a.t)("Manage previously selected cookie options", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        className: (0, n.default)(d.MANAGE_COOKIES_BAR_CLASS_NAME, P, N)
                    }, l.default.createElement("button", {
                        className: "manage-bar-action",
                        onClick: k,
                        ref: i
                    }, M))
                },
                g = e.default = y;
            u.exports = e.default
        },
        496174: function(u, e, t) {
            "use strict";
            t(392338), t(392338), t(392338), t(392338), t(392338), t(392338);
            var o = t(875832),
                n = t(569644);
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, t(392338), t(392338), t(392338), t(392338);
            var l = o(t(375798)),
                d = o(t(845076)),
                a = s(t(174161)),
                c = o(t(994336)),
                y = t(295378),
                g = o(t(801579)),
                O = t(721963),
                r = t(647871),
                A = o(t(79803));
            t(376370);

            function N(i) {
                if (typeof WeakMap != "function") return null;
                var E = new WeakMap,
                    f = new WeakMap;
                return (N = function(b) {
                    return b ? f : E
                })(i)
            }

            function s(i, E) {
                if (!E && i && i.__esModule) return i;
                if (i === null || n(i) != "object" && typeof i != "function") return {
                    default: i
                };
                var f = N(E);
                if (f && f.has(i)) return f.get(i);
                var h = {
                        __proto__: null
                    },
                    b = Object.defineProperty && Object.getOwnPropertyDescriptor;
                for (var C in i)
                    if (C !== "default" && Object.prototype.hasOwnProperty.call(i, C)) {
                        var S = b ? Object.getOwnPropertyDescriptor(i, C) : null;
                        S && (S.get || S.set) ? Object.defineProperty(h, C, S) : h[C] = i[C]
                    }
                return h.default = i, f && f.set(i, h), h
            }
            var M = {
                    necessary: {
                        title: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner",
                            notes: "This is a type of cookie. Necessary cookies are essential for websites and cannot be disabled."
                        }, "Necessary"),
                        description: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner"
                        }, "Required to enable core site functionality and to remember user preferences and choices, such as language preferences or customized settings.")
                    },
                    performance: {
                        title: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner",
                            notes: "This is a type of cookie. Performance cookies collect website data and analytics."
                        }, "Performance and Analytics"),
                        description: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner"
                        }, "These cookies provide quantitative measures of website visitors. With the usage of these cookies we are able to count visits and traffic sources to improve the performance of our site.")
                    },
                    marketing: {
                        title: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner",
                            notes: "This is a type of cookie. Marketing cookies are used to deliver targeted advertisements."
                        }, "Advertising"),
                        description: a.default.createElement(r.T, {
                            project: "gdpr-cookie-banner"
                        }, "These cookies are used by advertising companies to serve ads that are relevant to your interests.")
                    }
                },
                T = function(E) {
                    var f = c.default.get(E);
                    return f ? f === "true" : !0
                },
                P = function(E) {
                    var f = E.theme,
                        h = f === void 0 ? "" : f,
                        b = E.cookieNames,
                        C = E.onClose,
                        S = E.onSave,
                        K = b.performance,
                        R = b.marketing,
                        z = (0, a.useState)(T(K)),
                        B = (0, l.default)(z, 2),
                        W = B[0],
                        H = B[1],
                        I = (0, a.useState)(T(R)),
                        F = (0, l.default)(I, 2),
                        j = F[0],
                        Y = F[1],
                        Q = function(v) {
                            return v.stopPropagation()
                        },
                        p = (0, a.useRef)(null),
                        V = (0, a.useId)(),
                        D = function() {
                            var v;
                            return (((v = p.current) === null || v === void 0 ? void 0 : v.ownerDocument) || document).documentElement
                        },
                        L = (0, a.useCallback)(function(m) {
                            m.code === "Escape" && (m.stopPropagation(), C())
                        }, [C]);
                    (0, a.useEffect)(function() {
                        var m = D();
                        return m.addEventListener("keyup", L),
                            function() {
                                m.removeEventListener("keyup", L)
                            }
                    }, [L]), (0, a.useEffect)(function() {
                        var m = (0, y.containFocus)({
                            container: p.current,
                            root: D()
                        });
                        return m
                    }, [p]);
                    var $ = function() {
                            var v = [];
                            W && v.push(K), j && v.push(R), S(v)
                        },
                        U = [{
                            name: "necessary"
                        }, {
                            name: "performance",
                            checked: W,
                            onChange: H
                        }, {
                            name: "marketing",
                            checked: j,
                            onChange: Y
                        }],
                        Z = function(v) {
                            var G = v.name,
                                J = v.checked,
                                w = v.onChange,
                                X = (0, a.useId)();
                            return a.default.createElement(a.default.Fragment, null, w ? a.default.createElement("label", {
                                className: "category-selection"
                            }, a.default.createElement("h4", null, M[G].title), a.default.createElement(g.default, {
                                checked: !!J,
                                onChange: w,
                                inputProps: {
                                    "aria-describedby": X
                                }
                            })) : a.default.createElement("div", {
                                className: "category-selection"
                            }, a.default.createElement("h4", null, M[G].title), a.default.createElement("p", null, (0, r.t)("Always on", null, {
                                project: "gdpr-cookie-banner",
                                notes: "This refers to the state of necessary website cookies, they are always on, or in other words they are always enabled"
                            }))), a.default.createElement("p", {
                                className: "category-description",
                                id: X
                            }, M[G].description))
                        };
                    return a.default.createElement("div", {
                        className: "manage-overlay-wrapper",
                        "data-dynamic-strings": ""
                    }, a.default.createElement("div", {
                        className: "manage-cookies-overlay-backdrop",
                        onClick: C
                    }), a.default.createElement("div", {
                        "data-section-theme": h,
                        "aria-labelledby": V + "-heading",
                        className: (0, d.default)(O.MANAGE_COOKIES_OVERLAY_CLASS_NAME, h),
                        onClick: Q,
                        role: "dialog",
                        ref: p
                    }, a.default.createElement("h3", {
                        id: V + "-heading"
                    }, a.default.createElement(r.T, {
                        project: "gdpr-cookie-banner",
                        notes: "This is the title for a feature that allows site visitors to manage their cookie settings."
                    }, "Manage Cookies")), U.map(function(m, v) {
                        var G = m.name,
                            J = m.checked,
                            w = m.onChange;
                        return a.default.createElement(a.default.Fragment, null, v > 0 && a.default.createElement("hr", null), a.default.createElement(Z, {
                            name: G,
                            checked: J,
                            onChange: w
                        }))
                    }), a.default.createElement("div", {
                        className: "button-group"
                    }, a.default.createElement("button", {
                        className: "save sqs-button-element--primary",
                        onClick: $
                    }, a.default.createElement(r.T, {
                        project: "gdpr-cookie-banner",
                        notes: "This is a button that saves a site visitor's cookie preferences."
                    }, "Save Preferences"))), a.default.createElement("button", {
                        type: "button",
                        className: "close-icon",
                        "aria-label": (0, r.t)("Close", null, {
                            project: "gdpr-cookie-banner"
                        }),
                        onClick: C
                    }, a.default.createElement(A.default, null))))
                },
                k = e.default = P;
            u.exports = e.default
        },
        345380: function(u, e) {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.SavedPreferencesLayout = e.BannerPosition = void 0;
            var t = e.BannerPosition = function(n) {
                    return n.TOP = "TOP", n.BOTTOM_LEFT = "BOTTOM_LEFT", n.BOTTOM_RIGHT = "BOTTOM_RIGHT", n.TOP_LEFT = "TOP_LEFT", n.TOP_RIGHT = "TOP_RIGHT", n.BOTTOM = "BOTTOM", n
                }({}),
                o = e.SavedPreferencesLayout = function(n) {
                    return n.HIDDEN = "HIDDEN", n.PILL = "PILL", n.SUB_FOOTER = "SUB_FOOTER", n
                }({})
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/590b805317b053f28f2deb2bd0fb28f4/2775-8221a1e3c05269af0006-min.en-US.js.map