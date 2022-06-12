const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const allRoutes = require('./router/router');

const PORT = 3000;

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/', allRoutes);

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
