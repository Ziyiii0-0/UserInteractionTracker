/*! For license information please see vendor.js.LICENSE.txt */
;(self.webpackChunkchrome_extension_typescript_starter =
  self.webpackChunkchrome_extension_typescript_starter || []).push([
  [121],
  {
    692: function (e, t) {
      var n
      !(function (t, n) {
        'use strict'
        'object' == typeof e.exports
          ? (e.exports = t.document
              ? n(t, !0)
              : function (e) {
                  if (!e.document) throw new Error('jQuery requires a window with a document')
                  return n(e)
                })
          : n(t)
      })('undefined' != typeof window ? window : this, function (r, i) {
        'use strict'
        var o = [],
          a = Object.getPrototypeOf,
          s = o.slice,
          u = o.flat
            ? function (e) {
                return o.flat.call(e)
              }
            : function (e) {
                return o.concat.apply([], e)
              },
          l = o.push,
          c = o.indexOf,
          f = {},
          p = f.toString,
          d = f.hasOwnProperty,
          h = d.toString,
          g = h.call(Object),
          v = {},
          y = function (e) {
            return (
              'function' == typeof e && 'number' != typeof e.nodeType && 'function' != typeof e.item
            )
          },
          m = function (e) {
            return null != e && e === e.window
          },
          x = r.document,
          b = { type: !0, src: !0, nonce: !0, noModule: !0 }
        function w(e, t, n) {
          var r,
            i,
            o = (n = n || x).createElement('script')
          if (((o.text = e), t))
            for (r in b) (i = t[r] || (t.getAttribute && t.getAttribute(r))) && o.setAttribute(r, i)
          n.head.appendChild(o).parentNode.removeChild(o)
        }
        function T(e) {
          return null == e
            ? e + ''
            : 'object' == typeof e || 'function' == typeof e
              ? f[p.call(e)] || 'object'
              : typeof e
        }
        var C = '3.7.1',
          k = /HTML$/i,
          S = function (e, t) {
            return new S.fn.init(e, t)
          }
        function E(e) {
          var t = !!e && 'length' in e && e.length,
            n = T(e)
          return (
            !y(e) &&
            !m(e) &&
            ('array' === n || 0 === t || ('number' == typeof t && t > 0 && t - 1 in e))
          )
        }
        function j(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        ;(S.fn = S.prototype =
          {
            jquery: C,
            constructor: S,
            length: 0,
            toArray: function () {
              return s.call(this)
            },
            get: function (e) {
              return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function (e) {
              var t = S.merge(this.constructor(), e)
              return (t.prevObject = this), t
            },
            each: function (e) {
              return S.each(this, e)
            },
            map: function (e) {
              return this.pushStack(
                S.map(this, function (t, n) {
                  return e.call(t, n, t)
                })
              )
            },
            slice: function () {
              return this.pushStack(s.apply(this, arguments))
            },
            first: function () {
              return this.eq(0)
            },
            last: function () {
              return this.eq(-1)
            },
            even: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return (t + 1) % 2
                })
              )
            },
            odd: function () {
              return this.pushStack(
                S.grep(this, function (e, t) {
                  return t % 2
                })
              )
            },
            eq: function (e) {
              var t = this.length,
                n = +e + (e < 0 ? t : 0)
              return this.pushStack(n >= 0 && n < t ? [this[n]] : [])
            },
            end: function () {
              return this.prevObject || this.constructor()
            },
            push: l,
            sort: o.sort,
            splice: o.splice
          }),
          (S.extend = S.fn.extend =
            function () {
              var e,
                t,
                n,
                r,
                i,
                o,
                a = arguments[0] || {},
                s = 1,
                u = arguments.length,
                l = !1
              for (
                'boolean' == typeof a && ((l = a), (a = arguments[s] || {}), s++),
                  'object' == typeof a || y(a) || (a = {}),
                  s === u && ((a = this), s--);
                s < u;
                s++
              )
                if (null != (e = arguments[s]))
                  for (t in e)
                    (r = e[t]),
                      '__proto__' !== t &&
                        a !== r &&
                        (l && r && (S.isPlainObject(r) || (i = Array.isArray(r)))
                          ? ((n = a[t]),
                            (o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {}),
                            (i = !1),
                            (a[t] = S.extend(l, o, r)))
                          : void 0 !== r && (a[t] = r))
              return a
            }),
          S.extend({
            expando: 'jQuery' + (C + Math.random()).replace(/\D/g, ''),
            isReady: !0,
            error: function (e) {
              throw new Error(e)
            },
            noop: function () {},
            isPlainObject: function (e) {
              var t, n
              return !(
                !e ||
                '[object Object]' !== p.call(e) ||
                ((t = a(e)) &&
                  ('function' != typeof (n = d.call(t, 'constructor') && t.constructor) ||
                    h.call(n) !== g))
              )
            },
            isEmptyObject: function (e) {
              var t
              for (t in e) return !1
              return !0
            },
            globalEval: function (e, t, n) {
              w(e, { nonce: t && t.nonce }, n)
            },
            each: function (e, t) {
              var n,
                r = 0
              if (E(e)) for (n = e.length; r < n && !1 !== t.call(e[r], r, e[r]); r++);
              else for (r in e) if (!1 === t.call(e[r], r, e[r])) break
              return e
            },
            text: function (e) {
              var t,
                n = '',
                r = 0,
                i = e.nodeType
              if (!i) for (; (t = e[r++]); ) n += S.text(t)
              return 1 === i || 11 === i
                ? e.textContent
                : 9 === i
                  ? e.documentElement.textContent
                  : 3 === i || 4 === i
                    ? e.nodeValue
                    : n
            },
            makeArray: function (e, t) {
              var n = t || []
              return (
                null != e &&
                  (E(Object(e)) ? S.merge(n, 'string' == typeof e ? [e] : e) : l.call(n, e)),
                n
              )
            },
            inArray: function (e, t, n) {
              return null == t ? -1 : c.call(t, e, n)
            },
            isXMLDoc: function (e) {
              var t = e && e.namespaceURI,
                n = e && (e.ownerDocument || e).documentElement
              return !k.test(t || (n && n.nodeName) || 'HTML')
            },
            merge: function (e, t) {
              for (var n = +t.length, r = 0, i = e.length; r < n; r++) e[i++] = t[r]
              return (e.length = i), e
            },
            grep: function (e, t, n) {
              for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                !t(e[i], i) !== a && r.push(e[i])
              return r
            },
            map: function (e, t, n) {
              var r,
                i,
                o = 0,
                a = []
              if (E(e)) for (r = e.length; o < r; o++) null != (i = t(e[o], o, n)) && a.push(i)
              else for (o in e) null != (i = t(e[o], o, n)) && a.push(i)
              return u(a)
            },
            guid: 1,
            support: v
          }),
          'function' == typeof Symbol && (S.fn[Symbol.iterator] = o[Symbol.iterator]),
          S.each(
            'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),
            function (e, t) {
              f['[object ' + t + ']'] = t.toLowerCase()
            }
          )
        var A = o.pop,
          D = o.sort,
          N = o.splice,
          q = '[\\x20\\t\\r\\n\\f]',
          L = new RegExp('^' + q + '+|((?:^|[^\\\\])(?:\\\\.)*)' + q + '+$', 'g')
        S.contains = function (e, t) {
          var n = t && t.parentNode
          return (
            e === n ||
            !(
              !n ||
              1 !== n.nodeType ||
              !(e.contains
                ? e.contains(n)
                : e.compareDocumentPosition && 16 & e.compareDocumentPosition(n))
            )
          )
        }
        var H = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g
        function O(e, t) {
          return t
            ? '\0' === e
              ? '�'
              : e.slice(0, -1) + '\\' + e.charCodeAt(e.length - 1).toString(16) + ' '
            : '\\' + e
        }
        S.escapeSelector = function (e) {
          return (e + '').replace(H, O)
        }
        var P = x,
          M = l
        !(function () {
          var e,
            t,
            n,
            i,
            a,
            u,
            l,
            f,
            p,
            h,
            g = M,
            y = S.expando,
            m = 0,
            x = 0,
            b = ee(),
            w = ee(),
            T = ee(),
            C = ee(),
            k = function (e, t) {
              return e === t && (a = !0), 0
            },
            E =
              'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
            H = '(?:\\\\[\\da-fA-F]{1,6}' + q + '?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',
            O =
              '\\[' +
              q +
              '*(' +
              H +
              ')(?:' +
              q +
              '*([*^$|!~]?=)' +
              q +
              '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
              H +
              '))|)' +
              q +
              '*\\]',
            R =
              ':(' +
              H +
              ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
              O +
              ')*)|.*)\\)|)',
            I = new RegExp(q + '+', 'g'),
            W = new RegExp('^' + q + '*,' + q + '*'),
            F = new RegExp('^' + q + '*([>+~]|' + q + ')' + q + '*'),
            $ = new RegExp(q + '|>'),
            _ = new RegExp(R),
            B = new RegExp('^' + H + '$'),
            z = {
              ID: new RegExp('^#(' + H + ')'),
              CLASS: new RegExp('^\\.(' + H + ')'),
              TAG: new RegExp('^(' + H + '|[*])'),
              ATTR: new RegExp('^' + O),
              PSEUDO: new RegExp('^' + R),
              CHILD: new RegExp(
                '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                  q +
                  '*(even|odd|(([+-]|)(\\d*)n|)' +
                  q +
                  '*(?:([+-]|)' +
                  q +
                  '*(\\d+)|))' +
                  q +
                  '*\\)|)',
                'i'
              ),
              bool: new RegExp('^(?:' + E + ')$', 'i'),
              needsContext: new RegExp(
                '^' +
                  q +
                  '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                  q +
                  '*((?:-\\d)?\\d*)' +
                  q +
                  '*\\)|)(?=[^-]|$)',
                'i'
              )
            },
            X = /^(?:input|select|textarea|button)$/i,
            U = /^h\d$/i,
            V = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            G = /[+~]/,
            Y = new RegExp('\\\\[\\da-fA-F]{1,6}' + q + '?|\\\\([^\\r\\n\\f])', 'g'),
            Q = function (e, t) {
              var n = '0x' + e.slice(1) - 65536
              return (
                t ||
                (n < 0
                  ? String.fromCharCode(n + 65536)
                  : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320))
              )
            },
            J = function () {
              ue()
            },
            K = pe(
              function (e) {
                return !0 === e.disabled && j(e, 'fieldset')
              },
              { dir: 'parentNode', next: 'legend' }
            )
          try {
            g.apply((o = s.call(P.childNodes)), P.childNodes), o[P.childNodes.length].nodeType
          } catch (e) {
            g = {
              apply: function (e, t) {
                M.apply(e, s.call(t))
              },
              call: function (e) {
                M.apply(e, s.call(arguments, 1))
              }
            }
          }
          function Z(e, t, n, r) {
            var i,
              o,
              a,
              s,
              l,
              c,
              d,
              h = t && t.ownerDocument,
              m = t ? t.nodeType : 9
            if (((n = n || []), 'string' != typeof e || !e || (1 !== m && 9 !== m && 11 !== m)))
              return n
            if (!r && (ue(t), (t = t || u), f)) {
              if (11 !== m && (l = V.exec(e)))
                if ((i = l[1])) {
                  if (9 === m) {
                    if (!(a = t.getElementById(i))) return n
                    if (a.id === i) return g.call(n, a), n
                  } else if (h && (a = h.getElementById(i)) && Z.contains(t, a) && a.id === i)
                    return g.call(n, a), n
                } else {
                  if (l[2]) return g.apply(n, t.getElementsByTagName(e)), n
                  if ((i = l[3]) && t.getElementsByClassName)
                    return g.apply(n, t.getElementsByClassName(i)), n
                }
              if (!(C[e + ' '] || (p && p.test(e)))) {
                if (((d = e), (h = t), 1 === m && ($.test(e) || F.test(e)))) {
                  for (
                    ((h = (G.test(e) && se(t.parentNode)) || t) == t && v.scope) ||
                      ((s = t.getAttribute('id'))
                        ? (s = S.escapeSelector(s))
                        : t.setAttribute('id', (s = y))),
                      o = (c = ce(e)).length;
                    o--;

                  )
                    c[o] = (s ? '#' + s : ':scope') + ' ' + fe(c[o])
                  d = c.join(',')
                }
                try {
                  return g.apply(n, h.querySelectorAll(d)), n
                } catch (t) {
                  C(e, !0)
                } finally {
                  s === y && t.removeAttribute('id')
                }
              }
            }
            return me(e.replace(L, '$1'), t, n, r)
          }
          function ee() {
            var e = []
            return function n(r, i) {
              return e.push(r + ' ') > t.cacheLength && delete n[e.shift()], (n[r + ' '] = i)
            }
          }
          function te(e) {
            return (e[y] = !0), e
          }
          function ne(e) {
            var t = u.createElement('fieldset')
            try {
              return !!e(t)
            } catch (e) {
              return !1
            } finally {
              t.parentNode && t.parentNode.removeChild(t), (t = null)
            }
          }
          function re(e) {
            return function (t) {
              return j(t, 'input') && t.type === e
            }
          }
          function ie(e) {
            return function (t) {
              return (j(t, 'input') || j(t, 'button')) && t.type === e
            }
          }
          function oe(e) {
            return function (t) {
              return 'form' in t
                ? t.parentNode && !1 === t.disabled
                  ? 'label' in t
                    ? 'label' in t.parentNode
                      ? t.parentNode.disabled === e
                      : t.disabled === e
                    : t.isDisabled === e || (t.isDisabled !== !e && K(t) === e)
                  : t.disabled === e
                : 'label' in t && t.disabled === e
            }
          }
          function ae(e) {
            return te(function (t) {
              return (
                (t = +t),
                te(function (n, r) {
                  for (var i, o = e([], n.length, t), a = o.length; a--; )
                    n[(i = o[a])] && (n[i] = !(r[i] = n[i]))
                })
              )
            })
          }
          function se(e) {
            return e && void 0 !== e.getElementsByTagName && e
          }
          function ue(e) {
            var n,
              r = e ? e.ownerDocument || e : P
            return r != u && 9 === r.nodeType && r.documentElement
              ? ((l = (u = r).documentElement),
                (f = !S.isXMLDoc(u)),
                (h = l.matches || l.webkitMatchesSelector || l.msMatchesSelector),
                l.msMatchesSelector &&
                  P != u &&
                  (n = u.defaultView) &&
                  n.top !== n &&
                  n.addEventListener('unload', J),
                (v.getById = ne(function (e) {
                  return (
                    (l.appendChild(e).id = S.expando),
                    !u.getElementsByName || !u.getElementsByName(S.expando).length
                  )
                })),
                (v.disconnectedMatch = ne(function (e) {
                  return h.call(e, '*')
                })),
                (v.scope = ne(function () {
                  return u.querySelectorAll(':scope')
                })),
                (v.cssHas = ne(function () {
                  try {
                    return u.querySelector(':has(*,:jqfake)'), !1
                  } catch (e) {
                    return !0
                  }
                })),
                v.getById
                  ? ((t.filter.ID = function (e) {
                      var t = e.replace(Y, Q)
                      return function (e) {
                        return e.getAttribute('id') === t
                      }
                    }),
                    (t.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && f) {
                        var n = t.getElementById(e)
                        return n ? [n] : []
                      }
                    }))
                  : ((t.filter.ID = function (e) {
                      var t = e.replace(Y, Q)
                      return function (e) {
                        var n = void 0 !== e.getAttributeNode && e.getAttributeNode('id')
                        return n && n.value === t
                      }
                    }),
                    (t.find.ID = function (e, t) {
                      if (void 0 !== t.getElementById && f) {
                        var n,
                          r,
                          i,
                          o = t.getElementById(e)
                        if (o) {
                          if ((n = o.getAttributeNode('id')) && n.value === e) return [o]
                          for (i = t.getElementsByName(e), r = 0; (o = i[r++]); )
                            if ((n = o.getAttributeNode('id')) && n.value === e) return [o]
                        }
                        return []
                      }
                    })),
                (t.find.TAG = function (e, t) {
                  return void 0 !== t.getElementsByTagName
                    ? t.getElementsByTagName(e)
                    : t.querySelectorAll(e)
                }),
                (t.find.CLASS = function (e, t) {
                  if (void 0 !== t.getElementsByClassName && f) return t.getElementsByClassName(e)
                }),
                (p = []),
                ne(function (e) {
                  var t
                  ;(l.appendChild(e).innerHTML =
                    "<a id='" +
                    y +
                    "' href='' disabled='disabled'></a><select id='" +
                    y +
                    "-\r\\' disabled='disabled'><option selected=''></option></select>"),
                    e.querySelectorAll('[selected]').length ||
                      p.push('\\[' + q + '*(?:value|' + E + ')'),
                    e.querySelectorAll('[id~=' + y + '-]').length || p.push('~='),
                    e.querySelectorAll('a#' + y + '+*').length || p.push('.#.+[+~]'),
                    e.querySelectorAll(':checked').length || p.push(':checked'),
                    (t = u.createElement('input')).setAttribute('type', 'hidden'),
                    e.appendChild(t).setAttribute('name', 'D'),
                    (l.appendChild(e).disabled = !0),
                    2 !== e.querySelectorAll(':disabled').length && p.push(':enabled', ':disabled'),
                    (t = u.createElement('input')).setAttribute('name', ''),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length ||
                      p.push('\\[' + q + '*name' + q + '*=' + q + '*(?:\'\'|"")')
                }),
                v.cssHas || p.push(':has'),
                (p = p.length && new RegExp(p.join('|'))),
                (k = function (e, t) {
                  if (e === t) return (a = !0), 0
                  var n = !e.compareDocumentPosition - !t.compareDocumentPosition
                  return (
                    n ||
                    (1 &
                      (n =
                        (e.ownerDocument || e) == (t.ownerDocument || t)
                          ? e.compareDocumentPosition(t)
                          : 1) ||
                    (!v.sortDetached && t.compareDocumentPosition(e) === n)
                      ? e === u || (e.ownerDocument == P && Z.contains(P, e))
                        ? -1
                        : t === u || (t.ownerDocument == P && Z.contains(P, t))
                          ? 1
                          : i
                            ? c.call(i, e) - c.call(i, t)
                            : 0
                      : 4 & n
                        ? -1
                        : 1)
                  )
                }),
                u)
              : u
          }
          for (e in ((Z.matches = function (e, t) {
            return Z(e, null, null, t)
          }),
          (Z.matchesSelector = function (e, t) {
            if ((ue(e), f && !C[t + ' '] && (!p || !p.test(t))))
              try {
                var n = h.call(e, t)
                if (n || v.disconnectedMatch || (e.document && 11 !== e.document.nodeType)) return n
              } catch (e) {
                C(t, !0)
              }
            return Z(t, u, null, [e]).length > 0
          }),
          (Z.contains = function (e, t) {
            return (e.ownerDocument || e) != u && ue(e), S.contains(e, t)
          }),
          (Z.attr = function (e, n) {
            ;(e.ownerDocument || e) != u && ue(e)
            var r = t.attrHandle[n.toLowerCase()],
              i = r && d.call(t.attrHandle, n.toLowerCase()) ? r(e, n, !f) : void 0
            return void 0 !== i ? i : e.getAttribute(n)
          }),
          (Z.error = function (e) {
            throw new Error('Syntax error, unrecognized expression: ' + e)
          }),
          (S.uniqueSort = function (e) {
            var t,
              n = [],
              r = 0,
              o = 0
            if (((a = !v.sortStable), (i = !v.sortStable && s.call(e, 0)), D.call(e, k), a)) {
              for (; (t = e[o++]); ) t === e[o] && (r = n.push(o))
              for (; r--; ) N.call(e, n[r], 1)
            }
            return (i = null), e
          }),
          (S.fn.uniqueSort = function () {
            return this.pushStack(S.uniqueSort(s.apply(this)))
          }),
          (t = S.expr =
            {
              cacheLength: 50,
              createPseudo: te,
              match: z,
              attrHandle: {},
              find: {},
              relative: {
                '>': { dir: 'parentNode', first: !0 },
                ' ': { dir: 'parentNode' },
                '+': { dir: 'previousSibling', first: !0 },
                '~': { dir: 'previousSibling' }
              },
              preFilter: {
                ATTR: function (e) {
                  return (
                    (e[1] = e[1].replace(Y, Q)),
                    (e[3] = (e[3] || e[4] || e[5] || '').replace(Y, Q)),
                    '~=' === e[2] && (e[3] = ' ' + e[3] + ' '),
                    e.slice(0, 4)
                  )
                },
                CHILD: function (e) {
                  return (
                    (e[1] = e[1].toLowerCase()),
                    'nth' === e[1].slice(0, 3)
                      ? (e[3] || Z.error(e[0]),
                        (e[4] = +(e[4]
                          ? e[5] + (e[6] || 1)
                          : 2 * ('even' === e[3] || 'odd' === e[3]))),
                        (e[5] = +(e[7] + e[8] || 'odd' === e[3])))
                      : e[3] && Z.error(e[0]),
                    e
                  )
                },
                PSEUDO: function (e) {
                  var t,
                    n = !e[6] && e[2]
                  return z.CHILD.test(e[0])
                    ? null
                    : (e[3]
                        ? (e[2] = e[4] || e[5] || '')
                        : n &&
                          _.test(n) &&
                          (t = ce(n, !0)) &&
                          (t = n.indexOf(')', n.length - t) - n.length) &&
                          ((e[0] = e[0].slice(0, t)), (e[2] = n.slice(0, t))),
                      e.slice(0, 3))
                }
              },
              filter: {
                TAG: function (e) {
                  var t = e.replace(Y, Q).toLowerCase()
                  return '*' === e
                    ? function () {
                        return !0
                      }
                    : function (e) {
                        return j(e, t)
                      }
                },
                CLASS: function (e) {
                  var t = b[e + ' ']
                  return (
                    t ||
                    ((t = new RegExp('(^|' + q + ')' + e + '(' + q + '|$)')) &&
                      b(e, function (e) {
                        return t.test(
                          ('string' == typeof e.className && e.className) ||
                            (void 0 !== e.getAttribute && e.getAttribute('class')) ||
                            ''
                        )
                      }))
                  )
                },
                ATTR: function (e, t, n) {
                  return function (r) {
                    var i = Z.attr(r, e)
                    return null == i
                      ? '!=' === t
                      : !t ||
                          ((i += ''),
                          '=' === t
                            ? i === n
                            : '!=' === t
                              ? i !== n
                              : '^=' === t
                                ? n && 0 === i.indexOf(n)
                                : '*=' === t
                                  ? n && i.indexOf(n) > -1
                                  : '$=' === t
                                    ? n && i.slice(-n.length) === n
                                    : '~=' === t
                                      ? (' ' + i.replace(I, ' ') + ' ').indexOf(n) > -1
                                      : '|=' === t &&
                                        (i === n || i.slice(0, n.length + 1) === n + '-'))
                  }
                },
                CHILD: function (e, t, n, r, i) {
                  var o = 'nth' !== e.slice(0, 3),
                    a = 'last' !== e.slice(-4),
                    s = 'of-type' === t
                  return 1 === r && 0 === i
                    ? function (e) {
                        return !!e.parentNode
                      }
                    : function (t, n, u) {
                        var l,
                          c,
                          f,
                          p,
                          d,
                          h = o !== a ? 'nextSibling' : 'previousSibling',
                          g = t.parentNode,
                          v = s && t.nodeName.toLowerCase(),
                          x = !u && !s,
                          b = !1
                        if (g) {
                          if (o) {
                            for (; h; ) {
                              for (f = t; (f = f[h]); )
                                if (s ? j(f, v) : 1 === f.nodeType) return !1
                              d = h = 'only' === e && !d && 'nextSibling'
                            }
                            return !0
                          }
                          if (((d = [a ? g.firstChild : g.lastChild]), a && x)) {
                            for (
                              b =
                                (p = (l = (c = g[y] || (g[y] = {}))[e] || [])[0] === m && l[1]) &&
                                l[2],
                                f = p && g.childNodes[p];
                              (f = (++p && f && f[h]) || (b = p = 0) || d.pop());

                            )
                              if (1 === f.nodeType && ++b && f === t) {
                                c[e] = [m, p, b]
                                break
                              }
                          } else if (
                            (x &&
                              (b = p = (l = (c = t[y] || (t[y] = {}))[e] || [])[0] === m && l[1]),
                            !1 === b)
                          )
                            for (
                              ;
                              (f = (++p && f && f[h]) || (b = p = 0) || d.pop()) &&
                              (!(s ? j(f, v) : 1 === f.nodeType) ||
                                !++b ||
                                (x && ((c = f[y] || (f[y] = {}))[e] = [m, b]), f !== t));

                            );
                          return (b -= i) === r || (b % r == 0 && b / r >= 0)
                        }
                      }
                },
                PSEUDO: function (e, n) {
                  var r,
                    i =
                      t.pseudos[e] ||
                      t.setFilters[e.toLowerCase()] ||
                      Z.error('unsupported pseudo: ' + e)
                  return i[y]
                    ? i(n)
                    : i.length > 1
                      ? ((r = [e, e, '', n]),
                        t.setFilters.hasOwnProperty(e.toLowerCase())
                          ? te(function (e, t) {
                              for (var r, o = i(e, n), a = o.length; a--; )
                                e[(r = c.call(e, o[a]))] = !(t[r] = o[a])
                            })
                          : function (e) {
                              return i(e, 0, r)
                            })
                      : i
                }
              },
              pseudos: {
                not: te(function (e) {
                  var t = [],
                    n = [],
                    r = ye(e.replace(L, '$1'))
                  return r[y]
                    ? te(function (e, t, n, i) {
                        for (var o, a = r(e, null, i, []), s = e.length; s--; )
                          (o = a[s]) && (e[s] = !(t[s] = o))
                      })
                    : function (e, i, o) {
                        return (t[0] = e), r(t, null, o, n), (t[0] = null), !n.pop()
                      }
                }),
                has: te(function (e) {
                  return function (t) {
                    return Z(e, t).length > 0
                  }
                }),
                contains: te(function (e) {
                  return (
                    (e = e.replace(Y, Q)),
                    function (t) {
                      return (t.textContent || S.text(t)).indexOf(e) > -1
                    }
                  )
                }),
                lang: te(function (e) {
                  return (
                    B.test(e || '') || Z.error('unsupported lang: ' + e),
                    (e = e.replace(Y, Q).toLowerCase()),
                    function (t) {
                      var n
                      do {
                        if ((n = f ? t.lang : t.getAttribute('xml:lang') || t.getAttribute('lang')))
                          return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + '-')
                      } while ((t = t.parentNode) && 1 === t.nodeType)
                      return !1
                    }
                  )
                }),
                target: function (e) {
                  var t = r.location && r.location.hash
                  return t && t.slice(1) === e.id
                },
                root: function (e) {
                  return e === l
                },
                focus: function (e) {
                  return (
                    e ===
                      (function () {
                        try {
                          return u.activeElement
                        } catch (e) {}
                      })() &&
                    u.hasFocus() &&
                    !!(e.type || e.href || ~e.tabIndex)
                  )
                },
                enabled: oe(!1),
                disabled: oe(!0),
                checked: function (e) {
                  return (j(e, 'input') && !!e.checked) || (j(e, 'option') && !!e.selected)
                },
                selected: function (e) {
                  return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected
                },
                empty: function (e) {
                  for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeType < 6) return !1
                  return !0
                },
                parent: function (e) {
                  return !t.pseudos.empty(e)
                },
                header: function (e) {
                  return U.test(e.nodeName)
                },
                input: function (e) {
                  return X.test(e.nodeName)
                },
                button: function (e) {
                  return (j(e, 'input') && 'button' === e.type) || j(e, 'button')
                },
                text: function (e) {
                  var t
                  return (
                    j(e, 'input') &&
                    'text' === e.type &&
                    (null == (t = e.getAttribute('type')) || 'text' === t.toLowerCase())
                  )
                },
                first: ae(function () {
                  return [0]
                }),
                last: ae(function (e, t) {
                  return [t - 1]
                }),
                eq: ae(function (e, t, n) {
                  return [n < 0 ? n + t : n]
                }),
                even: ae(function (e, t) {
                  for (var n = 0; n < t; n += 2) e.push(n)
                  return e
                }),
                odd: ae(function (e, t) {
                  for (var n = 1; n < t; n += 2) e.push(n)
                  return e
                }),
                lt: ae(function (e, t, n) {
                  var r
                  for (r = n < 0 ? n + t : n > t ? t : n; --r >= 0; ) e.push(r)
                  return e
                }),
                gt: ae(function (e, t, n) {
                  for (var r = n < 0 ? n + t : n; ++r < t; ) e.push(r)
                  return e
                })
              }
            }),
          (t.pseudos.nth = t.pseudos.eq),
          { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }))
            t.pseudos[e] = re(e)
          for (e in { submit: !0, reset: !0 }) t.pseudos[e] = ie(e)
          function le() {}
          function ce(e, n) {
            var r,
              i,
              o,
              a,
              s,
              u,
              l,
              c = w[e + ' ']
            if (c) return n ? 0 : c.slice(0)
            for (s = e, u = [], l = t.preFilter; s; ) {
              for (a in ((r && !(i = W.exec(s))) ||
                (i && (s = s.slice(i[0].length) || s), u.push((o = []))),
              (r = !1),
              (i = F.exec(s)) &&
                ((r = i.shift()),
                o.push({ value: r, type: i[0].replace(L, ' ') }),
                (s = s.slice(r.length))),
              t.filter))
                !(i = z[a].exec(s)) ||
                  (l[a] && !(i = l[a](i))) ||
                  ((r = i.shift()),
                  o.push({ value: r, type: a, matches: i }),
                  (s = s.slice(r.length)))
              if (!r) break
            }
            return n ? s.length : s ? Z.error(e) : w(e, u).slice(0)
          }
          function fe(e) {
            for (var t = 0, n = e.length, r = ''; t < n; t++) r += e[t].value
            return r
          }
          function pe(e, t, n) {
            var r = t.dir,
              i = t.next,
              o = i || r,
              a = n && 'parentNode' === o,
              s = x++
            return t.first
              ? function (t, n, i) {
                  for (; (t = t[r]); ) if (1 === t.nodeType || a) return e(t, n, i)
                  return !1
                }
              : function (t, n, u) {
                  var l,
                    c,
                    f = [m, s]
                  if (u) {
                    for (; (t = t[r]); ) if ((1 === t.nodeType || a) && e(t, n, u)) return !0
                  } else
                    for (; (t = t[r]); )
                      if (1 === t.nodeType || a)
                        if (((c = t[y] || (t[y] = {})), i && j(t, i))) t = t[r] || t
                        else {
                          if ((l = c[o]) && l[0] === m && l[1] === s) return (f[2] = l[2])
                          if (((c[o] = f), (f[2] = e(t, n, u)))) return !0
                        }
                  return !1
                }
          }
          function de(e) {
            return e.length > 1
              ? function (t, n, r) {
                  for (var i = e.length; i--; ) if (!e[i](t, n, r)) return !1
                  return !0
                }
              : e[0]
          }
          function he(e, t, n, r, i) {
            for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
              (o = e[s]) && ((n && !n(o, r, i)) || (a.push(o), l && t.push(s)))
            return a
          }
          function ge(e, t, n, r, i, o) {
            return (
              r && !r[y] && (r = ge(r)),
              i && !i[y] && (i = ge(i, o)),
              te(function (o, a, s, u) {
                var l,
                  f,
                  p,
                  d,
                  h = [],
                  v = [],
                  y = a.length,
                  m =
                    o ||
                    (function (e, t, n) {
                      for (var r = 0, i = t.length; r < i; r++) Z(e, t[r], n)
                      return n
                    })(t || '*', s.nodeType ? [s] : s, []),
                  x = !e || (!o && t) ? m : he(m, h, e, s, u)
                if ((n ? n(x, (d = i || (o ? e : y || r) ? [] : a), s, u) : (d = x), r))
                  for (l = he(d, v), r(l, [], s, u), f = l.length; f--; )
                    (p = l[f]) && (d[v[f]] = !(x[v[f]] = p))
                if (o) {
                  if (i || e) {
                    if (i) {
                      for (l = [], f = d.length; f--; ) (p = d[f]) && l.push((x[f] = p))
                      i(null, (d = []), l, u)
                    }
                    for (f = d.length; f--; )
                      (p = d[f]) && (l = i ? c.call(o, p) : h[f]) > -1 && (o[l] = !(a[l] = p))
                  }
                } else
                  (d = he(d === a ? d.splice(y, d.length) : d)),
                    i ? i(null, a, d, u) : g.apply(a, d)
              })
            )
          }
          function ve(e) {
            for (
              var r,
                i,
                o,
                a = e.length,
                s = t.relative[e[0].type],
                u = s || t.relative[' '],
                l = s ? 1 : 0,
                f = pe(
                  function (e) {
                    return e === r
                  },
                  u,
                  !0
                ),
                p = pe(
                  function (e) {
                    return c.call(r, e) > -1
                  },
                  u,
                  !0
                ),
                d = [
                  function (e, t, i) {
                    var o = (!s && (i || t != n)) || ((r = t).nodeType ? f(e, t, i) : p(e, t, i))
                    return (r = null), o
                  }
                ];
              l < a;
              l++
            )
              if ((i = t.relative[e[l].type])) d = [pe(de(d), i)]
              else {
                if ((i = t.filter[e[l].type].apply(null, e[l].matches))[y]) {
                  for (o = ++l; o < a && !t.relative[e[o].type]; o++);
                  return ge(
                    l > 1 && de(d),
                    l > 1 &&
                      fe(
                        e.slice(0, l - 1).concat({ value: ' ' === e[l - 2].type ? '*' : '' })
                      ).replace(L, '$1'),
                    i,
                    l < o && ve(e.slice(l, o)),
                    o < a && ve((e = e.slice(o))),
                    o < a && fe(e)
                  )
                }
                d.push(i)
              }
            return de(d)
          }
          function ye(e, r) {
            var i,
              o = [],
              a = [],
              s = T[e + ' ']
            if (!s) {
              for (r || (r = ce(e)), i = r.length; i--; ) (s = ve(r[i]))[y] ? o.push(s) : a.push(s)
              ;(s = T(
                e,
                (function (e, r) {
                  var i = r.length > 0,
                    o = e.length > 0,
                    a = function (a, s, l, c, p) {
                      var d,
                        h,
                        v,
                        y = 0,
                        x = '0',
                        b = a && [],
                        w = [],
                        T = n,
                        C = a || (o && t.find.TAG('*', p)),
                        k = (m += null == T ? 1 : Math.random() || 0.1),
                        E = C.length
                      for (p && (n = s == u || s || p); x !== E && null != (d = C[x]); x++) {
                        if (o && d) {
                          for (
                            h = 0, s || d.ownerDocument == u || (ue(d), (l = !f));
                            (v = e[h++]);

                          )
                            if (v(d, s || u, l)) {
                              g.call(c, d)
                              break
                            }
                          p && (m = k)
                        }
                        i && ((d = !v && d) && y--, a && b.push(d))
                      }
                      if (((y += x), i && x !== y)) {
                        for (h = 0; (v = r[h++]); ) v(b, w, s, l)
                        if (a) {
                          if (y > 0) for (; x--; ) b[x] || w[x] || (w[x] = A.call(c))
                          w = he(w)
                        }
                        g.apply(c, w),
                          p && !a && w.length > 0 && y + r.length > 1 && S.uniqueSort(c)
                      }
                      return p && ((m = k), (n = T)), b
                    }
                  return i ? te(a) : a
                })(a, o)
              )),
                (s.selector = e)
            }
            return s
          }
          function me(e, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c = 'function' == typeof e && e,
              p = !i && ce((e = c.selector || e))
            if (((r = r || []), 1 === p.length)) {
              if (
                (a = p[0] = p[0].slice(0)).length > 2 &&
                'ID' === (s = a[0]).type &&
                9 === n.nodeType &&
                f &&
                t.relative[a[1].type]
              ) {
                if (!(n = (t.find.ID(s.matches[0].replace(Y, Q), n) || [])[0])) return r
                c && (n = n.parentNode), (e = e.slice(a.shift().value.length))
              }
              for (
                o = z.needsContext.test(e) ? 0 : a.length;
                o-- && ((s = a[o]), !t.relative[(u = s.type)]);

              )
                if (
                  (l = t.find[u]) &&
                  (i = l(s.matches[0].replace(Y, Q), (G.test(a[0].type) && se(n.parentNode)) || n))
                ) {
                  if ((a.splice(o, 1), !(e = i.length && fe(a)))) return g.apply(r, i), r
                  break
                }
            }
            return (c || ye(e, p))(i, n, !f, r, !n || (G.test(e) && se(n.parentNode)) || n), r
          }
          ;(le.prototype = t.filters = t.pseudos),
            (t.setFilters = new le()),
            (v.sortStable = y.split('').sort(k).join('') === y),
            ue(),
            (v.sortDetached = ne(function (e) {
              return 1 & e.compareDocumentPosition(u.createElement('fieldset'))
            })),
            (S.find = Z),
            (S.expr[':'] = S.expr.pseudos),
            (S.unique = S.uniqueSort),
            (Z.compile = ye),
            (Z.select = me),
            (Z.setDocument = ue),
            (Z.tokenize = ce),
            (Z.escape = S.escapeSelector),
            (Z.getText = S.text),
            (Z.isXML = S.isXMLDoc),
            (Z.selectors = S.expr),
            (Z.support = S.support),
            (Z.uniqueSort = S.uniqueSort)
        })()
        var R = function (e, t, n) {
            for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
              if (1 === e.nodeType) {
                if (i && S(e).is(n)) break
                r.push(e)
              }
            return r
          },
          I = function (e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e)
            return n
          },
          W = S.expr.match.needsContext,
          F = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i
        function $(e, t, n) {
          return y(t)
            ? S.grep(e, function (e, r) {
                return !!t.call(e, r, e) !== n
              })
            : t.nodeType
              ? S.grep(e, function (e) {
                  return (e === t) !== n
                })
              : 'string' != typeof t
                ? S.grep(e, function (e) {
                    return c.call(t, e) > -1 !== n
                  })
                : S.filter(t, e, n)
        }
        ;(S.filter = function (e, t, n) {
          var r = t[0]
          return (
            n && (e = ':not(' + e + ')'),
            1 === t.length && 1 === r.nodeType
              ? S.find.matchesSelector(r, e)
                ? [r]
                : []
              : S.find.matches(
                  e,
                  S.grep(t, function (e) {
                    return 1 === e.nodeType
                  })
                )
          )
        }),
          S.fn.extend({
            find: function (e) {
              var t,
                n,
                r = this.length,
                i = this
              if ('string' != typeof e)
                return this.pushStack(
                  S(e).filter(function () {
                    for (t = 0; t < r; t++) if (S.contains(i[t], this)) return !0
                  })
                )
              for (n = this.pushStack([]), t = 0; t < r; t++) S.find(e, i[t], n)
              return r > 1 ? S.uniqueSort(n) : n
            },
            filter: function (e) {
              return this.pushStack($(this, e || [], !1))
            },
            not: function (e) {
              return this.pushStack($(this, e || [], !0))
            },
            is: function (e) {
              return !!$(this, 'string' == typeof e && W.test(e) ? S(e) : e || [], !1).length
            }
          })
        var _,
          B = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/
        ;((S.fn.init = function (e, t, n) {
          var r, i
          if (!e) return this
          if (((n = n || _), 'string' == typeof e)) {
            if (
              !(r =
                '<' === e[0] && '>' === e[e.length - 1] && e.length >= 3
                  ? [null, e, null]
                  : B.exec(e)) ||
              (!r[1] && t)
            )
              return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e)
            if (r[1]) {
              if (
                ((t = t instanceof S ? t[0] : t),
                S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : x, !0)),
                F.test(r[1]) && S.isPlainObject(t))
              )
                for (r in t) y(this[r]) ? this[r](t[r]) : this.attr(r, t[r])
              return this
            }
            return (i = x.getElementById(r[2])) && ((this[0] = i), (this.length = 1)), this
          }
          return e.nodeType
            ? ((this[0] = e), (this.length = 1), this)
            : y(e)
              ? void 0 !== n.ready
                ? n.ready(e)
                : e(S)
              : S.makeArray(e, this)
        }).prototype = S.fn),
          (_ = S(x))
        var z = /^(?:parents|prev(?:Until|All))/,
          X = { children: !0, contents: !0, next: !0, prev: !0 }
        function U(e, t) {
          for (; (e = e[t]) && 1 !== e.nodeType; );
          return e
        }
        S.fn.extend({
          has: function (e) {
            var t = S(e, this),
              n = t.length
            return this.filter(function () {
              for (var e = 0; e < n; e++) if (S.contains(this, t[e])) return !0
            })
          },
          closest: function (e, t) {
            var n,
              r = 0,
              i = this.length,
              o = [],
              a = 'string' != typeof e && S(e)
            if (!W.test(e))
              for (; r < i; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                  if (
                    n.nodeType < 11 &&
                    (a ? a.index(n) > -1 : 1 === n.nodeType && S.find.matchesSelector(n, e))
                  ) {
                    o.push(n)
                    break
                  }
            return this.pushStack(o.length > 1 ? S.uniqueSort(o) : o)
          },
          index: function (e) {
            return e
              ? 'string' == typeof e
                ? c.call(S(e), this[0])
                : c.call(this, e.jquery ? e[0] : e)
              : this[0] && this[0].parentNode
                ? this.first().prevAll().length
                : -1
          },
          add: function (e, t) {
            return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
          },
          addBack: function (e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
          }
        }),
          S.each(
            {
              parent: function (e) {
                var t = e.parentNode
                return t && 11 !== t.nodeType ? t : null
              },
              parents: function (e) {
                return R(e, 'parentNode')
              },
              parentsUntil: function (e, t, n) {
                return R(e, 'parentNode', n)
              },
              next: function (e) {
                return U(e, 'nextSibling')
              },
              prev: function (e) {
                return U(e, 'previousSibling')
              },
              nextAll: function (e) {
                return R(e, 'nextSibling')
              },
              prevAll: function (e) {
                return R(e, 'previousSibling')
              },
              nextUntil: function (e, t, n) {
                return R(e, 'nextSibling', n)
              },
              prevUntil: function (e, t, n) {
                return R(e, 'previousSibling', n)
              },
              siblings: function (e) {
                return I((e.parentNode || {}).firstChild, e)
              },
              children: function (e) {
                return I(e.firstChild)
              },
              contents: function (e) {
                return null != e.contentDocument && a(e.contentDocument)
                  ? e.contentDocument
                  : (j(e, 'template') && (e = e.content || e), S.merge([], e.childNodes))
              }
            },
            function (e, t) {
              S.fn[e] = function (n, r) {
                var i = S.map(this, t, n)
                return (
                  'Until' !== e.slice(-5) && (r = n),
                  r && 'string' == typeof r && (i = S.filter(r, i)),
                  this.length > 1 && (X[e] || S.uniqueSort(i), z.test(e) && i.reverse()),
                  this.pushStack(i)
                )
              }
            }
          )
        var V = /[^\x20\t\r\n\f]+/g
        function G(e) {
          return e
        }
        function Y(e) {
          throw e
        }
        function Q(e, t, n, r) {
          var i
          try {
            e && y((i = e.promise))
              ? i.call(e).done(t).fail(n)
              : e && y((i = e.then))
                ? i.call(e, t, n)
                : t.apply(void 0, [e].slice(r))
          } catch (e) {
            n.apply(void 0, [e])
          }
        }
        ;(S.Callbacks = function (e) {
          e =
            'string' == typeof e
              ? (function (e) {
                  var t = {}
                  return (
                    S.each(e.match(V) || [], function (e, n) {
                      t[n] = !0
                    }),
                    t
                  )
                })(e)
              : S.extend({}, e)
          var t,
            n,
            r,
            i,
            o = [],
            a = [],
            s = -1,
            u = function () {
              for (i = i || e.once, r = t = !0; a.length; s = -1)
                for (n = a.shift(); ++s < o.length; )
                  !1 === o[s].apply(n[0], n[1]) && e.stopOnFalse && ((s = o.length), (n = !1))
              e.memory || (n = !1), (t = !1), i && (o = n ? [] : '')
            },
            l = {
              add: function () {
                return (
                  o &&
                    (n && !t && ((s = o.length - 1), a.push(n)),
                    (function t(n) {
                      S.each(n, function (n, r) {
                        y(r)
                          ? (e.unique && l.has(r)) || o.push(r)
                          : r && r.length && 'string' !== T(r) && t(r)
                      })
                    })(arguments),
                    n && !t && u()),
                  this
                )
              },
              remove: function () {
                return (
                  S.each(arguments, function (e, t) {
                    for (var n; (n = S.inArray(t, o, n)) > -1; ) o.splice(n, 1), n <= s && s--
                  }),
                  this
                )
              },
              has: function (e) {
                return e ? S.inArray(e, o) > -1 : o.length > 0
              },
              empty: function () {
                return o && (o = []), this
              },
              disable: function () {
                return (i = a = []), (o = n = ''), this
              },
              disabled: function () {
                return !o
              },
              lock: function () {
                return (i = a = []), n || t || (o = n = ''), this
              },
              locked: function () {
                return !!i
              },
              fireWith: function (e, n) {
                return (
                  i || ((n = [e, (n = n || []).slice ? n.slice() : n]), a.push(n), t || u()), this
                )
              },
              fire: function () {
                return l.fireWith(this, arguments), this
              },
              fired: function () {
                return !!r
              }
            }
          return l
        }),
          S.extend({
            Deferred: function (e) {
              var t = [
                  ['notify', 'progress', S.Callbacks('memory'), S.Callbacks('memory'), 2],
                  [
                    'resolve',
                    'done',
                    S.Callbacks('once memory'),
                    S.Callbacks('once memory'),
                    0,
                    'resolved'
                  ],
                  [
                    'reject',
                    'fail',
                    S.Callbacks('once memory'),
                    S.Callbacks('once memory'),
                    1,
                    'rejected'
                  ]
                ],
                n = 'pending',
                i = {
                  state: function () {
                    return n
                  },
                  always: function () {
                    return o.done(arguments).fail(arguments), this
                  },
                  catch: function (e) {
                    return i.then(null, e)
                  },
                  pipe: function () {
                    var e = arguments
                    return S.Deferred(function (n) {
                      S.each(t, function (t, r) {
                        var i = y(e[r[4]]) && e[r[4]]
                        o[r[1]](function () {
                          var e = i && i.apply(this, arguments)
                          e && y(e.promise)
                            ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject)
                            : n[r[0] + 'With'](this, i ? [e] : arguments)
                        })
                      }),
                        (e = null)
                    }).promise()
                  },
                  then: function (e, n, i) {
                    var o = 0
                    function a(e, t, n, i) {
                      return function () {
                        var s = this,
                          u = arguments,
                          l = function () {
                            var r, l
                            if (!(e < o)) {
                              if ((r = n.apply(s, u)) === t.promise())
                                throw new TypeError('Thenable self-resolution')
                              ;(l =
                                r && ('object' == typeof r || 'function' == typeof r) && r.then),
                                y(l)
                                  ? i
                                    ? l.call(r, a(o, t, G, i), a(o, t, Y, i))
                                    : (o++,
                                      l.call(
                                        r,
                                        a(o, t, G, i),
                                        a(o, t, Y, i),
                                        a(o, t, G, t.notifyWith)
                                      ))
                                  : (n !== G && ((s = void 0), (u = [r])),
                                    (i || t.resolveWith)(s, u))
                            }
                          },
                          c = i
                            ? l
                            : function () {
                                try {
                                  l()
                                } catch (r) {
                                  S.Deferred.exceptionHook && S.Deferred.exceptionHook(r, c.error),
                                    e + 1 >= o &&
                                      (n !== Y && ((s = void 0), (u = [r])), t.rejectWith(s, u))
                                }
                              }
                        e
                          ? c()
                          : (S.Deferred.getErrorHook
                              ? (c.error = S.Deferred.getErrorHook())
                              : S.Deferred.getStackHook && (c.error = S.Deferred.getStackHook()),
                            r.setTimeout(c))
                      }
                    }
                    return S.Deferred(function (r) {
                      t[0][3].add(a(0, r, y(i) ? i : G, r.notifyWith)),
                        t[1][3].add(a(0, r, y(e) ? e : G)),
                        t[2][3].add(a(0, r, y(n) ? n : Y))
                    }).promise()
                  },
                  promise: function (e) {
                    return null != e ? S.extend(e, i) : i
                  }
                },
                o = {}
              return (
                S.each(t, function (e, r) {
                  var a = r[2],
                    s = r[5]
                  ;(i[r[1]] = a.add),
                    s &&
                      a.add(
                        function () {
                          n = s
                        },
                        t[3 - e][2].disable,
                        t[3 - e][3].disable,
                        t[0][2].lock,
                        t[0][3].lock
                      ),
                    a.add(r[3].fire),
                    (o[r[0]] = function () {
                      return o[r[0] + 'With'](this === o ? void 0 : this, arguments), this
                    }),
                    (o[r[0] + 'With'] = a.fireWith)
                }),
                i.promise(o),
                e && e.call(o, o),
                o
              )
            },
            when: function (e) {
              var t = arguments.length,
                n = t,
                r = Array(n),
                i = s.call(arguments),
                o = S.Deferred(),
                a = function (e) {
                  return function (n) {
                    ;(r[e] = this),
                      (i[e] = arguments.length > 1 ? s.call(arguments) : n),
                      --t || o.resolveWith(r, i)
                  }
                }
              if (
                t <= 1 &&
                (Q(e, o.done(a(n)).resolve, o.reject, !t),
                'pending' === o.state() || y(i[n] && i[n].then))
              )
                return o.then()
              for (; n--; ) Q(i[n], a(n), o.reject)
              return o.promise()
            }
          })
        var J = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/
        ;(S.Deferred.exceptionHook = function (e, t) {
          r.console &&
            r.console.warn &&
            e &&
            J.test(e.name) &&
            r.console.warn('jQuery.Deferred exception: ' + e.message, e.stack, t)
        }),
          (S.readyException = function (e) {
            r.setTimeout(function () {
              throw e
            })
          })
        var K = S.Deferred()
        function Z() {
          x.removeEventListener('DOMContentLoaded', Z), r.removeEventListener('load', Z), S.ready()
        }
        ;(S.fn.ready = function (e) {
          return (
            K.then(e).catch(function (e) {
              S.readyException(e)
            }),
            this
          )
        }),
          S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function (e) {
              ;(!0 === e ? --S.readyWait : S.isReady) ||
                ((S.isReady = !0), (!0 !== e && --S.readyWait > 0) || K.resolveWith(x, [S]))
            }
          }),
          (S.ready.then = K.then),
          'complete' === x.readyState || ('loading' !== x.readyState && !x.documentElement.doScroll)
            ? r.setTimeout(S.ready)
            : (x.addEventListener('DOMContentLoaded', Z), r.addEventListener('load', Z))
        var ee = function (e, t, n, r, i, o, a) {
            var s = 0,
              u = e.length,
              l = null == n
            if ('object' === T(n)) for (s in ((i = !0), n)) ee(e, t, s, n[s], !0, o, a)
            else if (
              void 0 !== r &&
              ((i = !0),
              y(r) || (a = !0),
              l &&
                (a
                  ? (t.call(e, r), (t = null))
                  : ((l = t),
                    (t = function (e, t, n) {
                      return l.call(S(e), n)
                    }))),
              t)
            )
              for (; s < u; s++) t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)))
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
          },
          te = /^-ms-/,
          ne = /-([a-z])/g
        function re(e, t) {
          return t.toUpperCase()
        }
        function ie(e) {
          return e.replace(te, 'ms-').replace(ne, re)
        }
        var oe = function (e) {
          return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        }
        function ae() {
          this.expando = S.expando + ae.uid++
        }
        ;(ae.uid = 1),
          (ae.prototype = {
            cache: function (e) {
              var t = e[this.expando]
              return (
                t ||
                  ((t = {}),
                  oe(e) &&
                    (e.nodeType
                      ? (e[this.expando] = t)
                      : Object.defineProperty(e, this.expando, { value: t, configurable: !0 }))),
                t
              )
            },
            set: function (e, t, n) {
              var r,
                i = this.cache(e)
              if ('string' == typeof t) i[ie(t)] = n
              else for (r in t) i[ie(r)] = t[r]
              return i
            },
            get: function (e, t) {
              return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][ie(t)]
            },
            access: function (e, t, n) {
              return void 0 === t || (t && 'string' == typeof t && void 0 === n)
                ? this.get(e, t)
                : (this.set(e, t, n), void 0 !== n ? n : t)
            },
            remove: function (e, t) {
              var n,
                r = e[this.expando]
              if (void 0 !== r) {
                if (void 0 !== t) {
                  n = (t = Array.isArray(t) ? t.map(ie) : (t = ie(t)) in r ? [t] : t.match(V) || [])
                    .length
                  for (; n--; ) delete r[t[n]]
                }
                ;(void 0 === t || S.isEmptyObject(r)) &&
                  (e.nodeType ? (e[this.expando] = void 0) : delete e[this.expando])
              }
            },
            hasData: function (e) {
              var t = e[this.expando]
              return void 0 !== t && !S.isEmptyObject(t)
            }
          })
        var se = new ae(),
          ue = new ae(),
          le = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          ce = /[A-Z]/g
        function fe(e, t, n) {
          var r
          if (void 0 === n && 1 === e.nodeType)
            if (
              ((r = 'data-' + t.replace(ce, '-$&').toLowerCase()),
              'string' == typeof (n = e.getAttribute(r)))
            ) {
              try {
                n = (function (e) {
                  return (
                    'true' === e ||
                    ('false' !== e &&
                      ('null' === e ? null : e === +e + '' ? +e : le.test(e) ? JSON.parse(e) : e))
                  )
                })(n)
              } catch (e) {}
              ue.set(e, t, n)
            } else n = void 0
          return n
        }
        S.extend({
          hasData: function (e) {
            return ue.hasData(e) || se.hasData(e)
          },
          data: function (e, t, n) {
            return ue.access(e, t, n)
          },
          removeData: function (e, t) {
            ue.remove(e, t)
          },
          _data: function (e, t, n) {
            return se.access(e, t, n)
          },
          _removeData: function (e, t) {
            se.remove(e, t)
          }
        }),
          S.fn.extend({
            data: function (e, t) {
              var n,
                r,
                i,
                o = this[0],
                a = o && o.attributes
              if (void 0 === e) {
                if (
                  this.length &&
                  ((i = ue.get(o)), 1 === o.nodeType && !se.get(o, 'hasDataAttrs'))
                ) {
                  for (n = a.length; n--; )
                    a[n] &&
                      0 === (r = a[n].name).indexOf('data-') &&
                      ((r = ie(r.slice(5))), fe(o, r, i[r]))
                  se.set(o, 'hasDataAttrs', !0)
                }
                return i
              }
              return 'object' == typeof e
                ? this.each(function () {
                    ue.set(this, e)
                  })
                : ee(
                    this,
                    function (t) {
                      var n
                      if (o && void 0 === t)
                        return void 0 !== (n = ue.get(o, e)) || void 0 !== (n = fe(o, e))
                          ? n
                          : void 0
                      this.each(function () {
                        ue.set(this, e, t)
                      })
                    },
                    null,
                    t,
                    arguments.length > 1,
                    null,
                    !0
                  )
            },
            removeData: function (e) {
              return this.each(function () {
                ue.remove(this, e)
              })
            }
          }),
          S.extend({
            queue: function (e, t, n) {
              var r
              if (e)
                return (
                  (t = (t || 'fx') + 'queue'),
                  (r = se.get(e, t)),
                  n && (!r || Array.isArray(n) ? (r = se.access(e, t, S.makeArray(n))) : r.push(n)),
                  r || []
                )
            },
            dequeue: function (e, t) {
              t = t || 'fx'
              var n = S.queue(e, t),
                r = n.length,
                i = n.shift(),
                o = S._queueHooks(e, t)
              'inprogress' === i && ((i = n.shift()), r--),
                i &&
                  ('fx' === t && n.unshift('inprogress'),
                  delete o.stop,
                  i.call(
                    e,
                    function () {
                      S.dequeue(e, t)
                    },
                    o
                  )),
                !r && o && o.empty.fire()
            },
            _queueHooks: function (e, t) {
              var n = t + 'queueHooks'
              return (
                se.get(e, n) ||
                se.access(e, n, {
                  empty: S.Callbacks('once memory').add(function () {
                    se.remove(e, [t + 'queue', n])
                  })
                })
              )
            }
          }),
          S.fn.extend({
            queue: function (e, t) {
              var n = 2
              return (
                'string' != typeof e && ((t = e), (e = 'fx'), n--),
                arguments.length < n
                  ? S.queue(this[0], e)
                  : void 0 === t
                    ? this
                    : this.each(function () {
                        var n = S.queue(this, e, t)
                        S._queueHooks(this, e),
                          'fx' === e && 'inprogress' !== n[0] && S.dequeue(this, e)
                      })
              )
            },
            dequeue: function (e) {
              return this.each(function () {
                S.dequeue(this, e)
              })
            },
            clearQueue: function (e) {
              return this.queue(e || 'fx', [])
            },
            promise: function (e, t) {
              var n,
                r = 1,
                i = S.Deferred(),
                o = this,
                a = this.length,
                s = function () {
                  --r || i.resolveWith(o, [o])
                }
              for ('string' != typeof e && ((t = e), (e = void 0)), e = e || 'fx'; a--; )
                (n = se.get(o[a], e + 'queueHooks')) && n.empty && (r++, n.empty.add(s))
              return s(), i.promise(t)
            }
          })
        var pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          de = new RegExp('^(?:([+-])=|)(' + pe + ')([a-z%]*)$', 'i'),
          he = ['Top', 'Right', 'Bottom', 'Left'],
          ge = x.documentElement,
          ve = function (e) {
            return S.contains(e.ownerDocument, e)
          },
          ye = { composed: !0 }
        ge.getRootNode &&
          (ve = function (e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(ye) === e.ownerDocument
          })
        var me = function (e, t) {
          return (
            'none' === (e = t || e).style.display ||
            ('' === e.style.display && ve(e) && 'none' === S.css(e, 'display'))
          )
        }
        function xe(e, t, n, r) {
          var i,
            o,
            a = 20,
            s = r
              ? function () {
                  return r.cur()
                }
              : function () {
                  return S.css(e, t, '')
                },
            u = s(),
            l = (n && n[3]) || (S.cssNumber[t] ? '' : 'px'),
            c = e.nodeType && (S.cssNumber[t] || ('px' !== l && +u)) && de.exec(S.css(e, t))
          if (c && c[3] !== l) {
            for (u /= 2, l = l || c[3], c = +u || 1; a--; )
              S.style(e, t, c + l), (1 - o) * (1 - (o = s() / u || 0.5)) <= 0 && (a = 0), (c /= o)
            ;(c *= 2), S.style(e, t, c + l), (n = n || [])
          }
          return (
            n &&
              ((c = +c || +u || 0),
              (i = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
              r && ((r.unit = l), (r.start = c), (r.end = i))),
            i
          )
        }
        var be = {}
        function we(e) {
          var t,
            n = e.ownerDocument,
            r = e.nodeName,
            i = be[r]
          return (
            i ||
            ((t = n.body.appendChild(n.createElement(r))),
            (i = S.css(t, 'display')),
            t.parentNode.removeChild(t),
            'none' === i && (i = 'block'),
            (be[r] = i),
            i)
          )
        }
        function Te(e, t) {
          for (var n, r, i = [], o = 0, a = e.length; o < a; o++)
            (r = e[o]).style &&
              ((n = r.style.display),
              t
                ? ('none' === n &&
                    ((i[o] = se.get(r, 'display') || null), i[o] || (r.style.display = '')),
                  '' === r.style.display && me(r) && (i[o] = we(r)))
                : 'none' !== n && ((i[o] = 'none'), se.set(r, 'display', n)))
          for (o = 0; o < a; o++) null != i[o] && (e[o].style.display = i[o])
          return e
        }
        S.fn.extend({
          show: function () {
            return Te(this, !0)
          },
          hide: function () {
            return Te(this)
          },
          toggle: function (e) {
            return 'boolean' == typeof e
              ? e
                ? this.show()
                : this.hide()
              : this.each(function () {
                  me(this) ? S(this).show() : S(this).hide()
                })
          }
        })
        var Ce,
          ke,
          Se = /^(?:checkbox|radio)$/i,
          Ee = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
          je = /^$|^module$|\/(?:java|ecma)script/i
        ;(Ce = x.createDocumentFragment().appendChild(x.createElement('div'))),
          (ke = x.createElement('input')).setAttribute('type', 'radio'),
          ke.setAttribute('checked', 'checked'),
          ke.setAttribute('name', 't'),
          Ce.appendChild(ke),
          (v.checkClone = Ce.cloneNode(!0).cloneNode(!0).lastChild.checked),
          (Ce.innerHTML = '<textarea>x</textarea>'),
          (v.noCloneChecked = !!Ce.cloneNode(!0).lastChild.defaultValue),
          (Ce.innerHTML = '<option></option>'),
          (v.option = !!Ce.lastChild)
        var Ae = {
          thead: [1, '<table>', '</table>'],
          col: [2, '<table><colgroup>', '</colgroup></table>'],
          tr: [2, '<table><tbody>', '</tbody></table>'],
          td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
          _default: [0, '', '']
        }
        function De(e, t) {
          var n
          return (
            (n =
              void 0 !== e.getElementsByTagName
                ? e.getElementsByTagName(t || '*')
                : void 0 !== e.querySelectorAll
                  ? e.querySelectorAll(t || '*')
                  : []),
            void 0 === t || (t && j(e, t)) ? S.merge([e], n) : n
          )
        }
        function Ne(e, t) {
          for (var n = 0, r = e.length; n < r; n++)
            se.set(e[n], 'globalEval', !t || se.get(t[n], 'globalEval'))
        }
        ;(Ae.tbody = Ae.tfoot = Ae.colgroup = Ae.caption = Ae.thead),
          (Ae.th = Ae.td),
          v.option || (Ae.optgroup = Ae.option = [1, "<select multiple='multiple'>", '</select>'])
        var qe = /<|&#?\w+;/
        function Le(e, t, n, r, i) {
          for (
            var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length;
            d < h;
            d++
          )
            if ((o = e[d]) || 0 === o)
              if ('object' === T(o)) S.merge(p, o.nodeType ? [o] : o)
              else if (qe.test(o)) {
                for (
                  a = a || f.appendChild(t.createElement('div')),
                    s = (Ee.exec(o) || ['', ''])[1].toLowerCase(),
                    u = Ae[s] || Ae._default,
                    a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                    c = u[0];
                  c--;

                )
                  a = a.lastChild
                S.merge(p, a.childNodes), ((a = f.firstChild).textContent = '')
              } else p.push(t.createTextNode(o))
          for (f.textContent = '', d = 0; (o = p[d++]); )
            if (r && S.inArray(o, r) > -1) i && i.push(o)
            else if (((l = ve(o)), (a = De(f.appendChild(o), 'script')), l && Ne(a), n))
              for (c = 0; (o = a[c++]); ) je.test(o.type || '') && n.push(o)
          return f
        }
        var He = /^([^.]*)(?:\.(.+)|)/
        function Oe() {
          return !0
        }
        function Pe() {
          return !1
        }
        function Me(e, t, n, r, i, o) {
          var a, s
          if ('object' == typeof t) {
            for (s in ('string' != typeof n && ((r = r || n), (n = void 0)), t))
              Me(e, s, n, r, t[s], o)
            return e
          }
          if (
            (null == r && null == i
              ? ((i = n), (r = n = void 0))
              : null == i &&
                ('string' == typeof n ? ((i = r), (r = void 0)) : ((i = r), (r = n), (n = void 0))),
            !1 === i)
          )
            i = Pe
          else if (!i) return e
          return (
            1 === o &&
              ((a = i),
              (i = function (e) {
                return S().off(e), a.apply(this, arguments)
              }),
              (i.guid = a.guid || (a.guid = S.guid++))),
            e.each(function () {
              S.event.add(this, t, i, r, n)
            })
          )
        }
        function Re(e, t, n) {
          n
            ? (se.set(e, t, !1),
              S.event.add(e, t, {
                namespace: !1,
                handler: function (e) {
                  var n,
                    r = se.get(this, t)
                  if (1 & e.isTrigger && this[t]) {
                    if (r) (S.event.special[t] || {}).delegateType && e.stopPropagation()
                    else if (
                      ((r = s.call(arguments)),
                      se.set(this, t, r),
                      this[t](),
                      (n = se.get(this, t)),
                      se.set(this, t, !1),
                      r !== n)
                    )
                      return e.stopImmediatePropagation(), e.preventDefault(), n
                  } else
                    r &&
                      (se.set(this, t, S.event.trigger(r[0], r.slice(1), this)),
                      e.stopPropagation(),
                      (e.isImmediatePropagationStopped = Oe))
                }
              }))
            : void 0 === se.get(e, t) && S.event.add(e, t, Oe)
        }
        ;(S.event = {
          global: {},
          add: function (e, t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = se.get(e)
            if (oe(e))
              for (
                n.handler && ((n = (o = n).handler), (i = o.selector)),
                  i && S.find.matchesSelector(ge, i),
                  n.guid || (n.guid = S.guid++),
                  (u = v.events) || (u = v.events = Object.create(null)),
                  (a = v.handle) ||
                    (a = v.handle =
                      function (t) {
                        return void 0 !== S && S.event.triggered !== t.type
                          ? S.event.dispatch.apply(e, arguments)
                          : void 0
                      }),
                  l = (t = (t || '').match(V) || ['']).length;
                l--;

              )
                (d = g = (s = He.exec(t[l]) || [])[1]),
                  (h = (s[2] || '').split('.').sort()),
                  d &&
                    ((f = S.event.special[d] || {}),
                    (d = (i ? f.delegateType : f.bindType) || d),
                    (f = S.event.special[d] || {}),
                    (c = S.extend(
                      {
                        type: d,
                        origType: g,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && S.expr.match.needsContext.test(i),
                        namespace: h.join('.')
                      },
                      o
                    )),
                    (p = u[d]) ||
                      (((p = u[d] = []).delegateCount = 0),
                      (f.setup && !1 !== f.setup.call(e, r, h, a)) ||
                        (e.addEventListener && e.addEventListener(d, a))),
                    f.add && (f.add.call(e, c), c.handler.guid || (c.handler.guid = n.guid)),
                    i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                    (S.event.global[d] = !0))
          },
          remove: function (e, t, n, r, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              d,
              h,
              g,
              v = se.hasData(e) && se.get(e)
            if (v && (u = v.events)) {
              for (l = (t = (t || '').match(V) || ['']).length; l--; )
                if (
                  ((d = g = (s = He.exec(t[l]) || [])[1]), (h = (s[2] || '').split('.').sort()), d)
                ) {
                  for (
                    f = S.event.special[d] || {},
                      p = u[(d = (r ? f.delegateType : f.bindType) || d)] || [],
                      s = s[2] && new RegExp('(^|\\.)' + h.join('\\.(?:.*\\.|)') + '(\\.|$)'),
                      a = o = p.length;
                    o--;

                  )
                    (c = p[o]),
                      (!i && g !== c.origType) ||
                        (n && n.guid !== c.guid) ||
                        (s && !s.test(c.namespace)) ||
                        (r && r !== c.selector && ('**' !== r || !c.selector)) ||
                        (p.splice(o, 1),
                        c.selector && p.delegateCount--,
                        f.remove && f.remove.call(e, c))
                  a &&
                    !p.length &&
                    ((f.teardown && !1 !== f.teardown.call(e, h, v.handle)) ||
                      S.removeEvent(e, d, v.handle),
                    delete u[d])
                } else for (d in u) S.event.remove(e, d + t[l], n, r, !0)
              S.isEmptyObject(u) && se.remove(e, 'handle events')
            }
          },
          dispatch: function (e) {
            var t,
              n,
              r,
              i,
              o,
              a,
              s = new Array(arguments.length),
              u = S.event.fix(e),
              l = (se.get(this, 'events') || Object.create(null))[u.type] || [],
              c = S.event.special[u.type] || {}
            for (s[0] = u, t = 1; t < arguments.length; t++) s[t] = arguments[t]
            if (((u.delegateTarget = this), !c.preDispatch || !1 !== c.preDispatch.call(this, u))) {
              for (
                a = S.event.handlers.call(this, u, l), t = 0;
                (i = a[t++]) && !u.isPropagationStopped();

              )
                for (
                  u.currentTarget = i.elem, n = 0;
                  (o = i.handlers[n++]) && !u.isImmediatePropagationStopped();

                )
                  (u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace)) ||
                    ((u.handleObj = o),
                    (u.data = o.data),
                    void 0 !==
                      (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(
                        i.elem,
                        s
                      )) &&
                      !1 === (u.result = r) &&
                      (u.preventDefault(), u.stopPropagation()))
              return c.postDispatch && c.postDispatch.call(this, u), u.result
            }
          },
          handlers: function (e, t) {
            var n,
              r,
              i,
              o,
              a,
              s = [],
              u = t.delegateCount,
              l = e.target
            if (u && l.nodeType && !('click' === e.type && e.button >= 1))
              for (; l !== this; l = l.parentNode || this)
                if (1 === l.nodeType && ('click' !== e.type || !0 !== l.disabled)) {
                  for (o = [], a = {}, n = 0; n < u; n++)
                    void 0 === a[(i = (r = t[n]).selector + ' ')] &&
                      (a[i] = r.needsContext
                        ? S(i, this).index(l) > -1
                        : S.find(i, this, null, [l]).length),
                      a[i] && o.push(r)
                  o.length && s.push({ elem: l, handlers: o })
                }
            return (l = this), u < t.length && s.push({ elem: l, handlers: t.slice(u) }), s
          },
          addProp: function (e, t) {
            Object.defineProperty(S.Event.prototype, e, {
              enumerable: !0,
              configurable: !0,
              get: y(t)
                ? function () {
                    if (this.originalEvent) return t(this.originalEvent)
                  }
                : function () {
                    if (this.originalEvent) return this.originalEvent[e]
                  },
              set: function (t) {
                Object.defineProperty(this, e, {
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
                  value: t
                })
              }
            })
          },
          fix: function (e) {
            return e[S.expando] ? e : new S.Event(e)
          },
          special: {
            load: { noBubble: !0 },
            click: {
              setup: function (e) {
                var t = this || e
                return Se.test(t.type) && t.click && j(t, 'input') && Re(t, 'click', !0), !1
              },
              trigger: function (e) {
                var t = this || e
                return Se.test(t.type) && t.click && j(t, 'input') && Re(t, 'click'), !0
              },
              _default: function (e) {
                var t = e.target
                return (
                  (Se.test(t.type) && t.click && j(t, 'input') && se.get(t, 'click')) || j(t, 'a')
                )
              }
            },
            beforeunload: {
              postDispatch: function (e) {
                void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
              }
            }
          }
        }),
          (S.removeEvent = function (e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
          }),
          (S.Event = function (e, t) {
            if (!(this instanceof S.Event)) return new S.Event(e, t)
            e && e.type
              ? ((this.originalEvent = e),
                (this.type = e.type),
                (this.isDefaultPrevented =
                  e.defaultPrevented || (void 0 === e.defaultPrevented && !1 === e.returnValue)
                    ? Oe
                    : Pe),
                (this.target =
                  e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target),
                (this.currentTarget = e.currentTarget),
                (this.relatedTarget = e.relatedTarget))
              : (this.type = e),
              t && S.extend(this, t),
              (this.timeStamp = (e && e.timeStamp) || Date.now()),
              (this[S.expando] = !0)
          }),
          (S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Pe,
            isPropagationStopped: Pe,
            isImmediatePropagationStopped: Pe,
            isSimulated: !1,
            preventDefault: function () {
              var e = this.originalEvent
              ;(this.isDefaultPrevented = Oe), e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function () {
              var e = this.originalEvent
              ;(this.isPropagationStopped = Oe), e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function () {
              var e = this.originalEvent
              ;(this.isImmediatePropagationStopped = Oe),
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
          }),
          S.each(
            {
              altKey: !0,
              bubbles: !0,
              cancelable: !0,
              changedTouches: !0,
              ctrlKey: !0,
              detail: !0,
              eventPhase: !0,
              metaKey: !0,
              pageX: !0,
              pageY: !0,
              shiftKey: !0,
              view: !0,
              char: !0,
              code: !0,
              charCode: !0,
              key: !0,
              keyCode: !0,
              button: !0,
              buttons: !0,
              clientX: !0,
              clientY: !0,
              offsetX: !0,
              offsetY: !0,
              pointerId: !0,
              pointerType: !0,
              screenX: !0,
              screenY: !0,
              targetTouches: !0,
              toElement: !0,
              touches: !0,
              which: !0
            },
            S.event.addProp
          ),
          S.each({ focus: 'focusin', blur: 'focusout' }, function (e, t) {
            function n(e) {
              if (x.documentMode) {
                var n = se.get(this, 'handle'),
                  r = S.event.fix(e)
                ;(r.type = 'focusin' === e.type ? 'focus' : 'blur'),
                  (r.isSimulated = !0),
                  n(e),
                  r.target === r.currentTarget && n(r)
              } else S.event.simulate(t, e.target, S.event.fix(e))
            }
            ;(S.event.special[e] = {
              setup: function () {
                var r
                if ((Re(this, e, !0), !x.documentMode)) return !1
                ;(r = se.get(this, t)) || this.addEventListener(t, n), se.set(this, t, (r || 0) + 1)
              },
              trigger: function () {
                return Re(this, e), !0
              },
              teardown: function () {
                var e
                if (!x.documentMode) return !1
                ;(e = se.get(this, t) - 1)
                  ? se.set(this, t, e)
                  : (this.removeEventListener(t, n), se.remove(this, t))
              },
              _default: function (t) {
                return se.get(t.target, e)
              },
              delegateType: t
            }),
              (S.event.special[t] = {
                setup: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = x.documentMode ? this : r,
                    o = se.get(i, t)
                  o ||
                    (x.documentMode ? this.addEventListener(t, n) : r.addEventListener(e, n, !0)),
                    se.set(i, t, (o || 0) + 1)
                },
                teardown: function () {
                  var r = this.ownerDocument || this.document || this,
                    i = x.documentMode ? this : r,
                    o = se.get(i, t) - 1
                  o
                    ? se.set(i, t, o)
                    : (x.documentMode
                        ? this.removeEventListener(t, n)
                        : r.removeEventListener(e, n, !0),
                      se.remove(i, t))
                }
              })
          }),
          S.each(
            {
              mouseenter: 'mouseover',
              mouseleave: 'mouseout',
              pointerenter: 'pointerover',
              pointerleave: 'pointerout'
            },
            function (e, t) {
              S.event.special[e] = {
                delegateType: t,
                bindType: t,
                handle: function (e) {
                  var n,
                    r = e.relatedTarget,
                    i = e.handleObj
                  return (
                    (r && (r === this || S.contains(this, r))) ||
                      ((e.type = i.origType), (n = i.handler.apply(this, arguments)), (e.type = t)),
                    n
                  )
                }
              }
            }
          ),
          S.fn.extend({
            on: function (e, t, n, r) {
              return Me(this, e, t, n, r)
            },
            one: function (e, t, n, r) {
              return Me(this, e, t, n, r, 1)
            },
            off: function (e, t, n) {
              var r, i
              if (e && e.preventDefault && e.handleObj)
                return (
                  (r = e.handleObj),
                  S(e.delegateTarget).off(
                    r.namespace ? r.origType + '.' + r.namespace : r.origType,
                    r.selector,
                    r.handler
                  ),
                  this
                )
              if ('object' == typeof e) {
                for (i in e) this.off(i, t, e[i])
                return this
              }
              return (
                (!1 !== t && 'function' != typeof t) || ((n = t), (t = void 0)),
                !1 === n && (n = Pe),
                this.each(function () {
                  S.event.remove(this, e, n, t)
                })
              )
            }
          })
        var Ie = /<script|<style|<link/i,
          We = /checked\s*(?:[^=]|=\s*.checked.)/i,
          Fe = /^\s*<!\[CDATA\[|\]\]>\s*$/g
        function $e(e, t) {
          return (
            (j(e, 'table') &&
              j(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
              S(e).children('tbody')[0]) ||
            e
          )
        }
        function _e(e) {
          return (e.type = (null !== e.getAttribute('type')) + '/' + e.type), e
        }
        function Be(e) {
          return (
            'true/' === (e.type || '').slice(0, 5)
              ? (e.type = e.type.slice(5))
              : e.removeAttribute('type'),
            e
          )
        }
        function ze(e, t) {
          var n, r, i, o, a, s
          if (1 === t.nodeType) {
            if (se.hasData(e) && (s = se.get(e).events))
              for (i in (se.remove(t, 'handle events'), s))
                for (n = 0, r = s[i].length; n < r; n++) S.event.add(t, i, s[i][n])
            ue.hasData(e) && ((o = ue.access(e)), (a = S.extend({}, o)), ue.set(t, a))
          }
        }
        function Xe(e, t) {
          var n = t.nodeName.toLowerCase()
          'input' === n && Se.test(e.type)
            ? (t.checked = e.checked)
            : ('input' !== n && 'textarea' !== n) || (t.defaultValue = e.defaultValue)
        }
        function Ue(e, t, n, r) {
          t = u(t)
          var i,
            o,
            a,
            s,
            l,
            c,
            f = 0,
            p = e.length,
            d = p - 1,
            h = t[0],
            g = y(h)
          if (g || (p > 1 && 'string' == typeof h && !v.checkClone && We.test(h)))
            return e.each(function (i) {
              var o = e.eq(i)
              g && (t[0] = h.call(this, i, o.html())), Ue(o, t, n, r)
            })
          if (
            p &&
            ((o = (i = Le(t, e[0].ownerDocument, !1, e, r)).firstChild),
            1 === i.childNodes.length && (i = o),
            o || r)
          ) {
            for (s = (a = S.map(De(i, 'script'), _e)).length; f < p; f++)
              (l = i),
                f !== d && ((l = S.clone(l, !0, !0)), s && S.merge(a, De(l, 'script'))),
                n.call(e[f], l, f)
            if (s)
              for (c = a[a.length - 1].ownerDocument, S.map(a, Be), f = 0; f < s; f++)
                (l = a[f]),
                  je.test(l.type || '') &&
                    !se.access(l, 'globalEval') &&
                    S.contains(c, l) &&
                    (l.src && 'module' !== (l.type || '').toLowerCase()
                      ? S._evalUrl &&
                        !l.noModule &&
                        S._evalUrl(l.src, { nonce: l.nonce || l.getAttribute('nonce') }, c)
                      : w(l.textContent.replace(Fe, ''), l, c))
          }
          return e
        }
        function Ve(e, t, n) {
          for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || S.cleanData(De(r)),
              r.parentNode && (n && ve(r) && Ne(De(r, 'script')), r.parentNode.removeChild(r))
          return e
        }
        S.extend({
          htmlPrefilter: function (e) {
            return e
          },
          clone: function (e, t, n) {
            var r,
              i,
              o,
              a,
              s = e.cloneNode(!0),
              u = ve(e)
            if (!(v.noCloneChecked || (1 !== e.nodeType && 11 !== e.nodeType) || S.isXMLDoc(e)))
              for (a = De(s), r = 0, i = (o = De(e)).length; r < i; r++) Xe(o[r], a[r])
            if (t)
              if (n)
                for (o = o || De(e), a = a || De(s), r = 0, i = o.length; r < i; r++) ze(o[r], a[r])
              else ze(e, s)
            return (a = De(s, 'script')).length > 0 && Ne(a, !u && De(e, 'script')), s
          },
          cleanData: function (e) {
            for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
              if (oe(n)) {
                if ((t = n[se.expando])) {
                  if (t.events)
                    for (r in t.events) i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle)
                  n[se.expando] = void 0
                }
                n[ue.expando] && (n[ue.expando] = void 0)
              }
          }
        }),
          S.fn.extend({
            detach: function (e) {
              return Ve(this, e, !0)
            },
            remove: function (e) {
              return Ve(this, e)
            },
            text: function (e) {
              return ee(
                this,
                function (e) {
                  return void 0 === e
                    ? S.text(this)
                    : this.empty().each(function () {
                        ;(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                          (this.textContent = e)
                      })
                },
                null,
                e,
                arguments.length
              )
            },
            append: function () {
              return Ue(this, arguments, function (e) {
                ;(1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType) ||
                  $e(this, e).appendChild(e)
              })
            },
            prepend: function () {
              return Ue(this, arguments, function (e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                  var t = $e(this, e)
                  t.insertBefore(e, t.firstChild)
                }
              })
            },
            before: function () {
              return Ue(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
              })
            },
            after: function () {
              return Ue(this, arguments, function (e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
              })
            },
            empty: function () {
              for (var e, t = 0; null != (e = this[t]); t++)
                1 === e.nodeType && (S.cleanData(De(e, !1)), (e.textContent = ''))
              return this
            },
            clone: function (e, t) {
              return (
                (e = null != e && e),
                (t = null == t ? e : t),
                this.map(function () {
                  return S.clone(this, e, t)
                })
              )
            },
            html: function (e) {
              return ee(
                this,
                function (e) {
                  var t = this[0] || {},
                    n = 0,
                    r = this.length
                  if (void 0 === e && 1 === t.nodeType) return t.innerHTML
                  if (
                    'string' == typeof e &&
                    !Ie.test(e) &&
                    !Ae[(Ee.exec(e) || ['', ''])[1].toLowerCase()]
                  ) {
                    e = S.htmlPrefilter(e)
                    try {
                      for (; n < r; n++)
                        1 === (t = this[n] || {}).nodeType &&
                          (S.cleanData(De(t, !1)), (t.innerHTML = e))
                      t = 0
                    } catch (e) {}
                  }
                  t && this.empty().append(e)
                },
                null,
                e,
                arguments.length
              )
            },
            replaceWith: function () {
              var e = []
              return Ue(
                this,
                arguments,
                function (t) {
                  var n = this.parentNode
                  S.inArray(this, e) < 0 && (S.cleanData(De(this)), n && n.replaceChild(t, this))
                },
                e
              )
            }
          }),
          S.each(
            {
              appendTo: 'append',
              prependTo: 'prepend',
              insertBefore: 'before',
              insertAfter: 'after',
              replaceAll: 'replaceWith'
            },
            function (e, t) {
              S.fn[e] = function (e) {
                for (var n, r = [], i = S(e), o = i.length - 1, a = 0; a <= o; a++)
                  (n = a === o ? this : this.clone(!0)), S(i[a])[t](n), l.apply(r, n.get())
                return this.pushStack(r)
              }
            }
          )
        var Ge = new RegExp('^(' + pe + ')(?!px)[a-z%]+$', 'i'),
          Ye = /^--/,
          Qe = function (e) {
            var t = e.ownerDocument.defaultView
            return (t && t.opener) || (t = r), t.getComputedStyle(e)
          },
          Je = function (e, t, n) {
            var r,
              i,
              o = {}
            for (i in t) (o[i] = e.style[i]), (e.style[i] = t[i])
            for (i in ((r = n.call(e)), t)) e.style[i] = o[i]
            return r
          },
          Ke = new RegExp(he.join('|'), 'i')
        function Ze(e, t, n) {
          var r,
            i,
            o,
            a,
            s = Ye.test(t),
            u = e.style
          return (
            (n = n || Qe(e)) &&
              ((a = n.getPropertyValue(t) || n[t]),
              s && a && (a = a.replace(L, '$1') || void 0),
              '' !== a || ve(e) || (a = S.style(e, t)),
              !v.pixelBoxStyles() &&
                Ge.test(a) &&
                Ke.test(t) &&
                ((r = u.width),
                (i = u.minWidth),
                (o = u.maxWidth),
                (u.minWidth = u.maxWidth = u.width = a),
                (a = n.width),
                (u.width = r),
                (u.minWidth = i),
                (u.maxWidth = o))),
            void 0 !== a ? a + '' : a
          )
        }
        function et(e, t) {
          return {
            get: function () {
              if (!e()) return (this.get = t).apply(this, arguments)
              delete this.get
            }
          }
        }
        !(function () {
          function e() {
            if (c) {
              ;(l.style.cssText =
                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                (c.style.cssText =
                  'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                ge.appendChild(l).appendChild(c)
              var e = r.getComputedStyle(c)
              ;(n = '1%' !== e.top),
                (u = 12 === t(e.marginLeft)),
                (c.style.right = '60%'),
                (a = 36 === t(e.right)),
                (i = 36 === t(e.width)),
                (c.style.position = 'absolute'),
                (o = 12 === t(c.offsetWidth / 3)),
                ge.removeChild(l),
                (c = null)
            }
          }
          function t(e) {
            return Math.round(parseFloat(e))
          }
          var n,
            i,
            o,
            a,
            s,
            u,
            l = x.createElement('div'),
            c = x.createElement('div')
          c.style &&
            ((c.style.backgroundClip = 'content-box'),
            (c.cloneNode(!0).style.backgroundClip = ''),
            (v.clearCloneStyle = 'content-box' === c.style.backgroundClip),
            S.extend(v, {
              boxSizingReliable: function () {
                return e(), i
              },
              pixelBoxStyles: function () {
                return e(), a
              },
              pixelPosition: function () {
                return e(), n
              },
              reliableMarginLeft: function () {
                return e(), u
              },
              scrollboxSize: function () {
                return e(), o
              },
              reliableTrDimensions: function () {
                var e, t, n, i
                return (
                  null == s &&
                    ((e = x.createElement('table')),
                    (t = x.createElement('tr')),
                    (n = x.createElement('div')),
                    (e.style.cssText = 'position:absolute;left:-11111px;border-collapse:separate'),
                    (t.style.cssText = 'box-sizing:content-box;border:1px solid'),
                    (t.style.height = '1px'),
                    (n.style.height = '9px'),
                    (n.style.display = 'block'),
                    ge.appendChild(e).appendChild(t).appendChild(n),
                    (i = r.getComputedStyle(t)),
                    (s =
                      parseInt(i.height, 10) +
                        parseInt(i.borderTopWidth, 10) +
                        parseInt(i.borderBottomWidth, 10) ===
                      t.offsetHeight),
                    ge.removeChild(e)),
                  s
                )
              }
            }))
        })()
        var tt = ['Webkit', 'Moz', 'ms'],
          nt = x.createElement('div').style,
          rt = {}
        function it(e) {
          return (
            S.cssProps[e] ||
            rt[e] ||
            (e in nt
              ? e
              : (rt[e] =
                  (function (e) {
                    for (var t = e[0].toUpperCase() + e.slice(1), n = tt.length; n--; )
                      if ((e = tt[n] + t) in nt) return e
                  })(e) || e))
          )
        }
        var ot = /^(none|table(?!-c[ea]).+)/,
          at = { position: 'absolute', visibility: 'hidden', display: 'block' },
          st = { letterSpacing: '0', fontWeight: '400' }
        function ut(e, t, n) {
          var r = de.exec(t)
          return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px') : t
        }
        function lt(e, t, n, r, i, o) {
          var a = 'width' === t ? 1 : 0,
            s = 0,
            u = 0,
            l = 0
          if (n === (r ? 'border' : 'content')) return 0
          for (; a < 4; a += 2)
            'margin' === n && (l += S.css(e, n + he[a], !0, i)),
              r
                ? ('content' === n && (u -= S.css(e, 'padding' + he[a], !0, i)),
                  'margin' !== n && (u -= S.css(e, 'border' + he[a] + 'Width', !0, i)))
                : ((u += S.css(e, 'padding' + he[a], !0, i)),
                  'padding' !== n
                    ? (u += S.css(e, 'border' + he[a] + 'Width', !0, i))
                    : (s += S.css(e, 'border' + he[a] + 'Width', !0, i)))
          return (
            !r &&
              o >= 0 &&
              (u +=
                Math.max(
                  0,
                  Math.ceil(e['offset' + t[0].toUpperCase() + t.slice(1)] - o - u - s - 0.5)
                ) || 0),
            u + l
          )
        }
        function ct(e, t, n) {
          var r = Qe(e),
            i = (!v.boxSizingReliable() || n) && 'border-box' === S.css(e, 'boxSizing', !1, r),
            o = i,
            a = Ze(e, t, r),
            s = 'offset' + t[0].toUpperCase() + t.slice(1)
          if (Ge.test(a)) {
            if (!n) return a
            a = 'auto'
          }
          return (
            ((!v.boxSizingReliable() && i) ||
              (!v.reliableTrDimensions() && j(e, 'tr')) ||
              'auto' === a ||
              (!parseFloat(a) && 'inline' === S.css(e, 'display', !1, r))) &&
              e.getClientRects().length &&
              ((i = 'border-box' === S.css(e, 'boxSizing', !1, r)), (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + lt(e, t, n || (i ? 'border' : 'content'), o, r, a) + 'px'
          )
        }
        function ft(e, t, n, r, i) {
          return new ft.prototype.init(e, t, n, r, i)
        }
        S.extend({
          cssHooks: {
            opacity: {
              get: function (e, t) {
                if (t) {
                  var n = Ze(e, 'opacity')
                  return '' === n ? '1' : n
                }
              }
            }
          },
          cssNumber: {
            animationIterationCount: !0,
            aspectRatio: !0,
            borderImageSlice: !0,
            columnCount: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            gridArea: !0,
            gridColumn: !0,
            gridColumnEnd: !0,
            gridColumnStart: !0,
            gridRow: !0,
            gridRowEnd: !0,
            gridRowStart: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            scale: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0,
            fillOpacity: !0,
            floodOpacity: !0,
            stopOpacity: !0,
            strokeMiterlimit: !0,
            strokeOpacity: !0
          },
          cssProps: {},
          style: function (e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
              var i,
                o,
                a,
                s = ie(t),
                u = Ye.test(t),
                l = e.style
              if ((u || (t = it(s)), (a = S.cssHooks[t] || S.cssHooks[s]), void 0 === n))
                return a && 'get' in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t]
              'string' == (o = typeof n) &&
                (i = de.exec(n)) &&
                i[1] &&
                ((n = xe(e, t, i)), (o = 'number')),
                null != n &&
                  n == n &&
                  ('number' !== o || u || (n += (i && i[3]) || (S.cssNumber[s] ? '' : 'px')),
                  v.clearCloneStyle ||
                    '' !== n ||
                    0 !== t.indexOf('background') ||
                    (l[t] = 'inherit'),
                  (a && 'set' in a && void 0 === (n = a.set(e, n, r))) ||
                    (u ? l.setProperty(t, n) : (l[t] = n)))
            }
          },
          css: function (e, t, n, r) {
            var i,
              o,
              a,
              s = ie(t)
            return (
              Ye.test(t) || (t = it(s)),
              (a = S.cssHooks[t] || S.cssHooks[s]) && 'get' in a && (i = a.get(e, !0, n)),
              void 0 === i && (i = Ze(e, t, r)),
              'normal' === i && t in st && (i = st[t]),
              '' === n || n ? ((o = parseFloat(i)), !0 === n || isFinite(o) ? o || 0 : i) : i
            )
          }
        }),
          S.each(['height', 'width'], function (e, t) {
            S.cssHooks[t] = {
              get: function (e, n, r) {
                if (n)
                  return !ot.test(S.css(e, 'display')) ||
                    (e.getClientRects().length && e.getBoundingClientRect().width)
                    ? ct(e, t, r)
                    : Je(e, at, function () {
                        return ct(e, t, r)
                      })
              },
              set: function (e, n, r) {
                var i,
                  o = Qe(e),
                  a = !v.scrollboxSize() && 'absolute' === o.position,
                  s = (a || r) && 'border-box' === S.css(e, 'boxSizing', !1, o),
                  u = r ? lt(e, t, r, s, o) : 0
                return (
                  s &&
                    a &&
                    (u -= Math.ceil(
                      e['offset' + t[0].toUpperCase() + t.slice(1)] -
                        parseFloat(o[t]) -
                        lt(e, t, 'border', !1, o) -
                        0.5
                    )),
                  u &&
                    (i = de.exec(n)) &&
                    'px' !== (i[3] || 'px') &&
                    ((e.style[t] = n), (n = S.css(e, t))),
                  ut(0, n, u)
                )
              }
            }
          }),
          (S.cssHooks.marginLeft = et(v.reliableMarginLeft, function (e, t) {
            if (t)
              return (
                (parseFloat(Ze(e, 'marginLeft')) ||
                  e.getBoundingClientRect().left -
                    Je(e, { marginLeft: 0 }, function () {
                      return e.getBoundingClientRect().left
                    })) + 'px'
              )
          })),
          S.each({ margin: '', padding: '', border: 'Width' }, function (e, t) {
            ;(S.cssHooks[e + t] = {
              expand: function (n) {
                for (var r = 0, i = {}, o = 'string' == typeof n ? n.split(' ') : [n]; r < 4; r++)
                  i[e + he[r] + t] = o[r] || o[r - 2] || o[0]
                return i
              }
            }),
              'margin' !== e && (S.cssHooks[e + t].set = ut)
          }),
          S.fn.extend({
            css: function (e, t) {
              return ee(
                this,
                function (e, t, n) {
                  var r,
                    i,
                    o = {},
                    a = 0
                  if (Array.isArray(t)) {
                    for (r = Qe(e), i = t.length; a < i; a++) o[t[a]] = S.css(e, t[a], !1, r)
                    return o
                  }
                  return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                },
                e,
                t,
                arguments.length > 1
              )
            }
          }),
          (S.Tween = ft),
          (ft.prototype = {
            constructor: ft,
            init: function (e, t, n, r, i, o) {
              ;(this.elem = e),
                (this.prop = n),
                (this.easing = i || S.easing._default),
                (this.options = t),
                (this.start = this.now = this.cur()),
                (this.end = r),
                (this.unit = o || (S.cssNumber[n] ? '' : 'px'))
            },
            cur: function () {
              var e = ft.propHooks[this.prop]
              return e && e.get ? e.get(this) : ft.propHooks._default.get(this)
            },
            run: function (e) {
              var t,
                n = ft.propHooks[this.prop]
              return (
                this.options.duration
                  ? (this.pos = t =
                      S.easing[this.easing](
                        e,
                        this.options.duration * e,
                        0,
                        1,
                        this.options.duration
                      ))
                  : (this.pos = t = e),
                (this.now = (this.end - this.start) * t + this.start),
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : ft.propHooks._default.set(this),
                this
              )
            }
          }),
          (ft.prototype.init.prototype = ft.prototype),
          (ft.propHooks = {
            _default: {
              get: function (e) {
                var t
                return 1 !== e.elem.nodeType ||
                  (null != e.elem[e.prop] && null == e.elem.style[e.prop])
                  ? e.elem[e.prop]
                  : (t = S.css(e.elem, e.prop, '')) && 'auto' !== t
                    ? t
                    : 0
              },
              set: function (e) {
                S.fx.step[e.prop]
                  ? S.fx.step[e.prop](e)
                  : 1 !== e.elem.nodeType ||
                      (!S.cssHooks[e.prop] && null == e.elem.style[it(e.prop)])
                    ? (e.elem[e.prop] = e.now)
                    : S.style(e.elem, e.prop, e.now + e.unit)
              }
            }
          }),
          (ft.propHooks.scrollTop = ft.propHooks.scrollLeft =
            {
              set: function (e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
              }
            }),
          (S.easing = {
            linear: function (e) {
              return e
            },
            swing: function (e) {
              return 0.5 - Math.cos(e * Math.PI) / 2
            },
            _default: 'swing'
          }),
          (S.fx = ft.prototype.init),
          (S.fx.step = {})
        var pt,
          dt,
          ht = /^(?:toggle|show|hide)$/,
          gt = /queueHooks$/
        function vt() {
          dt &&
            (!1 === x.hidden && r.requestAnimationFrame
              ? r.requestAnimationFrame(vt)
              : r.setTimeout(vt, S.fx.interval),
            S.fx.tick())
        }
        function yt() {
          return (
            r.setTimeout(function () {
              pt = void 0
            }),
            (pt = Date.now())
          )
        }
        function mt(e, t) {
          var n,
            r = 0,
            i = { height: e }
          for (t = t ? 1 : 0; r < 4; r += 2 - t) i['margin' + (n = he[r])] = i['padding' + n] = e
          return t && (i.opacity = i.width = e), i
        }
        function xt(e, t, n) {
          for (
            var r, i = (bt.tweeners[t] || []).concat(bt.tweeners['*']), o = 0, a = i.length;
            o < a;
            o++
          )
            if ((r = i[o].call(n, t, e))) return r
        }
        function bt(e, t, n) {
          var r,
            i,
            o = 0,
            a = bt.prefilters.length,
            s = S.Deferred().always(function () {
              delete u.elem
            }),
            u = function () {
              if (i) return !1
              for (
                var t = pt || yt(),
                  n = Math.max(0, l.startTime + l.duration - t),
                  r = 1 - (n / l.duration || 0),
                  o = 0,
                  a = l.tweens.length;
                o < a;
                o++
              )
                l.tweens[o].run(r)
              return (
                s.notifyWith(e, [l, r, n]),
                r < 1 && a ? n : (a || s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l]), !1)
              )
            },
            l = s.promise({
              elem: e,
              props: S.extend({}, t),
              opts: S.extend(!0, { specialEasing: {}, easing: S.easing._default }, n),
              originalProperties: t,
              originalOptions: n,
              startTime: pt || yt(),
              duration: n.duration,
              tweens: [],
              createTween: function (t, n) {
                var r = S.Tween(e, l.opts, t, n, l.opts.specialEasing[t] || l.opts.easing)
                return l.tweens.push(r), r
              },
              stop: function (t) {
                var n = 0,
                  r = t ? l.tweens.length : 0
                if (i) return this
                for (i = !0; n < r; n++) l.tweens[n].run(1)
                return (
                  t
                    ? (s.notifyWith(e, [l, 1, 0]), s.resolveWith(e, [l, t]))
                    : s.rejectWith(e, [l, t]),
                  this
                )
              }
            }),
            c = l.props
          for (
            (function (e, t) {
              var n, r, i, o, a
              for (n in e)
                if (
                  ((i = t[(r = ie(n))]),
                  (o = e[n]),
                  Array.isArray(o) && ((i = o[1]), (o = e[n] = o[0])),
                  n !== r && ((e[r] = o), delete e[n]),
                  (a = S.cssHooks[r]) && ('expand' in a))
                )
                  for (n in ((o = a.expand(o)), delete e[r], o))
                    (n in e) || ((e[n] = o[n]), (t[n] = i))
                else t[r] = i
            })(c, l.opts.specialEasing);
            o < a;
            o++
          )
            if ((r = bt.prefilters[o].call(l, e, c, l.opts)))
              return y(r.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = r.stop.bind(r)), r
          return (
            S.map(c, xt, l),
            y(l.opts.start) && l.opts.start.call(e, l),
            l
              .progress(l.opts.progress)
              .done(l.opts.done, l.opts.complete)
              .fail(l.opts.fail)
              .always(l.opts.always),
            S.fx.timer(S.extend(u, { elem: e, anim: l, queue: l.opts.queue })),
            l
          )
        }
        ;(S.Animation = S.extend(bt, {
          tweeners: {
            '*': [
              function (e, t) {
                var n = this.createTween(e, t)
                return xe(n.elem, e, de.exec(t), n), n
              }
            ]
          },
          tweener: function (e, t) {
            y(e) ? ((t = e), (e = ['*'])) : (e = e.match(V))
            for (var n, r = 0, i = e.length; r < i; r++)
              (n = e[r]), (bt.tweeners[n] = bt.tweeners[n] || []), bt.tweeners[n].unshift(t)
          },
          prefilters: [
            function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f = 'width' in t || 'height' in t,
                p = this,
                d = {},
                h = e.style,
                g = e.nodeType && me(e),
                v = se.get(e, 'fxshow')
              for (r in (n.queue ||
                (null == (a = S._queueHooks(e, 'fx')).unqueued &&
                  ((a.unqueued = 0),
                  (s = a.empty.fire),
                  (a.empty.fire = function () {
                    a.unqueued || s()
                  })),
                a.unqueued++,
                p.always(function () {
                  p.always(function () {
                    a.unqueued--, S.queue(e, 'fx').length || a.empty.fire()
                  })
                })),
              t))
                if (((i = t[r]), ht.test(i))) {
                  if ((delete t[r], (o = o || 'toggle' === i), i === (g ? 'hide' : 'show'))) {
                    if ('show' !== i || !v || void 0 === v[r]) continue
                    g = !0
                  }
                  d[r] = (v && v[r]) || S.style(e, r)
                }
              if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                for (r in (f &&
                  1 === e.nodeType &&
                  ((n.overflow = [h.overflow, h.overflowX, h.overflowY]),
                  null == (l = v && v.display) && (l = se.get(e, 'display')),
                  'none' === (c = S.css(e, 'display')) &&
                    (l
                      ? (c = l)
                      : (Te([e], !0),
                        (l = e.style.display || l),
                        (c = S.css(e, 'display')),
                        Te([e]))),
                  ('inline' === c || ('inline-block' === c && null != l)) &&
                    'none' === S.css(e, 'float') &&
                    (u ||
                      (p.done(function () {
                        h.display = l
                      }),
                      null == l && ((c = h.display), (l = 'none' === c ? '' : c))),
                    (h.display = 'inline-block'))),
                n.overflow &&
                  ((h.overflow = 'hidden'),
                  p.always(function () {
                    ;(h.overflow = n.overflow[0]),
                      (h.overflowX = n.overflow[1]),
                      (h.overflowY = n.overflow[2])
                  })),
                (u = !1),
                d))
                  u ||
                    (v
                      ? 'hidden' in v && (g = v.hidden)
                      : (v = se.access(e, 'fxshow', { display: l })),
                    o && (v.hidden = !g),
                    g && Te([e], !0),
                    p.done(function () {
                      for (r in (g || Te([e]), se.remove(e, 'fxshow'), d)) S.style(e, r, d[r])
                    })),
                    (u = xt(g ? v[r] : 0, r, p)),
                    r in v || ((v[r] = u.start), g && ((u.end = u.start), (u.start = 0)))
            }
          ],
          prefilter: function (e, t) {
            t ? bt.prefilters.unshift(e) : bt.prefilters.push(e)
          }
        })),
          (S.speed = function (e, t, n) {
            var r =
              e && 'object' == typeof e
                ? S.extend({}, e)
                : {
                    complete: n || (!n && t) || (y(e) && e),
                    duration: e,
                    easing: (n && t) || (t && !y(t) && t)
                  }
            return (
              S.fx.off
                ? (r.duration = 0)
                : 'number' != typeof r.duration &&
                  (r.duration in S.fx.speeds
                    ? (r.duration = S.fx.speeds[r.duration])
                    : (r.duration = S.fx.speeds._default)),
              (null != r.queue && !0 !== r.queue) || (r.queue = 'fx'),
              (r.old = r.complete),
              (r.complete = function () {
                y(r.old) && r.old.call(this), r.queue && S.dequeue(this, r.queue)
              }),
              r
            )
          }),
          S.fn.extend({
            fadeTo: function (e, t, n, r) {
              return this.filter(me).css('opacity', 0).show().end().animate({ opacity: t }, e, n, r)
            },
            animate: function (e, t, n, r) {
              var i = S.isEmptyObject(e),
                o = S.speed(t, n, r),
                a = function () {
                  var t = bt(this, S.extend({}, e), o)
                  ;(i || se.get(this, 'finish')) && t.stop(!0)
                }
              return (a.finish = a), i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function (e, t, n) {
              var r = function (e) {
                var t = e.stop
                delete e.stop, t(n)
              }
              return (
                'string' != typeof e && ((n = t), (t = e), (e = void 0)),
                t && this.queue(e || 'fx', []),
                this.each(function () {
                  var t = !0,
                    i = null != e && e + 'queueHooks',
                    o = S.timers,
                    a = se.get(this)
                  if (i) a[i] && a[i].stop && r(a[i])
                  else for (i in a) a[i] && a[i].stop && gt.test(i) && r(a[i])
                  for (i = o.length; i--; )
                    o[i].elem !== this ||
                      (null != e && o[i].queue !== e) ||
                      (o[i].anim.stop(n), (t = !1), o.splice(i, 1))
                  ;(!t && n) || S.dequeue(this, e)
                })
              )
            },
            finish: function (e) {
              return (
                !1 !== e && (e = e || 'fx'),
                this.each(function () {
                  var t,
                    n = se.get(this),
                    r = n[e + 'queue'],
                    i = n[e + 'queueHooks'],
                    o = S.timers,
                    a = r ? r.length : 0
                  for (
                    n.finish = !0,
                      S.queue(this, e, []),
                      i && i.stop && i.stop.call(this, !0),
                      t = o.length;
                    t--;

                  )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1))
                  for (t = 0; t < a; t++) r[t] && r[t].finish && r[t].finish.call(this)
                  delete n.finish
                })
              )
            }
          }),
          S.each(['toggle', 'show', 'hide'], function (e, t) {
            var n = S.fn[t]
            S.fn[t] = function (e, r, i) {
              return null == e || 'boolean' == typeof e
                ? n.apply(this, arguments)
                : this.animate(mt(t, !0), e, r, i)
            }
          }),
          S.each(
            {
              slideDown: mt('show'),
              slideUp: mt('hide'),
              slideToggle: mt('toggle'),
              fadeIn: { opacity: 'show' },
              fadeOut: { opacity: 'hide' },
              fadeToggle: { opacity: 'toggle' }
            },
            function (e, t) {
              S.fn[e] = function (e, n, r) {
                return this.animate(t, e, n, r)
              }
            }
          ),
          (S.timers = []),
          (S.fx.tick = function () {
            var e,
              t = 0,
              n = S.timers
            for (pt = Date.now(); t < n.length; t++) (e = n[t])() || n[t] !== e || n.splice(t--, 1)
            n.length || S.fx.stop(), (pt = void 0)
          }),
          (S.fx.timer = function (e) {
            S.timers.push(e), S.fx.start()
          }),
          (S.fx.interval = 13),
          (S.fx.start = function () {
            dt || ((dt = !0), vt())
          }),
          (S.fx.stop = function () {
            dt = null
          }),
          (S.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
          (S.fn.delay = function (e, t) {
            return (
              (e = (S.fx && S.fx.speeds[e]) || e),
              (t = t || 'fx'),
              this.queue(t, function (t, n) {
                var i = r.setTimeout(t, e)
                n.stop = function () {
                  r.clearTimeout(i)
                }
              })
            )
          }),
          (function () {
            var e = x.createElement('input'),
              t = x.createElement('select').appendChild(x.createElement('option'))
            ;(e.type = 'checkbox'),
              (v.checkOn = '' !== e.value),
              (v.optSelected = t.selected),
              ((e = x.createElement('input')).value = 't'),
              (e.type = 'radio'),
              (v.radioValue = 't' === e.value)
          })()
        var wt,
          Tt = S.expr.attrHandle
        S.fn.extend({
          attr: function (e, t) {
            return ee(this, S.attr, e, t, arguments.length > 1)
          },
          removeAttr: function (e) {
            return this.each(function () {
              S.removeAttr(this, e)
            })
          }
        }),
          S.extend({
            attr: function (e, t, n) {
              var r,
                i,
                o = e.nodeType
              if (3 !== o && 8 !== o && 2 !== o)
                return void 0 === e.getAttribute
                  ? S.prop(e, t, n)
                  : ((1 === o && S.isXMLDoc(e)) ||
                      (i =
                        S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? wt : void 0)),
                    void 0 !== n
                      ? null === n
                        ? void S.removeAttr(e, t)
                        : i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                          ? r
                          : (e.setAttribute(t, n + ''), n)
                      : i && 'get' in i && null !== (r = i.get(e, t))
                        ? r
                        : null == (r = S.find.attr(e, t))
                          ? void 0
                          : r)
            },
            attrHooks: {
              type: {
                set: function (e, t) {
                  if (!v.radioValue && 'radio' === t && j(e, 'input')) {
                    var n = e.value
                    return e.setAttribute('type', t), n && (e.value = n), t
                  }
                }
              }
            },
            removeAttr: function (e, t) {
              var n,
                r = 0,
                i = t && t.match(V)
              if (i && 1 === e.nodeType) for (; (n = i[r++]); ) e.removeAttribute(n)
            }
          }),
          (wt = {
            set: function (e, t, n) {
              return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n), n
            }
          }),
          S.each(S.expr.match.bool.source.match(/\w+/g), function (e, t) {
            var n = Tt[t] || S.find.attr
            Tt[t] = function (e, t, r) {
              var i,
                o,
                a = t.toLowerCase()
              return (
                r || ((o = Tt[a]), (Tt[a] = i), (i = null != n(e, t, r) ? a : null), (Tt[a] = o)), i
              )
            }
          })
        var Ct = /^(?:input|select|textarea|button)$/i,
          kt = /^(?:a|area)$/i
        function St(e) {
          return (e.match(V) || []).join(' ')
        }
        function Et(e) {
          return (e.getAttribute && e.getAttribute('class')) || ''
        }
        function jt(e) {
          return Array.isArray(e) ? e : ('string' == typeof e && e.match(V)) || []
        }
        S.fn.extend({
          prop: function (e, t) {
            return ee(this, S.prop, e, t, arguments.length > 1)
          },
          removeProp: function (e) {
            return this.each(function () {
              delete this[S.propFix[e] || e]
            })
          }
        }),
          S.extend({
            prop: function (e, t, n) {
              var r,
                i,
                o = e.nodeType
              if (3 !== o && 8 !== o && 2 !== o)
                return (
                  (1 === o && S.isXMLDoc(e)) || ((t = S.propFix[t] || t), (i = S.propHooks[t])),
                  void 0 !== n
                    ? i && 'set' in i && void 0 !== (r = i.set(e, n, t))
                      ? r
                      : (e[t] = n)
                    : i && 'get' in i && null !== (r = i.get(e, t))
                      ? r
                      : e[t]
                )
            },
            propHooks: {
              tabIndex: {
                get: function (e) {
                  var t = S.find.attr(e, 'tabindex')
                  return t
                    ? parseInt(t, 10)
                    : Ct.test(e.nodeName) || (kt.test(e.nodeName) && e.href)
                      ? 0
                      : -1
                }
              }
            },
            propFix: { for: 'htmlFor', class: 'className' }
          }),
          v.optSelected ||
            (S.propHooks.selected = {
              get: function (e) {
                var t = e.parentNode
                return t && t.parentNode && t.parentNode.selectedIndex, null
              },
              set: function (e) {
                var t = e.parentNode
                t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex)
              }
            }),
          S.each(
            [
              'tabIndex',
              'readOnly',
              'maxLength',
              'cellSpacing',
              'cellPadding',
              'rowSpan',
              'colSpan',
              'useMap',
              'frameBorder',
              'contentEditable'
            ],
            function () {
              S.propFix[this.toLowerCase()] = this
            }
          ),
          S.fn.extend({
            addClass: function (e) {
              var t, n, r, i, o, a
              return y(e)
                ? this.each(function (t) {
                    S(this).addClass(e.call(this, t, Et(this)))
                  })
                : (t = jt(e)).length
                  ? this.each(function () {
                      if (((r = Et(this)), (n = 1 === this.nodeType && ' ' + St(r) + ' '))) {
                        for (o = 0; o < t.length; o++)
                          (i = t[o]), n.indexOf(' ' + i + ' ') < 0 && (n += i + ' ')
                        ;(a = St(n)), r !== a && this.setAttribute('class', a)
                      }
                    })
                  : this
            },
            removeClass: function (e) {
              var t, n, r, i, o, a
              return y(e)
                ? this.each(function (t) {
                    S(this).removeClass(e.call(this, t, Et(this)))
                  })
                : arguments.length
                  ? (t = jt(e)).length
                    ? this.each(function () {
                        if (((r = Et(this)), (n = 1 === this.nodeType && ' ' + St(r) + ' '))) {
                          for (o = 0; o < t.length; o++)
                            for (i = t[o]; n.indexOf(' ' + i + ' ') > -1; )
                              n = n.replace(' ' + i + ' ', ' ')
                          ;(a = St(n)), r !== a && this.setAttribute('class', a)
                        }
                      })
                    : this
                  : this.attr('class', '')
            },
            toggleClass: function (e, t) {
              var n,
                r,
                i,
                o,
                a = typeof e,
                s = 'string' === a || Array.isArray(e)
              return y(e)
                ? this.each(function (n) {
                    S(this).toggleClass(e.call(this, n, Et(this), t), t)
                  })
                : 'boolean' == typeof t && s
                  ? t
                    ? this.addClass(e)
                    : this.removeClass(e)
                  : ((n = jt(e)),
                    this.each(function () {
                      if (s)
                        for (o = S(this), i = 0; i < n.length; i++)
                          (r = n[i]), o.hasClass(r) ? o.removeClass(r) : o.addClass(r)
                      else
                        (void 0 !== e && 'boolean' !== a) ||
                          ((r = Et(this)) && se.set(this, '__className__', r),
                          this.setAttribute &&
                            this.setAttribute(
                              'class',
                              r || !1 === e ? '' : se.get(this, '__className__') || ''
                            ))
                    }))
            },
            hasClass: function (e) {
              var t,
                n,
                r = 0
              for (t = ' ' + e + ' '; (n = this[r++]); )
                if (1 === n.nodeType && (' ' + St(Et(n)) + ' ').indexOf(t) > -1) return !0
              return !1
            }
          })
        var At = /\r/g
        S.fn.extend({
          val: function (e) {
            var t,
              n,
              r,
              i = this[0]
            return arguments.length
              ? ((r = y(e)),
                this.each(function (n) {
                  var i
                  1 === this.nodeType &&
                    (null == (i = r ? e.call(this, n, S(this).val()) : e)
                      ? (i = '')
                      : 'number' == typeof i
                        ? (i += '')
                        : Array.isArray(i) &&
                          (i = S.map(i, function (e) {
                            return null == e ? '' : e + ''
                          })),
                    ((t = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) &&
                      'set' in t &&
                      void 0 !== t.set(this, i, 'value')) ||
                      (this.value = i))
                }))
              : i
                ? (t = S.valHooks[i.type] || S.valHooks[i.nodeName.toLowerCase()]) &&
                  'get' in t &&
                  void 0 !== (n = t.get(i, 'value'))
                  ? n
                  : 'string' == typeof (n = i.value)
                    ? n.replace(At, '')
                    : null == n
                      ? ''
                      : n
                : void 0
          }
        }),
          S.extend({
            valHooks: {
              option: {
                get: function (e) {
                  var t = S.find.attr(e, 'value')
                  return null != t ? t : St(S.text(e))
                }
              },
              select: {
                get: function (e) {
                  var t,
                    n,
                    r,
                    i = e.options,
                    o = e.selectedIndex,
                    a = 'select-one' === e.type,
                    s = a ? null : [],
                    u = a ? o + 1 : i.length
                  for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                    if (
                      ((n = i[r]).selected || r === o) &&
                      !n.disabled &&
                      (!n.parentNode.disabled || !j(n.parentNode, 'optgroup'))
                    ) {
                      if (((t = S(n).val()), a)) return t
                      s.push(t)
                    }
                  return s
                },
                set: function (e, t) {
                  for (var n, r, i = e.options, o = S.makeArray(t), a = i.length; a--; )
                    ((r = i[a]).selected = S.inArray(S.valHooks.option.get(r), o) > -1) && (n = !0)
                  return n || (e.selectedIndex = -1), o
                }
              }
            }
          }),
          S.each(['radio', 'checkbox'], function () {
            ;(S.valHooks[this] = {
              set: function (e, t) {
                if (Array.isArray(t)) return (e.checked = S.inArray(S(e).val(), t) > -1)
              }
            }),
              v.checkOn ||
                (S.valHooks[this].get = function (e) {
                  return null === e.getAttribute('value') ? 'on' : e.value
                })
          })
        var Dt = r.location,
          Nt = { guid: Date.now() },
          qt = /\?/
        S.parseXML = function (e) {
          var t, n
          if (!e || 'string' != typeof e) return null
          try {
            t = new r.DOMParser().parseFromString(e, 'text/xml')
          } catch (e) {}
          return (
            (n = t && t.getElementsByTagName('parsererror')[0]),
            (t && !n) ||
              S.error(
                'Invalid XML: ' +
                  (n
                    ? S.map(n.childNodes, function (e) {
                        return e.textContent
                      }).join('\n')
                    : e)
              ),
            t
          )
        }
        var Lt = /^(?:focusinfocus|focusoutblur)$/,
          Ht = function (e) {
            e.stopPropagation()
          }
        S.extend(S.event, {
          trigger: function (e, t, n, i) {
            var o,
              a,
              s,
              u,
              l,
              c,
              f,
              p,
              h = [n || x],
              g = d.call(e, 'type') ? e.type : e,
              v = d.call(e, 'namespace') ? e.namespace.split('.') : []
            if (
              ((a = p = s = n = n || x),
              3 !== n.nodeType &&
                8 !== n.nodeType &&
                !Lt.test(g + S.event.triggered) &&
                (g.indexOf('.') > -1 && ((v = g.split('.')), (g = v.shift()), v.sort()),
                (l = g.indexOf(':') < 0 && 'on' + g),
                ((e = e[S.expando] ? e : new S.Event(g, 'object' == typeof e && e)).isTrigger = i
                  ? 2
                  : 3),
                (e.namespace = v.join('.')),
                (e.rnamespace = e.namespace
                  ? new RegExp('(^|\\.)' + v.join('\\.(?:.*\\.|)') + '(\\.|$)')
                  : null),
                (e.result = void 0),
                e.target || (e.target = n),
                (t = null == t ? [e] : S.makeArray(t, [e])),
                (f = S.event.special[g] || {}),
                i || !f.trigger || !1 !== f.trigger.apply(n, t)))
            ) {
              if (!i && !f.noBubble && !m(n)) {
                for (
                  u = f.delegateType || g, Lt.test(u + g) || (a = a.parentNode);
                  a;
                  a = a.parentNode
                )
                  h.push(a), (s = a)
                s === (n.ownerDocument || x) && h.push(s.defaultView || s.parentWindow || r)
              }
              for (o = 0; (a = h[o++]) && !e.isPropagationStopped(); )
                (p = a),
                  (e.type = o > 1 ? u : f.bindType || g),
                  (c =
                    (se.get(a, 'events') || Object.create(null))[e.type] && se.get(a, 'handle')) &&
                    c.apply(a, t),
                  (c = l && a[l]) &&
                    c.apply &&
                    oe(a) &&
                    ((e.result = c.apply(a, t)), !1 === e.result && e.preventDefault())
              return (
                (e.type = g),
                i ||
                  e.isDefaultPrevented() ||
                  (f._default && !1 !== f._default.apply(h.pop(), t)) ||
                  !oe(n) ||
                  (l &&
                    y(n[g]) &&
                    !m(n) &&
                    ((s = n[l]) && (n[l] = null),
                    (S.event.triggered = g),
                    e.isPropagationStopped() && p.addEventListener(g, Ht),
                    n[g](),
                    e.isPropagationStopped() && p.removeEventListener(g, Ht),
                    (S.event.triggered = void 0),
                    s && (n[l] = s))),
                e.result
              )
            }
          },
          simulate: function (e, t, n) {
            var r = S.extend(new S.Event(), n, { type: e, isSimulated: !0 })
            S.event.trigger(r, null, t)
          }
        }),
          S.fn.extend({
            trigger: function (e, t) {
              return this.each(function () {
                S.event.trigger(e, t, this)
              })
            },
            triggerHandler: function (e, t) {
              var n = this[0]
              if (n) return S.event.trigger(e, t, n, !0)
            }
          })
        var Ot = /\[\]$/,
          Pt = /\r?\n/g,
          Mt = /^(?:submit|button|image|reset|file)$/i,
          Rt = /^(?:input|select|textarea|keygen)/i
        function It(e, t, n, r) {
          var i
          if (Array.isArray(t))
            S.each(t, function (t, i) {
              n || Ot.test(e)
                ? r(e, i)
                : It(e + '[' + ('object' == typeof i && null != i ? t : '') + ']', i, n, r)
            })
          else if (n || 'object' !== T(t)) r(e, t)
          else for (i in t) It(e + '[' + i + ']', t[i], n, r)
        }
        ;(S.param = function (e, t) {
          var n,
            r = [],
            i = function (e, t) {
              var n = y(t) ? t() : t
              r[r.length] = encodeURIComponent(e) + '=' + encodeURIComponent(null == n ? '' : n)
            }
          if (null == e) return ''
          if (Array.isArray(e) || (e.jquery && !S.isPlainObject(e)))
            S.each(e, function () {
              i(this.name, this.value)
            })
          else for (n in e) It(n, e[n], t, i)
          return r.join('&')
        }),
          S.fn.extend({
            serialize: function () {
              return S.param(this.serializeArray())
            },
            serializeArray: function () {
              return this.map(function () {
                var e = S.prop(this, 'elements')
                return e ? S.makeArray(e) : this
              })
                .filter(function () {
                  var e = this.type
                  return (
                    this.name &&
                    !S(this).is(':disabled') &&
                    Rt.test(this.nodeName) &&
                    !Mt.test(e) &&
                    (this.checked || !Se.test(e))
                  )
                })
                .map(function (e, t) {
                  var n = S(this).val()
                  return null == n
                    ? null
                    : Array.isArray(n)
                      ? S.map(n, function (e) {
                          return { name: t.name, value: e.replace(Pt, '\r\n') }
                        })
                      : { name: t.name, value: n.replace(Pt, '\r\n') }
                })
                .get()
            }
          })
        var Wt = /%20/g,
          Ft = /#.*$/,
          $t = /([?&])_=[^&]*/,
          _t = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          Bt = /^(?:GET|HEAD)$/,
          zt = /^\/\//,
          Xt = {},
          Ut = {},
          Vt = '*/'.concat('*'),
          Gt = x.createElement('a')
        function Yt(e) {
          return function (t, n) {
            'string' != typeof t && ((n = t), (t = '*'))
            var r,
              i = 0,
              o = t.toLowerCase().match(V) || []
            if (y(n))
              for (; (r = o[i++]); )
                '+' === r[0]
                  ? ((r = r.slice(1) || '*'), (e[r] = e[r] || []).unshift(n))
                  : (e[r] = e[r] || []).push(n)
          }
        }
        function Qt(e, t, n, r) {
          var i = {},
            o = e === Ut
          function a(s) {
            var u
            return (
              (i[s] = !0),
              S.each(e[s] || [], function (e, s) {
                var l = s(t, n, r)
                return 'string' != typeof l || o || i[l]
                  ? o
                    ? !(u = l)
                    : void 0
                  : (t.dataTypes.unshift(l), a(l), !1)
              }),
              u
            )
          }
          return a(t.dataTypes[0]) || (!i['*'] && a('*'))
        }
        function Jt(e, t) {
          var n,
            r,
            i = S.ajaxSettings.flatOptions || {}
          for (n in t) void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n])
          return r && S.extend(!0, e, r), e
        }
        ;(Gt.href = Dt.href),
          S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
              url: Dt.href,
              type: 'GET',
              isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                Dt.protocol
              ),
              global: !0,
              processData: !0,
              async: !0,
              contentType: 'application/x-www-form-urlencoded; charset=UTF-8',
              accepts: {
                '*': Vt,
                text: 'text/plain',
                html: 'text/html',
                xml: 'application/xml, text/xml',
                json: 'application/json, text/javascript'
              },
              contents: { xml: /\bxml\b/, html: /\bhtml/, json: /\bjson\b/ },
              responseFields: { xml: 'responseXML', text: 'responseText', json: 'responseJSON' },
              converters: {
                '* text': String,
                'text html': !0,
                'text json': JSON.parse,
                'text xml': S.parseXML
              },
              flatOptions: { url: !0, context: !0 }
            },
            ajaxSetup: function (e, t) {
              return t ? Jt(Jt(e, S.ajaxSettings), t) : Jt(S.ajaxSettings, e)
            },
            ajaxPrefilter: Yt(Xt),
            ajaxTransport: Yt(Ut),
            ajax: function (e, t) {
              'object' == typeof e && ((t = e), (e = void 0)), (t = t || {})
              var n,
                i,
                o,
                a,
                s,
                u,
                l,
                c,
                f,
                p,
                d = S.ajaxSetup({}, t),
                h = d.context || d,
                g = d.context && (h.nodeType || h.jquery) ? S(h) : S.event,
                v = S.Deferred(),
                y = S.Callbacks('once memory'),
                m = d.statusCode || {},
                b = {},
                w = {},
                T = 'canceled',
                C = {
                  readyState: 0,
                  getResponseHeader: function (e) {
                    var t
                    if (l) {
                      if (!a)
                        for (a = {}; (t = _t.exec(o)); )
                          a[t[1].toLowerCase() + ' '] = (a[t[1].toLowerCase() + ' '] || []).concat(
                            t[2]
                          )
                      t = a[e.toLowerCase() + ' ']
                    }
                    return null == t ? null : t.join(', ')
                  },
                  getAllResponseHeaders: function () {
                    return l ? o : null
                  },
                  setRequestHeader: function (e, t) {
                    return (
                      null == l && ((e = w[e.toLowerCase()] = w[e.toLowerCase()] || e), (b[e] = t)),
                      this
                    )
                  },
                  overrideMimeType: function (e) {
                    return null == l && (d.mimeType = e), this
                  },
                  statusCode: function (e) {
                    var t
                    if (e)
                      if (l) C.always(e[C.status])
                      else for (t in e) m[t] = [m[t], e[t]]
                    return this
                  },
                  abort: function (e) {
                    var t = e || T
                    return n && n.abort(t), k(0, t), this
                  }
                }
              if (
                (v.promise(C),
                (d.url = ((e || d.url || Dt.href) + '').replace(zt, Dt.protocol + '//')),
                (d.type = t.method || t.type || d.method || d.type),
                (d.dataTypes = (d.dataType || '*').toLowerCase().match(V) || ['']),
                null == d.crossDomain)
              ) {
                u = x.createElement('a')
                try {
                  ;(u.href = d.url),
                    (u.href = u.href),
                    (d.crossDomain = Gt.protocol + '//' + Gt.host != u.protocol + '//' + u.host)
                } catch (e) {
                  d.crossDomain = !0
                }
              }
              if (
                (d.data &&
                  d.processData &&
                  'string' != typeof d.data &&
                  (d.data = S.param(d.data, d.traditional)),
                Qt(Xt, d, t, C),
                l)
              )
                return C
              for (f in ((c = S.event && d.global) &&
                0 == S.active++ &&
                S.event.trigger('ajaxStart'),
              (d.type = d.type.toUpperCase()),
              (d.hasContent = !Bt.test(d.type)),
              (i = d.url.replace(Ft, '')),
              d.hasContent
                ? d.data &&
                  d.processData &&
                  0 === (d.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                  (d.data = d.data.replace(Wt, '+'))
                : ((p = d.url.slice(i.length)),
                  d.data &&
                    (d.processData || 'string' == typeof d.data) &&
                    ((i += (qt.test(i) ? '&' : '?') + d.data), delete d.data),
                  !1 === d.cache &&
                    ((i = i.replace($t, '$1')),
                    (p = (qt.test(i) ? '&' : '?') + '_=' + Nt.guid++ + p)),
                  (d.url = i + p)),
              d.ifModified &&
                (S.lastModified[i] && C.setRequestHeader('If-Modified-Since', S.lastModified[i]),
                S.etag[i] && C.setRequestHeader('If-None-Match', S.etag[i])),
              ((d.data && d.hasContent && !1 !== d.contentType) || t.contentType) &&
                C.setRequestHeader('Content-Type', d.contentType),
              C.setRequestHeader(
                'Accept',
                d.dataTypes[0] && d.accepts[d.dataTypes[0]]
                  ? d.accepts[d.dataTypes[0]] +
                      ('*' !== d.dataTypes[0] ? ', ' + Vt + '; q=0.01' : '')
                  : d.accepts['*']
              ),
              d.headers))
                C.setRequestHeader(f, d.headers[f])
              if (d.beforeSend && (!1 === d.beforeSend.call(h, C, d) || l)) return C.abort()
              if (
                ((T = 'abort'),
                y.add(d.complete),
                C.done(d.success),
                C.fail(d.error),
                (n = Qt(Ut, d, t, C)))
              ) {
                if (((C.readyState = 1), c && g.trigger('ajaxSend', [C, d]), l)) return C
                d.async &&
                  d.timeout > 0 &&
                  (s = r.setTimeout(function () {
                    C.abort('timeout')
                  }, d.timeout))
                try {
                  ;(l = !1), n.send(b, k)
                } catch (e) {
                  if (l) throw e
                  k(-1, e)
                }
              } else k(-1, 'No Transport')
              function k(e, t, a, u) {
                var f,
                  p,
                  x,
                  b,
                  w,
                  T = t
                l ||
                  ((l = !0),
                  s && r.clearTimeout(s),
                  (n = void 0),
                  (o = u || ''),
                  (C.readyState = e > 0 ? 4 : 0),
                  (f = (e >= 200 && e < 300) || 304 === e),
                  a &&
                    (b = (function (e, t, n) {
                      for (var r, i, o, a, s = e.contents, u = e.dataTypes; '*' === u[0]; )
                        u.shift(),
                          void 0 === r && (r = e.mimeType || t.getResponseHeader('Content-Type'))
                      if (r)
                        for (i in s)
                          if (s[i] && s[i].test(r)) {
                            u.unshift(i)
                            break
                          }
                      if (u[0] in n) o = u[0]
                      else {
                        for (i in n) {
                          if (!u[0] || e.converters[i + ' ' + u[0]]) {
                            o = i
                            break
                          }
                          a || (a = i)
                        }
                        o = o || a
                      }
                      if (o) return o !== u[0] && u.unshift(o), n[o]
                    })(d, C, a)),
                  !f &&
                    S.inArray('script', d.dataTypes) > -1 &&
                    S.inArray('json', d.dataTypes) < 0 &&
                    (d.converters['text script'] = function () {}),
                  (b = (function (e, t, n, r) {
                    var i,
                      o,
                      a,
                      s,
                      u,
                      l = {},
                      c = e.dataTypes.slice()
                    if (c[1]) for (a in e.converters) l[a.toLowerCase()] = e.converters[a]
                    for (o = c.shift(); o; )
                      if (
                        (e.responseFields[o] && (n[e.responseFields[o]] = t),
                        !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                        (u = o),
                        (o = c.shift()))
                      )
                        if ('*' === o) o = u
                        else if ('*' !== u && u !== o) {
                          if (!(a = l[u + ' ' + o] || l['* ' + o]))
                            for (i in l)
                              if (
                                (s = i.split(' '))[1] === o &&
                                (a = l[u + ' ' + s[0]] || l['* ' + s[0]])
                              ) {
                                !0 === a ? (a = l[i]) : !0 !== l[i] && ((o = s[0]), c.unshift(s[1]))
                                break
                              }
                          if (!0 !== a)
                            if (a && e.throws) t = a(t)
                            else
                              try {
                                t = a(t)
                              } catch (e) {
                                return {
                                  state: 'parsererror',
                                  error: a ? e : 'No conversion from ' + u + ' to ' + o
                                }
                              }
                        }
                    return { state: 'success', data: t }
                  })(d, b, C, f)),
                  f
                    ? (d.ifModified &&
                        ((w = C.getResponseHeader('Last-Modified')) && (S.lastModified[i] = w),
                        (w = C.getResponseHeader('etag')) && (S.etag[i] = w)),
                      204 === e || 'HEAD' === d.type
                        ? (T = 'nocontent')
                        : 304 === e
                          ? (T = 'notmodified')
                          : ((T = b.state), (p = b.data), (f = !(x = b.error))))
                    : ((x = T), (!e && T) || ((T = 'error'), e < 0 && (e = 0))),
                  (C.status = e),
                  (C.statusText = (t || T) + ''),
                  f ? v.resolveWith(h, [p, T, C]) : v.rejectWith(h, [C, T, x]),
                  C.statusCode(m),
                  (m = void 0),
                  c && g.trigger(f ? 'ajaxSuccess' : 'ajaxError', [C, d, f ? p : x]),
                  y.fireWith(h, [C, T]),
                  c &&
                    (g.trigger('ajaxComplete', [C, d]), --S.active || S.event.trigger('ajaxStop')))
              }
              return C
            },
            getJSON: function (e, t, n) {
              return S.get(e, t, n, 'json')
            },
            getScript: function (e, t) {
              return S.get(e, void 0, t, 'script')
            }
          }),
          S.each(['get', 'post'], function (e, t) {
            S[t] = function (e, n, r, i) {
              return (
                y(n) && ((i = i || r), (r = n), (n = void 0)),
                S.ajax(
                  S.extend(
                    { url: e, type: t, dataType: i, data: n, success: r },
                    S.isPlainObject(e) && e
                  )
                )
              )
            }
          }),
          S.ajaxPrefilter(function (e) {
            var t
            for (t in e.headers)
              'content-type' === t.toLowerCase() && (e.contentType = e.headers[t] || '')
          }),
          (S._evalUrl = function (e, t, n) {
            return S.ajax({
              url: e,
              type: 'GET',
              dataType: 'script',
              cache: !0,
              async: !1,
              global: !1,
              converters: { 'text script': function () {} },
              dataFilter: function (e) {
                S.globalEval(e, t, n)
              }
            })
          }),
          S.fn.extend({
            wrapAll: function (e) {
              var t
              return (
                this[0] &&
                  (y(e) && (e = e.call(this[0])),
                  (t = S(e, this[0].ownerDocument).eq(0).clone(!0)),
                  this[0].parentNode && t.insertBefore(this[0]),
                  t
                    .map(function () {
                      for (var e = this; e.firstElementChild; ) e = e.firstElementChild
                      return e
                    })
                    .append(this)),
                this
              )
            },
            wrapInner: function (e) {
              return y(e)
                ? this.each(function (t) {
                    S(this).wrapInner(e.call(this, t))
                  })
                : this.each(function () {
                    var t = S(this),
                      n = t.contents()
                    n.length ? n.wrapAll(e) : t.append(e)
                  })
            },
            wrap: function (e) {
              var t = y(e)
              return this.each(function (n) {
                S(this).wrapAll(t ? e.call(this, n) : e)
              })
            },
            unwrap: function (e) {
              return (
                this.parent(e)
                  .not('body')
                  .each(function () {
                    S(this).replaceWith(this.childNodes)
                  }),
                this
              )
            }
          }),
          (S.expr.pseudos.hidden = function (e) {
            return !S.expr.pseudos.visible(e)
          }),
          (S.expr.pseudos.visible = function (e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
          }),
          (S.ajaxSettings.xhr = function () {
            try {
              return new r.XMLHttpRequest()
            } catch (e) {}
          })
        var Kt = { 0: 200, 1223: 204 },
          Zt = S.ajaxSettings.xhr()
        ;(v.cors = !!Zt && 'withCredentials' in Zt),
          (v.ajax = Zt = !!Zt),
          S.ajaxTransport(function (e) {
            var t, n
            if (v.cors || (Zt && !e.crossDomain))
              return {
                send: function (i, o) {
                  var a,
                    s = e.xhr()
                  if ((s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields))
                    for (a in e.xhrFields) s[a] = e.xhrFields[a]
                  for (a in (e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType),
                  e.crossDomain ||
                    i['X-Requested-With'] ||
                    (i['X-Requested-With'] = 'XMLHttpRequest'),
                  i))
                    s.setRequestHeader(a, i[a])
                  ;(t = function (e) {
                    return function () {
                      t &&
                        ((t =
                          n =
                          s.onload =
                          s.onerror =
                          s.onabort =
                          s.ontimeout =
                          s.onreadystatechange =
                            null),
                        'abort' === e
                          ? s.abort()
                          : 'error' === e
                            ? 'number' != typeof s.status
                              ? o(0, 'error')
                              : o(s.status, s.statusText)
                            : o(
                                Kt[s.status] || s.status,
                                s.statusText,
                                'text' !== (s.responseType || 'text') ||
                                  'string' != typeof s.responseText
                                  ? { binary: s.response }
                                  : { text: s.responseText },
                                s.getAllResponseHeaders()
                              ))
                    }
                  }),
                    (s.onload = t()),
                    (n = s.onerror = s.ontimeout = t('error')),
                    void 0 !== s.onabort
                      ? (s.onabort = n)
                      : (s.onreadystatechange = function () {
                          4 === s.readyState &&
                            r.setTimeout(function () {
                              t && n()
                            })
                        }),
                    (t = t('abort'))
                  try {
                    s.send((e.hasContent && e.data) || null)
                  } catch (e) {
                    if (t) throw e
                  }
                },
                abort: function () {
                  t && t()
                }
              }
          }),
          S.ajaxPrefilter(function (e) {
            e.crossDomain && (e.contents.script = !1)
          }),
          S.ajaxSetup({
            accepts: {
              script:
                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
            },
            contents: { script: /\b(?:java|ecma)script\b/ },
            converters: {
              'text script': function (e) {
                return S.globalEval(e), e
              }
            }
          }),
          S.ajaxPrefilter('script', function (e) {
            void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = 'GET')
          }),
          S.ajaxTransport('script', function (e) {
            var t, n
            if (e.crossDomain || e.scriptAttrs)
              return {
                send: function (r, i) {
                  ;(t = S('<script>')
                    .attr(e.scriptAttrs || {})
                    .prop({ charset: e.scriptCharset, src: e.url })
                    .on(
                      'load error',
                      (n = function (e) {
                        t.remove(), (n = null), e && i('error' === e.type ? 404 : 200, e.type)
                      })
                    )),
                    x.head.appendChild(t[0])
                },
                abort: function () {
                  n && n()
                }
              }
          })
        var en,
          tn = [],
          nn = /(=)\?(?=&|$)|\?\?/
        S.ajaxSetup({
          jsonp: 'callback',
          jsonpCallback: function () {
            var e = tn.pop() || S.expando + '_' + Nt.guid++
            return (this[e] = !0), e
          }
        }),
          S.ajaxPrefilter('json jsonp', function (e, t, n) {
            var i,
              o,
              a,
              s =
                !1 !== e.jsonp &&
                (nn.test(e.url)
                  ? 'url'
                  : 'string' == typeof e.data &&
                    0 === (e.contentType || '').indexOf('application/x-www-form-urlencoded') &&
                    nn.test(e.data) &&
                    'data')
            if (s || 'jsonp' === e.dataTypes[0])
              return (
                (i = e.jsonpCallback = y(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback),
                s
                  ? (e[s] = e[s].replace(nn, '$1' + i))
                  : !1 !== e.jsonp && (e.url += (qt.test(e.url) ? '&' : '?') + e.jsonp + '=' + i),
                (e.converters['script json'] = function () {
                  return a || S.error(i + ' was not called'), a[0]
                }),
                (e.dataTypes[0] = 'json'),
                (o = r[i]),
                (r[i] = function () {
                  a = arguments
                }),
                n.always(function () {
                  void 0 === o ? S(r).removeProp(i) : (r[i] = o),
                    e[i] && ((e.jsonpCallback = t.jsonpCallback), tn.push(i)),
                    a && y(o) && o(a[0]),
                    (a = o = void 0)
                }),
                'script'
              )
          }),
          (v.createHTMLDocument =
            (((en = x.implementation.createHTMLDocument('').body).innerHTML =
              '<form></form><form></form>'),
            2 === en.childNodes.length)),
          (S.parseHTML = function (e, t, n) {
            return 'string' != typeof e
              ? []
              : ('boolean' == typeof t && ((n = t), (t = !1)),
                t ||
                  (v.createHTMLDocument
                    ? (((r = (t = x.implementation.createHTMLDocument('')).createElement(
                        'base'
                      )).href = x.location.href),
                      t.head.appendChild(r))
                    : (t = x)),
                (o = !n && []),
                (i = F.exec(e))
                  ? [t.createElement(i[1])]
                  : ((i = Le([e], t, o)),
                    o && o.length && S(o).remove(),
                    S.merge([], i.childNodes)))
            var r, i, o
          }),
          (S.fn.load = function (e, t, n) {
            var r,
              i,
              o,
              a = this,
              s = e.indexOf(' ')
            return (
              s > -1 && ((r = St(e.slice(s))), (e = e.slice(0, s))),
              y(t) ? ((n = t), (t = void 0)) : t && 'object' == typeof t && (i = 'POST'),
              a.length > 0 &&
                S.ajax({ url: e, type: i || 'GET', dataType: 'html', data: t })
                  .done(function (e) {
                    ;(o = arguments), a.html(r ? S('<div>').append(S.parseHTML(e)).find(r) : e)
                  })
                  .always(
                    n &&
                      function (e, t) {
                        a.each(function () {
                          n.apply(this, o || [e.responseText, t, e])
                        })
                      }
                  ),
              this
            )
          }),
          (S.expr.pseudos.animated = function (e) {
            return S.grep(S.timers, function (t) {
              return e === t.elem
            }).length
          }),
          (S.offset = {
            setOffset: function (e, t, n) {
              var r,
                i,
                o,
                a,
                s,
                u,
                l = S.css(e, 'position'),
                c = S(e),
                f = {}
              'static' === l && (e.style.position = 'relative'),
                (s = c.offset()),
                (o = S.css(e, 'top')),
                (u = S.css(e, 'left')),
                ('absolute' === l || 'fixed' === l) && (o + u).indexOf('auto') > -1
                  ? ((a = (r = c.position()).top), (i = r.left))
                  : ((a = parseFloat(o) || 0), (i = parseFloat(u) || 0)),
                y(t) && (t = t.call(e, n, S.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                'using' in t ? t.using.call(e, f) : c.css(f)
            }
          }),
          S.fn.extend({
            offset: function (e) {
              if (arguments.length)
                return void 0 === e
                  ? this
                  : this.each(function (t) {
                      S.offset.setOffset(this, e, t)
                    })
              var t,
                n,
                r = this[0]
              return r
                ? r.getClientRects().length
                  ? ((t = r.getBoundingClientRect()),
                    (n = r.ownerDocument.defaultView),
                    { top: t.top + n.pageYOffset, left: t.left + n.pageXOffset })
                  : { top: 0, left: 0 }
                : void 0
            },
            position: function () {
              if (this[0]) {
                var e,
                  t,
                  n,
                  r = this[0],
                  i = { top: 0, left: 0 }
                if ('fixed' === S.css(r, 'position')) t = r.getBoundingClientRect()
                else {
                  for (
                    t = this.offset(), n = r.ownerDocument, e = r.offsetParent || n.documentElement;
                    e &&
                    (e === n.body || e === n.documentElement) &&
                    'static' === S.css(e, 'position');

                  )
                    e = e.parentNode
                  e &&
                    e !== r &&
                    1 === e.nodeType &&
                    (((i = S(e).offset()).top += S.css(e, 'borderTopWidth', !0)),
                    (i.left += S.css(e, 'borderLeftWidth', !0)))
                }
                return {
                  top: t.top - i.top - S.css(r, 'marginTop', !0),
                  left: t.left - i.left - S.css(r, 'marginLeft', !0)
                }
              }
            },
            offsetParent: function () {
              return this.map(function () {
                for (var e = this.offsetParent; e && 'static' === S.css(e, 'position'); )
                  e = e.offsetParent
                return e || ge
              })
            }
          }),
          S.each({ scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' }, function (e, t) {
            var n = 'pageYOffset' === t
            S.fn[e] = function (r) {
              return ee(
                this,
                function (e, r, i) {
                  var o
                  if ((m(e) ? (o = e) : 9 === e.nodeType && (o = e.defaultView), void 0 === i))
                    return o ? o[t] : e[r]
                  o ? o.scrollTo(n ? o.pageXOffset : i, n ? i : o.pageYOffset) : (e[r] = i)
                },
                e,
                r,
                arguments.length
              )
            }
          }),
          S.each(['top', 'left'], function (e, t) {
            S.cssHooks[t] = et(v.pixelPosition, function (e, n) {
              if (n) return (n = Ze(e, t)), Ge.test(n) ? S(e).position()[t] + 'px' : n
            })
          }),
          S.each({ Height: 'height', Width: 'width' }, function (e, t) {
            S.each({ padding: 'inner' + e, content: t, '': 'outer' + e }, function (n, r) {
              S.fn[r] = function (i, o) {
                var a = arguments.length && (n || 'boolean' != typeof i),
                  s = n || (!0 === i || !0 === o ? 'margin' : 'border')
                return ee(
                  this,
                  function (t, n, i) {
                    var o
                    return m(t)
                      ? 0 === r.indexOf('outer')
                        ? t['inner' + e]
                        : t.document.documentElement['client' + e]
                      : 9 === t.nodeType
                        ? ((o = t.documentElement),
                          Math.max(
                            t.body['scroll' + e],
                            o['scroll' + e],
                            t.body['offset' + e],
                            o['offset' + e],
                            o['client' + e]
                          ))
                        : void 0 === i
                          ? S.css(t, n, s)
                          : S.style(t, n, i, s)
                  },
                  t,
                  a ? i : void 0,
                  a
                )
              }
            })
          }),
          S.each(
            ['ajaxStart', 'ajaxStop', 'ajaxComplete', 'ajaxError', 'ajaxSuccess', 'ajaxSend'],
            function (e, t) {
              S.fn[t] = function (e) {
                return this.on(t, e)
              }
            }
          ),
          S.fn.extend({
            bind: function (e, t, n) {
              return this.on(e, null, t, n)
            },
            unbind: function (e, t) {
              return this.off(e, null, t)
            },
            delegate: function (e, t, n, r) {
              return this.on(t, e, n, r)
            },
            undelegate: function (e, t, n) {
              return 1 === arguments.length ? this.off(e, '**') : this.off(t, e || '**', n)
            },
            hover: function (e, t) {
              return this.on('mouseenter', e).on('mouseleave', t || e)
            }
          }),
          S.each(
            'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
              ' '
            ),
            function (e, t) {
              S.fn[t] = function (e, n) {
                return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
              }
            }
          )
        var rn = /^[\s\uFEFF\xA0]+|([^\s\uFEFF\xA0])[\s\uFEFF\xA0]+$/g
        ;(S.proxy = function (e, t) {
          var n, r, i
          if (('string' == typeof t && ((n = e[t]), (t = e), (e = n)), y(e)))
            return (
              (r = s.call(arguments, 2)),
              (i = function () {
                return e.apply(t || this, r.concat(s.call(arguments)))
              }),
              (i.guid = e.guid = e.guid || S.guid++),
              i
            )
        }),
          (S.holdReady = function (e) {
            e ? S.readyWait++ : S.ready(!0)
          }),
          (S.isArray = Array.isArray),
          (S.parseJSON = JSON.parse),
          (S.nodeName = j),
          (S.isFunction = y),
          (S.isWindow = m),
          (S.camelCase = ie),
          (S.type = T),
          (S.now = Date.now),
          (S.isNumeric = function (e) {
            var t = S.type(e)
            return ('number' === t || 'string' === t) && !isNaN(e - parseFloat(e))
          }),
          (S.trim = function (e) {
            return null == e ? '' : (e + '').replace(rn, '$1')
          }),
          void 0 ===
            (n = function () {
              return S
            }.apply(t, [])) || (e.exports = n)
        var on = r.jQuery,
          an = r.$
        return (
          (S.noConflict = function (e) {
            return r.$ === S && (r.$ = an), e && r.jQuery === S && (r.jQuery = on), S
          }),
          void 0 === i && (r.jQuery = r.$ = S),
          S
        )
      })
    }
  }
])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFPb3JDLEVBQUlsb0MsR0FNckJBLENBQ1AiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaHJvbWUtZXh0ZW5zaW9uLXR5cGVzY3JpcHQtc3RhcnRlci8uL25vZGVfbW9kdWxlcy9qcXVlcnkvZGlzdC9qcXVlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYzLjcuMVxuICogaHR0cHM6Ly9qcXVlcnkuY29tL1xuICpcbiAqIENvcHlyaWdodCBPcGVuSlMgRm91bmRhdGlvbiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHBzOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAyMy0wOC0yOFQxMzozN1pcbiAqL1xuKCBmdW5jdGlvbiggZ2xvYmFsLCBmYWN0b3J5ICkge1xuXG5cdFwidXNlIHN0cmljdFwiO1xuXG5cdGlmICggdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgbW9kdWxlLmV4cG9ydHMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHQvLyBGb3IgQ29tbW9uSlMgYW5kIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHdoZXJlIGEgcHJvcGVyIGB3aW5kb3dgXG5cdFx0Ly8gaXMgcHJlc2VudCwgZXhlY3V0ZSB0aGUgZmFjdG9yeSBhbmQgZ2V0IGpRdWVyeS5cblx0XHQvLyBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IGhhdmUgYSBgd2luZG93YCB3aXRoIGEgYGRvY3VtZW50YFxuXHRcdC8vIChzdWNoIGFzIE5vZGUuanMpLCBleHBvc2UgYSBmYWN0b3J5IGFzIG1vZHVsZS5leHBvcnRzLlxuXHRcdC8vIFRoaXMgYWNjZW50dWF0ZXMgdGhlIG5lZWQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhIHJlYWwgYHdpbmRvd2AuXG5cdFx0Ly8gZS5nLiB2YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKSh3aW5kb3cpO1xuXHRcdC8vIFNlZSB0aWNrZXQgdHJhYy0xNDU0OSBmb3IgbW9yZSBpbmZvLlxuXHRcdG1vZHVsZS5leHBvcnRzID0gZ2xvYmFsLmRvY3VtZW50ID9cblx0XHRcdGZhY3RvcnkoIGdsb2JhbCwgdHJ1ZSApIDpcblx0XHRcdGZ1bmN0aW9uKCB3ICkge1xuXHRcdFx0XHRpZiAoICF3LmRvY3VtZW50ICkge1xuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvciggXCJqUXVlcnkgcmVxdWlyZXMgYSB3aW5kb3cgd2l0aCBhIGRvY3VtZW50XCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gZmFjdG9yeSggdyApO1xuXHRcdFx0fTtcblx0fSBlbHNlIHtcblx0XHRmYWN0b3J5KCBnbG9iYWwgKTtcblx0fVxuXG4vLyBQYXNzIHRoaXMgaWYgd2luZG93IGlzIG5vdCBkZWZpbmVkIHlldFxufSApKCB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiID8gd2luZG93IDogdGhpcywgZnVuY3Rpb24oIHdpbmRvdywgbm9HbG9iYWwgKSB7XG5cbi8vIEVkZ2UgPD0gMTIgLSAxMyssIEZpcmVmb3ggPD0xOCAtIDQ1KywgSUUgMTAgLSAxMSwgU2FmYXJpIDUuMSAtIDkrLCBpT1MgNiAtIDkuMVxuLy8gdGhyb3cgZXhjZXB0aW9ucyB3aGVuIG5vbi1zdHJpY3QgY29kZSAoZS5nLiwgQVNQLk5FVCA0LjUpIGFjY2Vzc2VzIHN0cmljdCBtb2RlXG4vLyBhcmd1bWVudHMuY2FsbGVlLmNhbGxlciAodHJhYy0xMzMzNSkuIEJ1dCBhcyBvZiBqUXVlcnkgMy4wICgyMDE2KSwgc3RyaWN0IG1vZGUgc2hvdWxkIGJlIGNvbW1vblxuLy8gZW5vdWdoIHRoYXQgYWxsIHN1Y2ggYXR0ZW1wdHMgYXJlIGd1YXJkZWQgaW4gYSB0cnkgYmxvY2suXG5cInVzZSBzdHJpY3RcIjtcblxudmFyIGFyciA9IFtdO1xuXG52YXIgZ2V0UHJvdG8gPSBPYmplY3QuZ2V0UHJvdG90eXBlT2Y7XG5cbnZhciBzbGljZSA9IGFyci5zbGljZTtcblxudmFyIGZsYXQgPSBhcnIuZmxhdCA/IGZ1bmN0aW9uKCBhcnJheSApIHtcblx0cmV0dXJuIGFyci5mbGF0LmNhbGwoIGFycmF5ICk7XG59IDogZnVuY3Rpb24oIGFycmF5ICkge1xuXHRyZXR1cm4gYXJyLmNvbmNhdC5hcHBseSggW10sIGFycmF5ICk7XG59O1xuXG5cbnZhciBwdXNoID0gYXJyLnB1c2g7XG5cbnZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG5cbnZhciBjbGFzczJ0eXBlID0ge307XG5cbnZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG5cbnZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgZm5Ub1N0cmluZyA9IGhhc093bi50b1N0cmluZztcblxudmFyIE9iamVjdEZ1bmN0aW9uU3RyaW5nID0gZm5Ub1N0cmluZy5jYWxsKCBPYmplY3QgKTtcblxudmFyIHN1cHBvcnQgPSB7fTtcblxudmFyIGlzRnVuY3Rpb24gPSBmdW5jdGlvbiBpc0Z1bmN0aW9uKCBvYmogKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD01NywgRmlyZWZveCA8PTUyXG5cdFx0Ly8gSW4gc29tZSBicm93c2VycywgdHlwZW9mIHJldHVybnMgXCJmdW5jdGlvblwiIGZvciBIVE1MIDxvYmplY3Q+IGVsZW1lbnRzXG5cdFx0Ly8gKGkuZS4sIGB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJvYmplY3RcIiApID09PSBcImZ1bmN0aW9uXCJgKS5cblx0XHQvLyBXZSBkb24ndCB3YW50IHRvIGNsYXNzaWZ5ICphbnkqIERPTSBub2RlIGFzIGEgZnVuY3Rpb24uXG5cdFx0Ly8gU3VwcG9ydDogUXRXZWIgPD0zLjguNSwgV2ViS2l0IDw9NTM0LjM0LCB3a2h0bWx0b3BkZiB0b29sIDw9MC4xMi41XG5cdFx0Ly8gUGx1cyBmb3Igb2xkIFdlYktpdCwgdHlwZW9mIHJldHVybnMgXCJmdW5jdGlvblwiIGZvciBIVE1MIGNvbGxlY3Rpb25zXG5cdFx0Ly8gKGUuZy4sIGB0eXBlb2YgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJkaXZcIikgPT09IFwiZnVuY3Rpb25cImApLiAoZ2gtNDc1Nilcblx0XHRyZXR1cm4gdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiICYmIHR5cGVvZiBvYmoubm9kZVR5cGUgIT09IFwibnVtYmVyXCIgJiZcblx0XHRcdHR5cGVvZiBvYmouaXRlbSAhPT0gXCJmdW5jdGlvblwiO1xuXHR9O1xuXG5cbnZhciBpc1dpbmRvdyA9IGZ1bmN0aW9uIGlzV2luZG93KCBvYmogKSB7XG5cdFx0cmV0dXJuIG9iaiAhPSBudWxsICYmIG9iaiA9PT0gb2JqLndpbmRvdztcblx0fTtcblxuXG52YXIgZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQ7XG5cblxuXG5cdHZhciBwcmVzZXJ2ZWRTY3JpcHRBdHRyaWJ1dGVzID0ge1xuXHRcdHR5cGU6IHRydWUsXG5cdFx0c3JjOiB0cnVlLFxuXHRcdG5vbmNlOiB0cnVlLFxuXHRcdG5vTW9kdWxlOiB0cnVlXG5cdH07XG5cblx0ZnVuY3Rpb24gRE9NRXZhbCggY29kZSwgbm9kZSwgZG9jICkge1xuXHRcdGRvYyA9IGRvYyB8fCBkb2N1bWVudDtcblxuXHRcdHZhciBpLCB2YWwsXG5cdFx0XHRzY3JpcHQgPSBkb2MuY3JlYXRlRWxlbWVudCggXCJzY3JpcHRcIiApO1xuXG5cdFx0c2NyaXB0LnRleHQgPSBjb2RlO1xuXHRcdGlmICggbm9kZSApIHtcblx0XHRcdGZvciAoIGkgaW4gcHJlc2VydmVkU2NyaXB0QXR0cmlidXRlcyApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDY0KywgRWRnZSAxOCtcblx0XHRcdFx0Ly8gU29tZSBicm93c2VycyBkb24ndCBzdXBwb3J0IHRoZSBcIm5vbmNlXCIgcHJvcGVydHkgb24gc2NyaXB0cy5cblx0XHRcdFx0Ly8gT24gdGhlIG90aGVyIGhhbmQsIGp1c3QgdXNpbmcgYGdldEF0dHJpYnV0ZWAgaXMgbm90IGVub3VnaCBhc1xuXHRcdFx0XHQvLyB0aGUgYG5vbmNlYCBhdHRyaWJ1dGUgaXMgcmVzZXQgdG8gYW4gZW1wdHkgc3RyaW5nIHdoZW5ldmVyIGl0XG5cdFx0XHRcdC8vIGJlY29tZXMgYnJvd3NpbmctY29udGV4dCBjb25uZWN0ZWQuXG5cdFx0XHRcdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vd2hhdHdnL2h0bWwvaXNzdWVzLzIzNjlcblx0XHRcdFx0Ly8gU2VlIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI25vbmNlLWF0dHJpYnV0ZXNcblx0XHRcdFx0Ly8gVGhlIGBub2RlLmdldEF0dHJpYnV0ZWAgY2hlY2sgd2FzIGFkZGVkIGZvciB0aGUgc2FrZSBvZlxuXHRcdFx0XHQvLyBgalF1ZXJ5Lmdsb2JhbEV2YWxgIHNvIHRoYXQgaXQgY2FuIGZha2UgYSBub25jZS1jb250YWluaW5nIG5vZGVcblx0XHRcdFx0Ly8gdmlhIGFuIG9iamVjdC5cblx0XHRcdFx0dmFsID0gbm9kZVsgaSBdIHx8IG5vZGUuZ2V0QXR0cmlidXRlICYmIG5vZGUuZ2V0QXR0cmlidXRlKCBpICk7XG5cdFx0XHRcdGlmICggdmFsICkge1xuXHRcdFx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoIGksIHZhbCApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGRvYy5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHQgKS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBzY3JpcHQgKTtcblx0fVxuXG5cbmZ1bmN0aW9uIHRvVHlwZSggb2JqICkge1xuXHRpZiAoIG9iaiA9PSBudWxsICkge1xuXHRcdHJldHVybiBvYmogKyBcIlwiO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTIuMyBvbmx5IChmdW5jdGlvbmlzaCBSZWdFeHApXG5cdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0Y2xhc3MydHlwZVsgdG9TdHJpbmcuY2FsbCggb2JqICkgXSB8fCBcIm9iamVjdFwiIDpcblx0XHR0eXBlb2Ygb2JqO1xufVxuLyogZ2xvYmFsIFN5bWJvbCAqL1xuLy8gRGVmaW5pbmcgdGhpcyBnbG9iYWwgaW4gLmVzbGludHJjLmpzb24gd291bGQgY3JlYXRlIGEgZGFuZ2VyIG9mIHVzaW5nIHRoZSBnbG9iYWxcbi8vIHVuZ3VhcmRlZCBpbiBhbm90aGVyIHBsYWNlLCBpdCBzZWVtcyBzYWZlciB0byBkZWZpbmUgZ2xvYmFsIG9ubHkgZm9yIHRoaXMgbW9kdWxlXG5cblxuXG52YXIgdmVyc2lvbiA9IFwiMy43LjFcIixcblxuXHRyaHRtbFN1ZmZpeCA9IC9IVE1MJC9pLFxuXG5cdC8vIERlZmluZSBhIGxvY2FsIGNvcHkgb2YgalF1ZXJ5XG5cdGpRdWVyeSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblxuXHRcdC8vIFRoZSBqUXVlcnkgb2JqZWN0IGlzIGFjdHVhbGx5IGp1c3QgdGhlIGluaXQgY29uc3RydWN0b3IgJ2VuaGFuY2VkJ1xuXHRcdC8vIE5lZWQgaW5pdCBpZiBqUXVlcnkgaXMgY2FsbGVkIChqdXN0IGFsbG93IGVycm9yIHRvIGJlIHRocm93biBpZiBub3QgaW5jbHVkZWQpXG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuZm4uaW5pdCggc2VsZWN0b3IsIGNvbnRleHQgKTtcblx0fTtcblxualF1ZXJ5LmZuID0galF1ZXJ5LnByb3RvdHlwZSA9IHtcblxuXHQvLyBUaGUgY3VycmVudCB2ZXJzaW9uIG9mIGpRdWVyeSBiZWluZyB1c2VkXG5cdGpxdWVyeTogdmVyc2lvbixcblxuXHRjb25zdHJ1Y3RvcjogalF1ZXJ5LFxuXG5cdC8vIFRoZSBkZWZhdWx0IGxlbmd0aCBvZiBhIGpRdWVyeSBvYmplY3QgaXMgMFxuXHRsZW5ndGg6IDAsXG5cblx0dG9BcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNsaWNlLmNhbGwoIHRoaXMgKTtcblx0fSxcblxuXHQvLyBHZXQgdGhlIE50aCBlbGVtZW50IGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0IE9SXG5cdC8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XG5cdGdldDogZnVuY3Rpb24oIG51bSApIHtcblxuXHRcdC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGluIGEgY2xlYW4gYXJyYXlcblx0XHRpZiAoIG51bSA9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHNsaWNlLmNhbGwoIHRoaXMgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4ganVzdCB0aGUgb25lIGVsZW1lbnQgZnJvbSB0aGUgc2V0XG5cdFx0cmV0dXJuIG51bSA8IDAgPyB0aGlzWyBudW0gKyB0aGlzLmxlbmd0aCBdIDogdGhpc1sgbnVtIF07XG5cdH0sXG5cblx0Ly8gVGFrZSBhbiBhcnJheSBvZiBlbGVtZW50cyBhbmQgcHVzaCBpdCBvbnRvIHRoZSBzdGFja1xuXHQvLyAocmV0dXJuaW5nIHRoZSBuZXcgbWF0Y2hlZCBlbGVtZW50IHNldClcblx0cHVzaFN0YWNrOiBmdW5jdGlvbiggZWxlbXMgKSB7XG5cblx0XHQvLyBCdWlsZCBhIG5ldyBqUXVlcnkgbWF0Y2hlZCBlbGVtZW50IHNldFxuXHRcdHZhciByZXQgPSBqUXVlcnkubWVyZ2UoIHRoaXMuY29uc3RydWN0b3IoKSwgZWxlbXMgKTtcblxuXHRcdC8vIEFkZCB0aGUgb2xkIG9iamVjdCBvbnRvIHRoZSBzdGFjayAoYXMgYSByZWZlcmVuY2UpXG5cdFx0cmV0LnByZXZPYmplY3QgPSB0aGlzO1xuXG5cdFx0Ly8gUmV0dXJuIHRoZSBuZXdseS1mb3JtZWQgZWxlbWVudCBzZXRcblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdC8vIEV4ZWN1dGUgYSBjYWxsYmFjayBmb3IgZXZlcnkgZWxlbWVudCBpbiB0aGUgbWF0Y2hlZCBzZXQuXG5cdGVhY2g6IGZ1bmN0aW9uKCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmVhY2goIHRoaXMsIGNhbGxiYWNrICk7XG5cdH0sXG5cblx0bWFwOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkubWFwKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKCBlbGVtLCBpLCBlbGVtICk7XG5cdFx0fSApICk7XG5cdH0sXG5cblx0c2xpY2U6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggc2xpY2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApICk7XG5cdH0sXG5cblx0Zmlyc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAwICk7XG5cdH0sXG5cblx0bGFzdDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXEoIC0xICk7XG5cdH0sXG5cblx0ZXZlbjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkuZ3JlcCggdGhpcywgZnVuY3Rpb24oIF9lbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuICggaSArIDEgKSAlIDI7XG5cdFx0fSApICk7XG5cdH0sXG5cblx0b2RkOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeS5ncmVwKCB0aGlzLCBmdW5jdGlvbiggX2VsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gaSAlIDI7XG5cdFx0fSApICk7XG5cdH0sXG5cblx0ZXE6IGZ1bmN0aW9uKCBpICkge1xuXHRcdHZhciBsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdGogPSAraSArICggaSA8IDAgPyBsZW4gOiAwICk7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqID49IDAgJiYgaiA8IGxlbiA/IFsgdGhpc1sgaiBdIF0gOiBbXSApO1xuXHR9LFxuXG5cdGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucHJldk9iamVjdCB8fCB0aGlzLmNvbnN0cnVjdG9yKCk7XG5cdH0sXG5cblx0Ly8gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuXHQvLyBCZWhhdmVzIGxpa2UgYW4gQXJyYXkncyBtZXRob2QsIG5vdCBsaWtlIGEgalF1ZXJ5IG1ldGhvZC5cblx0cHVzaDogcHVzaCxcblx0c29ydDogYXJyLnNvcnQsXG5cdHNwbGljZTogYXJyLnNwbGljZVxufTtcblxualF1ZXJ5LmV4dGVuZCA9IGpRdWVyeS5mbi5leHRlbmQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sgMCBdIHx8IHt9LFxuXHRcdGkgPSAxLFxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKCB0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXG5cdFx0Ly8gU2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sgaSBdIHx8IHt9O1xuXHRcdGkrKztcblx0fVxuXG5cdC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyAocG9zc2libGUgaW4gZGVlcCBjb3B5KVxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgIWlzRnVuY3Rpb24oIHRhcmdldCApICkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Ly8gRXh0ZW5kIGpRdWVyeSBpdHNlbGYgaWYgb25seSBvbmUgYXJndW1lbnQgaXMgcGFzc2VkXG5cdGlmICggaSA9PT0gbGVuZ3RoICkge1xuXHRcdHRhcmdldCA9IHRoaXM7XG5cdFx0aS0tO1xuXHR9XG5cblx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKCAoIG9wdGlvbnMgPSBhcmd1bWVudHNbIGkgXSApICE9IG51bGwgKSB7XG5cblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbIG5hbWUgXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IE9iamVjdC5wcm90b3R5cGUgcG9sbHV0aW9uXG5cdFx0XHRcdC8vIFByZXZlbnQgbmV2ZXItZW5kaW5nIGxvb3Bcblx0XHRcdFx0aWYgKCBuYW1lID09PSBcIl9fcHJvdG9fX1wiIHx8IHRhcmdldCA9PT0gY29weSApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRpZiAoIGRlZXAgJiYgY29weSAmJiAoIGpRdWVyeS5pc1BsYWluT2JqZWN0KCBjb3B5ICkgfHxcblx0XHRcdFx0XHQoIGNvcHlJc0FycmF5ID0gQXJyYXkuaXNBcnJheSggY29weSApICkgKSApIHtcblx0XHRcdFx0XHRzcmMgPSB0YXJnZXRbIG5hbWUgXTtcblxuXHRcdFx0XHRcdC8vIEVuc3VyZSBwcm9wZXIgdHlwZSBmb3IgdGhlIHNvdXJjZSB2YWx1ZVxuXHRcdFx0XHRcdGlmICggY29weUlzQXJyYXkgJiYgIUFycmF5LmlzQXJyYXkoIHNyYyApICkge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBbXTtcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCAhY29weUlzQXJyYXkgJiYgIWpRdWVyeS5pc1BsYWluT2JqZWN0KCBzcmMgKSApIHtcblx0XHRcdFx0XHRcdGNsb25lID0ge307XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNsb25lID0gc3JjO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXG5cdFx0XHRcdFx0Ly8gTmV2ZXIgbW92ZSBvcmlnaW5hbCBvYmplY3RzLCBjbG9uZSB0aGVtXG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBqUXVlcnkuZXh0ZW5kKCBkZWVwLCBjbG9uZSwgY29weSApO1xuXG5cdFx0XHRcdC8vIERvbid0IGJyaW5nIGluIHVuZGVmaW5lZCB2YWx1ZXNcblx0XHRcdFx0fSBlbHNlIGlmICggY29weSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0gY29weTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgbW9kaWZpZWQgb2JqZWN0XG5cdHJldHVybiB0YXJnZXQ7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0Ly8gVW5pcXVlIGZvciBlYWNoIGNvcHkgb2YgalF1ZXJ5IG9uIHRoZSBwYWdlXG5cdGV4cGFuZG86IFwialF1ZXJ5XCIgKyAoIHZlcnNpb24gKyBNYXRoLnJhbmRvbSgpICkucmVwbGFjZSggL1xcRC9nLCBcIlwiICksXG5cblx0Ly8gQXNzdW1lIGpRdWVyeSBpcyByZWFkeSB3aXRob3V0IHRoZSByZWFkeSBtb2R1bGVcblx0aXNSZWFkeTogdHJ1ZSxcblxuXHRlcnJvcjogZnVuY3Rpb24oIG1zZyApIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIG1zZyApO1xuXHR9LFxuXG5cdG5vb3A6IGZ1bmN0aW9uKCkge30sXG5cblx0aXNQbGFpbk9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgcHJvdG8sIEN0b3I7XG5cblx0XHQvLyBEZXRlY3Qgb2J2aW91cyBuZWdhdGl2ZXNcblx0XHQvLyBVc2UgdG9TdHJpbmcgaW5zdGVhZCBvZiBqUXVlcnkudHlwZSB0byBjYXRjaCBob3N0IG9iamVjdHNcblx0XHRpZiAoICFvYmogfHwgdG9TdHJpbmcuY2FsbCggb2JqICkgIT09IFwiW29iamVjdCBPYmplY3RdXCIgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cHJvdG8gPSBnZXRQcm90byggb2JqICk7XG5cblx0XHQvLyBPYmplY3RzIHdpdGggbm8gcHJvdG90eXBlIChlLmcuLCBgT2JqZWN0LmNyZWF0ZSggbnVsbCApYCkgYXJlIHBsYWluXG5cdFx0aWYgKCAhcHJvdG8gKSB7XG5cdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHR9XG5cblx0XHQvLyBPYmplY3RzIHdpdGggcHJvdG90eXBlIGFyZSBwbGFpbiBpZmYgdGhleSB3ZXJlIGNvbnN0cnVjdGVkIGJ5IGEgZ2xvYmFsIE9iamVjdCBmdW5jdGlvblxuXHRcdEN0b3IgPSBoYXNPd24uY2FsbCggcHJvdG8sIFwiY29uc3RydWN0b3JcIiApICYmIHByb3RvLmNvbnN0cnVjdG9yO1xuXHRcdHJldHVybiB0eXBlb2YgQ3RvciA9PT0gXCJmdW5jdGlvblwiICYmIGZuVG9TdHJpbmcuY2FsbCggQ3RvciApID09PSBPYmplY3RGdW5jdGlvblN0cmluZztcblx0fSxcblxuXHRpc0VtcHR5T2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHZhciBuYW1lO1xuXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0cnVlO1xuXHR9LFxuXG5cdC8vIEV2YWx1YXRlcyBhIHNjcmlwdCBpbiBhIHByb3ZpZGVkIGNvbnRleHQ7IGZhbGxzIGJhY2sgdG8gdGhlIGdsb2JhbCBvbmVcblx0Ly8gaWYgbm90IHNwZWNpZmllZC5cblx0Z2xvYmFsRXZhbDogZnVuY3Rpb24oIGNvZGUsIG9wdGlvbnMsIGRvYyApIHtcblx0XHRET01FdmFsKCBjb2RlLCB7IG5vbmNlOiBvcHRpb25zICYmIG9wdGlvbnMubm9uY2UgfSwgZG9jICk7XG5cdH0sXG5cblx0ZWFjaDogZnVuY3Rpb24oIG9iaiwgY2FsbGJhY2sgKSB7XG5cdFx0dmFyIGxlbmd0aCwgaSA9IDA7XG5cblx0XHRpZiAoIGlzQXJyYXlMaWtlKCBvYmogKSApIHtcblx0XHRcdGxlbmd0aCA9IG9iai5sZW5ndGg7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICggaSBpbiBvYmogKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iajtcblx0fSxcblxuXG5cdC8vIFJldHJpZXZlIHRoZSB0ZXh0IHZhbHVlIG9mIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuXHR0ZXh0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbm9kZSxcblx0XHRcdHJldCA9IFwiXCIsXG5cdFx0XHRpID0gMCxcblx0XHRcdG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdGlmICggIW5vZGVUeXBlICkge1xuXG5cdFx0XHQvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxuXHRcdFx0d2hpbGUgKCAoIG5vZGUgPSBlbGVtWyBpKysgXSApICkge1xuXG5cdFx0XHRcdC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG5cdFx0XHRcdHJldCArPSBqUXVlcnkudGV4dCggbm9kZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIG5vZGVUeXBlID09PSAxIHx8IG5vZGVUeXBlID09PSAxMSApIHtcblx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuXHRcdH1cblx0XHRpZiAoIG5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZG9jdW1lbnRFbGVtZW50LnRleHRDb250ZW50O1xuXHRcdH1cblx0XHRpZiAoIG5vZGVUeXBlID09PSAzIHx8IG5vZGVUeXBlID09PSA0ICkge1xuXHRcdFx0cmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuXHRcdH1cblxuXHRcdC8vIERvIG5vdCBpbmNsdWRlIGNvbW1lbnQgb3IgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2Rlc1xuXG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyByZXN1bHRzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1ha2VBcnJheTogZnVuY3Rpb24oIGFyciwgcmVzdWx0cyApIHtcblx0XHR2YXIgcmV0ID0gcmVzdWx0cyB8fCBbXTtcblxuXHRcdGlmICggYXJyICE9IG51bGwgKSB7XG5cdFx0XHRpZiAoIGlzQXJyYXlMaWtlKCBPYmplY3QoIGFyciApICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggcmV0LFxuXHRcdFx0XHRcdHR5cGVvZiBhcnIgPT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFx0WyBhcnIgXSA6IGFyclxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaC5jYWxsKCByZXQsIGFyciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0aW5BcnJheTogZnVuY3Rpb24oIGVsZW0sIGFyciwgaSApIHtcblx0XHRyZXR1cm4gYXJyID09IG51bGwgPyAtMSA6IGluZGV4T2YuY2FsbCggYXJyLCBlbGVtLCBpICk7XG5cdH0sXG5cblx0aXNYTUxEb2M6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lc3BhY2UgPSBlbGVtICYmIGVsZW0ubmFtZXNwYWNlVVJJLFxuXHRcdFx0ZG9jRWxlbSA9IGVsZW0gJiYgKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdC8vIEFzc3VtZSBIVE1MIHdoZW4gZG9jdW1lbnRFbGVtZW50IGRvZXNuJ3QgeWV0IGV4aXN0LCBzdWNoIGFzIGluc2lkZVxuXHRcdC8vIGRvY3VtZW50IGZyYWdtZW50cy5cblx0XHRyZXR1cm4gIXJodG1sU3VmZml4LnRlc3QoIG5hbWVzcGFjZSB8fCBkb2NFbGVtICYmIGRvY0VsZW0ubm9kZU5hbWUgfHwgXCJIVE1MXCIgKTtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIG9ubHksIFBoYW50b21KUyAxIG9ubHlcblx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRtZXJnZTogZnVuY3Rpb24oIGZpcnN0LCBzZWNvbmQgKSB7XG5cdFx0dmFyIGxlbiA9ICtzZWNvbmQubGVuZ3RoLFxuXHRcdFx0aiA9IDAsXG5cdFx0XHRpID0gZmlyc3QubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRmaXJzdFsgaSsrIF0gPSBzZWNvbmRbIGogXTtcblx0XHR9XG5cblx0XHRmaXJzdC5sZW5ndGggPSBpO1xuXG5cdFx0cmV0dXJuIGZpcnN0O1xuXHR9LFxuXG5cdGdyZXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGludmVydCApIHtcblx0XHR2YXIgY2FsbGJhY2tJbnZlcnNlLFxuXHRcdFx0bWF0Y2hlcyA9IFtdLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsZW5ndGggPSBlbGVtcy5sZW5ndGgsXG5cdFx0XHRjYWxsYmFja0V4cGVjdCA9ICFpbnZlcnQ7XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgb25seSBzYXZpbmcgdGhlIGl0ZW1zXG5cdFx0Ly8gdGhhdCBwYXNzIHRoZSB2YWxpZGF0b3IgZnVuY3Rpb25cblx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdGNhbGxiYWNrSW52ZXJzZSA9ICFjYWxsYmFjayggZWxlbXNbIGkgXSwgaSApO1xuXHRcdFx0aWYgKCBjYWxsYmFja0ludmVyc2UgIT09IGNhbGxiYWNrRXhwZWN0ICkge1xuXHRcdFx0XHRtYXRjaGVzLnB1c2goIGVsZW1zWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2hlcztcblx0fSxcblxuXHQvLyBhcmcgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcblx0bWFwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBhcmcgKSB7XG5cdFx0dmFyIGxlbmd0aCwgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdHJldCA9IFtdO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblx0XHRpZiAoIGlzQXJyYXlMaWtlKCBlbGVtcyApICkge1xuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gR28gdGhyb3VnaCBldmVyeSBrZXkgb24gdGhlIG9iamVjdCxcblx0XHR9IGVsc2Uge1xuXHRcdFx0Zm9yICggaSBpbiBlbGVtcyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRcdHJldHVybiBmbGF0KCByZXQgKTtcblx0fSxcblxuXHQvLyBBIGdsb2JhbCBHVUlEIGNvdW50ZXIgZm9yIG9iamVjdHNcblx0Z3VpZDogMSxcblxuXHQvLyBqUXVlcnkuc3VwcG9ydCBpcyBub3QgdXNlZCBpbiBDb3JlIGJ1dCBvdGhlciBwcm9qZWN0cyBhdHRhY2ggdGhlaXJcblx0Ly8gcHJvcGVydGllcyB0byBpdCBzbyBpdCBuZWVkcyB0byBleGlzdC5cblx0c3VwcG9ydDogc3VwcG9ydFxufSApO1xuXG5pZiAoIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0alF1ZXJ5LmZuWyBTeW1ib2wuaXRlcmF0b3IgXSA9IGFyclsgU3ltYm9sLml0ZXJhdG9yIF07XG59XG5cbi8vIFBvcHVsYXRlIHRoZSBjbGFzczJ0eXBlIG1hcFxualF1ZXJ5LmVhY2goIFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvciBTeW1ib2xcIi5zcGxpdCggXCIgXCIgKSxcblx0ZnVuY3Rpb24oIF9pLCBuYW1lICkge1xuXHRcdGNsYXNzMnR5cGVbIFwiW29iamVjdCBcIiArIG5hbWUgKyBcIl1cIiBdID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHR9ICk7XG5cbmZ1bmN0aW9uIGlzQXJyYXlMaWtlKCBvYmogKSB7XG5cblx0Ly8gU3VwcG9ydDogcmVhbCBpT1MgOC4yIG9ubHkgKG5vdCByZXByb2R1Y2libGUgaW4gc2ltdWxhdG9yKVxuXHQvLyBgaW5gIGNoZWNrIHVzZWQgdG8gcHJldmVudCBKSVQgZXJyb3IgKGdoLTIxNDUpXG5cdC8vIGhhc093biBpc24ndCB1c2VkIGhlcmUgZHVlIHRvIGZhbHNlIG5lZ2F0aXZlc1xuXHQvLyByZWdhcmRpbmcgTm9kZWxpc3QgbGVuZ3RoIGluIElFXG5cdHZhciBsZW5ndGggPSAhIW9iaiAmJiBcImxlbmd0aFwiIGluIG9iaiAmJiBvYmoubGVuZ3RoLFxuXHRcdHR5cGUgPSB0b1R5cGUoIG9iaiApO1xuXG5cdGlmICggaXNGdW5jdGlvbiggb2JqICkgfHwgaXNXaW5kb3coIG9iaiApICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHJldHVybiB0eXBlID09PSBcImFycmF5XCIgfHwgbGVuZ3RoID09PSAwIHx8XG5cdFx0dHlwZW9mIGxlbmd0aCA9PT0gXCJudW1iZXJcIiAmJiBsZW5ndGggPiAwICYmICggbGVuZ3RoIC0gMSApIGluIG9iajtcbn1cblxuXG5mdW5jdGlvbiBub2RlTmFtZSggZWxlbSwgbmFtZSApIHtcblxuXHRyZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcblxufVxudmFyIHBvcCA9IGFyci5wb3A7XG5cblxudmFyIHNvcnQgPSBhcnIuc29ydDtcblxuXG52YXIgc3BsaWNlID0gYXJyLnNwbGljZTtcblxuXG52YXIgd2hpdGVzcGFjZSA9IFwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIjtcblxuXG52YXIgcnRyaW1DU1MgPSBuZXcgUmVnRXhwKFxuXHRcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyB3aGl0ZXNwYWNlICsgXCIrJFwiLFxuXHRcImdcIlxuKTtcblxuXG5cblxuLy8gTm90ZTogYW4gZWxlbWVudCBkb2VzIG5vdCBjb250YWluIGl0c2VsZlxualF1ZXJ5LmNvbnRhaW5zID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cdHZhciBidXAgPSBiICYmIGIucGFyZW50Tm9kZTtcblxuXHRyZXR1cm4gYSA9PT0gYnVwIHx8ICEhKCBidXAgJiYgYnVwLm5vZGVUeXBlID09PSAxICYmIChcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0XHQvLyBJRSBkb2Vzbid0IGhhdmUgYGNvbnRhaW5zYCBvbiBTVkcuXG5cdFx0YS5jb250YWlucyA/XG5cdFx0XHRhLmNvbnRhaW5zKCBidXAgKSA6XG5cdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICYmIGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGJ1cCApICYgMTZcblx0KSApO1xufTtcblxuXG5cblxuLy8gQ1NTIHN0cmluZy9pZGVudGlmaWVyIHNlcmlhbGl6YXRpb25cbi8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jY29tbW9uLXNlcmlhbGl6aW5nLWlkaW9tc1xudmFyIHJjc3Nlc2NhcGUgPSAvKFtcXDAtXFx4MWZcXHg3Zl18Xi0/XFxkKXxeLSR8W15cXHg4MC1cXHVGRkZGXFx3LV0vZztcblxuZnVuY3Rpb24gZmNzc2VzY2FwZSggY2gsIGFzQ29kZVBvaW50ICkge1xuXHRpZiAoIGFzQ29kZVBvaW50ICkge1xuXG5cdFx0Ly8gVSswMDAwIE5VTEwgYmVjb21lcyBVK0ZGRkQgUkVQTEFDRU1FTlQgQ0hBUkFDVEVSXG5cdFx0aWYgKCBjaCA9PT0gXCJcXDBcIiApIHtcblx0XHRcdHJldHVybiBcIlxcdUZGRkRcIjtcblx0XHR9XG5cblx0XHQvLyBDb250cm9sIGNoYXJhY3RlcnMgYW5kIChkZXBlbmRlbnQgdXBvbiBwb3NpdGlvbikgbnVtYmVycyBnZXQgZXNjYXBlZCBhcyBjb2RlIHBvaW50c1xuXHRcdHJldHVybiBjaC5zbGljZSggMCwgLTEgKSArIFwiXFxcXFwiICsgY2guY2hhckNvZGVBdCggY2gubGVuZ3RoIC0gMSApLnRvU3RyaW5nKCAxNiApICsgXCIgXCI7XG5cdH1cblxuXHQvLyBPdGhlciBwb3RlbnRpYWxseS1zcGVjaWFsIEFTQ0lJIGNoYXJhY3RlcnMgZ2V0IGJhY2tzbGFzaC1lc2NhcGVkXG5cdHJldHVybiBcIlxcXFxcIiArIGNoO1xufVxuXG5qUXVlcnkuZXNjYXBlU2VsZWN0b3IgPSBmdW5jdGlvbiggc2VsICkge1xuXHRyZXR1cm4gKCBzZWwgKyBcIlwiICkucmVwbGFjZSggcmNzc2VzY2FwZSwgZmNzc2VzY2FwZSApO1xufTtcblxuXG5cblxudmFyIHByZWZlcnJlZERvYyA9IGRvY3VtZW50LFxuXHRwdXNoTmF0aXZlID0gcHVzaDtcblxuKCBmdW5jdGlvbigpIHtcblxudmFyIGksXG5cdEV4cHIsXG5cdG91dGVybW9zdENvbnRleHQsXG5cdHNvcnRJbnB1dCxcblx0aGFzRHVwbGljYXRlLFxuXHRwdXNoID0gcHVzaE5hdGl2ZSxcblxuXHQvLyBMb2NhbCBkb2N1bWVudCB2YXJzXG5cdGRvY3VtZW50LFxuXHRkb2N1bWVudEVsZW1lbnQsXG5cdGRvY3VtZW50SXNIVE1MLFxuXHRyYnVnZ3lRU0EsXG5cdG1hdGNoZXMsXG5cblx0Ly8gSW5zdGFuY2Utc3BlY2lmaWMgZGF0YVxuXHRleHBhbmRvID0galF1ZXJ5LmV4cGFuZG8sXG5cdGRpcnJ1bnMgPSAwLFxuXHRkb25lID0gMCxcblx0Y2xhc3NDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdHRva2VuQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRjb21waWxlckNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0bm9ubmF0aXZlU2VsZWN0b3JDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdHNvcnRPcmRlciA9IGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0fVxuXHRcdHJldHVybiAwO1xuXHR9LFxuXG5cdGJvb2xlYW5zID0gXCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8XCIgK1xuXHRcdFwibG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLFxuXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbnNcblxuXHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNpZGVudC10b2tlbi1kaWFncmFtXG5cdGlkZW50aWZpZXIgPSBcIig/OlxcXFxcXFxcW1xcXFxkYS1mQS1GXXsxLDZ9XCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcIj98XFxcXFxcXFxbXlxcXFxyXFxcXG5cXFxcZl18W1xcXFx3LV18W15cXDAtXFxcXHg3Zl0pK1wiLFxuXG5cdC8vIEF0dHJpYnV0ZSBzZWxlY3RvcnM6IGh0dHBzOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2F0dHJpYnV0ZS1zZWxlY3RvcnNcblx0YXR0cmlidXRlcyA9IFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooXCIgKyBpZGVudGlmaWVyICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICtcblxuXHRcdC8vIE9wZXJhdG9yIChjYXB0dXJlIDIpXG5cdFx0XCIqKFsqXiR8IX5dPz0pXCIgKyB3aGl0ZXNwYWNlICtcblxuXHRcdC8vIFwiQXR0cmlidXRlIHZhbHVlcyBtdXN0IGJlIENTUyBpZGVudGlmaWVycyBbY2FwdHVyZSA1XSBvciBzdHJpbmdzIFtjYXB0dXJlIDMgb3IgY2FwdHVyZSA0XVwiXG5cdFx0XCIqKD86JygoPzpcXFxcXFxcXC58W15cXFxcXFxcXCddKSopJ3xcXFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcXFxcIl0pKilcXFwifChcIiArIGlkZW50aWZpZXIgKyBcIikpfClcIiArXG5cdFx0d2hpdGVzcGFjZSArIFwiKlxcXFxdXCIsXG5cblx0cHNldWRvcyA9IFwiOihcIiArIGlkZW50aWZpZXIgKyBcIikoPzpcXFxcKChcIiArXG5cblx0XHQvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuXHRcdC8vIDEuIHF1b3RlZCAoY2FwdHVyZSAzOyBjYXB0dXJlIDQgb3IgY2FwdHVyZSA1KVxuXHRcdFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgK1xuXG5cdFx0Ly8gMi4gc2ltcGxlIChjYXB0dXJlIDYpXG5cdFx0XCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFwoKVtcXFxcXV18XCIgKyBhdHRyaWJ1dGVzICsgXCIpKil8XCIgK1xuXG5cdFx0Ly8gMy4gYW55dGhpbmcgZWxzZSAoY2FwdHVyZSAyKVxuXHRcdFwiLipcIiArXG5cdFx0XCIpXFxcXCl8KVwiLFxuXG5cdC8vIExlYWRpbmcgYW5kIG5vbi1lc2NhcGVkIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGNhcHR1cmluZyBzb21lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgcHJlY2VkaW5nIHRoZSBsYXR0ZXJcblx0cndoaXRlc3BhY2UgPSBuZXcgUmVnRXhwKCB3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiICksXG5cblx0cmNvbW1hID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqLFwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG5cdHJsZWFkaW5nQ29tYmluYXRvciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKihbPit+XXxcIiArIHdoaXRlc3BhY2UgKyBcIilcIiArXG5cdFx0d2hpdGVzcGFjZSArIFwiKlwiICksXG5cdHJkZXNjZW5kID0gbmV3IFJlZ0V4cCggd2hpdGVzcGFjZSArIFwifD5cIiApLFxuXG5cdHJwc2V1ZG8gPSBuZXcgUmVnRXhwKCBwc2V1ZG9zICksXG5cdHJpZGVudGlmaWVyID0gbmV3IFJlZ0V4cCggXCJeXCIgKyBpZGVudGlmaWVyICsgXCIkXCIgKSxcblxuXHRtYXRjaEV4cHIgPSB7XG5cdFx0SUQ6IG5ldyBSZWdFeHAoIFwiXiMoXCIgKyBpZGVudGlmaWVyICsgXCIpXCIgKSxcblx0XHRDTEFTUzogbmV3IFJlZ0V4cCggXCJeXFxcXC4oXCIgKyBpZGVudGlmaWVyICsgXCIpXCIgKSxcblx0XHRUQUc6IG5ldyBSZWdFeHAoIFwiXihcIiArIGlkZW50aWZpZXIgKyBcInxbKl0pXCIgKSxcblx0XHRBVFRSOiBuZXcgUmVnRXhwKCBcIl5cIiArIGF0dHJpYnV0ZXMgKSxcblx0XHRQU0VVRE86IG5ldyBSZWdFeHAoIFwiXlwiICsgcHNldWRvcyApLFxuXHRcdENISUxEOiBuZXcgUmVnRXhwKFxuXHRcdFx0XCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiICtcblx0XHRcdFx0d2hpdGVzcGFjZSArIFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICtcblx0XHRcdFx0d2hpdGVzcGFjZSArIFwiKihcXFxcZCspfCkpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KVwiLCBcImlcIiApLFxuXHRcdGJvb2w6IG5ldyBSZWdFeHAoIFwiXig/OlwiICsgYm9vbGVhbnMgKyBcIikkXCIsIFwiaVwiICksXG5cblx0XHQvLyBGb3IgdXNlIGluIGxpYnJhcmllcyBpbXBsZW1lbnRpbmcgLmlzKClcblx0XHQvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG5cdFx0bmVlZHNDb250ZXh0OiBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIgKVxuXHR9LFxuXG5cdHJpbnB1dHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyaGVhZGVyID0gL15oXFxkJC9pLFxuXG5cdC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuXHRycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cblx0cnNpYmxpbmcgPSAvWyt+XS8sXG5cblx0Ly8gQ1NTIGVzY2FwZXNcblx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCNlc2NhcGVkLWNoYXJhY3RlcnNcblx0cnVuZXNjYXBlID0gbmV3IFJlZ0V4cCggXCJcXFxcXFxcXFtcXFxcZGEtZkEtRl17MSw2fVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCI/fFxcXFxcXFxcKFteXFxcXHJcXFxcblxcXFxmXSlcIiwgXCJnXCIgKSxcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIGVzY2FwZSwgbm9uSGV4ICkge1xuXHRcdHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlLnNsaWNlKCAxICkgLSAweDEwMDAwO1xuXG5cdFx0aWYgKCBub25IZXggKSB7XG5cblx0XHRcdC8vIFN0cmlwIHRoZSBiYWNrc2xhc2ggcHJlZml4IGZyb20gYSBub24taGV4IGVzY2FwZSBzZXF1ZW5jZVxuXHRcdFx0cmV0dXJuIG5vbkhleDtcblx0XHR9XG5cblx0XHQvLyBSZXBsYWNlIGEgaGV4YWRlY2ltYWwgZXNjYXBlIHNlcXVlbmNlIHdpdGggdGhlIGVuY29kZWQgVW5pY29kZSBjb2RlIHBvaW50XG5cdFx0Ly8gU3VwcG9ydDogSUUgPD0xMStcblx0XHQvLyBGb3IgdmFsdWVzIG91dHNpZGUgdGhlIEJhc2ljIE11bHRpbGluZ3VhbCBQbGFuZSAoQk1QKSwgbWFudWFsbHkgY29uc3RydWN0IGFcblx0XHQvLyBzdXJyb2dhdGUgcGFpclxuXHRcdHJldHVybiBoaWdoIDwgMCA/XG5cdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoICsgMHgxMDAwMCApIDpcblx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoIGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCApO1xuXHR9LFxuXG5cdC8vIFVzZWQgZm9yIGlmcmFtZXM7IHNlZSBgc2V0RG9jdW1lbnRgLlxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErLCBFZGdlIDEyIC0gMTgrXG5cdC8vIFJlbW92aW5nIHRoZSBmdW5jdGlvbiB3cmFwcGVyIGNhdXNlcyBhIFwiUGVybWlzc2lvbiBEZW5pZWRcIlxuXHQvLyBlcnJvciBpbiBJRS9FZGdlLlxuXHR1bmxvYWRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0c2V0RG9jdW1lbnQoKTtcblx0fSxcblxuXHRpbkRpc2FibGVkRmllbGRzZXQgPSBhZGRDb21iaW5hdG9yKFxuXHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWUgJiYgbm9kZU5hbWUoIGVsZW0sIFwiZmllbGRzZXRcIiApO1xuXHRcdH0sXG5cdFx0eyBkaXI6IFwicGFyZW50Tm9kZVwiLCBuZXh0OiBcImxlZ2VuZFwiIH1cblx0KTtcblxuLy8gU3VwcG9ydDogSUUgPD05IG9ubHlcbi8vIEFjY2Vzc2luZyBkb2N1bWVudC5hY3RpdmVFbGVtZW50IGNhbiB0aHJvdyB1bmV4cGVjdGVkbHlcbi8vIGh0dHBzOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMzM5M1xuZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH0gY2F0Y2ggKCBlcnIgKSB7IH1cbn1cblxuLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcbnRyeSB7XG5cdHB1c2guYXBwbHkoXG5cdFx0KCBhcnIgPSBzbGljZS5jYWxsKCBwcmVmZXJyZWREb2MuY2hpbGROb2RlcyApICksXG5cdFx0cHJlZmVycmVkRG9jLmNoaWxkTm9kZXNcblx0KTtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wXG5cdC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRhcnJbIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aCBdLm5vZGVUeXBlO1xufSBjYXRjaCAoIGUgKSB7XG5cdHB1c2ggPSB7XG5cdFx0YXBwbHk6IGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHB1c2hOYXRpdmUuYXBwbHkoIHRhcmdldCwgc2xpY2UuY2FsbCggZWxzICkgKTtcblx0XHR9LFxuXHRcdGNhbGw6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdFx0XHRwdXNoTmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoIGFyZ3VtZW50cywgMSApICk7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBmaW5kKCBzZWxlY3RvciwgY29udGV4dCwgcmVzdWx0cywgc2VlZCApIHtcblx0dmFyIG0sIGksIGVsZW0sIG5pZCwgbWF0Y2gsIGdyb3VwcywgbmV3U2VsZWN0b3IsXG5cdFx0bmV3Q29udGV4dCA9IGNvbnRleHQgJiYgY29udGV4dC5vd25lckRvY3VtZW50LFxuXG5cdFx0Ly8gbm9kZVR5cGUgZGVmYXVsdHMgdG8gOSwgc2luY2UgY29udGV4dCBkZWZhdWx0cyB0byBkb2N1bWVudFxuXHRcdG5vZGVUeXBlID0gY29udGV4dCA/IGNvbnRleHQubm9kZVR5cGUgOiA5O1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFJldHVybiBlYXJseSBmcm9tIGNhbGxzIHdpdGggaW52YWxpZCBzZWxlY3RvciBvciBjb250ZXh0XG5cdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiIHx8ICFzZWxlY3RvciB8fFxuXHRcdG5vZGVUeXBlICE9PSAxICYmIG5vZGVUeXBlICE9PSA5ICYmIG5vZGVUeXBlICE9PSAxMSApIHtcblxuXHRcdHJldHVybiByZXN1bHRzO1xuXHR9XG5cblx0Ly8gVHJ5IHRvIHNob3J0Y3V0IGZpbmQgb3BlcmF0aW9ucyAoYXMgb3Bwb3NlZCB0byBmaWx0ZXJzKSBpbiBIVE1MIGRvY3VtZW50c1xuXHRpZiAoICFzZWVkICkge1xuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdFx0Y29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cblx0XHRpZiAoIGRvY3VtZW50SXNIVE1MICkge1xuXG5cdFx0XHQvLyBJZiB0aGUgc2VsZWN0b3IgaXMgc3VmZmljaWVudGx5IHNpbXBsZSwgdHJ5IHVzaW5nIGEgXCJnZXQqQnkqXCIgRE9NIG1ldGhvZFxuXHRcdFx0Ly8gKGV4Y2VwdGluZyBEb2N1bWVudEZyYWdtZW50IGNvbnRleHQsIHdoZXJlIHRoZSBtZXRob2RzIGRvbid0IGV4aXN0KVxuXHRcdFx0aWYgKCBub2RlVHlwZSAhPT0gMTEgJiYgKCBtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdC8vIElEIHNlbGVjdG9yXG5cdFx0XHRcdGlmICggKCBtID0gbWF0Y2hbIDEgXSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9jdW1lbnQgY29udGV4dFxuXHRcdFx0XHRcdGlmICggbm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIG0gKSApICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgb25seVxuXHRcdFx0XHRcdFx0XHQvLyBnZXRFbGVtZW50QnlJZCBjYW4gbWF0Y2ggZWxlbWVudHMgYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRcdGlmICggZWxlbS5pZCA9PT0gbSApIHtcblx0XHRcdFx0XHRcdFx0XHRwdXNoLmNhbGwoIHJlc3VsdHMsIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBFbGVtZW50IGNvbnRleHRcblx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0XHRcdC8vIGdldEVsZW1lbnRCeUlkIGNhbiBtYXRjaCBlbGVtZW50cyBieSBuYW1lIGluc3RlYWQgb2YgSURcblx0XHRcdFx0XHRcdGlmICggbmV3Q29udGV4dCAmJiAoIGVsZW0gPSBuZXdDb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICkgKSAmJlxuXHRcdFx0XHRcdFx0XHRmaW5kLmNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICkgJiZcblx0XHRcdFx0XHRcdFx0ZWxlbS5pZCA9PT0gbSApIHtcblxuXHRcdFx0XHRcdFx0XHRwdXNoLmNhbGwoIHJlc3VsdHMsIGVsZW0gKTtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFR5cGUgc2VsZWN0b3Jcblx0XHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbIDIgXSApIHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCBzZWxlY3RvciApICk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdFx0Ly8gQ2xhc3Mgc2VsZWN0b3Jcblx0XHRcdFx0fSBlbHNlIGlmICggKCBtID0gbWF0Y2hbIDMgXSApICYmIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApIHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG0gKSApO1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRha2UgYWR2YW50YWdlIG9mIHF1ZXJ5U2VsZWN0b3JBbGxcblx0XHRcdGlmICggIW5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXSAmJlxuXHRcdFx0XHQoICFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBzZWxlY3RvciApICkgKSB7XG5cblx0XHRcdFx0bmV3U2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cblx0XHRcdFx0Ly8gcVNBIGNvbnNpZGVycyBlbGVtZW50cyBvdXRzaWRlIGEgc2NvcGluZyByb290IHdoZW4gZXZhbHVhdGluZyBjaGlsZCBvclxuXHRcdFx0XHQvLyBkZXNjZW5kYW50IGNvbWJpbmF0b3JzLCB3aGljaCBpcyBub3Qgd2hhdCB3ZSB3YW50LlxuXHRcdFx0XHQvLyBJbiBzdWNoIGNhc2VzLCB3ZSB3b3JrIGFyb3VuZCB0aGUgYmVoYXZpb3IgYnkgcHJlZml4aW5nIGV2ZXJ5IHNlbGVjdG9yIGluIHRoZVxuXHRcdFx0XHQvLyBsaXN0IHdpdGggYW4gSUQgc2VsZWN0b3IgcmVmZXJlbmNpbmcgdGhlIHNjb3BlIGNvbnRleHQuXG5cdFx0XHRcdC8vIFRoZSB0ZWNobmlxdWUgaGFzIHRvIGJlIHVzZWQgYXMgd2VsbCB3aGVuIGEgbGVhZGluZyBjb21iaW5hdG9yIGlzIHVzZWRcblx0XHRcdFx0Ly8gYXMgc3VjaCBzZWxlY3RvcnMgYXJlIG5vdCByZWNvZ25pemVkIGJ5IHF1ZXJ5U2VsZWN0b3JBbGwuXG5cdFx0XHRcdC8vIFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGlzIHRlY2huaXF1ZS5cblx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHRcdCggcmRlc2NlbmQudGVzdCggc2VsZWN0b3IgKSB8fCBybGVhZGluZ0NvbWJpbmF0b3IudGVzdCggc2VsZWN0b3IgKSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRXhwYW5kIGNvbnRleHQgZm9yIHNpYmxpbmcgc2VsZWN0b3JzXG5cdFx0XHRcdFx0bmV3Q29udGV4dCA9IHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8XG5cdFx0XHRcdFx0XHRjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gV2UgY2FuIHVzZSA6c2NvcGUgaW5zdGVhZCBvZiB0aGUgSUQgaGFjayBpZiB0aGUgYnJvd3NlclxuXHRcdFx0XHRcdC8vIHN1cHBvcnRzIGl0ICYgaWYgd2UncmUgbm90IGNoYW5naW5nIHRoZSBjb250ZXh0LlxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdFx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW5cblx0XHRcdFx0XHQvLyBzdHJpY3QtY29tcGFyaW5nIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0XHRcdFx0aWYgKCBuZXdDb250ZXh0ICE9IGNvbnRleHQgfHwgIXN1cHBvcnQuc2NvcGUgKSB7XG5cblx0XHRcdFx0XHRcdC8vIENhcHR1cmUgdGhlIGNvbnRleHQgSUQsIHNldHRpbmcgaXQgZmlyc3QgaWYgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0XHRpZiAoICggbmlkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApICkgKSB7XG5cdFx0XHRcdFx0XHRcdG5pZCA9IGpRdWVyeS5lc2NhcGVTZWxlY3RvciggbmlkICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRjb250ZXh0LnNldEF0dHJpYnV0ZSggXCJpZFwiLCAoIG5pZCA9IGV4cGFuZG8gKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFByZWZpeCBldmVyeSBzZWxlY3RvciBpbiB0aGUgbGlzdFxuXHRcdFx0XHRcdGdyb3VwcyA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuXHRcdFx0XHRcdGkgPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0Z3JvdXBzWyBpIF0gPSAoIG5pZCA/IFwiI1wiICsgbmlkIDogXCI6c2NvcGVcIiApICsgXCIgXCIgK1xuXHRcdFx0XHRcdFx0XHR0b1NlbGVjdG9yKCBncm91cHNbIGkgXSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKCBcIixcIiApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLFxuXHRcdFx0XHRcdFx0bmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCBuZXdTZWxlY3RvciApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fSBjYXRjaCAoIHFzYUVycm9yICkge1xuXHRcdFx0XHRcdG5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUoIHNlbGVjdG9yLCB0cnVlICk7XG5cdFx0XHRcdH0gZmluYWxseSB7XG5cdFx0XHRcdFx0aWYgKCBuaWQgPT09IGV4cGFuZG8gKSB7XG5cdFx0XHRcdFx0XHRjb250ZXh0LnJlbW92ZUF0dHJpYnV0ZSggXCJpZFwiICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWxsIG90aGVyc1xuXHRyZXR1cm4gc2VsZWN0KCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbUNTUywgXCIkMVwiICksIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUga2V5LXZhbHVlIGNhY2hlcyBvZiBsaW1pdGVkIHNpemVcbiAqIEByZXR1cm5zIHtmdW5jdGlvbihzdHJpbmcsIG9iamVjdCl9IFJldHVybnMgdGhlIE9iamVjdCBkYXRhIGFmdGVyIHN0b3JpbmcgaXQgb24gaXRzZWxmIHdpdGhcbiAqXHRwcm9wZXJ0eSBuYW1lIHRoZSAoc3BhY2Utc3VmZml4ZWQpIHN0cmluZyBhbmQgKGlmIHRoZSBjYWNoZSBpcyBsYXJnZXIgdGhhbiBFeHByLmNhY2hlTGVuZ3RoKVxuICpcdGRlbGV0aW5nIHRoZSBvbGRlc3QgZW50cnlcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKSB7XG5cdHZhciBrZXlzID0gW107XG5cblx0ZnVuY3Rpb24gY2FjaGUoIGtleSwgdmFsdWUgKSB7XG5cblx0XHQvLyBVc2UgKGtleSArIFwiIFwiKSB0byBhdm9pZCBjb2xsaXNpb24gd2l0aCBuYXRpdmUgcHJvdG90eXBlIHByb3BlcnRpZXNcblx0XHQvLyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL2lzc3Vlcy8xNTcpXG5cdFx0aWYgKCBrZXlzLnB1c2goIGtleSArIFwiIFwiICkgPiBFeHByLmNhY2hlTGVuZ3RoICkge1xuXG5cdFx0XHQvLyBPbmx5IGtlZXAgdGhlIG1vc3QgcmVjZW50IGVudHJpZXNcblx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5cy5zaGlmdCgpIF07XG5cdFx0fVxuXHRcdHJldHVybiAoIGNhY2hlWyBrZXkgKyBcIiBcIiBdID0gdmFsdWUgKTtcblx0fVxuXHRyZXR1cm4gY2FjaGU7XG59XG5cbi8qKlxuICogTWFyayBhIGZ1bmN0aW9uIGZvciBzcGVjaWFsIHVzZSBieSBqUXVlcnkgc2VsZWN0b3IgbW9kdWxlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWFya1xuICovXG5mdW5jdGlvbiBtYXJrRnVuY3Rpb24oIGZuICkge1xuXHRmblsgZXhwYW5kbyBdID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgdGVzdGluZyB1c2luZyBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQYXNzZWQgdGhlIGNyZWF0ZWQgZWxlbWVudCBhbmQgcmV0dXJucyBhIGJvb2xlYW4gcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFzc2VydCggZm4gKSB7XG5cdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZmllbGRzZXRcIiApO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZm4oIGVsICk7XG5cdH0gY2F0Y2ggKCBlICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fSBmaW5hbGx5IHtcblxuXHRcdC8vIFJlbW92ZSBmcm9tIGl0cyBwYXJlbnQgYnkgZGVmYXVsdFxuXHRcdGlmICggZWwucGFyZW50Tm9kZSApIHtcblx0XHRcdGVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGVsICk7XG5cdFx0fVxuXG5cdFx0Ly8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcblx0XHRlbCA9IG51bGw7XG5cdH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKCB0eXBlICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuICggbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApIHx8IG5vZGVOYW1lKCBlbGVtLCBcImJ1dHRvblwiICkgKSAmJlxuXHRcdFx0ZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgOmVuYWJsZWQvOmRpc2FibGVkXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGRpc2FibGVkIHRydWUgZm9yIDpkaXNhYmxlZDsgZmFsc2UgZm9yIDplbmFibGVkXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZURpc2FibGVkUHNldWRvKCBkaXNhYmxlZCApIHtcblxuXHQvLyBLbm93biA6ZGlzYWJsZWQgZmFsc2UgcG9zaXRpdmVzOiBmaWVsZHNldFtkaXNhYmxlZF0gPiBsZWdlbmQ6bnRoLW9mLXR5cGUobisyKSA6Y2FuLWRpc2FibGVcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gT25seSBjZXJ0YWluIGVsZW1lbnRzIGNhbiBtYXRjaCA6ZW5hYmxlZCBvciA6ZGlzYWJsZWRcblx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzZWxlY3Rvci1lbmFibGVkXG5cdFx0Ly8gaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2NyaXB0aW5nLmh0bWwjc2VsZWN0b3ItZGlzYWJsZWRcblx0XHRpZiAoIFwiZm9ybVwiIGluIGVsZW0gKSB7XG5cblx0XHRcdC8vIENoZWNrIGZvciBpbmhlcml0ZWQgZGlzYWJsZWRuZXNzIG9uIHJlbGV2YW50IG5vbi1kaXNhYmxlZCBlbGVtZW50czpcblx0XHRcdC8vICogbGlzdGVkIGZvcm0tYXNzb2NpYXRlZCBlbGVtZW50cyBpbiBhIGRpc2FibGVkIGZpZWxkc2V0XG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY2F0ZWdvcnktbGlzdGVkXG5cdFx0XHQvLyAgIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjY29uY2VwdC1mZS1kaXNhYmxlZFxuXHRcdFx0Ly8gKiBvcHRpb24gZWxlbWVudHMgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0Ly8gICBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9mb3Jtcy5odG1sI2NvbmNlcHQtb3B0aW9uLWRpc2FibGVkXG5cdFx0XHQvLyBBbGwgc3VjaCBlbGVtZW50cyBoYXZlIGEgXCJmb3JtXCIgcHJvcGVydHkuXG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSAmJiBlbGVtLmRpc2FibGVkID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHQvLyBPcHRpb24gZWxlbWVudHMgZGVmZXIgdG8gYSBwYXJlbnQgb3B0Z3JvdXAgaWYgcHJlc2VudFxuXHRcdFx0XHRpZiAoIFwibGFiZWxcIiBpbiBlbGVtICkge1xuXHRcdFx0XHRcdGlmICggXCJsYWJlbFwiIGluIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLnBhcmVudE5vZGUuZGlzYWJsZWQgPT09IGRpc2FibGVkO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDExK1xuXHRcdFx0XHQvLyBVc2UgdGhlIGlzRGlzYWJsZWQgc2hvcnRjdXQgcHJvcGVydHkgdG8gY2hlY2sgZm9yIGRpc2FibGVkIGZpZWxkc2V0IGFuY2VzdG9yc1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pc0Rpc2FibGVkID09PSBkaXNhYmxlZCB8fFxuXG5cdFx0XHRcdFx0Ly8gV2hlcmUgdGhlcmUgaXMgbm8gaXNEaXNhYmxlZCwgY2hlY2sgbWFudWFsbHlcblx0XHRcdFx0XHRlbGVtLmlzRGlzYWJsZWQgIT09ICFkaXNhYmxlZCAmJlxuXHRcdFx0XHRcdFx0aW5EaXNhYmxlZEZpZWxkc2V0KCBlbGVtICkgPT09IGRpc2FibGVkO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cblx0XHQvLyBUcnkgdG8gd2lubm93IG91dCBlbGVtZW50cyB0aGF0IGNhbid0IGJlIGRpc2FibGVkIGJlZm9yZSB0cnVzdGluZyB0aGUgZGlzYWJsZWQgcHJvcGVydHkuXG5cdFx0Ly8gU29tZSB2aWN0aW1zIGdldCBjYXVnaHQgaW4gb3VyIG5ldCAobGFiZWwsIGxlZ2VuZCwgbWVudSwgdHJhY2spLCBidXQgaXQgc2hvdWxkbid0XG5cdFx0Ly8gZXZlbiBleGlzdCBvbiB0aGVtLCBsZXQgYWxvbmUgaGF2ZSBhIGJvb2xlYW4gdmFsdWUuXG5cdFx0fSBlbHNlIGlmICggXCJsYWJlbFwiIGluIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kaXNhYmxlZCA9PT0gZGlzYWJsZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gUmVtYWluaW5nIGVsZW1lbnRzIGFyZSBuZWl0aGVyIDplbmFibGVkIG5vciA6ZGlzYWJsZWRcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZm4gKSB7XG5cdHJldHVybiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBhcmd1bWVudCApIHtcblx0XHRhcmd1bWVudCA9ICthcmd1bWVudDtcblx0XHRyZXR1cm4gbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcblx0XHRcdHZhciBqLFxuXHRcdFx0XHRtYXRjaEluZGV4ZXMgPSBmbiggW10sIHNlZWQubGVuZ3RoLCBhcmd1bWVudCApLFxuXHRcdFx0XHRpID0gbWF0Y2hJbmRleGVzLmxlbmd0aDtcblxuXHRcdFx0Ly8gTWF0Y2ggZWxlbWVudHMgZm91bmQgYXQgdGhlIHNwZWNpZmllZCBpbmRleGVzXG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCBzZWVkWyAoIGogPSBtYXRjaEluZGV4ZXNbIGkgXSApIF0gKSB7XG5cdFx0XHRcdFx0c2VlZFsgaiBdID0gISggbWF0Y2hlc1sgaiBdID0gc2VlZFsgaiBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9ICk7XG5cdH0gKTtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIGpRdWVyeSBzZWxlY3RvciBjb250ZXh0XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHRlc3RDb250ZXh0KCBjb250ZXh0ICkge1xuXHRyZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xufVxuXG4vKipcbiAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW25vZGVdIEFuIGVsZW1lbnQgb3IgZG9jdW1lbnQgb2JqZWN0IHRvIHVzZSB0byBzZXQgdGhlIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gKi9cbmZ1bmN0aW9uIHNldERvY3VtZW50KCBub2RlICkge1xuXHR2YXIgc3ViV2luZG93LFxuXHRcdGRvYyA9IG5vZGUgPyBub2RlLm93bmVyRG9jdW1lbnQgfHwgbm9kZSA6IHByZWZlcnJlZERvYztcblxuXHQvLyBSZXR1cm4gZWFybHkgaWYgZG9jIGlzIGludmFsaWQgb3IgYWxyZWFkeSBzZWxlY3RlZFxuXHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRpZiAoIGRvYyA9PSBkb2N1bWVudCB8fCBkb2Mubm9kZVR5cGUgIT09IDkgfHwgIWRvYy5kb2N1bWVudEVsZW1lbnQgKSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50O1xuXHR9XG5cblx0Ly8gVXBkYXRlIGdsb2JhbCB2YXJpYWJsZXNcblx0ZG9jdW1lbnQgPSBkb2M7XG5cdGRvY3VtZW50RWxlbWVudCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblx0ZG9jdW1lbnRJc0hUTUwgPSAhalF1ZXJ5LmlzWE1MRG9jKCBkb2N1bWVudCApO1xuXG5cdC8vIFN1cHBvcnQ6IGlPUyA3IG9ubHksIElFIDkgLSAxMStcblx0Ly8gT2xkZXIgYnJvd3NlcnMgZGlkbid0IHN1cHBvcnQgdW5wcmVmaXhlZCBgbWF0Y2hlc2AuXG5cdG1hdGNoZXMgPSBkb2N1bWVudEVsZW1lbnQubWF0Y2hlcyB8fFxuXHRcdGRvY3VtZW50RWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2N1bWVudEVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3I7XG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxMiAtIDE4K1xuXHQvLyBBY2Nlc3NpbmcgaWZyYW1lIGRvY3VtZW50cyBhZnRlciB1bmxvYWQgdGhyb3dzIFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvcnNcblx0Ly8gKHNlZSB0cmFjLTEzOTM2KS5cblx0Ly8gTGltaXQgdGhlIGZpeCB0byBJRSAmIEVkZ2UgTGVnYWN5OyBkZXNwaXRlIEVkZ2UgMTUrIGltcGxlbWVudGluZyBgbWF0Y2hlc2AsXG5cdC8vIGFsbCBJRSA5KyBhbmQgRWRnZSBMZWdhY3kgdmVyc2lvbnMgaW1wbGVtZW50IGBtc01hdGNoZXNTZWxlY3RvcmAgYXMgd2VsbC5cblx0aWYgKCBkb2N1bWVudEVsZW1lbnQubXNNYXRjaGVzU2VsZWN0b3IgJiZcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0cHJlZmVycmVkRG9jICE9IGRvY3VtZW50ICYmXG5cdFx0KCBzdWJXaW5kb3cgPSBkb2N1bWVudC5kZWZhdWx0VmlldyApICYmIHN1YldpbmRvdy50b3AgIT09IHN1YldpbmRvdyApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCtcblx0XHRzdWJXaW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJ1bmxvYWRcIiwgdW5sb2FkSGFuZGxlciApO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgPDEwXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRCeUlkIHJldHVybnMgZWxlbWVudHMgYnkgbmFtZVxuXHQvLyBUaGUgYnJva2VuIGdldEVsZW1lbnRCeUlkIG1ldGhvZHMgZG9uJ3QgcGljayB1cCBwcm9ncmFtbWF0aWNhbGx5LXNldCBuYW1lcyxcblx0Ly8gc28gdXNlIGEgcm91bmRhYm91dCBnZXRFbGVtZW50c0J5TmFtZSB0ZXN0XG5cdHN1cHBvcnQuZ2V0QnlJZCA9IGFzc2VydCggZnVuY3Rpb24oIGVsICkge1xuXHRcdGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCggZWwgKS5pZCA9IGpRdWVyeS5leHBhbmRvO1xuXHRcdHJldHVybiAhZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUgfHxcblx0XHRcdCFkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSggalF1ZXJ5LmV4cGFuZG8gKS5sZW5ndGg7XG5cdH0gKTtcblxuXHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0Ly8gQ2hlY2sgdG8gc2VlIGlmIGl0J3MgcG9zc2libGUgdG8gZG8gbWF0Y2hlc1NlbGVjdG9yXG5cdC8vIG9uIGEgZGlzY29ubmVjdGVkIG5vZGUuXG5cdHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRyZXR1cm4gbWF0Y2hlcy5jYWxsKCBlbCwgXCIqXCIgKTtcblx0fSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCtcblx0Ly8gSUUvRWRnZSBkb24ndCBzdXBwb3J0IHRoZSA6c2NvcGUgcHNldWRvLWNsYXNzLlxuXHRzdXBwb3J0LnNjb3BlID0gYXNzZXJ0KCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCggXCI6c2NvcGVcIiApO1xuXHR9ICk7XG5cblx0Ly8gU3VwcG9ydDogQ2hyb21lIDEwNSAtIDExMSBvbmx5LCBTYWZhcmkgMTUuNCAtIDE2LjMgb25seVxuXHQvLyBNYWtlIHN1cmUgdGhlIGA6aGFzKClgIGFyZ3VtZW50IGlzIHBhcnNlZCB1bmZvcmdpdmluZ2x5LlxuXHQvLyBXZSBpbmNsdWRlIGAqYCBpbiB0aGUgdGVzdCB0byBkZXRlY3QgYnVnZ3kgaW1wbGVtZW50YXRpb25zIHRoYXQgYXJlXG5cdC8vIF9zZWxlY3RpdmVseV8gZm9yZ2l2aW5nIChzcGVjaWZpY2FsbHkgd2hlbiB0aGUgbGlzdCBpbmNsdWRlcyBhdCBsZWFzdFxuXHQvLyBvbmUgdmFsaWQgc2VsZWN0b3IpLlxuXHQvLyBOb3RlIHRoYXQgd2UgdHJlYXQgY29tcGxldGUgbGFjayBvZiBzdXBwb3J0IGZvciBgOmhhcygpYCBhcyBpZiBpdCB3ZXJlXG5cdC8vIHNwZWMtY29tcGxpYW50IHN1cHBvcnQsIHdoaWNoIGlzIGZpbmUgYmVjYXVzZSB1c2Ugb2YgYDpoYXMoKWAgaW4gc3VjaFxuXHQvLyBlbnZpcm9ubWVudHMgd2lsbCBmYWlsIGluIHRoZSBxU0EgcGF0aCBhbmQgZmFsbCBiYWNrIHRvIGpRdWVyeSB0cmF2ZXJzYWxcblx0Ly8gYW55d2F5LlxuXHRzdXBwb3J0LmNzc0hhcyA9IGFzc2VydCggZnVuY3Rpb24oKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIFwiOmhhcygqLDpqcWZha2UpXCIgKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH1cblx0fSApO1xuXG5cdC8vIElEIGZpbHRlciBhbmQgZmluZFxuXHRpZiAoIHN1cHBvcnQuZ2V0QnlJZCApIHtcblx0XHRFeHByLmZpbHRlci5JRCA9IGZ1bmN0aW9uKCBpZCApIHtcblx0XHRcdHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIFwiaWRcIiApID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cdFx0RXhwci5maW5kLklEID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXHRcdFx0XHRyZXR1cm4gZWxlbSA/IFsgZWxlbSBdIDogW107XG5cdFx0XHR9XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRFeHByLmZpbHRlci5JRCA9ICBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBcImlkXCIgKTtcblx0XHRcdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXG5cdFx0Ly8gU3VwcG9ydDogSUUgNiAtIDcgb25seVxuXHRcdC8vIGdldEVsZW1lbnRCeUlkIGlzIG5vdCByZWxpYWJsZSBhcyBhIGZpbmQgc2hvcnRjdXRcblx0XHRFeHByLmZpbmQuSUQgPSBmdW5jdGlvbiggaWQsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRCeUlkICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0XHR2YXIgbm9kZSwgaSwgZWxlbXMsXG5cdFx0XHRcdFx0ZWxlbSA9IGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtICkge1xuXG5cdFx0XHRcdFx0Ly8gVmVyaWZ5IHRoZSBpZCBhdHRyaWJ1dGVcblx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBcImlkXCIgKTtcblx0XHRcdFx0XHRpZiAoIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gaWQgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gWyBlbGVtIF07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gRmFsbCBiYWNrIG9uIGdldEVsZW1lbnRzQnlOYW1lXG5cdFx0XHRcdFx0ZWxlbXMgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlOYW1lKCBpZCApO1xuXHRcdFx0XHRcdGkgPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdFx0XHRub2RlID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKCBcImlkXCIgKTtcblx0XHRcdFx0XHRcdGlmICggbm9kZSAmJiBub2RlLnZhbHVlID09PSBpZCApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIFsgZWxlbSBdO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBbXTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0Ly8gVGFnXG5cdEV4cHIuZmluZC5UQUcgPSBmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHQvLyBEb2N1bWVudEZyYWdtZW50IG5vZGVzIGRvbid0IGhhdmUgZ0VCVE5cblx0XHR9IGVsc2Uge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8vIENsYXNzXG5cdEV4cHIuZmluZC5DTEFTUyA9IGZ1bmN0aW9uKCBjbGFzc05hbWUsIGNvbnRleHQgKSB7XG5cdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggY2xhc3NOYW1lICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFFTQS9tYXRjaGVzU2VsZWN0b3Jcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcblxuXHRyYnVnZ3lRU0EgPSBbXTtcblxuXHQvLyBCdWlsZCBRU0EgcmVnZXhcblx0Ly8gUmVnZXggc3RyYXRlZ3kgYWRvcHRlZCBmcm9tIERpZWdvIFBlcmluaVxuXHRhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblxuXHRcdHZhciBpbnB1dDtcblxuXHRcdGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCggZWwgKS5pbm5lckhUTUwgPVxuXHRcdFx0XCI8YSBpZD0nXCIgKyBleHBhbmRvICsgXCInIGhyZWY9JycgZGlzYWJsZWQ9J2Rpc2FibGVkJz48L2E+XCIgK1xuXHRcdFx0XCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXHJcXFxcJyBkaXNhYmxlZD0nZGlzYWJsZWQnPlwiICtcblx0XHRcdFwiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjtcblxuXHRcdC8vIFN1cHBvcnQ6IGlPUyA8PTcgLSA4IG9ubHlcblx0XHQvLyBCb29sZWFuIGF0dHJpYnV0ZXMgYW5kIFwidmFsdWVcIiBhcmUgbm90IHRyZWF0ZWQgY29ycmVjdGx5IGluIHNvbWUgWE1MIGRvY3VtZW50c1xuXHRcdGlmICggIWVsLnF1ZXJ5U2VsZWN0b3JBbGwoIFwiW3NlbGVjdGVkXVwiICkubGVuZ3RoICkge1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiXFxcXFtcIiArIHdoaXRlc3BhY2UgKyBcIiooPzp2YWx1ZXxcIiArIGJvb2xlYW5zICsgXCIpXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBpT1MgPD03IC0gOCBvbmx5XG5cdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJbaWR+PVwiICsgZXhwYW5kbyArIFwiLV1cIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIn49XCIgKTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBpT1MgOCBvbmx5XG5cdFx0Ly8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTEzNjg1MVxuXHRcdC8vIEluLXBhZ2UgYHNlbGVjdG9yI2lkIHNpYmxpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcblx0XHRpZiAoICFlbC5xdWVyeVNlbGVjdG9yQWxsKCBcImEjXCIgKyBleHBhbmRvICsgXCIrKlwiICkubGVuZ3RoICkge1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiLiMuK1srfl1cIiApO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IENocm9tZSA8PTEwNSssIEZpcmVmb3ggPD0xMDQrLCBTYWZhcmkgPD0xNS40K1xuXHRcdC8vIEluIHNvbWUgb2YgdGhlIGRvY3VtZW50IGtpbmRzLCB0aGVzZSBzZWxlY3RvcnMgd291bGRuJ3Qgd29yayBuYXRpdmVseS5cblx0XHQvLyBUaGlzIGlzIHByb2JhYmx5IE9LIGJ1dCBmb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHkgd2Ugd2FudCB0byBtYWludGFpblxuXHRcdC8vIGhhbmRsaW5nIHRoZW0gdGhyb3VnaCBqUXVlcnkgdHJhdmVyc2FsIGluIGpRdWVyeSAzLnguXG5cdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCI6Y2hlY2tlZFwiICkubGVuZ3RoICkge1xuXHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiOmNoZWNrZWRcIiApO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IFdpbmRvd3MgOCBOYXRpdmUgQXBwc1xuXHRcdC8vIFRoZSB0eXBlIGFuZCBuYW1lIGF0dHJpYnV0ZXMgYXJlIHJlc3RyaWN0ZWQgZHVyaW5nIC5pbm5lckhUTUwgYXNzaWdubWVudFxuXHRcdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJoaWRkZW5cIiApO1xuXHRcdGVsLmFwcGVuZENoaWxkKCBpbnB1dCApLnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwiRFwiICk7XG5cblx0XHQvLyBTdXBwb3J0OiBJRSA5IC0gMTErXG5cdFx0Ly8gSUUncyA6ZGlzYWJsZWQgc2VsZWN0b3IgZG9lcyBub3QgcGljayB1cCB0aGUgY2hpbGRyZW4gb2YgZGlzYWJsZWQgZmllbGRzZXRzXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MTA1KywgRmlyZWZveCA8PTEwNCssIFNhZmFyaSA8PTE1LjQrXG5cdFx0Ly8gSW4gc29tZSBvZiB0aGUgZG9jdW1lbnQga2luZHMsIHRoZXNlIHNlbGVjdG9ycyB3b3VsZG4ndCB3b3JrIG5hdGl2ZWx5LlxuXHRcdC8vIFRoaXMgaXMgcHJvYmFibHkgT0sgYnV0IGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSB3ZSB3YW50IHRvIG1haW50YWluXG5cdFx0Ly8gaGFuZGxpbmcgdGhlbSB0aHJvdWdoIGpRdWVyeSB0cmF2ZXJzYWwgaW4galF1ZXJ5IDMueC5cblx0XHRkb2N1bWVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoIGVsICkuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdGlmICggZWwucXVlcnlTZWxlY3RvckFsbCggXCI6ZGlzYWJsZWRcIiApLmxlbmd0aCAhPT0gMiApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTUgLSAxOCtcblx0XHQvLyBJRSAxMS9FZGdlIGRvbid0IGZpbmQgZWxlbWVudHMgb24gYSBgW25hbWU9JyddYCBxdWVyeSBpbiBzb21lIGNhc2VzLlxuXHRcdC8vIEFkZGluZyBhIHRlbXBvcmFyeSBhdHRyaWJ1dGUgdG8gdGhlIGRvY3VtZW50IGJlZm9yZSB0aGUgc2VsZWN0aW9uIHdvcmtzXG5cdFx0Ly8gYXJvdW5kIHRoZSBpc3N1ZS5cblx0XHQvLyBJbnRlcmVzdGluZ2x5LCBJRSAxMCAmIG9sZGVyIGRvbid0IHNlZW0gdG8gaGF2ZSB0aGUgaXNzdWUuXG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblx0XHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcIlwiICk7XG5cdFx0ZWwuYXBwZW5kQ2hpbGQoIGlucHV0ICk7XG5cdFx0aWYgKCAhZWwucXVlcnlTZWxlY3RvckFsbCggXCJbbmFtZT0nJ11cIiApLmxlbmd0aCApIHtcblx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqbmFtZVwiICsgd2hpdGVzcGFjZSArIFwiKj1cIiArXG5cdFx0XHRcdHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIiApO1xuXHRcdH1cblx0fSApO1xuXG5cdGlmICggIXN1cHBvcnQuY3NzSGFzICkge1xuXG5cdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDEwNSAtIDExMCssIFNhZmFyaSAxNS40IC0gMTYuMytcblx0XHQvLyBPdXIgcmVndWxhciBgdHJ5LWNhdGNoYCBtZWNoYW5pc20gZmFpbHMgdG8gZGV0ZWN0IG5hdGl2ZWx5LXVuc3VwcG9ydGVkXG5cdFx0Ly8gcHNldWRvLWNsYXNzZXMgaW5zaWRlIGA6aGFzKClgIChzdWNoIGFzIGA6aGFzKDpjb250YWlucyhcIkZvb1wiKSlgKVxuXHRcdC8vIGluIGJyb3dzZXJzIHRoYXQgcGFyc2UgdGhlIGA6aGFzKClgIGFyZ3VtZW50IGFzIGEgZm9yZ2l2aW5nIHNlbGVjdG9yIGxpc3QuXG5cdFx0Ly8gaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL3NlbGVjdG9ycy8jcmVsYXRpb25hbCBub3cgcmVxdWlyZXMgdGhlIGFyZ3VtZW50XG5cdFx0Ly8gdG8gYmUgcGFyc2VkIHVuZm9yZ2l2aW5nbHksIGJ1dCBicm93c2VycyBoYXZlIG5vdCB5ZXQgZnVsbHkgYWRqdXN0ZWQuXG5cdFx0cmJ1Z2d5UVNBLnB1c2goIFwiOmhhc1wiICk7XG5cdH1cblxuXHRyYnVnZ3lRU0EgPSByYnVnZ3lRU0EubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneVFTQS5qb2luKCBcInxcIiApICk7XG5cblx0LyogU29ydGluZ1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gRG9jdW1lbnQgb3JkZXIgc29ydGluZ1xuXHRzb3J0T3JkZXIgPSBmdW5jdGlvbiggYSwgYiApIHtcblxuXHRcdC8vIEZsYWcgZm9yIGR1cGxpY2F0ZSByZW1vdmFsXG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdC8vIFNvcnQgb24gbWV0aG9kIGV4aXN0ZW5jZSBpZiBvbmx5IG9uZSBpbnB1dCBoYXMgY29tcGFyZURvY3VtZW50UG9zaXRpb25cblx0XHR2YXIgY29tcGFyZSA9ICFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIC0gIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247XG5cdFx0aWYgKCBjb21wYXJlICkge1xuXHRcdFx0cmV0dXJuIGNvbXBhcmU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuXHRcdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdFx0Y29tcGFyZSA9ICggYS5vd25lckRvY3VtZW50IHx8IGEgKSA9PSAoIGIub3duZXJEb2N1bWVudCB8fCBiICkgP1xuXHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYiApIDpcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG5cdFx0XHQxO1xuXG5cdFx0Ly8gRGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0aWYgKCBjb21wYXJlICYgMSB8fFxuXHRcdFx0KCAhc3VwcG9ydC5zb3J0RGV0YWNoZWQgJiYgYi5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYSApID09PSBjb21wYXJlICkgKSB7XG5cblx0XHRcdC8vIENob29zZSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGlzIHJlbGF0ZWQgdG8gb3VyIHByZWZlcnJlZCBkb2N1bWVudFxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdGlmICggYSA9PT0gZG9jdW1lbnQgfHwgYS5vd25lckRvY3VtZW50ID09IHByZWZlcnJlZERvYyAmJlxuXHRcdFx0XHRmaW5kLmNvbnRhaW5zKCBwcmVmZXJyZWREb2MsIGEgKSApIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSssIEVkZ2UgMTcgLSAxOCtcblx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGVxZXFlcVxuXHRcdFx0aWYgKCBiID09PSBkb2N1bWVudCB8fCBiLm93bmVyRG9jdW1lbnQgPT0gcHJlZmVycmVkRG9jICYmXG5cdFx0XHRcdGZpbmQuY29udGFpbnMoIHByZWZlcnJlZERvYywgYiApICkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFpbnRhaW4gb3JpZ2luYWwgb3JkZXJcblx0XHRcdHJldHVybiBzb3J0SW5wdXQgP1xuXHRcdFx0XHQoIGluZGV4T2YuY2FsbCggc29ydElucHV0LCBhICkgLSBpbmRleE9mLmNhbGwoIHNvcnRJbnB1dCwgYiApICkgOlxuXHRcdFx0XHQwO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wYXJlICYgNCA/IC0xIDogMTtcblx0fTtcblxuXHRyZXR1cm4gZG9jdW1lbnQ7XG59XG5cbmZpbmQubWF0Y2hlcyA9IGZ1bmN0aW9uKCBleHByLCBlbGVtZW50cyApIHtcblx0cmV0dXJuIGZpbmQoIGV4cHIsIG51bGwsIG51bGwsIGVsZW1lbnRzICk7XG59O1xuXG5maW5kLm1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uKCBlbGVtLCBleHByICkge1xuXHRzZXREb2N1bWVudCggZWxlbSApO1xuXG5cdGlmICggZG9jdW1lbnRJc0hUTUwgJiZcblx0XHQhbm9ubmF0aXZlU2VsZWN0b3JDYWNoZVsgZXhwciArIFwiIFwiIF0gJiZcblx0XHQoICFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBleHByICkgKSApIHtcblxuXHRcdHRyeSB7XG5cdFx0XHR2YXIgcmV0ID0gbWF0Y2hlcy5jYWxsKCBlbGVtLCBleHByICk7XG5cblx0XHRcdC8vIElFIDkncyBtYXRjaGVzU2VsZWN0b3IgcmV0dXJucyBmYWxzZSBvbiBkaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRcdGlmICggcmV0IHx8IHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggfHxcblxuXHRcdFx0XHRcdC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgaW4gSUUgOVxuXHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRub25uYXRpdmVTZWxlY3RvckNhY2hlKCBleHByLCB0cnVlICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGZpbmQoIGV4cHIsIGRvY3VtZW50LCBudWxsLCBbIGVsZW0gXSApLmxlbmd0aCA+IDA7XG59O1xuXG5maW5kLmNvbnRhaW5zID0gZnVuY3Rpb24oIGNvbnRleHQsIGVsZW0gKSB7XG5cblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdC8vIFN1cHBvcnQ6IElFIDExKywgRWRnZSAxNyAtIDE4K1xuXHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG5cdGlmICggKCBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCApICE9IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdH1cblx0cmV0dXJuIGpRdWVyeS5jb250YWlucyggY29udGV4dCwgZWxlbSApO1xufTtcblxuXG5maW5kLmF0dHIgPSBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblxuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT0gZG9jdW1lbnQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0fVxuXG5cdHZhciBmbiA9IEV4cHIuYXR0ckhhbmRsZVsgbmFtZS50b0xvd2VyQ2FzZSgpIF0sXG5cblx0XHQvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoc2VlIHRyYWMtMTM4MDcpXG5cdFx0dmFsID0gZm4gJiYgaGFzT3duLmNhbGwoIEV4cHIuYXR0ckhhbmRsZSwgbmFtZS50b0xvd2VyQ2FzZSgpICkgP1xuXHRcdFx0Zm4oIGVsZW0sIG5hbWUsICFkb2N1bWVudElzSFRNTCApIDpcblx0XHRcdHVuZGVmaW5lZDtcblxuXHRpZiAoIHZhbCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdHJldHVybiB2YWw7XG5cdH1cblxuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcbn07XG5cbmZpbmQuZXJyb3IgPSBmdW5jdGlvbiggbXNnICkge1xuXHR0aHJvdyBuZXcgRXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbn07XG5cbi8qKlxuICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAqL1xualF1ZXJ5LnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0dmFyIGVsZW0sXG5cdFx0ZHVwbGljYXRlcyA9IFtdLFxuXHRcdGogPSAwLFxuXHRcdGkgPSAwO1xuXG5cdC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2Vcblx0Ly9cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCtcblx0Ly8gVGVzdGluZyBmb3IgZGV0ZWN0aW5nIGR1cGxpY2F0ZXMgaXMgdW5wcmVkaWN0YWJsZSBzbyBpbnN0ZWFkIGFzc3VtZSB3ZSBjYW4ndFxuXHQvLyBkZXBlbmQgb24gZHVwbGljYXRlIGRldGVjdGlvbiBpbiBhbGwgYnJvd3NlcnMgd2l0aG91dCBhIHN0YWJsZSBzb3J0LlxuXHRoYXNEdXBsaWNhdGUgPSAhc3VwcG9ydC5zb3J0U3RhYmxlO1xuXHRzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHNsaWNlLmNhbGwoIHJlc3VsdHMsIDAgKTtcblx0c29ydC5jYWxsKCByZXN1bHRzLCBzb3J0T3JkZXIgKTtcblxuXHRpZiAoIGhhc0R1cGxpY2F0ZSApIHtcblx0XHR3aGlsZSAoICggZWxlbSA9IHJlc3VsdHNbIGkrKyBdICkgKSB7XG5cdFx0XHRpZiAoIGVsZW0gPT09IHJlc3VsdHNbIGkgXSApIHtcblx0XHRcdFx0aiA9IGR1cGxpY2F0ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdHNwbGljZS5jYWxsKCByZXN1bHRzLCBkdXBsaWNhdGVzWyBqIF0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvcHVsbC8yMjVcblx0c29ydElucHV0ID0gbnVsbDtcblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbmpRdWVyeS5mbi51bmlxdWVTb3J0ID0gZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5LnVuaXF1ZVNvcnQoIHNsaWNlLmFwcGx5KCB0aGlzICkgKSApO1xufTtcblxuRXhwciA9IGpRdWVyeS5leHByID0ge1xuXG5cdC8vIENhbiBiZSBhZGp1c3RlZCBieSB0aGUgdXNlclxuXHRjYWNoZUxlbmd0aDogNTAsXG5cblx0Y3JlYXRlUHNldWRvOiBtYXJrRnVuY3Rpb24sXG5cblx0bWF0Y2g6IG1hdGNoRXhwcixcblxuXHRhdHRySGFuZGxlOiB7fSxcblxuXHRmaW5kOiB7fSxcblxuXHRyZWxhdGl2ZToge1xuXHRcdFwiPlwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCIgXCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiB9LFxuXHRcdFwiK1wiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcIn5cIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIgfVxuXHR9LFxuXG5cdHByZUZpbHRlcjoge1xuXHRcdEFUVFI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdG1hdGNoWyAxIF0gPSBtYXRjaFsgMSBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cblx0XHRcdC8vIE1vdmUgdGhlIGdpdmVuIHZhbHVlIHRvIG1hdGNoWzNdIHdoZXRoZXIgcXVvdGVkIG9yIHVucXVvdGVkXG5cdFx0XHRtYXRjaFsgMyBdID0gKCBtYXRjaFsgMyBdIHx8IG1hdGNoWyA0IF0gfHwgbWF0Y2hbIDUgXSB8fCBcIlwiIClcblx0XHRcdFx0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cblx0XHRcdGlmICggbWF0Y2hbIDIgXSA9PT0gXCJ+PVwiICkge1xuXHRcdFx0XHRtYXRjaFsgMyBdID0gXCIgXCIgKyBtYXRjaFsgMyBdICsgXCIgXCI7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtYXRjaC5zbGljZSggMCwgNCApO1xuXHRcdH0sXG5cblx0XHRDSElMRDogZnVuY3Rpb24oIG1hdGNoICkge1xuXG5cdFx0XHQvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHRcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHRcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdFx0OCB5IG9mIHktY29tcG9uZW50XG5cdFx0XHQqL1xuXHRcdFx0bWF0Y2hbIDEgXSA9IG1hdGNoWyAxIF0udG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsgMSBdLnNsaWNlKCAwLCAzICkgPT09IFwibnRoXCIgKSB7XG5cblx0XHRcdFx0Ly8gbnRoLSogcmVxdWlyZXMgYXJndW1lbnRcblx0XHRcdFx0aWYgKCAhbWF0Y2hbIDMgXSApIHtcblx0XHRcdFx0XHRmaW5kLmVycm9yKCBtYXRjaFsgMCBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuXHRcdFx0XHRtYXRjaFsgNCBdID0gKyggbWF0Y2hbIDQgXSA/XG5cdFx0XHRcdFx0bWF0Y2hbIDUgXSArICggbWF0Y2hbIDYgXSB8fCAxICkgOlxuXHRcdFx0XHRcdDIgKiAoIG1hdGNoWyAzIF0gPT09IFwiZXZlblwiIHx8IG1hdGNoWyAzIF0gPT09IFwib2RkXCIgKVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRtYXRjaFsgNSBdID0gKyggKCBtYXRjaFsgNyBdICsgbWF0Y2hbIDggXSApIHx8IG1hdGNoWyAzIF0gPT09IFwib2RkXCIgKTtcblxuXHRcdFx0Ly8gb3RoZXIgdHlwZXMgcHJvaGliaXQgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFsgMyBdICkge1xuXHRcdFx0XHRmaW5kLmVycm9yKCBtYXRjaFsgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBtYXRjaDtcblx0XHR9LFxuXG5cdFx0UFNFVURPOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHR2YXIgZXhjZXNzLFxuXHRcdFx0XHR1bnF1b3RlZCA9ICFtYXRjaFsgNiBdICYmIG1hdGNoWyAyIF07XG5cblx0XHRcdGlmICggbWF0Y2hFeHByLkNISUxELnRlc3QoIG1hdGNoWyAwIF0gKSApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFjY2VwdCBxdW90ZWQgYXJndW1lbnRzIGFzLWlzXG5cdFx0XHRpZiAoIG1hdGNoWyAzIF0gKSB7XG5cdFx0XHRcdG1hdGNoWyAyIF0gPSBtYXRjaFsgNCBdIHx8IG1hdGNoWyA1IF0gfHwgXCJcIjtcblxuXHRcdFx0Ly8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCggdW5xdW90ZWQgKSAmJlxuXG5cdFx0XHRcdC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdCggZXhjZXNzID0gdG9rZW5pemUoIHVucXVvdGVkLCB0cnVlICkgKSAmJlxuXG5cdFx0XHRcdC8vIGFkdmFuY2UgdG8gdGhlIG5leHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuXHRcdFx0XHQoIGV4Y2VzcyA9IHVucXVvdGVkLmluZGV4T2YoIFwiKVwiLCB1bnF1b3RlZC5sZW5ndGggLSBleGNlc3MgKSAtIHVucXVvdGVkLmxlbmd0aCApICkge1xuXG5cdFx0XHRcdC8vIGV4Y2VzcyBpcyBhIG5lZ2F0aXZlIGluZGV4XG5cdFx0XHRcdG1hdGNoWyAwIF0gPSBtYXRjaFsgMCBdLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdFx0bWF0Y2hbIDIgXSA9IHVucXVvdGVkLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDMgKTtcblx0XHR9XG5cdH0sXG5cblx0ZmlsdGVyOiB7XG5cblx0XHRUQUc6IGZ1bmN0aW9uKCBub2RlTmFtZVNlbGVjdG9yICkge1xuXHRcdFx0dmFyIGV4cGVjdGVkTm9kZU5hbWUgPSBub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9IDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG5vZGVOYW1lKCBlbGVtLCBleHBlY3RlZE5vZGVOYW1lICk7XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdENMQVNTOiBmdW5jdGlvbiggY2xhc3NOYW1lICkge1xuXHRcdFx0dmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlWyBjbGFzc05hbWUgKyBcIiBcIiBdO1xuXG5cdFx0XHRyZXR1cm4gcGF0dGVybiB8fFxuXHRcdFx0XHQoIHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICtcblx0XHRcdFx0XHRcIihcIiArIHdoaXRlc3BhY2UgKyBcInwkKVwiICkgKSAmJlxuXHRcdFx0XHRjbGFzc0NhY2hlKCBjbGFzc05hbWUsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoXG5cdFx0XHRcdFx0XHR0eXBlb2YgZWxlbS5jbGFzc05hbWUgPT09IFwic3RyaW5nXCIgJiYgZWxlbS5jbGFzc05hbWUgfHxcblx0XHRcdFx0XHRcdFx0dHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlICE9PSBcInVuZGVmaW5lZFwiICYmXG5cdFx0XHRcdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8XG5cdFx0XHRcdFx0XHRcdFwiXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9ICk7XG5cdFx0fSxcblxuXHRcdEFUVFI6IGZ1bmN0aW9uKCBuYW1lLCBvcGVyYXRvciwgY2hlY2sgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciByZXN1bHQgPSBmaW5kLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PSBudWxsICkge1xuXHRcdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCIhPVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggIW9wZXJhdG9yICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0ICs9IFwiXCI7XG5cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCI9XCIgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdCA9PT0gY2hlY2s7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCIhPVwiICkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQgIT09IGNoZWNrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiXj1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPT09IDA7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCIqPVwiICkge1xuXHRcdFx0XHRcdHJldHVybiBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwiJD1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gY2hlY2sgJiYgcmVzdWx0LnNsaWNlKCAtY2hlY2subGVuZ3RoICkgPT09IGNoZWNrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggb3BlcmF0b3IgPT09IFwifj1cIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gKCBcIiBcIiArIHJlc3VsdC5yZXBsYWNlKCByd2hpdGVzcGFjZSwgXCIgXCIgKSArIFwiIFwiIClcblx0XHRcdFx0XHRcdC5pbmRleE9mKCBjaGVjayApID4gLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBvcGVyYXRvciA9PT0gXCJ8PVwiICkge1xuXHRcdFx0XHRcdHJldHVybiByZXN1bHQgPT09IGNoZWNrIHx8IHJlc3VsdC5zbGljZSggMCwgY2hlY2subGVuZ3RoICsgMSApID09PSBjaGVjayArIFwiLVwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0Q0hJTEQ6IGZ1bmN0aW9uKCB0eXBlLCB3aGF0LCBfYXJndW1lbnQsIGZpcnN0LCBsYXN0ICkge1xuXHRcdFx0dmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoIDAsIDMgKSAhPT0gXCJudGhcIixcblx0XHRcdFx0Zm9yd2FyZCA9IHR5cGUuc2xpY2UoIC00ICkgIT09IFwibGFzdFwiLFxuXHRcdFx0XHRvZlR5cGUgPSB3aGF0ID09PSBcIm9mLXR5cGVcIjtcblxuXHRcdFx0cmV0dXJuIGZpcnN0ID09PSAxICYmIGxhc3QgPT09IDAgP1xuXG5cdFx0XHRcdC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHR9IDpcblxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgX2NvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHR2YXIgY2FjaGUsIG91dGVyQ2FjaGUsIG5vZGUsIG5vZGVJbmRleCwgc3RhcnQsXG5cdFx0XHRcdFx0XHRkaXIgPSBzaW1wbGUgIT09IGZvcndhcmQgPyBcIm5leHRTaWJsaW5nXCIgOiBcInByZXZpb3VzU2libGluZ1wiLFxuXHRcdFx0XHRcdFx0cGFyZW50ID0gZWxlbS5wYXJlbnROb2RlLFxuXHRcdFx0XHRcdFx0bmFtZSA9IG9mVHlwZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCksXG5cdFx0XHRcdFx0XHR1c2VDYWNoZSA9ICF4bWwgJiYgIW9mVHlwZSxcblx0XHRcdFx0XHRcdGRpZmYgPSBmYWxzZTtcblxuXHRcdFx0XHRcdGlmICggcGFyZW50ICkge1xuXG5cdFx0XHRcdFx0XHQvLyA6KGZpcnN0fGxhc3R8b25seSktKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdFx0XHRpZiAoIHNpbXBsZSApIHtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCBkaXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bm9kZSA9IGVsZW07XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG5vZGUgPSBub2RlWyBkaXIgXSApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBvZlR5cGUgP1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlTmFtZSggbm9kZSwgbmFtZSApIDpcblx0XHRcdFx0XHRcdFx0XHRcdFx0bm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xuXG5cdFx0XHRcdFx0XHQvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXHRcdFx0XHRcdFx0aWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFNlZWsgYGVsZW1gIGZyb20gYSBwcmV2aW91c2x5LWNhY2hlZCBpbmRleFxuXHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gcGFyZW50WyBleHBhbmRvIF0gfHwgKCBwYXJlbnRbIGV4cGFuZG8gXSA9IHt9ICk7XG5cdFx0XHRcdFx0XHRcdGNhY2hlID0gb3V0ZXJDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVsgMCBdID09PSBkaXJydW5zICYmIGNhY2hlWyAxIF07XG5cdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXggJiYgY2FjaGVbIDIgXTtcblx0XHRcdFx0XHRcdFx0bm9kZSA9IG5vZGVJbmRleCAmJiBwYXJlbnQuY2hpbGROb2Rlc1sgbm9kZUluZGV4IF07XG5cblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBzZWVraW5nIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdCggZGlmZiA9IG5vZGVJbmRleCA9IDAgKSB8fCBzdGFydC5wb3AoKSApICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gV2hlbiBmb3VuZCwgY2FjaGUgaW5kZXhlcyBvbiBgcGFyZW50YCBhbmQgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKytkaWZmICYmIG5vZGUgPT09IGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIG5vZGVJbmRleCwgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVXNlIHByZXZpb3VzbHktY2FjaGVkIGVsZW1lbnQgaW5kZXggaWYgYXZhaWxhYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IGVsZW1bIGV4cGFuZG8gXSB8fCAoIGVsZW1bIGV4cGFuZG8gXSA9IHt9ICk7XG5cdFx0XHRcdFx0XHRcdFx0Y2FjaGUgPSBvdXRlckNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdFx0bm9kZUluZGV4ID0gY2FjaGVbIDAgXSA9PT0gZGlycnVucyAmJiBjYWNoZVsgMSBdO1xuXHRcdFx0XHRcdFx0XHRcdGRpZmYgPSBub2RlSW5kZXg7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pXG5cdFx0XHRcdFx0XHRcdC8vIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdFx0aWYgKCBkaWZmID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdFx0d2hpbGUgKCAoIG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHQoIGRpZmYgPSBub2RlSW5kZXggPSAwICkgfHwgc3RhcnQucG9wKCkgKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCAoIG9mVHlwZSA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdG5vZGVOYW1lKCBub2RlLCBuYW1lICkgOlxuXHRcdFx0XHRcdFx0XHRcdFx0XHRub2RlLm5vZGVUeXBlID09PSAxICkgJiZcblx0XHRcdFx0XHRcdFx0XHRcdFx0KytkaWZmICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIENhY2hlIHRoZSBpbmRleCBvZiBlYWNoIGVuY291bnRlcmVkIGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCB1c2VDYWNoZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gbm9kZVsgZXhwYW5kbyBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHQoIG5vZGVbIGV4cGFuZG8gXSA9IHt9ICk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZVsgdHlwZSBdID0gWyBkaXJydW5zLCBkaWZmIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUgPT09IGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSW5jb3Jwb3JhdGUgdGhlIG9mZnNldCwgdGhlbiBjaGVjayBhZ2FpbnN0IGN5Y2xlIHNpemVcblx0XHRcdFx0XHRcdGRpZmYgLT0gbGFzdDtcblx0XHRcdFx0XHRcdHJldHVybiBkaWZmID09PSBmaXJzdCB8fCAoIGRpZmYgJSBmaXJzdCA9PT0gMCAmJiBkaWZmIC8gZmlyc3QgPj0gMCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0UFNFVURPOiBmdW5jdGlvbiggcHNldWRvLCBhcmd1bWVudCApIHtcblxuXHRcdFx0Ly8gcHNldWRvLWNsYXNzIG5hbWVzIGFyZSBjYXNlLWluc2Vuc2l0aXZlXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNwc2V1ZG8tY2xhc3Nlc1xuXHRcdFx0Ly8gUHJpb3JpdGl6ZSBieSBjYXNlIHNlbnNpdGl2aXR5IGluIGNhc2UgY3VzdG9tIHBzZXVkb3MgYXJlIGFkZGVkIHdpdGggdXBwZXJjYXNlIGxldHRlcnNcblx0XHRcdC8vIFJlbWVtYmVyIHRoYXQgc2V0RmlsdGVycyBpbmhlcml0cyBmcm9tIHBzZXVkb3Ncblx0XHRcdHZhciBhcmdzLFxuXHRcdFx0XHRmbiA9IEV4cHIucHNldWRvc1sgcHNldWRvIF0gfHwgRXhwci5zZXRGaWx0ZXJzWyBwc2V1ZG8udG9Mb3dlckNhc2UoKSBdIHx8XG5cdFx0XHRcdFx0ZmluZC5lcnJvciggXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiICsgcHNldWRvICk7XG5cblx0XHRcdC8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcblx0XHRcdC8vIGFyZ3VtZW50cyBhcmUgbmVlZGVkIHRvIGNyZWF0ZSB0aGUgZmlsdGVyIGZ1bmN0aW9uXG5cdFx0XHQvLyBqdXN0IGFzIGpRdWVyeSBkb2VzXG5cdFx0XHRpZiAoIGZuWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdHJldHVybiBmbiggYXJndW1lbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQnV0IG1haW50YWluIHN1cHBvcnQgZm9yIG9sZCBzaWduYXR1cmVzXG5cdFx0XHRpZiAoIGZuLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdGFyZ3MgPSBbIHBzZXVkbywgcHNldWRvLCBcIlwiLCBhcmd1bWVudCBdO1xuXHRcdFx0XHRyZXR1cm4gRXhwci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KCBwc2V1ZG8udG9Mb3dlckNhc2UoKSApID9cblx0XHRcdFx0XHRtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0XHRcdFx0dmFyIGlkeCxcblx0XHRcdFx0XHRcdFx0bWF0Y2hlZCA9IGZuKCBzZWVkLCBhcmd1bWVudCApLFxuXHRcdFx0XHRcdFx0XHRpID0gbWF0Y2hlZC5sZW5ndGg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWR4ID0gaW5kZXhPZi5jYWxsKCBzZWVkLCBtYXRjaGVkWyBpIF0gKTtcblx0XHRcdFx0XHRcdFx0c2VlZFsgaWR4IF0gPSAhKCBtYXRjaGVzWyBpZHggXSA9IG1hdGNoZWRbIGkgXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gKSA6XG5cdFx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZm4oIGVsZW0sIDAsIGFyZ3MgKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm47XG5cdFx0fVxuXHR9LFxuXG5cdHBzZXVkb3M6IHtcblxuXHRcdC8vIFBvdGVudGlhbGx5IGNvbXBsZXggcHNldWRvc1xuXHRcdG5vdDogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cblx0XHRcdC8vIFRyaW0gdGhlIHNlbGVjdG9yIHBhc3NlZCB0byBjb21waWxlXG5cdFx0XHQvLyB0byBhdm9pZCB0cmVhdGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuXHRcdFx0Ly8gc3BhY2VzIGFzIGNvbWJpbmF0b3JzXG5cdFx0XHR2YXIgaW5wdXQgPSBbXSxcblx0XHRcdFx0cmVzdWx0cyA9IFtdLFxuXHRcdFx0XHRtYXRjaGVyID0gY29tcGlsZSggc2VsZWN0b3IucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApICk7XG5cblx0XHRcdHJldHVybiBtYXRjaGVyWyBleHBhbmRvIF0gP1xuXHRcdFx0XHRtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzLCBfY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHRcdFx0dW5tYXRjaGVkID0gbWF0Y2hlciggc2VlZCwgbnVsbCwgeG1sLCBbXSApLFxuXHRcdFx0XHRcdFx0aSA9IHNlZWQubGVuZ3RoO1xuXG5cdFx0XHRcdFx0Ly8gTWF0Y2ggZWxlbWVudHMgdW5tYXRjaGVkIGJ5IGBtYXRjaGVyYFxuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSB1bm1hdGNoZWRbIGkgXSApICkge1xuXHRcdFx0XHRcdFx0XHRzZWVkWyBpIF0gPSAhKCBtYXRjaGVzWyBpIF0gPSBlbGVtICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgX2NvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHRpbnB1dFsgMCBdID0gZWxlbTtcblx0XHRcdFx0XHRtYXRjaGVyKCBpbnB1dCwgbnVsbCwgeG1sLCByZXN1bHRzICk7XG5cblx0XHRcdFx0XHQvLyBEb24ndCBrZWVwIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0Ly8gKHNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9pc3N1ZXMvMjk5KVxuXHRcdFx0XHRcdGlucHV0WyAwIF0gPSBudWxsO1xuXHRcdFx0XHRcdHJldHVybiAhcmVzdWx0cy5wb3AoKTtcblx0XHRcdFx0fTtcblx0XHR9ICksXG5cblx0XHRoYXM6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gZmluZCggc2VsZWN0b3IsIGVsZW0gKS5sZW5ndGggPiAwO1xuXHRcdFx0fTtcblx0XHR9ICksXG5cblx0XHRjb250YWluczogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0udGV4dENvbnRlbnQgfHwgalF1ZXJ5LnRleHQoIGVsZW0gKSApLmluZGV4T2YoIHRleHQgKSA+IC0xO1xuXHRcdFx0fTtcblx0XHR9ICksXG5cblx0XHQvLyBcIldoZXRoZXIgYW4gZWxlbWVudCBpcyByZXByZXNlbnRlZCBieSBhIDpsYW5nKCkgc2VsZWN0b3Jcblx0XHQvLyBpcyBiYXNlZCBzb2xlbHkgb24gdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZVxuXHRcdC8vIGJlaW5nIGVxdWFsIHRvIHRoZSBpZGVudGlmaWVyIEMsXG5cdFx0Ly8gb3IgYmVnaW5uaW5nIHdpdGggdGhlIGlkZW50aWZpZXIgQyBpbW1lZGlhdGVseSBmb2xsb3dlZCBieSBcIi1cIi5cblx0XHQvLyBUaGUgbWF0Y2hpbmcgb2YgQyBhZ2FpbnN0IHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWUgaXMgcGVyZm9ybWVkIGNhc2UtaW5zZW5zaXRpdmVseS5cblx0XHQvLyBUaGUgaWRlbnRpZmllciBDIGRvZXMgbm90IGhhdmUgdG8gYmUgYSB2YWxpZCBsYW5ndWFnZSBuYW1lLlwiXG5cdFx0Ly8gaHR0cHM6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cblx0XHRsYW5nOiBtYXJrRnVuY3Rpb24oIGZ1bmN0aW9uKCBsYW5nICkge1xuXG5cdFx0XHQvLyBsYW5nIHZhbHVlIG11c3QgYmUgYSB2YWxpZCBpZGVudGlmaWVyXG5cdFx0XHRpZiAoICFyaWRlbnRpZmllci50ZXN0KCBsYW5nIHx8IFwiXCIgKSApIHtcblx0XHRcdFx0ZmluZC5lcnJvciggXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIiArIGxhbmcgKTtcblx0XHRcdH1cblx0XHRcdGxhbmcgPSBsYW5nLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIGVsZW1MYW5nO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0aWYgKCAoIGVsZW1MYW5nID0gZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0XHRcdFx0ZWxlbS5sYW5nIDpcblx0XHRcdFx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBcInhtbDpsYW5nXCIgKSB8fCBlbGVtLmdldEF0dHJpYnV0ZSggXCJsYW5nXCIgKSApICkge1xuXG5cdFx0XHRcdFx0XHRlbGVtTGFuZyA9IGVsZW1MYW5nLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbUxhbmcgPT09IGxhbmcgfHwgZWxlbUxhbmcuaW5kZXhPZiggbGFuZyArIFwiLVwiICkgPT09IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IHdoaWxlICggKCBlbGVtID0gZWxlbS5wYXJlbnROb2RlICkgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0gKSxcblxuXHRcdC8vIE1pc2NlbGxhbmVvdXNcblx0XHR0YXJnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0XHRyZXR1cm4gaGFzaCAmJiBoYXNoLnNsaWNlKCAxICkgPT09IGVsZW0uaWQ7XG5cdFx0fSxcblxuXHRcdHJvb3Q6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY3VtZW50RWxlbWVudDtcblx0XHR9LFxuXG5cdFx0Zm9jdXM6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IHNhZmVBY3RpdmVFbGVtZW50KCkgJiZcblx0XHRcdFx0ZG9jdW1lbnQuaGFzRm9jdXMoKSAmJlxuXHRcdFx0XHQhISggZWxlbS50eXBlIHx8IGVsZW0uaHJlZiB8fCB+ZWxlbS50YWJJbmRleCApO1xuXHRcdH0sXG5cblx0XHQvLyBCb29sZWFuIHByb3BlcnRpZXNcblx0XHRlbmFibGVkOiBjcmVhdGVEaXNhYmxlZFBzZXVkbyggZmFsc2UgKSxcblx0XHRkaXNhYmxlZDogY3JlYXRlRGlzYWJsZWRQc2V1ZG8oIHRydWUgKSxcblxuXHRcdGNoZWNrZWQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvLyBJbiBDU1MzLCA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIGJvdGggY2hlY2tlZCBhbmQgc2VsZWN0ZWQgZWxlbWVudHNcblx0XHRcdC8vIGh0dHBzOi8vd3d3LnczLm9yZy9UUi8yMDExL1JFQy1jc3MzLXNlbGVjdG9ycy0yMDExMDkyOS8jY2hlY2tlZFxuXHRcdFx0cmV0dXJuICggbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmICEhZWxlbS5jaGVja2VkICkgfHxcblx0XHRcdFx0KCBub2RlTmFtZSggZWxlbSwgXCJvcHRpb25cIiApICYmICEhZWxlbS5zZWxlY3RlZCApO1xuXHRcdH0sXG5cblx0XHRzZWxlY3RlZDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9MTErXG5cdFx0XHQvLyBBY2Nlc3NpbmcgdGhlIHNlbGVjdGVkSW5kZXggcHJvcGVydHlcblx0XHRcdC8vIGZvcmNlcyB0aGUgYnJvd3NlciB0byB0cmVhdCB0aGUgZGVmYXVsdCBvcHRpb24gYXNcblx0XHRcdC8vIHNlbGVjdGVkIHdoZW4gaW4gYW4gb3B0Z3JvdXAuXG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC1leHByZXNzaW9uc1xuXHRcdFx0XHRlbGVtLnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGVsZW0uc2VsZWN0ZWQgPT09IHRydWU7XG5cdFx0fSxcblxuXHRcdC8vIENvbnRlbnRzXG5cdFx0ZW1wdHk6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cblx0XHRcdC8vIDplbXB0eSBpcyBuZWdhdGVkIGJ5IGVsZW1lbnQgKDEpIG9yIGNvbnRlbnQgbm9kZXMgKHRleHQ6IDM7IGNkYXRhOiA0OyBlbnRpdHkgcmVmOiA1KSxcblx0XHRcdC8vICAgYnV0IG5vdCBieSBvdGhlcnMgKGNvbW1lbnQ6IDg7IHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb246IDc7IGV0Yy4pXG5cdFx0XHQvLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG5cdFx0XHRmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlIDwgNiApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICFFeHByLnBzZXVkb3MuZW1wdHkoIGVsZW0gKTtcblx0XHR9LFxuXG5cdFx0Ly8gRWxlbWVudC9pbnB1dCB0eXBlc1xuXHRcdGhlYWRlcjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmhlYWRlci50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdGlucHV0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiByaW5wdXRzLnRlc3QoIGVsZW0ubm9kZU5hbWUgKTtcblx0XHR9LFxuXG5cdFx0YnV0dG9uOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgJiYgZWxlbS50eXBlID09PSBcImJ1dHRvblwiIHx8XG5cdFx0XHRcdG5vZGVOYW1lKCBlbGVtLCBcImJ1dHRvblwiICk7XG5cdFx0fSxcblxuXHRcdHRleHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIGF0dHI7XG5cdFx0XHRyZXR1cm4gbm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICYmIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCIgJiZcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8MTAgb25seVxuXHRcdFx0XHQvLyBOZXcgSFRNTDUgYXR0cmlidXRlIHZhbHVlcyAoZS5nLiwgXCJzZWFyY2hcIikgYXBwZWFyXG5cdFx0XHRcdC8vIHdpdGggZWxlbS50eXBlID09PSBcInRleHRcIlxuXHRcdFx0XHQoICggYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKCBcInR5cGVcIiApICkgPT0gbnVsbCB8fFxuXHRcdFx0XHRcdGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIgKTtcblx0XHR9LFxuXG5cdFx0Ly8gUG9zaXRpb24taW4tY29sbGVjdGlvblxuXHRcdGZpcnN0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBbIDAgXTtcblx0XHR9ICksXG5cblx0XHRsYXN0OiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggX21hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIFsgbGVuZ3RoIC0gMSBdO1xuXHRcdH0gKSxcblxuXHRcdGVxOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggX21hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHJldHVybiBbIGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQgXTtcblx0XHR9ICksXG5cblx0XHRldmVuOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDA7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSApLFxuXG5cdFx0b2RkOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKCBmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDE7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSApLFxuXG5cdFx0bHQ6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHR2YXIgaTtcblxuXHRcdFx0aWYgKCBhcmd1bWVudCA8IDAgKSB7XG5cdFx0XHRcdGkgPSBhcmd1bWVudCArIGxlbmd0aDtcblx0XHRcdH0gZWxzZSBpZiAoIGFyZ3VtZW50ID4gbGVuZ3RoICkge1xuXHRcdFx0XHRpID0gbGVuZ3RoO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0aSA9IGFyZ3VtZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKCA7IC0taSA+PSAwOyApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSApLFxuXG5cdFx0Z3Q6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cdFx0XHRmb3IgKCA7ICsraSA8IGxlbmd0aDsgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0gKVxuXHR9XG59O1xuXG5FeHByLnBzZXVkb3MubnRoID0gRXhwci5wc2V1ZG9zLmVxO1xuXG4vLyBBZGQgYnV0dG9uL2lucHV0IHR5cGUgcHNldWRvc1xuZm9yICggaSBpbiB7IHJhZGlvOiB0cnVlLCBjaGVja2JveDogdHJ1ZSwgZmlsZTogdHJ1ZSwgcGFzc3dvcmQ6IHRydWUsIGltYWdlOiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlSW5wdXRQc2V1ZG8oIGkgKTtcbn1cbmZvciAoIGkgaW4geyBzdWJtaXQ6IHRydWUsIHJlc2V0OiB0cnVlIH0gKSB7XG5cdEV4cHIucHNldWRvc1sgaSBdID0gY3JlYXRlQnV0dG9uUHNldWRvKCBpICk7XG59XG5cbi8vIEVhc3kgQVBJIGZvciBjcmVhdGluZyBuZXcgc2V0RmlsdGVyc1xuZnVuY3Rpb24gc2V0RmlsdGVycygpIHt9XG5zZXRGaWx0ZXJzLnByb3RvdHlwZSA9IEV4cHIuZmlsdGVycyA9IEV4cHIucHNldWRvcztcbkV4cHIuc2V0RmlsdGVycyA9IG5ldyBzZXRGaWx0ZXJzKCk7XG5cbmZ1bmN0aW9uIHRva2VuaXplKCBzZWxlY3RvciwgcGFyc2VPbmx5ICkge1xuXHR2YXIgbWF0Y2hlZCwgbWF0Y2gsIHRva2VucywgdHlwZSxcblx0XHRzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxuXHRcdGNhY2hlZCA9IHRva2VuQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoIGNhY2hlZCApIHtcblx0XHRyZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSggMCApO1xuXHR9XG5cblx0c29GYXIgPSBzZWxlY3Rvcjtcblx0Z3JvdXBzID0gW107XG5cdHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcblxuXHR3aGlsZSAoIHNvRmFyICkge1xuXG5cdFx0Ly8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuXHRcdGlmICggIW1hdGNoZWQgfHwgKCBtYXRjaCA9IHJjb21tYS5leGVjKCBzb0ZhciApICkgKSB7XG5cdFx0XHRpZiAoIG1hdGNoICkge1xuXG5cdFx0XHRcdC8vIERvbid0IGNvbnN1bWUgdHJhaWxpbmcgY29tbWFzIGFzIHZhbGlkXG5cdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoWyAwIF0ubGVuZ3RoICkgfHwgc29GYXI7XG5cdFx0XHR9XG5cdFx0XHRncm91cHMucHVzaCggKCB0b2tlbnMgPSBbXSApICk7XG5cdFx0fVxuXG5cdFx0bWF0Y2hlZCA9IGZhbHNlO1xuXG5cdFx0Ly8gQ29tYmluYXRvcnNcblx0XHRpZiAoICggbWF0Y2ggPSBybGVhZGluZ0NvbWJpbmF0b3IuZXhlYyggc29GYXIgKSApICkge1xuXHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG5cdFx0XHR0b2tlbnMucHVzaCgge1xuXHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblxuXHRcdFx0XHQvLyBDYXN0IGRlc2NlbmRhbnQgY29tYmluYXRvcnMgdG8gc3BhY2Vcblx0XHRcdFx0dHlwZTogbWF0Y2hbIDAgXS5yZXBsYWNlKCBydHJpbUNTUywgXCIgXCIgKVxuXHRcdFx0fSApO1xuXHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcblx0XHR9XG5cblx0XHQvLyBGaWx0ZXJzXG5cdFx0Zm9yICggdHlwZSBpbiBFeHByLmZpbHRlciApIHtcblx0XHRcdGlmICggKCBtYXRjaCA9IG1hdGNoRXhwclsgdHlwZSBdLmV4ZWMoIHNvRmFyICkgKSAmJiAoICFwcmVGaWx0ZXJzWyB0eXBlIF0gfHxcblx0XHRcdFx0KCBtYXRjaCA9IHByZUZpbHRlcnNbIHR5cGUgXSggbWF0Y2ggKSApICkgKSB7XG5cdFx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0XHR0b2tlbnMucHVzaCgge1xuXHRcdFx0XHRcdHZhbHVlOiBtYXRjaGVkLFxuXHRcdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdFx0bWF0Y2hlczogbWF0Y2hcblx0XHRcdFx0fSApO1xuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIW1hdGNoZWQgKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgaW52YWxpZCBleGNlc3Ncblx0Ly8gaWYgd2UncmUganVzdCBwYXJzaW5nXG5cdC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3Igb3IgcmV0dXJuIHRva2Vuc1xuXHRpZiAoIHBhcnNlT25seSApIHtcblx0XHRyZXR1cm4gc29GYXIubGVuZ3RoO1xuXHR9XG5cblx0cmV0dXJuIHNvRmFyID9cblx0XHRmaW5kLmVycm9yKCBzZWxlY3RvciApIDpcblxuXHRcdC8vIENhY2hlIHRoZSB0b2tlbnNcblx0XHR0b2tlbkNhY2hlKCBzZWxlY3RvciwgZ3JvdXBzICkuc2xpY2UoIDAgKTtcbn1cblxuZnVuY3Rpb24gdG9TZWxlY3RvciggdG9rZW5zICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRzZWxlY3RvciA9IFwiXCI7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdHNlbGVjdG9yICs9IHRva2Vuc1sgaSBdLnZhbHVlO1xuXHR9XG5cdHJldHVybiBzZWxlY3Rvcjtcbn1cblxuZnVuY3Rpb24gYWRkQ29tYmluYXRvciggbWF0Y2hlciwgY29tYmluYXRvciwgYmFzZSApIHtcblx0dmFyIGRpciA9IGNvbWJpbmF0b3IuZGlyLFxuXHRcdHNraXAgPSBjb21iaW5hdG9yLm5leHQsXG5cdFx0a2V5ID0gc2tpcCB8fCBkaXIsXG5cdFx0Y2hlY2tOb25FbGVtZW50cyA9IGJhc2UgJiYga2V5ID09PSBcInBhcmVudE5vZGVcIixcblx0XHRkb25lTmFtZSA9IGRvbmUrKztcblxuXHRyZXR1cm4gY29tYmluYXRvci5maXJzdCA/XG5cblx0XHQvLyBDaGVjayBhZ2FpbnN0IGNsb3Nlc3QgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRcblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0d2hpbGUgKCAoIGVsZW0gPSBlbGVtWyBkaXIgXSApICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9IDpcblxuXHRcdC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgb2xkQ2FjaGUsIG91dGVyQ2FjaGUsXG5cdFx0XHRcdG5ld0NhY2hlID0gWyBkaXJydW5zLCBkb25lTmFtZSBdO1xuXG5cdFx0XHQvLyBXZSBjYW4ndCBzZXQgYXJiaXRyYXJ5IGRhdGEgb24gWE1MIG5vZGVzLCBzbyB0aGV5IGRvbid0IGJlbmVmaXQgZnJvbSBjb21iaW5hdG9yIGNhY2hpbmdcblx0XHRcdGlmICggeG1sICkge1xuXHRcdFx0XHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlICggKCBlbGVtID0gZWxlbVsgZGlyIF0gKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBleHBhbmRvIF0gfHwgKCBlbGVtWyBleHBhbmRvIF0gPSB7fSApO1xuXG5cdFx0XHRcdFx0XHRpZiAoIHNraXAgJiYgbm9kZU5hbWUoIGVsZW0sIHNraXAgKSApIHtcblx0XHRcdFx0XHRcdFx0ZWxlbSA9IGVsZW1bIGRpciBdIHx8IGVsZW07XG5cdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCAoIG9sZENhY2hlID0gb3V0ZXJDYWNoZVsga2V5IF0gKSAmJlxuXHRcdFx0XHRcdFx0XHRvbGRDYWNoZVsgMCBdID09PSBkaXJydW5zICYmIG9sZENhY2hlWyAxIF0gPT09IGRvbmVOYW1lICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEFzc2lnbiB0byBuZXdDYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdHJldHVybiAoIG5ld0NhY2hlWyAyIF0gPSBvbGRDYWNoZVsgMiBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJldXNlIG5ld2NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZVsga2V5IF0gPSBuZXdDYWNoZTtcblxuXHRcdFx0XHRcdFx0XHQvLyBBIG1hdGNoIG1lYW5zIHdlJ3JlIGRvbmU7IGEgZmFpbCBtZWFucyB3ZSBoYXZlIHRvIGtlZXAgY2hlY2tpbmdcblx0XHRcdFx0XHRcdFx0aWYgKCAoIG5ld0NhY2hlWyAyIF0gPSBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICkge1xuXHRyZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID4gMSA/XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggIW1hdGNoZXJzWyBpIF0oIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSA6XG5cdFx0bWF0Y2hlcnNbIDAgXTtcbn1cblxuZnVuY3Rpb24gbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IsIGNvbnRleHRzLCByZXN1bHRzICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gY29udGV4dHMubGVuZ3RoO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRmaW5kKCBzZWxlY3RvciwgY29udGV4dHNbIGkgXSwgcmVzdWx0cyApO1xuXHR9XG5cdHJldHVybiByZXN1bHRzO1xufVxuXG5mdW5jdGlvbiBjb25kZW5zZSggdW5tYXRjaGVkLCBtYXAsIGZpbHRlciwgY29udGV4dCwgeG1sICkge1xuXHR2YXIgZWxlbSxcblx0XHRuZXdVbm1hdGNoZWQgPSBbXSxcblx0XHRpID0gMCxcblx0XHRsZW4gPSB1bm1hdGNoZWQubGVuZ3RoLFxuXHRcdG1hcHBlZCA9IG1hcCAhPSBudWxsO1xuXG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdGlmICggKCBlbGVtID0gdW5tYXRjaGVkWyBpIF0gKSApIHtcblx0XHRcdGlmICggIWZpbHRlciB8fCBmaWx0ZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRuZXdVbm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRpZiAoIG1hcHBlZCApIHtcblx0XHRcdFx0XHRtYXAucHVzaCggaSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1VubWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gc2V0TWF0Y2hlciggcHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICkge1xuXHRpZiAoIHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuXHR9XG5cdGlmICggcG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlclsgZXhwYW5kbyBdICkge1xuXHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKTtcblx0fVxuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggc2VlZCwgcmVzdWx0cywgY29udGV4dCwgeG1sICkge1xuXHRcdHZhciB0ZW1wLCBpLCBlbGVtLCBtYXRjaGVyT3V0LFxuXHRcdFx0cHJlTWFwID0gW10sXG5cdFx0XHRwb3N0TWFwID0gW10sXG5cdFx0XHRwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBHZXQgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHNlZWQgb3IgY29udGV4dFxuXHRcdFx0ZWxlbXMgPSBzZWVkIHx8XG5cdFx0XHRcdG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yIHx8IFwiKlwiLFxuXHRcdFx0XHRcdGNvbnRleHQubm9kZVR5cGUgPyBbIGNvbnRleHQgXSA6IGNvbnRleHQsIFtdICksXG5cblx0XHRcdC8vIFByZWZpbHRlciB0byBnZXQgbWF0Y2hlciBpbnB1dCwgcHJlc2VydmluZyBhIG1hcCBmb3Igc2VlZC1yZXN1bHRzIHN5bmNocm9uaXphdGlvblxuXHRcdFx0bWF0Y2hlckluID0gcHJlRmlsdGVyICYmICggc2VlZCB8fCAhc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGNvbmRlbnNlKCBlbGVtcywgcHJlTWFwLCBwcmVGaWx0ZXIsIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0ZWxlbXM7XG5cblx0XHRpZiAoIG1hdGNoZXIgKSB7XG5cblx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyXG5cdFx0XHQvLyBvciBwcmVleGlzdGluZyByZXN1bHRzLFxuXHRcdFx0bWF0Y2hlck91dCA9IHBvc3RGaW5kZXIgfHwgKCBzZWVkID8gcHJlRmlsdGVyIDogcHJlZXhpc3RpbmcgfHwgcG9zdEZpbHRlciApID9cblxuXHRcdFx0XHQvLyAuLi5pbnRlcm1lZGlhdGUgcHJvY2Vzc2luZyBpcyBuZWNlc3Nhcnlcblx0XHRcdFx0W10gOlxuXG5cdFx0XHRcdC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuXHRcdFx0XHRyZXN1bHRzO1xuXG5cdFx0XHQvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXHRcdFx0bWF0Y2hlciggbWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlck91dCA9IG1hdGNoZXJJbjtcblx0XHR9XG5cblx0XHQvLyBBcHBseSBwb3N0RmlsdGVyXG5cdFx0aWYgKCBwb3N0RmlsdGVyICkge1xuXHRcdFx0dGVtcCA9IGNvbmRlbnNlKCBtYXRjaGVyT3V0LCBwb3N0TWFwICk7XG5cdFx0XHRwb3N0RmlsdGVyKCB0ZW1wLCBbXSwgY29udGV4dCwgeG1sICk7XG5cblx0XHRcdC8vIFVuLW1hdGNoIGZhaWxpbmcgZWxlbWVudHMgYnkgbW92aW5nIHRoZW0gYmFjayB0byBtYXRjaGVySW5cblx0XHRcdGkgPSB0ZW1wLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoICggZWxlbSA9IHRlbXBbIGkgXSApICkge1xuXHRcdFx0XHRcdG1hdGNoZXJPdXRbIHBvc3RNYXBbIGkgXSBdID0gISggbWF0Y2hlckluWyBwb3N0TWFwWyBpIF0gXSA9IGVsZW0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggc2VlZCApIHtcblx0XHRcdGlmICggcG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIgKSB7XG5cdFx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblxuXHRcdFx0XHRcdC8vIEdldCB0aGUgZmluYWwgbWF0Y2hlck91dCBieSBjb25kZW5zaW5nIHRoaXMgaW50ZXJtZWRpYXRlIGludG8gcG9zdEZpbmRlciBjb250ZXh0c1xuXHRcdFx0XHRcdHRlbXAgPSBbXTtcblx0XHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZWxlbSA9IG1hdGNoZXJPdXRbIGkgXSApICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXG5cdFx0XHRcdFx0XHRcdHRlbXAucHVzaCggKCBtYXRjaGVySW5bIGkgXSA9IGVsZW0gKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCAoIG1hdGNoZXJPdXQgPSBbXSApLCB0ZW1wLCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG5cdFx0XHRcdGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0aWYgKCAoIGVsZW0gPSBtYXRjaGVyT3V0WyBpIF0gKSAmJlxuXHRcdFx0XHRcdFx0KCB0ZW1wID0gcG9zdEZpbmRlciA/IGluZGV4T2YuY2FsbCggc2VlZCwgZWxlbSApIDogcHJlTWFwWyBpIF0gKSA+IC0xICkge1xuXG5cdFx0XHRcdFx0XHRzZWVkWyB0ZW1wIF0gPSAhKCByZXN1bHRzWyB0ZW1wIF0gPSBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlck91dCA9IGNvbmRlbnNlKFxuXHRcdFx0XHRtYXRjaGVyT3V0ID09PSByZXN1bHRzID9cblx0XHRcdFx0XHRtYXRjaGVyT3V0LnNwbGljZSggcHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoICkgOlxuXHRcdFx0XHRcdG1hdGNoZXJPdXRcblx0XHRcdCk7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgbWF0Y2hlck91dCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVyRnJvbVRva2VucyggdG9rZW5zICkge1xuXHR2YXIgY2hlY2tDb250ZXh0LCBtYXRjaGVyLCBqLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0bGVhZGluZ1JlbGF0aXZlID0gRXhwci5yZWxhdGl2ZVsgdG9rZW5zWyAwIF0udHlwZSBdLFxuXHRcdGltcGxpY2l0UmVsYXRpdmUgPSBsZWFkaW5nUmVsYXRpdmUgfHwgRXhwci5yZWxhdGl2ZVsgXCIgXCIgXSxcblx0XHRpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cblx0XHQvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuXHRcdG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCBjaGVja0NvbnRleHQsIGVsZW0gKSA+IC0xO1xuXHRcdH0sIGltcGxpY2l0UmVsYXRpdmUsIHRydWUgKSxcblx0XHRtYXRjaGVycyA9IFsgZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0XHQvLyBJRS9FZGdlIHNvbWV0aW1lcyB0aHJvdyBhIFwiUGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIHN0cmljdC1jb21wYXJpbmdcblx0XHRcdC8vIHR3byBkb2N1bWVudHM7IHNoYWxsb3cgY29tcGFyaXNvbnMgd29yay5cblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdHZhciByZXQgPSAoICFsZWFkaW5nUmVsYXRpdmUgJiYgKCB4bWwgfHwgY29udGV4dCAhPSBvdXRlcm1vc3RDb250ZXh0ICkgKSB8fCAoXG5cdFx0XHRcdCggY2hlY2tDb250ZXh0ID0gY29udGV4dCApLm5vZGVUeXBlID9cblx0XHRcdFx0XHRtYXRjaENvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0XHRtYXRjaEFueUNvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApICk7XG5cblx0XHRcdC8vIEF2b2lkIGhhbmdpbmcgb250byBlbGVtZW50XG5cdFx0XHQvLyAoc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvc2l6emxlL2lzc3Vlcy8yOTkpXG5cdFx0XHRjaGVja0NvbnRleHQgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IF07XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAoIG1hdGNoZXIgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbIGkgXS50eXBlIF0gKSApIHtcblx0XHRcdG1hdGNoZXJzID0gWyBhZGRDb21iaW5hdG9yKCBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSwgbWF0Y2hlciApIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXIgPSBFeHByLmZpbHRlclsgdG9rZW5zWyBpIF0udHlwZSBdLmFwcGx5KCBudWxsLCB0b2tlbnNbIGkgXS5tYXRjaGVzICk7XG5cblx0XHRcdC8vIFJldHVybiBzcGVjaWFsIHVwb24gc2VlaW5nIGEgcG9zaXRpb25hbCBtYXRjaGVyXG5cdFx0XHRpZiAoIG1hdGNoZXJbIGV4cGFuZG8gXSApIHtcblxuXHRcdFx0XHQvLyBGaW5kIHRoZSBuZXh0IHJlbGF0aXZlIG9wZXJhdG9yIChpZiBhbnkpIGZvciBwcm9wZXIgaGFuZGxpbmdcblx0XHRcdFx0aiA9ICsraTtcblx0XHRcdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyB0b2tlbnNbIGogXS50eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNldE1hdGNoZXIoXG5cdFx0XHRcdFx0aSA+IDEgJiYgZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksXG5cdFx0XHRcdFx0aSA+IDEgJiYgdG9TZWxlY3RvcihcblxuXHRcdFx0XHRcdFx0Ly8gSWYgdGhlIHByZWNlZGluZyB0b2tlbiB3YXMgYSBkZXNjZW5kYW50IGNvbWJpbmF0b3IsIGluc2VydCBhbiBpbXBsaWNpdCBhbnktZWxlbWVudCBgKmBcblx0XHRcdFx0XHRcdHRva2Vucy5zbGljZSggMCwgaSAtIDEgKVxuXHRcdFx0XHRcdFx0XHQuY29uY2F0KCB7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSApXG5cdFx0XHRcdFx0KS5yZXBsYWNlKCBydHJpbUNTUywgXCIkMVwiICksXG5cdFx0XHRcdFx0bWF0Y2hlcixcblx0XHRcdFx0XHRpIDwgaiAmJiBtYXRjaGVyRnJvbVRva2VucyggdG9rZW5zLnNsaWNlKCBpLCBqICkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIG1hdGNoZXJGcm9tVG9rZW5zKCAoIHRva2VucyA9IHRva2Vucy5zbGljZSggaiApICkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIHRvU2VsZWN0b3IoIHRva2VucyApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVycy5wdXNoKCBtYXRjaGVyICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XG5cdHZhciBieVNldCA9IHNldE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0YnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0c3VwZXJNYXRjaGVyID0gZnVuY3Rpb24oIHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0ICkge1xuXHRcdFx0dmFyIGVsZW0sIGosIG1hdGNoZXIsXG5cdFx0XHRcdG1hdGNoZWRDb3VudCA9IDAsXG5cdFx0XHRcdGkgPSBcIjBcIixcblx0XHRcdFx0dW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcblx0XHRcdFx0c2V0TWF0Y2hlZCA9IFtdLFxuXHRcdFx0XHRjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcblxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgRXhwci5maW5kLlRBRyggXCIqXCIsIG91dGVybW9zdCApLFxuXG5cdFx0XHRcdC8vIFVzZSBpbnRlZ2VyIGRpcnJ1bnMgaWZmIHRoaXMgaXMgdGhlIG91dGVybW9zdCBtYXRjaGVyXG5cdFx0XHRcdGRpcnJ1bnNVbmlxdWUgPSAoIGRpcnJ1bnMgKz0gY29udGV4dEJhY2t1cCA9PSBudWxsID8gMSA6IE1hdGgucmFuZG9tKCkgfHwgMC4xICksXG5cdFx0XHRcdGxlbiA9IGVsZW1zLmxlbmd0aDtcblxuXHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0XHRcdC8vIElFL0VkZ2Ugc29tZXRpbWVzIHRocm93IGEgXCJQZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gc3RyaWN0LWNvbXBhcmluZ1xuXHRcdFx0XHQvLyB0d28gZG9jdW1lbnRzOyBzaGFsbG93IGNvbXBhcmlzb25zIHdvcmsuXG5cdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgPT0gZG9jdW1lbnQgfHwgY29udGV4dCB8fCBvdXRlcm1vc3Q7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlbGVtZW50cyBwYXNzaW5nIGVsZW1lbnRNYXRjaGVycyBkaXJlY3RseSB0byByZXN1bHRzXG5cdFx0XHQvLyBTdXBwb3J0OiBpT1MgPD03IC0gOSBvbmx5XG5cdFx0XHQvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmdcblx0XHRcdC8vIGVsZW1lbnRzIGJ5IGlkLiAoc2VlIHRyYWMtMTQxNDIpXG5cdFx0XHRmb3IgKCA7IGkgIT09IGxlbiAmJiAoIGVsZW0gPSBlbGVtc1sgaSBdICkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGJ5RWxlbWVudCAmJiBlbGVtICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgMTErLCBFZGdlIDE3IC0gMTgrXG5cdFx0XHRcdFx0Ly8gSUUvRWRnZSBzb21ldGltZXMgdGhyb3cgYSBcIlBlcm1pc3Npb24gZGVuaWVkXCIgZXJyb3Igd2hlbiBzdHJpY3QtY29tcGFyaW5nXG5cdFx0XHRcdFx0Ly8gdHdvIGRvY3VtZW50czsgc2hhbGxvdyBjb21wYXJpc29ucyB3b3JrLlxuXHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBlcWVxZXFcblx0XHRcdFx0XHRpZiAoICFjb250ZXh0ICYmIGVsZW0ub3duZXJEb2N1bWVudCAhPSBkb2N1bWVudCApIHtcblx0XHRcdFx0XHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdFx0XHRcdFx0XHR4bWwgPSAhZG9jdW1lbnRJc0hUTUw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHdoaWxlICggKCBtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzWyBqKysgXSApICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0IHx8IGRvY3VtZW50LCB4bWwgKSApIHtcblx0XHRcdFx0XHRcdFx0cHVzaC5jYWxsKCByZXN1bHRzLCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRyYWNrIHVubWF0Y2hlZCBlbGVtZW50cyBmb3Igc2V0IGZpbHRlcnNcblx0XHRcdFx0aWYgKCBieVNldCApIHtcblxuXHRcdFx0XHRcdC8vIFRoZXkgd2lsbCBoYXZlIGdvbmUgdGhyb3VnaCBhbGwgcG9zc2libGUgbWF0Y2hlcnNcblx0XHRcdFx0XHRpZiAoICggZWxlbSA9ICFtYXRjaGVyICYmIGVsZW0gKSApIHtcblx0XHRcdFx0XHRcdG1hdGNoZWRDb3VudC0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3Rcblx0XHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBgaWAgaXMgbm93IHRoZSBjb3VudCBvZiBlbGVtZW50cyB2aXNpdGVkIGFib3ZlLCBhbmQgYWRkaW5nIGl0IHRvIGBtYXRjaGVkQ291bnRgXG5cdFx0XHQvLyBtYWtlcyB0aGUgbGF0dGVyIG5vbm5lZ2F0aXZlLlxuXHRcdFx0bWF0Y2hlZENvdW50ICs9IGk7XG5cblx0XHRcdC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuXHRcdFx0Ly8gTk9URTogVGhpcyBjYW4gYmUgc2tpcHBlZCBpZiB0aGVyZSBhcmUgbm8gdW5tYXRjaGVkIGVsZW1lbnRzIChpLmUuLCBgbWF0Y2hlZENvdW50YFxuXHRcdFx0Ly8gZXF1YWxzIGBpYCksIHVubGVzcyB3ZSBkaWRuJ3QgdmlzaXQgX2FueV8gZWxlbWVudHMgaW4gdGhlIGFib3ZlIGxvb3AgYmVjYXVzZSB3ZSBoYXZlXG5cdFx0XHQvLyBubyBlbGVtZW50IG1hdGNoZXJzIGFuZCBubyBzZWVkLlxuXHRcdFx0Ly8gSW5jcmVtZW50aW5nIGFuIGluaXRpYWxseS1zdHJpbmcgXCIwXCIgYGlgIGFsbG93cyBgaWAgdG8gcmVtYWluIGEgc3RyaW5nIG9ubHkgaW4gdGhhdFxuXHRcdFx0Ly8gY2FzZSwgd2hpY2ggd2lsbCByZXN1bHQgaW4gYSBcIjAwXCIgYG1hdGNoZWRDb3VudGAgdGhhdCBkaWZmZXJzIGZyb20gYGlgIGJ1dCBpcyBhbHNvXG5cdFx0XHQvLyBudW1lcmljYWxseSB6ZXJvLlxuXHRcdFx0aWYgKCBieVNldCAmJiBpICE9PSBtYXRjaGVkQ291bnQgKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoICggbWF0Y2hlciA9IHNldE1hdGNoZXJzWyBqKysgXSApICkge1xuXHRcdFx0XHRcdG1hdGNoZXIoIHVubWF0Y2hlZCwgc2V0TWF0Y2hlZCwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkQ291bnQgPiAwICkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggISggdW5tYXRjaGVkWyBpIF0gfHwgc2V0TWF0Y2hlZFsgaSBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TWF0Y2hlZFsgaSBdID0gcG9wLmNhbGwoIHJlc3VsdHMgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIERpc2NhcmQgaW5kZXggcGxhY2Vob2xkZXIgdmFsdWVzIHRvIGdldCBvbmx5IGFjdHVhbCBtYXRjaGVzXG5cdFx0XHRcdFx0c2V0TWF0Y2hlZCA9IGNvbmRlbnNlKCBzZXRNYXRjaGVkICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZGQgbWF0Y2hlcyB0byByZXN1bHRzXG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIHNldE1hdGNoZWQgKTtcblxuXHRcdFx0XHQvLyBTZWVkbGVzcyBzZXQgbWF0Y2hlcyBzdWNjZWVkaW5nIG11bHRpcGxlIHN1Y2Nlc3NmdWwgbWF0Y2hlcnMgc3RpcHVsYXRlIHNvcnRpbmdcblx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgJiYgIXNlZWQgJiYgc2V0TWF0Y2hlZC5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0KCBtYXRjaGVkQ291bnQgKyBzZXRNYXRjaGVycy5sZW5ndGggKSA+IDEgKSB7XG5cblx0XHRcdFx0XHRqUXVlcnkudW5pcXVlU29ydCggcmVzdWx0cyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIE92ZXJyaWRlIG1hbmlwdWxhdGlvbiBvZiBnbG9iYWxzIGJ5IG5lc3RlZCBtYXRjaGVyc1xuXHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHVubWF0Y2hlZDtcblx0XHR9O1xuXG5cdHJldHVybiBieVNldCA/XG5cdFx0bWFya0Z1bmN0aW9uKCBzdXBlck1hdGNoZXIgKSA6XG5cdFx0c3VwZXJNYXRjaGVyO1xufVxuXG5mdW5jdGlvbiBjb21waWxlKCBzZWxlY3RvciwgbWF0Y2ggLyogSW50ZXJuYWwgVXNlIE9ubHkgKi8gKSB7XG5cdHZhciBpLFxuXHRcdHNldE1hdGNoZXJzID0gW10sXG5cdFx0ZWxlbWVudE1hdGNoZXJzID0gW10sXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZVsgc2VsZWN0b3IgKyBcIiBcIiBdO1xuXG5cdGlmICggIWNhY2hlZCApIHtcblxuXHRcdC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuXHRcdGlmICggIW1hdGNoICkge1xuXHRcdFx0bWF0Y2ggPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0aSA9IG1hdGNoLmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKCBtYXRjaFsgaSBdICk7XG5cdFx0XHRpZiAoIGNhY2hlZFsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHRzZXRNYXRjaGVycy5wdXNoKCBjYWNoZWQgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnRNYXRjaGVycy5wdXNoKCBjYWNoZWQgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWNoZSB0aGUgY29tcGlsZWQgZnVuY3Rpb25cblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlKCBzZWxlY3Rvcixcblx0XHRcdG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApICk7XG5cblx0XHQvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cblx0XHRjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0fVxuXHRyZXR1cm4gY2FjaGVkO1xufVxuXG4vKipcbiAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggalF1ZXJ5J3MgY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIG9yIGEgcHJlLWNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBqUXVlcnkgc2VsZWN0b3IgY29tcGlsZVxuICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XG4gKi9cbmZ1bmN0aW9uIHNlbGVjdCggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBpLCB0b2tlbnMsIHRva2VuLCB0eXBlLCBmaW5kLFxuXHRcdGNvbXBpbGVkID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgc2VsZWN0b3IsXG5cdFx0bWF0Y2ggPSAhc2VlZCAmJiB0b2tlbml6ZSggKCBzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yICkgKTtcblxuXHRyZXN1bHRzID0gcmVzdWx0cyB8fCBbXTtcblxuXHQvLyBUcnkgdG8gbWluaW1pemUgb3BlcmF0aW9ucyBpZiB0aGVyZSBpcyBvbmx5IG9uZSBzZWxlY3RvciBpbiB0aGUgbGlzdCBhbmQgbm8gc2VlZFxuXHQvLyAodGhlIGxhdHRlciBvZiB3aGljaCBndWFyYW50ZWVzIHVzIGNvbnRleHQpXG5cdGlmICggbWF0Y2gubGVuZ3RoID09PSAxICkge1xuXG5cdFx0Ly8gUmVkdWNlIGNvbnRleHQgaWYgdGhlIGxlYWRpbmcgY29tcG91bmQgc2VsZWN0b3IgaXMgYW4gSURcblx0XHR0b2tlbnMgPSBtYXRjaFsgMCBdID0gbWF0Y2hbIDAgXS5zbGljZSggMCApO1xuXHRcdGlmICggdG9rZW5zLmxlbmd0aCA+IDIgJiYgKCB0b2tlbiA9IHRva2Vuc1sgMCBdICkudHlwZSA9PT0gXCJJRFwiICYmXG5cdFx0XHRcdGNvbnRleHQubm9kZVR5cGUgPT09IDkgJiYgZG9jdW1lbnRJc0hUTUwgJiYgRXhwci5yZWxhdGl2ZVsgdG9rZW5zWyAxIF0udHlwZSBdICkge1xuXG5cdFx0XHRjb250ZXh0ID0gKCBFeHByLmZpbmQuSUQoXG5cdFx0XHRcdHRva2VuLm1hdGNoZXNbIDAgXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLFxuXHRcdFx0XHRjb250ZXh0XG5cdFx0XHQpIHx8IFtdIClbIDAgXTtcblx0XHRcdGlmICggIWNvbnRleHQgKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHQvLyBQcmVjb21waWxlZCBtYXRjaGVycyB3aWxsIHN0aWxsIHZlcmlmeSBhbmNlc3RyeSwgc28gc3RlcCB1cCBhIGxldmVsXG5cdFx0XHR9IGVsc2UgaWYgKCBjb21waWxlZCApIHtcblx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSggdG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuXHRcdGkgPSBtYXRjaEV4cHIubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICkgPyAwIDogdG9rZW5zLmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHRva2VuID0gdG9rZW5zWyBpIF07XG5cblx0XHRcdC8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3Jcblx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgKCB0eXBlID0gdG9rZW4udHlwZSApIF0gKSB7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAoIGZpbmQgPSBFeHByLmZpbmRbIHR5cGUgXSApICkge1xuXG5cdFx0XHRcdC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuXHRcdFx0XHRpZiAoICggc2VlZCA9IGZpbmQoXG5cdFx0XHRcdFx0dG9rZW4ubWF0Y2hlc1sgMCBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXG5cdFx0XHRcdFx0cnNpYmxpbmcudGVzdCggdG9rZW5zWyAwIF0udHlwZSApICYmXG5cdFx0XHRcdFx0XHR0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHRcdFx0XHQpICkgKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBzZWVkIGlzIGVtcHR5IG9yIG5vIHRva2VucyByZW1haW4sIHdlIGNhbiByZXR1cm4gZWFybHlcblx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKCBpLCAxICk7XG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBzZWVkLmxlbmd0aCAmJiB0b1NlbGVjdG9yKCB0b2tlbnMgKTtcblx0XHRcdFx0XHRpZiAoICFzZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIHNlZWQgKTtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ29tcGlsZSBhbmQgZXhlY3V0ZSBhIGZpbHRlcmluZyBmdW5jdGlvbiBpZiBvbmUgaXMgbm90IHByb3ZpZGVkXG5cdC8vIFByb3ZpZGUgYG1hdGNoYCB0byBhdm9pZCByZXRva2VuaXphdGlvbiBpZiB3ZSBtb2RpZmllZCB0aGUgc2VsZWN0b3IgYWJvdmVcblx0KCBjb21waWxlZCB8fCBjb21waWxlKCBzZWxlY3RvciwgbWF0Y2ggKSApKFxuXHRcdHNlZWQsXG5cdFx0Y29udGV4dCxcblx0XHQhZG9jdW1lbnRJc0hUTUwsXG5cdFx0cmVzdWx0cyxcblx0XHQhY29udGV4dCB8fCByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XG5cdCk7XG5cdHJldHVybiByZXN1bHRzO1xufVxuXG4vLyBPbmUtdGltZSBhc3NpZ25tZW50c1xuXG4vLyBTdXBwb3J0OiBBbmRyb2lkIDw9NC4wIC0gNC4xK1xuLy8gU29ydCBzdGFiaWxpdHlcbnN1cHBvcnQuc29ydFN0YWJsZSA9IGV4cGFuZG8uc3BsaXQoIFwiXCIgKS5zb3J0KCBzb3J0T3JkZXIgKS5qb2luKCBcIlwiICkgPT09IGV4cGFuZG87XG5cbi8vIEluaXRpYWxpemUgYWdhaW5zdCB0aGUgZGVmYXVsdCBkb2N1bWVudFxuc2V0RG9jdW1lbnQoKTtcblxuLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCAtIDQuMStcbi8vIERldGFjaGVkIG5vZGVzIGNvbmZvdW5kaW5nbHkgZm9sbG93ICplYWNoIG90aGVyKlxuc3VwcG9ydC5zb3J0RGV0YWNoZWQgPSBhc3NlcnQoIGZ1bmN0aW9uKCBlbCApIHtcblxuXHQvLyBTaG91bGQgcmV0dXJuIDEsIGJ1dCByZXR1cm5zIDQgKGZvbGxvd2luZylcblx0cmV0dXJuIGVsLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImZpZWxkc2V0XCIgKSApICYgMTtcbn0gKTtcblxualF1ZXJ5LmZpbmQgPSBmaW5kO1xuXG4vLyBEZXByZWNhdGVkXG5qUXVlcnkuZXhwclsgXCI6XCIgXSA9IGpRdWVyeS5leHByLnBzZXVkb3M7XG5qUXVlcnkudW5pcXVlID0galF1ZXJ5LnVuaXF1ZVNvcnQ7XG5cbi8vIFRoZXNlIGhhdmUgYWx3YXlzIGJlZW4gcHJpdmF0ZSwgYnV0IHRoZXkgdXNlZCB0byBiZSBkb2N1bWVudGVkIGFzIHBhcnQgb2Zcbi8vIFNpenpsZSBzbyBsZXQncyBtYWludGFpbiB0aGVtIGZvciBub3cgZm9yIGJhY2t3YXJkcyBjb21wYXRpYmlsaXR5IHB1cnBvc2VzLlxuZmluZC5jb21waWxlID0gY29tcGlsZTtcbmZpbmQuc2VsZWN0ID0gc2VsZWN0O1xuZmluZC5zZXREb2N1bWVudCA9IHNldERvY3VtZW50O1xuZmluZC50b2tlbml6ZSA9IHRva2VuaXplO1xuXG5maW5kLmVzY2FwZSA9IGpRdWVyeS5lc2NhcGVTZWxlY3RvcjtcbmZpbmQuZ2V0VGV4dCA9IGpRdWVyeS50ZXh0O1xuZmluZC5pc1hNTCA9IGpRdWVyeS5pc1hNTERvYztcbmZpbmQuc2VsZWN0b3JzID0galF1ZXJ5LmV4cHI7XG5maW5kLnN1cHBvcnQgPSBqUXVlcnkuc3VwcG9ydDtcbmZpbmQudW5pcXVlU29ydCA9IGpRdWVyeS51bmlxdWVTb3J0O1xuXG5cdC8qIGVzbGludC1lbmFibGUgKi9cblxufSApKCk7XG5cblxudmFyIGRpciA9IGZ1bmN0aW9uKCBlbGVtLCBkaXIsIHVudGlsICkge1xuXHR2YXIgbWF0Y2hlZCA9IFtdLFxuXHRcdHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuXHR3aGlsZSAoICggZWxlbSA9IGVsZW1bIGRpciBdICkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSApIHtcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRpZiAoIHRydW5jYXRlICYmIGpRdWVyeSggZWxlbSApLmlzKCB1bnRpbCApICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdG1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gbWF0Y2hlZDtcbn07XG5cblxudmFyIHNpYmxpbmdzID0gZnVuY3Rpb24oIG4sIGVsZW0gKSB7XG5cdHZhciBtYXRjaGVkID0gW107XG5cblx0Zm9yICggOyBuOyBuID0gbi5uZXh0U2libGluZyApIHtcblx0XHRpZiAoIG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSApIHtcblx0XHRcdG1hdGNoZWQucHVzaCggbiApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBtYXRjaGVkO1xufTtcblxuXG52YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxudmFyIHJzaW5nbGVUYWcgPSAoIC9ePChbYS16XVteXFwvXFwwPjpcXHgyMFxcdFxcclxcblxcZl0qKVtcXHgyMFxcdFxcclxcblxcZl0qXFwvPz4oPzo8XFwvXFwxPnwpJC9pICk7XG5cblxuXG4vLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuZnVuY3Rpb24gd2lubm93KCBlbGVtZW50cywgcXVhbGlmaWVyLCBub3QgKSB7XG5cdGlmICggaXNGdW5jdGlvbiggcXVhbGlmaWVyICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHRyZXR1cm4gISFxdWFsaWZpZXIuY2FsbCggZWxlbSwgaSwgZWxlbSApICE9PSBub3Q7XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gU2luZ2xlIGVsZW1lbnRcblx0aWYgKCBxdWFsaWZpZXIubm9kZVR5cGUgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCBlbGVtID09PSBxdWFsaWZpZXIgKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEFycmF5bGlrZSBvZiBlbGVtZW50cyAoalF1ZXJ5LCBhcmd1bWVudHMsIEFycmF5KVxuXHRpZiAoIHR5cGVvZiBxdWFsaWZpZXIgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCBpbmRleE9mLmNhbGwoIHF1YWxpZmllciwgZWxlbSApID4gLTEgKSAhPT0gbm90O1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIEZpbHRlcmVkIGRpcmVjdGx5IGZvciBib3RoIHNpbXBsZSBhbmQgY29tcGxleCBzZWxlY3RvcnNcblx0cmV0dXJuIGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMsIG5vdCApO1xufVxuXG5qUXVlcnkuZmlsdGVyID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1zLCBub3QgKSB7XG5cdHZhciBlbGVtID0gZWxlbXNbIDAgXTtcblxuXHRpZiAoIG5vdCApIHtcblx0XHRleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuXHR9XG5cblx0aWYgKCBlbGVtcy5sZW5ndGggPT09IDEgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBlbGVtLCBleHByICkgPyBbIGVsZW0gXSA6IFtdO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5maW5kLm1hdGNoZXMoIGV4cHIsIGpRdWVyeS5ncmVwKCBlbGVtcywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVR5cGUgPT09IDE7XG5cdH0gKSApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmaW5kOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGksIHJldCxcblx0XHRcdGxlbiA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0c2VsZiA9IHRoaXM7XG5cblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5KCBzZWxlY3RvciApLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHNlbGZbIGkgXSwgdGhpcyApICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICkgKTtcblx0XHR9XG5cblx0XHRyZXQgPSB0aGlzLnB1c2hTdGFjayggW10gKTtcblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRqUXVlcnkuZmluZCggc2VsZWN0b3IsIHNlbGZbIGkgXSwgcmV0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlU29ydCggcmV0ICkgOiByZXQ7XG5cdH0sXG5cdGZpbHRlcjogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KCB0aGlzLCBzZWxlY3RvciB8fCBbXSwgZmFsc2UgKSApO1xuXHR9LFxuXHRub3Q6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyggdGhpcywgc2VsZWN0b3IgfHwgW10sIHRydWUgKSApO1xuXHR9LFxuXHRpczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiAhIXdpbm5vdyhcblx0XHRcdHRoaXMsXG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBwb3NpdGlvbmFsL3JlbGF0aXZlIHNlbGVjdG9yLCBjaGVjayBtZW1iZXJzaGlwIGluIHRoZSByZXR1cm5lZCBzZXRcblx0XHRcdC8vIHNvICQoXCJwOmZpcnN0XCIpLmlzKFwicDpsYXN0XCIpIHdvbid0IHJldHVybiB0cnVlIGZvciBhIGRvYyB3aXRoIHR3byBcInBcIi5cblx0XHRcdHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiAmJiBybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICkgP1xuXHRcdFx0XHRqUXVlcnkoIHNlbGVjdG9yICkgOlxuXHRcdFx0XHRzZWxlY3RvciB8fCBbXSxcblx0XHRcdGZhbHNlXG5cdFx0KS5sZW5ndGg7XG5cdH1cbn0gKTtcblxuXG4vLyBJbml0aWFsaXplIGEgalF1ZXJ5IG9iamVjdFxuXG5cbi8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxudmFyIHJvb3RqUXVlcnksXG5cblx0Ly8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3Ncblx0Ly8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2ggKHRyYWMtOTUyMSlcblx0Ly8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKHRyYWMtMTEyOTA6IG11c3Qgc3RhcnQgd2l0aCA8KVxuXHQvLyBTaG9ydGN1dCBzaW1wbGUgI2lkIGNhc2UgZm9yIHNwZWVkXG5cdHJxdWlja0V4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0rKSkkLyxcblxuXHRpbml0ID0galF1ZXJ5LmZuLmluaXQgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQsIHJvb3QgKSB7XG5cdFx0dmFyIG1hdGNoLCBlbGVtO1xuXG5cdFx0Ly8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHQvLyBNZXRob2QgaW5pdCgpIGFjY2VwdHMgYW4gYWx0ZXJuYXRlIHJvb3RqUXVlcnlcblx0XHQvLyBzbyBtaWdyYXRlIGNhbiBzdXBwb3J0IGpRdWVyeS5zdWIgKGdoLTIxMDEpXG5cdFx0cm9vdCA9IHJvb3QgfHwgcm9vdGpRdWVyeTtcblxuXHRcdC8vIEhhbmRsZSBIVE1MIHN0cmluZ3Ncblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGlmICggc2VsZWN0b3JbIDAgXSA9PT0gXCI8XCIgJiZcblx0XHRcdFx0c2VsZWN0b3JbIHNlbGVjdG9yLmxlbmd0aCAtIDEgXSA9PT0gXCI+XCIgJiZcblx0XHRcdFx0c2VsZWN0b3IubGVuZ3RoID49IDMgKSB7XG5cblx0XHRcdFx0Ly8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcblx0XHRcdFx0bWF0Y2ggPSBbIG51bGwsIHNlbGVjdG9yLCBudWxsIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cdFx0XHRpZiAoIG1hdGNoICYmICggbWF0Y2hbIDEgXSB8fCAhY29udGV4dCApICkge1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJChodG1sKSAtPiAkKGFycmF5KVxuXHRcdFx0XHRpZiAoIG1hdGNoWyAxIF0gKSB7XG5cdFx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZXh0WyAwIF0gOiBjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gT3B0aW9uIHRvIHJ1biBzY3JpcHRzIGlzIHRydWUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdFx0Ly8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwoXG5cdFx0XHRcdFx0XHRtYXRjaFsgMSBdLFxuXHRcdFx0XHRcdFx0Y29udGV4dCAmJiBjb250ZXh0Lm5vZGVUeXBlID8gY29udGV4dC5vd25lckRvY3VtZW50IHx8IGNvbnRleHQgOiBkb2N1bWVudCxcblx0XHRcdFx0XHRcdHRydWVcblx0XHRcdFx0XHQpICk7XG5cblx0XHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCwgcHJvcHMpXG5cdFx0XHRcdFx0aWYgKCByc2luZ2xlVGFnLnRlc3QoIG1hdGNoWyAxIF0gKSAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29udGV4dCApICkge1xuXHRcdFx0XHRcdFx0Zm9yICggbWF0Y2ggaW4gY29udGV4dCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBQcm9wZXJ0aWVzIG9mIGNvbnRleHQgYXJlIGNhbGxlZCBhcyBtZXRob2RzIGlmIHBvc3NpYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggaXNGdW5jdGlvbiggdGhpc1sgbWF0Y2ggXSApICkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXNbIG1hdGNoIF0oIGNvbnRleHRbIG1hdGNoIF0gKTtcblxuXHRcdFx0XHRcdFx0XHQvLyAuLi5hbmQgb3RoZXJ3aXNlIHNldCBhcyBhdHRyaWJ1dGVzXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpcy5hdHRyKCBtYXRjaCwgY29udGV4dFsgbWF0Y2ggXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKCNpZClcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbGVtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIG1hdGNoWyAyIF0gKTtcblxuXHRcdFx0XHRcdGlmICggZWxlbSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSW5qZWN0IHRoZSBlbGVtZW50IGRpcmVjdGx5IGludG8gdGhlIGpRdWVyeSBvYmplY3Rcblx0XHRcdFx0XHRcdHRoaXNbIDAgXSA9IGVsZW07XG5cdFx0XHRcdFx0XHR0aGlzLmxlbmd0aCA9IDE7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCAkKC4uLikpXG5cdFx0XHR9IGVsc2UgaWYgKCAhY29udGV4dCB8fCBjb250ZXh0LmpxdWVyeSApIHtcblx0XHRcdFx0cmV0dXJuICggY29udGV4dCB8fCByb290ICkuZmluZCggc2VsZWN0b3IgKTtcblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsIGNvbnRleHQpXG5cdFx0XHQvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKCBjb250ZXh0ICkuZmluZCggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdC8vIEhBTkRMRTogJChET01FbGVtZW50KVxuXHRcdH0gZWxzZSBpZiAoIHNlbGVjdG9yLm5vZGVUeXBlICkge1xuXHRcdFx0dGhpc1sgMCBdID0gc2VsZWN0b3I7XG5cdFx0XHR0aGlzLmxlbmd0aCA9IDE7XG5cdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdC8vIEhBTkRMRTogJChmdW5jdGlvbilcblx0XHQvLyBTaG9ydGN1dCBmb3IgZG9jdW1lbnQgcmVhZHlcblx0XHR9IGVsc2UgaWYgKCBpc0Z1bmN0aW9uKCBzZWxlY3RvciApICkge1xuXHRcdFx0cmV0dXJuIHJvb3QucmVhZHkgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHJvb3QucmVhZHkoIHNlbGVjdG9yICkgOlxuXG5cdFx0XHRcdC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0c2VsZWN0b3IoIGpRdWVyeSApO1xuXHRcdH1cblxuXHRcdHJldHVybiBqUXVlcnkubWFrZUFycmF5KCBzZWxlY3RvciwgdGhpcyApO1xuXHR9O1xuXG4vLyBHaXZlIHRoZSBpbml0IGZ1bmN0aW9uIHRoZSBqUXVlcnkgcHJvdG90eXBlIGZvciBsYXRlciBpbnN0YW50aWF0aW9uXG5pbml0LnByb3RvdHlwZSA9IGpRdWVyeS5mbjtcblxuLy8gSW5pdGlhbGl6ZSBjZW50cmFsIHJlZmVyZW5jZVxucm9vdGpRdWVyeSA9IGpRdWVyeSggZG9jdW1lbnQgKTtcblxuXG52YXIgcnBhcmVudHNwcmV2ID0gL14oPzpwYXJlbnRzfHByZXYoPzpVbnRpbHxBbGwpKS8sXG5cblx0Ly8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcblx0Z3VhcmFudGVlZFVuaXF1ZSA9IHtcblx0XHRjaGlsZHJlbjogdHJ1ZSxcblx0XHRjb250ZW50czogdHJ1ZSxcblx0XHRuZXh0OiB0cnVlLFxuXHRcdHByZXY6IHRydWVcblx0fTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRoYXM6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdFx0dmFyIHRhcmdldHMgPSBqUXVlcnkoIHRhcmdldCwgdGhpcyApLFxuXHRcdFx0bCA9IHRhcmdldHMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHRoaXMsIHRhcmdldHNbIGkgXSApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGNsb3Nlc3Q6IGZ1bmN0aW9uKCBzZWxlY3RvcnMsIGNvbnRleHQgKSB7XG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0bWF0Y2hlZCA9IFtdLFxuXHRcdFx0dGFyZ2V0cyA9IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgJiYgalF1ZXJ5KCBzZWxlY3RvcnMgKTtcblxuXHRcdC8vIFBvc2l0aW9uYWwgc2VsZWN0b3JzIG5ldmVyIG1hdGNoLCBzaW5jZSB0aGVyZSdzIG5vIF9zZWxlY3Rpb25fIGNvbnRleHRcblx0XHRpZiAoICFybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9ycyApICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRmb3IgKCBjdXIgPSB0aGlzWyBpIF07IGN1ciAmJiBjdXIgIT09IGNvbnRleHQ7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXG5cdFx0XHRcdFx0Ly8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG5cdFx0XHRcdFx0aWYgKCBjdXIubm9kZVR5cGUgPCAxMSAmJiAoIHRhcmdldHMgP1xuXHRcdFx0XHRcdFx0dGFyZ2V0cy5pbmRleCggY3VyICkgPiAtMSA6XG5cblx0XHRcdFx0XHRcdC8vIERvbid0IHBhc3Mgbm9uLWVsZW1lbnRzIHRvIGpRdWVyeSNmaW5kXG5cdFx0XHRcdFx0XHRjdXIubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQubWF0Y2hlc1NlbGVjdG9yKCBjdXIsIHNlbGVjdG9ycyApICkgKSB7XG5cblx0XHRcdFx0XHRcdG1hdGNoZWQucHVzaCggY3VyICk7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWVTb3J0KCBtYXRjaGVkICkgOiBtYXRjaGVkICk7XG5cdH0sXG5cblx0Ly8gRGV0ZXJtaW5lIHRoZSBwb3NpdGlvbiBvZiBhbiBlbGVtZW50IHdpdGhpbiB0aGUgc2V0XG5cdGluZGV4OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIE5vIGFyZ3VtZW50LCByZXR1cm4gaW5kZXggaW4gcGFyZW50XG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybiAoIHRoaXNbIDAgXSAmJiB0aGlzWyAwIF0ucGFyZW50Tm9kZSApID8gdGhpcy5maXJzdCgpLnByZXZBbGwoKS5sZW5ndGggOiAtMTtcblx0XHR9XG5cblx0XHQvLyBJbmRleCBpbiBzZWxlY3RvclxuXHRcdGlmICggdHlwZW9mIGVsZW0gPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdGhpc1sgMCBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gTG9jYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZGVzaXJlZCBlbGVtZW50XG5cdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggdGhpcyxcblxuXHRcdFx0Ly8gSWYgaXQgcmVjZWl2ZXMgYSBqUXVlcnkgb2JqZWN0LCB0aGUgZmlyc3QgZWxlbWVudCBpcyB1c2VkXG5cdFx0XHRlbGVtLmpxdWVyeSA/IGVsZW1bIDAgXSA6IGVsZW1cblx0XHQpO1xuXHR9LFxuXG5cdGFkZDogZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayhcblx0XHRcdGpRdWVyeS51bmlxdWVTb3J0KFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMuZ2V0KCksIGpRdWVyeSggc2VsZWN0b3IsIGNvbnRleHQgKSApXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRhZGRCYWNrOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cblx0XHRcdHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoIHNlbGVjdG9yIClcblx0XHQpO1xuXHR9XG59ICk7XG5cbmZ1bmN0aW9uIHNpYmxpbmcoIGN1ciwgZGlyICkge1xuXHR3aGlsZSAoICggY3VyID0gY3VyWyBkaXIgXSApICYmIGN1ci5ub2RlVHlwZSAhPT0gMSApIHt9XG5cdHJldHVybiBjdXI7XG59XG5cbmpRdWVyeS5lYWNoKCB7XG5cdHBhcmVudDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRyZXR1cm4gcGFyZW50ICYmIHBhcmVudC5ub2RlVHlwZSAhPT0gMTEgPyBwYXJlbnQgOiBudWxsO1xuXHR9LFxuXHRwYXJlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiApO1xuXHR9LFxuXHRwYXJlbnRzVW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBfaSwgdW50aWwgKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIsIHVudGlsICk7XG5cdH0sXG5cdG5leHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIgKTtcblx0fSxcblx0bmV4dEFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXZBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIgKTtcblx0fSxcblx0bmV4dFVudGlsOiBmdW5jdGlvbiggZWxlbSwgX2ksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiwgdW50aWwgKTtcblx0fSxcblx0cHJldlVudGlsOiBmdW5jdGlvbiggZWxlbSwgX2ksIHVudGlsICkge1xuXHRcdHJldHVybiBkaXIoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHNpYmxpbmdzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZ3MoICggZWxlbS5wYXJlbnROb2RlIHx8IHt9ICkuZmlyc3RDaGlsZCwgZWxlbSApO1xuXHR9LFxuXHRjaGlsZHJlbjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmdzKCBlbGVtLmZpcnN0Q2hpbGQgKTtcblx0fSxcblx0Y29udGVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdGlmICggZWxlbS5jb250ZW50RG9jdW1lbnQgIT0gbnVsbCAmJlxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMStcblx0XHRcdC8vIDxvYmplY3Q+IGVsZW1lbnRzIHdpdGggbm8gYGRhdGFgIGF0dHJpYnV0ZSBoYXMgYW4gb2JqZWN0XG5cdFx0XHQvLyBgY29udGVudERvY3VtZW50YCB3aXRoIGEgYG51bGxgIHByb3RvdHlwZS5cblx0XHRcdGdldFByb3RvKCBlbGVtLmNvbnRlbnREb2N1bWVudCApICkge1xuXG5cdFx0XHRyZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQ7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHksIGlPUyA3IG9ubHksIEFuZHJvaWQgQnJvd3NlciA8PTQuMyBvbmx5XG5cdFx0Ly8gVHJlYXQgdGhlIHRlbXBsYXRlIGVsZW1lbnQgYXMgYSByZWd1bGFyIG9uZSBpbiBicm93c2VycyB0aGF0XG5cdFx0Ly8gZG9uJ3Qgc3VwcG9ydCBpdC5cblx0XHRpZiAoIG5vZGVOYW1lKCBlbGVtLCBcInRlbXBsYXRlXCIgKSApIHtcblx0XHRcdGVsZW0gPSBlbGVtLmNvbnRlbnQgfHwgZWxlbTtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5Lm1lcmdlKCBbXSwgZWxlbS5jaGlsZE5vZGVzICk7XG5cdH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBmbiApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggdW50aWwsIHNlbGVjdG9yICkge1xuXHRcdHZhciBtYXRjaGVkID0galF1ZXJ5Lm1hcCggdGhpcywgZm4sIHVudGlsICk7XG5cblx0XHRpZiAoIG5hbWUuc2xpY2UoIC01ICkgIT09IFwiVW50aWxcIiApIHtcblx0XHRcdHNlbGVjdG9yID0gdW50aWw7XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRtYXRjaGVkID0galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIG1hdGNoZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMubGVuZ3RoID4gMSApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIGR1cGxpY2F0ZXNcblx0XHRcdGlmICggIWd1YXJhbnRlZWRVbmlxdWVbIG5hbWUgXSApIHtcblx0XHRcdFx0alF1ZXJ5LnVuaXF1ZVNvcnQoIG1hdGNoZWQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcblx0XHRcdGlmICggcnBhcmVudHNwcmV2LnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdFx0bWF0Y2hlZC5yZXZlcnNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkICk7XG5cdH07XG59ICk7XG52YXIgcm5vdGh0bWx3aGl0ZSA9ICggL1teXFx4MjBcXHRcXHJcXG5cXGZdKy9nICk7XG5cblxuXG4vLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lc1xuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIHtcblx0dmFyIG9iamVjdCA9IHt9O1xuXHRqUXVlcnkuZWFjaCggb3B0aW9ucy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdLCBmdW5jdGlvbiggXywgZmxhZyApIHtcblx0XHRvYmplY3RbIGZsYWcgXSA9IHRydWU7XG5cdH0gKTtcblx0cmV0dXJuIG9iamVjdDtcbn1cblxuLypcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICpcbiAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAqXG4gKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gKlxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAqXG4gKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAqXG4gKi9cbmpRdWVyeS5DYWxsYmFja3MgPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHQvLyBDb252ZXJ0IG9wdGlvbnMgZnJvbSBTdHJpbmctZm9ybWF0dGVkIHRvIE9iamVjdC1mb3JtYXR0ZWQgaWYgbmVlZGVkXG5cdC8vICh3ZSBjaGVjayBpbiBjYWNoZSBmaXJzdClcblx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cblx0XHRjcmVhdGVPcHRpb25zKCBvcHRpb25zICkgOlxuXHRcdGpRdWVyeS5leHRlbmQoIHt9LCBvcHRpb25zICk7XG5cblx0dmFyIC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcblx0XHRmaXJpbmcsXG5cblx0XHQvLyBMYXN0IGZpcmUgdmFsdWUgZm9yIG5vbi1mb3JnZXR0YWJsZSBsaXN0c1xuXHRcdG1lbW9yeSxcblxuXHRcdC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IHdhcyBhbHJlYWR5IGZpcmVkXG5cdFx0ZmlyZWQsXG5cblx0XHQvLyBGbGFnIHRvIHByZXZlbnQgZmlyaW5nXG5cdFx0bG9ja2VkLFxuXG5cdFx0Ly8gQWN0dWFsIGNhbGxiYWNrIGxpc3Rcblx0XHRsaXN0ID0gW10sXG5cblx0XHQvLyBRdWV1ZSBvZiBleGVjdXRpb24gZGF0YSBmb3IgcmVwZWF0YWJsZSBsaXN0c1xuXHRcdHF1ZXVlID0gW10sXG5cblx0XHQvLyBJbmRleCBvZiBjdXJyZW50bHkgZmlyaW5nIGNhbGxiYWNrIChtb2RpZmllZCBieSBhZGQvcmVtb3ZlIGFzIG5lZWRlZClcblx0XHRmaXJpbmdJbmRleCA9IC0xLFxuXG5cdFx0Ly8gRmlyZSBjYWxsYmFja3Ncblx0XHRmaXJlID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEVuZm9yY2Ugc2luZ2xlLWZpcmluZ1xuXHRcdFx0bG9ja2VkID0gbG9ja2VkIHx8IG9wdGlvbnMub25jZTtcblxuXHRcdFx0Ly8gRXhlY3V0ZSBjYWxsYmFja3MgZm9yIGFsbCBwZW5kaW5nIGV4ZWN1dGlvbnMsXG5cdFx0XHQvLyByZXNwZWN0aW5nIGZpcmluZ0luZGV4IG92ZXJyaWRlcyBhbmQgcnVudGltZSBjaGFuZ2VzXG5cdFx0XHRmaXJlZCA9IGZpcmluZyA9IHRydWU7XG5cdFx0XHRmb3IgKCA7IHF1ZXVlLmxlbmd0aDsgZmlyaW5nSW5kZXggPSAtMSApIHtcblx0XHRcdFx0bWVtb3J5ID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdFx0d2hpbGUgKCArK2ZpcmluZ0luZGV4IDwgbGlzdC5sZW5ndGggKSB7XG5cblx0XHRcdFx0XHQvLyBSdW4gY2FsbGJhY2sgYW5kIGNoZWNrIGZvciBlYXJseSB0ZXJtaW5hdGlvblxuXHRcdFx0XHRcdGlmICggbGlzdFsgZmlyaW5nSW5kZXggXS5hcHBseSggbWVtb3J5WyAwIF0sIG1lbW9yeVsgMSBdICkgPT09IGZhbHNlICYmXG5cdFx0XHRcdFx0XHRvcHRpb25zLnN0b3BPbkZhbHNlICkge1xuXG5cdFx0XHRcdFx0XHQvLyBKdW1wIHRvIGVuZCBhbmQgZm9yZ2V0IHRoZSBkYXRhIHNvIC5hZGQgZG9lc24ndCByZS1maXJlXG5cdFx0XHRcdFx0XHRmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHRcdFx0bWVtb3J5ID0gZmFsc2U7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvcmdldCB0aGUgZGF0YSBpZiB3ZSdyZSBkb25lIHdpdGggaXRcblx0XHRcdGlmICggIW9wdGlvbnMubWVtb3J5ICkge1xuXHRcdFx0XHRtZW1vcnkgPSBmYWxzZTtcblx0XHRcdH1cblxuXHRcdFx0ZmlyaW5nID0gZmFsc2U7XG5cblx0XHRcdC8vIENsZWFuIHVwIGlmIHdlJ3JlIGRvbmUgZmlyaW5nIGZvciBnb29kXG5cdFx0XHRpZiAoIGxvY2tlZCApIHtcblxuXHRcdFx0XHQvLyBLZWVwIGFuIGVtcHR5IGxpc3QgaWYgd2UgaGF2ZSBkYXRhIGZvciBmdXR1cmUgYWRkIGNhbGxzXG5cdFx0XHRcdGlmICggbWVtb3J5ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UsIHRoaXMgb2JqZWN0IGlzIHNwZW50XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bGlzdCA9IFwiXCI7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gQWN0dWFsIENhbGxiYWNrcyBvYmplY3Rcblx0XHRzZWxmID0ge1xuXG5cdFx0XHQvLyBBZGQgYSBjYWxsYmFjayBvciBhIGNvbGxlY3Rpb24gb2YgY2FsbGJhY2tzIHRvIHRoZSBsaXN0XG5cdFx0XHRhZGQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGxpc3QgKSB7XG5cblx0XHRcdFx0XHQvLyBJZiB3ZSBoYXZlIG1lbW9yeSBmcm9tIGEgcGFzdCBydW4sIHdlIHNob3VsZCBmaXJlIGFmdGVyIGFkZGluZ1xuXHRcdFx0XHRcdGlmICggbWVtb3J5ICYmICFmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJpbmdJbmRleCA9IGxpc3QubGVuZ3RoIC0gMTtcblx0XHRcdFx0XHRcdHF1ZXVlLnB1c2goIG1lbW9yeSApO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdCggZnVuY3Rpb24gYWRkKCBhcmdzICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3MsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggaXNGdW5jdGlvbiggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCAhb3B0aW9ucy51bmlxdWUgfHwgIXNlbGYuaGFzKCBhcmcgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGxpc3QucHVzaCggYXJnICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBhcmcgJiYgYXJnLmxlbmd0aCAmJiB0b1R5cGUoIGFyZyApICE9PSBcInN0cmluZ1wiICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gSW5zcGVjdCByZWN1cnNpdmVseVxuXHRcdFx0XHRcdFx0XHRcdGFkZCggYXJnICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gKTtcblx0XHRcdFx0XHR9ICkoIGFyZ3VtZW50cyApO1xuXG5cdFx0XHRcdFx0aWYgKCBtZW1vcnkgJiYgIWZpcmluZyApIHtcblx0XHRcdFx0XHRcdGZpcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBSZW1vdmUgYSBjYWxsYmFjayBmcm9tIHRoZSBsaXN0XG5cdFx0XHRyZW1vdmU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkuZWFjaCggYXJndW1lbnRzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdHZhciBpbmRleDtcblx0XHRcdFx0XHR3aGlsZSAoICggaW5kZXggPSBqUXVlcnkuaW5BcnJheSggYXJnLCBsaXN0LCBpbmRleCApICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKCBpbmRleCwgMSApO1xuXG5cdFx0XHRcdFx0XHQvLyBIYW5kbGUgZmlyaW5nIGluZGV4ZXNcblx0XHRcdFx0XHRcdGlmICggaW5kZXggPD0gZmlyaW5nSW5kZXggKSB7XG5cdFx0XHRcdFx0XHRcdGZpcmluZ0luZGV4LS07XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9ICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSBnaXZlbiBjYWxsYmFjayBpcyBpbiB0aGUgbGlzdC5cblx0XHRcdC8vIElmIG5vIGFyZ3VtZW50IGlzIGdpdmVuLCByZXR1cm4gd2hldGhlciBvciBub3QgbGlzdCBoYXMgY2FsbGJhY2tzIGF0dGFjaGVkLlxuXHRcdFx0aGFzOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdHJldHVybiBmbiA/XG5cdFx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIGZuLCBsaXN0ICkgPiAtMSA6XG5cdFx0XHRcdFx0bGlzdC5sZW5ndGggPiAwO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBjYWxsYmFja3MgZnJvbSB0aGUgbGlzdFxuXHRcdFx0ZW1wdHk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGxpc3QgKSB7XG5cdFx0XHRcdFx0bGlzdCA9IFtdO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRGlzYWJsZSAuZmlyZSBhbmQgLmFkZFxuXHRcdFx0Ly8gQWJvcnQgYW55IGN1cnJlbnQvcGVuZGluZyBleGVjdXRpb25zXG5cdFx0XHQvLyBDbGVhciBhbGwgY2FsbGJhY2tzIGFuZCB2YWx1ZXNcblx0XHRcdGRpc2FibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsb2NrZWQgPSBxdWV1ZSA9IFtdO1xuXHRcdFx0XHRsaXN0ID0gbWVtb3J5ID0gXCJcIjtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0ZGlzYWJsZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gIWxpc3Q7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBEaXNhYmxlIC5maXJlXG5cdFx0XHQvLyBBbHNvIGRpc2FibGUgLmFkZCB1bmxlc3Mgd2UgaGF2ZSBtZW1vcnkgKHNpbmNlIGl0IHdvdWxkIGhhdmUgbm8gZWZmZWN0KVxuXHRcdFx0Ly8gQWJvcnQgYW55IHBlbmRpbmcgZXhlY3V0aW9uc1xuXHRcdFx0bG9jazogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxvY2tlZCA9IHF1ZXVlID0gW107XG5cdFx0XHRcdGlmICggIW1lbW9yeSAmJiAhZmlyaW5nICkge1xuXHRcdFx0XHRcdGxpc3QgPSBtZW1vcnkgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdGxvY2tlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhIWxvY2tlZDtcblx0XHRcdH0sXG5cblx0XHRcdC8vIENhbGwgYWxsIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBjb250ZXh0IGFuZCBhcmd1bWVudHNcblx0XHRcdGZpcmVXaXRoOiBmdW5jdGlvbiggY29udGV4dCwgYXJncyApIHtcblx0XHRcdFx0aWYgKCAhbG9ja2VkICkge1xuXHRcdFx0XHRcdGFyZ3MgPSBhcmdzIHx8IFtdO1xuXHRcdFx0XHRcdGFyZ3MgPSBbIGNvbnRleHQsIGFyZ3Muc2xpY2UgPyBhcmdzLnNsaWNlKCkgOiBhcmdzIF07XG5cdFx0XHRcdFx0cXVldWUucHVzaCggYXJncyApO1xuXHRcdFx0XHRcdGlmICggIWZpcmluZyApIHtcblx0XHRcdFx0XHRcdGZpcmUoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXG5cdFx0XHQvLyBDYWxsIGFsbCB0aGUgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuZmlyZVdpdGgoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cblx0XHRcdC8vIFRvIGtub3cgaWYgdGhlIGNhbGxiYWNrcyBoYXZlIGFscmVhZHkgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRcdFx0ZmlyZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFmaXJlZDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdHJldHVybiBzZWxmO1xufTtcblxuXG5mdW5jdGlvbiBJZGVudGl0eSggdiApIHtcblx0cmV0dXJuIHY7XG59XG5mdW5jdGlvbiBUaHJvd2VyKCBleCApIHtcblx0dGhyb3cgZXg7XG59XG5cbmZ1bmN0aW9uIGFkb3B0VmFsdWUoIHZhbHVlLCByZXNvbHZlLCByZWplY3QsIG5vVmFsdWUgKSB7XG5cdHZhciBtZXRob2Q7XG5cblx0dHJ5IHtcblxuXHRcdC8vIENoZWNrIGZvciBwcm9taXNlIGFzcGVjdCBmaXJzdCB0byBwcml2aWxlZ2Ugc3luY2hyb25vdXMgYmVoYXZpb3Jcblx0XHRpZiAoIHZhbHVlICYmIGlzRnVuY3Rpb24oICggbWV0aG9kID0gdmFsdWUucHJvbWlzZSApICkgKSB7XG5cdFx0XHRtZXRob2QuY2FsbCggdmFsdWUgKS5kb25lKCByZXNvbHZlICkuZmFpbCggcmVqZWN0ICk7XG5cblx0XHQvLyBPdGhlciB0aGVuYWJsZXNcblx0XHR9IGVsc2UgaWYgKCB2YWx1ZSAmJiBpc0Z1bmN0aW9uKCAoIG1ldGhvZCA9IHZhbHVlLnRoZW4gKSApICkge1xuXHRcdFx0bWV0aG9kLmNhbGwoIHZhbHVlLCByZXNvbHZlLCByZWplY3QgKTtcblxuXHRcdC8vIE90aGVyIG5vbi10aGVuYWJsZXNcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBDb250cm9sIGByZXNvbHZlYCBhcmd1bWVudHMgYnkgbGV0dGluZyBBcnJheSNzbGljZSBjYXN0IGJvb2xlYW4gYG5vVmFsdWVgIHRvIGludGVnZXI6XG5cdFx0XHQvLyAqIGZhbHNlOiBbIHZhbHVlIF0uc2xpY2UoIDAgKSA9PiByZXNvbHZlKCB2YWx1ZSApXG5cdFx0XHQvLyAqIHRydWU6IFsgdmFsdWUgXS5zbGljZSggMSApID0+IHJlc29sdmUoKVxuXHRcdFx0cmVzb2x2ZS5hcHBseSggdW5kZWZpbmVkLCBbIHZhbHVlIF0uc2xpY2UoIG5vVmFsdWUgKSApO1xuXHRcdH1cblxuXHQvLyBGb3IgUHJvbWlzZXMvQSssIGNvbnZlcnQgZXhjZXB0aW9ucyBpbnRvIHJlamVjdGlvbnNcblx0Ly8gU2luY2UgalF1ZXJ5LndoZW4gZG9lc24ndCB1bndyYXAgdGhlbmFibGVzLCB3ZSBjYW4gc2tpcCB0aGUgZXh0cmEgY2hlY2tzIGFwcGVhcmluZyBpblxuXHQvLyBEZWZlcnJlZCN0aGVuIHRvIGNvbmRpdGlvbmFsbHkgc3VwcHJlc3MgcmVqZWN0aW9uLlxuXHR9IGNhdGNoICggdmFsdWUgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCBvbmx5XG5cdFx0Ly8gU3RyaWN0IG1vZGUgZnVuY3Rpb25zIGludm9rZWQgd2l0aG91dCAuY2FsbC8uYXBwbHkgZ2V0IGdsb2JhbC1vYmplY3QgY29udGV4dFxuXHRcdHJlamVjdC5hcHBseSggdW5kZWZpbmVkLCBbIHZhbHVlIF0gKTtcblx0fVxufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cblx0RGVmZXJyZWQ6IGZ1bmN0aW9uKCBmdW5jICkge1xuXHRcdHZhciB0dXBsZXMgPSBbXG5cblx0XHRcdFx0Ly8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGNhbGxiYWNrcyxcblx0XHRcdFx0Ly8gLi4uIC50aGVuIGhhbmRsZXJzLCBhcmd1bWVudCBpbmRleCwgW2ZpbmFsIHN0YXRlXVxuXHRcdFx0XHRbIFwibm90aWZ5XCIsIFwicHJvZ3Jlc3NcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJtZW1vcnlcIiApLFxuXHRcdFx0XHRcdGpRdWVyeS5DYWxsYmFja3MoIFwibWVtb3J5XCIgKSwgMiBdLFxuXHRcdFx0XHRbIFwicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksXG5cdFx0XHRcdFx0alF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICksIDAsIFwicmVzb2x2ZWRcIiBdLFxuXHRcdFx0XHRbIFwicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSxcblx0XHRcdFx0XHRqUXVlcnkuQ2FsbGJhY2tzKCBcIm9uY2UgbWVtb3J5XCIgKSwgMSwgXCJyZWplY3RlZFwiIF1cblx0XHRcdF0sXG5cdFx0XHRzdGF0ZSA9IFwicGVuZGluZ1wiLFxuXHRcdFx0cHJvbWlzZSA9IHtcblx0XHRcdFx0c3RhdGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzdGF0ZTtcblx0XHRcdFx0fSxcblx0XHRcdFx0YWx3YXlzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5kb25lKCBhcmd1bWVudHMgKS5mYWlsKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblx0XHRcdFx0XCJjYXRjaFwiOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHByb21pc2UudGhlbiggbnVsbCwgZm4gKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdHBpcGU6IGZ1bmN0aW9uKCAvKiBmbkRvbmUsIGZuRmFpbCwgZm5Qcm9ncmVzcyAqLyApIHtcblx0XHRcdFx0XHR2YXIgZm5zID0gYXJndW1lbnRzO1xuXG5cdFx0XHRcdFx0cmV0dXJuIGpRdWVyeS5EZWZlcnJlZCggZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIF9pLCB0dXBsZSApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBNYXAgdHVwbGVzIChwcm9ncmVzcywgZG9uZSwgZmFpbCkgdG8gYXJndW1lbnRzIChkb25lLCBmYWlsLCBwcm9ncmVzcylcblx0XHRcdFx0XHRcdFx0dmFyIGZuID0gaXNGdW5jdGlvbiggZm5zWyB0dXBsZVsgNCBdIF0gKSAmJiBmbnNbIHR1cGxlWyA0IF0gXTtcblxuXHRcdFx0XHRcdFx0XHQvLyBkZWZlcnJlZC5wcm9ncmVzcyhmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5ub3RpZnkgfSlcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWQuZG9uZShmdW5jdGlvbigpIHsgYmluZCB0byBuZXdEZWZlciBvciBuZXdEZWZlci5yZXNvbHZlIH0pXG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkLmZhaWwoZnVuY3Rpb24oKSB7IGJpbmQgdG8gbmV3RGVmZXIgb3IgbmV3RGVmZXIucmVqZWN0IH0pXG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMSBdIF0oIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkICYmIGlzRnVuY3Rpb24oIHJldHVybmVkLnByb21pc2UgKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLnByb21pc2UoKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQucHJvZ3Jlc3MoIG5ld0RlZmVyLm5vdGlmeSApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5kb25lKCBuZXdEZWZlci5yZXNvbHZlIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmZhaWwoIG5ld0RlZmVyLnJlamVjdCApO1xuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlclsgdHVwbGVbIDAgXSArIFwiV2l0aFwiIF0oXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGZuID8gWyByZXR1cm5lZCBdIDogYXJndW1lbnRzXG5cdFx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0Zm5zID0gbnVsbDtcblx0XHRcdFx0XHR9ICkucHJvbWlzZSgpO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aGVuOiBmdW5jdGlvbiggb25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQsIG9uUHJvZ3Jlc3MgKSB7XG5cdFx0XHRcdFx0dmFyIG1heERlcHRoID0gMDtcblx0XHRcdFx0XHRmdW5jdGlvbiByZXNvbHZlKCBkZXB0aCwgZGVmZXJyZWQsIGhhbmRsZXIsIHNwZWNpYWwgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0aGF0ID0gdGhpcyxcblx0XHRcdFx0XHRcdFx0XHRhcmdzID0gYXJndW1lbnRzLFxuXHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3cgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCwgdGhlbjtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMy4zLjNcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgZG91YmxlLXJlc29sdXRpb24gYXR0ZW1wdHNcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggZGVwdGggPCBtYXhEZXB0aCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCA9IGhhbmRsZXIuYXBwbHkoIHRoYXQsIGFyZ3MgKTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuMVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNDhcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggcmV0dXJuZWQgPT09IGRlZmVycmVkLnByb21pc2UoKSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvciggXCJUaGVuYWJsZSBzZWxmLXJlc29sdXRpb25cIiApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9ucyAyLjMuMy4xLCAzLjVcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGh0dHBzOi8vcHJvbWlzZXNhcGx1cy5jb20vI3BvaW50LTU0XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC03NVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gUmV0cmlldmUgYHRoZW5gIG9ubHkgb25jZVxuXHRcdFx0XHRcdFx0XHRcdFx0dGhlbiA9IHJldHVybmVkICYmXG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUHJvbWlzZXMvQSsgc2VjdGlvbiAyLjMuNFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC02NFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IGNoZWNrIG9iamVjdHMgYW5kIGZ1bmN0aW9ucyBmb3IgdGhlbmFiaWxpdHlcblx0XHRcdFx0XHRcdFx0XHRcdFx0KCB0eXBlb2YgcmV0dXJuZWQgPT09IFwib2JqZWN0XCIgfHxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgcmV0dXJuZWQgPT09IFwiZnVuY3Rpb25cIiApICYmXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybmVkLnRoZW47XG5cblx0XHRcdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBhIHJldHVybmVkIHRoZW5hYmxlXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGlzRnVuY3Rpb24oIHRoZW4gKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTcGVjaWFsIHByb2Nlc3NvcnMgKG5vdGlmeSkganVzdCB3YWl0IGZvciByZXNvbHV0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICggc3BlY2lhbCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGVuLmNhbGwoXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgVGhyb3dlciwgc3BlY2lhbCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0KTtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBOb3JtYWwgcHJvY2Vzc29ycyAocmVzb2x2ZSkgYWxzbyBob29rIGludG8gcHJvZ3Jlc3Ncblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBkaXNyZWdhcmQgb2xkZXIgcmVzb2x1dGlvbiB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRtYXhEZXB0aCsrO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhlbi5jYWxsKFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIElkZW50aXR5LCBzcGVjaWFsICksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXNvbHZlKCBtYXhEZXB0aCwgZGVmZXJyZWQsIFRocm93ZXIsIHNwZWNpYWwgKSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHJlc29sdmUoIG1heERlcHRoLCBkZWZlcnJlZCwgSWRlbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlZmVycmVkLm5vdGlmeVdpdGggKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gSGFuZGxlIGFsbCBvdGhlciByZXR1cm5lZCB2YWx1ZXNcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBhbmQgbXVsdGlwbGUgdmFsdWVzIChub24tc3BlYyBiZWhhdmlvcilcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBoYW5kbGVyICE9PSBJZGVudGl0eSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGF0ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbIHJldHVybmVkIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBQcm9jZXNzIHRoZSB2YWx1ZShzKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBEZWZhdWx0IHByb2Nlc3MgaXMgcmVzb2x2ZVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQoIHNwZWNpYWwgfHwgZGVmZXJyZWQucmVzb2x2ZVdpdGggKSggdGhhdCwgYXJncyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPbmx5IG5vcm1hbCBwcm9jZXNzb3JzIChyZXNvbHZlKSBjYXRjaCBhbmQgcmVqZWN0IGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRwcm9jZXNzID0gc3BlY2lhbCA/XG5cdFx0XHRcdFx0XHRcdFx0XHRtaWdodFRocm93IDpcblx0XHRcdFx0XHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1pZ2h0VGhyb3coKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5EZWZlcnJlZC5leGNlcHRpb25Ib29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LkRlZmVycmVkLmV4Y2VwdGlvbkhvb2soIGUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHByb2Nlc3MuZXJyb3IgKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuNC4xXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gaHR0cHM6Ly9wcm9taXNlc2FwbHVzLmNvbS8jcG9pbnQtNjFcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBJZ25vcmUgcG9zdC1yZXNvbHV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGRlcHRoICsgMSA+PSBtYXhEZXB0aCApIHtcblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gT25seSBzdWJzdGl0dXRlIGhhbmRsZXJzIHBhc3Mgb24gY29udGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0Ly8gYW5kIG11bHRpcGxlIHZhbHVlcyAobm9uLXNwZWMgYmVoYXZpb3IpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoIGhhbmRsZXIgIT09IFRocm93ZXIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoYXQgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGFyZ3MgPSBbIGUgXTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggdGhhdCwgYXJncyApO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBQcm9taXNlcy9BKyBzZWN0aW9uIDIuMy4zLjMuMVxuXHRcdFx0XHRcdFx0XHQvLyBodHRwczovL3Byb21pc2VzYXBsdXMuY29tLyNwb2ludC01N1xuXHRcdFx0XHRcdFx0XHQvLyBSZS1yZXNvbHZlIHByb21pc2VzIGltbWVkaWF0ZWx5IHRvIGRvZGdlIGZhbHNlIHJlamVjdGlvbiBmcm9tXG5cdFx0XHRcdFx0XHRcdC8vIHN1YnNlcXVlbnQgZXJyb3JzXG5cdFx0XHRcdFx0XHRcdGlmICggZGVwdGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0cHJvY2VzcygpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ2FsbCBhbiBvcHRpb25hbCBob29rIHRvIHJlY29yZCB0aGUgZXJyb3IsIGluIGNhc2Ugb2YgZXhjZXB0aW9uXG5cdFx0XHRcdFx0XHRcdFx0Ly8gc2luY2UgaXQncyBvdGhlcndpc2UgbG9zdCB3aGVuIGV4ZWN1dGlvbiBnb2VzIGFzeW5jXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuRGVmZXJyZWQuZ2V0RXJyb3JIb29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5lcnJvciA9IGpRdWVyeS5EZWZlcnJlZC5nZXRFcnJvckhvb2soKTtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFRoZSBkZXByZWNhdGVkIGFsaWFzIG9mIHRoZSBhYm92ZS4gV2hpbGUgdGhlIG5hbWUgc3VnZ2VzdHNcblx0XHRcdFx0XHRcdFx0XHQvLyByZXR1cm5pbmcgdGhlIHN0YWNrLCBub3QgYW4gZXJyb3IgaW5zdGFuY2UsIGpRdWVyeSBqdXN0IHBhc3Nlc1xuXHRcdFx0XHRcdFx0XHRcdC8vIGl0IGRpcmVjdGx5IHRvIGBjb25zb2xlLndhcm5gIHNvIGJvdGggd2lsbCB3b3JrOyBhbiBpbnN0YW5jZVxuXHRcdFx0XHRcdFx0XHRcdC8vIGp1c3QgYmV0dGVyIGNvb3BlcmF0ZXMgd2l0aCBzb3VyY2UgbWFwcy5cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCBqUXVlcnkuRGVmZXJyZWQuZ2V0U3RhY2tIb29rICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cHJvY2Vzcy5lcnJvciA9IGpRdWVyeS5EZWZlcnJlZC5nZXRTdGFja0hvb2soKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LnNldFRpbWVvdXQoIHByb2Nlc3MgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKCBmdW5jdGlvbiggbmV3RGVmZXIgKSB7XG5cblx0XHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGdW5jdGlvbiggb25Qcm9ncmVzcyApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUHJvZ3Jlc3MgOlxuXHRcdFx0XHRcdFx0XHRcdFx0SWRlbnRpdHksXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIubm90aWZ5V2l0aFxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXG5cdFx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuYWRkKCAuLi4gKVxuXHRcdFx0XHRcdFx0dHVwbGVzWyAxIF1bIDMgXS5hZGQoXG5cdFx0XHRcdFx0XHRcdHJlc29sdmUoXG5cdFx0XHRcdFx0XHRcdFx0MCxcblx0XHRcdFx0XHRcdFx0XHRuZXdEZWZlcixcblx0XHRcdFx0XHRcdFx0XHRpc0Z1bmN0aW9uKCBvbkZ1bGZpbGxlZCApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uRnVsZmlsbGVkIDpcblx0XHRcdFx0XHRcdFx0XHRcdElkZW50aXR5XG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmFkZCggLi4uIClcblx0XHRcdFx0XHRcdHR1cGxlc1sgMiBdWyAzIF0uYWRkKFxuXHRcdFx0XHRcdFx0XHRyZXNvbHZlKFxuXHRcdFx0XHRcdFx0XHRcdDAsXG5cdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXIsXG5cdFx0XHRcdFx0XHRcdFx0aXNGdW5jdGlvbiggb25SZWplY3RlZCApID9cblx0XHRcdFx0XHRcdFx0XHRcdG9uUmVqZWN0ZWQgOlxuXHRcdFx0XHRcdFx0XHRcdFx0VGhyb3dlclxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0gKS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZCggb2JqLCBwcm9taXNlICkgOiBwcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVmZXJyZWQgPSB7fTtcblxuXHRcdC8vIEFkZCBsaXN0LXNwZWNpZmljIG1ldGhvZHNcblx0XHRqUXVlcnkuZWFjaCggdHVwbGVzLCBmdW5jdGlvbiggaSwgdHVwbGUgKSB7XG5cdFx0XHR2YXIgbGlzdCA9IHR1cGxlWyAyIF0sXG5cdFx0XHRcdHN0YXRlU3RyaW5nID0gdHVwbGVbIDUgXTtcblxuXHRcdFx0Ly8gcHJvbWlzZS5wcm9ncmVzcyA9IGxpc3QuYWRkXG5cdFx0XHQvLyBwcm9taXNlLmRvbmUgPSBsaXN0LmFkZFxuXHRcdFx0Ly8gcHJvbWlzZS5mYWlsID0gbGlzdC5hZGRcblx0XHRcdHByb21pc2VbIHR1cGxlWyAxIF0gXSA9IGxpc3QuYWRkO1xuXG5cdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdGlmICggc3RhdGVTdHJpbmcgKSB7XG5cdFx0XHRcdGxpc3QuYWRkKFxuXHRcdFx0XHRcdGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdFx0XHQvLyBzdGF0ZSA9IFwicmVzb2x2ZWRcIiAoaS5lLiwgZnVsZmlsbGVkKVxuXHRcdFx0XHRcdFx0Ly8gc3RhdGUgPSBcInJlamVjdGVkXCJcblx0XHRcdFx0XHRcdHN0YXRlID0gc3RhdGVTdHJpbmc7XG5cdFx0XHRcdFx0fSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0Ly8gZnVsZmlsbGVkX2NhbGxiYWNrcy5kaXNhYmxlXG5cdFx0XHRcdFx0dHVwbGVzWyAzIC0gaSBdWyAyIF0uZGlzYWJsZSxcblxuXHRcdFx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmRpc2FibGVcblx0XHRcdFx0XHQvLyBmdWxmaWxsZWRfaGFuZGxlcnMuZGlzYWJsZVxuXHRcdFx0XHRcdHR1cGxlc1sgMyAtIGkgXVsgMyBdLmRpc2FibGUsXG5cblx0XHRcdFx0XHQvLyBwcm9ncmVzc19jYWxsYmFja3MubG9ja1xuXHRcdFx0XHRcdHR1cGxlc1sgMCBdWyAyIF0ubG9jayxcblxuXHRcdFx0XHRcdC8vIHByb2dyZXNzX2hhbmRsZXJzLmxvY2tcblx0XHRcdFx0XHR0dXBsZXNbIDAgXVsgMyBdLmxvY2tcblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gcHJvZ3Jlc3NfaGFuZGxlcnMuZmlyZVxuXHRcdFx0Ly8gZnVsZmlsbGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdC8vIHJlamVjdGVkX2hhbmRsZXJzLmZpcmVcblx0XHRcdGxpc3QuYWRkKCB0dXBsZVsgMyBdLmZpcmUgKTtcblxuXHRcdFx0Ly8gZGVmZXJyZWQubm90aWZ5ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLm5vdGlmeVdpdGgoLi4uKSB9XG5cdFx0XHQvLyBkZWZlcnJlZC5yZXNvbHZlID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlc29sdmVXaXRoKC4uLikgfVxuXHRcdFx0Ly8gZGVmZXJyZWQucmVqZWN0ID0gZnVuY3Rpb24oKSB7IGRlZmVycmVkLnJlamVjdFdpdGgoLi4uKSB9XG5cdFx0XHRkZWZlcnJlZFsgdHVwbGVbIDAgXSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSggdGhpcyA9PT0gZGVmZXJyZWQgPyB1bmRlZmluZWQgOiB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9O1xuXG5cdFx0XHQvLyBkZWZlcnJlZC5ub3RpZnlXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0Ly8gZGVmZXJyZWQucmVzb2x2ZVdpdGggPSBsaXN0LmZpcmVXaXRoXG5cdFx0XHQvLyBkZWZlcnJlZC5yZWplY3RXaXRoID0gbGlzdC5maXJlV2l0aFxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdID0gbGlzdC5maXJlV2l0aDtcblx0XHR9ICk7XG5cblx0XHQvLyBNYWtlIHRoZSBkZWZlcnJlZCBhIHByb21pc2Vcblx0XHRwcm9taXNlLnByb21pc2UoIGRlZmVycmVkICk7XG5cblx0XHQvLyBDYWxsIGdpdmVuIGZ1bmMgaWYgYW55XG5cdFx0aWYgKCBmdW5jICkge1xuXHRcdFx0ZnVuYy5jYWxsKCBkZWZlcnJlZCwgZGVmZXJyZWQgKTtcblx0XHR9XG5cblx0XHQvLyBBbGwgZG9uZSFcblx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdH0sXG5cblx0Ly8gRGVmZXJyZWQgaGVscGVyXG5cdHdoZW46IGZ1bmN0aW9uKCBzaW5nbGVWYWx1ZSApIHtcblx0XHR2YXJcblxuXHRcdFx0Ly8gY291bnQgb2YgdW5jb21wbGV0ZWQgc3Vib3JkaW5hdGVzXG5cdFx0XHRyZW1haW5pbmcgPSBhcmd1bWVudHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBjb3VudCBvZiB1bnByb2Nlc3NlZCBhcmd1bWVudHNcblx0XHRcdGkgPSByZW1haW5pbmcsXG5cblx0XHRcdC8vIHN1Ym9yZGluYXRlIGZ1bGZpbGxtZW50IGRhdGFcblx0XHRcdHJlc29sdmVDb250ZXh0cyA9IEFycmF5KCBpICksXG5cdFx0XHRyZXNvbHZlVmFsdWVzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICksXG5cblx0XHRcdC8vIHRoZSBwcmltYXJ5IERlZmVycmVkXG5cdFx0XHRwcmltYXJ5ID0galF1ZXJ5LkRlZmVycmVkKCksXG5cblx0XHRcdC8vIHN1Ym9yZGluYXRlIGNhbGxiYWNrIGZhY3Rvcnlcblx0XHRcdHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXNvbHZlQ29udGV4dHNbIGkgXSA9IHRoaXM7XG5cdFx0XHRcdFx0cmVzb2x2ZVZhbHVlc1sgaSBdID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSA6IHZhbHVlO1xuXHRcdFx0XHRcdGlmICggISggLS1yZW1haW5pbmcgKSApIHtcblx0XHRcdFx0XHRcdHByaW1hcnkucmVzb2x2ZVdpdGgoIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH07XG5cblx0XHQvLyBTaW5nbGUtIGFuZCBlbXB0eSBhcmd1bWVudHMgYXJlIGFkb3B0ZWQgbGlrZSBQcm9taXNlLnJlc29sdmVcblx0XHRpZiAoIHJlbWFpbmluZyA8PSAxICkge1xuXHRcdFx0YWRvcHRWYWx1ZSggc2luZ2xlVmFsdWUsIHByaW1hcnkuZG9uZSggdXBkYXRlRnVuYyggaSApICkucmVzb2x2ZSwgcHJpbWFyeS5yZWplY3QsXG5cdFx0XHRcdCFyZW1haW5pbmcgKTtcblxuXHRcdFx0Ly8gVXNlIC50aGVuKCkgdG8gdW53cmFwIHNlY29uZGFyeSB0aGVuYWJsZXMgKGNmLiBnaC0zMDAwKVxuXHRcdFx0aWYgKCBwcmltYXJ5LnN0YXRlKCkgPT09IFwicGVuZGluZ1wiIHx8XG5cdFx0XHRcdGlzRnVuY3Rpb24oIHJlc29sdmVWYWx1ZXNbIGkgXSAmJiByZXNvbHZlVmFsdWVzWyBpIF0udGhlbiApICkge1xuXG5cdFx0XHRcdHJldHVybiBwcmltYXJ5LnRoZW4oKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBNdWx0aXBsZSBhcmd1bWVudHMgYXJlIGFnZ3JlZ2F0ZWQgbGlrZSBQcm9taXNlLmFsbCBhcnJheSBlbGVtZW50c1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0YWRvcHRWYWx1ZSggcmVzb2x2ZVZhbHVlc1sgaSBdLCB1cGRhdGVGdW5jKCBpICksIHByaW1hcnkucmVqZWN0ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHByaW1hcnkucHJvbWlzZSgpO1xuXHR9XG59ICk7XG5cblxuLy8gVGhlc2UgdXN1YWxseSBpbmRpY2F0ZSBhIHByb2dyYW1tZXIgbWlzdGFrZSBkdXJpbmcgZGV2ZWxvcG1lbnQsXG4vLyB3YXJuIGFib3V0IHRoZW0gQVNBUCByYXRoZXIgdGhhbiBzd2FsbG93aW5nIHRoZW0gYnkgZGVmYXVsdC5cbnZhciByZXJyb3JOYW1lcyA9IC9eKEV2YWx8SW50ZXJuYWx8UmFuZ2V8UmVmZXJlbmNlfFN5bnRheHxUeXBlfFVSSSlFcnJvciQvO1xuXG4vLyBJZiBgalF1ZXJ5LkRlZmVycmVkLmdldEVycm9ySG9va2AgaXMgZGVmaW5lZCwgYGFzeW5jRXJyb3JgIGlzIGFuIGVycm9yXG4vLyBjYXB0dXJlZCBiZWZvcmUgdGhlIGFzeW5jIGJhcnJpZXIgdG8gZ2V0IHRoZSBvcmlnaW5hbCBlcnJvciBjYXVzZVxuLy8gd2hpY2ggbWF5IG90aGVyd2lzZSBiZSBoaWRkZW4uXG5qUXVlcnkuRGVmZXJyZWQuZXhjZXB0aW9uSG9vayA9IGZ1bmN0aW9uKCBlcnJvciwgYXN5bmNFcnJvciApIHtcblxuXHQvLyBTdXBwb3J0OiBJRSA4IC0gOSBvbmx5XG5cdC8vIENvbnNvbGUgZXhpc3RzIHdoZW4gZGV2IHRvb2xzIGFyZSBvcGVuLCB3aGljaCBjYW4gaGFwcGVuIGF0IGFueSB0aW1lXG5cdGlmICggd2luZG93LmNvbnNvbGUgJiYgd2luZG93LmNvbnNvbGUud2FybiAmJiBlcnJvciAmJiByZXJyb3JOYW1lcy50ZXN0KCBlcnJvci5uYW1lICkgKSB7XG5cdFx0d2luZG93LmNvbnNvbGUud2FybiggXCJqUXVlcnkuRGVmZXJyZWQgZXhjZXB0aW9uOiBcIiArIGVycm9yLm1lc3NhZ2UsXG5cdFx0XHRlcnJvci5zdGFjaywgYXN5bmNFcnJvciApO1xuXHR9XG59O1xuXG5cblxuXG5qUXVlcnkucmVhZHlFeGNlcHRpb24gPSBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHR0aHJvdyBlcnJvcjtcblx0fSApO1xufTtcblxuXG5cblxuLy8gVGhlIGRlZmVycmVkIHVzZWQgb24gRE9NIHJlYWR5XG52YXIgcmVhZHlMaXN0ID0galF1ZXJ5LkRlZmVycmVkKCk7XG5cbmpRdWVyeS5mbi5yZWFkeSA9IGZ1bmN0aW9uKCBmbiApIHtcblxuXHRyZWFkeUxpc3Rcblx0XHQudGhlbiggZm4gKVxuXG5cdFx0Ly8gV3JhcCBqUXVlcnkucmVhZHlFeGNlcHRpb24gaW4gYSBmdW5jdGlvbiBzbyB0aGF0IHRoZSBsb29rdXBcblx0XHQvLyBoYXBwZW5zIGF0IHRoZSB0aW1lIG9mIGVycm9yIGhhbmRsaW5nIGluc3RlYWQgb2YgY2FsbGJhY2tcblx0XHQvLyByZWdpc3RyYXRpb24uXG5cdFx0LmNhdGNoKCBmdW5jdGlvbiggZXJyb3IgKSB7XG5cdFx0XHRqUXVlcnkucmVhZHlFeGNlcHRpb24oIGVycm9yICk7XG5cdFx0fSApO1xuXG5cdHJldHVybiB0aGlzO1xufTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIElzIHRoZSBET00gcmVhZHkgdG8gYmUgdXNlZD8gU2V0IHRvIHRydWUgb25jZSBpdCBvY2N1cnMuXG5cdGlzUmVhZHk6IGZhbHNlLFxuXG5cdC8vIEEgY291bnRlciB0byB0cmFjayBob3cgbWFueSBpdGVtcyB0byB3YWl0IGZvciBiZWZvcmVcblx0Ly8gdGhlIHJlYWR5IGV2ZW50IGZpcmVzLiBTZWUgdHJhYy02NzgxXG5cdHJlYWR5V2FpdDogMSxcblxuXHQvLyBIYW5kbGUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG5cdHJlYWR5OiBmdW5jdGlvbiggd2FpdCApIHtcblxuXHRcdC8vIEFib3J0IGlmIHRoZXJlIGFyZSBwZW5kaW5nIGhvbGRzIG9yIHdlJ3JlIGFscmVhZHkgcmVhZHlcblx0XHRpZiAoIHdhaXQgPT09IHRydWUgPyAtLWpRdWVyeS5yZWFkeVdhaXQgOiBqUXVlcnkuaXNSZWFkeSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZW1lbWJlciB0aGF0IHRoZSBET00gaXMgcmVhZHlcblx0XHRqUXVlcnkuaXNSZWFkeSA9IHRydWU7XG5cblx0XHQvLyBJZiBhIG5vcm1hbCBET00gUmVhZHkgZXZlbnQgZmlyZWQsIGRlY3JlbWVudCwgYW5kIHdhaXQgaWYgbmVlZCBiZVxuXHRcdGlmICggd2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlIGFyZSBmdW5jdGlvbnMgYm91bmQsIHRvIGV4ZWN1dGVcblx0XHRyZWFkeUxpc3QucmVzb2x2ZVdpdGgoIGRvY3VtZW50LCBbIGpRdWVyeSBdICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LnJlYWR5LnRoZW4gPSByZWFkeUxpc3QudGhlbjtcblxuLy8gVGhlIHJlYWR5IGV2ZW50IGhhbmRsZXIgYW5kIHNlbGYgY2xlYW51cCBtZXRob2RcbmZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCApO1xuXHR3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCApO1xuXHRqUXVlcnkucmVhZHkoKTtcbn1cblxuLy8gQ2F0Y2ggY2FzZXMgd2hlcmUgJChkb2N1bWVudCkucmVhZHkoKSBpcyBjYWxsZWRcbi8vIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxuLy8gU3VwcG9ydDogSUUgPD05IC0gMTAgb25seVxuLy8gT2xkZXIgSUUgc29tZXRpbWVzIHNpZ25hbHMgXCJpbnRlcmFjdGl2ZVwiIHRvbyBzb29uXG5pZiAoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiB8fFxuXHQoIGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwgKSApIHtcblxuXHQvLyBIYW5kbGUgaXQgYXN5bmNocm9ub3VzbHkgdG8gYWxsb3cgc2NyaXB0cyB0aGUgb3Bwb3J0dW5pdHkgdG8gZGVsYXkgcmVhZHlcblx0d2luZG93LnNldFRpbWVvdXQoIGpRdWVyeS5yZWFkeSApO1xuXG59IGVsc2Uge1xuXG5cdC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcblx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCApO1xuXG5cdC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkICk7XG59XG5cblxuXG5cbi8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuLy8gVGhlIHZhbHVlL3MgY2FuIG9wdGlvbmFsbHkgYmUgZXhlY3V0ZWQgaWYgaXQncyBhIGZ1bmN0aW9uXG52YXIgYWNjZXNzID0gZnVuY3Rpb24oIGVsZW1zLCBmbiwga2V5LCB2YWx1ZSwgY2hhaW5hYmxlLCBlbXB0eUdldCwgcmF3ICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gZWxlbXMubGVuZ3RoLFxuXHRcdGJ1bGsgPSBrZXkgPT0gbnVsbDtcblxuXHQvLyBTZXRzIG1hbnkgdmFsdWVzXG5cdGlmICggdG9UeXBlKCBrZXkgKSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXHRcdGZvciAoIGkgaW4ga2V5ICkge1xuXHRcdFx0YWNjZXNzKCBlbGVtcywgZm4sIGksIGtleVsgaSBdLCB0cnVlLCBlbXB0eUdldCwgcmF3ICk7XG5cdFx0fVxuXG5cdC8vIFNldHMgb25lIHZhbHVlXG5cdH0gZWxzZSBpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0Y2hhaW5hYmxlID0gdHJ1ZTtcblxuXHRcdGlmICggIWlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyYXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggYnVsayApIHtcblxuXHRcdFx0Ly8gQnVsayBvcGVyYXRpb25zIHJ1biBhZ2FpbnN0IHRoZSBlbnRpcmUgc2V0XG5cdFx0XHRpZiAoIHJhdyApIHtcblx0XHRcdFx0Zm4uY2FsbCggZWxlbXMsIHZhbHVlICk7XG5cdFx0XHRcdGZuID0gbnVsbDtcblxuXHRcdFx0Ly8gLi4uZXhjZXB0IHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uIHZhbHVlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnVsayA9IGZuO1xuXHRcdFx0XHRmbiA9IGZ1bmN0aW9uKCBlbGVtLCBfa2V5LCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnVsay5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdmFsdWUgKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGZuKFxuXHRcdFx0XHRcdGVsZW1zWyBpIF0sIGtleSwgcmF3ID9cblx0XHRcdFx0XHRcdHZhbHVlIDpcblx0XHRcdFx0XHRcdHZhbHVlLmNhbGwoIGVsZW1zWyBpIF0sIGksIGZuKCBlbGVtc1sgaSBdLCBrZXkgKSApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBjaGFpbmFibGUgKSB7XG5cdFx0cmV0dXJuIGVsZW1zO1xuXHR9XG5cblx0Ly8gR2V0c1xuXHRpZiAoIGJ1bGsgKSB7XG5cdFx0cmV0dXJuIGZuLmNhbGwoIGVsZW1zICk7XG5cdH1cblxuXHRyZXR1cm4gbGVuID8gZm4oIGVsZW1zWyAwIF0sIGtleSApIDogZW1wdHlHZXQ7XG59O1xuXG5cbi8vIE1hdGNoZXMgZGFzaGVkIHN0cmluZyBmb3IgY2FtZWxpemluZ1xudmFyIHJtc1ByZWZpeCA9IC9eLW1zLS8sXG5cdHJkYXNoQWxwaGEgPSAvLShbYS16XSkvZztcblxuLy8gVXNlZCBieSBjYW1lbENhc2UgYXMgY2FsbGJhY2sgdG8gcmVwbGFjZSgpXG5mdW5jdGlvbiBmY2FtZWxDYXNlKCBfYWxsLCBsZXR0ZXIgKSB7XG5cdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcbn1cblxuLy8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuLy8gU3VwcG9ydDogSUUgPD05IC0gMTEsIEVkZ2UgMTIgLSAxNVxuLy8gTWljcm9zb2Z0IGZvcmdvdCB0byBodW1wIHRoZWlyIHZlbmRvciBwcmVmaXggKHRyYWMtOTU3MilcbmZ1bmN0aW9uIGNhbWVsQ2FzZSggc3RyaW5nICkge1xuXHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoIHJtc1ByZWZpeCwgXCJtcy1cIiApLnJlcGxhY2UoIHJkYXNoQWxwaGEsIGZjYW1lbENhc2UgKTtcbn1cbnZhciBhY2NlcHREYXRhID0gZnVuY3Rpb24oIG93bmVyICkge1xuXG5cdC8vIEFjY2VwdHMgb25seTpcblx0Ly8gIC0gTm9kZVxuXHQvLyAgICAtIE5vZGUuRUxFTUVOVF9OT0RFXG5cdC8vICAgIC0gTm9kZS5ET0NVTUVOVF9OT0RFXG5cdC8vICAtIE9iamVjdFxuXHQvLyAgICAtIEFueVxuXHRyZXR1cm4gb3duZXIubm9kZVR5cGUgPT09IDEgfHwgb3duZXIubm9kZVR5cGUgPT09IDkgfHwgISggK293bmVyLm5vZGVUeXBlICk7XG59O1xuXG5cblxuXG5mdW5jdGlvbiBEYXRhKCkge1xuXHR0aGlzLmV4cGFuZG8gPSBqUXVlcnkuZXhwYW5kbyArIERhdGEudWlkKys7XG59XG5cbkRhdGEudWlkID0gMTtcblxuRGF0YS5wcm90b3R5cGUgPSB7XG5cblx0Y2FjaGU6IGZ1bmN0aW9uKCBvd25lciApIHtcblxuXHRcdC8vIENoZWNrIGlmIHRoZSBvd25lciBvYmplY3QgYWxyZWFkeSBoYXMgYSBjYWNoZVxuXHRcdHZhciB2YWx1ZSA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblxuXHRcdC8vIElmIG5vdCwgY3JlYXRlIG9uZVxuXHRcdGlmICggIXZhbHVlICkge1xuXHRcdFx0dmFsdWUgPSB7fTtcblxuXHRcdFx0Ly8gV2UgY2FuIGFjY2VwdCBkYXRhIGZvciBub24tZWxlbWVudCBub2RlcyBpbiBtb2Rlcm4gYnJvd3NlcnMsXG5cdFx0XHQvLyBidXQgd2Ugc2hvdWxkIG5vdCwgc2VlIHRyYWMtODMzNS5cblx0XHRcdC8vIEFsd2F5cyByZXR1cm4gYW4gZW1wdHkgb2JqZWN0LlxuXHRcdFx0aWYgKCBhY2NlcHREYXRhKCBvd25lciApICkge1xuXG5cdFx0XHRcdC8vIElmIGl0IGlzIGEgbm9kZSB1bmxpa2VseSB0byBiZSBzdHJpbmdpZnktZWQgb3IgbG9vcGVkIG92ZXJcblx0XHRcdFx0Ly8gdXNlIHBsYWluIGFzc2lnbm1lbnRcblx0XHRcdFx0aWYgKCBvd25lci5ub2RlVHlwZSApIHtcblx0XHRcdFx0XHRvd25lclsgdGhpcy5leHBhbmRvIF0gPSB2YWx1ZTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2Ugc2VjdXJlIGl0IGluIGEgbm9uLWVudW1lcmFibGUgcHJvcGVydHlcblx0XHRcdFx0Ly8gY29uZmlndXJhYmxlIG11c3QgYmUgdHJ1ZSB0byBhbGxvdyB0aGUgcHJvcGVydHkgdG8gYmVcblx0XHRcdFx0Ly8gZGVsZXRlZCB3aGVuIGRhdGEgaXMgcmVtb3ZlZFxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggb3duZXIsIHRoaXMuZXhwYW5kbywge1xuXHRcdFx0XHRcdFx0dmFsdWU6IHZhbHVlLFxuXHRcdFx0XHRcdFx0Y29uZmlndXJhYmxlOiB0cnVlXG5cdFx0XHRcdFx0fSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHZhbHVlO1xuXHR9LFxuXHRzZXQ6IGZ1bmN0aW9uKCBvd25lciwgZGF0YSwgdmFsdWUgKSB7XG5cdFx0dmFyIHByb3AsXG5cdFx0XHRjYWNoZSA9IHRoaXMuY2FjaGUoIG93bmVyICk7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIGtleSwgdmFsdWUgXSBhcmdzXG5cdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRjYWNoZVsgY2FtZWxDYXNlKCBkYXRhICkgXSA9IHZhbHVlO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCB7IHByb3BlcnRpZXMgfSBdIGFyZ3Ncblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBDb3B5IHRoZSBwcm9wZXJ0aWVzIG9uZS1ieS1vbmUgdG8gdGhlIGNhY2hlIG9iamVjdFxuXHRcdFx0Zm9yICggcHJvcCBpbiBkYXRhICkge1xuXHRcdFx0XHRjYWNoZVsgY2FtZWxDYXNlKCBwcm9wICkgXSA9IGRhdGFbIHByb3AgXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9LFxuXHRnZXQ6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHJldHVybiBrZXkgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzLmNhY2hlKCBvd25lciApIDpcblxuXHRcdFx0Ly8gQWx3YXlzIHVzZSBjYW1lbENhc2Uga2V5IChnaC0yMjU3KVxuXHRcdFx0b3duZXJbIHRoaXMuZXhwYW5kbyBdICYmIG93bmVyWyB0aGlzLmV4cGFuZG8gXVsgY2FtZWxDYXNlKCBrZXkgKSBdO1xuXHR9LFxuXHRhY2Nlc3M6IGZ1bmN0aW9uKCBvd25lciwga2V5LCB2YWx1ZSApIHtcblxuXHRcdC8vIEluIGNhc2VzIHdoZXJlIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcblx0XHQvLyAgIDIuIEEgc3RyaW5nIGtleSB3YXMgc3BlY2lmaWVkLCBidXQgbm8gdmFsdWUgcHJvdmlkZWRcblx0XHQvL1xuXHRcdC8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuXHRcdC8vIHdoaWNoIHZhbHVlIHRvIHJldHVybiwgcmVzcGVjdGl2ZWx5IGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3Rcblx0XHQvLyAgIDIuIFRoZSBkYXRhIHN0b3JlZCBhdCB0aGUga2V5XG5cdFx0Ly9cblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdCggKCBrZXkgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIiApICYmIHZhbHVlID09PSB1bmRlZmluZWQgKSApIHtcblxuXHRcdFx0cmV0dXJuIHRoaXMuZ2V0KCBvd25lciwga2V5ICk7XG5cdFx0fVxuXG5cdFx0Ly8gV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcblx0XHQvLyBhcmUgc3BlY2lmaWVkLCBzZXQgb3IgZXh0ZW5kIChleGlzdGluZyBvYmplY3RzKSB3aXRoIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcblx0XHQvLyAgIDIuIEEga2V5IGFuZCB2YWx1ZVxuXHRcdC8vXG5cdFx0dGhpcy5zZXQoIG93bmVyLCBrZXksIHZhbHVlICk7XG5cblx0XHQvLyBTaW5jZSB0aGUgXCJzZXRcIiBwYXRoIGNhbiBoYXZlIHR3byBwb3NzaWJsZSBlbnRyeSBwb2ludHNcblx0XHQvLyByZXR1cm4gdGhlIGV4cGVjdGVkIGRhdGEgYmFzZWQgb24gd2hpY2ggcGF0aCB3YXMgdGFrZW5bKl1cblx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHZhciBpLFxuXHRcdFx0Y2FjaGUgPSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cblx0XHRpZiAoIGNhY2hlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCBrZXkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0Ly8gU3VwcG9ydCBhcnJheSBvciBzcGFjZSBzZXBhcmF0ZWQgc3RyaW5nIG9mIGtleXNcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSgga2V5ICkgKSB7XG5cblx0XHRcdFx0Ly8gSWYga2V5IGlzIGFuIGFycmF5IG9mIGtleXMuLi5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIHNldCBjYW1lbENhc2Uga2V5cywgc28gcmVtb3ZlIHRoYXQuXG5cdFx0XHRcdGtleSA9IGtleS5tYXAoIGNhbWVsQ2FzZSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0a2V5ID0gY2FtZWxDYXNlKCBrZXkgKTtcblxuXHRcdFx0XHQvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSwgY3JlYXRlIGFuIGFycmF5IGJ5IG1hdGNoaW5nIG5vbi13aGl0ZXNwYWNlXG5cdFx0XHRcdGtleSA9IGtleSBpbiBjYWNoZSA/XG5cdFx0XHRcdFx0WyBrZXkgXSA6XG5cdFx0XHRcdFx0KCBrZXkubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRpID0ga2V5Lmxlbmd0aDtcblxuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5WyBpIF0gXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgdGhlcmUncyBubyBtb3JlIGRhdGFcblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApICkge1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1XG5cdFx0XHQvLyBXZWJraXQgJiBCbGluayBwZXJmb3JtYW5jZSBzdWZmZXJzIHdoZW4gZGVsZXRpbmcgcHJvcGVydGllc1xuXHRcdFx0Ly8gZnJvbSBET00gbm9kZXMsIHNvIHNldCB0byB1bmRlZmluZWQgaW5zdGVhZFxuXHRcdFx0Ly8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Mzc4NjA3IChidWcgcmVzdHJpY3RlZClcblx0XHRcdGlmICggb3duZXIubm9kZVR5cGUgKSB7XG5cdFx0XHRcdG93bmVyWyB0aGlzLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlbGV0ZSBvd25lclsgdGhpcy5leHBhbmRvIF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRoYXNEYXRhOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cdFx0dmFyIGNhY2hlID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXHRcdHJldHVybiBjYWNoZSAhPT0gdW5kZWZpbmVkICYmICFqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKTtcblx0fVxufTtcbnZhciBkYXRhUHJpdiA9IG5ldyBEYXRhKCk7XG5cbnZhciBkYXRhVXNlciA9IG5ldyBEYXRhKCk7XG5cblxuXG4vL1x0SW1wbGVtZW50YXRpb24gU3VtbWFyeVxuLy9cbi8vXHQxLiBFbmZvcmNlIEFQSSBzdXJmYWNlIGFuZCBzZW1hbnRpYyBjb21wYXRpYmlsaXR5IHdpdGggMS45LnggYnJhbmNoXG4vL1x0Mi4gSW1wcm92ZSB0aGUgbW9kdWxlJ3MgbWFpbnRhaW5hYmlsaXR5IGJ5IHJlZHVjaW5nIHRoZSBzdG9yYWdlXG4vL1x0XHRwYXRocyB0byBhIHNpbmdsZSBtZWNoYW5pc20uXG4vL1x0My4gVXNlIHRoZSBzYW1lIHNpbmdsZSBtZWNoYW5pc20gdG8gc3VwcG9ydCBcInByaXZhdGVcIiBhbmQgXCJ1c2VyXCIgZGF0YS5cbi8vXHQ0LiBfTmV2ZXJfIGV4cG9zZSBcInByaXZhdGVcIiBkYXRhIHRvIHVzZXIgY29kZSAoVE9ETzogRHJvcCBfZGF0YSwgX3JlbW92ZURhdGEpXG4vL1x0NS4gQXZvaWQgZXhwb3NpbmcgaW1wbGVtZW50YXRpb24gZGV0YWlscyBvbiB1c2VyIG9iamVjdHMgKGVnLiBleHBhbmRvIHByb3BlcnRpZXMpXG4vL1x0Ni4gUHJvdmlkZSBhIGNsZWFyIHBhdGggZm9yIGltcGxlbWVudGF0aW9uIHVwZ3JhZGUgdG8gV2Vha01hcCBpbiAyMDE0XG5cbnZhciByYnJhY2UgPSAvXig/Olxce1tcXHdcXFddKlxcfXxcXFtbXFx3XFxXXSpcXF0pJC8sXG5cdHJtdWx0aURhc2ggPSAvW0EtWl0vZztcblxuZnVuY3Rpb24gZ2V0RGF0YSggZGF0YSApIHtcblx0aWYgKCBkYXRhID09PSBcInRydWVcIiApIHtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJmYWxzZVwiICkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdGlmICggZGF0YSA9PT0gXCJudWxsXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuXHRpZiAoIGRhdGEgPT09ICtkYXRhICsgXCJcIiApIHtcblx0XHRyZXR1cm4gK2RhdGE7XG5cdH1cblxuXHRpZiAoIHJicmFjZS50ZXN0KCBkYXRhICkgKSB7XG5cdFx0cmV0dXJuIEpTT04ucGFyc2UoIGRhdGEgKTtcblx0fVxuXG5cdHJldHVybiBkYXRhO1xufVxuXG5mdW5jdGlvbiBkYXRhQXR0ciggZWxlbSwga2V5LCBkYXRhICkge1xuXHR2YXIgbmFtZTtcblxuXHQvLyBJZiBub3RoaW5nIHdhcyBmb3VuZCBpbnRlcm5hbGx5LCB0cnkgdG8gZmV0Y2ggYW55XG5cdC8vIGRhdGEgZnJvbSB0aGUgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZVxuXHRpZiAoIGRhdGEgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdG5hbWUgPSBcImRhdGEtXCIgKyBrZXkucmVwbGFjZSggcm11bHRpRGFzaCwgXCItJCZcIiApLnRvTG93ZXJDYXNlKCk7XG5cdFx0ZGF0YSA9IGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICk7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGF0YSA9IGdldERhdGEoIGRhdGEgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge31cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5cdFx0XHRkYXRhVXNlci5zZXQoIGVsZW0sIGtleSwgZGF0YSApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gZGF0YTtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXHRoYXNEYXRhOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuaGFzRGF0YSggZWxlbSApIHx8IGRhdGFQcml2Lmhhc0RhdGEoIGVsZW0gKTtcblx0fSxcblxuXHRkYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVVzZXIuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YVVzZXIucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH0sXG5cblx0Ly8gVE9ETzogTm93IHRoYXQgYWxsIGNhbGxzIHRvIF9kYXRhIGFuZCBfcmVtb3ZlRGF0YSBoYXZlIGJlZW4gcmVwbGFjZWRcblx0Ly8gd2l0aCBkaXJlY3QgY2FsbHMgdG8gZGF0YVByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG5cdF9kYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0X3JlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0ZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksIG5hbWUsIGRhdGEsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0YXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlcztcblxuXHRcdC8vIEdldHMgYWxsIHZhbHVlc1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMubGVuZ3RoICkge1xuXHRcdFx0XHRkYXRhID0gZGF0YVVzZXIuZ2V0KCBlbGVtICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhUHJpdi5nZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIgKSApIHtcblx0XHRcdFx0XHRpID0gYXR0cnMubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXG5cdFx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKHRyYWMtMTQ4OTQpXG5cdFx0XHRcdFx0XHRpZiAoIGF0dHJzWyBpIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG5hbWUgPSBhdHRyc1sgaSBdLm5hbWU7XG5cdFx0XHRcdFx0XHRcdGlmICggbmFtZS5pbmRleE9mKCBcImRhdGEtXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0XHRcdFx0XHRuYW1lID0gY2FtZWxDYXNlKCBuYW1lLnNsaWNlKCA1ICkgKTtcblx0XHRcdFx0XHRcdFx0XHRkYXRhQXR0ciggZWxlbSwgbmFtZSwgZGF0YVsgbmFtZSBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0cyBtdWx0aXBsZSB2YWx1ZXNcblx0XHRpZiAoIHR5cGVvZiBrZXkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVVzZXIuc2V0KCB0aGlzLCBrZXkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgZGF0YTtcblxuXHRcdFx0Ly8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcblx0XHRcdC8vIChhbmQgdGhlcmVmb3JlIGhhcyBhbiBlbGVtZW50IGFwcGVhcnMgYXQgdGhpc1sgMCBdKSBhbmQgdGhlXG5cdFx0XHQvLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuXHRcdFx0Ly8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuXHRcdFx0Ly8gdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFuIGF0dGVtcHQgdG8gcmVhZCBhIGRhdGEgY2FjaGUgaXMgbWFkZS5cblx0XHRcdGlmICggZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcblx0XHRcdFx0Ly8gVGhlIGtleSB3aWxsIGFsd2F5cyBiZSBjYW1lbENhc2VkIGluIERhdGFcblx0XHRcdFx0ZGF0YSA9IGRhdGFVc2VyLmdldCggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBcImRpc2NvdmVyXCIgdGhlIGRhdGEgaW5cblx0XHRcdFx0Ly8gSFRNTDUgY3VzdG9tIGRhdGEtKiBhdHRyc1xuXHRcdFx0XHRkYXRhID0gZGF0YUF0dHIoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIGRhdGEuLi5cblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gV2UgYWx3YXlzIHN0b3JlIHRoZSBjYW1lbENhc2VkIGtleVxuXHRcdFx0XHRkYXRhVXNlci5zZXQoIHRoaXMsIGtleSwgdmFsdWUgKTtcblx0XHRcdH0gKTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEsIG51bGwsIHRydWUgKTtcblx0fSxcblxuXHRyZW1vdmVEYXRhOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGF0YVVzZXIucmVtb3ZlKCB0aGlzLCBrZXkgKTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgcXVldWU7XG5cblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHR0eXBlID0gKCB0eXBlIHx8IFwiZnhcIiApICsgXCJxdWV1ZVwiO1xuXHRcdFx0cXVldWUgPSBkYXRhUHJpdi5nZXQoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0Ly8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuXHRcdFx0aWYgKCBkYXRhICkge1xuXHRcdFx0XHRpZiAoICFxdWV1ZSB8fCBBcnJheS5pc0FycmF5KCBkYXRhICkgKSB7XG5cdFx0XHRcdFx0cXVldWUgPSBkYXRhUHJpdi5hY2Nlc3MoIGVsZW0sIHR5cGUsIGpRdWVyeS5tYWtlQXJyYXkoIGRhdGEgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1ZXVlIHx8IFtdO1xuXHRcdH1cblx0fSxcblxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIGVsZW0sIHR5cGUgKSxcblx0XHRcdHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpLFxuXHRcdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIHR5cGUgKSxcblx0XHRcdG5leHQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIGVsZW0sIHR5cGUgKTtcblx0XHRcdH07XG5cblx0XHQvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5cdFx0aWYgKCBmbiA9PT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRzdGFydExlbmd0aC0tO1xuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cblx0XHRcdC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcblx0XHRcdC8vIGF1dG9tYXRpY2FsbHkgZGVxdWV1ZWRcblx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICkge1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KCBcImlucHJvZ3Jlc3NcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGVhciB1cCB0aGUgbGFzdCBxdWV1ZSBzdG9wIGZ1bmN0aW9uXG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdGZuLmNhbGwoIGVsZW0sIG5leHQsIGhvb2tzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhc3RhcnRMZW5ndGggJiYgaG9va3MgKSB7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIE5vdCBwdWJsaWMgLSBnZW5lcmF0ZSBhIHF1ZXVlSG9va3Mgb2JqZWN0LCBvciByZXR1cm4gdGhlIGN1cnJlbnQgb25lXG5cdF9xdWV1ZUhvb2tzOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuXHRcdHJldHVybiBkYXRhUHJpdi5nZXQoIGVsZW0sIGtleSApIHx8IGRhdGFQcml2LmFjY2VzcyggZWxlbSwga2V5LCB7XG5cdFx0XHRlbXB0eTogalF1ZXJ5LkNhbGxiYWNrcyggXCJvbmNlIG1lbW9yeVwiICkuYWRkKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBbIHR5cGUgKyBcInF1ZXVlXCIsIGtleSBdICk7XG5cdFx0XHR9IClcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRxdWV1ZTogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHNldHRlciA9IDI7XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0ZGF0YSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gXCJmeFwiO1xuXHRcdFx0c2V0dGVyLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoIDwgc2V0dGVyICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5xdWV1ZSggdGhpc1sgMCBdLCB0eXBlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzIDpcblx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgZGF0YSApO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSBhIGhvb2tzIGZvciB0aGlzIHF1ZXVlXG5cdFx0XHRcdGpRdWVyeS5fcXVldWVIb29rcyggdGhpcywgdHlwZSApO1xuXG5cdFx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICYmIHF1ZXVlWyAwIF0gIT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0fSxcblx0ZGVxdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdH0gKTtcblx0fSxcblx0Y2xlYXJRdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHR9LFxuXG5cdC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcblx0Ly8gYXJlIGVtcHRpZWQgKGZ4IGlzIHRoZSB0eXBlIGJ5IGRlZmF1bHQpXG5cdHByb21pc2U6IGZ1bmN0aW9uKCB0eXBlLCBvYmogKSB7XG5cdFx0dmFyIHRtcCxcblx0XHRcdGNvdW50ID0gMSxcblx0XHRcdGRlZmVyID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRlbGVtZW50cyA9IHRoaXMsXG5cdFx0XHRpID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRyZXNvbHZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggISggLS1jb3VudCApICkge1xuXHRcdFx0XHRcdGRlZmVyLnJlc29sdmVXaXRoKCBlbGVtZW50cywgWyBlbGVtZW50cyBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0b2JqID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG1wID0gZGF0YVByaXYuZ2V0KCBlbGVtZW50c1sgaSBdLCB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgKTtcblx0XHRcdGlmICggdG1wICYmIHRtcC5lbXB0eSApIHtcblx0XHRcdFx0Y291bnQrKztcblx0XHRcdFx0dG1wLmVtcHR5LmFkZCggcmVzb2x2ZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXNvbHZlKCk7XG5cdFx0cmV0dXJuIGRlZmVyLnByb21pc2UoIG9iaiApO1xuXHR9XG59ICk7XG52YXIgcG51bSA9ICggL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8gKS5zb3VyY2U7XG5cbnZhciByY3NzTnVtID0gbmV3IFJlZ0V4cCggXCJeKD86KFsrLV0pPXwpKFwiICsgcG51bSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIgKTtcblxuXG52YXIgY3NzRXhwYW5kID0gWyBcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiIF07XG5cbnZhciBkb2N1bWVudEVsZW1lbnQgPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuXG5cdHZhciBpc0F0dGFjaGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcblx0XHR9LFxuXHRcdGNvbXBvc2VkID0geyBjb21wb3NlZDogdHJ1ZSB9O1xuXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSssIEVkZ2UgMTIgLSAxOCssIGlPUyAxMC4wIC0gMTAuMiBvbmx5XG5cdC8vIENoZWNrIGF0dGFjaG1lbnQgYWNyb3NzIHNoYWRvdyBET00gYm91bmRhcmllcyB3aGVuIHBvc3NpYmxlIChnaC0zNTA0KVxuXHQvLyBTdXBwb3J0OiBpT1MgMTAuMC0xMC4yIG9ubHlcblx0Ly8gRWFybHkgaU9TIDEwIHZlcnNpb25zIHN1cHBvcnQgYGF0dGFjaFNoYWRvd2AgYnV0IG5vdCBgZ2V0Um9vdE5vZGVgLFxuXHQvLyBsZWFkaW5nIHRvIGVycm9ycy4gV2UgbmVlZCB0byBjaGVjayBmb3IgYGdldFJvb3ROb2RlYC5cblx0aWYgKCBkb2N1bWVudEVsZW1lbnQuZ2V0Um9vdE5vZGUgKSB7XG5cdFx0aXNBdHRhY2hlZCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICkgfHxcblx0XHRcdFx0ZWxlbS5nZXRSb290Tm9kZSggY29tcG9zZWQgKSA9PT0gZWxlbS5vd25lckRvY3VtZW50O1xuXHRcdH07XG5cdH1cbnZhciBpc0hpZGRlbldpdGhpblRyZWUgPSBmdW5jdGlvbiggZWxlbSwgZWwgKSB7XG5cblx0XHQvLyBpc0hpZGRlbldpdGhpblRyZWUgbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcblx0XHQvLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcblx0XHRlbGVtID0gZWwgfHwgZWxlbTtcblxuXHRcdC8vIElubGluZSBzdHlsZSB0cnVtcHMgYWxsXG5cdFx0cmV0dXJuIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJub25lXCIgfHxcblx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJlxuXG5cdFx0XHQvLyBPdGhlcndpc2UsIGNoZWNrIGNvbXB1dGVkIHN0eWxlXG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NDMgLSA0NVxuXHRcdFx0Ly8gRGlzY29ubmVjdGVkIGVsZW1lbnRzIGNhbiBoYXZlIGNvbXB1dGVkIGRpc3BsYXk6IG5vbmUsIHNvIGZpcnN0IGNvbmZpcm0gdGhhdCBlbGVtIGlzXG5cdFx0XHQvLyBpbiB0aGUgZG9jdW1lbnQuXG5cdFx0XHRpc0F0dGFjaGVkKCBlbGVtICkgJiZcblxuXHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSA9PT0gXCJub25lXCI7XG5cdH07XG5cblxuXG5mdW5jdGlvbiBhZGp1c3RDU1MoIGVsZW0sIHByb3AsIHZhbHVlUGFydHMsIHR3ZWVuICkge1xuXHR2YXIgYWRqdXN0ZWQsIHNjYWxlLFxuXHRcdG1heEl0ZXJhdGlvbnMgPSAyMCxcblx0XHRjdXJyZW50VmFsdWUgPSB0d2VlbiA/XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmN1cigpO1xuXHRcdFx0fSA6XG5cdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeS5jc3MoIGVsZW0sIHByb3AsIFwiXCIgKTtcblx0XHRcdH0sXG5cdFx0aW5pdGlhbCA9IGN1cnJlbnRWYWx1ZSgpLFxuXHRcdHVuaXQgPSB2YWx1ZVBhcnRzICYmIHZhbHVlUGFydHNbIDMgXSB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKSxcblxuXHRcdC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG5cdFx0aW5pdGlhbEluVW5pdCA9IGVsZW0ubm9kZVR5cGUgJiZcblx0XHRcdCggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdIHx8IHVuaXQgIT09IFwicHhcIiAmJiAraW5pdGlhbCApICYmXG5cdFx0XHRyY3NzTnVtLmV4ZWMoIGpRdWVyeS5jc3MoIGVsZW0sIHByb3AgKSApO1xuXG5cdGlmICggaW5pdGlhbEluVW5pdCAmJiBpbml0aWFsSW5Vbml0WyAzIF0gIT09IHVuaXQgKSB7XG5cblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDw9NTRcblx0XHQvLyBIYWx2ZSB0aGUgaXRlcmF0aW9uIHRhcmdldCB2YWx1ZSB0byBwcmV2ZW50IGludGVyZmVyZW5jZSBmcm9tIENTUyB1cHBlciBib3VuZHMgKGdoLTIxNDQpXG5cdFx0aW5pdGlhbCA9IGluaXRpYWwgLyAyO1xuXG5cdFx0Ly8gVHJ1c3QgdW5pdHMgcmVwb3J0ZWQgYnkgalF1ZXJ5LmNzc1xuXHRcdHVuaXQgPSB1bml0IHx8IGluaXRpYWxJblVuaXRbIDMgXTtcblxuXHRcdC8vIEl0ZXJhdGl2ZWx5IGFwcHJveGltYXRlIGZyb20gYSBub256ZXJvIHN0YXJ0aW5nIHBvaW50XG5cdFx0aW5pdGlhbEluVW5pdCA9ICtpbml0aWFsIHx8IDE7XG5cblx0XHR3aGlsZSAoIG1heEl0ZXJhdGlvbnMtLSApIHtcblxuXHRcdFx0Ly8gRXZhbHVhdGUgYW5kIHVwZGF0ZSBvdXIgYmVzdCBndWVzcyAoZG91YmxpbmcgZ3Vlc3NlcyB0aGF0IHplcm8gb3V0KS5cblx0XHRcdC8vIEZpbmlzaCBpZiB0aGUgc2NhbGUgZXF1YWxzIG9yIGNyb3NzZXMgMSAobWFraW5nIHRoZSBvbGQqbmV3IHByb2R1Y3Qgbm9uLXBvc2l0aXZlKS5cblx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCwgaW5pdGlhbEluVW5pdCArIHVuaXQgKTtcblx0XHRcdGlmICggKCAxIC0gc2NhbGUgKSAqICggMSAtICggc2NhbGUgPSBjdXJyZW50VmFsdWUoKSAvIGluaXRpYWwgfHwgMC41ICkgKSA8PSAwICkge1xuXHRcdFx0XHRtYXhJdGVyYXRpb25zID0gMDtcblx0XHRcdH1cblx0XHRcdGluaXRpYWxJblVuaXQgPSBpbml0aWFsSW5Vbml0IC8gc2NhbGU7XG5cblx0XHR9XG5cblx0XHRpbml0aWFsSW5Vbml0ID0gaW5pdGlhbEluVW5pdCAqIDI7XG5cdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBpbml0aWFsSW5Vbml0ICsgdW5pdCApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHdlIHVwZGF0ZSB0aGUgdHdlZW4gcHJvcGVydGllcyBsYXRlciBvblxuXHRcdHZhbHVlUGFydHMgPSB2YWx1ZVBhcnRzIHx8IFtdO1xuXHR9XG5cblx0aWYgKCB2YWx1ZVBhcnRzICkge1xuXHRcdGluaXRpYWxJblVuaXQgPSAraW5pdGlhbEluVW5pdCB8fCAraW5pdGlhbCB8fCAwO1xuXG5cdFx0Ly8gQXBwbHkgcmVsYXRpdmUgb2Zmc2V0ICgrPS8tPSkgaWYgc3BlY2lmaWVkXG5cdFx0YWRqdXN0ZWQgPSB2YWx1ZVBhcnRzWyAxIF0gP1xuXHRcdFx0aW5pdGlhbEluVW5pdCArICggdmFsdWVQYXJ0c1sgMSBdICsgMSApICogdmFsdWVQYXJ0c1sgMiBdIDpcblx0XHRcdCt2YWx1ZVBhcnRzWyAyIF07XG5cdFx0aWYgKCB0d2VlbiApIHtcblx0XHRcdHR3ZWVuLnVuaXQgPSB1bml0O1xuXHRcdFx0dHdlZW4uc3RhcnQgPSBpbml0aWFsSW5Vbml0O1xuXHRcdFx0dHdlZW4uZW5kID0gYWRqdXN0ZWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBhZGp1c3RlZDtcbn1cblxuXG52YXIgZGVmYXVsdERpc3BsYXlNYXAgPSB7fTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdERpc3BsYXkoIGVsZW0gKSB7XG5cdHZhciB0ZW1wLFxuXHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudCxcblx0XHRub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUsXG5cdFx0ZGlzcGxheSA9IGRlZmF1bHREaXNwbGF5TWFwWyBub2RlTmFtZSBdO1xuXG5cdGlmICggZGlzcGxheSApIHtcblx0XHRyZXR1cm4gZGlzcGxheTtcblx0fVxuXG5cdHRlbXAgPSBkb2MuYm9keS5hcHBlbmRDaGlsZCggZG9jLmNyZWF0ZUVsZW1lbnQoIG5vZGVOYW1lICkgKTtcblx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIHRlbXAsIFwiZGlzcGxheVwiICk7XG5cblx0dGVtcC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCB0ZW1wICk7XG5cblx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRkaXNwbGF5ID0gXCJibG9ja1wiO1xuXHR9XG5cdGRlZmF1bHREaXNwbGF5TWFwWyBub2RlTmFtZSBdID0gZGlzcGxheTtcblxuXHRyZXR1cm4gZGlzcGxheTtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGUoIGVsZW1lbnRzLCBzaG93ICkge1xuXHR2YXIgZGlzcGxheSwgZWxlbSxcblx0XHR2YWx1ZXMgPSBbXSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuXG5cdC8vIERldGVybWluZSBuZXcgZGlzcGxheSB2YWx1ZSBmb3IgZWxlbWVudHMgdGhhdCBuZWVkIHRvIGNoYW5nZVxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGVsZW0gPSBlbGVtZW50c1sgaW5kZXggXTtcblx0XHRpZiAoICFlbGVtLnN0eWxlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0ZGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcblx0XHRpZiAoIHNob3cgKSB7XG5cblx0XHRcdC8vIFNpbmNlIHdlIGZvcmNlIHZpc2liaWxpdHkgdXBvbiBjYXNjYWRlLWhpZGRlbiBlbGVtZW50cywgYW4gaW1tZWRpYXRlIChhbmQgc2xvdylcblx0XHRcdC8vIGNoZWNrIGlzIHJlcXVpcmVkIGluIHRoaXMgZmlyc3QgbG9vcCB1bmxlc3Mgd2UgaGF2ZSBhIG5vbmVtcHR5IGRpc3BsYXkgdmFsdWUgKGVpdGhlclxuXHRcdFx0Ly8gaW5saW5lIG9yIGFib3V0LXRvLWJlLXJlc3RvcmVkKVxuXHRcdFx0aWYgKCBkaXNwbGF5ID09PSBcIm5vbmVcIiApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImRpc3BsYXlcIiApIHx8IG51bGw7XG5cdFx0XHRcdGlmICggIXZhbHVlc1sgaW5kZXggXSApIHtcblx0XHRcdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbldpdGhpblRyZWUoIGVsZW0gKSApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gZ2V0RGVmYXVsdERpc3BsYXkoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCBkaXNwbGF5ICE9PSBcIm5vbmVcIiApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gXCJub25lXCI7XG5cblx0XHRcdFx0Ly8gUmVtZW1iZXIgd2hhdCB3ZSdyZSBvdmVyd3JpdGluZ1xuXHRcdFx0XHRkYXRhUHJpdi5zZXQoIGVsZW0sIFwiZGlzcGxheVwiLCBkaXNwbGF5ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBkaXNwbGF5IG9mIHRoZSBlbGVtZW50cyBpbiBhIHNlY29uZCBsb29wIHRvIGF2b2lkIGNvbnN0YW50IHJlZmxvd1xuXHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggdmFsdWVzWyBpbmRleCBdICE9IG51bGwgKSB7XG5cdFx0XHRlbGVtZW50c1sgaW5kZXggXS5zdHlsZS5kaXNwbGF5ID0gdmFsdWVzWyBpbmRleCBdO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50cztcbn1cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzaG93OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMsIHRydWUgKTtcblx0fSxcblx0aGlkZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzICk7XG5cdH0sXG5cdHRvZ2dsZTogZnVuY3Rpb24oIHN0YXRlICkge1xuXHRcdGlmICggdHlwZW9mIHN0YXRlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdHJldHVybiBzdGF0ZSA/IHRoaXMuc2hvdygpIDogdGhpcy5oaWRlKCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGlzSGlkZGVuV2l0aGluVHJlZSggdGhpcyApICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9XG59ICk7XG52YXIgcmNoZWNrYWJsZVR5cGUgPSAoIC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pICk7XG5cbnZhciBydGFnTmFtZSA9ICggLzwoW2Etel1bXlxcL1xcMD5cXHgyMFxcdFxcclxcblxcZl0qKS9pICk7XG5cbnZhciByc2NyaXB0VHlwZSA9ICggL14kfF5tb2R1bGUkfFxcLyg/OmphdmF8ZWNtYSlzY3JpcHQvaSApO1xuXG5cblxuKCBmdW5jdGlvbigpIHtcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKSxcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHlcblx0Ly8gQ2hlY2sgc3RhdGUgbG9zdCBpZiB0aGUgbmFtZSBpcyBzZXQgKHRyYWMtMTEyMTcpXG5cdC8vIFN1cHBvcnQ6IFdpbmRvd3MgV2ViIEFwcHMgKFdXQSlcblx0Ly8gYG5hbWVgIGFuZCBgdHlwZWAgbXVzdCB1c2UgLnNldEF0dHJpYnV0ZSBmb3IgV1dBICh0cmFjLTE0OTAxKVxuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCBcInJhZGlvXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJ0XCIgKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQoIGlucHV0ICk7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSBvbmx5XG5cdC8vIE9sZGVyIFdlYktpdCBkb2Vzbid0IGNsb25lIGNoZWNrZWQgc3RhdGUgY29ycmVjdGx5IGluIGZyYWdtZW50c1xuXHRzdXBwb3J0LmNoZWNrQ2xvbmUgPSBkaXYuY2xvbmVOb2RlKCB0cnVlICkuY2xvbmVOb2RlKCB0cnVlICkubGFzdENoaWxkLmNoZWNrZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIE1ha2Ugc3VyZSB0ZXh0YXJlYSAoYW5kIGNoZWNrYm94KSBkZWZhdWx0VmFsdWUgaXMgcHJvcGVybHkgY2xvbmVkXG5cdGRpdi5pbm5lckhUTUwgPSBcIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIjtcblx0c3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCA9ICEhZGl2LmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0Ly8gSUUgPD05IHJlcGxhY2VzIDxvcHRpb24+IHRhZ3Mgd2l0aCB0aGVpciBjb250ZW50cyB3aGVuIGluc2VydGVkIG91dHNpZGUgb2Zcblx0Ly8gdGhlIHNlbGVjdCBlbGVtZW50LlxuXHRkaXYuaW5uZXJIVE1MID0gXCI8b3B0aW9uPjwvb3B0aW9uPlwiO1xuXHRzdXBwb3J0Lm9wdGlvbiA9ICEhZGl2Lmxhc3RDaGlsZDtcbn0gKSgpO1xuXG5cbi8vIFdlIGhhdmUgdG8gY2xvc2UgdGhlc2UgdGFncyB0byBzdXBwb3J0IFhIVE1MICh0cmFjLTEzMjAwKVxudmFyIHdyYXBNYXAgPSB7XG5cblx0Ly8gWEhUTUwgcGFyc2VycyBkbyBub3QgbWFnaWNhbGx5IGluc2VydCBlbGVtZW50cyBpbiB0aGVcblx0Ly8gc2FtZSB3YXkgdGhhdCB0YWcgc291cCBwYXJzZXJzIGRvLiBTbyB3ZSBjYW5ub3Qgc2hvcnRlblxuXHQvLyB0aGlzIGJ5IG9taXR0aW5nIDx0Ym9keT4gb3Igb3RoZXIgcmVxdWlyZWQgZWxlbWVudHMuXG5cdHRoZWFkOiBbIDEsIFwiPHRhYmxlPlwiLCBcIjwvdGFibGU+XCIgXSxcblx0Y29sOiBbIDIsIFwiPHRhYmxlPjxjb2xncm91cD5cIiwgXCI8L2NvbGdyb3VwPjwvdGFibGU+XCIgXSxcblx0dHI6IFsgMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXHR0ZDogWyAzLCBcIjx0YWJsZT48dGJvZHk+PHRyPlwiLCBcIjwvdHI+PC90Ym9keT48L3RhYmxlPlwiIF0sXG5cblx0X2RlZmF1bHQ6IFsgMCwgXCJcIiwgXCJcIiBdXG59O1xuXG53cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xud3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cbi8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5pZiAoICFzdXBwb3J0Lm9wdGlvbiApIHtcblx0d3JhcE1hcC5vcHRncm91cCA9IHdyYXBNYXAub3B0aW9uID0gWyAxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIiBdO1xufVxuXG5cbmZ1bmN0aW9uIGdldEFsbCggY29udGV4dCwgdGFnICkge1xuXG5cdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0Ly8gVXNlIHR5cGVvZiB0byBhdm9pZCB6ZXJvLWFyZ3VtZW50IG1ldGhvZCBpbnZvY2F0aW9uIG9uIGhvc3Qgb2JqZWN0cyAodHJhYy0xNTE1MSlcblx0dmFyIHJldDtcblxuXHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdHJldCA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyB8fCBcIipcIiApO1xuXG5cdH0gZWxzZSBpZiAoIHR5cGVvZiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0cmV0ID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgfHwgXCIqXCIgKTtcblxuXHR9IGVsc2Uge1xuXHRcdHJldCA9IFtdO1xuXHR9XG5cblx0aWYgKCB0YWcgPT09IHVuZGVmaW5lZCB8fCB0YWcgJiYgbm9kZU5hbWUoIGNvbnRleHQsIHRhZyApICkge1xuXHRcdHJldHVybiBqUXVlcnkubWVyZ2UoIFsgY29udGV4dCBdLCByZXQgKTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59XG5cblxuLy8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5mdW5jdGlvbiBzZXRHbG9iYWxFdmFsKCBlbGVtcywgcmVmRWxlbWVudHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsID0gZWxlbXMubGVuZ3RoO1xuXG5cdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRkYXRhUHJpdi5zZXQoXG5cdFx0XHRlbGVtc1sgaSBdLFxuXHRcdFx0XCJnbG9iYWxFdmFsXCIsXG5cdFx0XHQhcmVmRWxlbWVudHMgfHwgZGF0YVByaXYuZ2V0KCByZWZFbGVtZW50c1sgaSBdLCBcImdsb2JhbEV2YWxcIiApXG5cdFx0KTtcblx0fVxufVxuXG5cbnZhciByaHRtbCA9IC88fCYjP1xcdys7LztcblxuZnVuY3Rpb24gYnVpbGRGcmFnbWVudCggZWxlbXMsIGNvbnRleHQsIHNjcmlwdHMsIHNlbGVjdGlvbiwgaWdub3JlZCApIHtcblx0dmFyIGVsZW0sIHRtcCwgdGFnLCB3cmFwLCBhdHRhY2hlZCwgaixcblx0XHRmcmFnbWVudCA9IGNvbnRleHQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdG5vZGVzID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1zWyBpIF07XG5cblx0XHRpZiAoIGVsZW0gfHwgZWxlbSA9PT0gMCApIHtcblxuXHRcdFx0Ly8gQWRkIG5vZGVzIGRpcmVjdGx5XG5cdFx0XHRpZiAoIHRvVHlwZSggZWxlbSApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIGVsZW0ubm9kZVR5cGUgPyBbIGVsZW0gXSA6IGVsZW0gKTtcblxuXHRcdFx0Ly8gQ29udmVydCBub24taHRtbCBpbnRvIGEgdGV4dCBub2RlXG5cdFx0XHR9IGVsc2UgaWYgKCAhcmh0bWwudGVzdCggZWxlbSApICkge1xuXHRcdFx0XHRub2Rlcy5wdXNoKCBjb250ZXh0LmNyZWF0ZVRleHROb2RlKCBlbGVtICkgKTtcblxuXHRcdFx0Ly8gQ29udmVydCBodG1sIGludG8gRE9NIG5vZGVzXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0bXAgPSB0bXAgfHwgZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICk7XG5cblx0XHRcdFx0Ly8gRGVzZXJpYWxpemUgYSBzdGFuZGFyZCByZXByZXNlbnRhdGlvblxuXHRcdFx0XHR0YWcgPSAoIHJ0YWdOYW1lLmV4ZWMoIGVsZW0gKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0d3JhcCA9IHdyYXBNYXBbIHRhZyBdIHx8IHdyYXBNYXAuX2RlZmF1bHQ7XG5cdFx0XHRcdHRtcC5pbm5lckhUTUwgPSB3cmFwWyAxIF0gKyBqUXVlcnkuaHRtbFByZWZpbHRlciggZWxlbSApICsgd3JhcFsgMiBdO1xuXG5cdFx0XHRcdC8vIERlc2NlbmQgdGhyb3VnaCB3cmFwcGVycyB0byB0aGUgcmlnaHQgY29udGVudFxuXHRcdFx0XHRqID0gd3JhcFsgMCBdO1xuXHRcdFx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdFx0XHR0bXAgPSB0bXAubGFzdENoaWxkO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgdG1wLmNoaWxkTm9kZXMgKTtcblxuXHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuXHRcdFx0XHR0bXAgPSBmcmFnbWVudC5maXJzdENoaWxkO1xuXG5cdFx0XHRcdC8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKHRyYWMtMTIzOTIpXG5cdFx0XHRcdHRtcC50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmVtb3ZlIHdyYXBwZXIgZnJvbSBmcmFnbWVudFxuXHRmcmFnbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0aSA9IDA7XG5cdHdoaWxlICggKCBlbGVtID0gbm9kZXNbIGkrKyBdICkgKSB7XG5cblx0XHQvLyBTa2lwIGVsZW1lbnRzIGFscmVhZHkgaW4gdGhlIGNvbnRleHQgY29sbGVjdGlvbiAodHJhYy00MDg3KVxuXHRcdGlmICggc2VsZWN0aW9uICYmIGpRdWVyeS5pbkFycmF5KCBlbGVtLCBzZWxlY3Rpb24gKSA+IC0xICkge1xuXHRcdFx0aWYgKCBpZ25vcmVkICkge1xuXHRcdFx0XHRpZ25vcmVkLnB1c2goIGVsZW0gKTtcblx0XHRcdH1cblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdGF0dGFjaGVkID0gaXNBdHRhY2hlZCggZWxlbSApO1xuXG5cdFx0Ly8gQXBwZW5kIHRvIGZyYWdtZW50XG5cdFx0dG1wID0gZ2V0QWxsKCBmcmFnbWVudC5hcHBlbmRDaGlsZCggZWxlbSApLCBcInNjcmlwdFwiICk7XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0aWYgKCBhdHRhY2hlZCApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xuXHRcdH1cblxuXHRcdC8vIENhcHR1cmUgZXhlY3V0YWJsZXNcblx0XHRpZiAoIHNjcmlwdHMgKSB7XG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKCBlbGVtID0gdG1wWyBqKysgXSApICkge1xuXHRcdFx0XHRpZiAoIHJzY3JpcHRUeXBlLnRlc3QoIGVsZW0udHlwZSB8fCBcIlwiICkgKSB7XG5cdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZnJhZ21lbnQ7XG59XG5cblxudmFyIHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpLztcblxuZnVuY3Rpb24gcmV0dXJuVHJ1ZSgpIHtcblx0cmV0dXJuIHRydWU7XG59XG5cbmZ1bmN0aW9uIHJldHVybkZhbHNlKCkge1xuXHRyZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIG9uKCBlbGVtLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCBvbmUgKSB7XG5cdHZhciBvcmlnRm4sIHR5cGU7XG5cblx0Ly8gVHlwZXMgY2FuIGJlIGEgbWFwIG9mIHR5cGVzL2hhbmRsZXJzXG5cdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gKCB0eXBlcy1PYmplY3QsIHNlbGVjdG9yLCBkYXRhIClcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuXHRcdFx0ZGF0YSA9IGRhdGEgfHwgc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdG9uKCBlbGVtLCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbIHR5cGUgXSwgb25lICk7XG5cdFx0fVxuXHRcdHJldHVybiBlbGVtO1xuXHR9XG5cblx0aWYgKCBkYXRhID09IG51bGwgJiYgZm4gPT0gbnVsbCApIHtcblxuXHRcdC8vICggdHlwZXMsIGZuIClcblx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdGRhdGEgPSBzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0fSBlbHNlIGlmICggZm4gPT0gbnVsbCApIHtcblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcblx0XHRcdGZuID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuXHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdH0gZWxzZSBpZiAoICFmbiApIHtcblx0XHRyZXR1cm4gZWxlbTtcblx0fVxuXG5cdGlmICggb25lID09PSAxICkge1xuXHRcdG9yaWdGbiA9IGZuO1xuXHRcdGZuID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHQvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cblx0XHRcdGpRdWVyeSgpLm9mZiggZXZlbnQgKTtcblx0XHRcdHJldHVybiBvcmlnRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH07XG5cblx0XHQvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXHRcdGZuLmd1aWQgPSBvcmlnRm4uZ3VpZCB8fCAoIG9yaWdGbi5ndWlkID0galF1ZXJ5Lmd1aWQrKyApO1xuXHR9XG5cdHJldHVybiBlbGVtLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdGpRdWVyeS5ldmVudC5hZGQoIHRoaXMsIHR5cGVzLCBmbiwgZGF0YSwgc2VsZWN0b3IgKTtcblx0fSApO1xufVxuXG4vKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZXZlbnRzIC0tIG5vdCBwYXJ0IG9mIHRoZSBwdWJsaWMgaW50ZXJmYWNlLlxuICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAqL1xualF1ZXJ5LmV2ZW50ID0ge1xuXG5cdGdsb2JhbDoge30sXG5cblx0YWRkOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yICkge1xuXG5cdFx0dmFyIGhhbmRsZU9iakluLCBldmVudEhhbmRsZSwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFQcml2LmdldCggZWxlbSApO1xuXG5cdFx0Ly8gT25seSBhdHRhY2ggZXZlbnRzIHRvIG9iamVjdHMgdGhhdCBhY2NlcHQgZGF0YVxuXHRcdGlmICggIWFjY2VwdERhdGEoIGVsZW0gKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBDYWxsZXIgY2FuIHBhc3MgaW4gYW4gb2JqZWN0IG9mIGN1c3RvbSBkYXRhIGluIGxpZXUgb2YgdGhlIGhhbmRsZXJcblx0XHRpZiAoIGhhbmRsZXIuaGFuZGxlciApIHtcblx0XHRcdGhhbmRsZU9iakluID0gaGFuZGxlcjtcblx0XHRcdGhhbmRsZXIgPSBoYW5kbGVPYmpJbi5oYW5kbGVyO1xuXHRcdFx0c2VsZWN0b3IgPSBoYW5kbGVPYmpJbi5zZWxlY3Rvcjtcblx0XHR9XG5cblx0XHQvLyBFbnN1cmUgdGhhdCBpbnZhbGlkIHNlbGVjdG9ycyB0aHJvdyBleGNlcHRpb25zIGF0IGF0dGFjaCB0aW1lXG5cdFx0Ly8gRXZhbHVhdGUgYWdhaW5zdCBkb2N1bWVudEVsZW1lbnQgaW4gY2FzZSBlbGVtIGlzIGEgbm9uLWVsZW1lbnQgbm9kZSAoZS5nLiwgZG9jdW1lbnQpXG5cdFx0aWYgKCBzZWxlY3RvciApIHtcblx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZG9jdW1lbnRFbGVtZW50LCBzZWxlY3RvciApO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBoYW5kbGVyIGhhcyBhIHVuaXF1ZSBJRCwgdXNlZCB0byBmaW5kL3JlbW92ZSBpdCBsYXRlclxuXHRcdGlmICggIWhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXHRcdGlmICggISggZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzICkgKSB7XG5cdFx0XHRldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSBPYmplY3QuY3JlYXRlKCBudWxsICk7XG5cdFx0fVxuXHRcdGlmICggISggZXZlbnRIYW5kbGUgPSBlbGVtRGF0YS5oYW5kbGUgKSApIHtcblx0XHRcdGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlID0gZnVuY3Rpb24oIGUgKSB7XG5cblx0XHRcdFx0Ly8gRGlzY2FyZCB0aGUgc2Vjb25kIGV2ZW50IG9mIGEgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoKSBhbmRcblx0XHRcdFx0Ly8gd2hlbiBhbiBldmVudCBpcyBjYWxsZWQgYWZ0ZXIgYSBwYWdlIGhhcyB1bmxvYWRlZFxuXHRcdFx0XHRyZXR1cm4gdHlwZW9mIGpRdWVyeSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICE9PSBlLnR5cGUgP1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5kaXNwYXRjaC5hcHBseSggZWxlbSwgYXJndW1lbnRzICkgOiB1bmRlZmluZWQ7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIEhhbmRsZSBtdWx0aXBsZSBldmVudHMgc2VwYXJhdGVkIGJ5IGEgc3BhY2Vcblx0XHR0eXBlcyA9ICggdHlwZXMgfHwgXCJcIiApLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgWyBcIlwiIF07XG5cdFx0dCA9IHR5cGVzLmxlbmd0aDtcblx0XHR3aGlsZSAoIHQtLSApIHtcblx0XHRcdHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWMoIHR5cGVzWyB0IF0gKSB8fCBbXTtcblx0XHRcdHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsgMSBdO1xuXHRcdFx0bmFtZXNwYWNlcyA9ICggdG1wWyAyIF0gfHwgXCJcIiApLnNwbGl0KCBcIi5cIiApLnNvcnQoKTtcblxuXHRcdFx0Ly8gVGhlcmUgKm11c3QqIGJlIGEgdHlwZSwgbm8gYXR0YWNoaW5nIG5hbWVzcGFjZS1vbmx5IGhhbmRsZXJzXG5cdFx0XHRpZiAoICF0eXBlICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgZXZlbnQgY2hhbmdlcyBpdHMgdHlwZSwgdXNlIHRoZSBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgY2hhbmdlZCB0eXBlXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuXHRcdFx0Ly8gSWYgc2VsZWN0b3IgZGVmaW5lZCwgZGV0ZXJtaW5lIHNwZWNpYWwgZXZlbnQgYXBpIHR5cGUsIG90aGVyd2lzZSBnaXZlbiB0eXBlXG5cdFx0XHR0eXBlID0gKCBzZWxlY3RvciA/IHNwZWNpYWwuZGVsZWdhdGVUeXBlIDogc3BlY2lhbC5iaW5kVHlwZSApIHx8IHR5cGU7XG5cblx0XHRcdC8vIFVwZGF0ZSBzcGVjaWFsIGJhc2VkIG9uIG5ld2x5IHJlc2V0IHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBoYW5kbGVPYmogaXMgcGFzc2VkIHRvIGFsbCBldmVudCBoYW5kbGVyc1xuXHRcdFx0aGFuZGxlT2JqID0galF1ZXJ5LmV4dGVuZCgge1xuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRvcmlnVHlwZTogb3JpZ1R5cGUsXG5cdFx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRcdGhhbmRsZXI6IGhhbmRsZXIsXG5cdFx0XHRcdGd1aWQ6IGhhbmRsZXIuZ3VpZCxcblx0XHRcdFx0c2VsZWN0b3I6IHNlbGVjdG9yLFxuXHRcdFx0XHRuZWVkc0NvbnRleHQ6IHNlbGVjdG9yICYmIGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApLFxuXHRcdFx0XHRuYW1lc3BhY2U6IG5hbWVzcGFjZXMuam9pbiggXCIuXCIgKVxuXHRcdFx0fSwgaGFuZGxlT2JqSW4gKTtcblxuXHRcdFx0Ly8gSW5pdCB0aGUgZXZlbnQgaGFuZGxlciBxdWV1ZSBpZiB3ZSdyZSB0aGUgZmlyc3Rcblx0XHRcdGlmICggISggaGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSApICkge1xuXHRcdFx0XHRoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdID0gW107XG5cdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQgPSAwO1xuXG5cdFx0XHRcdC8vIE9ubHkgdXNlIGFkZEV2ZW50TGlzdGVuZXIgaWYgdGhlIHNwZWNpYWwgZXZlbnRzIGhhbmRsZXIgcmV0dXJucyBmYWxzZVxuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnNldHVwIHx8XG5cdFx0XHRcdFx0c3BlY2lhbC5zZXR1cC5jYWxsKCBlbGVtLCBkYXRhLCBuYW1lc3BhY2VzLCBldmVudEhhbmRsZSApID09PSBmYWxzZSApIHtcblxuXHRcdFx0XHRcdGlmICggZWxlbS5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCB0eXBlLCBldmVudEhhbmRsZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHNwZWNpYWwuYWRkICkge1xuXHRcdFx0XHRzcGVjaWFsLmFkZC5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblxuXHRcdFx0XHRpZiAoICFoYW5kbGVPYmouaGFuZGxlci5ndWlkICkge1xuXHRcdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyLmd1aWQgPSBoYW5kbGVyLmd1aWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHRvIHRoZSBlbGVtZW50J3MgaGFuZGxlciBsaXN0LCBkZWxlZ2F0ZXMgaW4gZnJvbnRcblx0XHRcdGlmICggc2VsZWN0b3IgKSB7XG5cdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaGFuZGxlcnMuZGVsZWdhdGVDb3VudCsrLCAwLCBoYW5kbGVPYmogKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhbmRsZXJzLnB1c2goIGhhbmRsZU9iaiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBLZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50cyBoYXZlIGV2ZXIgYmVlbiB1c2VkLCBmb3IgZXZlbnQgb3B0aW1pemF0aW9uXG5cdFx0XHRqUXVlcnkuZXZlbnQuZ2xvYmFsWyB0eXBlIF0gPSB0cnVlO1xuXHRcdH1cblxuXHR9LFxuXG5cdC8vIERldGFjaCBhbiBldmVudCBvciBzZXQgb2YgZXZlbnRzIGZyb20gYW4gZWxlbWVudFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgc2VsZWN0b3IsIG1hcHBlZFR5cGVzICkge1xuXG5cdFx0dmFyIGosIG9yaWdDb3VudCwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFQcml2Lmhhc0RhdGEoIGVsZW0gKSAmJiBkYXRhUHJpdi5nZXQoIGVsZW0gKTtcblxuXHRcdGlmICggIWVsZW1EYXRhIHx8ICEoIGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cyApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE9uY2UgZm9yIGVhY2ggdHlwZS5uYW1lc3BhY2UgaW4gdHlwZXM7IHR5cGUgbWF5IGJlIG9taXR0ZWRcblx0XHR0eXBlcyA9ICggdHlwZXMgfHwgXCJcIiApLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgWyBcIlwiIF07XG5cdFx0dCA9IHR5cGVzLmxlbmd0aDtcblx0XHR3aGlsZSAoIHQtLSApIHtcblx0XHRcdHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWMoIHR5cGVzWyB0IF0gKSB8fCBbXTtcblx0XHRcdHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsgMSBdO1xuXHRcdFx0bmFtZXNwYWNlcyA9ICggdG1wWyAyIF0gfHwgXCJcIiApLnNwbGl0KCBcIi5cIiApLnNvcnQoKTtcblxuXHRcdFx0Ly8gVW5iaW5kIGFsbCBldmVudHMgKG9uIHRoaXMgbmFtZXNwYWNlLCBpZiBwcm92aWRlZCkgZm9yIHRoZSBlbGVtZW50XG5cdFx0XHRpZiAoICF0eXBlICkge1xuXHRcdFx0XHRmb3IgKCB0eXBlIGluIGV2ZW50cyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICsgdHlwZXNbIHQgXSwgaGFuZGxlciwgc2VsZWN0b3IsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cdFx0XHR0eXBlID0gKCBzZWxlY3RvciA/IHNwZWNpYWwuZGVsZWdhdGVUeXBlIDogc3BlY2lhbC5iaW5kVHlwZSApIHx8IHR5cGU7XG5cdFx0XHRoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdIHx8IFtdO1xuXHRcdFx0dG1wID0gdG1wWyAyIF0gJiZcblx0XHRcdFx0bmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbiggXCJcXFxcLig/Oi4qXFxcXC58KVwiICkgKyBcIihcXFxcLnwkKVwiICk7XG5cblx0XHRcdC8vIFJlbW92ZSBtYXRjaGluZyBldmVudHNcblx0XHRcdG9yaWdDb3VudCA9IGogPSBoYW5kbGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGogXTtcblxuXHRcdFx0XHRpZiAoICggbWFwcGVkVHlwZXMgfHwgb3JpZ1R5cGUgPT09IGhhbmRsZU9iai5vcmlnVHlwZSApICYmXG5cdFx0XHRcdFx0KCAhaGFuZGxlciB8fCBoYW5kbGVyLmd1aWQgPT09IGhhbmRsZU9iai5ndWlkICkgJiZcblx0XHRcdFx0XHQoICF0bXAgfHwgdG1wLnRlc3QoIGhhbmRsZU9iai5uYW1lc3BhY2UgKSApICYmXG5cdFx0XHRcdFx0KCAhc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09IGhhbmRsZU9iai5zZWxlY3RvciB8fFxuXHRcdFx0XHRcdFx0c2VsZWN0b3IgPT09IFwiKipcIiAmJiBoYW5kbGVPYmouc2VsZWN0b3IgKSApIHtcblx0XHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGosIDEgKTtcblxuXHRcdFx0XHRcdGlmICggaGFuZGxlT2JqLnNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudC0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIHNwZWNpYWwucmVtb3ZlICkge1xuXHRcdFx0XHRcdFx0c3BlY2lhbC5yZW1vdmUuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSBnZW5lcmljIGV2ZW50IGhhbmRsZXIgaWYgd2UgcmVtb3ZlZCBzb21ldGhpbmcgYW5kIG5vIG1vcmUgaGFuZGxlcnMgZXhpc3Rcblx0XHRcdC8vIChhdm9pZHMgcG90ZW50aWFsIGZvciBlbmRsZXNzIHJlY3Vyc2lvbiBkdXJpbmcgcmVtb3ZhbCBvZiBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzKVxuXHRcdFx0aWYgKCBvcmlnQ291bnQgJiYgIWhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC50ZWFyZG93biB8fFxuXHRcdFx0XHRcdHNwZWNpYWwudGVhcmRvd24uY2FsbCggZWxlbSwgbmFtZXNwYWNlcywgZWxlbURhdGEuaGFuZGxlICkgPT09IGZhbHNlICkge1xuXG5cdFx0XHRcdFx0alF1ZXJ5LnJlbW92ZUV2ZW50KCBlbGVtLCB0eXBlLCBlbGVtRGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRlbGV0ZSBldmVudHNbIHR5cGUgXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgZGF0YSBhbmQgdGhlIGV4cGFuZG8gaWYgaXQncyBubyBsb25nZXIgdXNlZFxuXHRcdGlmICggalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGV2ZW50cyApICkge1xuXHRcdFx0ZGF0YVByaXYucmVtb3ZlKCBlbGVtLCBcImhhbmRsZSBldmVudHNcIiApO1xuXHRcdH1cblx0fSxcblxuXHRkaXNwYXRjaDogZnVuY3Rpb24oIG5hdGl2ZUV2ZW50ICkge1xuXG5cdFx0dmFyIGksIGosIHJldCwgbWF0Y2hlZCwgaGFuZGxlT2JqLCBoYW5kbGVyUXVldWUsXG5cdFx0XHRhcmdzID0gbmV3IEFycmF5KCBhcmd1bWVudHMubGVuZ3RoICksXG5cblx0XHRcdC8vIE1ha2UgYSB3cml0YWJsZSBqUXVlcnkuRXZlbnQgZnJvbSB0aGUgbmF0aXZlIGV2ZW50IG9iamVjdFxuXHRcdFx0ZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KCBuYXRpdmVFdmVudCApLFxuXG5cdFx0XHRoYW5kbGVycyA9IChcblx0XHRcdFx0ZGF0YVByaXYuZ2V0KCB0aGlzLCBcImV2ZW50c1wiICkgfHwgT2JqZWN0LmNyZWF0ZSggbnVsbCApXG5cdFx0XHQpWyBldmVudC50eXBlIF0gfHwgW10sXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGV2ZW50LnR5cGUgXSB8fCB7fTtcblxuXHRcdC8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG5cdFx0YXJnc1sgMCBdID0gZXZlbnQ7XG5cblx0XHRmb3IgKCBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdGFyZ3NbIGkgXSA9IGFyZ3VtZW50c1sgaSBdO1xuXHRcdH1cblxuXHRcdGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGhpcztcblxuXHRcdC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcblx0XHRpZiAoIHNwZWNpYWwucHJlRGlzcGF0Y2ggJiYgc3BlY2lhbC5wcmVEaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgaGFuZGxlcnNcblx0XHRoYW5kbGVyUXVldWUgPSBqUXVlcnkuZXZlbnQuaGFuZGxlcnMuY2FsbCggdGhpcywgZXZlbnQsIGhhbmRsZXJzICk7XG5cblx0XHQvLyBSdW4gZGVsZWdhdGVzIGZpcnN0OyB0aGV5IG1heSB3YW50IHRvIHN0b3AgcHJvcGFnYXRpb24gYmVuZWF0aCB1c1xuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKCBtYXRjaGVkID0gaGFuZGxlclF1ZXVlWyBpKysgXSApICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0ZXZlbnQuY3VycmVudFRhcmdldCA9IG1hdGNoZWQuZWxlbTtcblxuXHRcdFx0aiA9IDA7XG5cdFx0XHR3aGlsZSAoICggaGFuZGxlT2JqID0gbWF0Y2hlZC5oYW5kbGVyc1sgaisrIF0gKSAmJlxuXHRcdFx0XHQhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGUgZXZlbnQgaXMgbmFtZXNwYWNlZCwgdGhlbiBlYWNoIGhhbmRsZXIgaXMgb25seSBpbnZva2VkIGlmIGl0IGlzXG5cdFx0XHRcdC8vIHNwZWNpYWxseSB1bml2ZXJzYWwgb3IgaXRzIG5hbWVzcGFjZXMgYXJlIGEgc3VwZXJzZXQgb2YgdGhlIGV2ZW50J3MuXG5cdFx0XHRcdGlmICggIWV2ZW50LnJuYW1lc3BhY2UgfHwgaGFuZGxlT2JqLm5hbWVzcGFjZSA9PT0gZmFsc2UgfHxcblx0XHRcdFx0XHRldmVudC5ybmFtZXNwYWNlLnRlc3QoIGhhbmRsZU9iai5uYW1lc3BhY2UgKSApIHtcblxuXHRcdFx0XHRcdGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG5cblx0XHRcdFx0XHRyZXQgPSAoICggalF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGhhbmRsZU9iai5vcmlnVHlwZSBdIHx8IHt9ICkuaGFuZGxlIHx8XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlciApLmFwcGx5KCBtYXRjaGVkLmVsZW0sIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggcmV0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoICggZXZlbnQucmVzdWx0ID0gcmV0ICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsIHRoZSBwb3N0RGlzcGF0Y2ggaG9vayBmb3IgdGhlIG1hcHBlZCB0eXBlXG5cdFx0aWYgKCBzcGVjaWFsLnBvc3REaXNwYXRjaCApIHtcblx0XHRcdHNwZWNpYWwucG9zdERpc3BhdGNoLmNhbGwoIHRoaXMsIGV2ZW50ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHRoYW5kbGVyczogZnVuY3Rpb24oIGV2ZW50LCBoYW5kbGVycyApIHtcblx0XHR2YXIgaSwgaGFuZGxlT2JqLCBzZWwsIG1hdGNoZWRIYW5kbGVycywgbWF0Y2hlZFNlbGVjdG9ycyxcblx0XHRcdGhhbmRsZXJRdWV1ZSA9IFtdLFxuXHRcdFx0ZGVsZWdhdGVDb3VudCA9IGhhbmRsZXJzLmRlbGVnYXRlQ291bnQsXG5cdFx0XHRjdXIgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50ICYmXG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OVxuXHRcdFx0Ly8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKHRyYWMtMTMxODApXG5cdFx0XHRjdXIubm9kZVR5cGUgJiZcblxuXHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA8PTQyXG5cdFx0XHQvLyBTdXBwcmVzcyBzcGVjLXZpb2xhdGluZyBjbGlja3MgaW5kaWNhdGluZyBhIG5vbi1wcmltYXJ5IHBvaW50ZXIgYnV0dG9uICh0cmFjLTM4NjEpXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTMtRXZlbnRzLyNldmVudC10eXBlLWNsaWNrXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSAxMSBvbmx5XG5cdFx0XHQvLyAuLi5idXQgbm90IGFycm93IGtleSBcImNsaWNrc1wiIG9mIHJhZGlvIGlucHV0cywgd2hpY2ggY2FuIGhhdmUgYGJ1dHRvbmAgLTEgKGdoLTIzNDMpXG5cdFx0XHQhKCBldmVudC50eXBlID09PSBcImNsaWNrXCIgJiYgZXZlbnQuYnV0dG9uID49IDEgKSApIHtcblxuXHRcdFx0Zm9yICggOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMgKSB7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgY2hlY2sgbm9uLWVsZW1lbnRzICh0cmFjLTEzMjA4KVxuXHRcdFx0XHQvLyBEb24ndCBwcm9jZXNzIGNsaWNrcyBvbiBkaXNhYmxlZCBlbGVtZW50cyAodHJhYy02OTExLCB0cmFjLTgxNjUsIHRyYWMtMTEzODIsIHRyYWMtMTE3NjQpXG5cdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlID09PSAxICYmICEoIGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIiAmJiBjdXIuZGlzYWJsZWQgPT09IHRydWUgKSApIHtcblx0XHRcdFx0XHRtYXRjaGVkSGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRtYXRjaGVkU2VsZWN0b3JzID0ge307XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBkZWxlZ2F0ZUNvdW50OyBpKysgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaSBdO1xuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAodHJhYy0xMzIwMylcblx0XHRcdFx0XHRcdHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRTZWxlY3RvcnNbIHNlbCBdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBzZWwsIHRoaXMgKS5pbmRleCggY3VyICkgPiAtMSA6XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQoIHNlbCwgdGhpcywgbnVsbCwgWyBjdXIgXSApLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlZFNlbGVjdG9yc1sgc2VsIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZWRIYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkSGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goIHsgZWxlbTogY3VyLCBoYW5kbGVyczogbWF0Y2hlZEhhbmRsZXJzIH0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cdFx0Y3VyID0gdGhpcztcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgPCBoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRoYW5kbGVyUXVldWUucHVzaCggeyBlbGVtOiBjdXIsIGhhbmRsZXJzOiBoYW5kbGVycy5zbGljZSggZGVsZWdhdGVDb3VudCApIH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGFuZGxlclF1ZXVlO1xuXHR9LFxuXG5cdGFkZFByb3A6IGZ1bmN0aW9uKCBuYW1lLCBob29rICkge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eSggalF1ZXJ5LkV2ZW50LnByb3RvdHlwZSwgbmFtZSwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblxuXHRcdFx0Z2V0OiBpc0Z1bmN0aW9uKCBob29rICkgP1xuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdHJldHVybiBob29rKCB0aGlzLm9yaWdpbmFsRXZlbnQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gOlxuXHRcdFx0XHRmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRpZiAoIHRoaXMub3JpZ2luYWxFdmVudCApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0aGlzLm9yaWdpbmFsRXZlbnRbIG5hbWUgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMsIG5hbWUsIHtcblx0XHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR3cml0YWJsZTogdHJ1ZSxcblx0XHRcdFx0XHR2YWx1ZTogdmFsdWVcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRmaXg6IGZ1bmN0aW9uKCBvcmlnaW5hbEV2ZW50ICkge1xuXHRcdHJldHVybiBvcmlnaW5hbEV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdID9cblx0XHRcdG9yaWdpbmFsRXZlbnQgOlxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCggb3JpZ2luYWxFdmVudCApO1xuXHR9LFxuXG5cdHNwZWNpYWw6IHtcblx0XHRsb2FkOiB7XG5cblx0XHRcdC8vIFByZXZlbnQgdHJpZ2dlcmVkIGltYWdlLmxvYWQgZXZlbnRzIGZyb20gYnViYmxpbmcgdG8gd2luZG93LmxvYWRcblx0XHRcdG5vQnViYmxlOiB0cnVlXG5cdFx0fSxcblx0XHRjbGljazoge1xuXG5cdFx0XHQvLyBVdGlsaXplIG5hdGl2ZSBldmVudCB0byBlbnN1cmUgY29ycmVjdCBzdGF0ZSBmb3IgY2hlY2thYmxlIGlucHV0c1xuXHRcdFx0c2V0dXA6IGZ1bmN0aW9uKCBkYXRhICkge1xuXG5cdFx0XHRcdC8vIEZvciBtdXR1YWwgY29tcHJlc3NpYmlsaXR5IHdpdGggX2RlZmF1bHQsIHJlcGxhY2UgYHRoaXNgIGFjY2VzcyB3aXRoIGEgbG9jYWwgdmFyLlxuXHRcdFx0XHQvLyBgfHwgZGF0YWAgaXMgZGVhZCBjb2RlIG1lYW50IG9ubHkgdG8gcHJlc2VydmUgdGhlIHZhcmlhYmxlIHRocm91Z2ggbWluaWZpY2F0aW9uLlxuXHRcdFx0XHR2YXIgZWwgPSB0aGlzIHx8IGRhdGE7XG5cblx0XHRcdFx0Ly8gQ2xhaW0gdGhlIGZpcnN0IGhhbmRsZXJcblx0XHRcdFx0aWYgKCByY2hlY2thYmxlVHlwZS50ZXN0KCBlbC50eXBlICkgJiZcblx0XHRcdFx0XHRlbC5jbGljayAmJiBub2RlTmFtZSggZWwsIFwiaW5wdXRcIiApICkge1xuXG5cdFx0XHRcdFx0Ly8gZGF0YVByaXYuc2V0KCBlbCwgXCJjbGlja1wiLCAuLi4gKVxuXHRcdFx0XHRcdGxldmVyYWdlTmF0aXZlKCBlbCwgXCJjbGlja1wiLCB0cnVlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXR1cm4gZmFsc2UgdG8gYWxsb3cgbm9ybWFsIHByb2Nlc3NpbmcgaW4gdGhlIGNhbGxlclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oIGRhdGEgKSB7XG5cblx0XHRcdFx0Ly8gRm9yIG11dHVhbCBjb21wcmVzc2liaWxpdHkgd2l0aCBfZGVmYXVsdCwgcmVwbGFjZSBgdGhpc2AgYWNjZXNzIHdpdGggYSBsb2NhbCB2YXIuXG5cdFx0XHRcdC8vIGB8fCBkYXRhYCBpcyBkZWFkIGNvZGUgbWVhbnQgb25seSB0byBwcmVzZXJ2ZSB0aGUgdmFyaWFibGUgdGhyb3VnaCBtaW5pZmljYXRpb24uXG5cdFx0XHRcdHZhciBlbCA9IHRoaXMgfHwgZGF0YTtcblxuXHRcdFx0XHQvLyBGb3JjZSBzZXR1cCBiZWZvcmUgdHJpZ2dlcmluZyBhIGNsaWNrXG5cdFx0XHRcdGlmICggcmNoZWNrYWJsZVR5cGUudGVzdCggZWwudHlwZSApICYmXG5cdFx0XHRcdFx0ZWwuY2xpY2sgJiYgbm9kZU5hbWUoIGVsLCBcImlucHV0XCIgKSApIHtcblxuXHRcdFx0XHRcdGxldmVyYWdlTmF0aXZlKCBlbCwgXCJjbGlja1wiICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXR1cm4gbm9uLWZhbHNlIHRvIGFsbG93IG5vcm1hbCBldmVudC1wYXRoIHByb3BhZ2F0aW9uXG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRm9yIGNyb3NzLWJyb3dzZXIgY29uc2lzdGVuY3ksIHN1cHByZXNzIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xuXHRcdFx0Ly8gQWxzbyBwcmV2ZW50IGl0IGlmIHdlJ3JlIGN1cnJlbnRseSBpbnNpZGUgYSBsZXZlcmFnZWQgbmF0aXZlLWV2ZW50IHN0YWNrXG5cdFx0XHRfZGVmYXVsdDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuXHRcdFx0XHRyZXR1cm4gcmNoZWNrYWJsZVR5cGUudGVzdCggdGFyZ2V0LnR5cGUgKSAmJlxuXHRcdFx0XHRcdHRhcmdldC5jbGljayAmJiBub2RlTmFtZSggdGFyZ2V0LCBcImlucHV0XCIgKSAmJlxuXHRcdFx0XHRcdGRhdGFQcml2LmdldCggdGFyZ2V0LCBcImNsaWNrXCIgKSB8fFxuXHRcdFx0XHRcdG5vZGVOYW1lKCB0YXJnZXQsIFwiYVwiICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGJlZm9yZXVubG9hZDoge1xuXHRcdFx0cG9zdERpc3BhdGNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCAyMCtcblx0XHRcdFx0Ly8gRmlyZWZveCBkb2Vzbid0IGFsZXJ0IGlmIHRoZSByZXR1cm5WYWx1ZSBmaWVsZCBpcyBub3Qgc2V0LlxuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGV2ZW50LnJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8gRW5zdXJlIHRoZSBwcmVzZW5jZSBvZiBhbiBldmVudCBsaXN0ZW5lciB0aGF0IGhhbmRsZXMgbWFudWFsbHktdHJpZ2dlcmVkXG4vLyBzeW50aGV0aWMgZXZlbnRzIGJ5IGludGVycnVwdGluZyBwcm9ncmVzcyB1bnRpbCByZWludm9rZWQgaW4gcmVzcG9uc2UgdG9cbi8vICpuYXRpdmUqIGV2ZW50cyB0aGF0IGl0IGZpcmVzIGRpcmVjdGx5LCBlbnN1cmluZyB0aGF0IHN0YXRlIGNoYW5nZXMgaGF2ZVxuLy8gYWxyZWFkeSBvY2N1cnJlZCBiZWZvcmUgb3RoZXIgbGlzdGVuZXJzIGFyZSBpbnZva2VkLlxuZnVuY3Rpb24gbGV2ZXJhZ2VOYXRpdmUoIGVsLCB0eXBlLCBpc1NldHVwICkge1xuXG5cdC8vIE1pc3NpbmcgYGlzU2V0dXBgIGluZGljYXRlcyBhIHRyaWdnZXIgY2FsbCwgd2hpY2ggbXVzdCBmb3JjZSBzZXR1cCB0aHJvdWdoIGpRdWVyeS5ldmVudC5hZGRcblx0aWYgKCAhaXNTZXR1cCApIHtcblx0XHRpZiAoIGRhdGFQcml2LmdldCggZWwsIHR5cGUgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggZWwsIHR5cGUsIHJldHVyblRydWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVnaXN0ZXIgdGhlIGNvbnRyb2xsZXIgYXMgYSBzcGVjaWFsIHVuaXZlcnNhbCBoYW5kbGVyIGZvciBhbGwgZXZlbnQgbmFtZXNwYWNlc1xuXHRkYXRhUHJpdi5zZXQoIGVsLCB0eXBlLCBmYWxzZSApO1xuXHRqUXVlcnkuZXZlbnQuYWRkKCBlbCwgdHlwZSwge1xuXHRcdG5hbWVzcGFjZTogZmFsc2UsXG5cdFx0aGFuZGxlcjogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0dmFyIHJlc3VsdCxcblx0XHRcdFx0c2F2ZWQgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0aWYgKCAoIGV2ZW50LmlzVHJpZ2dlciAmIDEgKSAmJiB0aGlzWyB0eXBlIF0gKSB7XG5cblx0XHRcdFx0Ly8gSW50ZXJydXB0IHByb2Nlc3Npbmcgb2YgdGhlIG91dGVyIHN5bnRoZXRpYyAudHJpZ2dlcigpZWQgZXZlbnRcblx0XHRcdFx0aWYgKCAhc2F2ZWQgKSB7XG5cblx0XHRcdFx0XHQvLyBTdG9yZSBhcmd1bWVudHMgZm9yIHVzZSB3aGVuIGhhbmRsaW5nIHRoZSBpbm5lciBuYXRpdmUgZXZlbnRcblx0XHRcdFx0XHQvLyBUaGVyZSB3aWxsIGFsd2F5cyBiZSBhdCBsZWFzdCBvbmUgYXJndW1lbnQgKGFuIGV2ZW50IG9iamVjdCksIHNvIHRoaXMgYXJyYXlcblx0XHRcdFx0XHQvLyB3aWxsIG5vdCBiZSBjb25mdXNlZCB3aXRoIGEgbGVmdG92ZXIgY2FwdHVyZSBvYmplY3QuXG5cdFx0XHRcdFx0c2F2ZWQgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIHR5cGUsIHNhdmVkICk7XG5cblx0XHRcdFx0XHQvLyBUcmlnZ2VyIHRoZSBuYXRpdmUgZXZlbnQgYW5kIGNhcHR1cmUgaXRzIHJlc3VsdFxuXHRcdFx0XHRcdHRoaXNbIHR5cGUgXSgpO1xuXHRcdFx0XHRcdHJlc3VsdCA9IGRhdGFQcml2LmdldCggdGhpcywgdHlwZSApO1xuXHRcdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwgZmFsc2UgKTtcblxuXHRcdFx0XHRcdGlmICggc2F2ZWQgIT09IHJlc3VsdCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2FuY2VsIHRoZSBvdXRlciBzeW50aGV0aWMgZXZlbnRcblx0XHRcdFx0XHRcdGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhpcyBpcyBhbiBpbm5lciBzeW50aGV0aWMgZXZlbnQgZm9yIGFuIGV2ZW50IHdpdGggYSBidWJibGluZyBzdXJyb2dhdGVcblx0XHRcdFx0Ly8gKGZvY3VzIG9yIGJsdXIpLCBhc3N1bWUgdGhhdCB0aGUgc3Vycm9nYXRlIGFscmVhZHkgcHJvcGFnYXRlZCBmcm9tIHRyaWdnZXJpbmdcblx0XHRcdFx0Ly8gdGhlIG5hdGl2ZSBldmVudCBhbmQgcHJldmVudCB0aGF0IGZyb20gaGFwcGVuaW5nIGFnYWluIGhlcmUuXG5cdFx0XHRcdC8vIFRoaXMgdGVjaG5pY2FsbHkgZ2V0cyB0aGUgb3JkZXJpbmcgd3Jvbmcgdy5yLnQuIHRvIGAudHJpZ2dlcigpYCAoaW4gd2hpY2ggdGhlXG5cdFx0XHRcdC8vIGJ1YmJsaW5nIHN1cnJvZ2F0ZSBwcm9wYWdhdGVzICphZnRlciogdGhlIG5vbi1idWJibGluZyBiYXNlKSwgYnV0IHRoYXQgc2VlbXNcblx0XHRcdFx0Ly8gbGVzcyBiYWQgdGhhbiBkdXBsaWNhdGlvbi5cblx0XHRcdFx0fSBlbHNlIGlmICggKCBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9ICkuZGVsZWdhdGVUeXBlICkge1xuXHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vIElmIHRoaXMgaXMgYSBuYXRpdmUgZXZlbnQgdHJpZ2dlcmVkIGFib3ZlLCBldmVyeXRoaW5nIGlzIG5vdyBpbiBvcmRlclxuXHRcdFx0Ly8gRmlyZSBhbiBpbm5lciBzeW50aGV0aWMgZXZlbnQgd2l0aCB0aGUgb3JpZ2luYWwgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCBzYXZlZCApIHtcblxuXHRcdFx0XHQvLyAuLi5hbmQgY2FwdHVyZSB0aGUgcmVzdWx0XG5cdFx0XHRcdGRhdGFQcml2LnNldCggdGhpcywgdHlwZSwgalF1ZXJ5LmV2ZW50LnRyaWdnZXIoXG5cdFx0XHRcdFx0c2F2ZWRbIDAgXSxcblx0XHRcdFx0XHRzYXZlZC5zbGljZSggMSApLFxuXHRcdFx0XHRcdHRoaXNcblx0XHRcdFx0KSApO1xuXG5cdFx0XHRcdC8vIEFib3J0IGhhbmRsaW5nIG9mIHRoZSBuYXRpdmUgZXZlbnQgYnkgYWxsIGpRdWVyeSBoYW5kbGVycyB3aGlsZSBhbGxvd2luZ1xuXHRcdFx0XHQvLyBuYXRpdmUgaGFuZGxlcnMgb24gdGhlIHNhbWUgZWxlbWVudCB0byBydW4uIE9uIHRhcmdldCwgdGhpcyBpcyBhY2hpZXZlZFxuXHRcdFx0XHQvLyBieSBzdG9wcGluZyBpbW1lZGlhdGUgcHJvcGFnYXRpb24ganVzdCBvbiB0aGUgalF1ZXJ5IGV2ZW50LiBIb3dldmVyLFxuXHRcdFx0XHQvLyB0aGUgbmF0aXZlIGV2ZW50IGlzIHJlLXdyYXBwZWQgYnkgYSBqUXVlcnkgb25lIG9uIGVhY2ggbGV2ZWwgb2YgdGhlXG5cdFx0XHRcdC8vIHByb3BhZ2F0aW9uIHNvIHRoZSBvbmx5IHdheSB0byBzdG9wIGl0IGZvciBqUXVlcnkgaXMgdG8gc3RvcCBpdCBmb3Jcblx0XHRcdFx0Ly8gZXZlcnlvbmUgdmlhIG5hdGl2ZSBgc3RvcFByb3BhZ2F0aW9uKClgLiBUaGlzIGlzIG5vdCBhIHByb2JsZW0gZm9yXG5cdFx0XHRcdC8vIGZvY3VzL2JsdXIgd2hpY2ggZG9uJ3QgYnViYmxlLCBidXQgaXQgZG9lcyBhbHNvIHN0b3AgY2xpY2sgb24gY2hlY2tib3hlc1xuXHRcdFx0XHQvLyBhbmQgcmFkaW9zLiBXZSBhY2NlcHQgdGhpcyBsaW1pdGF0aW9uLlxuXHRcdFx0XHRldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcblx0XHRcdFx0ZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXHRcdFx0fVxuXHRcdH1cblx0fSApO1xufVxuXG5qUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgdHlwZSwgaGFuZGxlICkge1xuXG5cdC8vIFRoaXMgXCJpZlwiIGlzIG5lZWRlZCBmb3IgcGxhaW4gb2JqZWN0c1xuXHRpZiAoIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcblx0XHRlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGhhbmRsZSApO1xuXHR9XG59O1xuXG5qUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiggc3JjLCBwcm9wcyApIHtcblxuXHQvLyBBbGxvdyBpbnN0YW50aWF0aW9uIHdpdGhvdXQgdGhlICduZXcnIGtleXdvcmRcblx0aWYgKCAhKCB0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50ICkgKSB7XG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuRXZlbnQoIHNyYywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIEV2ZW50IG9iamVjdFxuXHRpZiAoIHNyYyAmJiBzcmMudHlwZSApIHtcblx0XHR0aGlzLm9yaWdpbmFsRXZlbnQgPSBzcmM7XG5cdFx0dGhpcy50eXBlID0gc3JjLnR5cGU7XG5cblx0XHQvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuXHRcdC8vIGJ5IGEgaGFuZGxlciBsb3dlciBkb3duIHRoZSB0cmVlOyByZWZsZWN0IHRoZSBjb3JyZWN0IHZhbHVlLlxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcblx0XHRcdFx0c3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD0yLjMgb25seVxuXHRcdFx0XHRzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID9cblx0XHRcdHJldHVyblRydWUgOlxuXHRcdFx0cmV0dXJuRmFsc2U7XG5cblx0XHQvLyBDcmVhdGUgdGFyZ2V0IHByb3BlcnRpZXNcblx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgPD02IC0gNyBvbmx5XG5cdFx0Ly8gVGFyZ2V0IHNob3VsZCBub3QgYmUgYSB0ZXh0IG5vZGUgKHRyYWMtNTA0LCB0cmFjLTEzMTQzKVxuXHRcdHRoaXMudGFyZ2V0ID0gKCBzcmMudGFyZ2V0ICYmIHNyYy50YXJnZXQubm9kZVR5cGUgPT09IDMgKSA/XG5cdFx0XHRzcmMudGFyZ2V0LnBhcmVudE5vZGUgOlxuXHRcdFx0c3JjLnRhcmdldDtcblxuXHRcdHRoaXMuY3VycmVudFRhcmdldCA9IHNyYy5jdXJyZW50VGFyZ2V0O1xuXHRcdHRoaXMucmVsYXRlZFRhcmdldCA9IHNyYy5yZWxhdGVkVGFyZ2V0O1xuXG5cdC8vIEV2ZW50IHR5cGVcblx0fSBlbHNlIHtcblx0XHR0aGlzLnR5cGUgPSBzcmM7XG5cdH1cblxuXHQvLyBQdXQgZXhwbGljaXRseSBwcm92aWRlZCBwcm9wZXJ0aWVzIG9udG8gdGhlIGV2ZW50IG9iamVjdFxuXHRpZiAoIHByb3BzICkge1xuXHRcdGpRdWVyeS5leHRlbmQoIHRoaXMsIHByb3BzICk7XG5cdH1cblxuXHQvLyBDcmVhdGUgYSB0aW1lc3RhbXAgaWYgaW5jb21pbmcgZXZlbnQgZG9lc24ndCBoYXZlIG9uZVxuXHR0aGlzLnRpbWVTdGFtcCA9IHNyYyAmJiBzcmMudGltZVN0YW1wIHx8IERhdGUubm93KCk7XG5cblx0Ly8gTWFyayBpdCBhcyBmaXhlZFxuXHR0aGlzWyBqUXVlcnkuZXhwYW5kbyBdID0gdHJ1ZTtcbn07XG5cbi8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuLy8gaHR0cHM6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxualF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IGpRdWVyeS5FdmVudCxcblx0aXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcblx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzU2ltdWxhdGVkOiBmYWxzZSxcblxuXHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgIXRoaXMuaXNTaW11bGF0ZWQgKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmICF0aGlzLmlzU2ltdWxhdGVkICkge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG59O1xuXG4vLyBJbmNsdWRlcyBhbGwgY29tbW9uIGV2ZW50IHByb3BzIGluY2x1ZGluZyBLZXlFdmVudCBhbmQgTW91c2VFdmVudCBzcGVjaWZpYyBwcm9wc1xualF1ZXJ5LmVhY2goIHtcblx0YWx0S2V5OiB0cnVlLFxuXHRidWJibGVzOiB0cnVlLFxuXHRjYW5jZWxhYmxlOiB0cnVlLFxuXHRjaGFuZ2VkVG91Y2hlczogdHJ1ZSxcblx0Y3RybEtleTogdHJ1ZSxcblx0ZGV0YWlsOiB0cnVlLFxuXHRldmVudFBoYXNlOiB0cnVlLFxuXHRtZXRhS2V5OiB0cnVlLFxuXHRwYWdlWDogdHJ1ZSxcblx0cGFnZVk6IHRydWUsXG5cdHNoaWZ0S2V5OiB0cnVlLFxuXHR2aWV3OiB0cnVlLFxuXHRcImNoYXJcIjogdHJ1ZSxcblx0Y29kZTogdHJ1ZSxcblx0Y2hhckNvZGU6IHRydWUsXG5cdGtleTogdHJ1ZSxcblx0a2V5Q29kZTogdHJ1ZSxcblx0YnV0dG9uOiB0cnVlLFxuXHRidXR0b25zOiB0cnVlLFxuXHRjbGllbnRYOiB0cnVlLFxuXHRjbGllbnRZOiB0cnVlLFxuXHRvZmZzZXRYOiB0cnVlLFxuXHRvZmZzZXRZOiB0cnVlLFxuXHRwb2ludGVySWQ6IHRydWUsXG5cdHBvaW50ZXJUeXBlOiB0cnVlLFxuXHRzY3JlZW5YOiB0cnVlLFxuXHRzY3JlZW5ZOiB0cnVlLFxuXHR0YXJnZXRUb3VjaGVzOiB0cnVlLFxuXHR0b0VsZW1lbnQ6IHRydWUsXG5cdHRvdWNoZXM6IHRydWUsXG5cdHdoaWNoOiB0cnVlXG59LCBqUXVlcnkuZXZlbnQuYWRkUHJvcCApO1xuXG5qUXVlcnkuZWFjaCggeyBmb2N1czogXCJmb2N1c2luXCIsIGJsdXI6IFwiZm9jdXNvdXRcIiB9LCBmdW5jdGlvbiggdHlwZSwgZGVsZWdhdGVUeXBlICkge1xuXG5cdGZ1bmN0aW9uIGZvY3VzTWFwcGVkSGFuZGxlciggbmF0aXZlRXZlbnQgKSB7XG5cdFx0aWYgKCBkb2N1bWVudC5kb2N1bWVudE1vZGUgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDExK1xuXHRcdFx0Ly8gQXR0YWNoIGEgc2luZ2xlIGZvY3VzaW4vZm9jdXNvdXQgaGFuZGxlciBvbiB0aGUgZG9jdW1lbnQgd2hpbGUgc29tZW9uZSB3YW50c1xuXHRcdFx0Ly8gZm9jdXMvYmx1ci4gVGhpcyBpcyBiZWNhdXNlIHRoZSBmb3JtZXIgYXJlIHN5bmNocm9ub3VzIGluIElFIHdoaWxlIHRoZSBsYXR0ZXJcblx0XHRcdC8vIGFyZSBhc3luYy4gSW4gb3RoZXIgYnJvd3NlcnMsIGFsbCB0aG9zZSBoYW5kbGVycyBhcmUgaW52b2tlZCBzeW5jaHJvbm91c2x5LlxuXG5cdFx0XHQvLyBgaGFuZGxlYCBmcm9tIHByaXZhdGUgZGF0YSB3b3VsZCBhbHJlYWR5IHdyYXAgdGhlIGV2ZW50LCBidXQgd2UgbmVlZFxuXHRcdFx0Ly8gdG8gY2hhbmdlIHRoZSBgdHlwZWAgaGVyZS5cblx0XHRcdHZhciBoYW5kbGUgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIFwiaGFuZGxlXCIgKSxcblx0XHRcdFx0ZXZlbnQgPSBqUXVlcnkuZXZlbnQuZml4KCBuYXRpdmVFdmVudCApO1xuXHRcdFx0ZXZlbnQudHlwZSA9IG5hdGl2ZUV2ZW50LnR5cGUgPT09IFwiZm9jdXNpblwiID8gXCJmb2N1c1wiIDogXCJibHVyXCI7XG5cdFx0XHRldmVudC5pc1NpbXVsYXRlZCA9IHRydWU7XG5cblx0XHRcdC8vIEZpcnN0LCBoYW5kbGUgZm9jdXNpbi9mb2N1c291dFxuXHRcdFx0aGFuZGxlKCBuYXRpdmVFdmVudCApO1xuXG5cdFx0XHQvLyAuLi50aGVuLCBoYW5kbGUgZm9jdXMvYmx1clxuXHRcdFx0Ly9cblx0XHRcdC8vIGZvY3VzL2JsdXIgZG9uJ3QgYnViYmxlIHdoaWxlIGZvY3VzaW4vZm9jdXNvdXQgZG87IHNpbXVsYXRlIHRoZSBmb3JtZXIgYnkgb25seVxuXHRcdFx0Ly8gaW52b2tpbmcgdGhlIGhhbmRsZXIgYXQgdGhlIGxvd2VyIGxldmVsLlxuXHRcdFx0aWYgKCBldmVudC50YXJnZXQgPT09IGV2ZW50LmN1cnJlbnRUYXJnZXQgKSB7XG5cblx0XHRcdFx0Ly8gVGhlIHNldHVwIHBhcnQgY2FsbHMgYGxldmVyYWdlTmF0aXZlYCwgd2hpY2gsIGluIHR1cm4sIGNhbGxzXG5cdFx0XHRcdC8vIGBqUXVlcnkuZXZlbnQuYWRkYCwgc28gZXZlbnQgaGFuZGxlIHdpbGwgYWxyZWFkeSBoYXZlIGJlZW4gc2V0XG5cdFx0XHRcdC8vIGJ5IHRoaXMgcG9pbnQuXG5cdFx0XHRcdGhhbmRsZSggZXZlbnQgKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBGb3Igbm9uLUlFIGJyb3dzZXJzLCBhdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50XG5cdFx0XHQvLyB3aGlsZSBzb21lb25lIHdhbnRzIGZvY3VzaW4vZm9jdXNvdXQuXG5cdFx0XHRqUXVlcnkuZXZlbnQuc2ltdWxhdGUoIGRlbGVnYXRlVHlwZSwgbmF0aXZlRXZlbnQudGFyZ2V0LFxuXHRcdFx0XHRqUXVlcnkuZXZlbnQuZml4KCBuYXRpdmVFdmVudCApICk7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSA9IHtcblxuXHRcdC8vIFV0aWxpemUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdHNldHVwOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0dmFyIGF0dGFjaGVzO1xuXG5cdFx0XHQvLyBDbGFpbSB0aGUgZmlyc3QgaGFuZGxlclxuXHRcdFx0Ly8gZGF0YVByaXYuc2V0KCB0aGlzLCBcImZvY3VzXCIsIC4uLiApXG5cdFx0XHQvLyBkYXRhUHJpdi5zZXQoIHRoaXMsIFwiYmx1clwiLCAuLi4gKVxuXHRcdFx0bGV2ZXJhZ2VOYXRpdmUoIHRoaXMsIHR5cGUsIHRydWUgKTtcblxuXHRcdFx0aWYgKCBkb2N1bWVudC5kb2N1bWVudE1vZGUgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExK1xuXHRcdFx0XHQvLyBXZSB1c2UgdGhlIHNhbWUgbmF0aXZlIGhhbmRsZXIgZm9yIGZvY3VzaW4gJiBmb2N1cyAoYW5kIGZvY3Vzb3V0ICYgYmx1cilcblx0XHRcdFx0Ly8gc28gd2UgbmVlZCB0byBjb29yZGluYXRlIHNldHVwICYgdGVhcmRvd24gcGFydHMgYmV0d2VlbiB0aG9zZSBldmVudHMuXG5cdFx0XHRcdC8vIFVzZSBgZGVsZWdhdGVUeXBlYCBhcyB0aGUga2V5IGFzIGB0eXBlYCBpcyBhbHJlYWR5IHVzZWQgYnkgYGxldmVyYWdlTmF0aXZlYC5cblx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhUHJpdi5nZXQoIHRoaXMsIGRlbGVnYXRlVHlwZSApO1xuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHR0aGlzLmFkZEV2ZW50TGlzdGVuZXIoIGRlbGVnYXRlVHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBkZWxlZ2F0ZVR5cGUsICggYXR0YWNoZXMgfHwgMCApICsgMSApO1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBSZXR1cm4gZmFsc2UgdG8gYWxsb3cgbm9ybWFsIHByb2Nlc3NpbmcgaW4gdGhlIGNhbGxlclxuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gRm9yY2Ugc2V0dXAgYmVmb3JlIHRyaWdnZXJcblx0XHRcdGxldmVyYWdlTmF0aXZlKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdC8vIFJldHVybiBub24tZmFsc2UgdG8gYWxsb3cgbm9ybWFsIGV2ZW50LXBhdGggcHJvcGFnYXRpb25cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHR0ZWFyZG93bjogZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgYXR0YWNoZXM7XG5cblx0XHRcdGlmICggZG9jdW1lbnQuZG9jdW1lbnRNb2RlICkge1xuXHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmdldCggdGhpcywgZGVsZWdhdGVUeXBlICkgLSAxO1xuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoIGRlbGVnYXRlVHlwZSwgZm9jdXNNYXBwZWRIYW5kbGVyICk7XG5cdFx0XHRcdFx0ZGF0YVByaXYucmVtb3ZlKCB0aGlzLCBkZWxlZ2F0ZVR5cGUgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhUHJpdi5zZXQoIHRoaXMsIGRlbGVnYXRlVHlwZSwgYXR0YWNoZXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBSZXR1cm4gZmFsc2UgdG8gaW5kaWNhdGUgc3RhbmRhcmQgdGVhcmRvd24gc2hvdWxkIGJlIGFwcGxpZWRcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHQvLyBTdXBwcmVzcyBuYXRpdmUgZm9jdXMgb3IgYmx1ciBpZiB3ZSdyZSBjdXJyZW50bHkgaW5zaWRlXG5cdFx0Ly8gYSBsZXZlcmFnZWQgbmF0aXZlLWV2ZW50IHN0YWNrXG5cdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHJldHVybiBkYXRhUHJpdi5nZXQoIGV2ZW50LnRhcmdldCwgdHlwZSApO1xuXHRcdH0sXG5cblx0XHRkZWxlZ2F0ZVR5cGU6IGRlbGVnYXRlVHlwZVxuXHR9O1xuXG5cdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD00NFxuXHQvLyBGaXJlZm94IGRvZXNuJ3QgaGF2ZSBmb2N1cyhpbiB8IG91dCkgZXZlbnRzXG5cdC8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Njg3Nzg3XG5cdC8vXG5cdC8vIFN1cHBvcnQ6IENocm9tZSA8PTQ4IC0gNDksIFNhZmFyaSA8PTkuMCAtIDkuMVxuXHQvLyBmb2N1cyhpbiB8IG91dCkgZXZlbnRzIGZpcmUgYWZ0ZXIgZm9jdXMgJiBibHVyIGV2ZW50cyxcblx0Ly8gd2hpY2ggaXMgc3BlYyB2aW9sYXRpb24gLSBodHRwOi8vd3d3LnczLm9yZy9UUi9ET00tTGV2ZWwtMy1FdmVudHMvI2V2ZW50cy1mb2N1c2V2ZW50LWV2ZW50LW9yZGVyXG5cdC8vIFJlbGF0ZWQgdGlja2V0IC0gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDQ5ODU3XG5cdC8vXG5cdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0Ly8gVG8gcHJlc2VydmUgcmVsYXRpdmUgZm9jdXNpbi9mb2N1cyAmIGZvY3Vzb3V0L2JsdXIgZXZlbnQgb3JkZXIgZ3VhcmFudGVlZCBvbiB0aGUgMy54IGJyYW5jaCxcblx0Ly8gYXR0YWNoIGEgc2luZ2xlIGhhbmRsZXIgZm9yIGJvdGggZXZlbnRzIGluIElFLlxuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZGVsZWdhdGVUeXBlIF0gPSB7XG5cdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHQvLyBIYW5kbGU6IHJlZ3VsYXIgbm9kZXMgKHZpYSBgdGhpcy5vd25lckRvY3VtZW50YCksIHdpbmRvd1xuXHRcdFx0Ly8gKHZpYSBgdGhpcy5kb2N1bWVudGApICYgZG9jdW1lbnQgKHZpYSBgdGhpc2ApLlxuXHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdGRhdGFIb2xkZXIgPSBkb2N1bWVudC5kb2N1bWVudE1vZGUgPyB0aGlzIDogZG9jLFxuXHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmdldCggZGF0YUhvbGRlciwgZGVsZWdhdGVUeXBlICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMStcblx0XHRcdC8vIFdlIHVzZSB0aGUgc2FtZSBuYXRpdmUgaGFuZGxlciBmb3IgZm9jdXNpbiAmIGZvY3VzIChhbmQgZm9jdXNvdXQgJiBibHVyKVxuXHRcdFx0Ly8gc28gd2UgbmVlZCB0byBjb29yZGluYXRlIHNldHVwICYgdGVhcmRvd24gcGFydHMgYmV0d2VlbiB0aG9zZSBldmVudHMuXG5cdFx0XHQvLyBVc2UgYGRlbGVnYXRlVHlwZWAgYXMgdGhlIGtleSBhcyBgdHlwZWAgaXMgYWxyZWFkeSB1c2VkIGJ5IGBsZXZlcmFnZU5hdGl2ZWAuXG5cdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0aWYgKCBkb2N1bWVudC5kb2N1bWVudE1vZGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKCBkZWxlZ2F0ZVR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvYy5hZGRFdmVudExpc3RlbmVyKCB0eXBlLCBmb2N1c01hcHBlZEhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0ZGF0YVByaXYuc2V0KCBkYXRhSG9sZGVyLCBkZWxlZ2F0ZVR5cGUsICggYXR0YWNoZXMgfHwgMCApICsgMSApO1xuXHRcdH0sXG5cdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLmRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdGRhdGFIb2xkZXIgPSBkb2N1bWVudC5kb2N1bWVudE1vZGUgPyB0aGlzIDogZG9jLFxuXHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFQcml2LmdldCggZGF0YUhvbGRlciwgZGVsZWdhdGVUeXBlICkgLSAxO1xuXG5cdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0aWYgKCBkb2N1bWVudC5kb2N1bWVudE1vZGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCBkZWxlZ2F0ZVR5cGUsIGZvY3VzTWFwcGVkSGFuZGxlciApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGRvYy5yZW1vdmVFdmVudExpc3RlbmVyKCB0eXBlLCBmb2N1c01hcHBlZEhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhUHJpdi5yZW1vdmUoIGRhdGFIb2xkZXIsIGRlbGVnYXRlVHlwZSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGF0YVByaXYuc2V0KCBkYXRhSG9sZGVyLCBkZWxlZ2F0ZVR5cGUsIGF0dGFjaGVzICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufSApO1xuXG4vLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3Ncbi8vIHNvIHRoYXQgZXZlbnQgZGVsZWdhdGlvbiB3b3JrcyBpbiBqUXVlcnkuXG4vLyBEbyB0aGUgc2FtZSBmb3IgcG9pbnRlcmVudGVyL3BvaW50ZXJsZWF2ZSBhbmQgcG9pbnRlcm92ZXIvcG9pbnRlcm91dFxuLy9cbi8vIFN1cHBvcnQ6IFNhZmFyaSA3IG9ubHlcbi8vIFNhZmFyaSBzZW5kcyBtb3VzZWVudGVyIHRvbyBvZnRlbjsgc2VlOlxuLy8gaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NDcwMjU4XG4vLyBmb3IgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBidWcgKGl0IGV4aXN0ZWQgaW4gb2xkZXIgQ2hyb21lIHZlcnNpb25zIGFzIHdlbGwpLlxualF1ZXJ5LmVhY2goIHtcblx0bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcblx0bW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxuXHRwb2ludGVyZW50ZXI6IFwicG9pbnRlcm92ZXJcIixcblx0cG9pbnRlcmxlYXZlOiBcInBvaW50ZXJvdXRcIlxufSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIG9yaWcgXSA9IHtcblx0XHRkZWxlZ2F0ZVR5cGU6IGZpeCxcblx0XHRiaW5kVHlwZTogZml4LFxuXG5cdFx0aGFuZGxlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgcmV0LFxuXHRcdFx0XHR0YXJnZXQgPSB0aGlzLFxuXHRcdFx0XHRyZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcblx0XHRcdFx0aGFuZGxlT2JqID0gZXZlbnQuaGFuZGxlT2JqO1xuXG5cdFx0XHQvLyBGb3IgbW91c2VlbnRlci9sZWF2ZSBjYWxsIHRoZSBoYW5kbGVyIGlmIHJlbGF0ZWQgaXMgb3V0c2lkZSB0aGUgdGFyZ2V0LlxuXHRcdFx0Ly8gTkI6IE5vIHJlbGF0ZWRUYXJnZXQgaWYgdGhlIG1vdXNlIGxlZnQvZW50ZXJlZCB0aGUgYnJvd3NlciB3aW5kb3dcblx0XHRcdGlmICggIXJlbGF0ZWQgfHwgKCByZWxhdGVkICE9PSB0YXJnZXQgJiYgIWpRdWVyeS5jb250YWlucyggdGFyZ2V0LCByZWxhdGVkICkgKSApIHtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGhhbmRsZU9iai5vcmlnVHlwZTtcblx0XHRcdFx0cmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRldmVudC50eXBlID0gZml4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHRvbjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdG9uZTogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIG9uKCB0aGlzLCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAxICk7XG5cdH0sXG5cdG9mZjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZm4gKSB7XG5cdFx0dmFyIGhhbmRsZU9iaiwgdHlwZTtcblx0XHRpZiAoIHR5cGVzICYmIHR5cGVzLnByZXZlbnREZWZhdWx0ICYmIHR5cGVzLmhhbmRsZU9iaiApIHtcblxuXHRcdFx0Ly8gKCBldmVudCApICBkaXNwYXRjaGVkIGpRdWVyeS5FdmVudFxuXHRcdFx0aGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuXHRcdFx0alF1ZXJ5KCB0eXBlcy5kZWxlZ2F0ZVRhcmdldCApLm9mZihcblx0XHRcdFx0aGFuZGxlT2JqLm5hbWVzcGFjZSA/XG5cdFx0XHRcdFx0aGFuZGxlT2JqLm9yaWdUeXBlICsgXCIuXCIgKyBoYW5kbGVPYmoubmFtZXNwYWNlIDpcblx0XHRcdFx0XHRoYW5kbGVPYmoub3JpZ1R5cGUsXG5cdFx0XHRcdGhhbmRsZU9iai5zZWxlY3Rvcixcblx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cblx0XHRcdC8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG5cdFx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0XHR0aGlzLm9mZiggdHlwZSwgc2VsZWN0b3IsIHR5cGVzWyB0eXBlIF0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiApIHtcblxuXHRcdFx0Ly8gKCB0eXBlcyBbLCBmbl0gKVxuXHRcdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggdGhpcywgdHlwZXMsIGZuLCBzZWxlY3RvciApO1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG5cbnZhclxuXG5cdC8vIFN1cHBvcnQ6IElFIDw9MTAgLSAxMSwgRWRnZSAxMiAtIDEzIG9ubHlcblx0Ly8gSW4gSUUvRWRnZSB1c2luZyByZWdleCBncm91cHMgaGVyZSBjYXVzZXMgc2V2ZXJlIHNsb3dkb3ducy5cblx0Ly8gU2VlIGh0dHBzOi8vY29ubmVjdC5taWNyb3NvZnQuY29tL0lFL2ZlZWRiYWNrL2RldGFpbHMvMTczNjUxMi9cblx0cm5vSW5uZXJodG1sID0gLzxzY3JpcHR8PHN0eWxlfDxsaW5rL2ksXG5cblx0Ly8gY2hlY2tlZD1cImNoZWNrZWRcIiBvciBjaGVja2VkXG5cdHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcblxuXHRyY2xlYW5TY3JpcHQgPSAvXlxccyo8IVxcW0NEQVRBXFxbfFxcXVxcXT5cXHMqJC9nO1xuXG4vLyBQcmVmZXIgYSB0Ym9keSBvdmVyIGl0cyBwYXJlbnQgdGFibGUgZm9yIGNvbnRhaW5pbmcgbmV3IHJvd3NcbmZ1bmN0aW9uIG1hbmlwdWxhdGlvblRhcmdldCggZWxlbSwgY29udGVudCApIHtcblx0aWYgKCBub2RlTmFtZSggZWxlbSwgXCJ0YWJsZVwiICkgJiZcblx0XHRub2RlTmFtZSggY29udGVudC5ub2RlVHlwZSAhPT0gMTEgPyBjb250ZW50IDogY29udGVudC5maXJzdENoaWxkLCBcInRyXCIgKSApIHtcblxuXHRcdHJldHVybiBqUXVlcnkoIGVsZW0gKS5jaGlsZHJlbiggXCJ0Ym9keVwiIClbIDAgXSB8fCBlbGVtO1xuXHR9XG5cblx0cmV0dXJuIGVsZW07XG59XG5cbi8vIFJlcGxhY2UvcmVzdG9yZSB0aGUgdHlwZSBhdHRyaWJ1dGUgb2Ygc2NyaXB0IGVsZW1lbnRzIGZvciBzYWZlIERPTSBtYW5pcHVsYXRpb25cbmZ1bmN0aW9uIGRpc2FibGVTY3JpcHQoIGVsZW0gKSB7XG5cdGVsZW0udHlwZSA9ICggZWxlbS5nZXRBdHRyaWJ1dGUoIFwidHlwZVwiICkgIT09IG51bGwgKSArIFwiL1wiICsgZWxlbS50eXBlO1xuXHRyZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoIGVsZW0gKSB7XG5cdGlmICggKCBlbGVtLnR5cGUgfHwgXCJcIiApLnNsaWNlKCAwLCA1ICkgPT09IFwidHJ1ZS9cIiApIHtcblx0XHRlbGVtLnR5cGUgPSBlbGVtLnR5cGUuc2xpY2UoIDUgKTtcblx0fSBlbHNlIHtcblx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggXCJ0eXBlXCIgKTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG5mdW5jdGlvbiBjbG9uZUNvcHlFdmVudCggc3JjLCBkZXN0ICkge1xuXHR2YXIgaSwgbCwgdHlwZSwgcGRhdGFPbGQsIHVkYXRhT2xkLCB1ZGF0YUN1ciwgZXZlbnRzO1xuXG5cdGlmICggZGVzdC5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyAxLiBDb3B5IHByaXZhdGUgZGF0YTogZXZlbnRzLCBoYW5kbGVycywgZXRjLlxuXHRpZiAoIGRhdGFQcml2Lmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHBkYXRhT2xkID0gZGF0YVByaXYuZ2V0KCBzcmMgKTtcblx0XHRldmVudHMgPSBwZGF0YU9sZC5ldmVudHM7XG5cblx0XHRpZiAoIGV2ZW50cyApIHtcblx0XHRcdGRhdGFQcml2LnJlbW92ZSggZGVzdCwgXCJoYW5kbGUgZXZlbnRzXCIgKTtcblxuXHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gZXZlbnRzWyB0eXBlIF0ubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIGRlc3QsIHR5cGUsIGV2ZW50c1sgdHlwZSBdWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIDIuIENvcHkgdXNlciBkYXRhXG5cdGlmICggZGF0YVVzZXIuaGFzRGF0YSggc3JjICkgKSB7XG5cdFx0dWRhdGFPbGQgPSBkYXRhVXNlci5hY2Nlc3MoIHNyYyApO1xuXHRcdHVkYXRhQ3VyID0galF1ZXJ5LmV4dGVuZCgge30sIHVkYXRhT2xkICk7XG5cblx0XHRkYXRhVXNlci5zZXQoIGRlc3QsIHVkYXRhQ3VyICk7XG5cdH1cbn1cblxuLy8gRml4IElFIGJ1Z3MsIHNlZSBzdXBwb3J0IHRlc3RzXG5mdW5jdGlvbiBmaXhJbnB1dCggc3JjLCBkZXN0ICkge1xuXHR2YXIgbm9kZU5hbWUgPSBkZXN0Lm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cblx0Ly8gRmFpbHMgdG8gcGVyc2lzdCB0aGUgY2hlY2tlZCBzdGF0ZSBvZiBhIGNsb25lZCBjaGVja2JveCBvciByYWRpbyBidXR0b24uXG5cdGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiByY2hlY2thYmxlVHlwZS50ZXN0KCBzcmMudHlwZSApICkge1xuXHRcdGRlc3QuY2hlY2tlZCA9IHNyYy5jaGVja2VkO1xuXG5cdC8vIEZhaWxzIHRvIHJldHVybiB0aGUgc2VsZWN0ZWQgb3B0aW9uIHRvIHRoZSBkZWZhdWx0IHNlbGVjdGVkIHN0YXRlIHdoZW4gY2xvbmluZyBvcHRpb25zXG5cdH0gZWxzZSBpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgfHwgbm9kZU5hbWUgPT09IFwidGV4dGFyZWFcIiApIHtcblx0XHRkZXN0LmRlZmF1bHRWYWx1ZSA9IHNyYy5kZWZhdWx0VmFsdWU7XG5cdH1cbn1cblxuZnVuY3Rpb24gZG9tTWFuaXAoIGNvbGxlY3Rpb24sIGFyZ3MsIGNhbGxiYWNrLCBpZ25vcmVkICkge1xuXG5cdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0YXJncyA9IGZsYXQoIGFyZ3MgKTtcblxuXHR2YXIgZnJhZ21lbnQsIGZpcnN0LCBzY3JpcHRzLCBoYXNTY3JpcHRzLCBub2RlLCBkb2MsXG5cdFx0aSA9IDAsXG5cdFx0bCA9IGNvbGxlY3Rpb24ubGVuZ3RoLFxuXHRcdGlOb0Nsb25lID0gbCAtIDEsXG5cdFx0dmFsdWUgPSBhcmdzWyAwIF0sXG5cdFx0dmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHQvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcblx0aWYgKCB2YWx1ZUlzRnVuY3Rpb24gfHxcblx0XHRcdCggbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCFzdXBwb3J0LmNoZWNrQ2xvbmUgJiYgcmNoZWNrZWQudGVzdCggdmFsdWUgKSApICkge1xuXHRcdHJldHVybiBjb2xsZWN0aW9uLmVhY2goIGZ1bmN0aW9uKCBpbmRleCApIHtcblx0XHRcdHZhciBzZWxmID0gY29sbGVjdGlvbi5lcSggaW5kZXggKTtcblx0XHRcdGlmICggdmFsdWVJc0Z1bmN0aW9uICkge1xuXHRcdFx0XHRhcmdzWyAwIF0gPSB2YWx1ZS5jYWxsKCB0aGlzLCBpbmRleCwgc2VsZi5odG1sKCkgKTtcblx0XHRcdH1cblx0XHRcdGRvbU1hbmlwKCBzZWxmLCBhcmdzLCBjYWxsYmFjaywgaWdub3JlZCApO1xuXHRcdH0gKTtcblx0fVxuXG5cdGlmICggbCApIHtcblx0XHRmcmFnbWVudCA9IGJ1aWxkRnJhZ21lbnQoIGFyZ3MsIGNvbGxlY3Rpb25bIDAgXS5vd25lckRvY3VtZW50LCBmYWxzZSwgY29sbGVjdGlvbiwgaWdub3JlZCApO1xuXHRcdGZpcnN0ID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdGlmICggZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRmcmFnbWVudCA9IGZpcnN0O1xuXHRcdH1cblxuXHRcdC8vIFJlcXVpcmUgZWl0aGVyIG5ldyBjb250ZW50IG9yIGFuIGludGVyZXN0IGluIGlnbm9yZWQgZWxlbWVudHMgdG8gaW52b2tlIHRoZSBjYWxsYmFja1xuXHRcdGlmICggZmlyc3QgfHwgaWdub3JlZCApIHtcblx0XHRcdHNjcmlwdHMgPSBqUXVlcnkubWFwKCBnZXRBbGwoIGZyYWdtZW50LCBcInNjcmlwdFwiICksIGRpc2FibGVTY3JpcHQgKTtcblx0XHRcdGhhc1NjcmlwdHMgPSBzY3JpcHRzLmxlbmd0aDtcblxuXHRcdFx0Ly8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbVxuXHRcdFx0Ly8gaW5zdGVhZCBvZiB0aGUgZmlyc3QgYmVjYXVzZSBpdCBjYW4gZW5kIHVwXG5cdFx0XHQvLyBiZWluZyBlbXB0aWVkIGluY29ycmVjdGx5IGluIGNlcnRhaW4gc2l0dWF0aW9ucyAodHJhYy04MDcwKS5cblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0bm9kZSA9IGZyYWdtZW50O1xuXG5cdFx0XHRcdGlmICggaSAhPT0gaU5vQ2xvbmUgKSB7XG5cdFx0XHRcdFx0bm9kZSA9IGpRdWVyeS5jbG9uZSggbm9kZSwgdHJ1ZSwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0Ly8gS2VlcCByZWZlcmVuY2VzIHRvIGNsb25lZCBzY3JpcHRzIGZvciBsYXRlciByZXN0b3JhdGlvblxuXHRcdFx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5LCBQaGFudG9tSlMgMSBvbmx5XG5cdFx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHNjcmlwdHMsIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Y2FsbGJhY2suY2FsbCggY29sbGVjdGlvblsgaSBdLCBub2RlLCBpICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblx0XHRcdFx0ZG9jID0gc2NyaXB0c1sgc2NyaXB0cy5sZW5ndGggLSAxIF0ub3duZXJEb2N1bWVudDtcblxuXHRcdFx0XHQvLyBSZS1lbmFibGUgc2NyaXB0c1xuXHRcdFx0XHRqUXVlcnkubWFwKCBzY3JpcHRzLCByZXN0b3JlU2NyaXB0ICk7XG5cblx0XHRcdFx0Ly8gRXZhbHVhdGUgZXhlY3V0YWJsZSBzY3JpcHRzIG9uIGZpcnN0IGRvY3VtZW50IGluc2VydGlvblxuXHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IGhhc1NjcmlwdHM7IGkrKyApIHtcblx0XHRcdFx0XHRub2RlID0gc2NyaXB0c1sgaSBdO1xuXHRcdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggbm9kZS50eXBlIHx8IFwiXCIgKSAmJlxuXHRcdFx0XHRcdFx0IWRhdGFQcml2LmFjY2Vzcyggbm9kZSwgXCJnbG9iYWxFdmFsXCIgKSAmJlxuXHRcdFx0XHRcdFx0alF1ZXJ5LmNvbnRhaW5zKCBkb2MsIG5vZGUgKSApIHtcblxuXHRcdFx0XHRcdFx0aWYgKCBub2RlLnNyYyAmJiAoIG5vZGUudHlwZSB8fCBcIlwiICkudG9Mb3dlckNhc2UoKSAgIT09IFwibW9kdWxlXCIgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcblx0XHRcdFx0XHRcdFx0aWYgKCBqUXVlcnkuX2V2YWxVcmwgJiYgIW5vZGUubm9Nb2R1bGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5Ll9ldmFsVXJsKCBub2RlLnNyYywge1xuXHRcdFx0XHRcdFx0XHRcdFx0bm9uY2U6IG5vZGUubm9uY2UgfHwgbm9kZS5nZXRBdHRyaWJ1dGUoIFwibm9uY2VcIiApXG5cdFx0XHRcdFx0XHRcdFx0fSwgZG9jICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gVW53cmFwIGEgQ0RBVEEgc2VjdGlvbiBjb250YWluaW5nIHNjcmlwdCBjb250ZW50cy4gVGhpcyBzaG91bGRuJ3QgYmVcblx0XHRcdFx0XHRcdFx0Ly8gbmVlZGVkIGFzIGluIFhNTCBkb2N1bWVudHMgdGhleSdyZSBhbHJlYWR5IG5vdCB2aXNpYmxlIHdoZW5cblx0XHRcdFx0XHRcdFx0Ly8gaW5zcGVjdGluZyBlbGVtZW50IGNvbnRlbnRzIGFuZCBpbiBIVE1MIGRvY3VtZW50cyB0aGV5IGhhdmUgbm9cblx0XHRcdFx0XHRcdFx0Ly8gbWVhbmluZyBidXQgd2UncmUgcHJlc2VydmluZyB0aGF0IGxvZ2ljIGZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eS5cblx0XHRcdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIGJlIHJlbW92ZWQgY29tcGxldGVseSBpbiA0LjAuIFNlZSBnaC00OTA0LlxuXHRcdFx0XHRcdFx0XHRET01FdmFsKCBub2RlLnRleHRDb250ZW50LnJlcGxhY2UoIHJjbGVhblNjcmlwdCwgXCJcIiApLCBub2RlLCBkb2MgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY29sbGVjdGlvbjtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKCBlbGVtLCBzZWxlY3Rvciwga2VlcERhdGEgKSB7XG5cdHZhciBub2RlLFxuXHRcdG5vZGVzID0gc2VsZWN0b3IgPyBqUXVlcnkuZmlsdGVyKCBzZWxlY3RvciwgZWxlbSApIDogZWxlbSxcblx0XHRpID0gMDtcblxuXHRmb3IgKCA7ICggbm9kZSA9IG5vZGVzWyBpIF0gKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0aWYgKCAha2VlcERhdGEgJiYgbm9kZS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggbm9kZSApICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBub2RlLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRpZiAoIGtlZXBEYXRhICYmIGlzQXR0YWNoZWQoIG5vZGUgKSApIHtcblx0XHRcdFx0c2V0R2xvYmFsRXZhbCggZ2V0QWxsKCBub2RlLCBcInNjcmlwdFwiICkgKTtcblx0XHRcdH1cblx0XHRcdG5vZGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggbm9kZSApO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdGh0bWxQcmVmaWx0ZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHJldHVybiBodG1sO1xuXHR9LFxuXG5cdGNsb25lOiBmdW5jdGlvbiggZWxlbSwgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0dmFyIGksIGwsIHNyY0VsZW1lbnRzLCBkZXN0RWxlbWVudHMsXG5cdFx0XHRjbG9uZSA9IGVsZW0uY2xvbmVOb2RlKCB0cnVlICksXG5cdFx0XHRpblBhZ2UgPSBpc0F0dGFjaGVkKCBlbGVtICk7XG5cblx0XHQvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcblx0XHRpZiAoICFzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkICYmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSApICYmXG5cdFx0XHRcdCFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gV2UgZXNjaGV3IGpRdWVyeSNmaW5kIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM6XG5cdFx0XHQvLyBodHRwczovL2pzcGVyZi5jb20vZ2V0YWxsLXZzLXNpenpsZS8yXG5cdFx0XHRkZXN0RWxlbWVudHMgPSBnZXRBbGwoIGNsb25lICk7XG5cdFx0XHRzcmNFbGVtZW50cyA9IGdldEFsbCggZWxlbSApO1xuXG5cdFx0XHRmb3IgKCBpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0Zml4SW5wdXQoIHNyY0VsZW1lbnRzWyBpIF0sIGRlc3RFbGVtZW50c1sgaSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ29weSB0aGUgZXZlbnRzIGZyb20gdGhlIG9yaWdpbmFsIHRvIHRoZSBjbG9uZVxuXHRcdGlmICggZGF0YUFuZEV2ZW50cyApIHtcblx0XHRcdGlmICggZGVlcERhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRcdHNyY0VsZW1lbnRzID0gc3JjRWxlbWVudHMgfHwgZ2V0QWxsKCBlbGVtICk7XG5cdFx0XHRcdGRlc3RFbGVtZW50cyA9IGRlc3RFbGVtZW50cyB8fCBnZXRBbGwoIGNsb25lICk7XG5cblx0XHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoIHNyY0VsZW1lbnRzWyBpIF0sIGRlc3RFbGVtZW50c1sgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNsb25lQ29weUV2ZW50KCBlbGVtLCBjbG9uZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3Rvcnlcblx0XHRkZXN0RWxlbWVudHMgPSBnZXRBbGwoIGNsb25lLCBcInNjcmlwdFwiICk7XG5cdFx0aWYgKCBkZXN0RWxlbWVudHMubGVuZ3RoID4gMCApIHtcblx0XHRcdHNldEdsb2JhbEV2YWwoIGRlc3RFbGVtZW50cywgIWluUGFnZSAmJiBnZXRBbGwoIGVsZW0sIFwic2NyaXB0XCIgKSApO1xuXHRcdH1cblxuXHRcdC8vIFJldHVybiB0aGUgY2xvbmVkIHNldFxuXHRcdHJldHVybiBjbG9uZTtcblx0fSxcblxuXHRjbGVhbkRhdGE6IGZ1bmN0aW9uKCBlbGVtcyApIHtcblx0XHR2YXIgZGF0YSwgZWxlbSwgdHlwZSxcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbCxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoIGVsZW0gPSBlbGVtc1sgaSBdICkgIT09IHVuZGVmaW5lZDsgaSsrICkge1xuXHRcdFx0aWYgKCBhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cdFx0XHRcdGlmICggKCBkYXRhID0gZWxlbVsgZGF0YVByaXYuZXhwYW5kbyBdICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhLmV2ZW50cyApIHtcblx0XHRcdFx0XHRcdGZvciAoIHR5cGUgaW4gZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggc3BlY2lhbFsgdHlwZSBdICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0XHRcdFx0XHQvLyBUaGlzIGlzIGEgc2hvcnRjdXQgdG8gYXZvaWQgalF1ZXJ5LmV2ZW50LnJlbW92ZSdzIG92ZXJoZWFkXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LnJlbW92ZUV2ZW50KCBlbGVtLCB0eXBlLCBkYXRhLmhhbmRsZSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDw9MzUgLSA0NStcblx0XHRcdFx0XHQvLyBBc3NpZ24gdW5kZWZpbmVkIGluc3RlYWQgb2YgdXNpbmcgZGVsZXRlLCBzZWUgRGF0YSNyZW1vdmVcblx0XHRcdFx0XHRlbGVtWyBkYXRhUHJpdi5leHBhbmRvIF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCBlbGVtWyBkYXRhVXNlci5leHBhbmRvIF0gKSB7XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD0zNSAtIDQ1K1xuXHRcdFx0XHRcdC8vIEFzc2lnbiB1bmRlZmluZWQgaW5zdGVhZCBvZiB1c2luZyBkZWxldGUsIHNlZSBEYXRhI3JlbW92ZVxuXHRcdFx0XHRcdGVsZW1bIGRhdGFVc2VyLmV4cGFuZG8gXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGRldGFjaDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiByZW1vdmUoIHRoaXMsIHNlbGVjdG9yLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHJlbW92ZSggdGhpcywgc2VsZWN0b3IgKTtcblx0fSxcblxuXHR0ZXh0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRqUXVlcnkudGV4dCggdGhpcyApIDpcblx0XHRcdFx0dGhpcy5lbXB0eSgpLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSApO1xuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH0sXG5cblx0YXBwZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCggdGhpcywgZWxlbSApO1xuXHRcdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0cHJlcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZSggZWxlbSwgdGFyZ2V0LmZpcnN0Q2hpbGQgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0YmVmb3JlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gZG9tTWFuaXAoIHRoaXMsIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggZWxlbSwgdGhpcyApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHRhZnRlcjogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMubmV4dFNpYmxpbmcgKTtcblx0XHRcdH1cblx0XHR9ICk7XG5cdH0sXG5cblx0ZW1wdHk6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlbGVtLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7ICggZWxlbSA9IHRoaXNbIGkgXSApICE9IG51bGw7IGkrKyApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgYW55IHJlbWFpbmluZyBub2Rlc1xuXHRcdFx0XHRlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdGRhdGFBbmRFdmVudHMgPSBkYXRhQW5kRXZlbnRzID09IG51bGwgPyBmYWxzZSA6IGRhdGFBbmRFdmVudHM7XG5cdFx0ZGVlcERhdGFBbmRFdmVudHMgPSBkZWVwRGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZGF0YUFuZEV2ZW50cyA6IGRlZXBEYXRhQW5kRXZlbnRzO1xuXG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY2xvbmUoIHRoaXMsIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICk7XG5cdFx0fSApO1xuXHR9LFxuXG5cdGh0bWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgZWxlbSA9IHRoaXNbIDAgXSB8fCB7fSxcblx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdGwgPSB0aGlzLmxlbmd0aDtcblxuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmlubmVySFRNTDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2VlIGlmIHdlIGNhbiB0YWtlIGEgc2hvcnRjdXQgYW5kIGp1c3QgdXNlIGlubmVySFRNTFxuXHRcdFx0aWYgKCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgIXJub0lubmVyaHRtbC50ZXN0KCB2YWx1ZSApICYmXG5cdFx0XHRcdCF3cmFwTWFwWyAoIHJ0YWdOYW1lLmV4ZWMoIHZhbHVlICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCkgXSApIHtcblxuXHRcdFx0XHR2YWx1ZSA9IGpRdWVyeS5odG1sUHJlZmlsdGVyKCB2YWx1ZSApO1xuXG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdFx0ZWxlbSA9IHRoaXNbIGkgXSB8fCB7fTtcblxuXHRcdFx0XHRcdFx0Ly8gUmVtb3ZlIGVsZW1lbnQgbm9kZXMgYW5kIHByZXZlbnQgbWVtb3J5IGxlYWtzXG5cdFx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSwgZmFsc2UgKSApO1xuXHRcdFx0XHRcdFx0XHRlbGVtLmlubmVySFRNTCA9IHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGVsZW0gPSAwO1xuXG5cdFx0XHRcdC8vIElmIHVzaW5nIGlubmVySFRNTCB0aHJvd3MgYW4gZXhjZXB0aW9uLCB1c2UgdGhlIGZhbGxiYWNrIG1ldGhvZFxuXHRcdFx0XHR9IGNhdGNoICggZSApIHt9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0dGhpcy5lbXB0eSgpLmFwcGVuZCggdmFsdWUgKTtcblx0XHRcdH1cblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdHJlcGxhY2VXaXRoOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaWdub3JlZCA9IFtdO1xuXG5cdFx0Ly8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggbm9uLWlnbm9yZWQgY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XG5cdFx0cmV0dXJuIGRvbU1hbmlwKCB0aGlzLCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIHBhcmVudCA9IHRoaXMucGFyZW50Tm9kZTtcblxuXHRcdFx0aWYgKCBqUXVlcnkuaW5BcnJheSggdGhpcywgaWdub3JlZCApIDwgMCApIHtcblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCB0aGlzICkgKTtcblx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cdFx0XHRcdFx0cGFyZW50LnJlcGxhY2VDaGlsZCggZWxlbSwgdGhpcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBGb3JjZSBjYWxsYmFjayBpbnZvY2F0aW9uXG5cdFx0fSwgaWdub3JlZCApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5lYWNoKCB7XG5cdGFwcGVuZFRvOiBcImFwcGVuZFwiLFxuXHRwcmVwZW5kVG86IFwicHJlcGVuZFwiLFxuXHRpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXG5cdGluc2VydEFmdGVyOiBcImFmdGVyXCIsXG5cdHJlcGxhY2VBbGw6IFwicmVwbGFjZVdpdGhcIlxufSwgZnVuY3Rpb24oIG5hbWUsIG9yaWdpbmFsICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgZWxlbXMsXG5cdFx0XHRyZXQgPSBbXSxcblx0XHRcdGluc2VydCA9IGpRdWVyeSggc2VsZWN0b3IgKSxcblx0XHRcdGxhc3QgPSBpbnNlcnQubGVuZ3RoIC0gMSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyBpIDw9IGxhc3Q7IGkrKyApIHtcblx0XHRcdGVsZW1zID0gaSA9PT0gbGFzdCA/IHRoaXMgOiB0aGlzLmNsb25lKCB0cnVlICk7XG5cdFx0XHRqUXVlcnkoIGluc2VydFsgaSBdIClbIG9yaWdpbmFsIF0oIGVsZW1zICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjAgb25seSwgUGhhbnRvbUpTIDEgb25seVxuXHRcdFx0Ly8gLmdldCgpIGJlY2F1c2UgcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0cHVzaC5hcHBseSggcmV0LCBlbGVtcy5nZXQoKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggcmV0ICk7XG5cdH07XG59ICk7XG52YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiICk7XG5cbnZhciByY3VzdG9tUHJvcCA9IC9eLS0vO1xuXG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9MTEgb25seSwgRmlyZWZveCA8PTMwICh0cmFjLTE1MDk4LCB0cmFjLTE0MTUwKVxuXHRcdC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuXHRcdC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuXHRcdHZhciB2aWV3ID0gZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3O1xuXG5cdFx0aWYgKCAhdmlldyB8fCAhdmlldy5vcGVuZXIgKSB7XG5cdFx0XHR2aWV3ID0gd2luZG93O1xuXHRcdH1cblxuXHRcdHJldHVybiB2aWV3LmdldENvbXB1dGVkU3R5bGUoIGVsZW0gKTtcblx0fTtcblxudmFyIHN3YXAgPSBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgY2FsbGJhY2sgKSB7XG5cdHZhciByZXQsIG5hbWUsXG5cdFx0b2xkID0ge307XG5cblx0Ly8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRvbGRbIG5hbWUgXSA9IGVsZW0uc3R5bGVbIG5hbWUgXTtcblx0XHRlbGVtLnN0eWxlWyBuYW1lIF0gPSBvcHRpb25zWyBuYW1lIF07XG5cdH1cblxuXHRyZXQgPSBjYWxsYmFjay5jYWxsKCBlbGVtICk7XG5cblx0Ly8gUmV2ZXJ0IHRoZSBvbGQgdmFsdWVzXG5cdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRlbGVtLnN0eWxlWyBuYW1lIF0gPSBvbGRbIG5hbWUgXTtcblx0fVxuXG5cdHJldHVybiByZXQ7XG59O1xuXG5cbnZhciByYm94U3R5bGUgPSBuZXcgUmVnRXhwKCBjc3NFeHBhbmQuam9pbiggXCJ8XCIgKSwgXCJpXCIgKTtcblxuXG5cbiggZnVuY3Rpb24oKSB7XG5cblx0Ly8gRXhlY3V0aW5nIGJvdGggcGl4ZWxQb3NpdGlvbiAmIGJveFNpemluZ1JlbGlhYmxlIHRlc3RzIHJlcXVpcmUgb25seSBvbmUgbGF5b3V0XG5cdC8vIHNvIHRoZXkncmUgZXhlY3V0ZWQgYXQgdGhlIHNhbWUgdGltZSB0byBzYXZlIHRoZSBzZWNvbmQgY29tcHV0YXRpb24uXG5cdGZ1bmN0aW9uIGNvbXB1dGVTdHlsZVRlc3RzKCkge1xuXG5cdFx0Ly8gVGhpcyBpcyBhIHNpbmdsZXRvbiwgd2UgbmVlZCB0byBleGVjdXRlIGl0IG9ubHkgb25jZVxuXHRcdGlmICggIWRpdiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDt3aWR0aDo2MHB4O1wiICtcblx0XHRcdFwibWFyZ2luLXRvcDoxcHg7cGFkZGluZzowO2JvcmRlcjowXCI7XG5cdFx0ZGl2LnN0eWxlLmNzc1RleHQgPVxuXHRcdFx0XCJwb3NpdGlvbjpyZWxhdGl2ZTtkaXNwbGF5OmJsb2NrO2JveC1zaXppbmc6Ym9yZGVyLWJveDtvdmVyZmxvdzpzY3JvbGw7XCIgK1xuXHRcdFx0XCJtYXJnaW46YXV0bztib3JkZXI6MXB4O3BhZGRpbmc6MXB4O1wiICtcblx0XHRcdFwid2lkdGg6NjAlO3RvcDoxJVwiO1xuXHRcdGRvY3VtZW50RWxlbWVudC5hcHBlbmRDaGlsZCggY29udGFpbmVyICkuYXBwZW5kQ2hpbGQoIGRpdiApO1xuXG5cdFx0dmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGRpdiApO1xuXHRcdHBpeGVsUG9zaXRpb25WYWwgPSBkaXZTdHlsZS50b3AgIT09IFwiMSVcIjtcblxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgNC4wIC0gNC4zIG9ubHksIEZpcmVmb3ggPD0zIC0gNDRcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnRWYWwgPSByb3VuZFBpeGVsTWVhc3VyZXMoIGRpdlN0eWxlLm1hcmdpbkxlZnQgKSA9PT0gMTI7XG5cblx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDQuMCAtIDQuMyBvbmx5LCBTYWZhcmkgPD05LjEgLSAxMC4xLCBpT1MgPD03LjAgLSA5LjNcblx0XHQvLyBTb21lIHN0eWxlcyBjb21lIGJhY2sgd2l0aCBwZXJjZW50YWdlIHZhbHVlcywgZXZlbiB0aG91Z2ggdGhleSBzaG91bGRuJ3Rcblx0XHRkaXYuc3R5bGUucmlnaHQgPSBcIjYwJVwiO1xuXHRcdHBpeGVsQm94U3R5bGVzVmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKCBkaXZTdHlsZS5yaWdodCApID09PSAzNjtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgLSAxMSBvbmx5XG5cdFx0Ly8gRGV0ZWN0IG1pc3JlcG9ydGluZyBvZiBjb250ZW50IGRpbWVuc2lvbnMgZm9yIGJveC1zaXppbmc6Ym9yZGVyLWJveCBlbGVtZW50c1xuXHRcdGJveFNpemluZ1JlbGlhYmxlVmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKCBkaXZTdHlsZS53aWR0aCApID09PSAzNjtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDkgb25seVxuXHRcdC8vIERldGVjdCBvdmVyZmxvdzpzY3JvbGwgc2NyZXdpbmVzcyAoZ2gtMzY5OSlcblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUgPD02NFxuXHRcdC8vIERvbid0IGdldCB0cmlja2VkIHdoZW4gem9vbSBhZmZlY3RzIG9mZnNldFdpZHRoIChnaC00MDI5KVxuXHRcdGRpdi5zdHlsZS5wb3NpdGlvbiA9IFwiYWJzb2x1dGVcIjtcblx0XHRzY3JvbGxib3hTaXplVmFsID0gcm91bmRQaXhlbE1lYXN1cmVzKCBkaXYub2Zmc2V0V2lkdGggLyAzICkgPT09IDEyO1xuXG5cdFx0ZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKCBjb250YWluZXIgKTtcblxuXHRcdC8vIE51bGxpZnkgdGhlIGRpdiBzbyBpdCB3b3VsZG4ndCBiZSBzdG9yZWQgaW4gdGhlIG1lbW9yeSBhbmRcblx0XHQvLyBpdCB3aWxsIGFsc28gYmUgYSBzaWduIHRoYXQgY2hlY2tzIGFscmVhZHkgcGVyZm9ybWVkXG5cdFx0ZGl2ID0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIHJvdW5kUGl4ZWxNZWFzdXJlcyggbWVhc3VyZSApIHtcblx0XHRyZXR1cm4gTWF0aC5yb3VuZCggcGFyc2VGbG9hdCggbWVhc3VyZSApICk7XG5cdH1cblxuXHR2YXIgcGl4ZWxQb3NpdGlvblZhbCwgYm94U2l6aW5nUmVsaWFibGVWYWwsIHNjcm9sbGJveFNpemVWYWwsIHBpeGVsQm94U3R5bGVzVmFsLFxuXHRcdHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsLCByZWxpYWJsZU1hcmdpbkxlZnRWYWwsXG5cdFx0Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcblxuXHQvLyBGaW5pc2ggZWFybHkgaW4gbGltaXRlZCAobm9uLWJyb3dzZXIpIGVudmlyb25tZW50c1xuXHRpZiAoICFkaXYuc3R5bGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUUgPD05IC0gMTEgb25seVxuXHQvLyBTdHlsZSBvZiBjbG9uZWQgZWxlbWVudCBhZmZlY3RzIHNvdXJjZSBlbGVtZW50IGNsb25lZCAodHJhYy04OTA4KVxuXHRkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcImNvbnRlbnQtYm94XCI7XG5cdGRpdi5jbG9uZU5vZGUoIHRydWUgKS5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiXCI7XG5cdHN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlID0gZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID09PSBcImNvbnRlbnQtYm94XCI7XG5cblx0alF1ZXJ5LmV4dGVuZCggc3VwcG9ydCwge1xuXHRcdGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7XG5cdFx0fSxcblx0XHRwaXhlbEJveFN0eWxlczogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsQm94U3R5bGVzVmFsO1xuXHRcdH0sXG5cdFx0cGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0XHRjb21wdXRlU3R5bGVUZXN0cygpO1xuXHRcdFx0cmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG5cdFx0fSxcblx0XHRyZWxpYWJsZU1hcmdpbkxlZnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0Y29tcHV0ZVN0eWxlVGVzdHMoKTtcblx0XHRcdHJldHVybiByZWxpYWJsZU1hcmdpbkxlZnRWYWw7XG5cdFx0fSxcblx0XHRzY3JvbGxib3hTaXplOiBmdW5jdGlvbigpIHtcblx0XHRcdGNvbXB1dGVTdHlsZVRlc3RzKCk7XG5cdFx0XHRyZXR1cm4gc2Nyb2xsYm94U2l6ZVZhbDtcblx0XHR9LFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgOSAtIDExKywgRWRnZSAxNSAtIDE4K1xuXHRcdC8vIElFL0VkZ2UgbWlzcmVwb3J0IGBnZXRDb21wdXRlZFN0eWxlYCBvZiB0YWJsZSByb3dzIHdpdGggd2lkdGgvaGVpZ2h0XG5cdFx0Ly8gc2V0IGluIENTUyB3aGlsZSBgb2Zmc2V0KmAgcHJvcGVydGllcyByZXBvcnQgY29ycmVjdCB2YWx1ZXMuXG5cdFx0Ly8gQmVoYXZpb3IgaW4gSUUgOSBpcyBtb3JlIHN1YnRsZSB0aGFuIGluIG5ld2VyIHZlcnNpb25zICYgaXQgcGFzc2VzXG5cdFx0Ly8gc29tZSB2ZXJzaW9ucyBvZiB0aGlzIHRlc3Q7IG1ha2Ugc3VyZSBub3QgdG8gbWFrZSBpdCBwYXNzIHRoZXJlIVxuXHRcdC8vXG5cdFx0Ly8gU3VwcG9ydDogRmlyZWZveCA3MCtcblx0XHQvLyBPbmx5IEZpcmVmb3ggaW5jbHVkZXMgYm9yZGVyIHdpZHRoc1xuXHRcdC8vIGluIGNvbXB1dGVkIGRpbWVuc2lvbnMuIChnaC00NTI5KVxuXHRcdHJlbGlhYmxlVHJEaW1lbnNpb25zOiBmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0YWJsZSwgdHIsIHRyQ2hpbGQsIHRyU3R5bGU7XG5cdFx0XHRpZiAoIHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHRhYmxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJ0YWJsZVwiICk7XG5cdFx0XHRcdHRyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJ0clwiICk7XG5cdFx0XHRcdHRyQ2hpbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICk7XG5cblx0XHRcdFx0dGFibGUuc3R5bGUuY3NzVGV4dCA9IFwicG9zaXRpb246YWJzb2x1dGU7bGVmdDotMTExMTFweDtib3JkZXItY29sbGFwc2U6c2VwYXJhdGVcIjtcblx0XHRcdFx0dHIuc3R5bGUuY3NzVGV4dCA9IFwiYm94LXNpemluZzpjb250ZW50LWJveDtib3JkZXI6MXB4IHNvbGlkXCI7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQ2hyb21lIDg2K1xuXHRcdFx0XHQvLyBIZWlnaHQgc2V0IHRocm91Z2ggY3NzVGV4dCBkb2VzIG5vdCBnZXQgYXBwbGllZC5cblx0XHRcdFx0Ly8gQ29tcHV0ZWQgaGVpZ2h0IHRoZW4gY29tZXMgYmFjayBhcyAwLlxuXHRcdFx0XHR0ci5zdHlsZS5oZWlnaHQgPSBcIjFweFwiO1xuXHRcdFx0XHR0ckNoaWxkLnN0eWxlLmhlaWdodCA9IFwiOXB4XCI7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA4IENocm9tZSA4Nitcblx0XHRcdFx0Ly8gSW4gb3VyIGJvZHlCYWNrZ3JvdW5kLmh0bWwgaWZyYW1lLFxuXHRcdFx0XHQvLyBkaXNwbGF5IGZvciBhbGwgZGl2IGVsZW1lbnRzIGlzIHNldCB0byBcImlubGluZVwiLFxuXHRcdFx0XHQvLyB3aGljaCBjYXVzZXMgYSBwcm9ibGVtIG9ubHkgaW4gQW5kcm9pZCA4IENocm9tZSA4Ni5cblx0XHRcdFx0Ly8gRW5zdXJpbmcgdGhlIGRpdiBpcyBgZGlzcGxheTogYmxvY2tgXG5cdFx0XHRcdC8vIGdldHMgYXJvdW5kIHRoaXMgaXNzdWUuXG5cdFx0XHRcdHRyQ2hpbGQuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcblxuXHRcdFx0XHRkb2N1bWVudEVsZW1lbnRcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRhYmxlIClcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRyIClcblx0XHRcdFx0XHQuYXBwZW5kQ2hpbGQoIHRyQ2hpbGQgKTtcblxuXHRcdFx0XHR0clN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIHRyICk7XG5cdFx0XHRcdHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsID0gKCBwYXJzZUludCggdHJTdHlsZS5oZWlnaHQsIDEwICkgK1xuXHRcdFx0XHRcdHBhcnNlSW50KCB0clN0eWxlLmJvcmRlclRvcFdpZHRoLCAxMCApICtcblx0XHRcdFx0XHRwYXJzZUludCggdHJTdHlsZS5ib3JkZXJCb3R0b21XaWR0aCwgMTAgKSApID09PSB0ci5vZmZzZXRIZWlnaHQ7XG5cblx0XHRcdFx0ZG9jdW1lbnRFbGVtZW50LnJlbW92ZUNoaWxkKCB0YWJsZSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlbGlhYmxlVHJEaW1lbnNpb25zVmFsO1xuXHRcdH1cblx0fSApO1xufSApKCk7XG5cblxuZnVuY3Rpb24gY3VyQ1NTKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcblx0dmFyIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIHJldCxcblx0XHRpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KCBuYW1lICksXG5cblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94IDUxK1xuXHRcdC8vIFJldHJpZXZpbmcgc3R5bGUgYmVmb3JlIGNvbXB1dGVkIHNvbWVob3dcblx0XHQvLyBmaXhlcyBhbiBpc3N1ZSB3aXRoIGdldHRpbmcgd3JvbmcgdmFsdWVzXG5cdFx0Ly8gb24gZGV0YWNoZWQgZWxlbWVudHNcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0Y29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoIGVsZW0gKTtcblxuXHQvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG5lZWRlZCBmb3I6XG5cdC8vICAgLmNzcygnZmlsdGVyJykgKElFIDkgb25seSwgdHJhYy0xMjUzNylcblx0Ly8gICAuY3NzKCctLWN1c3RvbVByb3BlcnR5KSAoZ2gtMzE0NClcblx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExK1xuXHRcdC8vIElFIG9ubHkgc3VwcG9ydHMgYFwiZmxvYXRcImAgaW4gYGdldFByb3BlcnR5VmFsdWVgOyBpbiBjb21wdXRlZCBzdHlsZXNcblx0XHQvLyBpdCdzIG9ubHkgYXZhaWxhYmxlIGFzIGBcImNzc0Zsb2F0XCJgLiBXZSBubyBsb25nZXIgbW9kaWZ5IHByb3BlcnRpZXNcblx0XHQvLyBzZW50IHRvIGAuY3NzKClgIGFwYXJ0IGZyb20gY2FtZWxDYXNpbmcsIHNvIHdlIG5lZWQgdG8gY2hlY2sgYm90aC5cblx0XHQvLyBOb3JtYWxseSwgdGhpcyB3b3VsZCBjcmVhdGUgZGlmZmVyZW5jZSBpbiBiZWhhdmlvcjogaWZcblx0XHQvLyBgZ2V0UHJvcGVydHlWYWx1ZWAgcmV0dXJucyBhbiBlbXB0eSBzdHJpbmcsIHRoZSB2YWx1ZSByZXR1cm5lZFxuXHRcdC8vIGJ5IGAuY3NzKClgIHdvdWxkIGJlIGB1bmRlZmluZWRgLiBUaGlzIGlzIHVzdWFsbHkgdGhlIGNhc2UgZm9yXG5cdFx0Ly8gZGlzY29ubmVjdGVkIGVsZW1lbnRzLiBIb3dldmVyLCBpbiBJRSBldmVuIGRpc2Nvbm5lY3RlZCBlbGVtZW50c1xuXHRcdC8vIHdpdGggbm8gc3R5bGVzIHJldHVybiBgXCJub25lXCJgIGZvciBgZ2V0UHJvcGVydHlWYWx1ZSggXCJmbG9hdFwiIClgXG5cdFx0cmV0ID0gY29tcHV0ZWQuZ2V0UHJvcGVydHlWYWx1ZSggbmFtZSApIHx8IGNvbXB1dGVkWyBuYW1lIF07XG5cblx0XHRpZiAoIGlzQ3VzdG9tUHJvcCAmJiByZXQgKSB7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMTA1KywgQ2hyb21lIDw9MTA1K1xuXHRcdFx0Ly8gU3BlYyByZXF1aXJlcyB0cmltbWluZyB3aGl0ZXNwYWNlIGZvciBjdXN0b20gcHJvcGVydGllcyAoZ2gtNDkyNikuXG5cdFx0XHQvLyBGaXJlZm94IG9ubHkgdHJpbXMgbGVhZGluZyB3aGl0ZXNwYWNlLiBDaHJvbWUganVzdCBjb2xsYXBzZXNcblx0XHRcdC8vIGJvdGggbGVhZGluZyAmIHRyYWlsaW5nIHdoaXRlc3BhY2UgdG8gYSBzaW5nbGUgc3BhY2UuXG5cdFx0XHQvL1xuXHRcdFx0Ly8gRmFsbCBiYWNrIHRvIGB1bmRlZmluZWRgIGlmIGVtcHR5IHN0cmluZyByZXR1cm5lZC5cblx0XHRcdC8vIFRoaXMgY29sbGFwc2VzIGEgbWlzc2luZyBkZWZpbml0aW9uIHdpdGggcHJvcGVydHkgZGVmaW5lZFxuXHRcdFx0Ly8gYW5kIHNldCB0byBhbiBlbXB0eSBzdHJpbmcgYnV0IHRoZXJlJ3Mgbm8gc3RhbmRhcmQgQVBJXG5cdFx0XHQvLyBhbGxvd2luZyB1cyB0byBkaWZmZXJlbnRpYXRlIHRoZW0gd2l0aG91dCBhIHBlcmZvcm1hbmNlIHBlbmFsdHlcblx0XHRcdC8vIGFuZCByZXR1cm5pbmcgYHVuZGVmaW5lZGAgYWxpZ25zIHdpdGggb2xkZXIgalF1ZXJ5LlxuXHRcdFx0Ly9cblx0XHRcdC8vIHJ0cmltQ1NTIHRyZWF0cyBVKzAwMEQgQ0FSUklBR0UgUkVUVVJOIGFuZCBVKzAwMEMgRk9STSBGRUVEXG5cdFx0XHQvLyBhcyB3aGl0ZXNwYWNlIHdoaWxlIENTUyBkb2VzIG5vdCwgYnV0IHRoaXMgaXMgbm90IGEgcHJvYmxlbVxuXHRcdFx0Ly8gYmVjYXVzZSBDU1MgcHJlcHJvY2Vzc2luZyByZXBsYWNlcyB0aGVtIHdpdGggVSswMDBBIExJTkUgRkVFRFxuXHRcdFx0Ly8gKHdoaWNoICppcyogQ1NTIHdoaXRlc3BhY2UpXG5cdFx0XHQvLyBodHRwczovL3d3dy53My5vcmcvVFIvY3NzLXN5bnRheC0zLyNpbnB1dC1wcmVwcm9jZXNzaW5nXG5cdFx0XHRyZXQgPSByZXQucmVwbGFjZSggcnRyaW1DU1MsIFwiJDFcIiApIHx8IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRpZiAoIHJldCA9PT0gXCJcIiAmJiAhaXNBdHRhY2hlZCggZWxlbSApICkge1xuXHRcdFx0cmV0ID0galF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gQSB0cmlidXRlIHRvIHRoZSBcImF3ZXNvbWUgaGFjayBieSBEZWFuIEVkd2FyZHNcIlxuXHRcdC8vIEFuZHJvaWQgQnJvd3NlciByZXR1cm5zIHBlcmNlbnRhZ2UgZm9yIHNvbWUgdmFsdWVzLFxuXHRcdC8vIGJ1dCB3aWR0aCBzZWVtcyB0byBiZSByZWxpYWJseSBwaXhlbHMuXG5cdFx0Ly8gVGhpcyBpcyBhZ2FpbnN0IHRoZSBDU1NPTSBkcmFmdCBzcGVjOlxuXHRcdC8vIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3NvbS8jcmVzb2x2ZWQtdmFsdWVzXG5cdFx0aWYgKCAhc3VwcG9ydC5waXhlbEJveFN0eWxlcygpICYmIHJudW1ub25weC50ZXN0KCByZXQgKSAmJiByYm94U3R5bGUudGVzdCggbmFtZSApICkge1xuXG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG5cdFx0XHR3aWR0aCA9IHN0eWxlLndpZHRoO1xuXHRcdFx0bWluV2lkdGggPSBzdHlsZS5taW5XaWR0aDtcblx0XHRcdG1heFdpZHRoID0gc3R5bGUubWF4V2lkdGg7XG5cblx0XHRcdC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gc3R5bGUubWF4V2lkdGggPSBzdHlsZS53aWR0aCA9IHJldDtcblx0XHRcdHJldCA9IGNvbXB1dGVkLndpZHRoO1xuXG5cdFx0XHQvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cdFx0XHRzdHlsZS53aWR0aCA9IHdpZHRoO1xuXHRcdFx0c3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcblx0XHRcdHN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldCAhPT0gdW5kZWZpbmVkID9cblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExIG9ubHlcblx0XHQvLyBJRSByZXR1cm5zIHpJbmRleCB2YWx1ZSBhcyBhbiBpbnRlZ2VyLlxuXHRcdHJldCArIFwiXCIgOlxuXHRcdHJldDtcbn1cblxuXG5mdW5jdGlvbiBhZGRHZXRIb29rSWYoIGNvbmRpdGlvbkZuLCBob29rRm4gKSB7XG5cblx0Ly8gRGVmaW5lIHRoZSBob29rLCB3ZSdsbCBjaGVjayBvbiB0aGUgZmlyc3QgcnVuIGlmIGl0J3MgcmVhbGx5IG5lZWRlZC5cblx0cmV0dXJuIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBjb25kaXRpb25GbigpICkge1xuXG5cdFx0XHRcdC8vIEhvb2sgbm90IG5lZWRlZCAob3IgaXQncyBub3QgcG9zc2libGUgdG8gdXNlIGl0IGR1ZVxuXHRcdFx0XHQvLyB0byBtaXNzaW5nIGRlcGVuZGVuY3kpLCByZW1vdmUgaXQuXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmdldDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIb29rIG5lZWRlZDsgcmVkZWZpbmUgaXQgc28gdGhhdCB0aGUgc3VwcG9ydCB0ZXN0IGlzIG5vdCBleGVjdXRlZCBhZ2Fpbi5cblx0XHRcdHJldHVybiAoIHRoaXMuZ2V0ID0gaG9va0ZuICkuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdH1cblx0fTtcbn1cblxuXG52YXIgY3NzUHJlZml4ZXMgPSBbIFwiV2Via2l0XCIsIFwiTW96XCIsIFwibXNcIiBdLFxuXHRlbXB0eVN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLnN0eWxlLFxuXHR2ZW5kb3JQcm9wcyA9IHt9O1xuXG4vLyBSZXR1cm4gYSB2ZW5kb3ItcHJlZml4ZWQgcHJvcGVydHkgb3IgdW5kZWZpbmVkXG5mdW5jdGlvbiB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHtcblxuXHQvLyBDaGVjayBmb3IgdmVuZG9yIHByZWZpeGVkIG5hbWVzXG5cdHZhciBjYXBOYW1lID0gbmFtZVsgMCBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnNsaWNlKCAxICksXG5cdFx0aSA9IGNzc1ByZWZpeGVzLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRuYW1lID0gY3NzUHJlZml4ZXNbIGkgXSArIGNhcE5hbWU7XG5cdFx0aWYgKCBuYW1lIGluIGVtcHR5U3R5bGUgKSB7XG5cdFx0XHRyZXR1cm4gbmFtZTtcblx0XHR9XG5cdH1cbn1cblxuLy8gUmV0dXJuIGEgcG90ZW50aWFsbHktbWFwcGVkIGpRdWVyeS5jc3NQcm9wcyBvciB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbmZ1bmN0aW9uIGZpbmFsUHJvcE5hbWUoIG5hbWUgKSB7XG5cdHZhciBmaW5hbCA9IGpRdWVyeS5jc3NQcm9wc1sgbmFtZSBdIHx8IHZlbmRvclByb3BzWyBuYW1lIF07XG5cblx0aWYgKCBmaW5hbCApIHtcblx0XHRyZXR1cm4gZmluYWw7XG5cdH1cblx0aWYgKCBuYW1lIGluIGVtcHR5U3R5bGUgKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cblx0cmV0dXJuIHZlbmRvclByb3BzWyBuYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggbmFtZSApIHx8IG5hbWU7XG59XG5cblxudmFyXG5cblx0Ly8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZVxuXHQvLyBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcblx0Ly8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG5cdHJkaXNwbGF5c3dhcCA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcblx0Y3NzU2hvdyA9IHsgcG9zaXRpb246IFwiYWJzb2x1dGVcIiwgdmlzaWJpbGl0eTogXCJoaWRkZW5cIiwgZGlzcGxheTogXCJibG9ja1wiIH0sXG5cdGNzc05vcm1hbFRyYW5zZm9ybSA9IHtcblx0XHRsZXR0ZXJTcGFjaW5nOiBcIjBcIixcblx0XHRmb250V2VpZ2h0OiBcIjQwMFwiXG5cdH07XG5cbmZ1bmN0aW9uIHNldFBvc2l0aXZlTnVtYmVyKCBfZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICkge1xuXG5cdC8vIEFueSByZWxhdGl2ZSAoKy8tKSB2YWx1ZXMgaGF2ZSBhbHJlYWR5IGJlZW5cblx0Ly8gbm9ybWFsaXplZCBhdCB0aGlzIHBvaW50XG5cdHZhciBtYXRjaGVzID0gcmNzc051bS5leGVjKCB2YWx1ZSApO1xuXHRyZXR1cm4gbWF0Y2hlcyA/XG5cblx0XHQvLyBHdWFyZCBhZ2FpbnN0IHVuZGVmaW5lZCBcInN1YnRyYWN0XCIsIGUuZy4sIHdoZW4gdXNlZCBhcyBpbiBjc3NIb29rc1xuXHRcdE1hdGgubWF4KCAwLCBtYXRjaGVzWyAyIF0gLSAoIHN1YnRyYWN0IHx8IDAgKSApICsgKCBtYXRjaGVzWyAzIF0gfHwgXCJweFwiICkgOlxuXHRcdHZhbHVlO1xufVxuXG5mdW5jdGlvbiBib3hNb2RlbEFkanVzdG1lbnQoIGVsZW0sIGRpbWVuc2lvbiwgYm94LCBpc0JvcmRlckJveCwgc3R5bGVzLCBjb21wdXRlZFZhbCApIHtcblx0dmFyIGkgPSBkaW1lbnNpb24gPT09IFwid2lkdGhcIiA/IDEgOiAwLFxuXHRcdGV4dHJhID0gMCxcblx0XHRkZWx0YSA9IDAsXG5cdFx0bWFyZ2luRGVsdGEgPSAwO1xuXG5cdC8vIEFkanVzdG1lbnQgbWF5IG5vdCBiZSBuZWNlc3Nhcnlcblx0aWYgKCBib3ggPT09ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSApIHtcblx0XHRyZXR1cm4gMDtcblx0fVxuXG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiApIHtcblxuXHRcdC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpblxuXHRcdC8vIENvdW50IG1hcmdpbiBkZWx0YSBzZXBhcmF0ZWx5IHRvIG9ubHkgYWRkIGl0IGFmdGVyIHNjcm9sbCBndXR0ZXIgYWRqdXN0bWVudC5cblx0XHQvLyBUaGlzIGlzIG5lZWRlZCB0byBtYWtlIG5lZ2F0aXZlIG1hcmdpbnMgd29yayB3aXRoIGBvdXRlckhlaWdodCggdHJ1ZSApYCAoZ2gtMzk4MikuXG5cdFx0aWYgKCBib3ggPT09IFwibWFyZ2luXCIgKSB7XG5cdFx0XHRtYXJnaW5EZWx0YSArPSBqUXVlcnkuY3NzKCBlbGVtLCBib3ggKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGNvbnRlbnQtYm94LCB3ZSdyZSBzZWVraW5nIFwicGFkZGluZ1wiIG9yIFwiYm9yZGVyXCIgb3IgXCJtYXJnaW5cIlxuXHRcdGlmICggIWlzQm9yZGVyQm94ICkge1xuXG5cdFx0XHQvLyBBZGQgcGFkZGluZ1xuXHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEZvciBcImJvcmRlclwiIG9yIFwibWFyZ2luXCIsIGFkZCBib3JkZXJcblx0XHRcdGlmICggYm94ICE9PSBcInBhZGRpbmdcIiApIHtcblx0XHRcdFx0ZGVsdGEgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblxuXHRcdFx0Ly8gQnV0IHN0aWxsIGtlZXAgdHJhY2sgb2YgaXQgb3RoZXJ3aXNlXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRleHRyYSArPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kWyBpIF0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0Ly8gSWYgd2UgZ2V0IGhlcmUgd2l0aCBhIGJvcmRlci1ib3ggKGNvbnRlbnQgKyBwYWRkaW5nICsgYm9yZGVyKSwgd2UncmUgc2Vla2luZyBcImNvbnRlbnRcIiBvclxuXHRcdC8vIFwicGFkZGluZ1wiIG9yIFwibWFyZ2luXCJcblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBGb3IgXCJjb250ZW50XCIsIHN1YnRyYWN0IHBhZGRpbmdcblx0XHRcdGlmICggYm94ID09PSBcImNvbnRlbnRcIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZvciBcImNvbnRlbnRcIiBvciBcInBhZGRpbmdcIiwgc3VidHJhY3QgYm9yZGVyXG5cdFx0XHRpZiAoIGJveCAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdFx0ZGVsdGEgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBBY2NvdW50IGZvciBwb3NpdGl2ZSBjb250ZW50LWJveCBzY3JvbGwgZ3V0dGVyIHdoZW4gcmVxdWVzdGVkIGJ5IHByb3ZpZGluZyBjb21wdXRlZFZhbFxuXHRpZiAoICFpc0JvcmRlckJveCAmJiBjb21wdXRlZFZhbCA+PSAwICkge1xuXG5cdFx0Ly8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIGEgcm91bmRlZCBzdW0gb2YgY29udGVudCwgcGFkZGluZywgc2Nyb2xsIGd1dHRlciwgYW5kIGJvcmRlclxuXHRcdC8vIEFzc3VtaW5nIGludGVnZXIgc2Nyb2xsIGd1dHRlciwgc3VidHJhY3QgdGhlIHJlc3QgYW5kIHJvdW5kIGRvd25cblx0XHRkZWx0YSArPSBNYXRoLm1heCggMCwgTWF0aC5jZWlsKFxuXHRcdFx0ZWxlbVsgXCJvZmZzZXRcIiArIGRpbWVuc2lvblsgMCBdLnRvVXBwZXJDYXNlKCkgKyBkaW1lbnNpb24uc2xpY2UoIDEgKSBdIC1cblx0XHRcdGNvbXB1dGVkVmFsIC1cblx0XHRcdGRlbHRhIC1cblx0XHRcdGV4dHJhIC1cblx0XHRcdDAuNVxuXG5cdFx0Ly8gSWYgb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGlzIHVua25vd24sIHRoZW4gd2UgY2FuJ3QgZGV0ZXJtaW5lIGNvbnRlbnQtYm94IHNjcm9sbCBndXR0ZXJcblx0XHQvLyBVc2UgYW4gZXhwbGljaXQgemVybyB0byBhdm9pZCBOYU4gKGdoLTM5NjQpXG5cdFx0KSApIHx8IDA7XG5cdH1cblxuXHRyZXR1cm4gZGVsdGEgKyBtYXJnaW5EZWx0YTtcbn1cblxuZnVuY3Rpb24gZ2V0V2lkdGhPckhlaWdodCggZWxlbSwgZGltZW5zaW9uLCBleHRyYSApIHtcblxuXHQvLyBTdGFydCB3aXRoIGNvbXB1dGVkIHN0eWxlXG5cdHZhciBzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKSxcblxuXHRcdC8vIFRvIGF2b2lkIGZvcmNpbmcgYSByZWZsb3csIG9ubHkgZmV0Y2ggYm94U2l6aW5nIGlmIHdlIG5lZWQgaXQgKGdoLTQzMjIpLlxuXHRcdC8vIEZha2UgY29udGVudC1ib3ggdW50aWwgd2Uga25vdyBpdCdzIG5lZWRlZCB0byBrbm93IHRoZSB0cnVlIHZhbHVlLlxuXHRcdGJveFNpemluZ05lZWRlZCA9ICFzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgfHwgZXh0cmEsXG5cdFx0aXNCb3JkZXJCb3ggPSBib3hTaXppbmdOZWVkZWQgJiZcblx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0dmFsdWVJc0JvcmRlckJveCA9IGlzQm9yZGVyQm94LFxuXG5cdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBkaW1lbnNpb24sIHN0eWxlcyApLFxuXHRcdG9mZnNldFByb3AgPSBcIm9mZnNldFwiICsgZGltZW5zaW9uWyAwIF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSggMSApO1xuXG5cdC8vIFN1cHBvcnQ6IEZpcmVmb3ggPD01NFxuXHQvLyBSZXR1cm4gYSBjb25mb3VuZGluZyBub24tcGl4ZWwgdmFsdWUgb3IgZmVpZ24gaWdub3JhbmNlLCBhcyBhcHByb3ByaWF0ZS5cblx0aWYgKCBybnVtbm9ucHgudGVzdCggdmFsICkgKSB7XG5cdFx0aWYgKCAhZXh0cmEgKSB7XG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblx0XHR2YWwgPSBcImF1dG9cIjtcblx0fVxuXG5cblx0Ly8gU3VwcG9ydDogSUUgOSAtIDExIG9ubHlcblx0Ly8gVXNlIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBmb3Igd2hlbiBib3ggc2l6aW5nIGlzIHVucmVsaWFibGUuXG5cdC8vIEluIHRob3NlIGNhc2VzLCB0aGUgY29tcHV0ZWQgdmFsdWUgY2FuIGJlIHRydXN0ZWQgdG8gYmUgYm9yZGVyLWJveC5cblx0aWYgKCAoICFzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgJiYgaXNCb3JkZXJCb3ggfHxcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDEwIC0gMTErLCBFZGdlIDE1IC0gMTgrXG5cdFx0Ly8gSUUvRWRnZSBtaXNyZXBvcnQgYGdldENvbXB1dGVkU3R5bGVgIG9mIHRhYmxlIHJvd3Mgd2l0aCB3aWR0aC9oZWlnaHRcblx0XHQvLyBzZXQgaW4gQ1NTIHdoaWxlIGBvZmZzZXQqYCBwcm9wZXJ0aWVzIHJlcG9ydCBjb3JyZWN0IHZhbHVlcy5cblx0XHQvLyBJbnRlcmVzdGluZ2x5LCBpbiBzb21lIGNhc2VzIElFIDkgZG9lc24ndCBzdWZmZXIgZnJvbSB0aGlzIGlzc3VlLlxuXHRcdCFzdXBwb3J0LnJlbGlhYmxlVHJEaW1lbnNpb25zKCkgJiYgbm9kZU5hbWUoIGVsZW0sIFwidHJcIiApIHx8XG5cblx0XHQvLyBGYWxsIGJhY2sgdG8gb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IHdoZW4gdmFsdWUgaXMgXCJhdXRvXCJcblx0XHQvLyBUaGlzIGhhcHBlbnMgZm9yIGlubGluZSBlbGVtZW50cyB3aXRoIG5vIGV4cGxpY2l0IHNldHRpbmcgKGdoLTM1NzEpXG5cdFx0dmFsID09PSBcImF1dG9cIiB8fFxuXG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMSAtIDQuMyBvbmx5XG5cdFx0Ly8gQWxzbyB1c2Ugb2Zmc2V0V2lkdGgvb2Zmc2V0SGVpZ2h0IGZvciBtaXNyZXBvcnRlZCBpbmxpbmUgZGltZW5zaW9ucyAoZ2gtMzYwMilcblx0XHQhcGFyc2VGbG9hdCggdmFsICkgJiYgalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJpbmxpbmVcIiApICYmXG5cblx0XHQvLyBNYWtlIHN1cmUgdGhlIGVsZW1lbnQgaXMgdmlzaWJsZSAmIGNvbm5lY3RlZFxuXHRcdGVsZW0uZ2V0Q2xpZW50UmVjdHMoKS5sZW5ndGggKSB7XG5cblx0XHRpc0JvcmRlckJveCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCI7XG5cblx0XHQvLyBXaGVyZSBhdmFpbGFibGUsIG9mZnNldFdpZHRoL29mZnNldEhlaWdodCBhcHByb3hpbWF0ZSBib3JkZXIgYm94IGRpbWVuc2lvbnMuXG5cdFx0Ly8gV2hlcmUgbm90IGF2YWlsYWJsZSAoZS5nLiwgU1ZHKSwgYXNzdW1lIHVucmVsaWFibGUgYm94LXNpemluZyBhbmQgaW50ZXJwcmV0IHRoZVxuXHRcdC8vIHJldHJpZXZlZCB2YWx1ZSBhcyBhIGNvbnRlbnQgYm94IGRpbWVuc2lvbi5cblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gb2Zmc2V0UHJvcCBpbiBlbGVtO1xuXHRcdGlmICggdmFsdWVJc0JvcmRlckJveCApIHtcblx0XHRcdHZhbCA9IGVsZW1bIG9mZnNldFByb3AgXTtcblx0XHR9XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgXCJcIiBhbmQgYXV0b1xuXHR2YWwgPSBwYXJzZUZsb2F0KCB2YWwgKSB8fCAwO1xuXG5cdC8vIEFkanVzdCBmb3IgdGhlIGVsZW1lbnQncyBib3ggbW9kZWxcblx0cmV0dXJuICggdmFsICtcblx0XHRib3hNb2RlbEFkanVzdG1lbnQoXG5cdFx0XHRlbGVtLFxuXHRcdFx0ZGltZW5zaW9uLFxuXHRcdFx0ZXh0cmEgfHwgKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApLFxuXHRcdFx0dmFsdWVJc0JvcmRlckJveCxcblx0XHRcdHN0eWxlcyxcblxuXHRcdFx0Ly8gUHJvdmlkZSB0aGUgY3VycmVudCBjb21wdXRlZCBzaXplIHRvIHJlcXVlc3Qgc2Nyb2xsIGd1dHRlciBjYWxjdWxhdGlvbiAoZ2gtMzU4OSlcblx0XHRcdHZhbFxuXHRcdClcblx0KSArIFwicHhcIjtcbn1cblxualF1ZXJ5LmV4dGVuZCgge1xuXG5cdC8vIEFkZCBpbiBzdHlsZSBwcm9wZXJ0eSBob29rcyBmb3Igb3ZlcnJpZGluZyB0aGUgZGVmYXVsdFxuXHQvLyBiZWhhdmlvciBvZiBnZXR0aW5nIGFuZCBzZXR0aW5nIGEgc3R5bGUgcHJvcGVydHlcblx0Y3NzSG9va3M6IHtcblx0XHRvcGFjaXR5OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHRcdC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG5cdFx0XHRcdFx0dmFyIHJldCA9IGN1ckNTUyggZWxlbSwgXCJvcGFjaXR5XCIgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV0ID09PSBcIlwiID8gXCIxXCIgOiByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gRG9uJ3QgYXV0b21hdGljYWxseSBhZGQgXCJweFwiIHRvIHRoZXNlIHBvc3NpYmx5LXVuaXRsZXNzIHByb3BlcnRpZXNcblx0Y3NzTnVtYmVyOiB7XG5cdFx0YW5pbWF0aW9uSXRlcmF0aW9uQ291bnQ6IHRydWUsXG5cdFx0YXNwZWN0UmF0aW86IHRydWUsXG5cdFx0Ym9yZGVySW1hZ2VTbGljZTogdHJ1ZSxcblx0XHRjb2x1bW5Db3VudDogdHJ1ZSxcblx0XHRmbGV4R3JvdzogdHJ1ZSxcblx0XHRmbGV4U2hyaW5rOiB0cnVlLFxuXHRcdGZvbnRXZWlnaHQ6IHRydWUsXG5cdFx0Z3JpZEFyZWE6IHRydWUsXG5cdFx0Z3JpZENvbHVtbjogdHJ1ZSxcblx0XHRncmlkQ29sdW1uRW5kOiB0cnVlLFxuXHRcdGdyaWRDb2x1bW5TdGFydDogdHJ1ZSxcblx0XHRncmlkUm93OiB0cnVlLFxuXHRcdGdyaWRSb3dFbmQ6IHRydWUsXG5cdFx0Z3JpZFJvd1N0YXJ0OiB0cnVlLFxuXHRcdGxpbmVIZWlnaHQ6IHRydWUsXG5cdFx0b3BhY2l0eTogdHJ1ZSxcblx0XHRvcmRlcjogdHJ1ZSxcblx0XHRvcnBoYW5zOiB0cnVlLFxuXHRcdHNjYWxlOiB0cnVlLFxuXHRcdHdpZG93czogdHJ1ZSxcblx0XHR6SW5kZXg6IHRydWUsXG5cdFx0em9vbTogdHJ1ZSxcblxuXHRcdC8vIFNWRy1yZWxhdGVkXG5cdFx0ZmlsbE9wYWNpdHk6IHRydWUsXG5cdFx0Zmxvb2RPcGFjaXR5OiB0cnVlLFxuXHRcdHN0b3BPcGFjaXR5OiB0cnVlLFxuXHRcdHN0cm9rZU1pdGVybGltaXQ6IHRydWUsXG5cdFx0c3Ryb2tlT3BhY2l0eTogdHJ1ZVxuXHR9LFxuXG5cdC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcblx0Ly8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuXHRjc3NQcm9wczoge30sXG5cblx0Ly8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcblx0c3R5bGU6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEgKSB7XG5cblx0XHQvLyBEb24ndCBzZXQgc3R5bGVzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoICFlbGVtIHx8IGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCB8fCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcblx0XHR2YXIgcmV0LCB0eXBlLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0gY2FtZWxDYXNlKCBuYW1lICksXG5cdFx0XHRpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KCBuYW1lICksXG5cdFx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWUuIFdlIGRvbid0XG5cdFx0Ly8gd2FudCB0byBxdWVyeSB0aGUgdmFsdWUgaWYgaXQgaXMgYSBDU1MgY3VzdG9tIHByb3BlcnR5XG5cdFx0Ly8gc2luY2UgdGhleSBhcmUgdXNlci1kZWZpbmVkLlxuXHRcdGlmICggIWlzQ3VzdG9tUHJvcCApIHtcblx0XHRcdG5hbWUgPSBmaW5hbFByb3BOYW1lKCBvcmlnTmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIEdldHMgaG9vayBmb3IgdGhlIHByZWZpeGVkIHZlcnNpb24sIHRoZW4gdW5wcmVmaXhlZCB2ZXJzaW9uXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSB8fCBqUXVlcnkuY3NzSG9va3NbIG9yaWdOYW1lIF07XG5cblx0XHQvLyBDaGVjayBpZiB3ZSdyZSBzZXR0aW5nIGEgdmFsdWVcblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG5cdFx0XHQvLyBDb252ZXJ0IFwiKz1cIiBvciBcIi09XCIgdG8gcmVsYXRpdmUgbnVtYmVycyAodHJhYy03MzQ1KVxuXHRcdFx0aWYgKCB0eXBlID09PSBcInN0cmluZ1wiICYmICggcmV0ID0gcmNzc051bS5leGVjKCB2YWx1ZSApICkgJiYgcmV0WyAxIF0gKSB7XG5cdFx0XHRcdHZhbHVlID0gYWRqdXN0Q1NTKCBlbGVtLCBuYW1lLCByZXQgKTtcblxuXHRcdFx0XHQvLyBGaXhlcyBidWcgdHJhYy05MjM3XG5cdFx0XHRcdHR5cGUgPSBcIm51bWJlclwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCBudWxsIGFuZCBOYU4gdmFsdWVzIGFyZW4ndCBzZXQgKHRyYWMtNzExNilcblx0XHRcdGlmICggdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBudW1iZXIgd2FzIHBhc3NlZCBpbiwgYWRkIHRoZSB1bml0IChleGNlcHQgZm9yIGNlcnRhaW4gQ1NTIHByb3BlcnRpZXMpXG5cdFx0XHQvLyBUaGUgaXNDdXN0b21Qcm9wIGNoZWNrIGNhbiBiZSByZW1vdmVkIGluIGpRdWVyeSA0LjAgd2hlbiB3ZSBvbmx5IGF1dG8tYXBwZW5kXG5cdFx0XHQvLyBcInB4XCIgdG8gYSBmZXcgaGFyZGNvZGVkIHZhbHVlcy5cblx0XHRcdGlmICggdHlwZSA9PT0gXCJudW1iZXJcIiAmJiAhaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0XHR2YWx1ZSArPSByZXQgJiYgcmV0WyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBvcmlnTmFtZSBdID8gXCJcIiA6IFwicHhcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG5cdFx0XHRpZiAoICFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoIFwiYmFja2dyb3VuZFwiICkgPT09IDAgKSB7XG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSBcImluaGVyaXRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKCBcInNldFwiIGluIGhvb2tzICkgfHxcblx0XHRcdFx0KCB2YWx1ZSA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIGV4dHJhICkgKSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRcdGlmICggaXNDdXN0b21Qcm9wICkge1xuXHRcdFx0XHRcdHN0eWxlLnNldFByb3BlcnR5KCBuYW1lLCB2YWx1ZSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIG5vbi1jb21wdXRlZCB2YWx1ZSBmcm9tIHRoZXJlXG5cdFx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiZcblx0XHRcdFx0KCByZXQgPSBob29rcy5nZXQoIGVsZW0sIGZhbHNlLCBleHRyYSApICkgIT09IHVuZGVmaW5lZCApIHtcblxuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdGhlcndpc2UganVzdCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHN0eWxlIG9iamVjdFxuXHRcdFx0cmV0dXJuIHN0eWxlWyBuYW1lIF07XG5cdFx0fVxuXHR9LFxuXG5cdGNzczogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGV4dHJhLCBzdHlsZXMgKSB7XG5cdFx0dmFyIHZhbCwgbnVtLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0gY2FtZWxDYXNlKCBuYW1lICksXG5cdFx0XHRpc0N1c3RvbVByb3AgPSByY3VzdG9tUHJvcC50ZXN0KCBuYW1lICk7XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWUuIFdlIGRvbid0XG5cdFx0Ly8gd2FudCB0byBtb2RpZnkgdGhlIHZhbHVlIGlmIGl0IGlzIGEgQ1NTIGN1c3RvbSBwcm9wZXJ0eVxuXHRcdC8vIHNpbmNlIHRoZXkgYXJlIHVzZXItZGVmaW5lZC5cblx0XHRpZiAoICFpc0N1c3RvbVByb3AgKSB7XG5cdFx0XHRuYW1lID0gZmluYWxQcm9wTmFtZSggb3JpZ05hbWUgKTtcblx0XHR9XG5cblx0XHQvLyBUcnkgcHJlZml4ZWQgbmFtZSBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCBuYW1lXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSB8fCBqUXVlcnkuY3NzSG9va3NbIG9yaWdOYW1lIF07XG5cblx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyApIHtcblx0XHRcdHZhbCA9IGhvb2tzLmdldCggZWxlbSwgdHJ1ZSwgZXh0cmEgKTtcblx0XHR9XG5cblx0XHQvLyBPdGhlcndpc2UsIGlmIGEgd2F5IHRvIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZXhpc3RzLCB1c2UgdGhhdFxuXHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIG5hbWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgXCJub3JtYWxcIiB0byBjb21wdXRlZCB2YWx1ZVxuXHRcdGlmICggdmFsID09PSBcIm5vcm1hbFwiICYmIG5hbWUgaW4gY3NzTm9ybWFsVHJhbnNmb3JtICkge1xuXHRcdFx0dmFsID0gY3NzTm9ybWFsVHJhbnNmb3JtWyBuYW1lIF07XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBudW1lcmljIGlmIGZvcmNlZCBvciBhIHF1YWxpZmllciB3YXMgcHJvdmlkZWQgYW5kIHZhbCBsb29rcyBudW1lcmljXG5cdFx0aWYgKCBleHRyYSA9PT0gXCJcIiB8fCBleHRyYSApIHtcblx0XHRcdG51bSA9IHBhcnNlRmxvYXQoIHZhbCApO1xuXHRcdFx0cmV0dXJuIGV4dHJhID09PSB0cnVlIHx8IGlzRmluaXRlKCBudW0gKSA/IG51bSB8fCAwIDogdmFsO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWw7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiIF0sIGZ1bmN0aW9uKCBfaSwgZGltZW5zaW9uICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIGRpbWVuc2lvbiBdID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkLCBleHRyYSApIHtcblx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0Ly8gQ2VydGFpbiBlbGVtZW50cyBjYW4gaGF2ZSBkaW1lbnNpb24gaW5mbyBpZiB3ZSBpbnZpc2libHkgc2hvdyB0aGVtXG5cdFx0XHRcdC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG5cdFx0XHRcdHJldHVybiByZGlzcGxheXN3YXAudGVzdCggalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSApICYmXG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBTYWZhcmkgOCtcblx0XHRcdFx0XHQvLyBUYWJsZSBjb2x1bW5zIGluIFNhZmFyaSBoYXZlIG5vbi16ZXJvIG9mZnNldFdpZHRoICYgemVyb1xuXHRcdFx0XHRcdC8vIGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIHVubGVzcyBkaXNwbGF5IGlzIGNoYW5nZWQuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdFx0XHRcdFx0Ly8gUnVubmluZyBnZXRCb3VuZGluZ0NsaWVudFJlY3Qgb24gYSBkaXNjb25uZWN0ZWQgbm9kZVxuXHRcdFx0XHRcdC8vIGluIElFIHRocm93cyBhbiBlcnJvci5cblx0XHRcdFx0XHQoICFlbGVtLmdldENsaWVudFJlY3RzKCkubGVuZ3RoIHx8ICFlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoICkgP1xuXHRcdFx0XHRcdHN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKTtcblx0XHRcdFx0XHR9ICkgOlxuXHRcdFx0XHRcdGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIGRpbWVuc2lvbiwgZXh0cmEgKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUsIGV4dHJhICkge1xuXHRcdFx0dmFyIG1hdGNoZXMsXG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApLFxuXG5cdFx0XHRcdC8vIE9ubHkgcmVhZCBzdHlsZXMucG9zaXRpb24gaWYgdGhlIHRlc3QgaGFzIGEgY2hhbmNlIHRvIGZhaWxcblx0XHRcdFx0Ly8gdG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdy5cblx0XHRcdFx0c2Nyb2xsYm94U2l6ZUJ1Z2d5ID0gIXN1cHBvcnQuc2Nyb2xsYm94U2l6ZSgpICYmXG5cdFx0XHRcdFx0c3R5bGVzLnBvc2l0aW9uID09PSBcImFic29sdXRlXCIsXG5cblx0XHRcdFx0Ly8gVG8gYXZvaWQgZm9yY2luZyBhIHJlZmxvdywgb25seSBmZXRjaCBib3hTaXppbmcgaWYgd2UgbmVlZCBpdCAoZ2gtMzk5MSlcblx0XHRcdFx0Ym94U2l6aW5nTmVlZGVkID0gc2Nyb2xsYm94U2l6ZUJ1Z2d5IHx8IGV4dHJhLFxuXHRcdFx0XHRpc0JvcmRlckJveCA9IGJveFNpemluZ05lZWRlZCAmJlxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0XHRcdHN1YnRyYWN0ID0gZXh0cmEgP1xuXHRcdFx0XHRcdGJveE1vZGVsQWRqdXN0bWVudChcblx0XHRcdFx0XHRcdGVsZW0sXG5cdFx0XHRcdFx0XHRkaW1lbnNpb24sXG5cdFx0XHRcdFx0XHRleHRyYSxcblx0XHRcdFx0XHRcdGlzQm9yZGVyQm94LFxuXHRcdFx0XHRcdFx0c3R5bGVzXG5cdFx0XHRcdFx0KSA6XG5cdFx0XHRcdFx0MDtcblxuXHRcdFx0Ly8gQWNjb3VudCBmb3IgdW5yZWxpYWJsZSBib3JkZXItYm94IGRpbWVuc2lvbnMgYnkgY29tcGFyaW5nIG9mZnNldCogdG8gY29tcHV0ZWQgYW5kXG5cdFx0XHQvLyBmYWtpbmcgYSBjb250ZW50LWJveCB0byBnZXQgYm9yZGVyIGFuZCBwYWRkaW5nIChnaC0zNjk5KVxuXHRcdFx0aWYgKCBpc0JvcmRlckJveCAmJiBzY3JvbGxib3hTaXplQnVnZ3kgKSB7XG5cdFx0XHRcdHN1YnRyYWN0IC09IE1hdGguY2VpbChcblx0XHRcdFx0XHRlbGVtWyBcIm9mZnNldFwiICsgZGltZW5zaW9uWyAwIF0udG9VcHBlckNhc2UoKSArIGRpbWVuc2lvbi5zbGljZSggMSApIF0gLVxuXHRcdFx0XHRcdHBhcnNlRmxvYXQoIHN0eWxlc1sgZGltZW5zaW9uIF0gKSAtXG5cdFx0XHRcdFx0Ym94TW9kZWxBZGp1c3RtZW50KCBlbGVtLCBkaW1lbnNpb24sIFwiYm9yZGVyXCIsIGZhbHNlLCBzdHlsZXMgKSAtXG5cdFx0XHRcdFx0MC41XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnZlcnQgdG8gcGl4ZWxzIGlmIHZhbHVlIGFkanVzdG1lbnQgaXMgbmVlZGVkXG5cdFx0XHRpZiAoIHN1YnRyYWN0ICYmICggbWF0Y2hlcyA9IHJjc3NOdW0uZXhlYyggdmFsdWUgKSApICYmXG5cdFx0XHRcdCggbWF0Y2hlc1sgMyBdIHx8IFwicHhcIiApICE9PSBcInB4XCIgKSB7XG5cblx0XHRcdFx0ZWxlbS5zdHlsZVsgZGltZW5zaW9uIF0gPSB2YWx1ZTtcblx0XHRcdFx0dmFsdWUgPSBqUXVlcnkuY3NzKCBlbGVtLCBkaW1lbnNpb24gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFBvc2l0aXZlTnVtYmVyKCBlbGVtLCB2YWx1ZSwgc3VidHJhY3QgKTtcblx0XHR9XG5cdH07XG59ICk7XG5cbmpRdWVyeS5jc3NIb29rcy5tYXJnaW5MZWZ0ID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnJlbGlhYmxlTWFyZ2luTGVmdCxcblx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdGlmICggY29tcHV0ZWQgKSB7XG5cdFx0XHRyZXR1cm4gKCBwYXJzZUZsb2F0KCBjdXJDU1MoIGVsZW0sIFwibWFyZ2luTGVmdFwiICkgKSB8fFxuXHRcdFx0XHRlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQgLVxuXHRcdFx0XHRcdHN3YXAoIGVsZW0sIHsgbWFyZ2luTGVmdDogMCB9LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG5cdFx0XHRcdFx0fSApXG5cdFx0XHQpICsgXCJweFwiO1xuXHRcdH1cblx0fVxuKTtcblxuLy8gVGhlc2UgaG9va3MgYXJlIHVzZWQgYnkgYW5pbWF0ZSB0byBleHBhbmQgcHJvcGVydGllc1xualF1ZXJ5LmVhY2goIHtcblx0bWFyZ2luOiBcIlwiLFxuXHRwYWRkaW5nOiBcIlwiLFxuXHRib3JkZXI6IFwiV2lkdGhcIlxufSwgZnVuY3Rpb24oIHByZWZpeCwgc3VmZml4ICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdID0ge1xuXHRcdGV4cGFuZDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGkgPSAwLFxuXHRcdFx0XHRleHBhbmRlZCA9IHt9LFxuXG5cdFx0XHRcdC8vIEFzc3VtZXMgYSBzaW5nbGUgbnVtYmVyIGlmIG5vdCBhIHN0cmluZ1xuXHRcdFx0XHRwYXJ0cyA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KCBcIiBcIiApIDogWyB2YWx1ZSBdO1xuXG5cdFx0XHRmb3IgKCA7IGkgPCA0OyBpKysgKSB7XG5cdFx0XHRcdGV4cGFuZGVkWyBwcmVmaXggKyBjc3NFeHBhbmRbIGkgXSArIHN1ZmZpeCBdID1cblx0XHRcdFx0XHRwYXJ0c1sgaSBdIHx8IHBhcnRzWyBpIC0gMiBdIHx8IHBhcnRzWyAwIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBleHBhbmRlZDtcblx0XHR9XG5cdH07XG5cblx0aWYgKCBwcmVmaXggIT09IFwibWFyZ2luXCIgKSB7XG5cdFx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXS5zZXQgPSBzZXRQb3NpdGl2ZU51bWJlcjtcblx0fVxufSApO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdGNzczogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHZhciBzdHlsZXMsIGxlbixcblx0XHRcdFx0bWFwID0ge30sXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIG5hbWUgKSApIHtcblx0XHRcdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICk7XG5cdFx0XHRcdGxlbiA9IG5hbWUubGVuZ3RoO1xuXG5cdFx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRcdG1hcFsgbmFtZVsgaSBdIF0gPSBqUXVlcnkuY3NzKCBlbGVtLCBuYW1lWyBpIF0sIGZhbHNlLCBzdHlsZXMgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBtYXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB2YWx1ZSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lLCB2YWx1ZSApIDpcblx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApO1xuXHRcdH0sIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9XG59ICk7XG5cblxuZnVuY3Rpb24gVHdlZW4oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nICkge1xuXHRyZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApO1xufVxualF1ZXJ5LlR3ZWVuID0gVHdlZW47XG5cblR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IFR3ZWVuLFxuXHRpbml0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcsIHVuaXQgKSB7XG5cdFx0dGhpcy5lbGVtID0gZWxlbTtcblx0XHR0aGlzLnByb3AgPSBwcm9wO1xuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IGpRdWVyeS5lYXNpbmcuX2RlZmF1bHQ7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5ub3cgPSB0aGlzLmN1cigpO1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMudW5pdCA9IHVuaXQgfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICk7XG5cdH0sXG5cdGN1cjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdHJldHVybiBob29rcyAmJiBob29rcy5nZXQgP1xuXHRcdFx0aG9va3MuZ2V0KCB0aGlzICkgOlxuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LmdldCggdGhpcyApO1xuXHR9LFxuXHRydW46IGZ1bmN0aW9uKCBwZXJjZW50ICkge1xuXHRcdHZhciBlYXNlZCxcblx0XHRcdGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmR1cmF0aW9uICkge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbIHRoaXMuZWFzaW5nIF0oXG5cdFx0XHRcdHBlcmNlbnQsIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAqIHBlcmNlbnQsIDAsIDEsIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IHBlcmNlbnQ7XG5cdFx0fVxuXHRcdHRoaXMubm93ID0gKCB0aGlzLmVuZCAtIHRoaXMuc3RhcnQgKSAqIGVhc2VkICsgdGhpcy5zdGFydDtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnN0ZXAgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKCB0aGlzLmVsZW0sIHRoaXMubm93LCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBob29rcy5zZXQgKSB7XG5cdFx0XHRob29rcy5zZXQoIHRoaXMgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LnNldCggdGhpcyApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcblxuVHdlZW4ucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gVHdlZW4ucHJvdG90eXBlO1xuXG5Ud2Vlbi5wcm9wSG9va3MgPSB7XG5cdF9kZWZhdWx0OiB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0XHQvLyBVc2UgYSBwcm9wZXJ0eSBvbiB0aGUgZWxlbWVudCBkaXJlY3RseSB3aGVuIGl0IGlzIG5vdCBhIERPTSBlbGVtZW50LFxuXHRcdFx0Ly8gb3Igd2hlbiB0aGVyZSBpcyBubyBtYXRjaGluZyBzdHlsZSBwcm9wZXJ0eSB0aGF0IGV4aXN0cy5cblx0XHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAhPT0gMSB8fFxuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gIT0gbnVsbCAmJiB0d2Vlbi5lbGVtLnN0eWxlWyB0d2Vlbi5wcm9wIF0gPT0gbnVsbCApIHtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSAzcmQgcGFyYW1ldGVyIHRvIC5jc3Mgd2lsbCBhdXRvbWF0aWNhbGx5XG5cdFx0XHQvLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuXHRcdFx0Ly8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG5cdFx0XHQvLyBjb21wbGV4IHZhbHVlcyBzdWNoIGFzIFwicm90YXRlKDFyYWQpXCIgYXJlIHJldHVybmVkIGFzLWlzLlxuXHRcdFx0cmVzdWx0ID0galF1ZXJ5LmNzcyggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgXCJcIiApO1xuXG5cdFx0XHQvLyBFbXB0eSBzdHJpbmdzLCBudWxsLCB1bmRlZmluZWQgYW5kIFwiYXV0b1wiIGFyZSBjb252ZXJ0ZWQgdG8gMC5cblx0XHRcdHJldHVybiAhcmVzdWx0IHx8IHJlc3VsdCA9PT0gXCJhdXRvXCIgPyAwIDogcmVzdWx0O1xuXHRcdH0sXG5cdFx0c2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cblx0XHRcdC8vIFVzZSBzdGVwIGhvb2sgZm9yIGJhY2sgY29tcGF0LlxuXHRcdFx0Ly8gVXNlIGNzc0hvb2sgaWYgaXRzIHRoZXJlLlxuXHRcdFx0Ly8gVXNlIC5zdHlsZSBpZiBhdmFpbGFibGUgYW5kIHVzZSBwbGFpbiBwcm9wZXJ0aWVzIHdoZXJlIGF2YWlsYWJsZS5cblx0XHRcdGlmICggalF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSApIHtcblx0XHRcdFx0alF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSggdHdlZW4gKTtcblx0XHRcdH0gZWxzZSBpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKFxuXHRcdFx0XHRqUXVlcnkuY3NzSG9va3NbIHR3ZWVuLnByb3AgXSB8fFxuXHRcdFx0XHRcdHR3ZWVuLmVsZW0uc3R5bGVbIGZpbmFsUHJvcE5hbWUoIHR3ZWVuLnByb3AgKSBdICE9IG51bGwgKSApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG5cdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZWFzaW5nID0ge1xuXHRsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRzd2luZzogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKCBwICogTWF0aC5QSSApIC8gMjtcblx0fSxcblx0X2RlZmF1bHQ6IFwic3dpbmdcIlxufTtcblxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgY29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cblxuXG52YXJcblx0ZnhOb3csIGluUHJvZ3Jlc3MsXG5cdHJmeHR5cGVzID0gL14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFxuXHRycnVuID0gL3F1ZXVlSG9va3MkLztcblxuZnVuY3Rpb24gc2NoZWR1bGUoKSB7XG5cdGlmICggaW5Qcm9ncmVzcyApIHtcblx0XHRpZiAoIGRvY3VtZW50LmhpZGRlbiA9PT0gZmFsc2UgJiYgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSApIHtcblx0XHRcdHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoIHNjaGVkdWxlICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBzY2hlZHVsZSwgalF1ZXJ5LmZ4LmludGVydmFsICk7XG5cdFx0fVxuXG5cdFx0alF1ZXJ5LmZ4LnRpY2soKTtcblx0fVxufVxuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5mdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0d2luZG93LnNldFRpbWVvdXQoIGZ1bmN0aW9uKCkge1xuXHRcdGZ4Tm93ID0gdW5kZWZpbmVkO1xuXHR9ICk7XG5cdHJldHVybiAoIGZ4Tm93ID0gRGF0ZS5ub3coKSApO1xufVxuXG4vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxuZnVuY3Rpb24gZ2VuRngoIHR5cGUsIGluY2x1ZGVXaWR0aCApIHtcblx0dmFyIHdoaWNoLFxuXHRcdGkgPSAwLFxuXHRcdGF0dHJzID0geyBoZWlnaHQ6IHR5cGUgfTtcblxuXHQvLyBJZiB3ZSBpbmNsdWRlIHdpZHRoLCBzdGVwIHZhbHVlIGlzIDEgdG8gZG8gYWxsIGNzc0V4cGFuZCB2YWx1ZXMsXG5cdC8vIG90aGVyd2lzZSBzdGVwIHZhbHVlIGlzIDIgdG8gc2tpcCBvdmVyIExlZnQgYW5kIFJpZ2h0XG5cdGluY2x1ZGVXaWR0aCA9IGluY2x1ZGVXaWR0aCA/IDEgOiAwO1xuXHRmb3IgKCA7IGkgPCA0OyBpICs9IDIgLSBpbmNsdWRlV2lkdGggKSB7XG5cdFx0d2hpY2ggPSBjc3NFeHBhbmRbIGkgXTtcblx0XHRhdHRyc1sgXCJtYXJnaW5cIiArIHdoaWNoIF0gPSBhdHRyc1sgXCJwYWRkaW5nXCIgKyB3aGljaCBdID0gdHlwZTtcblx0fVxuXG5cdGlmICggaW5jbHVkZVdpZHRoICkge1xuXHRcdGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVR3ZWVuKCB2YWx1ZSwgcHJvcCwgYW5pbWF0aW9uICkge1xuXHR2YXIgdHdlZW4sXG5cdFx0Y29sbGVjdGlvbiA9ICggQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW10gKS5jb25jYXQoIEFuaW1hdGlvbi50d2VlbmVyc1sgXCIqXCIgXSApLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBjb2xsZWN0aW9uLmxlbmd0aDtcblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRpZiAoICggdHdlZW4gPSBjb2xsZWN0aW9uWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUgKSApICkge1xuXG5cdFx0XHQvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJlZmlsdGVyKCBlbGVtLCBwcm9wcywgb3B0cyApIHtcblx0dmFyIHByb3AsIHZhbHVlLCB0b2dnbGUsIGhvb2tzLCBvbGRmaXJlLCBwcm9wVHdlZW4sIHJlc3RvcmVEaXNwbGF5LCBkaXNwbGF5LFxuXHRcdGlzQm94ID0gXCJ3aWR0aFwiIGluIHByb3BzIHx8IFwiaGVpZ2h0XCIgaW4gcHJvcHMsXG5cdFx0YW5pbSA9IHRoaXMsXG5cdFx0b3JpZyA9IHt9LFxuXHRcdHN0eWxlID0gZWxlbS5zdHlsZSxcblx0XHRoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuV2l0aGluVHJlZSggZWxlbSApLFxuXHRcdGRhdGFTaG93ID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cblx0Ly8gUXVldWUtc2tpcHBpbmcgYW5pbWF0aW9ucyBoaWphY2sgdGhlIGZ4IGhvb2tzXG5cdGlmICggIW9wdHMucXVldWUgKSB7XG5cdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIFwiZnhcIiApO1xuXHRcdGlmICggaG9va3MudW5xdWV1ZWQgPT0gbnVsbCApIHtcblx0XHRcdGhvb2tzLnVucXVldWVkID0gMDtcblx0XHRcdG9sZGZpcmUgPSBob29rcy5lbXB0eS5maXJlO1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICFob29rcy51bnF1ZXVlZCApIHtcblx0XHRcdFx0XHRvbGRmaXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdGhvb2tzLnVucXVldWVkKys7XG5cblx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIEVuc3VyZSB0aGUgY29tcGxldGUgaGFuZGxlciBpcyBjYWxsZWQgYmVmb3JlIHRoaXMgY29tcGxldGVzXG5cdFx0XHRhbmltLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGhvb2tzLnVucXVldWVkLS07XG5cdFx0XHRcdGlmICggIWpRdWVyeS5xdWV1ZSggZWxlbSwgXCJmeFwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH0gKTtcblx0fVxuXG5cdC8vIERldGVjdCBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRmb3IgKCBwcm9wIGluIHByb3BzICkge1xuXHRcdHZhbHVlID0gcHJvcHNbIHByb3AgXTtcblx0XHRpZiAoIHJmeHR5cGVzLnRlc3QoIHZhbHVlICkgKSB7XG5cdFx0XHRkZWxldGUgcHJvcHNbIHByb3AgXTtcblx0XHRcdHRvZ2dsZSA9IHRvZ2dsZSB8fCB2YWx1ZSA9PT0gXCJ0b2dnbGVcIjtcblx0XHRcdGlmICggdmFsdWUgPT09ICggaGlkZGVuID8gXCJoaWRlXCIgOiBcInNob3dcIiApICkge1xuXG5cdFx0XHRcdC8vIFByZXRlbmQgdG8gYmUgaGlkZGVuIGlmIHRoaXMgaXMgYSBcInNob3dcIiBhbmRcblx0XHRcdFx0Ly8gdGhlcmUgaXMgc3RpbGwgZGF0YSBmcm9tIGEgc3RvcHBlZCBzaG93L2hpZGVcblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJzaG93XCIgJiYgZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IHRydWU7XG5cblx0XHRcdFx0Ly8gSWdub3JlIGFsbCBvdGhlciBuby1vcCBzaG93L2hpZGUgZGF0YVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRvcmlnWyBwcm9wIF0gPSBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdIHx8IGpRdWVyeS5zdHlsZSggZWxlbSwgcHJvcCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIEJhaWwgb3V0IGlmIHRoaXMgaXMgYSBuby1vcCBsaWtlIC5oaWRlKCkuaGlkZSgpXG5cdHByb3BUd2VlbiA9ICFqUXVlcnkuaXNFbXB0eU9iamVjdCggcHJvcHMgKTtcblx0aWYgKCAhcHJvcFR3ZWVuICYmIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBvcmlnICkgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gUmVzdHJpY3QgXCJvdmVyZmxvd1wiIGFuZCBcImRpc3BsYXlcIiBzdHlsZXMgZHVyaW5nIGJveCBhbmltYXRpb25zXG5cdGlmICggaXNCb3ggJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFIDw9OSAtIDExLCBFZGdlIDEyIC0gMTVcblx0XHQvLyBSZWNvcmQgYWxsIDMgb3ZlcmZsb3cgYXR0cmlidXRlcyBiZWNhdXNlIElFIGRvZXMgbm90IGluZmVyIHRoZSBzaG9ydGhhbmRcblx0XHQvLyBmcm9tIGlkZW50aWNhbGx5LXZhbHVlZCBvdmVyZmxvd1ggYW5kIG92ZXJmbG93WSBhbmQgRWRnZSBqdXN0IG1pcnJvcnNcblx0XHQvLyB0aGUgb3ZlcmZsb3dYIHZhbHVlIHRoZXJlLlxuXHRcdG9wdHMub3ZlcmZsb3cgPSBbIHN0eWxlLm92ZXJmbG93LCBzdHlsZS5vdmVyZmxvd1gsIHN0eWxlLm92ZXJmbG93WSBdO1xuXG5cdFx0Ly8gSWRlbnRpZnkgYSBkaXNwbGF5IHR5cGUsIHByZWZlcnJpbmcgb2xkIHNob3cvaGlkZSBkYXRhIG92ZXIgdGhlIENTUyBjYXNjYWRlXG5cdFx0cmVzdG9yZURpc3BsYXkgPSBkYXRhU2hvdyAmJiBkYXRhU2hvdy5kaXNwbGF5O1xuXHRcdGlmICggcmVzdG9yZURpc3BsYXkgPT0gbnVsbCApIHtcblx0XHRcdHJlc3RvcmVEaXNwbGF5ID0gZGF0YVByaXYuZ2V0KCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXHRcdH1cblx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0aWYgKCByZXN0b3JlRGlzcGxheSApIHtcblx0XHRcdFx0ZGlzcGxheSA9IHJlc3RvcmVEaXNwbGF5O1xuXHRcdFx0fSBlbHNlIHtcblxuXHRcdFx0XHQvLyBHZXQgbm9uZW1wdHkgdmFsdWUocykgYnkgdGVtcG9yYXJpbHkgZm9yY2luZyB2aXNpYmlsaXR5XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSwgdHJ1ZSApO1xuXHRcdFx0XHRyZXN0b3JlRGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheSB8fCByZXN0b3JlRGlzcGxheTtcblx0XHRcdFx0ZGlzcGxheSA9IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICk7XG5cdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEFuaW1hdGUgaW5saW5lIGVsZW1lbnRzIGFzIGlubGluZS1ibG9ja1xuXHRcdGlmICggZGlzcGxheSA9PT0gXCJpbmxpbmVcIiB8fCBkaXNwbGF5ID09PSBcImlubGluZS1ibG9ja1wiICYmIHJlc3RvcmVEaXNwbGF5ICE9IG51bGwgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwiZmxvYXRcIiApID09PSBcIm5vbmVcIiApIHtcblxuXHRcdFx0XHQvLyBSZXN0b3JlIHRoZSBvcmlnaW5hbCBkaXNwbGF5IHZhbHVlIGF0IHRoZSBlbmQgb2YgcHVyZSBzaG93L2hpZGUgYW5pbWF0aW9uc1xuXHRcdFx0XHRpZiAoICFwcm9wVHdlZW4gKSB7XG5cdFx0XHRcdFx0YW5pbS5kb25lKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHN0eWxlLmRpc3BsYXkgPSByZXN0b3JlRGlzcGxheTtcblx0XHRcdFx0XHR9ICk7XG5cdFx0XHRcdFx0aWYgKCByZXN0b3JlRGlzcGxheSA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0ZGlzcGxheSA9IHN0eWxlLmRpc3BsYXk7XG5cdFx0XHRcdFx0XHRyZXN0b3JlRGlzcGxheSA9IGRpc3BsYXkgPT09IFwibm9uZVwiID8gXCJcIiA6IGRpc3BsYXk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdGlmICggb3B0cy5vdmVyZmxvdyApIHtcblx0XHRzdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0YW5pbS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0c3R5bGUub3ZlcmZsb3cgPSBvcHRzLm92ZXJmbG93WyAwIF07XG5cdFx0XHRzdHlsZS5vdmVyZmxvd1ggPSBvcHRzLm92ZXJmbG93WyAxIF07XG5cdFx0XHRzdHlsZS5vdmVyZmxvd1kgPSBvcHRzLm92ZXJmbG93WyAyIF07XG5cdFx0fSApO1xuXHR9XG5cblx0Ly8gSW1wbGVtZW50IHNob3cvaGlkZSBhbmltYXRpb25zXG5cdHByb3BUd2VlbiA9IGZhbHNlO1xuXHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cblx0XHQvLyBHZW5lcmFsIHNob3cvaGlkZSBzZXR1cCBmb3IgdGhpcyBlbGVtZW50IGFuaW1hdGlvblxuXHRcdGlmICggIXByb3BUd2VlbiApIHtcblx0XHRcdGlmICggZGF0YVNob3cgKSB7XG5cdFx0XHRcdGlmICggXCJoaWRkZW5cIiBpbiBkYXRhU2hvdyApIHtcblx0XHRcdFx0XHRoaWRkZW4gPSBkYXRhU2hvdy5oaWRkZW47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRhdGFTaG93ID0gZGF0YVByaXYuYWNjZXNzKCBlbGVtLCBcImZ4c2hvd1wiLCB7IGRpc3BsYXk6IHJlc3RvcmVEaXNwbGF5IH0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RvcmUgaGlkZGVuL3Zpc2libGUgZm9yIHRvZ2dsZSBzbyBgLnN0b3AoKS50b2dnbGUoKWAgXCJyZXZlcnNlc1wiXG5cdFx0XHRpZiAoIHRvZ2dsZSApIHtcblx0XHRcdFx0ZGF0YVNob3cuaGlkZGVuID0gIWhpZGRlbjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU2hvdyBlbGVtZW50cyBiZWZvcmUgYW5pbWF0aW5nIHRoZW1cblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRzaG93SGlkZSggWyBlbGVtIF0sIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0LyogZXNsaW50LWRpc2FibGUgbm8tbG9vcC1mdW5jICovXG5cblx0XHRcdGFuaW0uZG9uZSggZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0LyogZXNsaW50LWVuYWJsZSBuby1sb29wLWZ1bmMgKi9cblxuXHRcdFx0XHQvLyBUaGUgZmluYWwgc3RlcCBvZiBhIFwiaGlkZVwiIGFuaW1hdGlvbiBpcyBhY3R1YWxseSBoaWRpbmcgdGhlIGVsZW1lbnRcblx0XHRcdFx0aWYgKCAhaGlkZGVuICkge1xuXHRcdFx0XHRcdHNob3dIaWRlKCBbIGVsZW0gXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGRhdGFQcml2LnJlbW92ZSggZWxlbSwgXCJmeHNob3dcIiApO1xuXHRcdFx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBvcmlnWyBwcm9wIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdC8vIFBlci1wcm9wZXJ0eSBzZXR1cFxuXHRcdHByb3BUd2VlbiA9IGNyZWF0ZVR3ZWVuKCBoaWRkZW4gPyBkYXRhU2hvd1sgcHJvcCBdIDogMCwgcHJvcCwgYW5pbSApO1xuXHRcdGlmICggISggcHJvcCBpbiBkYXRhU2hvdyApICkge1xuXHRcdFx0ZGF0YVNob3dbIHByb3AgXSA9IHByb3BUd2Vlbi5zdGFydDtcblx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRwcm9wVHdlZW4uZW5kID0gcHJvcFR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRwcm9wVHdlZW4uc3RhcnQgPSAwO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcblx0dmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuXHQvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3Ncblx0Zm9yICggaW5kZXggaW4gcHJvcHMgKSB7XG5cdFx0bmFtZSA9IGNhbWVsQ2FzZSggaW5kZXggKTtcblx0XHRlYXNpbmcgPSBzcGVjaWFsRWFzaW5nWyBuYW1lIF07XG5cdFx0dmFsdWUgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRpZiAoIEFycmF5LmlzQXJyYXkoIHZhbHVlICkgKSB7XG5cdFx0XHRlYXNpbmcgPSB2YWx1ZVsgMSBdO1xuXHRcdFx0dmFsdWUgPSBwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyAwIF07XG5cdFx0fVxuXG5cdFx0aWYgKCBpbmRleCAhPT0gbmFtZSApIHtcblx0XHRcdHByb3BzWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgaW5kZXggXTtcblx0XHR9XG5cblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdO1xuXHRcdGlmICggaG9va3MgJiYgXCJleHBhbmRcIiBpbiBob29rcyApIHtcblx0XHRcdHZhbHVlID0gaG9va3MuZXhwYW5kKCB2YWx1ZSApO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBuYW1lIF07XG5cblx0XHRcdC8vIE5vdCBxdWl0ZSAkLmV4dGVuZCwgdGhpcyB3b24ndCBvdmVyd3JpdGUgZXhpc3Rpbmcga2V5cy5cblx0XHRcdC8vIFJldXNpbmcgJ2luZGV4JyBiZWNhdXNlIHdlIGhhdmUgdGhlIGNvcnJlY3QgXCJuYW1lXCJcblx0XHRcdGZvciAoIGluZGV4IGluIHZhbHVlICkge1xuXHRcdFx0XHRpZiAoICEoIGluZGV4IGluIHByb3BzICkgKSB7XG5cdFx0XHRcdFx0cHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgaW5kZXggXTtcblx0XHRcdFx0XHRzcGVjaWFsRWFzaW5nWyBpbmRleCBdID0gZWFzaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHNwZWNpYWxFYXNpbmdbIG5hbWUgXSA9IGVhc2luZztcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gQW5pbWF0aW9uKCBlbGVtLCBwcm9wZXJ0aWVzLCBvcHRpb25zICkge1xuXHR2YXIgcmVzdWx0LFxuXHRcdHN0b3BwZWQsXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IEFuaW1hdGlvbi5wcmVmaWx0ZXJzLmxlbmd0aCxcblx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIERvbid0IG1hdGNoIGVsZW0gaW4gdGhlIDphbmltYXRlZCBzZWxlY3RvclxuXHRcdFx0ZGVsZXRlIHRpY2suZWxlbTtcblx0XHR9ICksXG5cdFx0dGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgY3VycmVudFRpbWUgPSBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0XHRyZW1haW5pbmcgPSBNYXRoLm1heCggMCwgYW5pbWF0aW9uLnN0YXJ0VGltZSArIGFuaW1hdGlvbi5kdXJhdGlvbiAtIGN1cnJlbnRUaW1lICksXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCAyLjMgb25seVxuXHRcdFx0XHQvLyBBcmNoYWljIGNyYXNoIGJ1ZyB3b24ndCBhbGxvdyB1cyB0byB1c2UgYDEgLSAoIDAuNSB8fCAwIClgICh0cmFjLTEyNDk3KVxuXHRcdFx0XHR0ZW1wID0gcmVtYWluaW5nIC8gYW5pbWF0aW9uLmR1cmF0aW9uIHx8IDAsXG5cdFx0XHRcdHBlcmNlbnQgPSAxIC0gdGVtcCxcblx0XHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0XHRsZW5ndGggPSBhbmltYXRpb24udHdlZW5zLmxlbmd0aDtcblxuXHRcdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIHBlcmNlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdICk7XG5cblx0XHRcdC8vIElmIHRoZXJlJ3MgbW9yZSB0byBkbywgeWllbGRcblx0XHRcdGlmICggcGVyY2VudCA8IDEgJiYgbGVuZ3RoICkge1xuXHRcdFx0XHRyZXR1cm4gcmVtYWluaW5nO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiB0aGlzIHdhcyBhbiBlbXB0eSBhbmltYXRpb24sIHN5bnRoZXNpemUgYSBmaW5hbCBwcm9ncmVzcyBub3RpZmljYXRpb25cblx0XHRcdGlmICggIWxlbmd0aCApIHtcblx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZXNvbHZlIHRoZSBhbmltYXRpb24gYW5kIHJlcG9ydCBpdHMgY29uY2x1c2lvblxuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uIF0gKTtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2UoIHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHtcblx0XHRcdFx0c3BlY2lhbEVhc2luZzoge30sXG5cdFx0XHRcdGVhc2luZzogalF1ZXJ5LmVhc2luZy5fZGVmYXVsdFxuXHRcdFx0fSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nWyBwcm9wIF0gfHwgYW5pbWF0aW9uLm9wdHMuZWFzaW5nICk7XG5cdFx0XHRcdGFuaW1hdGlvbi50d2VlbnMucHVzaCggdHdlZW4gKTtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdFx0fSxcblx0XHRcdHN0b3A6IGZ1bmN0aW9uKCBnb3RvRW5kICkge1xuXHRcdFx0XHR2YXIgaW5kZXggPSAwLFxuXG5cdFx0XHRcdFx0Ly8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG5cdFx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHdlIHNraXAgdGhpcyBwYXJ0XG5cdFx0XHRcdFx0bGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcblx0XHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuXHRcdFx0XHRpZiAoIGdvdG9FbmQgKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIDEsIDAgXSApO1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH0gKSxcblx0XHRwcm9wcyA9IGFuaW1hdGlvbi5wcm9wcztcblxuXHRwcm9wRmlsdGVyKCBwcm9wcywgYW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZyApO1xuXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0cmVzdWx0ID0gQW5pbWF0aW9uLnByZWZpbHRlcnNbIGluZGV4IF0uY2FsbCggYW5pbWF0aW9uLCBlbGVtLCBwcm9wcywgYW5pbWF0aW9uLm9wdHMgKTtcblx0XHRpZiAoIHJlc3VsdCApIHtcblx0XHRcdGlmICggaXNGdW5jdGlvbiggcmVzdWx0LnN0b3AgKSApIHtcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCBhbmltYXRpb24uZWxlbSwgYW5pbWF0aW9uLm9wdHMucXVldWUgKS5zdG9wID1cblx0XHRcdFx0XHRyZXN1bHQuc3RvcC5iaW5kKCByZXN1bHQgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9XG5cblx0alF1ZXJ5Lm1hcCggcHJvcHMsIGNyZWF0ZVR3ZWVuLCBhbmltYXRpb24gKTtcblxuXHRpZiAoIGlzRnVuY3Rpb24oIGFuaW1hdGlvbi5vcHRzLnN0YXJ0ICkgKSB7XG5cdFx0YW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbCggZWxlbSwgYW5pbWF0aW9uICk7XG5cdH1cblxuXHQvLyBBdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXHRhbmltYXRpb25cblx0XHQucHJvZ3Jlc3MoIGFuaW1hdGlvbi5vcHRzLnByb2dyZXNzIClcblx0XHQuZG9uZSggYW5pbWF0aW9uLm9wdHMuZG9uZSwgYW5pbWF0aW9uLm9wdHMuY29tcGxldGUgKVxuXHRcdC5mYWlsKCBhbmltYXRpb24ub3B0cy5mYWlsIClcblx0XHQuYWx3YXlzKCBhbmltYXRpb24ub3B0cy5hbHdheXMgKTtcblxuXHRqUXVlcnkuZngudGltZXIoXG5cdFx0alF1ZXJ5LmV4dGVuZCggdGljaywge1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdGFuaW06IGFuaW1hdGlvbixcblx0XHRcdHF1ZXVlOiBhbmltYXRpb24ub3B0cy5xdWV1ZVxuXHRcdH0gKVxuXHQpO1xuXG5cdHJldHVybiBhbmltYXRpb247XG59XG5cbmpRdWVyeS5BbmltYXRpb24gPSBqUXVlcnkuZXh0ZW5kKCBBbmltYXRpb24sIHtcblxuXHR0d2VlbmVyczoge1xuXHRcdFwiKlwiOiBbIGZ1bmN0aW9uKCBwcm9wLCB2YWx1ZSApIHtcblx0XHRcdHZhciB0d2VlbiA9IHRoaXMuY3JlYXRlVHdlZW4oIHByb3AsIHZhbHVlICk7XG5cdFx0XHRhZGp1c3RDU1MoIHR3ZWVuLmVsZW0sIHByb3AsIHJjc3NOdW0uZXhlYyggdmFsdWUgKSwgdHdlZW4gKTtcblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9IF1cblx0fSxcblxuXHR0d2VlbmVyOiBmdW5jdGlvbiggcHJvcHMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggaXNGdW5jdGlvbiggcHJvcHMgKSApIHtcblx0XHRcdGNhbGxiYWNrID0gcHJvcHM7XG5cdFx0XHRwcm9wcyA9IFsgXCIqXCIgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cHJvcHMgPSBwcm9wcy5tYXRjaCggcm5vdGh0bWx3aGl0ZSApO1xuXHRcdH1cblxuXHRcdHZhciBwcm9wLFxuXHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0bGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdHByb3AgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRcdEFuaW1hdGlvbi50d2VlbmVyc1sgcHJvcCBdID0gQW5pbWF0aW9uLnR3ZWVuZXJzWyBwcm9wIF0gfHwgW107XG5cdFx0XHRBbmltYXRpb24udHdlZW5lcnNbIHByb3AgXS51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH1cblx0fSxcblxuXHRwcmVmaWx0ZXJzOiBbIGRlZmF1bHRQcmVmaWx0ZXIgXSxcblxuXHRwcmVmaWx0ZXI6IGZ1bmN0aW9uKCBjYWxsYmFjaywgcHJlcGVuZCApIHtcblx0XHRpZiAoIHByZXBlbmQgKSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRBbmltYXRpb24ucHJlZmlsdGVycy5wdXNoKCBjYWxsYmFjayApO1xuXHRcdH1cblx0fVxufSApO1xuXG5qUXVlcnkuc3BlZWQgPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgZm4gKSB7XG5cdHZhciBvcHQgPSBzcGVlZCAmJiB0eXBlb2Ygc3BlZWQgPT09IFwib2JqZWN0XCIgPyBqUXVlcnkuZXh0ZW5kKCB7fSwgc3BlZWQgKSA6IHtcblx0XHRjb21wbGV0ZTogZm4gfHwgIWZuICYmIGVhc2luZyB8fFxuXHRcdFx0aXNGdW5jdGlvbiggc3BlZWQgKSAmJiBzcGVlZCxcblx0XHRkdXJhdGlvbjogc3BlZWQsXG5cdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFpc0Z1bmN0aW9uKCBlYXNpbmcgKSAmJiBlYXNpbmdcblx0fTtcblxuXHQvLyBHbyB0byB0aGUgZW5kIHN0YXRlIGlmIGZ4IGFyZSBvZmZcblx0aWYgKCBqUXVlcnkuZngub2ZmICkge1xuXHRcdG9wdC5kdXJhdGlvbiA9IDA7XG5cblx0fSBlbHNlIHtcblx0XHRpZiAoIHR5cGVvZiBvcHQuZHVyYXRpb24gIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRpZiAoIG9wdC5kdXJhdGlvbiBpbiBqUXVlcnkuZnguc3BlZWRzICkge1xuXHRcdFx0XHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZnguc3BlZWRzWyBvcHQuZHVyYXRpb24gXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBOb3JtYWxpemUgb3B0LnF1ZXVlIC0gdHJ1ZS91bmRlZmluZWQvbnVsbCAtPiBcImZ4XCJcblx0aWYgKCBvcHQucXVldWUgPT0gbnVsbCB8fCBvcHQucXVldWUgPT09IHRydWUgKSB7XG5cdFx0b3B0LnF1ZXVlID0gXCJmeFwiO1xuXHR9XG5cblx0Ly8gUXVldWVpbmdcblx0b3B0Lm9sZCA9IG9wdC5jb21wbGV0ZTtcblxuXHRvcHQuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIGlzRnVuY3Rpb24oIG9wdC5vbGQgKSApIHtcblx0XHRcdG9wdC5vbGQuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0LnF1ZXVlICkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIG9wdC5xdWV1ZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gb3B0O1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRmYWRlVG86IGZ1bmN0aW9uKCBzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cblx0XHQvLyBTaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGlzSGlkZGVuV2l0aGluVHJlZSApLmNzcyggXCJvcGFjaXR5XCIsIDAgKS5zaG93KClcblxuXHRcdFx0Ly8gQW5pbWF0ZSB0byB0aGUgdmFsdWUgc3BlY2lmaWVkXG5cdFx0XHQuZW5kKCkuYW5pbWF0ZSggeyBvcGFjaXR5OiB0byB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9LFxuXHRhbmltYXRlOiBmdW5jdGlvbiggcHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcblx0XHRcdG9wdGFsbCA9IGpRdWVyeS5zcGVlZCggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSxcblx0XHRcdGRvQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gT3BlcmF0ZSBvbiBhIGNvcHkgb2YgcHJvcCBzbyBwZXItcHJvcGVydHkgZWFzaW5nIHdvbid0IGJlIGxvc3Rcblx0XHRcdFx0dmFyIGFuaW0gPSBBbmltYXRpb24oIHRoaXMsIGpRdWVyeS5leHRlbmQoIHt9LCBwcm9wICksIG9wdGFsbCApO1xuXG5cdFx0XHRcdC8vIEVtcHR5IGFuaW1hdGlvbnMsIG9yIGZpbmlzaGluZyByZXNvbHZlcyBpbW1lZGlhdGVseVxuXHRcdFx0XHRpZiAoIGVtcHR5IHx8IGRhdGFQcml2LmdldCggdGhpcywgXCJmaW5pc2hcIiApICkge1xuXHRcdFx0XHRcdGFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0ZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG5cblx0XHRyZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/XG5cdFx0XHR0aGlzLmVhY2goIGRvQW5pbWF0aW9uICkgOlxuXHRcdFx0dGhpcy5xdWV1ZSggb3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbiApO1xuXHR9LFxuXHRzdG9wOiBmdW5jdGlvbiggdHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCApIHtcblx0XHR2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24oIGhvb2tzICkge1xuXHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRzdG9wKCBnb3RvRW5kICk7XG5cdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcblx0XHRcdGNsZWFyUXVldWUgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBjbGVhclF1ZXVlICkge1xuXHRcdFx0dGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgZGVxdWV1ZSA9IHRydWUsXG5cdFx0XHRcdGluZGV4ID0gdHlwZSAhPSBudWxsICYmIHR5cGUgKyBcInF1ZXVlSG9va3NcIixcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApO1xuXG5cdFx0XHRpZiAoIGluZGV4ICkge1xuXHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICkge1xuXHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKCBpbmRleCBpbiBkYXRhICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgJiYgcnJ1bi50ZXN0KCBpbmRleCApICkge1xuXHRcdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiZcblx0XHRcdFx0XHQoIHR5cGUgPT0gbnVsbCB8fCB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSApIHtcblxuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIGdvdG9FbmQgKTtcblx0XHRcdFx0XHRkZXF1ZXVlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuXHRcdFx0Ly8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuXHRcdFx0Ly8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuXHRcdFx0aWYgKCBkZXF1ZXVlIHx8ICFnb3RvRW5kICkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblx0ZmluaXNoOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRpZiAoIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dHlwZSA9IHR5cGUgfHwgXCJmeFwiO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCxcblx0XHRcdFx0ZGF0YSA9IGRhdGFQcml2LmdldCggdGhpcyApLFxuXHRcdFx0XHRxdWV1ZSA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlXCIgXSxcblx0XHRcdFx0aG9va3MgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZUhvb2tzXCIgXSxcblx0XHRcdFx0dGltZXJzID0galF1ZXJ5LnRpbWVycyxcblx0XHRcdFx0bGVuZ3RoID0gcXVldWUgPyBxdWV1ZS5sZW5ndGggOiAwO1xuXG5cdFx0XHQvLyBFbmFibGUgZmluaXNoaW5nIGZsYWcgb24gcHJpdmF0ZSBkYXRhXG5cdFx0XHRkYXRhLmZpbmlzaCA9IHRydWU7XG5cblx0XHRcdC8vIEVtcHR5IHRoZSBxdWV1ZSBmaXJzdFxuXHRcdFx0alF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBbXSApO1xuXG5cdFx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnN0b3AgKSB7XG5cdFx0XHRcdGhvb2tzLnN0b3AuY2FsbCggdGhpcywgdHJ1ZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYWN0aXZlIGFuaW1hdGlvbnMsIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJiB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUgKSB7XG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHRcdHRpbWVycy5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFuaW1hdGlvbnMgaW4gdGhlIG9sZCBxdWV1ZSBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0XHRcdGlmICggcXVldWVbIGluZGV4IF0gJiYgcXVldWVbIGluZGV4IF0uZmluaXNoICkge1xuXHRcdFx0XHRcdHF1ZXVlWyBpbmRleCBdLmZpbmlzaC5jYWxsKCB0aGlzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gVHVybiBvZmYgZmluaXNoaW5nIGZsYWdcblx0XHRcdGRlbGV0ZSBkYXRhLmZpbmlzaDtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmVhY2goIFsgXCJ0b2dnbGVcIiwgXCJzaG93XCIsIFwiaGlkZVwiIF0sIGZ1bmN0aW9uKCBfaSwgbmFtZSApIHtcblx0dmFyIGNzc0ZuID0galF1ZXJ5LmZuWyBuYW1lIF07XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBzcGVlZCA9PSBudWxsIHx8IHR5cGVvZiBzcGVlZCA9PT0gXCJib29sZWFuXCIgP1xuXHRcdFx0Y3NzRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApIDpcblx0XHRcdHRoaXMuYW5pbWF0ZSggZ2VuRngoIG5hbWUsIHRydWUgKSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fTtcbn0gKTtcblxuLy8gR2VuZXJhdGUgc2hvcnRjdXRzIGZvciBjdXN0b20gYW5pbWF0aW9uc1xualF1ZXJ5LmVhY2goIHtcblx0c2xpZGVEb3duOiBnZW5GeCggXCJzaG93XCIgKSxcblx0c2xpZGVVcDogZ2VuRngoIFwiaGlkZVwiICksXG5cdHNsaWRlVG9nZ2xlOiBnZW5GeCggXCJ0b2dnbGVcIiApLFxuXHRmYWRlSW46IHsgb3BhY2l0eTogXCJzaG93XCIgfSxcblx0ZmFkZU91dDogeyBvcGFjaXR5OiBcImhpZGVcIiB9LFxuXHRmYWRlVG9nZ2xlOiB7IG9wYWNpdHk6IFwidG9nZ2xlXCIgfVxufSwgZnVuY3Rpb24oIG5hbWUsIHByb3BzICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gdGhpcy5hbmltYXRlKCBwcm9wcywgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LnRpbWVycyA9IFtdO1xualF1ZXJ5LmZ4LnRpY2sgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRpbWVyLFxuXHRcdGkgPSAwLFxuXHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnM7XG5cblx0ZnhOb3cgPSBEYXRlLm5vdygpO1xuXG5cdGZvciAoIDsgaSA8IHRpbWVycy5sZW5ndGg7IGkrKyApIHtcblx0XHR0aW1lciA9IHRpbWVyc1sgaSBdO1xuXG5cdFx0Ly8gUnVuIHRoZSB0aW1lciBhbmQgc2FmZWx5IHJlbW92ZSBpdCB3aGVuIGRvbmUgKGFsbG93aW5nIGZvciBleHRlcm5hbCByZW1vdmFsKVxuXHRcdGlmICggIXRpbWVyKCkgJiYgdGltZXJzWyBpIF0gPT09IHRpbWVyICkge1xuXHRcdFx0dGltZXJzLnNwbGljZSggaS0tLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhdGltZXJzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkuZnguc3RvcCgpO1xuXHR9XG5cdGZ4Tm93ID0gdW5kZWZpbmVkO1xufTtcblxualF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24oIHRpbWVyICkge1xuXHRqUXVlcnkudGltZXJzLnB1c2goIHRpbWVyICk7XG5cdGpRdWVyeS5meC5zdGFydCgpO1xufTtcblxualF1ZXJ5LmZ4LmludGVydmFsID0gMTM7XG5qUXVlcnkuZnguc3RhcnQgPSBmdW5jdGlvbigpIHtcblx0aWYgKCBpblByb2dyZXNzICkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGluUHJvZ3Jlc3MgPSB0cnVlO1xuXHRzY2hlZHVsZSgpO1xufTtcblxualF1ZXJ5LmZ4LnN0b3AgPSBmdW5jdGlvbigpIHtcblx0aW5Qcm9ncmVzcyA9IG51bGw7XG59O1xuXG5qUXVlcnkuZnguc3BlZWRzID0ge1xuXHRzbG93OiA2MDAsXG5cdGZhc3Q6IDIwMCxcblxuXHQvLyBEZWZhdWx0IHNwZWVkXG5cdF9kZWZhdWx0OiA0MDBcbn07XG5cblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxualF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24oIHRpbWUsIHR5cGUgKSB7XG5cdHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzWyB0aW1lIF0gfHwgdGltZSA6IHRpbWU7XG5cdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSwgZnVuY3Rpb24oIG5leHQsIGhvb2tzICkge1xuXHRcdHZhciB0aW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcblx0XHRob29rcy5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHR3aW5kb3cuY2xlYXJUaW1lb3V0KCB0aW1lb3V0ICk7XG5cdFx0fTtcblx0fSApO1xufTtcblxuXG4oIGZ1bmN0aW9uKCkge1xuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSxcblx0XHRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNlbGVjdFwiICksXG5cdFx0b3B0ID0gc2VsZWN0LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9wdGlvblwiICkgKTtcblxuXHRpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQgPD00LjMgb25seVxuXHQvLyBEZWZhdWx0IHZhbHVlIGZvciBhIGNoZWNrYm94IHNob3VsZCBiZSBcIm9uXCJcblx0c3VwcG9ydC5jaGVja09uID0gaW5wdXQudmFsdWUgIT09IFwiXCI7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cdHN1cHBvcnQub3B0U2VsZWN0ZWQgPSBvcHQuc2VsZWN0ZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUUgPD0xMSBvbmx5XG5cdC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5cdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdGlucHV0LnZhbHVlID0gXCJ0XCI7XG5cdGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG5cdHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcbn0gKSgpO1xuXG5cbnZhciBib29sSG9vayxcblx0YXR0ckhhbmRsZSA9IGpRdWVyeS5leHByLmF0dHJIYW5kbGU7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5hdHRyLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVBdHRyOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCB0aGlzLCBuYW1lICk7XG5cdFx0fSApO1xuXHR9XG59ICk7XG5cbmpRdWVyeS5leHRlbmQoIHtcblx0YXR0cjogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBhdHRyaWJ1dGVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcblx0XHRpZiAoIHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gXCJ1bmRlZmluZWRcIiApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucHJvcCggZWxlbSwgbmFtZSwgdmFsdWUgKTtcblx0XHR9XG5cblx0XHQvLyBBdHRyaWJ1dGUgaG9va3MgYXJlIGRldGVybWluZWQgYnkgdGhlIGxvd2VyY2FzZSB2ZXJzaW9uXG5cdFx0Ly8gR3JhYiBuZWNlc3NhcnkgaG9vayBpZiBvbmUgaXMgZGVmaW5lZFxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXHRcdFx0aG9va3MgPSBqUXVlcnkuYXR0ckhvb2tzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHQoIGpRdWVyeS5leHByLm1hdGNoLmJvb2wudGVzdCggbmFtZSApID8gYm9vbEhvb2sgOiB1bmRlZmluZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHZhbHVlID09PSBudWxsICkge1xuXHRcdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCB2YWx1ZSArIFwiXCIgKTtcblx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKCByZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSApICE9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cblx0XHRyZXQgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHQvLyBOb24tZXhpc3RlbnQgYXR0cmlidXRlcyByZXR1cm4gbnVsbCwgd2Ugbm9ybWFsaXplIHRvIHVuZGVmaW5lZFxuXHRcdHJldHVybiByZXQgPT0gbnVsbCA/IHVuZGVmaW5lZCA6IHJldDtcblx0fSxcblxuXHRhdHRySG9va3M6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhc3VwcG9ydC5yYWRpb1ZhbHVlICYmIHZhbHVlID09PSBcInJhZGlvXCIgJiZcblx0XHRcdFx0XHRub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgKSB7XG5cdFx0XHRcdFx0dmFyIHZhbCA9IGVsZW0udmFsdWU7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCB2YWx1ZSApO1xuXHRcdFx0XHRcdGlmICggdmFsICkge1xuXHRcdFx0XHRcdFx0ZWxlbS52YWx1ZSA9IHZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHR2YXIgbmFtZSxcblx0XHRcdGkgPSAwLFxuXG5cdFx0XHQvLyBBdHRyaWJ1dGUgbmFtZXMgY2FuIGNvbnRhaW4gbm9uLUhUTUwgd2hpdGVzcGFjZSBjaGFyYWN0ZXJzXG5cdFx0XHQvLyBodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zeW50YXguaHRtbCNhdHRyaWJ1dGVzLTJcblx0XHRcdGF0dHJOYW1lcyA9IHZhbHVlICYmIHZhbHVlLm1hdGNoKCBybm90aHRtbHdoaXRlICk7XG5cblx0XHRpZiAoIGF0dHJOYW1lcyAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0d2hpbGUgKCAoIG5hbWUgPSBhdHRyTmFtZXNbIGkrKyBdICkgKSB7XG5cdFx0XHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBuYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIEhvb2tzIGZvciBib29sZWFuIGF0dHJpYnV0ZXNcbmJvb2xIb29rID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgbmFtZSApIHtcblx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblxuXHRcdFx0Ly8gUmVtb3ZlIGJvb2xlYW4gYXR0cmlidXRlcyB3aGVuIHNldCB0byBmYWxzZVxuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cbn07XG5cbmpRdWVyeS5lYWNoKCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnNvdXJjZS5tYXRjaCggL1xcdysvZyApLCBmdW5jdGlvbiggX2ksIG5hbWUgKSB7XG5cdHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlWyBuYW1lIF0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuXHRhdHRySGFuZGxlWyBuYW1lIF0gPSBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHJldCwgaGFuZGxlLFxuXHRcdFx0bG93ZXJjYXNlTmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHRcdGlmICggIWlzWE1MICkge1xuXG5cdFx0XHQvLyBBdm9pZCBhbiBpbmZpbml0ZSBsb29wIGJ5IHRlbXBvcmFyaWx5IHJlbW92aW5nIHRoaXMgZnVuY3Rpb24gZnJvbSB0aGUgZ2V0dGVyXG5cdFx0XHRoYW5kbGUgPSBhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF07XG5cdFx0XHRhdHRySGFuZGxlWyBsb3dlcmNhc2VOYW1lIF0gPSByZXQ7XG5cdFx0XHRyZXQgPSBnZXR0ZXIoIGVsZW0sIG5hbWUsIGlzWE1MICkgIT0gbnVsbCA/XG5cdFx0XHRcdGxvd2VyY2FzZU5hbWUgOlxuXHRcdFx0XHRudWxsO1xuXHRcdFx0YXR0ckhhbmRsZVsgbG93ZXJjYXNlTmFtZSBdID0gaGFuZGxlO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xufSApO1xuXG5cblxuXG52YXIgcmZvY3VzYWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2ksXG5cdHJjbGlja2FibGUgPSAvXig/OmF8YXJlYSkkL2k7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0cHJvcDogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGpRdWVyeS5wcm9wLCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblxuXHRyZW1vdmVQcm9wOiBmdW5jdGlvbiggbmFtZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSB0aGlzWyBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWUgXTtcblx0XHR9ICk7XG5cdH1cbn0gKTtcblxualF1ZXJ5LmV4dGVuZCgge1xuXHRwcm9wOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0dmFyIHJldCwgaG9va3MsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IHByb3BlcnRpZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIG5UeXBlICE9PSAxIHx8ICFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gRml4IG5hbWUgYW5kIGF0dGFjaCBob29rc1xuXHRcdFx0bmFtZSA9IGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZTtcblx0XHRcdGhvb2tzID0galF1ZXJ5LnByb3BIb29rc1sgbmFtZSBdO1xuXHRcdH1cblxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJlxuXHRcdFx0XHQoIHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSApICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiAoIGVsZW1bIG5hbWUgXSA9IHZhbHVlICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmICggcmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkgKSAhPT0gbnVsbCApIHtcblx0XHRcdHJldHVybiByZXQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGVsZW1bIG5hbWUgXTtcblx0fSxcblxuXHRwcm9wSG9va3M6IHtcblx0XHR0YWJJbmRleDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgLSAxMSBvbmx5XG5cdFx0XHRcdC8vIGVsZW0udGFiSW5kZXggZG9lc24ndCBhbHdheXMgcmV0dXJuIHRoZVxuXHRcdFx0XHQvLyBjb3JyZWN0IHZhbHVlIHdoZW4gaXQgaGFzbid0IGJlZW4gZXhwbGljaXRseSBzZXRcblx0XHRcdFx0Ly8gVXNlIHByb3BlciBhdHRyaWJ1dGUgcmV0cmlldmFsICh0cmFjLTEyMDcyKVxuXHRcdFx0XHR2YXIgdGFiaW5kZXggPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInRhYmluZGV4XCIgKTtcblxuXHRcdFx0XHRpZiAoIHRhYmluZGV4ICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXJzZUludCggdGFiaW5kZXgsIDEwICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0cmZvY3VzYWJsZS50ZXN0KCBlbGVtLm5vZGVOYW1lICkgfHxcblx0XHRcdFx0XHRyY2xpY2thYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSAmJlxuXHRcdFx0XHRcdGVsZW0uaHJlZlxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gMDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0cHJvcEZpeDoge1xuXHRcdFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuXHRcdFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuXHR9XG59ICk7XG5cbi8vIFN1cHBvcnQ6IElFIDw9MTEgb25seVxuLy8gQWNjZXNzaW5nIHRoZSBzZWxlY3RlZEluZGV4IHByb3BlcnR5XG4vLyBmb3JjZXMgdGhlIGJyb3dzZXIgdG8gcmVzcGVjdCBzZXR0aW5nIHNlbGVjdGVkXG4vLyBvbiB0aGUgb3B0aW9uXG4vLyBUaGUgZ2V0dGVyIGVuc3VyZXMgYSBkZWZhdWx0IG9wdGlvbiBpcyBzZWxlY3RlZFxuLy8gd2hlbiBpbiBhbiBvcHRncm91cFxuLy8gZXNsaW50IHJ1bGUgXCJuby11bnVzZWQtZXhwcmVzc2lvbnNcIiBpcyBkaXNhYmxlZCBmb3IgdGhpcyBjb2RlXG4vLyBzaW5jZSBpdCBjb25zaWRlcnMgc3VjaCBhY2Nlc3Npb25zIG5vb3BcbmlmICggIXN1cHBvcnQub3B0U2VsZWN0ZWQgKSB7XG5cdGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblxuXHRcdFx0LyogZXNsaW50IG5vLXVudXNlZC1leHByZXNzaW9uczogXCJvZmZcIiAqL1xuXG5cdFx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0aWYgKCBwYXJlbnQgJiYgcGFyZW50LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbnVsbDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHRcdC8qIGVzbGludCBuby11bnVzZWQtZXhwcmVzc2lvbnM6IFwib2ZmXCIgKi9cblxuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICkge1xuXHRcdFx0XHRwYXJlbnQuc2VsZWN0ZWRJbmRleDtcblxuXHRcdFx0XHRpZiAoIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdHBhcmVudC5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbmpRdWVyeS5lYWNoKCBbXG5cdFwidGFiSW5kZXhcIixcblx0XCJyZWFkT25seVwiLFxuXHRcIm1heExlbmd0aFwiLFxuXHRcImNlbGxTcGFjaW5nXCIsXG5cdFwiY2VsbFBhZGRpbmdcIixcblx0XCJyb3dTcGFuXCIsXG5cdFwiY29sU3BhblwiLFxuXHRcInVzZU1hcFwiLFxuXHRcImZyYW1lQm9yZGVyXCIsXG5cdFwiY29udGVudEVkaXRhYmxlXCJcbl0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkucHJvcEZpeFsgdGhpcy50b0xvd2VyQ2FzZSgpIF0gPSB0aGlzO1xufSApO1xuXG5cblxuXG5cdC8vIFN0cmlwIGFuZCBjb2xsYXBzZSB3aGl0ZXNwYWNlIGFjY29yZGluZyB0byBIVE1MIHNwZWNcblx0Ly8gaHR0cHM6Ly9pbmZyYS5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS1hc2NpaS13aGl0ZXNwYWNlXG5cdGZ1bmN0aW9uIHN0cmlwQW5kQ29sbGFwc2UoIHZhbHVlICkge1xuXHRcdHZhciB0b2tlbnMgPSB2YWx1ZS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFtdO1xuXHRcdHJldHVybiB0b2tlbnMuam9pbiggXCIgXCIgKTtcblx0fVxuXG5cbmZ1bmN0aW9uIGdldENsYXNzKCBlbGVtICkge1xuXHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIiApIHx8IFwiXCI7XG59XG5cbmZ1bmN0aW9uIGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApIHtcblx0aWYgKCBBcnJheS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdHJldHVybiB2YWx1ZTtcblx0fVxuXHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gdmFsdWUubWF0Y2goIHJub3RodG1sd2hpdGUgKSB8fCBbXTtcblx0fVxuXHRyZXR1cm4gW107XG59XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0YWRkQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NOYW1lcywgY3VyLCBjdXJWYWx1ZSwgY2xhc3NOYW1lLCBpLCBmaW5hbFZhbHVlO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmFkZENsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRjbGFzc05hbWVzID0gY2xhc3Nlc1RvQXJyYXkoIHZhbHVlICk7XG5cblx0XHRpZiAoIGNsYXNzTmFtZXMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGN1clZhbHVlID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblx0XHRcdFx0Y3VyID0gdGhpcy5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSBdO1xuXHRcdFx0XHRcdFx0aWYgKCBjdXIuaW5kZXhPZiggXCIgXCIgKyBjbGFzc05hbWUgKyBcIiBcIiApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0Y3VyICs9IGNsYXNzTmFtZSArIFwiIFwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0ZmluYWxWYWx1ZSA9IHN0cmlwQW5kQ29sbGFwc2UoIGN1ciApO1xuXHRcdFx0XHRcdGlmICggY3VyVmFsdWUgIT09IGZpbmFsVmFsdWUgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldEF0dHJpYnV0ZSggXCJjbGFzc1wiLCBmaW5hbFZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NOYW1lcywgY3VyLCBjdXJWYWx1ZSwgY2xhc3NOYW1lLCBpLCBmaW5hbFZhbHVlO1xuXG5cdFx0aWYgKCBpc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZUNsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCBnZXRDbGFzcyggdGhpcyApICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuYXR0ciggXCJjbGFzc1wiLCBcIlwiICk7XG5cdFx0fVxuXG5cdFx0Y2xhc3NOYW1lcyA9IGNsYXNzZXNUb0FycmF5KCB2YWx1ZSApO1xuXG5cdFx0aWYgKCBjbGFzc05hbWVzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRjdXJWYWx1ZSA9IGdldENsYXNzKCB0aGlzICk7XG5cblx0XHRcdFx0Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcblx0XHRcdFx0Y3VyID0gdGhpcy5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggY3VyVmFsdWUgKSArIFwiIFwiICk7XG5cblx0XHRcdFx0aWYgKCBjdXIgKSB7XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBjbGFzc05hbWVzLmxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdFx0Y2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSBdO1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgKmFsbCogaW5zdGFuY2VzXG5cdFx0XHRcdFx0XHR3aGlsZSAoIGN1ci5pbmRleE9mKCBcIiBcIiArIGNsYXNzTmFtZSArIFwiIFwiICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdFx0Y3VyID0gY3VyLnJlcGxhY2UoIFwiIFwiICsgY2xhc3NOYW1lICsgXCIgXCIsIFwiIFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gc3RyaXBBbmRDb2xsYXBzZSggY3VyICk7XG5cdFx0XHRcdFx0aWYgKCBjdXJWYWx1ZSAhPT0gZmluYWxWYWx1ZSApIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0QXR0cmlidXRlKCBcImNsYXNzXCIsIGZpbmFsVmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR0b2dnbGVDbGFzczogZnVuY3Rpb24oIHZhbHVlLCBzdGF0ZVZhbCApIHtcblx0XHR2YXIgY2xhc3NOYW1lcywgY2xhc3NOYW1lLCBpLCBzZWxmLFxuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZSxcblx0XHRcdGlzVmFsaWRWYWx1ZSA9IHR5cGUgPT09IFwic3RyaW5nXCIgfHwgQXJyYXkuaXNBcnJheSggdmFsdWUgKTtcblxuXHRcdGlmICggaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyhcblx0XHRcdFx0XHR2YWx1ZS5jYWxsKCB0aGlzLCBpLCBnZXRDbGFzcyggdGhpcyApLCBzdGF0ZVZhbCApLFxuXHRcdFx0XHRcdHN0YXRlVmFsXG5cdFx0XHRcdCk7XG5cdFx0XHR9ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGVWYWwgPT09IFwiYm9vbGVhblwiICYmIGlzVmFsaWRWYWx1ZSApIHtcblx0XHRcdHJldHVybiBzdGF0ZVZhbCA/IHRoaXMuYWRkQ2xhc3MoIHZhbHVlICkgOiB0aGlzLnJlbW92ZUNsYXNzKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGNsYXNzTmFtZXMgPSBjbGFzc2VzVG9BcnJheSggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc1ZhbGlkVmFsdWUgKSB7XG5cblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0c2VsZiA9IGpRdWVyeSggdGhpcyApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgY2xhc3NOYW1lcy5sZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHRjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpIF07XG5cblx0XHRcdFx0XHQvLyBDaGVjayBlYWNoIGNsYXNzTmFtZSBnaXZlbiwgc3BhY2Ugc2VwYXJhdGVkIGxpc3Rcblx0XHRcdFx0XHRpZiAoIHNlbGYuaGFzQ2xhc3MoIGNsYXNzTmFtZSApICkge1xuXHRcdFx0XHRcdFx0c2VsZi5yZW1vdmVDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHNlbGYuYWRkQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBUb2dnbGUgd2hvbGUgY2xhc3MgbmFtZVxuXHRcdFx0fSBlbHNlIGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdFx0Y2xhc3NOYW1lID0gZ2V0Q2xhc3MoIHRoaXMgKTtcblx0XHRcdFx0aWYgKCBjbGFzc05hbWUgKSB7XG5cblx0XHRcdFx0XHQvLyBTdG9yZSBjbGFzc05hbWUgaWYgc2V0XG5cdFx0XHRcdFx0ZGF0YVByaXYuc2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiwgY2xhc3NOYW1lICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuXHRcdFx0XHQvLyB0aGVuIHJlbW92ZSB0aGUgd2hvbGUgY2xhc3NuYW1lIChpZiB0aGVyZSB3YXMgb25lLCB0aGUgYWJvdmUgc2F2ZWQgaXQpLlxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYnJpbmcgYmFjayB3aGF0ZXZlciB3YXMgcHJldmlvdXNseSBzYXZlZCAoaWYgYW55dGhpbmcpLFxuXHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5cdFx0XHRcdGlmICggdGhpcy5zZXRBdHRyaWJ1dGUgKSB7XG5cdFx0XHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUoIFwiY2xhc3NcIixcblx0XHRcdFx0XHRcdGNsYXNzTmFtZSB8fCB2YWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0XHRcdFx0XHRcIlwiIDpcblx0XHRcdFx0XHRcdFx0ZGF0YVByaXYuZ2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiApIHx8IFwiXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSApO1xuXHR9LFxuXG5cdGhhc0NsYXNzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGNsYXNzTmFtZSwgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Y2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiO1xuXHRcdHdoaWxlICggKCBlbGVtID0gdGhpc1sgaSsrIF0gKSApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0XHQoIFwiIFwiICsgc3RyaXBBbmRDb2xsYXBzZSggZ2V0Q2xhc3MoIGVsZW0gKSApICsgXCIgXCIgKS5pbmRleE9mKCBjbGFzc05hbWUgKSA+IC0xICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0gKTtcblxuXG5cblxudmFyIHJyZXR1cm4gPSAvXFxyL2c7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblx0dmFsOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGhvb2tzLCByZXQsIHZhbHVlSXNGdW5jdGlvbixcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF07XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgZWxlbS50eXBlIF0gfHxcblx0XHRcdFx0XHRqUXVlcnkudmFsSG9va3NbIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXG5cdFx0XHRcdGlmICggaG9va3MgJiZcblx0XHRcdFx0XHRcImdldFwiIGluIGhvb2tzICYmXG5cdFx0XHRcdFx0KCByZXQgPSBob29rcy5nZXQoIGVsZW0sIFwidmFsdWVcIiApICkgIT09IHVuZGVmaW5lZFxuXHRcdFx0XHQpIHtcblx0XHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0ID0gZWxlbS52YWx1ZTtcblxuXHRcdFx0XHQvLyBIYW5kbGUgbW9zdCBjb21tb24gc3RyaW5nIGNhc2VzXG5cdFx0XHRcdGlmICggdHlwZW9mIHJldCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRyZXR1cm4gcmV0LnJlcGxhY2UoIHJyZXR1cm4sIFwiXCIgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxuXHRcdFx0XHRyZXR1cm4gcmV0ID09IG51bGwgPyBcIlwiIDogcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFsdWVJc0Z1bmN0aW9uID0gaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0dmFyIHZhbDtcblxuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlICE9PSAxICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdmFsdWVJc0Z1bmN0aW9uICkge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZS5jYWxsKCB0aGlzLCBpLCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRyZWF0IG51bGwvdW5kZWZpbmVkIGFzIFwiXCI7IGNvbnZlcnQgbnVtYmVycyB0byBzdHJpbmdcblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHZhbCA9IFwiXCI7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdHZhbCArPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBBcnJheS5pc0FycmF5KCB2YWwgKSApIHtcblx0XHRcdFx0dmFsID0galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuXHRcdFx0XHR9ICk7XG5cdFx0XHR9XG5cblx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyB0aGlzLnR5cGUgXSB8fCBqUXVlcnkudmFsSG9va3NbIHRoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXG5cdFx0XHQvLyBJZiBzZXQgcmV0dXJucyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBub3JtYWwgc2V0dGluZ1xuXHRcdFx0aWYgKCAhaG9va3MgfHwgISggXCJzZXRcIiBpbiBob29rcyApIHx8IGhvb2tzLnNldCggdGhpcywgdmFsLCBcInZhbHVlXCIgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZXh0ZW5kKCB7XG5cdHZhbEhvb2tzOiB7XG5cdFx0b3B0aW9uOiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0XHRcdHZhciB2YWwgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBcInZhbHVlXCIgKTtcblx0XHRcdFx0cmV0dXJuIHZhbCAhPSBudWxsID9cblx0XHRcdFx0XHR2YWwgOlxuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD0xMCAtIDExIG9ubHlcblx0XHRcdFx0XHQvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAodHJhYy0xNDY4NiwgdHJhYy0xNDg1OClcblx0XHRcdFx0XHQvLyBTdHJpcCBhbmQgY29sbGFwc2Ugd2hpdGVzcGFjZVxuXHRcdFx0XHRcdC8vIGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvI3N0cmlwLWFuZC1jb2xsYXBzZS13aGl0ZXNwYWNlXG5cdFx0XHRcdFx0c3RyaXBBbmRDb2xsYXBzZSggalF1ZXJ5LnRleHQoIGVsZW0gKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2VsZWN0OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgdmFsdWUsIG9wdGlvbiwgaSxcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4LFxuXHRcdFx0XHRcdG9uZSA9IGVsZW0udHlwZSA9PT0gXCJzZWxlY3Qtb25lXCIsXG5cdFx0XHRcdFx0dmFsdWVzID0gb25lID8gbnVsbCA6IFtdLFxuXHRcdFx0XHRcdG1heCA9IG9uZSA/IGluZGV4ICsgMSA6IG9wdGlvbnMubGVuZ3RoO1xuXG5cdFx0XHRcdGlmICggaW5kZXggPCAwICkge1xuXHRcdFx0XHRcdGkgPSBtYXg7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRpID0gb25lID8gaW5kZXggOiAwO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBtYXg7IGkrKyApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTkgb25seVxuXHRcdFx0XHRcdC8vIElFOC05IGRvZXNuJ3QgdXBkYXRlIHNlbGVjdGVkIGFmdGVyIGZvcm0gcmVzZXQgKHRyYWMtMjU1MSlcblx0XHRcdFx0XHRpZiAoICggb3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4ICkgJiZcblxuXHRcdFx0XHRcdFx0XHQvLyBEb24ndCByZXR1cm4gb3B0aW9ucyB0aGF0IGFyZSBkaXNhYmxlZCBvciBpbiBhIGRpc2FibGVkIG9wdGdyb3VwXG5cdFx0XHRcdFx0XHRcdCFvcHRpb24uZGlzYWJsZWQgJiZcblx0XHRcdFx0XHRcdFx0KCAhb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQgfHxcblx0XHRcdFx0XHRcdFx0XHQhbm9kZU5hbWUoIG9wdGlvbi5wYXJlbnROb2RlLCBcIm9wdGdyb3VwXCIgKSApICkge1xuXG5cdFx0XHRcdFx0XHQvLyBHZXQgdGhlIHNwZWNpZmljIHZhbHVlIGZvciB0aGUgb3B0aW9uXG5cdFx0XHRcdFx0XHR2YWx1ZSA9IGpRdWVyeSggb3B0aW9uICkudmFsKCk7XG5cblx0XHRcdFx0XHRcdC8vIFdlIGRvbid0IG5lZWQgYW4gYXJyYXkgZm9yIG9uZSBzZWxlY3RzXG5cdFx0XHRcdFx0XHRpZiAoIG9uZSApIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBNdWx0aS1TZWxlY3RzIHJldHVybiBhbiBhcnJheVxuXHRcdFx0XHRcdFx0dmFsdWVzLnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH0sXG5cblx0XHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0XHR2YXIgb3B0aW9uU2V0LCBvcHRpb24sXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHR2YWx1ZXMgPSBqUXVlcnkubWFrZUFycmF5KCB2YWx1ZSApLFxuXHRcdFx0XHRcdGkgPSBvcHRpb25zLmxlbmd0aDtcblxuXHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvKiBlc2xpbnQtZGlzYWJsZSBuby1jb25kLWFzc2lnbiAqL1xuXG5cdFx0XHRcdFx0aWYgKCBvcHRpb24uc2VsZWN0ZWQgPVxuXHRcdFx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIGpRdWVyeS52YWxIb29rcy5vcHRpb24uZ2V0KCBvcHRpb24gKSwgdmFsdWVzICkgPiAtMVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0b3B0aW9uU2V0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvKiBlc2xpbnQtZW5hYmxlIG5vLWNvbmQtYXNzaWduICovXG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGb3JjZSBicm93c2VycyB0byBiZWhhdmUgY29uc2lzdGVudGx5IHdoZW4gbm9uLW1hdGNoaW5nIHZhbHVlIGlzIHNldFxuXHRcdFx0XHRpZiAoICFvcHRpb25TZXQgKSB7XG5cdFx0XHRcdFx0ZWxlbS5zZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0gKTtcblxuLy8gUmFkaW9zIGFuZCBjaGVja2JveGVzIGdldHRlci9zZXR0ZXJcbmpRdWVyeS5lYWNoKCBbIFwicmFkaW9cIiwgXCJjaGVja2JveFwiIF0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXSA9IHtcblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS5jaGVja2VkID0galF1ZXJ5LmluQXJyYXkoIGpRdWVyeSggZWxlbSApLnZhbCgpLCB2YWx1ZSApID4gLTEgKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGlmICggIXN1cHBvcnQuY2hlY2tPbiApIHtcblx0XHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXS5nZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IG51bGwgPyBcIm9uXCIgOiBlbGVtLnZhbHVlO1xuXHRcdH07XG5cdH1cbn0gKTtcblxuXG5cblxuLy8gUmV0dXJuIGpRdWVyeSBmb3IgYXR0cmlidXRlcy1vbmx5IGluY2x1c2lvblxudmFyIGxvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uO1xuXG52YXIgbm9uY2UgPSB7IGd1aWQ6IERhdGUubm93KCkgfTtcblxudmFyIHJxdWVyeSA9ICggL1xcPy8gKTtcblxuXG5cbi8vIENyb3NzLWJyb3dzZXIgeG1sIHBhcnNpbmdcbmpRdWVyeS5wYXJzZVhNTCA9IGZ1bmN0aW9uKCBkYXRhICkge1xuXHR2YXIgeG1sLCBwYXJzZXJFcnJvckVsZW07XG5cdGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRSA5IC0gMTEgb25seVxuXHQvLyBJRSB0aHJvd3Mgb24gcGFyc2VGcm9tU3RyaW5nIHdpdGggaW52YWxpZCBpbnB1dC5cblx0dHJ5IHtcblx0XHR4bWwgPSAoIG5ldyB3aW5kb3cuRE9NUGFyc2VyKCkgKS5wYXJzZUZyb21TdHJpbmcoIGRhdGEsIFwidGV4dC94bWxcIiApO1xuXHR9IGNhdGNoICggZSApIHt9XG5cblx0cGFyc2VyRXJyb3JFbGVtID0geG1sICYmIHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJwYXJzZXJlcnJvclwiIClbIDAgXTtcblx0aWYgKCAheG1sIHx8IHBhcnNlckVycm9yRWxlbSApIHtcblx0XHRqUXVlcnkuZXJyb3IoIFwiSW52YWxpZCBYTUw6IFwiICsgKFxuXHRcdFx0cGFyc2VyRXJyb3JFbGVtID9cblx0XHRcdFx0alF1ZXJ5Lm1hcCggcGFyc2VyRXJyb3JFbGVtLmNoaWxkTm9kZXMsIGZ1bmN0aW9uKCBlbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZWwudGV4dENvbnRlbnQ7XG5cdFx0XHRcdH0gKS5qb2luKCBcIlxcblwiICkgOlxuXHRcdFx0XHRkYXRhXG5cdFx0KSApO1xuXHR9XG5cdHJldHVybiB4bWw7XG59O1xuXG5cbnZhciByZm9jdXNNb3JwaCA9IC9eKD86Zm9jdXNpbmZvY3VzfGZvY3Vzb3V0Ymx1cikkLyxcblx0c3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgPSBmdW5jdGlvbiggZSApIHtcblx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9O1xuXG5qUXVlcnkuZXh0ZW5kKCBqUXVlcnkuZXZlbnQsIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycyApIHtcblxuXHRcdHZhciBpLCBjdXIsIHRtcCwgYnViYmxlVHlwZSwgb250eXBlLCBoYW5kbGUsIHNwZWNpYWwsIGxhc3RFbGVtZW50LFxuXHRcdFx0ZXZlbnRQYXRoID0gWyBlbGVtIHx8IGRvY3VtZW50IF0sXG5cdFx0XHR0eXBlID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcInR5cGVcIiApID8gZXZlbnQudHlwZSA6IGV2ZW50LFxuXHRcdFx0bmFtZXNwYWNlcyA9IGhhc093bi5jYWxsKCBldmVudCwgXCJuYW1lc3BhY2VcIiApID8gZXZlbnQubmFtZXNwYWNlLnNwbGl0KCBcIi5cIiApIDogW107XG5cblx0XHRjdXIgPSBsYXN0RWxlbWVudCA9IHRtcCA9IGVsZW0gPSBlbGVtIHx8IGRvY3VtZW50O1xuXG5cdFx0Ly8gRG9uJ3QgZG8gZXZlbnRzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBmb2N1cy9ibHVyIG1vcnBocyB0byBmb2N1c2luL291dDsgZW5zdXJlIHdlJ3JlIG5vdCBmaXJpbmcgdGhlbSByaWdodCBub3dcblx0XHRpZiAoIHJmb2N1c01vcnBoLnRlc3QoIHR5cGUgKyBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aWYgKCB0eXBlLmluZGV4T2YoIFwiLlwiICkgPiAtMSApIHtcblxuXHRcdFx0Ly8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuXHRcdFx0bmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoIFwiLlwiICk7XG5cdFx0XHR0eXBlID0gbmFtZXNwYWNlcy5zaGlmdCgpO1xuXHRcdFx0bmFtZXNwYWNlcy5zb3J0KCk7XG5cdFx0fVxuXHRcdG9udHlwZSA9IHR5cGUuaW5kZXhPZiggXCI6XCIgKSA8IDAgJiYgXCJvblwiICsgdHlwZTtcblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuXHRcdGV2ZW50ID0gZXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0ZXZlbnQgOlxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCggdHlwZSwgdHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiICYmIGV2ZW50ICk7XG5cblx0XHQvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5cdFx0ZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG5cdFx0ZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKCBcIi5cIiApO1xuXHRcdGV2ZW50LnJuYW1lc3BhY2UgPSBldmVudC5uYW1lc3BhY2UgP1xuXHRcdFx0bmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbiggXCJcXFxcLig/Oi4qXFxcXC58KVwiICkgKyBcIihcXFxcLnwkKVwiICkgOlxuXHRcdFx0bnVsbDtcblxuXHRcdC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxuXHRcdGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHRpZiAoICFldmVudC50YXJnZXQgKSB7XG5cdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xuXHRcdH1cblxuXHRcdC8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3Rcblx0XHRkYXRhID0gZGF0YSA9PSBudWxsID9cblx0XHRcdFsgZXZlbnQgXSA6XG5cdFx0XHRqUXVlcnkubWFrZUFycmF5KCBkYXRhLCBbIGV2ZW50IF0gKTtcblxuXHRcdC8vIEFsbG93IHNwZWNpYWwgZXZlbnRzIHRvIGRyYXcgb3V0c2lkZSB0aGUgbGluZXNcblx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseSggZWxlbSwgZGF0YSApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgZXZlbnQgcHJvcGFnYXRpb24gcGF0aCBpbiBhZHZhbmNlLCBwZXIgVzNDIGV2ZW50cyBzcGVjICh0cmFjLTk5NTEpXG5cdFx0Ly8gQnViYmxlIHVwIHRvIGRvY3VtZW50LCB0aGVuIHRvIHdpbmRvdzsgd2F0Y2ggZm9yIGEgZ2xvYmFsIG93bmVyRG9jdW1lbnQgdmFyICh0cmFjLTk3MjQpXG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFzcGVjaWFsLm5vQnViYmxlICYmICFpc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRidWJibGVUeXBlID0gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgfHwgdHlwZTtcblx0XHRcdGlmICggIXJmb2N1c01vcnBoLnRlc3QoIGJ1YmJsZVR5cGUgKyB0eXBlICkgKSB7XG5cdFx0XHRcdGN1ciA9IGN1ci5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICggOyBjdXI7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggY3VyICk7XG5cdFx0XHRcdHRtcCA9IGN1cjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cdFx0XHRpZiAoIHRtcCA9PT0gKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQgKSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIHRtcC5kZWZhdWx0VmlldyB8fCB0bXAucGFyZW50V2luZG93IHx8IHdpbmRvdyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoICggY3VyID0gZXZlbnRQYXRoWyBpKysgXSApICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0bGFzdEVsZW1lbnQgPSBjdXI7XG5cdFx0XHRldmVudC50eXBlID0gaSA+IDEgP1xuXHRcdFx0XHRidWJibGVUeXBlIDpcblx0XHRcdFx0c3BlY2lhbC5iaW5kVHlwZSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBqUXVlcnkgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gKCBkYXRhUHJpdi5nZXQoIGN1ciwgXCJldmVudHNcIiApIHx8IE9iamVjdC5jcmVhdGUoIG51bGwgKSApWyBldmVudC50eXBlIF0gJiZcblx0XHRcdFx0ZGF0YVByaXYuZ2V0KCBjdXIsIFwiaGFuZGxlXCIgKTtcblx0XHRcdGlmICggaGFuZGxlICkge1xuXHRcdFx0XHRoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBOYXRpdmUgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gb250eXBlICYmIGN1clsgb250eXBlIF07XG5cdFx0XHRpZiAoIGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgYWNjZXB0RGF0YSggY3VyICkgKSB7XG5cdFx0XHRcdGV2ZW50LnJlc3VsdCA9IGhhbmRsZS5hcHBseSggY3VyLCBkYXRhICk7XG5cdFx0XHRcdGlmICggZXZlbnQucmVzdWx0ID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGV2ZW50LnR5cGUgPSB0eXBlO1xuXG5cdFx0Ly8gSWYgbm9ib2R5IHByZXZlbnRlZCB0aGUgZGVmYXVsdCBhY3Rpb24sIGRvIGl0IG5vd1xuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhZXZlbnQuaXNEZWZhdWx0UHJldmVudGVkKCkgKSB7XG5cblx0XHRcdGlmICggKCAhc3BlY2lhbC5fZGVmYXVsdCB8fFxuXHRcdFx0XHRzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KCBldmVudFBhdGgucG9wKCksIGRhdGEgKSA9PT0gZmFsc2UgKSAmJlxuXHRcdFx0XHRhY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cblx0XHRcdFx0Ly8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIGFzIHRoZSBldmVudC5cblx0XHRcdFx0Ly8gRG9uJ3QgZG8gZGVmYXVsdCBhY3Rpb25zIG9uIHdpbmRvdywgdGhhdCdzIHdoZXJlIGdsb2JhbCB2YXJpYWJsZXMgYmUgKHRyYWMtNjE3MClcblx0XHRcdFx0aWYgKCBvbnR5cGUgJiYgaXNGdW5jdGlvbiggZWxlbVsgdHlwZSBdICkgJiYgIWlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb24ndCByZS10cmlnZ2VyIGFuIG9uRk9PIGV2ZW50IHdoZW4gd2UgY2FsbCBpdHMgRk9PKCkgbWV0aG9kXG5cdFx0XHRcdFx0dG1wID0gZWxlbVsgb250eXBlIF07XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmV2ZW50IHJlLXRyaWdnZXJpbmcgb2YgdGhlIHNhbWUgZXZlbnQsIHNpbmNlIHdlIGFscmVhZHkgYnViYmxlZCBpdCBhYm92ZVxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuXG5cdFx0XHRcdFx0aWYgKCBldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXHRcdFx0XHRcdFx0bGFzdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lciggdHlwZSwgc3RvcFByb3BhZ2F0aW9uQ2FsbGJhY2sgKTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcblxuXHRcdFx0XHRcdGlmICggZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdFx0XHRcdGxhc3RFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIHN0b3BQcm9wYWdhdGlvbkNhbGxiYWNrICk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0XHRcdGlmICggdG1wICkge1xuXHRcdFx0XHRcdFx0ZWxlbVsgb250eXBlIF0gPSB0bXA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGV2ZW50LnJlc3VsdDtcblx0fSxcblxuXHQvLyBQaWdneWJhY2sgb24gYSBkb25vciBldmVudCB0byBzaW11bGF0ZSBhIGRpZmZlcmVudCBvbmVcblx0Ly8gVXNlZCBvbmx5IGZvciBgZm9jdXMoaW4gfCBvdXQpYCBldmVudHNcblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCApIHtcblx0XHR2YXIgZSA9IGpRdWVyeS5leHRlbmQoXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCksXG5cdFx0XHRldmVudCxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWVcblx0XHRcdH1cblx0XHQpO1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIGUsIG51bGwsIGVsZW0gKTtcblx0fVxuXG59ICk7XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCB0aGlzICk7XG5cdFx0fSApO1xuXHR9LFxuXHR0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF07XG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5ldmVudC50cmlnZ2VyKCB0eXBlLCBkYXRhLCBlbGVtLCB0cnVlICk7XG5cdFx0fVxuXHR9XG59ICk7XG5cblxudmFyXG5cdHJicmFja2V0ID0gL1xcW1xcXSQvLFxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXG5cdHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0cnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG5mdW5jdGlvbiBidWlsZFBhcmFtcyggcHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQgKSB7XG5cdHZhciBuYW1lO1xuXG5cdGlmICggQXJyYXkuaXNBcnJheSggb2JqICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgYXJyYXkgaXRlbS5cblx0XHRqUXVlcnkuZWFjaCggb2JqLCBmdW5jdGlvbiggaSwgdiApIHtcblx0XHRcdGlmICggdHJhZGl0aW9uYWwgfHwgcmJyYWNrZXQudGVzdCggcHJlZml4ICkgKSB7XG5cblx0XHRcdFx0Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuXHRcdFx0XHRhZGQoIHByZWZpeCwgdiApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuXHRcdFx0XHRidWlsZFBhcmFtcyhcblx0XHRcdFx0XHRwcmVmaXggKyBcIltcIiArICggdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdiAhPSBudWxsID8gaSA6IFwiXCIgKSArIFwiXVwiLFxuXHRcdFx0XHRcdHYsXG5cdFx0XHRcdFx0dHJhZGl0aW9uYWwsXG5cdFx0XHRcdFx0YWRkXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXG5cdH0gZWxzZSBpZiAoICF0cmFkaXRpb25hbCAmJiB0b1R5cGUoIG9iaiApID09PSBcIm9iamVjdFwiICkge1xuXG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcblx0fVxufVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XG5cdHZhciBwcmVmaXgsXG5cdFx0cyA9IFtdLFxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlT3JGdW5jdGlvbiApIHtcblxuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCB1c2UgaXRzIHJldHVybiB2YWx1ZVxuXHRcdFx0dmFyIHZhbHVlID0gaXNGdW5jdGlvbiggdmFsdWVPckZ1bmN0aW9uICkgP1xuXHRcdFx0XHR2YWx1ZU9yRnVuY3Rpb24oKSA6XG5cdFx0XHRcdHZhbHVlT3JGdW5jdGlvbjtcblxuXHRcdFx0c1sgcy5sZW5ndGggXSA9IGVuY29kZVVSSUNvbXBvbmVudCgga2V5ICkgKyBcIj1cIiArXG5cdFx0XHRcdGVuY29kZVVSSUNvbXBvbmVudCggdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSApO1xuXHRcdH07XG5cblx0aWYgKCBhID09IG51bGwgKSB7XG5cdFx0cmV0dXJuIFwiXCI7XG5cdH1cblxuXHQvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuXHRpZiAoIEFycmF5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cblx0XHQvLyBTZXJpYWxpemUgdGhlIGZvcm0gZWxlbWVudHNcblx0XHRqUXVlcnkuZWFjaCggYSwgZnVuY3Rpb24oKSB7XG5cdFx0XHRhZGQoIHRoaXMubmFtZSwgdGhpcy52YWx1ZSApO1xuXHRcdH0gKTtcblxuXHR9IGVsc2Uge1xuXG5cdFx0Ly8gSWYgdHJhZGl0aW9uYWwsIGVuY29kZSB0aGUgXCJvbGRcIiB3YXkgKHRoZSB3YXkgMS4zLjIgb3Igb2xkZXJcblx0XHQvLyBkaWQgaXQpLCBvdGhlcndpc2UgZW5jb2RlIHBhcmFtcyByZWN1cnNpdmVseS5cblx0XHRmb3IgKCBwcmVmaXggaW4gYSApIHtcblx0XHRcdGJ1aWxkUGFyYW1zKCBwcmVmaXgsIGFbIHByZWZpeCBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSByZXN1bHRpbmcgc2VyaWFsaXphdGlvblxuXHRyZXR1cm4gcy5qb2luKCBcIiZcIiApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXHRzZXJpYWxpemU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnkucGFyYW0oIHRoaXMuc2VyaWFsaXplQXJyYXkoKSApO1xuXHR9LFxuXHRzZXJpYWxpemVBcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMubWFwKCBmdW5jdGlvbigpIHtcblxuXHRcdFx0Ly8gQ2FuIGFkZCBwcm9wSG9vayBmb3IgXCJlbGVtZW50c1wiIHRvIGZpbHRlciBvciBhZGQgZm9ybSBlbGVtZW50c1xuXHRcdFx0dmFyIGVsZW1lbnRzID0galF1ZXJ5LnByb3AoIHRoaXMsIFwiZWxlbWVudHNcIiApO1xuXHRcdFx0cmV0dXJuIGVsZW1lbnRzID8galF1ZXJ5Lm1ha2VBcnJheSggZWxlbWVudHMgKSA6IHRoaXM7XG5cdFx0fSApLmZpbHRlciggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuXHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXG5cdFx0XHRcdHJzdWJtaXR0YWJsZS50ZXN0KCB0aGlzLm5vZGVOYW1lICkgJiYgIXJzdWJtaXR0ZXJUeXBlcy50ZXN0KCB0eXBlICkgJiZcblx0XHRcdFx0KCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuXHRcdH0gKS5tYXAoIGZ1bmN0aW9uKCBfaSwgZWxlbSApIHtcblx0XHRcdHZhciB2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggQXJyYXkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHJldHVybiBqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHRcdFx0fSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdH0gKS5nZXQoKTtcblx0fVxufSApO1xuXG5cbnZhclxuXHRyMjAgPSAvJTIwL2csXG5cdHJoYXNoID0gLyMuKiQvLFxuXHRyYW50aUNhY2hlID0gLyhbPyZdKV89W14mXSovLFxuXHRyaGVhZGVycyA9IC9eKC4qPyk6WyBcXHRdKihbXlxcclxcbl0qKSQvbWcsXG5cblx0Ly8gdHJhYy03NjUzLCB0cmFjLTgxMjUsIHRyYWMtODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG5cdHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHRycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cblx0LyogUHJlZmlsdGVyc1xuXHQgKiAxKSBUaGV5IGFyZSB1c2VmdWwgdG8gaW50cm9kdWNlIGN1c3RvbSBkYXRhVHlwZXMgKHNlZSBhamF4L2pzb25wLmpzIGZvciBhbiBleGFtcGxlKVxuXHQgKiAyKSBUaGVzZSBhcmUgY2FsbGVkOlxuXHQgKiAgICAtIEJFRk9SRSBhc2tpbmcgZm9yIGEgdHJhbnNwb3J0XG5cdCAqICAgIC0gQUZURVIgcGFyYW0gc2VyaWFsaXphdGlvbiAocy5kYXRhIGlzIGEgc3RyaW5nIGlmIHMucHJvY2Vzc0RhdGEgaXMgdHJ1ZSlcblx0ICogMykga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiA0KSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDUpIGV4ZWN1dGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGNvbnRpbnVlIGRvd24gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHRwcmVmaWx0ZXJzID0ge30sXG5cblx0LyogVHJhbnNwb3J0cyBiaW5kaW5nc1xuXHQgKiAxKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDIpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogMykgc2VsZWN0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gZ28gdG8gXCIqXCIgaWYgbmVlZGVkXG5cdCAqL1xuXHR0cmFuc3BvcnRzID0ge30sXG5cblx0Ly8gQXZvaWQgY29tbWVudC1wcm9sb2cgY2hhciBzZXF1ZW5jZSAodHJhYy0xMDA5OCk7IG11c3QgYXBwZWFzZSBsaW50IGFuZCBldmFkZSBjb21wcmVzc2lvblxuXHRhbGxUeXBlcyA9IFwiKi9cIi5jb25jYXQoIFwiKlwiICksXG5cblx0Ly8gQW5jaG9yIHRhZyBmb3IgcGFyc2luZyB0aGUgZG9jdW1lbnQgb3JpZ2luXG5cdG9yaWdpbkFuY2hvciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiYVwiICk7XG5cbm9yaWdpbkFuY2hvci5ocmVmID0gbG9jYXRpb24uaHJlZjtcblxuLy8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuZnVuY3Rpb24gYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUgKSB7XG5cblx0Ly8gZGF0YVR5cGVFeHByZXNzaW9uIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBcIipcIlxuXHRyZXR1cm4gZnVuY3Rpb24oIGRhdGFUeXBlRXhwcmVzc2lvbiwgZnVuYyApIHtcblxuXHRcdGlmICggdHlwZW9mIGRhdGFUeXBlRXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGZ1bmMgPSBkYXRhVHlwZUV4cHJlc3Npb247XG5cdFx0XHRkYXRhVHlwZUV4cHJlc3Npb24gPSBcIipcIjtcblx0XHR9XG5cblx0XHR2YXIgZGF0YVR5cGUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGRhdGFUeXBlcyA9IGRhdGFUeXBlRXhwcmVzc2lvbi50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90aHRtbHdoaXRlICkgfHwgW107XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIGZ1bmMgKSApIHtcblxuXHRcdFx0Ly8gRm9yIGVhY2ggZGF0YVR5cGUgaW4gdGhlIGRhdGFUeXBlRXhwcmVzc2lvblxuXHRcdFx0d2hpbGUgKCAoIGRhdGFUeXBlID0gZGF0YVR5cGVzWyBpKysgXSApICkge1xuXG5cdFx0XHRcdC8vIFByZXBlbmQgaWYgcmVxdWVzdGVkXG5cdFx0XHRcdGlmICggZGF0YVR5cGVbIDAgXSA9PT0gXCIrXCIgKSB7XG5cdFx0XHRcdFx0ZGF0YVR5cGUgPSBkYXRhVHlwZS5zbGljZSggMSApIHx8IFwiKlwiO1xuXHRcdFx0XHRcdCggc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdICkudW5zaGlmdCggZnVuYyApO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBhcHBlbmRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQoIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSApLnB1c2goIGZ1bmMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn1cblxuLy8gQmFzZSBpbnNwZWN0aW9uIGZ1bmN0aW9uIGZvciBwcmVmaWx0ZXJzIGFuZCB0cmFuc3BvcnRzXG5mdW5jdGlvbiBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlLCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICkge1xuXG5cdHZhciBpbnNwZWN0ZWQgPSB7fSxcblx0XHRzZWVraW5nVHJhbnNwb3J0ID0gKCBzdHJ1Y3R1cmUgPT09IHRyYW5zcG9ydHMgKTtcblxuXHRmdW5jdGlvbiBpbnNwZWN0KCBkYXRhVHlwZSApIHtcblx0XHR2YXIgc2VsZWN0ZWQ7XG5cdFx0aW5zcGVjdGVkWyBkYXRhVHlwZSBdID0gdHJ1ZTtcblx0XHRqUXVlcnkuZWFjaCggc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdLCBmdW5jdGlvbiggXywgcHJlZmlsdGVyT3JGYWN0b3J5ICkge1xuXHRcdFx0dmFyIGRhdGFUeXBlT3JUcmFuc3BvcnQgPSBwcmVmaWx0ZXJPckZhY3RvcnkoIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKTtcblx0XHRcdGlmICggdHlwZW9mIGRhdGFUeXBlT3JUcmFuc3BvcnQgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0IXNlZWtpbmdUcmFuc3BvcnQgJiYgIWluc3BlY3RlZFsgZGF0YVR5cGVPclRyYW5zcG9ydCBdICkge1xuXG5cdFx0XHRcdG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0aW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKCBzZWVraW5nVHJhbnNwb3J0ICkge1xuXHRcdFx0XHRyZXR1cm4gISggc2VsZWN0ZWQgPSBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHR9XG5cdFx0fSApO1xuXHRcdHJldHVybiBzZWxlY3RlZDtcblx0fVxuXG5cdHJldHVybiBpbnNwZWN0KCBvcHRpb25zLmRhdGFUeXBlc1sgMCBdICkgfHwgIWluc3BlY3RlZFsgXCIqXCIgXSAmJiBpbnNwZWN0KCBcIipcIiApO1xufVxuXG4vLyBBIHNwZWNpYWwgZXh0ZW5kIGZvciBhamF4IG9wdGlvbnNcbi8vIHRoYXQgdGFrZXMgXCJmbGF0XCIgb3B0aW9ucyAobm90IHRvIGJlIGRlZXAgZXh0ZW5kZWQpXG4vLyBGaXhlcyB0cmFjLTk4ODdcbmZ1bmN0aW9uIGFqYXhFeHRlbmQoIHRhcmdldCwgc3JjICkge1xuXHR2YXIga2V5LCBkZWVwLFxuXHRcdGZsYXRPcHRpb25zID0galF1ZXJ5LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9ucyB8fCB7fTtcblxuXHRmb3IgKCBrZXkgaW4gc3JjICkge1xuXHRcdGlmICggc3JjWyBrZXkgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0KCBmbGF0T3B0aW9uc1sga2V5IF0gPyB0YXJnZXQgOiAoIGRlZXAgfHwgKCBkZWVwID0ge30gKSApIClbIGtleSBdID0gc3JjWyBrZXkgXTtcblx0XHR9XG5cdH1cblx0aWYgKCBkZWVwICkge1xuXHRcdGpRdWVyeS5leHRlbmQoIHRydWUsIHRhcmdldCwgZGVlcCApO1xuXHR9XG5cblx0cmV0dXJuIHRhcmdldDtcbn1cblxuLyogSGFuZGxlcyByZXNwb25zZXMgdG8gYW4gYWpheCByZXF1ZXN0OlxuICogLSBmaW5kcyB0aGUgcmlnaHQgZGF0YVR5cGUgKG1lZGlhdGVzIGJldHdlZW4gY29udGVudC10eXBlIGFuZCBleHBlY3RlZCBkYXRhVHlwZSlcbiAqIC0gcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuICovXG5mdW5jdGlvbiBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICkge1xuXG5cdHZhciBjdCwgdHlwZSwgZmluYWxEYXRhVHlwZSwgZmlyc3REYXRhVHlwZSxcblx0XHRjb250ZW50cyA9IHMuY29udGVudHMsXG5cdFx0ZGF0YVR5cGVzID0gcy5kYXRhVHlwZXM7XG5cblx0Ly8gUmVtb3ZlIGF1dG8gZGF0YVR5cGUgYW5kIGdldCBjb250ZW50LXR5cGUgaW4gdGhlIHByb2Nlc3Ncblx0d2hpbGUgKCBkYXRhVHlwZXNbIDAgXSA9PT0gXCIqXCIgKSB7XG5cdFx0ZGF0YVR5cGVzLnNoaWZ0KCk7XG5cdFx0aWYgKCBjdCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0Y3QgPSBzLm1pbWVUeXBlIHx8IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKCBcIkNvbnRlbnQtVHlwZVwiICk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEga25vd24gY29udGVudC10eXBlXG5cdGlmICggY3QgKSB7XG5cdFx0Zm9yICggdHlwZSBpbiBjb250ZW50cyApIHtcblx0XHRcdGlmICggY29udGVudHNbIHR5cGUgXSAmJiBjb250ZW50c1sgdHlwZSBdLnRlc3QoIGN0ICkgKSB7XG5cdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0eXBlICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgcmVzcG9uc2UgZm9yIHRoZSBleHBlY3RlZCBkYXRhVHlwZVxuXHRpZiAoIGRhdGFUeXBlc1sgMCBdIGluIHJlc3BvbnNlcyApIHtcblx0XHRmaW5hbERhdGFUeXBlID0gZGF0YVR5cGVzWyAwIF07XG5cdH0gZWxzZSB7XG5cblx0XHQvLyBUcnkgY29udmVydGlibGUgZGF0YVR5cGVzXG5cdFx0Zm9yICggdHlwZSBpbiByZXNwb25zZXMgKSB7XG5cdFx0XHRpZiAoICFkYXRhVHlwZXNbIDAgXSB8fCBzLmNvbnZlcnRlcnNbIHR5cGUgKyBcIiBcIiArIGRhdGFUeXBlc1sgMCBdIF0gKSB7XG5cdFx0XHRcdGZpbmFsRGF0YVR5cGUgPSB0eXBlO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggIWZpcnN0RGF0YVR5cGUgKSB7XG5cdFx0XHRcdGZpcnN0RGF0YVR5cGUgPSB0eXBlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIE9yIGp1c3QgdXNlIGZpcnN0IG9uZVxuXHRcdGZpbmFsRGF0YVR5cGUgPSBmaW5hbERhdGFUeXBlIHx8IGZpcnN0RGF0YVR5cGU7XG5cdH1cblxuXHQvLyBJZiB3ZSBmb3VuZCBhIGRhdGFUeXBlXG5cdC8vIFdlIGFkZCB0aGUgZGF0YVR5cGUgdG8gdGhlIGxpc3QgaWYgbmVlZGVkXG5cdC8vIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2Vcblx0aWYgKCBmaW5hbERhdGFUeXBlICkge1xuXHRcdGlmICggZmluYWxEYXRhVHlwZSAhPT0gZGF0YVR5cGVzWyAwIF0gKSB7XG5cdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggZmluYWxEYXRhVHlwZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzcG9uc2VzWyBmaW5hbERhdGFUeXBlIF07XG5cdH1cbn1cblxuLyogQ2hhaW4gY29udmVyc2lvbnMgZ2l2ZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBvcmlnaW5hbCByZXNwb25zZVxuICogQWxzbyBzZXRzIHRoZSByZXNwb25zZVhYWCBmaWVsZHMgb24gdGhlIGpxWEhSIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhDb252ZXJ0KCBzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2VzcyApIHtcblx0dmFyIGNvbnYyLCBjdXJyZW50LCBjb252LCB0bXAsIHByZXYsXG5cdFx0Y29udmVydGVycyA9IHt9LFxuXG5cdFx0Ly8gV29yayB3aXRoIGEgY29weSBvZiBkYXRhVHlwZXMgaW4gY2FzZSB3ZSBuZWVkIHRvIG1vZGlmeSBpdCBmb3IgY29udmVyc2lvblxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzLnNsaWNlKCk7XG5cblx0Ly8gQ3JlYXRlIGNvbnZlcnRlcnMgbWFwIHdpdGggbG93ZXJjYXNlZCBrZXlzXG5cdGlmICggZGF0YVR5cGVzWyAxIF0gKSB7XG5cdFx0Zm9yICggY29udiBpbiBzLmNvbnZlcnRlcnMgKSB7XG5cdFx0XHRjb252ZXJ0ZXJzWyBjb252LnRvTG93ZXJDYXNlKCkgXSA9IHMuY29udmVydGVyc1sgY29udiBdO1xuXHRcdH1cblx0fVxuXG5cdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHQvLyBDb252ZXJ0IHRvIGVhY2ggc2VxdWVudGlhbCBkYXRhVHlwZVxuXHR3aGlsZSAoIGN1cnJlbnQgKSB7XG5cblx0XHRpZiAoIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSApIHtcblx0XHRcdGpxWEhSWyBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gXSA9IHJlc3BvbnNlO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHRoZSBkYXRhRmlsdGVyIGlmIHByb3ZpZGVkXG5cdFx0aWYgKCAhcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyICkge1xuXHRcdFx0cmVzcG9uc2UgPSBzLmRhdGFGaWx0ZXIoIHJlc3BvbnNlLCBzLmRhdGFUeXBlICk7XG5cdFx0fVxuXG5cdFx0cHJldiA9IGN1cnJlbnQ7XG5cdFx0Y3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG5cdFx0aWYgKCBjdXJyZW50ICkge1xuXG5cdFx0XHQvLyBUaGVyZSdzIG9ubHkgd29yayB0byBkbyBpZiBjdXJyZW50IGRhdGFUeXBlIGlzIG5vbi1hdXRvXG5cdFx0XHRpZiAoIGN1cnJlbnQgPT09IFwiKlwiICkge1xuXG5cdFx0XHRcdGN1cnJlbnQgPSBwcmV2O1xuXG5cdFx0XHQvLyBDb252ZXJ0IHJlc3BvbnNlIGlmIHByZXYgZGF0YVR5cGUgaXMgbm9uLWF1dG8gYW5kIGRpZmZlcnMgZnJvbSBjdXJyZW50XG5cdFx0XHR9IGVsc2UgaWYgKCBwcmV2ICE9PSBcIipcIiAmJiBwcmV2ICE9PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdC8vIFNlZWsgYSBkaXJlY3QgY29udmVydGVyXG5cdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBwcmV2ICsgXCIgXCIgKyBjdXJyZW50IF0gfHwgY29udmVydGVyc1sgXCIqIFwiICsgY3VycmVudCBdO1xuXG5cdFx0XHRcdC8vIElmIG5vbmUgZm91bmQsIHNlZWsgYSBwYWlyXG5cdFx0XHRcdGlmICggIWNvbnYgKSB7XG5cdFx0XHRcdFx0Zm9yICggY29udjIgaW4gY29udmVydGVycyApIHtcblxuXHRcdFx0XHRcdFx0Ly8gSWYgY29udjIgb3V0cHV0cyBjdXJyZW50XG5cdFx0XHRcdFx0XHR0bXAgPSBjb252Mi5zcGxpdCggXCIgXCIgKTtcblx0XHRcdFx0XHRcdGlmICggdG1wWyAxIF0gPT09IGN1cnJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gSWYgcHJldiBjYW4gYmUgY29udmVydGVkIHRvIGFjY2VwdGVkIGlucHV0XG5cdFx0XHRcdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBwcmV2ICsgXCIgXCIgKyB0bXBbIDAgXSBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0Y29udmVydGVyc1sgXCIqIFwiICsgdG1wWyAwIF0gXTtcblx0XHRcdFx0XHRcdFx0aWYgKCBjb252ICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ29uZGVuc2UgZXF1aXZhbGVuY2UgY29udmVydGVyc1xuXHRcdFx0XHRcdFx0XHRcdGlmICggY29udiA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBjb252MiBdO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBpbnNlcnQgdGhlIGludGVybWVkaWF0ZSBkYXRhVHlwZVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGNvbnZlcnRlcnNbIGNvbnYyIF0gIT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50ID0gdG1wWyAwIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdG1wWyAxIF0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBcHBseSBjb252ZXJ0ZXIgKGlmIG5vdCBhbiBlcXVpdmFsZW5jZSlcblx0XHRcdFx0aWYgKCBjb252ICE9PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0Ly8gVW5sZXNzIGVycm9ycyBhcmUgYWxsb3dlZCB0byBidWJibGUsIGNhdGNoIGFuZCByZXR1cm4gdGhlbVxuXHRcdFx0XHRcdGlmICggY29udiAmJiBzLnRocm93cyApIHtcblx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHRcdFx0c3RhdGU6IFwicGFyc2VyZXJyb3JcIixcblx0XHRcdFx0XHRcdFx0XHRlcnJvcjogY29udiA/IGUgOiBcIk5vIGNvbnZlcnNpb24gZnJvbSBcIiArIHByZXYgKyBcIiB0byBcIiArIGN1cnJlbnRcblx0XHRcdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4geyBzdGF0ZTogXCJzdWNjZXNzXCIsIGRhdGE6IHJlc3BvbnNlIH07XG59XG5cbmpRdWVyeS5leHRlbmQoIHtcblxuXHQvLyBDb3VudGVyIGZvciBob2xkaW5nIHRoZSBudW1iZXIgb2YgYWN0aXZlIHF1ZXJpZXNcblx0YWN0aXZlOiAwLFxuXG5cdC8vIExhc3QtTW9kaWZpZWQgaGVhZGVyIGNhY2hlIGZvciBuZXh0IHJlcXVlc3Rcblx0bGFzdE1vZGlmaWVkOiB7fSxcblx0ZXRhZzoge30sXG5cblx0YWpheFNldHRpbmdzOiB7XG5cdFx0dXJsOiBsb2NhdGlvbi5ocmVmLFxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0aXNMb2NhbDogcmxvY2FsUHJvdG9jb2wudGVzdCggbG9jYXRpb24ucHJvdG9jb2wgKSxcblx0XHRnbG9iYWw6IHRydWUsXG5cdFx0cHJvY2Vzc0RhdGE6IHRydWUsXG5cdFx0YXN5bmM6IHRydWUsXG5cdFx0Y29udGVudFR5cGU6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsXG5cblx0XHQvKlxuXHRcdHRpbWVvdXQ6IDAsXG5cdFx0ZGF0YTogbnVsbCxcblx0XHRkYXRhVHlwZTogbnVsbCxcblx0XHR1c2VybmFtZTogbnVsbCxcblx0XHRwYXNzd29yZDogbnVsbCxcblx0XHRjYWNoZTogbnVsbCxcblx0XHR0aHJvd3M6IGZhbHNlLFxuXHRcdHRyYWRpdGlvbmFsOiBmYWxzZSxcblx0XHRoZWFkZXJzOiB7fSxcblx0XHQqL1xuXG5cdFx0YWNjZXB0czoge1xuXHRcdFx0XCIqXCI6IGFsbFR5cGVzLFxuXHRcdFx0dGV4dDogXCJ0ZXh0L3BsYWluXCIsXG5cdFx0XHRodG1sOiBcInRleHQvaHRtbFwiLFxuXHRcdFx0eG1sOiBcImFwcGxpY2F0aW9uL3htbCwgdGV4dC94bWxcIixcblx0XHRcdGpzb246IFwiYXBwbGljYXRpb24vanNvbiwgdGV4dC9qYXZhc2NyaXB0XCJcblx0XHR9LFxuXG5cdFx0Y29udGVudHM6IHtcblx0XHRcdHhtbDogL1xcYnhtbFxcYi8sXG5cdFx0XHRodG1sOiAvXFxiaHRtbC8sXG5cdFx0XHRqc29uOiAvXFxianNvblxcYi9cblx0XHR9LFxuXG5cdFx0cmVzcG9uc2VGaWVsZHM6IHtcblx0XHRcdHhtbDogXCJyZXNwb25zZVhNTFwiLFxuXHRcdFx0dGV4dDogXCJyZXNwb25zZVRleHRcIixcblx0XHRcdGpzb246IFwicmVzcG9uc2VKU09OXCJcblx0XHR9LFxuXG5cdFx0Ly8gRGF0YSBjb252ZXJ0ZXJzXG5cdFx0Ly8gS2V5cyBzZXBhcmF0ZSBzb3VyY2UgKG9yIGNhdGNoYWxsIFwiKlwiKSBhbmQgZGVzdGluYXRpb24gdHlwZXMgd2l0aCBhIHNpbmdsZSBzcGFjZVxuXHRcdGNvbnZlcnRlcnM6IHtcblxuXHRcdFx0Ly8gQ29udmVydCBhbnl0aGluZyB0byB0ZXh0XG5cdFx0XHRcIiogdGV4dFwiOiBTdHJpbmcsXG5cblx0XHRcdC8vIFRleHQgdG8gaHRtbCAodHJ1ZSA9IG5vIHRyYW5zZm9ybWF0aW9uKVxuXHRcdFx0XCJ0ZXh0IGh0bWxcIjogdHJ1ZSxcblxuXHRcdFx0Ly8gRXZhbHVhdGUgdGV4dCBhcyBhIGpzb24gZXhwcmVzc2lvblxuXHRcdFx0XCJ0ZXh0IGpzb25cIjogSlNPTi5wYXJzZSxcblxuXHRcdFx0Ly8gUGFyc2UgdGV4dCBhcyB4bWxcblx0XHRcdFwidGV4dCB4bWxcIjogalF1ZXJ5LnBhcnNlWE1MXG5cdFx0fSxcblxuXHRcdC8vIEZvciBvcHRpb25zIHRoYXQgc2hvdWxkbid0IGJlIGRlZXAgZXh0ZW5kZWQ6XG5cdFx0Ly8geW91IGNhbiBhZGQgeW91ciBvd24gY3VzdG9tIG9wdGlvbnMgaGVyZSBpZlxuXHRcdC8vIGFuZCB3aGVuIHlvdSBjcmVhdGUgb25lIHRoYXQgc2hvdWxkbid0IGJlXG5cdFx0Ly8gZGVlcCBleHRlbmRlZCAoc2VlIGFqYXhFeHRlbmQpXG5cdFx0ZmxhdE9wdGlvbnM6IHtcblx0XHRcdHVybDogdHJ1ZSxcblx0XHRcdGNvbnRleHQ6IHRydWVcblx0XHR9XG5cdH0sXG5cblx0Ly8gQ3JlYXRlcyBhIGZ1bGwgZmxlZGdlZCBzZXR0aW5ncyBvYmplY3QgaW50byB0YXJnZXRcblx0Ly8gd2l0aCBib3RoIGFqYXhTZXR0aW5ncyBhbmQgc2V0dGluZ3MgZmllbGRzLlxuXHQvLyBJZiB0YXJnZXQgaXMgb21pdHRlZCwgd3JpdGVzIGludG8gYWpheFNldHRpbmdzLlxuXHRhamF4U2V0dXA6IGZ1bmN0aW9uKCB0YXJnZXQsIHNldHRpbmdzICkge1xuXHRcdHJldHVybiBzZXR0aW5ncyA/XG5cblx0XHRcdC8vIEJ1aWxkaW5nIGEgc2V0dGluZ3Mgb2JqZWN0XG5cdFx0XHRhamF4RXh0ZW5kKCBhamF4RXh0ZW5kKCB0YXJnZXQsIGpRdWVyeS5hamF4U2V0dGluZ3MgKSwgc2V0dGluZ3MgKSA6XG5cblx0XHRcdC8vIEV4dGVuZGluZyBhamF4U2V0dGluZ3Ncblx0XHRcdGFqYXhFeHRlbmQoIGpRdWVyeS5hamF4U2V0dGluZ3MsIHRhcmdldCApO1xuXHR9LFxuXG5cdGFqYXhQcmVmaWx0ZXI6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggcHJlZmlsdGVycyApLFxuXHRhamF4VHJhbnNwb3J0OiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMgKSxcblxuXHQvLyBNYWluIG1ldGhvZFxuXHRhamF4OiBmdW5jdGlvbiggdXJsLCBvcHRpb25zICkge1xuXG5cdFx0Ly8gSWYgdXJsIGlzIGFuIG9iamVjdCwgc2ltdWxhdGUgcHJlLTEuNSBzaWduYXR1cmVcblx0XHRpZiAoIHR5cGVvZiB1cmwgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHRvcHRpb25zID0gdXJsO1xuXHRcdFx0dXJsID0gdW5kZWZpbmVkO1xuXHRcdH1cblxuXHRcdC8vIEZvcmNlIG9wdGlvbnMgdG8gYmUgYW4gb2JqZWN0XG5cdFx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0XHR2YXIgdHJhbnNwb3J0LFxuXG5cdFx0XHQvLyBVUkwgd2l0aG91dCBhbnRpLWNhY2hlIHBhcmFtXG5cdFx0XHRjYWNoZVVSTCxcblxuXHRcdFx0Ly8gUmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nLFxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzLFxuXG5cdFx0XHQvLyB0aW1lb3V0IGhhbmRsZVxuXHRcdFx0dGltZW91dFRpbWVyLFxuXG5cdFx0XHQvLyBVcmwgY2xlYW51cCB2YXJcblx0XHRcdHVybEFuY2hvcixcblxuXHRcdFx0Ly8gUmVxdWVzdCBzdGF0ZSAoYmVjb21lcyBmYWxzZSB1cG9uIHNlbmQgYW5kIHRydWUgdXBvbiBjb21wbGV0aW9uKVxuXHRcdFx0Y29tcGxldGVkLFxuXG5cdFx0XHQvLyBUbyBrbm93IGlmIGdsb2JhbCBldmVudHMgYXJlIHRvIGJlIGRpc3BhdGNoZWRcblx0XHRcdGZpcmVHbG9iYWxzLFxuXG5cdFx0XHQvLyBMb29wIHZhcmlhYmxlXG5cdFx0XHRpLFxuXG5cdFx0XHQvLyB1bmNhY2hlZCBwYXJ0IG9mIHRoZSB1cmxcblx0XHRcdHVuY2FjaGVkLFxuXG5cdFx0XHQvLyBDcmVhdGUgdGhlIGZpbmFsIG9wdGlvbnMgb2JqZWN0XG5cdFx0XHRzID0galF1ZXJ5LmFqYXhTZXR1cCgge30sIG9wdGlvbnMgKSxcblxuXHRcdFx0Ly8gQ2FsbGJhY2tzIGNvbnRleHRcblx0XHRcdGNhbGxiYWNrQ29udGV4dCA9IHMuY29udGV4dCB8fCBzLFxuXG5cdFx0XHQvLyBDb250ZXh0IGZvciBnbG9iYWwgZXZlbnRzIGlzIGNhbGxiYWNrQ29udGV4dCBpZiBpdCBpcyBhIERPTSBub2RlIG9yIGpRdWVyeSBjb2xsZWN0aW9uXG5cdFx0XHRnbG9iYWxFdmVudENvbnRleHQgPSBzLmNvbnRleHQgJiZcblx0XHRcdFx0KCBjYWxsYmFja0NvbnRleHQubm9kZVR5cGUgfHwgY2FsbGJhY2tDb250ZXh0LmpxdWVyeSApID9cblx0XHRcdFx0alF1ZXJ5KCBjYWxsYmFja0NvbnRleHQgKSA6XG5cdFx0XHRcdGpRdWVyeS5ldmVudCxcblxuXHRcdFx0Ly8gRGVmZXJyZWRzXG5cdFx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoIFwib25jZSBtZW1vcnlcIiApLFxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0c3RhdHVzQ29kZSA9IHMuc3RhdHVzQ29kZSB8fCB7fSxcblxuXHRcdFx0Ly8gSGVhZGVycyAodGhleSBhcmUgc2VudCBhbGwgYXQgb25jZSlcblx0XHRcdHJlcXVlc3RIZWFkZXJzID0ge30sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cblx0XHRcdC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxuXHRcdFx0c3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG5cblx0XHRcdC8vIEZha2UgeGhyXG5cdFx0XHRqcVhIUiA9IHtcblx0XHRcdFx0cmVhZHlTdGF0ZTogMCxcblxuXHRcdFx0XHQvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdFx0XHRcdHZhciBtYXRjaDtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdFx0XHRcdGlmICggIXJlc3BvbnNlSGVhZGVycyApIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzID0ge307XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKCBtYXRjaCA9IHJoZWFkZXJzLmV4ZWMoIHJlc3BvbnNlSGVhZGVyc1N0cmluZyApICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdID1cblx0XHRcdFx0XHRcdFx0XHRcdCggcmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsgMSBdLnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdIHx8IFtdIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmNvbmNhdCggbWF0Y2hbIDIgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtYXRjaCA9IHJlc3BvbnNlSGVhZGVyc1sga2V5LnRvTG93ZXJDYXNlKCkgKyBcIiBcIiBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2ggPT0gbnVsbCA/IG51bGwgOiBtYXRjaC5qb2luKCBcIiwgXCIgKTtcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBSYXcgc3RyaW5nXG5cdFx0XHRcdGdldEFsbFJlc3BvbnNlSGVhZGVyczogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGNvbXBsZXRlZCA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FjaGVzIHRoZSBoZWFkZXJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0XHRcdGlmICggY29tcGxldGVkID09IG51bGwgKSB7XG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbmFtZS50b0xvd2VyQ2FzZSgpIF0gPVxuXHRcdFx0XHRcdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSB8fCBuYW1lO1xuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCA9PSBudWxsICkge1xuXHRcdFx0XHRcdFx0cy5taW1lVHlwZSA9IHR5cGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRcdHN0YXR1c0NvZGU6IGZ1bmN0aW9uKCBtYXAgKSB7XG5cdFx0XHRcdFx0dmFyIGNvZGU7XG5cdFx0XHRcdFx0aWYgKCBtYXAgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBFeGVjdXRlIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja3Ncblx0XHRcdFx0XHRcdFx0anFYSFIuYWx3YXlzKCBtYXBbIGpxWEhSLnN0YXR1cyBdICk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXG5cdFx0XHRcdFx0XHRcdC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2tzIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xuXHRcdFx0XHRcdFx0XHRcdHN0YXR1c0NvZGVbIGNvZGUgXSA9IFsgc3RhdHVzQ29kZVsgY29kZSBdLCBtYXBbIGNvZGUgXSBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhbmNlbCB0aGUgcmVxdWVzdFxuXHRcdFx0XHRhYm9ydDogZnVuY3Rpb24oIHN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0dmFyIGZpbmFsVGV4dCA9IHN0YXR1c1RleHQgfHwgc3RyQWJvcnQ7XG5cdFx0XHRcdFx0aWYgKCB0cmFuc3BvcnQgKSB7XG5cdFx0XHRcdFx0XHR0cmFuc3BvcnQuYWJvcnQoIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRkb25lKCAwLCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdC8vIEF0dGFjaCBkZWZlcnJlZHNcblx0XHRkZWZlcnJlZC5wcm9taXNlKCBqcVhIUiApO1xuXG5cdFx0Ly8gQWRkIHByb3RvY29sIGlmIG5vdCBwcm92aWRlZCAocHJlZmlsdGVycyBtaWdodCBleHBlY3QgaXQpXG5cdFx0Ly8gSGFuZGxlIGZhbHN5IHVybCBpbiB0aGUgc2V0dGluZ3Mgb2JqZWN0ICh0cmFjLTEwMDkzOiBjb25zaXN0ZW5jeSB3aXRoIG9sZCBzaWduYXR1cmUpXG5cdFx0Ly8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG5cdFx0cy51cmwgPSAoICggdXJsIHx8IHMudXJsIHx8IGxvY2F0aW9uLmhyZWYgKSArIFwiXCIgKVxuXHRcdFx0LnJlcGxhY2UoIHJwcm90b2NvbCwgbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKTtcblxuXHRcdC8vIEFsaWFzIG1ldGhvZCBvcHRpb24gdG8gdHlwZSBhcyBwZXIgdGlja2V0IHRyYWMtMTIwMDRcblx0XHRzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlO1xuXG5cdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdHMuZGF0YVR5cGVzID0gKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdGh0bWx3aGl0ZSApIHx8IFsgXCJcIiBdO1xuXG5cdFx0Ly8gQSBjcm9zcy1kb21haW4gcmVxdWVzdCBpcyBpbiBvcmRlciB3aGVuIHRoZSBvcmlnaW4gZG9lc24ndCBtYXRjaCB0aGUgY3VycmVudCBvcmlnaW4uXG5cdFx0aWYgKCBzLmNyb3NzRG9tYWluID09IG51bGwgKSB7XG5cdFx0XHR1cmxBbmNob3IgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImFcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSwgRWRnZSAxMiAtIDE1XG5cdFx0XHQvLyBJRSB0aHJvd3MgZXhjZXB0aW9uIG9uIGFjY2Vzc2luZyB0aGUgaHJlZiBwcm9wZXJ0eSBpZiB1cmwgaXMgbWFsZm9ybWVkLFxuXHRcdFx0Ly8gZS5nLiBodHRwOi8vZXhhbXBsZS5jb206ODB4L1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0dXJsQW5jaG9yLmhyZWYgPSBzLnVybDtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA8PTggLSAxMSBvbmx5XG5cdFx0XHRcdC8vIEFuY2hvcidzIGhvc3QgcHJvcGVydHkgaXNuJ3QgY29ycmVjdGx5IHNldCB3aGVuIHMudXJsIGlzIHJlbGF0aXZlXG5cdFx0XHRcdHVybEFuY2hvci5ocmVmID0gdXJsQW5jaG9yLmhyZWY7XG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSBvcmlnaW5BbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyBvcmlnaW5BbmNob3IuaG9zdCAhPT1cblx0XHRcdFx0XHR1cmxBbmNob3IucHJvdG9jb2wgKyBcIi8vXCIgKyB1cmxBbmNob3IuaG9zdDtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIElmIHRoZXJlIGlzIGFuIGVycm9yIHBhcnNpbmcgdGhlIFVSTCwgYXNzdW1lIGl0IGlzIGNyb3NzRG9tYWluLFxuXHRcdFx0XHQvLyBpdCBjYW4gYmUgcmVqZWN0ZWQgYnkgdGhlIHRyYW5zcG9ydCBpZiBpdCBpcyBpbnZhbGlkXG5cdFx0XHRcdHMuY3Jvc3NEb21haW4gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXHRcdGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcHJlZmlsdGVyc1xuXHRcdGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblx0XHRpZiAoIGNvbXBsZXRlZCApIHtcblx0XHRcdHJldHVybiBqcVhIUjtcblx0XHR9XG5cblx0XHQvLyBXZSBjYW4gZmlyZSBnbG9iYWwgZXZlbnRzIGFzIG9mIG5vdyBpZiBhc2tlZCB0b1xuXHRcdC8vIERvbid0IGZpcmUgZXZlbnRzIGlmIGpRdWVyeS5ldmVudCBpcyB1bmRlZmluZWQgaW4gYW4gQU1ELXVzYWdlIHNjZW5hcmlvICh0cmFjLTE1MTE4KVxuXHRcdGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsO1xuXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXHRcdGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIFwiYWpheFN0YXJ0XCIgKTtcblx0XHR9XG5cblx0XHQvLyBVcHBlcmNhc2UgdGhlIHR5cGVcblx0XHRzLnR5cGUgPSBzLnR5cGUudG9VcHBlckNhc2UoKTtcblxuXHRcdC8vIERldGVybWluZSBpZiByZXF1ZXN0IGhhcyBjb250ZW50XG5cdFx0cy5oYXNDb250ZW50ID0gIXJub0NvbnRlbnQudGVzdCggcy50eXBlICk7XG5cblx0XHQvLyBTYXZlIHRoZSBVUkwgaW4gY2FzZSB3ZSdyZSB0b3lpbmcgd2l0aCB0aGUgSWYtTW9kaWZpZWQtU2luY2Vcblx0XHQvLyBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIgbGF0ZXIgb25cblx0XHQvLyBSZW1vdmUgaGFzaCB0byBzaW1wbGlmeSB1cmwgbWFuaXB1bGF0aW9uXG5cdFx0Y2FjaGVVUkwgPSBzLnVybC5yZXBsYWNlKCByaGFzaCwgXCJcIiApO1xuXG5cdFx0Ly8gTW9yZSBvcHRpb25zIGhhbmRsaW5nIGZvciByZXF1ZXN0cyB3aXRoIG5vIGNvbnRlbnRcblx0XHRpZiAoICFzLmhhc0NvbnRlbnQgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBoYXNoIHNvIHdlIGNhbiBwdXQgaXQgYmFja1xuXHRcdFx0dW5jYWNoZWQgPSBzLnVybC5zbGljZSggY2FjaGVVUkwubGVuZ3RoICk7XG5cblx0XHRcdC8vIElmIGRhdGEgaXMgYXZhaWxhYmxlIGFuZCBzaG91bGQgYmUgcHJvY2Vzc2VkLCBhcHBlbmQgZGF0YSB0byB1cmxcblx0XHRcdGlmICggcy5kYXRhICYmICggcy5wcm9jZXNzRGF0YSB8fCB0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICkgKSB7XG5cdFx0XHRcdGNhY2hlVVJMICs9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmRhdGE7XG5cblx0XHRcdFx0Ly8gdHJhYy05NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0ZGVsZXRlIHMuZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIG9yIHVwZGF0ZSBhbnRpLWNhY2hlIHBhcmFtIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgPSBjYWNoZVVSTC5yZXBsYWNlKCByYW50aUNhY2hlLCBcIiQxXCIgKTtcblx0XHRcdFx0dW5jYWNoZWQgPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICsgKCBub25jZS5ndWlkKysgKSArXG5cdFx0XHRcdFx0dW5jYWNoZWQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFB1dCBoYXNoIGFuZCBhbnRpLWNhY2hlIG9uIHRoZSBVUkwgdGhhdCB3aWxsIGJlIHJlcXVlc3RlZCAoZ2gtMTczMilcblx0XHRcdHMudXJsID0gY2FjaGVVUkwgKyB1bmNhY2hlZDtcblxuXHRcdC8vIENoYW5nZSAnJTIwJyB0byAnKycgaWYgdGhpcyBpcyBlbmNvZGVkIGZvcm0gYm9keSBjb250ZW50IChnaC0yNjU4KVxuXHRcdH0gZWxzZSBpZiAoIHMuZGF0YSAmJiBzLnByb2Nlc3NEYXRhICYmXG5cdFx0XHQoIHMuY29udGVudFR5cGUgfHwgXCJcIiApLmluZGV4T2YoIFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIgKSA9PT0gMCApIHtcblx0XHRcdHMuZGF0YSA9IHMuZGF0YS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdGlmICggalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblx0XHRpZiAoIHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlcihcblx0XHRcdFwiQWNjZXB0XCIsXG5cdFx0XHRzLmRhdGFUeXBlc1sgMCBdICYmIHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbIDAgXSBdID9cblx0XHRcdFx0cy5hY2NlcHRzWyBzLmRhdGFUeXBlc1sgMCBdIF0gK1xuXHRcdFx0XHRcdCggcy5kYXRhVHlwZXNbIDAgXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIgKSA6XG5cdFx0XHRcdHMuYWNjZXB0c1sgXCIqXCIgXVxuXHRcdCk7XG5cblx0XHQvLyBDaGVjayBmb3IgaGVhZGVycyBvcHRpb25cblx0XHRmb3IgKCBpIGluIHMuaGVhZGVycyApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIGksIHMuaGVhZGVyc1sgaSBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXHRcdGlmICggcy5iZWZvcmVTZW5kICYmXG5cdFx0XHQoIHMuYmVmb3JlU2VuZC5jYWxsKCBjYWxsYmFja0NvbnRleHQsIGpxWEhSLCBzICkgPT09IGZhbHNlIHx8IGNvbXBsZXRlZCApICkge1xuXG5cdFx0XHQvLyBBYm9ydCBpZiBub3QgZG9uZSBhbHJlYWR5IGFuZCByZXR1cm5cblx0XHRcdHJldHVybiBqcVhIUi5hYm9ydCgpO1xuXHRcdH1cblxuXHRcdC8vIEFib3J0aW5nIGlzIG5vIGxvbmdlciBhIGNhbmNlbGxhdGlvblxuXHRcdHN0ckFib3J0ID0gXCJhYm9ydFwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja3Mgb24gZGVmZXJyZWRzXG5cdFx0Y29tcGxldGVEZWZlcnJlZC5hZGQoIHMuY29tcGxldGUgKTtcblx0XHRqcVhIUi5kb25lKCBzLnN1Y2Nlc3MgKTtcblx0XHRqcVhIUi5mYWlsKCBzLmVycm9yICk7XG5cblx0XHQvLyBHZXQgdHJhbnNwb3J0XG5cdFx0dHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblx0XHRpZiAoICF0cmFuc3BvcnQgKSB7XG5cdFx0XHRkb25lKCAtMSwgXCJObyBUcmFuc3BvcnRcIiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuXHRcdFx0Ly8gU2VuZCBnbG9iYWwgZXZlbnRcblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhTZW5kXCIsIFsganFYSFIsIHMgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhamF4U2VuZCwgc3RvcCB0aGVyZVxuXHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdHJldHVybiBqcVhIUjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVGltZW91dFxuXHRcdFx0aWYgKCBzLmFzeW5jICYmIHMudGltZW91dCA+IDAgKSB7XG5cdFx0XHRcdHRpbWVvdXRUaW1lciA9IHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqcVhIUi5hYm9ydCggXCJ0aW1lb3V0XCIgKTtcblx0XHRcdFx0fSwgcy50aW1lb3V0ICk7XG5cdFx0XHR9XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdGNvbXBsZXRlZCA9IGZhbHNlO1xuXHRcdFx0XHR0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXG5cdFx0XHRcdC8vIFJldGhyb3cgcG9zdC1jb21wbGV0aW9uIGV4Y2VwdGlvbnNcblx0XHRcdFx0aWYgKCBjb21wbGV0ZWQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSBvdGhlcnMgYXMgcmVzdWx0c1xuXHRcdFx0XHRkb25lKCAtMSwgZSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuXHRcdGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xuXHRcdFx0dmFyIGlzU3VjY2Vzcywgc3VjY2VzcywgZXJyb3IsIHJlc3BvbnNlLCBtb2RpZmllZCxcblx0XHRcdFx0c3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7XG5cblx0XHRcdC8vIElnbm9yZSByZXBlYXQgaW52b2NhdGlvbnNcblx0XHRcdGlmICggY29tcGxldGVkICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdGNvbXBsZXRlZCA9IHRydWU7XG5cblx0XHRcdC8vIENsZWFyIHRpbWVvdXQgaWYgaXQgZXhpc3RzXG5cdFx0XHRpZiAoIHRpbWVvdXRUaW1lciApIHtcblx0XHRcdFx0d2luZG93LmNsZWFyVGltZW91dCggdGltZW91dFRpbWVyICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG5cdFx0XHQvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuXHRcdFx0dHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cblx0XHRcdC8vIFNldCByZWFkeVN0YXRlXG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gc3RhdHVzID4gMCA/IDQgOiAwO1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuXHRcdFx0aXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7XG5cblx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXG5cdFx0XHRpZiAoIHJlc3BvbnNlcyApIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFVzZSBhIG5vb3AgY29udmVydGVyIGZvciBtaXNzaW5nIHNjcmlwdCBidXQgbm90IGlmIGpzb25wXG5cdFx0XHRpZiAoICFpc1N1Y2Nlc3MgJiZcblx0XHRcdFx0alF1ZXJ5LmluQXJyYXkoIFwic2NyaXB0XCIsIHMuZGF0YVR5cGVzICkgPiAtMSAmJlxuXHRcdFx0XHRqUXVlcnkuaW5BcnJheSggXCJqc29uXCIsIHMuZGF0YVR5cGVzICkgPCAwICkge1xuXHRcdFx0XHRzLmNvbnZlcnRlcnNbIFwidGV4dCBzY3JpcHRcIiBdID0gZnVuY3Rpb24oKSB7fTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29udmVydCBubyBtYXR0ZXIgd2hhdCAodGhhdCB3YXkgcmVzcG9uc2VYWFggZmllbGRzIGFyZSBhbHdheXMgc2V0KVxuXHRcdFx0cmVzcG9uc2UgPSBhamF4Q29udmVydCggcywgcmVzcG9uc2UsIGpxWEhSLCBpc1N1Y2Nlc3MgKTtcblxuXHRcdFx0Ly8gSWYgc3VjY2Vzc2Z1bCwgaGFuZGxlIHR5cGUgY2hhaW5pbmdcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXG5cdFx0XHRcdC8vIFNldCB0aGUgSWYtTW9kaWZpZWQtU2luY2UgYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyLCBpZiBpbiBpZk1vZGlmaWVkIG1vZGUuXG5cdFx0XHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0XHRcdG1vZGlmaWVkID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoIFwiTGFzdC1Nb2RpZmllZFwiICk7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlciggXCJldGFnXCIgKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBubyBjb250ZW50XG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjtcblxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcblx0XHRcdFx0fSBlbHNlIGlmICggc3RhdHVzID09PSAzMDQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0c3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0ZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cblx0XHRcdFx0Ly8gRXh0cmFjdCBlcnJvciBmcm9tIHN0YXR1c1RleHQgYW5kIG5vcm1hbGl6ZSBmb3Igbm9uLWFib3J0c1xuXHRcdFx0XHRlcnJvciA9IHN0YXR1c1RleHQ7XG5cdFx0XHRcdGlmICggc3RhdHVzIHx8ICFzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcImVycm9yXCI7XG5cdFx0XHRcdFx0aWYgKCBzdGF0dXMgPCAwICkge1xuXHRcdFx0XHRcdFx0c3RhdHVzID0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gU2V0IGRhdGEgZm9yIHRoZSBmYWtlIHhociBvYmplY3Rcblx0XHRcdGpxWEhSLnN0YXR1cyA9IHN0YXR1cztcblx0XHRcdGpxWEhSLnN0YXR1c1RleHQgPSAoIG5hdGl2ZVN0YXR1c1RleHQgfHwgc3RhdHVzVGV4dCApICsgXCJcIjtcblxuXHRcdFx0Ly8gU3VjY2Vzcy9FcnJvclxuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsgc3VjY2Vzcywgc3RhdHVzVGV4dCwganFYSFIgXSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0LCBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRqcVhIUi5zdGF0dXNDb2RlKCBzdGF0dXNDb2RlICk7XG5cdFx0XHRzdGF0dXNDb2RlID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggaXNTdWNjZXNzID8gXCJhamF4U3VjY2Vzc1wiIDogXCJhamF4RXJyb3JcIixcblx0XHRcdFx0XHRbIGpxWEhSLCBzLCBpc1N1Y2Nlc3MgPyBzdWNjZXNzIDogZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb21wbGV0ZVxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZC5maXJlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIGpxWEhSLCBzdGF0dXNUZXh0IF0gKTtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheENvbXBsZXRlXCIsIFsganFYSFIsIHMgXSApO1xuXG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBcImFqYXhTdG9wXCIgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBqcVhIUjtcblx0fSxcblxuXHRnZXRKU09OOiBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcblx0fSxcblxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggX2ksIG1ldGhvZCApIHtcblx0alF1ZXJ5WyBtZXRob2QgXSA9IGZ1bmN0aW9uKCB1cmwsIGRhdGEsIGNhbGxiYWNrLCB0eXBlICkge1xuXG5cdFx0Ly8gU2hpZnQgYXJndW1lbnRzIGlmIGRhdGEgYXJndW1lbnQgd2FzIG9taXR0ZWRcblx0XHRpZiAoIGlzRnVuY3Rpb24oIGRhdGEgKSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBUaGUgdXJsIGNhbiBiZSBhbiBvcHRpb25zIG9iamVjdCAod2hpY2ggdGhlbiBtdXN0IGhhdmUgLnVybClcblx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoIGpRdWVyeS5leHRlbmQoIHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dHlwZTogbWV0aG9kLFxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2tcblx0XHR9LCBqUXVlcnkuaXNQbGFpbk9iamVjdCggdXJsICkgJiYgdXJsICkgKTtcblx0fTtcbn0gKTtcblxualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIGZ1bmN0aW9uKCBzICkge1xuXHR2YXIgaTtcblx0Zm9yICggaSBpbiBzLmhlYWRlcnMgKSB7XG5cdFx0aWYgKCBpLnRvTG93ZXJDYXNlKCkgPT09IFwiY29udGVudC10eXBlXCIgKSB7XG5cdFx0XHRzLmNvbnRlbnRUeXBlID0gcy5oZWFkZXJzWyBpIF0gfHwgXCJcIjtcblx0XHR9XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuX2V2YWxVcmwgPSBmdW5jdGlvbiggdXJsLCBvcHRpb25zLCBkb2MgKSB7XG5cdHJldHVybiBqUXVlcnkuYWpheCgge1xuXHRcdHVybDogdXJsLFxuXG5cdFx0Ly8gTWFrZSB0aGlzIGV4cGxpY2l0LCBzaW5jZSB1c2VyIGNhbiBvdmVycmlkZSB0aGlzIHRocm91Z2ggYWpheFNldHVwICh0cmFjLTExMjY0KVxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0ZGF0YVR5cGU6IFwic2NyaXB0XCIsXG5cdFx0Y2FjaGU6IHRydWUsXG5cdFx0YXN5bmM6IGZhbHNlLFxuXHRcdGdsb2JhbDogZmFsc2UsXG5cblx0XHQvLyBPbmx5IGV2YWx1YXRlIHRoZSByZXNwb25zZSBpZiBpdCBpcyBzdWNjZXNzZnVsIChnaC00MTI2KVxuXHRcdC8vIGRhdGFGaWx0ZXIgaXMgbm90IGludm9rZWQgZm9yIGZhaWx1cmUgcmVzcG9uc2VzLCBzbyB1c2luZyBpdCBpbnN0ZWFkXG5cdFx0Ly8gb2YgdGhlIGRlZmF1bHQgY29udmVydGVyIGlzIGtsdWRneSBidXQgaXQgd29ya3MuXG5cdFx0Y29udmVydGVyczoge1xuXHRcdFx0XCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbigpIHt9XG5cdFx0fSxcblx0XHRkYXRhRmlsdGVyOiBmdW5jdGlvbiggcmVzcG9uc2UgKSB7XG5cdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggcmVzcG9uc2UsIG9wdGlvbnMsIGRvYyApO1xuXHRcdH1cblx0fSApO1xufTtcblxuXG5qUXVlcnkuZm4uZXh0ZW5kKCB7XG5cdHdyYXBBbGw6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHZhciB3cmFwO1xuXG5cdFx0aWYgKCB0aGlzWyAwIF0gKSB7XG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdFx0aHRtbCA9IGh0bWwuY2FsbCggdGhpc1sgMCBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRoZSBlbGVtZW50cyB0byB3cmFwIHRoZSB0YXJnZXQgYXJvdW5kXG5cdFx0XHR3cmFwID0galF1ZXJ5KCBodG1sLCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCApLmVxKCAwICkuY2xvbmUoIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzWyAwIF0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0d3JhcC5pbnNlcnRCZWZvcmUoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3cmFwLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gdGhpcztcblxuXHRcdFx0XHR3aGlsZSAoIGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQgKSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZWxlbTtcblx0XHRcdH0gKS5hcHBlbmQoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHR3cmFwSW5uZXI6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdGlmICggaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBJbm5lciggaHRtbC5jYWxsKCB0aGlzLCBpICkgKTtcblx0XHRcdH0gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0galF1ZXJ5KCB0aGlzICksXG5cdFx0XHRcdGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG5cdFx0XHRpZiAoIGNvbnRlbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGVudHMud3JhcEFsbCggaHRtbCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXHRcdH0gKTtcblx0fSxcblxuXHR3cmFwOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgaHRtbElzRnVuY3Rpb24gPSBpc0Z1bmN0aW9uKCBodG1sICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKCBmdW5jdGlvbiggaSApIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBBbGwoIGh0bWxJc0Z1bmN0aW9uID8gaHRtbC5jYWxsKCB0aGlzLCBpICkgOiBodG1sICk7XG5cdFx0fSApO1xuXHR9LFxuXG5cdHVud3JhcDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHRoaXMucGFyZW50KCBzZWxlY3RvciApLm5vdCggXCJib2R5XCIgKS5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeSggdGhpcyApLnJlcGxhY2VXaXRoKCB0aGlzLmNoaWxkTm9kZXMgKTtcblx0XHR9ICk7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0gKTtcblxuXG5qUXVlcnkuZXhwci5wc2V1ZG9zLmhpZGRlbiA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gIWpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSggZWxlbSApO1xufTtcbmpRdWVyeS5leHByLnBzZXVkb3MudmlzaWJsZSA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRyZXR1cm4gISEoIGVsZW0ub2Zmc2V0V2lkdGggfHwgZWxlbS5vZmZzZXRIZWlnaHQgfHwgZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApO1xufTtcblxuXG5cblxualF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIgPSBmdW5jdGlvbigpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gbmV3IHdpbmRvdy5YTUxIdHRwUmVxdWVzdCgpO1xuXHR9IGNhdGNoICggZSApIHt9XG59O1xuXG52YXIgeGhyU3VjY2Vzc1N0YXR1cyA9IHtcblxuXHRcdC8vIEZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG5cdFx0MDogMjAwLFxuXG5cdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHQvLyB0cmFjLTE0NTA6IHNvbWV0aW1lcyBJRSByZXR1cm5zIDEyMjMgd2hlbiBpdCBzaG91bGQgYmUgMjA0XG5cdFx0MTIyMzogMjA0XG5cdH0sXG5cdHhoclN1cHBvcnRlZCA9IGpRdWVyeS5hamF4U2V0dGluZ3MueGhyKCk7XG5cbnN1cHBvcnQuY29ycyA9ICEheGhyU3VwcG9ydGVkICYmICggXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQgKTtcbnN1cHBvcnQuYWpheCA9IHhoclN1cHBvcnRlZCA9ICEheGhyU3VwcG9ydGVkO1xuXG5qUXVlcnkuYWpheFRyYW5zcG9ydCggZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdHZhciBjYWxsYmFjaywgZXJyb3JDYWxsYmFjaztcblxuXHQvLyBDcm9zcyBkb21haW4gb25seSBhbGxvd2VkIGlmIHN1cHBvcnRlZCB0aHJvdWdoIFhNTEh0dHBSZXF1ZXN0XG5cdGlmICggc3VwcG9ydC5jb3JzIHx8IHhoclN1cHBvcnRlZCAmJiAhb3B0aW9ucy5jcm9zc0RvbWFpbiApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIGhlYWRlcnMsIGNvbXBsZXRlICkge1xuXHRcdFx0XHR2YXIgaSxcblx0XHRcdFx0XHR4aHIgPSBvcHRpb25zLnhocigpO1xuXG5cdFx0XHRcdHhoci5vcGVuKFxuXHRcdFx0XHRcdG9wdGlvbnMudHlwZSxcblx0XHRcdFx0XHRvcHRpb25zLnVybCxcblx0XHRcdFx0XHRvcHRpb25zLmFzeW5jLFxuXHRcdFx0XHRcdG9wdGlvbnMudXNlcm5hbWUsXG5cdFx0XHRcdFx0b3B0aW9ucy5wYXNzd29yZFxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdC8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRmb3IgKCBpIGluIG9wdGlvbnMueGhyRmllbGRzICkge1xuXHRcdFx0XHRcdFx0eGhyWyBpIF0gPSBvcHRpb25zLnhockZpZWxkc1sgaSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlIG1pbWUgdHlwZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlICkge1xuXHRcdFx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKCBvcHRpb25zLm1pbWVUeXBlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBYLVJlcXVlc3RlZC1XaXRoIGhlYWRlclxuXHRcdFx0XHQvLyBGb3IgY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzZWVpbmcgYXMgY29uZGl0aW9ucyBmb3IgYSBwcmVmbGlnaHQgYXJlXG5cdFx0XHRcdC8vIGFraW4gdG8gYSBqaWdzYXcgcHV6emxlLCB3ZSBzaW1wbHkgbmV2ZXIgc2V0IGl0IHRvIGJlIHN1cmUuXG5cdFx0XHRcdC8vIChpdCBjYW4gYWx3YXlzIGJlIHNldCBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIG9yIGV2ZW4gdXNpbmcgYWpheFNldHVwKVxuXHRcdFx0XHQvLyBGb3Igc2FtZS1kb21haW4gcmVxdWVzdHMsIHdvbid0IGNoYW5nZSBoZWFkZXIgaWYgYWxyZWFkeSBwcm92aWRlZC5cblx0XHRcdFx0aWYgKCAhb3B0aW9ucy5jcm9zc0RvbWFpbiAmJiAhaGVhZGVyc1sgXCJYLVJlcXVlc3RlZC1XaXRoXCIgXSApIHtcblx0XHRcdFx0XHRoZWFkZXJzWyBcIlgtUmVxdWVzdGVkLVdpdGhcIiBdID0gXCJYTUxIdHRwUmVxdWVzdFwiO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gU2V0IGhlYWRlcnNcblx0XHRcdFx0Zm9yICggaSBpbiBoZWFkZXJzICkge1xuXHRcdFx0XHRcdHhoci5zZXRSZXF1ZXN0SGVhZGVyKCBpLCBoZWFkZXJzWyBpIF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIENhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdFx0Y2FsbGJhY2sgPSBlcnJvckNhbGxiYWNrID0geGhyLm9ubG9hZCA9XG5cdFx0XHRcdFx0XHRcdFx0eGhyLm9uZXJyb3IgPSB4aHIub25hYm9ydCA9IHhoci5vbnRpbWVvdXQgPVxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlID09PSBcImFib3J0XCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0eGhyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwiZXJyb3JcIiApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFIDw9OSBvbmx5XG5cdFx0XHRcdFx0XHRcdFx0Ly8gT24gYSBtYW51YWwgbmF0aXZlIGFib3J0LCBJRTkgdGhyb3dzXG5cdFx0XHRcdFx0XHRcdFx0Ly8gZXJyb3JzIG9uIGFueSBwcm9wZXJ0eSBhY2Nlc3MgdGhhdCBpcyBub3QgcmVhZHlTdGF0ZVxuXHRcdFx0XHRcdFx0XHRcdGlmICggdHlwZW9mIHhoci5zdGF0dXMgIT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggMCwgXCJlcnJvclwiICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC8vIEZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSB0cmFjLTg2MDUsIHRyYWMtMTQyMDdcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHRcblx0XHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyU3VjY2Vzc1N0YXR1c1sgeGhyLnN0YXR1cyBdIHx8IHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCxcblxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUgPD05IG9ubHlcblx0XHRcdFx0XHRcdFx0XHRcdC8vIElFOSBoYXMgbm8gWEhSMiBidXQgdGhyb3dzIG9uIGJpbmFyeSAodHJhYy0xMTQyNilcblx0XHRcdFx0XHRcdFx0XHRcdC8vIEZvciBYSFIyIG5vbi10ZXh0LCBsZXQgdGhlIGNhbGxlciBoYW5kbGUgaXQgKGdoLTI0OTgpXG5cdFx0XHRcdFx0XHRcdFx0XHQoIHhoci5yZXNwb25zZVR5cGUgfHwgXCJ0ZXh0XCIgKSAhPT0gXCJ0ZXh0XCIgIHx8XG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCAhPT0gXCJzdHJpbmdcIiA/XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgYmluYXJ5OiB4aHIucmVzcG9uc2UgfSA6XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHsgdGV4dDogeGhyLnJlc3BvbnNlVGV4dCB9LFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gTGlzdGVuIHRvIGV2ZW50c1xuXHRcdFx0XHR4aHIub25sb2FkID0gY2FsbGJhY2soKTtcblx0XHRcdFx0ZXJyb3JDYWxsYmFjayA9IHhoci5vbmVycm9yID0geGhyLm9udGltZW91dCA9IGNhbGxiYWNrKCBcImVycm9yXCIgKTtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBJRSA5IG9ubHlcblx0XHRcdFx0Ly8gVXNlIG9ucmVhZHlzdGF0ZWNoYW5nZSB0byByZXBsYWNlIG9uYWJvcnRcblx0XHRcdFx0Ly8gdG8gaGFuZGxlIHVuY2F1Z2h0IGFib3J0c1xuXHRcdFx0XHRpZiAoIHhoci5vbmFib3J0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0eGhyLm9uYWJvcnQgPSBlcnJvckNhbGxiYWNrO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHRcdFx0Ly8gQ2hlY2sgcmVhZHlTdGF0ZSBiZWZvcmUgdGltZW91dCBhcyBpdCBjaGFuZ2VzXG5cdFx0XHRcdFx0XHRpZiAoIHhoci5yZWFkeVN0YXRlID09PSA0ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEFsbG93IG9uZXJyb3IgdG8gYmUgY2FsbGVkIGZpcnN0LFxuXHRcdFx0XHRcdFx0XHQvLyBidXQgdGhhdCB3aWxsIG5vdCBoYW5kbGUgYSBuYXRpdmUgYWJvcnRcblx0XHRcdFx0XHRcdFx0Ly8gQWxzbywgc2F2ZSBlcnJvckNhbGxiYWNrIHRvIGEgdmFyaWFibGVcblx0XHRcdFx0XHRcdFx0Ly8gYXMgeGhyLm9uZXJyb3IgY2Fubm90IGJlIGFjY2Vzc2VkXG5cdFx0XHRcdFx0XHRcdHdpbmRvdy5zZXRUaW1lb3V0KCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZXJyb3JDYWxsYmFjaygpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGFib3J0IGNhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0gY2FsbGJhY2soIFwiYWJvcnRcIiApO1xuXG5cdFx0XHRcdHRyeSB7XG5cblx0XHRcdFx0XHQvLyBEbyBzZW5kIHRoZSByZXF1ZXN0ICh0aGlzIG1heSByYWlzZSBhbiBleGNlcHRpb24pXG5cdFx0XHRcdFx0eGhyLnNlbmQoIG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCApO1xuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblxuXHRcdFx0XHRcdC8vIHRyYWMtMTQ2ODM6IE9ubHkgcmV0aHJvdyBpZiB0aGlzIGhhc24ndCBiZWVuIG5vdGlmaWVkIGFzIGFuIGVycm9yIHlldFxuXHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbi8vIFByZXZlbnQgYXV0by1leGVjdXRpb24gb2Ygc2NyaXB0cyB3aGVuIG5vIGV4cGxpY2l0IGRhdGFUeXBlIHdhcyBwcm92aWRlZCAoU2VlIGdoLTI0MzIpXG5qUXVlcnkuYWpheFByZWZpbHRlciggZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHRzLmNvbnRlbnRzLnNjcmlwdCA9IGZhbHNlO1xuXHR9XG59ICk7XG5cbi8vIEluc3RhbGwgc2NyaXB0IGRhdGFUeXBlXG5qUXVlcnkuYWpheFNldHVwKCB7XG5cdGFjY2VwdHM6IHtcblx0XHRzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBcIiArXG5cdFx0XHRcImFwcGxpY2F0aW9uL2VjbWFzY3JpcHQsIGFwcGxpY2F0aW9uL3gtZWNtYXNjcmlwdFwiXG5cdH0sXG5cdGNvbnRlbnRzOiB7XG5cdFx0c2NyaXB0OiAvXFxiKD86amF2YXxlY21hKXNjcmlwdFxcYi9cblx0fSxcblx0Y29udmVydGVyczoge1xuXHRcdFwidGV4dCBzY3JpcHRcIjogZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggdGV4dCApO1xuXHRcdFx0cmV0dXJuIHRleHQ7XG5cdFx0fVxuXHR9XG59ICk7XG5cbi8vIEhhbmRsZSBjYWNoZSdzIHNwZWNpYWwgY2FzZSBhbmQgY3Jvc3NEb21haW5cbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblx0aWYgKCBzLmNhY2hlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0cy5jYWNoZSA9IGZhbHNlO1xuXHR9XG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHRzLnR5cGUgPSBcIkdFVFwiO1xuXHR9XG59ICk7XG5cbi8vIEJpbmQgc2NyaXB0IHRhZyBoYWNrIHRyYW5zcG9ydFxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xuXG5cdC8vIFRoaXMgdHJhbnNwb3J0IG9ubHkgZGVhbHMgd2l0aCBjcm9zcyBkb21haW4gb3IgZm9yY2VkLWJ5LWF0dHJzIHJlcXVlc3RzXG5cdGlmICggcy5jcm9zc0RvbWFpbiB8fCBzLnNjcmlwdEF0dHJzICkge1xuXHRcdHZhciBzY3JpcHQsIGNhbGxiYWNrO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggXywgY29tcGxldGUgKSB7XG5cdFx0XHRcdHNjcmlwdCA9IGpRdWVyeSggXCI8c2NyaXB0PlwiIClcblx0XHRcdFx0XHQuYXR0ciggcy5zY3JpcHRBdHRycyB8fCB7fSApXG5cdFx0XHRcdFx0LnByb3AoIHsgY2hhcnNldDogcy5zY3JpcHRDaGFyc2V0LCBzcmM6IHMudXJsIH0gKVxuXHRcdFx0XHRcdC5vbiggXCJsb2FkIGVycm9yXCIsIGNhbGxiYWNrID0gZnVuY3Rpb24oIGV2dCApIHtcblx0XHRcdFx0XHRcdHNjcmlwdC5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICggZXZ0ICkge1xuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9ICk7XG5cblx0XHRcdFx0Ly8gVXNlIG5hdGl2ZSBET00gbWFuaXB1bGF0aW9uIHRvIGF2b2lkIG91ciBkb21NYW5pcCBBSkFYIHRyaWNrZXJ5XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdFsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59ICk7XG5cblxuXG5cbnZhciBvbGRDYWxsYmFja3MgPSBbXSxcblx0cmpzb25wID0gLyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztcblxuLy8gRGVmYXVsdCBqc29ucCBzZXR0aW5nc1xualF1ZXJ5LmFqYXhTZXR1cCgge1xuXHRqc29ucDogXCJjYWxsYmFja1wiLFxuXHRqc29ucENhbGxiYWNrOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgY2FsbGJhY2sgPSBvbGRDYWxsYmFja3MucG9wKCkgfHwgKCBqUXVlcnkuZXhwYW5kbyArIFwiX1wiICsgKCBub25jZS5ndWlkKysgKSApO1xuXHRcdHRoaXNbIGNhbGxiYWNrIF0gPSB0cnVlO1xuXHRcdHJldHVybiBjYWxsYmFjaztcblx0fVxufSApO1xuXG4vLyBEZXRlY3QsIG5vcm1hbGl6ZSBvcHRpb25zIGFuZCBpbnN0YWxsIGNhbGxiYWNrcyBmb3IganNvbnAgcmVxdWVzdHNcbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcImpzb24ganNvbnBcIiwgZnVuY3Rpb24oIHMsIG9yaWdpbmFsU2V0dGluZ3MsIGpxWEhSICkge1xuXG5cdHZhciBjYWxsYmFja05hbWUsIG92ZXJ3cml0dGVuLCByZXNwb25zZUNvbnRhaW5lcixcblx0XHRqc29uUHJvcCA9IHMuanNvbnAgIT09IGZhbHNlICYmICggcmpzb25wLnRlc3QoIHMudXJsICkgP1xuXHRcdFx0XCJ1cmxcIiA6XG5cdFx0XHR0eXBlb2Ygcy5kYXRhID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdCggcy5jb250ZW50VHlwZSB8fCBcIlwiIClcblx0XHRcdFx0XHQuaW5kZXhPZiggXCJhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWRcIiApID09PSAwICYmXG5cdFx0XHRcdHJqc29ucC50ZXN0KCBzLmRhdGEgKSAmJiBcImRhdGFcIlxuXHRcdCk7XG5cblx0Ly8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuXHRpZiAoIGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWyAwIF0gPT09IFwianNvbnBcIiApIHtcblxuXHRcdC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcblx0XHRjYWxsYmFja05hbWUgPSBzLmpzb25wQ2FsbGJhY2sgPSBpc0Z1bmN0aW9uKCBzLmpzb25wQ2FsbGJhY2sgKSA/XG5cdFx0XHRzLmpzb25wQ2FsbGJhY2soKSA6XG5cdFx0XHRzLmpzb25wQ2FsbGJhY2s7XG5cblx0XHQvLyBJbnNlcnQgY2FsbGJhY2sgaW50byB1cmwgb3IgZm9ybSBkYXRhXG5cdFx0aWYgKCBqc29uUHJvcCApIHtcblx0XHRcdHNbIGpzb25Qcm9wIF0gPSBzWyBqc29uUHJvcCBdLnJlcGxhY2UoIHJqc29ucCwgXCIkMVwiICsgY2FsbGJhY2tOYW1lICk7XG5cdFx0fSBlbHNlIGlmICggcy5qc29ucCAhPT0gZmFsc2UgKSB7XG5cdFx0XHRzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBzLnVybCApID8gXCImXCIgOiBcIj9cIiApICsgcy5qc29ucCArIFwiPVwiICsgY2FsbGJhY2tOYW1lO1xuXHRcdH1cblxuXHRcdC8vIFVzZSBkYXRhIGNvbnZlcnRlciB0byByZXRyaWV2ZSBqc29uIGFmdGVyIHNjcmlwdCBleGVjdXRpb25cblx0XHRzLmNvbnZlcnRlcnNbIFwic2NyaXB0IGpzb25cIiBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoICFyZXNwb25zZUNvbnRhaW5lciApIHtcblx0XHRcdFx0alF1ZXJ5LmVycm9yKCBjYWxsYmFja05hbWUgKyBcIiB3YXMgbm90IGNhbGxlZFwiICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2VDb250YWluZXJbIDAgXTtcblx0XHR9O1xuXG5cdFx0Ly8gRm9yY2UganNvbiBkYXRhVHlwZVxuXHRcdHMuZGF0YVR5cGVzWyAwIF0gPSBcImpzb25cIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tcblx0XHRvdmVyd3JpdHRlbiA9IHdpbmRvd1sgY2FsbGJhY2tOYW1lIF07XG5cdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBhcmd1bWVudHM7XG5cdFx0fTtcblxuXHRcdC8vIENsZWFuLXVwIGZ1bmN0aW9uIChmaXJlcyBhZnRlciBjb252ZXJ0ZXJzKVxuXHRcdGpxWEhSLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cblx0XHRcdC8vIElmIHByZXZpb3VzIHZhbHVlIGRpZG4ndCBleGlzdCAtIHJlbW92ZSBpdFxuXHRcdFx0aWYgKCBvdmVyd3JpdHRlbiA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRqUXVlcnkoIHdpbmRvdyApLnJlbW92ZVByb3AoIGNhbGxiYWNrTmFtZSApO1xuXG5cdFx0XHQvLyBPdGhlcndpc2UgcmVzdG9yZSBwcmVleGlzdGluZyB2YWx1ZVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IG92ZXJ3cml0dGVuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTYXZlIGJhY2sgYXMgZnJlZVxuXHRcdFx0aWYgKCBzWyBjYWxsYmFja05hbWUgXSApIHtcblxuXHRcdFx0XHQvLyBNYWtlIHN1cmUgdGhhdCByZS11c2luZyB0aGUgb3B0aW9ucyBkb2Vzbid0IHNjcmV3IHRoaW5ncyBhcm91bmRcblx0XHRcdFx0cy5qc29ucENhbGxiYWNrID0gb3JpZ2luYWxTZXR0aW5ncy5qc29ucENhbGxiYWNrO1xuXG5cdFx0XHRcdC8vIFNhdmUgdGhlIGNhbGxiYWNrIG5hbWUgZm9yIGZ1dHVyZSB1c2Vcblx0XHRcdFx0b2xkQ2FsbGJhY2tzLnB1c2goIGNhbGxiYWNrTmFtZSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYWxsIGlmIGl0IHdhcyBhIGZ1bmN0aW9uIGFuZCB3ZSBoYXZlIGEgcmVzcG9uc2Vcblx0XHRcdGlmICggcmVzcG9uc2VDb250YWluZXIgJiYgaXNGdW5jdGlvbiggb3ZlcndyaXR0ZW4gKSApIHtcblx0XHRcdFx0b3ZlcndyaXR0ZW4oIHJlc3BvbnNlQ29udGFpbmVyWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcblx0XHR9ICk7XG5cblx0XHQvLyBEZWxlZ2F0ZSB0byBzY3JpcHRcblx0XHRyZXR1cm4gXCJzY3JpcHRcIjtcblx0fVxufSApO1xuXG5cblxuXG4vLyBTdXBwb3J0OiBTYWZhcmkgOCBvbmx5XG4vLyBJbiBTYWZhcmkgOCBkb2N1bWVudHMgY3JlYXRlZCB2aWEgZG9jdW1lbnQuaW1wbGVtZW50YXRpb24uY3JlYXRlSFRNTERvY3VtZW50XG4vLyBjb2xsYXBzZSBzaWJsaW5nIGZvcm1zOiB0aGUgc2Vjb25kIG9uZSBiZWNvbWVzIGEgY2hpbGQgb2YgdGhlIGZpcnN0IG9uZS5cbi8vIEJlY2F1c2Ugb2YgdGhhdCwgdGhpcyBzZWN1cml0eSBtZWFzdXJlIGhhcyB0byBiZSBkaXNhYmxlZCBpbiBTYWZhcmkgOC5cbi8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzczMzdcbnN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ID0gKCBmdW5jdGlvbigpIHtcblx0dmFyIGJvZHkgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoIFwiXCIgKS5ib2R5O1xuXHRib2R5LmlubmVySFRNTCA9IFwiPGZvcm0+PC9mb3JtPjxmb3JtPjwvZm9ybT5cIjtcblx0cmV0dXJuIGJvZHkuY2hpbGROb2Rlcy5sZW5ndGggPT09IDI7XG59ICkoKTtcblxuXG4vLyBBcmd1bWVudCBcImRhdGFcIiBzaG91bGQgYmUgc3RyaW5nIG9mIGh0bWxcbi8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCxcbi8vIGRlZmF1bHRzIHRvIGRvY3VtZW50XG4vLyBrZWVwU2NyaXB0cyAob3B0aW9uYWwpOiBJZiB0cnVlLCB3aWxsIGluY2x1ZGUgc2NyaXB0cyBwYXNzZWQgaW4gdGhlIGh0bWwgc3RyaW5nXG5qUXVlcnkucGFyc2VIVE1MID0gZnVuY3Rpb24oIGRhdGEsIGNvbnRleHQsIGtlZXBTY3JpcHRzICkge1xuXHRpZiAoIHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBbXTtcblx0fVxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRrZWVwU2NyaXB0cyA9IGNvbnRleHQ7XG5cdFx0Y29udGV4dCA9IGZhbHNlO1xuXHR9XG5cblx0dmFyIGJhc2UsIHBhcnNlZCwgc2NyaXB0cztcblxuXHRpZiAoICFjb250ZXh0ICkge1xuXG5cdFx0Ly8gU3RvcCBzY3JpcHRzIG9yIGlubGluZSBldmVudCBoYW5kbGVycyBmcm9tIGJlaW5nIGV4ZWN1dGVkIGltbWVkaWF0ZWx5XG5cdFx0Ly8gYnkgdXNpbmcgZG9jdW1lbnQuaW1wbGVtZW50YXRpb25cblx0XHRpZiAoIHN1cHBvcnQuY3JlYXRlSFRNTERvY3VtZW50ICkge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50LmltcGxlbWVudGF0aW9uLmNyZWF0ZUhUTUxEb2N1bWVudCggXCJcIiApO1xuXG5cdFx0XHQvLyBTZXQgdGhlIGJhc2UgaHJlZiBmb3IgdGhlIGNyZWF0ZWQgZG9jdW1lbnRcblx0XHRcdC8vIHNvIGFueSBwYXJzZWQgZWxlbWVudHMgd2l0aCBVUkxzXG5cdFx0XHQvLyBhcmUgYmFzZWQgb24gdGhlIGRvY3VtZW50J3MgVVJMIChnaC0yOTY1KVxuXHRcdFx0YmFzZSA9IGNvbnRleHQuY3JlYXRlRWxlbWVudCggXCJiYXNlXCIgKTtcblx0XHRcdGJhc2UuaHJlZiA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWY7XG5cdFx0XHRjb250ZXh0LmhlYWQuYXBwZW5kQ2hpbGQoIGJhc2UgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGV4dCA9IGRvY3VtZW50O1xuXHRcdH1cblx0fVxuXG5cdHBhcnNlZCA9IHJzaW5nbGVUYWcuZXhlYyggZGF0YSApO1xuXHRzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG5cdC8vIFNpbmdsZSB0YWdcblx0aWYgKCBwYXJzZWQgKSB7XG5cdFx0cmV0dXJuIFsgY29udGV4dC5jcmVhdGVFbGVtZW50KCBwYXJzZWRbIDEgXSApIF07XG5cdH1cblxuXHRwYXJzZWQgPSBidWlsZEZyYWdtZW50KCBbIGRhdGEgXSwgY29udGV4dCwgc2NyaXB0cyApO1xuXG5cdGlmICggc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkoIHNjcmlwdHMgKS5yZW1vdmUoKTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBwYXJzZWQuY2hpbGROb2RlcyApO1xufTtcblxuXG4vKipcbiAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAqL1xualF1ZXJ5LmZuLmxvYWQgPSBmdW5jdGlvbiggdXJsLCBwYXJhbXMsIGNhbGxiYWNrICkge1xuXHR2YXIgc2VsZWN0b3IsIHR5cGUsIHJlc3BvbnNlLFxuXHRcdHNlbGYgPSB0aGlzLFxuXHRcdG9mZiA9IHVybC5pbmRleE9mKCBcIiBcIiApO1xuXG5cdGlmICggb2ZmID4gLTEgKSB7XG5cdFx0c2VsZWN0b3IgPSBzdHJpcEFuZENvbGxhcHNlKCB1cmwuc2xpY2UoIG9mZiApICk7XG5cdFx0dXJsID0gdXJsLnNsaWNlKCAwLCBvZmYgKTtcblx0fVxuXG5cdC8vIElmIGl0J3MgYSBmdW5jdGlvblxuXHRpZiAoIGlzRnVuY3Rpb24oIHBhcmFtcyApICkge1xuXG5cdFx0Ly8gV2UgYXNzdW1lIHRoYXQgaXQncyB0aGUgY2FsbGJhY2tcblx0XHRjYWxsYmFjayA9IHBhcmFtcztcblx0XHRwYXJhbXMgPSB1bmRlZmluZWQ7XG5cblx0Ly8gT3RoZXJ3aXNlLCBidWlsZCBhIHBhcmFtIHN0cmluZ1xuXHR9IGVsc2UgaWYgKCBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHR0eXBlID0gXCJQT1NUXCI7XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuXHRpZiAoIHNlbGYubGVuZ3RoID4gMCApIHtcblx0XHRqUXVlcnkuYWpheCgge1xuXHRcdFx0dXJsOiB1cmwsXG5cblx0XHRcdC8vIElmIFwidHlwZVwiIHZhcmlhYmxlIGlzIHVuZGVmaW5lZCwgdGhlbiBcIkdFVFwiIG1ldGhvZCB3aWxsIGJlIHVzZWQuXG5cdFx0XHQvLyBNYWtlIHZhbHVlIG9mIHRoaXMgZmllbGQgZXhwbGljaXQgc2luY2Vcblx0XHRcdC8vIHVzZXIgY2FuIG92ZXJyaWRlIGl0IHRocm91Z2ggYWpheFNldHVwIG1ldGhvZFxuXHRcdFx0dHlwZTogdHlwZSB8fCBcIkdFVFwiLFxuXHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0ZGF0YTogcGFyYW1zXG5cdFx0fSApLmRvbmUoIGZ1bmN0aW9uKCByZXNwb25zZVRleHQgKSB7XG5cblx0XHRcdC8vIFNhdmUgcmVzcG9uc2UgZm9yIHVzZSBpbiBjb21wbGV0ZSBjYWxsYmFja1xuXHRcdFx0cmVzcG9uc2UgPSBhcmd1bWVudHM7XG5cblx0XHRcdHNlbGYuaHRtbCggc2VsZWN0b3IgP1xuXG5cdFx0XHRcdC8vIElmIGEgc2VsZWN0b3Igd2FzIHNwZWNpZmllZCwgbG9jYXRlIHRoZSByaWdodCBlbGVtZW50cyBpbiBhIGR1bW15IGRpdlxuXHRcdFx0XHQvLyBFeGNsdWRlIHNjcmlwdHMgdG8gYXZvaWQgSUUgJ1Blcm1pc3Npb24gRGVuaWVkJyBlcnJvcnNcblx0XHRcdFx0alF1ZXJ5KCBcIjxkaXY+XCIgKS5hcHBlbmQoIGpRdWVyeS5wYXJzZUhUTUwoIHJlc3BvbnNlVGV4dCApICkuZmluZCggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcblx0XHRcdFx0cmVzcG9uc2VUZXh0ICk7XG5cblx0XHQvLyBJZiB0aGUgcmVxdWVzdCBzdWNjZWVkcywgdGhpcyBmdW5jdGlvbiBnZXRzIFwiZGF0YVwiLCBcInN0YXR1c1wiLCBcImpxWEhSXCJcblx0XHQvLyBidXQgdGhleSBhcmUgaWdub3JlZCBiZWNhdXNlIHJlc3BvbnNlIHdhcyBzZXQgYWJvdmUuXG5cdFx0Ly8gSWYgaXQgZmFpbHMsIHRoaXMgZnVuY3Rpb24gZ2V0cyBcImpxWEhSXCIsIFwic3RhdHVzXCIsIFwiZXJyb3JcIlxuXHRcdH0gKS5hbHdheXMoIGNhbGxiYWNrICYmIGZ1bmN0aW9uKCBqcVhIUiwgc3RhdHVzICkge1xuXHRcdFx0c2VsZi5lYWNoKCBmdW5jdGlvbigpIHtcblx0XHRcdFx0Y2FsbGJhY2suYXBwbHkoIHRoaXMsIHJlc3BvbnNlIHx8IFsganFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSIF0gKTtcblx0XHRcdH0gKTtcblx0XHR9ICk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cblxuXG5cbmpRdWVyeS5leHByLnBzZXVkb3MuYW5pbWF0ZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuIGpRdWVyeS5ncmVwKCBqUXVlcnkudGltZXJzLCBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW0gPT09IGZuLmVsZW07XG5cdH0gKS5sZW5ndGg7XG59O1xuXG5cblxuXG5qUXVlcnkub2Zmc2V0ID0ge1xuXHRzZXRPZmZzZXQ6IGZ1bmN0aW9uKCBlbGVtLCBvcHRpb25zLCBpICkge1xuXHRcdHZhciBjdXJQb3NpdGlvbiwgY3VyTGVmdCwgY3VyQ1NTVG9wLCBjdXJUb3AsIGN1ck9mZnNldCwgY3VyQ1NTTGVmdCwgY2FsY3VsYXRlUG9zaXRpb24sXG5cdFx0XHRwb3NpdGlvbiA9IGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApLFxuXHRcdFx0Y3VyRWxlbSA9IGpRdWVyeSggZWxlbSApLFxuXHRcdFx0cHJvcHMgPSB7fTtcblxuXHRcdC8vIFNldCBwb3NpdGlvbiBmaXJzdCwgaW4tY2FzZSB0b3AvbGVmdCBhcmUgc2V0IGV2ZW4gb24gc3RhdGljIGVsZW1cblx0XHRpZiAoIHBvc2l0aW9uID09PSBcInN0YXRpY1wiICkge1xuXHRcdFx0ZWxlbS5zdHlsZS5wb3NpdGlvbiA9IFwicmVsYXRpdmVcIjtcblx0XHR9XG5cblx0XHRjdXJPZmZzZXQgPSBjdXJFbGVtLm9mZnNldCgpO1xuXHRcdGN1ckNTU1RvcCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwidG9wXCIgKTtcblx0XHRjdXJDU1NMZWZ0ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJsZWZ0XCIgKTtcblx0XHRjYWxjdWxhdGVQb3NpdGlvbiA9ICggcG9zaXRpb24gPT09IFwiYWJzb2x1dGVcIiB8fCBwb3NpdGlvbiA9PT0gXCJmaXhlZFwiICkgJiZcblx0XHRcdCggY3VyQ1NTVG9wICsgY3VyQ1NTTGVmdCApLmluZGV4T2YoIFwiYXV0b1wiICkgPiAtMTtcblxuXHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgcG9zaXRpb24gaWYgZWl0aGVyXG5cdFx0Ly8gdG9wIG9yIGxlZnQgaXMgYXV0byBhbmQgcG9zaXRpb24gaXMgZWl0aGVyIGFic29sdXRlIG9yIGZpeGVkXG5cdFx0aWYgKCBjYWxjdWxhdGVQb3NpdGlvbiApIHtcblx0XHRcdGN1clBvc2l0aW9uID0gY3VyRWxlbS5wb3NpdGlvbigpO1xuXHRcdFx0Y3VyVG9wID0gY3VyUG9zaXRpb24udG9wO1xuXHRcdFx0Y3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyVG9wID0gcGFyc2VGbG9hdCggY3VyQ1NTVG9wICkgfHwgMDtcblx0XHRcdGN1ckxlZnQgPSBwYXJzZUZsb2F0KCBjdXJDU1NMZWZ0ICkgfHwgMDtcblx0XHR9XG5cblx0XHRpZiAoIGlzRnVuY3Rpb24oIG9wdGlvbnMgKSApIHtcblxuXHRcdFx0Ly8gVXNlIGpRdWVyeS5leHRlbmQgaGVyZSB0byBhbGxvdyBtb2RpZmljYXRpb24gb2YgY29vcmRpbmF0ZXMgYXJndW1lbnQgKGdoLTE4NDgpXG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucy5jYWxsKCBlbGVtLCBpLCBqUXVlcnkuZXh0ZW5kKCB7fSwgY3VyT2Zmc2V0ICkgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy50b3AgPSAoIG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCApICsgY3VyVG9wO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMubGVmdCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMubGVmdCA9ICggb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKSArIGN1ckxlZnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBcInVzaW5nXCIgaW4gb3B0aW9ucyApIHtcblx0XHRcdG9wdGlvbnMudXNpbmcuY2FsbCggZWxlbSwgcHJvcHMgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJFbGVtLmNzcyggcHJvcHMgKTtcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoIHtcblxuXHQvLyBvZmZzZXQoKSByZWxhdGVzIGFuIGVsZW1lbnQncyBib3JkZXIgYm94IHRvIHRoZSBkb2N1bWVudCBvcmlnaW5cblx0b2Zmc2V0OiBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHRcdC8vIFByZXNlcnZlIGNoYWluaW5nIGZvciBzZXR0ZXJcblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gb3B0aW9ucyA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0dGhpcyA6XG5cdFx0XHRcdHRoaXMuZWFjaCggZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQoIHRoaXMsIG9wdGlvbnMsIGkgKTtcblx0XHRcdFx0fSApO1xuXHRcdH1cblxuXHRcdHZhciByZWN0LCB3aW4sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdO1xuXG5cdFx0aWYgKCAhZWxlbSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gemVyb3MgZm9yIGRpc2Nvbm5lY3RlZCBhbmQgaGlkZGVuIChkaXNwbGF5OiBub25lKSBlbGVtZW50cyAoZ2gtMjMxMClcblx0XHQvLyBTdXBwb3J0OiBJRSA8PTExIG9ubHlcblx0XHQvLyBSdW5uaW5nIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBvbiBhXG5cdFx0Ly8gZGlzY29ubmVjdGVkIG5vZGUgaW4gSUUgdGhyb3dzIGFuIGVycm9yXG5cdFx0aWYgKCAhZWxlbS5nZXRDbGllbnRSZWN0cygpLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiB7IHRvcDogMCwgbGVmdDogMCB9O1xuXHRcdH1cblxuXHRcdC8vIEdldCBkb2N1bWVudC1yZWxhdGl2ZSBwb3NpdGlvbiBieSBhZGRpbmcgdmlld3BvcnQgc2Nyb2xsIHRvIHZpZXdwb3J0LXJlbGF0aXZlIGdCQ1Jcblx0XHRyZWN0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblx0XHR3aW4gPSBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXc7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogcmVjdC50b3AgKyB3aW4ucGFnZVlPZmZzZXQsXG5cdFx0XHRsZWZ0OiByZWN0LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXRcblx0XHR9O1xuXHR9LFxuXG5cdC8vIHBvc2l0aW9uKCkgcmVsYXRlcyBhbiBlbGVtZW50J3MgbWFyZ2luIGJveCB0byBpdHMgb2Zmc2V0IHBhcmVudCdzIHBhZGRpbmcgYm94XG5cdC8vIFRoaXMgY29ycmVzcG9uZHMgdG8gdGhlIGJlaGF2aW9yIG9mIENTUyBhYnNvbHV0ZSBwb3NpdGlvbmluZ1xuXHRwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhdGhpc1sgMCBdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBvZmZzZXRQYXJlbnQsIG9mZnNldCwgZG9jLFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cblx0XHQvLyBwb3NpdGlvbjpmaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gdGhlIHZpZXdwb3J0LCB3aGljaCBpdHNlbGYgYWx3YXlzIGhhcyB6ZXJvIG9mZnNldFxuXHRcdGlmICggalF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICkgPT09IFwiZml4ZWRcIiApIHtcblxuXHRcdFx0Ly8gQXNzdW1lIHBvc2l0aW9uOmZpeGVkIGltcGxpZXMgYXZhaWxhYmlsaXR5IG9mIGdldEJvdW5kaW5nQ2xpZW50UmVjdFxuXHRcdFx0b2Zmc2V0ID0gZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xuXG5cdFx0XHQvLyBBY2NvdW50IGZvciB0aGUgKnJlYWwqIG9mZnNldCBwYXJlbnQsIHdoaWNoIGNhbiBiZSB0aGUgZG9jdW1lbnQgb3IgaXRzIHJvb3QgZWxlbWVudFxuXHRcdFx0Ly8gd2hlbiBhIHN0YXRpY2FsbHkgcG9zaXRpb25lZCBlbGVtZW50IGlzIGlkZW50aWZpZWRcblx0XHRcdGRvYyA9IGVsZW0ub3duZXJEb2N1bWVudDtcblx0XHRcdG9mZnNldFBhcmVudCA9IGVsZW0ub2Zmc2V0UGFyZW50IHx8IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJlxuXHRcdFx0XHQoIG9mZnNldFBhcmVudCA9PT0gZG9jLmJvZHkgfHwgb2Zmc2V0UGFyZW50ID09PSBkb2MuZG9jdW1lbnRFbGVtZW50ICkgJiZcblx0XHRcdFx0alF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIgKSA9PT0gXCJzdGF0aWNcIiApIHtcblxuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQucGFyZW50Tm9kZTtcblx0XHRcdH1cblx0XHRcdGlmICggb2Zmc2V0UGFyZW50ICYmIG9mZnNldFBhcmVudCAhPT0gZWxlbSAmJiBvZmZzZXRQYXJlbnQubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gSW5jb3Jwb3JhdGUgYm9yZGVycyBpbnRvIGl0cyBvZmZzZXQsIHNpbmNlIHRoZXkgYXJlIG91dHNpZGUgaXRzIGNvbnRlbnQgb3JpZ2luXG5cdFx0XHRcdHBhcmVudE9mZnNldCA9IGpRdWVyeSggb2Zmc2V0UGFyZW50ICkub2Zmc2V0KCk7XG5cdFx0XHRcdHBhcmVudE9mZnNldC50b3AgKz0galF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcImJvcmRlclRvcFdpZHRoXCIsIHRydWUgKTtcblx0XHRcdFx0cGFyZW50T2Zmc2V0LmxlZnQgKz0galF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcImJvcmRlckxlZnRXaWR0aFwiLCB0cnVlICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU3VidHJhY3QgcGFyZW50IG9mZnNldHMgYW5kIGVsZW1lbnQgbWFyZ2luc1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IG9mZnNldC50b3AgLSBwYXJlbnRPZmZzZXQudG9wIC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5Ub3BcIiwgdHJ1ZSApLFxuXHRcdFx0bGVmdDogb2Zmc2V0LmxlZnQgLSBwYXJlbnRPZmZzZXQubGVmdCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luTGVmdFwiLCB0cnVlIClcblx0XHR9O1xuXHR9LFxuXG5cdC8vIFRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuIGRvY3VtZW50RWxlbWVudCBpbiB0aGUgZm9sbG93aW5nIGNhc2VzOlxuXHQvLyAxKSBGb3IgdGhlIGVsZW1lbnQgaW5zaWRlIHRoZSBpZnJhbWUgd2l0aG91dCBvZmZzZXRQYXJlbnQsIHRoaXMgbWV0aG9kIHdpbGwgcmV0dXJuXG5cdC8vICAgIGRvY3VtZW50RWxlbWVudCBvZiB0aGUgcGFyZW50IHdpbmRvd1xuXHQvLyAyKSBGb3IgdGhlIGhpZGRlbiBvciBkZXRhY2hlZCBlbGVtZW50XG5cdC8vIDMpIEZvciBib2R5IG9yIGh0bWwgZWxlbWVudCwgaS5lLiBpbiBjYXNlIG9mIHRoZSBodG1sIG5vZGUgLSBpdCB3aWxsIHJldHVybiBpdHNlbGZcblx0Ly9cblx0Ly8gYnV0IHRob3NlIGV4Y2VwdGlvbnMgd2VyZSBuZXZlciBwcmVzZW50ZWQgYXMgYSByZWFsIGxpZmUgdXNlLWNhc2VzXG5cdC8vIGFuZCBtaWdodCBiZSBjb25zaWRlcmVkIGFzIG1vcmUgcHJlZmVyYWJsZSByZXN1bHRzLlxuXHQvL1xuXHQvLyBUaGlzIGxvZ2ljLCBob3dldmVyLCBpcyBub3QgZ3VhcmFudGVlZCBhbmQgY2FuIGNoYW5nZSBhdCBhbnkgcG9pbnQgaW4gdGhlIGZ1dHVyZVxuXHRvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcCggZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQ7XG5cblx0XHRcdHdoaWxlICggb2Zmc2V0UGFyZW50ICYmIGpRdWVyeS5jc3MoIG9mZnNldFBhcmVudCwgXCJwb3NpdGlvblwiICkgPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jdW1lbnRFbGVtZW50O1xuXHRcdH0gKTtcblx0fVxufSApO1xuXG4vLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgcHJvcCApIHtcblx0dmFyIHRvcCA9IFwicGFnZVlPZmZzZXRcIiA9PT0gcHJvcDtcblxuXHRqUXVlcnkuZm5bIG1ldGhvZCBdID0gZnVuY3Rpb24oIHZhbCApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbWV0aG9kLCB2YWwgKSB7XG5cblx0XHRcdC8vIENvYWxlc2NlIGRvY3VtZW50cyBhbmQgd2luZG93c1xuXHRcdFx0dmFyIHdpbjtcblx0XHRcdGlmICggaXNXaW5kb3coIGVsZW0gKSApIHtcblx0XHRcdFx0d2luID0gZWxlbTtcblx0XHRcdH0gZWxzZSBpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHdpbiA9IGVsZW0uZGVmYXVsdFZpZXc7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiB3aW4gPyB3aW5bIHByb3AgXSA6IGVsZW1bIG1ldGhvZCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHdpbiApIHtcblx0XHRcdFx0d2luLnNjcm9sbFRvKFxuXHRcdFx0XHRcdCF0b3AgPyB2YWwgOiB3aW4ucGFnZVhPZmZzZXQsXG5cdFx0XHRcdFx0dG9wID8gdmFsIDogd2luLnBhZ2VZT2Zmc2V0XG5cdFx0XHRcdCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1bIG1ldGhvZCBdID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoICk7XG5cdH07XG59ICk7XG5cbi8vIFN1cHBvcnQ6IFNhZmFyaSA8PTcgLSA5LjEsIENocm9tZSA8PTM3IC0gNDlcbi8vIEFkZCB0aGUgdG9wL2xlZnQgY3NzSG9va3MgdXNpbmcgalF1ZXJ5LmZuLnBvc2l0aW9uXG4vLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcbi8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9idWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9NTg5MzQ3XG4vLyBnZXRDb21wdXRlZFN0eWxlIHJldHVybnMgcGVyY2VudCB3aGVuIHNwZWNpZmllZCBmb3IgdG9wL2xlZnQvYm90dG9tL3JpZ2h0O1xuLy8gcmF0aGVyIHRoYW4gbWFrZSB0aGUgY3NzIG1vZHVsZSBkZXBlbmQgb24gdGhlIG9mZnNldCBtb2R1bGUsIGp1c3QgY2hlY2sgZm9yIGl0IGhlcmVcbmpRdWVyeS5lYWNoKCBbIFwidG9wXCIsIFwibGVmdFwiIF0sIGZ1bmN0aW9uKCBfaSwgcHJvcCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcm9wIF0gPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucGl4ZWxQb3NpdGlvbixcblx0XHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0XHRjb21wdXRlZCA9IGN1ckNTUyggZWxlbSwgcHJvcCApO1xuXG5cdFx0XHRcdC8vIElmIGN1ckNTUyByZXR1cm5zIHBlcmNlbnRhZ2UsIGZhbGxiYWNrIHRvIG9mZnNldFxuXHRcdFx0XHRyZXR1cm4gcm51bW5vbnB4LnRlc3QoIGNvbXB1dGVkICkgP1xuXHRcdFx0XHRcdGpRdWVyeSggZWxlbSApLnBvc2l0aW9uKClbIHByb3AgXSArIFwicHhcIiA6XG5cdFx0XHRcdFx0Y29tcHV0ZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHQpO1xufSApO1xuXG5cbi8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xualF1ZXJ5LmVhY2goIHsgSGVpZ2h0OiBcImhlaWdodFwiLCBXaWR0aDogXCJ3aWR0aFwiIH0sIGZ1bmN0aW9uKCBuYW1lLCB0eXBlICkge1xuXHRqUXVlcnkuZWFjaCgge1xuXHRcdHBhZGRpbmc6IFwiaW5uZXJcIiArIG5hbWUsXG5cdFx0Y29udGVudDogdHlwZSxcblx0XHRcIlwiOiBcIm91dGVyXCIgKyBuYW1lXG5cdH0sIGZ1bmN0aW9uKCBkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lICkge1xuXG5cdFx0Ly8gTWFyZ2luIGlzIG9ubHkgZm9yIG91dGVySGVpZ2h0LCBvdXRlcldpZHRoXG5cdFx0alF1ZXJ5LmZuWyBmdW5jTmFtZSBdID0gZnVuY3Rpb24oIG1hcmdpbiwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgY2hhaW5hYmxlID0gYXJndW1lbnRzLmxlbmd0aCAmJiAoIGRlZmF1bHRFeHRyYSB8fCB0eXBlb2YgbWFyZ2luICE9PSBcImJvb2xlYW5cIiApLFxuXHRcdFx0XHRleHRyYSA9IGRlZmF1bHRFeHRyYSB8fCAoIG1hcmdpbiA9PT0gdHJ1ZSB8fCB2YWx1ZSA9PT0gdHJ1ZSA/IFwibWFyZ2luXCIgOiBcImJvcmRlclwiICk7XG5cblx0XHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIGRvYztcblxuXHRcdFx0XHRpZiAoIGlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyAkKCB3aW5kb3cgKS5vdXRlcldpZHRoL0hlaWdodCByZXR1cm4gdy9oIGluY2x1ZGluZyBzY3JvbGxiYXJzIChnaC0xNzI5KVxuXHRcdFx0XHRcdHJldHVybiBmdW5jTmFtZS5pbmRleE9mKCBcIm91dGVyXCIgKSA9PT0gMCA/XG5cdFx0XHRcdFx0XHRlbGVtWyBcImlubmVyXCIgKyBuYW1lIF0gOlxuXHRcdFx0XHRcdFx0ZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbIFwiY2xpZW50XCIgKyBuYW1lIF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBHZXQgZG9jdW1lbnQgd2lkdGggb3IgaGVpZ2h0XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0XHRcdC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcblx0XHRcdFx0XHQvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3Rcblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5tYXgoXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwic2Nyb2xsXCIgKyBuYW1lIF0sIGRvY1sgXCJzY3JvbGxcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJvZmZzZXRcIiArIG5hbWUgXSwgZG9jWyBcIm9mZnNldFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZG9jWyBcImNsaWVudFwiICsgbmFtZSBdXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblxuXHRcdFx0XHRcdC8vIEdldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnQsIHJlcXVlc3RpbmcgYnV0IG5vdCBmb3JjaW5nIHBhcnNlRmxvYXRcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCB0eXBlLCBleHRyYSApIDpcblxuXHRcdFx0XHRcdC8vIFNldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnRcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHR5cGUsIHZhbHVlLCBleHRyYSApO1xuXHRcdFx0fSwgdHlwZSwgY2hhaW5hYmxlID8gbWFyZ2luIDogdW5kZWZpbmVkLCBjaGFpbmFibGUgKTtcblx0XHR9O1xuXHR9ICk7XG59ICk7XG5cblxualF1ZXJ5LmVhY2goIFtcblx0XCJhamF4U3RhcnRcIixcblx0XCJhamF4U3RvcFwiLFxuXHRcImFqYXhDb21wbGV0ZVwiLFxuXHRcImFqYXhFcnJvclwiLFxuXHRcImFqYXhTdWNjZXNzXCIsXG5cdFwiYWpheFNlbmRcIlxuXSwgZnVuY3Rpb24oIF9pLCB0eXBlICkge1xuXHRqUXVlcnkuZm5bIHR5cGUgXSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZSwgZm4gKTtcblx0fTtcbn0gKTtcblxuXG5cblxualF1ZXJ5LmZuLmV4dGVuZCgge1xuXG5cdGJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBudWxsLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub2ZmKCB0eXBlcywgbnVsbCwgZm4gKTtcblx0fSxcblxuXHRkZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5kZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZm4gKSB7XG5cblx0XHQvLyAoIG5hbWVzcGFjZSApIG9yICggc2VsZWN0b3IsIHR5cGVzIFssIGZuXSApXG5cdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPT09IDEgP1xuXHRcdFx0dGhpcy5vZmYoIHNlbGVjdG9yLCBcIioqXCIgKSA6XG5cdFx0XHR0aGlzLm9mZiggdHlwZXMsIHNlbGVjdG9yIHx8IFwiKipcIiwgZm4gKTtcblx0fSxcblxuXHRob3ZlcjogZnVuY3Rpb24oIGZuT3ZlciwgZm5PdXQgKSB7XG5cdFx0cmV0dXJuIHRoaXNcblx0XHRcdC5vbiggXCJtb3VzZWVudGVyXCIsIGZuT3ZlciApXG5cdFx0XHQub24oIFwibW91c2VsZWF2ZVwiLCBmbk91dCB8fCBmbk92ZXIgKTtcblx0fVxufSApO1xuXG5qUXVlcnkuZWFjaChcblx0KCBcImJsdXIgZm9jdXMgZm9jdXNpbiBmb2N1c291dCByZXNpemUgc2Nyb2xsIGNsaWNrIGRibGNsaWNrIFwiICtcblx0XCJtb3VzZWRvd24gbW91c2V1cCBtb3VzZW1vdmUgbW91c2VvdmVyIG1vdXNlb3V0IG1vdXNlZW50ZXIgbW91c2VsZWF2ZSBcIiArXG5cdFwiY2hhbmdlIHNlbGVjdCBzdWJtaXQga2V5ZG93biBrZXlwcmVzcyBrZXl1cCBjb250ZXh0bWVudVwiICkuc3BsaXQoIFwiIFwiICksXG5cdGZ1bmN0aW9uKCBfaSwgbmFtZSApIHtcblxuXHRcdC8vIEhhbmRsZSBldmVudCBiaW5kaW5nXG5cdFx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggZGF0YSwgZm4gKSB7XG5cdFx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgP1xuXHRcdFx0XHR0aGlzLm9uKCBuYW1lLCBudWxsLCBkYXRhLCBmbiApIDpcblx0XHRcdFx0dGhpcy50cmlnZ2VyKCBuYW1lICk7XG5cdFx0fTtcblx0fVxuKTtcblxuXG5cblxuLy8gU3VwcG9ydDogQW5kcm9pZCA8PTQuMCBvbmx5XG4vLyBNYWtlIHN1cmUgd2UgdHJpbSBCT00gYW5kIE5CU1Bcbi8vIFJlcXVpcmUgdGhhdCB0aGUgXCJ3aGl0ZXNwYWNlIHJ1blwiIHN0YXJ0cyBmcm9tIGEgbm9uLXdoaXRlc3BhY2Vcbi8vIHRvIGF2b2lkIE8oTl4yKSBiZWhhdmlvciB3aGVuIHRoZSBlbmdpbmUgd291bGQgdHJ5IG1hdGNoaW5nIFwiXFxzKyRcIiBhdCBlYWNoIHNwYWNlIHBvc2l0aW9uLlxudmFyIHJ0cmltID0gL15bXFxzXFx1RkVGRlxceEEwXSt8KFteXFxzXFx1RkVGRlxceEEwXSlbXFxzXFx1RkVGRlxceEEwXSskL2c7XG5cbi8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuLy8gYXJndW1lbnRzLlxuLy8galF1ZXJ5LnByb3h5IGlzIGRlcHJlY2F0ZWQgdG8gcHJvbW90ZSBzdGFuZGFyZHMgKHNwZWNpZmljYWxseSBGdW5jdGlvbiNiaW5kKVxuLy8gSG93ZXZlciwgaXQgaXMgbm90IHNsYXRlZCBmb3IgcmVtb3ZhbCBhbnkgdGltZSBzb29uXG5qUXVlcnkucHJveHkgPSBmdW5jdGlvbiggZm4sIGNvbnRleHQgKSB7XG5cdHZhciB0bXAsIGFyZ3MsIHByb3h5O1xuXG5cdGlmICggdHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0dG1wID0gZm5bIGNvbnRleHQgXTtcblx0XHRjb250ZXh0ID0gZm47XG5cdFx0Zm4gPSB0bXA7XG5cdH1cblxuXHQvLyBRdWljayBjaGVjayB0byBkZXRlcm1pbmUgaWYgdGFyZ2V0IGlzIGNhbGxhYmxlLCBpbiB0aGUgc3BlY1xuXHQvLyB0aGlzIHRocm93cyBhIFR5cGVFcnJvciwgYnV0IHdlIHdpbGwganVzdCByZXR1cm4gdW5kZWZpbmVkLlxuXHRpZiAoICFpc0Z1bmN0aW9uKCBmbiApICkge1xuXHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdH1cblxuXHQvLyBTaW11bGF0ZWQgYmluZFxuXHRhcmdzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAyICk7XG5cdHByb3h5ID0gZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGZuLmFwcGx5KCBjb250ZXh0IHx8IHRoaXMsIGFyZ3MuY29uY2F0KCBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSApICk7XG5cdH07XG5cblx0Ly8gU2V0IHRoZSBndWlkIG9mIHVuaXF1ZSBoYW5kbGVyIHRvIHRoZSBzYW1lIG9mIG9yaWdpbmFsIGhhbmRsZXIsIHNvIGl0IGNhbiBiZSByZW1vdmVkXG5cdHByb3h5Lmd1aWQgPSBmbi5ndWlkID0gZm4uZ3VpZCB8fCBqUXVlcnkuZ3VpZCsrO1xuXG5cdHJldHVybiBwcm94eTtcbn07XG5cbmpRdWVyeS5ob2xkUmVhZHkgPSBmdW5jdGlvbiggaG9sZCApIHtcblx0aWYgKCBob2xkICkge1xuXHRcdGpRdWVyeS5yZWFkeVdhaXQrKztcblx0fSBlbHNlIHtcblx0XHRqUXVlcnkucmVhZHkoIHRydWUgKTtcblx0fVxufTtcbmpRdWVyeS5pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbmpRdWVyeS5wYXJzZUpTT04gPSBKU09OLnBhcnNlO1xualF1ZXJ5Lm5vZGVOYW1lID0gbm9kZU5hbWU7XG5qUXVlcnkuaXNGdW5jdGlvbiA9IGlzRnVuY3Rpb247XG5qUXVlcnkuaXNXaW5kb3cgPSBpc1dpbmRvdztcbmpRdWVyeS5jYW1lbENhc2UgPSBjYW1lbENhc2U7XG5qUXVlcnkudHlwZSA9IHRvVHlwZTtcblxualF1ZXJ5Lm5vdyA9IERhdGUubm93O1xuXG5qUXVlcnkuaXNOdW1lcmljID0gZnVuY3Rpb24oIG9iaiApIHtcblxuXHQvLyBBcyBvZiBqUXVlcnkgMy4wLCBpc051bWVyaWMgaXMgbGltaXRlZCB0b1xuXHQvLyBzdHJpbmdzIGFuZCBudW1iZXJzIChwcmltaXRpdmVzIG9yIG9iamVjdHMpXG5cdC8vIHRoYXQgY2FuIGJlIGNvZXJjZWQgdG8gZmluaXRlIG51bWJlcnMgKGdoLTI2NjIpXG5cdHZhciB0eXBlID0galF1ZXJ5LnR5cGUoIG9iaiApO1xuXHRyZXR1cm4gKCB0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3RyaW5nXCIgKSAmJlxuXG5cdFx0Ly8gcGFyc2VGbG9hdCBOYU5zIG51bWVyaWMtY2FzdCBmYWxzZSBwb3NpdGl2ZXMgKFwiXCIpXG5cdFx0Ly8gLi4uYnV0IG1pc2ludGVycHJldHMgbGVhZGluZy1udW1iZXIgc3RyaW5ncywgcGFydGljdWxhcmx5IGhleCBsaXRlcmFscyAoXCIweC4uLlwiKVxuXHRcdC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxuXHRcdCFpc05hTiggb2JqIC0gcGFyc2VGbG9hdCggb2JqICkgKTtcbn07XG5cbmpRdWVyeS50cmltID0gZnVuY3Rpb24oIHRleHQgKSB7XG5cdHJldHVybiB0ZXh0ID09IG51bGwgP1xuXHRcdFwiXCIgOlxuXHRcdCggdGV4dCArIFwiXCIgKS5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICk7XG59O1xuXG5cblxuLy8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXG4vLyBmaWxlcyB0aGF0IG1heSB1c2UgZGVmaW5lLCBidXQgbm90IHZpYSBhIHByb3BlciBjb25jYXRlbmF0aW9uIHNjcmlwdCB0aGF0XG4vLyB1bmRlcnN0YW5kcyBhbm9ueW1vdXMgQU1EIG1vZHVsZXMuIEEgbmFtZWQgQU1EIGlzIHNhZmVzdCBhbmQgbW9zdCByb2J1c3Rcbi8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcbi8vIGRlcml2ZWQgZnJvbSBmaWxlIG5hbWVzLCBhbmQgalF1ZXJ5IGlzIG5vcm1hbGx5IGRlbGl2ZXJlZCBpbiBhIGxvd2VyY2FzZVxuLy8gZmlsZSBuYW1lLiBEbyB0aGlzIGFmdGVyIGNyZWF0aW5nIHRoZSBnbG9iYWwgc28gdGhhdCBpZiBhbiBBTUQgbW9kdWxlIHdhbnRzXG4vLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXG5cbi8vIE5vdGUgdGhhdCBmb3IgbWF4aW11bSBwb3J0YWJpbGl0eSwgbGlicmFyaWVzIHRoYXQgYXJlIG5vdCBqUXVlcnkgc2hvdWxkXG4vLyBkZWNsYXJlIHRoZW1zZWx2ZXMgYXMgYW5vbnltb3VzIG1vZHVsZXMsIGFuZCBhdm9pZCBzZXR0aW5nIGEgZ2xvYmFsIGlmIGFuXG4vLyBBTUQgbG9hZGVyIGlzIHByZXNlbnQuIGpRdWVyeSBpcyBhIHNwZWNpYWwgY2FzZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2pyYnVya2UvcmVxdWlyZWpzL3dpa2kvVXBkYXRpbmctZXhpc3RpbmctbGlicmFyaWVzI3dpa2ktYW5vblxuXG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXHRkZWZpbmUoIFwianF1ZXJ5XCIsIFtdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5O1xuXHR9ICk7XG59XG5cblxuXG5cbnZhclxuXG5cdC8vIE1hcCBvdmVyIGpRdWVyeSBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuXHRfalF1ZXJ5ID0gd2luZG93LmpRdWVyeSxcblxuXHQvLyBNYXAgb3ZlciB0aGUgJCBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuXHRfJCA9IHdpbmRvdy4kO1xuXG5qUXVlcnkubm9Db25mbGljdCA9IGZ1bmN0aW9uKCBkZWVwICkge1xuXHRpZiAoIHdpbmRvdy4kID09PSBqUXVlcnkgKSB7XG5cdFx0d2luZG93LiQgPSBfJDtcblx0fVxuXG5cdGlmICggZGVlcCAmJiB3aW5kb3cualF1ZXJ5ID09PSBqUXVlcnkgKSB7XG5cdFx0d2luZG93LmpRdWVyeSA9IF9qUXVlcnk7XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5O1xufTtcblxuLy8gRXhwb3NlIGpRdWVyeSBhbmQgJCBpZGVudGlmaWVycywgZXZlbiBpbiBBTURcbi8vICh0cmFjLTcxMDIjY29tbWVudDoxMCwgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC81NTcpXG4vLyBhbmQgQ29tbW9uSlMgZm9yIGJyb3dzZXIgZW11bGF0b3JzICh0cmFjLTEzNTY2KVxuaWYgKCB0eXBlb2Ygbm9HbG9iYWwgPT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbn1cblxuXG5cblxucmV0dXJuIGpRdWVyeTtcbn0gKTtcbiJdLCJuYW1lcyI6WyJnbG9iYWwiLCJmYWN0b3J5IiwibW9kdWxlIiwiZXhwb3J0cyIsImRvY3VtZW50IiwidyIsIkVycm9yIiwid2luZG93IiwidGhpcyIsIm5vR2xvYmFsIiwiYXJyIiwiZ2V0UHJvdG8iLCJPYmplY3QiLCJnZXRQcm90b3R5cGVPZiIsInNsaWNlIiwiZmxhdCIsImFycmF5IiwiY2FsbCIsImNvbmNhdCIsImFwcGx5IiwicHVzaCIsImluZGV4T2YiLCJjbGFzczJ0eXBlIiwidG9TdHJpbmciLCJoYXNPd24iLCJoYXNPd25Qcm9wZXJ0eSIsImZuVG9TdHJpbmciLCJPYmplY3RGdW5jdGlvblN0cmluZyIsInN1cHBvcnQiLCJpc0Z1bmN0aW9uIiwib2JqIiwibm9kZVR5cGUiLCJpdGVtIiwiaXNXaW5kb3ciLCJwcmVzZXJ2ZWRTY3JpcHRBdHRyaWJ1dGVzIiwidHlwZSIsInNyYyIsIm5vbmNlIiwibm9Nb2R1bGUiLCJET01FdmFsIiwiY29kZSIsIm5vZGUiLCJkb2MiLCJpIiwidmFsIiwic2NyaXB0IiwiY3JlYXRlRWxlbWVudCIsInRleHQiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJoZWFkIiwiYXBwZW5kQ2hpbGQiLCJwYXJlbnROb2RlIiwicmVtb3ZlQ2hpbGQiLCJ0b1R5cGUiLCJ2ZXJzaW9uIiwicmh0bWxTdWZmaXgiLCJqUXVlcnkiLCJzZWxlY3RvciIsImNvbnRleHQiLCJmbiIsImluaXQiLCJpc0FycmF5TGlrZSIsImxlbmd0aCIsIm5vZGVOYW1lIiwiZWxlbSIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInByb3RvdHlwZSIsImpxdWVyeSIsImNvbnN0cnVjdG9yIiwidG9BcnJheSIsImdldCIsIm51bSIsInB1c2hTdGFjayIsImVsZW1zIiwicmV0IiwibWVyZ2UiLCJwcmV2T2JqZWN0IiwiZWFjaCIsImNhbGxiYWNrIiwibWFwIiwiYXJndW1lbnRzIiwiZmlyc3QiLCJlcSIsImxhc3QiLCJldmVuIiwiZ3JlcCIsIl9lbGVtIiwib2RkIiwibGVuIiwiaiIsImVuZCIsInNvcnQiLCJzcGxpY2UiLCJleHRlbmQiLCJvcHRpb25zIiwiY29weSIsImNvcHlJc0FycmF5IiwiY2xvbmUiLCJ0YXJnZXQiLCJkZWVwIiwiaXNQbGFpbk9iamVjdCIsIkFycmF5IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm1zZyIsIm5vb3AiLCJwcm90byIsIkN0b3IiLCJpc0VtcHR5T2JqZWN0IiwiZ2xvYmFsRXZhbCIsInRleHRDb250ZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwibm9kZVZhbHVlIiwibWFrZUFycmF5IiwicmVzdWx0cyIsImluQXJyYXkiLCJpc1hNTERvYyIsIm5hbWVzcGFjZSIsIm5hbWVzcGFjZVVSSSIsImRvY0VsZW0iLCJvd25lckRvY3VtZW50IiwidGVzdCIsInNlY29uZCIsImludmVydCIsIm1hdGNoZXMiLCJjYWxsYmFja0V4cGVjdCIsImFyZyIsInZhbHVlIiwiZ3VpZCIsIlN5bWJvbCIsIml0ZXJhdG9yIiwic3BsaXQiLCJfaSIsInBvcCIsIndoaXRlc3BhY2UiLCJydHJpbUNTUyIsIlJlZ0V4cCIsImNvbnRhaW5zIiwiYSIsImIiLCJidXAiLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsInJjc3Nlc2NhcGUiLCJmY3NzZXNjYXBlIiwiY2giLCJhc0NvZGVQb2ludCIsImNoYXJDb2RlQXQiLCJlc2NhcGVTZWxlY3RvciIsInNlbCIsInByZWZlcnJlZERvYyIsInB1c2hOYXRpdmUiLCJFeHByIiwib3V0ZXJtb3N0Q29udGV4dCIsInNvcnRJbnB1dCIsImhhc0R1cGxpY2F0ZSIsImRvY3VtZW50SXNIVE1MIiwicmJ1Z2d5UVNBIiwiZGlycnVucyIsImRvbmUiLCJjbGFzc0NhY2hlIiwiY3JlYXRlQ2FjaGUiLCJ0b2tlbkNhY2hlIiwiY29tcGlsZXJDYWNoZSIsIm5vbm5hdGl2ZVNlbGVjdG9yQ2FjaGUiLCJzb3J0T3JkZXIiLCJib29sZWFucyIsImlkZW50aWZpZXIiLCJhdHRyaWJ1dGVzIiwicHNldWRvcyIsInJ3aGl0ZXNwYWNlIiwicmNvbW1hIiwicmxlYWRpbmdDb21iaW5hdG9yIiwicmRlc2NlbmQiLCJycHNldWRvIiwicmlkZW50aWZpZXIiLCJtYXRjaEV4cHIiLCJJRCIsIkNMQVNTIiwiVEFHIiwiQVRUUiIsIlBTRVVETyIsIkNISUxEIiwiYm9vbCIsIm5lZWRzQ29udGV4dCIsInJpbnB1dHMiLCJyaGVhZGVyIiwicnF1aWNrRXhwciIsInJzaWJsaW5nIiwicnVuZXNjYXBlIiwiZnVuZXNjYXBlIiwiZXNjYXBlIiwibm9uSGV4IiwiaGlnaCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInVubG9hZEhhbmRsZXIiLCJzZXREb2N1bWVudCIsImluRGlzYWJsZWRGaWVsZHNldCIsImFkZENvbWJpbmF0b3IiLCJkaXNhYmxlZCIsImRpciIsIm5leHQiLCJjaGlsZE5vZGVzIiwiZSIsImVscyIsImZpbmQiLCJzZWVkIiwibSIsIm5pZCIsIm1hdGNoIiwiZ3JvdXBzIiwibmV3U2VsZWN0b3IiLCJuZXdDb250ZXh0IiwiZXhlYyIsImdldEVsZW1lbnRCeUlkIiwiaWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImdldEVsZW1lbnRzQnlDbGFzc05hbWUiLCJ0ZXN0Q29udGV4dCIsInNjb3BlIiwidG9rZW5pemUiLCJ0b1NlbGVjdG9yIiwiam9pbiIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJxc2FFcnJvciIsInJlbW92ZUF0dHJpYnV0ZSIsInNlbGVjdCIsImtleXMiLCJjYWNoZSIsImtleSIsImNhY2hlTGVuZ3RoIiwic2hpZnQiLCJtYXJrRnVuY3Rpb24iLCJhc3NlcnQiLCJlbCIsImNyZWF0ZUlucHV0UHNldWRvIiwiY3JlYXRlQnV0dG9uUHNldWRvIiwiY3JlYXRlRGlzYWJsZWRQc2V1ZG8iLCJpc0Rpc2FibGVkIiwiY3JlYXRlUG9zaXRpb25hbFBzZXVkbyIsImFyZ3VtZW50IiwibWF0Y2hJbmRleGVzIiwic3ViV2luZG93Iiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibXNNYXRjaGVzU2VsZWN0b3IiLCJkZWZhdWx0VmlldyIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJkaXNjb25uZWN0ZWRNYXRjaCIsImNzc0hhcyIsInF1ZXJ5U2VsZWN0b3IiLCJmaWx0ZXIiLCJhdHRySWQiLCJnZXRBdHRyaWJ1dGVOb2RlIiwidGFnIiwiY2xhc3NOYW1lIiwiaW5wdXQiLCJpbm5lckhUTUwiLCJjb21wYXJlIiwic29ydERldGFjaGVkIiwiZXhwciIsImVsZW1lbnRzIiwibWF0Y2hlc1NlbGVjdG9yIiwiYXR0ciIsImF0dHJIYW5kbGUiLCJ1bmlxdWVTb3J0IiwiZHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJjcmVhdGVQc2V1ZG8iLCJyZWxhdGl2ZSIsInByZUZpbHRlciIsImV4Y2VzcyIsInVucXVvdGVkIiwibm9kZU5hbWVTZWxlY3RvciIsImV4cGVjdGVkTm9kZU5hbWUiLCJwYXR0ZXJuIiwib3BlcmF0b3IiLCJjaGVjayIsInJlc3VsdCIsIndoYXQiLCJfYXJndW1lbnQiLCJzaW1wbGUiLCJmb3J3YXJkIiwib2ZUeXBlIiwiX2NvbnRleHQiLCJ4bWwiLCJvdXRlckNhY2hlIiwibm9kZUluZGV4Iiwic3RhcnQiLCJwYXJlbnQiLCJ1c2VDYWNoZSIsImRpZmYiLCJmaXJzdENoaWxkIiwibGFzdENoaWxkIiwicHNldWRvIiwiYXJncyIsInNldEZpbHRlcnMiLCJpZHgiLCJtYXRjaGVkIiwibm90IiwibWF0Y2hlciIsImNvbXBpbGUiLCJ1bm1hdGNoZWQiLCJoYXMiLCJsYW5nIiwiZWxlbUxhbmciLCJoYXNoIiwibG9jYXRpb24iLCJyb290IiwiZm9jdXMiLCJhY3RpdmVFbGVtZW50IiwiZXJyIiwic2FmZUFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImVuYWJsZWQiLCJjaGVja2VkIiwic2VsZWN0ZWQiLCJzZWxlY3RlZEluZGV4IiwiZW1wdHkiLCJuZXh0U2libGluZyIsImhlYWRlciIsImJ1dHRvbiIsIl9tYXRjaEluZGV4ZXMiLCJsdCIsImd0IiwibnRoIiwicmFkaW8iLCJjaGVja2JveCIsImZpbGUiLCJwYXNzd29yZCIsImltYWdlIiwic3VibWl0IiwicmVzZXQiLCJwYXJzZU9ubHkiLCJ0b2tlbnMiLCJzb0ZhciIsInByZUZpbHRlcnMiLCJjYWNoZWQiLCJjb21iaW5hdG9yIiwiYmFzZSIsInNraXAiLCJjaGVja05vbkVsZW1lbnRzIiwiZG9uZU5hbWUiLCJvbGRDYWNoZSIsIm5ld0NhY2hlIiwiZWxlbWVudE1hdGNoZXIiLCJtYXRjaGVycyIsImNvbmRlbnNlIiwibmV3VW5tYXRjaGVkIiwibWFwcGVkIiwic2V0TWF0Y2hlciIsInBvc3RGaWx0ZXIiLCJwb3N0RmluZGVyIiwicG9zdFNlbGVjdG9yIiwidGVtcCIsIm1hdGNoZXJPdXQiLCJwcmVNYXAiLCJwb3N0TWFwIiwicHJlZXhpc3RpbmciLCJjb250ZXh0cyIsIm11bHRpcGxlQ29udGV4dHMiLCJtYXRjaGVySW4iLCJtYXRjaGVyRnJvbVRva2VucyIsImNoZWNrQ29udGV4dCIsImxlYWRpbmdSZWxhdGl2ZSIsImltcGxpY2l0UmVsYXRpdmUiLCJtYXRjaENvbnRleHQiLCJtYXRjaEFueUNvbnRleHQiLCJzZXRNYXRjaGVycyIsImVsZW1lbnRNYXRjaGVycyIsImJ5U2V0IiwiYnlFbGVtZW50Iiwic3VwZXJNYXRjaGVyIiwib3V0ZXJtb3N0IiwibWF0Y2hlZENvdW50Iiwic2V0TWF0Y2hlZCIsImNvbnRleHRCYWNrdXAiLCJkaXJydW5zVW5pcXVlIiwibWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzIiwidG9rZW4iLCJjb21waWxlZCIsImZpbHRlcnMiLCJ1bmlxdWUiLCJnZXRUZXh0IiwiaXNYTUwiLCJzZWxlY3RvcnMiLCJ1bnRpbCIsInRydW5jYXRlIiwiaXMiLCJzaWJsaW5ncyIsIm4iLCJybmVlZHNDb250ZXh0IiwicnNpbmdsZVRhZyIsIndpbm5vdyIsInF1YWxpZmllciIsInNlbGYiLCJyb290alF1ZXJ5IiwicGFyc2VIVE1MIiwicmVhZHkiLCJycGFyZW50c3ByZXYiLCJndWFyYW50ZWVkVW5pcXVlIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsInByZXYiLCJzaWJsaW5nIiwiY3VyIiwidGFyZ2V0cyIsImwiLCJjbG9zZXN0IiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwiY29udGVudERvY3VtZW50IiwiY29udGVudCIsInJldmVyc2UiLCJybm90aHRtbHdoaXRlIiwiSWRlbnRpdHkiLCJ2IiwiVGhyb3dlciIsImV4IiwiYWRvcHRWYWx1ZSIsInJlc29sdmUiLCJyZWplY3QiLCJub1ZhbHVlIiwibWV0aG9kIiwicHJvbWlzZSIsImZhaWwiLCJ0aGVuIiwiQ2FsbGJhY2tzIiwib2JqZWN0IiwiXyIsImZsYWciLCJjcmVhdGVPcHRpb25zIiwiZmlyaW5nIiwibWVtb3J5IiwiZmlyZWQiLCJsb2NrZWQiLCJsaXN0IiwicXVldWUiLCJmaXJpbmdJbmRleCIsImZpcmUiLCJvbmNlIiwic3RvcE9uRmFsc2UiLCJyZW1vdmUiLCJkaXNhYmxlIiwibG9jayIsImZpcmVXaXRoIiwiRGVmZXJyZWQiLCJmdW5jIiwidHVwbGVzIiwic3RhdGUiLCJhbHdheXMiLCJkZWZlcnJlZCIsInBpcGUiLCJmbnMiLCJuZXdEZWZlciIsInR1cGxlIiwicmV0dXJuZWQiLCJwcm9ncmVzcyIsIm5vdGlmeSIsIm9uRnVsZmlsbGVkIiwib25SZWplY3RlZCIsIm9uUHJvZ3Jlc3MiLCJtYXhEZXB0aCIsImRlcHRoIiwiaGFuZGxlciIsInNwZWNpYWwiLCJ0aGF0IiwibWlnaHRUaHJvdyIsIlR5cGVFcnJvciIsIm5vdGlmeVdpdGgiLCJyZXNvbHZlV2l0aCIsInByb2Nlc3MiLCJleGNlcHRpb25Ib29rIiwicmVqZWN0V2l0aCIsImdldEVycm9ySG9vayIsImdldFN0YWNrSG9vayIsInNldFRpbWVvdXQiLCJzdGF0ZVN0cmluZyIsIndoZW4iLCJzaW5nbGVWYWx1ZSIsInJlbWFpbmluZyIsInJlc29sdmVDb250ZXh0cyIsInJlc29sdmVWYWx1ZXMiLCJwcmltYXJ5IiwidXBkYXRlRnVuYyIsInJlcnJvck5hbWVzIiwiYXN5bmNFcnJvciIsImNvbnNvbGUiLCJ3YXJuIiwibWVzc2FnZSIsInN0YWNrIiwicmVhZHlFeGNlcHRpb24iLCJyZWFkeUxpc3QiLCJjb21wbGV0ZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiY2F0Y2giLCJyZWFkeVdhaXQiLCJ3YWl0IiwicmVhZHlTdGF0ZSIsImRvU2Nyb2xsIiwiYWNjZXNzIiwiY2hhaW5hYmxlIiwiZW1wdHlHZXQiLCJyYXciLCJidWxrIiwiX2tleSIsInJtc1ByZWZpeCIsInJkYXNoQWxwaGEiLCJmY2FtZWxDYXNlIiwiX2FsbCIsImxldHRlciIsInRvVXBwZXJDYXNlIiwiY2FtZWxDYXNlIiwic3RyaW5nIiwiYWNjZXB0RGF0YSIsIm93bmVyIiwiRGF0YSIsInVpZCIsImRlZmluZVByb3BlcnR5IiwiY29uZmlndXJhYmxlIiwic2V0IiwiZGF0YSIsInByb3AiLCJoYXNEYXRhIiwiZGF0YVByaXYiLCJkYXRhVXNlciIsInJicmFjZSIsInJtdWx0aURhc2giLCJkYXRhQXR0ciIsIkpTT04iLCJwYXJzZSIsImdldERhdGEiLCJyZW1vdmVEYXRhIiwiX2RhdGEiLCJfcmVtb3ZlRGF0YSIsImF0dHJzIiwiZGVxdWV1ZSIsInN0YXJ0TGVuZ3RoIiwiaG9va3MiLCJfcXVldWVIb29rcyIsInVuc2hpZnQiLCJzdG9wIiwic2V0dGVyIiwiY2xlYXJRdWV1ZSIsInRtcCIsImNvdW50IiwiZGVmZXIiLCJwbnVtIiwic291cmNlIiwicmNzc051bSIsImNzc0V4cGFuZCIsImlzQXR0YWNoZWQiLCJjb21wb3NlZCIsImdldFJvb3ROb2RlIiwiaXNIaWRkZW5XaXRoaW5UcmVlIiwic3R5bGUiLCJkaXNwbGF5IiwiY3NzIiwiYWRqdXN0Q1NTIiwidmFsdWVQYXJ0cyIsInR3ZWVuIiwiYWRqdXN0ZWQiLCJzY2FsZSIsIm1heEl0ZXJhdGlvbnMiLCJjdXJyZW50VmFsdWUiLCJpbml0aWFsIiwidW5pdCIsImNzc051bWJlciIsImluaXRpYWxJblVuaXQiLCJkZWZhdWx0RGlzcGxheU1hcCIsImdldERlZmF1bHREaXNwbGF5IiwiYm9keSIsInNob3dIaWRlIiwic2hvdyIsInZhbHVlcyIsImhpZGUiLCJ0b2dnbGUiLCJkaXYiLCJyY2hlY2thYmxlVHlwZSIsInJ0YWdOYW1lIiwicnNjcmlwdFR5cGUiLCJjcmVhdGVEb2N1bWVudEZyYWdtZW50IiwiY2hlY2tDbG9uZSIsImNsb25lTm9kZSIsIm5vQ2xvbmVDaGVja2VkIiwiZGVmYXVsdFZhbHVlIiwib3B0aW9uIiwid3JhcE1hcCIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIl9kZWZhdWx0IiwiZ2V0QWxsIiwic2V0R2xvYmFsRXZhbCIsInJlZkVsZW1lbnRzIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwib3B0Z3JvdXAiLCJyaHRtbCIsImJ1aWxkRnJhZ21lbnQiLCJzY3JpcHRzIiwic2VsZWN0aW9uIiwiaWdub3JlZCIsIndyYXAiLCJhdHRhY2hlZCIsImZyYWdtZW50Iiwibm9kZXMiLCJodG1sUHJlZmlsdGVyIiwiY3JlYXRlVGV4dE5vZGUiLCJydHlwZW5hbWVzcGFjZSIsInJldHVyblRydWUiLCJyZXR1cm5GYWxzZSIsIm9uIiwidHlwZXMiLCJvbmUiLCJvcmlnRm4iLCJldmVudCIsIm9mZiIsImxldmVyYWdlTmF0aXZlIiwiaXNTZXR1cCIsInNhdmVkIiwiaXNUcmlnZ2VyIiwiZGVsZWdhdGVUeXBlIiwic3RvcFByb3BhZ2F0aW9uIiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwicHJldmVudERlZmF1bHQiLCJ0cmlnZ2VyIiwiaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQiLCJoYW5kbGVPYmpJbiIsImV2ZW50SGFuZGxlIiwiZXZlbnRzIiwidCIsImhhbmRsZU9iaiIsImhhbmRsZXJzIiwibmFtZXNwYWNlcyIsIm9yaWdUeXBlIiwiZWxlbURhdGEiLCJjcmVhdGUiLCJoYW5kbGUiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsImJpbmRUeXBlIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwibWFwcGVkVHlwZXMiLCJvcmlnQ291bnQiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwibmF0aXZlRXZlbnQiLCJoYW5kbGVyUXVldWUiLCJmaXgiLCJkZWxlZ2F0ZVRhcmdldCIsInByZURpc3BhdGNoIiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJjdXJyZW50VGFyZ2V0Iiwicm5hbWVzcGFjZSIsInBvc3REaXNwYXRjaCIsIm1hdGNoZWRIYW5kbGVycyIsIm1hdGNoZWRTZWxlY3RvcnMiLCJhZGRQcm9wIiwiaG9vayIsIkV2ZW50IiwiZW51bWVyYWJsZSIsIm9yaWdpbmFsRXZlbnQiLCJ3cml0YWJsZSIsImxvYWQiLCJub0J1YmJsZSIsImNsaWNrIiwiYmVmb3JldW5sb2FkIiwicmV0dXJuVmFsdWUiLCJwcm9wcyIsImlzRGVmYXVsdFByZXZlbnRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJyZWxhdGVkVGFyZ2V0IiwidGltZVN0YW1wIiwiRGF0ZSIsIm5vdyIsImlzU2ltdWxhdGVkIiwiYWx0S2V5IiwiYnViYmxlcyIsImNhbmNlbGFibGUiLCJjaGFuZ2VkVG91Y2hlcyIsImN0cmxLZXkiLCJkZXRhaWwiLCJldmVudFBoYXNlIiwibWV0YUtleSIsInBhZ2VYIiwicGFnZVkiLCJzaGlmdEtleSIsInZpZXciLCJjaGFyQ29kZSIsImtleUNvZGUiLCJidXR0b25zIiwiY2xpZW50WCIsImNsaWVudFkiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInBvaW50ZXJJZCIsInBvaW50ZXJUeXBlIiwic2NyZWVuWCIsInNjcmVlblkiLCJ0YXJnZXRUb3VjaGVzIiwidG9FbGVtZW50IiwidG91Y2hlcyIsIndoaWNoIiwiYmx1ciIsImZvY3VzTWFwcGVkSGFuZGxlciIsImRvY3VtZW50TW9kZSIsInNpbXVsYXRlIiwiYXR0YWNoZXMiLCJkYXRhSG9sZGVyIiwibW91c2VlbnRlciIsIm1vdXNlbGVhdmUiLCJwb2ludGVyZW50ZXIiLCJwb2ludGVybGVhdmUiLCJvcmlnIiwicmVsYXRlZCIsInJub0lubmVyaHRtbCIsInJjaGVja2VkIiwicmNsZWFuU2NyaXB0IiwibWFuaXB1bGF0aW9uVGFyZ2V0IiwiZGlzYWJsZVNjcmlwdCIsInJlc3RvcmVTY3JpcHQiLCJjbG9uZUNvcHlFdmVudCIsImRlc3QiLCJ1ZGF0YU9sZCIsInVkYXRhQ3VyIiwiZml4SW5wdXQiLCJkb21NYW5pcCIsImNvbGxlY3Rpb24iLCJoYXNTY3JpcHRzIiwiaU5vQ2xvbmUiLCJ2YWx1ZUlzRnVuY3Rpb24iLCJodG1sIiwiX2V2YWxVcmwiLCJrZWVwRGF0YSIsImNsZWFuRGF0YSIsImRhdGFBbmRFdmVudHMiLCJkZWVwRGF0YUFuZEV2ZW50cyIsInNyY0VsZW1lbnRzIiwiZGVzdEVsZW1lbnRzIiwiaW5QYWdlIiwiZGV0YWNoIiwiYXBwZW5kIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJhcHBlbmRUbyIsInByZXBlbmRUbyIsImluc2VydEFmdGVyIiwicmVwbGFjZUFsbCIsIm9yaWdpbmFsIiwiaW5zZXJ0Iiwicm51bW5vbnB4IiwicmN1c3RvbVByb3AiLCJnZXRTdHlsZXMiLCJvcGVuZXIiLCJnZXRDb21wdXRlZFN0eWxlIiwic3dhcCIsIm9sZCIsInJib3hTdHlsZSIsImN1ckNTUyIsImNvbXB1dGVkIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiaXNDdXN0b21Qcm9wIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInBpeGVsQm94U3R5bGVzIiwiYWRkR2V0SG9va0lmIiwiY29uZGl0aW9uRm4iLCJob29rRm4iLCJjb21wdXRlU3R5bGVUZXN0cyIsImNvbnRhaW5lciIsImNzc1RleHQiLCJkaXZTdHlsZSIsInBpeGVsUG9zaXRpb25WYWwiLCJyZWxpYWJsZU1hcmdpbkxlZnRWYWwiLCJyb3VuZFBpeGVsTWVhc3VyZXMiLCJtYXJnaW5MZWZ0IiwicmlnaHQiLCJwaXhlbEJveFN0eWxlc1ZhbCIsImJveFNpemluZ1JlbGlhYmxlVmFsIiwicG9zaXRpb24iLCJzY3JvbGxib3hTaXplVmFsIiwib2Zmc2V0V2lkdGgiLCJtZWFzdXJlIiwicm91bmQiLCJwYXJzZUZsb2F0IiwicmVsaWFibGVUckRpbWVuc2lvbnNWYWwiLCJiYWNrZ3JvdW5kQ2xpcCIsImNsZWFyQ2xvbmVTdHlsZSIsImJveFNpemluZ1JlbGlhYmxlIiwicGl4ZWxQb3NpdGlvbiIsInJlbGlhYmxlTWFyZ2luTGVmdCIsInNjcm9sbGJveFNpemUiLCJyZWxpYWJsZVRyRGltZW5zaW9ucyIsInRhYmxlIiwidHJDaGlsZCIsInRyU3R5bGUiLCJoZWlnaHQiLCJwYXJzZUludCIsImJvcmRlclRvcFdpZHRoIiwiYm9yZGVyQm90dG9tV2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJjc3NQcmVmaXhlcyIsImVtcHR5U3R5bGUiLCJ2ZW5kb3JQcm9wcyIsImZpbmFsUHJvcE5hbWUiLCJjc3NQcm9wcyIsImNhcE5hbWUiLCJ2ZW5kb3JQcm9wTmFtZSIsInJkaXNwbGF5c3dhcCIsImNzc1Nob3ciLCJ2aXNpYmlsaXR5IiwiY3NzTm9ybWFsVHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJzZXRQb3NpdGl2ZU51bWJlciIsInN1YnRyYWN0IiwibWF4IiwiYm94TW9kZWxBZGp1c3RtZW50IiwiZGltZW5zaW9uIiwiYm94IiwiaXNCb3JkZXJCb3giLCJzdHlsZXMiLCJjb21wdXRlZFZhbCIsImV4dHJhIiwiZGVsdGEiLCJtYXJnaW5EZWx0YSIsImNlaWwiLCJnZXRXaWR0aE9ySGVpZ2h0IiwidmFsdWVJc0JvcmRlckJveCIsIm9mZnNldFByb3AiLCJnZXRDbGllbnRSZWN0cyIsIlR3ZWVuIiwiZWFzaW5nIiwiY3NzSG9va3MiLCJvcGFjaXR5IiwiYW5pbWF0aW9uSXRlcmF0aW9uQ291bnQiLCJhc3BlY3RSYXRpbyIsImJvcmRlckltYWdlU2xpY2UiLCJjb2x1bW5Db3VudCIsImZsZXhHcm93IiwiZmxleFNocmluayIsImdyaWRBcmVhIiwiZ3JpZENvbHVtbiIsImdyaWRDb2x1bW5FbmQiLCJncmlkQ29sdW1uU3RhcnQiLCJncmlkUm93IiwiZ3JpZFJvd0VuZCIsImdyaWRSb3dTdGFydCIsImxpbmVIZWlnaHQiLCJvcmRlciIsIm9ycGhhbnMiLCJ3aWRvd3MiLCJ6SW5kZXgiLCJ6b29tIiwiZmlsbE9wYWNpdHkiLCJmbG9vZE9wYWNpdHkiLCJzdG9wT3BhY2l0eSIsInN0cm9rZU1pdGVybGltaXQiLCJzdHJva2VPcGFjaXR5Iiwib3JpZ05hbWUiLCJzZXRQcm9wZXJ0eSIsImlzRmluaXRlIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0Iiwic2Nyb2xsYm94U2l6ZUJ1Z2d5IiwibGVmdCIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJwcmVmaXgiLCJzdWZmaXgiLCJleHBhbmQiLCJleHBhbmRlZCIsInBhcnRzIiwicHJvcEhvb2tzIiwicnVuIiwicGVyY2VudCIsImVhc2VkIiwiZHVyYXRpb24iLCJwb3MiLCJzdGVwIiwiZngiLCJzY3JvbGxUb3AiLCJzY3JvbGxMZWZ0IiwibGluZWFyIiwicCIsInN3aW5nIiwiY29zIiwiUEkiLCJmeE5vdyIsImluUHJvZ3Jlc3MiLCJyZnh0eXBlcyIsInJydW4iLCJzY2hlZHVsZSIsImhpZGRlbiIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImludGVydmFsIiwidGljayIsImNyZWF0ZUZ4Tm93IiwiZ2VuRngiLCJpbmNsdWRlV2lkdGgiLCJjcmVhdGVUd2VlbiIsImFuaW1hdGlvbiIsIkFuaW1hdGlvbiIsInR3ZWVuZXJzIiwicHJvcGVydGllcyIsInN0b3BwZWQiLCJwcmVmaWx0ZXJzIiwiY3VycmVudFRpbWUiLCJzdGFydFRpbWUiLCJ0d2VlbnMiLCJvcHRzIiwic3BlY2lhbEVhc2luZyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsImdvdG9FbmQiLCJwcm9wRmlsdGVyIiwiYmluZCIsImNvbXBsZXRlIiwidGltZXIiLCJhbmltIiwidHdlZW5lciIsIm9sZGZpcmUiLCJwcm9wVHdlZW4iLCJyZXN0b3JlRGlzcGxheSIsImlzQm94IiwiZGF0YVNob3ciLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJlZmlsdGVyIiwic3BlZWQiLCJvcHQiLCJzcGVlZHMiLCJmYWRlVG8iLCJ0byIsImFuaW1hdGUiLCJvcHRhbGwiLCJkb0FuaW1hdGlvbiIsImZpbmlzaCIsInN0b3BRdWV1ZSIsInRpbWVycyIsImNzc0ZuIiwic2xpZGVEb3duIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwiZmFkZUluIiwiZmFkZU91dCIsImZhZGVUb2dnbGUiLCJzbG93IiwiZmFzdCIsImRlbGF5IiwidGltZSIsInRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJjaGVja09uIiwib3B0U2VsZWN0ZWQiLCJyYWRpb1ZhbHVlIiwiYm9vbEhvb2siLCJyZW1vdmVBdHRyIiwiblR5cGUiLCJhdHRySG9va3MiLCJhdHRyTmFtZXMiLCJnZXR0ZXIiLCJsb3dlcmNhc2VOYW1lIiwicmZvY3VzYWJsZSIsInJjbGlja2FibGUiLCJzdHJpcEFuZENvbGxhcHNlIiwiZ2V0Q2xhc3MiLCJjbGFzc2VzVG9BcnJheSIsInJlbW92ZVByb3AiLCJwcm9wRml4IiwidGFiaW5kZXgiLCJhZGRDbGFzcyIsImNsYXNzTmFtZXMiLCJjdXJWYWx1ZSIsImZpbmFsVmFsdWUiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwic3RhdGVWYWwiLCJpc1ZhbGlkVmFsdWUiLCJoYXNDbGFzcyIsInJyZXR1cm4iLCJ2YWxIb29rcyIsIm9wdGlvblNldCIsInJxdWVyeSIsInBhcnNlWE1MIiwicGFyc2VyRXJyb3JFbGVtIiwiRE9NUGFyc2VyIiwicGFyc2VGcm9tU3RyaW5nIiwicmZvY3VzTW9ycGgiLCJzdG9wUHJvcGFnYXRpb25DYWxsYmFjayIsIm9ubHlIYW5kbGVycyIsImJ1YmJsZVR5cGUiLCJvbnR5cGUiLCJsYXN0RWxlbWVudCIsImV2ZW50UGF0aCIsInBhcmVudFdpbmRvdyIsInRyaWdnZXJIYW5kbGVyIiwicmJyYWNrZXQiLCJyQ1JMRiIsInJzdWJtaXR0ZXJUeXBlcyIsInJzdWJtaXR0YWJsZSIsImJ1aWxkUGFyYW1zIiwidHJhZGl0aW9uYWwiLCJwYXJhbSIsInMiLCJ2YWx1ZU9yRnVuY3Rpb24iLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInIyMCIsInJoYXNoIiwicmFudGlDYWNoZSIsInJoZWFkZXJzIiwicm5vQ29udGVudCIsInJwcm90b2NvbCIsInRyYW5zcG9ydHMiLCJhbGxUeXBlcyIsIm9yaWdpbkFuY2hvciIsImFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyIsInN0cnVjdHVyZSIsImRhdGFUeXBlRXhwcmVzc2lvbiIsImRhdGFUeXBlIiwiZGF0YVR5cGVzIiwiaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMiLCJqcVhIUiIsImluc3BlY3RlZCIsInNlZWtpbmdUcmFuc3BvcnQiLCJpbnNwZWN0IiwicHJlZmlsdGVyT3JGYWN0b3J5IiwiZGF0YVR5cGVPclRyYW5zcG9ydCIsImFqYXhFeHRlbmQiLCJmbGF0T3B0aW9ucyIsImFqYXhTZXR0aW5ncyIsImFjdGl2ZSIsImxhc3RNb2RpZmllZCIsImV0YWciLCJ1cmwiLCJpc0xvY2FsIiwicHJvdG9jb2wiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJhY2NlcHRzIiwianNvbiIsInJlc3BvbnNlRmllbGRzIiwiY29udmVydGVycyIsImFqYXhTZXR1cCIsInNldHRpbmdzIiwiYWpheFByZWZpbHRlciIsImFqYXhUcmFuc3BvcnQiLCJhamF4IiwidHJhbnNwb3J0IiwiY2FjaGVVUkwiLCJyZXNwb25zZUhlYWRlcnNTdHJpbmciLCJyZXNwb25zZUhlYWRlcnMiLCJ0aW1lb3V0VGltZXIiLCJ1cmxBbmNob3IiLCJmaXJlR2xvYmFscyIsInVuY2FjaGVkIiwiY2FsbGJhY2tDb250ZXh0IiwiZ2xvYmFsRXZlbnRDb250ZXh0IiwiY29tcGxldGVEZWZlcnJlZCIsInN0YXR1c0NvZGUiLCJyZXF1ZXN0SGVhZGVycyIsInJlcXVlc3RIZWFkZXJzTmFtZXMiLCJzdHJBYm9ydCIsImdldFJlc3BvbnNlSGVhZGVyIiwiZ2V0QWxsUmVzcG9uc2VIZWFkZXJzIiwic2V0UmVxdWVzdEhlYWRlciIsIm92ZXJyaWRlTWltZVR5cGUiLCJtaW1lVHlwZSIsInN0YXR1cyIsImFib3J0Iiwic3RhdHVzVGV4dCIsImZpbmFsVGV4dCIsImNyb3NzRG9tYWluIiwiaG9zdCIsImhhc0NvbnRlbnQiLCJpZk1vZGlmaWVkIiwiaGVhZGVycyIsImJlZm9yZVNlbmQiLCJzdWNjZXNzIiwic2VuZCIsIm5hdGl2ZVN0YXR1c1RleHQiLCJyZXNwb25zZXMiLCJpc1N1Y2Nlc3MiLCJyZXNwb25zZSIsIm1vZGlmaWVkIiwiY3QiLCJmaW5hbERhdGFUeXBlIiwiZmlyc3REYXRhVHlwZSIsImFqYXhIYW5kbGVSZXNwb25zZXMiLCJjb252MiIsImN1cnJlbnQiLCJjb252IiwiZGF0YUZpbHRlciIsInRocm93cyIsImFqYXhDb252ZXJ0IiwiZ2V0SlNPTiIsImdldFNjcmlwdCIsIndyYXBBbGwiLCJmaXJzdEVsZW1lbnRDaGlsZCIsIndyYXBJbm5lciIsImh0bWxJc0Z1bmN0aW9uIiwidW53cmFwIiwidmlzaWJsZSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwieGhyU3VjY2Vzc1N0YXR1cyIsInhoclN1cHBvcnRlZCIsImNvcnMiLCJlcnJvckNhbGxiYWNrIiwib3BlbiIsInVzZXJuYW1lIiwieGhyRmllbGRzIiwib25sb2FkIiwib25lcnJvciIsIm9uYWJvcnQiLCJvbnRpbWVvdXQiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZXNwb25zZVR5cGUiLCJyZXNwb25zZVRleHQiLCJiaW5hcnkiLCJzY3JpcHRBdHRycyIsImNoYXJzZXQiLCJzY3JpcHRDaGFyc2V0IiwiZXZ0Iiwib2xkQ2FsbGJhY2tzIiwicmpzb25wIiwianNvbnAiLCJqc29ucENhbGxiYWNrIiwib3JpZ2luYWxTZXR0aW5ncyIsImNhbGxiYWNrTmFtZSIsIm92ZXJ3cml0dGVuIiwicmVzcG9uc2VDb250YWluZXIiLCJqc29uUHJvcCIsImNyZWF0ZUhUTUxEb2N1bWVudCIsImltcGxlbWVudGF0aW9uIiwia2VlcFNjcmlwdHMiLCJwYXJzZWQiLCJwYXJhbXMiLCJhbmltYXRlZCIsIm9mZnNldCIsInNldE9mZnNldCIsImN1clBvc2l0aW9uIiwiY3VyTGVmdCIsImN1ckNTU1RvcCIsImN1clRvcCIsImN1ck9mZnNldCIsImN1ckNTU0xlZnQiLCJjdXJFbGVtIiwidXNpbmciLCJyZWN0Iiwid2luIiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInBhcmVudE9mZnNldCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJkZWZhdWx0RXh0cmEiLCJmdW5jTmFtZSIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsImhvdmVyIiwiZm5PdmVyIiwiZm5PdXQiLCJydHJpbSIsInByb3h5IiwiaG9sZFJlYWR5IiwiaG9sZCIsInBhcnNlSlNPTiIsImlzTnVtZXJpYyIsImlzTmFOIiwidHJpbSIsIl9qUXVlcnkiLCJfJCIsIiQiLCJub0NvbmZsaWN0Il0sInNvdXJjZVJvb3QiOiIifQ==
