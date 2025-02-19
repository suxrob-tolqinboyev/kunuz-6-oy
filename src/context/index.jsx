import { createContext, useState } from "react";

export const NameContext = createContext("Suxrob");

function NameContextProvider({ children }) {
  const [name , setname] = useState("Suxrob")
  const [isDark , setIsDark] =useState(false)

  return (
    <NameContext.Provider value={{name , setname , isDark , setIsDark}}>
        {children}
    </NameContext.Provider>
  )
  
}
export default NameContextProvider;
