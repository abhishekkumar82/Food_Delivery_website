// import React from 'react'

import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button"
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  // loginWithRedirect function is a method provided by the useAuth0 hook.Its primary purpose is to initiate the authentication process by redirecting the user to the Auth0 login page.
  const {loginWithRedirect,isAuthenticated}=useAuth0();
  return (
    <span className="flex space-x-2 items-center"> 
    {isAuthenticated ?(
    <>
    <Link to="/order-status" className="font-bold hover:text-orange-500">
       order Status
    </Link>
     <UsernameMenu/>

    </>
   ):(
  <Button 
    variant="ghost" 
    className="font-bold hover:text-orange-500 hover:bg-white"
    onClick={async ()=>await loginWithRedirect()}
    >
        Log In
    </Button>
    ) }
    </span>
  
  )
}

export default MainNav
