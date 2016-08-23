var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // BMP180���g�p���邽�߂�Thermometer�I�u�W�F�N�g���쐬
  var temperature = new five.Thermometer({
    controller: "BMP180"
  });

  // �f�[�^�擾
  temperature.on("data", function() {
    console.log("thermometer");
    console.log("  celsius      : ", this.celsius);
    console.log("  fahrenheit   : ", this.fahrenheit);
    console.log("  kelvin       : ", this.kelvin);
    console.log("--------------------------------------");
  });
});
;