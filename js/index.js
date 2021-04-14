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

  //Set active button tab
  $(".creatorButton").click(() => {
    if (!$(this).hasClass("activeOpenSourceCreator")) {
      $("button.stockOwnerButton").removeClass("activeStockOwner");
      $("button.creatorButton").addClass("activeOpenSourceCreator");
      $(".stockOwner").hide();
      $(".openSourceCreator").show();
      validateForm();
    }
  });
  //Set active button tab
  $("button.stockOwnerButton").click(() => {
    if (!$(this).hasClass("activeStockOwner")) {
      $(".creatorButton").removeClass("activeOpenSourceCreator");
      $("button.stockOwnerButton").addClass("activeStockOwner");
      $(".openSourceCreator").hide();
      $(".stockOwner").show();
      validateForm();
    }
  });

  // Form handling
  $("form.emailForm").submit((event) => {
    event.preventDefault();
    const email = $("input[name='email']").val();
    if (!email) {
      return;
    }

    $("button.submitContactBtn").prop("disabled", true);

    const request = new Request(`/api/email`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ email }),
    });

    fetch(request)
      .then((response) => {
        if (response.status === 200) {
          $("h2.letStartTitle").text("Thanks for your help!");
          $("p.letStartDescription").text(
            "People like you supporting Open Source projects help them to keep running and growing; soon we will come with more ways to contribute and keep the Open Constellation shining!"
          );
          $(".formTabWrapper").css("display", "none");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  });

  // Handle email input change
  $("input[name='email']").on("paste keyup", () => validateForm());
  // Handle checkbox input change
  $("input[name='alreadyOnOC']").on("change", () => validateForm());

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

  function validateForm() {
    const isStockOwner = $("button.stockOwnerButton").hasClass(
      "activeStockOwner"
    );
    const isOpenSourceCreator = $("button.creatorButton").hasClass(
      "activeOpenSourceCreator"
    );
    const email = $("input[name='email']").val();
    const hasCollective = $("input[name='alreadyOnOC']").is(":checked");
    const submitButton = $("button.submitContactBtn");

    if (isStockOwner && isValidEmail(email)) {
      submitButton.prop("disabled", false).addClass("activeFormButton");
    } else if (isOpenSourceCreator && isValidEmail(email) && hasCollective) {
      submitButton.prop("disabled", false).addClass("activeFormButton");
    } else {
      if (submitButton.hasClass("activeFormButton")) {
        submitButton.prop("disabled", true).removeClass("activeFormButton");
      }
    }
  }

  function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});
