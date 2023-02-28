/////////////////////


const btn_btn = document.querySelector(".btn_btn");

btn_btn.addEventListener("click", () => {
    fetch("https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch")
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });
});


// fetch('https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch', {
//     method: 'GET',
//     headers: {
//         'Content-type': 'application/json'
//     }
// }).then((response) => response.json()
// ).then((data) => {
//     data.forEach(item => console.log(item))
// })





/////////////////////////////

const block = document.querySelector(".block");
const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");
let count = 1;
const goToFetch = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${count}`)
        .then((response) => response.json())
        .then((data) => {
            const div = document.createElement("div");
            div.setAttribute("class", "card");
            div.innerHTML = `
              <h2>${data.title}</h2>
              <span>${data.id}</span>
              <h3>${data.completed}</h3>
          `;
            block.append(div);
        });
};

btnNext.addEventListener("click", () => {
    count++;
    goToFetch();
});

btnPrev.addEventListener("click", () => {
    if (count > 1) {
        count--;
        goToFetch();
    } else {
        alert("error");
    }
});




