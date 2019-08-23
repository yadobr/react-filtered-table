import {filterColumn} from './actions';
import {StateType, ActionType} from './types';

export const initialState: StateType = {
    users: [],
    userTodos: [],
    filteredUsers: []
}

export const reducer = (state = initialState, action: ActionType) => {
    let newState: StateType = Object.assign({}, state);

    if( action.type == 'FETCHTODOS')
        newState.userTodos = action.payload;

    if( action.type == 'FETCHUSERS') {
        newState.users = action.payload;
        newState.filteredUsers = action.payload;
    }
    if( action.type == 'FILTERCOLUMN')
        newState.filteredUsers = filterColumn(state, action.payload) as any;

    return newState;
}
