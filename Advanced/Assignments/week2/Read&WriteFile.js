const fs=require("fs")
fs.readFile('rough.txt','utf-8',function(err,data){
    if(err){console.error(err);return;}
    
        console.log(data);
    
})
fs.appendFile('rough.txt',"Hello World\n", function(err){
    if(err){throw err;}
   console.log("file written success")
})