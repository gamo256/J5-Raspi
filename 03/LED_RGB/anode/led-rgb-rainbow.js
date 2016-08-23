var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  var led = new five.Led.RGB({
    pins:['P1-12', 'P1-32', 'P1-33'],
    isAnode: true
  });

  var index = 0;
  // カラーパターンの定義
  var rainbow = ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "8F00FF"];
  // 1秒間隔で色を切り替える
  this.loop(1000, function() {
    if (index + 1 === rainbow.length) {
      index = 0;
    }
    led.color(rainbow[index++]);
  });
});