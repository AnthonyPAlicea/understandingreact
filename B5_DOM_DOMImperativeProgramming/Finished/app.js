const countElement = document.getElementById("count");

function setCount() {
    let count = Number(countElement.textContent);
    count = count + 1;
    countElement.textContent = count;
}