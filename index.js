// filepath: c:\Users\Henry\Documents\Love Bites docs\Love Bites Website\index.js
const QRCode = require('qrcode');

const url = 'https://yourusername.github.io/your-repo/'; // Replace with your actual URL

QRCode.toFile('website-qr.png', url, {
  color: {
    dark: '#000',  // QR code color
    light: '#FFF'  // Background color
  }
}, function (err) {
  if (err) throw err;
  console.log('QR code saved as website-qr.png');
});