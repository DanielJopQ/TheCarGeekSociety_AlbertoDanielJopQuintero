"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [2877], {
        8481: function(e, n) {
            n.T3 = "UserAccountApi", n.f5 = "isUserAuthenticated", n.ir = "openAccountScreen"
        },
        80110: function(e, n, t) {
            t.r(n);
            var o = t(8481);
            n.default = function(e) {
                var n = function(e) {
                        e.preventDefault();
                        var n = window[o.T3][o.ir];
                        "function" == typeof n ? n() : console.warn("UserAccounts API not available")
                    },
                    t = function() {
                        var t;
                        if (null !== document.querySelector(".sqs-edit-mode-active")) t = ".auth";
                        else {
                            if (!window[o.T3] || !window[o.T3][o.f5]) return void console.warn("UserAccounts API not available");
                            t = (0, window[o.T3][o.f5])() ? ".unauth" : ".auth", e.querySelector(".user-accounts-text-link").addEventListener("click", n)
                        }
                        var r = e.querySelector(".user-accounts-text-link"),
                            c = r.querySelector(t);
                        c && r.removeChild(c), e.classList.add("loaded")
                    };
                "complete" === document.readyState ? t() : window.addEventListener("load", t)
            }
        }
    }
]);