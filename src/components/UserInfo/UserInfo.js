
export const UserInfo = ({user,setUserId}) => {
    return (
        <div>
            <div>{user.id}</div>
            <div>{user.name}</div>
            <div>{user.username}</div>
            <div>{user.email}</div>
            <div>{user.website}</div>
            <input type="button" value="Show posts" onClick={()=> setUserId(user.id)}/>
        </div>
    );
};

