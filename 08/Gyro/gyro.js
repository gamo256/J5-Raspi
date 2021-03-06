var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Gyroオブジェクトを作成
  var gyro = new five.Gyro({
    controller: "MPU6050"
  });

  // データ取得
  gyro.on("change", function() {
    console.log("gyro");
    console.log("  x            : ", this.x);
    console.log("  y            : ", this.y);
    console.log("  z            : ", this.z);
    console.log("  pitch        : ", this.pitch);
    console.log("  roll         : ", this.roll);
    console.log("  yaw          : ", this.yaw);
    console.log("  rate         : ", this.rate);
    console.log("  isCalibrated : ", this.isCalibrated);
    console.log("--------------------------------------");
  });
});