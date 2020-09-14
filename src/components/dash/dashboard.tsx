import React, { useEffect } from "react"
import { gql, useQuery } from "@apollo/client"
import StarsList from "../stars-list"
import firebasedb from "../../services/firebase"
import { Data } from "../../typings/viewer.model"
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
  const {
    data,
    loading,
    fetchMore,
  } = useQuery<Data>(STARRED_REPOSITORIES, {
    variables: { after: null },
    notifyOnNetworkStatusChange: true,
  })
  // TODO , loading para fetchmore
  // const [, setLoading] = useContext(LoadingContext)
  // useEffect(() => {
  //   console.log('fire')
  //   if (loading) {
  //     setLoading({ loading: true })
  //   } else {
  //     setLoading({ loading: false })
  //   }
  // }, [loading, setLoading])
  console.log(data)

  //   if (loading) {
  //     setLoading({ loading: true })
  //   } else {
  //     setLoading({ loading: false })
  //   }
  // }, [loading, setLoading])

  // useEffect(() => {
  //   if (data) {
  //     const listNames = data?.viewer.starredRepositories.edges.map( repo => repo.node.name)
  //     firebasedb.ref("stars").push(listNames)
  //   }
  //   return () => {
  //   }
  // }, [data, fetchMore])

  if (loading) {
    return <>aguarde... carregando... </>
  } else {
    
    const { name, starredRepositories } = data?.viewer || {}
    let repos = starredRepositories
    const fetchMoreRepos = () => {
      const { endCursor } = data?.viewer.starredRepositories.pageInfo || {}
      fetchMore({
        variables: { after: endCursor },
        updateQuery: (prevResult: any, { fetchMoreResult }: any) => {
          firebasedb.ref("stars").push(fetchMoreResult.viewer.starredRepositories.edges)
          fetchMoreResult.viewer.starredRepositories.edges = [
            ...prevResult.viewer.starredRepositories.edges,
            ...fetchMoreResult.viewer.starredRepositories.edges,
          ]
          return fetchMoreResult
        },
      })
    }

    return (
      <>
        <button onClick={() => fetchMoreRepos()}>fetch</button>
        <StarsList
          loading={loading}
          name={name}
          starredRepositories={repos}
          fetchMore={fetchMoreRepos}
        ></StarsList>
      </>
    )
  }
}

export default Dashboard
