import { Navigate } from "react-router-dom";
import type { ReactNode } from "react";

const PublicRoute = ({children} : {children : ReactNode}) => {
  const isLogged  = Boolean(localStorage.getItem("token"))
  return isLogged ? <Navigate to={'/Dashboard'} /> : <>{children}</>
}

export default PublicRoute

export const PraviteRoute = ({children} : {children : ReactNode}) => {
    const isLogged  = Boolean(localStorage.getItem("token"))
  return  isLogged ?  <>{children}</> : <Navigate to={'/Login'} /> 

}   