import express from 'express';
import config from './config/config.js'
import morgan from 'morgan';

const app = express();
app.use(morgan("combined"));    // Request Logging
app.use(express.json());

app.get('/', (req, res) => {
  res.send({
    message: 'Hello and Welcome to docker demo API'
  })
})

app.listen(config.general.port, () => {
  console.log(`API Listening at http://localhost:${config.general.port} in ${config.general.environment} mode`)
})