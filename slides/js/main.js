// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// jquery=1.11.1.min.js start
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
/*! jQuery v1.11.1 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
! function(a, b) { "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) { if (!a.document) throw new Error("jQuery requires a window with a document"); return b(a) } : b(a) }("undefined" != typeof window ? window : this, function(a, b) {
    var c = [],
        d = c.slice,
        e = c.concat,
        f = c.push,
        g = c.indexOf,
        h = {},
        i = h.toString,
        j = h.hasOwnProperty,
        k = {},
        l = "1.11.1",
        m = function(a, b) { return new m.fn.init(a, b) },
        n = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        o = /^-ms-/,
        p = /-([\da-z])/gi,
        q = function(a, b) { return b.toUpperCase() };
    m.fn = m.prototype = {
        jquery: l,
        constructor: m,
        selector: "",
        length: 0,
        toArray: function() { return d.call(this) },
        get: function(a) { return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this) },
        pushStack: function(a) { var b = m.merge(this.constructor(), a); return b.prevObject = this, b.context = this.context, b },
        each: function(a, b) { return m.each(this, a, b) },
        map: function(a) { return this.pushStack(m.map(this, function(b, c) { return a.call(b, c, b) })) },
        slice: function() { return this.pushStack(d.apply(this, arguments)) },
        first: function() { return this.eq(0) },
        last: function() { return this.eq(-1) },
        eq: function(a) {
            var b = this.length,
                c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        },
        end: function() { return this.prevObject || this.constructor(null) },
        push: f,
        sort: c.sort,
        splice: c.splice
    }, m.extend = m.fn.extend = function() {
        var a, b, c, d, e, f, g = arguments[0] || {},
            h = 1,
            i = arguments.length,
            j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
            if (null != (e = arguments[h]))
                for (d in e) a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(a) { throw new Error(a) },
        noop: function() {},
        isFunction: function(a) { return "function" === m.type(a) },
        isArray: Array.isArray || function(a) { return "array" === m.type(a) },
        isWindow: function(a) { return null != a && a == a.window },
        isNumeric: function(a) { return !m.isArray(a) && a - parseFloat(a) >= 0 },
        isEmptyObject: function(a) { var b; for (b in a) return !1; return !0 },
        isPlainObject: function(a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a)) return !1;
            try { if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf")) return !1 } catch (c) { return !1 }
            if (k.ownLast)
                for (b in a) return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        },
        type: function(a) { return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a },
        globalEval: function(b) { b && m.trim(b) && (a.execScript || function(b) { a.eval.call(a, b) })(b) },
        camelCase: function(a) { return a.replace(o, "ms-").replace(p, q) },
        nodeName: function(a, b) { return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase() },
        each: function(a, b, c) {
            var d, e = 0,
                f = a.length,
                g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)
                        if (d = b.apply(a[e], c), d === !1) break
                } else
                    for (e in a)
                        if (d = b.apply(a[e], c), d === !1) break
            } else if (g) {
                for (; f > e; e++)
                    if (d = b.call(a[e], e, a[e]), d === !1) break
            } else
                for (e in a)
                    if (d = b.call(a[e], e, a[e]), d === !1) break; return a
        },
        trim: function(a) { return null == a ? "" : (a + "").replace(n, "") },
        makeArray: function(a, b) { var c = b || []; return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c },
        inArray: function(a, b, c) {
            var d;
            if (b) {
                if (g) return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
                    if (c in b && b[c] === a) return c
            }
            return -1
        },
        merge: function(a, b) {
            var c = +b.length,
                d = 0,
                e = a.length;
            while (c > d) a[e++] = b[d++];
            if (c !== c)
                while (void 0 !== b[d]) a[e++] = b[d++];
            return a.length = e, a
        },
        grep: function(a, b, c) { for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]); return e },
        map: function(a, b, c) {
            var d, f = 0,
                g = a.length,
                h = r(a),
                i = [];
            if (h)
                for (; g > f; f++) d = b(a[f], f, c), null != d && i.push(d);
            else
                for (f in a) d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        },
        guid: 1,
        proxy: function(a, b) { var c, e, f; return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function() { return a.apply(b || this, c.concat(d.call(arguments))) }, e.guid = a.guid = a.guid || m.guid++, e) : void 0 },
        now: function() { return +new Date },
        support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) { h["[object " + b + "]"] = b.toLowerCase() });

    function r(a) {
        var b = a.length,
            c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }
    var s = function(a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + -new Date,
            v = a.document,
            w = 0,
            x = 0,
            y = gb(),
            z = gb(),
            A = gb(),
            B = function(a, b) { return a === b && (l = !0), 0 },
            C = "undefined",
            D = 1 << 31,
            E = {}.hasOwnProperty,
            F = [],
            G = F.pop,
            H = F.push,
            I = F.push,
            J = F.slice,
            K = F.indexOf || function(a) {
                for (var b = 0, c = this.length; c > b; b++)
                    if (this[b] === a) return b;
                return -1
            },
            L = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            M = "[\\x20\\t\\r\\n\\f]",
            N = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            O = N.replace("w", "w#"),
            P = "\\[" + M + "*(" + N + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + O + "))|)" + M + "*\\]",
            Q = ":(" + N + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + P + ")*)|.*)\\)|)",
            R = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$", "g"),
            S = new RegExp("^" + M + "*," + M + "*"),
            T = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"),
            U = new RegExp("=" + M + "*([^\\]'\"]*?)" + M + "*\\]", "g"),
            V = new RegExp(Q),
            W = new RegExp("^" + O + "$"),
            X = { ID: new RegExp("^#(" + N + ")"), CLASS: new RegExp("^\\.(" + N + ")"), TAG: new RegExp("^(" + N.replace("w", "w*") + ")"), ATTR: new RegExp("^" + P), PSEUDO: new RegExp("^" + Q), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)", "i"), bool: new RegExp("^(?:" + L + ")$", "i"), needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)", "i") },
            Y = /^(?:input|select|textarea|button)$/i,
            Z = /^h\d$/i,
            $ = /^[^{]+\{\s*\[native \w/,
            _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            ab = /[+~]/,
            bb = /'|\\/g,
            cb = new RegExp("\\\\([\\da-f]{1,6}" + M + "?|(" + M + ")|.)", "ig"),
            db = function(a, b, c) { var d = "0x" + b - 65536; return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320) };
        try { I.apply(F = J.call(v.childNodes), v.childNodes), F[v.childNodes.length].nodeType } catch (eb) {
            I = {
                apply: F.length ? function(a, b) { H.apply(a, J.call(b)) } : function(a, b) {
                    var c = a.length,
                        d = 0;
                    while (a[c++] = b[d++]);
                    a.length = c - 1
                }
            }
        }

        function fb(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], !a || "string" != typeof a) return d;
            if (1 !== (k = b.nodeType) && 9 !== k) return [];
            if (p && !e) {
                if (f = _.exec(a))
                    if (j = f[1]) { if (9 === k) { if (h = b.getElementById(j), !h || !h.parentNode) return d; if (h.id === j) return d.push(h), d } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j) return d.push(h), d } else { if (f[2]) return I.apply(d, b.getElementsByTagName(a)), d; if ((j = f[3]) && c.getElementsByClassName && b.getElementsByClassName) return I.apply(d, b.getElementsByClassName(j)), d }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 9 === k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--) o[l] = s + qb(o[l]);
                        w = ab.test(a) && ob(b.parentNode) || b, x = o.join(",")
                    }
                    if (x) try { return I.apply(d, w.querySelectorAll(x)), d } catch (y) {} finally { r || b.removeAttribute("id") }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function gb() {
            var a = [];

            function b(c, e) { return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e }
            return b
        }

        function hb(a) { return a[u] = !0, a }

        function ib(a) { var b = n.createElement("div"); try { return !!a(b) } catch (c) { return !1 } finally { b.parentNode && b.parentNode.removeChild(b), b = null } }

        function jb(a, b) {
            var c = a.split("|"),
                e = a.length;
            while (e--) d.attrHandle[c[e]] = b
        }

        function kb(a, b) {
            var c = b && a,
                d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || D) - (~a.sourceIndex || D);
            if (d) return d;
            if (c)
                while (c = c.nextSibling)
                    if (c === b) return -1;
            return a ? 1 : -1
        }

        function lb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return "input" === c && b.type === a } }

        function mb(a) { return function(b) { var c = b.nodeName.toLowerCase(); return ("input" === c || "button" === c) && b.type === a } }

        function nb(a) {
            return hb(function(b) {
                return b = +b, hb(function(c, d) {
                    var e, f = a([], c.length, b),
                        g = f.length;
                    while (g--) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function ob(a) { return a && typeof a.getElementsByTagName !== C && a }
        c = fb.support = {}, f = fb.isXML = function(a) { var b = a && (a.ownerDocument || a).documentElement; return b ? "HTML" !== b.nodeName : !1 }, m = fb.setDocument = function(a) {
            var b, e = a ? a.ownerDocument || a : v,
                g = e.defaultView;
            return e !== n && 9 === e.nodeType && e.documentElement ? (n = e, o = e.documentElement, p = !f(e), g && g !== g.top && (g.addEventListener ? g.addEventListener("unload", function() { m() }, !1) : g.attachEvent && g.attachEvent("onunload", function() { m() })), c.attributes = ib(function(a) { return a.className = "i", !a.getAttribute("className") }), c.getElementsByTagName = ib(function(a) { return a.appendChild(e.createComment("")), !a.getElementsByTagName("*").length }), c.getElementsByClassName = $.test(e.getElementsByClassName) && ib(function(a) { return a.innerHTML = "<div class='a'></div><div class='a i'></div>", a.firstChild.className = "i", 2 === a.getElementsByClassName("i").length }), c.getById = ib(function(a) { return o.appendChild(a).id = u, !e.getElementsByName || !e.getElementsByName(u).length }), c.getById ? (d.find.ID = function(a, b) { if (typeof b.getElementById !== C && p) { var c = b.getElementById(a); return c && c.parentNode ? [c] : [] } }, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { return a.getAttribute("id") === b } }) : (delete d.find.ID, d.filter.ID = function(a) { var b = a.replace(cb, db); return function(a) { var c = typeof a.getAttributeNode !== C && a.getAttributeNode("id"); return c && c.value === b } }), d.find.TAG = c.getElementsByTagName ? function(a, b) { return typeof b.getElementsByTagName !== C ? b.getElementsByTagName(a) : void 0 } : function(a, b) {
                var c, d = [],
                    e = 0,
                    f = b.getElementsByTagName(a);
                if ("*" === a) { while (c = f[e++]) 1 === c.nodeType && d.push(c); return d }
                return f
            }, d.find.CLASS = c.getElementsByClassName && function(a, b) { return typeof b.getElementsByClassName !== C && p ? b.getElementsByClassName(a) : void 0 }, r = [], q = [], (c.qsa = $.test(e.querySelectorAll)) && (ib(function(a) { a.innerHTML = "<select msallowclip=''><option selected=''></option></select>", a.querySelectorAll("[msallowclip^='']").length && q.push("[*^$]=" + M + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + M + "*(?:value|" + L + ")"), a.querySelectorAll(":checked").length || q.push(":checked") }), ib(function(a) {
                var b = e.createElement("input");
                b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + M + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
            })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ib(function(a) { c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", Q) }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function(a, b) {
                var c = 9 === a.nodeType ? a.documentElement : a,
                    d = b && b.parentNode;
                return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
            } : function(a, b) {
                if (b)
                    while (b = b.parentNode)
                        if (b === a) return !0;
                return !1
            }, B = b ? function(a, b) { if (a === b) return l = !0, 0; var d = !a.compareDocumentPosition - !b.compareDocumentPosition; return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === e || a.ownerDocument === v && t(v, a) ? -1 : b === e || b.ownerDocument === v && t(v, b) ? 1 : k ? K.call(k, a) - K.call(k, b) : 0 : 4 & d ? -1 : 1) } : function(a, b) {
                if (a === b) return l = !0, 0;
                var c, d = 0,
                    f = a.parentNode,
                    g = b.parentNode,
                    h = [a],
                    i = [b];
                if (!f || !g) return a === e ? -1 : b === e ? 1 : f ? -1 : g ? 1 : k ? K.call(k, a) - K.call(k, b) : 0;
                if (f === g) return kb(a, b);
                c = a;
                while (c = c.parentNode) h.unshift(c);
                c = b;
                while (c = c.parentNode) i.unshift(c);
                while (h[d] === i[d]) d++;
                return d ? kb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
            }, e) : n
        }, fb.matches = function(a, b) { return fb(a, null, null, b) }, fb.matchesSelector = function(a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b))) try { var d = s.call(a, b); if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d } catch (e) {}
            return fb(b, n, null, [a]).length > 0
        }, fb.contains = function(a, b) { return (a.ownerDocument || a) !== n && m(a), t(a, b) }, fb.attr = function(a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()],
                f = e && E.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, fb.error = function(a) { throw new Error("Syntax error, unrecognized expression: " + a) }, fb.uniqueSort = function(a) {
            var b, d = [],
                e = 0,
                f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) { while (b = a[f++]) b === a[f] && (e = d.push(f)); while (e--) a.splice(d[e], 1) }
            return k = null, a
        }, e = fb.getText = function(a) {
            var b, c = "",
                d = 0,
                f = a.nodeType;
            if (f) { if (1 === f || 9 === f || 11 === f) { if ("string" == typeof a.textContent) return a.textContent; for (a = a.firstChild; a; a = a.nextSibling) c += e(a) } else if (3 === f || 4 === f) return a.nodeValue } else
                while (b = a[d++]) c += e(b);
            return c
        }, d = fb.selectors = {
            cacheLength: 50,
            createPseudo: hb,
            match: X,
            attrHandle: {},
            find: {},
            relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
            preFilter: { ATTR: function(a) { return a[1] = a[1].replace(cb, db), a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4) }, CHILD: function(a) { return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || fb.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && fb.error(a[0]), a }, PSEUDO: function(a) { var b, c = !a[6] && a[2]; return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3)) } },
            filter: {
                TAG: function(a) { var b = a.replace(cb, db).toLowerCase(); return "*" === a ? function() { return !0 } : function(a) { return a.nodeName && a.nodeName.toLowerCase() === b } },
                CLASS: function(a) { var b = y[a + " "]; return b || (b = new RegExp("(^|" + M + ")" + a + "(" + M + "|$)")) && y(a, function(a) { return b.test("string" == typeof a.className && a.className || typeof a.getAttribute !== C && a.getAttribute("class") || "") }) },
                ATTR: function(a, b, c) { return function(d) { var e = fb.attr(d, a); return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0 } },
                CHILD: function(a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3),
                        g = "last" !== a.slice(-4),
                        h = "of-type" === b;
                    return 1 === d && 0 === e ? function(a) { return !!a.parentNode } : function(b, c, i) {
                        var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
                            q = b.parentNode,
                            r = h && b.nodeName.toLowerCase(),
                            s = !i && !h;
                        if (q) {
                            if (f) {
                                while (p) {
                                    l = b;
                                    while (l = l[p])
                                        if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
                                    o = p = "only" === a && !o && "nextSibling"
                                }
                                return !0
                            }
                            if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if (1 === l.nodeType && ++m && l === b) { k[a] = [w, n, m]; break }
                            } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1];
                            else
                                while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                    if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b)) break; return m -= e, m === d || m % d === 0 && m / d >= 0
                        }
                    }
                },
                PSEUDO: function(a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || fb.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? hb(function(a, c) {
                        var d, f = e(a, b),
                            g = f.length;
                        while (g--) d = K.call(a, f[g]), a[d] = !(c[d] = f[g])
                    }) : function(a) { return e(a, 0, c) }) : e
                }
            },
            pseudos: {
                not: hb(function(a) {
                    var b = [],
                        c = [],
                        d = h(a.replace(R, "$1"));
                    return d[u] ? hb(function(a, b, c, e) {
                        var f, g = d(a, null, e, []),
                            h = a.length;
                        while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                    }) : function(a, e, f) { return b[0] = a, d(b, null, f, c), !c.pop() }
                }),
                has: hb(function(a) { return function(b) { return fb(a, b).length > 0 } }),
                contains: hb(function(a) { return function(b) { return (b.textContent || b.innerText || e(b)).indexOf(a) > -1 } }),
                lang: hb(function(a) {
                    return W.test(a || "") || fb.error("unsupported lang: " + a), a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                }),
                target: function(b) { var c = a.location && a.location.hash; return c && c.slice(1) === b.id },
                root: function(a) { return a === o },
                focus: function(a) { return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex) },
                enabled: function(a) { return a.disabled === !1 },
                disabled: function(a) { return a.disabled === !0 },
                checked: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && !!a.checked || "option" === b && !!a.selected },
                selected: function(a) { return a.parentNode && a.parentNode.selectedIndex, a.selected === !0 },
                empty: function(a) {
                    for (a = a.firstChild; a; a = a.nextSibling)
                        if (a.nodeType < 6) return !1;
                    return !0
                },
                parent: function(a) { return !d.pseudos.empty(a) },
                header: function(a) { return Z.test(a.nodeName) },
                input: function(a) { return Y.test(a.nodeName) },
                button: function(a) { var b = a.nodeName.toLowerCase(); return "input" === b && "button" === a.type || "button" === b },
                text: function(a) { var b; return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase()) },
                first: nb(function() { return [0] }),
                last: nb(function(a, b) { return [b - 1] }),
                eq: nb(function(a, b, c) { return [0 > c ? c + b : c] }),
                even: nb(function(a, b) { for (var c = 0; b > c; c += 2) a.push(c); return a }),
                odd: nb(function(a, b) { for (var c = 1; b > c; c += 2) a.push(c); return a }),
                lt: nb(function(a, b, c) { for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d); return a }),
                gt: nb(function(a, b, c) { for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d); return a })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) d.pseudos[b] = lb(b);
        for (b in { submit: !0, reset: !0 }) d.pseudos[b] = mb(b);

        function pb() {}
        pb.prototype = d.filters = d.pseudos, d.setFilters = new pb, g = fb.tokenize = function(a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k) return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({ value: c, type: e[0].replace(R, " ") }), h = h.slice(c.length));
                for (g in d.filter) !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({ value: c, type: g, matches: e }), h = h.slice(c.length));
                if (!c) break
            }
            return b ? h.length : h ? fb.error(a) : z(a, i).slice(0)
        };

        function qb(a) { for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value; return d }

        function rb(a, b, c) {
            var d = b.dir,
                e = c && "parentNode" === d,
                f = x++;
            return b.first ? function(b, c, f) {
                while (b = b[d])
                    if (1 === b.nodeType || e) return a(b, c, f)
            } : function(b, c, g) {
                var h, i, j = [w, f];
                if (g) {
                    while (b = b[d])
                        if ((1 === b.nodeType || e) && a(b, c, g)) return !0
                } else
                    while (b = b[d])
                        if (1 === b.nodeType || e) { if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f) return j[2] = h[2]; if (i[d] = j, j[2] = a(b, c, g)) return !0 }
            }
        }

        function sb(a) {
            return a.length > 1 ? function(b, c, d) {
                var e = a.length;
                while (e--)
                    if (!a[e](b, c, d)) return !1;
                return !0
            } : a[0]
        }

        function tb(a, b, c) { for (var d = 0, e = b.length; e > d; d++) fb(a, b[d], c); return c }

        function ub(a, b, c, d, e) { for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h)); return g }

        function vb(a, b, c, d, e, f) {
            return d && !d[u] && (d = vb(d)), e && !e[u] && (e = vb(e, f)), hb(function(f, g, h, i) {
                var j, k, l, m = [],
                    n = [],
                    o = g.length,
                    p = f || tb(b || "*", h.nodeType ? [h] : h, []),
                    q = !a || !f && b ? p : ub(p, m, a, h, i),
                    r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) { j = ub(r, n), d(j, [], h, i), k = j.length; while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l)) }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? K.call(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = ub(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : I.apply(g, r)
            })
        }

        function wb(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = rb(function(a) { return a === b }, h, !0), l = rb(function(a) { return K.call(b, a) > -1 }, h, !0), m = [function(a, c, d) { return !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d)) }]; f > i; i++)
                if (c = d.relative[a[i].type]) m = [rb(sb(m), c)];
                else {
                    if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                        for (e = ++i; f > e; e++)
                            if (d.relative[a[e].type]) break;
                        return vb(i > 1 && sb(m), i > 1 && qb(a.slice(0, i - 1).concat({ value: " " === a[i - 2].type ? "*" : "" })).replace(R, "$1"), c, e > i && wb(a.slice(i, e)), f > e && wb(a = a.slice(e)), f > e && qb(a))
                    }
                    m.push(c)
                }
            return sb(m)
        }

        function xb(a, b) {
            var c = b.length > 0,
                e = a.length > 0,
                f = function(f, g, h, i, k) {
                    var l, m, o, p = 0,
                        q = "0",
                        r = f && [],
                        s = [],
                        t = j,
                        u = f || e && d.find.TAG("*", k),
                        v = w += null == t ? 1 : Math.random() || .1,
                        x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) { i.push(l); break }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--, f && r.push(l))
                    }
                    if (p += q, c && q !== p) {
                        m = 0;
                        while (o = b[m++]) o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--) r[q] || s[q] || (s[q] = G.call(i));
                            s = ub(s)
                        }
                        I.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && fb.uniqueSort(i)
                    }
                    return k && (w = v, j = t), r
                };
            return c ? hb(f) : f
        }
        return h = fb.compile = function(a, b) {
            var c, d = [],
                e = [],
                f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--) f = wb(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, xb(e, d)), f.selector = a
            }
            return f
        }, i = fb.select = function(a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a,
                o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0], !b) return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) { if (k = j[i], d.relative[l = k.type]) break; if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && ob(b.parentNode) || b))) { if (j.splice(i, 1), a = f.length && qb(j), !a) return I.apply(e, f), e; break } }
            }
            return (n || h(a, o))(f, b, !p, e, ab.test(a) && ob(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ib(function(a) { return 1 & a.compareDocumentPosition(n.createElement("div")) }), ib(function(a) { return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href") }) || jb("type|href|height|width", function(a, b, c) { return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2) }), c.attributes && ib(function(a) { return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value") }) || jb("value", function(a, b, c) { return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue }), ib(function(a) { return null == a.getAttribute("disabled") }) || jb(L, function(a, b, c) { var d; return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null }), fb
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext,
        u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
        v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b)) return m.grep(a, function(a, d) { return !!b.call(a, d, a) !== c });
        if (b.nodeType) return m.grep(a, function(a) { return a === b !== c });
        if ("string" == typeof b) {
            if (v.test(b)) return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function(a) { return m.inArray(a, b) >= 0 !== c })
    }
    m.filter = function(a, b, c) { var d = b[0]; return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function(a) { return 1 === a.nodeType })) }, m.fn.extend({
        find: function(a) {
            var b, c = [],
                d = this,
                e = d.length;
            if ("string" != typeof a) return this.pushStack(m(a).filter(function() {
                for (b = 0; e > b; b++)
                    if (m.contains(d[b], this)) return !0
            }));
            for (b = 0; e > b; b++) m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        },
        filter: function(a) { return this.pushStack(w(this, a || [], !1)) },
        not: function(a) { return this.pushStack(w(this, a || [], !0)) },
        is: function(a) { return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length }
    });
    var x, y = a.document,
        z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
        A = m.fn.init = function(a, b) {
            var c, d;
            if (!a) return this;
            if ("string" == typeof a) {
                if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))
                        for (c in b) m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                if (d = y.getElementById(c[2]), d && d.parentNode) {
                    if (d.id !== c[2]) return x.find(a);
                    this.length = 1, this[0] = d
                }
                return this.context = y, this.selector = a, this
            }
            return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
        };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/,
        C = { children: !0, contents: !0, next: !0, prev: !0 };
    m.extend({
        dir: function(a, b, c) {
            var d = [],
                e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c))) 1 === e.nodeType && d.push(e), e = e[b];
            return d
        },
        sibling: function(a, b) { for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a); return c }
    }), m.fn.extend({
        has: function(a) {
            var b, c = m(a, this),
                d = c.length;
            return this.filter(function() {
                for (b = 0; d > b; b++)
                    if (m.contains(this, c[b])) return !0
            })
        },
        closest: function(a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)
                for (c = this[d]; c && c !== b; c = c.parentNode)
                    if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) { f.push(c); break }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        },
        index: function(a) { return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
        add: function(a, b) { return this.pushStack(m.unique(m.merge(this.get(), m(a, b)))) },
        addBack: function(a) { return this.add(null == a ? this.prevObject : this.prevObject.filter(a)) }
    });

    function D(a, b) { do a = a[b]; while (a && 1 !== a.nodeType); return a }
    m.each({ parent: function(a) { var b = a.parentNode; return b && 11 !== b.nodeType ? b : null }, parents: function(a) { return m.dir(a, "parentNode") }, parentsUntil: function(a, b, c) { return m.dir(a, "parentNode", c) }, next: function(a) { return D(a, "nextSibling") }, prev: function(a) { return D(a, "previousSibling") }, nextAll: function(a) { return m.dir(a, "nextSibling") }, prevAll: function(a) { return m.dir(a, "previousSibling") }, nextUntil: function(a, b, c) { return m.dir(a, "nextSibling", c) }, prevUntil: function(a, b, c) { return m.dir(a, "previousSibling", c) }, siblings: function(a) { return m.sibling((a.parentNode || {}).firstChild, a) }, children: function(a) { return m.sibling(a.firstChild) }, contents: function(a) { return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes) } }, function(a, b) { m.fn[a] = function(c, d) { var e = m.map(this, b, c); return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e) } });
    var E = /\S+/g,
        F = {};

    function G(a) { var b = F[a] = {}; return m.each(a.match(E) || [], function(a, c) { b[c] = !0 }), b }
    m.Callbacks = function(a) {
        a = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [],
            i = !a.once && [],
            j = function(l) {
                for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)
                    if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) { c = !1; break }
                b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
            },
            k = { add: function() { if (h) { var d = h.length;! function f(b) { m.each(b, function(b, c) { var d = m.type(c); "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c) }) }(arguments), b ? e = h.length : c && (g = d, j(c)) } return this }, remove: function() { return h && m.each(arguments, function(a, c) { var d; while ((d = m.inArray(c, h, d)) > -1) h.splice(d, 1), b && (e >= d && e--, f >= d && f--) }), this }, has: function(a) { return a ? m.inArray(a, h) > -1 : !(!h || !h.length) }, empty: function() { return h = [], e = 0, this }, disable: function() { return h = i = c = void 0, this }, disabled: function() { return !h }, lock: function() { return i = void 0, c || k.disable(), this }, locked: function() { return !i }, fireWith: function(a, c) { return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this }, fire: function() { return k.fireWith(this, arguments), this }, fired: function() { return !!d } };
        return k
    }, m.extend({
        Deferred: function(a) {
            var b = [
                    ["resolve", "done", m.Callbacks("once memory"), "resolved"],
                    ["reject", "fail", m.Callbacks("once memory"), "rejected"],
                    ["notify", "progress", m.Callbacks("memory")]
                ],
                c = "pending",
                d = {
                    state: function() { return c },
                    always: function() { return e.done(arguments).fail(arguments), this },
                    then: function() {
                        var a = arguments;
                        return m.Deferred(function(c) {
                            m.each(b, function(b, f) {
                                var g = m.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }), a = null
                        }).promise()
                    },
                    promise: function(a) { return null != a ? m.extend(a, d) : d }
                },
                e = {};
            return d.pipe = d.then, m.each(b, function(a, f) {
                var g = f[2],
                    h = f[3];
                d[f[1]] = g.add, h && g.add(function() { c = h }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function() { return e[f[0] + "With"](this === e ? d : this, arguments), this }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        },
        when: function(a) {
            var b = 0,
                c = d.call(arguments),
                e = c.length,
                f = 1 !== e || a && m.isFunction(a.promise) ? e : 0,
                g = 1 === f ? a : m.Deferred(),
                h = function(a, b, c) { return function(e) { b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c) } },
                i, j, k;
            if (e > 1)
                for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++) c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function(a) { return m.ready.promise().done(a), this }, m.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(a) { a ? m.readyWait++ : m.ready(!0) },
        ready: function(a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body) return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });

    function I() { y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J)) }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }
    m.ready.promise = function(b) {
        if (!H)
            if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready);
            else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1);
        else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try { c = null == a.frameElement && y.documentElement } catch (d) {}
            c && c.doScroll && ! function e() {
                if (!m.isReady) {
                    try { c.doScroll("left") } catch (a) { return setTimeout(e, 50) }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K = "undefined",
        L;
    for (L in m(k)) break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function() {
            var a, b, c, d;
            c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
        }),
        function() {
            var a = y.createElement("div");
            if (null == k.deleteExpando) { k.deleteExpando = !0; try { delete a.test } catch (b) { k.deleteExpando = !1 } }
            a = null
        }(), m.acceptData = function(a) {
            var b = m.noData[(a.nodeName + " ").toLowerCase()],
                c = +a.nodeType || 1;
            return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
        };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try { c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c } catch (e) {}
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)
            if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando,
                i = a.nodeType,
                j = i ? m.cache : a,
                k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b) return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : { toJSON: m.noop }), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType,
                g = f ? m.cache : a,
                h = f ? a[m.expando] : m.expando;
            if (g[h]) { if (b && (d = c ? g[h] : g[h].data)) { m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length; while (e--) delete d[b[e]]; if (c ? !P(d) : !m.isEmptyObject(d)) return }(c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null) }
        }
    }
    m.extend({ cache: {}, noData: { "applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" }, hasData: function(a) { return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a) }, data: function(a, b, c) { return Q(a, b, c) }, removeData: function(a, b) { return R(a, b) }, _data: function(a, b, c) { return Q(a, b, c, !0) }, _removeData: function(a, b) { return R(a, b, !0) } }), m.fn.extend({
        data: function(a, b) {
            var c, d, e, f = this[0],
                g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function() { m.data(this, a) }) : arguments.length > 1 ? this.each(function() { m.data(this, a, b) }) : f ? O(f, a, m.data(f, a)) : void 0
        },
        removeData: function(a) { return this.each(function() { m.removeData(this, a) }) }
    }), m.extend({
        queue: function(a, b, c) { var d; return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0 },
        dequeue: function(a, b) {
            b = b || "fx";
            var c = m.queue(a, b),
                d = c.length,
                e = c.shift(),
                f = m._queueHooks(a, b),
                g = function() { m.dequeue(a, b) };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        },
        _queueHooks: function(a, b) { var c = b + "queueHooks"; return m._data(a, c) || m._data(a, c, { empty: m.Callbacks("once memory").add(function() { m._removeData(a, b + "queue"), m._removeData(a, c) }) }) }
    }), m.fn.extend({
        queue: function(a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                var c = m.queue(this, a, b);
                m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
            })
        },
        dequeue: function(a) { return this.each(function() { m.dequeue(this, a) }) },
        clearQueue: function(a) { return this.queue(a || "fx", []) },
        promise: function(a, b) {
            var c, d = 1,
                e = m.Deferred(),
                f = this,
                g = this.length,
                h = function() {--d || e.resolveWith(f, [f]) };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--) c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        T = ["Top", "Right", "Bottom", "Left"],
        U = function(a, b) { return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a) },
        V = m.access = function(a, b, c, d, e, f, g) {
            var h = 0,
                i = a.length,
                j = null == c;
            if ("object" === m.type(c)) { e = !0; for (h in c) m.access(a, b, h, c[h], !0, f, g) } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function(a, b, c) { return j.call(m(a), c) })), b))
                for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        },
        W = /^(?:checkbox|radio)$/i;
    ! function() {
        var a = y.createElement("input"),
            b = y.createElement("div"),
            c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function() { k.noCloneEvent = !1 }), b.cloneNode(!0).click()), null == k.deleteExpando) { k.deleteExpando = !0; try { delete b.test } catch (d) { k.deleteExpando = !1 } }
    }(),
    function() {
        var b, c, d = y.createElement("div");
        for (b in { submit: !0, change: !0, focusin: !0 }) c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i,
        Y = /^key/,
        Z = /^(?:mouse|pointer|contextmenu)|click/,
        $ = /^(?:focusinfocus|focusoutblur)$/,
        _ = /^([^.]*)(?:\.(.+)|)$/;

    function ab() { return !0 }

    function bb() { return !1 }

    function cb() { try { return y.activeElement } catch (a) {} }
    m.event = {
        global: {},
        add: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function(a) { return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments) }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--) f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({ type: o, origType: q, data: d, handler: c, guid: c.guid, selector: e, needsContext: e && m.expr.match.needsContext.test(e), namespace: p.join(".") }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function(a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)
                    if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                        l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                        while (f--) g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                        i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                    } else
                        for (o in k) m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function(b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y],
                p = j.call(b, "type") ? b.type : b,
                q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode) o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped()) b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try { d[p]() } catch (r) {}
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function(a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [],
                i = d.call(arguments),
                j = (m._data(this, "events") || {})[a.type] || [],
                k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) { h = m.event.handlers.call(this, a, j), b = 0; while ((f = h[b++]) && !a.isPropagationStopped()) { a.currentTarget = f.elem, g = 0; while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation())) } return k.postDispatch && k.postDispatch.call(this, a), a.result }
        },
        handlers: function(a, b) {
            var c, d, e, f, g = [],
                h = b.delegateCount,
                i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))
                for (; i != this; i = i.parentNode || this)
                    if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                        for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                        e.length && g.push({ elem: i, handlers: e })
                    }
            return h < b.length && g.push({ elem: this, handlers: b.slice(h) }), g
        },
        fix: function(a) {
            if (a[m.expando]) return a;
            var b, c, d, e = a.type,
                f = a,
                g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--) c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: { props: "char charCode key keyCode".split(" "), filter: function(a, b) { return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a } },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(a, b) {
                var c, d, e, f = b.button,
                    g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: { load: { noBubble: !0 }, focus: { trigger: function() { if (this !== cb() && this.focus) try { return this.focus(), !1 } catch (a) {} }, delegateType: "focusin" }, blur: { trigger: function() { return this === cb() && this.blur ? (this.blur(), !1) : void 0 }, delegateType: "focusout" }, click: { trigger: function() { return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0 }, _default: function(a) { return m.nodeName(a.target, "a") } }, beforeunload: { postDispatch: function(a) { void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result) } } },
        simulate: function(a, b, c, d) {
            var e = m.extend(new m.Event, c, { type: a, isSimulated: !0, originalEvent: {} });
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function(a, b, c) { a.removeEventListener && a.removeEventListener(b, c, !1) } : function(a, b, c) {
        var d = "on" + b;
        a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
    }, m.Event = function(a, b) { return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? ab : bb) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b) }, m.Event.prototype = {
        isDefaultPrevented: bb,
        isPropagationStopped: bb,
        isImmediatePropagationStopped: bb,
        preventDefault: function() {
            var a = this.originalEvent;
            this.isDefaultPrevented = ab, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function() {
            var a = this.originalEvent;
            this.isPropagationStopped = ab, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = ab, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function(a, b) {
        m.event.special[a] = {
            delegateType: b,
            bindType: b,
            handle: function(a) {
                var c, d = this,
                    e = a.relatedTarget,
                    f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function() {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function(a) {
                var b = a.target,
                    c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function(a) { a._submit_bubble = !0 }), m._data(c, "submitBubbles", !0))
            })
        },
        postDispatch: function(a) { a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0)) },
        teardown: function() { return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit") }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function() {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function(a) { "checked" === a.originalEvent.propertyName && (this._just_changed = !0) }), m.event.add(this, "click._change", function(a) { this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0) })), !1) : void m.event.add(this, "beforeactivate._change", function(a) {
                var b = a.target;
                X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function(a) {!this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0) }), m._data(b, "changeBubbles", !0))
            })
        },
        handle: function(a) { var b = a.target; return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0 },
        teardown: function() { return m.event.remove(this, "._change"), !X.test(this.nodeName) }
    }), k.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function(a, b) {
        var c = function(a) { m.event.simulate(b, a.target, m.event.fix(a), !0) };
        m.event.special[b] = {
            setup: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            },
            teardown: function() {
                var d = this.ownerDocument || this,
                    e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function(a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) { "string" != typeof b && (c = c || b, b = void 0); for (f in a) this.on(f, b, c, a[f], e); return this }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = bb;
            else if (!d) return this;
            return 1 === e && (g = d, d = function(a) { return m().off(a), g.apply(this, arguments) }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function() { m.event.add(this, a, d, c, b) })
        },
        one: function(a, b, c, d) { return this.on(a, b, c, d, 1) },
        off: function(a, b, c) { var d, e; if (a && a.preventDefault && a.handleObj) return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this; if ("object" == typeof a) { for (e in a) this.off(e, b, a[e]); return this } return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = bb), this.each(function() { m.event.remove(this, a, c, b) }) },
        trigger: function(a, b) { return this.each(function() { m.event.trigger(a, b, this) }) },
        triggerHandler: function(a, b) { var c = this[0]; return c ? m.event.trigger(a, b, c, !0) : void 0 }
    });

    function db(a) {
        var b = eb.split("|"),
            c = a.createDocumentFragment();
        if (c.createElement)
            while (b.length) c.createElement(b.pop());
        return c
    }
    var eb = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
        fb = / jQuery\d+="(?:null|\d+)"/g,
        gb = new RegExp("<(?:" + eb + ")[\\s/>]", "i"),
        hb = /^\s+/,
        ib = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
        jb = /<([\w:]+)/,
        kb = /<tbody/i,
        lb = /<|&#?\w+;/,
        mb = /<(?:script|style|link)/i,
        nb = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ob = /^$|\/(?:java|ecma)script/i,
        pb = /^true\/(.*)/,
        qb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        rb = { option: [1, "<select multiple='multiple'>", "</select>"], legend: [1, "<fieldset>", "</fieldset>"], area: [1, "<map>", "</map>"], param: [1, "<object>", "</object>"], thead: [1, "<table>", "</table>"], tr: [2, "<table><tbody>", "</tbody></table>"], col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"] },
        sb = db(y),
        tb = sb.appendChild(y.createElement("div"));
    rb.optgroup = rb.option, rb.tbody = rb.tfoot = rb.colgroup = rb.caption = rb.thead, rb.th = rb.td;

    function ub(a, b) {
        var c, d, e = 0,
            f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)
            for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ub(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function vb(a) { W.test(a.type) && (a.defaultChecked = a.checked) }

    function wb(a, b) { return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a }

    function xb(a) { return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a }

    function yb(a) { var b = pb.exec(a.type); return b ? a.type = b[1] : a.removeAttribute("type"), a }

    function zb(a, b) { for (var c, d = 0; null != (c = a[d]); d++) m._data(c, "globalEval", !b || m._data(b[d], "globalEval")) }

    function Ab(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a),
                g = m._data(b, f),
                h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)
                    for (d = 0, e = h[c].length; e > d; d++) m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Bb(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events) m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xb(b).text = a.text, yb(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }
    m.extend({
        clone: function(a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !gb.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (tb.innerHTML = a.outerHTML, tb.removeChild(f = tb.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))
                for (d = ub(f), h = ub(a), g = 0; null != (e = h[g]); ++g) d[g] && Bb(e, d[g]);
            if (b)
                if (c)
                    for (h = h || ub(a), d = d || ub(f), g = 0; null != (e = h[g]); g++) Ab(e, d[g]);
                else Ab(a, f);
            return d = ub(f, "script"), d.length > 0 && zb(d, !i && ub(a, "script")), d = h = e = null, f
        },
        buildFragment: function(a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = db(b), p = [], q = 0; n > q; q++)
                if (f = a[q], f || 0 === f)
                    if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f);
                    else if (lb.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (jb.exec(f) || ["", ""])[1].toLowerCase(), l = rb[i] || rb._default, h.innerHTML = l[1] + f.replace(ib, "<$1></$2>") + l[2], e = l[0];
                while (e--) h = h.lastChild;
                if (!k.leadingWhitespace && hb.test(f) && p.push(b.createTextNode(hb.exec(f)[0])), !k.tbody) { f = "table" !== i || kb.test(f) ? "<table>" !== l[1] || kb.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; while (e--) m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j) }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild) h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ub(p, "input"), vb), q = 0;
            while (f = p[q++])
                if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ub(o.appendChild(f), "script"), g && zb(h), c)) { e = 0; while (f = h[e++]) ob.test(f.type || "") && c.push(f) }
            return h = null, o
        },
        cleanData: function(a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)
                if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                    if (g.events)
                        for (e in g.events) n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                    j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
                }
        }
    }), m.fn.extend({
        text: function(a) { return V(this, function(a) { return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a)) }, null, a, arguments.length) },
        append: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.appendChild(a)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments, function(a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wb(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        },
        before: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this) }) },
        after: function() { return this.domManip(arguments, function(a) { this.parentNode && this.parentNode.insertBefore(a, this.nextSibling) }) },
        remove: function(a, b) { for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || m.cleanData(ub(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && zb(ub(c, "script")), c.parentNode.removeChild(c)); return this },
        empty: function() {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ub(a, !1));
                while (a.firstChild) a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        },
        clone: function(a, b) { return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function() { return m.clone(this, a, b) }) },
        html: function(a) {
            return V(this, function(a) {
                var b = this[0] || {},
                    c = 0,
                    d = this.length;
                if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(fb, "") : void 0;
                if (!("string" != typeof a || mb.test(a) || !k.htmlSerialize && gb.test(a) || !k.leadingWhitespace && hb.test(a) || rb[(jb.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ib, "<$1></$2>");
                    try {
                        for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ub(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {}
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        },
        replaceWith: function() { var a = arguments[0]; return this.domManip(arguments, function(b) { a = this.parentNode, m.cleanData(ub(this)), a && a.replaceChild(b, this) }), a && (a.length || a.nodeType) ? this : this.remove() },
        detach: function(a) { return this.remove(a, !0) },
        domManip: function(a, b) {
            a = e.apply([], a);
            var c, d, f, g, h, i, j = 0,
                l = this.length,
                n = this,
                o = l - 1,
                p = a[0],
                q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && nb.test(p)) return this.each(function(c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ub(i, "script"), xb), f = g.length; l > j; j++) d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ub(d, "script"))), b.call(this[j], d, j);
                if (f)
                    for (h = g[g.length - 1].ownerDocument, m.map(g, yb), j = 0; f > j; j++) d = g[j], ob.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qb, "")));
                i = c = null
            }
            return this
        }
    }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function(a, b) { m.fn[a] = function(a) { for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++) c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get()); return this.pushStack(e) } });
    var Cb, Db = {};

    function Eb(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body),
            f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fb(a) {
        var b = y,
            c = Db[a];
        return c || (c = Eb(a, b), "none" !== c && c || (Cb = (Cb || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Cb[0].contentWindow || Cb[0].contentDocument).document, b.write(), b.close(), c = Eb(a, b), Cb.detach()), Db[a] = c), c
    }! function() {
        var a;
        k.shrinkWrapBlocks = function() {
            if (null != a) return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Gb = /^margin/,
        Hb = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"),
        Ib, Jb, Kb = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ib = function(a) { return a.ownerDocument.defaultView.getComputedStyle(a, null) }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Hb.test(g) && Gb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + "" }) : y.documentElement.currentStyle && (Ib = function(a) { return a.currentStyle }, Jb = function(a, b, c) { var d, e, f, g, h = a.style; return c = c || Ib(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Hb.test(g) && !Kb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto" });

    function Lb(a, b) { return { get: function() { var c = a(); if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments) } } }! function() {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, { reliableHiddenOffsets: function() { return null == g && i(), g }, boxSizingReliable: function() { return null == f && i(), f }, pixelPosition: function() { return null == e && i(), e }, reliableMarginRight: function() { return null == h && i(), h } });

            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || { width: "4px" }).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function(a, b, c, d) {
        var e, f, g = {};
        for (f in b) g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b) a.style[f] = g[f];
        return e
    };
    var Mb = /alpha\([^)]*\)/i,
        Nb = /opacity\s*=\s*([^)]*)/,
        Ob = /^(none|table(?!-c[ea]).+)/,
        Pb = new RegExp("^(" + S + ")(.*)$", "i"),
        Qb = new RegExp("^([+-])=(" + S + ")", "i"),
        Rb = { position: "absolute", visibility: "hidden", display: "block" },
        Sb = { letterSpacing: "0", fontWeight: "400" },
        Tb = ["Webkit", "O", "Moz", "ms"];

    function Ub(a, b) {
        if (b in a) return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1),
            d = b,
            e = Tb.length;
        while (e--)
            if (b = Tb[e] + c, b in a) return b;
        return d
    }

    function Vb(a, b) { for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fb(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display")))); for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none")); return a }

    function Wb(a, b, c) { var d = Pb.exec(b); return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b }

    function Xb(a, b, c, d, e) { for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e))); return g }

    function Yb(a, b, c) {
        var d = !0,
            e = "width" === b ? a.offsetWidth : a.offsetHeight,
            f = Ib(a),
            g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Jb(a, b, f), (0 > e || null == e) && (e = a.style[b]), Hb.test(e)) return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xb(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }
    m.extend({
        cssHooks: { opacity: { get: function(a, b) { if (b) { var c = Jb(a, "opacity"); return "" === c ? "1" : c } } } },
        cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
        cssProps: { "float": k.cssFloat ? "cssFloat" : "styleFloat" },
        style: function(a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b),
                    i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ub(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try { i[b] = c } catch (j) {}
            }
        },
        css: function(a, b, c, d) { var e, f, g, h = m.camelCase(b); return b = m.cssProps[h] || (m.cssProps[h] = Ub(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Jb(a, b, d)), "normal" === f && b in Sb && (f = Sb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f }
    }), m.each(["height", "width"], function(a, b) { m.cssHooks[b] = { get: function(a, c, d) { return c ? Ob.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Rb, function() { return Yb(a, b, d) }) : Yb(a, b, d) : void 0 }, set: function(a, c, d) { var e = d && Ib(a); return Wb(a, c, d ? Xb(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0) } } }), k.opacity || (m.cssHooks.opacity = {
        get: function(a, b) { return Nb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : "" },
        set: function(a, b) {
            var c = a.style,
                d = a.currentStyle,
                e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
                f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Mb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Mb.test(f) ? f.replace(Mb, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = Lb(k.reliableMarginRight, function(a, b) { return b ? m.swap(a, { display: "inline-block" }, Jb, [a, "marginRight"]) : void 0 }), m.each({ margin: "", padding: "", border: "Width" }, function(a, b) { m.cssHooks[a + b] = { expand: function(c) { for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + T[d] + b] = f[d] || f[d - 2] || f[0]; return e } }, Gb.test(a) || (m.cssHooks[a + b].set = Wb) }), m.fn.extend({
        css: function(a, b) {
            return V(this, function(a, b, c) {
                var d, e, f = {},
                    g = 0;
                if (m.isArray(b)) { for (d = Ib(a), e = b.length; e > g; g++) f[b[g]] = m.css(a, b[g], !1, d); return f }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        },
        show: function() { return Vb(this, !0) },
        hide: function() { return Vb(this) },
        toggle: function(a) { return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() { U(this) ? m(this).show() : m(this).hide() }) }
    });

    function Zb(a, b, c, d, e) { return new Zb.prototype.init(a, b, c, d, e) }
    m.Tween = Zb, Zb.prototype = {
        constructor: Zb,
        init: function(a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        },
        cur: function() { var a = Zb.propHooks[this.prop]; return a && a.get ? a.get(this) : Zb.propHooks._default.get(this) },
        run: function(a) { var b, c = Zb.propHooks[this.prop]; return this.pos = b = this.options.duration ? m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Zb.propHooks._default.set(this), this }
    }, Zb.prototype.init.prototype = Zb.prototype, Zb.propHooks = { _default: { get: function(a) { var b; return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop] }, set: function(a) { m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now } } }, Zb.propHooks.scrollTop = Zb.propHooks.scrollLeft = { set: function(a) { a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now) } }, m.easing = { linear: function(a) { return a }, swing: function(a) { return .5 - Math.cos(a * Math.PI) / 2 } }, m.fx = Zb.prototype.init, m.fx.step = {};
    var $b, _b, ac = /^(?:toggle|show|hide)$/,
        bc = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"),
        cc = /queueHooks$/,
        dc = [ic],
        ec = {
            "*": [function(a, b) {
                var c = this.createTween(a, b),
                    d = c.cur(),
                    e = bc.exec(b),
                    f = e && e[3] || (m.cssNumber[a] ? "" : "px"),
                    g = (m.cssNumber[a] || "px" !== f && +d) && bc.exec(m.css(c.elem, a)),
                    h = 1,
                    i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3], e = e || [], g = +d || 1;
                    do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
            }]
        };

    function fc() { return setTimeout(function() { $b = void 0 }), $b = m.now() }

    function gc(a, b) {
        var c, d = { height: a },
            e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hc(a, b, c) {
        for (var d, e = (ec[b] || []).concat(ec["*"]), f = 0, g = e.length; g > f; f++)
            if (d = e[f].call(c, b, a)) return d
    }

    function ic(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this,
            o = {},
            p = a.style,
            q = a.nodeType && U(a),
            r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function() { h.unqueued || i() }), h.unqueued++, n.always(function() { n.always(function() { h.unqueued--, m.queue(a, "fx").length || h.empty.fire() }) })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fb(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fb(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function() { p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2] }));
        for (d in b)
            if (e = b[d], ac.exec(e)) {
                if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                    if ("show" !== e || !r || void 0 === r[d]) continue;
                    q = !0
                }
                o[d] = r && r[d] || m.style(a, d)
            } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fb(a.nodeName) : j) && (p.display = j);
        else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function() { m(a).hide() }), n.done(function() {
                var b;
                m._removeData(a, "fxshow");
                for (b in o) m.style(a, b, o[b])
            });
            for (d in o) g = hc(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jc(a, b) {
        var c, d, e, f, g;
        for (c in a)
            if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) { f = g.expand(f), delete a[d]; for (c in f) c in a || (a[c] = f[c], b[c] = e) } else b[d] = e
    }

    function kc(a, b, c) {
        var d, e, f = 0,
            g = dc.length,
            h = m.Deferred().always(function() { delete i.elem }),
            i = function() { if (e) return !1; for (var b = $b || fc(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f); return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1) },
            j = h.promise({
                elem: a,
                props: m.extend({}, b),
                opts: m.extend(!0, { specialEasing: {} }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: $b || fc(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) { var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing); return j.tweens.push(d), d },
                stop: function(b) {
                    var c = 0,
                        d = b ? j.tweens.length : 0;
                    if (e) return this;
                    for (e = !0; d > c; c++) j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
                }
            }),
            k = j.props;
        for (jc(k, j.opts.specialEasing); g > f; f++)
            if (d = dc[f].call(j, a, k, j.opts)) return d;
        return m.map(k, hc, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, { elem: a, anim: j, queue: j.opts.queue })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }
    m.Animation = m.extend(kc, { tweener: function(a, b) { m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" "); for (var c, d = 0, e = a.length; e > d; d++) c = a[d], ec[c] = ec[c] || [], ec[c].unshift(b) }, prefilter: function(a, b) { b ? dc.unshift(a) : dc.push(a) } }), m.speed = function(a, b, c) { var d = a && "object" == typeof a ? m.extend({}, a) : { complete: c || !c && b || m.isFunction(a) && a, duration: a, easing: c && b || b && !m.isFunction(b) && b }; return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function() { m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue) }, d }, m.fn.extend({
            fadeTo: function(a, b, c, d) { return this.filter(U).css("opacity", 0).show().end().animate({ opacity: b }, a, c, d) },
            animate: function(a, b, c, d) {
                var e = m.isEmptyObject(a),
                    f = m.speed(b, c, d),
                    g = function() {
                        var b = kc(this, m.extend({}, a), f);
                        (e || m._data(this, "finish")) && b.stop(!0)
                    };
                return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop, b(c)
                };
                return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function() {
                    var b = !0,
                        e = null != a && a + "queueHooks",
                        f = m.timers,
                        g = m._data(this);
                    if (e) g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g) g[e] && g[e].stop && cc.test(e) && d(g[e]);
                    for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                    (b || !c) && m.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"), this.each(function() {
                    var b, c = m._data(this),
                        d = c[a + "queue"],
                        e = c[a + "queueHooks"],
                        f = m.timers,
                        g = d ? d.length : 0;
                    for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                    for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }), m.each(["toggle", "show", "hide"], function(a, b) {
            var c = m.fn[b];
            m.fn[b] = function(a, d, e) { return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gc(b, !0), a, d, e) }
        }), m.each({ slideDown: gc("show"), slideUp: gc("hide"), slideToggle: gc("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function(a, b) { m.fn[a] = function(a, c, d) { return this.animate(b, a, c, d) } }), m.timers = [], m.fx.tick = function() {
            var a, b = m.timers,
                c = 0;
            for ($b = m.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
            b.length || m.fx.stop(), $b = void 0
        }, m.fx.timer = function(a) { m.timers.push(a), a() ? m.fx.start() : m.timers.pop() }, m.fx.interval = 13, m.fx.start = function() { _b || (_b = setInterval(m.fx.tick, m.fx.interval)) }, m.fx.stop = function() { clearInterval(_b), _b = null }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function(a, b) {
            return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() { clearTimeout(d) }
            })
        },
        function() {
            var a, b, c, d, e;
            b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
        }();
    var lc = /\r/g;
    m.fn.extend({
        val: function(a) {
            var b, c, d, e = this[0]; {
                if (arguments.length) return d = m.isFunction(a), this.each(function(c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function(a) { return null == a ? "" : a + "" })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e) return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lc, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: { get: function(a) { var b = m.find.attr(a, "value"); return null != b ? b : m.trim(m.text(a)) } },
            select: {
                get: function(a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                        if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                            if (b = m(c).val(), f) return b;
                            g.push(b)
                        }
                    return g
                },
                set: function(a, b) {
                    var c, d, e = a.options,
                        f = m.makeArray(b),
                        g = e.length;
                    while (g--)
                        if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0) try { d.selected = c = !0 } catch (h) { d.scrollHeight } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function() { m.valHooks[this] = { set: function(a, b) { return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0 } }, k.checkOn || (m.valHooks[this].get = function(a) { return null === a.getAttribute("value") ? "on" : a.value }) });
    var mc, nc, oc = m.expr.attrHandle,
        pc = /^(?:checked|selected)$/i,
        qc = k.getSetAttribute,
        rc = k.input;
    m.fn.extend({ attr: function(a, b) { return V(this, m.attr, a, b, arguments.length > 1) }, removeAttr: function(a) { return this.each(function() { m.removeAttr(this, a) }) } }), m.extend({
        attr: function(a, b, c) { var d, e, f = a.nodeType; if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nc : mc)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b)) },
        removeAttr: function(a, b) {
            var c, d, e = 0,
                f = b && b.match(E);
            if (f && 1 === a.nodeType)
                while (c = f[e++]) d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rc && qc || !pc.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qc ? c : d)
        },
        attrHooks: { type: { set: function(a, b) { if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) { var c = a.value; return a.setAttribute("type", b), c && (a.value = c), b } } } }
    }), nc = { set: function(a, b, c) { return b === !1 ? m.removeAttr(a, c) : rc && qc || !pc.test(c) ? a.setAttribute(!qc && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c } }, m.each(m.expr.match.bool.source.match(/\w+/g), function(a, b) {
        var c = oc[b] || m.find.attr;
        oc[b] = rc && qc || !pc.test(b) ? function(a, b, d) { var e, f; return d || (f = oc[b], oc[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, oc[b] = f), e } : function(a, b, c) { return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null }
    }), rc && qc || (m.attrHooks.value = { set: function(a, b, c) { return m.nodeName(a, "input") ? void(a.defaultValue = b) : mc && mc.set(a, b, c) } }), qc || (mc = { set: function(a, b, c) { var d = a.getAttributeNode(c); return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0 } }, oc.id = oc.name = oc.coords = function(a, b, c) { var d; return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null }, m.valHooks.button = { get: function(a, b) { var c = a.getAttributeNode(b); return c && c.specified ? c.value : void 0 }, set: mc.set }, m.attrHooks.contenteditable = { set: function(a, b, c) { mc.set(a, "" === b ? !1 : b, c) } }, m.each(["width", "height"], function(a, b) { m.attrHooks[b] = { set: function(a, c) { return "" === c ? (a.setAttribute(b, "auto"), c) : void 0 } } })), k.style || (m.attrHooks.style = { get: function(a) { return a.style.cssText || void 0 }, set: function(a, b) { return a.style.cssText = b + "" } });
    var sc = /^(?:input|select|textarea|button|object)$/i,
        tc = /^(?:a|area)$/i;
    m.fn.extend({ prop: function(a, b) { return V(this, m.prop, a, b, arguments.length > 1) }, removeProp: function(a) { return a = m.propFix[a] || a, this.each(function() { try { this[a] = void 0, delete this[a] } catch (b) {} }) } }), m.extend({ propFix: { "for": "htmlFor", "class": "className" }, prop: function(a, b, c) { var d, e, f, g = a.nodeType; if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b] }, propHooks: { tabIndex: { get: function(a) { var b = m.find.attr(a, "tabindex"); return b ? parseInt(b, 10) : sc.test(a.nodeName) || tc.test(a.nodeName) && a.href ? 0 : -1 } } } }), k.hrefNormalized || m.each(["href", "src"], function(a, b) { m.propHooks[b] = { get: function(a) { return a.getAttribute(b, 4) } } }), k.optSelected || (m.propHooks.selected = { get: function(a) { var b = a.parentNode; return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() { m.propFix[this.toLowerCase()] = this }), k.enctype || (m.propFix.enctype = "encoding");
    var uc = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) { m(this).addClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : " ")) {
                        f = 0;
                        while (e = b[f++]) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                        g = m.trim(d), c.className !== g && (c.className = g)
                    }
            return this
        },
        removeClass: function(a) {
            var b, c, d, e, f, g, h = 0,
                i = this.length,
                j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a)) return this.each(function(b) { m(this).removeClass(a.call(this, b, this.className)) });
            if (j)
                for (b = (a || "").match(E) || []; i > h; h++)
                    if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(uc, " ") : "")) {
                        f = 0;
                        while (e = b[f++])
                            while (d.indexOf(" " + e + " ") >= 0) d = d.replace(" " + e + " ", " ");
                        g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
                    }
            return this
        },
        toggleClass: function(a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function(c) { m(this).toggleClass(a.call(this, c, this.className, b), b) } : function() {
                if ("string" === c) {
                    var b, d = 0,
                        e = m(this),
                        f = a.match(E) || [];
                    while (b = f[d++]) e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
            })
        },
        hasClass: function(a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(uc, " ").indexOf(b) >= 0) return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) { m.fn[b] = function(a, c) { return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b) } }), m.fn.extend({ hover: function(a, b) { return this.mouseenter(a).mouseleave(b || a) }, bind: function(a, b, c) { return this.on(a, null, b, c) }, unbind: function(a, b) { return this.off(a, null, b) }, delegate: function(a, b, c, d) { return this.on(b, a, c, d) }, undelegate: function(a, b, c) { return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c) } });
    var vc = m.now(),
        wc = /\?/,
        xc = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function(b) {
        if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
        var c, d = null,
            e = m.trim(b + "");
        return e && !m.trim(e.replace(xc, function(a, b, e, f) { return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "") })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function(b) { var c, d; if (!b || "string" != typeof b) return null; try { a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b)) } catch (e) { c = void 0 } return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c };
    var yc, zc, Ac = /#.*$/,
        Bc = /([?&])_=[^&]*/,
        Cc = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        Dc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        Ec = /^(?:GET|HEAD)$/,
        Fc = /^\/\//,
        Gc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        Hc = {},
        Ic = {},
        Jc = "*/".concat("*");
    try { zc = location.href } catch (Kc) { zc = y.createElement("a"), zc.href = "", zc = zc.href }
    yc = Gc.exec(zc.toLowerCase()) || [];

    function Lc(a) {
        return function(b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0,
                f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))
                while (d = f[e++]) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mc(a, b, c, d) {
        var e = {},
            f = a === Ic;

        function g(h) { var i; return e[h] = !0, m.each(a[h] || [], function(a, h) { var j = h(b, c, d); return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1) }), i }
        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nc(a, b) { var c, d, e = m.ajaxSettings.flatOptions || {}; for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]); return c && m.extend(!0, a, c), a }

    function Oc(a, b, c) {
        var d, e, f, g, h = a.contents,
            i = a.dataTypes;
        while ("*" === i[0]) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)
            for (g in h)
                if (h[g] && h[g].test(e)) { i.unshift(g); break }
        if (i[0] in c) f = i[0];
        else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) { f = g; break }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pc(a, b, c, d) {
        var e, f, g, h, i, j = {},
            k = a.dataTypes.slice();
        if (k[1])
            for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)
            if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
                if ("*" === f) f = i;
                else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)
                for (e in j)
                    if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) { g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1])); break }
            if (g !== !0)
                if (g && a["throws"]) b = g(b);
                else try { b = g(b) } catch (l) { return { state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f } }
        }
        return { state: "success", data: b }
    }
    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: { url: zc, type: "GET", isLocal: Dc.test(yc[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": Jc, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } },
        ajaxSetup: function(a, b) { return b ? Nc(Nc(a, m.ajaxSettings), b) : Nc(m.ajaxSettings, a) },
        ajaxPrefilter: Lc(Hc),
        ajaxTransport: Lc(Ic),
        ajax: function(a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b),
                l = k.context || k,
                n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event,
                o = m.Deferred(),
                p = m.Callbacks("once memory"),
                q = k.statusCode || {},
                r = {},
                s = {},
                t = 0,
                u = "canceled",
                v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!j) { j = {}; while (b = Cc.exec(f)) j[b[1].toLowerCase()] = b[2] }
                            b = j[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() { return 2 === t ? f : null },
                    setRequestHeader: function(a, b) { var c = a.toLowerCase(); return t || (a = s[c] = s[c] || a, r[a] = b), this },
                    overrideMimeType: function(a) { return t || (k.mimeType = a), this },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a) q[b] = [q[b], a[b]];
                            else v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) { var b = a || u; return i && i.abort(b), x(0, b), this }
                };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zc) + "").replace(Ac, "").replace(Fc, yc[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gc.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yc[1] && c[2] === yc[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yc[3] || ("http:" === yc[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mc(Hc, k, b, v), 2 === t) return v;
            h = k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Ec.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wc.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bc.test(e) ? e.replace(Bc, "$1_=" + vc++) : e + (wc.test(e) ? "&" : "?") + "_=" + vc++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jc + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers) v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t)) return v.abort();
            u = "abort";
            for (d in { success: 1, error: 1, complete: 1 }) v[d](k[d]);
            if (i = Mc(Ic, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function() { v.abort("timeout") }, k.timeout));
                try { t = 1, i.send(r, x) } catch (w) {
                    if (!(2 > t)) throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");

            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Oc(k, v, c)), u = Pc(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }
            return v
        },
        getJSON: function(a, b, c) { return m.get(a, b, c, "json") },
        getScript: function(a, b) { return m.get(a, void 0, b, "script") }
    }), m.each(["get", "post"], function(a, b) { m[b] = function(a, c, d, e) { return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({ url: a, type: b, dataType: e, data: c, success: d }) } }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) { m.fn[b] = function(a) { return this.on(b, a) } }), m._evalUrl = function(a) { return m.ajax({ url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0 }) }, m.fn.extend({
        wrapAll: function(a) {
            if (m.isFunction(a)) return this.each(function(b) { m(this).wrapAll(a.call(this, b)) });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function() { var a = this; while (a.firstChild && 1 === a.firstChild.nodeType) a = a.firstChild; return a }).append(this)
            }
            return this
        },
        wrapInner: function(a) {
            return this.each(m.isFunction(a) ? function(b) { m(this).wrapInner(a.call(this, b)) } : function() {
                var b = m(this),
                    c = b.contents();
                c.length ? c.wrapAll(a) : b.append(a)
            })
        },
        wrap: function(a) { var b = m.isFunction(a); return this.each(function(c) { m(this).wrapAll(b ? a.call(this, c) : a) }) },
        unwrap: function() { return this.parent().each(function() { m.nodeName(this, "body") || m(this).replaceWith(this.childNodes) }).end() }
    }), m.expr.filters.hidden = function(a) { return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display")) }, m.expr.filters.visible = function(a) { return !m.expr.filters.hidden(a) };
    var Qc = /%20/g,
        Rc = /\[\]$/,
        Sc = /\r?\n/g,
        Tc = /^(?:submit|button|image|reset|file)$/i,
        Uc = /^(?:input|select|textarea|keygen)/i;

    function Vc(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function(b, e) { c || Rc.test(a) ? d(a, e) : Vc(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d) });
        else if (c || "object" !== m.type(b)) d(a, b);
        else
            for (e in b) Vc(a + "[" + e + "]", b[e], c, d)
    }
    m.param = function(a, b) {
        var c, d = [],
            e = function(a, b) { b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b) };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function() { e(this.name, this.value) });
        else
            for (c in a) Vc(c, a[c], b, e);
        return d.join("&").replace(Qc, "+")
    }, m.fn.extend({ serialize: function() { return m.param(this.serializeArray()) }, serializeArray: function() { return this.map(function() { var a = m.prop(this, "elements"); return a ? m.makeArray(a) : this }).filter(function() { var a = this.type; return this.name && !m(this).is(":disabled") && Uc.test(this.nodeName) && !Tc.test(a) && (this.checked || !W.test(a)) }).map(function(a, b) { var c = m(this).val(); return null == c ? null : m.isArray(c) ? m.map(c, function(a) { return { name: b.name, value: a.replace(Sc, "\r\n") } }) : { name: b.name, value: c.replace(Sc, "\r\n") } }).get() } }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function() { return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zc() || $c() } : Zc;
    var Wc = 0,
        Xc = {},
        Yc = m.ajaxSettings.xhr();
    a.ActiveXObject && m(a).on("unload", function() { for (var a in Xc) Xc[a](void 0, !0) }), k.cors = !!Yc && "withCredentials" in Yc, Yc = k.ajax = !!Yc, Yc && m.ajaxTransport(function(a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function(c, d) {
                    var e, f = a.xhr(),
                        g = ++Wc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
                        for (e in a.xhrFields) f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function(c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))
                            if (delete Xc[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort();
                            else {
                                j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                                try { i = f.statusText } catch (k) { i = "" }
                                h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                            }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xc[g] = b : b()
                },
                abort: function() { b && b(void 0, !0) }
            }
        }
    });

    function Zc() { try { return new a.XMLHttpRequest } catch (b) {} }

    function $c() { try { return new a.ActiveXObject("Microsoft.XMLHTTP") } catch (b) {} }
    m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function(a) { return m.globalEval(a), a } } }), m.ajaxPrefilter("script", function(a) { void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1) }), m.ajaxTransport("script", function(a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function(d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function(a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                },
                abort: function() { b && b.onload(void 0, !0) }
            }
        }
    });
    var _c = [],
        ad = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({ jsonp: "callback", jsonpCallback: function() { var a = _c.pop() || m.expando + "_" + vc++; return this[a] = !0, a } }), m.ajaxPrefilter("json jsonp", function(b, c, d) { var e, f, g, h = b.jsonp !== !1 && (ad.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ad.test(b.data) && "data"); return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ad, "$1" + e) : b.jsonp !== !1 && (b.url += (wc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function() { return g || m.error(e + " was not called"), g[0] }, b.dataTypes[0] = "json", f = a[e], a[e] = function() { g = arguments }, d.always(function() { a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _c.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0 }), "script") : void 0 }), m.parseHTML = function(a, b, c) {
        if (!a || "string" != typeof a) return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a),
            e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bd = m.fn.load;
    m.fn.load = function(a, b, c) {
        if ("string" != typeof a && bd) return bd.apply(this, arguments);
        var d, e, f, g = this,
            h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({ url: a, type: f, dataType: "html", data: b }).done(function(a) { e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a) }).complete(c && function(a, b) { g.each(c, e || [a.responseText, b, a]) }), this
    }, m.expr.filters.animated = function(a) { return m.grep(m.timers, function(b) { return a === b.elem }).length };
    var cd = a.document.documentElement;

    function dd(a) { return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1 }
    m.offset = {
        setOffset: function(a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"),
                l = m(a),
                n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function(a) {
            if (arguments.length) return void 0 === a ? this : this.each(function(b) { m.offset.setOffset(this, a, b) });
            var b, c, d = { top: 0, left: 0 },
                e = this[0],
                f = e && e.ownerDocument;
            if (f) return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dd(f), { top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0), left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0) }) : d
        },
        position: function() {
            if (this[0]) {
                var a, b, c = { top: 0, left: 0 },
                    d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), { top: b.top - c.top - m.css(d, "marginTop", !0), left: b.left - c.left - m.css(d, "marginLeft", !0) }
            }
        },
        offsetParent: function() { return this.map(function() { var a = this.offsetParent || cd; while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position")) a = a.offsetParent; return a || cd }) }
    }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function(a, b) {
        var c = /Y/.test(b);
        m.fn[a] = function(d) { return V(this, function(a, d, e) { var f = dd(a); return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e) }, a, d, arguments.length, null) }
    }), m.each(["top", "left"], function(a, b) { m.cssHooks[b] = Lb(k.pixelPosition, function(a, c) { return c ? (c = Jb(a, b), Hb.test(c) ? m(a).position()[b] + "px" : c) : void 0 }) }), m.each({ Height: "height", Width: "width" }, function(a, b) {
        m.each({ padding: "inner" + a, content: b, "": "outer" + a }, function(c, d) {
            m.fn[d] = function(d, e) {
                var f = arguments.length && (c || "boolean" != typeof d),
                    g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function(b, c, d) { var e; return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g) }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function() { return this.length }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function() { return m });
    var ed = a.jQuery,
        fd = a.$;
    return m.noConflict = function(b) { return a.$ === m && (a.$ = fd), b && a.jQuery === m && (a.jQuery = ed), m }, typeof b === K && (a.jQuery = a.$ = m), m
});
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// jquery=1.11.1.min.js end
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>



// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// jquery.form-validator.js start
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>


(function($) {

    'use strict';

    var $window = $(window),
        _getInputParentContainer = function($elem) {
            if ($elem.valAttr('error-msg-container')) {
                return $($elem.valAttr('error-msg-container'));
            } else {
                var $parent = $elem.parent();
                if (!$parent.hasClass('form-group')) {
                    var $formGroup = $parent.closest('.form-group');
                    if ($formGroup.length) {
                        return $formGroup.eq(0);
                    }
                }
                return $parent;
            }
        },
        _applyErrorStyle = function($elem, conf) {
            $elem
                .addClass(conf.errorElementClass)
                .removeClass('valid');

            _getInputParentContainer($elem)
                .addClass(conf.inputParentClassOnError)
                .removeClass(conf.inputParentClassOnSuccess);

            if (conf.borderColorOnError !== '') {
                $elem.css('border-color', conf.borderColorOnError);
            }
        },
        _removeErrorStyle = function($elem, conf) {
            $elem.each(function() {
                var $this = $(this);

                _setInlineErrorMessage($this, '', conf, conf.errorMessagePosition);

                $this
                    .removeClass('valid')
                    .removeClass(conf.errorElementClass)
                    .css('border-color', '');

                _getInputParentContainer($this)
                    .removeClass(conf.inputParentClassOnError)
                    .removeClass(conf.inputParentClassOnSuccess)
                    .find('.' + conf.errorMessageClass) // remove inline span holding error message
                    .remove();
            });
        },
        _setInlineErrorMessage = function($input, mess, conf, $messageContainer) {
            var custom = document.getElementById($input.attr('name') + '_err_msg'),
                setErrorMessage = function($elem) {
                    $window.trigger('validationErrorDisplay', [$input, $elem])
                    $elem.html(mess);
                };

            if (custom) {
                setErrorMessage($(custom));
            } else if (typeof $messageContainer == 'object') {
                var $found = false;
                $messageContainer.find('.' + conf.errorMessageClass).each(function() {
                    if (this.inputReferer == $input[0]) {
                        $found = $(this);
                        return false;
                    }
                });
                if ($found) {
                    if (!mess) {
                        $found.remove();
                    } else {
                        setErrorMessage($found);
                    }
                } else {
                    var $mess = $('<div class="' + conf.errorMessageClass + '"></div>');
                    setErrorMessage($mess);
                    $mess[0].inputReferer = $input[0];
                    $messageContainer.prepend($mess);
                }
            } else {

                var $parent = _getInputParentContainer($input),
                    $mess = $parent.find('.' + conf.errorMessageClass + '.help-block');

                if ($mess.length == 0) {
                    $mess = $('<span></span>').addClass('help-block').addClass(conf.errorMessageClass);
                    $mess.appendTo($parent);
                }

                setErrorMessage($mess);
            }
        },
        _templateMessage = function($form, title, errorMessages, conf) {
            var messages = conf.errorMessageTemplate.messages.replace(/\{errorTitle\}/g, title),
                fields = [],
                container;

            $.each(errorMessages, function(i, msg) {
                fields.push(conf.errorMessageTemplate.field.replace(/\{msg\}/g, msg));
            });

            messages = messages.replace(/\{fields\}/g, fields.join(''));
            container = conf.errorMessageTemplate.container.replace(/\{errorMessageClass\}/g, conf.errorMessageClass);
            container = container.replace(/\{messages\}/g, messages);
            $form.children().eq(0).before(container);
        };

    /**
     * Assigns validateInputOnBlur function to elements blur event
     *
     * @param {Object} language Optional, will override $.formUtils.LANG
     * @param {Object} conf Optional, will override the default settings
     * @return {jQuery}
     */
    $.fn.validateOnBlur = function(language, conf) {
        this.find('*[data-validation]')
            .bind('blur.validation', function() {
                $(this).validateInputOnBlur(language, conf, true, 'blur');
            });
        if (conf.validateCheckboxRadioOnClick) {
            // bind click event to validate on click for radio & checkboxes for nice UX
            this.find('input[type=checkbox][data-validation],input[type=radio][data-validation]')
                .bind('click.validation', function() {
                    $(this).validateInputOnBlur(language, conf, true, 'click');
                });
        }

        return this;
    };

    /*
     * Assigns validateInputOnBlur function to elements custom event
     * @param {Object} language Optional, will override $.formUtils.LANG
     * @param {Object} settings Optional, will override the default settings
     * * @return {jQuery}
     */
    $.fn.validateOnEvent = function(language, settings) {
        this.find('*[data-validation-event]')
            .each(function() {
                var $el = $(this),
                    etype = $el.valAttr("event");
                if (etype) {
                    $el
                        .unbind(etype + ".validation")
                        .bind(etype + ".validation", function() {
                            $(this).validateInputOnBlur(language, settings, true, etype);
                        });
                }
            });
        return this;
    };

    /**
     * fade in help message when input gains focus
     * fade out when input loses focus
     * <input data-help="The info that I want to display for the user when input is focused" ... />
     *
     * @param {String} attrName - Optional, default is data-help
     * @return {jQuery}
     */
    $.fn.showHelpOnFocus = function(attrName) {
        if (!attrName) {
            attrName = 'data-validation-help';
        }

        // Remove previously added event listeners
        this.find('.has-help-txt')
            .valAttr('has-keyup-event', false)
            .removeClass('has-help-txt');

        // Add help text listeners
        this.find('textarea,input').each(function() {
            var $elem = $(this),
                className = 'jquery_form_help_' + ($elem.attr('name') || '').replace(/(:|\.|\[|\])/g, ""),
                help = $elem.attr(attrName);

            if (help) {
                $elem
                    .addClass('has-help-txt')
                    .unbind('focus.help')
                    .bind('focus.help', function() {
                        var $help = $elem.parent().find('.' + className);
                        if ($help.length == 0) {
                            $help = $('<span />')
                                .addClass(className)
                                .addClass('help')
                                .addClass('help-block') // twitter bs
                                .text(help)
                                .hide();

                            $elem.after($help);
                        }
                        $help.fadeIn();
                    })
                    .unbind('blur.help')
                    .bind('blur.help', function() {
                        $(this)
                            .parent()
                            .find('.' + className)
                            .fadeOut('slow');
                    });
            }
        });

        return this;
    };

    /**
     * Validate single input when it loses focus
     * shows error message in a span element
     * that is appended to the parent element
     *
     * @param {Object} [language] Optional, will override $.formUtils.LANG
     * @param {Object} [conf] Optional, will override the default settings
     * @param {Boolean} attachKeyupEvent Optional
     * @param {String} eventType
     * @return {jQuery}
     */
    $.fn.validateInputOnBlur = function(language, conf, attachKeyupEvent, eventType) {

        $.formUtils.eventType = eventType;

        if ((this.valAttr('suggestion-nr') || this.valAttr('postpone') || this.hasClass('hasDatepicker')) && !window.postponedValidation) {
            // This validation has to be postponed
            var _self = this,
                postponeTime = this.valAttr('postpone') || 200;

            window.postponedValidation = function() {
                _self.validateInputOnBlur(language, conf, attachKeyupEvent, eventType);
                window.postponedValidation = false;
            };

            setTimeout(function() {
                if (window.postponedValidation) {
                    window.postponedValidation();
                }
            }, postponeTime);

            return this;
        }

        language = $.extend({}, $.formUtils.LANG, language || {});
        _removeErrorStyle(this, conf);

        var $elem = this,
            $form = $elem.closest("form"),
            validationRule = $elem.attr(conf.validationRuleAttribute),
            result = $.formUtils.validateInput(
                $elem,
                language,
                conf, //$.extend({}, conf, {errorMessagePosition: 'element'}),
                $form,
                eventType
            );

        if (result.isValid) {
            if (result.shouldChangeDisplay) {
                $elem.addClass('valid');
                _getInputParentContainer($elem)
                    .addClass(conf.inputParentClassOnSuccess);
            }
        } else if (!result.isValid) {

            _applyErrorStyle($elem, conf);
            _setInlineErrorMessage($elem, result.errorMsg, conf, conf.errorMessagePosition);

            if (attachKeyupEvent) {
                $elem
                    .unbind('keyup.validation')
                    .bind('keyup.validation', function() {
                        $(this).validateInputOnBlur(language, conf, false, 'keyup');
                    });
            }
        }

        return this;
    };

    /**
     * Short hand for fetching/adding/removing element attributes
     * prefixed with 'data-validation-'
     *
     * @param {String} name
     * @param {String|Boolean} [val]
     * @return string|undefined
     * @protected
     */
    $.fn.valAttr = function(name, val) {
        if (val === undefined) {
            return this.attr('data-validation-' + name);
        } else if (val === false || val === null) {
            return this.removeAttr('data-validation-' + name);
        } else {
            if (name.length > 0) name = '-' + name;
            return this.attr('data-validation' + name, val);
        }
    };

    /**
     * Function that validates all inputs in active form
     *
     * @param {Object} [language]
     * @param {Object} [conf]
     * @param {Boolean} [displayError] Defaults to true
     */
    $.fn.isValid = function(language, conf, displayError) {

        if ($.formUtils.isLoadingModules) {
            var $self = this;
            setTimeout(function() {
                $self.isValid(language, conf, displayError);
            }, 200);
            return null;
        }

        conf = $.extend({}, $.formUtils.defaultConfig(), conf || {});
        language = $.extend({}, $.formUtils.LANG, language || {});
        displayError = displayError !== false;

        if ($.formUtils.errorDisplayPreventedWhenHalted) {
            // isValid() was called programmatically with argument displayError set
            // to false when the validation was halted by any of the validators
            delete $.formUtils.errorDisplayPreventedWhenHalted
            displayError = false;
        }

        $.formUtils.isValidatingEntireForm = true;
        $.formUtils.haltValidation = false;

        /**
         * Adds message to error message stack if not already in the message stack
         *
         * @param {String} mess
         * @para {jQuery} $elem
         */
        var addErrorMessage = function(mess, $elem) {
                if ($.inArray(mess, errorMessages) < 0) {
                    errorMessages.push(mess);
                }
                errorInputs.push($elem);
                $elem.attr('current-error', mess);
                if (displayError)
                    _applyErrorStyle($elem, conf);
            },

            /** Holds inputs (of type checkox or radio) already validated, to prevent recheck of mulitple checkboxes & radios */
            checkedInputs = [],

            /** Error messages for this validation */
            errorMessages = [],

            /** Input elements which value was not valid */
            errorInputs = [],

            /** Form instance */
            $form = this,

            /**
             * Tells whether or not to validate element with this name and of this type
             *
             * @param {String} name
             * @param {String} type
             * @return {Boolean}
             */
            ignoreInput = function(name, type) {
                if (type === 'submit' || type === 'button' || type == 'reset') {
                    return true;
                }
                return $.inArray(name, conf.ignore || []) > -1;
            };

        // Reset style and remove error class
        if (displayError) {
            $form.find('.' + conf.errorMessageClass + '.alert').remove();
            _removeErrorStyle($form.find('.' + conf.errorElementClass + ',.valid'), conf);
        }

        // Validate element values
        $form.find('input,textarea,select').filter(':not([type="submit"],[type="button"])').each(function() {
            var $elem = $(this),
                elementType = $elem.attr('type'),
                isCheckboxOrRadioBtn = elementType == 'radio' || elementType == 'checkbox',
                elementName = $elem.attr('name');

            if (!ignoreInput(elementName, elementType) && (!isCheckboxOrRadioBtn || $.inArray(elementName, checkedInputs) < 0)) {

                if (isCheckboxOrRadioBtn)
                    checkedInputs.push(elementName);

                var result = $.formUtils.validateInput(
                    $elem,
                    language,
                    conf,
                    $form,
                    'submit'
                );

                if (result.shouldChangeDisplay) {
                    if (!result.isValid) {
                        addErrorMessage(result.errorMsg, $elem);
                    } else if (result.isValid) {
                        $elem
                            .valAttr('current-error', false)
                            .addClass('valid');

                        _getInputParentContainer($elem)
                            .addClass(conf.inputParentClassOnSuccess);
                    }
                }
            }
        });

        // Run validation callback
        if (typeof conf.onValidate == 'function') {
            var errors = conf.onValidate($form);
            if ($.isArray(errors)) {
                $.each(errors, function(i, err) {
                    addErrorMessage(err.message, err.element);
                });
            } else if (errors && errors.element && errors.message) {
                addErrorMessage(errors.message, errors.element);
            }
        }

        // Reset form validation flag
        $.formUtils.isValidatingEntireForm = false;

        // Validation failed
        if (!$.formUtils.haltValidation && errorInputs.length > 0) {

            if (displayError) {
                // display all error messages in top of form
                if (conf.errorMessagePosition === 'top') {
                    _templateMessage($form, language.errorTitle, errorMessages, conf);
                }
                // Customize display message
                else if (conf.errorMessagePosition === 'custom') {
                    if (typeof conf.errorMessageCustom === 'function') {
                        conf.errorMessageCustom($form, language.errorTitle, errorMessages, conf);
                    }
                }
                // Display error message below input field or in defined container
                else {
                    $.each(errorInputs, function(i, $input) {
                        _setInlineErrorMessage($input, $input.attr('current-error'), conf, conf.errorMessagePosition);
                    });
                }

                if (conf.scrollToTopOnError) {
                    $window.scrollTop($form.offset().top - 20);
                }
            }

            return false;
        }

        if (!displayError && $.formUtils.haltValidation) {
            $.formUtils.errorDisplayPreventedWhenHalted = true;
        }

        return !$.formUtils.haltValidation;
    };

    /**
     * @deprecated
     * @param language
     * @param conf
     */
    $.fn.validateForm = function(language, conf) {
        if (window.console && typeof window.console.warn == 'function') {
            window.console.warn('Use of deprecated function $.validateForm, use $.isValid instead');
        }
        return this.isValid(language, conf, true);
    }

    /**
     * Plugin for displaying input length restriction
     */
    $.fn.restrictLength = function(maxLengthElement) {
        new $.formUtils.lengthRestriction(this, maxLengthElement);
        return this;
    };

    /**
     * Add suggestion dropdown to inputs having data-suggestions with a comma
     * separated string with suggestions
     * @param {Array} [settings]
     * @returns {jQuery}
     */
    $.fn.addSuggestions = function(settings) {
        var sugs = false;
        this.find('input').each(function() {
            var $field = $(this);

            sugs = $.split($field.attr('data-suggestions'));

            if (sugs.length > 0 && !$field.hasClass('has-suggestions')) {
                $.formUtils.suggest($field, sugs, settings);
                $field.addClass('has-suggestions');
            }
        });
        return this;
    };

    /**
     * A bit smarter split function
     * delimiter can be space, comma, dash or pipe
     * @param {String} val
     * @param {Function|String} [callback]
     * @returns {Array|void}
     */
    $.split = function(val, callback) {
        if (typeof callback != 'function') {
            // return array
            if (!val)
                return [];
            var values = [];
            $.each(val.split(callback ? callback : /[,|\-\s]\s*/g),
                function(i, str) {
                    str = $.trim(str);
                    if (str.length)
                        values.push(str);
                }
            );
            return values;
        } else if (val) {
            // exec callback func on each
            $.each(val.split(/[,|\-\s]\s*/g),
                function(i, str) {
                    str = $.trim(str);
                    if (str.length)
                        return callback(str, i);
                }
            );
        }
    };

    /**
     * Short hand function that makes the validation setup require less code
     * @param conf
     */
    $.validate = function(conf) {

        var defaultConf = $.extend($.formUtils.defaultConfig(), {
            form: 'form',
            /*
             * Enable custom event for validation
             */
            validateOnEvent: false,
            validateOnBlur: true,
            validateCheckboxRadioOnClick: true,
            showHelpOnFocus: true,
            addSuggestions: true,
            modules: '',
            onModulesLoaded: null,
            language: false,
            onSuccess: false,
            onError: false,
            onElementValidate: false,
        });

        conf = $.extend(defaultConf, conf || {});

        if (conf.lang && conf.lang != 'en') {
            var langModule = 'lang/' + conf.lang + '.js';
            conf.modules += conf.modules.length ? ',' + langModule : langModule;
        }

        // Add validation to forms
        $(conf.form).each(function(i, form) {

            var $form = $(form);
            $window.trigger('formValidationSetup', [$form, conf]);

            // Remove all event listeners previously added
            $form.find('.has-help-txt')
                .unbind('focus.validation')
                .unbind('blur.validation');

            $form
                .removeClass('has-validation-callback')
                .unbind('submit.validation')
                .unbind('reset.validation')
                .find('input[data-validation],textarea[data-validation]')
                .unbind('blur.validation');

            // Validate when submitted
            $form.bind('submit.validation', function() {

                    var $form = $(this);

                    if ($.formUtils.haltValidation) {
                        // pressing several times on submit button while validation is halted
                        return false;
                    }

                    if ($.formUtils.isLoadingModules) {
                        setTimeout(function() {
                            $form.trigger('submit.validation');
                        }, 200);
                        return false;
                    }

                    var valid = $form.isValid(conf.language, conf);

                    if ($.formUtils.haltValidation) {
                        // Validation got halted by one of the validators
                        return false;
                    } else {
                        if (valid && typeof conf.onSuccess == 'function') {
                            var callbackResponse = conf.onSuccess($form);
                            if (callbackResponse === false) {
                                return false;
                            }
                        } else if (!valid && typeof conf.onError == 'function') {
                            conf.onError($form);
                            return false;
                        } else {
                            return valid;
                        }
                    }
                })
                .bind('reset.validation', function() {
                    // remove messages
                    $(this).find('.' + conf.errorMessageClass + '.alert').remove();
                    _removeErrorStyle($(this).find('.' + conf.errorElementClass + ',.valid'), conf);
                })
                .addClass('has-validation-callback');

            if (conf.showHelpOnFocus) {
                $form.showHelpOnFocus();
            }
            if (conf.addSuggestions) {
                $form.addSuggestions();
            }
            if (conf.validateOnBlur) {
                $form.validateOnBlur(conf.language, conf);
                $form.bind('html5ValidationAttrsFound', function() {
                    $form.validateOnBlur(conf.language, conf);
                })
            }
            if (conf.validateOnEvent) {
                $form.validateOnEvent(conf.language, conf);
            }
        });

        if (conf.modules != '') {
            $.formUtils.loadModules(conf.modules, false, function() {
                if (typeof conf.onModulesLoaded == 'function') {
                    conf.onModulesLoaded();
                }
                $window.trigger('validatorsLoaded', [typeof conf.form == 'string' ? $(conf.form) : conf.form, conf]);
            });
        }
    };

    $.formUtils = {


        defaultConfig: function() {
            return {
                ignore: [], // Names of inputs not to be validated even though node attribute containing the validation rules tells us to
                errorElementClass: 'error', // Class that will be put on elements which value is invalid
                borderColorOnError: '#b94a48', // Border color of elements which value is invalid, empty string to not change border color
                errorMessageClass: 'form-error', // class name of div containing error messages when validation fails
                validationRuleAttribute: 'data-validation', // name of the attribute holding the validation rules
                validationErrorMsgAttribute: 'data-validation-error-msg', // define custom err msg inline with element
                errorMessagePosition: 'element', // Can be either "top" or "element" or "custom"
                errorMessageTemplate: {
                    container: '<div class="{errorMessageClass} alert alert-danger">{messages}</div>',
                    messages: '<strong>{errorTitle}</strong><ul>{fields}</ul>',
                    field: '<li>{msg}</li>'
                },
                errorMessageCustom: _templateMessage,
                scrollToTopOnError: true,
                dateFormat: 'yyyy-mm-dd',
                addValidClassOnAll: false, // whether or not to apply class="valid" even if the input wasn't validated
                decimalSeparator: '.',
                inputParentClassOnError: 'has-error', // twitter-bootstrap default class name
                inputParentClassOnSuccess: 'has-success' // twitter-bootstrap default class name
            }
        },

        /**
         * Available validators
         */
        validators: {},

        /**
         * Events triggered by form validator
         */
        _events: { load: [], valid: [], invalid: [] },

        /**
         * Setting this property to true during validation will
         * stop further validation from taking place and form will
         * not be sent
         */
        haltValidation: false,

        /**
         * This variable will be true $.fn.isValid() is called
         * and false when $.fn.validateOnBlur is called
         */
        isValidatingEntireForm: false,

        /**
         * Function for adding a validator
         * @param {Object} validator
         */
        addValidator: function(validator) {
            // prefix with "validate_" for backward compatibility reasons
            var name = validator.name.indexOf('validate_') === 0 ? validator.name : 'validate_' + validator.name;
            if (validator.validateOnKeyUp === undefined)
                validator.validateOnKeyUp = true;
            this.validators[name] = validator;
        },

        /**
         * @var {Boolean}
         */
        isLoadingModules: false,

        /**
         * @var {Object}
         */
        loadedModules: {},

        /**
         * @example
         *  $.formUtils.loadModules('date, security.dev');
         *
         * Will load the scripts date.js and security.dev.js from the
         * directory where this script resides. If you want to load
         * the modules from another directory you can use the
         * path argument.
         *
         * The script will be cached by the browser unless the module
         * name ends with .dev
         *
         * @param {String} modules - Comma separated string with module file names (no directory nor file extension)
         * @param {String} [path] - Optional, path where the module files is located if their not in the same directory as the core modules
         * @param {Boolean|function} [fireEvent] - Optional, whether or not to fire event 'load' when modules finished loading
         */
        loadModules: function(modules, path, fireEvent) {

            if (fireEvent === undefined)
                fireEvent = true;

            if ($.formUtils.isLoadingModules) {
                setTimeout(function() {
                    $.formUtils.loadModules(modules, path, fireEvent);
                });
                return;
            }

            var hasLoadedAnyModule = false,
                loadModuleScripts = function(modules, path) {

                    var moduleList = $.split(modules),
                        numModules = moduleList.length,
                        moduleLoadedCallback = function() {
                            numModules--;
                            if (numModules == 0) {
                                $.formUtils.isLoadingModules = false;
                                if (fireEvent && hasLoadedAnyModule) {
                                    if (typeof fireEvent == 'function') {
                                        fireEvent();
                                    } else {
                                        $window.trigger('validatorsLoaded');
                                    }
                                }
                            }
                        };

                    if (numModules > 0) {
                        $.formUtils.isLoadingModules = true;
                    }

                    var cacheSuffix = '?_=' + (new Date().getTime()),
                        appendToElement = document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0];

                    $.each(moduleList, function(i, modName) {
                        modName = $.trim(modName);
                        if (modName.length == 0) {
                            moduleLoadedCallback();
                        } else {
                            var scriptUrl = path + modName + (modName.slice(-3) == '.js' ? '' : '.js'),
                                script = document.createElement('SCRIPT');

                            if (scriptUrl in $.formUtils.loadedModules) {
                                // already loaded
                                moduleLoadedCallback();
                            } else {

                                // Remember that this script is loaded
                                $.formUtils.loadedModules[scriptUrl] = 1;
                                hasLoadedAnyModule = true;

                                // Load the script
                                script.type = 'text/javascript';
                                script.onload = moduleLoadedCallback;
                                script.src = scriptUrl + (scriptUrl.slice(-7) == '.dev.js' ? cacheSuffix : '');
                                script.onerror = function() {
                                    if ('console' in window && window.console.log) {
                                        window.console.log('Unable to load form validation module ' + scriptUrl);
                                    }
                                };
                                script.onreadystatechange = function() {
                                    // IE 7 fix
                                    if (this.readyState == 'complete' || this.readyState == 'loaded') {
                                        moduleLoadedCallback();
                                        // Handle memory leak in IE
                                        this.onload = null;
                                        this.onreadystatechange = null;
                                    }
                                };
                                appendToElement.appendChild(script);
                            }
                        }
                    });
                };

            if (path) {
                loadModuleScripts(modules, path);
            } else {
                var findScriptPathAndLoadModules = function() {
                    var foundPath = false;
                    $('script[src*="form-validator"]').each(function() {
                        foundPath = this.src.substr(0, this.src.lastIndexOf('/')) + '/';
                        if (foundPath == '/')
                            foundPath = '';
                        return false;
                    });

                    if (foundPath !== false) {
                        loadModuleScripts(modules, foundPath);
                        return true;
                    }
                    return false;
                };

                if (!findScriptPathAndLoadModules()) {
                    $(findScriptPathAndLoadModules);
                }
            }
        },

        /**
         * Validate the value of given element according to the validation rules
         * found in the attribute data-validation. Will return an object representing
         * a validation result, having the props shouldChangeDisplay, isValid and errorMsg
         * 8420-2 8430 97 99 1-7
         * @param {jQuery} $elem
         * @param {Object} language ($.formUtils.LANG)
         * @param {Object} conf
         * @param {jQuery} $form
         * @param {String} [eventContext]
         * @return {Object}
         */
        validateInput: function($elem, language, conf, $form, eventContext) {

            $elem.trigger('beforeValidation');

            var value = $elem.val() || '',
                result = { isValid: true, shouldChangeDisplay: true, errorMsg: '' },
                optional = $elem.valAttr('optional'),

                // test if a checkbox forces this element to be validated
                validationDependsOnCheckedInput = false,
                validationDependentInputIsChecked = false,
                validateIfCheckedElement = false,

                // get value of this element's attribute "... if-checked"
                validateIfCheckedElementName = $elem.valAttr('if-checked');


            if ($elem.attr('disabled')) {
                result.shouldChangeDisplay = false;
                return result;
            }

            // make sure we can proceed
            if (validateIfCheckedElementName != null) {

                // Set the boolean telling us that the validation depends
                // on another input being checked
                validationDependsOnCheckedInput = true;

                // select the checkbox type element in this form
                validateIfCheckedElement = $form.find('input[name="' + validateIfCheckedElementName + '"]');

                // test if it's property "checked" is checked
                if (validateIfCheckedElement.prop('checked')) {
                    // set value for validation checkpoint
                    validationDependentInputIsChecked = true;
                }
            }

            // validation checkpoint
            // if empty AND optional attribute is present
            // OR depending on a checkbox being checked AND checkbox is checked, return true
            if ((!value && optional === 'true') || (validationDependsOnCheckedInput && !validationDependentInputIsChecked)) {
                result.shouldChangeDisplay = conf.addValidClassOnAll;
                return result;
            }

            var validationRules = $elem.attr(conf.validationRuleAttribute),

                // see if form element has inline err msg attribute
                validationErrorMsg = true;

            if (!validationRules) {
                result.shouldChangeDisplay = conf.addValidClassOnAll;
                return result;
            }

            $.split(validationRules, function(rule) {
                if (rule.indexOf('validate_') !== 0) {
                    rule = 'validate_' + rule;
                }

                var validator = $.formUtils.validators[rule];

                if (validator && typeof validator['validatorFunction'] == 'function') {

                    // special change of element for checkbox_group rule
                    if (rule == 'validate_checkbox_group') {
                        // set element to first in group, so error msg attr doesn't need to be set on all elements in group
                        $elem = $form.find("[name='" + $elem.attr('name') + "']:eq(0)");
                    }

                    var isValid = null;
                    if (eventContext != 'keyup' || validator.validateOnKeyUp) {
                        isValid = validator.validatorFunction(value, $elem, conf, language, $form);
                    }

                    if (!isValid) {
                        validationErrorMsg = null;
                        if (isValid !== null) {
                            validationErrorMsg = $elem.attr(conf.validationErrorMsgAttribute + '-' + rule.replace('validate_', ''));
                            if (!validationErrorMsg) {
                                validationErrorMsg = $elem.attr(conf.validationErrorMsgAttribute);
                                if (!validationErrorMsg) {
                                    validationErrorMsg = language[validator.errorMessageKey];
                                    if (!validationErrorMsg)
                                        validationErrorMsg = validator.errorMessage;
                                }
                            }
                        }
                        return false; // break iteration
                    }

                } else {
                    throw new Error('Using undefined validator "' + rule + '"');
                }

            }, ' ');

            if (typeof validationErrorMsg == 'string') {
                $elem.trigger('validation', false);
                result.errorMsg = validationErrorMsg;
                result.isValid = false;
                result.shouldChangeDisplay = true;
            } else if (validationErrorMsg === null) {
                result.shouldChangeDisplay = conf.addValidClassOnAll;
            } else {
                $elem.trigger('validation', true);
                result.shouldChangeDisplay = true;
            }

            // Run element validation callback
            if (typeof conf.onElementValidate == 'function' && result !== null) {
                conf.onElementValidate(result.isValid, $elem, $form, validationErrorMsg);
            }

            return result;
        },

        /**
         * Is it a correct date according to given dateFormat. Will return false if not, otherwise
         * an array 0=>year 1=>month 2=>day
         *
         * @param {String} val
         * @param {String} dateFormat
         * @return {Array}|{Boolean}
         */
        parseDate: function(val, dateFormat) {
            var divider = dateFormat.replace(/[a-zA-Z]/gi, '').substring(0, 1),
                regexp = '^',
                formatParts = dateFormat.split(divider || null),
                matches, day, month, year;

            $.each(formatParts, function(i, part) {
                regexp += (i > 0 ? '\\' + divider : '') + '(\\d{' + part.length + '})';
            });

            regexp += '$';

            matches = val.match(new RegExp(regexp));
            if (matches === null) {
                return false;
            }

            var findDateUnit = function(unit, formatParts, matches) {
                for (var i = 0; i < formatParts.length; i++) {
                    if (formatParts[i].substring(0, 1) === unit) {
                        return $.formUtils.parseDateInt(matches[i + 1]);
                    }
                }
                return -1;
            };

            month = findDateUnit('m', formatParts, matches);
            day = findDateUnit('d', formatParts, matches);
            year = findDateUnit('y', formatParts, matches);

            if ((month === 2 && day > 28 && (year % 4 !== 0 || year % 100 === 0 && year % 400 !== 0)) ||
                (month === 2 && day > 29 && (year % 4 === 0 || year % 100 !== 0 && year % 400 === 0)) ||
                month > 12 || month === 0) {
                return false;
            }
            if ((this.isShortMonth(month) && day > 30) || (!this.isShortMonth(month) && day > 31) || day === 0) {
                return false;
            }

            return [year, month, day];
        },

        /**
         * skum fix. är talet 05 eller lägre ger parseInt rätt int annars får man 0 när man kör parseInt?
         *
         * @param {String} val
         * @param {Number}
         */
        parseDateInt: function(val) {
            if (val.indexOf('0') === 0) {
                val = val.replace('0', '');
            }
            return parseInt(val, 10);
        },

        /**
         * Has month only 30 days?
         *
         * @param {Number} m
         * @return {Boolean}
         */
        isShortMonth: function(m) {
            return (m % 2 === 0 && m < 7) || (m % 2 !== 0 && m > 7);
        },

        /**
         * Restrict input length
         *
         * @param {jQuery} $inputElement Jquery Html object
         * @param {jQuery} $maxLengthElement jQuery Html Object
         * @return void
         */
        lengthRestriction: function($inputElement, $maxLengthElement) {
            // read maxChars from counter display initial text value
            var maxChars = parseInt($maxLengthElement.text(), 10),
                charsLeft = 0,

                // internal function does the counting and sets display value
                countCharacters = function() {
                    var numChars = $inputElement.val().length;
                    if (numChars > maxChars) {
                        // get current scroll bar position
                        var currScrollTopPos = $inputElement.scrollTop();
                        // trim value to max length
                        $inputElement.val($inputElement.val().substring(0, maxChars));
                        $inputElement.scrollTop(currScrollTopPos);
                    }
                    charsLeft = maxChars - numChars;
                    if (charsLeft < 0)
                        charsLeft = 0;

                    // set counter text
                    $maxLengthElement.text(charsLeft);
                };

            // bind events to this element
            // setTimeout is needed, cut or paste fires before val is available
            $($inputElement).bind('keydown keyup keypress focus blur', countCharacters)
                .bind('cut paste', function() {
                    setTimeout(countCharacters, 100);
                });

            // count chars on pageload, if there are prefilled input-values
            $(document).bind("ready", countCharacters);
        },

        /**
         * Test numeric against allowed range
         *
         * @param $value int
         * @param $rangeAllowed str; (1-2, min1, max2, 10)
         * @return array
         */
        numericRangeCheck: function(value, rangeAllowed) {
            // split by dash
            var range = $.split(rangeAllowed),
                // min or max
                minmax = parseInt(rangeAllowed.substr(3), 10);

            if (range.length == 1 && rangeAllowed.indexOf('min') == -1 && rangeAllowed.indexOf('max') == -1) {
                range = [rangeAllowed, rangeAllowed]; // only a number, checking agains an exact number of characters
            }

            // range ?
            if (range.length == 2 && (value < parseInt(range[0], 10) || value > parseInt(range[1], 10))) {
                return ["out", range[0], range[1]];
            } // value is out of range
            else if (rangeAllowed.indexOf('min') === 0 && (value < minmax)) // min
            {
                return ["min", minmax];
            } // value is below min
            else if (rangeAllowed.indexOf('max') === 0 && (value > minmax)) // max
            {
                return ["max", minmax];
            } // value is above max
            // since no other returns executed, value is in allowed range
            return ["ok"];
        },


        _numSuggestionElements: 0,
        _selectedSuggestion: null,
        _previousTypedVal: null,

        /**
         * Utility function that can be used to create plugins that gives
         * suggestions when inputs is typed into
         * @param {jQuery} $elem
         * @param {Array} suggestions
         * @param {Object} settings - Optional
         * @return {jQuery}
         */
        suggest: function($elem, suggestions, settings) {
            var conf = {
                    css: {
                        maxHeight: '150px',
                        background: '#FFF',
                        lineHeight: '150%',
                        textDecoration: 'underline',
                        overflowX: 'hidden',
                        overflowY: 'auto',
                        border: '#CCC solid 1px',
                        borderTop: 'none',
                        cursor: 'pointer'
                    },
                    activeSuggestionCSS: {
                        background: '#E9E9E9'
                    }
                },
                setSuggsetionPosition = function($suggestionContainer, $input) {
                    var offset = $input.offset();
                    $suggestionContainer.css({
                        width: $input.outerWidth(),
                        left: offset.left + 'px',
                        top: (offset.top + $input.outerHeight()) + 'px'
                    });
                };

            if (settings)
                $.extend(conf, settings);

            conf.css['position'] = 'absolute';
            conf.css['z-index'] = 9999;
            $elem.attr('autocomplete', 'off');

            if (this._numSuggestionElements === 0) {
                // Re-position suggestion container if window size changes
                $window.bind('resize', function() {
                    $('.jquery-form-suggestions').each(function() {
                        var $container = $(this),
                            suggestID = $container.attr('data-suggest-container');
                        setSuggsetionPosition($container, $('.suggestions-' + suggestID).eq(0));
                    });
                });
            }

            this._numSuggestionElements++;

            var onSelectSuggestion = function($el) {
                var suggestionId = $el.valAttr('suggestion-nr');
                $.formUtils._selectedSuggestion = null;
                $.formUtils._previousTypedVal = null;
                $('.jquery-form-suggestion-' + suggestionId).fadeOut('fast');
            };

            $elem
                .data('suggestions', suggestions)
                .valAttr('suggestion-nr', this._numSuggestionElements)
                .unbind('focus.suggest')
                .bind('focus.suggest', function() {
                    $(this).trigger('keyup');
                    $.formUtils._selectedSuggestion = null;
                })
                .unbind('keyup.suggest')
                .bind('keyup.suggest', function() {
                    var $input = $(this),
                        foundSuggestions = [],
                        val = $.trim($input.val()).toLocaleLowerCase();

                    if (val == $.formUtils._previousTypedVal) {
                        return;
                    } else {
                        $.formUtils._previousTypedVal = val;
                    }

                    var hasTypedSuggestion = false,
                        suggestionId = $input.valAttr('suggestion-nr'),
                        $suggestionContainer = $('.jquery-form-suggestion-' + suggestionId);

                    $suggestionContainer.scrollTop(0);

                    // Find the right suggestions
                    if (val != '') {
                        var findPartial = val.length > 2;
                        $.each($input.data('suggestions'), function(i, suggestion) {
                            var lowerCaseVal = suggestion.toLocaleLowerCase();
                            if (lowerCaseVal == val) {
                                foundSuggestions.push('<strong>' + suggestion + '</strong>');
                                hasTypedSuggestion = true;
                                return false;
                            } else if (lowerCaseVal.indexOf(val) === 0 || (findPartial && lowerCaseVal.indexOf(val) > -1)) {
                                foundSuggestions.push(suggestion.replace(new RegExp(val, 'gi'), '<strong>$&</strong>'));
                            }
                        });
                    }

                    // Hide suggestion container
                    if (hasTypedSuggestion || (foundSuggestions.length == 0 && $suggestionContainer.length > 0)) {
                        $suggestionContainer.hide();
                    }

                    // Create suggestion container if not already exists
                    else if (foundSuggestions.length > 0 && $suggestionContainer.length == 0) {
                        $suggestionContainer = $('<div></div>').css(conf.css).appendTo('body');
                        $elem.addClass('suggestions-' + suggestionId);
                        $suggestionContainer
                            .attr('data-suggest-container', suggestionId)
                            .addClass('jquery-form-suggestions')
                            .addClass('jquery-form-suggestion-' + suggestionId);
                    }

                    // Show hidden container
                    else if (foundSuggestions.length > 0 && !$suggestionContainer.is(':visible')) {
                        $suggestionContainer.show();
                    }

                    // add suggestions
                    if (foundSuggestions.length > 0 && val.length != foundSuggestions[0].length) {

                        // put container in place every time, just in case
                        setSuggsetionPosition($suggestionContainer, $input);

                        // Add suggestions HTML to container
                        $suggestionContainer.html('');
                        $.each(foundSuggestions, function(i, text) {
                            $('<div></div>')
                                .append(text)
                                .css({
                                    overflow: 'hidden',
                                    textOverflow: 'ellipsis',
                                    whiteSpace: 'nowrap',
                                    padding: '5px'
                                })
                                .addClass('form-suggest-element')
                                .appendTo($suggestionContainer)
                                .click(function() {
                                    $input.focus();
                                    $input.val($(this).text());
                                    onSelectSuggestion($input);
                                });
                        });
                    }
                })
                .unbind('keydown.validation')
                .bind('keydown.validation', function(e) {
                    var code = (e.keyCode ? e.keyCode : e.which),
                        suggestionId,
                        $suggestionContainer,
                        $input = $(this);

                    if (code == 13 && $.formUtils._selectedSuggestion !== null) {
                        suggestionId = $input.valAttr('suggestion-nr');
                        $suggestionContainer = $('.jquery-form-suggestion-' + suggestionId);
                        if ($suggestionContainer.length > 0) {
                            var newText = $suggestionContainer.find('div').eq($.formUtils._selectedSuggestion).text();
                            $input.val(newText);
                            onSelectSuggestion($input);
                            e.preventDefault();
                        }
                    } else {
                        suggestionId = $input.valAttr('suggestion-nr');
                        $suggestionContainer = $('.jquery-form-suggestion-' + suggestionId);
                        var $suggestions = $suggestionContainer.children();
                        if ($suggestions.length > 0 && $.inArray(code, [38, 40]) > -1) {
                            if (code == 38) { // key up
                                if ($.formUtils._selectedSuggestion === null)
                                    $.formUtils._selectedSuggestion = $suggestions.length - 1;
                                else
                                    $.formUtils._selectedSuggestion--;
                                if ($.formUtils._selectedSuggestion < 0)
                                    $.formUtils._selectedSuggestion = $suggestions.length - 1;
                            } else if (code == 40) { // key down
                                if ($.formUtils._selectedSuggestion === null)
                                    $.formUtils._selectedSuggestion = 0;
                                else
                                    $.formUtils._selectedSuggestion++;
                                if ($.formUtils._selectedSuggestion > ($suggestions.length - 1))
                                    $.formUtils._selectedSuggestion = 0;

                            }

                            // Scroll in suggestion window
                            var containerInnerHeight = $suggestionContainer.innerHeight(),
                                containerScrollTop = $suggestionContainer.scrollTop(),
                                suggestionHeight = $suggestionContainer.children().eq(0).outerHeight(),
                                activeSuggestionPosY = suggestionHeight * ($.formUtils._selectedSuggestion);

                            if (activeSuggestionPosY < containerScrollTop || activeSuggestionPosY > (containerScrollTop + containerInnerHeight)) {
                                $suggestionContainer.scrollTop(activeSuggestionPosY);
                            }

                            $suggestions
                                .removeClass('active-suggestion')
                                .css('background', 'none')
                                .eq($.formUtils._selectedSuggestion)
                                .addClass('active-suggestion')
                                .css(conf.activeSuggestionCSS);

                            e.preventDefault();
                            return false;
                        }
                    }
                })
                .unbind('blur.suggest')
                .bind('blur.suggest', function() {
                    onSelectSuggestion($(this));
                });

            return $elem;
        },

        /**
         * Error dialogs
         *
         * @var {Object}
         */
        LANG: {
            errorTitle: 'Form submission failed!',
            requiredFields: 'You have not answered all required fields',
            badTime: 'You have not given a correct time',
            badEmail: 'You have not given a correct e-mail address',
            badTelephone: 'You have not given a correct phone number',
            badSecurityAnswer: 'You have not given a correct answer to the security question',
            badDate: 'You have not given a correct date',
            lengthBadStart: 'The input value must be between ',
            lengthBadEnd: ' characters',
            lengthTooLongStart: 'The input value is longer than ',
            lengthTooShortStart: 'The input value is shorter than ',
            notConfirmed: 'Input values could not be confirmed',
            badDomain: 'Incorrect domain value',
            badUrl: 'The input value is not a correct URL',
            badCustomVal: 'The input value is incorrect',
            andSpaces: ' and spaces ',
            badInt: 'The input value was not a correct number',
            badSecurityNumber: 'Your social security number was incorrect',
            badUKVatAnswer: 'Incorrect UK VAT Number',
            badStrength: 'The password isn\'t strong enough',
            badNumberOfSelectedOptionsStart: 'You have to choose at least ',
            badNumberOfSelectedOptionsEnd: ' answers',
            badAlphaNumeric: 'The input value can only contain alphanumeric characters ',
            badAlphaNumericExtra: ' and ',
            wrongFileSize: 'The file you are trying to upload is too large (max %s)',
            wrongFileType: 'Only files of type %s is allowed',
            groupCheckedRangeStart: 'Please choose between ',
            groupCheckedTooFewStart: 'Please choose at least ',
            groupCheckedTooManyStart: 'Please choose a maximum of ',
            groupCheckedEnd: ' item(s)',
            badCreditCard: 'The credit card number is not correct',
            badCVV: 'The CVV number was not correct',
            wrongFileDim: 'Incorrect image dimensions,',
            imageTooTall: 'the image can not be taller than',
            imageTooWide: 'the image can not be wider than',
            imageTooSmall: 'the image was too small',
            min: 'min',
            max: 'max',
            imageRatioNotAccepted: 'Image ratio is not be accepted'
        }
    };


    /* * * * * * * * * * * * * * * * * * * * * *
     CORE VALIDATORS
     * * * * * * * * * * * * * * * * * * * * */


    /*
     * Validate email
     */
    $.formUtils.addValidator({
        name: 'email',
        validatorFunction: function(email) {

            var emailParts = email.toLowerCase().split('@');
            if (emailParts.length == 2) {
                return $.formUtils.validators.validate_domain.validatorFunction(emailParts[1]) && !(/[^\w\+\.\-]/.test(emailParts[0])) && emailParts[0].length > 0;
            }

            return false;
        },
        errorMessage: '',
        errorMessageKey: 'badEmail'
    });

    /*
     * Validate domain name
     */
    $.formUtils.addValidator({
        name: 'domain',
        validatorFunction: function(val) {
            return val.length > 0 &&
                val.length <= 253 && // Including sub domains
                !(/[^a-zA-Z0-9]/.test(val.slice(-2))) && !(/[^a-zA-Z0-9]/.test(val.substr(0, 1))) && !(/[^a-zA-Z0-9\.\-]/.test(val)) &&
                val.split('..').length == 1 &&
                val.split('.').length > 1;
        },
        errorMessage: '',
        errorMessageKey: 'badDomain'
    });

    /*
     * Validate required
     */
    $.formUtils.addValidator({
        name: 'required',
        validatorFunction: function(val, $el, config, language, $form) {
            switch ($el.attr('type')) {
                case 'checkbox':
                    return $el.is(':checked');
                case 'radio':
                    return $form.find('input[name="' + $el.attr('name') + '"]').filter(':checked').length > 0;
                default:
                    return $.trim(val) !== '';
            }
        },
        errorMessage: '',
        errorMessageKey: 'requiredFields'
    });

    /*
     * Validate length range
     */
    $.formUtils.addValidator({
        name: 'length',
        validatorFunction: function(val, $el, conf, lang) {
            var lengthAllowed = $el.valAttr('length'),
                type = $el.attr('type');

            if (lengthAllowed == undefined) {
                alert('Please add attribute "data-validation-length" to ' + $el[0].nodeName + ' named ' + $el.attr('name'));
                return true;
            }

            // check if length is above min, below max or within range.
            var len = type == 'file' && $el.get(0).files !== undefined ? $el.get(0).files.length : val.length,
                lengthCheckResults = $.formUtils.numericRangeCheck(len, lengthAllowed),
                checkResult;

            switch (lengthCheckResults[0]) { // outside of allowed range
                case "out":
                    this.errorMessage = lang.lengthBadStart + lengthAllowed + lang.lengthBadEnd;
                    checkResult = false;
                    break;
                    // too short
                case "min":
                    this.errorMessage = lang.lengthTooShortStart + lengthCheckResults[1] + lang.lengthBadEnd;
                    checkResult = false;
                    break;
                    // too long
                case "max":
                    this.errorMessage = lang.lengthTooLongStart + lengthCheckResults[1] + lang.lengthBadEnd;
                    checkResult = false;
                    break;
                    // ok
                default:
                    checkResult = true;
            }

            return checkResult;
        },
        errorMessage: '',
        errorMessageKey: ''
    });

    /*
     * Validate url
     */
    $.formUtils.addValidator({
        name: 'url',
        validatorFunction: function(url) {
            var urlFilter = /^(https?|ftp):\/\/((((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])(\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|\[|\]|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#(((\w|-|\.|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i;
            if (urlFilter.test(url)) {
                var domain = url.split('://')[1],
                    domainSlashPos = domain.indexOf('/');

                if (domainSlashPos > -1)
                    domain = domain.substr(0, domainSlashPos);

                return $.formUtils.validators.validate_domain.validatorFunction(domain); // todo: add support for IP-addresses
            }
            return false;
        },
        errorMessage: '',
        errorMessageKey: 'badUrl'
    });

    /*
     * Validate number (floating or integer)
     */
    $.formUtils.addValidator({
        name: 'number',
        validatorFunction: function(val, $el, conf) {
            if (val !== '') {
                var allowing = $el.valAttr('allowing') || '',
                    decimalSeparator = $el.valAttr('decimal-separator') || conf.decimalSeparator,
                    allowsRange = false,
                    begin, end,
                    steps = $el.valAttr('step') || '',
                    allowsSteps = false;

                if (allowing.indexOf('number') == -1)
                    allowing += ',number';

                if (allowing.indexOf('negative') == -1 && val.indexOf('-') === 0) {
                    return false;
                }

                if (allowing.indexOf('range') > -1) {
                    begin = parseFloat(allowing.substring(allowing.indexOf("[") + 1, allowing.indexOf(";")));
                    end = parseFloat(allowing.substring(allowing.indexOf(";") + 1, allowing.indexOf("]")));
                    allowsRange = true;
                }

                if (steps != "")
                    allowsSteps = true;

                if (decimalSeparator == ',') {
                    if (val.indexOf('.') > -1) {
                        return false;
                    }
                    // Fix for checking range with floats using ,
                    val = val.replace(',', '.');
                }

                if (allowing.indexOf('number') > -1 && val.replace(/[0-9-]/g, '') === '' && (!allowsRange || (val >= begin && val <= end)) && (!allowsSteps || (val % steps == 0))) {
                    return true;
                }
                if (allowing.indexOf('float') > -1 && val.match(new RegExp('^([0-9-]+)\\.([0-9]+)$')) !== null && (!allowsRange || (val >= begin && val <= end)) && (!allowsSteps || (val % steps == 0))) {
                    return true;
                }
            }
            return false;
        },
        errorMessage: '',
        errorMessageKey: 'badInt'
    });

    /*
     * Validate alpha numeric
     */
    $.formUtils.addValidator({
        name: 'alphanumeric',
        validatorFunction: function(val, $el, conf, language) {
            var patternStart = '^([a-zA-Z0-9',
                patternEnd = ']+)$',
                additionalChars = $el.valAttr('allowing'),
                pattern = '';

            if (additionalChars) {
                pattern = patternStart + additionalChars + patternEnd;
                var extra = additionalChars.replace(/\\/g, '');
                if (extra.indexOf(' ') > -1) {
                    extra = extra.replace(' ', '');
                    extra += language.andSpaces || $.formUtils.LANG.andSpaces;
                }
                this.errorMessage = language.badAlphaNumeric + language.badAlphaNumericExtra + extra;
            } else {
                pattern = patternStart + patternEnd;
                this.errorMessage = language.badAlphaNumeric;
            }

            return new RegExp(pattern).test(val);
        },
        errorMessage: '',
        errorMessageKey: ''
    });

    /*
     * Validate against regexp
     */
    $.formUtils.addValidator({
        name: 'custom',
        validatorFunction: function(val, $el, conf) {
            var regexp = new RegExp($el.valAttr('regexp'));
            return regexp.test(val);
        },
        errorMessage: '',
        errorMessageKey: 'badCustomVal'
    });

    /*
     * Validate date
     */
    $.formUtils.addValidator({
        name: 'date',
        validatorFunction: function(date, $el, conf) {
            var dateFormat = $el.valAttr('format') || conf.dateFormat || 'yyyy-mm-dd';
            return $.formUtils.parseDate(date, dateFormat) !== false;
        },
        errorMessage: '',
        errorMessageKey: 'badDate'
    });


    /*
     * Validate group of checkboxes, validate qty required is checked
     * written by Steve Wasiura : http://stevewasiura.waztech.com
     * element attrs
     *    data-validation="checkbox_group"
     *    data-validation-qty="1-2"  // min 1 max 2
     *    data-validation-error-msg="chose min 1, max of 2 checkboxes"
     */
    $.formUtils.addValidator({
        name: 'checkbox_group',
        validatorFunction: function(val, $el, conf, lang, $form) {
                // preset return var
                var isValid = true,
                    // get name of element. since it is a checkbox group, all checkboxes will have same name
                    elname = $el.attr('name'),
                    // get checkboxes and count the checked ones
                    $checkBoxes = $("input[type=checkbox][name^='" + elname + "']", $form),
                    checkedCount = $checkBoxes.filter(':checked').length,
                    // get el attr that specs qty required / allowed
                    qtyAllowed = $el.valAttr('qty');

                if (qtyAllowed == undefined) {
                    var elementType = $el.get(0).nodeName;
                    alert('Attribute "data-validation-qty" is missing from ' + elementType + ' named ' + $el.attr('name'));
                }

                // call Utility function to check if count is above min, below max, within range etc.
                var qtyCheckResults = $.formUtils.numericRangeCheck(checkedCount, qtyAllowed);

                // results will be array, [0]=result str, [1]=qty int
                switch (qtyCheckResults[0]) {
                    // outside allowed range
                    case "out":
                        this.errorMessage = lang.groupCheckedRangeStart + qtyAllowed + lang.groupCheckedEnd;
                        isValid = false;
                        break;
                        // below min qty
                    case "min":
                        this.errorMessage = lang.groupCheckedTooFewStart + qtyCheckResults[1] + lang.groupCheckedEnd;
                        isValid = false;
                        break;
                        // above max qty
                    case "max":
                        this.errorMessage = lang.groupCheckedTooManyStart + qtyCheckResults[1] + lang.groupCheckedEnd;
                        isValid = false;
                        break;
                        // ok
                    default:
                        isValid = true;
                }

                if (!isValid) {
                    var _triggerOnBlur = function() {
                        $checkBoxes.unbind('click', _triggerOnBlur);
                        $checkBoxes.filter('*[data-validation]').eq(0).validateInputOnBlur(lang, conf, false, 'blur');
                    };
                    //$checkBoxes.bind('click', _triggerOnBlur);
                }

                return isValid;
            }
            //   errorMessage : '', // set above in switch statement
            //   errorMessageKey: '' // not used
    });

})(jQuery);
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// jquery.form-validator.js end
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>





// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// main.js start
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>

jQuery(function($) {
    "use strict";

    $.validate();

    new WOW().init();
    //Variables
    var fixed_point = 0;
    var loaded = false;

    // Author Code Here
    $(window).load(function() {
        $('.owl-reviews').owlCarousel({
            items: 4,
            navigation: true,
            autoPlay: 2500,
            loopCount: Infinity,
            navigationText: ["<i class='arrow_carrot-left'></i>", "<i class='arrow_carrot-right'></i>"]
        });
    });

    $(window).resize(function() {
        Adjust();
    });


    $(window).scroll(function() {

        //Following Navbar
        if ($(window).scrollTop() > fixed_point && loaded) {
            $('.navbar').addClass('nav-fixed');
            $('.navbar-filler').height($('.navbar').outerHeight(true));
        } else {
            $('.navbar').removeClass('nav-fixed');
            $('.navbar-filler').height(0);
        }
    });

    function Adjust() {
        if ($(window).width() > 768) {
            $('header').height($(window).height());
            $('.intro-book').css('top', ($('header').height() / 2 - $('.intro-book').height() / 2) + "px");
            $('.intro-text').css('top', ($('header').height() / 2 - $('.intro-text').height() / 2) + "px");
        } else {
            $('header').height(400);
        }
        if (!$('.navbar').hasClass("nav-fixed") && loaded)
            fixed_point = $('.navbar').offset().top;
    }

    $('.sample-button').click(function(event) {
        $('#sample-form').slideDown();
        event.preventDefault();
    });

    $('form').submit(function(event) {
        if ($(this).find(".has-error").length > 0)
            return;
        event.preventDefault();
        var that = $(this),
            url = $(that).attr('action'),
            type = $(that).attr('method'),
            dataX = {};

        $(that).find("[name]").each(function() {
            dataX[$(this).attr("name")] = $(this).val();
        });

        $('.notification-box').addClass('active');

        $.ajax({
            type: 'POST',
            url: url,
            data: dataX,
            success: function(response) {
                $('.notification-box span').html(response);
                setTimeout(function() {
                    $('.notification-box').removeClass('active');
                    $('.notification-box span').html("Sending...");
                }, 4000);
            }
        });
    });
});


// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// main.js end
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>




// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// owl.carousel.js start
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>

if (typeof Object.create !== "function") {
    Object.create = function(obj) {
        function F() {}
        F.prototype = obj;
        return new F();
    };
}
(function($, window, document) {

    var Carousel = {
        init: function(options, el) {
            var base = this;

            base.$elem = $(el);
            base.options = $.extend({}, $.fn.owlCarousel.options, base.$elem.data(), options);

            base.userOptions = options;
            base.loadContent();
        },

        loadContent: function() {
            var base = this,
                url;

            function getData(data) {
                var i, content = "";
                if (typeof base.options.jsonSuccess === "function") {
                    base.options.jsonSuccess.apply(this, [data]);
                } else {
                    for (i in data.owl) {
                        if (data.owl.hasOwnProperty(i)) {
                            content += data.owl[i].item;
                        }
                    }
                    base.$elem.html(content);
                }
                base.logIn();
            }

            if (typeof base.options.beforeInit === "function") {
                base.options.beforeInit.apply(this, [base.$elem]);
            }

            if (typeof base.options.jsonPath === "string") {
                url = base.options.jsonPath;
                $.getJSON(url, getData);
            } else {
                base.logIn();
            }
        },

        logIn: function() {
            var base = this;

            base.$elem.data({
                "owl-originalStyles": base.$elem.attr("style"),
                "owl-originalClasses": base.$elem.attr("class")
            });

            base.$elem.css({ opacity: 0 });
            base.orignalItems = base.options.items;
            base.checkBrowser();
            base.wrapperWidth = 0;
            base.checkVisible = null;
            base.setVars();
        },

        setVars: function() {
            var base = this;
            if (base.$elem.children().length === 0) { return false; }
            base.baseClass();
            base.eventTypes();
            base.$userItems = base.$elem.children();
            base.itemsAmount = base.$userItems.length;
            base.wrapItems();
            base.$owlItems = base.$elem.find(".owl-item");
            base.$owlWrapper = base.$elem.find(".owl-wrapper");
            base.playDirection = "next";
            base.prevItem = 0;
            base.prevArr = [0];
            base.currentItem = 0;
            base.customEvents();
            base.onStartup();
        },

        onStartup: function() {
            var base = this;
            base.updateItems();
            base.calculateAll();
            base.buildControls();
            base.updateControls();
            base.response();
            base.moveEvents();
            base.stopOnHover();
            base.owlStatus();

            if (base.options.transitionStyle !== false) {
                base.transitionTypes(base.options.transitionStyle);
            }
            if (base.options.autoPlay === true) {
                base.options.autoPlay = 5000;
            }
            base.play();

            base.$elem.find(".owl-wrapper").css("display", "block");

            if (!base.$elem.is(":visible")) {
                base.watchVisibility();
            } else {
                base.$elem.css("opacity", 1);
            }
            base.onstartup = false;
            base.eachMoveUpdate();
            if (typeof base.options.afterInit === "function") {
                base.options.afterInit.apply(this, [base.$elem]);
            }
        },

        eachMoveUpdate: function() {
            var base = this;

            if (base.options.lazyLoad === true) {
                base.lazyLoad();
            }
            if (base.options.autoHeight === true) {
                base.autoHeight();
            }
            base.onVisibleItems();

            if (typeof base.options.afterAction === "function") {
                base.options.afterAction.apply(this, [base.$elem]);
            }
        },

        updateVars: function() {
            var base = this;
            if (typeof base.options.beforeUpdate === "function") {
                base.options.beforeUpdate.apply(this, [base.$elem]);
            }
            base.watchVisibility();
            base.updateItems();
            base.calculateAll();
            base.updatePosition();
            base.updateControls();
            base.eachMoveUpdate();
            if (typeof base.options.afterUpdate === "function") {
                base.options.afterUpdate.apply(this, [base.$elem]);
            }
        },

        reload: function() {
            var base = this;
            window.setTimeout(function() {
                base.updateVars();
            }, 0);
        },

        watchVisibility: function() {
            var base = this;

            if (base.$elem.is(":visible") === false) {
                base.$elem.css({ opacity: 0 });
                window.clearInterval(base.autoPlayInterval);
                window.clearInterval(base.checkVisible);
            } else {
                return false;
            }
            base.checkVisible = window.setInterval(function() {
                if (base.$elem.is(":visible")) {
                    base.reload();
                    base.$elem.animate({ opacity: 1 }, 200);
                    window.clearInterval(base.checkVisible);
                }
            }, 500);
        },

        wrapItems: function() {
            var base = this;
            base.$userItems.wrapAll("<div class=\"owl-wrapper\">").wrap("<div class=\"owl-item\"></div>");
            base.$elem.find(".owl-wrapper").wrap("<div class=\"owl-wrapper-outer\">");
            base.wrapperOuter = base.$elem.find(".owl-wrapper-outer");
            base.$elem.css("display", "block");
        },

        baseClass: function() {
            var base = this,
                hasBaseClass = base.$elem.hasClass(base.options.baseClass),
                hasThemeClass = base.$elem.hasClass(base.options.theme);

            if (!hasBaseClass) {
                base.$elem.addClass(base.options.baseClass);
            }

            if (!hasThemeClass) {
                base.$elem.addClass(base.options.theme);
            }
        },

        updateItems: function() {
            var base = this,
                width, i;

            if (base.options.responsive === false) {
                return false;
            }
            if (base.options.singleItem === true) {
                base.options.items = base.orignalItems = 1;
                base.options.itemsCustom = false;
                base.options.itemsDesktop = false;
                base.options.itemsDesktopSmall = false;
                base.options.itemsTablet = false;
                base.options.itemsTabletSmall = false;
                base.options.itemsMobile = false;
                return false;
            }

            width = $(base.options.responsiveBaseWidth).width();

            if (width > (base.options.itemsDesktop[0] || base.orignalItems)) {
                base.options.items = base.orignalItems;
            }
            if (base.options.itemsCustom !== false) {
                //Reorder array by screen size
                base.options.itemsCustom.sort(function(a, b) { return a[0] - b[0]; });

                for (i = 0; i < base.options.itemsCustom.length; i += 1) {
                    if (base.options.itemsCustom[i][0] <= width) {
                        base.options.items = base.options.itemsCustom[i][1];
                    }
                }

            } else {

                if (width <= base.options.itemsDesktop[0] && base.options.itemsDesktop !== false) {
                    base.options.items = base.options.itemsDesktop[1];
                }

                if (width <= base.options.itemsDesktopSmall[0] && base.options.itemsDesktopSmall !== false) {
                    base.options.items = base.options.itemsDesktopSmall[1];
                }

                if (width <= base.options.itemsTablet[0] && base.options.itemsTablet !== false) {
                    base.options.items = base.options.itemsTablet[1];
                }

                if (width <= base.options.itemsTabletSmall[0] && base.options.itemsTabletSmall !== false) {
                    base.options.items = base.options.itemsTabletSmall[1];
                }

                if (width <= base.options.itemsMobile[0] && base.options.itemsMobile !== false) {
                    base.options.items = base.options.itemsMobile[1];
                }
            }

            //if number of items is less than declared
            if (base.options.items > base.itemsAmount && base.options.itemsScaleUp === true) {
                base.options.items = base.itemsAmount;
            }
        },

        response: function() {
            var base = this,
                smallDelay,
                lastWindowWidth;

            if (base.options.responsive !== true) {
                return false;
            }
            lastWindowWidth = $(window).width();

            base.resizer = function() {
                if ($(window).width() !== lastWindowWidth) {
                    if (base.options.autoPlay !== false) {
                        window.clearInterval(base.autoPlayInterval);
                    }
                    window.clearTimeout(smallDelay);
                    smallDelay = window.setTimeout(function() {
                        lastWindowWidth = $(window).width();
                        base.updateVars();
                    }, base.options.responsiveRefreshRate);
                }
            };
            $(window).resize(base.resizer);
        },

        updatePosition: function() {
            var base = this;
            base.jumpTo(base.currentItem);
            if (base.options.autoPlay !== false) {
                base.checkAp();
            }
        },

        appendItemsSizes: function() {
            var base = this,
                roundPages = 0,
                lastItem = base.itemsAmount - base.options.items;

            base.$owlItems.each(function(index) {
                var $this = $(this);
                $this
                    .css({ "width": base.itemWidth })
                    .data("owl-item", Number(index));

                if (index % base.options.items === 0 || index === lastItem) {
                    if (!(index > lastItem)) {
                        roundPages += 1;
                    }
                }
                $this.data("owl-roundPages", roundPages);
            });
        },

        appendWrapperSizes: function() {
            var base = this,
                width = base.$owlItems.length * base.itemWidth;

            base.$owlWrapper.css({
                "width": width * 2,
                "left": 0
            });
            base.appendItemsSizes();
        },

        calculateAll: function() {
            var base = this;
            base.calculateWidth();
            base.appendWrapperSizes();
            base.loops();
            base.max();
        },

        calculateWidth: function() {
            var base = this;
            base.itemWidth = Math.round(base.$elem.width() / base.options.items);
        },

        max: function() {
            var base = this,
                maximum = ((base.itemsAmount * base.itemWidth) - base.options.items * base.itemWidth) * -1;
            if (base.options.items > base.itemsAmount) {
                base.maximumItem = 0;
                maximum = 0;
                base.maximumPixels = 0;
            } else {
                base.maximumItem = base.itemsAmount - base.options.items;
                base.maximumPixels = maximum;
            }
            return maximum;
        },

        min: function() {
            return 0;
        },

        loops: function() {
            var base = this,
                prev = 0,
                elWidth = 0,
                i,
                item,
                roundPageNum;

            base.positionsInArray = [0];
            base.pagesInArray = [];

            for (i = 0; i < base.itemsAmount; i += 1) {
                elWidth += base.itemWidth;
                base.positionsInArray.push(-elWidth);

                if (base.options.scrollPerPage === true) {
                    item = $(base.$owlItems[i]);
                    roundPageNum = item.data("owl-roundPages");
                    if (roundPageNum !== prev) {
                        base.pagesInArray[prev] = base.positionsInArray[i];
                        prev = roundPageNum;
                    }
                }
            }
        },

        buildControls: function() {
            var base = this;
            if (base.options.navigation === true || base.options.pagination === true) {
                base.owlControls = $("<div class=\"owl-controls\"/>").toggleClass("clickable", !base.browser.isTouch).appendTo(base.$elem);
            }
            if (base.options.pagination === true) {
                base.buildPagination();
            }
            if (base.options.navigation === true) {
                base.buildButtons();
            }
        },

        buildButtons: function() {
            var base = this,
                buttonsWrapper = $("<div class=\"owl-buttons\"/>");
            base.owlControls.append(buttonsWrapper);

            base.buttonPrev = $("<div/>", {
                "class": "owl-prev",
                "html": base.options.navigationText[0] || ""
            });

            base.buttonNext = $("<div/>", {
                "class": "owl-next",
                "html": base.options.navigationText[1] || ""
            });

            buttonsWrapper
                .append(base.buttonPrev)
                .append(base.buttonNext);

            buttonsWrapper.on("touchstart.owlControls mousedown.owlControls", "div[class^=\"owl\"]", function(event) {
                event.preventDefault();
            });

            buttonsWrapper.on("touchend.owlControls mouseup.owlControls", "div[class^=\"owl\"]", function(event) {
                event.preventDefault();
                if ($(this).hasClass("owl-next")) {
                    base.next();
                } else {
                    base.prev();
                }
            });
        },

        buildPagination: function() {
            var base = this;

            base.paginationWrapper = $("<div class=\"owl-pagination\"/>");
            base.owlControls.append(base.paginationWrapper);

            base.paginationWrapper.on("touchend.owlControls mouseup.owlControls", ".owl-page", function(event) {
                event.preventDefault();
                if (Number($(this).data("owl-page")) !== base.currentItem) {
                    base.goTo(Number($(this).data("owl-page")), true);
                }
            });
        },

        updatePagination: function() {
            var base = this,
                counter,
                lastPage,
                lastItem,
                i,
                paginationButton,
                paginationButtonInner;

            if (base.options.pagination === false) {
                return false;
            }

            base.paginationWrapper.html("");

            counter = 0;
            lastPage = base.itemsAmount - base.itemsAmount % base.options.items;

            for (i = 0; i < base.itemsAmount; i += 1) {
                if (i % base.options.items === 0) {
                    counter += 1;
                    if (lastPage === i) {
                        lastItem = base.itemsAmount - base.options.items;
                    }
                    paginationButton = $("<div/>", {
                        "class": "owl-page"
                    });
                    paginationButtonInner = $("<span></span>", {
                        "text": base.options.paginationNumbers === true ? counter : "",
                        "class": base.options.paginationNumbers === true ? "owl-numbers" : ""
                    });
                    paginationButton.append(paginationButtonInner);

                    paginationButton.data("owl-page", lastPage === i ? lastItem : i);
                    paginationButton.data("owl-roundPages", counter);

                    base.paginationWrapper.append(paginationButton);
                }
            }
            base.checkPagination();
        },
        checkPagination: function() {
            var base = this;
            if (base.options.pagination === false) {
                return false;
            }
            base.paginationWrapper.find(".owl-page").each(function() {
                if ($(this).data("owl-roundPages") === $(base.$owlItems[base.currentItem]).data("owl-roundPages")) {
                    base.paginationWrapper
                        .find(".owl-page")
                        .removeClass("active");
                    $(this).addClass("active");
                }
            });
        },

        checkNavigation: function() {
            var base = this;

            if (base.options.navigation === false) {
                return false;
            }
            if (base.options.rewindNav === false) {
                if (base.currentItem === 0 && base.maximumItem === 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem === 0 && base.maximumItem !== 0) {
                    base.buttonPrev.addClass("disabled");
                    base.buttonNext.removeClass("disabled");
                } else if (base.currentItem === base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.addClass("disabled");
                } else if (base.currentItem !== 0 && base.currentItem !== base.maximumItem) {
                    base.buttonPrev.removeClass("disabled");
                    base.buttonNext.removeClass("disabled");
                }
            }
        },

        updateControls: function() {
            var base = this;
            base.updatePagination();
            base.checkNavigation();
            if (base.owlControls) {
                if (base.options.items >= base.itemsAmount) {
                    base.owlControls.hide();
                } else {
                    base.owlControls.show();
                }
            }
        },

        destroyControls: function() {
            var base = this;
            if (base.owlControls) {
                base.owlControls.remove();
            }
        },

        next: function(speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            base.currentItem += base.options.scrollPerPage === true ? base.options.items : 1;
            if (base.currentItem > base.maximumItem + (base.options.scrollPerPage === true ? (base.options.items - 1) : 0)) {
                if (base.options.rewindNav === true) {
                    base.currentItem = 0;
                    speed = "rewind";
                } else {
                    base.currentItem = base.maximumItem;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        prev: function(speed) {
            var base = this;

            if (base.isTransition) {
                return false;
            }

            if (base.options.scrollPerPage === true && base.currentItem > 0 && base.currentItem < base.options.items) {
                base.currentItem = 0;
            } else {
                base.currentItem -= base.options.scrollPerPage === true ? base.options.items : 1;
            }
            if (base.currentItem < 0) {
                if (base.options.rewindNav === true) {
                    base.currentItem = base.maximumItem;
                    speed = "rewind";
                } else {
                    base.currentItem = 0;
                    return false;
                }
            }
            base.goTo(base.currentItem, speed);
        },

        goTo: function(position, speed, drag) {
            var base = this,
                goToPixel;

            if (base.isTransition) {
                return false;
            }
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }

            base.currentItem = base.owl.currentItem = position;
            if (base.options.transitionStyle !== false && drag !== "drag" && base.options.items === 1 && base.browser.support3d === true) {
                base.swapSpeed(0);
                if (base.browser.support3d === true) {
                    base.transition3d(base.positionsInArray[position]);
                } else {
                    base.css2slide(base.positionsInArray[position], 1);
                }
                base.afterGo();
                base.singleItemTransition();
                return false;
            }
            goToPixel = base.positionsInArray[position];

            if (base.browser.support3d === true) {
                base.isCss3Finish = false;

                if (speed === true) {
                    base.swapSpeed("paginationSpeed");
                    window.setTimeout(function() {
                        base.isCss3Finish = true;
                    }, base.options.paginationSpeed);

                } else if (speed === "rewind") {
                    base.swapSpeed(base.options.rewindSpeed);
                    window.setTimeout(function() {
                        base.isCss3Finish = true;
                    }, base.options.rewindSpeed);

                } else {
                    base.swapSpeed("slideSpeed");
                    window.setTimeout(function() {
                        base.isCss3Finish = true;
                    }, base.options.slideSpeed);
                }
                base.transition3d(goToPixel);
            } else {
                if (speed === true) {
                    base.css2slide(goToPixel, base.options.paginationSpeed);
                } else if (speed === "rewind") {
                    base.css2slide(goToPixel, base.options.rewindSpeed);
                } else {
                    base.css2slide(goToPixel, base.options.slideSpeed);
                }
            }
            base.afterGo();
        },

        jumpTo: function(position) {
            var base = this;
            if (typeof base.options.beforeMove === "function") {
                base.options.beforeMove.apply(this, [base.$elem]);
            }
            if (position >= base.maximumItem || position === -1) {
                position = base.maximumItem;
            } else if (position <= 0) {
                position = 0;
            }
            base.swapSpeed(0);
            if (base.browser.support3d === true) {
                base.transition3d(base.positionsInArray[position]);
            } else {
                base.css2slide(base.positionsInArray[position], 1);
            }
            base.currentItem = base.owl.currentItem = position;
            base.afterGo();
        },

        afterGo: function() {
            var base = this;

            base.prevArr.push(base.currentItem);
            base.prevItem = base.owl.prevItem = base.prevArr[base.prevArr.length - 2];
            base.prevArr.shift(0);

            if (base.prevItem !== base.currentItem) {
                base.checkPagination();
                base.checkNavigation();
                base.eachMoveUpdate();

                if (base.options.autoPlay !== false) {
                    base.checkAp();
                }
            }
            if (typeof base.options.afterMove === "function" && base.prevItem !== base.currentItem) {
                base.options.afterMove.apply(this, [base.$elem]);
            }
        },

        stop: function() {
            var base = this;
            base.apStatus = "stop";
            window.clearInterval(base.autoPlayInterval);
        },

        checkAp: function() {
            var base = this;
            if (base.apStatus !== "stop") {
                base.play();
            }
        },

        play: function() {
            var base = this;
            base.apStatus = "play";
            if (base.options.autoPlay === false) {
                return false;
            }
            window.clearInterval(base.autoPlayInterval);
            base.autoPlayInterval = window.setInterval(function() {
                base.next(true);
            }, base.options.autoPlay);
        },

        swapSpeed: function(action) {
            var base = this;
            if (action === "slideSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.slideSpeed));
            } else if (action === "paginationSpeed") {
                base.$owlWrapper.css(base.addCssSpeed(base.options.paginationSpeed));
            } else if (typeof action !== "string") {
                base.$owlWrapper.css(base.addCssSpeed(action));
            }
        },

        addCssSpeed: function(speed) {
            return {
                "-webkit-transition": "all " + speed + "ms ease",
                "-moz-transition": "all " + speed + "ms ease",
                "-o-transition": "all " + speed + "ms ease",
                "transition": "all " + speed + "ms ease"
            };
        },

        removeTransition: function() {
            return {
                "-webkit-transition": "",
                "-moz-transition": "",
                "-o-transition": "",
                "transition": ""
            };
        },

        doTranslate: function(pixels) {
            return {
                "-webkit-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-moz-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-o-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "-ms-transform": "translate3d(" + pixels + "px, 0px, 0px)",
                "transform": "translate3d(" + pixels + "px, 0px,0px)"
            };
        },

        transition3d: function(value) {
            var base = this;
            base.$owlWrapper.css(base.doTranslate(value));
        },

        css2move: function(value) {
            var base = this;
            base.$owlWrapper.css({ "left": value });
        },

        css2slide: function(value, speed) {
            var base = this;

            base.isCssFinish = false;
            base.$owlWrapper.stop(true, true).animate({
                "left": value
            }, {
                duration: speed || base.options.slideSpeed,
                complete: function() {
                    base.isCssFinish = true;
                }
            });
        },

        checkBrowser: function() {
            var base = this,
                translate3D = "translate3d(0px, 0px, 0px)",
                tempElem = document.createElement("div"),
                regex,
                asSupport,
                support3d,
                isTouch;

            tempElem.style.cssText = "  -moz-transform:" + translate3D +
                "; -ms-transform:" + translate3D +
                "; -o-transform:" + translate3D +
                "; -webkit-transform:" + translate3D +
                "; transform:" + translate3D;
            regex = /translate3d\(0px, 0px, 0px\)/g;
            asSupport = tempElem.style.cssText.match(regex);
            support3d = (asSupport !== null && asSupport.length === 1);

            isTouch = "ontouchstart" in window || window.navigator.msMaxTouchPoints;

            base.browser = {
                "support3d": support3d,
                "isTouch": isTouch
            };
        },

        moveEvents: function() {
            var base = this;
            if (base.options.mouseDrag !== false || base.options.touchDrag !== false) {
                base.gestures();
                base.disabledEvents();
            }
        },

        eventTypes: function() {
            var base = this,
                types = ["s", "e", "x"];

            base.ev_types = {};

            if (base.options.mouseDrag === true && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl mousedown.owl",
                    "touchmove.owl mousemove.owl",
                    "touchend.owl touchcancel.owl mouseup.owl"
                ];
            } else if (base.options.mouseDrag === false && base.options.touchDrag === true) {
                types = [
                    "touchstart.owl",
                    "touchmove.owl",
                    "touchend.owl touchcancel.owl"
                ];
            } else if (base.options.mouseDrag === true && base.options.touchDrag === false) {
                types = [
                    "mousedown.owl",
                    "mousemove.owl",
                    "mouseup.owl"
                ];
            }

            base.ev_types.start = types[0];
            base.ev_types.move = types[1];
            base.ev_types.end = types[2];
        },

        disabledEvents: function() {
            var base = this;
            base.$elem.on("dragstart.owl", function(event) { event.preventDefault(); });
            base.$elem.on("mousedown.disableTextSelect", function(e) {
                return $(e.target).is('input, textarea, select, option');
            });
        },

        gestures: function() {
            /*jslint unparam: true*/
            var base = this,
                locals = {
                    offsetX: 0,
                    offsetY: 0,
                    baseElWidth: 0,
                    relativePos: 0,
                    position: null,
                    minSwipe: null,
                    maxSwipe: null,
                    sliding: null,
                    dargging: null,
                    targetElement: null
                };

            base.isCssFinish = true;

            function getTouches(event) {
                if (event.touches !== undefined) {
                    return {
                        x: event.touches[0].pageX,
                        y: event.touches[0].pageY
                    };
                }

                if (event.touches === undefined) {
                    if (event.pageX !== undefined) {
                        return {
                            x: event.pageX,
                            y: event.pageY
                        };
                    }
                    if (event.pageX === undefined) {
                        return {
                            x: event.clientX,
                            y: event.clientY
                        };
                    }
                }
            }

            function swapEvents(type) {
                if (type === "on") {
                    $(document).on(base.ev_types.move, dragMove);
                    $(document).on(base.ev_types.end, dragEnd);
                } else if (type === "off") {
                    $(document).off(base.ev_types.move);
                    $(document).off(base.ev_types.end);
                }
            }

            function dragStart(event) {
                var ev = event.originalEvent || event || window.event,
                    position;

                if (ev.which === 3) {
                    return false;
                }
                if (base.itemsAmount <= base.options.items) {
                    return;
                }
                if (base.isCssFinish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }
                if (base.isCss3Finish === false && !base.options.dragBeforeAnimFinish) {
                    return false;
                }

                if (base.options.autoPlay !== false) {
                    window.clearInterval(base.autoPlayInterval);
                }

                if (base.browser.isTouch !== true && !base.$owlWrapper.hasClass("grabbing")) {
                    base.$owlWrapper.addClass("grabbing");
                }

                base.newPosX = 0;
                base.newRelativeX = 0;

                $(this).css(base.removeTransition());

                position = $(this).position();
                locals.relativePos = position.left;

                locals.offsetX = getTouches(ev).x - position.left;
                locals.offsetY = getTouches(ev).y - position.top;

                swapEvents("on");

                locals.sliding = false;
                locals.targetElement = ev.target || ev.srcElement;
            }

            function dragMove(event) {
                var ev = event.originalEvent || event || window.event,
                    minSwipe,
                    maxSwipe;

                base.newPosX = getTouches(ev).x - locals.offsetX;
                base.newPosY = getTouches(ev).y - locals.offsetY;
                base.newRelativeX = base.newPosX - locals.relativePos;

                if (typeof base.options.startDragging === "function" && locals.dragging !== true && base.newRelativeX !== 0) {
                    locals.dragging = true;
                    base.options.startDragging.apply(base, [base.$elem]);
                }

                if ((base.newRelativeX > 8 || base.newRelativeX < -8) && (base.browser.isTouch === true)) {
                    if (ev.preventDefault !== undefined) {
                        ev.preventDefault();
                    } else {
                        ev.returnValue = false;
                    }
                    locals.sliding = true;
                }

                if ((base.newPosY > 10 || base.newPosY < -10) && locals.sliding === false) {
                    $(document).off("touchmove.owl");
                }

                minSwipe = function() {
                    return base.newRelativeX / 5;
                };

                maxSwipe = function() {
                    return base.maximumPixels + base.newRelativeX / 5;
                };

                base.newPosX = Math.max(Math.min(base.newPosX, minSwipe()), maxSwipe());
                if (base.browser.support3d === true) {
                    base.transition3d(base.newPosX);
                } else {
                    base.css2move(base.newPosX);
                }
            }

            function dragEnd(event) {
                var ev = event.originalEvent || event || window.event,
                    newPosition,
                    handlers,
                    owlStopEvent;

                ev.target = ev.target || ev.srcElement;

                locals.dragging = false;

                if (base.browser.isTouch !== true) {
                    base.$owlWrapper.removeClass("grabbing");
                }

                if (base.newRelativeX < 0) {
                    base.dragDirection = base.owl.dragDirection = "left";
                } else {
                    base.dragDirection = base.owl.dragDirection = "right";
                }

                if (base.newRelativeX !== 0) {
                    newPosition = base.getNewPosition();
                    base.goTo(newPosition, false, "drag");
                    if (locals.targetElement === ev.target && base.browser.isTouch !== true) {
                        $(ev.target).on("click.disable", function(ev) {
                            ev.stopImmediatePropagation();
                            ev.stopPropagation();
                            ev.preventDefault();
                            $(ev.target).off("click.disable");
                        });
                        handlers = $._data(ev.target, "events").click;
                        owlStopEvent = handlers.pop();
                        handlers.splice(0, 0, owlStopEvent);
                    }
                }
                swapEvents("off");
            }
            base.$elem.on(base.ev_types.start, ".owl-wrapper", dragStart);
        },

        getNewPosition: function() {
            var base = this,
                newPosition = base.closestItem();

            if (newPosition > base.maximumItem) {
                base.currentItem = base.maximumItem;
                newPosition = base.maximumItem;
            } else if (base.newPosX >= 0) {
                newPosition = 0;
                base.currentItem = 0;
            }
            return newPosition;
        },
        closestItem: function() {
            var base = this,
                array = base.options.scrollPerPage === true ? base.pagesInArray : base.positionsInArray,
                goal = base.newPosX,
                closest = null;

            $.each(array, function(i, v) {
                if (goal - (base.itemWidth / 20) > array[i + 1] && goal - (base.itemWidth / 20) < v && base.moveDirection() === "left") {
                    closest = v;
                    if (base.options.scrollPerPage === true) {
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        base.currentItem = i;
                    }
                } else if (goal + (base.itemWidth / 20) < v && goal + (base.itemWidth / 20) > (array[i + 1] || array[i] - base.itemWidth) && base.moveDirection() === "right") {
                    if (base.options.scrollPerPage === true) {
                        closest = array[i + 1] || array[array.length - 1];
                        base.currentItem = $.inArray(closest, base.positionsInArray);
                    } else {
                        closest = array[i + 1];
                        base.currentItem = i + 1;
                    }
                }
            });
            return base.currentItem;
        },

        moveDirection: function() {
            var base = this,
                direction;
            if (base.newRelativeX < 0) {
                direction = "right";
                base.playDirection = "next";
            } else {
                direction = "left";
                base.playDirection = "prev";
            }
            return direction;
        },

        customEvents: function() {
            /*jslint unparam: true*/
            var base = this;
            base.$elem.on("owl.next", function() {
                base.next();
            });
            base.$elem.on("owl.prev", function() {
                base.prev();
            });
            base.$elem.on("owl.play", function(event, speed) {
                base.options.autoPlay = speed;
                base.play();
                base.hoverStatus = "play";
            });
            base.$elem.on("owl.stop", function() {
                base.stop();
                base.hoverStatus = "stop";
            });
            base.$elem.on("owl.goTo", function(event, item) {
                base.goTo(item);
            });
            base.$elem.on("owl.jumpTo", function(event, item) {
                base.jumpTo(item);
            });
        },

        stopOnHover: function() {
            var base = this;
            if (base.options.stopOnHover === true && base.browser.isTouch !== true && base.options.autoPlay !== false) {
                base.$elem.on("mouseover", function() {
                    base.stop();
                });
                base.$elem.on("mouseout", function() {
                    if (base.hoverStatus !== "stop") {
                        base.play();
                    }
                });
            }
        },

        lazyLoad: function() {
            var base = this,
                i,
                $item,
                itemNumber,
                $lazyImg,
                follow;

            if (base.options.lazyLoad === false) {
                return false;
            }
            for (i = 0; i < base.itemsAmount; i += 1) {
                $item = $(base.$owlItems[i]);

                if ($item.data("owl-loaded") === "loaded") {
                    continue;
                }

                itemNumber = $item.data("owl-item");
                $lazyImg = $item.find(".lazyOwl");

                if (typeof $lazyImg.data("src") !== "string") {
                    $item.data("owl-loaded", "loaded");
                    continue;
                }
                if ($item.data("owl-loaded") === undefined) {
                    $lazyImg.hide();
                    $item.addClass("loading").data("owl-loaded", "checked");
                }
                if (base.options.lazyFollow === true) {
                    follow = itemNumber >= base.currentItem;
                } else {
                    follow = true;
                }
                if (follow && itemNumber < base.currentItem + base.options.items && $lazyImg.length) {
                    $lazyImg.each(function() {
                        base.lazyPreload($item, $(this));
                    });
                }
            }
        },

        lazyPreload: function($item, $lazyImg) {
            var base = this,
                iterations = 0,
                isBackgroundImg;

            if ($lazyImg.prop("tagName") === "DIV") {
                $lazyImg.css("background-image", "url(" + $lazyImg.data("src") + ")");
                isBackgroundImg = true;
            } else {
                $lazyImg[0].src = $lazyImg.data("src");
            }

            function showImage() {
                $item.data("owl-loaded", "loaded").removeClass("loading");
                $lazyImg.removeAttr("data-src");
                if (base.options.lazyEffect === "fade") {
                    $lazyImg.fadeIn(400);
                } else {
                    $lazyImg.show();
                }
                if (typeof base.options.afterLazyLoad === "function") {
                    base.options.afterLazyLoad.apply(this, [base.$elem]);
                }
            }

            function checkLazyImage() {
                iterations += 1;
                if (base.completeImg($lazyImg.get(0)) || isBackgroundImg === true) {
                    showImage();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkLazyImage, 100);
                } else {
                    showImage();
                }
            }

            checkLazyImage();
        },

        autoHeight: function() {
            var base = this,
                $currentimg = $(base.$owlItems[base.currentItem]).find("img"),
                iterations;

            function addHeight() {
                var $currentItem = $(base.$owlItems[base.currentItem]).height();
                base.wrapperOuter.css("height", $currentItem + "px");
                if (!base.wrapperOuter.hasClass("autoHeight")) {
                    window.setTimeout(function() {
                        base.wrapperOuter.addClass("autoHeight");
                    }, 0);
                }
            }

            function checkImage() {
                iterations += 1;
                if (base.completeImg($currentimg.get(0))) {
                    addHeight();
                } else if (iterations <= 100) { //if image loads in less than 10 seconds 
                    window.setTimeout(checkImage, 100);
                } else {
                    base.wrapperOuter.css("height", ""); //Else remove height attribute
                }
            }

            if ($currentimg.get(0) !== undefined) {
                iterations = 0;
                checkImage();
            } else {
                addHeight();
            }
        },

        completeImg: function(img) {
            var naturalWidthType;

            if (!img.complete) {
                return false;
            }
            naturalWidthType = typeof img.naturalWidth;
            if (naturalWidthType !== "undefined" && img.naturalWidth === 0) {
                return false;
            }
            return true;
        },

        onVisibleItems: function() {
            var base = this,
                i;

            if (base.options.addClassActive === true) {
                base.$owlItems.removeClass("active");
            }
            base.visibleItems = [];
            for (i = base.currentItem; i < base.currentItem + base.options.items; i += 1) {
                base.visibleItems.push(i);

                if (base.options.addClassActive === true) {
                    $(base.$owlItems[i]).addClass("active");
                }
            }
            base.owl.visibleItems = base.visibleItems;
        },

        transitionTypes: function(className) {
            var base = this;
            //Currently available: "fade", "backSlide", "goDown", "fadeUp"
            base.outClass = "owl-" + className + "-out";
            base.inClass = "owl-" + className + "-in";
        },

        singleItemTransition: function() {
            var base = this,
                outClass = base.outClass,
                inClass = base.inClass,
                $currentItem = base.$owlItems.eq(base.currentItem),
                $prevItem = base.$owlItems.eq(base.prevItem),
                prevPos = Math.abs(base.positionsInArray[base.currentItem]) + base.positionsInArray[base.prevItem],
                origin = Math.abs(base.positionsInArray[base.currentItem]) + base.itemWidth / 2,
                animEnd = 'webkitAnimationEnd oAnimationEnd MSAnimationEnd animationend';

            base.isTransition = true;

            base.$owlWrapper
                .addClass('owl-origin')
                .css({
                    "-webkit-transform-origin": origin + "px",
                    "-moz-perspective-origin": origin + "px",
                    "perspective-origin": origin + "px"
                });

            function transStyles(prevPos) {
                return {
                    "position": "relative",
                    "left": prevPos + "px"
                };
            }

            $prevItem
                .css(transStyles(prevPos, 10))
                .addClass(outClass)
                .on(animEnd, function() {
                    base.endPrev = true;
                    $prevItem.off(animEnd);
                    base.clearTransStyle($prevItem, outClass);
                });

            $currentItem
                .addClass(inClass)
                .on(animEnd, function() {
                    base.endCurrent = true;
                    $currentItem.off(animEnd);
                    base.clearTransStyle($currentItem, inClass);
                });
        },

        clearTransStyle: function(item, classToRemove) {
            var base = this;
            item.css({
                "position": "",
                "left": ""
            }).removeClass(classToRemove);

            if (base.endPrev && base.endCurrent) {
                base.$owlWrapper.removeClass('owl-origin');
                base.endPrev = false;
                base.endCurrent = false;
                base.isTransition = false;
            }
        },

        owlStatus: function() {
            var base = this;
            base.owl = {
                "userOptions": base.userOptions,
                "baseElement": base.$elem,
                "userItems": base.$userItems,
                "owlItems": base.$owlItems,
                "currentItem": base.currentItem,
                "prevItem": base.prevItem,
                "visibleItems": base.visibleItems,
                "isTouch": base.browser.isTouch,
                "browser": base.browser,
                "dragDirection": base.dragDirection
            };
        },

        clearEvents: function() {
            var base = this;
            base.$elem.off(".owl owl mousedown.disableTextSelect");
            $(document).off(".owl owl");
            $(window).off("resize", base.resizer);
        },

        unWrap: function() {
            var base = this;
            if (base.$elem.children().length !== 0) {
                base.$owlWrapper.unwrap();
                base.$userItems.unwrap().unwrap();
                if (base.owlControls) {
                    base.owlControls.remove();
                }
            }
            base.clearEvents();
            base.$elem.attr({
                style: base.$elem.data("owl-originalStyles") || "",
                class: base.$elem.data("owl-originalClasses")
            });
        },

        destroy: function() {
            var base = this;
            base.stop();
            window.clearInterval(base.checkVisible);
            base.unWrap();
            base.$elem.removeData();
        },

        reinit: function(newOptions) {
            var base = this,
                options = $.extend({}, base.userOptions, newOptions);
            base.unWrap();
            base.init(options, base.$elem);
        },

        addItem: function(htmlString, targetPosition) {
            var base = this,
                position;

            if (!htmlString) { return false; }

            if (base.$elem.children().length === 0) {
                base.$elem.append(htmlString);
                base.setVars();
                return false;
            }
            base.unWrap();
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }
            if (position >= base.$userItems.length || position === -1) {
                base.$userItems.eq(-1).after(htmlString);
            } else {
                base.$userItems.eq(position).before(htmlString);
            }

            base.setVars();
        },

        removeItem: function(targetPosition) {
            var base = this,
                position;

            if (base.$elem.children().length === 0) {
                return false;
            }
            if (targetPosition === undefined || targetPosition === -1) {
                position = -1;
            } else {
                position = targetPosition;
            }

            base.unWrap();
            base.$userItems.eq(position).remove();
            base.setVars();
        }

    };

    $.fn.owlCarousel = function(options) {
        return this.each(function() {
            if ($(this).data("owl-init") === true) {
                return false;
            }
            $(this).data("owl-init", true);
            var carousel = Object.create(Carousel);
            carousel.init(options, this);
            $.data(this, "owlCarousel", carousel);
        });
    };

    $.fn.owlCarousel.options = {

        items: 5,
        itemsCustom: false,
        itemsDesktop: [1199, 4],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768, 2],
        itemsTabletSmall: false,
        itemsMobile: [479, 1],
        singleItem: false,
        itemsScaleUp: false,

        slideSpeed: 200,
        paginationSpeed: 800,
        rewindSpeed: 1000,

        autoPlay: false,
        stopOnHover: false,

        navigation: false,
        navigationText: ["prev", "next"],
        rewindNav: true,
        scrollPerPage: false,

        pagination: true,
        paginationNumbers: false,

        responsive: true,
        responsiveRefreshRate: 200,
        responsiveBaseWidth: window,

        baseClass: "owl-carousel",
        theme: "owl-theme",

        lazyLoad: false,
        lazyFollow: true,
        lazyEffect: "fade",

        autoHeight: false,

        jsonPath: false,
        jsonSuccess: false,

        dragBeforeAnimFinish: true,
        mouseDrag: true,
        touchDrag: true,

        addClassActive: false,
        transitionStyle: false,

        beforeUpdate: false,
        afterUpdate: false,
        beforeInit: false,
        afterInit: false,
        beforeMove: false,
        afterMove: false,
        afterAction: false,
        startDragging: false,
        afterLazyLoad: false
    };
}(jQuery, window, document));


// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// owl.carousel.js end
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>





// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// wow.min.js start
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
(function() {
    var a, b, c, d, e, f = function(a, b) { return function() { return a.apply(b, arguments) } },
        g = [].indexOf || function(a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    b = function() {
        function a() {}
        return a.prototype.extend = function(a, b) { var c, d; for (c in b) d = b[c], null == a[c] && (a[c] = d); return a }, a.prototype.isMobile = function(a) { return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a) }, a.prototype.createEvent = function(a, b, c, d) { var e; return null == b && (b = !1), null == c && (c = !1), null == d && (d = null), null != document.createEvent ? (e = document.createEvent("CustomEvent"), e.initCustomEvent(a, b, c, d)) : null != document.createEventObject ? (e = document.createEventObject(), e.eventType = a) : e.eventName = a, e }, a.prototype.emitEvent = function(a, b) { return null != a.dispatchEvent ? a.dispatchEvent(b) : b in (null != a) ? a[b]() : "on" + b in (null != a) ? a["on" + b]() : void 0 }, a.prototype.addEvent = function(a, b, c) { return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c }, a.prototype.removeEvent = function(a, b, c) { return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b] }, a.prototype.innerHeight = function() { return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight }, a
    }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
        function a() { this.keys = [], this.values = [] }
        return a.prototype.get = function(a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
                if (c = f[b], c === a) return this.values[b]
        }, a.prototype.set = function(a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
                if (d = g[c], d === a) return void(this.values[c] = b);
            return this.keys.push(a), this.values.push(b)
        }, a
    }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
        function a() { "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.") }
        return a.notSupported = !0, a.prototype.observe = function() {}, a
    }()), d = this.getComputedStyle || function(a) { return this.getPropertyValue = function(b) { var c; return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) { return b.toUpperCase() }), (null != (c = a.currentStyle) ? c[b] : void 0) || null }, this }, e = /(\-([a-z]){1})/g, this.WOW = function() {
        function e(a) { null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.resetAnimation = f(this.resetAnimation, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c, this.wowEvent = this.util().createEvent(this.config.boxClass) }
        return e.prototype.defaults = { boxClass: "wow", animateClass: "animated", offset: 0, mobile: !0, live: !0, callback: null }, e.prototype.init = function() { var a; return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = [] }, e.prototype.start = function() {
            var b, c, d, e;
            if (this.stopped = !1, this.boxes = function() { var a, c, d, e; for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.all = function() { var a, c, d, e; for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b); return e }.call(this), this.boxes.length)
                if (this.disabled()) this.resetStyle();
                else
                    for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
            return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) { return function(b) { var c, d, e, f, g; for (g = [], c = 0, d = b.length; d > c; c++) f = b[c], g.push(function() { var a, b, c, d; for (c = f.addedNodes || [], d = [], a = 0, b = c.length; b > a; a++) e = c[a], d.push(this.doSync(e)); return d }.call(a)); return g } }(this)).observe(document.body, { childList: !0, subtree: !0 }) : void 0
        }, e.prototype.stop = function() { return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0 }, e.prototype.sync = function() { return a.notSupported ? this.doSync(this.element) : void 0 }, e.prototype.doSync = function(a) { var b, c, d, e, f; if (null == a && (a = this.element), 1 === a.nodeType) { for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0); return f } }, e.prototype.show = function(a) { return this.applyStyle(a), a.className = a.className + " " + this.config.animateClass, null != this.config.callback && this.config.callback(a), this.util().emitEvent(a, this.wowEvent), this.util().addEvent(a, "animationend", this.resetAnimation), this.util().addEvent(a, "oanimationend", this.resetAnimation), this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation), this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation), a }, e.prototype.applyStyle = function(a, b) { var c, d, e; return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) { return function() { return f.customStyle(a, b, d, c, e) } }(this)) }, e.prototype.animate = function() { return "requestAnimationFrame" in window ? function(a) { return window.requestAnimationFrame(a) } : function(a) { return a() } }(), e.prototype.resetStyle = function() { var a, b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible"); return e }, e.prototype.resetAnimation = function(a) { var b; return a.type.toLowerCase().indexOf("animationend") >= 0 ? (b = a.target || a.srcElement, b.className = b.className.replace(this.config.animateClass, "").trim()) : void 0 }, e.prototype.customStyle = function(a, b, c, d, e) { return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, { animationDuration: c }), d && this.vendorSet(a.style, { animationDelay: d }), e && this.vendorSet(a.style, { animationIterationCount: e }), this.vendorSet(a.style, { animationName: b ? "none" : this.cachedAnimationName(a) }), a }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
            var c, d, e, f;
            d = [];
            for (c in b) e = b[c], a["" + c] = e, d.push(function() { var b, d, g, h; for (g = this.vendors, h = [], b = 0, d = g.length; d > b; b++) f = g[b], h.push(a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] = e); return h }.call(this));
            return d
        }, e.prototype.vendorCSS = function(a, b) { var c, e, f, g, h, i; for (h = d(a), g = h.getPropertyCSSValue(b), f = this.vendors, c = 0, e = f.length; e > c; c++) i = f[c], g = g || h.getPropertyCSSValue("-" + i + "-" + b); return g }, e.prototype.animationName = function(a) { var b; try { b = this.vendorCSS(a, "animation-name").cssText } catch (c) { b = d(a).getPropertyValue("animation-name") } return "none" === b ? "" : b }, e.prototype.cacheAnimationName = function(a) { return this.animationNameCache.set(a, this.animationName(a)) }, e.prototype.cachedAnimationName = function(a) { return this.animationNameCache.get(a) }, e.prototype.scrollHandler = function() { return this.scrolled = !0 }, e.prototype.scrollCallback = function() { var a; return !this.scrolled || (this.scrolled = !1, this.boxes = function() { var b, c, d, e; for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a)); return e }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop() }, e.prototype.offsetTop = function(a) { for (var b; void 0 === a.offsetTop;) a = a.parentNode; for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop; return b }, e.prototype.isVisible = function(a) { var b, c, d, e, f; return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f }, e.prototype.util = function() { return null != this._util ? this._util : this._util = new b }, e.prototype.disabled = function() { return !this.config.mobile && this.util().isMobile(navigator.userAgent) }, e
    }()
}).call(this);


// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// wow.min.js end
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>
// ------------------------------------------------------------>