import { getShoppingList, saveShoppingList } from "./storage.js";
import { renderShoppingList } from "./ui.js";

function loadShoppingPage() {
    const list = getShoppingList();
    renderShoppingList(list);
}

loadShoppingPage();

// REMOVE INGREDIENT EVENT
document.addEventListener("click", e => {
    if (!e.target.classList.contains("remove-shopping")) return;

    const id = e.target.dataset.id;
    const ingredient = e.target.dataset.ing;

    let list = getShoppingList();s

    // remove item
    list = list.filter(item => !(item.id == id && item.ingredient === ingredient));

    saveShoppingList(list);

    renderShoppingList(list);
});

let list = getShoppingList();
renderShoppingList(list)