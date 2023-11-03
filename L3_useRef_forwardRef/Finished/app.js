const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

function App() {
    const ref = React.useRef();
    React.useEffect(() => {
        ref.current.focus();
    }, []);

    return (
        <>
            <h1>Counters</h1>
            <section>
                <Counter name="One" />
                <Counter name="Two" ref={ref} />
            </section>
        </>
    );
}

const Counter = React.forwardRef(function Counter(props, buttonRef) {

    const [numOfClicks, setNumOfClicks] = React.useState({ total: 0 });

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
});