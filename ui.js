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
        function renderData(page,limit) {
            fetchRecipes(page,limit).then(response => {

            for (let i = 0; i < response.results.length; i ++) {
                let div = document.createElement("div")

                let img = document.createElement("img")

                img.setAttribute('src',response.results[i].image)

                let h3_tag = document.createElement("h3")

                let p_tag = document.createElement("p")
                let btn = document.createElement("button")
                btn.innerHTML = "Add to Favoutites"
                // p_tag.innerHTML = response.data.results[i].description;

                h3_tag.innerHTML = response.results[i].title

                div.append(img,h3_tag,p_tag,btn)

                main_tg.appendChild(div) 
            }
        })}

        renderData(page,limit)

    const fav_btn = document.querySelector("#Favourites")
