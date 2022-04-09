import {useEffect, useState} from "react";


import {userService} from "../../services";
import {User} from "../User/User";

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(()=>{
       userService.getAll().then(({data}) => setUsers(data))
        //userService.getAll().then(value => value.data).then(value => setUsers(value));

    },[])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};