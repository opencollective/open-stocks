$(document).ready(function () {
  // mobile menu toggle
  $(".js-menuToggle").click(handleMobileMenuToggle);
  // desktop menu toggle
  $(".js-desktopMenuToggle").click(handleDesktopMenuToggle);
  $(".js-navLink").click(() => {
    if ($(".mobileNav").is(":visible")) {
      $(".mobileNav").css("display", "none");
    } else if ($(".desktopNav").is(":visible")) {
      $(".desktopNav").css("display", "none");
    }
  });

  function handleMobileMenuToggle() {
    $(".mobileNav").slideToggle("slow", () => {
      if ($(this).is(":visible")) {
        $(".mobileNav").css("display", "flex");
      }
    });
  }

  function handleDesktopMenuToggle() {
    $(".desktopNav").animate(
      {
        width: "toggle",
      },
      () => {
        if ($(this).is(":visible")) {
          $(".desktopNav").css("display", "flex");
        }
      }
    );
  }
});
