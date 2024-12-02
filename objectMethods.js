const person = {
    firstName: 'Mahmud Hasan',
    lastName: 'Sadi',
    age: 26,
    fullName: function () {
        return (this.firstName + " " + this.lastName + " " + this.age)
    }
};
console.log(person.fullName());