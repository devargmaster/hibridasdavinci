const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");


const mockUser = {
  id: 1,
  username: "usuario",
  password: bcrypt.hashSync("clave10", 10), 
};


function generateToken(user) {
  return jwt.sign({ id: user.id, username: user.username }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRATION,
  });
}


exports.login = (req, res) => {
  const { username, password } = req.body;
console.log(username);
  // Verifica las credenciales
  if (username === mockUser.username && bcrypt.compareSync(password, mockUser.password)) {
    const token = generateToken(mockUser);
    return res.json({ token });
  }

  res.status(401).json({ message: "Credenciales inválidas" });
};

// Ruta protegida
exports.protected = (req, res) => {
  res.json({ message: "Acceso permitido a ruta protegida" });
};
