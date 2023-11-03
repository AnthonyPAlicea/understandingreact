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

function useDocumentTitle(title) {
    return React.useEffect(() => {
        const originalTitle = document.title;
        document.title = title;

        return () => {
            document.title = originalTitle;
        };
    }, [title]);
}

function useCounter() {
    const [counterVal, setCounterVal] = React.useState({ total: 0 });

    const increment = () => {
        setCounterVal({...counterVal, total: counterVal.total + 1 });
    }

    return [
        counterVal,
        increment
    ]
}

function Counter(props) {    
    const [counter, incrementCounter] = useCounter();
    const updateTitle = useDocumentTitle("Clicks: " + counter.total);

    function handleClick() {
        incrementCounter();
    }

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {counter.total} times</p>
            <p>
                <button className="button" onClick={handleClick}>
                    Click me
                </button>
            </p>
        </article>
    );
}