var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motorオブジェクトを作成
  var motor = new five.Motor({
    pins: {
      pwm: 'P1-12',
      dir: 'P1-16',
      brake: 'P1-18'
    }
  });

  // MotorオブジェクトをREPLに登録
  board.repl.inject({
    motor: motor
  });
  // 「start」イベントを検出
  motor.on("start", function() {
    console.log("start", Date.now());
  });
  // 「stop」イベントを検出
  motor.on("stop", function() {
    console.log("automated stop on timer", Date.now());
  });
  // 「brake」イベントを検出
  motor.on("brake", function() {
    console.log("automated brake on timer", Date.now());
  });
  // 「forward」イベントを検出
  motor.on("forward", function() {
    console.log("forward", Date.now());
  });
  // 「reverse」イベントを検出
  motor.on("reverse", function() {
    console.log("reverse", Date.now());
  });
  // 「release」イベントを検出
  motor.on("release", function() {
    console.log("release", Date.now());
  });
});
