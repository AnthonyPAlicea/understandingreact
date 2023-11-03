const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

function App() {
    return (
        <>
            <h1>Counters</h1>
            <section>
                <Counter name="One" />
            </section>
        </>
    );
}

function Counter(props) {

    const numOfClicksRef = React.useRef({ total: 0 });
    function handleClick() {
        numOfClicksRef.current.total = numOfClicksRef.current.total + 1 ;
        alert(`You've clicked ${numOfClicksRef.current.total} times.`);
    }

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicksRef.current.total} times</p>
            <p>
                <button className="button" onClick={handleClick}>
                    Click me
                </button>
            </p>
        </article>
    );
}