import React, { useRef, useCallback } from "react"
import { StarredRepositories } from "../../typings/viewer.model"
import "./stars-list.styles.scss"
import RepoCard from "../repo-card"

interface StarsListProps {
  name: string
  loading: boolean
  starredRepositories: StarredRepositories
  fetchMore: () => void
}

const StarsList = ({ starredRepositories, fetchMore, loading }: StarsListProps) => {
  const observer = useRef<IntersectionObserver>(
    new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        console.log("visible")
        fetchMore()
      }
    })
  )

  const lastElementRef = useCallback((node) => {
    if (loading) return
    if (observer.current) observer.current!.disconnect()
    if (node) observer.current.observe(node)
  }, [loading])

  return (
    <div className="stars-list--container">
      {starredRepositories.edges.map((repo, index) => (
        // todo, montar card do repositorio
        <div
          key={`${repo.node.name}${repo.node.id}`}
          ref={
            index + 1 === starredRepositories.edges.length
              ? lastElementRef
              : null
          }
        >
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
