const express = require('express');
const apiRouter = require('./server');
const cors = require('cors');
const app = express();
app.use(cors());
const { errorLogs, handleError } = require('./middleware/error.handler');

//config
require('dotenv').config();
app.set('PORT', process.env.PORT || 4001);

//middleware
app.use(express.json());
app.use(errorLogs);
app.use(handleError);

//routes
app.get('/', (req, res) => {
  res.send('hello world');
});

apiRouter(app);

//server
app.listen(app.get('PORT'), () => {
  console.log(`Server on port ${app.get('PORT')}`);
});
