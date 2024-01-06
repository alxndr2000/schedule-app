const express = require('express');
const router = express.Router();
const database = require('./database');
const generateAvailabilityJSON = require('./availability');

router.get('/:roomCode', (req, res) => {
  const roomCode = req.params.roomCode || 'rc01';
  console.log('Request for '+roomCode)
  const roomData = database.getRoomData(roomCode);
  
  const availability = generateAvailabilityJSON(roomData);
  
  res.json(availability);
});

module.exports = router;