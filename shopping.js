import { getShoppingList, saveShoppingList, removeFromShoppingList } from "./storage.js";
import { renderShoppingList } from "./ui.js";

function loadShoppingPage() {
    const list = getShoppingList();
    console.log(list)
    renderShoppingList(list);
}

loadShoppingPage();

document.addEventListener("click", (e) => {
    if (!e.target.classList.contains("remove-shopping")) return;

    const recipeId = e.target.dataset.recipeId
    const id = e.target.dataset.ingredientId;

    console.log(id)
    let list = getShoppingList();

    removeFromShoppingList(list,recipeId,id)

    renderShoppingList(list);
});

let list = getShoppingList();
renderShoppingList(list)