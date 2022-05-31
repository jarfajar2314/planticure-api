'use strict';

const firebase = require('../db');
const firestore = firebase.firestore();
const col = firestore.collection('plants');

const getAllPlants = async (req, res, next) => {
    let data = [];
    let query = await col.get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
            data.push(doc.data())
        });
        // console.log(snapshot);
    })
    .catch (err => {
        console.log('Error getting documents', err);
        return res.status(400).send({
            'error' : true,
            'message' : 'error getting documents'
        })
    })
    
    return await res.status(200).send({
        'error' : false,
        'message' : 'Plants fetched successfully',
        'data' : data
    });
}

const getPlantByName = async (req, res, next) => {
    const plantName = req.params.name;
    let data = null;
    let query = await col.where('name', '==', plantName).limit(1).get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            console.log(doc.data());
            data = doc.data()
        });
        // console.log(snapshot);
    })
    .catch (err => {
        console.log('Error getting documents', err);
        return res.status(400).send({
            'error' : true,
            'message' : 'error getting documents'
        })
    })

    if(data == null) {
        return await res.status(404).send({
            'error' : true,
            'message' : `can't found '${plantName}'`,
        });
    }

    return await res.status(200).send({
        'error' : false,
        'message' : 'Plant fetched successfully',
        'data' : data
    });
}

module.exports = {
    getAllPlants,
    getPlantByName
}