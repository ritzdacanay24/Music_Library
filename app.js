$.ajax({
    method: "GET",
    url: "http://www.devcodecampmusiclibrary.com/api/music",
    data: {}
  }).done(function( data ) {
    console.log(data)
});