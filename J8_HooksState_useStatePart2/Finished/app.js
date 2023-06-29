const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

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

    const [numOfClicks, setNumOfClicks] = React.useState(0);
    const [myName, setMyName] = React.useState("Tony");
    const [state, dispatch] = React.useReducer(() => {

    }, "Alicea");

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks} times</p>
            <button className="button" onClick={() => setNumOfClicks(numOfClicks+1)}>
                Click me
            </button>
        </article>
    );
}