const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(React.createElement(App));

function App() {
    return (
        <>
            <h1>Counters</h1>
            <section>
                <Counter name="One" />
                <Counter name="Two" />
            </section>
        </>
    );
}

function Counter(props) {
    const [count, setCount] = React.useState(0);

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked <em>{count}</em> times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </article>
    );
}
