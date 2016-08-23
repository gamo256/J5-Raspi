var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Digits�I�u�W�F�N�g���쐬
  var digits = new five.Led.Digits({
    controller: "HT16K33"
  });

  digits.print("HELLO");

  // 5�b��
  this.wait(5000, function(){
    // �\���I�t
    digits.off();
  });
  // 10�b��
  this.wait(10000, function(){
    // �\���I��
    digits.on();
  });
});
