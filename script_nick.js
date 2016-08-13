console.log('Hello All');
$(function() {
  var locatorapi = 'http://api.wipmania.com/jsonp';
  var weatherapi = 'http://api.openweathermap.org/data/2.5/weather';
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
      data: {lat:loclat, lon:loclon,units:'metric', APPID:apikey}
      // 'http://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}',

    }).done(function(data){

       console.log(data);

      //  Weather API output

      // country output {:editable}
       weatherAPICountry.text(data.sys.country);
      //  Weather output {:editable}
       weatherAPIWeather.text(data.weather[0].description);
      //  Weather Icon output {:editable}
       weatherAPIWeatherIcon.attr("src", "http://openweathermap.org/img/w/" + data.weather[0].icon + ".png");
      //  Temperature output {:editable}
       weatherAPITemperature.text(data.main.temp);
    });
  }

  $.ajax({
    url: locatorapi,
    dataType: 'jsonp'
  }).done(function(data) {
    weather(data.latitude, data.longitude);
  }).fail(function(request, textStatus, errThrown) {
    console.log('An error has occured during your request' + request.status + ' ' + textStatus + ' ' + errThrown);
  });



});
