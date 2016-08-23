var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Buttonオブジェクトを作成
  // P1-12(GPIO18)ピンをボタン入力用に設定)
  // 「hold」イベントが発生するまでの時間を1000ミリ秒に設定
  var button = new five.Button({
    pin: 'P1-12', 
    holdtime: 1000
  });

  button.on("down", function() {
    console.log("down");
  });

  button.on("hold", function() {
    console.log("hold");
  });

  button.on("up", function() {
    console.log("up");
  });
});