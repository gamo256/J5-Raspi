var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // BMP180を使用するためのAltimeterオブジェクトを作成
  // 基準標高を12メートルに設定
  var alt = new five.Altimeter({
    controller: "BMP180",
    elevation: 12
  });

  // データ取得
  alt.on("change", function() {
    console.log("altimeter");
    console.log("  feet         : ", this.feet);
    console.log("  meters       : ", this.meters);
    console.log("--------------------------------------");
  });
});
