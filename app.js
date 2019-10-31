const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

const app = express();

/* Middlewares config */

app.use(express.static('public'));
app.use(expressLayouts);
app.use(bodyParser.urlencoded({ extended: true }));

app.set('layout', 'layout');
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

/* App routes */

app.listen(3000);
