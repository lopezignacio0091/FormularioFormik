import { createServer, Model } from "miragejs";

export function makeServer({ environment = "test" } = {}) {
  let server = createServer({
    environment,

    models: {
      user: Model,
      nacionality:Model,
      edad: Model,
    },

    seeds(server) {
      server.create("user", { name: "Bob", year: '2020' });
      server.create("user", { name: "Alice", year: '2020' });
      server.create("nacionality",{name: 'Argentina'});
      server.create("nacionality",{name: 'Brasil'});
      server.create("edad",{name:'Menor 18',val: 1});
      server.create("edad",{name:'Mayor 18', val:18});
    },

    routes() {
      this.namespace = "api";

      this.get("/edades", (schema) => {
        return schema.edads.all()
      })

      this.get("/users", (schema) => {
        return schema.users.all()
      })

      this.post("/users", (schema, request) => {
        let attrs = JSON.parse(request.requestBody)

        return schema.users.create(attrs)
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