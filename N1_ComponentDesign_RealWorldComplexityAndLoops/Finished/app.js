const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

/* Objects */
class CounterObj {
    constructor(name) {
        this.name = name;
        this.show = true;
        this.total = 0;
    }
}

const counterData = [
    new CounterObj('A'),
    new CounterObj('B'),
    new CounterObj('C')
]
/* End Objects */

function App() {
    return (
        <>
            <h1>Counters</h1>
            <section>
                <CounterList />
                <CounterSummary />
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
        }
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

function CounterList() {
    return (
        <section>
            { counterData.map((counter, index) => (
                <Counter name={counter.name} />
            ))}
        </section>
    )
}

function Counter(props) {

    const [counter, incrementCounter] = useCounter();

    const updateTitle = useDocumentTitle("Clicks: " + counter.total);

    function handleClick() {
        incrementCounter();

        console.log(counterData);
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

function CounterSummary() {
    const summary = counterData.map((counter) => {
        return counter.name + '(' + counter.total + ')';
    }).join(', ');
    return (
        <p>Summary: {summary}</p>
    )
}