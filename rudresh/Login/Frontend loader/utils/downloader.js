'use strict';

var mdl = {};
mdl.downloadWithHTTPAuth = function(host, http_auth, down_path, callback){
    
    var http = require('http');
    var auth = 'Basic ' + new Buffer(http_auth.user + ':' + http_auth.pass).toString('base64');
    var options = {
        'host'   : host,
        'path'   : down_path,
        'headers': {
            'Authorization': auth,
        }
    };
    
    var tmp = require('tmp');
    var tmpobj = tmp.fileSync();
    var fs = require('fs');
    var file = fs.createWriteStream(tmpobj.name);
    var req = http.get(options, function(response){
        response.pipe(file);
        file.on('finish', function(){
            //file.close();
            file.destroy();
            
            callback(null, tmpobj.name);
            //tmpobj.removeCallback();
        });
    }).on('error', function(err){
        fs.unlink(tmpobj.name);
        callback(err);
    });
    
    req.setTimeout(3000, function(){
        req.abort();
        callback('HTTP request timed out.');
    })
};

module.exports = mdl;
