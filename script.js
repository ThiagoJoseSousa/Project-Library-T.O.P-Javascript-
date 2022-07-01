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

function displayBook (){
for (element in myLibrary) {
    let container = document.getElementById("container");
    let bloco = document.createElement ("div");
    let p = document.createElement("p");
    p.innerHTML= JSON.stringify(myLibrary[element]);

    
    bloco.classList.add("Books");
    container.appendChild(bloco);
    bloco.appendChild(p);

    var deleteButton = document.createElement("button");
    deleteButton.appendChild(document.createTextNode(" Remove "));
    bloco>p.appendChild(deleteButton).addEventListener("click", removeItem);

    
    
}
function removeItem() {
    this.parentNode.remove();
}
}


displayBook();
// could use regExp


