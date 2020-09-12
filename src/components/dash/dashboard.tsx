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
// https://medium.com/vlgunarathne/introduction-to-github-graphql-api-423ebbab75f9
// pagination

const Dashboard = ({ match }: any) => {
  // TODO
  // exibir dados
  const { data, loading, fetchMore } = useQuery(STARRED_REPOSITORIES, {
    variables: { after: null },
  })
  if (loading) {
    return <>aguarde... carregando... </>
  } else {
    const { name, starredRepositories } = data?.viewer
    let repos = starredRepositories
    return (
      <>
        <StarsList
          login={""}
          name={name}
          starredRepositories={repos}
        ></StarsList>
        <button
          onClick={() => {
            const { endCursor } = data.viewer.starredRepositories.pageInfo
            console.log(endCursor)
            fetchMore({
              query: STARRED_REPOSITORIES,
              variables: { after: endCursor },
              updateQuery: (prevResult:any, { fetchMoreResult }: any) => {
                fetchMoreResult.viewer.starredRepositories.edges = [
                  ...prevResult.viewer.starredRepositories.edges,
                  ...fetchMoreResult.viewer.starredRepositories.edges
                ];
                return fetchMoreResult;
              }
            })
          }}
        >
          fetch more
        </button>
      </>
    )
  }
}

export default Dashboard
