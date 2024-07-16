"use strict";
(self.webpackChunknew_bedford_framework = self.webpackChunknew_bedford_framework || []).push([
    [4105], {
        17706: function(e, t, i) {
            i.r(t), i.d(t, {
                UserItemsListCarousel: function() {
                    return _
                }
            });
            i(94226);
            var o = i(68651),
                r = i(67373),
                n = i(17228),
                s = i(75396),
                l = i(79287),
                a = i(28408),
                d = i(63285),
                u = i(9330),
                c = i(29762),
                h = i(28058);

            function p(e) {
                return p = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, p(e)
            }

            function m(e, t) {
                var i = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), i.push.apply(i, o)
                }
                return i
            }

            function f(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? m(Object(i), !0).forEach((function(t) {
                        g(e, t, i[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i)) : m(Object(i)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t))
                    }))
                }
                return e
            }

            function S(e, t) {
                for (var i = 0; i < t.length; i++) {
                    var o = t[i];
                    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, C(o.key), o)
                }
            }

            function v(e, t, i) {
                return t = y(t),
                    function(e, t) {
                        if (t && ("object" === p(t) || "function" == typeof t)) return t;
                        if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(e) {
                            if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return e
                        }(e)
                    }(e, w() ? Reflect.construct(t, i || [], y(e).constructor) : t.apply(e, i))
            }

            function w() {
                try {
                    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (e) {}
                return (w = function() {
                    return !!e
                })()
            }

            function y(e) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, y(e)
            }

            function b(e, t) {
                return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
                    return e.__proto__ = t, e
                }, b(e, t)
            }

            function g(e, t, i) {
                return (t = C(t)) in e ? Object.defineProperty(e, t, {
                    value: i,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = i, e
            }

            function C(e) {
                var t = function(e, t) {
                    if ("object" != p(e) || !e) return e;
                    var i = e[Symbol.toPrimitive];
                    if (void 0 !== i) {
                        var o = i.call(e, t || "default");
                        if ("object" != p(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" == p(t) ? t : t + ""
            }
            var A = 0,
                B = 20,
                I = "px",
                x = 576,
                _ = function(e) {
                    function t(e) {
                        var i;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), g(i = v(this, t), "getResponsiveSpaceBetweenSlides", (function(e) {
                            var t = e.spaceValue,
                                i = e.spaceUnit;
                            return window.innerWidth < x && (t = B, i = I), {
                                value: t,
                                unit: i
                            }
                        })), g(i, "getStateFromDOM", (function() {
                            var e = JSON.parse(i.node.dataset.currentContext),
                                t = Object.assign({}, e);
                            return t.userItems.forEach((function(e) {
                                e.image && (e.imageId = e.image.id, delete e.image)
                            })), t
                        })), g(i, "loadImage", (function(e) {
                            e && (e.onload = function() {
                                e.dataset.loaded = !0
                            }, n.A.loadLazy(e, {
                                load: !0,
                                useAdvancedPositioning: !0
                            }))
                        })), g(i, "updateRef", (function() {
                            var e = i.props,
                                t = e.itemSelector,
                                o = e.imageSelector,
                                r = e.contentSelector,
                                n = e.mediaSelector,
                                s = e.mediaInnerSelector,
                                l = e.slidesContainerSelector,
                                a = e.arrowLeftWrapperSelector,
                                d = e.arrowRightWrapperSelector,
                                u = e.arrowsBottomSelector,
                                c = e.parentSectionSelector,
                                h = e.listWrapperSelector,
                                p = e.itemTitleSelector,
                                m = e.itemDescriptionSelector,
                                f = e.itemButtonSelector,
                                S = e.itemButtonContainerSelector,
                                v = e.listTitleSelector,
                                w = e.listButtonWrapperSelector,
                                y = e.listButtonSelector;
                            return {
                                layoutContainer: i.node,
                                userItems: Array.from(i.node.querySelectorAll(t)),
                                images: Array.from(i.node.querySelectorAll(o)),
                                contentContainers: Array.from(i.node.querySelectorAll(r)),
                                mediaContainers: Array.from(i.node.querySelectorAll(n)),
                                mediaInnerContainers: Array.from(i.node.querySelectorAll(s)),
                                slidesContainer: i.node.querySelector(l),
                                arrowLeftWrapper: i.node.querySelector(a),
                                arrowRightWrapper: i.node.querySelector(d),
                                arrowsBottom: i.node.querySelector(u),
                                parentNode: i.node.closest(c),
                                listWrapperElement: i.node.closest(h),
                                itemTitles: Array.from(i.node.querySelectorAll(p)),
                                itemDescriptions: Array.from(i.node.querySelectorAll(m)),
                                itemButtons: Array.from(i.node.querySelectorAll(f)),
                                itemButtonContainers: Array.from(i.node.querySelectorAll(S)),
                                listTitleElement: i.node.parentElement.querySelector(v),
                                listButtonWrapper: i.node.parentElement.querySelector(w),
                                listButtonElement: i.node.parentElement.querySelector(y)
                            }
                        })), g(i, "updateRefCloneItems", (function() {
                            i.ref = i.updateRef()
                        })), g(i, "handleArrowVisibility", (function() {
                            if (!i.isInfiniteEnabled && "arrows" === i.navigationControls) {
                                if (i.slideshowProps.totalSlideCount <= i.getSlideColumnCount()) return i.hideArrow(i.previousBtn), void i.hideArrow(i.nextBtn);
                                i.slideshowProps.targetSlideIndex <= 0 ? i.hideArrow(i.previousBtn) : i.showArrow(i.previousBtn), i.slideshowProps.targetSlideIndex >= i.behaviors.getLastScrollableSlideIndex() ? i.hideArrow(i.nextBtn) : i.showArrow(i.nextBtn)
                            }
                        })), g(i, "onResize", (function() {
                            var e = i.getSlideColumnCount();
                            i.removeClones(), i.slideshowNodes = i.buildItems(i.slides), i.list.props.items = i.slideshowNodes, i.loadImages(i.ref.images), i.list.props.slideshowGutterWidth = i.getSlideshowGutterWidth(), i.list.props.slideColumnCount = e, i.behaviors && (i.behaviors.props.slideColumnCount = e), i.list.props.spacing = i.getResponsiveSpaceBetweenSlides({
                                spaceValue: i.spaceBetweenSlidesValue,
                                spaceUnit: i.spaceBetweenSlidesUnit
                            }), i.list.setSize(i.getSlideshowDimensions()), i.updatePositions(), i.slideshowProps.targetSlideIndex = i.slideshowProps.progressIndex, i.handleArrowVisibility()
                        })), g(i, "removeClones", (function() {
                            i.slidesContainer.innerHTML = "";
                            var e = new DocumentFragment;
                            i.slides.forEach((function(t) {
                                e.appendChild(t)
                            })), i.slidesContainer.appendChild(e)
                        })), g(i, "onClickNavPrevious", (function() {
                            i.behaviors.previousIndex()
                        })), g(i, "onClickNavNext", (function() {
                            i.behaviors.nextIndex()
                        })), g(i, "onProgress", (function(e) {
                            i.slideshowProps.progressIndex = (.5 + e | 0) % i.slideshowProps.totalSlideCount, i.list.setProgress(e), i.updatePositions()
                        })), g(i, "onStartProgress", (function(e) {
                            if (i.slideshowProps.targetSlideIndex = e, i.handleArrowVisibility(), !i.dragBehaviors.isDragging) {
                                var t = i.slideshowNodes.length,
                                    o = Math.round((e + t) % t);
                                i.updateAriaContainer({
                                    currentSlideIndex: o
                                })
                            }
                        })), g(i, "onCloneItem", (function(e) {
                            var t = i.slideshowNodes[e],
                                o = t.node.parentNode,
                                r = t.node.cloneNode(!0);
                            r.querySelectorAll("h1, h2, h3, h4, h5, p, [data-animation-role]").forEach((function(e) {
                                (0, l.x)(e), e.classList.remove(a.g)
                            })), (0, l.x)(r);
                            var n = r.querySelector(i.nodeSelectors.slideshowItemImage);
                            r.dataset.originalItemIndex = t.index, o.appendChild(r), i.slideshowNodes.push(f(f({}, t), {}, {
                                node: r,
                                imageNode: n,
                                isImageLoadAdded: !1,
                                inViewport: null
                            })), i.loadImage(n)
                        })), i.node = e, i.shouldShowAdjacentSlides = "true" === e.getAttribute("data-show-adjacent-slides"), i.isInfiniteEnabled = "true" === e.getAttribute("data-is-infinite-enabled"), i.spaceBetweenSlidesValue = Number(e.getAttribute("data-space-between-slides-value")), i.spaceBetweenSlidesUnit = e.getAttribute("data-space-between-slides-unit"), i.maxColumns = e.getAttribute("data-max-columns"), i.navigationControls = e.getAttribute("data-navigation-controls"), i.nodeSelectors = {
                            slideshowWidthConstrainer: ".user-items-list-carousel__gutter",
                            slidesContainer: ".user-items-list-carousel__slides",
                            slide: ".user-items-list-carousel__slide",
                            slideshowItemImage: ".user-items-list-carousel__media",
                            previousBtn: ".user-items-list-carousel__arrow-button--left",
                            nextBtn: ".user-items-list-carousel__arrow-button--right",
                            previousBtnMobile: ".mobile-arrow-button--left",
                            nextBtnMobile: ".mobile-arrow-button--right"
                        }, i.classNames = {
                            isSlideshowInitialized: "user-items-list-carousel__slides--initialized",
                            isArrowHidden: "user-items-list-carousel__arrow-button--hidden"
                        };
                        var o = i.props,
                            r = o.unorderedListSelector,
                            s = o.itemSelector,
                            d = o.imageSelector,
                            u = o.contentSelector,
                            c = o.mediaSelector,
                            h = o.mediaInnerSelector,
                            p = o.slidesContainerSelector,
                            m = o.arrowLeftWrapperSelector,
                            S = o.arrowRightWrapperSelector,
                            w = o.parentSectionSelector,
                            y = o.itemTitleSelector,
                            b = o.itemDescriptionSelector,
                            C = o.itemButtonSelector,
                            _ = o.itemButtonContainerSelector,
                            P = o.listWrapperSelector,
                            k = o.listTitleSelector,
                            W = o.listButtonWrapperSelector,
                            q = o.listButtonSelector,
                            E = o.arrowsBottomSelector;
                        return i.ref = {
                            unorderedList: i.node.querySelector(r),
                            layoutContainer: i.node,
                            userItems: Array.from(i.node.querySelectorAll(s)),
                            images: Array.from(i.node.querySelectorAll(d)),
                            contentContainers: Array.from(i.node.querySelectorAll(u)),
                            mediaContainers: Array.from(i.node.querySelectorAll(c)),
                            mediaInnerContainers: Array.from(i.node.querySelectorAll(h)),
                            slidesContainer: i.node.querySelector(p),
                            arrowLeftWrapper: i.node.querySelector(m),
                            arrowRightWrapper: i.node.querySelector(S),
                            arrowsBottom: i.node.querySelector(E),
                            itemTitles: Array.from(i.node.querySelectorAll(y)),
                            itemDescriptions: Array.from(i.node.querySelectorAll(b)),
                            itemButtons: Array.from(i.node.querySelectorAll(C)),
                            itemButtonContainers: Array.from(i.node.querySelectorAll(_)),
                            parentNode: i.node.closest(w),
                            listWrapperElement: i.node.closest(P),
                            listTitleElement: i.node.parentElement.querySelector(k),
                            listButtonWrapper: i.node.parentElement.querySelector(W),
                            listButtonElement: i.node.parentElement.querySelector(q)
                        }, i.sectionId = i.node.dataset.sectionId, i.state = i.getStateFromDOM(), i.initializeSlideshowDom(), i.initializeSlideshowBehaviors(), i.initializeSlideshowProperties(), i.initializeDragBehaviors(), i.initializeSlideshow(), i.behaviors.setIndex(A, {
                            isInstant: !0
                        }), i
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(e, "prototype", {
                            writable: !1
                        }), t && b(e, t)
                    }(t, e), i = t, (r = [{
                        key: "loadImages",
                        value: function(e) {
                            e.forEach(this.loadImage)
                        }
                    }, {
                        key: "addAriaContainer",
                        value: function(e) {
                            var t = e.targetElement,
                                i = document.createElement("div");
                            i.setAttribute("aria-live", "polite"), i.setAttribute("aria-atomic", "true"), i.setAttribute("style", "position: absolute; pointer-events: none; opacity: 0;"), t.appendChild(i), this.ariaContainer = i
                        }
                    }, {
                        key: "updateAriaContainer",
                        value: function(e) {
                            var t = e.currentSlideIndex,
                                i = this.slideshowNodes.length;
                            this.ariaContainer.innerHTML = "Item ".concat(t + 1, " of ").concat(i)
                        }
                    }, {
                        key: "initializeSlideshowDom",
                        value: function() {
                            this.loadImages(this.ref.images), this.slideshowWidthConstrainer = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer), this.slidesContainer = this.node.querySelector(this.nodeSelectors.slidesContainer), this.previousBtn = this.node.querySelector(this.nodeSelectors.previousBtn), this.nextBtn = this.node.querySelector(this.nodeSelectors.nextBtn), this.previousBtnMobile = this.node.querySelector(this.nodeSelectors.previousBtnMobile), this.nextBtnMobile = this.node.querySelector(this.nodeSelectors.nextBtnMobile), this.slides = Array.from(this.node.querySelectorAll(this.nodeSelectors.slide)), this.slideshowNodes = this.buildItems(this.slides), this.addAriaContainer({
                                targetElement: this.slideshowWidthConstrainer
                            })
                        }
                    }, {
                        key: "initializeSlideshowBehaviors",
                        value: function() {
                            this.behaviors = new u.A({
                                nodes: {
                                    focus: this.slideshowWidthConstrainer
                                },
                                numSlides: this.slideshowNodes.length,
                                slideColumnCount: this.getSlideColumnCount(),
                                isAutoplay: !1,
                                autoplayInterval: 3e3,
                                isInfinite: this.isInfiniteEnabled,
                                transitionDuration: 250,
                                onProgress: this.onProgress,
                                onStartProgress: this.onStartProgress,
                                shouldStopNavAtEnds: !0
                            }), this.list = new h.A(f(f({
                                items: this.slideshowNodes
                            }, this.getSlideshowDimensions()), {}, {
                                spacing: this.getResponsiveSpaceBetweenSlides({
                                    spaceValue: this.spaceBetweenSlidesValue,
                                    spaceUnit: this.spaceBetweenSlidesUnit
                                }),
                                isInfinite: this.isInfiniteEnabled,
                                onCloneItem: this.onCloneItem,
                                slideshowGutterWidth: this.getSlideshowGutterWidth(),
                                onRedraw: this.updateRefCloneItems
                            }))
                        }
                    }, {
                        key: "destroySlideshow",
                        value: function() {
                            this.behaviors && this.behaviors.destroy(), this.list && this.list.destroy()
                        }
                    }, {
                        key: "initializeSlideshowProperties",
                        value: function() {
                            this.slideshowProps = {
                                slideDimensions: this.list.props.items[0],
                                totalSlideCount: this.slideshowNodes.length,
                                progress: 0,
                                progressIndex: 0,
                                targetSlideIndex: 0
                            }
                        }
                    }, {
                        key: "initializeDragBehaviors",
                        value: function() {
                            var e = this.node.querySelector(this.nodeSelectors.slideshowWidthConstrainer);
                            this.dragBehaviors = new c.A(e, {
                                slideshowProps: this.slideshowProps,
                                behaviors: this.behaviors,
                                callback: this.handleArrowVisibility
                            })
                        }
                    }, {
                        key: "initializeSlideshow",
                        value: function() {
                            this.updatePositions(), this.slidesContainer.classList.add(this.classNames.isSlideshowInitialized), this.bindListeners(), this.handleArrowVisibility(), this.updateAriaContainer({
                                currentSlideIndex: 0
                            })
                        }
                    }, {
                        key: "hideArrow",
                        value: function(e) {
                            e && (e.classList.add(this.classNames.isArrowHidden), e.setAttribute("tabindex", "-1"), e.setAttribute("data-override-initial-global-animation", ""))
                        }
                    }, {
                        key: "showArrow",
                        value: function(e) {
                            e && (e.classList.remove(this.classNames.isArrowHidden), e.setAttribute("tabindex", "0"), e.removeAttribute("data-override-initial-global-animation"))
                        }
                    }, {
                        key: "getSlideColumnCount",
                        value: function() {
                            var e = this,
                                t = window.innerWidth,
                                i = 1;
                            return Object.values({
                                "breakpoint-up-sm": {
                                    minScreenWidth: 576,
                                    columnsWeHaveRoomFor: 2
                                },
                                "breakpoint-up-lg": {
                                    minScreenWidth: 992,
                                    columnsWeHaveRoomFor: 3
                                },
                                "breakpoint-up-xxl": {
                                    minScreenWidth: 1200,
                                    columnsWeHaveRoomFor: 4
                                }
                            }).forEach((function(o) {
                                t >= o.minScreenWidth && (i = Math.min(o.columnsWeHaveRoomFor, e.maxColumns))
                            })), i
                        }
                    }, {
                        key: "getSlideshowGutterWidth",
                        value: function() {
                            var e = this.slidesContainer.getBoundingClientRect();
                            return this.slidesContainer.offsetWidth / e.width * (e.x - this.slideshowWidthConstrainer.getBoundingClientRect().x)
                        }
                    }, {
                        key: "bindListeners",
                        value: function() {
                            var e, t, i, r;
                            "none" !== this.state.options.navigationControls && (null === (i = this.previousBtn) || void 0 === i || i.addEventListener("click", this.onClickNavPrevious), null === (r = this.nextBtn) || void 0 === r || r.addEventListener("click", this.onClickNavNext)), null === (e = this.previousBtnMobile) || void 0 === e || e.addEventListener("click", this.onClickNavPrevious), null === (t = this.nextBtnMobile) || void 0 === t || t.addEventListener("click", this.onClickNavNext), this.onResize = (0, s.A)(this.onResize, d.X0), o.A.on(this.onResize)
                        }
                    }, {
                        key: "unbindListeners",
                        value: function() {
                            var e, t, i, r;
                            "none" !== this.state.options.navigationControls && (null === (i = this.previousBtn) || void 0 === i || i.removeEventListener("click", this.onClickNavPrevious), null === (r = this.nextBtn) || void 0 === r || r.removeEventListener("click", this.onClickNavNext)), null === (e = this.previousBtnMobile) || void 0 === e || e.removeEventListener("click", this.onClickNavPrevious), null === (t = this.nextBtnMobile) || void 0 === t || t.removeEventListener("click", this.onClickNavNext), o.A.off(this.onResize)
                        }
                    }, {
                        key: "getSlideshowDimensions",
                        value: function() {
                            var e = this.slideshowWidthConstrainer.offsetWidth,
                                t = this.slideshowWidthConstrainer.offsetHeight;
                            return {
                                regionWidth: e,
                                regionHeight: t,
                                maxWidth: e,
                                maxHeight: t
                            }
                        }
                    }, {
                        key: "setItemIndex",
                        value: function(e) {
                            for (var t = 0; t < e.length; t++) e[t].length && A !== t && (A = t, this.behaviors.setIndex(A))
                        }
                    }, {
                        key: "buildItems",
                        value: function(e) {
                            var t = this;
                            return e.map((function(e, i) {
                                return {
                                    width: e.offsetWidth,
                                    height: e.offsetHeight,
                                    index: i,
                                    node: e,
                                    imageNode: e.querySelector(t.nodeSelectors.slideshowItemImage),
                                    isImageLoadAdded: !1,
                                    inViewport: null
                                }
                            }))
                        }
                    }, {
                        key: "updatePositions",
                        value: function() {
                            for (var e = [], t = 0, i = this.slideshowNodes.length; t < i; t += 1) {
                                var o = this.slideshowNodes[t],
                                    r = this.list.items[t],
                                    n = !r.inViewport,
                                    s = o.inViewport !== r.inViewport;
                                n ? o.node.setAttribute("aria-hidden", !0) : (o.node.removeAttribute("aria-hidden"), e.push(o.node)), (o.inViewport || s) && (o.node.style.transform = "translate3d(" + r.x + "px, 0, 0)", o.inViewport = r.inViewport)
                            }
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            this.behaviors && (this.behaviors.destroy(), delete this.behaviors), this.dragBehaviors && (this.dragBehaviors.destroy(), delete this.dragBehaviors), this.unbindListeners()
                        }
                    }]) && S(i.prototype, r), p && S(i, p), Object.defineProperty(i, "prototype", {
                        writable: !1
                    }), i;
                    var i, r, p
                }(r.A);
            g(_, "defaultProps", {
                unorderedListSelector: ".user-items-list-carousel__slides",
                itemSelector: ".list-item",
                imageSelector: "img",
                contentSelector: ".list-item-content",
                mediaSelector: ".user-items-list-carousel__media-container",
                mediaInnerSelector: ".user-items-list-carousel__media-inner",
                itemTitleSelector: ".list-item-content__title",
                itemDescriptionSelector: ".list-item-content__description",
                itemButtonContainerSelector: ".list-item-content__button-container",
                itemButtonSelector: ".list-item-content__button",
                slidesContainerSelector: ".user-items-list-carousel__slides",
                arrowLeftWrapperSelector: ".user-items-list-carousel__arrow-wrapper--left",
                arrowRightWrapperSelector: ".user-items-list-carousel__arrow-wrapper--right",
                arrowContainerSelector: ".user-items-list-carousel__arrow-container",
                arrowPositionerSelector: ".user-items-list-carousel__arrow-positioner",
                parentSectionSelector: ".user-items-list-section",
                listWrapperSelector: ".user-items-list",
                hideElementClass: "list-item-content--hidden",
                listTitleSelector: ".list-section-title",
                listButtonWrapperSelector: ".list-section-button-container",
                listButtonSelector: ".list-section-button",
                arrowsBottomSelector: ".arrows-bottom-wrapper"
            }), t.default = function(e) {
                return new _(e)
            }
        }
    }
]);