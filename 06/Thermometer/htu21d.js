var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // HTU21Dを使用するためのThermometerオブジェクトを作成
  var temperature  = new five.Thermometer({
    controller: "HTU21D"
  });

  // データを取得
  temperature.on("data", function() {
    console.log("thermometer");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});