var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // 74HC595を使用するためのExpanderを作成
  var expander = new five.Expander({
    controller: "74HC595",
     pins: {
      data: 'P1-7',
      clock: 'P1-11',
      latch: 'P1-13'
     }
  });
 
  // 仮想ボードを作成
  var virtual = new five.Board.Virtual(expander);

  // Ledsオブジェクトを作成
  // 74HC595の0～7ピンをLED制御用に設定
  var leds = new five.Leds({
    pins: [0, 1, 2, 3, 4, 5, 6, 7],
    board: virtual
  });

  // すべてのLEDを点滅
　leds.blink(500);

});
