import React, { useContext, useEffect } from "react"

import { LoginContext } from "../../context/auth.context"
import { LoadingContext } from "../../context/loading.context"

import "./login.styles.scss"

const Login = () => {
  const [, setUser] = useContext(LoginContext)
  const [, setLoading] = useContext(LoadingContext)
  const client_id = process.env.REACT_APP_CLIENT_ID
  const redirect_uri = process.env.REACT_APP_REDIRECT_URI
  const client_secret = process.env.REACT_APP_CLIENT_SECRET
  const proxy_url = process.env.REACT_APP_PROXY_URL || ""

  useEffect(() => {
    const url = window.location.href
    const hasCode = url.includes("?code=")
    if (hasCode) {
      setLoading({ loading: true })
      const newUrl = url.split("?code=")
      window.history.pushState({}, "", newUrl[0])

      const requestData = {
        client_id: client_id,
        redirect_uri: redirect_uri,
        client_secret: client_secret,
        code: newUrl[1],
      }

      fetch(proxy_url, {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => {
          const { name, login, token } = data
          localStorage.setItem("token", token)
          setLoading({ loading: false })
          return data ? setUser({ name, login, token }) : () => {}
        })
    }
  }, [client_id, client_secret, proxy_url, redirect_uri, setLoading, setUser])

  return (
    <div className="login-container">
      <span className="login-container--disclaimer">
        Autorize o app para logar com
      </span>
      <a className="login-container link" href="https://github.com/login/oauth/authorize?client_id=06d336ae0bf6f95399f8">
        github
      </a>{" "}
      🥰
    </div>
  )
}

export default Login
