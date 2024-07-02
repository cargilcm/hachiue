/*!
 * wavesurfer.js regions plugin 6.6.4 (2023-06-10)
 * https://wavesurfer-js.org
 * @license BSD-3-Clause
 */
!(function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? (module.exports = t())
        : "function" == typeof define && define.amd
        ? define("WaveSurfer", [], t)
        : "object" == typeof exports
        ? (exports.WaveSurfer = t())
        : ((e.WaveSurfer = e.WaveSurfer || {}), (e.WaveSurfer.regions = t()));
})(self, () =>
    (() => {
        "use strict";
        var e = {
                23: (e, t, r) => {
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = void 0);
                    var n = r(638);
                    function i(e) {
                        return (
                            (i =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      }),
                            i(e)
                        );
                    }
                    function a(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t &&
                                (n = n.filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })),
                                r.push.apply(r, n);
                        }
                        return r;
                    }
                    function s(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? a(Object(r), !0).forEach(function (t) {
                                      o(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                : a(Object(r)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                  });
                        }
                        return e;
                    }
                    function o(e, t, r) {
                        return (t = u(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                    }
                    function l(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, u(n.key), n);
                        }
                    }
                    function u(e) {
                        var t = (function (e, t) {
                            if ("object" !== i(e) || null === e) return e;
                            var r = e[Symbol.toPrimitive];
                            if (void 0 !== r) {
                                var n = r.call(e, t || "default");
                                if ("object" !== i(n)) return n;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        })(e, "string");
                        return "symbol" === i(t) ? t : String(t);
                    }
                    var h = (function () {
                        function e(t, r) {
                            var i = this;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.params = t),
                                (this.wavesurfer = r),
                                (this.util = s(
                                    s({}, r.util),
                                    {},
                                    {
                                        getRegionSnapToGridValue: function (e) {
                                            return i.getRegionSnapToGridValue(e, t);
                                        },
                                    }
                                )),
                                (this.maxRegions = t.maxRegions),
                                (this.regionsMinLength = t.regionsMinLength || null),
                                Object.getOwnPropertyNames(this.util.Observer.prototype).forEach(function (e) {
                                    n.Region.prototype[e] = i.util.Observer.prototype[e];
                                }),
                                (this.wavesurfer.Region = n.Region);
                            (this._onBackendCreated = function () {
                                (i.wrapper = i.wavesurfer.drawer.wrapper),
                                    (i.orientation = i.wavesurfer.drawer.orientation),
                                    (i.defaultEdgeScrollWidth = 0.05 * i.wrapper.clientWidth),
                                    i.params.regions &&
                                        i.params.regions.forEach(function (e) {
                                            i.add(e);
                                        });
                            }),
                                (this.list = {}),
                                (this._onReady = function () {
                                    (i.wrapper = i.wavesurfer.drawer.wrapper),
                                        (i.vertical = i.wavesurfer.drawer.params.vertical),
                                        i.params.dragSelection && i.enableDragSelection(i.params),
                                        Object.keys(i.list).forEach(function (e) {
                                            i.list[e].updateRender();
                                        });
                                });
                        }
                        var t, r, i;
                        return (
                            (t = e),
                            (i = [
                                {
                                    key: "create",
                                    value: function (t) {
                                        return {
                                            name: "regions",
                                            deferInit: !(!t || !t.deferInit) && t.deferInit,
                                            params: t,
                                            staticProps: {
                                                addRegion: function (e) {
                                                    return this.initialisedPluginList.regions || this.initPlugin("regions"), this.regions.add(e);
                                                },
                                                clearRegions: function () {
                                                    this.regions && this.regions.clear();
                                                },
                                                enableDragSelection: function (e) {
                                                    this.initialisedPluginList.regions || this.initPlugin("regions"), this.regions.enableDragSelection(e);
                                                },
                                                disableDragSelection: function () {
                                                    this.regions.disableDragSelection();
                                                },
                                            },
                                            instance: e,
                                        };
                                    },
                                },
                            ]),
                            (r = [
                                {
                                    key: "init",
                                    value: function () {
                                        this.wavesurfer.isReady ? (this._onBackendCreated(), this._onReady()) : (this.wavesurfer.once("ready", this._onReady), this.wavesurfer.once("backend-created", this._onBackendCreated));
                                    },
                                },
                                {
                                    key: "destroy",
                                    value: function () {
                                        this.wavesurfer.un("ready", this._onReady),
                                            this.wavesurfer.un("backend-created", this._onBackendCreated),
                                            this.wavesurfer.setDisabledEventEmissions(["region-removed"]),
                                            this.disableDragSelection(),
                                            this.clear();
                                    },
                                },
                                {
                                    key: "wouldExceedMaxRegions",
                                    value: function () {
                                        return this.maxRegions && Object.keys(this.list).length >= this.maxRegions;
                                    },
                                },
                                {
                                    key: "add",
                                    value: function (e) {
                                        var t = this;
                                        if (this.wouldExceedMaxRegions()) return null;
                                        !(e = s({ edgeScrollWidth: this.params.edgeScrollWidth || this.defaultEdgeScrollWidth, contentEditable: this.params.contentEditable, removeButton: this.params.removeButton }, e)).formatTimeCallback &&
                                            this.params.formatTimeCallback &&
                                            (e = s(s({}, e), {}, { formatTimeCallback: this.params.formatTimeCallback })),
                                            !e.minLength && this.regionsMinLength && (e = s(s({}, e), {}, { minLength: this.regionsMinLength }));
                                        var r = new this.wavesurfer.Region(e, this.util, this.wavesurfer);
                                        return (
                                            (this.list[r.id] = r),
                                            r.on("remove", function () {
                                                delete t.list[r.id];
                                            }),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "clear",
                                    value: function () {
                                        var e = this;
                                        Object.keys(this.list).forEach(function (t) {
                                            e.list[t].remove();
                                        });
                                    },
                                },
                                {
                                    key: "enableDragSelection",
                                    value: function (e) {
                                        var t = this;
                                        this.disableDragSelection();
                                        var r,
                                            n,
                                            i,
                                            a,
                                            s,
                                            o,
                                            l,
                                            u = e.slop || 2,
                                            h = this.wavesurfer.drawer.container,
                                            d = !1 !== e.scroll && this.wavesurfer.params.scrollParent,
                                            c = e.scrollSpeed || 1,
                                            f = e.scrollThreshold || 10,
                                            v = this.wavesurfer.getDuration(),
                                            p = 0,
                                            g = function e(r) {
                                                if (a && o) {
                                                    var s = t.wrapper.scrollLeft + c * o;
                                                    t.wrapper.scrollLeft = s = Math.min(n, Math.max(0, s));
                                                    var l = t.wavesurfer.drawer.handleEvent(r);
                                                    a.update({ start: Math.min(l * v, i * v), end: Math.max(l * v, i * v) }),
                                                        s < n &&
                                                            s > 0 &&
                                                            window.requestAnimationFrame(function () {
                                                                e(r);
                                                            });
                                                }
                                            },
                                            m = function (u) {
                                                if (!(u.touches && u.touches.length > 1)) {
                                                    if (
                                                        ((v = t.wavesurfer.getDuration()),
                                                        (s = u.targetTouches ? u.targetTouches[0].identifier : null),
                                                        (n = t.wrapper.scrollWidth - t.wrapper.clientWidth),
                                                        (l = t.util.withOrientation(t.wrapper.getBoundingClientRect(), t.vertical)),
                                                        t.wavesurfer.params.splitChannels && t.wavesurfer.params.splitChannelsOptions.splitDragSelection)
                                                    ) {
                                                        var h = (u.touches ? u.touches[0].clientY : u.clientY) - l.top,
                                                            d = null != t.wavesurfer.backend.buffer ? t.wavesurfer.backend.buffer.numberOfChannels : 1,
                                                            c = t.wrapper.clientHeight / d,
                                                            f = Math.floor(h / c);
                                                        e.channelIdx = f;
                                                        var p = t.wavesurfer.params.splitChannelsOptions.channelColors[f];
                                                        p && p.dragColor && (e.color = p.dragColor);
                                                    }
                                                    (r = !0), (i = t.wavesurfer.drawer.handleEvent(u, !0)), (a = null), (o = null);
                                                }
                                            };
                                        this.wrapper.addEventListener("mousedown", m),
                                            this.wrapper.addEventListener("touchstart", m),
                                            this.on("disable-drag-selection", function () {
                                                t.wrapper.removeEventListener("touchstart", m), t.wrapper.removeEventListener("mousedown", m);
                                            });
                                        var w = function (e) {
                                            (e.touches && e.touches.length > 1) || ((r = !1), (p = 0), (o = null), a && (t.util.preventClick(), a.fireEvent("update-end", e), t.wavesurfer.fireEvent("region-update-end", a, e)), (a = null));
                                        };
                                        this.wrapper.addEventListener("mouseleave", w),
                                            this.wrapper.addEventListener("mouseup", w),
                                            this.wrapper.addEventListener("touchend", w),
                                            document.body.addEventListener("mouseup", w),
                                            document.body.addEventListener("touchend", w),
                                            this.on("disable-drag-selection", function () {
                                                document.body.removeEventListener("mouseup", w),
                                                    document.body.removeEventListener("touchend", w),
                                                    t.wrapper.removeEventListener("touchend", w),
                                                    t.wrapper.removeEventListener("mouseup", w),
                                                    t.wrapper.removeEventListener("mouseleave", w);
                                            });
                                        var b = function (n) {
                                            if (r && !(++p <= u) && !(n.touches && n.touches.length > 1) && (!n.targetTouches || n.targetTouches[0].identifier == s) && (a || (a = t.add(e || {})))) {
                                                var c = t.wavesurfer.drawer.handleEvent(n),
                                                    m = t.wavesurfer.regions.util.getRegionSnapToGridValue(i * v),
                                                    w = t.wavesurfer.regions.util.getRegionSnapToGridValue(c * v);
                                                a.update({ start: Math.min(w, m), end: Math.max(w, m) });
                                                var b = t.util.withOrientation(n, t.vertical);
                                                if (d && h.clientWidth < t.wrapper.scrollWidth) {
                                                    var y = b.clientX - l.left;
                                                    (o = y <= f ? -1 : y >= l.right - f ? 1 : null) && g(n);
                                                }
                                            }
                                        };
                                        this.wrapper.addEventListener("mousemove", b),
                                            this.wrapper.addEventListener("touchmove", b),
                                            this.on("disable-drag-selection", function () {
                                                t.wrapper.removeEventListener("touchmove", b), t.wrapper.removeEventListener("mousemove", b);
                                            }),
                                            this.wavesurfer.on("region-created", function (e) {
                                                t.regionsMinLength && (e.minLength = t.regionsMinLength);
                                            });
                                    },
                                },
                                {
                                    key: "disableDragSelection",
                                    value: function () {
                                        this.fireEvent("disable-drag-selection");
                                    },
                                },
                                {
                                    key: "getCurrentRegion",
                                    value: function () {
                                        var e = this,
                                            t = this.wavesurfer.getCurrentTime(),
                                            r = null;
                                        return (
                                            Object.keys(this.list).forEach(function (n) {
                                                var i = e.list[n];
                                                i.start <= t && i.end >= t && (!r || i.end - i.start < r.end - r.start) && (r = i);
                                            }),
                                            r
                                        );
                                    },
                                },
                                {
                                    key: "getRegionSnapToGridValue",
                                    value: function (e, t) {
                                        if (t.snapToGridInterval) {
                                            var r = t.snapToGridOffset || 0;
                                            return Math.round((e - r) / t.snapToGridInterval) * t.snapToGridInterval + r;
                                        }
                                        return e;
                                    },
                                },
                            ]) && l(t.prototype, r),
                            i && l(t, i),
                            Object.defineProperty(t, "prototype", { writable: !1 }),
                            e
                        );
                    })();
                    (t.default = h), (e.exports = t.default);
                },
                638: (e, t) => {
                    function r(e) {
                        return (
                            (r =
                                "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
                                    ? function (e) {
                                          return typeof e;
                                      }
                                    : function (e) {
                                          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
                                      }),
                            r(e)
                        );
                    }
                    function n(e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            t &&
                                (n = n.filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(e, t).enumerable;
                                })),
                                r.push.apply(r, n);
                        }
                        return r;
                    }
                    function i(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2
                                ? n(Object(r), !0).forEach(function (t) {
                                      a(e, t, r[t]);
                                  })
                                : Object.getOwnPropertyDescriptors
                                ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
                                : n(Object(r)).forEach(function (t) {
                                      Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                                  });
                        }
                        return e;
                    }
                    function a(e, t, r) {
                        return (t = o(t)) in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
                    }
                    function s(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            (n.enumerable = n.enumerable || !1), (n.configurable = !0), "value" in n && (n.writable = !0), Object.defineProperty(e, o(n.key), n);
                        }
                    }
                    function o(e) {
                        var t = (function (e, t) {
                            if ("object" !== r(e) || null === e) return e;
                            var n = e[Symbol.toPrimitive];
                            if (void 0 !== n) {
                                var i = n.call(e, t || "default");
                                if ("object" !== r(i)) return i;
                                throw new TypeError("@@toPrimitive must return a primitive value.");
                            }
                            return ("string" === t ? String : Number)(e);
                        })(e, "string");
                        return "symbol" === r(t) ? t : String(t);
                    }
                    Object.defineProperty(t, "__esModule", { value: !0 }), (t.Region = void 0);
                    var l = (function () {
                        function e(t, r, n) {
                            var i,
                                a = this;
                            !(function (e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
                            })(this, e),
                                (this.wavesurfer = n),
                                (this.wrapper = n.drawer.wrapper),
                                (this.util = n.util),
                                (this.style = this.util.style),
                                (this.regionsUtil = r),
                                (this.vertical = n.drawer.params.vertical),
                                (this.id = null == t.id ? n.util.getId() : t.id),
                                (this.start = Number(t.start) || 0),
                                (this.end = null == t.end ? this.start + (4 / this.wrapper.scrollWidth) * this.wavesurfer.getDuration() : Number(t.end)),
                                (this.resize = void 0 === t.resize || Boolean(t.resize)),
                                (this.drag = void 0 === t.drag || Boolean(t.drag)),
                                (this.contentEditable = Boolean(t.contentEditable)),
                                (this.removeButton = Boolean(t.removeButton)),
                                (this.isResizing = !1),
                                (this.isDragging = !1),
                                (this.loop = Boolean(t.loop)),
                                (this.color = t.color || "rgba(0, 0, 0, 0.1)"),
                                (this.handleStyle = t.handleStyle || { left: {}, right: {} }),
                                (this.handleLeftEl = null),
                                (this.handleRightEl = null),
                                (this.data = t.data || {}),
                                (this.attributes = t.attributes || {}),
                                (this.showTooltip = null === (i = t.showTooltip) || void 0 === i || i),
                                (this.maxLength = t.maxLength),
                                (this.minLength = t.minLength),
                                (this._onRedraw = function () {
                                    return a.updateRender();
                                }),
                                (this.scroll = !1 !== t.scroll && n.params.scrollParent),
                                (this.scrollSpeed = t.scrollSpeed || 1),
                                (this.scrollThreshold = t.scrollThreshold || 10),
                                (this.preventContextMenu = void 0 !== t.preventContextMenu && Boolean(t.preventContextMenu));
                            var s = null == t.channelIdx ? -1 : parseInt(t.channelIdx);
                            if (((this.channelIdx = s), (this.regionHeight = "100%"), (this.marginTop = "0px"), -1 !== s)) {
                                var o = null != this.wavesurfer.backend.buffer ? this.wavesurfer.backend.buffer.numberOfChannels : -1;
                                o >= 0 && s < o && ((this.regionHeight = Math.floor((1 / o) * 100) + "%"), (this.marginTop = this.wavesurfer.getHeight() * s + "px"));
                            }
                            (this.formatTimeCallback = t.formatTimeCallback),
                                (this.edgeScrollWidth = t.edgeScrollWidth),
                                this.bindInOut(),
                                this.render(),
                                this.wavesurfer.on("zoom", this._onRedraw),
                                this.wavesurfer.on("redraw", this._onRedraw),
                                this.wavesurfer.fireEvent("region-created", this);
                        }
                        var t, r, n;
                        return (
                            (t = e),
                            (r = [
                                {
                                    key: "update",
                                    value: function (e, t) {
                                        null != e.start && (this.start = Number(e.start)),
                                            null != e.end && (this.end = Number(e.end)),
                                            null != e.loop && (this.loop = Boolean(e.loop)),
                                            null != e.color && (this.color = e.color),
                                            null != e.handleStyle && (this.handleStyle = e.handleStyle),
                                            null != e.data && (this.data = e.data),
                                            null != e.resize && ((this.resize = Boolean(e.resize)), this.updateHandlesResize(this.resize)),
                                            null != e.drag && (this.drag = Boolean(e.drag)),
                                            null != e.maxLength && (this.maxLength = Number(e.maxLength)),
                                            null != e.minLength && (this.minLength = Number(e.minLength)),
                                            null != e.attributes && (this.attributes = e.attributes),
                                            this.updateRender(),
                                            this.fireEvent("update"),
                                            this.wavesurfer.fireEvent("region-updated", this, t);
                                    },
                                },
                                {
                                    key: "remove",
                                    value: function () {
                                        this.element &&
                                            (this.element.remove(),
                                            (this.element = null),
                                            this.fireEvent("remove"),
                                            this.wavesurfer.un("zoom", this._onRedraw),
                                            this.wavesurfer.un("redraw", this._onRedraw),
                                            this.wavesurfer.fireEvent("region-removed", this));
                                    },
                                },
                                {
                                    key: "play",
                                    value: function (e) {
                                        var t = e || this.start;
                                        this.wavesurfer.play(t, this.end), this.fireEvent("play"), this.wavesurfer.fireEvent("region-play", this);
                                    },
                                },
                                {
                                    key: "playLoop",
                                    value: function (e) {
                                        (this.loop = !0), this.play(e);
                                    },
                                },
                                {
                                    key: "setLoop",
                                    value: function (e) {
                                        this.loop = e;
                                    },
                                },
                                {
                                    key: "render",
                                    value: function () {
                                        for (var e in ((this.element = this.util.withOrientation(this.wrapper.appendChild(document.createElement("region")), this.vertical)),
                                        (this.element.className = "wavesurfer-region"),
                                        this.showTooltip && (this.element.title = this.formatTime(this.start, this.end)),
                                        this.element.setAttribute("data-id", this.id),
                                        this.attributes))
                                            this.element.setAttribute("data-region-" + e, this.attributes[e]);
                                        if ((this.style(this.element, { position: "absolute", zIndex: 3, height: this.regionHeight, top: this.marginTop }), this.removeButton)) {
                                            var t = document.createElement("div");
                                            (t.className = "remove-region-button"),
                                                (t.textContent = "⨯"),
                                                (this.removeButtonEl = this.element.appendChild(t)),
                                                this.style(this.removeButtonEl, { zIndex: 4, position: "absolute", bottom: 0, right: "4px", cursor: "pointer", fontSize: "20px", lineHeight: "21px", color: "grey" });
                                        }
                                        if (this.contentEditable) {
                                            var r = document.createElement("div");
                                            (r.className = "region-content"),
                                                (r.contentEditable = "true"),
                                                (r.innerText = this.data.text || ""),
                                                (this.contentEl = this.element.appendChild(r)),
                                                this.style(this.contentEl, { zIndex: 4, padding: "2px 5px", cursor: "text" });
                                        }
                                        if (this.resize) {
                                            (this.handleLeftEl = this.util.withOrientation(this.element.appendChild(document.createElement("handle")), this.vertical)),
                                                (this.handleRightEl = this.util.withOrientation(this.element.appendChild(document.createElement("handle")), this.vertical)),
                                                (this.handleLeftEl.className = "wavesurfer-handle wavesurfer-handle-start"),
                                                (this.handleRightEl.className = "wavesurfer-handle wavesurfer-handle-end");
                                            var n = { cursor: this.vertical ? "row-resize" : "col-resize", position: "absolute", top: "0px", width: "2px", height: "100%", backgroundColor: "rgba(0, 0, 0, 1)" },
                                                i = "none" !== this.handleStyle.left ? Object.assign({ left: "0px" }, n, this.handleStyle.left) : null,
                                                a = "none" !== this.handleStyle.right ? Object.assign({ right: "0px" }, n, this.handleStyle.right) : null;
                                            i && this.style(this.handleLeftEl, i), a && this.style(this.handleRightEl, a);
                                        }
                                        this.updateRender(), this.bindEvents();
                                    },
                                },
                                {
                                    key: "formatTime",
                                    value: function (e, t) {
                                        return this.formatTimeCallback
                                            ? this.formatTimeCallback(e, t)
                                            : (e == t ? [e] : [e, t])
                                                  .map(function (e) {
                                                      return [Math.floor((e % 3600) / 60), ("00" + Math.floor(e % 60)).slice(-2)].join(":");
                                                  })
                                                  .join("-");
                                    },
                                },
                                {
                                    key: "getWidth",
                                    value: function () {
                                        return this.wavesurfer.drawer.width / this.wavesurfer.params.pixelRatio;
                                    },
                                },
                                {
                                    key: "updateRender",
                                    value: function () {
                                        var e = this.wavesurfer.getDuration(),
                                            t = this.getWidth(),
                                            r = this.start,
                                            n = this.end;
                                        if (
                                            (r < 0 && (n -= r = 0),
                                            n > e && (r = e - ((n = e) - r)),
                                            null != this.minLength && (n = Math.max(r + this.minLength, n)),
                                            null != this.maxLength && (n = Math.min(r + this.maxLength, n)),
                                            null != this.element)
                                        ) {
                                            var i = Math.round((r / e) * t),
                                                a = Math.round((n / e) * t) - i;
                                            for (var s in (this.style(this.element, { left: i + "px", width: a + "px", backgroundColor: this.color, cursor: this.drag ? "move" : "default" }), this.attributes))
                                                this.element.setAttribute("data-region-" + s, this.attributes[s]);
                                            this.showTooltip && (this.element.title = this.formatTime(this.start, this.end));
                                        }
                                    },
                                },
                                {
                                    key: "bindInOut",
                                    value: function () {
                                        var e = this;
                                        (this.firedIn = !1), (this.firedOut = !1);
                                        var t = function (t) {
                                            var r = Math.round(10 * e.start) / 10,
                                                n = Math.round(10 * e.end) / 10;
                                            (t = Math.round(10 * t) / 10),
                                                !e.firedOut && e.firedIn && (r > t || n <= t) && ((e.firedOut = !0), (e.firedIn = !1), e.fireEvent("out"), e.wavesurfer.fireEvent("region-out", e)),
                                                !e.firedIn && r <= t && n > t && ((e.firedIn = !0), (e.firedOut = !1), e.fireEvent("in"), e.wavesurfer.fireEvent("region-in", e));
                                        };
                                        this.wavesurfer.backend.on("audioprocess", t),
                                            this.on("remove", function () {
                                                e.wavesurfer.backend.un("audioprocess", t);
                                            }),
                                            this.on("out", function () {
                                                if (e.loop) {
                                                    var t = e.wavesurfer.getCurrentTime();
                                                    t >= e.start && t <= e.end && e.wavesurfer.play(e.start);
                                                }
                                            });
                                    },
                                },
                                {
                                    key: "bindEvents",
                                    value: function () {
                                        var e = this,
                                            t = this.preventContextMenu;
                                        this.element.addEventListener("mouseenter", function (t) {
                                            e.fireEvent("mouseenter", t), e.wavesurfer.fireEvent("region-mouseenter", e, t);
                                        }),
                                            this.element.addEventListener("mouseleave", function (t) {
                                                e.fireEvent("mouseleave", t), e.wavesurfer.fireEvent("region-mouseleave", e, t);
                                            }),
                                            this.element.addEventListener("click", function (t) {
                                                t.preventDefault(), e.fireEvent("click", t), e.wavesurfer.fireEvent("region-click", e, t);
                                            }),
                                            this.element.addEventListener("dblclick", function (t) {
                                                t.stopPropagation(), t.preventDefault(), e.fireEvent("dblclick", t), e.wavesurfer.fireEvent("region-dblclick", e, t);
                                            }),
                                            this.element.addEventListener("contextmenu", function (r) {
                                                t && r.preventDefault(), e.fireEvent("contextmenu", r), e.wavesurfer.fireEvent("region-contextmenu", e, r);
                                            }),
                                            (this.drag || this.resize) && this.bindDragEvents(),
                                            this.contentEditable && (this.contentEl.addEventListener("blur", this.onContentBlur.bind(this)), this.contentEl.addEventListener("click", this.onContentClick.bind(this))),
                                            this.removeButton && this.removeButtonEl.addEventListener("click", this.onRemove.bind(this));
                                    },
                                },
                                {
                                    key: "bindDragEvents",
                                    value: function () {
                                        var e,
                                            t,
                                            r,
                                            n,
                                            i,
                                            a,
                                            s,
                                            o,
                                            l,
                                            u = this,
                                            h = this.wavesurfer.drawer.container,
                                            d = this.scrollSpeed,
                                            c = !1,
                                            f = function t(h) {
                                                var c = u.util.withOrientation(h, u.vertical),
                                                    f = u.wavesurfer.getDuration();
                                                if (a && (r || i)) {
                                                    var v = c.clientX,
                                                        p = 0,
                                                        g = 0,
                                                        m = 0,
                                                        w = u.regionsUtil.getRegionSnapToGridValue(u.wavesurfer.drawer.handleEvent(h) * f);
                                                    if (r) -1 === a ? ((g = o * u.wavesurfer.params.minPxPerSec), (p = v - s.left)) : ((g = l * u.wavesurfer.params.minPxPerSec), (p = s.right - v));
                                                    else {
                                                        var b = u.minLength;
                                                        b || (b = 0),
                                                            "start" === i ? (w > u.end - b && ((w = u.end - b), (m = d * a)), w < 0 && (w = 0)) : "end" === i && (w < u.start + b && ((w = u.start + b), (m = d * a)), w > f && (w = f));
                                                    }
                                                    var y = u.wrapper.scrollLeft;
                                                    if (-1 === a) {
                                                        if (0 === Math.round(y)) return;
                                                        if (Math.round(y - g + p) <= 0) return;
                                                    } else {
                                                        if (Math.round(y) === n) return;
                                                        if (Math.round(y + g - p) >= n) return;
                                                    }
                                                    var E = y - m + d * a;
                                                    if (-1 === a) {
                                                        var L = Math.max(0 + g - p, E);
                                                        u.wrapper.scrollLeft = E = L;
                                                    } else {
                                                        var x = Math.min(n - g + p, E);
                                                        u.wrapper.scrollLeft = E = x;
                                                    }
                                                    var k = w - e;
                                                    (e = w),
                                                        r ? u.onDrag(k) : u.onResize(k, i),
                                                        window.requestAnimationFrame(function () {
                                                            t(h);
                                                        });
                                                }
                                            },
                                            v = function (a) {
                                                var h = u.wavesurfer.getDuration();
                                                (a.touches && a.touches.length > 1) ||
                                                    ((t = a.targetTouches ? a.targetTouches[0].identifier : null),
                                                    (u.drag || u.resize) && a.stopPropagation(),
                                                    (e = u.regionsUtil.getRegionSnapToGridValue(u.wavesurfer.drawer.handleEvent(a, !0) * h)),
                                                    (o = e - u.start),
                                                    (l = u.end - e),
                                                    (n = u.wrapper.scrollWidth - u.wrapper.clientWidth),
                                                    (s = u.util.withOrientation(u.wrapper.getBoundingClientRect(), u.vertical)),
                                                    (u.isResizing = !1),
                                                    (u.isDragging = !1),
                                                    "handle" === a.target.tagName.toLowerCase()
                                                        ? ((u.isResizing = !0), (i = a.target.classList.contains("wavesurfer-handle-start") ? "start" : "end"))
                                                        : ((u.isDragging = !0), (r = !0), (i = !1)));
                                            },
                                            p = function (e) {
                                                (e.touches && e.touches.length > 1) ||
                                                    ((r || i) && ((u.isDragging = !1), (u.isResizing = !1), (r = !1), (a = null), (i = !1)),
                                                    c && ((c = !1), u.util.preventClick(), u.fireEvent("update-end", e), u.wavesurfer.fireEvent("region-update-end", u, e)));
                                            },
                                            g = function (n) {
                                                var d = u.wavesurfer.getDuration(),
                                                    v = u.util.withOrientation(n, u.vertical),
                                                    p = null;
                                                if (!(n.touches && n.touches.length > 1) && (!n.targetTouches || n.targetTouches[0].identifier == t) && (r || i)) {
                                                    var g = u.regionsUtil.getRegionSnapToGridValue(u.wavesurfer.drawer.handleEvent(n) * d);
                                                    if (r) {
                                                        var m = u.wavesurfer.getDuration();
                                                        g > m - l && (g = m - l), g - o < 0 && (g = o);
                                                    }
                                                    if (i) {
                                                        var w = u.minLength;
                                                        w || (w = 0), "start" === i ? (g > u.end - w && (g = u.end - w), g < 0 && (g = 0)) : "end" === i && (g < u.start + w && (p = (g = u.start + w) - (u.end + (g - e))), g > d && (g = d));
                                                    }
                                                    if ((p || (p = g - e), (e = g), u.drag && r && ((c = c || !!p), u.onDrag(p)), u.resize && i && ((c = c || !!p), u.onResize(p, i)), u.scroll && h.clientWidth < u.wrapper.scrollWidth)) {
                                                        var b = v.clientX;
                                                        (a = b < s.left + u.edgeScrollWidth ? -1 : b > s.right - u.edgeScrollWidth ? 1 : null) && f(n);
                                                    }
                                                }
                                            };
                                        this.element.addEventListener("mousedown", v),
                                            this.element.addEventListener("touchstart", v),
                                            document.body.addEventListener("mousemove", g),
                                            document.body.addEventListener("touchmove", g, { passive: !1 }),
                                            document.addEventListener("mouseup", p),
                                            document.body.addEventListener("touchend", p),
                                            this.on("remove", function () {
                                                document.removeEventListener("mouseup", p),
                                                    document.body.removeEventListener("touchend", p),
                                                    document.body.removeEventListener("mousemove", g),
                                                    document.body.removeEventListener("touchmove", g);
                                            }),
                                            this.wavesurfer.on("destroy", function () {
                                                document.removeEventListener("mouseup", p), document.body.removeEventListener("touchend", p);
                                            });
                                    },
                                },
                                {
                                    key: "onDrag",
                                    value: function (e) {
                                        var t = this.wavesurfer.getDuration();
                                        this.end + e > t && (e = t - this.end), this.start + e < 0 && (e = -1 * this.start);
                                        var r = { direction: this._getDragDirection(e), action: "drag" };
                                        this.update({ start: this.start + e, end: this.end + e }, r);
                                    },
                                },
                                {
                                    key: "_getDragDirection",
                                    value: function (e) {
                                        return e < 0 ? "left" : e > 0 ? "right" : null;
                                    },
                                },
                                {
                                    key: "onResize",
                                    value: function (e, t) {
                                        var r = this.wavesurfer.getDuration(),
                                            n = { action: "resize", direction: "start" === t ? "left" : "right" };
                                        "start" === t
                                            ? (e > 0 && this.end - (this.start + e) < this.minLength && (e = this.end - this.minLength - this.start),
                                              e < 0 && this.end - (this.start + e) > this.maxLength && (e = this.end - this.start - this.maxLength),
                                              e < 0 && this.start + e < 0 && (e = -1 * this.start),
                                              this.update({ start: Math.min(this.start + e, this.end), end: Math.max(this.start + e, this.end) }, n))
                                            : (e < 0 && this.end + e - this.start < this.minLength && (e = this.start + this.minLength - this.end),
                                              e > 0 && this.end + e - this.start > this.maxLength && (e = this.maxLength - (this.end - this.start)),
                                              e > 0 && this.end + e > r && (e = r - this.end),
                                              this.update({ start: Math.min(this.end + e, this.start), end: Math.max(this.end + e, this.start) }, n));
                                    },
                                },
                                {
                                    key: "onContentBlur",
                                    value: function (e) {
                                        var t = (this.data || {}).text,
                                            r = e.target.innerText,
                                            n = i(i({}, this.data), {}, { text: r }),
                                            a = { action: "contentEdited", oldText: t, text: r };
                                        this.update({ data: n }, a);
                                    },
                                },
                                {
                                    key: "onContentClick",
                                    value: function (e) {
                                        e.stopPropagation();
                                    },
                                },
                                {
                                    key: "onRemove",
                                    value: function (e) {
                                        e.stopPropagation(), this.remove();
                                    },
                                },
                                {
                                    key: "updateHandlesResize",
                                    value: function (e) {
                                        var t;
                                        (t = e ? (this.vertical ? "row-resize" : "col-resize") : "auto"),
                                            this.handleLeftEl && this.style(this.handleLeftEl, { cursor: t }),
                                            this.handleRightEl && this.style(this.handleRightEl, { cursor: t });
                                    },
                                },
                            ]) && s(t.prototype, r),
                            n && s(t, n),
                            Object.defineProperty(t, "prototype", { writable: !1 }),
                            e
                        );
                    })();
                    t.Region = l;
                },
            },
            t = {};
        var r = (function r(n) {
            var i = t[n];
            if (void 0 !== i) return i.exports;
            var a = (t[n] = { exports: {} });
            return e[n](a, a.exports, r), a.exports;
        })(23);
        return r;
    })()
);
//# sourceMappingURL=wavesurfer.regions.min.js.map
