var raspi = require('raspi-io');
var five = require("johnny-five");

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  // IMUオブジェクトを作成
  // コントローラ「MPU6050」、データ取得間隔5000ms
  var imu = new five.IMU({
    controller: "MPU6050",
    freq:5000
  });

  // データを取得
  imu.on("data", function() {
    console.log("Accelerometer: %d, %d, %d", this.accelerometer.x, this.accelerometer.z, this.accelerometer.z);
    console.log("Gyro: %d, %d, %d", this.gyro.x, this.gyro.z, this.gyro.z);
    console.log("Temperature: %d", this.temperature.celsius);
  });
});