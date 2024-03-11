function status(request, response) {
  response.status(200).json({ chave: "status 200 ok" });
}

export default status;
