function mySetTimeout(callback, duration) {
    setTimeout(callback, duration);
}
function promisifiedSetTimeout(duration) {
    return new Promise(function (resolve) {
        setTimeout(resolve, duration);
    })
}
const ans = promisifiedSetTimeout(1999).then(function doOndone() {
    console.log("do whatever you want after completing async function");
    
});
console.log(ans);