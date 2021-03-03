const { mongoClient } = require('mongodb').mongoClient;

const dbUrl = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@buster.boqc9.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

function initialize(dbName, dbCollectionName, succesCallback, failureCallback) {
  mongoClient.conect(dbUrl, function (err, dbInstance) {
    if (err) {
      console.log(`[MongoDB connection] ERROR: ${err}`);
      failureCallback(err);
    } else {
      const dbObject = dbInstance.db(dbName);
      const dbCollection = dbObject.collection(dbCollectionName);
      console.log('[MongoDB connection] SUCCES');

      succesCallback(dbCollection);
    }
  });
}

module.exports = {
  initialize,
};
