export function counterReducer(counterData, action) {
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