import {useState, useEffect} from 'react';

import {Post} from '../Post/Post'
import {postsService} from '../../services/posts.service'
export const Posts = ({userId}) => {
    const [posts, setPosts] = useState(null);
    useEffect(()=>{
    postsService.getPostsById(userId).then(({data})=>(setPosts(data)))
    },[])
    return (
        <div>
            {posts && posts.map((post)=> <Post key={post.id} post={post} />)}
        </div>
    );
};

