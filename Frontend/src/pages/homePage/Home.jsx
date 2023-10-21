import React, { useContext } from 'react';
import { AuthContext } from "../../store/AuthContext"
import HomeContainer from '../../componenets/home/HomePage';

function Home() {

  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      {/* <h1>{user?.name}</h1> */}
      <HomeContainer/>
    </div>
  )
}

export default Home
