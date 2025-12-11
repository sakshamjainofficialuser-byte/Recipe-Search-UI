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
// 
export function getshopplist() {
    return JSON.parse(localStorage.getItem("shoppinglist")) || []
}

export function savetoShoppingList(list) {
    localStorage.setItem("shoppinglist",JSON.stringify(list))
}
export function addtoShoppingList(id,name,ingredients) {
    let list = getshopplist()

    list.push({id,
        name,
        ingredients})
    savetoShoppingList(list)
}