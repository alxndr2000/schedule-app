const express = require('express');
const router = express.Router();
const database = require('./database');
const generateAvailabilityJSON = require('./availability');
const Room = require('./roomModel');



// Endpoint to retrieve a room by its code
router.get('/getRoom/:roomCode', async (req, res) => {
    try {
      const roomCode = req.params.roomCode;
      
      // Use the getRoomByCode method from the database module
      await database.connect(async (Room) => {
        const room = await Room.getRoomByCode(roomCode);
        console.log(room)
        if (!room) {
            return res.status(404).json({ error: 'Room not found' });
          }
      
          res.json(room);
      });
      
  
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  

// Endpoint to create a new room
router.get('/createRoom/:roomname', async (req, res) => {
    try {
      const roomname = req.params.roomname;
  
      // Use the connect function to execute code
      await database.connect(async (Room) => {
        // Call the createRoom function with the provided roomname
        const newRoom = await Room.createRoom(roomname);
        res.json(newRoom);
      });
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

// Endpoint to update room name
router.put('/updateRoomName/:roomCode/:newRoomName', async (req, res) => {
    try {
      const roomCode = req.params.roomCode;
      const newRoomName = req.params.newRoomName;
      await database.connect(async (Room) => {

        const updatedRoom = await Room.updateRoomName(roomCode, newRoomName);
  
      res.json(updatedRoom);
      });
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
// Endpoint to create a new user in a room
router.post('/createUser/:roomCode/:username', async (req, res) => {
try {
    const roomCode = req.params.roomCode;
    const username = req.params.username;
    await database.connect(async (Room) => {
    const updatedRoom = await Room.createUser(roomCode, username);

    res.json(updatedRoom);
    });
} catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

// Endpoint to delete a user from a room
router.delete('/deleteUser/:roomCode/:userId', async (req, res) => {
try {
    const roomCode = req.params.roomCode;
    const userId = req.params.userId;
    await database.connect(async (Room) => {
        const updatedRoom = await Room.deleteUserById(roomCode, userId);

    res.json(updatedRoom);
    });
    
} catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

// Endpoint to update a user's name in a room
router.put('/updateUserName/:roomCode/:userId/:newUserName', async (req, res) => {
try {
    const roomCode = req.params.roomCode;
    const userId = req.params.userId;
    const newUserName = req.params.newUserName;
    await database.connect(async (Room) => {
        const updatedRoom = await Room.updateUserName(roomCode, userId, newUserName);

        res.json(updatedRoom);
    });
    
} catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
}
});

// Endpoint to update a user's availability days
router.put('/updateUserAvailabilityDays/:roomCode/:userId', async (req, res) => {
    try {
      const roomCode = req.params.roomCode;
      const userId = req.params.userId; 
      const newAvailabilityDays = req.body.newAvailabilityDays; //untested
      await database.connect(async (Room) => {
        const updatedRoom = await Room.updateUserAvailabilityDays(roomCode, userId, newAvailabilityDays);
  
        res.json(updatedRoom);
      });
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Endpoint to update a user's specific days
  router.put('/updateUserSpecificDays/:roomCode/:userId', async (req, res) => {
    try {
      const roomCode = req.params.roomCode;
      const userId = req.params.userId;
      const newSpecificDays = req.body.newSpecificDays;
      await database.connect(async (Room) => {
        const updatedRoom = await Room.updateUserSpecificDays(roomCode, userId, newSpecificDays);
  
      res.json(updatedRoom);
      });
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Endpoint to retrieve a user by their ID and room code
  router.get('/getUser/:roomCode/:userId', async (req, res) => {
    try {
      const roomCode = req.params.roomCode;
      const userId = req.params.userId;
      await database.connect(async (Room) => {
        const user = await Room.getUserByIdAndRoomCode(roomCode, userId);
  
      res.json(user);
      });
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Endpoint to list users in a room by their ID and name
  router.get('/listRoomUsernames/:roomCode', async (req, res) => {
    try {
      const roomCode = req.params.roomCode;
        
      await database.connect(async (Room) => {
        const users = await Room.listRoomUsersByIdAndName(roomCode);
  
        res.json(users);
      });
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Endpoint to retrieve the name of a room by its code
  router.get('/getRoomName/:roomCode', async (req, res) => {
    try {
      const roomCode = req.params.roomCode;
      await database.connect(async (Room) => {
        const roomName = await Room.getRoomName(roomCode);
  
      res.json({ roomName });
      });
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  
  // Endpoint to list all room codes
  router.get('/listRooms', async (req, res) => {
    try {
        await database.connect(async (Room) => {const roomCodes = await Room.listRoomsByCode();
  
      res.json({ roomCodes });});
      
    } catch (error) {
      console.error('Error:', error.message);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });

  router.delete('/deleteRoom/:roomCode', async (req, res) => {
    try {
        const roomCode = req.params.roomCode;
        await database.connect(async (Room) => {
            // Use the deleteRoomByCode method to delete the room
            const deletedRoom = await Room.deleteRoomByCode(roomCode);

            if (!deletedRoom) {
                return res.status(404).json({ error: 'Room not found' });
            }

            res.json(deletedRoom);
        });

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Left in for UI as UI needs updating
router.get('/old/:roomCode', (req, res) => {
    const roomCode = req.params.roomCode || 'rc01';
    console.log('Request for '+roomCode)
    const roomData = database.getRoomData(roomCode);
    
    const availability = generateAvailabilityJSON(roomData);
    
    res.json(availability);
  });

module.exports = router;