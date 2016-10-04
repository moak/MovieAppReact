import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

let app = express();

let id = 0;

let movies = [
  {
    "id": ++id,
    "title": "exercitation",
    "description": "commodo cupidatat et excepteur enim ea consectetur voluptate do eu"
  },
  {
    "id": ++id,
    "title": "qui",
    "description": "sit fugiat pariatur sint sint excepteur elit qui nisi nulla"
  },
  {
    "id": ++id,
    "title": "culpa",
    "description": "occaecat officia exercitation dolor sit elit laborum ea reprehenderit non"
  },
  {
    "id": ++id,
    "title": "ullamco",
    "description": "do tempor pariatur exercitation et sint ex consectetur deserunt et"
  },
  {
    "id": ++id,
    "title": "voluptate",
    "description": "ipsum dolore aliquip minim do esse est sit ex velit"
  }
];

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.use(bodyParser.json())


// LIST MOVIES
app.get('/movies', function(req, res){
  console.log('movie API', movies.length);
  res.json(movies);
});

// ADD MOVIE
app.post('/movies', function(req, res){
  console.log('BODYYYYYYYYYYYYYYY', req.body);
  let movieExists = movies.filter((movie) => {
    return movie.title === req.body.title
  })

  if (movieExists.length === 0) {
    var newMovie = { id: ++id, title: req.body.title, description: req.body.description }
    movies.push(newMovie);
    res.status(201).send(newMovie);
  }
  else {
    res.status(409).send({error: "This movie already exists"});
  }
});

// DELETE MOVIE
app.delete('/movies/:id', (req, res) =>  {

  if (!req.params.id){
    res.sendStatus(400);
  }

  let movieExists = movies.filter((movie) => {
    return movie.id === parseInt(req.params.id);
  });

  if (movieExists.length === 0) {
    res.sendStatus(404);
  }
  else {
    movies = movies.filter( movie => movie.id !== parseInt(req.params.id));
    res.sendStatus(204);
  }
})


// UPDATE MOVIE
app.put('/movies/:id', (req, res) =>  {

  if (!req.params.id){
    res.sendStatus(400);
  }

  var id = parseInt(req.params.id);
  let movieExists = movies.filter((movie) => {
    return movie.id === id;
  });

  if (movieExists.length === 0) {
    res.sendStatus(404);
  }
  else {
    for (let i = 0; i < movies.length; i++){
      if (movies[i].id === id ) {
        movies[i].title = req.body.title;
        movies[i].description = req.body.description;
      }
    }
    res.sendStatus(200);
  }
})

app.listen(4000);
