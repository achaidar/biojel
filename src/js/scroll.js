// Scroll
$(window).scroll(function () {
  if ($(this).scrollTop() > 10) {
    $("#topBtn").fadeIn();
  } else {
    $("#topBtn").fadeOut();
  }
});

$("#topBtn")
  .hide()
  .click(function () {
    $("html, body").animate({ scrollTop: 0 }, 300);
    return false;
  });
