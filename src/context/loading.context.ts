import { createContext } from "react"

export interface ILoading {
  loading: boolean
}

type LoadingState = [ILoading, (value: ILoading) => void]
export const LoadingContext = createContext<LoadingState>([
  { loading: false },
  (value: ILoading) => {},
])
