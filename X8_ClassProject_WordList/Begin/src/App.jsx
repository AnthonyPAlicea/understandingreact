import { useState, useEffect } from 'react';
import { Header } from './components/Header.jsx';
import { Guess } from './components/Guess.jsx';
import { Honeycomb } from './components/Honeycomb.jsx';
import './App.css';

function App() {
    
    const [data, setData] = useState();
    const [guess, setGuess] = useState('');

    const addLetter = (letter) => {
        setGuess((g) => g + letter);
    };

    const removeLetter = () => {
        setGuess(guess.slice(0, -1));
    };

    const checkGuess = () => {
        if (data.answers && data.answers.includes(guess)) {
            console.log('Good job!');
        } else {
            console.log('Not in the list.');
        }
    };

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
                                <Guess guess={guess}></Guess>
                                <Honeycomb centerLetter={data.centerLetter} outerLetters={data.outerLetters} validLetters={data.validLetters} addLetter={addLetter} removeLetter={removeLetter} checkGuess={checkGuess}></Honeycomb>
                            </div>
                        </div>
                    </section> 
                </>          
            : <p>...Loading</p> }
        </>
    );
}

export default App;