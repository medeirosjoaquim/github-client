import React from "react"
import { Viewer } from "../../typings/viewer.model"
import "./stars-list.styles.scss"

const StarsList = ({ name, starredRepositories }: Viewer) => {
  return (
    <div className="stars-list--container">
      <div>olá {name}!</div>
      <div>
        essas são suas estrelas:{" "}
        <div style={{ display: "flex", flexWrap: 'wrap' }}>
          {starredRepositories.edges.map((repo) => (
            // todo, montar card do repositorio
            <div style={{margin: '0 1rem'}}>{repo.node.name}|</div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default StarsList
