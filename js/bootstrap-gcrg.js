(function ($, Drupal) {
  Drupal.behaviors.hoverTap = {
    attach: function (context, settings) {
      $('#block-socialsharingblock').on( "tap", function() {
        $(this).addClass("hovered");
      } );
    }
  };
})(jQuery, Drupal);