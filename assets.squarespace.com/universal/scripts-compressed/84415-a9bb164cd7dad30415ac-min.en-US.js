"use strict";
(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [84415], {
        805339: function($, N) {
            Object.defineProperty(N, "__esModule", {
                value: !0
            }), N.default = void 0;
            var F;
            (function(C) {
                C.NONE = "none", C.SINGLE_TRACE = "single-trace", C.DOUBLE_TRACE = "double-trace", C.GLOW = "glow"
            })(F || (F = {}));
            var p = F;
            N.default = p, $.exports = N.default
        },
        303349: function($, N) {
            Object.defineProperty(N, "__esModule", {
                value: !0
            }), N.default = void 0;
            var F;
            (function(C) {
                C.TOP = "top", C.CENTER = "center", C.BOTTOM = "bottom"
            })(F || (F = {}));
            var p = F;
            N.default = p, $.exports = N.default
        },
        30001: function($, N) {
            Object.defineProperty(N, "__esModule", {
                value: !0
            }), N.default = void 0;
            var F;
            (function(C) {
                C.LEFT = "left", C.CENTER = "center", C.RIGHT = "right"
            })(F || (F = {}));
            var p = F;
            N.default = p, $.exports = N.default
        },
        513306: function($, N, F) {
            F.r(N), F.d(N, {
                NumberFormatBase: function() {
                    return oe
                },
                NumericFormat: function() {
                    return Ge
                },
                PatternFormat: function() {
                    return We
                },
                getNumericCaretBoundary: function() {
                    return xe
                },
                getPatternCaretBoundary: function() {
                    return Ee
                },
                numericFormatter: function() {
                    return ue
                },
                patternFormatter: function() {
                    return De
                },
                removeNumericFormat: function() {
                    return be
                },
                removePatternFormat: function() {
                    return Ne
                },
                useNumericFormat: function() {
                    return Ce
                },
                usePatternFormat: function() {
                    return Ie
                }
            });
            var p = F(174161);

            function C(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (e != null && typeof Object.getOwnPropertySymbols == "function")
                    for (var a = 0, n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]]);
                return r
            }
            var L;
            (function(e) {
                e.event = "event", e.props = "prop"
            })(L || (L = {}));

            function j() {}

            function J(e) {
                return !!(e || "").match(/\d/)
            }

            function Y(e) {
                return e == null
            }

            function ce(e) {
                return typeof e == "number" && isNaN(e)
            }

            function de(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }

            function Be(e) {
                switch (e) {
                    case "lakh":
                        return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                    case "wan":
                        return /(\d)(?=(\d{4})+(?!\d))/g;
                    case "thousand":
                    default:
                        return /(\d)(?=(\d{3})+(?!\d))/g
                }
            }

            function Fe(e, t, r) {
                var n = Be(r),
                    a = e.search(/[1-9]/);
                return a = a === -1 ? e.length : a, e.substring(0, a) + e.substring(a, e.length).replace(n, "$1" + t)
            }

            function Ve(e) {
                var t = (0, p.useRef)(e);
                t.current = e;
                var r = (0, p.useRef)(function() {
                    for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
                    return t.current.apply(t, n)
                });
                return r.current
            }

            function ie(e, t) {
                t === void 0 && (t = !0);
                var r = e[0] === "-",
                    n = r && t;
                e = e.replace("-", "");
                var a = e.split("."),
                    i = a[0],
                    u = a[1] || "";
                return {
                    beforeDecimal: i,
                    afterDecimal: u,
                    hasNegation: r,
                    addNegation: n
                }
            }

            function Ae(e) {
                if (!e) return e;
                var t = e[0] === "-";
                t && (e = e.substring(1, e.length));
                var r = e.split("."),
                    n = r[0].replace(/^0+/, "") || "0",
                    a = r[1] || "";
                return (t ? "-" : "") + n + (a ? "." + a : "")
            }

            function se(e, t, r) {
                for (var n = "", a = r ? "0" : "", i = 0; i <= t - 1; i++) n += e[i] || a;
                return n
            }

            function me(e, t) {
                return Array(t + 1).join(e)
            }

            function ge(e) {
                var t = e + "",
                    r = t[0] === "-" ? "-" : "";
                r && (t = t.substring(1));
                var n = t.split(/[eE]/g),
                    a = n[0],
                    i = n[1];
                if (i = Number(i), !i) return r + a;
                a = a.replace(".", "");
                var u = 1 + i,
                    d = a.length;
                return u < 0 ? a = "0." + me("0", Math.abs(u)) + a : u >= d ? a = a + me("0", u - d) : a = (a.substring(0, u) || "0") + "." + a.substring(u), r + a
            }

            function he(e, t, r) {
                if (["", "-"].indexOf(e) !== -1) return e;
                var n = (e.indexOf(".") !== -1 || r) && t,
                    a = ie(e),
                    i = a.beforeDecimal,
                    u = a.afterDecimal,
                    d = a.hasNegation,
                    h = parseFloat("0." + (u || "0")),
                    w = u.length <= t ? "0." + u : h.toFixed(t),
                    v = w.split("."),
                    y = i.split("").reverse().reduce(function(s, m, E) {
                        return s.length > E ? (Number(s[0]) + Number(m)).toString() + s.substring(1, s.length) : m + s
                    }, v[0]),
                    o = se(v[1] || "", t, r),
                    l = d ? "-" : "",
                    S = n ? "." : "";
                return "" + l + y + S + o
            }

            function G(e, t) {
                if (e.value = e.value, e !== null) {
                    if (e.createTextRange) {
                        var r = e.createTextRange();
                        return r.move("character", t), r.select(), !0
                    }
                    return e.selectionStart || e.selectionStart === 0 ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
                }
            }

            function Te(e, t) {
                for (var r = 0, n = 0, a = e.length, i = t.length; e[r] === t[r] && r < a;) r++;
                for (; e[a - 1 - n] === t[i - 1 - n] && i - n > r && a - n > r;) n++;
                return {
                    from: {
                        start: r,
                        end: a - n
                    },
                    to: {
                        start: r,
                        end: i - n
                    }
                }
            }

            function Re(e, t, r) {
                return Math.min(Math.max(e, t), r)
            }

            function ye(e) {
                return Math.max(e.selectionStart, e.selectionEnd)
            }

            function _e() {
                return typeof navigator != "undefined" && !(navigator.platform && /iPhone|iPod/.test(navigator.platform))
            }

            function Se(e) {
                return {
                    from: {
                        start: 0,
                        end: 0
                    },
                    to: {
                        start: 0,
                        end: e.length
                    },
                    lastValue: ""
                }
            }

            function pe(e, t) {
                return e === void 0 && (e = " "), typeof e == "string" ? e : e[t] || " "
            }

            function Pe(e, t, r, n, a, i) {
                var u = a.findIndex(function(B) {
                        return B
                    }),
                    d = e.slice(0, u);
                !t && !r.startsWith(d) && (r = d + r, n = n + d.length);
                for (var h = r.length, w = e.length, v = {}, y = new Array(h), o = 0; o < h; o++) {
                    y[o] = -1;
                    for (var l = 0, S = w; l < S; l++)
                        if (r[o] === e[l] && v[l] !== !0) {
                            y[o] = l, v[l] = !0;
                            break
                        }
                }
                for (var s = n; s < h && (y[s] === -1 || !i(r[s]));) s++;
                var m = s === h || y[s] === -1 ? w : y[s];
                for (s = n - 1; s > 0 && y[s] === -1;) s--;
                var E = s === -1 || y[s] === -1 ? 0 : y[s] + 1;
                return E > m ? m : n - E < m - n ? E : m
            }

            function H(e, t, r, n) {
                var a = e.length;
                if (t = Re(t, 0, a), n === "left") {
                    for (; t >= 0 && !r[t];) t--;
                    t === -1 && (t = r.indexOf(!0))
                } else {
                    for (; t <= a && !r[t];) t++;
                    t > a && (t = r.lastIndexOf(!0))
                }
                return t === -1 && (t = a), t
            }

            function ke(e) {
                for (var t = Array.from({
                        length: e.length + 1
                    }).map(function() {
                        return !0
                    }), r = 0, n = t.length; r < n; r++) t[r] = !!(J(e[r]) || J(e[r - 1]));
                return t
            }

            function we(e, t, r, n, a, i) {
                i === void 0 && (i = j);
                var u = (0, p.useRef)(),
                    d = Ve(function(o) {
                        var l, S;
                        return Y(o) || ce(o) ? (S = "", l = "") : typeof o == "number" || r ? (S = typeof o == "number" ? ge(o) : o, l = n(S)) : (S = a(o, void 0), l = o), {
                            formattedValue: l,
                            numAsString: S
                        }
                    }),
                    h = (0, p.useState)(function() {
                        return d(t)
                    }),
                    w = h[0],
                    v = h[1],
                    y = function(o, l) {
                        v({
                            formattedValue: o.formattedValue,
                            numAsString: o.value
                        }), i(o, l)
                    };
                return (0, p.useMemo)(function() {
                    Y(e) ? u.current = void 0 : (u.current = d(e), v(u.current))
                }, [e, d]), [w, y]
            }

            function Me(e) {
                return e.replace(/[^0-9]/g, "")
            }

            function Le(e) {
                return e
            }

            function oe(e) {
                var t = e.type;
                t === void 0 && (t = "text");
                var r = e.displayType;
                r === void 0 && (r = "input");
                var n = e.customInput,
                    a = e.renderText,
                    i = e.getInputRef,
                    u = e.format;
                u === void 0 && (u = Le);
                var d = e.removeFormatting;
                d === void 0 && (d = Me);
                var h = e.defaultValue,
                    w = e.valueIsNumericString,
                    v = e.onValueChange,
                    y = e.isAllowed,
                    o = e.onChange;
                o === void 0 && (o = j);
                var l = e.onKeyDown;
                l === void 0 && (l = j);
                var S = e.onMouseUp;
                S === void 0 && (S = j);
                var s = e.onFocus;
                s === void 0 && (s = j);
                var m = e.onBlur;
                m === void 0 && (m = j);
                var E = e.value,
                    B = e.getCaretBoundary;
                B === void 0 && (B = ke);
                var A = e.isValidInputCharacter;
                A === void 0 && (A = J);
                var M = C(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter"]),
                    K = we(E, h, !!w, u, d, v),
                    Z = K[0],
                    T = Z.formattedValue,
                    Q = Z.numAsString,
                    te = K[1],
                    U = (0, p.useRef)(),
                    fe = function(f, c) {
                        U.current = f.formattedValue, te(f, c)
                    };
                (0, p.useEffect)(function() {
                    var f = u(Q);
                    if (U.current === void 0 || f !== U.current) {
                        var c = x.current,
                            g = d(f, void 0);
                        X({
                            formattedValue: f,
                            numAsString: g,
                            input: c,
                            setCaretPosition: !0,
                            source: L.props,
                            event: void 0
                        })
                    }
                });
                var re = (0, p.useState)(!1),
                    le = re[0],
                    b = re[1],
                    x = (0, p.useRef)(null),
                    R = (0, p.useRef)({
                        setCaretTimeout: null,
                        focusTimeout: null
                    });
                (0, p.useEffect)(function() {
                    return b(!0),
                        function() {
                            clearTimeout(R.current.setCaretTimeout), clearTimeout(R.current.focusTimeout)
                        }
                }, []);
                var k = u,
                    ae = function(f, c) {
                        var g = parseFloat(c);
                        return {
                            formattedValue: f,
                            value: c,
                            floatValue: isNaN(g) ? void 0 : g
                        }
                    },
                    _ = function(f, c, g) {
                        G(f, c), R.current.setCaretTimeout = setTimeout(function() {
                            f.value === g && G(f, c)
                        }, 0)
                    },
                    W = function(f, c, g) {
                        return H(f, c, B(f), g)
                    },
                    q = function(f, c, g) {
                        var I = B(c),
                            O = Pe(c, T, f, g, I, A);
                        return O = H(c, O, I), O
                    },
                    X = function(f) {
                        var c = f.formattedValue;
                        c === void 0 && (c = "");
                        var g = f.input,
                            I = f.setCaretPosition;
                        I === void 0 && (I = !0);
                        var O = f.source,
                            D = f.event,
                            V = f.numAsString,
                            P = f.caretPos;
                        if (g) {
                            if (P === void 0 && I) {
                                var z = f.inputValue || g.value,
                                    ve = ye(g);
                                g.value = c, P = q(z, c, ve)
                            }
                            g.value = c, I && P !== void 0 && _(g, P, c)
                        }
                        c !== T && fe(ae(c, V), {
                            event: D,
                            source: O
                        })
                    },
                    ne = function(f, c, g) {
                        var I = Te(T, f),
                            O = Object.assign(Object.assign({}, I), {
                                lastValue: T
                            }),
                            D = d(f, O),
                            V = k(D);
                        if (D = d(V, void 0), y && !y(ae(V, D))) {
                            var P = c.target,
                                z = ye(P),
                                ve = q(f, T, z);
                            return _(P, ve, T), !1
                        }
                        return X({
                            formattedValue: V,
                            numAsString: D,
                            inputValue: f,
                            event: c,
                            source: g,
                            setCaretPosition: !0,
                            input: c.target
                        }), !0
                    },
                    Ze = function(f) {
                        var c = f.target,
                            g = c.value,
                            I = ne(g, f, L.event);
                        I && o(f)
                    },
                    Je = function(f) {
                        var c = f.target,
                            g = f.key,
                            I = c.selectionStart,
                            O = c.selectionEnd,
                            D = c.value;
                        D === void 0 && (D = "");
                        var V;
                        if (g === "ArrowLeft" || g === "Backspace" ? V = Math.max(I - 1, 0) : g === "ArrowRight" ? V = Math.min(I + 1, D.length) : g === "Delete" && (V = I), V === void 0 || I !== O) {
                            l(f);
                            return
                        }
                        var P = V;
                        if (g === "ArrowLeft" || g === "ArrowRight") {
                            var z = g === "ArrowLeft" ? "left" : "right";
                            P = W(D, V, z)
                        } else g === "Delete" && !A(D[V]) ? P = W(D, V, "right") : g === "Backspace" && !A(D[V]) && (P = W(D, V, "left"));
                        P !== V && _(c, P, D), f.isUnitTestRun && _(c, P, D), l(f)
                    },
                    Qe = function(f) {
                        var c = f.target,
                            g = c.selectionStart,
                            I = c.selectionEnd,
                            O = c.value;
                        if (O === void 0 && (O = ""), g === I) {
                            var D = W(O, g);
                            D !== g && _(c, D, O)
                        }
                        S(f)
                    },
                    Xe = function(f) {
                        f.persist && f.persist();
                        var c = f.target;
                        x.current = c, R.current.focusTimeout = setTimeout(function() {
                            var g = c.selectionStart,
                                I = c.selectionEnd,
                                O = c.value;
                            O === void 0 && (O = "");
                            var D = W(O, g);
                            D !== g && !(g === 0 && I === O.length) && _(c, D, O), s(f)
                        }, 0)
                    },
                    Ye = function(f) {
                        x.current = null, clearTimeout(R.current.focusTimeout), clearTimeout(R.current.setCaretTimeout), m(f)
                    },
                    qe = le && _e() ? "numeric" : void 0,
                    Oe = Object.assign({
                        inputMode: qe
                    }, M, {
                        type: t,
                        value: T,
                        onChange: Ze,
                        onKeyDown: Je,
                        onMouseUp: Qe,
                        onFocus: Xe,
                        onBlur: Ye
                    });
                if (r === "text") return a ? p.createElement(p.Fragment, null, a(T, M) || null) : p.createElement("span", Object.assign({}, M, {
                    ref: i
                }), T);
                if (n) {
                    var ze = n;
                    return p.createElement(ze, Object.assign({}, Oe, {
                        ref: i
                    }))
                }
                return p.createElement("input", Object.assign({}, Oe, {
                    ref: i
                }))
            }

            function ue(e, t) {
                var r = t.decimalScale,
                    n = t.fixedDecimalScale,
                    a = t.prefix;
                a === void 0 && (a = "");
                var i = t.suffix;
                i === void 0 && (i = "");
                var u = t.allowNegative;
                u === void 0 && (u = !0);
                var d = t.thousandsGroupStyle;
                if (d === void 0 && (d = "thousand"), e === "" || e === "-") return e;
                var h = ee(t),
                    w = h.thousandSeparator,
                    v = h.decimalSeparator,
                    y = r !== 0 && e.indexOf(".") !== -1 || r && n,
                    o = ie(e, u),
                    l = o.beforeDecimal,
                    S = o.afterDecimal,
                    s = o.addNegation;
                return r !== void 0 && (S = se(S, r, !!n)), w && (l = Fe(l, w, d)), a && (l = a + l), i && (S = S + i), s && (l = "-" + l), e = l + (y && v || "") + S, e
            }

            function ee(e) {
                var t = e.decimalSeparator;
                t === void 0 && (t = ".");
                var r = e.thousandSeparator,
                    n = e.allowedDecimalSeparators;
                return r === !0 && (r = ","), n || (n = [t, "."]), {
                    decimalSeparator: t,
                    thousandSeparator: r,
                    allowedDecimalSeparators: n
                }
            }

            function je(e, t) {
                e === void 0 && (e = "");
                var r = new RegExp("(-)"),
                    n = new RegExp("(-)(.)*(-)"),
                    a = r.test(e),
                    i = n.test(e);
                return e = e.replace(/-/g, ""), a && !i && t && (e = "-" + e), e
            }

            function Ke(e, t) {
                return new RegExp("(^-)|[0-9]|" + de(e), t ? "g" : void 0)
            }

            function be(e, t, r) {
                t === void 0 && (t = Se(e));
                var n = r.allowNegative;
                n === void 0 && (n = !0);
                var a = r.prefix;
                a === void 0 && (a = "");
                var i = r.suffix;
                i === void 0 && (i = "");
                var u = r.decimalScale,
                    d = t.from,
                    h = t.to,
                    w = h.start,
                    v = h.end,
                    y = ee(r),
                    o = y.allowedDecimalSeparators,
                    l = y.decimalSeparator,
                    S = e[v] === l;
                if (v - w === 1 && o.indexOf(e[w]) !== -1) {
                    var s = u === 0 ? "" : l;
                    e = e.substring(0, w) + s + e.substring(w + 1, e.length)
                }
                var m = !1;
                a.startsWith("-") ? m = e.startsWith("--") : i.startsWith("-") && e.length === i.length ? m = !1 : e[0] === "-" && (m = !0), m && (e = e.substring(1), w -= 1, v -= 1);
                var E = 0;
                e.startsWith(a) ? E += a.length : w < a.length && (E = w), e = e.substring(E), v -= E;
                var B = e.length,
                    A = e.length - i.length;
                e.endsWith(i) ? B = A : v > e.length - i.length && (B = v), e = e.substring(0, B), e = je(m ? "-" + e : e, n), e = (e.match(Ke(l, !0)) || []).join("");
                var M = e.indexOf(l);
                e = e.replace(new RegExp(de(l), "g"), function(te, U) {
                    return U === M ? "." : ""
                });
                var K = ie(e, n),
                    Z = K.beforeDecimal,
                    T = K.afterDecimal,
                    Q = K.addNegation;
                return h.end - h.start < d.end - d.start && Z === "" && S && !parseFloat(T) && (e = Q ? "-" : ""), e
            }

            function xe(e, t) {
                var r = t.prefix;
                r === void 0 && (r = "");
                var n = t.suffix;
                n === void 0 && (n = "");
                var a = Array.from({
                        length: e.length + 1
                    }).map(function() {
                        return !0
                    }),
                    i = e[0] === "-";
                a.fill(!1, 0, r.length + (i ? 1 : 0));
                var u = e.length;
                return a.fill(!1, u - n.length + 1, u + 1), a
            }

            function $e(e) {
                var t = ee(e),
                    r = t.thousandSeparator,
                    n = t.decimalSeparator;
                if (r === n) throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + r + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + n + " (default value for decimalSeparator is .)\n     ")
            }

            function Ce(e) {
                var t = e.decimalSeparator;
                t === void 0 && (t = ".");
                var r = e.allowedDecimalSeparators,
                    n = e.thousandsGroupStyle,
                    a = e.suffix,
                    i = e.allowNegative,
                    u = e.allowLeadingZeros,
                    d = e.onKeyDown;
                d === void 0 && (d = j);
                var h = e.onBlur;
                h === void 0 && (h = j);
                var w = e.thousandSeparator,
                    v = e.decimalScale,
                    y = e.fixedDecimalScale,
                    o = e.prefix;
                o === void 0 && (o = "");
                var l = e.defaultValue,
                    S = e.value,
                    s = e.valueIsNumericString,
                    m = e.onValueChange,
                    E = C(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]);
                $e(e);
                var B = function(b) {
                        return ue(b, e)
                    },
                    A = function(b, x) {
                        return be(b, x, e)
                    },
                    M = s;
                Y(S) ? Y(l) || (M = s != null ? s : typeof l == "number") : M = s != null ? s : typeof S == "number";
                var K = function(b) {
                        return Y(b) || ce(b) ? b : (typeof b == "number" && (b = ge(b)), M && typeof v == "number" ? he(b, v, !!y) : b)
                    },
                    Z = we(K(S), K(l), !!M, B, A, m),
                    T = Z[0],
                    Q = T.numAsString,
                    te = T.formattedValue,
                    U = Z[1],
                    fe = function(b) {
                        var x = b.target,
                            R = b.key,
                            k = x.selectionStart,
                            ae = x.selectionEnd,
                            _ = x.value;
                        if (_ === void 0 && (_ = ""), k !== ae) {
                            d(b);
                            return
                        }
                        R === "Backspace" && _[0] === "-" && k === o.length + 1 && G(x, 1);
                        var W = ee(e),
                            q = W.decimalSeparator,
                            X = W.allowedDecimalSeparators;
                        R === "Backspace" && _[k - 1] === q && v && y && (G(x, k - 1), b.preventDefault()), X != null && X.includes(R) && _[k] === q && G(x, k + 1);
                        var ne = w === !0 ? "," : w;
                        R === "Backspace" && _[k - 1] === ne && G(x, k - 1), R === "Delete" && _[k] === ne && G(x, k + 1), d(b)
                    },
                    re = function(b) {
                        var x = Q;
                        if (x.match(/\d/g) || (x = ""), u || (x = Ae(x)), y && v && (x = he(x, v, y)), x !== Q) {
                            var R = ue(x, e);
                            U({
                                formattedValue: R,
                                value: x,
                                floatValue: parseFloat(x)
                            }, {
                                event: b,
                                source: L.event
                            })
                        }
                        h(b)
                    },
                    le = function(b) {
                        return b === t ? !0 : J(b)
                    };
                return Object.assign(Object.assign({}, E), {
                    value: te,
                    valueIsNumericString: !1,
                    isValidInputCharacter: le,
                    onValueChange: U,
                    format: B,
                    removeFormatting: A,
                    getCaretBoundary: function(b) {
                        return xe(b, e)
                    },
                    onKeyDown: fe,
                    onBlur: re
                })
            }

            function Ge(e) {
                var t = Ce(e);
                return p.createElement(oe, Object.assign({}, t))
            }

            function De(e, t) {
                var r = t.format,
                    n = t.allowEmptyFormatting,
                    a = t.mask,
                    i = t.patternChar;
                if (i === void 0 && (i = "#"), e === "" && !n) return "";
                for (var u = 0, d = r.split(""), h = 0, w = r.length; h < w; h++) r[h] === i && (d[h] = e[u] || pe(a, u), u += 1);
                return d.join("")
            }

            function Ne(e, t, r) {
                t === void 0 && (t = Se(e));
                var n = r.format,
                    a = r.patternChar;
                a === void 0 && (a = "#");
                var i = t.from,
                    u = t.to,
                    d = t.lastValue;
                d === void 0 && (d = "");
                var h = function(m) {
                        return n[m] === a
                    },
                    w = function(m, E) {
                        for (var B = "", A = 0; A < m.length; A++) h(E + A) && J(m[A]) && (B += m[A]);
                        return B
                    },
                    v = function(m) {
                        return m.replace(/[^0-9]/g, "")
                    };
                if (!n.match(/\d/)) return v(e);
                if (d === "" && e.length === n.length) {
                    for (var y = "", o = 0; o < e.length; o++)
                        if (h(o)) J(e[o]) && (y += e[o]);
                        else if (e[o] !== n[o]) return v(e);
                    return y
                }
                var l = d.substring(0, i.start),
                    S = e.substring(u.start, u.end),
                    s = d.substring(i.end);
                return "" + w(l, 0) + v(S) + w(s, i.end)
            }

            function Ee(e, t) {
                var r = t.format,
                    n = t.mask,
                    a = t.patternChar;
                a === void 0 && (a = "#");
                var i = Array.from({
                        length: e.length + 1
                    }).map(function() {
                        return !0
                    }),
                    u = 0,
                    d = -1,
                    h = {};
                r.split("").forEach(function(o, l) {
                    var S = void 0;
                    o === a && (u++, S = pe(n, u - 1), d === -1 && e[l] === S && (d = l)), h[l] = S
                });
                for (var w = function(o) {
                        return r[o] === a && e[o] !== h[o]
                    }, v = 0, y = i.length; v < y; v++) i[v] = v === d || w(v) || w(v - 1);
                return i[r.indexOf(a)] = !0, i
            }

            function Ue(e) {
                var t = e.mask;
                if (t) {
                    var r = t === "string" ? t : t.toString();
                    if (r.match(/\d/g)) throw new Error("Mask " + t + " should not contain numeric character;")
                }
            }

            function Ie(e) {
                var t = e.mask,
                    r = e.allowEmptyFormatting,
                    n = e.format,
                    a = e.inputMode;
                a === void 0 && (a = "numeric");
                var i = e.onKeyDown;
                i === void 0 && (i = j);
                var u = e.patternChar;
                u === void 0 && (u = "#");
                var d = C(e, ["mask", "allowEmptyFormatting", "format", "inputMode", "onKeyDown", "patternChar"]);
                Ue(e);
                var h = function(v) {
                        return Ee(v, e)
                    },
                    w = function(v) {
                        var y = v.key,
                            o = v.target,
                            l = o.selectionStart,
                            S = o.selectionEnd,
                            s = o.value;
                        if (l !== S) {
                            i(v);
                            return
                        }
                        var m = l;
                        if (y === "Backspace" || y === "Delete") {
                            var E = "right";
                            if (y === "Backspace") {
                                for (; m > 0 && n[m - 1] !== u;) m--;
                                E = "left"
                            } else {
                                for (var B = n.length; m < B && n[m] !== u;) m++;
                                E = "right"
                            }
                            m = H(s, m, h(s), E)
                        } else n[m] !== u && y !== "ArrowLeft" && y !== "ArrowRight" && (m = H(s, m + 1, h(s), "right"));
                        m !== l && G(o, m), i(v)
                    };
                return Object.assign(Object.assign({}, d), {
                    inputMode: a,
                    format: function(v) {
                        return De(v, e)
                    },
                    removeFormatting: function(v, y) {
                        return Ne(v, y, e)
                    },
                    getCaretBoundary: h,
                    onKeyDown: w
                })
            }

            function We(e) {
                var t = Ie(e);
                return p.createElement(oe, Object.assign({}, t))
            }
        },
        35817: function() {
            function $() {
                var p = document.createElement("input");
                p.setAttribute("type", "time");
                var C = "not-a-time";
                return p.setAttribute("value", C), p.value !== C
            }
            var N = $();
            window && (window.supportsTime = N);

            function F(p, C) {
                var L = document.createElement("script");
                L.src = p, L.onload = C, document.head.appendChild(L)
            }
            document.addEventListener("DOMContentLoaded", function() {
                N || F("https://cdn.jsdelivr.net/npm/time-input-polyfill@1.0.11/dist/time-input-polyfill.min.js", function() {
                    var p = [].slice.call(document.querySelectorAll('input[type="time"]'));
                    p.forEach(function(C) {
                        new TimePolyfill(C)
                    })
                })
            })
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/4fb5bb042b69cd81492b03a3bcef6d8a/84415-a9bb164cd7dad30415ac-min.en-US.js.map