import React, { useState } from "react"
import { gql, useQuery } from "@apollo/client"
import StarsList from "../stars-list"
const STARRED_REPOSITORIES = gql`
  query repoQuery($after: String) {
    viewer {
      login
      name
      starredRepositories(first: 10, after: $after) {
        edges {
          cursor
          node {
            id
            name
            primaryLanguage {
              id
              name
              color
            }
            description
            stargazers {
              totalCount
            }
            url
          }
        }
        pageInfo {
          endCursor
        }
      }
    }
  }
`
const Dashboard = () => {
  const { data, loading, fetchMore } = useQuery(STARRED_REPOSITORIES, {
    variables: { after: null },
  })
  // const [repos, setRespos] = useState<StarredRepositories>({})
  if (loading) {
    return <>aguarde... carregando... </>
  } else {
    const { name, starredRepositories } = data?.viewer
    let repos = starredRepositories
    const fetchMoreRepos = () => {
      const { endCursor } = data.viewer.starredRepositories.pageInfo
      fetchMore({
        variables: { after: endCursor },
        updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
          fetchMoreResult.viewer.starredRepositories.edges = [
            ...prevResult.viewer.starredRepositories.edges,
            ...fetchMoreResult.viewer.starredRepositories.edges,
          ]
          console.log(fetchMoreResult)
          return fetchMoreResult
        },
      })
    }

    return (
      <>
      <button onClick={()=> fetchMoreRepos()}>fetch</button>
        <StarsList loading={loading} name={name} starredRepositories={repos} fetchMore={fetchMoreRepos}></StarsList>
      </>
    )
  }
}

export default Dashboard
