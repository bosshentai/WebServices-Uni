import express from "express"

import {graphqlHTTP} from "express-graphql"
import {connectDatabase} from "./database/db.js"
import {schema}  from "./schema.js"
// const schema = require('./schema.js')

// import {RootQuery} from "./schema.js"
// const connectDatabase = require("./database/db")



const app = express()

// app.get("/",(req,))

connectDatabase()
app.use(express.json())

app.use("/graphql",graphqlHTTP({
  schema:schema,
  // rootValue: null,
  graphiql: true

}))

app.listen(8002,()=> console.log("Run port 8002"))


export default app
