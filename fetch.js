let limit = 12
let page = 1
let main_tg = document.querySelector("main")



function fetchRecipes(page,limit) {
    let offset = (page - 1) * limit;
   return fetch(
        `https://api.spoonacular.com/recipes/complexSearch?number=${limit}&offset=${offset}&apiKey=${apiKey}`
    )
    .then(res => res.json())
    .then(data => {
        console.log(data)
        return data;
    })};