var PouchDB = require('pouchdb');

PouchDB.plugin(require('pouchdb-find'));

var localDB = new PouchDB('localDB');

var remoteDB = new PouchDB('http://localhost:5984/myremotedb');

PouchDB.debug.enable('pouchdb:find');

localDB.sync(remoteDB, {
  live: true,
  retry: true
}).on('change', function (change) {
}).on('paused', function (info) {
}).on('active', function (info) {
}).on('error', function (err) {
});

localDB.createIndex({
    index: {fields: ['class']}
});

//localDB.find({
//  selector: {
//    name: 'mario'
//  }
//});
