/**
 * @license wowza-webrtc-player 0.0.10
 * Copyright (c) 2018-2021 Koala Interactive, Inc.
 * License: MIT
 */
var e, t;
e = this, t = function (e) {
    "use strict";

    function t(e, t, n, r, i, s, a) {
        try {
            var o = e[s](a), c = o.value
        } catch (e) {
            return void n(e)
        }
        o.done ? t(c) : Promise.resolve(c).then(r, i)
    }

    function n(e) {
        return function () {
            var n = this, r = arguments;
            return new Promise((function (i, s) {
                var a = e.apply(n, r);

                function o(e) {
                    t(a, i, s, o, c, "next", e)
                }

                function c(e) {
                    t(a, i, s, o, c, "throw", e)
                }

                o(void 0)
            }))
        }
    }

    function r(e, t, n) {
        return t in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function i(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(e);
            t && (r = r.filter((function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function s(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? i(Object(n), !0).forEach((function (t) {
                r(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function (t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function a() {
    }

    function o() {
        o.init.call(this)
    }

    function c(e) {
        return void 0 === e._maxListeners ? o.defaultMaxListeners : e._maxListeners
    }

    function d(e, t, n) {
        if (t) e.call(n); else for (var r = e.length, i = g(e, r), s = 0; s < r; ++s) i[s].call(n)
    }

    function u(e, t, n, r) {
        if (t) e.call(n, r); else for (var i = e.length, s = g(e, i), a = 0; a < i; ++a) s[a].call(n, r)
    }

    function l(e, t, n, r, i) {
        if (t) e.call(n, r, i); else for (var s = e.length, a = g(e, s), o = 0; o < s; ++o) a[o].call(n, r, i)
    }

    function h(e, t, n, r, i, s) {
        if (t) e.call(n, r, i, s); else for (var a = e.length, o = g(e, a), c = 0; c < a; ++c) o[c].call(n, r, i, s)
    }

    function p(e, t, n, r) {
        if (t) e.apply(n, r); else for (var i = e.length, s = g(e, i), a = 0; a < i; ++a) s[a].apply(n, r)
    }

    function f(e, t, n, r) {
        var i, s, o, d;
        if ("function" != typeof n) throw new TypeError('"listener" argument must be a function');
        if ((s = e._events) ? (s.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), s = e._events), o = s[t]) : (s = e._events = new a, e._eventsCount = 0), o) {
            if ("function" == typeof o ? o = s[t] = r ? [n, o] : [o, n] : r ? o.unshift(n) : o.push(n), !o.warned && (i = c(e)) && i > 0 && o.length > i) {
                o.warned = !0;
                var u = Error("Possible EventEmitter memory leak detected. " + o.length + " " + t + " listeners added. Use emitter.setMaxListeners() to increase limit");
                u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, d = u, "function" == typeof console.warn ? console.warn(d) : console.log(d)
            }
        } else o = s[t] = n, ++e._eventsCount;
        return e
    }

    function m(e, t, n) {
        var r = !1;

        function i() {
            e.removeListener(t, i), r || (r = !0, n.apply(e, arguments))
        }

        return i.listener = n, i
    }

    function v(e) {
        var t = this._events;
        if (t) {
            var n = t[e];
            if ("function" == typeof n) return 1;
            if (n) return n.length
        }
        return 0
    }

    function g(e, t) {
        for (var n = Array(t); t--;) n[t] = e[t];
        return n
    }

    a.prototype = Object.create(null), o.EventEmitter = o, o.usingDomains = !1, o.prototype.domain = void 0, o.prototype._events = void 0, o.prototype._maxListeners = void 0, o.defaultMaxListeners = 10, o.init = function () {
        this.domain = null, o.usingDomains && (void 0).active, this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = new a, this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
    }, o.prototype.setMaxListeners = function (e) {
        if ("number" != typeof e || e < 0 || isNaN(e)) throw new TypeError('"n" argument must be a positive number');
        return this._maxListeners = e, this
    }, o.prototype.getMaxListeners = function () {
        return c(this)
    }, o.prototype.emit = function (e) {
        var t, n, r, i, s, a, o, c = "error" === e;
        if (a = this._events) c = c && null == a.error; else if (!c) return !1;
        if (o = this.domain, c) {
            if (t = arguments[1], !o) {
                if (t instanceof Error) throw t;
                var f = Error('Uncaught, unspecified "error" event. (' + t + ")");
                throw f.context = t, f
            }
            return t || (t = Error('Uncaught, unspecified "error" event')), t.domainEmitter = this, t.domain = o, t.domainThrown = !1, o.emit("error", t), !1
        }
        if (!(n = a[e])) return !1;
        var m = "function" == typeof n;
        switch (r = arguments.length) {
            case 1:
                d(n, m, this);
                break;
            case 2:
                u(n, m, this, arguments[1]);
                break;
            case 3:
                l(n, m, this, arguments[1], arguments[2]);
                break;
            case 4:
                h(n, m, this, arguments[1], arguments[2], arguments[3]);
                break;
            default:
                for (i = Array(r - 1), s = 1; s < r; s++) i[s - 1] = arguments[s];
                p(n, m, this, i)
        }
        return !0
    }, o.prototype.addListener = function (e, t) {
        return f(this, e, t, !1)
    }, o.prototype.on = o.prototype.addListener, o.prototype.prependListener = function (e, t) {
        return f(this, e, t, !0)
    }, o.prototype.once = function (e, t) {
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        return this.on(e, m(this, e, t)), this
    }, o.prototype.prependOnceListener = function (e, t) {
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        return this.prependListener(e, m(this, e, t)), this
    }, o.prototype.removeListener = function (e, t) {
        var n, r, i, s, o;
        if ("function" != typeof t) throw new TypeError('"listener" argument must be a function');
        if (!(r = this._events)) return this;
        if (!(n = r[e])) return this;
        if (n === t || n.listener && n.listener === t) 0 == --this._eventsCount ? this._events = new a : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t)); else if ("function" != typeof n) {
            for (i = -1, s = n.length; s-- > 0;) if (n[s] === t || n[s].listener && n[s].listener === t) {
                o = n[s].listener, i = s;
                break
            }
            if (i < 0) return this;
            if (1 === n.length) {
                if (n[0] = void 0, 0 == --this._eventsCount) return this._events = new a, this;
                delete r[e]
            } else !function (e, t) {
                for (var n = t, r = n + 1, i = e.length; r < i; n += 1, r += 1) e[n] = e[r];
                e.pop()
            }(n, i);
            r.removeListener && this.emit("removeListener", e, o || t)
        }
        return this
    }, o.prototype.removeAllListeners = function (e) {
        var t, n;
        if (!(n = this._events)) return this;
        if (!n.removeListener) return 0 === arguments.length ? (this._events = new a, this._eventsCount = 0) : n[e] && (0 == --this._eventsCount ? this._events = new a : delete n[e]), this;
        if (0 === arguments.length) {
            for (var r, i = Object.keys(n), s = 0; s < i.length; ++s) "removeListener" !== (r = i[s]) && this.removeAllListeners(r);
            return this.removeAllListeners("removeListener"), this._events = new a, this._eventsCount = 0, this
        }
        if ("function" == typeof (t = n[e])) this.removeListener(e, t); else if (t) do {
            this.removeListener(e, t[t.length - 1])
        } while (t[0]);
        return this
    }, o.prototype.listeners = function (e) {
        var t, n = this._events;
        return n && (t = n[e]) ? "function" == typeof t ? [t.listener || t] : function (e) {
            for (var t = Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
            return t
        }(t) : []
    }, o.listenerCount = function (e, t) {
        return "function" == typeof e.listenerCount ? e.listenerCount(t) : v.call(e, t)
    }, o.prototype.listenerCount = v, o.prototype.eventNames = function () {
        return this._eventsCount > 0 ? Reflect.ownKeys(this._events) : []
    };
    var y = window.RTCPeerConnection, w = window.RTCIceCandidate, b = window.RTCSessionDescription;

    class C extends o {
        constructor(e) {
            super(), r(this, "pc", void 0), this.pc = new y({iceServers: e}), "ontrack" in this.pc ? this.pc.ontrack = this.handleTrackEvent.bind(this) : this.pc.onaddstream = this.handleNewStreamEvent.bind(this)
        }

        getPeerConnection() {
            return this.pc
        }

        close() {
            this.pc.close()
        }

        setRemoteDescription(e) {
            return this.pc.setRemoteDescription(new b(e))
        }

        setLocalDescription(e) {
            return this.pc.setLocalDescription(new b(e))
        }

        createAnswer() {
            var e = this;
            return n((function* () {
                return e.pc.createAnswer()
            }))()
        }

        createOffer() {
            var e = this;
            return n((function* () {
                return e.pc.createOffer()
            }))()
        }

        attachIceCandidate(e) {
            return this.pc.addIceCandidate(new w(e))
        }

        attachMediaStream(e) {
            var t = this.pc, n = t.getSenders(), r = e.getTracks();
            n.length ? r.forEach(e => {
                n.filter(t => {
                    var n;
                    return (null === (n = t.track) || void 0 === n ? void 0 : n.kind) === e.kind
                }).forEach(t => {
                    t.replaceTrack(e)
                })
            }) : r.forEach(n => {
                t.addTrack(n, e)
            })
        }

        handleNewStreamEvent(e) {
            var {stream: t} = e;
            this.emit("addstream", t)
        }

        handleTrackEvent(e) {
            e.streams.forEach(e => {
                this.emit("addstream", e)
            })
        }
    }

    class L {
        constructor(e, t, n) {
            this.url = e, this.streamInfo = t, this.userData = n, r(this, "ws", null), r(this, "pendingCommands", new Map)
        }

        connect() {
            return this.ws ? Promise.resolve(this.ws) : new Promise((e, t) => {
                var n = new WebSocket(this.url);
                n.binaryType = "arraybuffer", n.onopen = () => e(n), n.onerror = () => {
                    console.log("SOCKET ERROR"), t()
                }, n.onclose = () => {
                    console.log("SOCKET CLOSE"), t()
                }, n.onmessage = this.handleSocketData.bind(this), this.ws = n
            })
        }

        disconnect() {
            this.ws && (this.ws.close(), this.ws = null)
        }

        getOffer() {
            return this.send({direction: "play", command: "getOffer"})
        }

        sendOffer(e) {
            return this.send({direction: "publish", command: "sendOffer", sdp: e})
        }

        sendResponse(e) {
            return this.send({direction: "play", command: "sendResponse", sdp: e})
        }

        getAvailableStreams() {
            return this.send({direction: "play", command: "getAvailableStreams"})
        }

        send(e) {
            var t = this;
            return n((function* () {
                var n, r = t.ws || (yield t.connect());
                return t.pendingCommands.has(e.command) || t.pendingCommands.set(e.command, ((n = {}).promise = new Promise((e, t) => {
                    n.resolve = e, n.reject = t
                }), n)), r.send(JSON.stringify(s(s({}, e), {}, {
                    streamInfo: t.streamInfo,
                    userData: t.userData
                }))), t.pendingCommands.get(e.command).promise
            }))()
        }

        handleSocketData(e) {
            var t, n = JSON.parse(e.data);
            200 === n.status ? (null !== (t = n.streamInfo) && void 0 !== t && t.sessionId && (this.streamInfo.sessionId = n.streamInfo.sessionId), this.pendingCommands.has(n.command) && (this.pendingCommands.get(n.command).resolve(n), this.pendingCommands.delete(n.command))) : this.pendingCommands.has(n.command) && (this.pendingCommands.get(n.command).reject(n), this.pendingCommands.delete(n.command))
        }
    }

    var O = "mozGetUserMedia" in navigator ? "firefox" : "webkitGetUserMedia" in navigator || !1 === window.isSecureContext && window.webkitRTCPeerConnection && !window.RTCIceGatherer ? "chrome" : navigator.mediaDevices && navigator.userAgent.match(/Edge\/(\d+).(\d+)$/) ? "edge" : window.RTCPeerConnection && navigator.userAgent.match(/AppleWebKit\/(\d+)\./) ? "safari" : "unknown",
        S = ["vp9", "vp8", "h264", "red", "ulpfec", "rtx"], x = ["opus", "isac", "g722", "pcmu", "pcma", "cn"];

    class P {
        constructor(e, t) {
            this.videoOptions = e, this.audioOptions = t, r(this, "audioIndex", -1), r(this, "videoIndex", -1)
        }

        transformPlay(e) {
            return e.sdp ? (e.sdp = e.sdp.replace(/profile-level-id=(\w+);/gi, (e, t) => {
                var n = parseInt(t, 16), r = n >> 16 & 255, i = n >> 8 & 255, s = 255 & n;
                return r > 66 ? (r = 66, i = 224, s = 31) : 0 === i && (i = 224), (r << 16 | i << 8 | s).toString(16)
            }), e) : e
        }

        transformPublish(e) {
            var t = this.prepareSDP(e), n = this.videoOptions, r = this.audioOptions, i = null,
                s = () => "m=audio" === i ? r : "m=video" === i ? n : null, a = t.filter(Boolean).map(e => {
                    var [t] = e.split(/\s|:/, 1);
                    switch (t) {
                        case"m=audio":
                        case"m=video":
                            var a = "m=audio" === t ? this.audioIndex : this.videoIndex;
                            if (-1 !== a && "chrome" === O) {
                                var [o, c, d] = e.split(" ");
                                return "".concat(o, " ").concat(c, " ").concat(d, " ").concat(a)
                            }
                            i = t;
                            break;
                        case"a=rtpmap":
                            var u = /^a=rtpmap:(\d+)\s+(\w+)\/(\d+)/.exec(e);
                            if (!u || "chrome" !== O) break;
                            var l = u[2].toLowerCase();
                            n.bitRate && S.includes(l) && (e += "\r\na=fmtp:".concat(u[1], " x-google-min-bitrate=").concat(n.bitRate, ";x-google-max-bitrate=").concat(n.bitRate)), r.bitRate && x.includes(l) && (e += "\r\na=fmtp:".concat(u[1], " x-google-min-bitrate=").concat(r.bitRate, ";x-google-max-bitrate=").concat(r.bitRate));
                            break;
                        case"c=IN":
                            var h = s();
                            h && h.bitRate && ("firefox" === O || "safari" === O) && (e += "\r\nb=TIAS:".concat(1e3 * h.bitRate), e += "\r\nb=AS:".concat(1e3 * h.bitRate), e += "\r\nb=CT:".concat(1e3 * h.bitRate));
                            break;
                        case"a=mid":
                            var p = s();
                            p && "chrome" === O && (p.bitRate && (e += "\r\nb=CT:".concat(p.bitRate), e += "\r\nb=AS:".concat(p.bitRate), "frameRate" in p && p.frameRate && (e += "\r\na=framerate:".concat(p.frameRate.toFixed(2)))), i = null)
                    }
                    return e
                }).join("\r\n") + "\r\n";
            return {type: e.type, sdp: a}
        }

        checkLine(e, t) {
            if (/^a=(rtpmap|rtcp-fb|fmtp)/.test(e)) {
                var n = e.split(":");
                if (n.length > 1) {
                    var [r, i] = n[1].split(" ");
                    if (!i.startsWith("http") && !i.startsWith("ur")) {
                        var s = parseInt(r, 10), a = t.get(s) || [];
                        return a.push(e), t.set(s, a), !1
                    }
                }
            }
            return !0
        }

        deliverCheckLine(e, t, n) {
            var r = Array.from(n).find(t => {
                var [, n] = t;
                return n.join("\r\n").includes(e)
            });
            if (!r) return [];
            var [i, s] = r;
            return "audio" === t ? this.audioIndex = i : this.videoIndex = i, "VP8" !== e && "VP9" !== e ? s : s.filter(e => !e.includes("transport-cc") && !e.includes("goog-remb") && !e.includes("nack"))
        }

        addAudio(e, t) {
            var n = e.indexOf("a=rtcp-mux");
            return -1 !== n && e.splice(n + 1, 0, ...this.deliverCheckLine(this.audioOptions.codec, "audio", t)), e
        }

        addVideo(e, t) {
            var n = e.includes("a=rtcp-rsize"), r = e.includes("a=rtcp-mux"), i = !1;
            if (!n && !r) return e;
            var s = this.deliverCheckLine(this.videoOptions.codec, "video", t);
            return e.map(e => {
                if (n) {
                    if (!i && "a=rtcp-rsize" === e) return i = !0, [e].concat(s).join("\r\n")
                } else if ("a=rtcp-mux" === e) {
                    if (i) return [e].concat(s).join("\r\n");
                    i = !0
                }
                return e
            })
        }

        flattenLines(e) {
            return e.join("\r\n").split("\r\n")
        }

        prepareSDP(e) {
            var t = new Map, n = (e.sdp || "").split(/\r\n/);
            return n = n.filter(e => e && this.checkLine(e, t)), n = this.flattenLines(this.addAudio(n, t)), n = this.flattenLines(this.addVideo(n, t))
        }
    }

    e.WowzaWebRTCPlayer = class extends o {
        constructor(e, t) {
            super(), this.video = e, r(this, "sdpUrl", ""), r(this, "applicationName", ""), r(this, "streamName", ""), r(this, "userData", null), r(this, "sdpHandler", void 0), r(this, "constraints", {
                audio: !0,
                video: !0
            }), r(this, "videoConfigs", {
                bitRate: 360,
                codec: "42e01f",
                frameRate: 29.97
            }), r(this, "audioConfigs", {
                codec: "opus",
                bitRate: 64
            }), r(this, "iceServers", []), r(this, "mediaStream", null), r(this, "pc", null), t && this.setConfigurations(t)
        }

        setConfigurations(e) {
            e.constraints && (this.constraints = e.constraints), e.videoConfigs && (this.videoConfigs = e.videoConfigs), e.audioConfigs && (this.audioConfigs = e.audioConfigs), e.applicationName && (this.applicationName = e.applicationName), e.streamName && (this.streamName = e.streamName), e.sdpUrl && (this.sdpUrl = e.sdpUrl), void 0 !== e.userData && (this.userData = e.userData), e.iceServers && (this.iceServers = e.iceServers), e.sdpHandler && (this.sdpHandler = e.sdpHandler)
        }

        stop() {
            this.pc && (this.pc.close(), this.pc = null)
        }

        getMediaStream() {
            return this.mediaStream
        }

        getPeerConnection() {
            return this.pc ? this.pc.getPeerConnection() : null
        }

        playLocal(e) {
            var t = this;
            return n((function* () {
                e && (t.constraints = e);
                var n = yield function (e) {
                    var t;
                    return null !== (t = navigator.mediaDevices) && void 0 !== t && t.getUserMedia ? navigator.mediaDevices.getUserMedia(e) : navigator.getUserMedia ? new Promise((t, n) => {
                        navigator.getUserMedia(e, t, n)
                    }) : Promise.reject("Your browser does not support getUserMedia API")
                }(t.constraints);
                return t.attachStream(n), n
            }))()
        }

        stopLocal() {
            this.stop(), this.mediaStream && (this.mediaStream.getTracks().forEach(e => {
                e.stop()
            }), this.mediaStream = null)
        }

        playRemote(e) {
            var t = this;
            return n((function* () {
                e && t.setConfigurations(e);
                var n = t.createWowzaInstance();
                try {
                    var {sdp: r} = yield n.getOffer(), i = t.createPeerConnection();
                    i.on("addstream", t.attachStream.bind(t)), yield i.setRemoteDescription(r);
                    var s = yield i.createAnswer(), a = new P(t.videoConfigs, t.audioConfigs),
                        o = t.sdpHandler ? t.sdpHandler(s, e => a.transformPlay(e), "play") : a.transformPlay(s);
                    yield i.setLocalDescription(o);
                    var {iceCandidates: c} = yield n.sendResponse(o);
                    c.forEach(e => {
                        i.attachIceCandidate(e)
                    })
                } finally {
                    n.disconnect()
                }
            }))()
        }

        publish(e) {
            var t = this;
            return n((function* () {
                e && t.setConfigurations(e);
                var n = t.createWowzaInstance();
                try {
                    var r = t.mediaStream || (yield t.playLocal()), i = t.createPeerConnection();
                    i.attachMediaStream(r);
                    var s = new P(t.videoConfigs, t.audioConfigs), a = yield i.createOffer(),
                        o = t.sdpHandler ? t.sdpHandler(a, e => s.transformPublish(e), "publish") : s.transformPublish(a);
                    yield i.setLocalDescription(o);
                    var {sdp: c, iceCandidates: d} = yield n.sendOffer(o);
                    yield i.setRemoteDescription(c), d.forEach(e => {
                        i.attachIceCandidate(e)
                    })
                } finally {
                    n.disconnect()
                }
            }))()
        }

        getAvailableStreams() {
            var e = this;
            return n((function* () {
                var t = e.createWowzaInstance();
                try {
                    var {availableStreams: n} = yield t.getAvailableStreams();
                    return n || []
                } catch (e) {
                    return []
                } finally {
                    t.disconnect()
                }
            }))()
        }

        createWowzaInstance() {
            return new L(this.sdpUrl, {
                applicationName: this.applicationName,
                sessionId: "[empty]",
                streamName: this.streamName
            }, this.userData)
        }

        createPeerConnection() {
            return this.pc = new C(this.iceServers), this.pc
        }

        attachStream(e) {
            this.mediaStream = e;
            try {
                var t = this.video.srcObject instanceof MediaStream && this.video.srcObject;
                t && t.id === e.id || (this.video.srcObject = e)
            } catch (t) {
                this.video.src = window.URL.createObjectURL(e)
            }
            this.pc && this.pc.attachMediaStream(e), this.video.play()
        }
    }, Object.defineProperty(e, "__esModule", {value: !0})
}, "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t((e = e || self)["wowza-webrtc-player"] = {});
