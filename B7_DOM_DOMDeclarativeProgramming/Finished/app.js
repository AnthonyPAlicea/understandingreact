const countApp = {
    getCount: () => {
        const countElement = document.getElementById("count");
        return Number(countElement.textContent);
    },
    setCount: (val) => {
        const countElement = document.getElementById("count");
        countElement.textContent = val;
    }
}

function setCount() {
    let count = countApp.getCount();
    if (count >= 5) {
        countApp.setCount(0);
    } else {
        countApp.setCount(count + 1);
    }
}