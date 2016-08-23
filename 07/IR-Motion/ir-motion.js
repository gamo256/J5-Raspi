var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {

  // Motionオブジェクトを作成
  // P1-16(GPIO23) ピンをモーションセンサーの検出用に設定
  var motion = new five.Motion('P1-16');

  // 「calibrated」イベント: モーションセンサーの校正完了時に発生
  motion.on("calibrated", function() {
    console.log("calibrated", Date.now());
  });

  // 「motionstart」イベント:動きを検出したときに発生
  motion.on("motionstart", function() {
    console.log("motionstart", Date.now());
  });

  // 「motionend」イベント:動きが停止したときに発生
  motion.on("motionend", function() {
    console.log("motionend", Date.now());
  });
});