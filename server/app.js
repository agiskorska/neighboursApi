const express = require('express');
const app = express();

app.engine('.hbs', hbs());
app.set('view engine', '.hbs');

app.use(express.static(path.join(__dirname, '/public')));

app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
});

app.post('/contact/send-message', upload.single('image'), (req, res) => {

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