const admin = require('firebase-admin');
const serviceAccount = require('../serviceAccountKey.json');
const firebase = require('firebase');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

const register = async (req, res, next) => {
    const user = {
        displayName: req.body.name,
        email: req.body.email,
        password: req.body.password,
        emailVerified: false,
        disabled: false
    }
    let userResponse;
    try {
        userResponse = await admin.auth().createUser(user)
        .then((userRecord) => {
            // See the UserRecord reference doc for the contents of userRecord.
            console.log('Successfully created new user:', userRecord.uid);
            return res.status(200).send({
                'error' : false,
                'message' : 'User register success',
                'uid' : userRecord.uid
            })
        });
    } catch (error) {
        // console.log(error)
        return res.status(400).send({
            'error' : true,
            'message' : error.message
        });
    }
}

const login = async (req, res, next) => {
    const reqUser = {
        email: req.body.email,
        password: req.body.password,
    }

    const auth = firebase.default.auth();
    const userLogin = auth.signInWithEmailAndPassword(reqUser.email, reqUser.password)
    .then((userCredential) => {
        const user = userCredential.user;
        return res.status(200).send({
            'error' : false,
            'message' : 'Successfully logged in.'
        });
    })
    .catch((error) => {
        return res.status(400).send({
            'error' : true,
            'message' : error.message
        });
    })

}

module.exports = {
    register,
    login
}