jQuery(document).ready(function($) {

	function capitalizeEachWord(str) {
		return str.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}

  var backBtn = document.getElementById('back');

  var title;
  var originalTitle = "Watch 2016 Presidential Debates Online";

  var goTo = function() {
    switch (location.hash) {

      // default to regular screen
      case "":
      case "#":
        backBtn.href = "#";
        document.body.className = "";
		document.title = originalTitle;
        $.magnificPopup.close();
        break;

      // tricky if come straight to candidates
      case "#candidates":
        var prev = document.body.className.replace("open ", "");
        backBtn.href = "#" + document.body.className.replace("open ","");
        document.body.className = "open candidates";
		document.title = "Presidential Candidates | " + originalTitle;
        $.magnificPopup.close();
        break;

      // video-side choices
      case "#dem":
      case "#gop":
      backBtn.href = "#";
        document.body.className = "open " + location.hash.replace('#','');
		document.title = (location.hash == "#dem" ? "Democratic" : "Republican") + " Debate Videos | " + originalTitle;
        $.magnificPopup.close();
        break;

      // static modals
      case "#about":
      case "#share":
      case "#bug":
      case "#no-video":
	  	title = location.hash.replace('#', '').replace('-', ' ');
		title = capitalizeEachWord(title);
		document.title = title + " | " + originalTitle;
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
		document.title = debateType.toUpperCase() + " Debate " + location.hash.replace('#dem-', '').replace('#gop-','') + " | " + originalTitle;
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
    ga('send','pageview',location.hash);
  };

  window.addEventListener('load',goTo);
  window.addEventListener('popstate',goTo);

});
