jQuery(document).ready(function($) {

  var $body = $('body');
  var current = "#";

  var mainLinks = $('.site-nav a').on('click', function(e) {
    e.preventDefault();
    $body
      .addClass('open')
      .removeClass('dem gop')
      .addClass(this.hash.replace('#',''));
    current = this.hash;
    console.log(current);
  });

  var getCurrentSection = function() {
    if ($body.hasClass('candidates')) {
      return "#candidates";
    } else if ($body.hasClass('dem')) {
      return "#dem";
    } else if ($body.hasClass('gop')) {
      return "#gop";
    }
  };

  var goToSection = function() {
    console.log('load section on pageload via loation.hash');
  };

  var backLink = $('#back').on('click', function(e) {
    e.preventDefault();
    if ($body.hasClass('candidates')) {
      $body.removeClass('candidates');
      current = getCurrentSection();
    } else {
      $body.removeClass('open dem gop');
      current = "/";
    }
    console.log(current);
  });

  var showCandidates = $('#show-candidates').on('click', function(e) {
    e.preventDefault();
    $body.addClass('candidates');
    current = "#candidates";
    console.log(current);
  });

  var modalLinks = $('.modal-link').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    callbacks: {
      open: function() {
        current = this.currItem.src;
        console.log(current);
      },
      close: function() {
        current = getCurrentSection();
        console.log(current);
      }
    }
  });

  var videoLinks = $('.videos-link.video').magnificPopup({
    type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
    callbacks: {
      open: function() {
        current = "#" + this.ev[0].dataset.label;
        console.log(current);
      },
      close: function() {
        current = getCurrentSection();
        console.log(current);
      }
    }
  });

});
