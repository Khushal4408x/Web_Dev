const obj1 = {
    fname: 'Khushal', lname: 'Singh', age: '19',
    getfullname: function () {
        if (this.fname !== undefined) {
            return (`${this.fname} `);
        }
    }
};
const obj2 = {
    fname: 'Manish', lname: 'Kumar', age: '-1',
};
// obj2.__proto__ = obj1;
// // obj1.__proto__ = null;
//Dry Dont repeat yourself
// console.log(person1);
console.log(obj1.getfullname());
console.log(obj2.getfullname());
console.log(obj2.toString());