$(".responsive").slick({
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<span class="prev_arrow"><i class="fa-solid fa-angle-left"></i></span>',
  nextArrow: '<span class="next_arrow"><i class="fa-solid fa-angle-right"></i></span>',

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        infinite: true,
      },
    },
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
