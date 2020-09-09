import React from "react"
// import { client } from "../../services/client"
import { gql, useQuery } from "@apollo/client"
import StarsList from "../stars-list"

const STARRED_REPOSITORIES = gql`
  query($cursor: String) {
    viewer {
      login
      name
      starredRepositories(first: 3, after: $cursor) {
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
          }
        }
      }
    }
  }
`
// https://medium.com/vlgunarathne/introduction-to-github-graphql-api-423ebbab75f9
// pagination

/*
viewer {
    login
    name
    starredRepositories(first: 3) {
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
        }
      }
    }
  }
*/
const Dashboard = ({ match }: any) => {
  // useEffect(() => {
  //   client
  //     .query({
  //       query: ,
  //     })
  //     .then((result) => console.log(result))
  //   return () => {}
  // }, [])

  // TODO
  // exibir dados
  const { data, loading, fetchMore } = useQuery(STARRED_REPOSITORIES)

  console.log({ data, loading, fetchMore })
  return loading ? (
    <>aguarde... carregando... </>
  ) : (
    <>
      <div>olá {data.viewer.name}</div>
      <StarsList></StarsList>
    </>
  )
}

export default Dashboard
