var l = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function h(t) {
    return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
}
function g(t) {
    if (t.__esModule)
        return t;
    var e = t.default;
    if (typeof e == "function") {
        var n = function o() {
            return this instanceof o ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments)
        };
        n.prototype = e.prototype
    } else
        n = {};
    return Object.defineProperty(n, "__esModule", {
        value: !0
    }),
    Object.keys(t).forEach(function(o) {
        var s = Object.getOwnPropertyDescriptor(t, o);
        Object.defineProperty(n, o, s.get ? s : {
            enumerable: !0,
            get: function() {
                return t[o]
            }
        })
    }),
    n
}
const i = "https://gateway-run.bls.dev/api/v1"
  , d = "https://tight-block-2413.txlabs.workers.dev";
function c() {
    return chrome.runtime.getManifest().version || "unknown"
}
async function u() {
    return (await chrome.storage.local.get("authToken")).authToken
}
async function y(t, e, n=null) {
    const o = await u()
      , s = c()
      , a = `${i}/nodes/${t}`
      , r = await p();
    return (await fetch(a, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${o}`,
            "X-Extension-Version": s
        },
        body: JSON.stringify({
            ipAddress: r,
            hardwareId: e,
            hardwareInfo: n
        })
    })).json()
}
async function w(t) {
    const e = await u()
      , n = c()
      , o = `${i}/nodes/${t}/start-session`;
    return (await fetch(o, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${e}`,
            "X-Extension-Version": n
        }
    })).json()
}
async function m(t) {
    const e = await u()
      , n = c()
      , o = `${i}/nodes/${t}/stop-session`;
    return (await fetch(o, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${e}`,
            "X-Extension-Version": n
        }
    })).json()
}
async function b(t, e) {
    const n = await u()
      , o = c()
      , s = `${i}/nodes/${t}/ping`;
    return (await fetch(s, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${n}`,
            "X-Extension-Version": o
        },
        body: JSON.stringify(e)
    })).json()
}
async function p() {
    return (await (await fetch(d)).json()).ip
}
function $(t, e=6, n=4) {
    const o = t == null ? void 0 : t.slice(0, e + 2)
      , s = t == null ? void 0 : t.slice(-n);
    return `${o}...${s}`
}
function j(t) {
    return new Date(t).toTimeString().split(" ")[0]
}
function v(t) {
    const e = isNaN(t) || t < 0 ? 0 : Math.floor(t)
      , n = Math.floor(e / 1440)
      , o = Math.floor(e % 1440 / 60)
      , s = e % 60
      , a = f => f.toString().padStart(2, "0");
    let r = "";
    return n > 0 && (r += `${n}d `),
    r += `${o}h ${a(s)}m`,
    r
}
export {i as G, v as a, g as b, l as c, c as d, w as e, j as f, h as g, m as h, b as p, y as r, $ as s};
