//require express etc.
const express = require('express');
const path = require('path');

const app = express();

const places = [{id: 1, name: "Bangkok"}, {id: 2, name: "California"}];

const people = [{id: 1, name: "Henry"}, {id: 2, name: "Rob"}];

const things = [{id: 1, name: "Car"}, {id: 2, name: "Computer"}];

app.get('/', (req, res, next) => res.sendFile(path.join(__dirname, 'index.html')));



app.get('/api/places', (req, res, next) => {
  res.send(places);
});

app.get('/api/people', (req, res, next) => {
  res.send(people);
});

app.get('/api/things', (req, res, next) => {
  res.send(things);
});

const port = process.env.PORT || 3006;

app.listen(port, ()=> console.log(`listening on port ${port}`));


