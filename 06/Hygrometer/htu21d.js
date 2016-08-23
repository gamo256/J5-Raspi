var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  //HTU21Dを使用するためのHygrometerオブジェクトを作成
  var hygrometer = new five.Hygrometer({
    controller: "HTU21D"
  });

  // データを取得
  hygrometer.on("data", function() {
    // 湿度を表示
    console.log(this.relativeHumidity + " %");
  });
});