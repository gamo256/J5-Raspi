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
  var sensor = new five.Sensor({
                 pin: "A3",
                 board: virtual
               });

  // データが50～150範囲内ならメッセージを表示
  sensor.within([50, 150], function() {
    console.log("In a range");
  });
});