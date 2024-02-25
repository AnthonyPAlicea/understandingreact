export function Letter({ letter, isCenter }) {

    return (
        <svg className={ "cell" + (isCenter ? " center-letter" : " outer-letter") } viewBox="0 0 120 103.92304845413263">
            <polygon className="cell-fill" points="0,51.96152422706631 30,0 90,0 120,51.96152422706631 90,103.92304845413263 30,103.92304845413263" stroke="white" strokeWidth="7.5"></polygon>
            <text className="cell-letter" x="50%" y="50%" dy="0.35em">{ letter }</text>
        </svg>
    );
}