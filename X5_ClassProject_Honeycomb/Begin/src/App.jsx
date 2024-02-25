import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import './App.css';

function App() {
    
    const [data, setData] = useState();
    useEffect(() => {
        async function fetchData() {
            const result = await fetch('/api/data.json', { headers: { "Content-Type": "application/json" } });
            const json = await result.json();
            setData(json.data.today);
        }
        fetchData();
    }, []);

    return (
        <>
            { data ? <Header date={data.displayDate} editor={data.editor} /> : <p>...Loading</p> }
        </>
    );
}

export default App;