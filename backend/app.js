const express = require('express');
const app = express();
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const connectDB = require('./config/db');
const auth = require('./routes/auth')
dotenv.config();


app.use(express.json());
// app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
connectDB();

app.get('/api', (req, res) => res.send('Working'));

app.use('/api/admin', auth);

app.listen(process.env.PORT || 3000, () => console.log('Working CL'));