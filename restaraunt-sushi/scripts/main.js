// sticky-js
var waypoint = new Waypoint({
  element: document.querySelector(".features"),
  handler: function(direction) {
    if (direction == "down") {
      $(".nav").toggleClass("js-sticky");
    } else {
      $(".nav").toggleClass("js-sticky");
    }
  },
  offset: 60
});
// buttons-click links-click

$(".button-order").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".how-to-order").offset().top
    },
    1000
  );
});

$(".button-more").click(function() {
  $("html,body").animate(
    {
      scrollTop: $(".features").offset().top
    },
    1000
  );
});

$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links


    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $("html, body").animate(
          {
            scrollTop: target.offset().top
          },
          1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) {
              // Checking if the target was focused
              return false;
            } else {
              $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          }
        );
      }
    }
  });

//animation

var waypoint = new Waypoint({
  element: document.querySelector(".features"),
  handler: function(direction) {
    $(".anim1").addClass("animated fadeIn");
  },
  offset: 60
});

var waypoint = new Waypoint({
  element: document.querySelector(".cities"),
  handler: function(direction) {
    $(".anim2").addClass("animated fadeInLeft");
  },
  offset: 60
});

var waypoint = new Waypoint({
  element: document.querySelector("#order"),
  handler: function(direction) {
    $(".anim3").addClass("animated fadeInUp");
  },
  offset: 60
});
var waypoint = new Waypoint({
  element: document.querySelector(".header-text"),
  handler: function(direction) {
    if (direction == "up") {
      $(".anim4").addClass("animated shake");
    } else {
      $(".anim4").toggleClass("animated shake");
    }
  },
  offset: 60
});

// nav menu mobile

$(".mobile-nav-icon").click(function() {
  var icon = $(".mobile-nav-icon i");
  if (icon.hasClass("ion-md-menu")) {
    icon.removeClass("ion-md-menu");
    icon.addClass("ion-md-close");
    $(".nav-main").slideToggle();
    $(".nav").animate(
      {
        height: "300px"
      },
      500
    );
  } else {
    icon.removeClass("ion-md-close");
    icon.addClass("ion-md-menu");
    $(".nav-main").slideToggle();
    $(".nav").animate(
      {
        height: "70px"
      },
      500
    );
  }
});
