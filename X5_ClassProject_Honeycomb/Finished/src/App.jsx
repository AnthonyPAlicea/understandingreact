import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Honeycomb } from './components/Honeycomb.jsx';
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
            { data ? 
                <>
                    <Header date={data.displayDate} editor={data.editor} />
                    <section className="container">
                        <div className="inputs">
                            <div className="center">
                                <Honeycomb centerLetter={data.centerLetter} outerLetters={data.outerLetters} validLetters={data.validLetters}></Honeycomb>
                            </div>
                        </div>
                    </section> 
                </>          
            : <p>...Loading</p> }
        </>
    );
}

export default App;