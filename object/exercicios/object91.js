const contactBook = {
    contacts: [
        { name: 'John Doe', phone: '555-1234', email: 'john@example.com' },
        { name: 'Jane Smith', phone: '555-5678', email: 'jane@example.com' }
    ],

    addContact(name, phone, email) {
        this.contacts.push({ name , phone, email });
    },

    findByName(contactName) {
        const findName = this.contacts.find(contact => contact.name === contactName);

        if (!findName) {
            return `The name was not found at the list`;
        }

        return `Name: ${findName.name}, phone: ${findName.phone}, email: ${findName.email}`;
    }
};

console.log(contactBook.findByName('John Doe'));

