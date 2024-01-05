const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

// the worst solution possible
const database_fake = {
    "rooms": {
        "rc01": {
            "roomname": "Meeting Room A",
            "users": [
                {"id": 0, "name": "Bob", "availability_days": [1,1,0,1,0,0,1]},
                {"id": 1, "name": "Alice", "availability_days": [0,0,0,1,0,1,1]},
                {"id": 2, "name": "Dave", "availability_days": [1,1,1,0,0,0,1]},
                {"id": 3, "name": "Clyde", "availability_days": [0,1,0,1,0,1,1]}
            ]
        },
        "rc02": {
            "roomname": "Conference Room B",
            "users": [
                {"id": 0, "name": "Evan", "availability_days": [0,1,1,1,1,0,1]},
                {"id": 1, "name": "Frank", "availability_days": [1,0,1,0,0,1,1]},
                {"id": 2, "name": "George", "availability_days": [0,1,1,0,1,0,0]},
                {"id": 3, "name": "Harry", "availability_days": [0,1,1,0,0,1,1]}
            ]
        },
        "rc03": {
            "roomname": "Planning Room C",
            "users": [
                {"id": 0, "name": "John", "availability_days": [1,0,1,0,1,1,0]},
                {"id": 1, "name": "Mary", "availability_days": [0,1,1,1,0,0,1]},
                {"id": 2, "name": "Tom", "availability_days": [0,1,0,1,1,0,1]}
            ]
        },
        "rc04": {
            "roomname": "Event Coordination Room",
            "users": [
                {"id": 0, "name": "Anna", "availability_days": [1,1,1,0,1,0,0]},
                {"id": 1, "name": "Peter", "availability_days": [0,1,0,1,0,1,1]}
            ]
        },
        "rc05": {
            "roomname": "Team Collaboration Room",
            "users": [
                {"id": 0, "name": "Sophie", "availability_days": [1,0,0,1,1,0,1]},
                {"id": 1, "name": "Jack", "availability_days": [0,1,0,1,1,0,1]},
                {"id": 2, "name": "Emily", "availability_days": [1,1,0,0,1,0,1]},
                {"id": 3, "name": "William", "availability_days": [0,0,1,1,0,1,1]}
            ]
        },
        "rc06": {
            "roomname": "Project Planning Room",
            "users": [
                {"id": 0, "name": "Michael", "availability_days": [0,1,1,0,1,1,0]},
                {"id": 1, "name": "Emma", "availability_days": [1,0,0,1,0,1,1]}
            ]
        },
        "rc07": {
            "roomname": "Event Logistics Room",
            "users": [
                {"id": 0, "name": "Oliver", "availability_days": [0,1,1,1,0,0,1]},
                {"id": 1, "name": "Ava", "availability_days": [1,0,1,0,1,0,0]}
            ]
        },
        "rc08": {
            "roomname": "Event Planning Hub",
            "users": [
                {"id": 0, "name": "Liam", "availability_days": [0,0,1,1,0,1,1]},
                {"id": 1, "name": "Mia", "availability_days": [1,1,0,1,1,0,0]},
                {"id": 2, "name": "Sophia", "availability_days": [1,0,1,0,1,1,0]},
                {"id": 3, "name": "Jackson", "availability_days": [0,1,0,1,0,1,1]},
                {"id": 4, "name": "Ella", "availability_days": [1,1,0,0,1,0,1]},
                {"id": 5, "name": "Lucas", "availability_days": [0,0,1,1,0,1,1]},
                {"id": 6, "name": "Aiden", "availability_days": [1,1,0,1,0,0,1]},
                {"id": 7, "name": "Chloe", "availability_days": [0,1,1,0,1,0,0]},
                {"id": 8, "name": "Lincoln", "availability_days": [1,0,0,1,1,1,0]}
            ]
        }
    }
}

// Function to generate availability JSON based on room data and code
function generateAvailabilityJSON(roomData, roomCode) {
    // Array to store user IDs and names
    var userIDs = [];

    // Get room data based on room code
    var room = roomData.rooms[roomCode];

    // Populate userIDs array with user IDs and names
    room.users.forEach(user => {
        userIDs.push({'ID': user.id, 'name': user.name});
    });

    // Array to store general availability for each day of the week
    var generalAvailability = [[], [], [], [], [], [], []];

    try {
        // Calculate number of people available on each day
        room.users.forEach(user => {
            for (let day = 0; day < 7; day++) {
                if (user.availability_days[day]) {
                    generalAvailability[day].push(user.id);
                }
            }
        });
    } finally {
        // Object to store formatted JSON output
        returnJson = {};

        // Format availability JSON for each box (day)
        for (let day = 0; day < 31; day++) {
            returnJson["box" + day] = generalAvailability[day % 7]; // Hacky force output to 7 days/week
        }

        // Return JSON with user IDs, names, and availability data
        return {'users': userIDs, 'data': returnJson};
    }
}

// API endpoint to handle availability requests for a specific room
app.get("/api/*", (req, res) => {
    // Extract the wildcard path from the request parameters
    var wildcardPath = req.params[0];

    // Default to "rc01" if no wildcard path is provided
    if (!wildcardPath) {
        wildcardPath = "rc01";
    }

    console.log("Request for ", wildcardPath);

    // Generate availability JSON for the specified room code
    const availability = generateAvailabilityJSON(database_fake, wildcardPath);

    // Send the availability JSON as the API response
    res.json(availability);
});

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});