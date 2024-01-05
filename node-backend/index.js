const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

const database_fake = {
    rooms: {
        rc01: {
            roomname: "Bob's Room",
            users: [
                {
                    name: "Bob",
                    availability_days: [1,1,0,1,0,0,1] // monday to sunday as true/false
                },
                {
                    name: "Alice",
                    availability_days: [0,0,0,1,0,1,1]
                },
                {
                    name: "Dave",
                    availability_days: [1,1,1,0,0,0,1]
                },
                {
                    name: "Clyde",
                    availability_days: [0,1,0,1,0,1,1]
                }
            ]
        },
        rc02: {
            roomname: "Bob's Room",
            users: [
                {
                    name: "Evan",
                    availability_days: [0,1,1,1,1,0,1] // monday to sunday as true/false
                },
                {
                    name: "Frank",
                    availability_days: [1,0,1,0,0,1,1]
                },
                {
                    name: "George",
                    availability_days: [0,1,1,0,1,0,0]
                },
                {
                    name: "Harry",
                    availability_days: [0,1,1,0,0,1,1]
                }
            ]
        }
    }
    

}

function calculateAvailableDays(roomData, roomCode){
    generalAvailability=[[],[],[],[],[],[],[]]
    try {
        // Calculate number of people available on each day
        roomData.rooms[roomCode].users.forEach(user => {
            for (let day = 0; day < 7; day++) {
                if (user.availability_days[day]) {
                    generalAvailability[day].push(user.name);
                }
                
            }
    });
    } finally {

        returnJson={} // Format JS output
        for (let day = 0; day < 31; day++) {
            returnJson["box"+day] = generalAvailability[day%7]; //Hacky force output to 7 days/week
        }
    
    
        return returnJson;
    }

    
}

app.get("/api/*", (req, res) => { //rc01 is currently hardcoded into the react app
    var wildcardPath = req.params[0];
    if (!wildcardPath) {
        wildcardPath="rc01"
    }
    console.log("Request for ", wildcardPath)
    const availability = calculateAvailableDays(database_fake, wildcardPath);
    res.json(availability);
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});