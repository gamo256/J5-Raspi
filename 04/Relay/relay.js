var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Relayオブジェクトを作成
  // P1-16(GPIO23)ピンをリレー制御用に設定
  var relay = new five.Relay('P1-16');

  // RelayオブジェクトをREPLに登録
  this.repl.inject({
    relay: relays
  });
});
