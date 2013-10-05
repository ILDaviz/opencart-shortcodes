(function($) {
   /* My micro jQuery templating engine 
    * https://gist.github.com/tsi/5137145
    *
    * Usage:
    *   <section data-html="content"></section>
    *
    * Will load <content.html> into <section>
    */

   $(document).ready(function() {
      $("[data-html]").each(function() {
         el = $(this);
         var src = $(this).attr("data-html") + ".html";
         el.load(src);
      });
   });
})(jQuery);