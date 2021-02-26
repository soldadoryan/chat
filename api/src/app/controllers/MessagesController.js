class MessagesController {
    async store(req, res) {
        const { io } = req;
        const { username, content } = req.body;

        io.emit("nova_mensagem", {
            username,
            content
        });

        return res.status(200).json({ message: "Mensagem enviada!" });
    }
}

export default new MessagesController();