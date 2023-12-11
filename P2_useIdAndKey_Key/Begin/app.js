const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

/* Objects */
class CounterObj {
    constructor(name, show, total) {
        this.name = name;
        this.show = show;
        this.total = total;
    }
}
/* End Objects */

const CounterContext = React.createContext(3);

function App() {
    const [counterData, setCounterData] = React.useState([
        new CounterObj('A', true, 0),
        new CounterObj('B', false, 0),
        new CounterObj('C', true, 0)
    ]);

    const increment = (index) => {
        const newData = [...counterData];
        newData[index].total = newData[index].total + 1;
        setCounterData(newData);
    }

    const decrement = (index) => {
        const newData = [...counterData];
        const decrementedCounter = newData[index].total - 1;
        newData[index].total = decrementedCounter >= 0 ? decrementedCounter : 0;
        setCounterData(newData);
    }

    const contextData = [counterData, increment, decrement];

    console.log(CounterContext);

    return (
        <>
            <CounterContext.Provider value={contextData}>
                <h1>Counters</h1>
                <section>
                    <CounterList />
                    <CounterTools />
                </section>
            </CounterContext.Provider>
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

function CounterList() {
    const [contextData, increment, decrement] = React.useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + contextData.map((counter) => {
        return counter.total;
    }).join(', '));
    return (
        <section>
            { contextData.map((counter, index) => (
                <Counter counter={counter} index={index} />
            ))}
        </section>
    )
}

function Counter({ counter, index }) {
    const [contextData, increment, decrement] = React.useContext(CounterContext);
    const id = React.useId();

    function handleIncrementClick() {
        increment(index);
    }

    function handleDecrementClick() {
        decrement(index);
    }

    return (
        <fieldset className="counter" id={id}>
            <legend className="counter__legend" id={id + '-legend'}>{counter.name}</legend>
            { counter.total > 0 ? <button className="button" onClick={handleDecrementClick} aria-label="Decrease counter" id={id + '-decrement'}>
                -
            </button> : <div className="counter__empty"></div> }
            <p id={id + '-total'} className="counter__value" aria-labelledby={id + '-legend'}>{counter.total}</p>
            <button className="button" onClick={handleIncrementClick} aria-label="Increase counter" id={id + '-increment'}>
                +
            </button>
        </fieldset>
    );
}

function CounterTools() {
    return (
        <CounterSummary />
    )
}

function CounterSummary() {
    const [contextData, increment, decrement] = React.useContext(CounterContext);
    const sortedData = [...contextData].sort((a, b) => {
        return b.total - a.total;
    });
    const summary = sortedData.filter(counter => { return counter.show }).map((counter) => {
        return counter.name + '(' + counter.total + ')';
    }).join(', ');
    return (
        <p>Summary: {summary}</p>
    )
}