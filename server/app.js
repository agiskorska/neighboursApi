const express = require('express');
const app = express();
const cors = require('cors')



app.get('/', (req, res) => {
});

app.post('/contact/send-message', (req, res) => {

});

app.get('/hello/:name', (req, res) => {
});

app.get('/about', (req, res) => {
});

app.get('/contact', (req, res) => {
});

app.get('/info', (req, res) => {
});

app.use((req, res) => {
  res.status(404).send('404 not found...');
})