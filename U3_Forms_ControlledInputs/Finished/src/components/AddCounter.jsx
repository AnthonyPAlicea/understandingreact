import { useState } from 'react';

export function AddCounter() {

    const [counterName, setCounterName] = useState('');
    const [startingValue, setStartingValue] = useState(1);

    return (
        <>
            <h2>Add {counterName}</h2>
            <p>
                <label htmlFor="counterName">Name</label>
                <input type="text" value={counterName} id="counterName" onChange={(event)=>{setCounterName(event.target.value)}} />
            </p>
            <p>
                <label htmlFor="startingValue">Starting Value</label>
                <input value={startingValue} type="number" id="startingValue" onChange={(event)=>{setStartingValue(event.target.value)}} />
            </p>
        </>
    )
}