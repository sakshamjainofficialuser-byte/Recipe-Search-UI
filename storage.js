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
export function addtoShoppingList(id,name,ingredients) {
    let list = getShoppingList()

    list.push({id,
        name,
        ingredients})
    saveShoppingList(list)
}
