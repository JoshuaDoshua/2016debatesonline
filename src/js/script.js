jQuery(document).ready(function($) {

  // if i'm just using hashes, do i really need the history API?
  // could just check hash on page-load and manually magnificPopup
  // maybe necessary for back button?
  // maybe just want to play with history api

  var $body = $('body');
  var current = "#";

  var mainLinks = $('.site-nav a').on('click', function(e) {
    e.preventDefault();
    $body
      .addClass('open')
      .removeClass('dem gop')
      .addClass(this.hash.replace('#',''));
    updateHistory(this.hash);
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

  var updateHistory = function(hash) {
    if (!hash) {
      current = getCurrentSection();
    } else {
      current = hash;
    }
    history.pushState({current:current},null,current);
  };

  var goToSection = function(section,modal) {
    // use this to react to everything but modals, but also modals on load
    console.log(current);
    console.log(location.hash);
    switch (location.hash) {
      case "":
        $body.removeClass('open dem gop candidates');
        break;
      case "#candidates":
        $body.addClass('candidates');
        break;
      default:
        $body.addClass(this.hash.replace('#',''));
    }
    if (current == "#dem" || current == "#gop") {
    }
    console.log('load section on pageload via loation.hash');
  };

  window.onpopstate = function() {
    goToSection(current,false);
  };

  var backLink = $('#back').on('click', function(e) {
    e.preventDefault();
    if ($body.hasClass('candidates')) {
      $body.removeClass('candidates');
      updateHistory(false);
    } else {
      $body.removeClass('open dem gop');
      current = "/";
    }
    console.log(current);
  });

  var showCandidates = $('#show-candidates').on('click', function(e) {
    e.preventDefault();
    $body.addClass('candidates');
    updateHistory("#candidates");
    console.log(current);
  });

  var modalLinks = $('.modal-link').magnificPopup({
    type: 'inline',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    callbacks: {
      open: function() {
        // current = this.currItem.src;
        updateHistory(this.currItem.src);
        console.log(current);
      },
      close: function() {
        // current = getCurrentSection();
        updateHistory(false);
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
        // current = "#" + this.ev[0].dataset.label;
        updateHistory('#' + this.ev[0].dataset.label);
        console.log(current);
      },
      close: function() {
        // current = getCurrentSection();
        updateHistory(false);
        console.log(current);
      }
    }
  });

});
