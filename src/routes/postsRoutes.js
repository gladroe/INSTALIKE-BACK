import express from "express";
import { litarPosts } from "../controllers/postsController.js";

const routes = (app) => {
	app.use(express.json());

	// Definindo uma rota GET para buscar todos os posts
	app.get("/posts", litarPosts);
};

export default routes;
