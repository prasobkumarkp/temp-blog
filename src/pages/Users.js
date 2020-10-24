import React, { useState, useEffect } from "react";
import { getUsers } from "../api/UserApi";

const Users = () => {
    const [users, setUsers] = useState(null);
    const [searchText, setSearchText] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            const users = await getUsers();
            setUsers(users)
        }
        fetchUsers();
    }, []);

    const handleFilter = (text) => {
        setSearchText(text);
    }

    const applyFilter = (users) => {
        if (!searchText)
            return users;
        return users.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase()))
    }

    return (<div className="container">
        <h3>Users</h3>

        <ul className="user-list">
            <input className="search-field" type="text"
                onChange={(e) => handleFilter(e.target.value)} placeholder="Search here..." />
            {
                users && applyFilter(users).map(user => {
                    return <li key={user.id}>{user.name}</li>
                })
            }
        </ul>
    </div >)
}

export default Users;