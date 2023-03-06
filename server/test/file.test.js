import chai from 'chai'
import chaiHttp from 'chai-http'
import app from '../server.js'

chai.use(chaiHttp)
const expect = chai.expect

describe('GET /data', () => {
  it('should return an array of objects containing file name and lines', async () => {
    const res = await chai.request(app).get('/files/data')
    expect(res).to.have.status(200)
    expect(res.body.body).to.be.an('array')
    expect(res.body.body[0]).to.have.property('file')
    expect(res.body.body[0]).to.have.property('lines').that.is.an('array')
  })

  it('should only return objects with text, number, and hex properties', async () => {
    const res = await chai.request(app).get('/files/data')
    expect(res).to.have.status(200)
    expect(res.body.body).to.be.an('array')
    for (const file of res.body.body) {
      for (const line of file.lines) {
        expect(line).to.have.property('text')
        expect(line).to.have.property('number')
        expect(line).to.have.property('hex')
      }
    }
  })

  it('should only return objects with valid number and 32-digits long hex properties', async () => {
    const res = await chai.request(app).get('/files/data')
    expect(res).to.have.status(200)
    expect(res.body.body).to.be.an('array')
    for (const file of res.body.body) {
      for (const line of file.lines) {
        expect(+line.number).to.be.a('number')
        expect(line.hex).to.have.lengthOf(32)
      }
    }
  })
})
