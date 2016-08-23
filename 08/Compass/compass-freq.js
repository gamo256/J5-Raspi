var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Compassオブジェクトを作成
  // コントローラ「HMC5883L」
  var compass = new five.Compass({
    controller: "HMC5883L",
    freq: 5000
  });

  // データ取得
  compass.on("data", function() {
    console.log("  heading : ", Math.floor(this.heading));
    console.log("  bearing : ", this.bearing.name);
    console.log("--------------------------------------");
  });
});