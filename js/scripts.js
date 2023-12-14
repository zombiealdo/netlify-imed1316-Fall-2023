// A $( document ).ready() block.
$(document).ready(function () {
  // console.log("hello world");
  //alert("test");

  $("#my-text").css("color", "red");

  /*scroll to top code */
  $(window).scroll.scrollTop(function () {
    if ($(this).scrollTop() > 100) {
      $(".scroll-top").fadeIn();
    } else {
      $(".scroll-top").fadeOut();
    }
  });

  $("scroll-top").click(function () {
    $("html, body").animate(
      {
        scrollTop: 0
      },
      500
    );
    return false;
  });
});
