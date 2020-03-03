const menuEl = $(".js-menu");
const menuBtnEl = $(".js-trigger");
const bodyEl = $("body");
const blackBarEl = $(".js-black-bar");
const menuNowEl = $('.js-top-menu__now');
const menuWeather = $('.js-top-menu__weather');
menuBtnEl.click(function () {
  if ($(this).attr("aria-expanded") === "true") {
    $(this).attr({
      "aria-expanded": false,
      "aria-label": "Показать меню"
    });
  } else {
    $(this).attr({
      "aria-expanded": true,
      "aria-label": "Свернуть меню"
    });
  }
  menuNowEl.slideToggle()
  menuWeather.slideToggle()
  menuEl.slideToggle();
  menuBtnEl.toggleClass("menu-close");
  bodyEl.toggleClass("no-scroll");
  blackBarEl.slideToggle();
});