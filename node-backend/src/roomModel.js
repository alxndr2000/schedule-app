const mongoose = require('mongoose');

// Define user schema
const userSchema = new mongoose.Schema({
	id: Number,
	name: String,
	availability_days: [Boolean],
	specific_days: [Date],
});

// Define room schema
const roomSchema = new mongoose.Schema({
	roomname: String,
	roomcode: String,
	users: [userSchema],
});

// Static method to get a room by code
roomSchema.statics.getRoomByCode = async function (roomCode) {
	return this.findOne({ roomcode: roomCode });
};

// Static method to update a user by ID
roomSchema.statics.updateUserById = async function (roomCode, userId, updatedUserData) {
	const filter = { roomcode: roomCode, 'users.id': userId };
	const update = { $set: { 'users.$': updatedUserData } };
  
	return this.findOneAndUpdate(filter, update, { new: true });
  };

// Static method to create a room with a unique room code
roomSchema.statics.createRoom = async function (roomname) {
	let roomcode;
	let isDuplicate = true;

	//Generate a unique room code
	while (isDuplicate) {
		roomcode = generateRoomCode();
		const existingRoom = await this.findOne({ roomcode });
		isDuplicate = !!existingRoom;
	}

	const room = new this({
		roomname,
		roomcode,
		users: [],
	});

	return room.save();
};

// Static method to update a room name
roomSchema.statics.updateRoomName = async function (roomCode, newRoomName) {
	return this.findOneAndUpdate({ roomcode: roomCode }, { $set: { roomname: newRoomName } }, { new: true });
};

// Static method to create a user in a room
roomSchema.statics.createUser = async function (roomCode, username) {
	const room = await this.findOne({ roomcode: roomCode });

	if (!room) {
		throw new Error(`Room with code ${roomCode} not found`);
	}

	// Generate a unique sequential ID for the new user
	const userId = getNextUserId(room.users);

	const newUser = {
		id: userId,
		name: username,
		availability_days: [],
		specific_days: [],
	};

	room.users.push(newUser);

	return room.save();
};

// Helper function to get the next sequential user ID
function getNextUserId(users) {
	const existingIds = users.map((user) => user.id);
	const maxId = existingIds.length > 0 ? Math.max(...existingIds) : -1;
	return maxId + 1;
}

// Static method to delete a user by ID
roomSchema.statics.deleteUserById = async function (roomCode, userId) {
	return this.findOneAndUpdate({ roomcode: roomCode }, { $pull: { users: { id: userId } } }, { new: true });
};

// Static method to update a user's name
roomSchema.statics.updateUserName = async function (roomCode, userId, newUserName) {
	const filter = { roomcode: roomCode, 'users.id': userId };
	const update = { $set: { 'users.$.name': newUserName } };
  
	return this.findOneAndUpdate(filter, update, { new: true });
  };

// Static method to update a user's availability days
roomSchema.statics.updateUserAvailabilityDays = async function (roomCode, userId, newAvailabilityDays) {
	return this.updateUserById(roomCode, userId, { availability_days: newAvailabilityDays });
};

// Static method to update a user's specific days
roomSchema.statics.updateUserSpecificDays = async function (roomCode, userId, newSpecificDays) {
	return this.updateUserById(roomCode, userId, { specific_days: newSpecificDays });
};

// Static method to get a user by ID and room code
roomSchema.statics.getUserByIdAndRoomCode = async function (roomCode, userId) {
	const room = await this.findOne({ roomcode: roomCode });
	
	if (!room) {
		throw new Error(`Room with code ${roomCode} not found`);
	}
	console.log(room)
	const user = room.users.find((u) => u.id === parseInt(userId, 10));

	if (!user) {
		throw new Error(`User with ID ${userId} not found in room ${roomCode}`);
	}
	return user;
};

// Static method to list room users by ID and name
roomSchema.statics.listRoomUsersByIdAndName = async function (roomCode) {
	const room = await this.findOne({ roomcode: roomCode });
	if (!room) {
		throw new Error(`Room with code ${roomCode} not found`);
	}

	const users = room.users.map((user) => ({ id: user.id, name: user.name }));
	return users;
};

// Static method to get a room name by code
roomSchema.statics.getRoomName = async function (roomCode) {
	const room = await this.findOne({ roomcode: roomCode });
	if (!room) {
		throw new Error(`Room with code ${roomCode} not found`);
	}

	return room.roomname;
};

// Static method to list rooms by code
roomSchema.statics.listRoomsByCode = async function () {
	const rooms = await this.find({}, 'roomcode');
	return rooms.map((room) => room.roomcode);
};

// Helper function to generate a random, non-duplicate 8-character room code
function generateRoomCode() {
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	let roomcode = '';
	while (roomcode.length < 8) {
		const randomIndex = Math.floor(Math.random() * characters.length);
		roomcode += characters.charAt(randomIndex);
	}
	return roomcode;
}

// Create Room model
const Room = mongoose.model('Room', roomSchema);

// Export Room model
module.exports = Room;

/*
 * Room Model Documentation:
 *
 * Static Methods:
 * x getRoomByCode(roomCode): Retrieves a room by its unique code.
 * x createRoom(roomname): Creates a new room with a unique room code.
 * x updateRoomName(roomCode, newRoomName): Updates the name of a room.
 * x createUser(roomCode, username): Creates a new user in a room.
 * x deleteUserById(roomCode, userId): Deletes a user from a room by their ID.
 * x updateUserName(roomCode, userId, newUserName): Updates a user's name in a room.
 * ? updateUserAvailabilityDays(roomCode, userId, newAvailabilityDays): Updates a user's availability days.
 * ? updateUserSpecificDays(roomCode, userId, newSpecificDays): Updates a user's specific days.
 * - getUserByIdAndRoomCode(roomCode, userId): Retrieves a user by their ID and room code.
 * - listRoomUsersByIdAndName(roomCode): Lists users in a room by their ID and name.
 * - getRoomName(roomCode): Retrieves the name of a room by its code.
 * - listRoomsByCode(): Lists all room codes.
 *
 * Helper Functions:
 * - generateRoomCode(): Generates a random, non-duplicate 8-character room code.
 * - getNextUserId(users): Gets the next sequential user ID.
 */

// await database.connect(async (Room) => {});