import { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../context/UserContext/UserState';

const Profile = () => {
  const { getUserInfo, user } = useContext(UserContext)
  console.log (user)
  if (!user) {
    getUserInfo()
    return <p>Loading user data...</p>;
  }
  return <h1>Bienvenid@ {user.name}</h1>
};
export default Profile

