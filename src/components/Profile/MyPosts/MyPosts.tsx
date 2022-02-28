import React from 'react';
import s from ".//MyPosts.module.css";
import Post from "./Post/Post";


type PostsPropsType = {
    id: number,
    message: string,
    likeCounts: number,
}
const MyPosts = (props: PostsPropsType) => {

    let postsElements = props.posts.map( p => <Post message={p.message} likesCount={p.likeCounts}/>)
    return (
        <div className={s.postsBlock}>
            <div>
                <h3>My posts</h3>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;