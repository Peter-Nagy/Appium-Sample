const express = require('express');

const app = express();
const path = require('path');

app.use(express.static(`${__dirname}/static`));

app.get('/app.apk', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../android/app.apk'));
});

let server;

exports.start = async () => {
  server = await app.listen(4000);
};

exports.stop = () => {
  server.close();
};
