var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // BMP180を使用するためのThermometerオブジェクトを作成
  var temperature = new five.Thermometer({
    controller: "BMP180"
  });

  // データ取得
  temperature.on("data", function() {
    console.log("thermometer");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});
;