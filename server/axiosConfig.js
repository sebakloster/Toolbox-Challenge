import axios from 'axios'

/* Field's data should be extracted to a .env file, however we are not
 allowed to use them in the challenge */

const axiosInstance = axios.create({
  baseURL: 'https://echo-serv.tbxnet.com/v1/secret',
  headers: {
    Authorization: 'Bearer aSuperSecretKey'
  }
})

export default axiosInstance
