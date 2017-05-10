var sqlite3 = require('sqlite3').verbose();
var file = "db/simpleserver.db"
var db = new sqlite3.Database(file);
db.all("SELECT name, year FROM customers", function(err, rows) {
    rows.forEach(function (row) {
        console.log(row.name + ' ' + row.year);
    })
});
db.close();
