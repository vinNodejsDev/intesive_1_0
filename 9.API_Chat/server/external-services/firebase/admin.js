const admin = require("firebase-admin");

const serviceAccount = require("../../config/firebase-admin-config.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://chat-app-b3d6b.firebaseio.com"
});

module.exports = admin;