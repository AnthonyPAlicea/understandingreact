import { useContext } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { CounterContext } from '../contexts/contexts.js';
import { Counter } from './Counter.jsx';

export function CounterList() {
    const counterData = useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join(', '));
    return (
        <section>
            { counterData.map((counter) => (
                <Counter counter={counter} key={counter.id} />
            ))}
        </section>
    )
}