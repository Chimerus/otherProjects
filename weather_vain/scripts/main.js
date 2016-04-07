"use strict";

(function () {
  
$('.solo').click(function(e){
  e.preventDefault()

  var whattofind = $('.pure-input-rounded').val()
  // ENV var, replace with your openweather api key
  var apikey = ENV['OPENWEATHER_KEY']

  $.ajax({
    url: "https://api.openweathermap.org/data/2.5/find?q="+whattofind+"&units=imperial&appid="+apikey,
    type: "GET",
    error: function(){
      alert('ERROR')
    },
    success: function(data){
      var cityname = data.list[0].name
      var temp = data.list[0].main.temp
      var dt = moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#forecast").text ("In "+cityname+" it's "+temp+"° Farenheit")
      $(".date").text (dt)
      $("#fore").text ("Today's Temperature")
    },
  })

})

$('.fiver').click(function(e){
  e.preventDefault()
  var whattofind = $('.pure-input-rounded').val()
$.ajax({
    url: "http://api.openweathermap.org/data/2.5/forecast/daily?q="+whattofind+"&mode=json&units=imperial&cnt=5&appid="+apikey,
    type: "GET",
    error: function(){
      alert('ERROR')
    },
    success: function(data){
      var forecast = data.list
      var city = data.city.name
      var day1 = forecast[0].temp.day + "° Farenheit"
      var day2 = forecast[1].temp.day + "° Farenheit"
      var day3 = forecast[2].temp.day + "° Farenheit"
      var day4 = forecast[3].temp.day + "° Farenheit"
      var day5 = forecast[4].temp.day + "° Farenheit"
      var dt = moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#title").text("5 Day Forecast")
      $("#fivefore").html("<h2>The forecast for "+city+" is:</h2><br>Today: "+day1+"<br>Tommorow: "+day2+"<br>Day 3: "+ day3+"<br>Day 4: "+day4+"<br>Day 5: "+day5)
      $(".date").text (dt)
    },
  })
})

})();