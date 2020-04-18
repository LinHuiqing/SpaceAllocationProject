import Vue from 'vue'
import Vuex from 'vuex'
import allocation from './modules/allocation'
import login from './modules/login'
import form from './modules/form'
// import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

// const debug = process.env.NODE_ENV !== 'production'
// const admin = require('../../node_modules/firebase-admin');
// const serviceAccount = require("../../serviceAccountKey.json");
// const data = require("../../trial.json");
// const collectionKey = "yooo"; //name of the collection
// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL: "https://spaceallocation311.firebaseio.com"
// });
// const firestore = admin.firestore();
// const settings = {timestampsInSnapshots: true};
// firestore.settings(settings);
// if (data && (typeof data === "object")) {
// Object.keys(data).forEach(docKey => {
//  firestore.collection(collectionKey).doc().set(data[docKey]).then(() => {
//     console.log("Document " + docKey + " successfully written!");
// }).catch((error) => {
//    console.error("Error writing document: ", error);
// });
// });
// }

export default new Vuex.Store({
  modules: {
    allocation,
    login,
    form
  },
  // strict: debug,
  // plugins: debug ? [createLogger()] : []
})
