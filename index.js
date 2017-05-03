var PouchDB = require('pouchdb');

var db = new PouchDB('kittens');

PouchDB.debug.enable('*');

var doc = {
    "_id": "1",
    "name": "vinay"
};

//db.put(doc);

//db.get('1').then(function(doc){
//    console.log(doc);
//});

db.get('1').then(function (doc) {
  doc.name = 'arun';
  return db.put(doc);
}).then(function () {
  return db.get('1');
}).then(function (doc) {
  console.log(doc);
});