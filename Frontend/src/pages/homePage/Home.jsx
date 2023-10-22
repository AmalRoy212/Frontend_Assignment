import React, { useContext } from 'react';
import { AuthContext } from "../../store/AuthContext"
import HomeContainer from '../../componenets/home/HomePage';
import PopUpContext from '../../store/AppContext';

function Home() {

  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      <PopUpContext>
        <HomeContainer/>
      </PopUpContext>
    </div>
  )
}

export default Home
