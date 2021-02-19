import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      nacionality:Model
    },

    seeds(server) {
      server.create("user", { name: "Bob", year: '2020' })
      server.create("user", { name: "Alice", year: '2020' })
      server.create("nacionality",{name: 'Argentina'})
      server.create("nacionality",{name: 'Brasil'})
    },

    routes() {
      this.namespace = "api";

      this.get("/users", (schema) => {
        return schema.users.all()
      })

      this.get("/nacionalidades", (schema) => {
        return schema.nacionalities.all()
      })

      this.post("/nacionalidades", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)

        return schema.nacionalities.create(attrs)
      })
    },
  })

  return server
}