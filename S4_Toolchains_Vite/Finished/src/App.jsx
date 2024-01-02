import { useEffect, useReducer, useContext, useMemo, useId, useCallback, createContext, memo } from 'react'
import './App.css'

/* Objects */
class CounterObj {
  constructor(id, name, tab, total) {
      this.id = id;
      this.name = name;
      this.tab = tab;
      this.total = total;
  }
}
/* End Objects */

const CounterContext = createContext(null);
const CounterDispatchContext = createContext(null);
const TabContext = createContext(null);
const TabDispatchContext = createContext(null);

function counterReducer(counterData, action) {
  switch (action.type) {
      case 'increment': {
          return counterData.map((counter) => {
              if (counter.id === action.id) {
                  return {...counter, total: counter.total + 1};
              } else {
                  return counter;
              }
          });
      }
      case 'decrement': {
          return counterData.map((counter) => {
              if (counter.id === action.id) {
                  return {...counter, total: counter.total >= 0 ? counter.total - 1 : 0};
              } else {
                  return counter;
              }
          });
      }
      default: {
          throw Error('Unknown action: ' + action.type);
      }
  }
}

function tabReducer(visibleTab, action) {
  switch (action.type) {
      case 'change-tab': {
          if (action.tab === visibleTab) {
              return visibleTab;
          } else {
              return action.tab;
          }
      }
      default: {
          throw Error('Unknown action: ' + action.type);
      }
  }
}

function App() {
  const [counterData, counterDispatch] = useReducer(counterReducer, [
      new CounterObj(1, 'A', 1, 0),
      new CounterObj(2, 'B', 2, 0),
      new CounterObj(3, 'C', 1, 0)
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

function useDocumentTitle(title) {
  return useEffect(() => {
      const originalTitle = document.title;
      document.title = title;

      return () => {
          document.title = originalTitle;
      }
  }, [title]);
}

function CounterList() {
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

function Counter({ counter }) {
  const counterDispatch = useContext(CounterDispatchContext);
  const id = useId();

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
          <legend className="counter__legend" id={id + '-legend'}>{counter.name}</legend>
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

function CounterTools() {
  return (
      <CounterSummary />
  )
}

function CounterSummary() {
  const counterData = useContext(CounterContext);
  const visibleTab = useContext(TabContext);
  const tabDispatch = useContext(TabDispatchContext);
  const filteredSortedData = useMemo(() => {
      console.log("Filtering")
      return counterData.filter(counter => { return counter.tab === visibleTab });
  }, [counterData, visibleTab]);
  console.log(filteredSortedData[0].total);

  const setVisibleTab1 = useCallback((event) => {
      tabDispatch({ type: 'change-tab', tab: 1 })
      event.preventDefault();
  });

  const setVisibleTab2 = useCallback((event) => {
      tabDispatch({ type: 'change-tab', tab: 2 })
      event.preventDefault();
  });

  return (
      <section>
          <CounterSummaryHeader setVisibleTab1={setVisibleTab1} setVisibleTab2={setVisibleTab2} />           
          { filteredSortedData.map((counter) => (
              <CounterSummaryDetail name={counter.name} total={counter.total} key={counter.id} />
          ))}
      </section>
  )
}

const CounterSummaryHeader = memo(function CounterSummaryHeader({ setVisibleTab1, setVisibleTab2 }) {
  return (
      <header>
          <a href="#" onClick={setVisibleTab1}>Tab 1</a>&nbsp;&nbsp;|&nbsp;&nbsp;<a href="#" onClick={setVisibleTab2}>Tab 2</a>
      </header>
  )
});

const CounterSummaryDetail = memo(function CounterSummaryDetail({ name, total }) {
  return (
      <p>{name} ({total})</p>
  )
});

export default App
