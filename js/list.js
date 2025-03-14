let subheading = document.getElementsByTagName("h2")[0];

subheading.addEventListener("mouseover", () => { // Anonymous Function
    subheading.removeAttribute("class");
});

subheading.addEventListener("mouseout", () => {
    subheading.setAttribute("class", "green");
})