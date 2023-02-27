const { Router } = require('express');
const express = require('express');
const app = express();
const {sequelize} = require('../db')
const router = express.Router();

const {User} = require('../models/User');
const {Show} = require('../models/Show');

// Shows

// Get all shows
router.get('/', async (req, res) => {
  await Sequelize.sync()
  try{
    const shows = await Show.findAll();
    res.json(shows);
  } catch(error) {
    console.error(error);
  }
});

// Get one show
router.get('/shows/:id', async (req, res) => {
  await Sequelize.sync()
  try{
    const shows = await Show.findByPk(req.params.id);
    res.json(shows);
  } catch(error) {
    console.error(error);
  }
});

// Get shows of a particular genre
router.get('/shows/genre/:genre', (req, res) => {
  await Sequelize.sync()
  try{
    const genre = req.params.genre;
  
});

// Update rating of a show that has been watched
router.put('/shows/:id/rating', (req, res) => {
  const showId = req.params.id;
  const rating = req.body.rating;
  // code to update show rating
});

// Update the status of a show
router.put('/shows/:id/status', (req, res) => {
  const showId = req.params.id;
  const status = req.body.status;
  // code to update show status
});

// Delete a show
router.delete('/shows/:id', (req, res) => {
  const showId = req.params.id;
  // code to delete show by id
});

// Users

// Get all users
router.get('/users', async (req, res) => {
  await Sequelize.sync();
  try{
    const user = await User.findAll();
    res.json(user);
  } catch(error){
    console.error(error);
  }
  
  });
  
  // Get one user
  router.get('/users/:id', async (req, res) => {
    await Sequelize.sync()
    try{
    const userId = await User.findByPk(req.params.id);
    res.json(userId);
  }catch (error){
    console.error(error);
  }
   
  });
  
  // Get shows watched by a user
  router.get('/users/:id/shows', async (req, res) => {
    await Sequelize.sync()
    try{
      const shows = await Show.findAll({
        where: {
          user_id: id
        }
      })
      res.json(shows);
    } catch(error){
      console.error(error);
    }
  };
    // code to retrieve shows watched by user
  });
  
  // Update or add a show if a user has watched it
  router.put('/users/:id/shows', async (req, res) => {
    await Sequelize.sync();
    
    const userId = req.params.id;
    const show = req.body;
    // code to update or add show for user
    
  });




module.exports = {
    routes
};
