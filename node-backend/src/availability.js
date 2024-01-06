function generateAvailabilityJSON(roomData) {
    // Get room data or provide an empty object if null or undefined
    const room = roomData || { users: [] };
    // Extract user IDs and names from the room data
    const userIDs = room.users.map(({ id, name }) => ({ ID: id, name }));
  
    // Initialize an array to store general availability for each day of the week
    const generalAvailability = Array.from({ length: 7 }, () => []);
  
    // Calculate number of people available on each day
    room.users.forEach((user) => {
      user.availability_days.forEach((availability, day) => {
        if (availability) {
          generalAvailability[day].push(user.id);
        }
      });
    });
  
    // Create an object to store formatted JSON output
    const returnJson = Object.fromEntries(
      // Format availability JSON for each box (day)
      Array.from({ length: 31 }, (_, day) => [`box${day}`, generalAvailability[day % 7]])
    );
  
    // Return JSON with user IDs, names, and availability data
    return { users: userIDs, data: returnJson };
  }

  module.exports = generateAvailabilityJSON;