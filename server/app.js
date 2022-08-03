const express = require('express');
const app = express();
const cors = require('cors')



app.get('/owner/', (req, res) => {
    res.status(200).send({message: 'fetched data of all owners'})

});

app.get('/owner/:id', (req, res) => {

    res.status(200).send({message: 'fetched data of owner ' + req.params.id})
});

app.post('/owner/', (req, res) => {
    res.status(201).send({message: 'created a new owner'})
});

app.put('/owner/:id', (req, res) => {
    res.status(201).send({message: 'changed owner ' + req.params.id})

});

app.get('/house/:id', (req, res) => {
    res.status(200).send({message: "fetched the house" + req.params.id})
});

app.get('/postcode/:id/', (req, res) => {
    const minAge = req.query.minAge
    const maxAge = req.query.maxAge
    const size = req.query.size
    const message = 'fetched all houses within ' + req.params.id + ' area, with people between ' + minAge + ' and ' + maxAge + ' and households of ' + size
    res.status(200).send({message})    
});


app.use((req, res) => {
  res.status(404).send('404 not found...');
})