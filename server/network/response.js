export const success = (req, res, data, status = 200) => {
  res.status(status).send({
    error: '',
    body: data
  })
}

export const error = (req, res, data, status = 500, details) => {
  console.error(`[response error] ${details}`)
  res.status(status).send({
    error: data,
    body: ''
  })
}
