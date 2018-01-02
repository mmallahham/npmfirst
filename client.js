var request = require('http');
var assert = require('assert');
var cluster = require('cluster');

if(cluster.isMaster){
    for(var i = 1 ;i < 3;i++){
        console.log('Forking worker ' + i + ' ...');
        cluster.fork();
    }

    cluster.on('fork',function(worker){
        console.log('worker' + worker.id +' is forked.');
    });
    cluster.on('online',function(worker){
        console.log('worker' + worker.id +' is online.');
    });
    cluster.on('listening',function(worker){
        console.log('worker' + worker.id +' is listening.');
    });
    cluster.on('exit',function(worker){
        console.log('worker' + worker.id +' is destroyed.');
    });


}

console.log(cluster.isMaster + ' calling the request...');


request.get('http://localhost:3000',function(respone){
 console.log(respone.statusCode);
     if(cluster.isWorker){
       console.log(cluster.settings);
       cluster.worker.destroy();
    }
});

// describe('test 1',function(){
//     it('try to log',function(){
//         console.log('log is writen.');
//     })
// });