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

    const reducer = (state, action) => {
        switch (action.type) {
            case 'Increment':
                return { clicks: state.clicks + 1 }
            default:
                throw new Error();
        }
    };
    const [state, dispatch] = React.useReducer(reducer, { clicks: 0 });

    return (
        <article>
            <h2>Counter {props.name}</h2>
            <p>You clicked {state.clicks} times</p>
            <button className="button" onClick={() => {dispatch({type: 'Increment'})}}>
                Click me
            </button>
        </article>
    );
}