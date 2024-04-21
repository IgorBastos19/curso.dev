function status(request, response) {
  response.status(200).json({ chave: "Servido retornando 200" });
}

export default status;
