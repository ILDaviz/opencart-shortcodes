(function($) {
   /* 
    * Will load <content.html> into <section>
    *
    * @author Tsachi Shlidor
    * @link https://gist.github.com/tsi/5137145
    *
    * @example <section data-html="content"></section> Load content.html
    */

   $(document).ready(function() {
      $("[data-html]").each(function() {
         el = $(this);
         var src = $(this).attr("data-html") + ".html";
         el.load(src);
      });
   });
})(jQuery);