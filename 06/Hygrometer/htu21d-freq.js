var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  //HTU21Dを使用するためのHygrometerオブジェクトを作成
  // データの取得間隔を1000ミリ秒に設定
  var hygrometer = new five.Hygrometer({
    controller: "HTU21D",
    freq: 1000
  });

  // データを取得
  hygrometer.on("data", function() {
    // 湿度を表示
    console.log(this.relativeHumidity + " %");
  });
});