import { fetchAllRecipes } from "./api.js";
import { getFavourites } from "./storage.js";
import { renderFavourites } from "./ui.js";

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