const firebase = require('./db');
const db = firebase.firestore();
const plantJSON = require('./models/plant.json');

let plants = plantJSON.plants;


// plants.forEach(function(obj) {
//     db.collection("plants").add({
//         name: obj.name,
//         image: obj.image,
//         disease: obj.disease,
//         description: obj.description,
//     }).then(function(docRef) {
//         console.log("Document written with ID: ", docRef.id);
//     })
//     .catch(function(error) {
//         console.error("Error adding document: ", error);
//     });
// });

const ORDER_ITEMS = db.collection('plants')
plants.forEach(function(obj){
    ORDER_ITEMS.where('name', '==', obj.name)
      .get()
      .then(snapshots => {
        if (snapshots.size > 0) {
          snapshots.forEach(orderItem => {
            ORDER_ITEMS.doc(orderItem.id).update({ image: obj.image, })
            console.log(`${obj.name} updated`);
          })
        }
      });
});

