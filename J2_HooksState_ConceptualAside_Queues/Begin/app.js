const globalState = {
    NorthSouth: 'Green',
    CarWaiting: false,
    WaitTime: 30
}

function reducer(state, action) {
    switch (action.type) {
        case ('Car Waiting'): {
            return {
                ...state,
                CarWaiting: true,
                WaitTime: action.payload.WaitTime
            }
        }
        case ('Finish Waiting'): {
            return {
                ...state,
                NorthSouth: 'Yellow'
            }
        }
        default: {
            return state;
        }
    }
}

console.log(globalState);
const newState1 = reducer(globalState, {
    type: 'Car Waiting',
    payload: {
        WaitTime: 5
    }
});
console.log(newState1);

const newState2 = reducer(newState1, {
    type: 'Finish Waiting'
});
console.log(newState2);