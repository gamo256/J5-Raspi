var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // Servoオブジェクトを作成
 // P1-12(GPIO18/PWM0)ピンをサーボモーター制御用に設定
  var servo = new five.Servo({
    pin: 'P1-12',
    range: [ 45, 135 ],
    pwmRange: [600, 2200]
  });

  // 45度に設定
  servo.min();

  this.wait(1000,function(){
    // 135度に設定
    servo.max();
  });
});
