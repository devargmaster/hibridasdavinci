require("dotenv").config();
const express = require("express");
const authRoutes = require("./routes/authRoutes");

const app = express();
app.use(express.json());


app.use(express.static("public"));


app.use("/api/auth", authRoutes);

// Inicia el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
