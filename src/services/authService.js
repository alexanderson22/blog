import { useState, useEffect } from "react"
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth"
import { auth } from "../firebaseConfig"

export function SignIn() {
  return <button onClick={() => signInWithPopup(auth, new GoogleAuthProvider())}>Sign In</button>
}
export function GetName({user}){
  return(
    <div>
       Hello {user && auth.currentUser.displayName} &nbsp;
    </div>
  )
}
export function SignOut() {
  return (
    <div>
      <button onClick={() => signOut(auth)}>Sign Out</button>
    </div>
  )
}

export function useAuthentication() {
  const [user, setUser] = useState(null)
  useEffect(() => {
    return auth.onAuthStateChanged((user) => {
      user ? setUser(user) : setUser(null)
    })
  }, [])
  return user
}

