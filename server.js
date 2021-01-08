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
  
shell.exec('nohup java -Xmx1024M -Xms1024M -jar server.jar nogui &')

//Use nohup java -Xmx1024M -Xms1024M -jar server.jar nogui & for temporary hosting with no interface. 
//Use nohup java -Xmx1024M -Xms1024M -jar server.jar & for temporary hosting with GUI. Can have errors and can make the server slower compared to "nogui".