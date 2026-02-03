const user ={
    name: "xyx",
    age :56,
    city:"Noida",
    amount:1000,
    "home address":"Prayagraj"
}
console.log(user);
console.log(user.name);
user.adhar=1234567890;
console.log(user);
user.amount=user.amount+500;
console.log(user);
delete user.adhar;
console.log(user);
console.log(user["city"]);
const user2=user;//copy by reference
user2.age=79;
console.log(user);
console.log(user2);
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));
for(let keys in user){
    console.log(keys,user[keys]);
}
const{name:userName,age:userAge}=user;
console.log(userName,userAge);
const arr=[10,20,30,40,50];
const[arr1,arr2]=arr;
console.log(arr1,arr2);
console.log(userName,userAge);





























