import getTodosPosts from "../models/postsModel.js";

export async function litarPosts(req, res) {
	// Chamar a função para obter todos os posts
	const posts = await getTodosPosts();
	// Enviando uma resposta HTTP com status 200 (OK) e os posts no formato JSON
	res.status(200).json(posts);
}
