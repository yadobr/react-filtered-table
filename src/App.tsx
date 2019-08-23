import React, {useState, useEffect}  from 'react';
import logo from './logo.svg';
import './App.css';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {fetchUsers, filterColumn} from './store/actions';
import {reducer} from './store/reducer';
import {StateType, UserType, UserTodoType, ActionType} from './store/types';
import Layout from './components/layout';
import UserTable from './components/usertable';

let store = createStore(reducer);

const App: React.FC = () => {

    useEffect(() => {
        fetchUsers(store.dispatch)
    }, []);

    return (
        <Provider store={store}>
            <div className="App">
                <Layout
                    main={<UserTable/>}
                />
            </div>
        </Provider>
    );
}

export default App;
