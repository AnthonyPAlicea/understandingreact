const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return (
        React.createElement("article", null, 
            React.createElement("h2", null, "Counter "), 
            React.createElement("p", null, "You clicked 1 times"), 
            React.createElement("button", null, "Click me"))
    );
}

console.log(App());

// before React does its work
let articleElements = document.getElementsByTagName("article");
let articleElement = document.getElementsByTagName("article").item(0);
console.log(articleElements); // empty
console.log(articleElement); // doesn't exist

// after React does its work
setTimeout(function() {
    let articleElements = document.getElementsByTagName("article");
    let articleElement = document.getElementsByTagName("article").item(0);
    console.log(articleElements); // exists
    console.log(articleElement); // exists
}, 1000);