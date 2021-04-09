$(document).ready(function () {
  // mobile toggle
  $(".js-menuToggle").click(handleMobileMenuToggle);

  function handleMobileMenuToggle() {
    $(".mobileNav").slideToggle("slow", () => {
      if ($(this).is(":visible")) {
        $(".mobileNav").css("display", "flex");
      }
    });
  }
});
