import {useState} from 'react'

import {Users,Posts,UserInfo} from './components'



function App() {
    const [user, setUser] = useState(null);
    const [userId, setUserId] = useState(null);
    return (
        <div>
            <div>
                <Users setUser={setUser}/>
                {user && <UserInfo user={user} setUserId={setUserId}/>}
            </div>
                {userId && <Posts userId={userId}/>}
        </div>
    );
}

export default App;
