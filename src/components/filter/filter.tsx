import React, {useState} from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import {StateType, UserType, FilterProps} from '../../store/types';
import './filter.css';

const Filter: React.FC<FilterProps> = props => {
    let [active, setActive] = useState(false),
        input: HTMLInputElement;

    return (
        <input
            ref = {el => input = el as HTMLInputElement}
            className={!active ? 'filter' : 'filter filter_active'}
            onClick={() => setActive(!active)}
            onChange={() => props.dispatch && props.dispatch({type: 'FILTERCOLUMN', payload: {field: props.field, value: input.value}}) }
            placeholder={props.field}
         />
    )
}

function mapStateToProps(state: StateType) {
    return {
        users: state.users
    };
}
export default connect(mapStateToProps, null)(Filter);
