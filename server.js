const express = require('express');
const app = express();
app.use(express.static('public')); 

const https = require('https');
app.get("/", (request, response) => {
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  https.get('');//put the .co link generated in repl here
}, 1);

var shell = require('shelljs');
  
shell.exec('nohup java -Xmx1024M -Xms1024M -jar server.jar nogui')

//Use nohup java -Xmx1024M -Xms1024M -jar server.jar nogui & for hosting with no interface. 
//Use nohup java -Xmx1024M -Xms1024M -jar server.jar for hosting with GUI. Can have errors and can make the server slower compared to "nogui".