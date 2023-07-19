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
    const [otherData, setOtherData] = React.useState("data");

    React.useEffect(() => {
        console.log("In Use Effect");
        document.title = "Clicks: " + numOfClicks.total;
    }, [numOfClicks]);

    function handleClick() {
        setNumOfClicks({ ...numOfClicks, total: numOfClicks.total + 1 });
    }

    function handleOtherDataClick() {
        console.log("Other data click");
        setOtherData("data2");
    }

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {numOfClicks.total} times</p>
            <p>
                <button className="button" onClick={handleClick}>
                    Click me
                </button>
            </p>
            <p>
                <button className="button" onClick={handleOtherDataClick}>
                    Other data click
                </button>
            </p>
        </article>
    );
}