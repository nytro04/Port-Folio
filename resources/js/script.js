$(document).ready(function() {
  $(".js-section-about").waypoint(
    function(direction) {
      if (direction == "down") {
        $("nav").addClass("sticky");
      } else {
        $("nav").removeClass("sticky");
      }
    },
    {
      offset: "60px;"
    }
  );

  /** Mobile Nav */
  $(".js-nav-icon").click(function() {
    var nav = $(".js-main-nav");
    var icon = $(".js-nav-icon i");

    nav.slideToggle(200);

    if (icon.hasClass("flaticon-menu-three-horizontal-lines-symbol")) {
      icon.addClass("flaticon-cancel-music");
      icon.removeClass("flaticon-menu-three-horizontal-lines-symbol");
    } else {
      icon.addClass("flaticon-menu-three-horizontal-lines-symbol");
      icon.removeClass("flaticon-cancel-music");
    }
  });
});

function smoothScroll(ev) {
  const section = document.getElementById(ev.currentTarget.hash.substr(1));
  if (section !== null) {
    ev.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  }
}
