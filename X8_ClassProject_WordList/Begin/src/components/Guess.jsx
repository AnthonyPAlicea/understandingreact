export function Guess({ guess }) {
    return (
        <section className="guess">
            <p className="guess-letters">
                {guess}
            </p>
        </section>
    )
}