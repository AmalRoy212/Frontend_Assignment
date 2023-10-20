import React, { useContext } from 'react';
import { AuthContext } from "../../store/AuthContext"

function Home() {

  const { user, setUser } = useContext(AuthContext);

  return (
    <div>
      hi am home
      <h1>{user?.name}</h1>
    </div>
  )
}

export default Home
