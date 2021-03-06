import http from "http"
import fetch from "isomorphic-unfetch"
import listen from "test-listen"
import { apiResolver } from "next-server/dist/server/api-utils"
import handler  from "../../pages/api/jobs"
import jobs from '../../data/jobs.json'

describe("/ handler", () => {
  test("responds 200 to authed GET", async (done) => {
    const requestHandler = (req, res) => {
      res.body = jobs
      return apiResolver(req, res, undefined, handler)
    }
    
    const server = http.createServer(requestHandler)
    const url = await listen(server)
    const response = await fetch(url)

    expect(response.status).toBe(200)
    done()
    return server.close()
  })
})