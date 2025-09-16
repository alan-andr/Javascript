const person = {
    name: 'Alan',
    age: 23,

    introduceYourSelf: function() {
        console.log(`Meu nome é ${this.name}, tenho ${this.age} anos`);
    }
};

person.introduceYourSelf();