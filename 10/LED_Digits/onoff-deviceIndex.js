var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Led.Digits�I�u�W�F�N�g���쐬
  var digits = new five.Led.Digits({
    pins: {
      data: 'P1-7',
      clock: 'P1-11',
      cs: 'P1-13',
    }
  });

  digits.print("HELLO");

  // 5�b��
  this.wait(5000, function(){
    // �f�o�C�X0�̕\�����I�t
    digits.off(0);
  });
  // 10�b��
  this.wait(10000, function(){
    // �f�o�C�X0�̕\�����I��
    digits.on(0);
  });
});
