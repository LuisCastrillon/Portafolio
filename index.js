const cntImg = document.querySelector(".cntImg")
const main2 = document.querySelector(".main2")
const about = document.querySelector(".about")
const inicio = document.querySelector(".inicio")
const linkFooter = document.querySelector(".linkFooter")


if(cntImg){
    cntImg.addEventListener("click", () => {
        main2.scrollIntoView({ behavior: "smooth" })
    })
}

about.addEventListener("click", () => {
    window.location.href = "about.html"
});

inicio.addEventListener("click", () => {
    window.location.href = "index.html";
});

