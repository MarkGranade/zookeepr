const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

const fs = require('fs');
const path = require('path');

const express = require('express');
const { animals } = require('./data/animals');

const PORT = process.env.PORT || 3001;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());
// instructs the server to make certain files readily available
app.use(express.static('public'));

// any time a client navigates to <ourhost>/api, the app will use the router we set up in apiRoutes
app.use('/api', apiRoutes);
// if '/' is the endpoint, then the router will serve back our HTML routes
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});
