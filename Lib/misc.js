window._wpemojiSettings = {
    "baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/72x72\/",
    "ext": ".png",
    "svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/12.0.0-1\/svg\/",
    "svgExt": ".svg",
    "source": {
        "concatemoji": "https:\/\/jevelin.shufflehound.com\/startup-creative\/wp-includes\/js\/wp-emoji-release.min.js?ver=5.4.4"
    }
};
/*! This file is auto-generated */
! function(e, a, t) {
    var r, n, o, i, p = a.createElement("canvas"),
        s = p.getContext && p.getContext("2d");

    function c(e, t) {
        var a = String.fromCharCode;
        s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, e), 0, 0);
        var r = p.toDataURL();
        return s.clearRect(0, 0, p.width, p.height), s.fillText(a.apply(this, t), 0, 0), r === p.toDataURL()
    }

    function l(e) {
        if (!s || !s.fillText) return !1;
        switch (s.textBaseline = "top", s.font = "600 32px Arial", e) {
            case "flag":
                return !c([127987, 65039, 8205, 9895, 65039], [127987, 65039, 8203, 9895, 65039]) && (!c([55356, 56826, 55356, 56819], [55356, 56826, 8203, 55356, 56819]) && !c([55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447], [55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447]));
            case "emoji":
                return !c([55357, 56424, 55356, 57342, 8205, 55358, 56605, 8205, 55357, 56424, 55356, 57340], [55357, 56424, 55356, 57342, 8203, 55358, 56605, 8203, 55357, 56424, 55356, 57340])
        }
        return !1
    }

    function d(e) {
        var t = a.createElement("script");
        t.src = e, t.defer = t.type = "text/javascript", a.getElementsByTagName("head")[0].appendChild(t)
    }
    for (i = Array("flag", "emoji"), t.supports = {
            everything: !0,
            everythingExceptFlag: !0
        }, o = 0; o < i.length; o++) t.supports[i[o]] = l(i[o]), t.supports.everything = t.supports.everything && t.supports[i[o]], "flag" !== i[o] && (t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && t.supports[i[o]]);
    t.supports.everythingExceptFlag = t.supports.everythingExceptFlag && !t.supports.flag, t.DOMReady = !1, t.readyCallback = function() {
        t.DOMReady = !0
    }, t.supports.everything || (n = function() {
        t.readyCallback()
    }, a.addEventListener ? (a.addEventListener("DOMContentLoaded", n, !1), e.addEventListener("load", n, !1)) : (e.attachEvent("onload", n), a.attachEvent("onreadystatechange", function() {
        "complete" === a.readyState && t.readyCallback()
    })), (r = t.source || {}).concatemoji ? d(r.concatemoji) : r.wpemoji && r.twemoji && (d(r.twemoji), d(r.wpemoji)))
}(window, document, window._wpemojiSettings);

// -----------------------

function setREVStartSize(e) {
    //window.requestAnimationFrame(function() {				 
    window.RSIW = window.RSIW === undefined ? window.innerWidth : window.RSIW;
    window.RSIH = window.RSIH === undefined ? window.innerHeight : window.RSIH;
    try {
        var pw = document.getElementById(e.c).parentNode.offsetWidth,
            newh;
        pw = pw === 0 || isNaN(pw) ? window.RSIW : pw;
        e.tabw = e.tabw === undefined ? 0 : parseInt(e.tabw);
        e.thumbw = e.thumbw === undefined ? 0 : parseInt(e.thumbw);
        e.tabh = e.tabh === undefined ? 0 : parseInt(e.tabh);
        e.thumbh = e.thumbh === undefined ? 0 : parseInt(e.thumbh);
        e.tabhide = e.tabhide === undefined ? 0 : parseInt(e.tabhide);
        e.thumbhide = e.thumbhide === undefined ? 0 : parseInt(e.thumbhide);
        e.mh = e.mh === undefined || e.mh == "" || e.mh === "auto" ? 0 : parseInt(e.mh, 0);
        if (e.layout === "fullscreen" || e.l === "fullscreen")
            newh = Math.max(e.mh, window.RSIH);
        else {
            e.gw = Array.isArray(e.gw) ? e.gw : [e.gw];
            for (var i in e.rl)
                if (e.gw[i] === undefined || e.gw[i] === 0) e.gw[i] = e.gw[i - 1];
            e.gh = e.el === undefined || e.el === "" || (Array.isArray(e.el) && e.el.length == 0) ? e.gh : e.el;
            e.gh = Array.isArray(e.gh) ? e.gh : [e.gh];
            for (var i in e.rl)
                if (e.gh[i] === undefined || e.gh[i] === 0) e.gh[i] = e.gh[i - 1];

            var nl = new Array(e.rl.length),
                ix = 0,
                sl;
            e.tabw = e.tabhide >= pw ? 0 : e.tabw;
            e.thumbw = e.thumbhide >= pw ? 0 : e.thumbw;
            e.tabh = e.tabhide >= pw ? 0 : e.tabh;
            e.thumbh = e.thumbhide >= pw ? 0 : e.thumbh;
            for (var i in e.rl) nl[i] = e.rl[i] < window.RSIW ? 0 : e.rl[i];
            sl = nl[0];
            for (var i in nl)
                if (sl > nl[i] && nl[i] > 0) {
                    sl = nl[i];
                    ix = i;
                }
            var m = pw > (e.gw[ix] + e.tabw + e.thumbw) ? 1 : (pw - (e.tabw + e.thumbw)) / (e.gw[ix]);
            newh = (e.gh[ix] * m) + (e.tabh + e.thumbh);
        }
        if (window.rs_init_css === undefined) window.rs_init_css = document.head.appendChild(document.createElement("style"));
        document.getElementById(e.c).height = newh + "px";
        window.rs_init_css.innerHTML += "#" + e.c + "_wrapper { height: " + newh + "px }";
    } catch (e) {}
    //});
};

// ----------------------------

setREVStartSize({
    c: 'rev_slider_1_1',
    rl: [1240, 1024, 778, 480],
    el: [1100, 768, 960, 720],
    gw: [1240, 1024, 778, 480],
    gh: [1100, 768, 960, 720],
    type: 'hero',
    justify: '',
    layout: 'fullwidth',
    mh: "0"
});
var revapi1,
    tpj;
jQuery(function() {
    tpj = jQuery;
    revapi1 = tpj("#rev_slider_1_1")
    if (revapi1 == undefined || revapi1.revolution == undefined) {
        revslider_showDoubleJqueryError("rev_slider_1_1");
    } else {
        revapi1.revolution({
            sliderType: "hero",
            sliderLayout: "fullwidth",
            visibilityLevels: "1240,1024,778,480",
            gridwidth: "1240,1024,778,480",
            gridheight: "1100,768,960,720",
            spinner: "spinner0",
            perspectiveType: "local",
            keepBPHeight: true,
            editorheight: "1100,768,960,720",
            responsiveLevels: "1240,1024,778,480",
            disableProgressBar: "on",
            navigation: {
                onHoverStop: false
            },
            fallbacks: {
                allowHTML5AutoPlayOnAndroid: true
            },
        });
    }

});

// ----------------------

jQuery(document).ready(function($) {



    function jevelin_settings() {
        if ($(window).width() < 600) {
            $('.sh-settings').hide();
        } else {
            $('.sh-settings').show();
        }
    }
    jevelin_settings();

    $(window).resize(function() {
        clearTimeout(window.resizedFinished2);
        window.resizedFinished2 = setTimeout(function() {
            jevelin_settings();
        }, 500);
    });

    $('.sh-settings-hide').on('click', function() {
        $('.sh-settings').toggleClass('sh-settings-active');
    });

    $(document).keyup(function(e) {
        if (e.keyCode == 27) {
            if ($('.sh-settings').hasClass('sh-settings-active')) {
                $('.sh-settings').removeClass('sh-settings-active');
            }
        }
    });

    jQuery('.form-submit #submit').on('click', function(event) {
        alert('This feature is disabled in our demo site. Sorry for any inconvenience.');
        event.preventDefault()
        event.stopPropagation()
        return false;
    });

});

jQuery(document).ready(function($) {
    "use strict";

    $(".sh-page-loader").fadeOut(500);
    $("body").css('overflow-y', 'visible').css('overflow-x', 'hidden');

    $(window).bind('beforeunload', function(e) {
        $('.sh-page-loader').fadeIn();
    });

});

// -------------------------

jQuery(document).ready(function($) {
    /*if( $(window).width() > 1000) {
        if( $.cookie( 'gillion.sidebartest', { path: '', domain: 'jevelin.shufflehound.com' } ) == 'opened' ) {
            $('.sh-side-demos').addClass('open');
        } else {
            $('.sh-side-demos').removeClass('open');
        }
    }*/

    $('.sh-side-options-item-trigger-demos').on('click', function() {
        $('.sh-side-options').css('transition', '0.3s all ease-in-out');

        if ($('.sh-side-options').hasClass('open')) {
            $('.sh-side-options').removeClass('open');
        } else {
            $('.sh-side-options .sh-side-demos-image').each(function() {
                $(this).attr('src', $(this).attr('data-src'));
            });
            $('.sh-side-options').addClass('open');
        }
    });

    $('.sh-side-demos-container-close').on('click', function() {
        $('.sh-side-options').css('transition', '0.3s all ease-in-out');
        $('.sh-side-options').removeClass('open');
    });
});

// ----------------------

var c = document.body.className;
c = c.replace(/woocommerce-no-js/, 'woocommerce-js');
document.body.className = c;

// -----------------------

if (typeof revslider_showDoubleJqueryError === "undefined") {
    function revslider_showDoubleJqueryError(sliderID) {
        var err = "<div class='rs_error_message_box'>";
        err += "<div class='rs_error_message_oops'>Oops...</div>";
        err += "<div class='rs_error_message_content'>";
        err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
        err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' -> 'Advanced' -> 'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
        err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
        err += "</div>";
        err += "</div>";
        var slider = document.getElementById(sliderID);
        slider.innerHTML = err;
        slider.style.display = "block";
    }
}

//----------------------
/* <![CDATA[ */
var wpcf7 = {
    "apiSettings": {
        "root": "https:\/\/jevelin.shufflehound.com\/startup-creative\/wp-json\/contact-form-7\/v1",
        "namespace": "contact-form-7\/v1"
    }
};
/* ]]> */

/* <![CDATA[ */
var woocommerce_params = {
    "ajax_url": "\/startup-creative\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/startup-creative\/?wc-ajax=%%endpoint%%"
};
/* ]]> */

/* <![CDATA[ */
var wc_cart_fragments_params = {
    "ajax_url": "\/startup-creative\/wp-admin\/admin-ajax.php",
    "wc_ajax_url": "\/startup-creative\/?wc-ajax=%%endpoint%%",
    "cart_hash_key": "wc_cart_hash_30d4a56f39f116b5d2ee99559bbe713a",
    "fragment_name": "wc_fragments_30d4a56f39f116b5d2ee99559bbe713a",
    "request_timeout": "5000"
};
/* ]]> */

jQuery(document).ready(function($) {
    "use strict";
});

// ---------------