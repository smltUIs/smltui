!function (e) {
  function n(t) {
    if (o[t]) return o[t].exports;
    var l = o[t] = {exports: {}, id: t, loaded: !1};
    return e[t].call(l.exports, l, l.exports, n), l.loaded = !0, l.exports
  }

  var o = {};
  n.m = e, n.c = o, n.p = "http://localhost:3456/static/", n(0)
}({
  0: function (e, n, o) {
    e.exports = o(1266)
  }, 1266: function (e, n) {
    "use strict";
    !function () {
      var e = function () {
        return !("opacity" in document.documentElement.style)
      }(), n = {
        height: function () {
          return ("innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - 80
        }()
      }, o = {
        inout: function (e) {
          return (e *= 2) < 1 ? .5 * e * e * e : .5 * ((e -= 2) * e * e + 2)
        }
      }, t = {
        scroll: function () {
          return "requestAnimationFrame" in window ? function (e) {
            var n = e.ele, t = e.duration, l = e.offset, i = e.callback, r = new Date, c = $(n), s = c.scrollTop(),
              a = s, u = Math.abs(l - a), d = u, w = s < l ? 1 : -1, f = function e() {
                if (u > 0) {
                  var n = new Date, f = o.inout((n - r) / t);
                  a = w * f * d + s, u = Math.abs(l - a) << 0 || (a = l) && 0, c.scrollTop(a), requestAnimationFrame(e)
                } else i()
              };
            requestAnimationFrame(f)
          } : function (e) {
            e.callback()
          }
        }()
      }, l = {scrolling: !1}, i = {
        handleScroll: e ? function () {
        } : function (e) {
          var o = $(window).scrollTop();
          o <= .1 * n.height && !l.scrolling ? ($(".zanui-nav").addClass("scrolled"), i.disableScroll(), l.scrolling = !0, t.scroll({
            ele: window,
            duration: 1200,
            offset: n.height,
            callback: function () {
              l.scrolling = !1, i.enableScroll()
            }
          })) : o < n.height && !l.scrolling && ($(".zanui-nav").removeClass("scrolled"), i.disableScroll(), l.scrolling = !0, t.scroll({
            ele: window,
            duration: 1200,
            offset: 0,
            callback: function () {
              l.scrolling = !1, i.enableScroll()
            }
          }))
        }, listenOffsetY: function () {
          var o = $(".items-img"), t = o.length, l = !1;
          return e ? function () {
            var e = document.querySelectorAll(".zanui-nav")[0], n = "", o = document.documentElement, t = null;
            return function () {
              o.scrollTop >= o.clientHeight - 80 ? (n = e.className, t && clearTimeout(t), t = setTimeout(function () {
                /\s+scroleld/.test(n) || (e.className = n + " scrolled"), t = null
              }, 100)) : (n = e.className, t && clearTimeout(t), t = setTimeout(function () {
                /\s+scrolled/.test(n) && (e.className = n.replace(/\s+scrolled/, "")), t = null
              }, 100))
            }
          }() : function () {
            l ? $(window).off("scroll resize", i.listenOffsetY) : o.each(function (e) {
              n.height > o[e].getBoundingClientRect().top && ($(this).addClass("shown"), l = e === t)
            })
          }
        }(), preventDefault: function (e) {
          e = e || window.event, e.preventDefault && e.preventDefault(), e.returnValue = !1
        }, disableScroll: function () {
          window.addEventListener && window.addEventListener("DOMMouseScroll", i.preventDefault, !1), window.onwheel = i.preventDefault, window.onmousewheel = document.onmousewheel = i.preventDefault, window.ontouchmove = i.preventDefault, window.ontouchstart = i.preventDefault, document.onkeydown = i.preventDefaultForScrollKeys
        }, enableScroll: function () {
          window.removeEventListener && window.removeEventListener("DOMMouseScroll", i.preventDefault, !1), window.onmousewheel = document.onmousewheel = null, window.onwheel = null, window.ontouchstart = null, window.ontouchmove = null, document.onkeydown = null
        }, preventDefaultForScrollKeys: function (e) {
          if (e.keyCode) return e.preventDefault(), !1
        }, handleResize: function () {
          n.height = ("innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight) - 80
        }, handleInit: function () {
          var n, o = "";
          e ? (n = document.querySelectorAll(".zanui-nav")[0], o = n.className, document.documentElement.scrollTop ? n.className = o + " scrolled" : n.className = o.replace(/\s+scrolled/, "")) : $(window).scrollTop() ? $(".zanui-nav").addClass("scrolled") : $(".zanui-nav").removeClass("scrolled"), window.attachEvent && !window.addEventListener && $(".first-screen").height($(window).height() + "px")
        }, handlePageDown: function () {
          $(window).scrollTop(1)
        }, handleMouseEnter: function (e) {
          var n = e.target, o = n.className.split(" ")[1], t = n.parentElement, l = $(t).siblings("." + o).clone(!0);
          t.append($(l).get(0))
        }, handleMouseLeave: function (e) {
          for (var n, o = e.target, t = o.parentElement, l = t.getElementsByClassName("item-row"), n = 0; n < l.length; n++) t.removeChild(l[n])
        }
      };
      $(document).on("scroll touchstart", i.handleScroll), $(window).on("resize", i.handleResize), $(document).on("scroll", i.listenOffsetY), $(window).on("resize", i.listenOffsetY), $(".chervon").on("click", i.handlePageDown), $(".item-ghost").each(function (e, n) {
        $(this).on("mouseenter", i.handleMouseEnter), $(this).on("mouseleave", i.handleMouseLeave)
      }), $(".qrcode").hover(function () {
        $(".qrcode-popover").toggleClass("qrcode-active")
      }), $(".zanui-qrcode").hover(function () {
        $(".zanui-qrcode-popover").toggleClass("qrcode-active")
      }), $(document).ready(i.handleInit), e && window.attachEvent("onscroll", i.listenOffsetY)
    }()
  }
});
