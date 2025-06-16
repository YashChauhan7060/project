import React from 'react'
import { createContext } from 'react'
export const userDataContext = createContext()
function userContext({children}) {
  return (
    <div>
    <userDataContext.Provider value={}>
      {children}
    </userDataContext.Provider>
    </div>
  )
}

export default userContext
