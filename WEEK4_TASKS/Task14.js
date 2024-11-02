function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
}

const book1 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
const book2 = new Book("1984", "George Orwell", 1949);

console.log(book1); // Book { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 }
console.log(book2); // Book { title: '1984', author: 'George Orwell', year: 1949 }
