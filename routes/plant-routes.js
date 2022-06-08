const express = require('express');
const { getAllPlants, getPlantByName, getDiseaseByName } = require('../controllers/plant-controller');

const router = express.Router();

router.get('/plants', getAllPlants);
router.get('/plant/:name', getPlantByName);
router.get('/plant/:name/disease', getDiseaseByName);

module.exports = {
    routes: router
}