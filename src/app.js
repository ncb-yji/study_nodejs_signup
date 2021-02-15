var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var port = 3000;

app.use(bodyParser.urlencoded({
	extended: true
  }));

// 指定ポートのサーバー起動
app.listen(port, (req, res) => {
	console.log('sever running')
})

// ホーム画面にリダイレクト
app.get('/', (req, res) => {
	res.redirect('/welcome')
})

// ホーム画面
app.get('/welcome', (req, res) => {
	res.sendFile(__dirname + '/welcome.html');
})

// ログイン画面
app.get('/login', (req, res) => {
	res.sendFile(__dirname + '/login.html');
})

// app.get('/loginSuccess', (req, res) => {
// 	res.sendFile(__dirname + '/loginSuccess.html');
// })

// アカウント作成画面
app.get('/register', (req, res) => {
	res.sendFile(__dirname + '/register.html');
})

// アカウント作成完了
app.post('/registerSuccess', (req, res) => {
	console.log(req.body.userId);
	// res.sendFile(__dirname + '/register.html');
})