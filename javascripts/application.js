var Instagram = {};

(function(){

  function toScreen(photos){
    $.each(photos.data, function(index, photo){

      // I'll construct the image tag on the fly.
      // The images property contains objects representing images of
      // varying quality. I'll give low_resulution a try.

      photo = "<img src='"+ photo.images.low_resolution.url + "' />";

      $('div#photos-wrap').append(photo);
    });
  }

  function search(tag){
    var url = "https://api.instagram.com/v1/tags/" + tag + "/media/recent?callback=?&amp;client_id=82800ae3936348649c2c922d144cfe53"
    $.getJSON(url, toScreen);
  }

  Instagram.search = search;
})();