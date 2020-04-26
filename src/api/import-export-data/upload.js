const admin = require('../../../node_modules/firebase-admin');
const serviceAccount = require("./serviceAccountKey.json"); //json of ur firestore
const data = require("./groups.json"); //json file to be uploaded. replace with your own
const collectionKey = "groups"; //name of the collection that you want to put in
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://your-own-data-base.firebaseio.com" //replace with your own firebase dataURL
});
const firestore = admin.firestore();
const settings = {timestampsInSnapshots: true};
firestore.settings(settings);
if (data && (typeof data === "object")) {
Object.keys(data).forEach(docKey => {
 firestore.collection(collectionKey).doc().set(data[docKey]).then((res) => {
    console.log("Document " + docKey + " successfully written!");
}).catch((error) => {
   console.error("Error writing document: ", error);
});
});
}