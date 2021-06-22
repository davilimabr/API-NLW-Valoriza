import express from "express";

const app = express();

app.get("/teste", (request, response) => {
    return response.send("teste rota get");
});

app.post("/teste-post", (request, response) => {
    return response.send("teste rota post");
});

app.listen(3000, () => console.log("Server is runing"));

