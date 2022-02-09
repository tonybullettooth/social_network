import React from 'react';
import s from ".//MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    let postData = [
        {id: '1', message: 'Hi', likeCounts: 15},
        {id: '2', message: 'how are you?', likeCounts: 20},
        {id: '3', message: 'super hi', likeCounts: 22},
        {id: '4', message: 'It is my first project.', likeCounts: 13},
        {id: '5', message: 'bye', likeCounts: 11},
    ]
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
                <Post message={postData[0].message} likesCount={postData[0].likeCounts}/>
                <Post message={postData[1].message} likesCount={postData[1].likeCounts}/>
                <Post message={postData[2].message} likesCount={postData[2].likeCounts}/>
                <Post message={postData[3].message} likesCount={postData[3].likeCounts}/>
                <Post message={postData[4].message} likesCount={postData[4].likeCounts}/>
            </div>
        </div>
    );
};

export default MyPosts;