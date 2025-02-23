/*!
 * Social Gallery Lite - The Free Version of The Ultimate WordPress Social Lightbox
 * http://www.socialGalleryplugin.com
 * V2.1
 *
 * Copyright 2012, Mike Stott, Epic Plugins
 *
 * Date: 12/01/2012 */
var sgCurrind = -1;
var sgpDisFire = false;
var sgpDiR = 0;
var sgpTwR = 0;
var sgpFbR = 0;
var sgpPinR = 0;
var sgpGogR = 0;
var sgpSuR = 0;
var sgpTumR = 0;
var sgp8cf3c = "#nothinghere";
var sgp2883f7a = false;
var sgpDomW = 0;
var sgpDomH = 0;
var sgpa33b = false;
var sgpe61f5a2 = ".noSocialGallery, .noLightBox, .pin-it-button, .jig-customLink";
var sgptheme = [];
switch (parseInt(window.sgp_config.sgp_selT)) {
    case 1:
        sgp8cf3c = ".entry a:has(img), .entry-content a:has(img), .entry_content a:has(img), .content a:has(img), #content a:has(img)";
        break;
    case 10:
        sgp8cf3c = ".post a:has(img), .post-content a:has(img), .postcontent a:has(img), .post-data a:has(img), .single-post a:has(img)";
        break;
    case 2:
        sgp8cf3c = window.sgp_config.sgp_sel;
        break;
    case 3:
        sgp8cf3c = ".page a:has(img), .page-content a:has(img), .page-data a:has(img), .pagecontent a:has(img)";
        break;
    case 4:
        sgp8cf3c = ".entry a:has(img), .entry-content a:has(img), .entry_content a:has(img), .entry-image a:has(img), .content a:has(img), #content a:has(img), #contentwide  a:has(img), article a:has(img), .page a:has(img), .page-content a:has(img), .post a:has(img), .post-content a:has(img), .post-data a:has(img), .postcontent a:has(img), .gallery a:has(img), .gallery-item a:has(img), .blog-content a:has(img), .thumb a:has(img), .single-post a:has(img), .block-content a:has(img), .gallery-icon";
        break;
    default:
        sgp8cf3c = ".entry a:has(img), .entry-content a:has(img), .entry_content a:has(img), .content a:has(img), #content a:has(img)";
        break
}
if (!jQuery.isFunction(window.sgp4ebd1c2)) {
    function sgp4ebd1c2(a) {
        return typeof a === "number" && a % 1 == 0
    }
}
if (!jQuery.isFunction(jQuery.fn.wExists)) {
    jQuery.fn.wExists = function() {
        return this.length > 0
    }
}
jQuery(window).load(function(b) {
    sgpf2473d()
});

function sgp7f08() {
    jQuery("#sgPluginBg").animate({
        opacity: window.sgp_config.sgp_bgo
    }, 300, "linear");
    jQuery("#sgPluginBox").animate({
        opacity: "1.00"
    }, 300, "linear");
    jQuery("#sgPluginBg, #sgPluginBox").css("display", "block")
}
jQuery(document).ready(function(b) {
    jQuery("body").append('<div id="sgPluginBg"></div><div id="sgPluginBox"><div id="sgCont"></div><div id="sgSide"><div id="sgSideWrap"></div></div><div id="sgPluginBoxClose">x</div></div><div id="sgPluginLoader"></div><div id="sgDisqusHold" style="display:none"><div id="disqus_thread"></div></div>');
    if (window.sgp_config.sgp_bg != "" && window.sgp_config.sgp_bg != "000000") {
        jQuery("#sgPluginBg").css("background-color", "#" + window.sgp_config.sgp_bg)
    }
    if (window.sgp_config.sgp_bgo != "") {
        jQuery("#sgPluginBg").css("opacity", window.sgp_config.sgp_bgo)
    }
    var e = +new Date();
    sgpfca311().unbind("click").click(function(g) {
        g.preventDefault();
        if (!window.sgpa33b) {
            var h = g.target.parentNode;
            var a = jQuery(this).attr("href");
            if (typeof a != "undefined" && a != "") {
                window.sgpa33b = true;
                var l = jQuery("img", this).attr("title");
                var c = jQuery(".jig-caption-title", this).html();
                if ((c != "" || typeof c != "undefined") && (l == "" || typeof l === "undefined")) {
                    l = c
                }
                var d = parseInt(sgpfca311().index(this)) + 1;
                window.sgCurrind = d;
                if (a != "") {
                    sgp43a017();
                    jQuery("#sgPluginLoader").html('<img src="' + a + '" title="' + l + '" alt="" class="sgpI" id="sgpILoading" />')
                }
                jQuery("#sgPluginLoader img").unbind("load").load(function(i) {
                    if (jQuery("#sgpILoading").wExists()) {
                        if (document.getElementById("sgpILoading").width > 0) {
                            window.sgpDomW = document.getElementById("sgpILoading").width
                        }
                        if (document.getElementById("sgpILoading").height > 0) {
                            window.sgpDomH = document.getElementById("sgpILoading").height
                        }
                    }
                    jQuery("#sgCont").html("");
                    if (jQuery("#sgPluginLoader img").attr("title") == "undefined") {
                        jQuery("#sgPluginLoader img").removeAttr("title")
                    }
                    jQuery("#sgPluginLoader img").appendTo("#sgCont");
                    sgpcb12c();
                    if (sgpfca311().length > 1) {
                        sgp67a19a6()
                    }
                    sgp1d7a(d);
                    sgpde65()
                }).bind("error", function(i) {
                    jQuery(h).addClass("noSocialGallery").unbind("click");
                    sgp1915c()
                });
                sgp7f08();
                sgp520(d);
                g.preventDefault();
                window.sgpa33b = false
            } else {
                jQuery(this).addClass("noSocialGallery")
            }
        }
    });
    var f = +new Date();
    jQuery("#sgPluginBoxClose").click(function() {
        sgp1915c()
    });
    jQuery("#sgPluginBg").click(function() {
        sgp1915c()
    });
    jQuery(window).resize(function() {
        if (jQuery("#sgPluginBg").css("display") == "block") {
            sgpcb12c();
            sgpde65()
        }
    });
    sgpfde6955()
});

function sgp1d7a(d) {
    if (window.sgp_config.sgp_bb == "1") {
        var c = sgp35fa7e7(d, true);
        var a = document.title;
        if (a == "undefined" || a == "null" || typeof a == "undefined") {
            var a = ""
        }
        var f = '<div id="sgBaseBarBg"></div><div id="sgBaseBar">' + a + "</div>";
        jQuery("#sgCont").append(f);
        jQuery("#sgCont").mouseenter(function() {
            jQuery("#sgBaseBarBg").fadeIn(100);
            jQuery("#sgBaseBar").fadeIn(100)
        }).mouseleave(function() {
            jQuery("#sgBaseBarBg").fadeOut(100);
            jQuery("#sgBaseBar").fadeOut(100)
        });
        jQuery("#sgBaseBarBg").fadeIn(100);
        jQuery("#sgBaseBar").fadeIn(100)
    }
}

function sgp35fa7e7(a, b) {
    var d = jQuery("#sgCont img.sgpI").attr("src");
    if (d == "" || typeof d === "undefined" || d == "undefined") {
        if (jQuery("#sgPluginLoader img").attr("src") != "") {
            d = jQuery("#sgPluginLoader img").attr("src")
        }
    }
    return d
}

function sgpd94a795() {
    return false
}

function sgp520(l) {
    var h = sgp35fa7e7(l, false);
    jQuery("#sgSideWrap").html("");
    if (typeof h != undefined && h != "") {
        var f = h
    } else {
        var f = sgp5ad6f()
    }
    var e = "";
    if (window.sgp_config.sgp_hb == "1") {
        if (window.sgp_config.sgp_hbt == "1") {
            e = '<div id="sgBlogTitle"><img src="' + window.sgp_config.sgp_hbi + '" align="left">';
            e += '<a href="' + window.sgp_config.sgp_bU + '" title="' + window.sgp_config.sgp_bT + '">' + window.sgp_config.sgp_bT + "</a><br />" + window.sgp_config.sgp_bL + "</div>"
        }
        if (window.sgp_config.sgp_hbt == "2") {
            e = '<div id="sgBlogTitle"><a href="' + window.sgp_config.sgp_bU + '" title="' + window.sgp_config.sgp_bT + '">' + window.sgp_config.sgp_bT + "</a><br />" + window.sgp_config.sgp_bL + "</div>"
        }
        if (window.sgp_config.sgp_hbt == "3") {
            var g = jQuery("<textarea/>").html(window.sgp_config.sgp_ch).val();
            e = '<div id="sgBlogTitle">' + g + "</div>"
        }
    }
    if (window.sgp_config.sgp_desc == "1") {
        var k = "";
        if (jQuery("#sgCont img.sgpI").attr("title") != "null" && typeof jQuery("#sgCont img.sgpI").attr("title") != "undefined") {
            k = jQuery("#sgCont img.sgpI").attr("title")
        }
        if (jQuery("#sgCont img.sgpI").attr("alt") != "null" && typeof jQuery("#sgCont img.sgpI").attr("alt") != "undefined" && k == "") {
            k = jQuery("#sgCont img.sgpI").attr("alt")
        }
        if (jQuery("#sgPluginLoader img").attr("title") != "null" && typeof jQuery("#sgPluginLoader img").attr("title") != "undefined" && k == "") {
            k = jQuery("#sgPluginLoader img").attr("title")
        }
        if (jQuery("#sgPluginLoader img").attr("alt") != "null" && typeof jQuery("#sgPluginLoader img").attr("alt") != "undefined" && k == "") {
            k = jQuery("#sgPluginLoader img").attr("alt")
        }
        if (k == "" || typeof k === "undefined" || k == "undefined" || k == "null") {
            k = ""
        }
        e += '<div id="sgBlogDesc">' + k + "</div>"
    }
    var j = "";
    if (window.sgp_config.sgp_fb == "1") {
        j += '<div id="sgFB"><div class="fb-like" data-href="' + f + '" data-send="false" data-width="328" data-show-faces="';
        if (window.sgp_config.sgp_fbf == "1") {
            j += "true"
        } else {
            j += "false"
        }
        j += '"></div></div>'
    }
    e += '<div id="sgSocial">' + j + "</div>";
    if (window.sgp_config.sgp_fbc == "1") {
        e += '<div id="sgComments"><div class="fb-comments" data-href="' + f + '" data-num-posts="5" data-width="328"></div></div>'
    }
    var i = 'http://www.socialgalleryplugin.com"';
  //  e += '<div id="sgHonest"><a href="' + i + '" title="Powered by the Social Gallery Wordpress Plugin"><img src="http://www.socialgalleryplugin.com/social-gallery-wordpress-plugin.png" alt="Social Gallery WordPress Plugin" border="0" /></a></div>';
    jQuery("#sgSideWrap").html('<div id="sgScrollbox">' + e + "</div>");
    sgp4b1d5();
    sgpde65()
}

function sgp4b1d5() {
    if (window.sgp_config.sgp_fb == "1" || window.sgp_config.sgp_fbc == "1") {
        sgp457()
    }
}

function sgp457() {
    if (typeof(FB) !== "undefined" && window.sgpFbR < 5) {
        if (window.sgp_config.sgp_fb == "1") {
            FB.XFBML.parse(jQuery("#sgSocial").get(0))
        }
        if (window.sgp_config.sgp_fbc == "1") {
            FB.XFBML.parse(jQuery("#sgComments").get(0))
        }
    } else {
        window.sgpFbR++;
        setTimeout(function() {
            sgp457
        }, 500)
    }
}

function sgp67a19a6() {
    if (window.sgp_config.sgp_nav == "1") {
        var k = jQuery("#sgCont").height();
        var g = jQuery("#sgCont").width();
        var m = 22;
        var i = (k - 39) / 2;
        var l = (g * 0.7) - m - 10;
        if (window.sgp_ie) {
            var j = ' style="background:#FFF;opacity:0"'
        } else {
            var j = ""
        }
        var h = '<div id="sgControls"><div id="sgLeft"' + j + "></div>";
        h += '<div id="sgRight"' + j + "></div></div>";
        jQuery("#sgControls").remove();
        jQuery("#sgCont").append(h);
        if (window.sgp_ie) {
            jQuery("#sgLeft").css("background", "#FFF").css("opacity", 0)
        }
        if (window.sgp_ie) {
            jQuery("#sgRight").css("background", "#FFF").css("opacity", 0)
        }
        jQuery("#sgRight").mouseenter(function() {
            jQuery(this).css("background", "url(" + window.sgptheme.iRi + ") " + l + "px " + i + "px no-repeat").css("opacity", 1)
        }).mouseleave(function() {
            if (!window.sgp_ie) {
                jQuery(this).css("background", "transparent")
            } else {
                jQuery(this).css("background", "#FFF").css("opacity", 0)
            }
        });
        jQuery("#sgLeft").mouseenter(function() {
            jQuery(this).css("background", "url(" + window.sgptheme.iLe + ") 10px " + i + "px no-repeat").css("opacity", 1)
        }).mouseleave(function() {
            if (!window.sgp_ie) {
                jQuery(this).css("background", "transparent")
            } else {
                jQuery(this).css("background", "#FFF").css("opacity", 0)
            }
        });
        jQuery("#sgRight").click(function() {
            sgpbfcb70()
        });
        jQuery("#sgLeft").click(function() {
            sgp52627()
        })
    }
}

function sgpfde6955() {
    if (window.sgp_config.sgp_nav == "1") {
        jQuery(document).keyup(function(b) {
            if (b.keyCode == 37 && jQuery("#sgPluginBox").css("display") == "block" && sgpfca311().length > 1) {
                sgp52627();
                return false
            }
            if (b.keyCode == 39 && jQuery("#sgPluginBox").css("display") == "block" && sgpfca311().length > 1) {
                sgpbfcb70();
                return false
            }
            if (b.keyCode == 27 && jQuery("#sgPluginBox").css("display") == "block") {
                sgp1915c();
                return false
            }
        })
    }
}

function sgpbfcb70() {
    if (window.sgpa33b) {} else {
        var j = window.sgCurrind;
        if (sgpfca311().length == j) {
            j = 0
        }
        var l = sgpfca311().get(j);
        var g = jQuery(l).attr("href");
        var n = 10;
        var i = 0;
        while ((typeof g == "undefined" || g == "") && i < n) {
            j++;
            if (sgpfca311().length == j) {
                j = 0
            }
            var l = sgpfca311().get(j);
            var g = jQuery(l).attr("href");
            i++
        }
        if (typeof g != "undefined" && g != "") {
            window.sgpa33b = true;
            var f = jQuery("img", l).attr("title");
            var h = jQuery(".jig-caption-title", l).html();
            if ((h != "" || typeof h != "undefined") && (f == "" || typeof f === "undefined")) {
                f = h
            }
            var m = parseInt(sgpfca311().index(l)) + 1;
            if (g != "") {
                sgp43a017();
                jQuery("#sgPluginLoader").html('<img src="' + g + '" title="' + f + '" alt="" class="sgpI" />')
            }
            jQuery("#sgPluginLoader img").unbind("load").load(function() {
                jQuery("#sgCont").html("");
                if (jQuery("#sgPluginLoader img").attr("title") == "undefined") {
                    jQuery("#sgPluginLoader img").removeAttr("title")
                }
                jQuery("#sgPluginLoader img").appendTo("#sgCont");
                sgpcb12c();
                if (sgpfca311().length > 1) {
                    sgp67a19a6()
                }
                sgp1d7a(m);
                sgpde65()
            }).bind("error", function(a) {
                jQuery(this).addClass("noSocialGallery")
            });
            sgp520(m);
            window.sgCurrind = j + 1;
            window.sgpa33b = false
        } else {
            jQuery(this).addClass("noSocialGallery")
        }
    }
}

function sgp52627() {
    if (!window.sgpa33b) {
        var j = window.sgCurrind - 2;
        if (j < 0) {
            j = sgpfca311().length - 1
        }
        var l = sgpfca311().get(j);
        var g = jQuery(l).attr("href");
        var n = 10;
        var i = 0;
        while ((typeof g == "undefined" || g == "") && i < n) {
            j--;
            if (j < 0) {
                j = sgpfca311().length - 1
            }
            var l = sgpfca311().get(j);
            var g = jQuery(l).attr("href");
            i++
        }
        if (typeof g != "undefined" && g != "") {
            window.sgpa33b = true;
            var f = jQuery("img", l).attr("title");
            var h = jQuery(".jig-caption-title", l).html();
            if ((h != "" || typeof h != "undefined") && (f == "" || typeof f === "undefined")) {
                f = h
            }
            var m = parseInt(sgpfca311().index(l)) + 1;
            if (g != "") {
                sgp43a017();
                jQuery("#sgPluginLoader").html('<img src="' + g + '" title="' + f + '" alt="" class="sgpI" />')
            }
            jQuery("#sgPluginLoader img").unbind("load").load(function() {
                jQuery("#sgCont").html("");
                if (jQuery("#sgPluginLoader img").attr("title") == "undefined") {
                    jQuery("#sgPluginLoader img").removeAttr("title")
                }
                jQuery("#sgPluginLoader img").appendTo("#sgCont");
                sgpcb12c();
                if (sgpfca311().length > 1) {
                    sgp67a19a6()
                }
                sgp1d7a(m);
                sgpde65()
            }).bind("error", function(a) {
                jQuery(this).addClass("noSocialGallery")
            });
            sgp520(m);
            window.sgCurrind = j + 1;
            window.sgpa33b = false
        } else {
            jQuery(this).addClass("noSocialGallery")
        }
    }
}

function sgpde65() {
    if (window.sgp_config.sgp_fbc == "1") {
        var g = jQuery("#sgSideWrap").height();
        var e = jQuery("#sgSocial").outerHeight(true);
        var f = jQuery("#sgBlogDesc").outerHeight(true);
        var h = g - e - f - 80 - 20;
        if (h < 300) {
            h = 300
        }
        jQuery("#sgScrollbox").css("height", (jQuery("#sgSideWrap").height() - 30) + "px")
    }
}

function sgp43a017() {
    if (window.sgp2883f7a) {
        var b = jQuery("#sgCont").height();
        var a = (b - 39) / 2;
        jQuery("#sgCont").html('<div style="margin-left:auto;margin-right:auto;width:520px;height:40px;position:relative;top:' + a + 'px"><img id="sgpLoadr" src="' + window.sgptheme.iLo + '" style="top:0;" alt="" title="Loading" /></div>')
    } else {
        jQuery("#sgPluginBox").css("width", "880px").css("left", ((jQuery(window).width() / 2) - 440) + "px");
        jQuery("#sgCont").css("width", "520px").html('<div style="width:520px;height:520px;"><img id="sgpLoadr" src="' + window.sgptheme.iLo + '" alt="" title="Loading" /></div>')
    }
}

function sgpcb12c(b) {
    var S = 10;
    var Q = 10;
    if (typeof window.sgp_config.sgp_mb != "undefined") {
        S = window.sgp_config.sgp_mb;
        Q = window.sgp_config.sgp_mb
    }
    var z = 0;
    var h = 7;
    var e = Q / 100;
    var C = S / 100;
    var J = jQuery(window).width();
    var K = jQuery(window).height();
    var U = jQuery("#sgCont img.sgpI").width();
    var M = jQuery("#sgCont img.sgpI").height();
    var T = "img.sgpI";
    var W = "img.sgpI";
    var L = sgpd94a795();
    var V = false;
    if (L) {
        if (typeof L[0] != "undefined") {
            var P = L[1];
            if (sgp4ebd1c2(L[0][0])) {
                U = parseInt(L[0][0]);
                T = "dims Array"
            } else {
                V = true
            }
            if (sgp4ebd1c2(L[0][1])) {
                M = parseInt(L[0][1]);
                W = "dims Array"
            }
        }
    }
    if (sgp4ebd1c2(window.sgpDomW)) {
        if (window.sgpDomW > U) {
            U = window.sgpDomW;
            T = "dom img"
        }
    }
    if (sgp4ebd1c2(window.sgpDomH)) {
        if (window.sgpDomH > M) {
            M = window.sgpDomH;
            W = "dom img"
        }
    }
    if (V) {
        if (U > window.sgi[P][2][0]) {
            window.sgi[P][2][0] = U
        }
        if (M > window.sgi[P][2][1]) {
            window.sgi[P][2][1] = M
        }
    }
    window.sgpDomW = false;
    window.sgpDomH = false;
    var k = U * 1.2;
    var s = M * 1.2;
    if (U > 250 || M > 250) {
        var N = (J - 374) * C;
        if (N < 34) {
            N = 34
        }
        var I = e * K;
        if (I < 34) {
            I = 34
        }
        if (I < N) {
            N = I
        } else {
            I = N
        }
        var w = J - N - N - 374;
        var d = w + 374;
        var O = K - I - I;
        if (w < 520) {
            w = 520
        }
        if (O < 520) {
            O = 520
        }
        var c = true;
        var R = 1.1;
        if (typeof window.sgp_config.sgp_usf != "undefined") {
            if (parseFloat(window.sgp_config.sgp_usf) > 1) {
                R = window.sgp_config.sgp_usf
            }
        }
        var a = sgpe95(w, O, U, M, c, R);
        if (w < 520) {
            w = 520
        }
        if (O < 520) {
            O = 520
        }
        var i = a[0];
        var o = a[1];
        var d = w + 374;
        var O = o;
        if (i < 520) {
            w = 520
        } else {
            w = i
        }
        d = w + 374;
        if (O > (o * 1.1)) {
            O = o * 1.1
        }
        if (O < 520) {
            O = 520
        }
        var I = (K * 0.5) - (O * 0.5);
        var N = (J * 0.5) - (d * 0.5);
        jQuery("#sgPluginBox").css("top", I + "px").css("left", N + "px").css("width", d + "px").css("height", O + "px");
        jQuery("#sgCont").css("width", w + "px");
        jQuery("#sgCont").css("width", w + "px");
        jQuery("#sgCont img.sgpI").css("width", i + "px").css("height", o + "px");
        jQuery("#sgPluginBox").css("top", I + "px").css("left", N + "px").css("width", d + "px").css("height", O + "px");
        jQuery("#sgSideWrap").css("height", (O - h) + "px");
        jQuery("#sgScrollbox").css("height", (O - h - 30) + "px");
        var D = (O - o) / 2;
        jQuery("#sgCont img.sgpI").css("margin-top", D + "px")
    } else {
        var w = 520;
        var d = 520 + 374;
        var O = 520;
        var N = (J / 2) - 440;
        if (N < 34) {
            N = 34
        }
        var I = (K / 2) - 260;
        if (I < 34) {
            I = 34
        }
        jQuery("#sgPluginBox").css("top", I + "px").css("left", N + "px").css("width", d + "px").css("height", O + "px");
        jQuery("#sgCont").css("width", w + "px");
        jQuery("#sgSideWrap").css("height", (O - h) + "px");
        jQuery("#sgScrollbox").css("height", (O - h - 30) + "px");
        var D = (O - M) / 2;
        jQuery("#sgCont img.sgpI").css("margin-top", D + "px")
    }
}

function sgp1915c() {
    jQuery("#sgPluginBg, #sgPluginBox").animate({
        opacity: "0"
    }, 300, "linear", function() {
        jQuery("#sgPluginBg, #sgPluginBox").css("display", "none")
    });
    if (window.location.hash.substr(0, 3) == "#sg") {
        window.location.hash = "_"
    }
}

function sgpa855() {
    return window.location.pathname
}

function sgp5ad6f() {
    var c = window.location.href;
    var b = window.location.hash;
    var a = c.indexOf(b) || c.length;
    return c.substr(0, a)
}

function sgpe95(h, d, l, i, c, g) {
    if (typeof c == "undefined") {
        var c = false
    }
    if (typeof g == "undefined") {
        var g = 1.1
    }
    var k = Math.min(h / l, d / i);
    var f = l * k;
    var a = i * k;
    if (!c) {
        if (f > l || a > i) {
            f = l;
            a = i
        }
    } else {
        if (f > (l * g) || a > (i * g)) {
            var k = Math.min((l * g) / l, (i * g) / i);
            var f = l * k;
            var a = i * k
        }
    }
    var b = (h * 0.5) - (f * 0.5);
    var e = (d * 0.5) - (a * 0.5);
    var j = new Array();
    j[0] = f;
    j[1] = a;
    j[2] = b;
    j[3] = e;
    return j
}

function sgpfca311() {
    return jQuery(window.sgp8cf3c).not(window.sgpe61f5a2)
}

function sgpf2473d() {
    window.sgptheme.themename = "classic";
    window.sgptheme.themedir = window.sgp_config.sgp_theme_root + window.sgptheme.themename + "/";
    window.sgptheme.iLe = window.sgptheme.themedir + "l.png";
    window.sgptheme.iRi = window.sgptheme.themedir + "r.png";
    window.sgptheme.iLo = window.sgptheme.themedir + "loading.gif";
    window.sgptheme.iFs = window.sgptheme.themedir + "fullscreen.png"
};