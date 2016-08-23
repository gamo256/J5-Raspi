var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Ledオブジェクトを作成
  // P1-12(GPIO18/PWM0)ピンをLED制御用に設定
  var led = new five.Led('P1-12');

  // オプションのアニメーション設定でLEDを点灯
  led.pulse({
    easing: "linear",
    duration: 3000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 10, 0, 50, 0, 255],
    onstop: function() {
      console.log("Animation stopped");
    }
  });

  // 12秒(12000ミリ秒)後にパルス出力を停止し、LEDをオフ(消灯)
  this.wait(12000, function() {
    led.stop().off();
  });
});

