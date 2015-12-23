jQuery(document).ready(function($) {

  var backBtn = document.getElementById('back');

  var goTo = function() {
    switch (location.hash) {

      // default to regular screen
      case "":
      case "#":
        backBtn.href = "#";
        document.body.className = "";
        $.magnificPopup.close();
        break;

      // tricky if come straight to candidates
      case "#candidates":
        var prev = document.body.className.replace("open ", "");
        backBtn.href = "#" + document.body.className.replace("open ","");
        document.body.className = "open candidates";
        $.magnificPopup.close();
        break;

      // video-side choices
      case "#dem":
      case "#gop":
      backBtn.href = "#";
        document.body.className = "open " + location.hash.replace('#','');
        $.magnificPopup.close();
        break;

      // static modals
      case "#about":
      case "#share":
      case "#bug":
        $.magnificPopup.open({
          items: {
            type: 'inline',
            src: location.hash
          },
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          callbacks: {
            close: function() {
              console.log('figure out previous spot');
            }
          }
        });
        break;

      // must be a video modals
      default:
        var videoSrc = $('[href="' + location.hash + '"]').attr('data-src');
        var debateType = location.hash.replace(/[^a-z]/g, "");
        document.body.className = "open " + debateType;
        $.magnificPopup.open({
          type: 'iframe',
          items: {src: videoSrc},
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
          callbacks: {
            close: function() {
              history.pushState(null,null,"#" + debateType);
              console.log('figure out previous spot');
            }
          }
        });
    }
  };

  window.addEventListener('load',goTo);
  window.addEventListener('popstate',goTo);

});
