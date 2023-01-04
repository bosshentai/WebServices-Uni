import express from "express"

import { graphqlHTTP } from 'express-graphql'


const app = express()

app.get('/', (req, res) => {
  res.send('Run intro a graphql')
})

app.listen(8002, () => console.log('Run port 8002'))

export default app
