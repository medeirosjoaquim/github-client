import React, { useState } from "react"

import Dash from "./components/dash"
import Login from "./components/login"
import TopBar from "./components/top-bar"

import "./app.scss"
import { LoginContext, IUser } from "./context/auth.context"
import { ILoading, LoadingContext } from "./context/loading.context"

const App = () => {
  const [user, setUser] = useState<IUser>({
    login: "lorem",
    name: "ipsum",
  })
  const [loadingState, setLoadgingState] = useState<ILoading>({ loading: false })

  return (
    <>
      <LoadingContext.Provider value={[loadingState, setLoadgingState]}>
        <LoginContext.Provider value={[user, setUser]}>
          <TopBar />
          {loadingState?.loading && <div className="box loader"></div>}
          <div className={`wrapper ${loadingState?.loading ? "loading" : ""} `}>
            {user.token ? <Dash /> : <Login />}
          </div>
        </LoginContext.Provider>
      </LoadingContext.Provider>
    </>
  )
}

export default App
