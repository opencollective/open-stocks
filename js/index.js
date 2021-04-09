$(document).ready(function () {
  // mobile menu toggle
  $(".js-menuToggle").click(handleMobileMenuToggle);
  // desktop menu toggle
  $(".js-desktopMenuToggle").click(handleDesktopMenuToggle);

  function handleMobileMenuToggle() {
    $(".mobileNav").slideToggle("slow", () => {
      if ($(this).is(":visible")) {
        $(".mobileNav").css("display", "flex");
      }
    });
  }

  function handleDesktopMenuToggle() {
    console.log("I was here");
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
