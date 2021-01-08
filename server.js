const express = require('express');
const app = express();
app.use(express.static('public')); 

const https = require('https');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get(`https://mc.nkmrepl.repl.co`);
}, 1);

var shell = require('shelljs');
  
shell.exec('java -Xmx1024M -Xms1024M -jar server.jar nogui')
