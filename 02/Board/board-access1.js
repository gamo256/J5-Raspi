var raspi = require('raspi-io');
var five = require("johnny-five");

// IDが「A」と「B」の2つのボードを含むBoardsオブジェクトを作成
var boards = new five.Boards([
  {id: "A", io: new raspi()},
  {id: "B", io: new raspi()}
]);

boards.on("ready", function() {
  // Boardsオブジェクトを参照
  this.each(function(board) {
    // IDが「B」だったら
    if (board.id === "B") {
       // ledオブジェクトを作成
       // (ボード「B」のP1-7ピンをLED制御用に使用)
      var led = new five.Led({
        pin: 'P1-7',
        board: board
      });
      // ボード「B」のP1-7ピンに接続されているLEDを点滅
      led.blink();
    }
  });
});
