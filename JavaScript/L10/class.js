class person{
    constructor(fname, lname) {
        this.fname = fname; 
        this.lname = lname;
    }
 getfullname() {
        return `${this.fname} ${this.lname}`
    }
}
person1 = new person('xyz', 'abc');
person2 = new person('Khushal', 'Singh');
console.log(person2.getfullname());
console.log(person1.getfullname());