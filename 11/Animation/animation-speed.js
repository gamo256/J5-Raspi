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

  // Animationオブジェクトを作成
  var animation = new five.Animation(servo);

  // アニメーションの設定
  animation.enqueue({
    cuePoints: [0, 0.25, 0.75 , 1],
    keyFrames:[90, { value: 0, easing: "outQuad" }, 90,  { value: 180, easing: "outQuad" }],
    loop: true
  });

  // 5秒後
  this.wait(5000,function(){
    // スピードを50％(0.5)に設定
    animation.speed(0.5);
  });
});