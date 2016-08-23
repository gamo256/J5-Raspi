var five = require("johnny-five");

// 通信用のシリアルポートを明示してboardオブジェクトを作成

// Windows
// 「*」はシステム固有の番号
new five.Board({ port: "COM*" });

// OSX
// new five.Board({ port: "/dev/tty.usbmodem****" });

// Linux
// new five.Board({ port: "/dev/ttyUSB*" });

// ボードの準備ができたら
board.on("ready", function() {
  // 「Ready」と表示
  console.log("Ready!");
});