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
addBookToLibrary("HOBBIT", "ROWLING", "IN MY OPINION, 1", "IDONTKNOW");

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



    let radiobox = document.createElement('input');
    radiobox.type = 'radio';
    radiobox.id='truth'
    radiobox.name = 'radio';
    radiobox.value = 'yes'; 
    radiobox.checked='checked';

    let radiobox1 = document.createElement('input');
    radiobox1.type = 'radio';
    radiobox1.name = 'radio';
    radiobox1.value = 'no';

   bloco>p.appendChild(radiobox);
   bloco>p.appendChild(radiobox1);
}

}
function removeItem() {
    this.parentNode.remove();
}
function readChange() { if (document.getElementsById('truth').checked==true) {
    return this.read="yes"} return this.read==="no"
}


// could use regExp

// pseudo code: appendChild radio button yes raddio button no
// book.prototype = function if yes book.read=yes. return book.read=no

Book().prototype.readChange;
displayBook();

// I had a good code, but confused myself on Debugging and the YES doesnt show up anymore. Well, I could do It so 
// thats alright. What I couldnt do though is creating a radio button list for each p, but I think that by using variables
// It's easily achievable. Let's follow up study.



    
