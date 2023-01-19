const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
root.render(React.createElement(App));

function App() {
    return React.createElement("section", null, 
        React.createElement("h1", null, "Counters"), 
        React.createElement("section", null, 
            counterName === "One" ? React.createElement(Counter, { name: counterName }): React.createElement(Counter2, { name: counterName }))
    );
}

function Counter({ name }) {
    return React.createElement("article", null, 
        React.createElement("h2", null, "Counter ", name), 
        React.createElement("p", null, "You clicked 1 times"), 
        React.createElement("button", null, "Click me")
    );
}

function Counter2({ name }) {
    return React.createElement("article", null, 
        React.createElement("h2", null, "Counter ", name), 
        React.createElement("p", null, "Times clicked: 1"), 
        React.createElement("button", null, "Click me")
    );
}

function rerender() {
    console.log("Rerender...");
    counterName = "Two";
    root.render(React.createElement(App));
}