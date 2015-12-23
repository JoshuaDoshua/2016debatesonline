jQuery(document).ready(function($) {

  var backBtn = document.getElementById('back');

  var goTo = function() {
    switch (location.hash) {
      case "":
      case "#":
        backBtn.href = "#";
        document.body.className = "";
        break;

      // tricky if come straight to candidates
      case "#candidates":
        var prev = document.body.className.replace("open ", "");
        backBtn.href = "#" + document.body.className.replace("open ","");
        document.body.className = "open candidates";
        break;

      case "#dem":
      case "#gop":
      backBtn.href = "#";
        document.body.className = "open " + location.hash.replace('#','');
        break;

      case "#about":
      case "#share":
      case "#bug":
        console.log(location.hash);
        $.magnificPopup.open({
          items: location.hash,
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
        });
        break;

      // modals
      default:
        // magnificPopup
        $.magnificPopup({
          items: function() {
            return "#";
          },
          mainClass: 'mfp-fade',
          removalDelay: 160,
          preloader: false,
        });
    }
  };

  window.addEventListener('load',goTo);
  window.addEventListener('popstate',goTo);

});
