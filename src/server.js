const express = require("express");

const {} = require("./routes/users.routes")

const app = express();

app.use(express.json());

const PORT = 3000;

app.listen(PORT, () => console.log(`Server in running on Porta ${PORT}`));