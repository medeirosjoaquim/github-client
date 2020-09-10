import React, { useContext } from "react"

import { LoginContext } from "../../context/auth.context"

import GithubIcon from './assets/images/logo.png'
import "./top-bar.styles.scss"

const TopBar = () => {
  const [login, setLogin] = useContext(LoginContext)
  return (
    <div className="top-bar--container">
      <div className="top-bar--container logo">Github Client</div>
      <div className="top-bar--container icon"><img src={GithubIcon} alt="github icon"/></div>
      <div className="top-bar--container links">
        {login.token ? (
          <div className="links">
            <div className="greetings">{login.login}!</div>
            <div id="logout" onClick={() => setLogin({token: undefined})}>logout</div>
          </div>
        ) : (
          <a href="https://github.com/login/oauth/authorize?client_id=06d336ae0bf6f95399f8">
            login
          </a>
        )}
      </div>
    </div>
  )
}

export default TopBar
