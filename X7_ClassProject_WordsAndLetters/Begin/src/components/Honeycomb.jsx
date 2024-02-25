import { useState } from 'react';
import { Letter } from './Letter.jsx';

export function Honeycomb({ centerLetter, outerLetters, validLetters }) {

    const [randomArray, setRandomArray] = useState([0, 1, 2, 3, 4, 5]);

    const shuffle = () => {
        setRandomArray([...randomArray].sort((() => Math.random() - 0.5)))
    };

    return (
        <>
            <article className="honeycomb">
                <Letter letter={centerLetter} isCenter={true}></Letter>
                <Letter letter={outerLetters[randomArray[0]]} isCenter={false}></Letter>
                <Letter letter={outerLetters[randomArray[1]]} isCenter={false}></Letter>
                <Letter letter={outerLetters[randomArray[2]]} isCenter={false}></Letter>
                <Letter letter={outerLetters[randomArray[3]]} isCenter={false}></Letter>
                <Letter letter={outerLetters[randomArray[4]]} isCenter={false}></Letter>
                <Letter letter={outerLetters[randomArray[5]]} isCenter={false}></Letter>
            </article>
            <section className="buttons">
                <button className="button" onClick={shuffle}>Shuffle</button>
            </section>
        </>
    );
}