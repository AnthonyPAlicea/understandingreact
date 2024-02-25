import { useEffect } from 'react';
import './App.css';

function App() {
    
    useEffect(() => {
        let results = {};
        fetch('/api/data.json', { headers: { "Content-Type": "application/json" } })
        .then(res => res.json())
        .then(data => console.log(data));
    }, []);

    return (
        <></>
    );
}

export default App;