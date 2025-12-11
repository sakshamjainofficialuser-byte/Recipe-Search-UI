export function saveFavourites (favourites) {
    localStorage.setItem("favourites",JSON.stringify(favourites))
}

export function getFavourites() {
    return JSON.parse(localStorage.getItem("favourites")) || []
}

export function addtofavourites(id) {
    let favourites = getFavourites()

    if (!favourites.includes(id)){
        favourites.push(id)
    }
    saveFavourites(favourites)
}  


export function removeFromFavourites(id) {
    let favs = getFavourites();
    favs = favs.filter(x => x !== id)
    console.log(favs)
    saveFavourites(favs)
}

export function getShoppingList() {
    return JSON.parse(localStorage.getItem("shoppinglist")) || []
}

export function saveShoppingList(list) {
    localStorage.setItem("shoppinglist",JSON.stringify(list))
}

export function addtoShoppingList(id,name,newIngredient) {
    let shoppinglist = getShoppingList()
    let existingRecipe = shoppinglist.find((item) => 
        Number(item.id) === Number(id)
    )
    if (existingRecipe) {
        let existingIng = existingRecipe.ingredients.some(ing => 
            ing.ingredient === newIngredient
        );
        console.log(existingIng)
        if (!existingIng) {
            let newID;
            if (existingRecipe.ingredients.length === 0) {
                newID = 1
            } else {
                newID = existingRecipe.ingredients[existingRecipe.ingredients.length - 1].id + 1
            }

            existingRecipe.ingredients.push({
                id:newID,
                ingredient: newIngredient
            })
        } 
    } else {
        let recipe = {
            id,
            name,
            ingredients:[{
            id:1,
            ingredient:newIngredient
        }]
        }
        shoppinglist.push(recipe)
        console.log(recipe)
    }
    saveShoppingList(shoppinglist)
}

export function removeFromShoppingList(list, recipeId, id) {
    console.log(list)
    console
    for (let i = 0; i < list.length; i++) {
        if ( Number(list[i].id) === Number(recipeId)) {
            for (let j = list[i].ingredients.length - 1; j >= 0; j--) {
                if (Number(list[i].ingredients[j].id) === Number(id)) {
                list[i].ingredients.splice(j, 1)
                }
            }
        }
    }
    saveShoppingList(list)
}