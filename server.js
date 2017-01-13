const express = require('express');
const mongoose = require('mongoose')
const app = express();

const routes = require('./api/routes/api');

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.use('/', routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/reddit');

var db = mongoose.connection;

db.on('error', function(error) {
  console.log('Mongoose Error: ', error);
})

db.once('open', function() {
  console.log('Mongoose connection successful');
})

app.listen(PORT, () => {
	console.log('server started on port: ', PORT);
});
