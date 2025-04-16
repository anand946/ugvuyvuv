$( document ).ready(() => {
    $(".envelope-wrapper .flower").click(() => {
      $('.envelope-wrapper').addClass('flap')
  });

  $(".envelope-wrapper .close-icon").click(() => {
      $('.envelope-wrapper').removeClass('flap')
  });
});
