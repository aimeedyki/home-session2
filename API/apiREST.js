let http = require('https');
function getContent(options, cb){
    http.get(options, function(res){
        let body = " ";
        res.on('data', function(data){
            body += data;
        });
        res.on('end', function(){
           let content = body.toString();
            cb(null, content);
        });
        res.on('error', cb);
    })
    .on('error',cb)
    .end();
}
let options = {
    host:'api.github.com',
    path: '/users/aimeedyki',
    method: 'GET',
    headers: {'user-agent' : 'node.js'}
};
getContent(options, function(err, content){
    if (err){
        return console.log('Error while trying to get getContent: ' + err.message);
    }
    console.log(content);
}); 