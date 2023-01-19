const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return React.createElement("section", null, 
        React.createElement("h1", null, "Counters"), 
        React.createElement("section", null, 
            React.createElement(Counter, { name: "One" }),
            React.createElement(Counter, { name: "Two" }))
    );
}

function Counter({ name }) {
    return React.createElement("article", null, 
        React.createElement("h2", null, "Counter ", name), 
        React.createElement("p", null, "You clicked 1 times"), 
        React.createElement("button", null, "Click me")
    );
}