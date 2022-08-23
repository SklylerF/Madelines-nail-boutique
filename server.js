const express =  require('express');
const app = express();
const expbs = require('express-handlebars')
const path = require('path');

app.engine('handlebars', epbs({
    defaultLayouts: 'layout',
    layoutDir: path.join(_dirname, 'views/mainLayout')
}));