var five = require("johnny-five");

// IDが「A」と「B」の2つのボードを含むboardsオブジェクトを作成
var boards = new five.Boards([
  { id: "A", port: "COM8" },
  { id: "B", port: "COM9" }
]);

// ボードの準備ができたら
board.on("ready", function()
  // boardsオブジェクトの各ボードを順に参照
  this.each(function(board) {
    // 各ボードの13ピンに接続されているLEDを点滅
     new five.Led({pin: 13, board: board}).strobe();
  });
});
