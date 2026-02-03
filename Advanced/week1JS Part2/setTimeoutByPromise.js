function MyAsyncF() {
    return new Promise(function (resolve) {
        setTimeout(resolve, 1000);
    })
}
function onDone() {
    console.log("Promise completed")
}
MyAsyncF().then(onDone);