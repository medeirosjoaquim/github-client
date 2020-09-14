import React, { useState } from "react"

import Dash from "./components/dash"
import Login from "./components/login"
import UserBar from "./components/user-bar"

import "./app.scss"

import { LoginContext, IUser } from "./context/auth.context"
import { ILoading, LoadingContext } from "./context/loading.context"
// import database from "./services/firebase"

const App = () => {
  // useEffect(() => {
  //   const agora = new Date()
  //   database.ref("todo").push({ hello: "world", hora: agora.toISOString() })
  //   return () => {}
  // }, [])
  const [user, setUser] = useState<IUser>({
    login: "",
    name: "",
  })
  const [loadingState, setLoadgingState] = useState<ILoading>({
    loading: false,
  })

  return (
    <>
      <LoadingContext.Provider value={[loadingState, setLoadgingState]}>
        <LoginContext.Provider value={[user, setUser]}>
          {loadingState?.loading && <div className="box loader"></div>}
          <div className={`wrapper ${loadingState?.loading ? "loading" : ""} `}>
            {user.token ? <Dash /> : <Login />}
          </div>
          <UserBar />
        </LoginContext.Provider>
      </LoadingContext.Provider>
    </>
  )
}

export default App
