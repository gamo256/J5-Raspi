var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  var led = new five.Led('P1-12');

  // オプションのアニメーション設定でLEDをフェードイン
  led.fade({
    easing: "linear",
    duration: 1000,
    cuePoints: [0, 0.2, 0.4, 0.6, 0.8, 1],
    keyFrames: [0, 250, 25, 150, 100, 125],
    onstop: function() {
      console.log("Animation stopped");
    }
  });

  // 2秒(2000ミリ秒)後TにLEDをフェードアウト
  this.wait(2000, function() {
    led.fadeOut();
  });
});
