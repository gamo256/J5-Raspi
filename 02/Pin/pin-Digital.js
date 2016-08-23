var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // デジタルのPinオブジェクトを作成
  var pin = new five.Pin('P1-7');

  // オブジェクト形式
  // var pin = new five.Pin({pin: 'P1-7'});

  var state = 0x00;
  this.loop(500, function() {
    pin.write(state ^= 0x01);
  });
});
