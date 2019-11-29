/*
var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "u97215176",
    host: "access782277410.webspace-data.io",
    port: 22,
    localRoot: __dirname,
    remoteRoot: "/nal/pp2019",
    include: ["dist/*"],
    //exclude: [""],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: true,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true,
    continueOnError: true
};

ftpDeploy.on("uploading", function(data) {
    console.log(data.totalFilesCount); // total file count being transferred
    console.log(data.transferredFileCount); // number of files transferred
    console.log(data.filename); // partial path with filename being uploaded
});
ftpDeploy.on("uploaded", function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("log", function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on("upload-error", function(data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

// use with promises
//ftpDeploy.deploy(config).then(res => console.log("finished:", res)).catch(err => console.log(err));
try {

    ftpDeploy.deploy(config).then(res => console.log("finished:", res)).catch(err => console.log(err));
} catch(e) {
    console.log(e);
}
*/



'use strict';

const FtpDeploy = require('ftp-deploy');
const path = require('path');
const ftpDetails = {
    user: "u97215176",
    pass: null,
    host: "access782277410.webspace-data.io",
    port: 22,
    path: "/nal/pp2019"
};
const ftpDeploy = new FtpDeploy();
const config = {
    user: ftpDetails.user,
    //password: ftpDetails.pass, // optional, prompted if none given
    host: ftpDetails.host,
    port: ftpDetails.port,
    localRoot: path.join(__dirname, '/dist'),
    remoteRoot: ftpDetails.path,
    include: ["dist/*"],
    secure: true,
    pasv: true
};

ftpDeploy.on('log', function(data) {
    console.log(data);
});
ftpDeploy.on('upload-error', function(data) {
    console.log(data.err); // data will also include filename, relativePath, and other goodies
});

ftpDeploy.on('uploaded', function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on('uploading', function(data) {
    console.log(data); // same data as uploading event
});
ftpDeploy.on('error', function(data) {
    console.log(data); // same data as uploading event
});

ftpDeploy.deploy(config, function(err) {
if (err) {
    console.log(err);
} else {
    console.log('finished');
    //done();
}
});
//}
/*
module.exports = {
  deploy
};
*/