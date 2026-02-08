const fs=require('fs');


const data= fs.readFileSync('rough.txt','utf-8');
const arr=data.trim().split(/\s+/);


console.log('Parsed words:',arr );
fs.writeFileSync('rough.txt',arr.join(' '));
console.log("Final:",fs.readFileSync("rough.txt",'utf-8'));