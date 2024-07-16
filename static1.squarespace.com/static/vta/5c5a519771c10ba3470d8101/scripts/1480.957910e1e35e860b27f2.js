"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [1480], {
        9330: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return w
                }
            });
            r(94226);
            var n = r(1992),
                i = r(49099);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        u(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e, r) {
                return (e = l(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, l(n.key), n)
                }
            }

            function l(t) {
                var e = function(t, e) {
                    if ("object" != o(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != o(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(e) ? e : e + ""
            }
            var p = function() {
                return t = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.defaultProps = {
                        isEnabled: !0,
                        interval: 3e3,
                        callback: i.l
                    }, this.props = a(a({}, this.defaultProps), e), this.timeout = null, this.onTimeout = this.onTimeout.bind(this)
                }, (e = [{
                    key: "start",
                    value: function() {
                        var t = this.props,
                            e = t.isEnabled,
                            r = t.interval;
                        e && (this.timeout = setTimeout(this.onTimeout, r))
                    }
                }, {
                    key: "cancel",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }, {
                    key: "onTimeout",
                    value: function() {
                        (0, this.props.callback)()
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        clearTimeout(this.timeout)
                    }
                }]) && c(t.prototype, e), r && c(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e, r
            }();

            function f(t) {
                return f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function d(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(r), !0).forEach((function(e) {
                        m(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function g(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, v(n.key), n)
                }
            }

            function m(t, e, r) {
                return (e = v(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function v(t) {
                var e = function(t, e) {
                    if ("object" != f(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != f(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == f(e) ? e : e + ""
            }
            var y = 39,
                b = 37,
                w = function() {
                    return t = function t(e) {
                        var r = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), m(this, "getLastScrollableSlideIndex", (function() {
                            return r.props.numSlides - r.props.slideColumnCount
                        })), m(this, "setIndex", (function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                i = e.skipModulus,
                                o = e.isInstant,
                                s = r.props,
                                a = s.transitionDuration,
                                u = s.isInfinite,
                                c = s.onStartProgress,
                                l = s.shouldStopNavAtEnds,
                                p = r.len,
                                f = t;
                            if (!u && l) {
                                var d = r.getLastScrollableSlideIndex() || p - 1;
                                if (f < 0) return r.pos.current = 0, void(r.pos.target = 0);
                                if (f > d) return r.pos.current = d, void(r.pos.target = d)
                            }
                            if (i && u || (f = (t % p + p) % p || 0, r.pos.target = (r.pos.target % p + p) % p || 0, r.pos.current = (r.pos.current % p + p) % p || 0), f !== r.pos.target || o) {
                                if (r.isTransitioning = !0, r.refreshAutoplayState(), r.pos.target = t, r.tween && r.tween.destroy(), c(r.pos.target), o) return r.setProgress(r.pos.target), void r.onTransitionComplete();
                                r.tween = new n.A({
                                    duration: .001 * a,
                                    from: r.pos.current,
                                    to: r.pos.target,
                                    onUpdate: r.setProgress,
                                    onComplete: r.onTransitionComplete
                                })
                            }
                        })), m(this, "setOffsetIndex", (function(t, e) {
                            var n = r.props,
                                i = n.isInfinite,
                                o = n.shouldStopNavAtEnds,
                                s = Math.round(r.pos.target + t);
                            !i && !o && (s < 0 ? s = r.len - 1 : s > r.len - 1 && (s = 0)), r.setIndex(s, h(h({}, e), {}, {
                                skipModulus: !0
                            }))
                        })), m(this, "previousIndex", (function(t) {
                            return r.setOffsetIndex(-1, t)
                        })), m(this, "nextIndex", (function(t) {
                            return r.setOffsetIndex(1, t)
                        })), m(this, "onItemOver", (function() {
                            r.isItemOver = !0, r.refreshAutoplayState()
                        })), m(this, "onItemOut", (function() {
                            r.isItemOver = !1, r.refreshAutoplayState()
                        })), m(this, "onTransitionComplete", (function() {
                            r.isTransitioning = !1, r.refreshAutoplayState()
                        })), m(this, "refreshAutoplayState", (function() {
                            r.isTransitioning || r.isItemOver ? r.autoplay.cancel() : r.autoplay.start()
                        })), m(this, "setProgress", (function(t) {
                            r.updateProgressValue(t)
                        })), m(this, "onKeyDown", (function(t) {
                            if (t.keyCode === y) return r.nextIndex(), void t.preventDefault();
                            t.keyCode === b && (r.previousIndex(), t.preventDefault())
                        })), m(this, "updateProgressValue", (function(t) {
                            var e = r.props.onProgress,
                                n = r.len,
                                i = (t % n + n) % n || 0;
                            r.pos.current = t, e(i)
                        })), m(this, "onAutoplay", (function() {
                            r.nextIndex()
                        })), this.defaultProps = {
                            nodes: {
                                focus: document.createElement("div"),
                                drag: document.createElement("div")
                            },
                            isAutoplay: !1,
                            autoplayInterval: 3e3,
                            isInfinite: !0,
                            numSlides: 0,
                            slideColumnCount: 1,
                            transitionDuration: 600,
                            onProgress: i.l,
                            onStartProgress: i.l,
                            onEnterViewport: i.l,
                            onLeaveViewport: i.l,
                            onFocusChange: i.l,
                            shouldStopNavAtEnds: !1
                        }, this.props = h(h({}, this.defaultProps), e);
                        var o = this.props.numSlides;
                        this.len = o, this.pos = {
                            target: 0,
                            current: 0
                        }, this.isTransitioning = !1, this.isItemOver = !1, this.interaction = null, this.autoplay = null, this.bindListeners()
                    }, (e = [{
                        key: "update",
                        value: function(t) {
                            this.unbindListeners(), this.props = h(h({}, this.props), t);
                            var e = this.props.numSlides;
                            this.len = e, this.bindListeners()
                        }
                    }, {
                        key: "bindListeners",
                        value: function() {
                            var t = this.props,
                                e = t.isAutoplay,
                                r = t.autoplayInterval,
                                n = this.props.nodes.focus;
                            n.setAttribute("tabindex", "0"), n.addEventListener("keydown", this.onKeyDown), this.autoplay = new p({
                                isEnabled: e,
                                interval: r,
                                callback: this.onAutoplay
                            })
                        }
                    }, {
                        key: "unbindListeners",
                        value: function() {
                            var t = this.props.nodes.focus;
                            t && t.removeEventListener("keydown", this.onKeyDown), this.observer && t && this.observer.remove(t), this.autoplay.destroy()
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.unbindListeners(), this.tween && (this.tween.destroy(), delete this.tween), this.interaction && (this.interaction.destroy(), delete this.interaction), delete this.props.nodes
                        }
                    }]) && g(t.prototype, e), r && g(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, e, r
                }()
        },
        28058: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return g
                }
            });
            r(94226);
            var n = r(49099),
                i = r(71240),
                o = r(40221);

            function s(t) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            function a(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (!t) return;
                    if ("string" == typeof t) return u(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return u(t, e)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function l(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                        p(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function p(t, e, r) {
                return (e = d(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function f(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, d(n.key), n)
                }
            }

            function d(t) {
                var e = function(t, e) {
                    if ("object" != s(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != s(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == s(e) ? e : e + ""
            }
            var h = 100,
                g = function() {
                    return t = function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), this.defaultProps = {
                            regionWidth: 800,
                            regionHeight: 600,
                            maxWidth: 800,
                            maxHeight: 600,
                            spacing: {
                                value: 100,
                                unit: "%"
                            },
                            items: [],
                            isInfinite: !1,
                            onCloneItem: n.l,
                            slideshowGutterWidth: 0,
                            onRedraw: n.l
                        }, this.props = l(l({}, this.defaultProps), e);
                        var r = this.props,
                            o = r.regionWidth,
                            s = r.regionHeight,
                            a = r.maxWidth,
                            u = r.maxHeight;
                        this.progress = 0, this.dimensions = {
                            regionWidth: o,
                            regionHeight: s,
                            maxWidth: (0, i.A)(a, h, o),
                            maxHeight: (0, i.A)(u, h, s)
                        }, this.items = [], this.totalWidth = 0, this.setSize = this.setSize.bind(this), this.redraw(), this.refresh()
                    }, e = [{
                        key: "setSize",
                        value: function(t) {
                            this.dimensions = l(l({}, this.dimensions), t);
                            var e = this.dimensions,
                                r = e.regionWidth,
                                n = e.regionHeight,
                                o = e.maxWidth,
                                s = e.maxHeight;
                            this.dimensions.maxWidth = (0, i.A)(o, h, r), this.dimensions.maxHeight = (0, i.A)(s, h, n), this.redraw(), this.refresh()
                        }
                    }, {
                        key: "setProgress",
                        value: function(t) {
                            this.progress = t, this.refresh()
                        }
                    }, {
                        key: "update",
                        value: function(t) {
                            this.props = l(l({}, this.props), t), this.redraw(), this.refresh()
                        }
                    }, {
                        key: "redraw",
                        value: function() {
                            var t = this.props,
                                e = t.items,
                                r = t.isInfinite,
                                n = t.onRedraw,
                                i = this.dimensions.regionWidth,
                                o = e.length;
                            if (this.items = [], o) {
                                var s = this.getItems(e),
                                    u = s.totalWidth;
                                if (this.items = s.items, r) {
                                    for (var c = s.minSpacing * o; u + c < 1.5 * i && u > 0 && i > 0;) {
                                        var l;
                                        s = this.getItems(e, {
                                            startOffset: u,
                                            isClone: !0
                                        }), (l = this.items).push.apply(l, a(s.items)), u = s.totalWidth
                                    }
                                    n()
                                }
                                this.totalWidth = u, this.lerps = this.createLerps(this.items, u)
                            }
                        }
                    }, {
                        key: "getItems",
                        value: function(t) {
                            var e = this,
                                r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                n = r.startOffset,
                                i = void 0 === n ? 0 : n,
                                o = r.isClone,
                                s = this.props.onCloneItem,
                                a = Number.MAX_VALUE,
                                u = i;
                            return {
                                items: t.map((function(t, r) {
                                    var n = e.getItemData(t, u);
                                    return u += n.width, a = Math.min(a, n.spacing), o && s(r), n
                                })),
                                totalWidth: u,
                                minSpacing: a
                            }
                        }
                    }, {
                        key: "getItemData",
                        value: function(t, e) {
                            var r = this.dimensions.regionHeight,
                                n = this.getContentSize(t),
                                i = n.width,
                                o = n.height;
                            return {
                                localX: e,
                                x: e,
                                y: .5 * r - .5 * o,
                                proximity: 0,
                                inViewport: !1,
                                width: i,
                                height: o,
                                spacing: this.getContentSpacing(i)
                            }
                        }
                    }, {
                        key: "getContentSize",
                        value: function(t) {
                            return {
                                width: t.width,
                                height: this.dimensions.maxHeight
                            }
                        }
                    }, {
                        key: "getContentSpacing",
                        value: function(t) {
                            var e = this.props.spacing,
                                r = this.dimensions.regionWidth;
                            return "%" === e.unit ? Math.round(e.value / 100 * r) : "vw" === e.unit ? Math.round(e.value / 100 * window.innerWidth) : "vh" === e.unit ? Math.round(e.value / 100 * window.innerHeight) : "vmin" === e.unit ? Math.round(e.value / 100 * Math.min(window.innerWidth, window.innerHeight)) : "vmax" === e.unit ? Math.round(e.value / 100 * Math.max(window.innerWidth, window.innerHeight)) : Math.round(e.value)
                        }
                    }, {
                        key: "createLerps",
                        value: function(t, e) {
                            var r = this.props.isInfinite,
                                n = {
                                    index: t.map((function(t, e) {
                                        return e
                                    })),
                                    position: t.map((function(t) {
                                        return t.localX + .5 * t.width
                                    })),
                                    spacing: t.map((function(t) {
                                        return t.spacing
                                    }))
                                };
                            return r && (n.index.push(n.index.length), n.position.push(e + .5 * t[0].width), n.spacing.push(t[0].spacing)), n
                        }
                    }, {
                        key: "refresh",
                        value: function() {
                            var t = this.props.isInfinite,
                                e = this.dimensions.regionWidth,
                                r = this.items.length;
                            if (r)
                                for (var n = (0, o.pj)(this.progress, this.lerps.index), i = (0, o.Ae)(n, this.lerps.index, this.lerps.position, this.progress), s = (0, o.Ae)(n, this.lerps.index, this.lerps.spacing, this.progress), a = this.items[0].width / 2, u = 0, c = r; u < c; u += 1) {
                                    var l = this.items[u],
                                        p = a + l.localX - (i + this.progress * s),
                                        f = p + l.width < -this.props.slideshowGutterWidth,
                                        d = p >= e,
                                        h = u - this.progress;
                                    t && f ? (h += r, p += this.totalWidth + s * r) : t && d && (h -= r, p -= this.totalWidth + s * r);
                                    var g = p + l.width >= -this.props.slideshowGutterWidth && p < e;
                                    l.x = g ? p : -9999, l.inViewport = g, l.proximity = h, a += s
                                }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            delete this.dimensions, delete this.items
                        }
                    }], e && f(t.prototype, e), r && f(t, r), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, e, r
                }()
        },
        29762: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return f
                }
            });
            r(94226);
            var n = r(49099),
                i = r(73864);

            function o(t) {
                return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, o(t)
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        l(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function u(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, p(n.key), n)
                }
            }

            function c(t, e, r) {
                return e && u(t.prototype, e), r && u(t, r), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t
            }

            function l(t, e, r) {
                return (e = p(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function p(t) {
                var e = function(t, e) {
                    if ("object" != o(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != o(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == o(e) ? e : e + ""
            }
            var f = c((function t(e, r) {
                var o = this;
                ! function(t, e) {
                    if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                }(this, t), l(this, "bindListeners", (function() {
                    o.dragContainerNode.addEventListener("mousedown", o.onDragStart), o.dragContainerNode.addEventListener("mouseup", o.onDragEnd), o.dragContainerNode.addEventListener("mouseleave", o.onDragEnd), i.CI && o.addTouchListeners()
                })), l(this, "unbindListeners", (function() {
                    o.dragContainerNode.removeEventListener("mousedown", o.onDragStart), o.dragContainerNode.removeEventListener("mouseup", o.onDragEnd), o.dragContainerNode.removeEventListener("mouseleave", o.onDragEnd), i.CI && o.removeTouchListeners()
                })), l(this, "addTouchListeners", (function() {
                    o.dragContainerNode.addEventListener("touchstart", o.onDragStart, {
                        passive: !0
                    }), o.dragContainerNode.addEventListener("touchend", o.onDragEnd), o.dragContainerNode.addEventListener("touchcancel", o.onDragEnd), o.dragContainerNode.addEventListener("touchmove", o.onDragMove)
                })), l(this, "removeTouchListeners", (function() {
                    o.dragContainerNode.removeEventListener("touchstart", o.onDragStart, {
                        passive: !0
                    }), o.dragContainerNode.removeEventListener("touchend", o.onDragEnd), o.dragContainerNode.removeEventListener("touchcancel", o.onDragEnd), o.dragContainerNode.removeEventListener("touchmove", o.onDragMove)
                })), l(this, "onDragStart", (function(t) {
                    var e = !!t.target.closest("button, a"),
                        r = "number" == typeof t.button && 0 !== t.button;
                    if (!(e || r)) {
                        !!t.targetTouches || o.dragContainerNode.addEventListener("mousemove", o.onDragMove);
                        var n = (0, i.np)(t),
                            s = n.clientX,
                            a = n.clientY;
                        o.isDragging = !0, o.dragStartX = s, o.dragStartY = a, o.slideProgressAtDragStart = o.props.behaviors.pos.current, o.dragDirectionX = 0, o.dragAxis = null, o.hasUserCommittedToDirection = !1, o.dragContainerNode.style.cursor = "grabbing"
                    }
                })), l(this, "onDragMove", (function(t) {
                    if (o.isDragging) {
                        var e = (0, i.np)(t),
                            r = e.clientX,
                            n = e.clientY,
                            s = !!t.targetTouches,
                            a = r - o.dragStartX,
                            u = n - o.dragStartY;
                        if (!(r === o.previousDragPositionX && n === o.previousDragPositionY))
                            if (o.previousDragPositionX = r, o.previousDragPositionY = n, s && (o.dragAxis = o.determineDragAxis({
                                    currentDragAxis: o.dragAxis,
                                    absoluteDragDistanceX: Math.abs(a),
                                    absoluteDragDistanceY: Math.abs(u)
                                }), "horizontal" !== o.dragAxis)) o.dragDirectionX = 0;
                            else {
                                t.preventDefault();
                                var c = o.props.slideshowProps.slideDimensions.width,
                                    l = o.slideProgressAtDragStart - a / c;
                                o.dragDirectionX = o.getHorizontalDragDirection({
                                    nextProgress: l,
                                    currentProgress: o.props.slideshowProps.progress,
                                    dragDistanceX: a,
                                    currentDragDirection: o.dragDirectionX
                                }), o.props.slideshowProps.progress = l, o.props.behaviors.setIndex(o.props.slideshowProps.progress, {
                                    isInstant: !0,
                                    skipModulus: !0
                                }), o.props.slideshowProps.progressIndex = Math.floor(.5 + o.props.slideshowProps.progress + .49 * o.dragDirectionX)
                            }
                    }
                })), l(this, "onDragEnd", (function(t) {
                    if (o.isDragging) {
                        o.isDragging = !1, o.dragContainerNode.style.removeProperty("cursor"), !!t.targetTouches || o.dragContainerNode.removeEventListener("mousemove", o.onDragMove);
                        var e = o.props.slideshowProps.progress !== ~~o.props.slideshowProps.progress,
                            r = "horizontal" !== o.dragAxis && e;
                        ("horizontal" === o.dragAxis || r) && o.props.behaviors.setIndex(o.props.slideshowProps.progressIndex, {
                            skipModulus: !0
                        }), o.props.slideshowProps.progress = o.props.slideshowProps.progressIndex, o.props.slideshowProps.targetSlideIndex = o.props.slideshowProps.progressIndex, o.props.callback()
                    }
                })), l(this, "determineDragAxis", (function(t) {
                    var e = t.currentDragAxis,
                        r = t.absoluteDragDistanceX,
                        n = t.absoluteDragDistanceY;
                    return o.hasUserCommittedToDirection ? e : (o.hasUserCommittedToDirection = r > o.minDragDistance || n > o.minDragDistance, r > 2 * n ? "horizontal" : "vertical")
                })), l(this, "getHorizontalDragDirection", (function(t) {
                    var e = t.nextProgress,
                        r = t.currentProgress,
                        n = t.dragDistanceX,
                        i = t.currentDragDirection,
                        s = e - r,
                        a = s ? s / Math.abs(s) : i;
                    return Math.abs(n) <= o.minDragDistance && (a = 0), a
                })), l(this, "destroy", (function() {
                    o.unbindListeners()
                })), this.dragContainerNode = e, this.defaultProps = {
                    slideshowProps: {
                        slideDimensions: {
                            width: 100,
                            height: 100
                        },
                        totalSlideCount: 0,
                        progress: 0,
                        progressIndex: 0,
                        targetSlideIndex: 0
                    },
                    behaviors: {},
                    callback: n.l
                }, this.props = a(a({}, this.defaultProps), r), this.isDragging = !1, this.dragStartX = 0, this.slideProgressAtDragStart = 0, this.dragAxis = null, this.hasUserCommittedToDirection = !1, this.minDragDistance = 15, this.bindListeners()
            }))
        },
        1992: function(t, e, r) {
            r.d(e, {
                A: function() {
                    return h
                }
            });
            r(94226);
            var n = r(67373),
                i = r(40221),
                o = r(49099);

            function s(t) {
                return s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, s(t)
            }

            function a(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, d(n.key), n)
                }
            }

            function u(t, e, r) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" === s(e) || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, c() ? Reflect.construct(e, r || [], l(t).constructor) : e.apply(t, r))
            }

            function c() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (c = function() {
                    return !!t
                })()
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function f(t, e, r) {
                return (e = d(e)) in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }

            function d(t) {
                var e = function(t, e) {
                    if ("object" != s(t) || !t) return t;
                    var r = t[Symbol.toPrimitive];
                    if (void 0 !== r) {
                        var n = r.call(t, e || "default");
                        if ("object" != s(n)) return n;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == s(e) ? e : e + ""
            }
            var h = function(t) {
                function e(t) {
                    var r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), f(r = u(this, e, [t]), "tick", (function() {
                        var t = r.props,
                            e = t.ease,
                            n = t.from,
                            o = t.to,
                            s = t.duration,
                            a = t.onUpdate,
                            u = t.onComplete,
                            c = Date.now() - r.lastUpdate;
                        r.lastUpdate += c, r.time = (r.lastUpdate - r.startTime) / 1e3, r.time > s && (r.time = s), a((0, i.Cc)(n, o, e(r.time / s))), r.time >= s ? u(o) : requestAnimationFrame(r.tick)
                    }));
                    var n = r.props.autoStart;
                    return r.state = {
                        isActive: !1
                    }, r.startTime = null, r.lastUpdate = null, r.frame = null, n && r.start(), r
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
                    }), e && p(t, e)
                }(e, t), r = e, (n = [{
                    key: "start",
                    value: function() {
                        this.state.isActive || (this.setState({
                            isActive: !0
                        }), this.startTime = Date.now(), this.lastUpdate = this.startTime, this.frame = requestAnimationFrame(this.tick))
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        cancelAnimationFrame(this.frame)
                    }
                }]) && a(r.prototype, n), o && a(r, o), Object.defineProperty(r, "prototype", {
                    writable: !1
                }), r;
                var r, n, o
            }(n.A);
            f(h, "defaultProps", {
                autoStart: !0,
                ease: function(t) {
                    return -(arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1) * (t /= arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1) * (t - 2) + (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0)
                },
                duration: 1,
                from: 0,
                to: 0,
                onUpdate: o.l,
                onComplete: o.l
            })
        },
        71240: function(t, e) {
            e.A = function(t, e, r) {
                return t < e ? e : t > r ? r : t
            }
        },
        40221: function(t, e, r) {
            r.d(e, {
                Ae: function() {
                    return s
                },
                Cc: function() {
                    return n
                },
                Xn: function() {
                    return o
                },
                pj: function() {
                    return i
                }
            });
            var n = function(t, e, r) {
                    return t * (1 - r) + e * r
                },
                i = function(t, e) {
                    var r;
                    for (r = 1; r < e.length - 1 && !(e[r] >= t); ++r);
                    return r - 1
                },
                o = function(t, e, r) {
                    var n = i(r, t),
                        o = t[n],
                        s = t[n + 1],
                        a = e[n];
                    return (r - o) / (s - o) * (e[n + 1] - a) + a
                },
                s = function(t, e, r, n) {
                    var i = e[t],
                        o = e[t + 1],
                        s = r[t],
                        a = r[t + 1],
                        u = (n - i) / (o - i);
                    return 1 === r.length ? s : u * (a - s) + s
                }
        }
    }
]);