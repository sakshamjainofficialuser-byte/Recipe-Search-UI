import { fetchRecipes } from "./api.js";

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

            p_tag.innerHTML = response.recipes[i].cuisine;
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
    let ingredientList = document.createElement("ul")
    for (let i = 0; i < recipe.ingredients.length; i ++) {

        let ingredientListele = document.createElement("li")
        let ingredient_tag = document.createElement('div')
        ingredient_tag.classList.add("ingredient")
        let ingredient_p = document.createElement("p")
        let addtolistBtn = document.createElement("button")
        ingredient_p.innerHTML = recipe.ingredients[i]
        addtolistBtn.setAttribute("class","addtolistbtn")
        addtolistBtn.dataset.id = i
        addtolistBtn.textContent = "Add to list"
        console.log(ingredient_tag)
        ingredient_tag.append(ingredient_p,addtolistBtn)
        ingredientListele.append(ingredient_tag)
        console.log(ingredientListele)
        ingredientList.append(ingredientListele)
        
        recipedetailContainer.append(ingredientList)
    }
    let instruction_heading = document.createElement("h3")
    instruction_heading.innerHTML = "Instruction"
    recipedetailContainer.append(instruction_heading)

    for (let j = 0; j < recipe.instructions.length; j ++) {
        let instructions_tag = document.createElement('p')
        instructions_tag.innerHTML = `(${j+1}). ${recipe.instructions[j]}`
        console.log(instructions_tag)
        recipedetailContainer.append(instructions_tag)
    }
};

export function renderShoppingList(list) {
    // console.log(list)

    let listContainer = document.querySelector(".shopping-container")
    listContainer.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let ingredientDiv = document.createElement("div")
        ingredientDiv.classList.add(".ingredients-div")
        let recipeName = document.createElement("h2")
        recipeName.textContent = `${list[i].name}`
        let ul = document.createElement("ul")
        for (let j = 0; j < list[i].ingredients.length; j++) {
            let listDiv = document.createElement("div")
            listDiv.classList.add("list-Div")
            let ingredientlistele = document.createElement("li")
            ingredientlistele.innerHTML = `${list[i].ingredients[j].ingredient}`
            let removeBtn = document.createElement("button")
            removeBtn.dataset.recipeId = list[i].id
            removeBtn.dataset.ingredientId = list[i].ingredients[j].id
            removeBtn.classList.add("remove-shopping")
            removeBtn.textContent = "Remove"

            listDiv.append(ingredientlistele,removeBtn)
            ul.append(listDiv)
            ingredientDiv.append(recipeName,ul)
        }
        listContainer.append(ingredientDiv)
    }};



export function searchRecipe(filteredRecipe) {
    main_tg.innerHTML = ""
    for (let i = 0; i < filteredRecipe.length; i++) {
        let recipeContainer = document.createElement("div")
        recipeContainer.classList.add("details-page")
        recipeContainer.dataset.id = filteredRecipe[i].id;
        let recipeImg = document.createElement("img")
        recipeImg.setAttribute("src",filteredRecipe[i].image)
        let recipeName = document.createElement("h3")
        recipeName.textContent = `${filteredRecipe[i].name}`
        let recipeCuisine = document.createElement("p")
        recipeCuisine.innerHTML = `${filteredRecipe[i].cuisine}`
        let recipeAddtofavbtn = document.createElement("button")
        recipeAddtofavbtn.innerHTML = "Add to favourites"
        recipeAddtofavbtn.classList.add("fav-btn")
        recipeAddtofavbtn.dataset.id = filteredRecipe[i].id

        recipeContainer.append(recipeImg,recipeName,recipeCuisine,recipeAddtofavbtn)
        main_tg.append(recipeContainer)
}}


