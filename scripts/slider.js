$(document).ready(function () {
  $(".slider-content").slick({
    slidesToShow: 4,
    dots: false,
    appendArrows: $(".slider-header-btns"),
    responsive: [
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          appendDots: $(".slider-dots"),
          arrows: false,
        },
      },
    ],
  });
});
