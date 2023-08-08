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
    const message = `Number of clicks is: ${numOfClicks.total}`;
    React.useEffect(() => {
        const id = setInterval(() => {
            console.log(message);
        }, 2000);
        return function() {
            clearInterval(id);
        }
    }, [numOfClicks.total]);

    function handleClick() {
        setNumOfClicks({ ...numOfClicks, total: numOfClicks.total + 1 });
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
        </article>
    );
}