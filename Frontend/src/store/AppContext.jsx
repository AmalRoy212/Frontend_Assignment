import { createContext, useState } from 'react';

export const PopUpContext = createContext(null);

export default function popUpContext({ children }) {
  const [popUp, setPopUp] = useState(false);

  return (
    <PopUpContext.Provider value={{ popUp, setPopUp }}>
      {children}
    </PopUpContext.Provider>
  )
}