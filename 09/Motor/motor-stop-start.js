var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motor�I�u�W�F�N�g���쐬
  var motor = new five.Motor(['P1-12', 'P1-16']);

  // �����̃X�s�[�h�Ő��]
  motor.forward(128);

  // 5�b��
  this.wait(5000, function(){
    // ��~
    motor.stop()
  });

  // 10�b��
  this.wait(10000, function(){
    // �����̃X�s�[�h�Ő��]���ĊJ
    motor.start();
  });

  // 15�b��
  this.wait(15000, function(){
    // �t���X�s�[�h�Ő��]
    motor.start(255);
  });
});
