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
let recipeing = recipe.ingredients 

recipedetailContainer.addEventListener('click',(e) => {
    let addlistbtn = e.target.closest(".addtolistbtn");
    if (!addlistbtn) {return};
    console.log("added to favourites")
    addtoShoppingList(recipeid,recipename,recipeing)
})
