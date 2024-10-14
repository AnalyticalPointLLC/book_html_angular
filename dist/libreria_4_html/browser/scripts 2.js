/*! jQuery v3.7.1 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e, t) {
  "use strict";
  "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, true) : function(e2) {
    if (!e2.document) throw new Error("jQuery requires a window with a document");
    return t(e2);
  } : t(e);
}("undefined" != typeof window ? window : this, function(ie, e) {
  "use strict";
  var oe = [], r = Object.getPrototypeOf, ae = oe.slice, g = oe.flat ? function(e2) {
    return oe.flat.call(e2);
  } : function(e2) {
    return oe.concat.apply([], e2);
  }, s = oe.push, se = oe.indexOf, n = {}, i = n.toString, ue = n.hasOwnProperty, o = ue.toString, a = o.call(Object), le = {}, v = function(e2) {
    return "function" == typeof e2 && "number" != typeof e2.nodeType && "function" != typeof e2.item;
  }, y = function(e2) {
    return null != e2 && e2 === e2.window;
  }, C = ie.document, u = { type: true, src: true, nonce: true, noModule: true };
  function m(e2, t2, n2) {
    var r2, i2, o2 = (n2 = n2 || C).createElement("script");
    if (o2.text = e2, t2) for (r2 in u) (i2 = t2[r2] || t2.getAttribute && t2.getAttribute(r2)) && o2.setAttribute(r2, i2);
    n2.head.appendChild(o2).parentNode.removeChild(o2);
  }
  function x(e2) {
    return null == e2 ? e2 + "" : "object" == typeof e2 || "function" == typeof e2 ? n[i.call(e2)] || "object" : typeof e2;
  }
  var t = "3.7.1", l = /HTML$/i, ce = function(e2, t2) {
    return new ce.fn.init(e2, t2);
  };
  function c(e2) {
    var t2 = !!e2 && "length" in e2 && e2.length, n2 = x(e2);
    return !v(e2) && !y(e2) && ("array" === n2 || 0 === t2 || "number" == typeof t2 && 0 < t2 && t2 - 1 in e2);
  }
  function fe(e2, t2) {
    return e2.nodeName && e2.nodeName.toLowerCase() === t2.toLowerCase();
  }
  ce.fn = ce.prototype = { jquery: t, constructor: ce, length: 0, toArray: function() {
    return ae.call(this);
  }, get: function(e2) {
    return null == e2 ? ae.call(this) : e2 < 0 ? this[e2 + this.length] : this[e2];
  }, pushStack: function(e2) {
    var t2 = ce.merge(this.constructor(), e2);
    return t2.prevObject = this, t2;
  }, each: function(e2) {
    return ce.each(this, e2);
  }, map: function(n2) {
    return this.pushStack(ce.map(this, function(e2, t2) {
      return n2.call(e2, t2, e2);
    }));
  }, slice: function() {
    return this.pushStack(ae.apply(this, arguments));
  }, first: function() {
    return this.eq(0);
  }, last: function() {
    return this.eq(-1);
  }, even: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return (t2 + 1) % 2;
    }));
  }, odd: function() {
    return this.pushStack(ce.grep(this, function(e2, t2) {
      return t2 % 2;
    }));
  }, eq: function(e2) {
    var t2 = this.length, n2 = +e2 + (e2 < 0 ? t2 : 0);
    return this.pushStack(0 <= n2 && n2 < t2 ? [this[n2]] : []);
  }, end: function() {
    return this.prevObject || this.constructor();
  }, push: s, sort: oe.sort, splice: oe.splice }, ce.extend = ce.fn.extend = function() {
    var e2, t2, n2, r2, i2, o2, a2 = arguments[0] || {}, s2 = 1, u2 = arguments.length, l2 = false;
    for ("boolean" == typeof a2 && (l2 = a2, a2 = arguments[s2] || {}, s2++), "object" == typeof a2 || v(a2) || (a2 = {}), s2 === u2 && (a2 = this, s2--); s2 < u2; s2++) if (null != (e2 = arguments[s2])) for (t2 in e2) r2 = e2[t2], "__proto__" !== t2 && a2 !== r2 && (l2 && r2 && (ce.isPlainObject(r2) || (i2 = Array.isArray(r2))) ? (n2 = a2[t2], o2 = i2 && !Array.isArray(n2) ? [] : i2 || ce.isPlainObject(n2) ? n2 : {}, i2 = false, a2[t2] = ce.extend(l2, o2, r2)) : void 0 !== r2 && (a2[t2] = r2));
    return a2;
  }, ce.extend({ expando: "jQuery" + (t + Math.random()).replace(/\D/g, ""), isReady: true, error: function(e2) {
    throw new Error(e2);
  }, noop: function() {
  }, isPlainObject: function(e2) {
    var t2, n2;
    return !(!e2 || "[object Object]" !== i.call(e2)) && (!(t2 = r(e2)) || "function" == typeof (n2 = ue.call(t2, "constructor") && t2.constructor) && o.call(n2) === a);
  }, isEmptyObject: function(e2) {
    var t2;
    for (t2 in e2) return false;
    return true;
  }, globalEval: function(e2, t2, n2) {
    m(e2, { nonce: t2 && t2.nonce }, n2);
  }, each: function(e2, t2) {
    var n2, r2 = 0;
    if (c(e2)) {
      for (n2 = e2.length; r2 < n2; r2++) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    } else for (r2 in e2) if (false === t2.call(e2[r2], r2, e2[r2])) break;
    return e2;
  }, text: function(e2) {
    var t2, n2 = "", r2 = 0, i2 = e2.nodeType;
    if (!i2) while (t2 = e2[r2++]) n2 += ce.text(t2);
    return 1 === i2 || 11 === i2 ? e2.textContent : 9 === i2 ? e2.documentElement.textContent : 3 === i2 || 4 === i2 ? e2.nodeValue : n2;
  }, makeArray: function(e2, t2) {
    var n2 = t2 || [];
    return null != e2 && (c(Object(e2)) ? ce.merge(n2, "string" == typeof e2 ? [e2] : e2) : s.call(n2, e2)), n2;
  }, inArray: function(e2, t2, n2) {
    return null == t2 ? -1 : se.call(t2, e2, n2);
  }, isXMLDoc: function(e2) {
    var t2 = e2 && e2.namespaceURI, n2 = e2 && (e2.ownerDocument || e2).documentElement;
    return !l.test(t2 || n2 && n2.nodeName || "HTML");
  }, merge: function(e2, t2) {
    for (var n2 = +t2.length, r2 = 0, i2 = e2.length; r2 < n2; r2++) e2[i2++] = t2[r2];
    return e2.length = i2, e2;
  }, grep: function(e2, t2, n2) {
    for (var r2 = [], i2 = 0, o2 = e2.length, a2 = !n2; i2 < o2; i2++) !t2(e2[i2], i2) !== a2 && r2.push(e2[i2]);
    return r2;
  }, map: function(e2, t2, n2) {
    var r2, i2, o2 = 0, a2 = [];
    if (c(e2)) for (r2 = e2.length; o2 < r2; o2++) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    else for (o2 in e2) null != (i2 = t2(e2[o2], o2, n2)) && a2.push(i2);
    return g(a2);
  }, guid: 1, support: le }), "function" == typeof Symbol && (ce.fn[Symbol.iterator] = oe[Symbol.iterator]), ce.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e2, t2) {
    n["[object " + t2 + "]"] = t2.toLowerCase();
  });
  var pe = oe.pop, de = oe.sort, he = oe.splice, ge = "[\\x20\\t\\r\\n\\f]", ve = new RegExp("^" + ge + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ge + "+$", "g");
  ce.contains = function(e2, t2) {
    var n2 = t2 && t2.parentNode;
    return e2 === n2 || !(!n2 || 1 !== n2.nodeType || !(e2.contains ? e2.contains(n2) : e2.compareDocumentPosition && 16 & e2.compareDocumentPosition(n2)));
  };
  var f = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;
  function p(e2, t2) {
    return t2 ? "\0" === e2 ? "\uFFFD" : e2.slice(0, -1) + "\\" + e2.charCodeAt(e2.length - 1).toString(16) + " " : "\\" + e2;
  }
  ce.escapeSelector = function(e2) {
    return (e2 + "").replace(f, p);
  };
  var ye = C, me = s;
  !function() {
    var e2, b2, w2, o2, a2, T2, r2, C2, d2, i2, k2 = me, S2 = ce.expando, E2 = 0, n2 = 0, s2 = W2(), c2 = W2(), u2 = W2(), h2 = W2(), l2 = function(e3, t3) {
      return e3 === t3 && (a2 = true), 0;
    }, f2 = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", t2 = "(?:\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", p2 = "\\[" + ge + "*(" + t2 + ")(?:" + ge + "*([*^$|!~]?=)" + ge + `*(?:'((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)"|(` + t2 + "))|)" + ge + "*\\]", g2 = ":(" + t2 + `)(?:\\((('((?:\\\\.|[^\\\\'])*)'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|` + p2 + ")*)|.*)\\)|)", v2 = new RegExp(ge + "+", "g"), y2 = new RegExp("^" + ge + "*," + ge + "*"), m2 = new RegExp("^" + ge + "*([>+~]|" + ge + ")" + ge + "*"), x2 = new RegExp(ge + "|>"), j2 = new RegExp(g2), A2 = new RegExp("^" + t2 + "$"), D2 = { ID: new RegExp("^#(" + t2 + ")"), CLASS: new RegExp("^\\.(" + t2 + ")"), TAG: new RegExp("^(" + t2 + "|[*])"), ATTR: new RegExp("^" + p2), PSEUDO: new RegExp("^" + g2), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ge + "*(even|odd|(([+-]|)(\\d*)n|)" + ge + "*(?:([+-]|)" + ge + "*(\\d+)|))" + ge + "*\\)|)", "i"), bool: new RegExp("^(?:" + f2 + ")$", "i"), needsContext: new RegExp("^" + ge + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ge + "*((?:-\\d)?\\d*)" + ge + "*\\)|)(?=[^-]|$)", "i") }, N2 = /^(?:input|select|textarea|button)$/i, q2 = /^h\d$/i, L2 = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, H2 = /[+~]/, O2 = new RegExp("\\\\[\\da-fA-F]{1,6}" + ge + "?|\\\\([^\\r\\n\\f])", "g"), P2 = function(e3, t3) {
      var n3 = "0x" + e3.slice(1) - 65536;
      return t3 || (n3 < 0 ? String.fromCharCode(n3 + 65536) : String.fromCharCode(n3 >> 10 | 55296, 1023 & n3 | 56320));
    }, M2 = function() {
      V2();
    }, R2 = J2(function(e3) {
      return true === e3.disabled && fe(e3, "fieldset");
    }, { dir: "parentNode", next: "legend" });
    try {
      k2.apply(oe = ae.call(ye.childNodes), ye.childNodes), oe[ye.childNodes.length].nodeType;
    } catch (e3) {
      k2 = { apply: function(e4, t3) {
        me.apply(e4, ae.call(t3));
      }, call: function(e4) {
        me.apply(e4, ae.call(arguments, 1));
      } };
    }
    function I2(t3, e3, n3, r3) {
      var i3, o3, a3, s3, u3, l3, c3, f3 = e3 && e3.ownerDocument, p3 = e3 ? e3.nodeType : 9;
      if (n3 = n3 || [], "string" != typeof t3 || !t3 || 1 !== p3 && 9 !== p3 && 11 !== p3) return n3;
      if (!r3 && (V2(e3), e3 = e3 || T2, C2)) {
        if (11 !== p3 && (u3 = L2.exec(t3))) if (i3 = u3[1]) {
          if (9 === p3) {
            if (!(a3 = e3.getElementById(i3))) return n3;
            if (a3.id === i3) return k2.call(n3, a3), n3;
          } else if (f3 && (a3 = f3.getElementById(i3)) && I2.contains(e3, a3) && a3.id === i3) return k2.call(n3, a3), n3;
        } else {
          if (u3[2]) return k2.apply(n3, e3.getElementsByTagName(t3)), n3;
          if ((i3 = u3[3]) && e3.getElementsByClassName) return k2.apply(n3, e3.getElementsByClassName(i3)), n3;
        }
        if (!(h2[t3 + " "] || d2 && d2.test(t3))) {
          if (c3 = t3, f3 = e3, 1 === p3 && (x2.test(t3) || m2.test(t3))) {
            (f3 = H2.test(t3) && U2(e3.parentNode) || e3) == e3 && le.scope || ((s3 = e3.getAttribute("id")) ? s3 = ce.escapeSelector(s3) : e3.setAttribute("id", s3 = S2)), o3 = (l3 = Y2(t3)).length;
            while (o3--) l3[o3] = (s3 ? "#" + s3 : ":scope") + " " + Q2(l3[o3]);
            c3 = l3.join(",");
          }
          try {
            return k2.apply(n3, f3.querySelectorAll(c3)), n3;
          } catch (e4) {
            h2(t3, true);
          } finally {
            s3 === S2 && e3.removeAttribute("id");
          }
        }
      }
      return re2(t3.replace(ve, "$1"), e3, n3, r3);
    }
    function W2() {
      var r3 = [];
      return function e3(t3, n3) {
        return r3.push(t3 + " ") > b2.cacheLength && delete e3[r3.shift()], e3[t3 + " "] = n3;
      };
    }
    function F2(e3) {
      return e3[S2] = true, e3;
    }
    function $2(e3) {
      var t3 = T2.createElement("fieldset");
      try {
        return !!e3(t3);
      } catch (e4) {
        return false;
      } finally {
        t3.parentNode && t3.parentNode.removeChild(t3), t3 = null;
      }
    }
    function B2(t3) {
      return function(e3) {
        return fe(e3, "input") && e3.type === t3;
      };
    }
    function _2(t3) {
      return function(e3) {
        return (fe(e3, "input") || fe(e3, "button")) && e3.type === t3;
      };
    }
    function z2(t3) {
      return function(e3) {
        return "form" in e3 ? e3.parentNode && false === e3.disabled ? "label" in e3 ? "label" in e3.parentNode ? e3.parentNode.disabled === t3 : e3.disabled === t3 : e3.isDisabled === t3 || e3.isDisabled !== !t3 && R2(e3) === t3 : e3.disabled === t3 : "label" in e3 && e3.disabled === t3;
      };
    }
    function X2(a3) {
      return F2(function(o3) {
        return o3 = +o3, F2(function(e3, t3) {
          var n3, r3 = a3([], e3.length, o3), i3 = r3.length;
          while (i3--) e3[n3 = r3[i3]] && (e3[n3] = !(t3[n3] = e3[n3]));
        });
      });
    }
    function U2(e3) {
      return e3 && "undefined" != typeof e3.getElementsByTagName && e3;
    }
    function V2(e3) {
      var t3, n3 = e3 ? e3.ownerDocument || e3 : ye;
      return n3 != T2 && 9 === n3.nodeType && n3.documentElement && (r2 = (T2 = n3).documentElement, C2 = !ce.isXMLDoc(T2), i2 = r2.matches || r2.webkitMatchesSelector || r2.msMatchesSelector, r2.msMatchesSelector && ye != T2 && (t3 = T2.defaultView) && t3.top !== t3 && t3.addEventListener("unload", M2), le.getById = $2(function(e4) {
        return r2.appendChild(e4).id = ce.expando, !T2.getElementsByName || !T2.getElementsByName(ce.expando).length;
      }), le.disconnectedMatch = $2(function(e4) {
        return i2.call(e4, "*");
      }), le.scope = $2(function() {
        return T2.querySelectorAll(":scope");
      }), le.cssHas = $2(function() {
        try {
          return T2.querySelector(":has(*,:jqfake)"), false;
        } catch (e4) {
          return true;
        }
      }), le.getById ? (b2.filter.ID = function(e4) {
        var t4 = e4.replace(O2, P2);
        return function(e5) {
          return e5.getAttribute("id") === t4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4 = t4.getElementById(e4);
          return n4 ? [n4] : [];
        }
      }) : (b2.filter.ID = function(e4) {
        var n4 = e4.replace(O2, P2);
        return function(e5) {
          var t4 = "undefined" != typeof e5.getAttributeNode && e5.getAttributeNode("id");
          return t4 && t4.value === n4;
        };
      }, b2.find.ID = function(e4, t4) {
        if ("undefined" != typeof t4.getElementById && C2) {
          var n4, r3, i3, o3 = t4.getElementById(e4);
          if (o3) {
            if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
            i3 = t4.getElementsByName(e4), r3 = 0;
            while (o3 = i3[r3++]) if ((n4 = o3.getAttributeNode("id")) && n4.value === e4) return [o3];
          }
          return [];
        }
      }), b2.find.TAG = function(e4, t4) {
        return "undefined" != typeof t4.getElementsByTagName ? t4.getElementsByTagName(e4) : t4.querySelectorAll(e4);
      }, b2.find.CLASS = function(e4, t4) {
        if ("undefined" != typeof t4.getElementsByClassName && C2) return t4.getElementsByClassName(e4);
      }, d2 = [], $2(function(e4) {
        var t4;
        r2.appendChild(e4).innerHTML = "<a id='" + S2 + "' href='' disabled='disabled'></a><select id='" + S2 + "-\r\\' disabled='disabled'><option selected=''></option></select>", e4.querySelectorAll("[selected]").length || d2.push("\\[" + ge + "*(?:value|" + f2 + ")"), e4.querySelectorAll("[id~=" + S2 + "-]").length || d2.push("~="), e4.querySelectorAll("a#" + S2 + "+*").length || d2.push(".#.+[+~]"), e4.querySelectorAll(":checked").length || d2.push(":checked"), (t4 = T2.createElement("input")).setAttribute("type", "hidden"), e4.appendChild(t4).setAttribute("name", "D"), r2.appendChild(e4).disabled = true, 2 !== e4.querySelectorAll(":disabled").length && d2.push(":enabled", ":disabled"), (t4 = T2.createElement("input")).setAttribute("name", ""), e4.appendChild(t4), e4.querySelectorAll("[name='']").length || d2.push("\\[" + ge + "*name" + ge + "*=" + ge + `*(?:''|"")`);
      }), le.cssHas || d2.push(":has"), d2 = d2.length && new RegExp(d2.join("|")), l2 = function(e4, t4) {
        if (e4 === t4) return a2 = true, 0;
        var n4 = !e4.compareDocumentPosition - !t4.compareDocumentPosition;
        return n4 || (1 & (n4 = (e4.ownerDocument || e4) == (t4.ownerDocument || t4) ? e4.compareDocumentPosition(t4) : 1) || !le.sortDetached && t4.compareDocumentPosition(e4) === n4 ? e4 === T2 || e4.ownerDocument == ye && I2.contains(ye, e4) ? -1 : t4 === T2 || t4.ownerDocument == ye && I2.contains(ye, t4) ? 1 : o2 ? se.call(o2, e4) - se.call(o2, t4) : 0 : 4 & n4 ? -1 : 1);
      }), T2;
    }
    for (e2 in I2.matches = function(e3, t3) {
      return I2(e3, null, null, t3);
    }, I2.matchesSelector = function(e3, t3) {
      if (V2(e3), C2 && !h2[t3 + " "] && (!d2 || !d2.test(t3))) try {
        var n3 = i2.call(e3, t3);
        if (n3 || le.disconnectedMatch || e3.document && 11 !== e3.document.nodeType) return n3;
      } catch (e4) {
        h2(t3, true);
      }
      return 0 < I2(t3, T2, null, [e3]).length;
    }, I2.contains = function(e3, t3) {
      return (e3.ownerDocument || e3) != T2 && V2(e3), ce.contains(e3, t3);
    }, I2.attr = function(e3, t3) {
      (e3.ownerDocument || e3) != T2 && V2(e3);
      var n3 = b2.attrHandle[t3.toLowerCase()], r3 = n3 && ue.call(b2.attrHandle, t3.toLowerCase()) ? n3(e3, t3, !C2) : void 0;
      return void 0 !== r3 ? r3 : e3.getAttribute(t3);
    }, I2.error = function(e3) {
      throw new Error("Syntax error, unrecognized expression: " + e3);
    }, ce.uniqueSort = function(e3) {
      var t3, n3 = [], r3 = 0, i3 = 0;
      if (a2 = !le.sortStable, o2 = !le.sortStable && ae.call(e3, 0), de.call(e3, l2), a2) {
        while (t3 = e3[i3++]) t3 === e3[i3] && (r3 = n3.push(i3));
        while (r3--) he.call(e3, n3[r3], 1);
      }
      return o2 = null, e3;
    }, ce.fn.uniqueSort = function() {
      return this.pushStack(ce.uniqueSort(ae.apply(this)));
    }, (b2 = ce.expr = { cacheLength: 50, createPseudo: F2, match: D2, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: true }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: true }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function(e3) {
      return e3[1] = e3[1].replace(O2, P2), e3[3] = (e3[3] || e3[4] || e3[5] || "").replace(O2, P2), "~=" === e3[2] && (e3[3] = " " + e3[3] + " "), e3.slice(0, 4);
    }, CHILD: function(e3) {
      return e3[1] = e3[1].toLowerCase(), "nth" === e3[1].slice(0, 3) ? (e3[3] || I2.error(e3[0]), e3[4] = +(e3[4] ? e3[5] + (e3[6] || 1) : 2 * ("even" === e3[3] || "odd" === e3[3])), e3[5] = +(e3[7] + e3[8] || "odd" === e3[3])) : e3[3] && I2.error(e3[0]), e3;
    }, PSEUDO: function(e3) {
      var t3, n3 = !e3[6] && e3[2];
      return D2.CHILD.test(e3[0]) ? null : (e3[3] ? e3[2] = e3[4] || e3[5] || "" : n3 && j2.test(n3) && (t3 = Y2(n3, true)) && (t3 = n3.indexOf(")", n3.length - t3) - n3.length) && (e3[0] = e3[0].slice(0, t3), e3[2] = n3.slice(0, t3)), e3.slice(0, 3));
    } }, filter: { TAG: function(e3) {
      var t3 = e3.replace(O2, P2).toLowerCase();
      return "*" === e3 ? function() {
        return true;
      } : function(e4) {
        return fe(e4, t3);
      };
    }, CLASS: function(e3) {
      var t3 = s2[e3 + " "];
      return t3 || (t3 = new RegExp("(^|" + ge + ")" + e3 + "(" + ge + "|$)")) && s2(e3, function(e4) {
        return t3.test("string" == typeof e4.className && e4.className || "undefined" != typeof e4.getAttribute && e4.getAttribute("class") || "");
      });
    }, ATTR: function(n3, r3, i3) {
      return function(e3) {
        var t3 = I2.attr(e3, n3);
        return null == t3 ? "!=" === r3 : !r3 || (t3 += "", "=" === r3 ? t3 === i3 : "!=" === r3 ? t3 !== i3 : "^=" === r3 ? i3 && 0 === t3.indexOf(i3) : "*=" === r3 ? i3 && -1 < t3.indexOf(i3) : "$=" === r3 ? i3 && t3.slice(-i3.length) === i3 : "~=" === r3 ? -1 < (" " + t3.replace(v2, " ") + " ").indexOf(i3) : "|=" === r3 && (t3 === i3 || t3.slice(0, i3.length + 1) === i3 + "-"));
      };
    }, CHILD: function(d3, e3, t3, h3, g3) {
      var v3 = "nth" !== d3.slice(0, 3), y3 = "last" !== d3.slice(-4), m3 = "of-type" === e3;
      return 1 === h3 && 0 === g3 ? function(e4) {
        return !!e4.parentNode;
      } : function(e4, t4, n3) {
        var r3, i3, o3, a3, s3, u3 = v3 !== y3 ? "nextSibling" : "previousSibling", l3 = e4.parentNode, c3 = m3 && e4.nodeName.toLowerCase(), f3 = !n3 && !m3, p3 = false;
        if (l3) {
          if (v3) {
            while (u3) {
              o3 = e4;
              while (o3 = o3[u3]) if (m3 ? fe(o3, c3) : 1 === o3.nodeType) return false;
              s3 = u3 = "only" === d3 && !s3 && "nextSibling";
            }
            return true;
          }
          if (s3 = [y3 ? l3.firstChild : l3.lastChild], y3 && f3) {
            p3 = (a3 = (r3 = (i3 = l3[S2] || (l3[S2] = {}))[d3] || [])[0] === E2 && r3[1]) && r3[2], o3 = a3 && l3.childNodes[a3];
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if (1 === o3.nodeType && ++p3 && o3 === e4) {
              i3[d3] = [E2, a3, p3];
              break;
            }
          } else if (f3 && (p3 = a3 = (r3 = (i3 = e4[S2] || (e4[S2] = {}))[d3] || [])[0] === E2 && r3[1]), false === p3) {
            while (o3 = ++a3 && o3 && o3[u3] || (p3 = a3 = 0) || s3.pop()) if ((m3 ? fe(o3, c3) : 1 === o3.nodeType) && ++p3 && (f3 && ((i3 = o3[S2] || (o3[S2] = {}))[d3] = [E2, p3]), o3 === e4)) break;
          }
          return (p3 -= g3) === h3 || p3 % h3 == 0 && 0 <= p3 / h3;
        }
      };
    }, PSEUDO: function(e3, o3) {
      var t3, a3 = b2.pseudos[e3] || b2.setFilters[e3.toLowerCase()] || I2.error("unsupported pseudo: " + e3);
      return a3[S2] ? a3(o3) : 1 < a3.length ? (t3 = [e3, e3, "", o3], b2.setFilters.hasOwnProperty(e3.toLowerCase()) ? F2(function(e4, t4) {
        var n3, r3 = a3(e4, o3), i3 = r3.length;
        while (i3--) e4[n3 = se.call(e4, r3[i3])] = !(t4[n3] = r3[i3]);
      }) : function(e4) {
        return a3(e4, 0, t3);
      }) : a3;
    } }, pseudos: { not: F2(function(e3) {
      var r3 = [], i3 = [], s3 = ne2(e3.replace(ve, "$1"));
      return s3[S2] ? F2(function(e4, t3, n3, r4) {
        var i4, o3 = s3(e4, null, r4, []), a3 = e4.length;
        while (a3--) (i4 = o3[a3]) && (e4[a3] = !(t3[a3] = i4));
      }) : function(e4, t3, n3) {
        return r3[0] = e4, s3(r3, null, n3, i3), r3[0] = null, !i3.pop();
      };
    }), has: F2(function(t3) {
      return function(e3) {
        return 0 < I2(t3, e3).length;
      };
    }), contains: F2(function(t3) {
      return t3 = t3.replace(O2, P2), function(e3) {
        return -1 < (e3.textContent || ce.text(e3)).indexOf(t3);
      };
    }), lang: F2(function(n3) {
      return A2.test(n3 || "") || I2.error("unsupported lang: " + n3), n3 = n3.replace(O2, P2).toLowerCase(), function(e3) {
        var t3;
        do {
          if (t3 = C2 ? e3.lang : e3.getAttribute("xml:lang") || e3.getAttribute("lang")) return (t3 = t3.toLowerCase()) === n3 || 0 === t3.indexOf(n3 + "-");
        } while ((e3 = e3.parentNode) && 1 === e3.nodeType);
        return false;
      };
    }), target: function(e3) {
      var t3 = ie.location && ie.location.hash;
      return t3 && t3.slice(1) === e3.id;
    }, root: function(e3) {
      return e3 === r2;
    }, focus: function(e3) {
      return e3 === function() {
        try {
          return T2.activeElement;
        } catch (e4) {
        }
      }() && T2.hasFocus() && !!(e3.type || e3.href || ~e3.tabIndex);
    }, enabled: z2(false), disabled: z2(true), checked: function(e3) {
      return fe(e3, "input") && !!e3.checked || fe(e3, "option") && !!e3.selected;
    }, selected: function(e3) {
      return e3.parentNode && e3.parentNode.selectedIndex, true === e3.selected;
    }, empty: function(e3) {
      for (e3 = e3.firstChild; e3; e3 = e3.nextSibling) if (e3.nodeType < 6) return false;
      return true;
    }, parent: function(e3) {
      return !b2.pseudos.empty(e3);
    }, header: function(e3) {
      return q2.test(e3.nodeName);
    }, input: function(e3) {
      return N2.test(e3.nodeName);
    }, button: function(e3) {
      return fe(e3, "input") && "button" === e3.type || fe(e3, "button");
    }, text: function(e3) {
      var t3;
      return fe(e3, "input") && "text" === e3.type && (null == (t3 = e3.getAttribute("type")) || "text" === t3.toLowerCase());
    }, first: X2(function() {
      return [0];
    }), last: X2(function(e3, t3) {
      return [t3 - 1];
    }), eq: X2(function(e3, t3, n3) {
      return [n3 < 0 ? n3 + t3 : n3];
    }), even: X2(function(e3, t3) {
      for (var n3 = 0; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), odd: X2(function(e3, t3) {
      for (var n3 = 1; n3 < t3; n3 += 2) e3.push(n3);
      return e3;
    }), lt: X2(function(e3, t3, n3) {
      var r3;
      for (r3 = n3 < 0 ? n3 + t3 : t3 < n3 ? t3 : n3; 0 <= --r3; ) e3.push(r3);
      return e3;
    }), gt: X2(function(e3, t3, n3) {
      for (var r3 = n3 < 0 ? n3 + t3 : n3; ++r3 < t3; ) e3.push(r3);
      return e3;
    }) } }).pseudos.nth = b2.pseudos.eq, { radio: true, checkbox: true, file: true, password: true, image: true }) b2.pseudos[e2] = B2(e2);
    for (e2 in { submit: true, reset: true }) b2.pseudos[e2] = _2(e2);
    function G2() {
    }
    function Y2(e3, t3) {
      var n3, r3, i3, o3, a3, s3, u3, l3 = c2[e3 + " "];
      if (l3) return t3 ? 0 : l3.slice(0);
      a3 = e3, s3 = [], u3 = b2.preFilter;
      while (a3) {
        for (o3 in n3 && !(r3 = y2.exec(a3)) || (r3 && (a3 = a3.slice(r3[0].length) || a3), s3.push(i3 = [])), n3 = false, (r3 = m2.exec(a3)) && (n3 = r3.shift(), i3.push({ value: n3, type: r3[0].replace(ve, " ") }), a3 = a3.slice(n3.length)), b2.filter) !(r3 = D2[o3].exec(a3)) || u3[o3] && !(r3 = u3[o3](r3)) || (n3 = r3.shift(), i3.push({ value: n3, type: o3, matches: r3 }), a3 = a3.slice(n3.length));
        if (!n3) break;
      }
      return t3 ? a3.length : a3 ? I2.error(e3) : c2(e3, s3).slice(0);
    }
    function Q2(e3) {
      for (var t3 = 0, n3 = e3.length, r3 = ""; t3 < n3; t3++) r3 += e3[t3].value;
      return r3;
    }
    function J2(a3, e3, t3) {
      var s3 = e3.dir, u3 = e3.next, l3 = u3 || s3, c3 = t3 && "parentNode" === l3, f3 = n2++;
      return e3.first ? function(e4, t4, n3) {
        while (e4 = e4[s3]) if (1 === e4.nodeType || c3) return a3(e4, t4, n3);
        return false;
      } : function(e4, t4, n3) {
        var r3, i3, o3 = [E2, f3];
        if (n3) {
          while (e4 = e4[s3]) if ((1 === e4.nodeType || c3) && a3(e4, t4, n3)) return true;
        } else while (e4 = e4[s3]) if (1 === e4.nodeType || c3) if (i3 = e4[S2] || (e4[S2] = {}), u3 && fe(e4, u3)) e4 = e4[s3] || e4;
        else {
          if ((r3 = i3[l3]) && r3[0] === E2 && r3[1] === f3) return o3[2] = r3[2];
          if ((i3[l3] = o3)[2] = a3(e4, t4, n3)) return true;
        }
        return false;
      };
    }
    function K2(i3) {
      return 1 < i3.length ? function(e3, t3, n3) {
        var r3 = i3.length;
        while (r3--) if (!i3[r3](e3, t3, n3)) return false;
        return true;
      } : i3[0];
    }
    function Z2(e3, t3, n3, r3, i3) {
      for (var o3, a3 = [], s3 = 0, u3 = e3.length, l3 = null != t3; s3 < u3; s3++) (o3 = e3[s3]) && (n3 && !n3(o3, r3, i3) || (a3.push(o3), l3 && t3.push(s3)));
      return a3;
    }
    function ee2(d3, h3, g3, v3, y3, e3) {
      return v3 && !v3[S2] && (v3 = ee2(v3)), y3 && !y3[S2] && (y3 = ee2(y3, e3)), F2(function(e4, t3, n3, r3) {
        var i3, o3, a3, s3, u3 = [], l3 = [], c3 = t3.length, f3 = e4 || function(e5, t4, n4) {
          for (var r4 = 0, i4 = t4.length; r4 < i4; r4++) I2(e5, t4[r4], n4);
          return n4;
        }(h3 || "*", n3.nodeType ? [n3] : n3, []), p3 = !d3 || !e4 && h3 ? f3 : Z2(f3, u3, d3, n3, r3);
        if (g3 ? g3(p3, s3 = y3 || (e4 ? d3 : c3 || v3) ? [] : t3, n3, r3) : s3 = p3, v3) {
          i3 = Z2(s3, l3), v3(i3, [], n3, r3), o3 = i3.length;
          while (o3--) (a3 = i3[o3]) && (s3[l3[o3]] = !(p3[l3[o3]] = a3));
        }
        if (e4) {
          if (y3 || d3) {
            if (y3) {
              i3 = [], o3 = s3.length;
              while (o3--) (a3 = s3[o3]) && i3.push(p3[o3] = a3);
              y3(null, s3 = [], i3, r3);
            }
            o3 = s3.length;
            while (o3--) (a3 = s3[o3]) && -1 < (i3 = y3 ? se.call(e4, a3) : u3[o3]) && (e4[i3] = !(t3[i3] = a3));
          }
        } else s3 = Z2(s3 === t3 ? s3.splice(c3, s3.length) : s3), y3 ? y3(null, t3, s3, r3) : k2.apply(t3, s3);
      });
    }
    function te2(e3) {
      for (var i3, t3, n3, r3 = e3.length, o3 = b2.relative[e3[0].type], a3 = o3 || b2.relative[" "], s3 = o3 ? 1 : 0, u3 = J2(function(e4) {
        return e4 === i3;
      }, a3, true), l3 = J2(function(e4) {
        return -1 < se.call(i3, e4);
      }, a3, true), c3 = [function(e4, t4, n4) {
        var r4 = !o3 && (n4 || t4 != w2) || ((i3 = t4).nodeType ? u3(e4, t4, n4) : l3(e4, t4, n4));
        return i3 = null, r4;
      }]; s3 < r3; s3++) if (t3 = b2.relative[e3[s3].type]) c3 = [J2(K2(c3), t3)];
      else {
        if ((t3 = b2.filter[e3[s3].type].apply(null, e3[s3].matches))[S2]) {
          for (n3 = ++s3; n3 < r3; n3++) if (b2.relative[e3[n3].type]) break;
          return ee2(1 < s3 && K2(c3), 1 < s3 && Q2(e3.slice(0, s3 - 1).concat({ value: " " === e3[s3 - 2].type ? "*" : "" })).replace(ve, "$1"), t3, s3 < n3 && te2(e3.slice(s3, n3)), n3 < r3 && te2(e3 = e3.slice(n3)), n3 < r3 && Q2(e3));
        }
        c3.push(t3);
      }
      return K2(c3);
    }
    function ne2(e3, t3) {
      var n3, v3, y3, m3, x3, r3, i3 = [], o3 = [], a3 = u2[e3 + " "];
      if (!a3) {
        t3 || (t3 = Y2(e3)), n3 = t3.length;
        while (n3--) (a3 = te2(t3[n3]))[S2] ? i3.push(a3) : o3.push(a3);
        (a3 = u2(e3, (v3 = o3, m3 = 0 < (y3 = i3).length, x3 = 0 < v3.length, r3 = function(e4, t4, n4, r4, i4) {
          var o4, a4, s3, u3 = 0, l3 = "0", c3 = e4 && [], f3 = [], p3 = w2, d3 = e4 || x3 && b2.find.TAG("*", i4), h3 = E2 += null == p3 ? 1 : Math.random() || 0.1, g3 = d3.length;
          for (i4 && (w2 = t4 == T2 || t4 || i4); l3 !== g3 && null != (o4 = d3[l3]); l3++) {
            if (x3 && o4) {
              a4 = 0, t4 || o4.ownerDocument == T2 || (V2(o4), n4 = !C2);
              while (s3 = v3[a4++]) if (s3(o4, t4 || T2, n4)) {
                k2.call(r4, o4);
                break;
              }
              i4 && (E2 = h3);
            }
            m3 && ((o4 = !s3 && o4) && u3--, e4 && c3.push(o4));
          }
          if (u3 += l3, m3 && l3 !== u3) {
            a4 = 0;
            while (s3 = y3[a4++]) s3(c3, f3, t4, n4);
            if (e4) {
              if (0 < u3) while (l3--) c3[l3] || f3[l3] || (f3[l3] = pe.call(r4));
              f3 = Z2(f3);
            }
            k2.apply(r4, f3), i4 && !e4 && 0 < f3.length && 1 < u3 + y3.length && ce.uniqueSort(r4);
          }
          return i4 && (E2 = h3, w2 = p3), c3;
        }, m3 ? F2(r3) : r3))).selector = e3;
      }
      return a3;
    }
    function re2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = "function" == typeof e3 && e3, c3 = !r3 && Y2(e3 = l3.selector || e3);
      if (n3 = n3 || [], 1 === c3.length) {
        if (2 < (o3 = c3[0] = c3[0].slice(0)).length && "ID" === (a3 = o3[0]).type && 9 === t3.nodeType && C2 && b2.relative[o3[1].type]) {
          if (!(t3 = (b2.find.ID(a3.matches[0].replace(O2, P2), t3) || [])[0])) return n3;
          l3 && (t3 = t3.parentNode), e3 = e3.slice(o3.shift().value.length);
        }
        i3 = D2.needsContext.test(e3) ? 0 : o3.length;
        while (i3--) {
          if (a3 = o3[i3], b2.relative[s3 = a3.type]) break;
          if ((u3 = b2.find[s3]) && (r3 = u3(a3.matches[0].replace(O2, P2), H2.test(o3[0].type) && U2(t3.parentNode) || t3))) {
            if (o3.splice(i3, 1), !(e3 = r3.length && Q2(o3))) return k2.apply(n3, r3), n3;
            break;
          }
        }
      }
      return (l3 || ne2(e3, c3))(r3, t3, !C2, n3, !t3 || H2.test(e3) && U2(t3.parentNode) || t3), n3;
    }
    G2.prototype = b2.filters = b2.pseudos, b2.setFilters = new G2(), le.sortStable = S2.split("").sort(l2).join("") === S2, V2(), le.sortDetached = $2(function(e3) {
      return 1 & e3.compareDocumentPosition(T2.createElement("fieldset"));
    }), ce.find = I2, ce.expr[":"] = ce.expr.pseudos, ce.unique = ce.uniqueSort, I2.compile = ne2, I2.select = re2, I2.setDocument = V2, I2.tokenize = Y2, I2.escape = ce.escapeSelector, I2.getText = ce.text, I2.isXML = ce.isXMLDoc, I2.selectors = ce.expr, I2.support = ce.support, I2.uniqueSort = ce.uniqueSort;
  }();
  var d = function(e2, t2, n2) {
    var r2 = [], i2 = void 0 !== n2;
    while ((e2 = e2[t2]) && 9 !== e2.nodeType) if (1 === e2.nodeType) {
      if (i2 && ce(e2).is(n2)) break;
      r2.push(e2);
    }
    return r2;
  }, h = function(e2, t2) {
    for (var n2 = []; e2; e2 = e2.nextSibling) 1 === e2.nodeType && e2 !== t2 && n2.push(e2);
    return n2;
  }, b = ce.expr.match.needsContext, w = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
  function T(e2, n2, r2) {
    return v(n2) ? ce.grep(e2, function(e3, t2) {
      return !!n2.call(e3, t2, e3) !== r2;
    }) : n2.nodeType ? ce.grep(e2, function(e3) {
      return e3 === n2 !== r2;
    }) : "string" != typeof n2 ? ce.grep(e2, function(e3) {
      return -1 < se.call(n2, e3) !== r2;
    }) : ce.filter(n2, e2, r2);
  }
  ce.filter = function(e2, t2, n2) {
    var r2 = t2[0];
    return n2 && (e2 = ":not(" + e2 + ")"), 1 === t2.length && 1 === r2.nodeType ? ce.find.matchesSelector(r2, e2) ? [r2] : [] : ce.find.matches(e2, ce.grep(t2, function(e3) {
      return 1 === e3.nodeType;
    }));
  }, ce.fn.extend({ find: function(e2) {
    var t2, n2, r2 = this.length, i2 = this;
    if ("string" != typeof e2) return this.pushStack(ce(e2).filter(function() {
      for (t2 = 0; t2 < r2; t2++) if (ce.contains(i2[t2], this)) return true;
    }));
    for (n2 = this.pushStack([]), t2 = 0; t2 < r2; t2++) ce.find(e2, i2[t2], n2);
    return 1 < r2 ? ce.uniqueSort(n2) : n2;
  }, filter: function(e2) {
    return this.pushStack(T(this, e2 || [], false));
  }, not: function(e2) {
    return this.pushStack(T(this, e2 || [], true));
  }, is: function(e2) {
    return !!T(this, "string" == typeof e2 && b.test(e2) ? ce(e2) : e2 || [], false).length;
  } });
  var k, S = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
  (ce.fn.init = function(e2, t2, n2) {
    var r2, i2;
    if (!e2) return this;
    if (n2 = n2 || k, "string" == typeof e2) {
      if (!(r2 = "<" === e2[0] && ">" === e2[e2.length - 1] && 3 <= e2.length ? [null, e2, null] : S.exec(e2)) || !r2[1] && t2) return !t2 || t2.jquery ? (t2 || n2).find(e2) : this.constructor(t2).find(e2);
      if (r2[1]) {
        if (t2 = t2 instanceof ce ? t2[0] : t2, ce.merge(this, ce.parseHTML(r2[1], t2 && t2.nodeType ? t2.ownerDocument || t2 : C, true)), w.test(r2[1]) && ce.isPlainObject(t2)) for (r2 in t2) v(this[r2]) ? this[r2](t2[r2]) : this.attr(r2, t2[r2]);
        return this;
      }
      return (i2 = C.getElementById(r2[2])) && (this[0] = i2, this.length = 1), this;
    }
    return e2.nodeType ? (this[0] = e2, this.length = 1, this) : v(e2) ? void 0 !== n2.ready ? n2.ready(e2) : e2(ce) : ce.makeArray(e2, this);
  }).prototype = ce.fn, k = ce(C);
  var E = /^(?:parents|prev(?:Until|All))/, j = { children: true, contents: true, next: true, prev: true };
  function A(e2, t2) {
    while ((e2 = e2[t2]) && 1 !== e2.nodeType) ;
    return e2;
  }
  ce.fn.extend({ has: function(e2) {
    var t2 = ce(e2, this), n2 = t2.length;
    return this.filter(function() {
      for (var e3 = 0; e3 < n2; e3++) if (ce.contains(this, t2[e3])) return true;
    });
  }, closest: function(e2, t2) {
    var n2, r2 = 0, i2 = this.length, o2 = [], a2 = "string" != typeof e2 && ce(e2);
    if (!b.test(e2)) {
      for (; r2 < i2; r2++) for (n2 = this[r2]; n2 && n2 !== t2; n2 = n2.parentNode) if (n2.nodeType < 11 && (a2 ? -1 < a2.index(n2) : 1 === n2.nodeType && ce.find.matchesSelector(n2, e2))) {
        o2.push(n2);
        break;
      }
    }
    return this.pushStack(1 < o2.length ? ce.uniqueSort(o2) : o2);
  }, index: function(e2) {
    return e2 ? "string" == typeof e2 ? se.call(ce(e2), this[0]) : se.call(this, e2.jquery ? e2[0] : e2) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
  }, add: function(e2, t2) {
    return this.pushStack(ce.uniqueSort(ce.merge(this.get(), ce(e2, t2))));
  }, addBack: function(e2) {
    return this.add(null == e2 ? this.prevObject : this.prevObject.filter(e2));
  } }), ce.each({ parent: function(e2) {
    var t2 = e2.parentNode;
    return t2 && 11 !== t2.nodeType ? t2 : null;
  }, parents: function(e2) {
    return d(e2, "parentNode");
  }, parentsUntil: function(e2, t2, n2) {
    return d(e2, "parentNode", n2);
  }, next: function(e2) {
    return A(e2, "nextSibling");
  }, prev: function(e2) {
    return A(e2, "previousSibling");
  }, nextAll: function(e2) {
    return d(e2, "nextSibling");
  }, prevAll: function(e2) {
    return d(e2, "previousSibling");
  }, nextUntil: function(e2, t2, n2) {
    return d(e2, "nextSibling", n2);
  }, prevUntil: function(e2, t2, n2) {
    return d(e2, "previousSibling", n2);
  }, siblings: function(e2) {
    return h((e2.parentNode || {}).firstChild, e2);
  }, children: function(e2) {
    return h(e2.firstChild);
  }, contents: function(e2) {
    return null != e2.contentDocument && r(e2.contentDocument) ? e2.contentDocument : (fe(e2, "template") && (e2 = e2.content || e2), ce.merge([], e2.childNodes));
  } }, function(r2, i2) {
    ce.fn[r2] = function(e2, t2) {
      var n2 = ce.map(this, i2, e2);
      return "Until" !== r2.slice(-5) && (t2 = e2), t2 && "string" == typeof t2 && (n2 = ce.filter(t2, n2)), 1 < this.length && (j[r2] || ce.uniqueSort(n2), E.test(r2) && n2.reverse()), this.pushStack(n2);
    };
  });
  var D = /[^\x20\t\r\n\f]+/g;
  function N(e2) {
    return e2;
  }
  function q(e2) {
    throw e2;
  }
  function L(e2, t2, n2, r2) {
    var i2;
    try {
      e2 && v(i2 = e2.promise) ? i2.call(e2).done(t2).fail(n2) : e2 && v(i2 = e2.then) ? i2.call(e2, t2, n2) : t2.apply(void 0, [e2].slice(r2));
    } catch (e3) {
      n2.apply(void 0, [e3]);
    }
  }
  ce.Callbacks = function(r2) {
    var e2, n2;
    r2 = "string" == typeof r2 ? (e2 = r2, n2 = {}, ce.each(e2.match(D) || [], function(e3, t3) {
      n2[t3] = true;
    }), n2) : ce.extend({}, r2);
    var i2, t2, o2, a2, s2 = [], u2 = [], l2 = -1, c2 = function() {
      for (a2 = a2 || r2.once, o2 = i2 = true; u2.length; l2 = -1) {
        t2 = u2.shift();
        while (++l2 < s2.length) false === s2[l2].apply(t2[0], t2[1]) && r2.stopOnFalse && (l2 = s2.length, t2 = false);
      }
      r2.memory || (t2 = false), i2 = false, a2 && (s2 = t2 ? [] : "");
    }, f2 = { add: function() {
      return s2 && (t2 && !i2 && (l2 = s2.length - 1, u2.push(t2)), function n3(e3) {
        ce.each(e3, function(e4, t3) {
          v(t3) ? r2.unique && f2.has(t3) || s2.push(t3) : t3 && t3.length && "string" !== x(t3) && n3(t3);
        });
      }(arguments), t2 && !i2 && c2()), this;
    }, remove: function() {
      return ce.each(arguments, function(e3, t3) {
        var n3;
        while (-1 < (n3 = ce.inArray(t3, s2, n3))) s2.splice(n3, 1), n3 <= l2 && l2--;
      }), this;
    }, has: function(e3) {
      return e3 ? -1 < ce.inArray(e3, s2) : 0 < s2.length;
    }, empty: function() {
      return s2 && (s2 = []), this;
    }, disable: function() {
      return a2 = u2 = [], s2 = t2 = "", this;
    }, disabled: function() {
      return !s2;
    }, lock: function() {
      return a2 = u2 = [], t2 || i2 || (s2 = t2 = ""), this;
    }, locked: function() {
      return !!a2;
    }, fireWith: function(e3, t3) {
      return a2 || (t3 = [e3, (t3 = t3 || []).slice ? t3.slice() : t3], u2.push(t3), i2 || c2()), this;
    }, fire: function() {
      return f2.fireWith(this, arguments), this;
    }, fired: function() {
      return !!o2;
    } };
    return f2;
  }, ce.extend({ Deferred: function(e2) {
    var o2 = [["notify", "progress", ce.Callbacks("memory"), ce.Callbacks("memory"), 2], ["resolve", "done", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", ce.Callbacks("once memory"), ce.Callbacks("once memory"), 1, "rejected"]], i2 = "pending", a2 = { state: function() {
      return i2;
    }, always: function() {
      return s2.done(arguments).fail(arguments), this;
    }, "catch": function(e3) {
      return a2.then(null, e3);
    }, pipe: function() {
      var i3 = arguments;
      return ce.Deferred(function(r2) {
        ce.each(o2, function(e3, t2) {
          var n2 = v(i3[t2[4]]) && i3[t2[4]];
          s2[t2[1]](function() {
            var e4 = n2 && n2.apply(this, arguments);
            e4 && v(e4.promise) ? e4.promise().progress(r2.notify).done(r2.resolve).fail(r2.reject) : r2[t2[0] + "With"](this, n2 ? [e4] : arguments);
          });
        }), i3 = null;
      }).promise();
    }, then: function(t2, n2, r2) {
      var u2 = 0;
      function l2(i3, o3, a3, s3) {
        return function() {
          var n3 = this, r3 = arguments, e3 = function() {
            var e4, t4;
            if (!(i3 < u2)) {
              if ((e4 = a3.apply(n3, r3)) === o3.promise()) throw new TypeError("Thenable self-resolution");
              t4 = e4 && ("object" == typeof e4 || "function" == typeof e4) && e4.then, v(t4) ? s3 ? t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3)) : (u2++, t4.call(e4, l2(u2, o3, N, s3), l2(u2, o3, q, s3), l2(u2, o3, N, o3.notifyWith))) : (a3 !== N && (n3 = void 0, r3 = [e4]), (s3 || o3.resolveWith)(n3, r3));
            }
          }, t3 = s3 ? e3 : function() {
            try {
              e3();
            } catch (e4) {
              ce.Deferred.exceptionHook && ce.Deferred.exceptionHook(e4, t3.error), u2 <= i3 + 1 && (a3 !== q && (n3 = void 0, r3 = [e4]), o3.rejectWith(n3, r3));
            }
          };
          i3 ? t3() : (ce.Deferred.getErrorHook ? t3.error = ce.Deferred.getErrorHook() : ce.Deferred.getStackHook && (t3.error = ce.Deferred.getStackHook()), ie.setTimeout(t3));
        };
      }
      return ce.Deferred(function(e3) {
        o2[0][3].add(l2(0, e3, v(r2) ? r2 : N, e3.notifyWith)), o2[1][3].add(l2(0, e3, v(t2) ? t2 : N)), o2[2][3].add(l2(0, e3, v(n2) ? n2 : q));
      }).promise();
    }, promise: function(e3) {
      return null != e3 ? ce.extend(e3, a2) : a2;
    } }, s2 = {};
    return ce.each(o2, function(e3, t2) {
      var n2 = t2[2], r2 = t2[5];
      a2[t2[1]] = n2.add, r2 && n2.add(function() {
        i2 = r2;
      }, o2[3 - e3][2].disable, o2[3 - e3][3].disable, o2[0][2].lock, o2[0][3].lock), n2.add(t2[3].fire), s2[t2[0]] = function() {
        return s2[t2[0] + "With"](this === s2 ? void 0 : this, arguments), this;
      }, s2[t2[0] + "With"] = n2.fireWith;
    }), a2.promise(s2), e2 && e2.call(s2, s2), s2;
  }, when: function(e2) {
    var n2 = arguments.length, t2 = n2, r2 = Array(t2), i2 = ae.call(arguments), o2 = ce.Deferred(), a2 = function(t3) {
      return function(e3) {
        r2[t3] = this, i2[t3] = 1 < arguments.length ? ae.call(arguments) : e3, --n2 || o2.resolveWith(r2, i2);
      };
    };
    if (n2 <= 1 && (L(e2, o2.done(a2(t2)).resolve, o2.reject, !n2), "pending" === o2.state() || v(i2[t2] && i2[t2].then))) return o2.then();
    while (t2--) L(i2[t2], a2(t2), o2.reject);
    return o2.promise();
  } });
  var H = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
  ce.Deferred.exceptionHook = function(e2, t2) {
    ie.console && ie.console.warn && e2 && H.test(e2.name) && ie.console.warn("jQuery.Deferred exception: " + e2.message, e2.stack, t2);
  }, ce.readyException = function(e2) {
    ie.setTimeout(function() {
      throw e2;
    });
  };
  var O = ce.Deferred();
  function P() {
    C.removeEventListener("DOMContentLoaded", P), ie.removeEventListener("load", P), ce.ready();
  }
  ce.fn.ready = function(e2) {
    return O.then(e2)["catch"](function(e3) {
      ce.readyException(e3);
    }), this;
  }, ce.extend({ isReady: false, readyWait: 1, ready: function(e2) {
    (true === e2 ? --ce.readyWait : ce.isReady) || (ce.isReady = true) !== e2 && 0 < --ce.readyWait || O.resolveWith(C, [ce]);
  } }), ce.ready.then = O.then, "complete" === C.readyState || "loading" !== C.readyState && !C.documentElement.doScroll ? ie.setTimeout(ce.ready) : (C.addEventListener("DOMContentLoaded", P), ie.addEventListener("load", P));
  var M = function(e2, t2, n2, r2, i2, o2, a2) {
    var s2 = 0, u2 = e2.length, l2 = null == n2;
    if ("object" === x(n2)) for (s2 in i2 = true, n2) M(e2, t2, s2, n2[s2], true, o2, a2);
    else if (void 0 !== r2 && (i2 = true, v(r2) || (a2 = true), l2 && (a2 ? (t2.call(e2, r2), t2 = null) : (l2 = t2, t2 = function(e3, t3, n3) {
      return l2.call(ce(e3), n3);
    })), t2)) for (; s2 < u2; s2++) t2(e2[s2], n2, a2 ? r2 : r2.call(e2[s2], s2, t2(e2[s2], n2)));
    return i2 ? e2 : l2 ? t2.call(e2) : u2 ? t2(e2[0], n2) : o2;
  }, R = /^-ms-/, I = /-([a-z])/g;
  function W(e2, t2) {
    return t2.toUpperCase();
  }
  function F(e2) {
    return e2.replace(R, "ms-").replace(I, W);
  }
  var $ = function(e2) {
    return 1 === e2.nodeType || 9 === e2.nodeType || !+e2.nodeType;
  };
  function B() {
    this.expando = ce.expando + B.uid++;
  }
  B.uid = 1, B.prototype = { cache: function(e2) {
    var t2 = e2[this.expando];
    return t2 || (t2 = {}, $(e2) && (e2.nodeType ? e2[this.expando] = t2 : Object.defineProperty(e2, this.expando, { value: t2, configurable: true }))), t2;
  }, set: function(e2, t2, n2) {
    var r2, i2 = this.cache(e2);
    if ("string" == typeof t2) i2[F(t2)] = n2;
    else for (r2 in t2) i2[F(r2)] = t2[r2];
    return i2;
  }, get: function(e2, t2) {
    return void 0 === t2 ? this.cache(e2) : e2[this.expando] && e2[this.expando][F(t2)];
  }, access: function(e2, t2, n2) {
    return void 0 === t2 || t2 && "string" == typeof t2 && void 0 === n2 ? this.get(e2, t2) : (this.set(e2, t2, n2), void 0 !== n2 ? n2 : t2);
  }, remove: function(e2, t2) {
    var n2, r2 = e2[this.expando];
    if (void 0 !== r2) {
      if (void 0 !== t2) {
        n2 = (t2 = Array.isArray(t2) ? t2.map(F) : (t2 = F(t2)) in r2 ? [t2] : t2.match(D) || []).length;
        while (n2--) delete r2[t2[n2]];
      }
      (void 0 === t2 || ce.isEmptyObject(r2)) && (e2.nodeType ? e2[this.expando] = void 0 : delete e2[this.expando]);
    }
  }, hasData: function(e2) {
    var t2 = e2[this.expando];
    return void 0 !== t2 && !ce.isEmptyObject(t2);
  } };
  var _ = new B(), z = new B(), X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, U = /[A-Z]/g;
  function V(e2, t2, n2) {
    var r2, i2;
    if (void 0 === n2 && 1 === e2.nodeType) if (r2 = "data-" + t2.replace(U, "-$&").toLowerCase(), "string" == typeof (n2 = e2.getAttribute(r2))) {
      try {
        n2 = "true" === (i2 = n2) || "false" !== i2 && ("null" === i2 ? null : i2 === +i2 + "" ? +i2 : X.test(i2) ? JSON.parse(i2) : i2);
      } catch (e3) {
      }
      z.set(e2, t2, n2);
    } else n2 = void 0;
    return n2;
  }
  ce.extend({ hasData: function(e2) {
    return z.hasData(e2) || _.hasData(e2);
  }, data: function(e2, t2, n2) {
    return z.access(e2, t2, n2);
  }, removeData: function(e2, t2) {
    z.remove(e2, t2);
  }, _data: function(e2, t2, n2) {
    return _.access(e2, t2, n2);
  }, _removeData: function(e2, t2) {
    _.remove(e2, t2);
  } }), ce.fn.extend({ data: function(n2, e2) {
    var t2, r2, i2, o2 = this[0], a2 = o2 && o2.attributes;
    if (void 0 === n2) {
      if (this.length && (i2 = z.get(o2), 1 === o2.nodeType && !_.get(o2, "hasDataAttrs"))) {
        t2 = a2.length;
        while (t2--) a2[t2] && 0 === (r2 = a2[t2].name).indexOf("data-") && (r2 = F(r2.slice(5)), V(o2, r2, i2[r2]));
        _.set(o2, "hasDataAttrs", true);
      }
      return i2;
    }
    return "object" == typeof n2 ? this.each(function() {
      z.set(this, n2);
    }) : M(this, function(e3) {
      var t3;
      if (o2 && void 0 === e3) return void 0 !== (t3 = z.get(o2, n2)) ? t3 : void 0 !== (t3 = V(o2, n2)) ? t3 : void 0;
      this.each(function() {
        z.set(this, n2, e3);
      });
    }, null, e2, 1 < arguments.length, null, true);
  }, removeData: function(e2) {
    return this.each(function() {
      z.remove(this, e2);
    });
  } }), ce.extend({ queue: function(e2, t2, n2) {
    var r2;
    if (e2) return t2 = (t2 || "fx") + "queue", r2 = _.get(e2, t2), n2 && (!r2 || Array.isArray(n2) ? r2 = _.access(e2, t2, ce.makeArray(n2)) : r2.push(n2)), r2 || [];
  }, dequeue: function(e2, t2) {
    t2 = t2 || "fx";
    var n2 = ce.queue(e2, t2), r2 = n2.length, i2 = n2.shift(), o2 = ce._queueHooks(e2, t2);
    "inprogress" === i2 && (i2 = n2.shift(), r2--), i2 && ("fx" === t2 && n2.unshift("inprogress"), delete o2.stop, i2.call(e2, function() {
      ce.dequeue(e2, t2);
    }, o2)), !r2 && o2 && o2.empty.fire();
  }, _queueHooks: function(e2, t2) {
    var n2 = t2 + "queueHooks";
    return _.get(e2, n2) || _.access(e2, n2, { empty: ce.Callbacks("once memory").add(function() {
      _.remove(e2, [t2 + "queue", n2]);
    }) });
  } }), ce.fn.extend({ queue: function(t2, n2) {
    var e2 = 2;
    return "string" != typeof t2 && (n2 = t2, t2 = "fx", e2--), arguments.length < e2 ? ce.queue(this[0], t2) : void 0 === n2 ? this : this.each(function() {
      var e3 = ce.queue(this, t2, n2);
      ce._queueHooks(this, t2), "fx" === t2 && "inprogress" !== e3[0] && ce.dequeue(this, t2);
    });
  }, dequeue: function(e2) {
    return this.each(function() {
      ce.dequeue(this, e2);
    });
  }, clearQueue: function(e2) {
    return this.queue(e2 || "fx", []);
  }, promise: function(e2, t2) {
    var n2, r2 = 1, i2 = ce.Deferred(), o2 = this, a2 = this.length, s2 = function() {
      --r2 || i2.resolveWith(o2, [o2]);
    };
    "string" != typeof e2 && (t2 = e2, e2 = void 0), e2 = e2 || "fx";
    while (a2--) (n2 = _.get(o2[a2], e2 + "queueHooks")) && n2.empty && (r2++, n2.empty.add(s2));
    return s2(), i2.promise(t2);
  } });
  var G = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, Y = new RegExp("^(?:([+-])=|)(" + G + ")([a-z%]*)$", "i"), Q = ["Top", "Right", "Bottom", "Left"], J = C.documentElement, K = function(e2) {
    return ce.contains(e2.ownerDocument, e2);
  }, Z = { composed: true };
  J.getRootNode && (K = function(e2) {
    return ce.contains(e2.ownerDocument, e2) || e2.getRootNode(Z) === e2.ownerDocument;
  });
  var ee = function(e2, t2) {
    return "none" === (e2 = t2 || e2).style.display || "" === e2.style.display && K(e2) && "none" === ce.css(e2, "display");
  };
  function te(e2, t2, n2, r2) {
    var i2, o2, a2 = 20, s2 = r2 ? function() {
      return r2.cur();
    } : function() {
      return ce.css(e2, t2, "");
    }, u2 = s2(), l2 = n2 && n2[3] || (ce.cssNumber[t2] ? "" : "px"), c2 = e2.nodeType && (ce.cssNumber[t2] || "px" !== l2 && +u2) && Y.exec(ce.css(e2, t2));
    if (c2 && c2[3] !== l2) {
      u2 /= 2, l2 = l2 || c2[3], c2 = +u2 || 1;
      while (a2--) ce.style(e2, t2, c2 + l2), (1 - o2) * (1 - (o2 = s2() / u2 || 0.5)) <= 0 && (a2 = 0), c2 /= o2;
      c2 *= 2, ce.style(e2, t2, c2 + l2), n2 = n2 || [];
    }
    return n2 && (c2 = +c2 || +u2 || 0, i2 = n2[1] ? c2 + (n2[1] + 1) * n2[2] : +n2[2], r2 && (r2.unit = l2, r2.start = c2, r2.end = i2)), i2;
  }
  var ne = {};
  function re(e2, t2) {
    for (var n2, r2, i2, o2, a2, s2, u2, l2 = [], c2 = 0, f2 = e2.length; c2 < f2; c2++) (r2 = e2[c2]).style && (n2 = r2.style.display, t2 ? ("none" === n2 && (l2[c2] = _.get(r2, "display") || null, l2[c2] || (r2.style.display = "")), "" === r2.style.display && ee(r2) && (l2[c2] = (u2 = a2 = o2 = void 0, a2 = (i2 = r2).ownerDocument, s2 = i2.nodeName, (u2 = ne[s2]) || (o2 = a2.body.appendChild(a2.createElement(s2)), u2 = ce.css(o2, "display"), o2.parentNode.removeChild(o2), "none" === u2 && (u2 = "block"), ne[s2] = u2)))) : "none" !== n2 && (l2[c2] = "none", _.set(r2, "display", n2)));
    for (c2 = 0; c2 < f2; c2++) null != l2[c2] && (e2[c2].style.display = l2[c2]);
    return e2;
  }
  ce.fn.extend({ show: function() {
    return re(this, true);
  }, hide: function() {
    return re(this);
  }, toggle: function(e2) {
    return "boolean" == typeof e2 ? e2 ? this.show() : this.hide() : this.each(function() {
      ee(this) ? ce(this).show() : ce(this).hide();
    });
  } });
  var xe, be, we = /^(?:checkbox|radio)$/i, Te = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, Ce = /^$|^module$|\/(?:java|ecma)script/i;
  xe = C.createDocumentFragment().appendChild(C.createElement("div")), (be = C.createElement("input")).setAttribute("type", "radio"), be.setAttribute("checked", "checked"), be.setAttribute("name", "t"), xe.appendChild(be), le.checkClone = xe.cloneNode(true).cloneNode(true).lastChild.checked, xe.innerHTML = "<textarea>x</textarea>", le.noCloneChecked = !!xe.cloneNode(true).lastChild.defaultValue, xe.innerHTML = "<option></option>", le.option = !!xe.lastChild;
  var ke = { thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
  function Se(e2, t2) {
    var n2;
    return n2 = "undefined" != typeof e2.getElementsByTagName ? e2.getElementsByTagName(t2 || "*") : "undefined" != typeof e2.querySelectorAll ? e2.querySelectorAll(t2 || "*") : [], void 0 === t2 || t2 && fe(e2, t2) ? ce.merge([e2], n2) : n2;
  }
  function Ee(e2, t2) {
    for (var n2 = 0, r2 = e2.length; n2 < r2; n2++) _.set(e2[n2], "globalEval", !t2 || _.get(t2[n2], "globalEval"));
  }
  ke.tbody = ke.tfoot = ke.colgroup = ke.caption = ke.thead, ke.th = ke.td, le.option || (ke.optgroup = ke.option = [1, "<select multiple='multiple'>", "</select>"]);
  var je = /<|&#?\w+;/;
  function Ae(e2, t2, n2, r2, i2) {
    for (var o2, a2, s2, u2, l2, c2, f2 = t2.createDocumentFragment(), p2 = [], d2 = 0, h2 = e2.length; d2 < h2; d2++) if ((o2 = e2[d2]) || 0 === o2) if ("object" === x(o2)) ce.merge(p2, o2.nodeType ? [o2] : o2);
    else if (je.test(o2)) {
      a2 = a2 || f2.appendChild(t2.createElement("div")), s2 = (Te.exec(o2) || ["", ""])[1].toLowerCase(), u2 = ke[s2] || ke._default, a2.innerHTML = u2[1] + ce.htmlPrefilter(o2) + u2[2], c2 = u2[0];
      while (c2--) a2 = a2.lastChild;
      ce.merge(p2, a2.childNodes), (a2 = f2.firstChild).textContent = "";
    } else p2.push(t2.createTextNode(o2));
    f2.textContent = "", d2 = 0;
    while (o2 = p2[d2++]) if (r2 && -1 < ce.inArray(o2, r2)) i2 && i2.push(o2);
    else if (l2 = K(o2), a2 = Se(f2.appendChild(o2), "script"), l2 && Ee(a2), n2) {
      c2 = 0;
      while (o2 = a2[c2++]) Ce.test(o2.type || "") && n2.push(o2);
    }
    return f2;
  }
  var De = /^([^.]*)(?:\.(.+)|)/;
  function Ne() {
    return true;
  }
  function qe() {
    return false;
  }
  function Le(e2, t2, n2, r2, i2, o2) {
    var a2, s2;
    if ("object" == typeof t2) {
      for (s2 in "string" != typeof n2 && (r2 = r2 || n2, n2 = void 0), t2) Le(e2, s2, n2, r2, t2[s2], o2);
      return e2;
    }
    if (null == r2 && null == i2 ? (i2 = n2, r2 = n2 = void 0) : null == i2 && ("string" == typeof n2 ? (i2 = r2, r2 = void 0) : (i2 = r2, r2 = n2, n2 = void 0)), false === i2) i2 = qe;
    else if (!i2) return e2;
    return 1 === o2 && (a2 = i2, (i2 = function(e3) {
      return ce().off(e3), a2.apply(this, arguments);
    }).guid = a2.guid || (a2.guid = ce.guid++)), e2.each(function() {
      ce.event.add(this, t2, i2, r2, n2);
    });
  }
  function He(e2, r2, t2) {
    t2 ? (_.set(e2, r2, false), ce.event.add(e2, r2, { namespace: false, handler: function(e3) {
      var t3, n2 = _.get(this, r2);
      if (1 & e3.isTrigger && this[r2]) {
        if (n2) (ce.event.special[r2] || {}).delegateType && e3.stopPropagation();
        else if (n2 = ae.call(arguments), _.set(this, r2, n2), this[r2](), t3 = _.get(this, r2), _.set(this, r2, false), n2 !== t3) return e3.stopImmediatePropagation(), e3.preventDefault(), t3;
      } else n2 && (_.set(this, r2, ce.event.trigger(n2[0], n2.slice(1), this)), e3.stopPropagation(), e3.isImmediatePropagationStopped = Ne);
    } })) : void 0 === _.get(e2, r2) && ce.event.add(e2, r2, Ne);
  }
  ce.event = { global: {}, add: function(t2, e2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.get(t2);
    if ($(t2)) {
      n2.handler && (n2 = (o2 = n2).handler, i2 = o2.selector), i2 && ce.find.matchesSelector(J, i2), n2.guid || (n2.guid = ce.guid++), (u2 = v2.events) || (u2 = v2.events = /* @__PURE__ */ Object.create(null)), (a2 = v2.handle) || (a2 = v2.handle = function(e3) {
        return "undefined" != typeof ce && ce.event.triggered !== e3.type ? ce.event.dispatch.apply(t2, arguments) : void 0;
      }), l2 = (e2 = (e2 || "").match(D) || [""]).length;
      while (l2--) d2 = g2 = (s2 = De.exec(e2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2 && (f2 = ce.event.special[d2] || {}, d2 = (i2 ? f2.delegateType : f2.bindType) || d2, f2 = ce.event.special[d2] || {}, c2 = ce.extend({ type: d2, origType: g2, data: r2, handler: n2, guid: n2.guid, selector: i2, needsContext: i2 && ce.expr.match.needsContext.test(i2), namespace: h2.join(".") }, o2), (p2 = u2[d2]) || ((p2 = u2[d2] = []).delegateCount = 0, f2.setup && false !== f2.setup.call(t2, r2, h2, a2) || t2.addEventListener && t2.addEventListener(d2, a2)), f2.add && (f2.add.call(t2, c2), c2.handler.guid || (c2.handler.guid = n2.guid)), i2 ? p2.splice(p2.delegateCount++, 0, c2) : p2.push(c2), ce.event.global[d2] = true);
    }
  }, remove: function(e2, t2, n2, r2, i2) {
    var o2, a2, s2, u2, l2, c2, f2, p2, d2, h2, g2, v2 = _.hasData(e2) && _.get(e2);
    if (v2 && (u2 = v2.events)) {
      l2 = (t2 = (t2 || "").match(D) || [""]).length;
      while (l2--) if (d2 = g2 = (s2 = De.exec(t2[l2]) || [])[1], h2 = (s2[2] || "").split(".").sort(), d2) {
        f2 = ce.event.special[d2] || {}, p2 = u2[d2 = (r2 ? f2.delegateType : f2.bindType) || d2] || [], s2 = s2[2] && new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)"), a2 = o2 = p2.length;
        while (o2--) c2 = p2[o2], !i2 && g2 !== c2.origType || n2 && n2.guid !== c2.guid || s2 && !s2.test(c2.namespace) || r2 && r2 !== c2.selector && ("**" !== r2 || !c2.selector) || (p2.splice(o2, 1), c2.selector && p2.delegateCount--, f2.remove && f2.remove.call(e2, c2));
        a2 && !p2.length && (f2.teardown && false !== f2.teardown.call(e2, h2, v2.handle) || ce.removeEvent(e2, d2, v2.handle), delete u2[d2]);
      } else for (d2 in u2) ce.event.remove(e2, d2 + t2[l2], n2, r2, true);
      ce.isEmptyObject(u2) && _.remove(e2, "handle events");
    }
  }, dispatch: function(e2) {
    var t2, n2, r2, i2, o2, a2, s2 = new Array(arguments.length), u2 = ce.event.fix(e2), l2 = (_.get(this, "events") || /* @__PURE__ */ Object.create(null))[u2.type] || [], c2 = ce.event.special[u2.type] || {};
    for (s2[0] = u2, t2 = 1; t2 < arguments.length; t2++) s2[t2] = arguments[t2];
    if (u2.delegateTarget = this, !c2.preDispatch || false !== c2.preDispatch.call(this, u2)) {
      a2 = ce.event.handlers.call(this, u2, l2), t2 = 0;
      while ((i2 = a2[t2++]) && !u2.isPropagationStopped()) {
        u2.currentTarget = i2.elem, n2 = 0;
        while ((o2 = i2.handlers[n2++]) && !u2.isImmediatePropagationStopped()) u2.rnamespace && false !== o2.namespace && !u2.rnamespace.test(o2.namespace) || (u2.handleObj = o2, u2.data = o2.data, void 0 !== (r2 = ((ce.event.special[o2.origType] || {}).handle || o2.handler).apply(i2.elem, s2)) && false === (u2.result = r2) && (u2.preventDefault(), u2.stopPropagation()));
      }
      return c2.postDispatch && c2.postDispatch.call(this, u2), u2.result;
    }
  }, handlers: function(e2, t2) {
    var n2, r2, i2, o2, a2, s2 = [], u2 = t2.delegateCount, l2 = e2.target;
    if (u2 && l2.nodeType && !("click" === e2.type && 1 <= e2.button)) {
      for (; l2 !== this; l2 = l2.parentNode || this) if (1 === l2.nodeType && ("click" !== e2.type || true !== l2.disabled)) {
        for (o2 = [], a2 = {}, n2 = 0; n2 < u2; n2++) void 0 === a2[i2 = (r2 = t2[n2]).selector + " "] && (a2[i2] = r2.needsContext ? -1 < ce(i2, this).index(l2) : ce.find(i2, this, null, [l2]).length), a2[i2] && o2.push(r2);
        o2.length && s2.push({ elem: l2, handlers: o2 });
      }
    }
    return l2 = this, u2 < t2.length && s2.push({ elem: l2, handlers: t2.slice(u2) }), s2;
  }, addProp: function(t2, e2) {
    Object.defineProperty(ce.Event.prototype, t2, { enumerable: true, configurable: true, get: v(e2) ? function() {
      if (this.originalEvent) return e2(this.originalEvent);
    } : function() {
      if (this.originalEvent) return this.originalEvent[t2];
    }, set: function(e3) {
      Object.defineProperty(this, t2, { enumerable: true, configurable: true, writable: true, value: e3 });
    } });
  }, fix: function(e2) {
    return e2[ce.expando] ? e2 : new ce.Event(e2);
  }, special: { load: { noBubble: true }, click: { setup: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click", true), false;
  }, trigger: function(e2) {
    var t2 = this || e2;
    return we.test(t2.type) && t2.click && fe(t2, "input") && He(t2, "click"), true;
  }, _default: function(e2) {
    var t2 = e2.target;
    return we.test(t2.type) && t2.click && fe(t2, "input") && _.get(t2, "click") || fe(t2, "a");
  } }, beforeunload: { postDispatch: function(e2) {
    void 0 !== e2.result && e2.originalEvent && (e2.originalEvent.returnValue = e2.result);
  } } } }, ce.removeEvent = function(e2, t2, n2) {
    e2.removeEventListener && e2.removeEventListener(t2, n2);
  }, ce.Event = function(e2, t2) {
    if (!(this instanceof ce.Event)) return new ce.Event(e2, t2);
    e2 && e2.type ? (this.originalEvent = e2, this.type = e2.type, this.isDefaultPrevented = e2.defaultPrevented || void 0 === e2.defaultPrevented && false === e2.returnValue ? Ne : qe, this.target = e2.target && 3 === e2.target.nodeType ? e2.target.parentNode : e2.target, this.currentTarget = e2.currentTarget, this.relatedTarget = e2.relatedTarget) : this.type = e2, t2 && ce.extend(this, t2), this.timeStamp = e2 && e2.timeStamp || Date.now(), this[ce.expando] = true;
  }, ce.Event.prototype = { constructor: ce.Event, isDefaultPrevented: qe, isPropagationStopped: qe, isImmediatePropagationStopped: qe, isSimulated: false, preventDefault: function() {
    var e2 = this.originalEvent;
    this.isDefaultPrevented = Ne, e2 && !this.isSimulated && e2.preventDefault();
  }, stopPropagation: function() {
    var e2 = this.originalEvent;
    this.isPropagationStopped = Ne, e2 && !this.isSimulated && e2.stopPropagation();
  }, stopImmediatePropagation: function() {
    var e2 = this.originalEvent;
    this.isImmediatePropagationStopped = Ne, e2 && !this.isSimulated && e2.stopImmediatePropagation(), this.stopPropagation();
  } }, ce.each({ altKey: true, bubbles: true, cancelable: true, changedTouches: true, ctrlKey: true, detail: true, eventPhase: true, metaKey: true, pageX: true, pageY: true, shiftKey: true, view: true, "char": true, code: true, charCode: true, key: true, keyCode: true, button: true, buttons: true, clientX: true, clientY: true, offsetX: true, offsetY: true, pointerId: true, pointerType: true, screenX: true, screenY: true, targetTouches: true, toElement: true, touches: true, which: true }, ce.event.addProp), ce.each({ focus: "focusin", blur: "focusout" }, function(r2, i2) {
    function o2(e2) {
      if (C.documentMode) {
        var t2 = _.get(this, "handle"), n2 = ce.event.fix(e2);
        n2.type = "focusin" === e2.type ? "focus" : "blur", n2.isSimulated = true, t2(e2), n2.target === n2.currentTarget && t2(n2);
      } else ce.event.simulate(i2, e2.target, ce.event.fix(e2));
    }
    ce.event.special[r2] = { setup: function() {
      var e2;
      if (He(this, r2, true), !C.documentMode) return false;
      (e2 = _.get(this, i2)) || this.addEventListener(i2, o2), _.set(this, i2, (e2 || 0) + 1);
    }, trigger: function() {
      return He(this, r2), true;
    }, teardown: function() {
      var e2;
      if (!C.documentMode) return false;
      (e2 = _.get(this, i2) - 1) ? _.set(this, i2, e2) : (this.removeEventListener(i2, o2), _.remove(this, i2));
    }, _default: function(e2) {
      return _.get(e2.target, r2);
    }, delegateType: i2 }, ce.event.special[i2] = { setup: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2);
      n2 || (C.documentMode ? this.addEventListener(i2, o2) : e2.addEventListener(r2, o2, true)), _.set(t2, i2, (n2 || 0) + 1);
    }, teardown: function() {
      var e2 = this.ownerDocument || this.document || this, t2 = C.documentMode ? this : e2, n2 = _.get(t2, i2) - 1;
      n2 ? _.set(t2, i2, n2) : (C.documentMode ? this.removeEventListener(i2, o2) : e2.removeEventListener(r2, o2, true), _.remove(t2, i2));
    } };
  }), ce.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(e2, i2) {
    ce.event.special[e2] = { delegateType: i2, bindType: i2, handle: function(e3) {
      var t2, n2 = e3.relatedTarget, r2 = e3.handleObj;
      return n2 && (n2 === this || ce.contains(this, n2)) || (e3.type = r2.origType, t2 = r2.handler.apply(this, arguments), e3.type = i2), t2;
    } };
  }), ce.fn.extend({ on: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2);
  }, one: function(e2, t2, n2, r2) {
    return Le(this, e2, t2, n2, r2, 1);
  }, off: function(e2, t2, n2) {
    var r2, i2;
    if (e2 && e2.preventDefault && e2.handleObj) return r2 = e2.handleObj, ce(e2.delegateTarget).off(r2.namespace ? r2.origType + "." + r2.namespace : r2.origType, r2.selector, r2.handler), this;
    if ("object" == typeof e2) {
      for (i2 in e2) this.off(i2, t2, e2[i2]);
      return this;
    }
    return false !== t2 && "function" != typeof t2 || (n2 = t2, t2 = void 0), false === n2 && (n2 = qe), this.each(function() {
      ce.event.remove(this, e2, n2, t2);
    });
  } });
  var Oe = /<script|<style|<link/i, Pe = /checked\s*(?:[^=]|=\s*.checked.)/i, Me = /^\s*<!\[CDATA\[|\]\]>\s*$/g;
  function Re(e2, t2) {
    return fe(e2, "table") && fe(11 !== t2.nodeType ? t2 : t2.firstChild, "tr") && ce(e2).children("tbody")[0] || e2;
  }
  function Ie(e2) {
    return e2.type = (null !== e2.getAttribute("type")) + "/" + e2.type, e2;
  }
  function We(e2) {
    return "true/" === (e2.type || "").slice(0, 5) ? e2.type = e2.type.slice(5) : e2.removeAttribute("type"), e2;
  }
  function Fe(e2, t2) {
    var n2, r2, i2, o2, a2, s2;
    if (1 === t2.nodeType) {
      if (_.hasData(e2) && (s2 = _.get(e2).events)) for (i2 in _.remove(t2, "handle events"), s2) for (n2 = 0, r2 = s2[i2].length; n2 < r2; n2++) ce.event.add(t2, i2, s2[i2][n2]);
      z.hasData(e2) && (o2 = z.access(e2), a2 = ce.extend({}, o2), z.set(t2, a2));
    }
  }
  function $e(n2, r2, i2, o2) {
    r2 = g(r2);
    var e2, t2, a2, s2, u2, l2, c2 = 0, f2 = n2.length, p2 = f2 - 1, d2 = r2[0], h2 = v(d2);
    if (h2 || 1 < f2 && "string" == typeof d2 && !le.checkClone && Pe.test(d2)) return n2.each(function(e3) {
      var t3 = n2.eq(e3);
      h2 && (r2[0] = d2.call(this, e3, t3.html())), $e(t3, r2, i2, o2);
    });
    if (f2 && (t2 = (e2 = Ae(r2, n2[0].ownerDocument, false, n2, o2)).firstChild, 1 === e2.childNodes.length && (e2 = t2), t2 || o2)) {
      for (s2 = (a2 = ce.map(Se(e2, "script"), Ie)).length; c2 < f2; c2++) u2 = e2, c2 !== p2 && (u2 = ce.clone(u2, true, true), s2 && ce.merge(a2, Se(u2, "script"))), i2.call(n2[c2], u2, c2);
      if (s2) for (l2 = a2[a2.length - 1].ownerDocument, ce.map(a2, We), c2 = 0; c2 < s2; c2++) u2 = a2[c2], Ce.test(u2.type || "") && !_.access(u2, "globalEval") && ce.contains(l2, u2) && (u2.src && "module" !== (u2.type || "").toLowerCase() ? ce._evalUrl && !u2.noModule && ce._evalUrl(u2.src, { nonce: u2.nonce || u2.getAttribute("nonce") }, l2) : m(u2.textContent.replace(Me, ""), u2, l2));
    }
    return n2;
  }
  function Be(e2, t2, n2) {
    for (var r2, i2 = t2 ? ce.filter(t2, e2) : e2, o2 = 0; null != (r2 = i2[o2]); o2++) n2 || 1 !== r2.nodeType || ce.cleanData(Se(r2)), r2.parentNode && (n2 && K(r2) && Ee(Se(r2, "script")), r2.parentNode.removeChild(r2));
    return e2;
  }
  ce.extend({ htmlPrefilter: function(e2) {
    return e2;
  }, clone: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2 = e2.cloneNode(true), f2 = K(e2);
    if (!(le.noCloneChecked || 1 !== e2.nodeType && 11 !== e2.nodeType || ce.isXMLDoc(e2))) for (a2 = Se(c2), r2 = 0, i2 = (o2 = Se(e2)).length; r2 < i2; r2++) s2 = o2[r2], u2 = a2[r2], void 0, "input" === (l2 = u2.nodeName.toLowerCase()) && we.test(s2.type) ? u2.checked = s2.checked : "input" !== l2 && "textarea" !== l2 || (u2.defaultValue = s2.defaultValue);
    if (t2) if (n2) for (o2 = o2 || Se(e2), a2 = a2 || Se(c2), r2 = 0, i2 = o2.length; r2 < i2; r2++) Fe(o2[r2], a2[r2]);
    else Fe(e2, c2);
    return 0 < (a2 = Se(c2, "script")).length && Ee(a2, !f2 && Se(e2, "script")), c2;
  }, cleanData: function(e2) {
    for (var t2, n2, r2, i2 = ce.event.special, o2 = 0; void 0 !== (n2 = e2[o2]); o2++) if ($(n2)) {
      if (t2 = n2[_.expando]) {
        if (t2.events) for (r2 in t2.events) i2[r2] ? ce.event.remove(n2, r2) : ce.removeEvent(n2, r2, t2.handle);
        n2[_.expando] = void 0;
      }
      n2[z.expando] && (n2[z.expando] = void 0);
    }
  } }), ce.fn.extend({ detach: function(e2) {
    return Be(this, e2, true);
  }, remove: function(e2) {
    return Be(this, e2);
  }, text: function(e2) {
    return M(this, function(e3) {
      return void 0 === e3 ? ce.text(this) : this.empty().each(function() {
        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e3);
      });
    }, null, e2, arguments.length);
  }, append: function() {
    return $e(this, arguments, function(e2) {
      1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Re(this, e2).appendChild(e2);
    });
  }, prepend: function() {
    return $e(this, arguments, function(e2) {
      if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
        var t2 = Re(this, e2);
        t2.insertBefore(e2, t2.firstChild);
      }
    });
  }, before: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this);
    });
  }, after: function() {
    return $e(this, arguments, function(e2) {
      this.parentNode && this.parentNode.insertBefore(e2, this.nextSibling);
    });
  }, empty: function() {
    for (var e2, t2 = 0; null != (e2 = this[t2]); t2++) 1 === e2.nodeType && (ce.cleanData(Se(e2, false)), e2.textContent = "");
    return this;
  }, clone: function(e2, t2) {
    return e2 = null != e2 && e2, t2 = null == t2 ? e2 : t2, this.map(function() {
      return ce.clone(this, e2, t2);
    });
  }, html: function(e2) {
    return M(this, function(e3) {
      var t2 = this[0] || {}, n2 = 0, r2 = this.length;
      if (void 0 === e3 && 1 === t2.nodeType) return t2.innerHTML;
      if ("string" == typeof e3 && !Oe.test(e3) && !ke[(Te.exec(e3) || ["", ""])[1].toLowerCase()]) {
        e3 = ce.htmlPrefilter(e3);
        try {
          for (; n2 < r2; n2++) 1 === (t2 = this[n2] || {}).nodeType && (ce.cleanData(Se(t2, false)), t2.innerHTML = e3);
          t2 = 0;
        } catch (e4) {
        }
      }
      t2 && this.empty().append(e3);
    }, null, e2, arguments.length);
  }, replaceWith: function() {
    var n2 = [];
    return $e(this, arguments, function(e2) {
      var t2 = this.parentNode;
      ce.inArray(this, n2) < 0 && (ce.cleanData(Se(this)), t2 && t2.replaceChild(e2, this));
    }, n2);
  } }), ce.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(e2, a2) {
    ce.fn[e2] = function(e3) {
      for (var t2, n2 = [], r2 = ce(e3), i2 = r2.length - 1, o2 = 0; o2 <= i2; o2++) t2 = o2 === i2 ? this : this.clone(true), ce(r2[o2])[a2](t2), s.apply(n2, t2.get());
      return this.pushStack(n2);
    };
  });
  var _e = new RegExp("^(" + G + ")(?!px)[a-z%]+$", "i"), ze = /^--/, Xe = function(e2) {
    var t2 = e2.ownerDocument.defaultView;
    return t2 && t2.opener || (t2 = ie), t2.getComputedStyle(e2);
  }, Ue = function(e2, t2, n2) {
    var r2, i2, o2 = {};
    for (i2 in t2) o2[i2] = e2.style[i2], e2.style[i2] = t2[i2];
    for (i2 in r2 = n2.call(e2), t2) e2.style[i2] = o2[i2];
    return r2;
  }, Ve = new RegExp(Q.join("|"), "i");
  function Ge(e2, t2, n2) {
    var r2, i2, o2, a2, s2 = ze.test(t2), u2 = e2.style;
    return (n2 = n2 || Xe(e2)) && (a2 = n2.getPropertyValue(t2) || n2[t2], s2 && a2 && (a2 = a2.replace(ve, "$1") || void 0), "" !== a2 || K(e2) || (a2 = ce.style(e2, t2)), !le.pixelBoxStyles() && _e.test(a2) && Ve.test(t2) && (r2 = u2.width, i2 = u2.minWidth, o2 = u2.maxWidth, u2.minWidth = u2.maxWidth = u2.width = a2, a2 = n2.width, u2.width = r2, u2.minWidth = i2, u2.maxWidth = o2)), void 0 !== a2 ? a2 + "" : a2;
  }
  function Ye(e2, t2) {
    return { get: function() {
      if (!e2()) return (this.get = t2).apply(this, arguments);
      delete this.get;
    } };
  }
  !function() {
    function e2() {
      if (l2) {
        u2.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0", l2.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%", J.appendChild(u2).appendChild(l2);
        var e3 = ie.getComputedStyle(l2);
        n2 = "1%" !== e3.top, s2 = 12 === t2(e3.marginLeft), l2.style.right = "60%", o2 = 36 === t2(e3.right), r2 = 36 === t2(e3.width), l2.style.position = "absolute", i2 = 12 === t2(l2.offsetWidth / 3), J.removeChild(u2), l2 = null;
      }
    }
    function t2(e3) {
      return Math.round(parseFloat(e3));
    }
    var n2, r2, i2, o2, a2, s2, u2 = C.createElement("div"), l2 = C.createElement("div");
    l2.style && (l2.style.backgroundClip = "content-box", l2.cloneNode(true).style.backgroundClip = "", le.clearCloneStyle = "content-box" === l2.style.backgroundClip, ce.extend(le, { boxSizingReliable: function() {
      return e2(), r2;
    }, pixelBoxStyles: function() {
      return e2(), o2;
    }, pixelPosition: function() {
      return e2(), n2;
    }, reliableMarginLeft: function() {
      return e2(), s2;
    }, scrollboxSize: function() {
      return e2(), i2;
    }, reliableTrDimensions: function() {
      var e3, t3, n3, r3;
      return null == a2 && (e3 = C.createElement("table"), t3 = C.createElement("tr"), n3 = C.createElement("div"), e3.style.cssText = "position:absolute;left:-11111px;border-collapse:separate", t3.style.cssText = "box-sizing:content-box;border:1px solid", t3.style.height = "1px", n3.style.height = "9px", n3.style.display = "block", J.appendChild(e3).appendChild(t3).appendChild(n3), r3 = ie.getComputedStyle(t3), a2 = parseInt(r3.height, 10) + parseInt(r3.borderTopWidth, 10) + parseInt(r3.borderBottomWidth, 10) === t3.offsetHeight, J.removeChild(e3)), a2;
    } }));
  }();
  var Qe = ["Webkit", "Moz", "ms"], Je = C.createElement("div").style, Ke = {};
  function Ze(e2) {
    var t2 = ce.cssProps[e2] || Ke[e2];
    return t2 || (e2 in Je ? e2 : Ke[e2] = function(e3) {
      var t3 = e3[0].toUpperCase() + e3.slice(1), n2 = Qe.length;
      while (n2--) if ((e3 = Qe[n2] + t3) in Je) return e3;
    }(e2) || e2);
  }
  var et = /^(none|table(?!-c[ea]).+)/, tt = { position: "absolute", visibility: "hidden", display: "block" }, nt = { letterSpacing: "0", fontWeight: "400" };
  function rt(e2, t2, n2) {
    var r2 = Y.exec(t2);
    return r2 ? Math.max(0, r2[2] - (n2 || 0)) + (r2[3] || "px") : t2;
  }
  function it(e2, t2, n2, r2, i2, o2) {
    var a2 = "width" === t2 ? 1 : 0, s2 = 0, u2 = 0, l2 = 0;
    if (n2 === (r2 ? "border" : "content")) return 0;
    for (; a2 < 4; a2 += 2) "margin" === n2 && (l2 += ce.css(e2, n2 + Q[a2], true, i2)), r2 ? ("content" === n2 && (u2 -= ce.css(e2, "padding" + Q[a2], true, i2)), "margin" !== n2 && (u2 -= ce.css(e2, "border" + Q[a2] + "Width", true, i2))) : (u2 += ce.css(e2, "padding" + Q[a2], true, i2), "padding" !== n2 ? u2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2) : s2 += ce.css(e2, "border" + Q[a2] + "Width", true, i2));
    return !r2 && 0 <= o2 && (u2 += Math.max(0, Math.ceil(e2["offset" + t2[0].toUpperCase() + t2.slice(1)] - o2 - u2 - s2 - 0.5)) || 0), u2 + l2;
  }
  function ot(e2, t2, n2) {
    var r2 = Xe(e2), i2 = (!le.boxSizingReliable() || n2) && "border-box" === ce.css(e2, "boxSizing", false, r2), o2 = i2, a2 = Ge(e2, t2, r2), s2 = "offset" + t2[0].toUpperCase() + t2.slice(1);
    if (_e.test(a2)) {
      if (!n2) return a2;
      a2 = "auto";
    }
    return (!le.boxSizingReliable() && i2 || !le.reliableTrDimensions() && fe(e2, "tr") || "auto" === a2 || !parseFloat(a2) && "inline" === ce.css(e2, "display", false, r2)) && e2.getClientRects().length && (i2 = "border-box" === ce.css(e2, "boxSizing", false, r2), (o2 = s2 in e2) && (a2 = e2[s2])), (a2 = parseFloat(a2) || 0) + it(e2, t2, n2 || (i2 ? "border" : "content"), o2, r2, a2) + "px";
  }
  function at(e2, t2, n2, r2, i2) {
    return new at.prototype.init(e2, t2, n2, r2, i2);
  }
  ce.extend({ cssHooks: { opacity: { get: function(e2, t2) {
    if (t2) {
      var n2 = Ge(e2, "opacity");
      return "" === n2 ? "1" : n2;
    }
  } } }, cssNumber: { animationIterationCount: true, aspectRatio: true, borderImageSlice: true, columnCount: true, flexGrow: true, flexShrink: true, fontWeight: true, gridArea: true, gridColumn: true, gridColumnEnd: true, gridColumnStart: true, gridRow: true, gridRowEnd: true, gridRowStart: true, lineHeight: true, opacity: true, order: true, orphans: true, scale: true, widows: true, zIndex: true, zoom: true, fillOpacity: true, floodOpacity: true, stopOpacity: true, strokeMiterlimit: true, strokeOpacity: true }, cssProps: {}, style: function(e2, t2, n2, r2) {
    if (e2 && 3 !== e2.nodeType && 8 !== e2.nodeType && e2.style) {
      var i2, o2, a2, s2 = F(t2), u2 = ze.test(t2), l2 = e2.style;
      if (u2 || (t2 = Ze(s2)), a2 = ce.cssHooks[t2] || ce.cssHooks[s2], void 0 === n2) return a2 && "get" in a2 && void 0 !== (i2 = a2.get(e2, false, r2)) ? i2 : l2[t2];
      "string" === (o2 = typeof n2) && (i2 = Y.exec(n2)) && i2[1] && (n2 = te(e2, t2, i2), o2 = "number"), null != n2 && n2 == n2 && ("number" !== o2 || u2 || (n2 += i2 && i2[3] || (ce.cssNumber[s2] ? "" : "px")), le.clearCloneStyle || "" !== n2 || 0 !== t2.indexOf("background") || (l2[t2] = "inherit"), a2 && "set" in a2 && void 0 === (n2 = a2.set(e2, n2, r2)) || (u2 ? l2.setProperty(t2, n2) : l2[t2] = n2));
    }
  }, css: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2 = F(t2);
    return ze.test(t2) || (t2 = Ze(s2)), (a2 = ce.cssHooks[t2] || ce.cssHooks[s2]) && "get" in a2 && (i2 = a2.get(e2, true, n2)), void 0 === i2 && (i2 = Ge(e2, t2, r2)), "normal" === i2 && t2 in nt && (i2 = nt[t2]), "" === n2 || n2 ? (o2 = parseFloat(i2), true === n2 || isFinite(o2) ? o2 || 0 : i2) : i2;
  } }), ce.each(["height", "width"], function(e2, u2) {
    ce.cssHooks[u2] = { get: function(e3, t2, n2) {
      if (t2) return !et.test(ce.css(e3, "display")) || e3.getClientRects().length && e3.getBoundingClientRect().width ? ot(e3, u2, n2) : Ue(e3, tt, function() {
        return ot(e3, u2, n2);
      });
    }, set: function(e3, t2, n2) {
      var r2, i2 = Xe(e3), o2 = !le.scrollboxSize() && "absolute" === i2.position, a2 = (o2 || n2) && "border-box" === ce.css(e3, "boxSizing", false, i2), s2 = n2 ? it(e3, u2, n2, a2, i2) : 0;
      return a2 && o2 && (s2 -= Math.ceil(e3["offset" + u2[0].toUpperCase() + u2.slice(1)] - parseFloat(i2[u2]) - it(e3, u2, "border", false, i2) - 0.5)), s2 && (r2 = Y.exec(t2)) && "px" !== (r2[3] || "px") && (e3.style[u2] = t2, t2 = ce.css(e3, u2)), rt(0, t2, s2);
    } };
  }), ce.cssHooks.marginLeft = Ye(le.reliableMarginLeft, function(e2, t2) {
    if (t2) return (parseFloat(Ge(e2, "marginLeft")) || e2.getBoundingClientRect().left - Ue(e2, { marginLeft: 0 }, function() {
      return e2.getBoundingClientRect().left;
    })) + "px";
  }), ce.each({ margin: "", padding: "", border: "Width" }, function(i2, o2) {
    ce.cssHooks[i2 + o2] = { expand: function(e2) {
      for (var t2 = 0, n2 = {}, r2 = "string" == typeof e2 ? e2.split(" ") : [e2]; t2 < 4; t2++) n2[i2 + Q[t2] + o2] = r2[t2] || r2[t2 - 2] || r2[0];
      return n2;
    } }, "margin" !== i2 && (ce.cssHooks[i2 + o2].set = rt);
  }), ce.fn.extend({ css: function(e2, t2) {
    return M(this, function(e3, t3, n2) {
      var r2, i2, o2 = {}, a2 = 0;
      if (Array.isArray(t3)) {
        for (r2 = Xe(e3), i2 = t3.length; a2 < i2; a2++) o2[t3[a2]] = ce.css(e3, t3[a2], false, r2);
        return o2;
      }
      return void 0 !== n2 ? ce.style(e3, t3, n2) : ce.css(e3, t3);
    }, e2, t2, 1 < arguments.length);
  } }), ((ce.Tween = at).prototype = { constructor: at, init: function(e2, t2, n2, r2, i2, o2) {
    this.elem = e2, this.prop = n2, this.easing = i2 || ce.easing._default, this.options = t2, this.start = this.now = this.cur(), this.end = r2, this.unit = o2 || (ce.cssNumber[n2] ? "" : "px");
  }, cur: function() {
    var e2 = at.propHooks[this.prop];
    return e2 && e2.get ? e2.get(this) : at.propHooks._default.get(this);
  }, run: function(e2) {
    var t2, n2 = at.propHooks[this.prop];
    return this.options.duration ? this.pos = t2 = ce.easing[this.easing](e2, this.options.duration * e2, 0, 1, this.options.duration) : this.pos = t2 = e2, this.now = (this.end - this.start) * t2 + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n2 && n2.set ? n2.set(this) : at.propHooks._default.set(this), this;
  } }).init.prototype = at.prototype, (at.propHooks = { _default: { get: function(e2) {
    var t2;
    return 1 !== e2.elem.nodeType || null != e2.elem[e2.prop] && null == e2.elem.style[e2.prop] ? e2.elem[e2.prop] : (t2 = ce.css(e2.elem, e2.prop, "")) && "auto" !== t2 ? t2 : 0;
  }, set: function(e2) {
    ce.fx.step[e2.prop] ? ce.fx.step[e2.prop](e2) : 1 !== e2.elem.nodeType || !ce.cssHooks[e2.prop] && null == e2.elem.style[Ze(e2.prop)] ? e2.elem[e2.prop] = e2.now : ce.style(e2.elem, e2.prop, e2.now + e2.unit);
  } } }).scrollTop = at.propHooks.scrollLeft = { set: function(e2) {
    e2.elem.nodeType && e2.elem.parentNode && (e2.elem[e2.prop] = e2.now);
  } }, ce.easing = { linear: function(e2) {
    return e2;
  }, swing: function(e2) {
    return 0.5 - Math.cos(e2 * Math.PI) / 2;
  }, _default: "swing" }, ce.fx = at.prototype.init, ce.fx.step = {};
  var st, ut, lt, ct, ft = /^(?:toggle|show|hide)$/, pt = /queueHooks$/;
  function dt() {
    ut && (false === C.hidden && ie.requestAnimationFrame ? ie.requestAnimationFrame(dt) : ie.setTimeout(dt, ce.fx.interval), ce.fx.tick());
  }
  function ht() {
    return ie.setTimeout(function() {
      st = void 0;
    }), st = Date.now();
  }
  function gt(e2, t2) {
    var n2, r2 = 0, i2 = { height: e2 };
    for (t2 = t2 ? 1 : 0; r2 < 4; r2 += 2 - t2) i2["margin" + (n2 = Q[r2])] = i2["padding" + n2] = e2;
    return t2 && (i2.opacity = i2.width = e2), i2;
  }
  function vt(e2, t2, n2) {
    for (var r2, i2 = (yt.tweeners[t2] || []).concat(yt.tweeners["*"]), o2 = 0, a2 = i2.length; o2 < a2; o2++) if (r2 = i2[o2].call(n2, t2, e2)) return r2;
  }
  function yt(o2, e2, t2) {
    var n2, a2, r2 = 0, i2 = yt.prefilters.length, s2 = ce.Deferred().always(function() {
      delete u2.elem;
    }), u2 = function() {
      if (a2) return false;
      for (var e3 = st || ht(), t3 = Math.max(0, l2.startTime + l2.duration - e3), n3 = 1 - (t3 / l2.duration || 0), r3 = 0, i3 = l2.tweens.length; r3 < i3; r3++) l2.tweens[r3].run(n3);
      return s2.notifyWith(o2, [l2, n3, t3]), n3 < 1 && i3 ? t3 : (i3 || s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2]), false);
    }, l2 = s2.promise({ elem: o2, props: ce.extend({}, e2), opts: ce.extend(true, { specialEasing: {}, easing: ce.easing._default }, t2), originalProperties: e2, originalOptions: t2, startTime: st || ht(), duration: t2.duration, tweens: [], createTween: function(e3, t3) {
      var n3 = ce.Tween(o2, l2.opts, e3, t3, l2.opts.specialEasing[e3] || l2.opts.easing);
      return l2.tweens.push(n3), n3;
    }, stop: function(e3) {
      var t3 = 0, n3 = e3 ? l2.tweens.length : 0;
      if (a2) return this;
      for (a2 = true; t3 < n3; t3++) l2.tweens[t3].run(1);
      return e3 ? (s2.notifyWith(o2, [l2, 1, 0]), s2.resolveWith(o2, [l2, e3])) : s2.rejectWith(o2, [l2, e3]), this;
    } }), c2 = l2.props;
    for (!function(e3, t3) {
      var n3, r3, i3, o3, a3;
      for (n3 in e3) if (i3 = t3[r3 = F(n3)], o3 = e3[n3], Array.isArray(o3) && (i3 = o3[1], o3 = e3[n3] = o3[0]), n3 !== r3 && (e3[r3] = o3, delete e3[n3]), (a3 = ce.cssHooks[r3]) && "expand" in a3) for (n3 in o3 = a3.expand(o3), delete e3[r3], o3) n3 in e3 || (e3[n3] = o3[n3], t3[n3] = i3);
      else t3[r3] = i3;
    }(c2, l2.opts.specialEasing); r2 < i2; r2++) if (n2 = yt.prefilters[r2].call(l2, o2, c2, l2.opts)) return v(n2.stop) && (ce._queueHooks(l2.elem, l2.opts.queue).stop = n2.stop.bind(n2)), n2;
    return ce.map(c2, vt, l2), v(l2.opts.start) && l2.opts.start.call(o2, l2), l2.progress(l2.opts.progress).done(l2.opts.done, l2.opts.complete).fail(l2.opts.fail).always(l2.opts.always), ce.fx.timer(ce.extend(u2, { elem: o2, anim: l2, queue: l2.opts.queue })), l2;
  }
  ce.Animation = ce.extend(yt, { tweeners: { "*": [function(e2, t2) {
    var n2 = this.createTween(e2, t2);
    return te(n2.elem, e2, Y.exec(t2), n2), n2;
  }] }, tweener: function(e2, t2) {
    v(e2) ? (t2 = e2, e2 = ["*"]) : e2 = e2.match(D);
    for (var n2, r2 = 0, i2 = e2.length; r2 < i2; r2++) n2 = e2[r2], yt.tweeners[n2] = yt.tweeners[n2] || [], yt.tweeners[n2].unshift(t2);
  }, prefilters: [function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2, c2, f2 = "width" in t2 || "height" in t2, p2 = this, d2 = {}, h2 = e2.style, g2 = e2.nodeType && ee(e2), v2 = _.get(e2, "fxshow");
    for (r2 in n2.queue || (null == (a2 = ce._queueHooks(e2, "fx")).unqueued && (a2.unqueued = 0, s2 = a2.empty.fire, a2.empty.fire = function() {
      a2.unqueued || s2();
    }), a2.unqueued++, p2.always(function() {
      p2.always(function() {
        a2.unqueued--, ce.queue(e2, "fx").length || a2.empty.fire();
      });
    })), t2) if (i2 = t2[r2], ft.test(i2)) {
      if (delete t2[r2], o2 = o2 || "toggle" === i2, i2 === (g2 ? "hide" : "show")) {
        if ("show" !== i2 || !v2 || void 0 === v2[r2]) continue;
        g2 = true;
      }
      d2[r2] = v2 && v2[r2] || ce.style(e2, r2);
    }
    if ((u2 = !ce.isEmptyObject(t2)) || !ce.isEmptyObject(d2)) for (r2 in f2 && 1 === e2.nodeType && (n2.overflow = [h2.overflow, h2.overflowX, h2.overflowY], null == (l2 = v2 && v2.display) && (l2 = _.get(e2, "display")), "none" === (c2 = ce.css(e2, "display")) && (l2 ? c2 = l2 : (re([e2], true), l2 = e2.style.display || l2, c2 = ce.css(e2, "display"), re([e2]))), ("inline" === c2 || "inline-block" === c2 && null != l2) && "none" === ce.css(e2, "float") && (u2 || (p2.done(function() {
      h2.display = l2;
    }), null == l2 && (c2 = h2.display, l2 = "none" === c2 ? "" : c2)), h2.display = "inline-block")), n2.overflow && (h2.overflow = "hidden", p2.always(function() {
      h2.overflow = n2.overflow[0], h2.overflowX = n2.overflow[1], h2.overflowY = n2.overflow[2];
    })), u2 = false, d2) u2 || (v2 ? "hidden" in v2 && (g2 = v2.hidden) : v2 = _.access(e2, "fxshow", { display: l2 }), o2 && (v2.hidden = !g2), g2 && re([e2], true), p2.done(function() {
      for (r2 in g2 || re([e2]), _.remove(e2, "fxshow"), d2) ce.style(e2, r2, d2[r2]);
    })), u2 = vt(g2 ? v2[r2] : 0, r2, p2), r2 in v2 || (v2[r2] = u2.start, g2 && (u2.end = u2.start, u2.start = 0));
  }], prefilter: function(e2, t2) {
    t2 ? yt.prefilters.unshift(e2) : yt.prefilters.push(e2);
  } }), ce.speed = function(e2, t2, n2) {
    var r2 = e2 && "object" == typeof e2 ? ce.extend({}, e2) : { complete: n2 || !n2 && t2 || v(e2) && e2, duration: e2, easing: n2 && t2 || t2 && !v(t2) && t2 };
    return ce.fx.off ? r2.duration = 0 : "number" != typeof r2.duration && (r2.duration in ce.fx.speeds ? r2.duration = ce.fx.speeds[r2.duration] : r2.duration = ce.fx.speeds._default), null != r2.queue && true !== r2.queue || (r2.queue = "fx"), r2.old = r2.complete, r2.complete = function() {
      v(r2.old) && r2.old.call(this), r2.queue && ce.dequeue(this, r2.queue);
    }, r2;
  }, ce.fn.extend({ fadeTo: function(e2, t2, n2, r2) {
    return this.filter(ee).css("opacity", 0).show().end().animate({ opacity: t2 }, e2, n2, r2);
  }, animate: function(t2, e2, n2, r2) {
    var i2 = ce.isEmptyObject(t2), o2 = ce.speed(e2, n2, r2), a2 = function() {
      var e3 = yt(this, ce.extend({}, t2), o2);
      (i2 || _.get(this, "finish")) && e3.stop(true);
    };
    return a2.finish = a2, i2 || false === o2.queue ? this.each(a2) : this.queue(o2.queue, a2);
  }, stop: function(i2, e2, o2) {
    var a2 = function(e3) {
      var t2 = e3.stop;
      delete e3.stop, t2(o2);
    };
    return "string" != typeof i2 && (o2 = e2, e2 = i2, i2 = void 0), e2 && this.queue(i2 || "fx", []), this.each(function() {
      var e3 = true, t2 = null != i2 && i2 + "queueHooks", n2 = ce.timers, r2 = _.get(this);
      if (t2) r2[t2] && r2[t2].stop && a2(r2[t2]);
      else for (t2 in r2) r2[t2] && r2[t2].stop && pt.test(t2) && a2(r2[t2]);
      for (t2 = n2.length; t2--; ) n2[t2].elem !== this || null != i2 && n2[t2].queue !== i2 || (n2[t2].anim.stop(o2), e3 = false, n2.splice(t2, 1));
      !e3 && o2 || ce.dequeue(this, i2);
    });
  }, finish: function(a2) {
    return false !== a2 && (a2 = a2 || "fx"), this.each(function() {
      var e2, t2 = _.get(this), n2 = t2[a2 + "queue"], r2 = t2[a2 + "queueHooks"], i2 = ce.timers, o2 = n2 ? n2.length : 0;
      for (t2.finish = true, ce.queue(this, a2, []), r2 && r2.stop && r2.stop.call(this, true), e2 = i2.length; e2--; ) i2[e2].elem === this && i2[e2].queue === a2 && (i2[e2].anim.stop(true), i2.splice(e2, 1));
      for (e2 = 0; e2 < o2; e2++) n2[e2] && n2[e2].finish && n2[e2].finish.call(this);
      delete t2.finish;
    });
  } }), ce.each(["toggle", "show", "hide"], function(e2, r2) {
    var i2 = ce.fn[r2];
    ce.fn[r2] = function(e3, t2, n2) {
      return null == e3 || "boolean" == typeof e3 ? i2.apply(this, arguments) : this.animate(gt(r2, true), e3, t2, n2);
    };
  }), ce.each({ slideDown: gt("show"), slideUp: gt("hide"), slideToggle: gt("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(e2, r2) {
    ce.fn[e2] = function(e3, t2, n2) {
      return this.animate(r2, e3, t2, n2);
    };
  }), ce.timers = [], ce.fx.tick = function() {
    var e2, t2 = 0, n2 = ce.timers;
    for (st = Date.now(); t2 < n2.length; t2++) (e2 = n2[t2])() || n2[t2] !== e2 || n2.splice(t2--, 1);
    n2.length || ce.fx.stop(), st = void 0;
  }, ce.fx.timer = function(e2) {
    ce.timers.push(e2), ce.fx.start();
  }, ce.fx.interval = 13, ce.fx.start = function() {
    ut || (ut = true, dt());
  }, ce.fx.stop = function() {
    ut = null;
  }, ce.fx.speeds = { slow: 600, fast: 200, _default: 400 }, ce.fn.delay = function(r2, e2) {
    return r2 = ce.fx && ce.fx.speeds[r2] || r2, e2 = e2 || "fx", this.queue(e2, function(e3, t2) {
      var n2 = ie.setTimeout(e3, r2);
      t2.stop = function() {
        ie.clearTimeout(n2);
      };
    });
  }, lt = C.createElement("input"), ct = C.createElement("select").appendChild(C.createElement("option")), lt.type = "checkbox", le.checkOn = "" !== lt.value, le.optSelected = ct.selected, (lt = C.createElement("input")).value = "t", lt.type = "radio", le.radioValue = "t" === lt.value;
  var mt, xt = ce.expr.attrHandle;
  ce.fn.extend({ attr: function(e2, t2) {
    return M(this, ce.attr, e2, t2, 1 < arguments.length);
  }, removeAttr: function(e2) {
    return this.each(function() {
      ce.removeAttr(this, e2);
    });
  } }), ce.extend({ attr: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return "undefined" == typeof e2.getAttribute ? ce.prop(e2, t2, n2) : (1 === o2 && ce.isXMLDoc(e2) || (i2 = ce.attrHooks[t2.toLowerCase()] || (ce.expr.match.bool.test(t2) ? mt : void 0)), void 0 !== n2 ? null === n2 ? void ce.removeAttr(e2, t2) : i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : (e2.setAttribute(t2, n2 + ""), n2) : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : null == (r2 = ce.find.attr(e2, t2)) ? void 0 : r2);
  }, attrHooks: { type: { set: function(e2, t2) {
    if (!le.radioValue && "radio" === t2 && fe(e2, "input")) {
      var n2 = e2.value;
      return e2.setAttribute("type", t2), n2 && (e2.value = n2), t2;
    }
  } } }, removeAttr: function(e2, t2) {
    var n2, r2 = 0, i2 = t2 && t2.match(D);
    if (i2 && 1 === e2.nodeType) while (n2 = i2[r2++]) e2.removeAttribute(n2);
  } }), mt = { set: function(e2, t2, n2) {
    return false === t2 ? ce.removeAttr(e2, n2) : e2.setAttribute(n2, n2), n2;
  } }, ce.each(ce.expr.match.bool.source.match(/\w+/g), function(e2, t2) {
    var a2 = xt[t2] || ce.find.attr;
    xt[t2] = function(e3, t3, n2) {
      var r2, i2, o2 = t3.toLowerCase();
      return n2 || (i2 = xt[o2], xt[o2] = r2, r2 = null != a2(e3, t3, n2) ? o2 : null, xt[o2] = i2), r2;
    };
  });
  var bt = /^(?:input|select|textarea|button)$/i, wt = /^(?:a|area)$/i;
  function Tt(e2) {
    return (e2.match(D) || []).join(" ");
  }
  function Ct(e2) {
    return e2.getAttribute && e2.getAttribute("class") || "";
  }
  function kt(e2) {
    return Array.isArray(e2) ? e2 : "string" == typeof e2 && e2.match(D) || [];
  }
  ce.fn.extend({ prop: function(e2, t2) {
    return M(this, ce.prop, e2, t2, 1 < arguments.length);
  }, removeProp: function(e2) {
    return this.each(function() {
      delete this[ce.propFix[e2] || e2];
    });
  } }), ce.extend({ prop: function(e2, t2, n2) {
    var r2, i2, o2 = e2.nodeType;
    if (3 !== o2 && 8 !== o2 && 2 !== o2) return 1 === o2 && ce.isXMLDoc(e2) || (t2 = ce.propFix[t2] || t2, i2 = ce.propHooks[t2]), void 0 !== n2 ? i2 && "set" in i2 && void 0 !== (r2 = i2.set(e2, n2, t2)) ? r2 : e2[t2] = n2 : i2 && "get" in i2 && null !== (r2 = i2.get(e2, t2)) ? r2 : e2[t2];
  }, propHooks: { tabIndex: { get: function(e2) {
    var t2 = ce.find.attr(e2, "tabindex");
    return t2 ? parseInt(t2, 10) : bt.test(e2.nodeName) || wt.test(e2.nodeName) && e2.href ? 0 : -1;
  } } }, propFix: { "for": "htmlFor", "class": "className" } }), le.optSelected || (ce.propHooks.selected = { get: function(e2) {
    var t2 = e2.parentNode;
    return t2 && t2.parentNode && t2.parentNode.selectedIndex, null;
  }, set: function(e2) {
    var t2 = e2.parentNode;
    t2 && (t2.selectedIndex, t2.parentNode && t2.parentNode.selectedIndex);
  } }), ce.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
    ce.propFix[this.toLowerCase()] = this;
  }), ce.fn.extend({ addClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).addClass(t2.call(this, e3, Ct(this)));
    }) : (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) i2 = e2[o2], n2.indexOf(" " + i2 + " ") < 0 && (n2 += i2 + " ");
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this;
  }, removeClass: function(t2) {
    var e2, n2, r2, i2, o2, a2;
    return v(t2) ? this.each(function(e3) {
      ce(this).removeClass(t2.call(this, e3, Ct(this)));
    }) : arguments.length ? (e2 = kt(t2)).length ? this.each(function() {
      if (r2 = Ct(this), n2 = 1 === this.nodeType && " " + Tt(r2) + " ") {
        for (o2 = 0; o2 < e2.length; o2++) {
          i2 = e2[o2];
          while (-1 < n2.indexOf(" " + i2 + " ")) n2 = n2.replace(" " + i2 + " ", " ");
        }
        a2 = Tt(n2), r2 !== a2 && this.setAttribute("class", a2);
      }
    }) : this : this.attr("class", "");
  }, toggleClass: function(t2, n2) {
    var e2, r2, i2, o2, a2 = typeof t2, s2 = "string" === a2 || Array.isArray(t2);
    return v(t2) ? this.each(function(e3) {
      ce(this).toggleClass(t2.call(this, e3, Ct(this), n2), n2);
    }) : "boolean" == typeof n2 && s2 ? n2 ? this.addClass(t2) : this.removeClass(t2) : (e2 = kt(t2), this.each(function() {
      if (s2) for (o2 = ce(this), i2 = 0; i2 < e2.length; i2++) r2 = e2[i2], o2.hasClass(r2) ? o2.removeClass(r2) : o2.addClass(r2);
      else void 0 !== t2 && "boolean" !== a2 || ((r2 = Ct(this)) && _.set(this, "__className__", r2), this.setAttribute && this.setAttribute("class", r2 || false === t2 ? "" : _.get(this, "__className__") || ""));
    }));
  }, hasClass: function(e2) {
    var t2, n2, r2 = 0;
    t2 = " " + e2 + " ";
    while (n2 = this[r2++]) if (1 === n2.nodeType && -1 < (" " + Tt(Ct(n2)) + " ").indexOf(t2)) return true;
    return false;
  } });
  var St = /\r/g;
  ce.fn.extend({ val: function(n2) {
    var r2, e2, i2, t2 = this[0];
    return arguments.length ? (i2 = v(n2), this.each(function(e3) {
      var t3;
      1 === this.nodeType && (null == (t3 = i2 ? n2.call(this, e3, ce(this).val()) : n2) ? t3 = "" : "number" == typeof t3 ? t3 += "" : Array.isArray(t3) && (t3 = ce.map(t3, function(e4) {
        return null == e4 ? "" : e4 + "";
      })), (r2 = ce.valHooks[this.type] || ce.valHooks[this.nodeName.toLowerCase()]) && "set" in r2 && void 0 !== r2.set(this, t3, "value") || (this.value = t3));
    })) : t2 ? (r2 = ce.valHooks[t2.type] || ce.valHooks[t2.nodeName.toLowerCase()]) && "get" in r2 && void 0 !== (e2 = r2.get(t2, "value")) ? e2 : "string" == typeof (e2 = t2.value) ? e2.replace(St, "") : null == e2 ? "" : e2 : void 0;
  } }), ce.extend({ valHooks: { option: { get: function(e2) {
    var t2 = ce.find.attr(e2, "value");
    return null != t2 ? t2 : Tt(ce.text(e2));
  } }, select: { get: function(e2) {
    var t2, n2, r2, i2 = e2.options, o2 = e2.selectedIndex, a2 = "select-one" === e2.type, s2 = a2 ? null : [], u2 = a2 ? o2 + 1 : i2.length;
    for (r2 = o2 < 0 ? u2 : a2 ? o2 : 0; r2 < u2; r2++) if (((n2 = i2[r2]).selected || r2 === o2) && !n2.disabled && (!n2.parentNode.disabled || !fe(n2.parentNode, "optgroup"))) {
      if (t2 = ce(n2).val(), a2) return t2;
      s2.push(t2);
    }
    return s2;
  }, set: function(e2, t2) {
    var n2, r2, i2 = e2.options, o2 = ce.makeArray(t2), a2 = i2.length;
    while (a2--) ((r2 = i2[a2]).selected = -1 < ce.inArray(ce.valHooks.option.get(r2), o2)) && (n2 = true);
    return n2 || (e2.selectedIndex = -1), o2;
  } } } }), ce.each(["radio", "checkbox"], function() {
    ce.valHooks[this] = { set: function(e2, t2) {
      if (Array.isArray(t2)) return e2.checked = -1 < ce.inArray(ce(e2).val(), t2);
    } }, le.checkOn || (ce.valHooks[this].get = function(e2) {
      return null === e2.getAttribute("value") ? "on" : e2.value;
    });
  });
  var Et = ie.location, jt = { guid: Date.now() }, At = /\?/;
  ce.parseXML = function(e2) {
    var t2, n2;
    if (!e2 || "string" != typeof e2) return null;
    try {
      t2 = new ie.DOMParser().parseFromString(e2, "text/xml");
    } catch (e3) {
    }
    return n2 = t2 && t2.getElementsByTagName("parsererror")[0], t2 && !n2 || ce.error("Invalid XML: " + (n2 ? ce.map(n2.childNodes, function(e3) {
      return e3.textContent;
    }).join("\n") : e2)), t2;
  };
  var Dt = /^(?:focusinfocus|focusoutblur)$/, Nt = function(e2) {
    e2.stopPropagation();
  };
  ce.extend(ce.event, { trigger: function(e2, t2, n2, r2) {
    var i2, o2, a2, s2, u2, l2, c2, f2, p2 = [n2 || C], d2 = ue.call(e2, "type") ? e2.type : e2, h2 = ue.call(e2, "namespace") ? e2.namespace.split(".") : [];
    if (o2 = f2 = a2 = n2 = n2 || C, 3 !== n2.nodeType && 8 !== n2.nodeType && !Dt.test(d2 + ce.event.triggered) && (-1 < d2.indexOf(".") && (d2 = (h2 = d2.split(".")).shift(), h2.sort()), u2 = d2.indexOf(":") < 0 && "on" + d2, (e2 = e2[ce.expando] ? e2 : new ce.Event(d2, "object" == typeof e2 && e2)).isTrigger = r2 ? 2 : 3, e2.namespace = h2.join("."), e2.rnamespace = e2.namespace ? new RegExp("(^|\\.)" + h2.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e2.result = void 0, e2.target || (e2.target = n2), t2 = null == t2 ? [e2] : ce.makeArray(t2, [e2]), c2 = ce.event.special[d2] || {}, r2 || !c2.trigger || false !== c2.trigger.apply(n2, t2))) {
      if (!r2 && !c2.noBubble && !y(n2)) {
        for (s2 = c2.delegateType || d2, Dt.test(s2 + d2) || (o2 = o2.parentNode); o2; o2 = o2.parentNode) p2.push(o2), a2 = o2;
        a2 === (n2.ownerDocument || C) && p2.push(a2.defaultView || a2.parentWindow || ie);
      }
      i2 = 0;
      while ((o2 = p2[i2++]) && !e2.isPropagationStopped()) f2 = o2, e2.type = 1 < i2 ? s2 : c2.bindType || d2, (l2 = (_.get(o2, "events") || /* @__PURE__ */ Object.create(null))[e2.type] && _.get(o2, "handle")) && l2.apply(o2, t2), (l2 = u2 && o2[u2]) && l2.apply && $(o2) && (e2.result = l2.apply(o2, t2), false === e2.result && e2.preventDefault());
      return e2.type = d2, r2 || e2.isDefaultPrevented() || c2._default && false !== c2._default.apply(p2.pop(), t2) || !$(n2) || u2 && v(n2[d2]) && !y(n2) && ((a2 = n2[u2]) && (n2[u2] = null), ce.event.triggered = d2, e2.isPropagationStopped() && f2.addEventListener(d2, Nt), n2[d2](), e2.isPropagationStopped() && f2.removeEventListener(d2, Nt), ce.event.triggered = void 0, a2 && (n2[u2] = a2)), e2.result;
    }
  }, simulate: function(e2, t2, n2) {
    var r2 = ce.extend(new ce.Event(), n2, { type: e2, isSimulated: true });
    ce.event.trigger(r2, null, t2);
  } }), ce.fn.extend({ trigger: function(e2, t2) {
    return this.each(function() {
      ce.event.trigger(e2, t2, this);
    });
  }, triggerHandler: function(e2, t2) {
    var n2 = this[0];
    if (n2) return ce.event.trigger(e2, t2, n2, true);
  } });
  var qt = /\[\]$/, Lt = /\r?\n/g, Ht = /^(?:submit|button|image|reset|file)$/i, Ot = /^(?:input|select|textarea|keygen)/i;
  function Pt(n2, e2, r2, i2) {
    var t2;
    if (Array.isArray(e2)) ce.each(e2, function(e3, t3) {
      r2 || qt.test(n2) ? i2(n2, t3) : Pt(n2 + "[" + ("object" == typeof t3 && null != t3 ? e3 : "") + "]", t3, r2, i2);
    });
    else if (r2 || "object" !== x(e2)) i2(n2, e2);
    else for (t2 in e2) Pt(n2 + "[" + t2 + "]", e2[t2], r2, i2);
  }
  ce.param = function(e2, t2) {
    var n2, r2 = [], i2 = function(e3, t3) {
      var n3 = v(t3) ? t3() : t3;
      r2[r2.length] = encodeURIComponent(e3) + "=" + encodeURIComponent(null == n3 ? "" : n3);
    };
    if (null == e2) return "";
    if (Array.isArray(e2) || e2.jquery && !ce.isPlainObject(e2)) ce.each(e2, function() {
      i2(this.name, this.value);
    });
    else for (n2 in e2) Pt(n2, e2[n2], t2, i2);
    return r2.join("&");
  }, ce.fn.extend({ serialize: function() {
    return ce.param(this.serializeArray());
  }, serializeArray: function() {
    return this.map(function() {
      var e2 = ce.prop(this, "elements");
      return e2 ? ce.makeArray(e2) : this;
    }).filter(function() {
      var e2 = this.type;
      return this.name && !ce(this).is(":disabled") && Ot.test(this.nodeName) && !Ht.test(e2) && (this.checked || !we.test(e2));
    }).map(function(e2, t2) {
      var n2 = ce(this).val();
      return null == n2 ? null : Array.isArray(n2) ? ce.map(n2, function(e3) {
        return { name: t2.name, value: e3.replace(Lt, "\r\n") };
      }) : { name: t2.name, value: n2.replace(Lt, "\r\n") };
    }).get();
  } });
  var Mt = /%20/g, Rt = /#.*$/, It = /([?&])_=[^&]*/, Wt = /^(.*?):[ \t]*([^\r\n]*)$/gm, Ft = /^(?:GET|HEAD)$/, $t = /^\/\//, Bt = {}, _t = {}, zt = "*/".concat("*"), Xt = C.createElement("a");
  function Ut(o2) {
    return function(e2, t2) {
      "string" != typeof e2 && (t2 = e2, e2 = "*");
      var n2, r2 = 0, i2 = e2.toLowerCase().match(D) || [];
      if (v(t2)) while (n2 = i2[r2++]) "+" === n2[0] ? (n2 = n2.slice(1) || "*", (o2[n2] = o2[n2] || []).unshift(t2)) : (o2[n2] = o2[n2] || []).push(t2);
    };
  }
  function Vt(t2, i2, o2, a2) {
    var s2 = {}, u2 = t2 === _t;
    function l2(e2) {
      var r2;
      return s2[e2] = true, ce.each(t2[e2] || [], function(e3, t3) {
        var n2 = t3(i2, o2, a2);
        return "string" != typeof n2 || u2 || s2[n2] ? u2 ? !(r2 = n2) : void 0 : (i2.dataTypes.unshift(n2), l2(n2), false);
      }), r2;
    }
    return l2(i2.dataTypes[0]) || !s2["*"] && l2("*");
  }
  function Gt(e2, t2) {
    var n2, r2, i2 = ce.ajaxSettings.flatOptions || {};
    for (n2 in t2) void 0 !== t2[n2] && ((i2[n2] ? e2 : r2 || (r2 = {}))[n2] = t2[n2]);
    return r2 && ce.extend(true, e2, r2), e2;
  }
  Xt.href = Et.href, ce.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: Et.href, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol), global: true, processData: true, async: true, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": zt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": true, "text json": JSON.parse, "text xml": ce.parseXML }, flatOptions: { url: true, context: true } }, ajaxSetup: function(e2, t2) {
    return t2 ? Gt(Gt(e2, ce.ajaxSettings), t2) : Gt(ce.ajaxSettings, e2);
  }, ajaxPrefilter: Ut(Bt), ajaxTransport: Ut(_t), ajax: function(e2, t2) {
    "object" == typeof e2 && (t2 = e2, e2 = void 0), t2 = t2 || {};
    var c2, f2, p2, n2, d2, r2, h2, g2, i2, o2, v2 = ce.ajaxSetup({}, t2), y2 = v2.context || v2, m2 = v2.context && (y2.nodeType || y2.jquery) ? ce(y2) : ce.event, x2 = ce.Deferred(), b2 = ce.Callbacks("once memory"), w2 = v2.statusCode || {}, a2 = {}, s2 = {}, u2 = "canceled", T2 = { readyState: 0, getResponseHeader: function(e3) {
      var t3;
      if (h2) {
        if (!n2) {
          n2 = {};
          while (t3 = Wt.exec(p2)) n2[t3[1].toLowerCase() + " "] = (n2[t3[1].toLowerCase() + " "] || []).concat(t3[2]);
        }
        t3 = n2[e3.toLowerCase() + " "];
      }
      return null == t3 ? null : t3.join(", ");
    }, getAllResponseHeaders: function() {
      return h2 ? p2 : null;
    }, setRequestHeader: function(e3, t3) {
      return null == h2 && (e3 = s2[e3.toLowerCase()] = s2[e3.toLowerCase()] || e3, a2[e3] = t3), this;
    }, overrideMimeType: function(e3) {
      return null == h2 && (v2.mimeType = e3), this;
    }, statusCode: function(e3) {
      var t3;
      if (e3) if (h2) T2.always(e3[T2.status]);
      else for (t3 in e3) w2[t3] = [w2[t3], e3[t3]];
      return this;
    }, abort: function(e3) {
      var t3 = e3 || u2;
      return c2 && c2.abort(t3), l2(0, t3), this;
    } };
    if (x2.promise(T2), v2.url = ((e2 || v2.url || Et.href) + "").replace($t, Et.protocol + "//"), v2.type = t2.method || t2.type || v2.method || v2.type, v2.dataTypes = (v2.dataType || "*").toLowerCase().match(D) || [""], null == v2.crossDomain) {
      r2 = C.createElement("a");
      try {
        r2.href = v2.url, r2.href = r2.href, v2.crossDomain = Xt.protocol + "//" + Xt.host != r2.protocol + "//" + r2.host;
      } catch (e3) {
        v2.crossDomain = true;
      }
    }
    if (v2.data && v2.processData && "string" != typeof v2.data && (v2.data = ce.param(v2.data, v2.traditional)), Vt(Bt, v2, t2, T2), h2) return T2;
    for (i2 in (g2 = ce.event && v2.global) && 0 == ce.active++ && ce.event.trigger("ajaxStart"), v2.type = v2.type.toUpperCase(), v2.hasContent = !Ft.test(v2.type), f2 = v2.url.replace(Rt, ""), v2.hasContent ? v2.data && v2.processData && 0 === (v2.contentType || "").indexOf("application/x-www-form-urlencoded") && (v2.data = v2.data.replace(Mt, "+")) : (o2 = v2.url.slice(f2.length), v2.data && (v2.processData || "string" == typeof v2.data) && (f2 += (At.test(f2) ? "&" : "?") + v2.data, delete v2.data), false === v2.cache && (f2 = f2.replace(It, "$1"), o2 = (At.test(f2) ? "&" : "?") + "_=" + jt.guid++ + o2), v2.url = f2 + o2), v2.ifModified && (ce.lastModified[f2] && T2.setRequestHeader("If-Modified-Since", ce.lastModified[f2]), ce.etag[f2] && T2.setRequestHeader("If-None-Match", ce.etag[f2])), (v2.data && v2.hasContent && false !== v2.contentType || t2.contentType) && T2.setRequestHeader("Content-Type", v2.contentType), T2.setRequestHeader("Accept", v2.dataTypes[0] && v2.accepts[v2.dataTypes[0]] ? v2.accepts[v2.dataTypes[0]] + ("*" !== v2.dataTypes[0] ? ", " + zt + "; q=0.01" : "") : v2.accepts["*"]), v2.headers) T2.setRequestHeader(i2, v2.headers[i2]);
    if (v2.beforeSend && (false === v2.beforeSend.call(y2, T2, v2) || h2)) return T2.abort();
    if (u2 = "abort", b2.add(v2.complete), T2.done(v2.success), T2.fail(v2.error), c2 = Vt(_t, v2, t2, T2)) {
      if (T2.readyState = 1, g2 && m2.trigger("ajaxSend", [T2, v2]), h2) return T2;
      v2.async && 0 < v2.timeout && (d2 = ie.setTimeout(function() {
        T2.abort("timeout");
      }, v2.timeout));
      try {
        h2 = false, c2.send(a2, l2);
      } catch (e3) {
        if (h2) throw e3;
        l2(-1, e3);
      }
    } else l2(-1, "No Transport");
    function l2(e3, t3, n3, r3) {
      var i3, o3, a3, s3, u3, l3 = t3;
      h2 || (h2 = true, d2 && ie.clearTimeout(d2), c2 = void 0, p2 = r3 || "", T2.readyState = 0 < e3 ? 4 : 0, i3 = 200 <= e3 && e3 < 300 || 304 === e3, n3 && (s3 = function(e4, t4, n4) {
        var r4, i4, o4, a4, s4 = e4.contents, u4 = e4.dataTypes;
        while ("*" === u4[0]) u4.shift(), void 0 === r4 && (r4 = e4.mimeType || t4.getResponseHeader("Content-Type"));
        if (r4) {
          for (i4 in s4) if (s4[i4] && s4[i4].test(r4)) {
            u4.unshift(i4);
            break;
          }
        }
        if (u4[0] in n4) o4 = u4[0];
        else {
          for (i4 in n4) {
            if (!u4[0] || e4.converters[i4 + " " + u4[0]]) {
              o4 = i4;
              break;
            }
            a4 || (a4 = i4);
          }
          o4 = o4 || a4;
        }
        if (o4) return o4 !== u4[0] && u4.unshift(o4), n4[o4];
      }(v2, T2, n3)), !i3 && -1 < ce.inArray("script", v2.dataTypes) && ce.inArray("json", v2.dataTypes) < 0 && (v2.converters["text script"] = function() {
      }), s3 = function(e4, t4, n4, r4) {
        var i4, o4, a4, s4, u4, l4 = {}, c3 = e4.dataTypes.slice();
        if (c3[1]) for (a4 in e4.converters) l4[a4.toLowerCase()] = e4.converters[a4];
        o4 = c3.shift();
        while (o4) if (e4.responseFields[o4] && (n4[e4.responseFields[o4]] = t4), !u4 && r4 && e4.dataFilter && (t4 = e4.dataFilter(t4, e4.dataType)), u4 = o4, o4 = c3.shift()) {
          if ("*" === o4) o4 = u4;
          else if ("*" !== u4 && u4 !== o4) {
            if (!(a4 = l4[u4 + " " + o4] || l4["* " + o4])) {
              for (i4 in l4) if ((s4 = i4.split(" "))[1] === o4 && (a4 = l4[u4 + " " + s4[0]] || l4["* " + s4[0]])) {
                true === a4 ? a4 = l4[i4] : true !== l4[i4] && (o4 = s4[0], c3.unshift(s4[1]));
                break;
              }
            }
            if (true !== a4) if (a4 && e4["throws"]) t4 = a4(t4);
            else try {
              t4 = a4(t4);
            } catch (e5) {
              return { state: "parsererror", error: a4 ? e5 : "No conversion from " + u4 + " to " + o4 };
            }
          }
        }
        return { state: "success", data: t4 };
      }(v2, s3, T2, i3), i3 ? (v2.ifModified && ((u3 = T2.getResponseHeader("Last-Modified")) && (ce.lastModified[f2] = u3), (u3 = T2.getResponseHeader("etag")) && (ce.etag[f2] = u3)), 204 === e3 || "HEAD" === v2.type ? l3 = "nocontent" : 304 === e3 ? l3 = "notmodified" : (l3 = s3.state, o3 = s3.data, i3 = !(a3 = s3.error))) : (a3 = l3, !e3 && l3 || (l3 = "error", e3 < 0 && (e3 = 0))), T2.status = e3, T2.statusText = (t3 || l3) + "", i3 ? x2.resolveWith(y2, [o3, l3, T2]) : x2.rejectWith(y2, [T2, l3, a3]), T2.statusCode(w2), w2 = void 0, g2 && m2.trigger(i3 ? "ajaxSuccess" : "ajaxError", [T2, v2, i3 ? o3 : a3]), b2.fireWith(y2, [T2, l3]), g2 && (m2.trigger("ajaxComplete", [T2, v2]), --ce.active || ce.event.trigger("ajaxStop")));
    }
    return T2;
  }, getJSON: function(e2, t2, n2) {
    return ce.get(e2, t2, n2, "json");
  }, getScript: function(e2, t2) {
    return ce.get(e2, void 0, t2, "script");
  } }), ce.each(["get", "post"], function(e2, i2) {
    ce[i2] = function(e3, t2, n2, r2) {
      return v(t2) && (r2 = r2 || n2, n2 = t2, t2 = void 0), ce.ajax(ce.extend({ url: e3, type: i2, dataType: r2, data: t2, success: n2 }, ce.isPlainObject(e3) && e3));
    };
  }), ce.ajaxPrefilter(function(e2) {
    var t2;
    for (t2 in e2.headers) "content-type" === t2.toLowerCase() && (e2.contentType = e2.headers[t2] || "");
  }), ce._evalUrl = function(e2, t2, n2) {
    return ce.ajax({ url: e2, type: "GET", dataType: "script", cache: true, async: false, global: false, converters: { "text script": function() {
    } }, dataFilter: function(e3) {
      ce.globalEval(e3, t2, n2);
    } });
  }, ce.fn.extend({ wrapAll: function(e2) {
    var t2;
    return this[0] && (v(e2) && (e2 = e2.call(this[0])), t2 = ce(e2, this[0].ownerDocument).eq(0).clone(true), this[0].parentNode && t2.insertBefore(this[0]), t2.map(function() {
      var e3 = this;
      while (e3.firstElementChild) e3 = e3.firstElementChild;
      return e3;
    }).append(this)), this;
  }, wrapInner: function(n2) {
    return v(n2) ? this.each(function(e2) {
      ce(this).wrapInner(n2.call(this, e2));
    }) : this.each(function() {
      var e2 = ce(this), t2 = e2.contents();
      t2.length ? t2.wrapAll(n2) : e2.append(n2);
    });
  }, wrap: function(t2) {
    var n2 = v(t2);
    return this.each(function(e2) {
      ce(this).wrapAll(n2 ? t2.call(this, e2) : t2);
    });
  }, unwrap: function(e2) {
    return this.parent(e2).not("body").each(function() {
      ce(this).replaceWith(this.childNodes);
    }), this;
  } }), ce.expr.pseudos.hidden = function(e2) {
    return !ce.expr.pseudos.visible(e2);
  }, ce.expr.pseudos.visible = function(e2) {
    return !!(e2.offsetWidth || e2.offsetHeight || e2.getClientRects().length);
  }, ce.ajaxSettings.xhr = function() {
    try {
      return new ie.XMLHttpRequest();
    } catch (e2) {
    }
  };
  var Yt = { 0: 200, 1223: 204 }, Qt = ce.ajaxSettings.xhr();
  le.cors = !!Qt && "withCredentials" in Qt, le.ajax = Qt = !!Qt, ce.ajaxTransport(function(i2) {
    var o2, a2;
    if (le.cors || Qt && !i2.crossDomain) return { send: function(e2, t2) {
      var n2, r2 = i2.xhr();
      if (r2.open(i2.type, i2.url, i2.async, i2.username, i2.password), i2.xhrFields) for (n2 in i2.xhrFields) r2[n2] = i2.xhrFields[n2];
      for (n2 in i2.mimeType && r2.overrideMimeType && r2.overrideMimeType(i2.mimeType), i2.crossDomain || e2["X-Requested-With"] || (e2["X-Requested-With"] = "XMLHttpRequest"), e2) r2.setRequestHeader(n2, e2[n2]);
      o2 = function(e3) {
        return function() {
          o2 && (o2 = a2 = r2.onload = r2.onerror = r2.onabort = r2.ontimeout = r2.onreadystatechange = null, "abort" === e3 ? r2.abort() : "error" === e3 ? "number" != typeof r2.status ? t2(0, "error") : t2(r2.status, r2.statusText) : t2(Yt[r2.status] || r2.status, r2.statusText, "text" !== (r2.responseType || "text") || "string" != typeof r2.responseText ? { binary: r2.response } : { text: r2.responseText }, r2.getAllResponseHeaders()));
        };
      }, r2.onload = o2(), a2 = r2.onerror = r2.ontimeout = o2("error"), void 0 !== r2.onabort ? r2.onabort = a2 : r2.onreadystatechange = function() {
        4 === r2.readyState && ie.setTimeout(function() {
          o2 && a2();
        });
      }, o2 = o2("abort");
      try {
        r2.send(i2.hasContent && i2.data || null);
      } catch (e3) {
        if (o2) throw e3;
      }
    }, abort: function() {
      o2 && o2();
    } };
  }), ce.ajaxPrefilter(function(e2) {
    e2.crossDomain && (e2.contents.script = false);
  }), ce.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /\b(?:java|ecma)script\b/ }, converters: { "text script": function(e2) {
    return ce.globalEval(e2), e2;
  } } }), ce.ajaxPrefilter("script", function(e2) {
    void 0 === e2.cache && (e2.cache = false), e2.crossDomain && (e2.type = "GET");
  }), ce.ajaxTransport("script", function(n2) {
    var r2, i2;
    if (n2.crossDomain || n2.scriptAttrs) return { send: function(e2, t2) {
      r2 = ce("<script>").attr(n2.scriptAttrs || {}).prop({ charset: n2.scriptCharset, src: n2.url }).on("load error", i2 = function(e3) {
        r2.remove(), i2 = null, e3 && t2("error" === e3.type ? 404 : 200, e3.type);
      }), C.head.appendChild(r2[0]);
    }, abort: function() {
      i2 && i2();
    } };
  });
  var Jt, Kt = [], Zt = /(=)\?(?=&|$)|\?\?/;
  ce.ajaxSetup({ jsonp: "callback", jsonpCallback: function() {
    var e2 = Kt.pop() || ce.expando + "_" + jt.guid++;
    return this[e2] = true, e2;
  } }), ce.ajaxPrefilter("json jsonp", function(e2, t2, n2) {
    var r2, i2, o2, a2 = false !== e2.jsonp && (Zt.test(e2.url) ? "url" : "string" == typeof e2.data && 0 === (e2.contentType || "").indexOf("application/x-www-form-urlencoded") && Zt.test(e2.data) && "data");
    if (a2 || "jsonp" === e2.dataTypes[0]) return r2 = e2.jsonpCallback = v(e2.jsonpCallback) ? e2.jsonpCallback() : e2.jsonpCallback, a2 ? e2[a2] = e2[a2].replace(Zt, "$1" + r2) : false !== e2.jsonp && (e2.url += (At.test(e2.url) ? "&" : "?") + e2.jsonp + "=" + r2), e2.converters["script json"] = function() {
      return o2 || ce.error(r2 + " was not called"), o2[0];
    }, e2.dataTypes[0] = "json", i2 = ie[r2], ie[r2] = function() {
      o2 = arguments;
    }, n2.always(function() {
      void 0 === i2 ? ce(ie).removeProp(r2) : ie[r2] = i2, e2[r2] && (e2.jsonpCallback = t2.jsonpCallback, Kt.push(r2)), o2 && v(i2) && i2(o2[0]), o2 = i2 = void 0;
    }), "script";
  }), le.createHTMLDocument = ((Jt = C.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === Jt.childNodes.length), ce.parseHTML = function(e2, t2, n2) {
    return "string" != typeof e2 ? [] : ("boolean" == typeof t2 && (n2 = t2, t2 = false), t2 || (le.createHTMLDocument ? ((r2 = (t2 = C.implementation.createHTMLDocument("")).createElement("base")).href = C.location.href, t2.head.appendChild(r2)) : t2 = C), o2 = !n2 && [], (i2 = w.exec(e2)) ? [t2.createElement(i2[1])] : (i2 = Ae([e2], t2, o2), o2 && o2.length && ce(o2).remove(), ce.merge([], i2.childNodes)));
    var r2, i2, o2;
  }, ce.fn.load = function(e2, t2, n2) {
    var r2, i2, o2, a2 = this, s2 = e2.indexOf(" ");
    return -1 < s2 && (r2 = Tt(e2.slice(s2)), e2 = e2.slice(0, s2)), v(t2) ? (n2 = t2, t2 = void 0) : t2 && "object" == typeof t2 && (i2 = "POST"), 0 < a2.length && ce.ajax({ url: e2, type: i2 || "GET", dataType: "html", data: t2 }).done(function(e3) {
      o2 = arguments, a2.html(r2 ? ce("<div>").append(ce.parseHTML(e3)).find(r2) : e3);
    }).always(n2 && function(e3, t3) {
      a2.each(function() {
        n2.apply(this, o2 || [e3.responseText, t3, e3]);
      });
    }), this;
  }, ce.expr.pseudos.animated = function(t2) {
    return ce.grep(ce.timers, function(e2) {
      return t2 === e2.elem;
    }).length;
  }, ce.offset = { setOffset: function(e2, t2, n2) {
    var r2, i2, o2, a2, s2, u2, l2 = ce.css(e2, "position"), c2 = ce(e2), f2 = {};
    "static" === l2 && (e2.style.position = "relative"), s2 = c2.offset(), o2 = ce.css(e2, "top"), u2 = ce.css(e2, "left"), ("absolute" === l2 || "fixed" === l2) && -1 < (o2 + u2).indexOf("auto") ? (a2 = (r2 = c2.position()).top, i2 = r2.left) : (a2 = parseFloat(o2) || 0, i2 = parseFloat(u2) || 0), v(t2) && (t2 = t2.call(e2, n2, ce.extend({}, s2))), null != t2.top && (f2.top = t2.top - s2.top + a2), null != t2.left && (f2.left = t2.left - s2.left + i2), "using" in t2 ? t2.using.call(e2, f2) : c2.css(f2);
  } }, ce.fn.extend({ offset: function(t2) {
    if (arguments.length) return void 0 === t2 ? this : this.each(function(e3) {
      ce.offset.setOffset(this, t2, e3);
    });
    var e2, n2, r2 = this[0];
    return r2 ? r2.getClientRects().length ? (e2 = r2.getBoundingClientRect(), n2 = r2.ownerDocument.defaultView, { top: e2.top + n2.pageYOffset, left: e2.left + n2.pageXOffset }) : { top: 0, left: 0 } : void 0;
  }, position: function() {
    if (this[0]) {
      var e2, t2, n2, r2 = this[0], i2 = { top: 0, left: 0 };
      if ("fixed" === ce.css(r2, "position")) t2 = r2.getBoundingClientRect();
      else {
        t2 = this.offset(), n2 = r2.ownerDocument, e2 = r2.offsetParent || n2.documentElement;
        while (e2 && (e2 === n2.body || e2 === n2.documentElement) && "static" === ce.css(e2, "position")) e2 = e2.parentNode;
        e2 && e2 !== r2 && 1 === e2.nodeType && ((i2 = ce(e2).offset()).top += ce.css(e2, "borderTopWidth", true), i2.left += ce.css(e2, "borderLeftWidth", true));
      }
      return { top: t2.top - i2.top - ce.css(r2, "marginTop", true), left: t2.left - i2.left - ce.css(r2, "marginLeft", true) };
    }
  }, offsetParent: function() {
    return this.map(function() {
      var e2 = this.offsetParent;
      while (e2 && "static" === ce.css(e2, "position")) e2 = e2.offsetParent;
      return e2 || J;
    });
  } }), ce.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(t2, i2) {
    var o2 = "pageYOffset" === i2;
    ce.fn[t2] = function(e2) {
      return M(this, function(e3, t3, n2) {
        var r2;
        if (y(e3) ? r2 = e3 : 9 === e3.nodeType && (r2 = e3.defaultView), void 0 === n2) return r2 ? r2[i2] : e3[t3];
        r2 ? r2.scrollTo(o2 ? r2.pageXOffset : n2, o2 ? n2 : r2.pageYOffset) : e3[t3] = n2;
      }, t2, e2, arguments.length);
    };
  }), ce.each(["top", "left"], function(e2, n2) {
    ce.cssHooks[n2] = Ye(le.pixelPosition, function(e3, t2) {
      if (t2) return t2 = Ge(e3, n2), _e.test(t2) ? ce(e3).position()[n2] + "px" : t2;
    });
  }), ce.each({ Height: "height", Width: "width" }, function(a2, s2) {
    ce.each({ padding: "inner" + a2, content: s2, "": "outer" + a2 }, function(r2, o2) {
      ce.fn[o2] = function(e2, t2) {
        var n2 = arguments.length && (r2 || "boolean" != typeof e2), i2 = r2 || (true === e2 || true === t2 ? "margin" : "border");
        return M(this, function(e3, t3, n3) {
          var r3;
          return y(e3) ? 0 === o2.indexOf("outer") ? e3["inner" + a2] : e3.document.documentElement["client" + a2] : 9 === e3.nodeType ? (r3 = e3.documentElement, Math.max(e3.body["scroll" + a2], r3["scroll" + a2], e3.body["offset" + a2], r3["offset" + a2], r3["client" + a2])) : void 0 === n3 ? ce.css(e3, t3, i2) : ce.style(e3, t3, n3, i2);
        }, s2, n2 ? e2 : void 0, n2);
      };
    });
  }), ce.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e2, t2) {
    ce.fn[t2] = function(e3) {
      return this.on(t2, e3);
    };
  }), ce.fn.extend({ bind: function(e2, t2, n2) {
    return this.on(e2, null, t2, n2);
  }, unbind: function(e2, t2) {
    return this.off(e2, null, t2);
  }, delegate: function(e2, t2, n2, r2) {
    return this.on(t2, e2, n2, r2);
  }, undelegate: function(e2, t2, n2) {
    return 1 === arguments.length ? this.off(e2, "**") : this.off(t2, e2 || "**", n2);
  }, hover: function(e2, t2) {
    return this.on("mouseenter", e2).on("mouseleave", t2 || e2);
  } }), ce.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e2, n2) {
    ce.fn[n2] = function(e3, t2) {
      return 0 < arguments.length ? this.on(n2, null, e3, t2) : this.trigger(n2);
    };
  });
  var en = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g;
  ce.proxy = function(e2, t2) {
    var n2, r2, i2;
    if ("string" == typeof t2 && (n2 = e2[t2], t2 = e2, e2 = n2), v(e2)) return r2 = ae.call(arguments, 2), (i2 = function() {
      return e2.apply(t2 || this, r2.concat(ae.call(arguments)));
    }).guid = e2.guid = e2.guid || ce.guid++, i2;
  }, ce.holdReady = function(e2) {
    e2 ? ce.readyWait++ : ce.ready(true);
  }, ce.isArray = Array.isArray, ce.parseJSON = JSON.parse, ce.nodeName = fe, ce.isFunction = v, ce.isWindow = y, ce.camelCase = F, ce.type = x, ce.now = Date.now, ce.isNumeric = function(e2) {
    var t2 = ce.type(e2);
    return ("number" === t2 || "string" === t2) && !isNaN(e2 - parseFloat(e2));
  }, ce.trim = function(e2) {
    return null == e2 ? "" : (e2 + "").replace(en, "$1");
  }, "function" == typeof define && define.amd && define("jquery", [], function() {
    return ce;
  });
  var tn = ie.jQuery, nn = ie.$;
  return ce.noConflict = function(e2) {
    return ie.$ === ce && (ie.$ = nn), e2 && ie.jQuery === ce && (ie.jQuery = tn), ce;
  }, "undefined" == typeof e && (ie.jQuery = ie.$ = ce), ce;
});
!function($) {
  "use strict";
  var Class = function(el, cb) {
    this.$el = $(el);
    this.cb = cb;
    this.watch();
    return this;
  };
  Class.prototype = {
    /**
     * Checks if the element is in.
     *
     * @returns {boolean}
     */
    isIn: function isIn() {
      var _self = this;
      var $win = $(window);
      var elementTop = _self.$el.offset().top;
      var elementBottom = elementTop + _self.$el.outerHeight();
      var viewportTop = $win.scrollTop();
      var viewportBottom = viewportTop + $win.height();
      return elementBottom > viewportTop && elementTop < viewportBottom;
    },
    /**
     * Launch a callback indicating when the element is in and when is out.
     */
    watch: function() {
      var _self = this;
      var _isIn = false;
      $(window).on("resize scroll", function() {
        if (_self.isIn() && _isIn === false) {
          _self.cb.call(_self.$el, "entered");
          _isIn = true;
        }
        if (_isIn === true && !_self.isIn()) {
          _self.cb.call(_self.$el, "leaved");
          _isIn = false;
        }
      });
    }
  };
  $.fn.isInViewport = function(cb) {
    return this.each(function() {
      var $element = $(this);
      var data = $element.data("isInViewport");
      if (!data) {
        $element.data("isInViewport", new Class(this, cb));
      }
    });
  };
}(window.jQuery);
/*!
  * Bootstrap v5.3.2 (https://getbootstrap.com/)
  * Copyright 2011-2024 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).bootstrap = e();
}(this, function() {
  "use strict";
  const t = /* @__PURE__ */ new Map(), e = { set(e2, i2, n2) {
    t.has(e2) || t.set(e2, /* @__PURE__ */ new Map());
    const s2 = t.get(e2);
    s2.has(i2) || 0 === s2.size ? s2.set(i2, n2) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(s2.keys())[0]}.`);
  }, get: (e2, i2) => t.has(e2) && t.get(e2).get(i2) || null, remove(e2, i2) {
    if (!t.has(e2)) return;
    const n2 = t.get(e2);
    n2.delete(i2), 0 === n2.size && t.delete(e2);
  } }, i = "transitionend", n = (t2) => (t2 && window.CSS && window.CSS.escape && (t2 = t2.replace(/#([^\s"#']+)/g, (t3, e2) => `#${CSS.escape(e2)}`)), t2), s = (t2) => {
    t2.dispatchEvent(new Event(i));
  }, o = (t2) => !(!t2 || "object" != typeof t2) && (void 0 !== t2.jquery && (t2 = t2[0]), void 0 !== t2.nodeType), r = (t2) => o(t2) ? t2.jquery ? t2[0] : t2 : "string" == typeof t2 && t2.length > 0 ? document.querySelector(n(t2)) : null, a = (t2) => {
    if (!o(t2) || 0 === t2.getClientRects().length) return false;
    const e2 = "visible" === getComputedStyle(t2).getPropertyValue("visibility"), i2 = t2.closest("details:not([open])");
    if (!i2) return e2;
    if (i2 !== t2) {
      const e3 = t2.closest("summary");
      if (e3 && e3.parentNode !== i2) return false;
      if (null === e3) return false;
    }
    return e2;
  }, l = (t2) => !t2 || t2.nodeType !== Node.ELEMENT_NODE || !!t2.classList.contains("disabled") || (void 0 !== t2.disabled ? t2.disabled : t2.hasAttribute("disabled") && "false" !== t2.getAttribute("disabled")), c = (t2) => {
    if (!document.documentElement.attachShadow) return null;
    if ("function" == typeof t2.getRootNode) {
      const e2 = t2.getRootNode();
      return e2 instanceof ShadowRoot ? e2 : null;
    }
    return t2 instanceof ShadowRoot ? t2 : t2.parentNode ? c(t2.parentNode) : null;
  }, h = () => {
  }, d = (t2) => {
    t2.offsetHeight;
  }, u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, f = [], p = () => "rtl" === document.documentElement.dir, m = (t2) => {
    var e2;
    e2 = () => {
      const e3 = u();
      if (e3) {
        const i2 = t2.NAME, n2 = e3.fn[i2];
        e3.fn[i2] = t2.jQueryInterface, e3.fn[i2].Constructor = t2, e3.fn[i2].noConflict = () => (e3.fn[i2] = n2, t2.jQueryInterface);
      }
    }, "loading" === document.readyState ? (f.length || document.addEventListener("DOMContentLoaded", () => {
      for (const t3 of f) t3();
    }), f.push(e2)) : e2();
  }, g = (t2, e2 = [], i2 = t2) => "function" == typeof t2 ? t2(...e2) : i2, _ = (t2, e2, n2 = true) => {
    if (!n2) return void g(t2);
    const o2 = ((t3) => {
      if (!t3) return 0;
      let { transitionDuration: e3, transitionDelay: i2 } = window.getComputedStyle(t3);
      const n3 = Number.parseFloat(e3), s2 = Number.parseFloat(i2);
      return n3 || s2 ? (e3 = e3.split(",")[0], i2 = i2.split(",")[0], 1e3 * (Number.parseFloat(e3) + Number.parseFloat(i2))) : 0;
    })(e2) + 5;
    let r2 = false;
    const a2 = ({ target: n3 }) => {
      n3 === e2 && (r2 = true, e2.removeEventListener(i, a2), g(t2));
    };
    e2.addEventListener(i, a2), setTimeout(() => {
      r2 || s(e2);
    }, o2);
  }, b = (t2, e2, i2, n2) => {
    const s2 = t2.length;
    let o2 = t2.indexOf(e2);
    return -1 === o2 ? !i2 && n2 ? t2[s2 - 1] : t2[0] : (o2 += i2 ? 1 : -1, n2 && (o2 = (o2 + s2) % s2), t2[Math.max(0, Math.min(o2, s2 - 1))]);
  }, v = /[^.]*(?=\..*)\.|.*/, y = /\..*/, w = /::\d+$/, A = {};
  let E = 1;
  const T = { mouseenter: "mouseover", mouseleave: "mouseout" }, C = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
  function O(t2, e2) {
    return e2 && `${e2}::${E++}` || t2.uidEvent || E++;
  }
  function x(t2) {
    const e2 = O(t2);
    return t2.uidEvent = e2, A[e2] = A[e2] || {}, A[e2];
  }
  function k(t2, e2, i2 = null) {
    return Object.values(t2).find((t3) => t3.callable === e2 && t3.delegationSelector === i2);
  }
  function L(t2, e2, i2) {
    const n2 = "string" == typeof e2, s2 = n2 ? i2 : e2 || i2;
    let o2 = I(t2);
    return C.has(o2) || (o2 = t2), [n2, s2, o2];
  }
  function S(t2, e2, i2, n2, s2) {
    if ("string" != typeof e2 || !t2) return;
    let [o2, r2, a2] = L(e2, i2, n2);
    if (e2 in T) {
      const t3 = (t4) => function(e3) {
        if (!e3.relatedTarget || e3.relatedTarget !== e3.delegateTarget && !e3.delegateTarget.contains(e3.relatedTarget)) return t4.call(this, e3);
      };
      r2 = t3(r2);
    }
    const l2 = x(t2), c2 = l2[a2] || (l2[a2] = {}), h2 = k(c2, r2, o2 ? i2 : null);
    if (h2) return void (h2.oneOff = h2.oneOff && s2);
    const d2 = O(r2, e2.replace(v, "")), u2 = o2 ? /* @__PURE__ */ function(t3, e3, i3) {
      return function n3(s3) {
        const o3 = t3.querySelectorAll(e3);
        for (let { target: r3 } = s3; r3 && r3 !== this; r3 = r3.parentNode) for (const a3 of o3) if (a3 === r3) return P(s3, { delegateTarget: r3 }), n3.oneOff && N.off(t3, s3.type, e3, i3), i3.apply(r3, [s3]);
      };
    }(t2, i2, r2) : /* @__PURE__ */ function(t3, e3) {
      return function i3(n3) {
        return P(n3, { delegateTarget: t3 }), i3.oneOff && N.off(t3, n3.type, e3), e3.apply(t3, [n3]);
      };
    }(t2, r2);
    u2.delegationSelector = o2 ? i2 : null, u2.callable = r2, u2.oneOff = s2, u2.uidEvent = d2, c2[d2] = u2, t2.addEventListener(a2, u2, o2);
  }
  function D(t2, e2, i2, n2, s2) {
    const o2 = k(e2[i2], n2, s2);
    o2 && (t2.removeEventListener(i2, o2, Boolean(s2)), delete e2[i2][o2.uidEvent]);
  }
  function $(t2, e2, i2, n2) {
    const s2 = e2[i2] || {};
    for (const [o2, r2] of Object.entries(s2)) o2.includes(n2) && D(t2, e2, i2, r2.callable, r2.delegationSelector);
  }
  function I(t2) {
    return t2 = t2.replace(y, ""), T[t2] || t2;
  }
  const N = { on(t2, e2, i2, n2) {
    S(t2, e2, i2, n2, false);
  }, one(t2, e2, i2, n2) {
    S(t2, e2, i2, n2, true);
  }, off(t2, e2, i2, n2) {
    if ("string" != typeof e2 || !t2) return;
    const [s2, o2, r2] = L(e2, i2, n2), a2 = r2 !== e2, l2 = x(t2), c2 = l2[r2] || {}, h2 = e2.startsWith(".");
    if (void 0 === o2) {
      if (h2) for (const i3 of Object.keys(l2)) $(t2, l2, i3, e2.slice(1));
      for (const [i3, n3] of Object.entries(c2)) {
        const s3 = i3.replace(w, "");
        a2 && !e2.includes(s3) || D(t2, l2, r2, n3.callable, n3.delegationSelector);
      }
    } else {
      if (!Object.keys(c2).length) return;
      D(t2, l2, r2, o2, s2 ? i2 : null);
    }
  }, trigger(t2, e2, i2) {
    if ("string" != typeof e2 || !t2) return null;
    const n2 = u();
    let s2 = null, o2 = true, r2 = true, a2 = false;
    e2 !== I(e2) && n2 && (s2 = n2.Event(e2, i2), n2(t2).trigger(s2), o2 = !s2.isPropagationStopped(), r2 = !s2.isImmediatePropagationStopped(), a2 = s2.isDefaultPrevented());
    const l2 = P(new Event(e2, { bubbles: o2, cancelable: true }), i2);
    return a2 && l2.preventDefault(), r2 && t2.dispatchEvent(l2), l2.defaultPrevented && s2 && s2.preventDefault(), l2;
  } };
  function P(t2, e2 = {}) {
    for (const [i2, n2] of Object.entries(e2)) try {
      t2[i2] = n2;
    } catch (e3) {
      Object.defineProperty(t2, i2, { configurable: true, get: () => n2 });
    }
    return t2;
  }
  function M(t2) {
    if ("true" === t2) return true;
    if ("false" === t2) return false;
    if (t2 === Number(t2).toString()) return Number(t2);
    if ("" === t2 || "null" === t2) return null;
    if ("string" != typeof t2) return t2;
    try {
      return JSON.parse(decodeURIComponent(t2));
    } catch (e2) {
      return t2;
    }
  }
  function j(t2) {
    return t2.replace(/[A-Z]/g, (t3) => `-${t3.toLowerCase()}`);
  }
  const F = { setDataAttribute(t2, e2, i2) {
    t2.setAttribute(`data-bs-${j(e2)}`, i2);
  }, removeDataAttribute(t2, e2) {
    t2.removeAttribute(`data-bs-${j(e2)}`);
  }, getDataAttributes(t2) {
    if (!t2) return {};
    const e2 = {}, i2 = Object.keys(t2.dataset).filter((t3) => t3.startsWith("bs") && !t3.startsWith("bsConfig"));
    for (const n2 of i2) {
      let i3 = n2.replace(/^bs/, "");
      i3 = i3.charAt(0).toLowerCase() + i3.slice(1, i3.length), e2[i3] = M(t2.dataset[n2]);
    }
    return e2;
  }, getDataAttribute: (t2, e2) => M(t2.getAttribute(`data-bs-${j(e2)}`)) };
  class H {
    static get Default() {
      return {};
    }
    static get DefaultType() {
      return {};
    }
    static get NAME() {
      throw new Error('You have to implement the static method "NAME", for each component!');
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2;
    }
    _mergeConfigObj(t2, e2) {
      const i2 = o(e2) ? F.getDataAttribute(e2, "config") : {};
      return { ...this.constructor.Default, ..."object" == typeof i2 ? i2 : {}, ...o(e2) ? F.getDataAttributes(e2) : {}, ..."object" == typeof t2 ? t2 : {} };
    }
    _typeCheckConfig(t2, e2 = this.constructor.DefaultType) {
      for (const [n2, s2] of Object.entries(e2)) {
        const e3 = t2[n2], r2 = o(e3) ? "element" : null == (i2 = e3) ? `${i2}` : Object.prototype.toString.call(i2).match(/\s([a-z]+)/i)[1].toLowerCase();
        if (!new RegExp(s2).test(r2)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n2}" provided type "${r2}" but expected type "${s2}".`);
      }
      var i2;
    }
  }
  class W extends H {
    constructor(t2, i2) {
      super(), (t2 = r(t2)) && (this._element = t2, this._config = this._getConfig(i2), e.set(this._element, this.constructor.DATA_KEY, this));
    }
    dispose() {
      e.remove(this._element, this.constructor.DATA_KEY), N.off(this._element, this.constructor.EVENT_KEY);
      for (const t2 of Object.getOwnPropertyNames(this)) this[t2] = null;
    }
    _queueCallback(t2, e2, i2 = true) {
      _(t2, e2, i2);
    }
    _getConfig(t2) {
      return t2 = this._mergeConfigObj(t2, this._element), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    static getInstance(t2) {
      return e.get(r(t2), this.DATA_KEY);
    }
    static getOrCreateInstance(t2, e2 = {}) {
      return this.getInstance(t2) || new this(t2, "object" == typeof e2 ? e2 : null);
    }
    static get VERSION() {
      return "5.3.2";
    }
    static get DATA_KEY() {
      return `bs.${this.NAME}`;
    }
    static get EVENT_KEY() {
      return `.${this.DATA_KEY}`;
    }
    static eventName(t2) {
      return `${t2}${this.EVENT_KEY}`;
    }
  }
  const B = (t2) => {
    let e2 = t2.getAttribute("data-bs-target");
    if (!e2 || "#" === e2) {
      let i2 = t2.getAttribute("href");
      if (!i2 || !i2.includes("#") && !i2.startsWith(".")) return null;
      i2.includes("#") && !i2.startsWith("#") && (i2 = `#${i2.split("#")[1]}`), e2 = i2 && "#" !== i2 ? n(i2.trim()) : null;
    }
    return e2;
  }, z = { find: (t2, e2 = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(e2, t2)), findOne: (t2, e2 = document.documentElement) => Element.prototype.querySelector.call(e2, t2), children: (t2, e2) => [].concat(...t2.children).filter((t3) => t3.matches(e2)), parents(t2, e2) {
    const i2 = [];
    let n2 = t2.parentNode.closest(e2);
    for (; n2; ) i2.push(n2), n2 = n2.parentNode.closest(e2);
    return i2;
  }, prev(t2, e2) {
    let i2 = t2.previousElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.previousElementSibling;
    }
    return [];
  }, next(t2, e2) {
    let i2 = t2.nextElementSibling;
    for (; i2; ) {
      if (i2.matches(e2)) return [i2];
      i2 = i2.nextElementSibling;
    }
    return [];
  }, focusableChildren(t2) {
    const e2 = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((t3) => `${t3}:not([tabindex^="-"])`).join(",");
    return this.find(e2, t2).filter((t3) => !l(t3) && a(t3));
  }, getSelectorFromElement(t2) {
    const e2 = B(t2);
    return e2 && z.findOne(e2) ? e2 : null;
  }, getElementFromSelector(t2) {
    const e2 = B(t2);
    return e2 ? z.findOne(e2) : null;
  }, getMultipleElementsFromSelector(t2) {
    const e2 = B(t2);
    return e2 ? z.find(e2) : [];
  } }, R = (t2, e2 = "hide") => {
    const i2 = `click.dismiss${t2.EVENT_KEY}`, n2 = t2.NAME;
    N.on(document, i2, `[data-bs-dismiss="${n2}"]`, function(i3) {
      if (["A", "AREA"].includes(this.tagName) && i3.preventDefault(), l(this)) return;
      const s2 = z.getElementFromSelector(this) || this.closest(`.${n2}`);
      t2.getOrCreateInstance(s2)[e2]();
    });
  }, q = ".bs.alert", V = `close${q}`, K = `closed${q}`;
  class Q extends W {
    static get NAME() {
      return "alert";
    }
    close() {
      if (N.trigger(this._element, V).defaultPrevented) return;
      this._element.classList.remove("show");
      const t2 = this._element.classList.contains("fade");
      this._queueCallback(() => this._destroyElement(), this._element, t2);
    }
    _destroyElement() {
      this._element.remove(), N.trigger(this._element, K), this.dispose();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Q.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  R(Q, "close"), m(Q);
  const X = '[data-bs-toggle="button"]';
  class Y extends W {
    static get NAME() {
      return "button";
    }
    toggle() {
      this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Y.getOrCreateInstance(this);
        "toggle" === t2 && e2[t2]();
      });
    }
  }
  N.on(document, "click.bs.button.data-api", X, (t2) => {
    t2.preventDefault();
    const e2 = t2.target.closest(X);
    Y.getOrCreateInstance(e2).toggle();
  }), m(Y);
  const U = ".bs.swipe", G = `touchstart${U}`, J = `touchmove${U}`, Z = `touchend${U}`, tt = `pointerdown${U}`, et = `pointerup${U}`, it = { endCallback: null, leftCallback: null, rightCallback: null }, nt = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
  class st extends H {
    constructor(t2, e2) {
      super(), this._element = t2, t2 && st.isSupported() && (this._config = this._getConfig(e2), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents());
    }
    static get Default() {
      return it;
    }
    static get DefaultType() {
      return nt;
    }
    static get NAME() {
      return "swipe";
    }
    dispose() {
      N.off(this._element, U);
    }
    _start(t2) {
      this._supportPointerEvents ? this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX) : this._deltaX = t2.touches[0].clientX;
    }
    _end(t2) {
      this._eventIsPointerPenTouch(t2) && (this._deltaX = t2.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback);
    }
    _move(t2) {
      this._deltaX = t2.touches && t2.touches.length > 1 ? 0 : t2.touches[0].clientX - this._deltaX;
    }
    _handleSwipe() {
      const t2 = Math.abs(this._deltaX);
      if (t2 <= 40) return;
      const e2 = t2 / this._deltaX;
      this._deltaX = 0, e2 && g(e2 > 0 ? this._config.rightCallback : this._config.leftCallback);
    }
    _initEvents() {
      this._supportPointerEvents ? (N.on(this._element, tt, (t2) => this._start(t2)), N.on(this._element, et, (t2) => this._end(t2)), this._element.classList.add("pointer-event")) : (N.on(this._element, G, (t2) => this._start(t2)), N.on(this._element, J, (t2) => this._move(t2)), N.on(this._element, Z, (t2) => this._end(t2)));
    }
    _eventIsPointerPenTouch(t2) {
      return this._supportPointerEvents && ("pen" === t2.pointerType || "touch" === t2.pointerType);
    }
    static isSupported() {
      return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
    }
  }
  const ot = ".bs.carousel", rt = ".data-api", at = "next", lt = "prev", ct = "left", ht = "right", dt = `slide${ot}`, ut = `slid${ot}`, ft = `keydown${ot}`, pt = `mouseenter${ot}`, mt = `mouseleave${ot}`, gt = `dragstart${ot}`, _t = `load${ot}${rt}`, bt = `click${ot}${rt}`, vt = "carousel", yt = "active", wt = ".active", At = ".carousel-item", Et = wt + At, Tt = { ArrowLeft: ht, ArrowRight: ct }, Ct = { interval: 5e3, keyboard: true, pause: "hover", ride: false, touch: true, wrap: true }, Ot = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
  class xt extends W {
    constructor(t2, e2) {
      super(t2, e2), this._interval = null, this._activeElement = null, this._isSliding = false, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = z.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === vt && this.cycle();
    }
    static get Default() {
      return Ct;
    }
    static get DefaultType() {
      return Ot;
    }
    static get NAME() {
      return "carousel";
    }
    next() {
      this._slide(at);
    }
    nextWhenVisible() {
      !document.hidden && a(this._element) && this.next();
    }
    prev() {
      this._slide(lt);
    }
    pause() {
      this._isSliding && s(this._element), this._clearInterval();
    }
    cycle() {
      this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
    }
    _maybeEnableCycle() {
      this._config.ride && (this._isSliding ? N.one(this._element, ut, () => this.cycle()) : this.cycle());
    }
    to(t2) {
      const e2 = this._getItems();
      if (t2 > e2.length - 1 || t2 < 0) return;
      if (this._isSliding) return void N.one(this._element, ut, () => this.to(t2));
      const i2 = this._getItemIndex(this._getActive());
      if (i2 === t2) return;
      const n2 = t2 > i2 ? at : lt;
      this._slide(n2, e2[t2]);
    }
    dispose() {
      this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.defaultInterval = t2.interval, t2;
    }
    _addEventListeners() {
      this._config.keyboard && N.on(this._element, ft, (t2) => this._keydown(t2)), "hover" === this._config.pause && (N.on(this._element, pt, () => this.pause()), N.on(this._element, mt, () => this._maybeEnableCycle())), this._config.touch && st.isSupported() && this._addTouchEventListeners();
    }
    _addTouchEventListeners() {
      for (const t3 of z.find(".carousel-item img", this._element)) N.on(t3, gt, (t4) => t4.preventDefault());
      const t2 = { leftCallback: () => this._slide(this._directionToOrder(ct)), rightCallback: () => this._slide(this._directionToOrder(ht)), endCallback: () => {
        "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
      } };
      this._swipeHelper = new st(this._element, t2);
    }
    _keydown(t2) {
      if (/input|textarea/i.test(t2.target.tagName)) return;
      const e2 = Tt[t2.key];
      e2 && (t2.preventDefault(), this._slide(this._directionToOrder(e2)));
    }
    _getItemIndex(t2) {
      return this._getItems().indexOf(t2);
    }
    _setActiveIndicatorElement(t2) {
      if (!this._indicatorsElement) return;
      const e2 = z.findOne(wt, this._indicatorsElement);
      e2.classList.remove(yt), e2.removeAttribute("aria-current");
      const i2 = z.findOne(`[data-bs-slide-to="${t2}"]`, this._indicatorsElement);
      i2 && (i2.classList.add(yt), i2.setAttribute("aria-current", "true"));
    }
    _updateInterval() {
      const t2 = this._activeElement || this._getActive();
      if (!t2) return;
      const e2 = Number.parseInt(t2.getAttribute("data-bs-interval"), 10);
      this._config.interval = e2 || this._config.defaultInterval;
    }
    _slide(t2, e2 = null) {
      if (this._isSliding) return;
      const i2 = this._getActive(), n2 = t2 === at, s2 = e2 || b(this._getItems(), i2, n2, this._config.wrap);
      if (s2 === i2) return;
      const o2 = this._getItemIndex(s2), r2 = (e3) => N.trigger(this._element, e3, { relatedTarget: s2, direction: this._orderToDirection(t2), from: this._getItemIndex(i2), to: o2 });
      if (r2(dt).defaultPrevented) return;
      if (!i2 || !s2) return;
      const a2 = Boolean(this._interval);
      this.pause(), this._isSliding = true, this._setActiveIndicatorElement(o2), this._activeElement = s2;
      const l2 = n2 ? "carousel-item-start" : "carousel-item-end", c2 = n2 ? "carousel-item-next" : "carousel-item-prev";
      s2.classList.add(c2), d(s2), i2.classList.add(l2), s2.classList.add(l2), this._queueCallback(() => {
        s2.classList.remove(l2, c2), s2.classList.add(yt), i2.classList.remove(yt, c2, l2), this._isSliding = false, r2(ut);
      }, i2, this._isAnimated()), a2 && this.cycle();
    }
    _isAnimated() {
      return this._element.classList.contains("slide");
    }
    _getActive() {
      return z.findOne(Et, this._element);
    }
    _getItems() {
      return z.find(At, this._element);
    }
    _clearInterval() {
      this._interval && (clearInterval(this._interval), this._interval = null);
    }
    _directionToOrder(t2) {
      return p() ? t2 === ct ? lt : at : t2 === ct ? at : lt;
    }
    _orderToDirection(t2) {
      return p() ? t2 === lt ? ct : ht : t2 === lt ? ht : ct;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = xt.getOrCreateInstance(this, t2);
        if ("number" != typeof t2) {
          if ("string" == typeof t2) {
            if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
            e2[t2]();
          }
        } else e2.to(t2);
      });
    }
  }
  N.on(document, bt, "[data-bs-slide], [data-bs-slide-to]", function(t2) {
    const e2 = z.getElementFromSelector(this);
    if (!e2 || !e2.classList.contains(vt)) return;
    t2.preventDefault();
    const i2 = xt.getOrCreateInstance(e2), n2 = this.getAttribute("data-bs-slide-to");
    return n2 ? (i2.to(n2), void i2._maybeEnableCycle()) : "next" === F.getDataAttribute(this, "slide") ? (i2.next(), void i2._maybeEnableCycle()) : (i2.prev(), void i2._maybeEnableCycle());
  }), N.on(window, _t, () => {
    const t2 = z.find('[data-bs-ride="carousel"]');
    for (const e2 of t2) xt.getOrCreateInstance(e2);
  }), m(xt);
  const kt = ".bs.collapse", Lt = `show${kt}`, St = `shown${kt}`, Dt = `hide${kt}`, $t = `hidden${kt}`, It = `click${kt}.data-api`, Nt = "show", Pt = "collapse", Mt = "collapsing", jt = `:scope .${Pt} .${Pt}`, Ft = '[data-bs-toggle="collapse"]', Ht = { parent: null, toggle: true }, Wt = { parent: "(null|element)", toggle: "boolean" };
  class Bt extends W {
    constructor(t2, e2) {
      super(t2, e2), this._isTransitioning = false, this._triggerArray = [];
      const i2 = z.find(Ft);
      for (const t3 of i2) {
        const e3 = z.getSelectorFromElement(t3), i3 = z.find(e3).filter((t4) => t4 === this._element);
        null !== e3 && i3.length && this._triggerArray.push(t3);
      }
      this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
    }
    static get Default() {
      return Ht;
    }
    static get DefaultType() {
      return Wt;
    }
    static get NAME() {
      return "collapse";
    }
    toggle() {
      this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (this._isTransitioning || this._isShown()) return;
      let t2 = [];
      if (this._config.parent && (t2 = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((t3) => t3 !== this._element).map((t3) => Bt.getOrCreateInstance(t3, { toggle: false }))), t2.length && t2[0]._isTransitioning) return;
      if (N.trigger(this._element, Lt).defaultPrevented) return;
      for (const e3 of t2) e3.hide();
      const e2 = this._getDimension();
      this._element.classList.remove(Pt), this._element.classList.add(Mt), this._element.style[e2] = 0, this._addAriaAndCollapsedClass(this._triggerArray, true), this._isTransitioning = true;
      const i2 = `scroll${e2[0].toUpperCase() + e2.slice(1)}`;
      this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Mt), this._element.classList.add(Pt, Nt), this._element.style[e2] = "", N.trigger(this._element, St);
      }, this._element, true), this._element.style[e2] = `${this._element[i2]}px`;
    }
    hide() {
      if (this._isTransitioning || !this._isShown()) return;
      if (N.trigger(this._element, Dt).defaultPrevented) return;
      const t2 = this._getDimension();
      this._element.style[t2] = `${this._element.getBoundingClientRect()[t2]}px`, d(this._element), this._element.classList.add(Mt), this._element.classList.remove(Pt, Nt);
      for (const t3 of this._triggerArray) {
        const e2 = z.getElementFromSelector(t3);
        e2 && !this._isShown(e2) && this._addAriaAndCollapsedClass([t3], false);
      }
      this._isTransitioning = true, this._element.style[t2] = "", this._queueCallback(() => {
        this._isTransitioning = false, this._element.classList.remove(Mt), this._element.classList.add(Pt), N.trigger(this._element, $t);
      }, this._element, true);
    }
    _isShown(t2 = this._element) {
      return t2.classList.contains(Nt);
    }
    _configAfterMerge(t2) {
      return t2.toggle = Boolean(t2.toggle), t2.parent = r(t2.parent), t2;
    }
    _getDimension() {
      return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
    }
    _initializeChildren() {
      if (!this._config.parent) return;
      const t2 = this._getFirstLevelChildren(Ft);
      for (const e2 of t2) {
        const t3 = z.getElementFromSelector(e2);
        t3 && this._addAriaAndCollapsedClass([e2], this._isShown(t3));
      }
    }
    _getFirstLevelChildren(t2) {
      const e2 = z.find(jt, this._config.parent);
      return z.find(t2, this._config.parent).filter((t3) => !e2.includes(t3));
    }
    _addAriaAndCollapsedClass(t2, e2) {
      if (t2.length) for (const i2 of t2) i2.classList.toggle("collapsed", !e2), i2.setAttribute("aria-expanded", e2);
    }
    static jQueryInterface(t2) {
      const e2 = {};
      return "string" == typeof t2 && /show|hide/.test(t2) && (e2.toggle = false), this.each(function() {
        const i2 = Bt.getOrCreateInstance(this, e2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2]();
        }
      });
    }
  }
  N.on(document, It, Ft, function(t2) {
    ("A" === t2.target.tagName || t2.delegateTarget && "A" === t2.delegateTarget.tagName) && t2.preventDefault();
    for (const t3 of z.getMultipleElementsFromSelector(this)) Bt.getOrCreateInstance(t3, { toggle: false }).toggle();
  }), m(Bt);
  var zt = "top", Rt = "bottom", qt = "right", Vt = "left", Kt = "auto", Qt = [zt, Rt, qt, Vt], Xt = "start", Yt = "end", Ut = "clippingParents", Gt = "viewport", Jt = "popper", Zt = "reference", te = Qt.reduce(function(t2, e2) {
    return t2.concat([e2 + "-" + Xt, e2 + "-" + Yt]);
  }, []), ee = [].concat(Qt, [Kt]).reduce(function(t2, e2) {
    return t2.concat([e2, e2 + "-" + Xt, e2 + "-" + Yt]);
  }, []), ie = "beforeRead", ne = "read", se = "afterRead", oe = "beforeMain", re = "main", ae = "afterMain", le = "beforeWrite", ce = "write", he = "afterWrite", de = [ie, ne, se, oe, re, ae, le, ce, he];
  function ue(t2) {
    return t2 ? (t2.nodeName || "").toLowerCase() : null;
  }
  function fe(t2) {
    if (null == t2) return window;
    if ("[object Window]" !== t2.toString()) {
      var e2 = t2.ownerDocument;
      return e2 && e2.defaultView || window;
    }
    return t2;
  }
  function pe(t2) {
    return t2 instanceof fe(t2).Element || t2 instanceof Element;
  }
  function me(t2) {
    return t2 instanceof fe(t2).HTMLElement || t2 instanceof HTMLElement;
  }
  function ge(t2) {
    return "undefined" != typeof ShadowRoot && (t2 instanceof fe(t2).ShadowRoot || t2 instanceof ShadowRoot);
  }
  const _e = { name: "applyStyles", enabled: true, phase: "write", fn: function(t2) {
    var e2 = t2.state;
    Object.keys(e2.elements).forEach(function(t3) {
      var i2 = e2.styles[t3] || {}, n2 = e2.attributes[t3] || {}, s2 = e2.elements[t3];
      me(s2) && ue(s2) && (Object.assign(s2.style, i2), Object.keys(n2).forEach(function(t4) {
        var e3 = n2[t4];
        false === e3 ? s2.removeAttribute(t4) : s2.setAttribute(t4, true === e3 ? "" : e3);
      }));
    });
  }, effect: function(t2) {
    var e2 = t2.state, i2 = { popper: { position: e2.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
    return Object.assign(e2.elements.popper.style, i2.popper), e2.styles = i2, e2.elements.arrow && Object.assign(e2.elements.arrow.style, i2.arrow), function() {
      Object.keys(e2.elements).forEach(function(t3) {
        var n2 = e2.elements[t3], s2 = e2.attributes[t3] || {}, o2 = Object.keys(e2.styles.hasOwnProperty(t3) ? e2.styles[t3] : i2[t3]).reduce(function(t4, e3) {
          return t4[e3] = "", t4;
        }, {});
        me(n2) && ue(n2) && (Object.assign(n2.style, o2), Object.keys(s2).forEach(function(t4) {
          n2.removeAttribute(t4);
        }));
      });
    };
  }, requires: ["computeStyles"] };
  function be(t2) {
    return t2.split("-")[0];
  }
  var ve = Math.max, ye = Math.min, we = Math.round;
  function Ae() {
    var t2 = navigator.userAgentData;
    return null != t2 && t2.brands && Array.isArray(t2.brands) ? t2.brands.map(function(t3) {
      return t3.brand + "/" + t3.version;
    }).join(" ") : navigator.userAgent;
  }
  function Ee() {
    return !/^((?!chrome|android).)*safari/i.test(Ae());
  }
  function Te(t2, e2, i2) {
    void 0 === e2 && (e2 = false), void 0 === i2 && (i2 = false);
    var n2 = t2.getBoundingClientRect(), s2 = 1, o2 = 1;
    e2 && me(t2) && (s2 = t2.offsetWidth > 0 && we(n2.width) / t2.offsetWidth || 1, o2 = t2.offsetHeight > 0 && we(n2.height) / t2.offsetHeight || 1);
    var r2 = (pe(t2) ? fe(t2) : window).visualViewport, a2 = !Ee() && i2, l2 = (n2.left + (a2 && r2 ? r2.offsetLeft : 0)) / s2, c2 = (n2.top + (a2 && r2 ? r2.offsetTop : 0)) / o2, h2 = n2.width / s2, d2 = n2.height / o2;
    return { width: h2, height: d2, top: c2, right: l2 + h2, bottom: c2 + d2, left: l2, x: l2, y: c2 };
  }
  function Ce(t2) {
    var e2 = Te(t2), i2 = t2.offsetWidth, n2 = t2.offsetHeight;
    return Math.abs(e2.width - i2) <= 1 && (i2 = e2.width), Math.abs(e2.height - n2) <= 1 && (n2 = e2.height), { x: t2.offsetLeft, y: t2.offsetTop, width: i2, height: n2 };
  }
  function Oe(t2, e2) {
    var i2 = e2.getRootNode && e2.getRootNode();
    if (t2.contains(e2)) return true;
    if (i2 && ge(i2)) {
      var n2 = e2;
      do {
        if (n2 && t2.isSameNode(n2)) return true;
        n2 = n2.parentNode || n2.host;
      } while (n2);
    }
    return false;
  }
  function xe(t2) {
    return fe(t2).getComputedStyle(t2);
  }
  function ke(t2) {
    return ["table", "td", "th"].indexOf(ue(t2)) >= 0;
  }
  function Le(t2) {
    return ((pe(t2) ? t2.ownerDocument : t2.document) || window.document).documentElement;
  }
  function Se(t2) {
    return "html" === ue(t2) ? t2 : t2.assignedSlot || t2.parentNode || (ge(t2) ? t2.host : null) || Le(t2);
  }
  function De(t2) {
    return me(t2) && "fixed" !== xe(t2).position ? t2.offsetParent : null;
  }
  function $e(t2) {
    for (var e2 = fe(t2), i2 = De(t2); i2 && ke(i2) && "static" === xe(i2).position; ) i2 = De(i2);
    return i2 && ("html" === ue(i2) || "body" === ue(i2) && "static" === xe(i2).position) ? e2 : i2 || function(t3) {
      var e3 = /firefox/i.test(Ae());
      if (/Trident/i.test(Ae()) && me(t3) && "fixed" === xe(t3).position) return null;
      var i3 = Se(t3);
      for (ge(i3) && (i3 = i3.host); me(i3) && ["html", "body"].indexOf(ue(i3)) < 0; ) {
        var n2 = xe(i3);
        if ("none" !== n2.transform || "none" !== n2.perspective || "paint" === n2.contain || -1 !== ["transform", "perspective"].indexOf(n2.willChange) || e3 && "filter" === n2.willChange || e3 && n2.filter && "none" !== n2.filter) return i3;
        i3 = i3.parentNode;
      }
      return null;
    }(t2) || e2;
  }
  function Ie(t2) {
    return ["top", "bottom"].indexOf(t2) >= 0 ? "x" : "y";
  }
  function Ne(t2, e2, i2) {
    return ve(t2, ye(e2, i2));
  }
  function Pe(t2) {
    return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, t2);
  }
  function Me(t2, e2) {
    return e2.reduce(function(e3, i2) {
      return e3[i2] = t2, e3;
    }, {});
  }
  const je = { name: "arrow", enabled: true, phase: "main", fn: function(t2) {
    var e2, i2 = t2.state, n2 = t2.name, s2 = t2.options, o2 = i2.elements.arrow, r2 = i2.modifiersData.popperOffsets, a2 = be(i2.placement), l2 = Ie(a2), c2 = [Vt, qt].indexOf(a2) >= 0 ? "height" : "width";
    if (o2 && r2) {
      var h2 = function(t3, e3) {
        return Pe("number" != typeof (t3 = "function" == typeof t3 ? t3(Object.assign({}, e3.rects, { placement: e3.placement })) : t3) ? t3 : Me(t3, Qt));
      }(s2.padding, i2), d2 = Ce(o2), u2 = "y" === l2 ? zt : Vt, f2 = "y" === l2 ? Rt : qt, p2 = i2.rects.reference[c2] + i2.rects.reference[l2] - r2[l2] - i2.rects.popper[c2], m2 = r2[l2] - i2.rects.reference[l2], g2 = $e(o2), _2 = g2 ? "y" === l2 ? g2.clientHeight || 0 : g2.clientWidth || 0 : 0, b2 = p2 / 2 - m2 / 2, v2 = h2[u2], y2 = _2 - d2[c2] - h2[f2], w2 = _2 / 2 - d2[c2] / 2 + b2, A2 = Ne(v2, w2, y2), E2 = l2;
      i2.modifiersData[n2] = ((e2 = {})[E2] = A2, e2.centerOffset = A2 - w2, e2);
    }
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.options.element, n2 = void 0 === i2 ? "[data-popper-arrow]" : i2;
    null != n2 && ("string" != typeof n2 || (n2 = e2.elements.popper.querySelector(n2))) && Oe(e2.elements.popper, n2) && (e2.elements.arrow = n2);
  }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
  function Fe(t2) {
    return t2.split("-")[1];
  }
  var He = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
  function We(t2) {
    var e2, i2 = t2.popper, n2 = t2.popperRect, s2 = t2.placement, o2 = t2.variation, r2 = t2.offsets, a2 = t2.position, l2 = t2.gpuAcceleration, c2 = t2.adaptive, h2 = t2.roundOffsets, d2 = t2.isFixed, u2 = r2.x, f2 = void 0 === u2 ? 0 : u2, p2 = r2.y, m2 = void 0 === p2 ? 0 : p2, g2 = "function" == typeof h2 ? h2({ x: f2, y: m2 }) : { x: f2, y: m2 };
    f2 = g2.x, m2 = g2.y;
    var _2 = r2.hasOwnProperty("x"), b2 = r2.hasOwnProperty("y"), v2 = Vt, y2 = zt, w2 = window;
    if (c2) {
      var A2 = $e(i2), E2 = "clientHeight", T2 = "clientWidth";
      A2 === fe(i2) && "static" !== xe(A2 = Le(i2)).position && "absolute" === a2 && (E2 = "scrollHeight", T2 = "scrollWidth"), (s2 === zt || (s2 === Vt || s2 === qt) && o2 === Yt) && (y2 = Rt, m2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.height : A2[E2]) - n2.height, m2 *= l2 ? 1 : -1), s2 !== Vt && (s2 !== zt && s2 !== Rt || o2 !== Yt) || (v2 = qt, f2 -= (d2 && A2 === w2 && w2.visualViewport ? w2.visualViewport.width : A2[T2]) - n2.width, f2 *= l2 ? 1 : -1);
    }
    var C2, O2 = Object.assign({ position: a2 }, c2 && He), x2 = true === h2 ? function(t3, e3) {
      var i3 = t3.x, n3 = t3.y, s3 = e3.devicePixelRatio || 1;
      return { x: we(i3 * s3) / s3 || 0, y: we(n3 * s3) / s3 || 0 };
    }({ x: f2, y: m2 }, fe(i2)) : { x: f2, y: m2 };
    return f2 = x2.x, m2 = x2.y, l2 ? Object.assign({}, O2, ((C2 = {})[y2] = b2 ? "0" : "", C2[v2] = _2 ? "0" : "", C2.transform = (w2.devicePixelRatio || 1) <= 1 ? "translate(" + f2 + "px, " + m2 + "px)" : "translate3d(" + f2 + "px, " + m2 + "px, 0)", C2)) : Object.assign({}, O2, ((e2 = {})[y2] = b2 ? m2 + "px" : "", e2[v2] = _2 ? f2 + "px" : "", e2.transform = "", e2));
  }
  const Be = { name: "computeStyles", enabled: true, phase: "beforeWrite", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = i2.gpuAcceleration, s2 = void 0 === n2 || n2, o2 = i2.adaptive, r2 = void 0 === o2 || o2, a2 = i2.roundOffsets, l2 = void 0 === a2 || a2, c2 = { placement: be(e2.placement), variation: Fe(e2.placement), popper: e2.elements.popper, popperRect: e2.rects.popper, gpuAcceleration: s2, isFixed: "fixed" === e2.options.strategy };
    null != e2.modifiersData.popperOffsets && (e2.styles.popper = Object.assign({}, e2.styles.popper, We(Object.assign({}, c2, { offsets: e2.modifiersData.popperOffsets, position: e2.options.strategy, adaptive: r2, roundOffsets: l2 })))), null != e2.modifiersData.arrow && (e2.styles.arrow = Object.assign({}, e2.styles.arrow, We(Object.assign({}, c2, { offsets: e2.modifiersData.arrow, position: "absolute", adaptive: false, roundOffsets: l2 })))), e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-placement": e2.placement });
  }, data: {} };
  var ze = { passive: true };
  const Re = { name: "eventListeners", enabled: true, phase: "write", fn: function() {
  }, effect: function(t2) {
    var e2 = t2.state, i2 = t2.instance, n2 = t2.options, s2 = n2.scroll, o2 = void 0 === s2 || s2, r2 = n2.resize, a2 = void 0 === r2 || r2, l2 = fe(e2.elements.popper), c2 = [].concat(e2.scrollParents.reference, e2.scrollParents.popper);
    return o2 && c2.forEach(function(t3) {
      t3.addEventListener("scroll", i2.update, ze);
    }), a2 && l2.addEventListener("resize", i2.update, ze), function() {
      o2 && c2.forEach(function(t3) {
        t3.removeEventListener("scroll", i2.update, ze);
      }), a2 && l2.removeEventListener("resize", i2.update, ze);
    };
  }, data: {} };
  var qe = { left: "right", right: "left", bottom: "top", top: "bottom" };
  function Ve(t2) {
    return t2.replace(/left|right|bottom|top/g, function(t3) {
      return qe[t3];
    });
  }
  var Ke = { start: "end", end: "start" };
  function Qe(t2) {
    return t2.replace(/start|end/g, function(t3) {
      return Ke[t3];
    });
  }
  function Xe(t2) {
    var e2 = fe(t2);
    return { scrollLeft: e2.pageXOffset, scrollTop: e2.pageYOffset };
  }
  function Ye(t2) {
    return Te(Le(t2)).left + Xe(t2).scrollLeft;
  }
  function Ue(t2) {
    var e2 = xe(t2), i2 = e2.overflow, n2 = e2.overflowX, s2 = e2.overflowY;
    return /auto|scroll|overlay|hidden/.test(i2 + s2 + n2);
  }
  function Ge(t2) {
    return ["html", "body", "#document"].indexOf(ue(t2)) >= 0 ? t2.ownerDocument.body : me(t2) && Ue(t2) ? t2 : Ge(Se(t2));
  }
  function Je(t2, e2) {
    var i2;
    void 0 === e2 && (e2 = []);
    var n2 = Ge(t2), s2 = n2 === (null == (i2 = t2.ownerDocument) ? void 0 : i2.body), o2 = fe(n2), r2 = s2 ? [o2].concat(o2.visualViewport || [], Ue(n2) ? n2 : []) : n2, a2 = e2.concat(r2);
    return s2 ? a2 : a2.concat(Je(Se(r2)));
  }
  function Ze(t2) {
    return Object.assign({}, t2, { left: t2.x, top: t2.y, right: t2.x + t2.width, bottom: t2.y + t2.height });
  }
  function ti(t2, e2, i2) {
    return e2 === Gt ? Ze(function(t3, e3) {
      var i3 = fe(t3), n2 = Le(t3), s2 = i3.visualViewport, o2 = n2.clientWidth, r2 = n2.clientHeight, a2 = 0, l2 = 0;
      if (s2) {
        o2 = s2.width, r2 = s2.height;
        var c2 = Ee();
        (c2 || !c2 && "fixed" === e3) && (a2 = s2.offsetLeft, l2 = s2.offsetTop);
      }
      return { width: o2, height: r2, x: a2 + Ye(t3), y: l2 };
    }(t2, i2)) : pe(e2) ? function(t3, e3) {
      var i3 = Te(t3, false, "fixed" === e3);
      return i3.top = i3.top + t3.clientTop, i3.left = i3.left + t3.clientLeft, i3.bottom = i3.top + t3.clientHeight, i3.right = i3.left + t3.clientWidth, i3.width = t3.clientWidth, i3.height = t3.clientHeight, i3.x = i3.left, i3.y = i3.top, i3;
    }(e2, i2) : Ze(function(t3) {
      var e3, i3 = Le(t3), n2 = Xe(t3), s2 = null == (e3 = t3.ownerDocument) ? void 0 : e3.body, o2 = ve(i3.scrollWidth, i3.clientWidth, s2 ? s2.scrollWidth : 0, s2 ? s2.clientWidth : 0), r2 = ve(i3.scrollHeight, i3.clientHeight, s2 ? s2.scrollHeight : 0, s2 ? s2.clientHeight : 0), a2 = -n2.scrollLeft + Ye(t3), l2 = -n2.scrollTop;
      return "rtl" === xe(s2 || i3).direction && (a2 += ve(i3.clientWidth, s2 ? s2.clientWidth : 0) - o2), { width: o2, height: r2, x: a2, y: l2 };
    }(Le(t2)));
  }
  function ei(t2) {
    var e2, i2 = t2.reference, n2 = t2.element, s2 = t2.placement, o2 = s2 ? be(s2) : null, r2 = s2 ? Fe(s2) : null, a2 = i2.x + i2.width / 2 - n2.width / 2, l2 = i2.y + i2.height / 2 - n2.height / 2;
    switch (o2) {
      case zt:
        e2 = { x: a2, y: i2.y - n2.height };
        break;
      case Rt:
        e2 = { x: a2, y: i2.y + i2.height };
        break;
      case qt:
        e2 = { x: i2.x + i2.width, y: l2 };
        break;
      case Vt:
        e2 = { x: i2.x - n2.width, y: l2 };
        break;
      default:
        e2 = { x: i2.x, y: i2.y };
    }
    var c2 = o2 ? Ie(o2) : null;
    if (null != c2) {
      var h2 = "y" === c2 ? "height" : "width";
      switch (r2) {
        case Xt:
          e2[c2] = e2[c2] - (i2[h2] / 2 - n2[h2] / 2);
          break;
        case Yt:
          e2[c2] = e2[c2] + (i2[h2] / 2 - n2[h2] / 2);
      }
    }
    return e2;
  }
  function ii(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = void 0 === n2 ? t2.placement : n2, o2 = i2.strategy, r2 = void 0 === o2 ? t2.strategy : o2, a2 = i2.boundary, l2 = void 0 === a2 ? Ut : a2, c2 = i2.rootBoundary, h2 = void 0 === c2 ? Gt : c2, d2 = i2.elementContext, u2 = void 0 === d2 ? Jt : d2, f2 = i2.altBoundary, p2 = void 0 !== f2 && f2, m2 = i2.padding, g2 = void 0 === m2 ? 0 : m2, _2 = Pe("number" != typeof g2 ? g2 : Me(g2, Qt)), b2 = u2 === Jt ? Zt : Jt, v2 = t2.rects.popper, y2 = t2.elements[p2 ? b2 : u2], w2 = function(t3, e3, i3, n3) {
      var s3 = "clippingParents" === e3 ? function(t4) {
        var e4 = Je(Se(t4)), i4 = ["absolute", "fixed"].indexOf(xe(t4).position) >= 0 && me(t4) ? $e(t4) : t4;
        return pe(i4) ? e4.filter(function(t5) {
          return pe(t5) && Oe(t5, i4) && "body" !== ue(t5);
        }) : [];
      }(t3) : [].concat(e3), o3 = [].concat(s3, [i3]), r3 = o3[0], a3 = o3.reduce(function(e4, i4) {
        var s4 = ti(t3, i4, n3);
        return e4.top = ve(s4.top, e4.top), e4.right = ye(s4.right, e4.right), e4.bottom = ye(s4.bottom, e4.bottom), e4.left = ve(s4.left, e4.left), e4;
      }, ti(t3, r3, n3));
      return a3.width = a3.right - a3.left, a3.height = a3.bottom - a3.top, a3.x = a3.left, a3.y = a3.top, a3;
    }(pe(y2) ? y2 : y2.contextElement || Le(t2.elements.popper), l2, h2, r2), A2 = Te(t2.elements.reference), E2 = ei({ reference: A2, element: v2, strategy: "absolute", placement: s2 }), T2 = Ze(Object.assign({}, v2, E2)), C2 = u2 === Jt ? T2 : A2, O2 = { top: w2.top - C2.top + _2.top, bottom: C2.bottom - w2.bottom + _2.bottom, left: w2.left - C2.left + _2.left, right: C2.right - w2.right + _2.right }, x2 = t2.modifiersData.offset;
    if (u2 === Jt && x2) {
      var k2 = x2[s2];
      Object.keys(O2).forEach(function(t3) {
        var e3 = [qt, Rt].indexOf(t3) >= 0 ? 1 : -1, i3 = [zt, Rt].indexOf(t3) >= 0 ? "y" : "x";
        O2[t3] += k2[i3] * e3;
      });
    }
    return O2;
  }
  function ni(t2, e2) {
    void 0 === e2 && (e2 = {});
    var i2 = e2, n2 = i2.placement, s2 = i2.boundary, o2 = i2.rootBoundary, r2 = i2.padding, a2 = i2.flipVariations, l2 = i2.allowedAutoPlacements, c2 = void 0 === l2 ? ee : l2, h2 = Fe(n2), d2 = h2 ? a2 ? te : te.filter(function(t3) {
      return Fe(t3) === h2;
    }) : Qt, u2 = d2.filter(function(t3) {
      return c2.indexOf(t3) >= 0;
    });
    0 === u2.length && (u2 = d2);
    var f2 = u2.reduce(function(e3, i3) {
      return e3[i3] = ii(t2, { placement: i3, boundary: s2, rootBoundary: o2, padding: r2 })[be(i3)], e3;
    }, {});
    return Object.keys(f2).sort(function(t3, e3) {
      return f2[t3] - f2[e3];
    });
  }
  const si = { name: "flip", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name;
    if (!e2.modifiersData[n2]._skip) {
      for (var s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 === r2 || r2, l2 = i2.fallbackPlacements, c2 = i2.padding, h2 = i2.boundary, d2 = i2.rootBoundary, u2 = i2.altBoundary, f2 = i2.flipVariations, p2 = void 0 === f2 || f2, m2 = i2.allowedAutoPlacements, g2 = e2.options.placement, _2 = be(g2), b2 = l2 || (_2 !== g2 && p2 ? function(t3) {
        if (be(t3) === Kt) return [];
        var e3 = Ve(t3);
        return [Qe(t3), e3, Qe(e3)];
      }(g2) : [Ve(g2)]), v2 = [g2].concat(b2).reduce(function(t3, i3) {
        return t3.concat(be(i3) === Kt ? ni(e2, { placement: i3, boundary: h2, rootBoundary: d2, padding: c2, flipVariations: p2, allowedAutoPlacements: m2 }) : i3);
      }, []), y2 = e2.rects.reference, w2 = e2.rects.popper, A2 = /* @__PURE__ */ new Map(), E2 = true, T2 = v2[0], C2 = 0; C2 < v2.length; C2++) {
        var O2 = v2[C2], x2 = be(O2), k2 = Fe(O2) === Xt, L2 = [zt, Rt].indexOf(x2) >= 0, S2 = L2 ? "width" : "height", D2 = ii(e2, { placement: O2, boundary: h2, rootBoundary: d2, altBoundary: u2, padding: c2 }), $2 = L2 ? k2 ? qt : Vt : k2 ? Rt : zt;
        y2[S2] > w2[S2] && ($2 = Ve($2));
        var I2 = Ve($2), N2 = [];
        if (o2 && N2.push(D2[x2] <= 0), a2 && N2.push(D2[$2] <= 0, D2[I2] <= 0), N2.every(function(t3) {
          return t3;
        })) {
          T2 = O2, E2 = false;
          break;
        }
        A2.set(O2, N2);
      }
      if (E2) for (var P2 = function(t3) {
        var e3 = v2.find(function(e4) {
          var i3 = A2.get(e4);
          if (i3) return i3.slice(0, t3).every(function(t4) {
            return t4;
          });
        });
        if (e3) return T2 = e3, "break";
      }, M2 = p2 ? 3 : 1; M2 > 0 && "break" !== P2(M2); M2--) ;
      e2.placement !== T2 && (e2.modifiersData[n2]._skip = true, e2.placement = T2, e2.reset = true);
    }
  }, requiresIfExists: ["offset"], data: { _skip: false } };
  function oi(t2, e2, i2) {
    return void 0 === i2 && (i2 = { x: 0, y: 0 }), { top: t2.top - e2.height - i2.y, right: t2.right - e2.width + i2.x, bottom: t2.bottom - e2.height + i2.y, left: t2.left - e2.width - i2.x };
  }
  function ri(t2) {
    return [zt, qt, Rt, Vt].some(function(e2) {
      return t2[e2] >= 0;
    });
  }
  const ai = { name: "hide", enabled: true, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.name, n2 = e2.rects.reference, s2 = e2.rects.popper, o2 = e2.modifiersData.preventOverflow, r2 = ii(e2, { elementContext: "reference" }), a2 = ii(e2, { altBoundary: true }), l2 = oi(r2, n2), c2 = oi(a2, s2, o2), h2 = ri(l2), d2 = ri(c2);
    e2.modifiersData[i2] = { referenceClippingOffsets: l2, popperEscapeOffsets: c2, isReferenceHidden: h2, hasPopperEscaped: d2 }, e2.attributes.popper = Object.assign({}, e2.attributes.popper, { "data-popper-reference-hidden": h2, "data-popper-escaped": d2 });
  } }, li = { name: "offset", enabled: true, phase: "main", requires: ["popperOffsets"], fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.offset, o2 = void 0 === s2 ? [0, 0] : s2, r2 = ee.reduce(function(t3, i3) {
      return t3[i3] = function(t4, e3, i4) {
        var n3 = be(t4), s3 = [Vt, zt].indexOf(n3) >= 0 ? -1 : 1, o3 = "function" == typeof i4 ? i4(Object.assign({}, e3, { placement: t4 })) : i4, r3 = o3[0], a3 = o3[1];
        return r3 = r3 || 0, a3 = (a3 || 0) * s3, [Vt, qt].indexOf(n3) >= 0 ? { x: a3, y: r3 } : { x: r3, y: a3 };
      }(i3, e2.rects, o2), t3;
    }, {}), a2 = r2[e2.placement], l2 = a2.x, c2 = a2.y;
    null != e2.modifiersData.popperOffsets && (e2.modifiersData.popperOffsets.x += l2, e2.modifiersData.popperOffsets.y += c2), e2.modifiersData[n2] = r2;
  } }, ci = { name: "popperOffsets", enabled: true, phase: "read", fn: function(t2) {
    var e2 = t2.state, i2 = t2.name;
    e2.modifiersData[i2] = ei({ reference: e2.rects.reference, element: e2.rects.popper, strategy: "absolute", placement: e2.placement });
  }, data: {} }, hi = { name: "preventOverflow", enabled: true, phase: "main", fn: function(t2) {
    var e2 = t2.state, i2 = t2.options, n2 = t2.name, s2 = i2.mainAxis, o2 = void 0 === s2 || s2, r2 = i2.altAxis, a2 = void 0 !== r2 && r2, l2 = i2.boundary, c2 = i2.rootBoundary, h2 = i2.altBoundary, d2 = i2.padding, u2 = i2.tether, f2 = void 0 === u2 || u2, p2 = i2.tetherOffset, m2 = void 0 === p2 ? 0 : p2, g2 = ii(e2, { boundary: l2, rootBoundary: c2, padding: d2, altBoundary: h2 }), _2 = be(e2.placement), b2 = Fe(e2.placement), v2 = !b2, y2 = Ie(_2), w2 = "x" === y2 ? "y" : "x", A2 = e2.modifiersData.popperOffsets, E2 = e2.rects.reference, T2 = e2.rects.popper, C2 = "function" == typeof m2 ? m2(Object.assign({}, e2.rects, { placement: e2.placement })) : m2, O2 = "number" == typeof C2 ? { mainAxis: C2, altAxis: C2 } : Object.assign({ mainAxis: 0, altAxis: 0 }, C2), x2 = e2.modifiersData.offset ? e2.modifiersData.offset[e2.placement] : null, k2 = { x: 0, y: 0 };
    if (A2) {
      if (o2) {
        var L2, S2 = "y" === y2 ? zt : Vt, D2 = "y" === y2 ? Rt : qt, $2 = "y" === y2 ? "height" : "width", I2 = A2[y2], N2 = I2 + g2[S2], P2 = I2 - g2[D2], M2 = f2 ? -T2[$2] / 2 : 0, j2 = b2 === Xt ? E2[$2] : T2[$2], F2 = b2 === Xt ? -T2[$2] : -E2[$2], H2 = e2.elements.arrow, W2 = f2 && H2 ? Ce(H2) : { width: 0, height: 0 }, B2 = e2.modifiersData["arrow#persistent"] ? e2.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, z2 = B2[S2], R2 = B2[D2], q2 = Ne(0, E2[$2], W2[$2]), V2 = v2 ? E2[$2] / 2 - M2 - q2 - z2 - O2.mainAxis : j2 - q2 - z2 - O2.mainAxis, K2 = v2 ? -E2[$2] / 2 + M2 + q2 + R2 + O2.mainAxis : F2 + q2 + R2 + O2.mainAxis, Q2 = e2.elements.arrow && $e(e2.elements.arrow), X2 = Q2 ? "y" === y2 ? Q2.clientTop || 0 : Q2.clientLeft || 0 : 0, Y2 = null != (L2 = null == x2 ? void 0 : x2[y2]) ? L2 : 0, U2 = I2 + K2 - Y2, G2 = Ne(f2 ? ye(N2, I2 + V2 - Y2 - X2) : N2, I2, f2 ? ve(P2, U2) : P2);
        A2[y2] = G2, k2[y2] = G2 - I2;
      }
      if (a2) {
        var J2, Z2 = "x" === y2 ? zt : Vt, tt2 = "x" === y2 ? Rt : qt, et2 = A2[w2], it2 = "y" === w2 ? "height" : "width", nt2 = et2 + g2[Z2], st2 = et2 - g2[tt2], ot2 = -1 !== [zt, Vt].indexOf(_2), rt2 = null != (J2 = null == x2 ? void 0 : x2[w2]) ? J2 : 0, at2 = ot2 ? nt2 : et2 - E2[it2] - T2[it2] - rt2 + O2.altAxis, lt2 = ot2 ? et2 + E2[it2] + T2[it2] - rt2 - O2.altAxis : st2, ct2 = f2 && ot2 ? function(t3, e3, i3) {
          var n3 = Ne(t3, e3, i3);
          return n3 > i3 ? i3 : n3;
        }(at2, et2, lt2) : Ne(f2 ? at2 : nt2, et2, f2 ? lt2 : st2);
        A2[w2] = ct2, k2[w2] = ct2 - et2;
      }
      e2.modifiersData[n2] = k2;
    }
  }, requiresIfExists: ["offset"] };
  function di(t2, e2, i2) {
    void 0 === i2 && (i2 = false);
    var n2, s2, o2 = me(e2), r2 = me(e2) && function(t3) {
      var e3 = t3.getBoundingClientRect(), i3 = we(e3.width) / t3.offsetWidth || 1, n3 = we(e3.height) / t3.offsetHeight || 1;
      return 1 !== i3 || 1 !== n3;
    }(e2), a2 = Le(e2), l2 = Te(t2, r2, i2), c2 = { scrollLeft: 0, scrollTop: 0 }, h2 = { x: 0, y: 0 };
    return (o2 || !o2 && !i2) && (("body" !== ue(e2) || Ue(a2)) && (c2 = (n2 = e2) !== fe(n2) && me(n2) ? { scrollLeft: (s2 = n2).scrollLeft, scrollTop: s2.scrollTop } : Xe(n2)), me(e2) ? ((h2 = Te(e2, true)).x += e2.clientLeft, h2.y += e2.clientTop) : a2 && (h2.x = Ye(a2))), { x: l2.left + c2.scrollLeft - h2.x, y: l2.top + c2.scrollTop - h2.y, width: l2.width, height: l2.height };
  }
  function ui(t2) {
    var e2 = /* @__PURE__ */ new Map(), i2 = /* @__PURE__ */ new Set(), n2 = [];
    function s2(t3) {
      i2.add(t3.name), [].concat(t3.requires || [], t3.requiresIfExists || []).forEach(function(t4) {
        if (!i2.has(t4)) {
          var n3 = e2.get(t4);
          n3 && s2(n3);
        }
      }), n2.push(t3);
    }
    return t2.forEach(function(t3) {
      e2.set(t3.name, t3);
    }), t2.forEach(function(t3) {
      i2.has(t3.name) || s2(t3);
    }), n2;
  }
  var fi = { placement: "bottom", modifiers: [], strategy: "absolute" };
  function pi() {
    for (var t2 = arguments.length, e2 = new Array(t2), i2 = 0; i2 < t2; i2++) e2[i2] = arguments[i2];
    return !e2.some(function(t3) {
      return !(t3 && "function" == typeof t3.getBoundingClientRect);
    });
  }
  function mi(t2) {
    void 0 === t2 && (t2 = {});
    var e2 = t2, i2 = e2.defaultModifiers, n2 = void 0 === i2 ? [] : i2, s2 = e2.defaultOptions, o2 = void 0 === s2 ? fi : s2;
    return function(t3, e3, i3) {
      void 0 === i3 && (i3 = o2);
      var s3, r2, a2 = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, fi, o2), modifiersData: {}, elements: { reference: t3, popper: e3 }, attributes: {}, styles: {} }, l2 = [], c2 = false, h2 = { state: a2, setOptions: function(i4) {
        var s4 = "function" == typeof i4 ? i4(a2.options) : i4;
        d2(), a2.options = Object.assign({}, o2, a2.options, s4), a2.scrollParents = { reference: pe(t3) ? Je(t3) : t3.contextElement ? Je(t3.contextElement) : [], popper: Je(e3) };
        var r3, c3, u2 = function(t4) {
          var e4 = ui(t4);
          return de.reduce(function(t5, i5) {
            return t5.concat(e4.filter(function(t6) {
              return t6.phase === i5;
            }));
          }, []);
        }((r3 = [].concat(n2, a2.options.modifiers), c3 = r3.reduce(function(t4, e4) {
          var i5 = t4[e4.name];
          return t4[e4.name] = i5 ? Object.assign({}, i5, e4, { options: Object.assign({}, i5.options, e4.options), data: Object.assign({}, i5.data, e4.data) }) : e4, t4;
        }, {}), Object.keys(c3).map(function(t4) {
          return c3[t4];
        })));
        return a2.orderedModifiers = u2.filter(function(t4) {
          return t4.enabled;
        }), a2.orderedModifiers.forEach(function(t4) {
          var e4 = t4.name, i5 = t4.options, n3 = void 0 === i5 ? {} : i5, s5 = t4.effect;
          if ("function" == typeof s5) {
            var o3 = s5({ state: a2, name: e4, instance: h2, options: n3 });
            l2.push(o3 || function() {
            });
          }
        }), h2.update();
      }, forceUpdate: function() {
        if (!c2) {
          var t4 = a2.elements, e4 = t4.reference, i4 = t4.popper;
          if (pi(e4, i4)) {
            a2.rects = { reference: di(e4, $e(i4), "fixed" === a2.options.strategy), popper: Ce(i4) }, a2.reset = false, a2.placement = a2.options.placement, a2.orderedModifiers.forEach(function(t5) {
              return a2.modifiersData[t5.name] = Object.assign({}, t5.data);
            });
            for (var n3 = 0; n3 < a2.orderedModifiers.length; n3++) if (true !== a2.reset) {
              var s4 = a2.orderedModifiers[n3], o3 = s4.fn, r3 = s4.options, l3 = void 0 === r3 ? {} : r3, d3 = s4.name;
              "function" == typeof o3 && (a2 = o3({ state: a2, options: l3, name: d3, instance: h2 }) || a2);
            } else a2.reset = false, n3 = -1;
          }
        }
      }, update: (s3 = function() {
        return new Promise(function(t4) {
          h2.forceUpdate(), t4(a2);
        });
      }, function() {
        return r2 || (r2 = new Promise(function(t4) {
          Promise.resolve().then(function() {
            r2 = void 0, t4(s3());
          });
        })), r2;
      }), destroy: function() {
        d2(), c2 = true;
      } };
      if (!pi(t3, e3)) return h2;
      function d2() {
        l2.forEach(function(t4) {
          return t4();
        }), l2 = [];
      }
      return h2.setOptions(i3).then(function(t4) {
        !c2 && i3.onFirstUpdate && i3.onFirstUpdate(t4);
      }), h2;
    };
  }
  var gi = mi(), _i = mi({ defaultModifiers: [Re, ci, Be, _e] }), bi = mi({ defaultModifiers: [Re, ci, Be, _e, li, si, hi, je, ai] });
  const vi = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: ae, afterRead: se, afterWrite: he, applyStyles: _e, arrow: je, auto: Kt, basePlacements: Qt, beforeMain: oe, beforeRead: ie, beforeWrite: le, bottom: Rt, clippingParents: Ut, computeStyles: Be, createPopper: bi, createPopperBase: gi, createPopperLite: _i, detectOverflow: ii, end: Yt, eventListeners: Re, flip: si, hide: ai, left: Vt, main: re, modifierPhases: de, offset: li, placements: ee, popper: Jt, popperGenerator: mi, popperOffsets: ci, preventOverflow: hi, read: ne, reference: Zt, right: qt, start: Xt, top: zt, variationPlacements: te, viewport: Gt, write: ce }, Symbol.toStringTag, { value: "Module" })), yi = "dropdown", wi = ".bs.dropdown", Ai = ".data-api", Ei = "ArrowUp", Ti = "ArrowDown", Ci = `hide${wi}`, Oi = `hidden${wi}`, xi = `show${wi}`, ki = `shown${wi}`, Li = `click${wi}${Ai}`, Si = `keydown${wi}${Ai}`, Di = `keyup${wi}${Ai}`, $i = "show", Ii = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', Ni = `${Ii}.${$i}`, Pi = ".dropdown-menu", Mi = p() ? "top-end" : "top-start", ji = p() ? "top-start" : "top-end", Fi = p() ? "bottom-end" : "bottom-start", Hi = p() ? "bottom-start" : "bottom-end", Wi = p() ? "left-start" : "right-start", Bi = p() ? "right-start" : "left-start", zi = { autoClose: true, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, Ri = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
  class qi extends W {
    constructor(t2, e2) {
      super(t2, e2), this._popper = null, this._parent = this._element.parentNode, this._menu = z.next(this._element, Pi)[0] || z.prev(this._element, Pi)[0] || z.findOne(Pi, this._parent), this._inNavbar = this._detectNavbar();
    }
    static get Default() {
      return zi;
    }
    static get DefaultType() {
      return Ri;
    }
    static get NAME() {
      return yi;
    }
    toggle() {
      return this._isShown() ? this.hide() : this.show();
    }
    show() {
      if (l(this._element) || this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      if (!N.trigger(this._element, xi, t2).defaultPrevented) {
        if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const t3 of [].concat(...document.body.children)) N.on(t3, "mouseover", h);
        this._element.focus(), this._element.setAttribute("aria-expanded", true), this._menu.classList.add($i), this._element.classList.add($i), N.trigger(this._element, ki, t2);
      }
    }
    hide() {
      if (l(this._element) || !this._isShown()) return;
      const t2 = { relatedTarget: this._element };
      this._completeHide(t2);
    }
    dispose() {
      this._popper && this._popper.destroy(), super.dispose();
    }
    update() {
      this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
    }
    _completeHide(t2) {
      if (!N.trigger(this._element, Ci, t2).defaultPrevented) {
        if ("ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) N.off(t3, "mouseover", h);
        this._popper && this._popper.destroy(), this._menu.classList.remove($i), this._element.classList.remove($i), this._element.setAttribute("aria-expanded", "false"), F.removeDataAttribute(this._menu, "popper"), N.trigger(this._element, Oi, t2);
      }
    }
    _getConfig(t2) {
      if ("object" == typeof (t2 = super._getConfig(t2)).reference && !o(t2.reference) && "function" != typeof t2.reference.getBoundingClientRect) throw new TypeError(`${yi.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
      return t2;
    }
    _createPopper() {
      if (void 0 === vi) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
      let t2 = this._element;
      "parent" === this._config.reference ? t2 = this._parent : o(this._config.reference) ? t2 = r(this._config.reference) : "object" == typeof this._config.reference && (t2 = this._config.reference);
      const e2 = this._getPopperConfig();
      this._popper = bi(t2, this._menu, e2);
    }
    _isShown() {
      return this._menu.classList.contains($i);
    }
    _getPlacement() {
      const t2 = this._parent;
      if (t2.classList.contains("dropend")) return Wi;
      if (t2.classList.contains("dropstart")) return Bi;
      if (t2.classList.contains("dropup-center")) return "top";
      if (t2.classList.contains("dropdown-center")) return "bottom";
      const e2 = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
      return t2.classList.contains("dropup") ? e2 ? ji : Mi : e2 ? Hi : Fi;
    }
    _detectNavbar() {
      return null !== this._element.closest(".navbar");
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _getPopperConfig() {
      const t2 = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
      return (this._inNavbar || "static" === this._config.display) && (F.setDataAttribute(this._menu, "popper", "static"), t2.modifiers = [{ name: "applyStyles", enabled: false }]), { ...t2, ...g(this._config.popperConfig, [t2]) };
    }
    _selectMenuItem({ key: t2, target: e2 }) {
      const i2 = z.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((t3) => a(t3));
      i2.length && b(i2, e2, t2 === Ti, !i2.includes(e2)).focus();
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = qi.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
    static clearMenus(t2) {
      if (2 === t2.button || "keyup" === t2.type && "Tab" !== t2.key) return;
      const e2 = z.find(Ni);
      for (const i2 of e2) {
        const e3 = qi.getInstance(i2);
        if (!e3 || false === e3._config.autoClose) continue;
        const n2 = t2.composedPath(), s2 = n2.includes(e3._menu);
        if (n2.includes(e3._element) || "inside" === e3._config.autoClose && !s2 || "outside" === e3._config.autoClose && s2) continue;
        if (e3._menu.contains(t2.target) && ("keyup" === t2.type && "Tab" === t2.key || /input|select|option|textarea|form/i.test(t2.target.tagName))) continue;
        const o2 = { relatedTarget: e3._element };
        "click" === t2.type && (o2.clickEvent = t2), e3._completeHide(o2);
      }
    }
    static dataApiKeydownHandler(t2) {
      const e2 = /input|textarea/i.test(t2.target.tagName), i2 = "Escape" === t2.key, n2 = [Ei, Ti].includes(t2.key);
      if (!n2 && !i2) return;
      if (e2 && !i2) return;
      t2.preventDefault();
      const s2 = this.matches(Ii) ? this : z.prev(this, Ii)[0] || z.next(this, Ii)[0] || z.findOne(Ii, t2.delegateTarget.parentNode), o2 = qi.getOrCreateInstance(s2);
      if (n2) return t2.stopPropagation(), o2.show(), void o2._selectMenuItem(t2);
      o2._isShown() && (t2.stopPropagation(), o2.hide(), s2.focus());
    }
  }
  N.on(document, Si, Ii, qi.dataApiKeydownHandler), N.on(document, Si, Pi, qi.dataApiKeydownHandler), N.on(document, Li, qi.clearMenus), N.on(document, Di, qi.clearMenus), N.on(document, Li, Ii, function(t2) {
    t2.preventDefault(), qi.getOrCreateInstance(this).toggle();
  }), m(qi);
  const Vi = "backdrop", Ki = "show", Qi = `mousedown.bs.${Vi}`, Xi = { className: "modal-backdrop", clickCallback: null, isAnimated: false, isVisible: true, rootElement: "body" }, Yi = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
  class Ui extends H {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isAppended = false, this._element = null;
    }
    static get Default() {
      return Xi;
    }
    static get DefaultType() {
      return Yi;
    }
    static get NAME() {
      return Vi;
    }
    show(t2) {
      if (!this._config.isVisible) return void g(t2);
      this._append();
      const e2 = this._getElement();
      this._config.isAnimated && d(e2), e2.classList.add(Ki), this._emulateAnimation(() => {
        g(t2);
      });
    }
    hide(t2) {
      this._config.isVisible ? (this._getElement().classList.remove(Ki), this._emulateAnimation(() => {
        this.dispose(), g(t2);
      })) : g(t2);
    }
    dispose() {
      this._isAppended && (N.off(this._element, Qi), this._element.remove(), this._isAppended = false);
    }
    _getElement() {
      if (!this._element) {
        const t2 = document.createElement("div");
        t2.className = this._config.className, this._config.isAnimated && t2.classList.add("fade"), this._element = t2;
      }
      return this._element;
    }
    _configAfterMerge(t2) {
      return t2.rootElement = r(t2.rootElement), t2;
    }
    _append() {
      if (this._isAppended) return;
      const t2 = this._getElement();
      this._config.rootElement.append(t2), N.on(t2, Qi, () => {
        g(this._config.clickCallback);
      }), this._isAppended = true;
    }
    _emulateAnimation(t2) {
      _(t2, this._getElement(), this._config.isAnimated);
    }
  }
  const Gi = ".bs.focustrap", Ji = `focusin${Gi}`, Zi = `keydown.tab${Gi}`, tn = "backward", en = { autofocus: true, trapElement: null }, nn = { autofocus: "boolean", trapElement: "element" };
  class sn extends H {
    constructor(t2) {
      super(), this._config = this._getConfig(t2), this._isActive = false, this._lastTabNavDirection = null;
    }
    static get Default() {
      return en;
    }
    static get DefaultType() {
      return nn;
    }
    static get NAME() {
      return "focustrap";
    }
    activate() {
      this._isActive || (this._config.autofocus && this._config.trapElement.focus(), N.off(document, Gi), N.on(document, Ji, (t2) => this._handleFocusin(t2)), N.on(document, Zi, (t2) => this._handleKeydown(t2)), this._isActive = true);
    }
    deactivate() {
      this._isActive && (this._isActive = false, N.off(document, Gi));
    }
    _handleFocusin(t2) {
      const { trapElement: e2 } = this._config;
      if (t2.target === document || t2.target === e2 || e2.contains(t2.target)) return;
      const i2 = z.focusableChildren(e2);
      0 === i2.length ? e2.focus() : this._lastTabNavDirection === tn ? i2[i2.length - 1].focus() : i2[0].focus();
    }
    _handleKeydown(t2) {
      "Tab" === t2.key && (this._lastTabNavDirection = t2.shiftKey ? tn : "forward");
    }
  }
  const on = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", rn = ".sticky-top", an = "padding-right", ln = "margin-right";
  class cn {
    constructor() {
      this._element = document.body;
    }
    getWidth() {
      const t2 = document.documentElement.clientWidth;
      return Math.abs(window.innerWidth - t2);
    }
    hide() {
      const t2 = this.getWidth();
      this._disableOverFlow(), this._setElementAttributes(this._element, an, (e2) => e2 + t2), this._setElementAttributes(on, an, (e2) => e2 + t2), this._setElementAttributes(rn, ln, (e2) => e2 - t2);
    }
    reset() {
      this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, an), this._resetElementAttributes(on, an), this._resetElementAttributes(rn, ln);
    }
    isOverflowing() {
      return this.getWidth() > 0;
    }
    _disableOverFlow() {
      this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
    }
    _setElementAttributes(t2, e2, i2) {
      const n2 = this.getWidth();
      this._applyManipulationCallback(t2, (t3) => {
        if (t3 !== this._element && window.innerWidth > t3.clientWidth + n2) return;
        this._saveInitialAttribute(t3, e2);
        const s2 = window.getComputedStyle(t3).getPropertyValue(e2);
        t3.style.setProperty(e2, `${i2(Number.parseFloat(s2))}px`);
      });
    }
    _saveInitialAttribute(t2, e2) {
      const i2 = t2.style.getPropertyValue(e2);
      i2 && F.setDataAttribute(t2, e2, i2);
    }
    _resetElementAttributes(t2, e2) {
      this._applyManipulationCallback(t2, (t3) => {
        const i2 = F.getDataAttribute(t3, e2);
        null !== i2 ? (F.removeDataAttribute(t3, e2), t3.style.setProperty(e2, i2)) : t3.style.removeProperty(e2);
      });
    }
    _applyManipulationCallback(t2, e2) {
      if (o(t2)) e2(t2);
      else for (const i2 of z.find(t2, this._element)) e2(i2);
    }
  }
  const hn = ".bs.modal", dn = `hide${hn}`, un = `hidePrevented${hn}`, fn = `hidden${hn}`, pn = `show${hn}`, mn = `shown${hn}`, gn = `resize${hn}`, _n = `click.dismiss${hn}`, bn = `mousedown.dismiss${hn}`, vn = `keydown.dismiss${hn}`, yn = `click${hn}.data-api`, wn = "modal-open", An = "show", En = "modal-static", Tn = { backdrop: true, focus: true, keyboard: true }, Cn = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
  class On extends W {
    constructor(t2, e2) {
      super(t2, e2), this._dialog = z.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = false, this._isTransitioning = false, this._scrollBar = new cn(), this._addEventListeners();
    }
    static get Default() {
      return Tn;
    }
    static get DefaultType() {
      return Cn;
    }
    static get NAME() {
      return "modal";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || this._isTransitioning || N.trigger(this._element, pn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._isTransitioning = true, this._scrollBar.hide(), document.body.classList.add(wn), this._adjustDialog(), this._backdrop.show(() => this._showElement(t2)));
    }
    hide() {
      this._isShown && !this._isTransitioning && (N.trigger(this._element, dn).defaultPrevented || (this._isShown = false, this._isTransitioning = true, this._focustrap.deactivate(), this._element.classList.remove(An), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
    }
    dispose() {
      N.off(window, hn), N.off(this._dialog, hn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    handleUpdate() {
      this._adjustDialog();
    }
    _initializeBackDrop() {
      return new Ui({ isVisible: Boolean(this._config.backdrop), isAnimated: this._isAnimated() });
    }
    _initializeFocusTrap() {
      return new sn({ trapElement: this._element });
    }
    _showElement(t2) {
      document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
      const e2 = z.findOne(".modal-body", this._dialog);
      e2 && (e2.scrollTop = 0), d(this._element), this._element.classList.add(An), this._queueCallback(() => {
        this._config.focus && this._focustrap.activate(), this._isTransitioning = false, N.trigger(this._element, mn, { relatedTarget: t2 });
      }, this._dialog, this._isAnimated());
    }
    _addEventListeners() {
      N.on(this._element, vn, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
      }), N.on(window, gn, () => {
        this._isShown && !this._isTransitioning && this._adjustDialog();
      }), N.on(this._element, bn, (t2) => {
        N.one(this._element, _n, (e2) => {
          this._element === t2.target && this._element === e2.target && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
        });
      });
    }
    _hideModal() {
      this._element.style.display = "none", this._element.setAttribute("aria-hidden", true), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = false, this._backdrop.hide(() => {
        document.body.classList.remove(wn), this._resetAdjustments(), this._scrollBar.reset(), N.trigger(this._element, fn);
      });
    }
    _isAnimated() {
      return this._element.classList.contains("fade");
    }
    _triggerBackdropTransition() {
      if (N.trigger(this._element, un).defaultPrevented) return;
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._element.style.overflowY;
      "hidden" === e2 || this._element.classList.contains(En) || (t2 || (this._element.style.overflowY = "hidden"), this._element.classList.add(En), this._queueCallback(() => {
        this._element.classList.remove(En), this._queueCallback(() => {
          this._element.style.overflowY = e2;
        }, this._dialog);
      }, this._dialog), this._element.focus());
    }
    _adjustDialog() {
      const t2 = this._element.scrollHeight > document.documentElement.clientHeight, e2 = this._scrollBar.getWidth(), i2 = e2 > 0;
      if (i2 && !t2) {
        const t3 = p() ? "paddingLeft" : "paddingRight";
        this._element.style[t3] = `${e2}px`;
      }
      if (!i2 && t2) {
        const t3 = p() ? "paddingRight" : "paddingLeft";
        this._element.style[t3] = `${e2}px`;
      }
    }
    _resetAdjustments() {
      this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
    }
    static jQueryInterface(t2, e2) {
      return this.each(function() {
        const i2 = On.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === i2[t2]) throw new TypeError(`No method named "${t2}"`);
          i2[t2](e2);
        }
      });
    }
  }
  N.on(document, yn, '[data-bs-toggle="modal"]', function(t2) {
    const e2 = z.getElementFromSelector(this);
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), N.one(e2, pn, (t3) => {
      t3.defaultPrevented || N.one(e2, fn, () => {
        a(this) && this.focus();
      });
    });
    const i2 = z.findOne(".modal.show");
    i2 && On.getInstance(i2).hide(), On.getOrCreateInstance(e2).toggle(this);
  }), R(On), m(On);
  const xn = ".bs.offcanvas", kn = ".data-api", Ln = `load${xn}${kn}`, Sn = "show", Dn = "showing", $n = "hiding", In = ".offcanvas.show", Nn = `show${xn}`, Pn = `shown${xn}`, Mn = `hide${xn}`, jn = `hidePrevented${xn}`, Fn = `hidden${xn}`, Hn = `resize${xn}`, Wn = `click${xn}${kn}`, Bn = `keydown.dismiss${xn}`, zn = { backdrop: true, keyboard: true, scroll: false }, Rn = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
  class qn extends W {
    constructor(t2, e2) {
      super(t2, e2), this._isShown = false, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
    }
    static get Default() {
      return zn;
    }
    static get DefaultType() {
      return Rn;
    }
    static get NAME() {
      return "offcanvas";
    }
    toggle(t2) {
      return this._isShown ? this.hide() : this.show(t2);
    }
    show(t2) {
      this._isShown || N.trigger(this._element, Nn, { relatedTarget: t2 }).defaultPrevented || (this._isShown = true, this._backdrop.show(), this._config.scroll || new cn().hide(), this._element.setAttribute("aria-modal", true), this._element.setAttribute("role", "dialog"), this._element.classList.add(Dn), this._queueCallback(() => {
        this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Sn), this._element.classList.remove(Dn), N.trigger(this._element, Pn, { relatedTarget: t2 });
      }, this._element, true));
    }
    hide() {
      this._isShown && (N.trigger(this._element, Mn).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = false, this._element.classList.add($n), this._backdrop.hide(), this._queueCallback(() => {
        this._element.classList.remove(Sn, $n), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new cn().reset(), N.trigger(this._element, Fn);
      }, this._element, true)));
    }
    dispose() {
      this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
    }
    _initializeBackDrop() {
      const t2 = Boolean(this._config.backdrop);
      return new Ui({ className: "offcanvas-backdrop", isVisible: t2, isAnimated: true, rootElement: this._element.parentNode, clickCallback: t2 ? () => {
        "static" !== this._config.backdrop ? this.hide() : N.trigger(this._element, jn);
      } : null });
    }
    _initializeFocusTrap() {
      return new sn({ trapElement: this._element });
    }
    _addEventListeners() {
      N.on(this._element, Bn, (t2) => {
        "Escape" === t2.key && (this._config.keyboard ? this.hide() : N.trigger(this._element, jn));
      });
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = qn.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  N.on(document, Wn, '[data-bs-toggle="offcanvas"]', function(t2) {
    const e2 = z.getElementFromSelector(this);
    if (["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this)) return;
    N.one(e2, Fn, () => {
      a(this) && this.focus();
    });
    const i2 = z.findOne(In);
    i2 && i2 !== e2 && qn.getInstance(i2).hide(), qn.getOrCreateInstance(e2).toggle(this);
  }), N.on(window, Ln, () => {
    for (const t2 of z.find(In)) qn.getOrCreateInstance(t2).show();
  }), N.on(window, Hn, () => {
    for (const t2 of z.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(t2).position && qn.getOrCreateInstance(t2).hide();
  }), R(qn), m(qn);
  const Vn = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], div: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Kn = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), Qn = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, Xn = (t2, e2) => {
    const i2 = t2.nodeName.toLowerCase();
    return e2.includes(i2) ? !Kn.has(i2) || Boolean(Qn.test(t2.nodeValue)) : e2.filter((t3) => t3 instanceof RegExp).some((t3) => t3.test(i2));
  }, Yn = { allowList: Vn, content: {}, extraClass: "", html: false, sanitize: true, sanitizeFn: null, template: "<div></div>" }, Un = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Gn = { entry: "(string|element|function|null)", selector: "(string|element)" };
  class Jn extends H {
    constructor(t2) {
      super(), this._config = this._getConfig(t2);
    }
    static get Default() {
      return Yn;
    }
    static get DefaultType() {
      return Un;
    }
    static get NAME() {
      return "TemplateFactory";
    }
    getContent() {
      return Object.values(this._config.content).map((t2) => this._resolvePossibleFunction(t2)).filter(Boolean);
    }
    hasContent() {
      return this.getContent().length > 0;
    }
    changeContent(t2) {
      return this._checkContent(t2), this._config.content = { ...this._config.content, ...t2 }, this;
    }
    toHtml() {
      const t2 = document.createElement("div");
      t2.innerHTML = this._maybeSanitize(this._config.template);
      for (const [e3, i3] of Object.entries(this._config.content)) this._setContent(t2, i3, e3);
      const e2 = t2.children[0], i2 = this._resolvePossibleFunction(this._config.extraClass);
      return i2 && e2.classList.add(...i2.split(" ")), e2;
    }
    _typeCheckConfig(t2) {
      super._typeCheckConfig(t2), this._checkContent(t2.content);
    }
    _checkContent(t2) {
      for (const [e2, i2] of Object.entries(t2)) super._typeCheckConfig({ selector: e2, entry: i2 }, Gn);
    }
    _setContent(t2, e2, i2) {
      const n2 = z.findOne(i2, t2);
      n2 && ((e2 = this._resolvePossibleFunction(e2)) ? o(e2) ? this._putElementInTemplate(r(e2), n2) : this._config.html ? n2.innerHTML = this._maybeSanitize(e2) : n2.textContent = e2 : n2.remove());
    }
    _maybeSanitize(t2) {
      return this._config.sanitize ? function(t3, e2, i2) {
        if (!t3.length) return t3;
        if (i2 && "function" == typeof i2) return i2(t3);
        const n2 = new window.DOMParser().parseFromString(t3, "text/html"), s2 = [].concat(...n2.body.querySelectorAll("*"));
        for (const t4 of s2) {
          const i3 = t4.nodeName.toLowerCase();
          if (!Object.keys(e2).includes(i3)) {
            t4.remove();
            continue;
          }
          const n3 = [].concat(...t4.attributes), s3 = [].concat(e2["*"] || [], e2[i3] || []);
          for (const e3 of n3) Xn(e3, s3) || t4.removeAttribute(e3.nodeName);
        }
        return n2.body.innerHTML;
      }(t2, this._config.allowList, this._config.sanitizeFn) : t2;
    }
    _resolvePossibleFunction(t2) {
      return g(t2, [this]);
    }
    _putElementInTemplate(t2, e2) {
      if (this._config.html) return e2.innerHTML = "", void e2.append(t2);
      e2.textContent = t2.textContent;
    }
  }
  const Zn = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ts = "fade", es = "show", is = ".modal", ns = "hide.bs.modal", ss = "hover", os = "focus", rs = { AUTO: "auto", TOP: "top", RIGHT: p() ? "left" : "right", BOTTOM: "bottom", LEFT: p() ? "right" : "left" }, as = { allowList: Vn, animation: true, boundary: "clippingParents", container: false, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: false, offset: [0, 6], placement: "top", popperConfig: null, sanitize: true, sanitizeFn: null, selector: false, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, ls = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
  class cs extends W {
    constructor(t2, e2) {
      if (void 0 === vi) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
      super(t2, e2), this._isEnabled = true, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
    }
    static get Default() {
      return as;
    }
    static get DefaultType() {
      return ls;
    }
    static get NAME() {
      return "tooltip";
    }
    enable() {
      this._isEnabled = true;
    }
    disable() {
      this._isEnabled = false;
    }
    toggleEnabled() {
      this._isEnabled = !this._isEnabled;
    }
    toggle() {
      this._isEnabled && (this._activeTrigger.click = !this._activeTrigger.click, this._isShown() ? this._leave() : this._enter());
    }
    dispose() {
      clearTimeout(this._timeout), N.off(this._element.closest(is), ns, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
    }
    show() {
      if ("none" === this._element.style.display) throw new Error("Please use show on visible elements");
      if (!this._isWithContent() || !this._isEnabled) return;
      const t2 = N.trigger(this._element, this.constructor.eventName("show")), e2 = (c(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
      if (t2.defaultPrevented || !e2) return;
      this._disposePopper();
      const i2 = this._getTipElement();
      this._element.setAttribute("aria-describedby", i2.getAttribute("id"));
      const { container: n2 } = this._config;
      if (this._element.ownerDocument.documentElement.contains(this.tip) || (n2.append(i2), N.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(i2), i2.classList.add(es), "ontouchstart" in document.documentElement) for (const t3 of [].concat(...document.body.children)) N.on(t3, "mouseover", h);
      this._queueCallback(() => {
        N.trigger(this._element, this.constructor.eventName("shown")), false === this._isHovered && this._leave(), this._isHovered = false;
      }, this.tip, this._isAnimated());
    }
    hide() {
      if (this._isShown() && !N.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
        if (this._getTipElement().classList.remove(es), "ontouchstart" in document.documentElement) for (const t2 of [].concat(...document.body.children)) N.off(t2, "mouseover", h);
        this._activeTrigger.click = false, this._activeTrigger[os] = false, this._activeTrigger[ss] = false, this._isHovered = null, this._queueCallback(() => {
          this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), N.trigger(this._element, this.constructor.eventName("hidden")));
        }, this.tip, this._isAnimated());
      }
    }
    update() {
      this._popper && this._popper.update();
    }
    _isWithContent() {
      return Boolean(this._getTitle());
    }
    _getTipElement() {
      return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
    }
    _createTipElement(t2) {
      const e2 = this._getTemplateFactory(t2).toHtml();
      if (!e2) return null;
      e2.classList.remove(ts, es), e2.classList.add(`bs-${this.constructor.NAME}-auto`);
      const i2 = ((t3) => {
        do {
          t3 += Math.floor(1e6 * Math.random());
        } while (document.getElementById(t3));
        return t3;
      })(this.constructor.NAME).toString();
      return e2.setAttribute("id", i2), this._isAnimated() && e2.classList.add(ts), e2;
    }
    setContent(t2) {
      this._newContent = t2, this._isShown() && (this._disposePopper(), this.show());
    }
    _getTemplateFactory(t2) {
      return this._templateFactory ? this._templateFactory.changeContent(t2) : this._templateFactory = new Jn({ ...this._config, content: t2, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
    }
    _getContentForTemplate() {
      return { ".tooltip-inner": this._getTitle() };
    }
    _getTitle() {
      return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
    }
    _initializeOnDelegatedTarget(t2) {
      return this.constructor.getOrCreateInstance(t2.delegateTarget, this._getDelegateConfig());
    }
    _isAnimated() {
      return this._config.animation || this.tip && this.tip.classList.contains(ts);
    }
    _isShown() {
      return this.tip && this.tip.classList.contains(es);
    }
    _createPopper(t2) {
      const e2 = g(this._config.placement, [this, t2, this._element]), i2 = rs[e2.toUpperCase()];
      return bi(this._element, t2, this._getPopperConfig(i2));
    }
    _getOffset() {
      const { offset: t2 } = this._config;
      return "string" == typeof t2 ? t2.split(",").map((t3) => Number.parseInt(t3, 10)) : "function" == typeof t2 ? (e2) => t2(e2, this._element) : t2;
    }
    _resolvePossibleFunction(t2) {
      return g(t2, [this._element]);
    }
    _getPopperConfig(t2) {
      const e2 = { placement: t2, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: true, phase: "beforeMain", fn: (t3) => {
        this._getTipElement().setAttribute("data-popper-placement", t3.state.placement);
      } }] };
      return { ...e2, ...g(this._config.popperConfig, [e2]) };
    }
    _setListeners() {
      const t2 = this._config.trigger.split(" ");
      for (const e2 of t2) if ("click" === e2) N.on(this._element, this.constructor.eventName("click"), this._config.selector, (t3) => {
        this._initializeOnDelegatedTarget(t3).toggle();
      });
      else if ("manual" !== e2) {
        const t3 = e2 === ss ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), i2 = e2 === ss ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
        N.on(this._element, t3, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusin" === t4.type ? os : ss] = true, e3._enter();
        }), N.on(this._element, i2, this._config.selector, (t4) => {
          const e3 = this._initializeOnDelegatedTarget(t4);
          e3._activeTrigger["focusout" === t4.type ? os : ss] = e3._element.contains(t4.relatedTarget), e3._leave();
        });
      }
      this._hideModalHandler = () => {
        this._element && this.hide();
      }, N.on(this._element.closest(is), ns, this._hideModalHandler);
    }
    _fixTitle() {
      const t2 = this._element.getAttribute("title");
      t2 && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", t2), this._element.setAttribute("data-bs-original-title", t2), this._element.removeAttribute("title"));
    }
    _enter() {
      this._isShown() || this._isHovered ? this._isHovered = true : (this._isHovered = true, this._setTimeout(() => {
        this._isHovered && this.show();
      }, this._config.delay.show));
    }
    _leave() {
      this._isWithActiveTrigger() || (this._isHovered = false, this._setTimeout(() => {
        this._isHovered || this.hide();
      }, this._config.delay.hide));
    }
    _setTimeout(t2, e2) {
      clearTimeout(this._timeout), this._timeout = setTimeout(t2, e2);
    }
    _isWithActiveTrigger() {
      return Object.values(this._activeTrigger).includes(true);
    }
    _getConfig(t2) {
      const e2 = F.getDataAttributes(this._element);
      for (const t3 of Object.keys(e2)) Zn.has(t3) && delete e2[t3];
      return t2 = { ...e2, ..."object" == typeof t2 && t2 ? t2 : {} }, t2 = this._mergeConfigObj(t2), t2 = this._configAfterMerge(t2), this._typeCheckConfig(t2), t2;
    }
    _configAfterMerge(t2) {
      return t2.container = false === t2.container ? document.body : r(t2.container), "number" == typeof t2.delay && (t2.delay = { show: t2.delay, hide: t2.delay }), "number" == typeof t2.title && (t2.title = t2.title.toString()), "number" == typeof t2.content && (t2.content = t2.content.toString()), t2;
    }
    _getDelegateConfig() {
      const t2 = {};
      for (const [e2, i2] of Object.entries(this._config)) this.constructor.Default[e2] !== i2 && (t2[e2] = i2);
      return t2.selector = false, t2.trigger = "manual", t2;
    }
    _disposePopper() {
      this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = cs.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  m(cs);
  const hs = { ...cs.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, ds = { ...cs.DefaultType, content: "(null|string|element|function)" };
  class us extends cs {
    static get Default() {
      return hs;
    }
    static get DefaultType() {
      return ds;
    }
    static get NAME() {
      return "popover";
    }
    _isWithContent() {
      return this._getTitle() || this._getContent();
    }
    _getContentForTemplate() {
      return { ".popover-header": this._getTitle(), ".popover-body": this._getContent() };
    }
    _getContent() {
      return this._resolvePossibleFunction(this._config.content);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = us.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  m(us);
  const fs = ".bs.scrollspy", ps = `activate${fs}`, ms = `click${fs}`, gs = `load${fs}.data-api`, _s = "active", bs = "[href]", vs = ".nav-link", ys = `${vs}, .nav-item > ${vs}, .list-group-item`, ws = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: false, target: null, threshold: [0.1, 0.5, 1] }, As = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
  class Es extends W {
    constructor(t2, e2) {
      super(t2, e2), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
    }
    static get Default() {
      return ws;
    }
    static get DefaultType() {
      return As;
    }
    static get NAME() {
      return "scrollspy";
    }
    refresh() {
      this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
      for (const t2 of this._observableSections.values()) this._observer.observe(t2);
    }
    dispose() {
      this._observer.disconnect(), super.dispose();
    }
    _configAfterMerge(t2) {
      return t2.target = r(t2.target) || document.body, t2.rootMargin = t2.offset ? `${t2.offset}px 0px -30%` : t2.rootMargin, "string" == typeof t2.threshold && (t2.threshold = t2.threshold.split(",").map((t3) => Number.parseFloat(t3))), t2;
    }
    _maybeEnableSmoothScroll() {
      this._config.smoothScroll && (N.off(this._config.target, ms), N.on(this._config.target, ms, bs, (t2) => {
        const e2 = this._observableSections.get(t2.target.hash);
        if (e2) {
          t2.preventDefault();
          const i2 = this._rootElement || window, n2 = e2.offsetTop - this._element.offsetTop;
          if (i2.scrollTo) return void i2.scrollTo({ top: n2, behavior: "smooth" });
          i2.scrollTop = n2;
        }
      }));
    }
    _getNewObserver() {
      const t2 = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
      return new IntersectionObserver((t3) => this._observerCallback(t3), t2);
    }
    _observerCallback(t2) {
      const e2 = (t3) => this._targetLinks.get(`#${t3.target.id}`), i2 = (t3) => {
        this._previousScrollData.visibleEntryTop = t3.target.offsetTop, this._process(e2(t3));
      }, n2 = (this._rootElement || document.documentElement).scrollTop, s2 = n2 >= this._previousScrollData.parentScrollTop;
      this._previousScrollData.parentScrollTop = n2;
      for (const o2 of t2) {
        if (!o2.isIntersecting) {
          this._activeTarget = null, this._clearActiveClass(e2(o2));
          continue;
        }
        const t3 = o2.target.offsetTop >= this._previousScrollData.visibleEntryTop;
        if (s2 && t3) {
          if (i2(o2), !n2) return;
        } else s2 || t3 || i2(o2);
      }
    }
    _initializeTargetsAndObservables() {
      this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
      const t2 = z.find(bs, this._config.target);
      for (const e2 of t2) {
        if (!e2.hash || l(e2)) continue;
        const t3 = z.findOne(decodeURI(e2.hash), this._element);
        a(t3) && (this._targetLinks.set(decodeURI(e2.hash), e2), this._observableSections.set(e2.hash, t3));
      }
    }
    _process(t2) {
      this._activeTarget !== t2 && (this._clearActiveClass(this._config.target), this._activeTarget = t2, t2.classList.add(_s), this._activateParents(t2), N.trigger(this._element, ps, { relatedTarget: t2 }));
    }
    _activateParents(t2) {
      if (t2.classList.contains("dropdown-item")) z.findOne(".dropdown-toggle", t2.closest(".dropdown")).classList.add(_s);
      else for (const e2 of z.parents(t2, ".nav, .list-group")) for (const t3 of z.prev(e2, ys)) t3.classList.add(_s);
    }
    _clearActiveClass(t2) {
      t2.classList.remove(_s);
      const e2 = z.find(`${bs}.${_s}`, t2);
      for (const t3 of e2) t3.classList.remove(_s);
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Es.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  N.on(window, gs, () => {
    for (const t2 of z.find('[data-bs-spy="scroll"]')) Es.getOrCreateInstance(t2);
  }), m(Es);
  const Ts = ".bs.tab", Cs = `hide${Ts}`, Os = `hidden${Ts}`, xs = `show${Ts}`, ks = `shown${Ts}`, Ls = `click${Ts}`, Ss = `keydown${Ts}`, Ds = `load${Ts}`, $s = "ArrowLeft", Is = "ArrowRight", Ns = "ArrowUp", Ps = "ArrowDown", Ms = "Home", js = "End", Fs = "active", Hs = "fade", Ws = "show", Bs = ".dropdown-toggle", zs = `:not(${Bs})`, Rs = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', qs = `.nav-link${zs}, .list-group-item${zs}, [role="tab"]${zs}, ${Rs}`, Vs = `.${Fs}[data-bs-toggle="tab"], .${Fs}[data-bs-toggle="pill"], .${Fs}[data-bs-toggle="list"]`;
  class Ks extends W {
    constructor(t2) {
      super(t2), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), N.on(this._element, Ss, (t3) => this._keydown(t3)));
    }
    static get NAME() {
      return "tab";
    }
    show() {
      const t2 = this._element;
      if (this._elemIsActive(t2)) return;
      const e2 = this._getActiveElem(), i2 = e2 ? N.trigger(e2, Cs, { relatedTarget: t2 }) : null;
      N.trigger(t2, xs, { relatedTarget: e2 }).defaultPrevented || i2 && i2.defaultPrevented || (this._deactivate(e2, t2), this._activate(t2, e2));
    }
    _activate(t2, e2) {
      t2 && (t2.classList.add(Fs), this._activate(z.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.removeAttribute("tabindex"), t2.setAttribute("aria-selected", true), this._toggleDropDown(t2, true), N.trigger(t2, ks, { relatedTarget: e2 })) : t2.classList.add(Ws);
      }, t2, t2.classList.contains(Hs)));
    }
    _deactivate(t2, e2) {
      t2 && (t2.classList.remove(Fs), t2.blur(), this._deactivate(z.getElementFromSelector(t2)), this._queueCallback(() => {
        "tab" === t2.getAttribute("role") ? (t2.setAttribute("aria-selected", false), t2.setAttribute("tabindex", "-1"), this._toggleDropDown(t2, false), N.trigger(t2, Os, { relatedTarget: e2 })) : t2.classList.remove(Ws);
      }, t2, t2.classList.contains(Hs)));
    }
    _keydown(t2) {
      if (![$s, Is, Ns, Ps, Ms, js].includes(t2.key)) return;
      t2.stopPropagation(), t2.preventDefault();
      const e2 = this._getChildren().filter((t3) => !l(t3));
      let i2;
      if ([Ms, js].includes(t2.key)) i2 = e2[t2.key === Ms ? 0 : e2.length - 1];
      else {
        const n2 = [Is, Ps].includes(t2.key);
        i2 = b(e2, t2.target, n2, true);
      }
      i2 && (i2.focus({ preventScroll: true }), Ks.getOrCreateInstance(i2).show());
    }
    _getChildren() {
      return z.find(qs, this._parent);
    }
    _getActiveElem() {
      return this._getChildren().find((t2) => this._elemIsActive(t2)) || null;
    }
    _setInitialAttributes(t2, e2) {
      this._setAttributeIfNotExists(t2, "role", "tablist");
      for (const t3 of e2) this._setInitialAttributesOnChild(t3);
    }
    _setInitialAttributesOnChild(t2) {
      t2 = this._getInnerElement(t2);
      const e2 = this._elemIsActive(t2), i2 = this._getOuterElement(t2);
      t2.setAttribute("aria-selected", e2), i2 !== t2 && this._setAttributeIfNotExists(i2, "role", "presentation"), e2 || t2.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(t2, "role", "tab"), this._setInitialAttributesOnTargetPanel(t2);
    }
    _setInitialAttributesOnTargetPanel(t2) {
      const e2 = z.getElementFromSelector(t2);
      e2 && (this._setAttributeIfNotExists(e2, "role", "tabpanel"), t2.id && this._setAttributeIfNotExists(e2, "aria-labelledby", `${t2.id}`));
    }
    _toggleDropDown(t2, e2) {
      const i2 = this._getOuterElement(t2);
      if (!i2.classList.contains("dropdown")) return;
      const n2 = (t3, n3) => {
        const s2 = z.findOne(t3, i2);
        s2 && s2.classList.toggle(n3, e2);
      };
      n2(Bs, Fs), n2(".dropdown-menu", Ws), i2.setAttribute("aria-expanded", e2);
    }
    _setAttributeIfNotExists(t2, e2, i2) {
      t2.hasAttribute(e2) || t2.setAttribute(e2, i2);
    }
    _elemIsActive(t2) {
      return t2.classList.contains(Fs);
    }
    _getInnerElement(t2) {
      return t2.matches(qs) ? t2 : z.findOne(qs, t2);
    }
    _getOuterElement(t2) {
      return t2.closest(".nav-item, .list-group-item") || t2;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = Ks.getOrCreateInstance(this);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2] || t2.startsWith("_") || "constructor" === t2) throw new TypeError(`No method named "${t2}"`);
          e2[t2]();
        }
      });
    }
  }
  N.on(document, Ls, Rs, function(t2) {
    ["A", "AREA"].includes(this.tagName) && t2.preventDefault(), l(this) || Ks.getOrCreateInstance(this).show();
  }), N.on(window, Ds, () => {
    for (const t2 of z.find(Vs)) Ks.getOrCreateInstance(t2);
  }), m(Ks);
  const Qs = ".bs.toast", Xs = `mouseover${Qs}`, Ys = `mouseout${Qs}`, Us = `focusin${Qs}`, Gs = `focusout${Qs}`, Js = `hide${Qs}`, Zs = `hidden${Qs}`, to = `show${Qs}`, eo = `shown${Qs}`, io = "hide", no = "show", so = "showing", oo = { animation: "boolean", autohide: "boolean", delay: "number" }, ro = { animation: true, autohide: true, delay: 5e3 };
  class ao extends W {
    constructor(t2, e2) {
      super(t2, e2), this._timeout = null, this._hasMouseInteraction = false, this._hasKeyboardInteraction = false, this._setListeners();
    }
    static get Default() {
      return ro;
    }
    static get DefaultType() {
      return oo;
    }
    static get NAME() {
      return "toast";
    }
    show() {
      N.trigger(this._element, to).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(io), d(this._element), this._element.classList.add(no, so), this._queueCallback(() => {
        this._element.classList.remove(so), N.trigger(this._element, eo), this._maybeScheduleHide();
      }, this._element, this._config.animation));
    }
    hide() {
      this.isShown() && (N.trigger(this._element, Js).defaultPrevented || (this._element.classList.add(so), this._queueCallback(() => {
        this._element.classList.add(io), this._element.classList.remove(so, no), N.trigger(this._element, Zs);
      }, this._element, this._config.animation)));
    }
    dispose() {
      this._clearTimeout(), this.isShown() && this._element.classList.remove(no), super.dispose();
    }
    isShown() {
      return this._element.classList.contains(no);
    }
    _maybeScheduleHide() {
      this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
        this.hide();
      }, this._config.delay)));
    }
    _onInteraction(t2, e2) {
      switch (t2.type) {
        case "mouseover":
        case "mouseout":
          this._hasMouseInteraction = e2;
          break;
        case "focusin":
        case "focusout":
          this._hasKeyboardInteraction = e2;
      }
      if (e2) return void this._clearTimeout();
      const i2 = t2.relatedTarget;
      this._element === i2 || this._element.contains(i2) || this._maybeScheduleHide();
    }
    _setListeners() {
      N.on(this._element, Xs, (t2) => this._onInteraction(t2, true)), N.on(this._element, Ys, (t2) => this._onInteraction(t2, false)), N.on(this._element, Us, (t2) => this._onInteraction(t2, true)), N.on(this._element, Gs, (t2) => this._onInteraction(t2, false));
    }
    _clearTimeout() {
      clearTimeout(this._timeout), this._timeout = null;
    }
    static jQueryInterface(t2) {
      return this.each(function() {
        const e2 = ao.getOrCreateInstance(this, t2);
        if ("string" == typeof t2) {
          if (void 0 === e2[t2]) throw new TypeError(`No method named "${t2}"`);
          e2[t2](this);
        }
      });
    }
  }
  return R(ao), m(ao), { Alert: Q, Button: Y, Carousel: xt, Collapse: Bt, Dropdown: qi, Modal: On, Offcanvas: qn, Popover: us, ScrollSpy: Es, Tab: Ks, Toast: ao, Tooltip: cs };
});
!function(e) {
  e.fn.niceSelect = function(t) {
    function s(t2) {
      t2.after(e("<div></div>").addClass("nice-select").addClass(t2.attr("class") || "").addClass(t2.attr("disabled") ? "disabled" : "").attr("tabindex", t2.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
      var s2 = t2.next(), n2 = t2.find("option"), i = t2.find("option:selected");
      s2.find(".current").html(i.data("display") || i.text()), n2.each(function(t3) {
        var n3 = e(this), i2 = n3.data("display");
        s2.find("ul").append(e("<li></li>").attr("data-value", n3.val()).attr("data-display", i2 || null).addClass("option" + (n3.is(":selected") ? " selected" : "") + (n3.is(":disabled") ? " disabled" : "")).html(n3.text()));
      });
    }
    if ("string" == typeof t) return "update" == t ? this.each(function() {
      var t2 = e(this), n2 = e(this).next(".nice-select"), i = n2.hasClass("open");
      n2.length && (n2.remove(), s(t2), i && t2.next().trigger("click"));
    }) : "destroy" == t ? (this.each(function() {
      var t2 = e(this), s2 = e(this).next(".nice-select");
      s2.length && (s2.remove(), t2.css("display", ""));
    }), 0 == e(".nice-select").length && e(document).off(".nice_select")) : console.log('Method "' + t + '" does not exist.'), this;
    this.hide(), this.each(function() {
      var t2 = e(this);
      t2.next().hasClass("nice-select") || s(t2);
    }), e(document).off(".nice_select"), e(document).on("click.nice_select", ".nice-select", function(t2) {
      var s2 = e(this);
      e(".nice-select").not(s2).removeClass("open"), s2.toggleClass("open"), s2.hasClass("open") ? (s2.find(".option"), s2.find(".focus").removeClass("focus"), s2.find(".selected").addClass("focus")) : s2.focus();
    }), e(document).on("click.nice_select", function(t2) {
      0 === e(t2.target).closest(".nice-select").length && e(".nice-select").removeClass("open").find(".option");
    }), e(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function(t2) {
      var s2 = e(this), n2 = s2.closest(".nice-select");
      n2.find(".selected").removeClass("selected"), s2.addClass("selected");
      var i = s2.data("display") || s2.text();
      n2.find(".current").text(i), n2.prev("select").val(s2.data("value")).trigger("change");
    }), e(document).on("keydown.nice_select", ".nice-select", function(t2) {
      var s2 = e(this), n2 = e(s2.find(".focus") || s2.find(".list .option.selected"));
      if (32 == t2.keyCode || 13 == t2.keyCode) return s2.hasClass("open") ? n2.trigger("click") : s2.trigger("click"), false;
      if (40 == t2.keyCode) {
        if (s2.hasClass("open")) {
          var i = n2.nextAll(".option:not(.disabled)").first();
          i.length > 0 && (s2.find(".focus").removeClass("focus"), i.addClass("focus"));
        } else s2.trigger("click");
        return false;
      }
      if (38 == t2.keyCode) {
        if (s2.hasClass("open")) {
          var l = n2.prevAll(".option:not(.disabled)").first();
          l.length > 0 && (s2.find(".focus").removeClass("focus"), l.addClass("focus"));
        } else s2.trigger("click");
        return false;
      }
      if (27 == t2.keyCode) s2.hasClass("open") && s2.trigger("click");
      else if (9 == t2.keyCode && s2.hasClass("open")) return false;
    });
    var n = document.createElement("a").style;
    return n.cssText = "pointer-events:auto", "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"), this;
  };
}(jQuery);
/*!
Waypoints - 4.0.1
Copyright © 2011-2016 Caleb Troughton
Licensed under the MIT license.
https://github.com/imakewebthings/waypoints/blob/master/licenses.txt
*/
(function() {
  "use strict";
  var keyCounter = 0;
  var allWaypoints = {};
  function Waypoint2(options) {
    if (!options) {
      throw new Error("No options passed to Waypoint constructor");
    }
    if (!options.element) {
      throw new Error("No element option passed to Waypoint constructor");
    }
    if (!options.handler) {
      throw new Error("No handler option passed to Waypoint constructor");
    }
    this.key = "waypoint-" + keyCounter;
    this.options = Waypoint2.Adapter.extend({}, Waypoint2.defaults, options);
    this.element = this.options.element;
    this.adapter = new Waypoint2.Adapter(this.element);
    this.callback = options.handler;
    this.axis = this.options.horizontal ? "horizontal" : "vertical";
    this.enabled = this.options.enabled;
    this.triggerPoint = null;
    this.group = Waypoint2.Group.findOrCreate({
      name: this.options.group,
      axis: this.axis
    });
    this.context = Waypoint2.Context.findOrCreateByElement(this.options.context);
    if (Waypoint2.offsetAliases[this.options.offset]) {
      this.options.offset = Waypoint2.offsetAliases[this.options.offset];
    }
    this.group.add(this);
    this.context.add(this);
    allWaypoints[this.key] = this;
    keyCounter += 1;
  }
  Waypoint2.prototype.queueTrigger = function(direction) {
    this.group.queueTrigger(this, direction);
  };
  Waypoint2.prototype.trigger = function(args) {
    if (!this.enabled) {
      return;
    }
    if (this.callback) {
      this.callback.apply(this, args);
    }
  };
  Waypoint2.prototype.destroy = function() {
    this.context.remove(this);
    this.group.remove(this);
    delete allWaypoints[this.key];
  };
  Waypoint2.prototype.disable = function() {
    this.enabled = false;
    return this;
  };
  Waypoint2.prototype.enable = function() {
    this.context.refresh();
    this.enabled = true;
    return this;
  };
  Waypoint2.prototype.next = function() {
    return this.group.next(this);
  };
  Waypoint2.prototype.previous = function() {
    return this.group.previous(this);
  };
  Waypoint2.invokeAll = function(method) {
    var allWaypointsArray = [];
    for (var waypointKey in allWaypoints) {
      allWaypointsArray.push(allWaypoints[waypointKey]);
    }
    for (var i = 0, end = allWaypointsArray.length; i < end; i++) {
      allWaypointsArray[i][method]();
    }
  };
  Waypoint2.destroyAll = function() {
    Waypoint2.invokeAll("destroy");
  };
  Waypoint2.disableAll = function() {
    Waypoint2.invokeAll("disable");
  };
  Waypoint2.enableAll = function() {
    Waypoint2.Context.refreshAll();
    for (var waypointKey in allWaypoints) {
      allWaypoints[waypointKey].enabled = true;
    }
    return this;
  };
  Waypoint2.refreshAll = function() {
    Waypoint2.Context.refreshAll();
  };
  Waypoint2.viewportHeight = function() {
    return window.innerHeight || document.documentElement.clientHeight;
  };
  Waypoint2.viewportWidth = function() {
    return document.documentElement.clientWidth;
  };
  Waypoint2.adapters = [];
  Waypoint2.defaults = {
    context: window,
    continuous: true,
    enabled: true,
    group: "default",
    horizontal: false,
    offset: 0
  };
  Waypoint2.offsetAliases = {
    "bottom-in-view": function() {
      return this.context.innerHeight() - this.adapter.outerHeight();
    },
    "right-in-view": function() {
      return this.context.innerWidth() - this.adapter.outerWidth();
    }
  };
  window.Waypoint = Waypoint2;
})();
(function() {
  "use strict";
  function requestAnimationFrameShim(callback) {
    window.setTimeout(callback, 1e3 / 60);
  }
  var keyCounter = 0;
  var contexts = {};
  var Waypoint2 = window.Waypoint;
  var oldWindowLoad = window.onload;
  function Context(element) {
    this.element = element;
    this.Adapter = Waypoint2.Adapter;
    this.adapter = new this.Adapter(element);
    this.key = "waypoint-context-" + keyCounter;
    this.didScroll = false;
    this.didResize = false;
    this.oldScroll = {
      x: this.adapter.scrollLeft(),
      y: this.adapter.scrollTop()
    };
    this.waypoints = {
      vertical: {},
      horizontal: {}
    };
    element.waypointContextKey = this.key;
    contexts[element.waypointContextKey] = this;
    keyCounter += 1;
    if (!Waypoint2.windowContext) {
      Waypoint2.windowContext = true;
      Waypoint2.windowContext = new Context(window);
    }
    this.createThrottledScrollHandler();
    this.createThrottledResizeHandler();
  }
  Context.prototype.add = function(waypoint) {
    var axis = waypoint.options.horizontal ? "horizontal" : "vertical";
    this.waypoints[axis][waypoint.key] = waypoint;
    this.refresh();
  };
  Context.prototype.checkEmpty = function() {
    var horizontalEmpty = this.Adapter.isEmptyObject(this.waypoints.horizontal);
    var verticalEmpty = this.Adapter.isEmptyObject(this.waypoints.vertical);
    var isWindow = this.element == this.element.window;
    if (horizontalEmpty && verticalEmpty && !isWindow) {
      this.adapter.off(".waypoints");
      delete contexts[this.key];
    }
  };
  Context.prototype.createThrottledResizeHandler = function() {
    var self2 = this;
    function resizeHandler() {
      self2.handleResize();
      self2.didResize = false;
    }
    this.adapter.on("resize.waypoints", function() {
      if (!self2.didResize) {
        self2.didResize = true;
        Waypoint2.requestAnimationFrame(resizeHandler);
      }
    });
  };
  Context.prototype.createThrottledScrollHandler = function() {
    var self2 = this;
    function scrollHandler() {
      self2.handleScroll();
      self2.didScroll = false;
    }
    this.adapter.on("scroll.waypoints", function() {
      if (!self2.didScroll || Waypoint2.isTouch) {
        self2.didScroll = true;
        Waypoint2.requestAnimationFrame(scrollHandler);
      }
    });
  };
  Context.prototype.handleResize = function() {
    Waypoint2.Context.refreshAll();
  };
  Context.prototype.handleScroll = function() {
    var triggeredGroups = {};
    var axes = {
      horizontal: {
        newScroll: this.adapter.scrollLeft(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left"
      },
      vertical: {
        newScroll: this.adapter.scrollTop(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up"
      }
    };
    for (var axisKey in axes) {
      var axis = axes[axisKey];
      var isForward = axis.newScroll > axis.oldScroll;
      var direction = isForward ? axis.forward : axis.backward;
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];
        if (waypoint.triggerPoint === null) {
          continue;
        }
        var wasBeforeTriggerPoint = axis.oldScroll < waypoint.triggerPoint;
        var nowAfterTriggerPoint = axis.newScroll >= waypoint.triggerPoint;
        var crossedForward = wasBeforeTriggerPoint && nowAfterTriggerPoint;
        var crossedBackward = !wasBeforeTriggerPoint && !nowAfterTriggerPoint;
        if (crossedForward || crossedBackward) {
          waypoint.queueTrigger(direction);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }
    for (var groupKey in triggeredGroups) {
      triggeredGroups[groupKey].flushTriggers();
    }
    this.oldScroll = {
      x: axes.horizontal.newScroll,
      y: axes.vertical.newScroll
    };
  };
  Context.prototype.innerHeight = function() {
    if (this.element == this.element.window) {
      return Waypoint2.viewportHeight();
    }
    return this.adapter.innerHeight();
  };
  Context.prototype.remove = function(waypoint) {
    delete this.waypoints[waypoint.axis][waypoint.key];
    this.checkEmpty();
  };
  Context.prototype.innerWidth = function() {
    if (this.element == this.element.window) {
      return Waypoint2.viewportWidth();
    }
    return this.adapter.innerWidth();
  };
  Context.prototype.destroy = function() {
    var allWaypoints = [];
    for (var axis in this.waypoints) {
      for (var waypointKey in this.waypoints[axis]) {
        allWaypoints.push(this.waypoints[axis][waypointKey]);
      }
    }
    for (var i = 0, end = allWaypoints.length; i < end; i++) {
      allWaypoints[i].destroy();
    }
  };
  Context.prototype.refresh = function() {
    var isWindow = this.element == this.element.window;
    var contextOffset = isWindow ? void 0 : this.adapter.offset();
    var triggeredGroups = {};
    var axes;
    this.handleScroll();
    axes = {
      horizontal: {
        contextOffset: isWindow ? 0 : contextOffset.left,
        contextScroll: isWindow ? 0 : this.oldScroll.x,
        contextDimension: this.innerWidth(),
        oldScroll: this.oldScroll.x,
        forward: "right",
        backward: "left",
        offsetProp: "left"
      },
      vertical: {
        contextOffset: isWindow ? 0 : contextOffset.top,
        contextScroll: isWindow ? 0 : this.oldScroll.y,
        contextDimension: this.innerHeight(),
        oldScroll: this.oldScroll.y,
        forward: "down",
        backward: "up",
        offsetProp: "top"
      }
    };
    for (var axisKey in axes) {
      var axis = axes[axisKey];
      for (var waypointKey in this.waypoints[axisKey]) {
        var waypoint = this.waypoints[axisKey][waypointKey];
        var adjustment = waypoint.options.offset;
        var oldTriggerPoint = waypoint.triggerPoint;
        var elementOffset = 0;
        var freshWaypoint = oldTriggerPoint == null;
        var contextModifier, wasBeforeScroll, nowAfterScroll;
        var triggeredBackward, triggeredForward;
        if (waypoint.element !== waypoint.element.window) {
          elementOffset = waypoint.adapter.offset()[axis.offsetProp];
        }
        if (typeof adjustment === "function") {
          adjustment = adjustment.apply(waypoint);
        } else if (typeof adjustment === "string") {
          adjustment = parseFloat(adjustment);
          if (waypoint.options.offset.indexOf("%") > -1) {
            adjustment = Math.ceil(axis.contextDimension * adjustment / 100);
          }
        }
        contextModifier = axis.contextScroll - axis.contextOffset;
        waypoint.triggerPoint = Math.floor(elementOffset + contextModifier - adjustment);
        wasBeforeScroll = oldTriggerPoint < axis.oldScroll;
        nowAfterScroll = waypoint.triggerPoint >= axis.oldScroll;
        triggeredBackward = wasBeforeScroll && nowAfterScroll;
        triggeredForward = !wasBeforeScroll && !nowAfterScroll;
        if (!freshWaypoint && triggeredBackward) {
          waypoint.queueTrigger(axis.backward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (!freshWaypoint && triggeredForward) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        } else if (freshWaypoint && axis.oldScroll >= waypoint.triggerPoint) {
          waypoint.queueTrigger(axis.forward);
          triggeredGroups[waypoint.group.id] = waypoint.group;
        }
      }
    }
    Waypoint2.requestAnimationFrame(function() {
      for (var groupKey in triggeredGroups) {
        triggeredGroups[groupKey].flushTriggers();
      }
    });
    return this;
  };
  Context.findOrCreateByElement = function(element) {
    return Context.findByElement(element) || new Context(element);
  };
  Context.refreshAll = function() {
    for (var contextId in contexts) {
      contexts[contextId].refresh();
    }
  };
  Context.findByElement = function(element) {
    return contexts[element.waypointContextKey];
  };
  window.onload = function() {
    if (oldWindowLoad) {
      oldWindowLoad();
    }
    Context.refreshAll();
  };
  Waypoint2.requestAnimationFrame = function(callback) {
    var requestFn = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || requestAnimationFrameShim;
    requestFn.call(window, callback);
  };
  Waypoint2.Context = Context;
})();
(function() {
  "use strict";
  function byTriggerPoint(a, b) {
    return a.triggerPoint - b.triggerPoint;
  }
  function byReverseTriggerPoint(a, b) {
    return b.triggerPoint - a.triggerPoint;
  }
  var groups = {
    vertical: {},
    horizontal: {}
  };
  var Waypoint2 = window.Waypoint;
  function Group(options) {
    this.name = options.name;
    this.axis = options.axis;
    this.id = this.name + "-" + this.axis;
    this.waypoints = [];
    this.clearTriggerQueues();
    groups[this.axis][this.name] = this;
  }
  Group.prototype.add = function(waypoint) {
    this.waypoints.push(waypoint);
  };
  Group.prototype.clearTriggerQueues = function() {
    this.triggerQueues = {
      up: [],
      down: [],
      left: [],
      right: []
    };
  };
  Group.prototype.flushTriggers = function() {
    for (var direction in this.triggerQueues) {
      var waypoints = this.triggerQueues[direction];
      var reverse = direction === "up" || direction === "left";
      waypoints.sort(reverse ? byReverseTriggerPoint : byTriggerPoint);
      for (var i = 0, end = waypoints.length; i < end; i += 1) {
        var waypoint = waypoints[i];
        if (waypoint.options.continuous || i === waypoints.length - 1) {
          waypoint.trigger([direction]);
        }
      }
    }
    this.clearTriggerQueues();
  };
  Group.prototype.next = function(waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint2.Adapter.inArray(waypoint, this.waypoints);
    var isLast = index === this.waypoints.length - 1;
    return isLast ? null : this.waypoints[index + 1];
  };
  Group.prototype.previous = function(waypoint) {
    this.waypoints.sort(byTriggerPoint);
    var index = Waypoint2.Adapter.inArray(waypoint, this.waypoints);
    return index ? this.waypoints[index - 1] : null;
  };
  Group.prototype.queueTrigger = function(waypoint, direction) {
    this.triggerQueues[direction].push(waypoint);
  };
  Group.prototype.remove = function(waypoint) {
    var index = Waypoint2.Adapter.inArray(waypoint, this.waypoints);
    if (index > -1) {
      this.waypoints.splice(index, 1);
    }
  };
  Group.prototype.first = function() {
    return this.waypoints[0];
  };
  Group.prototype.last = function() {
    return this.waypoints[this.waypoints.length - 1];
  };
  Group.findOrCreate = function(options) {
    return groups[options.axis][options.name] || new Group(options);
  };
  Waypoint2.Group = Group;
})();
(function() {
  "use strict";
  var $ = window.jQuery;
  var Waypoint2 = window.Waypoint;
  function JQueryAdapter(element) {
    this.$element = $(element);
  }
  $.each([
    "innerHeight",
    "innerWidth",
    "off",
    "offset",
    "on",
    "outerHeight",
    "outerWidth",
    "scrollLeft",
    "scrollTop"
  ], function(i, method) {
    JQueryAdapter.prototype[method] = function() {
      var args = Array.prototype.slice.call(arguments);
      return this.$element[method].apply(this.$element, args);
    };
  });
  $.each([
    "extend",
    "inArray",
    "isEmptyObject"
  ], function(i, method) {
    JQueryAdapter[method] = $[method];
  });
  Waypoint2.adapters.push({
    name: "jquery",
    Adapter: JQueryAdapter
  });
  Waypoint2.Adapter = JQueryAdapter;
})();
(function() {
  "use strict";
  var Waypoint2 = window.Waypoint;
  function createExtension(framework) {
    return function() {
      var waypoints = [];
      var overrides = arguments[0];
      if (framework.isFunction(arguments[0])) {
        overrides = framework.extend({}, arguments[1]);
        overrides.handler = arguments[0];
      }
      this.each(function() {
        var options = framework.extend({}, overrides, {
          element: this
        });
        if (typeof options.context === "string") {
          options.context = framework(this).closest(options.context)[0];
        }
        waypoints.push(new Waypoint2(options));
      });
      return waypoints;
    };
  }
  if (window.jQuery) {
    window.jQuery.fn.waypoint = createExtension(window.jQuery);
  }
  if (window.Zepto) {
    window.Zepto.fn.waypoint = createExtension(window.Zepto);
  }
})();
(function($) {
  "use strict";
  $.fn.counterUp = function(options) {
    var settings = $.extend({ time: 400, delay: 10, offset: 100, beginAt: 0, formatter: false, context: "window", callback: function() {
    } }, options), s;
    return this.each(function() {
      var $this = $(this), counter = { time: $(this).data("counterup-time") || settings.time, delay: $(this).data("counterup-delay") || settings.delay, offset: $(this).data("counterup-offset") || settings.offset, beginAt: $(this).data("counterup-beginat") || settings.beginAt, context: $(this).data("counterup-context") || settings.context };
      var counterUpper = function() {
        var nums = [];
        var divisions = counter.time / counter.delay;
        var num = $(this).attr("data-num") ? $(this).attr("data-num") : $this.text();
        var isComma = /[0-9]+,[0-9]+/.test(num);
        num = num.replace(/,/g, "");
        var decimalPlaces = (num.split(".")[1] || []).length;
        if (counter.beginAt > num) counter.beginAt = num;
        var isTime = /[0-9]+:[0-9]+:[0-9]+/.test(num);
        if (isTime) {
          var times = num.split(":"), m = 1;
          s = 0;
          while (times.length > 0) {
            s += m * parseInt(times.pop(), 10);
            m *= 60;
          }
        }
        for (var i = divisions; i >= counter.beginAt / num * divisions; i--) {
          var newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
          if (isTime) {
            newNum = parseInt(s / divisions * i);
            var hours = parseInt(newNum / 3600) % 24;
            var minutes = parseInt(newNum / 60) % 60;
            var seconds = parseInt(newNum % 60, 10);
            newNum = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
          }
          if (isComma) {
            while (/(\d+)(\d{3})/.test(newNum.toString())) {
              newNum = newNum.toString().replace(/(\d+)(\d{3})/, "$1,$2");
            }
          }
          if (settings.formatter) {
            newNum = settings.formatter.call(this, newNum);
          }
          nums.unshift(newNum);
        }
        $this.data("counterup-nums", nums);
        $this.text(counter.beginAt);
        var f = function() {
          if (!$this.data("counterup-nums")) {
            settings.callback.call(this);
            return;
          }
          $this.html($this.data("counterup-nums").shift());
          if ($this.data("counterup-nums").length) {
            setTimeout($this.data("counterup-func"), counter.delay);
          } else {
            $this.data("counterup-nums", null);
            $this.data("counterup-func", null);
            settings.callback.call(this);
          }
        };
        $this.data("counterup-func", f);
        setTimeout($this.data("counterup-func"), counter.delay);
      };
      $this.waypoint(function(direction) {
        counterUpper();
        this.destroy();
      }, { offset: counter.offset + "%", context: counter.context });
    });
  };
})(jQuery);
!function(e, t) {
  "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function() {
  "use strict";
  function e(e2) {
    return null !== e2 && "object" == typeof e2 && "constructor" in e2 && e2.constructor === Object;
  }
  function t(s2, a2) {
    void 0 === s2 && (s2 = {}), void 0 === a2 && (a2 = {}), Object.keys(a2).forEach((i2) => {
      void 0 === s2[i2] ? s2[i2] = a2[i2] : e(a2[i2]) && e(s2[i2]) && Object.keys(a2[i2]).length > 0 && t(s2[i2], a2[i2]);
    });
  }
  const s = { body: {}, addEventListener() {
  }, removeEventListener() {
  }, activeElement: { blur() {
  }, nodeName: "" }, querySelector: () => null, querySelectorAll: () => [], getElementById: () => null, createEvent: () => ({ initEvent() {
  } }), createElement: () => ({ children: [], childNodes: [], style: {}, setAttribute() {
  }, getElementsByTagName: () => [] }), createElementNS: () => ({}), importNode: () => null, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" } };
  function a() {
    const e2 = "undefined" != typeof document ? document : {};
    return t(e2, s), e2;
  }
  const i = { document: s, navigator: { userAgent: "" }, location: { hash: "", host: "", hostname: "", href: "", origin: "", pathname: "", protocol: "", search: "" }, history: { replaceState() {
  }, pushState() {
  }, go() {
  }, back() {
  } }, CustomEvent: function() {
    return this;
  }, addEventListener() {
  }, removeEventListener() {
  }, getComputedStyle: () => ({ getPropertyValue: () => "" }), Image() {
  }, Date() {
  }, screen: {}, setTimeout() {
  }, clearTimeout() {
  }, matchMedia: () => ({}), requestAnimationFrame: (e2) => "undefined" == typeof setTimeout ? (e2(), null) : setTimeout(e2, 0), cancelAnimationFrame(e2) {
    "undefined" != typeof setTimeout && clearTimeout(e2);
  } };
  function r() {
    const e2 = "undefined" != typeof window ? window : {};
    return t(e2, i), e2;
  }
  class n extends Array {
    constructor(e2) {
      "number" == typeof e2 ? super(e2) : (super(...e2 || []), function(e3) {
        const t2 = e3.__proto__;
        Object.defineProperty(e3, "__proto__", { get: () => t2, set(e4) {
          t2.__proto__ = e4;
        } });
      }(this));
    }
  }
  function l(e2) {
    void 0 === e2 && (e2 = []);
    const t2 = [];
    return e2.forEach((e3) => {
      Array.isArray(e3) ? t2.push(...l(e3)) : t2.push(e3);
    }), t2;
  }
  function o(e2, t2) {
    return Array.prototype.filter.call(e2, t2);
  }
  function d(e2, t2) {
    const s2 = r(), i2 = a();
    let l2 = [];
    if (!t2 && e2 instanceof n) return e2;
    if (!e2) return new n(l2);
    if ("string" == typeof e2) {
      const s3 = e2.trim();
      if (s3.indexOf("<") >= 0 && s3.indexOf(">") >= 0) {
        let e3 = "div";
        0 === s3.indexOf("<li") && (e3 = "ul"), 0 === s3.indexOf("<tr") && (e3 = "tbody"), 0 !== s3.indexOf("<td") && 0 !== s3.indexOf("<th") || (e3 = "tr"), 0 === s3.indexOf("<tbody") && (e3 = "table"), 0 === s3.indexOf("<option") && (e3 = "select");
        const t3 = i2.createElement(e3);
        t3.innerHTML = s3;
        for (let e4 = 0; e4 < t3.childNodes.length; e4 += 1) l2.push(t3.childNodes[e4]);
      } else l2 = function(e3, t3) {
        if ("string" != typeof e3) return [e3];
        const s4 = [], a2 = t3.querySelectorAll(e3);
        for (let e4 = 0; e4 < a2.length; e4 += 1) s4.push(a2[e4]);
        return s4;
      }(e2.trim(), t2 || i2);
    } else if (e2.nodeType || e2 === s2 || e2 === i2) l2.push(e2);
    else if (Array.isArray(e2)) {
      if (e2 instanceof n) return e2;
      l2 = e2;
    }
    return new n(function(e3) {
      const t3 = [];
      for (let s3 = 0; s3 < e3.length; s3 += 1) -1 === t3.indexOf(e3[s3]) && t3.push(e3[s3]);
      return t3;
    }(l2));
  }
  d.fn = n.prototype;
  const c = { addClass: function() {
    for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
    const a2 = l(t2.map((e3) => e3.split(" ")));
    return this.forEach((e3) => {
      e3.classList.add(...a2);
    }), this;
  }, removeClass: function() {
    for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
    const a2 = l(t2.map((e3) => e3.split(" ")));
    return this.forEach((e3) => {
      e3.classList.remove(...a2);
    }), this;
  }, hasClass: function() {
    for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
    const a2 = l(t2.map((e3) => e3.split(" ")));
    return o(this, (e3) => a2.filter((t3) => e3.classList.contains(t3)).length > 0).length > 0;
  }, toggleClass: function() {
    for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
    const a2 = l(t2.map((e3) => e3.split(" ")));
    this.forEach((e3) => {
      a2.forEach((t3) => {
        e3.classList.toggle(t3);
      });
    });
  }, attr: function(e2, t2) {
    if (1 === arguments.length && "string" == typeof e2) return this[0] ? this[0].getAttribute(e2) : void 0;
    for (let s2 = 0; s2 < this.length; s2 += 1) if (2 === arguments.length) this[s2].setAttribute(e2, t2);
    else for (const t3 in e2) this[s2][t3] = e2[t3], this[s2].setAttribute(t3, e2[t3]);
    return this;
  }, removeAttr: function(e2) {
    for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].removeAttribute(e2);
    return this;
  }, transform: function(e2) {
    for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].style.transform = e2;
    return this;
  }, transition: function(e2) {
    for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].style.transitionDuration = "string" != typeof e2 ? `${e2}ms` : e2;
    return this;
  }, on: function() {
    for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
    let [a2, i2, r2, n2] = t2;
    function l2(e3) {
      const t3 = e3.target;
      if (!t3) return;
      const s3 = e3.target.dom7EventData || [];
      if (s3.indexOf(e3) < 0 && s3.unshift(e3), d(t3).is(i2)) r2.apply(t3, s3);
      else {
        const e4 = d(t3).parents();
        for (let t4 = 0; t4 < e4.length; t4 += 1) d(e4[t4]).is(i2) && r2.apply(e4[t4], s3);
      }
    }
    function o2(e3) {
      const t3 = e3 && e3.target && e3.target.dom7EventData || [];
      t3.indexOf(e3) < 0 && t3.unshift(e3), r2.apply(this, t3);
    }
    "function" == typeof t2[1] && ([a2, r2, n2] = t2, i2 = void 0), n2 || (n2 = false);
    const c2 = a2.split(" ");
    let p2;
    for (let e3 = 0; e3 < this.length; e3 += 1) {
      const t3 = this[e3];
      if (i2) for (p2 = 0; p2 < c2.length; p2 += 1) {
        const e4 = c2[p2];
        t3.dom7LiveListeners || (t3.dom7LiveListeners = {}), t3.dom7LiveListeners[e4] || (t3.dom7LiveListeners[e4] = []), t3.dom7LiveListeners[e4].push({ listener: r2, proxyListener: l2 }), t3.addEventListener(e4, l2, n2);
      }
      else for (p2 = 0; p2 < c2.length; p2 += 1) {
        const e4 = c2[p2];
        t3.dom7Listeners || (t3.dom7Listeners = {}), t3.dom7Listeners[e4] || (t3.dom7Listeners[e4] = []), t3.dom7Listeners[e4].push({ listener: r2, proxyListener: o2 }), t3.addEventListener(e4, o2, n2);
      }
    }
    return this;
  }, off: function() {
    for (var e2 = arguments.length, t2 = new Array(e2), s2 = 0; s2 < e2; s2++) t2[s2] = arguments[s2];
    let [a2, i2, r2, n2] = t2;
    "function" == typeof t2[1] && ([a2, r2, n2] = t2, i2 = void 0), n2 || (n2 = false);
    const l2 = a2.split(" ");
    for (let e3 = 0; e3 < l2.length; e3 += 1) {
      const t3 = l2[e3];
      for (let e4 = 0; e4 < this.length; e4 += 1) {
        const s3 = this[e4];
        let a3;
        if (!i2 && s3.dom7Listeners ? a3 = s3.dom7Listeners[t3] : i2 && s3.dom7LiveListeners && (a3 = s3.dom7LiveListeners[t3]), a3 && a3.length) for (let e5 = a3.length - 1; e5 >= 0; e5 -= 1) {
          const i3 = a3[e5];
          r2 && i3.listener === r2 || r2 && i3.listener && i3.listener.dom7proxy && i3.listener.dom7proxy === r2 ? (s3.removeEventListener(t3, i3.proxyListener, n2), a3.splice(e5, 1)) : r2 || (s3.removeEventListener(t3, i3.proxyListener, n2), a3.splice(e5, 1));
        }
      }
    }
    return this;
  }, trigger: function() {
    const e2 = r();
    for (var t2 = arguments.length, s2 = new Array(t2), a2 = 0; a2 < t2; a2++) s2[a2] = arguments[a2];
    const i2 = s2[0].split(" "), n2 = s2[1];
    for (let t3 = 0; t3 < i2.length; t3 += 1) {
      const a3 = i2[t3];
      for (let t4 = 0; t4 < this.length; t4 += 1) {
        const i3 = this[t4];
        if (e2.CustomEvent) {
          const t5 = new e2.CustomEvent(a3, { detail: n2, bubbles: true, cancelable: true });
          i3.dom7EventData = s2.filter((e3, t6) => t6 > 0), i3.dispatchEvent(t5), i3.dom7EventData = [], delete i3.dom7EventData;
        }
      }
    }
    return this;
  }, transitionEnd: function(e2) {
    const t2 = this;
    return e2 && t2.on("transitionend", function s2(a2) {
      a2.target === this && (e2.call(this, a2), t2.off("transitionend", s2));
    }), this;
  }, outerWidth: function(e2) {
    if (this.length > 0) {
      if (e2) {
        const e3 = this.styles();
        return this[0].offsetWidth + parseFloat(e3.getPropertyValue("margin-right")) + parseFloat(e3.getPropertyValue("margin-left"));
      }
      return this[0].offsetWidth;
    }
    return null;
  }, outerHeight: function(e2) {
    if (this.length > 0) {
      if (e2) {
        const e3 = this.styles();
        return this[0].offsetHeight + parseFloat(e3.getPropertyValue("margin-top")) + parseFloat(e3.getPropertyValue("margin-bottom"));
      }
      return this[0].offsetHeight;
    }
    return null;
  }, styles: function() {
    const e2 = r();
    return this[0] ? e2.getComputedStyle(this[0], null) : {};
  }, offset: function() {
    if (this.length > 0) {
      const e2 = r(), t2 = a(), s2 = this[0], i2 = s2.getBoundingClientRect(), n2 = t2.body, l2 = s2.clientTop || n2.clientTop || 0, o2 = s2.clientLeft || n2.clientLeft || 0, d2 = s2 === e2 ? e2.scrollY : s2.scrollTop, c2 = s2 === e2 ? e2.scrollX : s2.scrollLeft;
      return { top: i2.top + d2 - l2, left: i2.left + c2 - o2 };
    }
    return null;
  }, css: function(e2, t2) {
    const s2 = r();
    let a2;
    if (1 === arguments.length) {
      if ("string" != typeof e2) {
        for (a2 = 0; a2 < this.length; a2 += 1) for (const t3 in e2) this[a2].style[t3] = e2[t3];
        return this;
      }
      if (this[0]) return s2.getComputedStyle(this[0], null).getPropertyValue(e2);
    }
    if (2 === arguments.length && "string" == typeof e2) {
      for (a2 = 0; a2 < this.length; a2 += 1) this[a2].style[e2] = t2;
      return this;
    }
    return this;
  }, each: function(e2) {
    return e2 ? (this.forEach((t2, s2) => {
      e2.apply(t2, [t2, s2]);
    }), this) : this;
  }, html: function(e2) {
    if (void 0 === e2) return this[0] ? this[0].innerHTML : null;
    for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].innerHTML = e2;
    return this;
  }, text: function(e2) {
    if (void 0 === e2) return this[0] ? this[0].textContent.trim() : null;
    for (let t2 = 0; t2 < this.length; t2 += 1) this[t2].textContent = e2;
    return this;
  }, is: function(e2) {
    const t2 = r(), s2 = a(), i2 = this[0];
    let l2, o2;
    if (!i2 || void 0 === e2) return false;
    if ("string" == typeof e2) {
      if (i2.matches) return i2.matches(e2);
      if (i2.webkitMatchesSelector) return i2.webkitMatchesSelector(e2);
      if (i2.msMatchesSelector) return i2.msMatchesSelector(e2);
      for (l2 = d(e2), o2 = 0; o2 < l2.length; o2 += 1) if (l2[o2] === i2) return true;
      return false;
    }
    if (e2 === s2) return i2 === s2;
    if (e2 === t2) return i2 === t2;
    if (e2.nodeType || e2 instanceof n) {
      for (l2 = e2.nodeType ? [e2] : e2, o2 = 0; o2 < l2.length; o2 += 1) if (l2[o2] === i2) return true;
      return false;
    }
    return false;
  }, index: function() {
    let e2, t2 = this[0];
    if (t2) {
      for (e2 = 0; null !== (t2 = t2.previousSibling); ) 1 === t2.nodeType && (e2 += 1);
      return e2;
    }
  }, eq: function(e2) {
    if (void 0 === e2) return this;
    const t2 = this.length;
    if (e2 > t2 - 1) return d([]);
    if (e2 < 0) {
      const s2 = t2 + e2;
      return d(s2 < 0 ? [] : [this[s2]]);
    }
    return d([this[e2]]);
  }, append: function() {
    let e2;
    const t2 = a();
    for (let s2 = 0; s2 < arguments.length; s2 += 1) {
      e2 = s2 < 0 || arguments.length <= s2 ? void 0 : arguments[s2];
      for (let s3 = 0; s3 < this.length; s3 += 1) if ("string" == typeof e2) {
        const a2 = t2.createElement("div");
        for (a2.innerHTML = e2; a2.firstChild; ) this[s3].appendChild(a2.firstChild);
      } else if (e2 instanceof n) for (let t3 = 0; t3 < e2.length; t3 += 1) this[s3].appendChild(e2[t3]);
      else this[s3].appendChild(e2);
    }
    return this;
  }, prepend: function(e2) {
    const t2 = a();
    let s2, i2;
    for (s2 = 0; s2 < this.length; s2 += 1) if ("string" == typeof e2) {
      const a2 = t2.createElement("div");
      for (a2.innerHTML = e2, i2 = a2.childNodes.length - 1; i2 >= 0; i2 -= 1) this[s2].insertBefore(a2.childNodes[i2], this[s2].childNodes[0]);
    } else if (e2 instanceof n) for (i2 = 0; i2 < e2.length; i2 += 1) this[s2].insertBefore(e2[i2], this[s2].childNodes[0]);
    else this[s2].insertBefore(e2, this[s2].childNodes[0]);
    return this;
  }, next: function(e2) {
    return this.length > 0 ? e2 ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e2) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([]);
  }, nextAll: function(e2) {
    const t2 = [];
    let s2 = this[0];
    if (!s2) return d([]);
    for (; s2.nextElementSibling; ) {
      const a2 = s2.nextElementSibling;
      e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), s2 = a2;
    }
    return d(t2);
  }, prev: function(e2) {
    if (this.length > 0) {
      const t2 = this[0];
      return e2 ? t2.previousElementSibling && d(t2.previousElementSibling).is(e2) ? d([t2.previousElementSibling]) : d([]) : t2.previousElementSibling ? d([t2.previousElementSibling]) : d([]);
    }
    return d([]);
  }, prevAll: function(e2) {
    const t2 = [];
    let s2 = this[0];
    if (!s2) return d([]);
    for (; s2.previousElementSibling; ) {
      const a2 = s2.previousElementSibling;
      e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), s2 = a2;
    }
    return d(t2);
  }, parent: function(e2) {
    const t2 = [];
    for (let s2 = 0; s2 < this.length; s2 += 1) null !== this[s2].parentNode && (e2 ? d(this[s2].parentNode).is(e2) && t2.push(this[s2].parentNode) : t2.push(this[s2].parentNode));
    return d(t2);
  }, parents: function(e2) {
    const t2 = [];
    for (let s2 = 0; s2 < this.length; s2 += 1) {
      let a2 = this[s2].parentNode;
      for (; a2; ) e2 ? d(a2).is(e2) && t2.push(a2) : t2.push(a2), a2 = a2.parentNode;
    }
    return d(t2);
  }, closest: function(e2) {
    let t2 = this;
    return void 0 === e2 ? d([]) : (t2.is(e2) || (t2 = t2.parents(e2).eq(0)), t2);
  }, find: function(e2) {
    const t2 = [];
    for (let s2 = 0; s2 < this.length; s2 += 1) {
      const a2 = this[s2].querySelectorAll(e2);
      for (let e3 = 0; e3 < a2.length; e3 += 1) t2.push(a2[e3]);
    }
    return d(t2);
  }, children: function(e2) {
    const t2 = [];
    for (let s2 = 0; s2 < this.length; s2 += 1) {
      const a2 = this[s2].children;
      for (let s3 = 0; s3 < a2.length; s3 += 1) e2 && !d(a2[s3]).is(e2) || t2.push(a2[s3]);
    }
    return d(t2);
  }, filter: function(e2) {
    return d(o(this, e2));
  }, remove: function() {
    for (let e2 = 0; e2 < this.length; e2 += 1) this[e2].parentNode && this[e2].parentNode.removeChild(this[e2]);
    return this;
  } };
  function p(e2, t2) {
    return void 0 === t2 && (t2 = 0), setTimeout(e2, t2);
  }
  function u() {
    return Date.now();
  }
  function h(e2, t2) {
    void 0 === t2 && (t2 = "x");
    const s2 = r();
    let a2, i2, n2;
    const l2 = function(e3) {
      const t3 = r();
      let s3;
      return t3.getComputedStyle && (s3 = t3.getComputedStyle(e3, null)), !s3 && e3.currentStyle && (s3 = e3.currentStyle), s3 || (s3 = e3.style), s3;
    }(e2);
    return s2.WebKitCSSMatrix ? (i2 = l2.transform || l2.webkitTransform, i2.split(",").length > 6 && (i2 = i2.split(", ").map((e3) => e3.replace(",", ".")).join(", ")), n2 = new s2.WebKitCSSMatrix("none" === i2 ? "" : i2)) : (n2 = l2.MozTransform || l2.OTransform || l2.MsTransform || l2.msTransform || l2.transform || l2.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a2 = n2.toString().split(",")), "x" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m41 : 16 === a2.length ? parseFloat(a2[12]) : parseFloat(a2[4])), "y" === t2 && (i2 = s2.WebKitCSSMatrix ? n2.m42 : 16 === a2.length ? parseFloat(a2[13]) : parseFloat(a2[5])), i2 || 0;
  }
  function m(e2) {
    return "object" == typeof e2 && null !== e2 && e2.constructor && "Object" === Object.prototype.toString.call(e2).slice(8, -1);
  }
  function f(e2) {
    return "undefined" != typeof window && void 0 !== window.HTMLElement ? e2 instanceof HTMLElement : e2 && (1 === e2.nodeType || 11 === e2.nodeType);
  }
  function g() {
    const e2 = Object(arguments.length <= 0 ? void 0 : arguments[0]), t2 = ["__proto__", "constructor", "prototype"];
    for (let s2 = 1; s2 < arguments.length; s2 += 1) {
      const a2 = s2 < 0 || arguments.length <= s2 ? void 0 : arguments[s2];
      if (null != a2 && !f(a2)) {
        const s3 = Object.keys(Object(a2)).filter((e3) => t2.indexOf(e3) < 0);
        for (let t3 = 0, i2 = s3.length; t3 < i2; t3 += 1) {
          const i3 = s3[t3], r2 = Object.getOwnPropertyDescriptor(a2, i3);
          void 0 !== r2 && r2.enumerable && (m(e2[i3]) && m(a2[i3]) ? a2[i3].__swiper__ ? e2[i3] = a2[i3] : g(e2[i3], a2[i3]) : !m(e2[i3]) && m(a2[i3]) ? (e2[i3] = {}, a2[i3].__swiper__ ? e2[i3] = a2[i3] : g(e2[i3], a2[i3])) : e2[i3] = a2[i3]);
        }
      }
    }
    return e2;
  }
  function v(e2, t2, s2) {
    e2.style.setProperty(t2, s2);
  }
  function w(e2) {
    let { swiper: t2, targetPosition: s2, side: a2 } = e2;
    const i2 = r(), n2 = -t2.translate;
    let l2, o2 = null;
    const d2 = t2.params.speed;
    t2.wrapperEl.style.scrollSnapType = "none", i2.cancelAnimationFrame(t2.cssModeFrameID);
    const c2 = s2 > n2 ? "next" : "prev", p2 = (e3, t3) => "next" === c2 && e3 >= t3 || "prev" === c2 && e3 <= t3, u2 = () => {
      l2 = (/* @__PURE__ */ new Date()).getTime(), null === o2 && (o2 = l2);
      const e3 = Math.max(Math.min((l2 - o2) / d2, 1), 0), r2 = 0.5 - Math.cos(e3 * Math.PI) / 2;
      let c3 = n2 + r2 * (s2 - n2);
      if (p2(c3, s2) && (c3 = s2), t2.wrapperEl.scrollTo({ [a2]: c3 }), p2(c3, s2)) return t2.wrapperEl.style.overflow = "hidden", t2.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
        t2.wrapperEl.style.overflow = "", t2.wrapperEl.scrollTo({ [a2]: c3 });
      }), void i2.cancelAnimationFrame(t2.cssModeFrameID);
      t2.cssModeFrameID = i2.requestAnimationFrame(u2);
    };
    u2();
  }
  let b, x, y;
  function E() {
    return b || (b = function() {
      const e2 = r(), t2 = a();
      return { smoothScroll: t2.documentElement && "scrollBehavior" in t2.documentElement.style, touch: !!("ontouchstart" in e2 || e2.DocumentTouch && t2 instanceof e2.DocumentTouch), passiveListener: function() {
        let t3 = false;
        try {
          const s2 = Object.defineProperty({}, "passive", { get() {
            t3 = true;
          } });
          e2.addEventListener("testPassiveListener", null, s2);
        } catch (e3) {
        }
        return t3;
      }(), gestures: "ongesturestart" in e2 };
    }()), b;
  }
  function C(e2) {
    return void 0 === e2 && (e2 = {}), x || (x = function(e3) {
      let { userAgent: t2 } = void 0 === e3 ? {} : e3;
      const s2 = E(), a2 = r(), i2 = a2.navigator.platform, n2 = t2 || a2.navigator.userAgent, l2 = { ios: false, android: false }, o2 = a2.screen.width, d2 = a2.screen.height, c2 = n2.match(/(Android);?[\s\/]+([\d.]+)?/);
      let p2 = n2.match(/(iPad).*OS\s([\d_]+)/);
      const u2 = n2.match(/(iPod)(.*OS\s([\d_]+))?/), h2 = !p2 && n2.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m2 = "Win32" === i2;
      let f2 = "MacIntel" === i2;
      return !p2 && f2 && s2.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${o2}x${d2}`) >= 0 && (p2 = n2.match(/(Version)\/([\d.]+)/), p2 || (p2 = [0, 1, "13_0_0"]), f2 = false), c2 && !m2 && (l2.os = "android", l2.android = true), (p2 || h2 || u2) && (l2.os = "ios", l2.ios = true), l2;
    }(e2)), x;
  }
  function T() {
    return y || (y = function() {
      const e2 = r();
      return { isSafari: function() {
        const t2 = e2.navigator.userAgent.toLowerCase();
        return t2.indexOf("safari") >= 0 && t2.indexOf("chrome") < 0 && t2.indexOf("android") < 0;
      }(), isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e2.navigator.userAgent) };
    }()), y;
  }
  Object.keys(c).forEach((e2) => {
    Object.defineProperty(d.fn, e2, { value: c[e2], writable: true });
  });
  var $ = { on(e2, t2, s2) {
    const a2 = this;
    if (!a2.eventsListeners || a2.destroyed) return a2;
    if ("function" != typeof t2) return a2;
    const i2 = s2 ? "unshift" : "push";
    return e2.split(" ").forEach((e3) => {
      a2.eventsListeners[e3] || (a2.eventsListeners[e3] = []), a2.eventsListeners[e3][i2](t2);
    }), a2;
  }, once(e2, t2, s2) {
    const a2 = this;
    if (!a2.eventsListeners || a2.destroyed) return a2;
    if ("function" != typeof t2) return a2;
    function i2() {
      a2.off(e2, i2), i2.__emitterProxy && delete i2.__emitterProxy;
      for (var s3 = arguments.length, r2 = new Array(s3), n2 = 0; n2 < s3; n2++) r2[n2] = arguments[n2];
      t2.apply(a2, r2);
    }
    return i2.__emitterProxy = t2, a2.on(e2, i2, s2);
  }, onAny(e2, t2) {
    const s2 = this;
    if (!s2.eventsListeners || s2.destroyed) return s2;
    if ("function" != typeof e2) return s2;
    const a2 = t2 ? "unshift" : "push";
    return s2.eventsAnyListeners.indexOf(e2) < 0 && s2.eventsAnyListeners[a2](e2), s2;
  }, offAny(e2) {
    const t2 = this;
    if (!t2.eventsListeners || t2.destroyed) return t2;
    if (!t2.eventsAnyListeners) return t2;
    const s2 = t2.eventsAnyListeners.indexOf(e2);
    return s2 >= 0 && t2.eventsAnyListeners.splice(s2, 1), t2;
  }, off(e2, t2) {
    const s2 = this;
    return !s2.eventsListeners || s2.destroyed ? s2 : s2.eventsListeners ? (e2.split(" ").forEach((e3) => {
      void 0 === t2 ? s2.eventsListeners[e3] = [] : s2.eventsListeners[e3] && s2.eventsListeners[e3].forEach((a2, i2) => {
        (a2 === t2 || a2.__emitterProxy && a2.__emitterProxy === t2) && s2.eventsListeners[e3].splice(i2, 1);
      });
    }), s2) : s2;
  }, emit() {
    const e2 = this;
    if (!e2.eventsListeners || e2.destroyed) return e2;
    if (!e2.eventsListeners) return e2;
    let t2, s2, a2;
    for (var i2 = arguments.length, r2 = new Array(i2), n2 = 0; n2 < i2; n2++) r2[n2] = arguments[n2];
    "string" == typeof r2[0] || Array.isArray(r2[0]) ? (t2 = r2[0], s2 = r2.slice(1, r2.length), a2 = e2) : (t2 = r2[0].events, s2 = r2[0].data, a2 = r2[0].context || e2), s2.unshift(a2);
    return (Array.isArray(t2) ? t2 : t2.split(" ")).forEach((t3) => {
      e2.eventsAnyListeners && e2.eventsAnyListeners.length && e2.eventsAnyListeners.forEach((e3) => {
        e3.apply(a2, [t3, ...s2]);
      }), e2.eventsListeners && e2.eventsListeners[t3] && e2.eventsListeners[t3].forEach((e3) => {
        e3.apply(a2, s2);
      });
    }), e2;
  } };
  var S = { updateSize: function() {
    const e2 = this;
    let t2, s2;
    const a2 = e2.$el;
    t2 = void 0 !== e2.params.width && null !== e2.params.width ? e2.params.width : a2[0].clientWidth, s2 = void 0 !== e2.params.height && null !== e2.params.height ? e2.params.height : a2[0].clientHeight, 0 === t2 && e2.isHorizontal() || 0 === s2 && e2.isVertical() || (t2 = t2 - parseInt(a2.css("padding-left") || 0, 10) - parseInt(a2.css("padding-right") || 0, 10), s2 = s2 - parseInt(a2.css("padding-top") || 0, 10) - parseInt(a2.css("padding-bottom") || 0, 10), Number.isNaN(t2) && (t2 = 0), Number.isNaN(s2) && (s2 = 0), Object.assign(e2, { width: t2, height: s2, size: e2.isHorizontal() ? t2 : s2 }));
  }, updateSlides: function() {
    const e2 = this;
    function t2(t3) {
      return e2.isHorizontal() ? t3 : { width: "height", "margin-top": "margin-left", "margin-bottom ": "margin-right", "margin-left": "margin-top", "margin-right": "margin-bottom", "padding-left": "padding-top", "padding-right": "padding-bottom", marginRight: "marginBottom" }[t3];
    }
    function s2(e3, s3) {
      return parseFloat(e3.getPropertyValue(t2(s3)) || 0);
    }
    const a2 = e2.params, { $wrapperEl: i2, size: r2, rtlTranslate: n2, wrongRTL: l2 } = e2, o2 = e2.virtual && a2.virtual.enabled, d2 = o2 ? e2.virtual.slides.length : e2.slides.length, c2 = i2.children(`.${e2.params.slideClass}`), p2 = o2 ? e2.virtual.slides.length : c2.length;
    let u2 = [];
    const h2 = [], m2 = [];
    let f2 = a2.slidesOffsetBefore;
    "function" == typeof f2 && (f2 = a2.slidesOffsetBefore.call(e2));
    let g2 = a2.slidesOffsetAfter;
    "function" == typeof g2 && (g2 = a2.slidesOffsetAfter.call(e2));
    const w2 = e2.snapGrid.length, b2 = e2.slidesGrid.length;
    let x2 = a2.spaceBetween, y2 = -f2, E2 = 0, C2 = 0;
    if (void 0 === r2) return;
    "string" == typeof x2 && x2.indexOf("%") >= 0 && (x2 = parseFloat(x2.replace("%", "")) / 100 * r2), e2.virtualSize = -x2, n2 ? c2.css({ marginLeft: "", marginBottom: "", marginTop: "" }) : c2.css({ marginRight: "", marginBottom: "", marginTop: "" }), a2.centeredSlides && a2.cssMode && (v(e2.wrapperEl, "--swiper-centered-offset-before", ""), v(e2.wrapperEl, "--swiper-centered-offset-after", ""));
    const T2 = a2.grid && a2.grid.rows > 1 && e2.grid;
    let $2;
    T2 && e2.grid.initSlides(p2);
    const S2 = "auto" === a2.slidesPerView && a2.breakpoints && Object.keys(a2.breakpoints).filter((e3) => void 0 !== a2.breakpoints[e3].slidesPerView).length > 0;
    for (let i3 = 0; i3 < p2; i3 += 1) {
      $2 = 0;
      const n3 = c2.eq(i3);
      if (T2 && e2.grid.updateSlide(i3, n3, p2, t2), "none" !== n3.css("display")) {
        if ("auto" === a2.slidesPerView) {
          S2 && (c2[i3].style[t2("width")] = "");
          const r3 = getComputedStyle(n3[0]), l3 = n3[0].style.transform, o3 = n3[0].style.webkitTransform;
          if (l3 && (n3[0].style.transform = "none"), o3 && (n3[0].style.webkitTransform = "none"), a2.roundLengths) $2 = e2.isHorizontal() ? n3.outerWidth(true) : n3.outerHeight(true);
          else {
            const e3 = s2(r3, "width"), t3 = s2(r3, "padding-left"), a3 = s2(r3, "padding-right"), i4 = s2(r3, "margin-left"), l4 = s2(r3, "margin-right"), o4 = r3.getPropertyValue("box-sizing");
            if (o4 && "border-box" === o4) $2 = e3 + i4 + l4;
            else {
              const { clientWidth: s3, offsetWidth: r4 } = n3[0];
              $2 = e3 + t3 + a3 + i4 + l4 + (r4 - s3);
            }
          }
          l3 && (n3[0].style.transform = l3), o3 && (n3[0].style.webkitTransform = o3), a2.roundLengths && ($2 = Math.floor($2));
        } else $2 = (r2 - (a2.slidesPerView - 1) * x2) / a2.slidesPerView, a2.roundLengths && ($2 = Math.floor($2)), c2[i3] && (c2[i3].style[t2("width")] = `${$2}px`);
        c2[i3] && (c2[i3].swiperSlideSize = $2), m2.push($2), a2.centeredSlides ? (y2 = y2 + $2 / 2 + E2 / 2 + x2, 0 === E2 && 0 !== i3 && (y2 = y2 - r2 / 2 - x2), 0 === i3 && (y2 = y2 - r2 / 2 - x2), Math.abs(y2) < 1e-3 && (y2 = 0), a2.roundLengths && (y2 = Math.floor(y2)), C2 % a2.slidesPerGroup == 0 && u2.push(y2), h2.push(y2)) : (a2.roundLengths && (y2 = Math.floor(y2)), (C2 - Math.min(e2.params.slidesPerGroupSkip, C2)) % e2.params.slidesPerGroup == 0 && u2.push(y2), h2.push(y2), y2 = y2 + $2 + x2), e2.virtualSize += $2 + x2, E2 = $2, C2 += 1;
      }
    }
    if (e2.virtualSize = Math.max(e2.virtualSize, r2) + g2, n2 && l2 && ("slide" === a2.effect || "coverflow" === a2.effect) && i2.css({ width: `${e2.virtualSize + a2.spaceBetween}px` }), a2.setWrapperSize && i2.css({ [t2("width")]: `${e2.virtualSize + a2.spaceBetween}px` }), T2 && e2.grid.updateWrapperSize($2, u2, t2), !a2.centeredSlides) {
      const t3 = [];
      for (let s3 = 0; s3 < u2.length; s3 += 1) {
        let i3 = u2[s3];
        a2.roundLengths && (i3 = Math.floor(i3)), u2[s3] <= e2.virtualSize - r2 && t3.push(i3);
      }
      u2 = t3, Math.floor(e2.virtualSize - r2) - Math.floor(u2[u2.length - 1]) > 1 && u2.push(e2.virtualSize - r2);
    }
    if (0 === u2.length && (u2 = [0]), 0 !== a2.spaceBetween) {
      const s3 = e2.isHorizontal() && n2 ? "marginLeft" : t2("marginRight");
      c2.filter((e3, t3) => !a2.cssMode || t3 !== c2.length - 1).css({ [s3]: `${x2}px` });
    }
    if (a2.centeredSlides && a2.centeredSlidesBounds) {
      let e3 = 0;
      m2.forEach((t4) => {
        e3 += t4 + (a2.spaceBetween ? a2.spaceBetween : 0);
      }), e3 -= a2.spaceBetween;
      const t3 = e3 - r2;
      u2 = u2.map((e4) => e4 < 0 ? -f2 : e4 > t3 ? t3 + g2 : e4);
    }
    if (a2.centerInsufficientSlides) {
      let e3 = 0;
      if (m2.forEach((t3) => {
        e3 += t3 + (a2.spaceBetween ? a2.spaceBetween : 0);
      }), e3 -= a2.spaceBetween, e3 < r2) {
        const t3 = (r2 - e3) / 2;
        u2.forEach((e4, s3) => {
          u2[s3] = e4 - t3;
        }), h2.forEach((e4, s3) => {
          h2[s3] = e4 + t3;
        });
      }
    }
    if (Object.assign(e2, { slides: c2, snapGrid: u2, slidesGrid: h2, slidesSizesGrid: m2 }), a2.centeredSlides && a2.cssMode && !a2.centeredSlidesBounds) {
      v(e2.wrapperEl, "--swiper-centered-offset-before", -u2[0] + "px"), v(e2.wrapperEl, "--swiper-centered-offset-after", e2.size / 2 - m2[m2.length - 1] / 2 + "px");
      const t3 = -e2.snapGrid[0], s3 = -e2.slidesGrid[0];
      e2.snapGrid = e2.snapGrid.map((e3) => e3 + t3), e2.slidesGrid = e2.slidesGrid.map((e3) => e3 + s3);
    }
    if (p2 !== d2 && e2.emit("slidesLengthChange"), u2.length !== w2 && (e2.params.watchOverflow && e2.checkOverflow(), e2.emit("snapGridLengthChange")), h2.length !== b2 && e2.emit("slidesGridLengthChange"), a2.watchSlidesProgress && e2.updateSlidesOffset(), !(o2 || a2.cssMode || "slide" !== a2.effect && "fade" !== a2.effect)) {
      const t3 = `${a2.containerModifierClass}backface-hidden`, s3 = e2.$el.hasClass(t3);
      p2 <= a2.maxBackfaceHiddenSlides ? s3 || e2.$el.addClass(t3) : s3 && e2.$el.removeClass(t3);
    }
  }, updateAutoHeight: function(e2) {
    const t2 = this, s2 = [], a2 = t2.virtual && t2.params.virtual.enabled;
    let i2, r2 = 0;
    "number" == typeof e2 ? t2.setTransition(e2) : true === e2 && t2.setTransition(t2.params.speed);
    const n2 = (e3) => a2 ? t2.slides.filter((t3) => parseInt(t3.getAttribute("data-swiper-slide-index"), 10) === e3)[0] : t2.slides.eq(e3)[0];
    if ("auto" !== t2.params.slidesPerView && t2.params.slidesPerView > 1) if (t2.params.centeredSlides) (t2.visibleSlides || d([])).each((e3) => {
      s2.push(e3);
    });
    else for (i2 = 0; i2 < Math.ceil(t2.params.slidesPerView); i2 += 1) {
      const e3 = t2.activeIndex + i2;
      if (e3 > t2.slides.length && !a2) break;
      s2.push(n2(e3));
    }
    else s2.push(n2(t2.activeIndex));
    for (i2 = 0; i2 < s2.length; i2 += 1) if (void 0 !== s2[i2]) {
      const e3 = s2[i2].offsetHeight;
      r2 = e3 > r2 ? e3 : r2;
    }
    (r2 || 0 === r2) && t2.$wrapperEl.css("height", `${r2}px`);
  }, updateSlidesOffset: function() {
    const e2 = this, t2 = e2.slides;
    for (let s2 = 0; s2 < t2.length; s2 += 1) t2[s2].swiperSlideOffset = e2.isHorizontal() ? t2[s2].offsetLeft : t2[s2].offsetTop;
  }, updateSlidesProgress: function(e2) {
    void 0 === e2 && (e2 = this && this.translate || 0);
    const t2 = this, s2 = t2.params, { slides: a2, rtlTranslate: i2, snapGrid: r2 } = t2;
    if (0 === a2.length) return;
    void 0 === a2[0].swiperSlideOffset && t2.updateSlidesOffset();
    let n2 = -e2;
    i2 && (n2 = e2), a2.removeClass(s2.slideVisibleClass), t2.visibleSlidesIndexes = [], t2.visibleSlides = [];
    for (let e3 = 0; e3 < a2.length; e3 += 1) {
      const l2 = a2[e3];
      let o2 = l2.swiperSlideOffset;
      s2.cssMode && s2.centeredSlides && (o2 -= a2[0].swiperSlideOffset);
      const d2 = (n2 + (s2.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s2.spaceBetween), c2 = (n2 - r2[0] + (s2.centeredSlides ? t2.minTranslate() : 0) - o2) / (l2.swiperSlideSize + s2.spaceBetween), p2 = -(n2 - o2), u2 = p2 + t2.slidesSizesGrid[e3];
      (p2 >= 0 && p2 < t2.size - 1 || u2 > 1 && u2 <= t2.size || p2 <= 0 && u2 >= t2.size) && (t2.visibleSlides.push(l2), t2.visibleSlidesIndexes.push(e3), a2.eq(e3).addClass(s2.slideVisibleClass)), l2.progress = i2 ? -d2 : d2, l2.originalProgress = i2 ? -c2 : c2;
    }
    t2.visibleSlides = d(t2.visibleSlides);
  }, updateProgress: function(e2) {
    const t2 = this;
    if (void 0 === e2) {
      const s3 = t2.rtlTranslate ? -1 : 1;
      e2 = t2 && t2.translate && t2.translate * s3 || 0;
    }
    const s2 = t2.params, a2 = t2.maxTranslate() - t2.minTranslate();
    let { progress: i2, isBeginning: r2, isEnd: n2 } = t2;
    const l2 = r2, o2 = n2;
    0 === a2 ? (i2 = 0, r2 = true, n2 = true) : (i2 = (e2 - t2.minTranslate()) / a2, r2 = i2 <= 0, n2 = i2 >= 1), Object.assign(t2, { progress: i2, isBeginning: r2, isEnd: n2 }), (s2.watchSlidesProgress || s2.centeredSlides && s2.autoHeight) && t2.updateSlidesProgress(e2), r2 && !l2 && t2.emit("reachBeginning toEdge"), n2 && !o2 && t2.emit("reachEnd toEdge"), (l2 && !r2 || o2 && !n2) && t2.emit("fromEdge"), t2.emit("progress", i2);
  }, updateSlidesClasses: function() {
    const e2 = this, { slides: t2, params: s2, $wrapperEl: a2, activeIndex: i2, realIndex: r2 } = e2, n2 = e2.virtual && s2.virtual.enabled;
    let l2;
    t2.removeClass(`${s2.slideActiveClass} ${s2.slideNextClass} ${s2.slidePrevClass} ${s2.slideDuplicateActiveClass} ${s2.slideDuplicateNextClass} ${s2.slideDuplicatePrevClass}`), l2 = n2 ? e2.$wrapperEl.find(`.${s2.slideClass}[data-swiper-slide-index="${i2}"]`) : t2.eq(i2), l2.addClass(s2.slideActiveClass), s2.loop && (l2.hasClass(s2.slideDuplicateClass) ? a2.children(`.${s2.slideClass}:not(.${s2.slideDuplicateClass})[data-swiper-slide-index="${r2}"]`).addClass(s2.slideDuplicateActiveClass) : a2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}[data-swiper-slide-index="${r2}"]`).addClass(s2.slideDuplicateActiveClass));
    let o2 = l2.nextAll(`.${s2.slideClass}`).eq(0).addClass(s2.slideNextClass);
    s2.loop && 0 === o2.length && (o2 = t2.eq(0), o2.addClass(s2.slideNextClass));
    let d2 = l2.prevAll(`.${s2.slideClass}`).eq(0).addClass(s2.slidePrevClass);
    s2.loop && 0 === d2.length && (d2 = t2.eq(-1), d2.addClass(s2.slidePrevClass)), s2.loop && (o2.hasClass(s2.slideDuplicateClass) ? a2.children(`.${s2.slideClass}:not(.${s2.slideDuplicateClass})[data-swiper-slide-index="${o2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicateNextClass) : a2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}[data-swiper-slide-index="${o2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicateNextClass), d2.hasClass(s2.slideDuplicateClass) ? a2.children(`.${s2.slideClass}:not(.${s2.slideDuplicateClass})[data-swiper-slide-index="${d2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicatePrevClass) : a2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}[data-swiper-slide-index="${d2.attr("data-swiper-slide-index")}"]`).addClass(s2.slideDuplicatePrevClass)), e2.emitSlidesClasses();
  }, updateActiveIndex: function(e2) {
    const t2 = this, s2 = t2.rtlTranslate ? t2.translate : -t2.translate, { slidesGrid: a2, snapGrid: i2, params: r2, activeIndex: n2, realIndex: l2, snapIndex: o2 } = t2;
    let d2, c2 = e2;
    if (void 0 === c2) {
      for (let e3 = 0; e3 < a2.length; e3 += 1) void 0 !== a2[e3 + 1] ? s2 >= a2[e3] && s2 < a2[e3 + 1] - (a2[e3 + 1] - a2[e3]) / 2 ? c2 = e3 : s2 >= a2[e3] && s2 < a2[e3 + 1] && (c2 = e3 + 1) : s2 >= a2[e3] && (c2 = e3);
      r2.normalizeSlideIndex && (c2 < 0 || void 0 === c2) && (c2 = 0);
    }
    if (i2.indexOf(s2) >= 0) d2 = i2.indexOf(s2);
    else {
      const e3 = Math.min(r2.slidesPerGroupSkip, c2);
      d2 = e3 + Math.floor((c2 - e3) / r2.slidesPerGroup);
    }
    if (d2 >= i2.length && (d2 = i2.length - 1), c2 === n2) return void (d2 !== o2 && (t2.snapIndex = d2, t2.emit("snapIndexChange")));
    const p2 = parseInt(t2.slides.eq(c2).attr("data-swiper-slide-index") || c2, 10);
    Object.assign(t2, { snapIndex: d2, realIndex: p2, previousIndex: n2, activeIndex: c2 }), t2.emit("activeIndexChange"), t2.emit("snapIndexChange"), l2 !== p2 && t2.emit("realIndexChange"), (t2.initialized || t2.params.runCallbacksOnInit) && t2.emit("slideChange");
  }, updateClickedSlide: function(e2) {
    const t2 = this, s2 = t2.params, a2 = d(e2).closest(`.${s2.slideClass}`)[0];
    let i2, r2 = false;
    if (a2) {
      for (let e3 = 0; e3 < t2.slides.length; e3 += 1) if (t2.slides[e3] === a2) {
        r2 = true, i2 = e3;
        break;
      }
    }
    if (!a2 || !r2) return t2.clickedSlide = void 0, void (t2.clickedIndex = void 0);
    t2.clickedSlide = a2, t2.virtual && t2.params.virtual.enabled ? t2.clickedIndex = parseInt(d(a2).attr("data-swiper-slide-index"), 10) : t2.clickedIndex = i2, s2.slideToClickedSlide && void 0 !== t2.clickedIndex && t2.clickedIndex !== t2.activeIndex && t2.slideToClickedSlide();
  } };
  var M = { getTranslate: function(e2) {
    void 0 === e2 && (e2 = this.isHorizontal() ? "x" : "y");
    const { params: t2, rtlTranslate: s2, translate: a2, $wrapperEl: i2 } = this;
    if (t2.virtualTranslate) return s2 ? -a2 : a2;
    if (t2.cssMode) return a2;
    let r2 = h(i2[0], e2);
    return s2 && (r2 = -r2), r2 || 0;
  }, setTranslate: function(e2, t2) {
    const s2 = this, { rtlTranslate: a2, params: i2, $wrapperEl: r2, wrapperEl: n2, progress: l2 } = s2;
    let o2, d2 = 0, c2 = 0;
    s2.isHorizontal() ? d2 = a2 ? -e2 : e2 : c2 = e2, i2.roundLengths && (d2 = Math.floor(d2), c2 = Math.floor(c2)), i2.cssMode ? n2[s2.isHorizontal() ? "scrollLeft" : "scrollTop"] = s2.isHorizontal() ? -d2 : -c2 : i2.virtualTranslate || r2.transform(`translate3d(${d2}px, ${c2}px, 0px)`), s2.previousTranslate = s2.translate, s2.translate = s2.isHorizontal() ? d2 : c2;
    const p2 = s2.maxTranslate() - s2.minTranslate();
    o2 = 0 === p2 ? 0 : (e2 - s2.minTranslate()) / p2, o2 !== l2 && s2.updateProgress(e2), s2.emit("setTranslate", s2.translate, t2);
  }, minTranslate: function() {
    return -this.snapGrid[0];
  }, maxTranslate: function() {
    return -this.snapGrid[this.snapGrid.length - 1];
  }, translateTo: function(e2, t2, s2, a2, i2) {
    void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), void 0 === a2 && (a2 = true);
    const r2 = this, { params: n2, wrapperEl: l2 } = r2;
    if (r2.animating && n2.preventInteractionOnTransition) return false;
    const o2 = r2.minTranslate(), d2 = r2.maxTranslate();
    let c2;
    if (c2 = a2 && e2 > o2 ? o2 : a2 && e2 < d2 ? d2 : e2, r2.updateProgress(c2), n2.cssMode) {
      const e3 = r2.isHorizontal();
      if (0 === t2) l2[e3 ? "scrollLeft" : "scrollTop"] = -c2;
      else {
        if (!r2.support.smoothScroll) return w({ swiper: r2, targetPosition: -c2, side: e3 ? "left" : "top" }), true;
        l2.scrollTo({ [e3 ? "left" : "top"]: -c2, behavior: "smooth" });
      }
      return true;
    }
    return 0 === t2 ? (r2.setTransition(0), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionEnd"))) : (r2.setTransition(t2), r2.setTranslate(c2), s2 && (r2.emit("beforeTransitionStart", t2, i2), r2.emit("transitionStart")), r2.animating || (r2.animating = true, r2.onTranslateToWrapperTransitionEnd || (r2.onTranslateToWrapperTransitionEnd = function(e3) {
      r2 && !r2.destroyed && e3.target === this && (r2.$wrapperEl[0].removeEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd), r2.onTranslateToWrapperTransitionEnd = null, delete r2.onTranslateToWrapperTransitionEnd, s2 && r2.emit("transitionEnd"));
    }), r2.$wrapperEl[0].addEventListener("transitionend", r2.onTranslateToWrapperTransitionEnd), r2.$wrapperEl[0].addEventListener("webkitTransitionEnd", r2.onTranslateToWrapperTransitionEnd))), true;
  } };
  function P(e2) {
    let { swiper: t2, runCallbacks: s2, direction: a2, step: i2 } = e2;
    const { activeIndex: r2, previousIndex: n2 } = t2;
    let l2 = a2;
    if (l2 || (l2 = r2 > n2 ? "next" : r2 < n2 ? "prev" : "reset"), t2.emit(`transition${i2}`), s2 && r2 !== n2) {
      if ("reset" === l2) return void t2.emit(`slideResetTransition${i2}`);
      t2.emit(`slideChangeTransition${i2}`), "next" === l2 ? t2.emit(`slideNextTransition${i2}`) : t2.emit(`slidePrevTransition${i2}`);
    }
  }
  var k = { slideTo: function(e2, t2, s2, a2, i2) {
    if (void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), "number" != typeof e2 && "string" != typeof e2) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e2}] given.`);
    if ("string" == typeof e2) {
      const t3 = parseInt(e2, 10);
      if (!isFinite(t3)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e2}] given.`);
      e2 = t3;
    }
    const r2 = this;
    let n2 = e2;
    n2 < 0 && (n2 = 0);
    const { params: l2, snapGrid: o2, slidesGrid: d2, previousIndex: c2, activeIndex: p2, rtlTranslate: u2, wrapperEl: h2, enabled: m2 } = r2;
    if (r2.animating && l2.preventInteractionOnTransition || !m2 && !a2 && !i2) return false;
    const f2 = Math.min(r2.params.slidesPerGroupSkip, n2);
    let g2 = f2 + Math.floor((n2 - f2) / r2.params.slidesPerGroup);
    g2 >= o2.length && (g2 = o2.length - 1), (p2 || l2.initialSlide || 0) === (c2 || 0) && s2 && r2.emit("beforeSlideChangeStart");
    const v2 = -o2[g2];
    if (r2.updateProgress(v2), l2.normalizeSlideIndex) for (let e3 = 0; e3 < d2.length; e3 += 1) {
      const t3 = -Math.floor(100 * v2), s3 = Math.floor(100 * d2[e3]), a3 = Math.floor(100 * d2[e3 + 1]);
      void 0 !== d2[e3 + 1] ? t3 >= s3 && t3 < a3 - (a3 - s3) / 2 ? n2 = e3 : t3 >= s3 && t3 < a3 && (n2 = e3 + 1) : t3 >= s3 && (n2 = e3);
    }
    if (r2.initialized && n2 !== p2) {
      if (!r2.allowSlideNext && v2 < r2.translate && v2 < r2.minTranslate()) return false;
      if (!r2.allowSlidePrev && v2 > r2.translate && v2 > r2.maxTranslate() && (p2 || 0) !== n2) return false;
    }
    let b2;
    if (b2 = n2 > p2 ? "next" : n2 < p2 ? "prev" : "reset", u2 && -v2 === r2.translate || !u2 && v2 === r2.translate) return r2.updateActiveIndex(n2), l2.autoHeight && r2.updateAutoHeight(), r2.updateSlidesClasses(), "slide" !== l2.effect && r2.setTranslate(v2), "reset" !== b2 && (r2.transitionStart(s2, b2), r2.transitionEnd(s2, b2)), false;
    if (l2.cssMode) {
      const e3 = r2.isHorizontal(), s3 = u2 ? v2 : -v2;
      if (0 === t2) {
        const t3 = r2.virtual && r2.params.virtual.enabled;
        t3 && (r2.wrapperEl.style.scrollSnapType = "none", r2._immediateVirtual = true), h2[e3 ? "scrollLeft" : "scrollTop"] = s3, t3 && requestAnimationFrame(() => {
          r2.wrapperEl.style.scrollSnapType = "", r2._swiperImmediateVirtual = false;
        });
      } else {
        if (!r2.support.smoothScroll) return w({ swiper: r2, targetPosition: s3, side: e3 ? "left" : "top" }), true;
        h2.scrollTo({ [e3 ? "left" : "top"]: s3, behavior: "smooth" });
      }
      return true;
    }
    return r2.setTransition(t2), r2.setTranslate(v2), r2.updateActiveIndex(n2), r2.updateSlidesClasses(), r2.emit("beforeTransitionStart", t2, a2), r2.transitionStart(s2, b2), 0 === t2 ? r2.transitionEnd(s2, b2) : r2.animating || (r2.animating = true, r2.onSlideToWrapperTransitionEnd || (r2.onSlideToWrapperTransitionEnd = function(e3) {
      r2 && !r2.destroyed && e3.target === this && (r2.$wrapperEl[0].removeEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r2.onSlideToWrapperTransitionEnd), r2.onSlideToWrapperTransitionEnd = null, delete r2.onSlideToWrapperTransitionEnd, r2.transitionEnd(s2, b2));
    }), r2.$wrapperEl[0].addEventListener("transitionend", r2.onSlideToWrapperTransitionEnd), r2.$wrapperEl[0].addEventListener("webkitTransitionEnd", r2.onSlideToWrapperTransitionEnd)), true;
  }, slideToLoop: function(e2, t2, s2, a2) {
    if (void 0 === e2 && (e2 = 0), void 0 === t2 && (t2 = this.params.speed), void 0 === s2 && (s2 = true), "string" == typeof e2) {
      const t3 = parseInt(e2, 10);
      if (!isFinite(t3)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e2}] given.`);
      e2 = t3;
    }
    const i2 = this;
    let r2 = e2;
    return i2.params.loop && (r2 += i2.loopedSlides), i2.slideTo(r2, t2, s2, a2);
  }, slideNext: function(e2, t2, s2) {
    void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
    const a2 = this, { animating: i2, enabled: r2, params: n2 } = a2;
    if (!r2) return a2;
    let l2 = n2.slidesPerGroup;
    "auto" === n2.slidesPerView && 1 === n2.slidesPerGroup && n2.slidesPerGroupAuto && (l2 = Math.max(a2.slidesPerViewDynamic("current", true), 1));
    const o2 = a2.activeIndex < n2.slidesPerGroupSkip ? 1 : l2;
    if (n2.loop) {
      if (i2 && n2.loopPreventsSlide) return false;
      a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft;
    }
    return n2.rewind && a2.isEnd ? a2.slideTo(0, e2, t2, s2) : a2.slideTo(a2.activeIndex + o2, e2, t2, s2);
  }, slidePrev: function(e2, t2, s2) {
    void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true);
    const a2 = this, { params: i2, animating: r2, snapGrid: n2, slidesGrid: l2, rtlTranslate: o2, enabled: d2 } = a2;
    if (!d2) return a2;
    if (i2.loop) {
      if (r2 && i2.loopPreventsSlide) return false;
      a2.loopFix(), a2._clientLeft = a2.$wrapperEl[0].clientLeft;
    }
    function c2(e3) {
      return e3 < 0 ? -Math.floor(Math.abs(e3)) : Math.floor(e3);
    }
    const p2 = c2(o2 ? a2.translate : -a2.translate), u2 = n2.map((e3) => c2(e3));
    let h2 = n2[u2.indexOf(p2) - 1];
    if (void 0 === h2 && i2.cssMode) {
      let e3;
      n2.forEach((t3, s3) => {
        p2 >= t3 && (e3 = s3);
      }), void 0 !== e3 && (h2 = n2[e3 > 0 ? e3 - 1 : e3]);
    }
    let m2 = 0;
    if (void 0 !== h2 && (m2 = l2.indexOf(h2), m2 < 0 && (m2 = a2.activeIndex - 1), "auto" === i2.slidesPerView && 1 === i2.slidesPerGroup && i2.slidesPerGroupAuto && (m2 = m2 - a2.slidesPerViewDynamic("previous", true) + 1, m2 = Math.max(m2, 0))), i2.rewind && a2.isBeginning) {
      const i3 = a2.params.virtual && a2.params.virtual.enabled && a2.virtual ? a2.virtual.slides.length - 1 : a2.slides.length - 1;
      return a2.slideTo(i3, e2, t2, s2);
    }
    return a2.slideTo(m2, e2, t2, s2);
  }, slideReset: function(e2, t2, s2) {
    return void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true), this.slideTo(this.activeIndex, e2, t2, s2);
  }, slideToClosest: function(e2, t2, s2, a2) {
    void 0 === e2 && (e2 = this.params.speed), void 0 === t2 && (t2 = true), void 0 === a2 && (a2 = 0.5);
    const i2 = this;
    let r2 = i2.activeIndex;
    const n2 = Math.min(i2.params.slidesPerGroupSkip, r2), l2 = n2 + Math.floor((r2 - n2) / i2.params.slidesPerGroup), o2 = i2.rtlTranslate ? i2.translate : -i2.translate;
    if (o2 >= i2.snapGrid[l2]) {
      const e3 = i2.snapGrid[l2];
      o2 - e3 > (i2.snapGrid[l2 + 1] - e3) * a2 && (r2 += i2.params.slidesPerGroup);
    } else {
      const e3 = i2.snapGrid[l2 - 1];
      o2 - e3 <= (i2.snapGrid[l2] - e3) * a2 && (r2 -= i2.params.slidesPerGroup);
    }
    return r2 = Math.max(r2, 0), r2 = Math.min(r2, i2.slidesGrid.length - 1), i2.slideTo(r2, e2, t2, s2);
  }, slideToClickedSlide: function() {
    const e2 = this, { params: t2, $wrapperEl: s2 } = e2, a2 = "auto" === t2.slidesPerView ? e2.slidesPerViewDynamic() : t2.slidesPerView;
    let i2, r2 = e2.clickedIndex;
    if (t2.loop) {
      if (e2.animating) return;
      i2 = parseInt(d(e2.clickedSlide).attr("data-swiper-slide-index"), 10), t2.centeredSlides ? r2 < e2.loopedSlides - a2 / 2 || r2 > e2.slides.length - e2.loopedSlides + a2 / 2 ? (e2.loopFix(), r2 = s2.children(`.${t2.slideClass}[data-swiper-slide-index="${i2}"]:not(.${t2.slideDuplicateClass})`).eq(0).index(), p(() => {
        e2.slideTo(r2);
      })) : e2.slideTo(r2) : r2 > e2.slides.length - a2 ? (e2.loopFix(), r2 = s2.children(`.${t2.slideClass}[data-swiper-slide-index="${i2}"]:not(.${t2.slideDuplicateClass})`).eq(0).index(), p(() => {
        e2.slideTo(r2);
      })) : e2.slideTo(r2);
    } else e2.slideTo(r2);
  } };
  var z = { loopCreate: function() {
    const e2 = this, t2 = a(), { params: s2, $wrapperEl: i2 } = e2, r2 = i2.children().length > 0 ? d(i2.children()[0].parentNode) : i2;
    r2.children(`.${s2.slideClass}.${s2.slideDuplicateClass}`).remove();
    let n2 = r2.children(`.${s2.slideClass}`);
    if (s2.loopFillGroupWithBlank) {
      const e3 = s2.slidesPerGroup - n2.length % s2.slidesPerGroup;
      if (e3 !== s2.slidesPerGroup) {
        for (let a2 = 0; a2 < e3; a2 += 1) {
          const e4 = d(t2.createElement("div")).addClass(`${s2.slideClass} ${s2.slideBlankClass}`);
          r2.append(e4);
        }
        n2 = r2.children(`.${s2.slideClass}`);
      }
    }
    "auto" !== s2.slidesPerView || s2.loopedSlides || (s2.loopedSlides = n2.length), e2.loopedSlides = Math.ceil(parseFloat(s2.loopedSlides || s2.slidesPerView, 10)), e2.loopedSlides += s2.loopAdditionalSlides, e2.loopedSlides > n2.length && e2.params.loopedSlidesLimit && (e2.loopedSlides = n2.length);
    const l2 = [], o2 = [];
    n2.each((e3, t3) => {
      d(e3).attr("data-swiper-slide-index", t3);
    });
    for (let t3 = 0; t3 < e2.loopedSlides; t3 += 1) {
      const e3 = t3 - Math.floor(t3 / n2.length) * n2.length;
      o2.push(n2.eq(e3)[0]), l2.unshift(n2.eq(n2.length - e3 - 1)[0]);
    }
    for (let e3 = 0; e3 < o2.length; e3 += 1) r2.append(d(o2[e3].cloneNode(true)).addClass(s2.slideDuplicateClass));
    for (let e3 = l2.length - 1; e3 >= 0; e3 -= 1) r2.prepend(d(l2[e3].cloneNode(true)).addClass(s2.slideDuplicateClass));
  }, loopFix: function() {
    const e2 = this;
    e2.emit("beforeLoopFix");
    const { activeIndex: t2, slides: s2, loopedSlides: a2, allowSlidePrev: i2, allowSlideNext: r2, snapGrid: n2, rtlTranslate: l2 } = e2;
    let o2;
    e2.allowSlidePrev = true, e2.allowSlideNext = true;
    const d2 = -n2[t2] - e2.getTranslate();
    if (t2 < a2) {
      o2 = s2.length - 3 * a2 + t2, o2 += a2;
      e2.slideTo(o2, 0, false, true) && 0 !== d2 && e2.setTranslate((l2 ? -e2.translate : e2.translate) - d2);
    } else if (t2 >= s2.length - a2) {
      o2 = -s2.length + t2 + a2, o2 += a2;
      e2.slideTo(o2, 0, false, true) && 0 !== d2 && e2.setTranslate((l2 ? -e2.translate : e2.translate) - d2);
    }
    e2.allowSlidePrev = i2, e2.allowSlideNext = r2, e2.emit("loopFix");
  }, loopDestroy: function() {
    const { $wrapperEl: e2, params: t2, slides: s2 } = this;
    e2.children(`.${t2.slideClass}.${t2.slideDuplicateClass},.${t2.slideClass}.${t2.slideBlankClass}`).remove(), s2.removeAttr("data-swiper-slide-index");
  } };
  function L(e2) {
    const t2 = this, s2 = a(), i2 = r(), n2 = t2.touchEventsData, { params: l2, touches: o2, enabled: c2 } = t2;
    if (!c2) return;
    if (t2.animating && l2.preventInteractionOnTransition) return;
    !t2.animating && l2.cssMode && l2.loop && t2.loopFix();
    let p2 = e2;
    p2.originalEvent && (p2 = p2.originalEvent);
    let h2 = d(p2.target);
    if ("wrapper" === l2.touchEventsTarget && !h2.closest(t2.wrapperEl).length) return;
    if (n2.isTouchEvent = "touchstart" === p2.type, !n2.isTouchEvent && "which" in p2 && 3 === p2.which) return;
    if (!n2.isTouchEvent && "button" in p2 && p2.button > 0) return;
    if (n2.isTouched && n2.isMoved) return;
    !!l2.noSwipingClass && "" !== l2.noSwipingClass && p2.target && p2.target.shadowRoot && e2.path && e2.path[0] && (h2 = d(e2.path[0]));
    const m2 = l2.noSwipingSelector ? l2.noSwipingSelector : `.${l2.noSwipingClass}`, f2 = !(!p2.target || !p2.target.shadowRoot);
    if (l2.noSwiping && (f2 ? function(e3, t3) {
      return void 0 === t3 && (t3 = this), function t4(s3) {
        if (!s3 || s3 === a() || s3 === r()) return null;
        s3.assignedSlot && (s3 = s3.assignedSlot);
        const i3 = s3.closest(e3);
        return i3 || s3.getRootNode ? i3 || t4(s3.getRootNode().host) : null;
      }(t3);
    }(m2, h2[0]) : h2.closest(m2)[0])) return void (t2.allowClick = true);
    if (l2.swipeHandler && !h2.closest(l2.swipeHandler)[0]) return;
    o2.currentX = "touchstart" === p2.type ? p2.targetTouches[0].pageX : p2.pageX, o2.currentY = "touchstart" === p2.type ? p2.targetTouches[0].pageY : p2.pageY;
    const g2 = o2.currentX, v2 = o2.currentY, w2 = l2.edgeSwipeDetection || l2.iOSEdgeSwipeDetection, b2 = l2.edgeSwipeThreshold || l2.iOSEdgeSwipeThreshold;
    if (w2 && (g2 <= b2 || g2 >= i2.innerWidth - b2)) {
      if ("prevent" !== w2) return;
      e2.preventDefault();
    }
    if (Object.assign(n2, { isTouched: true, isMoved: false, allowTouchCallbacks: true, isScrolling: void 0, startMoving: void 0 }), o2.startX = g2, o2.startY = v2, n2.touchStartTime = u(), t2.allowClick = true, t2.updateSize(), t2.swipeDirection = void 0, l2.threshold > 0 && (n2.allowThresholdMove = false), "touchstart" !== p2.type) {
      let e3 = true;
      h2.is(n2.focusableElements) && (e3 = false, "SELECT" === h2[0].nodeName && (n2.isTouched = false)), s2.activeElement && d(s2.activeElement).is(n2.focusableElements) && s2.activeElement !== h2[0] && s2.activeElement.blur();
      const a2 = e3 && t2.allowTouchMove && l2.touchStartPreventDefault;
      !l2.touchStartForcePreventDefault && !a2 || h2[0].isContentEditable || p2.preventDefault();
    }
    t2.params.freeMode && t2.params.freeMode.enabled && t2.freeMode && t2.animating && !l2.cssMode && t2.freeMode.onTouchStart(), t2.emit("touchStart", p2);
  }
  function O(e2) {
    const t2 = a(), s2 = this, i2 = s2.touchEventsData, { params: r2, touches: n2, rtlTranslate: l2, enabled: o2 } = s2;
    if (!o2) return;
    let c2 = e2;
    if (c2.originalEvent && (c2 = c2.originalEvent), !i2.isTouched) return void (i2.startMoving && i2.isScrolling && s2.emit("touchMoveOpposite", c2));
    if (i2.isTouchEvent && "touchmove" !== c2.type) return;
    const p2 = "touchmove" === c2.type && c2.targetTouches && (c2.targetTouches[0] || c2.changedTouches[0]), h2 = "touchmove" === c2.type ? p2.pageX : c2.pageX, m2 = "touchmove" === c2.type ? p2.pageY : c2.pageY;
    if (c2.preventedByNestedSwiper) return n2.startX = h2, void (n2.startY = m2);
    if (!s2.allowTouchMove) return d(c2.target).is(i2.focusableElements) || (s2.allowClick = false), void (i2.isTouched && (Object.assign(n2, { startX: h2, startY: m2, currentX: h2, currentY: m2 }), i2.touchStartTime = u()));
    if (i2.isTouchEvent && r2.touchReleaseOnEdges && !r2.loop) {
      if (s2.isVertical()) {
        if (m2 < n2.startY && s2.translate <= s2.maxTranslate() || m2 > n2.startY && s2.translate >= s2.minTranslate()) return i2.isTouched = false, void (i2.isMoved = false);
      } else if (h2 < n2.startX && s2.translate <= s2.maxTranslate() || h2 > n2.startX && s2.translate >= s2.minTranslate()) return;
    }
    if (i2.isTouchEvent && t2.activeElement && c2.target === t2.activeElement && d(c2.target).is(i2.focusableElements)) return i2.isMoved = true, void (s2.allowClick = false);
    if (i2.allowTouchCallbacks && s2.emit("touchMove", c2), c2.targetTouches && c2.targetTouches.length > 1) return;
    n2.currentX = h2, n2.currentY = m2;
    const f2 = n2.currentX - n2.startX, g2 = n2.currentY - n2.startY;
    if (s2.params.threshold && Math.sqrt(f2 ** 2 + g2 ** 2) < s2.params.threshold) return;
    if (void 0 === i2.isScrolling) {
      let e3;
      s2.isHorizontal() && n2.currentY === n2.startY || s2.isVertical() && n2.currentX === n2.startX ? i2.isScrolling = false : f2 * f2 + g2 * g2 >= 25 && (e3 = 180 * Math.atan2(Math.abs(g2), Math.abs(f2)) / Math.PI, i2.isScrolling = s2.isHorizontal() ? e3 > r2.touchAngle : 90 - e3 > r2.touchAngle);
    }
    if (i2.isScrolling && s2.emit("touchMoveOpposite", c2), void 0 === i2.startMoving && (n2.currentX === n2.startX && n2.currentY === n2.startY || (i2.startMoving = true)), i2.isScrolling) return void (i2.isTouched = false);
    if (!i2.startMoving) return;
    s2.allowClick = false, !r2.cssMode && c2.cancelable && c2.preventDefault(), r2.touchMoveStopPropagation && !r2.nested && c2.stopPropagation(), i2.isMoved || (r2.loop && !r2.cssMode && s2.loopFix(), i2.startTranslate = s2.getTranslate(), s2.setTransition(0), s2.animating && s2.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i2.allowMomentumBounce = false, !r2.grabCursor || true !== s2.allowSlideNext && true !== s2.allowSlidePrev || s2.setGrabCursor(true), s2.emit("sliderFirstMove", c2)), s2.emit("sliderMove", c2), i2.isMoved = true;
    let v2 = s2.isHorizontal() ? f2 : g2;
    n2.diff = v2, v2 *= r2.touchRatio, l2 && (v2 = -v2), s2.swipeDirection = v2 > 0 ? "prev" : "next", i2.currentTranslate = v2 + i2.startTranslate;
    let w2 = true, b2 = r2.resistanceRatio;
    if (r2.touchReleaseOnEdges && (b2 = 0), v2 > 0 && i2.currentTranslate > s2.minTranslate() ? (w2 = false, r2.resistance && (i2.currentTranslate = s2.minTranslate() - 1 + (-s2.minTranslate() + i2.startTranslate + v2) ** b2)) : v2 < 0 && i2.currentTranslate < s2.maxTranslate() && (w2 = false, r2.resistance && (i2.currentTranslate = s2.maxTranslate() + 1 - (s2.maxTranslate() - i2.startTranslate - v2) ** b2)), w2 && (c2.preventedByNestedSwiper = true), !s2.allowSlideNext && "next" === s2.swipeDirection && i2.currentTranslate < i2.startTranslate && (i2.currentTranslate = i2.startTranslate), !s2.allowSlidePrev && "prev" === s2.swipeDirection && i2.currentTranslate > i2.startTranslate && (i2.currentTranslate = i2.startTranslate), s2.allowSlidePrev || s2.allowSlideNext || (i2.currentTranslate = i2.startTranslate), r2.threshold > 0) {
      if (!(Math.abs(v2) > r2.threshold || i2.allowThresholdMove)) return void (i2.currentTranslate = i2.startTranslate);
      if (!i2.allowThresholdMove) return i2.allowThresholdMove = true, n2.startX = n2.currentX, n2.startY = n2.currentY, i2.currentTranslate = i2.startTranslate, void (n2.diff = s2.isHorizontal() ? n2.currentX - n2.startX : n2.currentY - n2.startY);
    }
    r2.followFinger && !r2.cssMode && ((r2.freeMode && r2.freeMode.enabled && s2.freeMode || r2.watchSlidesProgress) && (s2.updateActiveIndex(), s2.updateSlidesClasses()), s2.params.freeMode && r2.freeMode.enabled && s2.freeMode && s2.freeMode.onTouchMove(), s2.updateProgress(i2.currentTranslate), s2.setTranslate(i2.currentTranslate));
  }
  function I(e2) {
    const t2 = this, s2 = t2.touchEventsData, { params: a2, touches: i2, rtlTranslate: r2, slidesGrid: n2, enabled: l2 } = t2;
    if (!l2) return;
    let o2 = e2;
    if (o2.originalEvent && (o2 = o2.originalEvent), s2.allowTouchCallbacks && t2.emit("touchEnd", o2), s2.allowTouchCallbacks = false, !s2.isTouched) return s2.isMoved && a2.grabCursor && t2.setGrabCursor(false), s2.isMoved = false, void (s2.startMoving = false);
    a2.grabCursor && s2.isMoved && s2.isTouched && (true === t2.allowSlideNext || true === t2.allowSlidePrev) && t2.setGrabCursor(false);
    const d2 = u(), c2 = d2 - s2.touchStartTime;
    if (t2.allowClick) {
      const e3 = o2.path || o2.composedPath && o2.composedPath();
      t2.updateClickedSlide(e3 && e3[0] || o2.target), t2.emit("tap click", o2), c2 < 300 && d2 - s2.lastClickTime < 300 && t2.emit("doubleTap doubleClick", o2);
    }
    if (s2.lastClickTime = u(), p(() => {
      t2.destroyed || (t2.allowClick = true);
    }), !s2.isTouched || !s2.isMoved || !t2.swipeDirection || 0 === i2.diff || s2.currentTranslate === s2.startTranslate) return s2.isTouched = false, s2.isMoved = false, void (s2.startMoving = false);
    let h2;
    if (s2.isTouched = false, s2.isMoved = false, s2.startMoving = false, h2 = a2.followFinger ? r2 ? t2.translate : -t2.translate : -s2.currentTranslate, a2.cssMode) return;
    if (t2.params.freeMode && a2.freeMode.enabled) return void t2.freeMode.onTouchEnd({ currentPos: h2 });
    let m2 = 0, f2 = t2.slidesSizesGrid[0];
    for (let e3 = 0; e3 < n2.length; e3 += e3 < a2.slidesPerGroupSkip ? 1 : a2.slidesPerGroup) {
      const t3 = e3 < a2.slidesPerGroupSkip - 1 ? 1 : a2.slidesPerGroup;
      void 0 !== n2[e3 + t3] ? h2 >= n2[e3] && h2 < n2[e3 + t3] && (m2 = e3, f2 = n2[e3 + t3] - n2[e3]) : h2 >= n2[e3] && (m2 = e3, f2 = n2[n2.length - 1] - n2[n2.length - 2]);
    }
    let g2 = null, v2 = null;
    a2.rewind && (t2.isBeginning ? v2 = t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? t2.virtual.slides.length - 1 : t2.slides.length - 1 : t2.isEnd && (g2 = 0));
    const w2 = (h2 - n2[m2]) / f2, b2 = m2 < a2.slidesPerGroupSkip - 1 ? 1 : a2.slidesPerGroup;
    if (c2 > a2.longSwipesMs) {
      if (!a2.longSwipes) return void t2.slideTo(t2.activeIndex);
      "next" === t2.swipeDirection && (w2 >= a2.longSwipesRatio ? t2.slideTo(a2.rewind && t2.isEnd ? g2 : m2 + b2) : t2.slideTo(m2)), "prev" === t2.swipeDirection && (w2 > 1 - a2.longSwipesRatio ? t2.slideTo(m2 + b2) : null !== v2 && w2 < 0 && Math.abs(w2) > a2.longSwipesRatio ? t2.slideTo(v2) : t2.slideTo(m2));
    } else {
      if (!a2.shortSwipes) return void t2.slideTo(t2.activeIndex);
      t2.navigation && (o2.target === t2.navigation.nextEl || o2.target === t2.navigation.prevEl) ? o2.target === t2.navigation.nextEl ? t2.slideTo(m2 + b2) : t2.slideTo(m2) : ("next" === t2.swipeDirection && t2.slideTo(null !== g2 ? g2 : m2 + b2), "prev" === t2.swipeDirection && t2.slideTo(null !== v2 ? v2 : m2));
    }
  }
  function A() {
    const e2 = this, { params: t2, el: s2 } = e2;
    if (s2 && 0 === s2.offsetWidth) return;
    t2.breakpoints && e2.setBreakpoint();
    const { allowSlideNext: a2, allowSlidePrev: i2, snapGrid: r2 } = e2;
    e2.allowSlideNext = true, e2.allowSlidePrev = true, e2.updateSize(), e2.updateSlides(), e2.updateSlidesClasses(), ("auto" === t2.slidesPerView || t2.slidesPerView > 1) && e2.isEnd && !e2.isBeginning && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), e2.autoplay && e2.autoplay.running && e2.autoplay.paused && e2.autoplay.run(), e2.allowSlidePrev = i2, e2.allowSlideNext = a2, e2.params.watchOverflow && r2 !== e2.snapGrid && e2.checkOverflow();
  }
  function D(e2) {
    const t2 = this;
    t2.enabled && (t2.allowClick || (t2.params.preventClicks && e2.preventDefault(), t2.params.preventClicksPropagation && t2.animating && (e2.stopPropagation(), e2.stopImmediatePropagation())));
  }
  function G() {
    const e2 = this, { wrapperEl: t2, rtlTranslate: s2, enabled: a2 } = e2;
    if (!a2) return;
    let i2;
    e2.previousTranslate = e2.translate, e2.isHorizontal() ? e2.translate = -t2.scrollLeft : e2.translate = -t2.scrollTop, 0 === e2.translate && (e2.translate = 0), e2.updateActiveIndex(), e2.updateSlidesClasses();
    const r2 = e2.maxTranslate() - e2.minTranslate();
    i2 = 0 === r2 ? 0 : (e2.translate - e2.minTranslate()) / r2, i2 !== e2.progress && e2.updateProgress(s2 ? -e2.translate : e2.translate), e2.emit("setTranslate", e2.translate, false);
  }
  let N = false;
  function B() {
  }
  const H = (e2, t2) => {
    const s2 = a(), { params: i2, touchEvents: r2, el: n2, wrapperEl: l2, device: o2, support: d2 } = e2, c2 = !!i2.nested, p2 = "on" === t2 ? "addEventListener" : "removeEventListener", u2 = t2;
    if (d2.touch) {
      const t3 = !("touchstart" !== r2.start || !d2.passiveListener || !i2.passiveListeners) && { passive: true, capture: false };
      n2[p2](r2.start, e2.onTouchStart, t3), n2[p2](r2.move, e2.onTouchMove, d2.passiveListener ? { passive: false, capture: c2 } : c2), n2[p2](r2.end, e2.onTouchEnd, t3), r2.cancel && n2[p2](r2.cancel, e2.onTouchEnd, t3);
    } else n2[p2](r2.start, e2.onTouchStart, false), s2[p2](r2.move, e2.onTouchMove, c2), s2[p2](r2.end, e2.onTouchEnd, false);
    (i2.preventClicks || i2.preventClicksPropagation) && n2[p2]("click", e2.onClick, true), i2.cssMode && l2[p2]("scroll", e2.onScroll), i2.updateOnWindowResize ? e2[u2](o2.ios || o2.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, true) : e2[u2]("observerUpdate", A, true);
  };
  var X = { attachEvents: function() {
    const e2 = this, t2 = a(), { params: s2, support: i2 } = e2;
    e2.onTouchStart = L.bind(e2), e2.onTouchMove = O.bind(e2), e2.onTouchEnd = I.bind(e2), s2.cssMode && (e2.onScroll = G.bind(e2)), e2.onClick = D.bind(e2), i2.touch && !N && (t2.addEventListener("touchstart", B), N = true), H(e2, "on");
  }, detachEvents: function() {
    H(this, "off");
  } };
  const Y = (e2, t2) => e2.grid && t2.grid && t2.grid.rows > 1;
  var R = { addClasses: function() {
    const e2 = this, { classNames: t2, params: s2, rtl: a2, $el: i2, device: r2, support: n2 } = e2, l2 = function(e3, t3) {
      const s3 = [];
      return e3.forEach((e4) => {
        "object" == typeof e4 ? Object.keys(e4).forEach((a3) => {
          e4[a3] && s3.push(t3 + a3);
        }) : "string" == typeof e4 && s3.push(t3 + e4);
      }), s3;
    }(["initialized", s2.direction, { "pointer-events": !n2.touch }, { "free-mode": e2.params.freeMode && s2.freeMode.enabled }, { autoheight: s2.autoHeight }, { rtl: a2 }, { grid: s2.grid && s2.grid.rows > 1 }, { "grid-column": s2.grid && s2.grid.rows > 1 && "column" === s2.grid.fill }, { android: r2.android }, { ios: r2.ios }, { "css-mode": s2.cssMode }, { centered: s2.cssMode && s2.centeredSlides }, { "watch-progress": s2.watchSlidesProgress }], s2.containerModifierClass);
    t2.push(...l2), i2.addClass([...t2].join(" ")), e2.emitContainerClasses();
  }, removeClasses: function() {
    const { $el: e2, classNames: t2 } = this;
    e2.removeClass(t2.join(" ")), this.emitContainerClasses();
  } };
  var W = { init: true, direction: "horizontal", touchEventsTarget: "wrapper", initialSlide: 0, speed: 300, cssMode: false, updateOnWindowResize: true, resizeObserver: true, nested: false, createElements: false, enabled: true, focusableElements: "input, select, option, textarea, button, video, label", width: null, height: null, preventInteractionOnTransition: false, userAgent: null, url: null, edgeSwipeDetection: false, edgeSwipeThreshold: 20, autoHeight: false, setWrapperSize: false, virtualTranslate: false, effect: "slide", breakpoints: void 0, breakpointsBase: "window", spaceBetween: 0, slidesPerView: 1, slidesPerGroup: 1, slidesPerGroupSkip: 0, slidesPerGroupAuto: false, centeredSlides: false, centeredSlidesBounds: false, slidesOffsetBefore: 0, slidesOffsetAfter: 0, normalizeSlideIndex: true, centerInsufficientSlides: false, watchOverflow: true, roundLengths: false, touchRatio: 1, touchAngle: 45, simulateTouch: true, shortSwipes: true, longSwipes: true, longSwipesRatio: 0.5, longSwipesMs: 300, followFinger: true, allowTouchMove: true, threshold: 0, touchMoveStopPropagation: false, touchStartPreventDefault: true, touchStartForcePreventDefault: false, touchReleaseOnEdges: false, uniqueNavElements: true, resistance: true, resistanceRatio: 0.85, watchSlidesProgress: false, grabCursor: false, preventClicks: true, preventClicksPropagation: true, slideToClickedSlide: false, preloadImages: true, updateOnImagesReady: true, loop: false, loopAdditionalSlides: 0, loopedSlides: null, loopedSlidesLimit: true, loopFillGroupWithBlank: false, loopPreventsSlide: true, rewind: false, allowSlidePrev: true, allowSlideNext: true, swipeHandler: null, noSwiping: true, noSwipingClass: "swiper-no-swiping", noSwipingSelector: null, passiveListeners: true, maxBackfaceHiddenSlides: 10, containerModifierClass: "swiper-", slideClass: "swiper-slide", slideBlankClass: "swiper-slide-invisible-blank", slideActiveClass: "swiper-slide-active", slideDuplicateActiveClass: "swiper-slide-duplicate-active", slideVisibleClass: "swiper-slide-visible", slideDuplicateClass: "swiper-slide-duplicate", slideNextClass: "swiper-slide-next", slideDuplicateNextClass: "swiper-slide-duplicate-next", slidePrevClass: "swiper-slide-prev", slideDuplicatePrevClass: "swiper-slide-duplicate-prev", wrapperClass: "swiper-wrapper", runCallbacksOnInit: true, _emitClasses: false };
  function j(e2, t2) {
    return function(s2) {
      void 0 === s2 && (s2 = {});
      const a2 = Object.keys(s2)[0], i2 = s2[a2];
      "object" == typeof i2 && null !== i2 ? (["navigation", "pagination", "scrollbar"].indexOf(a2) >= 0 && true === e2[a2] && (e2[a2] = { auto: true }), a2 in e2 && "enabled" in i2 ? (true === e2[a2] && (e2[a2] = { enabled: true }), "object" != typeof e2[a2] || "enabled" in e2[a2] || (e2[a2].enabled = true), e2[a2] || (e2[a2] = { enabled: false }), g(t2, s2)) : g(t2, s2)) : g(t2, s2);
    };
  }
  const q = { eventsEmitter: $, update: S, translate: M, transition: { setTransition: function(e2, t2) {
    const s2 = this;
    s2.params.cssMode || s2.$wrapperEl.transition(e2), s2.emit("setTransition", e2, t2);
  }, transitionStart: function(e2, t2) {
    void 0 === e2 && (e2 = true);
    const s2 = this, { params: a2 } = s2;
    a2.cssMode || (a2.autoHeight && s2.updateAutoHeight(), P({ swiper: s2, runCallbacks: e2, direction: t2, step: "Start" }));
  }, transitionEnd: function(e2, t2) {
    void 0 === e2 && (e2 = true);
    const s2 = this, { params: a2 } = s2;
    s2.animating = false, a2.cssMode || (s2.setTransition(0), P({ swiper: s2, runCallbacks: e2, direction: t2, step: "End" }));
  } }, slide: k, loop: z, grabCursor: { setGrabCursor: function(e2) {
    const t2 = this;
    if (t2.support.touch || !t2.params.simulateTouch || t2.params.watchOverflow && t2.isLocked || t2.params.cssMode) return;
    const s2 = "container" === t2.params.touchEventsTarget ? t2.el : t2.wrapperEl;
    s2.style.cursor = "move", s2.style.cursor = e2 ? "grabbing" : "grab";
  }, unsetGrabCursor: function() {
    const e2 = this;
    e2.support.touch || e2.params.watchOverflow && e2.isLocked || e2.params.cssMode || (e2["container" === e2.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
  } }, events: X, breakpoints: { setBreakpoint: function() {
    const e2 = this, { activeIndex: t2, initialized: s2, loopedSlides: a2 = 0, params: i2, $el: r2 } = e2, n2 = i2.breakpoints;
    if (!n2 || n2 && 0 === Object.keys(n2).length) return;
    const l2 = e2.getBreakpoint(n2, e2.params.breakpointsBase, e2.el);
    if (!l2 || e2.currentBreakpoint === l2) return;
    const o2 = (l2 in n2 ? n2[l2] : void 0) || e2.originalParams, d2 = Y(e2, i2), c2 = Y(e2, o2), p2 = i2.enabled;
    d2 && !c2 ? (r2.removeClass(`${i2.containerModifierClass}grid ${i2.containerModifierClass}grid-column`), e2.emitContainerClasses()) : !d2 && c2 && (r2.addClass(`${i2.containerModifierClass}grid`), (o2.grid.fill && "column" === o2.grid.fill || !o2.grid.fill && "column" === i2.grid.fill) && r2.addClass(`${i2.containerModifierClass}grid-column`), e2.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t3) => {
      const s3 = i2[t3] && i2[t3].enabled, a3 = o2[t3] && o2[t3].enabled;
      s3 && !a3 && e2[t3].disable(), !s3 && a3 && e2[t3].enable();
    });
    const u2 = o2.direction && o2.direction !== i2.direction, h2 = i2.loop && (o2.slidesPerView !== i2.slidesPerView || u2);
    u2 && s2 && e2.changeDirection(), g(e2.params, o2);
    const m2 = e2.params.enabled;
    Object.assign(e2, { allowTouchMove: e2.params.allowTouchMove, allowSlideNext: e2.params.allowSlideNext, allowSlidePrev: e2.params.allowSlidePrev }), p2 && !m2 ? e2.disable() : !p2 && m2 && e2.enable(), e2.currentBreakpoint = l2, e2.emit("_beforeBreakpoint", o2), h2 && s2 && (e2.loopDestroy(), e2.loopCreate(), e2.updateSlides(), e2.slideTo(t2 - a2 + e2.loopedSlides, 0, false)), e2.emit("breakpoint", o2);
  }, getBreakpoint: function(e2, t2, s2) {
    if (void 0 === t2 && (t2 = "window"), !e2 || "container" === t2 && !s2) return;
    let a2 = false;
    const i2 = r(), n2 = "window" === t2 ? i2.innerHeight : s2.clientHeight, l2 = Object.keys(e2).map((e3) => {
      if ("string" == typeof e3 && 0 === e3.indexOf("@")) {
        const t3 = parseFloat(e3.substr(1));
        return { value: n2 * t3, point: e3 };
      }
      return { value: e3, point: e3 };
    });
    l2.sort((e3, t3) => parseInt(e3.value, 10) - parseInt(t3.value, 10));
    for (let e3 = 0; e3 < l2.length; e3 += 1) {
      const { point: r2, value: n3 } = l2[e3];
      "window" === t2 ? i2.matchMedia(`(min-width: ${n3}px)`).matches && (a2 = r2) : n3 <= s2.clientWidth && (a2 = r2);
    }
    return a2 || "max";
  } }, checkOverflow: { checkOverflow: function() {
    const e2 = this, { isLocked: t2, params: s2 } = e2, { slidesOffsetBefore: a2 } = s2;
    if (a2) {
      const t3 = e2.slides.length - 1, s3 = e2.slidesGrid[t3] + e2.slidesSizesGrid[t3] + 2 * a2;
      e2.isLocked = e2.size > s3;
    } else e2.isLocked = 1 === e2.snapGrid.length;
    true === s2.allowSlideNext && (e2.allowSlideNext = !e2.isLocked), true === s2.allowSlidePrev && (e2.allowSlidePrev = !e2.isLocked), t2 && t2 !== e2.isLocked && (e2.isEnd = false), t2 !== e2.isLocked && e2.emit(e2.isLocked ? "lock" : "unlock");
  } }, classes: R, images: { loadImage: function(e2, t2, s2, a2, i2, n2) {
    const l2 = r();
    let o2;
    function c2() {
      n2 && n2();
    }
    d(e2).parent("picture")[0] || e2.complete && i2 ? c2() : t2 ? (o2 = new l2.Image(), o2.onload = c2, o2.onerror = c2, a2 && (o2.sizes = a2), s2 && (o2.srcset = s2), t2 && (o2.src = t2)) : c2();
  }, preloadImages: function() {
    const e2 = this;
    function t2() {
      null != e2 && e2 && !e2.destroyed && (void 0 !== e2.imagesLoaded && (e2.imagesLoaded += 1), e2.imagesLoaded === e2.imagesToLoad.length && (e2.params.updateOnImagesReady && e2.update(), e2.emit("imagesReady")));
    }
    e2.imagesToLoad = e2.$el.find("img");
    for (let s2 = 0; s2 < e2.imagesToLoad.length; s2 += 1) {
      const a2 = e2.imagesToLoad[s2];
      e2.loadImage(a2, a2.currentSrc || a2.getAttribute("src"), a2.srcset || a2.getAttribute("srcset"), a2.sizes || a2.getAttribute("sizes"), true, t2);
    }
  } } }, _ = {};
  class V {
    constructor() {
      let e2, t2;
      for (var s2 = arguments.length, a2 = new Array(s2), i2 = 0; i2 < s2; i2++) a2[i2] = arguments[i2];
      if (1 === a2.length && a2[0].constructor && "Object" === Object.prototype.toString.call(a2[0]).slice(8, -1) ? t2 = a2[0] : [e2, t2] = a2, t2 || (t2 = {}), t2 = g({}, t2), e2 && !t2.el && (t2.el = e2), t2.el && d(t2.el).length > 1) {
        const e3 = [];
        return d(t2.el).each((s3) => {
          const a3 = g({}, t2, { el: s3 });
          e3.push(new V(a3));
        }), e3;
      }
      const r2 = this;
      r2.__swiper__ = true, r2.support = E(), r2.device = C({ userAgent: t2.userAgent }), r2.browser = T(), r2.eventsListeners = {}, r2.eventsAnyListeners = [], r2.modules = [...r2.__modules__], t2.modules && Array.isArray(t2.modules) && r2.modules.push(...t2.modules);
      const n2 = {};
      r2.modules.forEach((e3) => {
        e3({ swiper: r2, extendParams: j(t2, n2), on: r2.on.bind(r2), once: r2.once.bind(r2), off: r2.off.bind(r2), emit: r2.emit.bind(r2) });
      });
      const l2 = g({}, W, n2);
      return r2.params = g({}, l2, _, t2), r2.originalParams = g({}, r2.params), r2.passedParams = g({}, t2), r2.params && r2.params.on && Object.keys(r2.params.on).forEach((e3) => {
        r2.on(e3, r2.params.on[e3]);
      }), r2.params && r2.params.onAny && r2.onAny(r2.params.onAny), r2.$ = d, Object.assign(r2, { enabled: r2.params.enabled, el: e2, classNames: [], slides: d(), slidesGrid: [], snapGrid: [], slidesSizesGrid: [], isHorizontal: () => "horizontal" === r2.params.direction, isVertical: () => "vertical" === r2.params.direction, activeIndex: 0, realIndex: 0, isBeginning: true, isEnd: false, translate: 0, previousTranslate: 0, progress: 0, velocity: 0, animating: false, allowSlideNext: r2.params.allowSlideNext, allowSlidePrev: r2.params.allowSlidePrev, touchEvents: function() {
        const e3 = ["touchstart", "touchmove", "touchend", "touchcancel"], t3 = ["pointerdown", "pointermove", "pointerup"];
        return r2.touchEventsTouch = { start: e3[0], move: e3[1], end: e3[2], cancel: e3[3] }, r2.touchEventsDesktop = { start: t3[0], move: t3[1], end: t3[2] }, r2.support.touch || !r2.params.simulateTouch ? r2.touchEventsTouch : r2.touchEventsDesktop;
      }(), touchEventsData: { isTouched: void 0, isMoved: void 0, allowTouchCallbacks: void 0, touchStartTime: void 0, isScrolling: void 0, currentTranslate: void 0, startTranslate: void 0, allowThresholdMove: void 0, focusableElements: r2.params.focusableElements, lastClickTime: u(), clickTimeout: void 0, velocities: [], allowMomentumBounce: void 0, isTouchEvent: void 0, startMoving: void 0 }, allowClick: true, allowTouchMove: r2.params.allowTouchMove, touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 }, imagesToLoad: [], imagesLoaded: 0 }), r2.emit("_swiper"), r2.params.init && r2.init(), r2;
    }
    enable() {
      const e2 = this;
      e2.enabled || (e2.enabled = true, e2.params.grabCursor && e2.setGrabCursor(), e2.emit("enable"));
    }
    disable() {
      const e2 = this;
      e2.enabled && (e2.enabled = false, e2.params.grabCursor && e2.unsetGrabCursor(), e2.emit("disable"));
    }
    setProgress(e2, t2) {
      const s2 = this;
      e2 = Math.min(Math.max(e2, 0), 1);
      const a2 = s2.minTranslate(), i2 = (s2.maxTranslate() - a2) * e2 + a2;
      s2.translateTo(i2, void 0 === t2 ? 0 : t2), s2.updateActiveIndex(), s2.updateSlidesClasses();
    }
    emitContainerClasses() {
      const e2 = this;
      if (!e2.params._emitClasses || !e2.el) return;
      const t2 = e2.el.className.split(" ").filter((t3) => 0 === t3.indexOf("swiper") || 0 === t3.indexOf(e2.params.containerModifierClass));
      e2.emit("_containerClasses", t2.join(" "));
    }
    getSlideClasses(e2) {
      const t2 = this;
      return t2.destroyed ? "" : e2.className.split(" ").filter((e3) => 0 === e3.indexOf("swiper-slide") || 0 === e3.indexOf(t2.params.slideClass)).join(" ");
    }
    emitSlidesClasses() {
      const e2 = this;
      if (!e2.params._emitClasses || !e2.el) return;
      const t2 = [];
      e2.slides.each((s2) => {
        const a2 = e2.getSlideClasses(s2);
        t2.push({ slideEl: s2, classNames: a2 }), e2.emit("_slideClass", s2, a2);
      }), e2.emit("_slideClasses", t2);
    }
    slidesPerViewDynamic(e2, t2) {
      void 0 === e2 && (e2 = "current"), void 0 === t2 && (t2 = false);
      const { params: s2, slides: a2, slidesGrid: i2, slidesSizesGrid: r2, size: n2, activeIndex: l2 } = this;
      let o2 = 1;
      if (s2.centeredSlides) {
        let e3, t3 = a2[l2].swiperSlideSize;
        for (let s3 = l2 + 1; s3 < a2.length; s3 += 1) a2[s3] && !e3 && (t3 += a2[s3].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
        for (let s3 = l2 - 1; s3 >= 0; s3 -= 1) a2[s3] && !e3 && (t3 += a2[s3].swiperSlideSize, o2 += 1, t3 > n2 && (e3 = true));
      } else if ("current" === e2) for (let e3 = l2 + 1; e3 < a2.length; e3 += 1) {
        (t2 ? i2[e3] + r2[e3] - i2[l2] < n2 : i2[e3] - i2[l2] < n2) && (o2 += 1);
      }
      else for (let e3 = l2 - 1; e3 >= 0; e3 -= 1) {
        i2[l2] - i2[e3] < n2 && (o2 += 1);
      }
      return o2;
    }
    update() {
      const e2 = this;
      if (!e2 || e2.destroyed) return;
      const { snapGrid: t2, params: s2 } = e2;
      function a2() {
        const t3 = e2.rtlTranslate ? -1 * e2.translate : e2.translate, s3 = Math.min(Math.max(t3, e2.maxTranslate()), e2.minTranslate());
        e2.setTranslate(s3), e2.updateActiveIndex(), e2.updateSlidesClasses();
      }
      let i2;
      s2.breakpoints && e2.setBreakpoint(), e2.updateSize(), e2.updateSlides(), e2.updateProgress(), e2.updateSlidesClasses(), e2.params.freeMode && e2.params.freeMode.enabled ? (a2(), e2.params.autoHeight && e2.updateAutoHeight()) : (i2 = ("auto" === e2.params.slidesPerView || e2.params.slidesPerView > 1) && e2.isEnd && !e2.params.centeredSlides ? e2.slideTo(e2.slides.length - 1, 0, false, true) : e2.slideTo(e2.activeIndex, 0, false, true), i2 || a2()), s2.watchOverflow && t2 !== e2.snapGrid && e2.checkOverflow(), e2.emit("update");
    }
    changeDirection(e2, t2) {
      void 0 === t2 && (t2 = true);
      const s2 = this, a2 = s2.params.direction;
      return e2 || (e2 = "horizontal" === a2 ? "vertical" : "horizontal"), e2 === a2 || "horizontal" !== e2 && "vertical" !== e2 || (s2.$el.removeClass(`${s2.params.containerModifierClass}${a2}`).addClass(`${s2.params.containerModifierClass}${e2}`), s2.emitContainerClasses(), s2.params.direction = e2, s2.slides.each((t3) => {
        "vertical" === e2 ? t3.style.width = "" : t3.style.height = "";
      }), s2.emit("changeDirection"), t2 && s2.update()), s2;
    }
    changeLanguageDirection(e2) {
      const t2 = this;
      t2.rtl && "rtl" === e2 || !t2.rtl && "ltr" === e2 || (t2.rtl = "rtl" === e2, t2.rtlTranslate = "horizontal" === t2.params.direction && t2.rtl, t2.rtl ? (t2.$el.addClass(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "rtl") : (t2.$el.removeClass(`${t2.params.containerModifierClass}rtl`), t2.el.dir = "ltr"), t2.update());
    }
    mount(e2) {
      const t2 = this;
      if (t2.mounted) return true;
      const s2 = d(e2 || t2.params.el);
      if (!(e2 = s2[0])) return false;
      e2.swiper = t2;
      const i2 = () => `.${(t2.params.wrapperClass || "").trim().split(" ").join(".")}`;
      let r2 = (() => {
        if (e2 && e2.shadowRoot && e2.shadowRoot.querySelector) {
          const t3 = d(e2.shadowRoot.querySelector(i2()));
          return t3.children = (e3) => s2.children(e3), t3;
        }
        return s2.children ? s2.children(i2()) : d(s2).children(i2());
      })();
      if (0 === r2.length && t2.params.createElements) {
        const e3 = a().createElement("div");
        r2 = d(e3), e3.className = t2.params.wrapperClass, s2.append(e3), s2.children(`.${t2.params.slideClass}`).each((e4) => {
          r2.append(e4);
        });
      }
      return Object.assign(t2, { $el: s2, el: e2, $wrapperEl: r2, wrapperEl: r2[0], mounted: true, rtl: "rtl" === e2.dir.toLowerCase() || "rtl" === s2.css("direction"), rtlTranslate: "horizontal" === t2.params.direction && ("rtl" === e2.dir.toLowerCase() || "rtl" === s2.css("direction")), wrongRTL: "-webkit-box" === r2.css("display") }), true;
    }
    init(e2) {
      const t2 = this;
      if (t2.initialized) return t2;
      return false === t2.mount(e2) || (t2.emit("beforeInit"), t2.params.breakpoints && t2.setBreakpoint(), t2.addClasses(), t2.params.loop && t2.loopCreate(), t2.updateSize(), t2.updateSlides(), t2.params.watchOverflow && t2.checkOverflow(), t2.params.grabCursor && t2.enabled && t2.setGrabCursor(), t2.params.preloadImages && t2.preloadImages(), t2.params.loop ? t2.slideTo(t2.params.initialSlide + t2.loopedSlides, 0, t2.params.runCallbacksOnInit, false, true) : t2.slideTo(t2.params.initialSlide, 0, t2.params.runCallbacksOnInit, false, true), t2.attachEvents(), t2.initialized = true, t2.emit("init"), t2.emit("afterInit")), t2;
    }
    destroy(e2, t2) {
      void 0 === e2 && (e2 = true), void 0 === t2 && (t2 = true);
      const s2 = this, { params: a2, $el: i2, $wrapperEl: r2, slides: n2 } = s2;
      return void 0 === s2.params || s2.destroyed || (s2.emit("beforeDestroy"), s2.initialized = false, s2.detachEvents(), a2.loop && s2.loopDestroy(), t2 && (s2.removeClasses(), i2.removeAttr("style"), r2.removeAttr("style"), n2 && n2.length && n2.removeClass([a2.slideVisibleClass, a2.slideActiveClass, a2.slideNextClass, a2.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s2.emit("destroy"), Object.keys(s2.eventsListeners).forEach((e3) => {
        s2.off(e3);
      }), false !== e2 && (s2.$el[0].swiper = null, function(e3) {
        const t3 = e3;
        Object.keys(t3).forEach((e4) => {
          try {
            t3[e4] = null;
          } catch (e5) {
          }
          try {
            delete t3[e4];
          } catch (e5) {
          }
        });
      }(s2)), s2.destroyed = true), null;
    }
    static extendDefaults(e2) {
      g(_, e2);
    }
    static get extendedDefaults() {
      return _;
    }
    static get defaults() {
      return W;
    }
    static installModule(e2) {
      V.prototype.__modules__ || (V.prototype.__modules__ = []);
      const t2 = V.prototype.__modules__;
      "function" == typeof e2 && t2.indexOf(e2) < 0 && t2.push(e2);
    }
    static use(e2) {
      return Array.isArray(e2) ? (e2.forEach((e3) => V.installModule(e3)), V) : (V.installModule(e2), V);
    }
  }
  function F(e2, t2, s2, i2) {
    const r2 = a();
    return e2.params.createElements && Object.keys(i2).forEach((a2) => {
      if (!s2[a2] && true === s2.auto) {
        let n2 = e2.$el.children(`.${i2[a2]}`)[0];
        n2 || (n2 = r2.createElement("div"), n2.className = i2[a2], e2.$el.append(n2)), s2[a2] = n2, t2[a2] = n2;
      }
    }), s2;
  }
  function U(e2) {
    return void 0 === e2 && (e2 = ""), `.${e2.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
  }
  function K(e2) {
    const t2 = this, { $wrapperEl: s2, params: a2 } = t2;
    if (a2.loop && t2.loopDestroy(), "object" == typeof e2 && "length" in e2) for (let t3 = 0; t3 < e2.length; t3 += 1) e2[t3] && s2.append(e2[t3]);
    else s2.append(e2);
    a2.loop && t2.loopCreate(), a2.observer || t2.update();
  }
  function Z(e2) {
    const t2 = this, { params: s2, $wrapperEl: a2, activeIndex: i2 } = t2;
    s2.loop && t2.loopDestroy();
    let r2 = i2 + 1;
    if ("object" == typeof e2 && "length" in e2) {
      for (let t3 = 0; t3 < e2.length; t3 += 1) e2[t3] && a2.prepend(e2[t3]);
      r2 = i2 + e2.length;
    } else a2.prepend(e2);
    s2.loop && t2.loopCreate(), s2.observer || t2.update(), t2.slideTo(r2, 0, false);
  }
  function Q(e2, t2) {
    const s2 = this, { $wrapperEl: a2, params: i2, activeIndex: r2 } = s2;
    let n2 = r2;
    i2.loop && (n2 -= s2.loopedSlides, s2.loopDestroy(), s2.slides = a2.children(`.${i2.slideClass}`));
    const l2 = s2.slides.length;
    if (e2 <= 0) return void s2.prependSlide(t2);
    if (e2 >= l2) return void s2.appendSlide(t2);
    let o2 = n2 > e2 ? n2 + 1 : n2;
    const d2 = [];
    for (let t3 = l2 - 1; t3 >= e2; t3 -= 1) {
      const e3 = s2.slides.eq(t3);
      e3.remove(), d2.unshift(e3);
    }
    if ("object" == typeof t2 && "length" in t2) {
      for (let e3 = 0; e3 < t2.length; e3 += 1) t2[e3] && a2.append(t2[e3]);
      o2 = n2 > e2 ? n2 + t2.length : n2;
    } else a2.append(t2);
    for (let e3 = 0; e3 < d2.length; e3 += 1) a2.append(d2[e3]);
    i2.loop && s2.loopCreate(), i2.observer || s2.update(), i2.loop ? s2.slideTo(o2 + s2.loopedSlides, 0, false) : s2.slideTo(o2, 0, false);
  }
  function J(e2) {
    const t2 = this, { params: s2, $wrapperEl: a2, activeIndex: i2 } = t2;
    let r2 = i2;
    s2.loop && (r2 -= t2.loopedSlides, t2.loopDestroy(), t2.slides = a2.children(`.${s2.slideClass}`));
    let n2, l2 = r2;
    if ("object" == typeof e2 && "length" in e2) {
      for (let s3 = 0; s3 < e2.length; s3 += 1) n2 = e2[s3], t2.slides[n2] && t2.slides.eq(n2).remove(), n2 < l2 && (l2 -= 1);
      l2 = Math.max(l2, 0);
    } else n2 = e2, t2.slides[n2] && t2.slides.eq(n2).remove(), n2 < l2 && (l2 -= 1), l2 = Math.max(l2, 0);
    s2.loop && t2.loopCreate(), s2.observer || t2.update(), s2.loop ? t2.slideTo(l2 + t2.loopedSlides, 0, false) : t2.slideTo(l2, 0, false);
  }
  function ee() {
    const e2 = this, t2 = [];
    for (let s2 = 0; s2 < e2.slides.length; s2 += 1) t2.push(s2);
    e2.removeSlide(t2);
  }
  function te(e2) {
    const { effect: t2, swiper: s2, on: a2, setTranslate: i2, setTransition: r2, overwriteParams: n2, perspective: l2, recreateShadows: o2, getEffectParams: d2 } = e2;
    let c2;
    a2("beforeInit", () => {
      if (s2.params.effect !== t2) return;
      s2.classNames.push(`${s2.params.containerModifierClass}${t2}`), l2 && l2() && s2.classNames.push(`${s2.params.containerModifierClass}3d`);
      const e3 = n2 ? n2() : {};
      Object.assign(s2.params, e3), Object.assign(s2.originalParams, e3);
    }), a2("setTranslate", () => {
      s2.params.effect === t2 && i2();
    }), a2("setTransition", (e3, a3) => {
      s2.params.effect === t2 && r2(a3);
    }), a2("transitionEnd", () => {
      if (s2.params.effect === t2 && o2) {
        if (!d2 || !d2().slideShadows) return;
        s2.slides.each((e3) => {
          s2.$(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
        }), o2();
      }
    }), a2("virtualUpdate", () => {
      s2.params.effect === t2 && (s2.slides.length || (c2 = true), requestAnimationFrame(() => {
        c2 && s2.slides && s2.slides.length && (i2(), c2 = false);
      }));
    });
  }
  function se(e2, t2) {
    return e2.transformEl ? t2.find(e2.transformEl).css({ "backface-visibility": "hidden", "-webkit-backface-visibility": "hidden" }) : t2;
  }
  function ae(e2) {
    let { swiper: t2, duration: s2, transformEl: a2, allSlides: i2 } = e2;
    const { slides: r2, activeIndex: n2, $wrapperEl: l2 } = t2;
    if (t2.params.virtualTranslate && 0 !== s2) {
      let e3, s3 = false;
      e3 = i2 ? a2 ? r2.find(a2) : r2 : a2 ? r2.eq(n2).find(a2) : r2.eq(n2), e3.transitionEnd(() => {
        if (s3) return;
        if (!t2 || t2.destroyed) return;
        s3 = true, t2.animating = false;
        const e4 = ["webkitTransitionEnd", "transitionend"];
        for (let t3 = 0; t3 < e4.length; t3 += 1) l2.trigger(e4[t3]);
      });
    }
  }
  function ie(e2, t2, s2) {
    const a2 = "swiper-slide-shadow" + (s2 ? `-${s2}` : ""), i2 = e2.transformEl ? t2.find(e2.transformEl) : t2;
    let r2 = i2.children(`.${a2}`);
    return r2.length || (r2 = d(`<div class="swiper-slide-shadow${s2 ? `-${s2}` : ""}"></div>`), i2.append(r2)), r2;
  }
  Object.keys(q).forEach((e2) => {
    Object.keys(q[e2]).forEach((t2) => {
      V.prototype[t2] = q[e2][t2];
    });
  }), V.use([function(e2) {
    let { swiper: t2, on: s2, emit: a2 } = e2;
    const i2 = r();
    let n2 = null, l2 = null;
    const o2 = () => {
      t2 && !t2.destroyed && t2.initialized && (a2("beforeResize"), a2("resize"));
    }, d2 = () => {
      t2 && !t2.destroyed && t2.initialized && a2("orientationchange");
    };
    s2("init", () => {
      t2.params.resizeObserver && void 0 !== i2.ResizeObserver ? t2 && !t2.destroyed && t2.initialized && (n2 = new ResizeObserver((e3) => {
        l2 = i2.requestAnimationFrame(() => {
          const { width: s3, height: a3 } = t2;
          let i3 = s3, r2 = a3;
          e3.forEach((e4) => {
            let { contentBoxSize: s4, contentRect: a4, target: n3 } = e4;
            n3 && n3 !== t2.el || (i3 = a4 ? a4.width : (s4[0] || s4).inlineSize, r2 = a4 ? a4.height : (s4[0] || s4).blockSize);
          }), i3 === s3 && r2 === a3 || o2();
        });
      }), n2.observe(t2.el)) : (i2.addEventListener("resize", o2), i2.addEventListener("orientationchange", d2));
    }), s2("destroy", () => {
      l2 && i2.cancelAnimationFrame(l2), n2 && n2.unobserve && t2.el && (n2.unobserve(t2.el), n2 = null), i2.removeEventListener("resize", o2), i2.removeEventListener("orientationchange", d2);
    });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
    const n2 = [], l2 = r(), o2 = function(e3, t3) {
      void 0 === t3 && (t3 = {});
      const s3 = new (l2.MutationObserver || l2.WebkitMutationObserver)((e4) => {
        if (1 === e4.length) return void i2("observerUpdate", e4[0]);
        const t4 = function() {
          i2("observerUpdate", e4[0]);
        };
        l2.requestAnimationFrame ? l2.requestAnimationFrame(t4) : l2.setTimeout(t4, 0);
      });
      s3.observe(e3, { attributes: void 0 === t3.attributes || t3.attributes, childList: void 0 === t3.childList || t3.childList, characterData: void 0 === t3.characterData || t3.characterData }), n2.push(s3);
    };
    s2({ observer: false, observeParents: false, observeSlideChildren: false }), a2("init", () => {
      if (t2.params.observer) {
        if (t2.params.observeParents) {
          const e3 = t2.$el.parents();
          for (let t3 = 0; t3 < e3.length; t3 += 1) o2(e3[t3]);
        }
        o2(t2.$el[0], { childList: t2.params.observeSlideChildren }), o2(t2.$wrapperEl[0], { attributes: false });
      }
    }), a2("destroy", () => {
      n2.forEach((e3) => {
        e3.disconnect();
      }), n2.splice(0, n2.length);
    });
  }]);
  const re = [function(e2) {
    let t2, { swiper: s2, extendParams: a2, on: i2, emit: r2 } = e2;
    function n2(e3, t3) {
      const a3 = s2.params.virtual;
      if (a3.cache && s2.virtual.cache[t3]) return s2.virtual.cache[t3];
      const i3 = a3.renderSlide ? d(a3.renderSlide.call(s2, e3, t3)) : d(`<div class="${s2.params.slideClass}" data-swiper-slide-index="${t3}">${e3}</div>`);
      return i3.attr("data-swiper-slide-index") || i3.attr("data-swiper-slide-index", t3), a3.cache && (s2.virtual.cache[t3] = i3), i3;
    }
    function l2(e3) {
      const { slidesPerView: t3, slidesPerGroup: a3, centeredSlides: i3 } = s2.params, { addSlidesBefore: l3, addSlidesAfter: o2 } = s2.params.virtual, { from: d2, to: c2, slides: p2, slidesGrid: u2, offset: h2 } = s2.virtual;
      s2.params.cssMode || s2.updateActiveIndex();
      const m2 = s2.activeIndex || 0;
      let f2, g2, v2;
      f2 = s2.rtlTranslate ? "right" : s2.isHorizontal() ? "left" : "top", i3 ? (g2 = Math.floor(t3 / 2) + a3 + o2, v2 = Math.floor(t3 / 2) + a3 + l3) : (g2 = t3 + (a3 - 1) + o2, v2 = a3 + l3);
      const w2 = Math.max((m2 || 0) - v2, 0), b2 = Math.min((m2 || 0) + g2, p2.length - 1), x2 = (s2.slidesGrid[w2] || 0) - (s2.slidesGrid[0] || 0);
      function y2() {
        s2.updateSlides(), s2.updateProgress(), s2.updateSlidesClasses(), s2.lazy && s2.params.lazy.enabled && s2.lazy.load(), r2("virtualUpdate");
      }
      if (Object.assign(s2.virtual, { from: w2, to: b2, offset: x2, slidesGrid: s2.slidesGrid }), d2 === w2 && c2 === b2 && !e3) return s2.slidesGrid !== u2 && x2 !== h2 && s2.slides.css(f2, `${x2}px`), s2.updateProgress(), void r2("virtualUpdate");
      if (s2.params.virtual.renderExternal) return s2.params.virtual.renderExternal.call(s2, { offset: x2, from: w2, to: b2, slides: function() {
        const e4 = [];
        for (let t4 = w2; t4 <= b2; t4 += 1) e4.push(p2[t4]);
        return e4;
      }() }), void (s2.params.virtual.renderExternalUpdate ? y2() : r2("virtualUpdate"));
      const E2 = [], C2 = [];
      if (e3) s2.$wrapperEl.find(`.${s2.params.slideClass}`).remove();
      else for (let e4 = d2; e4 <= c2; e4 += 1) (e4 < w2 || e4 > b2) && s2.$wrapperEl.find(`.${s2.params.slideClass}[data-swiper-slide-index="${e4}"]`).remove();
      for (let t4 = 0; t4 < p2.length; t4 += 1) t4 >= w2 && t4 <= b2 && (void 0 === c2 || e3 ? C2.push(t4) : (t4 > c2 && C2.push(t4), t4 < d2 && E2.push(t4)));
      C2.forEach((e4) => {
        s2.$wrapperEl.append(n2(p2[e4], e4));
      }), E2.sort((e4, t4) => t4 - e4).forEach((e4) => {
        s2.$wrapperEl.prepend(n2(p2[e4], e4));
      }), s2.$wrapperEl.children(".swiper-slide").css(f2, `${x2}px`), y2();
    }
    a2({ virtual: { enabled: false, slides: [], cache: true, renderSlide: null, renderExternal: null, renderExternalUpdate: true, addSlidesBefore: 0, addSlidesAfter: 0 } }), s2.virtual = { cache: {}, from: void 0, to: void 0, slides: [], offset: 0, slidesGrid: [] }, i2("beforeInit", () => {
      s2.params.virtual.enabled && (s2.virtual.slides = s2.params.virtual.slides, s2.classNames.push(`${s2.params.containerModifierClass}virtual`), s2.params.watchSlidesProgress = true, s2.originalParams.watchSlidesProgress = true, s2.params.initialSlide || l2());
    }), i2("setTranslate", () => {
      s2.params.virtual.enabled && (s2.params.cssMode && !s2._immediateVirtual ? (clearTimeout(t2), t2 = setTimeout(() => {
        l2();
      }, 100)) : l2());
    }), i2("init update resize", () => {
      s2.params.virtual.enabled && s2.params.cssMode && v(s2.wrapperEl, "--swiper-virtual-size", `${s2.virtualSize}px`);
    }), Object.assign(s2.virtual, { appendSlide: function(e3) {
      if ("object" == typeof e3 && "length" in e3) for (let t3 = 0; t3 < e3.length; t3 += 1) e3[t3] && s2.virtual.slides.push(e3[t3]);
      else s2.virtual.slides.push(e3);
      l2(true);
    }, prependSlide: function(e3) {
      const t3 = s2.activeIndex;
      let a3 = t3 + 1, i3 = 1;
      if (Array.isArray(e3)) {
        for (let t4 = 0; t4 < e3.length; t4 += 1) e3[t4] && s2.virtual.slides.unshift(e3[t4]);
        a3 = t3 + e3.length, i3 = e3.length;
      } else s2.virtual.slides.unshift(e3);
      if (s2.params.virtual.cache) {
        const e4 = s2.virtual.cache, t4 = {};
        Object.keys(e4).forEach((s3) => {
          const a4 = e4[s3], r3 = a4.attr("data-swiper-slide-index");
          r3 && a4.attr("data-swiper-slide-index", parseInt(r3, 10) + i3), t4[parseInt(s3, 10) + i3] = a4;
        }), s2.virtual.cache = t4;
      }
      l2(true), s2.slideTo(a3, 0);
    }, removeSlide: function(e3) {
      if (null == e3) return;
      let t3 = s2.activeIndex;
      if (Array.isArray(e3)) for (let a3 = e3.length - 1; a3 >= 0; a3 -= 1) s2.virtual.slides.splice(e3[a3], 1), s2.params.virtual.cache && delete s2.virtual.cache[e3[a3]], e3[a3] < t3 && (t3 -= 1), t3 = Math.max(t3, 0);
      else s2.virtual.slides.splice(e3, 1), s2.params.virtual.cache && delete s2.virtual.cache[e3], e3 < t3 && (t3 -= 1), t3 = Math.max(t3, 0);
      l2(true), s2.slideTo(t3, 0);
    }, removeAllSlides: function() {
      s2.virtual.slides = [], s2.params.virtual.cache && (s2.virtual.cache = {}), l2(true), s2.slideTo(0, 0);
    }, update: l2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: i2, emit: n2 } = e2;
    const l2 = a(), o2 = r();
    function c2(e3) {
      if (!t2.enabled) return;
      const { rtlTranslate: s3 } = t2;
      let a2 = e3;
      a2.originalEvent && (a2 = a2.originalEvent);
      const i3 = a2.keyCode || a2.charCode, r2 = t2.params.keyboard.pageUpDown, d2 = r2 && 33 === i3, c3 = r2 && 34 === i3, p3 = 37 === i3, u3 = 39 === i3, h2 = 38 === i3, m2 = 40 === i3;
      if (!t2.allowSlideNext && (t2.isHorizontal() && u3 || t2.isVertical() && m2 || c3)) return false;
      if (!t2.allowSlidePrev && (t2.isHorizontal() && p3 || t2.isVertical() && h2 || d2)) return false;
      if (!(a2.shiftKey || a2.altKey || a2.ctrlKey || a2.metaKey || l2.activeElement && l2.activeElement.nodeName && ("input" === l2.activeElement.nodeName.toLowerCase() || "textarea" === l2.activeElement.nodeName.toLowerCase()))) {
        if (t2.params.keyboard.onlyInViewport && (d2 || c3 || p3 || u3 || h2 || m2)) {
          let e4 = false;
          if (t2.$el.parents(`.${t2.params.slideClass}`).length > 0 && 0 === t2.$el.parents(`.${t2.params.slideActiveClass}`).length) return;
          const a3 = t2.$el, i4 = a3[0].clientWidth, r3 = a3[0].clientHeight, n3 = o2.innerWidth, l3 = o2.innerHeight, d3 = t2.$el.offset();
          s3 && (d3.left -= t2.$el[0].scrollLeft);
          const c4 = [[d3.left, d3.top], [d3.left + i4, d3.top], [d3.left, d3.top + r3], [d3.left + i4, d3.top + r3]];
          for (let t3 = 0; t3 < c4.length; t3 += 1) {
            const s4 = c4[t3];
            if (s4[0] >= 0 && s4[0] <= n3 && s4[1] >= 0 && s4[1] <= l3) {
              if (0 === s4[0] && 0 === s4[1]) continue;
              e4 = true;
            }
          }
          if (!e4) return;
        }
        t2.isHorizontal() ? ((d2 || c3 || p3 || u3) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), ((c3 || u3) && !s3 || (d2 || p3) && s3) && t2.slideNext(), ((d2 || p3) && !s3 || (c3 || u3) && s3) && t2.slidePrev()) : ((d2 || c3 || h2 || m2) && (a2.preventDefault ? a2.preventDefault() : a2.returnValue = false), (c3 || m2) && t2.slideNext(), (d2 || h2) && t2.slidePrev()), n2("keyPress", i3);
      }
    }
    function p2() {
      t2.keyboard.enabled || (d(l2).on("keydown", c2), t2.keyboard.enabled = true);
    }
    function u2() {
      t2.keyboard.enabled && (d(l2).off("keydown", c2), t2.keyboard.enabled = false);
    }
    t2.keyboard = { enabled: false }, s2({ keyboard: { enabled: false, onlyInViewport: true, pageUpDown: true } }), i2("init", () => {
      t2.params.keyboard.enabled && p2();
    }), i2("destroy", () => {
      t2.keyboard.enabled && u2();
    }), Object.assign(t2.keyboard, { enable: p2, disable: u2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
    const n2 = r();
    let l2;
    s2({ mousewheel: { enabled: false, releaseOnEdges: false, invert: false, forceToAxis: false, sensitivity: 1, eventsTarget: "container", thresholdDelta: null, thresholdTime: null } }), t2.mousewheel = { enabled: false };
    let o2, c2 = u();
    const h2 = [];
    function m2() {
      t2.enabled && (t2.mouseEntered = true);
    }
    function f2() {
      t2.enabled && (t2.mouseEntered = false);
    }
    function g2(e3) {
      return !(t2.params.mousewheel.thresholdDelta && e3.delta < t2.params.mousewheel.thresholdDelta) && (!(t2.params.mousewheel.thresholdTime && u() - c2 < t2.params.mousewheel.thresholdTime) && (e3.delta >= 6 && u() - c2 < 60 || (e3.direction < 0 ? t2.isEnd && !t2.params.loop || t2.animating || (t2.slideNext(), i2("scroll", e3.raw)) : t2.isBeginning && !t2.params.loop || t2.animating || (t2.slidePrev(), i2("scroll", e3.raw)), c2 = new n2.Date().getTime(), false)));
    }
    function v2(e3) {
      let s3 = e3, a3 = true;
      if (!t2.enabled) return;
      const r2 = t2.params.mousewheel;
      t2.params.cssMode && s3.preventDefault();
      let n3 = t2.$el;
      if ("container" !== t2.params.mousewheel.eventsTarget && (n3 = d(t2.params.mousewheel.eventsTarget)), !t2.mouseEntered && !n3[0].contains(s3.target) && !r2.releaseOnEdges) return true;
      s3.originalEvent && (s3 = s3.originalEvent);
      let c3 = 0;
      const m3 = t2.rtlTranslate ? -1 : 1, f3 = function(e4) {
        let t3 = 0, s4 = 0, a4 = 0, i3 = 0;
        return "detail" in e4 && (s4 = e4.detail), "wheelDelta" in e4 && (s4 = -e4.wheelDelta / 120), "wheelDeltaY" in e4 && (s4 = -e4.wheelDeltaY / 120), "wheelDeltaX" in e4 && (t3 = -e4.wheelDeltaX / 120), "axis" in e4 && e4.axis === e4.HORIZONTAL_AXIS && (t3 = s4, s4 = 0), a4 = 10 * t3, i3 = 10 * s4, "deltaY" in e4 && (i3 = e4.deltaY), "deltaX" in e4 && (a4 = e4.deltaX), e4.shiftKey && !a4 && (a4 = i3, i3 = 0), (a4 || i3) && e4.deltaMode && (1 === e4.deltaMode ? (a4 *= 40, i3 *= 40) : (a4 *= 800, i3 *= 800)), a4 && !t3 && (t3 = a4 < 1 ? -1 : 1), i3 && !s4 && (s4 = i3 < 1 ? -1 : 1), { spinX: t3, spinY: s4, pixelX: a4, pixelY: i3 };
      }(s3);
      if (r2.forceToAxis) if (t2.isHorizontal()) {
        if (!(Math.abs(f3.pixelX) > Math.abs(f3.pixelY))) return true;
        c3 = -f3.pixelX * m3;
      } else {
        if (!(Math.abs(f3.pixelY) > Math.abs(f3.pixelX))) return true;
        c3 = -f3.pixelY;
      }
      else c3 = Math.abs(f3.pixelX) > Math.abs(f3.pixelY) ? -f3.pixelX * m3 : -f3.pixelY;
      if (0 === c3) return true;
      r2.invert && (c3 = -c3);
      let v3 = t2.getTranslate() + c3 * r2.sensitivity;
      if (v3 >= t2.minTranslate() && (v3 = t2.minTranslate()), v3 <= t2.maxTranslate() && (v3 = t2.maxTranslate()), a3 = !!t2.params.loop || !(v3 === t2.minTranslate() || v3 === t2.maxTranslate()), a3 && t2.params.nested && s3.stopPropagation(), t2.params.freeMode && t2.params.freeMode.enabled) {
        const e4 = { time: u(), delta: Math.abs(c3), direction: Math.sign(c3) }, a4 = o2 && e4.time < o2.time + 500 && e4.delta <= o2.delta && e4.direction === o2.direction;
        if (!a4) {
          o2 = void 0, t2.params.loop && t2.loopFix();
          let n4 = t2.getTranslate() + c3 * r2.sensitivity;
          const d2 = t2.isBeginning, u2 = t2.isEnd;
          if (n4 >= t2.minTranslate() && (n4 = t2.minTranslate()), n4 <= t2.maxTranslate() && (n4 = t2.maxTranslate()), t2.setTransition(0), t2.setTranslate(n4), t2.updateProgress(), t2.updateActiveIndex(), t2.updateSlidesClasses(), (!d2 && t2.isBeginning || !u2 && t2.isEnd) && t2.updateSlidesClasses(), t2.params.freeMode.sticky) {
            clearTimeout(l2), l2 = void 0, h2.length >= 15 && h2.shift();
            const s4 = h2.length ? h2[h2.length - 1] : void 0, a5 = h2[0];
            if (h2.push(e4), s4 && (e4.delta > s4.delta || e4.direction !== s4.direction)) h2.splice(0);
            else if (h2.length >= 15 && e4.time - a5.time < 500 && a5.delta - e4.delta >= 1 && e4.delta <= 6) {
              const s5 = c3 > 0 ? 0.8 : 0.2;
              o2 = e4, h2.splice(0), l2 = p(() => {
                t2.slideToClosest(t2.params.speed, true, void 0, s5);
              }, 0);
            }
            l2 || (l2 = p(() => {
              o2 = e4, h2.splice(0), t2.slideToClosest(t2.params.speed, true, void 0, 0.5);
            }, 500));
          }
          if (a4 || i2("scroll", s3), t2.params.autoplay && t2.params.autoplayDisableOnInteraction && t2.autoplay.stop(), n4 === t2.minTranslate() || n4 === t2.maxTranslate()) return true;
        }
      } else {
        const s4 = { time: u(), delta: Math.abs(c3), direction: Math.sign(c3), raw: e3 };
        h2.length >= 2 && h2.shift();
        const a4 = h2.length ? h2[h2.length - 1] : void 0;
        if (h2.push(s4), a4 ? (s4.direction !== a4.direction || s4.delta > a4.delta || s4.time > a4.time + 150) && g2(s4) : g2(s4), function(e4) {
          const s5 = t2.params.mousewheel;
          if (e4.direction < 0) {
            if (t2.isEnd && !t2.params.loop && s5.releaseOnEdges) return true;
          } else if (t2.isBeginning && !t2.params.loop && s5.releaseOnEdges) return true;
          return false;
        }(s4)) return true;
      }
      return s3.preventDefault ? s3.preventDefault() : s3.returnValue = false, false;
    }
    function w2(e3) {
      let s3 = t2.$el;
      "container" !== t2.params.mousewheel.eventsTarget && (s3 = d(t2.params.mousewheel.eventsTarget)), s3[e3]("mouseenter", m2), s3[e3]("mouseleave", f2), s3[e3]("wheel", v2);
    }
    function b2() {
      return t2.params.cssMode ? (t2.wrapperEl.removeEventListener("wheel", v2), true) : !t2.mousewheel.enabled && (w2("on"), t2.mousewheel.enabled = true, true);
    }
    function x2() {
      return t2.params.cssMode ? (t2.wrapperEl.addEventListener(event, v2), true) : !!t2.mousewheel.enabled && (w2("off"), t2.mousewheel.enabled = false, true);
    }
    a2("init", () => {
      !t2.params.mousewheel.enabled && t2.params.cssMode && x2(), t2.params.mousewheel.enabled && b2();
    }), a2("destroy", () => {
      t2.params.cssMode && b2(), t2.mousewheel.enabled && x2();
    }), Object.assign(t2.mousewheel, { enable: b2, disable: x2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
    function r2(e3) {
      let s3;
      return e3 && (s3 = d(e3), t2.params.uniqueNavElements && "string" == typeof e3 && s3.length > 1 && 1 === t2.$el.find(e3).length && (s3 = t2.$el.find(e3))), s3;
    }
    function n2(e3, s3) {
      const a3 = t2.params.navigation;
      e3 && e3.length > 0 && (e3[s3 ? "addClass" : "removeClass"](a3.disabledClass), e3[0] && "BUTTON" === e3[0].tagName && (e3[0].disabled = s3), t2.params.watchOverflow && t2.enabled && e3[t2.isLocked ? "addClass" : "removeClass"](a3.lockClass));
    }
    function l2() {
      if (t2.params.loop) return;
      const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
      n2(s3, t2.isBeginning && !t2.params.rewind), n2(e3, t2.isEnd && !t2.params.rewind);
    }
    function o2(e3) {
      e3.preventDefault(), (!t2.isBeginning || t2.params.loop || t2.params.rewind) && (t2.slidePrev(), i2("navigationPrev"));
    }
    function c2(e3) {
      e3.preventDefault(), (!t2.isEnd || t2.params.loop || t2.params.rewind) && (t2.slideNext(), i2("navigationNext"));
    }
    function p2() {
      const e3 = t2.params.navigation;
      if (t2.params.navigation = F(t2, t2.originalParams.navigation, t2.params.navigation, { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" }), !e3.nextEl && !e3.prevEl) return;
      const s3 = r2(e3.nextEl), a3 = r2(e3.prevEl);
      s3 && s3.length > 0 && s3.on("click", c2), a3 && a3.length > 0 && a3.on("click", o2), Object.assign(t2.navigation, { $nextEl: s3, nextEl: s3 && s3[0], $prevEl: a3, prevEl: a3 && a3[0] }), t2.enabled || (s3 && s3.addClass(e3.lockClass), a3 && a3.addClass(e3.lockClass));
    }
    function u2() {
      const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
      e3 && e3.length && (e3.off("click", c2), e3.removeClass(t2.params.navigation.disabledClass)), s3 && s3.length && (s3.off("click", o2), s3.removeClass(t2.params.navigation.disabledClass));
    }
    s2({ navigation: { nextEl: null, prevEl: null, hideOnClick: false, disabledClass: "swiper-button-disabled", hiddenClass: "swiper-button-hidden", lockClass: "swiper-button-lock", navigationDisabledClass: "swiper-navigation-disabled" } }), t2.navigation = { nextEl: null, $nextEl: null, prevEl: null, $prevEl: null }, a2("init", () => {
      false === t2.params.navigation.enabled ? h2() : (p2(), l2());
    }), a2("toEdge fromEdge lock unlock", () => {
      l2();
    }), a2("destroy", () => {
      u2();
    }), a2("enable disable", () => {
      const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
      e3 && e3[t2.enabled ? "removeClass" : "addClass"](t2.params.navigation.lockClass), s3 && s3[t2.enabled ? "removeClass" : "addClass"](t2.params.navigation.lockClass);
    }), a2("click", (e3, s3) => {
      const { $nextEl: a3, $prevEl: r3 } = t2.navigation, n3 = s3.target;
      if (t2.params.navigation.hideOnClick && !d(n3).is(r3) && !d(n3).is(a3)) {
        if (t2.pagination && t2.params.pagination && t2.params.pagination.clickable && (t2.pagination.el === n3 || t2.pagination.el.contains(n3))) return;
        let e4;
        a3 ? e4 = a3.hasClass(t2.params.navigation.hiddenClass) : r3 && (e4 = r3.hasClass(t2.params.navigation.hiddenClass)), i2(true === e4 ? "navigationShow" : "navigationHide"), a3 && a3.toggleClass(t2.params.navigation.hiddenClass), r3 && r3.toggleClass(t2.params.navigation.hiddenClass);
      }
    });
    const h2 = () => {
      t2.$el.addClass(t2.params.navigation.navigationDisabledClass), u2();
    };
    Object.assign(t2.navigation, { enable: () => {
      t2.$el.removeClass(t2.params.navigation.navigationDisabledClass), p2(), l2();
    }, disable: h2, update: l2, init: p2, destroy: u2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
    const r2 = "swiper-pagination";
    let n2;
    s2({ pagination: { el: null, bulletElement: "span", clickable: false, hideOnClick: false, renderBullet: null, renderProgressbar: null, renderFraction: null, renderCustom: null, progressbarOpposite: false, type: "bullets", dynamicBullets: false, dynamicMainBullets: 1, formatFractionCurrent: (e3) => e3, formatFractionTotal: (e3) => e3, bulletClass: `${r2}-bullet`, bulletActiveClass: `${r2}-bullet-active`, modifierClass: `${r2}-`, currentClass: `${r2}-current`, totalClass: `${r2}-total`, hiddenClass: `${r2}-hidden`, progressbarFillClass: `${r2}-progressbar-fill`, progressbarOppositeClass: `${r2}-progressbar-opposite`, clickableClass: `${r2}-clickable`, lockClass: `${r2}-lock`, horizontalClass: `${r2}-horizontal`, verticalClass: `${r2}-vertical`, paginationDisabledClass: `${r2}-disabled` } }), t2.pagination = { el: null, $el: null, bullets: [] };
    let l2 = 0;
    function o2() {
      return !t2.params.pagination.el || !t2.pagination.el || !t2.pagination.$el || 0 === t2.pagination.$el.length;
    }
    function c2(e3, s3) {
      const { bulletActiveClass: a3 } = t2.params.pagination;
      e3[s3]().addClass(`${a3}-${s3}`)[s3]().addClass(`${a3}-${s3}-${s3}`);
    }
    function p2() {
      const e3 = t2.rtl, s3 = t2.params.pagination;
      if (o2()) return;
      const a3 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.slides.length : t2.slides.length, r3 = t2.pagination.$el;
      let p3;
      const u3 = t2.params.loop ? Math.ceil((a3 - 2 * t2.loopedSlides) / t2.params.slidesPerGroup) : t2.snapGrid.length;
      if (t2.params.loop ? (p3 = Math.ceil((t2.activeIndex - t2.loopedSlides) / t2.params.slidesPerGroup), p3 > a3 - 1 - 2 * t2.loopedSlides && (p3 -= a3 - 2 * t2.loopedSlides), p3 > u3 - 1 && (p3 -= u3), p3 < 0 && "bullets" !== t2.params.paginationType && (p3 = u3 + p3)) : p3 = void 0 !== t2.snapIndex ? t2.snapIndex : t2.activeIndex || 0, "bullets" === s3.type && t2.pagination.bullets && t2.pagination.bullets.length > 0) {
        const a4 = t2.pagination.bullets;
        let i3, o3, u4;
        if (s3.dynamicBullets && (n2 = a4.eq(0)[t2.isHorizontal() ? "outerWidth" : "outerHeight"](true), r3.css(t2.isHorizontal() ? "width" : "height", n2 * (s3.dynamicMainBullets + 4) + "px"), s3.dynamicMainBullets > 1 && void 0 !== t2.previousIndex && (l2 += p3 - (t2.previousIndex - t2.loopedSlides || 0), l2 > s3.dynamicMainBullets - 1 ? l2 = s3.dynamicMainBullets - 1 : l2 < 0 && (l2 = 0)), i3 = Math.max(p3 - l2, 0), o3 = i3 + (Math.min(a4.length, s3.dynamicMainBullets) - 1), u4 = (o3 + i3) / 2), a4.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map((e4) => `${s3.bulletActiveClass}${e4}`).join(" ")), r3.length > 1) a4.each((e4) => {
          const t3 = d(e4), a5 = t3.index();
          a5 === p3 && t3.addClass(s3.bulletActiveClass), s3.dynamicBullets && (a5 >= i3 && a5 <= o3 && t3.addClass(`${s3.bulletActiveClass}-main`), a5 === i3 && c2(t3, "prev"), a5 === o3 && c2(t3, "next"));
        });
        else {
          const e4 = a4.eq(p3), r4 = e4.index();
          if (e4.addClass(s3.bulletActiveClass), s3.dynamicBullets) {
            const e5 = a4.eq(i3), n3 = a4.eq(o3);
            for (let e6 = i3; e6 <= o3; e6 += 1) a4.eq(e6).addClass(`${s3.bulletActiveClass}-main`);
            if (t2.params.loop) if (r4 >= a4.length) {
              for (let e6 = s3.dynamicMainBullets; e6 >= 0; e6 -= 1) a4.eq(a4.length - e6).addClass(`${s3.bulletActiveClass}-main`);
              a4.eq(a4.length - s3.dynamicMainBullets - 1).addClass(`${s3.bulletActiveClass}-prev`);
            } else c2(e5, "prev"), c2(n3, "next");
            else c2(e5, "prev"), c2(n3, "next");
          }
        }
        if (s3.dynamicBullets) {
          const i4 = Math.min(a4.length, s3.dynamicMainBullets + 4), r4 = (n2 * i4 - n2) / 2 - u4 * n2, l3 = e3 ? "right" : "left";
          a4.css(t2.isHorizontal() ? l3 : "top", `${r4}px`);
        }
      }
      if ("fraction" === s3.type && (r3.find(U(s3.currentClass)).text(s3.formatFractionCurrent(p3 + 1)), r3.find(U(s3.totalClass)).text(s3.formatFractionTotal(u3))), "progressbar" === s3.type) {
        let e4;
        e4 = s3.progressbarOpposite ? t2.isHorizontal() ? "vertical" : "horizontal" : t2.isHorizontal() ? "horizontal" : "vertical";
        const a4 = (p3 + 1) / u3;
        let i3 = 1, n3 = 1;
        "horizontal" === e4 ? i3 = a4 : n3 = a4, r3.find(U(s3.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i3}) scaleY(${n3})`).transition(t2.params.speed);
      }
      "custom" === s3.type && s3.renderCustom ? (r3.html(s3.renderCustom(t2, p3 + 1, u3)), i2("paginationRender", r3[0])) : i2("paginationUpdate", r3[0]), t2.params.watchOverflow && t2.enabled && r3[t2.isLocked ? "addClass" : "removeClass"](s3.lockClass);
    }
    function u2() {
      const e3 = t2.params.pagination;
      if (o2()) return;
      const s3 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.slides.length : t2.slides.length, a3 = t2.pagination.$el;
      let r3 = "";
      if ("bullets" === e3.type) {
        let i3 = t2.params.loop ? Math.ceil((s3 - 2 * t2.loopedSlides) / t2.params.slidesPerGroup) : t2.snapGrid.length;
        t2.params.freeMode && t2.params.freeMode.enabled && !t2.params.loop && i3 > s3 && (i3 = s3);
        for (let s4 = 0; s4 < i3; s4 += 1) e3.renderBullet ? r3 += e3.renderBullet.call(t2, s4, e3.bulletClass) : r3 += `<${e3.bulletElement} class="${e3.bulletClass}"></${e3.bulletElement}>`;
        a3.html(r3), t2.pagination.bullets = a3.find(U(e3.bulletClass));
      }
      "fraction" === e3.type && (r3 = e3.renderFraction ? e3.renderFraction.call(t2, e3.currentClass, e3.totalClass) : `<span class="${e3.currentClass}"></span> / <span class="${e3.totalClass}"></span>`, a3.html(r3)), "progressbar" === e3.type && (r3 = e3.renderProgressbar ? e3.renderProgressbar.call(t2, e3.progressbarFillClass) : `<span class="${e3.progressbarFillClass}"></span>`, a3.html(r3)), "custom" !== e3.type && i2("paginationRender", t2.pagination.$el[0]);
    }
    function h2() {
      t2.params.pagination = F(t2, t2.originalParams.pagination, t2.params.pagination, { el: "swiper-pagination" });
      const e3 = t2.params.pagination;
      if (!e3.el) return;
      let s3 = d(e3.el);
      0 !== s3.length && (t2.params.uniqueNavElements && "string" == typeof e3.el && s3.length > 1 && (s3 = t2.$el.find(e3.el), s3.length > 1 && (s3 = s3.filter((e4) => d(e4).parents(".swiper")[0] === t2.el))), "bullets" === e3.type && e3.clickable && s3.addClass(e3.clickableClass), s3.addClass(e3.modifierClass + e3.type), s3.addClass(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), "bullets" === e3.type && e3.dynamicBullets && (s3.addClass(`${e3.modifierClass}${e3.type}-dynamic`), l2 = 0, e3.dynamicMainBullets < 1 && (e3.dynamicMainBullets = 1)), "progressbar" === e3.type && e3.progressbarOpposite && s3.addClass(e3.progressbarOppositeClass), e3.clickable && s3.on("click", U(e3.bulletClass), function(e4) {
        e4.preventDefault();
        let s4 = d(this).index() * t2.params.slidesPerGroup;
        t2.params.loop && (s4 += t2.loopedSlides), t2.slideTo(s4);
      }), Object.assign(t2.pagination, { $el: s3, el: s3[0] }), t2.enabled || s3.addClass(e3.lockClass));
    }
    function m2() {
      const e3 = t2.params.pagination;
      if (o2()) return;
      const s3 = t2.pagination.$el;
      s3.removeClass(e3.hiddenClass), s3.removeClass(e3.modifierClass + e3.type), s3.removeClass(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), t2.pagination.bullets && t2.pagination.bullets.removeClass && t2.pagination.bullets.removeClass(e3.bulletActiveClass), e3.clickable && s3.off("click", U(e3.bulletClass));
    }
    a2("init", () => {
      false === t2.params.pagination.enabled ? f2() : (h2(), u2(), p2());
    }), a2("activeIndexChange", () => {
      (t2.params.loop || void 0 === t2.snapIndex) && p2();
    }), a2("snapIndexChange", () => {
      t2.params.loop || p2();
    }), a2("slidesLengthChange", () => {
      t2.params.loop && (u2(), p2());
    }), a2("snapGridLengthChange", () => {
      t2.params.loop || (u2(), p2());
    }), a2("destroy", () => {
      m2();
    }), a2("enable disable", () => {
      const { $el: e3 } = t2.pagination;
      e3 && e3[t2.enabled ? "removeClass" : "addClass"](t2.params.pagination.lockClass);
    }), a2("lock unlock", () => {
      p2();
    }), a2("click", (e3, s3) => {
      const a3 = s3.target, { $el: r3 } = t2.pagination;
      if (t2.params.pagination.el && t2.params.pagination.hideOnClick && r3 && r3.length > 0 && !d(a3).hasClass(t2.params.pagination.bulletClass)) {
        if (t2.navigation && (t2.navigation.nextEl && a3 === t2.navigation.nextEl || t2.navigation.prevEl && a3 === t2.navigation.prevEl)) return;
        const e4 = r3.hasClass(t2.params.pagination.hiddenClass);
        i2(true === e4 ? "paginationShow" : "paginationHide"), r3.toggleClass(t2.params.pagination.hiddenClass);
      }
    });
    const f2 = () => {
      t2.$el.addClass(t2.params.pagination.paginationDisabledClass), t2.pagination.$el && t2.pagination.$el.addClass(t2.params.pagination.paginationDisabledClass), m2();
    };
    Object.assign(t2.pagination, { enable: () => {
      t2.$el.removeClass(t2.params.pagination.paginationDisabledClass), t2.pagination.$el && t2.pagination.$el.removeClass(t2.params.pagination.paginationDisabledClass), h2(), u2(), p2();
    }, disable: f2, render: u2, update: p2, init: h2, destroy: m2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: i2, emit: r2 } = e2;
    const n2 = a();
    let l2, o2, c2, u2, h2 = false, m2 = null, f2 = null;
    function g2() {
      if (!t2.params.scrollbar.el || !t2.scrollbar.el) return;
      const { scrollbar: e3, rtlTranslate: s3, progress: a2 } = t2, { $dragEl: i3, $el: r3 } = e3, n3 = t2.params.scrollbar;
      let l3 = o2, d2 = (c2 - o2) * a2;
      s3 ? (d2 = -d2, d2 > 0 ? (l3 = o2 - d2, d2 = 0) : -d2 + o2 > c2 && (l3 = c2 + d2)) : d2 < 0 ? (l3 = o2 + d2, d2 = 0) : d2 + o2 > c2 && (l3 = c2 - d2), t2.isHorizontal() ? (i3.transform(`translate3d(${d2}px, 0, 0)`), i3[0].style.width = `${l3}px`) : (i3.transform(`translate3d(0px, ${d2}px, 0)`), i3[0].style.height = `${l3}px`), n3.hide && (clearTimeout(m2), r3[0].style.opacity = 1, m2 = setTimeout(() => {
        r3[0].style.opacity = 0, r3.transition(400);
      }, 1e3));
    }
    function v2() {
      if (!t2.params.scrollbar.el || !t2.scrollbar.el) return;
      const { scrollbar: e3 } = t2, { $dragEl: s3, $el: a2 } = e3;
      s3[0].style.width = "", s3[0].style.height = "", c2 = t2.isHorizontal() ? a2[0].offsetWidth : a2[0].offsetHeight, u2 = t2.size / (t2.virtualSize + t2.params.slidesOffsetBefore - (t2.params.centeredSlides ? t2.snapGrid[0] : 0)), o2 = "auto" === t2.params.scrollbar.dragSize ? c2 * u2 : parseInt(t2.params.scrollbar.dragSize, 10), t2.isHorizontal() ? s3[0].style.width = `${o2}px` : s3[0].style.height = `${o2}px`, a2[0].style.display = u2 >= 1 ? "none" : "", t2.params.scrollbar.hide && (a2[0].style.opacity = 0), t2.params.watchOverflow && t2.enabled && e3.$el[t2.isLocked ? "addClass" : "removeClass"](t2.params.scrollbar.lockClass);
    }
    function w2(e3) {
      return t2.isHorizontal() ? "touchstart" === e3.type || "touchmove" === e3.type ? e3.targetTouches[0].clientX : e3.clientX : "touchstart" === e3.type || "touchmove" === e3.type ? e3.targetTouches[0].clientY : e3.clientY;
    }
    function b2(e3) {
      const { scrollbar: s3, rtlTranslate: a2 } = t2, { $el: i3 } = s3;
      let r3;
      r3 = (w2(e3) - i3.offset()[t2.isHorizontal() ? "left" : "top"] - (null !== l2 ? l2 : o2 / 2)) / (c2 - o2), r3 = Math.max(Math.min(r3, 1), 0), a2 && (r3 = 1 - r3);
      const n3 = t2.minTranslate() + (t2.maxTranslate() - t2.minTranslate()) * r3;
      t2.updateProgress(n3), t2.setTranslate(n3), t2.updateActiveIndex(), t2.updateSlidesClasses();
    }
    function x2(e3) {
      const s3 = t2.params.scrollbar, { scrollbar: a2, $wrapperEl: i3 } = t2, { $el: n3, $dragEl: o3 } = a2;
      h2 = true, l2 = e3.target === o3[0] || e3.target === o3 ? w2(e3) - e3.target.getBoundingClientRect()[t2.isHorizontal() ? "left" : "top"] : null, e3.preventDefault(), e3.stopPropagation(), i3.transition(100), o3.transition(100), b2(e3), clearTimeout(f2), n3.transition(0), s3.hide && n3.css("opacity", 1), t2.params.cssMode && t2.$wrapperEl.css("scroll-snap-type", "none"), r2("scrollbarDragStart", e3);
    }
    function y2(e3) {
      const { scrollbar: s3, $wrapperEl: a2 } = t2, { $el: i3, $dragEl: n3 } = s3;
      h2 && (e3.preventDefault ? e3.preventDefault() : e3.returnValue = false, b2(e3), a2.transition(0), i3.transition(0), n3.transition(0), r2("scrollbarDragMove", e3));
    }
    function E2(e3) {
      const s3 = t2.params.scrollbar, { scrollbar: a2, $wrapperEl: i3 } = t2, { $el: n3 } = a2;
      h2 && (h2 = false, t2.params.cssMode && (t2.$wrapperEl.css("scroll-snap-type", ""), i3.transition("")), s3.hide && (clearTimeout(f2), f2 = p(() => {
        n3.css("opacity", 0), n3.transition(400);
      }, 1e3)), r2("scrollbarDragEnd", e3), s3.snapOnRelease && t2.slideToClosest());
    }
    function C2(e3) {
      const { scrollbar: s3, touchEventsTouch: a2, touchEventsDesktop: i3, params: r3, support: l3 } = t2, o3 = s3.$el;
      if (!o3) return;
      const d2 = o3[0], c3 = !(!l3.passiveListener || !r3.passiveListeners) && { passive: false, capture: false }, p2 = !(!l3.passiveListener || !r3.passiveListeners) && { passive: true, capture: false };
      if (!d2) return;
      const u3 = "on" === e3 ? "addEventListener" : "removeEventListener";
      l3.touch ? (d2[u3](a2.start, x2, c3), d2[u3](a2.move, y2, c3), d2[u3](a2.end, E2, p2)) : (d2[u3](i3.start, x2, c3), n2[u3](i3.move, y2, c3), n2[u3](i3.end, E2, p2));
    }
    function T2() {
      const { scrollbar: e3, $el: s3 } = t2;
      t2.params.scrollbar = F(t2, t2.originalParams.scrollbar, t2.params.scrollbar, { el: "swiper-scrollbar" });
      const a2 = t2.params.scrollbar;
      if (!a2.el) return;
      let i3 = d(a2.el);
      t2.params.uniqueNavElements && "string" == typeof a2.el && i3.length > 1 && 1 === s3.find(a2.el).length && (i3 = s3.find(a2.el)), i3.addClass(t2.isHorizontal() ? a2.horizontalClass : a2.verticalClass);
      let r3 = i3.find(`.${t2.params.scrollbar.dragClass}`);
      0 === r3.length && (r3 = d(`<div class="${t2.params.scrollbar.dragClass}"></div>`), i3.append(r3)), Object.assign(e3, { $el: i3, el: i3[0], $dragEl: r3, dragEl: r3[0] }), a2.draggable && t2.params.scrollbar.el && t2.scrollbar.el && C2("on"), i3 && i3[t2.enabled ? "removeClass" : "addClass"](t2.params.scrollbar.lockClass);
    }
    function $2() {
      const e3 = t2.params.scrollbar, s3 = t2.scrollbar.$el;
      s3 && s3.removeClass(t2.isHorizontal() ? e3.horizontalClass : e3.verticalClass), t2.params.scrollbar.el && t2.scrollbar.el && C2("off");
    }
    s2({ scrollbar: { el: null, dragSize: "auto", hide: false, draggable: false, snapOnRelease: true, lockClass: "swiper-scrollbar-lock", dragClass: "swiper-scrollbar-drag", scrollbarDisabledClass: "swiper-scrollbar-disabled", horizontalClass: "swiper-scrollbar-horizontal", verticalClass: "swiper-scrollbar-vertical" } }), t2.scrollbar = { el: null, dragEl: null, $el: null, $dragEl: null }, i2("init", () => {
      false === t2.params.scrollbar.enabled ? S2() : (T2(), v2(), g2());
    }), i2("update resize observerUpdate lock unlock", () => {
      v2();
    }), i2("setTranslate", () => {
      g2();
    }), i2("setTransition", (e3, s3) => {
      !function(e4) {
        t2.params.scrollbar.el && t2.scrollbar.el && t2.scrollbar.$dragEl.transition(e4);
      }(s3);
    }), i2("enable disable", () => {
      const { $el: e3 } = t2.scrollbar;
      e3 && e3[t2.enabled ? "removeClass" : "addClass"](t2.params.scrollbar.lockClass);
    }), i2("destroy", () => {
      $2();
    });
    const S2 = () => {
      t2.$el.addClass(t2.params.scrollbar.scrollbarDisabledClass), t2.scrollbar.$el && t2.scrollbar.$el.addClass(t2.params.scrollbar.scrollbarDisabledClass), $2();
    };
    Object.assign(t2.scrollbar, { enable: () => {
      t2.$el.removeClass(t2.params.scrollbar.scrollbarDisabledClass), t2.scrollbar.$el && t2.scrollbar.$el.removeClass(t2.params.scrollbar.scrollbarDisabledClass), T2(), v2(), g2();
    }, disable: S2, updateSize: v2, setTranslate: g2, init: T2, destroy: $2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ parallax: { enabled: false } });
    const i2 = (e3, s3) => {
      const { rtl: a3 } = t2, i3 = d(e3), r3 = a3 ? -1 : 1, n2 = i3.attr("data-swiper-parallax") || "0";
      let l2 = i3.attr("data-swiper-parallax-x"), o2 = i3.attr("data-swiper-parallax-y");
      const c2 = i3.attr("data-swiper-parallax-scale"), p2 = i3.attr("data-swiper-parallax-opacity");
      if (l2 || o2 ? (l2 = l2 || "0", o2 = o2 || "0") : t2.isHorizontal() ? (l2 = n2, o2 = "0") : (o2 = n2, l2 = "0"), l2 = l2.indexOf("%") >= 0 ? parseInt(l2, 10) * s3 * r3 + "%" : l2 * s3 * r3 + "px", o2 = o2.indexOf("%") >= 0 ? parseInt(o2, 10) * s3 + "%" : o2 * s3 + "px", null != p2) {
        const e4 = p2 - (p2 - 1) * (1 - Math.abs(s3));
        i3[0].style.opacity = e4;
      }
      if (null == c2) i3.transform(`translate3d(${l2}, ${o2}, 0px)`);
      else {
        const e4 = c2 - (c2 - 1) * (1 - Math.abs(s3));
        i3.transform(`translate3d(${l2}, ${o2}, 0px) scale(${e4})`);
      }
    }, r2 = () => {
      const { $el: e3, slides: s3, progress: a3, snapGrid: r3 } = t2;
      e3.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e4) => {
        i2(e4, a3);
      }), s3.each((e4, s4) => {
        let n2 = e4.progress;
        t2.params.slidesPerGroup > 1 && "auto" !== t2.params.slidesPerView && (n2 += Math.ceil(s4 / 2) - a3 * (r3.length - 1)), n2 = Math.min(Math.max(n2, -1), 1), d(e4).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e5) => {
          i2(e5, n2);
        });
      });
    };
    a2("beforeInit", () => {
      t2.params.parallax.enabled && (t2.params.watchSlidesProgress = true, t2.originalParams.watchSlidesProgress = true);
    }), a2("init", () => {
      t2.params.parallax.enabled && r2();
    }), a2("setTranslate", () => {
      t2.params.parallax.enabled && r2();
    }), a2("setTransition", (e3, s3) => {
      t2.params.parallax.enabled && function(e4) {
        void 0 === e4 && (e4 = t2.params.speed);
        const { $el: s4 } = t2;
        s4.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t3) => {
          const s5 = d(t3);
          let a3 = parseInt(s5.attr("data-swiper-parallax-duration"), 10) || e4;
          0 === e4 && (a3 = 0), s5.transition(a3);
        });
      }(s3);
    });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
    const n2 = r();
    s2({ zoom: { enabled: false, maxRatio: 3, minRatio: 1, toggle: true, containerClass: "swiper-zoom-container", zoomedSlideClass: "swiper-slide-zoomed" } }), t2.zoom = { enabled: false };
    let l2, o2, c2, p2 = 1, u2 = false;
    const m2 = { $slideEl: void 0, slideWidth: void 0, slideHeight: void 0, $imageEl: void 0, $imageWrapEl: void 0, maxRatio: 3 }, f2 = { isTouched: void 0, isMoved: void 0, currentX: void 0, currentY: void 0, minX: void 0, minY: void 0, maxX: void 0, maxY: void 0, width: void 0, height: void 0, startX: void 0, startY: void 0, touchesStart: {}, touchesCurrent: {} }, g2 = { x: void 0, y: void 0, prevPositionX: void 0, prevPositionY: void 0, prevTime: void 0 };
    let v2 = 1;
    function w2(e3) {
      if (e3.targetTouches.length < 2) return 1;
      const t3 = e3.targetTouches[0].pageX, s3 = e3.targetTouches[0].pageY, a3 = e3.targetTouches[1].pageX, i3 = e3.targetTouches[1].pageY;
      return Math.sqrt((a3 - t3) ** 2 + (i3 - s3) ** 2);
    }
    function b2(e3) {
      const s3 = t2.support, a3 = t2.params.zoom;
      if (o2 = false, c2 = false, !s3.gestures) {
        if ("touchstart" !== e3.type || "touchstart" === e3.type && e3.targetTouches.length < 2) return;
        o2 = true, m2.scaleStart = w2(e3);
      }
      m2.$slideEl && m2.$slideEl.length || (m2.$slideEl = d(e3.target).closest(`.${t2.params.slideClass}`), 0 === m2.$slideEl.length && (m2.$slideEl = t2.slides.eq(t2.activeIndex)), m2.$imageEl = m2.$slideEl.find(`.${a3.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m2.$imageWrapEl = m2.$imageEl.parent(`.${a3.containerClass}`), m2.maxRatio = m2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, 0 !== m2.$imageWrapEl.length) ? (m2.$imageEl && m2.$imageEl.transition(0), u2 = true) : m2.$imageEl = void 0;
    }
    function x2(e3) {
      const s3 = t2.support, a3 = t2.params.zoom, i3 = t2.zoom;
      if (!s3.gestures) {
        if ("touchmove" !== e3.type || "touchmove" === e3.type && e3.targetTouches.length < 2) return;
        c2 = true, m2.scaleMove = w2(e3);
      }
      m2.$imageEl && 0 !== m2.$imageEl.length ? (s3.gestures ? i3.scale = e3.scale * p2 : i3.scale = m2.scaleMove / m2.scaleStart * p2, i3.scale > m2.maxRatio && (i3.scale = m2.maxRatio - 1 + (i3.scale - m2.maxRatio + 1) ** 0.5), i3.scale < a3.minRatio && (i3.scale = a3.minRatio + 1 - (a3.minRatio - i3.scale + 1) ** 0.5), m2.$imageEl.transform(`translate3d(0,0,0) scale(${i3.scale})`)) : "gesturechange" === e3.type && b2(e3);
    }
    function y2(e3) {
      const s3 = t2.device, a3 = t2.support, i3 = t2.params.zoom, r2 = t2.zoom;
      if (!a3.gestures) {
        if (!o2 || !c2) return;
        if ("touchend" !== e3.type || "touchend" === e3.type && e3.changedTouches.length < 2 && !s3.android) return;
        o2 = false, c2 = false;
      }
      m2.$imageEl && 0 !== m2.$imageEl.length && (r2.scale = Math.max(Math.min(r2.scale, m2.maxRatio), i3.minRatio), m2.$imageEl.transition(t2.params.speed).transform(`translate3d(0,0,0) scale(${r2.scale})`), p2 = r2.scale, u2 = false, 1 === r2.scale && (m2.$slideEl = void 0));
    }
    function E2(e3) {
      const s3 = t2.zoom;
      if (!m2.$imageEl || 0 === m2.$imageEl.length) return;
      if (t2.allowClick = false, !f2.isTouched || !m2.$slideEl) return;
      f2.isMoved || (f2.width = m2.$imageEl[0].offsetWidth, f2.height = m2.$imageEl[0].offsetHeight, f2.startX = h(m2.$imageWrapEl[0], "x") || 0, f2.startY = h(m2.$imageWrapEl[0], "y") || 0, m2.slideWidth = m2.$slideEl[0].offsetWidth, m2.slideHeight = m2.$slideEl[0].offsetHeight, m2.$imageWrapEl.transition(0));
      const a3 = f2.width * s3.scale, i3 = f2.height * s3.scale;
      if (!(a3 < m2.slideWidth && i3 < m2.slideHeight)) {
        if (f2.minX = Math.min(m2.slideWidth / 2 - a3 / 2, 0), f2.maxX = -f2.minX, f2.minY = Math.min(m2.slideHeight / 2 - i3 / 2, 0), f2.maxY = -f2.minY, f2.touchesCurrent.x = "touchmove" === e3.type ? e3.targetTouches[0].pageX : e3.pageX, f2.touchesCurrent.y = "touchmove" === e3.type ? e3.targetTouches[0].pageY : e3.pageY, !f2.isMoved && !u2) {
          if (t2.isHorizontal() && (Math.floor(f2.minX) === Math.floor(f2.startX) && f2.touchesCurrent.x < f2.touchesStart.x || Math.floor(f2.maxX) === Math.floor(f2.startX) && f2.touchesCurrent.x > f2.touchesStart.x)) return void (f2.isTouched = false);
          if (!t2.isHorizontal() && (Math.floor(f2.minY) === Math.floor(f2.startY) && f2.touchesCurrent.y < f2.touchesStart.y || Math.floor(f2.maxY) === Math.floor(f2.startY) && f2.touchesCurrent.y > f2.touchesStart.y)) return void (f2.isTouched = false);
        }
        e3.cancelable && e3.preventDefault(), e3.stopPropagation(), f2.isMoved = true, f2.currentX = f2.touchesCurrent.x - f2.touchesStart.x + f2.startX, f2.currentY = f2.touchesCurrent.y - f2.touchesStart.y + f2.startY, f2.currentX < f2.minX && (f2.currentX = f2.minX + 1 - (f2.minX - f2.currentX + 1) ** 0.8), f2.currentX > f2.maxX && (f2.currentX = f2.maxX - 1 + (f2.currentX - f2.maxX + 1) ** 0.8), f2.currentY < f2.minY && (f2.currentY = f2.minY + 1 - (f2.minY - f2.currentY + 1) ** 0.8), f2.currentY > f2.maxY && (f2.currentY = f2.maxY - 1 + (f2.currentY - f2.maxY + 1) ** 0.8), g2.prevPositionX || (g2.prevPositionX = f2.touchesCurrent.x), g2.prevPositionY || (g2.prevPositionY = f2.touchesCurrent.y), g2.prevTime || (g2.prevTime = Date.now()), g2.x = (f2.touchesCurrent.x - g2.prevPositionX) / (Date.now() - g2.prevTime) / 2, g2.y = (f2.touchesCurrent.y - g2.prevPositionY) / (Date.now() - g2.prevTime) / 2, Math.abs(f2.touchesCurrent.x - g2.prevPositionX) < 2 && (g2.x = 0), Math.abs(f2.touchesCurrent.y - g2.prevPositionY) < 2 && (g2.y = 0), g2.prevPositionX = f2.touchesCurrent.x, g2.prevPositionY = f2.touchesCurrent.y, g2.prevTime = Date.now(), m2.$imageWrapEl.transform(`translate3d(${f2.currentX}px, ${f2.currentY}px,0)`);
      }
    }
    function C2() {
      const e3 = t2.zoom;
      m2.$slideEl && t2.previousIndex !== t2.activeIndex && (m2.$imageEl && m2.$imageEl.transform("translate3d(0,0,0) scale(1)"), m2.$imageWrapEl && m2.$imageWrapEl.transform("translate3d(0,0,0)"), e3.scale = 1, p2 = 1, m2.$slideEl = void 0, m2.$imageEl = void 0, m2.$imageWrapEl = void 0);
    }
    function T2(e3) {
      const s3 = t2.zoom, a3 = t2.params.zoom;
      if (m2.$slideEl || (e3 && e3.target && (m2.$slideEl = d(e3.target).closest(`.${t2.params.slideClass}`)), m2.$slideEl || (t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? m2.$slideEl = t2.$wrapperEl.children(`.${t2.params.slideActiveClass}`) : m2.$slideEl = t2.slides.eq(t2.activeIndex)), m2.$imageEl = m2.$slideEl.find(`.${a3.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m2.$imageWrapEl = m2.$imageEl.parent(`.${a3.containerClass}`)), !m2.$imageEl || 0 === m2.$imageEl.length || !m2.$imageWrapEl || 0 === m2.$imageWrapEl.length) return;
      let i3, r2, l3, o3, c3, u3, h2, g3, v3, w3, b3, x3, y3, E3, C3, T3, $3, S3;
      t2.params.cssMode && (t2.wrapperEl.style.overflow = "hidden", t2.wrapperEl.style.touchAction = "none"), m2.$slideEl.addClass(`${a3.zoomedSlideClass}`), void 0 === f2.touchesStart.x && e3 ? (i3 = "touchend" === e3.type ? e3.changedTouches[0].pageX : e3.pageX, r2 = "touchend" === e3.type ? e3.changedTouches[0].pageY : e3.pageY) : (i3 = f2.touchesStart.x, r2 = f2.touchesStart.y), s3.scale = m2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, p2 = m2.$imageWrapEl.attr("data-swiper-zoom") || a3.maxRatio, e3 ? ($3 = m2.$slideEl[0].offsetWidth, S3 = m2.$slideEl[0].offsetHeight, l3 = m2.$slideEl.offset().left + n2.scrollX, o3 = m2.$slideEl.offset().top + n2.scrollY, c3 = l3 + $3 / 2 - i3, u3 = o3 + S3 / 2 - r2, v3 = m2.$imageEl[0].offsetWidth, w3 = m2.$imageEl[0].offsetHeight, b3 = v3 * s3.scale, x3 = w3 * s3.scale, y3 = Math.min($3 / 2 - b3 / 2, 0), E3 = Math.min(S3 / 2 - x3 / 2, 0), C3 = -y3, T3 = -E3, h2 = c3 * s3.scale, g3 = u3 * s3.scale, h2 < y3 && (h2 = y3), h2 > C3 && (h2 = C3), g3 < E3 && (g3 = E3), g3 > T3 && (g3 = T3)) : (h2 = 0, g3 = 0), m2.$imageWrapEl.transition(300).transform(`translate3d(${h2}px, ${g3}px,0)`), m2.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s3.scale})`);
    }
    function $2() {
      const e3 = t2.zoom, s3 = t2.params.zoom;
      m2.$slideEl || (t2.params.virtual && t2.params.virtual.enabled && t2.virtual ? m2.$slideEl = t2.$wrapperEl.children(`.${t2.params.slideActiveClass}`) : m2.$slideEl = t2.slides.eq(t2.activeIndex), m2.$imageEl = m2.$slideEl.find(`.${s3.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m2.$imageWrapEl = m2.$imageEl.parent(`.${s3.containerClass}`)), m2.$imageEl && 0 !== m2.$imageEl.length && m2.$imageWrapEl && 0 !== m2.$imageWrapEl.length && (t2.params.cssMode && (t2.wrapperEl.style.overflow = "", t2.wrapperEl.style.touchAction = ""), e3.scale = 1, p2 = 1, m2.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m2.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m2.$slideEl.removeClass(`${s3.zoomedSlideClass}`), m2.$slideEl = void 0);
    }
    function S2(e3) {
      const s3 = t2.zoom;
      s3.scale && 1 !== s3.scale ? $2() : T2(e3);
    }
    function M2() {
      const e3 = t2.support;
      return { passiveListener: !("touchstart" !== t2.touchEvents.start || !e3.passiveListener || !t2.params.passiveListeners) && { passive: true, capture: false }, activeListenerWithCapture: !e3.passiveListener || { passive: false, capture: true } };
    }
    function P2() {
      return `.${t2.params.slideClass}`;
    }
    function k2(e3) {
      const { passiveListener: s3 } = M2(), a3 = P2();
      t2.$wrapperEl[e3]("gesturestart", a3, b2, s3), t2.$wrapperEl[e3]("gesturechange", a3, x2, s3), t2.$wrapperEl[e3]("gestureend", a3, y2, s3);
    }
    function z2() {
      l2 || (l2 = true, k2("on"));
    }
    function L2() {
      l2 && (l2 = false, k2("off"));
    }
    function O2() {
      const e3 = t2.zoom;
      if (e3.enabled) return;
      e3.enabled = true;
      const s3 = t2.support, { passiveListener: a3, activeListenerWithCapture: i3 } = M2(), r2 = P2();
      s3.gestures ? (t2.$wrapperEl.on(t2.touchEvents.start, z2, a3), t2.$wrapperEl.on(t2.touchEvents.end, L2, a3)) : "touchstart" === t2.touchEvents.start && (t2.$wrapperEl.on(t2.touchEvents.start, r2, b2, a3), t2.$wrapperEl.on(t2.touchEvents.move, r2, x2, i3), t2.$wrapperEl.on(t2.touchEvents.end, r2, y2, a3), t2.touchEvents.cancel && t2.$wrapperEl.on(t2.touchEvents.cancel, r2, y2, a3)), t2.$wrapperEl.on(t2.touchEvents.move, `.${t2.params.zoom.containerClass}`, E2, i3);
    }
    function I2() {
      const e3 = t2.zoom;
      if (!e3.enabled) return;
      const s3 = t2.support;
      e3.enabled = false;
      const { passiveListener: a3, activeListenerWithCapture: i3 } = M2(), r2 = P2();
      s3.gestures ? (t2.$wrapperEl.off(t2.touchEvents.start, z2, a3), t2.$wrapperEl.off(t2.touchEvents.end, L2, a3)) : "touchstart" === t2.touchEvents.start && (t2.$wrapperEl.off(t2.touchEvents.start, r2, b2, a3), t2.$wrapperEl.off(t2.touchEvents.move, r2, x2, i3), t2.$wrapperEl.off(t2.touchEvents.end, r2, y2, a3), t2.touchEvents.cancel && t2.$wrapperEl.off(t2.touchEvents.cancel, r2, y2, a3)), t2.$wrapperEl.off(t2.touchEvents.move, `.${t2.params.zoom.containerClass}`, E2, i3);
    }
    Object.defineProperty(t2.zoom, "scale", { get: () => v2, set(e3) {
      if (v2 !== e3) {
        const t3 = m2.$imageEl ? m2.$imageEl[0] : void 0, s3 = m2.$slideEl ? m2.$slideEl[0] : void 0;
        i2("zoomChange", e3, t3, s3);
      }
      v2 = e3;
    } }), a2("init", () => {
      t2.params.zoom.enabled && O2();
    }), a2("destroy", () => {
      I2();
    }), a2("touchStart", (e3, s3) => {
      t2.zoom.enabled && function(e4) {
        const s4 = t2.device;
        m2.$imageEl && 0 !== m2.$imageEl.length && (f2.isTouched || (s4.android && e4.cancelable && e4.preventDefault(), f2.isTouched = true, f2.touchesStart.x = "touchstart" === e4.type ? e4.targetTouches[0].pageX : e4.pageX, f2.touchesStart.y = "touchstart" === e4.type ? e4.targetTouches[0].pageY : e4.pageY));
      }(s3);
    }), a2("touchEnd", (e3, s3) => {
      t2.zoom.enabled && function() {
        const e4 = t2.zoom;
        if (!m2.$imageEl || 0 === m2.$imageEl.length) return;
        if (!f2.isTouched || !f2.isMoved) return f2.isTouched = false, void (f2.isMoved = false);
        f2.isTouched = false, f2.isMoved = false;
        let s4 = 300, a3 = 300;
        const i3 = g2.x * s4, r2 = f2.currentX + i3, n3 = g2.y * a3, l3 = f2.currentY + n3;
        0 !== g2.x && (s4 = Math.abs((r2 - f2.currentX) / g2.x)), 0 !== g2.y && (a3 = Math.abs((l3 - f2.currentY) / g2.y));
        const o3 = Math.max(s4, a3);
        f2.currentX = r2, f2.currentY = l3;
        const d2 = f2.width * e4.scale, c3 = f2.height * e4.scale;
        f2.minX = Math.min(m2.slideWidth / 2 - d2 / 2, 0), f2.maxX = -f2.minX, f2.minY = Math.min(m2.slideHeight / 2 - c3 / 2, 0), f2.maxY = -f2.minY, f2.currentX = Math.max(Math.min(f2.currentX, f2.maxX), f2.minX), f2.currentY = Math.max(Math.min(f2.currentY, f2.maxY), f2.minY), m2.$imageWrapEl.transition(o3).transform(`translate3d(${f2.currentX}px, ${f2.currentY}px,0)`);
      }();
    }), a2("doubleTap", (e3, s3) => {
      !t2.animating && t2.params.zoom.enabled && t2.zoom.enabled && t2.params.zoom.toggle && S2(s3);
    }), a2("transitionEnd", () => {
      t2.zoom.enabled && t2.params.zoom.enabled && C2();
    }), a2("slideChange", () => {
      t2.zoom.enabled && t2.params.zoom.enabled && t2.params.cssMode && C2();
    }), Object.assign(t2.zoom, { enable: O2, disable: I2, in: T2, out: $2, toggle: S2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2, emit: i2 } = e2;
    s2({ lazy: { checkInView: false, enabled: false, loadPrevNext: false, loadPrevNextAmount: 1, loadOnTransitionStart: false, scrollingElement: "", elementClass: "swiper-lazy", loadingClass: "swiper-lazy-loading", loadedClass: "swiper-lazy-loaded", preloaderClass: "swiper-lazy-preloader" } }), t2.lazy = {};
    let n2 = false, l2 = false;
    function o2(e3, s3) {
      void 0 === s3 && (s3 = true);
      const a3 = t2.params.lazy;
      if (void 0 === e3) return;
      if (0 === t2.slides.length) return;
      const r2 = t2.virtual && t2.params.virtual.enabled ? t2.$wrapperEl.children(`.${t2.params.slideClass}[data-swiper-slide-index="${e3}"]`) : t2.slides.eq(e3), n3 = r2.find(`.${a3.elementClass}:not(.${a3.loadedClass}):not(.${a3.loadingClass})`);
      !r2.hasClass(a3.elementClass) || r2.hasClass(a3.loadedClass) || r2.hasClass(a3.loadingClass) || n3.push(r2[0]), 0 !== n3.length && n3.each((e4) => {
        const n4 = d(e4);
        n4.addClass(a3.loadingClass);
        const l3 = n4.attr("data-background"), c3 = n4.attr("data-src"), p3 = n4.attr("data-srcset"), u2 = n4.attr("data-sizes"), h2 = n4.parent("picture");
        t2.loadImage(n4[0], c3 || l3, p3, u2, false, () => {
          if (null != t2 && t2 && (!t2 || t2.params) && !t2.destroyed) {
            if (l3 ? (n4.css("background-image", `url("${l3}")`), n4.removeAttr("data-background")) : (p3 && (n4.attr("srcset", p3), n4.removeAttr("data-srcset")), u2 && (n4.attr("sizes", u2), n4.removeAttr("data-sizes")), h2.length && h2.children("source").each((e5) => {
              const t3 = d(e5);
              t3.attr("data-srcset") && (t3.attr("srcset", t3.attr("data-srcset")), t3.removeAttr("data-srcset"));
            }), c3 && (n4.attr("src", c3), n4.removeAttr("data-src"))), n4.addClass(a3.loadedClass).removeClass(a3.loadingClass), r2.find(`.${a3.preloaderClass}`).remove(), t2.params.loop && s3) {
              const e5 = r2.attr("data-swiper-slide-index");
              if (r2.hasClass(t2.params.slideDuplicateClass)) {
                o2(t2.$wrapperEl.children(`[data-swiper-slide-index="${e5}"]:not(.${t2.params.slideDuplicateClass})`).index(), false);
              } else {
                o2(t2.$wrapperEl.children(`.${t2.params.slideDuplicateClass}[data-swiper-slide-index="${e5}"]`).index(), false);
              }
            }
            i2("lazyImageReady", r2[0], n4[0]), t2.params.autoHeight && t2.updateAutoHeight();
          }
        }), i2("lazyImageLoad", r2[0], n4[0]);
      });
    }
    function c2() {
      const { $wrapperEl: e3, params: s3, slides: a3, activeIndex: i3 } = t2, r2 = t2.virtual && s3.virtual.enabled, n3 = s3.lazy;
      let c3 = s3.slidesPerView;
      function p3(t3) {
        if (r2) {
          if (e3.children(`.${s3.slideClass}[data-swiper-slide-index="${t3}"]`).length) return true;
        } else if (a3[t3]) return true;
        return false;
      }
      function u2(e4) {
        return r2 ? d(e4).attr("data-swiper-slide-index") : d(e4).index();
      }
      if ("auto" === c3 && (c3 = 0), l2 || (l2 = true), t2.params.watchSlidesProgress) e3.children(`.${s3.slideVisibleClass}`).each((e4) => {
        o2(r2 ? d(e4).attr("data-swiper-slide-index") : d(e4).index());
      });
      else if (c3 > 1) for (let e4 = i3; e4 < i3 + c3; e4 += 1) p3(e4) && o2(e4);
      else o2(i3);
      if (n3.loadPrevNext) if (c3 > 1 || n3.loadPrevNextAmount && n3.loadPrevNextAmount > 1) {
        const e4 = n3.loadPrevNextAmount, t3 = Math.ceil(c3), s4 = Math.min(i3 + t3 + Math.max(e4, t3), a3.length), r3 = Math.max(i3 - Math.max(t3, e4), 0);
        for (let e5 = i3 + t3; e5 < s4; e5 += 1) p3(e5) && o2(e5);
        for (let e5 = r3; e5 < i3; e5 += 1) p3(e5) && o2(e5);
      } else {
        const t3 = e3.children(`.${s3.slideNextClass}`);
        t3.length > 0 && o2(u2(t3));
        const a4 = e3.children(`.${s3.slidePrevClass}`);
        a4.length > 0 && o2(u2(a4));
      }
    }
    function p2() {
      const e3 = r();
      if (!t2 || t2.destroyed) return;
      const s3 = t2.params.lazy.scrollingElement ? d(t2.params.lazy.scrollingElement) : d(e3), a3 = s3[0] === e3, i3 = a3 ? e3.innerWidth : s3[0].offsetWidth, l3 = a3 ? e3.innerHeight : s3[0].offsetHeight, o3 = t2.$el.offset(), { rtlTranslate: u2 } = t2;
      let h2 = false;
      u2 && (o3.left -= t2.$el[0].scrollLeft);
      const m2 = [[o3.left, o3.top], [o3.left + t2.width, o3.top], [o3.left, o3.top + t2.height], [o3.left + t2.width, o3.top + t2.height]];
      for (let e4 = 0; e4 < m2.length; e4 += 1) {
        const t3 = m2[e4];
        if (t3[0] >= 0 && t3[0] <= i3 && t3[1] >= 0 && t3[1] <= l3) {
          if (0 === t3[0] && 0 === t3[1]) continue;
          h2 = true;
        }
      }
      const f2 = !("touchstart" !== t2.touchEvents.start || !t2.support.passiveListener || !t2.params.passiveListeners) && { passive: true, capture: false };
      h2 ? (c2(), s3.off("scroll", p2, f2)) : n2 || (n2 = true, s3.on("scroll", p2, f2));
    }
    a2("beforeInit", () => {
      t2.params.lazy.enabled && t2.params.preloadImages && (t2.params.preloadImages = false);
    }), a2("init", () => {
      t2.params.lazy.enabled && (t2.params.lazy.checkInView ? p2() : c2());
    }), a2("scroll", () => {
      t2.params.freeMode && t2.params.freeMode.enabled && !t2.params.freeMode.sticky && c2();
    }), a2("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
      t2.params.lazy.enabled && (t2.params.lazy.checkInView ? p2() : c2());
    }), a2("transitionStart", () => {
      t2.params.lazy.enabled && (t2.params.lazy.loadOnTransitionStart || !t2.params.lazy.loadOnTransitionStart && !l2) && (t2.params.lazy.checkInView ? p2() : c2());
    }), a2("transitionEnd", () => {
      t2.params.lazy.enabled && !t2.params.lazy.loadOnTransitionStart && (t2.params.lazy.checkInView ? p2() : c2());
    }), a2("slideChange", () => {
      const { lazy: e3, cssMode: s3, watchSlidesProgress: a3, touchReleaseOnEdges: i3, resistanceRatio: r2 } = t2.params;
      e3.enabled && (s3 || a3 && (i3 || 0 === r2)) && c2();
    }), a2("destroy", () => {
      t2.$el && t2.$el.find(`.${t2.params.lazy.loadingClass}`).removeClass(t2.params.lazy.loadingClass);
    }), Object.assign(t2.lazy, { load: c2, loadInSlide: o2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    function i2(e3, t3) {
      const s3 = /* @__PURE__ */ function() {
        let e4, t4, s4;
        return (a4, i4) => {
          for (t4 = -1, e4 = a4.length; e4 - t4 > 1; ) s4 = e4 + t4 >> 1, a4[s4] <= i4 ? t4 = s4 : e4 = s4;
          return e4;
        };
      }();
      let a3, i3;
      return this.x = e3, this.y = t3, this.lastIndex = e3.length - 1, this.interpolate = function(e4) {
        return e4 ? (i3 = s3(this.x, e4), a3 = i3 - 1, (e4 - this.x[a3]) * (this.y[i3] - this.y[a3]) / (this.x[i3] - this.x[a3]) + this.y[a3]) : 0;
      }, this;
    }
    function r2() {
      t2.controller.control && t2.controller.spline && (t2.controller.spline = void 0, delete t2.controller.spline);
    }
    s2({ controller: { control: void 0, inverse: false, by: "slide" } }), t2.controller = { control: void 0 }, a2("beforeInit", () => {
      t2.controller.control = t2.params.controller.control;
    }), a2("update", () => {
      r2();
    }), a2("resize", () => {
      r2();
    }), a2("observerUpdate", () => {
      r2();
    }), a2("setTranslate", (e3, s3, a3) => {
      t2.controller.control && t2.controller.setTranslate(s3, a3);
    }), a2("setTransition", (e3, s3, a3) => {
      t2.controller.control && t2.controller.setTransition(s3, a3);
    }), Object.assign(t2.controller, { setTranslate: function(e3, s3) {
      const a3 = t2.controller.control;
      let r3, n2;
      const l2 = t2.constructor;
      function o2(e4) {
        const s4 = t2.rtlTranslate ? -t2.translate : t2.translate;
        "slide" === t2.params.controller.by && (!function(e5) {
          t2.controller.spline || (t2.controller.spline = t2.params.loop ? new i2(t2.slidesGrid, e5.slidesGrid) : new i2(t2.snapGrid, e5.snapGrid));
        }(e4), n2 = -t2.controller.spline.interpolate(-s4)), n2 && "container" !== t2.params.controller.by || (r3 = (e4.maxTranslate() - e4.minTranslate()) / (t2.maxTranslate() - t2.minTranslate()), n2 = (s4 - t2.minTranslate()) * r3 + e4.minTranslate()), t2.params.controller.inverse && (n2 = e4.maxTranslate() - n2), e4.updateProgress(n2), e4.setTranslate(n2, t2), e4.updateActiveIndex(), e4.updateSlidesClasses();
      }
      if (Array.isArray(a3)) for (let e4 = 0; e4 < a3.length; e4 += 1) a3[e4] !== s3 && a3[e4] instanceof l2 && o2(a3[e4]);
      else a3 instanceof l2 && s3 !== a3 && o2(a3);
    }, setTransition: function(e3, s3) {
      const a3 = t2.constructor, i3 = t2.controller.control;
      let r3;
      function n2(s4) {
        s4.setTransition(e3, t2), 0 !== e3 && (s4.transitionStart(), s4.params.autoHeight && p(() => {
          s4.updateAutoHeight();
        }), s4.$wrapperEl.transitionEnd(() => {
          i3 && (s4.params.loop && "slide" === t2.params.controller.by && s4.loopFix(), s4.transitionEnd());
        }));
      }
      if (Array.isArray(i3)) for (r3 = 0; r3 < i3.length; r3 += 1) i3[r3] !== s3 && i3[r3] instanceof a3 && n2(i3[r3]);
      else i3 instanceof a3 && s3 !== i3 && n2(i3);
    } });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ a11y: { enabled: true, notificationClass: "swiper-notification", prevSlideMessage: "Previous slide", nextSlideMessage: "Next slide", firstSlideMessage: "This is the first slide", lastSlideMessage: "This is the last slide", paginationBulletMessage: "Go to slide {{index}}", slideLabelMessage: "{{index}} / {{slidesLength}}", containerMessage: null, containerRoleDescriptionMessage: null, itemRoleDescriptionMessage: null, slideRole: "group", id: null } });
    let i2 = null;
    function r2(e3) {
      const t3 = i2;
      0 !== t3.length && (t3.html(""), t3.html(e3));
    }
    function n2(e3) {
      e3.attr("tabIndex", "0");
    }
    function l2(e3) {
      e3.attr("tabIndex", "-1");
    }
    function o2(e3, t3) {
      e3.attr("role", t3);
    }
    function c2(e3, t3) {
      e3.attr("aria-roledescription", t3);
    }
    function p2(e3, t3) {
      e3.attr("aria-label", t3);
    }
    function u2(e3) {
      e3.attr("aria-disabled", true);
    }
    function h2(e3) {
      e3.attr("aria-disabled", false);
    }
    function m2(e3) {
      if (13 !== e3.keyCode && 32 !== e3.keyCode) return;
      const s3 = t2.params.a11y, a3 = d(e3.target);
      t2.navigation && t2.navigation.$nextEl && a3.is(t2.navigation.$nextEl) && (t2.isEnd && !t2.params.loop || t2.slideNext(), t2.isEnd ? r2(s3.lastSlideMessage) : r2(s3.nextSlideMessage)), t2.navigation && t2.navigation.$prevEl && a3.is(t2.navigation.$prevEl) && (t2.isBeginning && !t2.params.loop || t2.slidePrev(), t2.isBeginning ? r2(s3.firstSlideMessage) : r2(s3.prevSlideMessage)), t2.pagination && a3.is(U(t2.params.pagination.bulletClass)) && a3[0].click();
    }
    function f2() {
      return t2.pagination && t2.pagination.bullets && t2.pagination.bullets.length;
    }
    function g2() {
      return f2() && t2.params.pagination.clickable;
    }
    const v2 = (e3, t3, s3) => {
      n2(e3), "BUTTON" !== e3[0].tagName && (o2(e3, "button"), e3.on("keydown", m2)), p2(e3, s3), function(e4, t4) {
        e4.attr("aria-controls", t4);
      }(e3, t3);
    }, w2 = (e3) => {
      const s3 = e3.target.closest(`.${t2.params.slideClass}`);
      if (!s3 || !t2.slides.includes(s3)) return;
      const a3 = t2.slides.indexOf(s3) === t2.activeIndex, i3 = t2.params.watchSlidesProgress && t2.visibleSlides && t2.visibleSlides.includes(s3);
      a3 || i3 || (t2.isHorizontal() ? t2.el.scrollLeft = 0 : t2.el.scrollTop = 0, t2.slideTo(t2.slides.indexOf(s3), 0));
    }, b2 = () => {
      const e3 = t2.params.a11y;
      e3.itemRoleDescriptionMessage && c2(d(t2.slides), e3.itemRoleDescriptionMessage), e3.slideRole && o2(d(t2.slides), e3.slideRole);
      const s3 = t2.params.loop ? t2.slides.filter((e4) => !e4.classList.contains(t2.params.slideDuplicateClass)).length : t2.slides.length;
      e3.slideLabelMessage && t2.slides.each((a3, i3) => {
        const r3 = d(a3), n3 = t2.params.loop ? parseInt(r3.attr("data-swiper-slide-index"), 10) : i3;
        p2(r3, e3.slideLabelMessage.replace(/\{\{index\}\}/, n3 + 1).replace(/\{\{slidesLength\}\}/, s3));
      });
    }, x2 = () => {
      const e3 = t2.params.a11y;
      t2.$el.append(i2);
      const s3 = t2.$el;
      e3.containerRoleDescriptionMessage && c2(s3, e3.containerRoleDescriptionMessage), e3.containerMessage && p2(s3, e3.containerMessage);
      const a3 = t2.$wrapperEl, r3 = e3.id || a3.attr("id") || `swiper-wrapper-${n3 = 16, void 0 === n3 && (n3 = 16), "x".repeat(n3).replace(/x/g, () => Math.round(16 * Math.random()).toString(16))}`;
      var n3;
      const l3 = t2.params.autoplay && t2.params.autoplay.enabled ? "off" : "polite";
      var o3;
      let d2, u3;
      o3 = r3, a3.attr("id", o3), function(e4, t3) {
        e4.attr("aria-live", t3);
      }(a3, l3), b2(), t2.navigation && t2.navigation.$nextEl && (d2 = t2.navigation.$nextEl), t2.navigation && t2.navigation.$prevEl && (u3 = t2.navigation.$prevEl), d2 && d2.length && v2(d2, r3, e3.nextSlideMessage), u3 && u3.length && v2(u3, r3, e3.prevSlideMessage), g2() && t2.pagination.$el.on("keydown", U(t2.params.pagination.bulletClass), m2), t2.$el.on("focus", w2, true);
    };
    a2("beforeInit", () => {
      i2 = d(`<span class="${t2.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
    }), a2("afterInit", () => {
      t2.params.a11y.enabled && x2();
    }), a2("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
      t2.params.a11y.enabled && b2();
    }), a2("fromEdge toEdge afterInit lock unlock", () => {
      t2.params.a11y.enabled && function() {
        if (t2.params.loop || t2.params.rewind || !t2.navigation) return;
        const { $nextEl: e3, $prevEl: s3 } = t2.navigation;
        s3 && s3.length > 0 && (t2.isBeginning ? (u2(s3), l2(s3)) : (h2(s3), n2(s3))), e3 && e3.length > 0 && (t2.isEnd ? (u2(e3), l2(e3)) : (h2(e3), n2(e3)));
      }();
    }), a2("paginationUpdate", () => {
      t2.params.a11y.enabled && function() {
        const e3 = t2.params.a11y;
        f2() && t2.pagination.bullets.each((s3) => {
          const a3 = d(s3);
          t2.params.pagination.clickable && (n2(a3), t2.params.pagination.renderBullet || (o2(a3, "button"), p2(a3, e3.paginationBulletMessage.replace(/\{\{index\}\}/, a3.index() + 1)))), a3.is(`.${t2.params.pagination.bulletActiveClass}`) ? a3.attr("aria-current", "true") : a3.removeAttr("aria-current");
        });
      }();
    }), a2("destroy", () => {
      t2.params.a11y.enabled && function() {
        let e3, s3;
        i2 && i2.length > 0 && i2.remove(), t2.navigation && t2.navigation.$nextEl && (e3 = t2.navigation.$nextEl), t2.navigation && t2.navigation.$prevEl && (s3 = t2.navigation.$prevEl), e3 && e3.off("keydown", m2), s3 && s3.off("keydown", m2), g2() && t2.pagination.$el.off("keydown", U(t2.params.pagination.bulletClass), m2), t2.$el.off("focus", w2, true);
      }();
    });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ history: { enabled: false, root: "", replaceState: false, key: "slides", keepQuery: false } });
    let i2 = false, n2 = {};
    const l2 = (e3) => e3.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""), o2 = (e3) => {
      const t3 = r();
      let s3;
      s3 = e3 ? new URL(e3) : t3.location;
      const a3 = s3.pathname.slice(1).split("/").filter((e4) => "" !== e4), i3 = a3.length;
      return { key: a3[i3 - 2], value: a3[i3 - 1] };
    }, d2 = (e3, s3) => {
      const a3 = r();
      if (!i2 || !t2.params.history.enabled) return;
      let n3;
      n3 = t2.params.url ? new URL(t2.params.url) : a3.location;
      const o3 = t2.slides.eq(s3);
      let d3 = l2(o3.attr("data-history"));
      if (t2.params.history.root.length > 0) {
        let s4 = t2.params.history.root;
        "/" === s4[s4.length - 1] && (s4 = s4.slice(0, s4.length - 1)), d3 = `${s4}/${e3}/${d3}`;
      } else n3.pathname.includes(e3) || (d3 = `${e3}/${d3}`);
      t2.params.history.keepQuery && (d3 += n3.search);
      const c3 = a3.history.state;
      c3 && c3.value === d3 || (t2.params.history.replaceState ? a3.history.replaceState({ value: d3 }, null, d3) : a3.history.pushState({ value: d3 }, null, d3));
    }, c2 = (e3, s3, a3) => {
      if (s3) for (let i3 = 0, r2 = t2.slides.length; i3 < r2; i3 += 1) {
        const r3 = t2.slides.eq(i3);
        if (l2(r3.attr("data-history")) === s3 && !r3.hasClass(t2.params.slideDuplicateClass)) {
          const s4 = r3.index();
          t2.slideTo(s4, e3, a3);
        }
      }
      else t2.slideTo(0, e3, a3);
    }, p2 = () => {
      n2 = o2(t2.params.url), c2(t2.params.speed, n2.value, false);
    };
    a2("init", () => {
      t2.params.history.enabled && (() => {
        const e3 = r();
        if (t2.params.history) {
          if (!e3.history || !e3.history.pushState) return t2.params.history.enabled = false, void (t2.params.hashNavigation.enabled = true);
          i2 = true, n2 = o2(t2.params.url), (n2.key || n2.value) && (c2(0, n2.value, t2.params.runCallbacksOnInit), t2.params.history.replaceState || e3.addEventListener("popstate", p2));
        }
      })();
    }), a2("destroy", () => {
      t2.params.history.enabled && (() => {
        const e3 = r();
        t2.params.history.replaceState || e3.removeEventListener("popstate", p2);
      })();
    }), a2("transitionEnd _freeModeNoMomentumRelease", () => {
      i2 && d2(t2.params.history.key, t2.activeIndex);
    }), a2("slideChange", () => {
      i2 && t2.params.cssMode && d2(t2.params.history.key, t2.activeIndex);
    });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, emit: i2, on: n2 } = e2, l2 = false;
    const o2 = a(), c2 = r();
    s2({ hashNavigation: { enabled: false, replaceState: false, watchState: false } });
    const p2 = () => {
      i2("hashChange");
      const e3 = o2.location.hash.replace("#", "");
      if (e3 !== t2.slides.eq(t2.activeIndex).attr("data-hash")) {
        const s3 = t2.$wrapperEl.children(`.${t2.params.slideClass}[data-hash="${e3}"]`).index();
        if (void 0 === s3) return;
        t2.slideTo(s3);
      }
    }, u2 = () => {
      if (l2 && t2.params.hashNavigation.enabled) if (t2.params.hashNavigation.replaceState && c2.history && c2.history.replaceState) c2.history.replaceState(null, null, `#${t2.slides.eq(t2.activeIndex).attr("data-hash")}` || ""), i2("hashSet");
      else {
        const e3 = t2.slides.eq(t2.activeIndex), s3 = e3.attr("data-hash") || e3.attr("data-history");
        o2.location.hash = s3 || "", i2("hashSet");
      }
    };
    n2("init", () => {
      t2.params.hashNavigation.enabled && (() => {
        if (!t2.params.hashNavigation.enabled || t2.params.history && t2.params.history.enabled) return;
        l2 = true;
        const e3 = o2.location.hash.replace("#", "");
        if (e3) {
          const s3 = 0;
          for (let a2 = 0, i3 = t2.slides.length; a2 < i3; a2 += 1) {
            const i4 = t2.slides.eq(a2);
            if ((i4.attr("data-hash") || i4.attr("data-history")) === e3 && !i4.hasClass(t2.params.slideDuplicateClass)) {
              const e4 = i4.index();
              t2.slideTo(e4, s3, t2.params.runCallbacksOnInit, true);
            }
          }
        }
        t2.params.hashNavigation.watchState && d(c2).on("hashchange", p2);
      })();
    }), n2("destroy", () => {
      t2.params.hashNavigation.enabled && t2.params.hashNavigation.watchState && d(c2).off("hashchange", p2);
    }), n2("transitionEnd _freeModeNoMomentumRelease", () => {
      l2 && u2();
    }), n2("slideChange", () => {
      l2 && t2.params.cssMode && u2();
    });
  }, function(e2) {
    let t2, { swiper: s2, extendParams: i2, on: r2, emit: n2 } = e2;
    function l2() {
      if (!s2.size) return s2.autoplay.running = false, void (s2.autoplay.paused = false);
      const e3 = s2.slides.eq(s2.activeIndex);
      let a2 = s2.params.autoplay.delay;
      e3.attr("data-swiper-autoplay") && (a2 = e3.attr("data-swiper-autoplay") || s2.params.autoplay.delay), clearTimeout(t2), t2 = p(() => {
        let e4;
        s2.params.autoplay.reverseDirection ? s2.params.loop ? (s2.loopFix(), e4 = s2.slidePrev(s2.params.speed, true, true), n2("autoplay")) : s2.isBeginning ? s2.params.autoplay.stopOnLastSlide ? d2() : (e4 = s2.slideTo(s2.slides.length - 1, s2.params.speed, true, true), n2("autoplay")) : (e4 = s2.slidePrev(s2.params.speed, true, true), n2("autoplay")) : s2.params.loop ? (s2.loopFix(), e4 = s2.slideNext(s2.params.speed, true, true), n2("autoplay")) : s2.isEnd ? s2.params.autoplay.stopOnLastSlide ? d2() : (e4 = s2.slideTo(0, s2.params.speed, true, true), n2("autoplay")) : (e4 = s2.slideNext(s2.params.speed, true, true), n2("autoplay")), (s2.params.cssMode && s2.autoplay.running || false === e4) && l2();
      }, a2);
    }
    function o2() {
      return void 0 === t2 && (!s2.autoplay.running && (s2.autoplay.running = true, n2("autoplayStart"), l2(), true));
    }
    function d2() {
      return !!s2.autoplay.running && (void 0 !== t2 && (t2 && (clearTimeout(t2), t2 = void 0), s2.autoplay.running = false, n2("autoplayStop"), true));
    }
    function c2(e3) {
      s2.autoplay.running && (s2.autoplay.paused || (t2 && clearTimeout(t2), s2.autoplay.paused = true, 0 !== e3 && s2.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach((e4) => {
        s2.$wrapperEl[0].addEventListener(e4, h2);
      }) : (s2.autoplay.paused = false, l2())));
    }
    function u2() {
      const e3 = a();
      "hidden" === e3.visibilityState && s2.autoplay.running && c2(), "visible" === e3.visibilityState && s2.autoplay.paused && (l2(), s2.autoplay.paused = false);
    }
    function h2(e3) {
      s2 && !s2.destroyed && s2.$wrapperEl && e3.target === s2.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach((e4) => {
        s2.$wrapperEl[0].removeEventListener(e4, h2);
      }), s2.autoplay.paused = false, s2.autoplay.running ? l2() : d2());
    }
    function m2() {
      s2.params.autoplay.disableOnInteraction ? d2() : (n2("autoplayPause"), c2()), ["transitionend", "webkitTransitionEnd"].forEach((e3) => {
        s2.$wrapperEl[0].removeEventListener(e3, h2);
      });
    }
    function f2() {
      s2.params.autoplay.disableOnInteraction || (s2.autoplay.paused = false, n2("autoplayResume"), l2());
    }
    s2.autoplay = { running: false, paused: false }, i2({ autoplay: { enabled: false, delay: 3e3, waitForTransition: true, disableOnInteraction: true, stopOnLastSlide: false, reverseDirection: false, pauseOnMouseEnter: false } }), r2("init", () => {
      if (s2.params.autoplay.enabled) {
        o2();
        a().addEventListener("visibilitychange", u2), s2.params.autoplay.pauseOnMouseEnter && (s2.$el.on("mouseenter", m2), s2.$el.on("mouseleave", f2));
      }
    }), r2("beforeTransitionStart", (e3, t3, a2) => {
      s2.autoplay.running && (a2 || !s2.params.autoplay.disableOnInteraction ? s2.autoplay.pause(t3) : d2());
    }), r2("sliderFirstMove", () => {
      s2.autoplay.running && (s2.params.autoplay.disableOnInteraction ? d2() : c2());
    }), r2("touchEnd", () => {
      s2.params.cssMode && s2.autoplay.paused && !s2.params.autoplay.disableOnInteraction && l2();
    }), r2("destroy", () => {
      s2.$el.off("mouseenter", m2), s2.$el.off("mouseleave", f2), s2.autoplay.running && d2();
      a().removeEventListener("visibilitychange", u2);
    }), Object.assign(s2.autoplay, { pause: c2, run: l2, start: o2, stop: d2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ thumbs: { swiper: null, multipleActiveThumbs: true, autoScrollOffset: 0, slideThumbActiveClass: "swiper-slide-thumb-active", thumbsContainerClass: "swiper-thumbs" } });
    let i2 = false, r2 = false;
    function n2() {
      const e3 = t2.thumbs.swiper;
      if (!e3 || e3.destroyed) return;
      const s3 = e3.clickedIndex, a3 = e3.clickedSlide;
      if (a3 && d(a3).hasClass(t2.params.thumbs.slideThumbActiveClass)) return;
      if (null == s3) return;
      let i3;
      if (i3 = e3.params.loop ? parseInt(d(e3.clickedSlide).attr("data-swiper-slide-index"), 10) : s3, t2.params.loop) {
        let e4 = t2.activeIndex;
        t2.slides.eq(e4).hasClass(t2.params.slideDuplicateClass) && (t2.loopFix(), t2._clientLeft = t2.$wrapperEl[0].clientLeft, e4 = t2.activeIndex);
        const s4 = t2.slides.eq(e4).prevAll(`[data-swiper-slide-index="${i3}"]`).eq(0).index(), a4 = t2.slides.eq(e4).nextAll(`[data-swiper-slide-index="${i3}"]`).eq(0).index();
        i3 = void 0 === s4 ? a4 : void 0 === a4 ? s4 : a4 - e4 < e4 - s4 ? a4 : s4;
      }
      t2.slideTo(i3);
    }
    function l2() {
      const { thumbs: e3 } = t2.params;
      if (i2) return false;
      i2 = true;
      const s3 = t2.constructor;
      if (e3.swiper instanceof s3) t2.thumbs.swiper = e3.swiper, Object.assign(t2.thumbs.swiper.originalParams, { watchSlidesProgress: true, slideToClickedSlide: false }), Object.assign(t2.thumbs.swiper.params, { watchSlidesProgress: true, slideToClickedSlide: false });
      else if (m(e3.swiper)) {
        const a3 = Object.assign({}, e3.swiper);
        Object.assign(a3, { watchSlidesProgress: true, slideToClickedSlide: false }), t2.thumbs.swiper = new s3(a3), r2 = true;
      }
      return t2.thumbs.swiper.$el.addClass(t2.params.thumbs.thumbsContainerClass), t2.thumbs.swiper.on("tap", n2), true;
    }
    function o2(e3) {
      const s3 = t2.thumbs.swiper;
      if (!s3 || s3.destroyed) return;
      const a3 = "auto" === s3.params.slidesPerView ? s3.slidesPerViewDynamic() : s3.params.slidesPerView;
      let i3 = 1;
      const r3 = t2.params.thumbs.slideThumbActiveClass;
      if (t2.params.slidesPerView > 1 && !t2.params.centeredSlides && (i3 = t2.params.slidesPerView), t2.params.thumbs.multipleActiveThumbs || (i3 = 1), i3 = Math.floor(i3), s3.slides.removeClass(r3), s3.params.loop || s3.params.virtual && s3.params.virtual.enabled) for (let e4 = 0; e4 < i3; e4 += 1) s3.$wrapperEl.children(`[data-swiper-slide-index="${t2.realIndex + e4}"]`).addClass(r3);
      else for (let e4 = 0; e4 < i3; e4 += 1) s3.slides.eq(t2.realIndex + e4).addClass(r3);
      const n3 = t2.params.thumbs.autoScrollOffset, l3 = n3 && !s3.params.loop;
      if (t2.realIndex !== s3.realIndex || l3) {
        let i4, r4, o3 = s3.activeIndex;
        if (s3.params.loop) {
          s3.slides.eq(o3).hasClass(s3.params.slideDuplicateClass) && (s3.loopFix(), s3._clientLeft = s3.$wrapperEl[0].clientLeft, o3 = s3.activeIndex);
          const e4 = s3.slides.eq(o3).prevAll(`[data-swiper-slide-index="${t2.realIndex}"]`).eq(0).index(), a4 = s3.slides.eq(o3).nextAll(`[data-swiper-slide-index="${t2.realIndex}"]`).eq(0).index();
          i4 = void 0 === e4 ? a4 : void 0 === a4 ? e4 : a4 - o3 == o3 - e4 ? s3.params.slidesPerGroup > 1 ? a4 : o3 : a4 - o3 < o3 - e4 ? a4 : e4, r4 = t2.activeIndex > t2.previousIndex ? "next" : "prev";
        } else i4 = t2.realIndex, r4 = i4 > t2.previousIndex ? "next" : "prev";
        l3 && (i4 += "next" === r4 ? n3 : -1 * n3), s3.visibleSlidesIndexes && s3.visibleSlidesIndexes.indexOf(i4) < 0 && (s3.params.centeredSlides ? i4 = i4 > o3 ? i4 - Math.floor(a3 / 2) + 1 : i4 + Math.floor(a3 / 2) - 1 : i4 > o3 && s3.params.slidesPerGroup, s3.slideTo(i4, e3 ? 0 : void 0));
      }
    }
    t2.thumbs = { swiper: null }, a2("beforeInit", () => {
      const { thumbs: e3 } = t2.params;
      e3 && e3.swiper && (l2(), o2(true));
    }), a2("slideChange update resize observerUpdate", () => {
      o2();
    }), a2("setTransition", (e3, s3) => {
      const a3 = t2.thumbs.swiper;
      a3 && !a3.destroyed && a3.setTransition(s3);
    }), a2("beforeDestroy", () => {
      const e3 = t2.thumbs.swiper;
      e3 && !e3.destroyed && r2 && e3.destroy();
    }), Object.assign(t2.thumbs, { init: l2, update: o2 });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, emit: a2, once: i2 } = e2;
    s2({ freeMode: { enabled: false, momentum: true, momentumRatio: 1, momentumBounce: true, momentumBounceRatio: 1, momentumVelocityRatio: 1, sticky: false, minimumVelocity: 0.02 } }), Object.assign(t2, { freeMode: { onTouchStart: function() {
      const e3 = t2.getTranslate();
      t2.setTranslate(e3), t2.setTransition(0), t2.touchEventsData.velocities.length = 0, t2.freeMode.onTouchEnd({ currentPos: t2.rtl ? t2.translate : -t2.translate });
    }, onTouchMove: function() {
      const { touchEventsData: e3, touches: s3 } = t2;
      0 === e3.velocities.length && e3.velocities.push({ position: s3[t2.isHorizontal() ? "startX" : "startY"], time: e3.touchStartTime }), e3.velocities.push({ position: s3[t2.isHorizontal() ? "currentX" : "currentY"], time: u() });
    }, onTouchEnd: function(e3) {
      let { currentPos: s3 } = e3;
      const { params: r2, $wrapperEl: n2, rtlTranslate: l2, snapGrid: o2, touchEventsData: d2 } = t2, c2 = u() - d2.touchStartTime;
      if (s3 < -t2.minTranslate()) t2.slideTo(t2.activeIndex);
      else if (s3 > -t2.maxTranslate()) t2.slides.length < o2.length ? t2.slideTo(o2.length - 1) : t2.slideTo(t2.slides.length - 1);
      else {
        if (r2.freeMode.momentum) {
          if (d2.velocities.length > 1) {
            const e5 = d2.velocities.pop(), s5 = d2.velocities.pop(), a3 = e5.position - s5.position, i3 = e5.time - s5.time;
            t2.velocity = a3 / i3, t2.velocity /= 2, Math.abs(t2.velocity) < r2.freeMode.minimumVelocity && (t2.velocity = 0), (i3 > 150 || u() - e5.time > 300) && (t2.velocity = 0);
          } else t2.velocity = 0;
          t2.velocity *= r2.freeMode.momentumVelocityRatio, d2.velocities.length = 0;
          let e4 = 1e3 * r2.freeMode.momentumRatio;
          const s4 = t2.velocity * e4;
          let c3 = t2.translate + s4;
          l2 && (c3 = -c3);
          let p2, h2 = false;
          const m2 = 20 * Math.abs(t2.velocity) * r2.freeMode.momentumBounceRatio;
          let f2;
          if (c3 < t2.maxTranslate()) r2.freeMode.momentumBounce ? (c3 + t2.maxTranslate() < -m2 && (c3 = t2.maxTranslate() - m2), p2 = t2.maxTranslate(), h2 = true, d2.allowMomentumBounce = true) : c3 = t2.maxTranslate(), r2.loop && r2.centeredSlides && (f2 = true);
          else if (c3 > t2.minTranslate()) r2.freeMode.momentumBounce ? (c3 - t2.minTranslate() > m2 && (c3 = t2.minTranslate() + m2), p2 = t2.minTranslate(), h2 = true, d2.allowMomentumBounce = true) : c3 = t2.minTranslate(), r2.loop && r2.centeredSlides && (f2 = true);
          else if (r2.freeMode.sticky) {
            let e5;
            for (let t3 = 0; t3 < o2.length; t3 += 1) if (o2[t3] > -c3) {
              e5 = t3;
              break;
            }
            c3 = Math.abs(o2[e5] - c3) < Math.abs(o2[e5 - 1] - c3) || "next" === t2.swipeDirection ? o2[e5] : o2[e5 - 1], c3 = -c3;
          }
          if (f2 && i2("transitionEnd", () => {
            t2.loopFix();
          }), 0 !== t2.velocity) {
            if (e4 = l2 ? Math.abs((-c3 - t2.translate) / t2.velocity) : Math.abs((c3 - t2.translate) / t2.velocity), r2.freeMode.sticky) {
              const s5 = Math.abs((l2 ? -c3 : c3) - t2.translate), a3 = t2.slidesSizesGrid[t2.activeIndex];
              e4 = s5 < a3 ? r2.speed : s5 < 2 * a3 ? 1.5 * r2.speed : 2.5 * r2.speed;
            }
          } else if (r2.freeMode.sticky) return void t2.slideToClosest();
          r2.freeMode.momentumBounce && h2 ? (t2.updateProgress(p2), t2.setTransition(e4), t2.setTranslate(c3), t2.transitionStart(true, t2.swipeDirection), t2.animating = true, n2.transitionEnd(() => {
            t2 && !t2.destroyed && d2.allowMomentumBounce && (a2("momentumBounce"), t2.setTransition(r2.speed), setTimeout(() => {
              t2.setTranslate(p2), n2.transitionEnd(() => {
                t2 && !t2.destroyed && t2.transitionEnd();
              });
            }, 0));
          })) : t2.velocity ? (a2("_freeModeNoMomentumRelease"), t2.updateProgress(c3), t2.setTransition(e4), t2.setTranslate(c3), t2.transitionStart(true, t2.swipeDirection), t2.animating || (t2.animating = true, n2.transitionEnd(() => {
            t2 && !t2.destroyed && t2.transitionEnd();
          }))) : t2.updateProgress(c3), t2.updateActiveIndex(), t2.updateSlidesClasses();
        } else {
          if (r2.freeMode.sticky) return void t2.slideToClosest();
          r2.freeMode && a2("_freeModeNoMomentumRelease");
        }
        (!r2.freeMode.momentum || c2 >= r2.longSwipesMs) && (t2.updateProgress(), t2.updateActiveIndex(), t2.updateSlidesClasses());
      }
    } } });
  }, function(e2) {
    let t2, s2, a2, { swiper: i2, extendParams: r2 } = e2;
    r2({ grid: { rows: 1, fill: "column" } }), i2.grid = { initSlides: (e3) => {
      const { slidesPerView: r3 } = i2.params, { rows: n2, fill: l2 } = i2.params.grid;
      s2 = t2 / n2, a2 = Math.floor(e3 / n2), t2 = Math.floor(e3 / n2) === e3 / n2 ? e3 : Math.ceil(e3 / n2) * n2, "auto" !== r3 && "row" === l2 && (t2 = Math.max(t2, r3 * n2));
    }, updateSlide: (e3, r3, n2, l2) => {
      const { slidesPerGroup: o2, spaceBetween: d2 } = i2.params, { rows: c2, fill: p2 } = i2.params.grid;
      let u2, h2, m2;
      if ("row" === p2 && o2 > 1) {
        const s3 = Math.floor(e3 / (o2 * c2)), a3 = e3 - c2 * o2 * s3, i3 = 0 === s3 ? o2 : Math.min(Math.ceil((n2 - s3 * c2 * o2) / c2), o2);
        m2 = Math.floor(a3 / i3), h2 = a3 - m2 * i3 + s3 * o2, u2 = h2 + m2 * t2 / c2, r3.css({ "-webkit-order": u2, order: u2 });
      } else "column" === p2 ? (h2 = Math.floor(e3 / c2), m2 = e3 - h2 * c2, (h2 > a2 || h2 === a2 && m2 === c2 - 1) && (m2 += 1, m2 >= c2 && (m2 = 0, h2 += 1))) : (m2 = Math.floor(e3 / s2), h2 = e3 - m2 * s2);
      r3.css(l2("margin-top"), 0 !== m2 ? d2 && `${d2}px` : "");
    }, updateWrapperSize: (e3, s3, a3) => {
      const { spaceBetween: r3, centeredSlides: n2, roundLengths: l2 } = i2.params, { rows: o2 } = i2.params.grid;
      if (i2.virtualSize = (e3 + r3) * t2, i2.virtualSize = Math.ceil(i2.virtualSize / o2) - r3, i2.$wrapperEl.css({ [a3("width")]: `${i2.virtualSize + r3}px` }), n2) {
        s3.splice(0, s3.length);
        const e4 = [];
        for (let t3 = 0; t3 < s3.length; t3 += 1) {
          let a4 = s3[t3];
          l2 && (a4 = Math.floor(a4)), s3[t3] < i2.virtualSize + s3[0] && e4.push(a4);
        }
        s3.push(...e4);
      }
    } };
  }, function(e2) {
    let { swiper: t2 } = e2;
    Object.assign(t2, { appendSlide: K.bind(t2), prependSlide: Z.bind(t2), addSlide: Q.bind(t2), removeSlide: J.bind(t2), removeAllSlides: ee.bind(t2) });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ fadeEffect: { crossFade: false, transformEl: null } }), te({ effect: "fade", swiper: t2, on: a2, setTranslate: () => {
      const { slides: e3 } = t2, s3 = t2.params.fadeEffect;
      for (let a3 = 0; a3 < e3.length; a3 += 1) {
        const e4 = t2.slides.eq(a3);
        let i2 = -e4[0].swiperSlideOffset;
        t2.params.virtualTranslate || (i2 -= t2.translate);
        let r2 = 0;
        t2.isHorizontal() || (r2 = i2, i2 = 0);
        const n2 = t2.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e4[0].progress), 0) : 1 + Math.min(Math.max(e4[0].progress, -1), 0);
        se(s3, e4).css({ opacity: n2 }).transform(`translate3d(${i2}px, ${r2}px, 0px)`);
      }
    }, setTransition: (e3) => {
      const { transformEl: s3 } = t2.params.fadeEffect;
      (s3 ? t2.slides.find(s3) : t2.slides).transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3, allSlides: true });
    }, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t2.params.cssMode }) });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ cubeEffect: { slideShadows: true, shadow: true, shadowOffset: 20, shadowScale: 0.94 } });
    const i2 = (e3, t3, s3) => {
      let a3 = s3 ? e3.find(".swiper-slide-shadow-left") : e3.find(".swiper-slide-shadow-top"), i3 = s3 ? e3.find(".swiper-slide-shadow-right") : e3.find(".swiper-slide-shadow-bottom");
      0 === a3.length && (a3 = d(`<div class="swiper-slide-shadow-${s3 ? "left" : "top"}"></div>`), e3.append(a3)), 0 === i3.length && (i3 = d(`<div class="swiper-slide-shadow-${s3 ? "right" : "bottom"}"></div>`), e3.append(i3)), a3.length && (a3[0].style.opacity = Math.max(-t3, 0)), i3.length && (i3[0].style.opacity = Math.max(t3, 0));
    };
    te({ effect: "cube", swiper: t2, on: a2, setTranslate: () => {
      const { $el: e3, $wrapperEl: s3, slides: a3, width: r2, height: n2, rtlTranslate: l2, size: o2, browser: c2 } = t2, p2 = t2.params.cubeEffect, u2 = t2.isHorizontal(), h2 = t2.virtual && t2.params.virtual.enabled;
      let m2, f2 = 0;
      p2.shadow && (u2 ? (m2 = s3.find(".swiper-cube-shadow"), 0 === m2.length && (m2 = d('<div class="swiper-cube-shadow"></div>'), s3.append(m2)), m2.css({ height: `${r2}px` })) : (m2 = e3.find(".swiper-cube-shadow"), 0 === m2.length && (m2 = d('<div class="swiper-cube-shadow"></div>'), e3.append(m2))));
      for (let e4 = 0; e4 < a3.length; e4 += 1) {
        const t3 = a3.eq(e4);
        let s4 = e4;
        h2 && (s4 = parseInt(t3.attr("data-swiper-slide-index"), 10));
        let r3 = 90 * s4, n3 = Math.floor(r3 / 360);
        l2 && (r3 = -r3, n3 = Math.floor(-r3 / 360));
        const d2 = Math.max(Math.min(t3[0].progress, 1), -1);
        let c3 = 0, m3 = 0, g3 = 0;
        s4 % 4 == 0 ? (c3 = 4 * -n3 * o2, g3 = 0) : (s4 - 1) % 4 == 0 ? (c3 = 0, g3 = 4 * -n3 * o2) : (s4 - 2) % 4 == 0 ? (c3 = o2 + 4 * n3 * o2, g3 = o2) : (s4 - 3) % 4 == 0 && (c3 = -o2, g3 = 3 * o2 + 4 * o2 * n3), l2 && (c3 = -c3), u2 || (m3 = c3, c3 = 0);
        const v2 = `rotateX(${u2 ? 0 : -r3}deg) rotateY(${u2 ? r3 : 0}deg) translate3d(${c3}px, ${m3}px, ${g3}px)`;
        d2 <= 1 && d2 > -1 && (f2 = 90 * s4 + 90 * d2, l2 && (f2 = 90 * -s4 - 90 * d2)), t3.transform(v2), p2.slideShadows && i2(t3, d2, u2);
      }
      if (s3.css({ "-webkit-transform-origin": `50% 50% -${o2 / 2}px`, "transform-origin": `50% 50% -${o2 / 2}px` }), p2.shadow) if (u2) m2.transform(`translate3d(0px, ${r2 / 2 + p2.shadowOffset}px, ${-r2 / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p2.shadowScale})`);
      else {
        const e4 = Math.abs(f2) - 90 * Math.floor(Math.abs(f2) / 90), t3 = 1.5 - (Math.sin(2 * e4 * Math.PI / 360) / 2 + Math.cos(2 * e4 * Math.PI / 360) / 2), s4 = p2.shadowScale, a4 = p2.shadowScale / t3, i3 = p2.shadowOffset;
        m2.transform(`scale3d(${s4}, 1, ${a4}) translate3d(0px, ${n2 / 2 + i3}px, ${-n2 / 2 / a4}px) rotateX(-90deg)`);
      }
      const g2 = c2.isSafari || c2.isWebView ? -o2 / 2 : 0;
      s3.transform(`translate3d(0px,0,${g2}px) rotateX(${t2.isHorizontal() ? 0 : f2}deg) rotateY(${t2.isHorizontal() ? -f2 : 0}deg)`), s3[0].style.setProperty("--swiper-cube-translate-z", `${g2}px`);
    }, setTransition: (e3) => {
      const { $el: s3, slides: a3 } = t2;
      a3.transition(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e3), t2.params.cubeEffect.shadow && !t2.isHorizontal() && s3.find(".swiper-cube-shadow").transition(e3);
    }, recreateShadows: () => {
      const e3 = t2.isHorizontal();
      t2.slides.each((t3) => {
        const s3 = Math.max(Math.min(t3.progress, 1), -1);
        i2(d(t3), s3, e3);
      });
    }, getEffectParams: () => t2.params.cubeEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, resistanceRatio: 0, spaceBetween: 0, centeredSlides: false, virtualTranslate: true }) });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ flipEffect: { slideShadows: true, limitRotation: true, transformEl: null } });
    const i2 = (e3, s3, a3) => {
      let i3 = t2.isHorizontal() ? e3.find(".swiper-slide-shadow-left") : e3.find(".swiper-slide-shadow-top"), r2 = t2.isHorizontal() ? e3.find(".swiper-slide-shadow-right") : e3.find(".swiper-slide-shadow-bottom");
      0 === i3.length && (i3 = ie(a3, e3, t2.isHorizontal() ? "left" : "top")), 0 === r2.length && (r2 = ie(a3, e3, t2.isHorizontal() ? "right" : "bottom")), i3.length && (i3[0].style.opacity = Math.max(-s3, 0)), r2.length && (r2[0].style.opacity = Math.max(s3, 0));
    };
    te({ effect: "flip", swiper: t2, on: a2, setTranslate: () => {
      const { slides: e3, rtlTranslate: s3 } = t2, a3 = t2.params.flipEffect;
      for (let r2 = 0; r2 < e3.length; r2 += 1) {
        const n2 = e3.eq(r2);
        let l2 = n2[0].progress;
        t2.params.flipEffect.limitRotation && (l2 = Math.max(Math.min(n2[0].progress, 1), -1));
        const o2 = n2[0].swiperSlideOffset;
        let d2 = -180 * l2, c2 = 0, p2 = t2.params.cssMode ? -o2 - t2.translate : -o2, u2 = 0;
        t2.isHorizontal() ? s3 && (d2 = -d2) : (u2 = p2, p2 = 0, c2 = -d2, d2 = 0), n2[0].style.zIndex = -Math.abs(Math.round(l2)) + e3.length, a3.slideShadows && i2(n2, l2, a3);
        const h2 = `translate3d(${p2}px, ${u2}px, 0px) rotateX(${c2}deg) rotateY(${d2}deg)`;
        se(a3, n2).transform(h2);
      }
    }, setTransition: (e3) => {
      const { transformEl: s3 } = t2.params.flipEffect;
      (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3 });
    }, recreateShadows: () => {
      const e3 = t2.params.flipEffect;
      t2.slides.each((s3) => {
        const a3 = d(s3);
        let r2 = a3[0].progress;
        t2.params.flipEffect.limitRotation && (r2 = Math.max(Math.min(s3.progress, 1), -1)), i2(a3, r2, e3);
      });
    }, getEffectParams: () => t2.params.flipEffect, perspective: () => true, overwriteParams: () => ({ slidesPerView: 1, slidesPerGroup: 1, watchSlidesProgress: true, spaceBetween: 0, virtualTranslate: !t2.params.cssMode }) });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ coverflowEffect: { rotate: 50, stretch: 0, depth: 100, scale: 1, modifier: 1, slideShadows: true, transformEl: null } }), te({ effect: "coverflow", swiper: t2, on: a2, setTranslate: () => {
      const { width: e3, height: s3, slides: a3, slidesSizesGrid: i2 } = t2, r2 = t2.params.coverflowEffect, n2 = t2.isHorizontal(), l2 = t2.translate, o2 = n2 ? e3 / 2 - l2 : s3 / 2 - l2, d2 = n2 ? r2.rotate : -r2.rotate, c2 = r2.depth;
      for (let e4 = 0, t3 = a3.length; e4 < t3; e4 += 1) {
        const t4 = a3.eq(e4), s4 = i2[e4], l3 = (o2 - t4[0].swiperSlideOffset - s4 / 2) / s4, p2 = "function" == typeof r2.modifier ? r2.modifier(l3) : l3 * r2.modifier;
        let u2 = n2 ? d2 * p2 : 0, h2 = n2 ? 0 : d2 * p2, m2 = -c2 * Math.abs(p2), f2 = r2.stretch;
        "string" == typeof f2 && -1 !== f2.indexOf("%") && (f2 = parseFloat(r2.stretch) / 100 * s4);
        let g2 = n2 ? 0 : f2 * p2, v2 = n2 ? f2 * p2 : 0, w2 = 1 - (1 - r2.scale) * Math.abs(p2);
        Math.abs(v2) < 1e-3 && (v2 = 0), Math.abs(g2) < 1e-3 && (g2 = 0), Math.abs(m2) < 1e-3 && (m2 = 0), Math.abs(u2) < 1e-3 && (u2 = 0), Math.abs(h2) < 1e-3 && (h2 = 0), Math.abs(w2) < 1e-3 && (w2 = 0);
        const b2 = `translate3d(${v2}px,${g2}px,${m2}px)  rotateX(${h2}deg) rotateY(${u2}deg) scale(${w2})`;
        if (se(r2, t4).transform(b2), t4[0].style.zIndex = 1 - Math.abs(Math.round(p2)), r2.slideShadows) {
          let e5 = n2 ? t4.find(".swiper-slide-shadow-left") : t4.find(".swiper-slide-shadow-top"), s5 = n2 ? t4.find(".swiper-slide-shadow-right") : t4.find(".swiper-slide-shadow-bottom");
          0 === e5.length && (e5 = ie(r2, t4, n2 ? "left" : "top")), 0 === s5.length && (s5 = ie(r2, t4, n2 ? "right" : "bottom")), e5.length && (e5[0].style.opacity = p2 > 0 ? p2 : 0), s5.length && (s5[0].style.opacity = -p2 > 0 ? -p2 : 0);
        }
      }
    }, setTransition: (e3) => {
      const { transformEl: s3 } = t2.params.coverflowEffect;
      (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e3);
    }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true }) });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ creativeEffect: { transformEl: null, limitProgress: 1, shadowPerProgress: false, progressMultiplier: 1, perspective: true, prev: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 }, next: { translate: [0, 0, 0], rotate: [0, 0, 0], opacity: 1, scale: 1 } } });
    const i2 = (e3) => "string" == typeof e3 ? e3 : `${e3}px`;
    te({ effect: "creative", swiper: t2, on: a2, setTranslate: () => {
      const { slides: e3, $wrapperEl: s3, slidesSizesGrid: a3 } = t2, r2 = t2.params.creativeEffect, { progressMultiplier: n2 } = r2, l2 = t2.params.centeredSlides;
      if (l2) {
        const e4 = a3[0] / 2 - t2.params.slidesOffsetBefore || 0;
        s3.transform(`translateX(calc(50% - ${e4}px))`);
      }
      for (let s4 = 0; s4 < e3.length; s4 += 1) {
        const a4 = e3.eq(s4), o2 = a4[0].progress, d2 = Math.min(Math.max(a4[0].progress, -r2.limitProgress), r2.limitProgress);
        let c2 = d2;
        l2 || (c2 = Math.min(Math.max(a4[0].originalProgress, -r2.limitProgress), r2.limitProgress));
        const p2 = a4[0].swiperSlideOffset, u2 = [t2.params.cssMode ? -p2 - t2.translate : -p2, 0, 0], h2 = [0, 0, 0];
        let m2 = false;
        t2.isHorizontal() || (u2[1] = u2[0], u2[0] = 0);
        let f2 = { translate: [0, 0, 0], rotate: [0, 0, 0], scale: 1, opacity: 1 };
        d2 < 0 ? (f2 = r2.next, m2 = true) : d2 > 0 && (f2 = r2.prev, m2 = true), u2.forEach((e4, t3) => {
          u2[t3] = `calc(${e4}px + (${i2(f2.translate[t3])} * ${Math.abs(d2 * n2)}))`;
        }), h2.forEach((e4, t3) => {
          h2[t3] = f2.rotate[t3] * Math.abs(d2 * n2);
        }), a4[0].style.zIndex = -Math.abs(Math.round(o2)) + e3.length;
        const g2 = u2.join(", "), v2 = `rotateX(${h2[0]}deg) rotateY(${h2[1]}deg) rotateZ(${h2[2]}deg)`, w2 = c2 < 0 ? `scale(${1 + (1 - f2.scale) * c2 * n2})` : `scale(${1 - (1 - f2.scale) * c2 * n2})`, b2 = c2 < 0 ? 1 + (1 - f2.opacity) * c2 * n2 : 1 - (1 - f2.opacity) * c2 * n2, x2 = `translate3d(${g2}) ${v2} ${w2}`;
        if (m2 && f2.shadow || !m2) {
          let e4 = a4.children(".swiper-slide-shadow");
          if (0 === e4.length && f2.shadow && (e4 = ie(r2, a4)), e4.length) {
            const t3 = r2.shadowPerProgress ? d2 * (1 / r2.limitProgress) : d2;
            e4[0].style.opacity = Math.min(Math.max(Math.abs(t3), 0), 1);
          }
        }
        const y2 = se(r2, a4);
        y2.transform(x2).css({ opacity: b2 }), f2.origin && y2.css("transform-origin", f2.origin);
      }
    }, setTransition: (e3) => {
      const { transformEl: s3 } = t2.params.creativeEffect;
      (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow").transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3, allSlides: true });
    }, perspective: () => t2.params.creativeEffect.perspective, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t2.params.cssMode }) });
  }, function(e2) {
    let { swiper: t2, extendParams: s2, on: a2 } = e2;
    s2({ cardsEffect: { slideShadows: true, transformEl: null, rotate: true } }), te({ effect: "cards", swiper: t2, on: a2, setTranslate: () => {
      const { slides: e3, activeIndex: s3 } = t2, a3 = t2.params.cardsEffect, { startTranslate: i2, isTouched: r2 } = t2.touchEventsData, n2 = t2.translate;
      for (let l2 = 0; l2 < e3.length; l2 += 1) {
        const o2 = e3.eq(l2), d2 = o2[0].progress, c2 = Math.min(Math.max(d2, -4), 4);
        let p2 = o2[0].swiperSlideOffset;
        t2.params.centeredSlides && !t2.params.cssMode && t2.$wrapperEl.transform(`translateX(${t2.minTranslate()}px)`), t2.params.centeredSlides && t2.params.cssMode && (p2 -= e3[0].swiperSlideOffset);
        let u2 = t2.params.cssMode ? -p2 - t2.translate : -p2, h2 = 0;
        const m2 = -100 * Math.abs(c2);
        let f2 = 1, g2 = -2 * c2, v2 = 8 - 0.75 * Math.abs(c2);
        const w2 = t2.virtual && t2.params.virtual.enabled ? t2.virtual.from + l2 : l2, b2 = (w2 === s3 || w2 === s3 - 1) && c2 > 0 && c2 < 1 && (r2 || t2.params.cssMode) && n2 < i2, x2 = (w2 === s3 || w2 === s3 + 1) && c2 < 0 && c2 > -1 && (r2 || t2.params.cssMode) && n2 > i2;
        if (b2 || x2) {
          const e4 = (1 - Math.abs((Math.abs(c2) - 0.5) / 0.5)) ** 0.5;
          g2 += -28 * c2 * e4, f2 += -0.5 * e4, v2 += 96 * e4, h2 = -25 * e4 * Math.abs(c2) + "%";
        }
        if (u2 = c2 < 0 ? `calc(${u2}px + (${v2 * Math.abs(c2)}%))` : c2 > 0 ? `calc(${u2}px + (-${v2 * Math.abs(c2)}%))` : `${u2}px`, !t2.isHorizontal()) {
          const e4 = h2;
          h2 = u2, u2 = e4;
        }
        const y2 = c2 < 0 ? "" + (1 + (1 - f2) * c2) : "" + (1 - (1 - f2) * c2), E2 = `
        translate3d(${u2}, ${h2}, ${m2}px)
        rotateZ(${a3.rotate ? g2 : 0}deg)
        scale(${y2})
      `;
        if (a3.slideShadows) {
          let e4 = o2.find(".swiper-slide-shadow");
          0 === e4.length && (e4 = ie(a3, o2)), e4.length && (e4[0].style.opacity = Math.min(Math.max((Math.abs(c2) - 0.5) / 0.5, 0), 1));
        }
        o2[0].style.zIndex = -Math.abs(Math.round(d2)) + e3.length;
        se(a3, o2).transform(E2);
      }
    }, setTransition: (e3) => {
      const { transformEl: s3 } = t2.params.cardsEffect;
      (s3 ? t2.slides.find(s3) : t2.slides).transition(e3).find(".swiper-slide-shadow").transition(e3), ae({ swiper: t2, duration: e3, transformEl: s3 });
    }, perspective: () => true, overwriteParams: () => ({ watchSlidesProgress: true, virtualTranslate: !t2.params.cssMode }) });
  }];
  return V.use(re), V;
});
/*!
 * jQuery meanMenu v2.0.8
 * @Copyright (C) 2012-2014 Chris Wharton @ MeanThemes (https://github.com/meanthemes/meanMenu)
 *
 */
!function(e) {
  "use strict";
  e.fn.meanmenu = function(n) {
    var a = {
      meanMenuTarget: jQuery(this),
      meanMenuContainer: "body",
      meanMenuClose: "X",
      meanMenuCloseSize: "18px",
      meanMenuOpen: "<span /><span /><span />",
      meanRevealPosition: "right",
      meanRevealPositionDistance: "0",
      meanRevealColour: "",
      meanScreenWidth: "480",
      meanNavPush: "",
      meanShowChildren: true,
      meanExpandableChildren: true,
      meanRemoveAttrs: false,
      onePage: false,
      meanDisplay: "block",
      removeElements: ""
    };
    n = e.extend(a, n);
    var t = window.innerWidth || document.documentElement.clientWidth;
    return this.each(function() {
      var e2 = n.meanMenuTarget, a2 = n.meanMenuContainer, r = n.meanMenuClose, i = n.meanMenuCloseSize, s = n.meanMenuOpen, u = n.meanRevealPosition, m = n.meanRevealPositionDistance, l = n.meanRevealColour, o = n.meanScreenWidth, c = n.meanNavPush, d = n.meanShowChildren, v = n.meanExpandableChildren, h = n.meanExpand, y = n.meanRemoveAttrs, j = n.onePage, Q = n.meanDisplay, f = n.removeElements, p = false;
      (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (p = true), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
      var g = "", C = function() {
        if ("center" === u) {
          var e3 = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
          g = "left:" + e3 + ";right:auto;", p ? jQuery(".meanmenu-reveal").animate({
            left: e3
          }) : jQuery(".meanmenu-reveal").css("left", e3);
        }
      }, w = false, A = false;
      "right" === u && (g = "right:" + m + ";left:auto;"), "left" === u && (g = "left:" + m + ";right:auto;"), C();
      var M = "", P = function() {
        jQuery(".mean-bar,.mean-push").remove(), jQuery(a2).removeClass("mean-container"), jQuery(e2).css("display", Q), w = false, A = false, jQuery(f).removeClass("mean-remove");
      }, E = function() {
        var n2 = "background:" + l + ";color:" + l + ";" + g;
        if (t <= o) {
          jQuery(f).addClass("mean-remove"), A = true, jQuery(a2).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + n2 + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
          var u2 = jQuery(e2).html();
          jQuery(".mean-nav").html(u2), y && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function() {
            jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id");
          }), jQuery(e2).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", c), jQuery(e2).hide(), jQuery(".meanmenu-reveal").show(), jQuery(".meanmenu-reveal").html(s), M = jQuery(".meanmenu-reveal"), jQuery(".mean-nav ul").hide(), d ? v ? (jQuery(".mean-nav ul ul").each(function() {
            jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + i + '">' + h + "</a>");
          }), jQuery(".mean-expand").on("click", function(e3) {
            e3.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).prev("ul").slideUp(300, function() {
            }), jQuery(this).parent().removeClass("dropdown-opened")) : (jQuery(this).prev("ul").slideDown(300, function() {
            }), jQuery(this).parent().addClass("dropdown-opened")), jQuery(this).toggleClass("mean-clicked");
          })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), M.removeClass("meanclose"), jQuery(M).click(function(e3) {
            e3.preventDefault(), false === w ? (M.css("text-align", "center"), M.css("text-indent", "0"), M.css("font-size", i), jQuery(".mean-nav ul:first").slideDown(), w = true) : (jQuery(".mean-nav ul:first").slideUp(), w = false), M.toggleClass("meanclose"), jQuery(M).is(".meanmenu-reveal.meanclose") ? M.html(r) : M.html(s), jQuery(f).addClass("mean-remove");
          }), j && jQuery(".mean-nav ul > li > a:first-child").on("click", function() {
            jQuery(".mean-nav ul:first").slideUp(), w = false, jQuery(M).toggleClass("meanclose").html(s);
          });
        } else P();
      };
      p || jQuery(window).resize(function() {
        t = window.innerWidth || document.documentElement.clientWidth, P(), t <= o ? (E(), C()) : P();
      }), jQuery(window).resize(function() {
        t = window.innerWidth || document.documentElement.clientWidth, p ? (C(), t <= o ? false === A && E() : P()) : (P(), t <= o && (E(), C()));
      }), E();
    });
  };
}(jQuery);
/*! Magnific Popup - v1.1.0 - 2016-02-20
* http://dimsemenov.com/plugins/magnific-popup/
* Copyright (c) 2016 Dmitry Semenov; */
!function(a) {
  "function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto);
}(function(a) {
  var b, c, d, e, f, g, h = "Close", i = "BeforeClose", j = "AfterClose", k = "BeforeAppend", l = "MarkupParse", m = "Open", n = "Change", o = "mfp", p = "." + o, q = "mfp-ready", r = "mfp-removing", s = "mfp-prevent-close", t = function() {
  }, u = !!window.jQuery, v = a(window), w = function(a2, c2) {
    b.ev.on(o + a2 + p, c2);
  }, x = function(b2, c2, d2, e2) {
    var f2 = document.createElement("div");
    return f2.className = "mfp-" + b2, d2 && (f2.innerHTML = d2), e2 ? c2 && c2.appendChild(f2) : (f2 = a(f2), c2 && f2.appendTo(c2)), f2;
  }, y = function(c2, d2) {
    b.ev.triggerHandler(o + c2, d2), b.st.callbacks && (c2 = c2.charAt(0).toLowerCase() + c2.slice(1), b.st.callbacks[c2] && b.st.callbacks[c2].apply(b, a.isArray(d2) ? d2 : [d2]));
  }, z = function(c2) {
    return c2 === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c2), b.currTemplate.closeBtn;
  }, A = function() {
    a.magnificPopup.instance || (b = new t(), b.init(), a.magnificPopup.instance = b);
  }, B = function() {
    var a2 = document.createElement("p").style, b2 = ["ms", "O", "Moz", "Webkit"];
    if (void 0 !== a2.transition) return true;
    for (; b2.length; ) if (b2.pop() + "Transition" in a2) return true;
    return false;
  };
  t.prototype = { constructor: t, init: function() {
    var c2 = navigator.appVersion;
    b.isLowIE = b.isIE8 = document.all && !document.addEventListener, b.isAndroid = /android/gi.test(c2), b.isIOS = /iphone|ipad|ipod/gi.test(c2), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {};
  }, open: function(c2) {
    var e2;
    if (c2.isObj === false) {
      b.items = c2.items.toArray(), b.index = 0;
      var g2, h2 = c2.items;
      for (e2 = 0; e2 < h2.length; e2++) if (g2 = h2[e2], g2.parsed && (g2 = g2.el[0]), g2 === c2.el[0]) {
        b.index = e2;
        break;
      }
    } else b.items = a.isArray(c2.items) ? c2.items : [c2.items], b.index = c2.index || 0;
    if (b.isOpen) return void b.updateItemHTML();
    b.types = [], f = "", c2.mainEl && c2.mainEl.length ? b.ev = c2.mainEl.eq(0) : b.ev = d, c2.key ? (b.popupsCache[c2.key] || (b.popupsCache[c2.key] = {}), b.currTemplate = b.popupsCache[c2.key]) : b.currTemplate = {}, b.st = a.extend(true, {}, a.magnificPopup.defaults, c2), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = false, b.st.closeOnBgClick = false, b.st.showCloseBtn = false, b.st.enableEscapeKey = false), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function() {
      b.close();
    }), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function(a2) {
      b._checkIfClose(a2.target) && b.close();
    }), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
    var i2 = a.magnificPopup.modules;
    for (e2 = 0; e2 < i2.length; e2++) {
      var j2 = i2[e2];
      j2 = j2.charAt(0).toUpperCase() + j2.slice(1), b["init" + j2].call(b);
    }
    y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function(a2, b2, c3, d2) {
      c3.close_replaceWith = z(d2.type);
    }), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({ overflow: b.st.overflowY, overflowX: "hidden", overflowY: b.st.overflowY }) : b.wrap.css({ top: v.scrollTop(), position: "absolute" }), (b.st.fixedBgPos === false || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({ height: d.height(), position: "absolute" }), b.st.enableEscapeKey && d.on("keyup" + p, function(a2) {
      27 === a2.keyCode && b.close();
    }), v.on("resize" + p, function() {
      b.updateSize();
    }), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
    var k2 = b.wH = v.height(), n2 = {};
    if (b.fixedContentPos && b._hasScrollBar(k2)) {
      var o2 = b._getScrollbarSize();
      o2 && (n2.marginRight = o2);
    }
    b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n2.overflow = "hidden");
    var r2 = b.st.mainClass;
    return b.isIE7 && (r2 += " mfp-ie7"), r2 && b._addClassToMFP(r2), b.updateItemHTML(), y("BuildControls"), a("html").css(n2), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function() {
      b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn);
    }, 16), b.isOpen = true, b.updateSize(k2), y(m), c2;
  }, close: function() {
    b.isOpen && (y(i), b.isOpen = false, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function() {
      b._close();
    }, b.st.removalDelay)) : b._close());
  }, _close: function() {
    y(h);
    var c2 = r + " " + q + " ";
    if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c2 += b.st.mainClass + " "), b._removeClassFromMFP(c2), b.fixedContentPos) {
      var e2 = { marginRight: "" };
      b.isIE7 ? a("body, html").css("overflow", "") : e2.overflow = "", a("html").css(e2);
    }
    d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== true || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b.st.autoFocusLast && b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j);
  }, updateSize: function(a2) {
    if (b.isIOS) {
      var c2 = document.documentElement.clientWidth / window.innerWidth, d2 = window.innerHeight * c2;
      b.wrap.css("height", d2), b.wH = d2;
    } else b.wH = a2 || v.height();
    b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize");
  }, updateItemHTML: function() {
    var c2 = b.items[b.index];
    b.contentContainer.detach(), b.content && b.content.detach(), c2.parsed || (c2 = b.parseEl(b.index));
    var d2 = c2.type;
    if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d2]), b.currItem = c2, !b.currTemplate[d2]) {
      var f2 = b.st[d2] ? b.st[d2].markup : false;
      y("FirstMarkupParse", f2), f2 ? b.currTemplate[d2] = a(f2) : b.currTemplate[d2] = true;
    }
    e && e !== c2.type && b.container.removeClass("mfp-" + e + "-holder");
    var g2 = b["get" + d2.charAt(0).toUpperCase() + d2.slice(1)](c2, b.currTemplate[d2]);
    b.appendContent(g2, d2), c2.preloaded = true, y(n, c2), e = c2.type, b.container.prepend(b.contentContainer), y("AfterChange");
  }, appendContent: function(a2, c2) {
    b.content = a2, a2 ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c2] === true ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a2 : b.content = "", y(k), b.container.addClass("mfp-" + c2 + "-holder"), b.contentContainer.append(b.content);
  }, parseEl: function(c2) {
    var d2, e2 = b.items[c2];
    if (e2.tagName ? e2 = { el: a(e2) } : (d2 = e2.type, e2 = { data: e2, src: e2.src }), e2.el) {
      for (var f2 = b.types, g2 = 0; g2 < f2.length; g2++) if (e2.el.hasClass("mfp-" + f2[g2])) {
        d2 = f2[g2];
        break;
      }
      e2.src = e2.el.attr("data-mfp-src"), e2.src || (e2.src = e2.el.attr("href"));
    }
    return e2.type = d2 || b.st.type || "inline", e2.index = c2, e2.parsed = true, b.items[c2] = e2, y("ElementParse", e2), b.items[c2];
  }, addGroup: function(a2, c2) {
    var d2 = function(d3) {
      d3.mfpEl = this, b._openClick(d3, a2, c2);
    };
    c2 || (c2 = {});
    var e2 = "click.magnificPopup";
    c2.mainEl = a2, c2.items ? (c2.isObj = true, a2.off(e2).on(e2, d2)) : (c2.isObj = false, c2.delegate ? a2.off(e2).on(e2, c2.delegate, d2) : (c2.items = a2, a2.off(e2).on(e2, d2)));
  }, _openClick: function(c2, d2, e2) {
    var f2 = void 0 !== e2.midClick ? e2.midClick : a.magnificPopup.defaults.midClick;
    if (f2 || !(2 === c2.which || c2.ctrlKey || c2.metaKey || c2.altKey || c2.shiftKey)) {
      var g2 = void 0 !== e2.disableOn ? e2.disableOn : a.magnificPopup.defaults.disableOn;
      if (g2) {
        if (a.isFunction(g2)) {
          if (!g2.call(b)) return true;
        } else if (v.width() < g2) return true;
      }
      c2.type && (c2.preventDefault(), b.isOpen && c2.stopPropagation()), e2.el = a(c2.mfpEl), e2.delegate && (e2.items = d2.find(e2.delegate)), b.open(e2);
    }
  }, updateStatus: function(a2, d2) {
    if (b.preloader) {
      c !== a2 && b.container.removeClass("mfp-s-" + c), d2 || "loading" !== a2 || (d2 = b.st.tLoading);
      var e2 = { status: a2, text: d2 };
      y("UpdateStatus", e2), a2 = e2.status, d2 = e2.text, b.preloader.html(d2), b.preloader.find("a").on("click", function(a3) {
        a3.stopImmediatePropagation();
      }), b.container.addClass("mfp-s-" + a2), c = a2;
    }
  }, _checkIfClose: function(c2) {
    if (!a(c2).hasClass(s)) {
      var d2 = b.st.closeOnContentClick, e2 = b.st.closeOnBgClick;
      if (d2 && e2) return true;
      if (!b.content || a(c2).hasClass("mfp-close") || b.preloader && c2 === b.preloader[0]) return true;
      if (c2 === b.content[0] || a.contains(b.content[0], c2)) {
        if (d2) return true;
      } else if (e2 && a.contains(document, c2)) return true;
      return false;
    }
  }, _addClassToMFP: function(a2) {
    b.bgOverlay.addClass(a2), b.wrap.addClass(a2);
  }, _removeClassFromMFP: function(a2) {
    this.bgOverlay.removeClass(a2), b.wrap.removeClass(a2);
  }, _hasScrollBar: function(a2) {
    return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a2 || v.height());
  }, _setFocus: function() {
    (b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus();
  }, _onFocusIn: function(c2) {
    return c2.target === b.wrap[0] || a.contains(b.wrap[0], c2.target) ? void 0 : (b._setFocus(), false);
  }, _parseMarkup: function(b2, c2, d2) {
    var e2;
    d2.data && (c2 = a.extend(d2.data, c2)), y(l, [b2, c2, d2]), a.each(c2, function(c3, d3) {
      if (void 0 === d3 || d3 === false) return true;
      if (e2 = c3.split("_"), e2.length > 1) {
        var f2 = b2.find(p + "-" + e2[0]);
        if (f2.length > 0) {
          var g2 = e2[1];
          "replaceWith" === g2 ? f2[0] !== d3[0] && f2.replaceWith(d3) : "img" === g2 ? f2.is("img") ? f2.attr("src", d3) : f2.replaceWith(a("<img>").attr("src", d3).attr("class", f2.attr("class"))) : f2.attr(e2[1], d3);
        }
      } else b2.find(p + "-" + c3).html(d3);
    });
  }, _getScrollbarSize: function() {
    if (void 0 === b.scrollbarSize) {
      var a2 = document.createElement("div");
      a2.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a2), b.scrollbarSize = a2.offsetWidth - a2.clientWidth, document.body.removeChild(a2);
    }
    return b.scrollbarSize;
  } }, a.magnificPopup = { instance: null, proto: t.prototype, modules: [], open: function(b2, c2) {
    return A(), b2 = b2 ? a.extend(true, {}, b2) : {}, b2.isObj = true, b2.index = c2 || 0, this.instance.open(b2);
  }, close: function() {
    return a.magnificPopup.instance && a.magnificPopup.instance.close();
  }, registerModule: function(b2, c2) {
    c2.options && (a.magnificPopup.defaults[b2] = c2.options), a.extend(this.proto, c2.proto), this.modules.push(b2);
  }, defaults: { disableOn: 0, key: null, midClick: false, mainClass: "", preloader: true, focus: "", closeOnContentClick: false, closeOnBgClick: true, closeBtnInside: true, showCloseBtn: true, enableEscapeKey: true, modal: false, alignTop: false, removalDelay: 0, prependTo: null, fixedContentPos: "auto", fixedBgPos: "auto", overflowY: "auto", closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>', tClose: "Close (Esc)", tLoading: "Loading...", autoFocusLast: true } }, a.fn.magnificPopup = function(c2) {
    A();
    var d2 = a(this);
    if ("string" == typeof c2) if ("open" === c2) {
      var e2, f2 = u ? d2.data("magnificPopup") : d2[0].magnificPopup, g2 = parseInt(arguments[1], 10) || 0;
      f2.items ? e2 = f2.items[g2] : (e2 = d2, f2.delegate && (e2 = e2.find(f2.delegate)), e2 = e2.eq(g2)), b._openClick({ mfpEl: e2 }, d2, f2);
    } else b.isOpen && b[c2].apply(b, Array.prototype.slice.call(arguments, 1));
    else c2 = a.extend(true, {}, c2), u ? d2.data("magnificPopup", c2) : d2[0].magnificPopup = c2, b.addGroup(d2, c2);
    return d2;
  };
  var C, D, E, F = "inline", G = function() {
    E && (D.after(E.addClass(C)).detach(), E = null);
  };
  a.magnificPopup.registerModule(F, { options: { hiddenClass: "hide", markup: "", tNotFound: "Content not found" }, proto: { initInline: function() {
    b.types.push(F), w(h + "." + F, function() {
      G();
    });
  }, getInline: function(c2, d2) {
    if (G(), c2.src) {
      var e2 = b.st.inline, f2 = a(c2.src);
      if (f2.length) {
        var g2 = f2[0].parentNode;
        g2 && g2.tagName && (D || (C = e2.hiddenClass, D = x(C), C = "mfp-" + C), E = f2.after(D).detach().removeClass(C)), b.updateStatus("ready");
      } else b.updateStatus("error", e2.tNotFound), f2 = a("<div>");
      return c2.inlineElement = f2, f2;
    }
    return b.updateStatus("ready"), b._parseMarkup(d2, {}, c2), d2;
  } } });
  var H, I = "ajax", J = function() {
    H && a(document.body).removeClass(H);
  }, K = function() {
    J(), b.req && b.req.abort();
  };
  a.magnificPopup.registerModule(I, { options: { settings: null, cursor: "mfp-ajax-cur", tError: '<a href="%url%">The content</a> could not be loaded.' }, proto: { initAjax: function() {
    b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K);
  }, getAjax: function(c2) {
    H && a(document.body).addClass(H), b.updateStatus("loading");
    var d2 = a.extend({ url: c2.src, success: function(d3, e2, f2) {
      var g2 = { data: d3, xhr: f2 };
      y("ParseAjax", g2), b.appendContent(a(g2.data), I), c2.finished = true, J(), b._setFocus(), setTimeout(function() {
        b.wrap.addClass(q);
      }, 16), b.updateStatus("ready"), y("AjaxContentAdded");
    }, error: function() {
      J(), c2.finished = c2.loadError = true, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c2.src));
    } }, b.st.ajax.settings);
    return b.req = a.ajax(d2), "";
  } } });
  var L, M = function(c2) {
    if (c2.data && void 0 !== c2.data.title) return c2.data.title;
    var d2 = b.st.image.titleSrc;
    if (d2) {
      if (a.isFunction(d2)) return d2.call(b, c2);
      if (c2.el) return c2.el.attr(d2) || "";
    }
    return "";
  };
  a.magnificPopup.registerModule("image", { options: { markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>', cursor: "mfp-zoom-out-cur", titleSrc: "title", verticalFit: true, tError: '<a href="%url%">The image</a> could not be loaded.' }, proto: { initImage: function() {
    var c2 = b.st.image, d2 = ".image";
    b.types.push("image"), w(m + d2, function() {
      "image" === b.currItem.type && c2.cursor && a(document.body).addClass(c2.cursor);
    }), w(h + d2, function() {
      c2.cursor && a(document.body).removeClass(c2.cursor), v.off("resize" + p);
    }), w("Resize" + d2, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage);
  }, resizeImage: function() {
    var a2 = b.currItem;
    if (a2 && a2.img && b.st.image.verticalFit) {
      var c2 = 0;
      b.isLowIE && (c2 = parseInt(a2.img.css("padding-top"), 10) + parseInt(a2.img.css("padding-bottom"), 10)), a2.img.css("max-height", b.wH - c2);
    }
  }, _onImageHasSize: function(a2) {
    a2.img && (a2.hasSize = true, L && clearInterval(L), a2.isCheckingImgSize = false, y("ImageHasSize", a2), a2.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a2.imgHidden = false));
  }, findImageSize: function(a2) {
    var c2 = 0, d2 = a2.img[0], e2 = function(f2) {
      L && clearInterval(L), L = setInterval(function() {
        return d2.naturalWidth > 0 ? void b._onImageHasSize(a2) : (c2 > 200 && clearInterval(L), c2++, void (3 === c2 ? e2(10) : 40 === c2 ? e2(50) : 100 === c2 && e2(500)));
      }, f2);
    };
    e2(1);
  }, getImage: function(c2, d2) {
    var e2 = 0, f2 = function() {
      c2 && (c2.img[0].complete ? (c2.img.off(".mfploader"), c2 === b.currItem && (b._onImageHasSize(c2), b.updateStatus("ready")), c2.hasSize = true, c2.loaded = true, y("ImageLoadComplete")) : (e2++, 200 > e2 ? setTimeout(f2, 100) : g2()));
    }, g2 = function() {
      c2 && (c2.img.off(".mfploader"), c2 === b.currItem && (b._onImageHasSize(c2), b.updateStatus("error", h2.tError.replace("%url%", c2.src))), c2.hasSize = true, c2.loaded = true, c2.loadError = true);
    }, h2 = b.st.image, i2 = d2.find(".mfp-img");
    if (i2.length) {
      var j2 = document.createElement("img");
      j2.className = "mfp-img", c2.el && c2.el.find("img").length && (j2.alt = c2.el.find("img").attr("alt")), c2.img = a(j2).on("load.mfploader", f2).on("error.mfploader", g2), j2.src = c2.src, i2.is("img") && (c2.img = c2.img.clone()), j2 = c2.img[0], j2.naturalWidth > 0 ? c2.hasSize = true : j2.width || (c2.hasSize = false);
    }
    return b._parseMarkup(d2, { title: M(c2), img_replaceWith: c2.img }, c2), b.resizeImage(), c2.hasSize ? (L && clearInterval(L), c2.loadError ? (d2.addClass("mfp-loading"), b.updateStatus("error", h2.tError.replace("%url%", c2.src))) : (d2.removeClass("mfp-loading"), b.updateStatus("ready")), d2) : (b.updateStatus("loading"), c2.loading = true, c2.hasSize || (c2.imgHidden = true, d2.addClass("mfp-loading"), b.findImageSize(c2)), d2);
  } } });
  var N, O = function() {
    return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N;
  };
  a.magnificPopup.registerModule("zoom", { options: { enabled: false, easing: "ease-in-out", duration: 300, opener: function(a2) {
    return a2.is("img") ? a2 : a2.find("img");
  } }, proto: { initZoom: function() {
    var a2, c2 = b.st.zoom, d2 = ".zoom";
    if (c2.enabled && b.supportsTransition) {
      var e2, f2, g2 = c2.duration, j2 = function(a3) {
        var b2 = a3.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"), d3 = "all " + c2.duration / 1e3 + "s " + c2.easing, e3 = { position: "fixed", zIndex: 9999, left: 0, top: 0, "-webkit-backface-visibility": "hidden" }, f3 = "transition";
        return e3["-webkit-" + f3] = e3["-moz-" + f3] = e3["-o-" + f3] = e3[f3] = d3, b2.css(e3), b2;
      }, k2 = function() {
        b.content.css("visibility", "visible");
      };
      w("BuildControls" + d2, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e2), b.content.css("visibility", "hidden"), a2 = b._getItemToZoom(), !a2) return void k2();
          f2 = j2(a2), f2.css(b._getOffset()), b.wrap.append(f2), e2 = setTimeout(function() {
            f2.css(b._getOffset(true)), e2 = setTimeout(function() {
              k2(), setTimeout(function() {
                f2.remove(), a2 = f2 = null, y("ZoomAnimationEnded");
              }, 16);
            }, g2);
          }, 16);
        }
      }), w(i + d2, function() {
        if (b._allowZoom()) {
          if (clearTimeout(e2), b.st.removalDelay = g2, !a2) {
            if (a2 = b._getItemToZoom(), !a2) return;
            f2 = j2(a2);
          }
          f2.css(b._getOffset(true)), b.wrap.append(f2), b.content.css("visibility", "hidden"), setTimeout(function() {
            f2.css(b._getOffset());
          }, 16);
        }
      }), w(h + d2, function() {
        b._allowZoom() && (k2(), f2 && f2.remove(), a2 = null);
      });
    }
  }, _allowZoom: function() {
    return "image" === b.currItem.type;
  }, _getItemToZoom: function() {
    return b.currItem.hasSize ? b.currItem.img : false;
  }, _getOffset: function(c2) {
    var d2;
    d2 = c2 ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
    var e2 = d2.offset(), f2 = parseInt(d2.css("padding-top"), 10), g2 = parseInt(d2.css("padding-bottom"), 10);
    e2.top -= a(window).scrollTop() - f2;
    var h2 = { width: d2.width(), height: (u ? d2.innerHeight() : d2[0].offsetHeight) - g2 - f2 };
    return O() ? h2["-moz-transform"] = h2.transform = "translate(" + e2.left + "px," + e2.top + "px)" : (h2.left = e2.left, h2.top = e2.top), h2;
  } } });
  var P = "iframe", Q = "//about:blank", R = function(a2) {
    if (b.currTemplate[P]) {
      var c2 = b.currTemplate[P].find("iframe");
      c2.length && (a2 || (c2[0].src = Q), b.isIE8 && c2.css("display", a2 ? "block" : "none"));
    }
  };
  a.magnificPopup.registerModule(P, { options: { markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>', srcAction: "iframe_src", patterns: { youtube: { index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1" }, vimeo: { index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1" }, gmaps: { index: "//maps.google.", src: "%id%&output=embed" } } }, proto: { initIframe: function() {
    b.types.push(P), w("BeforeChange", function(a2, b2, c2) {
      b2 !== c2 && (b2 === P ? R() : c2 === P && R(true));
    }), w(h + "." + P, function() {
      R();
    });
  }, getIframe: function(c2, d2) {
    var e2 = c2.src, f2 = b.st.iframe;
    a.each(f2.patterns, function() {
      return e2.indexOf(this.index) > -1 ? (this.id && (e2 = "string" == typeof this.id ? e2.substr(e2.lastIndexOf(this.id) + this.id.length, e2.length) : this.id.call(this, e2)), e2 = this.src.replace("%id%", e2), false) : void 0;
    });
    var g2 = {};
    return f2.srcAction && (g2[f2.srcAction] = e2), b._parseMarkup(d2, g2, c2), b.updateStatus("ready"), d2;
  } } });
  var S = function(a2) {
    var c2 = b.items.length;
    return a2 > c2 - 1 ? a2 - c2 : 0 > a2 ? c2 + a2 : a2;
  }, T = function(a2, b2, c2) {
    return a2.replace(/%curr%/gi, b2 + 1).replace(/%total%/gi, c2);
  };
  a.magnificPopup.registerModule("gallery", { options: { enabled: false, arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', preload: [0, 2], navigateByImgClick: true, arrows: true, tPrev: "Previous (Left arrow key)", tNext: "Next (Right arrow key)", tCounter: "%curr% of %total%" }, proto: { initGallery: function() {
    var c2 = b.st.gallery, e2 = ".mfp-gallery";
    return b.direction = true, c2 && c2.enabled ? (f += " mfp-gallery", w(m + e2, function() {
      c2.navigateByImgClick && b.wrap.on("click" + e2, ".mfp-img", function() {
        return b.items.length > 1 ? (b.next(), false) : void 0;
      }), d.on("keydown" + e2, function(a2) {
        37 === a2.keyCode ? b.prev() : 39 === a2.keyCode && b.next();
      });
    }), w("UpdateStatus" + e2, function(a2, c3) {
      c3.text && (c3.text = T(c3.text, b.currItem.index, b.items.length));
    }), w(l + e2, function(a2, d2, e3, f2) {
      var g2 = b.items.length;
      e3.counter = g2 > 1 ? T(c2.tCounter, f2.index, g2) : "";
    }), w("BuildControls" + e2, function() {
      if (b.items.length > 1 && c2.arrows && !b.arrowLeft) {
        var d2 = c2.arrowMarkup, e3 = b.arrowLeft = a(d2.replace(/%title%/gi, c2.tPrev).replace(/%dir%/gi, "left")).addClass(s), f2 = b.arrowRight = a(d2.replace(/%title%/gi, c2.tNext).replace(/%dir%/gi, "right")).addClass(s);
        e3.click(function() {
          b.prev();
        }), f2.click(function() {
          b.next();
        }), b.container.append(e3.add(f2));
      }
    }), w(n + e2, function() {
      b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function() {
        b.preloadNearbyImages(), b._preloadTimeout = null;
      }, 16);
    }), void w(h + e2, function() {
      d.off(e2), b.wrap.off("click" + e2), b.arrowRight = b.arrowLeft = null;
    })) : false;
  }, next: function() {
    b.direction = true, b.index = S(b.index + 1), b.updateItemHTML();
  }, prev: function() {
    b.direction = false, b.index = S(b.index - 1), b.updateItemHTML();
  }, goTo: function(a2) {
    b.direction = a2 >= b.index, b.index = a2, b.updateItemHTML();
  }, preloadNearbyImages: function() {
    var a2, c2 = b.st.gallery.preload, d2 = Math.min(c2[0], b.items.length), e2 = Math.min(c2[1], b.items.length);
    for (a2 = 1; a2 <= (b.direction ? e2 : d2); a2++) b._preloadItem(b.index + a2);
    for (a2 = 1; a2 <= (b.direction ? d2 : e2); a2++) b._preloadItem(b.index - a2);
  }, _preloadItem: function(c2) {
    if (c2 = S(c2), !b.items[c2].preloaded) {
      var d2 = b.items[c2];
      d2.parsed || (d2 = b.parseEl(c2)), y("LazyLoad", d2), "image" === d2.type && (d2.img = a('<img class="mfp-img" />').on("load.mfploader", function() {
        d2.hasSize = true;
      }).on("error.mfploader", function() {
        d2.hasSize = true, d2.loadError = true, y("LazyLoadError", d2);
      }).attr("src", d2.src)), d2.preloaded = true;
    }
  } } });
  var U = "retina";
  a.magnificPopup.registerModule(U, { options: { replaceSrc: function(a2) {
    return a2.src.replace(/\.\w+$/, function(a3) {
      return "@2x" + a3;
    });
  }, ratio: 1 }, proto: { initRetina: function() {
    if (window.devicePixelRatio > 1) {
      var a2 = b.st.retina, c2 = a2.ratio;
      c2 = isNaN(c2) ? c2() : c2, c2 > 1 && (w("ImageHasSize." + U, function(a3, b2) {
        b2.img.css({ "max-width": b2.img[0].naturalWidth / c2, width: "100%" });
      }), w("ElementParse." + U, function(b2, d2) {
        d2.src = a2.replaceSrc(d2, c2);
      }));
    }
  } } }), A();
});
/*! WOW wow.js - v1.3.0 - 2016-10-04
* https://wowjs.uk
* Copyright (c) 2016 Thomas Grainger; Licensed MIT */
!function(a, b) {
  if ("function" == typeof define && define.amd) define(["module", "exports"], b);
  else if ("undefined" != typeof exports) b(module, exports);
  else {
    var c = { exports: {} };
    b(c, c.exports), a.WOW = c.exports;
  }
}(this, function(a, b) {
  "use strict";
  function c(a2, b2) {
    if (!(a2 instanceof b2)) throw new TypeError("Cannot call a class as a function");
  }
  function d(a2, b2) {
    return b2.indexOf(a2) >= 0;
  }
  function e(a2, b2) {
    for (var c2 in b2) if (null == a2[c2]) {
      var d2 = b2[c2];
      a2[c2] = d2;
    }
    return a2;
  }
  function f(a2) {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a2);
  }
  function g(a2) {
    var b2 = arguments.length <= 1 || void 0 === arguments[1] ? false : arguments[1], c2 = arguments.length <= 2 || void 0 === arguments[2] ? false : arguments[2], d2 = arguments.length <= 3 || void 0 === arguments[3] ? null : arguments[3], e2 = void 0;
    return null != document.createEvent ? (e2 = document.createEvent("CustomEvent"), e2.initCustomEvent(a2, b2, c2, d2)) : null != document.createEventObject ? (e2 = document.createEventObject(), e2.eventType = a2) : e2.eventName = a2, e2;
  }
  function h(a2, b2) {
    null != a2.dispatchEvent ? a2.dispatchEvent(b2) : b2 in (null != a2) ? a2[b2]() : "on" + b2 in (null != a2) && a2["on" + b2]();
  }
  function i(a2, b2, c2) {
    null != a2.addEventListener ? a2.addEventListener(b2, c2, false) : null != a2.attachEvent ? a2.attachEvent("on" + b2, c2) : a2[b2] = c2;
  }
  function j(a2, b2, c2) {
    null != a2.removeEventListener ? a2.removeEventListener(b2, c2, false) : null != a2.detachEvent ? a2.detachEvent("on" + b2, c2) : delete a2[b2];
  }
  function k() {
    return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight;
  }
  Object.defineProperty(b, "__esModule", { value: true });
  var l, m, n = /* @__PURE__ */ function() {
    function a2(a3, b2) {
      for (var c2 = 0; c2 < b2.length; c2++) {
        var d2 = b2[c2];
        d2.enumerable = d2.enumerable || false, d2.configurable = true, "value" in d2 && (d2.writable = true), Object.defineProperty(a3, d2.key, d2);
      }
    }
    return function(b2, c2, d2) {
      return c2 && a2(b2.prototype, c2), d2 && a2(b2, d2), b2;
    };
  }(), o = window.WeakMap || window.MozWeakMap || function() {
    function a2() {
      c(this, a2), this.keys = [], this.values = [];
    }
    return n(a2, [{ key: "get", value: function(a3) {
      for (var b2 = 0; b2 < this.keys.length; b2++) {
        var c2 = this.keys[b2];
        if (c2 === a3) return this.values[b2];
      }
    } }, { key: "set", value: function(a3, b2) {
      for (var c2 = 0; c2 < this.keys.length; c2++) {
        var d2 = this.keys[c2];
        if (d2 === a3) return this.values[c2] = b2, this;
      }
      return this.keys.push(a3), this.values.push(b2), this;
    } }]), a2;
  }(), p = window.MutationObserver || window.WebkitMutationObserver || window.MozMutationObserver || (m = l = function() {
    function a2() {
      c(this, a2), "undefined" != typeof console && null !== console && (console.warn("MutationObserver is not supported by your browser."), console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content."));
    }
    return n(a2, [{ key: "observe", value: function() {
    } }]), a2;
  }(), l.notSupported = true, m), q = window.getComputedStyle || function(a2) {
    var b2 = /(\-([a-z]){1})/g;
    return { getPropertyValue: function(c2) {
      "float" === c2 && (c2 = "styleFloat"), b2.test(c2) && c2.replace(b2, function(a3, b3) {
        return b3.toUpperCase();
      });
      var d2 = a2.currentStyle;
      return (null != d2 ? d2[c2] : void 0) || null;
    } };
  }, r = function() {
    function a2() {
      var b2 = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0];
      c(this, a2), this.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: true, live: true, callback: null, scrollContainer: null, resetAnimation: true }, this.animate = function() {
        return "requestAnimationFrame" in window ? function(a3) {
          return window.requestAnimationFrame(a3);
        } : function(a3) {
          return a3();
        };
      }(), this.vendors = ["moz", "webkit"], this.start = this.start.bind(this), this.resetAnimation = this.resetAnimation.bind(this), this.scrollHandler = this.scrollHandler.bind(this), this.scrollCallback = this.scrollCallback.bind(this), this.scrolled = true, this.config = e(b2, this.defaults), null != b2.scrollContainer && (this.config.scrollContainer = document.querySelector(b2.scrollContainer)), this.animationNameCache = new o(), this.wowEvent = g(this.config.boxClass);
    }
    return n(a2, [{ key: "init", value: function() {
      this.element = window.document.documentElement, d(document.readyState, ["interactive", "complete"]) ? this.start() : i(document, "DOMContentLoaded", this.start), this.finished = [];
    } }, { key: "start", value: function() {
      var a3 = this;
      if (this.stopped = false, this.boxes = [].slice.call(this.element.querySelectorAll("." + this.config.boxClass)), this.all = this.boxes.slice(0), this.boxes.length) if (this.disabled()) this.resetStyle();
      else for (var b2 = 0; b2 < this.boxes.length; b2++) {
        var c2 = this.boxes[b2];
        this.applyStyle(c2, true);
      }
      if (this.disabled() || (i(this.config.scrollContainer || window, "scroll", this.scrollHandler), i(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live) {
        var d2 = new p(function(b3) {
          for (var c3 = 0; c3 < b3.length; c3++) for (var d3 = b3[c3], e2 = 0; e2 < d3.addedNodes.length; e2++) {
            var f2 = d3.addedNodes[e2];
            a3.doSync(f2);
          }
        });
        d2.observe(document.body, { childList: true, subtree: true });
      }
    } }, { key: "stop", value: function() {
      this.stopped = true, j(this.config.scrollContainer || window, "scroll", this.scrollHandler), j(window, "resize", this.scrollHandler), null != this.interval && clearInterval(this.interval);
    } }, { key: "sync", value: function() {
      p.notSupported && this.doSync(this.element);
    } }, { key: "doSync", value: function(a3) {
      if ("undefined" != typeof a3 && null !== a3 || (a3 = this.element), 1 === a3.nodeType) {
        a3 = a3.parentNode || a3;
        for (var b2 = a3.querySelectorAll("." + this.config.boxClass), c2 = 0; c2 < b2.length; c2++) {
          var e2 = b2[c2];
          d(e2, this.all) || (this.boxes.push(e2), this.all.push(e2), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(e2, true), this.scrolled = true);
        }
      }
    } }, { key: "show", value: function(a3) {
      return this.applyStyle(a3), a3.className = a3.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a3), h(a3, this.wowEvent), this.config.resetAnimation && (i(a3, "animationend", this.resetAnimation), i(a3, "oanimationend", this.resetAnimation), i(a3, "webkitAnimationEnd", this.resetAnimation), i(a3, "MSAnimationEnd", this.resetAnimation)), a3;
    } }, { key: "applyStyle", value: function(a3, b2) {
      var c2 = this, d2 = a3.getAttribute("data-wow-duration"), e2 = a3.getAttribute("data-wow-delay"), f2 = a3.getAttribute("data-wow-iteration");
      return this.animate(function() {
        return c2.customStyle(a3, b2, d2, e2, f2);
      });
    } }, { key: "resetStyle", value: function() {
      for (var a3 = 0; a3 < this.boxes.length; a3++) {
        var b2 = this.boxes[a3];
        b2.style.visibility = "visible";
      }
    } }, { key: "resetAnimation", value: function(a3) {
      if (a3.type.toLowerCase().indexOf("animationend") >= 0) {
        var b2 = a3.target || a3.srcElement;
        b2.className = b2.className.replace(this.config.animateClass, "").trim();
      }
    } }, { key: "customStyle", value: function(a3, b2, c2, d2, e2) {
      return b2 && this.cacheAnimationName(a3), a3.style.visibility = b2 ? "hidden" : "visible", c2 && this.vendorSet(a3.style, { animationDuration: c2 }), d2 && this.vendorSet(a3.style, { animationDelay: d2 }), e2 && this.vendorSet(a3.style, { animationIterationCount: e2 }), this.vendorSet(a3.style, { animationName: b2 ? "none" : this.cachedAnimationName(a3) }), a3;
    } }, { key: "vendorSet", value: function(a3, b2) {
      for (var c2 in b2) if (b2.hasOwnProperty(c2)) {
        var d2 = b2[c2];
        a3["" + c2] = d2;
        for (var e2 = 0; e2 < this.vendors.length; e2++) {
          var f2 = this.vendors[e2];
          a3["" + f2 + c2.charAt(0).toUpperCase() + c2.substr(1)] = d2;
        }
      }
    } }, { key: "vendorCSS", value: function(a3, b2) {
      for (var c2 = q(a3), d2 = c2.getPropertyCSSValue(b2), e2 = 0; e2 < this.vendors.length; e2++) {
        var f2 = this.vendors[e2];
        d2 = d2 || c2.getPropertyCSSValue("-" + f2 + "-" + b2);
      }
      return d2;
    } }, { key: "animationName", value: function(a3) {
      var b2 = void 0;
      try {
        b2 = this.vendorCSS(a3, "animation-name").cssText;
      } catch (c2) {
        b2 = q(a3).getPropertyValue("animation-name");
      }
      return "none" === b2 ? "" : b2;
    } }, { key: "cacheAnimationName", value: function(a3) {
      return this.animationNameCache.set(a3, this.animationName(a3));
    } }, { key: "cachedAnimationName", value: function(a3) {
      return this.animationNameCache.get(a3);
    } }, { key: "scrollHandler", value: function() {
      this.scrolled = true;
    } }, { key: "scrollCallback", value: function() {
      if (this.scrolled) {
        this.scrolled = false;
        for (var a3 = [], b2 = 0; b2 < this.boxes.length; b2++) {
          var c2 = this.boxes[b2];
          if (c2) {
            if (this.isVisible(c2)) {
              this.show(c2);
              continue;
            }
            a3.push(c2);
          }
        }
        this.boxes = a3, this.boxes.length || this.config.live || this.stop();
      }
    } }, { key: "offsetTop", value: function(a3) {
      for (; void 0 === a3.offsetTop; ) a3 = a3.parentNode;
      for (var b2 = a3.offsetTop; a3.offsetParent; ) a3 = a3.offsetParent, b2 += a3.offsetTop;
      return b2;
    } }, { key: "isVisible", value: function(a3) {
      var b2 = a3.getAttribute("data-wow-offset") || this.config.offset, c2 = this.config.scrollContainer && this.config.scrollContainer.scrollTop || window.pageYOffset, d2 = c2 + Math.min(this.element.clientHeight, k()) - b2, e2 = this.offsetTop(a3), f2 = e2 + a3.clientHeight;
      return d2 >= e2 && f2 >= c2;
    } }, { key: "disabled", value: function() {
      return !this.config.mobile && f(navigator.userAgent);
    } }]), a2;
  }();
  b["default"] = r, a.exports = b["default"];
});
/*!
 * GSAP 3.11.2
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
!function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {});
}(this, function(t) {
  "use strict";
  function e(t2, e2) {
    t2.prototype = Object.create(e2.prototype), (t2.prototype.constructor = t2).__proto__ = e2;
  }
  function r(t2) {
    if (void 0 === t2) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return t2;
  }
  function i(t2) {
    return "string" == typeof t2;
  }
  function n(t2) {
    return "function" == typeof t2;
  }
  function s(t2) {
    return "number" == typeof t2;
  }
  function a(t2) {
    return void 0 === t2;
  }
  function o(t2) {
    return "object" == typeof t2;
  }
  function u(t2) {
    return false !== t2;
  }
  function h() {
    return "undefined" != typeof window;
  }
  function f(t2) {
    return n(t2) || i(t2);
  }
  function l(t2) {
    return (Mt = we(t2, fe)) && Br;
  }
  function c(t2, e2) {
    return console.warn("Invalid property", t2, "set to", e2, "Missing plugin? gsap.registerPlugin()");
  }
  function p(t2, e2) {
    return !e2 && console.warn(t2);
  }
  function _(t2, e2) {
    return t2 && (fe[t2] = e2) && Mt && (Mt[t2] = e2) || fe;
  }
  function d() {
    return 0;
  }
  function m(t2) {
    var e2, r2, i2 = t2[0];
    if (o(i2) || n(i2) || (t2 = [t2]), !(e2 = (i2._gsap || {}).harness)) {
      for (r2 = xe.length; r2-- && !xe[r2].targetTest(i2); ) ;
      e2 = xe[r2];
    }
    for (r2 = t2.length; r2--; ) t2[r2] && (t2[r2]._gsap || (t2[r2]._gsap = new Qe(t2[r2], e2))) || t2.splice(r2, 1);
    return t2;
  }
  function g(t2) {
    return t2._gsap || m(De(t2))[0]._gsap;
  }
  function v(t2, e2, r2) {
    return (r2 = t2[e2]) && n(r2) ? t2[e2]() : a(r2) && t2.getAttribute && t2.getAttribute(e2) || r2;
  }
  function y(t2, e2) {
    return (t2 = t2.split(",")).forEach(e2) || t2;
  }
  function x(t2) {
    return Math.round(1e5 * t2) / 1e5 || 0;
  }
  function T(t2) {
    return Math.round(1e7 * t2) / 1e7 || 0;
  }
  function w(t2, e2) {
    var r2 = e2.charAt(0), i2 = parseFloat(e2.substr(2));
    return t2 = parseFloat(t2), "+" === r2 ? t2 + i2 : "-" === r2 ? t2 - i2 : "*" === r2 ? t2 * i2 : t2 / i2;
  }
  function b(t2, e2) {
    for (var r2 = e2.length, i2 = 0; t2.indexOf(e2[i2]) < 0 && ++i2 < r2; ) ;
    return i2 < r2;
  }
  function M() {
    var t2, e2, r2 = de.length, i2 = de.slice(0);
    for (me = {}, t2 = de.length = 0; t2 < r2; t2++) (e2 = i2[t2]) && e2._lazy && (e2.render(e2._lazy[0], e2._lazy[1], true)._lazy = 0);
  }
  function O(t2, e2, r2, i2) {
    de.length && M(), t2.render(e2, r2, i2 || vt && e2 < 0 && (t2._initted || t2._startAt)), de.length && M();
  }
  function k(t2) {
    var e2 = parseFloat(t2);
    return (e2 || 0 === e2) && (t2 + "").match(ue).length < 2 ? e2 : i(t2) ? t2.trim() : t2;
  }
  function C(t2) {
    return t2;
  }
  function A(t2, e2) {
    for (var r2 in e2) r2 in t2 || (t2[r2] = e2[r2]);
    return t2;
  }
  function D(t2, e2) {
    for (var r2 in e2) "__proto__" !== r2 && "constructor" !== r2 && "prototype" !== r2 && (t2[r2] = o(e2[r2]) ? D(t2[r2] || (t2[r2] = {}), e2[r2]) : e2[r2]);
    return t2;
  }
  function P(t2, e2) {
    var r2, i2 = {};
    for (r2 in t2) r2 in e2 || (i2[r2] = t2[r2]);
    return i2;
  }
  function S(t2) {
    var e2 = t2.parent || xt, r2 = t2.keyframes ? /* @__PURE__ */ function(t3) {
      return function(e3, r3) {
        for (var i2 in r3) i2 in e3 || "duration" === i2 && t3 || "ease" === i2 || (e3[i2] = r3[i2]);
      };
    }(re(t2.keyframes)) : A;
    if (u(t2.inherit)) for (; e2; ) r2(t2, e2.vars.defaults), e2 = e2.parent || e2._dp;
    return t2;
  }
  function E(t2, e2, r2, i2, n2) {
    void 0 === r2 && (r2 = "_first"), void 0 === i2 && (i2 = "_last");
    var s2, a2 = t2[i2];
    if (n2) for (s2 = e2[n2]; a2 && a2[n2] > s2; ) a2 = a2._prev;
    return a2 ? (e2._next = a2._next, a2._next = e2) : (e2._next = t2[r2], t2[r2] = e2), e2._next ? e2._next._prev = e2 : t2[i2] = e2, e2._prev = a2, e2.parent = e2._dp = t2, e2;
  }
  function R(t2, e2, r2, i2) {
    void 0 === r2 && (r2 = "_first"), void 0 === i2 && (i2 = "_last");
    var n2 = e2._prev, s2 = e2._next;
    n2 ? n2._next = s2 : t2[r2] === e2 && (t2[r2] = s2), s2 ? s2._prev = n2 : t2[i2] === e2 && (t2[i2] = n2), e2._next = e2._prev = e2.parent = null;
  }
  function z(t2, e2) {
    !t2.parent || e2 && !t2.parent.autoRemoveChildren || t2.parent.remove(t2), t2._act = 0;
  }
  function F(t2, e2) {
    if (t2 && (!e2 || e2._end > t2._dur || e2._start < 0)) for (var r2 = t2; r2; ) r2._dirty = 1, r2 = r2.parent;
    return t2;
  }
  function B(t2, e2, r2, i2) {
    return t2._startAt && (vt ? t2._startAt.revert(ce) : t2.vars.immediateRender && !t2.vars.autoRevert || t2._startAt.render(e2, true, i2));
  }
  function L(t2) {
    return t2._repeat ? be(t2._tTime, t2 = t2.duration() + t2._rDelay) * t2 : 0;
  }
  function I(t2, e2) {
    return (t2 - e2._start) * e2._ts + (0 <= e2._ts ? 0 : e2._dirty ? e2.totalDuration() : e2._tDur);
  }
  function Y(t2) {
    return t2._end = T(t2._start + (t2._tDur / Math.abs(t2._ts || t2._rts || Wt) || 0));
  }
  function U(t2, e2) {
    var r2 = t2._dp;
    return r2 && r2.smoothChildTiming && t2._ts && (t2._start = T(r2._time - (0 < t2._ts ? e2 / t2._ts : ((t2._dirty ? t2.totalDuration() : t2._tDur) - e2) / -t2._ts)), Y(t2), r2._dirty || F(r2, t2)), t2;
  }
  function X(t2, e2) {
    var r2;
    if ((e2._time || e2._initted && !e2._dur) && (r2 = I(t2.rawTime(), e2), (!e2._dur || Ce(0, e2.totalDuration(), r2) - e2._tTime > Wt) && e2.render(r2, true)), F(t2, e2)._dp && t2._initted && t2._time >= t2._dur && t2._ts) {
      if (t2._dur < t2.duration()) for (r2 = t2; r2._dp; ) 0 <= r2.rawTime() && r2.totalTime(r2._tTime), r2 = r2._dp;
      t2._zTime = -Wt;
    }
  }
  function N(t2, e2, r2, i2) {
    return e2.parent && z(e2), e2._start = T((s(r2) ? r2 : r2 || t2 !== xt ? ke(t2, r2, e2) : t2._time) + e2._delay), e2._end = T(e2._start + (e2.totalDuration() / Math.abs(e2.timeScale()) || 0)), E(t2, e2, "_first", "_last", t2._sort ? "_start" : 0), Me(e2) || (t2._recent = e2), i2 || X(t2, e2), t2._ts < 0 && U(t2, t2._tTime), t2;
  }
  function q(t2, e2) {
    return (fe.ScrollTrigger || c("scrollTrigger", e2)) && fe.ScrollTrigger.create(e2, t2);
  }
  function V(t2, e2, r2, i2, n2) {
    return er(t2, e2, n2), t2._initted ? !r2 && t2._pt && !vt && (t2._dur && false !== t2.vars.lazy || !t2._dur && t2.vars.lazy) && kt !== Be.frame ? (de.push(t2), t2._lazy = [n2, i2], 1) : void 0 : 1;
  }
  function j(t2, e2, r2, i2) {
    var n2 = t2._repeat, s2 = T(e2) || 0, a2 = t2._tTime / t2._tDur;
    return a2 && !i2 && (t2._time *= s2 / t2._dur), t2._dur = s2, t2._tDur = n2 ? n2 < 0 ? 1e10 : T(s2 * (n2 + 1) + t2._rDelay * n2) : s2, 0 < a2 && !i2 && U(t2, t2._tTime = t2._tDur * a2), t2.parent && Y(t2), r2 || F(t2.parent, t2), t2;
  }
  function Q(t2) {
    return t2 instanceof He ? F(t2) : j(t2, t2._dur);
  }
  function G(t2, e2, r2) {
    var i2, n2, a2 = s(e2[1]), o2 = (a2 ? 2 : 1) + (t2 < 2 ? 0 : 1), h2 = e2[o2];
    if (a2 && (h2.duration = e2[1]), h2.parent = r2, t2) {
      for (i2 = h2, n2 = r2; n2 && !("immediateRender" in i2); ) i2 = n2.vars.defaults || {}, n2 = u(n2.vars.inherit) && n2.parent;
      h2.immediateRender = u(i2.immediateRender), t2 < 2 ? h2.runBackwards = 1 : h2.startAt = e2[o2 - 1];
    }
    return new sr(e2[0], h2, e2[1 + o2]);
  }
  function W(t2, e2) {
    return t2 || 0 === t2 ? e2(t2) : e2;
  }
  function H(t2, e2) {
    return i(t2) && (e2 = he.exec(t2)) ? e2[1] : "";
  }
  function Z(t2, e2) {
    return t2 && o(t2) && "length" in t2 && (!e2 && !t2.length || t2.length - 1 in t2 && o(t2[0])) && !t2.nodeType && t2 !== Tt;
  }
  function $(t2) {
    return t2 = De(t2)[0] || p("Invalid scope") || {}, function(e2) {
      var r2 = t2.current || t2.nativeElement || t2;
      return De(e2, r2.querySelectorAll ? r2 : r2 === t2 ? p("Invalid scope") || bt.createElement("div") : t2);
    };
  }
  function J(t2) {
    return t2.sort(function() {
      return 0.5 - Math.random();
    });
  }
  function K(t2) {
    if (n(t2)) return t2;
    var e2 = o(t2) ? t2 : { each: t2 }, r2 = Ne(e2.ease), s2 = e2.from || 0, a2 = parseFloat(e2.base) || 0, u2 = {}, h2 = 0 < s2 && s2 < 1, f2 = isNaN(s2) || h2, l2 = e2.axis, c2 = s2, p2 = s2;
    return i(s2) ? c2 = p2 = { center: 0.5, edges: 0.5, end: 1 }[s2] || 0 : !h2 && f2 && (c2 = s2[0], p2 = s2[1]), function(t3, i2, n2) {
      var o2, h3, _2, d2, m2, g2, v2, y2, x2, w2 = (n2 || e2).length, b2 = u2[w2];
      if (!b2) {
        if (!(x2 = "auto" === e2.grid ? 0 : (e2.grid || [1, Gt])[1])) {
          for (v2 = -Gt; v2 < (v2 = n2[x2++].getBoundingClientRect().left) && x2 < w2; ) ;
          x2--;
        }
        for (b2 = u2[w2] = [], o2 = f2 ? Math.min(x2, w2) * c2 - 0.5 : s2 % x2, h3 = x2 === Gt ? 0 : f2 ? w2 * p2 / x2 - 0.5 : s2 / x2 | 0, y2 = Gt, g2 = v2 = 0; g2 < w2; g2++) _2 = g2 % x2 - o2, d2 = h3 - (g2 / x2 | 0), b2[g2] = m2 = l2 ? Math.abs("y" === l2 ? d2 : _2) : Jt(_2 * _2 + d2 * d2), v2 < m2 && (v2 = m2), m2 < y2 && (y2 = m2);
        "random" === s2 && J(b2), b2.max = v2 - y2, b2.min = y2, b2.v = w2 = (parseFloat(e2.amount) || parseFloat(e2.each) * (w2 < x2 ? w2 - 1 : l2 ? "y" === l2 ? w2 / x2 : x2 : Math.max(x2, w2 / x2)) || 0) * ("edges" === s2 ? -1 : 1), b2.b = w2 < 0 ? a2 - w2 : a2, b2.u = H(e2.amount || e2.each) || 0, r2 = r2 && w2 < 0 ? Xe(r2) : r2;
      }
      return w2 = (b2[t3] - b2.min) / b2.max || 0, T(b2.b + (r2 ? r2(w2) : w2) * b2.v) + b2.u;
    };
  }
  function tt(t2) {
    var e2 = Math.pow(10, ((t2 + "").split(".")[1] || "").length);
    return function(r2) {
      var i2 = T(Math.round(parseFloat(r2) / t2) * t2 * e2);
      return (i2 - i2 % 1) / e2 + (s(r2) ? 0 : H(r2));
    };
  }
  function et(t2, e2) {
    var r2, i2, a2 = re(t2);
    return !a2 && o(t2) && (r2 = a2 = t2.radius || Gt, t2.values ? (t2 = De(t2.values), (i2 = !s(t2[0])) && (r2 *= r2)) : t2 = tt(t2.increment)), W(e2, a2 ? n(t2) ? function(e3) {
      return i2 = t2(e3), Math.abs(i2 - e3) <= r2 ? i2 : e3;
    } : function(e3) {
      for (var n2, a3, o2 = parseFloat(i2 ? e3.x : e3), u2 = parseFloat(i2 ? e3.y : 0), h2 = Gt, f2 = 0, l2 = t2.length; l2--; ) (n2 = i2 ? (n2 = t2[l2].x - o2) * n2 + (a3 = t2[l2].y - u2) * a3 : Math.abs(t2[l2] - o2)) < h2 && (h2 = n2, f2 = l2);
      return f2 = !r2 || h2 <= r2 ? t2[f2] : e3, i2 || f2 === e3 || s(e3) ? f2 : f2 + H(e3);
    } : tt(t2));
  }
  function rt(t2, e2, r2, i2) {
    return W(re(t2) ? !e2 : true === r2 ? !!(r2 = 0) : !i2, function() {
      return re(t2) ? t2[~~(Math.random() * t2.length)] : (r2 = r2 || 1e-5) && (i2 = r2 < 1 ? Math.pow(10, (r2 + "").length - 2) : 1) && Math.floor(Math.round((t2 - r2 / 2 + Math.random() * (e2 - t2 + 0.99 * r2)) / r2) * r2 * i2) / i2;
    });
  }
  function it(t2, e2, r2) {
    return W(r2, function(r3) {
      return t2[~~e2(r3)];
    });
  }
  function nt(t2) {
    for (var e2, r2, i2, n2, s2 = 0, a2 = ""; ~(e2 = t2.indexOf("random(", s2)); ) i2 = t2.indexOf(")", e2), n2 = "[" === t2.charAt(e2 + 7), r2 = t2.substr(e2 + 7, i2 - e2 - 7).match(n2 ? ue : ie), a2 += t2.substr(s2, e2 - s2) + rt(n2 ? r2 : +r2[0], n2 ? 0 : +r2[1], +r2[2] || 1e-5), s2 = i2 + 1;
    return a2 + t2.substr(s2, t2.length - s2);
  }
  function st(t2, e2, r2) {
    var i2, n2, s2, a2 = t2.labels, o2 = Gt;
    for (i2 in a2) (n2 = a2[i2] - e2) < 0 == !!r2 && n2 && o2 > (n2 = Math.abs(n2)) && (s2 = i2, o2 = n2);
    return s2;
  }
  function at(t2) {
    return z(t2), t2.scrollTrigger && t2.scrollTrigger.kill(!!vt), t2.progress() < 1 && Se(t2, "onInterrupt"), t2;
  }
  function ot(t2, e2, r2) {
    return (6 * (t2 += t2 < 0 ? 1 : 1 < t2 ? -1 : 0) < 1 ? e2 + (r2 - e2) * t2 * 6 : t2 < 0.5 ? r2 : 3 * t2 < 2 ? e2 + (r2 - e2) * (2 / 3 - t2) * 6 : e2) * Ee + 0.5 | 0;
  }
  function ut(t2, e2, r2) {
    var i2, n2, a2, o2, u2, h2, f2, l2, c2, p2, _2 = t2 ? s(t2) ? [t2 >> 16, t2 >> 8 & Ee, t2 & Ee] : 0 : Re.black;
    if (!_2) {
      if ("," === t2.substr(-1) && (t2 = t2.substr(0, t2.length - 1)), Re[t2]) _2 = Re[t2];
      else if ("#" === t2.charAt(0)) {
        if (t2.length < 6 && (t2 = "#" + (i2 = t2.charAt(1)) + i2 + (n2 = t2.charAt(2)) + n2 + (a2 = t2.charAt(3)) + a2 + (5 === t2.length ? t2.charAt(4) + t2.charAt(4) : "")), 9 === t2.length) return [(_2 = parseInt(t2.substr(1, 6), 16)) >> 16, _2 >> 8 & Ee, _2 & Ee, parseInt(t2.substr(7), 16) / 255];
        _2 = [(t2 = parseInt(t2.substr(1), 16)) >> 16, t2 >> 8 & Ee, t2 & Ee];
      } else if ("hsl" === t2.substr(0, 3)) if (_2 = p2 = t2.match(ie), e2) {
        if (~t2.indexOf("=")) return _2 = t2.match(ne), r2 && _2.length < 4 && (_2[3] = 1), _2;
      } else o2 = +_2[0] % 360 / 360, u2 = _2[1] / 100, i2 = 2 * (h2 = _2[2] / 100) - (n2 = h2 <= 0.5 ? h2 * (u2 + 1) : h2 + u2 - h2 * u2), 3 < _2.length && (_2[3] *= 1), _2[0] = ot(o2 + 1 / 3, i2, n2), _2[1] = ot(o2, i2, n2), _2[2] = ot(o2 - 1 / 3, i2, n2);
      else _2 = t2.match(ie) || Re.transparent;
      _2 = _2.map(Number);
    }
    return e2 && !p2 && (i2 = _2[0] / Ee, n2 = _2[1] / Ee, a2 = _2[2] / Ee, h2 = ((f2 = Math.max(i2, n2, a2)) + (l2 = Math.min(i2, n2, a2))) / 2, f2 === l2 ? o2 = u2 = 0 : (c2 = f2 - l2, u2 = 0.5 < h2 ? c2 / (2 - f2 - l2) : c2 / (f2 + l2), o2 = f2 === i2 ? (n2 - a2) / c2 + (n2 < a2 ? 6 : 0) : f2 === n2 ? (a2 - i2) / c2 + 2 : (i2 - n2) / c2 + 4, o2 *= 60), _2[0] = ~~(o2 + 0.5), _2[1] = ~~(100 * u2 + 0.5), _2[2] = ~~(100 * h2 + 0.5)), r2 && _2.length < 4 && (_2[3] = 1), _2;
  }
  function ht(t2) {
    var e2 = [], r2 = [], i2 = -1;
    return t2.split(ze).forEach(function(t3) {
      var n2 = t3.match(se) || [];
      e2.push.apply(e2, n2), r2.push(i2 += n2.length + 1);
    }), e2.c = r2, e2;
  }
  function ft(t2, e2, r2) {
    var i2, n2, s2, a2, o2 = "", u2 = (t2 + o2).match(ze), h2 = e2 ? "hsla(" : "rgba(", f2 = 0;
    if (!u2) return t2;
    if (u2 = u2.map(function(t3) {
      return (t3 = ut(t3, e2, 1)) && h2 + (e2 ? t3[0] + "," + t3[1] + "%," + t3[2] + "%," + t3[3] : t3.join(",")) + ")";
    }), r2 && (s2 = ht(t2), (i2 = r2.c).join(o2) !== s2.c.join(o2))) for (a2 = (n2 = t2.replace(ze, "1").split(se)).length - 1; f2 < a2; f2++) o2 += n2[f2] + (~i2.indexOf(f2) ? u2.shift() || h2 + "0,0,0,0)" : (s2.length ? s2 : u2.length ? u2 : r2).shift());
    if (!n2) for (a2 = (n2 = t2.split(ze)).length - 1; f2 < a2; f2++) o2 += n2[f2] + u2[f2];
    return o2 + n2[a2];
  }
  function lt(t2) {
    var e2, r2 = t2.join(" ");
    if (ze.lastIndex = 0, ze.test(r2)) return e2 = Fe.test(r2), t2[1] = ft(t2[1], e2), t2[0] = ft(t2[0], e2, ht(t2[1])), true;
  }
  function ct(t2, e2) {
    for (var r2, i2 = t2._first; i2; ) i2 instanceof He ? ct(i2, e2) : !i2.vars.yoyoEase || i2._yoyo && i2._repeat || i2._yoyo === e2 || (i2.timeline ? ct(i2.timeline, e2) : (r2 = i2._ease, i2._ease = i2._yEase, i2._yEase = r2, i2._yoyo = e2)), i2 = i2._next;
  }
  function pt(t2, e2, r2, i2) {
    void 0 === r2 && (r2 = function(t3) {
      return 1 - e2(1 - t3);
    }), void 0 === i2 && (i2 = function(t3) {
      return t3 < 0.5 ? e2(2 * t3) / 2 : 1 - e2(2 * (1 - t3)) / 2;
    });
    var n2, s2 = { easeIn: e2, easeOut: r2, easeInOut: i2 };
    return y(t2, function(t3) {
      for (var e3 in Ie[t3] = fe[t3] = s2, Ie[n2 = t3.toLowerCase()] = r2, s2) Ie[n2 + ("easeIn" === e3 ? ".in" : "easeOut" === e3 ? ".out" : ".inOut")] = Ie[t3 + "." + e3] = s2[e3];
    }), s2;
  }
  function _t(t2) {
    return function(e2) {
      return e2 < 0.5 ? (1 - t2(1 - 2 * e2)) / 2 : 0.5 + t2(2 * (e2 - 0.5)) / 2;
    };
  }
  function dt(t2, e2, r2) {
    function i2(t3) {
      return 1 === t3 ? 1 : n2 * Math.pow(2, -10 * t3) * te((t3 - a2) * s2) + 1;
    }
    var n2 = 1 <= e2 ? e2 : 1, s2 = (r2 || (t2 ? 0.3 : 0.45)) / (e2 < 1 ? e2 : 1), a2 = s2 / Ht * (Math.asin(1 / n2) || 0), o2 = "out" === t2 ? i2 : "in" === t2 ? function(t3) {
      return 1 - i2(1 - t3);
    } : _t(i2);
    return s2 = Ht / s2, o2.config = function(e3, r3) {
      return dt(t2, e3, r3);
    }, o2;
  }
  function mt(t2, e2) {
    function r2(t3) {
      return t3 ? --t3 * t3 * ((e2 + 1) * t3 + e2) + 1 : 0;
    }
    void 0 === e2 && (e2 = 1.70158);
    var i2 = "out" === t2 ? r2 : "in" === t2 ? function(t3) {
      return 1 - r2(1 - t3);
    } : _t(r2);
    return i2.config = function(e3) {
      return mt(t2, e3);
    }, i2;
  }
  var gt, vt, yt, xt, Tt, wt, bt, Mt, Ot, kt, Ct, At, Dt, Pt, St, Et, Rt, zt, Ft, Bt, Lt, It, Yt, Ut, Xt, Nt, qt, Vt, jt = { autoSleep: 120, force3D: "auto", nullTargetWarn: 1, units: { lineHeight: "" } }, Qt = { duration: 0.5, overwrite: false, delay: 0 }, Gt = 1e8, Wt = 1 / Gt, Ht = 2 * Math.PI, Zt = Ht / 4, $t = 0, Jt = Math.sqrt, Kt = Math.cos, te = Math.sin, ee = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {
  }, re = Array.isArray, ie = /(?:-?\.?\d|\.)+/gi, ne = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, se = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, ae = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, oe = /[+-]=-?[.\d]+/, ue = /[^,'"\[\]\s]+/gi, he = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, fe = {}, le = { suppressEvents: true, isStart: true, kill: false }, ce = { suppressEvents: true, kill: false }, pe = { suppressEvents: true }, _e = {}, de = [], me = {}, ge = {}, ve = {}, ye = 30, xe = [], Te = "", we = function(t2, e2) {
    for (var r2 in e2) t2[r2] = e2[r2];
    return t2;
  }, be = function(t2, e2) {
    var r2 = Math.floor(t2 /= e2);
    return t2 && r2 === t2 ? r2 - 1 : r2;
  }, Me = function(t2) {
    var e2 = t2.data;
    return "isFromStart" === e2 || "isStart" === e2;
  }, Oe = { _start: 0, endTime: d, totalDuration: d }, ke = function t2(e2, r2, n2) {
    var s2, a2, o2, u2 = e2.labels, h2 = e2._recent || Oe, f2 = e2.duration() >= Gt ? h2.endTime(false) : e2._dur;
    return i(r2) && (isNaN(r2) || r2 in u2) ? (a2 = r2.charAt(0), o2 = "%" === r2.substr(-1), s2 = r2.indexOf("="), "<" === a2 || ">" === a2 ? (0 <= s2 && (r2 = r2.replace(/=/, "")), ("<" === a2 ? h2._start : h2.endTime(0 <= h2._repeat)) + (parseFloat(r2.substr(1)) || 0) * (o2 ? (s2 < 0 ? h2 : n2).totalDuration() / 100 : 1)) : s2 < 0 ? (r2 in u2 || (u2[r2] = f2), u2[r2]) : (a2 = parseFloat(r2.charAt(s2 - 1) + r2.substr(s2 + 1)), o2 && n2 && (a2 = a2 / 100 * (re(n2) ? n2[0] : n2).totalDuration()), 1 < s2 ? t2(e2, r2.substr(0, s2 - 1), n2) + a2 : f2 + a2)) : null == r2 ? f2 : +r2;
  }, Ce = function(t2, e2, r2) {
    return r2 < t2 ? t2 : e2 < r2 ? e2 : r2;
  }, Ae = [].slice, De = function(t2, e2, r2) {
    return yt && !e2 && yt.selector ? yt.selector(t2) : !i(t2) || r2 || !wt && Le() ? re(t2) ? function(t3, e3, r3) {
      return void 0 === r3 && (r3 = []), t3.forEach(function(t4) {
        return i(t4) && !e3 || Z(t4, 1) ? r3.push.apply(r3, De(t4)) : r3.push(t4);
      }) || r3;
    }(t2, r2) : Z(t2) ? Ae.call(t2, 0) : t2 ? [t2] : [] : Ae.call((e2 || bt).querySelectorAll(t2), 0);
  }, Pe = function(t2, e2, r2, i2, n2) {
    var s2 = e2 - t2, a2 = i2 - r2;
    return W(n2, function(e3) {
      return r2 + ((e3 - t2) / s2 * a2 || 0);
    });
  }, Se = function(t2, e2, r2) {
    var i2, n2, s2, a2 = t2.vars, o2 = a2[e2], u2 = yt, h2 = t2._ctx;
    if (o2) return i2 = a2[e2 + "Params"], n2 = a2.callbackScope || t2, r2 && de.length && M(), h2 && (yt = h2), s2 = i2 ? o2.apply(n2, i2) : o2.call(n2), yt = u2, s2;
  }, Ee = 255, Re = { aqua: [0, Ee, Ee], lime: [0, Ee, 0], silver: [192, 192, 192], black: [0, 0, 0], maroon: [128, 0, 0], teal: [0, 128, 128], blue: [0, 0, Ee], navy: [0, 0, 128], white: [Ee, Ee, Ee], olive: [128, 128, 0], yellow: [Ee, Ee, 0], orange: [Ee, 165, 0], gray: [128, 128, 128], purple: [128, 0, 128], green: [0, 128, 0], red: [Ee, 0, 0], pink: [Ee, 192, 203], cyan: [0, Ee, Ee], transparent: [Ee, Ee, Ee, 0] }, ze = function() {
    var t2, e2 = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
    for (t2 in Re) e2 += "|" + t2 + "\\b";
    return new RegExp(e2 + ")", "gi");
  }(), Fe = /hsl[a]?\(/, Be = (Ft = Date.now, Bt = 500, Lt = 33, It = Ft(), Yt = It, Xt = Ut = 1e3 / 240, Et = { time: 0, frame: 0, tick: function() {
    qe(true);
  }, deltaRatio: function(t2) {
    return Rt / (1e3 / (t2 || 60));
  }, wake: function() {
    Ot && (!wt && h() && (Tt = wt = window, bt = Tt.document || {}, fe.gsap = Br, (Tt.gsapVersions || (Tt.gsapVersions = [])).push(Br.version), l(Mt || Tt.GreenSockGlobals || !Tt.gsap && Tt || {}), St = Tt.requestAnimationFrame), Dt && Et.sleep(), Pt = St || function(t2) {
      return setTimeout(t2, Xt - 1e3 * Et.time + 1 | 0);
    }, At = 1, qe(2));
  }, sleep: function() {
    (St ? Tt.cancelAnimationFrame : clearTimeout)(Dt), At = 0, Pt = d;
  }, lagSmoothing: function(t2, e2) {
    Bt = t2 || 1e8, Lt = Math.min(e2, Bt, 0);
  }, fps: function(t2) {
    Ut = 1e3 / (t2 || 240), Xt = 1e3 * Et.time + Ut;
  }, add: function(t2, e2, r2) {
    var i2 = e2 ? function(e3, r3, n2, s2) {
      t2(e3, r3, n2, s2), Et.remove(i2);
    } : t2;
    return Et.remove(t2), Nt[r2 ? "unshift" : "push"](i2), Le(), i2;
  }, remove: function(t2, e2) {
    ~(e2 = Nt.indexOf(t2)) && Nt.splice(e2, 1) && e2 <= zt && zt--;
  }, _listeners: Nt = [] }), Le = function() {
    return !At && Be.wake();
  }, Ie = {}, Ye = /^[\d.\-M][\d.\-,\s]/, Ue = /["']/g, Xe = function(t2) {
    return function(e2) {
      return 1 - t2(1 - e2);
    };
  }, Ne = function(t2, e2) {
    return t2 && (n(t2) ? t2 : Ie[t2] || function(t3) {
      var e3 = (t3 + "").split("("), r2 = Ie[e3[0]];
      return r2 && 1 < e3.length && r2.config ? r2.config.apply(null, ~t3.indexOf("{") ? [function(t4) {
        for (var e4, r3, i2, n2 = {}, s2 = t4.substr(1, t4.length - 3).split(":"), a2 = s2[0], o2 = 1, u2 = s2.length; o2 < u2; o2++) r3 = s2[o2], e4 = o2 !== u2 - 1 ? r3.lastIndexOf(",") : r3.length, i2 = r3.substr(0, e4), n2[a2] = isNaN(i2) ? i2.replace(Ue, "").trim() : +i2, a2 = r3.substr(e4 + 1).trim();
        return n2;
      }(e3[1])] : function(t4) {
        var e4 = t4.indexOf("(") + 1, r3 = t4.indexOf(")"), i2 = t4.indexOf("(", e4);
        return t4.substring(e4, ~i2 && i2 < r3 ? t4.indexOf(")", r3 + 1) : r3);
      }(t3).split(",").map(k)) : Ie._CE && Ye.test(t3) ? Ie._CE("", t3) : r2;
    }(t2)) || e2;
  };
  function qe(t2) {
    var e2, r2, i2, n2, s2 = Ft() - Yt, a2 = true === t2;
    if (Bt < s2 && (It += s2 - Lt), (0 < (e2 = (i2 = (Yt += s2) - It) - Xt) || a2) && (n2 = ++Et.frame, Rt = i2 - 1e3 * Et.time, Et.time = i2 /= 1e3, Xt += e2 + (Ut <= e2 ? 4 : Ut - e2), r2 = 1), a2 || (Dt = Pt(qe)), r2) for (zt = 0; zt < Nt.length; zt++) Nt[zt](i2, Rt, n2, t2);
  }
  function Ve(t2) {
    return t2 < Vt ? qt * t2 * t2 : t2 < 0.7272727272727273 ? qt * Math.pow(t2 - 1.5 / 2.75, 2) + 0.75 : t2 < 0.9090909090909092 ? qt * (t2 -= 2.25 / 2.75) * t2 + 0.9375 : qt * Math.pow(t2 - 2.625 / 2.75, 2) + 0.984375;
  }
  y("Linear,Quad,Cubic,Quart,Quint,Strong", function(t2, e2) {
    var r2 = e2 < 5 ? e2 + 1 : e2;
    pt(t2 + ",Power" + (r2 - 1), e2 ? function(t3) {
      return Math.pow(t3, r2);
    } : function(t3) {
      return t3;
    }, function(t3) {
      return 1 - Math.pow(1 - t3, r2);
    }, function(t3) {
      return t3 < 0.5 ? Math.pow(2 * t3, r2) / 2 : 1 - Math.pow(2 * (1 - t3), r2) / 2;
    });
  }), Ie.Linear.easeNone = Ie.none = Ie.Linear.easeIn, pt("Elastic", dt("in"), dt("out"), dt()), qt = 7.5625, Vt = 1 / 2.75, pt("Bounce", function(t2) {
    return 1 - Ve(1 - t2);
  }, Ve), pt("Expo", function(t2) {
    return t2 ? Math.pow(2, 10 * (t2 - 1)) : 0;
  }), pt("Circ", function(t2) {
    return -(Jt(1 - t2 * t2) - 1);
  }), pt("Sine", function(t2) {
    return 1 === t2 ? 1 : 1 - Kt(t2 * Zt);
  }), pt("Back", mt("in"), mt("out"), mt()), Ie.SteppedEase = Ie.steps = fe.SteppedEase = { config: function(t2, e2) {
    void 0 === t2 && (t2 = 1);
    var r2 = 1 / t2, i2 = t2 + (e2 ? 0 : 1), n2 = e2 ? 1 : 0;
    return function(t3) {
      return ((i2 * Ce(0, 0.99999999, t3) | 0) + n2) * r2;
    };
  } }, Qt.ease = Ie["quad.out"], y("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t2) {
    return Te += t2 + "," + t2 + "Params,";
  });
  var je, Qe = function(t2, e2) {
    this.id = $t++, (t2._gsap = this).target = t2, this.harness = e2, this.get = e2 ? e2.get : v, this.set = e2 ? e2.getSetter : lr;
  }, Ge = ((je = We.prototype).delay = function(t2) {
    return t2 || 0 === t2 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t2 - this._delay), this._delay = t2, this) : this._delay;
  }, je.duration = function(t2) {
    return arguments.length ? this.totalDuration(0 < this._repeat ? t2 + (t2 + this._rDelay) * this._repeat : t2) : this.totalDuration() && this._dur;
  }, je.totalDuration = function(t2) {
    return arguments.length ? (this._dirty = 0, j(this, this._repeat < 0 ? t2 : (t2 - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur;
  }, je.totalTime = function(t2, e2) {
    if (Le(), !arguments.length) return this._tTime;
    var r2 = this._dp;
    if (r2 && r2.smoothChildTiming && this._ts) {
      for (U(this, t2), !r2._dp || r2.parent || X(r2, this); r2 && r2.parent; ) r2.parent._time !== r2._start + (0 <= r2._ts ? r2._tTime / r2._ts : (r2.totalDuration() - r2._tTime) / -r2._ts) && r2.totalTime(r2._tTime, true), r2 = r2.parent;
      !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t2 < this._tDur || this._ts < 0 && 0 < t2 || !this._tDur && !t2) && N(this._dp, this, this._start - this._delay);
    }
    return (this._tTime !== t2 || !this._dur && !e2 || this._initted && Math.abs(this._zTime) === Wt || !t2 && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t2), O(this, t2, e2)), this;
  }, je.time = function(t2, e2) {
    return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t2 + L(this)) % (this._dur + this._rDelay) || (t2 ? this._dur : 0), e2) : this._time;
  }, je.totalProgress = function(t2, e2) {
    return arguments.length ? this.totalTime(this.totalDuration() * t2, e2) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio;
  }, je.progress = function(t2, e2) {
    return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t2 : 1 - t2) + L(this), e2) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio;
  }, je.iteration = function(t2, e2) {
    var r2 = this.duration() + this._rDelay;
    return arguments.length ? this.totalTime(this._time + (t2 - 1) * r2, e2) : this._repeat ? be(this._tTime, r2) + 1 : 1;
  }, je.timeScale = function(t2) {
    if (!arguments.length) return this._rts === -Wt ? 0 : this._rts;
    if (this._rts === t2) return this;
    var e2 = this.parent && this._ts ? I(this.parent._time, this) : this._tTime;
    return this._rts = +t2 || 0, this._ts = this._ps || t2 === -Wt ? 0 : this._rts, this.totalTime(Ce(-this._delay, this._tDur, e2), true), Y(this), function(t3) {
      for (var e3 = t3.parent; e3 && e3.parent; ) e3._dirty = 1, e3.totalDuration(), e3 = e3.parent;
      return t3;
    }(this);
  }, je.paused = function(t2) {
    return arguments.length ? (this._ps !== t2 && ((this._ps = t2) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Le(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== Wt && (this._tTime -= Wt)))), this) : this._ps;
  }, je.startTime = function(t2) {
    if (arguments.length) {
      this._start = t2;
      var e2 = this.parent || this._dp;
      return !e2 || !e2._sort && this.parent || N(e2, this, t2 - this._delay), this;
    }
    return this._start;
  }, je.endTime = function(t2) {
    return this._start + (u(t2) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1);
  }, je.rawTime = function(t2) {
    var e2 = this.parent || this._dp;
    return e2 ? t2 && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? I(e2.rawTime(t2), this) : this._tTime : this._tTime;
  }, je.revert = function(t2) {
    void 0 === t2 && (t2 = pe);
    var e2 = vt;
    return vt = t2, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t2), this.totalTime(-0.01, t2.suppressEvents)), "nested" !== this.data && false !== t2.kill && this.kill(), vt = e2, this;
  }, je.globalTime = function(t2) {
    for (var e2 = this, r2 = arguments.length ? t2 : e2.rawTime(); e2; ) r2 = e2._start + r2 / (e2._ts || 1), e2 = e2._dp;
    return !this.parent && this.vars.immediateRender ? -1 : r2;
  }, je.repeat = function(t2) {
    return arguments.length ? (this._repeat = t2 === 1 / 0 ? -2 : t2, Q(this)) : -2 === this._repeat ? 1 / 0 : this._repeat;
  }, je.repeatDelay = function(t2) {
    if (arguments.length) {
      var e2 = this._time;
      return this._rDelay = t2, Q(this), e2 ? this.time(e2) : this;
    }
    return this._rDelay;
  }, je.yoyo = function(t2) {
    return arguments.length ? (this._yoyo = t2, this) : this._yoyo;
  }, je.seek = function(t2, e2) {
    return this.totalTime(ke(this, t2), u(e2));
  }, je.restart = function(t2, e2) {
    return this.play().totalTime(t2 ? -this._delay : 0, u(e2));
  }, je.play = function(t2, e2) {
    return null != t2 && this.seek(t2, e2), this.reversed(false).paused(false);
  }, je.reverse = function(t2, e2) {
    return null != t2 && this.seek(t2 || this.totalDuration(), e2), this.reversed(true).paused(false);
  }, je.pause = function(t2, e2) {
    return null != t2 && this.seek(t2, e2), this.paused(true);
  }, je.resume = function() {
    return this.paused(false);
  }, je.reversed = function(t2) {
    return arguments.length ? (!!t2 !== this.reversed() && this.timeScale(-this._rts || (t2 ? -Wt : 0)), this) : this._rts < 0;
  }, je.invalidate = function() {
    return this._initted = this._act = 0, this._zTime = -Wt, this;
  }, je.isActive = function() {
    var t2, e2 = this.parent || this._dp, r2 = this._start;
    return !(e2 && !(this._ts && this._initted && e2.isActive() && (t2 = e2.rawTime(true)) >= r2 && t2 < this.endTime(true) - Wt));
  }, je.eventCallback = function(t2, e2, r2) {
    var i2 = this.vars;
    return 1 < arguments.length ? (e2 ? (i2[t2] = e2, r2 && (i2[t2 + "Params"] = r2), "onUpdate" === t2 && (this._onUpdate = e2)) : delete i2[t2], this) : i2[t2];
  }, je.then = function(t2) {
    var e2 = this;
    return new Promise(function(r2) {
      function i2() {
        var t3 = e2.then;
        e2.then = null, n(s2) && (s2 = s2(e2)) && (s2.then || s2 === e2) && (e2.then = t3), r2(s2), e2.then = t3;
      }
      var s2 = n(t2) ? t2 : C;
      e2._initted && 1 === e2.totalProgress() && 0 <= e2._ts || !e2._tTime && e2._ts < 0 ? i2() : e2._prom = i2;
    });
  }, je.kill = function() {
    at(this);
  }, We);
  function We(t2) {
    this.vars = t2, this._delay = +t2.delay || 0, (this._repeat = t2.repeat === 1 / 0 ? -2 : t2.repeat || 0) && (this._rDelay = t2.repeatDelay || 0, this._yoyo = !!t2.yoyo || !!t2.yoyoEase), this._ts = 1, j(this, +t2.duration, 1, 1), this.data = t2.data, yt && (this._ctx = yt).data.push(this), At || Be.wake();
  }
  A(Ge.prototype, { _time: 0, _start: 0, _end: 0, _tTime: 0, _tDur: 0, _dirty: 0, _repeat: 0, _yoyo: false, parent: null, _initted: false, _rDelay: 0, _ts: 1, _dp: 0, ratio: 0, _zTime: -Wt, _prom: 0, _ps: false, _rts: 1 });
  var He = function(t2) {
    function a2(e2, i2) {
      var n2;
      return void 0 === e2 && (e2 = {}), (n2 = t2.call(this, e2) || this).labels = {}, n2.smoothChildTiming = !!e2.smoothChildTiming, n2.autoRemoveChildren = !!e2.autoRemoveChildren, n2._sort = u(e2.sortChildren), xt && N(e2.parent || xt, r(n2), i2), e2.reversed && n2.reverse(), e2.paused && n2.paused(true), e2.scrollTrigger && q(r(n2), e2.scrollTrigger), n2;
    }
    e(a2, t2);
    var o2 = a2.prototype;
    return o2.to = function(t3, e2, r2) {
      return G(0, arguments, this), this;
    }, o2.from = function(t3, e2, r2) {
      return G(1, arguments, this), this;
    }, o2.fromTo = function(t3, e2, r2, i2) {
      return G(2, arguments, this), this;
    }, o2.set = function(t3, e2, r2) {
      return e2.duration = 0, e2.parent = this, S(e2).repeatDelay || (e2.repeat = 0), e2.immediateRender = !!e2.immediateRender, new sr(t3, e2, ke(this, r2), 1), this;
    }, o2.call = function(t3, e2, r2) {
      return N(this, sr.delayedCall(0, t3, e2), r2);
    }, o2.staggerTo = function(t3, e2, r2, i2, n2, s2, a3) {
      return r2.duration = e2, r2.stagger = r2.stagger || i2, r2.onComplete = s2, r2.onCompleteParams = a3, r2.parent = this, new sr(t3, r2, ke(this, n2)), this;
    }, o2.staggerFrom = function(t3, e2, r2, i2, n2, s2, a3) {
      return r2.runBackwards = 1, S(r2).immediateRender = u(r2.immediateRender), this.staggerTo(t3, e2, r2, i2, n2, s2, a3);
    }, o2.staggerFromTo = function(t3, e2, r2, i2, n2, s2, a3, o3) {
      return i2.startAt = r2, S(i2).immediateRender = u(i2.immediateRender), this.staggerTo(t3, e2, i2, n2, s2, a3, o3);
    }, o2.render = function(t3, e2, r2) {
      var i2, n2, s2, a3, o3, u2, h2, f2, l2, c2, p2, _2, d2 = this._time, m2 = this._dirty ? this.totalDuration() : this._tDur, g2 = this._dur, v2 = t3 <= 0 ? 0 : T(t3), y2 = this._zTime < 0 != t3 < 0 && (this._initted || !g2);
      if (this !== xt && m2 < v2 && 0 <= t3 && (v2 = m2), v2 !== this._tTime || r2 || y2) {
        if (d2 !== this._time && g2 && (v2 += this._time - d2, t3 += this._time - d2), i2 = v2, l2 = this._start, u2 = !(f2 = this._ts), y2 && (g2 || (d2 = this._zTime), !t3 && e2 || (this._zTime = t3)), this._repeat) {
          if (p2 = this._yoyo, o3 = g2 + this._rDelay, this._repeat < -1 && t3 < 0) return this.totalTime(100 * o3 + t3, e2, r2);
          if (i2 = T(v2 % o3), v2 === m2 ? (a3 = this._repeat, i2 = g2) : ((a3 = ~~(v2 / o3)) && a3 === v2 / o3 && (i2 = g2, a3--), g2 < i2 && (i2 = g2)), c2 = be(this._tTime, o3), !d2 && this._tTime && c2 !== a3 && (c2 = a3), p2 && 1 & a3 && (i2 = g2 - i2, _2 = 1), a3 !== c2 && !this._lock) {
            var x2 = p2 && 1 & c2, w2 = x2 === (p2 && 1 & a3);
            if (a3 < c2 && (x2 = !x2), d2 = x2 ? 0 : g2, this._lock = 1, this.render(d2 || (_2 ? 0 : T(a3 * o3)), e2, !g2)._lock = 0, this._tTime = v2, !e2 && this.parent && Se(this, "onRepeat"), this.vars.repeatRefresh && !_2 && (this.invalidate()._lock = 1), d2 && d2 !== this._time || u2 != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
            if (g2 = this._dur, m2 = this._tDur, w2 && (this._lock = 2, d2 = x2 ? g2 : -1e-4, this.render(d2, true), this.vars.repeatRefresh && !_2 && this.invalidate()), this._lock = 0, !this._ts && !u2) return this;
            ct(this, _2);
          }
        }
        if (this._hasPause && !this._forcing && this._lock < 2 && (h2 = function(t4, e3, r3) {
          var i3;
          if (e3 < r3) for (i3 = t4._first; i3 && i3._start <= r3; ) {
            if ("isPause" === i3.data && i3._start > e3) return i3;
            i3 = i3._next;
          }
          else for (i3 = t4._last; i3 && i3._start >= r3; ) {
            if ("isPause" === i3.data && i3._start < e3) return i3;
            i3 = i3._prev;
          }
        }(this, T(d2), T(i2))) && (v2 -= i2 - (i2 = h2._start)), this._tTime = v2, this._time = i2, this._act = !f2, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t3, d2 = 0), !d2 && i2 && !e2 && (Se(this, "onStart"), this._tTime !== v2)) return this;
        if (d2 <= i2 && 0 <= t3) for (n2 = this._first; n2; ) {
          if (s2 = n2._next, (n2._act || i2 >= n2._start) && n2._ts && h2 !== n2) {
            if (n2.parent !== this) return this.render(t3, e2, r2);
            if (n2.render(0 < n2._ts ? (i2 - n2._start) * n2._ts : (n2._dirty ? n2.totalDuration() : n2._tDur) + (i2 - n2._start) * n2._ts, e2, r2), i2 !== this._time || !this._ts && !u2) {
              h2 = 0, s2 && (v2 += this._zTime = -Wt);
              break;
            }
          }
          n2 = s2;
        }
        else {
          n2 = this._last;
          for (var b2 = t3 < 0 ? t3 : i2; n2; ) {
            if (s2 = n2._prev, (n2._act || b2 <= n2._end) && n2._ts && h2 !== n2) {
              if (n2.parent !== this) return this.render(t3, e2, r2);
              if (n2.render(0 < n2._ts ? (b2 - n2._start) * n2._ts : (n2._dirty ? n2.totalDuration() : n2._tDur) + (b2 - n2._start) * n2._ts, e2, r2 || vt && (n2._initted || n2._startAt)), i2 !== this._time || !this._ts && !u2) {
                h2 = 0, s2 && (v2 += this._zTime = b2 ? -Wt : Wt);
                break;
              }
            }
            n2 = s2;
          }
        }
        if (h2 && !e2 && (this.pause(), h2.render(d2 <= i2 ? 0 : -Wt)._zTime = d2 <= i2 ? 1 : -1, this._ts)) return this._start = l2, Y(this), this.render(t3, e2, r2);
        this._onUpdate && !e2 && Se(this, "onUpdate", true), (v2 === m2 && this._tTime >= this.totalDuration() || !v2 && d2) && (l2 !== this._start && Math.abs(f2) === Math.abs(this._ts) || this._lock || (!t3 && g2 || !(v2 === m2 && 0 < this._ts || !v2 && this._ts < 0) || z(this, 1), e2 || t3 < 0 && !d2 || !v2 && !d2 && m2 || (Se(this, v2 === m2 && 0 <= t3 ? "onComplete" : "onReverseComplete", true), !this._prom || v2 < m2 && 0 < this.timeScale() || this._prom())));
      }
      return this;
    }, o2.add = function(t3, e2) {
      var r2 = this;
      if (s(e2) || (e2 = ke(this, e2, t3)), !(t3 instanceof Ge)) {
        if (re(t3)) return t3.forEach(function(t4) {
          return r2.add(t4, e2);
        }), this;
        if (i(t3)) return this.addLabel(t3, e2);
        if (!n(t3)) return this;
        t3 = sr.delayedCall(0, t3);
      }
      return this !== t3 ? N(this, t3, e2) : this;
    }, o2.getChildren = function(t3, e2, r2, i2) {
      void 0 === t3 && (t3 = true), void 0 === e2 && (e2 = true), void 0 === r2 && (r2 = true), void 0 === i2 && (i2 = -Gt);
      for (var n2 = [], s2 = this._first; s2; ) s2._start >= i2 && (s2 instanceof sr ? e2 && n2.push(s2) : (r2 && n2.push(s2), t3 && n2.push.apply(n2, s2.getChildren(true, e2, r2)))), s2 = s2._next;
      return n2;
    }, o2.getById = function(t3) {
      for (var e2 = this.getChildren(1, 1, 1), r2 = e2.length; r2--; ) if (e2[r2].vars.id === t3) return e2[r2];
    }, o2.remove = function(t3) {
      return i(t3) ? this.removeLabel(t3) : n(t3) ? this.killTweensOf(t3) : (R(this, t3), t3 === this._recent && (this._recent = this._last), F(this));
    }, o2.totalTime = function(e2, r2) {
      return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = T(Be.time - (0 < this._ts ? e2 / this._ts : (this.totalDuration() - e2) / -this._ts))), t2.prototype.totalTime.call(this, e2, r2), this._forcing = 0, this) : this._tTime;
    }, o2.addLabel = function(t3, e2) {
      return this.labels[t3] = ke(this, e2), this;
    }, o2.removeLabel = function(t3) {
      return delete this.labels[t3], this;
    }, o2.addPause = function(t3, e2, r2) {
      var i2 = sr.delayedCall(0, e2 || d, r2);
      return i2.data = "isPause", this._hasPause = 1, N(this, i2, ke(this, t3));
    }, o2.removePause = function(t3) {
      var e2 = this._first;
      for (t3 = ke(this, t3); e2; ) e2._start === t3 && "isPause" === e2.data && z(e2), e2 = e2._next;
    }, o2.killTweensOf = function(t3, e2, r2) {
      for (var i2 = this.getTweensOf(t3, r2), n2 = i2.length; n2--; ) Je !== i2[n2] && i2[n2].kill(t3, e2);
      return this;
    }, o2.getTweensOf = function(t3, e2) {
      for (var r2, i2 = [], n2 = De(t3), a3 = this._first, o3 = s(e2); a3; ) a3 instanceof sr ? b(a3._targets, n2) && (o3 ? (!Je || a3._initted && a3._ts) && a3.globalTime(0) <= e2 && a3.globalTime(a3.totalDuration()) > e2 : !e2 || a3.isActive()) && i2.push(a3) : (r2 = a3.getTweensOf(n2, e2)).length && i2.push.apply(i2, r2), a3 = a3._next;
      return i2;
    }, o2.tweenTo = function(t3, e2) {
      e2 = e2 || {};
      var r2, i2 = this, n2 = ke(i2, t3), s2 = e2.startAt, a3 = e2.onStart, o3 = e2.onStartParams, u2 = e2.immediateRender, h2 = sr.to(i2, A({ ease: e2.ease || "none", lazy: false, immediateRender: false, time: n2, overwrite: "auto", duration: e2.duration || Math.abs((n2 - (s2 && "time" in s2 ? s2.time : i2._time)) / i2.timeScale()) || Wt, onStart: function() {
        if (i2.pause(), !r2) {
          var t4 = e2.duration || Math.abs((n2 - (s2 && "time" in s2 ? s2.time : i2._time)) / i2.timeScale());
          h2._dur !== t4 && j(h2, t4, 0, 1).render(h2._time, true, true), r2 = 1;
        }
        a3 && a3.apply(h2, o3 || []);
      } }, e2));
      return u2 ? h2.render(0) : h2;
    }, o2.tweenFromTo = function(t3, e2, r2) {
      return this.tweenTo(e2, A({ startAt: { time: ke(this, t3) } }, r2));
    }, o2.recent = function() {
      return this._recent;
    }, o2.nextLabel = function(t3) {
      return void 0 === t3 && (t3 = this._time), st(this, ke(this, t3));
    }, o2.previousLabel = function(t3) {
      return void 0 === t3 && (t3 = this._time), st(this, ke(this, t3), 1);
    }, o2.currentLabel = function(t3) {
      return arguments.length ? this.seek(t3, true) : this.previousLabel(this._time + Wt);
    }, o2.shiftChildren = function(t3, e2, r2) {
      void 0 === r2 && (r2 = 0);
      for (var i2, n2 = this._first, s2 = this.labels; n2; ) n2._start >= r2 && (n2._start += t3, n2._end += t3), n2 = n2._next;
      if (e2) for (i2 in s2) s2[i2] >= r2 && (s2[i2] += t3);
      return F(this);
    }, o2.invalidate = function(e2) {
      var r2 = this._first;
      for (this._lock = 0; r2; ) r2.invalidate(e2), r2 = r2._next;
      return t2.prototype.invalidate.call(this, e2);
    }, o2.clear = function(t3) {
      void 0 === t3 && (t3 = true);
      for (var e2, r2 = this._first; r2; ) e2 = r2._next, this.remove(r2), r2 = e2;
      return this._dp && (this._time = this._tTime = this._pTime = 0), t3 && (this.labels = {}), F(this);
    }, o2.totalDuration = function(t3) {
      var e2, r2, i2, n2 = 0, s2 = this, a3 = s2._last, o3 = Gt;
      if (arguments.length) return s2.timeScale((s2._repeat < 0 ? s2.duration() : s2.totalDuration()) / (s2.reversed() ? -t3 : t3));
      if (s2._dirty) {
        for (i2 = s2.parent; a3; ) e2 = a3._prev, a3._dirty && a3.totalDuration(), o3 < (r2 = a3._start) && s2._sort && a3._ts && !s2._lock ? (s2._lock = 1, N(s2, a3, r2 - a3._delay, 1)._lock = 0) : o3 = r2, r2 < 0 && a3._ts && (n2 -= r2, (!i2 && !s2._dp || i2 && i2.smoothChildTiming) && (s2._start += r2 / s2._ts, s2._time -= r2, s2._tTime -= r2), s2.shiftChildren(-r2, false, -1 / 0), o3 = 0), a3._end > n2 && a3._ts && (n2 = a3._end), a3 = e2;
        j(s2, s2 === xt && s2._time > n2 ? s2._time : n2, 1, 1), s2._dirty = 0;
      }
      return s2._tDur;
    }, a2.updateRoot = function(t3) {
      if (xt._ts && (O(xt, I(t3, xt)), kt = Be.frame), Be.frame >= ye) {
        ye += jt.autoSleep || 120;
        var e2 = xt._first;
        if ((!e2 || !e2._ts) && jt.autoSleep && Be._listeners.length < 2) {
          for (; e2 && !e2._ts; ) e2 = e2._next;
          e2 || Be.sleep();
        }
      }
    }, a2;
  }(Ge);
  function Ze(t2, e2, r2, s2, a2, u2) {
    var h2, f2, l2, c2;
    if (ge[t2] && false !== (h2 = new ge[t2]()).init(a2, h2.rawVars ? e2[t2] : function(t3, e3, r3, s3, a3) {
      if (n(t3) && (t3 = rr(t3, a3, e3, r3, s3)), !o(t3) || t3.style && t3.nodeType || re(t3) || ee(t3)) return i(t3) ? rr(t3, a3, e3, r3, s3) : t3;
      var u3, h3 = {};
      for (u3 in t3) h3[u3] = rr(t3[u3], a3, e3, r3, s3);
      return h3;
    }(e2[t2], s2, a2, u2, r2), r2, s2, u2) && (r2._pt = f2 = new yr(r2._pt, a2, t2, 0, 1, h2.render, h2, 0, h2.priority), r2 !== Ct)) for (l2 = r2._ptLookup[r2._targets.indexOf(a2)], c2 = h2._props.length; c2--; ) l2[h2._props[c2]] = f2;
    return h2;
  }
  function $e(t2, e2, r2, i2) {
    var n2, s2, a2 = e2.ease || i2 || "power1.inOut";
    if (re(e2)) s2 = r2[t2] || (r2[t2] = []), e2.forEach(function(t3, r3) {
      return s2.push({ t: r3 / (e2.length - 1) * 100, v: t3, e: a2 });
    });
    else for (n2 in e2) s2 = r2[n2] || (r2[n2] = []), "ease" === n2 || s2.push({ t: parseFloat(t2), v: e2[n2], e: a2 });
  }
  A(He.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
  var Je, Ke, tr = function(t2, e2, r2, s2, a2, o2, u2, h2, f2, l2) {
    n(s2) && (s2 = s2(a2 || 0, t2, o2));
    var p2, _2 = t2[e2], d2 = "get" !== r2 ? r2 : n(_2) ? f2 ? t2[e2.indexOf("set") || !n(t2["get" + e2.substr(3)]) ? e2 : "get" + e2.substr(3)](f2) : t2[e2]() : _2, m2 = n(_2) ? f2 ? fr : hr : ur;
    if (i(s2) && (~s2.indexOf("random(") && (s2 = nt(s2)), "=" === s2.charAt(1) && (!(p2 = w(d2, s2) + (H(d2) || 0)) && 0 !== p2 || (s2 = p2))), !l2 || d2 !== s2 || Ke) return isNaN(d2 * s2) || "" === s2 ? (_2 || e2 in t2 || c(e2, s2), function(t3, e3, r3, i2, n2, s3, a3) {
      var o3, u3, h3, f3, l3, c2, p3, _3, d3 = new yr(this._pt, t3, e3, 0, 1, _r, null, n2), m3 = 0, g2 = 0;
      for (d3.b = r3, d3.e = i2, r3 += "", (p3 = ~(i2 += "").indexOf("random(")) && (i2 = nt(i2)), s3 && (s3(_3 = [r3, i2], t3, e3), r3 = _3[0], i2 = _3[1]), u3 = r3.match(ae) || []; o3 = ae.exec(i2); ) f3 = o3[0], l3 = i2.substring(m3, o3.index), h3 ? h3 = (h3 + 1) % 5 : "rgba(" === l3.substr(-5) && (h3 = 1), f3 !== u3[g2++] && (c2 = parseFloat(u3[g2 - 1]) || 0, d3._pt = { _next: d3._pt, p: l3 || 1 === g2 ? l3 : ",", s: c2, c: "=" === f3.charAt(1) ? w(c2, f3) - c2 : parseFloat(f3) - c2, m: h3 && h3 < 4 ? Math.round : 0 }, m3 = ae.lastIndex);
      return d3.c = m3 < i2.length ? i2.substring(m3, i2.length) : "", d3.fp = a3, (oe.test(i2) || p3) && (d3.e = 0), this._pt = d3;
    }.call(this, t2, e2, d2, s2, m2, h2 || jt.stringFilter, f2)) : (p2 = new yr(this._pt, t2, e2, +d2 || 0, s2 - (d2 || 0), "boolean" == typeof _2 ? pr : cr, 0, m2), f2 && (p2.fp = f2), u2 && p2.modifier(u2, this, t2), this._pt = p2);
  }, er = function t2(e2, r2, i2) {
    var n2, s2, a2, o2, h2, f2, l2, c2, p2, _2, d2, v2, y2, x2 = e2.vars, T2 = x2.ease, w2 = x2.startAt, b2 = x2.immediateRender, O2 = x2.lazy, k2 = x2.onUpdate, C2 = x2.onUpdateParams, D2 = x2.callbackScope, S2 = x2.runBackwards, E2 = x2.yoyoEase, R2 = x2.keyframes, F2 = x2.autoRevert, B2 = e2._dur, L2 = e2._startAt, I2 = e2._targets, Y2 = e2.parent, U2 = Y2 && "nested" === Y2.data ? Y2.vars.targets : I2, X2 = "auto" === e2._overwrite && !gt, N2 = e2.timeline;
    if (!N2 || R2 && T2 || (T2 = "none"), e2._ease = Ne(T2, Qt.ease), e2._yEase = E2 ? Xe(Ne(true === E2 ? T2 : E2, Qt.ease)) : 0, E2 && e2._yoyo && !e2._repeat && (E2 = e2._yEase, e2._yEase = e2._ease, e2._ease = E2), e2._from = !N2 && !!x2.runBackwards, !N2 || R2 && !x2.stagger) {
      if (v2 = (c2 = I2[0] ? g(I2[0]).harness : 0) && x2[c2.prop], n2 = P(x2, _e), L2 && (L2._zTime < 0 && L2.progress(1), r2 < 0 && S2 && b2 && !F2 ? L2.render(-1, true) : L2.revert(S2 && B2 ? ce : le), L2._lazy = 0), w2) {
        if (z(e2._startAt = sr.set(I2, A({ data: "isStart", overwrite: false, parent: Y2, immediateRender: true, lazy: u(O2), startAt: null, delay: 0, onUpdate: k2, onUpdateParams: C2, callbackScope: D2, stagger: 0 }, w2))), r2 < 0 && (vt || !b2 && !F2) && e2._startAt.revert(ce), b2 && B2 && r2 <= 0 && i2 <= 0) return void (r2 && (e2._zTime = r2));
      } else if (S2 && B2 && !L2) if (r2 && (b2 = false), a2 = A({ overwrite: false, data: "isFromStart", lazy: b2 && u(O2), immediateRender: b2, stagger: 0, parent: Y2 }, n2), v2 && (a2[c2.prop] = v2), z(e2._startAt = sr.set(I2, a2)), r2 < 0 && (vt ? e2._startAt.revert(ce) : e2._startAt.render(-1, true)), e2._zTime = r2, b2) {
        if (!r2) return;
      } else t2(e2._startAt, Wt, Wt);
      for (e2._pt = e2._ptCache = 0, O2 = B2 && u(O2) || O2 && !B2, s2 = 0; s2 < I2.length; s2++) {
        if (l2 = (h2 = I2[s2])._gsap || m(I2)[s2]._gsap, e2._ptLookup[s2] = _2 = {}, me[l2.id] && de.length && M(), d2 = U2 === I2 ? s2 : U2.indexOf(h2), c2 && false !== (p2 = new c2()).init(h2, v2 || n2, e2, d2, U2) && (e2._pt = o2 = new yr(e2._pt, h2, p2.name, 0, 1, p2.render, p2, 0, p2.priority), p2._props.forEach(function(t3) {
          _2[t3] = o2;
        }), p2.priority && (f2 = 1)), !c2 || v2) for (a2 in n2) ge[a2] && (p2 = Ze(a2, n2, e2, d2, h2, U2)) ? p2.priority && (f2 = 1) : _2[a2] = o2 = tr.call(e2, h2, a2, "get", n2[a2], d2, U2, 0, x2.stringFilter);
        e2._op && e2._op[s2] && e2.kill(h2, e2._op[s2]), X2 && e2._pt && (Je = e2, xt.killTweensOf(h2, _2, e2.globalTime(r2)), y2 = !e2.parent, Je = 0), e2._pt && O2 && (me[l2.id] = 1);
      }
      f2 && vr(e2), e2._onInit && e2._onInit(e2);
    }
    e2._onUpdate = k2, e2._initted = (!e2._op || e2._pt) && !y2, R2 && r2 <= 0 && N2.render(Gt, true, true);
  }, rr = function(t2, e2, r2, s2, a2) {
    return n(t2) ? t2.call(e2, r2, s2, a2) : i(t2) && ~t2.indexOf("random(") ? nt(t2) : t2;
  }, ir = Te + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", nr = {};
  y(ir + ",id,stagger,delay,duration,paused,scrollTrigger", function(t2) {
    return nr[t2] = 1;
  });
  var sr = function(t2) {
    function n2(e2, i2, n3, a3) {
      var h2;
      "number" == typeof i2 && (n3.duration = i2, i2 = n3, n3 = null);
      var l2, c2, _2, d2, g2, v2, y2, x2, w2 = (h2 = t2.call(this, a3 ? i2 : S(i2)) || this).vars, b2 = w2.duration, M2 = w2.delay, O2 = w2.immediateRender, k2 = w2.stagger, C2 = w2.overwrite, D2 = w2.keyframes, E2 = w2.defaults, R2 = w2.scrollTrigger, z2 = w2.yoyoEase, F2 = i2.parent || xt, B2 = (re(e2) || ee(e2) ? s(e2[0]) : "length" in i2) ? [e2] : De(e2);
      if (h2._targets = B2.length ? m(B2) : p("GSAP target " + e2 + " not found. https://greensock.com", !jt.nullTargetWarn) || [], h2._ptLookup = [], h2._overwrite = C2, D2 || k2 || f(b2) || f(M2)) {
        if (i2 = h2.vars, (l2 = h2.timeline = new He({ data: "nested", defaults: E2 || {}, targets: F2 && "nested" === F2.data ? F2.vars.targets : B2 })).kill(), l2.parent = l2._dp = r(h2), l2._start = 0, k2 || f(b2) || f(M2)) {
          if (d2 = B2.length, y2 = k2 && K(k2), o(k2)) for (g2 in k2) ~ir.indexOf(g2) && ((x2 = x2 || {})[g2] = k2[g2]);
          for (c2 = 0; c2 < d2; c2++) (_2 = P(i2, nr)).stagger = 0, z2 && (_2.yoyoEase = z2), x2 && we(_2, x2), v2 = B2[c2], _2.duration = +rr(b2, r(h2), c2, v2, B2), _2.delay = (+rr(M2, r(h2), c2, v2, B2) || 0) - h2._delay, !k2 && 1 === d2 && _2.delay && (h2._delay = M2 = _2.delay, h2._start += M2, _2.delay = 0), l2.to(v2, _2, y2 ? y2(c2, v2, B2) : 0), l2._ease = Ie.none;
          l2.duration() ? b2 = M2 = 0 : h2.timeline = 0;
        } else if (D2) {
          S(A(l2.vars.defaults, { ease: "none" })), l2._ease = Ne(D2.ease || i2.ease || "none");
          var L2, I2, Y2, U2 = 0;
          if (re(D2)) D2.forEach(function(t3) {
            return l2.to(B2, t3, ">");
          }), l2.duration();
          else {
            for (g2 in _2 = {}, D2) "ease" === g2 || "easeEach" === g2 || $e(g2, D2[g2], _2, D2.easeEach);
            for (g2 in _2) for (L2 = _2[g2].sort(function(t3, e3) {
              return t3.t - e3.t;
            }), c2 = U2 = 0; c2 < L2.length; c2++) (Y2 = { ease: (I2 = L2[c2]).e, duration: (I2.t - (c2 ? L2[c2 - 1].t : 0)) / 100 * b2 })[g2] = I2.v, l2.to(B2, Y2, U2), U2 += Y2.duration;
            l2.duration() < b2 && l2.to({}, { duration: b2 - l2.duration() });
          }
        }
        b2 || h2.duration(b2 = l2.duration());
      } else h2.timeline = 0;
      return true !== C2 || gt || (Je = r(h2), xt.killTweensOf(B2), Je = 0), N(F2, r(h2), n3), i2.reversed && h2.reverse(), i2.paused && h2.paused(true), (O2 || !b2 && !D2 && h2._start === T(F2._time) && u(O2) && function t3(e3) {
        return !e3 || e3._ts && t3(e3.parent);
      }(r(h2)) && "nested" !== F2.data) && (h2._tTime = -Wt, h2.render(Math.max(0, -M2) || 0)), R2 && q(r(h2), R2), h2;
    }
    e(n2, t2);
    var a2 = n2.prototype;
    return a2.render = function(t3, e2, r2) {
      var i2, n3, s2, a3, o2, u2, h2, f2, l2, c2 = this._time, p2 = this._tDur, _2 = this._dur, d2 = t3 < 0, m2 = p2 - Wt < t3 && !d2 ? p2 : t3 < Wt ? 0 : t3;
      if (_2) {
        if (m2 !== this._tTime || !t3 || r2 || !this._initted && this._tTime || this._startAt && this._zTime < 0 != d2) {
          if (i2 = m2, f2 = this.timeline, this._repeat) {
            if (a3 = _2 + this._rDelay, this._repeat < -1 && d2) return this.totalTime(100 * a3 + t3, e2, r2);
            if (i2 = T(m2 % a3), m2 === p2 ? (s2 = this._repeat, i2 = _2) : ((s2 = ~~(m2 / a3)) && s2 === m2 / a3 && (i2 = _2, s2--), _2 < i2 && (i2 = _2)), (u2 = this._yoyo && 1 & s2) && (l2 = this._yEase, i2 = _2 - i2), o2 = be(this._tTime, a3), i2 === c2 && !r2 && this._initted) return this._tTime = m2, this;
            s2 !== o2 && (f2 && this._yEase && ct(f2, u2), !this.vars.repeatRefresh || u2 || this._lock || (this._lock = r2 = 1, this.render(T(a3 * s2), true).invalidate()._lock = 0));
          }
          if (!this._initted) {
            if (V(this, d2 ? t3 : i2, r2, e2, m2)) return this._tTime = 0, this;
            if (c2 !== this._time) return this;
            if (_2 !== this._dur) return this.render(t3, e2, r2);
          }
          if (this._tTime = m2, this._time = i2, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h2 = (l2 || this._ease)(i2 / _2), this._from && (this.ratio = h2 = 1 - h2), i2 && !c2 && !e2 && (Se(this, "onStart"), this._tTime !== m2)) return this;
          for (n3 = this._pt; n3; ) n3.r(h2, n3.d), n3 = n3._next;
          f2 && f2.render(t3 < 0 ? t3 : !i2 && u2 ? -Wt : f2._dur * f2._ease(i2 / this._dur), e2, r2) || this._startAt && (this._zTime = t3), this._onUpdate && !e2 && (d2 && B(this, t3, 0, r2), Se(this, "onUpdate")), this._repeat && s2 !== o2 && this.vars.onRepeat && !e2 && this.parent && Se(this, "onRepeat"), m2 !== this._tDur && m2 || this._tTime !== m2 || (d2 && !this._onUpdate && B(this, t3, 0, true), !t3 && _2 || !(m2 === this._tDur && 0 < this._ts || !m2 && this._ts < 0) || z(this, 1), e2 || d2 && !c2 || !(m2 || c2 || u2) || (Se(this, m2 === p2 ? "onComplete" : "onReverseComplete", true), !this._prom || m2 < p2 && 0 < this.timeScale() || this._prom()));
        }
      } else !function(t4, e3, r3, i3) {
        var n4, s3, a4, o3 = t4.ratio, u3 = e3 < 0 || !e3 && (!t4._start && function t5(e4) {
          var r4 = e4.parent;
          return r4 && r4._ts && r4._initted && !r4._lock && (r4.rawTime() < 0 || t5(r4));
        }(t4) && (t4._initted || !Me(t4)) || (t4._ts < 0 || t4._dp._ts < 0) && !Me(t4)) ? 0 : 1, h3 = t4._rDelay, f3 = 0;
        if (h3 && t4._repeat && (f3 = Ce(0, t4._tDur, e3), s3 = be(f3, h3), t4._yoyo && 1 & s3 && (u3 = 1 - u3), s3 !== be(t4._tTime, h3) && (o3 = 1 - u3, t4.vars.repeatRefresh && t4._initted && t4.invalidate())), u3 !== o3 || vt || i3 || t4._zTime === Wt || !e3 && t4._zTime) {
          if (!t4._initted && V(t4, e3, i3, r3, f3)) return;
          for (a4 = t4._zTime, t4._zTime = e3 || (r3 ? Wt : 0), r3 = r3 || e3 && !a4, t4.ratio = u3, t4._from && (u3 = 1 - u3), t4._time = 0, t4._tTime = f3, n4 = t4._pt; n4; ) n4.r(u3, n4.d), n4 = n4._next;
          e3 < 0 && B(t4, e3, 0, true), t4._onUpdate && !r3 && Se(t4, "onUpdate"), f3 && t4._repeat && !r3 && t4.parent && Se(t4, "onRepeat"), (e3 >= t4._tDur || e3 < 0) && t4.ratio === u3 && (u3 && z(t4, 1), r3 || vt || (Se(t4, u3 ? "onComplete" : "onReverseComplete", true), t4._prom && t4._prom()));
        } else t4._zTime || (t4._zTime = e3);
      }(this, t3, e2, r2);
      return this;
    }, a2.targets = function() {
      return this._targets;
    }, a2.invalidate = function(e2) {
      return e2 && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(e2), t2.prototype.invalidate.call(this, e2);
    }, a2.resetTo = function(t3, e2, r2, i2) {
      At || Be.wake(), this._ts || this.play();
      var n3 = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
      return this._initted || er(this, n3), function(t4, e3, r3, i3, n4, s2, a3) {
        var o2, u2, h2, f2, l2 = (t4._pt && t4._ptCache || (t4._ptCache = {}))[e3];
        if (!l2) for (l2 = t4._ptCache[e3] = [], h2 = t4._ptLookup, f2 = t4._targets.length; f2--; ) {
          if ((o2 = h2[f2][e3]) && o2.d && o2.d._pt) for (o2 = o2.d._pt; o2 && o2.p !== e3 && o2.fp !== e3; ) o2 = o2._next;
          if (!o2) return Ke = 1, t4.vars[e3] = "+=0", er(t4, a3), Ke = 0, 1;
          l2.push(o2);
        }
        for (f2 = l2.length; f2--; ) (o2 = (u2 = l2[f2])._pt || u2).s = !i3 && 0 !== i3 || n4 ? o2.s + (i3 || 0) + s2 * o2.c : i3, o2.c = r3 - o2.s, u2.e && (u2.e = x(r3) + H(u2.e)), u2.b && (u2.b = o2.s + H(u2.b));
      }(this, t3, e2, r2, i2, this._ease(n3 / this._dur), n3) ? this.resetTo(t3, e2, r2, i2) : (U(this, 0), this.parent || E(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0));
    }, a2.kill = function(t3, e2) {
      if (void 0 === e2 && (e2 = "all"), !(t3 || e2 && "all" !== e2)) return this._lazy = this._pt = 0, this.parent ? at(this) : this;
      if (this.timeline) {
        var r2 = this.timeline.totalDuration();
        return this.timeline.killTweensOf(t3, e2, Je && true !== Je.vars.overwrite)._first || at(this), this.parent && r2 !== this.timeline.totalDuration() && j(this, this._dur * this.timeline._tDur / r2, 0, 1), this;
      }
      var n3, s2, a3, o2, u2, h2, f2, l2 = this._targets, c2 = t3 ? De(t3) : l2, p2 = this._ptLookup, _2 = this._pt;
      if ((!e2 || "all" === e2) && function(t4, e3) {
        for (var r3 = t4.length, i2 = r3 === e3.length; i2 && r3-- && t4[r3] === e3[r3]; ) ;
        return r3 < 0;
      }(l2, c2)) return "all" === e2 && (this._pt = 0), at(this);
      for (n3 = this._op = this._op || [], "all" !== e2 && (i(e2) && (u2 = {}, y(e2, function(t4) {
        return u2[t4] = 1;
      }), e2 = u2), e2 = function(t4, e3) {
        var r3, i2, n4, s3, a4 = t4[0] ? g(t4[0]).harness : 0, o3 = a4 && a4.aliases;
        if (!o3) return e3;
        for (i2 in r3 = we({}, e3), o3) if (i2 in r3) for (n4 = (s3 = o3[i2].split(",")).length; n4--; ) r3[s3[n4]] = r3[i2];
        return r3;
      }(l2, e2)), f2 = l2.length; f2--; ) if (~c2.indexOf(l2[f2])) for (u2 in s2 = p2[f2], "all" === e2 ? (n3[f2] = e2, o2 = s2, a3 = {}) : (a3 = n3[f2] = n3[f2] || {}, o2 = e2), o2) (h2 = s2 && s2[u2]) && ("kill" in h2.d && true !== h2.d.kill(u2) || R(this, h2, "_pt"), delete s2[u2]), "all" !== a3 && (a3[u2] = 1);
      return this._initted && !this._pt && _2 && at(this), this;
    }, n2.to = function(t3, e2, r2) {
      return new n2(t3, e2, r2);
    }, n2.from = function(t3, e2) {
      return G(1, arguments);
    }, n2.delayedCall = function(t3, e2, r2, i2) {
      return new n2(e2, 0, { immediateRender: false, lazy: false, overwrite: false, delay: t3, onComplete: e2, onReverseComplete: e2, onCompleteParams: r2, onReverseCompleteParams: r2, callbackScope: i2 });
    }, n2.fromTo = function(t3, e2, r2) {
      return G(2, arguments);
    }, n2.set = function(t3, e2) {
      return e2.duration = 0, e2.repeatDelay || (e2.repeat = 0), new n2(t3, e2);
    }, n2.killTweensOf = function(t3, e2, r2) {
      return xt.killTweensOf(t3, e2, r2);
    }, n2;
  }(Ge);
  function ar(t2, e2, r2) {
    return t2.setAttribute(e2, r2);
  }
  function or(t2, e2, r2, i2) {
    i2.mSet(t2, e2, i2.m.call(i2.tween, r2, i2.mt), i2);
  }
  A(sr.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 }), y("staggerTo,staggerFrom,staggerFromTo", function(t2) {
    sr[t2] = function() {
      var e2 = new He(), r2 = Ae.call(arguments, 0);
      return r2.splice("staggerFromTo" === t2 ? 5 : 4, 0, 0), e2[t2].apply(e2, r2);
    };
  });
  var ur = function(t2, e2, r2) {
    return t2[e2] = r2;
  }, hr = function(t2, e2, r2) {
    return t2[e2](r2);
  }, fr = function(t2, e2, r2, i2) {
    return t2[e2](i2.fp, r2);
  }, lr = function(t2, e2) {
    return n(t2[e2]) ? hr : a(t2[e2]) && t2.setAttribute ? ar : ur;
  }, cr = function(t2, e2) {
    return e2.set(e2.t, e2.p, Math.round(1e6 * (e2.s + e2.c * t2)) / 1e6, e2);
  }, pr = function(t2, e2) {
    return e2.set(e2.t, e2.p, !!(e2.s + e2.c * t2), e2);
  }, _r = function(t2, e2) {
    var r2 = e2._pt, i2 = "";
    if (!t2 && e2.b) i2 = e2.b;
    else if (1 === t2 && e2.e) i2 = e2.e;
    else {
      for (; r2; ) i2 = r2.p + (r2.m ? r2.m(r2.s + r2.c * t2) : Math.round(1e4 * (r2.s + r2.c * t2)) / 1e4) + i2, r2 = r2._next;
      i2 += e2.c;
    }
    e2.set(e2.t, e2.p, i2, e2);
  }, dr = function(t2, e2) {
    for (var r2 = e2._pt; r2; ) r2.r(t2, r2.d), r2 = r2._next;
  }, mr = function(t2, e2, r2, i2) {
    for (var n2, s2 = this._pt; s2; ) n2 = s2._next, s2.p === i2 && s2.modifier(t2, e2, r2), s2 = n2;
  }, gr = function(t2) {
    for (var e2, r2, i2 = this._pt; i2; ) r2 = i2._next, i2.p === t2 && !i2.op || i2.op === t2 ? R(this, i2, "_pt") : i2.dep || (e2 = 1), i2 = r2;
    return !e2;
  }, vr = function(t2) {
    for (var e2, r2, i2, n2, s2 = t2._pt; s2; ) {
      for (e2 = s2._next, r2 = i2; r2 && r2.pr > s2.pr; ) r2 = r2._next;
      (s2._prev = r2 ? r2._prev : n2) ? s2._prev._next = s2 : i2 = s2, (s2._next = r2) ? r2._prev = s2 : n2 = s2, s2 = e2;
    }
    t2._pt = i2;
  }, yr = (xr.prototype.modifier = function(t2, e2, r2) {
    this.mSet = this.mSet || this.set, this.set = or, this.m = t2, this.mt = r2, this.tween = e2;
  }, xr);
  function xr(t2, e2, r2, i2, n2, s2, a2, o2, u2) {
    this.t = e2, this.s = i2, this.c = n2, this.p = r2, this.r = s2 || cr, this.d = a2 || this, this.set = o2 || ur, this.pr = u2 || 0, (this._next = t2) && (t2._prev = this);
  }
  function Tr(t2) {
    return (Or[t2] || kr).map(function(t3) {
      return t3();
    });
  }
  function wr() {
    var t2 = Date.now(), e2 = [];
    2 < t2 - Cr && (Tr("matchMediaInit"), Mr.forEach(function(t3) {
      var r2, i2, n2, s2, a2 = t3.queries, o2 = t3.conditions;
      for (i2 in a2) (r2 = Tt.matchMedia(a2[i2]).matches) && (n2 = 1), r2 !== o2[i2] && (o2[i2] = r2, s2 = 1);
      s2 && (t3.revert(), n2 && e2.push(t3));
    }), Tr("matchMediaRevert"), e2.forEach(function(t3) {
      return t3.onMatch(t3);
    }), Cr = t2, Tr("matchMedia"));
  }
  y(Te + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t2) {
    return _e[t2] = 1;
  }), fe.TweenMax = fe.TweenLite = sr, fe.TimelineLite = fe.TimelineMax = He, xt = new He({ sortChildren: false, defaults: Qt, autoRemoveChildren: true, id: "root", smoothChildTiming: true }), jt.stringFilter = lt;
  var br, Mr = [], Or = {}, kr = [], Cr = 0, Ar = ((br = Dr.prototype).add = function(t2, e2, r2) {
    function i2() {
      var t3, i3 = yt, a2 = s2.selector;
      return i3 && i3 !== s2 && i3.data.push(s2), r2 && (s2.selector = $(r2)), yt = s2, n(t3 = e2.apply(s2, arguments)) && s2._r.push(t3), yt = i3, s2.selector = a2, s2.isReverted = false, t3;
    }
    n(t2) && (r2 = e2, e2 = t2, t2 = n);
    var s2 = this;
    return s2.last = i2, t2 === n ? i2(s2) : t2 ? s2[t2] = i2 : i2;
  }, br.ignore = function(t2) {
    var e2 = yt;
    yt = null, t2(this), yt = e2;
  }, br.getTweens = function() {
    var t2 = [];
    return this.data.forEach(function(e2) {
      return e2 instanceof Dr ? t2.push.apply(t2, e2.getTweens()) : e2 instanceof sr && !(e2.parent && "nested" === e2.parent.data) && t2.push(e2);
    }), t2;
  }, br.clear = function() {
    this._r.length = this.data.length = 0;
  }, br.kill = function(t2, e2) {
    var r2 = this;
    if (t2) {
      var i2 = this.getTweens();
      this.data.forEach(function(t3) {
        "isFlip" === t3.data && (t3.revert(), t3.getChildren(true, true, false).forEach(function(t4) {
          return i2.splice(i2.indexOf(t4), 1);
        }));
      }), i2.map(function(t3) {
        return { g: t3.globalTime(0), t: t3 };
      }).sort(function(t3, e3) {
        return e3.g - t3.g || -1;
      }).forEach(function(e3) {
        return e3.t.revert(t2);
      }), this.data.forEach(function(e3) {
        return !(e3 instanceof Ge) && e3.revert && e3.revert(t2);
      }), this._r.forEach(function(e3) {
        return e3(t2, r2);
      }), this.isReverted = true;
    } else this.data.forEach(function(t3) {
      return t3.kill && t3.kill();
    });
    if (this.clear(), e2) {
      var n2 = Mr.indexOf(this);
      ~n2 && Mr.splice(n2, 1);
    }
  }, br.revert = function(t2) {
    this.kill(t2 || {});
  }, Dr);
  function Dr(t2, e2) {
    this.selector = e2 && $(e2), this.data = [], this._r = [], this.isReverted = false, t2 && this.add(t2);
  }
  var Pr, Sr = ((Pr = Er.prototype).add = function(t2, e2, r2) {
    o(t2) || (t2 = { matches: t2 });
    var i2, n2, s2, a2 = new Ar(0, r2 || this.scope), u2 = a2.conditions = {};
    for (n2 in this.contexts.push(a2), e2 = a2.add("onMatch", e2), a2.queries = t2) "all" === n2 ? s2 = 1 : (i2 = Tt.matchMedia(t2[n2])) && (Mr.indexOf(a2) < 0 && Mr.push(a2), (u2[n2] = i2.matches) && (s2 = 1), i2.addListener ? i2.addListener(wr) : i2.addEventListener("change", wr));
    return s2 && e2(a2), this;
  }, Pr.revert = function(t2) {
    this.kill(t2 || {});
  }, Pr.kill = function(t2) {
    this.contexts.forEach(function(e2) {
      return e2.kill(t2, true);
    });
  }, Er);
  function Er(t2) {
    this.contexts = [], this.scope = t2;
  }
  var Rr = { registerPlugin: function() {
    for (var t2 = arguments.length, e2 = new Array(t2), r2 = 0; r2 < t2; r2++) e2[r2] = arguments[r2];
    e2.forEach(function(t3) {
      return function(t4) {
        var e3 = (t4 = !t4.name && t4.default || t4).name, r3 = n(t4), i2 = e3 && !r3 && t4.init ? function() {
          this._props = [];
        } : t4, s2 = { init: d, render: dr, add: tr, kill: gr, modifier: mr, rawVars: 0 }, a2 = { targetTest: 0, get: 0, getSetter: lr, aliases: {}, register: 0 };
        if (Le(), t4 !== i2) {
          if (ge[e3]) return;
          A(i2, A(P(t4, s2), a2)), we(i2.prototype, we(s2, P(t4, a2))), ge[i2.prop = e3] = i2, t4.targetTest && (xe.push(i2), _e[e3] = 1), e3 = ("css" === e3 ? "CSS" : e3.charAt(0).toUpperCase() + e3.substr(1)) + "Plugin";
        }
        _(e3, i2), t4.register && t4.register(Br, i2, yr);
      }(t3);
    });
  }, timeline: function(t2) {
    return new He(t2);
  }, getTweensOf: function(t2, e2) {
    return xt.getTweensOf(t2, e2);
  }, getProperty: function(t2, e2, r2, n2) {
    i(t2) && (t2 = De(t2)[0]);
    var s2 = g(t2 || {}).get, a2 = r2 ? C : k;
    return "native" === r2 && (r2 = ""), t2 ? e2 ? a2((ge[e2] && ge[e2].get || s2)(t2, e2, r2, n2)) : function(e3, r3, i2) {
      return a2((ge[e3] && ge[e3].get || s2)(t2, e3, r3, i2));
    } : t2;
  }, quickSetter: function(t2, e2, r2) {
    if (1 < (t2 = De(t2)).length) {
      var i2 = t2.map(function(t3) {
        return Br.quickSetter(t3, e2, r2);
      }), n2 = i2.length;
      return function(t3) {
        for (var e3 = n2; e3--; ) i2[e3](t3);
      };
    }
    t2 = t2[0] || {};
    var s2 = ge[e2], a2 = g(t2), o2 = a2.harness && (a2.harness.aliases || {})[e2] || e2, u2 = s2 ? function(e3) {
      var i3 = new s2();
      Ct._pt = 0, i3.init(t2, r2 ? e3 + r2 : e3, Ct, 0, [t2]), i3.render(1, i3), Ct._pt && dr(1, Ct);
    } : a2.set(t2, o2);
    return s2 ? u2 : function(e3) {
      return u2(t2, o2, r2 ? e3 + r2 : e3, a2, 1);
    };
  }, quickTo: function(t2, e2, r2) {
    function i2(t3, r3, i3) {
      return s2.resetTo(e2, t3, r3, i3);
    }
    var n2, s2 = Br.to(t2, we(((n2 = {})[e2] = "+=0.1", n2.paused = true, n2), r2 || {}));
    return i2.tween = s2, i2;
  }, isTweening: function(t2) {
    return 0 < xt.getTweensOf(t2, true).length;
  }, defaults: function(t2) {
    return t2 && t2.ease && (t2.ease = Ne(t2.ease, Qt.ease)), D(Qt, t2 || {});
  }, config: function(t2) {
    return D(jt, t2 || {});
  }, registerEffect: function(t2) {
    var e2 = t2.name, r2 = t2.effect, i2 = t2.plugins, n2 = t2.defaults, s2 = t2.extendTimeline;
    (i2 || "").split(",").forEach(function(t3) {
      return t3 && !ge[t3] && !fe[t3] && p(e2 + " effect requires " + t3 + " plugin.");
    }), ve[e2] = function(t3, e3, i3) {
      return r2(De(t3), A(e3 || {}, n2), i3);
    }, s2 && (He.prototype[e2] = function(t3, r3, i3) {
      return this.add(ve[e2](t3, o(r3) ? r3 : (i3 = r3) && {}, this), i3);
    });
  }, registerEase: function(t2, e2) {
    Ie[t2] = Ne(e2);
  }, parseEase: function(t2, e2) {
    return arguments.length ? Ne(t2, e2) : Ie;
  }, getById: function(t2) {
    return xt.getById(t2);
  }, exportRoot: function(t2, e2) {
    void 0 === t2 && (t2 = {});
    var r2, i2, n2 = new He(t2);
    for (n2.smoothChildTiming = u(t2.smoothChildTiming), xt.remove(n2), n2._dp = 0, n2._time = n2._tTime = xt._time, r2 = xt._first; r2; ) i2 = r2._next, !e2 && !r2._dur && r2 instanceof sr && r2.vars.onComplete === r2._targets[0] || N(n2, r2, r2._start - r2._delay), r2 = i2;
    return N(xt, n2, 0), n2;
  }, context: function(t2, e2) {
    return t2 ? new Ar(t2, e2) : yt;
  }, matchMedia: function(t2) {
    return new Sr(t2);
  }, matchMediaRefresh: function() {
    return Mr.forEach(function(t2) {
      var e2, r2, i2 = t2.conditions;
      for (r2 in i2) i2[r2] && (i2[r2] = false, e2 = 1);
      e2 && t2.revert();
    }) || wr();
  }, addEventListener: function(t2, e2) {
    var r2 = Or[t2] || (Or[t2] = []);
    ~r2.indexOf(e2) || r2.push(e2);
  }, removeEventListener: function(t2, e2) {
    var r2 = Or[t2], i2 = r2 && r2.indexOf(e2);
    0 <= i2 && r2.splice(i2, 1);
  }, utils: { wrap: function t2(e2, r2, i2) {
    var n2 = r2 - e2;
    return re(e2) ? it(e2, t2(0, e2.length), r2) : W(i2, function(t3) {
      return (n2 + (t3 - e2) % n2) % n2 + e2;
    });
  }, wrapYoyo: function t2(e2, r2, i2) {
    var n2 = r2 - e2, s2 = 2 * n2;
    return re(e2) ? it(e2, t2(0, e2.length - 1), r2) : W(i2, function(t3) {
      return e2 + (n2 < (t3 = (s2 + (t3 - e2) % s2) % s2 || 0) ? s2 - t3 : t3);
    });
  }, distribute: K, random: rt, snap: et, normalize: function(t2, e2, r2) {
    return Pe(t2, e2, 0, 1, r2);
  }, getUnit: H, clamp: function(t2, e2, r2) {
    return W(r2, function(r3) {
      return Ce(t2, e2, r3);
    });
  }, splitColor: ut, toArray: De, selector: $, mapRange: Pe, pipe: function() {
    for (var t2 = arguments.length, e2 = new Array(t2), r2 = 0; r2 < t2; r2++) e2[r2] = arguments[r2];
    return function(t3) {
      return e2.reduce(function(t4, e3) {
        return e3(t4);
      }, t3);
    };
  }, unitize: function(t2, e2) {
    return function(r2) {
      return t2(parseFloat(r2)) + (e2 || H(r2));
    };
  }, interpolate: function t2(e2, r2, n2, s2) {
    var a2 = isNaN(e2 + r2) ? 0 : function(t3) {
      return (1 - t3) * e2 + t3 * r2;
    };
    if (!a2) {
      var o2, u2, h2, f2, l2, c2 = i(e2), p2 = {};
      if (true === n2 && (s2 = 1) && (n2 = null), c2) e2 = { p: e2 }, r2 = { p: r2 };
      else if (re(e2) && !re(r2)) {
        for (h2 = [], f2 = e2.length, l2 = f2 - 2, u2 = 1; u2 < f2; u2++) h2.push(t2(e2[u2 - 1], e2[u2]));
        f2--, a2 = function(t3) {
          t3 *= f2;
          var e3 = Math.min(l2, ~~t3);
          return h2[e3](t3 - e3);
        }, n2 = r2;
      } else s2 || (e2 = we(re(e2) ? [] : {}, e2));
      if (!h2) {
        for (o2 in r2) tr.call(p2, e2, o2, "get", r2[o2]);
        a2 = function(t3) {
          return dr(t3, p2) || (c2 ? e2.p : e2);
        };
      }
    }
    return W(n2, a2);
  }, shuffle: J }, install: l, effects: ve, ticker: Be, updateRoot: He.updateRoot, plugins: ge, globalTimeline: xt, core: { PropTween: yr, globals: _, Tween: sr, Timeline: He, Animation: Ge, getCache: g, _removeLinkedListItem: R, reverting: function() {
    return vt;
  }, context: function(t2) {
    return t2 && yt && (yt.data.push(t2), t2._ctx = yt), yt;
  }, suppressOverwrites: function(t2) {
    return gt = t2;
  } } };
  function zr(t2, e2) {
    for (var r2 = t2._pt; r2 && r2.p !== e2 && r2.op !== e2 && r2.fp !== e2; ) r2 = r2._next;
    return r2;
  }
  function Fr(t2, e2) {
    return { name: t2, rawVars: 1, init: function(t3, r2, n2) {
      n2._onInit = function(t4) {
        var n3, s2;
        if (i(r2) && (n3 = {}, y(r2, function(t5) {
          return n3[t5] = 1;
        }), r2 = n3), e2) {
          for (s2 in n3 = {}, r2) n3[s2] = e2(r2[s2]);
          r2 = n3;
        }
        !function(t5, e3) {
          var r3, i2, n4, s3 = t5._targets;
          for (r3 in e3) for (i2 = s3.length; i2--; ) (n4 = (n4 = t5._ptLookup[i2][r3]) && n4.d) && (n4._pt && (n4 = zr(n4, r3)), n4 && n4.modifier && n4.modifier(e3[r3], t5, s3[i2], r3));
        }(t4, r2);
      };
    } };
  }
  y("to,from,fromTo,delayedCall,set,killTweensOf", function(t2) {
    return Rr[t2] = sr[t2];
  }), Be.add(He.updateRoot), Ct = Rr.to({}, { duration: 0 });
  var Br = Rr.registerPlugin({ name: "attr", init: function(t2, e2, r2, i2, n2) {
    var s2, a2, o2;
    for (s2 in this.tween = r2, e2) o2 = t2.getAttribute(s2) || "", (a2 = this.add(t2, "setAttribute", (o2 || 0) + "", e2[s2], i2, n2, 0, 0, s2)).op = s2, a2.b = o2, this._props.push(s2);
  }, render: function(t2, e2) {
    for (var r2 = e2._pt; r2; ) vt ? r2.set(r2.t, r2.p, r2.b, r2) : r2.r(t2, r2.d), r2 = r2._next;
  } }, { name: "endArray", init: function(t2, e2) {
    for (var r2 = e2.length; r2--; ) this.add(t2, r2, t2[r2] || 0, e2[r2], 0, 0, 0, 0, 0, 1);
  } }, Fr("roundProps", tt), Fr("modifiers"), Fr("snap", et)) || Rr;
  function Lr(t2, e2) {
    return e2.set(e2.t, e2.p, Math.round(1e4 * (e2.s + e2.c * t2)) / 1e4 + e2.u, e2);
  }
  function Ir(t2, e2) {
    return e2.set(e2.t, e2.p, 1 === t2 ? e2.e : Math.round(1e4 * (e2.s + e2.c * t2)) / 1e4 + e2.u, e2);
  }
  function Yr(t2, e2) {
    return e2.set(e2.t, e2.p, t2 ? Math.round(1e4 * (e2.s + e2.c * t2)) / 1e4 + e2.u : e2.b, e2);
  }
  function Ur(t2, e2) {
    var r2 = e2.s + e2.c * t2;
    e2.set(e2.t, e2.p, ~~(r2 + (r2 < 0 ? -0.5 : 0.5)) + e2.u, e2);
  }
  function Xr(t2, e2) {
    return e2.set(e2.t, e2.p, t2 ? e2.e : e2.b, e2);
  }
  function Nr(t2, e2) {
    return e2.set(e2.t, e2.p, 1 !== t2 ? e2.b : e2.e, e2);
  }
  function qr(t2, e2, r2) {
    return t2.style[e2] = r2;
  }
  function Vr(t2, e2, r2) {
    return t2.style.setProperty(e2, r2);
  }
  function jr(t2, e2, r2) {
    return t2._gsap[e2] = r2;
  }
  function Qr(t2, e2, r2) {
    return t2._gsap.scaleX = t2._gsap.scaleY = r2;
  }
  function Gr(t2, e2, r2, i2, n2) {
    var s2 = t2._gsap;
    s2.scaleX = s2.scaleY = r2, s2.renderTransform(n2, s2);
  }
  function Wr(t2, e2, r2, i2, n2) {
    var s2 = t2._gsap;
    s2[e2] = r2, s2.renderTransform(n2, s2);
  }
  function Hr(t2, e2) {
    var r2 = this, i2 = this.target, n2 = i2.style;
    if (t2 in Qi) {
      if (this.tfm = this.tfm || {}, "transform" !== t2 && (~(t2 = Ki[t2] || t2).indexOf(",") ? t2.split(",").forEach(function(t3) {
        return r2.tfm[t3] = on(i2, t3);
      }) : this.tfm[t2] = i2._gsap.x ? i2._gsap[t2] : on(i2, t2)), 0 <= this.props.indexOf(tn)) return;
      i2._gsap.svg && (this.svgo = i2.getAttribute("data-svg-origin"), this.props.push(en, e2, "")), t2 = tn;
    }
    (n2 || e2) && this.props.push(t2, e2, n2[t2]);
  }
  function Zr(t2) {
    t2.translate && (t2.removeProperty("translate"), t2.removeProperty("scale"), t2.removeProperty("rotate"));
  }
  function $r() {
    var t2, e2, r2 = this.props, i2 = this.target, n2 = i2.style, s2 = i2._gsap;
    for (t2 = 0; t2 < r2.length; t2 += 3) r2[t2 + 1] ? i2[r2[t2]] = r2[t2 + 2] : r2[t2 + 2] ? n2[r2[t2]] = r2[t2 + 2] : n2.removeProperty(r2[t2].replace(Zi, "-$1").toLowerCase());
    if (this.tfm) {
      for (e2 in this.tfm) s2[e2] = this.tfm[e2];
      s2.svg && (s2.renderTransform(), i2.setAttribute("data-svg-origin", this.svgo || "")), !(t2 = ki()) || t2.isStart || n2[tn] || (Zr(n2), s2.uncache = 1);
    }
  }
  function Jr(t2, e2) {
    var r2 = { target: t2, props: [], revert: $r, save: Hr };
    return e2 && e2.split(",").forEach(function(t3) {
      return r2.save(t3);
    }), r2;
  }
  function Kr(t2, e2) {
    var r2 = Ti.createElementNS ? Ti.createElementNS((e2 || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t2) : Ti.createElement(t2);
    return r2.style ? r2 : Ti.createElement(t2);
  }
  function ti(t2, e2, r2) {
    var i2 = getComputedStyle(t2);
    return i2[e2] || i2.getPropertyValue(e2.replace(Zi, "-$1").toLowerCase()) || i2.getPropertyValue(e2) || !r2 && ti(t2, nn(e2) || e2, 1) || "";
  }
  function ei() {
    "undefined" != typeof window && window.document && (xi = window, Ti = xi.document, wi = Ti.documentElement, Mi = Kr("div") || { style: {} }, Kr("div"), tn = nn(tn), en = tn + "Origin", Mi.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ci = !!nn("perspective"), ki = Br.core.reverting, bi = 1);
  }
  function ri(t2) {
    var e2, r2 = Kr("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i2 = this.parentNode, n2 = this.nextSibling, s2 = this.style.cssText;
    if (wi.appendChild(r2), r2.appendChild(this), this.style.display = "block", t2) try {
      e2 = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = ri;
    } catch (t3) {
    }
    else this._gsapBBox && (e2 = this._gsapBBox());
    return i2 && (n2 ? i2.insertBefore(this, n2) : i2.appendChild(this)), wi.removeChild(r2), this.style.cssText = s2, e2;
  }
  function ii(t2, e2) {
    for (var r2 = e2.length; r2--; ) if (t2.hasAttribute(e2[r2])) return t2.getAttribute(e2[r2]);
  }
  function ni(t2) {
    var e2;
    try {
      e2 = t2.getBBox();
    } catch (r2) {
      e2 = ri.call(t2, true);
    }
    return e2 && (e2.width || e2.height) || t2.getBBox === ri || (e2 = ri.call(t2, true)), !e2 || e2.width || e2.x || e2.y ? e2 : { x: +ii(t2, ["x", "cx", "x1"]) || 0, y: +ii(t2, ["y", "cy", "y1"]) || 0, width: 0, height: 0 };
  }
  function si(t2) {
    return !(!t2.getCTM || t2.parentNode && !t2.ownerSVGElement || !ni(t2));
  }
  function ai(t2, e2) {
    if (e2) {
      var r2 = t2.style;
      e2 in Qi && e2 !== en && (e2 = tn), r2.removeProperty ? ("ms" !== e2.substr(0, 2) && "webkit" !== e2.substr(0, 6) || (e2 = "-" + e2), r2.removeProperty(e2.replace(Zi, "-$1").toLowerCase())) : r2.removeAttribute(e2);
    }
  }
  function oi(t2, e2, r2, i2, n2, s2) {
    var a2 = new yr(t2._pt, e2, r2, 0, 1, s2 ? Nr : Xr);
    return (t2._pt = a2).b = i2, a2.e = n2, t2._props.push(r2), a2;
  }
  function ui(t2, e2, r2, i2) {
    var n2, s2, a2, o2, u2 = parseFloat(r2) || 0, h2 = (r2 + "").trim().substr((u2 + "").length) || "px", f2 = Mi.style, l2 = $i.test(e2), c2 = "svg" === t2.tagName.toLowerCase(), p2 = (c2 ? "client" : "offset") + (l2 ? "Width" : "Height"), _2 = "px" === i2, d2 = "%" === i2;
    return i2 === h2 || !u2 || sn[i2] || sn[h2] ? u2 : ("px" === h2 || _2 || (u2 = ui(t2, e2, r2, "px")), o2 = t2.getCTM && si(t2), !d2 && "%" !== h2 || !Qi[e2] && !~e2.indexOf("adius") ? (f2[l2 ? "width" : "height"] = 100 + (_2 ? h2 : i2), s2 = ~e2.indexOf("adius") || "em" === i2 && t2.appendChild && !c2 ? t2 : t2.parentNode, o2 && (s2 = (t2.ownerSVGElement || {}).parentNode), s2 && s2 !== Ti && s2.appendChild || (s2 = Ti.body), (a2 = s2._gsap) && d2 && a2.width && l2 && a2.time === Be.time && !a2.uncache ? x(u2 / a2.width * 100) : (!d2 && "%" !== h2 || an[ti(s2, "display")] || (f2.position = ti(t2, "position")), s2 === t2 && (f2.position = "static"), s2.appendChild(Mi), n2 = Mi[p2], s2.removeChild(Mi), f2.position = "absolute", l2 && d2 && ((a2 = g(s2)).time = Be.time, a2.width = s2[p2]), x(_2 ? n2 * u2 / 100 : n2 && u2 ? 100 / n2 * u2 : 0))) : (n2 = o2 ? t2.getBBox()[l2 ? "width" : "height"] : t2[p2], x(d2 ? u2 / n2 * 100 : u2 / 100 * n2)));
  }
  function hi(t2, e2, r2, i2) {
    if (!r2 || "none" === r2) {
      var n2 = nn(e2, t2, 1), s2 = n2 && ti(t2, n2, 1);
      s2 && s2 !== r2 ? (e2 = n2, r2 = s2) : "borderColor" === e2 && (r2 = ti(t2, "borderTopColor"));
    }
    var a2, o2, u2, h2, f2, l2, c2, p2, _2, d2, m2, g2 = new yr(this._pt, t2.style, e2, 0, 1, _r), v2 = 0, y2 = 0;
    if (g2.b = r2, g2.e = i2, r2 += "", "auto" == (i2 += "") && (t2.style[e2] = i2, i2 = ti(t2, e2) || i2, t2.style[e2] = r2), lt(a2 = [r2, i2]), i2 = a2[1], u2 = (r2 = a2[0]).match(se) || [], (i2.match(se) || []).length) {
      for (; o2 = se.exec(i2); ) c2 = o2[0], _2 = i2.substring(v2, o2.index), f2 ? f2 = (f2 + 1) % 5 : "rgba(" !== _2.substr(-5) && "hsla(" !== _2.substr(-5) || (f2 = 1), c2 !== (l2 = u2[y2++] || "") && (h2 = parseFloat(l2) || 0, m2 = l2.substr((h2 + "").length), "=" === c2.charAt(1) && (c2 = w(h2, c2) + m2), p2 = parseFloat(c2), d2 = c2.substr((p2 + "").length), v2 = se.lastIndex - d2.length, d2 || (d2 = d2 || jt.units[e2] || m2, v2 === i2.length && (i2 += d2, g2.e += d2)), m2 !== d2 && (h2 = ui(t2, e2, l2, d2) || 0), g2._pt = { _next: g2._pt, p: _2 || 1 === y2 ? _2 : ",", s: h2, c: p2 - h2, m: f2 && f2 < 4 || "zIndex" === e2 ? Math.round : 0 });
      g2.c = v2 < i2.length ? i2.substring(v2, i2.length) : "";
    } else g2.r = "display" === e2 && "none" === i2 ? Nr : Xr;
    return oe.test(i2) && (g2.e = 0), this._pt = g2;
  }
  function fi(t2) {
    var e2 = t2.split(" "), r2 = e2[0], i2 = e2[1] || "50%";
    return "top" !== r2 && "bottom" !== r2 && "left" !== i2 && "right" !== i2 || (t2 = r2, r2 = i2, i2 = t2), e2[0] = un[r2] || r2, e2[1] = un[i2] || i2, e2.join(" ");
  }
  function li(t2, e2) {
    if (e2.tween && e2.tween._time === e2.tween._dur) {
      var r2, i2, n2, s2 = e2.t, a2 = s2.style, o2 = e2.u, u2 = s2._gsap;
      if ("all" === o2 || true === o2) a2.cssText = "", i2 = 1;
      else for (n2 = (o2 = o2.split(",")).length; -1 < --n2; ) r2 = o2[n2], Qi[r2] && (i2 = 1, r2 = "transformOrigin" === r2 ? en : tn), ai(s2, r2);
      i2 && (ai(s2, tn), u2 && (u2.svg && s2.removeAttribute("transform"), cn(s2, 1), u2.uncache = 1, Zr(a2)));
    }
  }
  function ci(t2) {
    return "matrix(1, 0, 0, 1, 0, 0)" === t2 || "none" === t2 || !t2;
  }
  function pi(t2) {
    var e2 = ti(t2, tn);
    return ci(e2) ? fn : e2.substr(7).match(ne).map(x);
  }
  function _i(t2, e2) {
    var r2, i2, n2, s2, a2 = t2._gsap || g(t2), o2 = t2.style, u2 = pi(t2);
    return a2.svg && t2.getAttribute("transform") ? "1,0,0,1,0,0" === (u2 = [(n2 = t2.transform.baseVal.consolidate().matrix).a, n2.b, n2.c, n2.d, n2.e, n2.f]).join(",") ? fn : u2 : (u2 !== fn || t2.offsetParent || t2 === wi || a2.svg || (n2 = o2.display, o2.display = "block", (r2 = t2.parentNode) && t2.offsetParent || (s2 = 1, i2 = t2.nextElementSibling, wi.appendChild(t2)), u2 = pi(t2), n2 ? o2.display = n2 : ai(t2, "display"), s2 && (i2 ? r2.insertBefore(t2, i2) : r2 ? r2.appendChild(t2) : wi.removeChild(t2))), e2 && 6 < u2.length ? [u2[0], u2[1], u2[4], u2[5], u2[12], u2[13]] : u2);
  }
  function di(t2, e2, r2, i2, n2, s2) {
    var a2, o2, u2, h2 = t2._gsap, f2 = n2 || _i(t2, true), l2 = h2.xOrigin || 0, c2 = h2.yOrigin || 0, p2 = h2.xOffset || 0, _2 = h2.yOffset || 0, d2 = f2[0], m2 = f2[1], g2 = f2[2], v2 = f2[3], y2 = f2[4], x2 = f2[5], T2 = e2.split(" "), w2 = parseFloat(T2[0]) || 0, b2 = parseFloat(T2[1]) || 0;
    r2 ? f2 !== fn && (o2 = d2 * v2 - m2 * g2) && (u2 = w2 * (-m2 / o2) + b2 * (d2 / o2) - (d2 * x2 - m2 * y2) / o2, w2 = w2 * (v2 / o2) + b2 * (-g2 / o2) + (g2 * x2 - v2 * y2) / o2, b2 = u2) : (w2 = (a2 = ni(t2)).x + (~T2[0].indexOf("%") ? w2 / 100 * a2.width : w2), b2 = a2.y + (~(T2[1] || T2[0]).indexOf("%") ? b2 / 100 * a2.height : b2)), i2 || false !== i2 && h2.smooth ? (y2 = w2 - l2, x2 = b2 - c2, h2.xOffset = p2 + (y2 * d2 + x2 * g2) - y2, h2.yOffset = _2 + (y2 * m2 + x2 * v2) - x2) : h2.xOffset = h2.yOffset = 0, h2.xOrigin = w2, h2.yOrigin = b2, h2.smooth = !!i2, h2.origin = e2, h2.originIsAbsolute = !!r2, t2.style[en] = "0px 0px", s2 && (oi(s2, h2, "xOrigin", l2, w2), oi(s2, h2, "yOrigin", c2, b2), oi(s2, h2, "xOffset", p2, h2.xOffset), oi(s2, h2, "yOffset", _2, h2.yOffset)), t2.setAttribute("data-svg-origin", w2 + " " + b2);
  }
  function mi(t2, e2, r2) {
    var i2 = H(e2);
    return x(parseFloat(e2) + parseFloat(ui(t2, "x", r2 + "px", i2))) + i2;
  }
  function gi(t2, e2, r2, n2, s2) {
    var a2, o2, u2 = 360, h2 = i(s2), f2 = parseFloat(s2) * (h2 && ~s2.indexOf("rad") ? Gi : 1) - n2, l2 = n2 + f2 + "deg";
    return h2 && ("short" === (a2 = s2.split("_")[1]) && (f2 %= u2) != f2 % 180 && (f2 += f2 < 0 ? u2 : -u2), "cw" === a2 && f2 < 0 ? f2 = (f2 + 36e9) % u2 - ~~(f2 / u2) * u2 : "ccw" === a2 && 0 < f2 && (f2 = (f2 - 36e9) % u2 - ~~(f2 / u2) * u2)), t2._pt = o2 = new yr(t2._pt, e2, r2, n2, f2, Ir), o2.e = l2, o2.u = "deg", t2._props.push(r2), o2;
  }
  function vi(t2, e2) {
    for (var r2 in e2) t2[r2] = e2[r2];
    return t2;
  }
  function yi(t2, e2, r2) {
    var i2, n2, s2, a2, o2, u2, h2, f2 = vi({}, r2._gsap), l2 = r2.style;
    for (n2 in f2.svg ? (s2 = r2.getAttribute("transform"), r2.setAttribute("transform", ""), l2[tn] = e2, i2 = cn(r2, 1), ai(r2, tn), r2.setAttribute("transform", s2)) : (s2 = getComputedStyle(r2)[tn], l2[tn] = e2, i2 = cn(r2, 1), l2[tn] = s2), Qi) (s2 = f2[n2]) !== (a2 = i2[n2]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n2) < 0 && (o2 = H(s2) !== (h2 = H(a2)) ? ui(r2, n2, s2, h2) : parseFloat(s2), u2 = parseFloat(a2), t2._pt = new yr(t2._pt, i2, n2, o2, u2 - o2, Lr), t2._pt.u = h2 || 0, t2._props.push(n2));
    vi(i2, f2);
  }
  sr.version = He.version = Br.version = "3.11.2", Ot = 1, h() && Le();
  var xi, Ti, wi, bi, Mi, Oi, ki, Ci, Ai = Ie.Power0, Di = Ie.Power1, Pi = Ie.Power2, Si = Ie.Power3, Ei = Ie.Power4, Ri = Ie.Linear, zi = Ie.Quad, Fi = Ie.Cubic, Bi = Ie.Quart, Li = Ie.Quint, Ii = Ie.Strong, Yi = Ie.Elastic, Ui = Ie.Back, Xi = Ie.SteppedEase, Ni = Ie.Bounce, qi = Ie.Sine, Vi = Ie.Expo, ji = Ie.Circ, Qi = {}, Gi = 180 / Math.PI, Wi = Math.PI / 180, Hi = Math.atan2, Zi = /([A-Z])/g, $i = /(left|right|width|margin|padding|x)/i, Ji = /[\s,\(]\S/, Ki = { autoAlpha: "opacity,visibility", scale: "scaleX,scaleY", alpha: "opacity" }, tn = "transform", en = tn + "Origin", rn = "O,Moz,ms,Ms,Webkit".split(","), nn = function(t2, e2, r2) {
    var i2 = (e2 || Mi).style, n2 = 5;
    if (t2 in i2 && !r2) return t2;
    for (t2 = t2.charAt(0).toUpperCase() + t2.substr(1); n2-- && !(rn[n2] + t2 in i2); ) ;
    return n2 < 0 ? null : (3 === n2 ? "ms" : 0 <= n2 ? rn[n2] : "") + t2;
  }, sn = { deg: 1, rad: 1, turn: 1 }, an = { grid: 1, flex: 1 }, on = function(t2, e2, r2, i2) {
    var n2;
    return bi || ei(), e2 in Ki && "transform" !== e2 && ~(e2 = Ki[e2]).indexOf(",") && (e2 = e2.split(",")[0]), Qi[e2] && "transform" !== e2 ? (n2 = cn(t2, i2), n2 = "transformOrigin" !== e2 ? n2[e2] : n2.svg ? n2.origin : pn(ti(t2, en)) + " " + n2.zOrigin + "px") : (n2 = t2.style[e2]) && "auto" !== n2 && !i2 && !~(n2 + "").indexOf("calc(") || (n2 = hn[e2] && hn[e2](t2, e2, r2) || ti(t2, e2) || v(t2, e2) || ("opacity" === e2 ? 1 : 0)), r2 && !~(n2 + "").trim().indexOf(" ") ? ui(t2, e2, n2, r2) + r2 : n2;
  }, un = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" }, hn = { clearProps: function(t2, e2, r2, i2, n2) {
    if ("isFromStart" !== n2.data) {
      var s2 = t2._pt = new yr(t2._pt, e2, r2, 0, 0, li);
      return s2.u = i2, s2.pr = -10, s2.tween = n2, t2._props.push(r2), 1;
    }
  } }, fn = [1, 0, 0, 1, 0, 0], ln = {}, cn = function(t2, e2) {
    var r2 = t2._gsap || new Qe(t2);
    if ("x" in r2 && !e2 && !r2.uncache) return r2;
    var i2, n2, s2, a2, o2, u2, h2, f2, l2, c2, p2, _2, d2, m2, g2, v2, y2, T2, w2, b2, M2, O2, k2, C2, A2, D2, P2, S2, E2, R2, z2, F2, B2 = t2.style, L2 = r2.scaleX < 0, I2 = "deg", Y2 = getComputedStyle(t2), U2 = ti(t2, en) || "0";
    return i2 = n2 = s2 = u2 = h2 = f2 = l2 = c2 = p2 = 0, a2 = o2 = 1, r2.svg = !(!t2.getCTM || !si(t2)), Y2.translate && ("none" === Y2.translate && "none" === Y2.scale && "none" === Y2.rotate || (B2[tn] = ("none" !== Y2.translate ? "translate3d(" + (Y2.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== Y2.rotate ? "rotate(" + Y2.rotate + ") " : "") + ("none" !== Y2.scale ? "scale(" + Y2.scale.split(" ").join(",") + ") " : "") + ("none" !== Y2[tn] ? Y2[tn] : "")), B2.scale = B2.rotate = B2.translate = "none"), m2 = _i(t2, r2.svg), r2.svg && (C2 = r2.uncache ? (A2 = t2.getBBox(), U2 = r2.xOrigin - A2.x + "px " + (r2.yOrigin - A2.y) + "px", "") : !e2 && t2.getAttribute("data-svg-origin"), di(t2, C2 || U2, !!C2 || r2.originIsAbsolute, false !== r2.smooth, m2)), _2 = r2.xOrigin || 0, d2 = r2.yOrigin || 0, m2 !== fn && (T2 = m2[0], w2 = m2[1], b2 = m2[2], M2 = m2[3], i2 = O2 = m2[4], n2 = k2 = m2[5], 6 === m2.length ? (a2 = Math.sqrt(T2 * T2 + w2 * w2), o2 = Math.sqrt(M2 * M2 + b2 * b2), u2 = T2 || w2 ? Hi(w2, T2) * Gi : 0, (l2 = b2 || M2 ? Hi(b2, M2) * Gi + u2 : 0) && (o2 *= Math.abs(Math.cos(l2 * Wi))), r2.svg && (i2 -= _2 - (_2 * T2 + d2 * b2), n2 -= d2 - (_2 * w2 + d2 * M2))) : (F2 = m2[6], R2 = m2[7], P2 = m2[8], S2 = m2[9], E2 = m2[10], z2 = m2[11], i2 = m2[12], n2 = m2[13], s2 = m2[14], h2 = (g2 = Hi(F2, E2)) * Gi, g2 && (C2 = O2 * (v2 = Math.cos(-g2)) + P2 * (y2 = Math.sin(-g2)), A2 = k2 * v2 + S2 * y2, D2 = F2 * v2 + E2 * y2, P2 = O2 * -y2 + P2 * v2, S2 = k2 * -y2 + S2 * v2, E2 = F2 * -y2 + E2 * v2, z2 = R2 * -y2 + z2 * v2, O2 = C2, k2 = A2, F2 = D2), f2 = (g2 = Hi(-b2, E2)) * Gi, g2 && (v2 = Math.cos(-g2), z2 = M2 * (y2 = Math.sin(-g2)) + z2 * v2, T2 = C2 = T2 * v2 - P2 * y2, w2 = A2 = w2 * v2 - S2 * y2, b2 = D2 = b2 * v2 - E2 * y2), u2 = (g2 = Hi(w2, T2)) * Gi, g2 && (C2 = T2 * (v2 = Math.cos(g2)) + w2 * (y2 = Math.sin(g2)), A2 = O2 * v2 + k2 * y2, w2 = w2 * v2 - T2 * y2, k2 = k2 * v2 - O2 * y2, T2 = C2, O2 = A2), h2 && 359.9 < Math.abs(h2) + Math.abs(u2) && (h2 = u2 = 0, f2 = 180 - f2), a2 = x(Math.sqrt(T2 * T2 + w2 * w2 + b2 * b2)), o2 = x(Math.sqrt(k2 * k2 + F2 * F2)), g2 = Hi(O2, k2), l2 = 2e-4 < Math.abs(g2) ? g2 * Gi : 0, p2 = z2 ? 1 / (z2 < 0 ? -z2 : z2) : 0), r2.svg && (C2 = t2.getAttribute("transform"), r2.forceCSS = t2.setAttribute("transform", "") || !ci(ti(t2, tn)), C2 && t2.setAttribute("transform", C2))), 90 < Math.abs(l2) && Math.abs(l2) < 270 && (L2 ? (a2 *= -1, l2 += u2 <= 0 ? 180 : -180, u2 += u2 <= 0 ? 180 : -180) : (o2 *= -1, l2 += l2 <= 0 ? 180 : -180)), e2 = e2 || r2.uncache, r2.x = i2 - ((r2.xPercent = i2 && (!e2 && r2.xPercent || (Math.round(t2.offsetWidth / 2) === Math.round(-i2) ? -50 : 0))) ? t2.offsetWidth * r2.xPercent / 100 : 0) + "px", r2.y = n2 - ((r2.yPercent = n2 && (!e2 && r2.yPercent || (Math.round(t2.offsetHeight / 2) === Math.round(-n2) ? -50 : 0))) ? t2.offsetHeight * r2.yPercent / 100 : 0) + "px", r2.z = s2 + "px", r2.scaleX = x(a2), r2.scaleY = x(o2), r2.rotation = x(u2) + I2, r2.rotationX = x(h2) + I2, r2.rotationY = x(f2) + I2, r2.skewX = l2 + I2, r2.skewY = c2 + I2, r2.transformPerspective = p2 + "px", (r2.zOrigin = parseFloat(U2.split(" ")[2]) || 0) && (B2[en] = pn(U2)), r2.xOffset = r2.yOffset = 0, r2.force3D = jt.force3D, r2.renderTransform = r2.svg ? yn : Ci ? vn : _n, r2.uncache = 0, r2;
  }, pn = function(t2) {
    return (t2 = t2.split(" "))[0] + " " + t2[1];
  }, _n = function(t2, e2) {
    e2.z = "0px", e2.rotationY = e2.rotationX = "0deg", e2.force3D = 0, vn(t2, e2);
  }, dn = "0deg", mn = "0px", gn = ") ", vn = function(t2, e2) {
    var r2 = e2 || this, i2 = r2.xPercent, n2 = r2.yPercent, s2 = r2.x, a2 = r2.y, o2 = r2.z, u2 = r2.rotation, h2 = r2.rotationY, f2 = r2.rotationX, l2 = r2.skewX, c2 = r2.skewY, p2 = r2.scaleX, _2 = r2.scaleY, d2 = r2.transformPerspective, m2 = r2.force3D, g2 = r2.target, v2 = r2.zOrigin, y2 = "", x2 = "auto" === m2 && t2 && 1 !== t2 || true === m2;
    if (v2 && (f2 !== dn || h2 !== dn)) {
      var T2, w2 = parseFloat(h2) * Wi, b2 = Math.sin(w2), M2 = Math.cos(w2);
      w2 = parseFloat(f2) * Wi, s2 = mi(g2, s2, b2 * (T2 = Math.cos(w2)) * -v2), a2 = mi(g2, a2, -Math.sin(w2) * -v2), o2 = mi(g2, o2, M2 * T2 * -v2 + v2);
    }
    d2 !== mn && (y2 += "perspective(" + d2 + gn), (i2 || n2) && (y2 += "translate(" + i2 + "%, " + n2 + "%) "), !x2 && s2 === mn && a2 === mn && o2 === mn || (y2 += o2 !== mn || x2 ? "translate3d(" + s2 + ", " + a2 + ", " + o2 + ") " : "translate(" + s2 + ", " + a2 + gn), u2 !== dn && (y2 += "rotate(" + u2 + gn), h2 !== dn && (y2 += "rotateY(" + h2 + gn), f2 !== dn && (y2 += "rotateX(" + f2 + gn), l2 === dn && c2 === dn || (y2 += "skew(" + l2 + ", " + c2 + gn), 1 === p2 && 1 === _2 || (y2 += "scale(" + p2 + ", " + _2 + gn), g2.style[tn] = y2 || "translate(0, 0)";
  }, yn = function(t2, e2) {
    var r2, i2, n2, s2, a2, o2 = e2 || this, u2 = o2.xPercent, h2 = o2.yPercent, f2 = o2.x, l2 = o2.y, c2 = o2.rotation, p2 = o2.skewX, _2 = o2.skewY, d2 = o2.scaleX, m2 = o2.scaleY, g2 = o2.target, v2 = o2.xOrigin, y2 = o2.yOrigin, T2 = o2.xOffset, w2 = o2.yOffset, b2 = o2.forceCSS, M2 = parseFloat(f2), O2 = parseFloat(l2);
    c2 = parseFloat(c2), p2 = parseFloat(p2), (_2 = parseFloat(_2)) && (p2 += _2 = parseFloat(_2), c2 += _2), c2 || p2 ? (c2 *= Wi, p2 *= Wi, r2 = Math.cos(c2) * d2, i2 = Math.sin(c2) * d2, n2 = Math.sin(c2 - p2) * -m2, s2 = Math.cos(c2 - p2) * m2, p2 && (_2 *= Wi, a2 = Math.tan(p2 - _2), n2 *= a2 = Math.sqrt(1 + a2 * a2), s2 *= a2, _2 && (a2 = Math.tan(_2), r2 *= a2 = Math.sqrt(1 + a2 * a2), i2 *= a2)), r2 = x(r2), i2 = x(i2), n2 = x(n2), s2 = x(s2)) : (r2 = d2, s2 = m2, i2 = n2 = 0), (M2 && !~(f2 + "").indexOf("px") || O2 && !~(l2 + "").indexOf("px")) && (M2 = ui(g2, "x", f2, "px"), O2 = ui(g2, "y", l2, "px")), (v2 || y2 || T2 || w2) && (M2 = x(M2 + v2 - (v2 * r2 + y2 * n2) + T2), O2 = x(O2 + y2 - (v2 * i2 + y2 * s2) + w2)), (u2 || h2) && (M2 = x(M2 + u2 / 100 * (a2 = g2.getBBox()).width), O2 = x(O2 + h2 / 100 * a2.height)), a2 = "matrix(" + r2 + "," + i2 + "," + n2 + "," + s2 + "," + M2 + "," + O2 + ")", g2.setAttribute("transform", a2), b2 && (g2.style[tn] = a2);
  };
  y("padding,margin,Width,Radius", function(t2, e2) {
    var r2 = "Right", i2 = "Bottom", n2 = "Left", s2 = (e2 < 3 ? ["Top", r2, i2, n2] : ["Top" + n2, "Top" + r2, i2 + r2, i2 + n2]).map(function(r3) {
      return e2 < 2 ? t2 + r3 : "border" + r3 + t2;
    });
    hn[1 < e2 ? "border" + t2 : t2] = function(t3, e3, r3, i3, n3) {
      var a2, o2;
      if (arguments.length < 4) return a2 = s2.map(function(e4) {
        return on(t3, e4, r3);
      }), 5 === (o2 = a2.join(" ")).split(a2[0]).length ? a2[0] : o2;
      a2 = (i3 + "").split(" "), o2 = {}, s2.forEach(function(t4, e4) {
        return o2[t4] = a2[e4] = a2[e4] || a2[(e4 - 1) / 2 | 0];
      }), t3.init(e3, o2, n3);
    };
  });
  var xn, Tn, wn = { name: "css", register: ei, targetTest: function(t2) {
    return t2.style && t2.nodeType;
  }, init: function(t2, e2, r2, n2, s2) {
    var a2, o2, u2, h2, f2, l2, p2, _2, d2, m2, g2, v2, y2, x2, T2, b2, M2 = this._props, O2 = t2.style, k2 = r2.vars.startAt;
    for (p2 in bi || ei(), this.styles = this.styles || Jr(t2), b2 = this.styles.props, this.tween = r2, e2) if ("autoRound" !== p2 && (o2 = e2[p2], !ge[p2] || !Ze(p2, e2, r2, n2, t2, s2))) {
      if (f2 = typeof o2, l2 = hn[p2], "function" === f2 && (f2 = typeof (o2 = o2.call(r2, n2, t2, s2))), "string" === f2 && ~o2.indexOf("random(") && (o2 = nt(o2)), l2) l2(this, t2, p2, o2, r2) && (T2 = 1);
      else if ("--" === p2.substr(0, 2)) a2 = (getComputedStyle(t2).getPropertyValue(p2) + "").trim(), o2 += "", ze.lastIndex = 0, ze.test(a2) || (_2 = H(a2), d2 = H(o2)), d2 ? _2 !== d2 && (a2 = ui(t2, p2, a2, d2) + d2) : _2 && (o2 += _2), this.add(O2, "setProperty", a2, o2, n2, s2, 0, 0, p2), M2.push(p2), b2.push(p2, 0, O2[p2]);
      else if ("undefined" !== f2) {
        if (k2 && p2 in k2 ? (i(a2 = "function" == typeof k2[p2] ? k2[p2].call(r2, n2, t2, s2) : k2[p2]) && ~a2.indexOf("random(") && (a2 = nt(a2)), H(a2 + "") || (a2 += jt.units[p2] || H(on(t2, p2)) || ""), "=" === (a2 + "").charAt(1) && (a2 = on(t2, p2))) : a2 = on(t2, p2), h2 = parseFloat(a2), (m2 = "string" === f2 && "=" === o2.charAt(1) && o2.substr(0, 2)) && (o2 = o2.substr(2)), u2 = parseFloat(o2), p2 in Ki && ("autoAlpha" === p2 && (1 === h2 && "hidden" === on(t2, "visibility") && u2 && (h2 = 0), b2.push("visibility", 0, O2.visibility), oi(this, O2, "visibility", h2 ? "inherit" : "hidden", u2 ? "inherit" : "hidden", !u2)), "scale" !== p2 && "transform" !== p2 && ~(p2 = Ki[p2]).indexOf(",") && (p2 = p2.split(",")[0])), g2 = p2 in Qi) if (this.styles.save(p2), v2 || ((y2 = t2._gsap).renderTransform && !e2.parseTransform || cn(t2, e2.parseTransform), x2 = false !== e2.smoothOrigin && y2.smooth, (v2 = this._pt = new yr(this._pt, O2, tn, 0, 1, y2.renderTransform, y2, 0, -1)).dep = 1), "scale" === p2) this._pt = new yr(this._pt, y2, "scaleY", h2, (m2 ? w(h2, m2 + u2) : u2) - h2 || 0, Lr), this._pt.u = 0, M2.push("scaleY", p2), p2 += "X";
        else {
          if ("transformOrigin" === p2) {
            b2.push(en, 0, O2[en]), o2 = fi(o2), y2.svg ? di(t2, o2, 0, x2, 0, this) : ((d2 = parseFloat(o2.split(" ")[2]) || 0) !== y2.zOrigin && oi(this, y2, "zOrigin", y2.zOrigin, d2), oi(this, O2, p2, pn(a2), pn(o2)));
            continue;
          }
          if ("svgOrigin" === p2) {
            di(t2, o2, 1, x2, 0, this);
            continue;
          }
          if (p2 in ln) {
            gi(this, y2, p2, h2, m2 ? w(h2, m2 + o2) : o2);
            continue;
          }
          if ("smoothOrigin" === p2) {
            oi(this, y2, "smooth", y2.smooth, o2);
            continue;
          }
          if ("force3D" === p2) {
            y2[p2] = o2;
            continue;
          }
          if ("transform" === p2) {
            yi(this, o2, t2);
            continue;
          }
        }
        else p2 in O2 || (p2 = nn(p2) || p2);
        if (g2 || (u2 || 0 === u2) && (h2 || 0 === h2) && !Ji.test(o2) && p2 in O2) u2 = u2 || 0, (_2 = (a2 + "").substr((h2 + "").length)) !== (d2 = H(o2) || (p2 in jt.units ? jt.units[p2] : _2)) && (h2 = ui(t2, p2, a2, d2)), this._pt = new yr(this._pt, g2 ? y2 : O2, p2, h2, (m2 ? w(h2, m2 + u2) : u2) - h2, g2 || "px" !== d2 && "zIndex" !== p2 || false === e2.autoRound ? Lr : Ur), this._pt.u = d2 || 0, _2 !== d2 && "%" !== d2 && (this._pt.b = a2, this._pt.r = Yr);
        else if (p2 in O2) hi.call(this, t2, p2, a2, m2 ? m2 + o2 : o2);
        else {
          if (!(p2 in t2)) {
            c(p2, o2);
            continue;
          }
          this.add(t2, p2, a2 || t2[p2], m2 ? m2 + o2 : o2, n2, s2);
        }
        g2 || (p2 in O2 ? b2.push(p2, 0, O2[p2]) : b2.push(p2, 1, a2 || t2[p2])), M2.push(p2);
      }
    }
    T2 && vr(this);
  }, render: function(t2, e2) {
    if (e2.tween._time || !ki()) for (var r2 = e2._pt; r2; ) r2.r(t2, r2.d), r2 = r2._next;
    else e2.styles.revert();
  }, get: on, aliases: Ki, getSetter: function(t2, e2, r2) {
    var i2 = Ki[e2];
    return i2 && i2.indexOf(",") < 0 && (e2 = i2), e2 in Qi && e2 !== en && (t2._gsap.x || on(t2, "x")) ? r2 && Oi === r2 ? "scale" === e2 ? Qr : jr : (Oi = r2 || {}) && ("scale" === e2 ? Gr : Wr) : t2.style && !a(t2.style[e2]) ? qr : ~e2.indexOf("-") ? Vr : lr(t2, e2);
  }, core: { _removeProperty: ai, _getMatrix: _i } };
  Br.utils.checkPrefix = nn, Br.core.getStyleSaver = Jr, Tn = y("x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + (xn = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t2) {
    Qi[t2] = 1;
  }), y(xn, function(t2) {
    jt.units[t2] = "deg", ln[t2] = 1;
  }), Ki[Tn[13]] = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent," + xn, y("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t2) {
    var e2 = t2.split(":");
    Ki[e2[1]] = Tn[e2[0]];
  }), y("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t2) {
    jt.units[t2] = "px";
  }), Br.registerPlugin(wn);
  var bn = Br.registerPlugin(wn) || Br, Mn = bn.core.Tween;
  t.Back = Ui, t.Bounce = Ni, t.CSSPlugin = wn, t.Circ = ji, t.Cubic = Fi, t.Elastic = Yi, t.Expo = Vi, t.Linear = Ri, t.Power0 = Ai, t.Power1 = Di, t.Power2 = Pi, t.Power3 = Si, t.Power4 = Ei, t.Quad = zi, t.Quart = Bi, t.Quint = Li, t.Sine = qi, t.SteppedEase = Xi, t.Strong = Ii, t.TimelineLite = He, t.TimelineMax = He, t.TweenLite = sr, t.TweenMax = Mn, t.default = bn, t.gsap = bn, "undefined" == typeof window || window !== t ? Object.defineProperty(t, "__esModule", { value: true }) : delete t.default;
});
(function($) {
  "use strict";
  $(document).ready(function() {
    $("#mobile-menu").meanmenu({
      meanMenuContainer: ".mobile-menu",
      meanScreenWidth: "1199",
      meanExpand: ['<i class="far fa-plus"></i>']
    });
    $(".offcanvas__close,.offcanvas__overlay").on("click", function() {
      $(".offcanvas__info").removeClass("info-open");
      $(".offcanvas__overlay").removeClass("overlay-open");
    });
    $(".sidebar__toggle").on("click", function() {
      $(".offcanvas__info").addClass("info-open");
      $(".offcanvas__overlay").addClass("overlay-open");
    });
    $(".body-overlay").on("click", function() {
      $(".offcanvas__area").removeClass("offcanvas-opened");
      $(".df-search-area").removeClass("opened");
      ;
      $(".body-overlay").removeClass("opened");
    });
    $(window).on("scroll", function() {
      const mainHeaderHeight = $(".header-main").outerHeight();
      if ($(window).scrollTop() > mainHeaderHeight) {
        $(".sticky-header").css("transform", "translateY(0)");
      } else {
        $(".sticky-header").css("transform", "translateY(-180%)");
      }
    });
    $(".img-popup").magnificPopup({
      type: "image",
      gallery: {
        enabled: true
      }
    });
    $(".video-popup").magnificPopup({
      type: "iframe",
      callbacks: {}
    });
    $(".count").counterUp({
      delay: 15,
      time: 4e3
    });
    new WOW().init();
    $("select").niceSelect();
    if ($(".hero-book-slider").length > 0) {
      const heroBookSlider = new Swiper(".hero-book-slider", {
        spaceBetween: 30,
        speed: 2e3,
        loop: true,
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next"
        }
      });
    }
    if ($(".book-slider").length > 0) {
      const bookSlider = new Swiper(".book-slider", {
        spaceBetween: 30,
        speed: 2e3,
        loop: true,
        autoplay: {
          delay: 2e3,
          disableOnInteraction: false
        },
        breakpoints: {
          1499: {
            slidesPerView: 5
          },
          1399: {
            slidesPerView: 4
          },
          1199: {
            slidesPerView: 3
          },
          991: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }
      });
    }
    if ($(".featured-books-slider").length > 0) {
      const featuredBookSlider = new Swiper(".featured-books-slider", {
        spaceBetween: 30,
        speed: 2e3,
        loop: true,
        autoplay: {
          delay: 2e3,
          disableOnInteraction: false
        },
        centeredSlides: true,
        breakpoints: {
          1499: {
            slidesPerView: 2
          },
          1399: {
            slidesPerView: 2
          },
          1199: {
            slidesPerView: 1
          },
          991: {
            slidesPerView: 1
          },
          767: {
            slidesPerView: 1
          },
          575: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        }
      });
    }
    if ($(".book-catagories-slider").length > 0) {
      const bookCatagoriesSlider = new Swiper(".book-catagories-slider", {
        spaceBetween: 30,
        speed: 2e3,
        loop: true,
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next"
        },
        breakpoints: {
          1399: {
            slidesPerView: 5
          },
          1199: {
            slidesPerView: 4
          },
          991: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }
      });
    }
    if ($(".testimonial-slider").length > 0) {
      const testimonialSlider = new Swiper(".testimonial-slider", {
        centeredSlides: true,
        spaceBetween: 30,
        speed: 2e3,
        loop: true,
        autoplay: {
          delay: 2e3,
          disableOnInteraction: false
        },
        breakpoints: {
          1399: {
            slidesPerView: 3
          },
          1199: {
            slidesPerView: 2,
            centeredSlides: false
          },
          991: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }
      });
    }
    if ($(".team-slider").length > 0) {
      const teamSlider = new Swiper(".team-slider", {
        spaceBetween: 30,
        speed: 2500,
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false
        },
        navigation: {
          nextEl: ".array-prev",
          prevEl: ".array-next"
        },
        breakpoints: {
          1399: {
            slidesPerView: 6
          },
          1199: {
            slidesPerView: 4
          },
          991: {
            slidesPerView: 3
          },
          767: {
            slidesPerView: 2
          },
          575: {
            slidesPerView: 1
          },
          0: {
            slidesPerView: 1
          }
        }
      });
    }
    function getVals() {
      let parent = this.parentNode;
      let slides = parent.getElementsByTagName("input");
      let slide1 = parseFloat(slides[0].value);
      let slide2 = parseFloat(slides[1].value);
      if (slide1 > slide2) {
        let tmp = slide2;
        slide2 = slide1;
        slide1 = tmp;
      }
      let displayElement = parent.getElementsByClassName("rangeValues")[0];
      displayElement.innerHTML = "$" + slide1 + " - $" + slide2;
    }
    window.onload = function() {
      let sliderSections = document.getElementsByClassName("range-slider");
      for (let x = 0; x < sliderSections.length; x++) {
        let sliders = sliderSections[x].getElementsByTagName("input");
        for (let y = 0; y < sliders.length; y++) {
          if (sliders[y].type === "range") {
            sliders[y].oninput = getVals;
            sliders[y].oninput();
          }
        }
      }
    };
    progressBar: () => {
      const pline = document.querySelectorAll(".progressbar.line");
      const pcircle = document.querySelectorAll(".progressbar.semi-circle");
      pline.forEach((e) => {
        const line = new ProgressBar.Line(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 3e3,
          easing: "easeInOut",
          text: {
            style: {
              color: "inherit",
              position: "absolute",
              right: "0",
              top: "-30px",
              padding: 0,
              margin: 0,
              transform: null
            },
            autoStyleContainer: false
          },
          step: (state, line2) => {
            line2.setText(Math.round(line2.value() * 100) + " %");
          }
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function() {
            line.animate(value);
          },
          offset: "bottom-in-view"
        });
      });
      pcircle.forEach((e) => {
        const circle = new ProgressBar.SemiCircle(e, {
          strokeWidth: 6,
          trailWidth: 6,
          duration: 2e3,
          easing: "easeInOut",
          step: (state, circle2) => {
            circle2.setText(Math.round(circle2.value() * 100));
          }
        });
        let value = e.getAttribute("data-value") / 100;
        new Waypoint({
          element: e,
          handler: function() {
            circle.animate(value);
          },
          offset: "bottom-in-view"
        });
      });
    };
    const rangeInput = document.querySelectorAll(".range-input input"), priceInput = document.querySelectorAll(".price-input input"), range = document.querySelector(".slider .progress");
    let priceGap = 1e3;
    priceInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minPrice = parseInt(priceInput[0].value), maxPrice = parseInt(priceInput[1].value);
        if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
          if (e.target.className === "input-min") {
            rangeInput[0].value = minPrice;
            range.style.left = minPrice / rangeInput[0].max * 100 + "%";
          } else {
            rangeInput[1].value = maxPrice;
            range.style.right = 100 - maxPrice / rangeInput[1].max * 100 + "%";
          }
        }
      });
    });
    rangeInput.forEach((input) => {
      input.addEventListener("input", (e) => {
        let minVal = parseInt(rangeInput[0].value), maxVal = parseInt(rangeInput[1].value);
        if (maxVal - minVal < priceGap) {
          if (e.target.className === "range-min") {
            rangeInput[0].value = maxVal - priceGap;
          } else {
            rangeInput[1].value = minVal + priceGap;
          }
        } else {
          priceInput[0].value = minVal;
          priceInput[1].value = maxVal;
          range.style.left = minVal / rangeInput[0].max * 100 + "%";
          range.style.right = 100 - maxVal / rangeInput[1].max * 100 + "%";
        }
      });
    });
    const inputs = document.querySelectorAll("#qty, #qty2, #qty3");
    const btnminus = document.querySelectorAll(".qtyminus");
    const btnplus = document.querySelectorAll(".qtyplus");
    if (inputs.length > 0 && btnminus.length > 0 && btnplus.length > 0) {
      inputs.forEach(function(input, index) {
        const min = Number(input.getAttribute("min"));
        const max = Number(input.getAttribute("max"));
        const step = Number(input.getAttribute("step"));
        function qtyminus(e) {
          const current = Number(input.value);
          let newval = current - step;
          if (newval < min) {
            newval = min;
          } else if (newval > max) {
            newval = max;
          }
          input.value = Number(newval);
          e.preventDefault();
        }
        function qtyplus(e) {
          const current = Number(input.value);
          let newval = current + step;
          if (newval > max) newval = max;
          input.value = Number(newval);
          e.preventDefault();
        }
        btnminus[index].addEventListener("click", qtyminus);
        btnplus[index].addEventListener("click", qtyplus);
      });
    }
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        $("#back-top").addClass("show");
      } else {
        $("#back-top").removeClass("show");
      }
    });
    $("#back-top").click(function() {
      $("html, body").animate({ scrollTop: 0 }, 800);
      return false;
    });
    $(".bd-category__click").click(function() {
      $(this).siblings(".category__items, .category__items-2, .category__items-3, .category__items-4").slideToggle();
      $(this).toggleClass("items-open");
    });
    if ($(".cursor-follower").length > 0) {
      var follower = $(".cursor-follower");
      var posX = 0, posY = 0;
      var mouseX = 0, mouseY = 0;
      TweenMax.to({}, 0.016, {
        repeat: -1,
        onRepeat: function() {
          posX += (mouseX - posX) / 9;
          posY += (mouseY - posY) / 9;
          TweenMax.set(follower, {
            css: {
              left: posX - 12,
              top: posY - 12
            }
          });
        }
      });
      $(document).on("mousemove", function(e) {
        mouseX = e.clientX;
        mouseY = e.clientY;
      });
    }
  });
  function loader() {
    $(window).on("load", function() {
      $(".preloader").addClass("loaded");
      $(".preloader").delay(600).fadeOut();
    });
  }
  loader();
})(jQuery);
//# sourceMappingURL=scripts.js.map
