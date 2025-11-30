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
