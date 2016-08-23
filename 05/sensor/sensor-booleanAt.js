var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // �uPCF8591�v���g�p���邽�߂̉��z�{�[�h���쐬
  var virtual = new five.Board.Virtual(
                  new five.Expander("PCF8591")
                );

  // Sensor�I�u�W�F�N�g���쐬
  // PCF8591��A3(AIN3)�s�����Z���T�[���͂ɐݒ�
  var sensor = new five.Sensor({
                 pin: "A3",
                 board: virtual
               });

  // �^�U�̂������l��100�ɐݒ�
  sensor.booleanAt(100);

  sensor.on("change", function() {
    console.log(this.boolean);
    console.log(this.value);
  });
});