import { useContext } from 'react';
import { useDocumentTitle } from '../hooks/useDocumentTitle.js';
import { CounterContext, TabContext } from '../contexts/contexts.js';
import { Counter } from './Counter.jsx';
import './CounterList.css';

export function CounterList() {
    const counterData = useContext(CounterContext);
    const updateTitle = useDocumentTitle("Clicks: " + counterData.map((counter) => {
        return counter.total;
    }).join(', '));
    return (
        <section>
            <h2 className="header">Counter</h2>
            { counterData.map((counter) => (
                <Counter counter={counter} key={counter.id} />
            ))}
        </section>
    )
}