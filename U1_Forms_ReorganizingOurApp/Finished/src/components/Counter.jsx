import { useContext, useId, useEffect } from 'react';
import { CounterDispatchContext, TabContext } from '../contexts/contexts.js';

export function Counter({ counter }) {
    const counterDispatch = useContext(CounterDispatchContext);
    const visibleTab = useContext(TabContext);
    const id = useId();

    useEffect(() => {
        let timerId;
        let seconds = 0;
        
        if (counter.tab === visibleTab && counter.name.shortName === 'A') {
            timerId = setInterval(() => {
                seconds++;
                console.log(`Time since ${counter.name.shortName} was available and clicked: ${seconds}s`);
            }, 1000);

            // without cleanup, timers keep being added and never removed
            return () => {
                clearInterval(timerId);
            }
        }
    }, [counter.total]);

    function handleIncrementClick(event) {
        counterDispatch({ type: 'increment', id: counter.id });
        event.preventDefault();
    }

    function handleDecrementClick(event) {
        counterDispatch({ type: 'decrement', id: counter.id });
        event.preventDefault();
    }

    return (
        <fieldset className="counter" id={id}>
            <legend className="counter__legend" id={id + '-legend'}>{counter.name.longName}</legend>
            { counter.total > 0 ? <button className="button" onClick={handleDecrementClick} aria-label="Decrease counter" id={id + '-decrement'}>
                -
            </button> : <div className="counter__empty"></div> }
            <p aria-labelledby={id + '-legend'}>{counter.total}</p>
            <button className="button" onClick={handleIncrementClick} aria-label="Increase counter" id={id + '-increment'}>
                +
            </button>
        </fieldset>
    );
}