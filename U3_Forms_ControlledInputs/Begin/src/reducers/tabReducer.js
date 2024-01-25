export function tabReducer(visibleTab, action) {
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