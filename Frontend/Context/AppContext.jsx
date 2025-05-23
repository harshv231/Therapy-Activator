import { createContext } from "react";
import { psychologist } from "../assets/assets"; 

export const AppContext = createContext()

const AppContextProvider = (props) => {
  const currencySymbol = '$'
  const value = {
    psychologist,currencySymbol
  }
  return(
    <AppContext.Provider value={value}>
      {props.children}
    </AppContext.Provider>
  )
}
export default AppContextProvider