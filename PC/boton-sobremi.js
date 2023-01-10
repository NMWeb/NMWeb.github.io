(function ($) {
  $(document).ready(function () {
    $diviVideo = $("#divi-video-container video");
    videoElement = $("#divi-video-container video")[0];
    $videoCta = $(".divi-delayed-button-1");


    $diviVideo.on("timeupdate", function (e) {
      if (e.target.currentTime >= 16) {
        $videoCta.addClass("show-button");
      }
      if (e.target.currentTime >= 20) {
        $videoCta.addClass("hide-button");
      }
    });
  });
})(jQuery);