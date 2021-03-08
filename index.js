
    $('.hb-button').on('click', function() {
      $('nav ul.nav-menu').toggleClass('show');
    });


<!-- back to top -->
$(function () {
    var scrollButton = $('#scroll-top');
    $(window).scroll(function() {
      $(this).scrollTop() >= 400 ? scrollButton.show() : scrollButton.hide();
    });
});
