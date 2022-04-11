import {useEffect, useState} from 'react';
import {usersService} from '../../services/users.service';

export const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        usersService.getAll().then(({data})=>(setUsers(data)))
    }, [])
    console.log(users)
    return (
        <div>

        </div>
    );
};

