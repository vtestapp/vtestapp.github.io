var link = "https://example.com";

(this.webpackJsonpsimple_vkui = this.webpackJsonpsimple_vkui || []).push([
    [0], {
        82: function(e, n, t) {
            e.exports = t(95)
        },
        95: function(e, n, t) {
            "use strict";
            t.r(n);
            var o = t(0),
                i = t.n(o),
                r = t(15),
                a = t.n(r),
                c = t(11),
                s = t.n(c),
                l = t(12);
            t(94);
            var u = function() {
                    return i.a.createElement(l.c, {
                        activePanel: "main"
                    }, i.a.createElement(l.b, {
                        id: "main",
                        separator: !1
                    }, i.a.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            flexDirection: "column",
                            justifyContent: "center",
                            height: "80vh"
                        }
                    }, i.a.createElement("img", {
                        src: "image.png",
                        style: {
                            width: "80vw",
                            marginBottom: 10,
                            borderRadius: 10
                        }
                    }), i.a.createElement(l.a, {
                        size: "xl",
                        onClick: function() {
                            window.open(link)
                        },
                        style: {
                            width: "80vw"
                        }
                    }, "Включить"))))
                }

            function h(e, n) {}
            s.a.send("VKWebAppInit", {}), a.a.render(i.a.createElement(u, null), document.getElementById("root"))
        }
    },
    [
        [82, 1, 2]
    ]
]);