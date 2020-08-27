import { createContext } from "react"

export interface IUser {
  login?: string
  name?: string
  token?: string
}

type LoginState = [IUser, (value: IUser) => void]
export const LoginContext = createContext<LoginState>([
  { login: "", name: "" },
  (value: IUser) => {},
])
