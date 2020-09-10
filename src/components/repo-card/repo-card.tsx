import React from "react"
import "./repo-card.styles.scss"
import { StarredRepository } from "../../typings/viewer.model"
const RepoCard = ({
  id,
  description,
  name,
  primaryLanguage,
  stargazers,
  url,
}: StarredRepository) => {
  return <div>
      <ul>
<li>id: {id}</li>
<li>description: {description}</li>
<li>name: {name}</li>
<li>languague: {primaryLanguage.name}</li>
<li>{url}</li>
<li>total stars: {stargazers.totalCount}</li>
      </ul>
  </div>
}

export default RepoCard
