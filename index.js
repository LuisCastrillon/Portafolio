const cntImg = document.querySelector(".cntImg")
const main2 = document.querySelector(".main2")
const about = document.querySelector(".about")

cntImg.addEventListener("click", () => {
    main2.scrollIntoView({ behavior: "smooth" });
});

about.addEventListener("click", () => {
    window.location.href = "about.html"
})



console.log(main2)
console.log(about)