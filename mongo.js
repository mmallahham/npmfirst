var MongoClient = require('mongodb').MongoClient;
//var url = "mongodb://localhost:27017/library";
var url = "mongodb+srv://mmallahham:MMAmma123@cluster0-xrxwg.mongodb.net/myDB" ;
MongoClient.connect(url, function(err, db) {
  
  var dbase = db.db('myDB');
  const collection = dbase.collection('books');
  collection.insertMany([{"Auther":"Not me"}],(err,resualt)=>{
    console.log(err);
  });
  console.log(collection);
  db.close();
});