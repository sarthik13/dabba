const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./server/config/db');
const router = require('./server/routes/index');

const app = express();
connectDB();

app.use(cors());
app.use(bodyParser.json());

app.use('/',router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
