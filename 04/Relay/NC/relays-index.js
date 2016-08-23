var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});
board.on("ready", function() {
  // Relaysオブジェクトのコレクションを作成
  // P1-16(GPIO23)、P1-18(GPIO24)ピンをリレー制御用に設定
  var relays =new five.Relays([{
    pin: 'P1-16',
    type: "NC",
     }, {
    pin: 'P1-18',
    type: "NC",
  }]);

  // インデックス「0」(P1-16)のリレー回路を閉じる
  relays[0].close();
});