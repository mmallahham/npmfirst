var MongoClient = require('mongodb').MongoClient;

var uri = "mongodb+srv://mmallahham:MMAmma123@cluster0-xrxwg.mongodb.net/library";
MongoClient.connect(uri, function(err, db) {
    console.log(db);
  //var collection = db.collection('books');
  db.close();
});