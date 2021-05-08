// Iteration #1

require("./../configs/db.config");

const DroneModel = require("./../models/Drone.model");

const drones = [
    { name: 'Creeper XL 500', propellers: 3, maxSpeed: 12 },
    { name: 'Racer 57', propellers: 4, maxSpeed: 20 },
    { name: 'Courier 3000i', propellers: 6, maxSpeed: 18 }
  ];

  // they want us to use .create method... why ??
(async function insertDrones() {
try {
    await DroneModel.deleteMany();
    const inserted = await DroneModel.insertMany(drones); 
    console.log(
    `seed drones done : ${inserted.length} documents inserted in database !`
    );
} catch (err) {
    console.error(err);
}
})();
  
