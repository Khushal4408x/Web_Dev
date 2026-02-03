Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
}
function greet(name) {
    console.log(`Hello ${name}`);
}
greet.describe();

function div (a, b, operation) {
    return operation(a, b);
}
const result = div(3, 4, (x, y) => x / y);//Function div is first class function as its returning a funct and also using it as parameter;




function createCounter() {
    let count = 0;
    return function () {
        count++;
        return count;
    }
}
//console.log(count) //error since count is out of scope
const counter = createCounter();
console.log(counter());//tiffin concept. counter can access the count variable. Child funct can access vars of parent funct
//Prt Pdr creatine Am
//dumbel and res band Har
