var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // slider�I�u�W�F�N�g���쐬(A0�s�����X���C�_�[���͂ɐݒ�)
  var slider = new five.Sensor("A0");
�@// Led�I�u�W�F�N�g���쐬(11�s����LED����p�ɐݒ�)
  var led = new five.Led(11);

  // �X���C�_�[(�{�����[��)�̒l�̉�����LED�̖��邳��ύX
  slider.scale([0, 255]).on("data", function() {
    led.brightness(this.value);
  });
});

