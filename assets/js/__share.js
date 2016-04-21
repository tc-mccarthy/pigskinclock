/*
Simple Share v2.0
Author: TC McCarthy, Matthew Cassella, Chenji Yang
*/


var share = {
    keys: {},

    init: function() {
        var _this = this;
        $(_this.onReady.bind(_this));
    },

    onReady: function() {
        this.binds();
    },

    binds: function() {
        //bind share buttons
        this.b.all($(".simpleShare a"));
    },

    //get the third party scripts
    loadDependencies: function() {
        var _this = this;

        this.loadFB();
    },

    loadFB: function() {
        (function(d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = "//connect.facebook.net/en_US/all.js";
            fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    },

    fallbackValue: function(values) {
        /* A method I thought up. It cascades through the
    	values array and takes the first one that's not undefined */
        var _this = this;

        for (var i = 0; i < values.length; i++) {
            if (_this.isValid(values[i])) {
                return values[i];
            }
        }
    },

    /* KATIE CODE
		&LMNOP (_this; =that x isValid [if_and_only_if] return from hell_o_jell_oi)
    */

    b: {
        all: function(ele, options) {
            if (typeof options === "undefined") {
                options = {};
            }

            var _this = share;

            ele.each(function() {
                var el = $(this);

                if (el.hasClass("fb")) {
                    _this.b.fb(el, options)
                } else if (el.hasClass("tw")) {
                    _this.b.tw(el, options)
                } else if (el.hasClass("pin")) {
                    _this.b.pin(el, options)
                } else if (el.hasClass("gp")) {
                    _this.b.g(el, options)
                } else if (el.hasClass("env")) {
                    _this.b.mail(el, options)
                }
            });
        },

        fb: function(ele, options) {
            //first remove pre-existing binds
            ele.unbind("click");

            var _this = share;

            if (!_this.isValid(options)) {
                options = {};
            }

            ele.on("click", function(e) {
                e.preventDefault();

                /*
					Properties are given the following order of preference:
					1. Values passed directly in options object
					2. Data attributes on the element
					3. Values defined in HTML meta tags
                */

                var _this = share,
                    title = _this.fallbackValue([options.title, ele.attr("data-title"), $("meta[property='og:title']").attr("content"), $("title").text()]),
                    description = _this.fallbackValue([options.description, ele.attr("data-description"), $("meta[property='og:description']").attr("content"), $("meta[name='description']").attr("content")]),
                    image = _this.fallbackValue([options.image, ele.attr("data-image"), $("meta[property='og:image']").attr("content")]),
                    url = _this.fallbackValue([options.url, ele.attr("data-bitly"), ele.attr("data-url"), $("meta[property='og:url']").attr("content"), window.location.href]),
                    caption = _this.fallbackValue([options.caption, ele.attr("data-caption"), ""]);

                console.log(image);

                FB.ui({
                    method: 'feed',
                    name: title,
                    link: url,
                    picture: image,
                    caption: caption,
                    description: description

                }, function(response) {
                    if (response && response.post_id) {} else {}
                });
            });
        },

        tw: function(ele, options) {
            ele.unbind("click");

            var _this = share;

            if (!_this.isValid(options)) {
                options = {};
            }

            ele.on("click", function(e) {
                e.preventDefault();

                /*
					Properties are given the following order of preference:
					1. Values passed directly in options object
					2. Data attributes on the element
					3. Values defined in HTML meta tags
                */

                var _this = share,
                    text = _this.fallbackValue([options.title + " @Newsday", options.text, ele.attr("data-text"), $("meta[property='og:description']").attr("content"), $("meta[name='description']").attr("content"), ""]),
                    url = _this.fallbackValue([options.url, ele.attr("data-bitly"), ele.attr("data-url"), $("meta[property='og:url']").attr("content"), window.location.href]),
                    tweet = [text, url].join(" ");

                _this.createPopup("https://twitter.com/intent/tweet?text=" + encodeURIComponent(tweet));
            });
        },

        pin: function(ele, options) {
            ele.unbind("click");

            var _this = share;

            if (!_this.isValid(options)) {
                options = {};
            }

            ele.on("click", function(e) {

                /*
					Properties are given the following order of preference:
					1. Values passed directly in options object
					2. Data attributes on the element
					3. Values defined in HTML meta tags
                */

                var _this = share,
                    title = _this.fallbackValue([options.title, ele.attr("data-title"), $("meta[property='og:title']").attr("content"), $("title").text()]),
                    description = _this.fallbackValue([options.description, ele.attr("data-description"), $("meta[property='og:description']").attr("content"), $("meta[name='description']").attr("content")]),
                    image = _this.fallbackValue([options.image, ele.attr("data-image"), $("meta[property='og:image']").attr("content")]),
                    url = _this.fallbackValue([options.url, ele.attr("data-bitly"), ele.attr("data-url"), $("meta[property='og:url']").attr("content"), window.location.href]),
                    popUrl = [
                        "http://pinterest.com/pin/create/bookmarklet/?media=",
                        encodeURIComponent(image),
                        "&url=",
                        encodeURIComponent(url),
                        "&title=",
                        encodeURIComponent(title),
                        "&description=",
                        encodeURIComponent(description)
                    ].join("");

                _this.createPopup(popUrl);
            });
        },

        g: function(ele, options) {
            ele.unbind("click");

            var _this = share;

            if (!_this.isValid(options)) {
                options = {};
            }

            ele.on("click", function(e) {
                /*
					Properties are given the following order of preference:
					1. Values passed directly in options object
					2. Data attributes on the element
					3. Values defined in HTML meta tags
                */

                var url = _this.fallbackValue([options.url, ele.attr("data-bitly"), ele.attr("data-url"), $("meta[property='og:url']").attr("content"), window.location.href]),
                    popUrl = [
                        "https://plus.google.com/share?url=",
                        encodeURIComponent(url),
                    ].join("");

                _this.createPopup(popUrl);
            });
        },

        mail: function(ele, options) {
            ele.unbind("click");

            var _this = share;

            if (!_this.isValid(options)) {
                options = {};
            }

            var _this = share,
                title = _this.fallbackValue([options.title, ele.attr("data-title"), $("meta[property='og:title']").attr("content"), $("title").text()]),
                description = _this.fallbackValue([options.description, ele.attr("data-description"), $("meta[property='og:description']").attr("content"), $("meta[name='description']").attr("content")]),
                image = _this.fallbackValue([options.image, ele.attr("data-image"), $("meta[property='og:image']").attr("content")]),
                url = _this.fallbackValue([options.url, ele.attr("data-bitly"), ele.attr("data-url"), $("meta[property='og:url']").attr("content"), window.location.href]),
                caption = _this.fallbackValue([options.caption, ele.attr("data-caption"), ""]);

                ele.attr("href", "mailto:?subject=" + title + "&body=" + description + "%0D%0A" + url);
        },
    },

    createPopup: function(url, options) {
        if (typeof options === "undefined") {
            options = {};
        }

        var _this = this,
            wwidth = _this.fallbackValue([options.width, 700]),
            wheight = _this.fallbackValue([options.height, 500]),
            px = Math.floor((($(window).width() || 1024) - wwidth) / 2),
            py = Math.floor((($(window).height() || 700) - wheight) / 2),
            popup = window.open(url, "social",
                "width=" + wwidth + ",height=" + wheight +
                ",left=" + px + ",top=" + py +
                ",location=0,menubar=0,toolbar=0,status=0,scrollbars=1,resizable=1");

        if (popup) {
            popup.focus();
        }

        return !!popup;
    },

    isValid: function(e) {
        return (typeof e !== "undefined" && !!e)
    }
};

//kill old simple share
setTimeout(function() {
    bindSimpleShare = function($ele, wheight, wwidth, loc, title, isVideo, imgURL, description) {}
}, 750);


share.init();
