import { useState } from 'react';

export function AddCounter() {

    const [counterName, setCounterName] = useState('');
    const [startingValue, setStartingValue] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(counterName);
        console.log(startingValue);

        const form = event.target;
        const formData = new FormData(form);
        console.log(...formData);

        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <h2>Add {counterName}</h2>
                <p>
                    <label htmlFor="counterName">Name</label>
                    <input type="text" value={counterName} id="counterName" name="counterName" onChange={(event)=>{setCounterName(event.target.value)}} />
                </p>
                <p>
                    <label htmlFor="startingValue">Starting Value</label>
                    <input value={startingValue} type="number" id="startingValue" name="startingValue" onChange={(event)=>{setStartingValue(event.target.value)}} />
                </p>
                <button type="submit">Add</button>
            </form>
        </>
    )
}