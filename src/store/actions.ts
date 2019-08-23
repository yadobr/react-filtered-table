import { Dispatch } from 'redux';
import {StateType, UserType} from './types';

export const fetchUsers = (dispatch: Dispatch) => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => dispatch({type: 'FETCHUSERS', payload: json}))
}

export const fetchTodos = (dispatch: Dispatch, userId: number) => {
    fetch('https://jsonplaceholder.typicode.com/todos?userId='+userId)
        .then(response => response.json())
        .then(json => dispatch({type: 'FETCHTODOS', payload: json}))
}

export const filterColumn = (state: any, payload:any) : Array<UserType> => {
    let users: any;

    if(state.users && payload.value != '') {
        users = state.users.filter( (user:any) => {
            if( user[payload.field].toLowerCase().indexOf(payload.value) != -1 )
                return true
        } )
    }
    else if ( payload.value == '') users = state.users;

    return users;
}
