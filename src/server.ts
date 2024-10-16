import express from "express";
import { route } from "./routes/auth-routes";

const port = 3000;
const app = express();



app.use(route);


app.use(express.json())

app.listen(port, ()=> {
    console.log("Servidor aberto na porta 3000")
})