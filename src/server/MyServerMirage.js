import { createServer, Response } from "miragejs";

createServer({
  routes() {
    this.namespace = "api"

    // Responding to a POST request
    this.post("/users", (schema, request) => {
      let attrs = JSON.parse(request.requestBody)
      attrs.id = Math.floor(Math.random() * 100)

      return { movie: attrs }
    })

    // Using the `timing` option to slow down the response
    this.get(
      "/users",
      () => {
        return {
          users: [
            { id: 1, name: "John", year: 2010 },
            { id: 2, name: "Enz", year: 2014 },
            { id: 3, name: "William", year: 2017 },
          ],
        }
      },
      { timing: 4000 }
    )

    // Using the `Response` class to return a 500
    this.delete("/users/1", () => {
      let headers = {}
      let data = { errors: ["Server did not respond"] }

      return new Response(500, headers, data)
    })
  },
})
