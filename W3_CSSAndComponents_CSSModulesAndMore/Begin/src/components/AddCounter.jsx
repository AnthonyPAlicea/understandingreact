import { useState, useContext } from 'react';
import { CounterDispatchContext } from '../contexts/contexts.js';

export function AddCounter() {
    const counterDispatch = useContext(CounterDispatchContext);
    const [counterShortName, setCounterShortName] = useState('');
    const [counterLongName, setCounterLongName] = useState('');
    const [tab, setTab] = useState(1);
    const [startingValue, setStartingValue] = useState(1);

    const handleSubmit = (event) => {
        event.preventDefault();

        counterDispatch({ type: 'add', data: {
            shortName: counterShortName,
            longName: counterLongName,
            tab: Number(tab),
            startingValue: Number(startingValue)
        } });
    }

    return (
        <>
            <form method="post" onSubmit={handleSubmit}>
                <h2>Add {counterShortName}</h2>
                <p>
                    <label htmlFor="counterShortName">Short Name</label>
                    <input type="text" value={counterShortName} id="counterShortName" name="counterShortName" onChange={(event)=>{setCounterShortName(event.target.value)}} />
                </p>
                <p>
                    <label htmlFor="counterLongName">Long Name</label>
                    <textarea value={counterLongName} id="counterLongName" name="counterLongName" onChange={(event)=>{setCounterLongName(event.target.value)}} />
                </p>
                <p>
                    <label htmlFor="tab">Tab</label>
                    <select value={tab} id="tab" name="tab" onChange={(event)=>{setTab(event.target.value)}}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
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