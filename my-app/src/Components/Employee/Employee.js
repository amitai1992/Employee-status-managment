import React from 'react';

export default function Employee(props) {
    let name = props.name;
    let status = props.status;
    return(
        <tr>
            <td>
                {`${name} (${status})`}
            </td>
        </tr>
    )
}