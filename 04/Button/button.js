var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});


board.on("ready", function() {
  // Buttonオブジェクトを作成
  // P1-12(GPIO18)ピンをボタン入力用に設定)
  var button = new five.Button('P1-12');

  // 「down」イベント:ボタンが押されたとき(オン)に発生
  button.on("down", function() {
    console.log("down");
});

  // 「hold」イベント: 一定時間(既定値は500ms)ボタンが押され続けたときに発生
  button.on("hold", function() {
    console.log("hold");
  });

  // 「up」イベント： ボタンが解放されたとき(オンからオフ時)に発生
  button.on("up", function() {
    console.log("up");
  });
});
