const rootNode = document.getElementById('app');
const root = ReactDOM.createRoot(rootNode);
root.render(<App />);

async function fetchBio(person) {
    const delay = person === 'Bob' ? 2000 : 200;
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('This is ' + person + '’s bio.');
        }, delay);
    })
}

function App() {
    const [person, setPerson] = React.useState('Alice');
    const [bio, setBio] = React.useState(null);
    React.useEffect(() => {
        let ignore = false;
        setBio(null);
        fetchBio(person).then(result => {
            if (!ignore) {
                setBio(result);
            }
        });
        return () => {
            ignore = true;
        }
    }, [person]);

    return (
        <>
            <select value={person} onChange={e => {
                setPerson(e.target.value);
            }}>
                <option value="Alice">Alice</option>
                <option value="Bob">Bob</option>
                <option value="Taylor">Taylor</option>
            </select>
            <hr />
            <p><i>{bio ?? 'Loading...'}</i></p>
        </>
    );
}