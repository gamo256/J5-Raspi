var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Buttonオブジェクトを作成
  // P1-12(GPIO18)ピンをボタン入力用に設定)
  // アクティブLowに設定し、ボタン入力ピンをプルアップ
  var button = new five.Button({
    pin: 'P1-12', 
    invert: true,
    isPullup: true
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