import React from "react"
// import { client } from "../../services/client"
import { gql, useQuery } from "@apollo/client"
import StarsList from "../stars-list"

const STARRED_REPOSITORIES = gql`
  query repoQuery($after: String) {
    viewer {
      login
      name
      starredRepositories(first: 2, after: $after) {
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
const Dashboard = ({ match }: any) => {
  const { data, loading, fetchMore } = useQuery(STARRED_REPOSITORIES, {
    variables: { after: null },
  })

  if (loading) {
    return <>aguarde... carregando... </>
  } else {
    const { name, starredRepositories } = data?.viewer
    let repos = starredRepositories

    // const fetchMoreRepos = () => {
    //   const { endCursor } = data.viewer.starredRepositories.pageInfo
    //   fetchMore({
    //     query: STARRED_REPOSITORIES,
    //     variables: { after: endCursor },
    //     updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
    //       fetchMoreResult.viewer.starredRepositories.edges = [
    //         ...prevResult.viewer.starredRepositories.edges,
    //         ...fetchMoreResult.viewer.starredRepositories.edges,
    //       ]
    //       return fetchMoreResult
    //     },
    //   })
    // }

    return (
      <>
        <StarsList name={name} starredRepositories={repos}></StarsList>
      </>
    )
  }
}

export default Dashboard
