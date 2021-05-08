const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const droneSchema = new Schema(
  {
    name: String,
    propellers: Number,
    maxSpeed: String,
  },
  { timestamps: true }
);

const DroneModel = mongoose.model("drones", droneSchema);
module.exports = DroneModel;
