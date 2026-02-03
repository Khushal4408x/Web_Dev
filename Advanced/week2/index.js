const express = require('express')
//http server listening on port 3k
const port = 3000
const app =express();//this is not a class this function returns something and app stores return value

//similar to fs.readFile("path","utf-7",(some call back funct which gets called after the file is read));
app.get('/', function(req, res)  {//when someone will try to  hit backend server this callback funct will run

    res.send("req reached");
    let a=0;
    for(let i=0;i<10000000000000;i++){
        a+=1;
    }

  res.send('Hello World!');
})
//create a to do app which stores todos on the server
//create http server from scratch in cpp
//create an http server int golang using the gurrila framework ORR
//create an http server in rust using actix web orr
//create java
 
app.listen(port)