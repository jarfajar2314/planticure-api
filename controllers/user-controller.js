'use strict';

const firebase = require('../db');
const Student = require('../models/user');
const firestore = firebase.firestore();
const bcrypt = require('bcrypt');

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
        return res.status(400).send({
            'error' : true,
            'message' : 'error getting documents'
        })
    });
    // console.log(emailExist);
    if(emailExist) {
        return res.status(400).send({
            'error' : true,
            'message' : 'Email already registered'
        });
    }

    // Insert
    try {
        // console.log(data)
        const hashedPassword = await bcrypt.hash(data.password, 10);
        data.password = hashedPassword;
        console.log(data);
        await userCol.doc().set(data);
        console.log('user registered');
        return res.send({
            'error' : false,
            'message' : 'User register success'
        });
    } catch (error) {
        return res.status(400).send({
            'error' : true,
            'message' : error.message
        });
    }
}

module.exports = {
    addUser
}