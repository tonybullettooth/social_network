import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
    return (
        <div>
            <div><img
                src="https://avatars.mds.yandex.net/i?id=7270849bbd5bb77f86f313dc5d71ce6d-5583685-images-thumbs&n=13&exp=1"
                alt=""/>
            </div>
            <div>
                <img className={s.ava}
                    src="https://avatars.mds.yandex.net/i?id=8a3351160bcb33f4d200aa08bfa0bdc5-5634817-images-thumbs&n=13&exp=1"
                    alt=""/>
                ava+decription
            </div>
<MyPosts/>
        </div>
    );
};

export default Profile;