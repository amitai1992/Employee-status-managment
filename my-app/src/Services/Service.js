
export const signUser = async (user) => { // sign the user in the data base
    return fetch('/api/signUp', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(data => data.json());
}

export const loginUser = async (credentials) => { // check if the user is in the database and return its details
    return fetch('/api/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => { return data.json() });

}

export const updateStatus = async (user) => { // update the status of the user
    return fetch('/api/updateStatus', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(data => data.json());
}

export const getEmployeesList = async () => { // return list of users
    const response = await fetch('/api/getList');
    return response.json();
}

export const filterByName = async (name) => {
    const response = await fetch(`/api/filterByName?name=${name}`);
    return response.json();
}

