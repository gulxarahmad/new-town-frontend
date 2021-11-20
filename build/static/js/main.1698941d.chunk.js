(this.webpackJsonpclient = this.webpackJsonpclient || []).push([
  [0],
  {
    149: function (e, t, n) {},
    177: function (e, t, n) {
      "use strict";
      n.r(t);
      var a = n(1),
        i = n.n(a),
        s = n(15),
        c = n.n(s),
        r = (n(149), n.p, n(80), n(48)),
        l = n.n(r),
        o = n(74),
        d = n(7),
        j = n(18),
        b = n(8),
        h = n(3),
        p = n(13),
        x = n.n(p),
        O = n(20),
        m = n(215),
        u = n(216),
        g = n(232),
        f = n(217),
        y = n(218),
        v = n(221),
        w = n(87),
        N = n(220),
        C = n(219),
        S = n(222),
        D = n(29),
        P = n.n(D),
        A = n(30),
        I = n.n(A),
        R = n(209),
        k = n(212),
        B = n(213),
        T = n(123),
        L = n.n(T),
        M = n(125),
        z = n.n(M),
        W = n(124),
        F = n.n(W),
        H = n(126),
        E = n.n(H),
        _ = n(106),
        Y = n.n(_),
        G = n(0),
        J = Object(G.jsxs)("div", {
          children: [
            Object(G.jsx)("a", {
              href: "/",
              children: Object(G.jsxs)(R.a, {
                button: !0,
                children: [
                  Object(G.jsx)(k.a, { children: Object(G.jsx)(L.a, {}) }),
                  Object(G.jsx)(B.a, { primary: "Dashboard" }),
                ],
              }),
            }),
            Object(G.jsxs)("a", {
              href: "/add-booking",
              children: [
                Object(G.jsxs)(R.a, {
                  button: !0,
                  children: [
                    Object(G.jsx)(k.a, { children: Object(G.jsx)(Y.a, {}) }),
                    Object(G.jsx)(B.a, { primary: "Add Booking" }),
                  ],
                }),
                " ",
              ],
            }),
            Object(G.jsxs)("a", {
              href: "/all-bookings",
              children: [
                " ",
                Object(G.jsxs)(R.a, {
                  button: !0,
                  children: [
                    Object(G.jsx)(k.a, { children: Object(G.jsx)(F.a, {}) }),
                    Object(G.jsx)(B.a, { primary: "All Bookings" }),
                  ],
                }),
              ],
            }),
            Object(G.jsxs)("a", {
              href: "/search-booking",
              children: [
                Object(G.jsxs)(R.a, {
                  button: !0,
                  children: [
                    Object(G.jsx)(k.a, { children: Object(G.jsx)(z.a, {}) }),
                    Object(G.jsx)(B.a, { primary: "Search Bookings" }),
                  ],
                }),
                " ",
              ],
            }),
            Object(G.jsx)("a", {
              href: "/change-password/",
              children: Object(G.jsxs)(R.a, {
                children: [
                  Object(G.jsx)(k.a, { children: Object(G.jsx)(E.a, {}) }),
                  Object(G.jsx)(B.a, { primary: "Change Password" }),
                ],
              }),
            }),
          ],
        }),
        q = n(28),
        K = n.n(q),
        U = "https://new-town-backend.herokuapp.com",
        X = n(214),
        V = function () {
          return Object(G.jsx)("div", {
            style: {
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "100%",
            },
            children: Object(G.jsx)(X.a, {
              style: { width: 100, height: 100 },
              animation: "border",
            }),
          });
        },
        Q = n(43),
        Z = Object(m.a)(function (e) {
          return {
            root: { display: "flex" },
            toolbar: { paddingRight: 24 },
            toolbarIcon: Object(b.a)(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0 8px",
              },
              e.mixins.toolbar
            ),
            appBar: {
              zIndex: e.zIndex.drawer + 1,
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              marginLeft: 240,
              width: "calc(100% - ".concat(240, "px)"),
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            menuButton: { marginRight: 36 },
            menuButtonHidden: { display: "none" },
            title: { flexGrow: 1 },
            drawerPaper: {
              position: "relative",
              whiteSpace: "nowrap",
              width: 240,
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            drawerPaperClose: Object(j.a)(
              {
                overflowX: "hidden",
                transition: e.transitions.create("width", {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
                width: e.spacing(7),
              },
              e.breakpoints.up("sm"),
              { width: e.spacing(9) }
            ),
            appBarSpacer: e.mixins.toolbar,
            content: { flexGrow: 1, height: "100vh", overflow: "auto" },
            container: {
              paddingTop: e.spacing(4),
              paddingBottom: e.spacing(4),
            },
            paper: {
              padding: e.spacing(2),
              display: "flex",
              overflow: "auto",
              flexDirection: "column",
            },
            fixedHeight: { height: 240 },
          };
        }),
        $ = {
          plotNo: null,
          street: "",
          plotSize: "",
          type: "",
          phase: "",
          clientName: "",
          fhName: "",
          residentialAddress: "",
          permanentAddress: "",
          contactNumber: null,
          landLine: null,
          email: "",
          occupation: "",
          age: null,
          nationality: "",
          clientCNIC: null,
          nomineeName: "",
          nomineeRelation: "",
          nomineeCNIC: null,
          nomineeAddress: "",
          secondAppName: "",
          secondAppCNIC: "",
          totalPlotCost: null,
          downPayment: null,
          balanceAmount: null,
          bankOrDraft: "",
          date: null,
          drawnOn: null,
          image: "",
          registrationNumber: "",
          remarks: "Remaining Amount As Per Schedule",
        };

      function ee(e) {
        return Object(G.jsxs)("label", {
          children: [
            e.label,
            Object(G.jsx)("br", {}),
            Object(G.jsx)("input", Object(b.a)({}, e)),
          ],
        });
      }
      var te = function () {
          var e = Z(),
            t = Object(a.useState)(!1),
            n = Object(d.a)(t, 2),
            s = n[0],
            c = n[1],
            r = Object(a.useState)(!1),
            p = Object(d.a)(r, 2),
            m = p[0],
            D = p[1],
            A = i.a.useState(!0),
            R = Object(d.a)(A, 2),
            k = R[0],
            B = R[1],
            T = (Object(h.a)(e.paper, e.fixedHeight), Object(O.f)());
          Object(a.useEffect)(
            function () {
              localStorage.getItem("userInfo") || T.push("/login");
            },
            [T]
          );
          var L = Object(a.useState)($),
            M = Object(d.a)(L, 2),
            z = M[0],
            W = M[1];

          function F(e) {
            for (
              var t = "",
                n = "01234567890123456789123123123234456456",
                a = n.length,
                i = 0;
              i < e;
              i++
            )
              t += n.charAt(Math.floor(Math.random() * a));
            return t;
          }
          var H = function (e) {
              W(
                Object(b.a)(
                  Object(b.a)({}, z),
                  {},
                  Object(j.a)({}, e.target.name, e.target.value)
                )
              );
            },
            E = (function () {
              var e = Object(o.a)(
                l.a.mark(function e(t) {
                  var n, a, i, s;
                  return l.a.wrap(function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (
                            (t.preventDefault(),
                            console.log(z),
                            null !== z.plotNo &&
                              "" !== z.street &&
                              "" !== z.plotSize &&
                              "" !== z.type &&
                              "" !== z.phase &&
                              "" !== z.clientName &&
                              "" !== z.fhName &&
                              "" !== z.residentialAddress &&
                              "" !== z.permanentAddress &&
                              null !== z.contactNumber &&
                              null !== z.landLine &&
                              "" !== z.email &&
                              "" !== z.occupation &&
                              null !== z.age &&
                              "" !== z.nationality &&
                              null !== z.clientCNIC &&
                              "" !== z.nomineeName &&
                              "" !== z.nomineeRelation &&
                              null !== z.nomineeCNIC &&
                              "" !== z.nomineeAddress &&
                              null !== z.totalPlotCost &&
                              null !== z.downPayment &&
                              "" !== z.bankOrDraft &&
                              null !== z.date &&
                              null !== z.drawnOn &&
                              "" !== z.image &&
                              "" !== z.remarks)
                          ) {
                            e.next = 6;
                            break;
                          }
                          alert("Please Fill Entries"), (e.next = 49);
                          break;
                        case 6:
                          return (
                            c(!0),
                            D(!0),
                            (n = new FormData()),
                            (a = 1 + 9999 * Math.random()),
                            (i = F(10)),
                            n.append(
                              "registrationNumber",
                              "NA" + parseInt(z.clientCNIC) + parseInt(a)
                            ),
                            n.append("_id", i),
                            n.append("plotNo", z.plotNo),
                            n.append("street", z.street),
                            n.append("plotSize", z.plotSize),
                            n.append("type", z.type),
                            n.append("phase", z.phase),
                            n.append("clientName", z.clientName),
                            n.append("fhName", z.fhName),
                            n.append(
                              "residentialAddress",
                              z.residentialAddress
                            ),
                            n.append("permanentAddress", z.permanentAddress),
                            n.append("contactNumber", z.contactNumber),
                            n.append("landLine", z.landLine),
                            n.append("email", z.email),
                            n.append("occupation", z.occupation),
                            n.append("age", z.age),
                            n.append("nationality", z.nationality),
                            n.append("clientCNIC", z.clientCNIC),
                            n.append("nomineeName", z.nomineeName),
                            n.append("nomineeRelation", z.nomineeRelation),
                            n.append("nomineeCNIC", z.nomineeCNIC),
                            n.append("nomineeAddress", z.nomineeAddress),
                            n.append("secondAppName", z.secondAppName),
                            n.append("secondAppCNIC", z.secondAppCNIC),
                            n.append("totalPlotCost", z.totalPlotCost),
                            n.append("downPayment", z.downPayment),
                            n.append(
                              "balanceAmount",
                              z.totalPlotCost - z.downPayment
                            ),
                            n.append("bankOrDraft", z.bankOrDraft),
                            n.append("date", z.date),
                            n.append("drawnOn", z.drawnOn),
                            n.append("image", z.image),
                            n.append("remarks", z.remarks),
                            console.log(Array.from(n)),
                            (e.next = 46),
                            x.a.post("".concat(U, "/uploads"), n, {
                              headers: { enctype: "multipart/form-data" },
                            })
                          );
                        case 46:
                          (s = e.sent),
                            "successful" === s.data
                              ? (alert("Booking has been added"),
                                c(!1),
                                T.push("/booking-preview/".concat(i)))
                              : alert("Some this Wrong");
                        case 49:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              );
              return function (t) {
                return e.apply(this, arguments);
              };
            })();
          return Object(G.jsx)(G.Fragment, {
            children: Object(G.jsxs)("div", {
              className: e.root,
              children: [
                Object(G.jsx)(u.a, {}),
                Object(G.jsx)(f.a, {
                  position: "absolute",
                  className: Object(h.a)(e.appBar, k && e.appBarShift),
                  children: Object(G.jsxs)(y.a, {
                    className: e.toolbar,
                    children: [
                      Object(G.jsx)(C.a, {
                        edge: "start",
                        color: "inherit",
                        "aria-label": "open drawer",
                        onClick: function () {
                          B(!0);
                        },
                        className: Object(h.a)(
                          e.menuButton,
                          k && e.menuButtonHidden
                        ),
                        children: Object(G.jsx)(P.a, {}),
                      }),
                      Object(G.jsx)(w.a, {
                        component: "h1",
                        variant: "h6",
                        color: "inherit",
                        noWrap: !0,
                        className: e.title,
                        children: "Booking Form",
                      }),
                      Object(G.jsxs)(C.a, {
                        color: "inherit",
                        onClick: function () {
                          localStorage.removeItem("userInfo"), T.push("/login");
                        },
                        children: ["Logout ", Object(G.jsx)(K.a, {})],
                      }),
                    ],
                  }),
                }),
                Object(G.jsxs)(g.a, {
                  variant: "permanent",
                  classes: {
                    paper: Object(h.a)(e.drawerPaper, !k && e.drawerPaperClose),
                  },
                  open: k,
                  children: [
                    Object(G.jsx)("div", {
                      className: e.toolbarIcon,
                      children: Object(G.jsx)(C.a, {
                        onClick: function () {
                          B(!1);
                        },
                        children: Object(G.jsx)(I.a, {}),
                      }),
                    }),
                    Object(G.jsx)(N.a, {}),
                    Object(G.jsx)(v.a, { children: J }),
                  ],
                }),
                Object(G.jsx)("main", {
                  className: e.content,
                  children: Object(G.jsx)(S.a, {
                    maxWidth: "lg",
                    className: e.container,
                    children: Object(G.jsx)("form", {
                      onSubmit: E,
                      style: { marginTop: 100, marginLeft: -20 },
                      children: Object(G.jsxs)("fieldset", {
                        children: [
                          Object(G.jsxs)("div", {
                            style: { display: "flex", flexDirection: "row" },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Plot No:",
                                name: "plotNo",
                                onChange: H,
                                type: "text",
                                placeholder: "Plot No",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Street (sq ft):",
                                name: "street",
                                onChange: H,
                                type: "text",
                                placeholder: "Street",
                              }),
                            ],
                          }),
                          Object(G.jsxs)("div", {
                            style: { display: "flex", flexDirection: "row" },
                            children: [
                              Object(G.jsxs)("select", {
                                style: {
                                  width: 200,
                                  marginTop: 20,
                                  marginRight: 40,
                                },
                                class: "form-select",
                                "aria-label": "Default select example",
                                onChange: function (e) {
                                  return W(
                                    Object(b.a)(
                                      Object(b.a)({}, z),
                                      {},
                                      { plotSize: e.target.value }
                                    )
                                  );
                                },
                                name: "bankOrDraft",
                                children: [
                                  Object(G.jsx)("option", {
                                    selected: !0,
                                    children: "Plot Size",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "1 Marla",
                                    children: "1 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "2 Marla",
                                    children: "2 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "2.5 Marla",
                                    children: "2.5 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "2.75 Marla",
                                    children: "2.75 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "3 Marla",
                                    children: "3 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "4 Marla",
                                    children: "4 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "5 Marla",
                                    children: "5 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "6 Marla",
                                    children: "6 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "7 Marla",
                                    children: "7 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "8 Marla",
                                    children: "8 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "9 Marla",
                                    children: "9 Marla",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "10 Marla",
                                    children: "10 Marla",
                                  }),
                                ],
                              }),
                              Object(G.jsxs)("select", {
                                style: {
                                  width: 200,
                                  marginTop: 20,
                                  marginRight: 40,
                                },
                                class: "form-select",
                                "aria-label": "Default select example",
                                onChange: function (e) {
                                  return W(
                                    Object(b.a)(
                                      Object(b.a)({}, z),
                                      {},
                                      { type: e.target.value }
                                    )
                                  );
                                },
                                children: [
                                  Object(G.jsx)("option", {
                                    selected: !0,
                                    children: "Plot Type",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "Residential",
                                    children: "Residential",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "Commercial",
                                    children: "Commercial",
                                  }),
                                ],
                              }),
                              Object(G.jsxs)("select", {
                                style: { width: 200, marginTop: 20 },
                                class: "form-select",
                                "aria-label": "Default select example",
                                onChange: function (e) {
                                  return W(
                                    Object(b.a)(
                                      Object(b.a)({}, z),
                                      {},
                                      { phase: e.target.value }
                                    )
                                  );
                                },
                                children: [
                                  Object(G.jsx)("option", {
                                    selected: !0,
                                    children: "Phase",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "NA-NP",
                                    children: "NA-NP",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "NA-JTC",
                                    children: "NA-JTC",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 20,
                            },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Name:",
                                name: "clientName",
                                onChange: H,
                                type: "text",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Father/Husband Name:",
                                name: "fhName",
                                onChange: H,
                                type: "text",
                              }),
                            ],
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 20,
                            },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Second Applicant Name:",
                                name: "secondAppName",
                                onChange: H,
                                type: "text",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                },
                                children: [
                                  Object(G.jsx)("label", {
                                    children: "Second Applicant CNIC",
                                  }),
                                  Object(G.jsx)(Q.a, {
                                    format: "#####-#######-#",
                                    type: "text",
                                    onChange: function (e) {
                                      return W(
                                        Object(b.a)(
                                          Object(b.a)({}, z),
                                          {},
                                          { secondAppCNIC: e.target.value }
                                        )
                                      );
                                    },
                                    style: { height: 40 },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(G.jsx)("div", {
                            style: { marginTop: 20 },
                            children: Object(G.jsx)(ee, {
                              label: "Residential Address:",
                              name: "residentialAddress",
                              onChange: H,
                              type: "text",
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginTop: 20 },
                            children: Object(G.jsx)(ee, {
                              label: "Permanent Address:",
                              name: "permanentAddress",
                              onChange: H,
                              type: "text",
                            }),
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 20,
                            },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Contact Number:",
                                name: "contactNumber",
                                onChange: H,
                                type: "number",
                                maxLength: "11",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Landline:",
                                name: "landLine",
                                onChange: H,
                                type: "number",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Email:",
                                name: "email",
                                onChange: H,
                                type: "text",
                                style: { width: 400 },
                              }),
                            ],
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 20,
                            },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Occupation:",
                                name: "occupation",
                                onChange: H,
                                type: "text",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Age:",
                                name: "age",
                                onChange: H,
                                type: "number",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Nationality:",
                                name: "nationality",
                                onChange: H,
                                type: "text",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                },
                                children: [
                                  Object(G.jsx)("label", {
                                    children: "Enter CNIC",
                                  }),
                                  Object(G.jsx)(Q.a, {
                                    format: "#####-#######-#",
                                    type: "text",
                                    onChange: function (e) {
                                      return W(
                                        Object(b.a)(
                                          Object(b.a)({}, z),
                                          {},
                                          { clientCNIC: e.target.value }
                                        )
                                      );
                                    },
                                    style: { height: 40 },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 20,
                            },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Nominee Name:",
                                name: "nomineeName",
                                onChange: H,
                                type: "text",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Nominee Relation:",
                                name: "nomineeRelation",
                                onChange: H,
                                type: "text",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  flexDirection: "column",
                                },
                                children: [
                                  Object(G.jsx)("label", {
                                    children: "Enter CNIC",
                                  }),
                                  Object(G.jsx)(Q.a, {
                                    format: "#####-#######-#",
                                    type: "text",
                                    onChange: function (e) {
                                      return W(
                                        Object(b.a)(
                                          Object(b.a)({}, z),
                                          {},
                                          { nomineeCNIC: e.target.value }
                                        )
                                      );
                                    },
                                    style: { height: 40 },
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(G.jsx)("div", {
                            style: { marginTop: 20 },
                            children: Object(G.jsx)(ee, {
                              label: "Nominee Address:",
                              name: "nomineeAddress",
                              onChange: H,
                              type: "text",
                            }),
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 20,
                            },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Total Plot Cost:",
                                name: "totalPlotCost",
                                onChange: H,
                                type: "number",
                                min: "0",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "Down Payment:",
                                name: "downPayment",
                                onChange: H,
                                type: "number",
                                min: "0",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsxs)("select", {
                                style: {
                                  width: 200,
                                  marginTop: 20,
                                  marginRight: 20,
                                },
                                class: "form-select",
                                "aria-label": "Default select example",
                                onChange: function (e) {
                                  return W(
                                    Object(b.a)(
                                      Object(b.a)({}, z),
                                      {},
                                      { bankOrDraft: e.target.value }
                                    )
                                  );
                                },
                                name: "bankOrDraft",
                                children: [
                                  Object(G.jsx)("option", {
                                    selected: !0,
                                    children: "Payment Method",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "Bank Draft",
                                    children: "Bank Draft",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "Pay Order",
                                    children: "Pay Order",
                                  }),
                                  Object(G.jsx)("option", {
                                    value: "Cash",
                                    children: "Cash",
                                  }),
                                ],
                              }),
                            ],
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              display: "flex",
                              flexDirection: "row",
                              marginTop: 20,
                            },
                            children: [
                              Object(G.jsx)(ee, {
                                label: "Date:",
                                name: "date",
                                onChange: H,
                                type: "date",
                                style: { marginRight: 60 },
                              }),
                              Object(G.jsx)(ee, {
                                label: "DrawnOn:",
                                name: "drawnOn",
                                onChange: H,
                                type: "date",
                              }),
                            ],
                          }),
                          Object(G.jsxs)("div", {
                            style: { marginTop: 20 },
                            children: [
                              Object(G.jsx)("label", { children: "Remarks:" }),
                              Object(G.jsx)("textarea", {
                                placeholder: "Remarks...",
                                style: { width: 500, height: 300 },
                                value: z.remarks,
                                onChange: function (e) {
                                  return W(
                                    Object(b.a)(
                                      Object(b.a)({}, z),
                                      {},
                                      { remarks: e.target.value }
                                    )
                                  );
                                },
                              }),
                              Object(G.jsx)("br", {}),
                              Object(G.jsx)("input", {
                                type: "file",
                                id: "formFile",
                                accept: ".jpg, .jpeg, .png",
                                onChange: function (e) {
                                  return W(
                                    Object(b.a)(
                                      Object(b.a)({}, z),
                                      {},
                                      { image: e.target.files[0] }
                                    )
                                  );
                                },
                              }),
                            ],
                          }),
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("button", {
                            type: "submit",
                            class: "btn btn-primary",
                            disabled: m,
                            children: "Submit Form",
                          }),
                          s && Object(G.jsx)(V, {}),
                        ],
                      }),
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        ne = n(14),
        ae = n(94),
        ie = n.n(ae),
        se = n(97),
        ce = n.n(se),
        re = n(95),
        le = n.n(re),
        oe = n(96),
        de = n.n(oe),
        je = n(98),
        be = n.n(je),
        he = n(127),
        pe = n.n(he),
        xe = Object(m.a)(function (e) {
          return {
            root: { display: "flex" },
            toolbar: { paddingRight: 24 },
            toolbarIcon: Object(b.a)(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0 8px",
              },
              e.mixins.toolbar
            ),
            appBar: {
              zIndex: e.zIndex.drawer + 1,
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              marginLeft: 240,
              width: "calc(100% - ".concat(240, "px)"),
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            menuButton: { marginRight: 36 },
            menuButtonHidden: { display: "none" },
            title: { flexGrow: 1 },
            drawerPaper: {
              position: "relative",
              whiteSpace: "nowrap",
              width: 240,
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            drawerPaperClose: Object(j.a)(
              {
                overflowX: "hidden",
                transition: e.transitions.create("width", {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
                width: e.spacing(7),
              },
              e.breakpoints.up("sm"),
              { width: e.spacing(9) }
            ),
            appBarSpacer: e.mixins.toolbar,
            content: { flexGrow: 1, height: "100vh", overflow: "auto" },
            container: {
              paddingTop: e.spacing(4),
              paddingBottom: e.spacing(4),
            },
            paper: {
              padding: e.spacing(2),
              display: "flex",
              overflow: "auto",
              flexDirection: "column",
            },
            fixedHeight: { height: 240 },
          };
        });

      function Oe() {
        var e = Object(a.useState)([]),
          t = Object(d.a)(e, 2),
          n = t[0],
          s = t[1],
          c = Object(a.useState)(!0),
          r = Object(d.a)(c, 2),
          l = r[0],
          o = r[1],
          b = xe(),
          p = i.a.useState(!0),
          m = Object(d.a)(p, 2),
          S = m[0],
          D = m[1],
          A = (Object(h.a)(b.paper, b.fixedHeight), Object(O.f)());
        Object(a.useEffect)(function () {
          localStorage.getItem("userInfo") || A.push("/login");
        });
        var R = function () {
          x.a.get("".concat(U, "/readbookings")).then(function (e) {
            s(e.data), o(!1);
          });
        };
        return (
          Object(a.useEffect)(
            function () {
              R();
            },
            [n]
          ),
          l
            ? Object(G.jsx)(V, {})
            : n == []
            ? Object(G.jsx)("h1", { children: "Nothing Found" })
            : Object(G.jsx)(G.Fragment, {
                children: Object(G.jsxs)("div", {
                  className: b.root,
                  children: [
                    Object(G.jsx)(u.a, {}),
                    Object(G.jsx)(f.a, {
                      position: "absolute",
                      className: Object(h.a)(b.appBar, S && b.appBarShift),
                      children: Object(G.jsxs)(y.a, {
                        className: b.toolbar,
                        children: [
                          Object(G.jsx)(C.a, {
                            edge: "start",
                            color: "inherit",
                            "aria-label": "open drawer",
                            onClick: function () {
                              D(!0);
                            },
                            className: Object(h.a)(
                              b.menuButton,
                              S && b.menuButtonHidden
                            ),
                            children: Object(G.jsx)(P.a, {}),
                          }),
                          Object(G.jsx)(w.a, {
                            component: "h1",
                            variant: "h6",
                            color: "inherit",
                            noWrap: !0,
                            className: b.title,
                            children: "All Booking",
                          }),
                          Object(G.jsxs)(C.a, {
                            color: "inherit",
                            onClick: function () {
                              localStorage.removeItem("userInfo"),
                                A.push("/login");
                            },
                            children: ["Logout ", Object(G.jsx)(K.a, {})],
                          }),
                        ],
                      }),
                    }),
                    Object(G.jsxs)(g.a, {
                      variant: "permanent",
                      classes: {
                        paper: Object(h.a)(
                          b.drawerPaper,
                          !S && b.drawerPaperClose
                        ),
                      },
                      open: S,
                      children: [
                        Object(G.jsx)("div", {
                          className: b.toolbarIcon,
                          children: Object(G.jsx)(C.a, {
                            onClick: function () {
                              D(!1);
                            },
                            children: Object(G.jsx)(I.a, {}),
                          }),
                        }),
                        Object(G.jsx)(N.a, {}),
                        Object(G.jsx)(v.a, { children: J }),
                      ],
                    }),
                    Object(G.jsx)("main", {
                      className: b.content,
                      children: n.map(function (e, t) {
                        var n;
                        return Object(G.jsx)(
                          "div",
                          ((n = {
                            className: "card mb-6",
                            style: { maxWidth: 600 },
                          }),
                          Object(j.a)(n, "style", {
                            marginLeft: 20,
                            margin: 80,
                          }),
                          Object(j.a)(
                            n,
                            "children",
                            Object(G.jsxs)("div", {
                              className: "row g-0",
                              children: [
                                Object(G.jsx)("div", {
                                  className: "col-md-4",
                                  children: Object(G.jsx)("img", {
                                    src: e.image,
                                    class: "img-fluid rounded-start",
                                    style: { width: 200, height: 200 },
                                  }),
                                }),
                                Object(G.jsx)("div", {
                                  className: "col-md-8",
                                  children: Object(G.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                      Object(G.jsxs)("h5", {
                                        className: "card-title",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Client Name:",
                                          }),
                                          e.clientName,
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Registration No:",
                                          }),
                                          e.registrationNumber,
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Plot No:",
                                          }),
                                          e.plotNo,
                                          " \xa0\xa0\xa0",
                                          Object(G.jsx)("strong", {
                                            children: "Plot Type:",
                                          }),
                                          e.type,
                                          " ",
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Plot Size:",
                                          }),
                                          e.plotSize,
                                          "\xa0\xa0\xa0",
                                          Object(G.jsx)("strong", {
                                            children: "Phase:",
                                          }),
                                          e.phase,
                                          " ",
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "CNIC:",
                                          }),
                                          e.clientCNIC,
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/booking-preview/".concat(e._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(ie.a, {}),
                                              "Booking Preview",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/installments/".concat(e._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(le.a, {}),
                                              "Installments",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/agreement-preview/".concat(e._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(de.a, {}),
                                              "Agreement Payment Preview",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/installments-schedule/".concat(
                                          e._id
                                        ),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(ce.a, {}),
                                              "Installment Schedule",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/update-booking/".concat(e._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-primary",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(be.a, {}),
                                              "Edit",
                                            ],
                                          }),
                                          " ",
                                        ],
                                      }),
                                      Object(G.jsxs)("button", {
                                        type: "button",
                                        class: "btn btn-danger",
                                        style: { marginRight: 10 },
                                        onClick: function () {
                                          return (
                                            (t = e._id),
                                            void x.a.delete(
                                              ""
                                                .concat(U, "/deletebooking/")
                                                .concat(t),
                                              function () {
                                                return R();
                                              }
                                            )
                                          );
                                          var t;
                                        },
                                        children: [
                                          Object(G.jsx)(pe.a, {}),
                                          "Delete",
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                          ),
                          n)
                        );
                      }),
                    }),
                  ],
                }),
              })
        );
      }
      var me = n(229),
        ue = n(224),
        ge = n(180),
        fe = n(223),
        ye = n(233),
        ve = n(230);

      function we() {
        return Object(G.jsxs)(w.a, {
          variant: "body2",
          color: "textSecondary",
          align: "center",
          children: [
            "Copyright \xa9 ",
            Object(G.jsx)(fe.a, {
              color: "inherit",
              href: "https://agitated-mahavira-b37e00.netlify.app/",
              children: "Your Website",
            }),
            " ",
            new Date().getFullYear(),
            ".",
          ],
        });
      }
      var Ne = Object(m.a)(function (e) {
        return {
          root: { display: "flex" },
          toolbar: { paddingRight: 24 },
          toolbarIcon: Object(b.a)(
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0 8px",
            },
            e.mixins.toolbar
          ),
          appBar: {
            zIndex: e.zIndex.drawer + 1,
            transition: e.transitions.create(["width", "margin"], {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            marginLeft: 240,
            width: "calc(100% - ".concat(240, "px)"),
            transition: e.transitions.create(["width", "margin"], {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          menuButton: { marginRight: 36 },
          menuButtonHidden: { display: "none" },
          title: { flexGrow: 1 },
          drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: 240,
            transition: e.transitions.create("width", {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          drawerPaperClose: Object(j.a)(
            {
              overflowX: "hidden",
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              width: e.spacing(7),
            },
            e.breakpoints.up("sm"),
            { width: e.spacing(9) }
          ),
          appBarSpacer: e.mixins.toolbar,
          content: { flexGrow: 1, height: "100vh", overflow: "auto" },
          container: { paddingTop: e.spacing(4), paddingBottom: e.spacing(4) },
          paper: {
            padding: e.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
          },
          fixedHeight: { height: 240 },
        };
      });

      function Ce() {
        var e = Object(O.f)(),
          t = Ne(),
          n = i.a.useState(!0),
          s = Object(d.a)(n, 2),
          c = s[0],
          r = s[1],
          l = Object(h.a)(t.paper, t.fixedHeight),
          o = Object(a.useState)([]),
          j = Object(d.a)(o, 2),
          b = j[0],
          p = j[1];
        return (
          Object(a.useEffect)(
            function () {
              localStorage.getItem("userInfo") || e.push("/login");
            },
            [e]
          ),
          Object(a.useEffect)(function () {
            x.a.get("".concat(U, "/readbookings")).then(function (e) {
              p(e.data);
            }),
              console.log(b);
          }, []),
          Object(G.jsxs)("div", {
            className: t.root,
            children: [
              Object(G.jsx)(u.a, {}),
              Object(G.jsx)(f.a, {
                position: "absolute",
                className: Object(h.a)(t.appBar, c && t.appBarShift),
                children: Object(G.jsxs)(y.a, {
                  className: t.toolbar,
                  children: [
                    Object(G.jsx)(C.a, {
                      edge: "start",
                      color: "inherit",
                      "aria-label": "open drawer",
                      onClick: function () {
                        r(!0);
                      },
                      className: Object(h.a)(
                        t.menuButton,
                        c && t.menuButtonHidden
                      ),
                      children: Object(G.jsx)(P.a, {}),
                    }),
                    Object(G.jsx)(w.a, {
                      component: "h1",
                      variant: "h6",
                      color: "inherit",
                      noWrap: !0,
                      className: t.title,
                      children: "Dashboard",
                    }),
                    Object(G.jsxs)(C.a, {
                      color: "inherit",
                      onClick: function () {
                        localStorage.removeItem("userInfo"), e.push("/login");
                      },
                      children: ["Logout ", Object(G.jsx)(K.a, {})],
                    }),
                  ],
                }),
              }),
              Object(G.jsxs)(g.a, {
                variant: "permanent",
                classes: {
                  paper: Object(h.a)(t.drawerPaper, !c && t.drawerPaperClose),
                },
                open: c,
                children: [
                  Object(G.jsx)("div", {
                    className: t.toolbarIcon,
                    children: Object(G.jsx)(C.a, {
                      onClick: function () {
                        r(!1);
                      },
                      children: Object(G.jsx)(I.a, {}),
                    }),
                  }),
                  Object(G.jsx)(N.a, {}),
                  Object(G.jsx)(v.a, { children: J }),
                ],
              }),
              Object(G.jsxs)("main", {
                className: t.content,
                children: [
                  Object(G.jsx)("div", { className: t.appBarSpacer }),
                  Object(G.jsxs)(S.a, {
                    maxWidth: "lg",
                    className: t.container,
                    children: [
                      Object(G.jsxs)(ue.a, {
                        container: !0,
                        spacing: 3,
                        children: [
                          Object(G.jsx)(ue.a, {
                            item: !0,
                            xs: 12,
                            md: 8,
                            lg: 9,
                            children: Object(G.jsx)(ge.a, {
                              className: l,
                              children: Object(G.jsxs)("div", {
                                style: {
                                  display: "flex",
                                  flexDirection: "row",
                                },
                                children: [
                                  Object(G.jsx)(ye.a, {
                                    border: "primary",
                                    style: { width: "10rem", height: "8rem" },
                                    children: Object(G.jsxs)(ye.a.Body, {
                                      children: [
                                        Object(G.jsx)(ye.a.Title, {
                                          children: "Total Plots",
                                        }),
                                        Object(G.jsx)(ye.a.Text, {
                                          children: "128",
                                        }),
                                      ],
                                    }),
                                  }),
                                  Object(G.jsx)("div", {
                                    style: { marginLeft: 50 },
                                    children: Object(G.jsx)(ye.a, {
                                      border: "primary",
                                      style: { width: "11rem", height: "8rem" },
                                      children: Object(G.jsxs)(ye.a.Body, {
                                        children: [
                                          Object(G.jsx)(ye.a.Title, {
                                            children: "Total Bookings",
                                          }),
                                          Object(G.jsx)(ye.a.Text, {
                                            children: b.length,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                  Object(G.jsx)("div", {
                                    style: { marginLeft: 50 },
                                    children: Object(G.jsx)(ye.a, {
                                      border: "primary",
                                      style: { width: "12rem", height: "8rem" },
                                      children: Object(G.jsxs)(ye.a.Body, {
                                        children: [
                                          Object(G.jsx)(ye.a.Title, {
                                            children: "Remaining Plots",
                                          }),
                                          Object(G.jsx)(ye.a.Text, {
                                            children: 128 - b.length,
                                          }),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                          Object(G.jsx)(ue.a, {
                            item: !0,
                            xs: 12,
                            md: 4,
                            lg: 3,
                            children: Object(G.jsx)(ge.a, {
                              className: l,
                              children: Object(G.jsx)("img", {
                                src: "".concat(U, "/image/logo.png"),
                                style: { width: 220, height: 200 },
                              }),
                            }),
                          }),
                          Object(G.jsx)(ue.a, {
                            item: !0,
                            xs: 12,
                            children: Object(G.jsx)(ge.a, {
                              className: t.paper,
                              children: Object(G.jsxs)(ve.a, {
                                children: [
                                  Object(G.jsx)(ve.a.Item, {
                                    children: Object(G.jsx)("img", {
                                      className: "d-block w-100",
                                      src: "".concat(U, "/image/1.jpeg"),
                                      alt: "First slide",
                                      style: { width: 400, heigh: 300 },
                                    }),
                                  }),
                                  Object(G.jsx)(ve.a.Item, {
                                    children: Object(G.jsx)("img", {
                                      className: "d-block w-100",
                                      src: "".concat(U, "/image/2.jpeg"),
                                      alt: "First slide",
                                      style: { width: 400, heigh: 300 },
                                    }),
                                  }),
                                  Object(G.jsx)(ve.a.Item, {
                                    children: Object(G.jsx)("img", {
                                      className: "d-block w-100",
                                      src: "".concat(U, "/image/3.jpeg"),
                                      alt: "First slide",
                                      style: { width: 400, heigh: 300 },
                                    }),
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsx)(me.a, {
                        pt: 4,
                        children: Object(G.jsx)(we, {}),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
      var Se = n(234),
        De = n(225),
        Pe = n(228);

      function Ae() {
        var e = Object(a.useState)(""),
          t = Object(d.a)(e, 2),
          n = t[0],
          i = t[1],
          s = Object(a.useState)(""),
          c = Object(d.a)(s, 2),
          r = c[0],
          j = c[1],
          b = Object(a.useState)(!1),
          h = Object(d.a)(b, 2),
          p = (h[0], h[1]),
          g = Object(a.useState)(!1),
          f = Object(d.a)(g, 2),
          y = f[0],
          v = f[1],
          N = Object(O.f)();

        function C() {
          return Object(G.jsxs)(w.a, {
            variant: "body2",
            color: "textSecondary",
            align: "center",
            children: [
              "Copyright \xa9 ",
              Object(G.jsx)(fe.a, {
                color: "inherit",
                href: "https://main--agitated-mahavira-b37e00.netlify.app/",
                children: "Your Website",
              }),
              " ",
              new Date().getFullYear(),
              ".",
            ],
          });
        }
        var D = Object(m.a)(function (e) {
          return {
            paper: {
              marginTop: e.spacing(8),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        });
        Object(a.useEffect)(
          function () {
            localStorage.getItem("userInfo") && N.push("/");
          },
          [N]
        );
        var P = (function () {
            var e = Object(o.a)(
              l.a.mark(function e(t) {
                var a, i, s;
                return l.a.wrap(
                  function (e) {
                    for (;;)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (
                            t.preventDefault(),
                            p(!0),
                            (e.prev = 2),
                            (a = {
                              headers: { "Content-type": "application/json" },
                            }),
                            (e.next = 6),
                            x.a.post(
                              "".concat(U, "/login"),
                              { email: n, password: r },
                              a
                            )
                          );
                        case 6:
                          (i = e.sent),
                            "Invalid Password" === (s = i.data)
                              ? alert("Wrong Password or Username")
                              : (console.log("Data" + s),
                                localStorage.setItem(
                                  "userInfo",
                                  JSON.stringify(s)
                                ),
                                p(!1),
                                alert(
                                  "Hey ".concat(s.name, "! You are logged in")
                                ),
                                N.push("/")),
                            (e.next = 15);
                          break;
                        case 11:
                          (e.prev = 11),
                            (e.t0 = e.catch(2)),
                            v(e.t0.response.data.message),
                            console.log(y);
                        case 15:
                        case "end":
                          return e.stop();
                      }
                  },
                  e,
                  null,
                  [[2, 11]]
                );
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          A = D();
        return Object(G.jsx)(G.Fragment, {
          children: Object(G.jsxs)(S.a, {
            component: "main",
            maxWidth: "xs",
            children: [
              Object(G.jsx)(u.a, {}),
              Object(G.jsxs)("div", {
                className: A.paper,
                children: [
                  Object(G.jsx)("img", {
                    src: "".concat(U, "/image/logo.png"),
                    style: { width: 100, height: 100 },
                  }),
                  Object(G.jsx)(w.a, {
                    component: "h1",
                    variant: "h5",
                    children: "Sign in",
                  }),
                  Object(G.jsxs)("form", {
                    className: A.form,
                    noValidate: !0,
                    children: [
                      Object(G.jsx)(Pe.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        id: "email",
                        label: "Email Address",
                        name: "email",
                        autoComplete: "email",
                        autoFocus: !0,
                        onChange: function (e) {
                          return i(e.target.value);
                        },
                        value: n,
                      }),
                      Object(G.jsx)(Pe.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        name: "password",
                        label: "Password",
                        type: "password",
                        id: "password",
                        autoComplete: "current-password",
                        onChange: function (e) {
                          return j(e.target.value);
                        },
                        value: r,
                      }),
                      Object(G.jsx)(De.a, {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        className: A.submit,
                        onClick: P,
                        children: "Sign In",
                      }),
                    ],
                  }),
                ],
              }),
              Object(G.jsx)(me.a, { mt: 8, children: Object(G.jsx)(C, {}) }),
            ],
          }),
        });
      }
      var Ie = n(56),
        Re = n(16),
        ke = n.n(Re),
        Be = n(57),
        Te = n.n(Be);

      function Le(e) {
        var t = Object(O.g)().id,
          n = Object(a.useState)([]),
          i = Object(d.a)(n, 2),
          s = i[0],
          c = i[1],
          r = Object(a.useState)(!0),
          l = Object(d.a)(r, 2),
          o = l[0],
          j = l[1],
          b = new Intl.NumberFormat("en-IN"),
          h = Object(a.useRef)(),
          p = Object(Ie.useReactToPrint)({
            content: function () {
              return h.current;
            },
          });
        return (
          Object(a.useEffect)(
            function () {
              fetch("".concat(U, "/readbookings/").concat(t))
                .then(function (e) {
                  return e.json();
                })
                .then(function (e) {
                  c(e), j(!1);
                });
            },
            [t]
          ),
          o
            ? Object(G.jsx)(V, {})
            : Object(G.jsxs)(G.Fragment, {
                children: [
                  Object(G.jsxs)("div", {
                    ref: h,
                    style: { marginLeft: 20, marginTop: 20 },
                    children: [
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          Object(G.jsx)("div", {
                            children: Object(G.jsx)("img", {
                              src: "".concat(U, "/image/logo.png"),
                              style: { width: 100, height: 100 },
                            }),
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              djustifyContent: "center",
                              textAlign: "center",
                              marginLeft: 20,
                              marginRight: 20,
                            },
                            children: [
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  style: {
                                    fontSize: 40,
                                    fontWeight: "bold",
                                    color: "brown",
                                  },
                                  children: "NEW TOWN",
                                }),
                              }),
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  style: { fontWeight: "bold", fontSize: 20 },
                                  children: " ",
                                }),
                              }),
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  children:
                                    "4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing",
                                }),
                              }),
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  children:
                                    "Scheme, Lahore. Cell:0322-3303331. Ph: 042-35927305",
                                }),
                              }),
                            ],
                          }),
                          Object(G.jsx)("div", {
                            children: Object(G.jsx)("img", {
                              src: s.image,
                              style: { width: 100, height: 100 },
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          " ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 300, marginTop: 5 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Registration No. ",
                                s.registrationNumber,
                              ],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: {},
                            children: Object(G.jsx)("p", {
                              style: { fontWeight: "bold", fontSize: 20 },
                              children: "Booking Form",
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 440 },
                            children: Object(G.jsxs)("p", {
                              children: ["Application Form No.: ", s._id],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { width: 400 },
                            children: Object(G.jsxs)("p", {
                              children: ["Phase: ", s.phase],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 200 },
                            children: Object(G.jsxs)("p", {
                              children: ["Plot No: ", s.plotNo],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40, width: 160 },
                            children: Object(G.jsxs)("p", {
                              children: ["Street: ", s.street, " sq ft."],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: ["Size of Plot: ", s.plotSize],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: ["Type: ", s.type],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 400 },
                            children: Object(G.jsxs)("p", {
                              children: ["Name: ", s.clientName],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { width: 400 },
                            children: Object(G.jsxs)("p", {
                              children: ["Father/Husband Name: ", s.fhName],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 240 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Second Applicant Name: ",
                                s.secondAppName ? s.secondAppName : "none",
                              ],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Second Applicant CNIC: ",
                                s.secondAppCNIC ? s.secondAppCNIC : "none",
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 800 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Residential/Postal Address: ",
                                s.residentialAddress,
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 800 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Permanent Address: ",
                                s.permanentAddress,
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          " ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 400 },
                            children: Object(G.jsxs)("p", {
                              children: ["Contact Number: 0", s.contactNumber],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: ["Landline: 0", s.landLine],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          " ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 400 },
                            children: Object(G.jsxs)("p", {
                              children: ["Email: ", s.email],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: ["Occupation: ", s.occupation],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 200 },
                            children: Object(G.jsxs)("p", {
                              children: ["Age: ", s.age],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40, width: 160 },
                            children: Object(G.jsxs)("p", {
                              children: ["Nationality: ", s.nationality],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 80 },
                            children: Object(G.jsxs)("p", {
                              children: ["CNIC: ", s.clientCNIC],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 200 },
                            children: Object(G.jsxs)("p", {
                              children: ["Name of Nominee: ", s.nomineeName],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40, width: 240 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Relation with Applicant: ",
                                s.nomineeRelation,
                              ],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: ["CNIC: ", s.nomineeCNIC],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 800 },
                            children: Object(G.jsxs)("p", {
                              children: ["Nominee Address: ", s.nomineeAddress],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 220 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Total Cost of Plot: ",
                                b.format(s.totalPlotCost),
                                "Rs.",
                              ],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { width: 200 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Down Payment: ",
                                b.format(s.downPayment),
                                "Rs.",
                              ],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            children: Object(G.jsx)("p", {
                              children:
                                "I enclosed here with a sum of rupees \xa0",
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { width: 100 },
                            children: Object(G.jsxs)("p", {
                              children: [b.format(s.downPayment), "Rs."],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 240 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                " By Bank Draft/Pay Order: ",
                                s.bankOrDraft,
                              ],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: ["Dated: ", ke()(s.date).format("L")],
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40 },
                            children: Object(G.jsxs)("p", {
                              children: [
                                "Drawn On: ",
                                ke()(s.drawnOn).format("L"),
                              ],
                            }),
                          }),
                        ],
                      }),
                      Object(G.jsx)("p", {
                        children: "On account of booking of the above plot",
                      }),
                      Object(G.jsx)("h3", { children: "Declaration" }),
                      Object(G.jsx)("p", {
                        children:
                          "(1) I, hereby declare that I have read and understood the Terms and Conditions of booking a plot in the project and accept the same",
                      }),
                      Object(G.jsx)("p", {
                        children:
                          "(2) I, further agree to pay regularly installments and dues and abide by all existing rules and regulations and those which may be prescribed by the company from time to time",
                      }),
                      Object(G.jsxs)("p", {
                        children: [
                          "(3) I enclosed here with a sum of rupees ",
                          s.downPayment,
                          " by By ",
                          s.bankOrDraft,
                          " dated: ",
                          ke()(s.date).format("L"),
                          " drawn on: ",
                          ke()(s.drawnOn).format("L"),
                          " on account of booking of the above plot",
                        ],
                      }),
                      " ",
                      Object(G.jsx)("br", {}),
                      Object(G.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 30,
                        },
                        children: [
                          "  ",
                          Object(G.jsx)("br", {}),
                          " ",
                          Object(G.jsx)("br", {}),
                          Object(G.jsx)("div", {
                            style: { width: 200 },
                            children: Object(G.jsx)("p", {
                              children: "Signature of Applicant",
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 40, width: 160 },
                            children: Object(G.jsx)("p", {
                              children: "Witness of Applicant",
                            }),
                          }),
                          Object(G.jsx)("div", {
                            style: { marginLeft: 60 },
                            children: Object(G.jsx)("p", {
                              children: "Authorized Signature",
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(G.jsxs)("button", {
                    style: { width: 200, height: 100 },
                    class: "btn btn-success",
                    onClick: p,
                    children: [Object(G.jsx)(Te.a, {}), "Print"],
                  }),
                ],
              })
        );
      }

      function Me() {
        var e = Object(O.g)().id,
          t = Object(a.useState)([]),
          n = Object(d.a)(t, 2),
          i = n[0],
          s = n[1],
          c = Object(a.useState)(!0),
          r = Object(d.a)(c, 2),
          l = r[0],
          o = r[1],
          j = new Intl.NumberFormat("en-IN");
        Object(a.useEffect)(
          function () {
            x.a
              .get("".concat(U, "/readbookings/").concat(e))
              .then(function (e) {
                s(e.data), o(!1);
              })
              .catch(function (e) {
                console.log(e);
              });
          },
          [e]
        );
        var b = Object(a.useRef)(),
          h = Object(Ie.useReactToPrint)({
            content: function () {
              return b.current;
            },
          });
        return l
          ? Object(G.jsx)(V, {})
          : Object(G.jsxs)(G.Fragment, {
              children: [
                Object(G.jsxs)("div", {
                  ref: b,
                  style: { marginLeft: 20 },
                  children: [
                    Object(G.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 20,
                      },
                      children: [
                        Object(G.jsx)("div", {
                          children: Object(G.jsx)("img", {
                            src: "".concat(U, "/image/logo.png"),
                            style: { width: 100, height: 100 },
                          }),
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            djustifyContent: "center",
                            textAlign: "center",
                            marginLeft: 20,
                            marginRight: 20,
                          },
                          children: [
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                style: {
                                  fontSize: 40,
                                  fontWeight: "bold",
                                  color: "brown",
                                },
                                children: "NEW TOWN",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                style: { fontWeight: "bold", fontSize: 20 },
                                children: " ",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                children:
                                  "4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                children:
                                  "Scheme, Lahore. Cell:0322-3303331. Ph: 042-35927305",
                              }),
                            }),
                          ],
                        }),
                        Object(G.jsx)("div", {
                          children: Object(G.jsx)("img", {
                            src: i.image,
                            style: { width: 100, height: 100 },
                          }),
                        }),
                      ],
                    }),
                    Object(G.jsx)("h1", {
                      style: {
                        fontWeight: "bold",
                        marginLeft: 120,
                        fontSize: 30,
                        color: "brown",
                      },
                      children: "Agreement Payment Schedule",
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        " ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsx)("div", {
                          style: { width: 400 },
                          children: Object(G.jsxs)("p", {
                            children: [
                              "Booking Date: ",
                              ke()(i.date).format("L"),
                            ],
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { marginLeft: 40 },
                          children: Object(G.jsxs)("p", {
                            children: ["Sr No: ", i._id],
                          }),
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        " ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsx)("div", {
                          style: { width: 400 },
                          children: Object(G.jsxs)("p", {
                            children: ["Name: ", i.clientName],
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { marginLeft: 40 },
                          children: Object(G.jsxs)("p", {
                            children: ["S/O, D/O, W/O: ", i.fhName],
                          }),
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        "  ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsx)("div", {
                          style: { width: 200 },
                          children: Object(G.jsxs)("p", {
                            children: ["Plot No: ", i.plotNo],
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { marginLeft: 40, width: 160 },
                          children: Object(G.jsxs)("p", {
                            children: ["Category: ", i.plotSize],
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { marginLeft: 40 },
                          children: Object(G.jsxs)("p", {
                            children: ["Type: ", i.type],
                          }),
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        "  ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsx)("div", {
                          style: { width: 400 },
                          children: Object(G.jsxs)("p", {
                            children: ["Street: ", i.street],
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { width: 400 },
                          children: Object(G.jsxs)("p", {
                            children: ["Phase: ", i.phase],
                          }),
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        "  ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsx)("div", {
                          style: { width: 400 },
                          children: Object(G.jsxs)("p", {
                            children: [
                              "Total Payment: ",
                              j.format(i.totalPlotCost),
                              "Rs.",
                            ],
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { width: 400 },
                          children: Object(G.jsxs)("p", {
                            children: [
                              "Down Payment: ",
                              j.format(i.downPayment),
                              "Rs.",
                            ],
                          }),
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        "  ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsx)("div", {
                          style: { width: 400 },
                          children: Object(G.jsxs)("p", {
                            children: ["Remarks: ", i.remarks],
                          }),
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        "  ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsxs)("div", {
                          children: [
                            Object(G.jsx)("p", {
                              style: { color: "red" },
                              children:
                                "Note: I accept that in case of deal cancel the mentioned amount will not be refunded.",
                            }),
                            " ",
                            Object(G.jsx)("br", {}),
                            Object(G.jsx)("p", {
                              style: { color: "red" },
                              children:
                                '" (Booking Token) I accept that if I will not be able to fulfill my Commencement,',
                            }),
                            " ",
                            Object(G.jsx)("br", {}),
                            Object(G.jsx)("p", {
                              style: { color: "red" },
                              children:
                                "company can be cancel my deal and will refund me after reduction as per company policy",
                            }),
                            " ",
                            Object(G.jsx)("br", {}),
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 40,
                      },
                      children: [
                        "  ",
                        Object(G.jsx)("br", {}),
                        " ",
                        Object(G.jsx)("br", {}),
                        Object(G.jsx)("div", {
                          style: { width: 200 },
                          children: Object(G.jsx)("p", {
                            children: "Signature of Applicant",
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { marginLeft: 40, width: 160 },
                          children: Object(G.jsx)("p", {
                            children: "Witness of Applicant",
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { marginLeft: 60 },
                          children: Object(G.jsx)("p", {
                            children: "Authorized Signature",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                Object(G.jsxs)("button", {
                  style: { width: 200, height: 100 },
                  class: "btn btn-success",
                  onClick: h,
                  children: [Object(G.jsx)(Te.a, {}), "Print"],
                }),
              ],
            });
      }
      var ze = n(82),
        We = n(226);

      function Fe() {
        var e = Object(O.g)().id,
          t = Object(a.useState)([]),
          n = Object(d.a)(t, 2),
          i = n[0],
          s = n[1],
          c = Object(a.useState)(!0),
          r = Object(d.a)(c, 2),
          l = r[0],
          o = r[1],
          j = new Intl.NumberFormat("en-IN");
        Object(a.useEffect)(
          function () {
            fetch("".concat(U, "/readbookings/").concat(e))
              .then(function (e) {
                return e.json();
              })
              .then(function (e) {
                s(e), o(!1);
              });
          },
          [e]
        );
        var b = i.totalPlotCost - i.downPayment,
          h = (Math.round(b / 30), Object(a.useState)(0)),
          p = Object(d.a)(h, 2),
          x = p[0],
          m = p[1],
          u = ke()(i.date).format("L"),
          g = new Date(u);
        g.setDate(10);
        var f = ke()(g).add(1, "months").calendar(),
          y = [];
        y[0] = { date: f, installment: x };
        for (
          var v = Object(a.useRef)(),
            w = Object(Ie.useReactToPrint)({
              content: function () {
                return v.current;
              },
            }),
            N = 1;
          N < 30;
          N++
        ) {
          var C = ke()(f).add(N, "months").calendar().toString();
          "Tomorrow at 12:00 AM" === C &&
            ((C = Date.now()), (C = ke()(C).add(1, "days").format("L"))),
            "Today at 12:00 AM" === C && (C = ke()(Date.now()).format("L")),
            (y[N] = { date: C, installment: x });
        }
        return (
          console.log(y),
          l
            ? Object(G.jsx)(V, {})
            : Object(G.jsxs)(G.Fragment, {
                children: [
                  Object(G.jsxs)("div", {
                    style: { margin: 50 },
                    children: [
                      "Add Per Month Installment \xa0",
                      Object(G.jsx)("input", {
                        type: "number",
                        placeholder: "Add Installment",
                        onChange: function (e) {
                          m(e.target.value);
                        },
                      }),
                    ],
                  }),
                  Object(G.jsxs)("div", {
                    ref: v,
                    style: { marginLeft: 30, marginRight: 30, marginTop: 30 },
                    children: [
                      Object(G.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 20,
                        },
                        children: [
                          Object(G.jsx)("div", {
                            children: Object(G.jsx)("img", {
                              src: "".concat(U, "/image/logo.png"),
                              style: { width: 100, height: 100 },
                            }),
                          }),
                          Object(G.jsxs)("div", {
                            style: {
                              djustifyContent: "center",
                              textAlign: "center",
                              marginLeft: 20,
                              marginRight: 20,
                            },
                            children: [
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  style: {
                                    fontSize: 40,
                                    fontWeight: "bold",
                                    color: "brown",
                                  },
                                  children: "NEW TOWN",
                                }),
                              }),
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  style: { fontWeight: "bold", fontSize: 20 },
                                  children: " ",
                                }),
                              }),
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  children:
                                    "4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing",
                                }),
                              }),
                              Object(G.jsx)("div", {
                                children: Object(G.jsx)("p", {
                                  children:
                                    "Scheme, Lahore. Cell:0322-3303331. Ph: 042-35927305",
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      Object(G.jsx)("h1", {
                        style: { marginLeft: 200, fontWeight: "bold" },
                        children: "Installment Schedule Plan",
                      }),
                      Object(G.jsxs)("h3", {
                        children: [
                          "This is Your 30 months Easy Installments Plan for ",
                          Object(G.jsxs)("strong", {
                            children: ["Plot No. ", i.plotNo],
                          }),
                          " at ",
                          Object(G.jsxs)("strong", {
                            children: ["Form No. ", i._id],
                          }),
                        ],
                      }),
                      Object(G.jsxs)("h3", {
                        children: [
                          "The Amount You Have to Pay on Registry Time is: ",
                          Object(G.jsxs)("strong", {
                            children: [" ", j.format(b - 30 * x), " Rs."],
                          }),
                          " ",
                        ],
                      }),
                      Object(G.jsxs)(We.a, {
                        striped: !0,
                        bordered: !0,
                        children: [
                          Object(G.jsx)("thead", {
                            children: Object(G.jsxs)("tr", {
                              children: [
                                Object(G.jsx)("th", { children: "#" }),
                                Object(G.jsx)("th", { children: "Date" }),
                                Object(G.jsx)("th", {
                                  children: "Installment",
                                }),
                              ],
                            }),
                          }),
                          y.map(function (e, t, n) {
                            return Object(G.jsx)("tbody", {
                              children: Object(G.jsxs)("tr", {
                                children: [
                                  Object(G.jsx)("td", { children: t + 1 }),
                                  Object(G.jsx)("td", { children: e.date }),
                                  Object(G.jsxs)("td", {
                                    children: [j.format(e.installment), " Rs."],
                                  }),
                                ],
                              }),
                            });
                          }),
                        ],
                      }),
                    ],
                  }),
                  Object(G.jsxs)("button", {
                    style: { width: 200, height: 100 },
                    class: "btn btn-success",
                    onClick: w,
                    children: [Object(G.jsx)(Te.a, {}), "Print"],
                  }),
                ],
              })
        );
      }
      var He = n(227);
      var Ee = Object(m.a)(function (e) {
        return {
          root: { display: "flex" },
          toolbar: { paddingRight: 24 },
          toolbarIcon: Object(b.a)(
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0 8px",
            },
            e.mixins.toolbar
          ),
          appBar: {
            zIndex: e.zIndex.drawer + 1,
            transition: e.transitions.create(["width", "margin"], {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            marginLeft: 240,
            width: "calc(100% - ".concat(240, "px)"),
            transition: e.transitions.create(["width", "margin"], {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          menuButton: { marginRight: 36 },
          menuButtonHidden: { display: "none" },
          title: { flexGrow: 1 },
          drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: 240,
            transition: e.transitions.create("width", {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          drawerPaperClose: Object(j.a)(
            {
              overflowX: "hidden",
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              width: e.spacing(7),
            },
            e.breakpoints.up("sm"),
            { width: e.spacing(9) }
          ),
          appBarSpacer: e.mixins.toolbar,
          content: { flexGrow: 1, height: "100vh", overflow: "auto" },
          container: { paddingTop: e.spacing(4), paddingBottom: e.spacing(4) },
          paper: {
            padding: e.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
          },
          fixedHeight: { height: 240 },
        };
      });

      function _e() {
        var e = Object(O.f)(),
          t = Ee(),
          n = i.a.useState(!0),
          s = Object(d.a)(n, 2),
          c = s[0],
          r = s[1],
          l = (Object(h.a)(t.paper, t.fixedHeight), Object(a.useState)([])),
          o = Object(d.a)(l, 2),
          j = o[0],
          b = o[1],
          p = Object(a.useState)([]),
          m = Object(d.a)(p, 2),
          D = m[0],
          A = m[1],
          R = Object(a.useState)(!0),
          k = Object(d.a)(R, 2),
          B = k[0],
          T = k[1],
          L = Object(O.g)().id,
          M = function () {
            x.a
              .get("".concat(U, "/readbookings/").concat(L))
              .then(function (e) {
                b(e.data), T(!1);
              }),
              x.a
                .get(
                  "".concat(U, "/installments/").concat(j.registrationNumber)
                )
                .then(function (e) {
                  A(e.data), T(!1);
                });
          };
        Object(a.useEffect)(
          function () {
            M();
          },
          [L, j.registrationNumber, D]
        );
        var z = j.registrationNumber;
        return B
          ? Object(G.jsx)(V, {})
          : Object(G.jsx)(G.Fragment, {
              children: Object(G.jsxs)("div", {
                className: t.root,
                children: [
                  Object(G.jsx)(u.a, {}),
                  Object(G.jsx)(f.a, {
                    position: "absolute",
                    className: Object(h.a)(t.appBar, c && t.appBarShift),
                    children: Object(G.jsxs)(y.a, {
                      className: t.toolbar,
                      children: [
                        Object(G.jsx)(C.a, {
                          edge: "start",
                          color: "inherit",
                          "aria-label": "open drawer",
                          onClick: function () {
                            r(!0);
                          },
                          className: Object(h.a)(
                            t.menuButton,
                            c && t.menuButtonHidden
                          ),
                          children: Object(G.jsx)(P.a, {}),
                        }),
                        Object(G.jsxs)(w.a, {
                          component: "h1",
                          variant: "h6",
                          color: "inherit",
                          noWrap: !0,
                          className: t.title,
                          children: [j.clientName, "'s Installments"],
                        }),
                        Object(G.jsxs)(C.a, {
                          color: "inherit",
                          onClick: function () {
                            localStorage.removeItem("userInfo"),
                              e.push("/login");
                          },
                          children: ["Logout ", Object(G.jsx)(K.a, {})],
                        }),
                      ],
                    }),
                  }),
                  Object(G.jsxs)(g.a, {
                    variant: "permanent",
                    classes: {
                      paper: Object(h.a)(
                        t.drawerPaper,
                        !c && t.drawerPaperClose
                      ),
                    },
                    open: c,
                    children: [
                      Object(G.jsx)("div", {
                        className: t.toolbarIcon,
                        children: Object(G.jsx)(C.a, {
                          onClick: function () {
                            r(!1);
                          },
                          children: Object(G.jsx)(I.a, {}),
                        }),
                      }),
                      Object(G.jsx)(N.a, {}),
                      Object(G.jsx)(v.a, { children: J }),
                    ],
                  }),
                  Object(G.jsx)("main", {
                    className: t.content,
                    children: Object(G.jsx)(S.a, {
                      maxWidth: "lg",
                      className: t.container,
                      children: Object(G.jsxs)("div", {
                        style: {
                          marginLeft: 20,
                          marginRight: 20,
                          marginTop: 30,
                        },
                        children: [
                          Object(G.jsxs)(ne.b, {
                            to: "/add-installment/".concat(L, "/").concat(z),
                            children: [
                              " ",
                              Object(G.jsx)("button", {
                                type: "button",
                                class: "btn btn-success",
                                style: { marginRight: 10 },
                                children: "Add Installment",
                              }),
                              "  ",
                            ],
                          }),
                          D.map(function (e, t) {
                            return Object(G.jsxs)(ye.a, {
                              style: {
                                marginLeft: 20,
                                marginRight: 20,
                                marginTop: 20,
                                width: 700,
                              },
                              children: [
                                Object(G.jsxs)(ye.a.Header, {
                                  children: ["Sr: ", e._id],
                                }),
                                Object(G.jsxs)(ye.a.Header, {
                                  children: ["Installment No. ", t + 1],
                                }),
                                Object(G.jsxs)(ye.a.Body, {
                                  children: [
                                    Object(G.jsxs)(ye.a.Title, {
                                      children: [
                                        "Applican Name: ",
                                        e.clientName,
                                      ],
                                    }),
                                    Object(G.jsxs)(ye.a.Text, {
                                      children: [
                                        "Date: ",
                                        ke()(e.currDate).format("L"),
                                        " ",
                                        Object(G.jsx)("br", {}),
                                        "Total Plot Price: ",
                                        e.totalPlotCost,
                                        "  ",
                                        Object(G.jsx)("br", {}),
                                        "Current Amount: ",
                                        e.currAmount,
                                        " ",
                                        Object(G.jsx)("br", {}),
                                        "Previous Amount: ",
                                        e.prevAmount,
                                        " ",
                                        Object(G.jsx)("br", {}),
                                        "Total Recieve Amount: ",
                                        e.totalRecAmount,
                                        " ",
                                        Object(G.jsx)("br", {}),
                                        "Remaining Balance: ",
                                        e.remainingBalance,
                                        " ",
                                        Object(G.jsx)("br", {}),
                                        "Due Date: ",
                                        ke()(e.dueData).format("L"),
                                        " ",
                                        Object(G.jsx)("br", {}),
                                      ],
                                    }),
                                    Object(G.jsxs)(ne.b, {
                                      to: "/installment-preview/".concat(e._id),
                                      children: [
                                        " ",
                                        Object(G.jsx)(He.a, {
                                          variant: "primary",
                                          style: { marginRight: 20 },
                                          children: "Preview",
                                        }),
                                      ],
                                    }),
                                    Object(G.jsx)(He.a, {
                                      variant: "danger",
                                      onClick: function () {
                                        return (function (e) {
                                          x.a.delete(
                                            ""
                                              .concat(U, "/delete-installment/")
                                              .concat(e),
                                            function () {
                                              return M();
                                            }
                                          );
                                        })(e._id);
                                      },
                                      children: "Delete",
                                    }),
                                  ],
                                }),
                              ],
                            });
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              }),
            });
      }
      var Ye = Object(m.a)(function (e) {
          return {
            root: { display: "flex" },
            toolbar: { paddingRight: 24 },
            toolbarIcon: Object(b.a)(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0 8px",
              },
              e.mixins.toolbar
            ),
            appBar: {
              zIndex: e.zIndex.drawer + 1,
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              marginLeft: 240,
              width: "calc(100% - ".concat(240, "px)"),
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            menuButton: { marginRight: 36 },
            menuButtonHidden: { display: "none" },
            title: { flexGrow: 1 },
            drawerPaper: {
              position: "relative",
              whiteSpace: "nowrap",
              width: 240,
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            drawerPaperClose: Object(j.a)(
              {
                overflowX: "hidden",
                transition: e.transitions.create("width", {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
                width: e.spacing(7),
              },
              e.breakpoints.up("sm"),
              { width: e.spacing(9) }
            ),
            appBarSpacer: e.mixins.toolbar,
            content: { flexGrow: 1, height: "100vh", overflow: "auto" },
            container: {
              paddingTop: e.spacing(4),
              paddingBottom: e.spacing(4),
            },
            paper: {
              padding: e.spacing(2),
              display: "flex",
              overflow: "auto",
              flexDirection: "column",
            },
            fixedHeight: { height: 240 },
          };
        }),
        Ge = {
          _id: null,
          registrationNumber: "",
          currDate: null,
          prevDate: null,
          prevSrNo: null,
          plotNo: "",
          plotSize: "",
          type: "",
          clientName: "",
          fhName: "",
          residentialAddress: "",
          contactNumber: null,
          clientCNIC: "",
          totalPlotCost: null,
          prevAmount: null,
          currAmount: null,
          totalRecAmount: null,
          remainingBalance: null,
          dueData: null,
        };

      function Je(e) {
        return Object(G.jsxs)("label", {
          children: [
            e.label,
            Object(G.jsx)("br", {}),
            Object(G.jsx)("input", Object(b.a)({}, e)),
          ],
        });
      }

      function qe() {
        var e = Ye(),
          t = i.a.useState(!0),
          n = Object(d.a)(t, 2),
          s = n[0],
          c = n[1],
          r = (Object(h.a)(e.paper, e.fixedHeight), Object(O.f)());
        Object(a.useEffect)(
          function () {
            localStorage.getItem("userInfo") || r.push("/login");
          },
          [r]
        );
        var l = Object(a.useState)([]),
          o = Object(d.a)(l, 2),
          j = o[0],
          p = o[1],
          m = Object(a.useState)([]),
          S = Object(d.a)(m, 2),
          D = S[0],
          A = S[1],
          R = Object(a.useState)(Ge),
          k = Object(d.a)(R, 2),
          B = k[0],
          T = k[1],
          L = Object(a.useState)(!0),
          M = Object(d.a)(L, 2),
          z = (M[0], M[1], Object(O.g)()),
          W = z.id,
          F = z.regnum;
        Object(a.useEffect)(
          function () {
            var e = x.a.get("".concat(U, "/installments/").concat(F)),
              t = x.a.get("".concat(U, "/readbookings/").concat(W));
            x.a.all([e, t]).then(
              x.a.spread(function () {
                var e = arguments.length <= 0 ? void 0 : arguments[0],
                  t = arguments.length <= 1 ? void 0 : arguments[1],
                  n = e.data.pop();
                p(t.data), A(n), console.log(j), console.log(D);
              })
            );
          },
          [W]
        ),
          (B.clientName = j.clientName),
          (B.clientCNIC = j.clientCNIC),
          (B.fhName = j.fhName),
          (B.residentialAddress = j.residentialAddress),
          (B.totalPlotCost = j.totalPlotCost),
          (B.contactNumber = j.contactNumber),
          (B.plotNo = j.plotNo),
          (B.type = j.type),
          (B.plotSize = j.plotSize),
          (B.registrationNumber = j.registrationNumber),
          (B.phase = j.phase),
          D
            ? ((B.prevDate = D.currDate),
              (B.prevSrNo = D._id),
              console.log(B.prevSrNo),
              (B.prevAmount = D.totalRecAmount),
              (B.remainingBalance = j.totalPlotCost - B.totalRecAmount),
              (B._id = B.prevSrNo + 1))
            : ((B.prevSrNo = j._id),
              (B.prevDate = j.date),
              console.log(B.prevDate),
              (B.prevAmount = j.downPayment),
              (B.remainingBalance = j.totalPlotCost - B.totalRecAmount),
              (B._id = B.prevSrNo + 1));
        return Object(G.jsx)(G.Fragment, {
          children: Object(G.jsxs)("div", {
            className: e.root,
            children: [
              Object(G.jsx)(u.a, {}),
              Object(G.jsx)(f.a, {
                position: "absolute",
                className: Object(h.a)(e.appBar, s && e.appBarShift),
                children: Object(G.jsxs)(y.a, {
                  className: e.toolbar,
                  children: [
                    Object(G.jsx)(C.a, {
                      edge: "start",
                      color: "inherit",
                      "aria-label": "open drawer",
                      onClick: function () {
                        c(!0);
                      },
                      className: Object(h.a)(
                        e.menuButton,
                        s && e.menuButtonHidden
                      ),
                      children: Object(G.jsx)(P.a, {}),
                    }),
                    Object(G.jsx)(w.a, {
                      component: "h1",
                      variant: "h6",
                      color: "inherit",
                      noWrap: !0,
                      className: e.title,
                      children: "Add Installment",
                    }),
                    Object(G.jsxs)(C.a, {
                      color: "inherit",
                      onClick: function () {
                        localStorage.removeItem("userInfo"), r.push("/login");
                      },
                      children: ["Logout ", Object(G.jsx)(K.a, {})],
                    }),
                  ],
                }),
              }),
              Object(G.jsxs)(g.a, {
                variant: "permanent",
                classes: {
                  paper: Object(h.a)(e.drawerPaper, !s && e.drawerPaperClose),
                },
                open: s,
                children: [
                  Object(G.jsx)("div", {
                    className: e.toolbarIcon,
                    children: Object(G.jsx)(C.a, {
                      onClick: function () {
                        c(!1);
                      },
                      children: Object(G.jsx)(I.a, {}),
                    }),
                  }),
                  Object(G.jsx)(N.a, {}),
                  Object(G.jsx)(v.a, { children: J }),
                ],
              }),
              Object(G.jsx)("main", {
                className: e.content,
                children: Object(G.jsx)("form", {
                  onSubmit: function (e) {
                    if (
                      (e.preventDefault(),
                      null === B.currDate ||
                        null === B.currAmount ||
                        null === B.dueData)
                    )
                      alert("Please Fill all Entries");
                    else {
                      var t = new FormData();
                      t.append("_id", B._id),
                        t.append("clientName", B.clientName),
                        t.append("prevDate", B.prevDate),
                        t.append("currDate", B.currDate),
                        t.append("dueData", B.dueData),
                        t.append("prevSrNo", B.prevSrNo),
                        t.append("clientCNIC", B.clientCNIC),
                        t.append("fhName", B.fhName),
                        t.append("residentialAddress", B.residentialAddress),
                        t.append("totalPlotCost", B.totalPlotCost),
                        t.append("contactNumber", B.contactNumber),
                        t.append("prevAmount", B.prevAmount),
                        t.append("currAmount", B.currAmount),
                        t.append("totalRecAmount", B.totalRecAmount),
                        t.append("plotNo", B.plotNo),
                        t.append("type", B.type),
                        t.append("plotSize", B.plotSize),
                        t.append("registrationNumber", B.registrationNumber),
                        t.append("remainingBalance", B.remainingBalance),
                        console.log(Array.from(t)),
                        x.a
                          .post("".concat(U, "/add-installment"), B)
                          .then(alert("Installment has been added"))
                          .then(r.push("/installments/".concat(W)));
                    }
                  },
                  children: Object(G.jsxs)("fieldset", {
                    children: [
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "row" },
                        children: [
                          Object(G.jsx)(Je, {
                            label: "Previous Sr No:",
                            name: "prevSrNo",
                            type: "number",
                            value: B.prevSrNo,
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Previous Date:",
                            name: "date",
                            type: "date",
                            value: ke()(new Date(B.prevDate)).format(
                              "YYYY-MM-DD"
                            ),
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Plot No:",
                            name: "plotNo",
                            type: "text",
                            value: B.plotNo,
                          }),
                        ],
                      }),
                      Object(G.jsx)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 20,
                        },
                        children: Object(G.jsx)(Je, {
                          label: "Phase:",
                          name: "phase",
                          type: "text",
                          value: B.phase,
                        }),
                      }),
                      Object(G.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 20,
                        },
                        children: [
                          Object(G.jsx)(Je, {
                            label: "Name:",
                            name: "clientName",
                            type: "text",
                            value: B.clientName,
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Father/Husband Name:",
                            name: "fhName",
                            type: "text",
                            value: B.fhName,
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Contact Number:",
                            name: "contactNumber",
                            type: "number",
                            value: B.contactNumber,
                            style: { marginRight: 60 },
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: { display: "flex", flexDirection: "column" },
                        children: [
                          Object(G.jsx)("label", { children: "CNIC" }),
                          Object(G.jsx)(Q.a, {
                            format: "#####-#######-#",
                            type: "text",
                            value: B.clientCNIC,
                            style: { height: 40 },
                          }),
                        ],
                      }),
                      Object(G.jsx)("div", {
                        style: { marginTop: 20 },
                        children: Object(G.jsx)(Je, {
                          label: "Residential Address:",
                          name: "residentialAddress",
                          type: "text",
                          value: B.residentialAddress,
                        }),
                      }),
                      Object(G.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 20,
                        },
                        children: [
                          Object(G.jsx)(Je, {
                            label: "Total Price:",
                            name: "totalPlotCost",
                            type: "number",
                            value: B.totalPlotCost,
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Previous Amount:",
                            name: "previousamount",
                            type: "number",
                            value: B.prevAmount,
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Current Amount:",
                            type: "number",
                            value: B.currAmount,
                            onChange: function (e) {
                              return T(
                                Object(b.a)(
                                  Object(b.a)({}, B),
                                  {},
                                  {
                                    currAmount: e.target.value,
                                    totalRecAmount:
                                      parseInt(e.target.value) +
                                      parseInt(B.prevAmount),
                                  }
                                )
                              );
                            },
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 20,
                        },
                        children: [
                          Object(G.jsx)(Je, {
                            label: "Total Receiving Amount:",
                            type: "number",
                            value: B.totalRecAmount,
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Remaining Balance:",
                            type: "number",
                            value: B.remainingBalance,
                          }),
                        ],
                      }),
                      Object(G.jsxs)("div", {
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          marginTop: 20,
                        },
                        children: [
                          Object(G.jsx)(Je, {
                            label: "Current Date:",
                            name: "date",
                            type: "date",
                            onChange: function (e) {
                              return T(
                                Object(b.a)(
                                  Object(b.a)({}, B),
                                  {},
                                  { currDate: e.target.value }
                                )
                              );
                            },
                            style: { marginRight: 60 },
                          }),
                          Object(G.jsx)(Je, {
                            label: "Due Date:",
                            name: "duedate",
                            type: "date",
                            onChange: function (e) {
                              return T(
                                Object(b.a)(
                                  Object(b.a)({}, B),
                                  {},
                                  { dueData: e.target.value }
                                )
                              );
                            },
                          }),
                        ],
                      }),
                      Object(G.jsx)("br", {}),
                      Object(G.jsx)("button", {
                        type: "submit",
                        class: "btn btn-primary",
                        children: "Add Installment",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
        });
      }

      function Ke() {
        var e = Object(O.g)().id,
          t = Object(a.useState)([]),
          n = Object(d.a)(t, 2),
          i = n[0],
          s = n[1],
          c = Object(a.useState)(!0),
          r = Object(d.a)(c, 2),
          l = r[0],
          o = r[1],
          j = new Intl.NumberFormat("en-IN");
        Object(a.useEffect)(
          function () {
            x.a
              .get("".concat(U, "/installment-preview/").concat(e))
              .then(function (e) {
                s(e.data), o(!1);
              })
              .catch(function (e) {
                console.log(e);
              }),
              console.log(i);
          },
          [e]
        );
        var b = Object(a.useRef)(),
          h = Object(Ie.useReactToPrint)({
            content: function () {
              return b.current;
            },
          });
        return l
          ? Object(G.jsx)(V, {})
          : Object(G.jsxs)(G.Fragment, {
              children: [
                Object(G.jsxs)("div", {
                  class: "row",
                  style: { marginLeft: 20, marginRight: 20, marginTop: 100 },
                  ref: b,
                  children: [
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsx)("div", {
                          children: Object(G.jsx)("img", {
                            src: "".concat(U, "/image/logo.png"),
                            style: { width: 100, height: 100 },
                          }),
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            djustifyContent: "center",
                            textAlign: "center",
                            marginLeft: 20,
                            marginRight: 20,
                          },
                          children: [
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                style: {
                                  fontSize: 40,
                                  fontWeight: "bold",
                                  color: "brown",
                                },
                                children: "NEW TOWN",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                style: { fontWeight: "bold", fontSize: 20 },
                                children: "Installment Receipt (Office Copy)",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                children:
                                  "4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                children:
                                  "Scheme, Lahore. Cell:0322-3303331. Ph: 042-35927305",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 20,
                      },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Previous Sr No.",
                            }),
                            " ",
                            i.prevSrNo,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Previous Date.",
                            }),
                            " ",
                            ke()(i.prevDate).format("L"),
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Current Sr No.",
                            }),
                            " ",
                            i._id,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Current Date.",
                            }),
                            " ",
                            ke()(i.currDate).format("L"),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          children: [
                            Object(G.jsx)("strong", { children: "Phase:" }),
                            " ",
                            i.phase,
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Name." }),
                            " ",
                            i.clientName,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "S/O, W/O, D/O",
                            }),
                            " ",
                            i.fhName,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", { children: "CNIC:" }),
                            " ",
                            i.clientCNIC,
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Plot No." }),
                            " ",
                            i.plotNo,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Type." }),
                            " ",
                            i.type,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Category:" }),
                            " ",
                            i.plotSize,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Total Price:",
                            }),
                            " ",
                            j.format(i.totalPlotCost),
                            " Rs.",
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Previous Amount.",
                            }),
                            " ",
                            j.format(i.prevAmount),
                            " Rs.",
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Current Amount.",
                            }),
                            " ",
                            j.format(i.currAmount),
                            " Rs.",
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Total Recieved:",
                            }),
                            " ",
                            j.format(i.totalRecAmount),
                            " Rs.",
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 260 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Remaining Balance.",
                            }),
                            " ",
                            j.format(i.remainingBalance),
                            " Rs.",
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", { children: "Due Date." }),
                            " ",
                            ke()(i.dueData).format("L"),
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 30,
                      },
                      children: [
                        Object(G.jsx)("div", {
                          style: { width: 240 },
                          children: Object(G.jsx)("strong", {
                            children: "Authorized Sig.",
                          }),
                        }),
                        Object(G.jsx)("div", {
                          children:
                            "  4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing Scheme, Lahore. Cell: 0322-3303331, Ph: 042-35927305",
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 100,
                      },
                      children: [
                        Object(G.jsx)("div", {
                          children: Object(G.jsx)("img", {
                            src: "".concat(U, "/image/logo.png"),
                            style: { width: 100, height: 100 },
                          }),
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            djustifyContent: "center",
                            textAlign: "center",
                            marginLeft: 20,
                            marginRight: 20,
                          },
                          children: [
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                style: {
                                  fontSize: 40,
                                  fontWeight: "bold",
                                  color: "brown",
                                },
                                children: "NEW TOWN",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                style: { fontWeight: "bold", fontSize: 20 },
                                children: "Installment Receipt (Customer Copy)",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                children:
                                  "4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing",
                              }),
                            }),
                            Object(G.jsx)("div", {
                              children: Object(G.jsx)("p", {
                                children:
                                  "Scheme, Lahore. Cell:0322-3303331. Ph: 042-35927305",
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        marginTop: 20,
                      },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Previous Sr No.",
                            }),
                            " ",
                            i.prevSrNo,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Previous Date.",
                            }),
                            " ",
                            ke()(i.prevDate).format("L"),
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Current Sr No.",
                            }),
                            " ",
                            i._id,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Current Date.",
                            }),
                            " ",
                            ke()(i.currDate).format("L"),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          children: [
                            Object(G.jsx)("strong", { children: "Phase:" }),
                            " ",
                            i.phase,
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Name." }),
                            " ",
                            i.clientName,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "S/O, W/O, D/O",
                            }),
                            " ",
                            i.fhName,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", { children: "CNIC:" }),
                            " ",
                            i.clientCNIC,
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Plot No." }),
                            " ",
                            i.plotNo,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Type." }),
                            " ",
                            i.type,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 150 },
                          children: [
                            Object(G.jsx)("strong", { children: "Category:" }),
                            " ",
                            i.plotSize,
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Total Price:",
                            }),
                            " ",
                            j.format(i.totalPlotCost),
                            " Rs.",
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Previous Amount.",
                            }),
                            " ",
                            j.format(i.prevAmount),
                            " Rs.",
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 240 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Current Amount.",
                            }),
                            " ",
                            j.format(i.currAmount),
                            " Rs.",
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Total Recieved:",
                            }),
                            " ",
                            j.format(i.totalRecAmount),
                            " Rs.",
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: { display: "flex", flexDirection: "row" },
                      children: [
                        Object(G.jsxs)("div", {
                          style: { width: 260 },
                          children: [
                            Object(G.jsx)("strong", {
                              children: "Remaining Balance.",
                            }),
                            " ",
                            j.format(i.remainingBalance),
                            " Rs.",
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { width: 220 },
                          children: [
                            Object(G.jsx)("strong", { children: "Due Date." }),
                            " ",
                            ke()(i.dueData).format("L"),
                          ],
                        }),
                      ],
                    }),
                    Object(G.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 30,
                      },
                      children: [
                        Object(G.jsx)("div", {
                          style: { width: 240 },
                          children: Object(G.jsx)("strong", {
                            children: "Authorized Sig.",
                          }),
                        }),
                        Object(G.jsx)("div", {
                          children:
                            "  4.5 Km Sue-e-Asal Raiwind Road, Opposite Safari Garden Housing Scheme, Lahore. Cell: 0322-3303331, Ph: 042-35927305",
                        }),
                      ],
                    }),
                  ],
                }),
                Object(G.jsxs)("button", {
                  style: { width: 200, height: 100 },
                  class: "btn btn-success",
                  onClick: h,
                  children: [Object(G.jsx)(Te.a, {}), "Print"],
                }),
              ],
            });
      }
      var Ue = Object(m.a)(function (e) {
        return {
          root: { display: "flex" },
          toolbar: { paddingRight: 24 },
          toolbarIcon: Object(b.a)(
            {
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0 8px",
            },
            e.mixins.toolbar
          ),
          appBar: {
            zIndex: e.zIndex.drawer + 1,
            transition: e.transitions.create(["width", "margin"], {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.leavingScreen,
            }),
          },
          appBarShift: {
            marginLeft: 240,
            width: "calc(100% - ".concat(240, "px)"),
            transition: e.transitions.create(["width", "margin"], {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          menuButton: { marginRight: 36 },
          menuButtonHidden: { display: "none" },
          title: { flexGrow: 1 },
          drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: 240,
            transition: e.transitions.create("width", {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          drawerPaperClose: Object(j.a)(
            {
              overflowX: "hidden",
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              width: e.spacing(7),
            },
            e.breakpoints.up("sm"),
            { width: e.spacing(9) }
          ),
          appBarSpacer: e.mixins.toolbar,
          content: { flexGrow: 1, height: "100vh", overflow: "auto" },
          container: { paddingTop: e.spacing(4), paddingBottom: e.spacing(4) },
          paper: {
            padding: e.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
          },
          fixedHeight: { height: 240 },
        };
      });

      function Xe(e) {
        return Object(G.jsxs)("label", {
          children: [
            e.label,
            Object(G.jsx)("br", {}),
            Object(G.jsx)("input", Object(b.a)({}, e)),
          ],
        });
      }
      var Ve = function () {
          var e = Object(O.g)().id,
            t = Ue(),
            n = i.a.useState(!0),
            s = Object(d.a)(n, 2),
            c = s[0],
            r = s[1],
            l = (Object(h.a)(t.paper, t.fixedHeight), Object(O.f)()),
            o = Object(a.useState)([]),
            p = Object(d.a)(o, 2),
            m = p[0],
            S = p[1],
            D = Object(a.useState)([]),
            A = Object(d.a)(D, 2),
            R = A[0],
            k = A[1];
          Object(a.useEffect)(
            function () {
              localStorage.getItem("userInfo") || l.push("/login");
            },
            [l]
          ),
            Object(a.useEffect)(
              function () {
                x.a
                  .get("".concat(U, "/readbookings/").concat(e))
                  .then(function (e) {
                    S(e.data);
                  });
              },
              [e]
            );
          var B = function (e) {
            var t = e.target.name,
              n = "status" === t ? e.target.checked : e.target.value;
            S(Object(b.a)(Object(b.a)({}, m), {}, Object(j.a)({}, t, n))),
              k(Object(b.a)(Object(b.a)({}, R), {}, Object(j.a)({}, t, n)));
          };
          return Object(G.jsx)(G.Fragment, {
            children: Object(G.jsxs)("div", {
              className: t.root,
              children: [
                Object(G.jsx)(u.a, {}),
                Object(G.jsx)(f.a, {
                  position: "absolute",
                  className: Object(h.a)(t.appBar, c && t.appBarShift),
                  children: Object(G.jsxs)(y.a, {
                    className: t.toolbar,
                    children: [
                      Object(G.jsx)(C.a, {
                        edge: "start",
                        color: "inherit",
                        "aria-label": "open drawer",
                        onClick: function () {
                          r(!0);
                        },
                        className: Object(h.a)(
                          t.menuButton,
                          c && t.menuButtonHidden
                        ),
                        children: Object(G.jsx)(P.a, {}),
                      }),
                      Object(G.jsx)(w.a, {
                        component: "h1",
                        variant: "h6",
                        color: "inherit",
                        noWrap: !0,
                        className: t.title,
                        children: "Update Booking Form",
                      }),
                      Object(G.jsxs)(C.a, {
                        color: "inherit",
                        onClick: function () {
                          localStorage.removeItem("userInfo"), l.push("/login");
                        },
                        children: ["Logout ", Object(G.jsx)(K.a, {})],
                      }),
                    ],
                  }),
                }),
                Object(G.jsxs)(g.a, {
                  variant: "permanent",
                  classes: {
                    paper: Object(h.a)(t.drawerPaper, !c && t.drawerPaperClose),
                  },
                  open: c,
                  children: [
                    Object(G.jsx)("div", {
                      className: t.toolbarIcon,
                      children: Object(G.jsx)(C.a, {
                        onClick: function () {
                          r(!1);
                        },
                        children: Object(G.jsx)(I.a, {}),
                      }),
                    }),
                    Object(G.jsx)(N.a, {}),
                    Object(G.jsx)(v.a, { children: J }),
                  ],
                }),
                Object(G.jsx)("main", {
                  className: t.content,
                  children: Object(G.jsx)("form", {
                    onSubmit: function (t) {
                      t.preventDefault(),
                        console.log(m),
                        null === m.plotNo ||
                        "" === m.street ||
                        "" === m.plotSize ||
                        "" === m.type ||
                        "" === m.phase ||
                        "" === m.clientName ||
                        "" === m.fhName ||
                        "" === m.residentialAddress ||
                        "" === m.permanentAddress ||
                        null === m.contactNumber ||
                        null === m.landLine ||
                        "" === m.email ||
                        "" === m.occupation ||
                        null === m.age ||
                        "" === m.nationality ||
                        null === m.clientCNIC ||
                        "" === m.nomineeName ||
                        "" === m.nomineeRelation ||
                        null === m.nomineeCNIC ||
                        "" === m.nomineeAddress ||
                        null === m.totalPlotCost ||
                        null === m.downPayment ||
                        "" === m.bankOrDraft ||
                        null === m.date ||
                        null === m.drawnOn ||
                        "" === m.image ||
                        "" === m.remarks
                          ? alert("Please Fill Entries")
                          : (x.a
                              .put(
                                "".concat(U, "/update-booking/").concat(e),
                                JSON.stringify(R),
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }
                              )
                              .then(alert("Booking has been Updated"))
                              .then(l.push("/booking-preview/".concat(e))),
                            console.log(R));
                    },
                    children: Object(G.jsxs)("fieldset", {
                      children: [
                        Object(G.jsxs)("div", {
                          style: { display: "flex", flexDirection: "row" },
                          children: [
                            Object(G.jsx)(Xe, {
                              label: "Plot No:",
                              name: "plotNo",
                              onChange: B,
                              type: "text",
                              placeholder: "Plot No",
                              value: m.plotNo,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Street:",
                              name: "street",
                              onChange: B,
                              type: "text",
                              placeholder: "Street",
                              value: m.street,
                            }),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { display: "flex", flexDirection: "row" },
                          children: [
                            Object(G.jsxs)("select", {
                              style: {
                                width: 200,
                                marginTop: 20,
                                marginRight: 40,
                              },
                              class: "form-select",
                              "aria-label": "Default select example",
                              onChange: B,
                              name: "plotSize",
                              value: m.plotSize,
                              children: [
                                Object(G.jsx)("option", {
                                  selected: !0,
                                  children: "Plot Size",
                                }),
                                Object(G.jsx)("option", {
                                  value: "2.5 Marla",
                                  children: "2.5 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "2.75 Marla",
                                  children: "2.75 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "3 Marla",
                                  children: "3 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "4 Marla",
                                  children: "4 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "5 Marla",
                                  children: "5 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "6 Marla",
                                  children: "6 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "7 Marla",
                                  children: "7 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "8 Marla",
                                  children: "8 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "9 Marla",
                                  children: "9 Marla",
                                }),
                                Object(G.jsx)("option", {
                                  value: "10 Marla",
                                  children: "10 Marla",
                                }),
                              ],
                            }),
                            Object(G.jsxs)("select", {
                              style: {
                                width: 200,
                                marginTop: 20,
                                marginRight: 40,
                              },
                              class: "form-select",
                              "aria-label": "Default select example",
                              onChange: B,
                              name: "type",
                              value: m.type,
                              children: [
                                Object(G.jsx)("option", {
                                  selected: !0,
                                  children: "Plot Type",
                                }),
                                Object(G.jsx)("option", {
                                  value: "Residential",
                                  children: "Residential",
                                }),
                                Object(G.jsx)("option", {
                                  value: "Commercial",
                                  children: "Commercial",
                                }),
                              ],
                            }),
                            Object(G.jsxs)("select", {
                              style: { width: 200, marginTop: 20 },
                              class: "form-select",
                              "aria-label": "Default select example",
                              onChange: B,
                              name: "phase",
                              value: m.phase,
                              children: [
                                Object(G.jsx)("option", {
                                  selected: !0,
                                  children: "Phase",
                                }),
                                Object(G.jsx)("option", {
                                  value: "NA-NP",
                                  children: "NA-NP",
                                }),
                                Object(G.jsx)("option", {
                                  value: "NA-JTC",
                                  children: "NA-JTC",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                          },
                          children: [
                            Object(G.jsx)(Xe, {
                              label: "Name:",
                              name: "clientName",
                              onChange: B,
                              type: "text",
                              value: m.clientName,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Father/Husband Name:",
                              name: "fhName",
                              onChange: B,
                              type: "text",
                              value: m.fhName,
                            }),
                          ],
                        }),
                        Object(G.jsx)("div", {
                          style: { marginTop: 20 },
                          children: Object(G.jsx)(Xe, {
                            label: "Residential Address:",
                            name: "residentialAddress",
                            onChange: B,
                            type: "text",
                            value: m.residentialAddress,
                          }),
                        }),
                        Object(G.jsx)("div", {
                          style: { marginTop: 20 },
                          children: Object(G.jsx)(Xe, {
                            label: "Permanent Address:",
                            name: "permanentAddress",
                            onChange: B,
                            type: "text",
                            value: m.permanentAddress,
                          }),
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                          },
                          children: [
                            Object(G.jsx)(Xe, {
                              label: "Contact Number:",
                              name: "contactNumber",
                              onChange: B,
                              type: "number",
                              maxLength: "11",
                              value: m.contactNumber,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Landline:",
                              name: "landLine",
                              onChange: B,
                              type: "number",
                              value: m.landLine,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Email:",
                              name: "email",
                              onChange: B,
                              type: "text",
                              value: m.email,
                            }),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                          },
                          children: [
                            Object(G.jsx)(Xe, {
                              label: "Occupation:",
                              name: "occupation",
                              onChange: B,
                              type: "text",
                              value: m.occupation,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Age:",
                              name: "age",
                              onChange: B,
                              type: "number",
                              value: m.age,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Nationality:",
                              name: "nationality",
                              onChange: B,
                              type: "text",
                              value: m.nationality,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsxs)("div", {
                              style: {
                                display: "flex",
                                flexDirection: "column",
                              },
                              children: [
                                Object(G.jsx)("label", { children: "CNIC" }),
                                Object(G.jsx)(Q.a, {
                                  format: "#####-#######-#",
                                  type: "text",
                                  value: m.clientCNIC,
                                  onChange: function (e) {
                                    S(
                                      Object(b.a)(
                                        Object(b.a)({}, m),
                                        {},
                                        { clientCNIC: e.target.value }
                                      )
                                    ),
                                      k(
                                        Object(b.a)(
                                          Object(b.a)({}, R),
                                          {},
                                          { clientCNIC: e.target.value }
                                        )
                                      );
                                  },
                                  style: { height: 40 },
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                          },
                          children: [
                            Object(G.jsx)(Xe, {
                              label: "Nominee Name:",
                              name: "nomineeName",
                              onChange: B,
                              type: "text",
                              value: m.nomineeName,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Nominee Relation:",
                              name: "nomineeRelation",
                              onChange: B,
                              type: "text",
                              value: m.nomineeRelation,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsxs)("div", {
                              children: [
                                Object(G.jsx)("label", { children: "CNIC" }),
                                Object(G.jsx)(Q.a, {
                                  format: "#####-#######-#",
                                  type: "text",
                                  value: m.nomineeCNIC,
                                  onChange: function (e) {
                                    S(
                                      Object(b.a)(
                                        Object(b.a)({}, m),
                                        {},
                                        { nomineeCNIC: e.target.value }
                                      )
                                    ),
                                      k(
                                        Object(b.a)(
                                          Object(b.a)({}, R),
                                          {},
                                          { nomineeCNIC: e.target.value }
                                        )
                                      );
                                  },
                                  style: { height: 40 },
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(G.jsx)("div", {
                          style: { marginTop: 20 },
                          children: Object(G.jsx)(Xe, {
                            label: "Nominee Address:",
                            name: "nomineeAddress",
                            onChange: B,
                            type: "text",
                            value: m.nomineeAddress,
                          }),
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                          },
                          children: [
                            Object(G.jsx)(Xe, {
                              label: "Total Plot Cost:",
                              name: "totalPlotCost",
                              onChange: B,
                              type: "number",
                              value: m.totalPlotCost,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "Down Payment:",
                              name: "downPayment",
                              onChange: B,
                              type: "number",
                              value: m.downPayment,
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsxs)("select", {
                              style: { width: 200, marginTop: 20 },
                              class: "form-select",
                              "aria-label": "Default select example",
                              onChange: B,
                              name: "bankOrDraft",
                              value: m.bankOrDraft,
                              children: [
                                Object(G.jsx)("option", {
                                  selected: !0,
                                  children: "Payment Method",
                                }),
                                Object(G.jsx)("option", {
                                  value: "Bank Draft",
                                  children: "Bank Draft",
                                }),
                                Object(G.jsx)("option", {
                                  value: "Pay Order",
                                  children: "Pay Order",
                                }),
                                Object(G.jsx)("option", {
                                  value: "Cash",
                                  children: "Cash",
                                }),
                              ],
                            }),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: {
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 20,
                          },
                          children: [
                            Object(G.jsx)(Xe, {
                              label: "Date:",
                              name: "date",
                              onChange: B,
                              type: "date",
                              value: ke()(new Date(m.date)).format(
                                "YYYY-MM-DD"
                              ),
                              style: { marginRight: 60 },
                            }),
                            Object(G.jsx)(Xe, {
                              label: "DrawnOn:",
                              name: "drawnOn",
                              onChange: B,
                              type: "date",
                              value: ke()(new Date(m.drawnOn)).format(
                                "YYYY-MM-DD"
                              ),
                            }),
                          ],
                        }),
                        Object(G.jsxs)("div", {
                          style: { marginTop: 20 },
                          children: [
                            Object(G.jsx)("label", { children: "Remarks:" }),
                            Object(G.jsx)("textarea", {
                              placeholder: "Remarks...",
                              style: { width: 500, height: 300 },
                              onChange: B,
                              name: "remarks",
                              value: m.remarks,
                            }),
                            Object(G.jsx)("br", {}),
                            Object(G.jsx)("br", {}),
                          ],
                        }),
                        Object(G.jsx)("button", {
                          type: "submit",
                          class: "btn btn-primary",
                          children: "Update Booking",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
        Qe = Object(m.a)(function (e) {
          return {
            root: { display: "flex" },
            toolbar: { paddingRight: 24 },
            toolbarIcon: Object(b.a)(
              {
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-end",
                padding: "0 8px",
              },
              e.mixins.toolbar
            ),
            appBar: {
              zIndex: e.zIndex.drawer + 1,
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
            },
            appBarShift: {
              marginLeft: 240,
              width: "calc(100% - ".concat(240, "px)"),
              transition: e.transitions.create(["width", "margin"], {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            menuButton: { marginRight: 36 },
            menuButtonHidden: { display: "none" },
            title: { flexGrow: 1 },
            drawerPaper: {
              position: "relative",
              whiteSpace: "nowrap",
              width: 240,
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            drawerPaperClose: Object(j.a)(
              {
                overflowX: "hidden",
                transition: e.transitions.create("width", {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
                width: e.spacing(7),
              },
              e.breakpoints.up("sm"),
              { width: e.spacing(9) }
            ),
            appBarSpacer: e.mixins.toolbar,
            content: { flexGrow: 1, height: "100vh", overflow: "auto" },
            container: {
              paddingTop: e.spacing(4),
              paddingBottom: e.spacing(4),
            },
            paper: {
              padding: e.spacing(2),
              display: "flex",
              overflow: "auto",
              flexDirection: "column",
            },
            fixedHeight: { height: 240 },
          };
        });

      function Ze() {
        var e,
          t = Qe(),
          n = i.a.useState(!0),
          s = Object(d.a)(n, 2),
          c = s[0],
          r = s[1],
          l = (Object(h.a)(t.paper, t.fixedHeight), Object(O.f)());
        Object(a.useEffect)(
          function () {
            localStorage.getItem("userInfo") || l.push("/login");
          },
          [l]
        );
        var o = Object(a.useState)(""),
          p = Object(d.a)(o, 2),
          m = (p[0], p[1], Object(a.useState)("")),
          S = Object(d.a)(m, 2),
          D = (S[0], S[1], Object(a.useState)({ plotNo: "", phase: "" })),
          A = Object(d.a)(D, 2),
          R = A[0],
          k = A[1],
          B = Object(a.useState)(""),
          T = Object(d.a)(B, 2),
          L = T[0],
          M = T[1],
          z = Object(a.useState)(!1),
          W = Object(d.a)(z, 2),
          F = W[0],
          H = W[1],
          E = Object(a.useState)(!1),
          _ = Object(d.a)(E, 2);
        _[0], _[1];
        return Object(G.jsx)(G.Fragment, {
          children: Object(G.jsxs)("div", {
            className: t.root,
            children: [
              Object(G.jsx)(u.a, {}),
              Object(G.jsx)(f.a, {
                position: "absolute",
                className: Object(h.a)(t.appBar, c && t.appBarShift),
                children: Object(G.jsxs)(y.a, {
                  className: t.toolbar,
                  children: [
                    Object(G.jsx)(C.a, {
                      edge: "start",
                      color: "inherit",
                      "aria-label": "open drawer",
                      onClick: function () {
                        r(!0);
                      },
                      className: Object(h.a)(
                        t.menuButton,
                        c && t.menuButtonHidden
                      ),
                      children: Object(G.jsx)(P.a, {}),
                    }),
                    Object(G.jsx)(w.a, {
                      component: "h1",
                      variant: "h6",
                      color: "inherit",
                      noWrap: !0,
                      className: t.title,
                      children: "Search Booking",
                    }),
                    Object(G.jsxs)(C.a, {
                      color: "inherit",
                      onClick: function () {
                        localStorage.removeItem("userInfo"), l.push("/login");
                      },
                      children: ["Logout ", Object(G.jsx)(K.a, {})],
                    }),
                  ],
                }),
              }),
              Object(G.jsxs)(g.a, {
                variant: "permanent",
                classes: {
                  paper: Object(h.a)(t.drawerPaper, !c && t.drawerPaperClose),
                },
                open: c,
                children: [
                  Object(G.jsx)("div", {
                    className: t.toolbarIcon,
                    children: Object(G.jsx)(C.a, {
                      onClick: function () {
                        r(!1);
                      },
                      children: Object(G.jsx)(I.a, {}),
                    }),
                  }),
                  Object(G.jsx)(N.a, {}),
                  Object(G.jsx)(v.a, { children: J }),
                ],
              }),
              Object(G.jsxs)("main", {
                className: t.content,
                children: [
                  Object(G.jsxs)("div", {
                    class: "input-group",
                    style: {
                      margin: 20,
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 100,
                    },
                    children: [
                      Object(G.jsx)("div", {
                        children: Object(G.jsx)("input", {
                          type: "text",
                          className: "form-control rounded",
                          placeholder: "Enter plot No.",
                          "aria-label": "Search",
                          "aria-describedby": "search-addon",
                          onChange: function (e) {
                            k(
                              Object(b.a)(
                                Object(b.a)({}, R),
                                {},
                                { plotNo: e.target.value }
                              )
                            );
                          },
                          style: { height: 60 },
                        }),
                      }),
                      Object(G.jsx)("div", {
                        children: Object(G.jsxs)("select", {
                          style: { width: 200, marginLeft: 20, height: 60 },
                          class: "form-select",
                          "aria-label": "Default select example",
                          name: "phase",
                          onChange: function (e) {
                            k(
                              Object(b.a)(
                                Object(b.a)({}, R),
                                {},
                                { phase: e.target.value }
                              )
                            );
                          },
                          children: [
                            Object(G.jsx)("option", {
                              selected: !0,
                              children: "Phase",
                            }),
                            Object(G.jsx)("option", {
                              value: "NA-NP",
                              children: "NA-NP",
                            }),
                            Object(G.jsx)("option", {
                              value: "NA-JTC",
                              children: "NA-JTC",
                            }),
                          ],
                        }),
                      }),
                      Object(G.jsx)("button", {
                        type: "button",
                        className: "btn btn-outline-primary",
                        onClick: function (e) {
                          e.preventDefault(),
                            console.log(R),
                            H(!0),
                            x.a
                              .post(
                                "".concat(U, "/search-booking-phase/"),
                                JSON.stringify(R),
                                {
                                  headers: {
                                    "Content-Type": "application/json",
                                  },
                                }
                              )
                              .then(function (e) {
                                "No Booking Found" === e.data
                                  ? (alert("No Booking Found"), M(""), H(!1))
                                  : (M(e.data), H(!1));
                              });
                        },
                        style: { marginLeft: 10, marginRight: 20 },
                        children: "search",
                      }),
                    ],
                  }),
                  L &&
                    Object(G.jsxs)("div", {
                      children: [
                        F && Object(G.jsx)(V, {}),
                        Object(G.jsx)(
                          "div",
                          ((e = {
                            className: "card mb-6",
                            style: { maxWidth: 600 },
                          }),
                          Object(j.a)(e, "style", {
                            marginLeft: 20,
                            marginTop: 20,
                          }),
                          Object(j.a)(
                            e,
                            "children",
                            Object(G.jsxs)("div", {
                              className: "row g-0",
                              children: [
                                Object(G.jsx)("div", {
                                  className: "col-md-4",
                                  children: Object(G.jsx)("img", {
                                    src: L.image,
                                    class: "img-fluid rounded-start",
                                    style: { width: 200, height: 200 },
                                  }),
                                }),
                                Object(G.jsx)("div", {
                                  className: "col-md-8",
                                  children: Object(G.jsxs)("div", {
                                    className: "card-body",
                                    children: [
                                      Object(G.jsxs)("h5", {
                                        className: "card-title",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Client Name:",
                                          }),
                                          L.clientName,
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Registration No:",
                                          }),
                                          L.registrationNumber,
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Plot No:",
                                          }),
                                          L.plotNo,
                                          " \xa0\xa0\xa0",
                                          Object(G.jsx)("strong", {
                                            children: "Plot Type:",
                                          }),
                                          L.type,
                                          " ",
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "Plot Size:",
                                          }),
                                          L.plotSize,
                                        ],
                                      }),
                                      Object(G.jsxs)("p", {
                                        className: "card-text",
                                        children: [
                                          Object(G.jsx)("strong", {
                                            children: "CNIC:",
                                          }),
                                          L.clientCNIC,
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/booking-preview/".concat(L._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(ie.a, {}),
                                              "Booking Preview",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/installments/".concat(L._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(le.a, {}),
                                              "Installments",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/agreement-preview/".concat(L._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(de.a, {}),
                                              "Agreement Payment Preview",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/installments-schedule/".concat(
                                          L._id
                                        ),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-success",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(ce.a, {}),
                                              "Installment Schedule",
                                            ],
                                          }),
                                          "  ",
                                        ],
                                      }),
                                      Object(G.jsxs)(ne.b, {
                                        to: "/update-booking/".concat(L._id),
                                        children: [
                                          " ",
                                          Object(G.jsxs)("button", {
                                            type: "button",
                                            class: "btn btn-primary",
                                            style: { marginRight: 10 },
                                            children: [
                                              Object(G.jsx)(be.a, {}),
                                              "Edit",
                                            ],
                                          }),
                                          " ",
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            })
                          ),
                          e)
                        ),
                      ],
                    }),
                  Object(G.jsx)("div", {}),
                ],
              }),
            ],
          }),
        });
      }

      function $e() {
        var e = Object(a.useState)(""),
          t = Object(d.a)(e, 2),
          n = t[0],
          i = t[1],
          s = Object(a.useState)(""),
          c = Object(d.a)(s, 2),
          r = c[0],
          j = c[1],
          b = Object(a.useState)(""),
          h = Object(d.a)(b, 2),
          p = h[0],
          g = h[1],
          f = Object(a.useState)(""),
          y = Object(d.a)(f, 2),
          v = y[0],
          N = y[1],
          C = Object(a.useState)(""),
          D = Object(d.a)(C, 2),
          P = D[0],
          A = D[1],
          I = Object(a.useState)(!1),
          R = Object(d.a)(I, 2),
          k = (R[0], R[1], Object(a.useState)(!1)),
          B = Object(d.a)(k, 2),
          T = (B[0], B[1], Object(O.f)());

        function L() {
          return Object(G.jsxs)(w.a, {
            variant: "body2",
            color: "textSecondary",
            align: "center",
            children: [
              "Copyright \xa9 ",
              Object(G.jsx)(fe.a, {
                color: "inherit",
                href: "https://main--agitated-mahavira-b37e00.netlify.app/",
                children: "Your Website",
              }),
              " ",
              new Date().getFullYear(),
              ".",
            ],
          });
        }
        var M = Object(m.a)(function (e) {
          return {
            paper: {
              marginTop: e.spacing(8),
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            },
            avatar: {
              margin: e.spacing(1),
              backgroundColor: e.palette.secondary.main,
            },
            form: { width: "100%", marginTop: e.spacing(1) },
            submit: { margin: e.spacing(3, 0, 2) },
          };
        });
        Object(a.useEffect)(
          function () {
            var e = JSON.parse(localStorage.getItem("userInfo"));
            e && (j(e.email), g(e.password), i(e.id));
          },
          [T]
        );
        var z = (function () {
            var e = Object(o.a)(
              l.a.mark(function e(t) {
                return l.a.wrap(function (e) {
                  for (;;)
                    switch ((e.prev = e.next)) {
                      case 0:
                        t.preventDefault(),
                          P && v
                            ? v === p
                              ? x.a
                                  .put(
                                    "".concat(U, "/change-password/").concat(n),
                                    { password: P },
                                    {
                                      headers: {
                                        "Content-Type": "application/json",
                                      },
                                    }
                                  )
                                  .then(
                                    alert(
                                      "Password Has been Updated!, You need to signIn Again!!"
                                    )
                                  )
                                  .then(function () {
                                    localStorage.removeItem("userInfo"),
                                      T.push("/login");
                                  })
                              : alert("Your Previous Password is Incorrect!!")
                            : alert("Please Fill All Entries");
                      case 2:
                      case "end":
                        return e.stop();
                    }
                }, e);
              })
            );
            return function (t) {
              return e.apply(this, arguments);
            };
          })(),
          W = M();
        return Object(G.jsx)(G.Fragment, {
          children: Object(G.jsxs)(S.a, {
            component: "main",
            maxWidth: "xs",
            children: [
              Object(G.jsx)(u.a, {}),
              Object(G.jsxs)("div", {
                className: W.paper,
                children: [
                  Object(G.jsx)("img", {
                    src: "".concat(U, "/image/logo.png"),
                    style: { width: 100, height: 100 },
                  }),
                  Object(G.jsx)(w.a, {
                    component: "h1",
                    variant: "h5",
                    children: "Update Your Password",
                  }),
                  Object(G.jsxs)("form", {
                    className: W.form,
                    noValidate: !0,
                    children: [
                      Object(G.jsx)(Pe.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        id: "email",
                        label: "Email Address",
                        name: "email",
                        autoComplete: "email",
                        autoFocus: !0,
                        value: r,
                      }),
                      Object(G.jsx)(Pe.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        name: "password",
                        label: "Add Previous Password",
                        type: "password",
                        onChange: function (e) {
                          N(e.target.value);
                        },
                      }),
                      Object(G.jsx)(Pe.a, {
                        variant: "outlined",
                        margin: "normal",
                        required: !0,
                        fullWidth: !0,
                        name: "password",
                        label: "Add New Password",
                        type: "password",
                        onChange: function (e) {
                          A(e.target.value);
                        },
                      }),
                      Object(G.jsx)(De.a, {
                        type: "submit",
                        fullWidth: !0,
                        variant: "contained",
                        color: "primary",
                        className: W.submit,
                        onClick: z,
                        children: "Update Password",
                      }),
                    ],
                  }),
                ],
              }),
              Object(G.jsx)(me.a, { mt: 8, children: Object(G.jsx)(L, {}) }),
            ],
          }),
        });
      }

      function et() {
        return Object(G.jsxs)(G.Fragment, {
          children: [
            Object(G.jsx)("div", {
              children: Object(G.jsx)(ze.Offline, {
                children: Object(G.jsx)(Se.a, {
                  variant: "danger",
                  children: "You are offline",
                }),
              }),
            }),
            Object(G.jsxs)(O.c, {
              children: [
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/add-booking",
                  children: Object(G.jsx)(te, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/",
                  children: Object(G.jsx)(Ce, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/all-bookings",
                  children: Object(G.jsx)(Oe, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/booking-preview/:id",
                  children: Object(G.jsx)(Le, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/agreement-preview/:id",
                  children: Object(G.jsx)(Me, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/installments-schedule/:id",
                  children: Object(G.jsx)(Fe, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/installments/:id",
                  children: Object(G.jsx)(_e, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/add-installment/:id/:regnum",
                  children: Object(G.jsx)(qe, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/installment-preview/:id",
                  children: Object(G.jsx)(Ke, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/update-booking/:id",
                  children: Object(G.jsx)(Ve, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/search-booking/",
                  children: Object(G.jsx)(Ze, {}),
                }),
                Object(G.jsx)(O.a, {
                  exact: !0,
                  path: "/change-password/",
                  children: Object(G.jsx)($e, {}),
                }),
              ],
            }),
          ],
        });
      }
      var tt = function () {
          return (
            Object(a.useEffect)(function () {
              localStorage.getItem("userInfo");
            }),
            Object(G.jsxs)(G.Fragment, {
              children: [
                Object(G.jsx)("div", {
                  children: Object(G.jsx)(ze.Offline, {
                    children: Object(G.jsx)(Se.a, {
                      variant: "danger",
                      children: "You are offline",
                    }),
                  }),
                }),
                Object(G.jsx)(et, {}),
                Object(G.jsx)(O.c, {
                  children: Object(G.jsx)(O.a, {
                    exact: !0,
                    path: "/login",
                    children: Object(G.jsx)(Ae, {}),
                  }),
                }),
              ],
            })
          );
        },
        nt = function (e) {
          e &&
            e instanceof Function &&
            n
              .e(3)
              .then(n.bind(null, 236))
              .then(function (t) {
                var n = t.getCLS,
                  a = t.getFID,
                  i = t.getFCP,
                  s = t.getLCP,
                  c = t.getTTFB;
                n(e), a(e), i(e), s(e), c(e);
              });
        };
      O.f, localStorage.getItem("userInfo");
      c.a.render(
        Object(G.jsx)(i.a.StrictMode, {
          children: Object(G.jsx)(ne.a, { children: Object(G.jsx)(tt, {}) }),
        }),
        document.getElementById("root")
      ),
        nt();
    },
    80: function (e, t, n) {},
  },
  [[177, 1, 2]],
]);
//# sourceMappingURL=main.1698941d.chunk.js.map
