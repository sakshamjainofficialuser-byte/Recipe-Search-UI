import { renderData,main_tg } from "./ui.js";
import { addtofavourites } from "./storage.js";
import { searchRecipe } from "./ui.js"
import { fetchAllRecipes } from "./api.js";

let page = 1;
let limit = 6;


renderData(page,limit)

const Nextbtn = document.querySelector("#Nextbtn")
Nextbtn.addEventListener("click",next_page);
function next_page() {
    renderData(page,limit)
    let span_tag = document.createElement("p")
    span_tag.innerHTML = `<p>${page}</p>`
    footerDiv.append(span_tag)
    page = page + 1
    }



main_tg.addEventListener("click",(e) => {
    let favBtn = e.target.closest(".fav-btn")
    if (!favBtn) {return};
        console.log("add to favourites")
        const id = favBtn.dataset.id
        addtofavourites(id)
    })

    

main_tg.addEventListener('click',(e) => {
    let detailsCard = e.target.closest(".details-page");
    if (!detailsCard)   {return};
        console.log("detailschaiye")
        const id = detailsCard.dataset.id;
        window.location.href = `details.html?id=${id}`
        console.log(id)
})


let searchQuery = document.querySelector("#search-bar")
let searchBtn = document.querySelector("#search-button")

let allrecipes = []
allrecipes = fetchAllRecipes().then(data => {
    allrecipes = data
    console.log(allrecipes)
})

let form = document.querySelector(".submit-form")
form.addEventListener("submit",(e) => {
    e.preventDefault()
    let query = searchQuery.value.trim().toLowerCase()
    console.log(query)
    console.log(allrecipes)
    const filterdRecipe = allrecipes.filter((recipe) => {
        return recipe.name.toLowerCase().includes(query)
})
    searchRecipe(filterdRecipe)
    console.log(filterdRecipe)
})

