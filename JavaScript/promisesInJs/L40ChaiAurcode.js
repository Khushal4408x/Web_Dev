const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 1 is complete');
        resolve();
    },1000)
})

promiseOne.then(()=>console.log("promise1 consumed..."))

new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("async 2 completed")
    }, 1000);
}).then(()=>{
    console.log("promise 2 consumed...")
})

const promiseThree= new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("Promise 3 passing data from resolve to then")
        resolve({"name":"Khushal","email":'khushal@gmail.com'})
    }, 1000);
})

promiseThree.then(function(data){
    console.log(data);
})

const promiseFour= new Promise(function(resolve ,reject){
    const error=false;
    if(!error){
        console.log("async Task 4 completed without errors");
        resolve({"status":"promise 4 resolved"});
    }
    else{
        reject("there was an error");
    }

})
promiseFour.then(function(data){
    console.log(data);
    return data;
})
.then(function(inheritedDataFromAboveThen){
    console.log(inheritedDataFromAboveThen);//only the returned val from prev then will be inherited.
    console.log({"status":"Inherited"});
})
.catch(function(err){
    console.log(err);
})

fetch("https://jsonplaceholder.typicode.com/users")
.then((response)=>{
    return response.json();
})
.then((res)=>{
    console.log(res);
})
.catch((error)=>{
    console.log("e:",error)
})