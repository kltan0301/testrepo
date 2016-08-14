console.log('Hello All');
$(function() {

  var $request_weather = $('#request-weather');
  var $output_weather = $('#output_weather');


  // var locatorapi = 'https://api.wipmania.com/jsonp';
  // var weatherapi = 'https://api.openweathermap.org/data/2.5/weather';
  var weatherapi = "https://community-open-weather-map.p.mashape.com/weather";
  var apikey = '25c1e185ccfb414ffc4061313e567ab2';


  //Weather API Info {:editable}
  var weatherAPICountry = $("#country");
  var weatherAPIWeather = $("#currentweather");
  var weatherAPIWeatherIcon = $("#weather-icon");
  var weatherAPITemperature = $("#temperature");

  function weather(loclat, loclon) {
    $.ajax({

      url: weatherapi,
      dataType: 'json',
      headers: {'X-Mashape-Key': 'ZZdWwwpLxlmsh4gztf1wv4yL6pLBp1Km2bVjsngmxiEKPQ39vr'},
      data: {lat:loclat, lon:loclon, units:'metric', APPID:apikey, lang:'en'}
      // 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}',

    }).done(function(data){

       console.log(data);

      //  Weather API output

      // country output {:editable}
       weatherAPICountry.text(data.sys.country);
      //  Weather output {:editable}
       weatherAPIWeather.text(data.weather[0].description);
      //  Weather Icon output {:editable}
       weatherAPIWeatherIcon.attr("src", "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      //  Temperature output {:editable}
       weatherAPITemperature.text(data.main.temp.toFixed(1) + "Celcius");
    });
  }

  // $.ajax({
  //   url: locatorapi,
  //   dataType: 'jsonp'
  // }).done(function(data) {
  //   weather(data.latitude, data.longitude);
  // }).fail(function(request, textStatus, errThrown) {
  //   console.log('An error has occured during your request' + request.status + ' ' + textStatus + ' ' + errThrown);
  // });
  navigator.geolocation.getCurrentPosition(function(position) {
    weather(position.coords.latitude, position.coords.longitude);
  });


});
