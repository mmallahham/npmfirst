var sql = require('mssql');

const config = {
    user: 'sa',
    password: 'mmamma',
    server: 'localhost', // You can use 'localhost\\instance' to connect to named instance
    database: 'CLR1'
}
sql.connect(config,function(err){
//    console.log('conn error: '+err);
    var request = new sql.Request();
   request.query('select * from books',function(err,recordSet){
    if(err){
        console.log('selecr error: '+err);
    }
    console.log(recordSet);
sql.close();
});

});

