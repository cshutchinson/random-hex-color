var randomString = require('randombinary');
function randomHexColor(){
  var colorBinary = randomString()+randomString()+randomString();
  var hexString = parseInt(colorBinary, 2).toString(16);
  return hexString.length < 6 ? '#0' + hexString : '#' + hexString;
}

module.exports = randomHexColor;
