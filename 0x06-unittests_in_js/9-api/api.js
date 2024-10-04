#!/usr/bin/env node

const express = require('express');
const app = express();

const PORT = 7865;

app.get("/", (req, res) => {
	res.statusCode = 200;
	res.setHeader('Content-Type', 'text/plain');
	res.send("Welcome to the payment system");
});

app.get('/cart/:id([0-9]+)', (req, res) => {
	res.send(`Payment methods for cart ${req.params.id}`);
});

app.listen(PORT, () => {
	console.log(`API available on localhost port ${PORT}`);
});

module.exports = app;
