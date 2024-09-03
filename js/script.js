$(function () {
  "use strict";

  // Fixed menu js start
  $(window).on("scroll", function () {
    var scroll = $(window).scrollTop();
    if (scroll < 245) {
      $("#sticky-header").removeClass("sticky-menu");
      $("#header-fixed-height").removeClass("active-height");
    } else {
      $("#sticky-header").addClass("sticky-menu");
      $("#header-fixed-height").addClass("active-height");
    }
  });

  // full page loader js
  $(".fullpage_loader").fadeOut("slow", function () {
    $(this).remove();
  });

  // dropdown menu js
  $(".dropdown_menu").on("click", function (e) {
    e.stopPropagation(); // Prevent the click event from bubbling up to the document
    var $menu = $(this).next(".dropdown_menu_info");
    $(".dropdown_menu_info").not($menu).removeClass("control_dropdown_menu");
    $menu.toggleClass("control_dropdown_menu");
  });
  $(document).on("click", function (e) {
    if (!$(e.target).closest('.dropdown_menu_info').length) {
      $(".dropdown_menu_info").removeClass("control_dropdown_menu");
    }
  });
  $(".dropdown_menu_info").on("click", function (e) {
    e.stopPropagation(); 
  });

  // back to top js
  var btn = $(".scroll-to-top");

  $(window).scroll(function () {
    btn.toggleClass("show", $(window).scrollTop() > 300);
  });

  btn.click(function (e) {
    e.preventDefault();
    if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
      $("html").animate({
          scrollTop: 0,
        },
        1000
      );
    } else {
      $("html, body").animate({
          scrollTop: 0,
        },
        0
      );
    }
  });

    // Initialize tooltips
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: 'hover'
    }));

  // mobilel menu js

  $(".menu_bar").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").addClass("active");
    return false;
  });

  $(".close-mobile-menu,.mobile-menu-overlay").on("click", function () {
    $(".mobile-menu-overlay,.mobile-menu-main").removeClass("active");
  });

  // chosen js
  $(".chosen").chosen()
});