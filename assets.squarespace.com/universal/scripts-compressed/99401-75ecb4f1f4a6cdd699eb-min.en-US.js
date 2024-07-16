(self.webpackChunkextract_css = self.webpackChunkextract_css || []).push([
    [99401], {
        799401: function(O, w, C) {
            O = C.nmd(O);
            var T;
            /*!
             * Platform.js v1.3.6
             * Copyright 2014-2020 Benjamin Tan
             * Copyright 2011-2013 John-David Dalton
             * Available under MIT license
             */
            (function() {
                "use strict";
                var G = {
                        function: !0,
                        object: !0
                    },
                    P = G[typeof window] && window || this,
                    _ = P,
                    J = G[typeof w] && w,
                    q = G.object && O && !O.nodeType && O,
                    u = J && q && typeof C.g == "object" && C.g;
                u && (u.global === u || u.window === u || u.self === u) && (P = u);
                var Y = Math.pow(2, 53) - 1,
                    B = /\bOpera/,
                    Z = this,
                    L = Object.prototype,
                    Q = L.hasOwnProperty,
                    V = L.toString;

                function z(i) {
                    return i = String(i), i.charAt(0).toUpperCase() + i.slice(1)
                }

                function ee(i, l, f) {
                    var d = {
                        "10.0": "10",
                        "6.4": "10 Technical Preview",
                        "6.3": "8.1",
                        "6.2": "8",
                        "6.1": "Server 2008 R2 / 7",
                        "6.0": "Server 2008 / Vista",
                        "5.2": "Server 2003 / XP 64-bit",
                        "5.1": "XP",
                        "5.01": "2000 SP1",
                        "5.0": "2000",
                        "4.0": "NT",
                        "4.90": "ME"
                    };
                    return l && f && /^Win/i.test(i) && !/^Windows Phone /i.test(i) && (d = d[/[\d.]+$/.exec(i)]) && (i = "Windows " + d), i = String(i), l && f && (i = i.replace(RegExp(l, "i"), f)), i = W(i.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0]), i
                }

                function ie(i, l) {
                    var f = -1,
                        d = i ? i.length : 0;
                    if (typeof d == "number" && d > -1 && d <= Y)
                        for (; ++f < d;) l(i[f], f, i);
                    else $(i, l)
                }

                function W(i) {
                    return i = K(i), /^(?:webOS|i(?:OS|P))/.test(i) ? i : z(i)
                }

                function $(i, l) {
                    for (var f in i) Q.call(i, f) && l(i[f], f, i)
                }

                function y(i) {
                    return i == null ? z(i) : V.call(i).slice(8, -1)
                }

                function te(i, l) {
                    var f = i != null ? typeof i[l] : "number";
                    return !/^(?:boolean|number|string|undefined)$/.test(f) && (f == "object" ? !!i[l] : !0)
                }

                function m(i) {
                    return String(i).replace(/([ -])(?!$)/g, "$1?")
                }

                function M(i, l) {
                    var f = null;
                    return ie(i, function(d, A) {
                        f = l(f, d, A, i)
                    }), f
                }

                function K(i) {
                    return String(i).replace(/^ +| +$/g, "")
                }

                function R(i) {
                    var l = P,
                        f = i && typeof i == "object" && y(i) != "String";
                    f && (l = i, i = null);
                    var d = l.navigator || {},
                        A = d.userAgent || "";
                    i || (i = A);
                    var xe = f || Z == _,
                        re = f ? !!d.likeChrome : /\bChrome\b/.test(i) && !/internal|\n/i.test(V.toString()),
                        N = "Object",
                        ne = f ? N : "ScriptBridgingProxyObject",
                        ae = f ? N : "Environment",
                        oe = f && l.java ? "JavaPackage" : y(l.java),
                        le = f ? N : "RuntimeObject",
                        E = /\bJava/.test(oe) && l.java,
                        se = E && y(l.environment) == ae,
                        be = E ? "a" : "\u03B1",
                        fe = E ? "b" : "\u03B2",
                        X = l.document || {},
                        v = l.operamini || l.opera,
                        k = B.test(k = f && v ? v["[[Class]]"] : y(v)) ? k : v = null,
                        e, I = i,
                        o = [],
                        F = null,
                        g = i == A,
                        n = g && v && typeof v.version == "function" && v.version(),
                        j, s = pe([{
                            label: "EdgeHTML",
                            pattern: "Edge"
                        }, "Trident", {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"]),
                        t = de(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                            label: "Microsoft Edge",
                            pattern: "(?:Edge|Edg|EdgA|EdgiOS)"
                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                            label: "Samsung Internet",
                            pattern: "SamsungBrowser"
                        }, "SeaMonkey", {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Sleipnir", "SlimBrowser", {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        }, "Sunrise", "Swiftfox", "Vivaldi", "Waterfox", "WebPositive", {
                            label: "Yandex Browser",
                            pattern: "YaBrowser"
                        }, {
                            label: "UC Browser",
                            pattern: "UCBrowser"
                        }, "Opera Mini", {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        }, "Opera", {
                            label: "Opera",
                            pattern: "OPR"
                        }, "Chromium", "Chrome", {
                            label: "Chrome",
                            pattern: "(?:HeadlessChrome)"
                        }, {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        }, {
                            label: "Firefox",
                            pattern: "(?:Firefox|Minefield)"
                        }, {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        }, {
                            label: "IE",
                            pattern: "IEMobile"
                        }, {
                            label: "IE",
                            pattern: "MSIE"
                        }, "Safari"]),
                        a = U([{
                            label: "BlackBerry",
                            pattern: "BB10"
                        }, "BlackBerry", {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        }, {
                            label: "Galaxy S2",
                            pattern: "GT-I9100"
                        }, {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        }, {
                            label: "Galaxy S4",
                            pattern: "GT-I9500"
                        }, {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        }, {
                            label: "Galaxy S6",
                            pattern: "SM-G920"
                        }, {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        }, {
                            label: "Galaxy S7",
                            pattern: "SM-G930"
                        }, {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                            label: "Wii U",
                            pattern: "WiiU"
                        }, "Wii", "Xbox One", {
                            label: "Xbox 360",
                            pattern: "Xbox"
                        }, "Xoom"]),
                        c = ce({
                            Apple: {
                                iPad: 1,
                                iPhone: 1,
                                iPod: 1
                            },
                            Alcatel: {},
                            Archos: {},
                            Amazon: {
                                Kindle: 1,
                                "Kindle Fire": 1
                            },
                            Asus: {
                                Transformer: 1
                            },
                            "Barnes & Noble": {
                                Nook: 1
                            },
                            BlackBerry: {
                                PlayBook: 1
                            },
                            Google: {
                                "Google TV": 1,
                                Nexus: 1
                            },
                            HP: {
                                TouchPad: 1
                            },
                            HTC: {},
                            Huawei: {},
                            Lenovo: {},
                            LG: {},
                            Microsoft: {
                                Xbox: 1,
                                "Xbox One": 1
                            },
                            Motorola: {
                                Xoom: 1
                            },
                            Nintendo: {
                                "Wii U": 1,
                                Wii: 1
                            },
                            Nokia: {
                                Lumia: 1
                            },
                            Oppo: {},
                            Samsung: {
                                "Galaxy S": 1,
                                "Galaxy S2": 1,
                                "Galaxy S3": 1,
                                "Galaxy S4": 1
                            },
                            Sony: {
                                PlayStation: 1,
                                "PlayStation Vita": 1
                            },
                            Xiaomi: {
                                Mi: 1,
                                Redmi: 1
                            }
                        }),
                        r = Se(["Windows Phone", "KaiOS", "Android", "CentOS", {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        }, "Debian", {
                            label: "DragonFly BSD",
                            pattern: "DragonFly"
                        }, "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "]);

                    function pe(S) {
                        return M(S, function(p, b) {
                            return p || RegExp("\\b" + (b.pattern || m(b)) + "\\b", "i").exec(i) && (b.label || b)
                        })
                    }

                    function ce(S) {
                        return M(S, function(p, b, x) {
                            return p || (b[a] || b[/^[a-z]+(?: +[a-z]+\b)*/i.exec(a)] || RegExp("\\b" + m(x) + "(?:\\b|\\w*\\d)", "i").exec(i)) && x
                        })
                    }

                    function de(S) {
                        return M(S, function(p, b) {
                            return p || RegExp("\\b" + (b.pattern || m(b)) + "\\b", "i").exec(i) && (b.label || b)
                        })
                    }

                    function Se(S) {
                        return M(S, function(p, b) {
                            var x = b.pattern || m(b);
                            return !p && (p = RegExp("\\b" + x + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(i)) && (p = ee(p, x, b.label || b)), p
                        })
                    }

                    function U(S) {
                        return M(S, function(p, b) {
                            var x = b.pattern || m(b);
                            return !p && (p = RegExp("\\b" + x + " *\\d+[.\\w_]*", "i").exec(i) || RegExp("\\b" + x + " *\\w+-[\\w]*", "i").exec(i) || RegExp("\\b" + x + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(i)) && ((p = String(b.label && !RegExp(x, "i").test(b.label) ? b.label : p).split("/"))[1] && !/[\d.]+/.test(p[0]) && (p[0] += " " + p[1]), b = b.label || b, p = W(p[0].replace(RegExp(x, "i"), b).replace(RegExp("; *(?:" + b + "[_-])?", "i"), " ").replace(RegExp("(" + b + ")[-_.]?(\\w)", "i"), "$1 $2"))), p
                        })
                    }

                    function D(S) {
                        return M(S, function(p, b) {
                            return p || (RegExp(b + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(i) || 0)[1] || null
                        })
                    }

                    function he() {
                        return this.description || ""
                    }
                    if (s && (s = [s]), /\bAndroid\b/.test(r) && !a && (e = /\bAndroid[^;]*;(.*?)(?:Build|\) AppleWebKit)\b/i.exec(i)) && (a = K(e[1]).replace(/^[a-z]{2}-[a-z]{2};\s*/i, "") || null), c && !a ? a = U([c]) : c && a && (a = a.replace(RegExp("^(" + m(c) + ")[-_.\\s]", "i"), c + " ").replace(RegExp("^(" + m(c) + ")[-_.]?(\\w)", "i"), c + " $2")), (e = /\bGoogle TV\b/.exec(a)) && (a = e[0]), /\bSimulator\b/i.test(i) && (a = (a ? a + " " : "") + "Simulator"), t == "Opera Mini" && /\bOPiOS\b/.test(i) && o.push("running in Turbo/Uncompressed mode"), t == "IE" && /\blike iPhone OS\b/.test(i) ? (e = R(i.replace(/like iPhone OS/, "")), c = e.manufacturer, a = e.product) : /^iP/.test(a) ? (t || (t = "Safari"), r = "iOS" + ((e = / OS ([\d_]+)/i.exec(i)) ? " " + e[1].replace(/_/g, ".") : "")) : t == "Konqueror" && /^Linux\b/i.test(r) ? r = "Kubuntu" : c && c != "Google" && (/Chrome/.test(t) && !/\bMobile Safari\b/i.test(i) || /\bVita\b/.test(a)) || /\bAndroid\b/.test(r) && /^Chrome/.test(t) && /\bVersion\//i.test(i) ? (t = "Android Browser", r = /\bAndroid\b/.test(r) ? r : "Android") : t == "Silk" ? (/\bMobi/i.test(i) || (r = "Android", o.unshift("desktop mode")), /Accelerated *= *true/i.test(i) && o.unshift("accelerated")) : t == "UC Browser" && /\bUCWEB\b/.test(i) ? o.push("speed mode") : t == "PaleMoon" && (e = /\bFirefox\/([\d.]+)\b/.exec(i)) ? o.push("identifying as Firefox " + e[1]) : t == "Firefox" && (e = /\b(Mobile|Tablet|TV)\b/i.exec(i)) ? (r || (r = "Firefox OS"), a || (a = e[1])) : !t || (e = !/\bMinefield\b/i.test(i) && /\b(?:Firefox|Safari)\b/.exec(t)) ? (t && !a && /[\/,]|^[^(]+?\)/.test(i.slice(i.indexOf(e + "/") + 8)) && (t = null), (e = a || c || r) && (a || c || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(r)) && (t = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(r) ? r : e) + " Browser")) : t == "Electron" && (e = (/\bChrome\/([\d.]+)\b/.exec(i) || 0)[1]) && o.push("Chromium " + e), n || (n = D(["(?:Cloud9|CriOS|CrMo|Edge|Edg|EdgA|EdgiOS|FxiOS|HeadlessChrome|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$)|UCBrowser|YaBrowser)", "Version", m(t), "(?:Firefox|Minefield|NetFront)"])), (e = s == "iCab" && parseFloat(n) > 3 && "WebKit" || /\bOpera\b/.test(t) && (/\bOPR\b/.test(i) ? "Blink" : "Presto") || /\b(?:Midori|Nook|Safari)\b/i.test(i) && !/^(?:Trident|EdgeHTML)$/.test(s) && "WebKit" || !s && /\bMSIE\b/i.test(i) && (r == "Mac OS" ? "Tasman" : "Trident") || s == "WebKit" && /\bPlayStation\b(?! Vita\b)/i.test(t) && "NetFront") && (s = [e]), t == "IE" && (e = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(i) || 0)[1]) ? (t += " Mobile", r = "Windows Phone " + (/\+$/.test(e) ? e : e + ".x"), o.unshift("desktop mode")) : /\bWPDesktop\b/i.test(i) ? (t = "IE Mobile", r = "Windows Phone 8.x", o.unshift("desktop mode"), n || (n = (/\brv:([\d.]+)/.exec(i) || 0)[1])) : t != "IE" && s == "Trident" && (e = /\brv:([\d.]+)/.exec(i)) && (t && o.push("identifying as " + t + (n ? " " + n : "")), t = "IE", n = e[1]), g) {
                        if (te(l, "global"))
                            if (E && (e = E.lang.System, I = e.getProperty("os.arch"), r = r || e.getProperty("os.name") + " " + e.getProperty("os.version")), se) {
                                try {
                                    n = l.require("ringo/engine").version.join("."), t = "RingoJS"
                                } catch (S) {
                                    (e = l.system) && e.global.system == l.system && (t = "Narwhal", r || (r = e[0].os || null))
                                }
                                t || (t = "Rhino")
                            } else typeof l.process == "object" && !l.process.browser && (e = l.process) && (typeof e.versions == "object" && (typeof e.versions.electron == "string" ? (o.push("Node " + e.versions.node), t = "Electron", n = e.versions.electron) : typeof e.versions.nw == "string" && (o.push("Chromium " + n, "Node " + e.versions.node), t = "NW.js", n = e.versions.nw)), t || (t = "Node.js", I = e.arch, r = e.platform, n = /[\d.]+/.exec(e.version), n = n ? n[0] : null));
                        else y(e = l.runtime) == ne ? (t = "Adobe AIR", r = e.flash.system.Capabilities.os) : y(e = l.phantom) == le ? (t = "PhantomJS", n = (e = e.version || null) && e.major + "." + e.minor + "." + e.patch) : typeof X.documentMode == "number" && (e = /\bTrident\/(\d+)/i.exec(i)) ? (n = [n, X.documentMode], (e = +e[1] + 4) != n[1] && (o.push("IE " + n[1] + " mode"), s && (s[1] = ""), n[1] = e), n = t == "IE" ? String(n[1].toFixed(1)) : n[0]) : typeof X.documentMode == "number" && /^(?:Chrome|Firefox)\b/.test(t) && (o.push("masking as " + t + " " + n), t = "IE", n = "11.0", s = ["Trident"], r = "Windows");
                        r = r && W(r)
                    }
                    if (n && (e = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(n) || /(?:alpha|beta)(?: ?\d)?/i.exec(i + ";" + (g && d.appMinorVersion)) || /\bMinefield\b/i.test(i) && "a") && (F = /b/i.test(e) ? "beta" : "alpha", n = n.replace(RegExp(e + "\\+?$"), "") + (F == "beta" ? fe : be) + (/\d+\+?/.exec(e) || "")), t == "Fennec" || t == "Firefox" && /\b(?:Android|Firefox OS|KaiOS)\b/.test(r)) t = "Firefox Mobile";
                    else if (t == "Maxthon" && n) n = n.replace(/\.[\d.]+/, ".x");
                    else if (/\bXbox\b/i.test(a)) a == "Xbox 360" && (r = null), a == "Xbox 360" && /\bIEMobile\b/.test(i) && o.unshift("mobile mode");
                    else if ((/^(?:Chrome|IE|Opera)$/.test(t) || t && !a && !/Browser|Mobi/.test(t)) && (r == "Windows CE" || /Mobi/i.test(i))) t += " Mobile";
                    else if (t == "IE" && g) try {
                        l.external === null && o.unshift("platform preview")
                    } catch (S) {
                        o.unshift("embedded")
                    } else(/\bBlackBerry\b/.test(a) || /\bBB10\b/.test(i)) && (e = (RegExp(a.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(i) || 0)[1] || n) ? (e = [e, /BB10/.test(i)], r = (e[1] ? (a = null, c = "BlackBerry") : "Device Software") + " " + e[0], n = null) : this != $ && a != "Wii" && (g && v || /Opera/.test(t) && /\b(?:MSIE|Firefox)\b/i.test(i) || t == "Firefox" && /\bOS X (?:\d+\.){2,}/.test(r) || t == "IE" && (r && !/^Win/.test(r) && n > 5.5 || /\bWindows XP\b/.test(r) && n > 8 || n == 8 && !/\bTrident\b/.test(i))) && !B.test(e = R.call($, i.replace(B, "") + ";")) && e.name && (e = "ing as " + e.name + ((e = e.version) ? " " + e : ""), B.test(t) ? (/\bIE\b/.test(e) && r == "Mac OS" && (r = null), e = "identify" + e) : (e = "mask" + e, k ? t = W(k.replace(/([a-z])([A-Z])/g, "$1 $2")) : t = "Opera", /\bIE\b/.test(e) && (r = null), g || (n = null)), s = ["Presto"], o.push(e));
                    (e = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(i) || 0)[1]) && (e = [parseFloat(e.replace(/\.(\d)$/, ".0$1")), e], t == "Safari" && e[1].slice(-1) == "+" ? (t = "WebKit Nightly", F = "alpha", n = e[1].slice(0, -1)) : (n == e[1] || n == (e[2] = (/\bSafari\/([\d.]+\+?)/i.exec(i) || 0)[1])) && (n = null), e[1] = (/\b(?:Headless)?Chrome\/([\d.]+)/i.exec(i) || 0)[1], e[0] == 537.36 && e[2] == 537.36 && parseFloat(e[1]) >= 28 && s == "WebKit" && (s = ["Blink"]), !g || !re && !e[1] ? (s && (s[1] = "like Safari"), e = (e = e[0], e < 400 ? 1 : e < 500 ? 2 : e < 526 ? 3 : e < 533 ? 4 : e < 534 ? "4+" : e < 535 ? 5 : e < 537 ? 6 : e < 538 ? 7 : e < 601 ? 8 : e < 602 ? 9 : e < 604 ? 10 : e < 606 ? 11 : e < 608 ? 12 : "12")) : (s && (s[1] = "like Chrome"), e = e[1] || (e = e[0], e < 530 ? 1 : e < 532 ? 2 : e < 532.05 ? 3 : e < 533 ? 4 : e < 534.03 ? 5 : e < 534.07 ? 6 : e < 534.1 ? 7 : e < 534.13 ? 8 : e < 534.16 ? 9 : e < 534.24 ? 10 : e < 534.3 ? 11 : e < 535.01 ? 12 : e < 535.02 ? "13+" : e < 535.07 ? 15 : e < 535.11 ? 16 : e < 535.19 ? 17 : e < 536.05 ? 18 : e < 536.1 ? 19 : e < 537.01 ? 20 : e < 537.11 ? "21+" : e < 537.13 ? 23 : e < 537.18 ? 24 : e < 537.24 ? 25 : e < 537.36 ? 26 : s != "Blink" ? "27" : "28")), s && (s[1] += " " + (e += typeof e == "number" ? ".x" : /[.+]/.test(e) ? "" : "+")), t == "Safari" && (!n || parseInt(n) > 45) ? n = e : t == "Chrome" && /\bHeadlessChrome/i.test(i) && o.unshift("headless")), t == "Opera" && (e = /\bzbov|zvav$/.exec(r)) ? (t += " ", o.unshift("desktop mode"), e == "zvav" ? (t += "Mini", n = null) : t += "Mobile", r = r.replace(RegExp(" *" + e + "$"), "")) : t == "Safari" && /\bChrome\b/.exec(s && s[1]) ? (o.unshift("desktop mode"), t = "Chrome Mobile", n = null, /\bOS X\b/.test(r) ? (c = "Apple", r = "iOS 4.3+") : r = null) : /\bSRWare Iron\b/.test(t) && !n && (n = D("Chrome")), n && n.indexOf(e = /[\d.]+$/.exec(r)) == 0 && i.indexOf("/" + e + "-") > -1 && (r = K(r.replace(e, ""))), r && r.indexOf(t) != -1 && !RegExp(t + " OS").test(r) && (r = r.replace(RegExp(" *" + m(t) + " *"), "")), s && !/\b(?:Avant|Nook)\b/.test(t) && (/Browser|Lunascape|Maxthon/.test(t) || t != "Safari" && /^iOS/.test(r) && /\bSafari\b/.test(s[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|SRWare Iron|Vivaldi|Web)/.test(t) && s[1]) && (e = s[s.length - 1]) && o.push(e), o.length && (o = ["(" + o.join("; ") + ")"]), c && a && a.indexOf(c) < 0 && o.push("on " + c), a && o.push((/^on /.test(o[o.length - 1]) ? "" : "on ") + a), r && (e = / ([\d.+]+)$/.exec(r), j = e && r.charAt(r.length - e[0].length - 1) == "/", r = {
                        architecture: 32,
                        family: e && !j ? r.replace(e[0], "") : r,
                        version: e ? e[1] : null,
                        toString: function() {
                            var S = this.version;
                            return this.family + (S && !j ? " " + S : "") + (this.architecture == 64 ? " 64-bit" : "")
                        }
                    }), (e = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(I)) && !/\bi686\b/i.test(I) ? (r && (r.architecture = 64, r.family = r.family.replace(RegExp(" *" + e), "")), t && (/\bWOW64\b/i.test(i) || g && /\w(?:86|32)$/.test(d.cpuClass || d.platform) && !/\bWin64; x64\b/i.test(i)) && o.unshift("32-bit")) : r && /^OS X/.test(r.family) && t == "Chrome" && parseFloat(n) >= 39 && (r.architecture = 64), i || (i = null);
                    var h = {};
                    return h.description = i, h.layout = s && s[0], h.manufacturer = c, h.name = t, h.prerelease = F, h.product = a, h.ua = i, h.version = t && n, h.os = r || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function() {
                            return "null"
                        }
                    }, h.parse = R, h.toString = he, h.version && o.unshift(n), h.name && o.unshift(t), r && t && !(r == String(r).split(" ")[0] && (r == t.split(" ")[0] || a)) && o.push(a ? "(" + r + ")" : "on " + r), o.length && (h.description = o.join(" ")), h
                }
                var H = R();
                P.platform = H, T = function() {
                    return H
                }.call(w, C, w, O), T !== void 0 && (O.exports = T)
            }).call(this)
        }
    }
]);

//# sourceMappingURL=https://sourcemaps.squarespace.net/universal/scripts-compressed/sourcemaps/df9f025124218b62d06bae689f846b69/99401-75ecb4f1f4a6cdd699eb-min.en-US.js.map