import { useContext } from "react";
import { UserContext } from "@/context/Usercontext";

function useUser() {
    
   const context = useContext(UserContext)

    if (!context) {
         
        throw new Error("useUser must be used with in  a UserProvider")
    }

    return context
   
}

export default useUser