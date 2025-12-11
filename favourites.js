import { fetchAllRecipes } from "./api.js";
import { removeFromFavourites,getFavourites } from "./storage.js";
import { renderFavourites } from "./ui.js";

let mainContainer = document.querySelector(".container")

async function loadfavouritesPage() {
    let allrecipes = await fetchAllRecipes()
    console.log(allrecipes)
    const favIds = getFavourites()
    console.log(favIds)

    const favRecipes = allrecipes.filter(rec => favIds.includes(rec.id.toString()))
    console.log(favRecipes)
    renderFavourites(favRecipes)
}

loadfavouritesPage() 

mainContainer.addEventListener('click',(e) => {
    let btn = e.target.closest(".remove-fav")
    if (!btn) {return};
    let id = (btn.dataset.id)
    console.log("hii")

    removeFromFavourites(id)

    loadfavouritesPage()
})

