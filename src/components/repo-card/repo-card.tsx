import React from "react"
import "./repo-card.styles.scss"
import { Node } from "../../typings/viewer.model"
const RepoCard = ({
  id,
  description,
  name,
  primaryLanguage,
  stargazers,
  url,
}: Node) => {
  return (
    <div className="card">
      <div className="card-head">
        <span className="bold">
          {name} {":"}{" "}
        </span>
        <p>{description}</p>
      </div>
      <div className="card-body">
        <div className="language" style={{ textAlign: "end" }}>
          <div
            className="circle"
            style={{
              backgroundColor: primaryLanguage?.color
                ? primaryLanguage.color
                : "black",
              height: ".5rem",
              width: ".5rem",
              borderRadius: "25px",
              display: "inline-block",
              border: "1px solid #000",
              marginRight: ".5rem",
            }}
          ></div>
          <span className="bold" style={{ verticalAlign: "middle" }}>
            {primaryLanguage?.name}
          </span>{" "}
          <div
            className="bold"
            style={{ verticalAlign: "middle", fontSize: "12px" }}
          >
            {url}
          </div>
        </div>
        <span className="bold stars" style={{ verticalAlign: "middle" }}>
          stars: {stargazers.totalCount}
        </span>
      </div>
    </div>
  )
}

export default RepoCard
