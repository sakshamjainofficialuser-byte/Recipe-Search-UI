let limit = 12
let page = 1
let footerDiv = document.querySelector("#Page-Number")

export function fetchRecipes(page,limit) {
    let skip = (page - 1) * limit;
   return fetch(
        `https://dummyjson.com/recipes?limit=${limit}&skip=${skip}`
    )
    .then(res => res.json())
    };
