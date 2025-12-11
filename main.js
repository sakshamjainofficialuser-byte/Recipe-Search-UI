import { renderData,main_tg } from "./ui.js";
import { addtofavourites } from "./storage.js";
import { searchRecipe } from "./ui.js"
import { fetchRecipes,fetchAllRecipes } from "./api.js";

let page = 1;
let limit = 6;
let totalPages = 0;


loadPage(page);

function loadPage(pageNum) {
    renderData(pageNum, limit);   

    fetchRecipes(pageNum, limit).then(data => {
        totalPages = Math.ceil(data.total / limit);
        renderPageNumbers();
        console.log(totalPages)
    });
}


function renderPageNumbers() {
    const pageDiv = document.getElementById("Page-Number-num");
    pageDiv.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const btn = document.createElement("div");
        btn.textContent = i;
        btn.classList.add("page-num-btn");
        btn.dataset.page = i;

        if (i === page) {
            btn.style.background = "#000";
            btn.style.color = "#fff";
        } 

        if (i !== page) {
            btn.style.color = "#e68a00"
        }
        pageDiv.appendChild(btn);
    }
}


document.addEventListener("click", (e) => {
    const btn = e.target.closest(".page-num-btn");
    if (!btn) return;

    page = Number(btn.dataset.page);
    loadPage(page);
});


document.getElementById("Nextbtn").addEventListener("click", () => {
    if (page < totalPages) {
        page++;
        loadPage(page);
    }
});


document.getElementById("Prevbtn").addEventListener("click", () => {
    if (page > 1) {
        page--;
        loadPage(page);
    }
});


main_tg.addEventListener("click", (e) => {

    const favBtn = e.target.closest(".fav-btn");
    console.log(favBtn)
    if (favBtn) {
        console.log(favBtn)
        const id = favBtn.dataset.id;
        addtofavourites(id);
        return; 
    }

    const detailsCard = e.target.closest(".details-page");
    console.log(detailsCard)
    if (detailsCard) {
        const id = detailsCard.dataset.id;
        window.location.href = `details.html?id=${id}`;
    }
});

let searchQuery = document.querySelector("#search-bar")
let searchBtn = document.querySelector("#search-button")

let allrecipes = []
allrecipes = fetchAllRecipes().then(data => {
    allrecipes = data
    console.log(allrecipes)
})


function debounce(callback, delay) {
  let timeout;

  return function (...args) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}


let form = document.querySelector(".submit-form")
form.addEventListener("submit",(e) => {
    e.preventDefault()
    let query = searchQuery.value.trim().toLowerCase()
    console.log(query)
    console.log(allrecipes)
    const filterdRecipe = allrecipes.filter((recipe) => 
    recipe.name.toLowerCase().includes(query)
)
    searchRecipe(filterdRecipe)
    console.log(filterdRecipe)
})
