(function ($) {
  // Overwrite toolbar function to provide proper height.
  Drupal.toolbar.height = function() {
    var $toolbar = $('#toolbar');
    var height = $toolbar.outerHeight();

    // Begin custom. We need to add navbar height.
    var $navbar = $('.navbar');
    height += $navbar.outerHeight();
    // End custom.

    // In modern browsers (including IE9), when box-shadow is defined, use the
    // normal height.
    var cssBoxShadowValue = $toolbar.css('box-shadow');
    var boxShadow = (typeof cssBoxShadowValue !== 'undefined' && cssBoxShadowValue !== 'none');
    // In IE8 and below, we use the shadow filter to apply box-shadow styles to
    // the toolbar. It adds some extra height that we need to remove.
    if (!boxShadow && /DXImageTransform\.Microsoft\.Shadow/.test($toolbar.css('filter'))) {
      height -= $toolbar[0].filters.item("DXImageTransform.Microsoft.Shadow").strength;
    }
    return height;
  };
})(jQuery);