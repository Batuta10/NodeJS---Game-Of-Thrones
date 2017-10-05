var mongo = require('mongodb');

var connMongoDB = function () {
    var db = new mongo.Dd(
        'got',
        new mongo.Server(
            'localhost',
            27017,
            {}
        ),
        {}
    );
    return db;    
}

module.exports = function(){
    return connMongoDB;
}