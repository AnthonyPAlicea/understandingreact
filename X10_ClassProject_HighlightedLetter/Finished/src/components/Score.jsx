export function Score({ correctGuesses }) {

    let score = 0;
    correctGuesses.map((g) => {
        if (g.length === 4) {
            score++;
        } else {
            score = score + g.length;
        }
    });

    return (
        <p className="score">Score: { score }</p>
    )
}