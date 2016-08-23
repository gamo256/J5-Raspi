var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});


board.on("ready", function() {
  // HTU21D���g�p���邽�߂�Multi�I�u�W�F�N�g���쐬
  var multi = new five.Multi({
    controller: "HTU21D"
  });

  // �f�[�^���擾
  multi.on("change", function() {
    console.log("thermometer");
    console.log("  celsius      : ", this.thermometer.celsius);
    console.log("  fahrenheit   : ", this.thermometer.fahrenheit);
    console.log("  kelvin       : ", this.thermometer.kelvin);
    console.log("--------------------------------------");

    console.log("relativeHumidity");
    console.log("  humidity     : ", this.hygrometer.relativeHumidity);
    console.log("--------------------------------------");
  });
});