import { SET_SELECTED_TRAINING } from './actions';

const DEFAULT_STATE = {
    selectedTraining: ''
}

const setSelectedTraining = (state, action) => {
    return {...state, selectedTraining: action.payload}
}

const rootReducer = (state = DEFAULT_STATE, action) => {
    switch (action.type) {
        case SET_SELECTED_TRAINING:
            return setSelectedTraining(state, action);
        default:
            return state;
    }
}

export default rootReducer;