import { fetchRecipes } from "./api.js"

export let main_tg = document.querySelector("main")

export function renderData(page,limit) {
    main_tg.innerHTML = ""
    fetchRecipes(page,limit).then(response => {
                
        for (let i = 0; i < response.recipes.length; i ++) {

            let div = document.createElement("div");
            div.classList.add('details-page');
            div.dataset.id = response.recipes[i].id

            let img = document.createElement("img")

            img.setAttribute('src',response.recipes[i].image)

            let h3_tag = document.createElement("h3")

            let p_tag = document.createElement("p")
            const btn = document.createElement("button")
            btn.classList.add("fav-btn");
            btn.dataset.id = response.recipes[i].id;
            btn.textContent = "Add to Favourites";

            p_tag.innerHTML = response.recipes[i].description;
            h3_tag.innerHTML = response.recipes[i].name
            div.append(img,h3_tag,p_tag,btn)

            main_tg.appendChild(div) 
            }
        })}


export function renderFavourites(favRecipes) {
    const container = document.querySelector(".container")
    container.innerHTML = ""

    favRecipes.forEach((r) => {
        let card = document.createElement('div')
        let img_tag = document.createElement('img')
        img_tag.setAttribute("src",r.image)
        let h3 = document.createElement("h3")
        h3.textContent = r.name
        let btn_tag = document.createElement("button")
        btn_tag.textContent = "Remove From Favourites"
        btn_tag.classList.add("remove-fav");
        btn_tag.dataset.id = r.id;

        card.append(img_tag,h3,btn_tag)
        container.append(card)
    });
}


export function renderRecipeDetails(recipe) {
    console.log(recipe)
    const recipedetailContainer = document.querySelector("main")
    recipedetailContainer.innerHTML = `<img src=${recipe.image}>
<h2>${recipe.name}<h2>
<h3>Ingredients</h3>`

    for (let i = 0; i < recipe.ingredients.length; i ++) {
        let ingredient_tag = document.createElement('div')
        let addtolistBtn = document.createElement("button")
        ingredient_tag.innerHTML = recipe.ingredients[i]
        addtolistBtn.setAttribute("class","addtolistbtn")
        addtolistBtn.textContent = "Add to list"
        console.log(ingredient_tag)
        ingredient_tag.append(addtolistBtn)
        recipedetailContainer.append(ingredient_tag)
    }
    let instruction_heading = document.createElement("h3")
    instruction_heading.innerHTML = "Instruction"
    recipedetailContainer.append(instruction_heading)
    for (let j = 0; j < recipe.instructions.length; j ++) {
        let instructions_tag = document.createElement('p')
        instructions_tag.innerHTML = recipe.instructions[j]
        console.log(instructions_tag)
        recipedetailContainer.append(instructions_tag)
    }
}

export function renderShoppingList(list) {
    const container = document.createElement('div')
    
}