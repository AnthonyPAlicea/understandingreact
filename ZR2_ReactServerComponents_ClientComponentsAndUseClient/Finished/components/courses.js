export function Courses() {

    const data = ["Understanding React", "Understanding HTML and CSS", "JavaScript: Understanding the Weird Parts"];

    return (
        <ul>
            {data.map((c, index) => <li key={index}>{c}</li>)}
        </ul>
    )
}