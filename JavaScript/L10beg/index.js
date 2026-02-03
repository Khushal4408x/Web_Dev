//---------------------Prototype&Polyphills ---------------------------
const arr = [1, 2, 3, 4, 5, 6,];

//Error: .forEach funct does'nt exist on arr variable
//Real signature ko samjho ,ie, funct ka i/o ,
if (!Array.prototype.myforEach) {
    Array.prototype.myforEach = function (userFn) {
        const originalArr = this;//curr object ki taraf point karta hai
        for (let i = 0; i < originalArr.length; i++){
            userFn(originalArr[i], i);
        }  
    };
}
if (!Array.prototype.myMap) {
    Array.prototype.myMap = function (userFn) {
        const result = []
        for (let i = 0; i < this.length; i++) {
            const value = userFn(this[i], i);
            result.push(value);
        }
        return result;
    };
}
if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userfn) {
        const newarr=[]
        for (let i = 0; i < this.length; i++) {
            if (userfn(this[i],i)) {
                newarr.push(this[i]);
            }
        }
        return newarr;
    };
}
arr.myforEach(function (value, idx) {
    console.log(`value at idx ${idx} is ${value}`); 
});
//Map
//Signature: return new arr | input: userfunct
//apply usr funct on each element of original arr(this)
const n = arr.myMap((e) => e * 3);
console.log(n);

//Filter
//Signature: Return -new arr | input: userFn,
//agar user ka funct True return karta hai to current value ko new array me dal do

const n3 = arr.myFilter((e)=>e%2==0); // e%2==0 ko agar parenthesis me pack karo to error aa rha
console.log(n3);