const express = require('express');
const app = express();




// Shows

// Get all shows
app.get('/shows', (req, res) => {
  // code to retrieve all shows
});

// Get one show
app.get('/shows/:id', (req, res) => {
  const showId = req.params.id;
  // code to retrieve show by id
});

// Get shows of a particular genre
app.get('/shows/genre/:genre', (req, res) => {
  const genre = req.params.genre;
  // code to retrieve shows by genre
});

// Update rating of a show that has been watched
app.put('/shows/:id/rating', (req, res) => {
  const showId = req.params.id;
  const rating = req.body.rating;
  // code to update show rating
});

// Update the status of a show
app.put('/shows/:id/status', (req, res) => {
  const showId = req.params.id;
  const status = req.body.status;
  // code to update show status
});

// Delete a show
app.delete('/shows/:id', (req, res) => {
  const showId = req.params.id;
  // code to delete show by id
});

// Users

// Get all users
app.get('/users', (req, res) => {
    // code to retrieve all users
  });
  
  // Get one user
  app.get('/users/:id', (req, res) => {
    const userId = req.params.id;
    // code to retrieve user by id
   
  });
  
  // Get shows watched by a user
  app.get('/users/:id/shows', (req, res) => {
    const userId = req.params.id;
    
    // code to retrieve shows watched by user
  });
  
  // Update or add a show if a user has watched it
  app.put('/users/:id/shows', (req, res) => {
    const userId = req.params.id;
    const show = req.body;
    // code to update or add show for user
    
  });




module.exports = {
    routes
};
