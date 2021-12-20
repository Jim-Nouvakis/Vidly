const express = require('express')
const router = express.Router()


let genres = [
    {
      id: 1,
      genre: "horror",
    },
    {
      id: 2,
      genre: "funny",
    },
    {
      id: 3,
      genre: "comedy",
    },
    {
      id: 4,
      genre: "love",
    },
  ];
  //get all genres
  router.get("/", (req, res) => {
    res.send(genres);
  });
  //find an id in genres
  router.get("/:id", (req, res) => {
    const genre = genres.find((c) => c.id === parseInt(req.params.id));
    if (!genre) res.status(404).send("The genre is not found");
    res.send(genre);
  });
  
  //creating a genre
  router.post("/", (req, res) => {
    const { error } = validateCourse(req.body);
    //Validate
  
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
  
    const genre = {
      id: genres.length + 1,
      name: req.body.genre,
    };
    genres.push(genre);
    res.send(genre);
  });
  
  function validateCourse(genre) {
    const schema = Joi.object({
      genre: Joi.string().min(3).required(),
    });
  
    return schema.validate(genre);
  }
  
  //edit genre
  
  router.put("/:id", (req, res) => {
      const { error } = validateCourse(req.body);
    //Validate
  
    if (error) {
      res.status(400).send(error.details[0].message);
      return;
    }
    
    const genre = genres.find((c) => c.id === parseInt(req.params.id));
    genre.genre = req.body.genre;
    res.send(genre)
  });
  
  //delete
  router.delete("/:id",(req,res) => {
  
    //Validate
  
    
    
    
    const genre = genres.find((c) => c.id === parseInt(req.params.id));
    const index = genres.indexOf(genre);
  
    if(genre){
    genres.splice(index,1)}
    res.send(genre)
  })



  module.exports = router;