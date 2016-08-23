var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motorsオブジェクト(Motorオブジェクトのコレクション)を作成
  var motors =new five.Motors([
    {pins: { pwm: 'P1-32', dir: 'P1-36'}},
    {pins: { pwm: 'P1-33', dir: 'P1-29'}}
  ]);

  // すべてのモーターをフルスピードで正転
  motors.forward(255);
});
