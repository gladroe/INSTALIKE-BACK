//importando o express, que é uma biblioteca para criar servidores web
import express from "express";
import routes from "./src/routes/postsRoutes.js";

//criando o servidor
const app = express();
app.use(express.static("uploads"));
routes(app);

//iniciando o servidor
app.listen(3000, () => {
	console.log("Servidor ouvindo na porta 3000");
});
