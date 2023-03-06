import express from 'express'
import cors from 'cors'
import router from './network/routes.js'

const app = express()

app.use(cors())
router(app)

app.listen(3001, () => {
  console.log('Server started on port 3001')
})

export default app
