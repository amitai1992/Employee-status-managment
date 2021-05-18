import React from 'react'
import { updateStatus } from '../../Services/Service';
import './selectStatus.css';

export default function SelectStatus(props) {
    const handleStatusUpdate = async e => {
        e.preventDefault();
        let status = e.target.value;
        let updateUser = { _id: props.user._id, status: status };
        let res = await updateStatus(updateUser);
        if (res) {
            props.setToken(res);
        }
    }

    return (
        <div className='status-div'>
            <p className='my-lable'>Update my current status</p>
            <select className='form-select form-select-sm' defaultValue={props.user.status} onChange={handleStatusUpdate}>
                <option value="Working">Working</option>
                <option value="On Vacation">On Vacation</option>
                <option value="at Lunch Time">Lunch Time</option>
                <option value="in a Buisness Trip">Buisness Trip</option>
            </select>
        </div>

    )
}