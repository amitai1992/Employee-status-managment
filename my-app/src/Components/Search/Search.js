import React from 'react';
import { filterByName } from '../../Services/Service';
import { getEmployeesList } from '../../Services/Service';

export default function Search(props) {

    const filter = async e => {
        let name = e.target.value;
        e.preventDefault();
        let list;
        if (name === '') {
            list = await getEmployeesList();
        }
        else {
            list = await filterByName(e.target.value);
        }
        props.setData({ listView: [...list] });
    }

    return (
        <input className='my-search' type='text' placeholder='search by name' onChange={e => filter(e)} />
    )
}