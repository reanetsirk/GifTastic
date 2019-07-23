// var billionairesArray = ["Jay-Z", "Oprah", "Bill Gates", "Warren Buffett", "Mark Zuckerberg", ]

// $(document).ready(function () {
//     for (var i = 0; i < 4; i++) {
//         $("#billionaires-button").append("<button type='button' onclick='searchGif(\"" + billionairesArray[i] + "\")' class='btn btn-primary' value=' " + billionairesArray[i] + "'>" + billionairesArray[i] + " </button>");
//     }
// });
// function billionairesButtonClicked () {
//     var userInput = $('#billionaires-input').val();
//     searchGif(userInput);
    
// }
// function submitButtonClicked () {
//     var userInput = $('#billionaires-input').val();

//     if (userInput) {
//         $('#billionaires-button').append("<button typ='button' onclick='searchGif(\"" + userInput +"\")' class='btn btn-primary' value=' " + userInput +"'>" + userInput + "</button>");
//     }
// }
// var billionaires = $(this).attr("data-person");

// var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
//         billionaires + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

// function searchGif (gifName) {
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     })
//     .then(function(response) {
//         displayGif(response);
//     })
// }
// function displayGif (response) {
//     ('#billionaires').empty();
//     for(var i = 0; i < response.data.length; i++) {

//     }
// }...........................................................

$(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
      $(this).attr("title", "Click to stop animation!");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
      $(this).attr("title", "Click to start animation!");
    }
  });
  
  // Calling the renderButtons function to display the intial buttons
  renderButtons();
  Collapse
  
  function renderButtons() {
    $("#buttons-view").empty();
  
    for (var i = 0; i < topics.length; i++) {
      var a = $('<button type="button" class="btn btn-primary">');
      a.addClass("topicClass");
      a.attr("data-name", topics[i]);
      a.text(topics[i]);
      $("#buttons-view").append(a);
    }
  }
  $(document).on("click", ".topicClass", function() {
    var topicSelected = $(this).attr("data-name");
    $("#topic-view").html("");
    var queryURL =
      "https://api.giphy.com/v1/gifs/search?q=" +
      topicSelected +
      "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";
  
    $.ajax({
      url: queryURL,
      method: "GET"
    }).then(function(response) {
      var results = response.data;
  
      for (var i = 0; i < results.length; i++) {
        var topicDiv = $("<div>");
        var p = $("<p>");
        p.text("Rating: " + results[i].rating);
        var topicImage = $(
          '<img data-toggle="tooltip" title="Click to stop animation!" class="gif">'
        );
        topicImage.attr("src", results[i].images.fixed_height.url);
        topicImage.attr("data-animate", results[i].images.fixed_height.url);
        topicImage.attr("data-still", results[i].images.fixed_height_still.url);
        topicImage.attr("data-state", "still");
  
        topicDiv.append(p);
        topicDiv.append(topicImage);
        $("#topic-view").prepend(topicDiv);
      }
    });
  });
  
  $(document).on("click", ".gif", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
      $(this).attr("src", $(this).attr("data-animate"));
      $(this).attr("data-state", "animate");
      $(this).attr("title", "Click to stop animation!");
    } else {
      $(this).attr("src", $(this).attr("data-still"));
      $(this).attr("data-state", "still");
      $(this).attr("title", "Click to start animation!");
    }
  });
  
 