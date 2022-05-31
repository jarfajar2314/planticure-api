const express = require('express');
const { getAllPlants, getPlantByName } = require('../controllers/plant-controller');

const router = express.Router();

router.get('/plants', getAllPlants);
router.get('/plant/:name', getPlantByName);

module.exports = {
    routes: router
}