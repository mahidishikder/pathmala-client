import { useContext } from "react"
import { AuthContext } from "../provider/AuthPorvider"
import { Navigate } from "react-router-dom"
import Loading from "../pages/Loading/Loading"

function PrivateRoute({children}) {
  const {user,loading} = useContext(AuthContext)
  if(loading) {
   return <Loading></Loading>
  }

  if(user && user?.email){
  return children
  }
  return (
    <Navigate to={`/login`}></Navigate>
  )
}

export default PrivateRoute