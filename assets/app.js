$(document).ready(function(){

var topics = [];
  
    
function displayshows() {

var x = $(this).data("search");
console.log(shows);

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + shows +"I9gW4xozEDVb0yHp4oVgPKPOLP8ajell";

xhr.done(function(data) { console.log("success got data", data); });
console.log(queryURL);

$.ajax({
       url: queryURL,
       method: "GET"
     }).done(function(response) {
       var results = response.data;
       console.log(results);
       for (var i = 0; i < results.length; i++) {
       
       var showDiv = $("<div class='col-md-4'>");

       var rating = results[i].rating;
       var defaultAnimatedSrc = results[i].images.fixed_height.url;
       var staticSrc = results[i].images.fixed_height_still.url;
       var showImage = $("<img>");
       var p = $("<p>").text("Rating: " + rating);

       showImage.attr("src", staticSrc);
       showImage.addClass("showGiphy");
       showImage.attr("data-state", "still");
       showImage.attr("data-still", staticSrc);
       showImage.attr("data-animate", defaultAnimatedSrc);
       showDiv.append(p);
       showDiv.append(showImage);
       $("#gifArea").prepend(showDiv);

     }
});
}


$("#addShow").on("click", function(event) {
     event.preventDefault();
     var newShow = $("#netflixInput").val().trim();
     topics.push(newShow);
     console.log(topics);
     $("#showInput").val('');
     displayButtons();
   });


function displayButtons() {
 $("#myButtons").empty();
 for (var i = 0; i < topics.length; i++) {
   var a = $('<button class="btn btn-primary">');
   a.attr("id", "show");
   a.attr("data-search", topics[i]);
   a.text(topics[i]);
   $("#myButtons").append(a);
 }
}


displayButtons();


$(document).on("click", "#show", displayShow);


$(document).on("click", ".showGiphy", pausePlayGifs);


function pausePlayGifs() {
  var state = $(this).attr("data-state");
   if (state === "still") {
     $(this).attr("src", $(this).attr("data-animate"));
     $(this).attr("data-state", "animate");
   } else {
     $(this).attr("src", $(this).attr("data-still"));
     $(this).attr("data-state", "still");
}
}

});

