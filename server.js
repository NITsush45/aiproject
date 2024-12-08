require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const recommendationRoutes = require('./src/routes/recommendationRoutes.js');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.send('Server is running. Use /feed for recommendations.');
});

app.use('/feed', recommendationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
