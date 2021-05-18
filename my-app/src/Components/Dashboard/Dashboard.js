import React from 'react';
import './Dashboard.css'
import SelectStatus from '../SelectStatus/SelectStatus';
import EmployeesList from '../EmployeesList/EmployeesList';

export default function Dashboard(props) {
    let user = props.token;
    let headLine = `Hello ${user.name} you are ${user.status}`;

    return (
        <div className='board'>
            <h2 className='headLine'>{headLine}</h2>
            <SelectStatus user={user} setToken={props.setToken} />
            <hr />
            <EmployeesList email={user._id} />
        </div>

    )
}