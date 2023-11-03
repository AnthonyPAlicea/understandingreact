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

    const [numOfClicks, setNumOfClicks] = React.useState({ total: 0 });
    const buttonRef = React.useRef();

    React.useEffect(() => {
        buttonRef.current.focus();
    }, []);

    function handleClick() {
        setNumOfClicks({...numOfClicks, total: numOfClicks.total + 1 });
    }

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks.total} times</p>
            <p>
                <button className="button" onClick={handleClick} ref={buttonRef}>
                    Click me
                </button>
            </p>
        </article>
    );
}