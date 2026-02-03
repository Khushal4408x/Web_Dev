fs = require("fs")
function MyAsyncF() {
    console.log("Inside MyAsyncF")
    return new Promise(function (resolve) {
        console.log("inside Promise")
        fs.readFile("a.txt", "utf-8", function (err, data) {
            console.log("Before resolve");
            resolve(data);
        });
    })
}
//call back function to call
function onDone(data)
{
    console.log(data)
}
// MyAsyncF().then(onDone);

var a = MyAsyncF();

console.log(a); a.then(onDone);
console.log('Hiiiii')