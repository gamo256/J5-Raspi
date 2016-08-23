var raspi = require('raspi-io');
var five = require("johnny-five");

// IDが「A」と「B」の2つのボードを含むBoardsオブジェクトを作成
var boards = new five.Boards([
  {id: "A", io: new raspi()},
  {id: "B", io: new raspi()}
]);

// ボードの準備ができたら
boards.on("ready", function(){
  // Boardsオブジェクトの各ボードを順に参照
  this.each(function(board) {
    // 各ボードのP1-7ピンに接続されているLEDを点滅
    new five.Led({pin: 'P1-7', board: board}).strobe();
  });
});
