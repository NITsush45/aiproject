require('dotenv').config();
const express = require('express');
const { getFeed } = require('./controllers/feedController.js');

const app = express();
const PORT = process.env.PORT || 5000;

app.get('/feed', getFeed);

app.listen(PORT, () => {
    console.log(`Server is running. Use /feed for recommendations.`);
});
