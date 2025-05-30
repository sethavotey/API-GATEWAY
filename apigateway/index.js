const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const app = express();

// Route for Student Service
app.use('/student', createProxyMiddleware({ target: 'http://54.86.84.18:5001', changeOrigin: true }));

// Route for Teacher Service
app.use('/teacher', createProxyMiddleware({ target: 'http://54.175.16.72:5002', changeOrigin: true }));

app.listen(5000, () =>
    console.log('API Gateway running on Port No: 5000'));
