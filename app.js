require('./src/middleware/axios-interceptor');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./src/routes');

const app = express();
app
    .use(cors())
    .use(bodyParser.json());
routes(app);

app.listen(process.env.PORT || 9000, () => {
    console.info('server port: ', process.env.PORT || 9000);
});

module.exports = app;
