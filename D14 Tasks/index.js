const express = require("express");
const app = express();

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

app.get("/:name", (req, res) => {
    res.json({ name: req.params.name, age: req.query.age })
});

app.get("/getUser/:index", (req, res) => {
    res.json(users[req.params.index])
});

app.post("/post", (req, res) => {
    res.json({message: "Welcome geust"});    
});

app.put("/put", (req, res)=>{
    res.json({message: "Hello"})
})

app.patch("/patch", (req, res)=>{
    console.log("Hello");
})

app.delete("/del", (req, res)=>{
    res.json({message: "Deleted"})
});


app.listen(5000, () => {
    console.log("connected to http://localhost:5000");
})