var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // 「PCF8575」の仮想ボードを作成
  var virtual = new five.Board.Virtual(
    new five.Expander("PCF8575")
  );

  // Ledオブジェクトを作成
  // 「PCF8575」の0ピンをLEDを接続
  var led = new five.Led({
    board: virtual,
    pin: 0,
  });

  // Buttonオブジェクトを作成
  // 「PCF8575」の17ピンにボタンを接続
  var button = new five.Button({
    board: virtual,
    pin: 17,
  });

  button.on("press", function() {
    led.on();
  });

  button.on("release", function() {
    led.off();
  });
});