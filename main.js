$(document).ready(function(){
  var data = {
  cars: [
       {
        "CarType": "Bmw",
        "info":[{
          "year" : "2017",
          "model": [{
            "mType" : "sedan",
            "mType2" : "s4"
          }]
        }],
        "carID": "bmw123"
        },
         {
        "CarType": "Mercedes",
        "info":[{
          "year" : "2016",
          "model": [{
            "mType" : "Maybach",
            "mType2" : "SLS"
          }]
        }],
        "carID": "merc123"
         },
         {
        "CarType": "Volvo",
        "info":[{
          "year" : "2015",
          "model": [{
            "mType" : "XC90",
            "mType2" : "C30"
          }]
        }],
        "carID": "vol123r"
          },
          {
        "CarType": "Ford",
        "info":[{
          "year" : "2017",
          "model": [{
            "mType" : "Fiesta",
            "mType2" : "Focus"
          }]
        }],
        "carID": "ford123"
          }
     ]
  };
  var option, li, cType, info, year;
  for(var x in data.cars){
    cType   = data.cars[x].CarType;
    info    = data.cars[x].info;
    for(var y in data.cars[x].info){
        year = data.cars[x].info[y].year;
        console.log(year);
    }
    option  = $("<option class='cars' />").text(cType);
    li  = $("<li class='cars' />").html(cType + "<br>" + "<span class='yr'>" + year + "</span>");
    $(".container").append(option);
    $(".panel ul").append(li);

}



});
