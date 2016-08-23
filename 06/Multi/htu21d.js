var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});


board.on("ready", function() {
  // HTU21Dを使用するためのMultiオブジェクトを作成
  var multi = new five.Multi({
    controller: "HTU21D"
  });

  // データを取得
  multi.on("change", function() {
    console.log("thermometer");
    console.log("  celsius      : ", this.thermometer.celsius);
    console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
    console.log("  kelvin       : ", this.thermometer.kelvin);
    console.log("--------------------------------------");

    console.log("relativeHumidity");
    console.log("  humidity     : ", this.hygrometer.relativeHumidity);
    console.log("--------------------------------------");
  });
});