import { useState } from 'react';

export function CorrectGuesses({ correctGuesses }) {
    const [isOpen, setIsOpen] = useState(false);

    const openGuesses = (event) => {
        event.preventDefault();
        setIsOpen(true);
    }

    const closeGuesses = (event) => {
        event.preventDefault();
        setIsOpen(false);
    }

    return (
        <section className="correctGuesses">
            { isOpen ? <ul>
                { correctGuesses.map((g) => 
                    <li key={g}>{g}</li>
                )}
            </ul> : <p>{ correctGuesses.length } words found.</p> }
            { isOpen ? <a className="openclose" href="#" onClick={closeGuesses}>Close</a> : correctGuesses.length > 0 ? <a className="openclose" href="#" onClick={openGuesses}>Open</a> : null }
        </section>
    )
}