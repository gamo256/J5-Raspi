var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Matrix�I�u�W�F�N�g���쐬
  var matrix = new five.Led.Matrix({
    controller: "HT16K33"
  });

  matrix.draw("G");

  // 5�b��
  this.wait(5000, function(){
    // �\���I�t
    matrix.off();
  });
  // 10�b��
  this.wait(10000, function(){
    // �\���I��
    matrix.on();
  });
});