const digitalLibrary = {
    users: [
        { 
            name: 'Mariana',
            booksRead: 15
        },
        {
            name: 'Lucas',
            booksRead: 8
        },
        {
            name: 'Fernanda',
            booksRead: 22
        },
        {
            name: 'Ricardo',
            booksRead: 5
        }
    ],

    addUser(name = 'Guest', booksRead = 0) {
        const existing = this.users.find(user => user.name.toLowerCase() === name.toLowerCase());

        if (existing) {
            return `User "${name}" already exists.`
        } 

        this.users.push({ name, booksRead });
    },

    getTopReader() {
        const topReader = this.users.reduce((topReader, reader) => topReader.bookRead > reader.booksRead ? topReader : reader);

        return `Person who reads more books: ${topReader.name}.`;
    }
};

digitalLibrary.addUser('Ramon', 2);
console.log(digitalLibrary);

console.log(digitalLibrary.getTopReader());
