import React from "react"
// import { client } from "../../services/client"
import { gql, useQuery } from "@apollo/client"
import StarsList from "../stars-list"

// TODO 
// Adicionar cursor e validar paginação
const STARRED_REPOSITORIES = gql`
  {
    viewer {
      login
      name
      starredRepositories(first: 3, after: "put_in_a_cursor_value_here") {
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
  const { data, loading, fetchMore } = useQuery(STARRED_REPOSITORIES)
  console.log({ data, loading, fetchMore })
  return (
    <>
      <StarsList></StarsList>
    </>
  )
}

export default Dashboard
