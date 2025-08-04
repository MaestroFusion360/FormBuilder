var dr = Object.defineProperty;
var cr = (e, n, t) =>
  n in e
    ? dr(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[n] = t);
var _n = (e, n, t) => cr(e, typeof n != "symbol" ? n + "" : n, t);
(function () {
  const n = document.createElement("link").relList;
  if (n && n.supports && n.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver((a) => {
    for (const l of a)
      if (l.type === "childList")
        for (const s of l.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(a) {
    const l = {};
    return (
      a.integrity && (l.integrity = a.integrity),
      a.referrerPolicy && (l.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (l.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (l.credentials = "omit")
        : (l.credentials = "same-origin"),
      l
    );
  }
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const l = t(a);
    fetch(a.href, l);
  }
})();
const to = !1;
var At = Array.isArray,
  fr = Array.prototype.indexOf,
  In = Array.from,
  pr = Object.defineProperty,
  Lt = Object.getOwnPropertyDescriptor,
  Po = Object.getOwnPropertyDescriptors,
  yr = Object.prototype,
  vr = Array.prototype,
  Rn = Object.getPrototypeOf,
  no = Object.isExtensible;
function mr(e) {
  return e();
}
function On(e) {
  for (var n = 0; n < e.length; n++) e[n]();
}
const Ce = 2,
  zn = 4,
  Xt = 8,
  Fn = 16,
  Xe = 32,
  Vt = 64,
  $n = 128,
  we = 256,
  rn = 512,
  he = 1024,
  We = 2048,
  ct = 4096,
  Ye = 8192,
  fn = 16384,
  No = 32768,
  jn = 65536,
  oo = 1 << 17,
  hr = 1 << 18,
  Oo = 1 << 19,
  Ln = 1 << 20,
  Jn = 1 << 21,
  Ke = Symbol("$state"),
  kr = Symbol("legacy props"),
  gr = Symbol(""),
  Lo = new (class extends Error {
    constructor() {
      super(...arguments);
      _n(this, "name", "StaleReactionError");
      _n(
        this,
        "message",
        "The reaction that called `getAbortSignal()` was re-run or destroyed"
      );
    }
  })();
function To(e) {
  return e === this.v;
}
function xr(e, n) {
  return e != e
    ? n == n
    : e !== n || (e !== null && typeof e == "object") || typeof e == "function";
}
function Ao(e) {
  return !xr(e, this.v);
}
function br(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function _r() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function wr(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Cr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Er(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Sr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Pr() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Nr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Dt = !1,
  Or = !1;
function Lr() {
  Dt = !0;
}
const Un = 1,
  Bn = 2,
  Vo = 4,
  Tr = 8,
  Ar = 16,
  Vr = 1,
  Dr = 2,
  Mr = 4,
  qr = 8,
  Ir = 16,
  Rr = 1,
  zr = 2,
  de = Symbol(),
  Fr = "http://www.w3.org/1999/xhtml";
function Hn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let te = null;
function ro(e) {
  te = e;
}
function Ge(e, n = !1, t) {
  (te = { p: te, c: null, e: null, s: e, x: null, l: null }),
    Dt && !n && (te.l = { s: null, u: null, r1: [], r2: Bt(!1) });
}
function Ze(e) {
  var n = te,
    t = n.e;
  if (t !== null) {
    n.e = null;
    for (var r of t) jo(r);
  }
  return (te = n.p), {};
}
function Gt() {
  return !Dt || (te !== null && te.l === null);
}
function Ot(e) {
  if (typeof e != "object" || e === null || Ke in e) return e;
  const n = Rn(e);
  if (n !== yr && n !== vr) return e;
  var t = new Map(),
    r = At(e),
    a = ot(0),
    l = bt,
    s = (u) => {
      if (bt === l) return u();
      var d = Q,
        c = bt;
      dt(null), so(l);
      var h = u();
      return dt(d), so(c), h;
    };
  return (
    r && t.set("length", ot(e.length)),
    new Proxy(e, {
      defineProperty(u, d, c) {
        (!("value" in c) ||
          c.configurable === !1 ||
          c.enumerable === !1 ||
          c.writable === !1) &&
          Sr();
        var h = t.get(d);
        return (
          h === void 0
            ? (h = s(() => {
                var g = ot(c.value);
                return t.set(d, g), g;
              }))
            : x(h, c.value, !0),
          !0
        );
      },
      deleteProperty(u, d) {
        var c = t.get(d);
        if (c === void 0) {
          if (d in u) {
            const y = s(() => ot(de));
            t.set(d, y), wn(a);
          }
        } else {
          if (r && typeof d == "string") {
            var h = t.get("length"),
              g = Number(d);
            Number.isInteger(g) && g < h.v && x(h, g);
          }
          x(c, de), wn(a);
        }
        return !0;
      },
      get(u, d, c) {
        var v;
        if (d === Ke) return e;
        var h = t.get(d),
          g = d in u;
        if (
          (h === void 0 &&
            (!g || ((v = Lt(u, d)) != null && v.writable)) &&
            ((h = s(() => {
              var f = Ot(g ? u[d] : de),
                L = ot(f);
              return L;
            })),
            t.set(d, h)),
          h !== void 0)
        ) {
          var y = o(h);
          return y === de ? void 0 : y;
        }
        return Reflect.get(u, d, c);
      },
      getOwnPropertyDescriptor(u, d) {
        var c = Reflect.getOwnPropertyDescriptor(u, d);
        if (c && "value" in c) {
          var h = t.get(d);
          h && (c.value = o(h));
        } else if (c === void 0) {
          var g = t.get(d),
            y = g == null ? void 0 : g.v;
          if (g !== void 0 && y !== de)
            return { enumerable: !0, configurable: !0, value: y, writable: !0 };
        }
        return c;
      },
      has(u, d) {
        var y;
        if (d === Ke) return !0;
        var c = t.get(d),
          h = (c !== void 0 && c.v !== de) || Reflect.has(u, d);
        if (
          c !== void 0 ||
          (G !== null && (!h || ((y = Lt(u, d)) != null && y.writable)))
        ) {
          c === void 0 &&
            ((c = s(() => {
              var v = h ? Ot(u[d]) : de,
                f = ot(v);
              return f;
            })),
            t.set(d, c));
          var g = o(c);
          if (g === de) return !1;
        }
        return h;
      },
      set(u, d, c, h) {
        var F;
        var g = t.get(d),
          y = d in u;
        if (r && d === "length")
          for (var v = c; v < g.v; v += 1) {
            var f = t.get(v + "");
            f !== void 0
              ? x(f, de)
              : v in u && ((f = s(() => ot(de))), t.set(v + "", f));
          }
        if (g === void 0)
          (!y || ((F = Lt(u, d)) != null && F.writable)) &&
            ((g = s(() => ot(void 0))), x(g, Ot(c)), t.set(d, g));
        else {
          y = g.v !== de;
          var L = s(() => Ot(c));
          x(g, L);
        }
        var C = Reflect.getOwnPropertyDescriptor(u, d);
        if ((C != null && C.set && C.set.call(h, c), !y)) {
          if (r && typeof d == "string") {
            var P = t.get("length"),
              A = Number(d);
            Number.isInteger(A) && A >= P.v && x(P, A + 1);
          }
          wn(a);
        }
        return !0;
      },
      ownKeys(u) {
        o(a);
        var d = Reflect.ownKeys(u).filter((g) => {
          var y = t.get(g);
          return y === void 0 || y.v !== de;
        });
        for (var [c, h] of t) h.v !== de && !(c in u) && d.push(c);
        return d;
      },
      setPrototypeOf() {
        Pr();
      },
    })
  );
}
function ao(e) {
  try {
    if (e !== null && typeof e == "object" && Ke in e) return e[Ke];
  } catch {}
  return e;
}
function $r(e, n) {
  return Object.is(ao(e), ao(n));
}
function pn(e) {
  var n = Ce | We,
    t = Q !== null && (Q.f & Ce) !== 0 ? Q : null;
  return (
    G === null || (t !== null && (t.f & we) !== 0) ? (n |= we) : (G.f |= Oo),
    {
      ctx: te,
      deps: null,
      effects: null,
      equals: To,
      f: n,
      fn: e,
      reactions: null,
      rv: 0,
      v: de,
      wv: 0,
      parent: t ?? G,
      ac: null,
    }
  );
}
function ye(e) {
  const n = pn(e);
  return (n.equals = Ao), n;
}
function Do(e) {
  var n = e.effects;
  if (n !== null) {
    e.effects = null;
    for (var t = 0; t < n.length; t += 1) it(n[t]);
  }
}
function jr(e) {
  for (var n = e.parent; n !== null; ) {
    if ((n.f & Ce) === 0) return n;
    n = n.parent;
  }
  return null;
}
function Yn(e) {
  var n,
    t = G;
  Tt(jr(e));
  try {
    Do(e), (n = Zo(e));
  } finally {
    Tt(t);
  }
  return n;
}
function Mo(e) {
  var n = Yn(e);
  if ((e.equals(n) || ((e.v = n), (e.wv = Xo())), !ut)) {
    var t = (st || (e.f & we) !== 0) && e.deps !== null ? ct : he;
    Ve(e, t);
  }
}
const gt = new Map();
function Bt(e, n) {
  var t = { f: 0, v: e, reactions: null, equals: To, rv: 0, wv: 0 };
  return t;
}
function ot(e, n) {
  const t = Bt(e);
  return ta(t), t;
}
function K(e, n = !1, t = !0) {
  var a;
  const r = Bt(e);
  return (
    n || (r.equals = Ao),
    Dt &&
      t &&
      te !== null &&
      te.l !== null &&
      ((a = te.l).s ?? (a.s = [])).push(r),
    r
  );
}
function Jr(e, n) {
  return (
    x(
      e,
      p(() => o(e))
    ),
    n
  );
}
function x(e, n, t = !1) {
  Q !== null &&
    (!Fe || (Q.f & oo) !== 0) &&
    Gt() &&
    (Q.f & (Ce | Fn | oo)) !== 0 &&
    !(ve != null && ve.includes(e)) &&
    Nr();
  let r = t ? Ot(n) : n;
  return Tn(e, r);
}
function Tn(e, n) {
  if (!e.equals(n)) {
    var t = e.v;
    ut ? gt.set(e, n) : gt.set(e, t),
      (e.v = n),
      (e.f & Ce) !== 0 &&
        ((e.f & We) !== 0 && Yn(e), Ve(e, (e.f & we) === 0 ? he : ct)),
      (e.wv = Xo()),
      qo(e, We),
      Gt() &&
        G !== null &&
        (G.f & he) !== 0 &&
        (G.f & (Xe | Vt)) === 0 &&
        (Ne === null ? na([e]) : Ne.push(e));
  }
  return n;
}
function wn(e) {
  x(e, e.v + 1);
}
function qo(e, n) {
  var t = e.reactions;
  if (t !== null)
    for (var r = Gt(), a = t.length, l = 0; l < a; l++) {
      var s = t[l],
        u = s.f;
      (u & We) === 0 &&
        ((!r && s === G) ||
          (Ve(s, n),
          (u & (he | we)) !== 0 && ((u & Ce) !== 0 ? qo(s, ct) : hn(s))));
    }
}
function Ur() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Br = !1;
var An, Io, Ro, zo;
function Hr() {
  if (An === void 0) {
    (An = window), (Io = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      n = Node.prototype,
      t = Text.prototype;
    (Ro = Lt(n, "firstChild").get),
      (zo = Lt(n, "nextSibling").get),
      no(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      no(t) && (t.__t = void 0);
  }
}
function yn(e = "") {
  return document.createTextNode(e);
}
function at(e) {
  return Ro.call(e);
}
function vn(e) {
  return zo.call(e);
}
function m(e, n) {
  return at(e);
}
function lt(e, n) {
  {
    var t = at(e);
    return t instanceof Comment && t.data === "" ? vn(t) : t;
  }
}
function E(e, n = 1, t = !1) {
  let r = e;
  for (; n--; ) r = vn(r);
  return r;
}
function Yr(e) {
  e.textContent = "";
}
function Fo(e) {
  G === null && Q === null && wr(),
    Q !== null && (Q.f & we) !== 0 && G === null && _r(),
    ut && br();
}
function Kr(e, n) {
  var t = n.last;
  t === null
    ? (n.last = n.first = e)
    : ((t.next = e), (e.prev = t), (n.last = e));
}
function ft(e, n, t, r = !0) {
  var a = G,
    l = {
      ctx: te,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | We,
      first: null,
      fn: n,
      last: null,
      next: null,
      parent: a,
      b: a && a.b,
      prev: null,
      teardown: null,
      transitions: null,
      wv: 0,
      ac: null,
    };
  if (t)
    try {
      mn(l), (l.f |= No);
    } catch (d) {
      throw (it(l), d);
    }
  else n !== null && hn(l);
  var s =
    t &&
    l.deps === null &&
    l.first === null &&
    l.nodes_start === null &&
    l.teardown === null &&
    (l.f & (Oo | $n)) === 0;
  if (!s && r && (a !== null && Kr(l, a), Q !== null && (Q.f & Ce) !== 0)) {
    var u = Q;
    (u.effects ?? (u.effects = [])).push(l);
  }
  return l;
}
function $o(e) {
  const n = ft(Xt, null, !1);
  return Ve(n, he), (n.teardown = e), n;
}
function Vn(e) {
  if ((Fo(), !Q && G && (G.f & Xe) !== 0)) {
    var n = te;
    (n.e ?? (n.e = [])).push(e);
  } else return jo(e);
}
function jo(e) {
  return ft(zn | Jn, e, !1);
}
function Wr(e) {
  return Fo(), ft(Xt | Jn, e, !0);
}
function Xr(e) {
  const n = ft(Vt, e, !0);
  return (t = {}) =>
    new Promise((r) => {
      t.outro
        ? an(n, () => {
            it(n), r(void 0);
          })
        : (it(n), r(void 0));
    });
}
function Gr(e) {
  return ft(zn, e, !1);
}
function _e(e, n) {
  var t = te,
    r = { effect: null, ran: !1 };
  t.l.r1.push(r),
    (r.effect = Qt(() => {
      e(), !r.ran && ((r.ran = !0), x(t.l.r2, !0), p(n));
    }));
}
function Zt() {
  var e = te;
  Qt(() => {
    if (o(e.l.r2)) {
      for (var n of e.l.r1) {
        var t = n.effect;
        (t.f & he) !== 0 && Ve(t, ct), en(t) && mn(t), (n.ran = !1);
      }
      e.l.r2.v = !1;
    }
  });
}
function Qt(e) {
  return ft(Xt, e, !0);
}
function J(e, n = [], t = pn) {
  const r = n.map(t);
  return Kn(() => e(...r.map(o)));
}
function Kn(e, n = 0) {
  var t = ft(Xt | Fn | n, e, !0);
  return t;
}
function Ht(e, n = !0) {
  return ft(Xt | Xe, e, !0, n);
}
function Jo(e) {
  var n = e.teardown;
  if (n !== null) {
    const t = ut,
      r = Q;
    lo(!0), dt(null);
    try {
      n.call(null);
    } finally {
      lo(t), dt(r);
    }
  }
}
function Uo(e, n = !1) {
  var a;
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    (a = t.ac) == null || a.abort(Lo);
    var r = t.next;
    (t.f & Vt) !== 0 ? (t.parent = null) : it(t, n), (t = r);
  }
}
function Zr(e) {
  for (var n = e.first; n !== null; ) {
    var t = n.next;
    (n.f & Xe) === 0 && it(n), (n = t);
  }
}
function it(e, n = !0) {
  var t = !1;
  (n || (e.f & hr) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (Bo(e.nodes_start, e.nodes_end), (t = !0)),
    Uo(e, n && !t),
    cn(e, 0),
    Ve(e, fn);
  var r = e.transitions;
  if (r !== null) for (const l of r) l.stop();
  Jo(e);
  var a = e.parent;
  a !== null && a.first !== null && Ho(e),
    (e.next =
      e.prev =
      e.teardown =
      e.ctx =
      e.deps =
      e.fn =
      e.nodes_start =
      e.nodes_end =
      e.ac =
        null);
}
function Bo(e, n) {
  for (; e !== null; ) {
    var t = e === n ? null : vn(e);
    e.remove(), (e = t);
  }
}
function Ho(e) {
  var n = e.parent,
    t = e.prev,
    r = e.next;
  t !== null && (t.next = r),
    r !== null && (r.prev = t),
    n !== null &&
      (n.first === e && (n.first = r), n.last === e && (n.last = t));
}
function an(e, n) {
  var t = [];
  Wn(e, t, !0),
    Yo(t, () => {
      it(e), n && n();
    });
}
function Yo(e, n) {
  var t = e.length;
  if (t > 0) {
    var r = () => --t || n();
    for (var a of e) a.out(r);
  } else n();
}
function Wn(e, n, t) {
  if ((e.f & Ye) === 0) {
    if (((e.f ^= Ye), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || t) && n.push(s);
    for (var r = e.first; r !== null; ) {
      var a = r.next,
        l = (r.f & jn) !== 0 || (r.f & Xe) !== 0;
      Wn(r, n, l ? t : !1), (r = a);
    }
  }
}
function ln(e) {
  Ko(e, !0);
}
function Ko(e, n) {
  if ((e.f & Ye) !== 0) {
    e.f ^= Ye;
    for (var t = e.first; t !== null; ) {
      var r = t.next,
        a = (t.f & jn) !== 0 || (t.f & Xe) !== 0;
      Ko(t, a ? n : !1), (t = r);
    }
    if (e.transitions !== null)
      for (const l of e.transitions) (l.is_global || n) && l.in();
  }
}
let sn = [];
function Qr() {
  var e = sn;
  (sn = []), On(e);
}
function Xn(e) {
  sn.length === 0 && queueMicrotask(Qr), sn.push(e);
}
function ea(e) {
  var n = G;
  if ((n.f & No) === 0) {
    if ((n.f & $n) === 0) throw e;
    n.fn(e);
  } else Wo(e, n);
}
function Wo(e, n) {
  for (; n !== null; ) {
    if ((n.f & $n) !== 0)
      try {
        n.b.error(e);
        return;
      } catch {}
    n = n.parent;
  }
  throw e;
}
let Dn = !1,
  un = null,
  xt = !1,
  ut = !1;
function lo(e) {
  ut = e;
}
let on = [];
let Q = null,
  Fe = !1;
function dt(e) {
  Q = e;
}
let G = null;
function Tt(e) {
  G = e;
}
let ve = null;
function ta(e) {
  Q !== null && Q.f & Ln && (ve === null ? (ve = [e]) : ve.push(e));
}
let pe = null,
  be = 0,
  Ne = null;
function na(e) {
  Ne = e;
}
let dn = 1,
  Yt = 0,
  bt = Yt;
function so(e) {
  bt = e;
}
let st = !1;
function Xo() {
  return ++dn;
}
function en(e) {
  var g;
  var n = e.f;
  if ((n & We) !== 0) return !0;
  if ((n & ct) !== 0) {
    var t = e.deps,
      r = (n & we) !== 0;
    if (t !== null) {
      var a,
        l,
        s = (n & rn) !== 0,
        u = r && G !== null && !st,
        d = t.length;
      if (s || u) {
        var c = e,
          h = c.parent;
        for (a = 0; a < d; a++)
          (l = t[a]),
            (s ||
              !(
                (g = l == null ? void 0 : l.reactions) != null && g.includes(c)
              )) &&
              (l.reactions ?? (l.reactions = [])).push(c);
        s && (c.f ^= rn), u && h !== null && (h.f & we) === 0 && (c.f ^= we);
      }
      for (a = 0; a < d; a++)
        if (((l = t[a]), en(l) && Mo(l), l.wv > e.wv)) return !0;
    }
    (!r || (G !== null && !st)) && Ve(e, he);
  }
  return !1;
}
function Go(e, n, t = !0) {
  var r = e.reactions;
  if (r !== null && !(ve != null && ve.includes(e)))
    for (var a = 0; a < r.length; a++) {
      var l = r[a];
      (l.f & Ce) !== 0
        ? Go(l, n, !1)
        : n === l && (t ? Ve(l, We) : (l.f & he) !== 0 && Ve(l, ct), hn(l));
    }
}
function Zo(e) {
  var f;
  var n = pe,
    t = be,
    r = Ne,
    a = Q,
    l = st,
    s = ve,
    u = te,
    d = Fe,
    c = bt,
    h = e.f;
  (pe = null),
    (be = 0),
    (Ne = null),
    (st = (h & we) !== 0 && (Fe || !xt || Q === null)),
    (Q = (h & (Xe | Vt)) === 0 ? e : null),
    (ve = null),
    ro(e.ctx),
    (Fe = !1),
    (bt = ++Yt),
    (e.f |= Ln),
    e.ac !== null && (e.ac.abort(Lo), (e.ac = null));
  try {
    var g = (0, e.fn)(),
      y = e.deps;
    if (pe !== null) {
      var v;
      if ((cn(e, be), y !== null && be > 0))
        for (y.length = be + pe.length, v = 0; v < pe.length; v++)
          y[be + v] = pe[v];
      else e.deps = y = pe;
      if (!st || ((h & Ce) !== 0 && e.reactions !== null))
        for (v = be; v < y.length; v++)
          ((f = y[v]).reactions ?? (f.reactions = [])).push(e);
    } else y !== null && be < y.length && (cn(e, be), (y.length = be));
    if (
      Gt() &&
      Ne !== null &&
      !Fe &&
      y !== null &&
      (e.f & (Ce | ct | We)) === 0
    )
      for (v = 0; v < Ne.length; v++) Go(Ne[v], e);
    return (
      a !== null &&
        a !== e &&
        (Yt++, Ne !== null && (r === null ? (r = Ne) : r.push(...Ne))),
      g
    );
  } catch (L) {
    ea(L);
  } finally {
    (pe = n),
      (be = t),
      (Ne = r),
      (Q = a),
      (st = l),
      (ve = s),
      ro(u),
      (Fe = d),
      (bt = c),
      (e.f ^= Ln);
  }
}
function oa(e, n) {
  let t = n.reactions;
  if (t !== null) {
    var r = fr.call(t, e);
    if (r !== -1) {
      var a = t.length - 1;
      a === 0 ? (t = n.reactions = null) : ((t[r] = t[a]), t.pop());
    }
  }
  t === null &&
    (n.f & Ce) !== 0 &&
    (pe === null || !pe.includes(n)) &&
    (Ve(n, ct), (n.f & (we | rn)) === 0 && (n.f ^= rn), Do(n), cn(n, 0));
}
function cn(e, n) {
  var t = e.deps;
  if (t !== null) for (var r = n; r < t.length; r++) oa(e, t[r]);
}
function mn(e) {
  var n = e.f;
  if ((n & fn) === 0) {
    Ve(e, he);
    var t = G,
      r = xt;
    (G = e), (xt = !0);
    try {
      (n & Fn) !== 0 ? Zr(e) : Uo(e), Jo(e);
      var a = Zo(e);
      (e.teardown = typeof a == "function" ? a : null), (e.wv = dn);
      var l;
      to && Or && (e.f & We) !== 0 && e.deps;
    } finally {
      (xt = r), (G = t);
    }
  }
}
function ra() {
  try {
    Cr();
  } catch (e) {
    if (un !== null) Wo(e, un);
    else throw e;
  }
}
function aa() {
  var e = xt;
  try {
    var n = 0;
    for (xt = !0; on.length > 0; ) {
      n++ > 1e3 && ra();
      var t = on,
        r = t.length;
      on = [];
      for (var a = 0; a < r; a++) {
        var l = sa(t[a]);
        la(l);
      }
      gt.clear();
    }
  } finally {
    (Dn = !1), (xt = e), (un = null);
  }
}
function la(e) {
  var n = e.length;
  if (n !== 0) {
    for (var t = 0; t < n; t++) {
      var r = e[t];
      if ((r.f & (fn | Ye)) === 0 && en(r)) {
        var a = dn;
        if (
          (mn(r),
          r.deps === null &&
            r.first === null &&
            r.nodes_start === null &&
            (r.teardown === null ? Ho(r) : (r.fn = null)),
          dn > a && (r.f & Jn) !== 0)
        )
          break;
      }
    }
    for (; t < n; t += 1) hn(e[t]);
  }
}
function hn(e) {
  Dn || ((Dn = !0), queueMicrotask(aa));
  for (var n = (un = e); n.parent !== null; ) {
    n = n.parent;
    var t = n.f;
    if ((t & (Vt | Xe)) !== 0) {
      if ((t & he) === 0) return;
      n.f ^= he;
    }
  }
  on.push(n);
}
function sa(e) {
  for (var n = [], t = e; t !== null; ) {
    var r = t.f,
      a = (r & (Xe | Vt)) !== 0,
      l = a && (r & he) !== 0;
    if (!l && (r & Ye) === 0) {
      (r & zn) !== 0 ? n.push(t) : a ? (t.f ^= he) : en(t) && mn(t);
      var s = t.first;
      if (s !== null) {
        t = s;
        continue;
      }
    }
    var u = t.parent;
    for (t = t.next; t === null && u !== null; ) (t = u.next), (u = u.parent);
  }
  return n;
}
function o(e) {
  var n = e.f,
    t = (n & Ce) !== 0;
  if (Q !== null && !Fe) {
    if (!(ve != null && ve.includes(e))) {
      var r = Q.deps;
      e.rv < Yt &&
        ((e.rv = Yt),
        pe === null && r !== null && r[be] === e
          ? be++
          : pe === null
          ? (pe = [e])
          : (!st || !pe.includes(e)) && pe.push(e));
    }
  } else if (t && e.deps === null && e.effects === null) {
    var a = e,
      l = a.parent;
    l !== null && (l.f & we) === 0 && (a.f ^= we);
  }
  if ((t && !ut && ((a = e), en(a) && Mo(a)), ut)) {
    if (gt.has(e)) return gt.get(e);
    if (t) {
      a = e;
      var s = a.v;
      return ((a.f & he) !== 0 || Qo(a)) && (s = Yn(a)), gt.set(a, s), s;
    }
  }
  return e.v;
}
function Qo(e) {
  if (e.v === de) return !0;
  if (e.deps === null) return !1;
  for (const n of e.deps)
    if (gt.has(n) || ((n.f & Ce) !== 0 && Qo(n))) return !0;
  return !1;
}
function p(e) {
  var n = Fe;
  try {
    return (Fe = !0), e();
  } finally {
    Fe = n;
  }
}
const ia = -7169;
function Ve(e, n) {
  e.f = (e.f & ia) | n;
}
function U(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Ke in e) Mn(e);
    else if (!Array.isArray(e))
      for (let n in e) {
        const t = e[n];
        typeof t == "object" && t && Ke in t && Mn(t);
      }
  }
}
function Mn(e, n = new Set()) {
  if (
    typeof e == "object" &&
    e !== null &&
    !(e instanceof EventTarget) &&
    !n.has(e)
  ) {
    n.add(e), e instanceof Date && e.getTime();
    for (let r in e)
      try {
        Mn(e[r], n);
      } catch {}
    const t = Rn(e);
    if (
      t !== Object.prototype &&
      t !== Array.prototype &&
      t !== Map.prototype &&
      t !== Set.prototype &&
      t !== Date.prototype
    ) {
      const r = Po(t);
      for (let a in r) {
        const l = r[a].get;
        if (l)
          try {
            l.call(e);
          } catch {}
      }
    }
  }
}
const ua = ["touchstart", "touchmove"];
function da(e) {
  return ua.includes(e);
}
let io = !1;
function ca() {
  io ||
    ((io = !0),
    document.addEventListener(
      "reset",
      (e) => {
        Promise.resolve().then(() => {
          var n;
          if (!e.defaultPrevented)
            for (const t of e.target.elements)
              (n = t.__on_r) == null || n.call(t);
        });
      },
      { capture: !0 }
    ));
}
function er(e) {
  var n = Q,
    t = G;
  dt(null), Tt(null);
  try {
    return e();
  } finally {
    dt(n), Tt(t);
  }
}
function tr(e, n, t, r = t) {
  e.addEventListener(n, () => er(t));
  const a = e.__on_r;
  a
    ? (e.__on_r = () => {
        a(), r(!0);
      })
    : (e.__on_r = () => r(!0)),
    ca();
}
const fa = new Set(),
  uo = new Set();
function pa(e, n, t, r = {}) {
  function a(l) {
    if ((r.capture || Jt.call(n, l), !l.cancelBubble))
      return er(() => (t == null ? void 0 : t.call(this, l)));
  }
  return (
    e.startsWith("pointer") || e.startsWith("touch") || e === "wheel"
      ? Xn(() => {
          n.addEventListener(e, a, r);
        })
      : n.addEventListener(e, a, r),
    a
  );
}
function I(e, n, t, r, a) {
  var l = { capture: r, passive: a },
    s = pa(e, n, t, l);
  (n === document.body ||
    n === window ||
    n === document ||
    n instanceof HTMLMediaElement) &&
    $o(() => {
      n.removeEventListener(e, s, l);
    });
}
function Jt(e) {
  var A;
  var n = this,
    t = n.ownerDocument,
    r = e.type,
    a = ((A = e.composedPath) == null ? void 0 : A.call(e)) || [],
    l = a[0] || e.target,
    s = 0,
    u = e.__root;
  if (u) {
    var d = a.indexOf(u);
    if (d !== -1 && (n === document || n === window)) {
      e.__root = n;
      return;
    }
    var c = a.indexOf(n);
    if (c === -1) return;
    d <= c && (s = d);
  }
  if (((l = a[s] || e.target), l !== n)) {
    pr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || t;
      },
    });
    var h = Q,
      g = G;
    dt(null), Tt(null);
    try {
      for (var y, v = []; l !== null; ) {
        var f = l.assignedSlot || l.parentNode || l.host || null;
        try {
          var L = l["__" + r];
          if (L != null && (!l.disabled || e.target === l))
            if (At(L)) {
              var [C, ...P] = L;
              C.apply(l, [e, ...P]);
            } else L.call(l, e);
        } catch (F) {
          y ? v.push(F) : (y = F);
        }
        if (e.cancelBubble || f === n || f === null) break;
        l = f;
      }
      if (y) {
        for (let F of v)
          queueMicrotask(() => {
            throw F;
          });
        throw y;
      }
    } finally {
      (e.__root = n), delete e.currentTarget, dt(h), Tt(g);
    }
  }
}
function nr(e) {
  var n = document.createElement("template");
  return (n.innerHTML = e.replaceAll("<!>", "<!---->")), n.content;
}
function Kt(e, n) {
  var t = G;
  t.nodes_start === null && ((t.nodes_start = e), (t.nodes_end = n));
}
function z(e, n) {
  var t = (n & Rr) !== 0,
    r = (n & zr) !== 0,
    a,
    l = !e.startsWith("<!>");
  return () => {
    a === void 0 && ((a = nr(l ? e : "<!>" + e)), t || (a = at(a)));
    var s = r || Io ? document.importNode(a, !0) : a.cloneNode(!0);
    if (t) {
      var u = at(s),
        d = s.lastChild;
      Kt(u, d);
    } else Kt(s, s);
    return s;
  };
}
function ya(e = "") {
  {
    var n = yn(e + "");
    return Kt(n, n), n;
  }
}
function co() {
  var e = document.createDocumentFragment(),
    n = document.createComment(""),
    t = yn();
  return e.append(n, t), Kt(n, t), e;
}
function D(e, n) {
  e !== null && e.before(n);
}
function B(e, n) {
  var t = n == null ? "" : typeof n == "object" ? n + "" : n;
  t !== (e.__t ?? (e.__t = e.nodeValue)) &&
    ((e.__t = t), (e.nodeValue = t + ""));
}
function va(e, n) {
  return ma(e, n);
}
const Pt = new Map();
function ma(
  e,
  { target: n, anchor: t, props: r = {}, events: a, context: l, intro: s = !0 }
) {
  Hr();
  var u = new Set(),
    d = (g) => {
      for (var y = 0; y < g.length; y++) {
        var v = g[y];
        if (!u.has(v)) {
          u.add(v);
          var f = da(v);
          n.addEventListener(v, Jt, { passive: f });
          var L = Pt.get(v);
          L === void 0
            ? (document.addEventListener(v, Jt, { passive: f }), Pt.set(v, 1))
            : Pt.set(v, L + 1);
        }
      }
    };
  d(In(fa)), uo.add(d);
  var c = void 0,
    h = Xr(() => {
      var g = t ?? n.appendChild(yn());
      return (
        Ht(() => {
          if (l) {
            Ge({});
            var y = te;
            y.c = l;
          }
          a && (r.$$events = a), (c = e(g, r) || {}), l && Ze();
        }),
        () => {
          var f;
          for (var y of u) {
            n.removeEventListener(y, Jt);
            var v = Pt.get(y);
            --v === 0
              ? (document.removeEventListener(y, Jt), Pt.delete(y))
              : Pt.set(y, v);
          }
          uo.delete(d),
            g !== t && ((f = g.parentNode) == null || f.removeChild(g));
        }
      );
    });
  return ha.set(c, h), c;
}
let ha = new WeakMap();
function re(e, n, [t, r] = [0, 0]) {
  var a = e,
    l = null,
    s = null,
    u = de,
    d = t > 0 ? jn : 0,
    c = !1;
  const h = (y, v = !0) => {
      (c = !0), g(v, y);
    },
    g = (y, v) => {
      u !== (u = y) &&
        (u
          ? (l ? ln(l) : v && (l = Ht(() => v(a))),
            s &&
              an(s, () => {
                s = null;
              }))
          : (s ? ln(s) : v && (s = Ht(() => v(a, [t + 1, r]))),
            l &&
              an(l, () => {
                l = null;
              })));
    };
  Kn(() => {
    (c = !1), n(h), c || g(null, null);
  }, d);
}
function Ut(e, n) {
  return n;
}
function ka(e, n, t, r) {
  for (var a = [], l = n.length, s = 0; s < l; s++) Wn(n[s].e, a, !0);
  var u = l > 0 && a.length === 0 && t !== null;
  if (u) {
    var d = t.parentNode;
    Yr(d), d.append(t), r.clear(), rt(e, n[0].prev, n[l - 1].next);
  }
  Yo(a, () => {
    for (var c = 0; c < l; c++) {
      var h = n[c];
      u || (r.delete(h.k), rt(e, h.prev, h.next)), it(h.e, !u);
    }
  });
}
function kt(e, n, t, r, a, l = null) {
  var s = e,
    u = { flags: n, items: new Map(), first: null },
    d = (n & Vo) !== 0;
  if (d) {
    var c = e;
    s = c.appendChild(yn());
  }
  var h = null,
    g = !1,
    y = ye(() => {
      var v = t();
      return At(v) ? v : v == null ? [] : In(v);
    });
  Kn(() => {
    var v = o(y),
      f = v.length;
    (g && f === 0) ||
      ((g = f === 0),
      ga(v, u, s, a, n, r, t),
      l !== null &&
        (f === 0
          ? h
            ? ln(h)
            : (h = Ht(() => l(s)))
          : h !== null &&
            an(h, () => {
              h = null;
            })),
      o(y));
  });
}
function ga(e, n, t, r, a, l, s) {
  var Y, ne, ee, le;
  var u = (a & Tr) !== 0,
    d = (a & (Un | Bn)) !== 0,
    c = e.length,
    h = n.items,
    g = n.first,
    y = g,
    v,
    f = null,
    L,
    C = [],
    P = [],
    A,
    F,
    b,
    S;
  if (u)
    for (S = 0; S < c; S += 1)
      (A = e[S]),
        (F = l(A, S)),
        (b = h.get(F)),
        b !== void 0 &&
          ((Y = b.a) == null || Y.measure(), (L ?? (L = new Set())).add(b));
  for (S = 0; S < c; S += 1) {
    if (((A = e[S]), (F = l(A, S)), (b = h.get(F)), b === void 0)) {
      var V = y ? y.e.nodes_start : t;
      (f = ba(V, n, f, f === null ? n.first : f.next, A, F, S, r, a, s)),
        h.set(F, f),
        (C = []),
        (P = []),
        (y = f.next);
      continue;
    }
    if (
      (d && xa(b, A, S, a),
      (b.e.f & Ye) !== 0 &&
        (ln(b.e),
        u &&
          ((ne = b.a) == null || ne.unfix(), (L ?? (L = new Set())).delete(b))),
      b !== y)
    ) {
      if (v !== void 0 && v.has(b)) {
        if (C.length < P.length) {
          var w = P[0],
            N;
          f = w.prev;
          var O = C[0],
            M = C[C.length - 1];
          for (N = 0; N < C.length; N += 1) fo(C[N], w, t);
          for (N = 0; N < P.length; N += 1) v.delete(P[N]);
          rt(n, O.prev, M.next),
            rt(n, f, O),
            rt(n, M, w),
            (y = w),
            (f = M),
            (S -= 1),
            (C = []),
            (P = []);
        } else
          v.delete(b),
            fo(b, y, t),
            rt(n, b.prev, b.next),
            rt(n, b, f === null ? n.first : f.next),
            rt(n, f, b),
            (f = b);
        continue;
      }
      for (C = [], P = []; y !== null && y.k !== F; )
        (y.e.f & Ye) === 0 && (v ?? (v = new Set())).add(y),
          P.push(y),
          (y = y.next);
      if (y === null) continue;
      b = y;
    }
    C.push(b), (f = b), (y = b.next);
  }
  if (y !== null || v !== void 0) {
    for (var H = v === void 0 ? [] : In(v); y !== null; )
      (y.e.f & Ye) === 0 && H.push(y), (y = y.next);
    var T = H.length;
    if (T > 0) {
      var $ = (a & Vo) !== 0 && c === 0 ? t : null;
      if (u) {
        for (S = 0; S < T; S += 1) (ee = H[S].a) == null || ee.measure();
        for (S = 0; S < T; S += 1) (le = H[S].a) == null || le.fix();
      }
      ka(n, H, $, h);
    }
  }
  u &&
    Xn(() => {
      var Ee;
      if (L !== void 0) for (b of L) (Ee = b.a) == null || Ee.apply();
    }),
    (G.first = n.first && n.first.e),
    (G.last = f && f.e);
}
function xa(e, n, t, r) {
  (r & Un) !== 0 && Tn(e.v, n), (r & Bn) !== 0 ? Tn(e.i, t) : (e.i = t);
}
function ba(e, n, t, r, a, l, s, u, d, c) {
  var h = (d & Un) !== 0,
    g = (d & Ar) === 0,
    y = h ? (g ? K(a, !1, !1) : Bt(a)) : a,
    v = (d & Bn) === 0 ? s : Bt(s),
    f = { i: v, v: y, k: l, a: null, e: null, prev: t, next: r };
  try {
    return (
      (f.e = Ht(() => u(e, y, v, c), Br)),
      (f.e.prev = t && t.e),
      (f.e.next = r && r.e),
      t === null ? (n.first = f) : ((t.next = f), (t.e.next = f.e)),
      r !== null && ((r.prev = f), (r.e.prev = f.e)),
      f
    );
  } finally {
  }
}
function fo(e, n, t) {
  for (
    var r = e.next ? e.next.e.nodes_start : t,
      a = n ? n.e.nodes_start : t,
      l = e.e.nodes_start;
    l !== r;

  ) {
    var s = vn(l);
    a.before(l), (l = s);
  }
}
function rt(e, n, t) {
  n === null ? (e.first = t) : ((n.next = t), (n.e.next = t && t.e)),
    t !== null && ((t.prev = n), (t.e.prev = n && n.e));
}
function _a(e, n, t = !1, r = !1, a = !1) {
  var l = e,
    s = "";
  J(() => {
    var u = G;
    if (
      s !== (s = n() ?? "") &&
      (u.nodes_start !== null &&
        (Bo(u.nodes_start, u.nodes_end), (u.nodes_start = u.nodes_end = null)),
      s !== "")
    ) {
      var d = s + "";
      t ? (d = `<svg>${d}</svg>`) : r && (d = `<math>${d}</math>`);
      var c = nr(d);
      if (((t || r) && (c = at(c)), Kt(at(c), c.lastChild), t || r))
        for (; at(c); ) l.before(at(c));
      else l.before(c);
    }
  });
}
function _t(e, n, t, r, a) {
  var u;
  var l = (u = n.$$slots) == null ? void 0 : u[t],
    s = !1;
  l === !0 && ((l = n[t === "default" ? "children" : t]), (s = !0)),
    l === void 0 ? a !== null && a(e) : l(e, s ? () => r : r);
}
const po = [
  ...` 	
\r\f \v\uFEFF`,
];
function wa(e, n, t) {
  var r = e == null ? "" : "" + e;
  if ((n && (r = r ? r + " " + n : n), t)) {
    for (var a in t)
      if (t[a]) r = r ? r + " " + a : a;
      else if (r.length)
        for (var l = a.length, s = 0; (s = r.indexOf(a, s)) >= 0; ) {
          var u = s + l;
          (s === 0 || po.includes(r[s - 1])) &&
          (u === r.length || po.includes(r[u]))
            ? (r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1))
            : (s = u);
        }
  }
  return r === "" ? null : r;
}
function Ca(e, n) {
  return e == null ? null : String(e);
}
function Ae(e, n, t, r, a, l) {
  var s = e.__className;
  if (s !== t || s === void 0) {
    var u = wa(t, r, l);
    u == null ? e.removeAttribute("class") : (e.className = u),
      (e.__className = t);
  } else if (l && a !== l)
    for (var d in l) {
      var c = !!l[d];
      (a == null || c !== !!a[d]) && e.classList.toggle(d, c);
    }
  return l;
}
function or(e, n, t, r) {
  var a = e.__style;
  if (a !== n) {
    var l = Ca(n);
    l == null ? e.removeAttribute("style") : (e.style.cssText = l),
      (e.__style = n);
  }
  return r;
}
function rr(e, n, t = !1) {
  if (e.multiple) {
    if (n == null) return;
    if (!At(n)) return Ur();
    for (var r of e.options) r.selected = n.includes(yo(r));
    return;
  }
  for (r of e.options) {
    var a = yo(r);
    if ($r(a, n)) {
      r.selected = !0;
      return;
    }
  }
  (!t || n !== void 0) && (e.selectedIndex = -1);
}
function Ea(e) {
  var n = new MutationObserver(() => {
    rr(e, e.__value);
  });
  n.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    $o(() => {
      n.disconnect();
    });
}
function yo(e) {
  return "__value" in e ? e.__value : e.value;
}
const Sa = Symbol("is custom element"),
  Pa = Symbol("is html");
function Cn(e, n) {
  var t = Gn(e);
  t.value === (t.value = n ?? void 0) ||
    (e.value === n && (n !== 0 || e.nodeName !== "PROGRESS")) ||
    (e.value = n ?? "");
}
function Na(e, n) {
  var t = Gn(e);
  t.checked !== (t.checked = n ?? void 0) && (e.checked = n);
}
function j(e, n, t, r) {
  var a = Gn(e);
  a[n] !== (a[n] = t) &&
    (n === "loading" && (e[gr] = t),
    t == null
      ? e.removeAttribute(n)
      : typeof t != "string" && Oa(e).includes(n)
      ? (e[n] = t)
      : e.setAttribute(n, t));
}
function Gn(e) {
  return (
    e.__attributes ??
    (e.__attributes = {
      [Sa]: e.nodeName.includes("-"),
      [Pa]: e.namespaceURI === Fr,
    })
  );
}
var vo = new Map();
function Oa(e) {
  var n = vo.get(e.nodeName);
  if (n) return n;
  vo.set(e.nodeName, (n = []));
  for (var t, r = e, a = Element.prototype; a !== r; ) {
    t = Po(r);
    for (var l in t) t[l].set && n.push(l);
    r = Rn(r);
  }
  return n;
}
function La(e, n, t = n) {
  var r = Gt();
  tr(e, "input", (a) => {
    var l = a ? e.defaultValue : e.value;
    if (((l = En(e) ? Sn(l) : l), t(l), r && l !== (l = n()))) {
      var s = e.selectionStart,
        u = e.selectionEnd;
      (e.value = l ?? ""),
        u !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(u, e.value.length)));
    }
  }),
    p(n) == null && e.value && t(En(e) ? Sn(e.value) : e.value),
    Qt(() => {
      var a = n();
      (En(e) && a === Sn(e.value)) ||
        (e.type === "date" && !a && !e.value) ||
        (a !== e.value && (e.value = a ?? ""));
    });
}
function Ta(e, n, t = n) {
  tr(e, "change", (r) => {
    var a = r ? e.defaultChecked : e.checked;
    t(a);
  }),
    p(n) == null && t(e.checked),
    Qt(() => {
      var r = n();
      e.checked = !!r;
    });
}
function En(e) {
  var n = e.type;
  return n === "number" || n === "range";
}
function Sn(e) {
  return e === "" ? null : +e;
}
function mo(e, n) {
  return e === n || (e == null ? void 0 : e[Ke]) === n;
}
function Aa(e = {}, n, t, r) {
  return (
    Gr(() => {
      var a, l;
      return (
        Qt(() => {
          (a = l),
            (l = []),
            p(() => {
              e !== t(...l) &&
                (n(e, ...l), a && mo(t(...a), e) && n(null, ...a));
            });
        }),
        () => {
          Xn(() => {
            l && mo(t(...l), e) && n(null, ...l);
          });
        }
      );
    }),
    e
  );
}
function ho(e) {
  return function (...n) {
    var t = n[0];
    t.target === this && (e == null || e.apply(this, n));
  };
}
function Nt(e) {
  return function (...n) {
    var t = n[0];
    return t.stopPropagation(), e == null ? void 0 : e.apply(this, n);
  };
}
function pt(e = !1) {
  const n = te,
    t = n.l.u;
  if (!t) return;
  let r = () => U(n.s);
  if (e) {
    let a = 0,
      l = {};
    const s = pn(() => {
      let u = !1;
      const d = n.s;
      for (const c in d) d[c] !== l[c] && ((l[c] = d[c]), (u = !0));
      return u && a++, a;
    });
    r = () => o(s);
  }
  t.b.length &&
    Wr(() => {
      ko(n, r), On(t.b);
    }),
    Vn(() => {
      const a = p(() => t.m.map(mr));
      return () => {
        for (const l of a) typeof l == "function" && l();
      };
    }),
    t.a.length &&
      Vn(() => {
        ko(n, r), On(t.a);
      });
}
function ko(e, n) {
  if (e.l.s) for (const t of e.l.s) o(t);
  n();
}
function go(e, n) {
  var l;
  var t = (l = e.$$events) == null ? void 0 : l[n.type],
    r = At(t) ? t.slice() : t == null ? [] : [t];
  for (var a of r) a.call(this, n);
}
let nn = !1;
function Va(e) {
  var n = nn;
  try {
    return (nn = !1), [e(), nn];
  } finally {
    nn = n;
  }
}
function X(e, n, t, r) {
  var F;
  var a = !Dt || (t & Dr) !== 0,
    l = (t & qr) !== 0,
    s = (t & Ir) !== 0,
    u = r,
    d = !0,
    c = () => (d && ((d = !1), (u = s ? p(r) : r)), u),
    h;
  if (l) {
    var g = Ke in e || kr in e;
    h =
      ((F = Lt(e, n)) == null ? void 0 : F.set) ??
      (g && n in e ? (b) => (e[n] = b) : void 0);
  }
  var y,
    v = !1;
  l ? ([y, v] = Va(() => e[n])) : (y = e[n]),
    y === void 0 && r !== void 0 && ((y = c()), h && (a && Er(), h(y)));
  var f;
  if (
    (a
      ? (f = () => {
          var b = e[n];
          return b === void 0 ? c() : ((d = !0), b);
        })
      : (f = () => {
          var b = e[n];
          return b !== void 0 && (u = void 0), b === void 0 ? u : b;
        }),
    a && (t & Mr) === 0)
  )
    return f;
  if (h) {
    var L = e.$$legacy;
    return function (b, S) {
      return arguments.length > 0
        ? ((!a || !S || L || v) && h(S ? f() : b), b)
        : f();
    };
  }
  var C = !1,
    P = ((t & Vr) !== 0 ? pn : ye)(() => ((C = !1), f()));
  l && o(P);
  var A = G;
  return function (b, S) {
    if (arguments.length > 0) {
      const V = S ? o(P) : a && l ? Ot(b) : b;
      return x(P, V), (C = !0), u !== void 0 && (u = V), b;
    }
    return (ut && C) || (A.f & fn) !== 0 ? P.v : o(P);
  };
}
function Zn(e) {
  te === null && Hn(),
    Dt && te.l !== null
      ? qa(te).m.push(e)
      : Vn(() => {
          const n = p(e);
          if (typeof n == "function") return n;
        });
}
function Da(e) {
  te === null && Hn(), Zn(() => () => p(e));
}
function Ma(e, n, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: r });
}
function ar() {
  const e = te;
  return (
    e === null && Hn(),
    (n, t, r) => {
      var l;
      const a = (l = e.s.$$events) == null ? void 0 : l[n];
      if (a) {
        const s = At(a) ? a.slice() : [a],
          u = Ma(n, t, r);
        for (const d of s) d.call(e.x, u);
        return !u.defaultPrevented;
      }
      return !0;
    }
  );
}
function qa(e) {
  var n = e.l;
  return n.u ?? (n.u = { a: [], b: [], m: [] });
}
const Ia = "5";
var So;
typeof window < "u" &&
  (
    (So = window.__svelte ?? (window.__svelte = {})).v ?? (So.v = new Set())
  ).add(Ia);
Lr();
const Wt = {
  ru: {
    appName: "FormBuilder",
    version: "1.1.0",
    author: "MaestroFusion360",
    footerText: "© 2025",
    menu: ["Открыть JSON", "Сохранить JSON", "Очистить всё"],
    dark: "Тёмная тема",
    langOther: "English",
    buttons: {
      openJson: "Открыть JSON (Ctrl+O)",
      saveJson: "Сохранить JSON (Ctrl+S)",
      addElement: "Добавить элемент (Ctrl+N)",
      removeElement: "Удалить элемент (Delete)",
      moveUp: "Переместить вверх (Ctrl+↑)",
      moveDown: "Переместить вниз (Ctrl+↓)",
      moveOut: "Вынести из контейнера (Ctrl+←)",
      moveIn: "Вложить в предыдущий элемент (Ctrl+→)",
      clearAll: "Очистить всё",
    },
    sections: { tree: "Дерево", properties: "Свойства", code: "Код" },
    placeholders: {
      emptyTree: "Дерево пустое. Нажмите ➕ чтобы добавить корневой элемент",
      selectComponent: "Выберите компонент для редактирования",
    },
    contextMenu: {
      undo: "↩️ Отмена",
      redo: "↪️ Вернуть",
      copy: "📑 Копировать",
      cut: "✂️ Вырезать",
      paste: "📋 Вставить",
    },
    hotkeys: {
      undo: "Ctrl+Z",
      redo: "Ctrl+Y",
      copy: "Ctrl+C",
      cut: "Ctrl+X",
      paste: "Ctrl+V",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} FormBuilder`,
      languageSwitch: "Язык",
    },
    header: { title: "FormBuilder — Конструктор форм" },
    tree: { collapse: "Свернуть", expand: "Развернуть" },
    properties: {
      title: "Свойства: {name}",
      noProps: "Нет свойств для настройки",
      events: "События ({count})",
    },
    search: {
      placeholder: "Найти HTML-элемент...",
      aria: "Поиск HTML-элементов",
      clear: "Очистить поиск",
    },
    code: {
      copy: "Копировать",
      copied: "Скопировано!",
      preview: "Предпросмотр",
      generated: "Сгенерированный HTML",
      addComponents: "Добавьте компоненты",
    },
    messages: { treeAriaLabel: "Дерево компонентов" },
  },
  en: {
    appName: "FormBuilder",
    version: "1.1.0",
    author: "MaestroFusion360",
    footerText: "© 2025",
    menu: ["Open JSON", "Save JSON", "Clear all"],
    dark: "Dark Mode",
    langOther: "Русский",
    buttons: {
      openJson: "Open JSON (Ctrl+O)",
      saveJson: "Save JSON (Ctrl+S)",
      addElement: "Add element (Ctrl+N)",
      removeElement: "Remove element (Delete)",
      moveUp: "Move up (Ctrl+↑)",
      moveDown: "Move down (Ctrl+↓)",
      moveOut: "Move out (Ctrl+←)",
      moveIn: "Move in (Ctrl+→)",
      clearAll: "Clear all",
    },
    sections: { tree: "Tree", properties: "Properties", code: "Code" },
    placeholders: {
      emptyTree: "Tree is empty. Click ➕ to add root element",
      selectComponent: "Select component to edit",
    },
    contextMenu: {
      undo: "↩️ Undo",
      redo: "↪️ Redo",
      copy: "📑 Copy",
      cut: "✂️ Cut",
      paste: "📋 Paste",
    },
    hotkeys: {
      undo: "Ctrl+Z",
      redo: "Ctrl+Y",
      copy: "Ctrl+C",
      cut: "Ctrl+X",
      paste: "Ctrl+V",
    },
    footer: {
      copyright: `© ${new Date().getFullYear()} FormBuilder`,
      languageSwitch: "Language",
    },
    header: { title: "FormBuilder — Form Builder" },
    tree: { collapse: "Collapse", expand: "Expand" },
    properties: {
      title: "Properties: {name}",
      noProps: "No properties to configure",
      events: "Events ({count})",
    },
    search: {
      placeholder: "Find HTML element...",
      aria: "Search HTML elements",
      clear: "Clear search",
    },
    code: {
      copy: "Copy",
      copied: "Copied!",
      preview: "Preview",
      generated: "Generated HTML",
      addComponents: "Add components",
    },
    messages: { treeAriaLabel: "Component tree" },
  },
};
var Ra = z(
    '<button type="button" tabindex="-1" class="svelte-dy1h3h"> </button>'
  ),
  za = z(
    '<button type="button" tabindex="-1" disabled style="opacity:0;pointer-events:none;" class="svelte-dy1h3h">•</button>'
  ),
  Fa = z(
    '<li class="tree-node svelte-dy1h3h"><div role="treeitem" tabindex="0"><!> <span class="node-name svelte-dy1h3h"> </span></div> <!></li>'
  ),
  $a = z(
    '<div class="tree-scroll svelte-dy1h3h"><ul class="tree-list svelte-dy1h3h"></ul></div>'
  );
function qn(e, n) {
  Ge(n, !1);
  const t = K();
  let r = X(n, "data", 24, () => []),
    a = X(n, "selectedId", 12),
    l = X(n, "expandedNodes", 24, () => new Set()),
    s = localStorage.getItem("lang") || "ru";
  const u = ar();
  function d(v, f) {
    f.stopPropagation(), u("toggleExpand", v);
  }
  function c(v) {
    a(v), u("select", v);
  }
  function h(v, f) {
    (v.key === "Enter" || v.key === " ") && (v.preventDefault(), c(f));
  }
  _e(
    () => Wt,
    () => {
      x(t, Wt[s]);
    }
  ),
    Zt(),
    pt();
  var g = $a(),
    y = m(g);
  kt(
    y,
    5,
    r,
    (v) => v.id,
    (v, f) => {
      var L = Fa(),
        C = m(L);
      let P;
      var A = m(C);
      {
        var F = (O) => {
            var M = Ra(),
              H = m(M);
            J(
              (T, $) => {
                j(M, "aria-label", T), B(H, $);
              },
              [
                () => (
                  U(l()),
                  o(f),
                  o(t),
                  p(() =>
                    l().has(o(f).id)
                      ? o(t).sections.tree + " - " + o(t).contextMenu.undo
                      : o(t).sections.tree + " - " + o(t).contextMenu.redo
                  )
                ),
                () => (U(l()), o(f), p(() => (l().has(o(f).id) ? "▼" : "▶"))),
              ],
              ye
            ),
              I(
                "click",
                M,
                Nt((T) => d(o(f).id, T))
              ),
              D(O, M);
          },
          b = (O) => {
            var M = za();
            D(O, M);
          };
        re(A, (O) => {
          o(f),
            p(() => o(f).children && o(f).children.length > 0)
              ? O(F)
              : O(b, !1);
        });
      }
      var S = E(A, 2),
        V = m(S),
        w = E(C, 2);
      {
        var N = (O) => {
          qn(O, {
            get data() {
              return o(f), p(() => o(f).children);
            },
            get expandedNodes() {
              return l();
            },
            get selectedId() {
              return a();
            },
            set selectedId(M) {
              a(M);
            },
            $$events: {
              toggleExpand(M) {
                go.call(this, n, M);
              },
              select(M) {
                go.call(this, n, M);
              },
            },
            $$legacy: !0,
          });
        };
        re(w, (O) => {
          o(f),
            U(l()),
            p(
              () =>
                o(f).children && o(f).children.length > 0 && l().has(o(f).id)
            ) && O(N);
        });
      }
      J(
        (O, M) => {
          (P = Ae(C, 1, "treeitem svelte-dy1h3h", null, P, O)),
            j(C, "aria-selected", (o(f), U(a()), p(() => o(f).id === a()))),
            j(C, "aria-expanded", M),
            B(V, (o(f), p(() => o(f).name)));
        },
        [
          () => ({ selected: o(f).id === a() }),
          () => (
            o(f),
            U(l()),
            p(() =>
              o(f).children && o(f).children.length > 0
                ? l().has(o(f).id)
                : void 0
            )
          ),
        ],
        ye
      ),
        I("click", C, () => c(o(f).id)),
        I("keydown", C, (O) => h(O, o(f).id)),
        D(v, L);
    }
  ),
    D(e, g),
    Ze();
}
var ja = z('<input type="text" autocomplete="off" class="svelte-1u41up8"/>'),
  Ja = z('<input type="checkbox" class="svelte-1u41up8"/>'),
  Ua = z("<option> </option>"),
  Ba = z('<select class="svelte-1u41up8"></select>'),
  Ha = z(
    '<div class="property-row svelte-1u41up8"><label class="svelte-1u41up8"> </label> <!></div>'
  ),
  Ya = z(
    '<div class="property-row textarea-row svelte-1u41up8"><label class="svelte-1u41up8"> </label> <textarea autocomplete="off" class="svelte-1u41up8"></textarea></div>'
  ),
  Ka = z(
    '<div class="property-row svelte-1u41up8"><label class="svelte-1u41up8"> </label> <input type="text" autocomplete="off" class="svelte-1u41up8"/></div>'
  ),
  Wa = z(
    '<details class="events-accordion svelte-1u41up8"><summary class="svelte-1u41up8"> </summary> <div class="event-props-list svelte-1u41up8"></div></details>'
  ),
  Xa = z("<!> <!> <!>", 1),
  Ga = z('<div class="empty-hint svelte-1u41up8"> </div>'),
  Za = z(
    '<div class="props svelte-1u41up8"><h2 class="svelte-1u41up8"> </h2> <!></div>'
  );
function xo(e, n) {
  Ge(n, !1);
  const t = K(),
    r = K(),
    a = K(),
    l = K();
  let s = X(n, "component", 12),
    u = X(n, "onUpdate", 8),
    d = X(n, "lang", 8, "ru");
  function c(C, P) {
    try {
      s((s().propsValues[C] = P), !0), u()(C, P);
    } catch (A) {
      console.error("Ошибка обновления свойства:", A);
    }
  }
  _e(
    () => U(d()),
    () => {
      x(t, Wt[d()]);
    }
  ),
    _e(
      () => U(s()),
      () => {
        var C, P;
        x(
          r,
          ((P = (C = s()) == null ? void 0 : C.props) == null
            ? void 0
            : P.filter((A) => A.type !== "textarea" && A.type !== "event")) ||
            []
        );
      }
    ),
    _e(
      () => U(s()),
      () => {
        var C, P;
        x(
          a,
          ((P = (C = s()) == null ? void 0 : C.props) == null
            ? void 0
            : P.filter((A) => A.type === "textarea")) || []
        );
      }
    ),
    _e(
      () => U(s()),
      () => {
        var C, P;
        x(
          l,
          ((P = (C = s()) == null ? void 0 : C.props) == null
            ? void 0
            : P.filter((A) => A.type === "event")) || []
        );
      }
    ),
    Zt(),
    pt();
  var h = Za(),
    g = m(h),
    y = m(g),
    v = E(g, 2);
  {
    var f = (C) => {
        var P = Xa(),
          A = lt(P);
        kt(
          A,
          1,
          () => o(r),
          Ut,
          (V, w, N) => {
            var O = Ha(),
              M = m(O),
              H = m(M),
              T = E(M, 2);
            {
              var $ = (ne) => {
                  var ee = ja();
                  J(() => {
                    j(
                      ee,
                      "id",
                      (U(s()),
                      o(w),
                      p(() => s().name + "-" + o(w).key + "-" + N))
                    ),
                      Cn(
                        ee,
                        (U(s()), o(w), p(() => s().propsValues[o(w).key]))
                      );
                  }),
                    I("input", ee, (le) => c(o(w).key, le.target.value)),
                    D(ne, ee);
                },
                Y = (ne, ee) => {
                  {
                    var le = (ke) => {
                        var se = Ja();
                        J(() => {
                          j(
                            se,
                            "id",
                            (U(s()),
                            o(w),
                            p(() => s().name + "-" + o(w).key + "-" + N))
                          ),
                            Na(
                              se,
                              (U(s()), o(w), p(() => s().propsValues[o(w).key]))
                            );
                        }),
                          I("change", se, (ie) =>
                            c(o(w).key, ie.target.checked)
                          ),
                          D(ke, se);
                      },
                      Ee = (ke, se) => {
                        {
                          var ie = (yt) => {
                            var Se = Ba();
                            kt(
                              Se,
                              5,
                              () => (o(w), p(() => o(w).options)),
                              Ut,
                              (Ct, Et) => {
                                var vt = Ua(),
                                  Mt = m(vt),
                                  tn = {};
                                J(() => {
                                  B(Mt, o(Et)),
                                    tn !== (tn = o(Et)) &&
                                      (vt.value = (vt.__value = o(Et)) ?? "");
                                }),
                                  D(Ct, vt);
                              }
                            );
                            var wt;
                            Ea(Se),
                              J(() => {
                                j(
                                  Se,
                                  "id",
                                  (U(s()),
                                  o(w),
                                  p(() => s().name + "-" + o(w).key + "-" + N))
                                ),
                                  wt !==
                                    (wt =
                                      (U(s()),
                                      o(w),
                                      p(() => s().propsValues[o(w).key]))) &&
                                    ((Se.value =
                                      (Se.__value =
                                        (U(s()),
                                        o(w),
                                        p(() => s().propsValues[o(w).key]))) ??
                                      ""),
                                    rr(
                                      Se,
                                      (U(s()),
                                      o(w),
                                      p(() => s().propsValues[o(w).key]))
                                    ));
                              }),
                              I("change", Se, (Ct) =>
                                c(o(w).key, Ct.target.value)
                              ),
                              D(yt, Se);
                          };
                          re(
                            ke,
                            (yt) => {
                              o(w), p(() => o(w).type === "select") && yt(ie);
                            },
                            se
                          );
                        }
                      };
                    re(
                      ne,
                      (ke) => {
                        o(w),
                          p(() => o(w).type === "checkbox")
                            ? ke(le)
                            : ke(Ee, !1);
                      },
                      ee
                    );
                  }
                };
              re(T, (ne) => {
                o(w), p(() => o(w).type === "text") ? ne($) : ne(Y, !1);
              });
            }
            J(() => {
              j(
                M,
                "for",
                (U(s()), o(w), p(() => s().name + "-" + o(w).key + "-" + N))
              ),
                B(H, `${(o(w), p(() => o(w).key) ?? "")}:`);
            }),
              D(V, O);
          }
        );
        var F = E(A, 2);
        kt(
          F,
          1,
          () => o(a),
          Ut,
          (V, w, N) => {
            var O = Ya(),
              M = m(O),
              H = m(M),
              T = E(M, 2);
            J(() => {
              j(
                M,
                "for",
                (U(s()), o(w), p(() => s().name + "-" + o(w).key + "-" + N))
              ),
                B(H, `${(o(w), p(() => o(w).key) ?? "")}:`),
                j(
                  T,
                  "id",
                  (U(s()), o(w), p(() => s().name + "-" + o(w).key + "-" + N))
                ),
                Cn(T, (U(s()), o(w), p(() => s().propsValues[o(w).key])));
            }),
              I("input", T, ($) => c(o(w).key, $.target.value)),
              D(V, O);
          }
        );
        var b = E(F, 2);
        {
          var S = (V) => {
            var w = Wa(),
              N = m(w),
              O = m(N),
              M = E(N, 2);
            kt(
              M,
              5,
              () => o(l),
              Ut,
              (H, T, $) => {
                var Y = Ka(),
                  ne = m(Y),
                  ee = m(ne),
                  le = E(ne, 2);
                J(() => {
                  j(
                    ne,
                    "for",
                    (U(s()),
                    o(T),
                    p(() => s().name + "-event-" + o(T).key + "-" + $))
                  ),
                    B(ee, `${(o(T), p(() => o(T).key) ?? "")}:`),
                    j(
                      le,
                      "id",
                      (U(s()),
                      o(T),
                      p(() => s().name + "-event-" + o(T).key + "-" + $))
                    ),
                    Cn(
                      le,
                      (U(s()), o(T), p(() => s().propsValues[o(T).key] || ""))
                    );
                }),
                  I("input", le, (Ee) => c(o(T).key, Ee.target.value)),
                  D(H, Y);
              }
            ),
              J(
                (H) => B(O, H),
                [
                  () => (
                    o(t),
                    o(l),
                    p(() =>
                      o(t).properties.events.replace("{count}", o(l).length)
                    )
                  ),
                ],
                ye
              ),
              D(V, w);
          };
          re(b, (V) => {
            o(l), p(() => o(l).length > 0) && V(S);
          });
        }
        D(C, P);
      },
      L = (C) => {
        var P = Ga(),
          A = m(P);
        J(() => B(A, (o(t), p(() => o(t).properties.noProps)))), D(C, P);
      };
    re(v, (C) => {
      U(s()),
        p(() => {
          var P, A;
          return (
            ((A = (P = s()) == null ? void 0 : P.props) == null
              ? void 0
              : A.length) > 0
          );
        })
          ? C(f)
          : C(L, !1);
    });
  }
  J(
    (C) => B(y, C),
    [
      () => (
        o(t),
        U(s()),
        p(() => {
          var C;
          return o(t).properties.title.replace(
            "{name}",
            ((C = s()) == null ? void 0 : C.name) || ""
          );
        })
      ),
    ],
    ye
  ),
    D(e, h),
    Ze();
}
const Qa = [
    { key: "onclick", type: "event" },
    { key: "ondblclick", type: "event" },
    { key: "onmousedown", type: "event" },
    { key: "onmouseup", type: "event" },
    { key: "onmouseover", type: "event" },
    { key: "onmousemove", type: "event" },
    { key: "onmouseout", type: "event" },
    { key: "onmouseenter", type: "event" },
    { key: "onmouseleave", type: "event" },
    { key: "oncontextmenu", type: "event" },
    { key: "onwheel", type: "event" },
    { key: "onkeydown", type: "event" },
    { key: "onkeypress", type: "event" },
    { key: "onkeyup", type: "event" },
    { key: "onfocus", type: "event" },
    { key: "onblur", type: "event" },
  ],
  bo = [
    { key: "ondrag", type: "event" },
    { key: "ondragend", type: "event" },
    { key: "ondragenter", type: "event" },
    { key: "ondragleave", type: "event" },
    { key: "ondragover", type: "event" },
    { key: "ondragstart", type: "event" },
    { key: "ondrop", type: "event" },
  ],
  _o = [
    { key: "onabort", type: "event" },
    { key: "oncanplay", type: "event" },
    { key: "oncanplaythrough", type: "event" },
    { key: "oncuechange", type: "event" },
    { key: "ondurationchange", type: "event" },
    { key: "onemptied", type: "event" },
    { key: "onended", type: "event" },
    { key: "onerror", type: "event" },
    { key: "onloadeddata", type: "event" },
    { key: "onloadedmetadata", type: "event" },
    { key: "onloadstart", type: "event" },
    { key: "onpause", type: "event" },
    { key: "onplay", type: "event" },
    { key: "onplaying", type: "event" },
    { key: "onprogress", type: "event" },
    { key: "onratechange", type: "event" },
    { key: "onseeked", type: "event" },
    { key: "onseeking", type: "event" },
    { key: "onstalled", type: "event" },
    { key: "onsuspend", type: "event" },
    { key: "ontimeupdate", type: "event" },
    { key: "onvolumechange", type: "event" },
    { key: "onwaiting", type: "event" },
  ],
  jt = [
    { key: "onchange", type: "event" },
    { key: "oninput", type: "event" },
    { key: "oninvalid", type: "event" },
    { key: "onreset", type: "event" },
    { key: "onsearch", type: "event" },
    { key: "onselect", type: "event" },
    { key: "onsubmit", type: "event" },
  ],
  el = [
    "html",
    "head",
    "title",
    "meta",
    "base",
    "link",
    "style",
    "script",
    "noscript",
    "param",
    "source",
    "track",
    "datalist",
    "legend",
    "caption",
    "col",
    "colgroup",
    "tbody",
    "thead",
    "tfoot",
    "wbr",
    "rb",
    "rt",
    "rp",
  ];
function _(e, n = []) {
  return el.includes(e.name)
    ? { ...e, props: [...e.props] }
    : { ...e, props: [...e.props, ...Qa, ...n] };
}
const tl = [
    {
      name: "html",
      category: "Контейнеры",
      props: [{ key: "lang", type: "text", default: "en" }],
      allowedChildren: ["head", "body"],
    },
    {
      name: "head",
      category: "Контейнеры",
      props: [],
      allowedChildren: [
        "title",
        "base",
        "link",
        "meta",
        "style",
        "script",
        "noscript",
      ],
    },
    {
      name: "title",
      category: "Мета",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["head"],
    },
    {
      name: "meta",
      category: "Мета",
      props: [
        { key: "name", type: "text", default: "" },
        { key: "content", type: "text", default: "" },
        { key: "charset", type: "text", default: "" },
        { key: "http-equiv", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["head"],
    },
    {
      name: "base",
      category: "Мета",
      props: [
        { key: "href", type: "text", default: "" },
        { key: "target", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["head"],
    },
    {
      name: "link",
      category: "Мета",
      props: [
        { key: "rel", type: "text", default: "" },
        { key: "href", type: "text", default: "" },
        { key: "type", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["head"],
    },
    {
      name: "style",
      category: "Стили",
      props: [
        { key: "type", type: "text", default: "" },
        { key: "text", type: "textarea", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["head", "html"],
    },
    {
      name: "script",
      category: "Скрипты",
      props: [
        { key: "src", type: "text", default: "" },
        { key: "type", type: "text", default: "" },
        { key: "async", type: "checkbox", default: !1 },
        { key: "defer", type: "checkbox", default: !1 },
        { key: "text", type: "textarea", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["head", "body", "html"],
    },
    {
      name: "noscript",
      category: "Скрипты",
      props: [],
      allowedChildren: ["*"],
      requiredParent: ["head", "body"],
    },
    {
      name: "param",
      category: "Медиа",
      props: [
        { key: "name", type: "text", default: "" },
        { key: "value", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["object"],
    },
    {
      name: "source",
      category: "Медиа",
      props: [
        { key: "src", type: "text", default: "" },
        { key: "type", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["video", "audio"],
    },
    {
      name: "track",
      category: "Медиа",
      props: [
        { key: "src", type: "text", default: "" },
        { key: "kind", type: "text", default: "" },
        { key: "srclang", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["video"],
    },
    {
      name: "col",
      category: "Таблицы",
      props: [{ key: "span", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["colgroup"],
    },
    {
      name: "colgroup",
      category: "Таблицы",
      props: [{ key: "span", type: "text", default: "" }],
      allowedChildren: ["col"],
      requiredParent: ["table"],
    },
    {
      name: "tbody",
      category: "Таблицы",
      props: [],
      allowedChildren: ["tr"],
      requiredParent: ["table"],
    },
    {
      name: "thead",
      category: "Таблицы",
      props: [],
      allowedChildren: ["tr"],
      requiredParent: ["table"],
    },
    {
      name: "tfoot",
      category: "Таблицы",
      props: [],
      allowedChildren: ["tr"],
      requiredParent: ["table"],
    },
    {
      name: "wbr",
      category: "Текст",
      props: [],
      allowedChildren: [],
      requiredParent: ["p", "span", "h1-h6"],
    },
    {
      name: "rp",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["ruby"],
    },
    {
      name: "rt",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["ruby"],
    },
    {
      name: "rb",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["ruby"],
    },
  ],
  nl = [
    _(
      {
        name: "body",
        category: "Контейнеры",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
        ],
        allowedChildren: [
          "header",
          "footer",
          "main",
          "nav",
          "section",
          "article",
          "aside",
          "div",
          "form",
          "p",
          "h1",
          "h2",
          "h3",
          "h4",
          "h5",
          "h6",
          "ul",
          "ol",
          "table",
          "img",
          "button",
          "span",
          "label",
          "br",
          "hr",
          "input",
          "select",
          "textarea",
          "video",
          "audio",
          "iframe",
          "canvas",
          "svg",
          "a",
          "script",
          "dialog",
        ],
      },
      bo
    ),
    _(
      {
        name: "form",
        category: "Контейнеры",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          {
            key: "method",
            type: "select",
            options: ["get", "post"],
            default: "post",
          },
          { key: "action", type: "text", default: "" },
          {
            key: "autocomplete",
            type: "select",
            options: ["on", "off"],
            default: "on",
          },
          { key: "novalidate", type: "checkbox", default: !1 },
          { key: "target", type: "text", default: "" },
          { key: "enctype", type: "text", default: "" },
        ],
        allowedChildren: [
          "input",
          "button",
          "label",
          "select",
          "textarea",
          "fieldset",
          "legend",
          "div",
          "p",
          "br",
          "a",
        ],
      },
      jt
    ),
    _(
      {
        name: "div",
        category: "Контейнеры",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
        ],
        allowedChildren: ["*"],
      },
      bo
    ),
    _({
      name: "section",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "p",
        "ul",
        "ol",
        "div",
        "form",
        "article",
        "aside",
        "nav",
        "a",
      ],
    }),
    _({
      name: "main",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: [
        "section",
        "article",
        "aside",
        "nav",
        "div",
        "form",
        "a",
      ],
    }),
    _({
      name: "article",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: [
        "header",
        "footer",
        "section",
        "p",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "div",
        "form",
        "a",
      ],
    }),
    _({
      name: "aside",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: ["p", "nav", "ul", "ol", "div", "a"],
    }),
    _({
      name: "nav",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: ["ul", "ol", "a", "div", "p", "button"],
    }),
    _({
      name: "header",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: [
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "nav",
        "div",
        "p",
        "a",
      ],
    }),
    _({
      name: "footer",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: ["p", "nav", "div", "a"],
    }),
    _({
      name: "ul",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: ["li"],
    }),
    _({
      name: "ol",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        {
          key: "type",
          type: "select",
          options: ["", "1", "a", "A", "i", "I"],
          default: "",
        },
        { key: "start", type: "text", default: "" },
        { key: "reversed", type: "checkbox", default: !1 },
      ],
      allowedChildren: ["li"],
    }),
    _({
      name: "li",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "value", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["p", "span", "ul", "ol", "div", "a"],
      requiredParent: ["ul", "ol"],
    }),
    _({
      name: "a",
      category: "Текст",
      props: [
        { key: "href", type: "text", default: "" },
        {
          key: "target",
          type: "select",
          options: ["", "_blank", "_self", "_parent", "_top"],
          default: "",
        },
        { key: "rel", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "img"],
      requiredParent: ["p", "span", "li", "div", "td", "th"],
    }),
    _(
      {
        name: "input",
        category: "Элементы формы",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          {
            key: "type",
            type: "select",
            options: [
              "text",
              "password",
              "number",
              "email",
              "checkbox",
              "radio",
              "date",
              "file",
              "hidden",
              "tel",
              "url",
              "search",
              "range",
              "color",
              "datetime-local",
              "month",
              "time",
              "week",
            ],
            default: "text",
          },
          { key: "name", type: "text", default: "" },
          { key: "value", type: "text", default: "" },
          { key: "placeholder", type: "text", default: "" },
          { key: "checked", type: "checkbox", default: !1 },
          { key: "required", type: "checkbox", default: !1 },
          { key: "readonly", type: "checkbox", default: !1 },
          { key: "disabled", type: "checkbox", default: !1 },
          { key: "min", type: "text", default: "" },
          { key: "max", type: "text", default: "" },
          { key: "step", type: "text", default: "" },
          { key: "pattern", type: "text", default: "" },
          {
            key: "autocomplete",
            type: "select",
            options: ["on", "off"],
            default: "on",
          },
          { key: "autofocus", type: "checkbox", default: !1 },
          { key: "multiple", type: "checkbox", default: !1 },
          { key: "size", type: "text", default: "" },
          { key: "maxlength", type: "text", default: "" },
          { key: "minlength", type: "text", default: "" },
        ],
        allowedChildren: [],
      },
      jt
    ),
    _(
      {
        name: "textarea",
        category: "Элементы формы",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          { key: "name", type: "text", default: "" },
          { key: "rows", type: "text", default: "3" },
          { key: "cols", type: "text", default: "30" },
          { key: "placeholder", type: "text", default: "" },
          { key: "value", type: "text", default: "" },
          { key: "required", type: "checkbox", default: !1 },
          { key: "readonly", type: "checkbox", default: !1 },
          { key: "disabled", type: "checkbox", default: !1 },
          { key: "maxlength", type: "text", default: "" },
          { key: "minlength", type: "text", default: "" },
          { key: "autofocus", type: "checkbox", default: !1 },
          {
            key: "wrap",
            type: "select",
            options: ["soft", "hard", "off"],
            default: "soft",
          },
        ],
        allowedChildren: [],
      },
      jt
    ),
    _(
      {
        name: "select",
        category: "Элементы формы",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          { key: "name", type: "text", default: "" },
          { key: "multiple", type: "checkbox", default: !1 },
          { key: "required", type: "checkbox", default: !1 },
          { key: "disabled", type: "checkbox", default: !1 },
          { key: "autofocus", type: "checkbox", default: !1 },
          { key: "size", type: "text", default: "" },
        ],
        allowedChildren: ["option"],
        requiredParent: ["form", "div", "fieldset"],
      },
      jt
    ),
    _({
      name: "option",
      category: "Элементы формы",
      props: [
        { key: "value", type: "text", default: "" },
        { key: "selected", type: "checkbox", default: !1 },
        { key: "disabled", type: "checkbox", default: !1 },
        { key: "label", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      requiredParent: ["select", "datalist"],
    }),
    _(
      {
        name: "button",
        category: "Элементы формы",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          {
            key: "type",
            type: "select",
            options: ["button", "submit", "reset"],
            default: "button",
          },
          { key: "name", type: "text", default: "" },
          { key: "value", type: "text", default: "" },
          { key: "disabled", type: "checkbox", default: !1 },
          { key: "autofocus", type: "checkbox", default: !1 },
          { key: "form", type: "text", default: "" },
          { key: "formaction", type: "text", default: "" },
          { key: "formenctype", type: "text", default: "" },
          { key: "formmethod", type: "text", default: "" },
          { key: "formnovalidate", type: "checkbox", default: !1 },
          { key: "formtarget", type: "text", default: "" },
          { key: "text", type: "text", default: "Click Me" },
        ],
        allowedChildren: ["span", "strong", "em"],
      },
      jt
    ),
    _({
      name: "label",
      category: "Элементы формы",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "for", type: "text", default: "" },
        { key: "form", type: "text", default: "" },
        { key: "text", type: "text", default: "Label text" },
      ],
      allowedChildren: ["input", "span", "strong", "em"],
    }),
    _({
      name: "fieldset",
      category: "Элементы формы",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "disabled", type: "checkbox", default: !1 },
        { key: "form", type: "text", default: "" },
        { key: "name", type: "text", default: "" },
      ],
      allowedChildren: [
        "legend",
        "input",
        "label",
        "select",
        "textarea",
        "div",
        "a",
      ],
    }),
    _({
      name: "legend",
      category: "Элементы формы",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: ["span", "strong", "em"],
      requiredParent: ["fieldset"],
    }),
    _({
      name: "datalist",
      category: "Элементы формы",
      props: [{ key: "id", type: "text", default: "" }],
      allowedChildren: ["option"],
    }),
    _({
      name: "span",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["strong", "em", "br", "a"],
    }),
    _({
      name: "p",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
    }),
    _({
      name: "h1",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
    }),
    _({
      name: "h2",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
    }),
    _({
      name: "h3",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
    }),
    _({
      name: "h4",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
    }),
    _({
      name: "h5",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
    }),
    _({
      name: "h6",
      category: "Текст",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
    }),
    _({
      name: "strong",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: ["span", "em", "br", "a"],
    }),
    _({
      name: "em",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: ["span", "strong", "br", "a"],
    }),
    _({ name: "br", category: "Текст", props: [], allowedChildren: [] }),
    _({ name: "hr", category: "Текст", props: [], allowedChildren: [] }),
    _(
      {
        name: "img",
        category: "Медиа",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "src", type: "text", default: "" },
          { key: "alt", type: "text", default: "" },
          { key: "width", type: "text", default: "" },
          { key: "height", type: "text", default: "" },
          {
            key: "loading",
            type: "select",
            options: ["", "lazy", "eager"],
            default: "",
          },
        ],
        allowedChildren: [],
      },
      [
        { key: "onload", type: "event" },
        { key: "onerror", type: "event" },
      ]
    ),
    _(
      {
        name: "video",
        category: "Медиа",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          { key: "src", type: "text", default: "" },
          { key: "controls", type: "checkbox", default: !1 },
          { key: "autoplay", type: "checkbox", default: !1 },
          { key: "loop", type: "checkbox", default: !1 },
          { key: "muted", type: "checkbox", default: !1 },
          { key: "poster", type: "text", default: "" },
          { key: "width", type: "text", default: "" },
          { key: "height", type: "text", default: "" },
        ],
        allowedChildren: ["source", "track"],
      },
      _o
    ),
    _(
      {
        name: "audio",
        category: "Медиа",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          { key: "src", type: "text", default: "" },
          { key: "controls", type: "checkbox", default: !1 },
          { key: "autoplay", type: "checkbox", default: !1 },
          { key: "loop", type: "checkbox", default: !1 },
          { key: "muted", type: "checkbox", default: !1 },
        ],
        allowedChildren: ["source"],
      },
      _o
    ),
    _(
      {
        name: "iframe",
        category: "Медиа",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          { key: "src", type: "text", default: "" },
          { key: "width", type: "text", default: "" },
          { key: "height", type: "text", default: "" },
          { key: "title", type: "text", default: "" },
        ],
        allowedChildren: [],
      },
      [
        { key: "onload", type: "event" },
        { key: "onerror", type: "event" },
      ]
    ),
    _({
      name: "canvas",
      category: "Медиа",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "width", type: "text", default: "" },
        { key: "height", type: "text", default: "" },
      ],
      allowedChildren: [],
    }),
    _({
      name: "svg",
      category: "Медиа",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "width", type: "text", default: "" },
        { key: "height", type: "text", default: "" },
        { key: "viewBox", type: "text", default: "" },
      ],
      allowedChildren: ["path", "circle", "rect", "line", "text", "g"],
    }),
    _({
      name: "table",
      category: "Таблицы",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: ["caption", "thead", "tbody", "tr"],
    }),
    _({
      name: "tr",
      category: "Таблицы",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
      ],
      allowedChildren: ["th", "td"],
      requiredParent: ["thead", "tbody", "table"],
    }),
    _({
      name: "th",
      category: "Таблицы",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        {
          key: "scope",
          type: "select",
          options: ["", "col", "row"],
          default: "",
        },
        { key: "colspan", type: "text", default: "" },
        { key: "rowspan", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "a"],
      requiredParent: ["tr"],
    }),
    _({
      name: "td",
      category: "Таблицы",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "style", type: "text", default: "" },
        { key: "colspan", type: "text", default: "" },
        { key: "rowspan", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "em", "br", "p", "ul", "ol", "a"],
      requiredParent: ["tr"],
    }),
    _({
      name: "caption",
      category: "Таблицы",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: ["strong", "em", "span", "a"],
      requiredParent: ["table"],
    }),
    _({
      name: "address",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: ["p", "a", "span"],
      requiredParent: ["body", "article", "section"],
    }),
    _({
      name: "cite",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["p", "blockquote", "li"],
    }),
    _({
      name: "bdi",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["p", "span", "li"],
    }),
    _({
      name: "data",
      category: "Текст",
      props: [
        { key: "value", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["p", "span", "li"],
    }),
    _({
      name: "map",
      category: "Медиа",
      props: [{ key: "name", type: "text", default: "" }],
      allowedChildren: ["area"],
      requiredParent: ["body", "div"],
    }),
    _({
      name: "area",
      category: "Медиа",
      props: [
        {
          key: "shape",
          type: "select",
          options: ["rect", "circle", "poly", "default"],
          default: "rect",
        },
        { key: "coords", type: "text", default: "" },
        { key: "href", type: "text", default: "" },
        { key: "alt", type: "text", default: "" },
      ],
      allowedChildren: [],
      requiredParent: ["map"],
    }),
    _({
      name: "object",
      category: "Медиа",
      props: [
        { key: "data", type: "text", default: "" },
        { key: "type", type: "text", default: "" },
      ],
      allowedChildren: ["param"],
      requiredParent: ["body", "div"],
    }),
    _({
      name: "menu",
      category: "Контейнеры",
      props: [],
      allowedChildren: ["li", "menuitem"],
      requiredParent: ["body", "nav"],
    }),
    _({
      name: "menuitem",
      category: "Интерактивные",
      props: [{ key: "label", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["menu"],
    }),
    _({
      name: "shadow",
      category: "Веб-компоненты",
      props: [],
      allowedChildren: ["*"],
      requiredParent: ["template"],
    }),
    _({
      name: "marquee",
      category: "Текст",
      props: [
        {
          key: "direction",
          type: "select",
          options: ["left", "right", "up", "down"],
          default: "left",
        },
        {
          key: "behavior",
          type: "select",
          options: ["scroll", "slide", "alternate"],
          default: "scroll",
        },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["span", "strong", "a"],
      requiredParent: ["body", "div"],
    }),
    _({
      name: "b",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["p", "span", "li"],
    }),
    _({
      name: "i",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["p", "span", "li"],
    }),
    _({
      name: "ruby",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: ["rb", "rt", "rp"],
      requiredParent: ["p", "span"],
    }),
    _(
      {
        name: "dialog",
        category: "Контейнеры",
        props: [
          { key: "id", type: "text", default: "" },
          { key: "class", type: "text", default: "" },
          { key: "style", type: "text", default: "" },
          { key: "open", type: "checkbox", default: !1 },
        ],
        allowedChildren: ["p", "form", "button", "span", "div"],
      },
      [
        { key: "onclose", type: "event" },
        { key: "oncancel", type: "event" },
      ]
    ),
    _({
      name: "details",
      category: "Контейнеры",
      props: [
        { key: "id", type: "text", default: "" },
        { key: "class", type: "text", default: "" },
        { key: "open", type: "checkbox", default: !1 },
      ],
      allowedChildren: ["summary", "p", "div", "span", "ul", "ol"],
    }),
    _({
      name: "summary",
      category: "Контейнеры",
      props: [],
      allowedChildren: ["span", "strong", "em", "a"],
    }),
    _({
      name: "template",
      category: "Веб-компоненты",
      props: [],
      allowedChildren: ["*"],
    }),
    _({
      name: "slot",
      category: "Веб-компоненты",
      props: [{ key: "name", type: "text", default: "" }],
      allowedChildren: ["*"],
    }),
    _({
      name: "mark",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: ["span", "strong", "em", "a"],
    }),
    _({
      name: "meter",
      category: "Формы",
      props: [
        { key: "value", type: "text", default: "" },
        { key: "min", type: "text", default: "" },
        { key: "max", type: "text", default: "" },
        { key: "low", type: "text", default: "" },
        { key: "high", type: "text", default: "" },
        { key: "optimum", type: "text", default: "" },
      ],
      allowedChildren: ["span"],
    }),
    _({
      name: "output",
      category: "Формы",
      props: [
        { key: "name", type: "text", default: "" },
        { key: "for", type: "text", default: "" },
      ],
      allowedChildren: ["span"],
    }),
    _({
      name: "progress",
      category: "Формы",
      props: [
        { key: "value", type: "text", default: "" },
        { key: "max", type: "text", default: "" },
      ],
      allowedChildren: [],
    }),
    _({
      name: "time",
      category: "Текст",
      props: [
        { key: "datetime", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: [],
    }),
    _({
      name: "picture",
      category: "Медиа",
      props: [],
      allowedChildren: ["source", "img"],
    }),
    _({
      name: "abbr",
      category: "Текст",
      props: [
        { key: "title", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: [],
    }),
    _({
      name: "blockquote",
      category: "Текст",
      props: [
        { key: "cite", type: "text", default: "" },
        { key: "text", type: "text", default: "" },
      ],
      allowedChildren: ["p", "footer", "cite"],
    }),
    _({
      name: "pre",
      category: "Текст",
      props: [{ key: "text", type: "textarea", default: "" }],
      allowedChildren: ["code"],
    }),
    _({
      name: "code",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
    }),
    _({
      name: "kbd",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
    }),
    _({
      name: "figure",
      category: "Медиа",
      props: [],
      allowedChildren: ["img", "video", "audio", "figcaption", "blockquote"],
    }),
    _({
      name: "figcaption",
      category: "Медиа",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
      requiredParent: ["figure"],
    }),
    _({
      name: "sub",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
    }),
    _({
      name: "sup",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
    }),
    _({
      name: "s",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
    }),
    _({
      name: "var",
      category: "Текст",
      props: [{ key: "text", type: "text", default: "" }],
      allowedChildren: [],
    }),
  ],
  $e = [...tl, ...nl];
var ol = z('<div class="error-message svelte-1cm7jwx"> </div>'),
  rl =
    z(`<div class="code-viewer svelte-1cm7jwx"><div class="header svelte-1cm7jwx"><div class="copy-button svelte-1cm7jwx"><button> </button> <button class="svelte-1cm7jwx">Preview</button></div> <!></div> <div class="code-container svelte-1cm7jwx"><pre class="wrap-lines svelte-1cm7jwx">
      <code class="language-html svelte-1cm7jwx"><!></code>
    </pre></div></div>`);
function wo(e, n) {
  Ge(n, !1);
  const t = K(),
    r = K();
  let a = X(n, "components", 24, () => []),
    l = K(!1),
    s = K("");
  ($e || []).map((N) => (N == null ? void 0 : N.name)).filter(Boolean);
  function u(N, O = "  ", M = 0) {
    try {
      return Array.isArray(N)
        ? N.map((H) => {
            var le, Ee, ke;
            if (!(H != null && H.name)) return "";
            const T = Object.entries(H.propsValues || {})
                .filter(([se, ie]) =>
                  se === "children" || se === "text"
                    ? !1
                    : typeof ie == "boolean"
                    ? ie
                    : typeof ie == "number"
                    ? !0
                    : typeof ie == "string"
                    ? ie.trim() !== ""
                    : !1
                )
                .map(([se, ie]) =>
                  typeof ie == "boolean"
                    ? se
                    : `${se}="${String(ie).replace(/"/g, "&quot;")}"`
                )
                .join(" "),
              $ = O.repeat(M),
              Y = H.name || "div",
              ne = [
                "area",
                "base",
                "br",
                "col",
                "embed",
                "hr",
                "img",
                "input",
                "link",
                "meta",
                "param",
                "source",
                "track",
                "wbr",
              ];
            if (!((le = H.children) != null && le.length) && ne.includes(Y))
              return `${$}<${Y}${T ? " " + T : ""} />`;
            let ee = "";
            return (
              typeof ((Ee = H.propsValues) == null ? void 0 : Ee.text) ==
                "string" &&
                H.propsValues.text.trim() !== "" &&
                (ee += H.propsValues.text),
              (ke = H.children) != null &&
                ke.length &&
                (ee += `
${u(H.children, O, M + 1)}
${$}`),
              `${$}<${Y}${T ? " " + T : ""}>${ee}</${Y}>`
            );
          }).join(`
`)
        : "";
    } catch (H) {
      return (
        console.error("Ошибка генерации кода:", H),
        x(s, "Ошибка при генерации HTML."),
        ""
      );
    }
  }
  function d(N) {
    try {
      return N
        ? ((N = N.replace(
            /&lt;!--(.*?)--&gt;/g,
            '&lt;!--<span style="color: #6a737d; font-style: italic;">$1</span>--&gt;'
          )),
          (N = N.replace(
            /(&lt;\/?)([a-zA-Z0-9\-]+)(.*?)(&gt;)/g,
            (O, M, H, T, $) => {
              let Y = T.replace(
                /([a-zA-Z\-]+)=(&quot;.*?&quot;)/g,
                '<span style="color: #6f42c1;">$1</span>=<span style="color: #032f62;">$2</span>'
              );
              return `${M}<span style="color: #d73a49; font-weight: 600;">${H}</span>${Y}${$}`;
            }
          )),
          N)
        : "";
    } catch (O) {
      return console.error("Ошибка подсветки:", O), N || "";
    }
  }
  function c() {
    try {
      const N = document.querySelector(".code-container pre");
      if (!N) return;
      const O = window.getSelection(),
        M = document.createRange();
      M.selectNodeContents(N),
        O.removeAllRanges(),
        O.addRange(M),
        document.execCommand("copy"),
        x(l, !0),
        setTimeout(() => x(l, !1), 2e3),
        O.removeAllRanges();
    } catch (N) {
      console.error("Ошибка копирования:", N),
        x(s, "Не удалось скопировать код.");
    }
  }
  function h() {
    try {
      const N = `<!DOCTYPE html>
${u(a())}`,
        O = new Blob([N], { type: "text/html" }),
        M = URL.createObjectURL(O);
      window.open(M, "_blank");
    } catch (N) {
      console.error("Ошибка предпросмотра:", N),
        x(s, "Не удалось открыть предпросмотр.");
    }
  }
  _e(
    () => U(a()),
    () => {
      x(
        t,
        Array.isArray(a()) && a().length
          ? `<!-- Generated HTML -->
${u(a())}`
          : "<!-- Add components -->"
      );
    }
  ),
    _e(
      () => o(t),
      () => {
        var N, O;
        x(
          r,
          d(
            ((O = (N = o(t)) == null ? void 0 : N.replace(/</g, "&lt;")) == null
              ? void 0
              : O.replace(/>/g, "&gt;")) || ""
          )
        );
      }
    ),
    Zt(),
    pt();
  var g = rl(),
    y = m(g),
    v = m(y),
    f = m(v);
  let L;
  var C = m(f),
    P = E(f, 2),
    A = E(v, 2);
  {
    var F = (N) => {
      var O = ol(),
        M = m(O);
      J(() => B(M, o(s))), D(N, O);
    };
    re(A, (N) => {
      o(s) && N(F);
    });
  }
  var b = E(y, 2),
    S = m(b),
    V = E(m(S)),
    w = m(V);
  _a(w, () => o(r)),
    J(
      (N) => {
        (L = Ae(f, 1, "svelte-1cm7jwx", null, L, N)),
          B(C, o(l) ? "Copied!" : "Copy");
      },
      [() => ({ copied: o(l) })],
      ye
    ),
    I("click", f, c),
    I("click", P, h),
    D(e, g),
    Ze();
}
var al = z('<button class="clear-btn svelte-18wh8bp">✕</button>'),
  ll = z(
    '<div role="option" tabindex="-1"><span class="element-name svelte-18wh8bp"> </span> <span class="element-category svelte-18wh8bp"> </span></div>'
  ),
  sl = z(
    '<div id="dropdown-list" class="dropdown svelte-18wh8bp" role="listbox"></div>'
  ),
  il = z(
    '<div class="search-container svelte-18wh8bp"><div class="input-container svelte-18wh8bp"><input type="text" aria-controls="dropdown-list" class="svelte-18wh8bp"/> <!></div> <!></div>'
  );
function Co(e, n) {
  Ge(n, !1);
  const t = K(),
    r = K();
  let a = X(n, "lang", 8, "ru"),
    l = X(n, "selectedElement", 12),
    s = X(n, "searchQuery", 12, ""),
    u = K(!1),
    d = K(-1);
  function c(b) {
    l(b), s(b.name), x(u, !1), x(d, -1);
  }
  function h() {
    s(""), l(null), x(u, !1);
  }
  function g(b) {
    const S = $e.find(
      (V) => V.name.toLowerCase() === b.target.value.toLowerCase()
    );
    l(S || null);
  }
  function y(b) {
    ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(b.key) &&
      (b.preventDefault(),
      b.key === "ArrowDown"
        ? x(d, Math.min(o(d) + 1, o(r).length - 1))
        : b.key === "ArrowUp"
        ? x(d, Math.max(o(d) - 1, -1))
        : b.key === "Enter" && o(d) >= 0
        ? c(o(r)[o(d)])
        : b.key === "Escape" && h());
  }
  _e(
    () => U(a()),
    () => {
      x(t, Wt[a()]);
    }
  ),
    _e(
      () => (U(s()), $e),
      () => {
        x(
          r,
          s()
            ? $e.filter(
                (b) =>
                  b.name.toLowerCase().includes(s().toLowerCase()) ||
                  b.category.toLowerCase().includes(s().toLowerCase())
              )
            : $e
        );
      }
    ),
    _e(
      () => U(s()),
      () => {
        const b = $e.find((S) => S.name.toLowerCase() === s().toLowerCase());
        l(b || null);
      }
    ),
    Zt(),
    pt();
  var v = il(),
    f = m(v),
    L = m(f),
    C = E(L, 2);
  {
    var P = (b) => {
      var S = al();
      J(() => j(S, "aria-label", (o(t), p(() => o(t).search.clear)))),
        I("click", S, h),
        D(b, S);
    };
    re(C, (b) => {
      s() && b(P);
    });
  }
  var A = E(f, 2);
  {
    var F = (b) => {
      var S = sl();
      kt(
        S,
        7,
        () => o(r),
        (V) => V.name,
        (V, w, N) => {
          var O = ll();
          let M;
          var H = m(O),
            T = m(H),
            $ = E(H, 2),
            Y = m($);
          J(
            (ne) => {
              j(
                O,
                "aria-selected",
                (U(l()),
                o(w),
                p(() => {
                  var ee;
                  return ((ee = l()) == null ? void 0 : ee.name) === o(w).name;
                }))
              ),
                (M = Ae(O, 1, "dropdown-item svelte-18wh8bp", null, M, ne)),
                B(T, (o(w), p(() => o(w).name))),
                B(Y, (o(w), p(() => o(w).category)));
            },
            [() => ({ focused: o(d) === o(N) })],
            ye
          ),
            I("mousedown", O, () => c(o(w))),
            I("mouseenter", O, () => x(d, o(N))),
            D(V, O);
        }
      ),
        J(() => j(S, "aria-label", (o(t), p(() => o(t).search.aria)))),
        D(b, S);
    };
    re(A, (b) => {
      o(u), o(r), p(() => o(u) && o(r).length > 0) && b(F);
    });
  }
  J(() => {
    j(L, "placeholder", (o(t), p(() => o(t).search.placeholder))),
      j(L, "aria-label", (o(t), p(() => o(t).search.aria)));
  }),
    La(L, s),
    I("focus", L, () => x(u, !0)),
    I("input", L, g),
    I("change", L, g),
    I("blur", L, () => setTimeout(() => x(u, !1), 200)),
    I("keydown", L, y),
    D(e, v),
    Ze();
}
var ul = z(
  '<h3 class="svelte-1jmx0sg"><button type="button" class="accordion-trigger svelte-1jmx0sg"><span class="accordion-title svelte-1jmx0sg"><span> </span> <span></span></span></button></h3> <div role="region" class="accordion-panel svelte-1jmx0sg"><!></div>',
  1
);
function Pn(e, n) {
  let t = X(n, "id", 8, ""),
    r = X(n, "title", 8, ""),
    a = X(n, "initiallyOpen", 8, !1),
    l = X(n, "disabled", 8, !1),
    s = K(a());
  var u = ul(),
    d = lt(u),
    c = m(d),
    h = m(c),
    g = m(h),
    y = m(g),
    v = E(g, 2),
    f = E(d, 2),
    L = m(f);
  _t(L, n, "default", {}, null),
    J(() => {
      j(c, "aria-expanded", o(s)),
        j(c, "aria-controls", "sect-" + t()),
        j(c, "id", "accordion-" + t()),
        (c.disabled = l()),
        B(y, r()),
        Ae(v, 1, `accordion-icon ${o(s) ? "open" : ""}`, "svelte-1jmx0sg"),
        j(f, "id", "sect-" + t()),
        j(f, "aria-labelledby", "accordion-" + t()),
        (f.hidden = !o(s));
    }),
    I("click", c, () => !l() && x(s, !o(s))),
    D(e, u);
}
var dl = z(
  '<div><div class="panel svelte-k7u067"><!></div> <div></div> <div class="panel svelte-k7u067"><!></div></div>'
);
function Eo(e, n) {
  Ge(n, !1);
  let t = X(n, "direction", 8, "horizontal"),
    r = X(n, "initialSize", 8, 30),
    a = X(n, "dividerSize", 8, 4),
    l = X(n, "minSize", 8, 10),
    s = X(n, "maxSize", 8, 90),
    u = K(r()),
    d = !1,
    c = 0,
    h = 0,
    g = 0;
  function y() {
    const V = document.querySelector(".splitter");
    return t() === "horizontal" ? V.offsetWidth : V.offsetHeight;
  }
  function v(V) {
    (d = !0),
      (c = o(u)),
      (h = t() === "horizontal" ? V.clientX : V.clientY),
      (g = y()),
      document.addEventListener("pointermove", f),
      document.addEventListener("pointerup", L),
      document.addEventListener("pointercancel", L),
      V.preventDefault(),
      V.stopPropagation();
  }
  function f(V) {
    if (!d) return;
    const O = (((t() === "horizontal" ? V.clientX : V.clientY) - h) / g) * 100,
      M = c + O;
    x(u, Math.max(l(), Math.min(s(), M))),
      V.preventDefault(),
      V.stopPropagation();
  }
  function L() {
    (d = !1),
      document.removeEventListener("pointermove", f),
      document.removeEventListener("pointerup", L),
      document.removeEventListener("pointercancel", L);
  }
  Zn(() => {
    const V = () => {
      g = y();
    };
    return (
      window.addEventListener("resize", V),
      () => {
        window.removeEventListener("resize", V);
      }
    );
  }),
    pt();
  var C = dl(),
    P = m(C),
    A = m(P);
  _t(A, n, "first", {}, null);
  var F = E(P, 2),
    b = E(F, 2),
    S = m(b);
  _t(S, n, "second", {}, null),
    J(() => {
      Ae(C, 1, `splitter ${t() ?? ""}`, "svelte-k7u067"),
        or(
          C,
          `
    --first-panel-size: ${o(u) ?? ""}%;
    --divider-size: ${a() ?? ""}px
  `
        ),
        Ae(F, 1, `divider ${t() ?? ""}`, "svelte-k7u067");
    }),
    I("pointerdown", F, v),
    D(e, C),
    Ze();
}
var cl = z(
    '<div class="menu-overlay svelte-1h8rhok" role="button" aria-label="Закрыть меню" tabindex="0"></div>'
  ),
  fl = z('<div class="author svelte-1h8rhok"> </div>'),
  pl = z('<p class="version svelte-1h8rhok"> </p>'),
  yl = z('<div role="menuitem" tabindex="0"> </div>'),
  vl = z('<div class="footer-text svelte-1h8rhok"> </div>'),
  ml = z(
    '<button aria-label="Toggle menu" type="button"><span class="svelte-1h8rhok"></span> <span class="svelte-1h8rhok"></span> <span class="svelte-1h8rhok"></span></button> <!> <aside><header class="menu-header svelte-1h8rhok"><h2 class="svelte-1h8rhok"> </h2> <!> <!></header> <nav class="menu-items svelte-1h8rhok"></nav> <footer class="menu-footer svelte-1h8rhok"><div class="footer-slot svelte-1h8rhok"><!></div> <!></footer></aside>',
    1
  );
function hl(e, n) {
  Ge(n, !1);
  let t = X(n, "menuItems", 24, () => []),
    r = X(n, "activeItem", 12, ""),
    a = X(n, "headerContent", 24, () => ({ title: "", version: "" })),
    l = X(n, "footerContent", 24, () => ({ text: "" })),
    s = K(!1);
  const u = ar();
  function d() {
    x(s, !o(s));
  }
  function c(T) {
    r(T), u("select", T), x(s, !1);
  }
  pt();
  var h = ml(),
    g = lt(h),
    y = E(g, 2);
  {
    var v = (T) => {
      var $ = cl();
      I("click", $, ho(d)),
        I(
          "keydown",
          $,
          ho((Y) => {
            (Y.key === "Enter" || Y.key === " ") && d();
          })
        ),
        D(T, $);
    };
    re(y, (T) => {
      o(s) && T(v);
    });
  }
  var f = E(y, 2),
    L = m(f),
    C = m(L),
    P = m(C),
    A = E(C, 2);
  {
    var F = (T) => {
      var $ = fl(),
        Y = m($);
      J(() => B(Y, (U(a()), p(() => a().author)))), D(T, $);
    };
    re(A, (T) => {
      U(a()), p(() => a().author) && T(F);
    });
  }
  var b = E(A, 2);
  {
    var S = (T) => {
      var $ = pl(),
        Y = m($);
      J(() => B(Y, `v${(U(a()), p(() => a().version) ?? "")}`)), D(T, $);
    };
    re(b, (T) => {
      U(a()), p(() => a().version) && T(S);
    });
  }
  var V = E(L, 2);
  kt(V, 5, t, Ut, (T, $) => {
    var Y = yl(),
      ne = m(Y);
    J(() => {
      Ae(
        Y,
        1,
        `menu-item ${
          (U(r()), o($), p(() => (r() === o($).id ? "active" : "")) ?? "")
        }`,
        "svelte-1h8rhok"
      ),
        B(ne, (o($), p(() => o($).label)));
    }),
      I("click", Y, () => c(o($).id)),
      I("keydown", Y, (ee) => {
        (ee.key === "Enter" || ee.key === " ") && c(o($).id);
      }),
      D(T, Y);
  });
  var w = E(V, 2),
    N = m(w),
    O = m(N);
  _t(O, n, "footer", {}, null);
  var M = E(N, 2);
  {
    var H = (T) => {
      var $ = vl(),
        Y = m($);
      J(() => B(Y, (U(l()), p(() => l().text)))), D(T, $);
    };
    re(M, (T) => {
      U(l()), p(() => l().text) && T(H);
    });
  }
  J(() => {
    Ae(g, 1, `hamburger ${o(s) ? "open" : ""}`, "svelte-1h8rhok"),
      Ae(f, 1, `menu ${o(s) ? "open" : ""}`, "svelte-1h8rhok"),
      B(P, (U(a()), p(() => a().title)));
  }),
    I("click", g, d),
    D(e, h),
    Ze();
}
var kl = z('<span class="switcher-label svelte-fpyfi3"> </span>'),
  gl = z('<span class="switcher-label svelte-fpyfi3"> </span>'),
  xl = z('<div class="switcher-main-label svelte-fpyfi3"> </div>'),
  bl = z(
    '<div class="switcher-row svelte-fpyfi3"><!> <div class="switcher svelte-fpyfi3" role="checkbox" tabindex="0"><div></div> <div></div> <input type="checkbox" class="sr-only svelte-fpyfi3" tabindex="-1" aria-hidden="true" readonly=""/></div> <!></div> <!>',
    1
  );
function Nn(e, n) {
  Ge(n, !1);
  let t = X(n, "checked", 12, !1),
    r = X(n, "labelLeft", 8, ""),
    a = X(n, "labelRight", 8, ""),
    l = X(n, "label", 8, ""),
    s = X(n, "onToggle", 8, () => {});
  function u() {
    s()();
  }
  function d(S) {
    (S.key === " " || S.key === "Enter") && (S.preventDefault(), u());
  }
  pt();
  var c = bl(),
    h = lt(c),
    g = m(h);
  {
    var y = (S) => {
      var V = kl(),
        w = m(V);
      J(() => B(w, r())), D(S, V);
    };
    re(g, (S) => {
      r() && S(y);
    });
  }
  var v = E(g, 2),
    f = m(v),
    L = E(f, 2),
    C = E(L, 2),
    P = E(v, 2);
  {
    var A = (S) => {
      var V = gl(),
        w = m(V);
      J(() => B(w, a())), D(S, V);
    };
    re(P, (S) => {
      a() && S(A);
    });
  }
  var F = E(h, 2);
  {
    var b = (S) => {
      var V = xl(),
        w = m(V);
      J(() => B(w, l())), D(S, V);
    };
    re(F, (S) => {
      l() && S(b);
    });
  }
  J(() => {
    j(v, "aria-checked", t()),
      Ae(f, 1, `switcher-track${t() ? " checked" : ""}`, "svelte-fpyfi3"),
      Ae(L, 1, `switcher-thumb${t() ? " checked" : ""}`, "svelte-fpyfi3");
  }),
    Ta(C, t),
    I("click", v, u),
    I("keydown", v, d),
    D(e, c),
    Ze();
}
var _l = z(
  '<header class="ui-topbar svelte-1cyznus"><div class="left svelte-1cyznus"><!></div> <div class="title svelte-1cyznus"><!></div> <div class="right svelte-1cyznus"><!></div></header>'
);
function wl(e, n) {
  let t = X(n, "title", 8, "App");
  var r = _l(),
    a = m(r),
    l = m(a);
  _t(l, n, "left", {}, null);
  var s = E(a, 2),
    u = m(s);
  _t(u, n, "default", {}, (h) => {
    var g = ya();
    J(() => B(g, t())), D(h, g);
  });
  var d = E(s, 2),
    c = m(d);
  _t(c, n, "right", {}, null), D(e, r);
}
const Cl = JSON.parse(
  `[{"id":1752751499,"name":"html","category":"Документ","propsValues":{"lang":"ru"},"children":[{"id":1752751476,"name":"head","category":"Документ","propsValues":{},"children":[{"id":1752751473,"name":"meta","category":"Документ","propsValues":{"charset":"UTF-8","name":"","content":"","http-equiv":""},"children":[]},{"id":1752762377887,"name":"meta","category":"Мета","propsValues":{"name":"viewport","content":"width=device-width, initial-scale=1.0","charset":"","http-equiv":""},"children":[]},{"id":1752751474,"name":"title","category":"Документ","propsValues":{"text":"Форма регистрации"},"children":[]},{"id":1752751475,"name":"style","category":"Документ","propsValues":{"text":"\\n   :root {\\n      --primary-color: #4361ee;\\n      --primary-hover: #3a56d4;\\n      --error-color: #ef233c;\\n      --success-color: #2ec4b6;\\n      --text-color: #2b2d42;\\n      --light-gray: #f8f9fa;\\n      --border-color: #dee2e6;\\n      --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n    }\\n\\n    * {\\n      box-sizing: border-box;\\n      margin: 0;\\n      padding: 0;\\n    }\\n\\n    html, body {\\n      height: 100%;\\n      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;\\n      color: var(--text-color);\\n      line-height: 1.6;\\n    }\\n\\n    body {\\n      display: flex;\\n      flex-direction: column;\\n      background-color: var(--light-gray);\\n    }\\n\\n    /* Header styles */\\n    header {\\n      background: var(--primary-color);\\n      color: white;\\n      padding: 1rem 2rem;\\n      box-shadow: var(--shadow);\\n      position: relative;\\n      z-index: 10;\\n    }\\n\\n    .header-container {\\n      display: flex;\\n      justify-content: space-between;\\n      align-items: center;\\n      max-width: 1200px;\\n      margin: 0 auto;\\n      width: 100%;\\n    }\\n\\n    .logo {\\n      font-size: 1.5rem;\\n      font-weight: 700;\\n    }\\n\\n    nav ul {\\n      display: flex;\\n      list-style: none;\\n    }\\n\\n    nav ul li {\\n      margin-left: 1.5rem;\\n    }\\n\\n    nav ul li a {\\n      color: white;\\n      text-decoration: none;\\n      font-weight: 500;\\n      transition: opacity 0.2s;\\n    }\\n\\n    nav ul li a:hover {\\n      opacity: 0.9;\\n      text-decoration: underline;\\n    }\\n\\n    /* Main content */\\n    .wrapper {\\n      flex: 1;\\n      padding: 2rem;\\n    }\\n\\n    .container {\\n      max-width: 800px;\\n      margin: 0 auto;\\n      width: 100%;\\n    }\\n\\n    /* Form styles */\\n    .form-card {\\n      background: white;\\n      border-radius: 4px;\\n      box-shadow: var(--shadow);\\n      padding: 2.5rem;\\n      margin: 2rem auto;\\n    }\\n\\n    .form-title {\\n      font-size: 1.8rem;\\n      margin-bottom: 1.5rem;\\n      color: var(--primary-color);\\n      text-align: center;\\n    }\\n\\n    .form-group {\\n      margin-bottom: 1.5rem;\\n      position: relative;\\n    }\\n\\n    .form-group label {\\n      display: block;\\n      margin-bottom: 0.5rem;\\n      font-weight: 600;\\n      color: var(--text-color);\\n    }\\n\\n    .form-control {\\n      width: 100%;\\n      padding: 0.75rem 1rem;\\n      font-size: 1rem;\\n      border: 1px solid var(--border-color);\\n      border-radius: 4px;\\n      transition: border-color 0.3s, box-shadow 0.3s;\\n    }\\n\\n    .form-control:focus {\\n      outline: none;\\n      border-color: var(--primary-color);\\n      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);\\n    }\\n\\n    .input-wrapper {\\n      position: relative;\\n    }\\n\\n    .clear-input {\\n      position: absolute;\\n      right: 10px;\\n      top: 50%;\\n      transform: translateY(-50%);\\n      background: none;\\n      border: none;\\n      color: #999;\\n      cursor: pointer;\\n      font-size: 1.5rem;\\n\\t  width: 2rem;\\n\\t  height: 2rem;\\n\\t  line-height: 1.5rem;\\n      display: none;\\n    }\\n\\t\\n\\t.clear-input:hover {\\n\\t  color: var(--primary-color);\\n\\t}\\n\\n    .form-control:not(:placeholder-shown) + .clear-input {\\n      display: block;\\n    }\\n\\n    .checkbox-group {\\n      display: flex;\\n      align-items: center;\\n    }\\n\\n\\t.checkbox-group input[type=\\"checkbox\\"] {\\n\\t  width: 20px;\\n\\t  height: 20px;\\n\\t  margin-right: 0.75rem;\\n\\t  cursor: pointer;\\n\\t}\\n\\n    .error-message {\\n      color: var(--error-color);\\n      font-size: 0.875rem;\\n      margin-top: 0.25rem;\\n      display: none;\\n    }\\n\\n    .form-control.error {\\n      border-color: var(--error-color);\\n    }\\n\\n    .form-control.valid {\\n      border-color: var(--success-color);\\n    }\\n\\n    .btn {\\n      display: inline-block;\\n      background: var(--primary-color);\\n      color: white;\\n      border: none;\\n      padding: 0.75rem 1.5rem;\\n      font-size: 1rem;\\n      border-radius: 8px;\\n      cursor: pointer;\\n      transition: background-color 0.3s;\\n      font-weight: 500;\\n    }\\n\\n    .btn:hover {\\n      background: var(--primary-hover);\\n    }\\n\\n    .btn-block {\\n      display: block;\\n      width: 100%;\\n    }\\n\\t\\n\\t.btn[type=\\"submit\\"] {\\n\\t  width: 240px;\\n\\t  display: block;\\n\\t  margin: 0 auto;\\n\\t}\\n\\n    /* Footer styles */\\n    footer {\\n      background: var(--text-color);\\n      color: white;\\n      text-align: center;\\n      padding: 1.5rem;\\n      margin-top: auto;\\n    }\\n\\n    /* Dialog styles */\\n    dialog {\\n      border: none;\\n      border-radius: 4px;\\n      padding: 2rem;\\n      box-shadow: var(--shadow);\\n      max-width: 500px;\\n      width: 90%;\\n    }\\n\\n    dialog::backdrop {\\n      background-color: rgba(0, 0, 0, 0.5);\\n    }\\n\\n    .dialog-content {\\n      text-align: center;\\n    }\\n\\n    .dialog-actions {\\n      margin-top: 1.5rem;\\n      display: flex;\\n      justify-content: center;\\n      gap: 1rem;\\n    }\\n\\n    @media (max-width: 768px) {\\n      .header-container {\\n        flex-direction: column;\\n        text-align: center;\\n      }\\n\\n      nav ul {\\n        margin-top: 1rem;\\n      }\\n\\n      nav ul li {\\n        margin: 0 0.75rem;\\n      }\\n\\n      .form-card {\\n        padding: 1.5rem;\\n      }\\n    }\\n\\t\\n\\t@media (max-width: 480px) {\\n\\t  .btn[type=\\"submit\\"] {\\n\\t\\twidth: 100%;\\n\\t  }\\n\\t}","type":""},"children":[]}]},{"id":1752751498,"name":"body","category":"Документ","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751478,"name":"header","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762443332,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"header-container","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752762471648,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"logo","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[]},{"id":1752762519611,"name":"nav","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762536300,"name":"ul","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762553013,"name":"li","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","value":"","text":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762568359,"name":"a","category":"Текст","propsValues":{"href":"#","target":"","rel":"","text":"Главная","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752762690285,"name":"li","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","value":"","text":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762702590,"name":"a","category":"Текст","propsValues":{"href":"#","target":"","rel":"","text":"О нас","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752762695877,"name":"li","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","value":"","text":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762716150,"name":"a","category":"Текст","propsValues":{"href":"#","target":"","rel":"","text":"Контакты","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]}]}]}]}]},{"id":1752762962931,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"wrapper","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751492,"name":"main","category":"Контейнеры","propsValues":{"class":"container","id":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752751491,"name":"form","category":"Формы","propsValues":{"method":"post","action":"#","id":"","class":"","style":"","autocomplete":"on","novalidate":false,"target":"","enctype":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":""},"children":[{"id":1752762995117,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-card","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752763073222,"name":"h1","category":"Текст","propsValues":{"id":"","class":"form-title","style":"","text":"Регистрация","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752763109696,"name":"form","category":"Контейнеры","propsValues":{"id":"registrationForm","class":"","style":"","method":"post","action":"#","autocomplete":"on","novalidate":true,"target":"","enctype":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":""},"children":[{"id":1752763164559,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751479,"name":"label","category":"Формы","propsValues":{"for":"name","text":"Имя:","form":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]},{"id":1752763203097,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"input-wrapper","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751480,"name":"input","category":"Формы","propsValues":{"type":"text","name":"name","placeholder":"Введите ваше имя","value":"","checked":false,"required":false,"readonly":false,"disabled":false,"min":"","max":"","step":"","pattern":"","autocomplete":"on","autofocus":false,"multiple":false,"size":"","maxlength":"","minlength":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"form-control","style":""},"children":[]},{"id":1752763333036,"name":"button","category":"Элементы формы","propsValues":{"type":"button","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","text":"&times;","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"clear-input","style":""},"children":[]}]},{"id":1752763839508,"name":"span","category":"Текст","propsValues":{"id":"","class":"error-message","style":"","text":"Пожалуйста, введите ваше имя","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752763540200,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751481,"name":"label","category":"Формы","propsValues":{"for":"email","text":"Email:","form":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]},{"id":1752763702688,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"input-wrapper","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751482,"name":"input","category":"Формы","propsValues":{"type":"email","name":"email","placeholder":"Введите ваш email","value":"","checked":false,"required":false,"readonly":false,"disabled":false,"min":"","max":"","step":"","pattern":"","autocomplete":"on","autofocus":false,"multiple":false,"size":"","maxlength":"","minlength":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"form-control","style":""},"children":[]},{"id":1752763723882,"name":"button","category":"Элементы формы","propsValues":{"type":"button","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","text":"&times;","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"clear-input","style":""},"children":[]}]},{"id":1752763872501,"name":"span","category":"Текст","propsValues":{"id":"","class":"error-message","style":"","text":"Пожалуйста, введите корректный email","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752763954407,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751483,"name":"label","category":"Формы","propsValues":{"for":"gender","text":"Пол:","form":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]},{"id":1752751486,"name":"select","category":"Формы","propsValues":{"name":"gender","multiple":false,"required":false,"disabled":false,"autofocus":false,"size":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"form-control","style":""},"children":[{"id":1752751484,"name":"option","category":"Формы","propsValues":{"value":"male","text":"Мужской","selected":false,"disabled":false,"label":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752751485,"name":"option","category":"Формы","propsValues":{"value":"female","text":"Женский","selected":false,"disabled":false,"label":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]}]},{"id":1752764438309,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764481393,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"checkbox-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764467807,"name":"input","category":"Элементы формы","propsValues":{"type":"checkbox","name":"agree","value":"","placeholder":"","checked":false,"required":true,"readonly":false,"disabled":false,"min":"","max":"","step":"","pattern":"","autocomplete":"on","autofocus":false,"multiple":false,"size":"","maxlength":"","minlength":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"agree","class":"","style":""},"children":[]},{"id":1752751489,"name":"label","category":"Формы","propsValues":{"for":"agree","form":"","text":"Я согласен с условиями использования","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]}]},{"id":1752767049438,"name":"span","category":"Текст","propsValues":{"id":"","class":"error-message","style":"","text":"Необходимо ваше согласие","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752751490,"name":"button","category":"Формы","propsValues":{"type":"submit","text":"Зарегистрироваться","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"btn btn-block","style":""},"children":[]}]}]}]}]}]},{"id":1752751494,"name":"footer","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752751493,"name":"p","category":"Текст","propsValues":{"text":"© 2025 Все права защищены","id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752764171611,"name":"dialog","category":"Контейнеры","propsValues":{"id":"successDialog","class":"","style":"","open":false,"onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onclose":"","oncancel":""},"children":[{"id":1752764197267,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"dialog-content","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764211737,"name":"h2","category":"Текст","propsValues":{"id":"","class":"","style":"","text":"Успешно!","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752764243554,"name":"p","category":"Текст","propsValues":{"id":"","class":"","style":"","text":"Ваша регистрация завершена.","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752764257283,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"dialog-actions","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764288373,"name":"button","category":"Элементы формы","propsValues":{"type":"button","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","text":"Закрыть","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"closeDialog","class":"btn","style":""},"children":[]}]}]}]},{"id":1752764081218,"name":"script","category":"Скрипты","propsValues":{"src":"","type":"","async":false,"defer":false,"text":"\\n      document.addEventListener('DOMContentLoaded', function() {\\n      const form = document.getElementById('registrationForm');\\n      const successDialog = document.getElementById('successDialog');\\n      const closeDialogBtn = document.getElementById('closeDialog');\\n\\n      // Очистка полей ввода\\n      document.querySelectorAll('.clear-input').forEach(btn => {\\n        btn.addEventListener('click', function() {\\n          const input = this.previousElementSibling;\\n          input.value = '';\\n          input.focus();\\n          this.style.display = 'none';\\n          validateField(input);\\n        });\\n      });\\n\\n      // Валидация при вводе\\n      form.querySelectorAll('input, select').forEach(field => {\\n        field.addEventListener('input', function() {\\n          validateField(this);\\n        });\\n      });\\n\\n      // Отправка формы\\n      form.addEventListener('submit', function(e) {\\n        e.preventDefault();\\n        \\n        let isValid = true;\\n        form.querySelectorAll('input[required], select[required]').forEach(field => {\\n          if (!validateField(field)) {\\n            isValid = false;\\n          }\\n        });\\n\\n        if (isValid) {\\n          successDialog.showModal();\\n        }\\n      });\\n\\n      // Закрытие диалога\\n      closeDialogBtn.addEventListener('click', function() {\\n        successDialog.close();\\n      });\\n\\n      // Функция валидации поля\\n      function validateField(field) {\\n        const errorMessage = field.closest('.form-group').querySelector('.error-message');\\n        \\n        if (field.validity.valid) {\\n          field.classList.remove('error');\\n          field.classList.add('valid');\\n          errorMessage.style.display = 'none';\\n          return true;\\n        } else {\\n          field.classList.remove('valid');\\n          field.classList.add('error');\\n          errorMessage.style.display = 'block';\\n          \\n          if (field.validity.valueMissing) {\\n            errorMessage.textContent = 'Это поле обязательно для заполнения';\\n          } else if (field.type === 'email' && field.validity.typeMismatch) {\\n            errorMessage.textContent = 'Пожалуйста, введите корректный email';\\n          }\\n          \\n          return false;\\n        }\\n      }\\n\\n      // Показать/скрыть кнопку очистки\\n      form.querySelectorAll('.form-control').forEach(input => {\\n        input.addEventListener('input', function() {\\n          const clearBtn = this.nextElementSibling;\\n          clearBtn.style.display = this.value ? 'block' : 'none';\\n        });\\n      });\\n    });"},"children":[]}]}]}]`
);
var El = z(
    '<div slot="footer" style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>'
  ),
  Sl = z('<div slot="left"><!></div>'),
  Pl = z('<div slot="right"><span style="opacity: 0.6;"> </span></div>'),
  Nl = z('<div role="tree" tabindex="0"><!></div>'),
  Ol = z('<p class="placeholder-text"> </p>'),
  Ll = z('<p class="placeholder-text"> </p>'),
  Tl = z(
    '<!> <div class="searchbar-controls"><div class="searchinput-wrapper"><!></div> <div class="buttons-row"><button>➕</button> <button>➖</button> <button>⬆️</button> <button>⬇️</button> <button>⬅️</button> <button>➡️</button></div></div> <div class="main-content"><div class="accordion"><div class="accordion"><!> <!> <!></div></div></div>',
    1
  ),
  Al = z('<div role="tree" tabindex="0" style="height:100%;"><!></div>'),
  Vl = z('<p class="placeholder-text"> </p>'),
  Dl = z('<div slot="first"><!></div>'),
  Ml = z('<p class="placeholder-text"> </p>'),
  ql = z('<div slot="second"><!></div>'),
  Il = z('<div slot="second"><!></div>'),
  Rl = z(
    '<header class="app-header"><h1> </h1></header> <div class="searchbar-controls"><div class="searchinput-wrapper"><!></div> <div class="buttons-row"><button>📂</button> <input type="file" accept=".json" style="display:none"/> <button>💾</button> <button>➕</button> <button>➖</button> <button>⬆️</button> <button>⬇️</button> <button>⬅️</button> <button>➡️</button> <button>❌</button></div></div> <div class="main-content"><!></div> <footer class="app-footer"><div class="footer-content"><div class="language-switcher"><!></div></div> <div class="copyright" style="margin-top:0.5em; text-align:center;"> </div></footer>',
    1
  ),
  zl = z(
    '<div class="context-menu"><button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button></div>'
  ),
  Fl = z('<div class="app"><!> <!></div>');
function $l(e, n) {
  Ge(n, !1);
  const t = K();
  let r = K(qt(Cl)),
    a = K(null),
    l = K({ name: "div", category: "Контейнеры" }),
    s = K(null),
    u = K(new Set()),
    d = null,
    c = [],
    h = [],
    g = K(!1),
    y = K(0),
    v = K(0),
    f = K(!1),
    L = K("tree"),
    C = K(),
    P = K(localStorage.getItem("lang") || "ru"),
    A = K(localStorage.getItem("theme") === "dark"),
    F = "",
    b = K([]);
  Da(() => {
    document.removeEventListener("click", M);
  }),
    Zn(
      () => (
        (window.onerror = (i, k, R, q, W) => {
          console.error("Глобальная ошибка:", {
            message: i,
            source: k,
            lineno: R,
            colno: q,
            error: W,
          }),
            (F = `Ошибка: ${i}`);
        }),
        (window.onunhandledrejection = (i) => {
          console.error("Необработанное исключение:", i.reason),
            (F = `Ошибка: ${i.reason}`);
        }),
        o(A)
          ? document.body.classList.add("dark")
          : document.body.classList.add("light"),
        V(),
        window.addEventListener("resize", V),
        document.addEventListener("click", M),
        () => {
          window.removeEventListener("resize", V),
            document.removeEventListener("click", M);
        }
      )
    );
  function S(i) {
    const k = o(b).find((R) => R.id === i.detail);
    k == null || k.action();
  }
  function V() {
    try {
      x(f, window.innerWidth < 768);
    } catch (i) {
      console.error("Ошибка checkMobile:", i),
        (F = "Ошибка при проверке мобильного режима.");
    }
  }
  function w(i) {
    try {
      if (i.target.tagName === "INPUT" || i.target.tagName === "TEXTAREA")
        return;
      if (i.key === "Delete") {
        i.preventDefault(), se();
        return;
      }
      if (i.ctrlKey || i.metaKey)
        switch (i.key.toLowerCase()) {
          case "n":
            i.preventDefault(), ke();
            break;
          case "o":
            i.preventDefault(), kn();
            break;
          case "s":
            i.preventDefault(), Mt();
            break;
          case "z":
            i.preventDefault(), i.shiftKey ? ne() : Y();
            break;
          case "y":
            i.preventDefault(), ne();
            break;
          case "c":
            i.preventDefault(), ee();
            break;
          case "x":
            i.preventDefault(), le();
            break;
          case "v":
            i.preventDefault(), Ee();
            break;
          case "arrowup":
            ie();
            break;
          case "arrowdown":
            yt();
            break;
          case "arrowleft":
            wt();
            break;
          case "arrowright":
            Se();
            break;
        }
    } catch (k) {
      console.error("Ошибка handleKeyDown:", k),
        (F = "Ошибка обработки клавиатуры.");
    }
  }
  function N(i) {
    try {
      i.preventDefault(), x(y, i.clientX), x(v, i.clientY), x(g, !0);
    } catch (k) {
      console.error("Ошибка openContextMenu:", k);
    }
  }
  function O() {
    x(g, !1);
  }
  function M(i) {
    try {
      o(g) &&
        !i.target.closest(".context-menu") &&
        !i.target.closest("[on\\:contextmenu]") &&
        O();
    } catch (k) {
      console.error("Ошибка handleClickOutside:", k);
    }
  }
  function H() {
    try {
      x(P, o(P) === "ru" ? "en" : "ru"), localStorage.setItem("lang", o(P));
    } catch (i) {
      console.error("Ошибка toggleLang:", i);
    }
  }
  function T() {
    x(A, !o(A)),
      localStorage.setItem("theme", o(A) ? "dark" : "light"),
      document.body.classList.toggle("dark", o(A)),
      document.body.classList.toggle("light", !o(A));
  }
  function $() {
    try {
      c.push(JSON.stringify(o(r))), c.length > 100 && c.shift(), (h = []);
    } catch (i) {
      console.error("Ошибка saveHistory:", i);
    }
  }
  function Y() {
    try {
      if (c.length === 0) return;
      h.push(JSON.stringify(o(r))),
        x(r, qt(JSON.parse(c.pop()))),
        x(a, null),
        O();
    } catch (i) {
      console.error("Ошибка undo:", i), (F = "Ошибка отмены действия.");
    }
  }
  function ne() {
    try {
      if (h.length === 0) return;
      c.push(JSON.stringify(o(r))),
        x(r, qt(JSON.parse(h.pop()))),
        x(a, null),
        O();
    } catch (i) {
      console.error("Ошибка redo:", i), (F = "Ошибка повтора действия.");
    }
  }
  function ee() {
    try {
      if (!o(a)) return;
      (d = JSON.parse(JSON.stringify(It(o(r), o(a))))), O();
    } catch (i) {
      console.error("Ошибка copyNode:", i);
    }
  }
  function le() {
    try {
      if (!o(a)) return;
      $();
      const i = De(o(r), o(a));
      i &&
        ((d = JSON.parse(JSON.stringify(i.nodes[i.index]))),
        i.nodes.splice(i.index, 1),
        x(r, Qe(o(r))),
        x(a, null),
        O());
    } catch (i) {
      console.error("Ошибка cutNode:", i);
    }
  }
  function Ee() {
    try {
      if (!d) return;
      $();
      const i = JSON.parse(JSON.stringify(d));
      if (((i.id = Date.now()), o(a))) {
        const k = It(o(r), o(a));
        if (k && gn(k.name, i.name))
          (k.children = k.children || []), k.children.push(i);
        else {
          const R = De(o(r), o(a));
          R && R.nodes.splice(R.index + 1, 0, i);
        }
      } else o(r).push(i);
      x(r, Qe(o(r))), x(a, i.id), O();
    } catch (i) {
      console.error("Ошибка pasteNode:", i), (F = "Ошибка вставки элемента.");
    }
  }
  function ke() {
    var i;
    try {
      if (($(), !((i = o(l)) != null && i.name))) return;
      const k = $e.find((q) => q.name === o(l).name);
      if (!k) return;
      const R = { ...k, id: Date.now(), propsValues: {}, children: [] };
      if (
        (k.props &&
          k.props.forEach((q) => {
            R.propsValues[q.key] =
              q.default !== void 0
                ? q.default
                : q.type === "checkbox"
                ? !1
                : "";
          }),
        !o(a))
      )
        x(r, [...o(r), R]);
      else {
        const q = It(o(r), o(a));
        if (q && gn(q.name, R.name))
          q.children || (q.children = []), q.children.push(R);
        else {
          const W = De(o(r), o(a));
          W && W.nodes.splice(W.index + 1, 0, R);
        }
      }
      x(a, R.id), x(r, [...o(r)]);
    } catch (k) {
      console.error("Ошибка addNode:", k), (F = "Не удалось добавить элемент.");
    }
  }
  function se() {
    try {
      if (($(), !o(a))) return;
      const i = De(o(r), o(a));
      i && i.nodes.splice(i.index, 1), x(a, null), x(r, Qe(o(r)));
    } catch (i) {
      console.error("Ошибка removeNode:", i),
        (F = "Не удалось удалить элемент.");
    }
  }
  function ie() {
    try {
      if (($(), !o(a))) return;
      const i = De(o(r), o(a));
      if (i && i.index > 0) {
        const k = i.nodes;
        ([k[i.index - 1], k[i.index]] = [k[i.index], k[i.index - 1]]),
          x(r, Qe(o(r)));
      }
    } catch (i) {
      console.error("Ошибка moveUp:", i);
    }
  }
  function yt() {
    try {
      if (($(), !o(a))) return;
      const i = De(o(r), o(a));
      if (i && i.index < i.nodes.length - 1) {
        const k = i.nodes;
        ([k[i.index], k[i.index + 1]] = [k[i.index + 1], k[i.index]]),
          x(r, Qe(o(r)));
      }
    } catch (i) {
      console.error("Ошибка moveDown:", i);
    }
  }
  function Se() {
    try {
      if (($(), !o(a))) return;
      const i = De(o(r), o(a));
      if (!i || i.index === 0) return;
      const k = i.nodes[i.index - 1];
      if (!gn(k.name, i.nodes[i.index].name)) {
        F = `❌ Элемент <${i.nodes[i.index].name}> нельзя вложить в <${
          k.name
        }>`;
        return;
      }
      k.children || (k.children = []),
        k.children.push(i.nodes[i.index]),
        i.nodes.splice(i.index, 1),
        k.children.length === 1 && (o(u).add(k.id), x(u, new Set(o(u)))),
        x(r, Qe(o(r)));
    } catch (i) {
      console.error("Ошибка moveIn:", i);
    }
  }
  function wt() {
    try {
      if (($(), !o(a))) return;
      const i = De(o(r), o(a));
      if (!i || !i.parent) return;
      const k = De(o(r), i.parent.id);
      if (!k) return;
      k.nodes.splice(k.index + 1, 0, i.nodes[i.index]),
        i.nodes.splice(i.index, 1),
        x(r, Qe(o(r)));
    } catch (i) {
      console.error("Ошибка moveOut:", i);
    }
  }
  function Ct(i, k) {
    try {
      if (!o(s)) return;
      Jr(s, (o(s).propsValues[i] = k)), x(r, [...o(r)]);
    } catch (R) {
      console.error("Ошибка updateProp:", R);
    }
  }
  function Et() {
    try {
      $(), x(r, []), x(a, null), x(u, new Set());
    } catch (i) {
      console.error("Ошибка clearAll:", i);
    }
  }
  function vt(i) {
    return i.map(
      ({ id: k, name: R, category: q, propsValues: W, children: Z }) => ({
        id: k,
        name: R,
        category: q,
        propsValues: W,
        children: Z ? vt(Z) : [],
      })
    );
  }
  function Mt() {
    try {
      const i = vt(o(r)),
        k = new Blob([JSON.stringify(i, null, 2)], {
          type: "application/json",
        }),
        R = URL.createObjectURL(k),
        q = document.createElement("a");
      (q.href = R),
        (q.download = "form-builder-tree.json"),
        q.click(),
        URL.revokeObjectURL(R);
    } catch (i) {
      console.error("Ошибка saveJSON:", i), (F = "Не удалось сохранить JSON.");
    }
  }
  function tn(i) {
    try {
      const k = i.target.files[0];
      if (!k) return;
      const R = new FileReader();
      (R.onload = () => {
        try {
          const q = JSON.parse(R.result);
          x(r, qt(q)), x(a, null), x(u, new Set());
        } catch (q) {
          console.error("Ошибка при парсинге JSON:", q),
            (F = "❌ Ошибка при загрузке JSON");
        }
      }),
        R.readAsText(k);
    } catch (k) {
      console.error("Ошибка loadJSON:", k),
        (F = "Ошибка при загрузке JSON файла.");
    }
  }
  function kn() {
    try {
      o(C).click();
    } catch (i) {
      console.error("Ошибка openFileDialog:", i);
    }
  }
  function gn(i, k) {
    var R, q;
    try {
      const W = $e.find((me) => me.name === i),
        Z = $e.find((me) => me.name === k);
      return !W || !Z || (Z.requiredParent && !Z.requiredParent.includes(i))
        ? !1
        : (R = W.allowedChildren) != null && R.includes("*")
        ? !0
        : ((q = W.allowedChildren) == null ? void 0 : q.includes(k)) ?? !1;
    } catch (W) {
      return console.error("Ошибка checkNesting:", W), !1;
    }
  }
  function qt(i) {
    try {
      return i.map((k) => {
        const R = $e.find((Z) => Z.name === k.name);
        let q = k.props || [];
        if (R && R.props) {
          const Z = new Set(q.map((me) => me.key));
          q = [...q, ...R.props.filter((me) => !Z.has(me.key))];
        }
        let W = { ...k.propsValues };
        if (q && q.length)
          for (const Z of q)
            Z.key in W ||
              (W[Z.key] =
                Z.default !== void 0
                  ? Z.default
                  : Z.type === "checkbox"
                  ? !1
                  : "");
        return {
          ...k,
          props: q,
          propsValues: W,
          children: k.children ? qt(k.children) : [],
        };
      });
    } catch (k) {
      return console.error("Ошибка enrichTreeWithProps:", k), [];
    }
  }
  function Qe(i) {
    return i.map((k) => ({ ...k, children: k.children ? Qe(k.children) : [] }));
  }
  function De(i, k, R = null) {
    for (let q = 0; q < i.length; q++) {
      const W = i[q];
      if (W.id === k) return { parent: R, index: q, nodes: i };
      if (W.children) {
        const Z = De(W.children, k, W);
        if (Z) return Z;
      }
    }
    return null;
  }
  function It(i, k) {
    for (const R of i) {
      if (R.id === k) return R;
      if (R.children) {
        const q = It(R.children, k);
        if (q) return q;
      }
    }
    return null;
  }
  _e(
    () => (o(r), o(a)),
    () => {
      x(s, It(o(r), o(a)));
    }
  ),
    _e(
      () => o(P),
      () => {
        x(t, Wt[o(P)]);
      }
    ),
    _e(
      () => o(t),
      () => {
        x(b, [
          { id: "openJson", label: o(t).menu[0], action: kn },
          { id: "saveJson", label: o(t).menu[1], action: Mt },
          { id: "clearAll", label: o(t).menu[2], action: Et },
        ]);
      }
    ),
    Zt(),
    pt();
  var Qn = Fl();
  I("keydown", An, w);
  var eo = m(Qn);
  {
    var lr = (i) => {
        var k = Tl(),
          R = lt(k);
        wl(R, {
          get title() {
            return o(t), p(() => o(t).appName);
          },
          $$slots: {
            left: (ae, Be) => {
              var ce = Sl(),
                Le = m(ce);
              const Te = ye(
                  () => (
                    o(t),
                    p(() => ({
                      title: o(t).appName,
                      version: o(t).version,
                      author: o(t).author,
                    }))
                  )
                ),
                mt = ye(() => (o(t), p(() => ({ text: o(t).footerText }))));
              hl(Le, {
                get menuItems() {
                  return o(b);
                },
                get headerContent() {
                  return o(Te);
                },
                get footerContent() {
                  return o(mt);
                },
                $$events: { select: S },
                $$slots: {
                  footer: (oe, ge) => {
                    var fe = El(),
                      ue = m(fe);
                    const ht = ye(() => o(P) === "ru");
                    Nn(ue, {
                      get checked() {
                        return o(ht);
                      },
                      labelLeft: "🇺🇸",
                      labelRight: "🇷🇺",
                      onToggle: H,
                      get label() {
                        return o(t), p(() => o(t).langOther);
                      },
                    });
                    var Ft = E(ue, 2);
                    Nn(Ft, {
                      get checked() {
                        return o(A);
                      },
                      labelLeft: "☀️",
                      labelRight: "🌙",
                      onToggle: T,
                      get label() {
                        return o(t), p(() => o(t).dark);
                      },
                    }),
                      D(oe, fe);
                  },
                },
              }),
                D(ae, ce);
            },
            right: (ae, Be) => {
              var ce = Pl(),
                Le = m(ce),
                Te = m(Le);
              J(() => B(Te, `v${(o(t), p(() => o(t).version) ?? "")}`)),
                D(ae, ce);
            },
          },
        });
        var q = E(R, 2),
          W = m(q),
          Z = m(W);
        Co(Z, {
          get lang() {
            return o(P);
          },
          get selectedElement() {
            return o(l);
          },
          set selectedElement(ae) {
            x(l, ae);
          },
          $$legacy: !0,
        });
        var me = E(W, 2),
          Me = m(me),
          je = E(Me, 2),
          qe = E(je, 2),
          Ie = E(qe, 2),
          Re = E(Ie, 2),
          Pe = E(Re, 2),
          Je = E(q, 2),
          et = m(Je),
          tt = m(et),
          Ue = m(tt);
        const Oe = ye(() => o(L) === "tree");
        Pn(Ue, {
          id: "tree",
          get title() {
            return o(t), p(() => o(t).sections.tree);
          },
          get initiallyOpen() {
            return o(Oe);
          },
          $$events: { click: () => x(L, "tree") },
          children: (ae, Be) => {
            var ce = co(),
              Le = lt(ce);
            {
              var Te = (oe) => {
                  var ge = Nl(),
                    fe = m(ge);
                  qn(fe, {
                    get data() {
                      return o(r);
                    },
                    get selectedId() {
                      return o(a);
                    },
                    set selectedId(ue) {
                      x(a, ue);
                    },
                    get expandedNodes() {
                      return o(u);
                    },
                    set expandedNodes(ue) {
                      x(u, ue);
                    },
                    $$events: {
                      toggleExpand: (ue) => {
                        o(u).has(ue.detail)
                          ? o(u).delete(ue.detail)
                          : o(u).add(ue.detail),
                          x(u, new Set(o(u)));
                      },
                      select: (ue) => x(a, ue.detail),
                    },
                    $$legacy: !0,
                  }),
                    J(() =>
                      j(
                        ge,
                        "aria-label",
                        (o(t), p(() => o(t).messages.treeAriaLabel))
                      )
                    ),
                    I("contextmenu", ge, N),
                    D(oe, ge);
                },
                mt = (oe) => {
                  var ge = Ol(),
                    fe = m(ge);
                  J(() => B(fe, (o(t), p(() => o(t).placeholders.emptyTree)))),
                    D(oe, ge);
                };
              re(Le, (oe) => {
                o(r), p(() => o(r).length > 0) ? oe(Te) : oe(mt, !1);
              });
            }
            D(ae, ce);
          },
          $$slots: { default: !0 },
        });
        var nt = E(Ue, 2);
        const St = ye(() => o(L) === "props");
        Pn(nt, {
          id: "props",
          get title() {
            return o(t), p(() => o(t).sections.properties);
          },
          get initiallyOpen() {
            return o(St);
          },
          $$events: { click: () => x(L, "props") },
          children: (ae, Be) => {
            var ce = co(),
              Le = lt(ce);
            {
              var Te = (oe) => {
                  xo(oe, {
                    get component() {
                      return o(s);
                    },
                    onUpdate: Ct,
                    get lang() {
                      return o(P);
                    },
                  });
                },
                mt = (oe) => {
                  var ge = Ll(),
                    fe = m(ge);
                  J(() =>
                    B(fe, (o(t), p(() => o(t).placeholders.selectComponent)))
                  ),
                    D(oe, ge);
                };
              re(Le, (oe) => {
                o(s) ? oe(Te) : oe(mt, !1);
              });
            }
            D(ae, ce);
          },
          $$slots: { default: !0 },
        });
        var Rt = E(nt, 2);
        const zt = ye(() => o(L) === "code");
        Pn(Rt, {
          id: "code",
          get title() {
            return o(t), p(() => o(t).sections.code);
          },
          get initiallyOpen() {
            return o(zt);
          },
          $$events: { click: () => x(L, "code") },
          children: (ae, Be) => {
            wo(ae, {
              get components() {
                return o(r);
              },
            });
          },
          $$slots: { default: !0 },
        }),
          J(() => {
            j(Me, "title", (o(t), p(() => o(t).buttons.addElement))),
              (je.disabled = !o(a)),
              j(je, "title", (o(t), p(() => o(t).buttons.removeElement))),
              (qe.disabled = !o(a)),
              j(qe, "title", (o(t), p(() => o(t).buttons.moveUp))),
              (Ie.disabled = !o(a)),
              j(Ie, "title", (o(t), p(() => o(t).buttons.moveDown))),
              (Re.disabled = !o(a)),
              j(Re, "title", (o(t), p(() => o(t).buttons.moveOut))),
              (Pe.disabled = !o(a)),
              j(Pe, "title", (o(t), p(() => o(t).buttons.moveIn)));
          }),
          I("click", Me, ke),
          I("click", je, se),
          I("click", qe, ie),
          I("click", Ie, yt),
          I("click", Re, wt),
          I("click", Pe, Se),
          D(i, k);
      },
      sr = (i) => {
        var k = Rl(),
          R = lt(k),
          q = m(R),
          W = m(q),
          Z = E(R, 2),
          me = m(Z),
          Me = m(me);
        Co(Me, {
          get lang() {
            return o(P);
          },
          get selectedElement() {
            return o(l);
          },
          set selectedElement(oe) {
            x(l, oe);
          },
          $$legacy: !0,
        });
        var je = E(me, 2),
          qe = m(je),
          Ie = E(qe, 2);
        Aa(
          Ie,
          (oe) => x(C, oe),
          () => o(C)
        );
        var Re = E(Ie, 2),
          Pe = E(Re, 2),
          Je = E(Pe, 2),
          et = E(Je, 2),
          tt = E(et, 2),
          Ue = E(tt, 2),
          Oe = E(Ue, 2),
          nt = E(Oe, 2),
          St = E(Z, 2),
          Rt = m(St);
        Eo(Rt, {
          direction: "vertical",
          initialSize: 50,
          minSize: 10,
          maxSize: 90,
          dividerSize: 3,
          $$slots: {
            first: (oe, ge) => {
              Eo(oe, {
                direction: "horizontal",
                initialSize: 70,
                minSize: 10,
                maxSize: 90,
                slot: "first",
                $$slots: {
                  first: (fe, ue) => {
                    var ht = Dl(),
                      Ft = m(ht);
                    {
                      var xn = (xe) => {
                          var ze = Al(),
                            $t = m(ze);
                          qn($t, {
                            get data() {
                              return o(r);
                            },
                            get selectedId() {
                              return o(a);
                            },
                            set selectedId(He) {
                              x(a, He);
                            },
                            get expandedNodes() {
                              return o(u);
                            },
                            set expandedNodes(He) {
                              x(u, He);
                            },
                            $$events: {
                              toggleExpand: (He) => {
                                o(u).has(He.detail)
                                  ? o(u).delete(He.detail)
                                  : o(u).add(He.detail),
                                  x(u, new Set(o(u)));
                              },
                              select: (He) => x(a, He.detail),
                            },
                            $$legacy: !0,
                          }),
                            J(() =>
                              j(
                                ze,
                                "aria-label",
                                (o(t), p(() => o(t).messages.treeAriaLabel))
                              )
                            ),
                            I("contextmenu", ze, N),
                            D(xe, ze);
                        },
                        bn = (xe) => {
                          var ze = Vl(),
                            $t = m(ze);
                          J(() =>
                            B($t, (o(t), p(() => o(t).placeholders.emptyTree)))
                          ),
                            D(xe, ze);
                        };
                      re(Ft, (xe) => {
                        o(r), p(() => o(r).length > 0) ? xe(xn) : xe(bn, !1);
                      });
                    }
                    D(fe, ht);
                  },
                  second: (fe, ue) => {
                    var ht = ql(),
                      Ft = m(ht);
                    {
                      var xn = (xe) => {
                          xo(xe, {
                            get component() {
                              return o(s);
                            },
                            onUpdate: Ct,
                            get lang() {
                              return o(P);
                            },
                          });
                        },
                        bn = (xe) => {
                          var ze = Ml(),
                            $t = m(ze);
                          J(() =>
                            B(
                              $t,
                              (o(t), p(() => o(t).placeholders.selectComponent))
                            )
                          ),
                            D(xe, ze);
                        };
                      re(Ft, (xe) => {
                        o(s) ? xe(xn) : xe(bn, !1);
                      });
                    }
                    D(fe, ht);
                  },
                },
              });
            },
            second: (oe, ge) => {
              var fe = Il(),
                ue = m(fe);
              wo(ue, {
                get components() {
                  return o(r);
                },
              }),
                D(oe, fe);
            },
          },
        });
        var zt = E(St, 2),
          ae = m(zt),
          Be = m(ae),
          ce = m(Be);
        const Le = ye(() => o(P) === "ru");
        Nn(ce, {
          get checked() {
            return o(Le);
          },
          labelLeft: "🇺🇸",
          labelRight: "🇷🇺",
          onToggle: H,
          get label() {
            return o(t), p(() => o(t).langOther);
          },
        });
        var Te = E(ae, 2),
          mt = m(Te);
        J(() => {
          B(W, (o(t), p(() => o(t).appName))),
            j(qe, "title", (o(t), p(() => o(t).buttons.openJson))),
            j(Re, "title", (o(t), p(() => o(t).buttons.saveJson))),
            j(Pe, "title", (o(t), p(() => o(t).buttons.addElement))),
            (Je.disabled = !o(a)),
            j(Je, "title", (o(t), p(() => o(t).buttons.removeElement))),
            (et.disabled = !o(a)),
            j(et, "title", (o(t), p(() => o(t).buttons.moveUp))),
            (tt.disabled = !o(a)),
            j(tt, "title", (o(t), p(() => o(t).buttons.moveDown))),
            (Ue.disabled = !o(a)),
            j(Ue, "title", (o(t), p(() => o(t).buttons.moveOut))),
            (Oe.disabled = !o(a)),
            j(Oe, "title", (o(t), p(() => o(t).buttons.moveIn))),
            j(nt, "title", (o(t), p(() => o(t).buttons.clearAll))),
            B(mt, (o(t), p(() => o(t).footer.copyright)));
        }),
          I("click", qe, kn),
          I("change", Ie, tn),
          I("click", Re, Mt),
          I("click", Pe, ke),
          I("click", Je, se),
          I("click", et, ie),
          I("click", tt, yt),
          I("click", Ue, wt),
          I("click", Oe, Se),
          I("click", nt, Et),
          D(i, k);
      };
    re(eo, (i) => {
      o(f) ? i(lr) : i(sr, !1);
    });
  }
  var ir = E(eo, 2);
  {
    var ur = (i) => {
      var k = zl(),
        R = m(k),
        q = m(R),
        W = m(q),
        Z = E(q, 2),
        me = m(Z),
        Me = E(R, 2),
        je = m(Me),
        qe = m(je),
        Ie = E(je, 2),
        Re = m(Ie),
        Pe = E(Me, 2),
        Je = m(Pe),
        et = m(Je),
        tt = E(Je, 2),
        Ue = m(tt),
        Oe = E(Pe, 2),
        nt = m(Oe),
        St = m(nt),
        Rt = E(nt, 2),
        zt = m(Rt),
        ae = E(Oe, 2),
        Be = m(ae),
        ce = m(Be),
        Le = E(Be, 2),
        Te = m(Le);
      J(() => {
        or(k, `position: fixed; top: ${o(v) ?? ""}px; left: ${o(y) ?? ""}px;`),
          j(R, "title", (o(t), p(() => o(t).hotkeys.undo))),
          B(W, (o(t), p(() => o(t).contextMenu.undo))),
          B(me, (o(t), p(() => o(t).hotkeys.undo))),
          j(Me, "title", (o(t), p(() => o(t).hotkeys.redo))),
          B(qe, (o(t), p(() => o(t).contextMenu.redo))),
          B(Re, (o(t), p(() => o(t).hotkeys.redo))),
          j(Pe, "title", (o(t), p(() => o(t).hotkeys.copy))),
          B(et, (o(t), p(() => o(t).contextMenu.copy))),
          B(Ue, (o(t), p(() => o(t).hotkeys.copy))),
          j(Oe, "title", (o(t), p(() => o(t).hotkeys.cut))),
          B(St, (o(t), p(() => o(t).contextMenu.cut))),
          B(zt, (o(t), p(() => o(t).hotkeys.cut))),
          j(ae, "title", (o(t), p(() => o(t).hotkeys.paste))),
          B(ce, (o(t), p(() => o(t).contextMenu.paste))),
          B(Te, (o(t), p(() => o(t).hotkeys.paste)));
      }),
        I("click", R, Nt(Y)),
        I("click", Me, Nt(ne)),
        I("click", Pe, Nt(ee)),
        I("click", Oe, Nt(le)),
        I("click", ae, Nt(Ee)),
        D(i, k);
    };
    re(ir, (i) => {
      o(g) && i(ur);
    });
  }
  D(e, Qn), Ze();
}
va($l, { target: document.getElementById("app") });
