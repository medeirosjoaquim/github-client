import React from "react"
import { Viewer } from "../../typings/viewer.model"
import "./stars-list.styles.scss"
import RepoCard from "../repo-card"

const StarsList = ({ name, starredRepositories }: Viewer) => {
  console.log(starredRepositories)
  return (
    <div className="stars-list--container">
          {starredRepositories.edges.map((repo) => (
            // todo, montar card do repositorio
            <RepoCard 
            key={repo.cursor}
            id={repo.node.id}
            description={repo.node.description}
            name={repo.node.name}
            primaryLanguage={repo.node.primaryLanguage}
            stargazers={repo.node.stargazers}
            url={repo.node.url}
            ></RepoCard>
          ))}
      </div>
    
  )
}

export default StarsList
