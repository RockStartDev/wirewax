require('dotenv').config();
const express = require('express');
const cors = require('cors');
const router = require('./routes');
const config = require('./configs/appConfig');

const app = express();

app.use(cors());
app.use(router);

app.listen(config.PORT, () => {
  console.log(`app running on port ${config.PORT}`);
});
