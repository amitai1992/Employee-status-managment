import { useState } from "react";

export default function useToken() {
    const getUser = () => {
        const userString = sessionStorage.getItem('user');
        const user = JSON.parse(userString);
        return user;
    }

    const [token, setToken] = useState(getUser());
    const saveUser = (user) => {
        sessionStorage.setItem('user', JSON.stringify(user));
        setToken(user);
    }
    return {
        setToken: saveUser,
        token
    }
}

