var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});


board.on("ready", function() {
  // Servoオブジェクトを作成
  // P1-12(GPIO18/PWM0)ピンをサーボモーター制御用に設定
  var servo = new five.Servo({
    pin: 'P1-12',
    pwmRange: [600, 2200]
  });

  // 0度の位置に動かす
  servo.to(0);

  this.wait(1000,function(){
    // 2000ミリ秒かけて90度の位置まで動かす
    servo.to(90,2000);
  });

  this.wait(5000,function(){
    // 1000ミリ秒、5ステップで180度の位置まで動かす
    servo.to(180,1000,5);
  });
});
