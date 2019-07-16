import { SET_SELECTED_TRAINING } from './actions';

export const setSelectedTraining = training => {
    return {
        type: SET_SELECTED_TRAINING,
        payload: training
    }
}