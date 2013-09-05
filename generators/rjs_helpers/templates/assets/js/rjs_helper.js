// Generated by CoffeeScript 1.3.3
(function() {

  window.rjsHelpers = {
    updateElement: function(element, content) {
      return jQuery(element).html(content);
    },
    updateElementById: function(element, content) {
      return this.updateElement("#" + element, content);
    },
    replaceElement: function(element, content) {
      return jQuery(element).replaceWith(content);
    },
    replaceElementById: function(element, content) {
      return this.replaceElement("#" + element, content);
    },
    removeElement: function(element) {
      return jQuery(element).remove();
    },
    removeElementById: function(element) {
      return this.removeElement("#" + element);
    },
    appendElement: function(element, content) {
      return jQuery(element).append(content);
    },
    appendElementById: function(element, content) {
      return this.appendElement("#" + element, content);
    },
    prependElement: function(element, content) {
      return jQuery(element).prepend(content);
    },
    prependElementById: function(element, content) {
      return this.prependElement("#" + element, content);
    },
    hideElement: function(element) {
      return jQuery(element).hide();
    },
    hideElementById: function(element) {
      return this.hideElement("#" + element);
    },
    showElement: function(element) {
      return jQuery(element).show();
    },
    showElementById: function(element) {
      return this.showElement("#" + element);
    },
    toggleElement: function(element) {
      return jQuery(element).toggle();
    },
    toggleElementById: function(element) {
      return this.toggleElement("#" + element);
    },
    scrollToElement: function(element, offsetTop) {
      if (offsetTop == null) {
        offsetTop = 0;
      }
      jQuery('html, body').animate({
        scrollTop: jQuery(element).offset().top - offsetTop
      }, 1000);
      return false;
    },
    scrollToElementById: function(element) {
      return this.scrollToElement("#" + element);
    },
    scrollToTop: function(offsetTop) {
      if (offsetTop == null) {
        offsetTop = 0;
      }
      jQuery("html, body").animate({
        scrollTop: offsetTop
      }, 600);
      return false;
    },
    redirectTo: function(url) {
      return window.location.href = url;
    }
  };

}).call(this);
