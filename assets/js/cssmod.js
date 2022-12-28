// script to set height of #what-we-do-container to 160% of .outerHeight() of #bar-behind
// must also center #do-graphic on #what-we-do-container
jQuery(document).ready(function ($) {
  console.log("Calculating height and padding-top for #what-we-do-conatiner");
  if ($("#bar-behind").outerHeight() * 1.6 >= $("#do-graphic").outerHeight()) {
    $("#what-we-do-container").css({
      height: $("#bar-behind").outerHeight() * 1.6 + "px",
      "padding-top": $("#bar-behind").outerHeight() * 0.3 + "px", // set height to 160% of #bar-behind
    });
    $("#do-graphic").css({
      top:
        ($("#what-we-do-container").outerHeight() -
          $("#do-graphic").outerHeight()) /
          2 +
        "px", // to center #do-graphic in #what-we-do-container
    });
  } else {
    $("#what-we-do-container").css({
      height:
        $("#do-graphic").outerHeight() +
        20 -
        ($("#do-graphic").outerHeight() - $("#bar-behind").outerHeight()) / 2 +
        "px",
      "padding-top":
        ($("#do-graphic").outerHeight() - $("#bar-behind").outerHeight()) / 2 +
        "px", // set height to #do-graphic, center #bar-behind in #what-we-do-container
    });
    $("#do-graphic").css({
      top: "10px", // to center #do-graphic in #what-we-do-container
    });
  }
});
$(window).resize(function () {
  location.reload();
});
