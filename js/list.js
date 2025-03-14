let subheading = document.getElementsByTagName("h2")[0];

subheading.addEventListener("mouseover", () => { // Anonymous Function
    subheading.removeAttribute("class");
});

subheading.addEventListener("mouseout", () => {
    subheading.setAttribute("class", "green");
})

let counterButton = document.getElementById("counter-button");
let count = 0;
counterButton.addEventListener("click", () => {
    // console.log(count);
    // document.getElementById("counter-text").innerText = ++count;
    // console.log(count);
    let textNode = document.getElementById("counter-text");
    let currentValue = textNode.innerText;
    textNode.innerText = ++currentValue;
})

/*
- text box
- submit button
- event listener on the button
- find input node
- get the value
- create a new li
- assign the value to the li
- need to locate the ul
- add the li to the ul
*/
document.getElementById("add-item-button").addEventListener("click", () => {
    let inputBox = document.getElementById("new-item");
    let newItem = inputBox.value;
    let newLi = document.createElement("li");
    newLi.addEventListener("click", () => {
        newLi.remove();
    })
    newLi.innerText = newItem;
    document.getElementById("grocery-list").appendChild(newLi);
})

/*
We want to remove any item when it is clicked
*/

let listItems = document.getElementsByTagName("li");
for (let i=0; i<listItems.length; i++) {
    let item = listItems[i];
    item.addEventListener("click", () => {
        item.remove();
    })
}


