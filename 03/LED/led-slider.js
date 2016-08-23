var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  // sliderオブジェクトを作成(A0ピンをスライダー入力に設定)
  var slider = new five.Sensor("A0");
　// Ledオブジェクトを作成(11ピンをLED制御用に設定)
  var led = new five.Led(11);

  // スライダー(ボリューム)の値の応じてLEDの明るさを変更
  slider.scale([0, 255]).on("data", function() {
    led.brightness(this.value);
  });
});

