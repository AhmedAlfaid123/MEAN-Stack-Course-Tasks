const http = require("node:http");

const users = [
    {
        name: "Ahmed",
        age: 21
    },
    {
        name: "Hassan",
        age: 65
    }
]

const server = http.createServer((req, res)=>{
    const { method, url } = req;

    res.setHeader("Content-Type", "application/json; charset=utf-8");

    if (method === "GET" && url === "/users") {
        res.writeHead(200);
        res.end(JSON.stringify(users))
    }
    if (method === "POST" && url === "/post") {
        res.writeHead(200);
        res.end(JSON.stringify({message: "Welcome back"}))
    }
    if (method === "PUT" && url === "/put") {
        res.writeHead(200);
        res.end(JSON.stringify(users))
    }
    if (method === "PATCH" && url === "/patch") {
        res.writeHead(200);
        res.end(JSON.stringify({message: "Welcome back"}))
    }
    if (method === "DELETE" && url === "/del") {
        res.writeHead(200);
        res.end(JSON.stringify({message:"Deleted" }))
    }

})

server.listen(5000, ()=>{
    console.log("connected to http://localhost:5000");
})