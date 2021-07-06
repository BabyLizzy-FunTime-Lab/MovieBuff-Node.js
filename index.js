const express = require('express');
const fs = require('fs');
const babel = require('@babel/core');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({
	extended: true
}));

// Transform file from js-src into lib
// babel.transformFileAsync("js-src/main.js").then(result => {
// 	fs.writeFile('lib/main.js', result.code, function (err) {
//   	if (err) return console.log(err);
// 	});
// });
// Nodemon keeps reloading

app.get('/', function (req, res) {
	res.sendFile(__dirname + '/views/index.html');
	// fs.readFile('lib/main.js', 'utf8' , (err, data) => {
	//   if (err) {
 //  	  console.error(err)
 //  	  return
 //  	}
	// 	res.write(data);
	// 	res.end();
	// })
});

app.listen(port, function() {
	console.log(`MovieBuff app listening at http://localhost:${port}!`);
});