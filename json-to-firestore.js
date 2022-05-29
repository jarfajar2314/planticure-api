const firebase = require('./db');
const db = firebase.firestore();
const plantJSON = require('./models/plant.json');

let plants = plantJSON.plants;


plants.forEach(function(obj) {
    db.collection("plants").add({
        name: obj.name,
        image: obj.image,
        disease: obj.disease,
        description: obj.description,
    }).then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });
});