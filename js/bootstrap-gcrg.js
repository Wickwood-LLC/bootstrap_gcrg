(function ($, Drupal) {
  Drupal.behaviors.hoverTap = {
    attach: function (context, settings) {
      $('#block-socialsharingblock').on( "tap", function() {
        $(this).trigger("mouseover");
      } );
    }
  };
})(jQuery, Drupal);