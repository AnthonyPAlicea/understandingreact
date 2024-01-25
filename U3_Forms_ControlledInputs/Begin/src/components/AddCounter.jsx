export function AddCounter() {
    return (
        <>
            <h2>Add Counter</h2>
            <p>
                <label htmlFor="counterName">Name</label>
                <input type="text" id="counterName" />
            </p>
            <p>
                <label htmlFor="startingValue">Starting Value</label>
                <input defaultValue="1" type="number" id="startingValue" />
            </p>
        </>
    )
}