var express = require('express');
var router = express.Router();

// handle request and send files
router.get('/', function(req, res, next) {

    // path example
    // http://localhost:3000/files?ip=172.17.70.101&path=/download?file=C:/measure.xml&user=user3&pass=user3

    var ip = req.query.ip;
    var down_path = req.query.path;
    var auth = {
        user : req.query.user,
        pass : req.query.pass

    };

    var downloader = require('../utils/downloader');
    downloader.downloadWithHTTPAuth(ip, auth, down_path, function(err, file){
        if(err){
            console.log('Error downloading file: ' + err);
        } else{
            //res.header("Content-Type", "text/plain");
            res.sendFile(file, function(err){
                if(err){
                    console.log('Error sending file: ' + err);
                } else{
                    console.log('File sent.');
                }
            });
        }

    });


});

module.exports = router;
