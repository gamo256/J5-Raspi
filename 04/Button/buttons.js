var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Buttonオブジェクトのコレクションを作成
  // P1-16(GPIO23)、P1-18(GPIO24)ピンをボタン入力用に設定
  var button = new five.Buttons(['P1-16', 'P1-18']);


  button[0].on("down", function() {
    console.log("buton0 down");
  });
  button[0].on("hold", function() {
    console.log("buton0 hold");
  });
  button[0].on("up", function() {
    console.log("buton0 up");
  });

  button[1].on("down", function() {
    console.log("buton1 down");
  });
  button[1].on("hold", function() {
    console.log("buton1 hold");
  });
  button[1].on("up", function() {
    console.log("buton1 up");
  });

});