var raspi = require('raspi-io');
var five = require('johnny-five');
var board = new five.Board({
  io: new raspi()
});

board.on('ready', function() {

  // P1(ピンヘッダー1)のピン7(GPIO4)上に
  // LEDを作成して点滅
  (new five.Led('P1-7')).strobe();

});