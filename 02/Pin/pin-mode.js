var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Pinオブジェクトを作成
  // P1-12(GPIO18/PWM0)ピンをPWM出力に設定
  var pin = new five.Pin({
    pin: 'P1-12',
    mode: five.Pin.PWM,
  });

  // pinオブジェクトの状態を確認
  pin.query(function(state) {
    console.log(state);
  });
});