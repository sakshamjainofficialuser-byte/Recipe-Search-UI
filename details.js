import { fetchRecipeById } from "./api.js";
import { renderRecipeDetails } from "./ui.js";
import { addtoShoppingList } from "./storage.js";

let recipedetailContainer = document.querySelector(".recipedetails")
const params = new URLSearchParams(window.location.search)
const id = params.get("id")

const recipe = await fetchRecipeById(id)

renderRecipeDetails(recipe)
let recipeid = recipe.id
let recipename = recipe.name



recipedetailContainer.addEventListener('click',(e) => {
    let addlistbtn = e.target.closest(".addtolistbtn");
    if (!addlistbtn) {return};
    let ingId = addlistbtn.dataset.id
    for (let i = 0; i < recipe.ingredients.length; i++) {
        if (ingId == i) {
            let recipeIng = recipe.ingredients[i]
            addtoShoppingList(recipeid,recipename,recipeIng)
        }
    }
})


