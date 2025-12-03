import { renderData,main_tg } from "./ui.js";
import { addtofavourites } from "./storage.js";

let page = 1;
let limit = 12;


renderData(page,limit)

const Nextbtn = document.querySelector("#Nextbtn")
Nextbtn.addEventListener("click",next_page);
function next_page() {
    renderData(page,limit)
    let span_tag = document.createElement("p")
    span_tag.innerHTML = `<p>${page}</p>`
    footerDiv.append(span_tag)
    page = page + 1
    }



main_tg.addEventListener("click",(e) => {
    let favBtn = e.target.closest(".fav-btn")
    if (!favBtn) {return};
        console.log("add to favourites")
        const id = favBtn.dataset.id
        addtofavourites(id)
    })

    

main_tg.addEventListener('click',(e) => {
    let detailsCard = e.target.closest(".details-page");
    if (!detailsCard)   {return};
        console.log("detailschaiye")
        const id = detailsCard.dataset.id;
        window.location.href = `details.html?id=${id}`
        console.log(id)
})

