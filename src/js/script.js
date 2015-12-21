jQuery(document).ready(function($) {

  var $body = $('body');

  var mainLinks = $('.site-nav a').on('click', function(e) {
    e.preventDefault();
    $body
      .addClass('open')
      .removeClass('dem gop')
      .addClass(this.hash.replace('#',''));
  });

  var backLink = $('#back').on('click', function(e) {
    e.preventDefault();
    if ($body.hasClass('candidates')) {
      $body.removeClass('candidates');
    } else {
      $body.removeClass('open dem gop');
    }
  });

  var showCandidates = $('#show-candidates').on('click', function(e) {
    e.preventDefault();
    $body.addClass('candidates');
  });

  var modalLinks = $('.modal-link').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
  });

  var videoLinks = $('.videos-link.video').magnificPopup({
    type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
  });

});
