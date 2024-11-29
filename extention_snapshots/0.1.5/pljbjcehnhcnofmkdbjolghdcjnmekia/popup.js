import {g as Qd, G as Du, f as xv, s as Cv, a as tc} from "./assets/stringUtils-a765f426.js";
function _v(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const i = Object.getOwnPropertyDescriptor(r, o);
                    i && Object.defineProperty(e, o, i.get ? i : {
                        enumerable: !0,
                        get: () => r[o]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}
var Xd = {
    exports: {}
}
  , al = {}
  , Zd = {
    exports: {}
}
  , $ = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Mo = Symbol.for("react.element")
  , kv = Symbol.for("react.portal")
  , Rv = Symbol.for("react.fragment")
  , Nv = Symbol.for("react.strict_mode")
  , Tv = Symbol.for("react.profiler")
  , Pv = Symbol.for("react.provider")
  , Iv = Symbol.for("react.context")
  , Av = Symbol.for("react.forward_ref")
  , Mv = Symbol.for("react.suspense")
  , Ov = Symbol.for("react.memo")
  , Dv = Symbol.for("react.lazy")
  , nc = Symbol.iterator;
function bv(e) {
    return e === null || typeof e != "object" ? null : (e = nc && e[nc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var Jd = {
    isMounted: function() {
        return !1
    },
    enqueueForceUpdate: function() {},
    enqueueReplaceState: function() {},
    enqueueSetState: function() {}
}
  , qd = Object.assign
  , ef = {};
function Tr(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ef,
    this.updater = n || Jd
}
Tr.prototype.isReactComponent = {};
Tr.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
}
;
Tr.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
}
;
function tf() {}
tf.prototype = Tr.prototype;
function bu(e, t, n) {
    this.props = e,
    this.context = t,
    this.refs = ef,
    this.updater = n || Jd
}
var Lu = bu.prototype = new tf;
Lu.constructor = bu;
qd(Lu, Tr.prototype);
Lu.isPureReactComponent = !0;
var rc = Array.isArray
  , nf = Object.prototype.hasOwnProperty
  , zu = {
    current: null
}
  , rf = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function of(e, t, n) {
    var r, o = {}, i = null, l = null;
    if (t != null)
        for (r in t.ref !== void 0 && (l = t.ref),
        t.key !== void 0 && (i = "" + t.key),
        t)
            nf.call(t, r) && !rf.hasOwnProperty(r) && (o[r] = t[r]);
    var s = arguments.length - 2;
    if (s === 1)
        o.children = n;
    else if (1 < s) {
        for (var u = Array(s), a = 0; a < s; a++)
            u[a] = arguments[a + 2];
        o.children = u
    }
    if (e && e.defaultProps)
        for (r in s = e.defaultProps,
        s)
            o[r] === void 0 && (o[r] = s[r]);
    return {
        $$typeof: Mo,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: zu.current
    }
}
function Lv(e, t) {
    return {
        $$typeof: Mo,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}
function Fu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Mo
}
function zv(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var oc = /\/+/g;
function Ll(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? zv("" + e.key) : t.toString(36)
}
function yi(e, t, n, r, o) {
    var i = typeof e;
    (i === "undefined" || i === "boolean") && (e = null);
    var l = !1;
    if (e === null)
        l = !0;
    else
        switch (i) {
        case "string":
        case "number":
            l = !0;
            break;
        case "object":
            switch (e.$$typeof) {
            case Mo:
            case kv:
                l = !0
            }
        }
    if (l)
        return l = e,
        o = o(l),
        e = r === "" ? "." + Ll(l, 0) : r,
        rc(o) ? (n = "",
        e != null && (n = e.replace(oc, "$&/") + "/"),
        yi(o, t, n, "", function(a) {
            return a
        })) : o != null && (Fu(o) && (o = Lv(o, n + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(oc, "$&/") + "/") + e)),
        t.push(o)),
        1;
    if (l = 0,
    r = r === "" ? "." : r + ":",
    rc(e))
        for (var s = 0; s < e.length; s++) {
            i = e[s];
            var u = r + Ll(i, s);
            l += yi(i, t, n, u, o)
        }
    else if (u = bv(e),
    typeof u == "function")
        for (e = u.call(e),
        s = 0; !(i = e.next()).done; )
            i = i.value,
            u = r + Ll(i, s++),
            l += yi(i, t, n, u, o);
    else if (i === "object")
        throw t = String(e),
        Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return l
}
function $o(e, t, n) {
    if (e == null)
        return e;
    var r = []
      , o = 0;
    return yi(e, r, "", "", function(i) {
        return t.call(n, i, o++)
    }),
    r
}
function Fv(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(),
        t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1,
            e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2,
            e._result = n)
        }),
        e._status === -1 && (e._status = 0,
        e._result = t)
    }
    if (e._status === 1)
        return e._result.default;
    throw e._result
}
var Ae = {
    current: null
}
  , wi = {
    transition: null
}
  , Vv = {
    ReactCurrentDispatcher: Ae,
    ReactCurrentBatchConfig: wi,
    ReactCurrentOwner: zu
};
function lf() {
    throw Error("act(...) is not supported in production builds of React.")
}
$.Children = {
    map: $o,
    forEach: function(e, t, n) {
        $o(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return $o(e, function() {
            t++
        }),
        t
    },
    toArray: function(e) {
        return $o(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!Fu(e))
            throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
$.Component = Tr;
$.Fragment = Rv;
$.Profiler = Tv;
$.PureComponent = bu;
$.StrictMode = Nv;
$.Suspense = Mv;
$.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Vv;
$.act = lf;
$.cloneElement = function(e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = qd({}, e.props)
      , o = e.key
      , i = e.ref
      , l = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (i = t.ref,
        l = zu.current),
        t.key !== void 0 && (o = "" + t.key),
        e.type && e.type.defaultProps)
            var s = e.type.defaultProps;
        for (u in t)
            nf.call(t, u) && !rf.hasOwnProperty(u) && (r[u] = t[u] === void 0 && s !== void 0 ? s[u] : t[u])
    }
    var u = arguments.length - 2;
    if (u === 1)
        r.children = n;
    else if (1 < u) {
        s = Array(u);
        for (var a = 0; a < u; a++)
            s[a] = arguments[a + 2];
        r.children = s
    }
    return {
        $$typeof: Mo,
        type: e.type,
        key: o,
        ref: i,
        props: r,
        _owner: l
    }
}
;
$.createContext = function(e) {
    return e = {
        $$typeof: Iv,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    },
    e.Provider = {
        $$typeof: Pv,
        _context: e
    },
    e.Consumer = e
}
;
$.createElement = of;
$.createFactory = function(e) {
    var t = of.bind(null, e);
    return t.type = e,
    t
}
;
$.createRef = function() {
    return {
        current: null
    }
}
;
$.forwardRef = function(e) {
    return {
        $$typeof: Av,
        render: e
    }
}
;
$.isValidElement = Fu;
$.lazy = function(e) {
    return {
        $$typeof: Dv,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Fv
    }
}
;
$.memo = function(e, t) {
    return {
        $$typeof: Ov,
        type: e,
        compare: t === void 0 ? null : t
    }
}
;
$.startTransition = function(e) {
    var t = wi.transition;
    wi.transition = {};
    try {
        e()
    } finally {
        wi.transition = t
    }
}
;
$.unstable_act = lf;
$.useCallback = function(e, t) {
    return Ae.current.useCallback(e, t)
}
;
$.useContext = function(e) {
    return Ae.current.useContext(e)
}
;
$.useDebugValue = function() {}
;
$.useDeferredValue = function(e) {
    return Ae.current.useDeferredValue(e)
}
;
$.useEffect = function(e, t) {
    return Ae.current.useEffect(e, t)
}
;
$.useId = function() {
    return Ae.current.useId()
}
;
$.useImperativeHandle = function(e, t, n) {
    return Ae.current.useImperativeHandle(e, t, n)
}
;
$.useInsertionEffect = function(e, t) {
    return Ae.current.useInsertionEffect(e, t)
}
;
$.useLayoutEffect = function(e, t) {
    return Ae.current.useLayoutEffect(e, t)
}
;
$.useMemo = function(e, t) {
    return Ae.current.useMemo(e, t)
}
;
$.useReducer = function(e, t, n) {
    return Ae.current.useReducer(e, t, n)
}
;
$.useRef = function(e) {
    return Ae.current.useRef(e)
}
;
$.useState = function(e) {
    return Ae.current.useState(e)
}
;
$.useSyncExternalStore = function(e, t, n) {
    return Ae.current.useSyncExternalStore(e, t, n)
}
;
$.useTransition = function() {
    return Ae.current.useTransition()
}
;
$.version = "18.3.1";
Zd.exports = $;
var g = Zd.exports;
const He = Qd(g)
  , Uv = _v({
    __proto__: null,
    default: He
}, [g]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bv = g
  , jv = Symbol.for("react.element")
  , $v = Symbol.for("react.fragment")
  , Wv = Object.prototype.hasOwnProperty
  , Hv = Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner
  , Gv = {
    key: !0,
    ref: !0,
    __self: !0,
    __source: !0
};
function sf(e, t, n) {
    var r, o = {}, i = null, l = null;
    n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (l = t.ref);
    for (r in t)
        Wv.call(t, r) && !Gv.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps,
        t)
            o[r] === void 0 && (o[r] = t[r]);
    return {
        $$typeof: jv,
        type: e,
        key: i,
        ref: l,
        props: o,
        _owner: Hv.current
    }
}
al.Fragment = $v;
al.jsx = sf;
al.jsxs = sf;
Xd.exports = al;
var Vu = Xd.exports;
const pt = Vu.Fragment
  , S = Vu.jsx
  , z = Vu.jsxs;
var ks = {}
  , uf = {
    exports: {}
}
  , Ze = {}
  , af = {
    exports: {}
}
  , cf = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(P, N) {
        var D = P.length;
        P.push(N);
        e: for (; 0 < D; ) {
            var L = D - 1 >>> 1
              , V = P[L];
            if (0 < o(V, N))
                P[L] = N,
                P[D] = V,
                D = L;
            else
                break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0)
            return null;
        var N = P[0]
          , D = P.pop();
        if (D !== N) {
            P[0] = D;
            e: for (var L = 0, V = P.length, Te = V >>> 1; L < Te; ) {
                var xe = 2 * (L + 1) - 1
                  , $e = P[xe]
                  , he = xe + 1
                  , ye = P[he];
                if (0 > o($e, D))
                    he < V && 0 > o(ye, $e) ? (P[L] = ye,
                    P[he] = D,
                    L = he) : (P[L] = $e,
                    P[xe] = D,
                    L = xe);
                else if (he < V && 0 > o(ye, D))
                    P[L] = ye,
                    P[he] = D,
                    L = he;
                else
                    break e
            }
        }
        return N
    }
    function o(P, N) {
        var D = P.sortIndex - N.sortIndex;
        return D !== 0 ? D : P.id - N.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var i = performance;
        e.unstable_now = function() {
            return i.now()
        }
    } else {
        var l = Date
          , s = l.now();
        e.unstable_now = function() {
            return l.now() - s
        }
    }
    var u = []
      , a = []
      , f = 1
      , d = null
      , m = 3
      , y = !1
      , w = !1
      , h = !1
      , E = typeof setTimeout == "function" ? setTimeout : null
      , c = typeof clearTimeout == "function" ? clearTimeout : null
      , p = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function v(P) {
        for (var N = n(a); N !== null; ) {
            if (N.callback === null)
                r(a);
            else if (N.startTime <= P)
                r(a),
                N.sortIndex = N.expirationTime,
                t(u, N);
            else
                break;
            N = n(a)
        }
    }
    function x(P) {
        if (h = !1,
        v(P),
        !w)
            if (n(u) !== null)
                w = !0,
                W(C);
            else {
                var N = n(a);
                N !== null && F(x, N.startTime - P)
            }
    }
    function C(P, N) {
        w = !1,
        h && (h = !1,
        c(_),
        _ = -1),
        y = !0;
        var D = m;
        try {
            for (v(N),
            d = n(u); d !== null && (!(d.expirationTime > N) || P && !b()); ) {
                var L = d.callback;
                if (typeof L == "function") {
                    d.callback = null,
                    m = d.priorityLevel;
                    var V = L(d.expirationTime <= N);
                    N = e.unstable_now(),
                    typeof V == "function" ? d.callback = V : d === n(u) && r(u),
                    v(N)
                } else
                    r(u);
                d = n(u)
            }
            if (d !== null)
                var Te = !0;
            else {
                var xe = n(a);
                xe !== null && F(x, xe.startTime - N),
                Te = !1
            }
            return Te
        } finally {
            d = null,
            m = D,
            y = !1
        }
    }
    var R = !1
      , k = null
      , _ = -1
      , A = 5
      , T = -1;
    function b() {
        return !(e.unstable_now() - T < A)
    }
    function M() {
        if (k !== null) {
            var P = e.unstable_now();
            T = P;
            var N = !0;
            try {
                N = k(!0, P)
            } finally {
                N ? B() : (R = !1,
                k = null)
            }
        } else
            R = !1
    }
    var B;
    if (typeof p == "function")
        B = function() {
            p(M)
        }
        ;
    else if (typeof MessageChannel < "u") {
        var j = new MessageChannel
          , X = j.port2;
        j.port1.onmessage = M,
        B = function() {
            X.postMessage(null)
        }
    } else
        B = function() {
            E(M, 0)
        }
        ;
    function W(P) {
        k = P,
        R || (R = !0,
        B())
    }
    function F(P, N) {
        _ = E(function() {
            P(e.unstable_now())
        }, N)
    }
    e.unstable_IdlePriority = 5,
    e.unstable_ImmediatePriority = 1,
    e.unstable_LowPriority = 4,
    e.unstable_NormalPriority = 3,
    e.unstable_Profiling = null,
    e.unstable_UserBlockingPriority = 2,
    e.unstable_cancelCallback = function(P) {
        P.callback = null
    }
    ,
    e.unstable_continueExecution = function() {
        w || y || (w = !0,
        W(C))
    }
    ,
    e.unstable_forceFrameRate = function(P) {
        0 > P || 125 < P ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : A = 0 < P ? Math.floor(1e3 / P) : 5
    }
    ,
    e.unstable_getCurrentPriorityLevel = function() {
        return m
    }
    ,
    e.unstable_getFirstCallbackNode = function() {
        return n(u)
    }
    ,
    e.unstable_next = function(P) {
        switch (m) {
        case 1:
        case 2:
        case 3:
            var N = 3;
            break;
        default:
            N = m
        }
        var D = m;
        m = N;
        try {
            return P()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_pauseExecution = function() {}
    ,
    e.unstable_requestPaint = function() {}
    ,
    e.unstable_runWithPriority = function(P, N) {
        switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            break;
        default:
            P = 3
        }
        var D = m;
        m = P;
        try {
            return N()
        } finally {
            m = D
        }
    }
    ,
    e.unstable_scheduleCallback = function(P, N, D) {
        var L = e.unstable_now();
        switch (typeof D == "object" && D !== null ? (D = D.delay,
        D = typeof D == "number" && 0 < D ? L + D : L) : D = L,
        P) {
        case 1:
            var V = -1;
            break;
        case 2:
            V = 250;
            break;
        case 5:
            V = 1073741823;
            break;
        case 4:
            V = 1e4;
            break;
        default:
            V = 5e3
        }
        return V = D + V,
        P = {
            id: f++,
            callback: N,
            priorityLevel: P,
            startTime: D,
            expirationTime: V,
            sortIndex: -1
        },
        D > L ? (P.sortIndex = D,
        t(a, P),
        n(u) === null && P === n(a) && (h ? (c(_),
        _ = -1) : h = !0,
        F(x, D - L))) : (P.sortIndex = V,
        t(u, P),
        w || y || (w = !0,
        W(C))),
        P
    }
    ,
    e.unstable_shouldYield = b,
    e.unstable_wrapCallback = function(P) {
        var N = m;
        return function() {
            var D = m;
            m = N;
            try {
                return P.apply(this, arguments)
            } finally {
                m = D
            }
        }
    }
}
)(cf);
af.exports = cf;
var Kv = af.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yv = g
  , Xe = Kv;
function I(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var df = new Set
  , uo = {};
function jn(e, t) {
    gr(e, t),
    gr(e + "Capture", t)
}
function gr(e, t) {
    for (uo[e] = t,
    e = 0; e < t.length; e++)
        df.add(t[e])
}
var jt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u")
  , Rs = Object.prototype.hasOwnProperty
  , Qv = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/
  , ic = {}
  , lc = {};
function Xv(e) {
    return Rs.call(lc, e) ? !0 : Rs.call(ic, e) ? !1 : Qv.test(e) ? lc[e] = !0 : (ic[e] = !0,
    !1)
}
function Zv(e, t, n, r) {
    if (n !== null && n.type === 0)
        return !1;
    switch (typeof t) {
    case "function":
    case "symbol":
        return !0;
    case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5),
        e !== "data-" && e !== "aria-");
    default:
        return !1
    }
}
function Jv(e, t, n, r) {
    if (t === null || typeof t > "u" || Zv(e, t, n, r))
        return !0;
    if (r)
        return !1;
    if (n !== null)
        switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
        }
    return !1
}
function Me(e, t, n, r, o, i, l) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4,
    this.attributeName = r,
    this.attributeNamespace = o,
    this.mustUseProperty = n,
    this.propertyName = e,
    this.type = t,
    this.sanitizeURL = i,
    this.removeEmptyString = l
}
var Se = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Se[e] = new Me(e,0,!1,e,null,!1,!1)
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    Se[t] = new Me(t,1,!1,e[1],null,!1,!1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Se[e] = new Me(e,2,!1,e.toLowerCase(),null,!1,!1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Se[e] = new Me(e,2,!1,e,null,!1,!1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Se[e] = new Me(e,3,!1,e.toLowerCase(),null,!1,!1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Se[e] = new Me(e,3,!0,e,null,!1,!1)
});
["capture", "download"].forEach(function(e) {
    Se[e] = new Me(e,4,!1,e,null,!1,!1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    Se[e] = new Me(e,6,!1,e,null,!1,!1)
});
["rowSpan", "start"].forEach(function(e) {
    Se[e] = new Me(e,5,!1,e.toLowerCase(),null,!1,!1)
});
var Uu = /[\-:]([a-z])/g;
function Bu(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(Uu, Bu);
    Se[t] = new Me(t,1,!1,e,null,!1,!1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Uu, Bu);
    Se[t] = new Me(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Uu, Bu);
    Se[t] = new Me(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    Se[e] = new Me(e,1,!1,e.toLowerCase(),null,!1,!1)
});
Se.xlinkHref = new Me("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);
["src", "href", "action", "formAction"].forEach(function(e) {
    Se[e] = new Me(e,1,!1,e.toLowerCase(),null,!0,!0)
});
function ju(e, t, n, r) {
    var o = Se.hasOwnProperty(t) ? Se[t] : null;
    (o !== null ? o.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Jv(t, n, o, r) && (n = null),
    r || o === null ? Xv(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : o.mustUseProperty ? e[o.propertyName] = n === null ? o.type === 3 ? !1 : "" : n : (t = o.attributeName,
    r = o.attributeNamespace,
    n === null ? e.removeAttribute(t) : (o = o.type,
    n = o === 3 || o === 4 && n === !0 ? "" : "" + n,
    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Yt = Yv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  , Wo = Symbol.for("react.element")
  , Zn = Symbol.for("react.portal")
  , Jn = Symbol.for("react.fragment")
  , $u = Symbol.for("react.strict_mode")
  , Ns = Symbol.for("react.profiler")
  , ff = Symbol.for("react.provider")
  , pf = Symbol.for("react.context")
  , Wu = Symbol.for("react.forward_ref")
  , Ts = Symbol.for("react.suspense")
  , Ps = Symbol.for("react.suspense_list")
  , Hu = Symbol.for("react.memo")
  , tn = Symbol.for("react.lazy")
  , mf = Symbol.for("react.offscreen")
  , sc = Symbol.iterator;
function br(e) {
    return e === null || typeof e != "object" ? null : (e = sc && e[sc] || e["@@iterator"],
    typeof e == "function" ? e : null)
}
var le = Object.assign, zl;
function Kr(e) {
    if (zl === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            zl = t && t[1] || ""
        }
    return `
` + zl + e
}
var Fl = !1;
function Vl(e, t) {
    if (!e || Fl)
        return "";
    Fl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                throw Error()
            }
            ,
            Object.defineProperty(t.prototype, "props", {
                set: function() {
                    throw Error()
                }
            }),
            typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (a) {
                    var r = a
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (a) {
                    r = a
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (a) {
                r = a
            }
            e()
        }
    } catch (a) {
        if (a && r && typeof a.stack == "string") {
            for (var o = a.stack.split(`
`), i = r.stack.split(`
`), l = o.length - 1, s = i.length - 1; 1 <= l && 0 <= s && o[l] !== i[s]; )
                s--;
            for (; 1 <= l && 0 <= s; l--,
            s--)
                if (o[l] !== i[s]) {
                    if (l !== 1 || s !== 1)
                        do
                            if (l--,
                            s--,
                            0 > s || o[l] !== i[s]) {
                                var u = `
` + o[l].replace(" at new ", " at ");
                                return e.displayName && u.includes("<anonymous>") && (u = u.replace("<anonymous>", e.displayName)),
                                u
                            }
                        while (1 <= l && 0 <= s);
                    break
                }
        }
    } finally {
        Fl = !1,
        Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? Kr(e) : ""
}
function qv(e) {
    switch (e.tag) {
    case 5:
        return Kr(e.type);
    case 16:
        return Kr("Lazy");
    case 13:
        return Kr("Suspense");
    case 19:
        return Kr("SuspenseList");
    case 0:
    case 2:
    case 15:
        return e = Vl(e.type, !1),
        e;
    case 11:
        return e = Vl(e.type.render, !1),
        e;
    case 1:
        return e = Vl(e.type, !0),
        e;
    default:
        return ""
    }
}
function Is(e) {
    if (e == null)
        return null;
    if (typeof e == "function")
        return e.displayName || e.name || null;
    if (typeof e == "string")
        return e;
    switch (e) {
    case Jn:
        return "Fragment";
    case Zn:
        return "Portal";
    case Ns:
        return "Profiler";
    case $u:
        return "StrictMode";
    case Ts:
        return "Suspense";
    case Ps:
        return "SuspenseList"
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
        case pf:
            return (e.displayName || "Context") + ".Consumer";
        case ff:
            return (e._context.displayName || "Context") + ".Provider";
        case Wu:
            var t = e.render;
            return e = e.displayName,
            e || (e = t.displayName || t.name || "",
            e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"),
            e;
        case Hu:
            return t = e.displayName || null,
            t !== null ? t : Is(e.type) || "Memo";
        case tn:
            t = e._payload,
            e = e._init;
            try {
                return Is(e(t))
            } catch {}
        }
    return null
}
function eg(e) {
    var t = e.type;
    switch (e.tag) {
    case 24:
        return "Cache";
    case 9:
        return (t.displayName || "Context") + ".Consumer";
    case 10:
        return (t._context.displayName || "Context") + ".Provider";
    case 18:
        return "DehydratedFragment";
    case 11:
        return e = t.render,
        e = e.displayName || e.name || "",
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7:
        return "Fragment";
    case 5:
        return t;
    case 4:
        return "Portal";
    case 3:
        return "Root";
    case 6:
        return "Text";
    case 16:
        return Is(t);
    case 8:
        return t === $u ? "StrictMode" : "Mode";
    case 22:
        return "Offscreen";
    case 12:
        return "Profiler";
    case 21:
        return "Scope";
    case 13:
        return "Suspense";
    case 19:
        return "SuspenseList";
    case 25:
        return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof t == "function")
            return t.displayName || t.name || null;
        if (typeof t == "string")
            return t
    }
    return null
}
function gn(e) {
    switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
        return e;
    case "object":
        return e;
    default:
        return ""
    }
}
function hf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}
function tg(e) {
    var t = hf(e) ? "checked" : "value"
      , n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t)
      , r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get
          , i = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return o.call(this)
            },
            set: function(l) {
                r = "" + l,
                i.call(this, l)
            }
        }),
        Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }),
        {
            getValue: function() {
                return r
            },
            setValue: function(l) {
                r = "" + l
            },
            stopTracking: function() {
                e._valueTracker = null,
                delete e[t]
            }
        }
    }
}
function Ho(e) {
    e._valueTracker || (e._valueTracker = tg(e))
}
function vf(e) {
    if (!e)
        return !1;
    var t = e._valueTracker;
    if (!t)
        return !0;
    var n = t.getValue()
      , r = "";
    return e && (r = hf(e) ? e.checked ? "true" : "false" : e.value),
    e = r,
    e !== n ? (t.setValue(e),
    !0) : !1
}
function Oi(e) {
    if (e = e || (typeof document < "u" ? document : void 0),
    typeof e > "u")
        return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function As(e, t) {
    var n = t.checked;
    return le({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}
function uc(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue
      , r = t.checked != null ? t.checked : t.defaultChecked;
    n = gn(t.value != null ? t.value : n),
    e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}
function gf(e, t) {
    t = t.checked,
    t != null && ju(e, "checked", t, !1)
}
function Ms(e, t) {
    gf(e, t);
    var n = gn(t.value)
      , r = t.type;
    if (n != null)
        r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? Os(e, t.type, n) : t.hasOwnProperty("defaultValue") && Os(e, t.type, gn(t.defaultValue)),
    t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}
function ac(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
            return;
        t = "" + e._wrapperState.initialValue,
        n || t === e.value || (e.value = t),
        e.defaultValue = t
    }
    n = e.name,
    n !== "" && (e.name = ""),
    e.defaultChecked = !!e._wrapperState.initialChecked,
    n !== "" && (e.name = n)
}
function Os(e, t, n) {
    (t !== "number" || Oi(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var Yr = Array.isArray;
function ar(e, t, n, r) {
    if (e = e.options,
    t) {
        t = {};
        for (var o = 0; o < n.length; o++)
            t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            o = t.hasOwnProperty("$" + e[n].value),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + gn(n),
        t = null,
        o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                e[o].selected = !0,
                r && (e[o].defaultSelected = !0);
                return
            }
            t !== null || e[o].disabled || (t = e[o])
        }
        t !== null && (t.selected = !0)
    }
}
function Ds(e, t) {
    if (t.dangerouslySetInnerHTML != null)
        throw Error(I(91));
    return le({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}
function cc(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children,
        t = t.defaultValue,
        n != null) {
            if (t != null)
                throw Error(I(92));
            if (Yr(n)) {
                if (1 < n.length)
                    throw Error(I(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""),
        n = t
    }
    e._wrapperState = {
        initialValue: gn(n)
    }
}
function yf(e, t) {
    var n = gn(t.value)
      , r = gn(t.defaultValue);
    n != null && (n = "" + n,
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r)
}
function dc(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}
function wf(e) {
    switch (e) {
    case "svg":
        return "http://www.w3.org/2000/svg";
    case "math":
        return "http://www.w3.org/1998/Math/MathML";
    default:
        return "http://www.w3.org/1999/xhtml"
    }
}
function bs(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? wf(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var Go, Ef = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, o) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, o)
        })
    }
    : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML"in e)
        e.innerHTML = t;
    else {
        for (Go = Go || document.createElement("div"),
        Go.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
        t = Go.firstChild; e.firstChild; )
            e.removeChild(e.firstChild);
        for (; t.firstChild; )
            e.appendChild(t.firstChild)
    }
});
function ao(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var Jr = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
}
  , ng = ["Webkit", "ms", "Moz", "O"];
Object.keys(Jr).forEach(function(e) {
    ng.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1),
        Jr[t] = Jr[e]
    })
});
function Sf(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Jr.hasOwnProperty(e) && Jr[e] ? ("" + t).trim() : t + "px"
}
function xf(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0
              , o = Sf(n, t[n], r);
            n === "float" && (n = "cssFloat"),
            r ? e.setProperty(n, o) : e[n] = o
        }
}
var rg = le({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});
function Ls(e, t) {
    if (t) {
        if (rg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(I(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null)
                throw Error(I(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html"in t.dangerouslySetInnerHTML))
                throw Error(I(61))
        }
        if (t.style != null && typeof t.style != "object")
            throw Error(I(62))
    }
}
function zs(e, t) {
    if (e.indexOf("-") === -1)
        return typeof t.is == "string";
    switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
        return !1;
    default:
        return !0
    }
}
var Fs = null;
function Gu(e) {
    return e = e.target || e.srcElement || window,
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
}
var Vs = null
  , cr = null
  , dr = null;
function fc(e) {
    if (e = bo(e)) {
        if (typeof Vs != "function")
            throw Error(I(280));
        var t = e.stateNode;
        t && (t = ml(t),
        Vs(e.stateNode, e.type, t))
    }
}
function Cf(e) {
    cr ? dr ? dr.push(e) : dr = [e] : cr = e
}
function _f() {
    if (cr) {
        var e = cr
          , t = dr;
        if (dr = cr = null,
        fc(e),
        t)
            for (e = 0; e < t.length; e++)
                fc(t[e])
    }
}
function kf(e, t) {
    return e(t)
}
function Rf() {}
var Ul = !1;
function Nf(e, t, n) {
    if (Ul)
        return e(t, n);
    Ul = !0;
    try {
        return kf(e, t, n)
    } finally {
        Ul = !1,
        (cr !== null || dr !== null) && (Rf(),
        _f())
    }
}
function co(e, t) {
    var n = e.stateNode;
    if (n === null)
        return null;
    var r = ml(n);
    if (r === null)
        return null;
    n = r[t];
    e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
        (r = !r.disabled) || (e = e.type,
        r = !(e === "button" || e === "input" || e === "select" || e === "textarea")),
        e = !r;
        break e;
    default:
        e = !1
    }
    if (e)
        return null;
    if (n && typeof n != "function")
        throw Error(I(231, t, typeof n));
    return n
}
var Us = !1;
if (jt)
    try {
        var Lr = {};
        Object.defineProperty(Lr, "passive", {
            get: function() {
                Us = !0
            }
        }),
        window.addEventListener("test", Lr, Lr),
        window.removeEventListener("test", Lr, Lr)
    } catch {
        Us = !1
    }
function og(e, t, n, r, o, i, l, s, u) {
    var a = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, a)
    } catch (f) {
        this.onError(f)
    }
}
var qr = !1
  , Di = null
  , bi = !1
  , Bs = null
  , ig = {
    onError: function(e) {
        qr = !0,
        Di = e
    }
};
function lg(e, t, n, r, o, i, l, s, u) {
    qr = !1,
    Di = null,
    og.apply(ig, arguments)
}
function sg(e, t, n, r, o, i, l, s, u) {
    if (lg.apply(this, arguments),
    qr) {
        if (qr) {
            var a = Di;
            qr = !1,
            Di = null
        } else
            throw Error(I(198));
        bi || (bi = !0,
        Bs = a)
    }
}
function $n(e) {
    var t = e
      , n = e;
    if (e.alternate)
        for (; t.return; )
            t = t.return;
    else {
        e = t;
        do
            t = e,
            t.flags & 4098 && (n = t.return),
            e = t.return;
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Tf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate,
        e !== null && (t = e.memoizedState)),
        t !== null)
            return t.dehydrated
    }
    return null
}
function pc(e) {
    if ($n(e) !== e)
        throw Error(I(188))
}
function ug(e) {
    var t = e.alternate;
    if (!t) {
        if (t = $n(e),
        t === null)
            throw Error(I(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null)
            break;
        var i = o.alternate;
        if (i === null) {
            if (r = o.return,
            r !== null) {
                n = r;
                continue
            }
            break
        }
        if (o.child === i.child) {
            for (i = o.child; i; ) {
                if (i === n)
                    return pc(o),
                    e;
                if (i === r)
                    return pc(o),
                    t;
                i = i.sibling
            }
            throw Error(I(188))
        }
        if (n.return !== r.return)
            n = o,
            r = i;
        else {
            for (var l = !1, s = o.child; s; ) {
                if (s === n) {
                    l = !0,
                    n = o,
                    r = i;
                    break
                }
                if (s === r) {
                    l = !0,
                    r = o,
                    n = i;
                    break
                }
                s = s.sibling
            }
            if (!l) {
                for (s = i.child; s; ) {
                    if (s === n) {
                        l = !0,
                        n = i,
                        r = o;
                        break
                    }
                    if (s === r) {
                        l = !0,
                        r = i,
                        n = o;
                        break
                    }
                    s = s.sibling
                }
                if (!l)
                    throw Error(I(189))
            }
        }
        if (n.alternate !== r)
            throw Error(I(190))
    }
    if (n.tag !== 3)
        throw Error(I(188));
    return n.stateNode.current === n ? e : t
}
function Pf(e) {
    return e = ug(e),
    e !== null ? If(e) : null
}
function If(e) {
    if (e.tag === 5 || e.tag === 6)
        return e;
    for (e = e.child; e !== null; ) {
        var t = If(e);
        if (t !== null)
            return t;
        e = e.sibling
    }
    return null
}
var Af = Xe.unstable_scheduleCallback
  , mc = Xe.unstable_cancelCallback
  , ag = Xe.unstable_shouldYield
  , cg = Xe.unstable_requestPaint
  , ue = Xe.unstable_now
  , dg = Xe.unstable_getCurrentPriorityLevel
  , Ku = Xe.unstable_ImmediatePriority
  , Mf = Xe.unstable_UserBlockingPriority
  , Li = Xe.unstable_NormalPriority
  , fg = Xe.unstable_LowPriority
  , Of = Xe.unstable_IdlePriority
  , cl = null
  , Pt = null;
function pg(e) {
    if (Pt && typeof Pt.onCommitFiberRoot == "function")
        try {
            Pt.onCommitFiberRoot(cl, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var vt = Math.clz32 ? Math.clz32 : vg
  , mg = Math.log
  , hg = Math.LN2;
function vg(e) {
    return e >>>= 0,
    e === 0 ? 32 : 31 - (mg(e) / hg | 0) | 0
}
var Ko = 64
  , Yo = 4194304;
function Qr(e) {
    switch (e & -e) {
    case 1:
        return 1;
    case 2:
        return 2;
    case 4:
        return 4;
    case 8:
        return 8;
    case 16:
        return 16;
    case 32:
        return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return e & 130023424;
    case 134217728:
        return 134217728;
    case 268435456:
        return 268435456;
    case 536870912:
        return 536870912;
    case 1073741824:
        return 1073741824;
    default:
        return e
    }
}
function zi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
        return 0;
    var r = 0
      , o = e.suspendedLanes
      , i = e.pingedLanes
      , l = n & 268435455;
    if (l !== 0) {
        var s = l & ~o;
        s !== 0 ? r = Qr(s) : (i &= l,
        i !== 0 && (r = Qr(i)))
    } else
        l = n & ~o,
        l !== 0 ? r = Qr(l) : i !== 0 && (r = Qr(i));
    if (r === 0)
        return 0;
    if (t !== 0 && t !== r && !(t & o) && (o = r & -r,
    i = t & -t,
    o >= i || o === 16 && (i & 4194240) !== 0))
        return t;
    if (r & 4 && (r |= n & 16),
    t = e.entangledLanes,
    t !== 0)
        for (e = e.entanglements,
        t &= r; 0 < t; )
            n = 31 - vt(t),
            o = 1 << n,
            r |= e[n],
            t &= ~o;
    return r
}
function gg(e, t) {
    switch (e) {
    case 1:
    case 2:
    case 4:
        return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
        return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
        return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
        return -1;
    default:
        return -1
    }
}
function yg(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, i = e.pendingLanes; 0 < i; ) {
        var l = 31 - vt(i)
          , s = 1 << l
          , u = o[l];
        u === -1 ? (!(s & n) || s & r) && (o[l] = gg(s, t)) : u <= t && (e.expiredLanes |= s),
        i &= ~s
    }
}
function js(e) {
    return e = e.pendingLanes & -1073741825,
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}
function Df() {
    var e = Ko;
    return Ko <<= 1,
    !(Ko & 4194240) && (Ko = 64),
    e
}
function Bl(e) {
    for (var t = [], n = 0; 31 > n; n++)
        t.push(e);
    return t
}
function Oo(e, t, n) {
    e.pendingLanes |= t,
    t !== 536870912 && (e.suspendedLanes = 0,
    e.pingedLanes = 0),
    e = e.eventTimes,
    t = 31 - vt(t),
    e[t] = n
}
function wg(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t,
    e.suspendedLanes = 0,
    e.pingedLanes = 0,
    e.expiredLanes &= t,
    e.mutableReadLanes &= t,
    e.entangledLanes &= t,
    t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - vt(n)
          , i = 1 << o;
        t[o] = 0,
        r[o] = -1,
        e[o] = -1,
        n &= ~i
    }
}
function Yu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
        var r = 31 - vt(n)
          , o = 1 << r;
        o & t | e[r] & t && (e[r] |= t),
        n &= ~o
    }
}
var Q = 0;
function bf(e) {
    return e &= -e,
    1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var Lf, Qu, zf, Ff, Vf, $s = !1, Qo = [], an = null, cn = null, dn = null, fo = new Map, po = new Map, rn = [], Eg = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function hc(e, t) {
    switch (e) {
    case "focusin":
    case "focusout":
        an = null;
        break;
    case "dragenter":
    case "dragleave":
        cn = null;
        break;
    case "mouseover":
    case "mouseout":
        dn = null;
        break;
    case "pointerover":
    case "pointerout":
        fo.delete(t.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture":
        po.delete(t.pointerId)
    }
}
function zr(e, t, n, r, o, i) {
    return e === null || e.nativeEvent !== i ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [o]
    },
    t !== null && (t = bo(t),
    t !== null && Qu(t)),
    e) : (e.eventSystemFlags |= r,
    t = e.targetContainers,
    o !== null && t.indexOf(o) === -1 && t.push(o),
    e)
}
function Sg(e, t, n, r, o) {
    switch (t) {
    case "focusin":
        return an = zr(an, e, t, n, r, o),
        !0;
    case "dragenter":
        return cn = zr(cn, e, t, n, r, o),
        !0;
    case "mouseover":
        return dn = zr(dn, e, t, n, r, o),
        !0;
    case "pointerover":
        var i = o.pointerId;
        return fo.set(i, zr(fo.get(i) || null, e, t, n, r, o)),
        !0;
    case "gotpointercapture":
        return i = o.pointerId,
        po.set(i, zr(po.get(i) || null, e, t, n, r, o)),
        !0
    }
    return !1
}
function Uf(e) {
    var t = Pn(e.target);
    if (t !== null) {
        var n = $n(t);
        if (n !== null) {
            if (t = n.tag,
            t === 13) {
                if (t = Tf(n),
                t !== null) {
                    e.blockedOn = t,
                    Vf(e.priority, function() {
                        zf(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}
function Ei(e) {
    if (e.blockedOn !== null)
        return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = Ws(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type,n);
            Fs = r,
            n.target.dispatchEvent(r),
            Fs = null
        } else
            return t = bo(n),
            t !== null && Qu(t),
            e.blockedOn = n,
            !1;
        t.shift()
    }
    return !0
}
function vc(e, t, n) {
    Ei(e) && n.delete(t)
}
function xg() {
    $s = !1,
    an !== null && Ei(an) && (an = null),
    cn !== null && Ei(cn) && (cn = null),
    dn !== null && Ei(dn) && (dn = null),
    fo.forEach(vc),
    po.forEach(vc)
}
function Fr(e, t) {
    e.blockedOn === t && (e.blockedOn = null,
    $s || ($s = !0,
    Xe.unstable_scheduleCallback(Xe.unstable_NormalPriority, xg)))
}
function mo(e) {
    function t(o) {
        return Fr(o, e)
    }
    if (0 < Qo.length) {
        Fr(Qo[0], e);
        for (var n = 1; n < Qo.length; n++) {
            var r = Qo[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (an !== null && Fr(an, e),
    cn !== null && Fr(cn, e),
    dn !== null && Fr(dn, e),
    fo.forEach(t),
    po.forEach(t),
    n = 0; n < rn.length; n++)
        r = rn[n],
        r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < rn.length && (n = rn[0],
    n.blockedOn === null); )
        Uf(n),
        n.blockedOn === null && rn.shift()
}
var fr = Yt.ReactCurrentBatchConfig
  , Fi = !0;
function Cg(e, t, n, r) {
    var o = Q
      , i = fr.transition;
    fr.transition = null;
    try {
        Q = 1,
        Xu(e, t, n, r)
    } finally {
        Q = o,
        fr.transition = i
    }
}
function _g(e, t, n, r) {
    var o = Q
      , i = fr.transition;
    fr.transition = null;
    try {
        Q = 4,
        Xu(e, t, n, r)
    } finally {
        Q = o,
        fr.transition = i
    }
}
function Xu(e, t, n, r) {
    if (Fi) {
        var o = Ws(e, t, n, r);
        if (o === null)
            Zl(e, t, r, Vi, n),
            hc(e, r);
        else if (Sg(o, e, t, n, r))
            r.stopPropagation();
        else if (hc(e, r),
        t & 4 && -1 < Eg.indexOf(e)) {
            for (; o !== null; ) {
                var i = bo(o);
                if (i !== null && Lf(i),
                i = Ws(e, t, n, r),
                i === null && Zl(e, t, r, Vi, n),
                i === o)
                    break;
                o = i
            }
            o !== null && r.stopPropagation()
        } else
            Zl(e, t, r, null, n)
    }
}
var Vi = null;
function Ws(e, t, n, r) {
    if (Vi = null,
    e = Gu(r),
    e = Pn(e),
    e !== null)
        if (t = $n(e),
        t === null)
            e = null;
        else if (n = t.tag,
        n === 13) {
            if (e = Tf(t),
            e !== null)
                return e;
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null
        } else
            t !== e && (e = null);
    return Vi = e,
    null
}
function Bf(e) {
    switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
        return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
        return 4;
    case "message":
        switch (dg()) {
        case Ku:
            return 1;
        case Mf:
            return 4;
        case Li:
        case fg:
            return 16;
        case Of:
            return 536870912;
        default:
            return 16
        }
    default:
        return 16
    }
}
var ln = null
  , Zu = null
  , Si = null;
function jf() {
    if (Si)
        return Si;
    var e, t = Zu, n = t.length, r, o = "value"in ln ? ln.value : ln.textContent, i = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++)
        ;
    var l = n - e;
    for (r = 1; r <= l && t[n - r] === o[i - r]; r++)
        ;
    return Si = o.slice(e, 1 < r ? 1 - r : void 0)
}
function xi(e) {
    var t = e.keyCode;
    return "charCode"in e ? (e = e.charCode,
    e === 0 && t === 13 && (e = 13)) : e = t,
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
}
function Xo() {
    return !0
}
function gc() {
    return !1
}
function Je(e) {
    function t(n, r, o, i, l) {
        this._reactName = n,
        this._targetInst = o,
        this.type = r,
        this.nativeEvent = i,
        this.target = l,
        this.currentTarget = null;
        for (var s in e)
            e.hasOwnProperty(s) && (n = e[s],
            this[s] = n ? n(i) : i[s]);
        return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Xo : gc,
        this.isPropagationStopped = gc,
        this
    }
    return le(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
            this.isDefaultPrevented = Xo)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
            this.isPropagationStopped = Xo)
        },
        persist: function() {},
        isPersistent: Xo
    }),
    t
}
var Pr = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
        return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0
}, Ju = Je(Pr), Do = le({}, Pr, {
    view: 0,
    detail: 0
}), kg = Je(Do), jl, $l, Vr, dl = le({}, Do, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: qu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
    },
    movementX: function(e) {
        return "movementX"in e ? e.movementX : (e !== Vr && (Vr && e.type === "mousemove" ? (jl = e.screenX - Vr.screenX,
        $l = e.screenY - Vr.screenY) : $l = jl = 0,
        Vr = e),
        jl)
    },
    movementY: function(e) {
        return "movementY"in e ? e.movementY : $l
    }
}), yc = Je(dl), Rg = le({}, dl, {
    dataTransfer: 0
}), Ng = Je(Rg), Tg = le({}, Do, {
    relatedTarget: 0
}), Wl = Je(Tg), Pg = le({}, Pr, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
}), Ig = Je(Pg), Ag = le({}, Pr, {
    clipboardData: function(e) {
        return "clipboardData"in e ? e.clipboardData : window.clipboardData
    }
}), Mg = Je(Ag), Og = le({}, Pr, {
    data: 0
}), wc = Je(Og), Dg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
}, bg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
}, Lg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
};
function zg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Lg[e]) ? !!t[e] : !1
}
function qu() {
    return zg
}
var Fg = le({}, Do, {
    key: function(e) {
        if (e.key) {
            var t = Dg[e.key] || e.key;
            if (t !== "Unidentified")
                return t
        }
        return e.type === "keypress" ? (e = xi(e),
        e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? bg[e.keyCode] || "Unidentified" : ""
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: qu,
    charCode: function(e) {
        return e.type === "keypress" ? xi(e) : 0
    },
    keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    },
    which: function(e) {
        return e.type === "keypress" ? xi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
    }
})
  , Vg = Je(Fg)
  , Ug = le({}, dl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
})
  , Ec = Je(Ug)
  , Bg = le({}, Do, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: qu
})
  , jg = Je(Bg)
  , $g = le({}, Pr, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
})
  , Wg = Je($g)
  , Hg = le({}, dl, {
    deltaX: function(e) {
        return "deltaX"in e ? e.deltaX : "wheelDeltaX"in e ? -e.wheelDeltaX : 0
    },
    deltaY: function(e) {
        return "deltaY"in e ? e.deltaY : "wheelDeltaY"in e ? -e.wheelDeltaY : "wheelDelta"in e ? -e.wheelDelta : 0
    },
    deltaZ: 0,
    deltaMode: 0
})
  , Gg = Je(Hg)
  , Kg = [9, 13, 27, 32]
  , ea = jt && "CompositionEvent"in window
  , eo = null;
jt && "documentMode"in document && (eo = document.documentMode);
var Yg = jt && "TextEvent"in window && !eo
  , $f = jt && (!ea || eo && 8 < eo && 11 >= eo)
  , Sc = String.fromCharCode(32)
  , xc = !1;
function Wf(e, t) {
    switch (e) {
    case "keyup":
        return Kg.indexOf(t.keyCode) !== -1;
    case "keydown":
        return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
        return !0;
    default:
        return !1
    }
}
function Hf(e) {
    return e = e.detail,
    typeof e == "object" && "data"in e ? e.data : null
}
var qn = !1;
function Qg(e, t) {
    switch (e) {
    case "compositionend":
        return Hf(t);
    case "keypress":
        return t.which !== 32 ? null : (xc = !0,
        Sc);
    case "textInput":
        return e = t.data,
        e === Sc && xc ? null : e;
    default:
        return null
    }
}
function Xg(e, t) {
    if (qn)
        return e === "compositionend" || !ea && Wf(e, t) ? (e = jf(),
        Si = Zu = ln = null,
        qn = !1,
        e) : null;
    switch (e) {
    case "paste":
        return null;
    case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
            if (t.char && 1 < t.char.length)
                return t.char;
            if (t.which)
                return String.fromCharCode(t.which)
        }
        return null;
    case "compositionend":
        return $f && t.locale !== "ko" ? null : t.data;
    default:
        return null
    }
}
var Zg = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};
function Cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Zg[e.type] : t === "textarea"
}
function Gf(e, t, n, r) {
    Cf(r),
    t = Ui(t, "onChange"),
    0 < t.length && (n = new Ju("onChange","change",null,n,r),
    e.push({
        event: n,
        listeners: t
    }))
}
var to = null
  , ho = null;
function Jg(e) {
    rp(e, 0)
}
function fl(e) {
    var t = nr(e);
    if (vf(t))
        return e
}
function qg(e, t) {
    if (e === "change")
        return t
}
var Kf = !1;
if (jt) {
    var Hl;
    if (jt) {
        var Gl = "oninput"in document;
        if (!Gl) {
            var _c = document.createElement("div");
            _c.setAttribute("oninput", "return;"),
            Gl = typeof _c.oninput == "function"
        }
        Hl = Gl
    } else
        Hl = !1;
    Kf = Hl && (!document.documentMode || 9 < document.documentMode)
}
function kc() {
    to && (to.detachEvent("onpropertychange", Yf),
    ho = to = null)
}
function Yf(e) {
    if (e.propertyName === "value" && fl(ho)) {
        var t = [];
        Gf(t, ho, e, Gu(e)),
        Nf(Jg, t)
    }
}
function ey(e, t, n) {
    e === "focusin" ? (kc(),
    to = t,
    ho = n,
    to.attachEvent("onpropertychange", Yf)) : e === "focusout" && kc()
}
function ty(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return fl(ho)
}
function ny(e, t) {
    if (e === "click")
        return fl(t)
}
function ry(e, t) {
    if (e === "input" || e === "change")
        return fl(t)
}
function oy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var yt = typeof Object.is == "function" ? Object.is : oy;
function vo(e, t) {
    if (yt(e, t))
        return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
    var n = Object.keys(e)
      , r = Object.keys(t);
    if (n.length !== r.length)
        return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Rs.call(t, o) || !yt(e[o], t[o]))
            return !1
    }
    return !0
}
function Rc(e) {
    for (; e && e.firstChild; )
        e = e.firstChild;
    return e
}
function Nc(e, t) {
    var n = Rc(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length,
            e <= t && r >= t)
                return {
                    node: n,
                    offset: t - e
                };
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Rc(n)
    }
}
function Qf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qf(e, t.parentNode) : "contains"in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}
function Xf() {
    for (var e = window, t = Oi(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n)
            e = t.contentWindow;
        else
            break;
        t = Oi(e.document)
    }
    return t
}
function ta(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}
function iy(e) {
    var t = Xf()
      , n = e.focusedElem
      , r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Qf(n.ownerDocument.documentElement, n)) {
        if (r !== null && ta(n)) {
            if (t = r.start,
            e = r.end,
            e === void 0 && (e = t),
            "selectionStart"in n)
                n.selectionStart = t,
                n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window,
            e.getSelection) {
                e = e.getSelection();
                var o = n.textContent.length
                  , i = Math.min(r.start, o);
                r = r.end === void 0 ? i : Math.min(r.end, o),
                !e.extend && i > r && (o = r,
                r = i,
                i = o),
                o = Nc(n, i);
                var l = Nc(n, r);
                o && l && (e.rangeCount !== 1 || e.anchorNode !== o.node || e.anchorOffset !== o.offset || e.focusNode !== l.node || e.focusOffset !== l.offset) && (t = t.createRange(),
                t.setStart(o.node, o.offset),
                e.removeAllRanges(),
                i > r ? (e.addRange(t),
                e.extend(l.node, l.offset)) : (t.setEnd(l.node, l.offset),
                e.addRange(t)))
            }
        }
        for (t = [],
        e = n; e = e.parentNode; )
            e.nodeType === 1 && t.push({
                element: e,
                left: e.scrollLeft,
                top: e.scrollTop
            });
        for (typeof n.focus == "function" && n.focus(),
        n = 0; n < t.length; n++)
            e = t[n],
            e.element.scrollLeft = e.left,
            e.element.scrollTop = e.top
    }
}
var ly = jt && "documentMode"in document && 11 >= document.documentMode
  , er = null
  , Hs = null
  , no = null
  , Gs = !1;
function Tc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Gs || er == null || er !== Oi(r) || (r = er,
    "selectionStart"in r && ta(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(),
    r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }),
    no && vo(no, r) || (no = r,
    r = Ui(Hs, "onSelect"),
    0 < r.length && (t = new Ju("onSelect","select",null,t,n),
    e.push({
        event: t,
        listeners: r
    }),
    t.target = er)))
}
function Zo(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(),
    n["Webkit" + e] = "webkit" + t,
    n["Moz" + e] = "moz" + t,
    n
}
var tr = {
    animationend: Zo("Animation", "AnimationEnd"),
    animationiteration: Zo("Animation", "AnimationIteration"),
    animationstart: Zo("Animation", "AnimationStart"),
    transitionend: Zo("Transition", "TransitionEnd")
}
  , Kl = {}
  , Zf = {};
jt && (Zf = document.createElement("div").style,
"AnimationEvent"in window || (delete tr.animationend.animation,
delete tr.animationiteration.animation,
delete tr.animationstart.animation),
"TransitionEvent"in window || delete tr.transitionend.transition);
function pl(e) {
    if (Kl[e])
        return Kl[e];
    if (!tr[e])
        return e;
    var t = tr[e], n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Zf)
            return Kl[e] = t[n];
    return e
}
var Jf = pl("animationend")
  , qf = pl("animationiteration")
  , ep = pl("animationstart")
  , tp = pl("transitionend")
  , np = new Map
  , Pc = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function Cn(e, t) {
    np.set(e, t),
    jn(t, [e])
}
for (var Yl = 0; Yl < Pc.length; Yl++) {
    var Ql = Pc[Yl]
      , sy = Ql.toLowerCase()
      , uy = Ql[0].toUpperCase() + Ql.slice(1);
    Cn(sy, "on" + uy)
}
Cn(Jf, "onAnimationEnd");
Cn(qf, "onAnimationIteration");
Cn(ep, "onAnimationStart");
Cn("dblclick", "onDoubleClick");
Cn("focusin", "onFocus");
Cn("focusout", "onBlur");
Cn(tp, "onTransitionEnd");
gr("onMouseEnter", ["mouseout", "mouseover"]);
gr("onMouseLeave", ["mouseout", "mouseover"]);
gr("onPointerEnter", ["pointerout", "pointerover"]);
gr("onPointerLeave", ["pointerout", "pointerover"]);
jn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
jn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
jn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
jn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
jn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Xr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" ")
  , ay = new Set("cancel close invalid load scroll toggle".split(" ").concat(Xr));
function Ic(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n,
    sg(r, t, void 0, e),
    e.currentTarget = null
}
function rp(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n]
          , o = r.event;
        r = r.listeners;
        e: {
            var i = void 0;
            if (t)
                for (var l = r.length - 1; 0 <= l; l--) {
                    var s = r[l]
                      , u = s.instance
                      , a = s.currentTarget;
                    if (s = s.listener,
                    u !== i && o.isPropagationStopped())
                        break e;
                    Ic(o, s, a),
                    i = u
                }
            else
                for (l = 0; l < r.length; l++) {
                    if (s = r[l],
                    u = s.instance,
                    a = s.currentTarget,
                    s = s.listener,
                    u !== i && o.isPropagationStopped())
                        break e;
                    Ic(o, s, a),
                    i = u
                }
        }
    }
    if (bi)
        throw e = Bs,
        bi = !1,
        Bs = null,
        e
}
function ee(e, t) {
    var n = t[Zs];
    n === void 0 && (n = t[Zs] = new Set);
    var r = e + "__bubble";
    n.has(r) || (op(t, e, 2, !1),
    n.add(r))
}
function Xl(e, t, n) {
    var r = 0;
    t && (r |= 4),
    op(n, e, r, t)
}
var Jo = "_reactListening" + Math.random().toString(36).slice(2);
function go(e) {
    if (!e[Jo]) {
        e[Jo] = !0,
        df.forEach(function(n) {
            n !== "selectionchange" && (ay.has(n) || Xl(n, !1, e),
            Xl(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Jo] || (t[Jo] = !0,
        Xl("selectionchange", !1, t))
    }
}
function op(e, t, n, r) {
    switch (Bf(t)) {
    case 1:
        var o = Cg;
        break;
    case 4:
        o = _g;
        break;
    default:
        o = Xu
    }
    n = o.bind(null, t, n, e),
    o = void 0,
    !Us || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0),
    r ? o !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
        passive: o
    }) : e.addEventListener(t, n, !1)
}
function Zl(e, t, n, r, o) {
    var i = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (; ; ) {
            if (r === null)
                return;
            var l = r.tag;
            if (l === 3 || l === 4) {
                var s = r.stateNode.containerInfo;
                if (s === o || s.nodeType === 8 && s.parentNode === o)
                    break;
                if (l === 4)
                    for (l = r.return; l !== null; ) {
                        var u = l.tag;
                        if ((u === 3 || u === 4) && (u = l.stateNode.containerInfo,
                        u === o || u.nodeType === 8 && u.parentNode === o))
                            return;
                        l = l.return
                    }
                for (; s !== null; ) {
                    if (l = Pn(s),
                    l === null)
                        return;
                    if (u = l.tag,
                    u === 5 || u === 6) {
                        r = i = l;
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Nf(function() {
        var a = i
          , f = Gu(n)
          , d = [];
        e: {
            var m = np.get(e);
            if (m !== void 0) {
                var y = Ju
                  , w = e;
                switch (e) {
                case "keypress":
                    if (xi(n) === 0)
                        break e;
                case "keydown":
                case "keyup":
                    y = Vg;
                    break;
                case "focusin":
                    w = "focus",
                    y = Wl;
                    break;
                case "focusout":
                    w = "blur",
                    y = Wl;
                    break;
                case "beforeblur":
                case "afterblur":
                    y = Wl;
                    break;
                case "click":
                    if (n.button === 2)
                        break e;
                case "auxclick":
                case "dblclick":
                case "mousedown":
                case "mousemove":
                case "mouseup":
                case "mouseout":
                case "mouseover":
                case "contextmenu":
                    y = yc;
                    break;
                case "drag":
                case "dragend":
                case "dragenter":
                case "dragexit":
                case "dragleave":
                case "dragover":
                case "dragstart":
                case "drop":
                    y = Ng;
                    break;
                case "touchcancel":
                case "touchend":
                case "touchmove":
                case "touchstart":
                    y = jg;
                    break;
                case Jf:
                case qf:
                case ep:
                    y = Ig;
                    break;
                case tp:
                    y = Wg;
                    break;
                case "scroll":
                    y = kg;
                    break;
                case "wheel":
                    y = Gg;
                    break;
                case "copy":
                case "cut":
                case "paste":
                    y = Mg;
                    break;
                case "gotpointercapture":
                case "lostpointercapture":
                case "pointercancel":
                case "pointerdown":
                case "pointermove":
                case "pointerout":
                case "pointerover":
                case "pointerup":
                    y = Ec
                }
                var h = (t & 4) !== 0
                  , E = !h && e === "scroll"
                  , c = h ? m !== null ? m + "Capture" : null : m;
                h = [];
                for (var p = a, v; p !== null; ) {
                    v = p;
                    var x = v.stateNode;
                    if (v.tag === 5 && x !== null && (v = x,
                    c !== null && (x = co(p, c),
                    x != null && h.push(yo(p, x, v)))),
                    E)
                        break;
                    p = p.return
                }
                0 < h.length && (m = new y(m,w,null,n,f),
                d.push({
                    event: m,
                    listeners: h
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (m = e === "mouseover" || e === "pointerover",
                y = e === "mouseout" || e === "pointerout",
                m && n !== Fs && (w = n.relatedTarget || n.fromElement) && (Pn(w) || w[$t]))
                    break e;
                if ((y || m) && (m = f.window === f ? f : (m = f.ownerDocument) ? m.defaultView || m.parentWindow : window,
                y ? (w = n.relatedTarget || n.toElement,
                y = a,
                w = w ? Pn(w) : null,
                w !== null && (E = $n(w),
                w !== E || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null,
                w = a),
                y !== w)) {
                    if (h = yc,
                    x = "onMouseLeave",
                    c = "onMouseEnter",
                    p = "mouse",
                    (e === "pointerout" || e === "pointerover") && (h = Ec,
                    x = "onPointerLeave",
                    c = "onPointerEnter",
                    p = "pointer"),
                    E = y == null ? m : nr(y),
                    v = w == null ? m : nr(w),
                    m = new h(x,p + "leave",y,n,f),
                    m.target = E,
                    m.relatedTarget = v,
                    x = null,
                    Pn(f) === a && (h = new h(c,p + "enter",w,n,f),
                    h.target = v,
                    h.relatedTarget = E,
                    x = h),
                    E = x,
                    y && w)
                        t: {
                            for (h = y,
                            c = w,
                            p = 0,
                            v = h; v; v = Gn(v))
                                p++;
                            for (v = 0,
                            x = c; x; x = Gn(x))
                                v++;
                            for (; 0 < p - v; )
                                h = Gn(h),
                                p--;
                            for (; 0 < v - p; )
                                c = Gn(c),
                                v--;
                            for (; p--; ) {
                                if (h === c || c !== null && h === c.alternate)
                                    break t;
                                h = Gn(h),
                                c = Gn(c)
                            }
                            h = null
                        }
                    else
                        h = null;
                    y !== null && Ac(d, m, y, h, !1),
                    w !== null && E !== null && Ac(d, E, w, h, !0)
                }
            }
            e: {
                if (m = a ? nr(a) : window,
                y = m.nodeName && m.nodeName.toLowerCase(),
                y === "select" || y === "input" && m.type === "file")
                    var C = qg;
                else if (Cc(m))
                    if (Kf)
                        C = ry;
                    else {
                        C = ty;
                        var R = ey
                    }
                else
                    (y = m.nodeName) && y.toLowerCase() === "input" && (m.type === "checkbox" || m.type === "radio") && (C = ny);
                if (C && (C = C(e, a))) {
                    Gf(d, C, n, f);
                    break e
                }
                R && R(e, m, a),
                e === "focusout" && (R = m._wrapperState) && R.controlled && m.type === "number" && Os(m, "number", m.value)
            }
            switch (R = a ? nr(a) : window,
            e) {
            case "focusin":
                (Cc(R) || R.contentEditable === "true") && (er = R,
                Hs = a,
                no = null);
                break;
            case "focusout":
                no = Hs = er = null;
                break;
            case "mousedown":
                Gs = !0;
                break;
            case "contextmenu":
            case "mouseup":
            case "dragend":
                Gs = !1,
                Tc(d, n, f);
                break;
            case "selectionchange":
                if (ly)
                    break;
            case "keydown":
            case "keyup":
                Tc(d, n, f)
            }
            var k;
            if (ea)
                e: {
                    switch (e) {
                    case "compositionstart":
                        var _ = "onCompositionStart";
                        break e;
                    case "compositionend":
                        _ = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        _ = "onCompositionUpdate";
                        break e
                    }
                    _ = void 0
                }
            else
                qn ? Wf(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
            _ && ($f && n.locale !== "ko" && (qn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && qn && (k = jf()) : (ln = f,
            Zu = "value"in ln ? ln.value : ln.textContent,
            qn = !0)),
            R = Ui(a, _),
            0 < R.length && (_ = new wc(_,e,null,n,f),
            d.push({
                event: _,
                listeners: R
            }),
            k ? _.data = k : (k = Hf(n),
            k !== null && (_.data = k)))),
            (k = Yg ? Qg(e, n) : Xg(e, n)) && (a = Ui(a, "onBeforeInput"),
            0 < a.length && (f = new wc("onBeforeInput","beforeinput",null,n,f),
            d.push({
                event: f,
                listeners: a
            }),
            f.data = k))
        }
        rp(d, t)
    })
}
function yo(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}
function Ui(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e
          , i = o.stateNode;
        o.tag === 5 && i !== null && (o = i,
        i = co(e, n),
        i != null && r.unshift(yo(e, i, o)),
        i = co(e, t),
        i != null && r.push(yo(e, i, o))),
        e = e.return
    }
    return r
}
function Gn(e) {
    if (e === null)
        return null;
    do
        e = e.return;
    while (e && e.tag !== 5);
    return e || null
}
function Ac(e, t, n, r, o) {
    for (var i = t._reactName, l = []; n !== null && n !== r; ) {
        var s = n
          , u = s.alternate
          , a = s.stateNode;
        if (u !== null && u === r)
            break;
        s.tag === 5 && a !== null && (s = a,
        o ? (u = co(n, i),
        u != null && l.unshift(yo(n, u, s))) : o || (u = co(n, i),
        u != null && l.push(yo(n, u, s)))),
        n = n.return
    }
    l.length !== 0 && e.push({
        event: t,
        listeners: l
    })
}
var cy = /\r\n?/g
  , dy = /\u0000|\uFFFD/g;
function Mc(e) {
    return (typeof e == "string" ? e : "" + e).replace(cy, `
`).replace(dy, "")
}
function qo(e, t, n) {
    if (t = Mc(t),
    Mc(e) !== t && n)
        throw Error(I(425))
}
function Bi() {}
var Ks = null
  , Ys = null;
function Qs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var Xs = typeof setTimeout == "function" ? setTimeout : void 0
  , fy = typeof clearTimeout == "function" ? clearTimeout : void 0
  , Oc = typeof Promise == "function" ? Promise : void 0
  , py = typeof queueMicrotask == "function" ? queueMicrotask : typeof Oc < "u" ? function(e) {
    return Oc.resolve(null).then(e).catch(my)
}
: Xs;
function my(e) {
    setTimeout(function() {
        throw e
    })
}
function Jl(e, t) {
    var n = t
      , r = 0;
    do {
        var o = n.nextSibling;
        if (e.removeChild(n),
        o && o.nodeType === 8)
            if (n = o.data,
            n === "/$") {
                if (r === 0) {
                    e.removeChild(o),
                    mo(t);
                    return
                }
                r--
            } else
                n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = o
    } while (n);
    mo(t)
}
function fn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3)
            break;
        if (t === 8) {
            if (t = e.data,
            t === "$" || t === "$!" || t === "$?")
                break;
            if (t === "/$")
                return null
        }
    }
    return e
}
function Dc(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0)
                    return e;
                t--
            } else
                n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ir = Math.random().toString(36).slice(2)
  , kt = "__reactFiber$" + Ir
  , wo = "__reactProps$" + Ir
  , $t = "__reactContainer$" + Ir
  , Zs = "__reactEvents$" + Ir
  , hy = "__reactListeners$" + Ir
  , vy = "__reactHandles$" + Ir;
function Pn(e) {
    var t = e[kt];
    if (t)
        return t;
    for (var n = e.parentNode; n; ) {
        if (t = n[$t] || n[kt]) {
            if (n = t.alternate,
            t.child !== null || n !== null && n.child !== null)
                for (e = Dc(e); e !== null; ) {
                    if (n = e[kt])
                        return n;
                    e = Dc(e)
                }
            return t
        }
        e = n,
        n = e.parentNode
    }
    return null
}
function bo(e) {
    return e = e[kt] || e[$t],
    !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}
function nr(e) {
    if (e.tag === 5 || e.tag === 6)
        return e.stateNode;
    throw Error(I(33))
}
function ml(e) {
    return e[wo] || null
}
var Js = []
  , rr = -1;
function _n(e) {
    return {
        current: e
    }
}
function te(e) {
    0 > rr || (e.current = Js[rr],
    Js[rr] = null,
    rr--)
}
function J(e, t) {
    rr++,
    Js[rr] = e.current,
    e.current = t
}
var yn = {}
  , Re = _n(yn)
  , Ve = _n(!1)
  , bn = yn;
function yr(e, t) {
    var n = e.type.contextTypes;
    if (!n)
        return yn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext;
    var o = {}, i;
    for (i in n)
        o[i] = t[i];
    return r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = t,
    e.__reactInternalMemoizedMaskedChildContext = o),
    o
}
function Ue(e) {
    return e = e.childContextTypes,
    e != null
}
function ji() {
    te(Ve),
    te(Re)
}
function bc(e, t, n) {
    if (Re.current !== yn)
        throw Error(I(168));
    J(Re, t),
    J(Ve, n)
}
function ip(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes,
    typeof r.getChildContext != "function")
        return n;
    r = r.getChildContext();
    for (var o in r)
        if (!(o in t))
            throw Error(I(108, eg(e) || "Unknown", o));
    return le({}, n, r)
}
function $i(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || yn,
    bn = Re.current,
    J(Re, e),
    J(Ve, Ve.current),
    !0
}
function Lc(e, t, n) {
    var r = e.stateNode;
    if (!r)
        throw Error(I(169));
    n ? (e = ip(e, t, bn),
    r.__reactInternalMemoizedMergedChildContext = e,
    te(Ve),
    te(Re),
    J(Re, e)) : te(Ve),
    J(Ve, n)
}
var zt = null
  , hl = !1
  , ql = !1;
function lp(e) {
    zt === null ? zt = [e] : zt.push(e)
}
function gy(e) {
    hl = !0,
    lp(e)
}
function kn() {
    if (!ql && zt !== null) {
        ql = !0;
        var e = 0
          , t = Q;
        try {
            var n = zt;
            for (Q = 1; e < n.length; e++) {
                var r = n[e];
                do
                    r = r(!0);
                while (r !== null)
            }
            zt = null,
            hl = !1
        } catch (o) {
            throw zt !== null && (zt = zt.slice(e + 1)),
            Af(Ku, kn),
            o
        } finally {
            Q = t,
            ql = !1
        }
    }
    return null
}
var or = []
  , ir = 0
  , Wi = null
  , Hi = 0
  , tt = []
  , nt = 0
  , Ln = null
  , Vt = 1
  , Ut = "";
function Nn(e, t) {
    or[ir++] = Hi,
    or[ir++] = Wi,
    Wi = e,
    Hi = t
}
function sp(e, t, n) {
    tt[nt++] = Vt,
    tt[nt++] = Ut,
    tt[nt++] = Ln,
    Ln = e;
    var r = Vt;
    e = Ut;
    var o = 32 - vt(r) - 1;
    r &= ~(1 << o),
    n += 1;
    var i = 32 - vt(t) + o;
    if (30 < i) {
        var l = o - o % 5;
        i = (r & (1 << l) - 1).toString(32),
        r >>= l,
        o -= l,
        Vt = 1 << 32 - vt(t) + o | n << o | r,
        Ut = i + e
    } else
        Vt = 1 << i | n << o | r,
        Ut = e
}
function na(e) {
    e.return !== null && (Nn(e, 1),
    sp(e, 1, 0))
}
function ra(e) {
    for (; e === Wi; )
        Wi = or[--ir],
        or[ir] = null,
        Hi = or[--ir],
        or[ir] = null;
    for (; e === Ln; )
        Ln = tt[--nt],
        tt[nt] = null,
        Ut = tt[--nt],
        tt[nt] = null,
        Vt = tt[--nt],
        tt[nt] = null
}
var Ye = null
  , Ke = null
  , ne = !1
  , ht = null;
function up(e, t) {
    var n = rt(5, null, null, 0);
    n.elementType = "DELETED",
    n.stateNode = t,
    n.return = e,
    t = e.deletions,
    t === null ? (e.deletions = [n],
    e.flags |= 16) : t.push(n)
}
function zc(e, t) {
    switch (e.tag) {
    case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t,
        t !== null ? (e.stateNode = t,
        Ye = e,
        Ke = fn(t.firstChild),
        !0) : !1;
    case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t,
        t !== null ? (e.stateNode = t,
        Ye = e,
        Ke = null,
        !0) : !1;
    case 13:
        return t = t.nodeType !== 8 ? null : t,
        t !== null ? (n = Ln !== null ? {
            id: Vt,
            overflow: Ut
        } : null,
        e.memoizedState = {
            dehydrated: t,
            treeContext: n,
            retryLane: 1073741824
        },
        n = rt(18, null, null, 0),
        n.stateNode = t,
        n.return = e,
        e.child = n,
        Ye = e,
        Ke = null,
        !0) : !1;
    default:
        return !1
    }
}
function qs(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function eu(e) {
    if (ne) {
        var t = Ke;
        if (t) {
            var n = t;
            if (!zc(e, t)) {
                if (qs(e))
                    throw Error(I(418));
                t = fn(n.nextSibling);
                var r = Ye;
                t && zc(e, t) ? up(r, n) : (e.flags = e.flags & -4097 | 2,
                ne = !1,
                Ye = e)
            }
        } else {
            if (qs(e))
                throw Error(I(418));
            e.flags = e.flags & -4097 | 2,
            ne = !1,
            Ye = e
        }
    }
}
function Fc(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
        e = e.return;
    Ye = e
}
function ei(e) {
    if (e !== Ye)
        return !1;
    if (!ne)
        return Fc(e),
        ne = !0,
        !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type,
    t = t !== "head" && t !== "body" && !Qs(e.type, e.memoizedProps)),
    t && (t = Ke)) {
        if (qs(e))
            throw ap(),
            Error(I(418));
        for (; t; )
            up(e, t),
            t = fn(t.nextSibling)
    }
    if (Fc(e),
    e.tag === 13) {
        if (e = e.memoizedState,
        e = e !== null ? e.dehydrated : null,
        !e)
            throw Error(I(317));
        e: {
            for (e = e.nextSibling,
            t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            Ke = fn(e.nextSibling);
                            break e
                        }
                        t--
                    } else
                        n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            Ke = null
        }
    } else
        Ke = Ye ? fn(e.stateNode.nextSibling) : null;
    return !0
}
function ap() {
    for (var e = Ke; e; )
        e = fn(e.nextSibling)
}
function wr() {
    Ke = Ye = null,
    ne = !1
}
function oa(e) {
    ht === null ? ht = [e] : ht.push(e)
}
var yy = Yt.ReactCurrentBatchConfig;
function Ur(e, t, n) {
    if (e = n.ref,
    e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner,
            n) {
                if (n.tag !== 1)
                    throw Error(I(309));
                var r = n.stateNode
            }
            if (!r)
                throw Error(I(147, e));
            var o = r
              , i = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === i ? t.ref : (t = function(l) {
                var s = o.refs;
                l === null ? delete s[i] : s[i] = l
            }
            ,
            t._stringRef = i,
            t)
        }
        if (typeof e != "string")
            throw Error(I(284));
        if (!n._owner)
            throw Error(I(290, e))
    }
    return e
}
function ti(e, t) {
    throw e = Object.prototype.toString.call(t),
    Error(I(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}
function Vc(e) {
    var t = e._init;
    return t(e._payload)
}
function cp(e) {
    function t(c, p) {
        if (e) {
            var v = c.deletions;
            v === null ? (c.deletions = [p],
            c.flags |= 16) : v.push(p)
        }
    }
    function n(c, p) {
        if (!e)
            return null;
        for (; p !== null; )
            t(c, p),
            p = p.sibling;
        return null
    }
    function r(c, p) {
        for (c = new Map; p !== null; )
            p.key !== null ? c.set(p.key, p) : c.set(p.index, p),
            p = p.sibling;
        return c
    }
    function o(c, p) {
        return c = vn(c, p),
        c.index = 0,
        c.sibling = null,
        c
    }
    function i(c, p, v) {
        return c.index = v,
        e ? (v = c.alternate,
        v !== null ? (v = v.index,
        v < p ? (c.flags |= 2,
        p) : v) : (c.flags |= 2,
        p)) : (c.flags |= 1048576,
        p)
    }
    function l(c) {
        return e && c.alternate === null && (c.flags |= 2),
        c
    }
    function s(c, p, v, x) {
        return p === null || p.tag !== 6 ? (p = ls(v, c.mode, x),
        p.return = c,
        p) : (p = o(p, v),
        p.return = c,
        p)
    }
    function u(c, p, v, x) {
        var C = v.type;
        return C === Jn ? f(c, p, v.props.children, x, v.key) : p !== null && (p.elementType === C || typeof C == "object" && C !== null && C.$$typeof === tn && Vc(C) === p.type) ? (x = o(p, v.props),
        x.ref = Ur(c, p, v),
        x.return = c,
        x) : (x = Pi(v.type, v.key, v.props, null, c.mode, x),
        x.ref = Ur(c, p, v),
        x.return = c,
        x)
    }
    function a(c, p, v, x) {
        return p === null || p.tag !== 4 || p.stateNode.containerInfo !== v.containerInfo || p.stateNode.implementation !== v.implementation ? (p = ss(v, c.mode, x),
        p.return = c,
        p) : (p = o(p, v.children || []),
        p.return = c,
        p)
    }
    function f(c, p, v, x, C) {
        return p === null || p.tag !== 7 ? (p = Dn(v, c.mode, x, C),
        p.return = c,
        p) : (p = o(p, v),
        p.return = c,
        p)
    }
    function d(c, p, v) {
        if (typeof p == "string" && p !== "" || typeof p == "number")
            return p = ls("" + p, c.mode, v),
            p.return = c,
            p;
        if (typeof p == "object" && p !== null) {
            switch (p.$$typeof) {
            case Wo:
                return v = Pi(p.type, p.key, p.props, null, c.mode, v),
                v.ref = Ur(c, null, p),
                v.return = c,
                v;
            case Zn:
                return p = ss(p, c.mode, v),
                p.return = c,
                p;
            case tn:
                var x = p._init;
                return d(c, x(p._payload), v)
            }
            if (Yr(p) || br(p))
                return p = Dn(p, c.mode, v, null),
                p.return = c,
                p;
            ti(c, p)
        }
        return null
    }
    function m(c, p, v, x) {
        var C = p !== null ? p.key : null;
        if (typeof v == "string" && v !== "" || typeof v == "number")
            return C !== null ? null : s(c, p, "" + v, x);
        if (typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Wo:
                return v.key === C ? u(c, p, v, x) : null;
            case Zn:
                return v.key === C ? a(c, p, v, x) : null;
            case tn:
                return C = v._init,
                m(c, p, C(v._payload), x)
            }
            if (Yr(v) || br(v))
                return C !== null ? null : f(c, p, v, x, null);
            ti(c, v)
        }
        return null
    }
    function y(c, p, v, x, C) {
        if (typeof x == "string" && x !== "" || typeof x == "number")
            return c = c.get(v) || null,
            s(p, c, "" + x, C);
        if (typeof x == "object" && x !== null) {
            switch (x.$$typeof) {
            case Wo:
                return c = c.get(x.key === null ? v : x.key) || null,
                u(p, c, x, C);
            case Zn:
                return c = c.get(x.key === null ? v : x.key) || null,
                a(p, c, x, C);
            case tn:
                var R = x._init;
                return y(c, p, v, R(x._payload), C)
            }
            if (Yr(x) || br(x))
                return c = c.get(v) || null,
                f(p, c, x, C, null);
            ti(p, x)
        }
        return null
    }
    function w(c, p, v, x) {
        for (var C = null, R = null, k = p, _ = p = 0, A = null; k !== null && _ < v.length; _++) {
            k.index > _ ? (A = k,
            k = null) : A = k.sibling;
            var T = m(c, k, v[_], x);
            if (T === null) {
                k === null && (k = A);
                break
            }
            e && k && T.alternate === null && t(c, k),
            p = i(T, p, _),
            R === null ? C = T : R.sibling = T,
            R = T,
            k = A
        }
        if (_ === v.length)
            return n(c, k),
            ne && Nn(c, _),
            C;
        if (k === null) {
            for (; _ < v.length; _++)
                k = d(c, v[_], x),
                k !== null && (p = i(k, p, _),
                R === null ? C = k : R.sibling = k,
                R = k);
            return ne && Nn(c, _),
            C
        }
        for (k = r(c, k); _ < v.length; _++)
            A = y(k, c, _, v[_], x),
            A !== null && (e && A.alternate !== null && k.delete(A.key === null ? _ : A.key),
            p = i(A, p, _),
            R === null ? C = A : R.sibling = A,
            R = A);
        return e && k.forEach(function(b) {
            return t(c, b)
        }),
        ne && Nn(c, _),
        C
    }
    function h(c, p, v, x) {
        var C = br(v);
        if (typeof C != "function")
            throw Error(I(150));
        if (v = C.call(v),
        v == null)
            throw Error(I(151));
        for (var R = C = null, k = p, _ = p = 0, A = null, T = v.next(); k !== null && !T.done; _++,
        T = v.next()) {
            k.index > _ ? (A = k,
            k = null) : A = k.sibling;
            var b = m(c, k, T.value, x);
            if (b === null) {
                k === null && (k = A);
                break
            }
            e && k && b.alternate === null && t(c, k),
            p = i(b, p, _),
            R === null ? C = b : R.sibling = b,
            R = b,
            k = A
        }
        if (T.done)
            return n(c, k),
            ne && Nn(c, _),
            C;
        if (k === null) {
            for (; !T.done; _++,
            T = v.next())
                T = d(c, T.value, x),
                T !== null && (p = i(T, p, _),
                R === null ? C = T : R.sibling = T,
                R = T);
            return ne && Nn(c, _),
            C
        }
        for (k = r(c, k); !T.done; _++,
        T = v.next())
            T = y(k, c, _, T.value, x),
            T !== null && (e && T.alternate !== null && k.delete(T.key === null ? _ : T.key),
            p = i(T, p, _),
            R === null ? C = T : R.sibling = T,
            R = T);
        return e && k.forEach(function(M) {
            return t(c, M)
        }),
        ne && Nn(c, _),
        C
    }
    function E(c, p, v, x) {
        if (typeof v == "object" && v !== null && v.type === Jn && v.key === null && (v = v.props.children),
        typeof v == "object" && v !== null) {
            switch (v.$$typeof) {
            case Wo:
                e: {
                    for (var C = v.key, R = p; R !== null; ) {
                        if (R.key === C) {
                            if (C = v.type,
                            C === Jn) {
                                if (R.tag === 7) {
                                    n(c, R.sibling),
                                    p = o(R, v.props.children),
                                    p.return = c,
                                    c = p;
                                    break e
                                }
                            } else if (R.elementType === C || typeof C == "object" && C !== null && C.$$typeof === tn && Vc(C) === R.type) {
                                n(c, R.sibling),
                                p = o(R, v.props),
                                p.ref = Ur(c, R, v),
                                p.return = c,
                                c = p;
                                break e
                            }
                            n(c, R);
                            break
                        } else
                            t(c, R);
                        R = R.sibling
                    }
                    v.type === Jn ? (p = Dn(v.props.children, c.mode, x, v.key),
                    p.return = c,
                    c = p) : (x = Pi(v.type, v.key, v.props, null, c.mode, x),
                    x.ref = Ur(c, p, v),
                    x.return = c,
                    c = x)
                }
                return l(c);
            case Zn:
                e: {
                    for (R = v.key; p !== null; ) {
                        if (p.key === R)
                            if (p.tag === 4 && p.stateNode.containerInfo === v.containerInfo && p.stateNode.implementation === v.implementation) {
                                n(c, p.sibling),
                                p = o(p, v.children || []),
                                p.return = c,
                                c = p;
                                break e
                            } else {
                                n(c, p);
                                break
                            }
                        else
                            t(c, p);
                        p = p.sibling
                    }
                    p = ss(v, c.mode, x),
                    p.return = c,
                    c = p
                }
                return l(c);
            case tn:
                return R = v._init,
                E(c, p, R(v._payload), x)
            }
            if (Yr(v))
                return w(c, p, v, x);
            if (br(v))
                return h(c, p, v, x);
            ti(c, v)
        }
        return typeof v == "string" && v !== "" || typeof v == "number" ? (v = "" + v,
        p !== null && p.tag === 6 ? (n(c, p.sibling),
        p = o(p, v),
        p.return = c,
        c = p) : (n(c, p),
        p = ls(v, c.mode, x),
        p.return = c,
        c = p),
        l(c)) : n(c, p)
    }
    return E
}
var Er = cp(!0)
  , dp = cp(!1)
  , Gi = _n(null)
  , Ki = null
  , lr = null
  , ia = null;
function la() {
    ia = lr = Ki = null
}
function sa(e) {
    var t = Gi.current;
    te(Gi),
    e._currentValue = t
}
function tu(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t,
        r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
        e === n)
            break;
        e = e.return
    }
}
function pr(e, t) {
    Ki = e,
    ia = lr = null,
    e = e.dependencies,
    e !== null && e.firstContext !== null && (e.lanes & t && (Fe = !0),
    e.firstContext = null)
}
function lt(e) {
    var t = e._currentValue;
    if (ia !== e)
        if (e = {
            context: e,
            memoizedValue: t,
            next: null
        },
        lr === null) {
            if (Ki === null)
                throw Error(I(308));
            lr = e,
            Ki.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else
            lr = lr.next = e;
    return t
}
var In = null;
function ua(e) {
    In === null ? In = [e] : In.push(e)
}
function fp(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? (n.next = n,
    ua(t)) : (n.next = o.next,
    o.next = n),
    t.interleaved = n,
    Wt(e, r)
}
function Wt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t),
    n = e,
    e = e.return; e !== null; )
        e.childLanes |= t,
        n = e.alternate,
        n !== null && (n.childLanes |= t),
        n = e,
        e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var nn = !1;
function aa(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}
function pp(e, t) {
    e = e.updateQueue,
    t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}
function Bt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}
function pn(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
        return null;
    if (r = r.shared,
    G & 2) {
        var o = r.pending;
        return o === null ? t.next = t : (t.next = o.next,
        o.next = t),
        r.pending = t,
        Wt(e, n)
    }
    return o = r.interleaved,
    o === null ? (t.next = t,
    ua(r)) : (t.next = o.next,
    o.next = t),
    r.interleaved = t,
    Wt(e, n)
}
function Ci(e, t, n) {
    if (t = t.updateQueue,
    t !== null && (t = t.shared,
    (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Yu(e, n)
    }
}
function Uc(e, t) {
    var n = e.updateQueue
      , r = e.alternate;
    if (r !== null && (r = r.updateQueue,
    n === r)) {
        var o = null
          , i = null;
        if (n = n.firstBaseUpdate,
        n !== null) {
            do {
                var l = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                i === null ? o = i = l : i = i.next = l,
                n = n.next
            } while (n !== null);
            i === null ? o = i = t : i = i.next = t
        } else
            o = i = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects
        },
        e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate,
    e === null ? n.firstBaseUpdate = t : e.next = t,
    n.lastBaseUpdate = t
}
function Yi(e, t, n, r) {
    var o = e.updateQueue;
    nn = !1;
    var i = o.firstBaseUpdate
      , l = o.lastBaseUpdate
      , s = o.shared.pending;
    if (s !== null) {
        o.shared.pending = null;
        var u = s
          , a = u.next;
        u.next = null,
        l === null ? i = a : l.next = a,
        l = u;
        var f = e.alternate;
        f !== null && (f = f.updateQueue,
        s = f.lastBaseUpdate,
        s !== l && (s === null ? f.firstBaseUpdate = a : s.next = a,
        f.lastBaseUpdate = u))
    }
    if (i !== null) {
        var d = o.baseState;
        l = 0,
        f = a = u = null,
        s = i;
        do {
            var m = s.lane
              , y = s.eventTime;
            if ((r & m) === m) {
                f !== null && (f = f.next = {
                    eventTime: y,
                    lane: 0,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                });
                e: {
                    var w = e
                      , h = s;
                    switch (m = t,
                    y = n,
                    h.tag) {
                    case 1:
                        if (w = h.payload,
                        typeof w == "function") {
                            d = w.call(y, d, m);
                            break e
                        }
                        d = w;
                        break e;
                    case 3:
                        w.flags = w.flags & -65537 | 128;
                    case 0:
                        if (w = h.payload,
                        m = typeof w == "function" ? w.call(y, d, m) : w,
                        m == null)
                            break e;
                        d = le({}, d, m);
                        break e;
                    case 2:
                        nn = !0
                    }
                }
                s.callback !== null && s.lane !== 0 && (e.flags |= 64,
                m = o.effects,
                m === null ? o.effects = [s] : m.push(s))
            } else
                y = {
                    eventTime: y,
                    lane: m,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null
                },
                f === null ? (a = f = y,
                u = d) : f = f.next = y,
                l |= m;
            if (s = s.next,
            s === null) {
                if (s = o.shared.pending,
                s === null)
                    break;
                m = s,
                s = m.next,
                m.next = null,
                o.lastBaseUpdate = m,
                o.shared.pending = null
            }
        } while (1);
        if (f === null && (u = d),
        o.baseState = u,
        o.firstBaseUpdate = a,
        o.lastBaseUpdate = f,
        t = o.shared.interleaved,
        t !== null) {
            o = t;
            do
                l |= o.lane,
                o = o.next;
            while (o !== t)
        } else
            i === null && (o.shared.lanes = 0);
        Fn |= l,
        e.lanes = l,
        e.memoizedState = d
    }
}
function Bc(e, t, n) {
    if (e = t.effects,
    t.effects = null,
    e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t]
              , o = r.callback;
            if (o !== null) {
                if (r.callback = null,
                r = n,
                typeof o != "function")
                    throw Error(I(191, o));
                o.call(r)
            }
        }
}
var Lo = {}
  , It = _n(Lo)
  , Eo = _n(Lo)
  , So = _n(Lo);
function An(e) {
    if (e === Lo)
        throw Error(I(174));
    return e
}
function ca(e, t) {
    switch (J(So, t),
    J(Eo, e),
    J(It, Lo),
    e = t.nodeType,
    e) {
    case 9:
    case 11:
        t = (t = t.documentElement) ? t.namespaceURI : bs(null, "");
        break;
    default:
        e = e === 8 ? t.parentNode : t,
        t = e.namespaceURI || null,
        e = e.tagName,
        t = bs(t, e)
    }
    te(It),
    J(It, t)
}
function Sr() {
    te(It),
    te(Eo),
    te(So)
}
function mp(e) {
    An(So.current);
    var t = An(It.current)
      , n = bs(t, e.type);
    t !== n && (J(Eo, e),
    J(It, n))
}
function da(e) {
    Eo.current === e && (te(It),
    te(Eo))
}
var oe = _n(0);
function Qi(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated,
            n === null || n.data === "$?" || n.data === "$!"))
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128)
                return t
        } else if (t.child !== null) {
            t.child.return = t,
            t = t.child;
            continue
        }
        if (t === e)
            break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e)
                return null;
            t = t.return
        }
        t.sibling.return = t.return,
        t = t.sibling
    }
    return null
}
var es = [];
function fa() {
    for (var e = 0; e < es.length; e++)
        es[e]._workInProgressVersionPrimary = null;
    es.length = 0
}
var _i = Yt.ReactCurrentDispatcher
  , ts = Yt.ReactCurrentBatchConfig
  , zn = 0
  , ie = null
  , pe = null
  , ve = null
  , Xi = !1
  , ro = !1
  , xo = 0
  , wy = 0;
function Ce() {
    throw Error(I(321))
}
function pa(e, t) {
    if (t === null)
        return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!yt(e[n], t[n]))
            return !1;
    return !0
}
function ma(e, t, n, r, o, i) {
    if (zn = i,
    ie = t,
    t.memoizedState = null,
    t.updateQueue = null,
    t.lanes = 0,
    _i.current = e === null || e.memoizedState === null ? Cy : _y,
    e = n(r, o),
    ro) {
        i = 0;
        do {
            if (ro = !1,
            xo = 0,
            25 <= i)
                throw Error(I(301));
            i += 1,
            ve = pe = null,
            t.updateQueue = null,
            _i.current = ky,
            e = n(r, o)
        } while (ro)
    }
    if (_i.current = Zi,
    t = pe !== null && pe.next !== null,
    zn = 0,
    ve = pe = ie = null,
    Xi = !1,
    t)
        throw Error(I(300));
    return e
}
function ha() {
    var e = xo !== 0;
    return xo = 0,
    e
}
function _t() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ve === null ? ie.memoizedState = ve = e : ve = ve.next = e,
    ve
}
function st() {
    if (pe === null) {
        var e = ie.alternate;
        e = e !== null ? e.memoizedState : null
    } else
        e = pe.next;
    var t = ve === null ? ie.memoizedState : ve.next;
    if (t !== null)
        ve = t,
        pe = e;
    else {
        if (e === null)
            throw Error(I(310));
        pe = e,
        e = {
            memoizedState: pe.memoizedState,
            baseState: pe.baseState,
            baseQueue: pe.baseQueue,
            queue: pe.queue,
            next: null
        },
        ve === null ? ie.memoizedState = ve = e : ve = ve.next = e
    }
    return ve
}
function Co(e, t) {
    return typeof t == "function" ? t(e) : t
}
function ns(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(I(311));
    n.lastRenderedReducer = e;
    var r = pe
      , o = r.baseQueue
      , i = n.pending;
    if (i !== null) {
        if (o !== null) {
            var l = o.next;
            o.next = i.next,
            i.next = l
        }
        r.baseQueue = o = i,
        n.pending = null
    }
    if (o !== null) {
        i = o.next,
        r = r.baseState;
        var s = l = null
          , u = null
          , a = i;
        do {
            var f = a.lane;
            if ((zn & f) === f)
                u !== null && (u = u.next = {
                    lane: 0,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                }),
                r = a.hasEagerState ? a.eagerState : e(r, a.action);
            else {
                var d = {
                    lane: f,
                    action: a.action,
                    hasEagerState: a.hasEagerState,
                    eagerState: a.eagerState,
                    next: null
                };
                u === null ? (s = u = d,
                l = r) : u = u.next = d,
                ie.lanes |= f,
                Fn |= f
            }
            a = a.next
        } while (a !== null && a !== i);
        u === null ? l = r : u.next = s,
        yt(r, t.memoizedState) || (Fe = !0),
        t.memoizedState = r,
        t.baseState = l,
        t.baseQueue = u,
        n.lastRenderedState = r
    }
    if (e = n.interleaved,
    e !== null) {
        o = e;
        do
            i = o.lane,
            ie.lanes |= i,
            Fn |= i,
            o = o.next;
        while (o !== e)
    } else
        o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}
function rs(e) {
    var t = st()
      , n = t.queue;
    if (n === null)
        throw Error(I(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch
      , o = n.pending
      , i = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var l = o = o.next;
        do
            i = e(i, l.action),
            l = l.next;
        while (l !== o);
        yt(i, t.memoizedState) || (Fe = !0),
        t.memoizedState = i,
        t.baseQueue === null && (t.baseState = i),
        n.lastRenderedState = i
    }
    return [i, r]
}
function hp() {}
function vp(e, t) {
    var n = ie
      , r = st()
      , o = t()
      , i = !yt(r.memoizedState, o);
    if (i && (r.memoizedState = o,
    Fe = !0),
    r = r.queue,
    va(wp.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || ve !== null && ve.memoizedState.tag & 1) {
        if (n.flags |= 2048,
        _o(9, yp.bind(null, n, r, o, t), void 0, null),
        ge === null)
            throw Error(I(349));
        zn & 30 || gp(n, t, o)
    }
    return o
}
function gp(e, t, n) {
    e.flags |= 16384,
    e = {
        getSnapshot: t,
        value: n
    },
    t = ie.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ie.updateQueue = t,
    t.stores = [e]) : (n = t.stores,
    n === null ? t.stores = [e] : n.push(e))
}
function yp(e, t, n, r) {
    t.value = n,
    t.getSnapshot = r,
    Ep(t) && Sp(e)
}
function wp(e, t, n) {
    return n(function() {
        Ep(t) && Sp(e)
    })
}
function Ep(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !yt(e, n)
    } catch {
        return !0
    }
}
function Sp(e) {
    var t = Wt(e, 1);
    t !== null && gt(t, e, 1, -1)
}
function jc(e) {
    var t = _t();
    return typeof e == "function" && (e = e()),
    t.memoizedState = t.baseState = e,
    e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Co,
        lastRenderedState: e
    },
    t.queue = e,
    e = e.dispatch = xy.bind(null, ie, e),
    [t.memoizedState, e]
}
function _o(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    },
    t = ie.updateQueue,
    t === null ? (t = {
        lastEffect: null,
        stores: null
    },
    ie.updateQueue = t,
    t.lastEffect = e.next = e) : (n = t.lastEffect,
    n === null ? t.lastEffect = e.next = e : (r = n.next,
    n.next = e,
    e.next = r,
    t.lastEffect = e)),
    e
}
function xp() {
    return st().memoizedState
}
function ki(e, t, n, r) {
    var o = _t();
    ie.flags |= e,
    o.memoizedState = _o(1 | t, n, void 0, r === void 0 ? null : r)
}
function vl(e, t, n, r) {
    var o = st();
    r = r === void 0 ? null : r;
    var i = void 0;
    if (pe !== null) {
        var l = pe.memoizedState;
        if (i = l.destroy,
        r !== null && pa(r, l.deps)) {
            o.memoizedState = _o(t, n, i, r);
            return
        }
    }
    ie.flags |= e,
    o.memoizedState = _o(1 | t, n, i, r)
}
function $c(e, t) {
    return ki(8390656, 8, e, t)
}
function va(e, t) {
    return vl(2048, 8, e, t)
}
function Cp(e, t) {
    return vl(4, 2, e, t)
}
function _p(e, t) {
    return vl(4, 4, e, t)
}
function kp(e, t) {
    if (typeof t == "function")
        return e = e(),
        t(e),
        function() {
            t(null)
        }
        ;
    if (t != null)
        return e = e(),
        t.current = e,
        function() {
            t.current = null
        }
}
function Rp(e, t, n) {
    return n = n != null ? n.concat([e]) : null,
    vl(4, 4, kp.bind(null, t, e), n)
}
function ga() {}
function Np(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pa(t, r[1]) ? r[0] : (n.memoizedState = [e, t],
    e)
}
function Tp(e, t) {
    var n = st();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && pa(t, r[1]) ? r[0] : (e = e(),
    n.memoizedState = [e, t],
    e)
}
function Pp(e, t, n) {
    return zn & 21 ? (yt(n, t) || (n = Df(),
    ie.lanes |= n,
    Fn |= n,
    e.baseState = !0),
    t) : (e.baseState && (e.baseState = !1,
    Fe = !0),
    e.memoizedState = n)
}
function Ey(e, t) {
    var n = Q;
    Q = n !== 0 && 4 > n ? n : 4,
    e(!0);
    var r = ts.transition;
    ts.transition = {};
    try {
        e(!1),
        t()
    } finally {
        Q = n,
        ts.transition = r
    }
}
function Ip() {
    return st().memoizedState
}
function Sy(e, t, n) {
    var r = hn(e);
    if (n = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    },
    Ap(e))
        Mp(t, n);
    else if (n = fp(e, t, n, r),
    n !== null) {
        var o = Ie();
        gt(n, e, r, o),
        Op(n, t, r)
    }
}
function xy(e, t, n) {
    var r = hn(e)
      , o = {
        lane: r,
        action: n,
        hasEagerState: !1,
        eagerState: null,
        next: null
    };
    if (Ap(e))
        Mp(t, o);
    else {
        var i = e.alternate;
        if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer,
        i !== null))
            try {
                var l = t.lastRenderedState
                  , s = i(l, n);
                if (o.hasEagerState = !0,
                o.eagerState = s,
                yt(s, l)) {
                    var u = t.interleaved;
                    u === null ? (o.next = o,
                    ua(t)) : (o.next = u.next,
                    u.next = o),
                    t.interleaved = o;
                    return
                }
            } catch {} finally {}
        n = fp(e, t, o, r),
        n !== null && (o = Ie(),
        gt(n, e, r, o),
        Op(n, t, r))
    }
}
function Ap(e) {
    var t = e.alternate;
    return e === ie || t !== null && t === ie
}
function Mp(e, t) {
    ro = Xi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next,
    n.next = t),
    e.pending = t
}
function Op(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes,
        n |= r,
        t.lanes = n,
        Yu(e, n)
    }
}
var Zi = {
    readContext: lt,
    useCallback: Ce,
    useContext: Ce,
    useEffect: Ce,
    useImperativeHandle: Ce,
    useInsertionEffect: Ce,
    useLayoutEffect: Ce,
    useMemo: Ce,
    useReducer: Ce,
    useRef: Ce,
    useState: Ce,
    useDebugValue: Ce,
    useDeferredValue: Ce,
    useTransition: Ce,
    useMutableSource: Ce,
    useSyncExternalStore: Ce,
    useId: Ce,
    unstable_isNewReconciler: !1
}
  , Cy = {
    readContext: lt,
    useCallback: function(e, t) {
        return _t().memoizedState = [e, t === void 0 ? null : t],
        e
    },
    useContext: lt,
    useEffect: $c,
    useImperativeHandle: function(e, t, n) {
        return n = n != null ? n.concat([e]) : null,
        ki(4194308, 4, kp.bind(null, t, e), n)
    },
    useLayoutEffect: function(e, t) {
        return ki(4194308, 4, e, t)
    },
    useInsertionEffect: function(e, t) {
        return ki(4, 2, e, t)
    },
    useMemo: function(e, t) {
        var n = _t();
        return t = t === void 0 ? null : t,
        e = e(),
        n.memoizedState = [e, t],
        e
    },
    useReducer: function(e, t, n) {
        var r = _t();
        return t = n !== void 0 ? n(t) : t,
        r.memoizedState = r.baseState = t,
        e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: t
        },
        r.queue = e,
        e = e.dispatch = Sy.bind(null, ie, e),
        [r.memoizedState, e]
    },
    useRef: function(e) {
        var t = _t();
        return e = {
            current: e
        },
        t.memoizedState = e
    },
    useState: jc,
    useDebugValue: ga,
    useDeferredValue: function(e) {
        return _t().memoizedState = e
    },
    useTransition: function() {
        var e = jc(!1)
          , t = e[0];
        return e = Ey.bind(null, e[1]),
        _t().memoizedState = e,
        [t, e]
    },
    useMutableSource: function() {},
    useSyncExternalStore: function(e, t, n) {
        var r = ie
          , o = _t();
        if (ne) {
            if (n === void 0)
                throw Error(I(407));
            n = n()
        } else {
            if (n = t(),
            ge === null)
                throw Error(I(349));
            zn & 30 || gp(r, t, n)
        }
        o.memoizedState = n;
        var i = {
            value: n,
            getSnapshot: t
        };
        return o.queue = i,
        $c(wp.bind(null, r, i, e), [e]),
        r.flags |= 2048,
        _o(9, yp.bind(null, r, i, n, t), void 0, null),
        n
    },
    useId: function() {
        var e = _t()
          , t = ge.identifierPrefix;
        if (ne) {
            var n = Ut
              , r = Vt;
            n = (r & ~(1 << 32 - vt(r) - 1)).toString(32) + n,
            t = ":" + t + "R" + n,
            n = xo++,
            0 < n && (t += "H" + n.toString(32)),
            t += ":"
        } else
            n = wy++,
            t = ":" + t + "r" + n.toString(32) + ":";
        return e.memoizedState = t
    },
    unstable_isNewReconciler: !1
}
  , _y = {
    readContext: lt,
    useCallback: Np,
    useContext: lt,
    useEffect: va,
    useImperativeHandle: Rp,
    useInsertionEffect: Cp,
    useLayoutEffect: _p,
    useMemo: Tp,
    useReducer: ns,
    useRef: xp,
    useState: function() {
        return ns(Co)
    },
    useDebugValue: ga,
    useDeferredValue: function(e) {
        var t = st();
        return Pp(t, pe.memoizedState, e)
    },
    useTransition: function() {
        var e = ns(Co)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: hp,
    useSyncExternalStore: vp,
    useId: Ip,
    unstable_isNewReconciler: !1
}
  , ky = {
    readContext: lt,
    useCallback: Np,
    useContext: lt,
    useEffect: va,
    useImperativeHandle: Rp,
    useInsertionEffect: Cp,
    useLayoutEffect: _p,
    useMemo: Tp,
    useReducer: rs,
    useRef: xp,
    useState: function() {
        return rs(Co)
    },
    useDebugValue: ga,
    useDeferredValue: function(e) {
        var t = st();
        return pe === null ? t.memoizedState = e : Pp(t, pe.memoizedState, e)
    },
    useTransition: function() {
        var e = rs(Co)[0]
          , t = st().memoizedState;
        return [e, t]
    },
    useMutableSource: hp,
    useSyncExternalStore: vp,
    useId: Ip,
    unstable_isNewReconciler: !1
};
function ft(e, t) {
    if (e && e.defaultProps) {
        t = le({}, t),
        e = e.defaultProps;
        for (var n in e)
            t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
function nu(e, t, n, r) {
    t = e.memoizedState,
    n = n(r, t),
    n = n == null ? t : le({}, t, n),
    e.memoizedState = n,
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var gl = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? $n(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = hn(e)
          , i = Bt(r, o);
        i.payload = t,
        n != null && (i.callback = n),
        t = pn(e, i, o),
        t !== null && (gt(t, e, o, r),
        Ci(t, e, o))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = Ie()
          , o = hn(e)
          , i = Bt(r, o);
        i.tag = 1,
        i.payload = t,
        n != null && (i.callback = n),
        t = pn(e, i, o),
        t !== null && (gt(t, e, o, r),
        Ci(t, e, o))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = Ie()
          , r = hn(e)
          , o = Bt(n, r);
        o.tag = 2,
        t != null && (o.callback = t),
        t = pn(e, o, r),
        t !== null && (gt(t, e, r, n),
        Ci(t, e, r))
    }
};
function Wc(e, t, n, r, o, i, l) {
    return e = e.stateNode,
    typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, i, l) : t.prototype && t.prototype.isPureReactComponent ? !vo(n, r) || !vo(o, i) : !0
}
function Dp(e, t, n) {
    var r = !1
      , o = yn
      , i = t.contextType;
    return typeof i == "object" && i !== null ? i = lt(i) : (o = Ue(t) ? bn : Re.current,
    r = t.contextTypes,
    i = (r = r != null) ? yr(e, o) : yn),
    t = new t(n,i),
    e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null,
    t.updater = gl,
    e.stateNode = t,
    t._reactInternals = e,
    r && (e = e.stateNode,
    e.__reactInternalMemoizedUnmaskedChildContext = o,
    e.__reactInternalMemoizedMaskedChildContext = i),
    t
}
function Hc(e, t, n, r) {
    e = t.state,
    typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && gl.enqueueReplaceState(t, t.state, null)
}
function ru(e, t, n, r) {
    var o = e.stateNode;
    o.props = n,
    o.state = e.memoizedState,
    o.refs = {},
    aa(e);
    var i = t.contextType;
    typeof i == "object" && i !== null ? o.context = lt(i) : (i = Ue(t) ? bn : Re.current,
    o.context = yr(e, i)),
    o.state = e.memoizedState,
    i = t.getDerivedStateFromProps,
    typeof i == "function" && (nu(e, t, i, n),
    o.state = e.memoizedState),
    typeof t.getDerivedStateFromProps == "function" || typeof o.getSnapshotBeforeUpdate == "function" || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (t = o.state,
    typeof o.componentWillMount == "function" && o.componentWillMount(),
    typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
    t !== o.state && gl.enqueueReplaceState(o, o.state, null),
    Yi(e, n, o, r),
    o.state = e.memoizedState),
    typeof o.componentDidMount == "function" && (e.flags |= 4194308)
}
function xr(e, t) {
    try {
        var n = ""
          , r = t;
        do
            n += qv(r),
            r = r.return;
        while (r);
        var o = n
    } catch (i) {
        o = `
Error generating stack: ` + i.message + `
` + i.stack
    }
    return {
        value: e,
        source: t,
        stack: o,
        digest: null
    }
}
function os(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}
function ou(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Ry = typeof WeakMap == "function" ? WeakMap : Map;
function bp(e, t, n) {
    n = Bt(-1, n),
    n.tag = 3,
    n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        qi || (qi = !0,
        mu = r),
        ou(e, t)
    }
    ,
    n
}
function Lp(e, t, n) {
    n = Bt(-1, n),
    n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        n.payload = function() {
            return r(o)
        }
        ,
        n.callback = function() {
            ou(e, t)
        }
    }
    var i = e.stateNode;
    return i !== null && typeof i.componentDidCatch == "function" && (n.callback = function() {
        ou(e, t),
        typeof r != "function" && (mn === null ? mn = new Set([this]) : mn.add(this));
        var l = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: l !== null ? l : ""
        })
    }
    ),
    n
}
function Gc(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Ry;
        var o = new Set;
        r.set(t, o)
    } else
        o = r.get(t),
        o === void 0 && (o = new Set,
        r.set(t, o));
    o.has(n) || (o.add(n),
    e = Uy.bind(null, e, t, n),
    t.then(e, e))
}
function Kc(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState,
        t = t !== null ? t.dehydrated !== null : !0),
        t)
            return e;
        e = e.return
    } while (e !== null);
    return null
}
function Yc(e, t, n, r, o) {
    return e.mode & 1 ? (e.flags |= 65536,
    e.lanes = o,
    e) : (e === t ? e.flags |= 65536 : (e.flags |= 128,
    n.flags |= 131072,
    n.flags &= -52805,
    n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Bt(-1, 1),
    t.tag = 2,
    pn(n, t, 1))),
    n.lanes |= 1),
    e)
}
var Ny = Yt.ReactCurrentOwner
  , Fe = !1;
function Pe(e, t, n, r) {
    t.child = e === null ? dp(t, null, n, r) : Er(t, e.child, n, r)
}
function Qc(e, t, n, r, o) {
    n = n.render;
    var i = t.ref;
    return pr(t, o),
    r = ma(e, t, n, r, i, o),
    n = ha(),
    e !== null && !Fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ht(e, t, o)) : (ne && n && na(t),
    t.flags |= 1,
    Pe(e, t, r, o),
    t.child)
}
function Xc(e, t, n, r, o) {
    if (e === null) {
        var i = n.type;
        return typeof i == "function" && !ka(i) && i.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15,
        t.type = i,
        zp(e, t, i, r, o)) : (e = Pi(n.type, null, r, t, t.mode, o),
        e.ref = t.ref,
        e.return = t,
        t.child = e)
    }
    if (i = e.child,
    !(e.lanes & o)) {
        var l = i.memoizedProps;
        if (n = n.compare,
        n = n !== null ? n : vo,
        n(l, r) && e.ref === t.ref)
            return Ht(e, t, o)
    }
    return t.flags |= 1,
    e = vn(i, r),
    e.ref = t.ref,
    e.return = t,
    t.child = e
}
function zp(e, t, n, r, o) {
    if (e !== null) {
        var i = e.memoizedProps;
        if (vo(i, r) && e.ref === t.ref)
            if (Fe = !1,
            t.pendingProps = r = i,
            (e.lanes & o) !== 0)
                e.flags & 131072 && (Fe = !0);
            else
                return t.lanes = e.lanes,
                Ht(e, t, o)
    }
    return iu(e, t, n, r, o)
}
function Fp(e, t, n) {
    var r = t.pendingProps
      , o = r.children
      , i = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            J(ur, We),
            We |= n;
        else {
            if (!(n & 1073741824))
                return e = i !== null ? i.baseLanes | n : n,
                t.lanes = t.childLanes = 1073741824,
                t.memoizedState = {
                    baseLanes: e,
                    cachePool: null,
                    transitions: null
                },
                t.updateQueue = null,
                J(ur, We),
                We |= e,
                null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            },
            r = i !== null ? i.baseLanes : n,
            J(ur, We),
            We |= r
        }
    else
        i !== null ? (r = i.baseLanes | n,
        t.memoizedState = null) : r = n,
        J(ur, We),
        We |= r;
    return Pe(e, t, o, n),
    t.child
}
function Vp(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512,
    t.flags |= 2097152)
}
function iu(e, t, n, r, o) {
    var i = Ue(n) ? bn : Re.current;
    return i = yr(t, i),
    pr(t, o),
    n = ma(e, t, n, r, i, o),
    r = ha(),
    e !== null && !Fe ? (t.updateQueue = e.updateQueue,
    t.flags &= -2053,
    e.lanes &= ~o,
    Ht(e, t, o)) : (ne && r && na(t),
    t.flags |= 1,
    Pe(e, t, n, o),
    t.child)
}
function Zc(e, t, n, r, o) {
    if (Ue(n)) {
        var i = !0;
        $i(t)
    } else
        i = !1;
    if (pr(t, o),
    t.stateNode === null)
        Ri(e, t),
        Dp(t, n, r),
        ru(t, n, r, o),
        r = !0;
    else if (e === null) {
        var l = t.stateNode
          , s = t.memoizedProps;
        l.props = s;
        var u = l.context
          , a = n.contextType;
        typeof a == "object" && a !== null ? a = lt(a) : (a = Ue(n) ? bn : Re.current,
        a = yr(t, a));
        var f = n.getDerivedStateFromProps
          , d = typeof f == "function" || typeof l.getSnapshotBeforeUpdate == "function";
        d || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== r || u !== a) && Hc(t, l, r, a),
        nn = !1;
        var m = t.memoizedState;
        l.state = m,
        Yi(t, r, l, o),
        u = t.memoizedState,
        s !== r || m !== u || Ve.current || nn ? (typeof f == "function" && (nu(t, n, f, r),
        u = t.memoizedState),
        (s = nn || Wc(t, n, s, r, m, u, a)) ? (d || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (typeof l.componentWillMount == "function" && l.componentWillMount(),
        typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()),
        typeof l.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        t.memoizedProps = r,
        t.memoizedState = u),
        l.props = r,
        l.state = u,
        l.context = a,
        r = s) : (typeof l.componentDidMount == "function" && (t.flags |= 4194308),
        r = !1)
    } else {
        l = t.stateNode,
        pp(e, t),
        s = t.memoizedProps,
        a = t.type === t.elementType ? s : ft(t.type, s),
        l.props = a,
        d = t.pendingProps,
        m = l.context,
        u = n.contextType,
        typeof u == "object" && u !== null ? u = lt(u) : (u = Ue(n) ? bn : Re.current,
        u = yr(t, u));
        var y = n.getDerivedStateFromProps;
        (f = typeof y == "function" || typeof l.getSnapshotBeforeUpdate == "function") || typeof l.UNSAFE_componentWillReceiveProps != "function" && typeof l.componentWillReceiveProps != "function" || (s !== d || m !== u) && Hc(t, l, r, u),
        nn = !1,
        m = t.memoizedState,
        l.state = m,
        Yi(t, r, l, o);
        var w = t.memoizedState;
        s !== d || m !== w || Ve.current || nn ? (typeof y == "function" && (nu(t, n, y, r),
        w = t.memoizedState),
        (a = nn || Wc(t, n, a, r, m, w, u) || !1) ? (f || typeof l.UNSAFE_componentWillUpdate != "function" && typeof l.componentWillUpdate != "function" || (typeof l.componentWillUpdate == "function" && l.componentWillUpdate(r, w, u),
        typeof l.UNSAFE_componentWillUpdate == "function" && l.UNSAFE_componentWillUpdate(r, w, u)),
        typeof l.componentDidUpdate == "function" && (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        t.memoizedProps = r,
        t.memoizedState = w),
        l.props = r,
        l.state = w,
        l.context = u,
        r = a) : (typeof l.componentDidUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 4),
        typeof l.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && m === e.memoizedState || (t.flags |= 1024),
        r = !1)
    }
    return lu(e, t, n, r, i, o)
}
function lu(e, t, n, r, o, i) {
    Vp(e, t);
    var l = (t.flags & 128) !== 0;
    if (!r && !l)
        return o && Lc(t, n, !1),
        Ht(e, t, i);
    r = t.stateNode,
    Ny.current = t;
    var s = l && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1,
    e !== null && l ? (t.child = Er(t, e.child, null, i),
    t.child = Er(t, null, s, i)) : Pe(e, t, s, i),
    t.memoizedState = r.state,
    o && Lc(t, n, !0),
    t.child
}
function Up(e) {
    var t = e.stateNode;
    t.pendingContext ? bc(e, t.pendingContext, t.pendingContext !== t.context) : t.context && bc(e, t.context, !1),
    ca(e, t.containerInfo)
}
function Jc(e, t, n, r, o) {
    return wr(),
    oa(o),
    t.flags |= 256,
    Pe(e, t, n, r),
    t.child
}
var su = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};
function uu(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}
function Bp(e, t, n) {
    var r = t.pendingProps, o = oe.current, i = !1, l = (t.flags & 128) !== 0, s;
    if ((s = l) || (s = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
    s ? (i = !0,
    t.flags &= -129) : (e === null || e.memoizedState !== null) && (o |= 1),
    J(oe, o & 1),
    e === null)
        return eu(t),
        e = t.memoizedState,
        e !== null && (e = e.dehydrated,
        e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1,
        null) : (l = r.children,
        e = r.fallback,
        i ? (r = t.mode,
        i = t.child,
        l = {
            mode: "hidden",
            children: l
        },
        !(r & 1) && i !== null ? (i.childLanes = 0,
        i.pendingProps = l) : i = El(l, r, 0, null),
        e = Dn(e, r, n, null),
        i.return = t,
        e.return = t,
        i.sibling = e,
        t.child = i,
        t.child.memoizedState = uu(n),
        t.memoizedState = su,
        e) : ya(t, l));
    if (o = e.memoizedState,
    o !== null && (s = o.dehydrated,
    s !== null))
        return Ty(e, t, l, r, s, o, n);
    if (i) {
        i = r.fallback,
        l = t.mode,
        o = e.child,
        s = o.sibling;
        var u = {
            mode: "hidden",
            children: r.children
        };
        return !(l & 1) && t.child !== o ? (r = t.child,
        r.childLanes = 0,
        r.pendingProps = u,
        t.deletions = null) : (r = vn(o, u),
        r.subtreeFlags = o.subtreeFlags & 14680064),
        s !== null ? i = vn(s, i) : (i = Dn(i, l, n, null),
        i.flags |= 2),
        i.return = t,
        r.return = t,
        r.sibling = i,
        t.child = r,
        r = i,
        i = t.child,
        l = e.child.memoizedState,
        l = l === null ? uu(n) : {
            baseLanes: l.baseLanes | n,
            cachePool: null,
            transitions: l.transitions
        },
        i.memoizedState = l,
        i.childLanes = e.childLanes & ~n,
        t.memoizedState = su,
        r
    }
    return i = e.child,
    e = i.sibling,
    r = vn(i, {
        mode: "visible",
        children: r.children
    }),
    !(t.mode & 1) && (r.lanes = n),
    r.return = t,
    r.sibling = null,
    e !== null && (n = t.deletions,
    n === null ? (t.deletions = [e],
    t.flags |= 16) : n.push(e)),
    t.child = r,
    t.memoizedState = null,
    r
}
function ya(e, t) {
    return t = El({
        mode: "visible",
        children: t
    }, e.mode, 0, null),
    t.return = e,
    e.child = t
}
function ni(e, t, n, r) {
    return r !== null && oa(r),
    Er(t, e.child, null, n),
    e = ya(t, t.pendingProps.children),
    e.flags |= 2,
    t.memoizedState = null,
    e
}
function Ty(e, t, n, r, o, i, l) {
    if (n)
        return t.flags & 256 ? (t.flags &= -257,
        r = os(Error(I(422))),
        ni(e, t, l, r)) : t.memoizedState !== null ? (t.child = e.child,
        t.flags |= 128,
        null) : (i = r.fallback,
        o = t.mode,
        r = El({
            mode: "visible",
            children: r.children
        }, o, 0, null),
        i = Dn(i, o, l, null),
        i.flags |= 2,
        r.return = t,
        i.return = t,
        r.sibling = i,
        t.child = r,
        t.mode & 1 && Er(t, e.child, null, l),
        t.child.memoizedState = uu(l),
        t.memoizedState = su,
        i);
    if (!(t.mode & 1))
        return ni(e, t, l, null);
    if (o.data === "$!") {
        if (r = o.nextSibling && o.nextSibling.dataset,
        r)
            var s = r.dgst;
        return r = s,
        i = Error(I(419)),
        r = os(i, r, void 0),
        ni(e, t, l, r)
    }
    if (s = (l & e.childLanes) !== 0,
    Fe || s) {
        if (r = ge,
        r !== null) {
            switch (l & -l) {
            case 4:
                o = 2;
                break;
            case 16:
                o = 8;
                break;
            case 64:
            case 128:
            case 256:
            case 512:
            case 1024:
            case 2048:
            case 4096:
            case 8192:
            case 16384:
            case 32768:
            case 65536:
            case 131072:
            case 262144:
            case 524288:
            case 1048576:
            case 2097152:
            case 4194304:
            case 8388608:
            case 16777216:
            case 33554432:
            case 67108864:
                o = 32;
                break;
            case 536870912:
                o = 268435456;
                break;
            default:
                o = 0
            }
            o = o & (r.suspendedLanes | l) ? 0 : o,
            o !== 0 && o !== i.retryLane && (i.retryLane = o,
            Wt(e, o),
            gt(r, e, o, -1))
        }
        return _a(),
        r = os(Error(I(421))),
        ni(e, t, l, r)
    }
    return o.data === "$?" ? (t.flags |= 128,
    t.child = e.child,
    t = By.bind(null, e),
    o._reactRetry = t,
    null) : (e = i.treeContext,
    Ke = fn(o.nextSibling),
    Ye = t,
    ne = !0,
    ht = null,
    e !== null && (tt[nt++] = Vt,
    tt[nt++] = Ut,
    tt[nt++] = Ln,
    Vt = e.id,
    Ut = e.overflow,
    Ln = t),
    t = ya(t, r.children),
    t.flags |= 4096,
    t)
}
function qc(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t),
    tu(e.return, t, n)
}
function is(e, t, n, r, o) {
    var i = e.memoizedState;
    i === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: o
    } : (i.isBackwards = t,
    i.rendering = null,
    i.renderingStartTime = 0,
    i.last = r,
    i.tail = n,
    i.tailMode = o)
}
function jp(e, t, n) {
    var r = t.pendingProps
      , o = r.revealOrder
      , i = r.tail;
    if (Pe(e, t, r.children, n),
    r = oe.current,
    r & 2)
        r = r & 1 | 2,
        t.flags |= 128;
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13)
                    e.memoizedState !== null && qc(e, n, t);
                else if (e.tag === 19)
                    qc(e, n, t);
                else if (e.child !== null) {
                    e.child.return = e,
                    e = e.child;
                    continue
                }
                if (e === t)
                    break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t)
                        break e;
                    e = e.return
                }
                e.sibling.return = e.return,
                e = e.sibling
            }
        r &= 1
    }
    if (J(oe, r),
    !(t.mode & 1))
        t.memoizedState = null;
    else
        switch (o) {
        case "forwards":
            for (n = t.child,
            o = null; n !== null; )
                e = n.alternate,
                e !== null && Qi(e) === null && (o = n),
                n = n.sibling;
            n = o,
            n === null ? (o = t.child,
            t.child = null) : (o = n.sibling,
            n.sibling = null),
            is(t, !1, o, n, i);
            break;
        case "backwards":
            for (n = null,
            o = t.child,
            t.child = null; o !== null; ) {
                if (e = o.alternate,
                e !== null && Qi(e) === null) {
                    t.child = o;
                    break
                }
                e = o.sibling,
                o.sibling = n,
                n = o,
                o = e
            }
            is(t, !0, n, null, i);
            break;
        case "together":
            is(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
        }
    return t.child
}
function Ri(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null,
    t.alternate = null,
    t.flags |= 2)
}
function Ht(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies),
    Fn |= t.lanes,
    !(n & t.childLanes))
        return null;
    if (e !== null && t.child !== e.child)
        throw Error(I(153));
    if (t.child !== null) {
        for (e = t.child,
        n = vn(e, e.pendingProps),
        t.child = n,
        n.return = t; e.sibling !== null; )
            e = e.sibling,
            n = n.sibling = vn(e, e.pendingProps),
            n.return = t;
        n.sibling = null
    }
    return t.child
}
function Py(e, t, n) {
    switch (t.tag) {
    case 3:
        Up(t),
        wr();
        break;
    case 5:
        mp(t);
        break;
    case 1:
        Ue(t.type) && $i(t);
        break;
    case 4:
        ca(t, t.stateNode.containerInfo);
        break;
    case 10:
        var r = t.type._context
          , o = t.memoizedProps.value;
        J(Gi, r._currentValue),
        r._currentValue = o;
        break;
    case 13:
        if (r = t.memoizedState,
        r !== null)
            return r.dehydrated !== null ? (J(oe, oe.current & 1),
            t.flags |= 128,
            null) : n & t.child.childLanes ? Bp(e, t, n) : (J(oe, oe.current & 1),
            e = Ht(e, t, n),
            e !== null ? e.sibling : null);
        J(oe, oe.current & 1);
        break;
    case 19:
        if (r = (n & t.childLanes) !== 0,
        e.flags & 128) {
            if (r)
                return jp(e, t, n);
            t.flags |= 128
        }
        if (o = t.memoizedState,
        o !== null && (o.rendering = null,
        o.tail = null,
        o.lastEffect = null),
        J(oe, oe.current),
        r)
            break;
        return null;
    case 22:
    case 23:
        return t.lanes = 0,
        Fp(e, t, n)
    }
    return Ht(e, t, n)
}
var $p, au, Wp, Hp;
$p = function(e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6)
            e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n,
            n = n.child;
            continue
        }
        if (n === t)
            break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t)
                return;
            n = n.return
        }
        n.sibling.return = n.return,
        n = n.sibling
    }
}
;
au = function() {}
;
Wp = function(e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        e = t.stateNode,
        An(It.current);
        var i = null;
        switch (n) {
        case "input":
            o = As(e, o),
            r = As(e, r),
            i = [];
            break;
        case "select":
            o = le({}, o, {
                value: void 0
            }),
            r = le({}, r, {
                value: void 0
            }),
            i = [];
            break;
        case "textarea":
            o = Ds(e, o),
            r = Ds(e, r),
            i = [];
            break;
        default:
            typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Bi)
        }
        Ls(n, r);
        var l;
        n = null;
        for (a in o)
            if (!r.hasOwnProperty(a) && o.hasOwnProperty(a) && o[a] != null)
                if (a === "style") {
                    var s = o[a];
                    for (l in s)
                        s.hasOwnProperty(l) && (n || (n = {}),
                        n[l] = "")
                } else
                    a !== "dangerouslySetInnerHTML" && a !== "children" && a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (uo.hasOwnProperty(a) ? i || (i = []) : (i = i || []).push(a, null));
        for (a in r) {
            var u = r[a];
            if (s = o != null ? o[a] : void 0,
            r.hasOwnProperty(a) && u !== s && (u != null || s != null))
                if (a === "style")
                    if (s) {
                        for (l in s)
                            !s.hasOwnProperty(l) || u && u.hasOwnProperty(l) || (n || (n = {}),
                            n[l] = "");
                        for (l in u)
                            u.hasOwnProperty(l) && s[l] !== u[l] && (n || (n = {}),
                            n[l] = u[l])
                    } else
                        n || (i || (i = []),
                        i.push(a, n)),
                        n = u;
                else
                    a === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                    s = s ? s.__html : void 0,
                    u != null && s !== u && (i = i || []).push(a, u)) : a === "children" ? typeof u != "string" && typeof u != "number" || (i = i || []).push(a, "" + u) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && (uo.hasOwnProperty(a) ? (u != null && a === "onScroll" && ee("scroll", e),
                    i || s === u || (i = [])) : (i = i || []).push(a, u))
        }
        n && (i = i || []).push("style", n);
        var a = i;
        (t.updateQueue = a) && (t.flags |= 4)
    }
}
;
Hp = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
}
;
function Br(e, t) {
    if (!ne)
        switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null; )
                t.alternate !== null && (n = t),
                t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null; )
                n.alternate !== null && (r = n),
                n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
        }
}
function _e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child
      , n = 0
      , r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags & 14680064,
            r |= o.flags & 14680064,
            o.return = e,
            o = o.sibling;
    else
        for (o = e.child; o !== null; )
            n |= o.lanes | o.childLanes,
            r |= o.subtreeFlags,
            r |= o.flags,
            o.return = e,
            o = o.sibling;
    return e.subtreeFlags |= r,
    e.childLanes = n,
    t
}
function Iy(e, t, n) {
    var r = t.pendingProps;
    switch (ra(t),
    t.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
        return _e(t),
        null;
    case 1:
        return Ue(t.type) && ji(),
        _e(t),
        null;
    case 3:
        return r = t.stateNode,
        Sr(),
        te(Ve),
        te(Re),
        fa(),
        r.pendingContext && (r.context = r.pendingContext,
        r.pendingContext = null),
        (e === null || e.child === null) && (ei(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024,
        ht !== null && (gu(ht),
        ht = null))),
        au(e, t),
        _e(t),
        null;
    case 5:
        da(t);
        var o = An(So.current);
        if (n = t.type,
        e !== null && t.stateNode != null)
            Wp(e, t, n, r, o),
            e.ref !== t.ref && (t.flags |= 512,
            t.flags |= 2097152);
        else {
            if (!r) {
                if (t.stateNode === null)
                    throw Error(I(166));
                return _e(t),
                null
            }
            if (e = An(It.current),
            ei(t)) {
                r = t.stateNode,
                n = t.type;
                var i = t.memoizedProps;
                switch (r[kt] = t,
                r[wo] = i,
                e = (t.mode & 1) !== 0,
                n) {
                case "dialog":
                    ee("cancel", r),
                    ee("close", r);
                    break;
                case "iframe":
                case "object":
                case "embed":
                    ee("load", r);
                    break;
                case "video":
                case "audio":
                    for (o = 0; o < Xr.length; o++)
                        ee(Xr[o], r);
                    break;
                case "source":
                    ee("error", r);
                    break;
                case "img":
                case "image":
                case "link":
                    ee("error", r),
                    ee("load", r);
                    break;
                case "details":
                    ee("toggle", r);
                    break;
                case "input":
                    uc(r, i),
                    ee("invalid", r);
                    break;
                case "select":
                    r._wrapperState = {
                        wasMultiple: !!i.multiple
                    },
                    ee("invalid", r);
                    break;
                case "textarea":
                    cc(r, i),
                    ee("invalid", r)
                }
                Ls(n, i),
                o = null;
                for (var l in i)
                    if (i.hasOwnProperty(l)) {
                        var s = i[l];
                        l === "children" ? typeof s == "string" ? r.textContent !== s && (i.suppressHydrationWarning !== !0 && qo(r.textContent, s, e),
                        o = ["children", s]) : typeof s == "number" && r.textContent !== "" + s && (i.suppressHydrationWarning !== !0 && qo(r.textContent, s, e),
                        o = ["children", "" + s]) : uo.hasOwnProperty(l) && s != null && l === "onScroll" && ee("scroll", r)
                    }
                switch (n) {
                case "input":
                    Ho(r),
                    ac(r, i, !0);
                    break;
                case "textarea":
                    Ho(r),
                    dc(r);
                    break;
                case "select":
                case "option":
                    break;
                default:
                    typeof i.onClick == "function" && (r.onclick = Bi)
                }
                r = o,
                t.updateQueue = r,
                r !== null && (t.flags |= 4)
            } else {
                l = o.nodeType === 9 ? o : o.ownerDocument,
                e === "http://www.w3.org/1999/xhtml" && (e = wf(n)),
                e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = l.createElement("div"),
                e.innerHTML = "<script><\/script>",
                e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = l.createElement(n, {
                    is: r.is
                }) : (e = l.createElement(n),
                n === "select" && (l = e,
                r.multiple ? l.multiple = !0 : r.size && (l.size = r.size))) : e = l.createElementNS(e, n),
                e[kt] = t,
                e[wo] = r,
                $p(e, t, !1, !1),
                t.stateNode = e;
                e: {
                    switch (l = zs(n, r),
                    n) {
                    case "dialog":
                        ee("cancel", e),
                        ee("close", e),
                        o = r;
                        break;
                    case "iframe":
                    case "object":
                    case "embed":
                        ee("load", e),
                        o = r;
                        break;
                    case "video":
                    case "audio":
                        for (o = 0; o < Xr.length; o++)
                            ee(Xr[o], e);
                        o = r;
                        break;
                    case "source":
                        ee("error", e),
                        o = r;
                        break;
                    case "img":
                    case "image":
                    case "link":
                        ee("error", e),
                        ee("load", e),
                        o = r;
                        break;
                    case "details":
                        ee("toggle", e),
                        o = r;
                        break;
                    case "input":
                        uc(e, r),
                        o = As(e, r),
                        ee("invalid", e);
                        break;
                    case "option":
                        o = r;
                        break;
                    case "select":
                        e._wrapperState = {
                            wasMultiple: !!r.multiple
                        },
                        o = le({}, r, {
                            value: void 0
                        }),
                        ee("invalid", e);
                        break;
                    case "textarea":
                        cc(e, r),
                        o = Ds(e, r),
                        ee("invalid", e);
                        break;
                    default:
                        o = r
                    }
                    Ls(n, o),
                    s = o;
                    for (i in s)
                        if (s.hasOwnProperty(i)) {
                            var u = s[i];
                            i === "style" ? xf(e, u) : i === "dangerouslySetInnerHTML" ? (u = u ? u.__html : void 0,
                            u != null && Ef(e, u)) : i === "children" ? typeof u == "string" ? (n !== "textarea" || u !== "") && ao(e, u) : typeof u == "number" && ao(e, "" + u) : i !== "suppressContentEditableWarning" && i !== "suppressHydrationWarning" && i !== "autoFocus" && (uo.hasOwnProperty(i) ? u != null && i === "onScroll" && ee("scroll", e) : u != null && ju(e, i, u, l))
                        }
                    switch (n) {
                    case "input":
                        Ho(e),
                        ac(e, r, !1);
                        break;
                    case "textarea":
                        Ho(e),
                        dc(e);
                        break;
                    case "option":
                        r.value != null && e.setAttribute("value", "" + gn(r.value));
                        break;
                    case "select":
                        e.multiple = !!r.multiple,
                        i = r.value,
                        i != null ? ar(e, !!r.multiple, i, !1) : r.defaultValue != null && ar(e, !!r.multiple, r.defaultValue, !0);
                        break;
                    default:
                        typeof o.onClick == "function" && (e.onclick = Bi)
                    }
                    switch (n) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                        r = !!r.autoFocus;
                        break e;
                    case "img":
                        r = !0;
                        break e;
                    default:
                        r = !1
                    }
                }
                r && (t.flags |= 4)
            }
            t.ref !== null && (t.flags |= 512,
            t.flags |= 2097152)
        }
        return _e(t),
        null;
    case 6:
        if (e && t.stateNode != null)
            Hp(e, t, e.memoizedProps, r);
        else {
            if (typeof r != "string" && t.stateNode === null)
                throw Error(I(166));
            if (n = An(So.current),
            An(It.current),
            ei(t)) {
                if (r = t.stateNode,
                n = t.memoizedProps,
                r[kt] = t,
                (i = r.nodeValue !== n) && (e = Ye,
                e !== null))
                    switch (e.tag) {
                    case 3:
                        qo(r.nodeValue, n, (e.mode & 1) !== 0);
                        break;
                    case 5:
                        e.memoizedProps.suppressHydrationWarning !== !0 && qo(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                i && (t.flags |= 4)
            } else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r),
                r[kt] = t,
                t.stateNode = r
        }
        return _e(t),
        null;
    case 13:
        if (te(oe),
        r = t.memoizedState,
        e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (ne && Ke !== null && t.mode & 1 && !(t.flags & 128))
                ap(),
                wr(),
                t.flags |= 98560,
                i = !1;
            else if (i = ei(t),
            r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!i)
                        throw Error(I(318));
                    if (i = t.memoizedState,
                    i = i !== null ? i.dehydrated : null,
                    !i)
                        throw Error(I(317));
                    i[kt] = t
                } else
                    wr(),
                    !(t.flags & 128) && (t.memoizedState = null),
                    t.flags |= 4;
                _e(t),
                i = !1
            } else
                ht !== null && (gu(ht),
                ht = null),
                i = !0;
            if (!i)
                return t.flags & 65536 ? t : null
        }
        return t.flags & 128 ? (t.lanes = n,
        t) : (r = r !== null,
        r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192,
        t.mode & 1 && (e === null || oe.current & 1 ? me === 0 && (me = 3) : _a())),
        t.updateQueue !== null && (t.flags |= 4),
        _e(t),
        null);
    case 4:
        return Sr(),
        au(e, t),
        e === null && go(t.stateNode.containerInfo),
        _e(t),
        null;
    case 10:
        return sa(t.type._context),
        _e(t),
        null;
    case 17:
        return Ue(t.type) && ji(),
        _e(t),
        null;
    case 19:
        if (te(oe),
        i = t.memoizedState,
        i === null)
            return _e(t),
            null;
        if (r = (t.flags & 128) !== 0,
        l = i.rendering,
        l === null)
            if (r)
                Br(i, !1);
            else {
                if (me !== 0 || e !== null && e.flags & 128)
                    for (e = t.child; e !== null; ) {
                        if (l = Qi(e),
                        l !== null) {
                            for (t.flags |= 128,
                            Br(i, !1),
                            r = l.updateQueue,
                            r !== null && (t.updateQueue = r,
                            t.flags |= 4),
                            t.subtreeFlags = 0,
                            r = n,
                            n = t.child; n !== null; )
                                i = n,
                                e = r,
                                i.flags &= 14680066,
                                l = i.alternate,
                                l === null ? (i.childLanes = 0,
                                i.lanes = e,
                                i.child = null,
                                i.subtreeFlags = 0,
                                i.memoizedProps = null,
                                i.memoizedState = null,
                                i.updateQueue = null,
                                i.dependencies = null,
                                i.stateNode = null) : (i.childLanes = l.childLanes,
                                i.lanes = l.lanes,
                                i.child = l.child,
                                i.subtreeFlags = 0,
                                i.deletions = null,
                                i.memoizedProps = l.memoizedProps,
                                i.memoizedState = l.memoizedState,
                                i.updateQueue = l.updateQueue,
                                i.type = l.type,
                                e = l.dependencies,
                                i.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }),
                                n = n.sibling;
                            return J(oe, oe.current & 1 | 2),
                            t.child
                        }
                        e = e.sibling
                    }
                i.tail !== null && ue() > Cr && (t.flags |= 128,
                r = !0,
                Br(i, !1),
                t.lanes = 4194304)
            }
        else {
            if (!r)
                if (e = Qi(l),
                e !== null) {
                    if (t.flags |= 128,
                    r = !0,
                    n = e.updateQueue,
                    n !== null && (t.updateQueue = n,
                    t.flags |= 4),
                    Br(i, !0),
                    i.tail === null && i.tailMode === "hidden" && !l.alternate && !ne)
                        return _e(t),
                        null
                } else
                    2 * ue() - i.renderingStartTime > Cr && n !== 1073741824 && (t.flags |= 128,
                    r = !0,
                    Br(i, !1),
                    t.lanes = 4194304);
            i.isBackwards ? (l.sibling = t.child,
            t.child = l) : (n = i.last,
            n !== null ? n.sibling = l : t.child = l,
            i.last = l)
        }
        return i.tail !== null ? (t = i.tail,
        i.rendering = t,
        i.tail = t.sibling,
        i.renderingStartTime = ue(),
        t.sibling = null,
        n = oe.current,
        J(oe, r ? n & 1 | 2 : n & 1),
        t) : (_e(t),
        null);
    case 22:
    case 23:
        return Ca(),
        r = t.memoizedState !== null,
        e !== null && e.memoizedState !== null !== r && (t.flags |= 8192),
        r && t.mode & 1 ? We & 1073741824 && (_e(t),
        t.subtreeFlags & 6 && (t.flags |= 8192)) : _e(t),
        null;
    case 24:
        return null;
    case 25:
        return null
    }
    throw Error(I(156, t.tag))
}
function Ay(e, t) {
    switch (ra(t),
    t.tag) {
    case 1:
        return Ue(t.type) && ji(),
        e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 3:
        return Sr(),
        te(Ve),
        te(Re),
        fa(),
        e = t.flags,
        e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128,
        t) : null;
    case 5:
        return da(t),
        null;
    case 13:
        if (te(oe),
        e = t.memoizedState,
        e !== null && e.dehydrated !== null) {
            if (t.alternate === null)
                throw Error(I(340));
            wr()
        }
        return e = t.flags,
        e & 65536 ? (t.flags = e & -65537 | 128,
        t) : null;
    case 19:
        return te(oe),
        null;
    case 4:
        return Sr(),
        null;
    case 10:
        return sa(t.type._context),
        null;
    case 22:
    case 23:
        return Ca(),
        null;
    case 24:
        return null;
    default:
        return null
    }
}
var ri = !1
  , ke = !1
  , My = typeof WeakSet == "function" ? WeakSet : Set
  , O = null;
function sr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null)
            } catch (r) {
                se(e, t, r)
            }
        else
            n.current = null
}
function cu(e, t, n) {
    try {
        n()
    } catch (r) {
        se(e, t, r)
    }
}
var ed = !1;
function Oy(e, t) {
    if (Ks = Fi,
    e = Xf(),
    ta(e)) {
        if ("selectionStart"in e)
            var n = {
                start: e.selectionStart,
                end: e.selectionEnd
            };
        else
            e: {
                n = (n = e.ownerDocument) && n.defaultView || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset
                      , i = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType,
                        i.nodeType
                    } catch {
                        n = null;
                        break e
                    }
                    var l = 0
                      , s = -1
                      , u = -1
                      , a = 0
                      , f = 0
                      , d = e
                      , m = null;
                    t: for (; ; ) {
                        for (var y; d !== n || o !== 0 && d.nodeType !== 3 || (s = l + o),
                        d !== i || r !== 0 && d.nodeType !== 3 || (u = l + r),
                        d.nodeType === 3 && (l += d.nodeValue.length),
                        (y = d.firstChild) !== null; )
                            m = d,
                            d = y;
                        for (; ; ) {
                            if (d === e)
                                break t;
                            if (m === n && ++a === o && (s = l),
                            m === i && ++f === r && (u = l),
                            (y = d.nextSibling) !== null)
                                break;
                            d = m,
                            m = d.parentNode
                        }
                        d = y
                    }
                    n = s === -1 || u === -1 ? null : {
                        start: s,
                        end: u
                    }
                } else
                    n = null
            }
        n = n || {
            start: 0,
            end: 0
        }
    } else
        n = null;
    for (Ys = {
        focusedElem: e,
        selectionRange: n
    },
    Fi = !1,
    O = t; O !== null; )
        if (t = O,
        e = t.child,
        (t.subtreeFlags & 1028) !== 0 && e !== null)
            e.return = t,
            O = e;
        else
            for (; O !== null; ) {
                t = O;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var h = w.memoizedProps
                                  , E = w.memoizedState
                                  , c = t.stateNode
                                  , p = c.getSnapshotBeforeUpdate(t.elementType === t.type ? h : ft(t.type, h), E);
                                c.__reactInternalSnapshotBeforeUpdate = p
                            }
                            break;
                        case 3:
                            var v = t.stateNode.containerInfo;
                            v.nodeType === 1 ? v.textContent = "" : v.nodeType === 9 && v.documentElement && v.removeChild(v.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(I(163))
                        }
                } catch (x) {
                    se(t, t.return, x)
                }
                if (e = t.sibling,
                e !== null) {
                    e.return = t.return,
                    O = e;
                    break
                }
                O = t.return
            }
    return w = ed,
    ed = !1,
    w
}
function oo(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null,
    r !== null) {
        var o = r = r.next;
        do {
            if ((o.tag & e) === e) {
                var i = o.destroy;
                o.destroy = void 0,
                i !== void 0 && cu(t, n, i)
            }
            o = o.next
        } while (o !== r)
    }
}
function yl(e, t) {
    if (t = t.updateQueue,
    t = t !== null ? t.lastEffect : null,
    t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function du(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
        case 5:
            e = n;
            break;
        default:
            e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}
function Gp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null,
    Gp(t)),
    e.child = null,
    e.deletions = null,
    e.sibling = null,
    e.tag === 5 && (t = e.stateNode,
    t !== null && (delete t[kt],
    delete t[wo],
    delete t[Zs],
    delete t[hy],
    delete t[vy])),
    e.stateNode = null,
    e.return = null,
    e.dependencies = null,
    e.memoizedProps = null,
    e.memoizedState = null,
    e.pendingProps = null,
    e.stateNode = null,
    e.updateQueue = null
}
function Kp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function td(e) {
    e: for (; ; ) {
        for (; e.sibling === null; ) {
            if (e.return === null || Kp(e.return))
                return null;
            e = e.return
        }
        for (e.sibling.return = e.return,
        e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4)
                continue e;
            e.child.return = e,
            e = e.child
        }
        if (!(e.flags & 2))
            return e.stateNode
    }
}
function fu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode,
        t.insertBefore(e, n)) : (t = n,
        t.appendChild(e)),
        n = n._reactRootContainer,
        n != null || t.onclick !== null || (t.onclick = Bi));
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (fu(e, t, n),
        e = e.sibling; e !== null; )
            fu(e, t, n),
            e = e.sibling
}
function pu(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        e = e.stateNode,
        t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child,
    e !== null))
        for (pu(e, t, n),
        e = e.sibling; e !== null; )
            pu(e, t, n),
            e = e.sibling
}
var we = null
  , mt = !1;
function Zt(e, t, n) {
    for (n = n.child; n !== null; )
        Yp(e, t, n),
        n = n.sibling
}
function Yp(e, t, n) {
    if (Pt && typeof Pt.onCommitFiberUnmount == "function")
        try {
            Pt.onCommitFiberUnmount(cl, n)
        } catch {}
    switch (n.tag) {
    case 5:
        ke || sr(n, t);
    case 6:
        var r = we
          , o = mt;
        we = null,
        Zt(e, t, n),
        we = r,
        mt = o,
        we !== null && (mt ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : we.removeChild(n.stateNode));
        break;
    case 18:
        we !== null && (mt ? (e = we,
        n = n.stateNode,
        e.nodeType === 8 ? Jl(e.parentNode, n) : e.nodeType === 1 && Jl(e, n),
        mo(e)) : Jl(we, n.stateNode));
        break;
    case 4:
        r = we,
        o = mt,
        we = n.stateNode.containerInfo,
        mt = !0,
        Zt(e, t, n),
        we = r,
        mt = o;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!ke && (r = n.updateQueue,
        r !== null && (r = r.lastEffect,
        r !== null))) {
            o = r = r.next;
            do {
                var i = o
                  , l = i.destroy;
                i = i.tag,
                l !== void 0 && (i & 2 || i & 4) && cu(n, t, l),
                o = o.next
            } while (o !== r)
        }
        Zt(e, t, n);
        break;
    case 1:
        if (!ke && (sr(n, t),
        r = n.stateNode,
        typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps,
                r.state = n.memoizedState,
                r.componentWillUnmount()
            } catch (s) {
                se(n, t, s)
            }
        Zt(e, t, n);
        break;
    case 21:
        Zt(e, t, n);
        break;
    case 22:
        n.mode & 1 ? (ke = (r = ke) || n.memoizedState !== null,
        Zt(e, t, n),
        ke = r) : Zt(e, t, n);
        break;
    default:
        Zt(e, t, n)
    }
}
function nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new My),
        t.forEach(function(r) {
            var o = jy.bind(null, e, r);
            n.has(r) || (n.add(r),
            r.then(o, o))
        })
    }
}
function at(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var i = e
                  , l = t
                  , s = l;
                e: for (; s !== null; ) {
                    switch (s.tag) {
                    case 5:
                        we = s.stateNode,
                        mt = !1;
                        break e;
                    case 3:
                        we = s.stateNode.containerInfo,
                        mt = !0;
                        break e;
                    case 4:
                        we = s.stateNode.containerInfo,
                        mt = !0;
                        break e
                    }
                    s = s.return
                }
                if (we === null)
                    throw Error(I(160));
                Yp(i, l, o),
                we = null,
                mt = !1;
                var u = o.alternate;
                u !== null && (u.return = null),
                o.return = null
            } catch (a) {
                se(o, t, a)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; )
            Qp(t, e),
            t = t.sibling
}
function Qp(e, t) {
    var n = e.alternate
      , r = e.flags;
    switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (at(t, e),
        Ct(e),
        r & 4) {
            try {
                oo(3, e, e.return),
                yl(3, e)
            } catch (h) {
                se(e, e.return, h)
            }
            try {
                oo(5, e, e.return)
            } catch (h) {
                se(e, e.return, h)
            }
        }
        break;
    case 1:
        at(t, e),
        Ct(e),
        r & 512 && n !== null && sr(n, n.return);
        break;
    case 5:
        if (at(t, e),
        Ct(e),
        r & 512 && n !== null && sr(n, n.return),
        e.flags & 32) {
            var o = e.stateNode;
            try {
                ao(o, "")
            } catch (h) {
                se(e, e.return, h)
            }
        }
        if (r & 4 && (o = e.stateNode,
        o != null)) {
            var i = e.memoizedProps
              , l = n !== null ? n.memoizedProps : i
              , s = e.type
              , u = e.updateQueue;
            if (e.updateQueue = null,
            u !== null)
                try {
                    s === "input" && i.type === "radio" && i.name != null && gf(o, i),
                    zs(s, l);
                    var a = zs(s, i);
                    for (l = 0; l < u.length; l += 2) {
                        var f = u[l]
                          , d = u[l + 1];
                        f === "style" ? xf(o, d) : f === "dangerouslySetInnerHTML" ? Ef(o, d) : f === "children" ? ao(o, d) : ju(o, f, d, a)
                    }
                    switch (s) {
                    case "input":
                        Ms(o, i);
                        break;
                    case "textarea":
                        yf(o, i);
                        break;
                    case "select":
                        var m = o._wrapperState.wasMultiple;
                        o._wrapperState.wasMultiple = !!i.multiple;
                        var y = i.value;
                        y != null ? ar(o, !!i.multiple, y, !1) : m !== !!i.multiple && (i.defaultValue != null ? ar(o, !!i.multiple, i.defaultValue, !0) : ar(o, !!i.multiple, i.multiple ? [] : "", !1))
                    }
                    o[wo] = i
                } catch (h) {
                    se(e, e.return, h)
                }
        }
        break;
    case 6:
        if (at(t, e),
        Ct(e),
        r & 4) {
            if (e.stateNode === null)
                throw Error(I(162));
            o = e.stateNode,
            i = e.memoizedProps;
            try {
                o.nodeValue = i
            } catch (h) {
                se(e, e.return, h)
            }
        }
        break;
    case 3:
        if (at(t, e),
        Ct(e),
        r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                mo(t.containerInfo)
            } catch (h) {
                se(e, e.return, h)
            }
        break;
    case 4:
        at(t, e),
        Ct(e);
        break;
    case 13:
        at(t, e),
        Ct(e),
        o = e.child,
        o.flags & 8192 && (i = o.memoizedState !== null,
        o.stateNode.isHidden = i,
        !i || o.alternate !== null && o.alternate.memoizedState !== null || (Sa = ue())),
        r & 4 && nd(e);
        break;
    case 22:
        if (f = n !== null && n.memoizedState !== null,
        e.mode & 1 ? (ke = (a = ke) || f,
        at(t, e),
        ke = a) : at(t, e),
        Ct(e),
        r & 8192) {
            if (a = e.memoizedState !== null,
            (e.stateNode.isHidden = a) && !f && e.mode & 1)
                for (O = e,
                f = e.child; f !== null; ) {
                    for (d = O = f; O !== null; ) {
                        switch (m = O,
                        y = m.child,
                        m.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            oo(4, m, m.return);
                            break;
                        case 1:
                            sr(m, m.return);
                            var w = m.stateNode;
                            if (typeof w.componentWillUnmount == "function") {
                                r = m,
                                n = m.return;
                                try {
                                    t = r,
                                    w.props = t.memoizedProps,
                                    w.state = t.memoizedState,
                                    w.componentWillUnmount()
                                } catch (h) {
                                    se(r, n, h)
                                }
                            }
                            break;
                        case 5:
                            sr(m, m.return);
                            break;
                        case 22:
                            if (m.memoizedState !== null) {
                                od(d);
                                continue
                            }
                        }
                        y !== null ? (y.return = m,
                        O = y) : od(d)
                    }
                    f = f.sibling
                }
            e: for (f = null,
            d = e; ; ) {
                if (d.tag === 5) {
                    if (f === null) {
                        f = d;
                        try {
                            o = d.stateNode,
                            a ? (i = o.style,
                            typeof i.setProperty == "function" ? i.setProperty("display", "none", "important") : i.display = "none") : (s = d.stateNode,
                            u = d.memoizedProps.style,
                            l = u != null && u.hasOwnProperty("display") ? u.display : null,
                            s.style.display = Sf("display", l))
                        } catch (h) {
                            se(e, e.return, h)
                        }
                    }
                } else if (d.tag === 6) {
                    if (f === null)
                        try {
                            d.stateNode.nodeValue = a ? "" : d.memoizedProps
                        } catch (h) {
                            se(e, e.return, h)
                        }
                } else if ((d.tag !== 22 && d.tag !== 23 || d.memoizedState === null || d === e) && d.child !== null) {
                    d.child.return = d,
                    d = d.child;
                    continue
                }
                if (d === e)
                    break e;
                for (; d.sibling === null; ) {
                    if (d.return === null || d.return === e)
                        break e;
                    f === d && (f = null),
                    d = d.return
                }
                f === d && (f = null),
                d.sibling.return = d.return,
                d = d.sibling
            }
        }
        break;
    case 19:
        at(t, e),
        Ct(e),
        r & 4 && nd(e);
        break;
    case 21:
        break;
    default:
        at(t, e),
        Ct(e)
    }
}
function Ct(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (Kp(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(I(160))
            }
            switch (r.tag) {
            case 5:
                var o = r.stateNode;
                r.flags & 32 && (ao(o, ""),
                r.flags &= -33);
                var i = td(e);
                pu(e, i, o);
                break;
            case 3:
            case 4:
                var l = r.stateNode.containerInfo
                  , s = td(e);
                fu(e, s, l);
                break;
            default:
                throw Error(I(161))
            }
        } catch (u) {
            se(e, e.return, u)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function Dy(e, t, n) {
    O = e,
    Xp(e)
}
function Xp(e, t, n) {
    for (var r = (e.mode & 1) !== 0; O !== null; ) {
        var o = O
          , i = o.child;
        if (o.tag === 22 && r) {
            var l = o.memoizedState !== null || ri;
            if (!l) {
                var s = o.alternate
                  , u = s !== null && s.memoizedState !== null || ke;
                s = ri;
                var a = ke;
                if (ri = l,
                (ke = u) && !a)
                    for (O = o; O !== null; )
                        l = O,
                        u = l.child,
                        l.tag === 22 && l.memoizedState !== null ? id(o) : u !== null ? (u.return = l,
                        O = u) : id(o);
                for (; i !== null; )
                    O = i,
                    Xp(i),
                    i = i.sibling;
                O = o,
                ri = s,
                ke = a
            }
            rd(e)
        } else
            o.subtreeFlags & 8772 && i !== null ? (i.return = o,
            O = i) : rd(e)
    }
}
function rd(e) {
    for (; O !== null; ) {
        var t = O;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ke || yl(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ke)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var o = t.elementType === t.type ? n.memoizedProps : ft(t.type, n.memoizedProps);
                                r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var i = t.updateQueue;
                        i !== null && Bc(t, i, r);
                        break;
                    case 3:
                        var l = t.updateQueue;
                        if (l !== null) {
                            if (n = null,
                            t.child !== null)
                                switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                                }
                            Bc(t, l, n)
                        }
                        break;
                    case 5:
                        var s = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = s;
                            var u = t.memoizedProps;
                            switch (t.type) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                u.autoFocus && n.focus();
                                break;
                            case "img":
                                u.src && (n.src = u.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var a = t.alternate;
                            if (a !== null) {
                                var f = a.memoizedState;
                                if (f !== null) {
                                    var d = f.dehydrated;
                                    d !== null && mo(d)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(I(163))
                    }
                ke || t.flags & 512 && du(t)
            } catch (m) {
                se(t, t.return, m)
            }
        }
        if (t === e) {
            O = null;
            break
        }
        if (n = t.sibling,
        n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function od(e) {
    for (; O !== null; ) {
        var t = O;
        if (t === e) {
            O = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return,
            O = n;
            break
        }
        O = t.return
    }
}
function id(e) {
    for (; O !== null; ) {
        var t = O;
        try {
            switch (t.tag) {
            case 0:
            case 11:
            case 15:
                var n = t.return;
                try {
                    yl(4, t)
                } catch (u) {
                    se(t, n, u)
                }
                break;
            case 1:
                var r = t.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var o = t.return;
                    try {
                        r.componentDidMount()
                    } catch (u) {
                        se(t, o, u)
                    }
                }
                var i = t.return;
                try {
                    du(t)
                } catch (u) {
                    se(t, i, u)
                }
                break;
            case 5:
                var l = t.return;
                try {
                    du(t)
                } catch (u) {
                    se(t, l, u)
                }
            }
        } catch (u) {
            se(t, t.return, u)
        }
        if (t === e) {
            O = null;
            break
        }
        var s = t.sibling;
        if (s !== null) {
            s.return = t.return,
            O = s;
            break
        }
        O = t.return
    }
}
var by = Math.ceil
  , Ji = Yt.ReactCurrentDispatcher
  , wa = Yt.ReactCurrentOwner
  , ot = Yt.ReactCurrentBatchConfig
  , G = 0
  , ge = null
  , ce = null
  , Ee = 0
  , We = 0
  , ur = _n(0)
  , me = 0
  , ko = null
  , Fn = 0
  , wl = 0
  , Ea = 0
  , io = null
  , Le = null
  , Sa = 0
  , Cr = 1 / 0
  , Lt = null
  , qi = !1
  , mu = null
  , mn = null
  , oi = !1
  , sn = null
  , el = 0
  , lo = 0
  , hu = null
  , Ni = -1
  , Ti = 0;
function Ie() {
    return G & 6 ? ue() : Ni !== -1 ? Ni : Ni = ue()
}
function hn(e) {
    return e.mode & 1 ? G & 2 && Ee !== 0 ? Ee & -Ee : yy.transition !== null ? (Ti === 0 && (Ti = Df()),
    Ti) : (e = Q,
    e !== 0 || (e = window.event,
    e = e === void 0 ? 16 : Bf(e.type)),
    e) : 1
}
function gt(e, t, n, r) {
    if (50 < lo)
        throw lo = 0,
        hu = null,
        Error(I(185));
    Oo(e, n, r),
    (!(G & 2) || e !== ge) && (e === ge && (!(G & 2) && (wl |= n),
    me === 4 && on(e, Ee)),
    Be(e, r),
    n === 1 && G === 0 && !(t.mode & 1) && (Cr = ue() + 500,
    hl && kn()))
}
function Be(e, t) {
    var n = e.callbackNode;
    yg(e, t);
    var r = zi(e, e === ge ? Ee : 0);
    if (r === 0)
        n !== null && mc(n),
        e.callbackNode = null,
        e.callbackPriority = 0;
    else if (t = r & -r,
    e.callbackPriority !== t) {
        if (n != null && mc(n),
        t === 1)
            e.tag === 0 ? gy(ld.bind(null, e)) : lp(ld.bind(null, e)),
            py(function() {
                !(G & 6) && kn()
            }),
            n = null;
        else {
            switch (bf(r)) {
            case 1:
                n = Ku;
                break;
            case 4:
                n = Mf;
                break;
            case 16:
                n = Li;
                break;
            case 536870912:
                n = Of;
                break;
            default:
                n = Li
            }
            n = om(n, Zp.bind(null, e))
        }
        e.callbackPriority = t,
        e.callbackNode = n
    }
}
function Zp(e, t) {
    if (Ni = -1,
    Ti = 0,
    G & 6)
        throw Error(I(327));
    var n = e.callbackNode;
    if (mr() && e.callbackNode !== n)
        return null;
    var r = zi(e, e === ge ? Ee : 0);
    if (r === 0)
        return null;
    if (r & 30 || r & e.expiredLanes || t)
        t = tl(e, r);
    else {
        t = r;
        var o = G;
        G |= 2;
        var i = qp();
        (ge !== e || Ee !== t) && (Lt = null,
        Cr = ue() + 500,
        On(e, t));
        do
            try {
                Fy();
                break
            } catch (s) {
                Jp(e, s)
            }
        while (1);
        la(),
        Ji.current = i,
        G = o,
        ce !== null ? t = 0 : (ge = null,
        Ee = 0,
        t = me)
    }
    if (t !== 0) {
        if (t === 2 && (o = js(e),
        o !== 0 && (r = o,
        t = vu(e, o))),
        t === 1)
            throw n = ko,
            On(e, 0),
            on(e, r),
            Be(e, ue()),
            n;
        if (t === 6)
            on(e, r);
        else {
            if (o = e.current.alternate,
            !(r & 30) && !Ly(o) && (t = tl(e, r),
            t === 2 && (i = js(e),
            i !== 0 && (r = i,
            t = vu(e, i))),
            t === 1))
                throw n = ko,
                On(e, 0),
                on(e, r),
                Be(e, ue()),
                n;
            switch (e.finishedWork = o,
            e.finishedLanes = r,
            t) {
            case 0:
            case 1:
                throw Error(I(345));
            case 2:
                Tn(e, Le, Lt);
                break;
            case 3:
                if (on(e, r),
                (r & 130023424) === r && (t = Sa + 500 - ue(),
                10 < t)) {
                    if (zi(e, 0) !== 0)
                        break;
                    if (o = e.suspendedLanes,
                    (o & r) !== r) {
                        Ie(),
                        e.pingedLanes |= e.suspendedLanes & o;
                        break
                    }
                    e.timeoutHandle = Xs(Tn.bind(null, e, Le, Lt), t);
                    break
                }
                Tn(e, Le, Lt);
                break;
            case 4:
                if (on(e, r),
                (r & 4194240) === r)
                    break;
                for (t = e.eventTimes,
                o = -1; 0 < r; ) {
                    var l = 31 - vt(r);
                    i = 1 << l,
                    l = t[l],
                    l > o && (o = l),
                    r &= ~i
                }
                if (r = o,
                r = ue() - r,
                r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * by(r / 1960)) - r,
                10 < r) {
                    e.timeoutHandle = Xs(Tn.bind(null, e, Le, Lt), r);
                    break
                }
                Tn(e, Le, Lt);
                break;
            case 5:
                Tn(e, Le, Lt);
                break;
            default:
                throw Error(I(329))
            }
        }
    }
    return Be(e, ue()),
    e.callbackNode === n ? Zp.bind(null, e) : null
}
function vu(e, t) {
    var n = io;
    return e.current.memoizedState.isDehydrated && (On(e, t).flags |= 256),
    e = tl(e, t),
    e !== 2 && (t = Le,
    Le = n,
    t !== null && gu(t)),
    e
}
function gu(e) {
    Le === null ? Le = e : Le.push.apply(Le, e)
}
function Ly(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores,
            n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r]
                      , i = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!yt(i(), o))
                            return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child,
        t.subtreeFlags & 16384 && n !== null)
            n.return = t,
            t = n;
        else {
            if (t === e)
                break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e)
                    return !0;
                t = t.return
            }
            t.sibling.return = t.return,
            t = t.sibling
        }
    }
    return !0
}
function on(e, t) {
    for (t &= ~Ea,
    t &= ~wl,
    e.suspendedLanes |= t,
    e.pingedLanes &= ~t,
    e = e.expirationTimes; 0 < t; ) {
        var n = 31 - vt(t)
          , r = 1 << n;
        e[n] = -1,
        t &= ~r
    }
}
function ld(e) {
    if (G & 6)
        throw Error(I(327));
    mr();
    var t = zi(e, 0);
    if (!(t & 1))
        return Be(e, ue()),
        null;
    var n = tl(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = js(e);
        r !== 0 && (t = r,
        n = vu(e, r))
    }
    if (n === 1)
        throw n = ko,
        On(e, 0),
        on(e, t),
        Be(e, ue()),
        n;
    if (n === 6)
        throw Error(I(345));
    return e.finishedWork = e.current.alternate,
    e.finishedLanes = t,
    Tn(e, Le, Lt),
    Be(e, ue()),
    null
}
function xa(e, t) {
    var n = G;
    G |= 1;
    try {
        return e(t)
    } finally {
        G = n,
        G === 0 && (Cr = ue() + 500,
        hl && kn())
    }
}
function Vn(e) {
    sn !== null && sn.tag === 0 && !(G & 6) && mr();
    var t = G;
    G |= 1;
    var n = ot.transition
      , r = Q;
    try {
        if (ot.transition = null,
        Q = 1,
        e)
            return e()
    } finally {
        Q = r,
        ot.transition = n,
        G = t,
        !(G & 6) && kn()
    }
}
function Ca() {
    We = ur.current,
    te(ur)
}
function On(e, t) {
    e.finishedWork = null,
    e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1,
    fy(n)),
    ce !== null)
        for (n = ce.return; n !== null; ) {
            var r = n;
            switch (ra(r),
            r.tag) {
            case 1:
                r = r.type.childContextTypes,
                r != null && ji();
                break;
            case 3:
                Sr(),
                te(Ve),
                te(Re),
                fa();
                break;
            case 5:
                da(r);
                break;
            case 4:
                Sr();
                break;
            case 13:
                te(oe);
                break;
            case 19:
                te(oe);
                break;
            case 10:
                sa(r.type._context);
                break;
            case 22:
            case 23:
                Ca()
            }
            n = n.return
        }
    if (ge = e,
    ce = e = vn(e.current, null),
    Ee = We = t,
    me = 0,
    ko = null,
    Ea = wl = Fn = 0,
    Le = io = null,
    In !== null) {
        for (t = 0; t < In.length; t++)
            if (n = In[t],
            r = n.interleaved,
            r !== null) {
                n.interleaved = null;
                var o = r.next
                  , i = n.pending;
                if (i !== null) {
                    var l = i.next;
                    i.next = o,
                    r.next = l
                }
                n.pending = r
            }
        In = null
    }
    return e
}
function Jp(e, t) {
    do {
        var n = ce;
        try {
            if (la(),
            _i.current = Zi,
            Xi) {
                for (var r = ie.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null),
                    r = r.next
                }
                Xi = !1
            }
            if (zn = 0,
            ve = pe = ie = null,
            ro = !1,
            xo = 0,
            wa.current = null,
            n === null || n.return === null) {
                me = 1,
                ko = t,
                ce = null;
                break
            }
            e: {
                var i = e
                  , l = n.return
                  , s = n
                  , u = t;
                if (t = Ee,
                s.flags |= 32768,
                u !== null && typeof u == "object" && typeof u.then == "function") {
                    var a = u
                      , f = s
                      , d = f.tag;
                    if (!(f.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var m = f.alternate;
                        m ? (f.updateQueue = m.updateQueue,
                        f.memoizedState = m.memoizedState,
                        f.lanes = m.lanes) : (f.updateQueue = null,
                        f.memoizedState = null)
                    }
                    var y = Kc(l);
                    if (y !== null) {
                        y.flags &= -257,
                        Yc(y, l, s, i, t),
                        y.mode & 1 && Gc(i, a, t),
                        t = y,
                        u = a;
                        var w = t.updateQueue;
                        if (w === null) {
                            var h = new Set;
                            h.add(u),
                            t.updateQueue = h
                        } else
                            w.add(u);
                        break e
                    } else {
                        if (!(t & 1)) {
                            Gc(i, a, t),
                            _a();
                            break e
                        }
                        u = Error(I(426))
                    }
                } else if (ne && s.mode & 1) {
                    var E = Kc(l);
                    if (E !== null) {
                        !(E.flags & 65536) && (E.flags |= 256),
                        Yc(E, l, s, i, t),
                        oa(xr(u, s));
                        break e
                    }
                }
                i = u = xr(u, s),
                me !== 4 && (me = 2),
                io === null ? io = [i] : io.push(i),
                i = l;
                do {
                    switch (i.tag) {
                    case 3:
                        i.flags |= 65536,
                        t &= -t,
                        i.lanes |= t;
                        var c = bp(i, u, t);
                        Uc(i, c);
                        break e;
                    case 1:
                        s = u;
                        var p = i.type
                          , v = i.stateNode;
                        if (!(i.flags & 128) && (typeof p.getDerivedStateFromError == "function" || v !== null && typeof v.componentDidCatch == "function" && (mn === null || !mn.has(v)))) {
                            i.flags |= 65536,
                            t &= -t,
                            i.lanes |= t;
                            var x = Lp(i, s, t);
                            Uc(i, x);
                            break e
                        }
                    }
                    i = i.return
                } while (i !== null)
            }
            tm(n)
        } catch (C) {
            t = C,
            ce === n && n !== null && (ce = n = n.return);
            continue
        }
        break
    } while (1)
}
function qp() {
    var e = Ji.current;
    return Ji.current = Zi,
    e === null ? Zi : e
}
function _a() {
    (me === 0 || me === 3 || me === 2) && (me = 4),
    ge === null || !(Fn & 268435455) && !(wl & 268435455) || on(ge, Ee)
}
function tl(e, t) {
    var n = G;
    G |= 2;
    var r = qp();
    (ge !== e || Ee !== t) && (Lt = null,
    On(e, t));
    do
        try {
            zy();
            break
        } catch (o) {
            Jp(e, o)
        }
    while (1);
    if (la(),
    G = n,
    Ji.current = r,
    ce !== null)
        throw Error(I(261));
    return ge = null,
    Ee = 0,
    me
}
function zy() {
    for (; ce !== null; )
        em(ce)
}
function Fy() {
    for (; ce !== null && !ag(); )
        em(ce)
}
function em(e) {
    var t = rm(e.alternate, e, We);
    e.memoizedProps = e.pendingProps,
    t === null ? tm(e) : ce = t,
    wa.current = null
}
function tm(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return,
        t.flags & 32768) {
            if (n = Ay(n, t),
            n !== null) {
                n.flags &= 32767,
                ce = n;
                return
            }
            if (e !== null)
                e.flags |= 32768,
                e.subtreeFlags = 0,
                e.deletions = null;
            else {
                me = 6,
                ce = null;
                return
            }
        } else if (n = Iy(n, t, We),
        n !== null) {
            ce = n;
            return
        }
        if (t = t.sibling,
        t !== null) {
            ce = t;
            return
        }
        ce = t = e
    } while (t !== null);
    me === 0 && (me = 5)
}
function Tn(e, t, n) {
    var r = Q
      , o = ot.transition;
    try {
        ot.transition = null,
        Q = 1,
        Vy(e, t, n, r)
    } finally {
        ot.transition = o,
        Q = r
    }
    return null
}
function Vy(e, t, n, r) {
    do
        mr();
    while (sn !== null);
    if (G & 6)
        throw Error(I(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null)
        return null;
    if (e.finishedWork = null,
    e.finishedLanes = 0,
    n === e.current)
        throw Error(I(177));
    e.callbackNode = null,
    e.callbackPriority = 0;
    var i = n.lanes | n.childLanes;
    if (wg(e, i),
    e === ge && (ce = ge = null,
    Ee = 0),
    !(n.subtreeFlags & 2064) && !(n.flags & 2064) || oi || (oi = !0,
    om(Li, function() {
        return mr(),
        null
    })),
    i = (n.flags & 15990) !== 0,
    n.subtreeFlags & 15990 || i) {
        i = ot.transition,
        ot.transition = null;
        var l = Q;
        Q = 1;
        var s = G;
        G |= 4,
        wa.current = null,
        Oy(e, n),
        Qp(n, e),
        iy(Ys),
        Fi = !!Ks,
        Ys = Ks = null,
        e.current = n,
        Dy(n),
        cg(),
        G = s,
        Q = l,
        ot.transition = i
    } else
        e.current = n;
    if (oi && (oi = !1,
    sn = e,
    el = o),
    i = e.pendingLanes,
    i === 0 && (mn = null),
    pg(n.stateNode),
    Be(e, ue()),
    t !== null)
        for (r = e.onRecoverableError,
        n = 0; n < t.length; n++)
            o = t[n],
            r(o.value, {
                componentStack: o.stack,
                digest: o.digest
            });
    if (qi)
        throw qi = !1,
        e = mu,
        mu = null,
        e;
    return el & 1 && e.tag !== 0 && mr(),
    i = e.pendingLanes,
    i & 1 ? e === hu ? lo++ : (lo = 0,
    hu = e) : lo = 0,
    kn(),
    null
}
function mr() {
    if (sn !== null) {
        var e = bf(el)
          , t = ot.transition
          , n = Q;
        try {
            if (ot.transition = null,
            Q = 16 > e ? 16 : e,
            sn === null)
                var r = !1;
            else {
                if (e = sn,
                sn = null,
                el = 0,
                G & 6)
                    throw Error(I(331));
                var o = G;
                for (G |= 4,
                O = e.current; O !== null; ) {
                    var i = O
                      , l = i.child;
                    if (O.flags & 16) {
                        var s = i.deletions;
                        if (s !== null) {
                            for (var u = 0; u < s.length; u++) {
                                var a = s[u];
                                for (O = a; O !== null; ) {
                                    var f = O;
                                    switch (f.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        oo(8, f, i)
                                    }
                                    var d = f.child;
                                    if (d !== null)
                                        d.return = f,
                                        O = d;
                                    else
                                        for (; O !== null; ) {
                                            f = O;
                                            var m = f.sibling
                                              , y = f.return;
                                            if (Gp(f),
                                            f === a) {
                                                O = null;
                                                break
                                            }
                                            if (m !== null) {
                                                m.return = y,
                                                O = m;
                                                break
                                            }
                                            O = y
                                        }
                                }
                            }
                            var w = i.alternate;
                            if (w !== null) {
                                var h = w.child;
                                if (h !== null) {
                                    w.child = null;
                                    do {
                                        var E = h.sibling;
                                        h.sibling = null,
                                        h = E
                                    } while (h !== null)
                                }
                            }
                            O = i
                        }
                    }
                    if (i.subtreeFlags & 2064 && l !== null)
                        l.return = i,
                        O = l;
                    else
                        e: for (; O !== null; ) {
                            if (i = O,
                            i.flags & 2048)
                                switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    oo(9, i, i.return)
                                }
                            var c = i.sibling;
                            if (c !== null) {
                                c.return = i.return,
                                O = c;
                                break e
                            }
                            O = i.return
                        }
                }
                var p = e.current;
                for (O = p; O !== null; ) {
                    l = O;
                    var v = l.child;
                    if (l.subtreeFlags & 2064 && v !== null)
                        v.return = l,
                        O = v;
                    else
                        e: for (l = p; O !== null; ) {
                            if (s = O,
                            s.flags & 2048)
                                try {
                                    switch (s.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        yl(9, s)
                                    }
                                } catch (C) {
                                    se(s, s.return, C)
                                }
                            if (s === l) {
                                O = null;
                                break e
                            }
                            var x = s.sibling;
                            if (x !== null) {
                                x.return = s.return,
                                O = x;
                                break e
                            }
                            O = s.return
                        }
                }
                if (G = o,
                kn(),
                Pt && typeof Pt.onPostCommitFiberRoot == "function")
                    try {
                        Pt.onPostCommitFiberRoot(cl, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            Q = n,
            ot.transition = t
        }
    }
    return !1
}
function sd(e, t, n) {
    t = xr(n, t),
    t = bp(e, t, 1),
    e = pn(e, t, 1),
    t = Ie(),
    e !== null && (Oo(e, 1, t),
    Be(e, t))
}
function se(e, t, n) {
    if (e.tag === 3)
        sd(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                sd(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (mn === null || !mn.has(r))) {
                    e = xr(n, e),
                    e = Lp(t, e, 1),
                    t = pn(t, e, 1),
                    e = Ie(),
                    t !== null && (Oo(t, 1, e),
                    Be(t, e));
                    break
                }
            }
            t = t.return
        }
}
function Uy(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
    t = Ie(),
    e.pingedLanes |= e.suspendedLanes & n,
    ge === e && (Ee & n) === n && (me === 4 || me === 3 && (Ee & 130023424) === Ee && 500 > ue() - Sa ? On(e, 0) : Ea |= n),
    Be(e, t)
}
function nm(e, t) {
    t === 0 && (e.mode & 1 ? (t = Yo,
    Yo <<= 1,
    !(Yo & 130023424) && (Yo = 4194304)) : t = 1);
    var n = Ie();
    e = Wt(e, t),
    e !== null && (Oo(e, t, n),
    Be(e, n))
}
function By(e) {
    var t = e.memoizedState
      , n = 0;
    t !== null && (n = t.retryLane),
    nm(e, n)
}
function jy(e, t) {
    var n = 0;
    switch (e.tag) {
    case 13:
        var r = e.stateNode
          , o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default:
        throw Error(I(314))
    }
    r !== null && r.delete(t),
    nm(e, n)
}
var rm;
rm = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ve.current)
            Fe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return Fe = !1,
                Py(e, t, n);
            Fe = !!(e.flags & 131072)
        }
    else
        Fe = !1,
        ne && t.flags & 1048576 && sp(t, Hi, t.index);
    switch (t.lanes = 0,
    t.tag) {
    case 2:
        var r = t.type;
        Ri(e, t),
        e = t.pendingProps;
        var o = yr(t, Re.current);
        pr(t, n),
        o = ma(null, t, r, e, o, n);
        var i = ha();
        return t.flags |= 1,
        typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0 ? (t.tag = 1,
        t.memoizedState = null,
        t.updateQueue = null,
        Ue(r) ? (i = !0,
        $i(t)) : i = !1,
        t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null,
        aa(t),
        o.updater = gl,
        t.stateNode = o,
        o._reactInternals = t,
        ru(t, r, e, n),
        t = lu(null, t, r, !0, i, n)) : (t.tag = 0,
        ne && i && na(t),
        Pe(null, t, o, n),
        t = t.child),
        t;
    case 16:
        r = t.elementType;
        e: {
            switch (Ri(e, t),
            e = t.pendingProps,
            o = r._init,
            r = o(r._payload),
            t.type = r,
            o = t.tag = Wy(r),
            e = ft(r, e),
            o) {
            case 0:
                t = iu(null, t, r, e, n);
                break e;
            case 1:
                t = Zc(null, t, r, e, n);
                break e;
            case 11:
                t = Qc(null, t, r, e, n);
                break e;
            case 14:
                t = Xc(null, t, r, ft(r.type, e), n);
                break e
            }
            throw Error(I(306, r, ""))
        }
        return t;
    case 0:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ft(r, o),
        iu(e, t, r, o, n);
    case 1:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ft(r, o),
        Zc(e, t, r, o, n);
    case 3:
        e: {
            if (Up(t),
            e === null)
                throw Error(I(387));
            r = t.pendingProps,
            i = t.memoizedState,
            o = i.element,
            pp(e, t),
            Yi(t, r, null, n);
            var l = t.memoizedState;
            if (r = l.element,
            i.isDehydrated)
                if (i = {
                    element: r,
                    isDehydrated: !1,
                    cache: l.cache,
                    pendingSuspenseBoundaries: l.pendingSuspenseBoundaries,
                    transitions: l.transitions
                },
                t.updateQueue.baseState = i,
                t.memoizedState = i,
                t.flags & 256) {
                    o = xr(Error(I(423)), t),
                    t = Jc(e, t, r, n, o);
                    break e
                } else if (r !== o) {
                    o = xr(Error(I(424)), t),
                    t = Jc(e, t, r, n, o);
                    break e
                } else
                    for (Ke = fn(t.stateNode.containerInfo.firstChild),
                    Ye = t,
                    ne = !0,
                    ht = null,
                    n = dp(t, null, r, n),
                    t.child = n; n; )
                        n.flags = n.flags & -3 | 4096,
                        n = n.sibling;
            else {
                if (wr(),
                r === o) {
                    t = Ht(e, t, n);
                    break e
                }
                Pe(e, t, r, n)
            }
            t = t.child
        }
        return t;
    case 5:
        return mp(t),
        e === null && eu(t),
        r = t.type,
        o = t.pendingProps,
        i = e !== null ? e.memoizedProps : null,
        l = o.children,
        Qs(r, o) ? l = null : i !== null && Qs(r, i) && (t.flags |= 32),
        Vp(e, t),
        Pe(e, t, l, n),
        t.child;
    case 6:
        return e === null && eu(t),
        null;
    case 13:
        return Bp(e, t, n);
    case 4:
        return ca(t, t.stateNode.containerInfo),
        r = t.pendingProps,
        e === null ? t.child = Er(t, null, r, n) : Pe(e, t, r, n),
        t.child;
    case 11:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ft(r, o),
        Qc(e, t, r, o, n);
    case 7:
        return Pe(e, t, t.pendingProps, n),
        t.child;
    case 8:
        return Pe(e, t, t.pendingProps.children, n),
        t.child;
    case 12:
        return Pe(e, t, t.pendingProps.children, n),
        t.child;
    case 10:
        e: {
            if (r = t.type._context,
            o = t.pendingProps,
            i = t.memoizedProps,
            l = o.value,
            J(Gi, r._currentValue),
            r._currentValue = l,
            i !== null)
                if (yt(i.value, l)) {
                    if (i.children === o.children && !Ve.current) {
                        t = Ht(e, t, n);
                        break e
                    }
                } else
                    for (i = t.child,
                    i !== null && (i.return = t); i !== null; ) {
                        var s = i.dependencies;
                        if (s !== null) {
                            l = i.child;
                            for (var u = s.firstContext; u !== null; ) {
                                if (u.context === r) {
                                    if (i.tag === 1) {
                                        u = Bt(-1, n & -n),
                                        u.tag = 2;
                                        var a = i.updateQueue;
                                        if (a !== null) {
                                            a = a.shared;
                                            var f = a.pending;
                                            f === null ? u.next = u : (u.next = f.next,
                                            f.next = u),
                                            a.pending = u
                                        }
                                    }
                                    i.lanes |= n,
                                    u = i.alternate,
                                    u !== null && (u.lanes |= n),
                                    tu(i.return, n, t),
                                    s.lanes |= n;
                                    break
                                }
                                u = u.next
                            }
                        } else if (i.tag === 10)
                            l = i.type === t.type ? null : i.child;
                        else if (i.tag === 18) {
                            if (l = i.return,
                            l === null)
                                throw Error(I(341));
                            l.lanes |= n,
                            s = l.alternate,
                            s !== null && (s.lanes |= n),
                            tu(l, n, t),
                            l = i.sibling
                        } else
                            l = i.child;
                        if (l !== null)
                            l.return = i;
                        else
                            for (l = i; l !== null; ) {
                                if (l === t) {
                                    l = null;
                                    break
                                }
                                if (i = l.sibling,
                                i !== null) {
                                    i.return = l.return,
                                    l = i;
                                    break
                                }
                                l = l.return
                            }
                        i = l
                    }
            Pe(e, t, o.children, n),
            t = t.child
        }
        return t;
    case 9:
        return o = t.type,
        r = t.pendingProps.children,
        pr(t, n),
        o = lt(o),
        r = r(o),
        t.flags |= 1,
        Pe(e, t, r, n),
        t.child;
    case 14:
        return r = t.type,
        o = ft(r, t.pendingProps),
        o = ft(r.type, o),
        Xc(e, t, r, o, n);
    case 15:
        return zp(e, t, t.type, t.pendingProps, n);
    case 17:
        return r = t.type,
        o = t.pendingProps,
        o = t.elementType === r ? o : ft(r, o),
        Ri(e, t),
        t.tag = 1,
        Ue(r) ? (e = !0,
        $i(t)) : e = !1,
        pr(t, n),
        Dp(t, r, o),
        ru(t, r, o, n),
        lu(null, t, r, !0, e, n);
    case 19:
        return jp(e, t, n);
    case 22:
        return Fp(e, t, n)
    }
    throw Error(I(156, t.tag))
}
;
function om(e, t) {
    return Af(e, t)
}
function $y(e, t, n, r) {
    this.tag = e,
    this.key = n,
    this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null,
    this.index = 0,
    this.ref = null,
    this.pendingProps = t,
    this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null,
    this.mode = r,
    this.subtreeFlags = this.flags = 0,
    this.deletions = null,
    this.childLanes = this.lanes = 0,
    this.alternate = null
}
function rt(e, t, n, r) {
    return new $y(e,t,n,r)
}
function ka(e) {
    return e = e.prototype,
    !(!e || !e.isReactComponent)
}
function Wy(e) {
    if (typeof e == "function")
        return ka(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof,
        e === Wu)
            return 11;
        if (e === Hu)
            return 14
    }
    return 2
}
function vn(e, t) {
    var n = e.alternate;
    return n === null ? (n = rt(e.tag, t, e.key, e.mode),
    n.elementType = e.elementType,
    n.type = e.type,
    n.stateNode = e.stateNode,
    n.alternate = e,
    e.alternate = n) : (n.pendingProps = t,
    n.type = e.type,
    n.flags = 0,
    n.subtreeFlags = 0,
    n.deletions = null),
    n.flags = e.flags & 14680064,
    n.childLanes = e.childLanes,
    n.lanes = e.lanes,
    n.child = e.child,
    n.memoizedProps = e.memoizedProps,
    n.memoizedState = e.memoizedState,
    n.updateQueue = e.updateQueue,
    t = e.dependencies,
    n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    },
    n.sibling = e.sibling,
    n.index = e.index,
    n.ref = e.ref,
    n
}
function Pi(e, t, n, r, o, i) {
    var l = 2;
    if (r = e,
    typeof e == "function")
        ka(e) && (l = 1);
    else if (typeof e == "string")
        l = 5;
    else
        e: switch (e) {
        case Jn:
            return Dn(n.children, o, i, t);
        case $u:
            l = 8,
            o |= 8;
            break;
        case Ns:
            return e = rt(12, n, t, o | 2),
            e.elementType = Ns,
            e.lanes = i,
            e;
        case Ts:
            return e = rt(13, n, t, o),
            e.elementType = Ts,
            e.lanes = i,
            e;
        case Ps:
            return e = rt(19, n, t, o),
            e.elementType = Ps,
            e.lanes = i,
            e;
        case mf:
            return El(n, o, i, t);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                case ff:
                    l = 10;
                    break e;
                case pf:
                    l = 9;
                    break e;
                case Wu:
                    l = 11;
                    break e;
                case Hu:
                    l = 14;
                    break e;
                case tn:
                    l = 16,
                    r = null;
                    break e
                }
            throw Error(I(130, e == null ? e : typeof e, ""))
        }
    return t = rt(l, n, t, o),
    t.elementType = e,
    t.type = r,
    t.lanes = i,
    t
}
function Dn(e, t, n, r) {
    return e = rt(7, e, r, t),
    e.lanes = n,
    e
}
function El(e, t, n, r) {
    return e = rt(22, e, r, t),
    e.elementType = mf,
    e.lanes = n,
    e.stateNode = {
        isHidden: !1
    },
    e
}
function ls(e, t, n) {
    return e = rt(6, e, null, t),
    e.lanes = n,
    e
}
function ss(e, t, n) {
    return t = rt(4, e.children !== null ? e.children : [], e.key, t),
    t.lanes = n,
    t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    },
    t
}
function Hy(e, t, n, r, o) {
    this.tag = t,
    this.containerInfo = e,
    this.finishedWork = this.pingCache = this.current = this.pendingChildren = null,
    this.timeoutHandle = -1,
    this.callbackNode = this.pendingContext = this.context = null,
    this.callbackPriority = 0,
    this.eventTimes = Bl(0),
    this.expirationTimes = Bl(-1),
    this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0,
    this.entanglements = Bl(0),
    this.identifierPrefix = r,
    this.onRecoverableError = o,
    this.mutableSourceEagerHydrationData = null
}
function Ra(e, t, n, r, o, i, l, s, u) {
    return e = new Hy(e,t,n,s,u),
    t === 1 ? (t = 1,
    i === !0 && (t |= 8)) : t = 0,
    i = rt(3, null, null, t),
    e.current = i,
    i.stateNode = e,
    i.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    },
    aa(i),
    e
}
function Gy(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: Zn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}
function im(e) {
    if (!e)
        return yn;
    e = e._reactInternals;
    e: {
        if ($n(e) !== e || e.tag !== 1)
            throw Error(I(170));
        var t = e;
        do {
            switch (t.tag) {
            case 3:
                t = t.stateNode.context;
                break e;
            case 1:
                if (Ue(t.type)) {
                    t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                    break e
                }
            }
            t = t.return
        } while (t !== null);
        throw Error(I(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Ue(n))
            return ip(e, n, t)
    }
    return t
}
function lm(e, t, n, r, o, i, l, s, u) {
    return e = Ra(n, r, !0, e, o, i, l, s, u),
    e.context = im(null),
    n = e.current,
    r = Ie(),
    o = hn(n),
    i = Bt(r, o),
    i.callback = t ?? null,
    pn(n, i, o),
    e.current.lanes = o,
    Oo(e, o, r),
    Be(e, r),
    e
}
function Sl(e, t, n, r) {
    var o = t.current
      , i = Ie()
      , l = hn(o);
    return n = im(n),
    t.context === null ? t.context = n : t.pendingContext = n,
    t = Bt(i, l),
    t.payload = {
        element: e
    },
    r = r === void 0 ? null : r,
    r !== null && (t.callback = r),
    e = pn(o, t, l),
    e !== null && (gt(e, o, l, i),
    Ci(e, o, l)),
    l
}
function nl(e) {
    if (e = e.current,
    !e.child)
        return null;
    switch (e.child.tag) {
    case 5:
        return e.child.stateNode;
    default:
        return e.child.stateNode
    }
}
function ud(e, t) {
    if (e = e.memoizedState,
    e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Na(e, t) {
    ud(e, t),
    (e = e.alternate) && ud(e, t)
}
function Ky() {
    return null
}
var sm = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
}
;
function Ta(e) {
    this._internalRoot = e
}
xl.prototype.render = Ta.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
        throw Error(I(409));
    Sl(e, t, null, null)
}
;
xl.prototype.unmount = Ta.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        Vn(function() {
            Sl(null, e, null, null)
        }),
        t[$t] = null
    }
}
;
function xl(e) {
    this._internalRoot = e
}
xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = Ff();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < rn.length && t !== 0 && t < rn[n].priority; n++)
            ;
        rn.splice(n, 0, e),
        n === 0 && Uf(e)
    }
}
;
function Pa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}
function Cl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}
function ad() {}
function Yy(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var i = r;
            r = function() {
                var a = nl(l);
                i.call(a)
            }
        }
        var l = lm(t, r, e, 0, null, !1, !1, "", ad);
        return e._reactRootContainer = l,
        e[$t] = l.current,
        go(e.nodeType === 8 ? e.parentNode : e),
        Vn(),
        l
    }
    for (; o = e.lastChild; )
        e.removeChild(o);
    if (typeof r == "function") {
        var s = r;
        r = function() {
            var a = nl(u);
            s.call(a)
        }
    }
    var u = Ra(e, 0, !1, null, null, !1, !1, "", ad);
    return e._reactRootContainer = u,
    e[$t] = u.current,
    go(e.nodeType === 8 ? e.parentNode : e),
    Vn(function() {
        Sl(t, u, n, r)
    }),
    u
}
function _l(e, t, n, r, o) {
    var i = n._reactRootContainer;
    if (i) {
        var l = i;
        if (typeof o == "function") {
            var s = o;
            o = function() {
                var u = nl(l);
                s.call(u)
            }
        }
        Sl(t, l, e, o)
    } else
        l = Yy(n, t, e, o, r);
    return nl(l)
}
Lf = function(e) {
    switch (e.tag) {
    case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
            var n = Qr(t.pendingLanes);
            n !== 0 && (Yu(t, n | 1),
            Be(t, ue()),
            !(G & 6) && (Cr = ue() + 500,
            kn()))
        }
        break;
    case 13:
        Vn(function() {
            var r = Wt(e, 1);
            if (r !== null) {
                var o = Ie();
                gt(r, e, 1, o)
            }
        }),
        Na(e, 1)
    }
}
;
Qu = function(e) {
    if (e.tag === 13) {
        var t = Wt(e, 134217728);
        if (t !== null) {
            var n = Ie();
            gt(t, e, 134217728, n)
        }
        Na(e, 134217728)
    }
}
;
zf = function(e) {
    if (e.tag === 13) {
        var t = hn(e)
          , n = Wt(e, t);
        if (n !== null) {
            var r = Ie();
            gt(n, e, t, r)
        }
        Na(e, t)
    }
}
;
Ff = function() {
    return Q
}
;
Vf = function(e, t) {
    var n = Q;
    try {
        return Q = e,
        t()
    } finally {
        Q = n
    }
}
;
Vs = function(e, t, n) {
    switch (t) {
    case "input":
        if (Ms(e, n),
        t = n.name,
        n.type === "radio" && t != null) {
            for (n = e; n.parentNode; )
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'),
            t = 0; t < n.length; t++) {
                var r = n[t];
                if (r !== e && r.form === e.form) {
                    var o = ml(r);
                    if (!o)
                        throw Error(I(90));
                    vf(r),
                    Ms(r, o)
                }
            }
        }
        break;
    case "textarea":
        yf(e, n);
        break;
    case "select":
        t = n.value,
        t != null && ar(e, !!n.multiple, t, !1)
    }
}
;
kf = xa;
Rf = Vn;
var Qy = {
    usingClientEntryPoint: !1,
    Events: [bo, nr, ml, Cf, _f, xa]
}
  , jr = {
    findFiberByHostInstance: Pn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom"
}
  , Xy = {
    bundleType: jr.bundleType,
    version: jr.version,
    rendererPackageName: jr.rendererPackageName,
    rendererConfig: jr.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Yt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function(e) {
        return e = Pf(e),
        e === null ? null : e.stateNode
    },
    findFiberByHostInstance: jr.findFiberByHostInstance || Ky,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426"
};
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ii = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ii.isDisabled && ii.supportsFiber)
        try {
            cl = ii.inject(Xy),
            Pt = ii
        } catch {}
}
Ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Qy;
Ze.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Pa(t))
        throw Error(I(200));
    return Gy(e, t, null, n)
}
;
Ze.createRoot = function(e, t) {
    if (!Pa(e))
        throw Error(I(299));
    var n = !1
      , r = ""
      , o = sm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0),
    t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
    t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
    t = Ra(e, 1, !1, null, null, n, !1, r, o),
    e[$t] = t.current,
    go(e.nodeType === 8 ? e.parentNode : e),
    new Ta(t)
}
;
Ze.findDOMNode = function(e) {
    if (e == null)
        return null;
    if (e.nodeType === 1)
        return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(I(188)) : (e = Object.keys(e).join(","),
        Error(I(268, e)));
    return e = Pf(t),
    e = e === null ? null : e.stateNode,
    e
}
;
Ze.flushSync = function(e) {
    return Vn(e)
}
;
Ze.hydrate = function(e, t, n) {
    if (!Cl(t))
        throw Error(I(200));
    return _l(null, e, t, !0, n)
}
;
Ze.hydrateRoot = function(e, t, n) {
    if (!Pa(e))
        throw Error(I(405));
    var r = n != null && n.hydratedSources || null
      , o = !1
      , i = ""
      , l = sm;
    if (n != null && (n.unstable_strictMode === !0 && (o = !0),
    n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
    n.onRecoverableError !== void 0 && (l = n.onRecoverableError)),
    t = lm(t, null, e, 1, n ?? null, o, !1, i, l),
    e[$t] = t.current,
    go(e),
    r)
        for (e = 0; e < r.length; e++)
            n = r[e],
            o = n._getVersion,
            o = o(n._source),
            t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, o] : t.mutableSourceEagerHydrationData.push(n, o);
    return new xl(t)
}
;
Ze.render = function(e, t, n) {
    if (!Cl(t))
        throw Error(I(200));
    return _l(null, e, t, !1, n)
}
;
Ze.unmountComponentAtNode = function(e) {
    if (!Cl(e))
        throw Error(I(40));
    return e._reactRootContainer ? (Vn(function() {
        _l(null, null, e, !1, function() {
            e._reactRootContainer = null,
            e[$t] = null
        })
    }),
    !0) : !1
}
;
Ze.unstable_batchedUpdates = xa;
Ze.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Cl(n))
        throw Error(I(200));
    if (e == null || e._reactInternals === void 0)
        throw Error(I(38));
    return _l(e, t, n, !1, r)
}
;
Ze.version = "18.3.1-next-f1338f8080-20240426";
function um() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(um)
        } catch (e) {
            console.error(e)
        }
}
um(),
uf.exports = Ze;
var zo = uf.exports;
const Zy = Qd(zo);
var cd = zo;
ks.createRoot = cd.createRoot,
ks.hydrateRoot = cd.hydrateRoot;
function Jy() {
    return new Promise( (e, t) => {
        typeof chrome > "u" ? e({
            authToken: ""
        }) : chrome.runtime.sendMessage({
            action: "getAuthDetails"
        }, n => {
            e(n)
        }
        )
    }
    )
}
function qy() {
    return new Promise( (e, t) => {
        typeof chrome > "u" ? e() : chrome.runtime.sendMessage({
            action: "logoutAuth"
        }, () => {
            e()
        }
        )
    }
    )
}
const am = g.createContext(void 0)
  , Ia = () => {
    const e = g.useContext(am);
    if (e === void 0)
        throw new Error("useAuth must be used within a AuthProvider");
    return e
}
;
function e0({children: e}) {
    const [t,n] = g.useState(null)
      , [r,o] = g.useState(!1)
      , [i,l] = g.useState(!0)
      , [s,u] = g.useState(null);
    g.useEffect( () => {
        Jy().then(async ({authToken: d}) => {
            if (!d) {
                o(!1),
                u(null),
                l(!1);
                return
            }
            n(d);
            const m = await fetch(`${Du}/auth/verify`, {
                headers: {
                    Authorization: `Bearer ${d}`,
                    "Content-Type": "application/json"
                }
            });
            m.ok ? (o(!0),
            l(!1)) : (console.error("Failed to authenticate", m),
            o(!1),
            u(null),
            l(!1))
        }
        )
    }
    , []);
    async function a() {
        return n(null),
        o(!1),
        u(null),
        qy()
    }
    const f = {
        isLoading: i,
        isAuthenticated: r,
        user: s,
        authToken: t,
        doLogout: a
    };
    return S(am.Provider, {
        value: f,
        children: e
    })
}
let t0 = 0;
function At(e, t) {
    const n = `atom${++t0}`
      , r = {
        toString() {
            return n
        }
    };
    return typeof e == "function" ? r.read = e : (r.init = e,
    r.read = n0,
    r.write = r0),
    t && (r.write = t),
    r
}
function n0(e) {
    return e(this)
}
function r0(e, t, n) {
    return t(this, typeof n == "function" ? n(e(this)) : n)
}
const dd = (e, t) => e.unstable_is ? e.unstable_is(t) : t === e
  , fd = e => "init"in e
  , pd = e => !!e.write
  , so = Symbol("")
  , Aa = "pending"
  , o0 = "fulfilled"
  , i0 = "rejected"
  , l0 = e => typeof e == "object" && e !== null && so in e
  , li = new WeakMap
  , s0 = (e, t, n) => {
    if (!li.has(e)) {
        let r;
        const o = new Promise( (i, l) => {
            let s = e;
            const u = f => d => {
                s === f && (o.status = o0,
                o.value = d,
                i(d),
                n())
            }
              , a = f => d => {
                s === f && (o.status = i0,
                o.reason = d,
                l(d),
                n())
            }
            ;
            e.then(u(e), a(e)),
            r = (f, d) => {
                f && (li.set(f, o),
                s = f,
                f.then(u(f), a(f)),
                t(),
                t = d)
            }
        }
        );
        o.status = Aa,
        o[so] = r,
        li.set(e, o)
    }
    return li.get(e)
}
  , u0 = e => typeof (e == null ? void 0 : e.then) == "function"
  , md = e => "v"in e || "e"in e
  , si = e => {
    if ("e"in e)
        throw e.e;
    return e.v
}
  , ui = e => {
    const t = e.v;
    return l0(t) && t.status === Aa ? t : null
}
  , hd = (e, t, n) => {
    n.p.has(e) || (n.p.add(e),
    t.then( () => {
        n.p.delete(e)
    }
    , () => {
        n.p.delete(e)
    }
    ))
}
  , $r = () => [new Map, new Map, new Set]
  , vd = (e, t, n) => {
    e[0].has(t) || e[0].set(t, new Set),
    e[1].set(t, n)
}
  , a0 = (e, t, n) => {
    const r = e[0].get(t);
    r && r.add(n)
}
  , c0 = (e, t) => e[0].get(t)
  , gd = (e, t) => {
    e[2].add(t)
}
  , Kn = e => {
    for (; e[1].size || e[2].size; ) {
        e[0].clear();
        const t = new Set(e[1].values());
        e[1].clear();
        const n = new Set(e[2]);
        e[2].clear(),
        t.forEach(r => {
            var o;
            return (o = r.m) == null ? void 0 : o.l.forEach(i => i())
        }
        ),
        n.forEach(r => r())
    }
}
  , d0 = () => {
    const e = new WeakMap;
    let t;
    const n = h => {
        let E = e.get(h);
        return E || (E = {
            d: new Map,
            p: new Set,
            n: 0
        },
        e.set(h, E)),
        E
    }
      , r = (h, E, c, p= () => {}
    , v= () => {}
    ) => {
        const x = "v"in E
          , C = E.v
          , R = ui(E);
        if (u0(c))
            if (R)
                R !== c && (R[so](c, p),
                ++E.n);
            else {
                const k = s0(c, p, v);
                if (k.status === Aa)
                    for (const _ of E.d.keys()) {
                        const A = n(_);
                        hd(h, k, A)
                    }
                E.v = k,
                delete E.e
            }
        else
            R && R[so](Promise.resolve(c), p),
            E.v = c,
            delete E.e;
        (!x || !Object.is(C, E.v)) && ++E.n
    }
      , o = (h, E, c, p) => {
        var v;
        const x = n(E);
        x.d.set(c, p.n);
        const C = ui(x);
        C && hd(E, C, p),
        (v = p.m) == null || v.t.add(E),
        h && a0(h, c, E)
    }
      , i = (h, E, c) => {
        const p = n(E);
        if (!(c != null && c(E)) && md(p) && (p.m || Array.from(p.d).every( ([_,A]) => i(h, _, c).n === A)))
            return p;
        p.d.clear();
        let v = !0;
        const x = _ => {
            if (dd(E, _)) {
                const T = n(_);
                if (!md(T))
                    if (fd(_))
                        r(_, T, _.init);
                    else
                        throw new Error("no atom init");
                return si(T)
            }
            const A = i(h, _, c);
            if (v)
                o(h, E, _, A);
            else {
                const T = $r();
                o(T, E, _, A),
                f(T, E, p),
                Kn(T)
            }
            return si(A)
        }
        ;
        let C, R;
        const k = {
            get signal() {
                return C || (C = new AbortController),
                C.signal
            },
            get setSelf() {
                return !R && pd(E) && (R = (..._) => {
                    if (!v)
                        return a(E, ..._)
                }
                ),
                R
            }
        };
        try {
            const _ = E.read(x, k);
            return r(E, p, _, () => C == null ? void 0 : C.abort(), () => {
                if (p.m) {
                    const A = $r();
                    f(A, E, p),
                    Kn(A)
                }
            }
            ),
            p
        } catch (_) {
            return delete p.v,
            p.e = _,
            ++p.n,
            p
        } finally {
            v = !1
        }
    }
      , l = h => si(i(void 0, h))
      , s = (h, E) => {
        const c = k => {
            var _, A;
            const T = n(k)
              , b = new Set((_ = T.m) == null ? void 0 : _.t);
            for (const M of T.p)
                b.add(M);
            return (A = c0(h, k)) == null || A.forEach(M => {
                b.add(M)
            }
            ),
            b
        }
          , p = []
          , v = new Set
          , x = k => {
            if (!v.has(k)) {
                v.add(k);
                for (const _ of c(k))
                    k !== _ && x(_);
                p.push(k)
            }
        }
        ;
        x(E);
        const C = new Set([E])
          , R = k => v.has(k);
        for (let k = p.length - 1; k >= 0; --k) {
            const _ = p[k]
              , A = n(_)
              , T = A.n;
            let b = !1;
            for (const M of A.d.keys())
                if (M !== _ && C.has(M)) {
                    b = !0;
                    break
                }
            b && (i(h, _, R),
            f(h, _, A),
            T !== A.n && (vd(h, _, A),
            C.add(_))),
            v.delete(_)
        }
    }
      , u = (h, E, ...c) => {
        const p = C => si(i(h, C))
          , v = (C, ...R) => {
            let k;
            if (dd(E, C)) {
                if (!fd(C))
                    throw new Error("atom not writable");
                const _ = n(C)
                  , A = "v"in _
                  , T = _.v
                  , b = R[0];
                r(C, _, b),
                f(h, C, _),
                (!A || !Object.is(T, _.v)) && (vd(h, C, _),
                s(h, C))
            } else
                k = u(h, C, ...R);
            return Kn(h),
            k
        }
        ;
        return E.write(p, v, ...c)
    }
      , a = (h, ...E) => {
        const c = $r()
          , p = u(c, h, ...E);
        return Kn(c),
        p
    }
      , f = (h, E, c) => {
        if (c.m && !ui(c)) {
            for (const p of c.d.keys())
                c.m.d.has(p) || (d(h, p).t.add(E),
                c.m.d.add(p));
            for (const p of c.m.d || [])
                if (!c.d.has(p)) {
                    c.m.d.delete(p);
                    const v = m(h, p);
                    v == null || v.t.delete(E)
                }
        }
    }
      , d = (h, E) => {
        const c = n(E);
        if (!c.m) {
            i(h, E);
            for (const p of c.d.keys())
                d(h, p).t.add(E);
            if (c.m = {
                l: new Set,
                d: new Set(c.d.keys()),
                t: new Set
            },
            pd(E) && E.onMount) {
                const p = c.m
                  , {onMount: v} = E;
                gd(h, () => {
                    const x = v( (...C) => u(h, E, ...C));
                    x && (p.u = x)
                }
                )
            }
        }
        return c.m
    }
      , m = (h, E) => {
        const c = n(E);
        if (c.m && !c.m.l.size && !Array.from(c.m.t).some(p => {
            var v;
            return (v = n(p).m) == null ? void 0 : v.d.has(E)
        }
        )) {
            const p = c.m.u;
            p && gd(h, p),
            delete c.m;
            for (const x of c.d.keys()) {
                const C = m(h, x);
                C == null || C.t.delete(E)
            }
            const v = ui(c);
            v && v[so](void 0, () => {}
            );
            return
        }
        return c.m
    }
    ;
    return {
        get: l,
        set: a,
        sub: (h, E) => {
            const c = $r()
              , p = d(c, h);
            Kn(c);
            const v = p.l;
            return v.add(E),
            () => {
                v.delete(E);
                const x = $r();
                m(x, h),
                Kn(x)
            }
        }
    }
}
;
let us;
const f0 = () => (us || (us = d0()),
us)
  , p0 = g.createContext(void 0)
  , cm = e => {
    const t = g.useContext(p0);
    return (e == null ? void 0 : e.store) || t || f0()
}
  , m0 = e => typeof (e == null ? void 0 : e.then) == "function"
  , h0 = He.use || (e => {
    if (e.status === "pending")
        throw e;
    if (e.status === "fulfilled")
        return e.value;
    throw e.status === "rejected" ? e.reason : (e.status = "pending",
    e.then(t => {
        e.status = "fulfilled",
        e.value = t
    }
    , t => {
        e.status = "rejected",
        e.reason = t
    }
    ),
    e)
}
);
function v0(e, t) {
    const n = cm(t)
      , [[r,o,i],l] = g.useReducer(a => {
        const f = n.get(e);
        return Object.is(a[0], f) && a[1] === n && a[2] === e ? a : [f, n, e]
    }
    , void 0, () => [n.get(e), n, e]);
    let s = r;
    (o !== n || i !== e) && (l(),
    s = n.get(e));
    const u = t == null ? void 0 : t.delay;
    return g.useEffect( () => {
        const a = n.sub(e, () => {
            if (typeof u == "number") {
                setTimeout(l, u);
                return
            }
            l()
        }
        );
        return l(),
        a
    }
    , [n, e, u]),
    g.useDebugValue(s),
    m0(s) ? h0(s) : s
}
function g0(e, t) {
    const n = cm(t);
    return g.useCallback( (...o) => n.set(e, ...o), [n, e])
}
function ct(e, t) {
    return [v0(e, t), g0(e, t)]
}
const y0 = Symbol("")
  , w0 = e => typeof (e == null ? void 0 : e.then) == "function";
function dm(e= () => {
    try {
        return window.localStorage
    } catch {
        return
    }
}
, t) {
    var n;
    let r, o;
    const i = {
        getItem: (u, a) => {
            var f, d;
            const m = w => {
                if (w = w || "",
                r !== w) {
                    try {
                        o = JSON.parse(w, t == null ? void 0 : t.reviver)
                    } catch {
                        return a
                    }
                    r = w
                }
                return o
            }
              , y = (d = (f = e()) == null ? void 0 : f.getItem(u)) != null ? d : null;
            return w0(y) ? y.then(m) : m(y)
        }
        ,
        setItem: (u, a) => {
            var f;
            return (f = e()) == null ? void 0 : f.setItem(u, JSON.stringify(a, t == null ? void 0 : t.replacer))
        }
        ,
        removeItem: u => {
            var a;
            return (a = e()) == null ? void 0 : a.removeItem(u)
        }
    }
      , l = u => (a, f, d) => u(a, m => {
        let y;
        try {
            y = JSON.parse(m || "")
        } catch {
            y = d
        }
        f(y)
    }
    );
    let s;
    try {
        s = (n = e()) == null ? void 0 : n.subscribe
    } catch {}
    return !s && typeof window < "u" && typeof window.addEventListener == "function" && window.Storage && (s = (u, a) => {
        if (!(e()instanceof window.Storage))
            return () => {}
            ;
        const f = d => {
            d.storageArea === e() && d.key === u && a(d.newValue)
        }
        ;
        return window.addEventListener("storage", f),
        () => {
            window.removeEventListener("storage", f)
        }
    }
    ),
    s && (i.subscribe = l(s)),
    i
}
const E0 = dm();
function S0(e, t, n=E0, r) {
    const o = r == null ? void 0 : r.getOnInit
      , i = At(o ? n.getItem(e, t) : t);
    return i.onMount = s => {
        s(n.getItem(e, t));
        let u;
        return n.subscribe && (u = n.subscribe(e, s, t)),
        u
    }
    ,
    At(s => s(i), (s, u, a) => {
        const f = typeof a == "function" ? a(s(i)) : a;
        return f === y0 ? (u(i, t),
        n.removeItem(e)) : f instanceof Promise ? f.then(d => (u(i, d),
        n.setItem(e, d))) : (u(i, f),
        n.setItem(e, f))
    }
    )
}
const x0 = ( () => typeof chrome > "u" ? {
    getItem: e => Promise.resolve(localStorage.getItem(e)),
    setItem: (e, t) => (localStorage.setItem(e, t),
    Promise.resolve()),
    removeItem: e => (localStorage.removeItem(e),
    Promise.resolve())
} : {
    getItem: e => new Promise(t => {
        chrome.storage.session.get(e, n => {
            t(n[e] || null)
        }
        )
    }
    ),
    setItem: (e, t) => new Promise(n => {
        chrome.storage.session.set({
            [e]: t
        }, n)
    }
    ),
    removeItem: e => new Promise(t => {
        chrome.storage.session.remove(e, t)
    }
    )
})()
  , C0 = dm( () => x0);
function kl(e, t) {
    return S0(e, t, C0)
}
const _0 = kl("B7S_NODE_PEER_ID", null)
  , k0 = kl("B7S_NODE_LAST_CONNECTED_TS", null)
  , R0 = kl("B7S_GATEWAY_ACCESS_TOKEN", null)
  , N0 = kl("B7S_NODE_DATA", null)
  , T0 = At(!1)
  , P0 = At(!1)
  , I0 = At(!1)
  , A0 = At(!1)
  , M0 = At(!0)
  , O0 = At(null)
  , D0 = At(!1)
  , b0 = At(null)
  , dt = {
    peerId: _0,
    lastConnectedTs: k0,
    stats: O0,
    isOnline: M0,
    isSetup: T0,
    isNodeConnecting: P0,
    isNodeConnected: I0,
    isB7SConnected: A0,
    accessToken: R0,
    nodeData: N0,
    isError: D0,
    error: b0
};
function L0() {
    return new Promise( (e, t) => {
        typeof chrome > "u" && e({
            isConnected: !0,
            isB7SConnected: !0,
            isOnline: !0,
            peerId: "test",
            lastConnectedTs: Date.now(),
            stats: null,
            isError: !1,
            error: null
        }),
        chrome.runtime.sendMessage({
            action: "getStatus"
        }, n => {
            e(n)
        }
        )
    }
    )
}
function z0() {
    return new Promise( (e, t) => {
        typeof chrome > "u" ? e({
            isConnected: !0,
            peerId: "test",
            lastConnectedTs: Date.now() - 1e3 * 60 * 30
        }) : chrome.runtime.sendMessage({
            action: "connectNode"
        }, n => {
            e(n)
        }
        )
    }
    )
}
function F0() {
    return new Promise( (e, t) => {
        typeof chrome > "u" ? e({
            isConnected: !1,
            peerId: "test",
            lastConnectedTs: 0
        }) : chrome.runtime.sendMessage({
            action: "disconnectNode"
        }, n => {
            e(n)
        }
        )
    }
    )
}
function V0() {
    return new Promise( (e, t) => {
        typeof chrome > "u" ? e({
            logs: [{
                ts: Date.now() - 1e3 * 60 * 30,
                type: "connect",
                message: "Connection to node established"
            }]
        }) : chrome.runtime.sendMessage({
            action: "getLogs"
        }, n => {
            e(n)
        }
        )
    }
    )
}
const fm = g.createContext(void 0)
  , pm = () => {
    const e = g.useContext(fm);
    if (e === void 0)
        throw new Error("useNode must be used within a NodeProvider");
    return e
}
;
function U0({children: e}) {
    const [t,n] = ct(dt.peerId)
      , [r,o] = ct(dt.lastConnectedTs)
      , [i,l] = ct(dt.stats)
      , [s,u] = ct(dt.isSetup)
      , [a,f] = ct(dt.isNodeConnecting)
      , [d,m] = ct(dt.isNodeConnected)
      , [y,w] = ct(dt.isB7SConnected)
      , [h,E] = ct(dt.isOnline)
      , [c,p] = ct(dt.isError)
      , [v,x] = ct(dt.error);
    g.useEffect( () => {
        const _ = () => {
            L0().then(T => {
                m(T.isConnected),
                u(!!T.peerId),
                n(T.peerId),
                o(T.lastConnectedTs),
                l(T.stats),
                w(T.isB7SConnected),
                E(T.isOnline),
                p(T.isError),
                x(T.error)
            }
            )
        }
        ;
        _();
        const A = setInterval(_, 2500);
        return () => clearInterval(A)
    }
    , []);
    async function C() {
        if (!s)
            return;
        f(!0);
        const _ = await z0();
        m(_.isConnected),
        n(_.peerId),
        o(_.lastConnectedTs),
        f(!1)
    }
    async function R() {
        f(!0);
        const _ = await F0();
        m(_.isConnected),
        f(!1),
        o(_.lastConnectedTs)
    }
    const k = {
        peerId: t,
        lastConnectedTs: r,
        stats: i,
        isOnline: h,
        isConnecting: a,
        isConnected: d,
        isB7SConnected: y,
        isSetup: s,
        isError: c,
        error: v,
        connectNode: C,
        disconnectNode: R
    };
    return S(fm.Provider, {
        value: k,
        children: e
    })
}
var mm = {
    exports: {}
}
  , hm = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _r = g;
function B0(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var j0 = typeof Object.is == "function" ? Object.is : B0
  , $0 = _r.useState
  , W0 = _r.useEffect
  , H0 = _r.useLayoutEffect
  , G0 = _r.useDebugValue;
function K0(e, t) {
    var n = t()
      , r = $0({
        inst: {
            value: n,
            getSnapshot: t
        }
    })
      , o = r[0].inst
      , i = r[1];
    return H0(function() {
        o.value = n,
        o.getSnapshot = t,
        as(o) && i({
            inst: o
        })
    }, [e, n, t]),
    W0(function() {
        return as(o) && i({
            inst: o
        }),
        e(function() {
            as(o) && i({
                inst: o
            })
        })
    }, [e]),
    G0(n),
    n
}
function as(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !j0(e, n)
    } catch {
        return !0
    }
}
function Y0(e, t) {
    return t()
}
var Q0 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? Y0 : K0;
hm.useSyncExternalStore = _r.useSyncExternalStore !== void 0 ? _r.useSyncExternalStore : Q0;
mm.exports = hm;
var X0 = mm.exports;
const un = () => {}
  , ze = un()
  , cs = Object
  , K = e => e === ze
  , Rt = e => typeof e == "function"
  , wn = (e, t) => ({
    ...e,
    ...t
})
  , Z0 = e => Rt(e.then)
  , ai = new WeakMap;
let J0 = 0;
const Ro = e => {
    const t = typeof e
      , n = e && e.constructor
      , r = n == Date;
    let o, i;
    if (cs(e) === e && !r && n != RegExp) {
        if (o = ai.get(e),
        o)
            return o;
        if (o = ++J0 + "~",
        ai.set(e, o),
        n == Array) {
            for (o = "@",
            i = 0; i < e.length; i++)
                o += Ro(e[i]) + ",";
            ai.set(e, o)
        }
        if (n == cs) {
            o = "#";
            const l = cs.keys(e).sort();
            for (; !K(i = l.pop()); )
                K(e[i]) || (o += i + ":" + Ro(e[i]) + ",");
            ai.set(e, o)
        }
    } else
        o = r ? e.toJSON() : t == "symbol" ? e.toString() : t == "string" ? JSON.stringify(e) : "" + e;
    return o
}
  , Ft = new WeakMap
  , ds = {}
  , ci = {}
  , Ma = "undefined"
  , Rl = typeof window != Ma
  , yu = typeof document != Ma
  , q0 = () => Rl && typeof window.requestAnimationFrame != Ma
  , vm = (e, t) => {
    const n = Ft.get(e);
    return [ () => !K(t) && e.get(t) || ds, r => {
        if (!K(t)) {
            const o = e.get(t);
            t in ci || (ci[t] = o),
            n[5](t, wn(o, r), o || ds)
        }
    }
    , n[6], () => !K(t) && t in ci ? ci[t] : !K(t) && e.get(t) || ds]
}
;
let wu = !0;
const ew = () => wu
  , [Eu,Su] = Rl && window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [un, un]
  , tw = () => {
    const e = yu && document.visibilityState;
    return K(e) || e !== "hidden"
}
  , nw = e => (yu && document.addEventListener("visibilitychange", e),
Eu("focus", e),
() => {
    yu && document.removeEventListener("visibilitychange", e),
    Su("focus", e)
}
)
  , rw = e => {
    const t = () => {
        wu = !0,
        e()
    }
      , n = () => {
        wu = !1
    }
    ;
    return Eu("online", t),
    Eu("offline", n),
    () => {
        Su("online", t),
        Su("offline", n)
    }
}
  , ow = {
    isOnline: ew,
    isVisible: tw
}
  , iw = {
    initFocus: nw,
    initReconnect: rw
}
  , yd = !He.useId
  , No = !Rl || "Deno"in window
  , lw = e => q0() ? window.requestAnimationFrame(e) : setTimeout(e, 1)
  , fs = No ? g.useEffect : g.useLayoutEffect
  , ps = typeof navigator < "u" && navigator.connection
  , wd = !No && ps && (["slow-2g", "2g"].includes(ps.effectiveType) || ps.saveData)
  , Oa = e => {
    if (Rt(e))
        try {
            e = e()
        } catch {
            e = ""
        }
    const t = e;
    return e = typeof e == "string" ? e : (Array.isArray(e) ? e.length : e) ? Ro(e) : "",
    [e, t]
}
;
let sw = 0;
const xu = () => ++sw
  , gm = 0
  , ym = 1
  , wm = 2
  , uw = 3;
var Wr = {
    __proto__: null,
    ERROR_REVALIDATE_EVENT: uw,
    FOCUS_EVENT: gm,
    MUTATE_EVENT: wm,
    RECONNECT_EVENT: ym
};
async function Em(...e) {
    const [t,n,r,o] = e
      , i = wn({
        populateCache: !0,
        throwOnError: !0
    }, typeof o == "boolean" ? {
        revalidate: o
    } : o || {});
    let l = i.populateCache;
    const s = i.rollbackOnError;
    let u = i.optimisticData;
    const a = m => typeof s == "function" ? s(m) : s !== !1
      , f = i.throwOnError;
    if (Rt(n)) {
        const m = n
          , y = []
          , w = t.keys();
        for (const h of w)
            !/^\$(inf|sub)\$/.test(h) && m(t.get(h)._k) && y.push(h);
        return Promise.all(y.map(d))
    }
    return d(n);
    async function d(m) {
        const [y] = Oa(m);
        if (!y)
            return;
        const [w,h] = vm(t, y)
          , [E,c,p,v] = Ft.get(t)
          , x = () => {
            const B = E[y];
            return (Rt(i.revalidate) ? i.revalidate(w().data, m) : i.revalidate !== !1) && (delete p[y],
            delete v[y],
            B && B[0]) ? B[0](wm).then( () => w().data) : w().data
        }
        ;
        if (e.length < 3)
            return x();
        let C = r, R;
        const k = xu();
        c[y] = [k, 0];
        const _ = !K(u)
          , A = w()
          , T = A.data
          , b = A._c
          , M = K(b) ? T : b;
        if (_ && (u = Rt(u) ? u(M, T) : u,
        h({
            data: u,
            _c: M
        })),
        Rt(C))
            try {
                C = C(M)
            } catch (B) {
                R = B
            }
        if (C && Z0(C))
            if (C = await C.catch(B => {
                R = B
            }
            ),
            k !== c[y][0]) {
                if (R)
                    throw R;
                return C
            } else
                R && _ && a(R) && (l = !0,
                h({
                    data: M,
                    _c: ze
                }));
        if (l && !R)
            if (Rt(l)) {
                const B = l(C, M);
                h({
                    data: B,
                    error: ze,
                    _c: ze
                })
            } else
                h({
                    data: C,
                    error: ze,
                    _c: ze
                });
        if (c[y][1] = xu(),
        Promise.resolve(x()).then( () => {
            h({
                _c: ze
            })
        }
        ),
        R) {
            if (f)
                throw R;
            return
        }
        return C
    }
}
const Ed = (e, t) => {
    for (const n in e)
        e[n][0] && e[n][0](t)
}
  , aw = (e, t) => {
    if (!Ft.has(e)) {
        const n = wn(iw, t)
          , r = {}
          , o = Em.bind(ze, e);
        let i = un;
        const l = {}
          , s = (f, d) => {
            const m = l[f] || [];
            return l[f] = m,
            m.push(d),
            () => m.splice(m.indexOf(d), 1)
        }
          , u = (f, d, m) => {
            e.set(f, d);
            const y = l[f];
            if (y)
                for (const w of y)
                    w(d, m)
        }
          , a = () => {
            if (!Ft.has(e) && (Ft.set(e, [r, {}, {}, {}, o, u, s]),
            !No)) {
                const f = n.initFocus(setTimeout.bind(ze, Ed.bind(ze, r, gm)))
                  , d = n.initReconnect(setTimeout.bind(ze, Ed.bind(ze, r, ym)));
                i = () => {
                    f && f(),
                    d && d(),
                    Ft.delete(e)
                }
            }
        }
        ;
        return a(),
        [e, o, a, i]
    }
    return [e, Ft.get(e)[4]]
}
  , cw = (e, t, n, r, o) => {
    const i = n.errorRetryCount
      , l = o.retryCount
      , s = ~~((Math.random() + .5) * (1 << (l < 8 ? l : 8))) * n.errorRetryInterval;
    !K(i) && l > i || setTimeout(r, s, o)
}
  , dw = (e, t) => Ro(e) == Ro(t)
  , [Sm,fw] = aw(new Map)
  , pw = wn({
    onLoadingSlow: un,
    onSuccess: un,
    onError: un,
    onErrorRetry: cw,
    onDiscarded: un,
    revalidateOnFocus: !0,
    revalidateOnReconnect: !0,
    revalidateIfStale: !0,
    shouldRetryOnError: !0,
    errorRetryInterval: wd ? 1e4 : 5e3,
    focusThrottleInterval: 5 * 1e3,
    dedupingInterval: 2 * 1e3,
    loadingTimeout: wd ? 5e3 : 3e3,
    compare: dw,
    isPaused: () => !1,
    cache: Sm,
    mutate: fw,
    fallback: {}
}, ow)
  , mw = (e, t) => {
    const n = wn(e, t);
    if (t) {
        const {use: r, fallback: o} = e
          , {use: i, fallback: l} = t;
        r && i && (n.use = r.concat(i)),
        o && l && (n.fallback = wn(o, l))
    }
    return n
}
  , hw = g.createContext({})
  , vw = "$inf$"
  , xm = Rl && window.__SWR_DEVTOOLS_USE__
  , gw = xm ? window.__SWR_DEVTOOLS_USE__ : []
  , yw = () => {
    xm && (window.__SWR_DEVTOOLS_REACT__ = He)
}
  , ww = e => Rt(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (e[1] === null ? e[2] : e[1]) || {}]
  , Ew = () => wn(pw, g.useContext(hw))
  , Sw = e => (t, n, r) => e(t, n && ( (...i) => {
    const [l] = Oa(t)
      , [,,,s] = Ft.get(Sm);
    if (l.startsWith(vw))
        return n(...i);
    const u = s[l];
    return K(u) ? n(...i) : (delete s[l],
    u)
}
), r)
  , xw = gw.concat(Sw)
  , Cw = e => function(...n) {
    const r = Ew()
      , [o,i,l] = ww(n)
      , s = mw(r, l);
    let u = e;
    const {use: a} = s
      , f = (a || []).concat(xw);
    for (let d = f.length; d--; )
        u = f[d](u);
    return u(o, i || s.fetcher || null, s)
}
  , _w = (e, t, n) => {
    const r = t[e] || (t[e] = []);
    return r.push(n),
    () => {
        const o = r.indexOf(n);
        o >= 0 && (r[o] = r[r.length - 1],
        r.pop())
    }
}
;
yw();
const Sd = He.use || (e => {
    if (e.status === "pending")
        throw e;
    if (e.status === "fulfilled")
        return e.value;
    throw e.status === "rejected" ? e.reason : (e.status = "pending",
    e.then(t => {
        e.status = "fulfilled",
        e.value = t
    }
    , t => {
        e.status = "rejected",
        e.reason = t
    }
    ),
    e)
}
)
  , ms = {
    dedupe: !0
}
  , kw = (e, t, n) => {
    const {cache: r, compare: o, suspense: i, fallbackData: l, revalidateOnMount: s, revalidateIfStale: u, refreshInterval: a, refreshWhenHidden: f, refreshWhenOffline: d, keepPreviousData: m} = n
      , [y,w,h,E] = Ft.get(r)
      , [c,p] = Oa(e)
      , v = g.useRef(!1)
      , x = g.useRef(!1)
      , C = g.useRef(c)
      , R = g.useRef(t)
      , k = g.useRef(n)
      , _ = () => k.current
      , A = () => _().isVisible() && _().isOnline()
      , [T,b,M,B] = vm(r, c)
      , j = g.useRef({}).current
      , X = K(l) ? n.fallback[c] : l
      , W = (Z, Y) => {
        for (const de in j) {
            const re = de;
            if (re === "data") {
                if (!o(Z[re], Y[re]) && (!K(Z[re]) || !o($e, Y[re])))
                    return !1
            } else if (Y[re] !== Z[re])
                return !1
        }
        return !0
    }
      , F = g.useMemo( () => {
        const Z = ( () => !c || !t ? !1 : K(s) ? _().isPaused() || i ? !1 : K(u) ? !0 : u : s)()
          , Y = ae => {
            const Ot = wn(ae);
            return delete Ot._k,
            Z ? {
                isValidating: !0,
                isLoading: !0,
                ...Ot
            } : Ot
        }
          , de = T()
          , re = B()
          , qe = Y(de)
          , Xt = de === re ? qe : Y(re);
        let fe = qe;
        return [ () => {
            const ae = Y(T());
            return W(ae, fe) ? (fe.data = ae.data,
            fe.isLoading = ae.isLoading,
            fe.isValidating = ae.isValidating,
            fe.error = ae.error,
            fe) : (fe = ae,
            ae)
        }
        , () => Xt]
    }
    , [r, c])
      , P = X0.useSyncExternalStore(g.useCallback(Z => M(c, (Y, de) => {
        W(de, Y) || Z()
    }
    ), [r, c]), F[0], F[1])
      , N = !v.current
      , D = y[c] && y[c].length > 0
      , L = P.data
      , V = K(L) ? X : L
      , Te = P.error
      , xe = g.useRef(V)
      , $e = m ? K(L) ? xe.current : L : V
      , he = ( () => D && !K(Te) ? !1 : N && !K(s) ? s : _().isPaused() ? !1 : i ? K(V) ? !1 : u : K(V) || u)()
      , ye = !!(c && t && N && he)
      , Rn = K(P.isValidating) ? ye : P.isValidating
      , be = K(P.isLoading) ? ye : P.isLoading
      , ut = g.useCallback(async Z => {
        const Y = R.current;
        if (!c || !Y || x.current || _().isPaused())
            return !1;
        let de, re, qe = !0;
        const Xt = Z || {}
          , fe = !h[c] || !Xt.dedupe
          , ae = () => yd ? !x.current && c === C.current && v.current : c === C.current
          , Ot = {
            isValidating: !1,
            isLoading: !1
        }
          , Ja = () => {
            b(Ot)
        }
          , qa = () => {
            const et = h[c];
            et && et[1] === re && delete h[c]
        }
          , ec = {
            isValidating: !0
        };
        K(T().data) && (ec.isLoading = !0);
        try {
            if (fe && (b(ec),
            n.loadingTimeout && K(T().data) && setTimeout( () => {
                qe && ae() && _().onLoadingSlow(c, n)
            }
            , n.loadingTimeout),
            h[c] = [Y(p), xu()]),
            [de,re] = h[c],
            de = await de,
            fe && setTimeout(qa, n.dedupingInterval),
            !h[c] || h[c][1] !== re)
                return fe && ae() && _().onDiscarded(c),
                !1;
            Ot.error = ze;
            const et = w[c];
            if (!K(et) && (re <= et[0] || re <= et[1] || et[1] === 0))
                return Ja(),
                fe && ae() && _().onDiscarded(c),
                !1;
            const Dt = T().data;
            Ot.data = o(Dt, de) ? Dt : de,
            fe && ae() && _().onSuccess(de, c, n)
        } catch (et) {
            qa();
            const Dt = _()
              , {shouldRetryOnError: Dl} = Dt;
            Dt.isPaused() || (Ot.error = et,
            fe && ae() && (Dt.onError(et, c, Dt),
            (Dl === !0 || Rt(Dl) && Dl(et)) && (!_().revalidateOnFocus || !_().revalidateOnReconnect || A()) && Dt.onErrorRetry(et, c, Dt, Sv => {
                const bl = y[c];
                bl && bl[0] && bl[0](Wr.ERROR_REVALIDATE_EVENT, Sv)
            }
            , {
                retryCount: (Xt.retryCount || 0) + 1,
                dedupe: !0
            })))
        }
        return qe = !1,
        Ja(),
        !0
    }
    , [c, r])
      , Dr = g.useCallback( (...Z) => Em(r, C.current, ...Z), []);
    if (fs( () => {
        R.current = t,
        k.current = n,
        K(L) || (xe.current = L)
    }
    ),
    fs( () => {
        if (!c)
            return;
        const Z = ut.bind(ze, ms);
        let Y = 0;
        const re = _w(c, y, (qe, Xt={}) => {
            if (qe == Wr.FOCUS_EVENT) {
                const fe = Date.now();
                _().revalidateOnFocus && fe > Y && A() && (Y = fe + _().focusThrottleInterval,
                Z())
            } else if (qe == Wr.RECONNECT_EVENT)
                _().revalidateOnReconnect && A() && Z();
            else {
                if (qe == Wr.MUTATE_EVENT)
                    return ut();
                if (qe == Wr.ERROR_REVALIDATE_EVENT)
                    return ut(Xt)
            }
        }
        );
        return x.current = !1,
        C.current = c,
        v.current = !0,
        b({
            _k: p
        }),
        he && (K(V) || No ? Z() : lw(Z)),
        () => {
            x.current = !0,
            re()
        }
    }
    , [c]),
    fs( () => {
        let Z;
        function Y() {
            const re = Rt(a) ? a(T().data) : a;
            re && Z !== -1 && (Z = setTimeout(de, re))
        }
        function de() {
            !T().error && (f || _().isVisible()) && (d || _().isOnline()) ? ut(ms).then(Y) : Y()
        }
        return Y(),
        () => {
            Z && (clearTimeout(Z),
            Z = -1)
        }
    }
    , [a, f, d, c]),
    g.useDebugValue($e),
    i && K(V) && c) {
        if (!yd && No)
            throw new Error("Fallback data is required when using suspense in SSR.");
        R.current = t,
        k.current = n,
        x.current = !1;
        const Z = E[c];
        if (!K(Z)) {
            const Y = Dr(Z);
            Sd(Y)
        }
        if (K(Te)) {
            const Y = ut(ms);
            K($e) || (Y.status = "fulfilled",
            Y.value = !0),
            Sd(Y)
        } else
            throw Te
    }
    return {
        mutate: Dr,
        get data() {
            return j.data = !0,
            $e
        },
        get error() {
            return j.error = !0,
            Te
        },
        get isValidating() {
            return j.isValidating = !0,
            Rn
        },
        get isLoading() {
            return j.isLoading = !0,
            be
        }
    }
}
  , Cm = Cw(kw)
  , Rw = e => {
    const {authToken: t} = Ia()
      , [n,r] = ct(dt.nodeData)
      , o = async a => {
        const f = await fetch(a, {
            headers: {
                Authorization: `Bearer ${t}`
            }
        });
        if (!f.ok)
            throw new Error("Failed to fetch node data");
        const d = await f.json();
        return r(d),
        d
    }
      , {error: i, isLoading: l, mutate: s} = Cm(e ? `${Du}/nodes/${e}` : null, o, {
        refreshInterval: 1e3 * 60,
        onSuccess: a => {
            r(a)
        }
    });
    return {
        nodeData: n,
        error: i,
        isLoading: l,
        isError: i,
        refreshNodeData: () => {
            s()
        }
    }
}
;
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Nw = e => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()
  , _m = (...e) => e.filter( (t, n, r) => !!t && r.indexOf(t) === n).join(" ");
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var Tw = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Pw = g.forwardRef( ({color: e="currentColor", size: t=24, strokeWidth: n=2, absoluteStrokeWidth: r, className: o="", children: i, iconNode: l, ...s}, u) => g.createElement("svg", {
    ref: u,
    ...Tw,
    width: t,
    height: t,
    stroke: e,
    strokeWidth: r ? Number(n) * 24 / Number(t) : n,
    className: _m("lucide", o),
    ...s
}, [...l.map( ([a,f]) => g.createElement(a, f)), ...Array.isArray(i) ? i : [i]]));
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ne = (e, t) => {
    const n = g.forwardRef( ({className: r, ...o}, i) => g.createElement(Pw, {
        ref: i,
        iconNode: t,
        className: _m(`lucide-${Nw(e)}`, r),
        ...o
    }));
    return n.displayName = `${e}`,
    n
}
;
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const km = Ne("Check", [["path", {
    d: "M20 6 9 17l-5-5",
    key: "1gmf2c"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Iw = Ne("ChevronRight", [["path", {
    d: "m9 18 6-6-6-6",
    key: "mthhwq"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Aw = Ne("Circle", [["circle", {
    cx: "12",
    cy: "12",
    r: "10",
    key: "1mglay"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Mw = Ne("CloudOff", [["path", {
    d: "m2 2 20 20",
    key: "1ooewy"
}], ["path", {
    d: "M5.782 5.782A7 7 0 0 0 9 19h8.5a4.5 4.5 0 0 0 1.307-.193",
    key: "yfwify"
}], ["path", {
    d: "M21.532 16.5A4.5 4.5 0 0 0 17.5 10h-1.79A7.008 7.008 0 0 0 10 5.07",
    key: "jlfiyv"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ow = Ne("Copy", [["rect", {
    width: "14",
    height: "14",
    x: "8",
    y: "8",
    rx: "2",
    ry: "2",
    key: "17jyea"
}], ["path", {
    d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
    key: "zix9uf"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Dw = Ne("Cpu", [["rect", {
    width: "16",
    height: "16",
    x: "4",
    y: "4",
    rx: "2",
    key: "14l7u7"
}], ["rect", {
    width: "6",
    height: "6",
    x: "9",
    y: "9",
    rx: "1",
    key: "5aljv4"
}], ["path", {
    d: "M15 2v2",
    key: "13l42r"
}], ["path", {
    d: "M15 20v2",
    key: "15mkzm"
}], ["path", {
    d: "M2 15h2",
    key: "1gxd5l"
}], ["path", {
    d: "M2 9h2",
    key: "1bbxkp"
}], ["path", {
    d: "M20 15h2",
    key: "19e6y8"
}], ["path", {
    d: "M20 9h2",
    key: "19tzq7"
}], ["path", {
    d: "M9 2v2",
    key: "165o2o"
}], ["path", {
    d: "M9 20v2",
    key: "i2bqo8"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const bw = Ne("EllipsisVertical", [["circle", {
    cx: "12",
    cy: "12",
    r: "1",
    key: "41hilf"
}], ["circle", {
    cx: "12",
    cy: "5",
    r: "1",
    key: "gxeob9"
}], ["circle", {
    cx: "12",
    cy: "19",
    r: "1",
    key: "lyex9k"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Lw = Ne("ExternalLink", [["path", {
    d: "M15 3h6v6",
    key: "1q9fwt"
}], ["path", {
    d: "M10 14 21 3",
    key: "gplh6r"
}], ["path", {
    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
    key: "a6xqqp"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const zw = Ne("Hammer", [["path", {
    d: "m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",
    key: "eefl8a"
}], ["path", {
    d: "m18 15 4-4",
    key: "16gjal"
}], ["path", {
    d: "m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",
    key: "b7pghm"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Fw = Ne("LayoutDashboard", [["rect", {
    width: "7",
    height: "9",
    x: "3",
    y: "3",
    rx: "1",
    key: "10lvy0"
}], ["rect", {
    width: "7",
    height: "5",
    x: "14",
    y: "3",
    rx: "1",
    key: "16une8"
}], ["rect", {
    width: "7",
    height: "9",
    x: "14",
    y: "12",
    rx: "1",
    key: "1hutg5"
}], ["rect", {
    width: "7",
    height: "5",
    x: "3",
    y: "16",
    rx: "1",
    key: "ldoo1y"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Vw = Ne("LoaderCircle", [["path", {
    d: "M21 12a9 9 0 1 1-6.219-8.56",
    key: "13zald"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Uw = Ne("LogOut", [["path", {
    d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",
    key: "1uf3rs"
}], ["polyline", {
    points: "16 17 21 12 16 7",
    key: "1gabdz"
}], ["line", {
    x1: "21",
    x2: "9",
    y1: "12",
    y2: "12",
    key: "1uyos4"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Bw = Ne("MemoryStick", [["path", {
    d: "M6 19v-3",
    key: "1nvgqn"
}], ["path", {
    d: "M10 19v-3",
    key: "iu8nkm"
}], ["path", {
    d: "M14 19v-3",
    key: "kcehxu"
}], ["path", {
    d: "M18 19v-3",
    key: "1vh91z"
}], ["path", {
    d: "M8 11V9",
    key: "63erz4"
}], ["path", {
    d: "M16 11V9",
    key: "fru6f3"
}], ["path", {
    d: "M12 11V9",
    key: "ha00sb"
}], ["path", {
    d: "M2 15h20",
    key: "16ne18"
}], ["path", {
    d: "M2 7a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v1.1a2 2 0 0 0 0 3.837V17a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-5.1a2 2 0 0 0 0-3.837Z",
    key: "lhddv3"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const jw = Ne("Moon", [["path", {
    d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",
    key: "a7tn18"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const $w = Ne("TriangleAlert", [["path", {
    d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
    key: "wmoenq"
}], ["path", {
    d: "M12 9v4",
    key: "juzpu7"
}], ["path", {
    d: "M12 17h.01",
    key: "p32p05"
}]]);
/**
 * @license lucide-react v0.424.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ww = Ne("UserRoundPlus", [["path", {
    d: "M2 21a8 8 0 0 1 13.292-6",
    key: "bjp14o"
}], ["circle", {
    cx: "10",
    cy: "8",
    r: "5",
    key: "o932ke"
}], ["path", {
    d: "M19 16v6",
    key: "tddt3s"
}], ["path", {
    d: "M22 19h-6",
    key: "vcuq98"
}]]);
function Hw() {
    const [e,t] = g.useState([]);
    return g.useEffect( () => {
        const n = async () => {
            const o = await V0();
            t(o.logs)
        }
          , r = setInterval(async () => {
            n()
        }
        , 1e3);
        return n(),
        () => {
            clearInterval(r)
        }
    }
    ),
    S("div", {
        className: "w-full flex flex-col gap-2 pb-2 pt-6 px-2 text-center overflow-hidden relative z-10 mask-fade",
        children: e.map( (n, r) => S("div", {
            className: "animate-fade-up overflow-hidden text-ellipsis whitespace-nowrap",
            style: {
                transform: `scale(${1 + .05 * (r + 1 - e.length)})`
            },
            children: z("p", {
                className: "text-xs font-mono text-zinc-800 leading-tight",
                children: [xv(n.ts), " ", n.message]
            })
        }, r))
    })
}
function Gw() {
    const {stats: e, isB7SConnected: t} = pm()
      , n = {
        cpu: e && e.cpuUsage ? `${Number(e.cpuUsage).toFixed(2)}%` : "0%",
        memory: e && e.memoryUsage ? `${Number(e.memoryUsage.usedMemoryGib / e.memoryUsage.totalMemoryGib * 100).toFixed(2)}%` : "0%",
        network: "0 KB/s"
    };
    return S("div", {
        className: "flex flex-col px-4 py-2 border-t",
        children: z("div", {
            className: "flex items-center justify-between text-sm",
            children: [z("div", {
                className: "flex items-center gap-4",
                children: [t && z("div", {
                    className: "flex items-center gap-1",
                    title: "Working",
                    children: [S(zw, {
                        className: "w-4 h-4 text-gray-500"
                    }), S("span", {
                        className: "text-sm",
                        children: "Working"
                    })]
                }), !t && z("div", {
                    className: "flex items-center gap-1",
                    title: "Idle",
                    children: [S(jw, {
                        className: "w-4 h-4 text-gray-500"
                    }), S("span", {
                        className: "text-sm",
                        children: "Idle"
                    })]
                })]
            }), z("div", {
                className: "flex gap-4",
                children: [z("div", {
                    className: "flex items-center gap-1",
                    title: "CPU Usage",
                    children: [S(Dw, {
                        className: "w-4 h-4 text-gray-500"
                    }), S("span", {
                        className: "text-sm",
                        children: n.cpu
                    })]
                }), z("div", {
                    className: "flex items-center gap-1",
                    title: "Memory Usage",
                    children: [S(Bw, {
                        className: "w-4 h-4 text-gray-500"
                    }), S("span", {
                        className: "text-sm",
                        children: n.memory
                    })]
                })]
            })]
        })
    })
}
function Rm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++)
                e[t] && (n = Rm(e[t])) && (r && (r += " "),
                r += n)
        } else
            for (n in e)
                e[n] && (r && (r += " "),
                r += n);
    return r
}
function Kw() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Rm(e)) && (r && (r += " "),
        r += t);
    return r
}
const Da = "-";
function Yw(e) {
    const t = Xw(e)
      , {conflictingClassGroups: n, conflictingClassGroupModifiers: r} = e;
    function o(l) {
        const s = l.split(Da);
        return s[0] === "" && s.length !== 1 && s.shift(),
        Nm(s, t) || Qw(l)
    }
    function i(l, s) {
        const u = n[l] || [];
        return s && r[l] ? [...u, ...r[l]] : u
    }
    return {
        getClassGroupId: o,
        getConflictingClassGroupIds: i
    }
}
function Nm(e, t) {
    var l;
    if (e.length === 0)
        return t.classGroupId;
    const n = e[0]
      , r = t.nextPart.get(n)
      , o = r ? Nm(e.slice(1), r) : void 0;
    if (o)
        return o;
    if (t.validators.length === 0)
        return;
    const i = e.join(Da);
    return (l = t.validators.find( ({validator: s}) => s(i))) == null ? void 0 : l.classGroupId
}
const xd = /^\[(.+)\]$/;
function Qw(e) {
    if (xd.test(e)) {
        const t = xd.exec(e)[1]
          , n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
        if (n)
            return "arbitrary.." + n
    }
}
function Xw(e) {
    const {theme: t, prefix: n} = e
      , r = {
        nextPart: new Map,
        validators: []
    };
    return Jw(Object.entries(e.classGroups), n).forEach( ([i,l]) => {
        Cu(l, r, i, t)
    }
    ),
    r
}
function Cu(e, t, n, r) {
    e.forEach(o => {
        if (typeof o == "string") {
            const i = o === "" ? t : Cd(t, o);
            i.classGroupId = n;
            return
        }
        if (typeof o == "function") {
            if (Zw(o)) {
                Cu(o(r), t, n, r);
                return
            }
            t.validators.push({
                validator: o,
                classGroupId: n
            });
            return
        }
        Object.entries(o).forEach( ([i,l]) => {
            Cu(l, Cd(t, i), n, r)
        }
        )
    }
    )
}
function Cd(e, t) {
    let n = e;
    return t.split(Da).forEach(r => {
        n.nextPart.has(r) || n.nextPart.set(r, {
            nextPart: new Map,
            validators: []
        }),
        n = n.nextPart.get(r)
    }
    ),
    n
}
function Zw(e) {
    return e.isThemeGetter
}
function Jw(e, t) {
    return t ? e.map( ([n,r]) => {
        const o = r.map(i => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map( ([l,s]) => [t + l, s])) : i);
        return [n, o]
    }
    ) : e
}
function qw(e) {
    if (e < 1)
        return {
            get: () => {}
            ,
            set: () => {}
        };
    let t = 0
      , n = new Map
      , r = new Map;
    function o(i, l) {
        n.set(i, l),
        t++,
        t > e && (t = 0,
        r = n,
        n = new Map)
    }
    return {
        get(i) {
            let l = n.get(i);
            if (l !== void 0)
                return l;
            if ((l = r.get(i)) !== void 0)
                return o(i, l),
                l
        },
        set(i, l) {
            n.has(i) ? n.set(i, l) : o(i, l)
        }
    }
}
const Tm = "!";
function e1(e) {
    const {separator: t, experimentalParseClassName: n} = e
      , r = t.length === 1
      , o = t[0]
      , i = t.length;
    function l(s) {
        const u = [];
        let a = 0, f = 0, d;
        for (let E = 0; E < s.length; E++) {
            let c = s[E];
            if (a === 0) {
                if (c === o && (r || s.slice(E, E + i) === t)) {
                    u.push(s.slice(f, E)),
                    f = E + i;
                    continue
                }
                if (c === "/") {
                    d = E;
                    continue
                }
            }
            c === "[" ? a++ : c === "]" && a--
        }
        const m = u.length === 0 ? s : s.substring(f)
          , y = m.startsWith(Tm)
          , w = y ? m.substring(1) : m
          , h = d && d > f ? d - f : void 0;
        return {
            modifiers: u,
            hasImportantModifier: y,
            baseClassName: w,
            maybePostfixModifierPosition: h
        }
    }
    return n ? function(u) {
        return n({
            className: u,
            parseClassName: l
        })
    }
    : l
}
function t1(e) {
    if (e.length <= 1)
        return e;
    const t = [];
    let n = [];
    return e.forEach(r => {
        r[0] === "[" ? (t.push(...n.sort(), r),
        n = []) : n.push(r)
    }
    ),
    t.push(...n.sort()),
    t
}
function n1(e) {
    return {
        cache: qw(e.cacheSize),
        parseClassName: e1(e),
        ...Yw(e)
    }
}
const r1 = /\s+/;
function o1(e, t) {
    const {parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o} = t
      , i = new Set;
    return e.trim().split(r1).map(l => {
        const {modifiers: s, hasImportantModifier: u, baseClassName: a, maybePostfixModifierPosition: f} = n(l);
        let d = !!f
          , m = r(d ? a.substring(0, f) : a);
        if (!m) {
            if (!d)
                return {
                    isTailwindClass: !1,
                    originalClassName: l
                };
            if (m = r(a),
            !m)
                return {
                    isTailwindClass: !1,
                    originalClassName: l
                };
            d = !1
        }
        const y = t1(s).join(":");
        return {
            isTailwindClass: !0,
            modifierId: u ? y + Tm : y,
            classGroupId: m,
            originalClassName: l,
            hasPostfixModifier: d
        }
    }
    ).reverse().filter(l => {
        if (!l.isTailwindClass)
            return !0;
        const {modifierId: s, classGroupId: u, hasPostfixModifier: a} = l
          , f = s + u;
        return i.has(f) ? !1 : (i.add(f),
        o(u, a).forEach(d => i.add(s + d)),
        !0)
    }
    ).reverse().map(l => l.originalClassName).join(" ")
}
function i1() {
    let e = 0, t, n, r = "";
    for (; e < arguments.length; )
        (t = arguments[e++]) && (n = Pm(t)) && (r && (r += " "),
        r += n);
    return r
}
function Pm(e) {
    if (typeof e == "string")
        return e;
    let t, n = "";
    for (let r = 0; r < e.length; r++)
        e[r] && (t = Pm(e[r])) && (n && (n += " "),
        n += t);
    return n
}
function l1(e, ...t) {
    let n, r, o, i = l;
    function l(u) {
        const a = t.reduce( (f, d) => d(f), e());
        return n = n1(a),
        r = n.cache.get,
        o = n.cache.set,
        i = s,
        s(u)
    }
    function s(u) {
        const a = r(u);
        if (a)
            return a;
        const f = o1(u, n);
        return o(u, f),
        f
    }
    return function() {
        return i(i1.apply(null, arguments))
    }
}
function q(e) {
    const t = n => n[e] || [];
    return t.isThemeGetter = !0,
    t
}
const Im = /^\[(?:([a-z-]+):)?(.+)\]$/i
  , s1 = /^\d+\/\d+$/
  , u1 = new Set(["px", "full", "screen"])
  , a1 = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/
  , c1 = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/
  , d1 = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/
  , f1 = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/
  , p1 = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function bt(e) {
    return Mn(e) || u1.has(e) || s1.test(e)
}
function Jt(e) {
    return Ar(e, "length", S1)
}
function Mn(e) {
    return !!e && !Number.isNaN(Number(e))
}
function di(e) {
    return Ar(e, "number", Mn)
}
function Hr(e) {
    return !!e && Number.isInteger(Number(e))
}
function m1(e) {
    return e.endsWith("%") && Mn(e.slice(0, -1))
}
function U(e) {
    return Im.test(e)
}
function qt(e) {
    return a1.test(e)
}
const h1 = new Set(["length", "size", "percentage"]);
function v1(e) {
    return Ar(e, h1, Am)
}
function g1(e) {
    return Ar(e, "position", Am)
}
const y1 = new Set(["image", "url"]);
function w1(e) {
    return Ar(e, y1, C1)
}
function E1(e) {
    return Ar(e, "", x1)
}
function Gr() {
    return !0
}
function Ar(e, t, n) {
    const r = Im.exec(e);
    return r ? r[1] ? typeof t == "string" ? r[1] === t : t.has(r[1]) : n(r[2]) : !1
}
function S1(e) {
    return c1.test(e) && !d1.test(e)
}
function Am() {
    return !1
}
function x1(e) {
    return f1.test(e)
}
function C1(e) {
    return p1.test(e)
}
function _1() {
    const e = q("colors")
      , t = q("spacing")
      , n = q("blur")
      , r = q("brightness")
      , o = q("borderColor")
      , i = q("borderRadius")
      , l = q("borderSpacing")
      , s = q("borderWidth")
      , u = q("contrast")
      , a = q("grayscale")
      , f = q("hueRotate")
      , d = q("invert")
      , m = q("gap")
      , y = q("gradientColorStops")
      , w = q("gradientColorStopPositions")
      , h = q("inset")
      , E = q("margin")
      , c = q("opacity")
      , p = q("padding")
      , v = q("saturate")
      , x = q("scale")
      , C = q("sepia")
      , R = q("skew")
      , k = q("space")
      , _ = q("translate")
      , A = () => ["auto", "contain", "none"]
      , T = () => ["auto", "hidden", "clip", "visible", "scroll"]
      , b = () => ["auto", U, t]
      , M = () => [U, t]
      , B = () => ["", bt, Jt]
      , j = () => ["auto", Mn, U]
      , X = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"]
      , W = () => ["solid", "dashed", "dotted", "double", "none"]
      , F = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity"]
      , P = () => ["start", "end", "center", "between", "around", "evenly", "stretch"]
      , N = () => ["", "0", U]
      , D = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
      , L = () => [Mn, di]
      , V = () => [Mn, U];
    return {
        cacheSize: 500,
        separator: ":",
        theme: {
            colors: [Gr],
            spacing: [bt, Jt],
            blur: ["none", "", qt, U],
            brightness: L(),
            borderColor: [e],
            borderRadius: ["none", "", "full", qt, U],
            borderSpacing: M(),
            borderWidth: B(),
            contrast: L(),
            grayscale: N(),
            hueRotate: V(),
            invert: N(),
            gap: M(),
            gradientColorStops: [e],
            gradientColorStopPositions: [m1, Jt],
            inset: b(),
            margin: b(),
            opacity: L(),
            padding: M(),
            saturate: L(),
            scale: L(),
            sepia: N(),
            skew: V(),
            space: M(),
            translate: M()
        },
        classGroups: {
            aspect: [{
                aspect: ["auto", "square", "video", U]
            }],
            container: ["container"],
            columns: [{
                columns: [qt]
            }],
            "break-after": [{
                "break-after": D()
            }],
            "break-before": [{
                "break-before": D()
            }],
            "break-inside": [{
                "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
            }],
            "box-decoration": [{
                "box-decoration": ["slice", "clone"]
            }],
            box: [{
                box: ["border", "content"]
            }],
            display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
            float: [{
                float: ["right", "left", "none", "start", "end"]
            }],
            clear: [{
                clear: ["left", "right", "both", "none", "start", "end"]
            }],
            isolation: ["isolate", "isolation-auto"],
            "object-fit": [{
                object: ["contain", "cover", "fill", "none", "scale-down"]
            }],
            "object-position": [{
                object: [...X(), U]
            }],
            overflow: [{
                overflow: T()
            }],
            "overflow-x": [{
                "overflow-x": T()
            }],
            "overflow-y": [{
                "overflow-y": T()
            }],
            overscroll: [{
                overscroll: A()
            }],
            "overscroll-x": [{
                "overscroll-x": A()
            }],
            "overscroll-y": [{
                "overscroll-y": A()
            }],
            position: ["static", "fixed", "absolute", "relative", "sticky"],
            inset: [{
                inset: [h]
            }],
            "inset-x": [{
                "inset-x": [h]
            }],
            "inset-y": [{
                "inset-y": [h]
            }],
            start: [{
                start: [h]
            }],
            end: [{
                end: [h]
            }],
            top: [{
                top: [h]
            }],
            right: [{
                right: [h]
            }],
            bottom: [{
                bottom: [h]
            }],
            left: [{
                left: [h]
            }],
            visibility: ["visible", "invisible", "collapse"],
            z: [{
                z: ["auto", Hr, U]
            }],
            basis: [{
                basis: b()
            }],
            "flex-direction": [{
                flex: ["row", "row-reverse", "col", "col-reverse"]
            }],
            "flex-wrap": [{
                flex: ["wrap", "wrap-reverse", "nowrap"]
            }],
            flex: [{
                flex: ["1", "auto", "initial", "none", U]
            }],
            grow: [{
                grow: N()
            }],
            shrink: [{
                shrink: N()
            }],
            order: [{
                order: ["first", "last", "none", Hr, U]
            }],
            "grid-cols": [{
                "grid-cols": [Gr]
            }],
            "col-start-end": [{
                col: ["auto", {
                    span: ["full", Hr, U]
                }, U]
            }],
            "col-start": [{
                "col-start": j()
            }],
            "col-end": [{
                "col-end": j()
            }],
            "grid-rows": [{
                "grid-rows": [Gr]
            }],
            "row-start-end": [{
                row: ["auto", {
                    span: [Hr, U]
                }, U]
            }],
            "row-start": [{
                "row-start": j()
            }],
            "row-end": [{
                "row-end": j()
            }],
            "grid-flow": [{
                "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
            }],
            "auto-cols": [{
                "auto-cols": ["auto", "min", "max", "fr", U]
            }],
            "auto-rows": [{
                "auto-rows": ["auto", "min", "max", "fr", U]
            }],
            gap: [{
                gap: [m]
            }],
            "gap-x": [{
                "gap-x": [m]
            }],
            "gap-y": [{
                "gap-y": [m]
            }],
            "justify-content": [{
                justify: ["normal", ...P()]
            }],
            "justify-items": [{
                "justify-items": ["start", "end", "center", "stretch"]
            }],
            "justify-self": [{
                "justify-self": ["auto", "start", "end", "center", "stretch"]
            }],
            "align-content": [{
                content: ["normal", ...P(), "baseline"]
            }],
            "align-items": [{
                items: ["start", "end", "center", "baseline", "stretch"]
            }],
            "align-self": [{
                self: ["auto", "start", "end", "center", "stretch", "baseline"]
            }],
            "place-content": [{
                "place-content": [...P(), "baseline"]
            }],
            "place-items": [{
                "place-items": ["start", "end", "center", "baseline", "stretch"]
            }],
            "place-self": [{
                "place-self": ["auto", "start", "end", "center", "stretch"]
            }],
            p: [{
                p: [p]
            }],
            px: [{
                px: [p]
            }],
            py: [{
                py: [p]
            }],
            ps: [{
                ps: [p]
            }],
            pe: [{
                pe: [p]
            }],
            pt: [{
                pt: [p]
            }],
            pr: [{
                pr: [p]
            }],
            pb: [{
                pb: [p]
            }],
            pl: [{
                pl: [p]
            }],
            m: [{
                m: [E]
            }],
            mx: [{
                mx: [E]
            }],
            my: [{
                my: [E]
            }],
            ms: [{
                ms: [E]
            }],
            me: [{
                me: [E]
            }],
            mt: [{
                mt: [E]
            }],
            mr: [{
                mr: [E]
            }],
            mb: [{
                mb: [E]
            }],
            ml: [{
                ml: [E]
            }],
            "space-x": [{
                "space-x": [k]
            }],
            "space-x-reverse": ["space-x-reverse"],
            "space-y": [{
                "space-y": [k]
            }],
            "space-y-reverse": ["space-y-reverse"],
            w: [{
                w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", U, t]
            }],
            "min-w": [{
                "min-w": [U, t, "min", "max", "fit"]
            }],
            "max-w": [{
                "max-w": [U, t, "none", "full", "min", "max", "fit", "prose", {
                    screen: [qt]
                }, qt]
            }],
            h: [{
                h: [U, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "min-h": [{
                "min-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            "max-h": [{
                "max-h": [U, t, "min", "max", "fit", "svh", "lvh", "dvh"]
            }],
            size: [{
                size: [U, t, "auto", "min", "max", "fit"]
            }],
            "font-size": [{
                text: ["base", qt, Jt]
            }],
            "font-smoothing": ["antialiased", "subpixel-antialiased"],
            "font-style": ["italic", "not-italic"],
            "font-weight": [{
                font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", di]
            }],
            "font-family": [{
                font: [Gr]
            }],
            "fvn-normal": ["normal-nums"],
            "fvn-ordinal": ["ordinal"],
            "fvn-slashed-zero": ["slashed-zero"],
            "fvn-figure": ["lining-nums", "oldstyle-nums"],
            "fvn-spacing": ["proportional-nums", "tabular-nums"],
            "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
            tracking: [{
                tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", U]
            }],
            "line-clamp": [{
                "line-clamp": ["none", Mn, di]
            }],
            leading: [{
                leading: ["none", "tight", "snug", "normal", "relaxed", "loose", bt, U]
            }],
            "list-image": [{
                "list-image": ["none", U]
            }],
            "list-style-type": [{
                list: ["none", "disc", "decimal", U]
            }],
            "list-style-position": [{
                list: ["inside", "outside"]
            }],
            "placeholder-color": [{
                placeholder: [e]
            }],
            "placeholder-opacity": [{
                "placeholder-opacity": [c]
            }],
            "text-alignment": [{
                text: ["left", "center", "right", "justify", "start", "end"]
            }],
            "text-color": [{
                text: [e]
            }],
            "text-opacity": [{
                "text-opacity": [c]
            }],
            "text-decoration": ["underline", "overline", "line-through", "no-underline"],
            "text-decoration-style": [{
                decoration: [...W(), "wavy"]
            }],
            "text-decoration-thickness": [{
                decoration: ["auto", "from-font", bt, Jt]
            }],
            "underline-offset": [{
                "underline-offset": ["auto", bt, U]
            }],
            "text-decoration-color": [{
                decoration: [e]
            }],
            "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
            "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
            "text-wrap": [{
                text: ["wrap", "nowrap", "balance", "pretty"]
            }],
            indent: [{
                indent: M()
            }],
            "vertical-align": [{
                align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", U]
            }],
            whitespace: [{
                whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
            }],
            break: [{
                break: ["normal", "words", "all", "keep"]
            }],
            hyphens: [{
                hyphens: ["none", "manual", "auto"]
            }],
            content: [{
                content: ["none", U]
            }],
            "bg-attachment": [{
                bg: ["fixed", "local", "scroll"]
            }],
            "bg-clip": [{
                "bg-clip": ["border", "padding", "content", "text"]
            }],
            "bg-opacity": [{
                "bg-opacity": [c]
            }],
            "bg-origin": [{
                "bg-origin": ["border", "padding", "content"]
            }],
            "bg-position": [{
                bg: [...X(), g1]
            }],
            "bg-repeat": [{
                bg: ["no-repeat", {
                    repeat: ["", "x", "y", "round", "space"]
                }]
            }],
            "bg-size": [{
                bg: ["auto", "cover", "contain", v1]
            }],
            "bg-image": [{
                bg: ["none", {
                    "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                }, w1]
            }],
            "bg-color": [{
                bg: [e]
            }],
            "gradient-from-pos": [{
                from: [w]
            }],
            "gradient-via-pos": [{
                via: [w]
            }],
            "gradient-to-pos": [{
                to: [w]
            }],
            "gradient-from": [{
                from: [y]
            }],
            "gradient-via": [{
                via: [y]
            }],
            "gradient-to": [{
                to: [y]
            }],
            rounded: [{
                rounded: [i]
            }],
            "rounded-s": [{
                "rounded-s": [i]
            }],
            "rounded-e": [{
                "rounded-e": [i]
            }],
            "rounded-t": [{
                "rounded-t": [i]
            }],
            "rounded-r": [{
                "rounded-r": [i]
            }],
            "rounded-b": [{
                "rounded-b": [i]
            }],
            "rounded-l": [{
                "rounded-l": [i]
            }],
            "rounded-ss": [{
                "rounded-ss": [i]
            }],
            "rounded-se": [{
                "rounded-se": [i]
            }],
            "rounded-ee": [{
                "rounded-ee": [i]
            }],
            "rounded-es": [{
                "rounded-es": [i]
            }],
            "rounded-tl": [{
                "rounded-tl": [i]
            }],
            "rounded-tr": [{
                "rounded-tr": [i]
            }],
            "rounded-br": [{
                "rounded-br": [i]
            }],
            "rounded-bl": [{
                "rounded-bl": [i]
            }],
            "border-w": [{
                border: [s]
            }],
            "border-w-x": [{
                "border-x": [s]
            }],
            "border-w-y": [{
                "border-y": [s]
            }],
            "border-w-s": [{
                "border-s": [s]
            }],
            "border-w-e": [{
                "border-e": [s]
            }],
            "border-w-t": [{
                "border-t": [s]
            }],
            "border-w-r": [{
                "border-r": [s]
            }],
            "border-w-b": [{
                "border-b": [s]
            }],
            "border-w-l": [{
                "border-l": [s]
            }],
            "border-opacity": [{
                "border-opacity": [c]
            }],
            "border-style": [{
                border: [...W(), "hidden"]
            }],
            "divide-x": [{
                "divide-x": [s]
            }],
            "divide-x-reverse": ["divide-x-reverse"],
            "divide-y": [{
                "divide-y": [s]
            }],
            "divide-y-reverse": ["divide-y-reverse"],
            "divide-opacity": [{
                "divide-opacity": [c]
            }],
            "divide-style": [{
                divide: W()
            }],
            "border-color": [{
                border: [o]
            }],
            "border-color-x": [{
                "border-x": [o]
            }],
            "border-color-y": [{
                "border-y": [o]
            }],
            "border-color-t": [{
                "border-t": [o]
            }],
            "border-color-r": [{
                "border-r": [o]
            }],
            "border-color-b": [{
                "border-b": [o]
            }],
            "border-color-l": [{
                "border-l": [o]
            }],
            "divide-color": [{
                divide: [o]
            }],
            "outline-style": [{
                outline: ["", ...W()]
            }],
            "outline-offset": [{
                "outline-offset": [bt, U]
            }],
            "outline-w": [{
                outline: [bt, Jt]
            }],
            "outline-color": [{
                outline: [e]
            }],
            "ring-w": [{
                ring: B()
            }],
            "ring-w-inset": ["ring-inset"],
            "ring-color": [{
                ring: [e]
            }],
            "ring-opacity": [{
                "ring-opacity": [c]
            }],
            "ring-offset-w": [{
                "ring-offset": [bt, Jt]
            }],
            "ring-offset-color": [{
                "ring-offset": [e]
            }],
            shadow: [{
                shadow: ["", "inner", "none", qt, E1]
            }],
            "shadow-color": [{
                shadow: [Gr]
            }],
            opacity: [{
                opacity: [c]
            }],
            "mix-blend": [{
                "mix-blend": [...F(), "plus-lighter", "plus-darker"]
            }],
            "bg-blend": [{
                "bg-blend": F()
            }],
            filter: [{
                filter: ["", "none"]
            }],
            blur: [{
                blur: [n]
            }],
            brightness: [{
                brightness: [r]
            }],
            contrast: [{
                contrast: [u]
            }],
            "drop-shadow": [{
                "drop-shadow": ["", "none", qt, U]
            }],
            grayscale: [{
                grayscale: [a]
            }],
            "hue-rotate": [{
                "hue-rotate": [f]
            }],
            invert: [{
                invert: [d]
            }],
            saturate: [{
                saturate: [v]
            }],
            sepia: [{
                sepia: [C]
            }],
            "backdrop-filter": [{
                "backdrop-filter": ["", "none"]
            }],
            "backdrop-blur": [{
                "backdrop-blur": [n]
            }],
            "backdrop-brightness": [{
                "backdrop-brightness": [r]
            }],
            "backdrop-contrast": [{
                "backdrop-contrast": [u]
            }],
            "backdrop-grayscale": [{
                "backdrop-grayscale": [a]
            }],
            "backdrop-hue-rotate": [{
                "backdrop-hue-rotate": [f]
            }],
            "backdrop-invert": [{
                "backdrop-invert": [d]
            }],
            "backdrop-opacity": [{
                "backdrop-opacity": [c]
            }],
            "backdrop-saturate": [{
                "backdrop-saturate": [v]
            }],
            "backdrop-sepia": [{
                "backdrop-sepia": [C]
            }],
            "border-collapse": [{
                border: ["collapse", "separate"]
            }],
            "border-spacing": [{
                "border-spacing": [l]
            }],
            "border-spacing-x": [{
                "border-spacing-x": [l]
            }],
            "border-spacing-y": [{
                "border-spacing-y": [l]
            }],
            "table-layout": [{
                table: ["auto", "fixed"]
            }],
            caption: [{
                caption: ["top", "bottom"]
            }],
            transition: [{
                transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", U]
            }],
            duration: [{
                duration: V()
            }],
            ease: [{
                ease: ["linear", "in", "out", "in-out", U]
            }],
            delay: [{
                delay: V()
            }],
            animate: [{
                animate: ["none", "spin", "ping", "pulse", "bounce", U]
            }],
            transform: [{
                transform: ["", "gpu", "none"]
            }],
            scale: [{
                scale: [x]
            }],
            "scale-x": [{
                "scale-x": [x]
            }],
            "scale-y": [{
                "scale-y": [x]
            }],
            rotate: [{
                rotate: [Hr, U]
            }],
            "translate-x": [{
                "translate-x": [_]
            }],
            "translate-y": [{
                "translate-y": [_]
            }],
            "skew-x": [{
                "skew-x": [R]
            }],
            "skew-y": [{
                "skew-y": [R]
            }],
            "transform-origin": [{
                origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", U]
            }],
            accent: [{
                accent: ["auto", e]
            }],
            appearance: [{
                appearance: ["none", "auto"]
            }],
            cursor: [{
                cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", U]
            }],
            "caret-color": [{
                caret: [e]
            }],
            "pointer-events": [{
                "pointer-events": ["none", "auto"]
            }],
            resize: [{
                resize: ["none", "y", "x", ""]
            }],
            "scroll-behavior": [{
                scroll: ["auto", "smooth"]
            }],
            "scroll-m": [{
                "scroll-m": M()
            }],
            "scroll-mx": [{
                "scroll-mx": M()
            }],
            "scroll-my": [{
                "scroll-my": M()
            }],
            "scroll-ms": [{
                "scroll-ms": M()
            }],
            "scroll-me": [{
                "scroll-me": M()
            }],
            "scroll-mt": [{
                "scroll-mt": M()
            }],
            "scroll-mr": [{
                "scroll-mr": M()
            }],
            "scroll-mb": [{
                "scroll-mb": M()
            }],
            "scroll-ml": [{
                "scroll-ml": M()
            }],
            "scroll-p": [{
                "scroll-p": M()
            }],
            "scroll-px": [{
                "scroll-px": M()
            }],
            "scroll-py": [{
                "scroll-py": M()
            }],
            "scroll-ps": [{
                "scroll-ps": M()
            }],
            "scroll-pe": [{
                "scroll-pe": M()
            }],
            "scroll-pt": [{
                "scroll-pt": M()
            }],
            "scroll-pr": [{
                "scroll-pr": M()
            }],
            "scroll-pb": [{
                "scroll-pb": M()
            }],
            "scroll-pl": [{
                "scroll-pl": M()
            }],
            "snap-align": [{
                snap: ["start", "end", "center", "align-none"]
            }],
            "snap-stop": [{
                snap: ["normal", "always"]
            }],
            "snap-type": [{
                snap: ["none", "x", "y", "both"]
            }],
            "snap-strictness": [{
                snap: ["mandatory", "proximity"]
            }],
            touch: [{
                touch: ["auto", "none", "manipulation"]
            }],
            "touch-x": [{
                "touch-pan": ["x", "left", "right"]
            }],
            "touch-y": [{
                "touch-pan": ["y", "up", "down"]
            }],
            "touch-pz": ["touch-pinch-zoom"],
            select: [{
                select: ["none", "text", "all", "auto"]
            }],
            "will-change": [{
                "will-change": ["auto", "scroll", "contents", "transform", U]
            }],
            fill: [{
                fill: [e, "none"]
            }],
            "stroke-w": [{
                stroke: [bt, Jt, di]
            }],
            stroke: [{
                stroke: [e, "none"]
            }],
            sr: ["sr-only", "not-sr-only"],
            "forced-color-adjust": [{
                "forced-color-adjust": ["auto", "none"]
            }]
        },
        conflictingClassGroups: {
            overflow: ["overflow-x", "overflow-y"],
            overscroll: ["overscroll-x", "overscroll-y"],
            inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
            "inset-x": ["right", "left"],
            "inset-y": ["top", "bottom"],
            flex: ["basis", "grow", "shrink"],
            gap: ["gap-x", "gap-y"],
            p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
            px: ["pr", "pl"],
            py: ["pt", "pb"],
            m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
            mx: ["mr", "ml"],
            my: ["mt", "mb"],
            size: ["w", "h"],
            "font-size": ["leading"],
            "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
            "fvn-ordinal": ["fvn-normal"],
            "fvn-slashed-zero": ["fvn-normal"],
            "fvn-figure": ["fvn-normal"],
            "fvn-spacing": ["fvn-normal"],
            "fvn-fraction": ["fvn-normal"],
            "line-clamp": ["display", "overflow"],
            rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
            "rounded-s": ["rounded-ss", "rounded-es"],
            "rounded-e": ["rounded-se", "rounded-ee"],
            "rounded-t": ["rounded-tl", "rounded-tr"],
            "rounded-r": ["rounded-tr", "rounded-br"],
            "rounded-b": ["rounded-br", "rounded-bl"],
            "rounded-l": ["rounded-tl", "rounded-bl"],
            "border-spacing": ["border-spacing-x", "border-spacing-y"],
            "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
            "border-w-x": ["border-w-r", "border-w-l"],
            "border-w-y": ["border-w-t", "border-w-b"],
            "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
            "border-color-x": ["border-color-r", "border-color-l"],
            "border-color-y": ["border-color-t", "border-color-b"],
            "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
            "scroll-mx": ["scroll-mr", "scroll-ml"],
            "scroll-my": ["scroll-mt", "scroll-mb"],
            "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
            "scroll-px": ["scroll-pr", "scroll-pl"],
            "scroll-py": ["scroll-pt", "scroll-pb"],
            touch: ["touch-x", "touch-y", "touch-pz"],
            "touch-x": ["touch"],
            "touch-y": ["touch"],
            "touch-pz": ["touch"]
        },
        conflictingClassGroupModifiers: {
            "font-size": ["leading"]
        }
    }
}
const k1 = l1(_1);
function xt(...e) {
    return k1(Kw(e))
}
function R1(e, t) {
    typeof e == "function" ? e(t) : e != null && (e.current = t)
}
function Nl(...e) {
    return t => e.forEach(n => R1(n, t))
}
function je(...e) {
    return g.useCallback(Nl(...e), e)
}
var kr = g.forwardRef( (e, t) => {
    const {children: n, ...r} = e
      , o = g.Children.toArray(n)
      , i = o.find(T1);
    if (i) {
        const l = i.props.children
          , s = o.map(u => u === i ? g.Children.count(l) > 1 ? g.Children.only(null) : g.isValidElement(l) ? l.props.children : null : u);
        return S(_u, {
            ...r,
            ref: t,
            children: g.isValidElement(l) ? g.cloneElement(l, void 0, s) : null
        })
    }
    return S(_u, {
        ...r,
        ref: t,
        children: n
    })
}
);
kr.displayName = "Slot";
var _u = g.forwardRef( (e, t) => {
    const {children: n, ...r} = e;
    if (g.isValidElement(n)) {
        const o = I1(n);
        return g.cloneElement(n, {
            ...P1(r, n.props),
            ref: t ? Nl(t, o) : o
        })
    }
    return g.Children.count(n) > 1 ? g.Children.only(null) : null
}
);
_u.displayName = "SlotClone";
var N1 = ({children: e}) => S(pt, {
    children: e
});
function T1(e) {
    return g.isValidElement(e) && e.type === N1
}
function P1(e, t) {
    const n = {
        ...t
    };
    for (const r in t) {
        const o = e[r]
          , i = t[r];
        /^on[A-Z]/.test(r) ? o && i ? n[r] = (...s) => {
            i(...s),
            o(...s)
        }
        : o && (n[r] = o) : r === "style" ? n[r] = {
            ...o,
            ...i
        } : r === "className" && (n[r] = [o, i].filter(Boolean).join(" "))
    }
    return {
        ...e,
        ...n
    }
}
function I1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
function Mm(e) {
    var t, n, r = "";
    if (typeof e == "string" || typeof e == "number")
        r += e;
    else if (typeof e == "object")
        if (Array.isArray(e))
            for (t = 0; t < e.length; t++)
                e[t] && (n = Mm(e[t])) && (r && (r += " "),
                r += n);
        else
            for (t in e)
                e[t] && (r && (r += " "),
                r += t);
    return r
}
function A1() {
    for (var e, t, n = 0, r = ""; n < arguments.length; )
        (e = arguments[n++]) && (t = Mm(e)) && (r && (r += " "),
        r += t);
    return r
}
const _d = e => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e
  , kd = A1
  , M1 = (e, t) => n => {
    var r;
    if ((t == null ? void 0 : t.variants) == null)
        return kd(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    const {variants: o, defaultVariants: i} = t
      , l = Object.keys(o).map(a => {
        const f = n == null ? void 0 : n[a]
          , d = i == null ? void 0 : i[a];
        if (f === null)
            return null;
        const m = _d(f) || _d(d);
        return o[a][m]
    }
    )
      , s = n && Object.entries(n).reduce( (a, f) => {
        let[d,m] = f;
        return m === void 0 || (a[d] = m),
        a
    }
    , {})
      , u = t == null || (r = t.compoundVariants) === null || r === void 0 ? void 0 : r.reduce( (a, f) => {
        let {class: d, className: m, ...y} = f;
        return Object.entries(y).every(w => {
            let[h,E] = w;
            return Array.isArray(E) ? E.includes({
                ...i,
                ...s
            }[h]) : {
                ...i,
                ...s
            }[h] === E
        }
        ) ? [...a, d, m] : a
    }
    , []);
    return kd(e, l, u, n == null ? void 0 : n.class, n == null ? void 0 : n.className)
}
  , O1 = M1("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/90",
            destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
            outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
            secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-10 px-4 py-2",
            sm: "h-9 rounded-md px-3",
            lg: "h-11 rounded-md px-8",
            icon: "h-10 w-10"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})
  , ba = g.forwardRef( ({className: e, variant: t, size: n, asChild: r=!1, ...o}, i) => S(r ? kr : "button", {
    className: xt(O1({
        variant: t,
        size: n,
        className: e
    })),
    ref: i,
    ...o
}));
ba.displayName = "Button";
function H(e, t, {checkForDefaultPrevented: n=!0}={}) {
    return function(o) {
        if (e == null || e(o),
        n === !1 || !o.defaultPrevented)
            return t == null ? void 0 : t(o)
    }
}
function Fo(e, t=[]) {
    let n = [];
    function r(i, l) {
        const s = g.createContext(l)
          , u = n.length;
        n = [...n, l];
        function a(d) {
            const {scope: m, children: y, ...w} = d
              , h = (m == null ? void 0 : m[e][u]) || s
              , E = g.useMemo( () => w, Object.values(w));
            return S(h.Provider, {
                value: E,
                children: y
            })
        }
        function f(d, m) {
            const y = (m == null ? void 0 : m[e][u]) || s
              , w = g.useContext(y);
            if (w)
                return w;
            if (l !== void 0)
                return l;
            throw new Error(`\`${d}\` must be used within \`${i}\``)
        }
        return a.displayName = i + "Provider",
        [a, f]
    }
    const o = () => {
        const i = n.map(l => g.createContext(l));
        return function(s) {
            const u = (s == null ? void 0 : s[e]) || i;
            return g.useMemo( () => ({
                [`__scope${e}`]: {
                    ...s,
                    [e]: u
                }
            }), [s, u])
        }
    }
    ;
    return o.scopeName = e,
    [r, D1(o, ...t)]
}
function D1(...e) {
    const t = e[0];
    if (e.length === 1)
        return t;
    const n = () => {
        const r = e.map(o => ({
            useScope: o(),
            scopeName: o.scopeName
        }));
        return function(i) {
            const l = r.reduce( (s, {useScope: u, scopeName: a}) => {
                const d = u(i)[`__scope${a}`];
                return {
                    ...s,
                    ...d
                }
            }
            , {});
            return g.useMemo( () => ({
                [`__scope${t.scopeName}`]: l
            }), [l])
        }
    }
    ;
    return n.scopeName = t.scopeName,
    n
}
function wt(e) {
    const t = g.useRef(e);
    return g.useEffect( () => {
        t.current = e
    }
    ),
    g.useMemo( () => (...n) => {
        var r;
        return (r = t.current) == null ? void 0 : r.call(t, ...n)
    }
    , [])
}
function Om({prop: e, defaultProp: t, onChange: n= () => {}
}) {
    const [r,o] = b1({
        defaultProp: t,
        onChange: n
    })
      , i = e !== void 0
      , l = i ? e : r
      , s = wt(n)
      , u = g.useCallback(a => {
        if (i) {
            const d = typeof a == "function" ? a(e) : a;
            d !== e && s(d)
        } else
            o(a)
    }
    , [i, e, o, s]);
    return [l, u]
}
function b1({defaultProp: e, onChange: t}) {
    const n = g.useState(e)
      , [r] = n
      , o = g.useRef(r)
      , i = wt(t);
    return g.useEffect( () => {
        o.current !== r && (i(r),
        o.current = r)
    }
    , [r, o, i]),
    n
}
var L1 = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "span", "svg", "ul"]
  , Oe = L1.reduce( (e, t) => {
    const n = g.forwardRef( (r, o) => {
        const {asChild: i, ...l} = r
          , s = i ? kr : t;
        return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0),
        S(s, {
            ...l,
            ref: o
        })
    }
    );
    return n.displayName = `Primitive.${t}`,
    {
        ...e,
        [t]: n
    }
}
, {});
function Dm(e, t) {
    e && zo.flushSync( () => e.dispatchEvent(t))
}
function bm(e) {
    const t = e + "CollectionProvider"
      , [n,r] = Fo(t)
      , [o,i] = n(t, {
        collectionRef: {
            current: null
        },
        itemMap: new Map
    })
      , l = y => {
        const {scope: w, children: h} = y
          , E = He.useRef(null)
          , c = He.useRef(new Map).current;
        return S(o, {
            scope: w,
            itemMap: c,
            collectionRef: E,
            children: h
        })
    }
    ;
    l.displayName = t;
    const s = e + "CollectionSlot"
      , u = He.forwardRef( (y, w) => {
        const {scope: h, children: E} = y
          , c = i(s, h)
          , p = je(w, c.collectionRef);
        return S(kr, {
            ref: p,
            children: E
        })
    }
    );
    u.displayName = s;
    const a = e + "CollectionItemSlot"
      , f = "data-radix-collection-item"
      , d = He.forwardRef( (y, w) => {
        const {scope: h, children: E, ...c} = y
          , p = He.useRef(null)
          , v = je(w, p)
          , x = i(a, h);
        return He.useEffect( () => (x.itemMap.set(p, {
            ref: p,
            ...c
        }),
        () => void x.itemMap.delete(p))),
        S(kr, {
            [f]: "",
            ref: v,
            children: E
        })
    }
    );
    d.displayName = a;
    function m(y) {
        const w = i(e + "CollectionConsumer", y);
        return He.useCallback( () => {
            const E = w.collectionRef.current;
            if (!E)
                return [];
            const c = Array.from(E.querySelectorAll(`[${f}]`));
            return Array.from(w.itemMap.values()).sort( (x, C) => c.indexOf(x.ref.current) - c.indexOf(C.ref.current))
        }
        , [w.collectionRef, w.itemMap])
    }
    return [{
        Provider: l,
        Slot: u,
        ItemSlot: d
    }, m, r]
}
var z1 = g.createContext(void 0);
function Lm(e) {
    const t = g.useContext(z1);
    return e || t || "ltr"
}
function F1(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wt(e);
    g.useEffect( () => {
        const r = o => {
            o.key === "Escape" && n(o)
        }
        ;
        return t.addEventListener("keydown", r, {
            capture: !0
        }),
        () => t.removeEventListener("keydown", r, {
            capture: !0
        })
    }
    , [n, t])
}
var V1 = "DismissableLayer", ku = "dismissableLayer.update", U1 = "dismissableLayer.pointerDownOutside", B1 = "dismissableLayer.focusOutside", Rd, zm = g.createContext({
    layers: new Set,
    layersWithOutsidePointerEventsDisabled: new Set,
    branches: new Set
}), Fm = g.forwardRef( (e, t) => {
    const {disableOutsidePointerEvents: n=!1, onEscapeKeyDown: r, onPointerDownOutside: o, onFocusOutside: i, onInteractOutside: l, onDismiss: s, ...u} = e
      , a = g.useContext(zm)
      , [f,d] = g.useState(null)
      , m = (f == null ? void 0 : f.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document)
      , [,y] = g.useState({})
      , w = je(t, k => d(k))
      , h = Array.from(a.layers)
      , [E] = [...a.layersWithOutsidePointerEventsDisabled].slice(-1)
      , c = h.indexOf(E)
      , p = f ? h.indexOf(f) : -1
      , v = a.layersWithOutsidePointerEventsDisabled.size > 0
      , x = p >= c
      , C = W1(k => {
        const _ = k.target
          , A = [...a.branches].some(T => T.contains(_));
        !x || A || (o == null || o(k),
        l == null || l(k),
        k.defaultPrevented || s == null || s())
    }
    , m)
      , R = H1(k => {
        const _ = k.target;
        [...a.branches].some(T => T.contains(_)) || (i == null || i(k),
        l == null || l(k),
        k.defaultPrevented || s == null || s())
    }
    , m);
    return F1(k => {
        p === a.layers.size - 1 && (r == null || r(k),
        !k.defaultPrevented && s && (k.preventDefault(),
        s()))
    }
    , m),
    g.useEffect( () => {
        if (f)
            return n && (a.layersWithOutsidePointerEventsDisabled.size === 0 && (Rd = m.body.style.pointerEvents,
            m.body.style.pointerEvents = "none"),
            a.layersWithOutsidePointerEventsDisabled.add(f)),
            a.layers.add(f),
            Nd(),
            () => {
                n && a.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Rd)
            }
    }
    , [f, m, n, a]),
    g.useEffect( () => () => {
        f && (a.layers.delete(f),
        a.layersWithOutsidePointerEventsDisabled.delete(f),
        Nd())
    }
    , [f, a]),
    g.useEffect( () => {
        const k = () => y({});
        return document.addEventListener(ku, k),
        () => document.removeEventListener(ku, k)
    }
    , []),
    S(Oe.div, {
        ...u,
        ref: w,
        style: {
            pointerEvents: v ? x ? "auto" : "none" : void 0,
            ...e.style
        },
        onFocusCapture: H(e.onFocusCapture, R.onFocusCapture),
        onBlurCapture: H(e.onBlurCapture, R.onBlurCapture),
        onPointerDownCapture: H(e.onPointerDownCapture, C.onPointerDownCapture)
    })
}
);
Fm.displayName = V1;
var j1 = "DismissableLayerBranch"
  , $1 = g.forwardRef( (e, t) => {
    const n = g.useContext(zm)
      , r = g.useRef(null)
      , o = je(t, r);
    return g.useEffect( () => {
        const i = r.current;
        if (i)
            return n.branches.add(i),
            () => {
                n.branches.delete(i)
            }
    }
    , [n.branches]),
    S(Oe.div, {
        ...e,
        ref: o
    })
}
);
$1.displayName = j1;
function W1(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wt(e)
      , r = g.useRef(!1)
      , o = g.useRef( () => {}
    );
    return g.useEffect( () => {
        const i = s => {
            if (s.target && !r.current) {
                let u = function() {
                    Vm(U1, n, a, {
                        discrete: !0
                    })
                };
                const a = {
                    originalEvent: s
                };
                s.pointerType === "touch" ? (t.removeEventListener("click", o.current),
                o.current = u,
                t.addEventListener("click", o.current, {
                    once: !0
                })) : u()
            } else
                t.removeEventListener("click", o.current);
            r.current = !1
        }
          , l = window.setTimeout( () => {
            t.addEventListener("pointerdown", i)
        }
        , 0);
        return () => {
            window.clearTimeout(l),
            t.removeEventListener("pointerdown", i),
            t.removeEventListener("click", o.current)
        }
    }
    , [t, n]),
    {
        onPointerDownCapture: () => r.current = !0
    }
}
function H1(e, t=globalThis == null ? void 0 : globalThis.document) {
    const n = wt(e)
      , r = g.useRef(!1);
    return g.useEffect( () => {
        const o = i => {
            i.target && !r.current && Vm(B1, n, {
                originalEvent: i
            }, {
                discrete: !1
            })
        }
        ;
        return t.addEventListener("focusin", o),
        () => t.removeEventListener("focusin", o)
    }
    , [t, n]),
    {
        onFocusCapture: () => r.current = !0,
        onBlurCapture: () => r.current = !1
    }
}
function Nd() {
    const e = new CustomEvent(ku);
    document.dispatchEvent(e)
}
function Vm(e, t, n, {discrete: r}) {
    const o = n.originalEvent.target
      , i = new CustomEvent(e,{
        bubbles: !1,
        cancelable: !0,
        detail: n
    });
    t && o.addEventListener(e, t, {
        once: !0
    }),
    r ? Dm(o, i) : o.dispatchEvent(i)
}
var hs = 0;
function G1() {
    g.useEffect( () => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return document.body.insertAdjacentElement("afterbegin", e[0] ?? Td()),
        document.body.insertAdjacentElement("beforeend", e[1] ?? Td()),
        hs++,
        () => {
            hs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(t => t.remove()),
            hs--
        }
    }
    , [])
}
function Td() {
    const e = document.createElement("span");
    return e.setAttribute("data-radix-focus-guard", ""),
    e.tabIndex = 0,
    e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none",
    e
}
var vs = "focusScope.autoFocusOnMount"
  , gs = "focusScope.autoFocusOnUnmount"
  , Pd = {
    bubbles: !1,
    cancelable: !0
}
  , K1 = "FocusScope"
  , Um = g.forwardRef( (e, t) => {
    const {loop: n=!1, trapped: r=!1, onMountAutoFocus: o, onUnmountAutoFocus: i, ...l} = e
      , [s,u] = g.useState(null)
      , a = wt(o)
      , f = wt(i)
      , d = g.useRef(null)
      , m = je(t, h => u(h))
      , y = g.useRef({
        paused: !1,
        pause() {
            this.paused = !0
        },
        resume() {
            this.paused = !1
        }
    }).current;
    g.useEffect( () => {
        if (r) {
            let h = function(v) {
                if (y.paused || !s)
                    return;
                const x = v.target;
                s.contains(x) ? d.current = x : en(d.current, {
                    select: !0
                })
            }
              , E = function(v) {
                if (y.paused || !s)
                    return;
                const x = v.relatedTarget;
                x !== null && (s.contains(x) || en(d.current, {
                    select: !0
                }))
            }
              , c = function(v) {
                if (document.activeElement === document.body)
                    for (const C of v)
                        C.removedNodes.length > 0 && en(s)
            };
            document.addEventListener("focusin", h),
            document.addEventListener("focusout", E);
            const p = new MutationObserver(c);
            return s && p.observe(s, {
                childList: !0,
                subtree: !0
            }),
            () => {
                document.removeEventListener("focusin", h),
                document.removeEventListener("focusout", E),
                p.disconnect()
            }
        }
    }
    , [r, s, y.paused]),
    g.useEffect( () => {
        if (s) {
            Ad.add(y);
            const h = document.activeElement;
            if (!s.contains(h)) {
                const c = new CustomEvent(vs,Pd);
                s.addEventListener(vs, a),
                s.dispatchEvent(c),
                c.defaultPrevented || (Y1(q1(Bm(s)), {
                    select: !0
                }),
                document.activeElement === h && en(s))
            }
            return () => {
                s.removeEventListener(vs, a),
                setTimeout( () => {
                    const c = new CustomEvent(gs,Pd);
                    s.addEventListener(gs, f),
                    s.dispatchEvent(c),
                    c.defaultPrevented || en(h ?? document.body, {
                        select: !0
                    }),
                    s.removeEventListener(gs, f),
                    Ad.remove(y)
                }
                , 0)
            }
        }
    }
    , [s, a, f, y]);
    const w = g.useCallback(h => {
        if (!n && !r || y.paused)
            return;
        const E = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey
          , c = document.activeElement;
        if (E && c) {
            const p = h.currentTarget
              , [v,x] = Q1(p);
            v && x ? !h.shiftKey && c === x ? (h.preventDefault(),
            n && en(v, {
                select: !0
            })) : h.shiftKey && c === v && (h.preventDefault(),
            n && en(x, {
                select: !0
            })) : c === p && h.preventDefault()
        }
    }
    , [n, r, y.paused]);
    return S(Oe.div, {
        tabIndex: -1,
        ...l,
        ref: m,
        onKeyDown: w
    })
}
);
Um.displayName = K1;
function Y1(e, {select: t=!1}={}) {
    const n = document.activeElement;
    for (const r of e)
        if (en(r, {
            select: t
        }),
        document.activeElement !== n)
            return
}
function Q1(e) {
    const t = Bm(e)
      , n = Id(t, e)
      , r = Id(t.reverse(), e);
    return [n, r]
}
function Bm(e) {
    const t = []
      , n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
        acceptNode: r => {
            const o = r.tagName === "INPUT" && r.type === "hidden";
            return r.disabled || r.hidden || o ? NodeFilter.FILTER_SKIP : r.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
        }
    });
    for (; n.nextNode(); )
        t.push(n.currentNode);
    return t
}
function Id(e, t) {
    for (const n of e)
        if (!X1(n, {
            upTo: t
        }))
            return n
}
function X1(e, {upTo: t}) {
    if (getComputedStyle(e).visibility === "hidden")
        return !0;
    for (; e; ) {
        if (t !== void 0 && e === t)
            return !1;
        if (getComputedStyle(e).display === "none")
            return !0;
        e = e.parentElement
    }
    return !1
}
function Z1(e) {
    return e instanceof HTMLInputElement && "select"in e
}
function en(e, {select: t=!1}={}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({
            preventScroll: !0
        }),
        e !== n && Z1(e) && t && e.select()
    }
}
var Ad = J1();
function J1() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()),
            e = Md(e, t),
            e.unshift(t)
        },
        remove(t) {
            var n;
            e = Md(e, t),
            (n = e[0]) == null || n.resume()
        }
    }
}
function Md(e, t) {
    const n = [...e]
      , r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1),
    n
}
function q1(e) {
    return e.filter(t => t.tagName !== "A")
}
var Un = globalThis != null && globalThis.document ? g.useLayoutEffect : () => {}
  , eE = Uv["useId".toString()] || ( () => {}
)
  , tE = 0;
function Ru(e) {
    const [t,n] = g.useState(eE());
    return Un( () => {
        e || n(r => r ?? String(tE++))
    }
    , [e]),
    e || (t ? `radix-${t}` : "")
}
const nE = ["top", "right", "bottom", "left"]
  , Tt = Math.min
  , Ge = Math.max
  , rl = Math.round
  , fi = Math.floor
  , En = e => ({
    x: e,
    y: e
})
  , rE = {
    left: "right",
    right: "left",
    bottom: "top",
    top: "bottom"
}
  , oE = {
    start: "end",
    end: "start"
};
function Nu(e, t, n) {
    return Ge(e, Tt(t, n))
}
function Gt(e, t) {
    return typeof e == "function" ? e(t) : e
}
function Kt(e) {
    return e.split("-")[0]
}
function Mr(e) {
    return e.split("-")[1]
}
function La(e) {
    return e === "x" ? "y" : "x"
}
function za(e) {
    return e === "y" ? "height" : "width"
}
function Sn(e) {
    return ["top", "bottom"].includes(Kt(e)) ? "y" : "x"
}
function Fa(e) {
    return La(Sn(e))
}
function iE(e, t, n) {
    n === void 0 && (n = !1);
    const r = Mr(e)
      , o = Fa(e)
      , i = za(o);
    let l = o === "x" ? r === (n ? "end" : "start") ? "right" : "left" : r === "start" ? "bottom" : "top";
    return t.reference[i] > t.floating[i] && (l = ol(l)),
    [l, ol(l)]
}
function lE(e) {
    const t = ol(e);
    return [Tu(e), t, Tu(t)]
}
function Tu(e) {
    return e.replace(/start|end/g, t => oE[t])
}
function sE(e, t, n) {
    const r = ["left", "right"]
      , o = ["right", "left"]
      , i = ["top", "bottom"]
      , l = ["bottom", "top"];
    switch (e) {
    case "top":
    case "bottom":
        return n ? t ? o : r : t ? r : o;
    case "left":
    case "right":
        return t ? i : l;
    default:
        return []
    }
}
function uE(e, t, n, r) {
    const o = Mr(e);
    let i = sE(Kt(e), n === "start", r);
    return o && (i = i.map(l => l + "-" + o),
    t && (i = i.concat(i.map(Tu)))),
    i
}
function ol(e) {
    return e.replace(/left|right|bottom|top/g, t => rE[t])
}
function aE(e) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...e
    }
}
function jm(e) {
    return typeof e != "number" ? aE(e) : {
        top: e,
        right: e,
        bottom: e,
        left: e
    }
}
function il(e) {
    const {x: t, y: n, width: r, height: o} = e;
    return {
        width: r,
        height: o,
        top: n,
        left: t,
        right: t + r,
        bottom: n + o,
        x: t,
        y: n
    }
}
function Od(e, t, n) {
    let {reference: r, floating: o} = e;
    const i = Sn(t)
      , l = Fa(t)
      , s = za(l)
      , u = Kt(t)
      , a = i === "y"
      , f = r.x + r.width / 2 - o.width / 2
      , d = r.y + r.height / 2 - o.height / 2
      , m = r[s] / 2 - o[s] / 2;
    let y;
    switch (u) {
    case "top":
        y = {
            x: f,
            y: r.y - o.height
        };
        break;
    case "bottom":
        y = {
            x: f,
            y: r.y + r.height
        };
        break;
    case "right":
        y = {
            x: r.x + r.width,
            y: d
        };
        break;
    case "left":
        y = {
            x: r.x - o.width,
            y: d
        };
        break;
    default:
        y = {
            x: r.x,
            y: r.y
        }
    }
    switch (Mr(t)) {
    case "start":
        y[l] -= m * (n && a ? -1 : 1);
        break;
    case "end":
        y[l] += m * (n && a ? -1 : 1);
        break
    }
    return y
}
const cE = async (e, t, n) => {
    const {placement: r="bottom", strategy: o="absolute", middleware: i=[], platform: l} = n
      , s = i.filter(Boolean)
      , u = await (l.isRTL == null ? void 0 : l.isRTL(t));
    let a = await l.getElementRects({
        reference: e,
        floating: t,
        strategy: o
    })
      , {x: f, y: d} = Od(a, r, u)
      , m = r
      , y = {}
      , w = 0;
    for (let h = 0; h < s.length; h++) {
        const {name: E, fn: c} = s[h]
          , {x: p, y: v, data: x, reset: C} = await c({
            x: f,
            y: d,
            initialPlacement: r,
            placement: m,
            strategy: o,
            middlewareData: y,
            rects: a,
            platform: l,
            elements: {
                reference: e,
                floating: t
            }
        });
        f = p ?? f,
        d = v ?? d,
        y = {
            ...y,
            [E]: {
                ...y[E],
                ...x
            }
        },
        C && w <= 50 && (w++,
        typeof C == "object" && (C.placement && (m = C.placement),
        C.rects && (a = C.rects === !0 ? await l.getElementRects({
            reference: e,
            floating: t,
            strategy: o
        }) : C.rects),
        {x: f, y: d} = Od(a, m, u)),
        h = -1)
    }
    return {
        x: f,
        y: d,
        placement: m,
        strategy: o,
        middlewareData: y
    }
}
;
async function To(e, t) {
    var n;
    t === void 0 && (t = {});
    const {x: r, y: o, platform: i, rects: l, elements: s, strategy: u} = e
      , {boundary: a="clippingAncestors", rootBoundary: f="viewport", elementContext: d="floating", altBoundary: m=!1, padding: y=0} = Gt(t, e)
      , w = jm(y)
      , E = s[m ? d === "floating" ? "reference" : "floating" : d]
      , c = il(await i.getClippingRect({
        element: (n = await (i.isElement == null ? void 0 : i.isElement(E))) == null || n ? E : E.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(s.floating)),
        boundary: a,
        rootBoundary: f,
        strategy: u
    }))
      , p = d === "floating" ? {
        x: r,
        y: o,
        width: l.floating.width,
        height: l.floating.height
    } : l.reference
      , v = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(s.floating))
      , x = await (i.isElement == null ? void 0 : i.isElement(v)) ? await (i.getScale == null ? void 0 : i.getScale(v)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    }
      , C = il(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements: s,
        rect: p,
        offsetParent: v,
        strategy: u
    }) : p);
    return {
        top: (c.top - C.top + w.top) / x.y,
        bottom: (C.bottom - c.bottom + w.bottom) / x.y,
        left: (c.left - C.left + w.left) / x.x,
        right: (C.right - c.right + w.right) / x.x
    }
}
const dE = e => ({
    name: "arrow",
    options: e,
    async fn(t) {
        const {x: n, y: r, placement: o, rects: i, platform: l, elements: s, middlewareData: u} = t
          , {element: a, padding: f=0} = Gt(e, t) || {};
        if (a == null)
            return {};
        const d = jm(f)
          , m = {
            x: n,
            y: r
        }
          , y = Fa(o)
          , w = za(y)
          , h = await l.getDimensions(a)
          , E = y === "y"
          , c = E ? "top" : "left"
          , p = E ? "bottom" : "right"
          , v = E ? "clientHeight" : "clientWidth"
          , x = i.reference[w] + i.reference[y] - m[y] - i.floating[w]
          , C = m[y] - i.reference[y]
          , R = await (l.getOffsetParent == null ? void 0 : l.getOffsetParent(a));
        let k = R ? R[v] : 0;
        (!k || !await (l.isElement == null ? void 0 : l.isElement(R))) && (k = s.floating[v] || i.floating[w]);
        const _ = x / 2 - C / 2
          , A = k / 2 - h[w] / 2 - 1
          , T = Tt(d[c], A)
          , b = Tt(d[p], A)
          , M = T
          , B = k - h[w] - b
          , j = k / 2 - h[w] / 2 + _
          , X = Nu(M, j, B)
          , W = !u.arrow && Mr(o) != null && j !== X && i.reference[w] / 2 - (j < M ? T : b) - h[w] / 2 < 0
          , F = W ? j < M ? j - M : j - B : 0;
        return {
            [y]: m[y] + F,
            data: {
                [y]: X,
                centerOffset: j - X - F,
                ...W && {
                    alignmentOffset: F
                }
            },
            reset: W
        }
    }
})
  , fE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "flip",
        options: e,
        async fn(t) {
            var n, r;
            const {placement: o, middlewareData: i, rects: l, initialPlacement: s, platform: u, elements: a} = t
              , {mainAxis: f=!0, crossAxis: d=!0, fallbackPlacements: m, fallbackStrategy: y="bestFit", fallbackAxisSideDirection: w="none", flipAlignment: h=!0, ...E} = Gt(e, t);
            if ((n = i.arrow) != null && n.alignmentOffset)
                return {};
            const c = Kt(o)
              , p = Sn(s)
              , v = Kt(s) === s
              , x = await (u.isRTL == null ? void 0 : u.isRTL(a.floating))
              , C = m || (v || !h ? [ol(s)] : lE(s))
              , R = w !== "none";
            !m && R && C.push(...uE(s, h, w, x));
            const k = [s, ...C]
              , _ = await To(t, E)
              , A = [];
            let T = ((r = i.flip) == null ? void 0 : r.overflows) || [];
            if (f && A.push(_[c]),
            d) {
                const j = iE(o, l, x);
                A.push(_[j[0]], _[j[1]])
            }
            if (T = [...T, {
                placement: o,
                overflows: A
            }],
            !A.every(j => j <= 0)) {
                var b, M;
                const j = (((b = i.flip) == null ? void 0 : b.index) || 0) + 1
                  , X = k[j];
                if (X)
                    return {
                        data: {
                            index: j,
                            overflows: T
                        },
                        reset: {
                            placement: X
                        }
                    };
                let W = (M = T.filter(F => F.overflows[0] <= 0).sort( (F, P) => F.overflows[1] - P.overflows[1])[0]) == null ? void 0 : M.placement;
                if (!W)
                    switch (y) {
                    case "bestFit":
                        {
                            var B;
                            const F = (B = T.filter(P => {
                                if (R) {
                                    const N = Sn(P.placement);
                                    return N === p || N === "y"
                                }
                                return !0
                            }
                            ).map(P => [P.placement, P.overflows.filter(N => N > 0).reduce( (N, D) => N + D, 0)]).sort( (P, N) => P[1] - N[1])[0]) == null ? void 0 : B[0];
                            F && (W = F);
                            break
                        }
                    case "initialPlacement":
                        W = s;
                        break
                    }
                if (o !== W)
                    return {
                        reset: {
                            placement: W
                        }
                    }
            }
            return {}
        }
    }
};
function Dd(e, t) {
    return {
        top: e.top - t.height,
        right: e.right - t.width,
        bottom: e.bottom - t.height,
        left: e.left - t.width
    }
}
function bd(e) {
    return nE.some(t => e[t] >= 0)
}
const pE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "hide",
        options: e,
        async fn(t) {
            const {rects: n} = t
              , {strategy: r="referenceHidden", ...o} = Gt(e, t);
            switch (r) {
            case "referenceHidden":
                {
                    const i = await To(t, {
                        ...o,
                        elementContext: "reference"
                    })
                      , l = Dd(i, n.reference);
                    return {
                        data: {
                            referenceHiddenOffsets: l,
                            referenceHidden: bd(l)
                        }
                    }
                }
            case "escaped":
                {
                    const i = await To(t, {
                        ...o,
                        altBoundary: !0
                    })
                      , l = Dd(i, n.floating);
                    return {
                        data: {
                            escapedOffsets: l,
                            escaped: bd(l)
                        }
                    }
                }
            default:
                return {}
            }
        }
    }
};
async function mE(e, t) {
    const {placement: n, platform: r, elements: o} = e
      , i = await (r.isRTL == null ? void 0 : r.isRTL(o.floating))
      , l = Kt(n)
      , s = Mr(n)
      , u = Sn(n) === "y"
      , a = ["left", "top"].includes(l) ? -1 : 1
      , f = i && u ? -1 : 1
      , d = Gt(t, e);
    let {mainAxis: m, crossAxis: y, alignmentAxis: w} = typeof d == "number" ? {
        mainAxis: d,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: 0,
        crossAxis: 0,
        alignmentAxis: null,
        ...d
    };
    return s && typeof w == "number" && (y = s === "end" ? w * -1 : w),
    u ? {
        x: y * f,
        y: m * a
    } : {
        x: m * a,
        y: y * f
    }
}
const hE = function(e) {
    return e === void 0 && (e = 0),
    {
        name: "offset",
        options: e,
        async fn(t) {
            var n, r;
            const {x: o, y: i, placement: l, middlewareData: s} = t
              , u = await mE(t, e);
            return l === ((n = s.offset) == null ? void 0 : n.placement) && (r = s.arrow) != null && r.alignmentOffset ? {} : {
                x: o + u.x,
                y: i + u.y,
                data: {
                    ...u,
                    placement: l
                }
            }
        }
    }
}
  , vE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "shift",
        options: e,
        async fn(t) {
            const {x: n, y: r, placement: o} = t
              , {mainAxis: i=!0, crossAxis: l=!1, limiter: s={
                fn: E => {
                    let {x: c, y: p} = E;
                    return {
                        x: c,
                        y: p
                    }
                }
            }, ...u} = Gt(e, t)
              , a = {
                x: n,
                y: r
            }
              , f = await To(t, u)
              , d = Sn(Kt(o))
              , m = La(d);
            let y = a[m]
              , w = a[d];
            if (i) {
                const E = m === "y" ? "top" : "left"
                  , c = m === "y" ? "bottom" : "right"
                  , p = y + f[E]
                  , v = y - f[c];
                y = Nu(p, y, v)
            }
            if (l) {
                const E = d === "y" ? "top" : "left"
                  , c = d === "y" ? "bottom" : "right"
                  , p = w + f[E]
                  , v = w - f[c];
                w = Nu(p, w, v)
            }
            const h = s.fn({
                ...t,
                [m]: y,
                [d]: w
            });
            return {
                ...h,
                data: {
                    x: h.x - n,
                    y: h.y - r
                }
            }
        }
    }
}
  , gE = function(e) {
    return e === void 0 && (e = {}),
    {
        options: e,
        fn(t) {
            const {x: n, y: r, placement: o, rects: i, middlewareData: l} = t
              , {offset: s=0, mainAxis: u=!0, crossAxis: a=!0} = Gt(e, t)
              , f = {
                x: n,
                y: r
            }
              , d = Sn(o)
              , m = La(d);
            let y = f[m]
              , w = f[d];
            const h = Gt(s, t)
              , E = typeof h == "number" ? {
                mainAxis: h,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...h
            };
            if (u) {
                const v = m === "y" ? "height" : "width"
                  , x = i.reference[m] - i.floating[v] + E.mainAxis
                  , C = i.reference[m] + i.reference[v] - E.mainAxis;
                y < x ? y = x : y > C && (y = C)
            }
            if (a) {
                var c, p;
                const v = m === "y" ? "width" : "height"
                  , x = ["top", "left"].includes(Kt(o))
                  , C = i.reference[d] - i.floating[v] + (x && ((c = l.offset) == null ? void 0 : c[d]) || 0) + (x ? 0 : E.crossAxis)
                  , R = i.reference[d] + i.reference[v] + (x ? 0 : ((p = l.offset) == null ? void 0 : p[d]) || 0) - (x ? E.crossAxis : 0);
                w < C ? w = C : w > R && (w = R)
            }
            return {
                [m]: y,
                [d]: w
            }
        }
    }
}
  , yE = function(e) {
    return e === void 0 && (e = {}),
    {
        name: "size",
        options: e,
        async fn(t) {
            const {placement: n, rects: r, platform: o, elements: i} = t
              , {apply: l= () => {}
            , ...s} = Gt(e, t)
              , u = await To(t, s)
              , a = Kt(n)
              , f = Mr(n)
              , d = Sn(n) === "y"
              , {width: m, height: y} = r.floating;
            let w, h;
            a === "top" || a === "bottom" ? (w = a,
            h = f === (await (o.isRTL == null ? void 0 : o.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (h = a,
            w = f === "end" ? "top" : "bottom");
            const E = y - u.top - u.bottom
              , c = m - u.left - u.right
              , p = Tt(y - u[w], E)
              , v = Tt(m - u[h], c)
              , x = !t.middlewareData.shift;
            let C = p
              , R = v;
            if (d ? R = f || x ? Tt(v, c) : c : C = f || x ? Tt(p, E) : E,
            x && !f) {
                const _ = Ge(u.left, 0)
                  , A = Ge(u.right, 0)
                  , T = Ge(u.top, 0)
                  , b = Ge(u.bottom, 0);
                d ? R = m - 2 * (_ !== 0 || A !== 0 ? _ + A : Ge(u.left, u.right)) : C = y - 2 * (T !== 0 || b !== 0 ? T + b : Ge(u.top, u.bottom))
            }
            await l({
                ...t,
                availableWidth: R,
                availableHeight: C
            });
            const k = await o.getDimensions(i.floating);
            return m !== k.width || y !== k.height ? {
                reset: {
                    rects: !0
                }
            } : {}
        }
    }
};
function Or(e) {
    return $m(e) ? (e.nodeName || "").toLowerCase() : "#document"
}
function Qe(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window
}
function Qt(e) {
    var t;
    return (t = ($m(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement
}
function $m(e) {
    return e instanceof Node || e instanceof Qe(e).Node
}
function Et(e) {
    return e instanceof Element || e instanceof Qe(e).Element
}
function Mt(e) {
    return e instanceof HTMLElement || e instanceof Qe(e).HTMLElement
}
function Ld(e) {
    return typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof Qe(e).ShadowRoot
}
function Vo(e) {
    const {overflow: t, overflowX: n, overflowY: r, display: o} = St(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !["inline", "contents"].includes(o)
}
function wE(e) {
    return ["table", "td", "th"].includes(Or(e))
}
function Tl(e) {
    return [":popover-open", ":modal"].some(t => {
        try {
            return e.matches(t)
        } catch {
            return !1
        }
    }
    )
}
function Va(e) {
    const t = Ua()
      , n = Et(e) ? St(e) : e;
    return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : !1) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : !1) || !t && (n.filter ? n.filter !== "none" : !1) || ["transform", "perspective", "filter"].some(r => (n.willChange || "").includes(r)) || ["paint", "layout", "strict", "content"].some(r => (n.contain || "").includes(r))
}
function EE(e) {
    let t = xn(e);
    for (; Mt(t) && !Rr(t); ) {
        if (Va(t))
            return t;
        if (Tl(t))
            return null;
        t = xn(t)
    }
    return null
}
function Ua() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none")
}
function Rr(e) {
    return ["html", "body", "#document"].includes(Or(e))
}
function St(e) {
    return Qe(e).getComputedStyle(e)
}
function Pl(e) {
    return Et(e) ? {
        scrollLeft: e.scrollLeft,
        scrollTop: e.scrollTop
    } : {
        scrollLeft: e.scrollX,
        scrollTop: e.scrollY
    }
}
function xn(e) {
    if (Or(e) === "html")
        return e;
    const t = e.assignedSlot || e.parentNode || Ld(e) && e.host || Qt(e);
    return Ld(t) ? t.host : t
}
function Wm(e) {
    const t = xn(e);
    return Rr(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : Mt(t) && Vo(t) ? t : Wm(t)
}
function Po(e, t, n) {
    var r;
    t === void 0 && (t = []),
    n === void 0 && (n = !0);
    const o = Wm(e)
      , i = o === ((r = e.ownerDocument) == null ? void 0 : r.body)
      , l = Qe(o);
    if (i) {
        const s = Pu(l);
        return t.concat(l, l.visualViewport || [], Vo(o) ? o : [], s && n ? Po(s) : [])
    }
    return t.concat(o, Po(o, [], n))
}
function Pu(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
}
function Hm(e) {
    const t = St(e);
    let n = parseFloat(t.width) || 0
      , r = parseFloat(t.height) || 0;
    const o = Mt(e)
      , i = o ? e.offsetWidth : n
      , l = o ? e.offsetHeight : r
      , s = rl(n) !== i || rl(r) !== l;
    return s && (n = i,
    r = l),
    {
        width: n,
        height: r,
        $: s
    }
}
function Ba(e) {
    return Et(e) ? e : e.contextElement
}
function hr(e) {
    const t = Ba(e);
    if (!Mt(t))
        return En(1);
    const n = t.getBoundingClientRect()
      , {width: r, height: o, $: i} = Hm(t);
    let l = (i ? rl(n.width) : n.width) / r
      , s = (i ? rl(n.height) : n.height) / o;
    return (!l || !Number.isFinite(l)) && (l = 1),
    (!s || !Number.isFinite(s)) && (s = 1),
    {
        x: l,
        y: s
    }
}
const SE = En(0);
function Gm(e) {
    const t = Qe(e);
    return !Ua() || !t.visualViewport ? SE : {
        x: t.visualViewport.offsetLeft,
        y: t.visualViewport.offsetTop
    }
}
function xE(e, t, n) {
    return t === void 0 && (t = !1),
    !n || t && n !== Qe(e) ? !1 : t
}
function Bn(e, t, n, r) {
    t === void 0 && (t = !1),
    n === void 0 && (n = !1);
    const o = e.getBoundingClientRect()
      , i = Ba(e);
    let l = En(1);
    t && (r ? Et(r) && (l = hr(r)) : l = hr(e));
    const s = xE(i, n, r) ? Gm(i) : En(0);
    let u = (o.left + s.x) / l.x
      , a = (o.top + s.y) / l.y
      , f = o.width / l.x
      , d = o.height / l.y;
    if (i) {
        const m = Qe(i)
          , y = r && Et(r) ? Qe(r) : r;
        let w = m
          , h = Pu(w);
        for (; h && r && y !== w; ) {
            const E = hr(h)
              , c = h.getBoundingClientRect()
              , p = St(h)
              , v = c.left + (h.clientLeft + parseFloat(p.paddingLeft)) * E.x
              , x = c.top + (h.clientTop + parseFloat(p.paddingTop)) * E.y;
            u *= E.x,
            a *= E.y,
            f *= E.x,
            d *= E.y,
            u += v,
            a += x,
            w = Qe(h),
            h = Pu(w)
        }
    }
    return il({
        width: f,
        height: d,
        x: u,
        y: a
    })
}
function CE(e) {
    let {elements: t, rect: n, offsetParent: r, strategy: o} = e;
    const i = o === "fixed"
      , l = Qt(r)
      , s = t ? Tl(t.floating) : !1;
    if (r === l || s && i)
        return n;
    let u = {
        scrollLeft: 0,
        scrollTop: 0
    }
      , a = En(1);
    const f = En(0)
      , d = Mt(r);
    if ((d || !d && !i) && ((Or(r) !== "body" || Vo(l)) && (u = Pl(r)),
    Mt(r))) {
        const m = Bn(r);
        a = hr(r),
        f.x = m.x + r.clientLeft,
        f.y = m.y + r.clientTop
    }
    return {
        width: n.width * a.x,
        height: n.height * a.y,
        x: n.x * a.x - u.scrollLeft * a.x + f.x,
        y: n.y * a.y - u.scrollTop * a.y + f.y
    }
}
function _E(e) {
    return Array.from(e.getClientRects())
}
function Km(e) {
    return Bn(Qt(e)).left + Pl(e).scrollLeft
}
function kE(e) {
    const t = Qt(e)
      , n = Pl(e)
      , r = e.ownerDocument.body
      , o = Ge(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth)
      , i = Ge(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let l = -n.scrollLeft + Km(e);
    const s = -n.scrollTop;
    return St(r).direction === "rtl" && (l += Ge(t.clientWidth, r.clientWidth) - o),
    {
        width: o,
        height: i,
        x: l,
        y: s
    }
}
function RE(e, t) {
    const n = Qe(e)
      , r = Qt(e)
      , o = n.visualViewport;
    let i = r.clientWidth
      , l = r.clientHeight
      , s = 0
      , u = 0;
    if (o) {
        i = o.width,
        l = o.height;
        const a = Ua();
        (!a || a && t === "fixed") && (s = o.offsetLeft,
        u = o.offsetTop)
    }
    return {
        width: i,
        height: l,
        x: s,
        y: u
    }
}
function NE(e, t) {
    const n = Bn(e, !0, t === "fixed")
      , r = n.top + e.clientTop
      , o = n.left + e.clientLeft
      , i = Mt(e) ? hr(e) : En(1)
      , l = e.clientWidth * i.x
      , s = e.clientHeight * i.y
      , u = o * i.x
      , a = r * i.y;
    return {
        width: l,
        height: s,
        x: u,
        y: a
    }
}
function zd(e, t, n) {
    let r;
    if (t === "viewport")
        r = RE(e, n);
    else if (t === "document")
        r = kE(Qt(e));
    else if (Et(t))
        r = NE(t, n);
    else {
        const o = Gm(e);
        r = {
            ...t,
            x: t.x - o.x,
            y: t.y - o.y
        }
    }
    return il(r)
}
function Ym(e, t) {
    const n = xn(e);
    return n === t || !Et(n) || Rr(n) ? !1 : St(n).position === "fixed" || Ym(n, t)
}
function TE(e, t) {
    const n = t.get(e);
    if (n)
        return n;
    let r = Po(e, [], !1).filter(s => Et(s) && Or(s) !== "body")
      , o = null;
    const i = St(e).position === "fixed";
    let l = i ? xn(e) : e;
    for (; Et(l) && !Rr(l); ) {
        const s = St(l)
          , u = Va(l);
        !u && s.position === "fixed" && (o = null),
        (i ? !u && !o : !u && s.position === "static" && !!o && ["absolute", "fixed"].includes(o.position) || Vo(l) && !u && Ym(e, l)) ? r = r.filter(f => f !== l) : o = s,
        l = xn(l)
    }
    return t.set(e, r),
    r
}
function PE(e) {
    let {element: t, boundary: n, rootBoundary: r, strategy: o} = e;
    const l = [...n === "clippingAncestors" ? Tl(t) ? [] : TE(t, this._c) : [].concat(n), r]
      , s = l[0]
      , u = l.reduce( (a, f) => {
        const d = zd(t, f, o);
        return a.top = Ge(d.top, a.top),
        a.right = Tt(d.right, a.right),
        a.bottom = Tt(d.bottom, a.bottom),
        a.left = Ge(d.left, a.left),
        a
    }
    , zd(t, s, o));
    return {
        width: u.right - u.left,
        height: u.bottom - u.top,
        x: u.left,
        y: u.top
    }
}
function IE(e) {
    const {width: t, height: n} = Hm(e);
    return {
        width: t,
        height: n
    }
}
function AE(e, t, n) {
    const r = Mt(t)
      , o = Qt(t)
      , i = n === "fixed"
      , l = Bn(e, !0, i, t);
    let s = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const u = En(0);
    if (r || !r && !i)
        if ((Or(t) !== "body" || Vo(o)) && (s = Pl(t)),
        r) {
            const d = Bn(t, !0, i, t);
            u.x = d.x + t.clientLeft,
            u.y = d.y + t.clientTop
        } else
            o && (u.x = Km(o));
    const a = l.left + s.scrollLeft - u.x
      , f = l.top + s.scrollTop - u.y;
    return {
        x: a,
        y: f,
        width: l.width,
        height: l.height
    }
}
function ys(e) {
    return St(e).position === "static"
}
function Fd(e, t) {
    return !Mt(e) || St(e).position === "fixed" ? null : t ? t(e) : e.offsetParent
}
function Qm(e, t) {
    const n = Qe(e);
    if (Tl(e))
        return n;
    if (!Mt(e)) {
        let o = xn(e);
        for (; o && !Rr(o); ) {
            if (Et(o) && !ys(o))
                return o;
            o = xn(o)
        }
        return n
    }
    let r = Fd(e, t);
    for (; r && wE(r) && ys(r); )
        r = Fd(r, t);
    return r && Rr(r) && ys(r) && !Va(r) ? n : r || EE(e) || n
}
const ME = async function(e) {
    const t = this.getOffsetParent || Qm
      , n = this.getDimensions
      , r = await n(e.floating);
    return {
        reference: AE(e.reference, await t(e.floating), e.strategy),
        floating: {
            x: 0,
            y: 0,
            width: r.width,
            height: r.height
        }
    }
};
function OE(e) {
    return St(e).direction === "rtl"
}
const DE = {
    convertOffsetParentRelativeRectToViewportRelativeRect: CE,
    getDocumentElement: Qt,
    getClippingRect: PE,
    getOffsetParent: Qm,
    getElementRects: ME,
    getClientRects: _E,
    getDimensions: IE,
    getScale: hr,
    isElement: Et,
    isRTL: OE
};
function bE(e, t) {
    let n = null, r;
    const o = Qt(e);
    function i() {
        var s;
        clearTimeout(r),
        (s = n) == null || s.disconnect(),
        n = null
    }
    function l(s, u) {
        s === void 0 && (s = !1),
        u === void 0 && (u = 1),
        i();
        const {left: a, top: f, width: d, height: m} = e.getBoundingClientRect();
        if (s || t(),
        !d || !m)
            return;
        const y = fi(f)
          , w = fi(o.clientWidth - (a + d))
          , h = fi(o.clientHeight - (f + m))
          , E = fi(a)
          , p = {
            rootMargin: -y + "px " + -w + "px " + -h + "px " + -E + "px",
            threshold: Ge(0, Tt(1, u)) || 1
        };
        let v = !0;
        function x(C) {
            const R = C[0].intersectionRatio;
            if (R !== u) {
                if (!v)
                    return l();
                R ? l(!1, R) : r = setTimeout( () => {
                    l(!1, 1e-7)
                }
                , 1e3)
            }
            v = !1
        }
        try {
            n = new IntersectionObserver(x,{
                ...p,
                root: o.ownerDocument
            })
        } catch {
            n = new IntersectionObserver(x,p)
        }
        n.observe(e)
    }
    return l(!0),
    i
}
function LE(e, t, n, r) {
    r === void 0 && (r = {});
    const {ancestorScroll: o=!0, ancestorResize: i=!0, elementResize: l=typeof ResizeObserver == "function", layoutShift: s=typeof IntersectionObserver == "function", animationFrame: u=!1} = r
      , a = Ba(e)
      , f = o || i ? [...a ? Po(a) : [], ...Po(t)] : [];
    f.forEach(c => {
        o && c.addEventListener("scroll", n, {
            passive: !0
        }),
        i && c.addEventListener("resize", n)
    }
    );
    const d = a && s ? bE(a, n) : null;
    let m = -1
      , y = null;
    l && (y = new ResizeObserver(c => {
        let[p] = c;
        p && p.target === a && y && (y.unobserve(t),
        cancelAnimationFrame(m),
        m = requestAnimationFrame( () => {
            var v;
            (v = y) == null || v.observe(t)
        }
        )),
        n()
    }
    ),
    a && !u && y.observe(a),
    y.observe(t));
    let w, h = u ? Bn(e) : null;
    u && E();
    function E() {
        const c = Bn(e);
        h && (c.x !== h.x || c.y !== h.y || c.width !== h.width || c.height !== h.height) && n(),
        h = c,
        w = requestAnimationFrame(E)
    }
    return n(),
    () => {
        var c;
        f.forEach(p => {
            o && p.removeEventListener("scroll", n),
            i && p.removeEventListener("resize", n)
        }
        ),
        d == null || d(),
        (c = y) == null || c.disconnect(),
        y = null,
        u && cancelAnimationFrame(w)
    }
}
const zE = hE
  , FE = vE
  , VE = fE
  , UE = yE
  , BE = pE
  , Vd = dE
  , jE = gE
  , $E = (e, t, n) => {
    const r = new Map
      , o = {
        platform: DE,
        ...n
    }
      , i = {
        ...o.platform,
        _c: r
    };
    return cE(e, t, {
        ...o,
        platform: i
    })
}
;
var Ii = typeof document < "u" ? g.useLayoutEffect : g.useEffect;
function ll(e, t) {
    if (e === t)
        return !0;
    if (typeof e != typeof t)
        return !1;
    if (typeof e == "function" && e.toString() === t.toString())
        return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (n = e.length,
            n !== t.length)
                return !1;
            for (r = n; r-- !== 0; )
                if (!ll(e[r], t[r]))
                    return !1;
            return !0
        }
        if (o = Object.keys(e),
        n = o.length,
        n !== Object.keys(t).length)
            return !1;
        for (r = n; r-- !== 0; )
            if (!{}.hasOwnProperty.call(t, o[r]))
                return !1;
        for (r = n; r-- !== 0; ) {
            const i = o[r];
            if (!(i === "_owner" && e.$$typeof) && !ll(e[i], t[i]))
                return !1
        }
        return !0
    }
    return e !== e && t !== t
}
function Xm(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
}
function Ud(e, t) {
    const n = Xm(e);
    return Math.round(t * n) / n
}
function Bd(e) {
    const t = g.useRef(e);
    return Ii( () => {
        t.current = e
    }
    ),
    t
}
function WE(e) {
    e === void 0 && (e = {});
    const {placement: t="bottom", strategy: n="absolute", middleware: r=[], platform: o, elements: {reference: i, floating: l}={}, transform: s=!0, whileElementsMounted: u, open: a} = e
      , [f,d] = g.useState({
        x: 0,
        y: 0,
        strategy: n,
        placement: t,
        middlewareData: {},
        isPositioned: !1
    })
      , [m,y] = g.useState(r);
    ll(m, r) || y(r);
    const [w,h] = g.useState(null)
      , [E,c] = g.useState(null)
      , p = g.useCallback(F => {
        F !== R.current && (R.current = F,
        h(F))
    }
    , [])
      , v = g.useCallback(F => {
        F !== k.current && (k.current = F,
        c(F))
    }
    , [])
      , x = i || w
      , C = l || E
      , R = g.useRef(null)
      , k = g.useRef(null)
      , _ = g.useRef(f)
      , A = u != null
      , T = Bd(u)
      , b = Bd(o)
      , M = g.useCallback( () => {
        if (!R.current || !k.current)
            return;
        const F = {
            placement: t,
            strategy: n,
            middleware: m
        };
        b.current && (F.platform = b.current),
        $E(R.current, k.current, F).then(P => {
            const N = {
                ...P,
                isPositioned: !0
            };
            B.current && !ll(_.current, N) && (_.current = N,
            zo.flushSync( () => {
                d(N)
            }
            ))
        }
        )
    }
    , [m, t, n, b]);
    Ii( () => {
        a === !1 && _.current.isPositioned && (_.current.isPositioned = !1,
        d(F => ({
            ...F,
            isPositioned: !1
        })))
    }
    , [a]);
    const B = g.useRef(!1);
    Ii( () => (B.current = !0,
    () => {
        B.current = !1
    }
    ), []),
    Ii( () => {
        if (x && (R.current = x),
        C && (k.current = C),
        x && C) {
            if (T.current)
                return T.current(x, C, M);
            M()
        }
    }
    , [x, C, M, T, A]);
    const j = g.useMemo( () => ({
        reference: R,
        floating: k,
        setReference: p,
        setFloating: v
    }), [p, v])
      , X = g.useMemo( () => ({
        reference: x,
        floating: C
    }), [x, C])
      , W = g.useMemo( () => {
        const F = {
            position: n,
            left: 0,
            top: 0
        };
        if (!X.floating)
            return F;
        const P = Ud(X.floating, f.x)
          , N = Ud(X.floating, f.y);
        return s ? {
            ...F,
            transform: "translate(" + P + "px, " + N + "px)",
            ...Xm(X.floating) >= 1.5 && {
                willChange: "transform"
            }
        } : {
            position: n,
            left: P,
            top: N
        }
    }
    , [n, s, X.floating, f.x, f.y]);
    return g.useMemo( () => ({
        ...f,
        update: M,
        refs: j,
        elements: X,
        floatingStyles: W
    }), [f, M, j, X, W])
}
const HE = e => {
    function t(n) {
        return {}.hasOwnProperty.call(n, "current")
    }
    return {
        name: "arrow",
        options: e,
        fn(n) {
            const {element: r, padding: o} = typeof e == "function" ? e(n) : e;
            return r && t(r) ? r.current != null ? Vd({
                element: r.current,
                padding: o
            }).fn(n) : {} : r ? Vd({
                element: r,
                padding: o
            }).fn(n) : {}
        }
    }
}
  , GE = (e, t) => ({
    ...zE(e),
    options: [e, t]
})
  , KE = (e, t) => ({
    ...FE(e),
    options: [e, t]
})
  , YE = (e, t) => ({
    ...jE(e),
    options: [e, t]
})
  , QE = (e, t) => ({
    ...VE(e),
    options: [e, t]
})
  , XE = (e, t) => ({
    ...UE(e),
    options: [e, t]
})
  , ZE = (e, t) => ({
    ...BE(e),
    options: [e, t]
})
  , JE = (e, t) => ({
    ...HE(e),
    options: [e, t]
});
var qE = "Arrow"
  , Zm = g.forwardRef( (e, t) => {
    const {children: n, width: r=10, height: o=5, ...i} = e;
    return S(Oe.svg, {
        ...i,
        ref: t,
        width: r,
        height: o,
        viewBox: "0 0 30 10",
        preserveAspectRatio: "none",
        children: e.asChild ? n : S("polygon", {
            points: "0,0 30,0 15,10"
        })
    })
}
);
Zm.displayName = qE;
var eS = Zm;
function tS(e) {
    const [t,n] = g.useState(void 0);
    return Un( () => {
        if (e) {
            n({
                width: e.offsetWidth,
                height: e.offsetHeight
            });
            const r = new ResizeObserver(o => {
                if (!Array.isArray(o) || !o.length)
                    return;
                const i = o[0];
                let l, s;
                if ("borderBoxSize"in i) {
                    const u = i.borderBoxSize
                      , a = Array.isArray(u) ? u[0] : u;
                    l = a.inlineSize,
                    s = a.blockSize
                } else
                    l = e.offsetWidth,
                    s = e.offsetHeight;
                n({
                    width: l,
                    height: s
                })
            }
            );
            return r.observe(e, {
                box: "border-box"
            }),
            () => r.unobserve(e)
        } else
            n(void 0)
    }
    , [e]),
    t
}
var ja = "Popper"
  , [Jm,qm] = Fo(ja)
  , [nS,eh] = Jm(ja)
  , th = e => {
    const {__scopePopper: t, children: n} = e
      , [r,o] = g.useState(null);
    return S(nS, {
        scope: t,
        anchor: r,
        onAnchorChange: o,
        children: n
    })
}
;
th.displayName = ja;
var nh = "PopperAnchor"
  , rh = g.forwardRef( (e, t) => {
    const {__scopePopper: n, virtualRef: r, ...o} = e
      , i = eh(nh, n)
      , l = g.useRef(null)
      , s = je(t, l);
    return g.useEffect( () => {
        i.onAnchorChange((r == null ? void 0 : r.current) || l.current)
    }
    ),
    r ? null : S(Oe.div, {
        ...o,
        ref: s
    })
}
);
rh.displayName = nh;
var $a = "PopperContent"
  , [rS,oS] = Jm($a)
  , oh = g.forwardRef( (e, t) => {
    var ye, Rn, be, ut, Dr, Z;
    const {__scopePopper: n, side: r="bottom", sideOffset: o=0, align: i="center", alignOffset: l=0, arrowPadding: s=0, avoidCollisions: u=!0, collisionBoundary: a=[], collisionPadding: f=0, sticky: d="partial", hideWhenDetached: m=!1, updatePositionStrategy: y="optimized", onPlaced: w, ...h} = e
      , E = eh($a, n)
      , [c,p] = g.useState(null)
      , v = je(t, Y => p(Y))
      , [x,C] = g.useState(null)
      , R = tS(x)
      , k = (R == null ? void 0 : R.width) ?? 0
      , _ = (R == null ? void 0 : R.height) ?? 0
      , A = r + (i !== "center" ? "-" + i : "")
      , T = typeof f == "number" ? f : {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...f
    }
      , b = Array.isArray(a) ? a : [a]
      , M = b.length > 0
      , B = {
        padding: T,
        boundary: b.filter(lS),
        altBoundary: M
    }
      , {refs: j, floatingStyles: X, placement: W, isPositioned: F, middlewareData: P} = WE({
        strategy: "fixed",
        placement: A,
        whileElementsMounted: (...Y) => LE(...Y, {
            animationFrame: y === "always"
        }),
        elements: {
            reference: E.anchor
        },
        middleware: [GE({
            mainAxis: o + _,
            alignmentAxis: l
        }), u && KE({
            mainAxis: !0,
            crossAxis: !1,
            limiter: d === "partial" ? YE() : void 0,
            ...B
        }), u && QE({
            ...B
        }), XE({
            ...B,
            apply: ({elements: Y, rects: de, availableWidth: re, availableHeight: qe}) => {
                const {width: Xt, height: fe} = de.reference
                  , ae = Y.floating.style;
                ae.setProperty("--radix-popper-available-width", `${re}px`),
                ae.setProperty("--radix-popper-available-height", `${qe}px`),
                ae.setProperty("--radix-popper-anchor-width", `${Xt}px`),
                ae.setProperty("--radix-popper-anchor-height", `${fe}px`)
            }
        }), x && JE({
            element: x,
            padding: s
        }), sS({
            arrowWidth: k,
            arrowHeight: _
        }), m && ZE({
            strategy: "referenceHidden",
            ...B
        })]
    })
      , [N,D] = sh(W)
      , L = wt(w);
    Un( () => {
        F && (L == null || L())
    }
    , [F, L]);
    const V = (ye = P.arrow) == null ? void 0 : ye.x
      , Te = (Rn = P.arrow) == null ? void 0 : Rn.y
      , xe = ((be = P.arrow) == null ? void 0 : be.centerOffset) !== 0
      , [$e,he] = g.useState();
    return Un( () => {
        c && he(window.getComputedStyle(c).zIndex)
    }
    , [c]),
    S("div", {
        ref: j.setFloating,
        "data-radix-popper-content-wrapper": "",
        style: {
            ...X,
            transform: F ? X.transform : "translate(0, -200%)",
            minWidth: "max-content",
            zIndex: $e,
            "--radix-popper-transform-origin": [(ut = P.transformOrigin) == null ? void 0 : ut.x, (Dr = P.transformOrigin) == null ? void 0 : Dr.y].join(" "),
            ...((Z = P.hide) == null ? void 0 : Z.referenceHidden) && {
                visibility: "hidden",
                pointerEvents: "none"
            }
        },
        dir: e.dir,
        children: S(rS, {
            scope: n,
            placedSide: N,
            onArrowChange: C,
            arrowX: V,
            arrowY: Te,
            shouldHideArrow: xe,
            children: S(Oe.div, {
                "data-side": N,
                "data-align": D,
                ...h,
                ref: v,
                style: {
                    ...h.style,
                    animation: F ? void 0 : "none"
                }
            })
        })
    })
}
);
oh.displayName = $a;
var ih = "PopperArrow"
  , iS = {
    top: "bottom",
    right: "left",
    bottom: "top",
    left: "right"
}
  , lh = g.forwardRef(function(t, n) {
    const {__scopePopper: r, ...o} = t
      , i = oS(ih, r)
      , l = iS[i.placedSide];
    return S("span", {
        ref: i.onArrowChange,
        style: {
            position: "absolute",
            left: i.arrowX,
            top: i.arrowY,
            [l]: 0,
            transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
            }[i.placedSide],
            transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
            }[i.placedSide],
            visibility: i.shouldHideArrow ? "hidden" : void 0
        },
        children: S(eS, {
            ...o,
            ref: n,
            style: {
                ...o.style,
                display: "block"
            }
        })
    })
});
lh.displayName = ih;
function lS(e) {
    return e !== null
}
var sS = e => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var E, c, p;
        const {placement: n, rects: r, middlewareData: o} = t
          , l = ((E = o.arrow) == null ? void 0 : E.centerOffset) !== 0
          , s = l ? 0 : e.arrowWidth
          , u = l ? 0 : e.arrowHeight
          , [a,f] = sh(n)
          , d = {
            start: "0%",
            center: "50%",
            end: "100%"
        }[f]
          , m = (((c = o.arrow) == null ? void 0 : c.x) ?? 0) + s / 2
          , y = (((p = o.arrow) == null ? void 0 : p.y) ?? 0) + u / 2;
        let w = ""
          , h = "";
        return a === "bottom" ? (w = l ? d : `${m}px`,
        h = `${-u}px`) : a === "top" ? (w = l ? d : `${m}px`,
        h = `${r.floating.height + u}px`) : a === "right" ? (w = `${-u}px`,
        h = l ? d : `${y}px`) : a === "left" && (w = `${r.floating.width + u}px`,
        h = l ? d : `${y}px`),
        {
            data: {
                x: w,
                y: h
            }
        }
    }
});
function sh(e) {
    const [t,n="center"] = e.split("-");
    return [t, n]
}
var uS = th
  , aS = rh
  , cS = oh
  , dS = lh
  , fS = "Portal"
  , uh = g.forwardRef( (e, t) => {
    var s;
    const {container: n, ...r} = e
      , [o,i] = g.useState(!1);
    Un( () => i(!0), []);
    const l = n || o && ((s = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : s.body);
    return l ? Zy.createPortal(S(Oe.div, {
        ...r,
        ref: t
    }), l) : null
}
);
uh.displayName = fS;
function pS(e, t) {
    return g.useReducer( (n, r) => t[n][r] ?? n, e)
}
var Uo = e => {
    const {present: t, children: n} = e
      , r = mS(t)
      , o = typeof n == "function" ? n({
        present: r.isPresent
    }) : g.Children.only(n)
      , i = je(r.ref, hS(o));
    return typeof n == "function" || r.isPresent ? g.cloneElement(o, {
        ref: i
    }) : null
}
;
Uo.displayName = "Presence";
function mS(e) {
    const [t,n] = g.useState()
      , r = g.useRef({})
      , o = g.useRef(e)
      , i = g.useRef("none")
      , l = e ? "mounted" : "unmounted"
      , [s,u] = pS(l, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    return g.useEffect( () => {
        const a = pi(r.current);
        i.current = s === "mounted" ? a : "none"
    }
    , [s]),
    Un( () => {
        const a = r.current
          , f = o.current;
        if (f !== e) {
            const m = i.current
              , y = pi(a);
            e ? u("MOUNT") : y === "none" || (a == null ? void 0 : a.display) === "none" ? u("UNMOUNT") : u(f && m !== y ? "ANIMATION_OUT" : "UNMOUNT"),
            o.current = e
        }
    }
    , [e, u]),
    Un( () => {
        if (t) {
            const a = d => {
                const y = pi(r.current).includes(d.animationName);
                d.target === t && y && zo.flushSync( () => u("ANIMATION_END"))
            }
              , f = d => {
                d.target === t && (i.current = pi(r.current))
            }
            ;
            return t.addEventListener("animationstart", f),
            t.addEventListener("animationcancel", a),
            t.addEventListener("animationend", a),
            () => {
                t.removeEventListener("animationstart", f),
                t.removeEventListener("animationcancel", a),
                t.removeEventListener("animationend", a)
            }
        } else
            u("ANIMATION_END")
    }
    , [t, u]),
    {
        isPresent: ["mounted", "unmountSuspended"].includes(s),
        ref: g.useCallback(a => {
            a && (r.current = getComputedStyle(a)),
            n(a)
        }
        , [])
    }
}
function pi(e) {
    return (e == null ? void 0 : e.animationName) || "none"
}
function hS(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get
      , n = t && "isReactWarning"in t && t.isReactWarning;
    return n ? e.ref : (t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get,
    n = t && "isReactWarning"in t && t.isReactWarning,
    n ? e.props.ref : e.props.ref || e.ref)
}
var ws = "rovingFocusGroup.onEntryFocus"
  , vS = {
    bubbles: !1,
    cancelable: !0
}
  , Il = "RovingFocusGroup"
  , [Iu,ah,gS] = bm(Il)
  , [yS,ch] = Fo(Il, [gS])
  , [wS,ES] = yS(Il)
  , dh = g.forwardRef( (e, t) => S(Iu.Provider, {
    scope: e.__scopeRovingFocusGroup,
    children: S(Iu.Slot, {
        scope: e.__scopeRovingFocusGroup,
        children: S(SS, {
            ...e,
            ref: t
        })
    })
}));
dh.displayName = Il;
var SS = g.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, orientation: r, loop: o=!1, dir: i, currentTabStopId: l, defaultCurrentTabStopId: s, onCurrentTabStopIdChange: u, onEntryFocus: a, preventScrollOnEntryFocus: f=!1, ...d} = e
      , m = g.useRef(null)
      , y = je(t, m)
      , w = Lm(i)
      , [h=null,E] = Om({
        prop: l,
        defaultProp: s,
        onChange: u
    })
      , [c,p] = g.useState(!1)
      , v = wt(a)
      , x = ah(n)
      , C = g.useRef(!1)
      , [R,k] = g.useState(0);
    return g.useEffect( () => {
        const _ = m.current;
        if (_)
            return _.addEventListener(ws, v),
            () => _.removeEventListener(ws, v)
    }
    , [v]),
    S(wS, {
        scope: n,
        orientation: r,
        dir: w,
        loop: o,
        currentTabStopId: h,
        onItemFocus: g.useCallback(_ => E(_), [E]),
        onItemShiftTab: g.useCallback( () => p(!0), []),
        onFocusableItemAdd: g.useCallback( () => k(_ => _ + 1), []),
        onFocusableItemRemove: g.useCallback( () => k(_ => _ - 1), []),
        children: S(Oe.div, {
            tabIndex: c || R === 0 ? -1 : 0,
            "data-orientation": r,
            ...d,
            ref: y,
            style: {
                outline: "none",
                ...e.style
            },
            onMouseDown: H(e.onMouseDown, () => {
                C.current = !0
            }
            ),
            onFocus: H(e.onFocus, _ => {
                const A = !C.current;
                if (_.target === _.currentTarget && A && !c) {
                    const T = new CustomEvent(ws,vS);
                    if (_.currentTarget.dispatchEvent(T),
                    !T.defaultPrevented) {
                        const b = x().filter(W => W.focusable)
                          , M = b.find(W => W.active)
                          , B = b.find(W => W.id === h)
                          , X = [M, B, ...b].filter(Boolean).map(W => W.ref.current);
                        mh(X, f)
                    }
                }
                C.current = !1
            }
            ),
            onBlur: H(e.onBlur, () => p(!1))
        })
    })
}
)
  , fh = "RovingFocusGroupItem"
  , ph = g.forwardRef( (e, t) => {
    const {__scopeRovingFocusGroup: n, focusable: r=!0, active: o=!1, tabStopId: i, ...l} = e
      , s = Ru()
      , u = i || s
      , a = ES(fh, n)
      , f = a.currentTabStopId === u
      , d = ah(n)
      , {onFocusableItemAdd: m, onFocusableItemRemove: y} = a;
    return g.useEffect( () => {
        if (r)
            return m(),
            () => y()
    }
    , [r, m, y]),
    S(Iu.ItemSlot, {
        scope: n,
        id: u,
        focusable: r,
        active: o,
        children: S(Oe.span, {
            tabIndex: f ? 0 : -1,
            "data-orientation": a.orientation,
            ...l,
            ref: t,
            onMouseDown: H(e.onMouseDown, w => {
                r ? a.onItemFocus(u) : w.preventDefault()
            }
            ),
            onFocus: H(e.onFocus, () => a.onItemFocus(u)),
            onKeyDown: H(e.onKeyDown, w => {
                if (w.key === "Tab" && w.shiftKey) {
                    a.onItemShiftTab();
                    return
                }
                if (w.target !== w.currentTarget)
                    return;
                const h = _S(w, a.orientation, a.dir);
                if (h !== void 0) {
                    if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey)
                        return;
                    w.preventDefault();
                    let c = d().filter(p => p.focusable).map(p => p.ref.current);
                    if (h === "last")
                        c.reverse();
                    else if (h === "prev" || h === "next") {
                        h === "prev" && c.reverse();
                        const p = c.indexOf(w.currentTarget);
                        c = a.loop ? kS(c, p + 1) : c.slice(p + 1)
                    }
                    setTimeout( () => mh(c))
                }
            }
            )
        })
    })
}
);
ph.displayName = fh;
var xS = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last"
};
function CS(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e
}
function _S(e, t, n) {
    const r = CS(e.key, n);
    if (!(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) && !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r)))
        return xS[r]
}
function mh(e, t=!1) {
    const n = document.activeElement;
    for (const r of e)
        if (r === n || (r.focus({
            preventScroll: t
        }),
        document.activeElement !== n))
            return
}
function kS(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
var RS = dh
  , NS = ph
  , TS = function(e) {
    if (typeof document > "u")
        return null;
    var t = Array.isArray(e) ? e[0] : e;
    return t.ownerDocument.body
}
  , Yn = new WeakMap
  , mi = new WeakMap
  , hi = {}
  , Es = 0
  , hh = function(e) {
    return e && (e.host || hh(e.parentNode))
}
  , PS = function(e, t) {
    return t.map(function(n) {
        if (e.contains(n))
            return n;
        var r = hh(n);
        return r && e.contains(r) ? r : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"),
        null)
    }).filter(function(n) {
        return !!n
    })
}
  , IS = function(e, t, n, r) {
    var o = PS(t, Array.isArray(e) ? e : [e]);
    hi[n] || (hi[n] = new WeakMap);
    var i = hi[n]
      , l = []
      , s = new Set
      , u = new Set(o)
      , a = function(d) {
        !d || s.has(d) || (s.add(d),
        a(d.parentNode))
    };
    o.forEach(a);
    var f = function(d) {
        !d || u.has(d) || Array.prototype.forEach.call(d.children, function(m) {
            if (s.has(m))
                f(m);
            else
                try {
                    var y = m.getAttribute(r)
                      , w = y !== null && y !== "false"
                      , h = (Yn.get(m) || 0) + 1
                      , E = (i.get(m) || 0) + 1;
                    Yn.set(m, h),
                    i.set(m, E),
                    l.push(m),
                    h === 1 && w && mi.set(m, !0),
                    E === 1 && m.setAttribute(n, "true"),
                    w || m.setAttribute(r, "true")
                } catch (c) {
                    console.error("aria-hidden: cannot operate on ", m, c)
                }
        })
    };
    return f(t),
    s.clear(),
    Es++,
    function() {
        l.forEach(function(d) {
            var m = Yn.get(d) - 1
              , y = i.get(d) - 1;
            Yn.set(d, m),
            i.set(d, y),
            m || (mi.has(d) || d.removeAttribute(r),
            mi.delete(d)),
            y || d.removeAttribute(n)
        }),
        Es--,
        Es || (Yn = new WeakMap,
        Yn = new WeakMap,
        mi = new WeakMap,
        hi = {})
    }
}
  , AS = function(e, t, n) {
    n === void 0 && (n = "data-aria-hidden");
    var r = Array.from(Array.isArray(e) ? e : [e])
      , o = t || TS(e);
    return o ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live]"))),
    IS(r, o, n, "aria-hidden")) : function() {
        return null
    }
}
  , Nt = function() {
    return Nt = Object.assign || function(t) {
        for (var n, r = 1, o = arguments.length; r < o; r++) {
            n = arguments[r];
            for (var i in n)
                Object.prototype.hasOwnProperty.call(n, i) && (t[i] = n[i])
        }
        return t
    }
    ,
    Nt.apply(this, arguments)
};
function vh(e, t) {
    var n = {};
    for (var r in e)
        Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n
}
function MS(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, i; r < o; r++)
            (i || !(r in t)) && (i || (i = Array.prototype.slice.call(t, 0, r)),
            i[r] = t[r]);
    return e.concat(i || Array.prototype.slice.call(t))
}
var Ai = "right-scroll-bar-position"
  , Mi = "width-before-scroll-bar"
  , OS = "with-scroll-bars-hidden"
  , DS = "--removed-body-scroll-bar-size";
function Ss(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t),
    e
}
function bS(e, t) {
    var n = g.useState(function() {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value
                },
                set current(r) {
                    var o = n.value;
                    o !== r && (n.value = r,
                    n.callback(r, o))
                }
            }
        }
    })[0];
    return n.callback = t,
    n.facade
}
var LS = typeof window < "u" ? g.useLayoutEffect : g.useEffect
  , jd = new WeakMap;
function zS(e, t) {
    var n = bS(t || null, function(r) {
        return e.forEach(function(o) {
            return Ss(o, r)
        })
    });
    return LS(function() {
        var r = jd.get(n);
        if (r) {
            var o = new Set(r)
              , i = new Set(e)
              , l = n.current;
            o.forEach(function(s) {
                i.has(s) || Ss(s, null)
            }),
            i.forEach(function(s) {
                o.has(s) || Ss(s, l)
            })
        }
        jd.set(n, e)
    }, [e]),
    n
}
function FS(e) {
    return e
}
function VS(e, t) {
    t === void 0 && (t = FS);
    var n = []
      , r = !1
      , o = {
        read: function() {
            if (r)
                throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : e
        },
        useMedium: function(i) {
            var l = t(i, r);
            return n.push(l),
            function() {
                n = n.filter(function(s) {
                    return s !== l
                })
            }
        },
        assignSyncMedium: function(i) {
            for (r = !0; n.length; ) {
                var l = n;
                n = [],
                l.forEach(i)
            }
            n = {
                push: function(s) {
                    return i(s)
                },
                filter: function() {
                    return n
                }
            }
        },
        assignMedium: function(i) {
            r = !0;
            var l = [];
            if (n.length) {
                var s = n;
                n = [],
                s.forEach(i),
                l = n
            }
            var u = function() {
                var f = l;
                l = [],
                f.forEach(i)
            }
              , a = function() {
                return Promise.resolve().then(u)
            };
            a(),
            n = {
                push: function(f) {
                    l.push(f),
                    a()
                },
                filter: function(f) {
                    return l = l.filter(f),
                    n
                }
            }
        }
    };
    return o
}
function US(e) {
    e === void 0 && (e = {});
    var t = VS(null);
    return t.options = Nt({
        async: !0,
        ssr: !1
    }, e),
    t
}
var gh = function(e) {
    var t = e.sideCar
      , n = vh(e, ["sideCar"]);
    if (!t)
        throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r)
        throw new Error("Sidecar medium not found");
    return g.createElement(r, Nt({}, n))
};
gh.isSideCarExport = !0;
function BS(e, t) {
    return e.useMedium(t),
    gh
}
var yh = US()
  , xs = function() {}
  , Al = g.forwardRef(function(e, t) {
    var n = g.useRef(null)
      , r = g.useState({
        onScrollCapture: xs,
        onWheelCapture: xs,
        onTouchMoveCapture: xs
    })
      , o = r[0]
      , i = r[1]
      , l = e.forwardProps
      , s = e.children
      , u = e.className
      , a = e.removeScrollBar
      , f = e.enabled
      , d = e.shards
      , m = e.sideCar
      , y = e.noIsolation
      , w = e.inert
      , h = e.allowPinchZoom
      , E = e.as
      , c = E === void 0 ? "div" : E
      , p = e.gapMode
      , v = vh(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"])
      , x = m
      , C = zS([n, t])
      , R = Nt(Nt({}, v), o);
    return g.createElement(g.Fragment, null, f && g.createElement(x, {
        sideCar: yh,
        removeScrollBar: a,
        shards: d,
        noIsolation: y,
        inert: w,
        setCallbacks: i,
        allowPinchZoom: !!h,
        lockRef: n,
        gapMode: p
    }), l ? g.cloneElement(g.Children.only(s), Nt(Nt({}, R), {
        ref: C
    })) : g.createElement(c, Nt({}, R, {
        className: u,
        ref: C
    }), s))
});
Al.defaultProps = {
    enabled: !0,
    removeScrollBar: !0,
    inert: !1
};
Al.classNames = {
    fullWidth: Mi,
    zeroRight: Ai
};
var $d, jS = function() {
    if ($d)
        return $d;
    if (typeof __webpack_nonce__ < "u")
        return __webpack_nonce__
};
function $S() {
    if (!document)
        return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = jS();
    return t && e.setAttribute("nonce", t),
    e
}
function WS(e, t) {
    e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t))
}
function HS(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e)
}
var GS = function() {
    var e = 0
      , t = null;
    return {
        add: function(n) {
            e == 0 && (t = $S()) && (WS(t, n),
            HS(t)),
            e++
        },
        remove: function() {
            e--,
            !e && t && (t.parentNode && t.parentNode.removeChild(t),
            t = null)
        }
    }
}
  , KS = function() {
    var e = GS();
    return function(t, n) {
        g.useEffect(function() {
            return e.add(t),
            function() {
                e.remove()
            }
        }, [t && n])
    }
}
  , wh = function() {
    var e = KS()
      , t = function(n) {
        var r = n.styles
          , o = n.dynamic;
        return e(r, o),
        null
    };
    return t
}
  , YS = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
}
  , Cs = function(e) {
    return parseInt(e || "", 10) || 0
}
  , QS = function(e) {
    var t = window.getComputedStyle(document.body)
      , n = t[e === "padding" ? "paddingLeft" : "marginLeft"]
      , r = t[e === "padding" ? "paddingTop" : "marginTop"]
      , o = t[e === "padding" ? "paddingRight" : "marginRight"];
    return [Cs(n), Cs(r), Cs(o)]
}
  , XS = function(e) {
    if (e === void 0 && (e = "margin"),
    typeof window > "u")
        return YS;
    var t = QS(e)
      , n = document.documentElement.clientWidth
      , r = window.innerWidth;
    return {
        left: t[0],
        top: t[1],
        right: t[2],
        gap: Math.max(0, r - n + t[2] - t[0])
    }
}
  , ZS = wh()
  , vr = "data-scroll-locked"
  , JS = function(e, t, n, r) {
    var o = e.left
      , i = e.top
      , l = e.right
      , s = e.gap;
    return n === void 0 && (n = "margin"),
    `
  .`.concat(OS, ` {
   overflow: hidden `).concat(r, `;
   padding-right: `).concat(s, "px ").concat(r, `;
  }
  body[`).concat(vr, `] {
    overflow: hidden `).concat(r, `;
    overscroll-behavior: contain;
    `).concat([t && "position: relative ".concat(r, ";"), n === "margin" && `
    padding-left: `.concat(o, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(l, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(s, "px ").concat(r, `;
    `), n === "padding" && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), `
  }
  
  .`).concat(Ai, ` {
    right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Mi, ` {
    margin-right: `).concat(s, "px ").concat(r, `;
  }
  
  .`).concat(Ai, " .").concat(Ai, ` {
    right: 0 `).concat(r, `;
  }
  
  .`).concat(Mi, " .").concat(Mi, ` {
    margin-right: 0 `).concat(r, `;
  }
  
  body[`).concat(vr, `] {
    `).concat(DS, ": ").concat(s, `px;
  }
`)
}
  , Wd = function() {
    var e = parseInt(document.body.getAttribute(vr) || "0", 10);
    return isFinite(e) ? e : 0
}
  , qS = function() {
    g.useEffect(function() {
        return document.body.setAttribute(vr, (Wd() + 1).toString()),
        function() {
            var e = Wd() - 1;
            e <= 0 ? document.body.removeAttribute(vr) : document.body.setAttribute(vr, e.toString())
        }
    }, [])
}
  , ex = function(e) {
    var t = e.noRelative
      , n = e.noImportant
      , r = e.gapMode
      , o = r === void 0 ? "margin" : r;
    qS();
    var i = g.useMemo(function() {
        return XS(o)
    }, [o]);
    return g.createElement(ZS, {
        styles: JS(i, !t, o, n ? "" : "!important")
    })
}
  , Au = !1;
if (typeof window < "u")
    try {
        var vi = Object.defineProperty({}, "passive", {
            get: function() {
                return Au = !0,
                !0
            }
        });
        window.addEventListener("test", vi, vi),
        window.removeEventListener("test", vi, vi)
    } catch {
        Au = !1
    }
var Qn = Au ? {
    passive: !1
} : !1
  , tx = function(e) {
    return e.tagName === "TEXTAREA"
}
  , Eh = function(e, t) {
    var n = window.getComputedStyle(e);
    return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !tx(e) && n[t] === "visible")
}
  , nx = function(e) {
    return Eh(e, "overflowY")
}
  , rx = function(e) {
    return Eh(e, "overflowX")
}
  , Hd = function(e, t) {
    var n = t.ownerDocument
      , r = t;
    do {
        typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
        var o = Sh(e, r);
        if (o) {
            var i = xh(e, r)
              , l = i[1]
              , s = i[2];
            if (l > s)
                return !0
        }
        r = r.parentNode
    } while (r && r !== n.body);
    return !1
}
  , ox = function(e) {
    var t = e.scrollTop
      , n = e.scrollHeight
      , r = e.clientHeight;
    return [t, n, r]
}
  , ix = function(e) {
    var t = e.scrollLeft
      , n = e.scrollWidth
      , r = e.clientWidth;
    return [t, n, r]
}
  , Sh = function(e, t) {
    return e === "v" ? nx(t) : rx(t)
}
  , xh = function(e, t) {
    return e === "v" ? ox(t) : ix(t)
}
  , lx = function(e, t) {
    return e === "h" && t === "rtl" ? -1 : 1
}
  , sx = function(e, t, n, r, o) {
    var i = lx(e, window.getComputedStyle(t).direction)
      , l = i * r
      , s = n.target
      , u = t.contains(s)
      , a = !1
      , f = l > 0
      , d = 0
      , m = 0;
    do {
        var y = xh(e, s)
          , w = y[0]
          , h = y[1]
          , E = y[2]
          , c = h - E - i * w;
        (w || c) && Sh(e, s) && (d += c,
        m += w),
        s instanceof ShadowRoot ? s = s.host : s = s.parentNode
    } while (!u && s !== document.body || u && (t.contains(s) || t === s));
    return (f && (o && Math.abs(d) < 1 || !o && l > d) || !f && (o && Math.abs(m) < 1 || !o && -l > m)) && (a = !0),
    a
}
  , gi = function(e) {
    return "changedTouches"in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
}
  , Gd = function(e) {
    return [e.deltaX, e.deltaY]
}
  , Kd = function(e) {
    return e && "current"in e ? e.current : e
}
  , ux = function(e, t) {
    return e[0] === t[0] && e[1] === t[1]
}
  , ax = function(e) {
    return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`)
}
  , cx = 0
  , Xn = [];
function dx(e) {
    var t = g.useRef([])
      , n = g.useRef([0, 0])
      , r = g.useRef()
      , o = g.useState(cx++)[0]
      , i = g.useState(wh)[0]
      , l = g.useRef(e);
    g.useEffect(function() {
        l.current = e
    }, [e]),
    g.useEffect(function() {
        if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(o));
            var h = MS([e.lockRef.current], (e.shards || []).map(Kd), !0).filter(Boolean);
            return h.forEach(function(E) {
                return E.classList.add("allow-interactivity-".concat(o))
            }),
            function() {
                document.body.classList.remove("block-interactivity-".concat(o)),
                h.forEach(function(E) {
                    return E.classList.remove("allow-interactivity-".concat(o))
                })
            }
        }
    }, [e.inert, e.lockRef.current, e.shards]);
    var s = g.useCallback(function(h, E) {
        if ("touches"in h && h.touches.length === 2)
            return !l.current.allowPinchZoom;
        var c = gi(h), p = n.current, v = "deltaX"in h ? h.deltaX : p[0] - c[0], x = "deltaY"in h ? h.deltaY : p[1] - c[1], C, R = h.target, k = Math.abs(v) > Math.abs(x) ? "h" : "v";
        if ("touches"in h && k === "h" && R.type === "range")
            return !1;
        var _ = Hd(k, R);
        if (!_)
            return !0;
        if (_ ? C = k : (C = k === "v" ? "h" : "v",
        _ = Hd(k, R)),
        !_)
            return !1;
        if (!r.current && "changedTouches"in h && (v || x) && (r.current = C),
        !C)
            return !0;
        var A = r.current || C;
        return sx(A, E, h, A === "h" ? v : x, !0)
    }, [])
      , u = g.useCallback(function(h) {
        var E = h;
        if (!(!Xn.length || Xn[Xn.length - 1] !== i)) {
            var c = "deltaY"in E ? Gd(E) : gi(E)
              , p = t.current.filter(function(C) {
                return C.name === E.type && (C.target === E.target || E.target === C.shadowParent) && ux(C.delta, c)
            })[0];
            if (p && p.should) {
                E.cancelable && E.preventDefault();
                return
            }
            if (!p) {
                var v = (l.current.shards || []).map(Kd).filter(Boolean).filter(function(C) {
                    return C.contains(E.target)
                })
                  , x = v.length > 0 ? s(E, v[0]) : !l.current.noIsolation;
                x && E.cancelable && E.preventDefault()
            }
        }
    }, [])
      , a = g.useCallback(function(h, E, c, p) {
        var v = {
            name: h,
            delta: E,
            target: c,
            should: p,
            shadowParent: fx(c)
        };
        t.current.push(v),
        setTimeout(function() {
            t.current = t.current.filter(function(x) {
                return x !== v
            })
        }, 1)
    }, [])
      , f = g.useCallback(function(h) {
        n.current = gi(h),
        r.current = void 0
    }, [])
      , d = g.useCallback(function(h) {
        a(h.type, Gd(h), h.target, s(h, e.lockRef.current))
    }, [])
      , m = g.useCallback(function(h) {
        a(h.type, gi(h), h.target, s(h, e.lockRef.current))
    }, []);
    g.useEffect(function() {
        return Xn.push(i),
        e.setCallbacks({
            onScrollCapture: d,
            onWheelCapture: d,
            onTouchMoveCapture: m
        }),
        document.addEventListener("wheel", u, Qn),
        document.addEventListener("touchmove", u, Qn),
        document.addEventListener("touchstart", f, Qn),
        function() {
            Xn = Xn.filter(function(h) {
                return h !== i
            }),
            document.removeEventListener("wheel", u, Qn),
            document.removeEventListener("touchmove", u, Qn),
            document.removeEventListener("touchstart", f, Qn)
        }
    }, []);
    var y = e.removeScrollBar
      , w = e.inert;
    return g.createElement(g.Fragment, null, w ? g.createElement(i, {
        styles: ax(o)
    }) : null, y ? g.createElement(ex, {
        gapMode: e.gapMode
    }) : null)
}
function fx(e) {
    for (var t = null; e !== null; )
        e instanceof ShadowRoot && (t = e.host,
        e = e.host),
        e = e.parentNode;
    return t
}
const px = BS(yh, dx);
var Ch = g.forwardRef(function(e, t) {
    return g.createElement(Al, Nt({}, e, {
        ref: t,
        sideCar: px
    }))
});
Ch.classNames = Al.classNames;
const mx = Ch;
var Mu = ["Enter", " "]
  , hx = ["ArrowDown", "PageUp", "Home"]
  , _h = ["ArrowUp", "PageDown", "End"]
  , vx = [...hx, ..._h]
  , gx = {
    ltr: [...Mu, "ArrowRight"],
    rtl: [...Mu, "ArrowLeft"]
}
  , yx = {
    ltr: ["ArrowLeft"],
    rtl: ["ArrowRight"]
}
  , Bo = "Menu"
  , [Io,wx,Ex] = bm(Bo)
  , [Wn,kh] = Fo(Bo, [Ex, qm, ch])
  , Ml = qm()
  , Rh = ch()
  , [Sx,Hn] = Wn(Bo)
  , [xx,jo] = Wn(Bo)
  , Nh = e => {
    const {__scopeMenu: t, open: n=!1, children: r, dir: o, onOpenChange: i, modal: l=!0} = e
      , s = Ml(t)
      , [u,a] = g.useState(null)
      , f = g.useRef(!1)
      , d = wt(i)
      , m = Lm(o);
    return g.useEffect( () => {
        const y = () => {
            f.current = !0,
            document.addEventListener("pointerdown", w, {
                capture: !0,
                once: !0
            }),
            document.addEventListener("pointermove", w, {
                capture: !0,
                once: !0
            })
        }
          , w = () => f.current = !1;
        return document.addEventListener("keydown", y, {
            capture: !0
        }),
        () => {
            document.removeEventListener("keydown", y, {
                capture: !0
            }),
            document.removeEventListener("pointerdown", w, {
                capture: !0
            }),
            document.removeEventListener("pointermove", w, {
                capture: !0
            })
        }
    }
    , []),
    S(uS, {
        ...s,
        children: S(Sx, {
            scope: t,
            open: n,
            onOpenChange: d,
            content: u,
            onContentChange: a,
            children: S(xx, {
                scope: t,
                onClose: g.useCallback( () => d(!1), [d]),
                isUsingKeyboardRef: f,
                dir: m,
                modal: l,
                children: r
            })
        })
    })
}
;
Nh.displayName = Bo;
var Cx = "MenuAnchor"
  , Wa = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e
      , o = Ml(n);
    return S(aS, {
        ...o,
        ...r,
        ref: t
    })
}
);
Wa.displayName = Cx;
var Ha = "MenuPortal"
  , [_x,Th] = Wn(Ha, {
    forceMount: void 0
})
  , Ph = e => {
    const {__scopeMenu: t, forceMount: n, children: r, container: o} = e
      , i = Hn(Ha, t);
    return S(_x, {
        scope: t,
        forceMount: n,
        children: S(Uo, {
            present: n || i.open,
            children: S(uh, {
                asChild: !0,
                container: o,
                children: r
            })
        })
    })
}
;
Ph.displayName = Ha;
var it = "MenuContent"
  , [kx,Ga] = Wn(it)
  , Ih = g.forwardRef( (e, t) => {
    const n = Th(it, e.__scopeMenu)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Hn(it, e.__scopeMenu)
      , l = jo(it, e.__scopeMenu);
    return S(Io.Provider, {
        scope: e.__scopeMenu,
        children: S(Uo, {
            present: r || i.open,
            children: S(Io.Slot, {
                scope: e.__scopeMenu,
                children: l.modal ? S(Rx, {
                    ...o,
                    ref: t
                }) : S(Nx, {
                    ...o,
                    ref: t
                })
            })
        })
    })
}
)
  , Rx = g.forwardRef( (e, t) => {
    const n = Hn(it, e.__scopeMenu)
      , r = g.useRef(null)
      , o = je(t, r);
    return g.useEffect( () => {
        const i = r.current;
        if (i)
            return AS(i)
    }
    , []),
    S(Ka, {
        ...e,
        ref: o,
        trapFocus: n.open,
        disableOutsidePointerEvents: n.open,
        disableOutsideScroll: !0,
        onFocusOutside: H(e.onFocusOutside, i => i.preventDefault(), {
            checkForDefaultPrevented: !1
        }),
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , Nx = g.forwardRef( (e, t) => {
    const n = Hn(it, e.__scopeMenu);
    return S(Ka, {
        ...e,
        ref: t,
        trapFocus: !1,
        disableOutsidePointerEvents: !1,
        disableOutsideScroll: !1,
        onDismiss: () => n.onOpenChange(!1)
    })
}
)
  , Ka = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, loop: r=!1, trapFocus: o, onOpenAutoFocus: i, onCloseAutoFocus: l, disableOutsidePointerEvents: s, onEntryFocus: u, onEscapeKeyDown: a, onPointerDownOutside: f, onFocusOutside: d, onInteractOutside: m, onDismiss: y, disableOutsideScroll: w, ...h} = e
      , E = Hn(it, n)
      , c = jo(it, n)
      , p = Ml(n)
      , v = Rh(n)
      , x = wx(n)
      , [C,R] = g.useState(null)
      , k = g.useRef(null)
      , _ = je(t, k, E.onContentChange)
      , A = g.useRef(0)
      , T = g.useRef("")
      , b = g.useRef(0)
      , M = g.useRef(null)
      , B = g.useRef("right")
      , j = g.useRef(0)
      , X = w ? mx : g.Fragment
      , W = w ? {
        as: kr,
        allowPinchZoom: !0
    } : void 0
      , F = N => {
        var ye, Rn;
        const D = T.current + N
          , L = x().filter(be => !be.disabled)
          , V = document.activeElement
          , Te = (ye = L.find(be => be.ref.current === V)) == null ? void 0 : ye.textValue
          , xe = L.map(be => be.textValue)
          , $e = Vx(xe, D, Te)
          , he = (Rn = L.find(be => be.textValue === $e)) == null ? void 0 : Rn.ref.current;
        (function be(ut) {
            T.current = ut,
            window.clearTimeout(A.current),
            ut !== "" && (A.current = window.setTimeout( () => be(""), 1e3))
        }
        )(D),
        he && setTimeout( () => he.focus())
    }
    ;
    g.useEffect( () => () => window.clearTimeout(A.current), []),
    G1();
    const P = g.useCallback(N => {
        var L, V;
        return B.current === ((L = M.current) == null ? void 0 : L.side) && Bx(N, (V = M.current) == null ? void 0 : V.area)
    }
    , []);
    return S(kx, {
        scope: n,
        searchRef: T,
        onItemEnter: g.useCallback(N => {
            P(N) && N.preventDefault()
        }
        , [P]),
        onItemLeave: g.useCallback(N => {
            var D;
            P(N) || ((D = k.current) == null || D.focus(),
            R(null))
        }
        , [P]),
        onTriggerLeave: g.useCallback(N => {
            P(N) && N.preventDefault()
        }
        , [P]),
        pointerGraceTimerRef: b,
        onPointerGraceIntentChange: g.useCallback(N => {
            M.current = N
        }
        , []),
        children: S(X, {
            ...W,
            children: S(Um, {
                asChild: !0,
                trapped: o,
                onMountAutoFocus: H(i, N => {
                    var D;
                    N.preventDefault(),
                    (D = k.current) == null || D.focus({
                        preventScroll: !0
                    })
                }
                ),
                onUnmountAutoFocus: l,
                children: S(Fm, {
                    asChild: !0,
                    disableOutsidePointerEvents: s,
                    onEscapeKeyDown: a,
                    onPointerDownOutside: f,
                    onFocusOutside: d,
                    onInteractOutside: m,
                    onDismiss: y,
                    children: S(RS, {
                        asChild: !0,
                        ...v,
                        dir: c.dir,
                        orientation: "vertical",
                        loop: r,
                        currentTabStopId: C,
                        onCurrentTabStopIdChange: R,
                        onEntryFocus: H(u, N => {
                            c.isUsingKeyboardRef.current || N.preventDefault()
                        }
                        ),
                        preventScrollOnEntryFocus: !0,
                        children: S(cS, {
                            role: "menu",
                            "aria-orientation": "vertical",
                            "data-state": Gh(E.open),
                            "data-radix-menu-content": "",
                            dir: c.dir,
                            ...p,
                            ...h,
                            ref: _,
                            style: {
                                outline: "none",
                                ...h.style
                            },
                            onKeyDown: H(h.onKeyDown, N => {
                                const L = N.target.closest("[data-radix-menu-content]") === N.currentTarget
                                  , V = N.ctrlKey || N.altKey || N.metaKey
                                  , Te = N.key.length === 1;
                                L && (N.key === "Tab" && N.preventDefault(),
                                !V && Te && F(N.key));
                                const xe = k.current;
                                if (N.target !== xe || !vx.includes(N.key))
                                    return;
                                N.preventDefault();
                                const he = x().filter(ye => !ye.disabled).map(ye => ye.ref.current);
                                _h.includes(N.key) && he.reverse(),
                                zx(he)
                            }
                            ),
                            onBlur: H(e.onBlur, N => {
                                N.currentTarget.contains(N.target) || (window.clearTimeout(A.current),
                                T.current = "")
                            }
                            ),
                            onPointerMove: H(e.onPointerMove, Ao(N => {
                                const D = N.target
                                  , L = j.current !== N.clientX;
                                if (N.currentTarget.contains(D) && L) {
                                    const V = N.clientX > j.current ? "right" : "left";
                                    B.current = V,
                                    j.current = N.clientX
                                }
                            }
                            ))
                        })
                    })
                })
            })
        })
    })
}
);
Ih.displayName = it;
var Tx = "MenuGroup"
  , Ya = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return S(Oe.div, {
        role: "group",
        ...r,
        ref: t
    })
}
);
Ya.displayName = Tx;
var Px = "MenuLabel"
  , Ah = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return S(Oe.div, {
        ...r,
        ref: t
    })
}
);
Ah.displayName = Px;
var sl = "MenuItem"
  , Yd = "menu.itemSelect"
  , Ol = g.forwardRef( (e, t) => {
    const {disabled: n=!1, onSelect: r, ...o} = e
      , i = g.useRef(null)
      , l = jo(sl, e.__scopeMenu)
      , s = Ga(sl, e.__scopeMenu)
      , u = je(t, i)
      , a = g.useRef(!1)
      , f = () => {
        const d = i.current;
        if (!n && d) {
            const m = new CustomEvent(Yd,{
                bubbles: !0,
                cancelable: !0
            });
            d.addEventListener(Yd, y => r == null ? void 0 : r(y), {
                once: !0
            }),
            Dm(d, m),
            m.defaultPrevented ? a.current = !1 : l.onClose()
        }
    }
    ;
    return S(Mh, {
        ...o,
        ref: u,
        disabled: n,
        onClick: H(e.onClick, f),
        onPointerDown: d => {
            var m;
            (m = e.onPointerDown) == null || m.call(e, d),
            a.current = !0
        }
        ,
        onPointerUp: H(e.onPointerUp, d => {
            var m;
            a.current || (m = d.currentTarget) == null || m.click()
        }
        ),
        onKeyDown: H(e.onKeyDown, d => {
            const m = s.searchRef.current !== "";
            n || m && d.key === " " || Mu.includes(d.key) && (d.currentTarget.click(),
            d.preventDefault())
        }
        )
    })
}
);
Ol.displayName = sl;
var Mh = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, disabled: r=!1, textValue: o, ...i} = e
      , l = Ga(sl, n)
      , s = Rh(n)
      , u = g.useRef(null)
      , a = je(t, u)
      , [f,d] = g.useState(!1)
      , [m,y] = g.useState("");
    return g.useEffect( () => {
        const w = u.current;
        w && y((w.textContent ?? "").trim())
    }
    , [i.children]),
    S(Io.ItemSlot, {
        scope: n,
        disabled: r,
        textValue: o ?? m,
        children: S(NS, {
            asChild: !0,
            ...s,
            focusable: !r,
            children: S(Oe.div, {
                role: "menuitem",
                "data-highlighted": f ? "" : void 0,
                "aria-disabled": r || void 0,
                "data-disabled": r ? "" : void 0,
                ...i,
                ref: a,
                onPointerMove: H(e.onPointerMove, Ao(w => {
                    r ? l.onItemLeave(w) : (l.onItemEnter(w),
                    w.defaultPrevented || w.currentTarget.focus({
                        preventScroll: !0
                    }))
                }
                )),
                onPointerLeave: H(e.onPointerLeave, Ao(w => l.onItemLeave(w))),
                onFocus: H(e.onFocus, () => d(!0)),
                onBlur: H(e.onBlur, () => d(!1))
            })
        })
    })
}
)
  , Ix = "MenuCheckboxItem"
  , Oh = g.forwardRef( (e, t) => {
    const {checked: n=!1, onCheckedChange: r, ...o} = e;
    return S(Fh, {
        scope: e.__scopeMenu,
        checked: n,
        children: S(Ol, {
            role: "menuitemcheckbox",
            "aria-checked": ul(n) ? "mixed" : n,
            ...o,
            ref: t,
            "data-state": Xa(n),
            onSelect: H(o.onSelect, () => r == null ? void 0 : r(ul(n) ? !0 : !n), {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
Oh.displayName = Ix;
var Dh = "MenuRadioGroup"
  , [Ax,Mx] = Wn(Dh, {
    value: void 0,
    onValueChange: () => {}
})
  , bh = g.forwardRef( (e, t) => {
    const {value: n, onValueChange: r, ...o} = e
      , i = wt(r);
    return S(Ax, {
        scope: e.__scopeMenu,
        value: n,
        onValueChange: i,
        children: S(Ya, {
            ...o,
            ref: t
        })
    })
}
);
bh.displayName = Dh;
var Lh = "MenuRadioItem"
  , zh = g.forwardRef( (e, t) => {
    const {value: n, ...r} = e
      , o = Mx(Lh, e.__scopeMenu)
      , i = n === o.value;
    return S(Fh, {
        scope: e.__scopeMenu,
        checked: i,
        children: S(Ol, {
            role: "menuitemradio",
            "aria-checked": i,
            ...r,
            ref: t,
            "data-state": Xa(i),
            onSelect: H(r.onSelect, () => {
                var l;
                return (l = o.onValueChange) == null ? void 0 : l.call(o, n)
            }
            , {
                checkForDefaultPrevented: !1
            })
        })
    })
}
);
zh.displayName = Lh;
var Qa = "MenuItemIndicator"
  , [Fh,Ox] = Wn(Qa, {
    checked: !1
})
  , Vh = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, forceMount: r, ...o} = e
      , i = Ox(Qa, n);
    return S(Uo, {
        present: r || ul(i.checked) || i.checked === !0,
        children: S(Oe.span, {
            ...o,
            ref: t,
            "data-state": Xa(i.checked)
        })
    })
}
);
Vh.displayName = Qa;
var Dx = "MenuSeparator"
  , Uh = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e;
    return S(Oe.div, {
        role: "separator",
        "aria-orientation": "horizontal",
        ...r,
        ref: t
    })
}
);
Uh.displayName = Dx;
var bx = "MenuArrow"
  , Bh = g.forwardRef( (e, t) => {
    const {__scopeMenu: n, ...r} = e
      , o = Ml(n);
    return S(dS, {
        ...o,
        ...r,
        ref: t
    })
}
);
Bh.displayName = bx;
var Lx = "MenuSub"
  , [LC,jh] = Wn(Lx)
  , Zr = "MenuSubTrigger"
  , $h = g.forwardRef( (e, t) => {
    const n = Hn(Zr, e.__scopeMenu)
      , r = jo(Zr, e.__scopeMenu)
      , o = jh(Zr, e.__scopeMenu)
      , i = Ga(Zr, e.__scopeMenu)
      , l = g.useRef(null)
      , {pointerGraceTimerRef: s, onPointerGraceIntentChange: u} = i
      , a = {
        __scopeMenu: e.__scopeMenu
    }
      , f = g.useCallback( () => {
        l.current && window.clearTimeout(l.current),
        l.current = null
    }
    , []);
    return g.useEffect( () => f, [f]),
    g.useEffect( () => {
        const d = s.current;
        return () => {
            window.clearTimeout(d),
            u(null)
        }
    }
    , [s, u]),
    S(Wa, {
        asChild: !0,
        ...a,
        children: S(Mh, {
            id: o.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": n.open,
            "aria-controls": o.contentId,
            "data-state": Gh(n.open),
            ...e,
            ref: Nl(t, o.onTriggerChange),
            onClick: d => {
                var m;
                (m = e.onClick) == null || m.call(e, d),
                !(e.disabled || d.defaultPrevented) && (d.currentTarget.focus(),
                n.open || n.onOpenChange(!0))
            }
            ,
            onPointerMove: H(e.onPointerMove, Ao(d => {
                i.onItemEnter(d),
                !d.defaultPrevented && !e.disabled && !n.open && !l.current && (i.onPointerGraceIntentChange(null),
                l.current = window.setTimeout( () => {
                    n.onOpenChange(!0),
                    f()
                }
                , 100))
            }
            )),
            onPointerLeave: H(e.onPointerLeave, Ao(d => {
                var y, w;
                f();
                const m = (y = n.content) == null ? void 0 : y.getBoundingClientRect();
                if (m) {
                    const h = (w = n.content) == null ? void 0 : w.dataset.side
                      , E = h === "right"
                      , c = E ? -5 : 5
                      , p = m[E ? "left" : "right"]
                      , v = m[E ? "right" : "left"];
                    i.onPointerGraceIntentChange({
                        area: [{
                            x: d.clientX + c,
                            y: d.clientY
                        }, {
                            x: p,
                            y: m.top
                        }, {
                            x: v,
                            y: m.top
                        }, {
                            x: v,
                            y: m.bottom
                        }, {
                            x: p,
                            y: m.bottom
                        }],
                        side: h
                    }),
                    window.clearTimeout(s.current),
                    s.current = window.setTimeout( () => i.onPointerGraceIntentChange(null), 300)
                } else {
                    if (i.onTriggerLeave(d),
                    d.defaultPrevented)
                        return;
                    i.onPointerGraceIntentChange(null)
                }
            }
            )),
            onKeyDown: H(e.onKeyDown, d => {
                var y;
                const m = i.searchRef.current !== "";
                e.disabled || m && d.key === " " || gx[r.dir].includes(d.key) && (n.onOpenChange(!0),
                (y = n.content) == null || y.focus(),
                d.preventDefault())
            }
            )
        })
    })
}
);
$h.displayName = Zr;
var Wh = "MenuSubContent"
  , Hh = g.forwardRef( (e, t) => {
    const n = Th(it, e.__scopeMenu)
      , {forceMount: r=n.forceMount, ...o} = e
      , i = Hn(it, e.__scopeMenu)
      , l = jo(it, e.__scopeMenu)
      , s = jh(Wh, e.__scopeMenu)
      , u = g.useRef(null)
      , a = je(t, u);
    return S(Io.Provider, {
        scope: e.__scopeMenu,
        children: S(Uo, {
            present: r || i.open,
            children: S(Io.Slot, {
                scope: e.__scopeMenu,
                children: S(Ka, {
                    id: s.contentId,
                    "aria-labelledby": s.triggerId,
                    ...o,
                    ref: a,
                    align: "start",
                    side: l.dir === "rtl" ? "left" : "right",
                    disableOutsidePointerEvents: !1,
                    disableOutsideScroll: !1,
                    trapFocus: !1,
                    onOpenAutoFocus: f => {
                        var d;
                        l.isUsingKeyboardRef.current && ((d = u.current) == null || d.focus()),
                        f.preventDefault()
                    }
                    ,
                    onCloseAutoFocus: f => f.preventDefault(),
                    onFocusOutside: H(e.onFocusOutside, f => {
                        f.target !== s.trigger && i.onOpenChange(!1)
                    }
                    ),
                    onEscapeKeyDown: H(e.onEscapeKeyDown, f => {
                        l.onClose(),
                        f.preventDefault()
                    }
                    ),
                    onKeyDown: H(e.onKeyDown, f => {
                        var y;
                        const d = f.currentTarget.contains(f.target)
                          , m = yx[l.dir].includes(f.key);
                        d && m && (i.onOpenChange(!1),
                        (y = s.trigger) == null || y.focus(),
                        f.preventDefault())
                    }
                    )
                })
            })
        })
    })
}
);
Hh.displayName = Wh;
function Gh(e) {
    return e ? "open" : "closed"
}
function ul(e) {
    return e === "indeterminate"
}
function Xa(e) {
    return ul(e) ? "indeterminate" : e ? "checked" : "unchecked"
}
function zx(e) {
    const t = document.activeElement;
    for (const n of e)
        if (n === t || (n.focus(),
        document.activeElement !== t))
            return
}
function Fx(e, t) {
    return e.map( (n, r) => e[(t + r) % e.length])
}
function Vx(e, t, n) {
    const o = t.length > 1 && Array.from(t).every(a => a === t[0]) ? t[0] : t
      , i = n ? e.indexOf(n) : -1;
    let l = Fx(e, Math.max(i, 0));
    o.length === 1 && (l = l.filter(a => a !== n));
    const u = l.find(a => a.toLowerCase().startsWith(o.toLowerCase()));
    return u !== n ? u : void 0
}
function Ux(e, t) {
    const {x: n, y: r} = e;
    let o = !1;
    for (let i = 0, l = t.length - 1; i < t.length; l = i++) {
        const s = t[i].x
          , u = t[i].y
          , a = t[l].x
          , f = t[l].y;
        u > r != f > r && n < (a - s) * (r - u) / (f - u) + s && (o = !o)
    }
    return o
}
function Bx(e, t) {
    if (!t)
        return !1;
    const n = {
        x: e.clientX,
        y: e.clientY
    };
    return Ux(n, t)
}
function Ao(e) {
    return t => t.pointerType === "mouse" ? e(t) : void 0
}
var jx = Nh
  , $x = Wa
  , Wx = Ph
  , Hx = Ih
  , Gx = Ya
  , Kx = Ah
  , Yx = Ol
  , Qx = Oh
  , Xx = bh
  , Zx = zh
  , Jx = Vh
  , qx = Uh
  , eC = Bh
  , tC = $h
  , nC = Hh
  , Za = "DropdownMenu"
  , [rC,zC] = Fo(Za, [kh])
  , De = kh()
  , [oC,Kh] = rC(Za)
  , Yh = e => {
    const {__scopeDropdownMenu: t, children: n, dir: r, open: o, defaultOpen: i, onOpenChange: l, modal: s=!0} = e
      , u = De(t)
      , a = g.useRef(null)
      , [f=!1,d] = Om({
        prop: o,
        defaultProp: i,
        onChange: l
    });
    return S(oC, {
        scope: t,
        triggerId: Ru(),
        triggerRef: a,
        contentId: Ru(),
        open: f,
        onOpenChange: d,
        onOpenToggle: g.useCallback( () => d(m => !m), [d]),
        modal: s,
        children: S(jx, {
            ...u,
            open: f,
            onOpenChange: d,
            dir: r,
            modal: s,
            children: n
        })
    })
}
;
Yh.displayName = Za;
var Qh = "DropdownMenuTrigger"
  , Xh = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, disabled: r=!1, ...o} = e
      , i = Kh(Qh, n)
      , l = De(n);
    return S($x, {
        asChild: !0,
        ...l,
        children: S(Oe.button, {
            type: "button",
            id: i.triggerId,
            "aria-haspopup": "menu",
            "aria-expanded": i.open,
            "aria-controls": i.open ? i.contentId : void 0,
            "data-state": i.open ? "open" : "closed",
            "data-disabled": r ? "" : void 0,
            disabled: r,
            ...o,
            ref: Nl(t, i.triggerRef),
            onPointerDown: H(e.onPointerDown, s => {
                !r && s.button === 0 && s.ctrlKey === !1 && (i.onOpenToggle(),
                i.open || s.preventDefault())
            }
            ),
            onKeyDown: H(e.onKeyDown, s => {
                r || (["Enter", " "].includes(s.key) && i.onOpenToggle(),
                s.key === "ArrowDown" && i.onOpenChange(!0),
                ["Enter", " ", "ArrowDown"].includes(s.key) && s.preventDefault())
            }
            )
        })
    })
}
);
Xh.displayName = Qh;
var iC = "DropdownMenuPortal"
  , Zh = e => {
    const {__scopeDropdownMenu: t, ...n} = e
      , r = De(t);
    return S(Wx, {
        ...r,
        ...n
    })
}
;
Zh.displayName = iC;
var Jh = "DropdownMenuContent"
  , qh = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = Kh(Jh, n)
      , i = De(n)
      , l = g.useRef(!1);
    return S(Hx, {
        id: o.contentId,
        "aria-labelledby": o.triggerId,
        ...i,
        ...r,
        ref: t,
        onCloseAutoFocus: H(e.onCloseAutoFocus, s => {
            var u;
            l.current || (u = o.triggerRef.current) == null || u.focus(),
            l.current = !1,
            s.preventDefault()
        }
        ),
        onInteractOutside: H(e.onInteractOutside, s => {
            const u = s.detail.originalEvent
              , a = u.button === 0 && u.ctrlKey === !0
              , f = u.button === 2 || a;
            (!o.modal || f) && (l.current = !0)
        }
        ),
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
qh.displayName = Jh;
var lC = "DropdownMenuGroup"
  , sC = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(Gx, {
        ...o,
        ...r,
        ref: t
    })
}
);
sC.displayName = lC;
var uC = "DropdownMenuLabel"
  , ev = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(Kx, {
        ...o,
        ...r,
        ref: t
    })
}
);
ev.displayName = uC;
var aC = "DropdownMenuItem"
  , tv = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(Yx, {
        ...o,
        ...r,
        ref: t
    })
}
);
tv.displayName = aC;
var cC = "DropdownMenuCheckboxItem"
  , nv = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(Qx, {
        ...o,
        ...r,
        ref: t
    })
}
);
nv.displayName = cC;
var dC = "DropdownMenuRadioGroup"
  , fC = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(Xx, {
        ...o,
        ...r,
        ref: t
    })
}
);
fC.displayName = dC;
var pC = "DropdownMenuRadioItem"
  , rv = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(Zx, {
        ...o,
        ...r,
        ref: t
    })
}
);
rv.displayName = pC;
var mC = "DropdownMenuItemIndicator"
  , ov = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(Jx, {
        ...o,
        ...r,
        ref: t
    })
}
);
ov.displayName = mC;
var hC = "DropdownMenuSeparator"
  , iv = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(qx, {
        ...o,
        ...r,
        ref: t
    })
}
);
iv.displayName = hC;
var vC = "DropdownMenuArrow"
  , gC = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(eC, {
        ...o,
        ...r,
        ref: t
    })
}
);
gC.displayName = vC;
var yC = "DropdownMenuSubTrigger"
  , lv = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(tC, {
        ...o,
        ...r,
        ref: t
    })
}
);
lv.displayName = yC;
var wC = "DropdownMenuSubContent"
  , sv = g.forwardRef( (e, t) => {
    const {__scopeDropdownMenu: n, ...r} = e
      , o = De(n);
    return S(nC, {
        ...o,
        ...r,
        ref: t,
        style: {
            ...e.style,
            "--radix-dropdown-menu-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-dropdown-menu-content-available-width": "var(--radix-popper-available-width)",
            "--radix-dropdown-menu-content-available-height": "var(--radix-popper-available-height)",
            "--radix-dropdown-menu-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-dropdown-menu-trigger-height": "var(--radix-popper-anchor-height)"
        }
    })
}
);
sv.displayName = wC;
var EC = Yh
  , SC = Xh
  , xC = Zh
  , uv = qh
  , av = ev
  , cv = tv
  , dv = nv
  , fv = rv
  , pv = ov
  , mv = iv
  , hv = lv
  , vv = sv;
const CC = EC
  , _C = SC
  , kC = g.forwardRef( ({className: e, inset: t, children: n, ...r}, o) => z(hv, {
    ref: o,
    className: xt("flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent", t && "pl-8", e),
    ...r,
    children: [n, S(Iw, {
        className: "ml-auto h-4 w-4"
    })]
}));
kC.displayName = hv.displayName;
const RC = g.forwardRef( ({className: e, ...t}, n) => S(vv, {
    ref: n,
    className: xt("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
    ...t
}));
RC.displayName = vv.displayName;
const gv = g.forwardRef( ({className: e, sideOffset: t=4, ...n}, r) => S(xC, {
    children: S(uv, {
        ref: r,
        sideOffset: t,
        className: xt("z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", e),
        ...n
    })
}));
gv.displayName = uv.displayName;
const Ou = g.forwardRef( ({className: e, inset: t, ...n}, r) => S(cv, {
    ref: r,
    className: xt("relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", t && "pl-8", e),
    ...n
}));
Ou.displayName = cv.displayName;
const NC = g.forwardRef( ({className: e, children: t, checked: n, ...r}, o) => z(dv, {
    ref: o,
    className: xt("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    checked: n,
    ...r,
    children: [S("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: S(pv, {
            children: S(km, {
                className: "h-4 w-4"
            })
        })
    }), t]
}));
NC.displayName = dv.displayName;
const TC = g.forwardRef( ({className: e, children: t, ...n}, r) => z(fv, {
    ref: r,
    className: xt("relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", e),
    ...n,
    children: [S("span", {
        className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
        children: S(pv, {
            children: S(Aw, {
                className: "h-2 w-2 fill-current"
            })
        })
    }), t]
}));
TC.displayName = fv.displayName;
const yv = g.forwardRef( ({className: e, inset: t, ...n}, r) => S(av, {
    ref: r,
    className: xt("px-2 py-1.5 text-sm font-semibold", t && "pl-8", e),
    ...n
}));
yv.displayName = av.displayName;
const wv = g.forwardRef( ({className: e, ...t}, n) => S(mv, {
    ref: n,
    className: xt("-mx-1 my-1 h-px bg-muted", e),
    ...t
}));
wv.displayName = mv.displayName;
const Ev = ({className: e, ...t}) => S("span", {
    className: xt("ml-auto text-xs tracking-widest opacity-60", e),
    ...t
});
Ev.displayName = "DropdownMenuShortcut";
function Nr({className: e, ...t}) {
    return S("div", {
        className: xt("animate-pulse rounded-md bg-muted", e),
        ...t
    })
}
function _s(e) {
    const t = chrome.runtime.getManifest().version;
    return z("div", {
        className: "flex justify-between items-center p-2 pl-4 border-b relative z-10",
        children: [S("div", {
            className: "flex items-center gap-2",
            children: S("img", {
                src: "./icon-128.png",
                className: "w-auto h-[36px]",
                alt: "Run"
            })
        }), z("div", {
            className: "flex items-center gap-2",
            children: [e.peerId && z("div", {
                className: "flex flex-col text-right items-end",
                children: [e.isLoading && z(pt, {
                    children: [S(Nr, {
                        className: "w-28 h-4 mb-1"
                    }), S(Nr, {
                        className: "w-20 h-4"
                    })]
                }), !e.isLoading && z(pt, {
                    children: [S("span", {
                        className: "text-muted-foreground",
                        children: "Node ID"
                    }), S("div", {
                        className: "flex items-center gap-2",
                        children: S("span", {
                            children: Cv(e.peerId, 8, 8)
                        })
                    })]
                })]
            }), z(CC, {
                children: [S(_C, {
                    asChild: !0,
                    children: S(ba, {
                        variant: "ghost",
                        size: "sm",
                        className: "hover:bg-transparent",
                        children: S(bw, {
                            className: "w-4 h-4"
                        })
                    })
                }), z(gv, {
                    className: "w-56",
                    children: [z(yv, {
                        children: ["Version ", t]
                    }), S("a", {
                        href: "https://bless.network/dashboard",
                        target: "_blank",
                        children: z(Ou, {
                            children: [S(Fw, {
                                className: "mr-2 h-4 w-4"
                            }), S("span", {
                                children: "Open Dashboard"
                            }), S(Ev, {
                                children: S(Lw, {
                                    className: "w-4 h-4"
                                })
                            })]
                        })
                    }), S(wv, {}), z(Ou, {
                        onClick: e.doLogout,
                        children: [S(Uw, {
                            className: "mr-2 h-4 w-4"
                        }), S("span", {
                            children: "Log out"
                        })]
                    })]
                })]
            })]
        })]
    })
}
function PC() {
    const e = g.useCallback(t => {
        chrome.tabs.create({
            url: t
        })
    }
    , []);
    return z("div", {
        className: "flex flex-col w-[420px] h-[520px] relative overflow-hidden",
        style: {
            backgroundImage: "url(/bg.png)",
            backgroundSize: "cover"
        },
        children: [S("div", {
            className: "flex flex-1 flex-col items-center justify-center gap-12 px-8 py-5",
            children: S("div", {
                children: S("img", {
                    src: "./logo-full.svg",
                    alt: "Bless Network",
                    className: "w-[auto] h-12"
                })
            })
        }), S("div", {
            className: "flex flex-col gap-2 w-full px-8 pb-12",
            children: S(ba, {
                variant: "default",
                className: "w-full",
                onClick: () => e("https://bless.network/dashboard/login"),
                children: "Log in"
            })
        })]
    })
}
const IC = () => {
    var i;
    const {authToken: e} = Ia()
      , t = async l => (await fetch(l, {
        headers: {
            Authorization: `Bearer ${e}`
        }
    })).json()
      , {data: n, error: r, isLoading: o} = Cm(`${Du}/users/referrals`, t);
    return {
        refCode: (n == null ? void 0 : n.refCode) || "-",
        referrals: ((i = n == null ? void 0 : n.referrals) == null ? void 0 : i.length) || 0,
        error: r,
        isLoading: o
    }
}
;
function AC() {
    const {refCode: e, referrals: t, isLoading: n} = IC()
      , [r,o] = g.useState(!1);
    return S("div", {
        className: "flex px-4 py-2 w-full",
        children: z("div", {
            className: "flex justify-between border rounded-full py-2 px-4 w-full",
            children: [z("div", {
                className: "flex items-center gap-2",
                children: [S(Ww, {
                    className: "w-4 h-4 text-zinc-500"
                }), S("div", {
                    className: "text-sm text-zinc-500",
                    children: "Referrals:"
                }), n ? S(Nr, {
                    className: "w-10 h-4"
                }) : S("div", {
                    className: "text-sm text-zinc-500 font-bold",
                    children: t
                })]
            }), z("div", {
                className: "flex items-center gap-2",
                children: [S("div", {
                    className: "text-sm text-zinc-500",
                    children: "Referral Code:"
                }), n ? S(Nr, {
                    className: "w-20 h-4"
                }) : z(pt, {
                    children: [S("div", {
                        className: "text-sm text-zinc-500 font-bold",
                        children: e
                    }), r ? S(km, {
                        className: "w-4 h-4 text-green-500"
                    }) : S(Ow, {
                        className: "w-4 h-4 text-zinc-500 cursor-pointer hover:text-zinc-700 transition-colors",
                        onClick: () => {
                            navigator.clipboard.writeText(`https://bless.network/dashboard?ref=${e}`),
                            o(!0),
                            setTimeout( () => o(!1), 2e3)
                        }
                    })]
                })]
            })]
        })
    })
}
function MC({onRefresh: e}) {
    const [t,n] = g.useState({
        minutes: "10",
        seconds: "00"
    });
    return g.useEffect( () => {
        const r = () => {
            const i = new Date
              , l = i.getUTCMinutes()
              , s = i.getUTCSeconds()
              , u = 600 - (l % 10 * 60 + s);
            return {
                minutes: Math.floor(u / 60).toString().padStart(2, "0"),
                seconds: (u % 60).toString().padStart(2, "0")
            }
        }
          , o = setInterval( () => {
            const i = r();
            n(i),
            i.minutes === "00" && i.seconds === "01" && setTimeout( () => e(), 1e3)
        }
        , 1e3);
        return n(r()),
        () => clearInterval(o)
    }
    , [e]),
    S("div", {
        className: "grid grid-cols-2 gap-4",
        children: [{
            label: "Minutes",
            value: t.minutes
        }, {
            label: "Seconds",
            value: t.seconds
        }].map( ({label: r, value: o}) => S("div", {
            children: z("div", {
                className: "text-4xl font-bold",
                children: [o, r.substring(0, 1).toLowerCase()]
            })
        }, r))
    })
}
function OC({isActive: e}) {
    return e ? z("div", {
        className: "relative w-96 h-96",
        children: [S("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: S("div", {
                className: "w-64 h-64 rounded-full border-2 border-[#D3F3DA] opacity-50 animate-ping [animation-duration:2s]"
            })
        }), S("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: S("div", {
                className: "w-48 h-48 rounded-full border-2 border-[#D3F3DA] opacity-75 animate-ping [animation-duration:2s]"
            })
        }), S("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: S("div", {
                className: "w-36 h-36 rounded-full border-2 border-[#D3F3DA] animate-ping [animation-duration:2s]"
            })
        }), S("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: S("div", {
                className: "w-36 h-36 rounded-full"
            })
        })]
    }) : S("div", {
        className: "relative w-96 h-96",
        children: S("div", {
            className: "absolute inset-0 flex items-center justify-center",
            children: S("div", {
                className: "w-48 h-48 rounded-full"
            })
        })
    })
}
function DC() {
    const {authToken: e, doLogout: t} = Ia()
      , {peerId: n, isConnected: r, isConnecting: o, isOnline: i, isError: l} = pm();
    if (!e)
        return S(PC, {});
    if (!n)
        return z(pt, {
            children: [S("div", {
                className: "absolute inset-0 top-0 left-0 w-full h-full blur-lg opacity-50",
                style: {
                    backgroundImage: "url(/bg.png)",
                    backgroundSize: "cover"
                }
            }), S("div", {
                className: "flex w-[420px] h-[520px] relative overflow-hidden justify-center items-center",
                children: z("div", {
                    className: "flex flex-col items-center justify-center gap-4",
                    children: [S(Vw, {
                        className: "w-6 h-6 animate-spin"
                    }), S("div", {
                        className: "text-zinc-600",
                        children: "Loading node data ..."
                    })]
                })
            })]
        });
    if (l)
        return z(pt, {
            children: [S("div", {
                className: "absolute inset-0 top-0 left-0 w-full h-full blur-lg opacity-50",
                style: {
                    backgroundImage: "url(/bg.png)",
                    backgroundSize: "cover"
                }
            }), S("div", {
                className: "flex flex-col w-[420px] h-[520px] relative overflow-hidden",
                children: z(pt, {
                    children: [S(_s, {
                        peerId: n,
                        doLogout: t,
                        isLoading: !1
                    }), z("div", {
                        className: "flex flex-col items-center justify-center gap-4 h-full",
                        children: [S($w, {
                            className: "w-12 h-12 text-red-600 mb-2"
                        }), z("div", {
                            className: "flex flex-col items-center justify-center gap-2",
                            children: [S("div", {
                                className: "text-red-600 text-lg",
                                children: "Node Registration Failed"
                            }), S("p", {
                                className: "text-zinc-500 text-sm text-center px-8",
                                children: "Your node has failed to register. Please try later or log out and log in again."
                            })]
                        })]
                    })]
                })
            })]
        });
    const {nodeData: s, isLoading: u, isError: a, refreshNodeData: f} = Rw(n || "")
      , d = !s && u;
    return a ? z(pt, {
        children: [S("div", {
            className: "absolute inset-0 top-0 left-0 w-full h-full blur-lg opacity-50",
            style: {
                backgroundImage: "url(/bg.png)",
                backgroundSize: "cover"
            }
        }), S("div", {
            className: "flex flex-col w-[420px] h-[520px] relative overflow-hidden",
            children: z(pt, {
                children: [S(_s, {
                    peerId: n,
                    doLogout: t,
                    isLoading: d
                }), z("div", {
                    className: "flex flex-col items-center justify-center gap-4 h-full",
                    children: [S(Mw, {
                        className: "w-12 h-12 text-orange-600 mb-2"
                    }), z("div", {
                        className: "flex flex-col items-center justify-center gap-2",
                        children: [S("div", {
                            className: "text-orange-600 text-lg",
                            children: "Node Connection Failed"
                        }), S("p", {
                            className: "text-zinc-500 text-sm text-center px-8",
                            children: "Failed to connect your node. Please check your internet connection and try again."
                        })]
                    })]
                })]
            })
        })]
    }) : z(pt, {
        children: [S("div", {
            className: "absolute inset-0 top-0 left-0 w-full h-full blur-lg opacity-50",
            style: {
                backgroundImage: "url(/bg.png)",
                backgroundSize: "cover"
            }
        }), S("div", {
            className: "flex flex-col w-[420px] h-[520px] relative overflow-hidden",
            children: z(pt, {
                children: [S(_s, {
                    peerId: n,
                    doLogout: t,
                    isLoading: d
                }), z("div", {
                    className: "flex flex-col items-center justify-between h-full",
                    children: [z("div", {
                        className: "flex justify-between w-full py-4 px-12",
                        children: [z("div", {
                            className: "flex flex-col items-center text-center",
                            children: [S("div", {
                                className: "text-sm text-zinc-500",
                                children: "Today's Time"
                            }), d ? S(Nr, {
                                className: "w-16 h-6 mt-1"
                            }) : S("div", {
                                className: "text-lg font-bold text-zinc-600",
                                children: tc((s == null ? void 0 : s.todayReward) || 0)
                            })]
                        }), z("div", {
                            className: "flex flex-col items-center text-center",
                            children: [S("div", {
                                className: "text-sm text-zinc-500",
                                children: "Total Time"
                            }), d ? S(Nr, {
                                className: "w-16 h-6 mt-1"
                            }) : S("div", {
                                className: "text-lg font-bold text-zinc-600",
                                children: tc((s == null ? void 0 : s.totalReward) || 0)
                            })]
                        })]
                    }), z("div", {
                        className: "absolute top-36 left-1/2 transform -translate-x-1/2 flex flex-col items-center justify-center w-48 h-48",
                        children: [S("div", {
                            className: "absolute",
                            children: S(OC, {
                                isActive: r
                            })
                        }), z("div", {
                            className: "relative z-30 flex flex-col items-center justify-center gap-4",
                            children: [r && z("div", {
                                className: "flex flex-col items-center justify-center gap-2",
                                children: [S("div", {
                                    className: "flex items-center gap-1 text-muted-foreground",
                                    children: "Next roll call in"
                                }), S("div", {
                                    className: "text-4xl font-bold text-zinc-800",
                                    children: S(MC, {
                                        onRefresh: f
                                    })
                                })]
                            }), o && z("div", {
                                className: "flex items-center text-sm text-yellow-500",
                                children: [S("div", {
                                    className: "w-2 h-2 rounded-full bg-current mr-2"
                                }), "Connecting"]
                            }), !o && (!r || !i) && z("div", {
                                className: "flex items-center text-sm text-red-500",
                                children: [S("div", {
                                    className: "w-2 h-2 rounded-full bg-current mr-2"
                                }), "Offline"]
                            }), !o && r && i && z("div", {
                                className: "flex items-center text-sm text-green-500",
                                children: [S("div", {
                                    className: "w-2 h-2 rounded-full bg-current mr-2"
                                }), "Online"]
                            })]
                        })]
                    }), S("div", {
                        className: "w-full flex flex-col gap-2 text-center overflow-hidden relative z-10",
                        children: S(Hw, {})
                    })]
                }), S(AC, {}), S(Gw, {})]
            })
        })]
    })
}
ks.createRoot(document.getElementById("root")).render(S(He.StrictMode, {
    children: S(e0, {
        children: S(U0, {
            children: S(DC, {})
        })
    })
}));
