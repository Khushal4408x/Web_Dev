let marks=[34, 23, 24, 93, 73, 25];
console.log(marks);
console.log(marks.length);
let arr=[1,"khushal",3,true];
console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);
console.log(arr[3]);
console.log(typeof arr);
arr.push(3);
arr[0]=299;
//pop operation : Delete last element of array
arr.pop();
console.log(arr);
arr.unshift("hello");//add element in starting of array
arr.shift();//delete first element of array
//Shift and Unshift are slower than pop and push and should be avoided in large arrays
let arr2=[1,2,3,4,5];
for(let i=0;i<arr2.length;i++){
    console.log(arr2[i]);
}
for(let i in arr2){
    console.log(arr2[i]*10);}
    for(let num of arr2){
        console.log(num*100);
    }
let arr3=arr2;
arr3.push(6);
console.log(arr2);
console.log(arr3);//both arr2 and arr3 are same(copied by refrence)
//if we want to create a copy of array then use slice method
let arr4=arr2.slice(0);//creates a new array
//Primitive data types are copied by valule
//Non primitive data types are copied by reference
const mynums=[1,2,3,4,5];
const mynums1=mynums.slice(1,4);
mynums.splice(1,3);//modifies the original array
console.log(mynums);
const cars=["audi","bmw","ferrari","ford"];
const models=["x1","x2","x3","x4"];
cars.push(models);
console.log (cars);
cars.pop();
const cars1=cars.concat(models);
console.log(cars1);                
//to avoid nested array use spread operator 
const cars2=[...cars,...models];
console.log(cars2);
const names=["khushal","rahul","rohan","sonu"];
console.log(names.toString());
console.log(names.join(" * "));
console.log(names.indexOf("rohan"));
console.log(names.includes("rohan"));
names.sort();
console.log(names);//sort in alphabetical order according to ascii values
console.log(names.reverse());
const a=[101,90,80,32,91];
a.sort();
console.log(a);//to sort in ascending order
const b=[101,90,80,32,91];
a.sort((a,b)=>a-b);//comparator function (a,b ko lo, if a-b -ve then order same rhega , +ve to swap)
//-ve :pehle a ayega fir b 
//+ve :pehle b ayega fir a 
a.sort((a,b)=>b-a);//for descending order or .reverse() use kar skte ho
const arr5=[1,2,3,4,5,[6,[6.5,6.75],7]];
console.log(arr5[5]);
console.log(arr5[5][0]);
console.log(arr5[5][1][0]);
console.log(arr5.flat());//flattens the array by 1 level
console.log(arr5.flat(2));//flattens the array by 2 levels
//console.log(arr5.flat(infinity));//flattens the array by infinite levels
arr.sort();
console.log(arr);//sorts the array in alphabetical order
