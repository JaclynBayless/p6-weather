$(document).ready(function() {

  $.simpleWeather({

    location: '98830',

    success: function(weather) {

      // Get & Store Weather Data
	    // html = '<h2><i class="icon-'+weather.code+'"></i> '+weather.temp+'&deg;'+weather.units.temp+'</h2>';
	    var temp, todayHi, todayLo, cityAndState; 

      temp = weather.temp + '<span>&deg;F</span>';
      todayHi = weather.high + '<span>&deg;</span>';
      todayLo = weather.low + '<span>&deg;</span>';
      cityAndState = weather.city + ', ' + weather.region;

      console.log(temp);

      //html += '<ul><li>'+weather.city+', '+weather.region+'</li>';
	    //html += '<li class="currently">'+weather.currently+'</li>';
	    //html += '<li>'+weather.wind.direction+' '+weather.wind.speed+' '+weather.units.speed+'</li></ul>';
	  
		// Display Weather  
	    $('.temp').html(temp);
      $('.todayHi').html(todayHi);
      $('.todayLo').html(todayLo);
      $('.cityAndState').html(cityAndState);
    },

    error: function(error) {
    	$("#weather").html('<p>'+error+'</p>');
    }

  });

  console.log('Page Loaded. Lets Do this!');

});
