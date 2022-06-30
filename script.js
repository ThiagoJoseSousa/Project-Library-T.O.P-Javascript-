let myLibrary = [];

function Book(titles, authors,pages,read) {
    this.title= titles;
    this.author=authors;
    this.page=pages;
    this.read=read;



}

const theHobbit = new Book("Hobbit","Rowling","1","YES");

function addBookToLibrary(itemToArray) {

myLibrary.push(itemToArray);
}

addBookToLibrary(theHobbit);
console.log(myLibrary[0]);