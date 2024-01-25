import { memo } from 'react';

export const CounterSummaryHeader = memo(function CounterSummaryHeader({ setVisibleTab1, setVisibleTab2 }) {
    return (
        <header>
            <a href="#" onClick={setVisibleTab1}>Tab 1</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#" onClick={setVisibleTab2}>Tab 2</a>
        </header>
    )
});