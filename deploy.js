var FtpDeploy = require("ftp-deploy");
var ftpDeploy = new FtpDeploy();
 
var config = {
    user: "u97215176",
    host: "access782277410.webspace-data.io",
    port: 22,
    localRoot: __dirname,
    remoteRoot: "/nal/pp2019",
    // include: ["*", "**/*"],      // this would upload everything except dot files
    include: ["index.html", "build/app.bundle.js", "css/*", "data/*"],
    // e.g. exclude sourcemaps, and ALL files in node_modules (including dot files)
    //exclude: ["dist/**/*.map", "node_modules/**", "node_modules/**/.*", ".git/**"],
    // delete ALL existing files at destination before uploading, if true
    deleteRemote: false,
    // Passive mode is forced (EPSV command is not sent)
    forcePasv: true
};
// use with promises
//ftpDeploy.deploy(config).then(res => console.log("finished:", res)).catch(err => console.log(err));
try {
    ftpDeploy.connect(config);
} catch(e) {
    console.log(e);
}
