import { fetchRecipes } from "./api.js"

export let main_tg = document.querySelector("main")

export function renderData(page,limit) {
    main_tg.innerHTML = ""
    fetchRecipes(page,limit).then(response => {
                
        for (let i = 0; i < response.recipes.length; i ++) {

            let div = document.createElement("div")

            let img = document.createElement("img")

            img.setAttribute('src',response.recipes[i].image)

            let h3_tag = document.createElement("h3")

            let p_tag = document.createElement("p")
            const btn = document.createElement("button")
            btn.classList.add("fav-btn");
            btn.dataset.id = response.recipes[i].id;
            btn.textContent = "Add to Favourites";

            // p_tag.innerHTML = response.data.results[i].description;
            h3_tag.innerHTML = response.recipes[i].name
            div.append(img,h3_tag,p_tag,btn)

            main_tg.appendChild(div) 
            }
        })}
