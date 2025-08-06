var fr = Object.defineProperty;
var pr = (e, n, t) =>
  n in e
    ? fr(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t })
    : (e[n] = t);
var wn = (e, n, t) => pr(e, typeof n != "symbol" ? n + "" : n, t);
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
const no = !1;
var Rt = Array.isArray,
  yr = Array.prototype.indexOf,
  Rn = Array.from,
  vr = Object.defineProperty,
  Mt = Object.getOwnPropertyDescriptor,
  Po = Object.getOwnPropertyDescriptors,
  mr = Object.prototype,
  hr = Array.prototype,
  $n = Object.getPrototypeOf,
  oo = Object.isExtensible;
function kr(e) {
  return e();
}
function Vn(e) {
  for (var n = 0; n < e.length; n++) e[n]();
}
const Ne = 2,
  Fn = 4,
  Zt = 8,
  zn = 16,
  Ze = 32,
  $t = 64,
  Jn = 128,
  Se = 256,
  sn = 512,
  we = 1024,
  Ge = 2048,
  kt = 4096,
  We = 8192,
  vn = 16384,
  Oo = 32768,
  jn = 65536,
  ro = 1 << 17,
  gr = 1 << 18,
  Vo = 1 << 19,
  Ln = 1 << 20,
  Un = 1 << 21,
  Xe = Symbol("$state"),
  xr = Symbol("legacy props"),
  br = Symbol(""),
  Lo = new (class extends Error {
    constructor() {
      super(...arguments);
      wn(this, "name", "StaleReactionError");
      wn(
        this,
        "message",
        "The reaction that called `getAbortSignal()` was re-run or destroyed"
      );
    }
  })();
function To(e) {
  return e === this.v;
}
function _r(e, n) {
  return e != e
    ? n == n
    : e !== n || (e !== null && typeof e == "object") || typeof e == "function";
}
function Ao(e) {
  return !_r(e, this.v);
}
function wr(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Cr() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Er(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Sr() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Nr(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function Pr() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Or() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Vr() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
let Ft = !1,
  Lr = !1;
function Tr() {
  Ft = !0;
}
const Bn = 1,
  Hn = 2,
  Do = 4,
  Ar = 8,
  Dr = 16,
  qr = 1,
  Mr = 2,
  Ir = 4,
  Rr = 8,
  $r = 16,
  Fr = 1,
  zr = 2,
  pe = Symbol(),
  Jr = "http://www.w3.org/1999/xhtml";
function Yn(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
let re = null;
function ao(e) {
  re = e;
}
function Qe(e, n = !1, t) {
  (re = { p: re, c: null, e: null, s: e, x: null, l: null }),
    Ft && !n && (re.l = { s: null, u: null, r1: [], r2: Yt(!1) });
}
function et(e) {
  var n = re,
    t = n.e;
  if (t !== null) {
    n.e = null;
    for (var r of t) jo(r);
  }
  return (re = n.p), {};
}
function Qt() {
  return !Ft || (re !== null && re.l === null);
}
function Dt(e) {
  if (typeof e != "object" || e === null || Xe in e) return e;
  const n = $n(e);
  if (n !== mr && n !== hr) return e;
  var t = new Map(),
    r = Rt(e),
    a = ut(0),
    l = Pt,
    s = (u) => {
      if (Pt === l) return u();
      var d = te,
        c = Pt;
      ht(null), io(l);
      var k = u();
      return ht(d), io(c), k;
    };
  return (
    r && t.set("length", ut(e.length)),
    new Proxy(e, {
      defineProperty(u, d, c) {
        (!("value" in c) ||
          c.configurable === !1 ||
          c.enumerable === !1 ||
          c.writable === !1) &&
          Pr();
        var k = t.get(d);
        return (
          k === void 0
            ? (k = s(() => {
                var x = ut(c.value);
                return t.set(d, x), x;
              }))
            : g(k, c.value, !0),
          !0
        );
      },
      deleteProperty(u, d) {
        var c = t.get(d);
        if (c === void 0) {
          if (d in u) {
            const y = s(() => ut(pe));
            t.set(d, y), Cn(a);
          }
        } else {
          if (r && typeof d == "string") {
            var k = t.get("length"),
              x = Number(d);
            Number.isInteger(x) && x < k.v && g(k, x);
          }
          g(c, pe), Cn(a);
        }
        return !0;
      },
      get(u, d, c) {
        var v;
        if (d === Xe) return e;
        var k = t.get(d),
          x = d in u;
        if (
          (k === void 0 &&
            (!x || ((v = Mt(u, d)) != null && v.writable)) &&
            ((k = s(() => {
              var f = Dt(x ? u[d] : pe),
                O = ut(f);
              return O;
            })),
            t.set(d, k)),
          k !== void 0)
        ) {
          var y = o(k);
          return y === pe ? void 0 : y;
        }
        return Reflect.get(u, d, c);
      },
      getOwnPropertyDescriptor(u, d) {
        var c = Reflect.getOwnPropertyDescriptor(u, d);
        if (c && "value" in c) {
          var k = t.get(d);
          k && (c.value = o(k));
        } else if (c === void 0) {
          var x = t.get(d),
            y = x == null ? void 0 : x.v;
          if (x !== void 0 && y !== pe)
            return { enumerable: !0, configurable: !0, value: y, writable: !0 };
        }
        return c;
      },
      has(u, d) {
        var y;
        if (d === Xe) return !0;
        var c = t.get(d),
          k = (c !== void 0 && c.v !== pe) || Reflect.has(u, d);
        if (
          c !== void 0 ||
          (Q !== null && (!k || ((y = Mt(u, d)) != null && y.writable)))
        ) {
          c === void 0 &&
            ((c = s(() => {
              var v = k ? Dt(u[d]) : pe,
                f = ut(v);
              return f;
            })),
            t.set(d, c));
          var x = o(c);
          if (x === pe) return !1;
        }
        return k;
      },
      set(u, d, c, k) {
        var R;
        var x = t.get(d),
          y = d in u;
        if (r && d === "length")
          for (var v = c; v < x.v; v += 1) {
            var f = t.get(v + "");
            f !== void 0
              ? g(f, pe)
              : v in u && ((f = s(() => ut(pe))), t.set(v + "", f));
          }
        if (x === void 0)
          (!y || ((R = Mt(u, d)) != null && R.writable)) &&
            ((x = s(() => ut(void 0))), g(x, Dt(c)), t.set(d, x));
        else {
          y = x.v !== pe;
          var O = s(() => Dt(c));
          g(x, O);
        }
        var C = Reflect.getOwnPropertyDescriptor(u, d);
        if ((C != null && C.set && C.set.call(k, c), !y)) {
          if (r && typeof d == "string") {
            var N = t.get("length"),
              q = Number(d);
            Number.isInteger(q) && q >= N.v && g(N, q + 1);
          }
          Cn(a);
        }
        return !0;
      },
      ownKeys(u) {
        o(a);
        var d = Reflect.ownKeys(u).filter((x) => {
          var y = t.get(x);
          return y === void 0 || y.v !== pe;
        });
        for (var [c, k] of t) k.v !== pe && !(c in u) && d.push(c);
        return d;
      },
      setPrototypeOf() {
        Or();
      },
    })
  );
}
function lo(e) {
  try {
    if (e !== null && typeof e == "object" && Xe in e) return e[Xe];
  } catch {}
  return e;
}
function jr(e, n) {
  return Object.is(lo(e), lo(n));
}
function mn(e) {
  var n = Ne | Ge,
    t = te !== null && (te.f & Ne) !== 0 ? te : null;
  return (
    Q === null || (t !== null && (t.f & Se) !== 0) ? (n |= Se) : (Q.f |= Vo),
    {
      ctx: re,
      deps: null,
      effects: null,
      equals: To,
      f: n,
      fn: e,
      reactions: null,
      rv: 0,
      v: pe,
      wv: 0,
      parent: t ?? Q,
      ac: null,
    }
  );
}
function ge(e) {
  const n = mn(e);
  return (n.equals = Ao), n;
}
function qo(e) {
  var n = e.effects;
  if (n !== null) {
    e.effects = null;
    for (var t = 0; t < n.length; t += 1) vt(n[t]);
  }
}
function Ur(e) {
  for (var n = e.parent; n !== null; ) {
    if ((n.f & Ne) === 0) return n;
    n = n.parent;
  }
  return null;
}
function Kn(e) {
  var n,
    t = Q;
  It(Ur(e));
  try {
    qo(e), (n = Qo(e));
  } finally {
    It(t);
  }
  return n;
}
function Mo(e) {
  var n = Kn(e);
  if ((e.equals(n) || ((e.v = n), (e.wv = Go())), !mt)) {
    var t = (pt || (e.f & Se) !== 0) && e.deps !== null ? kt : we;
    Je(e, t);
  }
}
const St = new Map();
function Yt(e, n) {
  var t = { f: 0, v: e, reactions: null, equals: To, rv: 0, wv: 0 };
  return t;
}
function ut(e, n) {
  const t = Yt(e);
  return oa(t), t;
}
function W(e, n = !1, t = !0) {
  var a;
  const r = Yt(e);
  return (
    n || (r.equals = Ao),
    Ft &&
      t &&
      re !== null &&
      re.l !== null &&
      ((a = re.l).s ?? (a.s = [])).push(r),
    r
  );
}
function Br(e, n) {
  return (
    g(
      e,
      p(() => o(e))
    ),
    n
  );
}
function g(e, n, t = !1) {
  te !== null &&
    (!Ue || (te.f & ro) !== 0) &&
    Qt() &&
    (te.f & (Ne | zn | ro)) !== 0 &&
    !(xe != null && xe.includes(e)) &&
    Vr();
  let r = t ? Dt(n) : n;
  return Tn(e, r);
}
function Tn(e, n) {
  if (!e.equals(n)) {
    var t = e.v;
    mt ? St.set(e, n) : St.set(e, t),
      (e.v = n),
      (e.f & Ne) !== 0 &&
        ((e.f & Ge) !== 0 && Kn(e), Je(e, (e.f & Se) === 0 ? we : kt)),
      (e.wv = Go()),
      Io(e, Ge),
      Qt() &&
        Q !== null &&
        (Q.f & we) !== 0 &&
        (Q.f & (Ze | $t)) === 0 &&
        (De === null ? ra([e]) : De.push(e));
  }
  return n;
}
function Cn(e) {
  g(e, e.v + 1);
}
function Io(e, n) {
  var t = e.reactions;
  if (t !== null)
    for (var r = Qt(), a = t.length, l = 0; l < a; l++) {
      var s = t[l],
        u = s.f;
      (u & Ge) === 0 &&
        ((!r && s === Q) ||
          (Je(s, n),
          (u & (we | Se)) !== 0 && ((u & Ne) !== 0 ? Io(s, kt) : xn(s))));
    }
}
function Hr() {
  console.warn("https://svelte.dev/e/select_multiple_invalid_value");
}
let Yr = !1;
var An, Ro, $o, Fo;
function Kr() {
  if (An === void 0) {
    (An = window), (Ro = /Firefox/.test(navigator.userAgent));
    var e = Element.prototype,
      n = Node.prototype,
      t = Text.prototype;
    ($o = Mt(n, "firstChild").get),
      (Fo = Mt(n, "nextSibling").get),
      oo(e) &&
        ((e.__click = void 0),
        (e.__className = void 0),
        (e.__attributes = null),
        (e.__style = void 0),
        (e.__e = void 0)),
      oo(t) && (t.__t = void 0);
  }
}
function hn(e = "") {
  return document.createTextNode(e);
}
function ct(e) {
  return $o.call(e);
}
function kn(e) {
  return Fo.call(e);
}
function m(e, n) {
  return ct(e);
}
function ft(e, n) {
  {
    var t = ct(e);
    return t instanceof Comment && t.data === "" ? kn(t) : t;
  }
}
function E(e, n = 1, t = !1) {
  let r = e;
  for (; n--; ) r = kn(r);
  return r;
}
function Wr(e) {
  e.textContent = "";
}
function zo(e) {
  Q === null && te === null && Er(),
    te !== null && (te.f & Se) !== 0 && Q === null && Cr(),
    mt && wr();
}
function Xr(e, n) {
  var t = n.last;
  t === null
    ? (n.last = n.first = e)
    : ((t.next = e), (e.prev = t), (n.last = e));
}
function gt(e, n, t, r = !0) {
  var a = Q,
    l = {
      ctx: re,
      deps: null,
      nodes_start: null,
      nodes_end: null,
      f: e | Ge,
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
      gn(l), (l.f |= Oo);
    } catch (d) {
      throw (vt(l), d);
    }
  else n !== null && xn(l);
  var s =
    t &&
    l.deps === null &&
    l.first === null &&
    l.nodes_start === null &&
    l.teardown === null &&
    (l.f & (Vo | Jn)) === 0;
  if (!s && r && (a !== null && Xr(l, a), te !== null && (te.f & Ne) !== 0)) {
    var u = te;
    (u.effects ?? (u.effects = [])).push(l);
  }
  return l;
}
function Jo(e) {
  const n = gt(Zt, null, !1);
  return Je(n, we), (n.teardown = e), n;
}
function Dn(e) {
  if ((zo(), !te && Q && (Q.f & Ze) !== 0)) {
    var n = re;
    (n.e ?? (n.e = [])).push(e);
  } else return jo(e);
}
function jo(e) {
  return gt(Fn | Un, e, !1);
}
function Gr(e) {
  return zo(), gt(Zt | Un, e, !0);
}
function Zr(e) {
  const n = gt($t, e, !0);
  return (t = {}) =>
    new Promise((r) => {
      t.outro
        ? un(n, () => {
            vt(n), r(void 0);
          })
        : (vt(n), r(void 0));
    });
}
function Qr(e) {
  return gt(Fn, e, !1);
}
function Ee(e, n) {
  var t = re,
    r = { effect: null, ran: !1 };
  t.l.r1.push(r),
    (r.effect = tn(() => {
      e(), !r.ran && ((r.ran = !0), g(t.l.r2, !0), p(n));
    }));
}
function en() {
  var e = re;
  tn(() => {
    if (o(e.l.r2)) {
      for (var n of e.l.r1) {
        var t = n.effect;
        (t.f & we) !== 0 && Je(t, kt), nn(t) && gn(t), (n.ran = !1);
      }
      e.l.r2.v = !1;
    }
  });
}
function tn(e) {
  return gt(Zt, e, !0);
}
function U(e, n = [], t = mn) {
  const r = n.map(t);
  return Wn(() => e(...r.map(o)));
}
function Wn(e, n = 0) {
  var t = gt(Zt | zn | n, e, !0);
  return t;
}
function Kt(e, n = !0) {
  return gt(Zt | Ze, e, !0, n);
}
function Uo(e) {
  var n = e.teardown;
  if (n !== null) {
    const t = mt,
      r = te;
    so(!0), ht(null);
    try {
      n.call(null);
    } finally {
      so(t), ht(r);
    }
  }
}
function Bo(e, n = !1) {
  var a;
  var t = e.first;
  for (e.first = e.last = null; t !== null; ) {
    (a = t.ac) == null || a.abort(Lo);
    var r = t.next;
    (t.f & $t) !== 0 ? (t.parent = null) : vt(t, n), (t = r);
  }
}
function ea(e) {
  for (var n = e.first; n !== null; ) {
    var t = n.next;
    (n.f & Ze) === 0 && vt(n), (n = t);
  }
}
function vt(e, n = !0) {
  var t = !1;
  (n || (e.f & gr) !== 0) &&
    e.nodes_start !== null &&
    e.nodes_end !== null &&
    (Ho(e.nodes_start, e.nodes_end), (t = !0)),
    Bo(e, n && !t),
    yn(e, 0),
    Je(e, vn);
  var r = e.transitions;
  if (r !== null) for (const l of r) l.stop();
  Uo(e);
  var a = e.parent;
  a !== null && a.first !== null && Yo(e),
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
function Ho(e, n) {
  for (; e !== null; ) {
    var t = e === n ? null : kn(e);
    e.remove(), (e = t);
  }
}
function Yo(e) {
  var n = e.parent,
    t = e.prev,
    r = e.next;
  t !== null && (t.next = r),
    r !== null && (r.prev = t),
    n !== null &&
      (n.first === e && (n.first = r), n.last === e && (n.last = t));
}
function un(e, n) {
  var t = [];
  Xn(e, t, !0),
    Ko(t, () => {
      vt(e), n && n();
    });
}
function Ko(e, n) {
  var t = e.length;
  if (t > 0) {
    var r = () => --t || n();
    for (var a of e) a.out(r);
  } else n();
}
function Xn(e, n, t) {
  if ((e.f & We) === 0) {
    if (((e.f ^= We), e.transitions !== null))
      for (const s of e.transitions) (s.is_global || t) && n.push(s);
    for (var r = e.first; r !== null; ) {
      var a = r.next,
        l = (r.f & jn) !== 0 || (r.f & Ze) !== 0;
      Xn(r, n, l ? t : !1), (r = a);
    }
  }
}
function dn(e) {
  Wo(e, !0);
}
function Wo(e, n) {
  if ((e.f & We) !== 0) {
    e.f ^= We;
    for (var t = e.first; t !== null; ) {
      var r = t.next,
        a = (t.f & jn) !== 0 || (t.f & Ze) !== 0;
      Wo(t, a ? n : !1), (t = r);
    }
    if (e.transitions !== null)
      for (const l of e.transitions) (l.is_global || n) && l.in();
  }
}
let cn = [];
function ta() {
  var e = cn;
  (cn = []), Vn(e);
}
function Gn(e) {
  cn.length === 0 && queueMicrotask(ta), cn.push(e);
}
function na(e) {
  var n = Q;
  if ((n.f & Oo) === 0) {
    if ((n.f & Jn) === 0) throw e;
    n.fn(e);
  } else Xo(e, n);
}
function Xo(e, n) {
  for (; n !== null; ) {
    if ((n.f & Jn) !== 0)
      try {
        n.b.error(e);
        return;
      } catch {}
    n = n.parent;
  }
  throw e;
}
let qn = !1,
  fn = null,
  Nt = !1,
  mt = !1;
function so(e) {
  mt = e;
}
let ln = [];
let te = null,
  Ue = !1;
function ht(e) {
  te = e;
}
let Q = null;
function It(e) {
  Q = e;
}
let xe = null;
function oa(e) {
  te !== null && te.f & Ln && (xe === null ? (xe = [e]) : xe.push(e));
}
let ke = null,
  Ce = 0,
  De = null;
function ra(e) {
  De = e;
}
let pn = 1,
  Wt = 0,
  Pt = Wt;
function io(e) {
  Pt = e;
}
let pt = !1;
function Go() {
  return ++pn;
}
function nn(e) {
  var x;
  var n = e.f;
  if ((n & Ge) !== 0) return !0;
  if ((n & kt) !== 0) {
    var t = e.deps,
      r = (n & Se) !== 0;
    if (t !== null) {
      var a,
        l,
        s = (n & sn) !== 0,
        u = r && Q !== null && !pt,
        d = t.length;
      if (s || u) {
        var c = e,
          k = c.parent;
        for (a = 0; a < d; a++)
          (l = t[a]),
            (s ||
              !(
                (x = l == null ? void 0 : l.reactions) != null && x.includes(c)
              )) &&
              (l.reactions ?? (l.reactions = [])).push(c);
        s && (c.f ^= sn), u && k !== null && (k.f & Se) === 0 && (c.f ^= Se);
      }
      for (a = 0; a < d; a++)
        if (((l = t[a]), nn(l) && Mo(l), l.wv > e.wv)) return !0;
    }
    (!r || (Q !== null && !pt)) && Je(e, we);
  }
  return !1;
}
function Zo(e, n, t = !0) {
  var r = e.reactions;
  if (r !== null && !(xe != null && xe.includes(e)))
    for (var a = 0; a < r.length; a++) {
      var l = r[a];
      (l.f & Ne) !== 0
        ? Zo(l, n, !1)
        : n === l && (t ? Je(l, Ge) : (l.f & we) !== 0 && Je(l, kt), xn(l));
    }
}
function Qo(e) {
  var f;
  var n = ke,
    t = Ce,
    r = De,
    a = te,
    l = pt,
    s = xe,
    u = re,
    d = Ue,
    c = Pt,
    k = e.f;
  (ke = null),
    (Ce = 0),
    (De = null),
    (pt = (k & Se) !== 0 && (Ue || !Nt || te === null)),
    (te = (k & (Ze | $t)) === 0 ? e : null),
    (xe = null),
    ao(e.ctx),
    (Ue = !1),
    (Pt = ++Wt),
    (e.f |= Ln),
    e.ac !== null && (e.ac.abort(Lo), (e.ac = null));
  try {
    var x = (0, e.fn)(),
      y = e.deps;
    if (ke !== null) {
      var v;
      if ((yn(e, Ce), y !== null && Ce > 0))
        for (y.length = Ce + ke.length, v = 0; v < ke.length; v++)
          y[Ce + v] = ke[v];
      else e.deps = y = ke;
      if (!pt || ((k & Ne) !== 0 && e.reactions !== null))
        for (v = Ce; v < y.length; v++)
          ((f = y[v]).reactions ?? (f.reactions = [])).push(e);
    } else y !== null && Ce < y.length && (yn(e, Ce), (y.length = Ce));
    if (
      Qt() &&
      De !== null &&
      !Ue &&
      y !== null &&
      (e.f & (Ne | kt | Ge)) === 0
    )
      for (v = 0; v < De.length; v++) Zo(De[v], e);
    return (
      a !== null &&
        a !== e &&
        (Wt++, De !== null && (r === null ? (r = De) : r.push(...De))),
      x
    );
  } catch (O) {
    na(O);
  } finally {
    (ke = n),
      (Ce = t),
      (De = r),
      (te = a),
      (pt = l),
      (xe = s),
      ao(u),
      (Ue = d),
      (Pt = c),
      (e.f ^= Ln);
  }
}
function aa(e, n) {
  let t = n.reactions;
  if (t !== null) {
    var r = yr.call(t, e);
    if (r !== -1) {
      var a = t.length - 1;
      a === 0 ? (t = n.reactions = null) : ((t[r] = t[a]), t.pop());
    }
  }
  t === null &&
    (n.f & Ne) !== 0 &&
    (ke === null || !ke.includes(n)) &&
    (Je(n, kt), (n.f & (Se | sn)) === 0 && (n.f ^= sn), qo(n), yn(n, 0));
}
function yn(e, n) {
  var t = e.deps;
  if (t !== null) for (var r = n; r < t.length; r++) aa(e, t[r]);
}
function gn(e) {
  var n = e.f;
  if ((n & vn) === 0) {
    Je(e, we);
    var t = Q,
      r = Nt;
    (Q = e), (Nt = !0);
    try {
      (n & zn) !== 0 ? ea(e) : Bo(e), Uo(e);
      var a = Qo(e);
      (e.teardown = typeof a == "function" ? a : null), (e.wv = pn);
      var l;
      no && Lr && (e.f & Ge) !== 0 && e.deps;
    } finally {
      (Nt = r), (Q = t);
    }
  }
}
function la() {
  try {
    Sr();
  } catch (e) {
    if (fn !== null) Xo(e, fn);
    else throw e;
  }
}
function sa() {
  var e = Nt;
  try {
    var n = 0;
    for (Nt = !0; ln.length > 0; ) {
      n++ > 1e3 && la();
      var t = ln,
        r = t.length;
      ln = [];
      for (var a = 0; a < r; a++) {
        var l = ua(t[a]);
        ia(l);
      }
      St.clear();
    }
  } finally {
    (qn = !1), (Nt = e), (fn = null);
  }
}
function ia(e) {
  var n = e.length;
  if (n !== 0) {
    for (var t = 0; t < n; t++) {
      var r = e[t];
      if ((r.f & (vn | We)) === 0 && nn(r)) {
        var a = pn;
        if (
          (gn(r),
          r.deps === null &&
            r.first === null &&
            r.nodes_start === null &&
            (r.teardown === null ? Yo(r) : (r.fn = null)),
          pn > a && (r.f & Un) !== 0)
        )
          break;
      }
    }
    for (; t < n; t += 1) xn(e[t]);
  }
}
function xn(e) {
  qn || ((qn = !0), queueMicrotask(sa));
  for (var n = (fn = e); n.parent !== null; ) {
    n = n.parent;
    var t = n.f;
    if ((t & ($t | Ze)) !== 0) {
      if ((t & we) === 0) return;
      n.f ^= we;
    }
  }
  ln.push(n);
}
function ua(e) {
  for (var n = [], t = e; t !== null; ) {
    var r = t.f,
      a = (r & (Ze | $t)) !== 0,
      l = a && (r & we) !== 0;
    if (!l && (r & We) === 0) {
      (r & Fn) !== 0 ? n.push(t) : a ? (t.f ^= we) : nn(t) && gn(t);
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
    t = (n & Ne) !== 0;
  if (te !== null && !Ue) {
    if (!(xe != null && xe.includes(e))) {
      var r = te.deps;
      e.rv < Wt &&
        ((e.rv = Wt),
        ke === null && r !== null && r[Ce] === e
          ? Ce++
          : ke === null
          ? (ke = [e])
          : (!pt || !ke.includes(e)) && ke.push(e));
    }
  } else if (t && e.deps === null && e.effects === null) {
    var a = e,
      l = a.parent;
    l !== null && (l.f & Se) === 0 && (a.f ^= Se);
  }
  if ((t && !mt && ((a = e), nn(a) && Mo(a)), mt)) {
    if (St.has(e)) return St.get(e);
    if (t) {
      a = e;
      var s = a.v;
      return ((a.f & we) !== 0 || er(a)) && (s = Kn(a)), St.set(a, s), s;
    }
  }
  return e.v;
}
function er(e) {
  if (e.v === pe) return !0;
  if (e.deps === null) return !1;
  for (const n of e.deps)
    if (St.has(n) || ((n.f & Ne) !== 0 && er(n))) return !0;
  return !1;
}
function p(e) {
  var n = Ue;
  try {
    return (Ue = !0), e();
  } finally {
    Ue = n;
  }
}
const da = -7169;
function Je(e, n) {
  e.f = (e.f & da) | n;
}
function Y(e) {
  if (!(typeof e != "object" || !e || e instanceof EventTarget)) {
    if (Xe in e) Mn(e);
    else if (!Array.isArray(e))
      for (let n in e) {
        const t = e[n];
        typeof t == "object" && t && Xe in t && Mn(t);
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
    const t = $n(e);
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
const ca = ["touchstart", "touchmove"];
function fa(e) {
  return ca.includes(e);
}
let uo = !1;
function pa() {
  uo ||
    ((uo = !0),
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
function tr(e) {
  var n = te,
    t = Q;
  ht(null), It(null);
  try {
    return e();
  } finally {
    ht(n), It(t);
  }
}
function nr(e, n, t, r = t) {
  e.addEventListener(n, () => tr(t));
  const a = e.__on_r;
  a
    ? (e.__on_r = () => {
        a(), r(!0);
      })
    : (e.__on_r = () => r(!0)),
    pa();
}
const ya = new Set(),
  co = new Set();
function va(e, n, t, r = {}) {
  function a(l) {
    if ((r.capture || Ht.call(n, l), !l.cancelBubble))
      return tr(() => (t == null ? void 0 : t.call(this, l)));
  }
  return (
    e.startsWith("pointer") || e.startsWith("touch") || e === "wheel"
      ? Gn(() => {
          n.addEventListener(e, a, r);
        })
      : n.addEventListener(e, a, r),
    a
  );
}
function M(e, n, t, r, a) {
  var l = { capture: r, passive: a },
    s = va(e, n, t, l);
  (n === document.body ||
    n === window ||
    n === document ||
    n instanceof HTMLMediaElement) &&
    Jo(() => {
      n.removeEventListener(e, s, l);
    });
}
function Ht(e) {
  var q;
  var n = this,
    t = n.ownerDocument,
    r = e.type,
    a = ((q = e.composedPath) == null ? void 0 : q.call(e)) || [],
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
    vr(e, "currentTarget", {
      configurable: !0,
      get() {
        return l || t;
      },
    });
    var k = te,
      x = Q;
    ht(null), It(null);
    try {
      for (var y, v = []; l !== null; ) {
        var f = l.assignedSlot || l.parentNode || l.host || null;
        try {
          var O = l["__" + r];
          if (O != null && (!l.disabled || e.target === l))
            if (Rt(O)) {
              var [C, ...N] = O;
              C.apply(l, [e, ...N]);
            } else O.call(l, e);
        } catch (R) {
          y ? v.push(R) : (y = R);
        }
        if (e.cancelBubble || f === n || f === null) break;
        l = f;
      }
      if (y) {
        for (let R of v)
          queueMicrotask(() => {
            throw R;
          });
        throw y;
      }
    } finally {
      (e.__root = n), delete e.currentTarget, ht(k), It(x);
    }
  }
}
function or(e) {
  var n = document.createElement("template");
  return (n.innerHTML = e.replaceAll("<!>", "<!---->")), n.content;
}
function Xt(e, n) {
  var t = Q;
  t.nodes_start === null && ((t.nodes_start = e), (t.nodes_end = n));
}
function F(e, n) {
  var t = (n & Fr) !== 0,
    r = (n & zr) !== 0,
    a,
    l = !e.startsWith("<!>");
  return () => {
    a === void 0 && ((a = or(l ? e : "<!>" + e)), t || (a = ct(a)));
    var s = r || Ro ? document.importNode(a, !0) : a.cloneNode(!0);
    if (t) {
      var u = ct(s),
        d = s.lastChild;
      Xt(u, d);
    } else Xt(s, s);
    return s;
  };
}
function ma(e = "") {
  {
    var n = hn(e + "");
    return Xt(n, n), n;
  }
}
function fo() {
  var e = document.createDocumentFragment(),
    n = document.createComment(""),
    t = hn();
  return e.append(n, t), Xt(n, t), e;
}
function D(e, n) {
  e !== null && e.before(n);
}
function j(e, n) {
  var t = n == null ? "" : typeof n == "object" ? n + "" : n;
  t !== (e.__t ?? (e.__t = e.nodeValue)) &&
    ((e.__t = t), (e.nodeValue = t + ""));
}
function ha(e, n) {
  return ka(e, n);
}
const At = new Map();
function ka(
  e,
  { target: n, anchor: t, props: r = {}, events: a, context: l, intro: s = !0 }
) {
  Kr();
  var u = new Set(),
    d = (x) => {
      for (var y = 0; y < x.length; y++) {
        var v = x[y];
        if (!u.has(v)) {
          u.add(v);
          var f = fa(v);
          n.addEventListener(v, Ht, { passive: f });
          var O = At.get(v);
          O === void 0
            ? (document.addEventListener(v, Ht, { passive: f }), At.set(v, 1))
            : At.set(v, O + 1);
        }
      }
    };
  d(Rn(ya)), co.add(d);
  var c = void 0,
    k = Zr(() => {
      var x = t ?? n.appendChild(hn());
      return (
        Kt(() => {
          if (l) {
            Qe({});
            var y = re;
            y.c = l;
          }
          a && (r.$$events = a), (c = e(x, r) || {}), l && et();
        }),
        () => {
          var f;
          for (var y of u) {
            n.removeEventListener(y, Ht);
            var v = At.get(y);
            --v === 0
              ? (document.removeEventListener(y, Ht), At.delete(y))
              : At.set(y, v);
          }
          co.delete(d),
            x !== t && ((f = x.parentNode) == null || f.removeChild(x));
        }
      );
    });
  return ga.set(c, k), c;
}
let ga = new WeakMap();
function oe(e, n, [t, r] = [0, 0]) {
  var a = e,
    l = null,
    s = null,
    u = pe,
    d = t > 0 ? jn : 0,
    c = !1;
  const k = (y, v = !0) => {
      (c = !0), x(v, y);
    },
    x = (y, v) => {
      u !== (u = y) &&
        (u
          ? (l ? dn(l) : v && (l = Kt(() => v(a))),
            s &&
              un(s, () => {
                s = null;
              }))
          : (s ? dn(s) : v && (s = Kt(() => v(a, [t + 1, r]))),
            l &&
              un(l, () => {
                l = null;
              })));
    };
  Wn(() => {
    (c = !1), n(k), c || x(null, null);
  }, d);
}
function qt(e, n) {
  return n;
}
function xa(e, n, t, r) {
  for (var a = [], l = n.length, s = 0; s < l; s++) Xn(n[s].e, a, !0);
  var u = l > 0 && a.length === 0 && t !== null;
  if (u) {
    var d = t.parentNode;
    Wr(d), d.append(t), r.clear(), dt(e, n[0].prev, n[l - 1].next);
  }
  Ko(a, () => {
    for (var c = 0; c < l; c++) {
      var k = n[c];
      u || (r.delete(k.k), dt(e, k.prev, k.next)), vt(k.e, !u);
    }
  });
}
function yt(e, n, t, r, a, l = null) {
  var s = e,
    u = { flags: n, items: new Map(), first: null },
    d = (n & Do) !== 0;
  if (d) {
    var c = e;
    s = c.appendChild(hn());
  }
  var k = null,
    x = !1,
    y = ge(() => {
      var v = t();
      return Rt(v) ? v : v == null ? [] : Rn(v);
    });
  Wn(() => {
    var v = o(y),
      f = v.length;
    (x && f === 0) ||
      ((x = f === 0),
      ba(v, u, s, a, n, r, t),
      l !== null &&
        (f === 0
          ? k
            ? dn(k)
            : (k = Kt(() => l(s)))
          : k !== null &&
            un(k, () => {
              k = null;
            })),
      o(y));
  });
}
function ba(e, n, t, r, a, l, s) {
  var J, ae, ne, ce;
  var u = (a & Ar) !== 0,
    d = (a & (Bn | Hn)) !== 0,
    c = e.length,
    k = n.items,
    x = n.first,
    y = x,
    v,
    f = null,
    O,
    C = [],
    N = [],
    q,
    R,
    b,
    S;
  if (u)
    for (S = 0; S < c; S += 1)
      (q = e[S]),
        (R = l(q, S)),
        (b = k.get(R)),
        b !== void 0 &&
          ((J = b.a) == null || J.measure(), (O ?? (O = new Set())).add(b));
  for (S = 0; S < c; S += 1) {
    if (((q = e[S]), (R = l(q, S)), (b = k.get(R)), b === void 0)) {
      var $ = y ? y.e.nodes_start : t;
      (f = wa($, n, f, f === null ? n.first : f.next, q, R, S, r, a, s)),
        k.set(R, f),
        (C = []),
        (N = []),
        (y = f.next);
      continue;
    }
    if (
      (d && _a(b, q, S, a),
      (b.e.f & We) !== 0 &&
        (dn(b.e),
        u &&
          ((ae = b.a) == null || ae.unfix(), (O ?? (O = new Set())).delete(b))),
      b !== y)
    ) {
      if (v !== void 0 && v.has(b)) {
        if (C.length < N.length) {
          var w = N[0],
            P;
          f = w.prev;
          var V = C[0],
            L = C[C.length - 1];
          for (P = 0; P < C.length; P += 1) po(C[P], w, t);
          for (P = 0; P < N.length; P += 1) v.delete(N[P]);
          dt(n, V.prev, L.next),
            dt(n, f, V),
            dt(n, L, w),
            (y = w),
            (f = L),
            (S -= 1),
            (C = []),
            (N = []);
        } else
          v.delete(b),
            po(b, y, t),
            dt(n, b.prev, b.next),
            dt(n, b, f === null ? n.first : f.next),
            dt(n, f, b),
            (f = b);
        continue;
      }
      for (C = [], N = []; y !== null && y.k !== R; )
        (y.e.f & We) === 0 && (v ?? (v = new Set())).add(y),
          N.push(y),
          (y = y.next);
      if (y === null) continue;
      b = y;
    }
    C.push(b), (f = b), (y = b.next);
  }
  if (y !== null || v !== void 0) {
    for (var B = v === void 0 ? [] : Rn(v); y !== null; )
      (y.e.f & We) === 0 && B.push(y), (y = y.next);
    var T = B.length;
    if (T > 0) {
      var H = (a & Do) !== 0 && c === 0 ? t : null;
      if (u) {
        for (S = 0; S < T; S += 1) (ne = B[S].a) == null || ne.measure();
        for (S = 0; S < T; S += 1) (ce = B[S].a) == null || ce.fix();
      }
      xa(n, B, H, k);
    }
  }
  u &&
    Gn(() => {
      var Pe;
      if (O !== void 0) for (b of O) (Pe = b.a) == null || Pe.apply();
    }),
    (Q.first = n.first && n.first.e),
    (Q.last = f && f.e);
}
function _a(e, n, t, r) {
  (r & Bn) !== 0 && Tn(e.v, n), (r & Hn) !== 0 ? Tn(e.i, t) : (e.i = t);
}
function wa(e, n, t, r, a, l, s, u, d, c) {
  var k = (d & Bn) !== 0,
    x = (d & Dr) === 0,
    y = k ? (x ? W(a, !1, !1) : Yt(a)) : a,
    v = (d & Hn) === 0 ? s : Yt(s),
    f = { i: v, v: y, k: l, a: null, e: null, prev: t, next: r };
  try {
    return (
      (f.e = Kt(() => u(e, y, v, c), Yr)),
      (f.e.prev = t && t.e),
      (f.e.next = r && r.e),
      t === null ? (n.first = f) : ((t.next = f), (t.e.next = f.e)),
      r !== null && ((r.prev = f), (r.e.prev = f.e)),
      f
    );
  } finally {
  }
}
function po(e, n, t) {
  for (
    var r = e.next ? e.next.e.nodes_start : t,
      a = n ? n.e.nodes_start : t,
      l = e.e.nodes_start;
    l !== r;

  ) {
    var s = kn(l);
    a.before(l), (l = s);
  }
}
function dt(e, n, t) {
  n === null ? (e.first = t) : ((n.next = t), (n.e.next = t && t.e)),
    t !== null && ((t.prev = n), (t.e.prev = n && n.e));
}
function Ca(e, n, t = !1, r = !1, a = !1) {
  var l = e,
    s = "";
  U(() => {
    var u = Q;
    if (
      s !== (s = n() ?? "") &&
      (u.nodes_start !== null &&
        (Ho(u.nodes_start, u.nodes_end), (u.nodes_start = u.nodes_end = null)),
      s !== "")
    ) {
      var d = s + "";
      t ? (d = `<svg>${d}</svg>`) : r && (d = `<math>${d}</math>`);
      var c = or(d);
      if (((t || r) && (c = ct(c)), Xt(ct(c), c.lastChild), t || r))
        for (; ct(c); ) l.before(ct(c));
      else l.before(c);
    }
  });
}
function Ot(e, n, t, r, a) {
  var u;
  var l = (u = n.$$slots) == null ? void 0 : u[t],
    s = !1;
  l === !0 && ((l = n[t === "default" ? "children" : t]), (s = !0)),
    l === void 0 ? a !== null && a(e) : l(e, s ? () => r : r);
}
const yo = [
  ...` 	
\r\f \v\uFEFF`,
];
function Ea(e, n, t) {
  var r = e == null ? "" : "" + e;
  if ((n && (r = r ? r + " " + n : n), t)) {
    for (var a in t)
      if (t[a]) r = r ? r + " " + a : a;
      else if (r.length)
        for (var l = a.length, s = 0; (s = r.indexOf(a, s)) >= 0; ) {
          var u = s + l;
          (s === 0 || yo.includes(r[s - 1])) &&
          (u === r.length || yo.includes(r[u]))
            ? (r = (s === 0 ? "" : r.substring(0, s)) + r.substring(u + 1))
            : (s = u);
        }
  }
  return r === "" ? null : r;
}
function Sa(e, n) {
  return e == null ? null : String(e);
}
function ze(e, n, t, r, a, l) {
  var s = e.__className;
  if (s !== t || s === void 0) {
    var u = Ea(t, r, l);
    u == null ? e.removeAttribute("class") : (e.className = u),
      (e.__className = t);
  } else if (l && a !== l)
    for (var d in l) {
      var c = !!l[d];
      (a == null || c !== !!a[d]) && e.classList.toggle(d, c);
    }
  return l;
}
function rr(e, n, t, r) {
  var a = e.__style;
  if (a !== n) {
    var l = Sa(n);
    l == null ? e.removeAttribute("style") : (e.style.cssText = l),
      (e.__style = n);
  }
  return r;
}
function ar(e, n, t = !1) {
  if (e.multiple) {
    if (n == null) return;
    if (!Rt(n)) return Hr();
    for (var r of e.options) r.selected = n.includes(vo(r));
    return;
  }
  for (r of e.options) {
    var a = vo(r);
    if (jr(a, n)) {
      r.selected = !0;
      return;
    }
  }
  (!t || n !== void 0) && (e.selectedIndex = -1);
}
function Na(e) {
  var n = new MutationObserver(() => {
    ar(e, e.__value);
  });
  n.observe(e, {
    childList: !0,
    subtree: !0,
    attributes: !0,
    attributeFilter: ["value"],
  }),
    Jo(() => {
      n.disconnect();
    });
}
function vo(e) {
  return "__value" in e ? e.__value : e.value;
}
const Pa = Symbol("is custom element"),
  Oa = Symbol("is html");
function En(e, n) {
  var t = Zn(e);
  t.value === (t.value = n ?? void 0) ||
    (e.value === n && (n !== 0 || e.nodeName !== "PROGRESS")) ||
    (e.value = n ?? "");
}
function Va(e, n) {
  var t = Zn(e);
  t.checked !== (t.checked = n ?? void 0) && (e.checked = n);
}
function z(e, n, t, r) {
  var a = Zn(e);
  a[n] !== (a[n] = t) &&
    (n === "loading" && (e[br] = t),
    t == null
      ? e.removeAttribute(n)
      : typeof t != "string" && La(e).includes(n)
      ? (e[n] = t)
      : e.setAttribute(n, t));
}
function Zn(e) {
  return (
    e.__attributes ??
    (e.__attributes = {
      [Pa]: e.nodeName.includes("-"),
      [Oa]: e.namespaceURI === Jr,
    })
  );
}
var mo = new Map();
function La(e) {
  var n = mo.get(e.nodeName);
  if (n) return n;
  mo.set(e.nodeName, (n = []));
  for (var t, r = e, a = Element.prototype; a !== r; ) {
    t = Po(r);
    for (var l in t) t[l].set && n.push(l);
    r = $n(r);
  }
  return n;
}
function Ta(e, n, t = n) {
  var r = Qt();
  nr(e, "input", (a) => {
    var l = a ? e.defaultValue : e.value;
    if (((l = Sn(e) ? Nn(l) : l), t(l), r && l !== (l = n()))) {
      var s = e.selectionStart,
        u = e.selectionEnd;
      (e.value = l ?? ""),
        u !== null &&
          ((e.selectionStart = s),
          (e.selectionEnd = Math.min(u, e.value.length)));
    }
  }),
    p(n) == null && e.value && t(Sn(e) ? Nn(e.value) : e.value),
    tn(() => {
      var a = n();
      (Sn(e) && a === Nn(e.value)) ||
        (e.type === "date" && !a && !e.value) ||
        (a !== e.value && (e.value = a ?? ""));
    });
}
function Aa(e, n, t = n) {
  nr(e, "change", (r) => {
    var a = r ? e.defaultChecked : e.checked;
    t(a);
  }),
    p(n) == null && t(e.checked),
    tn(() => {
      var r = n();
      e.checked = !!r;
    });
}
function Sn(e) {
  var n = e.type;
  return n === "number" || n === "range";
}
function Nn(e) {
  return e === "" ? null : +e;
}
function ho(e, n) {
  return e === n || (e == null ? void 0 : e[Xe]) === n;
}
function Da(e = {}, n, t, r) {
  return (
    Qr(() => {
      var a, l;
      return (
        tn(() => {
          (a = l),
            (l = []),
            p(() => {
              e !== t(...l) &&
                (n(e, ...l), a && ho(t(...a), e) && n(null, ...a));
            });
        }),
        () => {
          Gn(() => {
            l && ho(t(...l), e) && n(null, ...l);
          });
        }
      );
    }),
    e
  );
}
function ko(e) {
  return function (...n) {
    var t = n[0];
    t.target === this && (e == null || e.apply(this, n));
  };
}
function Et(e) {
  return function (...n) {
    var t = n[0];
    return t.stopPropagation(), e == null ? void 0 : e.apply(this, n);
  };
}
function xt(e = !1) {
  const n = re,
    t = n.l.u;
  if (!t) return;
  let r = () => Y(n.s);
  if (e) {
    let a = 0,
      l = {};
    const s = mn(() => {
      let u = !1;
      const d = n.s;
      for (const c in d) d[c] !== l[c] && ((l[c] = d[c]), (u = !0));
      return u && a++, a;
    });
    r = () => o(s);
  }
  t.b.length &&
    Gr(() => {
      go(n, r), Vn(t.b);
    }),
    Dn(() => {
      const a = p(() => t.m.map(kr));
      return () => {
        for (const l of a) typeof l == "function" && l();
      };
    }),
    t.a.length &&
      Dn(() => {
        go(n, r), Vn(t.a);
      });
}
function go(e, n) {
  if (e.l.s) for (const t of e.l.s) o(t);
  n();
}
function xo(e, n) {
  var l;
  var t = (l = e.$$events) == null ? void 0 : l[n.type],
    r = Rt(t) ? t.slice() : t == null ? [] : [t];
  for (var a of r) a.call(this, n);
}
let an = !1;
function qa(e) {
  var n = an;
  try {
    return (an = !1), [e(), an];
  } finally {
    an = n;
  }
}
function G(e, n, t, r) {
  var R;
  var a = !Ft || (t & Mr) !== 0,
    l = (t & Rr) !== 0,
    s = (t & $r) !== 0,
    u = r,
    d = !0,
    c = () => (d && ((d = !1), (u = s ? p(r) : r)), u),
    k;
  if (l) {
    var x = Xe in e || xr in e;
    k =
      ((R = Mt(e, n)) == null ? void 0 : R.set) ??
      (x && n in e ? (b) => (e[n] = b) : void 0);
  }
  var y,
    v = !1;
  l ? ([y, v] = qa(() => e[n])) : (y = e[n]),
    y === void 0 && r !== void 0 && ((y = c()), k && (a && Nr(), k(y)));
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
    a && (t & Ir) === 0)
  )
    return f;
  if (k) {
    var O = e.$$legacy;
    return function (b, S) {
      return arguments.length > 0
        ? ((!a || !S || O || v) && k(S ? f() : b), b)
        : f();
    };
  }
  var C = !1,
    N = ((t & qr) !== 0 ? mn : ge)(() => ((C = !1), f()));
  l && o(N);
  var q = Q;
  return function (b, S) {
    if (arguments.length > 0) {
      const $ = S ? o(N) : a && l ? Dt(b) : b;
      return g(N, $), (C = !0), u !== void 0 && (u = $), b;
    }
    return (mt && C) || (q.f & vn) !== 0 ? N.v : o(N);
  };
}
function Qn(e) {
  re === null && Yn(),
    Ft && re.l !== null
      ? Ra(re).m.push(e)
      : Dn(() => {
          const n = p(e);
          if (typeof n == "function") return n;
        });
}
function Ma(e) {
  re === null && Yn(), Qn(() => () => p(e));
}
function Ia(e, n, { bubbles: t = !1, cancelable: r = !1 } = {}) {
  return new CustomEvent(e, { detail: n, bubbles: t, cancelable: r });
}
function lr() {
  const e = re;
  return (
    e === null && Yn(),
    (n, t, r) => {
      var l;
      const a = (l = e.s.$$events) == null ? void 0 : l[n];
      if (a) {
        const s = Rt(a) ? a.slice() : [a],
          u = Ia(n, t, r);
        for (const d of s) d.call(e.x, u);
        return !u.defaultPrevented;
      }
      return !0;
    }
  );
}
function Ra(e) {
  var n = e.l;
  return n.u ?? (n.u = { a: [], b: [], m: [] });
}
const $a = "5";
var No;
typeof window < "u" &&
  (
    (No = window.__svelte ?? (window.__svelte = {})).v ?? (No.v = new Set())
  ).add($a);
Tr();
const Gt = {
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
    insertSnippet: "Вставить шаблон",
    snippets: { form: "Форма", div: "Карточка", nav: "Навигация" },
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
    insertSnippet: "Insert Snippet",
    snippets: { form: "Form", div: "Card", nav: "Navbar" },
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
var Fa = F(
    '<button type="button" tabindex="-1" class="svelte-dy1h3h"> </button>'
  ),
  za = F(
    '<button type="button" tabindex="-1" disabled style="opacity:0;pointer-events:none;" class="svelte-dy1h3h">•</button>'
  ),
  Ja = F(
    '<li class="tree-node svelte-dy1h3h"><div role="treeitem" tabindex="0"><!> <span class="node-name svelte-dy1h3h"> </span></div> <!></li>'
  ),
  ja = F(
    '<div class="tree-scroll svelte-dy1h3h"><ul class="tree-list svelte-dy1h3h"></ul></div>'
  );
function In(e, n) {
  Qe(n, !1);
  const t = W();
  let r = G(n, "data", 24, () => []),
    a = G(n, "selectedId", 12),
    l = G(n, "expandedNodes", 24, () => new Set()),
    s = localStorage.getItem("lang") || "ru";
  const u = lr();
  function d(v, f) {
    f.stopPropagation(), u("toggleExpand", v);
  }
  function c(v) {
    a(v), u("select", v);
  }
  function k(v, f) {
    (v.key === "Enter" || v.key === " ") && (v.preventDefault(), c(f));
  }
  Ee(
    () => Gt,
    () => {
      g(t, Gt[s]);
    }
  ),
    en(),
    xt();
  var x = ja(),
    y = m(x);
  yt(
    y,
    5,
    r,
    (v) => v.id,
    (v, f) => {
      var O = Ja(),
        C = m(O);
      let N;
      var q = m(C);
      {
        var R = (V) => {
            var L = Fa(),
              B = m(L);
            U(
              (T, H) => {
                z(L, "aria-label", T), j(B, H);
              },
              [
                () => (
                  Y(l()),
                  o(f),
                  o(t),
                  p(() =>
                    l().has(o(f).id)
                      ? o(t).sections.tree + " - " + o(t).contextMenu.undo
                      : o(t).sections.tree + " - " + o(t).contextMenu.redo
                  )
                ),
                () => (Y(l()), o(f), p(() => (l().has(o(f).id) ? "▼" : "▶"))),
              ],
              ge
            ),
              M(
                "click",
                L,
                Et((T) => d(o(f).id, T))
              ),
              D(V, L);
          },
          b = (V) => {
            var L = za();
            D(V, L);
          };
        oe(q, (V) => {
          o(f),
            p(() => o(f).children && o(f).children.length > 0)
              ? V(R)
              : V(b, !1);
        });
      }
      var S = E(q, 2),
        $ = m(S),
        w = E(C, 2);
      {
        var P = (V) => {
          In(V, {
            get data() {
              return o(f), p(() => o(f).children);
            },
            get expandedNodes() {
              return l();
            },
            get selectedId() {
              return a();
            },
            set selectedId(L) {
              a(L);
            },
            $$events: {
              toggleExpand(L) {
                xo.call(this, n, L);
              },
              select(L) {
                xo.call(this, n, L);
              },
            },
            $$legacy: !0,
          });
        };
        oe(w, (V) => {
          o(f),
            Y(l()),
            p(
              () =>
                o(f).children && o(f).children.length > 0 && l().has(o(f).id)
            ) && V(P);
        });
      }
      U(
        (V, L) => {
          (N = ze(C, 1, "treeitem svelte-dy1h3h", null, N, V)),
            z(C, "aria-selected", (o(f), Y(a()), p(() => o(f).id === a()))),
            z(C, "aria-expanded", L),
            j($, (o(f), p(() => o(f).name)));
        },
        [
          () => ({ selected: o(f).id === a() }),
          () => (
            o(f),
            Y(l()),
            p(() =>
              o(f).children && o(f).children.length > 0
                ? l().has(o(f).id)
                : void 0
            )
          ),
        ],
        ge
      ),
        M("click", C, () => c(o(f).id)),
        M("keydown", C, (V) => k(V, o(f).id)),
        D(v, O);
    }
  ),
    D(e, x),
    et();
}
var Ua = F('<input type="text" autocomplete="off" class="svelte-1u41up8"/>'),
  Ba = F('<input type="checkbox" class="svelte-1u41up8"/>'),
  Ha = F("<option> </option>"),
  Ya = F('<select class="svelte-1u41up8"></select>'),
  Ka = F(
    '<div class="property-row svelte-1u41up8"><label class="svelte-1u41up8"> </label> <!></div>'
  ),
  Wa = F(
    '<div class="property-row textarea-row svelte-1u41up8"><label class="svelte-1u41up8"> </label> <textarea autocomplete="off" class="svelte-1u41up8"></textarea></div>'
  ),
  Xa = F(
    '<div class="property-row svelte-1u41up8"><label class="svelte-1u41up8"> </label> <input type="text" autocomplete="off" class="svelte-1u41up8"/></div>'
  ),
  Ga = F(
    '<details class="events-accordion svelte-1u41up8"><summary class="svelte-1u41up8"> </summary> <div class="event-props-list svelte-1u41up8"></div></details>'
  ),
  Za = F("<!> <!> <!>", 1),
  Qa = F('<div class="empty-hint svelte-1u41up8"> </div>'),
  el = F(
    '<div class="props svelte-1u41up8"><h2 class="svelte-1u41up8"> </h2> <!></div>'
  );
function bo(e, n) {
  Qe(n, !1);
  const t = W(),
    r = W(),
    a = W(),
    l = W();
  let s = G(n, "component", 12),
    u = G(n, "onUpdate", 8),
    d = G(n, "lang", 8, "ru");
  function c(C, N) {
    try {
      s((s().propsValues[C] = N), !0), u()(C, N);
    } catch (q) {
      console.error("Ошибка обновления свойства:", q);
    }
  }
  Ee(
    () => Y(d()),
    () => {
      g(t, Gt[d()]);
    }
  ),
    Ee(
      () => Y(s()),
      () => {
        var C, N;
        g(
          r,
          ((N = (C = s()) == null ? void 0 : C.props) == null
            ? void 0
            : N.filter((q) => q.type !== "textarea" && q.type !== "event")) ||
            []
        );
      }
    ),
    Ee(
      () => Y(s()),
      () => {
        var C, N;
        g(
          a,
          ((N = (C = s()) == null ? void 0 : C.props) == null
            ? void 0
            : N.filter((q) => q.type === "textarea")) || []
        );
      }
    ),
    Ee(
      () => Y(s()),
      () => {
        var C, N;
        g(
          l,
          ((N = (C = s()) == null ? void 0 : C.props) == null
            ? void 0
            : N.filter((q) => q.type === "event")) || []
        );
      }
    ),
    en(),
    xt();
  var k = el(),
    x = m(k),
    y = m(x),
    v = E(x, 2);
  {
    var f = (C) => {
        var N = Za(),
          q = ft(N);
        yt(
          q,
          1,
          () => o(r),
          qt,
          ($, w, P) => {
            var V = Ka(),
              L = m(V),
              B = m(L),
              T = E(L, 2);
            {
              var H = (ae) => {
                  var ne = Ua();
                  U(() => {
                    z(
                      ne,
                      "id",
                      (Y(s()),
                      o(w),
                      p(() => s().name + "-" + o(w).key + "-" + P))
                    ),
                      En(
                        ne,
                        (Y(s()), o(w), p(() => s().propsValues[o(w).key]))
                      );
                  }),
                    M("input", ne, (ce) => c(o(w).key, ce.target.value)),
                    D(ae, ne);
                },
                J = (ae, ne) => {
                  {
                    var ce = (Oe) => {
                        var be = Ba();
                        U(() => {
                          z(
                            be,
                            "id",
                            (Y(s()),
                            o(w),
                            p(() => s().name + "-" + o(w).key + "-" + P))
                          ),
                            Va(
                              be,
                              (Y(s()), o(w), p(() => s().propsValues[o(w).key]))
                            );
                        }),
                          M("change", be, (fe) =>
                            c(o(w).key, fe.target.checked)
                          ),
                          D(Oe, be);
                      },
                      Pe = (Oe, be) => {
                        {
                          var fe = (bt) => {
                            var Ve = Ya();
                            yt(
                              Ve,
                              5,
                              () => (o(w), p(() => o(w).options)),
                              qt,
                              (_t, wt) => {
                                var Ct = Ha(),
                                  on = m(Ct),
                                  zt = {};
                                U(() => {
                                  j(on, o(wt)),
                                    zt !== (zt = o(wt)) &&
                                      (Ct.value = (Ct.__value = o(wt)) ?? "");
                                }),
                                  D(_t, Ct);
                              }
                            );
                            var Vt;
                            Na(Ve),
                              U(() => {
                                z(
                                  Ve,
                                  "id",
                                  (Y(s()),
                                  o(w),
                                  p(() => s().name + "-" + o(w).key + "-" + P))
                                ),
                                  Vt !==
                                    (Vt =
                                      (Y(s()),
                                      o(w),
                                      p(() => s().propsValues[o(w).key]))) &&
                                    ((Ve.value =
                                      (Ve.__value =
                                        (Y(s()),
                                        o(w),
                                        p(() => s().propsValues[o(w).key]))) ??
                                      ""),
                                    ar(
                                      Ve,
                                      (Y(s()),
                                      o(w),
                                      p(() => s().propsValues[o(w).key]))
                                    ));
                              }),
                              M("change", Ve, (_t) =>
                                c(o(w).key, _t.target.value)
                              ),
                              D(bt, Ve);
                          };
                          oe(
                            Oe,
                            (bt) => {
                              o(w), p(() => o(w).type === "select") && bt(fe);
                            },
                            be
                          );
                        }
                      };
                    oe(
                      ae,
                      (Oe) => {
                        o(w),
                          p(() => o(w).type === "checkbox")
                            ? Oe(ce)
                            : Oe(Pe, !1);
                      },
                      ne
                    );
                  }
                };
              oe(T, (ae) => {
                o(w), p(() => o(w).type === "text") ? ae(H) : ae(J, !1);
              });
            }
            U(() => {
              z(
                L,
                "for",
                (Y(s()), o(w), p(() => s().name + "-" + o(w).key + "-" + P))
              ),
                j(B, `${(o(w), p(() => o(w).key) ?? "")}:`);
            }),
              D($, V);
          }
        );
        var R = E(q, 2);
        yt(
          R,
          1,
          () => o(a),
          qt,
          ($, w, P) => {
            var V = Wa(),
              L = m(V),
              B = m(L),
              T = E(L, 2);
            U(() => {
              z(
                L,
                "for",
                (Y(s()), o(w), p(() => s().name + "-" + o(w).key + "-" + P))
              ),
                j(B, `${(o(w), p(() => o(w).key) ?? "")}:`),
                z(
                  T,
                  "id",
                  (Y(s()), o(w), p(() => s().name + "-" + o(w).key + "-" + P))
                ),
                En(T, (Y(s()), o(w), p(() => s().propsValues[o(w).key])));
            }),
              M("input", T, (H) => c(o(w).key, H.target.value)),
              D($, V);
          }
        );
        var b = E(R, 2);
        {
          var S = ($) => {
            var w = Ga(),
              P = m(w),
              V = m(P),
              L = E(P, 2);
            yt(
              L,
              5,
              () => o(l),
              qt,
              (B, T, H) => {
                var J = Xa(),
                  ae = m(J),
                  ne = m(ae),
                  ce = E(ae, 2);
                U(() => {
                  z(
                    ae,
                    "for",
                    (Y(s()),
                    o(T),
                    p(() => s().name + "-event-" + o(T).key + "-" + H))
                  ),
                    j(ne, `${(o(T), p(() => o(T).key) ?? "")}:`),
                    z(
                      ce,
                      "id",
                      (Y(s()),
                      o(T),
                      p(() => s().name + "-event-" + o(T).key + "-" + H))
                    ),
                    En(
                      ce,
                      (Y(s()), o(T), p(() => s().propsValues[o(T).key] || ""))
                    );
                }),
                  M("input", ce, (Pe) => c(o(T).key, Pe.target.value)),
                  D(B, J);
              }
            ),
              U(
                (B) => j(V, B),
                [
                  () => (
                    o(t),
                    o(l),
                    p(() =>
                      o(t).properties.events.replace("{count}", o(l).length)
                    )
                  ),
                ],
                ge
              ),
              D($, w);
          };
          oe(b, ($) => {
            o(l), p(() => o(l).length > 0) && $(S);
          });
        }
        D(C, N);
      },
      O = (C) => {
        var N = Qa(),
          q = m(N);
        U(() => j(q, (o(t), p(() => o(t).properties.noProps)))), D(C, N);
      };
    oe(v, (C) => {
      Y(s()),
        p(() => {
          var N, q;
          return (
            ((q = (N = s()) == null ? void 0 : N.props) == null
              ? void 0
              : q.length) > 0
          );
        })
          ? C(f)
          : C(O, !1);
    });
  }
  U(
    (C) => j(y, C),
    [
      () => (
        o(t),
        Y(s()),
        p(() => {
          var C;
          return o(t).properties.title.replace(
            "{name}",
            ((C = s()) == null ? void 0 : C.name) || ""
          );
        })
      ),
    ],
    ge
  ),
    D(e, k),
    et();
}
const tl = [
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
  _o = [
    { key: "ondrag", type: "event" },
    { key: "ondragend", type: "event" },
    { key: "ondragenter", type: "event" },
    { key: "ondragleave", type: "event" },
    { key: "ondragover", type: "event" },
    { key: "ondragstart", type: "event" },
    { key: "ondrop", type: "event" },
  ],
  wo = [
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
  Bt = [
    { key: "onchange", type: "event" },
    { key: "oninput", type: "event" },
    { key: "oninvalid", type: "event" },
    { key: "onreset", type: "event" },
    { key: "onsearch", type: "event" },
    { key: "onselect", type: "event" },
    { key: "onsubmit", type: "event" },
  ],
  nl = [
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
  return nl.includes(e.name)
    ? { ...e, props: [...e.props] }
    : { ...e, props: [...e.props, ...tl, ...n] };
}
const ol = [
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
  rl = [
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
      _o
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
      Bt
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
      _o
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
      Bt
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
      Bt
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
      Bt
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
      Bt
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
      wo
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
      wo
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
  Fe = [...ol, ...rl];
var al = F('<div class="error-message svelte-1cm7jwx"> </div>'),
  ll =
    F(`<div class="code-viewer svelte-1cm7jwx"><div class="header svelte-1cm7jwx"><div class="copy-button svelte-1cm7jwx"><button> </button> <button class="svelte-1cm7jwx">Preview</button></div> <!></div> <div class="code-container svelte-1cm7jwx"><pre class="wrap-lines svelte-1cm7jwx">
      <code class="language-html svelte-1cm7jwx"><!></code>
    </pre></div></div>`);
function Co(e, n) {
  Qe(n, !1);
  const t = W(),
    r = W();
  let a = G(n, "components", 24, () => []),
    l = W(!1),
    s = W("");
  (Fe || []).map((P) => (P == null ? void 0 : P.name)).filter(Boolean);
  function u(P, V = "  ", L = 0) {
    try {
      return Array.isArray(P)
        ? P.map((B) => {
            var ce, Pe, Oe;
            if (!(B != null && B.name)) return "";
            const T = Object.entries(B.propsValues || {})
                .filter(([be, fe]) =>
                  be === "children" || be === "text"
                    ? !1
                    : typeof fe == "boolean"
                    ? fe
                    : typeof fe == "number"
                    ? !0
                    : typeof fe == "string"
                    ? fe.trim() !== ""
                    : !1
                )
                .map(([be, fe]) =>
                  typeof fe == "boolean"
                    ? be
                    : `${be}="${String(fe).replace(/"/g, "&quot;")}"`
                )
                .join(" "),
              H = V.repeat(L),
              J = B.name || "div",
              ae = [
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
            if (!((ce = B.children) != null && ce.length) && ae.includes(J))
              return `${H}<${J}${T ? " " + T : ""} />`;
            let ne = "";
            return (
              typeof ((Pe = B.propsValues) == null ? void 0 : Pe.text) ==
                "string" &&
                B.propsValues.text.trim() !== "" &&
                (ne += B.propsValues.text),
              (Oe = B.children) != null &&
                Oe.length &&
                (ne += `
${u(B.children, V, L + 1)}
${H}`),
              `${H}<${J}${T ? " " + T : ""}>${ne}</${J}>`
            );
          }).join(`
`)
        : "";
    } catch (B) {
      return (
        console.error("Ошибка генерации кода:", B),
        g(s, "Ошибка при генерации HTML."),
        ""
      );
    }
  }
  function d(P) {
    try {
      return P
        ? ((P = P.replace(
            /&lt;!--(.*?)--&gt;/g,
            '&lt;!--<span style="color: #6a737d; font-style: italic;">$1</span>--&gt;'
          )),
          (P = P.replace(
            /(&lt;\/?)([a-zA-Z0-9\-]+)(.*?)(&gt;)/g,
            (V, L, B, T, H) => {
              let J = T.replace(
                /([a-zA-Z\-]+)=(&quot;.*?&quot;)/g,
                '<span style="color: #6f42c1;">$1</span>=<span style="color: #032f62;">$2</span>'
              );
              return `${L}<span style="color: #d73a49; font-weight: 600;">${B}</span>${J}${H}`;
            }
          )),
          P)
        : "";
    } catch (V) {
      return console.error("Ошибка подсветки:", V), P || "";
    }
  }
  function c() {
    try {
      const P = document.querySelector(".code-container pre");
      if (!P) return;
      const V = window.getSelection(),
        L = document.createRange();
      L.selectNodeContents(P),
        V.removeAllRanges(),
        V.addRange(L),
        document.execCommand("copy"),
        g(l, !0),
        setTimeout(() => g(l, !1), 2e3),
        V.removeAllRanges();
    } catch (P) {
      console.error("Ошибка копирования:", P),
        g(s, "Не удалось скопировать код.");
    }
  }
  function k() {
    try {
      const P = `<!DOCTYPE html>
${u(a())}`,
        V = new Blob([P], { type: "text/html" }),
        L = URL.createObjectURL(V);
      window.open(L, "_blank");
    } catch (P) {
      console.error("Ошибка предпросмотра:", P),
        g(s, "Не удалось открыть предпросмотр.");
    }
  }
  Ee(
    () => Y(a()),
    () => {
      g(
        t,
        Array.isArray(a()) && a().length
          ? `<!-- Generated HTML -->
${u(a())}`
          : "<!-- Add components -->"
      );
    }
  ),
    Ee(
      () => o(t),
      () => {
        var P, V;
        g(
          r,
          d(
            ((V = (P = o(t)) == null ? void 0 : P.replace(/</g, "&lt;")) == null
              ? void 0
              : V.replace(/>/g, "&gt;")) || ""
          )
        );
      }
    ),
    en(),
    xt();
  var x = ll(),
    y = m(x),
    v = m(y),
    f = m(v);
  let O;
  var C = m(f),
    N = E(f, 2),
    q = E(v, 2);
  {
    var R = (P) => {
      var V = al(),
        L = m(V);
      U(() => j(L, o(s))), D(P, V);
    };
    oe(q, (P) => {
      o(s) && P(R);
    });
  }
  var b = E(y, 2),
    S = m(b),
    $ = E(m(S)),
    w = m($);
  Ca(w, () => o(r)),
    U(
      (P) => {
        (O = ze(f, 1, "svelte-1cm7jwx", null, O, P)),
          j(C, o(l) ? "Copied!" : "Copy");
      },
      [() => ({ copied: o(l) })],
      ge
    ),
    M("click", f, c),
    M("click", N, k),
    D(e, x),
    et();
}
var sl = F('<button class="clear-btn svelte-18wh8bp">✕</button>'),
  il = F(
    '<div role="option" tabindex="-1"><span class="element-name svelte-18wh8bp"> </span> <span class="element-category svelte-18wh8bp"> </span></div>'
  ),
  ul = F(
    '<div id="dropdown-list" class="dropdown svelte-18wh8bp" role="listbox"></div>'
  ),
  dl = F(
    '<div class="search-container svelte-18wh8bp"><div class="input-container svelte-18wh8bp"><input type="text" aria-controls="dropdown-list" class="svelte-18wh8bp"/> <!></div> <!></div>'
  );
function Eo(e, n) {
  Qe(n, !1);
  const t = W(),
    r = W();
  let a = G(n, "lang", 8, "ru"),
    l = G(n, "selectedElement", 12),
    s = G(n, "searchQuery", 12, ""),
    u = W(!1),
    d = W(-1);
  function c(b) {
    l(b), s(b.name), g(u, !1), g(d, -1);
  }
  function k() {
    s(""), l(null), g(u, !1);
  }
  function x(b) {
    const S = Fe.find(
      ($) => $.name.toLowerCase() === b.target.value.toLowerCase()
    );
    l(S || null);
  }
  function y(b) {
    ["ArrowDown", "ArrowUp", "Enter", "Escape"].includes(b.key) &&
      (b.preventDefault(),
      b.key === "ArrowDown"
        ? g(d, Math.min(o(d) + 1, o(r).length - 1))
        : b.key === "ArrowUp"
        ? g(d, Math.max(o(d) - 1, -1))
        : b.key === "Enter" && o(d) >= 0
        ? c(o(r)[o(d)])
        : b.key === "Escape" && k());
  }
  Ee(
    () => Y(a()),
    () => {
      g(t, Gt[a()]);
    }
  ),
    Ee(
      () => (Y(s()), Fe),
      () => {
        g(
          r,
          s()
            ? Fe.filter(
                (b) =>
                  b.name.toLowerCase().includes(s().toLowerCase()) ||
                  b.category.toLowerCase().includes(s().toLowerCase())
              )
            : Fe
        );
      }
    ),
    Ee(
      () => Y(s()),
      () => {
        const b = Fe.find((S) => S.name.toLowerCase() === s().toLowerCase());
        l(b || null);
      }
    ),
    en(),
    xt();
  var v = dl(),
    f = m(v),
    O = m(f),
    C = E(O, 2);
  {
    var N = (b) => {
      var S = sl();
      U(() => z(S, "aria-label", (o(t), p(() => o(t).search.clear)))),
        M("click", S, k),
        D(b, S);
    };
    oe(C, (b) => {
      s() && b(N);
    });
  }
  var q = E(f, 2);
  {
    var R = (b) => {
      var S = ul();
      yt(
        S,
        7,
        () => o(r),
        ($) => $.name,
        ($, w, P) => {
          var V = il();
          let L;
          var B = m(V),
            T = m(B),
            H = E(B, 2),
            J = m(H);
          U(
            (ae) => {
              z(
                V,
                "aria-selected",
                (Y(l()),
                o(w),
                p(() => {
                  var ne;
                  return ((ne = l()) == null ? void 0 : ne.name) === o(w).name;
                }))
              ),
                (L = ze(V, 1, "dropdown-item svelte-18wh8bp", null, L, ae)),
                j(T, (o(w), p(() => o(w).name))),
                j(J, (o(w), p(() => o(w).category)));
            },
            [() => ({ focused: o(d) === o(P) })],
            ge
          ),
            M("mousedown", V, () => c(o(w))),
            M("mouseenter", V, () => g(d, o(P))),
            D($, V);
        }
      ),
        U(() => z(S, "aria-label", (o(t), p(() => o(t).search.aria)))),
        D(b, S);
    };
    oe(q, (b) => {
      o(u), o(r), p(() => o(u) && o(r).length > 0) && b(R);
    });
  }
  U(() => {
    z(O, "placeholder", (o(t), p(() => o(t).search.placeholder))),
      z(O, "aria-label", (o(t), p(() => o(t).search.aria)));
  }),
    Ta(O, s),
    M("focus", O, () => g(u, !0)),
    M("input", O, x),
    M("change", O, x),
    M("blur", O, () => setTimeout(() => g(u, !1), 200)),
    M("keydown", O, y),
    D(e, v),
    et();
}
var cl = F(
  '<h3 class="svelte-1jmx0sg"><button type="button" class="accordion-trigger svelte-1jmx0sg"><span class="accordion-title svelte-1jmx0sg"><span> </span> <span></span></span></button></h3> <div role="region" class="accordion-panel svelte-1jmx0sg"><!></div>',
  1
);
function Pn(e, n) {
  let t = G(n, "id", 8, ""),
    r = G(n, "title", 8, ""),
    a = G(n, "initiallyOpen", 8, !1),
    l = G(n, "disabled", 8, !1),
    s = W(a());
  var u = cl(),
    d = ft(u),
    c = m(d),
    k = m(c),
    x = m(k),
    y = m(x),
    v = E(x, 2),
    f = E(d, 2),
    O = m(f);
  Ot(O, n, "default", {}, null),
    U(() => {
      z(c, "aria-expanded", o(s)),
        z(c, "aria-controls", "sect-" + t()),
        z(c, "id", "accordion-" + t()),
        (c.disabled = l()),
        j(y, r()),
        ze(v, 1, `accordion-icon ${o(s) ? "open" : ""}`, "svelte-1jmx0sg"),
        z(f, "id", "sect-" + t()),
        z(f, "aria-labelledby", "accordion-" + t()),
        (f.hidden = !o(s));
    }),
    M("click", c, () => !l() && g(s, !o(s))),
    D(e, u);
}
var fl = F(
  '<div><div class="panel svelte-k7u067"><!></div> <div></div> <div class="panel svelte-k7u067"><!></div></div>'
);
function So(e, n) {
  Qe(n, !1);
  let t = G(n, "direction", 8, "horizontal"),
    r = G(n, "initialSize", 8, 30),
    a = G(n, "dividerSize", 8, 4),
    l = G(n, "minSize", 8, 10),
    s = G(n, "maxSize", 8, 90),
    u = W(r()),
    d = !1,
    c = 0,
    k = 0,
    x = 0;
  function y() {
    const $ = document.querySelector(".splitter");
    return t() === "horizontal" ? $.offsetWidth : $.offsetHeight;
  }
  function v($) {
    (d = !0),
      (c = o(u)),
      (k = t() === "horizontal" ? $.clientX : $.clientY),
      (x = y()),
      document.addEventListener("pointermove", f),
      document.addEventListener("pointerup", O),
      document.addEventListener("pointercancel", O),
      $.preventDefault(),
      $.stopPropagation();
  }
  function f($) {
    if (!d) return;
    const V = (((t() === "horizontal" ? $.clientX : $.clientY) - k) / x) * 100,
      L = c + V;
    g(u, Math.max(l(), Math.min(s(), L))),
      $.preventDefault(),
      $.stopPropagation();
  }
  function O() {
    (d = !1),
      document.removeEventListener("pointermove", f),
      document.removeEventListener("pointerup", O),
      document.removeEventListener("pointercancel", O);
  }
  Qn(() => {
    const $ = () => {
      x = y();
    };
    return (
      window.addEventListener("resize", $),
      () => {
        window.removeEventListener("resize", $);
      }
    );
  }),
    xt();
  var C = fl(),
    N = m(C),
    q = m(N);
  Ot(q, n, "first", {}, null);
  var R = E(N, 2),
    b = E(R, 2),
    S = m(b);
  Ot(S, n, "second", {}, null),
    U(() => {
      ze(C, 1, `splitter ${t() ?? ""}`, "svelte-k7u067"),
        rr(
          C,
          `
    --first-panel-size: ${o(u) ?? ""}%;
    --divider-size: ${a() ?? ""}px
  `
        ),
        ze(R, 1, `divider ${t() ?? ""}`, "svelte-k7u067");
    }),
    M("pointerdown", R, v),
    D(e, C),
    et();
}
var pl = F(
    '<div class="menu-overlay svelte-1h8rhok" role="button" aria-label="Закрыть меню" tabindex="0"></div>'
  ),
  yl = F('<div class="author svelte-1h8rhok"> </div>'),
  vl = F('<p class="version svelte-1h8rhok"> </p>'),
  ml = F('<div role="menuitem" tabindex="0"> </div>'),
  hl = F('<div class="footer-text svelte-1h8rhok"> </div>'),
  kl = F(
    '<button aria-label="Toggle menu" type="button"><span class="svelte-1h8rhok"></span> <span class="svelte-1h8rhok"></span> <span class="svelte-1h8rhok"></span></button> <!> <aside><header class="menu-header svelte-1h8rhok"><h2 class="svelte-1h8rhok"> </h2> <!> <!></header> <nav class="menu-items svelte-1h8rhok"></nav> <footer class="menu-footer svelte-1h8rhok"><div class="footer-slot svelte-1h8rhok"><!></div> <!></footer></aside>',
    1
  );
function gl(e, n) {
  Qe(n, !1);
  let t = G(n, "menuItems", 24, () => []),
    r = G(n, "activeItem", 12, ""),
    a = G(n, "headerContent", 24, () => ({ title: "", version: "" })),
    l = G(n, "footerContent", 24, () => ({ text: "" })),
    s = W(!1);
  const u = lr();
  function d() {
    g(s, !o(s));
  }
  function c(T) {
    r(T), u("select", T), g(s, !1);
  }
  xt();
  var k = kl(),
    x = ft(k),
    y = E(x, 2);
  {
    var v = (T) => {
      var H = pl();
      M("click", H, ko(d)),
        M(
          "keydown",
          H,
          ko((J) => {
            (J.key === "Enter" || J.key === " ") && d();
          })
        ),
        D(T, H);
    };
    oe(y, (T) => {
      o(s) && T(v);
    });
  }
  var f = E(y, 2),
    O = m(f),
    C = m(O),
    N = m(C),
    q = E(C, 2);
  {
    var R = (T) => {
      var H = yl(),
        J = m(H);
      U(() => j(J, (Y(a()), p(() => a().author)))), D(T, H);
    };
    oe(q, (T) => {
      Y(a()), p(() => a().author) && T(R);
    });
  }
  var b = E(q, 2);
  {
    var S = (T) => {
      var H = vl(),
        J = m(H);
      U(() => j(J, `v${(Y(a()), p(() => a().version) ?? "")}`)), D(T, H);
    };
    oe(b, (T) => {
      Y(a()), p(() => a().version) && T(S);
    });
  }
  var $ = E(O, 2);
  yt($, 5, t, qt, (T, H) => {
    var J = ml(),
      ae = m(J);
    U(() => {
      ze(
        J,
        1,
        `menu-item ${
          (Y(r()), o(H), p(() => (r() === o(H).id ? "active" : "")) ?? "")
        }`,
        "svelte-1h8rhok"
      ),
        j(ae, (o(H), p(() => o(H).label)));
    }),
      M("click", J, () => c(o(H).id)),
      M("keydown", J, (ne) => {
        (ne.key === "Enter" || ne.key === " ") && c(o(H).id);
      }),
      D(T, J);
  });
  var w = E($, 2),
    P = m(w),
    V = m(P);
  Ot(V, n, "footer", {}, null);
  var L = E(P, 2);
  {
    var B = (T) => {
      var H = hl(),
        J = m(H);
      U(() => j(J, (Y(l()), p(() => l().text)))), D(T, H);
    };
    oe(L, (T) => {
      Y(l()), p(() => l().text) && T(B);
    });
  }
  U(() => {
    ze(x, 1, `hamburger ${o(s) ? "open" : ""}`, "svelte-1h8rhok"),
      ze(f, 1, `menu ${o(s) ? "open" : ""}`, "svelte-1h8rhok"),
      j(N, (Y(a()), p(() => a().title)));
  }),
    M("click", x, d),
    D(e, k),
    et();
}
var xl = F('<span class="switcher-label svelte-fpyfi3"> </span>'),
  bl = F('<span class="switcher-label svelte-fpyfi3"> </span>'),
  _l = F('<div class="switcher-main-label svelte-fpyfi3"> </div>'),
  wl = F(
    '<div class="switcher-row svelte-fpyfi3"><!> <div class="switcher svelte-fpyfi3" role="checkbox" tabindex="0"><div></div> <div></div> <input type="checkbox" class="sr-only svelte-fpyfi3" tabindex="-1" aria-hidden="true" readonly=""/></div> <!></div> <!>',
    1
  );
function On(e, n) {
  Qe(n, !1);
  let t = G(n, "checked", 12, !1),
    r = G(n, "labelLeft", 8, ""),
    a = G(n, "labelRight", 8, ""),
    l = G(n, "label", 8, ""),
    s = G(n, "onToggle", 8, () => {});
  function u() {
    s()();
  }
  function d(S) {
    (S.key === " " || S.key === "Enter") && (S.preventDefault(), u());
  }
  xt();
  var c = wl(),
    k = ft(c),
    x = m(k);
  {
    var y = (S) => {
      var $ = xl(),
        w = m($);
      U(() => j(w, r())), D(S, $);
    };
    oe(x, (S) => {
      r() && S(y);
    });
  }
  var v = E(x, 2),
    f = m(v),
    O = E(f, 2),
    C = E(O, 2),
    N = E(v, 2);
  {
    var q = (S) => {
      var $ = bl(),
        w = m($);
      U(() => j(w, a())), D(S, $);
    };
    oe(N, (S) => {
      a() && S(q);
    });
  }
  var R = E(k, 2);
  {
    var b = (S) => {
      var $ = _l(),
        w = m($);
      U(() => j(w, l())), D(S, $);
    };
    oe(R, (S) => {
      l() && S(b);
    });
  }
  U(() => {
    z(v, "aria-checked", t()),
      ze(f, 1, `switcher-track${t() ? " checked" : ""}`, "svelte-fpyfi3"),
      ze(O, 1, `switcher-thumb${t() ? " checked" : ""}`, "svelte-fpyfi3");
  }),
    Aa(C, t),
    M("click", v, u),
    M("keydown", v, d),
    D(e, c),
    et();
}
var Cl = F(
  '<header class="ui-topbar svelte-1cyznus"><div class="left svelte-1cyznus"><!></div> <div class="title svelte-1cyznus"><!></div> <div class="right svelte-1cyznus"><!></div></header>'
);
function El(e, n) {
  let t = G(n, "title", 8, "App");
  var r = Cl(),
    a = m(r),
    l = m(a);
  Ot(l, n, "left", {}, null);
  var s = E(a, 2),
    u = m(s);
  Ot(u, n, "default", {}, (k) => {
    var x = ma();
    U(() => j(x, t())), D(k, x);
  });
  var d = E(s, 2),
    c = m(d);
  Ot(c, n, "right", {}, null), D(e, r);
}
const Sl = JSON.parse(
    `[{"id":1752751499,"name":"html","category":"Документ","propsValues":{"lang":"ru"},"children":[{"id":1752751476,"name":"head","category":"Документ","propsValues":{},"children":[{"id":1752751473,"name":"meta","category":"Документ","propsValues":{"charset":"UTF-8","name":"","content":"","http-equiv":""},"children":[]},{"id":1752762377887,"name":"meta","category":"Мета","propsValues":{"name":"viewport","content":"width=device-width, initial-scale=1.0","charset":"","http-equiv":""},"children":[]},{"id":1752751474,"name":"title","category":"Документ","propsValues":{"text":"Форма регистрации"},"children":[]},{"id":1752751475,"name":"style","category":"Документ","propsValues":{"text":"\\n   :root {\\n      --primary-color: #4361ee;\\n      --primary-hover: #3a56d4;\\n      --error-color: #ef233c;\\n      --success-color: #2ec4b6;\\n      --text-color: #2b2d42;\\n      --light-gray: #f8f9fa;\\n      --border-color: #dee2e6;\\n      --shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\\n    }\\n\\n    * {\\n      box-sizing: border-box;\\n      margin: 0;\\n      padding: 0;\\n    }\\n\\n    html, body {\\n      height: 100%;\\n      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;\\n      color: var(--text-color);\\n      line-height: 1.6;\\n    }\\n\\n    body {\\n      display: flex;\\n      flex-direction: column;\\n      background-color: var(--light-gray);\\n    }\\n\\n    /* Header styles */\\n    header {\\n      background: var(--primary-color);\\n      color: white;\\n      padding: 1rem 2rem;\\n      box-shadow: var(--shadow);\\n      position: relative;\\n      z-index: 10;\\n    }\\n\\n    .header-container {\\n      display: flex;\\n      justify-content: space-between;\\n      align-items: center;\\n      max-width: 1200px;\\n      margin: 0 auto;\\n      width: 100%;\\n    }\\n\\n    .logo {\\n      font-size: 1.5rem;\\n      font-weight: 700;\\n    }\\n\\n    nav ul {\\n      display: flex;\\n      list-style: none;\\n    }\\n\\n    nav ul li {\\n      margin-left: 1.5rem;\\n    }\\n\\n    nav ul li a {\\n      color: white;\\n      text-decoration: none;\\n      font-weight: 500;\\n      transition: opacity 0.2s;\\n    }\\n\\n    nav ul li a:hover {\\n      opacity: 0.9;\\n      text-decoration: underline;\\n    }\\n\\n    /* Main content */\\n    .wrapper {\\n      flex: 1;\\n      padding: 2rem;\\n    }\\n\\n    .container {\\n      max-width: 800px;\\n      margin: 0 auto;\\n      width: 100%;\\n    }\\n\\n    /* Form styles */\\n    .form-card {\\n      background: white;\\n      border-radius: 4px;\\n      box-shadow: var(--shadow);\\n      padding: 2.5rem;\\n      margin: 2rem auto;\\n    }\\n\\n    .form-title {\\n      font-size: 1.8rem;\\n      margin-bottom: 1.5rem;\\n      color: var(--primary-color);\\n      text-align: center;\\n    }\\n\\n    .form-group {\\n      margin-bottom: 1.5rem;\\n      position: relative;\\n    }\\n\\n    .form-group label {\\n      display: block;\\n      margin-bottom: 0.5rem;\\n      font-weight: 600;\\n      color: var(--text-color);\\n    }\\n\\n    .form-control {\\n      width: 100%;\\n      padding: 0.75rem 1rem;\\n      font-size: 1rem;\\n      border: 1px solid var(--border-color);\\n      border-radius: 4px;\\n      transition: border-color 0.3s, box-shadow 0.3s;\\n    }\\n\\n    .form-control:focus {\\n      outline: none;\\n      border-color: var(--primary-color);\\n      box-shadow: 0 0 0 3px rgba(67, 97, 238, 0.2);\\n    }\\n\\n    .input-wrapper {\\n      position: relative;\\n    }\\n\\n    .clear-input {\\n      position: absolute;\\n      right: 10px;\\n      top: 50%;\\n      transform: translateY(-50%);\\n      background: none;\\n      border: none;\\n      color: #999;\\n      cursor: pointer;\\n      font-size: 1.5rem;\\n\\t  width: 2rem;\\n\\t  height: 2rem;\\n\\t  line-height: 1.5rem;\\n      display: none;\\n    }\\n\\t\\n\\t.clear-input:hover {\\n\\t  color: var(--primary-color);\\n\\t}\\n\\n    .form-control:not(:placeholder-shown) + .clear-input {\\n      display: block;\\n    }\\n\\n    .checkbox-group {\\n      display: flex;\\n      align-items: center;\\n    }\\n\\n\\t.checkbox-group input[type=\\"checkbox\\"] {\\n\\t  width: 20px;\\n\\t  height: 20px;\\n\\t  margin-right: 0.75rem;\\n\\t  cursor: pointer;\\n\\t}\\n\\n    .error-message {\\n      color: var(--error-color);\\n      font-size: 0.875rem;\\n      margin-top: 0.25rem;\\n      display: none;\\n    }\\n\\n    .form-control.error {\\n      border-color: var(--error-color);\\n    }\\n\\n    .form-control.valid {\\n      border-color: var(--success-color);\\n    }\\n\\n    .btn {\\n      display: inline-block;\\n      background: var(--primary-color);\\n      color: white;\\n      border: none;\\n      padding: 0.75rem 1.5rem;\\n      font-size: 1rem;\\n      border-radius: 8px;\\n      cursor: pointer;\\n      transition: background-color 0.3s;\\n      font-weight: 500;\\n    }\\n\\n    .btn:hover {\\n      background: var(--primary-hover);\\n    }\\n\\n    .btn-block {\\n      display: block;\\n      width: 100%;\\n    }\\n\\t\\n\\t.btn[type=\\"submit\\"] {\\n\\t  width: 240px;\\n\\t  display: block;\\n\\t  margin: 0 auto;\\n\\t}\\n\\n    /* Footer styles */\\n    footer {\\n      background: var(--text-color);\\n      color: white;\\n      text-align: center;\\n      padding: 1.5rem;\\n      margin-top: auto;\\n    }\\n\\n    /* Dialog styles */\\n    dialog {\\n      border: none;\\n      border-radius: 4px;\\n      padding: 2rem;\\n      box-shadow: var(--shadow);\\n      max-width: 500px;\\n      width: 90%;\\n    }\\n\\n    dialog::backdrop {\\n      background-color: rgba(0, 0, 0, 0.5);\\n    }\\n\\n    .dialog-content {\\n      text-align: center;\\n    }\\n\\n    .dialog-actions {\\n      margin-top: 1.5rem;\\n      display: flex;\\n      justify-content: center;\\n      gap: 1rem;\\n    }\\n\\n    @media (max-width: 768px) {\\n      .header-container {\\n        flex-direction: column;\\n        text-align: center;\\n      }\\n\\n      nav ul {\\n        margin-top: 1rem;\\n      }\\n\\n      nav ul li {\\n        margin: 0 0.75rem;\\n      }\\n\\n      .form-card {\\n        padding: 1.5rem;\\n      }\\n    }\\n\\t\\n\\t@media (max-width: 480px) {\\n\\t  .btn[type=\\"submit\\"] {\\n\\t\\twidth: 100%;\\n\\t  }\\n\\t}","type":""},"children":[]}]},{"id":1752751498,"name":"body","category":"Документ","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751478,"name":"header","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762443332,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"header-container","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752762471648,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"logo","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[]},{"id":1752762519611,"name":"nav","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762536300,"name":"ul","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762553013,"name":"li","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","value":"","text":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762568359,"name":"a","category":"Текст","propsValues":{"href":"#","target":"","rel":"","text":"Главная","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752762690285,"name":"li","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","value":"","text":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762702590,"name":"a","category":"Текст","propsValues":{"href":"#","target":"","rel":"","text":"О нас","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752762695877,"name":"li","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","value":"","text":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752762716150,"name":"a","category":"Текст","propsValues":{"href":"#","target":"","rel":"","text":"Контакты","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]}]}]}]}]},{"id":1752762962931,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"wrapper","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751492,"name":"main","category":"Контейнеры","propsValues":{"class":"container","id":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752751491,"name":"form","category":"Формы","propsValues":{"method":"post","action":"#","id":"","class":"","style":"","autocomplete":"on","novalidate":false,"target":"","enctype":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":""},"children":[{"id":1752762995117,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-card","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752763073222,"name":"h1","category":"Текст","propsValues":{"id":"","class":"form-title","style":"","text":"Регистрация","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752763109696,"name":"form","category":"Контейнеры","propsValues":{"id":"registrationForm","class":"","style":"","method":"post","action":"#","autocomplete":"on","novalidate":true,"target":"","enctype":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":""},"children":[{"id":1752763164559,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751479,"name":"label","category":"Формы","propsValues":{"for":"name","text":"Имя:","form":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]},{"id":1752763203097,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"input-wrapper","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751480,"name":"input","category":"Формы","propsValues":{"type":"text","name":"name","placeholder":"Введите ваше имя","value":"","checked":false,"required":false,"readonly":false,"disabled":false,"min":"","max":"","step":"","pattern":"","autocomplete":"on","autofocus":false,"multiple":false,"size":"","maxlength":"","minlength":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"form-control","style":""},"children":[]},{"id":1752763333036,"name":"button","category":"Элементы формы","propsValues":{"type":"button","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","text":"&times;","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"clear-input","style":""},"children":[]}]},{"id":1752763839508,"name":"span","category":"Текст","propsValues":{"id":"","class":"error-message","style":"","text":"Пожалуйста, введите ваше имя","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752763540200,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751481,"name":"label","category":"Формы","propsValues":{"for":"email","text":"Email:","form":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]},{"id":1752763702688,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"input-wrapper","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751482,"name":"input","category":"Формы","propsValues":{"type":"email","name":"email","placeholder":"Введите ваш email","value":"","checked":false,"required":false,"readonly":false,"disabled":false,"min":"","max":"","step":"","pattern":"","autocomplete":"on","autofocus":false,"multiple":false,"size":"","maxlength":"","minlength":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"form-control","style":""},"children":[]},{"id":1752763723882,"name":"button","category":"Элементы формы","propsValues":{"type":"button","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","text":"&times;","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"clear-input","style":""},"children":[]}]},{"id":1752763872501,"name":"span","category":"Текст","propsValues":{"id":"","class":"error-message","style":"","text":"Пожалуйста, введите корректный email","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752763954407,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752751483,"name":"label","category":"Формы","propsValues":{"for":"gender","text":"Пол:","form":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]},{"id":1752751486,"name":"select","category":"Формы","propsValues":{"name":"gender","multiple":false,"required":false,"disabled":false,"autofocus":false,"size":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"form-control","style":""},"children":[{"id":1752751484,"name":"option","category":"Формы","propsValues":{"value":"male","text":"Мужской","selected":false,"disabled":false,"label":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752751485,"name":"option","category":"Формы","propsValues":{"value":"female","text":"Женский","selected":false,"disabled":false,"label":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]}]},{"id":1752764438309,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"form-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764481393,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"checkbox-group","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764467807,"name":"input","category":"Элементы формы","propsValues":{"type":"checkbox","name":"agree","value":"","placeholder":"","checked":false,"required":true,"readonly":false,"disabled":false,"min":"","max":"","step":"","pattern":"","autocomplete":"on","autofocus":false,"multiple":false,"size":"","maxlength":"","minlength":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"agree","class":"","style":""},"children":[]},{"id":1752751489,"name":"label","category":"Формы","propsValues":{"for":"agree","form":"","text":"Я согласен с условиями использования","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","id":"","class":"","style":""},"children":[]}]},{"id":1752767049438,"name":"span","category":"Текст","propsValues":{"id":"","class":"error-message","style":"","text":"Необходимо ваше согласие","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752751490,"name":"button","category":"Формы","propsValues":{"type":"submit","text":"Зарегистрироваться","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"","class":"btn btn-block","style":""},"children":[]}]}]}]}]}]},{"id":1752751494,"name":"footer","category":"Контейнеры","propsValues":{"id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[{"id":1752751493,"name":"p","category":"Текст","propsValues":{"text":"© 2025 Все права защищены","id":"","class":"","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]}]},{"id":1752764171611,"name":"dialog","category":"Контейнеры","propsValues":{"id":"successDialog","class":"","style":"","open":false,"onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onclose":"","oncancel":""},"children":[{"id":1752764197267,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"dialog-content","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764211737,"name":"h2","category":"Текст","propsValues":{"id":"","class":"","style":"","text":"Успешно!","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752764243554,"name":"p","category":"Текст","propsValues":{"id":"","class":"","style":"","text":"Ваша регистрация завершена.","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":""},"children":[]},{"id":1752764257283,"name":"div","category":"Контейнеры","propsValues":{"id":"","class":"dialog-actions","style":"","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","ondrag":"","ondragend":"","ondragenter":"","ondragleave":"","ondragover":"","ondragstart":"","ondrop":""},"children":[{"id":1752764288373,"name":"button","category":"Элементы формы","propsValues":{"type":"button","name":"","value":"","disabled":false,"autofocus":false,"form":"","formaction":"","formenctype":"","formmethod":"","formnovalidate":false,"formtarget":"","text":"Закрыть","onclick":"","ondblclick":"","onmousedown":"","onmouseup":"","onmouseover":"","onmousemove":"","onmouseout":"","onmouseenter":"","onmouseleave":"","oncontextmenu":"","onwheel":"","onkeydown":"","onkeypress":"","onkeyup":"","onfocus":"","onblur":"","onchange":"","oninput":"","oninvalid":"","onreset":"","onsearch":"","onselect":"","onsubmit":"","id":"closeDialog","class":"btn","style":""},"children":[]}]}]}]},{"id":1752764081218,"name":"script","category":"Скрипты","propsValues":{"src":"","type":"","async":false,"defer":false,"text":"\\n      document.addEventListener('DOMContentLoaded', function() {\\n      const form = document.getElementById('registrationForm');\\n      const successDialog = document.getElementById('successDialog');\\n      const closeDialogBtn = document.getElementById('closeDialog');\\n\\n      // Очистка полей ввода\\n      document.querySelectorAll('.clear-input').forEach(btn => {\\n        btn.addEventListener('click', function() {\\n          const input = this.previousElementSibling;\\n          input.value = '';\\n          input.focus();\\n          this.style.display = 'none';\\n          validateField(input);\\n        });\\n      });\\n\\n      // Валидация при вводе\\n      form.querySelectorAll('input, select').forEach(field => {\\n        field.addEventListener('input', function() {\\n          validateField(this);\\n        });\\n      });\\n\\n      // Отправка формы\\n      form.addEventListener('submit', function(e) {\\n        e.preventDefault();\\n        \\n        let isValid = true;\\n        form.querySelectorAll('input[required], select[required]').forEach(field => {\\n          if (!validateField(field)) {\\n            isValid = false;\\n          }\\n        });\\n\\n        if (isValid) {\\n          successDialog.showModal();\\n        }\\n      });\\n\\n      // Закрытие диалога\\n      closeDialogBtn.addEventListener('click', function() {\\n        successDialog.close();\\n      });\\n\\n      // Функция валидации поля\\n      function validateField(field) {\\n        const errorMessage = field.closest('.form-group').querySelector('.error-message');\\n        \\n        if (field.validity.valid) {\\n          field.classList.remove('error');\\n          field.classList.add('valid');\\n          errorMessage.style.display = 'none';\\n          return true;\\n        } else {\\n          field.classList.remove('valid');\\n          field.classList.add('error');\\n          errorMessage.style.display = 'block';\\n          \\n          if (field.validity.valueMissing) {\\n            errorMessage.textContent = 'Это поле обязательно для заполнения';\\n          } else if (field.type === 'email' && field.validity.typeMismatch) {\\n            errorMessage.textContent = 'Пожалуйста, введите корректный email';\\n          }\\n          \\n          return false;\\n        }\\n      }\\n\\n      // Показать/скрыть кнопку очистки\\n      form.querySelectorAll('.form-control').forEach(input => {\\n        input.addEventListener('input', function() {\\n          const clearBtn = this.nextElementSibling;\\n          clearBtn.style.display = this.value ? 'block' : 'none';\\n        });\\n      });\\n    });"},"children":[]}]}]}]`
  ),
  Nl = [
    {
      name: "div",
      category: "Контейнеры",
      propsValues: { class: "card" },
      children: [
        {
          name: "div",
          category: "Контейнеры",
          propsValues: { class: "card-header" },
          children: [
            {
              name: "h3",
              category: "Текст",
              propsValues: { text: "Заголовок" },
            },
          ],
        },
        {
          name: "div",
          category: "Контейнеры",
          propsValues: { class: "card-body" },
          children: [
            {
              name: "p",
              category: "Текст",
              propsValues: { text: "Содержимое карточки" },
            },
          ],
        },
      ],
    },
    {
      name: "form",
      category: "Формы",
      propsValues: { class: "form" },
      children: [
        {
          name: "div",
          category: "Контейнеры",
          propsValues: { class: "form-group" },
          children: [
            {
              name: "label",
              category: "Формы",
              propsValues: { for: "input1", text: "Поле ввода" },
            },
            {
              name: "input",
              category: "Формы",
              propsValues: {
                type: "text",
                id: "input1",
                class: "form-control",
              },
            },
          ],
        },
        {
          name: "button",
          category: "Формы",
          propsValues: { type: "submit", class: "btn", text: "Отправить" },
        },
      ],
    },
    {
      name: "nav",
      category: "Навигация",
      propsValues: { class: "navbar" },
      children: [
        {
          name: "div",
          category: "Контейнеры",
          propsValues: { class: "navbar-brand" },
          children: [
            {
              name: "a",
              category: "Навигация",
              propsValues: { href: "#", class: "navbar-item", text: "Логотип" },
            },
          ],
        },
        {
          name: "div",
          category: "Контейнеры",
          propsValues: { class: "navbar-menu" },
          children: [
            {
              name: "div",
              category: "Контейнеры",
              propsValues: { class: "navbar-start" },
              children: [
                {
                  name: "a",
                  category: "Навигация",
                  propsValues: {
                    href: "#",
                    class: "navbar-item",
                    text: "Главная",
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  ];
var Pl = F(
    '<div slot="footer" style="display: flex; flex-direction: column; gap: 12px;"><!> <!></div>'
  ),
  Ol = F('<div slot="left"><!></div>'),
  Vl = F('<div slot="right"><span style="opacity: 0.6;"> </span></div>'),
  Ll = F('<div role="tree" tabindex="0"><!></div>'),
  Tl = F('<p class="placeholder-text"> </p>'),
  Al = F('<p class="placeholder-text"> </p>'),
  Dl = F(
    '<!> <div class="searchbar-controls"><div class="searchinput-wrapper"><!></div> <div class="buttons-row"><button>➕</button> <button>➖</button> <button>⬆️</button> <button>⬇️</button> <button>⬅️</button> <button>➡️</button></div></div> <div class="main-content"><div class="accordion"><div class="accordion"><!> <!> <!></div></div></div>',
    1
  ),
  ql = F('<div role="tree" tabindex="0" style="height:100%;"><!></div>'),
  Ml = F('<p class="placeholder-text"> </p>'),
  Il = F('<div slot="first"><!></div>'),
  Rl = F('<p class="placeholder-text"> </p>'),
  $l = F('<div slot="second"><!></div>'),
  Fl = F('<div slot="second"><!></div>'),
  zl = F(
    '<header class="app-header"><h1> </h1></header> <div class="searchbar-controls"><div class="searchinput-wrapper"><!></div> <div class="buttons-row"><button>📂</button> <input type="file" accept=".json" style="display:none"/> <button>💾</button> <button>➕</button> <button>➖</button> <button>⬆️</button> <button>⬇️</button> <button>⬅️</button> <button>➡️</button> <button>❌</button></div></div> <div class="main-content"><!></div> <footer class="app-footer"><div class="footer-content"><div class="language-switcher"><!></div></div> <div class="copyright" style="margin-top:0.5em; text-align:center;"> </div></footer>',
    1
  ),
  Jl = F(
    '<button class="context-menu-btn" role="menuitem" tabindex="0"> </button>'
  ),
  jl = F('<div class="context-submenu" role="menu"></div>'),
  Ul = F(
    '<div class="context-menu"><button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <button class="context-menu-btn"><span> </span> <span class="hotkey"> </span></button> <div class="context-menu-divider"></div> <div class="context-menu-btn context-menu-submenu" role="menuitem" tabindex="0" aria-haspopup="true"><span> </span> <span class="submenu-arrow">⮞</span> <!></div></div>'
  ),
  Bl = F('<div class="app"><!> <!></div>');
function Hl(e, n) {
  Qe(n, !1);
  const t = W();
  let r = W(Lt(Sl)),
    a = W(null),
    l = W({ name: "div", category: "Контейнеры" }),
    s = W(null),
    u = W(new Set()),
    d = null,
    c = [],
    k = [],
    x = W(!1),
    y = W(0),
    v = W(0),
    f = W(!1),
    O = W("tree"),
    C = W(),
    N = W(localStorage.getItem("lang") || "ru"),
    q = W(localStorage.getItem("theme") === "dark"),
    R = "",
    b = W([]),
    S = W(!1);
  Ma(() => {
    document.removeEventListener("click", B);
  }),
    Qn(
      () => (
        (window.onerror = (i, h, A, I, K) => {
          console.error("Глобальная ошибка:", {
            message: i,
            source: h,
            lineno: A,
            colno: I,
            error: K,
          }),
            (R = `Ошибка: ${i}`);
        }),
        (window.onunhandledrejection = (i) => {
          console.error("Необработанное исключение:", i.reason),
            (R = `Ошибка: ${i.reason}`);
        }),
        o(q)
          ? document.body.classList.add("dark")
          : document.body.classList.add("light"),
        w(),
        window.addEventListener("resize", w),
        document.addEventListener("click", B),
        () => {
          window.removeEventListener("resize", w),
            document.removeEventListener("click", B);
        }
      )
    );
  function $(i) {
    const h = o(b).find((A) => A.id === i.detail);
    h == null || h.action();
  }
  function w() {
    try {
      g(f, window.innerWidth < 768);
    } catch (i) {
      console.error("Ошибка checkMobile:", i),
        (R = "Ошибка при проверке мобильного режима.");
    }
  }
  function P(i) {
    try {
      if (i.target.tagName === "INPUT" || i.target.tagName === "TEXTAREA")
        return;
      if (i.key === "Delete") {
        i.preventDefault(), bt();
        return;
      }
      if (i.ctrlKey || i.metaKey)
        switch (i.key.toLowerCase()) {
          case "n":
            i.preventDefault(), fe();
            break;
          case "o":
            i.preventDefault(), _n();
            break;
          case "s":
            i.preventDefault(), bn();
            break;
          case "z":
            i.preventDefault(), i.shiftKey ? ne() : ae();
            break;
          case "y":
            i.preventDefault(), ne();
            break;
          case "c":
            i.preventDefault(), ce();
            break;
          case "x":
            i.preventDefault(), Pe();
            break;
          case "v":
            i.preventDefault(), Oe();
            break;
          case "arrowup":
            Ve();
            break;
          case "arrowdown":
            Vt();
            break;
          case "arrowleft":
            wt();
            break;
          case "arrowright":
            _t();
            break;
        }
    } catch (h) {
      console.error("Ошибка handleKeyDown:", h),
        (R = "Ошибка обработки клавиатуры.");
    }
  }
  function V(i) {
    try {
      i.preventDefault(), g(y, i.clientX), g(v, i.clientY), g(x, !0);
    } catch (h) {
      console.error("Ошибка openContextMenu:", h);
    }
  }
  function L() {
    g(x, !1);
  }
  function B(i) {
    try {
      o(x) &&
        !i.target.closest(".context-menu") &&
        !i.target.closest("[on\\:contextmenu]") &&
        L();
    } catch (h) {
      console.error("Ошибка handleClickOutside:", h);
    }
  }
  function T() {
    try {
      g(N, o(N) === "ru" ? "en" : "ru"), localStorage.setItem("lang", o(N));
    } catch (i) {
      console.error("Ошибка toggleLang:", i);
    }
  }
  function H() {
    g(q, !o(q)),
      localStorage.setItem("theme", o(q) ? "dark" : "light"),
      document.body.classList.toggle("dark", o(q)),
      document.body.classList.toggle("light", !o(q));
  }
  function J() {
    try {
      c.push(JSON.stringify(o(r))), c.length > 100 && c.shift(), (k = []);
    } catch (i) {
      console.error("Ошибка saveHistory:", i);
    }
  }
  function ae() {
    try {
      if (c.length === 0) return;
      k.push(JSON.stringify(o(r))),
        g(r, Lt(JSON.parse(c.pop()))),
        g(a, null),
        L();
    } catch (i) {
      console.error("Ошибка undo:", i), (R = "Ошибка отмены действия.");
    }
  }
  function ne() {
    try {
      if (k.length === 0) return;
      c.push(JSON.stringify(o(r))),
        g(r, Lt(JSON.parse(k.pop()))),
        g(a, null),
        L();
    } catch (i) {
      console.error("Ошибка redo:", i), (R = "Ошибка повтора действия.");
    }
  }
  function ce() {
    try {
      if (!o(a)) return;
      (d = JSON.parse(JSON.stringify(nt(o(r), o(a))))), L();
    } catch (i) {
      console.error("Ошибка copyNode:", i);
    }
  }
  function Pe() {
    try {
      if (!o(a)) return;
      J();
      const i = qe(o(r), o(a));
      i &&
        ((d = JSON.parse(JSON.stringify(i.nodes[i.index]))),
        i.nodes.splice(i.index, 1),
        g(r, tt(o(r))),
        g(a, null),
        L());
    } catch (i) {
      console.error("Ошибка cutNode:", i);
    }
  }
  function Oe() {
    try {
      if (!d) return;
      J();
      const i = JSON.parse(JSON.stringify(d));
      if (((i.id = Date.now()), o(a))) {
        const h = nt(o(r), o(a));
        if (h && rn(h.name, i.name))
          (h.children = h.children || []), h.children.push(i);
        else {
          const A = qe(o(r), o(a));
          A && A.nodes.splice(A.index + 1, 0, i);
        }
      } else o(r).push(i);
      g(r, tt(o(r))), g(a, i.id), L();
    } catch (i) {
      console.error("Ошибка pasteNode:", i), (R = "Ошибка вставки элемента.");
    }
  }
  function be(i) {
    var h;
    try {
      if (o(a)) {
        const X = nt(o(r), o(a));
        if (X && !rn(X.name, i.name)) {
          R = `Нельзя вставить ${i.name} в ${X.name}`;
          return;
        }
      }
      const A = (X, ye) => {
          const ve = Fe.find((_e) => _e.name === X.name);
          if (!ve)
            throw (
              ((R = `Неизвестный элемент: ${X.name}`),
              new Error("Invalid element"))
            );
          if (ve.requiredParent && !ve.requiredParent.includes(ye))
            throw (
              ((R = `${X.name} требует родителя ${ve.requiredParent.join(
                " или "
              )}`),
              new Error("Nesting violation"))
            );
          X.children && X.children.forEach((_e) => A(_e, X.name));
        },
        I = o(a) ? ((h = nt(o(r), o(a))) == null ? void 0 : h.name) : null;
      A(i, I), J();
      const K = Lt([JSON.parse(JSON.stringify(i))])[0];
      K.id = Date.now();
      let Z = 1;
      const ie = (X) => {
        (X.id = Date.now() + Z++), X.children && X.children.forEach(ie);
      };
      if ((ie(K), o(a))) {
        const X = nt(o(r), o(a));
        if (X)
          (X.children = X.children || []),
            X.children.push(K),
            o(u).add(X.id),
            g(u, new Set(o(u)));
        else {
          const ye = qe(o(r), o(a));
          ye && ye.nodes.splice(ye.index + 1, 0, K);
        }
      } else o(r).push(K);
      g(r, [...o(r)]), g(a, K.id), L();
    } catch (A) {
      console.error("insertSnippet error:", A);
    }
  }
  function fe() {
    var i;
    try {
      if ((J(), !((i = o(l)) != null && i.name))) return;
      const h = Fe.find((I) => I.name === o(l).name);
      if (!h) return;
      const A = { ...h, id: Date.now(), propsValues: {}, children: [] };
      if (
        (h.props &&
          h.props.forEach((I) => {
            A.propsValues[I.key] =
              I.default !== void 0
                ? I.default
                : I.type === "checkbox"
                ? !1
                : "";
          }),
        !o(a))
      )
        g(r, [...o(r), A]);
      else {
        const I = nt(o(r), o(a));
        if (I && rn(I.name, A.name))
          I.children || (I.children = []), I.children.push(A);
        else {
          const K = qe(o(r), o(a));
          K && K.nodes.splice(K.index + 1, 0, A);
        }
      }
      g(a, A.id), g(r, [...o(r)]);
    } catch (h) {
      console.error("Ошибка addNode:", h), (R = "Не удалось добавить элемент.");
    }
  }
  function bt() {
    try {
      if ((J(), !o(a))) return;
      const i = qe(o(r), o(a));
      i && i.nodes.splice(i.index, 1), g(a, null), g(r, tt(o(r)));
    } catch (i) {
      console.error("Ошибка removeNode:", i),
        (R = "Не удалось удалить элемент.");
    }
  }
  function Ve() {
    try {
      if ((J(), !o(a))) return;
      const i = qe(o(r), o(a));
      if (i && i.index > 0) {
        const h = i.nodes;
        ([h[i.index - 1], h[i.index]] = [h[i.index], h[i.index - 1]]),
          g(r, tt(o(r)));
      }
    } catch (i) {
      console.error("Ошибка moveUp:", i);
    }
  }
  function Vt() {
    try {
      if ((J(), !o(a))) return;
      const i = qe(o(r), o(a));
      if (i && i.index < i.nodes.length - 1) {
        const h = i.nodes;
        ([h[i.index], h[i.index + 1]] = [h[i.index + 1], h[i.index]]),
          g(r, tt(o(r)));
      }
    } catch (i) {
      console.error("Ошибка moveDown:", i);
    }
  }
  function _t() {
    try {
      if ((J(), !o(a))) return;
      const i = qe(o(r), o(a));
      if (!i || i.index === 0) return;
      const h = i.nodes[i.index - 1];
      if (!rn(h.name, i.nodes[i.index].name)) {
        R = `Элемент <${i.nodes[i.index].name}> нельзя вложить в <${h.name}>`;
        return;
      }
      h.children || (h.children = []),
        h.children.push(i.nodes[i.index]),
        i.nodes.splice(i.index, 1),
        h.children.length === 1 && (o(u).add(h.id), g(u, new Set(o(u)))),
        g(r, tt(o(r)));
    } catch (i) {
      console.error("Ошибка moveIn:", i);
    }
  }
  function wt() {
    try {
      if ((J(), !o(a))) return;
      const i = qe(o(r), o(a));
      if (!i || !i.parent) return;
      const h = qe(o(r), i.parent.id);
      if (!h) return;
      h.nodes.splice(h.index + 1, 0, i.nodes[i.index]),
        i.nodes.splice(i.index, 1),
        g(r, tt(o(r)));
    } catch (i) {
      console.error("Ошибка moveOut:", i);
    }
  }
  function Ct(i, h) {
    try {
      if (!o(s)) return;
      Br(s, (o(s).propsValues[i] = h)), g(r, [...o(r)]);
    } catch (A) {
      console.error("Ошибка updateProp:", A);
    }
  }
  function on() {
    try {
      J(), g(r, []), g(a, null), g(u, new Set());
    } catch (i) {
      console.error("Ошибка clearAll:", i);
    }
  }
  function zt(i) {
    return i.map(
      ({ id: h, name: A, category: I, propsValues: K, children: Z }) => ({
        id: h,
        name: A,
        category: I,
        propsValues: K,
        children: Z ? zt(Z) : [],
      })
    );
  }
  function bn() {
    try {
      const i = zt(o(r)),
        h = new Blob([JSON.stringify(i, null, 2)], {
          type: "application/json",
        }),
        A = URL.createObjectURL(h),
        I = document.createElement("a");
      (I.href = A),
        (I.download = "form-builder-tree.json"),
        I.click(),
        URL.revokeObjectURL(A);
    } catch (i) {
      console.error("Ошибка saveJSON:", i), (R = "Не удалось сохранить JSON.");
    }
  }
  function sr(i) {
    try {
      const h = i.target.files[0];
      if (!h) return;
      const A = new FileReader();
      (A.onload = () => {
        try {
          const I = JSON.parse(A.result);
          g(r, Lt(I)), g(a, null), g(u, new Set());
        } catch (I) {
          console.error("Ошибка при парсинге JSON:", I),
            (R = "Ошибка при загрузке JSON");
        }
      }),
        A.readAsText(h);
    } catch (h) {
      console.error("Ошибка loadJSON:", h),
        (R = "Ошибка при загрузке JSON файла.");
    }
  }
  function _n() {
    try {
      o(C).click();
    } catch (i) {
      console.error("Ошибка openFileDialog:", i);
    }
  }
  function rn(i, h) {
    var A, I;
    try {
      const K = Fe.find((ie) => ie.name === i),
        Z = Fe.find((ie) => ie.name === h);
      return !K || !Z || (Z.requiredParent && !Z.requiredParent.includes(i))
        ? !1
        : (A = K.allowedChildren) != null && A.includes("*")
        ? !0
        : ((I = K.allowedChildren) == null ? void 0 : I.includes(h)) ?? !1;
    } catch (K) {
      return console.error("Ошибка checkNesting:", K), !1;
    }
  }
  function Lt(i) {
    try {
      return i.map((h) => {
        const A = Fe.find((Z) => Z.name === h.name);
        let I = h.props || [];
        if (A && A.props) {
          const Z = new Set(I.map((ie) => ie.key));
          I = [...I, ...A.props.filter((ie) => !Z.has(ie.key))];
        }
        let K = { ...h.propsValues };
        if (I && I.length)
          for (const Z of I)
            Z.key in K ||
              (K[Z.key] =
                Z.default !== void 0
                  ? Z.default
                  : Z.type === "checkbox"
                  ? !1
                  : "");
        return {
          ...h,
          props: I,
          propsValues: K,
          children: h.children ? Lt(h.children) : [],
        };
      });
    } catch (h) {
      return console.error("Ошибка enrichTreeWithProps:", h), [];
    }
  }
  function tt(i) {
    return i.map((h) => ({ ...h, children: h.children ? tt(h.children) : [] }));
  }
  function qe(i, h, A = null) {
    for (let I = 0; I < i.length; I++) {
      const K = i[I];
      if (K.id === h) return { parent: A, index: I, nodes: i };
      if (K.children) {
        const Z = qe(K.children, h, K);
        if (Z) return Z;
      }
    }
    return null;
  }
  function nt(i, h) {
    for (const A of i) {
      if (A.id === h) return A;
      if (A.children) {
        const I = nt(A.children, h);
        if (I) return I;
      }
    }
    return null;
  }
  Ee(
    () => (o(r), o(a)),
    () => {
      g(s, nt(o(r), o(a)));
    }
  ),
    Ee(
      () => o(N),
      () => {
        g(t, Gt[o(N)]);
      }
    ),
    Ee(
      () => o(t),
      () => {
        g(b, [
          { id: "openJson", label: o(t).menu[0], action: _n },
          { id: "saveJson", label: o(t).menu[1], action: bn },
          { id: "clearAll", label: o(t).menu[2], action: on },
        ]);
      }
    ),
    en(),
    xt();
  var eo = Bl();
  M("keydown", An, P);
  var to = m(eo);
  {
    var ir = (i) => {
        var h = Dl(),
          A = ft(h);
        El(A, {
          get title() {
            return o(t), p(() => o(t).appName);
          },
          $$slots: {
            left: (le, Ye) => {
              var me = Ol(),
                Ie = m(me);
              const Re = ge(
                  () => (
                    o(t),
                    p(() => ({
                      title: o(t).appName,
                      version: o(t).version,
                      author: o(t).author,
                    }))
                  )
                ),
                Te = ge(() => (o(t), p(() => ({ text: o(t).footerText }))));
              gl(Ie, {
                get menuItems() {
                  return o(b);
                },
                get headerContent() {
                  return o(Re);
                },
                get footerContent() {
                  return o(Te);
                },
                $$events: { select: $ },
                $$slots: {
                  footer: (ee, he) => {
                    var ue = Pl(),
                      se = m(ue);
                    const $e = ge(() => o(N) === "ru");
                    On(se, {
                      get checked() {
                        return o($e);
                      },
                      labelLeft: "🇺🇸",
                      labelRight: "🇷🇺",
                      onToggle: T,
                      get label() {
                        return o(t), p(() => o(t).langOther);
                      },
                    });
                    var lt = E(se, 2);
                    On(lt, {
                      get checked() {
                        return o(q);
                      },
                      labelLeft: "☀️",
                      labelRight: "🌙",
                      onToggle: H,
                      get label() {
                        return o(t), p(() => o(t).dark);
                      },
                    }),
                      D(ee, ue);
                  },
                },
              }),
                D(le, me);
            },
            right: (le, Ye) => {
              var me = Vl(),
                Ie = m(me),
                Re = m(Ie);
              U(() => j(Re, `v${(o(t), p(() => o(t).version) ?? "")}`)),
                D(le, me);
            },
          },
        });
        var I = E(A, 2),
          K = m(I),
          Z = m(K);
        Eo(Z, {
          get lang() {
            return o(N);
          },
          get selectedElement() {
            return o(l);
          },
          set selectedElement(le) {
            g(l, le);
          },
          $$legacy: !0,
        });
        var ie = E(K, 2),
          X = m(ie),
          ye = E(X, 2),
          ve = E(ye, 2),
          _e = E(ve, 2),
          je = E(_e, 2),
          Le = E(je, 2),
          Be = E(I, 2),
          ot = m(Be),
          rt = m(ot),
          He = m(rt);
        const Me = ge(() => o(O) === "tree");
        Pn(He, {
          id: "tree",
          get title() {
            return o(t), p(() => o(t).sections.tree);
          },
          get initiallyOpen() {
            return o(Me);
          },
          $$events: { click: () => g(O, "tree") },
          children: (le, Ye) => {
            var me = fo(),
              Ie = ft(me);
            {
              var Re = (ee) => {
                  var he = Ll(),
                    ue = m(he);
                  In(ue, {
                    get data() {
                      return o(r);
                    },
                    get selectedId() {
                      return o(a);
                    },
                    set selectedId(se) {
                      g(a, se);
                    },
                    get expandedNodes() {
                      return o(u);
                    },
                    set expandedNodes(se) {
                      g(u, se);
                    },
                    $$events: {
                      toggleExpand: (se) => {
                        o(u).has(se.detail)
                          ? o(u).delete(se.detail)
                          : o(u).add(se.detail),
                          g(u, new Set(o(u)));
                      },
                      select: (se) => g(a, se.detail),
                    },
                    $$legacy: !0,
                  }),
                    U(() =>
                      z(
                        he,
                        "aria-label",
                        (o(t), p(() => o(t).messages.treeAriaLabel))
                      )
                    ),
                    M("contextmenu", he, V),
                    D(ee, he);
                },
                Te = (ee) => {
                  var he = Tl(),
                    ue = m(he);
                  U(() => j(ue, (o(t), p(() => o(t).placeholders.emptyTree)))),
                    D(ee, he);
                };
              oe(Ie, (ee) => {
                o(r), p(() => o(r).length > 0) ? ee(Re) : ee(Te, !1);
              });
            }
            D(le, me);
          },
          $$slots: { default: !0 },
        });
        var at = E(He, 2);
        const Tt = ge(() => o(O) === "props");
        Pn(at, {
          id: "props",
          get title() {
            return o(t), p(() => o(t).sections.properties);
          },
          get initiallyOpen() {
            return o(Tt);
          },
          $$events: { click: () => g(O, "props") },
          children: (le, Ye) => {
            var me = fo(),
              Ie = ft(me);
            {
              var Re = (ee) => {
                  bo(ee, {
                    get component() {
                      return o(s);
                    },
                    onUpdate: Ct,
                    get lang() {
                      return o(N);
                    },
                  });
                },
                Te = (ee) => {
                  var he = Al(),
                    ue = m(he);
                  U(() =>
                    j(ue, (o(t), p(() => o(t).placeholders.selectComponent)))
                  ),
                    D(ee, he);
                };
              oe(Ie, (ee) => {
                o(s) ? ee(Re) : ee(Te, !1);
              });
            }
            D(le, me);
          },
          $$slots: { default: !0 },
        });
        var Jt = E(at, 2);
        const jt = ge(() => o(O) === "code");
        Pn(Jt, {
          id: "code",
          get title() {
            return o(t), p(() => o(t).sections.code);
          },
          get initiallyOpen() {
            return o(jt);
          },
          $$events: { click: () => g(O, "code") },
          children: (le, Ye) => {
            Co(le, {
              get components() {
                return o(r);
              },
            });
          },
          $$slots: { default: !0 },
        }),
          U(() => {
            z(X, "title", (o(t), p(() => o(t).buttons.addElement))),
              (ye.disabled = !o(a)),
              z(ye, "title", (o(t), p(() => o(t).buttons.removeElement))),
              (ve.disabled = !o(a)),
              z(ve, "title", (o(t), p(() => o(t).buttons.moveUp))),
              (_e.disabled = !o(a)),
              z(_e, "title", (o(t), p(() => o(t).buttons.moveDown))),
              (je.disabled = !o(a)),
              z(je, "title", (o(t), p(() => o(t).buttons.moveOut))),
              (Le.disabled = !o(a)),
              z(Le, "title", (o(t), p(() => o(t).buttons.moveIn)));
          }),
          M("click", X, fe),
          M("click", ye, bt),
          M("click", ve, Ve),
          M("click", _e, Vt),
          M("click", je, wt),
          M("click", Le, _t),
          D(i, h);
      },
      ur = (i) => {
        var h = zl(),
          A = ft(h),
          I = m(A),
          K = m(I),
          Z = E(A, 2),
          ie = m(Z),
          X = m(ie);
        Eo(X, {
          get lang() {
            return o(N);
          },
          get selectedElement() {
            return o(l);
          },
          set selectedElement(ee) {
            g(l, ee);
          },
          $$legacy: !0,
        });
        var ye = E(ie, 2),
          ve = m(ye),
          _e = E(ve, 2);
        Da(
          _e,
          (ee) => g(C, ee),
          () => o(C)
        );
        var je = E(_e, 2),
          Le = E(je, 2),
          Be = E(Le, 2),
          ot = E(Be, 2),
          rt = E(ot, 2),
          He = E(rt, 2),
          Me = E(He, 2),
          at = E(Me, 2),
          Tt = E(Z, 2),
          Jt = m(Tt);
        So(Jt, {
          direction: "vertical",
          initialSize: 50,
          minSize: 10,
          maxSize: 90,
          dividerSize: 3,
          $$slots: {
            first: (ee, he) => {
              So(ee, {
                direction: "horizontal",
                initialSize: 70,
                minSize: 10,
                maxSize: 90,
                slot: "first",
                $$slots: {
                  first: (ue, se) => {
                    var $e = Il(),
                      lt = m($e);
                    {
                      var Ut = (de) => {
                          var Ae = ql(),
                            it = m(Ae);
                          In(it, {
                            get data() {
                              return o(r);
                            },
                            get selectedId() {
                              return o(a);
                            },
                            set selectedId(Ke) {
                              g(a, Ke);
                            },
                            get expandedNodes() {
                              return o(u);
                            },
                            set expandedNodes(Ke) {
                              g(u, Ke);
                            },
                            $$events: {
                              toggleExpand: (Ke) => {
                                o(u).has(Ke.detail)
                                  ? o(u).delete(Ke.detail)
                                  : o(u).add(Ke.detail),
                                  g(u, new Set(o(u)));
                              },
                              select: (Ke) => g(a, Ke.detail),
                            },
                            $$legacy: !0,
                          }),
                            U(() =>
                              z(
                                Ae,
                                "aria-label",
                                (o(t), p(() => o(t).messages.treeAriaLabel))
                              )
                            ),
                            M("contextmenu", Ae, V),
                            D(de, Ae);
                        },
                        st = (de) => {
                          var Ae = Ml(),
                            it = m(Ae);
                          U(() =>
                            j(it, (o(t), p(() => o(t).placeholders.emptyTree)))
                          ),
                            D(de, Ae);
                        };
                      oe(lt, (de) => {
                        o(r), p(() => o(r).length > 0) ? de(Ut) : de(st, !1);
                      });
                    }
                    D(ue, $e);
                  },
                  second: (ue, se) => {
                    var $e = $l(),
                      lt = m($e);
                    {
                      var Ut = (de) => {
                          bo(de, {
                            get component() {
                              return o(s);
                            },
                            onUpdate: Ct,
                            get lang() {
                              return o(N);
                            },
                          });
                        },
                        st = (de) => {
                          var Ae = Rl(),
                            it = m(Ae);
                          U(() =>
                            j(
                              it,
                              (o(t), p(() => o(t).placeholders.selectComponent))
                            )
                          ),
                            D(de, Ae);
                        };
                      oe(lt, (de) => {
                        o(s) ? de(Ut) : de(st, !1);
                      });
                    }
                    D(ue, $e);
                  },
                },
              });
            },
            second: (ee, he) => {
              var ue = Fl(),
                se = m(ue);
              Co(se, {
                get components() {
                  return o(r);
                },
              }),
                D(ee, ue);
            },
          },
        });
        var jt = E(Tt, 2),
          le = m(jt),
          Ye = m(le),
          me = m(Ye);
        const Ie = ge(() => o(N) === "ru");
        On(me, {
          get checked() {
            return o(Ie);
          },
          labelLeft: "🇺🇸",
          labelRight: "🇷🇺",
          onToggle: T,
          get label() {
            return o(t), p(() => o(t).langOther);
          },
        });
        var Re = E(le, 2),
          Te = m(Re);
        U(() => {
          j(K, (o(t), p(() => o(t).appName))),
            z(ve, "title", (o(t), p(() => o(t).buttons.openJson))),
            z(je, "title", (o(t), p(() => o(t).buttons.saveJson))),
            z(Le, "title", (o(t), p(() => o(t).buttons.addElement))),
            (Be.disabled = !o(a)),
            z(Be, "title", (o(t), p(() => o(t).buttons.removeElement))),
            (ot.disabled = !o(a)),
            z(ot, "title", (o(t), p(() => o(t).buttons.moveUp))),
            (rt.disabled = !o(a)),
            z(rt, "title", (o(t), p(() => o(t).buttons.moveDown))),
            (He.disabled = !o(a)),
            z(He, "title", (o(t), p(() => o(t).buttons.moveOut))),
            (Me.disabled = !o(a)),
            z(Me, "title", (o(t), p(() => o(t).buttons.moveIn))),
            z(at, "title", (o(t), p(() => o(t).buttons.clearAll))),
            j(Te, (o(t), p(() => o(t).footer.copyright)));
        }),
          M("click", ve, _n),
          M("change", _e, sr),
          M("click", je, bn),
          M("click", Le, fe),
          M("click", Be, bt),
          M("click", ot, Ve),
          M("click", rt, Vt),
          M("click", He, wt),
          M("click", Me, _t),
          M("click", at, on),
          D(i, h);
      };
    oe(to, (i) => {
      o(f) ? i(ir) : i(ur, !1);
    });
  }
  var dr = E(to, 2);
  {
    var cr = (i) => {
      var h = Ul(),
        A = m(h),
        I = m(A),
        K = m(I),
        Z = E(I, 2),
        ie = m(Z),
        X = E(A, 2),
        ye = m(X),
        ve = m(ye),
        _e = E(ye, 2),
        je = m(_e),
        Le = E(X, 2),
        Be = m(Le),
        ot = m(Be),
        rt = E(Be, 2),
        He = m(rt),
        Me = E(Le, 2),
        at = m(Me),
        Tt = m(at),
        Jt = E(at, 2),
        jt = m(Jt),
        le = E(Me, 2),
        Ye = m(le),
        me = m(Ye),
        Ie = E(Ye, 2),
        Re = m(Ie),
        Te = E(le, 4),
        ee = m(Te),
        he = m(ee),
        ue = E(ee, 4);
      {
        var se = ($e) => {
          var lt = jl();
          yt(
            lt,
            5,
            () => Nl,
            qt,
            (Ut, st) => {
              var de = Jl(),
                Ae = m(de);
              U(() =>
                j(
                  Ae,
                  (o(t),
                  o(st),
                  p(() => {
                    var it;
                    return (
                      ((it = o(t).snippets) == null
                        ? void 0
                        : it[o(st).name]) ?? o(st).name
                    );
                  }))
                )
              ),
                M(
                  "click",
                  de,
                  Et(() => {
                    be(o(st)), L();
                  })
                ),
                D(Ut, de);
            }
          ),
            D($e, lt);
        };
        oe(ue, ($e) => {
          o(S) && $e(se);
        });
      }
      U(() => {
        rr(h, `position: fixed; top: ${o(v) ?? ""}px; left: ${o(y) ?? ""}px;`),
          z(A, "title", (o(t), p(() => o(t).hotkeys.undo))),
          j(K, (o(t), p(() => o(t).contextMenu.undo))),
          j(ie, (o(t), p(() => o(t).hotkeys.undo))),
          z(X, "title", (o(t), p(() => o(t).hotkeys.redo))),
          j(ve, (o(t), p(() => o(t).contextMenu.redo))),
          j(je, (o(t), p(() => o(t).hotkeys.redo))),
          z(Le, "title", (o(t), p(() => o(t).hotkeys.copy))),
          j(ot, (o(t), p(() => o(t).contextMenu.copy))),
          j(He, (o(t), p(() => o(t).hotkeys.copy))),
          z(Me, "title", (o(t), p(() => o(t).hotkeys.cut))),
          j(Tt, (o(t), p(() => o(t).contextMenu.cut))),
          j(jt, (o(t), p(() => o(t).hotkeys.cut))),
          z(le, "title", (o(t), p(() => o(t).hotkeys.paste))),
          j(me, (o(t), p(() => o(t).contextMenu.paste))),
          j(Re, (o(t), p(() => o(t).hotkeys.paste))),
          z(Te, "aria-expanded", o(S)),
          j(he, (o(t), p(() => o(t).insertSnippet)));
      }),
        M("click", A, Et(ae)),
        M("click", X, Et(ne)),
        M("click", Le, Et(ce)),
        M("click", Me, Et(Pe)),
        M("click", le, Et(Oe)),
        M("mouseenter", Te, () => g(S, !0)),
        M("mouseleave", Te, () => g(S, !1)),
        D(i, h);
    };
    oe(dr, (i) => {
      o(x) && i(cr);
    });
  }
  D(e, eo), et();
}
ha(Hl, { target: document.getElementById("app") });
