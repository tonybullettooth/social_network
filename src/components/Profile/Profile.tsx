import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = () => {

    let posts = [
        {id: '1', message: 'Hi!', likeCounts: 15},
        {id: '2', message: 'how are you?', likeCounts: 20},
        {id: '3', message: 'super hi!', likeCounts: 22},
        {id: '4', message: 'It is my first project.', likeCounts: 13},
        {id: '5', message: 'bye!', likeCounts: 11},
    ]
    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;