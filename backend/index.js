require('dotenv').config();
const express = require('express');
const cors = require('cors');

// Internal Imports
const corsOptions = require('./config/corsOptions');

const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/', require('./routes/routes.js'));

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
    console.log(`Server listening at ${PORT}`);
});