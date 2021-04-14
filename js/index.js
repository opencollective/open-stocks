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

  $(".creatorButton").click(() => {
    if (!$(this).hasClass("activeOpenSourceCreator")) {
      $("button.stockOwnerButton").removeClass("activeStockOwner");
      $("button.creatorButton").addClass("activeOpenSourceCreator");
      $(".stockOwner").hide();
      $(".openSourceCreator").show();
    }
  });

  $("button.stockOwnerButton").click(() => {
    if (!$(this).hasClass("activeStockOwner")) {
      $(".creatorButton").removeClass("activeOpenSourceCreator");
      $("button.stockOwnerButton").addClass("activeStockOwner");
      $(".openSourceCreator").hide();
      $(".stockOwner").show();
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
