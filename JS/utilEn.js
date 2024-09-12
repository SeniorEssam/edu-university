jQuery.easing['jswing'] = jQuery.easing['swing']; jQuery.extend(jQuery.easing, { def: 'easeOutQuad', swing: function (x, t, b, c, d) { return jQuery.easing[jQuery.easing.def](x, t, b, c, d) }, easeInQuad: function (x, t, b, c, d) { return c * (t /= d) * t + b }, easeOutQuad: function (x, t, b, c, d) { return -c * (t /= d) * (t - 2) + b }, easeInOutQuad: function (x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t + b; return -c / 2 * ((--t) * (t - 2) - 1) + b }, easeInCubic: function (x, t, b, c, d) { return c * (t /= d) * t * t + b }, easeOutCubic: function (x, t, b, c, d) { return c * ((t = t / d - 1) * t * t + 1) + b }, easeInOutCubic: function (x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t + b; return c / 2 * ((t -= 2) * t * t + 2) + b }, easeInQuart: function (x, t, b, c, d) { return c * (t /= d) * t * t * t + b }, easeOutQuart: function (x, t, b, c, d) { return -c * ((t = t / d - 1) * t * t * t - 1) + b }, easeInOutQuart: function (x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b; return -c / 2 * ((t -= 2) * t * t * t - 2) + b }, easeInQuint: function (x, t, b, c, d) { return c * (t /= d) * t * t * t * t + b }, easeOutQuint: function (x, t, b, c, d) { return c * ((t = t / d - 1) * t * t * t * t + 1) + b }, easeInOutQuint: function (x, t, b, c, d) { if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b; return c / 2 * ((t -= 2) * t * t * t * t + 2) + b }, easeInSine: function (x, t, b, c, d) { return -c * Math.cos(t / d * (Math.PI / 2)) + c + b }, easeOutSine: function (x, t, b, c, d) { return c * Math.sin(t / d * (Math.PI / 2)) + b }, easeInOutSine: function (x, t, b, c, d) { return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b }, easeInExpo: function (x, t, b, c, d) { return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b }, easeOutExpo: function (x, t, b, c, d) { return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b }, easeInOutExpo: function (x, t, b, c, d) { if (t == 0) return b; if (t == d) return b + c; if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b; return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b }, easeInCirc: function (x, t, b, c, d) { return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b }, easeOutCirc: function (x, t, b, c, d) { return c * Math.sqrt(1 - (t = t / d - 1) * t) + b }, easeInOutCirc: function (x, t, b, c, d) { if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b; return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b }, easeInElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b }, easeOutElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d) == 1) return b + c; if (!p) p = d * .3; if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b }, easeInOutElastic: function (x, t, b, c, d) { var s = 1.70158; var p = 0; var a = c; if (t == 0) return b; if ((t /= d / 2) == 2) return b + c; if (!p) p = d * (.3 * 1.5); if (a < Math.abs(c)) { a = c; var s = p / 4 } else var s = p / (2 * Math.PI) * Math.asin(c / a); if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b; return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b }, easeInBack: function (x, t, b, c, d, s) { if (s == undefined) s = 1.70158; return c * (t /= d) * t * ((s + 1) * t - s) + b }, easeOutBack: function (x, t, b, c, d, s) { if (s == undefined) s = 1.70158; return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b }, easeInOutBack: function (x, t, b, c, d, s) { if (s == undefined) s = 1.70158; if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b; return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b }, easeInBounce: function (x, t, b, c, d) { return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b }, easeOutBounce: function (x, t, b, c, d) { if ((t /= d) < (1 / 2.75)) { return c * (7.5625 * t * t) + b } else if (t < (2 / 2.75)) { return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b } else if (t < (2.5 / 2.75)) { return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b } else { return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b } }, easeInOutBounce: function (x, t, b, c, d) { if (t < d / 2) return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b; return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b } }); jQuery.extend(jQuery.easing, { easeIn: function (x, t, b, c, d) { return jQuery.easing.easeInQuad(x, t, b, c, d) }, easeOut: function (x, t, b, c, d) { return jQuery.easing.easeOutQuad(x, t, b, c, d) }, easeInOut: function (x, t, b, c, d) { return jQuery.easing.easeInOutQuad(x, t, b, c, d) }, expoin: function (x, t, b, c, d) { return jQuery.easing.easeInExpo(x, t, b, c, d) }, expoout: function (x, t, b, c, d) { return jQuery.easing.easeOutExpo(x, t, b, c, d) }, expoinout: function (x, t, b, c, d) { return jQuery.easing.easeInOutExpo(x, t, b, c, d) }, bouncein: function (x, t, b, c, d) { return jQuery.easing.easeInBounce(x, t, b, c, d) }, bounceout: function (x, t, b, c, d) { return jQuery.easing.easeOutBounce(x, t, b, c, d) }, bounceinout: function (x, t, b, c, d) { return jQuery.easing.easeInOutBounce(x, t, b, c, d) }, elasin: function (x, t, b, c, d) { return jQuery.easing.easeInElastic(x, t, b, c, d) }, elasout: function (x, t, b, c, d) { return jQuery.easing.easeOutElastic(x, t, b, c, d) }, elasinout: function (x, t, b, c, d) { return jQuery.easing.easeInOutElastic(x, t, b, c, d) }, backin: function (x, t, b, c, d) { return jQuery.easing.easeInBack(x, t, b, c, d) }, backout: function (x, t, b, c, d) { return jQuery.easing.easeOutBack(x, t, b, c, d) }, backinout: function (x, t, b, c, d) { return jQuery.easing.easeInOutBack(x, t, b, c, d) } });

$(".hamNav, .dropMenu .menu").html($("nav .menu").html());
$(".hamNav").find(".parentMenu").find("span").on("click", function () {
    if (!$(this).hasClass("parentMenuClicked")) {
        $(".parentMenuClicked").parent().find("ul").slideUp(300, "easeOutQuad");
        $(".parentMenuClicked").removeClass("parentMenuClicked");
    }
    $(this).toggleClass("parentMenuClicked").parent().find("ul").slideToggle(300, "easeInOutQuad");
});
$("#mask").on("click", function () { $(".ham").click() });
$('.ham').click(function () {
    $(this)[0].classList.toggle('active');
    $('html,body').animate({ scrollTop: 0 }, 200);

    if (!$(".hamMenu").hasClass("hamMenuShow")) {
        if ($(".dropList").hasClass("parentMenuClicked")) {
            $(".parentMenuClicked").parent().find("ul").slideUp();
            $(".parentMenuClicked").removeClass("parentMenuClicked");
        }

        $(".ham,.hamDiamod").css("position", "fixed");
    }
    else {
        $(".ham,.hamDiamod").css("position", "absolute");
    }

    $(".hamMenu").toggleClass("hamMenuShow hamMenuBefore");
    $(".hamTop").toggleClass("hamTopShow");
    $(".hamDiamod, .nefDiamond").toggleClass("rotate45");
    $(".hamLogo").toggleClass("hamLogoShow");
    $(".hamLogoText").toggleClass("hamLogoTextShow");
    $(".hamEnglish").toggleClass("hamEnglishShow");
    $(".hamNav").toggleClass("hamNavShow");
});
var curr, hamVisible;
$(window).scroll(function () {
    curr = $(this).scrollTop();

    hamVisible = ($(".ham").css('display') == "none") ? false : true;

    if (curr > 160) {
        if (hamVisible) {
            $(".hamCirc").addClass("maxHamCirc");
            setTimeout(function () { $(".ham").css("position", "fixed"); }, 500);
        }
        else {
            $(".dropMenu").addClass("showDropMenu");
        }
    }
    else {
        if (hamVisible) {
            if ($(".hamMenu").css("opacity") == 0) $(".ham").css("position", "absolute");
            $(".hamCirc").removeClass("maxHamCirc");
        }
        else {
            $(".dropMenu").removeClass("showDropMenu");
        }
    }

});

$(".footerLinksDiv").each(function () {
    $(this).find("h5").click(function () {
        if ($(this).css("padding-right") === "10px") {
            $(this).toggleClass("upArrow");
            $(this).parent().find("ul").toggle(400);
        }
    });
});



/**
 * Material-scrollTop
 *
 * Author: Bartholomej
 * Website: https://github.com/bartholomej/material-scrollTop
 * Docs: https://github.com/bartholomej/material-scrollTop
 * Repo: https://github.com/bartholomej/material-scrollTop
 * Issues: https://github.com/bartholomej/material-scrollTop/issues
 */
(function ($) {
    function mScrollTop(element, settings) {
        var _ = this;
        var breakpoint;
        var scrollTo = 0;
        _.btnClass = '.material-scrolltop';
        _.revealClass = 'reveal';
        _.btnElement = $(_.btnClass);
        _.initial = {
            revealElement: 'body',
            revealPosition: 'top',
            padding: 0,
            duration: 600,
            easing: 'swing',
            onScrollEnd: null
        };
        _.options = $.extend({}, _.initial, settings);
        _.revealElement = $(_.options.revealElement);
        breakpoint =
            _.options.revealPosition !== 'bottom'
                ? _.revealElement.offset().top
                : _.revealElement.offset().top + _.revealElement.height();
        scrollTo = element.offsetTop + _.options.padding;
        $(document).scroll(function () {
            if (breakpoint < $(document).scrollTop()) {
                _.btnElement.addClass(_.revealClass);
            }
            else {
                _.btnElement.removeClass(_.revealClass);
            }
        });
        _.btnElement.click(function () {
            var trigger = true;
            $('html, body').animate({
                scrollTop: scrollTo
            }, _.options.duration, _.options.easing, function () {
                if (trigger) {
                    // Fix callback triggering twice on chromium
                    trigger = false;
                    var callback = _.options.onScrollEnd;
                    if (typeof callback === 'function') {
                        callback();
                    }
                }
            });
            return false;
        });
    }
    $.fn.materialScrollTop = function () {
        var _ = this;
        var opt = arguments[0];
        var l = _.length;
        var i = 0;
        if (typeof opt == 'object' || typeof opt == 'undefined') {
            _[i].materialScrollTop = new mScrollTop(_[i], opt);
        }
        return _;
    };
})(jQuery);

$(function () {
    $('body').append('<button class="material-scrolltop" type="button"></button>').materialScrollTop();

});
//End of scroll to top


//SVG
/*!
 * @copyright Copyright (c) 2016 IcoMoon.io
 * @license   Licensed under MIT license
 *            See https://github.com/Keyamoon/svgxuse
 * @version   1.1.15
 */
(function () {
    if (window && window.addEventListener) {
        var b = Object.create(null), m, h, d = function () { clearTimeout(h); h = setTimeout(m, 100) }, q = function () { }, r = function () {
            var b; window.addEventListener("resize", d, !1); window.addEventListener("orientationchange", d, !1); window.MutationObserver ? (b = new MutationObserver(d), b.observe(document.documentElement, { childList: !0, subtree: !0, attributes: !0 }), q = function () {
                try {
                    b.disconnect(), window.removeEventListener("resize", d, !1), window.removeEventListener("orientationchange", d,
                        !1)
                } catch (p) { }
            }) : (document.documentElement.addEventListener("DOMSubtreeModified", d, !1), q = function () { document.documentElement.removeEventListener("DOMSubtreeModified", d, !1); window.removeEventListener("resize", d, !1); window.removeEventListener("orientationchange", d, !1) })
        }; m = function () {
            function d() { --k; 0 === k && r() } function p(a) { return function () { !0 !== b[a.base] && a.useEl.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", "#" + a.hash) } } function m(a) {
                return function () {
                    var c = document.body, b = document.createElement("x");
                    a.onload = null; b.innerHTML = a.responseText; if (b = b.getElementsByTagName("svg")[0]) b.style.position = "absolute", b.style.width = 0, b.style.height = 0, b.style.overflow = "hidden", c.insertBefore(b, c.firstChild); d()
                }
            } function h(a) { return function () { a.onerror = null; a.ontimeout = null; d() } } var c, e, f, g, n, k = 0, a, l; window.XMLHttpRequest && (n = new XMLHttpRequest, n = void 0 !== n.withCredentials ? XMLHttpRequest : XDomainRequest || void 0); if (void 0 !== n) {
                q(); l = document.getElementsByTagName("use"); for (g = 0; g < l.length; g += 1) {
                    try { e = l[g].getBoundingClientRect() } catch (t) {
                        e =
                            !1
                    } f = l[g].getAttributeNS("http://www.w3.org/1999/xlink", "href").split("#"); c = f[0]; f = f[1]; a = e && 0 === e.left && 0 === e.right && 0 === e.top && 0 === e.bottom; e && 0 === e.width && 0 === e.height && !a ? (c.length || !f || document.getElementById(f) || (c = ""), c.length && (a = b[c], !0 !== a && setTimeout(p({ useEl: l[g], base: c, hash: f }), 0), void 0 === a && (a = new n, b[c] = a, a.onload = m(a), a.onerror = h(a), a.ontimeout = h(a), a.open("GET", c), a.send(), k += 1))) : a || (void 0 === b[c] ? b[c] = !0 : b[c].onload && (b[c].abort(), b[c].onload = void 0, b[c] = !0))
                } l = ""; k +=
                    1; d()
            }
        }; window.addEventListener("load", function p() { window.removeEventListener("load", p, !1); h = setTimeout(m, 0) }, !1)
    }
})();

//End of SVG