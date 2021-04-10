const express = require('express');
const morgan = require('morgan');
const skillRouter = require('./routes/skillRouter');
const educationRouter = require('./routes/educationRouter');
const certificateRouter = require('./routes/certificateRouter');
const experienceRouter = require('./routes/experienceRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(express.json());

app.use('/skills', skillRouter);
app.use('/educations', educationRouter);
app.use('/experiences', experienceRouter);
app.use('/certificates', certificateRouter);

app.use(express.static(__dirname + '/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});