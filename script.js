$(document).ready(function() {
  const age = moment().diff("1981-01-19", 'years');
  $('.age').text(age);

  $('.education').on('click', function() {
    $('.list').toggle();
  });

  $('#home-icon').on('click', function() {
    $('html, body').animate({
      scrollTop: $('#header').offset().top
    }, 2000);
  });
});
