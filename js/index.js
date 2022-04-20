document.addEventListener("DOMContentLoaded", function() {

const leftListArea = document.getElementById("list")
const rtListArea = document.getElementById("show-panel")

// console.log(leftListArea)


function renderBookList(objBooks) {
    const li = document.createElement(`li`);
    li.textContent = objBooks.title
    li.addEventListener('click', () => {
        const first = document.createElement(`li`)
        const btn = document.createElement(`button`)
        const third = document.createElement('h2')
        const fourth = document.createElement('h3')
        const fifth = document.createElement('h4')
        const p = document.createElement(`p`)
        const img = document.createElement(`img`)
        const ul = document.createElement(`li`)
        
        rtListArea.innerHTML = ''

        img.src = objBooks.img_url
        third.textContent = objBooks.title;
        fourth.textContent = objBooks.subtitle;
        fifth.textContent = objBooks.author
        p.textContent = objBooks.description
        btn.textContent = 'LIKE'
        rtListArea.append(img, third, fourth, fifth, p, btn)
        ul.id = 'user-list'
        objBooks.users.forEach(obj => {
            first.textContent = obj["username"]
            ul.append(first)
            // console.log(obj['username'])

            
        })
        const toggleLike = ("click", function(){
            if(btn.innerText === "LIKE") {
                btn.innerText = "UNLIKE";
            } else {
                btn.innerText = "LIKE"
            }
        });
        rtListArea.append(ul)
        btn.addEventListener("click",toggleLike)
})

leftListArea.append(li)
}


fetch(`http://localhost:3000/books`)
    .then(response => response.json())
    .then(books =>{
        books.forEach(objBooks => {
            renderBookList(objBooks)                
        });    
    })
});
