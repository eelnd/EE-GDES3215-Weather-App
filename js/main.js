/* ---------------------------------------------------------
   Connect to Weather API to access weather information
   --------------------------------------------------------- */

  function weatherBalloon() {
    fetch('https://api.weatherapi.com/v1/forecast.json?key=5499e7ba0a254a3d986172508231110&q=kahuku, Hawaii&days=7&aqi=no&alerts=no')  
    .then(function(resp) { return resp.json() }) // Convert data to json
    .then(function(data) {
      drawWeather(data);
      console.log(data);
    })
    .catch(function() {
      // catch any errors
    });
  }

/* ---------------------------------------------------------
   Display weather information
   --------------------------------------------------------- */

  function drawWeather( d ) {

    $('.current .current-box h2').html( makeRoundNumber(d.current.temp_f));
    $('.current .current-box .sr p').html(d.forecast.forecastday[0].astro.sunrise);
    $('.current .current-box .high p').html( makeRoundNumber(d.forecast.forecastday[0].day.maxtemp_f));
    $('.current .current-box .current-icon p').html(d.current.condition.text);
    // changeTheme(d.current.condition.text);


    /*forecast for the next six days*/
    $('.extended .day').html(displayDay(0));
    $('.extended .icon').html(printGraphic(d.forecast.forecastday[0].day.condition.text));
    $('.extended .high').html( makeRoundNumber(d.forecast.forecastday[0].day.maxtemp_f));
    $('.extended .low').html( makeRoundNumber(d.forecast.forecastday[0].day.mintemp_f));

    $('.extended li:nth-child(1) .day').html(displayDay(1));
    $('.extended li:nth-child(1) .icon').html(printGraphic(d.forecast.forecastday[1].day.condition.text));
    $('.extended li:nth-child(1) .high').html( makeRoundNumber(d.forecast.forecastday[1].day.maxtemp_f));
    $('.extended li:nth-child(1) .low').html( makeRoundNumber(d.forecast.forecastday[1].day.mintemp_f));

    $('.extended li:nth-child(2) .day').html(displayDay(2));
    $('.extended li:nth-child(2) .icon').html(printGraphic(d.forecast.forecastday[2].day.condition.text));
    $('.extended li:nth-child(2) .high').html( makeRoundNumber(d.forecast.forecastday[2].day.maxtemp_f));
    $('.extended li:nth-child(2) .low').html( makeRoundNumber(d.forecast.forecastday[2].day.mintemp_f));

    // $('.extended li:nth-child(3) .day').html(displayDay(3));
    // $('.extended li:nth-child(3) .icon').html(printGraphic(d.forecast.forecastday[3].day.condition.text));
    // $('.extended li:nth-child(3) .high').html( makeRoundNumber(d.forecast.forecastday[3].day.maxtemp_f));
    // $('.extended li:nth-child(3) .low').html( makeRoundNumber(d.forecast.forecastday[3].day.mintemp_f));

    // $('.extended li:nth-child(4) .day').html(displayDay(4));
    // $('.extended li:nth-child(4) .icon').html(printGraphic(d.forecast.forecastday[4].day.condition.text));
    // $('.extended li:nth-child(4) .high').html( makeRoundNumber(d.forecast.forecastday[4].day.maxtemp_f));
    // $('.extended li:nth-child(4) .low').html( makeRoundNumber(d.forecast.forecastday[4].day.mintemp_f));

    // $('.extended li:nth-child(5) .day').html(displayDay(5));
    // $('.extended li:nth-child(5) .icon').html(printGraphic(d.forecast.forecastday[5].day.condition.text));
    // $('.extended li:nth-child(5) .high').html( makeRoundNumber(d.forecast.forecastday[5].day.maxtemp_f));
    // $('.extended li:nth-child(5) .low').html( makeRoundNumber(d.forecast.forecastday[5].day.mintemp_f));

    // $('.extended li:nth-child(6) .day').html(displayDay(6));
    // $('.extended li:nth-child(6) .icon').html(printGraphic(d.forecast.forecastday[6].day.condition.text));
    // $('.extended li:nth-child(6) .high').html( makeRoundNumber(d.forecast.forecastday[6].day.maxtemp_f));
    // $('.extended li:nth-child(6) .low').html( makeRoundNumber(d.forecast.forecastday[6].day.mintemp_f));

    /*wind forecast*/
    $('.wind-data li .wd-spd').html( makeRoundNumber(d.forecast.forecastday[0].day.maxwind_mph));
    $('.wind-data li .wd-day').html(displayDay(0));

    $('.wind-data li:nth-child(1) .wd-spd').html( makeRoundNumber(d.forecast.forecastday[1].day.maxwind_mph));
    $('.wind-data li:nth-child(1) .wd-day').html(displayDay(1));

    $('.wind-data li:nth-child(2) .wd-spd').html( makeRoundNumber(d.forecast.forecastday[2].day.maxwind_mph));
    $('.wind-data li:nth-child(2) .wd-day').html(displayDay(2));

    // $('.wind-data li:nth-child(3) .wd-spd').html( makeRoundNumber(d.forecast.forecastday[3].day.maxwind_mph));
    // $('.wind-data li:nth-child(3) .wd-day').html(displayDay(3));

    // $('.wind-data li:nth-child(4) .wd-spd').html( makeRoundNumber(d.forecast.forecastday[4].day.maxwind_mph));
    // $('.wind-data li:nth-child(4) .wd-day').html(displayDay(4));

    // $('.wind-data li:nth-child(5) .wd-spd').html( makeRoundNumber(d.forecast.forecastday[5].day.maxwind_mph));
    // $('.wind-data li:nth-child(5) .wd-day').html(displayDay(5));

    // $('.wind-data li:nth-child(6) .wd-spd').html( makeRoundNumber(d.forecast.forecastday[6].day.maxwind_mph));
    // $('.wind-data li:nth-child(6) .wd-day').html(displayDay(6));


    // $('.wind-forecast .avg-wind-spd .wd-avg').html( makeRoundNumber(d.current.temp_f));
  }

/* --------------------------------------------------
   Event to get weather information when page loads
   -------------------------------------------------- */
  
  window.onload = function() {
    weatherBalloon();
  }

/* -----------------------------------------------------------
   Event to enter the main content display from the Home page
   ----------------------------------------------------------- */
   $('.cover button').click(function(){
    $('.cover').addClass('slide');
  })
  /* your code goes here */