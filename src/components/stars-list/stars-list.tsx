import React from "react"
import { Viewer } from "../../typings/viewer.model"
import "./stars-list.styles.scss"

const StarsList = ({ name, starredRepositories }: Viewer) => {
  return (
    <div className="stars-list--container">
      <div>olá {name}!</div>
  <div>essas são suas estrelas: {starredRepositories.edges.map( repo => (<div>{repo.node.name}</div>))}</div>
    </div>
  )
}

export default StarsList
