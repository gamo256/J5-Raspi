var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Relayオブジェクトを作成(10ピンをリレー制御用に設定)
  var relay = new five.Relay({
    pin: 'P1-16',
    type: "NC",
  });

  // RelayオブジェクトをREPLに登録
  this.repl.inject({
    relay: relay
  });
});