const fs=require("fs")
let arr=[]

const data=fs.readFileSync("rough.txt","utf-8");
let word='';
for(let i=0;i<data.length;i++){
    if(data[i]!==' '){
        word+=data[i];
    }
    else if(data[i]===' ' && data[i-1]!==' ')
{
    if(word) arr.push(word);
    word='';
}}
if(word) arr.push(word);
console.log("parsed words: ",arr);
fs.writeFileSync("rough.txt",'');

for(let i=0;i<arr.length;i++){
    fs.appendFileSync("rough.txt",arr[i]+' ')
}
console.log(fs.readFileSync("rough.txt","utf-8"));
