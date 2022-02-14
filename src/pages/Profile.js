import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { userAction } from '../redux/slicers';

const Profile = () => {
    const { users } = useSelector(state => state.userState);
    useEffect(() => {
        userAction();
    }, [])
    return (
        <div>{users.name}</div>
    )
}

export default Profile