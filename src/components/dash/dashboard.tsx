import React from "react"
// import { client } from "../../services/client"
import { gql, useQuery } from "@apollo/client"
import StarsList from "../stars-list"

const STARRED_REPOSITORIES = gql`
  query($cursor: String) {
    viewer {
      login
      name
      starredRepositories(first: 18, after: $cursor) {
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
      }
    }
  }
`
// https://medium.com/vlgunarathne/introduction-to-github-graphql-api-423ebbab75f9
// pagination

const Dashboard = ({ match }: any) => {
  // TODO
  // exibir dados
  const { data, loading, fetchMore } = useQuery(STARRED_REPOSITORIES)

  if (loading) {
    return <>aguarde... carregando... </>
  } else {
    console.log({ data, loading, fetchMore })
    const { name, starredRepositories } = data?.viewer
    return (
      <>
        <StarsList
          name={name}
          starredRepositories={starredRepositories}
        ></StarsList>
      </>
    )
  }
}

export default Dashboard
