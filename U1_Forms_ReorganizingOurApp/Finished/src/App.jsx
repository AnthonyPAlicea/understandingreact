import { useReducer } from 'react';
import { CounterObj } from './models/counterObj.js';
import { counterReducer } from './reducers/counterReducer.js';
import { tabReducer } from './reducers/tabReducer.js';
import { CounterContext, CounterDispatchContext, TabContext, TabDispatchContext } from './contexts/contexts.js';
import { CounterList } from './components/CounterList.jsx';
import { CounterTools } from './components/CounterTools.jsx';
import './App.css';

function App() {
    const [counterData, counterDispatch] = useReducer(counterReducer, [
        new CounterObj(1, { longName: 'A', shortName: 'A' }, 1, 0),
        new CounterObj(2, { longName: 'B', shortName: 'B' }, 2, 0),
        new CounterObj(3, { longName: 'C', shortName: 'C' }, 1, 0)
    ]);

    const [visibleTab, tabDispatch] = useReducer(tabReducer, 1);

    return (
        <>
            <CounterContext.Provider value={counterData}>
                <CounterDispatchContext.Provider value={counterDispatch}>
                    <TabContext.Provider value={visibleTab}>
                        <TabDispatchContext.Provider value={tabDispatch}>
                            <h1>Counters</h1>
                            <section>
                                <CounterList />
                                <CounterTools />
                            </section>
                        </TabDispatchContext.Provider>
                    </TabContext.Provider>
                </CounterDispatchContext.Provider>
            </CounterContext.Provider>
        </>
    );
}

export default App;