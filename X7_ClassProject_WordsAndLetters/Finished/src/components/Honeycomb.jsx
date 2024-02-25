import { useState } from 'react';
import { Letter } from './Letter.jsx';

export function Honeycomb({ centerLetter, outerLetters, validLetters, addLetter, removeLetter, checkGuess }) {

    const [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5]);

    const shuffle = () => {
        setRandomArray([...randomArray].sort((() => Math.random() - 0.5)))
    };

    return (
        <>
            <article className="honeycomb">
                <Letter letter={centerLetter} isCenter={true} addLetter={addLetter}></Letter>
                <Letter letter={outerLetters[randomArray[0]]} isCenter={false} addLetter={addLetter}></Letter>
                <Letter letter={outerLetters[randomArray[1]]} isCenter={false} addLetter={addLetter}></Letter>
                <Letter letter={outerLetters[randomArray[2]]} isCenter={false} addLetter={addLetter}></Letter>
                <Letter letter={outerLetters[randomArray[3]]} isCenter={false} addLetter={addLetter}></Letter>
                <Letter letter={outerLetters[randomArray[4]]} isCenter={false} addLetter={addLetter}></Letter>
                <Letter letter={outerLetters[randomArray[5]]} isCenter={false} addLetter={addLetter}></Letter>
            </article>
            <section className="buttons">
                <button className="button" onClick={removeLetter}>Delete</button>
                <button className="button" onClick={shuffle}>Shuffle</button>
                <button className="button" onClick={checkGuess}>Enter</button>
            </section>
        </>
    );
}