import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function gerarDescricaoComGemini(imageBuffer) {
	const prompt =
		"Gere uma descrição em português do brasil para a seguinte imagem, seja direto, somente a descricao, sem explicação do gemini";

	try {
		const image = {
			inlineData: {
				data: imageBuffer.toString("base64"),
				mimeType: "image/png",
			},
		};
		const res = await model.generateContent([prompt, image]);
		return res.response.text() || "Alt-text não disponível.";
	} catch (erro) {
		console.error("Erro ao obter alt-text:", erro.message, erro);
		throw new Error("Erro ao obter o alt-text do Gemini.");
	}
}

export async function gerarAltTextComGemini(imageBuffer) {
	const prompt =
		"Gere uma alt text em português do brasil para a seguinte imagem,  seja direto, somente a descricao, sem explicação";

	try {
		const image = {
			inlineData: {
				data: imageBuffer.toString("base64"),
				mimeType: "image/png",
			},
		};
		const res = await model.generateContent([prompt, image]);
		return res.response.text() || "Alt-text não disponível.";
	} catch (erro) {
		console.error("Erro ao obter alt-text:", erro.message, erro);
		throw new Error("Erro ao obter o alt-text do Gemini.");
	}
}
