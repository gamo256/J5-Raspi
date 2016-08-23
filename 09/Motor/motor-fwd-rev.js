var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motorオブジェクトを作成
  var motor = new five.Motor(['P1-12', 'P1-16']);

  // 半分のスピードで正転
  motor.forward(128);

  // 5秒後
  this.wait(5000, function(){
    // フルスピードで逆転
    motor.rev(255);
  });
});
