const listElement = document.getElementById("list");
const newListItem = document.createElement("li");
newListItem.textContent = "Item 3";
setTimeout(() => listElement.appendChild(newListItem), 1000);