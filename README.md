# Backend API Documentation

generated with AI, if errors occur please check the source code

## 1. Retrieve a Room by its Code

### Endpoint: `/getRoom/:roomCode`
- **Method:** GET
- **Description:** Retrieves a room by its unique code.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the room.
- **Error Response:**
  - Status Code: 404
  - Response Body: JSON object with an error message if the room is not found.
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 2. Create a New Room

### Endpoint: `/createRoom/:roomname`
- **Method:** POST
- **Description:** Creates a new room with the provided name.
- **Parameters:**
  - `roomname` (String): Name for the new room.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the newly created room.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 3. Update Room Name

### Endpoint: `/updateRoomName/:roomCode/:newRoomName`
- **Method:** PUT
- **Description:** Updates the name of a room with the provided code.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
  - `newRoomName` (String): New name for the room.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the updated room.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 4. Create a New User in a Room

### Endpoint: `/createUser/:roomCode/:username`
- **Method:** post
- **Description:** Creates a new user in a room with the provided code.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
  - `username` (String): Name for the new user.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the updated room with the new user.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 5. Delete a User from a Room

### Endpoint: `/deleteUser/:roomCode/:userId`
- **Method:** DELETE
- **Description:** Deletes a user from a room with the provided code and user ID.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
  - `userId` (String): ID of the user to be deleted.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the updated room after user deletion.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 6. Update a User's Name in a Room

### Endpoint: `/updateUserName/:roomCode/:userId/:newUserName`
- **Method:** PUT
- **Description:** Updates the name of a user in a room with the provided code and user ID.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
  - `userId` (String): ID of the user to be updated.
  - `newUserName` (String): New name for the user.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the updated room after user name update.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 7. Update a User's Availability Days

### Endpoint: `/updateUserAvailabilityDays/:roomCode/:userId`
- **Method:** PUT
- **Description:** Updates the availability days of a user in a room with the provided code and user ID.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
  - `userId` (String): ID of the user to be updated.
  - `newAvailabilityDays` (Array): Updated availability days for the user.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the updated room after user availability days update.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 8. Update a User's Specific Days

### Endpoint: `/updateUserSpecificDays/:roomCode/:userId`
- **Method:** PUT
- **Description:** Updates the specific days of a user in a room with the provided code and user ID.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
  - `userId` (String): ID of the user to be updated.
  - `newSpecificDays` (Array): Updated specific days for the user.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the updated room after user specific days update.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 9. Retrieve a User by their ID and Room Code

### Endpoint: `/getUser/:roomCode/:userId`
- **Method:** GET
- **Description:** Retrieves a user by their ID in a room with the provided code.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
  - `userId` (String): ID of the user to be retrieved.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object representing the user.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 10. List Users in a Room by their ID and Name

### Endpoint: `/listRoomUsernames/:roomCode`
- **Method:** GET
- **Description:** Lists users in a room by their ID and name.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON array representing the list of users.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 11. Retrieve the Name of a Room by its Code

### Endpoint: `/getRoomName/:roomCode`
- **Method:** GET
- **Description:** Retrieves the name of a room by its unique code.
- **Parameters:**
  - `roomCode` (String): Unique identifier for the room.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object with the room name.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

## 12. List All Room Codes

### Endpoint: `/listRooms`
- **Method:** GET
- **Description:** Lists all room codes.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object with the list of room codes.
- **Error Response:**
  - Status Code: 500
  - Response Body: JSON object with an error message for internal server errors.

---

## 13. Delete Room by Code

### Endpoint: `/deleteRoom/:roomCode`
- **Method:** DELETE
- **Description:** Deletes a room by its unique code.
- **Parameters:**
  - `roomCode` (String) - The unique code of the room to be deleted.
- **Success Response:**
  - Status Code: 200
  - Response Body: JSON object with details of the deleted room.
- **Error Responses:**
  - Status Code: 404
    - Response Body: JSON object with an error message indicating that the room was not found.
  - Status Code: 500
    - Response Body: JSON object with an error message for internal server errors.

**Note:** Replace placeholders such as `:roomCode`, `:newRoomName`, etc., with actual values when making requests to these endpoints.
