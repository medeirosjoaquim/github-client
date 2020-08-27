import React, { useEffect } from "react"
import { client } from "../../services/client"
import { gql } from "@apollo/client"

const Dashboard = () => {
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            viewer {
              login
              name
              starredRepositories(first: 3) {
                totalCount
                edges {
                  node {
                    name
                    id
                    homepageUrl
                  }
                }
              }
            }
          }
        `,
      })
      .then((result) => console.log(result))
    return () => {}
  }, [])
  return (
    <>
      <h1>dash works</h1>
    </>
  )
}

export default Dashboard
