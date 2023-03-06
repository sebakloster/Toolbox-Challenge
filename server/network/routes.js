import filesRouter from '../components/file/network.js'

const routes = (server) => {
  server.use('/files', filesRouter)
}

export default routes
