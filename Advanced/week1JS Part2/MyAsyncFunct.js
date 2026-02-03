const fs=require('fs')
function MyAsyncF(cb) {
    fs.readFile('a.txt', 'utf-8', function (err, data) {
        cb(data);
    });
}
function onDone(data) {
    console.log(data)
}
MyAsyncF(onDone)
