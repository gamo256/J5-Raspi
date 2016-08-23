var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});


board.on("ready", function() {
  // Accelerometerオブジェクトを作成
  // コントローラ「MPU6050」
  var accelerometer = new five.Accelerometer({
    controller: "MPU6050"
  });

  // データを取得
  accelerometer.on("change", function() {
    console.log("accelerometer");
    console.log("  x            : ", this.x);
    console.log("  y            : ", this.y);
    console.log("  z            : ", this.z);
    console.log("  pitch        : ", this.pitch);
    console.log("  roll         : ", this.roll);
    console.log("  acceleration : ", this.acceleration);
    console.log("  inclination  : ", this.inclination);
    console.log("  orientation  : ", this.orientation);
    console.log("--------------------------------------");
  });
  // 1000ミリ秒後にデバイスとイベントを無効にする
  this.wait(1000, function() {
    accelerometer.disable();
  });
  // 2000ミリ秒後にデバイスとイベントを有効にする
  this.wait(2000, function() {
    accelerometer.enable();
  });
});