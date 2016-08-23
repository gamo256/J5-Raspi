var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  //HTU21D���g�p���邽�߂�Hygrometer�I�u�W�F�N�g���쐬
  var hygrometer = new five.Hygrometer({
    controller: "HTU21D"
  });

  // �f�[�^���擾
  hygrometer.on("data", function() {
    // ���x��\��
    console.log(this.relativeHumidity + " %");
  });
});