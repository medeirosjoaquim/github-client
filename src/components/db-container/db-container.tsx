import React, { useEffect } from "react"
import {addRxPlugin, createRxDatabase}  from "rxdb"
import { schema } from "../../schema"

const DbContainer = () => {
  addRxPlugin(require("pouchdb-adapter-idb"))
  addRxPlugin(require("pouchdb-adapter-http"))
  const syncURL = "http://localhost:5984/"
  const dbName = "chatdb"

  const createDatabase = async () => {
    const db = await createRxDatabase({
      name: dbName,
      adapter: "idb",
      password: "12345678",
    })

    db.waitForLeadership().then(() => {
      document.title = "♛ " + document.title
    })
// creates a collection using the schema
    const messagesCollection = await db.collection({
      name: "messages",
      schema: schema,
    })
// syncs collection with database    
    messagesCollection.sync({ remote: syncURL + dbName + "/" })

    return db
  }

  useEffect(() => {
    createDatabase()
    return () => {
      // cleanup
    }
  }, [])
  return <div><h1>db works</h1></div>
}

export default DbContainer
