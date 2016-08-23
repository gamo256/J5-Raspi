var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // BMP180���g�p���邽�߂�Barometer�I�u�W�F�N�g���쐬
  var barometer = new five.Barometer({
    controller: "BMP180"
  });

  // �f�[�^�擾
  barometer.on("data", function() {
    console.log("barometer");
    console.log("  pressure     : ", this.pressure);
    console.log("--------------------------------------");
  });
});
;