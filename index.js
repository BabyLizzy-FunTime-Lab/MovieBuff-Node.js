const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
});

app.listen(port, function() {
	console.log(`MovieBuff app listening at http://localhost:${port}!`);
});