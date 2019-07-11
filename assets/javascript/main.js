var billionairesArray = ["Jay-Z", "Oprah", "Bill Gates", "Warren Buffett", "Mark Zuckerberg", ]

$(document).ready(function () {
    for (var i = 0; i < 4; i++) {
        $("#billionaires-button").append("<button type='button' onclick='searchGif(\"" + billionairesArray[i] + "\")' class='btn btn-primary' value=' " + billionairesArray[i] + "'>" + billionairesArray[i] + " </button>");
    }
});
function billionairesButtonClicked () {
    var userInput = $('#billionaires-input').val();
    searchGif(userInput);
    
}
function submitButtonClicked () {
    var userInput = $('#billionaires-input').val();

    if (userInput) {
        $('#billionaires-button').append("<button typ='button' onclick='searchGif(\"" + userInput +"\")' class='btn btn-primary' value=' " + userInput +"'>" + userInput + "</button>");
    }
}
var billionaires = $(this).attr("data-person");

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        billionaires + "&api_key=BkaUZZWcFij6J7AoQj3WtPb1R2p9O6V9&limit=10";

function searchGif (gifName) {
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        displayGif(response);
    })
}
function displayGif (response) {
    ('#billionaires').empty();
    for(var i = 0; i < response.data.length; i++) {

    }
}

