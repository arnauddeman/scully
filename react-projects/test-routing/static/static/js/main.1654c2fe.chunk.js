(this['webpackJsonptes-routing'] = this['webpackJsonptes-routing'] || []).push([
  [0],
  {
    49: function(e, t) {
      function n(e) {
        return Promise.resolve().then(function() {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = 'MODULE_NOT_FOUND'), t);
        });
      }
      (n.keys = function() {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = 49);
    },
    63: function(e, t, n) {
      e.exports = n(74);
    },
    68: function(e, t, n) {},
    74: function(e, t, n) {
      'use strict';
      n.r(t);
      var a = n(2),
        r = n.n(a),
        c = n(51),
        o = n.n(c),
        l = (n(68), n(13)),
        s = n(19),
        u = n(32),
        i = n.n(u),
        m = n(43),
        h = n(46),
        p = n(59),
        f = n(52),
        b = n(53),
        E = n(31),
        d = 'State must be an object',
        v = 'You must provide a state to set',
        j = "The state hasn't been set",
        O = 'ScullyIO-transfer-state',
        S = '/** ___SCULLY_STATE_START___ */',
        _ = '/** ___SCULLY_STATE_END___ */',
        w = (function() {
          function e(t) {
            if ((Object(f.a)(this, e), t && 'object' !== typeof t)) throw d;
            (this.state = t || null), (this.script = Object(E.a)() ? document.createElement('script') : {});
          }
          return (
            Object(b.a)(e, [
              {
                key: 'setState',
                value: function(e) {
                  if (!e) throw v;
                  if ('object' !== typeof e) throw d;
                  (this.state = Object(p.a)({}, this.state, {}, e)),
                    (this.script.textContent = ''
                      .concat(S)
                      .concat(JSON.stringify(this.state))
                      .concat(_)),
                    Object(E.a)() && this._injectScript();
                },
              },
              {
                key: 'getState',
                value: function(e) {
                  var t = Object(E.a)() ? this._readStateFromScript : this.state;
                  if (!t.hasOwnProperty(e)) throw j;
                  return t[e];
                },
              },
              {
                key: '_injectScript',
                value: function() {
                  this.script.setAttribute('id', O), document.body.appendChild(this.script);
                },
              },
              {
                key: '_readStateFromScript',
                value: function() {
                  var e = document
                    .getElementById(O)
                    .split(S)[1]
                    .split(_)[0];
                  return JSON.parse(e);
                },
              },
            ]),
            e
          );
        })(),
        y = n(54),
        g = n(55),
        k = n(58),
        x = n(60),
        T = (function(e) {
          Object(x.a)(n, e);
          var t = Object(k.a)(n);
          function n() {
            return Object(y.a)(this, n), t.apply(this, arguments);
          }
          return (
            Object(g.a)(n, [
              {
                key: 'render',
                value: function() {
                  var e = this.props.label;
                  return r.a.createElement(
                    l.b,
                    {to: '/about'},
                    r.a.createElement('span', {style: L.labelText}, e)
                  );
                },
              },
            ]),
            n
          );
        })(r.a.Component),
        L = {labelText: {fontSize: 36}},
        U = T,
        A = 'http://localhost:8200';
      function C() {
        var e = Object(s.f)().id,
          t = Object(a.useState)([]),
          n = Object(h.a)(t, 2),
          c = n[0],
          o = n[1],
          u = Object(a.useState)(null),
          p = Object(h.a)(u, 2),
          f = p[0],
          b = p[1],
          E = new w();
        return (
          Object(a.useEffect)(
            function() {
              var t = (function() {
                var e = Object(m.a)(
                  i.a.mark(function e() {
                    var t, n;
                    return i.a.wrap(function(e) {
                      for (;;)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (e.next = 2), fetch(''.concat(A, '/users'));
                          case 2:
                            return (t = e.sent), (e.next = 5), t.json();
                          case 5:
                            (n = e.sent), o(n), E.setState({userList: n});
                          case 8:
                          case 'end':
                            return e.stop();
                        }
                    }, e);
                  })
                );
                return function() {
                  return e.apply(this, arguments);
                };
              })();
              e
                ? (function() {
                    var t = Object(m.a)(
                      i.a.mark(function t() {
                        var n, a;
                        return i.a.wrap(function(t) {
                          for (;;)
                            switch ((t.prev = t.next)) {
                              case 0:
                                return (t.next = 2), fetch(''.concat(A, '/users/').concat(e));
                              case 2:
                                return (n = t.sent), (t.next = 5), n.json();
                              case 5:
                                (a = t.sent), b(a);
                              case 7:
                              case 'end':
                                return t.stop();
                            }
                        }, t);
                      })
                    );
                    return function() {
                      return t.apply(this, arguments);
                    };
                  })()()
                : t();
            },
            [e]
          ),
          r.a.createElement(
            'div',
            null,
            e
              ? r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('h2', null, 'Users - user id: ', e),
                  f && r.a.createElement('h2', null, ''.concat(f.name, ' - ').concat(f.email)),
                  r.a.createElement(U, {label: 'go to about'})
                )
              : r.a.createElement(
                  r.a.Fragment,
                  null,
                  r.a.createElement('h2', null, 'Users List'),
                  r.a.createElement(
                    'ul',
                    null,
                    c.map(function(e) {
                      return r.a.createElement(
                        'li',
                        {key: e.id},
                        r.a.createElement(
                          l.b,
                          {to: '/users/'.concat(e.id)},
                          ''.concat(e.name, ' -  ').concat(e.email)
                        )
                      );
                    })
                  )
                )
          )
        );
      }
      function F() {
        return r.a.createElement(
          l.a,
          null,
          r.a.createElement(
            'div',
            null,
            r.a.createElement(
              'nav',
              null,
              r.a.createElement(
                'ul',
                null,
                r.a.createElement('li', null, r.a.createElement(l.b, {to: '/'}, 'Home')),
                r.a.createElement('li', null, r.a.createElement(l.b, {to: '/about'}, 'About')),
                r.a.createElement('li', null, r.a.createElement(l.b, {to: '/users'}, 'Users'))
              )
            ),
            r.a.createElement(
              s.c,
              null,
              r.a.createElement(s.a, {path: '/about', component: J}),
              r.a.createElement(s.a, {path: '/users/:id', component: C}),
              r.a.createElement(s.a, {path: '/users', component: C}),
              r.a.createElement(s.a, {path: '/'}, r.a.createElement(N, null))
            )
          )
        );
      }
      var N = function() {
        return r.a.createElement('h2', null, 'Home');
      };
      function J() {
        return r.a.createElement('h2', null, 'About');
      }
      Boolean(
        'localhost' === window.location.hostname ||
          '[::1]' === window.location.hostname ||
          window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/)
      );
      o.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(F, null)),
        document.getElementById('root')
      ),
        'serviceWorker' in navigator &&
          navigator.serviceWorker.ready
            .then(function(e) {
              e.unregister();
            })
            .catch(function(e) {
              console.error(e.message);
            });
    },
  },
  [[63, 1, 2]],
]);
//# sourceMappingURL=main.1654c2fe.chunk.js.map
