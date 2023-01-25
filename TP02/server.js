import express from "express"

import resolvers from "./resolvers.js"
import schema from "./schema.js"


import { graphqlHTTP } from 'express-graphql'


const app = express()

app.get('/', (req, res) => {
  res.send('Run intro a graphql')
})

const root = resolvers


app.use('/graphql',graphqlHTTP({
  schema : schema,
  rootValue: root,
  graphiql: true
}))


app.listen(8002, () => console.log('Run port 8002'))

export default app
