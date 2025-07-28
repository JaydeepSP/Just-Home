$(document).ready(function () {
  $(".menu-bar-container").click(function () {
    $(this).toggleClass("change");
  });
  $(".overlay").click(function () {
    $(".menu-bar-container").toggleClass("change");
  });
  $(".slider").slick({
    autoplay: true,
    prevArrow: false,
    nextArrow: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: true,
    responsive: [
      {
        breakpoint: 1780,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1536,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 1066,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  });

  $(".testimonial-slider").slick({
    autoplay: true,
    // prevArrow: false,
    // nextArrow: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  });

  window.onscroll = function () {
    scrollFunction();
  };
  function scrollFunction() {
    if (
      document.body.scrollTop > 30 ||
      document.documentElement.scrollTop > 30
    ) {
      $("#scroll-top").removeClass("hidden");

      $("#scroll-top").addClass("block");
      $("#scroll-top").addClass("scroll-top");
    } else {
      $("#scroll-top").removeClass("block");
      $("#scroll-top").addClass("hidden");
    }

    $("#scroll-btn").click(function () {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    });
  }
});
