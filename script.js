let myLibrary = [];

function Book(titles, authors,pages,read) {
    this.title= titles;
    this.author=authors;
    this.page=pages;
    this.read=read;


}
function addBookToLibrary(titles, authors,pages,read) {
let juniorbook = new Book(titles, authors,pages,read) 
myLibrary.push(juniorbook);
}

addBookToLibrary("HARRY POTTA", "I DONT KNOW", "DONT KNOW  EITHER", "NO, BUT WOULD LIKE");
addBookToLibrary("HOBBIT", "ROWLING", "IN MY OPINION, 1", "YES");

console.log(myLibrary[0].title);

