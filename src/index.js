import express from 'express'
import cors from 'cors'
import errorhandler from 'strong-error-handler'

import { port, isDevelopment } from './constants/config'

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

const arr = []
// let op = '+'
app.get('/', (req, res) => {
  //   const sum = arr.reduce((accumulator, currentValue) => {
  //     if (op === '*') {
  //       return accumulator * currentValue
  //     }
  //     if (op === '-') {
  //       return accumulator - currentValue
  //     }

  //     if (op === '/') {
  //       return accumulator / currentValue
  //     }
  //     return accumulator + currentValue
  //   }, 1)

  res.json({ arr })
})

app.post('/add', (req, res) => {
  const { user } = req.body
  const { message } = req.body

  //   const num = +req.body.num
  //   const { operator } = req.body
  //   op = operator
  //   if (typeof num !== 'number') {
  //     return res.json({ error: 'Error!!!!!!!!!!!! Only numbers!!!!!!!!!!!!' })
  //   }

  arr.push({ user, message })

  return res.json({ user, message })
})

app.use(
  errorhandler({
    debug: isDevelopment,
    log: true
  })
)

app.listen({ port }, () => {
  console.log(`✓ Started API server at http://localhost:${port}`)
})
