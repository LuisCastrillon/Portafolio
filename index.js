const cntImg = document.querySelector(".cntImg")
const main2 = document.querySelector(".main2")

cntImg.addEventListener("click", () => {
    main2.scrollIntoView({ behavior: "smooth" });
})