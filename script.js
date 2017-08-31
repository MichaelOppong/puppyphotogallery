$( document ).ready(function() {
var puppyPictures = [
  "http://1.bp.blogspot.com/-ONql26Besow/T2xHXDiHQ4I/AAAAAAAAC1A/sFV0TIANF-M/s1600/pug+dog+full+hd+wallpapers+5.jpg",
  "https://safepetsuk.files.wordpress.com/2012/04/pug.jpg",
  "http://media-cache-ec0.pinimg.com/736x/52/70/d2/5270d2b702fa9a232796f28234c13f35.jpg",
  "http://www.pptbackgrounds.org/uploads/black-labrador-puppy-backgrounds-wallpapers.jpg",
  "http://wallpapers.in-world.info/dog/dog4.jpg",
];

var puppyNames = [
  "Angel",
  "Horace",
  "Sadie",
  "Jasper",
  "Daisy",
];

function buildGallery() {

    $("#gallery").empty();

    for (var index = 0; index < puppyPictures.length; index++) {
        var puppyImage = $("<img>");
        puppyImage.attr("src", puppyPictures[index]);
        
        var imageLink = $("<a>");
        imageLink.attr("href", puppyPictures[index]);
        imageLink.attr("target", "_blank");
        imageLink.append(puppyImage);
        
        var puppyName = $("<p>").text(puppyNames[index]);
        
        var div = $("<div>");
        div.addClass("picture");
        div.append(imageLink);
        div.append(puppyName);
        
        $("#gallery").append(div);
  }
}

buildGallery();

$("#add").click(function() {
  var newPuppyPictureUrl = $("#picture-url").val();
  puppyPictures.push(newPuppyPictureUrl);
  var newPuppyName = $("#name").val();
  puppyNames.push(newPuppyName);
  buildGallery();
});
});

// JavaScript File