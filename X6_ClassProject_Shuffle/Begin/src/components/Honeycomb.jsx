import { useState } from 'react';
import { Letter } from './Letter.jsx';

export function Honeycomb({ centerLetter, outerLetters, validLetters }) {
    return (
        <article className="honeycomb">
            <Letter letter={centerLetter} isCenter={true}></Letter>
            <Letter letter={outerLetters[0]} isCenter={false}></Letter>
            <Letter letter={outerLetters[1]} isCenter={false}></Letter>
            <Letter letter={outerLetters[2]} isCenter={false}></Letter>
            <Letter letter={outerLetters[3]} isCenter={false}></Letter>
            <Letter letter={outerLetters[4]} isCenter={false}></Letter>
            <Letter letter={outerLetters[5]} isCenter={false}></Letter>
        </article>
    );
}