var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Keypadオブジェクトを作成
  var keypad = new five.Keypad({
    controller: "MPR121_KEYPAD",
    sensitivity: {
      press: 0.10,
      release: 0.05,
    },
  });

  // キーが押されたら
  keypad.on("press", function(event) {
    // キーの値を表示
    console.log("Which button?", event.which);
  });
});
