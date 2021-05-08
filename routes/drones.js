const express = require('express');
const DroneModel = require('./../models/Drone.model');
const router = express.Router();


router.get("/drones", async (req, res, next) => {
  try {
    const drones = await DroneModel.find();
    res.render("drones/list.hbs", { 
      drones,
    });
  } catch (dbErr) {
    next(dbErr);
  }
});


router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  res.render("drones/create-form.hbs");
});

router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  console.log(req.body); // will contain the posted informations
  DroneModel.create(req.body)
    .then((dbResult) => {
      console.log(dbResult);
      res.redirect("/drones");
    })
    .catch((dbError) => next(dbError));
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findById(req.params.id)
    .then((dbResult) => {
      console.log(dbResult);
      res.render("drones/update-form.hbs", {
        drone: dbResult,
      });
    })
    .catch((dbErr) => next(dbErr));
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  DroneModel.findByIdAndUpdate(req.params.id, req.body)
    .then((dbResult) => {
      console.log(dbResult);
      res.redirect("/drones");
    })
    .catch((dbErr) => next(dbErr));
});

router.get('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  DroneModel.findByIdAndDelete(req.params.id)
    .then((dbSuccess) => {
      console.log(dbSuccess);
      res.redirect("/drones");
    })
    .catch((dbErr) => {
      next(dbErr);
    });
});

module.exports = router;
