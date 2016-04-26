"use strict";var _typeof=typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"?function(obj){return typeof obj;}:function(obj){return obj&&typeof Symbol==="function"&&obj.constructor===Symbol?"symbol":typeof obj;};(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'");}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e);},f,f.exports,e,t,n,r);}return n[o].exports;}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++){s(r[o]);}return s;})({1:[function(require,module,exports){ /*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */if("undefined"==typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");+function(a){"use strict";var b=a.fn.jquery.split(" ")[0].split(".");if(b[0]<2&&b[1]<9||1==b[0]&&9==b[1]&&b[2]<1||b[0]>2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3");}(jQuery),+function(a){"use strict";function b(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b){if(void 0!==a.style[c])return {end:b[c]};}return !1;}a.fn.emulateTransitionEnd=function(b){var c=!1,d=this;a(this).one("bsTransitionEnd",function(){c=!0;});var e=function e(){c||a(d).trigger(a.support.transition.end);};return setTimeout(e,b),this;},a(function(){a.support.transition=b(),a.support.transition&&(a.event.special.bsTransitionEnd={bindType:a.support.transition.end,delegateType:a.support.transition.end,handle:function handle(b){return a(b.target).is(this)?b.handleObj.handler.apply(this,arguments):void 0;}});});}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var c=a(this),e=c.data("bs.alert");e||c.data("bs.alert",e=new d(this)),"string"==typeof b&&e[b].call(c);});}var c='[data-dismiss="alert"]',d=function d(b){a(b).on("click",c,this.close);};d.VERSION="3.3.6",d.TRANSITION_DURATION=150,d.prototype.close=function(b){function c(){g.detach().trigger("closed.bs.alert").remove();}var e=a(this),f=e.attr("data-target");f||(f=e.attr("href"),f=f&&f.replace(/.*(?=#[^\s]*$)/,""));var g=a(f);b&&b.preventDefault(),g.length||(g=e.closest(".alert")),g.trigger(b=a.Event("close.bs.alert")),b.isDefaultPrevented()||(g.removeClass("in"),a.support.transition&&g.hasClass("fade")?g.one("bsTransitionEnd",c).emulateTransitionEnd(d.TRANSITION_DURATION):c());};var e=a.fn.alert;a.fn.alert=b,a.fn.alert.Constructor=d,a.fn.alert.noConflict=function(){return a.fn.alert=e,this;},a(document).on("click.bs.alert.data-api",c,d.prototype.close);}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.button"),f="object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b;e||d.data("bs.button",e=new c(this,f)),"toggle"==b?e.toggle():b&&e.setState(b);});}var c=function c(b,d){this.$element=a(b),this.options=a.extend({},c.DEFAULTS,d),this.isLoading=!1;};c.VERSION="3.3.6",c.DEFAULTS={loadingText:"loading..."},c.prototype.setState=function(b){var c="disabled",d=this.$element,e=d.is("input")?"val":"html",f=d.data();b+="Text",null==f.resetText&&d.data("resetText",d[e]()),setTimeout(a.proxy(function(){d[e](null==f[b]?this.options[b]:f[b]),"loadingText"==b?(this.isLoading=!0,d.addClass(c).attr(c,c)):this.isLoading&&(this.isLoading=!1,d.removeClass(c).removeAttr(c));},this),0);},c.prototype.toggle=function(){var a=!0,b=this.$element.closest('[data-toggle="buttons"]');if(b.length){var c=this.$element.find("input");"radio"==c.prop("type")?(c.prop("checked")&&(a=!1),b.find(".active").removeClass("active"),this.$element.addClass("active")):"checkbox"==c.prop("type")&&(c.prop("checked")!==this.$element.hasClass("active")&&(a=!1),this.$element.toggleClass("active")),c.prop("checked",this.$element.hasClass("active")),a&&c.trigger("change");}else this.$element.attr("aria-pressed",!this.$element.hasClass("active")),this.$element.toggleClass("active");};var d=a.fn.button;a.fn.button=b,a.fn.button.Constructor=c,a.fn.button.noConflict=function(){return a.fn.button=d,this;},a(document).on("click.bs.button.data-api",'[data-toggle^="button"]',function(c){var d=a(c.target);d.hasClass("btn")||(d=d.closest(".btn")),b.call(d,"toggle"),a(c.target).is('input[type="radio"]')||a(c.target).is('input[type="checkbox"]')||c.preventDefault();}).on("focus.bs.button.data-api blur.bs.button.data-api",'[data-toggle^="button"]',function(b){a(b.target).closest(".btn").toggleClass("focus",/^focus(in)?$/.test(b.type));});}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.carousel"),f=a.extend({},c.DEFAULTS,d.data(),"object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b),g="string"==typeof b?b:f.slide;e||d.data("bs.carousel",e=new c(this,f)),"number"==typeof b?e.to(b):g?e[g]():f.interval&&e.pause().cycle();});}var c=function c(b,_c){this.$element=a(b),this.$indicators=this.$element.find(".carousel-indicators"),this.options=_c,this.paused=null,this.sliding=null,this.interval=null,this.$active=null,this.$items=null,this.options.keyboard&&this.$element.on("keydown.bs.carousel",a.proxy(this.keydown,this)),"hover"==this.options.pause&&!("ontouchstart" in document.documentElement)&&this.$element.on("mouseenter.bs.carousel",a.proxy(this.pause,this)).on("mouseleave.bs.carousel",a.proxy(this.cycle,this));};c.VERSION="3.3.6",c.TRANSITION_DURATION=600,c.DEFAULTS={interval:5e3,pause:"hover",wrap:!0,keyboard:!0},c.prototype.keydown=function(a){if(!/input|textarea/i.test(a.target.tagName)){switch(a.which){case 37:this.prev();break;case 39:this.next();break;default:return;}a.preventDefault();}},c.prototype.cycle=function(b){return b||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(a.proxy(this.next,this),this.options.interval)),this;},c.prototype.getItemIndex=function(a){return this.$items=a.parent().children(".item"),this.$items.index(a||this.$active);},c.prototype.getItemForDirection=function(a,b){var c=this.getItemIndex(b),d="prev"==a&&0===c||"next"==a&&c==this.$items.length-1;if(d&&!this.options.wrap)return b;var e="prev"==a?-1:1,f=(c+e)%this.$items.length;return this.$items.eq(f);},c.prototype.to=function(a){var b=this,c=this.getItemIndex(this.$active=this.$element.find(".item.active"));return a>this.$items.length-1||0>a?void 0:this.sliding?this.$element.one("slid.bs.carousel",function(){b.to(a);}):c==a?this.pause().cycle():this.slide(a>c?"next":"prev",this.$items.eq(a));},c.prototype.pause=function(b){return b||(this.paused=!0),this.$element.find(".next, .prev").length&&a.support.transition&&(this.$element.trigger(a.support.transition.end),this.cycle(!0)),this.interval=clearInterval(this.interval),this;},c.prototype.next=function(){return this.sliding?void 0:this.slide("next");},c.prototype.prev=function(){return this.sliding?void 0:this.slide("prev");},c.prototype.slide=function(b,d){var e=this.$element.find(".item.active"),f=d||this.getItemForDirection(b,e),g=this.interval,h="next"==b?"left":"right",i=this;if(f.hasClass("active"))return this.sliding=!1;var j=f[0],k=a.Event("slide.bs.carousel",{relatedTarget:j,direction:h});if(this.$element.trigger(k),!k.isDefaultPrevented()){if(this.sliding=!0,g&&this.pause(),this.$indicators.length){this.$indicators.find(".active").removeClass("active");var l=a(this.$indicators.children()[this.getItemIndex(f)]);l&&l.addClass("active");}var m=a.Event("slid.bs.carousel",{relatedTarget:j,direction:h});return a.support.transition&&this.$element.hasClass("slide")?(f.addClass(b),f[0].offsetWidth,e.addClass(h),f.addClass(h),e.one("bsTransitionEnd",function(){f.removeClass([b,h].join(" ")).addClass("active"),e.removeClass(["active",h].join(" ")),i.sliding=!1,setTimeout(function(){i.$element.trigger(m);},0);}).emulateTransitionEnd(c.TRANSITION_DURATION)):(e.removeClass("active"),f.addClass("active"),this.sliding=!1,this.$element.trigger(m)),g&&this.cycle(),this;}};var d=a.fn.carousel;a.fn.carousel=b,a.fn.carousel.Constructor=c,a.fn.carousel.noConflict=function(){return a.fn.carousel=d,this;};var e=function e(c){var d,e=a(this),f=a(e.attr("data-target")||(d=e.attr("href"))&&d.replace(/.*(?=#[^\s]+$)/,""));if(f.hasClass("carousel")){var g=a.extend({},f.data(),e.data()),h=e.attr("data-slide-to");h&&(g.interval=!1),b.call(f,g),h&&f.data("bs.carousel").to(h),c.preventDefault();}};a(document).on("click.bs.carousel.data-api","[data-slide]",e).on("click.bs.carousel.data-api","[data-slide-to]",e),a(window).on("load",function(){a('[data-ride="carousel"]').each(function(){var c=a(this);b.call(c,c.data());});});}(jQuery),+function(a){"use strict";function b(b){var c,d=b.attr("data-target")||(c=b.attr("href"))&&c.replace(/.*(?=#[^\s]+$)/,"");return a(d);}function c(b){return this.each(function(){var c=a(this),e=c.data("bs.collapse"),f=a.extend({},d.DEFAULTS,c.data(),"object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b);!e&&f.toggle&&/show|hide/.test(b)&&(f.toggle=!1),e||c.data("bs.collapse",e=new d(this,f)),"string"==typeof b&&e[b]();});}var d=function d(b,c){this.$element=a(b),this.options=a.extend({},d.DEFAULTS,c),this.$trigger=a('[data-toggle="collapse"][href="#'+b.id+'"],[data-toggle="collapse"][data-target="#'+b.id+'"]'),this.transitioning=null,this.options.parent?this.$parent=this.getParent():this.addAriaAndCollapsedClass(this.$element,this.$trigger),this.options.toggle&&this.toggle();};d.VERSION="3.3.6",d.TRANSITION_DURATION=350,d.DEFAULTS={toggle:!0},d.prototype.dimension=function(){var a=this.$element.hasClass("width");return a?"width":"height";},d.prototype.show=function(){if(!this.transitioning&&!this.$element.hasClass("in")){var b,e=this.$parent&&this.$parent.children(".panel").children(".in, .collapsing");if(!(e&&e.length&&(b=e.data("bs.collapse"),b&&b.transitioning))){var f=a.Event("show.bs.collapse");if(this.$element.trigger(f),!f.isDefaultPrevented()){e&&e.length&&(c.call(e,"hide"),b||e.data("bs.collapse",null));var g=this.dimension();this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded",!0),this.$trigger.removeClass("collapsed").attr("aria-expanded",!0),this.transitioning=1;var h=function h(){this.$element.removeClass("collapsing").addClass("collapse in")[g](""),this.transitioning=0,this.$element.trigger("shown.bs.collapse");};if(!a.support.transition)return h.call(this);var i=a.camelCase(["scroll",g].join("-"));this.$element.one("bsTransitionEnd",a.proxy(h,this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i]);}}}},d.prototype.hide=function(){if(!this.transitioning&&this.$element.hasClass("in")){var b=a.Event("hide.bs.collapse");if(this.$element.trigger(b),!b.isDefaultPrevented()){var c=this.dimension();this.$element[c](this.$element[c]())[0].offsetHeight,this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded",!1),this.$trigger.addClass("collapsed").attr("aria-expanded",!1),this.transitioning=1;var e=function e(){this.transitioning=0,this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse");};return a.support.transition?void this.$element[c](0).one("bsTransitionEnd",a.proxy(e,this)).emulateTransitionEnd(d.TRANSITION_DURATION):e.call(this);}}},d.prototype.toggle=function(){this[this.$element.hasClass("in")?"hide":"show"]();},d.prototype.getParent=function(){return a(this.options.parent).find('[data-toggle="collapse"][data-parent="'+this.options.parent+'"]').each(a.proxy(function(c,d){var e=a(d);this.addAriaAndCollapsedClass(b(e),e);},this)).end();},d.prototype.addAriaAndCollapsedClass=function(a,b){var c=a.hasClass("in");a.attr("aria-expanded",c),b.toggleClass("collapsed",!c).attr("aria-expanded",c);};var e=a.fn.collapse;a.fn.collapse=c,a.fn.collapse.Constructor=d,a.fn.collapse.noConflict=function(){return a.fn.collapse=e,this;},a(document).on("click.bs.collapse.data-api",'[data-toggle="collapse"]',function(d){var e=a(this);e.attr("data-target")||d.preventDefault();var f=b(e),g=f.data("bs.collapse"),h=g?"toggle":e.data();c.call(f,h);});}(jQuery),+function(a){"use strict";function b(b){var c=b.attr("data-target");c||(c=b.attr("href"),c=c&&/#[A-Za-z]/.test(c)&&c.replace(/.*(?=#[^\s]*$)/,""));var d=c&&a(c);return d&&d.length?d:b.parent();}function c(c){c&&3===c.which||(a(e).remove(),a(f).each(function(){var d=a(this),e=b(d),f={relatedTarget:this};e.hasClass("open")&&(c&&"click"==c.type&&/input|textarea/i.test(c.target.tagName)&&a.contains(e[0],c.target)||(e.trigger(c=a.Event("hide.bs.dropdown",f)),c.isDefaultPrevented()||(d.attr("aria-expanded","false"),e.removeClass("open").trigger(a.Event("hidden.bs.dropdown",f)))));}));}function d(b){return this.each(function(){var c=a(this),d=c.data("bs.dropdown");d||c.data("bs.dropdown",d=new g(this)),"string"==typeof b&&d[b].call(c);});}var e=".dropdown-backdrop",f='[data-toggle="dropdown"]',g=function g(b){a(b).on("click.bs.dropdown",this.toggle);};g.VERSION="3.3.6",g.prototype.toggle=function(d){var e=a(this);if(!e.is(".disabled, :disabled")){var f=b(e),g=f.hasClass("open");if(c(),!g){"ontouchstart" in document.documentElement&&!f.closest(".navbar-nav").length&&a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click",c);var h={relatedTarget:this};if(f.trigger(d=a.Event("show.bs.dropdown",h)),d.isDefaultPrevented())return;e.trigger("focus").attr("aria-expanded","true"),f.toggleClass("open").trigger(a.Event("shown.bs.dropdown",h));}return !1;}},g.prototype.keydown=function(c){if(/(38|40|27|32)/.test(c.which)&&!/input|textarea/i.test(c.target.tagName)){var d=a(this);if(c.preventDefault(),c.stopPropagation(),!d.is(".disabled, :disabled")){var e=b(d),g=e.hasClass("open");if(!g&&27!=c.which||g&&27==c.which)return 27==c.which&&e.find(f).trigger("focus"),d.trigger("click");var h=" li:not(.disabled):visible a",i=e.find(".dropdown-menu"+h);if(i.length){var j=i.index(c.target);38==c.which&&j>0&&j--,40==c.which&&j<i.length-1&&j++,~j||(j=0),i.eq(j).trigger("focus");}}}};var h=a.fn.dropdown;a.fn.dropdown=d,a.fn.dropdown.Constructor=g,a.fn.dropdown.noConflict=function(){return a.fn.dropdown=h,this;},a(document).on("click.bs.dropdown.data-api",c).on("click.bs.dropdown.data-api",".dropdown form",function(a){a.stopPropagation();}).on("click.bs.dropdown.data-api",f,g.prototype.toggle).on("keydown.bs.dropdown.data-api",f,g.prototype.keydown).on("keydown.bs.dropdown.data-api",".dropdown-menu",g.prototype.keydown);}(jQuery),+function(a){"use strict";function b(b,d){return this.each(function(){var e=a(this),f=e.data("bs.modal"),g=a.extend({},c.DEFAULTS,e.data(),"object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b);f||e.data("bs.modal",f=new c(this,g)),"string"==typeof b?f[b](d):g.show&&f.show(d);});}var c=function c(b,_c2){this.options=_c2,this.$body=a(document.body),this.$element=a(b),this.$dialog=this.$element.find(".modal-dialog"),this.$backdrop=null,this.isShown=null,this.originalBodyPad=null,this.scrollbarWidth=0,this.ignoreBackdropClick=!1,this.options.remote&&this.$element.find(".modal-content").load(this.options.remote,a.proxy(function(){this.$element.trigger("loaded.bs.modal");},this));};c.VERSION="3.3.6",c.TRANSITION_DURATION=300,c.BACKDROP_TRANSITION_DURATION=150,c.DEFAULTS={backdrop:!0,keyboard:!0,show:!0},c.prototype.toggle=function(a){return this.isShown?this.hide():this.show(a);},c.prototype.show=function(b){var d=this,e=a.Event("show.bs.modal",{relatedTarget:b});this.$element.trigger(e),this.isShown||e.isDefaultPrevented()||(this.isShown=!0,this.checkScrollbar(),this.setScrollbar(),this.$body.addClass("modal-open"),this.escape(),this.resize(),this.$element.on("click.dismiss.bs.modal",'[data-dismiss="modal"]',a.proxy(this.hide,this)),this.$dialog.on("mousedown.dismiss.bs.modal",function(){d.$element.one("mouseup.dismiss.bs.modal",function(b){a(b.target).is(d.$element)&&(d.ignoreBackdropClick=!0);});}),this.backdrop(function(){var e=a.support.transition&&d.$element.hasClass("fade");d.$element.parent().length||d.$element.appendTo(d.$body),d.$element.show().scrollTop(0),d.adjustDialog(),e&&d.$element[0].offsetWidth,d.$element.addClass("in"),d.enforceFocus();var f=a.Event("shown.bs.modal",{relatedTarget:b});e?d.$dialog.one("bsTransitionEnd",function(){d.$element.trigger("focus").trigger(f);}).emulateTransitionEnd(c.TRANSITION_DURATION):d.$element.trigger("focus").trigger(f);}));},c.prototype.hide=function(b){b&&b.preventDefault(),b=a.Event("hide.bs.modal"),this.$element.trigger(b),this.isShown&&!b.isDefaultPrevented()&&(this.isShown=!1,this.escape(),this.resize(),a(document).off("focusin.bs.modal"),this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),this.$dialog.off("mousedown.dismiss.bs.modal"),a.support.transition&&this.$element.hasClass("fade")?this.$element.one("bsTransitionEnd",a.proxy(this.hideModal,this)).emulateTransitionEnd(c.TRANSITION_DURATION):this.hideModal());},c.prototype.enforceFocus=function(){a(document).off("focusin.bs.modal").on("focusin.bs.modal",a.proxy(function(a){this.$element[0]===a.target||this.$element.has(a.target).length||this.$element.trigger("focus");},this));},c.prototype.escape=function(){this.isShown&&this.options.keyboard?this.$element.on("keydown.dismiss.bs.modal",a.proxy(function(a){27==a.which&&this.hide();},this)):this.isShown||this.$element.off("keydown.dismiss.bs.modal");},c.prototype.resize=function(){this.isShown?a(window).on("resize.bs.modal",a.proxy(this.handleUpdate,this)):a(window).off("resize.bs.modal");},c.prototype.hideModal=function(){var a=this;this.$element.hide(),this.backdrop(function(){a.$body.removeClass("modal-open"),a.resetAdjustments(),a.resetScrollbar(),a.$element.trigger("hidden.bs.modal");});},c.prototype.removeBackdrop=function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null;},c.prototype.backdrop=function(b){var d=this,e=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var f=a.support.transition&&e;if(this.$backdrop=a(document.createElement("div")).addClass("modal-backdrop "+e).appendTo(this.$body),this.$element.on("click.dismiss.bs.modal",a.proxy(function(a){return this.ignoreBackdropClick?void (this.ignoreBackdropClick=!1):void (a.target===a.currentTarget&&("static"==this.options.backdrop?this.$element[0].focus():this.hide()));},this)),f&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in"),!b)return;f?this.$backdrop.one("bsTransitionEnd",b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):b();}else if(!this.isShown&&this.$backdrop){this.$backdrop.removeClass("in");var g=function g(){d.removeBackdrop(),b&&b();};a.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one("bsTransitionEnd",g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION):g();}else b&&b();},c.prototype.handleUpdate=function(){this.adjustDialog();},c.prototype.adjustDialog=function(){var a=this.$element[0].scrollHeight>document.documentElement.clientHeight;this.$element.css({paddingLeft:!this.bodyIsOverflowing&&a?this.scrollbarWidth:"",paddingRight:this.bodyIsOverflowing&&!a?this.scrollbarWidth:""});},c.prototype.resetAdjustments=function(){this.$element.css({paddingLeft:"",paddingRight:""});},c.prototype.checkScrollbar=function(){var a=window.innerWidth;if(!a){var b=document.documentElement.getBoundingClientRect();a=b.right-Math.abs(b.left);}this.bodyIsOverflowing=document.body.clientWidth<a,this.scrollbarWidth=this.measureScrollbar();},c.prototype.setScrollbar=function(){var a=parseInt(this.$body.css("padding-right")||0,10);this.originalBodyPad=document.body.style.paddingRight||"",this.bodyIsOverflowing&&this.$body.css("padding-right",a+this.scrollbarWidth);},c.prototype.resetScrollbar=function(){this.$body.css("padding-right",this.originalBodyPad);},c.prototype.measureScrollbar=function(){var a=document.createElement("div");a.className="modal-scrollbar-measure",this.$body.append(a);var b=a.offsetWidth-a.clientWidth;return this.$body[0].removeChild(a),b;};var d=a.fn.modal;a.fn.modal=b,a.fn.modal.Constructor=c,a.fn.modal.noConflict=function(){return a.fn.modal=d,this;},a(document).on("click.bs.modal.data-api",'[data-toggle="modal"]',function(c){var d=a(this),e=d.attr("href"),f=a(d.attr("data-target")||e&&e.replace(/.*(?=#[^\s]+$)/,"")),g=f.data("bs.modal")?"toggle":a.extend({remote:!/#/.test(e)&&e},f.data(),d.data());d.is("a")&&c.preventDefault(),f.one("show.bs.modal",function(a){a.isDefaultPrevented()||f.one("hidden.bs.modal",function(){d.is(":visible")&&d.trigger("focus");});}),b.call(f,g,this);});}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tooltip"),f="object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.tooltip",e=new c(this,f)),"string"==typeof b&&e[b]());});}var c=function c(a,b){this.type=null,this.options=null,this.enabled=null,this.timeout=null,this.hoverState=null,this.$element=null,this.inState=null,this.init("tooltip",a,b);};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.DEFAULTS={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1,viewport:{selector:"body",padding:0}},c.prototype.init=function(b,c,d){if(this.enabled=!0,this.type=b,this.$element=a(c),this.options=this.getOptions(d),this.$viewport=this.options.viewport&&a(a.isFunction(this.options.viewport)?this.options.viewport.call(this,this.$element):this.options.viewport.selector||this.options.viewport),this.inState={click:!1,hover:!1,focus:!1},this.$element[0] instanceof document.constructor&&!this.options.selector)throw new Error("`selector` option must be specified when initializing "+this.type+" on the window.document object!");for(var e=this.options.trigger.split(" "),f=e.length;f--;){var g=e[f];if("click"==g)this.$element.on("click."+this.type,this.options.selector,a.proxy(this.toggle,this));else if("manual"!=g){var h="hover"==g?"mouseenter":"focusin",i="hover"==g?"mouseleave":"focusout";this.$element.on(h+"."+this.type,this.options.selector,a.proxy(this.enter,this)),this.$element.on(i+"."+this.type,this.options.selector,a.proxy(this.leave,this));}}this.options.selector?this._options=a.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle();},c.prototype.getDefaults=function(){return c.DEFAULTS;},c.prototype.getOptions=function(b){return b=a.extend({},this.getDefaults(),this.$element.data(),b),b.delay&&"number"==typeof b.delay&&(b.delay={show:b.delay,hide:b.delay}),b;},c.prototype.getDelegateOptions=function(){var b={},c=this.getDefaults();return this._options&&a.each(this._options,function(a,d){c[a]!=d&&(b[a]=d);}),b;},c.prototype.enter=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusin"==b.type?"focus":"hover"]=!0),c.tip().hasClass("in")||"in"==c.hoverState?void (c.hoverState="in"):(clearTimeout(c.timeout),c.hoverState="in",c.options.delay&&c.options.delay.show?void (c.timeout=setTimeout(function(){"in"==c.hoverState&&c.show();},c.options.delay.show)):c.show());},c.prototype.isInStateTrue=function(){for(var a in this.inState){if(this.inState[a])return !0;}return !1;},c.prototype.leave=function(b){var c=b instanceof this.constructor?b:a(b.currentTarget).data("bs."+this.type);return c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c)),b instanceof a.Event&&(c.inState["focusout"==b.type?"focus":"hover"]=!1),c.isInStateTrue()?void 0:(clearTimeout(c.timeout),c.hoverState="out",c.options.delay&&c.options.delay.hide?void (c.timeout=setTimeout(function(){"out"==c.hoverState&&c.hide();},c.options.delay.hide)):c.hide());},c.prototype.show=function(){var b=a.Event("show.bs."+this.type);if(this.hasContent()&&this.enabled){this.$element.trigger(b);var d=a.contains(this.$element[0].ownerDocument.documentElement,this.$element[0]);if(b.isDefaultPrevented()||!d)return;var e=this,f=this.tip(),g=this.getUID(this.type);this.setContent(),f.attr("id",g),this.$element.attr("aria-describedby",g),this.options.animation&&f.addClass("fade");var h="function"==typeof this.options.placement?this.options.placement.call(this,f[0],this.$element[0]):this.options.placement,i=/\s?auto?\s?/i,j=i.test(h);j&&(h=h.replace(i,"")||"top"),f.detach().css({top:0,left:0,display:"block"}).addClass(h).data("bs."+this.type,this),this.options.container?f.appendTo(this.options.container):f.insertAfter(this.$element),this.$element.trigger("inserted.bs."+this.type);var k=this.getPosition(),l=f[0].offsetWidth,m=f[0].offsetHeight;if(j){var n=h,o=this.getPosition(this.$viewport);h="bottom"==h&&k.bottom+m>o.bottom?"top":"top"==h&&k.top-m<o.top?"bottom":"right"==h&&k.right+l>o.width?"left":"left"==h&&k.left-l<o.left?"right":h,f.removeClass(n).addClass(h);}var p=this.getCalculatedOffset(h,k,l,m);this.applyPlacement(p,h);var q=function q(){var a=e.hoverState;e.$element.trigger("shown.bs."+e.type),e.hoverState=null,"out"==a&&e.leave(e);};a.support.transition&&this.$tip.hasClass("fade")?f.one("bsTransitionEnd",q).emulateTransitionEnd(c.TRANSITION_DURATION):q();}},c.prototype.applyPlacement=function(b,c){var d=this.tip(),e=d[0].offsetWidth,f=d[0].offsetHeight,g=parseInt(d.css("margin-top"),10),h=parseInt(d.css("margin-left"),10);isNaN(g)&&(g=0),isNaN(h)&&(h=0),b.top+=g,b.left+=h,a.offset.setOffset(d[0],a.extend({using:function using(a){d.css({top:Math.round(a.top),left:Math.round(a.left)});}},b),0),d.addClass("in");var i=d[0].offsetWidth,j=d[0].offsetHeight;"top"==c&&j!=f&&(b.top=b.top+f-j);var k=this.getViewportAdjustedDelta(c,b,i,j);k.left?b.left+=k.left:b.top+=k.top;var l=/top|bottom/.test(c),m=l?2*k.left-e+i:2*k.top-f+j,n=l?"offsetWidth":"offsetHeight";d.offset(b),this.replaceArrow(m,d[0][n],l);},c.prototype.replaceArrow=function(a,b,c){this.arrow().css(c?"left":"top",50*(1-a/b)+"%").css(c?"top":"left","");},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle();a.find(".tooltip-inner")[this.options.html?"html":"text"](b),a.removeClass("fade in top bottom left right");},c.prototype.hide=function(b){function d(){"in"!=e.hoverState&&f.detach(),e.$element.removeAttr("aria-describedby").trigger("hidden.bs."+e.type),b&&b();}var e=this,f=a(this.$tip),g=a.Event("hide.bs."+this.type);return this.$element.trigger(g),g.isDefaultPrevented()?void 0:(f.removeClass("in"),a.support.transition&&f.hasClass("fade")?f.one("bsTransitionEnd",d).emulateTransitionEnd(c.TRANSITION_DURATION):d(),this.hoverState=null,this);},c.prototype.fixTitle=function(){var a=this.$element;(a.attr("title")||"string"!=typeof a.attr("data-original-title"))&&a.attr("data-original-title",a.attr("title")||"").attr("title","");},c.prototype.hasContent=function(){return this.getTitle();},c.prototype.getPosition=function(b){b=b||this.$element;var c=b[0],d="BODY"==c.tagName,e=c.getBoundingClientRect();null==e.width&&(e=a.extend({},e,{width:e.right-e.left,height:e.bottom-e.top}));var f=d?{top:0,left:0}:b.offset(),g={scroll:d?document.documentElement.scrollTop||document.body.scrollTop:b.scrollTop()},h=d?{width:a(window).width(),height:a(window).height()}:null;return a.extend({},e,g,h,f);},c.prototype.getCalculatedOffset=function(a,b,c,d){return "bottom"==a?{top:b.top+b.height,left:b.left+b.width/2-c/2}:"top"==a?{top:b.top-d,left:b.left+b.width/2-c/2}:"left"==a?{top:b.top+b.height/2-d/2,left:b.left-c}:{top:b.top+b.height/2-d/2,left:b.left+b.width};},c.prototype.getViewportAdjustedDelta=function(a,b,c,d){var e={top:0,left:0};if(!this.$viewport)return e;var f=this.options.viewport&&this.options.viewport.padding||0,g=this.getPosition(this.$viewport);if(/right|left/.test(a)){var h=b.top-f-g.scroll,i=b.top+f-g.scroll+d;h<g.top?e.top=g.top-h:i>g.top+g.height&&(e.top=g.top+g.height-i);}else {var j=b.left-f,k=b.left+f+c;j<g.left?e.left=g.left-j:k>g.right&&(e.left=g.left+g.width-k);}return e;},c.prototype.getTitle=function(){var a,b=this.$element,c=this.options;return a=b.attr("data-original-title")||("function"==typeof c.title?c.title.call(b[0]):c.title);},c.prototype.getUID=function(a){do {a+=~ ~(1e6*Math.random());}while(document.getElementById(a));return a;},c.prototype.tip=function(){if(!this.$tip&&(this.$tip=a(this.options.template),1!=this.$tip.length))throw new Error(this.type+" `template` option must consist of exactly 1 top-level element!");return this.$tip;},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow");},c.prototype.enable=function(){this.enabled=!0;},c.prototype.disable=function(){this.enabled=!1;},c.prototype.toggleEnabled=function(){this.enabled=!this.enabled;},c.prototype.toggle=function(b){var c=this;b&&(c=a(b.currentTarget).data("bs."+this.type),c||(c=new this.constructor(b.currentTarget,this.getDelegateOptions()),a(b.currentTarget).data("bs."+this.type,c))),b?(c.inState.click=!c.inState.click,c.isInStateTrue()?c.enter(c):c.leave(c)):c.tip().hasClass("in")?c.leave(c):c.enter(c);},c.prototype.destroy=function(){var a=this;clearTimeout(this.timeout),this.hide(function(){a.$element.off("."+a.type).removeData("bs."+a.type),a.$tip&&a.$tip.detach(),a.$tip=null,a.$arrow=null,a.$viewport=null;});};var d=a.fn.tooltip;a.fn.tooltip=b,a.fn.tooltip.Constructor=c,a.fn.tooltip.noConflict=function(){return a.fn.tooltip=d,this;};}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.popover"),f="object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b;(e||!/destroy|hide/.test(b))&&(e||d.data("bs.popover",e=new c(this,f)),"string"==typeof b&&e[b]());});}var c=function c(a,b){this.init("popover",a,b);};if(!a.fn.tooltip)throw new Error("Popover requires tooltip.js");c.VERSION="3.3.6",c.DEFAULTS=a.extend({},a.fn.tooltip.Constructor.DEFAULTS,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),c.prototype=a.extend({},a.fn.tooltip.Constructor.prototype),c.prototype.constructor=c,c.prototype.getDefaults=function(){return c.DEFAULTS;},c.prototype.setContent=function(){var a=this.tip(),b=this.getTitle(),c=this.getContent();a.find(".popover-title")[this.options.html?"html":"text"](b),a.find(".popover-content").children().detach().end()[this.options.html?"string"==typeof c?"html":"append":"text"](c),a.removeClass("fade top bottom left right in"),a.find(".popover-title").html()||a.find(".popover-title").hide();},c.prototype.hasContent=function(){return this.getTitle()||this.getContent();},c.prototype.getContent=function(){var a=this.$element,b=this.options;return a.attr("data-content")||("function"==typeof b.content?b.content.call(a[0]):b.content);},c.prototype.arrow=function(){return this.$arrow=this.$arrow||this.tip().find(".arrow");};var d=a.fn.popover;a.fn.popover=b,a.fn.popover.Constructor=c,a.fn.popover.noConflict=function(){return a.fn.popover=d,this;};}(jQuery),+function(a){"use strict";function b(c,d){this.$body=a(document.body),this.$scrollElement=a(a(c).is(document.body)?window:c),this.options=a.extend({},b.DEFAULTS,d),this.selector=(this.options.target||"")+" .nav li > a",this.offsets=[],this.targets=[],this.activeTarget=null,this.scrollHeight=0,this.$scrollElement.on("scroll.bs.scrollspy",a.proxy(this.process,this)),this.refresh(),this.process();}function c(c){return this.each(function(){var d=a(this),e=d.data("bs.scrollspy"),f="object"==(typeof c==="undefined"?"undefined":_typeof(c))&&c;e||d.data("bs.scrollspy",e=new b(this,f)),"string"==typeof c&&e[c]();});}b.VERSION="3.3.6",b.DEFAULTS={offset:10},b.prototype.getScrollHeight=function(){return this.$scrollElement[0].scrollHeight||Math.max(this.$body[0].scrollHeight,document.documentElement.scrollHeight);},b.prototype.refresh=function(){var b=this,c="offset",d=0;this.offsets=[],this.targets=[],this.scrollHeight=this.getScrollHeight(),a.isWindow(this.$scrollElement[0])||(c="position",d=this.$scrollElement.scrollTop()),this.$body.find(this.selector).map(function(){var b=a(this),e=b.data("target")||b.attr("href"),f=/^#./.test(e)&&a(e);return f&&f.length&&f.is(":visible")&&[[f[c]().top+d,e]]||null;}).sort(function(a,b){return a[0]-b[0];}).each(function(){b.offsets.push(this[0]),b.targets.push(this[1]);});},b.prototype.process=function(){var a,b=this.$scrollElement.scrollTop()+this.options.offset,c=this.getScrollHeight(),d=this.options.offset+c-this.$scrollElement.height(),e=this.offsets,f=this.targets,g=this.activeTarget;if(this.scrollHeight!=c&&this.refresh(),b>=d)return g!=(a=f[f.length-1])&&this.activate(a);if(g&&b<e[0])return this.activeTarget=null,this.clear();for(a=e.length;a--;){g!=f[a]&&b>=e[a]&&(void 0===e[a+1]||b<e[a+1])&&this.activate(f[a]);}},b.prototype.activate=function(b){this.activeTarget=b,this.clear();var c=this.selector+'[data-target="'+b+'"],'+this.selector+'[href="'+b+'"]',d=a(c).parents("li").addClass("active");d.parent(".dropdown-menu").length&&(d=d.closest("li.dropdown").addClass("active")),d.trigger("activate.bs.scrollspy");},b.prototype.clear=function(){a(this.selector).parentsUntil(this.options.target,".active").removeClass("active");};var d=a.fn.scrollspy;a.fn.scrollspy=c,a.fn.scrollspy.Constructor=b,a.fn.scrollspy.noConflict=function(){return a.fn.scrollspy=d,this;},a(window).on("load.bs.scrollspy.data-api",function(){a('[data-spy="scroll"]').each(function(){var b=a(this);c.call(b,b.data());});});}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.tab");e||d.data("bs.tab",e=new c(this)),"string"==typeof b&&e[b]();});}var c=function c(b){this.element=a(b);};c.VERSION="3.3.6",c.TRANSITION_DURATION=150,c.prototype.show=function(){var b=this.element,c=b.closest("ul:not(.dropdown-menu)"),d=b.data("target");if(d||(d=b.attr("href"),d=d&&d.replace(/.*(?=#[^\s]*$)/,"")),!b.parent("li").hasClass("active")){var e=c.find(".active:last a"),f=a.Event("hide.bs.tab",{relatedTarget:b[0]}),g=a.Event("show.bs.tab",{relatedTarget:e[0]});if(e.trigger(f),b.trigger(g),!g.isDefaultPrevented()&&!f.isDefaultPrevented()){var h=a(d);this.activate(b.closest("li"),c),this.activate(h,h.parent(),function(){e.trigger({type:"hidden.bs.tab",relatedTarget:b[0]}),b.trigger({type:"shown.bs.tab",relatedTarget:e[0]});});}}},c.prototype.activate=function(b,d,e){function f(){g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!1),b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded",!0),h?(b[0].offsetWidth,b.addClass("in")):b.removeClass("fade"),b.parent(".dropdown-menu").length&&b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded",!0),e&&e();}var g=d.find("> .active"),h=e&&a.support.transition&&(g.length&&g.hasClass("fade")||!!d.find("> .fade").length);g.length&&h?g.one("bsTransitionEnd",f).emulateTransitionEnd(c.TRANSITION_DURATION):f(),g.removeClass("in");};var d=a.fn.tab;a.fn.tab=b,a.fn.tab.Constructor=c,a.fn.tab.noConflict=function(){return a.fn.tab=d,this;};var e=function e(c){c.preventDefault(),b.call(a(this),"show");};a(document).on("click.bs.tab.data-api",'[data-toggle="tab"]',e).on("click.bs.tab.data-api",'[data-toggle="pill"]',e);}(jQuery),+function(a){"use strict";function b(b){return this.each(function(){var d=a(this),e=d.data("bs.affix"),f="object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b;e||d.data("bs.affix",e=new c(this,f)),"string"==typeof b&&e[b]();});}var c=function c(b,d){this.options=a.extend({},c.DEFAULTS,d),this.$target=a(this.options.target).on("scroll.bs.affix.data-api",a.proxy(this.checkPosition,this)).on("click.bs.affix.data-api",a.proxy(this.checkPositionWithEventLoop,this)),this.$element=a(b),this.affixed=null,this.unpin=null,this.pinnedOffset=null,this.checkPosition();};c.VERSION="3.3.6",c.RESET="affix affix-top affix-bottom",c.DEFAULTS={offset:0,target:window},c.prototype.getState=function(a,b,c,d){var e=this.$target.scrollTop(),f=this.$element.offset(),g=this.$target.height();if(null!=c&&"top"==this.affixed)return c>e?"top":!1;if("bottom"==this.affixed)return null!=c?e+this.unpin<=f.top?!1:"bottom":a-d>=e+g?!1:"bottom";var h=null==this.affixed,i=h?e:f.top,j=h?g:b;return null!=c&&c>=e?"top":null!=d&&i+j>=a-d?"bottom":!1;},c.prototype.getPinnedOffset=function(){if(this.pinnedOffset)return this.pinnedOffset;this.$element.removeClass(c.RESET).addClass("affix");var a=this.$target.scrollTop(),b=this.$element.offset();return this.pinnedOffset=b.top-a;},c.prototype.checkPositionWithEventLoop=function(){setTimeout(a.proxy(this.checkPosition,this),1);},c.prototype.checkPosition=function(){if(this.$element.is(":visible")){var b=this.$element.height(),d=this.options.offset,e=d.top,f=d.bottom,g=Math.max(a(document).height(),a(document.body).height());"object"!=(typeof d==="undefined"?"undefined":_typeof(d))&&(f=e=d),"function"==typeof e&&(e=d.top(this.$element)),"function"==typeof f&&(f=d.bottom(this.$element));var h=this.getState(g,b,e,f);if(this.affixed!=h){null!=this.unpin&&this.$element.css("top","");var i="affix"+(h?"-"+h:""),j=a.Event(i+".bs.affix");if(this.$element.trigger(j),j.isDefaultPrevented())return;this.affixed=h,this.unpin="bottom"==h?this.getPinnedOffset():null,this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix","affixed")+".bs.affix");}"bottom"==h&&this.$element.offset({top:g-b-f});}};var d=a.fn.affix;a.fn.affix=b,a.fn.affix.Constructor=c,a.fn.affix.noConflict=function(){return a.fn.affix=d,this;},a(window).on("load",function(){a('[data-spy="affix"]').each(function(){var c=a(this),d=c.data();d.offset=d.offset||{},null!=d.offsetBottom&&(d.offset.bottom=d.offsetBottom),null!=d.offsetTop&&(d.offset.top=d.offsetTop),b.call(c,d);});});}(jQuery);},{}],2:[function(require,module,exports){ /*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */!function(a,b){"object"==(typeof module==="undefined"?"undefined":_typeof(module))&&"object"==_typeof(module.exports)?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a);}:b(a);}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function n(a,b){return new n.fn.init(a,b);},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function r(a,b){return b.toUpperCase();};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function toArray(){return e.call(this);},get:function get(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this);},pushStack:function pushStack(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b;},each:function each(a){return n.each(this,a);},map:function map(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b);}));},slice:function slice(){return this.pushStack(e.apply(this,arguments));},first:function first(){return this.eq(0);},last:function last(){return this.eq(-1);},eq:function eq(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[]);},end:function end(){return this.prevObject||this.constructor();},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==(typeof g==="undefined"?"undefined":_typeof(g))||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++){if(null!=(a=arguments[h]))for(b in a){c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));}}return g;},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function error(a){throw new Error(a);},noop:function noop(){},isFunction:function isFunction(a){return "function"===n.type(a);},isArray:Array.isArray,isWindow:function isWindow(a){return null!=a&&a===a.window;},isNumeric:function isNumeric(a){var b=a&&a.toString();return !n.isArray(a)&&b-parseFloat(b)+1>=0;},isPlainObject:function isPlainObject(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return !1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return !1;for(b in a){}return void 0===b||k.call(a,b);},isEmptyObject:function isEmptyObject(a){var b;for(b in a){return !1;}return !0;},type:function type(a){return null==a?a+"":"object"==(typeof a==="undefined"?"undefined":_typeof(a))||"function"==typeof a?i[j.call(a)]||"object":typeof a==="undefined"?"undefined":_typeof(a);},globalEval:function globalEval(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a));},camelCase:function camelCase(a){return a.replace(p,"ms-").replace(q,r);},nodeName:function nodeName(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase();},each:function each(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++){if(b.call(a[d],d,a[d])===!1)break;}}else for(d in a){if(b.call(a[d],d,a[d])===!1)break;}return a;},trim:function trim(a){return null==a?"":(a+"").replace(o,"");},makeArray:function makeArray(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c;},inArray:function inArray(a,b,c){return null==b?-1:h.call(b,a,c);},merge:function merge(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++){a[e++]=b[d];}return a.length=e,a;},grep:function grep(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++){d=!b(a[f],f),d!==h&&e.push(a[f]);}return e;},map:function map(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++){e=b(a[g],g,c),null!=e&&h.push(e);}else for(g in a){e=b(a[g],g,c),null!=e&&h.push(e);}return f.apply([],h);},guid:1,proxy:function proxy(a,b){var c,d,f;return "string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function f(){return a.apply(b||this,d.concat(e.call(arguments)));},f.guid=a.guid=a.guid||n.guid++,f):void 0;},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase();});function s(a){var b=!!a&&"length" in a&&a.length,c=n.type(a);return "function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a;}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date(),v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function B(a,b){return a===b&&(l=!0),0;},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function J(a,b){for(var c=0,d=a.length;d>c;c++){if(a[c]===b)return c;}return -1;},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function ca(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320);},da=function da(){m();};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType;}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b));}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]){}a.length=c-1;}};}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d;}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d;}else {if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d;}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--){r[h]=l+" "+qa(r[h]);}s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b;}if(s)try{return H.apply(d,w.querySelectorAll(s)),d;}catch(y){}finally {k===u&&b.removeAttribute("id");}}}return i(a.replace(Q,"$1"),b,d,e);}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e;}return b;}function ha(a){return a[u]=!0,a;}function ia(a){var b=n.createElement("div");try{return !!a(b);}catch(c){return !1;}finally {b.parentNode&&b.parentNode.removeChild(b),b=null;}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--){d.attrHandle[c[e]]=b;}}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling){if(c===b)return -1;}return a?1:-1;}function la(a){return function(b){var c=b.nodeName.toLowerCase();return "input"===c&&b.type===a;};}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return ("input"===c||"button"===c)&&b.type===a;};}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--){c[e=f[g]]&&(c[e]=!(d[e]=c[e]));}});});}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a;}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1;},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className");}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length;}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length;}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[];}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b;};}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b;};}),d.find.TAG=c.getElementsByTagName?function(a,b){return "undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0;}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++]){1===c.nodeType&&d.push(c);}return d;}return f;},d.find.CLASS=c.getElementsByClassName&&function(a,b){return "undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0;},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]");}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:");})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O);}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)));}:function(a,b){if(b)while(b=b.parentNode){if(b===a)return !0;}return !1;},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1);}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode){g.unshift(c);}c=b;while(c=c.parentNode){h.unshift(c);}while(g[d]===h[d]){d++;}return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0;},n):n;},fa.matches=function(a,b){return fa(a,null,null,b);},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d;}catch(e){}return fa(b,n,null,[a]).length>0;},fa.contains=function(a,b){return (a.ownerDocument||a)!==n&&m(a),t(a,b);},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null;},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a);},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++]){b===a[f]&&(e=d.push(f));}while(e--){a.splice(d[e],1);}}return k=null,a;},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling){c+=e(a);}}else if(3===f||4===f)return a.nodeValue;}else while(b=a[d++]){c+=e(b);}return c;},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function ATTR(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4);},CHILD:function CHILD(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a;},PSEUDO:function PSEUDO(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3));}},filter:{TAG:function TAG(a){var b=a.replace(ba,ca).toLowerCase();return "*"===a?function(){return !0;}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b;};},CLASS:function CLASS(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"");});},ATTR:function ATTR(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0;};},CHILD:function CHILD(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return !!a.parentNode;}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p]){if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return !1;}o=p="only"===a&&!o&&"nextSibling";}return !0;}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break;}}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop()){if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;}return t-=e,t===d||t%d===0&&t/d>=0;}};},PSEUDO:function PSEUDO(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--){d=J(a,f[g]),a[d]=!(c[d]=f[g]);}}):function(a){return e(a,0,c);}):e;}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--){(f=g[h])&&(a[h]=!(b[h]=f));}}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop();};}),has:ha(function(a){return function(b){return fa(a,b).length>0;};}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return (b.textContent||b.innerText||e(b)).indexOf(a)>-1;};}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do {if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");}while((b=b.parentNode)&&1===b.nodeType);return !1;};}),target:function target(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id;},root:function root(a){return a===o;},focus:function focus(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex);},enabled:function enabled(a){return a.disabled===!1;},disabled:function disabled(a){return a.disabled===!0;},checked:function checked(a){var b=a.nodeName.toLowerCase();return "input"===b&&!!a.checked||"option"===b&&!!a.selected;},selected:function selected(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0;},empty:function empty(a){for(a=a.firstChild;a;a=a.nextSibling){if(a.nodeType<6)return !1;}return !0;},parent:function parent(a){return !d.pseudos.empty(a);},header:function header(a){return Y.test(a.nodeName);},input:function input(a){return X.test(a.nodeName);},button:function button(a){var b=a.nodeName.toLowerCase();return "input"===b&&"button"===a.type||"button"===b;},text:function text(a){var b;return "input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase());},first:na(function(){return [0];}),last:na(function(a,b){return [b-1];}),eq:na(function(a,b,c){return [0>c?c+b:c];}),even:na(function(a,b){for(var c=0;b>c;c+=2){a.push(c);}return a;}),odd:na(function(a,b){for(var c=1;b>c;c+=2){a.push(c);}return a;}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;){a.push(d);}return a;}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;){a.push(d);}return a;})}},d.pseudos.nth=d.pseudos.eq;for(b in {radio:!0,checkbox:!0,file:!0,password:!0,image:!0}){d.pseudos[b]=la(b);}for(b in {submit:!0,reset:!0}){d.pseudos[b]=ma(b);}function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa(),g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter){!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));}if(!c)break;}return b?h.length:h?fa.error(a):z(a,i).slice(0);};function qa(a){for(var b=0,c=a.length,d="";c>b;b++){d+=a[b].value;}return d;}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d]){if(1===b.nodeType||e)return a(b,c,f);}}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d]){if((1===b.nodeType||e)&&a(b,c,g))return !0;}}else while(b=b[d]){if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return !0;}}};}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--){if(!a[e](b,c,d))return !1;}return !0;}:a[0];}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++){fa(a,b[d],c);}return c;}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++){(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));}return g;}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--){(l=j[k])&&(r[n[k]]=!(q[n[k]]=l));}}if(f){if(e||a){if(e){j=[],k=r.length;while(k--){(l=r[k])&&j.push(q[k]=l);}e(null,r=[],j,i);}k=r.length;while(k--){(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l));}}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r);});}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b;},h,!0),l=ra(function(a){return J(b,a)>-1;},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e;}];f>i;i++){if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else {if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++){if(d.relative[a[e].type])break;}return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a));}m.push(c);}}return sa(m);}function xa(a,b){var c=b.length>0,e=a.length>0,f=function f(_f,g,h,i,k){var l,o,q,r=0,s="0",t=_f&&[],u=[],v=j,x=_f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++]){if(q(l,g||n,h)){i.push(l);break;}}k&&(w=y);}c&&((l=!q&&l)&&r--,_f&&t.push(l));}if(r+=s,c&&s!==r){o=0;while(q=b[o++]){q(t,u,g,h);}if(_f){if(r>0)while(s--){t[s]||u[s]||(u[s]=F.call(i));}u=ua(u);}H.apply(i,u),k&&!_f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i);}return k&&(w=y,j=v),t;};return c?ha(f):f;}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--){f=wa(b[c]),f[u]?d.push(f):e.push(f);}f=A(a,xa(e,d)),f.selector=a;}return f;},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length);}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break;}}}return (n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e;},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"));}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href");})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2);}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value");})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue;}),ia(function(a){return null==a.getAttribute("disabled");})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null;}),fa;}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function u(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType){if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a);}}return d;},v=function v(a,b){for(var c=[];a;a=a.nextSibling){1===a.nodeType&&a!==b&&c.push(a);}return c;},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return !!b.call(a,d,a)!==c;});if(b.nodeType)return n.grep(a,function(a){return a===b!==c;});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a);}return n.grep(a,function(a){return h.call(b,a)>-1!==c;});}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType;}));},n.fn.extend({find:function find(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++){if(n.contains(e[b],this))return !0;}}));for(b=0;c>b;b++){n.find(a,e[b],d);}return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d;},filter:function filter(a){return this.pushStack(z(this,a||[],!1));},not:function not(a){return this.pushStack(z(this,a||[],!0));},is:function is(a){return !!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length;}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return !b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b){n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);}return this;}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this;}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this));};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function has(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++){if(n.contains(this,b[a]))return !0;}});},closest:function closest(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++){for(c=this[d];c&&c!==b;c=c.parentNode){if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break;}}}return this.pushStack(f.length>1?n.uniqueSort(f):f);},index:function index(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1;},add:function add(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))));},addBack:function addBack(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a));}});function F(a,b){while((a=a[b])&&1!==a.nodeType){}return a;}n.each({parent:function parent(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null;},parents:function parents(a){return u(a,"parentNode");},parentsUntil:function parentsUntil(a,b,c){return u(a,"parentNode",c);},next:function next(a){return F(a,"nextSibling");},prev:function prev(a){return F(a,"previousSibling");},nextAll:function nextAll(a){return u(a,"nextSibling");},prevAll:function prevAll(a){return u(a,"previousSibling");},nextUntil:function nextUntil(a,b,c){return u(a,"nextSibling",c);},prevUntil:function prevUntil(a,b,c){return u(a,"previousSibling",c);},siblings:function siblings(a){return v((a.parentNode||{}).firstChild,a);},children:function children(a){return v(a.firstChild);},contents:function contents(a){return a.contentDocument||n.merge([],a.childNodes);}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return "Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e);};});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0;}),b;}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function i(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length){f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1);}}a.memory||(c=!1),b=!1,e&&(f=c?[]:"");},j={add:function add(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c);});}(arguments),c&&!b&&i()),this;},remove:function remove(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1){f.splice(c,1),h>=c&&h--;}}),this;},has:function has(a){return a?n.inArray(a,f)>-1:f.length>0;},empty:function empty(){return f&&(f=[]),this;},disable:function disable(){return e=g=[],f=c="",this;},disabled:function disabled(){return !f;},lock:function lock(){return e=g=[],c||(f=c=""),this;},locked:function locked(){return !!e;},fireWith:function fireWith(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this;},fire:function fire(){return j.fireWith(this,arguments),this;},fired:function fired(){return !!d;}};return j;},n.extend({Deferred:function Deferred(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function state(){return c;},always:function always(){return e.done(arguments).fail(arguments),this;},then:function then(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments);});}),a=null;}).promise();},promise:function promise(a){return null!=a?n.extend(a,d):d;}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h;},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this;},e[f[0]+"With"]=g.fireWith;}),d.promise(e),a&&a.call(e,e),e;},when:function when(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function h(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c);};},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++){c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;}return f||g.resolveWith(k,c),g.promise();}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this;},n.extend({isReady:!1,readyWait:1,holdReady:function holdReady(a){a?n.readyWait++:n.ready(!0);},ready:function ready(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))));}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready();}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b);},n.ready.promise();var K=function K(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c){K(a,b,h,c[h],!0,f,g);}}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function b(a,_b,c){return j.call(n(a),c);})),b))for(;i>h;h++){b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));}return e?a:j?b.call(a):i?b(a[0],c):f;},L=function L(a){return 1===a.nodeType||9===a.nodeType||! +a.nodeType;};function M(){this.expando=n.expando+M.uid++;}M.uid=1,M.prototype={register:function register(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando];},cache:function cache(a){if(!L(a))return {};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b;},set:function set(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b){e[d]=b[d];}return e;},get:function get(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b];},access:function access(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b);},remove:function remove(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else {n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--){delete f[d[c]];}}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando]);}},hasData:function hasData(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b);}};var N=new M(),O=new M(),P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;}catch(e){}O.set(a,b,c);}else c=void 0;return c;}n.extend({hasData:function hasData(a){return O.hasData(a)||N.hasData(a);},data:function data(a,b,c){return O.access(a,b,c);},removeData:function removeData(a,b){O.remove(a,b);},_data:function _data(a,b,c){return N.access(a,b,c);},_removeData:function _removeData(a,b){N.remove(a,b);}}),n.fn.extend({data:function data(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--){g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));}N.set(f,"hasDataAttrs",!0);}return e;}return "object"==(typeof a==="undefined"?"undefined":_typeof(a))?this.each(function(){O.set(this,a);}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c;}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b);});},null,b,arguments.length>1,null,!0);},removeData:function removeData(a){return this.each(function(){O.remove(this,a);});}}),n.extend({queue:function queue(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0;},dequeue:function dequeue(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function g(){n.dequeue(a,b);};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire();},_queueHooks:function _queueHooks(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c]);})});}}),n.fn.extend({queue:function queue(a,b){var c=2;return "string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a);});},dequeue:function dequeue(a){return this.each(function(){n.dequeue(this,a);});},clearQueue:function clearQueue(a){return this.queue(a||"fx",[]);},promise:function promise(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function h(){--d||e.resolveWith(f,[f]);};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--){c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));}return h(),e.promise(b);}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function V(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a);};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur();}:function(){return n.css(a,b,"");},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do {f=f||".5",k/=f,n.style(a,b,k+j);}while(f!==(f=h()/i)&&1!==f&&--g);}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e;}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c;}function aa(a,b){for(var c=0,d=a.length;d>c;c++){N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"));}}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++){if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--){g=g.lastChild;}n.merge(m,g.childNodes),g=l.firstChild,g.textContent="";}else m.push(b.createTextNode(f));}l.textContent="",o=0;while(f=m[o++]){if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++]){Z.test(f.type||"")&&c.push(f);}}}return l;}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue;}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return !0;}function ha(){return !1;}function ia(){try{return d.activeElement;}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==(typeof b==="undefined"?"undefined":_typeof(b))){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b){ja(a,h,c,d,b[h],f);}return a;}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function e(a){return n().off(a),g.apply(this,arguments);},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c);});}n.event={global:{},add:function add(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return "undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0;}),b=(b||"").match(G)||[""],j=b.length;while(j--){h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0);}}},remove:function remove(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--){if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--){k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));}g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o]);}else for(o in i){n.event.remove(a,o+b[j],c,d,!0);}}n.isEmptyObject(i)&&N.remove(a,"handle events");}},dispatch:function dispatch(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped()){a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()));}}return k.postDispatch&&k.postDispatch.call(this,a),a.result;}},handlers:function handlers(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this){if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++){f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);}d.length&&g.push({elem:i,handlers:d});}}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g;},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function filter(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a;}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function filter(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a;}},fix:function fix(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--){c=e[b],a[c]=g[c];}return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a;},special:{load:{noBubble:!0},focus:{trigger:function trigger(){return this!==ia()&&this.focus?(this.focus(),!1):void 0;},delegateType:"focusin"},blur:{trigger:function trigger(){return this===ia()&&this.blur?(this.blur(),!1):void 0;},delegateType:"focusout"},click:{trigger:function trigger(){return "checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0;},_default:function _default(a){return n.nodeName(a.target,"a");}},beforeunload:{postDispatch:function postDispatch(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result);}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c);},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void (this[n.expando]=!0)):new n.Event(a,b);},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function preventDefault(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault();},stopPropagation:function stopPropagation(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation();},stopImmediatePropagation:function stopImmediatePropagation(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation();}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function handle(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c;}};}),n.fn.extend({on:function on(a,b,c,d){return ja(this,a,b,c,d);},one:function one(a,b,c,d){return ja(this,a,b,c,d,1);},off:function off(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==(typeof a==="undefined"?"undefined":_typeof(a))){for(e in a){this.off(e,b,a[e]);}return this;}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b);});}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a;}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a;}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a;}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j){for(c=0,d=j[e].length;d>c;c++){n.event.add(b,e,j[e][c]);}}}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i));}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue);}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d);});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++){j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);}if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++){j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")));}}return a;}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++){c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));}return a;}n.extend({htmlPrefilter:function htmlPrefilter(a){return a.replace(ka,"<$1></$2>");},clone:function clone(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++){ta(f[d],g[d]);}if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++){sa(f[d],g[d]);}else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h;},cleanData:function cleanData(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++){if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events){e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);}c[N.expando]=void 0;}c[O.expando]&&(c[O.expando]=void 0);}}}}),n.fn.extend({domManip:ua,detach:function detach(a){return va(this,a,!0);},remove:function remove(a){return va(this,a);},text:function text(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a);});},null,a,arguments.length);},append:function append(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a);}});},prepend:function prepend(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild);}});},before:function before(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this);});},after:function after(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling);});},empty:function empty(){for(var a,b=0;null!=(a=this[b]);b++){1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");}return this;},clone:function clone(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b);});},html:function html(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++){b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);}b=0;}catch(e){}}b&&this.empty().append(a);},null,a,arguments.length);},replaceWith:function replaceWith(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this));},a);}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++){c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());}return this.pushStack(d);};});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d;}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c;}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function Ca(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b);},Da=function Da(a,b,c,d){var e,f,g={};for(f in b){g[f]=a.style[f],a.style[f]=b[f];}e=c.apply(a,d||[]);for(f in b){a.style[f]=g[f];}return e;},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){(function(){var i=function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g);};h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);n.extend(l,{pixelPosition:function pixelPosition(){return i(),b;},boxSizingReliable:function boxSizingReliable(){return null==c&&i(),c;},pixelMarginRight:function pixelMarginRight(){return null==c&&i(),e;},reliableMarginLeft:function reliableMarginLeft(){return null==c&&i(),f;},reliableMarginRight:function reliableMarginRight(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b;}});})();}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g;}function Ga(a,b){return {get:function get(){return a()?void delete this.get:(this.get=b).apply(this,arguments);}};}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--){if(a=Ka[c]+b,a in La)return a;}}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b;}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2){"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));}return g;}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0;}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px";}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++){d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));}for(g=0;h>g;g++){d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));}return a;}n.extend({cssHooks:{opacity:{get:function get(a,b){if(b){var c=Fa(a,"opacity");return ""===c?"1":c;}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function style(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get" in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c==="undefined"?"undefined":_typeof(c),"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set" in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0);}},css:function css(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get" in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e;}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function get(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d);}):Pa(a,b,d):void 0;},set:function set(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g);}};}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left;}))+"px":void 0;}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0;}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function expand(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++){e[a+U[d]+b]=f[d]||f[d-2]||f[0];}return e;}},Aa.test(a)||(n.cssHooks[a+b].set=Na);}),n.fn.extend({css:function css(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++){f[b[g]]=n.css(a,b[g],!1,d);}return f;}return void 0!==c?n.style(a,b,c):n.css(a,b);},a,b,arguments.length>1);},show:function show(){return Qa(this,!0);},hide:function hide(){return Qa(this);},toggle:function toggle(a){return "boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide();});}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e);}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function init(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px");},cur:function cur(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this);},run:function run(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this;}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function get(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0);},set:function set(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit);}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function set(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now);}},n.easing={linear:function linear(a){return a;},swing:function swing(a){return .5-Math.cos(a*Math.PI)/2;},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0;}),Sa=n.now();}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b){c=U[d],e["margin"+c]=e["padding"+c]=a;}return b&&(e.opacity=e.width=a),e;}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++){if(d=e[f].call(c,b,a))return d;}}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i();}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire();});})),1===a.nodeType&&("height" in b||"width" in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2];}));for(d in b){if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0;}m[d]=q&&q[d]||n.style(a,d);}else j=void 0;}if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else {q?"hidden" in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide();}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m){n.style(a,b,m[b]);}});for(d in m){g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0));}}}function $a(a,b){var c,d,e,f,g;for(c in a){if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand" in g){f=g.expand(f),delete a[d];for(c in f){c in a||(a[c]=f[c],b[c]=e);}}else b[d]=e;}}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem;}),i=function i(){if(e)return !1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++){j.tweens[g].run(f);}return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1);},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function createTween(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d;},stop:function stop(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++){j.tweens[c].run(1);}return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this;}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++){if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;}return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always);}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c;}]},tweener:function tweener(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++){c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b);}},prefilters:[Za],prefilter:function prefilter(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a);}}),n.speed=function(a,b,c){var d=a&&"object"==(typeof a==="undefined"?"undefined":_typeof(a))?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue);},d;},n.fn.extend({fadeTo:function fadeTo(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d);},animate:function animate(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function g(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0);};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g);},stop:function stop(a,b,c){var d=function d(a){var b=a.stop;delete a.stop,b(c);};return "string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g){g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);}for(e=f.length;e--;){f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));}!b&&c||n.dequeue(this,a);});},finish:function finish(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;){f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));}for(b=0;g>b;b++){d[b]&&d[b].finish&&d[b].finish.call(this);}delete c.finish;});}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e);};}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d);};}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++){a=c[b],a()||c[b]!==a||c.splice(b--,1);}c.length||n.fx.stop(),Sa=void 0;},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop();},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval));},n.fx.stop=function(){a.clearInterval(Ta),Ta=null;},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e);};});},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value;}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function attr(a,b){return K(this,n.attr,a,b,arguments.length>1);},removeAttr:function removeAttr(a){return this.each(function(){n.removeAttr(this,a);});}}),n.extend({attr:function attr(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return "undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get" in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d));},attrHooks:{type:{set:function set(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b;}}}},removeAttr:function removeAttr(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++]){d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c);}}}),ab={set:function set(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c;}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e;};});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function prop(a,b){return K(this,n.prop,a,b,arguments.length>1);},removeProp:function removeProp(a){return this.each(function(){delete this[n.propFix[a]||a];});}}),n.extend({prop:function prop(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set" in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get" in e&&null!==(d=e.get(a,b))?d:a[b];},propHooks:{tabIndex:{get:function get(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1;}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function get(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null;},set:function set(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex);}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this;});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||"";}n.fn.extend({addClass:function addClass(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)));});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++]){if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++]){d.indexOf(" "+f+" ")<0&&(d+=f+" ");}h=n.trim(d),e!==h&&c.setAttribute("class",h);}}}return this;},removeClass:function removeClass(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)));});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++]){if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++]){while(d.indexOf(" "+f+" ")>-1){d=d.replace(" "+f+" "," ");}}h=n.trim(d),e!==h&&c.setAttribute("class",h);}}}return this;},toggleClass:function toggleClass(a,b){var c=typeof a==="undefined"?"undefined":_typeof(a);return "boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b);}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++]){e.hasClass(b)?e.removeClass(b):e.addClass(b);}}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""));});},hasClass:function hasClass(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++]){if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return !0;}return !1;}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function val(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+"";})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set" in b&&void 0!==b.set(this,e,"value")||(this.value=e));});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get" in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c);}}}),n.extend({valHooks:{option:{get:function get(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ");}},select:{get:function get(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++){if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b);}}return g;},set:function set(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--){d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);}return c||(a.selectedIndex=-1),f;}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function set(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0;}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value;});});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function trigger(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==(typeof b==="undefined"?"undefined":_typeof(b))&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode){p.push(h),i=h;}i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a);}g=0;while((h=p[g++])&&!b.isPropagationStopped()){b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());}return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result;}},simulate:function simulate(a,b,c){var d=n.extend(new n.Event(),c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault();}}),n.fn.extend({trigger:function trigger(a,b){return this.each(function(){n.event.trigger(a,b,this);});},triggerHandler:function triggerHandler(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0;}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b);};}),n.fn.extend({hover:function hover(a,b){return this.mouseenter(a).mouseleave(b||a);}}),l.focusin="onfocusin" in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function c(a){n.event.simulate(b,a.target,n.event.fix(a));};n.event.special[b]={setup:function setup(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1);},teardown:function teardown(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b));}};});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"");},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=new a.DOMParser().parseFromString(b,"text/xml");}catch(d){c=void 0;}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c;};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++]){"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c);}};}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return "string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1);}),i;}return g(b.dataTypes[0])||!e["*"]&&g("*");}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b){void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);}return d&&n.extend(!0,a,d),a;}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0]){i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));}if(d)for(e in h){if(h[e]&&h[e].test(d)){i.unshift(e);break;}}if(i[0] in c)f=i[0];else {for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break;}g||(g=e);}f=f||g;}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0;}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters){j[g.toLowerCase()]=a.converters[g];}f=k.shift();while(f){if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j){if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break;}}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b);}catch(l){return {state:"parsererror",error:g?l:"No conversion from "+i+" to "+f};}}}return {state:"success",data:b};}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function ajaxSetup(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a);},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function ajax(b,c){"object"==(typeof b==="undefined"?"undefined":_typeof(b))&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function getResponseHeader(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g)){h[b[1].toLowerCase()]=b[2];}}b=h[a.toLowerCase()];}return null==b?null:b;},getAllResponseHeaders:function getAllResponseHeaders(){return 2===v?g:null;},setRequestHeader:function setRequestHeader(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this;},overrideMimeType:function overrideMimeType(a){return v||(m.mimeType=a),this;},statusCode:function statusCode(a){var b;if(a)if(2>v)for(b in a){s[b]=[s[b],a[b]];}else x.always(a[x.status]);return this;},abort:function abort(a){var b=a||w;return e&&e.abort(b),z(0,b),this;}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host;}catch(y){m.crossDomain=!0;}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers){x.setRequestHeader(l,m.headers[l]);}if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in {success:1,error:1,complete:1}){x[l](m[l]);}if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout");},m.timeout));try{v=1,e.send(t,z);}catch(y){if(!(2>v))throw y;z(-1,y);}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")));}return x;},getJSON:function getJSON(a,b,c){return n.get(a,b,c,"json");},getScript:function getScript(a,b){return n.get(a,void 0,b,"script");}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a));};}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0});},n.fn.extend({wrapAll:function wrapAll(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b));}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild){a=a.firstElementChild;}return a;}).append(this)),this);},wrapInner:function wrapInner(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b));}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a);});},wrap:function wrap(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a);});},unwrap:function unwrap(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes);}).end();}}),n.expr.filters.hidden=function(a){return !n.expr.filters.visible(a);},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0;};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==(typeof e==="undefined"?"undefined":_typeof(e))&&null!=e?b:"")+"]",e,c,d);});else if(c||"object"!==n.type(b))d(a,b);else for(e in b){Gb(a+"["+e+"]",b[e],c,d);}}n.param=function(a,b){var c,d=[],e=function e(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b);};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value);});else for(c in a){Gb(c,a[c],b,e);}return d.join("&").replace(Bb,"+");},n.fn.extend({serialize:function serialize(){return n.param(this.serializeArray());},serializeArray:function serializeArray(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this;}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a));}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return {name:b.name,value:a.replace(Db,"\r\n")};}):{name:b.name,value:c.replace(Db,"\r\n")};}).get();}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest();}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials" in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var _c3,d;return l.cors||Ib&&!b.crossDomain?{send:function send(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields){h[g]=b.xhrFields[g];}b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e){h.setRequestHeader(g,e[g]);}_c3=function c(a){return function(){_c3&&(_c3=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()));};},h.onload=_c3(),d=h.onerror=_c3("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){_c3&&d();});},_c3=_c3("abort");try{h.send(b.hasContent&&b.data||null);}catch(i){if(_c3)throw i;}},abort:function abort(){_c3&&_c3();}}:void 0;}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function textScript(a){return n.globalEval(a),a;}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET");}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,_c4;return {send:function send(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",_c4=function c(a){b.remove(),_c4=null,a&&f("error"===a.type?404:200,a.type);}),d.head.appendChild(b[0]);},abort:function abort(){_c4&&_c4();}};}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function jsonpCallback(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a;}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0];},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments;},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0;}),"script"):void 0;}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes));};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==(typeof b==="undefined"?"undefined":_typeof(b))&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a);}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a]);});}),this;},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a);};}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem;}).length;};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView;}n.offset={setOffset:function setOffset(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using" in b?b.using.call(a,m):l.css(m);}},n.fn.extend({offset:function offset(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b);});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e;},position:function position(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return "fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)};}},offsetParent:function offsetParent(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position")){a=a.offsetParent;}return a||Ea;});}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void (f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e);},a,d,arguments.length);};}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0;});}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g);},b,f?d:void 0,f,null);};});}),n.fn.extend({bind:function bind(a,b,c){return this.on(a,null,b,c);},unbind:function unbind(a,b){return this.off(a,null,b);},delegate:function delegate(a,b,c,d){return this.on(b,a,c,d);},undelegate:function undelegate(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c);},size:function size(){return this.length;}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n;});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n;},b||(a.jQuery=a.$=n),n;});},{}],3:[function(require,module,exports){'use strict';module.exports=require('react/lib/ReactDOM');},{"react/lib/ReactDOM":37}],4:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusUtils
 */'use strict';var ReactDOMComponentTree=require('./ReactDOMComponentTree');var focusNode=require('fbjs/lib/focusNode');var AutoFocusUtils={focusDOMComponent:function focusDOMComponent(){focusNode(ReactDOMComponentTree.getNodeFromInstance(this));}};module.exports=AutoFocusUtils;},{"./ReactDOMComponentTree":41,"fbjs/lib/focusNode":148}],5:[function(require,module,exports){ /**
 * Copyright 2013-present Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPropagators=require('./EventPropagators');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var FallbackCompositionState=require('./FallbackCompositionState');var SyntheticCompositionEvent=require('./SyntheticCompositionEvent');var SyntheticInputEvent=require('./SyntheticInputEvent');var keyOf=require('fbjs/lib/keyOf');var END_KEYCODES=[9,13,27,32]; // Tab, Return, Esc, Space
var START_KEYCODE=229;var canUseCompositionEvent=ExecutionEnvironment.canUseDOM&&'CompositionEvent' in window;var documentMode=null;if(ExecutionEnvironment.canUseDOM&&'documentMode' in document){documentMode=document.documentMode;} // Webkit offers a very useful `textInput` event that can be used to
// directly represent `beforeInput`. The IE `textinput` event is not as
// useful, so we don't use it.
var canUseTextInputEvent=ExecutionEnvironment.canUseDOM&&'TextEvent' in window&&!documentMode&&!isPresto(); // In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. Japanese ideographic
// spaces, for instance (\u3000) are not recorded correctly.
var useFallbackCompositionData=ExecutionEnvironment.canUseDOM&&(!canUseCompositionEvent||documentMode&&documentMode>8&&documentMode<=11); /**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */function isPresto(){var opera=window.opera;return (typeof opera==="undefined"?"undefined":_typeof(opera))==='object'&&typeof opera.version==='function'&&parseInt(opera.version(),10)<=12;}var SPACEBAR_CODE=32;var SPACEBAR_CHAR=String.fromCharCode(SPACEBAR_CODE);var topLevelTypes=EventConstants.topLevelTypes; // Events and their corresponding property names.
var eventTypes={beforeInput:{phasedRegistrationNames:{bubbled:keyOf({onBeforeInput:null}),captured:keyOf({onBeforeInputCapture:null})},dependencies:[topLevelTypes.topCompositionEnd,topLevelTypes.topKeyPress,topLevelTypes.topTextInput,topLevelTypes.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:keyOf({onCompositionEnd:null}),captured:keyOf({onCompositionEndCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionEnd,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:keyOf({onCompositionStart:null}),captured:keyOf({onCompositionStartCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionStart,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:keyOf({onCompositionUpdate:null}),captured:keyOf({onCompositionUpdateCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topCompositionUpdate,topLevelTypes.topKeyDown,topLevelTypes.topKeyPress,topLevelTypes.topKeyUp,topLevelTypes.topMouseDown]}}; // Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress=false; /**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */function isKeypressCommand(nativeEvent){return (nativeEvent.ctrlKey||nativeEvent.altKey||nativeEvent.metaKey)&& // ctrlKey && altKey is equivalent to AltGr, and is not a command.
!(nativeEvent.ctrlKey&&nativeEvent.altKey);} /**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */function getCompositionEventType(topLevelType){switch(topLevelType){case topLevelTypes.topCompositionStart:return eventTypes.compositionStart;case topLevelTypes.topCompositionEnd:return eventTypes.compositionEnd;case topLevelTypes.topCompositionUpdate:return eventTypes.compositionUpdate;}} /**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionStart(topLevelType,nativeEvent){return topLevelType===topLevelTypes.topKeyDown&&nativeEvent.keyCode===START_KEYCODE;} /**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */function isFallbackCompositionEnd(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topKeyUp: // Command keys insert or clear IME input.
return END_KEYCODES.indexOf(nativeEvent.keyCode)!==-1;case topLevelTypes.topKeyDown: // Expect IME keyCode on each keydown. If we get any other
// code we must have exited earlier.
return nativeEvent.keyCode!==START_KEYCODE;case topLevelTypes.topKeyPress:case topLevelTypes.topMouseDown:case topLevelTypes.topBlur: // Events are not possible without cancelling IME.
return true;default:return false;}} /**
 * Google Input Tools provides composition data via a CustomEvent,
 * with the `data` property populated in the `detail` object. If this
 * is available on the event object, use it. If not, this is a plain
 * composition event and we have nothing special to extract.
 *
 * @param {object} nativeEvent
 * @return {?string}
 */function getDataFromCustomEvent(nativeEvent){var detail=nativeEvent.detail;if((typeof detail==="undefined"?"undefined":_typeof(detail))==='object'&&'data' in detail){return detail.data;}return null;} // Track the current IME composition fallback object, if any.
var currentComposition=null; /**
 * @return {?object} A SyntheticCompositionEvent.
 */function extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var eventType;var fallbackData;if(canUseCompositionEvent){eventType=getCompositionEventType(topLevelType);}else if(!currentComposition){if(isFallbackCompositionStart(topLevelType,nativeEvent)){eventType=eventTypes.compositionStart;}}else if(isFallbackCompositionEnd(topLevelType,nativeEvent)){eventType=eventTypes.compositionEnd;}if(!eventType){return null;}if(useFallbackCompositionData){ // The current composition is stored statically and must not be
// overwritten while composition continues.
if(!currentComposition&&eventType===eventTypes.compositionStart){currentComposition=FallbackCompositionState.getPooled(nativeEventTarget);}else if(eventType===eventTypes.compositionEnd){if(currentComposition){fallbackData=currentComposition.getData();}}}var event=SyntheticCompositionEvent.getPooled(eventType,targetInst,nativeEvent,nativeEventTarget);if(fallbackData){ // Inject data generated from fallback path into the synthetic event.
// This matches the property of native CompositionEventInterface.
event.data=fallbackData;}else {var customData=getDataFromCustomEvent(nativeEvent);if(customData!==null){event.data=customData;}}EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The string corresponding to this `beforeInput` event.
 */function getNativeBeforeInputChars(topLevelType,nativeEvent){switch(topLevelType){case topLevelTypes.topCompositionEnd:return getDataFromCustomEvent(nativeEvent);case topLevelTypes.topKeyPress: /**
       * If native `textInput` events are available, our goal is to make
       * use of them. However, there is a special case: the spacebar key.
       * In Webkit, preventing default on a spacebar `textInput` event
       * cancels character insertion, but it *also* causes the browser
       * to fall back to its default spacebar behavior of scrolling the
       * page.
       *
       * Tracking at:
       * https://code.google.com/p/chromium/issues/detail?id=355103
       *
       * To avoid this issue, use the keypress event as if no `textInput`
       * event is available.
       */var which=nativeEvent.which;if(which!==SPACEBAR_CODE){return null;}hasSpaceKeypress=true;return SPACEBAR_CHAR;case topLevelTypes.topTextInput: // Record the characters to be added to the DOM.
var chars=nativeEvent.data; // If it's a spacebar character, assume that we have already handled
// it at the keypress level and bail immediately. Android Chrome
// doesn't give us keycodes, so we need to blacklist it.
if(chars===SPACEBAR_CHAR&&hasSpaceKeypress){return null;}return chars;default: // For other native event types, do nothing.
return null;}} /**
 * For browsers that do not provide the `textInput` event, extract the
 * appropriate string to use for SyntheticInputEvent.
 *
 * @param {string} topLevelType Record from `EventConstants`.
 * @param {object} nativeEvent Native browser event.
 * @return {?string} The fallback string for this `beforeInput` event.
 */function getFallbackBeforeInputChars(topLevelType,nativeEvent){ // If we are currently composing (IME) and using a fallback to do so,
// try to extract the composed characters from the fallback object.
if(currentComposition){if(topLevelType===topLevelTypes.topCompositionEnd||isFallbackCompositionEnd(topLevelType,nativeEvent)){var chars=currentComposition.getData();FallbackCompositionState.release(currentComposition);currentComposition=null;return chars;}return null;}switch(topLevelType){case topLevelTypes.topPaste: // If a paste event occurs after a keypress, throw out the input
// chars. Paste events should not lead to BeforeInput events.
return null;case topLevelTypes.topKeyPress: /**
       * As of v27, Firefox may fire keypress events even when no character
       * will be inserted. A few possibilities:
       *
       * - `which` is `0`. Arrow keys, Esc key, etc.
       *
       * - `which` is the pressed key code, but no char is available.
       *   Ex: 'AltGr + d` in Polish. There is no modified character for
       *   this key combination and no character is inserted into the
       *   document, but FF fires the keypress for char code `100` anyway.
       *   No `input` event will occur.
       *
       * - `which` is the pressed key code, but a command combination is
       *   being used. Ex: `Cmd+C`. No character is inserted, and no
       *   `input` event will occur.
       */if(nativeEvent.which&&!isKeypressCommand(nativeEvent)){return String.fromCharCode(nativeEvent.which);}return null;case topLevelTypes.topCompositionEnd:return useFallbackCompositionData?null:nativeEvent.data;default:return null;}} /**
 * Extract a SyntheticInputEvent for `beforeInput`, based on either native
 * `textInput` or fallback behavior.
 *
 * @return {?object} A SyntheticInputEvent.
 */function extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget){var chars;if(canUseTextInputEvent){chars=getNativeBeforeInputChars(topLevelType,nativeEvent);}else {chars=getFallbackBeforeInputChars(topLevelType,nativeEvent);} // If no characters are being inserted, no BeforeInput event should
// be fired.
if(!chars){return null;}var event=SyntheticInputEvent.getPooled(eventTypes.beforeInput,targetInst,nativeEvent,nativeEventTarget);event.data=chars;EventPropagators.accumulateTwoPhaseDispatches(event);return event;} /**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 *
 * This plugin is also responsible for emitting `composition` events, thus
 * allowing us to share composition fallback code for both `beforeInput` and
 * `composition` event types.
 */var BeforeInputEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){return [extractCompositionEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget),extractBeforeInputEvent(topLevelType,targetInst,nativeEvent,nativeEventTarget)];}};module.exports=BeforeInputEventPlugin;},{"./EventConstants":18,"./EventPropagators":22,"./FallbackCompositionState":23,"./SyntheticCompositionEvent":97,"./SyntheticInputEvent":101,"fbjs/lib/ExecutionEnvironment":140,"fbjs/lib/keyOf":158}],6:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */'use strict'; /**
 * CSS properties which accept numbers but are not in units of "px".
 */var isUnitlessNumber={animationIterationCount:true,borderImageOutset:true,borderImageSlice:true,borderImageWidth:true,boxFlex:true,boxFlexGroup:true,boxOrdinalGroup:true,columnCount:true,flex:true,flexGrow:true,flexPositive:true,flexShrink:true,flexNegative:true,flexOrder:true,gridRow:true,gridColumn:true,fontWeight:true,lineClamp:true,lineHeight:true,opacity:true,order:true,orphans:true,tabSize:true,widows:true,zIndex:true,zoom:true, // SVG-related properties
fillOpacity:true,floodOpacity:true,stopOpacity:true,strokeDasharray:true,strokeDashoffset:true,strokeMiterlimit:true,strokeOpacity:true,strokeWidth:true}; /**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */function prefixKey(prefix,key){return prefix+key.charAt(0).toUpperCase()+key.substring(1);} /**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */var prefixes=['Webkit','ms','Moz','O']; // Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop){prefixes.forEach(function(prefix){isUnitlessNumber[prefixKey(prefix,prop)]=isUnitlessNumber[prop];});}); /**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */var shorthandPropertyExpansions={background:{backgroundAttachment:true,backgroundColor:true,backgroundImage:true,backgroundPositionX:true,backgroundPositionY:true,backgroundRepeat:true},backgroundPosition:{backgroundPositionX:true,backgroundPositionY:true},border:{borderWidth:true,borderStyle:true,borderColor:true},borderBottom:{borderBottomWidth:true,borderBottomStyle:true,borderBottomColor:true},borderLeft:{borderLeftWidth:true,borderLeftStyle:true,borderLeftColor:true},borderRight:{borderRightWidth:true,borderRightStyle:true,borderRightColor:true},borderTop:{borderTopWidth:true,borderTopStyle:true,borderTopColor:true},font:{fontStyle:true,fontVariant:true,fontWeight:true,fontSize:true,lineHeight:true,fontFamily:true},outline:{outlineWidth:true,outlineStyle:true,outlineColor:true}};var CSSProperty={isUnitlessNumber:isUnitlessNumber,shorthandPropertyExpansions:shorthandPropertyExpansions};module.exports=CSSProperty;},{}],7:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 */'use strict';var CSSProperty=require('./CSSProperty');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var ReactPerf=require('./ReactPerf');var camelizeStyleName=require('fbjs/lib/camelizeStyleName');var dangerousStyleValue=require('./dangerousStyleValue');var hyphenateStyleName=require('fbjs/lib/hyphenateStyleName');var memoizeStringOnly=require('fbjs/lib/memoizeStringOnly');var warning=require('fbjs/lib/warning');var processStyleName=memoizeStringOnly(function(styleName){return hyphenateStyleName(styleName);});var hasShorthandPropertyBug=false;var styleFloatAccessor='cssFloat';if(ExecutionEnvironment.canUseDOM){var tempStyle=document.createElement('div').style;try{ // IE8 throws "Invalid argument." if resetting shorthand style properties.
tempStyle.font='';}catch(e){hasShorthandPropertyBug=true;} // IE8 only supports accessing cssFloat (standard) as styleFloat
if(document.documentElement.style.cssFloat===undefined){styleFloatAccessor='styleFloat';}}if("development"!=='production'){ // 'msTransform' is correct, but the other prefixes should be capitalized
var badVendoredStyleNamePattern=/^(?:webkit|moz|o)[A-Z]/; // style values shouldn't contain a semicolon
var badStyleValueWithSemicolonPattern=/;\s*$/;var warnedStyleNames={};var warnedStyleValues={};var warnedForNaNValue=false;var warnHyphenatedStyleName=function warnHyphenatedStyleName(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;"development"!=='production'?warning(false,'Unsupported style property %s. Did you mean %s?%s',name,camelizeStyleName(name),checkRenderMessage(owner)):void 0;};var warnBadVendoredStyleName=function warnBadVendoredStyleName(name,owner){if(warnedStyleNames.hasOwnProperty(name)&&warnedStyleNames[name]){return;}warnedStyleNames[name]=true;"development"!=='production'?warning(false,'Unsupported vendor-prefixed style property %s. Did you mean %s?%s',name,name.charAt(0).toUpperCase()+name.slice(1),checkRenderMessage(owner)):void 0;};var warnStyleValueWithSemicolon=function warnStyleValueWithSemicolon(name,value,owner){if(warnedStyleValues.hasOwnProperty(value)&&warnedStyleValues[value]){return;}warnedStyleValues[value]=true;"development"!=='production'?warning(false,'Style property values shouldn\'t contain a semicolon.%s '+'Try "%s: %s" instead.',checkRenderMessage(owner),name,value.replace(badStyleValueWithSemicolonPattern,'')):void 0;};var warnStyleValueIsNaN=function warnStyleValueIsNaN(name,value,owner){if(warnedForNaNValue){return;}warnedForNaNValue=true;"development"!=='production'?warning(false,'`NaN` is an invalid value for the `%s` css style property.%s',name,checkRenderMessage(owner)):void 0;};var checkRenderMessage=function checkRenderMessage(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';}; /**
   * @param {string} name
   * @param {*} value
   * @param {ReactDOMComponent} component
   */var warnValidStyle=function warnValidStyle(name,value,component){var owner;if(component){owner=component._currentElement._owner;}if(name.indexOf('-')>-1){warnHyphenatedStyleName(name,owner);}else if(badVendoredStyleNamePattern.test(name)){warnBadVendoredStyleName(name,owner);}else if(badStyleValueWithSemicolonPattern.test(value)){warnStyleValueWithSemicolon(name,value,owner);}if(typeof value==='number'&&isNaN(value)){warnStyleValueIsNaN(name,value,owner);}};} /**
 * Operations for dealing with CSS properties.
 */var CSSPropertyOperations={ /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @param {ReactDOMComponent} component
   * @return {?string}
   */createMarkupForStyles:function createMarkupForStyles(styles,component){var serialized='';for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}var styleValue=styles[styleName];if("development"!=='production'){warnValidStyle(styleName,styleValue,component);}if(styleValue!=null){serialized+=processStyleName(styleName)+':';serialized+=dangerousStyleValue(styleName,styleValue,component)+';';}}return serialized||null;}, /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   * @param {ReactDOMComponent} component
   */setValueForStyles:function setValueForStyles(node,styles,component){var style=node.style;for(var styleName in styles){if(!styles.hasOwnProperty(styleName)){continue;}if("development"!=='production'){warnValidStyle(styleName,styles[styleName],component);}var styleValue=dangerousStyleValue(styleName,styles[styleName],component);if(styleName==='float'||styleName==='cssFloat'){styleName=styleFloatAccessor;}if(styleValue){style[styleName]=styleValue;}else {var expansion=hasShorthandPropertyBug&&CSSProperty.shorthandPropertyExpansions[styleName];if(expansion){ // Shorthand property that IE8 won't like unsetting, so unset each
// component to placate it
for(var individualStyleName in expansion){style[individualStyleName]='';}}else {style[styleName]='';}}}}};ReactPerf.measureMethods(CSSPropertyOperations,'CSSPropertyOperations',{setValueForStyles:'setValueForStyles'});module.exports=CSSPropertyOperations;},{"./CSSProperty":6,"./ReactPerf":82,"./dangerousStyleValue":114,"fbjs/lib/ExecutionEnvironment":140,"fbjs/lib/camelizeStyleName":142,"fbjs/lib/hyphenateStyleName":153,"fbjs/lib/memoizeStringOnly":160,"fbjs/lib/warning":164}],8:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */'use strict';var _assign=require('object-assign');var PooledClass=require('./PooledClass');var invariant=require('fbjs/lib/invariant'); /**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */function CallbackQueue(){this._callbacks=null;this._contexts=null;}_assign(CallbackQueue.prototype,{ /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */enqueue:function enqueue(callback,context){this._callbacks=this._callbacks||[];this._contexts=this._contexts||[];this._callbacks.push(callback);this._contexts.push(context);}, /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */notifyAll:function notifyAll(){var callbacks=this._callbacks;var contexts=this._contexts;if(callbacks){!(callbacks.length===contexts.length)?"development"!=='production'?invariant(false,'Mismatched list of contexts in callback queue'):invariant(false):void 0;this._callbacks=null;this._contexts=null;for(var i=0;i<callbacks.length;i++){callbacks[i].call(contexts[i]);}callbacks.length=0;contexts.length=0;}},checkpoint:function checkpoint(){return this._callbacks?this._callbacks.length:0;},rollback:function rollback(len){if(this._callbacks){this._callbacks.length=len;this._contexts.length=len;}}, /**
   * Resets the internal queue.
   *
   * @internal
   */reset:function reset(){this._callbacks=null;this._contexts=null;}, /**
   * `PooledClass` looks for this.
   */destructor:function destructor(){this.reset();}});PooledClass.addPoolingTo(CallbackQueue);module.exports=CallbackQueue;},{"./PooledClass":26,"fbjs/lib/invariant":154,"object-assign":165}],9:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPluginHub=require('./EventPluginHub');var EventPropagators=require('./EventPropagators');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var SyntheticEvent=require('./SyntheticEvent');var getEventTarget=require('./getEventTarget');var isEventSupported=require('./isEventSupported');var isTextInputElement=require('./isTextInputElement');var keyOf=require('fbjs/lib/keyOf');var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={change:{phasedRegistrationNames:{bubbled:keyOf({onChange:null}),captured:keyOf({onChangeCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topChange,topLevelTypes.topClick,topLevelTypes.topFocus,topLevelTypes.topInput,topLevelTypes.topKeyDown,topLevelTypes.topKeyUp,topLevelTypes.topSelectionChange]}}; /**
 * For IE shims
 */var activeElement=null;var activeElementInst=null;var activeElementValue=null;var activeElementValueProp=null; /**
 * SECTION: handle `change` event
 */function shouldUseChangeEvent(elem){var nodeName=elem.nodeName&&elem.nodeName.toLowerCase();return nodeName==='select'||nodeName==='input'&&elem.type==='file';}var doesChangeEventBubble=false;if(ExecutionEnvironment.canUseDOM){ // See `handleChange` comment below
doesChangeEventBubble=isEventSupported('change')&&(!('documentMode' in document)||document.documentMode>8);}function manualDispatchChangeEvent(nativeEvent){var event=SyntheticEvent.getPooled(eventTypes.change,activeElementInst,nativeEvent,getEventTarget(nativeEvent));EventPropagators.accumulateTwoPhaseDispatches(event); // If change and propertychange bubbled, we'd just bind to it like all the
// other events and have it go through ReactBrowserEventEmitter. Since it
// doesn't, we manually listen for the events and so we have to enqueue and
// process the abstract event manually.
//
// Batching is necessary here in order to ensure that all event handlers run
// before the next rerender (including event handlers attached to ancestor
// elements instead of directly on the input). Without this, controlled
// components don't work properly in conjunction with event bubbling because
// the component is rerendered and the value reverted before all the event
// handlers can run. See https://github.com/facebook/react/issues/708.
ReactUpdates.batchedUpdates(runEventInBatch,event);}function runEventInBatch(event){EventPluginHub.enqueueEvents(event);EventPluginHub.processEventQueue(false);}function startWatchingForChangeEventIE8(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElement.attachEvent('onchange',manualDispatchChangeEvent);}function stopWatchingForChangeEventIE8(){if(!activeElement){return;}activeElement.detachEvent('onchange',manualDispatchChangeEvent);activeElement=null;activeElementInst=null;}function getTargetInstForChangeEvent(topLevelType,targetInst){if(topLevelType===topLevelTypes.topChange){return targetInst;}}function handleEventsForChangeEventIE8(topLevelType,target,targetInst){if(topLevelType===topLevelTypes.topFocus){ // stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForChangeEventIE8();startWatchingForChangeEventIE8(target,targetInst);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForChangeEventIE8();}} /**
 * SECTION: handle `input` event
 */var isInputEventSupported=false;if(ExecutionEnvironment.canUseDOM){ // IE9 claims to support the input event but fails to trigger it when
// deleting text, so we ignore its input events.
// IE10+ fire input events to often, such when a placeholder
// changes or when an input with a placeholder is focused.
isInputEventSupported=isEventSupported('input')&&(!('documentMode' in document)||document.documentMode>11);} /**
 * (For IE <=11) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */var newValueProp={get:function get(){return activeElementValueProp.get.call(this);},set:function set(val){ // Cast to a string so we can do equality checks.
activeElementValue=''+val;activeElementValueProp.set.call(this,val);}}; /**
 * (For IE <=11) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */function startWatchingForValueChange(target,targetInst){activeElement=target;activeElementInst=targetInst;activeElementValue=target.value;activeElementValueProp=Object.getOwnPropertyDescriptor(target.constructor.prototype,'value'); // Not guarded in a canDefineProperty check: IE8 supports defineProperty only
// on DOM elements
Object.defineProperty(activeElement,'value',newValueProp);if(activeElement.attachEvent){activeElement.attachEvent('onpropertychange',handlePropertyChange);}else {activeElement.addEventListener('propertychange',handlePropertyChange,false);}} /**
 * (For IE <=11) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */function stopWatchingForValueChange(){if(!activeElement){return;} // delete restores the original property definition
delete activeElement.value;if(activeElement.detachEvent){activeElement.detachEvent('onpropertychange',handlePropertyChange);}else {activeElement.removeEventListener('propertychange',handlePropertyChange,false);}activeElement=null;activeElementInst=null;activeElementValue=null;activeElementValueProp=null;} /**
 * (For IE <=11) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */function handlePropertyChange(nativeEvent){if(nativeEvent.propertyName!=='value'){return;}var value=nativeEvent.srcElement.value;if(value===activeElementValue){return;}activeElementValue=value;manualDispatchChangeEvent(nativeEvent);} /**
 * If a `change` event should be fired, returns the target's ID.
 */function getTargetInstForInputEvent(topLevelType,targetInst){if(topLevelType===topLevelTypes.topInput){ // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
// what we want so fall through here and trigger an abstract event
return targetInst;}}function handleEventsForInputEventIE(topLevelType,target,targetInst){if(topLevelType===topLevelTypes.topFocus){ // In IE8, we can capture almost all .value changes by adding a
// propertychange handler and looking for events with propertyName
// equal to 'value'
// In IE9-11, propertychange fires for most input events but is buggy and
// doesn't fire when text is deleted, but conveniently, selectionchange
// appears to fire in all of the remaining cases so we catch those and
// forward the event if the value has changed
// In either case, we don't want to call the event handler if the value
// is changed from JS so we redefine a setter for `.value` that updates
// our activeElementValue variable, allowing us to ignore those changes
//
// stopWatching() should be a noop here but we call it just in case we
// missed a blur event somehow.
stopWatchingForValueChange();startWatchingForValueChange(target,targetInst);}else if(topLevelType===topLevelTypes.topBlur){stopWatchingForValueChange();}} // For IE8 and IE9.
function getTargetInstForInputEventIE(topLevelType,targetInst){if(topLevelType===topLevelTypes.topSelectionChange||topLevelType===topLevelTypes.topKeyUp||topLevelType===topLevelTypes.topKeyDown){ // On the selectionchange event, the target is just document which isn't
// helpful for us so just check activeElement instead.
//
// 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
// propertychange on the first input event after setting `value` from a
// script and fires only keydown, keypress, keyup. Catching keyup usually
// gets it and catching keydown lets us fire an event for the first
// keystroke if user does a key repeat (it'll be a little delayed: right
// before the second keystroke). Other input methods (e.g., paste) seem to
// fire selectionchange normally.
if(activeElement&&activeElement.value!==activeElementValue){activeElementValue=activeElement.value;return activeElementInst;}}} /**
 * SECTION: handle `click` event
 */function shouldUseClickEvent(elem){ // Use the `click` event to detect changes to checkbox and radio inputs.
// This approach works across all browsers, whereas `change` does not fire
// until `blur` in IE8.
return elem.nodeName&&elem.nodeName.toLowerCase()==='input'&&(elem.type==='checkbox'||elem.type==='radio');}function getTargetInstForClickEvent(topLevelType,targetInst){if(topLevelType===topLevelTypes.topClick){return targetInst;}} /**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */var ChangeEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var targetNode=targetInst?ReactDOMComponentTree.getNodeFromInstance(targetInst):window;var getTargetInstFunc,handleEventFunc;if(shouldUseChangeEvent(targetNode)){if(doesChangeEventBubble){getTargetInstFunc=getTargetInstForChangeEvent;}else {handleEventFunc=handleEventsForChangeEventIE8;}}else if(isTextInputElement(targetNode)){if(isInputEventSupported){getTargetInstFunc=getTargetInstForInputEvent;}else {getTargetInstFunc=getTargetInstForInputEventIE;handleEventFunc=handleEventsForInputEventIE;}}else if(shouldUseClickEvent(targetNode)){getTargetInstFunc=getTargetInstForClickEvent;}if(getTargetInstFunc){var inst=getTargetInstFunc(topLevelType,targetInst);if(inst){var event=SyntheticEvent.getPooled(eventTypes.change,inst,nativeEvent,nativeEventTarget);event.type='change';EventPropagators.accumulateTwoPhaseDispatches(event);return event;}}if(handleEventFunc){handleEventFunc(topLevelType,targetNode,targetInst);}}};module.exports=ChangeEventPlugin;},{"./EventConstants":18,"./EventPluginHub":19,"./EventPropagators":22,"./ReactDOMComponentTree":41,"./ReactUpdates":90,"./SyntheticEvent":99,"./getEventTarget":122,"./isEventSupported":129,"./isTextInputElement":130,"fbjs/lib/ExecutionEnvironment":140,"fbjs/lib/keyOf":158}],10:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 */'use strict';var DOMLazyTree=require('./DOMLazyTree');var Danger=require('./Danger');var ReactMultiChildUpdateTypes=require('./ReactMultiChildUpdateTypes');var ReactPerf=require('./ReactPerf');var createMicrosoftUnsafeLocalFunction=require('./createMicrosoftUnsafeLocalFunction');var setInnerHTML=require('./setInnerHTML');var setTextContent=require('./setTextContent');function getNodeAfter(parentNode,node){ // Special case for text components, which return [open, close] comments
// from getNativeNode.
if(Array.isArray(node)){node=node[1];}return node?node.nextSibling:parentNode.firstChild;} /**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */var insertChildAt=createMicrosoftUnsafeLocalFunction(function(parentNode,childNode,referenceNode){ // We rely exclusively on `insertBefore(node, null)` instead of also using
// `appendChild(node)`. (Using `undefined` is not allowed by all browsers so
// we are careful to use `null`.)
parentNode.insertBefore(childNode,referenceNode);});function insertLazyTreeChildAt(parentNode,childTree,referenceNode){DOMLazyTree.insertTreeBefore(parentNode,childTree,referenceNode);}function moveChild(parentNode,childNode,referenceNode){if(Array.isArray(childNode)){moveDelimitedText(parentNode,childNode[0],childNode[1],referenceNode);}else {insertChildAt(parentNode,childNode,referenceNode);}}function removeChild(parentNode,childNode){if(Array.isArray(childNode)){var closingComment=childNode[1];childNode=childNode[0];removeDelimitedText(parentNode,childNode,closingComment);parentNode.removeChild(closingComment);}parentNode.removeChild(childNode);}function moveDelimitedText(parentNode,openingComment,closingComment,referenceNode){var node=openingComment;while(true){var nextNode=node.nextSibling;insertChildAt(parentNode,node,referenceNode);if(node===closingComment){break;}node=nextNode;}}function removeDelimitedText(parentNode,startNode,closingComment){while(true){var node=startNode.nextSibling;if(node===closingComment){ // The closing comment is removed by ReactMultiChild.
break;}else {parentNode.removeChild(node);}}}function replaceDelimitedText(openingComment,closingComment,stringText){var parentNode=openingComment.parentNode;var nodeAfterComment=openingComment.nextSibling;if(nodeAfterComment===closingComment){ // There are no text nodes between the opening and closing comments; insert
// a new one if stringText isn't empty.
if(stringText){insertChildAt(parentNode,document.createTextNode(stringText),nodeAfterComment);}}else {if(stringText){ // Set the text content of the first node after the opening comment, and
// remove all following nodes up until the closing comment.
setTextContent(nodeAfterComment,stringText);removeDelimitedText(parentNode,nodeAfterComment,closingComment);}else {removeDelimitedText(parentNode,openingComment,closingComment);}}} /**
 * Operations for updating with DOM children.
 */var DOMChildrenOperations={dangerouslyReplaceNodeWithMarkup:Danger.dangerouslyReplaceNodeWithMarkup,replaceDelimitedText:replaceDelimitedText, /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */processUpdates:function processUpdates(parentNode,updates){for(var k=0;k<updates.length;k++){var update=updates[k];switch(update.type){case ReactMultiChildUpdateTypes.INSERT_MARKUP:insertLazyTreeChildAt(parentNode,update.content,getNodeAfter(parentNode,update.afterNode));break;case ReactMultiChildUpdateTypes.MOVE_EXISTING:moveChild(parentNode,update.fromNode,getNodeAfter(parentNode,update.afterNode));break;case ReactMultiChildUpdateTypes.SET_MARKUP:setInnerHTML(parentNode,update.content);break;case ReactMultiChildUpdateTypes.TEXT_CONTENT:setTextContent(parentNode,update.content);break;case ReactMultiChildUpdateTypes.REMOVE_NODE:removeChild(parentNode,update.fromNode);break;}}}};ReactPerf.measureMethods(DOMChildrenOperations,'DOMChildrenOperations',{replaceDelimitedText:'replaceDelimitedText'});module.exports=DOMChildrenOperations;},{"./DOMLazyTree":11,"./Danger":15,"./ReactMultiChildUpdateTypes":77,"./ReactPerf":82,"./createMicrosoftUnsafeLocalFunction":113,"./setInnerHTML":134,"./setTextContent":135}],11:[function(require,module,exports){ /**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMLazyTree
 */'use strict';var createMicrosoftUnsafeLocalFunction=require('./createMicrosoftUnsafeLocalFunction');var setTextContent=require('./setTextContent'); /**
 * In IE (8-11) and Edge, appending nodes with no children is dramatically
 * faster than appending a full subtree, so we essentially queue up the
 * .appendChild calls here and apply them so each node is added to its parent
 * before any children are added.
 *
 * In other browsers, doing so is slower or neutral compared to the other order
 * (in Firefox, twice as slow) so we only do this inversion in IE.
 *
 * See https://github.com/spicyj/innerhtml-vs-createelement-vs-clonenode.
 */var enableLazy=typeof document!=='undefined'&&typeof document.documentMode==='number'||typeof navigator!=='undefined'&&typeof navigator.userAgent==='string'&&/\bEdge\/\d/.test(navigator.userAgent);function insertTreeChildren(tree){if(!enableLazy){return;}var node=tree.node;var children=tree.children;if(children.length){for(var i=0;i<children.length;i++){insertTreeBefore(node,children[i],null);}}else if(tree.html!=null){node.innerHTML=tree.html;}else if(tree.text!=null){setTextContent(node,tree.text);}}var insertTreeBefore=createMicrosoftUnsafeLocalFunction(function(parentNode,tree,referenceNode){ // DocumentFragments aren't actually part of the DOM after insertion so
// appending children won't update the DOM. We need to ensure the fragment
// is properly populated first, breaking out of our lazy approach for just
// this level.
if(tree.node.nodeType===11){insertTreeChildren(tree);parentNode.insertBefore(tree.node,referenceNode);}else {parentNode.insertBefore(tree.node,referenceNode);insertTreeChildren(tree);}});function replaceChildWithTree(oldNode,newTree){oldNode.parentNode.replaceChild(newTree.node,oldNode);insertTreeChildren(newTree);}function queueChild(parentTree,childTree){if(enableLazy){parentTree.children.push(childTree);}else {parentTree.node.appendChild(childTree.node);}}function queueHTML(tree,html){if(enableLazy){tree.html=html;}else {tree.node.innerHTML=html;}}function queueText(tree,text){if(enableLazy){tree.text=text;}else {setTextContent(tree.node,text);}}function DOMLazyTree(node){return {node:node,children:[],html:null,text:null};}DOMLazyTree.insertTreeBefore=insertTreeBefore;DOMLazyTree.replaceChildWithTree=replaceChildWithTree;DOMLazyTree.queueChild=queueChild;DOMLazyTree.queueHTML=queueHTML;DOMLazyTree.queueText=queueText;module.exports=DOMLazyTree;},{"./createMicrosoftUnsafeLocalFunction":113,"./setTextContent":135}],12:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMNamespaces
 */'use strict';var DOMNamespaces={html:'http://www.w3.org/1999/xhtml',mathml:'http://www.w3.org/1998/Math/MathML',svg:'http://www.w3.org/2000/svg'};module.exports=DOMNamespaces;},{}],13:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 */'use strict';var invariant=require('fbjs/lib/invariant');function checkMask(value,bitmask){return (value&bitmask)===bitmask;}var DOMPropertyInjection={ /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */MUST_USE_PROPERTY:0x1,HAS_SIDE_EFFECTS:0x2,HAS_BOOLEAN_VALUE:0x4,HAS_NUMERIC_VALUE:0x8,HAS_POSITIVE_NUMERIC_VALUE:0x10|0x8,HAS_OVERLOADED_BOOLEAN_VALUE:0x20, /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMAttributeNamespaces: object mapping React attribute name to the DOM
   * attribute namespace URL. (Attribute names not specified use no namespace.)
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */injectDOMPropertyConfig:function injectDOMPropertyConfig(domPropertyConfig){var Injection=DOMPropertyInjection;var Properties=domPropertyConfig.Properties||{};var DOMAttributeNamespaces=domPropertyConfig.DOMAttributeNamespaces||{};var DOMAttributeNames=domPropertyConfig.DOMAttributeNames||{};var DOMPropertyNames=domPropertyConfig.DOMPropertyNames||{};var DOMMutationMethods=domPropertyConfig.DOMMutationMethods||{};if(domPropertyConfig.isCustomAttribute){DOMProperty._isCustomAttributeFunctions.push(domPropertyConfig.isCustomAttribute);}for(var propName in Properties){!!DOMProperty.properties.hasOwnProperty(propName)?"development"!=='production'?invariant(false,'injectDOMPropertyConfig(...): You\'re trying to inject DOM property '+'\'%s\' which has already been injected. You may be accidentally '+'injecting the same DOM property config twice, or you may be '+'injecting two configs that have conflicting property names.',propName):invariant(false):void 0;var lowerCased=propName.toLowerCase();var propConfig=Properties[propName];var propertyInfo={attributeName:lowerCased,attributeNamespace:null,propertyName:propName,mutationMethod:null,mustUseProperty:checkMask(propConfig,Injection.MUST_USE_PROPERTY),hasSideEffects:checkMask(propConfig,Injection.HAS_SIDE_EFFECTS),hasBooleanValue:checkMask(propConfig,Injection.HAS_BOOLEAN_VALUE),hasNumericValue:checkMask(propConfig,Injection.HAS_NUMERIC_VALUE),hasPositiveNumericValue:checkMask(propConfig,Injection.HAS_POSITIVE_NUMERIC_VALUE),hasOverloadedBooleanValue:checkMask(propConfig,Injection.HAS_OVERLOADED_BOOLEAN_VALUE)};!(propertyInfo.mustUseProperty||!propertyInfo.hasSideEffects)?"development"!=='production'?invariant(false,'DOMProperty: Properties that have side effects must use property: %s',propName):invariant(false):void 0;!(propertyInfo.hasBooleanValue+propertyInfo.hasNumericValue+propertyInfo.hasOverloadedBooleanValue<=1)?"development"!=='production'?invariant(false,'DOMProperty: Value can be one of boolean, overloaded boolean, or '+'numeric value, but not a combination: %s',propName):invariant(false):void 0;if("development"!=='production'){DOMProperty.getPossibleStandardName[lowerCased]=propName;}if(DOMAttributeNames.hasOwnProperty(propName)){var attributeName=DOMAttributeNames[propName];propertyInfo.attributeName=attributeName;if("development"!=='production'){DOMProperty.getPossibleStandardName[attributeName]=propName;}}if(DOMAttributeNamespaces.hasOwnProperty(propName)){propertyInfo.attributeNamespace=DOMAttributeNamespaces[propName];}if(DOMPropertyNames.hasOwnProperty(propName)){propertyInfo.propertyName=DOMPropertyNames[propName];}if(DOMMutationMethods.hasOwnProperty(propName)){propertyInfo.mutationMethod=DOMMutationMethods[propName];}DOMProperty.properties[propName]=propertyInfo;}}}; /* eslint-disable max-len */var ATTRIBUTE_NAME_START_CHAR=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD"; /* eslint-enable max-len */ /**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */var DOMProperty={ID_ATTRIBUTE_NAME:'data-reactid',ROOT_ATTRIBUTE_NAME:'data-reactroot',ATTRIBUTE_NAME_START_CHAR:ATTRIBUTE_NAME_START_CHAR,ATTRIBUTE_NAME_CHAR:ATTRIBUTE_NAME_START_CHAR+"\\-.0-9\\uB7\\u0300-\\u036F\\u203F-\\u2040", /**
   * Map from property "standard name" to an object with info about how to set
   * the property in the DOM. Each object contains:
   *
   * attributeName:
   *   Used when rendering markup or with `*Attribute()`.
   * attributeNamespace
   * propertyName:
   *   Used on DOM node instances. (This includes properties that mutate due to
   *   external factors.)
   * mutationMethod:
   *   If non-null, used instead of the property or `setAttribute()` after
   *   initial render.
   * mustUseProperty:
   *   Whether the property must be accessed and mutated as an object property.
   * hasSideEffects:
   *   Whether or not setting a value causes side effects such as triggering
   *   resources to be loaded or text selection changes. If true, we read from
   *   the DOM before updating to ensure that the value is only set if it has
   *   changed.
   * hasBooleanValue:
   *   Whether the property should be removed when set to a falsey value.
   * hasNumericValue:
   *   Whether the property must be numeric or parse as a numeric and should be
   *   removed when set to a falsey value.
   * hasPositiveNumericValue:
   *   Whether the property must be positive numeric or parse as a positive
   *   numeric and should be removed when set to a falsey value.
   * hasOverloadedBooleanValue:
   *   Whether the property can be used as a flag as well as with a value.
   *   Removed when strictly equal to false; present without a value when
   *   strictly equal to true; present with a value otherwise.
   */properties:{}, /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties. Available only in __DEV__.
   * @type {Object}
   */getPossibleStandardName:"development"!=='production'?{}:null, /**
   * All of the isCustomAttribute() functions that have been injected.
   */_isCustomAttributeFunctions:[], /**
   * Checks whether a property name is a custom attribute.
   * @method
   */isCustomAttribute:function isCustomAttribute(attributeName){for(var i=0;i<DOMProperty._isCustomAttributeFunctions.length;i++){var isCustomAttributeFn=DOMProperty._isCustomAttributeFunctions[i];if(isCustomAttributeFn(attributeName)){return true;}}return false;},injection:DOMPropertyInjection};module.exports=DOMProperty;},{"fbjs/lib/invariant":154}],14:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 */'use strict';var DOMProperty=require('./DOMProperty');var ReactDOMInstrumentation=require('./ReactDOMInstrumentation');var ReactPerf=require('./ReactPerf');var quoteAttributeValueForBrowser=require('./quoteAttributeValueForBrowser');var warning=require('fbjs/lib/warning');var VALID_ATTRIBUTE_NAME_REGEX=new RegExp('^['+DOMProperty.ATTRIBUTE_NAME_START_CHAR+']['+DOMProperty.ATTRIBUTE_NAME_CHAR+']*$');var illegalAttributeNameCache={};var validatedAttributeNameCache={};function isAttributeNameSafe(attributeName){if(validatedAttributeNameCache.hasOwnProperty(attributeName)){return true;}if(illegalAttributeNameCache.hasOwnProperty(attributeName)){return false;}if(VALID_ATTRIBUTE_NAME_REGEX.test(attributeName)){validatedAttributeNameCache[attributeName]=true;return true;}illegalAttributeNameCache[attributeName]=true;"development"!=='production'?warning(false,'Invalid attribute name: `%s`',attributeName):void 0;return false;}function shouldIgnoreValue(propertyInfo,value){return value==null||propertyInfo.hasBooleanValue&&!value||propertyInfo.hasNumericValue&&isNaN(value)||propertyInfo.hasPositiveNumericValue&&value<1||propertyInfo.hasOverloadedBooleanValue&&value===false;} /**
 * Operations for dealing with DOM properties.
 */var DOMPropertyOperations={ /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */createMarkupForID:function createMarkupForID(id){return DOMProperty.ID_ATTRIBUTE_NAME+'='+quoteAttributeValueForBrowser(id);},setAttributeForID:function setAttributeForID(node,id){node.setAttribute(DOMProperty.ID_ATTRIBUTE_NAME,id);},createMarkupForRoot:function createMarkupForRoot(){return DOMProperty.ROOT_ATTRIBUTE_NAME+'=""';},setAttributeForRoot:function setAttributeForRoot(node){node.setAttribute(DOMProperty.ROOT_ATTRIBUTE_NAME,'');}, /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */createMarkupForProperty:function createMarkupForProperty(name,value){if("development"!=='production'){ReactDOMInstrumentation.debugTool.onCreateMarkupForProperty(name,value);}var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){if(shouldIgnoreValue(propertyInfo,value)){return '';}var attributeName=propertyInfo.attributeName;if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){return attributeName+'=""';}return attributeName+'='+quoteAttributeValueForBrowser(value);}else if(DOMProperty.isCustomAttribute(name)){if(value==null){return '';}return name+'='+quoteAttributeValueForBrowser(value);}return null;}, /**
   * Creates markup for a custom property.
   *
   * @param {string} name
   * @param {*} value
   * @return {string} Markup string, or empty string if the property was invalid.
   */createMarkupForCustomAttribute:function createMarkupForCustomAttribute(name,value){if(!isAttributeNameSafe(name)||value==null){return '';}return name+'='+quoteAttributeValueForBrowser(value);}, /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */setValueForProperty:function setValueForProperty(node,name,value){if("development"!=='production'){ReactDOMInstrumentation.debugTool.onSetValueForProperty(node,name,value);}var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,value);}else if(shouldIgnoreValue(propertyInfo,value)){this.deleteValueForProperty(node,name);}else if(propertyInfo.mustUseProperty){var propName=propertyInfo.propertyName; // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
// property type before comparing; only `value` does and is string.
if(!propertyInfo.hasSideEffects||''+node[propName]!==''+value){ // Contrary to `setAttribute`, object properties are properly
// `toString`ed by IE8/9.
node[propName]=value;}}else {var attributeName=propertyInfo.attributeName;var namespace=propertyInfo.attributeNamespace; // `setAttribute` with objects becomes only `[object]` in IE8/9,
// ('' + value) makes it output the correct toString()-value.
if(namespace){node.setAttributeNS(namespace,attributeName,''+value);}else if(propertyInfo.hasBooleanValue||propertyInfo.hasOverloadedBooleanValue&&value===true){node.setAttribute(attributeName,'');}else {node.setAttribute(attributeName,''+value);}}}else if(DOMProperty.isCustomAttribute(name)){DOMPropertyOperations.setValueForAttribute(node,name,value);}},setValueForAttribute:function setValueForAttribute(node,name,value){if(!isAttributeNameSafe(name)){return;}if(value==null){node.removeAttribute(name);}else {node.setAttribute(name,''+value);}}, /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */deleteValueForProperty:function deleteValueForProperty(node,name){if("development"!=='production'){ReactDOMInstrumentation.debugTool.onDeleteValueForProperty(node,name);}var propertyInfo=DOMProperty.properties.hasOwnProperty(name)?DOMProperty.properties[name]:null;if(propertyInfo){var mutationMethod=propertyInfo.mutationMethod;if(mutationMethod){mutationMethod(node,undefined);}else if(propertyInfo.mustUseProperty){var propName=propertyInfo.propertyName;if(propertyInfo.hasBooleanValue){ // No HAS_SIDE_EFFECTS logic here, only `value` has it and is string.
node[propName]=false;}else {if(!propertyInfo.hasSideEffects||''+node[propName]!==''){node[propName]='';}}}else {node.removeAttribute(propertyInfo.attributeName);}}else if(DOMProperty.isCustomAttribute(name)){node.removeAttribute(name);}}};ReactPerf.measureMethods(DOMPropertyOperations,'DOMPropertyOperations',{setValueForProperty:'setValueForProperty',setValueForAttribute:'setValueForAttribute',deleteValueForProperty:'deleteValueForProperty'});module.exports=DOMPropertyOperations;},{"./DOMProperty":13,"./ReactDOMInstrumentation":49,"./ReactPerf":82,"./quoteAttributeValueForBrowser":132,"fbjs/lib/warning":164}],15:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 */'use strict';var DOMLazyTree=require('./DOMLazyTree');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var createNodesFromMarkup=require('fbjs/lib/createNodesFromMarkup');var emptyFunction=require('fbjs/lib/emptyFunction');var getMarkupWrap=require('fbjs/lib/getMarkupWrap');var invariant=require('fbjs/lib/invariant');var OPEN_TAG_NAME_EXP=/^(<[^ \/>]+)/;var RESULT_INDEX_ATTR='data-danger-index'; /**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */function getNodeName(markup){return markup.substring(1,markup.indexOf(' '));}var Danger={ /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */dangerouslyRenderMarkup:function dangerouslyRenderMarkup(markupList){!ExecutionEnvironment.canUseDOM?"development"!=='production'?invariant(false,'dangerouslyRenderMarkup(...): Cannot render markup in a worker '+'thread. Make sure `window` and `document` are available globally '+'before requiring React when unit testing or use '+'ReactDOMServer.renderToString for server rendering.'):invariant(false):void 0;var nodeName;var markupByNodeName={}; // Group markup by `nodeName` if a wrap is necessary, else by '*'.
for(var i=0;i<markupList.length;i++){!markupList[i]?"development"!=='production'?invariant(false,'dangerouslyRenderMarkup(...): Missing markup.'):invariant(false):void 0;nodeName=getNodeName(markupList[i]);nodeName=getMarkupWrap(nodeName)?nodeName:'*';markupByNodeName[nodeName]=markupByNodeName[nodeName]||[];markupByNodeName[nodeName][i]=markupList[i];}var resultList=[];var resultListAssignmentCount=0;for(nodeName in markupByNodeName){if(!markupByNodeName.hasOwnProperty(nodeName)){continue;}var markupListByNodeName=markupByNodeName[nodeName]; // This for-in loop skips the holes of the sparse array. The order of
// iteration should follow the order of assignment, which happens to match
// numerical index order, but we don't rely on that.
var resultIndex;for(resultIndex in markupListByNodeName){if(markupListByNodeName.hasOwnProperty(resultIndex)){var markup=markupListByNodeName[resultIndex]; // Push the requested markup with an additional RESULT_INDEX_ATTR
// attribute.  If the markup does not start with a < character, it
// will be discarded below (with an appropriate console.error).
markupListByNodeName[resultIndex]=markup.replace(OPEN_TAG_NAME_EXP, // This index will be parsed back out below.
'$1 '+RESULT_INDEX_ATTR+'="'+resultIndex+'" ');}} // Render each group of markup with similar wrapping `nodeName`.
var renderNodes=createNodesFromMarkup(markupListByNodeName.join(''),emptyFunction // Do nothing special with <script> tags.
);for(var j=0;j<renderNodes.length;++j){var renderNode=renderNodes[j];if(renderNode.hasAttribute&&renderNode.hasAttribute(RESULT_INDEX_ATTR)){resultIndex=+renderNode.getAttribute(RESULT_INDEX_ATTR);renderNode.removeAttribute(RESULT_INDEX_ATTR);!!resultList.hasOwnProperty(resultIndex)?"development"!=='production'?invariant(false,'Danger: Assigning to an already-occupied result index.'):invariant(false):void 0;resultList[resultIndex]=renderNode; // This should match resultList.length and markupList.length when
// we're done.
resultListAssignmentCount+=1;}else if("development"!=='production'){console.error('Danger: Discarding unexpected node:',renderNode);}}} // Although resultList was populated out of order, it should now be a dense
// array.
!(resultListAssignmentCount===resultList.length)?"development"!=='production'?invariant(false,'Danger: Did not assign to every index of resultList.'):invariant(false):void 0;!(resultList.length===markupList.length)?"development"!=='production'?invariant(false,'Danger: Expected markup to render %s nodes, but rendered %s.',markupList.length,resultList.length):invariant(false):void 0;return resultList;}, /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */dangerouslyReplaceNodeWithMarkup:function dangerouslyReplaceNodeWithMarkup(oldChild,markup){!ExecutionEnvironment.canUseDOM?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a '+'worker thread. Make sure `window` and `document` are available '+'globally before requiring React when unit testing or use '+'ReactDOMServer.renderToString() for server rendering.'):invariant(false):void 0;!markup?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Missing markup.'):invariant(false):void 0;!(oldChild.nodeName!=='HTML')?"development"!=='production'?invariant(false,'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the '+'<html> node. This is because browser quirks make this unreliable '+'and/or slow. If you want to render to the root you must use '+'server rendering. See ReactDOMServer.renderToString().'):invariant(false):void 0;if(typeof markup==='string'){var newChild=createNodesFromMarkup(markup,emptyFunction)[0];oldChild.parentNode.replaceChild(newChild,oldChild);}else {DOMLazyTree.replaceChildWithTree(oldChild,markup);}}};module.exports=Danger;},{"./DOMLazyTree":11,"fbjs/lib/ExecutionEnvironment":140,"fbjs/lib/createNodesFromMarkup":145,"fbjs/lib/emptyFunction":146,"fbjs/lib/getMarkupWrap":150,"fbjs/lib/invariant":154}],16:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */'use strict';var keyOf=require('fbjs/lib/keyOf'); /**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */var DefaultEventPluginOrder=[keyOf({ResponderEventPlugin:null}),keyOf({SimpleEventPlugin:null}),keyOf({TapEventPlugin:null}),keyOf({EnterLeaveEventPlugin:null}),keyOf({ChangeEventPlugin:null}),keyOf({SelectEventPlugin:null}),keyOf({BeforeInputEventPlugin:null})];module.exports=DefaultEventPluginOrder;},{"fbjs/lib/keyOf":158}],17:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPropagators=require('./EventPropagators');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var SyntheticMouseEvent=require('./SyntheticMouseEvent');var keyOf=require('fbjs/lib/keyOf');var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={mouseEnter:{registrationName:keyOf({onMouseEnter:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]},mouseLeave:{registrationName:keyOf({onMouseLeave:null}),dependencies:[topLevelTypes.topMouseOut,topLevelTypes.topMouseOver]}};var EnterLeaveEventPlugin={eventTypes:eventTypes, /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(topLevelType===topLevelTypes.topMouseOver&&(nativeEvent.relatedTarget||nativeEvent.fromElement)){return null;}if(topLevelType!==topLevelTypes.topMouseOut&&topLevelType!==topLevelTypes.topMouseOver){ // Must not be a mouse in or mouse out - ignoring.
return null;}var win;if(nativeEventTarget.window===nativeEventTarget){ // `nativeEventTarget` is probably a window object.
win=nativeEventTarget;}else { // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
var doc=nativeEventTarget.ownerDocument;if(doc){win=doc.defaultView||doc.parentWindow;}else {win=window;}}var from;var to;if(topLevelType===topLevelTypes.topMouseOut){from=targetInst;var related=nativeEvent.relatedTarget||nativeEvent.toElement;to=related?ReactDOMComponentTree.getClosestInstanceFromNode(related):null;}else { // Moving to a node from outside the window.
from=null;to=targetInst;}if(from===to){ // Nothing pertains to our managed components.
return null;}var fromNode=from==null?win:ReactDOMComponentTree.getNodeFromInstance(from);var toNode=to==null?win:ReactDOMComponentTree.getNodeFromInstance(to);var leave=SyntheticMouseEvent.getPooled(eventTypes.mouseLeave,from,nativeEvent,nativeEventTarget);leave.type='mouseleave';leave.target=fromNode;leave.relatedTarget=toNode;var enter=SyntheticMouseEvent.getPooled(eventTypes.mouseEnter,to,nativeEvent,nativeEventTarget);enter.type='mouseenter';enter.target=toNode;enter.relatedTarget=fromNode;EventPropagators.accumulateEnterLeaveDispatches(leave,enter,from,to);return [leave,enter];}};module.exports=EnterLeaveEventPlugin;},{"./EventConstants":18,"./EventPropagators":22,"./ReactDOMComponentTree":41,"./SyntheticMouseEvent":103,"fbjs/lib/keyOf":158}],18:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */'use strict';var keyMirror=require('fbjs/lib/keyMirror');var PropagationPhases=keyMirror({bubbled:null,captured:null}); /**
 * Types of raw signals from the browser caught at the top level.
 */var topLevelTypes=keyMirror({topAbort:null,topAnimationEnd:null,topAnimationIteration:null,topAnimationStart:null,topBlur:null,topCanPlay:null,topCanPlayThrough:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topDurationChange:null,topEmptied:null,topEncrypted:null,topEnded:null,topError:null,topFocus:null,topInput:null,topInvalid:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topLoadedData:null,topLoadedMetadata:null,topLoadStart:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topPause:null,topPlay:null,topPlaying:null,topProgress:null,topRateChange:null,topReset:null,topScroll:null,topSeeked:null,topSeeking:null,topSelectionChange:null,topStalled:null,topSubmit:null,topSuspend:null,topTextInput:null,topTimeUpdate:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topTransitionEnd:null,topVolumeChange:null,topWaiting:null,topWheel:null});var EventConstants={topLevelTypes:topLevelTypes,PropagationPhases:PropagationPhases};module.exports=EventConstants;},{"fbjs/lib/keyMirror":157}],19:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */'use strict';var EventPluginRegistry=require('./EventPluginRegistry');var EventPluginUtils=require('./EventPluginUtils');var ReactErrorUtils=require('./ReactErrorUtils');var accumulateInto=require('./accumulateInto');var forEachAccumulated=require('./forEachAccumulated');var invariant=require('fbjs/lib/invariant'); /**
 * Internal store for event listeners
 */var listenerBank={}; /**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */var eventQueue=null; /**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @private
 */var executeDispatchesAndRelease=function executeDispatchesAndRelease(event,simulated){if(event){EventPluginUtils.executeDispatchesInOrder(event,simulated);if(!event.isPersistent()){event.constructor.release(event);}}};var executeDispatchesAndReleaseSimulated=function executeDispatchesAndReleaseSimulated(e){return executeDispatchesAndRelease(e,true);};var executeDispatchesAndReleaseTopLevel=function executeDispatchesAndReleaseTopLevel(e){return executeDispatchesAndRelease(e,false);}; /**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */var EventPluginHub={ /**
   * Methods for injecting dependencies.
   */injection:{ /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */injectEventPluginOrder:EventPluginRegistry.injectEventPluginOrder, /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */injectEventPluginsByName:EventPluginRegistry.injectEventPluginsByName}, /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {function} listener The callback to store.
   */putListener:function putListener(inst,registrationName,listener){!(typeof listener==='function')?"development"!=='production'?invariant(false,'Expected %s listener to be a function, instead got type %s',registrationName,typeof listener==="undefined"?"undefined":_typeof(listener)):invariant(false):void 0;var bankForRegistrationName=listenerBank[registrationName]||(listenerBank[registrationName]={});bankForRegistrationName[inst._rootNodeID]=listener;var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.didPutListener){PluginModule.didPutListener(inst,registrationName,listener);}}, /**
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */getListener:function getListener(inst,registrationName){var bankForRegistrationName=listenerBank[registrationName];return bankForRegistrationName&&bankForRegistrationName[inst._rootNodeID];}, /**
   * Deletes a listener from the registration bank.
   *
   * @param {object} inst The instance, which is the source of events.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */deleteListener:function deleteListener(inst,registrationName){var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(inst,registrationName);}var bankForRegistrationName=listenerBank[registrationName]; // TODO: This should never be null -- when is it?
if(bankForRegistrationName){delete bankForRegistrationName[inst._rootNodeID];}}, /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {object} inst The instance, which is the source of events.
   */deleteAllListeners:function deleteAllListeners(inst){for(var registrationName in listenerBank){if(!listenerBank[registrationName][inst._rootNodeID]){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[registrationName];if(PluginModule&&PluginModule.willDeleteListener){PluginModule.willDeleteListener(inst,registrationName);}delete listenerBank[registrationName][inst._rootNodeID];}}, /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @return {*} An accumulation of synthetic events.
   * @internal
   */extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events;var plugins=EventPluginRegistry.plugins;for(var i=0;i<plugins.length;i++){ // Not every plugin in the ordering may be loaded at runtime.
var possiblePlugin=plugins[i];if(possiblePlugin){var extractedEvents=possiblePlugin.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);if(extractedEvents){events=accumulateInto(events,extractedEvents);}}}return events;}, /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */enqueueEvents:function enqueueEvents(events){if(events){eventQueue=accumulateInto(eventQueue,events);}}, /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */processEventQueue:function processEventQueue(simulated){ // Set `eventQueue` to null before processing it so that we can tell if more
// events get enqueued while processing.
var processingEventQueue=eventQueue;eventQueue=null;if(simulated){forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseSimulated);}else {forEachAccumulated(processingEventQueue,executeDispatchesAndReleaseTopLevel);}!!eventQueue?"development"!=='production'?invariant(false,'processEventQueue(): Additional events were enqueued while processing '+'an event queue. Support for this has not yet been implemented.'):invariant(false):void 0; // This would be a good time to rethrow if any of the event handlers threw.
ReactErrorUtils.rethrowCaughtError();}, /**
   * These are needed for tests only. Do not use!
   */__purge:function __purge(){listenerBank={};},__getListenerBank:function __getListenerBank(){return listenerBank;}};module.exports=EventPluginHub;},{"./EventPluginRegistry":20,"./EventPluginUtils":21,"./ReactErrorUtils":65,"./accumulateInto":110,"./forEachAccumulated":118,"fbjs/lib/invariant":154}],20:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 */'use strict';var invariant=require('fbjs/lib/invariant'); /**
 * Injectable ordering of event plugins.
 */var EventPluginOrder=null; /**
 * Injectable mapping from names to event plugin modules.
 */var namesToPlugins={}; /**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */function recomputePluginOrdering(){if(!EventPluginOrder){ // Wait until an `EventPluginOrder` is injected.
return;}for(var pluginName in namesToPlugins){var PluginModule=namesToPlugins[pluginName];var pluginIndex=EventPluginOrder.indexOf(pluginName);!(pluginIndex>-1)?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugins that do not exist in '+'the plugin ordering, `%s`.',pluginName):invariant(false):void 0;if(EventPluginRegistry.plugins[pluginIndex]){continue;}!PluginModule.extractEvents?"development"!=='production'?invariant(false,'EventPluginRegistry: Event plugins must implement an `extractEvents` '+'method, but `%s` does not.',pluginName):invariant(false):void 0;EventPluginRegistry.plugins[pluginIndex]=PluginModule;var publishedEvents=PluginModule.eventTypes;for(var eventName in publishedEvents){!publishEventForPlugin(publishedEvents[eventName],PluginModule,eventName)?"development"!=='production'?invariant(false,'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',eventName,pluginName):invariant(false):void 0;}}} /**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */function publishEventForPlugin(dispatchConfig,PluginModule,eventName){!!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)?"development"!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same '+'event name, `%s`.',eventName):invariant(false):void 0;EventPluginRegistry.eventNameDispatchConfigs[eventName]=dispatchConfig;var phasedRegistrationNames=dispatchConfig.phasedRegistrationNames;if(phasedRegistrationNames){for(var phaseName in phasedRegistrationNames){if(phasedRegistrationNames.hasOwnProperty(phaseName)){var phasedRegistrationName=phasedRegistrationNames[phaseName];publishRegistrationName(phasedRegistrationName,PluginModule,eventName);}}return true;}else if(dispatchConfig.registrationName){publishRegistrationName(dispatchConfig.registrationName,PluginModule,eventName);return true;}return false;} /**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */function publishRegistrationName(registrationName,PluginModule,eventName){!!EventPluginRegistry.registrationNameModules[registrationName]?"development"!=='production'?invariant(false,'EventPluginHub: More than one plugin attempted to publish the same '+'registration name, `%s`.',registrationName):invariant(false):void 0;EventPluginRegistry.registrationNameModules[registrationName]=PluginModule;EventPluginRegistry.registrationNameDependencies[registrationName]=PluginModule.eventTypes[eventName].dependencies;if("development"!=='production'){var lowerCasedName=registrationName.toLowerCase();EventPluginRegistry.possibleRegistrationNames[lowerCasedName]=registrationName;}} /**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */var EventPluginRegistry={ /**
   * Ordered list of injected plugins.
   */plugins:[], /**
   * Mapping from event name to dispatch config
   */eventNameDispatchConfigs:{}, /**
   * Mapping from registration name to plugin module
   */registrationNameModules:{}, /**
   * Mapping from registration name to event name
   */registrationNameDependencies:{}, /**
   * Mapping from lowercase registration names to the properly cased version,
   * used to warn in the case of missing event handlers. Available
   * only in __DEV__.
   * @type {Object}
   */possibleRegistrationNames:"development"!=='production'?{}:null, /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */injectEventPluginOrder:function injectEventPluginOrder(InjectedEventPluginOrder){!!EventPluginOrder?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject event plugin ordering more than '+'once. You are likely trying to load more than one copy of React.'):invariant(false):void 0; // Clone the ordering so it cannot be dynamically mutated.
EventPluginOrder=Array.prototype.slice.call(InjectedEventPluginOrder);recomputePluginOrdering();}, /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */injectEventPluginsByName:function injectEventPluginsByName(injectedNamesToPlugins){var isOrderingDirty=false;for(var pluginName in injectedNamesToPlugins){if(!injectedNamesToPlugins.hasOwnProperty(pluginName)){continue;}var PluginModule=injectedNamesToPlugins[pluginName];if(!namesToPlugins.hasOwnProperty(pluginName)||namesToPlugins[pluginName]!==PluginModule){!!namesToPlugins[pluginName]?"development"!=='production'?invariant(false,'EventPluginRegistry: Cannot inject two different event plugins '+'using the same name, `%s`.',pluginName):invariant(false):void 0;namesToPlugins[pluginName]=PluginModule;isOrderingDirty=true;}}if(isOrderingDirty){recomputePluginOrdering();}}, /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */getPluginModuleForEvent:function getPluginModuleForEvent(event){var dispatchConfig=event.dispatchConfig;if(dispatchConfig.registrationName){return EventPluginRegistry.registrationNameModules[dispatchConfig.registrationName]||null;}for(var phase in dispatchConfig.phasedRegistrationNames){if(!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)){continue;}var PluginModule=EventPluginRegistry.registrationNameModules[dispatchConfig.phasedRegistrationNames[phase]];if(PluginModule){return PluginModule;}}return null;}, /**
   * Exposed for unit testing.
   * @private
   */_resetEventPlugins:function _resetEventPlugins(){EventPluginOrder=null;for(var pluginName in namesToPlugins){if(namesToPlugins.hasOwnProperty(pluginName)){delete namesToPlugins[pluginName];}}EventPluginRegistry.plugins.length=0;var eventNameDispatchConfigs=EventPluginRegistry.eventNameDispatchConfigs;for(var eventName in eventNameDispatchConfigs){if(eventNameDispatchConfigs.hasOwnProperty(eventName)){delete eventNameDispatchConfigs[eventName];}}var registrationNameModules=EventPluginRegistry.registrationNameModules;for(var registrationName in registrationNameModules){if(registrationNameModules.hasOwnProperty(registrationName)){delete registrationNameModules[registrationName];}}if("development"!=='production'){var possibleRegistrationNames=EventPluginRegistry.possibleRegistrationNames;for(var lowerCasedName in possibleRegistrationNames){if(possibleRegistrationNames.hasOwnProperty(lowerCasedName)){delete possibleRegistrationNames[lowerCasedName];}}}}};module.exports=EventPluginRegistry;},{"fbjs/lib/invariant":154}],21:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */'use strict';var EventConstants=require('./EventConstants');var ReactErrorUtils=require('./ReactErrorUtils');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning'); /**
 * Injected dependencies:
 */ /**
 * - `ComponentTree`: [required] Module that can convert between React instances
 *   and actual node references.
 */var ComponentTree;var TreeTraversal;var injection={injectComponentTree:function injectComponentTree(Injected){ComponentTree=Injected;if("development"!=='production'){"development"!=='production'?warning(Injected&&Injected.getNodeFromInstance&&Injected.getInstanceFromNode,'EventPluginUtils.injection.injectComponentTree(...): Injected '+'module is missing getNodeFromInstance or getInstanceFromNode.'):void 0;}},injectTreeTraversal:function injectTreeTraversal(Injected){TreeTraversal=Injected;if("development"!=='production'){"development"!=='production'?warning(Injected&&Injected.isAncestor&&Injected.getLowestCommonAncestor,'EventPluginUtils.injection.injectTreeTraversal(...): Injected '+'module is missing isAncestor or getLowestCommonAncestor.'):void 0;}}};var topLevelTypes=EventConstants.topLevelTypes;function isEndish(topLevelType){return topLevelType===topLevelTypes.topMouseUp||topLevelType===topLevelTypes.topTouchEnd||topLevelType===topLevelTypes.topTouchCancel;}function isMoveish(topLevelType){return topLevelType===topLevelTypes.topMouseMove||topLevelType===topLevelTypes.topTouchMove;}function isStartish(topLevelType){return topLevelType===topLevelTypes.topMouseDown||topLevelType===topLevelTypes.topTouchStart;}var validateEventDispatches;if("development"!=='production'){validateEventDispatches=function validateEventDispatches(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;var listenersIsArr=Array.isArray(dispatchListeners);var listenersLen=listenersIsArr?dispatchListeners.length:dispatchListeners?1:0;var instancesIsArr=Array.isArray(dispatchInstances);var instancesLen=instancesIsArr?dispatchInstances.length:dispatchInstances?1:0;"development"!=='production'?warning(instancesIsArr===listenersIsArr&&instancesLen===listenersLen,'EventPluginUtils: Invalid `event`.'):void 0;};} /**
 * Dispatch the event to the listener.
 * @param {SyntheticEvent} event SyntheticEvent to handle
 * @param {boolean} simulated If the event is simulated (changes exn behavior)
 * @param {function} listener Application-level callback
 * @param {*} inst Internal component instance
 */function executeDispatch(event,simulated,listener,inst){var type=event.type||'unknown-event';event.currentTarget=EventPluginUtils.getNodeFromInstance(inst);if(simulated){ReactErrorUtils.invokeGuardedCallbackWithCatch(type,listener,event);}else {ReactErrorUtils.invokeGuardedCallback(type,listener,event);}event.currentTarget=null;} /**
 * Standard/simple iteration through an event's collected dispatches.
 */function executeDispatchesInOrder(event,simulated){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;if("development"!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;} // Listeners and Instances are two parallel arrays that are always in sync.
executeDispatch(event,simulated,dispatchListeners[i],dispatchInstances[i]);}}else if(dispatchListeners){executeDispatch(event,simulated,dispatchListeners,dispatchInstances);}event._dispatchListeners=null;event._dispatchInstances=null;} /**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return {?string} id of the first dispatch execution who's listener returns
 * true, or null if no listener returned true.
 */function executeDispatchesInOrderStopAtTrueImpl(event){var dispatchListeners=event._dispatchListeners;var dispatchInstances=event._dispatchInstances;if("development"!=='production'){validateEventDispatches(event);}if(Array.isArray(dispatchListeners)){for(var i=0;i<dispatchListeners.length;i++){if(event.isPropagationStopped()){break;} // Listeners and Instances are two parallel arrays that are always in sync.
if(dispatchListeners[i](event,dispatchInstances[i])){return dispatchInstances[i];}}}else if(dispatchListeners){if(dispatchListeners(event,dispatchInstances)){return dispatchInstances;}}return null;} /**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */function executeDispatchesInOrderStopAtTrue(event){var ret=executeDispatchesInOrderStopAtTrueImpl(event);event._dispatchInstances=null;event._dispatchListeners=null;return ret;} /**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return {*} The return value of executing the single dispatch.
 */function executeDirectDispatch(event){if("development"!=='production'){validateEventDispatches(event);}var dispatchListener=event._dispatchListeners;var dispatchInstance=event._dispatchInstances;!!Array.isArray(dispatchListener)?"development"!=='production'?invariant(false,'executeDirectDispatch(...): Invalid `event`.'):invariant(false):void 0;event.currentTarget=EventPluginUtils.getNodeFromInstance(dispatchInstance);var res=dispatchListener?dispatchListener(event):null;event.currentTarget=null;event._dispatchListeners=null;event._dispatchInstances=null;return res;} /**
 * @param {SyntheticEvent} event
 * @return {boolean} True iff number of dispatches accumulated is greater than 0.
 */function hasDispatches(event){return !!event._dispatchListeners;} /**
 * General utilities that are useful in creating custom Event Plugins.
 */var EventPluginUtils={isEndish:isEndish,isMoveish:isMoveish,isStartish:isStartish,executeDirectDispatch:executeDirectDispatch,executeDispatchesInOrder:executeDispatchesInOrder,executeDispatchesInOrderStopAtTrue:executeDispatchesInOrderStopAtTrue,hasDispatches:hasDispatches,getInstanceFromNode:function getInstanceFromNode(node){return ComponentTree.getInstanceFromNode(node);},getNodeFromInstance:function getNodeFromInstance(node){return ComponentTree.getNodeFromInstance(node);},isAncestor:function isAncestor(a,b){return TreeTraversal.isAncestor(a,b);},getLowestCommonAncestor:function getLowestCommonAncestor(a,b){return TreeTraversal.getLowestCommonAncestor(a,b);},getParentInstance:function getParentInstance(inst){return TreeTraversal.getParentInstance(inst);},traverseTwoPhase:function traverseTwoPhase(target,fn,arg){return TreeTraversal.traverseTwoPhase(target,fn,arg);},traverseEnterLeave:function traverseEnterLeave(from,to,fn,argFrom,argTo){return TreeTraversal.traverseEnterLeave(from,to,fn,argFrom,argTo);},injection:injection};module.exports=EventPluginUtils;},{"./EventConstants":18,"./ReactErrorUtils":65,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],22:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */'use strict';var EventConstants=require('./EventConstants');var EventPluginHub=require('./EventPluginHub');var EventPluginUtils=require('./EventPluginUtils');var accumulateInto=require('./accumulateInto');var forEachAccumulated=require('./forEachAccumulated');var warning=require('fbjs/lib/warning');var PropagationPhases=EventConstants.PropagationPhases;var getListener=EventPluginHub.getListener; /**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */function listenerAtPhase(inst,event,propagationPhase){var registrationName=event.dispatchConfig.phasedRegistrationNames[propagationPhase];return getListener(inst,registrationName);} /**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */function accumulateDirectionalDispatches(inst,upwards,event){if("development"!=='production'){"development"!=='production'?warning(inst,'Dispatching inst must not be null'):void 0;}var phase=upwards?PropagationPhases.bubbled:PropagationPhases.captured;var listener=listenerAtPhase(inst,event,phase);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);}} /**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We cannot perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */function accumulateTwoPhaseDispatchesSingle(event){if(event&&event.dispatchConfig.phasedRegistrationNames){EventPluginUtils.traverseTwoPhase(event._targetInst,accumulateDirectionalDispatches,event);}} /**
 * Same as `accumulateTwoPhaseDispatchesSingle`, but skips over the targetID.
 */function accumulateTwoPhaseDispatchesSingleSkipTarget(event){if(event&&event.dispatchConfig.phasedRegistrationNames){var targetInst=event._targetInst;var parentInst=targetInst?EventPluginUtils.getParentInstance(targetInst):null;EventPluginUtils.traverseTwoPhase(parentInst,accumulateDirectionalDispatches,event);}} /**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */function accumulateDispatches(inst,ignoredDirection,event){if(event&&event.dispatchConfig.registrationName){var registrationName=event.dispatchConfig.registrationName;var listener=getListener(inst,registrationName);if(listener){event._dispatchListeners=accumulateInto(event._dispatchListeners,listener);event._dispatchInstances=accumulateInto(event._dispatchInstances,inst);}}} /**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */function accumulateDirectDispatchesSingle(event){if(event&&event.dispatchConfig.registrationName){accumulateDispatches(event._targetInst,null,event);}}function accumulateTwoPhaseDispatches(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingle);}function accumulateTwoPhaseDispatchesSkipTarget(events){forEachAccumulated(events,accumulateTwoPhaseDispatchesSingleSkipTarget);}function accumulateEnterLeaveDispatches(leave,enter,from,to){EventPluginUtils.traverseEnterLeave(from,to,accumulateDispatches,leave,enter);}function accumulateDirectDispatches(events){forEachAccumulated(events,accumulateDirectDispatchesSingle);} /**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */var EventPropagators={accumulateTwoPhaseDispatches:accumulateTwoPhaseDispatches,accumulateTwoPhaseDispatchesSkipTarget:accumulateTwoPhaseDispatchesSkipTarget,accumulateDirectDispatches:accumulateDirectDispatches,accumulateEnterLeaveDispatches:accumulateEnterLeaveDispatches};module.exports=EventPropagators;},{"./EventConstants":18,"./EventPluginHub":19,"./EventPluginUtils":21,"./accumulateInto":110,"./forEachAccumulated":118,"fbjs/lib/warning":164}],23:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 */'use strict';var _assign=require('object-assign');var PooledClass=require('./PooledClass');var getTextContentAccessor=require('./getTextContentAccessor'); /**
 * This helper class stores information about text content of a target node,
 * allowing comparison of content before and after a given event.
 *
 * Identify the node where selection currently begins, then observe
 * both its text content and its current position in the DOM. Since the
 * browser may natively replace the target node during composition, we can
 * use its position to find its replacement.
 *
 * @param {DOMEventTarget} root
 */function FallbackCompositionState(root){this._root=root;this._startText=this.getText();this._fallbackText=null;}_assign(FallbackCompositionState.prototype,{destructor:function destructor(){this._root=null;this._startText=null;this._fallbackText=null;}, /**
   * Get current text of input.
   *
   * @return {string}
   */getText:function getText(){if('value' in this._root){return this._root.value;}return this._root[getTextContentAccessor()];}, /**
   * Determine the differing substring between the initially stored
   * text content and the current content.
   *
   * @return {string}
   */getData:function getData(){if(this._fallbackText){return this._fallbackText;}var start;var startValue=this._startText;var startLength=startValue.length;var end;var endValue=this.getText();var endLength=endValue.length;for(start=0;start<startLength;start++){if(startValue[start]!==endValue[start]){break;}}var minEnd=startLength-start;for(end=1;end<=minEnd;end++){if(startValue[startLength-end]!==endValue[endLength-end]){break;}}var sliceTail=end>1?1-end:undefined;this._fallbackText=endValue.slice(start,sliceTail);return this._fallbackText;}});PooledClass.addPoolingTo(FallbackCompositionState);module.exports=FallbackCompositionState;},{"./PooledClass":26,"./getTextContentAccessor":126,"object-assign":165}],24:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */'use strict';var DOMProperty=require('./DOMProperty');var MUST_USE_PROPERTY=DOMProperty.injection.MUST_USE_PROPERTY;var HAS_BOOLEAN_VALUE=DOMProperty.injection.HAS_BOOLEAN_VALUE;var HAS_SIDE_EFFECTS=DOMProperty.injection.HAS_SIDE_EFFECTS;var HAS_NUMERIC_VALUE=DOMProperty.injection.HAS_NUMERIC_VALUE;var HAS_POSITIVE_NUMERIC_VALUE=DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;var HAS_OVERLOADED_BOOLEAN_VALUE=DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;var HTMLDOMPropertyConfig={isCustomAttribute:RegExp.prototype.test.bind(new RegExp('^(data|aria)-['+DOMProperty.ATTRIBUTE_NAME_CHAR+']*$')),Properties:{ /**
     * Standard Properties
     */accept:0,acceptCharset:0,accessKey:0,action:0,allowFullScreen:HAS_BOOLEAN_VALUE,allowTransparency:0,alt:0,async:HAS_BOOLEAN_VALUE,autoComplete:0, // autoFocus is polyfilled/normalized by AutoFocusUtils
// autoFocus: HAS_BOOLEAN_VALUE,
autoPlay:HAS_BOOLEAN_VALUE,capture:HAS_BOOLEAN_VALUE,cellPadding:0,cellSpacing:0,charSet:0,challenge:0,checked:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,cite:0,classID:0,className:0,cols:HAS_POSITIVE_NUMERIC_VALUE,colSpan:0,content:0,contentEditable:0,contextMenu:0,controls:HAS_BOOLEAN_VALUE,coords:0,crossOrigin:0,data:0, // For `<object />` acts as `src`.
dateTime:0,'default':HAS_BOOLEAN_VALUE,defer:HAS_BOOLEAN_VALUE,dir:0,disabled:HAS_BOOLEAN_VALUE,download:HAS_OVERLOADED_BOOLEAN_VALUE,draggable:0,encType:0,form:0,formAction:0,formEncType:0,formMethod:0,formNoValidate:HAS_BOOLEAN_VALUE,formTarget:0,frameBorder:0,headers:0,height:0,hidden:HAS_BOOLEAN_VALUE,high:0,href:0,hrefLang:0,htmlFor:0,httpEquiv:0,icon:0,id:0,inputMode:0,integrity:0,is:0,keyParams:0,keyType:0,kind:0,label:0,lang:0,list:0,loop:HAS_BOOLEAN_VALUE,low:0,manifest:0,marginHeight:0,marginWidth:0,max:0,maxLength:0,media:0,mediaGroup:0,method:0,min:0,minLength:0, // Caution; `option.selected` is not updated if `select.multiple` is
// disabled with `removeAttribute`.
multiple:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,muted:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,name:0,nonce:0,noValidate:HAS_BOOLEAN_VALUE,open:HAS_BOOLEAN_VALUE,optimum:0,pattern:0,placeholder:0,poster:0,preload:0,profile:0,radioGroup:0,readOnly:HAS_BOOLEAN_VALUE,rel:0,required:HAS_BOOLEAN_VALUE,reversed:HAS_BOOLEAN_VALUE,role:0,rows:HAS_POSITIVE_NUMERIC_VALUE,rowSpan:HAS_NUMERIC_VALUE,sandbox:0,scope:0,scoped:HAS_BOOLEAN_VALUE,scrolling:0,seamless:HAS_BOOLEAN_VALUE,selected:MUST_USE_PROPERTY|HAS_BOOLEAN_VALUE,shape:0,size:HAS_POSITIVE_NUMERIC_VALUE,sizes:0,span:HAS_POSITIVE_NUMERIC_VALUE,spellCheck:0,src:0,srcDoc:0,srcLang:0,srcSet:0,start:HAS_NUMERIC_VALUE,step:0,style:0,summary:0,tabIndex:0,target:0,title:0, // Setting .type throws on non-<input> tags
type:0,useMap:0,value:MUST_USE_PROPERTY|HAS_SIDE_EFFECTS,width:0,wmode:0,wrap:0, /**
     * RDFa Properties
     */about:0,datatype:0,inlist:0,prefix:0, // property is also supported for OpenGraph in meta tags.
property:0,resource:0,'typeof':0,vocab:0, /**
     * Non-standard Properties
     */ // autoCapitalize and autoCorrect are supported in Mobile Safari for
// keyboard hints.
autoCapitalize:0,autoCorrect:0, // autoSave allows WebKit/Blink to persist values of input fields on page reloads
autoSave:0, // color is for Safari mask-icon link
color:0, // itemProp, itemScope, itemType are for
// Microdata support. See http://schema.org/docs/gs.html
itemProp:0,itemScope:HAS_BOOLEAN_VALUE,itemType:0, // itemID and itemRef are for Microdata support as well but
// only specified in the WHATWG spec document. See
// https://html.spec.whatwg.org/multipage/microdata.html#microdata-dom-api
itemID:0,itemRef:0, // results show looking glass icon and recent searches on input
// search fields in WebKit/Blink
results:0, // IE-only attribute that specifies security restrictions on an iframe
// as an alternative to the sandbox attribute on IE<10
security:0, // IE-only attribute that controls focus behavior
unselectable:0},DOMAttributeNames:{acceptCharset:'accept-charset',className:'class',htmlFor:'for',httpEquiv:'http-equiv'},DOMPropertyNames:{}};module.exports=HTMLDOMPropertyConfig;},{"./DOMProperty":13}],25:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 */'use strict';var ReactPropTypes=require('./ReactPropTypes');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var hasReadOnlyValue={'button':true,'checkbox':true,'image':true,'hidden':true,'radio':true,'reset':true,'submit':true};function _assertSingleLink(inputProps){!(inputProps.checkedLink==null||inputProps.valueLink==null)?"development"!=='production'?invariant(false,'Cannot provide a checkedLink and a valueLink. If you want to use '+'checkedLink, you probably don\'t want to use valueLink and vice versa.'):invariant(false):void 0;}function _assertValueLink(inputProps){_assertSingleLink(inputProps);!(inputProps.value==null&&inputProps.onChange==null)?"development"!=='production'?invariant(false,'Cannot provide a valueLink and a value or onChange event. If you want '+'to use value or onChange, you probably don\'t want to use valueLink.'):invariant(false):void 0;}function _assertCheckedLink(inputProps){_assertSingleLink(inputProps);!(inputProps.checked==null&&inputProps.onChange==null)?"development"!=='production'?invariant(false,'Cannot provide a checkedLink and a checked property or onChange event. '+'If you want to use checked or onChange, you probably don\'t want to '+'use checkedLink'):invariant(false):void 0;}var propTypes={value:function value(props,propName,componentName){if(!props[propName]||hasReadOnlyValue[props.type]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `value` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultValue`. Otherwise, '+'set either `onChange` or `readOnly`.');},checked:function checked(props,propName,componentName){if(!props[propName]||props.onChange||props.readOnly||props.disabled){return null;}return new Error('You provided a `checked` prop to a form field without an '+'`onChange` handler. This will render a read-only field. If '+'the field should be mutable use `defaultChecked`. Otherwise, '+'set either `onChange` or `readOnly`.');},onChange:ReactPropTypes.func};var loggedTypeFailures={};function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */var LinkedValueUtils={checkPropTypes:function checkPropTypes(tagName,props,owner){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error=propTypes[propName](props,propName,tagName,ReactPropTypeLocations.prop);}if(error instanceof Error&&!(error.message in loggedTypeFailures)){ // Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum(owner);"development"!=='production'?warning(false,'Failed form propType: %s%s',error.message,addendum):void 0;}}}, /**
   * @param {object} inputProps Props for form component
   * @return {*} current value of the input either from value prop or link.
   */getValue:function getValue(inputProps){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.value;}return inputProps.value;}, /**
   * @param {object} inputProps Props for form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */getChecked:function getChecked(inputProps){if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.value;}return inputProps.checked;}, /**
   * @param {object} inputProps Props for form component
   * @param {SyntheticEvent} event change event to handle
   */executeOnChange:function executeOnChange(inputProps,event){if(inputProps.valueLink){_assertValueLink(inputProps);return inputProps.valueLink.requestChange(event.target.value);}else if(inputProps.checkedLink){_assertCheckedLink(inputProps);return inputProps.checkedLink.requestChange(event.target.checked);}else if(inputProps.onChange){return inputProps.onChange.call(undefined,event);}}};module.exports=LinkedValueUtils;},{"./ReactPropTypeLocations":84,"./ReactPropTypes":85,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],26:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */'use strict';var invariant=require('fbjs/lib/invariant'); /**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */var oneArgumentPooler=function oneArgumentPooler(copyFieldsFrom){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,copyFieldsFrom);return instance;}else {return new Klass(copyFieldsFrom);}};var twoArgumentPooler=function twoArgumentPooler(a1,a2){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2);return instance;}else {return new Klass(a1,a2);}};var threeArgumentPooler=function threeArgumentPooler(a1,a2,a3){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3);return instance;}else {return new Klass(a1,a2,a3);}};var fourArgumentPooler=function fourArgumentPooler(a1,a2,a3,a4){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4);return instance;}else {return new Klass(a1,a2,a3,a4);}};var fiveArgumentPooler=function fiveArgumentPooler(a1,a2,a3,a4,a5){var Klass=this;if(Klass.instancePool.length){var instance=Klass.instancePool.pop();Klass.call(instance,a1,a2,a3,a4,a5);return instance;}else {return new Klass(a1,a2,a3,a4,a5);}};var standardReleaser=function standardReleaser(instance){var Klass=this;!(instance instanceof Klass)?"development"!=='production'?invariant(false,'Trying to release an instance into a pool of a different type.'):invariant(false):void 0;instance.destructor();if(Klass.instancePool.length<Klass.poolSize){Klass.instancePool.push(instance);}};var DEFAULT_POOL_SIZE=10;var DEFAULT_POOLER=oneArgumentPooler; /**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */var addPoolingTo=function addPoolingTo(CopyConstructor,pooler){var NewKlass=CopyConstructor;NewKlass.instancePool=[];NewKlass.getPooled=pooler||DEFAULT_POOLER;if(!NewKlass.poolSize){NewKlass.poolSize=DEFAULT_POOL_SIZE;}NewKlass.release=standardReleaser;return NewKlass;};var PooledClass={addPoolingTo:addPoolingTo,oneArgumentPooler:oneArgumentPooler,twoArgumentPooler:twoArgumentPooler,threeArgumentPooler:threeArgumentPooler,fourArgumentPooler:fourArgumentPooler,fiveArgumentPooler:fiveArgumentPooler};module.exports=PooledClass;},{"fbjs/lib/invariant":154}],27:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */'use strict';var _assign=require('object-assign');var ReactChildren=require('./ReactChildren');var ReactComponent=require('./ReactComponent');var ReactClass=require('./ReactClass');var ReactDOMFactories=require('./ReactDOMFactories');var ReactElement=require('./ReactElement');var ReactElementValidator=require('./ReactElementValidator');var ReactPropTypes=require('./ReactPropTypes');var ReactVersion=require('./ReactVersion');var onlyChild=require('./onlyChild');var warning=require('fbjs/lib/warning');var createElement=ReactElement.createElement;var createFactory=ReactElement.createFactory;var cloneElement=ReactElement.cloneElement;if("development"!=='production'){createElement=ReactElementValidator.createElement;createFactory=ReactElementValidator.createFactory;cloneElement=ReactElementValidator.cloneElement;}var __spread=_assign;if("development"!=='production'){var warned=false;__spread=function __spread(){"development"!=='production'?warning(warned,'React.__spread is deprecated and should not be used. Use '+'Object.assign directly or another helper function with similar '+'semantics. You may be seeing this warning due to your compiler. '+'See https://fb.me/react-spread-deprecation for more details.'):void 0;warned=true;return _assign.apply(null,arguments);};}var React={ // Modern
Children:{map:ReactChildren.map,forEach:ReactChildren.forEach,count:ReactChildren.count,toArray:ReactChildren.toArray,only:onlyChild},Component:ReactComponent,createElement:createElement,cloneElement:cloneElement,isValidElement:ReactElement.isValidElement, // Classic
PropTypes:ReactPropTypes,createClass:ReactClass.createClass,createFactory:createFactory,createMixin:function createMixin(mixin){ // Currently a noop. Will be used to validate and trace mixins.
return mixin;}, // This looks DOM specific but these are actually isomorphic helpers
// since they are just generating DOM strings.
DOM:ReactDOMFactories,version:ReactVersion, // Deprecated hook for JSX spread, don't use this for anything.
__spread:__spread};module.exports=React;},{"./ReactChildren":30,"./ReactClass":31,"./ReactComponent":32,"./ReactDOMFactories":45,"./ReactElement":62,"./ReactElementValidator":63,"./ReactPropTypes":85,"./ReactVersion":91,"./onlyChild":131,"fbjs/lib/warning":164,"object-assign":165}],28:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 */'use strict';var _assign=require('object-assign');var EventConstants=require('./EventConstants');var EventPluginRegistry=require('./EventPluginRegistry');var ReactEventEmitterMixin=require('./ReactEventEmitterMixin');var ViewportMetrics=require('./ViewportMetrics');var getVendorPrefixedEventName=require('./getVendorPrefixedEventName');var isEventSupported=require('./isEventSupported'); /**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */var hasEventPageXY;var alreadyListeningTo={};var isMonitoringScrollValue=false;var reactTopListenersCounter=0; // For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping={topAbort:'abort',topAnimationEnd:getVendorPrefixedEventName('animationend')||'animationend',topAnimationIteration:getVendorPrefixedEventName('animationiteration')||'animationiteration',topAnimationStart:getVendorPrefixedEventName('animationstart')||'animationstart',topBlur:'blur',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topChange:'change',topClick:'click',topCompositionEnd:'compositionend',topCompositionStart:'compositionstart',topCompositionUpdate:'compositionupdate',topContextMenu:'contextmenu',topCopy:'copy',topCut:'cut',topDoubleClick:'dblclick',topDrag:'drag',topDragEnd:'dragend',topDragEnter:'dragenter',topDragExit:'dragexit',topDragLeave:'dragleave',topDragOver:'dragover',topDragStart:'dragstart',topDrop:'drop',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topFocus:'focus',topInput:'input',topKeyDown:'keydown',topKeyPress:'keypress',topKeyUp:'keyup',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topMouseDown:'mousedown',topMouseMove:'mousemove',topMouseOut:'mouseout',topMouseOver:'mouseover',topMouseUp:'mouseup',topPaste:'paste',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topScroll:'scroll',topSeeked:'seeked',topSeeking:'seeking',topSelectionChange:'selectionchange',topStalled:'stalled',topSuspend:'suspend',topTextInput:'textInput',topTimeUpdate:'timeupdate',topTouchCancel:'touchcancel',topTouchEnd:'touchend',topTouchMove:'touchmove',topTouchStart:'touchstart',topTransitionEnd:getVendorPrefixedEventName('transitionend')||'transitionend',topVolumeChange:'volumechange',topWaiting:'waiting',topWheel:'wheel'}; /**
 * To ensure no conflicts with other potential React instances on the page
 */var topListenersIDKey='_reactListenersID'+String(Math.random()).slice(2);function getListeningForDocument(mountAt){ // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
// directly.
if(!Object.prototype.hasOwnProperty.call(mountAt,topListenersIDKey)){mountAt[topListenersIDKey]=reactTopListenersCounter++;alreadyListeningTo[mountAt[topListenersIDKey]]={};}return alreadyListeningTo[mountAt[topListenersIDKey]];} /**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   EventPluginHub.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */var ReactBrowserEventEmitter=_assign({},ReactEventEmitterMixin,{ /**
   * Injectable event backend
   */ReactEventListener:null,injection:{ /**
     * @param {object} ReactEventListener
     */injectReactEventListener:function injectReactEventListener(ReactEventListener){ReactEventListener.setHandleTopLevel(ReactBrowserEventEmitter.handleTopLevel);ReactBrowserEventEmitter.ReactEventListener=ReactEventListener;}}, /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */setEnabled:function setEnabled(enabled){if(ReactBrowserEventEmitter.ReactEventListener){ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);}}, /**
   * @return {boolean} True if callbacks are enabled.
   */isEnabled:function isEnabled(){return !!(ReactBrowserEventEmitter.ReactEventListener&&ReactBrowserEventEmitter.ReactEventListener.isEnabled());}, /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */listenTo:function listenTo(registrationName,contentDocumentHandle){var mountAt=contentDocumentHandle;var isListening=getListeningForDocument(mountAt);var dependencies=EventPluginRegistry.registrationNameDependencies[registrationName];var topLevelTypes=EventConstants.topLevelTypes;for(var i=0;i<dependencies.length;i++){var dependency=dependencies[i];if(!(isListening.hasOwnProperty(dependency)&&isListening[dependency])){if(dependency===topLevelTypes.topWheel){if(isEventSupported('wheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'wheel',mountAt);}else if(isEventSupported('mousewheel')){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'mousewheel',mountAt);}else { // Firefox needs to capture a different mouse scroll event.
// @see http://www.quirksmode.org/dom/events/tests/scroll.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topWheel,'DOMMouseScroll',mountAt);}}else if(dependency===topLevelTypes.topScroll){if(isEventSupported('scroll',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topScroll,'scroll',mountAt);}else {ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topScroll,'scroll',ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE);}}else if(dependency===topLevelTypes.topFocus||dependency===topLevelTypes.topBlur){if(isEventSupported('focus',true)){ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topFocus,'focus',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelTypes.topBlur,'blur',mountAt);}else if(isEventSupported('focusin')){ // IE has `focusin` and `focusout` events which bubble.
// @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topFocus,'focusin',mountAt);ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelTypes.topBlur,'focusout',mountAt);} // to make sure blur and focus event listeners are only attached once
isListening[topLevelTypes.topBlur]=true;isListening[topLevelTypes.topFocus]=true;}else if(topEventMapping.hasOwnProperty(dependency)){ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(dependency,topEventMapping[dependency],mountAt);}isListening[dependency]=true;}}},trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(topLevelType,handlerBaseName,handle);},trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(topLevelType,handlerBaseName,handle);}, /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * ViewportMetrics is only used by SyntheticMouse/TouchEvent and only when
   * pageX/pageY isn't supported (legacy browsers).
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */ensureScrollValueMonitoring:function ensureScrollValueMonitoring(){if(hasEventPageXY===undefined){hasEventPageXY=document.createEvent&&'pageX' in document.createEvent('MouseEvent');}if(!hasEventPageXY&&!isMonitoringScrollValue){var refresh=ViewportMetrics.refreshScrollValues;ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);isMonitoringScrollValue=true;}}});module.exports=ReactBrowserEventEmitter;},{"./EventConstants":18,"./EventPluginRegistry":20,"./ReactEventEmitterMixin":66,"./ViewportMetrics":109,"./getVendorPrefixedEventName":127,"./isEventSupported":129,"object-assign":165}],29:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 */'use strict';var ReactReconciler=require('./ReactReconciler');var instantiateReactComponent=require('./instantiateReactComponent');var shouldUpdateReactComponent=require('./shouldUpdateReactComponent');var traverseAllChildren=require('./traverseAllChildren');var warning=require('fbjs/lib/warning');function instantiateChild(childInstances,child,name){ // We found a component instance.
var keyUnique=childInstances[name]===undefined;if("development"!=='production'){"development"!=='production'?warning(keyUnique,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.',name):void 0;}if(child!=null&&keyUnique){childInstances[name]=instantiateReactComponent(child);}} /**
 * ReactChildReconciler provides helpers for initializing or updating a set of
 * children. Its output is suitable for passing it onto ReactMultiChild which
 * does diffed reordering and insertion.
 */var ReactChildReconciler={ /**
   * Generates a "mount image" for each of the supplied children. In the case
   * of `ReactDOMComponent`, a mount image is a string of markup.
   *
   * @param {?object} nestedChildNodes Nested child maps.
   * @return {?object} A set of child instances.
   * @internal
   */instantiateChildren:function instantiateChildren(nestedChildNodes,transaction,context){if(nestedChildNodes==null){return null;}var childInstances={};traverseAllChildren(nestedChildNodes,instantiateChild,childInstances);return childInstances;}, /**
   * Updates the rendered children and returns a new set of children.
   *
   * @param {?object} prevChildren Previously initialized set of children.
   * @param {?object} nextChildren Flat child element maps.
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @return {?object} A new set of child instances.
   * @internal
   */updateChildren:function updateChildren(prevChildren,nextChildren,removedNodes,transaction,context){ // We currently don't have a way to track moves here but if we use iterators
// instead of for..in we can zip the iterators and check if an item has
// moved.
// TODO: If nothing has changed, return the prevChildren object so that we
// can quickly bailout if nothing has changed.
if(!nextChildren&&!prevChildren){return;}var name;var prevChild;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}prevChild=prevChildren&&prevChildren[name];var prevElement=prevChild&&prevChild._currentElement;var nextElement=nextChildren[name];if(prevChild!=null&&shouldUpdateReactComponent(prevElement,nextElement)){ReactReconciler.receiveComponent(prevChild,nextElement,transaction,context);nextChildren[name]=prevChild;}else {if(prevChild){removedNodes[name]=ReactReconciler.getNativeNode(prevChild);ReactReconciler.unmountComponent(prevChild,false);} // The child must be instantiated before it's mounted.
var nextChildInstance=instantiateReactComponent(nextElement);nextChildren[name]=nextChildInstance;}} // Unmount children that are no longer present.
for(name in prevChildren){if(prevChildren.hasOwnProperty(name)&&!(nextChildren&&nextChildren.hasOwnProperty(name))){prevChild=prevChildren[name];removedNodes[name]=ReactReconciler.getNativeNode(prevChild);ReactReconciler.unmountComponent(prevChild,false);}}}, /**
   * Unmounts all rendered children. This should be used to clean up children
   * when this component is unmounted.
   *
   * @param {?object} renderedChildren Previously initialized set of children.
   * @internal
   */unmountChildren:function unmountChildren(renderedChildren,safely){for(var name in renderedChildren){if(renderedChildren.hasOwnProperty(name)){var renderedChild=renderedChildren[name];ReactReconciler.unmountComponent(renderedChild,safely);}}}};module.exports=ReactChildReconciler;},{"./ReactReconciler":87,"./instantiateReactComponent":128,"./shouldUpdateReactComponent":136,"./traverseAllChildren":137,"fbjs/lib/warning":164}],30:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */'use strict';var PooledClass=require('./PooledClass');var ReactElement=require('./ReactElement');var emptyFunction=require('fbjs/lib/emptyFunction');var traverseAllChildren=require('./traverseAllChildren');var twoArgumentPooler=PooledClass.twoArgumentPooler;var fourArgumentPooler=PooledClass.fourArgumentPooler;var userProvidedKeyEscapeRegex=/\/+/g;function escapeUserProvidedKey(text){return (''+text).replace(userProvidedKeyEscapeRegex,'$&/');} /**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */function ForEachBookKeeping(forEachFunction,forEachContext){this.func=forEachFunction;this.context=forEachContext;this.count=0;}ForEachBookKeeping.prototype.destructor=function(){this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(ForEachBookKeeping,twoArgumentPooler);function forEachSingleChild(bookKeeping,child,name){var func=bookKeeping.func;var context=bookKeeping.context;func.call(context,child,bookKeeping.count++);} /**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc
 * @param {*} forEachContext Context for forEachContext.
 */function forEachChildren(children,forEachFunc,forEachContext){if(children==null){return children;}var traverseContext=ForEachBookKeeping.getPooled(forEachFunc,forEachContext);traverseAllChildren(children,forEachSingleChild,traverseContext);ForEachBookKeeping.release(traverseContext);} /**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */function MapBookKeeping(mapResult,keyPrefix,mapFunction,mapContext){this.result=mapResult;this.keyPrefix=keyPrefix;this.func=mapFunction;this.context=mapContext;this.count=0;}MapBookKeeping.prototype.destructor=function(){this.result=null;this.keyPrefix=null;this.func=null;this.context=null;this.count=0;};PooledClass.addPoolingTo(MapBookKeeping,fourArgumentPooler);function mapSingleChildIntoContext(bookKeeping,child,childKey){var result=bookKeeping.result;var keyPrefix=bookKeeping.keyPrefix;var func=bookKeeping.func;var context=bookKeeping.context;var mappedChild=func.call(context,child,bookKeeping.count++);if(Array.isArray(mappedChild)){mapIntoWithKeyPrefixInternal(mappedChild,result,childKey,emptyFunction.thatReturnsArgument);}else if(mappedChild!=null){if(ReactElement.isValidElement(mappedChild)){mappedChild=ReactElement.cloneAndReplaceKey(mappedChild, // Keep both the (mapped) and old keys if they differ, just as
// traverseAllChildren used to do for objects as children
keyPrefix+(mappedChild.key&&(!child||child.key!==mappedChild.key)?escapeUserProvidedKey(mappedChild.key)+'/':'')+childKey);}result.push(mappedChild);}}function mapIntoWithKeyPrefixInternal(children,array,prefix,func,context){var escapedPrefix='';if(prefix!=null){escapedPrefix=escapeUserProvidedKey(prefix)+'/';}var traverseContext=MapBookKeeping.getPooled(array,escapedPrefix,func,context);traverseAllChildren(children,mapSingleChildIntoContext,traverseContext);MapBookKeeping.release(traverseContext);} /**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} func The map function.
 * @param {*} context Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */function mapChildren(children,func,context){if(children==null){return children;}var result=[];mapIntoWithKeyPrefixInternal(children,result,null,func,context);return result;}function forEachSingleChildDummy(traverseContext,child,name){return null;} /**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */function countChildren(children,context){return traverseAllChildren(children,forEachSingleChildDummy,null);} /**
 * Flatten a children object (typically specified as `props.children`) and
 * return an array with appropriately re-keyed children.
 */function toArray(children){var result=[];mapIntoWithKeyPrefixInternal(children,result,null,emptyFunction.thatReturnsArgument);return result;}var ReactChildren={forEach:forEachChildren,map:mapChildren,mapIntoWithKeyPrefixInternal:mapIntoWithKeyPrefixInternal,count:countChildren,toArray:toArray};module.exports=ReactChildren;},{"./PooledClass":26,"./ReactElement":62,"./traverseAllChildren":137,"fbjs/lib/emptyFunction":146}],31:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */'use strict';var _assign=require('object-assign');var ReactComponent=require('./ReactComponent');var ReactElement=require('./ReactElement');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var ReactPropTypeLocationNames=require('./ReactPropTypeLocationNames');var ReactNoopUpdateQueue=require('./ReactNoopUpdateQueue');var emptyObject=require('fbjs/lib/emptyObject');var invariant=require('fbjs/lib/invariant');var keyMirror=require('fbjs/lib/keyMirror');var keyOf=require('fbjs/lib/keyOf');var warning=require('fbjs/lib/warning');var MIXINS_KEY=keyOf({mixins:null}); /**
 * Policies that describe methods in `ReactClassInterface`.
 */var SpecPolicy=keyMirror({ /**
   * These methods may be defined only once by the class specification or mixin.
   */DEFINE_ONCE:null, /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */DEFINE_MANY:null, /**
   * These methods are overriding the base class.
   */OVERRIDE_BASE:null, /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */DEFINE_MANY_MERGED:null});var injectedMixins=[]; /**
 * Composite components are higher-level components that compose other composite
 * or native components.
 *
 * To create a new type of `ReactClass`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactClassInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will be available on the prototype.
 *
 * @interface ReactClassInterface
 * @internal
 */var ReactClassInterface={ /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */mixins:SpecPolicy.DEFINE_MANY, /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */statics:SpecPolicy.DEFINE_MANY, /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */propTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */contextTypes:SpecPolicy.DEFINE_MANY, /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */childContextTypes:SpecPolicy.DEFINE_MANY, // ==== Definition methods ====
/**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */getDefaultProps:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */getInitialState:SpecPolicy.DEFINE_MANY_MERGED, /**
   * @return {object}
   * @optional
   */getChildContext:SpecPolicy.DEFINE_MANY_MERGED, /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */render:SpecPolicy.DEFINE_ONCE, // ==== Delegate methods ====
/**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */componentWillMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidMount:SpecPolicy.DEFINE_MANY, /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */componentWillReceiveProps:SpecPolicy.DEFINE_MANY, /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */shouldComponentUpdate:SpecPolicy.DEFINE_ONCE, /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */componentWillUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */componentDidUpdate:SpecPolicy.DEFINE_MANY, /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */componentWillUnmount:SpecPolicy.DEFINE_MANY, // ==== Advanced methods ====
/**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */updateComponent:SpecPolicy.OVERRIDE_BASE}; /**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */var RESERVED_SPEC_KEYS={displayName:function displayName(Constructor,_displayName){Constructor.displayName=_displayName;},mixins:function mixins(Constructor,_mixins){if(_mixins){for(var i=0;i<_mixins.length;i++){mixSpecIntoComponent(Constructor,_mixins[i]);}}},childContextTypes:function childContextTypes(Constructor,_childContextTypes){if("development"!=='production'){validateTypeDef(Constructor,_childContextTypes,ReactPropTypeLocations.childContext);}Constructor.childContextTypes=_assign({},Constructor.childContextTypes,_childContextTypes);},contextTypes:function contextTypes(Constructor,_contextTypes){if("development"!=='production'){validateTypeDef(Constructor,_contextTypes,ReactPropTypeLocations.context);}Constructor.contextTypes=_assign({},Constructor.contextTypes,_contextTypes);}, /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */getDefaultProps:function getDefaultProps(Constructor,_getDefaultProps){if(Constructor.getDefaultProps){Constructor.getDefaultProps=createMergedResultFunction(Constructor.getDefaultProps,_getDefaultProps);}else {Constructor.getDefaultProps=_getDefaultProps;}},propTypes:function propTypes(Constructor,_propTypes){if("development"!=='production'){validateTypeDef(Constructor,_propTypes,ReactPropTypeLocations.prop);}Constructor.propTypes=_assign({},Constructor.propTypes,_propTypes);},statics:function statics(Constructor,_statics){mixStaticSpecIntoComponent(Constructor,_statics);},autobind:function autobind(){}}; // noop
function validateTypeDef(Constructor,typeDef,location){for(var propName in typeDef){if(typeDef.hasOwnProperty(propName)){ // use a warning instead of an invariant so components
// don't show up in prod but only in __DEV__
"development"!=='production'?warning(typeof typeDef[propName]==='function','%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',Constructor.displayName||'ReactClass',ReactPropTypeLocationNames[location],propName):void 0;}}}function validateMethodOverride(isAlreadyDefined,name){var specPolicy=ReactClassInterface.hasOwnProperty(name)?ReactClassInterface[name]:null; // Disallow overriding of base class methods unless explicitly allowed.
if(ReactClassMixin.hasOwnProperty(name)){!(specPolicy===SpecPolicy.OVERRIDE_BASE)?"development"!=='production'?invariant(false,'ReactClassInterface: You are attempting to override '+'`%s` from your class specification. Ensure that your method names '+'do not overlap with React methods.',name):invariant(false):void 0;} // Disallow defining methods more than once unless explicitly allowed.
if(isAlreadyDefined){!(specPolicy===SpecPolicy.DEFINE_MANY||specPolicy===SpecPolicy.DEFINE_MANY_MERGED)?"development"!=='production'?invariant(false,'ReactClassInterface: You are attempting to define '+'`%s` on your component more than once. This conflict may be due '+'to a mixin.',name):invariant(false):void 0;}} /**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building React classes.
 */function mixSpecIntoComponent(Constructor,spec){if(!spec){return;}!(typeof spec!=='function')?"development"!=='production'?invariant(false,'ReactClass: You\'re attempting to '+'use a component class or function as a mixin. Instead, just use a '+'regular object.'):invariant(false):void 0;!!ReactElement.isValidElement(spec)?"development"!=='production'?invariant(false,'ReactClass: You\'re attempting to '+'use a component as a mixin. Instead, just use a regular object.'):invariant(false):void 0;var proto=Constructor.prototype;var autoBindPairs=proto.__reactAutoBindPairs; // By handling mixins before any other properties, we ensure the same
// chaining order is applied to methods with DEFINE_MANY policy, whether
// mixins are listed before or after these methods in the spec.
if(spec.hasOwnProperty(MIXINS_KEY)){RESERVED_SPEC_KEYS.mixins(Constructor,spec.mixins);}for(var name in spec){if(!spec.hasOwnProperty(name)){continue;}if(name===MIXINS_KEY){ // We have already handled mixins in a special case above.
continue;}var property=spec[name];var isAlreadyDefined=proto.hasOwnProperty(name);validateMethodOverride(isAlreadyDefined,name);if(RESERVED_SPEC_KEYS.hasOwnProperty(name)){RESERVED_SPEC_KEYS[name](Constructor,property);}else { // Setup methods on prototype:
// The following member methods should not be automatically bound:
// 1. Expected ReactClass methods (in the "interface").
// 2. Overridden methods (that were mixed in).
var isReactClassMethod=ReactClassInterface.hasOwnProperty(name);var isFunction=typeof property==='function';var shouldAutoBind=isFunction&&!isReactClassMethod&&!isAlreadyDefined&&spec.autobind!==false;if(shouldAutoBind){autoBindPairs.push(name,property);proto[name]=property;}else {if(isAlreadyDefined){var specPolicy=ReactClassInterface[name]; // These cases should already be caught by validateMethodOverride.
!(isReactClassMethod&&(specPolicy===SpecPolicy.DEFINE_MANY_MERGED||specPolicy===SpecPolicy.DEFINE_MANY))?"development"!=='production'?invariant(false,'ReactClass: Unexpected spec policy %s for key %s '+'when mixing in component specs.',specPolicy,name):invariant(false):void 0; // For methods which are defined more than once, call the existing
// methods before calling the new property, merging if appropriate.
if(specPolicy===SpecPolicy.DEFINE_MANY_MERGED){proto[name]=createMergedResultFunction(proto[name],property);}else if(specPolicy===SpecPolicy.DEFINE_MANY){proto[name]=createChainedFunction(proto[name],property);}}else {proto[name]=property;if("development"!=='production'){ // Add verbose displayName to the function, which helps when looking
// at profiling tools.
if(typeof property==='function'&&spec.displayName){proto[name].displayName=spec.displayName+'_'+name;}}}}}}}function mixStaticSpecIntoComponent(Constructor,statics){if(!statics){return;}for(var name in statics){var property=statics[name];if(!statics.hasOwnProperty(name)){continue;}var isReserved=name in RESERVED_SPEC_KEYS;!!isReserved?"development"!=='production'?invariant(false,'ReactClass: You are attempting to define a reserved '+'property, `%s`, that shouldn\'t be on the "statics" key. Define it '+'as an instance property instead; it will still be accessible on the '+'constructor.',name):invariant(false):void 0;var isInherited=name in Constructor;!!isInherited?"development"!=='production'?invariant(false,'ReactClass: You are attempting to define '+'`%s` on your component more than once. This conflict may be '+'due to a mixin.',name):invariant(false):void 0;Constructor[name]=property;}} /**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */function mergeIntoWithNoDuplicateKeys(one,two){!(one&&two&&(typeof one==="undefined"?"undefined":_typeof(one))==='object'&&(typeof two==="undefined"?"undefined":_typeof(two))==='object')?"development"!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.'):invariant(false):void 0;for(var key in two){if(two.hasOwnProperty(key)){!(one[key]===undefined)?"development"!=='production'?invariant(false,'mergeIntoWithNoDuplicateKeys(): '+'Tried to merge two objects with the same key: `%s`. This conflict '+'may be due to a mixin; in particular, this may be caused by two '+'getInitialState() or getDefaultProps() methods returning objects '+'with clashing keys.',key):invariant(false):void 0;one[key]=two[key];}}return one;} /**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createMergedResultFunction(one,two){return function mergedResult(){var a=one.apply(this,arguments);var b=two.apply(this,arguments);if(a==null){return b;}else if(b==null){return a;}var c={};mergeIntoWithNoDuplicateKeys(c,a);mergeIntoWithNoDuplicateKeys(c,b);return c;};} /**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */function createChainedFunction(one,two){return function chainedFunction(){one.apply(this,arguments);two.apply(this,arguments);};} /**
 * Binds a method to the component.
 *
 * @param {object} component Component whose method is going to be bound.
 * @param {function} method Method to be bound.
 * @return {function} The bound method.
 */function bindAutoBindMethod(component,method){var boundMethod=method.bind(component);if("development"!=='production'){boundMethod.__reactBoundContext=component;boundMethod.__reactBoundMethod=method;boundMethod.__reactBoundArguments=null;var componentName=component.constructor.displayName;var _bind=boundMethod.bind;boundMethod.bind=function(newThis){for(var _len=arguments.length,args=Array(_len>1?_len-1:0),_key=1;_key<_len;_key++){args[_key-1]=arguments[_key];} // User is trying to bind() an autobound method; we effectively will
// ignore the value of "this" that the user is trying to use, so
// let's warn.
if(newThis!==component&&newThis!==null){"development"!=='production'?warning(false,'bind(): React component methods may only be bound to the '+'component instance. See %s',componentName):void 0;}else if(!args.length){"development"!=='production'?warning(false,'bind(): You are binding a component method to the component. '+'React does this for you automatically in a high-performance '+'way, so you can safely remove this call. See %s',componentName):void 0;return boundMethod;}var reboundMethod=_bind.apply(boundMethod,arguments);reboundMethod.__reactBoundContext=component;reboundMethod.__reactBoundMethod=method;reboundMethod.__reactBoundArguments=args;return reboundMethod;};}return boundMethod;} /**
 * Binds all auto-bound methods in a component.
 *
 * @param {object} component Component whose method is going to be bound.
 */function bindAutoBindMethods(component){var pairs=component.__reactAutoBindPairs;for(var i=0;i<pairs.length;i+=2){var autoBindKey=pairs[i];var method=pairs[i+1];component[autoBindKey]=bindAutoBindMethod(component,method);}} /**
 * Add more to the ReactClass base class. These are all legacy features and
 * therefore not already part of the modern ReactComponent.
 */var ReactClassMixin={ /**
   * TODO: This will be deprecated because state should always keep a consistent
   * type signature and the only use case for this, is to avoid that.
   */replaceState:function replaceState(newState,callback){this.updater.enqueueReplaceState(this,newState);if(callback){this.updater.enqueueCallback(this,callback,'replaceState');}}, /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(){return this.updater.isMounted(this);}};var ReactClassComponent=function ReactClassComponent(){};_assign(ReactClassComponent.prototype,ReactComponent.prototype,ReactClassMixin); /**
 * Module for creating composite components.
 *
 * @class ReactClass
 */var ReactClass={ /**
   * Creates a composite component class given a class specification.
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */createClass:function createClass(spec){var Constructor=function Constructor(props,context,updater){ // This constructor gets overridden by mocks. The argument is used
// by mocks to assert on what gets mounted.
if("development"!=='production'){"development"!=='production'?warning(this instanceof Constructor,'Something is calling a React component directly. Use a factory or '+'JSX instead. See: https://fb.me/react-legacyfactory'):void 0;} // Wire up auto-binding
if(this.__reactAutoBindPairs.length){bindAutoBindMethods(this);}this.props=props;this.context=context;this.refs=emptyObject;this.updater=updater||ReactNoopUpdateQueue;this.state=null; // ReactClasses doesn't have constructors. Instead, they use the
// getInitialState and componentWillMount methods for initialization.
var initialState=this.getInitialState?this.getInitialState():null;if("development"!=='production'){ // We allow auto-mocks to proceed as if they're returning null.
if(initialState===undefined&&this.getInitialState._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
initialState=null;}}!((typeof initialState==="undefined"?"undefined":_typeof(initialState))==='object'&&!Array.isArray(initialState))?"development"!=='production'?invariant(false,'%s.getInitialState(): must return an object or null',Constructor.displayName||'ReactCompositeComponent'):invariant(false):void 0;this.state=initialState;};Constructor.prototype=new ReactClassComponent();Constructor.prototype.constructor=Constructor;Constructor.prototype.__reactAutoBindPairs=[];injectedMixins.forEach(mixSpecIntoComponent.bind(null,Constructor));mixSpecIntoComponent(Constructor,spec); // Initialize the defaultProps property after all mixins have been merged.
if(Constructor.getDefaultProps){Constructor.defaultProps=Constructor.getDefaultProps();}if("development"!=='production'){ // This is a tag to indicate that the use of these method names is ok,
// since it's used with createClass. If it's not, then it's likely a
// mistake so we'll warn you to use the static property, property
// initializer or constructor respectively.
if(Constructor.getDefaultProps){Constructor.getDefaultProps.isReactClassApproved={};}if(Constructor.prototype.getInitialState){Constructor.prototype.getInitialState.isReactClassApproved={};}}!Constructor.prototype.render?"development"!=='production'?invariant(false,'createClass(...): Class specification must implement a `render` method.'):invariant(false):void 0;if("development"!=='production'){"development"!=='production'?warning(!Constructor.prototype.componentShouldUpdate,'%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',spec.displayName||'A component'):void 0;"development"!=='production'?warning(!Constructor.prototype.componentWillRecieveProps,'%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',spec.displayName||'A component'):void 0;} // Reduce time spent doing lookups by setting these on the prototype.
for(var methodName in ReactClassInterface){if(!Constructor.prototype[methodName]){Constructor.prototype[methodName]=null;}}return Constructor;},injection:{injectMixin:function injectMixin(mixin){injectedMixins.push(mixin);}}};module.exports=ReactClass;},{"./ReactComponent":32,"./ReactElement":62,"./ReactNoopUpdateQueue":80,"./ReactPropTypeLocationNames":83,"./ReactPropTypeLocations":84,"fbjs/lib/emptyObject":147,"fbjs/lib/invariant":154,"fbjs/lib/keyMirror":157,"fbjs/lib/keyOf":158,"fbjs/lib/warning":164,"object-assign":165}],32:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */'use strict';var ReactNoopUpdateQueue=require('./ReactNoopUpdateQueue');var ReactInstrumentation=require('./ReactInstrumentation');var canDefineProperty=require('./canDefineProperty');var emptyObject=require('fbjs/lib/emptyObject');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning'); /**
 * Base class helpers for the updating state of a component.
 */function ReactComponent(props,context,updater){this.props=props;this.context=context;this.refs=emptyObject; // We initialize the default updater but the real one gets injected by the
// renderer.
this.updater=updater||ReactNoopUpdateQueue;}ReactComponent.prototype.isReactComponent={}; /**
 * Sets a subset of the state. Always use this to mutate
 * state. You should treat `this.state` as immutable.
 *
 * There is no guarantee that `this.state` will be immediately updated, so
 * accessing `this.state` after calling this method may return the old value.
 *
 * There is no guarantee that calls to `setState` will run synchronously,
 * as they may eventually be batched together.  You can provide an optional
 * callback that will be executed when the call to setState is actually
 * completed.
 *
 * When a function is provided to setState, it will be called at some point in
 * the future (not synchronously). It will be called with the up to date
 * component arguments (state, props, context). These values can be different
 * from this.* because your function may be called after receiveProps but before
 * shouldComponentUpdate, and this new state, props, and context will not yet be
 * assigned to this.
 *
 * @param {object|function} partialState Next partial state or function to
 *        produce next partial state to be merged with current state.
 * @param {?function} callback Called after state is updated.
 * @final
 * @protected
 */ReactComponent.prototype.setState=function(partialState,callback){!((typeof partialState==="undefined"?"undefined":_typeof(partialState))==='object'||typeof partialState==='function'||partialState==null)?"development"!=='production'?invariant(false,'setState(...): takes an object of state variables to update or a '+'function which returns an object of state variables.'):invariant(false):void 0;if("development"!=='production'){ReactInstrumentation.debugTool.onSetState();"development"!=='production'?warning(partialState!=null,'setState(...): You passed an undefined or null state object; '+'instead, use forceUpdate().'):void 0;}this.updater.enqueueSetState(this,partialState);if(callback){this.updater.enqueueCallback(this,callback,'setState');}}; /**
 * Forces an update. This should only be invoked when it is known with
 * certainty that we are **not** in a DOM transaction.
 *
 * You may want to call this when you know that some deeper aspect of the
 * component's state has changed but `setState` was not called.
 *
 * This will not invoke `shouldComponentUpdate`, but it will invoke
 * `componentWillUpdate` and `componentDidUpdate`.
 *
 * @param {?function} callback Called after update is complete.
 * @final
 * @protected
 */ReactComponent.prototype.forceUpdate=function(callback){this.updater.enqueueForceUpdate(this);if(callback){this.updater.enqueueCallback(this,callback,'forceUpdate');}}; /**
 * Deprecated APIs. These APIs used to exist on classic React classes but since
 * we would like to deprecate them, we're not going to move them over to this
 * modern base class. Instead, we define a getter that warns if it's accessed.
 */if("development"!=='production'){var deprecatedAPIs={isMounted:['isMounted','Instead, make sure to clean up subscriptions and pending requests in '+'componentWillUnmount to prevent memory leaks.'],replaceState:['replaceState','Refactor your code to use setState instead (see '+'https://github.com/facebook/react/issues/3236).']};var defineDeprecationWarning=function defineDeprecationWarning(methodName,info){if(canDefineProperty){Object.defineProperty(ReactComponent.prototype,methodName,{get:function get(){"development"!=='production'?warning(false,'%s(...) is deprecated in plain JavaScript React classes. %s',info[0],info[1]):void 0;return undefined;}});}};for(var fnName in deprecatedAPIs){if(deprecatedAPIs.hasOwnProperty(fnName)){defineDeprecationWarning(fnName,deprecatedAPIs[fnName]);}}}module.exports=ReactComponent;},{"./ReactInstrumentation":72,"./ReactNoopUpdateQueue":80,"./canDefineProperty":112,"fbjs/lib/emptyObject":147,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],33:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */'use strict';var DOMChildrenOperations=require('./DOMChildrenOperations');var ReactDOMIDOperations=require('./ReactDOMIDOperations');var ReactPerf=require('./ReactPerf'); /**
 * Abstracts away all functionality of the reconciler that requires knowledge of
 * the browser context. TODO: These callers should be refactored to avoid the
 * need for this injection.
 */var ReactComponentBrowserEnvironment={processChildrenUpdates:ReactDOMIDOperations.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkup:DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup, /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */unmountIDFromEnvironment:function unmountIDFromEnvironment(rootNodeID){}};ReactPerf.measureMethods(ReactComponentBrowserEnvironment,'ReactComponentBrowserEnvironment',{replaceNodeWithMarkup:'replaceNodeWithMarkup'});module.exports=ReactComponentBrowserEnvironment;},{"./DOMChildrenOperations":10,"./ReactDOMIDOperations":47,"./ReactPerf":82}],34:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */'use strict';var invariant=require('fbjs/lib/invariant');var injected=false;var ReactComponentEnvironment={ /**
   * Optionally injectable environment dependent cleanup hook. (server vs.
   * browser etc). Example: A browser system caches DOM nodes based on component
   * ID and must remove that cache entry when this instance is unmounted.
   */unmountIDFromEnvironment:null, /**
   * Optionally injectable hook for swapping out mount images in the middle of
   * the tree.
   */replaceNodeWithMarkup:null, /**
   * Optionally injectable hook for processing a queue of child updates. Will
   * later move into MultiChildComponents.
   */processChildrenUpdates:null,injection:{injectEnvironment:function injectEnvironment(environment){!!injected?"development"!=='production'?invariant(false,'ReactCompositeComponent: injectEnvironment() can only be called once.'):invariant(false):void 0;ReactComponentEnvironment.unmountIDFromEnvironment=environment.unmountIDFromEnvironment;ReactComponentEnvironment.replaceNodeWithMarkup=environment.replaceNodeWithMarkup;ReactComponentEnvironment.processChildrenUpdates=environment.processChildrenUpdates;injected=true;}}};module.exports=ReactComponentEnvironment;},{"fbjs/lib/invariant":154}],35:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */'use strict';var _assign=require('object-assign');var ReactComponentEnvironment=require('./ReactComponentEnvironment');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactElement=require('./ReactElement');var ReactErrorUtils=require('./ReactErrorUtils');var ReactInstanceMap=require('./ReactInstanceMap');var ReactInstrumentation=require('./ReactInstrumentation');var ReactNodeTypes=require('./ReactNodeTypes');var ReactPerf=require('./ReactPerf');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var ReactPropTypeLocationNames=require('./ReactPropTypeLocationNames');var ReactReconciler=require('./ReactReconciler');var ReactUpdateQueue=require('./ReactUpdateQueue');var emptyObject=require('fbjs/lib/emptyObject');var invariant=require('fbjs/lib/invariant');var shouldUpdateReactComponent=require('./shouldUpdateReactComponent');var warning=require('fbjs/lib/warning');function getDeclarationErrorAddendum(component){var owner=component._currentElement._owner||null;if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';}function StatelessComponent(Component){}StatelessComponent.prototype.render=function(){var Component=ReactInstanceMap.get(this)._currentElement.type;var element=Component(this.props,this.context,this.updater);warnIfInvalidElement(Component,element);return element;};function warnIfInvalidElement(Component,element){if("development"!=='production'){"development"!=='production'?warning(element===null||element===false||ReactElement.isValidElement(element),'%s(...): A valid React element (or null) must be returned. You may have '+'returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):void 0;}} /**
 * ------------------ The Life-Cycle of a Composite Component ------------------
 *
 * - constructor: Initialization of state. The instance is now retained.
 *   - componentWillMount
 *   - render
 *   - [children's constructors]
 *     - [children's componentWillMount and render]
 *     - [children's componentDidMount]
 *     - componentDidMount
 *
 *       Update Phases:
 *       - componentWillReceiveProps (only called if parent updated)
 *       - shouldComponentUpdate
 *         - componentWillUpdate
 *           - render
 *           - [children's constructors or receive props phases]
 *         - componentDidUpdate
 *
 *     - componentWillUnmount
 *     - [children's componentWillUnmount]
 *   - [children destroyed]
 * - (destroyed): The instance is now blank, released by React and ready for GC.
 *
 * -----------------------------------------------------------------------------
 */ /**
 * An incrementing ID assigned to each component when it is mounted. This is
 * used to enforce the order in which `ReactUpdates` updates dirty components.
 *
 * @private
 */var nextMountID=1; /**
 * @lends {ReactCompositeComponent.prototype}
 */var ReactCompositeComponentMixin={ /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */construct:function construct(element){this._currentElement=element;this._rootNodeID=null;this._instance=null;this._nativeParent=null;this._nativeContainerInfo=null; // See ReactUpdateQueue
this._pendingElement=null;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._renderedNodeType=null;this._renderedComponent=null;this._context=null;this._mountOrder=0;this._topLevelWrapper=null; // See ReactUpdates and ReactUpdateQueue.
this._pendingCallbacks=null;}, /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} nativeParent
   * @param {?object} nativeContainerInfo
   * @param {?object} context
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function mountComponent(transaction,nativeParent,nativeContainerInfo,context){this._context=context;this._mountOrder=nextMountID++;this._nativeParent=nativeParent;this._nativeContainerInfo=nativeContainerInfo;var publicProps=this._processProps(this._currentElement.props);var publicContext=this._processContext(context);var Component=this._currentElement.type; // Initialize the public class
var inst;var renderedElement;if(Component.prototype&&Component.prototype.isReactComponent){if("development"!=='production'){ReactCurrentOwner.current=this;try{inst=new Component(publicProps,publicContext,ReactUpdateQueue);}finally {ReactCurrentOwner.current=null;}}else {inst=new Component(publicProps,publicContext,ReactUpdateQueue);}}else {if("development"!=='production'){ReactCurrentOwner.current=this;try{inst=Component(publicProps,publicContext,ReactUpdateQueue);}finally {ReactCurrentOwner.current=null;}}else {inst=Component(publicProps,publicContext,ReactUpdateQueue);}if(inst==null||inst.render==null){renderedElement=inst;warnIfInvalidElement(Component,renderedElement);!(inst===null||inst===false||ReactElement.isValidElement(inst))?"development"!=='production'?invariant(false,'%s(...): A valid React element (or null) must be returned. You may have '+'returned undefined, an array or some other invalid object.',Component.displayName||Component.name||'Component'):invariant(false):void 0;inst=new StatelessComponent(Component);}}if("development"!=='production'){ // This will throw later in _renderValidatedComponent, but add an early
// warning now to help debugging
if(inst.render==null){"development"!=='production'?warning(false,'%s(...): No `render` method found on the returned component '+'instance: you may have forgotten to define `render`.',Component.displayName||Component.name||'Component'):void 0;}var propsMutated=inst.props!==publicProps;var componentName=Component.displayName||Component.name||'Component';"development"!=='production'?warning(inst.props===undefined||!propsMutated,'%s(...): When calling super() in `%s`, make sure to pass '+'up the same props that your component\'s constructor was passed.',componentName,componentName):void 0;} // These should be set up in the constructor, but as a convenience for
// simpler class abstractions, we set them up after the fact.
inst.props=publicProps;inst.context=publicContext;inst.refs=emptyObject;inst.updater=ReactUpdateQueue;this._instance=inst; // Store a reference from the instance back to the internal representation
ReactInstanceMap.set(inst,this);if("development"!=='production'){ // Since plain JS classes are defined without any special initialization
// logic, we can not catch common errors early. Therefore, we have to
// catch them here, at initialization time, instead.
"development"!=='production'?warning(!inst.getInitialState||inst.getInitialState.isReactClassApproved,'getInitialState was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Did you mean to define a state property instead?',this.getName()||'a component'):void 0;"development"!=='production'?warning(!inst.getDefaultProps||inst.getDefaultProps.isReactClassApproved,'getDefaultProps was defined on %s, a plain JavaScript class. '+'This is only supported for classes created using React.createClass. '+'Use a static property to define defaultProps instead.',this.getName()||'a component'):void 0;"development"!=='production'?warning(!inst.propTypes,'propTypes was defined as an instance property on %s. Use a static '+'property to define propTypes instead.',this.getName()||'a component'):void 0;"development"!=='production'?warning(!inst.contextTypes,'contextTypes was defined as an instance property on %s. Use a '+'static property to define contextTypes instead.',this.getName()||'a component'):void 0;"development"!=='production'?warning(typeof inst.componentShouldUpdate!=='function','%s has a method called '+'componentShouldUpdate(). Did you mean shouldComponentUpdate()? '+'The name is phrased as a question because the function is '+'expected to return a value.',this.getName()||'A component'):void 0;"development"!=='production'?warning(typeof inst.componentDidUnmount!=='function','%s has a method called '+'componentDidUnmount(). But there is no such lifecycle method. '+'Did you mean componentWillUnmount()?',this.getName()||'A component'):void 0;"development"!=='production'?warning(typeof inst.componentWillRecieveProps!=='function','%s has a method called '+'componentWillRecieveProps(). Did you mean componentWillReceiveProps()?',this.getName()||'A component'):void 0;}var initialState=inst.state;if(initialState===undefined){inst.state=initialState=null;}!((typeof initialState==="undefined"?"undefined":_typeof(initialState))==='object'&&!Array.isArray(initialState))?"development"!=='production'?invariant(false,'%s.state: must be set to an object or null',this.getName()||'ReactCompositeComponent'):invariant(false):void 0;this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;var markup;if(inst.unstable_handleError){markup=this.performInitialMountWithErrorHandling(renderedElement,nativeParent,nativeContainerInfo,transaction,context);}else {markup=this.performInitialMount(renderedElement,nativeParent,nativeContainerInfo,transaction,context);}if(inst.componentDidMount){transaction.getReactMountReady().enqueue(inst.componentDidMount,inst);}return markup;},performInitialMountWithErrorHandling:function performInitialMountWithErrorHandling(renderedElement,nativeParent,nativeContainerInfo,transaction,context){var markup;var checkpoint=transaction.checkpoint();try{markup=this.performInitialMount(renderedElement,nativeParent,nativeContainerInfo,transaction,context);}catch(e){ // Roll back to checkpoint, handle error (which may add items to the transaction), and take a new checkpoint
transaction.rollback(checkpoint);this._instance.unstable_handleError(e);if(this._pendingStateQueue){this._instance.state=this._processPendingState(this._instance.props,this._instance.context);}checkpoint=transaction.checkpoint();this._renderedComponent.unmountComponent(true);transaction.rollback(checkpoint); // Try again - we've informed the component about the error, so they can render an error message this time.
// If this throws again, the error will bubble up (and can be caught by a higher error boundary).
markup=this.performInitialMount(renderedElement,nativeParent,nativeContainerInfo,transaction,context);}return markup;},performInitialMount:function performInitialMount(renderedElement,nativeParent,nativeContainerInfo,transaction,context){var inst=this._instance;if(inst.componentWillMount){inst.componentWillMount(); // When mounting, calls to `setState` by `componentWillMount` will set
// `this._pendingStateQueue` without triggering a re-render.
if(this._pendingStateQueue){inst.state=this._processPendingState(inst.props,inst.context);}} // If not a stateless component, we now render
if(renderedElement===undefined){renderedElement=this._renderValidatedComponent();}this._renderedNodeType=ReactNodeTypes.getType(renderedElement);this._renderedComponent=this._instantiateReactComponent(renderedElement);var markup=ReactReconciler.mountComponent(this._renderedComponent,transaction,nativeParent,nativeContainerInfo,this._processChildContext(context));return markup;},getNativeNode:function getNativeNode(){return ReactReconciler.getNativeNode(this._renderedComponent);}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function unmountComponent(safely){if(!this._renderedComponent){return;}var inst=this._instance;if(inst.componentWillUnmount){if(safely){var name=this.getName()+'.componentWillUnmount()';ReactErrorUtils.invokeGuardedCallback(name,inst.componentWillUnmount.bind(inst));}else {inst.componentWillUnmount();}}if(this._renderedComponent){ReactReconciler.unmountComponent(this._renderedComponent,safely);this._renderedNodeType=null;this._renderedComponent=null;this._instance=null;} // Reset pending fields
// Even if this component is scheduled for another update in ReactUpdates,
// it would still be ignored because these fields are reset.
this._pendingStateQueue=null;this._pendingReplaceState=false;this._pendingForceUpdate=false;this._pendingCallbacks=null;this._pendingElement=null; // These fields do not really need to be reset since this object is no
// longer accessible.
this._context=null;this._rootNodeID=null;this._topLevelWrapper=null; // Delete the reference from the instance to this internal representation
// which allow the internals to be properly cleaned up even if the user
// leaks a reference to the public instance.
ReactInstanceMap.remove(inst); // Some existing components rely on inst.props even after they've been
// destroyed (in event handlers).
// TODO: inst.props = null;
// TODO: inst.state = null;
// TODO: inst.context = null;
}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_maskContext:function _maskContext(context){var Component=this._currentElement.type;var contextTypes=Component.contextTypes;if(!contextTypes){return emptyObject;}var maskedContext={};for(var contextName in contextTypes){maskedContext[contextName]=context[contextName];}return maskedContext;}, /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */_processContext:function _processContext(context){var maskedContext=this._maskContext(context);if("development"!=='production'){var Component=this._currentElement.type;if(Component.contextTypes){this._checkPropTypes(Component.contextTypes,maskedContext,ReactPropTypeLocations.context);}}return maskedContext;}, /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */_processChildContext:function _processChildContext(currentContext){var Component=this._currentElement.type;var inst=this._instance;if("development"!=='production'){ReactInstrumentation.debugTool.onBeginProcessingChildContext();}var childContext=inst.getChildContext&&inst.getChildContext();if("development"!=='production'){ReactInstrumentation.debugTool.onEndProcessingChildContext();}if(childContext){!(_typeof(Component.childContextTypes)==='object')?"development"!=='production'?invariant(false,'%s.getChildContext(): childContextTypes must be defined in order to '+'use getChildContext().',this.getName()||'ReactCompositeComponent'):invariant(false):void 0;if("development"!=='production'){this._checkPropTypes(Component.childContextTypes,childContext,ReactPropTypeLocations.childContext);}for(var name in childContext){!(name in Component.childContextTypes)?"development"!=='production'?invariant(false,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||'ReactCompositeComponent',name):invariant(false):void 0;}return _assign({},currentContext,childContext);}return currentContext;}, /**
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   *
   * @param {object} newProps
   * @return {object}
   * @private
   */_processProps:function _processProps(newProps){if("development"!=='production'){var Component=this._currentElement.type;if(Component.propTypes){this._checkPropTypes(Component.propTypes,newProps,ReactPropTypeLocations.prop);}}return newProps;}, /**
   * Assert that the props are valid
   *
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */_checkPropTypes:function _checkPropTypes(propTypes,props,location){ // TODO: Stop validating prop types here and only use the element
// validation.
var componentName=this.getName();for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error;try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
!(typeof propTypes[propName]==='function')?"development"!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually '+'from React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],propName):invariant(false):void 0;error=propTypes[propName](props,propName,componentName,location);}catch(ex){error=ex;}if(error instanceof Error){ // We may want to extend this logic for similar errors in
// top-level render calls, so I'm abstracting it away into
// a function to minimize refactoring in the future
var addendum=getDeclarationErrorAddendum(this);if(location===ReactPropTypeLocations.prop){ // Preface gives us something to blacklist in warning module
"development"!=='production'?warning(false,'Failed Composite propType: %s%s',error.message,addendum):void 0;}else {"development"!=='production'?warning(false,'Failed Context Types: %s%s',error.message,addendum):void 0;}}}}},receiveComponent:function receiveComponent(nextElement,transaction,nextContext){var prevElement=this._currentElement;var prevContext=this._context;this._pendingElement=null;this.updateComponent(transaction,prevElement,nextElement,prevContext,nextContext);}, /**
   * If any of `_pendingElement`, `_pendingStateQueue`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function performUpdateIfNecessary(transaction){if(this._pendingElement!=null){ReactReconciler.receiveComponent(this,this._pendingElement,transaction,this._context);}if(this._pendingStateQueue!==null||this._pendingForceUpdate){this.updateComponent(transaction,this._currentElement,this._currentElement,this._context,this._context);}}, /**
   * Perform an update to a mounted component. The componentWillReceiveProps and
   * shouldComponentUpdate methods are called, then (assuming the update isn't
   * skipped) the remaining update lifecycle methods are called and the DOM
   * representation is updated.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevParentElement
   * @param {ReactElement} nextParentElement
   * @internal
   * @overridable
   */updateComponent:function updateComponent(transaction,prevParentElement,nextParentElement,prevUnmaskedContext,nextUnmaskedContext){var inst=this._instance;var willReceive=false;var nextContext;var nextProps; // Determine if the context has changed or not
if(this._context===nextUnmaskedContext){nextContext=inst.context;}else {nextContext=this._processContext(nextUnmaskedContext);willReceive=true;} // Distinguish between a props update versus a simple state update
if(prevParentElement===nextParentElement){ // Skip checking prop types again -- we don't read inst.props to avoid
// warning for DOM component props in this upgrade
nextProps=nextParentElement.props;}else {nextProps=this._processProps(nextParentElement.props);willReceive=true;} // An update here will schedule an update but immediately set
// _pendingStateQueue which will ensure that any state updates gets
// immediately reconciled instead of waiting for the next batch.
if(willReceive&&inst.componentWillReceiveProps){inst.componentWillReceiveProps(nextProps,nextContext);}var nextState=this._processPendingState(nextProps,nextContext);var shouldUpdate=this._pendingForceUpdate||!inst.shouldComponentUpdate||inst.shouldComponentUpdate(nextProps,nextState,nextContext);if("development"!=='production'){"development"!=='production'?warning(shouldUpdate!==undefined,'%s.shouldComponentUpdate(): Returned undefined instead of a '+'boolean value. Make sure to return true or false.',this.getName()||'ReactCompositeComponent'):void 0;}if(shouldUpdate){this._pendingForceUpdate=false; // Will set `this.props`, `this.state` and `this.context`.
this._performComponentUpdate(nextParentElement,nextProps,nextState,nextContext,transaction,nextUnmaskedContext);}else { // If it's determined that a component should not update, we still want
// to set props and state but we shortcut the rest of the update.
this._currentElement=nextParentElement;this._context=nextUnmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;}},_processPendingState:function _processPendingState(props,context){var inst=this._instance;var queue=this._pendingStateQueue;var replace=this._pendingReplaceState;this._pendingReplaceState=false;this._pendingStateQueue=null;if(!queue){return inst.state;}if(replace&&queue.length===1){return queue[0];}var nextState=_assign({},replace?queue[0]:inst.state);for(var i=replace?1:0;i<queue.length;i++){var partial=queue[i];_assign(nextState,typeof partial==='function'?partial.call(inst,nextState,props,context):partial);}return nextState;}, /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @param {?object} unmaskedContext
   * @private
   */_performComponentUpdate:function _performComponentUpdate(nextElement,nextProps,nextState,nextContext,transaction,unmaskedContext){var inst=this._instance;var hasComponentDidUpdate=Boolean(inst.componentDidUpdate);var prevProps;var prevState;var prevContext;if(hasComponentDidUpdate){prevProps=inst.props;prevState=inst.state;prevContext=inst.context;}if(inst.componentWillUpdate){inst.componentWillUpdate(nextProps,nextState,nextContext);}this._currentElement=nextElement;this._context=unmaskedContext;inst.props=nextProps;inst.state=nextState;inst.context=nextContext;this._updateRenderedComponent(transaction,unmaskedContext);if(hasComponentDidUpdate){transaction.getReactMountReady().enqueue(inst.componentDidUpdate.bind(inst,prevProps,prevState,prevContext),inst);}}, /**
   * Call the component's `render` method and update the DOM accordingly.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */_updateRenderedComponent:function _updateRenderedComponent(transaction,context){var prevComponentInstance=this._renderedComponent;var prevRenderedElement=prevComponentInstance._currentElement;var nextRenderedElement=this._renderValidatedComponent();if(shouldUpdateReactComponent(prevRenderedElement,nextRenderedElement)){ReactReconciler.receiveComponent(prevComponentInstance,nextRenderedElement,transaction,this._processChildContext(context));}else {var oldNativeNode=ReactReconciler.getNativeNode(prevComponentInstance);ReactReconciler.unmountComponent(prevComponentInstance,false);this._renderedNodeType=ReactNodeTypes.getType(nextRenderedElement);this._renderedComponent=this._instantiateReactComponent(nextRenderedElement);var nextMarkup=ReactReconciler.mountComponent(this._renderedComponent,transaction,this._nativeParent,this._nativeContainerInfo,this._processChildContext(context));this._replaceNodeWithMarkup(oldNativeNode,nextMarkup);}}, /**
   * Overridden in shallow rendering.
   *
   * @protected
   */_replaceNodeWithMarkup:function _replaceNodeWithMarkup(oldNativeNode,nextMarkup){ReactComponentEnvironment.replaceNodeWithMarkup(oldNativeNode,nextMarkup);}, /**
   * @protected
   */_renderValidatedComponentWithoutOwnerOrContext:function _renderValidatedComponentWithoutOwnerOrContext(){var inst=this._instance;var renderedComponent=inst.render();if("development"!=='production'){ // We allow auto-mocks to proceed as if they're returning null.
if(renderedComponent===undefined&&inst.render._isMockFunction){ // This is probably bad practice. Consider warning here and
// deprecating this convenience.
renderedComponent=null;}}return renderedComponent;}, /**
   * @private
   */_renderValidatedComponent:function _renderValidatedComponent(){var renderedComponent;ReactCurrentOwner.current=this;try{renderedComponent=this._renderValidatedComponentWithoutOwnerOrContext();}finally {ReactCurrentOwner.current=null;}!( // TODO: An `isValidNode` function would probably be more appropriate
renderedComponent===null||renderedComponent===false||ReactElement.isValidElement(renderedComponent))?"development"!=='production'?invariant(false,'%s.render(): A valid React element (or null) must be returned. You may have '+'returned undefined, an array or some other invalid object.',this.getName()||'ReactCompositeComponent'):invariant(false):void 0;return renderedComponent;}, /**
   * Lazily allocates the refs object and stores `component` as `ref`.
   *
   * @param {string} ref Reference name.
   * @param {component} component Component to store as `ref`.
   * @final
   * @private
   */attachRef:function attachRef(ref,component){var inst=this.getPublicInstance();!(inst!=null)?"development"!=='production'?invariant(false,'Stateless function components cannot have refs.'):invariant(false):void 0;var publicComponentInstance=component.getPublicInstance();if("development"!=='production'){var componentName=component&&component.getName?component.getName():'a component';"development"!=='production'?warning(publicComponentInstance!=null,'Stateless function components cannot be given refs '+'(See ref "%s" in %s created by %s). '+'Attempts to access this ref will fail.',ref,componentName,this.getName()):void 0;}var refs=inst.refs===emptyObject?inst.refs={}:inst.refs;refs[ref]=publicComponentInstance;}, /**
   * Detaches a reference name.
   *
   * @param {string} ref Name to dereference.
   * @final
   * @private
   */detachRef:function detachRef(ref){var refs=this.getPublicInstance().refs;delete refs[ref];}, /**
   * Get a text description of the component that can be used to identify it
   * in error messages.
   * @return {string} The name or null.
   * @internal
   */getName:function getName(){var type=this._currentElement.type;var constructor=this._instance&&this._instance.constructor;return type.displayName||constructor&&constructor.displayName||type.name||constructor&&constructor.name||null;}, /**
   * Get the publicly accessible representation of this component - i.e. what
   * is exposed by refs and returned by render. Can be null for stateless
   * components.
   *
   * @return {ReactComponent} the public component instance.
   * @internal
   */getPublicInstance:function getPublicInstance(){var inst=this._instance;if(inst instanceof StatelessComponent){return null;}return inst;}, // Stub
_instantiateReactComponent:null};ReactPerf.measureMethods(ReactCompositeComponentMixin,'ReactCompositeComponent',{mountComponent:'mountComponent',updateComponent:'updateComponent',_renderValidatedComponent:'_renderValidatedComponent'});var ReactCompositeComponent={Mixin:ReactCompositeComponentMixin};module.exports=ReactCompositeComponent;},{"./ReactComponentEnvironment":34,"./ReactCurrentOwner":36,"./ReactElement":62,"./ReactErrorUtils":65,"./ReactInstanceMap":71,"./ReactInstrumentation":72,"./ReactNodeTypes":79,"./ReactPerf":82,"./ReactPropTypeLocationNames":83,"./ReactPropTypeLocations":84,"./ReactReconciler":87,"./ReactUpdateQueue":89,"./shouldUpdateReactComponent":136,"fbjs/lib/emptyObject":147,"fbjs/lib/invariant":154,"fbjs/lib/warning":164,"object-assign":165}],36:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */'use strict'; /**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 */var ReactCurrentOwner={ /**
   * @internal
   * @type {ReactComponent}
   */current:null};module.exports=ReactCurrentOwner;},{}],37:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 */ /* globals __REACT_DEVTOOLS_GLOBAL_HOOK__*/'use strict';var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDefaultInjection=require('./ReactDefaultInjection');var ReactMount=require('./ReactMount');var ReactPerf=require('./ReactPerf');var ReactReconciler=require('./ReactReconciler');var ReactUpdates=require('./ReactUpdates');var ReactVersion=require('./ReactVersion');var findDOMNode=require('./findDOMNode');var getNativeComponentFromComposite=require('./getNativeComponentFromComposite');var renderSubtreeIntoContainer=require('./renderSubtreeIntoContainer');var warning=require('fbjs/lib/warning');ReactDefaultInjection.inject();var render=ReactPerf.measure('React','render',ReactMount.render);var React={findDOMNode:findDOMNode,render:render,unmountComponentAtNode:ReactMount.unmountComponentAtNode,version:ReactVersion, /* eslint-disable camelcase */unstable_batchedUpdates:ReactUpdates.batchedUpdates,unstable_renderSubtreeIntoContainer:renderSubtreeIntoContainer}; // Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
/* eslint-enable camelcase */if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!=='undefined'&&typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject==='function'){__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({ComponentTree:{getClosestInstanceFromNode:ReactDOMComponentTree.getClosestInstanceFromNode,getNodeFromInstance:function getNodeFromInstance(inst){ // inst is an internal instance (but could be a composite)
if(inst._renderedComponent){inst=getNativeComponentFromComposite(inst);}if(inst){return ReactDOMComponentTree.getNodeFromInstance(inst);}else {return null;}}},Mount:ReactMount,Reconciler:ReactReconciler});}if("development"!=='production'){var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');if(ExecutionEnvironment.canUseDOM&&window.top===window.self){ // First check if devtools is not installed
if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__==='undefined'){ // If we're in Chrome or Firefox, provide a download link if not installed.
if(navigator.userAgent.indexOf('Chrome')>-1&&navigator.userAgent.indexOf('Edge')===-1||navigator.userAgent.indexOf('Firefox')>-1){ // Firefox does not have the issue with devtools loaded over file://
var showFileUrlMessage=window.location.protocol.indexOf('http')===-1&&navigator.userAgent.indexOf('Firefox')===-1;console.debug('Download the React DevTools '+(showFileUrlMessage?'and use an HTTP server (instead of a file: URL) ':'')+'for a better development experience: '+'https://fb.me/react-devtools');}}var testFunc=function testFn(){};"development"!=='production'?warning((testFunc.name||testFunc.toString()).indexOf('testFn')!==-1,'It looks like you\'re using a minified copy of the development build '+'of React. When deploying React apps to production, make sure to use '+'the production build which skips development warnings and is faster. '+'See https://fb.me/react-minification for more details.'):void 0; // If we're in IE8, check to see if we are in compatibility mode and provide
// information on preventing compatibility mode
var ieCompatibilityMode=document.documentMode&&document.documentMode<8;"development"!=='production'?warning(!ieCompatibilityMode,'Internet Explorer is running in compatibility mode; please add the '+'following tag to your HTML to prevent this from happening: '+'<meta http-equiv="X-UA-Compatible" content="IE=edge" />'):void 0;var expectedFeatures=[ // shims
Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim];for(var i=0;i<expectedFeatures.length;i++){if(!expectedFeatures[i]){"development"!=='production'?warning(false,'One or more ES5 shims expected by React are not available: '+'https://fb.me/react-warning-polyfills'):void 0;break;}}}}module.exports=React;},{"./ReactDOMComponentTree":41,"./ReactDefaultInjection":59,"./ReactMount":75,"./ReactPerf":82,"./ReactReconciler":87,"./ReactUpdates":90,"./ReactVersion":91,"./findDOMNode":116,"./getNativeComponentFromComposite":124,"./renderSubtreeIntoContainer":133,"fbjs/lib/ExecutionEnvironment":140,"fbjs/lib/warning":164}],38:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */'use strict';var mouseListenerNames={onClick:true,onDoubleClick:true,onMouseDown:true,onMouseMove:true,onMouseUp:true,onClickCapture:true,onDoubleClickCapture:true,onMouseDownCapture:true,onMouseMoveCapture:true,onMouseUpCapture:true}; /**
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */var ReactDOMButton={getNativeProps:function getNativeProps(inst,props){if(!props.disabled){return props;} // Copy the props, except the mouse listeners
var nativeProps={};for(var key in props){if(props.hasOwnProperty(key)&&!mouseListenerNames[key]){nativeProps[key]=props[key];}}return nativeProps;}};module.exports=ReactDOMButton;},{}],39:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 */ /* global hasOwnProperty:true */'use strict';var _assign=require('object-assign');var AutoFocusUtils=require('./AutoFocusUtils');var CSSPropertyOperations=require('./CSSPropertyOperations');var DOMLazyTree=require('./DOMLazyTree');var DOMNamespaces=require('./DOMNamespaces');var DOMProperty=require('./DOMProperty');var DOMPropertyOperations=require('./DOMPropertyOperations');var EventConstants=require('./EventConstants');var EventPluginHub=require('./EventPluginHub');var EventPluginRegistry=require('./EventPluginRegistry');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactComponentBrowserEnvironment=require('./ReactComponentBrowserEnvironment');var ReactDOMButton=require('./ReactDOMButton');var ReactDOMComponentFlags=require('./ReactDOMComponentFlags');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMInput=require('./ReactDOMInput');var ReactDOMOption=require('./ReactDOMOption');var ReactDOMSelect=require('./ReactDOMSelect');var ReactDOMTextarea=require('./ReactDOMTextarea');var ReactMultiChild=require('./ReactMultiChild');var ReactPerf=require('./ReactPerf');var escapeTextContentForBrowser=require('./escapeTextContentForBrowser');var invariant=require('fbjs/lib/invariant');var isEventSupported=require('./isEventSupported');var keyOf=require('fbjs/lib/keyOf');var shallowEqual=require('fbjs/lib/shallowEqual');var validateDOMNesting=require('./validateDOMNesting');var warning=require('fbjs/lib/warning');var Flags=ReactDOMComponentFlags;var deleteListener=EventPluginHub.deleteListener;var getNode=ReactDOMComponentTree.getNodeFromInstance;var listenTo=ReactBrowserEventEmitter.listenTo;var registrationNameModules=EventPluginRegistry.registrationNameModules; // For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES={'string':true,'number':true};var STYLE=keyOf({style:null});var HTML=keyOf({__html:null});var RESERVED_PROPS={children:null,dangerouslySetInnerHTML:null,suppressContentEditableWarning:null};function getDeclarationErrorAddendum(internalInstance){if(internalInstance){var owner=internalInstance._currentElement._owner||null;if(owner){var name=owner.getName();if(name){return ' This DOM node was rendered by `'+name+'`.';}}}return '';}function friendlyStringify(obj){if((typeof obj==="undefined"?"undefined":_typeof(obj))==='object'){if(Array.isArray(obj)){return '['+obj.map(friendlyStringify).join(', ')+']';}else {var pairs=[];for(var key in obj){if(Object.prototype.hasOwnProperty.call(obj,key)){var keyEscaped=/^[a-z$_][\w$_]*$/i.test(key)?key:JSON.stringify(key);pairs.push(keyEscaped+': '+friendlyStringify(obj[key]));}}return '{'+pairs.join(', ')+'}';}}else if(typeof obj==='string'){return JSON.stringify(obj);}else if(typeof obj==='function'){return '[function object]';} // Differs from JSON.stringify in that undefined because undefined and that
// inf and nan don't become null
return String(obj);}var styleMutationWarning={};function checkAndWarnForMutatedStyle(style1,style2,component){if(style1==null||style2==null){return;}if(shallowEqual(style1,style2)){return;}var componentName=component._tag;var owner=component._currentElement._owner;var ownerName;if(owner){ownerName=owner.getName();}var hash=ownerName+'|'+componentName;if(styleMutationWarning.hasOwnProperty(hash)){return;}styleMutationWarning[hash]=true;"development"!=='production'?warning(false,'`%s` was passed a style object that has previously been mutated. '+'Mutating `style` is deprecated. Consider cloning it beforehand. Check '+'the `render` %s. Previous style: %s. Mutated style: %s.',componentName,owner?'of `'+ownerName+'`':'using <'+componentName+'>',friendlyStringify(style1),friendlyStringify(style2)):void 0;} /**
 * @param {object} component
 * @param {?object} props
 */function assertValidProps(component,props){if(!props){return;} // Note the use of `==` which checks for null or undefined.
if(voidElementTags[component._tag]){!(props.children==null&&props.dangerouslySetInnerHTML==null)?"development"!=='production'?invariant(false,'%s is a void element tag and must not have `children` or '+'use `props.dangerouslySetInnerHTML`.%s',component._tag,component._currentElement._owner?' Check the render method of '+component._currentElement._owner.getName()+'.':''):invariant(false):void 0;}if(props.dangerouslySetInnerHTML!=null){!(props.children==null)?"development"!=='production'?invariant(false,'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'):invariant(false):void 0;!(_typeof(props.dangerouslySetInnerHTML)==='object'&&HTML in props.dangerouslySetInnerHTML)?"development"!=='production'?invariant(false,'`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. '+'Please visit https://fb.me/react-invariant-dangerously-set-inner-html '+'for more information.'):invariant(false):void 0;}if("development"!=='production'){"development"!=='production'?warning(props.innerHTML==null,'Directly setting property `innerHTML` is not permitted. '+'For more information, lookup documentation on `dangerouslySetInnerHTML`.'):void 0;"development"!=='production'?warning(props.suppressContentEditableWarning||!props.contentEditable||props.children==null,'A component is `contentEditable` and contains `children` managed by '+'React. It is now your responsibility to guarantee that none of '+'those nodes are unexpectedly modified or duplicated. This is '+'probably not intentional.'):void 0;"development"!=='production'?warning(props.onFocusIn==null&&props.onFocusOut==null,'React uses onFocus and onBlur instead of onFocusIn and onFocusOut. '+'All React events are normalized to bubble, so onFocusIn and onFocusOut '+'are not needed/supported by React.'):void 0;}!(props.style==null||_typeof(props.style)==='object')?"development"!=='production'?invariant(false,'The `style` prop expects a mapping from style properties to values, '+'not a string. For example, style={{marginRight: spacing + \'em\'}} when '+'using JSX.%s',getDeclarationErrorAddendum(component)):invariant(false):void 0;}function enqueuePutListener(inst,registrationName,listener,transaction){if("development"!=='production'){ // IE8 has no API for event capturing and the `onScroll` event doesn't
// bubble.
"development"!=='production'?warning(registrationName!=='onScroll'||isEventSupported('scroll',true),'This browser doesn\'t support the `onScroll` event'):void 0;}var containerInfo=inst._nativeContainerInfo;var doc=containerInfo._ownerDocument;if(!doc){ // Server rendering.
return;}listenTo(registrationName,doc);transaction.getReactMountReady().enqueue(putListener,{inst:inst,registrationName:registrationName,listener:listener});}function putListener(){var listenerToPut=this;EventPluginHub.putListener(listenerToPut.inst,listenerToPut.registrationName,listenerToPut.listener);}function optionPostMount(){var inst=this;ReactDOMOption.postMountWrapper(inst);} // There are so many media events, it makes sense to just
// maintain a list rather than create a `trapBubbledEvent` for each
var mediaEvents={topAbort:'abort',topCanPlay:'canplay',topCanPlayThrough:'canplaythrough',topDurationChange:'durationchange',topEmptied:'emptied',topEncrypted:'encrypted',topEnded:'ended',topError:'error',topLoadedData:'loadeddata',topLoadedMetadata:'loadedmetadata',topLoadStart:'loadstart',topPause:'pause',topPlay:'play',topPlaying:'playing',topProgress:'progress',topRateChange:'ratechange',topSeeked:'seeked',topSeeking:'seeking',topStalled:'stalled',topSuspend:'suspend',topTimeUpdate:'timeupdate',topVolumeChange:'volumechange',topWaiting:'waiting'};function trapBubbledEventsLocal(){var inst=this; // If a component renders to null or if another component fatals and causes
// the state of the tree to be corrupted, `node` here can be null.
!inst._rootNodeID?"development"!=='production'?invariant(false,'Must be mounted to trap events'):invariant(false):void 0;var node=getNode(inst);!node?"development"!=='production'?invariant(false,'trapBubbledEvent(...): Requires node to be rendered.'):invariant(false):void 0;switch(inst._tag){case 'iframe':case 'object':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case 'video':case 'audio':inst._wrapperState.listeners=[]; // Create listener for each media event
for(var event in mediaEvents){if(mediaEvents.hasOwnProperty(event)){inst._wrapperState.listeners.push(ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes[event],mediaEvents[event],node));}}break;case 'img':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topError,'error',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topLoad,'load',node)];break;case 'form':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topReset,'reset',node),ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit,'submit',node)];break;case 'input':case 'select':case 'textarea':inst._wrapperState.listeners=[ReactBrowserEventEmitter.trapBubbledEvent(EventConstants.topLevelTypes.topInvalid,'invalid',node)];break;}}function postUpdateSelectWrapper(){ReactDOMSelect.postUpdateWrapper(this);} // For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special-case tags.
var omittedCloseTags={'area':true,'base':true,'br':true,'col':true,'embed':true,'hr':true,'img':true,'input':true,'keygen':true,'link':true,'meta':true,'param':true,'source':true,'track':true,'wbr':true}; // NOTE: menuitem's close tag should be omitted, but that causes problems.
var newlineEatingTags={'listing':true,'pre':true,'textarea':true}; // For HTML, certain tags cannot have children. This has the same purpose as
// `omittedCloseTags` except that `menuitem` should still have its closing tag.
var voidElementTags=_assign({'menuitem':true},omittedCloseTags); // We accept any tag to be rendered but since this gets injected into arbitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name
var VALID_TAG_REGEX=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache={};var hasOwnProperty={}.hasOwnProperty;function validateDangerousTag(tag){if(!hasOwnProperty.call(validatedTagCache,tag)){!VALID_TAG_REGEX.test(tag)?"development"!=='production'?invariant(false,'Invalid tag: %s',tag):invariant(false):void 0;validatedTagCache[tag]=true;}}function isCustomComponent(tagName,props){return tagName.indexOf('-')>=0||props.is!=null;}var globalIdCounter=1; /**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactMultiChild
 */function ReactDOMComponent(element){var tag=element.type;validateDangerousTag(tag);this._currentElement=element;this._tag=tag.toLowerCase();this._namespaceURI=null;this._renderedChildren=null;this._previousStyle=null;this._previousStyleCopy=null;this._nativeNode=null;this._nativeParent=null;this._rootNodeID=null;this._domID=null;this._nativeContainerInfo=null;this._wrapperState=null;this._topLevelWrapper=null;this._flags=0;if("development"!=='production'){this._ancestorInfo=null;}}ReactDOMComponent.displayName='ReactDOMComponent';ReactDOMComponent.Mixin={ /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?ReactDOMComponent} the containing DOM component instance
   * @param {?object} info about the native container
   * @param {object} context
   * @return {string} The computed markup.
   */mountComponent:function mountComponent(transaction,nativeParent,nativeContainerInfo,context){this._rootNodeID=globalIdCounter++;this._domID=nativeContainerInfo._idCounter++;this._nativeParent=nativeParent;this._nativeContainerInfo=nativeContainerInfo;var props=this._currentElement.props;switch(this._tag){case 'iframe':case 'object':case 'img':case 'form':case 'video':case 'audio':this._wrapperState={listeners:null};transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case 'button':props=ReactDOMButton.getNativeProps(this,props,nativeParent);break;case 'input':ReactDOMInput.mountWrapper(this,props,nativeParent);props=ReactDOMInput.getNativeProps(this,props);transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case 'option':ReactDOMOption.mountWrapper(this,props,nativeParent);props=ReactDOMOption.getNativeProps(this,props);break;case 'select':ReactDOMSelect.mountWrapper(this,props,nativeParent);props=ReactDOMSelect.getNativeProps(this,props);transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;case 'textarea':ReactDOMTextarea.mountWrapper(this,props,nativeParent);props=ReactDOMTextarea.getNativeProps(this,props);transaction.getReactMountReady().enqueue(trapBubbledEventsLocal,this);break;}assertValidProps(this,props); // We create tags in the namespace of their parent container, except HTML
// tags get no namespace.
var namespaceURI;var parentTag;if(nativeParent!=null){namespaceURI=nativeParent._namespaceURI;parentTag=nativeParent._tag;}else if(nativeContainerInfo._tag){namespaceURI=nativeContainerInfo._namespaceURI;parentTag=nativeContainerInfo._tag;}if(namespaceURI==null||namespaceURI===DOMNamespaces.svg&&parentTag==='foreignobject'){namespaceURI=DOMNamespaces.html;}if(namespaceURI===DOMNamespaces.html){if(this._tag==='svg'){namespaceURI=DOMNamespaces.svg;}else if(this._tag==='math'){namespaceURI=DOMNamespaces.mathml;}}this._namespaceURI=namespaceURI;if("development"!=='production'){var parentInfo;if(nativeParent!=null){parentInfo=nativeParent._ancestorInfo;}else if(nativeContainerInfo._tag){parentInfo=nativeContainerInfo._ancestorInfo;}if(parentInfo){ // parentInfo should always be present except for the top-level
// component when server rendering
validateDOMNesting(this._tag,this,parentInfo);}this._ancestorInfo=validateDOMNesting.updatedAncestorInfo(parentInfo,this._tag,this);}var mountImage;if(transaction.useCreateElement){var ownerDocument=nativeContainerInfo._ownerDocument;var el;if(namespaceURI===DOMNamespaces.html){if(this._tag==='script'){ // Create the script via .innerHTML so its "parser-inserted" flag is
// set to true and it does not execute
var div=ownerDocument.createElement('div');var type=this._currentElement.type;div.innerHTML='<'+type+'></'+type+'>';el=div.removeChild(div.firstChild);}else {el=ownerDocument.createElement(this._currentElement.type);}}else {el=ownerDocument.createElementNS(namespaceURI,this._currentElement.type);}ReactDOMComponentTree.precacheNode(this,el);this._flags|=Flags.hasCachedChildNodes;if(!this._nativeParent){DOMPropertyOperations.setAttributeForRoot(el);}this._updateDOMProperties(null,props,transaction);var lazyTree=DOMLazyTree(el);this._createInitialChildren(transaction,props,context,lazyTree);mountImage=lazyTree;}else {var tagOpen=this._createOpenTagMarkupAndPutListeners(transaction,props);var tagContent=this._createContentMarkup(transaction,props,context);if(!tagContent&&omittedCloseTags[this._tag]){mountImage=tagOpen+'/>';}else {mountImage=tagOpen+'>'+tagContent+'</'+this._currentElement.type+'>';}}switch(this._tag){case 'button':case 'input':case 'select':case 'textarea':if(props.autoFocus){transaction.getReactMountReady().enqueue(AutoFocusUtils.focusDOMComponent,this);}break;case 'option':transaction.getReactMountReady().enqueue(optionPostMount,this);}return mountImage;}, /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @return {string} Markup of opening tag.
   */_createOpenTagMarkupAndPutListeners:function _createOpenTagMarkupAndPutListeners(transaction,props){var ret='<'+this._currentElement.type;for(var propKey in props){if(!props.hasOwnProperty(propKey)){continue;}var propValue=props[propKey];if(propValue==null){continue;}if(registrationNameModules.hasOwnProperty(propKey)){if(propValue){enqueuePutListener(this,propKey,propValue,transaction);}}else {if(propKey===STYLE){if(propValue){if("development"!=='production'){ // See `_updateDOMProperties`. style block
this._previousStyle=propValue;}propValue=this._previousStyleCopy=_assign({},props.style);}propValue=CSSPropertyOperations.createMarkupForStyles(propValue,this);}var markup=null;if(this._tag!=null&&isCustomComponent(this._tag,props)){if(!RESERVED_PROPS.hasOwnProperty(propKey)){markup=DOMPropertyOperations.createMarkupForCustomAttribute(propKey,propValue);}}else {markup=DOMPropertyOperations.createMarkupForProperty(propKey,propValue);}if(markup){ret+=' '+markup;}}} // For static pages, no need to put React ID and checksum. Saves lots of
// bytes.
if(transaction.renderToStaticMarkup){return ret;}if(!this._nativeParent){ret+=' '+DOMPropertyOperations.createMarkupForRoot();}ret+=' '+DOMPropertyOperations.createMarkupForID(this._domID);return ret;}, /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} props
   * @param {object} context
   * @return {string} Content markup.
   */_createContentMarkup:function _createContentMarkup(transaction,props,context){var ret=''; // Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){ret=innerHTML.__html;}}else {var contentToUse=CONTENT_TYPES[_typeof(props.children)]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){ // TODO: Validate that text is allowed as a child of this node
ret=escapeTextContentForBrowser(contentToUse);}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);ret=mountImages.join('');}}if(newlineEatingTags[this._tag]&&ret.charAt(0)==='\n'){ // text/html ignores the first character in these tags if it's a newline
// Prefer to break application/xml over text/html (for now) by adding
// a newline specifically to get eaten by the parser. (Alternately for
// textareas, replacing "^\n" with "\r\n" doesn't get eaten, and the first
// \r is normalized out by HTMLTextAreaElement#value.)
// See: <http://www.w3.org/TR/html-polyglot/#newlines-in-textarea-and-pre>
// See: <http://www.w3.org/TR/html5/syntax.html#element-restrictions>
// See: <http://www.w3.org/TR/html5/syntax.html#newlines>
// See: Parsing of "textarea" "listing" and "pre" elements
//  from <http://www.w3.org/TR/html5/syntax.html#parsing-main-inbody>
return '\n'+ret;}else {return ret;}},_createInitialChildren:function _createInitialChildren(transaction,props,context,lazyTree){ // Intentional use of != to avoid catching zero/false.
var innerHTML=props.dangerouslySetInnerHTML;if(innerHTML!=null){if(innerHTML.__html!=null){DOMLazyTree.queueHTML(lazyTree,innerHTML.__html);}}else {var contentToUse=CONTENT_TYPES[_typeof(props.children)]?props.children:null;var childrenToUse=contentToUse!=null?null:props.children;if(contentToUse!=null){ // TODO: Validate that text is allowed as a child of this node
DOMLazyTree.queueText(lazyTree,contentToUse);}else if(childrenToUse!=null){var mountImages=this.mountChildren(childrenToUse,transaction,context);for(var i=0;i<mountImages.length;i++){DOMLazyTree.queueChild(lazyTree,mountImages[i]);}}}}, /**
   * Receives a next element and updates the component.
   *
   * @internal
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {object} context
   */receiveComponent:function receiveComponent(nextElement,transaction,context){var prevElement=this._currentElement;this._currentElement=nextElement;this.updateComponent(transaction,prevElement,nextElement,context);}, /**
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @param {ReactElement} nextElement
   * @internal
   * @overridable
   */updateComponent:function updateComponent(transaction,prevElement,nextElement,context){var lastProps=prevElement.props;var nextProps=this._currentElement.props;switch(this._tag){case 'button':lastProps=ReactDOMButton.getNativeProps(this,lastProps);nextProps=ReactDOMButton.getNativeProps(this,nextProps);break;case 'input':ReactDOMInput.updateWrapper(this);lastProps=ReactDOMInput.getNativeProps(this,lastProps);nextProps=ReactDOMInput.getNativeProps(this,nextProps);break;case 'option':lastProps=ReactDOMOption.getNativeProps(this,lastProps);nextProps=ReactDOMOption.getNativeProps(this,nextProps);break;case 'select':lastProps=ReactDOMSelect.getNativeProps(this,lastProps);nextProps=ReactDOMSelect.getNativeProps(this,nextProps);break;case 'textarea':ReactDOMTextarea.updateWrapper(this);lastProps=ReactDOMTextarea.getNativeProps(this,lastProps);nextProps=ReactDOMTextarea.getNativeProps(this,nextProps);break;}assertValidProps(this,nextProps);this._updateDOMProperties(lastProps,nextProps,transaction);this._updateDOMChildren(lastProps,nextProps,transaction,context);if(this._tag==='select'){ // <select> value update needs to occur after <option> children
// reconciliation
transaction.getReactMountReady().enqueue(postUpdateSelectWrapper,this);}}, /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {?DOMElement} node
   */_updateDOMProperties:function _updateDOMProperties(lastProps,nextProps,transaction){var propKey;var styleName;var styleUpdates;for(propKey in lastProps){if(nextProps.hasOwnProperty(propKey)||!lastProps.hasOwnProperty(propKey)||lastProps[propKey]==null){continue;}if(propKey===STYLE){var lastStyle=this._previousStyleCopy;for(styleName in lastStyle){if(lastStyle.hasOwnProperty(styleName)){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}}this._previousStyleCopy=null;}else if(registrationNameModules.hasOwnProperty(propKey)){if(lastProps[propKey]){ // Only call deleteListener if there was a listener previously or
// else willDeleteListener gets called when there wasn't actually a
// listener (e.g., onClick={null})
deleteListener(this,propKey);}}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){DOMPropertyOperations.deleteValueForProperty(getNode(this),propKey);}}for(propKey in nextProps){var nextProp=nextProps[propKey];var lastProp=propKey===STYLE?this._previousStyleCopy:lastProps!=null?lastProps[propKey]:undefined;if(!nextProps.hasOwnProperty(propKey)||nextProp===lastProp||nextProp==null&&lastProp==null){continue;}if(propKey===STYLE){if(nextProp){if("development"!=='production'){checkAndWarnForMutatedStyle(this._previousStyleCopy,this._previousStyle,this);this._previousStyle=nextProp;}nextProp=this._previousStyleCopy=_assign({},nextProp);}else {this._previousStyleCopy=null;}if(lastProp){ // Unset styles on `lastProp` but not on `nextProp`.
for(styleName in lastProp){if(lastProp.hasOwnProperty(styleName)&&(!nextProp||!nextProp.hasOwnProperty(styleName))){styleUpdates=styleUpdates||{};styleUpdates[styleName]='';}} // Update styles that changed since `lastProp`.
for(styleName in nextProp){if(nextProp.hasOwnProperty(styleName)&&lastProp[styleName]!==nextProp[styleName]){styleUpdates=styleUpdates||{};styleUpdates[styleName]=nextProp[styleName];}}}else { // Relies on `updateStylesByID` not mutating `styleUpdates`.
styleUpdates=nextProp;}}else if(registrationNameModules.hasOwnProperty(propKey)){if(nextProp){enqueuePutListener(this,propKey,nextProp,transaction);}else if(lastProp){deleteListener(this,propKey);}}else if(isCustomComponent(this._tag,nextProps)){if(!RESERVED_PROPS.hasOwnProperty(propKey)){DOMPropertyOperations.setValueForAttribute(getNode(this),propKey,nextProp);}}else if(DOMProperty.properties[propKey]||DOMProperty.isCustomAttribute(propKey)){var node=getNode(this); // If we're updating to null or undefined, we should remove the property
// from the DOM node instead of inadvertently setting to a string. This
// brings us in line with the same behavior we have on initial render.
if(nextProp!=null){DOMPropertyOperations.setValueForProperty(node,propKey,nextProp);}else {DOMPropertyOperations.deleteValueForProperty(node,propKey);}}}if(styleUpdates){CSSPropertyOperations.setValueForStyles(getNode(this),styleUpdates,this);}}, /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {object} nextProps
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   */_updateDOMChildren:function _updateDOMChildren(lastProps,nextProps,transaction,context){var lastContent=CONTENT_TYPES[_typeof(lastProps.children)]?lastProps.children:null;var nextContent=CONTENT_TYPES[_typeof(nextProps.children)]?nextProps.children:null;var lastHtml=lastProps.dangerouslySetInnerHTML&&lastProps.dangerouslySetInnerHTML.__html;var nextHtml=nextProps.dangerouslySetInnerHTML&&nextProps.dangerouslySetInnerHTML.__html; // Note the use of `!=` which checks for null or undefined.
var lastChildren=lastContent!=null?null:lastProps.children;var nextChildren=nextContent!=null?null:nextProps.children; // If we're switching from children to content/html or vice versa, remove
// the old content
var lastHasContentOrHtml=lastContent!=null||lastHtml!=null;var nextHasContentOrHtml=nextContent!=null||nextHtml!=null;if(lastChildren!=null&&nextChildren==null){this.updateChildren(null,transaction,context);}else if(lastHasContentOrHtml&&!nextHasContentOrHtml){this.updateTextContent('');}if(nextContent!=null){if(lastContent!==nextContent){this.updateTextContent(''+nextContent);}}else if(nextHtml!=null){if(lastHtml!==nextHtml){this.updateMarkup(''+nextHtml);}}else if(nextChildren!=null){this.updateChildren(nextChildren,transaction,context);}},getNativeNode:function getNativeNode(){return getNode(this);}, /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */unmountComponent:function unmountComponent(safely){switch(this._tag){case 'iframe':case 'object':case 'img':case 'form':case 'video':case 'audio':var listeners=this._wrapperState.listeners;if(listeners){for(var i=0;i<listeners.length;i++){listeners[i].remove();}}break;case 'html':case 'head':case 'body': /**
         * Components like <html> <head> and <body> can't be removed or added
         * easily in a cross-browser way, however it's valuable to be able to
         * take advantage of React's reconciliation for styling and <title>
         * management. So we just document it and throw in dangerous cases.
         */!false?"development"!=='production'?invariant(false,'<%s> tried to unmount. Because of cross-browser quirks it is '+'impossible to unmount some top-level components (eg <html>, '+'<head>, and <body>) reliably and efficiently. To fix this, have a '+'single top-level component that never unmounts render these '+'elements.',this._tag):invariant(false):void 0;break;}this.unmountChildren(safely);ReactDOMComponentTree.uncacheNode(this);EventPluginHub.deleteAllListeners(this);ReactComponentBrowserEnvironment.unmountIDFromEnvironment(this._rootNodeID);this._rootNodeID=null;this._domID=null;this._wrapperState=null;},getPublicInstance:function getPublicInstance(){return getNode(this);}};ReactPerf.measureMethods(ReactDOMComponent.Mixin,'ReactDOMComponent',{mountComponent:'mountComponent',receiveComponent:'receiveComponent'});_assign(ReactDOMComponent.prototype,ReactDOMComponent.Mixin,ReactMultiChild.Mixin);module.exports=ReactDOMComponent;},{"./AutoFocusUtils":4,"./CSSPropertyOperations":7,"./DOMLazyTree":11,"./DOMNamespaces":12,"./DOMProperty":13,"./DOMPropertyOperations":14,"./EventConstants":18,"./EventPluginHub":19,"./EventPluginRegistry":20,"./ReactBrowserEventEmitter":28,"./ReactComponentBrowserEnvironment":33,"./ReactDOMButton":38,"./ReactDOMComponentFlags":40,"./ReactDOMComponentTree":41,"./ReactDOMInput":48,"./ReactDOMOption":50,"./ReactDOMSelect":51,"./ReactDOMTextarea":54,"./ReactMultiChild":76,"./ReactPerf":82,"./escapeTextContentForBrowser":115,"./isEventSupported":129,"./validateDOMNesting":138,"fbjs/lib/invariant":154,"fbjs/lib/keyOf":158,"fbjs/lib/shallowEqual":163,"fbjs/lib/warning":164,"object-assign":165}],40:[function(require,module,exports){ /**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentFlags
 */'use strict';var ReactDOMComponentFlags={hasCachedChildNodes:1<<0};module.exports=ReactDOMComponentFlags;},{}],41:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponentTree
 */'use strict';var DOMProperty=require('./DOMProperty');var ReactDOMComponentFlags=require('./ReactDOMComponentFlags');var invariant=require('fbjs/lib/invariant');var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;var Flags=ReactDOMComponentFlags;var internalInstanceKey='__reactInternalInstance$'+Math.random().toString(36).slice(2); /**
 * Drill down (through composites and empty components) until we get a native or
 * native text component.
 *
 * This is pretty polymorphic but unavoidable with the current structure we have
 * for `_renderedChildren`.
 */function getRenderedNativeOrTextFromComponent(component){var rendered;while(rendered=component._renderedComponent){component=rendered;}return component;} /**
 * Populate `_nativeNode` on the rendered native/text component with the given
 * DOM node. The passed `inst` can be a composite.
 */function precacheNode(inst,node){var nativeInst=getRenderedNativeOrTextFromComponent(inst);nativeInst._nativeNode=node;node[internalInstanceKey]=nativeInst;}function uncacheNode(inst){var node=inst._nativeNode;if(node){delete node[internalInstanceKey];inst._nativeNode=null;}} /**
 * Populate `_nativeNode` on each child of `inst`, assuming that the children
 * match up with the DOM (element) children of `node`.
 *
 * We cache entire levels at once to avoid an n^2 problem where we access the
 * children of a node sequentially and have to walk from the start to our target
 * node every time.
 *
 * Since we update `_renderedChildren` and the actual DOM at (slightly)
 * different times, we could race here and see a newer `_renderedChildren` than
 * the DOM nodes we see. To avoid this, ReactMultiChild calls
 * `prepareToManageChildren` before we change `_renderedChildren`, at which
 * time the container's child nodes are always cached (until it unmounts).
 */function precacheChildNodes(inst,node){if(inst._flags&Flags.hasCachedChildNodes){return;}var children=inst._renderedChildren;var childNode=node.firstChild;outer: for(var name in children){if(!children.hasOwnProperty(name)){continue;}var childInst=children[name];var childID=getRenderedNativeOrTextFromComponent(childInst)._domID;if(childID==null){ // We're currently unmounting this child in ReactMultiChild; skip it.
continue;} // We assume the child nodes are in the same order as the child instances.
for(;childNode!==null;childNode=childNode.nextSibling){if(childNode.nodeType===1&&childNode.getAttribute(ATTR_NAME)===String(childID)||childNode.nodeType===8&&childNode.nodeValue===' react-text: '+childID+' '||childNode.nodeType===8&&childNode.nodeValue===' react-empty: '+childID+' '){precacheNode(childInst,childNode);continue outer;}} // We reached the end of the DOM children without finding an ID match.
!false?"development"!=='production'?invariant(false,'Unable to find element with ID %s.',childID):invariant(false):void 0;}inst._flags|=Flags.hasCachedChildNodes;} /**
 * Given a DOM node, return the closest ReactDOMComponent or
 * ReactDOMTextComponent instance ancestor.
 */function getClosestInstanceFromNode(node){if(node[internalInstanceKey]){return node[internalInstanceKey];} // Walk up the tree until we find an ancestor whose instance we have cached.
var parents=[];while(!node[internalInstanceKey]){parents.push(node);if(node.parentNode){node=node.parentNode;}else { // Top of the tree. This node must not be part of a React tree (or is
// unmounted, potentially).
return null;}}var closest;var inst;for(;node&&(inst=node[internalInstanceKey]);node=parents.pop()){closest=inst;if(parents.length){precacheChildNodes(inst,node);}}return closest;} /**
 * Given a DOM node, return the ReactDOMComponent or ReactDOMTextComponent
 * instance, or null if the node was not rendered by this React.
 */function getInstanceFromNode(node){var inst=getClosestInstanceFromNode(node);if(inst!=null&&inst._nativeNode===node){return inst;}else {return null;}} /**
 * Given a ReactDOMComponent or ReactDOMTextComponent, return the corresponding
 * DOM node.
 */function getNodeFromInstance(inst){ // Without this first invariant, passing a non-DOM-component triggers the next
// invariant for a missing parent, which is super confusing.
!(inst._nativeNode!==undefined)?"development"!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):invariant(false):void 0;if(inst._nativeNode){return inst._nativeNode;} // Walk up the tree until we find an ancestor whose DOM node we have cached.
var parents=[];while(!inst._nativeNode){parents.push(inst);!inst._nativeParent?"development"!=='production'?invariant(false,'React DOM tree root should always have a node reference.'):invariant(false):void 0;inst=inst._nativeParent;} // Now parents contains each ancestor that does *not* have a cached native
// node, and `inst` is the deepest ancestor that does.
for(;parents.length;inst=parents.pop()){precacheChildNodes(inst,inst._nativeNode);}return inst._nativeNode;}var ReactDOMComponentTree={getClosestInstanceFromNode:getClosestInstanceFromNode,getInstanceFromNode:getInstanceFromNode,getNodeFromInstance:getNodeFromInstance,precacheChildNodes:precacheChildNodes,precacheNode:precacheNode,uncacheNode:uncacheNode};module.exports=ReactDOMComponentTree;},{"./DOMProperty":13,"./ReactDOMComponentFlags":40,"fbjs/lib/invariant":154}],42:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMContainerInfo
 */'use strict';var validateDOMNesting=require('./validateDOMNesting');var DOC_NODE_TYPE=9;function ReactDOMContainerInfo(topLevelWrapper,node){var info={_topLevelWrapper:topLevelWrapper,_idCounter:1,_ownerDocument:node?node.nodeType===DOC_NODE_TYPE?node:node.ownerDocument:null,_tag:node?node.nodeName.toLowerCase():null,_namespaceURI:node?node.namespaceURI:null};if("development"!=='production'){info._ancestorInfo=node?validateDOMNesting.updatedAncestorInfo(null,info._tag,null):null;}return info;}module.exports=ReactDOMContainerInfo;},{"./validateDOMNesting":138}],43:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMDebugTool
 */'use strict';var ReactDOMUnknownPropertyDevtool=require('./ReactDOMUnknownPropertyDevtool');var warning=require('fbjs/lib/warning');var eventHandlers=[];var handlerDoesThrowForEvent={};function emitEvent(handlerFunctionName,arg1,arg2,arg3,arg4,arg5){if("development"!=='production'){eventHandlers.forEach(function(handler){try{if(handler[handlerFunctionName]){handler[handlerFunctionName](arg1,arg2,arg3,arg4,arg5);}}catch(e){"development"!=='production'?warning(!handlerDoesThrowForEvent[handlerFunctionName],'exception thrown by devtool while handling %s: %s',handlerFunctionName,e.message):void 0;handlerDoesThrowForEvent[handlerFunctionName]=true;}});}}var ReactDOMDebugTool={addDevtool:function addDevtool(devtool){eventHandlers.push(devtool);},removeDevtool:function removeDevtool(devtool){for(var i=0;i<eventHandlers.length;i++){if(eventHandlers[i]===devtool){eventHandlers.splice(i,1);i--;}}},onCreateMarkupForProperty:function onCreateMarkupForProperty(name,value){emitEvent('onCreateMarkupForProperty',name,value);},onSetValueForProperty:function onSetValueForProperty(node,name,value){emitEvent('onSetValueForProperty',node,name,value);},onDeleteValueForProperty:function onDeleteValueForProperty(node,name){emitEvent('onDeleteValueForProperty',node,name);}};ReactDOMDebugTool.addDevtool(ReactDOMUnknownPropertyDevtool);module.exports=ReactDOMDebugTool;},{"./ReactDOMUnknownPropertyDevtool":56,"fbjs/lib/warning":164}],44:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMEmptyComponent
 */'use strict';var _assign=require('object-assign');var DOMLazyTree=require('./DOMLazyTree');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMEmptyComponent=function ReactDOMEmptyComponent(instantiate){ // ReactCompositeComponent uses this:
this._currentElement=null; // ReactDOMComponentTree uses these:
this._nativeNode=null;this._nativeParent=null;this._nativeContainerInfo=null;this._domID=null;};_assign(ReactDOMEmptyComponent.prototype,{mountComponent:function mountComponent(transaction,nativeParent,nativeContainerInfo,context){var domID=nativeContainerInfo._idCounter++;this._domID=domID;this._nativeParent=nativeParent;this._nativeContainerInfo=nativeContainerInfo;var nodeValue=' react-empty: '+this._domID+' ';if(transaction.useCreateElement){var ownerDocument=nativeContainerInfo._ownerDocument;var node=ownerDocument.createComment(nodeValue);ReactDOMComponentTree.precacheNode(this,node);return DOMLazyTree(node);}else {if(transaction.renderToStaticMarkup){ // Normally we'd insert a comment node, but since this is a situation
// where React won't take over (static pages), we can simply return
// nothing.
return '';}return '<!--'+nodeValue+'-->';}},receiveComponent:function receiveComponent(){},getNativeNode:function getNativeNode(){return ReactDOMComponentTree.getNodeFromInstance(this);},unmountComponent:function unmountComponent(){ReactDOMComponentTree.uncacheNode(this);}});module.exports=ReactDOMEmptyComponent;},{"./DOMLazyTree":11,"./ReactDOMComponentTree":41,"object-assign":165}],45:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFactories
 */'use strict';var ReactElement=require('./ReactElement');var ReactElementValidator=require('./ReactElementValidator');var mapObject=require('fbjs/lib/mapObject'); /**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */function createDOMFactory(tag){if("development"!=='production'){return ReactElementValidator.createFactory(tag);}return ReactElement.createFactory(tag);} /**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */var ReactDOMFactories=mapObject({a:'a',abbr:'abbr',address:'address',area:'area',article:'article',aside:'aside',audio:'audio',b:'b',base:'base',bdi:'bdi',bdo:'bdo',big:'big',blockquote:'blockquote',body:'body',br:'br',button:'button',canvas:'canvas',caption:'caption',cite:'cite',code:'code',col:'col',colgroup:'colgroup',data:'data',datalist:'datalist',dd:'dd',del:'del',details:'details',dfn:'dfn',dialog:'dialog',div:'div',dl:'dl',dt:'dt',em:'em',embed:'embed',fieldset:'fieldset',figcaption:'figcaption',figure:'figure',footer:'footer',form:'form',h1:'h1',h2:'h2',h3:'h3',h4:'h4',h5:'h5',h6:'h6',head:'head',header:'header',hgroup:'hgroup',hr:'hr',html:'html',i:'i',iframe:'iframe',img:'img',input:'input',ins:'ins',kbd:'kbd',keygen:'keygen',label:'label',legend:'legend',li:'li',link:'link',main:'main',map:'map',mark:'mark',menu:'menu',menuitem:'menuitem',meta:'meta',meter:'meter',nav:'nav',noscript:'noscript',object:'object',ol:'ol',optgroup:'optgroup',option:'option',output:'output',p:'p',param:'param',picture:'picture',pre:'pre',progress:'progress',q:'q',rp:'rp',rt:'rt',ruby:'ruby',s:'s',samp:'samp',script:'script',section:'section',select:'select',small:'small',source:'source',span:'span',strong:'strong',style:'style',sub:'sub',summary:'summary',sup:'sup',table:'table',tbody:'tbody',td:'td',textarea:'textarea',tfoot:'tfoot',th:'th',thead:'thead',time:'time',title:'title',tr:'tr',track:'track',u:'u',ul:'ul','var':'var',video:'video',wbr:'wbr', // SVG
circle:'circle',clipPath:'clipPath',defs:'defs',ellipse:'ellipse',g:'g',image:'image',line:'line',linearGradient:'linearGradient',mask:'mask',path:'path',pattern:'pattern',polygon:'polygon',polyline:'polyline',radialGradient:'radialGradient',rect:'rect',stop:'stop',svg:'svg',text:'text',tspan:'tspan'},createDOMFactory);module.exports=ReactDOMFactories;},{"./ReactElement":62,"./ReactElementValidator":63,"fbjs/lib/mapObject":159}],46:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMFeatureFlags
 */'use strict';var ReactDOMFeatureFlags={useCreateElement:true};module.exports=ReactDOMFeatureFlags;},{}],47:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 */'use strict';var DOMChildrenOperations=require('./DOMChildrenOperations');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactPerf=require('./ReactPerf'); /**
 * Operations used to process updates to DOM nodes.
 */var ReactDOMIDOperations={ /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @internal
   */dangerouslyProcessChildrenUpdates:function dangerouslyProcessChildrenUpdates(parentInst,updates){var node=ReactDOMComponentTree.getNodeFromInstance(parentInst);DOMChildrenOperations.processUpdates(node,updates);}};ReactPerf.measureMethods(ReactDOMIDOperations,'ReactDOMIDOperations',{dangerouslyProcessChildrenUpdates:'dangerouslyProcessChildrenUpdates'});module.exports=ReactDOMIDOperations;},{"./DOMChildrenOperations":10,"./ReactDOMComponentTree":41,"./ReactPerf":82}],48:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */'use strict';var _assign=require('object-assign');var DOMPropertyOperations=require('./DOMPropertyOperations');var LinkedValueUtils=require('./LinkedValueUtils');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var didWarnValueLink=false;var didWarnCheckedLink=false;var didWarnValueNull=false;var didWarnValueDefaultValue=false;var didWarnCheckedDefaultChecked=false;var didWarnControlledToUncontrolled=false;var didWarnUncontrolledToControlled=false;function forceUpdateIfMounted(){if(this._rootNodeID){ // DOM component is still mounted; update
ReactDOMInput.updateWrapper(this);}}function warnIfValueIsNull(props){if(props!=null&&props.value===null&&!didWarnValueNull){"development"!=='production'?warning(false,'`value` prop on `input` should not be null. '+'Consider using the empty string to clear the component or `undefined` '+'for uncontrolled components.'):void 0;didWarnValueNull=true;}} /**
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */var ReactDOMInput={getNativeProps:function getNativeProps(inst,props){var value=LinkedValueUtils.getValue(props);var checked=LinkedValueUtils.getChecked(props);var nativeProps=_assign({ // Make sure we set .type before any other properties (setting .value
// before .type means .value is lost in IE11 and below)
type:undefined},props,{defaultChecked:undefined,defaultValue:undefined,value:value!=null?value:inst._wrapperState.initialValue,checked:checked!=null?checked:inst._wrapperState.initialChecked,onChange:inst._wrapperState.onChange});return nativeProps;},mountWrapper:function mountWrapper(inst,props){if("development"!=='production'){LinkedValueUtils.checkPropTypes('input',props,inst._currentElement._owner);if(props.valueLink!==undefined&&!didWarnValueLink){"development"!=='production'?warning(false,'`valueLink` prop on `input` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnValueLink=true;}if(props.checkedLink!==undefined&&!didWarnCheckedLink){"development"!=='production'?warning(false,'`checkedLink` prop on `input` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnCheckedLink=true;}if(props.checked!==undefined&&props.defaultChecked!==undefined&&!didWarnCheckedDefaultChecked){"development"!=='production'?warning(false,'Input elements must be either controlled or uncontrolled '+'(specify either the checked prop, or the defaultChecked prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;didWarnCheckedDefaultChecked=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){"development"!=='production'?warning(false,'Input elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled input '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;didWarnValueDefaultValue=true;}warnIfValueIsNull(props);}var defaultValue=props.defaultValue;inst._wrapperState={initialChecked:props.defaultChecked||false,initialValue:defaultValue!=null?defaultValue:null,listeners:null,onChange:_handleChange.bind(inst)};if("development"!=='production'){inst._wrapperState.controlled=props.checked!==undefined||props.value!==undefined;}},updateWrapper:function updateWrapper(inst){var props=inst._currentElement.props;if("development"!=='production'){warnIfValueIsNull(props);var initialValue=inst._wrapperState.initialChecked||inst._wrapperState.initialValue;var defaultValue=props.defaultChecked||props.defaultValue;var controlled=props.checked!==undefined||props.value!==undefined;var owner=inst._currentElement._owner;if((initialValue||!inst._wrapperState.controlled)&&controlled&&!didWarnUncontrolledToControlled){"development"!=='production'?warning(false,'%s is changing a uncontrolled input of type %s to be controlled. '+'Input elements should not switch from uncontrolled to controlled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;didWarnUncontrolledToControlled=true;}if(inst._wrapperState.controlled&&(defaultValue||!controlled)&&!didWarnControlledToUncontrolled){"development"!=='production'?warning(false,'%s is changing a controlled input of type %s to be uncontrolled. '+'Input elements should not switch from controlled to uncontrolled (or vice versa). '+'Decide between using a controlled or uncontrolled input '+'element for the lifetime of the component. More info: https://fb.me/react-controlled-components',owner&&owner.getName()||'A component',props.type):void 0;didWarnControlledToUncontrolled=true;}} // TODO: Shouldn't this be getChecked(props)?
var checked=props.checked;if(checked!=null){DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst),'checked',checked||false);}var value=LinkedValueUtils.getValue(props);if(value!=null){ // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst),'value',''+value);}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event); // Here we use asap to wait until all updates have propagated, which
// is important when using controlled components within layers:
// https://github.com/facebook/react/issues/1698
ReactUpdates.asap(forceUpdateIfMounted,this);var name=props.name;if(props.type==='radio'&&name!=null){var rootNode=ReactDOMComponentTree.getNodeFromInstance(this);var queryRoot=rootNode;while(queryRoot.parentNode){queryRoot=queryRoot.parentNode;} // If `rootNode.form` was non-null, then we could try `form.elements`,
// but that sometimes behaves strangely in IE8. We could also try using
// `form.getElementsByName`, but that will only return direct children
// and won't include inputs that use the HTML5 `form=` attribute. Since
// the input might not even be in a form, let's just use the global
// `querySelectorAll` to ensure we don't miss anything.
var group=queryRoot.querySelectorAll('input[name='+JSON.stringify(''+name)+'][type="radio"]');for(var i=0;i<group.length;i++){var otherNode=group[i];if(otherNode===rootNode||otherNode.form!==rootNode.form){continue;} // This will throw if radio buttons rendered by different copies of React
// and the same name are rendered into the same form (same as #1939).
// That's probably okay; we don't support it just as we don't support
// mixing React radio buttons with non-React ones.
var otherInstance=ReactDOMComponentTree.getInstanceFromNode(otherNode);!otherInstance?"development"!=='production'?invariant(false,'ReactDOMInput: Mixing React and non-React radio inputs with the '+'same `name` is not supported.'):invariant(false):void 0; // If this is a controlled radio button group, forcing the input that
// was previously checked to update will cause it to be come re-checked
// as appropriate.
ReactUpdates.asap(forceUpdateIfMounted,otherInstance);}}return returnValue;}module.exports=ReactDOMInput;},{"./DOMPropertyOperations":14,"./LinkedValueUtils":25,"./ReactDOMComponentTree":41,"./ReactUpdates":90,"fbjs/lib/invariant":154,"fbjs/lib/warning":164,"object-assign":165}],49:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInstrumentation
 */'use strict';var ReactDOMDebugTool=require('./ReactDOMDebugTool');module.exports={debugTool:ReactDOMDebugTool};},{"./ReactDOMDebugTool":43}],50:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */'use strict';var _assign=require('object-assign');var ReactChildren=require('./ReactChildren');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMSelect=require('./ReactDOMSelect');var warning=require('fbjs/lib/warning'); /**
 * Implements an <option> native component that warns when `selected` is set.
 */var ReactDOMOption={mountWrapper:function mountWrapper(inst,props,nativeParent){ // TODO (yungsters): Remove support for `selected` in <option>.
if("development"!=='production'){"development"!=='production'?warning(props.selected==null,'Use the `defaultValue` or `value` props on <select> instead of '+'setting `selected` on <option>.'):void 0;} // Look up whether this option is 'selected'
var selectValue=null;if(nativeParent!=null&&nativeParent._tag==='select'){selectValue=ReactDOMSelect.getSelectValueContext(nativeParent);} // If the value is null (e.g., no specified value or after initial mount)
// or missing (e.g., for <datalist>), we don't change props.selected
var selected=null;if(selectValue!=null){selected=false;if(Array.isArray(selectValue)){ // multiple
for(var i=0;i<selectValue.length;i++){if(''+selectValue[i]===''+props.value){selected=true;break;}}}else {selected=''+selectValue===''+props.value;}}inst._wrapperState={selected:selected};},postMountWrapper:function postMountWrapper(inst){ // value="" should make a value attribute (#6219)
var props=inst._currentElement.props;if(props.value!=null){var node=ReactDOMComponentTree.getNodeFromInstance(inst);node.setAttribute('value',props.value);}},getNativeProps:function getNativeProps(inst,props){var nativeProps=_assign({selected:undefined,children:undefined},props); // Read state only from initial mount because <select> updates value
// manually; we need the initial state only for server rendering
if(inst._wrapperState.selected!=null){nativeProps.selected=inst._wrapperState.selected;}var content=''; // Flatten children and warn if they aren't strings or numbers;
// invalid types are ignored.
ReactChildren.forEach(props.children,function(child){if(child==null){return;}if(typeof child==='string'||typeof child==='number'){content+=child;}else {"development"!=='production'?warning(false,'Only strings and numbers are supported as <option> children.'):void 0;}});if(content){nativeProps.children=content;}return nativeProps;}};module.exports=ReactDOMOption;},{"./ReactChildren":30,"./ReactDOMComponentTree":41,"./ReactDOMSelect":51,"fbjs/lib/warning":164,"object-assign":165}],51:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */'use strict';var _assign=require('object-assign');var LinkedValueUtils=require('./LinkedValueUtils');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var warning=require('fbjs/lib/warning');var didWarnValueLink=false;var didWarnValueNull=false;var didWarnValueDefaultValue=false;function updateOptionsIfPendingUpdateAndMounted(){if(this._rootNodeID&&this._wrapperState.pendingUpdate){this._wrapperState.pendingUpdate=false;var props=this._currentElement.props;var value=LinkedValueUtils.getValue(props);if(value!=null){updateOptions(this,Boolean(props.multiple),value);}}}function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';}function warnIfValueIsNull(props){if(props!=null&&props.value===null&&!didWarnValueNull){"development"!=='production'?warning(false,'`value` prop on `select` should not be null. '+'Consider using the empty string to clear the component or `undefined` '+'for uncontrolled components.'):void 0;didWarnValueNull=true;}}var valuePropNames=['value','defaultValue']; /**
 * Validation function for `value` and `defaultValue`.
 * @private
 */function checkSelectPropTypes(inst,props){var owner=inst._currentElement._owner;LinkedValueUtils.checkPropTypes('select',props,owner);if(props.valueLink!==undefined&&!didWarnValueLink){"development"!=='production'?warning(false,'`valueLink` prop on `select` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnValueLink=true;}for(var i=0;i<valuePropNames.length;i++){var propName=valuePropNames[i];if(props[propName]==null){continue;}if(props.multiple){"development"!=='production'?warning(Array.isArray(props[propName]),'The `%s` prop supplied to <select> must be an array if '+'`multiple` is true.%s',propName,getDeclarationErrorAddendum(owner)):void 0;}else {"development"!=='production'?warning(!Array.isArray(props[propName]),'The `%s` prop supplied to <select> must be a scalar '+'value if `multiple` is false.%s',propName,getDeclarationErrorAddendum(owner)):void 0;}}} /**
 * @param {ReactDOMComponent} inst
 * @param {boolean} multiple
 * @param {*} propValue A stringable (with `multiple`, a list of stringables).
 * @private
 */function updateOptions(inst,multiple,propValue){var selectedValue,i;var options=ReactDOMComponentTree.getNodeFromInstance(inst).options;if(multiple){selectedValue={};for(i=0;i<propValue.length;i++){selectedValue[''+propValue[i]]=true;}for(i=0;i<options.length;i++){var selected=selectedValue.hasOwnProperty(options[i].value);if(options[i].selected!==selected){options[i].selected=selected;}}}else { // Do not set `select.value` as exact behavior isn't consistent across all
// browsers for all cases.
selectedValue=''+propValue;for(i=0;i<options.length;i++){if(options[i].value===selectedValue){options[i].selected=true;return;}}if(options.length){options[0].selected=true;}}} /**
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * stringable. If `multiple` is true, the prop must be an array of stringables.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */var ReactDOMSelect={getNativeProps:function getNativeProps(inst,props){return _assign({},props,{onChange:inst._wrapperState.onChange,value:undefined});},mountWrapper:function mountWrapper(inst,props){if("development"!=='production'){checkSelectPropTypes(inst,props);warnIfValueIsNull(props);}var value=LinkedValueUtils.getValue(props);inst._wrapperState={pendingUpdate:false,initialValue:value!=null?value:props.defaultValue,listeners:null,onChange:_handleChange.bind(inst),wasMultiple:Boolean(props.multiple)};if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValueDefaultValue){"development"!=='production'?warning(false,'Select elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled select '+'element and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;didWarnValueDefaultValue=true;}},getSelectValueContext:function getSelectValueContext(inst){ // ReactDOMOption looks at this initial value so the initial generated
// markup has correct `selected` attributes
return inst._wrapperState.initialValue;},postUpdateWrapper:function postUpdateWrapper(inst){var props=inst._currentElement.props;if("development"!=='production'){warnIfValueIsNull(props);} // After the initial mount, we control selected-ness manually so don't pass
// this value down
inst._wrapperState.initialValue=undefined;var wasMultiple=inst._wrapperState.wasMultiple;inst._wrapperState.wasMultiple=Boolean(props.multiple);var value=LinkedValueUtils.getValue(props);if(value!=null){inst._wrapperState.pendingUpdate=false;updateOptions(inst,Boolean(props.multiple),value);}else if(wasMultiple!==Boolean(props.multiple)){ // For simplicity, reapply `defaultValue` if `multiple` is toggled.
if(props.defaultValue!=null){updateOptions(inst,Boolean(props.multiple),props.defaultValue);}else { // Revert the select back to its default unselected state.
updateOptions(inst,Boolean(props.multiple),props.multiple?[]:'');}}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);if(this._rootNodeID){this._wrapperState.pendingUpdate=true;}ReactUpdates.asap(updateOptionsIfPendingUpdateAndMounted,this);return returnValue;}module.exports=ReactDOMSelect;},{"./LinkedValueUtils":25,"./ReactDOMComponentTree":41,"./ReactUpdates":90,"fbjs/lib/warning":164,"object-assign":165}],52:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var getNodeForCharacterOffset=require('./getNodeForCharacterOffset');var getTextContentAccessor=require('./getTextContentAccessor'); /**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */function isCollapsed(anchorNode,anchorOffset,focusNode,focusOffset){return anchorNode===focusNode&&anchorOffset===focusOffset;} /**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getIEOffsets(node){var selection=document.selection;var selectedRange=selection.createRange();var selectedLength=selectedRange.text.length; // Duplicate selection so we can move range without breaking user selection.
var fromStart=selectedRange.duplicate();fromStart.moveToElementText(node);fromStart.setEndPoint('EndToStart',selectedRange);var startOffset=fromStart.text.length;var endOffset=startOffset+selectedLength;return {start:startOffset,end:endOffset};} /**
 * @param {DOMElement} node
 * @return {?object}
 */function getModernOffsets(node){var selection=window.getSelection&&window.getSelection();if(!selection||selection.rangeCount===0){return null;}var anchorNode=selection.anchorNode;var anchorOffset=selection.anchorOffset;var focusNode=selection.focusNode;var focusOffset=selection.focusOffset;var currentRange=selection.getRangeAt(0); // In Firefox, range.startContainer and range.endContainer can be "anonymous
// divs", e.g. the up/down buttons on an <input type="number">. Anonymous
// divs do not seem to expose properties, triggering a "Permission denied
// error" if any of its properties are accessed. The only seemingly possible
// way to avoid erroring is to access a property that typically works for
// non-anonymous divs and catch any error that may otherwise arise. See
// https://bugzilla.mozilla.org/show_bug.cgi?id=208427
try{ /* eslint-disable no-unused-expressions */currentRange.startContainer.nodeType;currentRange.endContainer.nodeType; /* eslint-enable no-unused-expressions */}catch(e){return null;} // If the node and offset values are the same, the selection is collapsed.
// `Selection.isCollapsed` is available natively, but IE sometimes gets
// this value wrong.
var isSelectionCollapsed=isCollapsed(selection.anchorNode,selection.anchorOffset,selection.focusNode,selection.focusOffset);var rangeLength=isSelectionCollapsed?0:currentRange.toString().length;var tempRange=currentRange.cloneRange();tempRange.selectNodeContents(node);tempRange.setEnd(currentRange.startContainer,currentRange.startOffset);var isTempRangeCollapsed=isCollapsed(tempRange.startContainer,tempRange.startOffset,tempRange.endContainer,tempRange.endOffset);var start=isTempRangeCollapsed?0:tempRange.toString().length;var end=start+rangeLength; // Detect whether the selection is backward.
var detectionRange=document.createRange();detectionRange.setStart(anchorNode,anchorOffset);detectionRange.setEnd(focusNode,focusOffset);var isBackward=detectionRange.collapsed;return {start:isBackward?end:start,end:isBackward?start:end};} /**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setIEOffsets(node,offsets){var range=document.selection.createRange().duplicate();var start,end;if(offsets.end===undefined){start=offsets.start;end=start;}else if(offsets.start>offsets.end){start=offsets.end;end=offsets.start;}else {start=offsets.start;end=offsets.end;}range.moveToElementText(node);range.moveStart('character',start);range.setEndPoint('EndToStart',range);range.moveEnd('character',end-start);range.select();} /**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programmatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */function setModernOffsets(node,offsets){if(!window.getSelection){return;}var selection=window.getSelection();var length=node[getTextContentAccessor()].length;var start=Math.min(offsets.start,length);var end=offsets.end===undefined?start:Math.min(offsets.end,length); // IE 11 uses modern selection, but doesn't support the extend method.
// Flip backward selections, so we can set with a single range.
if(!selection.extend&&start>end){var temp=end;end=start;start=temp;}var startMarker=getNodeForCharacterOffset(node,start);var endMarker=getNodeForCharacterOffset(node,end);if(startMarker&&endMarker){var range=document.createRange();range.setStart(startMarker.node,startMarker.offset);selection.removeAllRanges();if(start>end){selection.addRange(range);selection.extend(endMarker.node,endMarker.offset);}else {range.setEnd(endMarker.node,endMarker.offset);selection.addRange(range);}}}var useIEOffsets=ExecutionEnvironment.canUseDOM&&'selection' in document&&!('getSelection' in window);var ReactDOMSelection={ /**
   * @param {DOMElement} node
   */getOffsets:useIEOffsets?getIEOffsets:getModernOffsets, /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */setOffsets:useIEOffsets?setIEOffsets:setModernOffsets};module.exports=ReactDOMSelection;},{"./getNodeForCharacterOffset":125,"./getTextContentAccessor":126,"fbjs/lib/ExecutionEnvironment":140}],53:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 */'use strict';var _assign=require('object-assign');var DOMChildrenOperations=require('./DOMChildrenOperations');var DOMLazyTree=require('./DOMLazyTree');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactPerf=require('./ReactPerf');var escapeTextContentForBrowser=require('./escapeTextContentForBrowser');var invariant=require('fbjs/lib/invariant');var validateDOMNesting=require('./validateDOMNesting'); /**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings between comment nodes so that they
 * can undergo the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactDOMTextComponent
 * @extends ReactComponent
 * @internal
 */var ReactDOMTextComponent=function ReactDOMTextComponent(text){ // TODO: This is really a ReactText (ReactNode), not a ReactElement
this._currentElement=text;this._stringText=''+text; // ReactDOMComponentTree uses these:
this._nativeNode=null;this._nativeParent=null; // Properties
this._domID=null;this._mountIndex=0;this._closingComment=null;this._commentNodes=null;};_assign(ReactDOMTextComponent.prototype,{ /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup for this text node.
   * @internal
   */mountComponent:function mountComponent(transaction,nativeParent,nativeContainerInfo,context){if("development"!=='production'){var parentInfo;if(nativeParent!=null){parentInfo=nativeParent._ancestorInfo;}else if(nativeContainerInfo!=null){parentInfo=nativeContainerInfo._ancestorInfo;}if(parentInfo){ // parentInfo should always be present except for the top-level
// component when server rendering
validateDOMNesting('#text',this,parentInfo);}}var domID=nativeContainerInfo._idCounter++;var openingValue=' react-text: '+domID+' ';var closingValue=' /react-text ';this._domID=domID;this._nativeParent=nativeParent;if(transaction.useCreateElement){var ownerDocument=nativeContainerInfo._ownerDocument;var openingComment=ownerDocument.createComment(openingValue);var closingComment=ownerDocument.createComment(closingValue);var lazyTree=DOMLazyTree(ownerDocument.createDocumentFragment());DOMLazyTree.queueChild(lazyTree,DOMLazyTree(openingComment));if(this._stringText){DOMLazyTree.queueChild(lazyTree,DOMLazyTree(ownerDocument.createTextNode(this._stringText)));}DOMLazyTree.queueChild(lazyTree,DOMLazyTree(closingComment));ReactDOMComponentTree.precacheNode(this,openingComment);this._closingComment=closingComment;return lazyTree;}else {var escapedText=escapeTextContentForBrowser(this._stringText);if(transaction.renderToStaticMarkup){ // Normally we'd wrap this between comment nodes for the reasons stated
// above, but since this is a situation where React won't take over
// (static pages), we can simply return the text as it is.
return escapedText;}return '<!--'+openingValue+'-->'+escapedText+'<!--'+closingValue+'-->';}}, /**
   * Updates this component by updating the text content.
   *
   * @param {ReactText} nextText The next text content
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */receiveComponent:function receiveComponent(nextText,transaction){if(nextText!==this._currentElement){this._currentElement=nextText;var nextStringText=''+nextText;if(nextStringText!==this._stringText){ // TODO: Save this as pending props and use performUpdateIfNecessary
// and/or updateComponent to do the actual update for consistency with
// other component types?
this._stringText=nextStringText;var commentNodes=this.getNativeNode();DOMChildrenOperations.replaceDelimitedText(commentNodes[0],commentNodes[1],nextStringText);}}},getNativeNode:function getNativeNode(){var nativeNode=this._commentNodes;if(nativeNode){return nativeNode;}if(!this._closingComment){var openingComment=ReactDOMComponentTree.getNodeFromInstance(this);var node=openingComment.nextSibling;while(true){!(node!=null)?"development"!=='production'?invariant(false,'Missing closing comment for text component %s',this._domID):invariant(false):void 0;if(node.nodeType===8&&node.nodeValue===' /react-text '){this._closingComment=node;break;}node=node.nextSibling;}}nativeNode=[this._nativeNode,this._closingComment];this._commentNodes=nativeNode;return nativeNode;},unmountComponent:function unmountComponent(){this._closingComment=null;this._commentNodes=null;ReactDOMComponentTree.uncacheNode(this);}});ReactPerf.measureMethods(ReactDOMTextComponent.prototype,'ReactDOMTextComponent',{mountComponent:'mountComponent',receiveComponent:'receiveComponent'});module.exports=ReactDOMTextComponent;},{"./DOMChildrenOperations":10,"./DOMLazyTree":11,"./ReactDOMComponentTree":41,"./ReactPerf":82,"./escapeTextContentForBrowser":115,"./validateDOMNesting":138,"fbjs/lib/invariant":154,"object-assign":165}],54:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */'use strict';var _assign=require('object-assign');var DOMPropertyOperations=require('./DOMPropertyOperations');var LinkedValueUtils=require('./LinkedValueUtils');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var didWarnValueLink=false;var didWarnValueNull=false;var didWarnValDefaultVal=false;function forceUpdateIfMounted(){if(this._rootNodeID){ // DOM component is still mounted; update
ReactDOMTextarea.updateWrapper(this);}}function warnIfValueIsNull(props){if(props!=null&&props.value===null&&!didWarnValueNull){"development"!=='production'?warning(false,'`value` prop on `textarea` should not be null. '+'Consider using the empty string to clear the component or `undefined` '+'for uncontrolled components.'):void 0;didWarnValueNull=true;}} /**
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */var ReactDOMTextarea={getNativeProps:function getNativeProps(inst,props){!(props.dangerouslySetInnerHTML==null)?"development"!=='production'?invariant(false,'`dangerouslySetInnerHTML` does not make sense on <textarea>.'):invariant(false):void 0; // Always set children to the same thing. In IE9, the selection range will
// get reset if `textContent` is mutated.
var nativeProps=_assign({},props,{defaultValue:undefined,value:undefined,children:inst._wrapperState.initialValue,onChange:inst._wrapperState.onChange});return nativeProps;},mountWrapper:function mountWrapper(inst,props){if("development"!=='production'){LinkedValueUtils.checkPropTypes('textarea',props,inst._currentElement._owner);if(props.valueLink!==undefined&&!didWarnValueLink){"development"!=='production'?warning(false,'`valueLink` prop on `textarea` is deprecated; set `value` and `onChange` instead.'):void 0;didWarnValueLink=true;}if(props.value!==undefined&&props.defaultValue!==undefined&&!didWarnValDefaultVal){"development"!=='production'?warning(false,'Textarea elements must be either controlled or uncontrolled '+'(specify either the value prop, or the defaultValue prop, but not '+'both). Decide between using a controlled or uncontrolled textarea '+'and remove one of these props. More info: '+'https://fb.me/react-controlled-components'):void 0;didWarnValDefaultVal=true;}warnIfValueIsNull(props);}var defaultValue=props.defaultValue; // TODO (yungsters): Remove support for children content in <textarea>.
var children=props.children;if(children!=null){if("development"!=='production'){"development"!=='production'?warning(false,'Use the `defaultValue` or `value` props instead of setting '+'children on <textarea>.'):void 0;}!(defaultValue==null)?"development"!=='production'?invariant(false,'If you supply `defaultValue` on a <textarea>, do not pass children.'):invariant(false):void 0;if(Array.isArray(children)){!(children.length<=1)?"development"!=='production'?invariant(false,'<textarea> can only have at most one child.'):invariant(false):void 0;children=children[0];}defaultValue=''+children;}if(defaultValue==null){defaultValue='';}var value=LinkedValueUtils.getValue(props);inst._wrapperState={ // We save the initial value so that `ReactDOMComponent` doesn't update
// `textContent` (unnecessary since we update value).
// The initial value can be a boolean or object so that's why it's
// forced to be a string.
initialValue:''+(value!=null?value:defaultValue),listeners:null,onChange:_handleChange.bind(inst)};},updateWrapper:function updateWrapper(inst){var props=inst._currentElement.props;if("development"!=='production'){warnIfValueIsNull(props);}var value=LinkedValueUtils.getValue(props);if(value!=null){ // Cast `value` to a string to ensure the value is set correctly. While
// browsers typically do this as necessary, jsdom doesn't.
DOMPropertyOperations.setValueForProperty(ReactDOMComponentTree.getNodeFromInstance(inst),'value',''+value);}}};function _handleChange(event){var props=this._currentElement.props;var returnValue=LinkedValueUtils.executeOnChange(props,event);ReactUpdates.asap(forceUpdateIfMounted,this);return returnValue;}module.exports=ReactDOMTextarea;},{"./DOMPropertyOperations":14,"./LinkedValueUtils":25,"./ReactDOMComponentTree":41,"./ReactUpdates":90,"fbjs/lib/invariant":154,"fbjs/lib/warning":164,"object-assign":165}],55:[function(require,module,exports){ /**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTreeTraversal
 */'use strict';var invariant=require('fbjs/lib/invariant'); /**
 * Return the lowest common ancestor of A and B, or null if they are in
 * different trees.
 */function getLowestCommonAncestor(instA,instB){!('_nativeNode' in instA)?"development"!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):invariant(false):void 0;!('_nativeNode' in instB)?"development"!=='production'?invariant(false,'getNodeFromInstance: Invalid argument.'):invariant(false):void 0;var depthA=0;for(var tempA=instA;tempA;tempA=tempA._nativeParent){depthA++;}var depthB=0;for(var tempB=instB;tempB;tempB=tempB._nativeParent){depthB++;} // If A is deeper, crawl up.
while(depthA-depthB>0){instA=instA._nativeParent;depthA--;} // If B is deeper, crawl up.
while(depthB-depthA>0){instB=instB._nativeParent;depthB--;} // Walk in lockstep until we find a match.
var depth=depthA;while(depth--){if(instA===instB){return instA;}instA=instA._nativeParent;instB=instB._nativeParent;}return null;} /**
 * Return if A is an ancestor of B.
 */function isAncestor(instA,instB){!('_nativeNode' in instA)?"development"!=='production'?invariant(false,'isAncestor: Invalid argument.'):invariant(false):void 0;!('_nativeNode' in instB)?"development"!=='production'?invariant(false,'isAncestor: Invalid argument.'):invariant(false):void 0;while(instB){if(instB===instA){return true;}instB=instB._nativeParent;}return false;} /**
 * Return the parent instance of the passed-in instance.
 */function getParentInstance(inst){!('_nativeNode' in inst)?"development"!=='production'?invariant(false,'getParentInstance: Invalid argument.'):invariant(false):void 0;return inst._nativeParent;} /**
 * Simulates the traversal of a two-phase, capture/bubble event dispatch.
 */function traverseTwoPhase(inst,fn,arg){var path=[];while(inst){path.push(inst);inst=inst._nativeParent;}var i;for(i=path.length;i-->0;){fn(path[i],false,arg);}for(i=0;i<path.length;i++){fn(path[i],true,arg);}} /**
 * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
 * should would receive a `mouseEnter` or `mouseLeave` event.
 *
 * Does not invoke the callback on the nearest common ancestor because nothing
 * "entered" or "left" that element.
 */function traverseEnterLeave(from,to,fn,argFrom,argTo){var common=from&&to?getLowestCommonAncestor(from,to):null;var pathFrom=[];while(from&&from!==common){pathFrom.push(from);from=from._nativeParent;}var pathTo=[];while(to&&to!==common){pathTo.push(to);to=to._nativeParent;}var i;for(i=0;i<pathFrom.length;i++){fn(pathFrom[i],true,argFrom);}for(i=pathTo.length;i-->0;){fn(pathTo[i],false,argTo);}}module.exports={isAncestor:isAncestor,getLowestCommonAncestor:getLowestCommonAncestor,getParentInstance:getParentInstance,traverseTwoPhase:traverseTwoPhase,traverseEnterLeave:traverseEnterLeave};},{"fbjs/lib/invariant":154}],56:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMUnknownPropertyDevtool
 */'use strict';var DOMProperty=require('./DOMProperty');var EventPluginRegistry=require('./EventPluginRegistry');var warning=require('fbjs/lib/warning');if("development"!=='production'){var reactProps={children:true,dangerouslySetInnerHTML:true,key:true,ref:true};var warnedProperties={};var warnUnknownProperty=function warnUnknownProperty(name){if(DOMProperty.properties.hasOwnProperty(name)||DOMProperty.isCustomAttribute(name)){return;}if(reactProps.hasOwnProperty(name)&&reactProps[name]||warnedProperties.hasOwnProperty(name)&&warnedProperties[name]){return;}warnedProperties[name]=true;var lowerCasedName=name.toLowerCase(); // data-* attributes should be lowercase; suggest the lowercase version
var standardName=DOMProperty.isCustomAttribute(lowerCasedName)?lowerCasedName:DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName)?DOMProperty.getPossibleStandardName[lowerCasedName]:null; // For now, only warn when we have a suggested correction. This prevents
// logging too much when using transferPropsTo.
"development"!=='production'?warning(standardName==null,'Unknown DOM property %s. Did you mean %s?',name,standardName):void 0;var registrationName=EventPluginRegistry.possibleRegistrationNames.hasOwnProperty(lowerCasedName)?EventPluginRegistry.possibleRegistrationNames[lowerCasedName]:null;"development"!=='production'?warning(registrationName==null,'Unknown event handler property %s. Did you mean `%s`?',name,registrationName):void 0;};}var ReactDOMUnknownPropertyDevtool={onCreateMarkupForProperty:function onCreateMarkupForProperty(name,value){warnUnknownProperty(name);},onSetValueForProperty:function onSetValueForProperty(node,name,value){warnUnknownProperty(name);},onDeleteValueForProperty:function onDeleteValueForProperty(node,name){warnUnknownProperty(name);}};module.exports=ReactDOMUnknownPropertyDevtool;},{"./DOMProperty":13,"./EventPluginRegistry":20,"fbjs/lib/warning":164}],57:[function(require,module,exports){ /**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDebugTool
 */'use strict';var ReactInvalidSetStateWarningDevTool=require('./ReactInvalidSetStateWarningDevTool');var warning=require('fbjs/lib/warning');var eventHandlers=[];var handlerDoesThrowForEvent={};function emitEvent(handlerFunctionName,arg1,arg2,arg3,arg4,arg5){if("development"!=='production'){eventHandlers.forEach(function(handler){try{if(handler[handlerFunctionName]){handler[handlerFunctionName](arg1,arg2,arg3,arg4,arg5);}}catch(e){"development"!=='production'?warning(!handlerDoesThrowForEvent[handlerFunctionName],'exception thrown by devtool while handling %s: %s',handlerFunctionName,e.message):void 0;handlerDoesThrowForEvent[handlerFunctionName]=true;}});}}var ReactDebugTool={addDevtool:function addDevtool(devtool){eventHandlers.push(devtool);},removeDevtool:function removeDevtool(devtool){for(var i=0;i<eventHandlers.length;i++){if(eventHandlers[i]===devtool){eventHandlers.splice(i,1);i--;}}},onBeginProcessingChildContext:function onBeginProcessingChildContext(){emitEvent('onBeginProcessingChildContext');},onEndProcessingChildContext:function onEndProcessingChildContext(){emitEvent('onEndProcessingChildContext');},onSetState:function onSetState(){emitEvent('onSetState');},onMountRootComponent:function onMountRootComponent(internalInstance){emitEvent('onMountRootComponent',internalInstance);},onMountComponent:function onMountComponent(internalInstance){emitEvent('onMountComponent',internalInstance);},onUpdateComponent:function onUpdateComponent(internalInstance){emitEvent('onUpdateComponent',internalInstance);},onUnmountComponent:function onUnmountComponent(internalInstance){emitEvent('onUnmountComponent',internalInstance);}};ReactDebugTool.addDevtool(ReactInvalidSetStateWarningDevTool);module.exports=ReactDebugTool;},{"./ReactInvalidSetStateWarningDevTool":73,"fbjs/lib/warning":164}],58:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */'use strict';var _assign=require('object-assign');var ReactUpdates=require('./ReactUpdates');var Transaction=require('./Transaction');var emptyFunction=require('fbjs/lib/emptyFunction');var RESET_BATCHED_UPDATES={initialize:emptyFunction,close:function close(){ReactDefaultBatchingStrategy.isBatchingUpdates=false;}};var FLUSH_BATCHED_UPDATES={initialize:emptyFunction,close:ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)};var TRANSACTION_WRAPPERS=[FLUSH_BATCHED_UPDATES,RESET_BATCHED_UPDATES];function ReactDefaultBatchingStrategyTransaction(){this.reinitializeTransaction();}_assign(ReactDefaultBatchingStrategyTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;}});var transaction=new ReactDefaultBatchingStrategyTransaction();var ReactDefaultBatchingStrategy={isBatchingUpdates:false, /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */batchedUpdates:function batchedUpdates(callback,a,b,c,d,e){var alreadyBatchingUpdates=ReactDefaultBatchingStrategy.isBatchingUpdates;ReactDefaultBatchingStrategy.isBatchingUpdates=true; // The code is written this way to avoid extra allocations
if(alreadyBatchingUpdates){callback(a,b,c,d,e);}else {transaction.perform(callback,null,a,b,c,d,e);}}};module.exports=ReactDefaultBatchingStrategy;},{"./ReactUpdates":90,"./Transaction":108,"fbjs/lib/emptyFunction":146,"object-assign":165}],59:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */'use strict';var BeforeInputEventPlugin=require('./BeforeInputEventPlugin');var ChangeEventPlugin=require('./ChangeEventPlugin');var DefaultEventPluginOrder=require('./DefaultEventPluginOrder');var EnterLeaveEventPlugin=require('./EnterLeaveEventPlugin');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var HTMLDOMPropertyConfig=require('./HTMLDOMPropertyConfig');var ReactComponentBrowserEnvironment=require('./ReactComponentBrowserEnvironment');var ReactDOMComponent=require('./ReactDOMComponent');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMEmptyComponent=require('./ReactDOMEmptyComponent');var ReactDOMTreeTraversal=require('./ReactDOMTreeTraversal');var ReactDOMTextComponent=require('./ReactDOMTextComponent');var ReactDefaultBatchingStrategy=require('./ReactDefaultBatchingStrategy');var ReactEventListener=require('./ReactEventListener');var ReactInjection=require('./ReactInjection');var ReactReconcileTransaction=require('./ReactReconcileTransaction');var SVGDOMPropertyConfig=require('./SVGDOMPropertyConfig');var SelectEventPlugin=require('./SelectEventPlugin');var SimpleEventPlugin=require('./SimpleEventPlugin');var alreadyInjected=false;function inject(){if(alreadyInjected){ // TODO: This is currently true because these injections are shared between
// the client and the server package. They should be built independently
// and not share any injection state. Then this problem will be solved.
return;}alreadyInjected=true;ReactInjection.EventEmitter.injectReactEventListener(ReactEventListener); /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);ReactInjection.EventPluginUtils.injectComponentTree(ReactDOMComponentTree);ReactInjection.EventPluginUtils.injectTreeTraversal(ReactDOMTreeTraversal); /**
   * Some important event plugins included by default (without having to require
   * them).
   */ReactInjection.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:SimpleEventPlugin,EnterLeaveEventPlugin:EnterLeaveEventPlugin,ChangeEventPlugin:ChangeEventPlugin,SelectEventPlugin:SelectEventPlugin,BeforeInputEventPlugin:BeforeInputEventPlugin});ReactInjection.NativeComponent.injectGenericComponentClass(ReactDOMComponent);ReactInjection.NativeComponent.injectTextComponentClass(ReactDOMTextComponent);ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);ReactInjection.EmptyComponent.injectEmptyComponentFactory(function(instantiate){return new ReactDOMEmptyComponent(instantiate);});ReactInjection.Updates.injectReconcileTransaction(ReactReconcileTransaction);ReactInjection.Updates.injectBatchingStrategy(ReactDefaultBatchingStrategy);ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);if("development"!=='production'){var url=ExecutionEnvironment.canUseDOM&&window.location.href||'';if(/[?&]react_perf\b/.test(url)){var ReactDefaultPerf=require('./ReactDefaultPerf');ReactDefaultPerf.start();}}}module.exports={inject:inject};},{"./BeforeInputEventPlugin":5,"./ChangeEventPlugin":9,"./DefaultEventPluginOrder":16,"./EnterLeaveEventPlugin":17,"./HTMLDOMPropertyConfig":24,"./ReactComponentBrowserEnvironment":33,"./ReactDOMComponent":39,"./ReactDOMComponentTree":41,"./ReactDOMEmptyComponent":44,"./ReactDOMTextComponent":53,"./ReactDOMTreeTraversal":55,"./ReactDefaultBatchingStrategy":58,"./ReactDefaultPerf":60,"./ReactEventListener":67,"./ReactInjection":69,"./ReactReconcileTransaction":86,"./SVGDOMPropertyConfig":92,"./SelectEventPlugin":93,"./SimpleEventPlugin":94,"fbjs/lib/ExecutionEnvironment":140}],60:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 */'use strict';var DOMProperty=require('./DOMProperty');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDefaultPerfAnalysis=require('./ReactDefaultPerfAnalysis');var ReactMount=require('./ReactMount');var ReactPerf=require('./ReactPerf');var performanceNow=require('fbjs/lib/performanceNow');var warning=require('fbjs/lib/warning');function roundFloat(val){return Math.floor(val*100)/100;}function addValue(obj,key,val){obj[key]=(obj[key]||0)+val;} // Composite/text components don't have any built-in ID: we have to make our own
var compositeIDMap;var compositeIDCounter=17000;function getIDOfComposite(inst){if(!compositeIDMap){compositeIDMap=new WeakMap();}if(compositeIDMap.has(inst)){return compositeIDMap.get(inst);}else {var id=compositeIDCounter++;compositeIDMap.set(inst,id);return id;}}function getID(inst){if(inst.hasOwnProperty('_rootNodeID')){return inst._rootNodeID;}else {return getIDOfComposite(inst);}}function stripComplexValues(key,value){if((typeof value==="undefined"?"undefined":_typeof(value))!=='object'||Array.isArray(value)||value==null){return value;}var prototype=Object.getPrototypeOf(value);if(!prototype||prototype===Object.prototype){return value;}return '<not serializable>';} // This implementation of ReactPerf is going away some time mid 15.x.
// While we plan to keep most of the API, the actual format of measurements
// will change dramatically. To signal this, we wrap them into an opaque-ish
// object to discourage reaching into it until the API stabilizes.
function wrapLegacyMeasurements(measurements){return {__unstable_this_format_will_change:measurements};}function unwrapLegacyMeasurements(measurements){return measurements&&measurements.__unstable_this_format_will_change||measurements;}var warnedAboutPrintDOM=false;var warnedAboutGetMeasurementsSummaryMap=false;var ReactDefaultPerf={_allMeasurements:[], // last item in the list is the current one
_mountStack:[0],_compositeStack:[],_injected:false,start:function start(){if(!ReactDefaultPerf._injected){ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);}ReactDefaultPerf._allMeasurements.length=0;ReactPerf.enableMeasure=true;},stop:function stop(){ReactPerf.enableMeasure=false;},getLastMeasurements:function getLastMeasurements(){return wrapLegacyMeasurements(ReactDefaultPerf._allMeasurements);},printExclusive:function printExclusive(measurements){measurements=unwrapLegacyMeasurements(measurements||ReactDefaultPerf._allMeasurements);var summary=ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);console.table(summary.map(function(item){return {'Component class name':item.componentName,'Total inclusive time (ms)':roundFloat(item.inclusive),'Exclusive mount time (ms)':roundFloat(item.exclusive),'Exclusive render time (ms)':roundFloat(item.render),'Mount time per instance (ms)':roundFloat(item.exclusive/item.count),'Render time per instance (ms)':roundFloat(item.render/item.count),'Instances':item.count};})); // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
// number.
},printInclusive:function printInclusive(measurements){measurements=unwrapLegacyMeasurements(measurements||ReactDefaultPerf._allMeasurements);var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);console.table(summary.map(function(item){return {'Owner > component':item.componentName,'Inclusive time (ms)':roundFloat(item.time),'Instances':item.count};}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},getMeasurementsSummaryMap:function getMeasurementsSummaryMap(measurements){"development"!=='production'?warning(warnedAboutGetMeasurementsSummaryMap,'`ReactPerf.getMeasurementsSummaryMap(...)` is deprecated. Use '+'`ReactPerf.getWasted(...)` instead.'):void 0;warnedAboutGetMeasurementsSummaryMap=true;return ReactDefaultPerf.getWasted(measurements);},getWasted:function getWasted(measurements){measurements=unwrapLegacyMeasurements(measurements);var summary=ReactDefaultPerfAnalysis.getInclusiveSummary(measurements,true);return summary.map(function(item){return {'Owner > component':item.componentName,'Wasted time (ms)':item.time,'Instances':item.count};});},printWasted:function printWasted(measurements){measurements=unwrapLegacyMeasurements(measurements||ReactDefaultPerf._allMeasurements);console.table(ReactDefaultPerf.getWasted(measurements));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},printDOM:function printDOM(measurements){"development"!=='production'?warning(warnedAboutPrintDOM,'`ReactPerf.printDOM(...)` is deprecated. Use '+'`ReactPerf.printOperations(...)` instead.'):void 0;warnedAboutPrintDOM=true;return ReactDefaultPerf.printOperations(measurements);},printOperations:function printOperations(measurements){measurements=unwrapLegacyMeasurements(measurements||ReactDefaultPerf._allMeasurements);var summary=ReactDefaultPerfAnalysis.getDOMSummary(measurements);console.table(summary.map(function(item){var result={};result[DOMProperty.ID_ATTRIBUTE_NAME]=item.id;result.type=item.type;result.args=JSON.stringify(item.args,stripComplexValues);return result;}));console.log('Total time:',ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2)+' ms');},_recordWrite:function _recordWrite(id,fnName,totalTime,args){ // TODO: totalTime isn't that useful since it doesn't count paints/reflows
var entry=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1];var writes=entry.writes;writes[id]=writes[id]||[];writes[id].push({type:fnName,time:totalTime,args:args});},measure:function measure(moduleName,fnName,func){return function(){for(var _len=arguments.length,args=Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}var totalTime;var rv;var start;var entry=ReactDefaultPerf._allMeasurements[ReactDefaultPerf._allMeasurements.length-1];if(fnName==='_renderNewRootComponent'||fnName==='flushBatchedUpdates'){ // A "measurement" is a set of metrics recorded for each flush. We want
// to group the metrics for a given flush together so we can look at the
// components that rendered and the DOM operations that actually
// happened to determine the amount of "wasted work" performed.
ReactDefaultPerf._allMeasurements.push(entry={exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},hierarchy:{},totalTime:0,created:{}});start=performanceNow();rv=func.apply(this,args);entry.totalTime=performanceNow()-start;return rv;}else if(fnName==='_mountImageIntoNode'||moduleName==='ReactDOMIDOperations'||moduleName==='CSSPropertyOperations'||moduleName==='DOMChildrenOperations'||moduleName==='DOMPropertyOperations'||moduleName==='ReactComponentBrowserEnvironment'){start=performanceNow();rv=func.apply(this,args);totalTime=performanceNow()-start;if(fnName==='_mountImageIntoNode'){ReactDefaultPerf._recordWrite('',fnName,totalTime,args[0]);}else if(fnName==='dangerouslyProcessChildrenUpdates'){ // special format
args[1].forEach(function(update){var writeArgs={};if(update.fromIndex!==null){writeArgs.fromIndex=update.fromIndex;}if(update.toIndex!==null){writeArgs.toIndex=update.toIndex;}if(update.content!==null){writeArgs.content=update.content;}ReactDefaultPerf._recordWrite(args[0]._rootNodeID,update.type,totalTime,writeArgs);});}else { // basic format
var id=args[0];if(moduleName==='EventPluginHub'){id=id._rootNodeID;}else if(fnName==='replaceNodeWithMarkup'){ // Old node is already unmounted; can't get its instance
id=ReactDOMComponentTree.getInstanceFromNode(args[1].node)._rootNodeID;}else if(fnName==='replaceDelimitedText'){id=getID(ReactDOMComponentTree.getInstanceFromNode(args[0]));}else if((typeof id==="undefined"?"undefined":_typeof(id))==='object'){id=getID(ReactDOMComponentTree.getInstanceFromNode(args[0]));}ReactDefaultPerf._recordWrite(id,fnName,totalTime,Array.prototype.slice.call(args,1));}return rv;}else if(moduleName==='ReactCompositeComponent'&&(fnName==='mountComponent'||fnName==='updateComponent'|| // TODO: receiveComponent()?
fnName==='_renderValidatedComponent')){if(this._currentElement.type===ReactMount.TopLevelWrapper){return func.apply(this,args);}var rootNodeID=getIDOfComposite(this);var isRender=fnName==='_renderValidatedComponent';var isMount=fnName==='mountComponent';var mountStack=ReactDefaultPerf._mountStack;if(isRender){addValue(entry.counts,rootNodeID,1);}else if(isMount){entry.created[rootNodeID]=true;mountStack.push(0);}ReactDefaultPerf._compositeStack.push(rootNodeID);start=performanceNow();rv=func.apply(this,args);totalTime=performanceNow()-start;ReactDefaultPerf._compositeStack.pop();if(isRender){addValue(entry.render,rootNodeID,totalTime);}else if(isMount){var subMountTime=mountStack.pop();mountStack[mountStack.length-1]+=totalTime;addValue(entry.exclusive,rootNodeID,totalTime-subMountTime);addValue(entry.inclusive,rootNodeID,totalTime);}else {addValue(entry.inclusive,rootNodeID,totalTime);}entry.displayNames[rootNodeID]={current:this.getName(),owner:this._currentElement._owner?this._currentElement._owner.getName():'<root>'};return rv;}else if((moduleName==='ReactDOMComponent'||moduleName==='ReactDOMTextComponent')&&(fnName==='mountComponent'||fnName==='receiveComponent')){rv=func.apply(this,args);entry.hierarchy[getID(this)]=ReactDefaultPerf._compositeStack.slice();return rv;}else {return func.apply(this,args);}};}};module.exports=ReactDefaultPerf;},{"./DOMProperty":13,"./ReactDOMComponentTree":41,"./ReactDefaultPerfAnalysis":61,"./ReactMount":75,"./ReactPerf":82,"fbjs/lib/performanceNow":162,"fbjs/lib/warning":164}],61:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */'use strict'; // Don't try to save users less than 1.2ms (a number I made up)
var _assign=require('object-assign');var DONT_CARE_THRESHOLD=1.2;var DOM_OPERATION_TYPES={'_mountImageIntoNode':'set innerHTML',INSERT_MARKUP:'set innerHTML',MOVE_EXISTING:'move',REMOVE_NODE:'remove',SET_MARKUP:'set innerHTML',TEXT_CONTENT:'set textContent','setValueForProperty':'update attribute','setValueForAttribute':'update attribute','deleteValueForProperty':'remove attribute','setValueForStyles':'update styles','replaceNodeWithMarkup':'replace','replaceDelimitedText':'replace'};function getTotalTime(measurements){ // TODO: return number of DOM ops? could be misleading.
// TODO: measure dropped frames after reconcile?
// TODO: log total time of each reconcile and the top-level component
// class that triggered it.
var totalTime=0;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];totalTime+=measurement.totalTime;}return totalTime;}function getDOMSummary(measurements){var items=[];measurements.forEach(function(measurement){Object.keys(measurement.writes).forEach(function(id){measurement.writes[id].forEach(function(write){items.push({id:id,type:DOM_OPERATION_TYPES[write.type]||write.type,args:write.args});});});});return items;}function getExclusiveSummary(measurements){var candidates={};var displayName;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];var allIDs=_assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs){displayName=measurement.displayNames[id].current;candidates[displayName]=candidates[displayName]||{componentName:displayName,inclusive:0,exclusive:0,render:0,count:0};if(measurement.render[id]){candidates[displayName].render+=measurement.render[id];}if(measurement.exclusive[id]){candidates[displayName].exclusive+=measurement.exclusive[id];}if(measurement.inclusive[id]){candidates[displayName].inclusive+=measurement.inclusive[id];}if(measurement.counts[id]){candidates[displayName].count+=measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(displayName in candidates){if(candidates[displayName].exclusive>=DONT_CARE_THRESHOLD){arr.push(candidates[displayName]);}}arr.sort(function(a,b){return b.exclusive-a.exclusive;});return arr;}function getInclusiveSummary(measurements,onlyClean){var candidates={};var inclusiveKey;for(var i=0;i<measurements.length;i++){var measurement=measurements[i];var allIDs=_assign({},measurement.exclusive,measurement.inclusive);var cleanComponents;if(onlyClean){cleanComponents=getUnchangedComponents(measurement);}for(var id in allIDs){if(onlyClean&&!cleanComponents[id]){continue;}var displayName=measurement.displayNames[id]; // Inclusive time is not useful for many components without knowing where
// they are instantiated. So we aggregate inclusive time with both the
// owner and current displayName as the key.
inclusiveKey=displayName.owner+' > '+displayName.current;candidates[inclusiveKey]=candidates[inclusiveKey]||{componentName:inclusiveKey,time:0,count:0};if(measurement.inclusive[id]){candidates[inclusiveKey].time+=measurement.inclusive[id];}if(measurement.counts[id]){candidates[inclusiveKey].count+=measurement.counts[id];}}} // Now make a sorted array with the results.
var arr=[];for(inclusiveKey in candidates){if(candidates[inclusiveKey].time>=DONT_CARE_THRESHOLD){arr.push(candidates[inclusiveKey]);}}arr.sort(function(a,b){return b.time-a.time;});return arr;}function getUnchangedComponents(measurement){ // For a given reconcile, look at which components did not actually
// render anything to the DOM and return a mapping of their ID to
// the amount of time it took to render the entire subtree.
var cleanComponents={};var writes=measurement.writes;var dirtyComposites={};Object.keys(writes).forEach(function(id){writes[id].forEach(function(write){ // Root mounting (innerHTML set) is recorded with an ID of ''
if(id!==''){measurement.hierarchy[id].forEach(function(c){return dirtyComposites[c]=true;});}});});var allIDs=_assign({},measurement.exclusive,measurement.inclusive);for(var id in allIDs){var isDirty=false; // See if any of the DOM operations applied to this component's subtree.
if(dirtyComposites[id]){isDirty=true;} // check if component newly created
if(measurement.created[id]){isDirty=true;}if(!isDirty&&measurement.counts[id]>0){cleanComponents[id]=true;}}return cleanComponents;}var ReactDefaultPerfAnalysis={getExclusiveSummary:getExclusiveSummary,getInclusiveSummary:getInclusiveSummary,getDOMSummary:getDOMSummary,getTotalTime:getTotalTime};module.exports=ReactDefaultPerfAnalysis;},{"object-assign":165}],62:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */'use strict';var _assign=require('object-assign');var ReactCurrentOwner=require('./ReactCurrentOwner');var warning=require('fbjs/lib/warning');var canDefineProperty=require('./canDefineProperty'); // The Symbol used to tag the ReactElement type. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var REACT_ELEMENT_TYPE=typeof Symbol==='function'&&Symbol['for']&&Symbol['for']('react.element')||0xeac7;var RESERVED_PROPS={key:true,ref:true,__self:true,__source:true};var specialPropKeyWarningShown,specialPropRefWarningShown; /**
 * Factory method to create a new React element. This no longer adheres to
 * the class pattern, so do not use new to call it. Also, no instanceof check
 * will work. Instead test $$typeof field against Symbol.for('react.element') to check
 * if something is a React Element.
 *
 * @param {*} type
 * @param {*} key
 * @param {string|object} ref
 * @param {*} self A *temporary* helper to detect places where `this` is
 * different from the `owner` when React.createElement is called, so that we
 * can warn. We want to get rid of owner and replace string `ref`s with arrow
 * functions, and as long as `this` and owner are the same, there will be no
 * change in behavior.
 * @param {*} source An annotation object (added by a transpiler or otherwise)
 * indicating filename, line number, and/or other information.
 * @param {*} owner
 * @param {*} props
 * @internal
 */var ReactElement=function ReactElement(type,key,ref,self,source,owner,props){var element={ // This tag allow us to uniquely identify this as a React Element
$$typeof:REACT_ELEMENT_TYPE, // Built-in properties that belong on the element
type:type,key:key,ref:ref,props:props, // Record the component responsible for creating this element.
_owner:owner};if("development"!=='production'){ // The validation flag is currently mutative. We put it on
// an external backing store so that we can freeze the whole object.
// This can be replaced with a WeakMap once they are implemented in
// commonly used development environments.
element._store={}; // To make comparing ReactElements easier for testing purposes, we make
// the validation flag non-enumerable (where possible, which should
// include every environment we run tests in), so the test framework
// ignores it.
if(canDefineProperty){Object.defineProperty(element._store,'validated',{configurable:false,enumerable:false,writable:true,value:false}); // self and source are DEV only properties.
Object.defineProperty(element,'_self',{configurable:false,enumerable:false,writable:false,value:self}); // Two elements created in two different places should be considered
// equal for testing purposes and therefore we hide it from enumeration.
Object.defineProperty(element,'_source',{configurable:false,enumerable:false,writable:false,value:source});}else {element._store.validated=false;element._self=self;element._source=source;}if(Object.freeze){Object.freeze(element.props);Object.freeze(element);}}return element;};ReactElement.createElement=function(type,config,children){var propName; // Reserved names are extracted
var props={};var key=null;var ref=null;var self=null;var source=null;if(config!=null){if("development"!=='production'){ref=!config.hasOwnProperty('ref')||Object.getOwnPropertyDescriptor(config,'ref').get?null:config.ref;key=!config.hasOwnProperty('key')||Object.getOwnPropertyDescriptor(config,'key').get?null:''+config.key;}else {ref=config.ref===undefined?null:config.ref;key=config.key===undefined?null:''+config.key;}self=config.__self===undefined?null:config.__self;source=config.__source===undefined?null:config.__source; // Remaining properties are added to a new props object
for(propName in config){if(config.hasOwnProperty(propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){props[propName]=config[propName];}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;} // Resolve default props
if(type&&type.defaultProps){var defaultProps=type.defaultProps;for(propName in defaultProps){if(props[propName]===undefined){props[propName]=defaultProps[propName];}}}if("development"!=='production'){ // Create dummy `key` and `ref` property to `props` to warn users
// against its use
if(typeof props.$$typeof==='undefined'||props.$$typeof!==REACT_ELEMENT_TYPE){if(!props.hasOwnProperty('key')){Object.defineProperty(props,'key',{get:function get(){if(!specialPropKeyWarningShown){specialPropKeyWarningShown=true;"development"!=='production'?warning(false,'%s: `key` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',typeof type==='function'&&'displayName' in type?type.displayName:'Element'):void 0;}return undefined;},configurable:true});}if(!props.hasOwnProperty('ref')){Object.defineProperty(props,'ref',{get:function get(){if(!specialPropRefWarningShown){specialPropRefWarningShown=true;"development"!=='production'?warning(false,'%s: `ref` is not a prop. Trying to access it will result '+'in `undefined` being returned. If you need to access the same '+'value within the child component, you should pass it as a different '+'prop. (https://fb.me/react-special-props)',typeof type==='function'&&'displayName' in type?type.displayName:'Element'):void 0;}return undefined;},configurable:true});}}}return ReactElement(type,key,ref,self,source,ReactCurrentOwner.current,props);};ReactElement.createFactory=function(type){var factory=ReactElement.createElement.bind(null,type); // Expose the type on the factory and the prototype so that it can be
// easily accessed on elements. E.g. `<Foo />.type === Foo`.
// This should not be named `constructor` since this may not be the function
// that created the element, and it may not even be a constructor.
// Legacy hook TODO: Warn if this is accessed
factory.type=type;return factory;};ReactElement.cloneAndReplaceKey=function(oldElement,newKey){var newElement=ReactElement(oldElement.type,newKey,oldElement.ref,oldElement._self,oldElement._source,oldElement._owner,oldElement.props);return newElement;};ReactElement.cloneElement=function(element,config,children){var propName; // Original props are copied
var props=_assign({},element.props); // Reserved names are extracted
var key=element.key;var ref=element.ref; // Self is preserved since the owner is preserved.
var self=element._self; // Source is preserved since cloneElement is unlikely to be targeted by a
// transpiler, and the original source is probably a better indicator of the
// true owner.
var source=element._source; // Owner will be preserved, unless ref is overridden
var owner=element._owner;if(config!=null){if(config.ref!==undefined){ // Silently steal the ref from the parent.
ref=config.ref;owner=ReactCurrentOwner.current;}if(config.key!==undefined){key=''+config.key;} // Remaining properties override existing props
var defaultProps;if(element.type&&element.type.defaultProps){defaultProps=element.type.defaultProps;}for(propName in config){if(config.hasOwnProperty(propName)&&!RESERVED_PROPS.hasOwnProperty(propName)){if(config[propName]===undefined&&defaultProps!==undefined){ // Resolve default props
props[propName]=defaultProps[propName];}else {props[propName]=config[propName];}}}} // Children can be more than one argument, and those are transferred onto
// the newly allocated props object.
var childrenLength=arguments.length-2;if(childrenLength===1){props.children=children;}else if(childrenLength>1){var childArray=Array(childrenLength);for(var i=0;i<childrenLength;i++){childArray[i]=arguments[i+2];}props.children=childArray;}return ReactElement(element.type,key,ref,self,source,owner,props);}; /**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */ReactElement.isValidElement=function(object){return (typeof object==="undefined"?"undefined":_typeof(object))==='object'&&object!==null&&object.$$typeof===REACT_ELEMENT_TYPE;};module.exports=ReactElement;},{"./ReactCurrentOwner":36,"./canDefineProperty":112,"fbjs/lib/warning":164,"object-assign":165}],63:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */ /**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */'use strict';var ReactElement=require('./ReactElement');var ReactPropTypeLocations=require('./ReactPropTypeLocations');var ReactPropTypeLocationNames=require('./ReactPropTypeLocationNames');var ReactCurrentOwner=require('./ReactCurrentOwner');var canDefineProperty=require('./canDefineProperty');var getIteratorFn=require('./getIteratorFn');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');function getDeclarationErrorAddendum(){if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */var ownerHasKeyUseWarning={};var loggedTypeFailures={}; /**
 * Warn if the element doesn't have an explicit key assigned to it.
 * This element is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 *
 * @internal
 * @param {ReactElement} element Element that requires a key.
 * @param {*} parentType element's parent's type.
 */function validateExplicitKey(element,parentType){if(!element._store||element._store.validated||element.key!=null){return;}element._store.validated=true;var addenda=getAddendaForKeyUse('uniqueKey',element,parentType);if(addenda===null){ // we already showed the warning
return;}"development"!=='production'?warning(false,'Each child in an array or iterator should have a unique "key" prop.'+'%s%s%s',addenda.parentOrOwner||'',addenda.childOwner||'',addenda.url||''):void 0;} /**
 * Shared warning and monitoring code for the key warnings.
 *
 * @internal
 * @param {string} messageType A key used for de-duping warnings.
 * @param {ReactElement} element Component that requires a key.
 * @param {*} parentType element's parent's type.
 * @returns {?object} A set of addenda to use in the warning message, or null
 * if the warning has already been shown before (and shouldn't be shown again).
 */function getAddendaForKeyUse(messageType,element,parentType){var addendum=getDeclarationErrorAddendum();if(!addendum){var parentName=typeof parentType==='string'?parentType:parentType.displayName||parentType.name;if(parentName){addendum=' Check the top-level render call using <'+parentName+'>.';}}var memoizer=ownerHasKeyUseWarning[messageType]||(ownerHasKeyUseWarning[messageType]={});if(memoizer[addendum]){return null;}memoizer[addendum]=true;var addenda={parentOrOwner:addendum,url:' See https://fb.me/react-warning-keys for more information.',childOwner:null}; // Usually the current owner is the offender, but if it accepts children as a
// property, it may be the creator of the child that's responsible for
// assigning it a key.
if(element&&element._owner&&element._owner!==ReactCurrentOwner.current){ // Give the component that originally created this child.
addenda.childOwner=' It was passed a child from '+element._owner.getName()+'.';}return addenda;} /**
 * Ensure that every element either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {ReactNode} node Statically passed child of any type.
 * @param {*} parentType node's parent's type.
 */function validateChildKeys(node,parentType){if((typeof node==="undefined"?"undefined":_typeof(node))!=='object'){return;}if(Array.isArray(node)){for(var i=0;i<node.length;i++){var child=node[i];if(ReactElement.isValidElement(child)){validateExplicitKey(child,parentType);}}}else if(ReactElement.isValidElement(node)){ // This element was passed in a valid location.
if(node._store){node._store.validated=true;}}else if(node){var iteratorFn=getIteratorFn(node); // Entry iterators provide implicit keys.
if(iteratorFn){if(iteratorFn!==node.entries){var iterator=iteratorFn.call(node);var step;while(!(step=iterator.next()).done){if(ReactElement.isValidElement(step.value)){validateExplicitKey(step.value,parentType);}}}}}} /**
 * Assert that the props are valid
 *
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */function checkPropTypes(componentName,propTypes,props,location){for(var propName in propTypes){if(propTypes.hasOwnProperty(propName)){var error; // Prop type validation may throw. In case they do, we don't want to
// fail the render phase where it didn't fail before. So we log it.
// After these have been cleaned up, we'll let them throw.
try{ // This is intentionally an invariant that gets caught. It's the same
// behavior as without this statement except with a better message.
!(typeof propTypes[propName]==='function')?"development"!=='production'?invariant(false,'%s: %s type `%s` is invalid; it must be a function, usually from '+'React.PropTypes.',componentName||'React class',ReactPropTypeLocationNames[location],propName):invariant(false):void 0;error=propTypes[propName](props,propName,componentName,location);}catch(ex){error=ex;}"development"!=='production'?warning(!error||error instanceof Error,'%s: type specification of %s `%s` is invalid; the type checker '+'function must return `null` or an `Error` but returned a %s. '+'You may have forgotten to pass an argument to the type checker '+'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and '+'shape all require an argument).',componentName||'React class',ReactPropTypeLocationNames[location],propName,typeof error==="undefined"?"undefined":_typeof(error)):void 0;if(error instanceof Error&&!(error.message in loggedTypeFailures)){ // Only monitor this failure once because there tends to be a lot of the
// same error.
loggedTypeFailures[error.message]=true;var addendum=getDeclarationErrorAddendum();"development"!=='production'?warning(false,'Failed propType: %s%s',error.message,addendum):void 0;}}}} /**
 * Given an element, validate that its props follow the propTypes definition,
 * provided by the type.
 *
 * @param {ReactElement} element
 */function validatePropTypes(element){var componentClass=element.type;if(typeof componentClass!=='function'){return;}var name=componentClass.displayName||componentClass.name;if(componentClass.propTypes){checkPropTypes(name,componentClass.propTypes,element.props,ReactPropTypeLocations.prop);}if(typeof componentClass.getDefaultProps==='function'){"development"!=='production'?warning(componentClass.getDefaultProps.isReactClassApproved,'getDefaultProps is only used on classic React.createClass '+'definitions. Use a static property named `defaultProps` instead.'):void 0;}}var ReactElementValidator={createElement:function createElement(type,props,children){var validType=typeof type==='string'||typeof type==='function'; // We warn in this case but don't throw. We expect the element creation to
// succeed and there will likely be errors in render.
"development"!=='production'?warning(validType,'React.createElement: type should not be null, undefined, boolean, or '+'number. It should be a string (for DOM elements) or a ReactClass '+'(for composite components).%s',getDeclarationErrorAddendum()):void 0;var element=ReactElement.createElement.apply(this,arguments); // The result can be nullish if a mock or a custom function is used.
// TODO: Drop this when these are no longer allowed as the type argument.
if(element==null){return element;} // Skip key warning if the type isn't valid since our key validation logic
// doesn't expect a non-string/function type and can throw confusing errors.
// We don't want exception behavior to differ between dev and prod.
// (Rendering will throw with a helpful message and as soon as the type is
// fixed, the key warnings will appear.)
if(validType){for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],type);}}validatePropTypes(element);return element;},createFactory:function createFactory(type){var validatedFactory=ReactElementValidator.createElement.bind(null,type); // Legacy hook TODO: Warn if this is accessed
validatedFactory.type=type;if("development"!=='production'){if(canDefineProperty){Object.defineProperty(validatedFactory,'type',{enumerable:false,get:function get(){"development"!=='production'?warning(false,'Factory.type is deprecated. Access the class directly '+'before passing it to createFactory.'):void 0;Object.defineProperty(this,'type',{value:type});return type;}});}}return validatedFactory;},cloneElement:function cloneElement(element,props,children){var newElement=ReactElement.cloneElement.apply(this,arguments);for(var i=2;i<arguments.length;i++){validateChildKeys(arguments[i],newElement.type);}validatePropTypes(newElement);return newElement;}};module.exports=ReactElementValidator;},{"./ReactCurrentOwner":36,"./ReactElement":62,"./ReactPropTypeLocationNames":83,"./ReactPropTypeLocations":84,"./canDefineProperty":112,"./getIteratorFn":123,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],64:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */'use strict';var emptyComponentFactory;var ReactEmptyComponentInjection={injectEmptyComponentFactory:function injectEmptyComponentFactory(factory){emptyComponentFactory=factory;}};var ReactEmptyComponent={create:function create(instantiate){return emptyComponentFactory(instantiate);}};ReactEmptyComponent.injection=ReactEmptyComponentInjection;module.exports=ReactEmptyComponent;},{}],65:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 */'use strict';var caughtError=null; /**
 * Call a function while guarding against errors that happens within it.
 *
 * @param {?String} name of the guard to use for logging or debugging
 * @param {Function} func The function to invoke
 * @param {*} a First argument
 * @param {*} b Second argument
 */function invokeGuardedCallback(name,func,a,b){try{return func(a,b);}catch(x){if(caughtError===null){caughtError=x;}return undefined;}}var ReactErrorUtils={invokeGuardedCallback:invokeGuardedCallback, /**
   * Invoked by ReactTestUtils.Simulate so that any errors thrown by the event
   * handler are sure to be rethrown by rethrowCaughtError.
   */invokeGuardedCallbackWithCatch:invokeGuardedCallback, /**
   * During execution of guarded functions we will capture the first error which
   * we will rethrow to be handled by the top level error handler.
   */rethrowCaughtError:function rethrowCaughtError(){if(caughtError){var error=caughtError;caughtError=null;throw error;}}};if("development"!=='production'){ /**
   * To help development we can get better devtools integration by simulating a
   * real browser event.
   */if(typeof window!=='undefined'&&typeof window.dispatchEvent==='function'&&typeof document!=='undefined'&&typeof document.createEvent==='function'){var fakeNode=document.createElement('react');ReactErrorUtils.invokeGuardedCallback=function(name,func,a,b){var boundFunc=func.bind(null,a,b);var evtType='react-'+name;fakeNode.addEventListener(evtType,boundFunc,false);var evt=document.createEvent('Event');evt.initEvent(evtType,false,false);fakeNode.dispatchEvent(evt);fakeNode.removeEventListener(evtType,boundFunc,false);};}}module.exports=ReactErrorUtils;},{}],66:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */'use strict';var EventPluginHub=require('./EventPluginHub');function runEventQueueInBatch(events){EventPluginHub.enqueueEvents(events);EventPluginHub.processEventQueue(false);}var ReactEventEmitterMixin={ /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   */handleTopLevel:function handleTopLevel(topLevelType,targetInst,nativeEvent,nativeEventTarget){var events=EventPluginHub.extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget);runEventQueueInBatch(events);}};module.exports=ReactEventEmitterMixin;},{"./EventPluginHub":19}],67:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 */'use strict';var _assign=require('object-assign');var EventListener=require('fbjs/lib/EventListener');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var PooledClass=require('./PooledClass');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactUpdates=require('./ReactUpdates');var getEventTarget=require('./getEventTarget');var getUnboundedScrollPosition=require('fbjs/lib/getUnboundedScrollPosition'); /**
 * Find the deepest React component completely containing the root of the
 * passed-in instance (for use when entire React trees are nested within each
 * other). If React trees are not nested, returns null.
 */function findParent(inst){ // TODO: It may be a good idea to cache this to prevent unnecessary DOM
// traversal, but caching is difficult to do correctly without using a
// mutation observer to listen for all DOM changes.
while(inst._nativeParent){inst=inst._nativeParent;}var rootNode=ReactDOMComponentTree.getNodeFromInstance(inst);var container=rootNode.parentNode;return ReactDOMComponentTree.getClosestInstanceFromNode(container);} // Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType,nativeEvent){this.topLevelType=topLevelType;this.nativeEvent=nativeEvent;this.ancestors=[];}_assign(TopLevelCallbackBookKeeping.prototype,{destructor:function destructor(){this.topLevelType=null;this.nativeEvent=null;this.ancestors.length=0;}});PooledClass.addPoolingTo(TopLevelCallbackBookKeeping,PooledClass.twoArgumentPooler);function handleTopLevelImpl(bookKeeping){var nativeEventTarget=getEventTarget(bookKeeping.nativeEvent);var targetInst=ReactDOMComponentTree.getClosestInstanceFromNode(nativeEventTarget); // Loop through the hierarchy, in case there's any nested components.
// It's important that we build the array of ancestors before calling any
// event handlers, because event handlers can modify the DOM, leading to
// inconsistencies with ReactMount's node cache. See #1105.
var ancestor=targetInst;do {bookKeeping.ancestors.push(ancestor);ancestor=ancestor&&findParent(ancestor);}while(ancestor);for(var i=0;i<bookKeeping.ancestors.length;i++){targetInst=bookKeeping.ancestors[i];ReactEventListener._handleTopLevel(bookKeeping.topLevelType,targetInst,bookKeeping.nativeEvent,getEventTarget(bookKeeping.nativeEvent));}}function scrollValueMonitor(cb){var scrollPosition=getUnboundedScrollPosition(window);cb(scrollPosition);}var ReactEventListener={_enabled:true,_handleTopLevel:null,WINDOW_HANDLE:ExecutionEnvironment.canUseDOM?window:null,setHandleTopLevel:function setHandleTopLevel(handleTopLevel){ReactEventListener._handleTopLevel=handleTopLevel;},setEnabled:function setEnabled(enabled){ReactEventListener._enabled=!!enabled;},isEnabled:function isEnabled(){return ReactEventListener._enabled;}, /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapBubbledEvent:function trapBubbledEvent(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.listen(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));}, /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {?object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */trapCapturedEvent:function trapCapturedEvent(topLevelType,handlerBaseName,handle){var element=handle;if(!element){return null;}return EventListener.capture(element,handlerBaseName,ReactEventListener.dispatchEvent.bind(null,topLevelType));},monitorScrollValue:function monitorScrollValue(refresh){var callback=scrollValueMonitor.bind(null,refresh);EventListener.listen(window,'scroll',callback);},dispatchEvent:function dispatchEvent(topLevelType,nativeEvent){if(!ReactEventListener._enabled){return;}var bookKeeping=TopLevelCallbackBookKeeping.getPooled(topLevelType,nativeEvent);try{ // Event queue being processed in the same cycle allows
// `preventDefault`.
ReactUpdates.batchedUpdates(handleTopLevelImpl,bookKeeping);}finally {TopLevelCallbackBookKeeping.release(bookKeeping);}}};module.exports=ReactEventListener;},{"./PooledClass":26,"./ReactDOMComponentTree":41,"./ReactUpdates":90,"./getEventTarget":122,"fbjs/lib/EventListener":139,"fbjs/lib/ExecutionEnvironment":140,"fbjs/lib/getUnboundedScrollPosition":151,"object-assign":165}],68:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactFeatureFlags
 */'use strict';var ReactFeatureFlags={ // When true, call console.time() before and .timeEnd() after each top-level
// render (both initial renders and updates). Useful when looking at prod-mode
// timeline profiles in Chrome, for example.
logTopLevelRenders:false};module.exports=ReactFeatureFlags;},{}],69:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */'use strict';var DOMProperty=require('./DOMProperty');var EventPluginHub=require('./EventPluginHub');var EventPluginUtils=require('./EventPluginUtils');var ReactComponentEnvironment=require('./ReactComponentEnvironment');var ReactClass=require('./ReactClass');var ReactEmptyComponent=require('./ReactEmptyComponent');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactNativeComponent=require('./ReactNativeComponent');var ReactPerf=require('./ReactPerf');var ReactUpdates=require('./ReactUpdates');var ReactInjection={Component:ReactComponentEnvironment.injection,Class:ReactClass.injection,DOMProperty:DOMProperty.injection,EmptyComponent:ReactEmptyComponent.injection,EventPluginHub:EventPluginHub.injection,EventPluginUtils:EventPluginUtils.injection,EventEmitter:ReactBrowserEventEmitter.injection,NativeComponent:ReactNativeComponent.injection,Perf:ReactPerf.injection,Updates:ReactUpdates.injection};module.exports=ReactInjection;},{"./DOMProperty":13,"./EventPluginHub":19,"./EventPluginUtils":21,"./ReactBrowserEventEmitter":28,"./ReactClass":31,"./ReactComponentEnvironment":34,"./ReactEmptyComponent":64,"./ReactNativeComponent":78,"./ReactPerf":82,"./ReactUpdates":90}],70:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */'use strict';var ReactDOMSelection=require('./ReactDOMSelection');var containsNode=require('fbjs/lib/containsNode');var focusNode=require('fbjs/lib/focusNode');var getActiveElement=require('fbjs/lib/getActiveElement');function isInDocument(node){return containsNode(document.documentElement,node);} /**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */var ReactInputSelection={hasSelectionCapabilities:function hasSelectionCapabilities(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&elem.type==='text'||nodeName==='textarea'||elem.contentEditable==='true');},getSelectionInformation:function getSelectionInformation(){var focusedElem=getActiveElement();return {focusedElem:focusedElem,selectionRange:ReactInputSelection.hasSelectionCapabilities(focusedElem)?ReactInputSelection.getSelection(focusedElem):null};}, /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */restoreSelection:function restoreSelection(priorSelectionInformation){var curFocusedElem=getActiveElement();var priorFocusedElem=priorSelectionInformation.focusedElem;var priorSelectionRange=priorSelectionInformation.selectionRange;if(curFocusedElem!==priorFocusedElem&&isInDocument(priorFocusedElem)){if(ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)){ReactInputSelection.setSelection(priorFocusedElem,priorSelectionRange);}focusNode(priorFocusedElem);}}, /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */getSelection:function getSelection(input){var selection;if('selectionStart' in input){ // Modern browser with input or textarea.
selection={start:input.selectionStart,end:input.selectionEnd};}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){ // IE8 input.
var range=document.selection.createRange(); // There can only be one selection per document in IE, so it must
// be in our element.
if(range.parentElement()===input){selection={start:-range.moveStart('character',-input.value.length),end:-range.moveEnd('character',-input.value.length)};}}else { // Content editable or old IE textarea.
selection=ReactDOMSelection.getOffsets(input);}return selection||{start:0,end:0};}, /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */setSelection:function setSelection(input,offsets){var start=offsets.start;var end=offsets.end;if(end===undefined){end=start;}if('selectionStart' in input){input.selectionStart=start;input.selectionEnd=Math.min(end,input.value.length);}else if(document.selection&&input.nodeName&&input.nodeName.toLowerCase()==='input'){var range=input.createTextRange();range.collapse(true);range.moveStart('character',start);range.moveEnd('character',end-start);range.select();}else {ReactDOMSelection.setOffsets(input,offsets);}}};module.exports=ReactInputSelection;},{"./ReactDOMSelection":52,"fbjs/lib/containsNode":143,"fbjs/lib/focusNode":148,"fbjs/lib/getActiveElement":149}],71:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */'use strict'; /**
 * `ReactInstanceMap` maintains a mapping from a public facing stateful
 * instance (key) and the internal representation (value). This allows public
 * methods to accept the user facing instance as an argument and map them back
 * to internal methods.
 */ // TODO: Replace this with ES6: var ReactInstanceMap = new Map();
var ReactInstanceMap={ /**
   * This API should be called `delete` but we'd have to make sure to always
   * transform these to strings for IE support. When this transform is fully
   * supported we can rename it.
   */remove:function remove(key){key._reactInternalInstance=undefined;},get:function get(key){return key._reactInternalInstance;},has:function has(key){return key._reactInternalInstance!==undefined;},set:function set(key,value){key._reactInternalInstance=value;}};module.exports=ReactInstanceMap;},{}],72:[function(require,module,exports){ /**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstrumentation
 */'use strict';var ReactDebugTool=require('./ReactDebugTool');module.exports={debugTool:ReactDebugTool};},{"./ReactDebugTool":57}],73:[function(require,module,exports){ /**
 * Copyright 2016-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInvalidSetStateWarningDevTool
 */'use strict';var warning=require('fbjs/lib/warning');if("development"!=='production'){var processingChildContext=false;var warnInvalidSetState=function warnInvalidSetState(){"development"!=='production'?warning(!processingChildContext,'setState(...): Cannot call setState() inside getChildContext()'):void 0;};}var ReactInvalidSetStateWarningDevTool={onBeginProcessingChildContext:function onBeginProcessingChildContext(){processingChildContext=true;},onEndProcessingChildContext:function onEndProcessingChildContext(){processingChildContext=false;},onSetState:function onSetState(){warnInvalidSetState();}};module.exports=ReactInvalidSetStateWarningDevTool;},{"fbjs/lib/warning":164}],74:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */'use strict';var adler32=require('./adler32');var TAG_END=/\/?>/;var COMMENT_START=/^<\!\-\-/;var ReactMarkupChecksum={CHECKSUM_ATTR_NAME:'data-react-checksum', /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */addChecksumToMarkup:function addChecksumToMarkup(markup){var checksum=adler32(markup); // Add checksum (handle both parent tags, comments and self-closing tags)
if(COMMENT_START.test(markup)){return markup;}else {return markup.replace(TAG_END,' '+ReactMarkupChecksum.CHECKSUM_ATTR_NAME+'="'+checksum+'"$&');}}, /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */canReuseMarkup:function canReuseMarkup(markup,element){var existingChecksum=element.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);existingChecksum=existingChecksum&&parseInt(existingChecksum,10);var markupChecksum=adler32(markup);return markupChecksum===existingChecksum;}};module.exports=ReactMarkupChecksum;},{"./adler32":111}],75:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */'use strict';var DOMLazyTree=require('./DOMLazyTree');var DOMProperty=require('./DOMProperty');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactDOMContainerInfo=require('./ReactDOMContainerInfo');var ReactDOMFeatureFlags=require('./ReactDOMFeatureFlags');var ReactElement=require('./ReactElement');var ReactFeatureFlags=require('./ReactFeatureFlags');var ReactInstrumentation=require('./ReactInstrumentation');var ReactMarkupChecksum=require('./ReactMarkupChecksum');var ReactPerf=require('./ReactPerf');var ReactReconciler=require('./ReactReconciler');var ReactUpdateQueue=require('./ReactUpdateQueue');var ReactUpdates=require('./ReactUpdates');var emptyObject=require('fbjs/lib/emptyObject');var instantiateReactComponent=require('./instantiateReactComponent');var invariant=require('fbjs/lib/invariant');var setInnerHTML=require('./setInnerHTML');var shouldUpdateReactComponent=require('./shouldUpdateReactComponent');var warning=require('fbjs/lib/warning');var ATTR_NAME=DOMProperty.ID_ATTRIBUTE_NAME;var ROOT_ATTR_NAME=DOMProperty.ROOT_ATTRIBUTE_NAME;var ELEMENT_NODE_TYPE=1;var DOC_NODE_TYPE=9;var DOCUMENT_FRAGMENT_NODE_TYPE=11;var instancesByReactRootID={}; /**
 * Finds the index of the first character
 * that's not common between the two given strings.
 *
 * @return {number} the index of the character where the strings diverge
 */function firstDifferenceIndex(string1,string2){var minLen=Math.min(string1.length,string2.length);for(var i=0;i<minLen;i++){if(string1.charAt(i)!==string2.charAt(i)){return i;}}return string1.length===string2.length?-1:minLen;} /**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 * a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */function getReactRootElementInContainer(container){if(!container){return null;}if(container.nodeType===DOC_NODE_TYPE){return container.documentElement;}else {return container.firstChild;}}function internalGetID(node){ // If node is something like a window, document, or text node, none of
// which support attributes or a .getAttribute method, gracefully return
// the empty string, as if the attribute were missing.
return node.getAttribute&&node.getAttribute(ATTR_NAME)||'';} /**
 * Mounts this component and inserts it into the DOM.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {ReactReconcileTransaction} transaction
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function mountComponentIntoNode(wrapperInstance,container,transaction,shouldReuseMarkup,context){var markerName;if(ReactFeatureFlags.logTopLevelRenders){var wrappedElement=wrapperInstance._currentElement.props;var type=wrappedElement.type;markerName='React mount: '+(typeof type==='string'?type:type.displayName||type.name);console.time(markerName);}var markup=ReactReconciler.mountComponent(wrapperInstance,transaction,null,ReactDOMContainerInfo(wrapperInstance,container),context);if(markerName){console.timeEnd(markerName);}wrapperInstance._renderedComponent._topLevelWrapper=wrapperInstance;ReactMount._mountImageIntoNode(markup,container,wrapperInstance,shouldReuseMarkup,transaction);} /**
 * Batched mount.
 *
 * @param {ReactComponent} componentInstance The instance to mount.
 * @param {DOMElement} container DOM element to mount into.
 * @param {boolean} shouldReuseMarkup If true, do not insert markup
 */function batchedMountComponentIntoNode(componentInstance,container,shouldReuseMarkup,context){var transaction=ReactUpdates.ReactReconcileTransaction.getPooled( /* useCreateElement */!shouldReuseMarkup&&ReactDOMFeatureFlags.useCreateElement);transaction.perform(mountComponentIntoNode,null,componentInstance,container,transaction,shouldReuseMarkup,context);ReactUpdates.ReactReconcileTransaction.release(transaction);} /**
 * Unmounts a component and removes it from the DOM.
 *
 * @param {ReactComponent} instance React component instance.
 * @param {DOMElement} container DOM element to unmount from.
 * @final
 * @internal
 * @see {ReactMount.unmountComponentAtNode}
 */function unmountComponentFromNode(instance,container,safely){ReactReconciler.unmountComponent(instance,safely);if(container.nodeType===DOC_NODE_TYPE){container=container.documentElement;} // http://jsperf.com/emptying-a-node
while(container.lastChild){container.removeChild(container.lastChild);}} /**
 * True if the supplied DOM node has a direct React-rendered child that is
 * not a React root element. Useful for warning in `render`,
 * `unmountComponentAtNode`, etc.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @return {boolean} True if the DOM element contains a direct child that was
 * rendered by React but is not a root element.
 * @internal
 */function hasNonRootReactChild(container){var rootEl=getReactRootElementInContainer(container);if(rootEl){var inst=ReactDOMComponentTree.getInstanceFromNode(rootEl);return !!(inst&&inst._nativeParent);}}function getNativeRootInstanceInContainer(container){var rootEl=getReactRootElementInContainer(container);var prevNativeInstance=rootEl&&ReactDOMComponentTree.getInstanceFromNode(rootEl);return prevNativeInstance&&!prevNativeInstance._nativeParent?prevNativeInstance:null;}function getTopLevelWrapperInContainer(container){var root=getNativeRootInstanceInContainer(container);return root?root._nativeContainerInfo._topLevelWrapper:null;} /**
 * Temporary (?) hack so that we can store all top-level pending updates on
 * composites instead of having to worry about different types of components
 * here.
 */var topLevelRootCounter=1;var TopLevelWrapper=function TopLevelWrapper(){this.rootID=topLevelRootCounter++;};TopLevelWrapper.prototype.isReactComponent={};if("development"!=='production'){TopLevelWrapper.displayName='TopLevelWrapper';}TopLevelWrapper.prototype.render=function(){ // this.props is actually a ReactElement
return this.props;}; /**
 * Mounting is the process of initializing a React component by creating its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */var ReactMount={TopLevelWrapper:TopLevelWrapper, /**
   * Used by devtools. The keys are not important.
   */_instancesByReactRootID:instancesByReactRootID, /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */scrollMonitor:function scrollMonitor(container,renderCallback){renderCallback();}, /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactElement} nextElement component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */_updateRootComponent:function _updateRootComponent(prevComponent,nextElement,container,callback){ReactMount.scrollMonitor(container,function(){ReactUpdateQueue.enqueueElementInternal(prevComponent,nextElement);if(callback){ReactUpdateQueue.enqueueCallbackInternal(prevComponent,callback);}});return prevComponent;}, /**
   * Render a new component into the DOM. Hooked by devtools!
   *
   * @param {ReactElement} nextElement element to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */_renderNewRootComponent:function _renderNewRootComponent(nextElement,container,shouldReuseMarkup,context){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case.
"development"!=='production'?warning(ReactCurrentOwner.current==null,'_renderNewRootComponent(): Render methods should be a pure function '+'of props and state; triggering nested component updates from '+'render is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):void 0;!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'_registerComponent(...): Target container is not a DOM element.'):invariant(false):void 0;ReactBrowserEventEmitter.ensureScrollValueMonitoring();var componentInstance=instantiateReactComponent(nextElement); // The initial render is synchronous but any updates that happen during
// rendering, in componentWillMount or componentDidMount, will be batched
// according to the current batching strategy.
ReactUpdates.batchedUpdates(batchedMountComponentIntoNode,componentInstance,container,shouldReuseMarkup,context);var wrapperID=componentInstance._instance.rootID;instancesByReactRootID[wrapperID]=componentInstance;if("development"!=='production'){ReactInstrumentation.debugTool.onMountRootComponent(componentInstance);}return componentInstance;}, /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactComponent} parentComponent The conceptual parent of this render tree.
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */renderSubtreeIntoContainer:function renderSubtreeIntoContainer(parentComponent,nextElement,container,callback){!(parentComponent!=null&&parentComponent._reactInternalInstance!=null)?"development"!=='production'?invariant(false,'parentComponent must be a valid React Component'):invariant(false):void 0;return ReactMount._renderSubtreeIntoContainer(parentComponent,nextElement,container,callback);},_renderSubtreeIntoContainer:function _renderSubtreeIntoContainer(parentComponent,nextElement,container,callback){ReactUpdateQueue.validateCallback(callback,'ReactDOM.render');!ReactElement.isValidElement(nextElement)?"development"!=='production'?invariant(false,'ReactDOM.render(): Invalid component element.%s',typeof nextElement==='string'?' Instead of passing a string like \'div\', pass '+'React.createElement(\'div\') or <div />.':typeof nextElement==='function'?' Instead of passing a class like Foo, pass '+'React.createElement(Foo) or <Foo />.': // Check if it quacks like an element
nextElement!=null&&nextElement.props!==undefined?' This may be caused by unintentionally loading two independent '+'copies of React.':''):invariant(false):void 0;"development"!=='production'?warning(!container||!container.tagName||container.tagName.toUpperCase()!=='BODY','render(): Rendering components directly into document.body is '+'discouraged, since its children are often manipulated by third-party '+'scripts and browser extensions. This may lead to subtle '+'reconciliation issues. Try rendering into a container element created '+'for your app.'):void 0;var nextWrappedElement=ReactElement(TopLevelWrapper,null,null,null,null,null,nextElement);var prevComponent=getTopLevelWrapperInContainer(container);if(prevComponent){var prevWrappedElement=prevComponent._currentElement;var prevElement=prevWrappedElement.props;if(shouldUpdateReactComponent(prevElement,nextElement)){var publicInst=prevComponent._renderedComponent.getPublicInstance();var updatedCallback=callback&&function(){callback.call(publicInst);};ReactMount._updateRootComponent(prevComponent,nextWrappedElement,container,updatedCallback);return publicInst;}else {ReactMount.unmountComponentAtNode(container);}}var reactRootElement=getReactRootElementInContainer(container);var containerHasReactMarkup=reactRootElement&&!!internalGetID(reactRootElement);var containerHasNonRootReactChild=hasNonRootReactChild(container);if("development"!=='production'){"development"!=='production'?warning(!containerHasNonRootReactChild,'render(...): Replacing React-rendered children with a new root '+'component. If you intended to update the children of this node, '+'you should instead have the existing children update their state '+'and render the new components instead of calling ReactDOM.render.'):void 0;if(!containerHasReactMarkup||reactRootElement.nextSibling){var rootElementSibling=reactRootElement;while(rootElementSibling){if(internalGetID(rootElementSibling)){"development"!=='production'?warning(false,'render(): Target node has markup rendered by React, but there '+'are unrelated nodes as well. This is most commonly caused by '+'white-space inserted around server-rendered markup.'):void 0;break;}rootElementSibling=rootElementSibling.nextSibling;}}}var shouldReuseMarkup=containerHasReactMarkup&&!prevComponent&&!containerHasNonRootReactChild;var component=ReactMount._renderNewRootComponent(nextWrappedElement,container,shouldReuseMarkup,parentComponent!=null?parentComponent._reactInternalInstance._processChildContext(parentComponent._reactInternalInstance._context):emptyObject)._renderedComponent.getPublicInstance();if(callback){callback.call(component);}return component;}, /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */render:function render(nextElement,container,callback){return ReactMount._renderSubtreeIntoContainer(null,nextElement,container,callback);}, /**
   * Unmounts and destroys the React component rendered in the `container`.
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */unmountComponentAtNode:function unmountComponentAtNode(container){ // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (Strictly speaking, unmounting won't cause a
// render but we still don't expect to be in a render call here.)
"development"!=='production'?warning(ReactCurrentOwner.current==null,'unmountComponentAtNode(): Render methods should be a pure function '+'of props and state; triggering nested component updates from render '+'is not allowed. If necessary, trigger nested updates in '+'componentDidUpdate. Check the render method of %s.',ReactCurrentOwner.current&&ReactCurrentOwner.current.getName()||'ReactCompositeComponent'):void 0;!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'unmountComponentAtNode(...): Target container is not a DOM element.'):invariant(false):void 0;var prevComponent=getTopLevelWrapperInContainer(container);if(!prevComponent){ // Check if the node being unmounted was rendered by React, but isn't a
// root node.
var containerHasNonRootReactChild=hasNonRootReactChild(container); // Check if the container itself is a React root node.
var isContainerReactRoot=container.nodeType===1&&container.hasAttribute(ROOT_ATTR_NAME);if("development"!=='production'){"development"!=='production'?warning(!containerHasNonRootReactChild,'unmountComponentAtNode(): The node you\'re attempting to unmount '+'was rendered by React and is not a top-level container. %s',isContainerReactRoot?'You may have accidentally passed in a React root node instead '+'of its container.':'Instead, have the parent component update its state and '+'rerender in order to remove this component.'):void 0;}return false;}delete instancesByReactRootID[prevComponent._instance.rootID];ReactUpdates.batchedUpdates(unmountComponentFromNode,prevComponent,container,false);return true;},_mountImageIntoNode:function _mountImageIntoNode(markup,container,instance,shouldReuseMarkup,transaction){!(container&&(container.nodeType===ELEMENT_NODE_TYPE||container.nodeType===DOC_NODE_TYPE||container.nodeType===DOCUMENT_FRAGMENT_NODE_TYPE))?"development"!=='production'?invariant(false,'mountComponentIntoNode(...): Target container is not valid.'):invariant(false):void 0;if(shouldReuseMarkup){var rootElement=getReactRootElementInContainer(container);if(ReactMarkupChecksum.canReuseMarkup(markup,rootElement)){ReactDOMComponentTree.precacheNode(instance,rootElement);return;}else {var checksum=rootElement.getAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);rootElement.removeAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME);var rootMarkup=rootElement.outerHTML;rootElement.setAttribute(ReactMarkupChecksum.CHECKSUM_ATTR_NAME,checksum);var normalizedMarkup=markup;if("development"!=='production'){ // because rootMarkup is retrieved from the DOM, various normalizations
// will have occurred which will not be present in `markup`. Here,
// insert markup into a <div> or <iframe> depending on the container
// type to perform the same normalizations before comparing.
var normalizer;if(container.nodeType===ELEMENT_NODE_TYPE){normalizer=document.createElement('div');normalizer.innerHTML=markup;normalizedMarkup=normalizer.innerHTML;}else {normalizer=document.createElement('iframe');document.body.appendChild(normalizer);normalizer.contentDocument.write(markup);normalizedMarkup=normalizer.contentDocument.documentElement.outerHTML;document.body.removeChild(normalizer);}}var diffIndex=firstDifferenceIndex(normalizedMarkup,rootMarkup);var difference=' (client) '+normalizedMarkup.substring(diffIndex-20,diffIndex+20)+'\n (server) '+rootMarkup.substring(diffIndex-20,diffIndex+20);!(container.nodeType!==DOC_NODE_TYPE)?"development"!=='production'?invariant(false,'You\'re trying to render a component to the document using '+'server rendering but the checksum was invalid. This usually '+'means you rendered a different component type or props on '+'the client from the one on the server, or your render() '+'methods are impure. React cannot handle this case due to '+'cross-browser quirks by rendering at the document root. You '+'should look for environment dependent code in your components '+'and ensure the props are the same client and server side:\n%s',difference):invariant(false):void 0;if("development"!=='production'){"development"!=='production'?warning(false,'React attempted to reuse markup in a container but the '+'checksum was invalid. This generally means that you are '+'using server rendering and the markup generated on the '+'server was not what the client was expecting. React injected '+'new markup to compensate which works but you have lost many '+'of the benefits of server rendering. Instead, figure out '+'why the markup being generated is different on the client '+'or server:\n%s',difference):void 0;}}}!(container.nodeType!==DOC_NODE_TYPE)?"development"!=='production'?invariant(false,'You\'re trying to render a component to the document but '+'you didn\'t use server rendering. We can\'t do this '+'without using server rendering due to cross-browser quirks. '+'See ReactDOMServer.renderToString() for server rendering.'):invariant(false):void 0;if(transaction.useCreateElement){while(container.lastChild){container.removeChild(container.lastChild);}DOMLazyTree.insertTreeBefore(container,markup,null);}else {setInnerHTML(container,markup);ReactDOMComponentTree.precacheNode(instance,container.firstChild);}}};ReactPerf.measureMethods(ReactMount,'ReactMount',{_renderNewRootComponent:'_renderNewRootComponent',_mountImageIntoNode:'_mountImageIntoNode'});module.exports=ReactMount;},{"./DOMLazyTree":11,"./DOMProperty":13,"./ReactBrowserEventEmitter":28,"./ReactCurrentOwner":36,"./ReactDOMComponentTree":41,"./ReactDOMContainerInfo":42,"./ReactDOMFeatureFlags":46,"./ReactElement":62,"./ReactFeatureFlags":68,"./ReactInstrumentation":72,"./ReactMarkupChecksum":74,"./ReactPerf":82,"./ReactReconciler":87,"./ReactUpdateQueue":89,"./ReactUpdates":90,"./instantiateReactComponent":128,"./setInnerHTML":134,"./shouldUpdateReactComponent":136,"fbjs/lib/emptyObject":147,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],76:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 */'use strict';var ReactComponentEnvironment=require('./ReactComponentEnvironment');var ReactMultiChildUpdateTypes=require('./ReactMultiChildUpdateTypes');var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactReconciler=require('./ReactReconciler');var ReactChildReconciler=require('./ReactChildReconciler');var flattenChildren=require('./flattenChildren');var invariant=require('fbjs/lib/invariant'); /**
 * Make an update for markup to be rendered and inserted at a supplied index.
 *
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */function makeInsertMarkup(markup,afterNode,toIndex){ // NOTE: Null values reduce hidden classes.
return {type:ReactMultiChildUpdateTypes.INSERT_MARKUP,content:markup,fromIndex:null,fromNode:null,toIndex:toIndex,afterNode:afterNode};} /**
 * Make an update for moving an existing element to another index.
 *
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */function makeMove(child,afterNode,toIndex){ // NOTE: Null values reduce hidden classes.
return {type:ReactMultiChildUpdateTypes.MOVE_EXISTING,content:null,fromIndex:child._mountIndex,fromNode:ReactReconciler.getNativeNode(child),toIndex:toIndex,afterNode:afterNode};} /**
 * Make an update for removing an element at an index.
 *
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */function makeRemove(child,node){ // NOTE: Null values reduce hidden classes.
return {type:ReactMultiChildUpdateTypes.REMOVE_NODE,content:null,fromIndex:child._mountIndex,fromNode:node,toIndex:null,afterNode:null};} /**
 * Make an update for setting the markup of a node.
 *
 * @param {string} markup Markup that renders into an element.
 * @private
 */function makeSetMarkup(markup){ // NOTE: Null values reduce hidden classes.
return {type:ReactMultiChildUpdateTypes.SET_MARKUP,content:markup,fromIndex:null,fromNode:null,toIndex:null,afterNode:null};} /**
 * Make an update for setting the text content.
 *
 * @param {string} textContent Text content to set.
 * @private
 */function makeTextContent(textContent){ // NOTE: Null values reduce hidden classes.
return {type:ReactMultiChildUpdateTypes.TEXT_CONTENT,content:textContent,fromIndex:null,fromNode:null,toIndex:null,afterNode:null};} /**
 * Push an update, if any, onto the queue. Creates a new queue if none is
 * passed and always returns the queue. Mutative.
 */function enqueue(queue,update){if(update){queue=queue||[];queue.push(update);}return queue;} /**
 * Processes any enqueued updates.
 *
 * @private
 */function processQueue(inst,updateQueue){ReactComponentEnvironment.processChildrenUpdates(inst,updateQueue);} /**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */var ReactMultiChild={ /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */Mixin:{_reconcilerInstantiateChildren:function _reconcilerInstantiateChildren(nestedChildren,transaction,context){if("development"!=='production'){if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);}finally {ReactCurrentOwner.current=null;}}}return ReactChildReconciler.instantiateChildren(nestedChildren,transaction,context);},_reconcilerUpdateChildren:function _reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,removedNodes,transaction,context){var nextChildren;if("development"!=='production'){if(this._currentElement){try{ReactCurrentOwner.current=this._currentElement._owner;nextChildren=flattenChildren(nextNestedChildrenElements);}finally {ReactCurrentOwner.current=null;}ReactChildReconciler.updateChildren(prevChildren,nextChildren,removedNodes,transaction,context);return nextChildren;}}nextChildren=flattenChildren(nextNestedChildrenElements);ReactChildReconciler.updateChildren(prevChildren,nextChildren,removedNodes,transaction,context);return nextChildren;}, /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */mountChildren:function mountChildren(nestedChildren,transaction,context){var children=this._reconcilerInstantiateChildren(nestedChildren,transaction,context);this._renderedChildren=children;var mountImages=[];var index=0;for(var name in children){if(children.hasOwnProperty(name)){var child=children[name];var mountImage=ReactReconciler.mountComponent(child,transaction,this,this._nativeContainerInfo,context);child._mountIndex=index++;mountImages.push(mountImage);}}return mountImages;}, /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */updateTextContent:function updateTextContent(nextContent){var prevChildren=this._renderedChildren; // Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren,false);for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){!false?"development"!=='production'?invariant(false,'updateTextContent called on non-empty component.'):invariant(false):void 0;}} // Set new text content.
var updates=[makeTextContent(nextContent)];processQueue(this,updates);}, /**
     * Replaces any rendered children with a markup string.
     *
     * @param {string} nextMarkup String of markup.
     * @internal
     */updateMarkup:function updateMarkup(nextMarkup){var prevChildren=this._renderedChildren; // Remove any rendered children.
ReactChildReconciler.unmountChildren(prevChildren,false);for(var name in prevChildren){if(prevChildren.hasOwnProperty(name)){!false?"development"!=='production'?invariant(false,'updateTextContent called on non-empty component.'):invariant(false):void 0;}}var updates=[makeSetMarkup(nextMarkup)];processQueue(this,updates);}, /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */updateChildren:function updateChildren(nextNestedChildrenElements,transaction,context){ // Hook used by React ART
this._updateChildren(nextNestedChildrenElements,transaction,context);}, /**
     * @param {?object} nextNestedChildrenElements Nested child element maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */_updateChildren:function _updateChildren(nextNestedChildrenElements,transaction,context){var prevChildren=this._renderedChildren;var removedNodes={};var nextChildren=this._reconcilerUpdateChildren(prevChildren,nextNestedChildrenElements,removedNodes,transaction,context);if(!nextChildren&&!prevChildren){return;}var updates=null;var name; // `nextIndex` will increment for each child in `nextChildren`, but
// `lastIndex` will be the last index visited in `prevChildren`.
var lastIndex=0;var nextIndex=0;var lastPlacedNode=null;for(name in nextChildren){if(!nextChildren.hasOwnProperty(name)){continue;}var prevChild=prevChildren&&prevChildren[name];var nextChild=nextChildren[name];if(prevChild===nextChild){updates=enqueue(updates,this.moveChild(prevChild,lastPlacedNode,nextIndex,lastIndex));lastIndex=Math.max(prevChild._mountIndex,lastIndex);prevChild._mountIndex=nextIndex;}else {if(prevChild){ // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
lastIndex=Math.max(prevChild._mountIndex,lastIndex); // The `removedNodes` loop below will actually remove the child.
} // The child must be instantiated before it's mounted.
updates=enqueue(updates,this._mountChildAtIndex(nextChild,lastPlacedNode,nextIndex,transaction,context));}nextIndex++;lastPlacedNode=ReactReconciler.getNativeNode(nextChild);} // Remove children that are no longer present.
for(name in removedNodes){if(removedNodes.hasOwnProperty(name)){updates=enqueue(updates,this._unmountChild(prevChildren[name],removedNodes[name]));}}if(updates){processQueue(this,updates);}this._renderedChildren=nextChildren;}, /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted. It does not actually perform any
     * backend operations.
     *
     * @internal
     */unmountChildren:function unmountChildren(safely){var renderedChildren=this._renderedChildren;ReactChildReconciler.unmountChildren(renderedChildren,safely);this._renderedChildren=null;}, /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */moveChild:function moveChild(child,afterNode,toIndex,lastIndex){ // If the index of `child` is less than `lastIndex`, then it needs to
// be moved. Otherwise, we do not need to move it because a child will be
// inserted or moved before `child`.
if(child._mountIndex<lastIndex){return makeMove(child,afterNode,toIndex);}}, /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */createChild:function createChild(child,afterNode,mountImage){return makeInsertMarkup(mountImage,afterNode,child._mountIndex);}, /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */removeChild:function removeChild(child,node){return makeRemove(child,node);}, /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */_mountChildAtIndex:function _mountChildAtIndex(child,afterNode,index,transaction,context){var mountImage=ReactReconciler.mountComponent(child,transaction,this,this._nativeContainerInfo,context);child._mountIndex=index;return this.createChild(child,afterNode,mountImage);}, /**
     * Unmounts a rendered child.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @private
     */_unmountChild:function _unmountChild(child,node){var update=this.removeChild(child,node);child._mountIndex=null;return update;}}};module.exports=ReactMultiChild;},{"./ReactChildReconciler":29,"./ReactComponentEnvironment":34,"./ReactCurrentOwner":36,"./ReactMultiChildUpdateTypes":77,"./ReactReconciler":87,"./flattenChildren":117,"fbjs/lib/invariant":154}],77:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */'use strict';var keyMirror=require('fbjs/lib/keyMirror'); /**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */var ReactMultiChildUpdateTypes=keyMirror({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,SET_MARKUP:null,TEXT_CONTENT:null});module.exports=ReactMultiChildUpdateTypes;},{"fbjs/lib/keyMirror":157}],78:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */'use strict';var _assign=require('object-assign');var invariant=require('fbjs/lib/invariant');var autoGenerateWrapperClass=null;var genericComponentClass=null; // This registry keeps track of wrapper classes around native tags.
var tagToComponentClass={};var textComponentClass=null;var ReactNativeComponentInjection={ // This accepts a class that receives the tag string. This is a catch all
// that can render any kind of tag.
injectGenericComponentClass:function injectGenericComponentClass(componentClass){genericComponentClass=componentClass;}, // This accepts a text component class that takes the text string to be
// rendered as props.
injectTextComponentClass:function injectTextComponentClass(componentClass){textComponentClass=componentClass;}, // This accepts a keyed object with classes as values. Each key represents a
// tag. That particular tag will use this class instead of the generic one.
injectComponentClasses:function injectComponentClasses(componentClasses){_assign(tagToComponentClass,componentClasses);}}; /**
 * Get a composite component wrapper class for a specific tag.
 *
 * @param {ReactElement} element The tag for which to get the class.
 * @return {function} The React class constructor function.
 */function getComponentClassForElement(element){if(typeof element.type==='function'){return element.type;}var tag=element.type;var componentClass=tagToComponentClass[tag];if(componentClass==null){tagToComponentClass[tag]=componentClass=autoGenerateWrapperClass(tag);}return componentClass;} /**
 * Get a native internal component class for a specific tag.
 *
 * @param {ReactElement} element The element to create.
 * @return {function} The internal class constructor function.
 */function createInternalComponent(element){!genericComponentClass?"development"!=='production'?invariant(false,'There is no registered component for the tag %s',element.type):invariant(false):void 0;return new genericComponentClass(element);} /**
 * @param {ReactText} text
 * @return {ReactComponent}
 */function createInstanceForText(text){return new textComponentClass(text);} /**
 * @param {ReactComponent} component
 * @return {boolean}
 */function isTextComponent(component){return component instanceof textComponentClass;}var ReactNativeComponent={getComponentClassForElement:getComponentClassForElement,createInternalComponent:createInternalComponent,createInstanceForText:createInstanceForText,isTextComponent:isTextComponent,injection:ReactNativeComponentInjection};module.exports=ReactNativeComponent;},{"fbjs/lib/invariant":154,"object-assign":165}],79:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNodeTypes
 */'use strict';var ReactElement=require('./ReactElement');var invariant=require('fbjs/lib/invariant');var ReactNodeTypes={NATIVE:0,COMPOSITE:1,EMPTY:2,getType:function getType(node){if(node===null||node===false){return ReactNodeTypes.EMPTY;}else if(ReactElement.isValidElement(node)){if(typeof node.type==='function'){return ReactNodeTypes.COMPOSITE;}else {return ReactNodeTypes.NATIVE;}}!false?"development"!=='production'?invariant(false,'Unexpected node: %s',node):invariant(false):void 0;}};module.exports=ReactNodeTypes;},{"./ReactElement":62,"fbjs/lib/invariant":154}],80:[function(require,module,exports){ /**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNoopUpdateQueue
 */'use strict';var warning=require('fbjs/lib/warning');function warnTDZ(publicInstance,callerName){if("development"!=='production'){"development"!=='production'?warning(false,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,publicInstance.constructor&&publicInstance.constructor.displayName||''):void 0;}} /**
 * This is the abstract API for an update queue.
 */var ReactNoopUpdateQueue={ /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(publicInstance){return false;}, /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @internal
   */enqueueCallback:function enqueueCallback(publicInstance,callback){}, /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function enqueueForceUpdate(publicInstance){warnTDZ(publicInstance,'forceUpdate');}, /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){warnTDZ(publicInstance,'replaceState');}, /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function enqueueSetState(publicInstance,partialState){warnTDZ(publicInstance,'setState');}};module.exports=ReactNoopUpdateQueue;},{"fbjs/lib/warning":164}],81:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */'use strict';var invariant=require('fbjs/lib/invariant'); /**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */var ReactOwner={ /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */isValidOwner:function isValidOwner(object){return !!(object&&typeof object.attachRef==='function'&&typeof object.detachRef==='function');}, /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */addComponentAsRefTo:function addComponentAsRefTo(component,ref,owner){!ReactOwner.isValidOwner(owner)?"development"!=='production'?invariant(false,'addComponentAsRefTo(...): Only a ReactOwner can have refs. You might '+'be adding a ref to a component that was not created inside a component\'s '+'`render` method, or you have multiple copies of React loaded '+'(details: https://fb.me/react-refs-must-have-owner).'):invariant(false):void 0;owner.attachRef(ref,component);}, /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */removeComponentAsRefFrom:function removeComponentAsRefFrom(component,ref,owner){!ReactOwner.isValidOwner(owner)?"development"!=='production'?invariant(false,'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. You might '+'be removing a ref to a component that was not created inside a component\'s '+'`render` method, or you have multiple copies of React loaded '+'(details: https://fb.me/react-refs-must-have-owner).'):invariant(false):void 0;var ownerPublicInstance=owner.getPublicInstance(); // Check that `component`'s owner is still alive and that `component` is still the current ref
// because we do not want to detach the ref if another component stole it.
if(ownerPublicInstance&&ownerPublicInstance.refs[ref]===component.getPublicInstance()){owner.detachRef(ref);}}};module.exports=ReactOwner;},{"fbjs/lib/invariant":154}],82:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 */'use strict'; /**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */var ReactPerf={ /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */enableMeasure:false, /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */storedMeasure:_noMeasure, /**
   * @param {object} object
   * @param {string} objectName
   * @param {object<string>} methodNames
   */measureMethods:function measureMethods(object,objectName,methodNames){if("development"!=='production'){for(var key in methodNames){if(!methodNames.hasOwnProperty(key)){continue;}object[key]=ReactPerf.measure(objectName,methodNames[key],object[key]);}}}, /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */measure:function measure(objName,fnName,func){if("development"!=='production'){var measuredFunc=null;var wrapper=function wrapper(){if(ReactPerf.enableMeasure){if(!measuredFunc){measuredFunc=ReactPerf.storedMeasure(objName,fnName,func);}return measuredFunc.apply(this,arguments);}return func.apply(this,arguments);};wrapper.displayName=objName+'_'+fnName;return wrapper;}return func;},injection:{ /**
     * @param {function} measure
     */injectMeasure:function injectMeasure(measure){ReactPerf.storedMeasure=measure;}}}; /**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */function _noMeasure(objName,fnName,func){return func;}module.exports=ReactPerf;},{}],83:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */'use strict';var ReactPropTypeLocationNames={};if("development"!=='production'){ReactPropTypeLocationNames={prop:'prop',context:'context',childContext:'child context'};}module.exports=ReactPropTypeLocationNames;},{}],84:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */'use strict';var keyMirror=require('fbjs/lib/keyMirror');var ReactPropTypeLocations=keyMirror({prop:null,context:null,childContext:null});module.exports=ReactPropTypeLocations;},{"fbjs/lib/keyMirror":157}],85:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */'use strict';var ReactElement=require('./ReactElement');var ReactPropTypeLocationNames=require('./ReactPropTypeLocationNames');var emptyFunction=require('fbjs/lib/emptyFunction');var getIteratorFn=require('./getIteratorFn'); /**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */var ANONYMOUS='<<anonymous>>';var ReactPropTypes={array:createPrimitiveTypeChecker('array'),bool:createPrimitiveTypeChecker('boolean'),func:createPrimitiveTypeChecker('function'),number:createPrimitiveTypeChecker('number'),object:createPrimitiveTypeChecker('object'),string:createPrimitiveTypeChecker('string'),any:createAnyTypeChecker(),arrayOf:createArrayOfTypeChecker,element:createElementTypeChecker(),instanceOf:createInstanceTypeChecker,node:createNodeChecker(),objectOf:createObjectOfTypeChecker,oneOf:createEnumTypeChecker,oneOfType:createUnionTypeChecker,shape:createShapeTypeChecker}; /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */ /*eslint-disable no-self-compare*/function is(x,y){ // SameValue algorithm
if(x===y){ // Steps 1-5, 7-10
// Steps 6.b-6.e: +0 != -0
return x!==0||1/x===1/y;}else { // Step 6.a: NaN == NaN
return x!==x&&y!==y;}} /*eslint-enable no-self-compare*/function createChainableTypeChecker(validate){function checkType(isRequired,props,propName,componentName,location,propFullName){componentName=componentName||ANONYMOUS;propFullName=propFullName||propName;if(props[propName]==null){var locationName=ReactPropTypeLocationNames[location];if(isRequired){return new Error('Required '+locationName+' `'+propFullName+'` was not specified in '+('`'+componentName+'`.'));}return null;}else {return validate(props,propName,componentName,location,propFullName);}}var chainedCheckType=checkType.bind(null,false);chainedCheckType.isRequired=checkType.bind(null,true);return chainedCheckType;}function createPrimitiveTypeChecker(expectedType){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!==expectedType){var locationName=ReactPropTypeLocationNames[location]; // `propValue` being instance of, say, date/regexp, pass the 'object'
// check, but we can offer a more precise error message here rather than
// 'of type `object`'.
var preciseType=getPreciseType(propValue);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+preciseType+'` supplied to `'+componentName+'`, expected ')+('`'+expectedType+'`.'));}return null;}return createChainableTypeChecker(validate);}function createAnyTypeChecker(){return createChainableTypeChecker(emptyFunction.thatReturns(null));}function createArrayOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new Error('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside arrayOf.');}var propValue=props[propName];if(!Array.isArray(propValue)){var locationName=ReactPropTypeLocationNames[location];var propType=getPropType(propValue);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an array.'));}for(var i=0;i<propValue.length;i++){var error=typeChecker(propValue,i,componentName,location,propFullName+'['+i+']');if(error instanceof Error){return error;}}return null;}return createChainableTypeChecker(validate);}function createElementTypeChecker(){function validate(props,propName,componentName,location,propFullName){if(!ReactElement.isValidElement(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a single ReactElement.'));}return null;}return createChainableTypeChecker(validate);}function createInstanceTypeChecker(expectedClass){function validate(props,propName,componentName,location,propFullName){if(!(props[propName] instanceof expectedClass)){var locationName=ReactPropTypeLocationNames[location];var expectedClassName=expectedClass.name||ANONYMOUS;var actualClassName=getClassName(props[propName]);return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+actualClassName+'` supplied to `'+componentName+'`, expected ')+('instance of `'+expectedClassName+'`.'));}return null;}return createChainableTypeChecker(validate);}function createEnumTypeChecker(expectedValues){if(!Array.isArray(expectedValues)){return createChainableTypeChecker(function(){return new Error('Invalid argument supplied to oneOf, expected an instance of array.');});}function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];for(var i=0;i<expectedValues.length;i++){if(is(propValue,expectedValues[i])){return null;}}var locationName=ReactPropTypeLocationNames[location];var valuesString=JSON.stringify(expectedValues);return new Error('Invalid '+locationName+' `'+propFullName+'` of value `'+propValue+'` '+('supplied to `'+componentName+'`, expected one of '+valuesString+'.'));}return createChainableTypeChecker(validate);}function createObjectOfTypeChecker(typeChecker){function validate(props,propName,componentName,location,propFullName){if(typeof typeChecker!=='function'){return new Error('Property `'+propFullName+'` of component `'+componentName+'` has invalid PropType notation inside objectOf.');}var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` of type '+('`'+propType+'` supplied to `'+componentName+'`, expected an object.'));}for(var key in propValue){if(propValue.hasOwnProperty(key)){var error=typeChecker(propValue,key,componentName,location,propFullName+'.'+key);if(error instanceof Error){return error;}}}return null;}return createChainableTypeChecker(validate);}function createUnionTypeChecker(arrayOfTypeCheckers){if(!Array.isArray(arrayOfTypeCheckers)){return createChainableTypeChecker(function(){return new Error('Invalid argument supplied to oneOfType, expected an instance of array.');});}function validate(props,propName,componentName,location,propFullName){for(var i=0;i<arrayOfTypeCheckers.length;i++){var checker=arrayOfTypeCheckers[i];if(checker(props,propName,componentName,location,propFullName)==null){return null;}}var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`.'));}return createChainableTypeChecker(validate);}function createNodeChecker(){function validate(props,propName,componentName,location,propFullName){if(!isNode(props[propName])){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` supplied to '+('`'+componentName+'`, expected a ReactNode.'));}return null;}return createChainableTypeChecker(validate);}function createShapeTypeChecker(shapeTypes){function validate(props,propName,componentName,location,propFullName){var propValue=props[propName];var propType=getPropType(propValue);if(propType!=='object'){var locationName=ReactPropTypeLocationNames[location];return new Error('Invalid '+locationName+' `'+propFullName+'` of type `'+propType+'` '+('supplied to `'+componentName+'`, expected `object`.'));}for(var key in shapeTypes){var checker=shapeTypes[key];if(!checker){continue;}var error=checker(propValue,key,componentName,location,propFullName+'.'+key);if(error){return error;}}return null;}return createChainableTypeChecker(validate);}function isNode(propValue){switch(typeof propValue==="undefined"?"undefined":_typeof(propValue)){case 'number':case 'string':case 'undefined':return true;case 'boolean':return !propValue;case 'object':if(Array.isArray(propValue)){return propValue.every(isNode);}if(propValue===null||ReactElement.isValidElement(propValue)){return true;}var iteratorFn=getIteratorFn(propValue);if(iteratorFn){var iterator=iteratorFn.call(propValue);var step;if(iteratorFn!==propValue.entries){while(!(step=iterator.next()).done){if(!isNode(step.value)){return false;}}}else { // Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){if(!isNode(entry[1])){return false;}}}}}else {return false;}return true;default:return false;}} // Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue){var propType=typeof propValue==="undefined"?"undefined":_typeof(propValue);if(Array.isArray(propValue)){return 'array';}if(propValue instanceof RegExp){ // Old webkits (at least until Android 4.0) return 'function' rather than
// 'object' for typeof a RegExp. We'll normalize this here so that /bla/
// passes PropTypes.object.
return 'object';}return propType;} // This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue){var propType=getPropType(propValue);if(propType==='object'){if(propValue instanceof Date){return 'date';}else if(propValue instanceof RegExp){return 'regexp';}}return propType;} // Returns class name of the object, if any.
function getClassName(propValue){if(!propValue.constructor||!propValue.constructor.name){return ANONYMOUS;}return propValue.constructor.name;}module.exports=ReactPropTypes;},{"./ReactElement":62,"./ReactPropTypeLocationNames":83,"./getIteratorFn":123,"fbjs/lib/emptyFunction":146}],86:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 */'use strict';var _assign=require('object-assign');var CallbackQueue=require('./CallbackQueue');var PooledClass=require('./PooledClass');var ReactBrowserEventEmitter=require('./ReactBrowserEventEmitter');var ReactInputSelection=require('./ReactInputSelection');var Transaction=require('./Transaction'); /**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */var SELECTION_RESTORATION={ /**
   * @return {Selection} Selection information.
   */initialize:ReactInputSelection.getSelectionInformation, /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */close:ReactInputSelection.restoreSelection}; /**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */var EVENT_SUPPRESSION={ /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */initialize:function initialize(){var currentlyEnabled=ReactBrowserEventEmitter.isEnabled();ReactBrowserEventEmitter.setEnabled(false);return currentlyEnabled;}, /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occurred. `close`
   *   restores the previous value.
   */close:function close(previouslyEnabled){ReactBrowserEventEmitter.setEnabled(previouslyEnabled);}}; /**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the transaction.
 */var ON_DOM_READY_QUEUEING={ /**
   * Initializes the internal `onDOMReady` queue.
   */initialize:function initialize(){this.reactMountReady.reset();}, /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */close:function close(){this.reactMountReady.notifyAll();}}; /**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */var TRANSACTION_WRAPPERS=[SELECTION_RESTORATION,EVENT_SUPPRESSION,ON_DOM_READY_QUEUEING]; /**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */function ReactReconcileTransaction(useCreateElement){this.reinitializeTransaction(); // Only server-side rendering really needs this option (see
// `ReactServerRendering`), but server-side uses
// `ReactServerRenderingTransaction` instead. This option is here so that it's
// accessible and defaults to false when `ReactDOMComponent` and
// `ReactTextComponent` checks it in `mountComponent`.`
this.renderToStaticMarkup=false;this.reactMountReady=CallbackQueue.getPooled(null);this.useCreateElement=useCreateElement;}var Mixin={ /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap procedures.
   *   TODO: convert to array<TransactionWrapper>
   */getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;}, /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */getReactMountReady:function getReactMountReady(){return this.reactMountReady;}, /**
   * Save current transaction state -- if the return value from this method is
   * passed to `rollback`, the transaction will be reset to that state.
   */checkpoint:function checkpoint(){ // reactMountReady is the our only stateful wrapper
return this.reactMountReady.checkpoint();},rollback:function rollback(checkpoint){this.reactMountReady.rollback(checkpoint);}, /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be reused.
   */destructor:function destructor(){CallbackQueue.release(this.reactMountReady);this.reactMountReady=null;}};_assign(ReactReconcileTransaction.prototype,Transaction.Mixin,Mixin);PooledClass.addPoolingTo(ReactReconcileTransaction);module.exports=ReactReconcileTransaction;},{"./CallbackQueue":8,"./PooledClass":26,"./ReactBrowserEventEmitter":28,"./ReactInputSelection":70,"./Transaction":108,"object-assign":165}],87:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */'use strict';var ReactRef=require('./ReactRef');var ReactInstrumentation=require('./ReactInstrumentation'); /**
 * Helper to call ReactRef.attachRefs with this composite component, split out
 * to avoid allocations in the transaction mount-ready queue.
 */function attachRefs(){ReactRef.attachRefs(this,this._currentElement);}var ReactReconciler={ /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {?object} the containing native component instance
   * @param {?object} info about the native container
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */mountComponent:function mountComponent(internalInstance,transaction,nativeParent,nativeContainerInfo,context){var markup=internalInstance.mountComponent(transaction,nativeParent,nativeContainerInfo,context);if(internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}if("development"!=='production'){ReactInstrumentation.debugTool.onMountComponent(internalInstance);}return markup;}, /**
   * Returns a value that can be passed to
   * ReactComponentEnvironment.replaceNodeWithMarkup.
   */getNativeNode:function getNativeNode(internalInstance){return internalInstance.getNativeNode();}, /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */unmountComponent:function unmountComponent(internalInstance,safely){ReactRef.detachRefs(internalInstance,internalInstance._currentElement);internalInstance.unmountComponent(safely);if("development"!=='production'){ReactInstrumentation.debugTool.onUnmountComponent(internalInstance);}}, /**
   * Update a component using a new element.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactElement} nextElement
   * @param {ReactReconcileTransaction} transaction
   * @param {object} context
   * @internal
   */receiveComponent:function receiveComponent(internalInstance,nextElement,transaction,context){var prevElement=internalInstance._currentElement;if(nextElement===prevElement&&context===internalInstance._context){ // Since elements are immutable after the owner is rendered,
// we can do a cheap identity compare here to determine if this is a
// superfluous reconcile. It's possible for state to be mutable but such
// change should trigger an update of the owner which would recreate
// the element. We explicitly check for the existence of an owner since
// it's possible for an element created outside a composite to be
// deeply mutated and reused.
// TODO: Bailing out early is just a perf optimization right?
// TODO: Removing the return statement should affect correctness?
return;}var refsChanged=ReactRef.shouldUpdateRefs(prevElement,nextElement);if(refsChanged){ReactRef.detachRefs(internalInstance,prevElement);}internalInstance.receiveComponent(nextElement,transaction,context);if(refsChanged&&internalInstance._currentElement&&internalInstance._currentElement.ref!=null){transaction.getReactMountReady().enqueue(attachRefs,internalInstance);}if("development"!=='production'){ReactInstrumentation.debugTool.onUpdateComponent(internalInstance);}}, /**
   * Flush any dirty changes in a component.
   *
   * @param {ReactComponent} internalInstance
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */performUpdateIfNecessary:function performUpdateIfNecessary(internalInstance,transaction){internalInstance.performUpdateIfNecessary(transaction);if("development"!=='production'){ReactInstrumentation.debugTool.onUpdateComponent(internalInstance);}}};module.exports=ReactReconciler;},{"./ReactInstrumentation":72,"./ReactRef":88}],88:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */'use strict';var ReactOwner=require('./ReactOwner');var ReactRef={};function attachRef(ref,component,owner){if(typeof ref==='function'){ref(component.getPublicInstance());}else { // Legacy ref
ReactOwner.addComponentAsRefTo(component,ref,owner);}}function detachRef(ref,component,owner){if(typeof ref==='function'){ref(null);}else { // Legacy ref
ReactOwner.removeComponentAsRefFrom(component,ref,owner);}}ReactRef.attachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){attachRef(ref,instance,element._owner);}};ReactRef.shouldUpdateRefs=function(prevElement,nextElement){ // If either the owner or a `ref` has changed, make sure the newest owner
// has stored a reference to `this`, and the previous owner (if different)
// has forgotten the reference to `this`. We use the element instead
// of the public this.props because the post processing cannot determine
// a ref. The ref conceptually lives on the element.
// TODO: Should this even be possible? The owner cannot change because
// it's forbidden by shouldUpdateReactComponent. The ref can change
// if you swap the keys of but not the refs. Reconsider where this check
// is made. It probably belongs where the key checking and
// instantiateReactComponent is done.
var prevEmpty=prevElement===null||prevElement===false;var nextEmpty=nextElement===null||nextElement===false;return  (// This has a few false positives w/r/t empty components.
prevEmpty||nextEmpty||nextElement._owner!==prevElement._owner||nextElement.ref!==prevElement.ref);};ReactRef.detachRefs=function(instance,element){if(element===null||element===false){return;}var ref=element.ref;if(ref!=null){detachRef(ref,instance,element._owner);}};module.exports=ReactRef;},{"./ReactOwner":81}],89:[function(require,module,exports){ /**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */'use strict';var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactInstanceMap=require('./ReactInstanceMap');var ReactUpdates=require('./ReactUpdates');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');function enqueueUpdate(internalInstance){ReactUpdates.enqueueUpdate(internalInstance);}function formatUnexpectedArgument(arg){var type=typeof arg==="undefined"?"undefined":_typeof(arg);if(type!=='object'){return type;}var displayName=arg.constructor&&arg.constructor.name||type;var keys=Object.keys(arg);if(keys.length>0&&keys.length<20){return displayName+' (keys: '+keys.join(', ')+')';}return displayName;}function getInternalInstanceReadyForUpdate(publicInstance,callerName){var internalInstance=ReactInstanceMap.get(publicInstance);if(!internalInstance){if("development"!=='production'){ // Only warn when we have a callerName. Otherwise we should be silent.
// We're probably calling from enqueueCallback. We don't want to warn
// there because we already warned for the corresponding lifecycle method.
"development"!=='production'?warning(!callerName,'%s(...): Can only update a mounted or mounting component. '+'This usually means you called %s() on an unmounted component. '+'This is a no-op. Please check the code for the %s component.',callerName,callerName,publicInstance.constructor.displayName):void 0;}return null;}if("development"!=='production'){"development"!=='production'?warning(ReactCurrentOwner.current==null,'%s(...): Cannot update during an existing state transition (such as '+'within `render` or another component\'s constructor). Render methods '+'should be a pure function of props and state; constructor '+'side-effects are an anti-pattern, but can be moved to '+'`componentWillMount`.',callerName):void 0;}return internalInstance;} /**
 * ReactUpdateQueue allows for state updates to be scheduled into a later
 * reconciliation step.
 */var ReactUpdateQueue={ /**
   * Checks whether or not this composite component is mounted.
   * @param {ReactClass} publicInstance The instance we want to test.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */isMounted:function isMounted(publicInstance){if("development"!=='production'){var owner=ReactCurrentOwner.current;if(owner!==null){"development"!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing isMounted inside its render() function. '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):void 0;owner._warnedAboutRefsInRender=true;}}var internalInstance=ReactInstanceMap.get(publicInstance);if(internalInstance){ // During componentWillMount and render this will still be null but after
// that will always render to something. At least for now. So we can use
// this hack.
return !!internalInstance._renderedComponent;}else {return false;}}, /**
   * Enqueue a callback that will be executed after all the pending updates
   * have processed.
   *
   * @param {ReactClass} publicInstance The instance to use as `this` context.
   * @param {?function} callback Called after state is updated.
   * @param {string} callerName Name of the calling function in the public API.
   * @internal
   */enqueueCallback:function enqueueCallback(publicInstance,callback,callerName){ReactUpdateQueue.validateCallback(callback,callerName);var internalInstance=getInternalInstanceReadyForUpdate(publicInstance); // Previously we would throw an error if we didn't have an internal
// instance. Since we want to make it a no-op instead, we mirror the same
// behavior we have in other enqueue* methods.
// We also need to ignore callbacks in componentWillMount. See
// enqueueUpdates.
if(!internalInstance){return null;}if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks=[callback];} // TODO: The callback here is ignored when setState is called from
// componentWillMount. Either fix it or disallow doing so completely in
// favor of getInitialState. Alternatively, we can disallow
// componentWillMount during server-side rendering.
enqueueUpdate(internalInstance);},enqueueCallbackInternal:function enqueueCallbackInternal(internalInstance,callback){if(internalInstance._pendingCallbacks){internalInstance._pendingCallbacks.push(callback);}else {internalInstance._pendingCallbacks=[callback];}enqueueUpdate(internalInstance);}, /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldComponentUpdate`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @internal
   */enqueueForceUpdate:function enqueueForceUpdate(publicInstance){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'forceUpdate');if(!internalInstance){return;}internalInstance._pendingForceUpdate=true;enqueueUpdate(internalInstance);}, /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} completeState Next state.
   * @internal
   */enqueueReplaceState:function enqueueReplaceState(publicInstance,completeState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'replaceState');if(!internalInstance){return;}internalInstance._pendingStateQueue=[completeState];internalInstance._pendingReplaceState=true;enqueueUpdate(internalInstance);}, /**
   * Sets a subset of the state. This only exists because _pendingState is
   * internal. This provides a merging strategy that is not available to deep
   * properties which is confusing. TODO: Expose pendingState or don't use it
   * during the merge.
   *
   * @param {ReactClass} publicInstance The instance that should rerender.
   * @param {object} partialState Next partial state to be merged with state.
   * @internal
   */enqueueSetState:function enqueueSetState(publicInstance,partialState){var internalInstance=getInternalInstanceReadyForUpdate(publicInstance,'setState');if(!internalInstance){return;}var queue=internalInstance._pendingStateQueue||(internalInstance._pendingStateQueue=[]);queue.push(partialState);enqueueUpdate(internalInstance);},enqueueElementInternal:function enqueueElementInternal(internalInstance,newElement){internalInstance._pendingElement=newElement;enqueueUpdate(internalInstance);},validateCallback:function validateCallback(callback,callerName){!(!callback||typeof callback==='function')?"development"!=='production'?invariant(false,'%s(...): Expected the last optional `callback` argument to be a '+'function. Instead received: %s.',callerName,formatUnexpectedArgument(callback)):invariant(false):void 0;}};module.exports=ReactUpdateQueue;},{"./ReactCurrentOwner":36,"./ReactInstanceMap":71,"./ReactUpdates":90,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],90:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */'use strict';var _assign=require('object-assign');var CallbackQueue=require('./CallbackQueue');var PooledClass=require('./PooledClass');var ReactFeatureFlags=require('./ReactFeatureFlags');var ReactPerf=require('./ReactPerf');var ReactReconciler=require('./ReactReconciler');var Transaction=require('./Transaction');var invariant=require('fbjs/lib/invariant');var dirtyComponents=[];var asapCallbackQueue=CallbackQueue.getPooled();var asapEnqueued=false;var batchingStrategy=null;function ensureInjected(){!(ReactUpdates.ReactReconcileTransaction&&batchingStrategy)?"development"!=='production'?invariant(false,'ReactUpdates: must inject a reconcile transaction class and batching '+'strategy'):invariant(false):void 0;}var NESTED_UPDATES={initialize:function initialize(){this.dirtyComponentsLength=dirtyComponents.length;},close:function close(){if(this.dirtyComponentsLength!==dirtyComponents.length){ // Additional updates were enqueued by componentDidUpdate handlers or
// similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
// these new updates so that if A's componentDidUpdate calls setState on
// B, B will update before the callback A's updater provided when calling
// setState.
dirtyComponents.splice(0,this.dirtyComponentsLength);flushBatchedUpdates();}else {dirtyComponents.length=0;}}};var UPDATE_QUEUEING={initialize:function initialize(){this.callbackQueue.reset();},close:function close(){this.callbackQueue.notifyAll();}};var TRANSACTION_WRAPPERS=[NESTED_UPDATES,UPDATE_QUEUEING];function ReactUpdatesFlushTransaction(){this.reinitializeTransaction();this.dirtyComponentsLength=null;this.callbackQueue=CallbackQueue.getPooled();this.reconcileTransaction=ReactUpdates.ReactReconcileTransaction.getPooled( /* useCreateElement */true);}_assign(ReactUpdatesFlushTransaction.prototype,Transaction.Mixin,{getTransactionWrappers:function getTransactionWrappers(){return TRANSACTION_WRAPPERS;},destructor:function destructor(){this.dirtyComponentsLength=null;CallbackQueue.release(this.callbackQueue);this.callbackQueue=null;ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);this.reconcileTransaction=null;},perform:function perform(method,scope,a){ // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
// with this transaction's wrappers around it.
return Transaction.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,method,scope,a);}});PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);function batchedUpdates(callback,a,b,c,d,e){ensureInjected();batchingStrategy.batchedUpdates(callback,a,b,c,d,e);} /**
 * Array comparator for ReactComponents by mount ordering.
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */function mountOrderComparator(c1,c2){return c1._mountOrder-c2._mountOrder;}function runBatchedUpdates(transaction){var len=transaction.dirtyComponentsLength;!(len===dirtyComponents.length)?"development"!=='production'?invariant(false,'Expected flush transaction\'s stored dirty-components length (%s) to '+'match dirty-components array length (%s).',len,dirtyComponents.length):invariant(false):void 0; // Since reconciling a component higher in the owner hierarchy usually (not
// always -- see shouldComponentUpdate()) will reconcile children, reconcile
// them before their children by sorting the array.
dirtyComponents.sort(mountOrderComparator);for(var i=0;i<len;i++){ // If a component is unmounted before pending changes apply, it will still
// be here, but we assume that it has cleared its _pendingCallbacks and
// that performUpdateIfNecessary is a noop.
var component=dirtyComponents[i]; // If performUpdateIfNecessary happens to enqueue any new updates, we
// shouldn't execute the callbacks until the next render happens, so
// stash the callbacks first
var callbacks=component._pendingCallbacks;component._pendingCallbacks=null;var markerName;if(ReactFeatureFlags.logTopLevelRenders){var namedComponent=component; // Duck type TopLevelWrapper. This is probably always true.
if(component._currentElement.props===component._renderedComponent._currentElement){namedComponent=component._renderedComponent;}markerName='React update: '+namedComponent.getName();console.time(markerName);}ReactReconciler.performUpdateIfNecessary(component,transaction.reconcileTransaction);if(markerName){console.timeEnd(markerName);}if(callbacks){for(var j=0;j<callbacks.length;j++){transaction.callbackQueue.enqueue(callbacks[j],component.getPublicInstance());}}}}var flushBatchedUpdates=function flushBatchedUpdates(){ // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
// array and perform any updates enqueued by mount-ready handlers (i.e.,
// componentDidUpdate) but we need to check here too in order to catch
// updates enqueued by setState callbacks and asap calls.
while(dirtyComponents.length||asapEnqueued){if(dirtyComponents.length){var transaction=ReactUpdatesFlushTransaction.getPooled();transaction.perform(runBatchedUpdates,null,transaction);ReactUpdatesFlushTransaction.release(transaction);}if(asapEnqueued){asapEnqueued=false;var queue=asapCallbackQueue;asapCallbackQueue=CallbackQueue.getPooled();queue.notifyAll();CallbackQueue.release(queue);}}};flushBatchedUpdates=ReactPerf.measure('ReactUpdates','flushBatchedUpdates',flushBatchedUpdates); /**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */function enqueueUpdate(component){ensureInjected(); // Various parts of our code (such as ReactCompositeComponent's
// _renderValidatedComponent) assume that calls to render aren't nested;
// verify that that's the case. (This is called by each top-level update
// function, like setProps, setState, forceUpdate, etc.; creation and
// destruction of top-level components is guarded in ReactMount.)
if(!batchingStrategy.isBatchingUpdates){batchingStrategy.batchedUpdates(enqueueUpdate,component);return;}dirtyComponents.push(component);} /**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */function asap(callback,context){!batchingStrategy.isBatchingUpdates?"development"!=='production'?invariant(false,'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where'+'updates are not being batched.'):invariant(false):void 0;asapCallbackQueue.enqueue(callback,context);asapEnqueued=true;}var ReactUpdatesInjection={injectReconcileTransaction:function injectReconcileTransaction(ReconcileTransaction){!ReconcileTransaction?"development"!=='production'?invariant(false,'ReactUpdates: must provide a reconcile transaction class'):invariant(false):void 0;ReactUpdates.ReactReconcileTransaction=ReconcileTransaction;},injectBatchingStrategy:function injectBatchingStrategy(_batchingStrategy){!_batchingStrategy?"development"!=='production'?invariant(false,'ReactUpdates: must provide a batching strategy'):invariant(false):void 0;!(typeof _batchingStrategy.batchedUpdates==='function')?"development"!=='production'?invariant(false,'ReactUpdates: must provide a batchedUpdates() function'):invariant(false):void 0;!(typeof _batchingStrategy.isBatchingUpdates==='boolean')?"development"!=='production'?invariant(false,'ReactUpdates: must provide an isBatchingUpdates boolean attribute'):invariant(false):void 0;batchingStrategy=_batchingStrategy;}};var ReactUpdates={ /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */ReactReconcileTransaction:null,batchedUpdates:batchedUpdates,enqueueUpdate:enqueueUpdate,flushBatchedUpdates:flushBatchedUpdates,injection:ReactUpdatesInjection,asap:asap};module.exports=ReactUpdates;},{"./CallbackQueue":8,"./PooledClass":26,"./ReactFeatureFlags":68,"./ReactPerf":82,"./ReactReconciler":87,"./Transaction":108,"fbjs/lib/invariant":154,"object-assign":165}],91:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactVersion
 */'use strict';module.exports='15.0.1';},{}],92:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */'use strict';var NS={xlink:'http://www.w3.org/1999/xlink',xml:'http://www.w3.org/XML/1998/namespace'}; // We use attributes for everything SVG so let's avoid some duplication and run
// code instead.
// The following are all specified in the HTML config already so we exclude here.
// - class (as className)
// - color
// - height
// - id
// - lang
// - max
// - media
// - method
// - min
// - name
// - style
// - target
// - type
// - width
var ATTRS={accentHeight:'accent-height',accumulate:0,additive:0,alignmentBaseline:'alignment-baseline',allowReorder:'allowReorder',alphabetic:0,amplitude:0,arabicForm:'arabic-form',ascent:0,attributeName:'attributeName',attributeType:'attributeType',autoReverse:'autoReverse',azimuth:0,baseFrequency:'baseFrequency',baseProfile:'baseProfile',baselineShift:'baseline-shift',bbox:0,begin:0,bias:0,by:0,calcMode:'calcMode',capHeight:'cap-height',clip:0,clipPath:'clip-path',clipRule:'clip-rule',clipPathUnits:'clipPathUnits',colorInterpolation:'color-interpolation',colorInterpolationFilters:'color-interpolation-filters',colorProfile:'color-profile',colorRendering:'color-rendering',contentScriptType:'contentScriptType',contentStyleType:'contentStyleType',cursor:0,cx:0,cy:0,d:0,decelerate:0,descent:0,diffuseConstant:'diffuseConstant',direction:0,display:0,divisor:0,dominantBaseline:'dominant-baseline',dur:0,dx:0,dy:0,edgeMode:'edgeMode',elevation:0,enableBackground:'enable-background',end:0,exponent:0,externalResourcesRequired:'externalResourcesRequired',fill:0,fillOpacity:'fill-opacity',fillRule:'fill-rule',filter:0,filterRes:'filterRes',filterUnits:'filterUnits',floodColor:'flood-color',floodOpacity:'flood-opacity',focusable:0,fontFamily:'font-family',fontSize:'font-size',fontSizeAdjust:'font-size-adjust',fontStretch:'font-stretch',fontStyle:'font-style',fontVariant:'font-variant',fontWeight:'font-weight',format:0,from:0,fx:0,fy:0,g1:0,g2:0,glyphName:'glyph-name',glyphOrientationHorizontal:'glyph-orientation-horizontal',glyphOrientationVertical:'glyph-orientation-vertical',glyphRef:'glyphRef',gradientTransform:'gradientTransform',gradientUnits:'gradientUnits',hanging:0,horizAdvX:'horiz-adv-x',horizOriginX:'horiz-origin-x',ideographic:0,imageRendering:'image-rendering','in':0,in2:0,intercept:0,k:0,k1:0,k2:0,k3:0,k4:0,kernelMatrix:'kernelMatrix',kernelUnitLength:'kernelUnitLength',kerning:0,keyPoints:'keyPoints',keySplines:'keySplines',keyTimes:'keyTimes',lengthAdjust:'lengthAdjust',letterSpacing:'letter-spacing',lightingColor:'lighting-color',limitingConeAngle:'limitingConeAngle',local:0,markerEnd:'marker-end',markerMid:'marker-mid',markerStart:'marker-start',markerHeight:'markerHeight',markerUnits:'markerUnits',markerWidth:'markerWidth',mask:0,maskContentUnits:'maskContentUnits',maskUnits:'maskUnits',mathematical:0,mode:0,numOctaves:'numOctaves',offset:0,opacity:0,operator:0,order:0,orient:0,orientation:0,origin:0,overflow:0,overlinePosition:'overline-position',overlineThickness:'overline-thickness',paintOrder:'paint-order',panose1:'panose-1',pathLength:'pathLength',patternContentUnits:'patternContentUnits',patternTransform:'patternTransform',patternUnits:'patternUnits',pointerEvents:'pointer-events',points:0,pointsAtX:'pointsAtX',pointsAtY:'pointsAtY',pointsAtZ:'pointsAtZ',preserveAlpha:'preserveAlpha',preserveAspectRatio:'preserveAspectRatio',primitiveUnits:'primitiveUnits',r:0,radius:0,refX:'refX',refY:'refY',renderingIntent:'rendering-intent',repeatCount:'repeatCount',repeatDur:'repeatDur',requiredExtensions:'requiredExtensions',requiredFeatures:'requiredFeatures',restart:0,result:0,rotate:0,rx:0,ry:0,scale:0,seed:0,shapeRendering:'shape-rendering',slope:0,spacing:0,specularConstant:'specularConstant',specularExponent:'specularExponent',speed:0,spreadMethod:'spreadMethod',startOffset:'startOffset',stdDeviation:'stdDeviation',stemh:0,stemv:0,stitchTiles:'stitchTiles',stopColor:'stop-color',stopOpacity:'stop-opacity',strikethroughPosition:'strikethrough-position',strikethroughThickness:'strikethrough-thickness',string:0,stroke:0,strokeDasharray:'stroke-dasharray',strokeDashoffset:'stroke-dashoffset',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',strokeMiterlimit:'stroke-miterlimit',strokeOpacity:'stroke-opacity',strokeWidth:'stroke-width',surfaceScale:'surfaceScale',systemLanguage:'systemLanguage',tableValues:'tableValues',targetX:'targetX',targetY:'targetY',textAnchor:'text-anchor',textDecoration:'text-decoration',textRendering:'text-rendering',textLength:'textLength',to:0,transform:0,u1:0,u2:0,underlinePosition:'underline-position',underlineThickness:'underline-thickness',unicode:0,unicodeBidi:'unicode-bidi',unicodeRange:'unicode-range',unitsPerEm:'units-per-em',vAlphabetic:'v-alphabetic',vHanging:'v-hanging',vIdeographic:'v-ideographic',vMathematical:'v-mathematical',values:0,vectorEffect:'vector-effect',version:0,vertAdvY:'vert-adv-y',vertOriginX:'vert-origin-x',vertOriginY:'vert-origin-y',viewBox:'viewBox',viewTarget:'viewTarget',visibility:0,widths:0,wordSpacing:'word-spacing',writingMode:'writing-mode',x:0,xHeight:'x-height',x1:0,x2:0,xChannelSelector:'xChannelSelector',xlinkActuate:'xlink:actuate',xlinkArcrole:'xlink:arcrole',xlinkHref:'xlink:href',xlinkRole:'xlink:role',xlinkShow:'xlink:show',xlinkTitle:'xlink:title',xlinkType:'xlink:type',xmlBase:'xml:base',xmlLang:'xml:lang',xmlSpace:'xml:space',y:0,y1:0,y2:0,yChannelSelector:'yChannelSelector',z:0,zoomAndPan:'zoomAndPan'};var SVGDOMPropertyConfig={Properties:{},DOMAttributeNamespaces:{xlinkActuate:NS.xlink,xlinkArcrole:NS.xlink,xlinkHref:NS.xlink,xlinkRole:NS.xlink,xlinkShow:NS.xlink,xlinkTitle:NS.xlink,xlinkType:NS.xlink,xmlBase:NS.xml,xmlLang:NS.xml,xmlSpace:NS.xml},DOMAttributeNames:{}};Object.keys(ATTRS).map(function(key){SVGDOMPropertyConfig.Properties[key]=0;if(ATTRS[key]){SVGDOMPropertyConfig.DOMAttributeNames[key]=ATTRS[key];}});module.exports=SVGDOMPropertyConfig;},{}],93:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventPropagators=require('./EventPropagators');var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactInputSelection=require('./ReactInputSelection');var SyntheticEvent=require('./SyntheticEvent');var getActiveElement=require('fbjs/lib/getActiveElement');var isTextInputElement=require('./isTextInputElement');var keyOf=require('fbjs/lib/keyOf');var shallowEqual=require('fbjs/lib/shallowEqual');var topLevelTypes=EventConstants.topLevelTypes;var skipSelectionChangeEvent=ExecutionEnvironment.canUseDOM&&'documentMode' in document&&document.documentMode<=11;var eventTypes={select:{phasedRegistrationNames:{bubbled:keyOf({onSelect:null}),captured:keyOf({onSelectCapture:null})},dependencies:[topLevelTypes.topBlur,topLevelTypes.topContextMenu,topLevelTypes.topFocus,topLevelTypes.topKeyDown,topLevelTypes.topMouseDown,topLevelTypes.topMouseUp,topLevelTypes.topSelectionChange]}};var activeElement=null;var activeElementInst=null;var lastSelection=null;var mouseDown=false; // Track whether a listener exists for this plugin. If none exist, we do
// not extract events. See #3639.
var hasListener=false;var ON_SELECT_KEY=keyOf({onSelect:null}); /**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @return {object}
 */function getSelection(node){if('selectionStart' in node&&ReactInputSelection.hasSelectionCapabilities(node)){return {start:node.selectionStart,end:node.selectionEnd};}else if(window.getSelection){var selection=window.getSelection();return {anchorNode:selection.anchorNode,anchorOffset:selection.anchorOffset,focusNode:selection.focusNode,focusOffset:selection.focusOffset};}else if(document.selection){var range=document.selection.createRange();return {parentElement:range.parentElement(),text:range.text,top:range.boundingTop,left:range.boundingLeft};}} /**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */function constructSelectEvent(nativeEvent,nativeEventTarget){ // Ensure we have the right element, and that the user is not dragging a
// selection (this matches native `select` event behavior). In HTML5, select
// fires only on input and textarea thus if there's no focused element we
// won't dispatch.
if(mouseDown||activeElement==null||activeElement!==getActiveElement()){return null;} // Only fire when selection has actually changed.
var currentSelection=getSelection(activeElement);if(!lastSelection||!shallowEqual(lastSelection,currentSelection)){lastSelection=currentSelection;var syntheticEvent=SyntheticEvent.getPooled(eventTypes.select,activeElementInst,nativeEvent,nativeEventTarget);syntheticEvent.type='select';syntheticEvent.target=activeElement;EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);return syntheticEvent;}return null;} /**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */var SelectEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){if(!hasListener){return null;}var targetNode=targetInst?ReactDOMComponentTree.getNodeFromInstance(targetInst):window;switch(topLevelType){ // Track the input node that has focus.
case topLevelTypes.topFocus:if(isTextInputElement(targetNode)||targetNode.contentEditable==='true'){activeElement=targetNode;activeElementInst=targetInst;lastSelection=null;}break;case topLevelTypes.topBlur:activeElement=null;activeElementInst=null;lastSelection=null;break; // Don't fire the event while the user is dragging. This matches the
// semantics of the native select event.
case topLevelTypes.topMouseDown:mouseDown=true;break;case topLevelTypes.topContextMenu:case topLevelTypes.topMouseUp:mouseDown=false;return constructSelectEvent(nativeEvent,nativeEventTarget); // Chrome and IE fire non-standard event when selection is changed (and
// sometimes when it hasn't). IE's event fires out of order with respect
// to key and input events on deletion, so we discard it.
//
// Firefox doesn't support selectionchange, so check selection status
// after each key entry. The selection changes after keydown and before
// keyup, but we check on keydown as well in the case of holding down a
// key, when multiple keydown events are fired but only one keyup is.
// This is also our approach for IE handling, for the reason above.
case topLevelTypes.topSelectionChange:if(skipSelectionChangeEvent){break;} // falls through
case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:return constructSelectEvent(nativeEvent,nativeEventTarget);}return null;},didPutListener:function didPutListener(inst,registrationName,listener){if(registrationName===ON_SELECT_KEY){hasListener=true;}}};module.exports=SelectEventPlugin;},{"./EventConstants":18,"./EventPropagators":22,"./ReactDOMComponentTree":41,"./ReactInputSelection":70,"./SyntheticEvent":99,"./isTextInputElement":130,"fbjs/lib/ExecutionEnvironment":140,"fbjs/lib/getActiveElement":149,"fbjs/lib/keyOf":158,"fbjs/lib/shallowEqual":163}],94:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */'use strict';var EventConstants=require('./EventConstants');var EventListener=require('fbjs/lib/EventListener');var EventPropagators=require('./EventPropagators');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var SyntheticAnimationEvent=require('./SyntheticAnimationEvent');var SyntheticClipboardEvent=require('./SyntheticClipboardEvent');var SyntheticEvent=require('./SyntheticEvent');var SyntheticFocusEvent=require('./SyntheticFocusEvent');var SyntheticKeyboardEvent=require('./SyntheticKeyboardEvent');var SyntheticMouseEvent=require('./SyntheticMouseEvent');var SyntheticDragEvent=require('./SyntheticDragEvent');var SyntheticTouchEvent=require('./SyntheticTouchEvent');var SyntheticTransitionEvent=require('./SyntheticTransitionEvent');var SyntheticUIEvent=require('./SyntheticUIEvent');var SyntheticWheelEvent=require('./SyntheticWheelEvent');var emptyFunction=require('fbjs/lib/emptyFunction');var getEventCharCode=require('./getEventCharCode');var invariant=require('fbjs/lib/invariant');var keyOf=require('fbjs/lib/keyOf');var topLevelTypes=EventConstants.topLevelTypes;var eventTypes={abort:{phasedRegistrationNames:{bubbled:keyOf({onAbort:true}),captured:keyOf({onAbortCapture:true})}},animationEnd:{phasedRegistrationNames:{bubbled:keyOf({onAnimationEnd:true}),captured:keyOf({onAnimationEndCapture:true})}},animationIteration:{phasedRegistrationNames:{bubbled:keyOf({onAnimationIteration:true}),captured:keyOf({onAnimationIterationCapture:true})}},animationStart:{phasedRegistrationNames:{bubbled:keyOf({onAnimationStart:true}),captured:keyOf({onAnimationStartCapture:true})}},blur:{phasedRegistrationNames:{bubbled:keyOf({onBlur:true}),captured:keyOf({onBlurCapture:true})}},canPlay:{phasedRegistrationNames:{bubbled:keyOf({onCanPlay:true}),captured:keyOf({onCanPlayCapture:true})}},canPlayThrough:{phasedRegistrationNames:{bubbled:keyOf({onCanPlayThrough:true}),captured:keyOf({onCanPlayThroughCapture:true})}},click:{phasedRegistrationNames:{bubbled:keyOf({onClick:true}),captured:keyOf({onClickCapture:true})}},contextMenu:{phasedRegistrationNames:{bubbled:keyOf({onContextMenu:true}),captured:keyOf({onContextMenuCapture:true})}},copy:{phasedRegistrationNames:{bubbled:keyOf({onCopy:true}),captured:keyOf({onCopyCapture:true})}},cut:{phasedRegistrationNames:{bubbled:keyOf({onCut:true}),captured:keyOf({onCutCapture:true})}},doubleClick:{phasedRegistrationNames:{bubbled:keyOf({onDoubleClick:true}),captured:keyOf({onDoubleClickCapture:true})}},drag:{phasedRegistrationNames:{bubbled:keyOf({onDrag:true}),captured:keyOf({onDragCapture:true})}},dragEnd:{phasedRegistrationNames:{bubbled:keyOf({onDragEnd:true}),captured:keyOf({onDragEndCapture:true})}},dragEnter:{phasedRegistrationNames:{bubbled:keyOf({onDragEnter:true}),captured:keyOf({onDragEnterCapture:true})}},dragExit:{phasedRegistrationNames:{bubbled:keyOf({onDragExit:true}),captured:keyOf({onDragExitCapture:true})}},dragLeave:{phasedRegistrationNames:{bubbled:keyOf({onDragLeave:true}),captured:keyOf({onDragLeaveCapture:true})}},dragOver:{phasedRegistrationNames:{bubbled:keyOf({onDragOver:true}),captured:keyOf({onDragOverCapture:true})}},dragStart:{phasedRegistrationNames:{bubbled:keyOf({onDragStart:true}),captured:keyOf({onDragStartCapture:true})}},drop:{phasedRegistrationNames:{bubbled:keyOf({onDrop:true}),captured:keyOf({onDropCapture:true})}},durationChange:{phasedRegistrationNames:{bubbled:keyOf({onDurationChange:true}),captured:keyOf({onDurationChangeCapture:true})}},emptied:{phasedRegistrationNames:{bubbled:keyOf({onEmptied:true}),captured:keyOf({onEmptiedCapture:true})}},encrypted:{phasedRegistrationNames:{bubbled:keyOf({onEncrypted:true}),captured:keyOf({onEncryptedCapture:true})}},ended:{phasedRegistrationNames:{bubbled:keyOf({onEnded:true}),captured:keyOf({onEndedCapture:true})}},error:{phasedRegistrationNames:{bubbled:keyOf({onError:true}),captured:keyOf({onErrorCapture:true})}},focus:{phasedRegistrationNames:{bubbled:keyOf({onFocus:true}),captured:keyOf({onFocusCapture:true})}},input:{phasedRegistrationNames:{bubbled:keyOf({onInput:true}),captured:keyOf({onInputCapture:true})}},invalid:{phasedRegistrationNames:{bubbled:keyOf({onInvalid:true}),captured:keyOf({onInvalidCapture:true})}},keyDown:{phasedRegistrationNames:{bubbled:keyOf({onKeyDown:true}),captured:keyOf({onKeyDownCapture:true})}},keyPress:{phasedRegistrationNames:{bubbled:keyOf({onKeyPress:true}),captured:keyOf({onKeyPressCapture:true})}},keyUp:{phasedRegistrationNames:{bubbled:keyOf({onKeyUp:true}),captured:keyOf({onKeyUpCapture:true})}},load:{phasedRegistrationNames:{bubbled:keyOf({onLoad:true}),captured:keyOf({onLoadCapture:true})}},loadedData:{phasedRegistrationNames:{bubbled:keyOf({onLoadedData:true}),captured:keyOf({onLoadedDataCapture:true})}},loadedMetadata:{phasedRegistrationNames:{bubbled:keyOf({onLoadedMetadata:true}),captured:keyOf({onLoadedMetadataCapture:true})}},loadStart:{phasedRegistrationNames:{bubbled:keyOf({onLoadStart:true}),captured:keyOf({onLoadStartCapture:true})}}, // Note: We do not allow listening to mouseOver events. Instead, use the
// onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
mouseDown:{phasedRegistrationNames:{bubbled:keyOf({onMouseDown:true}),captured:keyOf({onMouseDownCapture:true})}},mouseMove:{phasedRegistrationNames:{bubbled:keyOf({onMouseMove:true}),captured:keyOf({onMouseMoveCapture:true})}},mouseOut:{phasedRegistrationNames:{bubbled:keyOf({onMouseOut:true}),captured:keyOf({onMouseOutCapture:true})}},mouseOver:{phasedRegistrationNames:{bubbled:keyOf({onMouseOver:true}),captured:keyOf({onMouseOverCapture:true})}},mouseUp:{phasedRegistrationNames:{bubbled:keyOf({onMouseUp:true}),captured:keyOf({onMouseUpCapture:true})}},paste:{phasedRegistrationNames:{bubbled:keyOf({onPaste:true}),captured:keyOf({onPasteCapture:true})}},pause:{phasedRegistrationNames:{bubbled:keyOf({onPause:true}),captured:keyOf({onPauseCapture:true})}},play:{phasedRegistrationNames:{bubbled:keyOf({onPlay:true}),captured:keyOf({onPlayCapture:true})}},playing:{phasedRegistrationNames:{bubbled:keyOf({onPlaying:true}),captured:keyOf({onPlayingCapture:true})}},progress:{phasedRegistrationNames:{bubbled:keyOf({onProgress:true}),captured:keyOf({onProgressCapture:true})}},rateChange:{phasedRegistrationNames:{bubbled:keyOf({onRateChange:true}),captured:keyOf({onRateChangeCapture:true})}},reset:{phasedRegistrationNames:{bubbled:keyOf({onReset:true}),captured:keyOf({onResetCapture:true})}},scroll:{phasedRegistrationNames:{bubbled:keyOf({onScroll:true}),captured:keyOf({onScrollCapture:true})}},seeked:{phasedRegistrationNames:{bubbled:keyOf({onSeeked:true}),captured:keyOf({onSeekedCapture:true})}},seeking:{phasedRegistrationNames:{bubbled:keyOf({onSeeking:true}),captured:keyOf({onSeekingCapture:true})}},stalled:{phasedRegistrationNames:{bubbled:keyOf({onStalled:true}),captured:keyOf({onStalledCapture:true})}},submit:{phasedRegistrationNames:{bubbled:keyOf({onSubmit:true}),captured:keyOf({onSubmitCapture:true})}},suspend:{phasedRegistrationNames:{bubbled:keyOf({onSuspend:true}),captured:keyOf({onSuspendCapture:true})}},timeUpdate:{phasedRegistrationNames:{bubbled:keyOf({onTimeUpdate:true}),captured:keyOf({onTimeUpdateCapture:true})}},touchCancel:{phasedRegistrationNames:{bubbled:keyOf({onTouchCancel:true}),captured:keyOf({onTouchCancelCapture:true})}},touchEnd:{phasedRegistrationNames:{bubbled:keyOf({onTouchEnd:true}),captured:keyOf({onTouchEndCapture:true})}},touchMove:{phasedRegistrationNames:{bubbled:keyOf({onTouchMove:true}),captured:keyOf({onTouchMoveCapture:true})}},touchStart:{phasedRegistrationNames:{bubbled:keyOf({onTouchStart:true}),captured:keyOf({onTouchStartCapture:true})}},transitionEnd:{phasedRegistrationNames:{bubbled:keyOf({onTransitionEnd:true}),captured:keyOf({onTransitionEndCapture:true})}},volumeChange:{phasedRegistrationNames:{bubbled:keyOf({onVolumeChange:true}),captured:keyOf({onVolumeChangeCapture:true})}},waiting:{phasedRegistrationNames:{bubbled:keyOf({onWaiting:true}),captured:keyOf({onWaitingCapture:true})}},wheel:{phasedRegistrationNames:{bubbled:keyOf({onWheel:true}),captured:keyOf({onWheelCapture:true})}}};var topLevelEventsToDispatchConfig={topAbort:eventTypes.abort,topAnimationEnd:eventTypes.animationEnd,topAnimationIteration:eventTypes.animationIteration,topAnimationStart:eventTypes.animationStart,topBlur:eventTypes.blur,topCanPlay:eventTypes.canPlay,topCanPlayThrough:eventTypes.canPlayThrough,topClick:eventTypes.click,topContextMenu:eventTypes.contextMenu,topCopy:eventTypes.copy,topCut:eventTypes.cut,topDoubleClick:eventTypes.doubleClick,topDrag:eventTypes.drag,topDragEnd:eventTypes.dragEnd,topDragEnter:eventTypes.dragEnter,topDragExit:eventTypes.dragExit,topDragLeave:eventTypes.dragLeave,topDragOver:eventTypes.dragOver,topDragStart:eventTypes.dragStart,topDrop:eventTypes.drop,topDurationChange:eventTypes.durationChange,topEmptied:eventTypes.emptied,topEncrypted:eventTypes.encrypted,topEnded:eventTypes.ended,topError:eventTypes.error,topFocus:eventTypes.focus,topInput:eventTypes.input,topInvalid:eventTypes.invalid,topKeyDown:eventTypes.keyDown,topKeyPress:eventTypes.keyPress,topKeyUp:eventTypes.keyUp,topLoad:eventTypes.load,topLoadedData:eventTypes.loadedData,topLoadedMetadata:eventTypes.loadedMetadata,topLoadStart:eventTypes.loadStart,topMouseDown:eventTypes.mouseDown,topMouseMove:eventTypes.mouseMove,topMouseOut:eventTypes.mouseOut,topMouseOver:eventTypes.mouseOver,topMouseUp:eventTypes.mouseUp,topPaste:eventTypes.paste,topPause:eventTypes.pause,topPlay:eventTypes.play,topPlaying:eventTypes.playing,topProgress:eventTypes.progress,topRateChange:eventTypes.rateChange,topReset:eventTypes.reset,topScroll:eventTypes.scroll,topSeeked:eventTypes.seeked,topSeeking:eventTypes.seeking,topStalled:eventTypes.stalled,topSubmit:eventTypes.submit,topSuspend:eventTypes.suspend,topTimeUpdate:eventTypes.timeUpdate,topTouchCancel:eventTypes.touchCancel,topTouchEnd:eventTypes.touchEnd,topTouchMove:eventTypes.touchMove,topTouchStart:eventTypes.touchStart,topTransitionEnd:eventTypes.transitionEnd,topVolumeChange:eventTypes.volumeChange,topWaiting:eventTypes.waiting,topWheel:eventTypes.wheel};for(var type in topLevelEventsToDispatchConfig){topLevelEventsToDispatchConfig[type].dependencies=[type];}var ON_CLICK_KEY=keyOf({onClick:null});var onClickListeners={};var SimpleEventPlugin={eventTypes:eventTypes,extractEvents:function extractEvents(topLevelType,targetInst,nativeEvent,nativeEventTarget){var dispatchConfig=topLevelEventsToDispatchConfig[topLevelType];if(!dispatchConfig){return null;}var EventConstructor;switch(topLevelType){case topLevelTypes.topAbort:case topLevelTypes.topCanPlay:case topLevelTypes.topCanPlayThrough:case topLevelTypes.topDurationChange:case topLevelTypes.topEmptied:case topLevelTypes.topEncrypted:case topLevelTypes.topEnded:case topLevelTypes.topError:case topLevelTypes.topInput:case topLevelTypes.topInvalid:case topLevelTypes.topLoad:case topLevelTypes.topLoadedData:case topLevelTypes.topLoadedMetadata:case topLevelTypes.topLoadStart:case topLevelTypes.topPause:case topLevelTypes.topPlay:case topLevelTypes.topPlaying:case topLevelTypes.topProgress:case topLevelTypes.topRateChange:case topLevelTypes.topReset:case topLevelTypes.topSeeked:case topLevelTypes.topSeeking:case topLevelTypes.topStalled:case topLevelTypes.topSubmit:case topLevelTypes.topSuspend:case topLevelTypes.topTimeUpdate:case topLevelTypes.topVolumeChange:case topLevelTypes.topWaiting: // HTML Events
// @see http://www.w3.org/TR/html5/index.html#events-0
EventConstructor=SyntheticEvent;break;case topLevelTypes.topKeyPress: // Firefox creates a keypress event for function keys too. This removes
// the unwanted keypress events. Enter is however both printable and
// non-printable. One would expect Tab to be as well (but it isn't).
if(getEventCharCode(nativeEvent)===0){return null;} /* falls through */case topLevelTypes.topKeyDown:case topLevelTypes.topKeyUp:EventConstructor=SyntheticKeyboardEvent;break;case topLevelTypes.topBlur:case topLevelTypes.topFocus:EventConstructor=SyntheticFocusEvent;break;case topLevelTypes.topClick: // Firefox creates a click event on right mouse clicks. This removes the
// unwanted click events.
if(nativeEvent.button===2){return null;} /* falls through */case topLevelTypes.topContextMenu:case topLevelTypes.topDoubleClick:case topLevelTypes.topMouseDown:case topLevelTypes.topMouseMove:case topLevelTypes.topMouseOut:case topLevelTypes.topMouseOver:case topLevelTypes.topMouseUp:EventConstructor=SyntheticMouseEvent;break;case topLevelTypes.topDrag:case topLevelTypes.topDragEnd:case topLevelTypes.topDragEnter:case topLevelTypes.topDragExit:case topLevelTypes.topDragLeave:case topLevelTypes.topDragOver:case topLevelTypes.topDragStart:case topLevelTypes.topDrop:EventConstructor=SyntheticDragEvent;break;case topLevelTypes.topTouchCancel:case topLevelTypes.topTouchEnd:case topLevelTypes.topTouchMove:case topLevelTypes.topTouchStart:EventConstructor=SyntheticTouchEvent;break;case topLevelTypes.topAnimationEnd:case topLevelTypes.topAnimationIteration:case topLevelTypes.topAnimationStart:EventConstructor=SyntheticAnimationEvent;break;case topLevelTypes.topTransitionEnd:EventConstructor=SyntheticTransitionEvent;break;case topLevelTypes.topScroll:EventConstructor=SyntheticUIEvent;break;case topLevelTypes.topWheel:EventConstructor=SyntheticWheelEvent;break;case topLevelTypes.topCopy:case topLevelTypes.topCut:case topLevelTypes.topPaste:EventConstructor=SyntheticClipboardEvent;break;}!EventConstructor?"development"!=='production'?invariant(false,'SimpleEventPlugin: Unhandled event type, `%s`.',topLevelType):invariant(false):void 0;var event=EventConstructor.getPooled(dispatchConfig,targetInst,nativeEvent,nativeEventTarget);EventPropagators.accumulateTwoPhaseDispatches(event);return event;},didPutListener:function didPutListener(inst,registrationName,listener){ // Mobile Safari does not fire properly bubble click events on
// non-interactive elements, which means delegated click listeners do not
// fire. The workaround for this bug involves attaching an empty click
// listener on the target node.
if(registrationName===ON_CLICK_KEY){var id=inst._rootNodeID;var node=ReactDOMComponentTree.getNodeFromInstance(inst);if(!onClickListeners[id]){onClickListeners[id]=EventListener.listen(node,'click',emptyFunction);}}},willDeleteListener:function willDeleteListener(inst,registrationName){if(registrationName===ON_CLICK_KEY){var id=inst._rootNodeID;onClickListeners[id].remove();delete onClickListeners[id];}}};module.exports=SimpleEventPlugin;},{"./EventConstants":18,"./EventPropagators":22,"./ReactDOMComponentTree":41,"./SyntheticAnimationEvent":95,"./SyntheticClipboardEvent":96,"./SyntheticDragEvent":98,"./SyntheticEvent":99,"./SyntheticFocusEvent":100,"./SyntheticKeyboardEvent":102,"./SyntheticMouseEvent":103,"./SyntheticTouchEvent":104,"./SyntheticTransitionEvent":105,"./SyntheticUIEvent":106,"./SyntheticWheelEvent":107,"./getEventCharCode":119,"fbjs/lib/EventListener":139,"fbjs/lib/emptyFunction":146,"fbjs/lib/invariant":154,"fbjs/lib/keyOf":158}],95:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticAnimationEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent'); /**
 * @interface Event
 * @see http://www.w3.org/TR/css3-animations/#AnimationEvent-interface
 * @see https://developer.mozilla.org/en-US/docs/Web/API/AnimationEvent
 */var AnimationEventInterface={animationName:null,elapsedTime:null,pseudoElement:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticAnimationEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticAnimationEvent,AnimationEventInterface);module.exports=SyntheticAnimationEvent;},{"./SyntheticEvent":99}],96:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent'); /**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */var ClipboardEventInterface={clipboardData:function clipboardData(event){return 'clipboardData' in event?event.clipboardData:window.clipboardData;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticClipboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticClipboardEvent,ClipboardEventInterface);module.exports=SyntheticClipboardEvent;},{"./SyntheticEvent":99}],97:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent'); /**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */var CompositionEventInterface={data:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticCompositionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticCompositionEvent,CompositionEventInterface);module.exports=SyntheticCompositionEvent;},{"./SyntheticEvent":99}],98:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 */'use strict';var SyntheticMouseEvent=require('./SyntheticMouseEvent'); /**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var DragEventInterface={dataTransfer:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticDragEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticDragEvent,DragEventInterface);module.exports=SyntheticDragEvent;},{"./SyntheticMouseEvent":103}],99:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 */'use strict';var _assign=require('object-assign');var PooledClass=require('./PooledClass');var emptyFunction=require('fbjs/lib/emptyFunction');var warning=require('fbjs/lib/warning');var didWarnForAddedNewProperty=false;var isProxySupported=typeof Proxy==='function';var shouldBeReleasedProperties=['dispatchConfig','_targetInst','nativeEvent','isDefaultPrevented','isPropagationStopped','_dispatchListeners','_dispatchInstances']; /**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var EventInterface={type:null,target:null, // currentTarget is set when dispatching; no use in copying it here
currentTarget:emptyFunction.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function timeStamp(event){return event.timeStamp||Date.now();},defaultPrevented:null,isTrusted:null}; /**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {*} targetInst Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @param {DOMEventTarget} nativeEventTarget Target node.
 */function SyntheticEvent(dispatchConfig,targetInst,nativeEvent,nativeEventTarget){if("development"!=='production'){ // these have a getter/setter for warnings
delete this.nativeEvent;delete this.preventDefault;delete this.stopPropagation;}this.dispatchConfig=dispatchConfig;this._targetInst=targetInst;this.nativeEvent=nativeEvent;var Interface=this.constructor.Interface;for(var propName in Interface){if(!Interface.hasOwnProperty(propName)){continue;}if("development"!=='production'){delete this[propName]; // this has a getter/setter for warnings
}var normalize=Interface[propName];if(normalize){this[propName]=normalize(nativeEvent);}else {if(propName==='target'){this.target=nativeEventTarget;}else {this[propName]=nativeEvent[propName];}}}var defaultPrevented=nativeEvent.defaultPrevented!=null?nativeEvent.defaultPrevented:nativeEvent.returnValue===false;if(defaultPrevented){this.isDefaultPrevented=emptyFunction.thatReturnsTrue;}else {this.isDefaultPrevented=emptyFunction.thatReturnsFalse;}this.isPropagationStopped=emptyFunction.thatReturnsFalse;return this;}_assign(SyntheticEvent.prototype,{preventDefault:function preventDefault(){this.defaultPrevented=true;var event=this.nativeEvent;if(!event){return;}if(event.preventDefault){event.preventDefault();}else {event.returnValue=false;}this.isDefaultPrevented=emptyFunction.thatReturnsTrue;},stopPropagation:function stopPropagation(){var event=this.nativeEvent;if(!event){return;}if(event.stopPropagation){event.stopPropagation();}else {event.cancelBubble=true;}this.isPropagationStopped=emptyFunction.thatReturnsTrue;}, /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */persist:function persist(){this.isPersistent=emptyFunction.thatReturnsTrue;}, /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */isPersistent:emptyFunction.thatReturnsFalse, /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */destructor:function destructor(){var Interface=this.constructor.Interface;for(var propName in Interface){if("development"!=='production'){Object.defineProperty(this,propName,getPooledWarningPropertyDefinition(propName,Interface[propName]));}else {this[propName]=null;}}for(var i=0;i<shouldBeReleasedProperties.length;i++){this[shouldBeReleasedProperties[i]]=null;}if("development"!=='production'){var noop=require('fbjs/lib/emptyFunction');Object.defineProperty(this,'nativeEvent',getPooledWarningPropertyDefinition('nativeEvent',null));Object.defineProperty(this,'preventDefault',getPooledWarningPropertyDefinition('preventDefault',noop));Object.defineProperty(this,'stopPropagation',getPooledWarningPropertyDefinition('stopPropagation',noop));}}});SyntheticEvent.Interface=EventInterface;if("development"!=='production'){if(isProxySupported){ /*eslint-disable no-func-assign */SyntheticEvent=new Proxy(SyntheticEvent,{construct:function construct(target,args){return this.apply(target,Object.create(target.prototype),args);},apply:function apply(constructor,that,args){return new Proxy(constructor.apply(that,args),{set:function set(target,prop,value){if(prop!=='isPersistent'&&!target.constructor.Interface.hasOwnProperty(prop)&&shouldBeReleasedProperties.indexOf(prop)===-1){"development"!=='production'?warning(didWarnForAddedNewProperty||target.isPersistent(),'This synthetic event is reused for performance reasons. If you\'re '+'seeing this, you\'re adding a new property in the synthetic event object. '+'The property is never released. See '+'https://fb.me/react-event-pooling for more information.'):void 0;didWarnForAddedNewProperty=true;}target[prop]=value;return true;}});}}); /*eslint-enable no-func-assign */}} /**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */SyntheticEvent.augmentClass=function(Class,Interface){var Super=this;var E=function E(){};E.prototype=Super.prototype;var prototype=new E();_assign(prototype,Class.prototype);Class.prototype=prototype;Class.prototype.constructor=Class;Class.Interface=_assign({},Super.Interface,Interface);Class.augmentClass=Super.augmentClass;PooledClass.addPoolingTo(Class,PooledClass.fourArgumentPooler);};PooledClass.addPoolingTo(SyntheticEvent,PooledClass.fourArgumentPooler);module.exports=SyntheticEvent; /**
  * Helper to nullify syntheticEvent instance properties when destructing
  *
  * @param {object} SyntheticEvent
  * @param {String} propName
  * @return {object} defineProperty object
  */function getPooledWarningPropertyDefinition(propName,getVal){var isFunction=typeof getVal==='function';return {configurable:true,set:set,get:get};function set(val){var action=isFunction?'setting the method':'setting the property';warn(action,'This is effectively a no-op');return val;}function get(){var action=isFunction?'accessing the method':'accessing the property';var result=isFunction?'This is a no-op function':'This is set to null';warn(action,result);return getVal;}function warn(action,result){var warningCondition=false;"development"!=='production'?warning(warningCondition,'This synthetic event is reused for performance reasons. If you\'re seeing this, '+'you\'re %s `%s` on a released/nullified synthetic event. %s. '+'If you must keep the original synthetic event around, use event.persist(). '+'See https://fb.me/react-event-pooling for more information.',action,propName,result):void 0;}}},{"./PooledClass":26,"fbjs/lib/emptyFunction":146,"fbjs/lib/warning":164,"object-assign":165}],100:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent'); /**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var FocusEventInterface={relatedTarget:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticFocusEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticFocusEvent,FocusEventInterface);module.exports=SyntheticFocusEvent;},{"./SyntheticUIEvent":106}],101:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent'); /**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */var InputEventInterface={data:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticInputEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticInputEvent,InputEventInterface);module.exports=SyntheticInputEvent;},{"./SyntheticEvent":99}],102:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent');var getEventCharCode=require('./getEventCharCode');var getEventKey=require('./getEventKey');var getEventModifierState=require('./getEventModifierState'); /**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var KeyboardEventInterface={key:getEventKey,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:getEventModifierState, // Legacy Interface
charCode:function charCode(event){ // `charCode` is the result of a KeyPress event and represents the value of
// the actual printable character.
// KeyPress is deprecated, but its replacement is not yet final and not
// implemented in any major browser. Only KeyPress has charCode.
if(event.type==='keypress'){return getEventCharCode(event);}return 0;},keyCode:function keyCode(event){ // `keyCode` is the result of a KeyDown/Up event and represents the value of
// physical keyboard key.
// The actual meaning of the value depends on the users' keyboard layout
// which cannot be detected. Assuming that it is a US keyboard layout
// provides a surprisingly accurate mapping for US and European users.
// Due to this, it is left to the user to implement at this time.
if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;},which:function which(event){ // `which` is an alias for either `keyCode` or `charCode` depending on the
// type of the event.
if(event.type==='keypress'){return getEventCharCode(event);}if(event.type==='keydown'||event.type==='keyup'){return event.keyCode;}return 0;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticKeyboardEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent,KeyboardEventInterface);module.exports=SyntheticKeyboardEvent;},{"./SyntheticUIEvent":106,"./getEventCharCode":119,"./getEventKey":120,"./getEventModifierState":121}],103:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent');var ViewportMetrics=require('./ViewportMetrics');var getEventModifierState=require('./getEventModifierState'); /**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var MouseEventInterface={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:getEventModifierState,button:function button(event){ // Webkit, Firefox, IE9+
// which:  1 2 3
// button: 0 1 2 (standard)
var button=event.button;if('which' in event){return button;} // IE<9
// which:  undefined
// button: 0 0 0
// button: 1 4 2 (onmouseup)
return button===2?2:button===4?1:0;},buttons:null,relatedTarget:function relatedTarget(event){return event.relatedTarget||(event.fromElement===event.srcElement?event.toElement:event.fromElement);}, // "Proprietary" Interface.
pageX:function pageX(event){return 'pageX' in event?event.pageX:event.clientX+ViewportMetrics.currentScrollLeft;},pageY:function pageY(event){return 'pageY' in event?event.pageY:event.clientY+ViewportMetrics.currentScrollTop;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticMouseEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticMouseEvent,MouseEventInterface);module.exports=SyntheticMouseEvent;},{"./SyntheticUIEvent":106,"./ViewportMetrics":109,"./getEventModifierState":121}],104:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 */'use strict';var SyntheticUIEvent=require('./SyntheticUIEvent');var getEventModifierState=require('./getEventModifierState'); /**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */var TouchEventInterface={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:getEventModifierState}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */function SyntheticTouchEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticUIEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticUIEvent.augmentClass(SyntheticTouchEvent,TouchEventInterface);module.exports=SyntheticTouchEvent;},{"./SyntheticUIEvent":106,"./getEventModifierState":121}],105:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTransitionEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent'); /**
 * @interface Event
 * @see http://www.w3.org/TR/2009/WD-css3-transitions-20090320/#transition-events-
 * @see https://developer.mozilla.org/en-US/docs/Web/API/TransitionEvent
 */var TransitionEventInterface={propertyName:null,elapsedTime:null,pseudoElement:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticTransitionEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticTransitionEvent,TransitionEventInterface);module.exports=SyntheticTransitionEvent;},{"./SyntheticEvent":99}],106:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 */'use strict';var SyntheticEvent=require('./SyntheticEvent');var getEventTarget=require('./getEventTarget'); /**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var UIEventInterface={view:function view(event){if(event.view){return event.view;}var target=getEventTarget(event);if(target!=null&&target.window===target){ // target is a window object
return target;}var doc=target.ownerDocument; // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
if(doc){return doc.defaultView||doc.parentWindow;}else {return window;}},detail:function detail(event){return event.detail||0;}}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */function SyntheticUIEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticEvent.augmentClass(SyntheticUIEvent,UIEventInterface);module.exports=SyntheticUIEvent;},{"./SyntheticEvent":99,"./getEventTarget":122}],107:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 */'use strict';var SyntheticMouseEvent=require('./SyntheticMouseEvent'); /**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */var WheelEventInterface={deltaX:function deltaX(event){return 'deltaX' in event?event.deltaX: // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
'wheelDeltaX' in event?-event.wheelDeltaX:0;},deltaY:function deltaY(event){return 'deltaY' in event?event.deltaY: // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
'wheelDeltaY' in event?-event.wheelDeltaY: // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
'wheelDelta' in event?-event.wheelDelta:0;},deltaZ:null, // Browsers without "deltaMode" is reporting in raw wheel delta where one
// notch on the scroll is always +/- 120, roughly equivalent to pixels.
// A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
// ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
deltaMode:null}; /**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */function SyntheticWheelEvent(dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget){return SyntheticMouseEvent.call(this,dispatchConfig,dispatchMarker,nativeEvent,nativeEventTarget);}SyntheticMouseEvent.augmentClass(SyntheticWheelEvent,WheelEventInterface);module.exports=SyntheticWheelEvent;},{"./SyntheticMouseEvent":103}],108:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */'use strict';var invariant=require('fbjs/lib/invariant'); /**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM updates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */var Mixin={ /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */reinitializeTransaction:function reinitializeTransaction(){this.transactionWrappers=this.getTransactionWrappers();if(this.wrapperInitData){this.wrapperInitData.length=0;}else {this.wrapperInitData=[];}this._isInTransaction=false;},_isInTransaction:false, /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */getTransactionWrappers:null,isInTransaction:function isInTransaction(){return !!this._isInTransaction;}, /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked. The optional arguments helps prevent the need
   * to bind in many cases.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} a Argument to pass to the method.
   * @param {Object?=} b Argument to pass to the method.
   * @param {Object?=} c Argument to pass to the method.
   * @param {Object?=} d Argument to pass to the method.
   * @param {Object?=} e Argument to pass to the method.
   * @param {Object?=} f Argument to pass to the method.
   *
   * @return {*} Return value from `method`.
   */perform:function perform(method,scope,a,b,c,d,e,f){!!this.isInTransaction()?"development"!=='production'?invariant(false,'Transaction.perform(...): Cannot initialize a transaction when there '+'is already an outstanding transaction.'):invariant(false):void 0;var errorThrown;var ret;try{this._isInTransaction=true; // Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// one of these calls threw.
errorThrown=true;this.initializeAll(0);ret=method.call(scope,a,b,c,d,e,f);errorThrown=false;}finally {try{if(errorThrown){ // If `method` throws, prefer to show that stack trace over any thrown
// by invoking `closeAll`.
try{this.closeAll(0);}catch(err){}}else { // Since `method` didn't throw, we don't want to silence the exception
// here.
this.closeAll(0);}}finally {this._isInTransaction=false;}}return ret;},initializeAll:function initializeAll(startIndex){var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i<transactionWrappers.length;i++){var wrapper=transactionWrappers[i];try{ // Catching errors makes debugging more difficult, so we start with the
// OBSERVED_ERROR state before overwriting it with the real return value
// of initialize -- if it's still set to OBSERVED_ERROR in the finally
// block, it means wrapper.initialize threw.
this.wrapperInitData[i]=Transaction.OBSERVED_ERROR;this.wrapperInitData[i]=wrapper.initialize?wrapper.initialize.call(this):null;}finally {if(this.wrapperInitData[i]===Transaction.OBSERVED_ERROR){ // The initializer for wrapper i threw an error; initialize the
// remaining wrappers but silence any exceptions from them to ensure
// that the first error is the one to bubble up.
try{this.initializeAll(i+1);}catch(err){}}}}}, /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */closeAll:function closeAll(startIndex){!this.isInTransaction()?"development"!=='production'?invariant(false,'Transaction.closeAll(): Cannot close transaction when none are open.'):invariant(false):void 0;var transactionWrappers=this.transactionWrappers;for(var i=startIndex;i<transactionWrappers.length;i++){var wrapper=transactionWrappers[i];var initData=this.wrapperInitData[i];var errorThrown;try{ // Catching errors makes debugging more difficult, so we start with
// errorThrown set to true before setting it to false after calling
// close -- if it's still set to true in the finally block, it means
// wrapper.close threw.
errorThrown=true;if(initData!==Transaction.OBSERVED_ERROR&&wrapper.close){wrapper.close.call(this,initData);}errorThrown=false;}finally {if(errorThrown){ // The closer for wrapper i threw an error; close the remaining
// wrappers but silence any exceptions from them to ensure that the
// first error is the one to bubble up.
try{this.closeAll(i+1);}catch(e){}}}}this.wrapperInitData.length=0;}};var Transaction={Mixin:Mixin, /**
   * Token to look for to determine if an error occurred.
   */OBSERVED_ERROR:{}};module.exports=Transaction;},{"fbjs/lib/invariant":154}],109:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */'use strict';var ViewportMetrics={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function refreshScrollValues(scrollPosition){ViewportMetrics.currentScrollLeft=scrollPosition.x;ViewportMetrics.currentScrollTop=scrollPosition.y;}};module.exports=ViewportMetrics;},{}],110:[function(require,module,exports){ /**
 * Copyright 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */'use strict';var invariant=require('fbjs/lib/invariant'); /**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */function accumulateInto(current,next){!(next!=null)?"development"!=='production'?invariant(false,'accumulateInto(...): Accumulated items must not be null or undefined.'):invariant(false):void 0;if(current==null){return next;} // Both are not empty. Warning: Never call x.concat(y) when you are not
// certain that x is an Array (x could be a string with concat method).
var currentIsArray=Array.isArray(current);var nextIsArray=Array.isArray(next);if(currentIsArray&&nextIsArray){current.push.apply(current,next);return current;}if(currentIsArray){current.push(next);return current;}if(nextIsArray){ // A bit too dangerous to mutate `next`.
return [current].concat(next);}return [current,next];}module.exports=accumulateInto;},{"fbjs/lib/invariant":154}],111:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */'use strict';var MOD=65521; // adler32 is not cryptographically strong, and is only used to sanity check that
// markup generated on the server matches the markup generated on the client.
// This implementation (a modified version of the SheetJS version) has been optimized
// for our use case, at the expense of conforming to the adler32 specification
// for non-ascii inputs.
function adler32(data){var a=1;var b=0;var i=0;var l=data.length;var m=l&~0x3;while(i<m){var n=Math.min(i+4096,m);for(;i<n;i+=4){b+=(a+=data.charCodeAt(i))+(a+=data.charCodeAt(i+1))+(a+=data.charCodeAt(i+2))+(a+=data.charCodeAt(i+3));}a%=MOD;b%=MOD;}for(;i<l;i++){b+=a+=data.charCodeAt(i);}a%=MOD;b%=MOD;return a|b<<16;}module.exports=adler32;},{}],112:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule canDefineProperty
 */'use strict';var canDefineProperty=false;if("development"!=='production'){try{Object.defineProperty({},'x',{get:function get(){}});canDefineProperty=true;}catch(x){ // IE will fail on defineProperty
}}module.exports=canDefineProperty;},{}],113:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createMicrosoftUnsafeLocalFunction
 */ /* globals MSApp */'use strict'; /**
 * Create a function which has 'unsafe' privileges (required by windows8 apps)
 */var createMicrosoftUnsafeLocalFunction=function createMicrosoftUnsafeLocalFunction(func){if(typeof MSApp!=='undefined'&&MSApp.execUnsafeLocalFunction){return function(arg0,arg1,arg2,arg3){MSApp.execUnsafeLocalFunction(function(){return func(arg0,arg1,arg2,arg3);});};}else {return func;}};module.exports=createMicrosoftUnsafeLocalFunction;},{}],114:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 */'use strict';var CSSProperty=require('./CSSProperty');var warning=require('fbjs/lib/warning');var isUnitlessNumber=CSSProperty.isUnitlessNumber;var styleWarnings={}; /**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @param {ReactDOMComponent} component
 * @return {string} Normalized style value with dimensions applied.
 */function dangerousStyleValue(name,value,component){ // Note that we've removed escapeTextForBrowser() calls here since the
// whole string will be escaped when the attribute is injected into
// the markup. If you provide unsafe user data here they can inject
// arbitrary CSS which may be problematic (I couldn't repro this):
// https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
// http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
// This is not an XSS hole but instead a potential CSS injection issue
// which has lead to a greater discussion about how we're going to
// trust URLs moving forward. See #2115901
var isEmpty=value==null||typeof value==='boolean'||value==='';if(isEmpty){return '';}var isNonNumeric=isNaN(value);if(isNonNumeric||value===0||isUnitlessNumber.hasOwnProperty(name)&&isUnitlessNumber[name]){return ''+value; // cast to string
}if(typeof value==='string'){if("development"!=='production'){if(component){var owner=component._currentElement._owner;var ownerName=owner?owner.getName():null;if(ownerName&&!styleWarnings[ownerName]){styleWarnings[ownerName]={};}var warned=false;if(ownerName){var warnings=styleWarnings[ownerName];warned=warnings[name];if(!warned){warnings[name]=true;}}if(!warned){"development"!=='production'?warning(false,'a `%s` tag (owner: `%s`) was passed a numeric string value '+'for CSS property `%s` (value: `%s`) which will be treated '+'as a unitless number in a future version of React.',component._currentElement.type,ownerName||'unknown',name,value):void 0;}}}value=value.trim();}return value+'px';}module.exports=dangerousStyleValue;},{"./CSSProperty":6,"fbjs/lib/warning":164}],115:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextContentForBrowser
 */'use strict';var ESCAPE_LOOKUP={'&':'&amp;','>':'&gt;','<':'&lt;','"':'&quot;','\'':'&#x27;'};var ESCAPE_REGEX=/[&><"']/g;function escaper(match){return ESCAPE_LOOKUP[match];} /**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */function escapeTextContentForBrowser(text){return (''+text).replace(ESCAPE_REGEX,escaper);}module.exports=escapeTextContentForBrowser;},{}],116:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 */'use strict';var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactDOMComponentTree=require('./ReactDOMComponentTree');var ReactInstanceMap=require('./ReactInstanceMap');var getNativeComponentFromComposite=require('./getNativeComponentFromComposite');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning'); /**
 * Returns the DOM node rendered by this element.
 *
 * @param {ReactComponent|DOMElement} componentOrElement
 * @return {?DOMElement} The root node of this element.
 */function findDOMNode(componentOrElement){if("development"!=='production'){var owner=ReactCurrentOwner.current;if(owner!==null){"development"!=='production'?warning(owner._warnedAboutRefsInRender,'%s is accessing findDOMNode inside its render(). '+'render() should be a pure function of props and state. It should '+'never access something that requires stale data from the previous '+'render, such as refs. Move this logic to componentDidMount and '+'componentDidUpdate instead.',owner.getName()||'A component'):void 0;owner._warnedAboutRefsInRender=true;}}if(componentOrElement==null){return null;}if(componentOrElement.nodeType===1){return componentOrElement;}var inst=ReactInstanceMap.get(componentOrElement);if(inst){inst=getNativeComponentFromComposite(inst);return inst?ReactDOMComponentTree.getNodeFromInstance(inst):null;}if(typeof componentOrElement.render==='function'){!false?"development"!=='production'?invariant(false,'findDOMNode was called on an unmounted component.'):invariant(false):void 0;}else {!false?"development"!=='production'?invariant(false,'Element appears to be neither ReactComponent nor DOMNode (keys: %s)',Object.keys(componentOrElement)):invariant(false):void 0;}}module.exports=findDOMNode;},{"./ReactCurrentOwner":36,"./ReactDOMComponentTree":41,"./ReactInstanceMap":71,"./getNativeComponentFromComposite":124,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],117:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */'use strict';var traverseAllChildren=require('./traverseAllChildren');var warning=require('fbjs/lib/warning'); /**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 */function flattenSingleChildIntoContext(traverseContext,child,name){ // We found a component instance.
var result=traverseContext;var keyUnique=result[name]===undefined;if("development"!=='production'){"development"!=='production'?warning(keyUnique,'flattenChildren(...): Encountered two children with the same key, '+'`%s`. Child keys must be unique; when two children share a key, only '+'the first child will be used.',name):void 0;}if(keyUnique&&child!=null){result[name]=child;}} /**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */function flattenChildren(children){if(children==null){return children;}var result={};traverseAllChildren(children,flattenSingleChildIntoContext,result);return result;}module.exports=flattenChildren;},{"./traverseAllChildren":137,"fbjs/lib/warning":164}],118:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */'use strict'; /**
 * @param {array} arr an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */var forEachAccumulated=function forEachAccumulated(arr,cb,scope){if(Array.isArray(arr)){arr.forEach(cb,scope);}else if(arr){cb.call(scope,arr);}};module.exports=forEachAccumulated;},{}],119:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 */'use strict'; /**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {number} Normalized `charCode` property.
 */function getEventCharCode(nativeEvent){var charCode;var keyCode=nativeEvent.keyCode;if('charCode' in nativeEvent){charCode=nativeEvent.charCode; // FF does not set `charCode` for the Enter-key, check against `keyCode`.
if(charCode===0&&keyCode===13){charCode=13;}}else { // IE8 does not implement `charCode`, but `keyCode` has the correct value.
charCode=keyCode;} // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
// Must not discard the (non-)printable Enter-key.
if(charCode>=32||charCode===13){return charCode;}return 0;}module.exports=getEventCharCode;},{}],120:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 */'use strict';var getEventCharCode=require('./getEventCharCode'); /**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var normalizeKey={'Esc':'Escape','Spacebar':' ','Left':'ArrowLeft','Up':'ArrowUp','Right':'ArrowRight','Down':'ArrowDown','Del':'Delete','Win':'OS','Menu':'ContextMenu','Apps':'ContextMenu','Scroll':'ScrollLock','MozPrintableKey':'Unidentified'}; /**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */var translateToKey={8:'Backspace',9:'Tab',12:'Clear',13:'Enter',16:'Shift',17:'Control',18:'Alt',19:'Pause',20:'CapsLock',27:'Escape',32:' ',33:'PageUp',34:'PageDown',35:'End',36:'Home',37:'ArrowLeft',38:'ArrowUp',39:'ArrowRight',40:'ArrowDown',45:'Insert',46:'Delete',112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',144:'NumLock',145:'ScrollLock',224:'Meta'}; /**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */function getEventKey(nativeEvent){if(nativeEvent.key){ // Normalize inconsistent values reported by browsers due to
// implementations of a working draft specification.
// FireFox implements `key` but returns `MozPrintableKey` for all
// printable characters (normalized to `Unidentified`), ignore it.
var key=normalizeKey[nativeEvent.key]||nativeEvent.key;if(key!=='Unidentified'){return key;}} // Browser does not implement `key`, polyfill as much of it as we can.
if(nativeEvent.type==='keypress'){var charCode=getEventCharCode(nativeEvent); // The enter-key is technically both printable and non-printable and can
// thus be captured by `keypress`, no other non-printable key should.
return charCode===13?'Enter':String.fromCharCode(charCode);}if(nativeEvent.type==='keydown'||nativeEvent.type==='keyup'){ // While user keyboard layout determines the actual meaning of each
// `keyCode` value, almost all function keys have a universal value.
return translateToKey[nativeEvent.keyCode]||'Unidentified';}return '';}module.exports=getEventKey;},{"./getEventCharCode":119}],121:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 */'use strict'; /**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */var modifierKeyToProp={'Alt':'altKey','Control':'ctrlKey','Meta':'metaKey','Shift':'shiftKey'}; // IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg){var syntheticEvent=this;var nativeEvent=syntheticEvent.nativeEvent;if(nativeEvent.getModifierState){return nativeEvent.getModifierState(keyArg);}var keyProp=modifierKeyToProp[keyArg];return keyProp?!!nativeEvent[keyProp]:false;}function getEventModifierState(nativeEvent){return modifierStateGetter;}module.exports=getEventModifierState;},{}],122:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 */'use strict'; /**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */function getEventTarget(nativeEvent){var target=nativeEvent.target||nativeEvent.srcElement||window; // Normalize SVG <use> element events #4963
if(target.correspondingUseElement){target=target.correspondingUseElement;} // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
// @see http://www.quirksmode.org/js/events_properties.html
return target.nodeType===3?target.parentNode:target;}module.exports=getEventTarget;},{}],123:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 */'use strict'; /* global Symbol */var ITERATOR_SYMBOL=typeof Symbol==='function'&&Symbol.iterator;var FAUX_ITERATOR_SYMBOL='@@iterator'; // Before Symbol spec.
/**
 * Returns the iterator method function contained on the iterable object.
 *
 * Be sure to invoke the function with the iterable as context:
 *
 *     var iteratorFn = getIteratorFn(myIterable);
 *     if (iteratorFn) {
 *       var iterator = iteratorFn.call(myIterable);
 *       ...
 *     }
 *
 * @param {?object} maybeIterable
 * @return {?function}
 */function getIteratorFn(maybeIterable){var iteratorFn=maybeIterable&&(ITERATOR_SYMBOL&&maybeIterable[ITERATOR_SYMBOL]||maybeIterable[FAUX_ITERATOR_SYMBOL]);if(typeof iteratorFn==='function'){return iteratorFn;}}module.exports=getIteratorFn;},{}],124:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNativeComponentFromComposite
 */'use strict';var ReactNodeTypes=require('./ReactNodeTypes');function getNativeComponentFromComposite(inst){var type;while((type=inst._renderedNodeType)===ReactNodeTypes.COMPOSITE){inst=inst._renderedComponent;}if(type===ReactNodeTypes.NATIVE){return inst._renderedComponent;}else if(type===ReactNodeTypes.EMPTY){return null;}}module.exports=getNativeComponentFromComposite;},{"./ReactNodeTypes":79}],125:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */'use strict'; /**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */function getLeafNode(node){while(node&&node.firstChild){node=node.firstChild;}return node;} /**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */function getSiblingNode(node){while(node){if(node.nextSibling){return node.nextSibling;}node=node.parentNode;}} /**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */function getNodeForCharacterOffset(root,offset){var node=getLeafNode(root);var nodeStart=0;var nodeEnd=0;while(node){if(node.nodeType===3){nodeEnd=nodeStart+node.textContent.length;if(nodeStart<=offset&&nodeEnd>=offset){return {node:node,offset:offset-nodeStart};}nodeStart=nodeEnd;}node=getLeafNode(getSiblingNode(node));}}module.exports=getNodeForCharacterOffset;},{}],126:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var contentKey=null; /**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */function getTextContentAccessor(){if(!contentKey&&ExecutionEnvironment.canUseDOM){ // Prefer textContent to innerText because many browsers support both but
// SVG <text> elements don't support innerText even when <div> does.
contentKey='textContent' in document.documentElement?'textContent':'innerText';}return contentKey;}module.exports=getTextContentAccessor;},{"fbjs/lib/ExecutionEnvironment":140}],127:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getVendorPrefixedEventName
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment'); /**
 * Generate a mapping of standard vendor prefixes using the defined style property and event name.
 *
 * @param {string} styleProp
 * @param {string} eventName
 * @returns {object}
 */function makePrefixMap(styleProp,eventName){var prefixes={};prefixes[styleProp.toLowerCase()]=eventName.toLowerCase();prefixes['Webkit'+styleProp]='webkit'+eventName;prefixes['Moz'+styleProp]='moz'+eventName;prefixes['ms'+styleProp]='MS'+eventName;prefixes['O'+styleProp]='o'+eventName.toLowerCase();return prefixes;} /**
 * A list of event names to a configurable list of vendor prefixes.
 */var vendorPrefixes={animationend:makePrefixMap('Animation','AnimationEnd'),animationiteration:makePrefixMap('Animation','AnimationIteration'),animationstart:makePrefixMap('Animation','AnimationStart'),transitionend:makePrefixMap('Transition','TransitionEnd')}; /**
 * Event names that have already been detected and prefixed (if applicable).
 */var prefixedEventNames={}; /**
 * Element to check for prefixes on.
 */var style={}; /**
 * Bootstrap if a DOM exists.
 */if(ExecutionEnvironment.canUseDOM){style=document.createElement('div').style; // On some platforms, in particular some releases of Android 4.x,
// the un-prefixed "animation" and "transition" properties are defined on the
// style object but the events that fire will still be prefixed, so we need
// to check if the un-prefixed events are usable, and if not remove them from the map.
if(!('AnimationEvent' in window)){delete vendorPrefixes.animationend.animation;delete vendorPrefixes.animationiteration.animation;delete vendorPrefixes.animationstart.animation;} // Same as above
if(!('TransitionEvent' in window)){delete vendorPrefixes.transitionend.transition;}} /**
 * Attempts to determine the correct vendor prefixed event name.
 *
 * @param {string} eventName
 * @returns {string}
 */function getVendorPrefixedEventName(eventName){if(prefixedEventNames[eventName]){return prefixedEventNames[eventName];}else if(!vendorPrefixes[eventName]){return eventName;}var prefixMap=vendorPrefixes[eventName];for(var styleProp in prefixMap){if(prefixMap.hasOwnProperty(styleProp)&&styleProp in style){return prefixedEventNames[eventName]=prefixMap[styleProp];}}return '';}module.exports=getVendorPrefixedEventName;},{"fbjs/lib/ExecutionEnvironment":140}],128:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 */'use strict';var _assign=require('object-assign');var ReactCompositeComponent=require('./ReactCompositeComponent');var ReactEmptyComponent=require('./ReactEmptyComponent');var ReactNativeComponent=require('./ReactNativeComponent');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning'); // To avoid a cyclic dependency, we create the final class in this module
var ReactCompositeComponentWrapper=function ReactCompositeComponentWrapper(element){this.construct(element);};_assign(ReactCompositeComponentWrapper.prototype,ReactCompositeComponent.Mixin,{_instantiateReactComponent:instantiateReactComponent});function getDeclarationErrorAddendum(owner){if(owner){var name=owner.getName();if(name){return ' Check the render method of `'+name+'`.';}}return '';} /**
 * Check if the type reference is a known internal type. I.e. not a user
 * provided composite type.
 *
 * @param {function} type
 * @return {boolean} Returns true if this is a valid internal type.
 */function isInternalComponentType(type){return typeof type==='function'&&typeof type.prototype!=='undefined'&&typeof type.prototype.mountComponent==='function'&&typeof type.prototype.receiveComponent==='function';} /**
 * Given a ReactNode, create an instance that will actually be mounted.
 *
 * @param {ReactNode} node
 * @return {object} A new instance of the element's constructor.
 * @protected
 */function instantiateReactComponent(node){var instance;if(node===null||node===false){instance=ReactEmptyComponent.create(instantiateReactComponent);}else if((typeof node==="undefined"?"undefined":_typeof(node))==='object'){var element=node;!(element&&(typeof element.type==='function'||typeof element.type==='string'))?"development"!=='production'?invariant(false,'Element type is invalid: expected a string (for built-in components) '+'or a class/function (for composite components) but got: %s.%s',element.type==null?element.type:_typeof(element.type),getDeclarationErrorAddendum(element._owner)):invariant(false):void 0; // Special case string values
if(typeof element.type==='string'){instance=ReactNativeComponent.createInternalComponent(element);}else if(isInternalComponentType(element.type)){ // This is temporarily available for custom components that are not string
// representations. I.e. ART. Once those are updated to use the string
// representation, we can drop this code path.
instance=new element.type(element);}else {instance=new ReactCompositeComponentWrapper(element);}}else if(typeof node==='string'||typeof node==='number'){instance=ReactNativeComponent.createInstanceForText(node);}else {!false?"development"!=='production'?invariant(false,'Encountered invalid React node of type %s',typeof node==="undefined"?"undefined":_typeof(node)):invariant(false):void 0;}if("development"!=='production'){"development"!=='production'?warning(typeof instance.mountComponent==='function'&&typeof instance.receiveComponent==='function'&&typeof instance.getNativeNode==='function'&&typeof instance.unmountComponent==='function','Only React Components can be mounted.'):void 0;} // These two fields are used by the DOM and ART diffing algorithms
// respectively. Instead of using expandos on components, we should be
// storing the state needed by the diffing algorithms elsewhere.
instance._mountIndex=0;instance._mountImage=null;if("development"!=='production'){instance._isOwnerNecessary=false;instance._warnedAboutRefsInRender=false;} // Internal instances should fully constructed at this point, so they should
// not get any new fields added to them at this point.
if("development"!=='production'){if(Object.preventExtensions){Object.preventExtensions(instance);}}return instance;}module.exports=instantiateReactComponent;},{"./ReactCompositeComponent":35,"./ReactEmptyComponent":64,"./ReactNativeComponent":78,"fbjs/lib/invariant":154,"fbjs/lib/warning":164,"object-assign":165}],129:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var useHasFeature;if(ExecutionEnvironment.canUseDOM){useHasFeature=document.implementation&&document.implementation.hasFeature&& // always returns true in newer browsers as per the standard.
// @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
document.implementation.hasFeature('','')!==true;} /**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */function isEventSupported(eventNameSuffix,capture){if(!ExecutionEnvironment.canUseDOM||capture&&!('addEventListener' in document)){return false;}var eventName='on'+eventNameSuffix;var isSupported=eventName in document;if(!isSupported){var element=document.createElement('div');element.setAttribute(eventName,'return;');isSupported=typeof element[eventName]==='function';}if(!isSupported&&useHasFeature&&eventNameSuffix==='wheel'){ // This is the only way to test support for the `wheel` event in IE9+.
isSupported=document.implementation.hasFeature('Events.wheel','3.0');}return isSupported;}module.exports=isEventSupported;},{"fbjs/lib/ExecutionEnvironment":140}],130:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */'use strict'; /**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */var supportedInputTypes={'color':true,'date':true,'datetime':true,'datetime-local':true,'email':true,'month':true,'number':true,'password':true,'range':true,'search':true,'tel':true,'text':true,'time':true,'url':true,'week':true};function isTextInputElement(elem){var nodeName=elem&&elem.nodeName&&elem.nodeName.toLowerCase();return nodeName&&(nodeName==='input'&&supportedInputTypes[elem.type]||nodeName==='textarea');}module.exports=isTextInputElement;},{}],131:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */'use strict';var ReactElement=require('./ReactElement');var invariant=require('fbjs/lib/invariant'); /**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection. The current implementation of this
 * function assumes that a single child gets passed without a wrapper, but the
 * purpose of this helper function is to abstract away the particular structure
 * of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactComponent} The first and only `ReactComponent` contained in the
 * structure.
 */function onlyChild(children){!ReactElement.isValidElement(children)?"development"!=='production'?invariant(false,'onlyChild must be passed a children with exactly one child.'):invariant(false):void 0;return children;}module.exports=onlyChild;},{"./ReactElement":62,"fbjs/lib/invariant":154}],132:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */'use strict';var escapeTextContentForBrowser=require('./escapeTextContentForBrowser'); /**
 * Escapes attribute value to prevent scripting attacks.
 *
 * @param {*} value Value to escape.
 * @return {string} An escaped string.
 */function quoteAttributeValueForBrowser(value){return '"'+escapeTextContentForBrowser(value)+'"';}module.exports=quoteAttributeValueForBrowser;},{"./escapeTextContentForBrowser":115}],133:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule renderSubtreeIntoContainer
*/'use strict';var ReactMount=require('./ReactMount');module.exports=ReactMount.renderSubtreeIntoContainer;},{"./ReactMount":75}],134:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var WHITESPACE_TEST=/^[ \r\n\t\f]/;var NONVISIBLE_TEST=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;var createMicrosoftUnsafeLocalFunction=require('./createMicrosoftUnsafeLocalFunction'); /**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */var setInnerHTML=createMicrosoftUnsafeLocalFunction(function(node,html){node.innerHTML=html;});if(ExecutionEnvironment.canUseDOM){ // IE8: When updating a just created node with innerHTML only leading
// whitespace is removed. When updating an existing node with innerHTML
// whitespace in root TextNodes is also collapsed.
// @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html
// Feature detection; only IE8 is known to behave improperly like this.
var testElement=document.createElement('div');testElement.innerHTML=' ';if(testElement.innerHTML===''){setInnerHTML=function setInnerHTML(node,html){ // Magic theory: IE8 supposedly differentiates between added and updated
// nodes when processing innerHTML, innerHTML on updated nodes suffers
// from worse whitespace behavior. Re-adding a node like this triggers
// the initial and more favorable whitespace behavior.
// TODO: What to do on a detached node?
if(node.parentNode){node.parentNode.replaceChild(node,node);} // We also implement a workaround for non-visible tags disappearing into
// thin air on IE8, this only happens if there is no visible text
// in-front of the non-visible tags. Piggyback on the whitespace fix
// and simply check if any non-visible tags appear in the source.
if(WHITESPACE_TEST.test(html)||html[0]==='<'&&NONVISIBLE_TEST.test(html)){ // Recover leading whitespace by temporarily prepending any character.
// \uFEFF has the potential advantage of being zero-width/invisible.
// UglifyJS drops U+FEFF chars when parsing, so use String.fromCharCode
// in hopes that this is preserved even if "\uFEFF" is transformed to
// the actual Unicode character (by Babel, for example).
// https://github.com/mishoo/UglifyJS2/blob/v2.4.20/lib/parse.js#L216
node.innerHTML=String.fromCharCode(0xFEFF)+html; // deleteData leaves an empty `TextNode` which offsets the index of all
// children. Definitely want to avoid this.
var textNode=node.firstChild;if(textNode.data.length===1){node.removeChild(textNode);}else {textNode.deleteData(0,1);}}else {node.innerHTML=html;}};}testElement=null;}module.exports=setInnerHTML;},{"./createMicrosoftUnsafeLocalFunction":113,"fbjs/lib/ExecutionEnvironment":140}],135:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */'use strict';var ExecutionEnvironment=require('fbjs/lib/ExecutionEnvironment');var escapeTextContentForBrowser=require('./escapeTextContentForBrowser');var setInnerHTML=require('./setInnerHTML'); /**
 * Set the textContent property of a node, ensuring that whitespace is preserved
 * even in IE8. innerText is a poor substitute for textContent and, among many
 * issues, inserts <br> instead of the literal newline chars. innerHTML behaves
 * as it should.
 *
 * @param {DOMElement} node
 * @param {string} text
 * @internal
 */var setTextContent=function setTextContent(node,text){node.textContent=text;};if(ExecutionEnvironment.canUseDOM){if(!('textContent' in document.documentElement)){setTextContent=function setTextContent(node,text){setInnerHTML(node,escapeTextContentForBrowser(text));};}}module.exports=setTextContent;},{"./escapeTextContentForBrowser":115,"./setInnerHTML":134,"fbjs/lib/ExecutionEnvironment":140}],136:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 */'use strict'; /**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */function shouldUpdateReactComponent(prevElement,nextElement){var prevEmpty=prevElement===null||prevElement===false;var nextEmpty=nextElement===null||nextElement===false;if(prevEmpty||nextEmpty){return prevEmpty===nextEmpty;}var prevType=typeof prevElement==="undefined"?"undefined":_typeof(prevElement);var nextType=typeof nextElement==="undefined"?"undefined":_typeof(nextElement);if(prevType==='string'||prevType==='number'){return nextType==='string'||nextType==='number';}else {return nextType==='object'&&prevElement.type===nextElement.type&&prevElement.key===nextElement.key;}}module.exports=shouldUpdateReactComponent;},{}],137:[function(require,module,exports){ /**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */'use strict';var ReactCurrentOwner=require('./ReactCurrentOwner');var ReactElement=require('./ReactElement');var getIteratorFn=require('./getIteratorFn');var invariant=require('fbjs/lib/invariant');var warning=require('fbjs/lib/warning');var SEPARATOR='.';var SUBSEPARATOR=':'; /**
 * TODO: Test that a single child and an array with one item have the same key
 * pattern.
 */var userProvidedKeyEscaperLookup={'=':'=0',':':'=2'};var userProvidedKeyEscapeRegex=/[=:]/g;var didWarnAboutMaps=false;function userProvidedKeyEscaper(match){return userProvidedKeyEscaperLookup[match];} /**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */function getComponentKey(component,index){ // Do some typechecking here since we call this blindly. We want to ensure
// that we don't block potential future ES APIs.
if(component&&(typeof component==="undefined"?"undefined":_typeof(component))==='object'&&component.key!=null){ // Explicit key
return wrapUserProvidedKey(component.key);} // Implicit key determined by the index in the set
return index.toString(36);} /**
 * Escape a component key so that it is safe to use in a reactid.
 *
 * @param {*} text Component key to be escaped.
 * @return {string} An escaped string.
 */function escapeUserProvidedKey(text){return (''+text).replace(userProvidedKeyEscapeRegex,userProvidedKeyEscaper);} /**
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 *
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */function wrapUserProvidedKey(key){return '$'+escapeUserProvidedKey(key);} /**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildrenImpl(children,nameSoFar,callback,traverseContext){var type=typeof children==="undefined"?"undefined":_typeof(children);if(type==='undefined'||type==='boolean'){ // All of the above are perceived as null.
children=null;}if(children===null||type==='string'||type==='number'||ReactElement.isValidElement(children)){callback(traverseContext,children, // If it's the only child, treat the name as if it was wrapped in an array
// so that it's consistent if the number of children grows.
nameSoFar===''?SEPARATOR+getComponentKey(children,0):nameSoFar);return 1;}var child;var nextName;var subtreeCount=0; // Count of children found in the current subtree.
var nextNamePrefix=nameSoFar===''?SEPARATOR:nameSoFar+SUBSEPARATOR;if(Array.isArray(children)){for(var i=0;i<children.length;i++){child=children[i];nextName=nextNamePrefix+getComponentKey(child,i);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else {var iteratorFn=getIteratorFn(children);if(iteratorFn){var iterator=iteratorFn.call(children);var step;if(iteratorFn!==children.entries){var ii=0;while(!(step=iterator.next()).done){child=step.value;nextName=nextNamePrefix+getComponentKey(child,ii++);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}else {if("development"!=='production'){"development"!=='production'?warning(didWarnAboutMaps,'Using Maps as children is not yet fully supported. It is an '+'experimental feature that might be removed. Convert it to a '+'sequence / iterable of keyed ReactElements instead.'):void 0;didWarnAboutMaps=true;} // Iterator will provide entry [k,v] tuples rather than values.
while(!(step=iterator.next()).done){var entry=step.value;if(entry){child=entry[1];nextName=nextNamePrefix+wrapUserProvidedKey(entry[0])+SUBSEPARATOR+getComponentKey(child,0);subtreeCount+=traverseAllChildrenImpl(child,nextName,callback,traverseContext);}}}}else if(type==='object'){var addendum='';if("development"!=='production'){addendum=' If you meant to render a collection of children, use an array '+'instead or wrap the object using createFragment(object) from the '+'React add-ons.';if(children._isReactElement){addendum=' It looks like you\'re using an element created by a different '+'version of React. Make sure to use only one copy of React.';}if(ReactCurrentOwner.current){var name=ReactCurrentOwner.current.getName();if(name){addendum+=' Check the render method of `'+name+'`.';}}}var childrenString=String(children);!false?"development"!=='production'?invariant(false,'Objects are not valid as a React child (found: %s).%s',childrenString==='[object Object]'?'object with keys {'+Object.keys(children).join(', ')+'}':childrenString,addendum):invariant(false):void 0;}}return subtreeCount;} /**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */function traverseAllChildren(children,callback,traverseContext){if(children==null){return 0;}return traverseAllChildrenImpl(children,'',callback,traverseContext);}module.exports=traverseAllChildren;},{"./ReactCurrentOwner":36,"./ReactElement":62,"./getIteratorFn":123,"fbjs/lib/invariant":154,"fbjs/lib/warning":164}],138:[function(require,module,exports){ /**
 * Copyright 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule validateDOMNesting
 */'use strict';var _assign=require('object-assign');var emptyFunction=require('fbjs/lib/emptyFunction');var warning=require('fbjs/lib/warning');var validateDOMNesting=emptyFunction;if("development"!=='production'){ // This validation code was written based on the HTML5 parsing spec:
// https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
//
// Note: this does not catch all invalid nesting, nor does it try to (as it's
// not clear what practical benefit doing so provides); instead, we warn only
// for cases where the parser will give a parse tree differing from what React
// intended. For example, <b><div></div></b> is invalid but we don't warn
// because it still parses correctly; we do warn for other cases like nested
// <p> tags where the beginning of the second element implicitly closes the
// first, causing a confusing mess.
// https://html.spec.whatwg.org/multipage/syntax.html#special
var specialTags=['address','applet','area','article','aside','base','basefont','bgsound','blockquote','body','br','button','caption','center','col','colgroup','dd','details','dir','div','dl','dt','embed','fieldset','figcaption','figure','footer','form','frame','frameset','h1','h2','h3','h4','h5','h6','head','header','hgroup','hr','html','iframe','img','input','isindex','li','link','listing','main','marquee','menu','menuitem','meta','nav','noembed','noframes','noscript','object','ol','p','param','plaintext','pre','script','section','select','source','style','summary','table','tbody','td','template','textarea','tfoot','th','thead','title','tr','track','ul','wbr','xmp']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-scope
var inScopeTags=['applet','caption','html','table','td','th','marquee','object','template', // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
// TODO: Distinguish by namespace here -- for <title>, including it here
// errs on the side of fewer warnings
'foreignObject','desc','title']; // https://html.spec.whatwg.org/multipage/syntax.html#has-an-element-in-button-scope
var buttonScopeTags=inScopeTags.concat(['button']); // https://html.spec.whatwg.org/multipage/syntax.html#generate-implied-end-tags
var impliedEndTags=['dd','dt','li','option','optgroup','p','rp','rt'];var emptyAncestorInfo={current:null,formTag:null,aTagInScope:null,buttonTagInScope:null,nobrTagInScope:null,pTagInButtonScope:null,listItemTagAutoclosing:null,dlItemTagAutoclosing:null};var updatedAncestorInfo=function updatedAncestorInfo(oldInfo,tag,instance){var ancestorInfo=_assign({},oldInfo||emptyAncestorInfo);var info={tag:tag,instance:instance};if(inScopeTags.indexOf(tag)!==-1){ancestorInfo.aTagInScope=null;ancestorInfo.buttonTagInScope=null;ancestorInfo.nobrTagInScope=null;}if(buttonScopeTags.indexOf(tag)!==-1){ancestorInfo.pTagInButtonScope=null;} // See rules for 'li', 'dd', 'dt' start tags in
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
if(specialTags.indexOf(tag)!==-1&&tag!=='address'&&tag!=='div'&&tag!=='p'){ancestorInfo.listItemTagAutoclosing=null;ancestorInfo.dlItemTagAutoclosing=null;}ancestorInfo.current=info;if(tag==='form'){ancestorInfo.formTag=info;}if(tag==='a'){ancestorInfo.aTagInScope=info;}if(tag==='button'){ancestorInfo.buttonTagInScope=info;}if(tag==='nobr'){ancestorInfo.nobrTagInScope=info;}if(tag==='p'){ancestorInfo.pTagInButtonScope=info;}if(tag==='li'){ancestorInfo.listItemTagAutoclosing=info;}if(tag==='dd'||tag==='dt'){ancestorInfo.dlItemTagAutoclosing=info;}return ancestorInfo;}; /**
   * Returns whether
   */var isTagValidWithParent=function isTagValidWithParent(tag,parentTag){ // First, let's check if we're in an unusual parsing mode...
switch(parentTag){ // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inselect
case 'select':return tag==='option'||tag==='optgroup'||tag==='#text';case 'optgroup':return tag==='option'||tag==='#text'; // Strictly speaking, seeing an <option> doesn't mean we're in a <select>
// but
case 'option':return tag==='#text'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intd
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incaption
// No special behavior since these rules fall back to "in body" mode for
// all except special table nodes which cause bad parsing behavior anyway.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intr
case 'tr':return tag==='th'||tag==='td'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intbody
case 'tbody':case 'thead':case 'tfoot':return tag==='tr'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-incolgroup
case 'colgroup':return tag==='col'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-intable
case 'table':return tag==='caption'||tag==='colgroup'||tag==='tbody'||tag==='tfoot'||tag==='thead'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inhead
case 'head':return tag==='base'||tag==='basefont'||tag==='bgsound'||tag==='link'||tag==='meta'||tag==='title'||tag==='noscript'||tag==='noframes'||tag==='style'||tag==='script'||tag==='template'; // https://html.spec.whatwg.org/multipage/semantics.html#the-html-element
case 'html':return tag==='head'||tag==='body';case '#document':return tag==='html';} // Probably in the "in body" parsing mode, so we outlaw only tag combos
// where the parsing rules cause implicit opens or closes to be added.
// https://html.spec.whatwg.org/multipage/syntax.html#parsing-main-inbody
switch(tag){case 'h1':case 'h2':case 'h3':case 'h4':case 'h5':case 'h6':return parentTag!=='h1'&&parentTag!=='h2'&&parentTag!=='h3'&&parentTag!=='h4'&&parentTag!=='h5'&&parentTag!=='h6';case 'rp':case 'rt':return impliedEndTags.indexOf(parentTag)===-1;case 'caption':case 'col':case 'colgroup':case 'frame':case 'head':case 'html':case 'tbody':case 'td':case 'tfoot':case 'th':case 'thead':case 'tr': // These tags are only valid with a few parents that have special child
// parsing rules -- if we're down here, then none of those matched and
// so we allow it only if we don't know what the parent is, as all other
// cases are invalid.
return parentTag==null;}return true;}; /**
   * Returns whether
   */var findInvalidAncestorForTag=function findInvalidAncestorForTag(tag,ancestorInfo){switch(tag){case 'address':case 'article':case 'aside':case 'blockquote':case 'center':case 'details':case 'dialog':case 'dir':case 'div':case 'dl':case 'fieldset':case 'figcaption':case 'figure':case 'footer':case 'header':case 'hgroup':case 'main':case 'menu':case 'nav':case 'ol':case 'p':case 'section':case 'summary':case 'ul':case 'pre':case 'listing':case 'table':case 'hr':case 'xmp':case 'h1':case 'h2':case 'h3':case 'h4':case 'h5':case 'h6':return ancestorInfo.pTagInButtonScope;case 'form':return ancestorInfo.formTag||ancestorInfo.pTagInButtonScope;case 'li':return ancestorInfo.listItemTagAutoclosing;case 'dd':case 'dt':return ancestorInfo.dlItemTagAutoclosing;case 'button':return ancestorInfo.buttonTagInScope;case 'a': // Spec says something about storing a list of markers, but it sounds
// equivalent to this check.
return ancestorInfo.aTagInScope;case 'nobr':return ancestorInfo.nobrTagInScope;}return null;}; /**
   * Given a ReactCompositeComponent instance, return a list of its recursive
   * owners, starting at the root and ending with the instance itself.
   */var findOwnerStack=function findOwnerStack(instance){if(!instance){return [];}var stack=[];do {stack.push(instance);}while(instance=instance._currentElement._owner);stack.reverse();return stack;};var didWarn={};validateDOMNesting=function validateDOMNesting(childTag,childInstance,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;var invalidParent=isTagValidWithParent(childTag,parentTag)?null:parentInfo;var invalidAncestor=invalidParent?null:findInvalidAncestorForTag(childTag,ancestorInfo);var problematic=invalidParent||invalidAncestor;if(problematic){var ancestorTag=problematic.tag;var ancestorInstance=problematic.instance;var childOwner=childInstance&&childInstance._currentElement._owner;var ancestorOwner=ancestorInstance&&ancestorInstance._currentElement._owner;var childOwners=findOwnerStack(childOwner);var ancestorOwners=findOwnerStack(ancestorOwner);var minStackLen=Math.min(childOwners.length,ancestorOwners.length);var i;var deepestCommon=-1;for(i=0;i<minStackLen;i++){if(childOwners[i]===ancestorOwners[i]){deepestCommon=i;}else {break;}}var UNKNOWN='(unknown)';var childOwnerNames=childOwners.slice(deepestCommon+1).map(function(inst){return inst.getName()||UNKNOWN;});var ancestorOwnerNames=ancestorOwners.slice(deepestCommon+1).map(function(inst){return inst.getName()||UNKNOWN;});var ownerInfo=[].concat( // If the parent and child instances have a common owner ancestor, start
// with that -- otherwise we just start with the parent's owners.
deepestCommon!==-1?childOwners[deepestCommon].getName()||UNKNOWN:[],ancestorOwnerNames,ancestorTag, // If we're warning about an invalid (non-parent) ancestry, add '...'
invalidAncestor?['...']:[],childOwnerNames,childTag).join(' > ');var warnKey=!!invalidParent+'|'+childTag+'|'+ancestorTag+'|'+ownerInfo;if(didWarn[warnKey]){return;}didWarn[warnKey]=true;var tagDisplayName=childTag;if(childTag!=='#text'){tagDisplayName='<'+childTag+'>';}if(invalidParent){var info='';if(ancestorTag==='table'&&childTag==='tr'){info+=' Add a <tbody> to your code to match the DOM tree generated by '+'the browser.';}"development"!=='production'?warning(false,'validateDOMNesting(...): %s cannot appear as a child of <%s>. '+'See %s.%s',tagDisplayName,ancestorTag,ownerInfo,info):void 0;}else {"development"!=='production'?warning(false,'validateDOMNesting(...): %s cannot appear as a descendant of '+'<%s>. See %s.',tagDisplayName,ancestorTag,ownerInfo):void 0;}}};validateDOMNesting.updatedAncestorInfo=updatedAncestorInfo; // For testing
validateDOMNesting.isTagValidInContext=function(tag,ancestorInfo){ancestorInfo=ancestorInfo||emptyAncestorInfo;var parentInfo=ancestorInfo.current;var parentTag=parentInfo&&parentInfo.tag;return isTagValidWithParent(tag,parentTag)&&!findInvalidAncestorForTag(tag,ancestorInfo);};}module.exports=validateDOMNesting;},{"fbjs/lib/emptyFunction":146,"fbjs/lib/warning":164,"object-assign":165}],139:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @typechecks
 */var emptyFunction=require('./emptyFunction'); /**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */var EventListener={ /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */listen:function listen(target,eventType,callback){if(target.addEventListener){target.addEventListener(eventType,callback,false);return {remove:function remove(){target.removeEventListener(eventType,callback,false);}};}else if(target.attachEvent){target.attachEvent('on'+eventType,callback);return {remove:function remove(){target.detachEvent('on'+eventType,callback);}};}}, /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */capture:function capture(target,eventType,callback){if(target.addEventListener){target.addEventListener(eventType,callback,true);return {remove:function remove(){target.removeEventListener(eventType,callback,true);}};}else {if("development"!=='production'){console.error('Attempted to listen to events during the capture phase on a '+'browser that does not support the capture phase. Your application '+'will not receive some events.');}return {remove:emptyFunction};}},registerDefault:function registerDefault(){}};module.exports=EventListener;},{"./emptyFunction":146}],140:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';var canUseDOM=!!(typeof window!=='undefined'&&window.document&&window.document.createElement); /**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */var ExecutionEnvironment={canUseDOM:canUseDOM,canUseWorkers:typeof Worker!=='undefined',canUseEventListeners:canUseDOM&&!!(window.addEventListener||window.attachEvent),canUseViewport:canUseDOM&&!!window.screen,isInWorker:!canUseDOM // For now, this is true - might change in the future.
};module.exports=ExecutionEnvironment;},{}],141:[function(require,module,exports){"use strict"; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var _hyphenPattern=/-(.)/g; /**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */function camelize(string){return string.replace(_hyphenPattern,function(_,character){return character.toUpperCase();});}module.exports=camelize;},{}],142:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict';var camelize=require('./camelize');var msPattern=/^-ms-/; /**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */function camelizeStyleName(string){return camelize(string.replace(msPattern,'ms-'));}module.exports=camelizeStyleName;},{"./camelize":141}],143:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var isTextNode=require('./isTextNode'); /*eslint-disable no-bitwise */ /**
 * Checks if a given DOM node contains or is another DOM node.
 *
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */function containsNode(outerNode,innerNode){if(!outerNode||!innerNode){return false;}else if(outerNode===innerNode){return true;}else if(isTextNode(outerNode)){return false;}else if(isTextNode(innerNode)){return containsNode(outerNode,innerNode.parentNode);}else if(outerNode.contains){return outerNode.contains(innerNode);}else if(outerNode.compareDocumentPosition){return !!(outerNode.compareDocumentPosition(innerNode)&16);}else {return false;}}module.exports=containsNode;},{"./isTextNode":156}],144:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var invariant=require('./invariant'); /**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFromMixed.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */function toArray(obj){var length=obj.length; // Some browsers builtin objects can report typeof 'function' (e.g. NodeList
// in old versions of Safari).
!(!Array.isArray(obj)&&((typeof obj==="undefined"?"undefined":_typeof(obj))==='object'||typeof obj==='function'))?"development"!=='production'?invariant(false,'toArray: Array-like object expected'):invariant(false):void 0;!(typeof length==='number')?"development"!=='production'?invariant(false,'toArray: Object needs a length property'):invariant(false):void 0;!(length===0||length-1 in obj)?"development"!=='production'?invariant(false,'toArray: Object should have keys for indices'):invariant(false):void 0;!(typeof obj.callee!=='function')?"development"!=='production'?invariant(false,'toArray: Object can\'t be `arguments`. Use rest params '+'(function(...args) {}) or Array.from() instead.'):invariant(false):void 0; // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
// without method will throw during the slice call and skip straight to the
// fallback.
if(obj.hasOwnProperty){try{return Array.prototype.slice.call(obj);}catch(e){ // IE < 9 does not support Array#slice on collections objects
}} // Fall back to copying key by key. This assumes all keys have a value,
// so will not preserve sparsely populated inputs.
var ret=Array(length);for(var ii=0;ii<length;ii++){ret[ii]=obj[ii];}return ret;} /**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */function hasArrayNature(obj){return  (// not null/false
!!obj&&( // arrays are objects, NodeLists are functions in Safari
(typeof obj==="undefined"?"undefined":_typeof(obj))=='object'||typeof obj=='function')&& // quacks like an array
'length' in obj&& // not window
!('setInterval' in obj)&& // no DOM node should be considered an array-like
// a 'select' element has 'length' and 'item' properties on IE8
typeof obj.nodeType!='number'&&( // a real array
Array.isArray(obj)|| // arguments
'callee' in obj|| // HTMLCollection/NodeList
'item' in obj));} /**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFromMixed = require('createArrayFromMixed');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFromMixed(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */function createArrayFromMixed(obj){if(!hasArrayNature(obj)){return [obj];}else if(Array.isArray(obj)){return obj.slice();}else {return toArray(obj);}}module.exports=createArrayFromMixed;},{"./invariant":154}],145:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */ /*eslint-disable fb-www/unsafe-html*/var ExecutionEnvironment=require('./ExecutionEnvironment');var createArrayFromMixed=require('./createArrayFromMixed');var getMarkupWrap=require('./getMarkupWrap');var invariant=require('./invariant'); /**
 * Dummy container used to render all markup.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null; /**
 * Pattern used by `getNodeName`.
 */var nodeNamePattern=/^\s*<(\w+)/; /**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */function getNodeName(markup){var nodeNameMatch=markup.match(nodeNamePattern);return nodeNameMatch&&nodeNameMatch[1].toLowerCase();} /**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */function createNodesFromMarkup(markup,handleScript){var node=dummyNode;!!!dummyNode?"development"!=='production'?invariant(false,'createNodesFromMarkup dummy not initialized'):invariant(false):void 0;var nodeName=getNodeName(markup);var wrap=nodeName&&getMarkupWrap(nodeName);if(wrap){node.innerHTML=wrap[1]+markup+wrap[2];var wrapDepth=wrap[0];while(wrapDepth--){node=node.lastChild;}}else {node.innerHTML=markup;}var scripts=node.getElementsByTagName('script');if(scripts.length){!handleScript?"development"!=='production'?invariant(false,'createNodesFromMarkup(...): Unexpected <script> element rendered.'):invariant(false):void 0;createArrayFromMixed(scripts).forEach(handleScript);}var nodes=Array.from(node.childNodes);while(node.lastChild){node.removeChild(node.lastChild);}return nodes;}module.exports=createNodesFromMarkup;},{"./ExecutionEnvironment":140,"./createArrayFromMixed":144,"./getMarkupWrap":150,"./invariant":154}],146:[function(require,module,exports){"use strict"; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */function makeEmptyFunction(arg){return function(){return arg;};} /**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */function emptyFunction(){}emptyFunction.thatReturns=makeEmptyFunction;emptyFunction.thatReturnsFalse=makeEmptyFunction(false);emptyFunction.thatReturnsTrue=makeEmptyFunction(true);emptyFunction.thatReturnsNull=makeEmptyFunction(null);emptyFunction.thatReturnsThis=function(){return this;};emptyFunction.thatReturnsArgument=function(arg){return arg;};module.exports=emptyFunction;},{}],147:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';var emptyObject={};if("development"!=='production'){Object.freeze(emptyObject);}module.exports=emptyObject;},{}],148:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict'; /**
 * @param {DOMElement} node input/textarea to focus
 */function focusNode(node){ // IE8 can throw "Can't move focus to the control because it is invisible,
// not enabled, or of a type that does not accept the focus." for all kinds of
// reasons that are too expensive and fragile to test.
try{node.focus();}catch(e){}}module.exports=focusNode;},{}],149:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */ /* eslint-disable fb-www/typeof-undefined */ /**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document or document body is not
 * yet defined.
 */function getActiveElement() /*?DOMElement*/{if(typeof document==='undefined'){return null;}try{return document.activeElement||document.body;}catch(e){return document.body;}}module.exports=getActiveElement;},{}],150:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ /*eslint-disable fb-www/unsafe-html */var ExecutionEnvironment=require('./ExecutionEnvironment');var invariant=require('./invariant'); /**
 * Dummy container used to detect which wraps are necessary.
 */var dummyNode=ExecutionEnvironment.canUseDOM?document.createElement('div'):null; /**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */var shouldWrap={};var selectWrap=[1,'<select multiple="true">','</select>'];var tableWrap=[1,'<table>','</table>'];var trWrap=[3,'<table><tbody><tr>','</tr></tbody></table>'];var svgWrap=[1,'<svg xmlns="http://www.w3.org/2000/svg">','</svg>'];var markupWrap={'*':[1,'?<div>','</div>'],'area':[1,'<map>','</map>'],'col':[2,'<table><tbody></tbody><colgroup>','</colgroup></table>'],'legend':[1,'<fieldset>','</fieldset>'],'param':[1,'<object>','</object>'],'tr':[2,'<table><tbody>','</tbody></table>'],'optgroup':selectWrap,'option':selectWrap,'caption':tableWrap,'colgroup':tableWrap,'tbody':tableWrap,'tfoot':tableWrap,'thead':tableWrap,'td':trWrap,'th':trWrap}; // Initialize the SVG elements since we know they'll always need to be wrapped
// consistently. If they are created inside a <div> they will be initialized in
// the wrong namespace (and will not display).
var svgElements=['circle','clipPath','defs','ellipse','g','image','line','linearGradient','mask','path','pattern','polygon','polyline','radialGradient','rect','stop','text','tspan'];svgElements.forEach(function(nodeName){markupWrap[nodeName]=svgWrap;shouldWrap[nodeName]=true;}); /**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */function getMarkupWrap(nodeName){!!!dummyNode?"development"!=='production'?invariant(false,'Markup wrapping node not initialized'):invariant(false):void 0;if(!markupWrap.hasOwnProperty(nodeName)){nodeName='*';}if(!shouldWrap.hasOwnProperty(nodeName)){if(nodeName==='*'){dummyNode.innerHTML='<link />';}else {dummyNode.innerHTML='<'+nodeName+'></'+nodeName+'>';}shouldWrap[nodeName]=!dummyNode.firstChild;}return shouldWrap[nodeName]?markupWrap[nodeName]:null;}module.exports=getMarkupWrap;},{"./ExecutionEnvironment":140,"./invariant":154}],151:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict'; /**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */function getUnboundedScrollPosition(scrollable){if(scrollable===window){return {x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop};}return {x:scrollable.scrollLeft,y:scrollable.scrollTop};}module.exports=getUnboundedScrollPosition;},{}],152:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var _uppercasePattern=/([A-Z])/g; /**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenate(string){return string.replace(_uppercasePattern,'-$1').toLowerCase();}module.exports=hyphenate;},{}],153:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict';var hyphenate=require('./hyphenate');var msPattern=/^ms-/; /**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */function hyphenateStyleName(string){return hyphenate(string).replace(msPattern,'-ms-');}module.exports=hyphenateStyleName;},{"./hyphenate":152}],154:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict'; /**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */function invariant(condition,format,a,b,c,d,e,f){if("development"!=='production'){if(format===undefined){throw new Error('invariant requires an error message argument');}}if(!condition){var error;if(format===undefined){error=new Error('Minified exception occurred; use the non-minified dev environment '+'for the full error message and additional helpful warnings.');}else {var args=[a,b,c,d,e,f];var argIndex=0;error=new Error(format.replace(/%s/g,function(){return args[argIndex++];}));error.name='Invariant Violation';}error.framesToPop=1; // we don't care about invariant's own frame
throw error;}}module.exports=invariant;},{}],155:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */ /**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */function isNode(object){return !!(object&&(typeof Node==='function'?object instanceof Node:(typeof object==="undefined"?"undefined":_typeof(object))==='object'&&typeof object.nodeType==='number'&&typeof object.nodeName==='string'));}module.exports=isNode;},{}],156:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var isNode=require('./isNode'); /**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */function isTextNode(object){return isNode(object)&&object.nodeType==3;}module.exports=isTextNode;},{"./isNode":155}],157:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */'use strict';var invariant=require('./invariant'); /**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */var keyMirror=function keyMirror(obj){var ret={};var key;!(obj instanceof Object&&!Array.isArray(obj))?"development"!=='production'?invariant(false,'keyMirror(...): Argument must be an object.'):invariant(false):void 0;for(key in obj){if(!obj.hasOwnProperty(key)){continue;}ret[key]=key;}return ret;};module.exports=keyMirror;},{"./invariant":154}],158:[function(require,module,exports){"use strict"; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */ /**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without losing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */var keyOf=function keyOf(oneKeyObj){var key;for(key in oneKeyObj){if(!oneKeyObj.hasOwnProperty(key)){continue;}return key;}return null;};module.exports=keyOf;},{}],159:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty; /**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */function mapObject(object,callback,context){if(!object){return null;}var result={};for(var name in object){if(hasOwnProperty.call(object,name)){result[name]=callback.call(context,object[name],name,object);}}return result;}module.exports=mapObject;},{}],160:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 */'use strict'; /**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */function memoizeStringOnly(callback){var cache={};return function(string){if(!cache.hasOwnProperty(string)){cache[string]=callback.call(this,string);}return cache[string];};}module.exports=memoizeStringOnly;},{}],161:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */'use strict';var ExecutionEnvironment=require('./ExecutionEnvironment');var performance;if(ExecutionEnvironment.canUseDOM){performance=window.performance||window.msPerformance||window.webkitPerformance;}module.exports=performance||{};},{"./ExecutionEnvironment":140}],162:[function(require,module,exports){'use strict'; /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 */var performance=require('./performance');var performanceNow; /**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */if(performance.now){performanceNow=function performanceNow(){return performance.now();};}else {performanceNow=function performanceNow(){return Date.now();};}module.exports=performanceNow;},{"./performance":161}],163:[function(require,module,exports){ /**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * 
 */ /*eslint-disable no-self-compare */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty; /**
 * inlined Object.is polyfill to avoid requiring consumers ship their own
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
 */function is(x,y){ // SameValue algorithm
if(x===y){ // Steps 1-5, 7-10
// Steps 6.b-6.e: +0 != -0
return x!==0||1/x===1/y;}else { // Step 6.a: NaN == NaN
return x!==x&&y!==y;}} /**
 * Performs equality by iterating through keys on an object and returning false
 * when any key has values which are not strictly equal between the arguments.
 * Returns true when the values of all keys are strictly equal.
 */function shallowEqual(objA,objB){if(is(objA,objB)){return true;}if((typeof objA==="undefined"?"undefined":_typeof(objA))!=='object'||objA===null||(typeof objB==="undefined"?"undefined":_typeof(objB))!=='object'||objB===null){return false;}var keysA=Object.keys(objA);var keysB=Object.keys(objB);if(keysA.length!==keysB.length){return false;} // Test for A's keys different from B.
for(var i=0;i<keysA.length;i++){if(!hasOwnProperty.call(objB,keysA[i])||!is(objA[keysA[i]],objB[keysA[i]])){return false;}}return true;}module.exports=shallowEqual;},{}],164:[function(require,module,exports){ /**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */'use strict';var emptyFunction=require('./emptyFunction'); /**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */var warning=emptyFunction;if("development"!=='production'){warning=function warning(condition,format){for(var _len=arguments.length,args=Array(_len>2?_len-2:0),_key=2;_key<_len;_key++){args[_key-2]=arguments[_key];}if(format===undefined){throw new Error('`warning(condition, format, ...args)` requires a warning '+'message argument');}if(format.indexOf('Failed Composite propType: ')===0){return; // Ignore CompositeComponent proptype check.
}if(!condition){var argIndex=0;var message='Warning: '+format.replace(/%s/g,function(){return args[argIndex++];});if(typeof console!=='undefined'){console.error(message);}try{ // --- Welcome to debugging React ---
// This error was thrown as a convenience so that you can use this stack
// to find the callsite that caused this warning to fire.
throw new Error(message);}catch(x){}}};}module.exports=warning;},{"./emptyFunction":146}],165:[function(require,module,exports){ /* eslint-disable no-unused-vars */'use strict';var hasOwnProperty=Object.prototype.hasOwnProperty;var propIsEnumerable=Object.prototype.propertyIsEnumerable;function toObject(val){if(val===null||val===undefined){throw new TypeError('Object.assign cannot be called with null or undefined');}return Object(val);}module.exports=Object.assign||function(target,source){var from;var to=toObject(target);var symbols;for(var s=1;s<arguments.length;s++){from=Object(arguments[s]);for(var key in from){if(hasOwnProperty.call(from,key)){to[key]=from[key];}}if(Object.getOwnPropertySymbols){symbols=Object.getOwnPropertySymbols(from);for(var i=0;i<symbols.length;i++){if(propIsEnumerable.call(from,symbols[i])){to[symbols[i]]=from[symbols[i]];}}}}return to;};},{}],166:[function(require,module,exports){'use strict';module.exports=require('./lib/React');},{"./lib/React":27}],167:[function(require,module,exports){module.exports={name:'hello AA!',getName:function getName(){var r=Math.floor(Math.random()*40+10);return 'hello '+r;}};},{}],168:[function(require,module,exports){(function(global){ /**
 * Created by Donghui Huo on 2016/3/15.
 */var React=global.React=require('react');var ReactDOM=global.ReactDOM=require('react-dom');var app=require('./module/module.jsx');var $=jQuery=require('jquery');require("bootstrap");var utilFun=require("utilFun");$(document).ready(function(){app.invoke();});}).call(this,typeof self!=="undefined"?self:typeof window!=="undefined"?window:{});},{"./module/module.jsx":169,"bootstrap":1,"jquery":2,"react":166,"react-dom":3,"utilFun":170}],169:[function(require,module,exports){var data=require('../data/data');var HelloMessage=React.createClass({displayName:"HelloMessage", // Create a component, HelloMessage.
render:function render(){return React.createElement("div",null,"Hello ",data.getName());}});module.exports={invoke:function invoke(){ReactDOM.render( // Render HelloMessage component at #name.
React.createElement(HelloMessage,{name:"feenan"}),document.querySelector('.name1'));}};},{"../data/data":167}],170:[function(require,module,exports){ /**
 * Created by Donghui Huo on 2016/3/15.
 */ //var $ = require("jQuery");
module.exports=function($,window,undefined){'use strict';$.UtilFun=function(){};$.UtilFun.prototype={basicFunc:function basicFunc(){ //do something
}};return new $.UtilFun();}(jQuery,window);},{}]},{},[168]);