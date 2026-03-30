const promiseOne = new Promise(function (resolve, reject) {
    //Do any task
    //DB calls , cyptography, network
    setTimeout(function () {
        console.log("Async task is complete");
        resolve();
    },1000) 
}
    
)
promiseOne.then(function () {
        console.log("promise cons umed")  
})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log('async  task 2 complete')
        resolve();
    }, 1000)
    
}).then(function () { console.log('async 2 resolved') })

const promiseThree = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({username:"khushal",email:"abc@example.com"})    
    },1000)
})

promiseThree.then(function (user) {
    console.log(user);
})

const promiseFour = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = false;
        if (!error) {
            resolve({username:"me",password:"123"})
        }
        else {
            reject("Error:Something wennt wrong");
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((usernameWhichGotReturnedFromPreviousThen) => {
    console.log(usernameWhichGotReturnedFromPreviousThen)
}).catch(function (error) {
    console.log(error)
}).finally(()=>console.log("finally promise is either resolved or rejected"))


const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(function () {
        let error = true;
        if (!error) {
            resolve({username:"js",password:"123"})
        }
        else {
            reject("Error:js   wennt wrong");
        }
    },1000)
})

async function consumePromiseFive() {
    const response = await promiseFive;
    console.log(response); 
}
