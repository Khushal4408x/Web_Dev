const person={
    x: 10,
    firstName:'Khushal',
    lastName: 'Singh',
    subjects: ['Os', 'Hpc', 'fods'],
    isSleepy: false,
    getFullName: function () {
        return (this.firstName + this.lastName); 
    },
    address: {
        hNo:1,State:"UP",countryCode:"In",
    },
}
console.log(person.address.State)
