var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // 「PCF8591」を使用するための仮想ボードを作成
  var virtual = new five.Board.Virtual(
    new five.Expander("PCF8591")
  );

  // Thermometerオブジェクトを作成
  // PCF8591のA2(AIN2)ピンをセンサー入力に設定
  var temperature = new five.Thermometer({
    pin: "A2",
    toCelsius: function(raw) {
      return ((raw * 3.3 / 1024)-0.5) *100
    },
    board: virtual
  });

  temperature.on("change", function() {
    console.log(this.celsius + "°C", this.fahrenheit + "°F");
  });
});