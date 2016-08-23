// i2cConfig([milliseconds])
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
});


// i2cWrite(address, arrayOfBytes)
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
  this.i2cWrite(0x01, [0x02, 0x03]);
});


// i2cWrite(address, register, arrayOfBytes)
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
  this.i2cWrite(0x01, 0x00, [0x02, 0x03]);
});


// i2cWriteReg(address, register, byte)
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
  this.i2cWrite(0x01, 0x00, 0x7e);
});


// i2cRead(address, bytesToRead, handler(arrayOfBytes))
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
  this.i2cRead(0x01, 0x02, 6, function(bytes) {
    console.log("Bytes read: ", bytes);
  });
});


// i2cRead(address, register, bytesToRead, handler(arrayOfBytes))
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
  this.i2cRead(0x01, 0x00, 6, function(bytes) {
    console.log("Bytes read: ", bytes);
  });
});


// i2cReadOnce(address, register, bytesToRead, handler(arrayOfBytes))
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
  this.i2cReadOnce(0x01, 0x02, 6, function(bytes) {
    console.log("Bytes read: ", bytes);
    console.log("Done!");
  });
});


// i2cReadOnce(address, bytesToRead, handler)
var raspi = require('raspi-io');
var five = require('johnny-five');

var board = new five.Board({
  io: new raspi()
});

board.on("ready", function() {
  this.i2cConfig();
  this.i2cRead(0x01, 6, function(bytes) {
    console.log("Bytes read: ", bytes);
    console.log("Done!");
  });
});
