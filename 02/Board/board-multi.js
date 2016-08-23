var five = require("johnny-five");

// IDが「A」と「B」の2つのボードを含むboardsオブジェクトを作成
var boards = new five.Boards(["A", "B"]);

boards.on("ready", function() {

  // ledオブジェクトを作成
  // (ボード「A」の13ピンをLED制御用に使用)
  var led = new five.Led({
    pin: 13,
    board: this.byId("A")
  });

  // ボード「A」の13ピンに接続されているLEDを点滅
  led.blink();

  // boardsオブジェクトを参照
  this.each(function(board) {
    // IDが「B」だったら
    if (board.id === "B") {
       // ledオブジェクトを作成
       // (ボード「B」の13ピンをLED制御用に使用)
      var led = new five.Led({
        pin: 13,
        board: board
      });
      // ボード「B」の13ピンに接続されているLEDを点滅
      led.blink();
    }
  });
});