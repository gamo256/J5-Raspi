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

  // Sensorオブジェクトを作成
  // PCF8591のA3(AIN3)ピンをセンサー入力に設定
  // しきい値を100に設定
  var sensor = new five.Sensor({
                 pin: "A3",
                 board: virtual,
                 threshold: 100
               });

  // センサー値を取得
  sensor.on("change", function() {
    console.log("value  :" + this.value);
  });
})