function MyAsyncF() {
    let p = new Promise(function (resolve) {
        console.log("Hii there")
        resolve();
        
    })
    return p;
}
async function main() {
    let a = await (MyAsyncF());
    console.log(a);
}