var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // Motor�I�u�W�F�N�g���쐬
  var motor = new five.Motor({
    pins: {
      pwm: 'P1-12',
      dir: 'P1-16',
      brake: 'P1-18'
    }
  });

  // Motor�I�u�W�F�N�g��REPL�ɓo�^
  board.repl.inject({
    motor: motor
  });
  // �ustart�v�C�x���g�����o
  motor.on("start", function() {
    console.log("start", Date.now());
  });
  // �ustop�v�C�x���g�����o
  motor.on("stop", function() {
    console.log("automated stop on timer", Date.now());
  });
  // �ubrake�v�C�x���g�����o
  motor.on("brake", function() {
    console.log("automated brake on timer", Date.now());
  });
  // �uforward�v�C�x���g�����o
  motor.on("forward", function() {
    console.log("forward", Date.now());
  });
  // �ureverse�v�C�x���g�����o
  motor.on("reverse", function() {
    console.log("reverse", Date.now());
  });
  // �urelease�v�C�x���g�����o
  motor.on("release", function() {
    console.log("release", Date.now());
  });
});
