import React from "react"
import { Route, Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../Firebase/AuthContext"

export default function PrivateRoute({ children , redirectTo }) {
  const { currentUser } = useAuth();
  const location = useLocation();

  return (
      
         currentUser ? children : <Navigate to={redirectTo} state={{ from: location}}/>

    
  )
}