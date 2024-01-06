
const databaseFake = {
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

module.exports = {
    getRoomData: (roomCode) => databaseFake.rooms[roomCode],
    getAllRooms: () => databaseFake.rooms,
};