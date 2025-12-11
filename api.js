export function fetchRecipes(page,limit) {
    let skip = (page - 1) * limit;
   return fetch(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
    )
    .then(res => res.json())
    };


export function fetchAllRecipes() {
    return fetch(
        "https://dummyjson.com/recipes?limit=500&skip=0"
    ).then(response => response.json())
    .then(data => data.recipes)
}

export function fetchRecipeById(id) {
    return fetch(
        `https://dummyjson.com/recipes/${id}`
    ).then(resp => resp.json())
}