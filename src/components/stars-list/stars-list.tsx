import React, { useRef, useCallback } from "react"
import { Viewer } from "../../typings/viewer.model"
import "./stars-list.styles.scss"
import RepoCard from "../repo-card"

const StarsList = ({ starredRepositories }: Viewer) => {
  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("visible")
      }
    })
  )

  const lastElementRef = useCallback((node) => {
    // if (loading) return
    if (observer.current) observer.current!.disconnect()
    if (node) observer.current.observe(node)
    console.log(node)
  }, [])
  return (
    <div className="stars-list--container">
      {starredRepositories.edges.map((repo, index) => (
        // todo, montar card do repositorio
        <div key={repo.cursor} ref={lastElementRef}>
          <RepoCard
            id={repo.node.id}
            description={repo.node.description}
            name={repo.node.name}
            primaryLanguage={repo.node.primaryLanguage}
            stargazers={repo.node.stargazers}
            url={repo.node.url}
          ></RepoCard>
        </div>
      ))}
    </div>
  )
}

export default StarsList
