const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
let counterName = "One";
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

    function handleClickWrong() {
        setNumOfClicks(numOfClicks + 1);
        setNumOfClicks(numOfClicks + 1);
        setNumOfClicks(numOfClicks + 1);
    }

    function handleClick() {
        setNumOfClicks(n => n + 1);
        setNumOfClicks(n => n + 1);
        setNumOfClicks(n => n + 1);
    }

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks} times</p>
            <button className="button" onClick={handleClick}>
                Click me
            </button>
        </article>
    );
}