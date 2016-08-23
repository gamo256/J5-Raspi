var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Digitsオブジェクトを作成
  var digits = new five.Led.Digits({
    pins: {
      data: 'P1-7',
      clock: 'P1-11',
      cs: 'P1-13',
    }
  });

  digits.print("HELLO");

  // 5秒後
  this.wait(5000, function(){
    // すべてのLED表示器の表示をクリア
    digits.clear();
  });
});
