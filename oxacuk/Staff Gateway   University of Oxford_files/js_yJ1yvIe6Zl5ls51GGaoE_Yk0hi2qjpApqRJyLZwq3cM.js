/*
	jQuery ColorBox v1.3.29
	(c) 2013 Jack Moore - jacklmoore.com/colorbox
	updated: 2013-01-24
	license: http://www.opensource.org/licenses/mit-license.php
*/
(function(e,t,i){function o(i,o,n){var h=t.createElement(i);return o&&(h.id=U+o),n&&(h.style.cssText=n),e(h)}function n(e){var t=b.length,i=(j+e)%t;return 0>i?t+i:i}function h(e,t){return Math.round((/%/.test(e)?("x"===t?T.width():T.height())/100:1)*parseInt(e,10))}function l(e){return _.photo||/\.(gif|png|jp(e|g|eg)|bmp|ico)((#|\?).*)?$/i.test(e)}function s(){var t,i=e.data(N,J);null==i?(_=e.extend({},$),console&&console.log&&console.log("Error: cboxElement missing settings object")):_=e.extend({},i);for(t in _)e.isFunction(_[t])&&"on"!==t.slice(0,2)&&(_[t]=_[t].call(N));_.rel=_.rel||N.rel||e(N).data("rel")||"nofollow",_.href=_.href||e(N).attr("href"),_.title=_.title||N.title,"string"==typeof _.href&&(_.href=e.trim(_.href))}function r(i,o){e(t).trigger(i),e("*",p).trigger(i),o&&o.call(N)}function a(){var e,t,i,o=U+"Slideshow_",n="click."+U;_.slideshow&&b[1]?(t=function(){I.html(_.slideshowStop).unbind(n).bind(et,function(){(_.loop||b[j+1])&&(e=setTimeout(G.next,_.slideshowSpeed))}).bind(Z,function(){clearTimeout(e)}).one(n+" "+tt,i),p.removeClass(o+"off").addClass(o+"on"),e=setTimeout(G.next,_.slideshowSpeed)},i=function(){clearTimeout(e),I.html(_.slideshowStart).unbind([et,Z,tt,n].join(" ")).one(n,function(){G.next(),t()}),p.removeClass(o+"on").addClass(o+"off")},_.slideshowAuto?t():i()):p.removeClass(o+"off "+o+"on")}function d(i){R||(N=i,s(),b=e(N),j=0,"nofollow"!==_.rel&&(b=e("."+V).filter(function(){var t,i=e.data(this,J);return i&&(t=e(this).data("rel")||i.rel||this.rel),t===_.rel}),j=b.index(N),-1===j&&(b=b.add(N),j=b.length-1)),O||(O=P=!0,p.show(),_.returnFocus&&(e(N).blur(),e(t).one(it,function(){e(N).focus()})),f.css({opacity:parseFloat(_.opacity),cursor:_.overlayClose?"pointer":"auto"}).show(),_.w=h(_.initialWidth,"x"),_.h=h(_.initialHeight,"y"),G.position(),ht&&T.bind("resize."+lt+" scroll."+lt,function(){f.css({width:T.width(),height:T.height(),top:T.scrollTop(),left:T.scrollLeft()})}).trigger("resize."+lt),r(Y,_.onOpen),F.add(H).hide(),S.html(_.close).show()),G.load(!0))}function c(){!p&&t.body&&(X=!1,T=e(i),p=o(st).attr({id:J,"class":nt?U+(ht?"IE6":"IE"):""}).hide(),f=o(st,"Overlay",ht?"position:absolute":"").hide(),W=o(st,"LoadingOverlay").add(o(st,"LoadingGraphic")),m=o(st,"Wrapper"),w=o(st,"Content").append(C=o(st,"LoadedContent","width:0; height:0; overflow:hidden"),H=o(st,"Title"),E=o(st,"Current"),L=o(st,"Next"),M=o(st,"Previous"),I=o(st,"Slideshow").bind(Y,a),S=o(st,"Close")),m.append(o(st).append(o(st,"TopLeft"),g=o(st,"TopCenter"),o(st,"TopRight")),o(st,!1,"clear:left").append(y=o(st,"MiddleLeft"),w,v=o(st,"MiddleRight")),o(st,!1,"clear:left").append(o(st,"BottomLeft"),x=o(st,"BottomCenter"),o(st,"BottomRight"))).find("div div").css({"float":"left"}),k=o(st,!1,"position:absolute; width:9999px; visibility:hidden; display:none"),F=L.add(M).add(E).add(I),e(t.body).append(f,p.append(m,k)))}function u(){function i(e){e.which>1||e.shiftKey||e.altKey||e.metaKey||(e.preventDefault(),d(this))}return p?(X||(X=!0,p.css({visibility:"hidden",display:"block"}),K=g.height()+x.height()+w.outerHeight(!0)-w.height(),z=y.width()+v.width()+w.outerWidth(!0)-w.width(),D=C.outerHeight(!0),B=C.outerWidth(!0),p.css({visibility:"visible",display:"none"}),L.click(function(){G.next()}),M.click(function(){G.prev()}),S.click(function(){G.close()}),f.click(function(){_.overlayClose&&G.close()}),e(t).bind("keydown."+U,function(e){var t=e.keyCode;O&&_.escKey&&27===t&&(e.preventDefault(),G.close()),O&&_.arrowKey&&b[1]&&(37===t?(e.preventDefault(),M.click()):39===t&&(e.preventDefault(),L.click()))}),e.isFunction(e.fn.on)?e(t).on("click."+U,"."+V,i):e("."+V).live("click."+U,i)),!0):!1}var f,p,m,w,g,y,v,x,b,T,C,k,W,H,E,I,L,M,S,F,_,K,z,D,B,N,j,A,O,P,R,q,G,Q,X,$={transition:"elastic",speed:300,width:!1,initialWidth:"600",innerWidth:!1,maxWidth:!1,height:!1,initialHeight:"450",innerHeight:!1,maxHeight:!1,scalePhotos:!0,scrolling:!0,inline:!1,html:!1,iframe:!1,fastIframe:!0,photo:!1,href:!1,title:!1,rel:!1,opacity:.9,preloading:!0,className:!1,current:"image {current} of {total}",previous:"previous",next:"next",close:"close",xhrError:"This content failed to load.",imgError:"This image failed to load.",open:!1,returnFocus:!0,reposition:!0,loop:!0,slideshow:!1,slideshowAuto:!0,slideshowSpeed:2500,slideshowStart:"start slideshow",slideshowStop:"stop slideshow",onOpen:!1,onLoad:!1,onComplete:!1,onCleanup:!1,onClosed:!1,overlayClose:!0,escKey:!0,arrowKey:!0,top:!1,bottom:!1,left:!1,right:!1,fixed:!1,data:void 0},J="colorbox",U="cbox",V=U+"Element",Y=U+"_open",Z=U+"_load",et=U+"_complete",tt=U+"_cleanup",it=U+"_closed",ot=U+"_purge",nt=!e.support.leadingWhitespace,ht=nt&&!i.XMLHttpRequest,lt=U+"_IE6",st="div";e.colorbox||(e(c),G=e.fn[J]=e[J]=function(t,i){var o=this;if(t=t||{},c(),u()){if(e.isFunction(o))o=e("<a/>"),t.open=!0;else if(!o[0])return o;i&&(t.onComplete=i),o.each(function(){e.data(this,J,e.extend({},e.data(this,J)||$,t))}).addClass(V),(e.isFunction(t.open)&&t.open.call(o)||t.open)&&d(o[0])}return o},G.position=function(e,t){function i(e){g[0].style.width=x[0].style.width=w[0].style.width=parseInt(e.style.width,10)-z+"px",w[0].style.height=y[0].style.height=v[0].style.height=parseInt(e.style.height,10)-K+"px"}var o,n,l,s=0,r=0,a=p.offset();T.unbind("resize."+U),p.css({top:-9e4,left:-9e4}),n=T.scrollTop(),l=T.scrollLeft(),_.fixed&&!ht?(a.top-=n,a.left-=l,p.css({position:"fixed"})):(s=n,r=l,p.css({position:"absolute"})),r+=_.right!==!1?Math.max(T.width()-_.w-B-z-h(_.right,"x"),0):_.left!==!1?h(_.left,"x"):Math.round(Math.max(T.width()-_.w-B-z,0)/2),s+=_.bottom!==!1?Math.max(T.height()-_.h-D-K-h(_.bottom,"y"),0):_.top!==!1?h(_.top,"y"):Math.round(Math.max(T.height()-_.h-D-K,0)/2),p.css({top:a.top,left:a.left}),e=p.width()===_.w+B&&p.height()===_.h+D?0:e||0,m[0].style.width=m[0].style.height="9999px",o={width:_.w+B+z,height:_.h+D+K,top:s,left:r},0===e&&p.css(o),p.dequeue().animate(o,{duration:e,complete:function(){i(this),P=!1,m[0].style.width=_.w+B+z+"px",m[0].style.height=_.h+D+K+"px",_.reposition&&setTimeout(function(){T.bind("resize."+U,G.position)},1),t&&t()},step:function(){i(this)}})},G.resize=function(e){O&&(e=e||{},e.width&&(_.w=h(e.width,"x")-B-z),e.innerWidth&&(_.w=h(e.innerWidth,"x")),C.css({width:_.w}),e.height&&(_.h=h(e.height,"y")-D-K),e.innerHeight&&(_.h=h(e.innerHeight,"y")),e.innerHeight||e.height||(C.css({height:"auto"}),_.h=C.height()),C.css({height:_.h}),G.position("none"===_.transition?0:_.speed))},G.prep=function(i){function h(){return _.w=_.w||C.width(),_.w=_.mw&&_.mw<_.w?_.mw:_.w,_.w}function s(){return _.h=_.h||C.height(),_.h=_.mh&&_.mh<_.h?_.mh:_.h,_.h}if(O){var a,d="none"===_.transition?0:_.speed;C.empty().remove(),C=o(st,"LoadedContent").append(i),C.hide().appendTo(k.show()).css({width:h(),overflow:_.scrolling?"auto":"hidden"}).css({height:s()}).prependTo(w),k.hide(),e(A).css({"float":"none"}),a=function(){function i(){nt&&p[0].style.removeAttribute("filter")}var h,s,a=b.length,c="frameBorder",u="allowTransparency";O&&(s=function(){clearTimeout(q),W.remove(),r(et,_.onComplete)},nt&&A&&C.fadeIn(100),H.html(_.title).add(C).show(),a>1?("string"==typeof _.current&&E.html(_.current.replace("{current}",j+1).replace("{total}",a)).show(),L[_.loop||a-1>j?"show":"hide"]().html(_.next),M[_.loop||j?"show":"hide"]().html(_.previous),_.slideshow&&I.show(),_.preloading&&e.each([n(-1),n(1)],function(){var t,i,o=b[this],n=e.data(o,J);n&&n.href?(t=n.href,e.isFunction(t)&&(t=t.call(o))):t=o.href,l(t)&&(i=new Image,i.src=t)})):F.hide(),_.iframe?(h=o("iframe")[0],c in h&&(h[c]=0),u in h&&(h[u]="true"),_.scrolling||(h.scrolling="no"),e(h).attr({src:_.href,name:(new Date).getTime(),"class":U+"Iframe",allowFullScreen:!0,webkitAllowFullScreen:!0,mozallowfullscreen:!0}).one("load",s).appendTo(C),e(t).one(ot,function(){h.src="//about:blank"}),_.fastIframe&&e(h).trigger("load")):s(),"fade"===_.transition?p.fadeTo(d,1,i):i())},"fade"===_.transition?p.fadeTo(d,0,function(){G.position(0,a)}):G.position(d,a)}},G.load=function(i){var n,a,d,c=G.prep;P=!0,A=!1,N=b[j],i||s(),Q&&p.add(f).removeClass(Q),_.className&&p.add(f).addClass(_.className),Q=_.className,r(ot),r(Z,_.onLoad),_.h=_.height?h(_.height,"y")-D-K:_.innerHeight&&h(_.innerHeight,"y"),_.w=_.width?h(_.width,"x")-B-z:_.innerWidth&&h(_.innerWidth,"x"),_.mw=_.w,_.mh=_.h,_.maxWidth&&(_.mw=h(_.maxWidth,"x")-B-z,_.mw=_.w&&_.w<_.mw?_.w:_.mw),_.maxHeight&&(_.mh=h(_.maxHeight,"y")-D-K,_.mh=_.h&&_.h<_.mh?_.h:_.mh),n=_.href,q=setTimeout(function(){W.appendTo(w)},100),_.inline?(d=o(st).hide().insertBefore(e(n)[0]),e(t).one(ot,function(){d.replaceWith(C.children())}),c(e(n))):_.iframe?c(" "):_.html?c(_.html):l(n)?(e(A=new Image).addClass(U+"Photo").bind("error",function(){_.title=!1,c(o(st,"Error").html(_.imgError))}).one("load",function(){var e;_.scalePhotos&&(a=function(){A.height-=A.height*e,A.width-=A.width*e},_.mw&&A.width>_.mw&&(e=(A.width-_.mw)/A.width,a()),_.mh&&A.height>_.mh&&(e=(A.height-_.mh)/A.height,a())),_.h&&(A.style.marginTop=Math.max(_.h-A.height,0)/2+"px"),b[1]&&(_.loop||b[j+1])&&(A.style.cursor="pointer",A.onclick=function(){G.next()}),nt&&(A.style.msInterpolationMode="bicubic"),setTimeout(function(){c(A)},1)}),setTimeout(function(){A.src=n},1)):n&&k.load(n,_.data,function(t,i){c("error"===i?o(st,"Error").html(_.xhrError):e(this).contents())})},G.next=function(){!P&&b[1]&&(_.loop||b[j+1])&&(j=n(1),G.load())},G.prev=function(){!P&&b[1]&&(_.loop||j)&&(j=n(-1),G.load())},G.close=function(){O&&!R&&(R=!0,O=!1,r(tt,_.onCleanup),T.unbind("."+U+" ."+lt),f.fadeTo(200,0),p.stop().fadeTo(300,0,function(){p.add(f).css({opacity:1,cursor:"auto"}).hide(),r(ot),C.empty().remove(),setTimeout(function(){R=!1,r(it,_.onClosed)},1)}))},G.remove=function(){e([]).add(p).add(f).remove(),p=null,e("."+V).removeData(J).removeClass(V),e(t).undelegate("."+V)},G.element=function(){return e(N)},G.settings=$)})(jQuery,document,window);;
(function ($) {

Drupal.behaviors.initColorbox = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }

    if (settings.colorbox.mobiledetect && window.matchMedia) {
      // Disable Colorbox for small screens.
      mq = window.matchMedia("(max-device-width: " + settings.colorbox.mobiledevicewidth + ")");
      if (mq.matches) {
        return;
      }
    }

    $('.colorbox', context)
      .once('init-colorbox')
      .colorbox(settings.colorbox);
  }
};

{
  $(document).bind('cbox_complete', function () {
    Drupal.attachBehaviors('#cboxLoadedContent');
  });
}

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxPlainStyle = {
  attach: function (context, settings) {
    $(document).bind('cbox_complete', function () {
      // Make all the controls invisible.
      $('#cboxCurrent, #cboxSlideshow, #cboxPrevious, #cboxNext', context).addClass('element-invisible');
      // Replace "Close" with "×" and show.
      $('#cboxClose', context).html('\327').addClass('cbox-close-plain');
      // Hide empty title.
      if ($('#cboxTitle:empty', context).length == true) {
        $('#cboxTitle', context).hide();
      }
      $('#cboxLoadedContent', context).bind('mouseover', function () {
        $('#cboxClose', context).animate({opacity: 1}, {queue: false, duration: "fast"});
        if ($('#cboxTitle:empty', context).length == false) {
          $('#cboxTitle', context).slideDown();
        }
      });
      $('#cboxOverlay', context).bind('mouseover', function () {
        $('#cboxClose', context).animate({opacity: 0}, {queue: false, duration: "fast"});
        if ($('#cboxTitle:empty', context).length == false) {
          $('#cboxTitle', context).slideUp();
        }
      });
    });
    $(document).bind('cbox_closed', function () {
      $('#cboxClose', context).removeClass('cbox-close-plain');
    });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.initColorboxLoad = {
  attach: function (context, settings) {
    if (!$.isFunction($.colorbox)) {
      return;
    }
    $.urlParams = function (url) {
      var p = {},
          e,
          a = /\+/g,  // Regex for replacing addition symbol with a space
          r = /([^&=]+)=?([^&]*)/g,
          d = function (s) { return decodeURIComponent(s.replace(a, ' ')); },
          q = url.split('?');
      while (e = r.exec(q[1])) {
        e[1] = d(e[1]);
        e[2] = d(e[2]);
        switch (e[2].toLowerCase()) {
          case 'true':
          case 'yes':
            e[2] = true;
            break;
          case 'false':
          case 'no':
            e[2] = false;
            break;
        }
        if (e[1] == 'width') { e[1] = 'innerWidth'; }
        if (e[1] == 'height') { e[1] = 'innerHeight'; }
        p[e[1]] = e[2];
      }
      return p;
    };
    $('.colorbox-load', context)
      .once('init-colorbox-load', function () {
        var params = $.urlParams($(this).attr('href'));
        $(this).colorbox($.extend({}, settings.colorbox, params));
      });
  }
};

})(jQuery);
;
(function ($) {

Drupal.behaviors.CookieNotice = {
  attach: function(context, settings) {

    // output cookie notice as a bar on top of page
    var displayCookieNotice = function(context, settings) {
      // Notice and message
      $('body').prepend('<div id="cookie-notice"><div class="cookie-notice-content"><p class="cookie-notice-text">' + Drupal.settings.cookieNotice.alertText + '</p><a href="#" id="cookie-notice-close">' + Drupal.settings.cookieNotice.closeText + '</a></div></div>');
      
      // Close button
      // A delegated event is much nicer (possible in jquery 1.4.3+. D7 ships with 1.4.4)
      $(document).delegate('#cookie-notice-close', 'click', function() { 
        $("#cookie-notice").slideUp("slow");
      });
     
      $("#cookie-notice").slideDown("slow");

      //set notice to never show again by default. Unnecessary to show every page load, particularly if we're suggesting showing it once is considered as acceptance.
      dontShowCookieNoticeAgain();
    }
   
    var dontShowCookieNoticeAgain = function() {
      // Specify domain root so the same cookie works across all subdomains
      var domainroot = Drupal.settings.cookieNotice.domainroot;
      // set or extend the cookie life for a year
      var exdate = new Date();
      exdate.setDate(exdate.getDate() + 365);
      document.cookie = "dontShowCookieNotice=" + "TRUE; expires=" + exdate.toUTCString() + ";domain=" + domainroot + ";path=/";
    }
   
    var pleaseShowCookieNotice = function() {
      // Don't show the notice if we have previously set a cookie to hide it
      var dontShowCookieNotice = (document.cookie.indexOf("dontShowCookieNotice") != -1) ? false : true;
      return dontShowCookieNotice;
    }

    $('body').once(function(){
      if (pleaseShowCookieNotice() == true) {
        displayCookieNotice();
      }
    });
  }
};
}(jQuery));;
(function ($) {

Drupal.googleanalytics = {};

$(document).ready(function() {

  // Attach mousedown, keyup, touchstart events to document only and catch
  // clicks on all elements.
  $(document.body).bind("mousedown keyup touchstart", function(event) {

    // Catch the closest surrounding link of a clicked element.
    $(event.target).closest("a,area").each(function() {

      // Is the clicked URL internal?
      if (Drupal.googleanalytics.isInternal(this.href)) {
        // Skip 'click' tracking, if custom tracking events are bound.
        if ($(this).is('.colorbox')) {
          // Do nothing here. The custom event will handle all tracking.
          //console.info("Click on .colorbox item has been detected.");
        }
        // Is download tracking activated and the file extension configured for download tracking?
        else if (Drupal.settings.googleanalytics.trackDownload && Drupal.googleanalytics.isDownload(this.href)) {
          // Download link clicked.
          ga("send", "event", "Downloads", Drupal.googleanalytics.getDownloadExtension(this.href).toUpperCase(), Drupal.googleanalytics.getPageUrl(this.href));
        }
        else if (Drupal.googleanalytics.isInternalSpecial(this.href)) {
          // Keep the internal URL for Google Analytics website overlay intact.
          ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(this.href) });
        }
      }
      else {
        if (Drupal.settings.googleanalytics.trackMailto && $(this).is("a[href^='mailto:'],area[href^='mailto:']")) {
          // Mailto link clicked.
          ga("send", "event", "Mails", "Click", this.href.substring(7));
        }
        else if (Drupal.settings.googleanalytics.trackOutbound && this.href.match(/^\w+:\/\//i)) {
          if (Drupal.settings.googleanalytics.trackDomainMode != 2 || (Drupal.settings.googleanalytics.trackDomainMode == 2 && !Drupal.googleanalytics.isCrossDomain(this.hostname, Drupal.settings.googleanalytics.trackCrossDomains))) {
            // External link clicked / No top-level cross domain clicked.
            ga("send", "event", "Outbound links", "Click", this.href);
          }
        }
      }
    });
  });

  // Track hash changes as unique pageviews, if this option has been enabled.
  if (Drupal.settings.googleanalytics.trackUrlFragments) {
    window.onhashchange = function() {
      ga('send', 'pageview', location.pathname + location.search + location.hash);
    }
  }

  // Colorbox: This event triggers when the transition has completed and the
  // newly loaded content has been revealed.
  $(document).bind("cbox_complete", function () {
    var href = $.colorbox.element().attr("href");
    if (href) {
      ga("send", "pageview", { "page": Drupal.googleanalytics.getPageUrl(href) });
    }
  });

});

/**
 * Check whether the hostname is part of the cross domains or not.
 *
 * @param string hostname
 *   The hostname of the clicked URL.
 * @param array crossDomains
 *   All cross domain hostnames as JS array.
 *
 * @return boolean
 */
Drupal.googleanalytics.isCrossDomain = function (hostname, crossDomains) {
  /**
   * jQuery < 1.6.3 bug: $.inArray crushes IE6 and Chrome if second argument is
   * `null` or `undefined`, http://bugs.jquery.com/ticket/10076,
   * https://github.com/jquery/jquery/commit/a839af034db2bd934e4d4fa6758a3fed8de74174
   *
   * @todo: Remove/Refactor in D8
   */
  if (!crossDomains) {
    return false;
  }
  else {
    return $.inArray(hostname, crossDomains) > -1 ? true : false;
  }
};

/**
 * Check whether this is a download URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isDownload = function (url) {
  var isDownload = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  return isDownload.test(url);
};

/**
 * Check whether this is an absolute internal URL or not.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternal = function (url) {
  var isInternal = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return isInternal.test(url);
};

/**
 * Check whether this is a special URL or not.
 *
 * URL types:
 *  - gotwo.module /go/* links.
 *
 * @param string url
 *   The web url to check.
 *
 * @return boolean
 */
Drupal.googleanalytics.isInternalSpecial = function (url) {
  var isInternalSpecial = new RegExp("(\/go\/.*)$", "i");
  return isInternalSpecial.test(url);
};

/**
 * Extract the relative internal URL from an absolute internal URL.
 *
 * Examples:
 * - http://mydomain.com/node/1 -> /node/1
 * - http://example.com/foo/bar -> http://example.com/foo/bar
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   Internal website URL
 */
Drupal.googleanalytics.getPageUrl = function (url) {
  var extractInternalUrl = new RegExp("^(https?):\/\/" + window.location.host, "i");
  return url.replace(extractInternalUrl, '');
};

/**
 * Extract the download file extension from the URL.
 *
 * @param string url
 *   The web url to check.
 *
 * @return string
 *   The file extension of the passed url. e.g. "zip", "txt"
 */
Drupal.googleanalytics.getDownloadExtension = function (url) {
  var extractDownloadextension = new RegExp("\\.(" + Drupal.settings.googleanalytics.trackDownloadExtensions + ")([\?#].*)?$", "i");
  var extension = extractDownloadextension.exec(url);
  return (extension === null) ? '' : extension[1];
};

})(jQuery);
;
