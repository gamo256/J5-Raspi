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

  // 180度に設定
  servo.max();
  
  this.wait(1000, function(){
    // 90度に設定
    servo.center();
  });

  this.wait(2000, function(){
    servo.max();
  });

  this.wait(3000, function(){
    // 2000ミリ秒かけてセンターに設定
    servo.center (2000);
  });

  this.wait(8000, function(){
    servo.max();
  });

  this.wait(10000, function(){
    // 1000ミリ秒、5ステップでセンターに設定
    servo.center(1000,5);
  });
});
