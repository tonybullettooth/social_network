import React from 'react';
import s from ".//MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
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
                <Post message="hi" likesCount="15"/>
                <Post message="how are you?" likesCount="20"/>
                <Post message="super hi" likesCount="25"/>
                <Post message="It is my first project." likesCount="35"/>
                <Post message="bye" likesCount="5"/>
            </div>
        </div>
    );
};

export default MyPosts;