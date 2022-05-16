'use strict';

const firebase = require('../db');
const Student = require('../models/user');
const firestore = firebase.firestore();

// Add User
const addUser = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('users').doc().set(data);
        res.send('User register success');
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addUser
}