// filepath: c:\Users\Henry\Documents\Love Bites docs\Love Bites Website\index.js
const QRCode = require('qrcode');

const url = 'https://loveatfirstbiteweb.com/';

QRCode.toFile('website-qr.png', url, {
  color: {
    dark: '#000',
    light: '#FFF'
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved as website-qr.png');
});