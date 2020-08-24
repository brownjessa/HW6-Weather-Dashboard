$(document).ready(function () {
    $("#search-button").on("click", function() {
        var searchValue = $("#search-value").val();
        $("#search-value").val("");  
        searchWeather(searchValue);
      }); 
      $(".history").on("click", "li", function() {
        searchWeather($(this).text());
      });
      function makeRow(text) {
        var li = $("<li>").addClass("list-group-item list-group-item-action").text(text);
        $(".history").append(li);
      }
      function searchWeather(searchValue) {
        $.ajax({
          type: "GET",
          url: "http://api.openweathermap.org/data/2.5/weather?q=" + searchValue + "&appid=01355dfb66b836e497ff5fde3d07af2e&units=imperial",
          dataType: "json",
          success: function(data) {
            // create history link for this search
            if (history.indexOf(searchValue) === -1) {
              history.push(searchValue);
              window.localStorage.setItem("history", JSON.stringify(history));
        
              makeRow(searchValue);
            }