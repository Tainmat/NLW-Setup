import fastify from "fastify";

const app = fastify();
const port = 3333;

app.get("/",function (request, reply){
  reply.send({ hello: 'world' })
})

app.listen({
  port
}).then(()=>{
  console.log("Rodando na porta 3333")
})