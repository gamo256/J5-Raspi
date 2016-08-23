var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Servosオブジェクト(Servoオブジェクトのコレクション)を作成
  // P1-32,P1-33ピンをサーボモーター制御用に設定
  var servos = new five.Servos({
    pins: ['P1-32', 'P1-33'],
    pwmRange: [600, 2200]
  });

  // すべてののサーボモーターをスイープ
  servos.sweep();
});
