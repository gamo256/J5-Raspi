var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // PCA9685用のServoオブジェクトを作成
  var servo = new five.Servo({
    controller: "PCA9685",
    pin: 0
  });

  // サーボモータをスイープ
  servo.sweep();
});
