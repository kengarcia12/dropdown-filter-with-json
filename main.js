$(document).ready(function(){
  var data = {
  cars: [
       {
        "CarType": "Bmw",
        "info":{
          "year" : "2017",
          "models" : ["sedan", "s4"]
        },
        "carID": "bmw123"
        },
         {
        "CarType": "Mercedes",
        "info":{
          "year" : "2016",
          "models" : ["Maybach", "SLS"]
        },
        "carID": "merc123"
         },
         {
        "CarType": "Volvo",
        "info":{
          "year" : "2015",
          "models" : [ "XC90","C30"]
        },
        "carID": "vol123r"
          },
          {
        "CarType": "Ford",
        "info":{
          "year" : "2017",
          "models": [ "Fiesta", "Focus"]
        },
        "carID": "ford123"
          }
     ]
  };
  var year = '';
  var options = '';
  var panel = '';



  for (var i = 0; i < data.cars.length; i++) {
    var carType = data.cars[i].CarType;
    var models = '';
    var cars = data.cars[i];
    var info = cars.info;


    options += '<option value="'+ cars.carID+'">' + cars.CarType + '</option>';
    for (var j = 0; j < info.models.length; j++) {
      models += "<p> " + info.models[j] + "</p>";
    }
    panel += '<li data-type="'+ cars.carID +'" id="'+ cars.carID +'">' + "<p> " + carType + "</p>"  + "<p> " + info.year + "</p>" + models + '</li>';
  }


 $(".container").append(options);
 $(".panel ul").append(panel);
 $('select').on('change', function() {
   var mycls = $(this).val();
   $('.panel ul li:not("#'+ mycls +'")').hide()
   $('.panel ul li#' + mycls).show();
   if($(this).val() == "default"){
     $('.panel ul li').show();
   }
 })
















});
