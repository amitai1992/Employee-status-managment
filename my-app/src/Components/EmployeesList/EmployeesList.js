import React, { useState, useEffect } from 'react';
import Employee from '../Employee/Employee';
import Search from '../Search/Search';
import { getEmployeesList } from '../../Services/Service';
import './EmployeesList.css'

export default function EmployeesList(props) {
    let [dataList, setData] = useState({
        listView: [],
        flag: true
    });
    useEffect(() => {
      getEmployeesList().then(data => { setData({ listView: [...data] }) });
    }, []);
    
    let employees = [];
    for (let i = 0; i < dataList.listView.length; i++) {
        const employee = dataList.listView[i];
        if (employee._id !== props.email) {
            let listItem = <Employee key={employee._id} name={employee.name} status={employee.status} />
            employees.push(listItem);
        }
    }

    return (
        <div className='list-div'>
            <Search setData={setData} />
            <table className='table table-bordered my-table'>
                <tbody>
                    {employees}
                </tbody>
            </table>
        </div>

    )
}