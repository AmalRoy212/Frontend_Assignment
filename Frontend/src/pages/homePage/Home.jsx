import React, { useContext } from 'react';
import { AuthContext } from "../../store/AuthContext"
import HomeContainer from '../../componenets/home/HomePage';

function Home() {

  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <HomeContainer/>
    </div>
  )
}

export default Home
