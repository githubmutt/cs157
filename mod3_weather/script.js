$(document).ready(loader)

function loader(){


  $("#getWeatherBtn").on("click" , function(){

    
    $(this).unbind('click')
    let zip = $('#zipCode').val()
    console.log("LOG: " + zip )
   // zip = "94040"    

   try{
    getWeather(zip)

    }catch(e){
         console.log("ERROR: " + e )
         alert("error")

   }
})

}

function getWeather(zipcode) {



 let location = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=000c53231273df2ac9323e70eee830d4`


 location = `https://api.openweathermap.org/data/2.5/weather?zip=${zipcode}&appid=000c53231273df2ac9323e70eee830d4&units=imperial`


 $.getJSON( location  , function(data){

     let info = JSON.stringify( data )
     const obj = JSON.parse( info)

     console.log(obj)

     

     let humidity = obj.main["humidity"]
     let name = obj.name

     let weather = obj.weather[0]["main"]
     let icon = obj.weather[0]["icon"]

     let pressure = obj.main["pressure"]
     let temp_current = obj.main["temp"]
     let temp_min= obj.main["temp_min"] 
     let temp_max = obj.main["temp_max"]
     let wind_speed = obj.wind["speed"]


     console.log("WEATHER:  " + weather )
     console.log("ICON:     " + icon)

     console.log("HUMIDITY: " + humidity)
     console.log("TEMP CURRENT " + temp_current)

     console.log("TEMP MAX " + temp_max)
     console.log("TEMP MIN " +  temp_min)
     console.log("NAME    " + name )
     console.log("HUMIDITY " + humidity )


     

     $("#currentTemp").text(Math.round(temp_current))


     $("#minTemp").text(Math.round(temp_min))
     $("#maxTemp").text(Math.round(temp_max))

     $("#locationName").text(name)
     $("#condition").text(weather)

     icon = "http://openweathermap.org/img/w/" + icon + ".png"
     $("#weatherIcon").attr("src" , icon)
     $("#humidity").text(humidity)
  
     $("#pressure").text( pressure )
     $("#windSpeed").text(wind_speed)

  }
  
  ).fail(function(){

    alert("zipcode not found")

  })

}