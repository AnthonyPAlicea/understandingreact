const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

/* Objects */
class CounterObj {
    constructor(id, name, tab, total) {
        this.id = id;
        this.name = name;
        this.tab = tab;
        this.total = total;
    }
}
/* End Objects */

function App() {
    const [counterData, setCounterData] = React.useState([
        new CounterObj(1, 'A', 1, 0),
        new CounterObj(2, 'B', 2, 0),
        new CounterObj(3, 'C', 1, 0)
    ]);

    const [visibleTab, setVisibleTab] = React.useState(1);

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

    return (
        <>
            <h1>Counters</h1>
            <section>
                <CounterList counterData={counterData} increment={increment} decrement={decrement} />
                <CounterTools counterData={counterData} visibleTab={visibleTab} setVisibleTab={setVisibleTab} />
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

function CounterList({ counterData, increment, decrement }) {
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join(', '));
    return (
        <section>
            { counterData.map((counter, index) => (
                <Counter counter={counter} index={index} increment={increment} decrement={decrement} key={counter.id} />
            ))}
        </section>
    )
}

function Counter({ counter, index, increment, decrement }) {
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

function CounterTools({ counterData, visibleTab, setVisibleTab }) {
    return (
        <CounterSummary counterData={counterData} visibleTab={visibleTab} setVisibleTab={setVisibleTab} />
    )
}

function CounterSummary({ counterData, visibleTab, setVisibleTab }) {
    console.log("Rendering CounterSummary")
    const filteredSortedData = React.useMemo(() => {
        console.log("Filtering Data");
        return counterData.filter(counter => { return counter.tab === visibleTab });
    }, [visibleTab]);

    const setVisibleTab1 = () => {
        setVisibleTab(1)
    };

    const setVisibleTab2 = () => {
        setVisibleTab(2)
    };

    return (
        <section>
            <CounterSummaryHeader setVisibleTab1={setVisibleTab1} setVisibleTab2={setVisibleTab2} />           
            { filteredSortedData.map((counter, index) => (
                <CounterSummaryDetail name={counter.name} total={counter.total} key={counter.id} />
            ))}
        </section>
    )
}

const CounterSummaryHeader = React.memo(function CounterSummaryHeader({ setVisibleTab1, setVisibleTab2 }) {
    console.log("Rendering CounterSummaryHeader");
    return (
        <header>
            <a href="#" onClick={setVisibleTab1}>Tab 1</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#" onClick={setVisibleTab2}>Tab 2</a>
        </header>
    )
});

const CounterSummaryDetail = React.memo(function CounterSummaryDetail({ name, total }) {
    console.log("Rendering CounterSummaryDetail");
    return (
        <p>{name} ({total})</p>
    )
});