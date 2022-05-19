'use strict';

const firebase = require('../db');
const Student = require('../models/user');
const firestore = firebase.firestore();

// Add User
const addUser = async (req, res, next) => {
    const data = req.body;
    let userCol = firestore.collection('users');
    
    // Check email
    let emailExist = false;
    let query = await userCol.where('email', '==', data.email).limit(1).get()
    .then(snapshot => {
        snapshot.forEach(doc => {
            // console.log(doc.id, '=>', doc.data());
            emailExist = true;
        });
    })
    .catch(err => {
        console.log('Error getting documents', err);
    });
    // console.log(emailExist);
    if(emailExist) {
        return res.status(400).send('Email already registered');
    }

    // Insert
    try {
        await userCol.doc().set(data);
        return res.send('User register success');
    } catch (error) {
        return res.status(400).send(error.message);
    }
}

module.exports = {
    addUser
}