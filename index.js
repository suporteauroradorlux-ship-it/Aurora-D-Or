const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs-extra');
const path = require('path');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const USERS_FILE = path.join(__dirname, 'users.json');
const JWT_SECRET = process.env.JWT_SECRET || 'aurora_chave_super_secreta';
const TOKEN_EXPIRES = '8h';

// Garantir que users.json exista
async function ensureUsersFile() {
  if (!(await fs.pathExists(USERS_FILE))) {
    await fs.writeJson(USERS_FILE, []);
  }
}
ensureUsersFile();

// Função util
async function readUsers() {
  await ensureUsersFile();
  const users = await fs.readJson(USERS_FILE);
  return users;
}
async function writeUsers(users) {
  await fs.writeJson(USERS_FILE, users, { spaces: 2 });
}

// REGISTER
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password || password.length < 6) {
      return res.status(400).json({ error: 'Nome, e-mail e senha (mín. 6) são necessários.' });
    }

    const users = await readUsers();
    const exists = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (exists) return res.status(409).json({ error: 'E-mail já cadastrado.' });

    const salt = bcrypt.genSaltSync(10);
    const passwordHash = bcrypt.hashSync(password, salt);
    const id = users.length ? Math.max(...users.map(u=>u.id)) + 1 : 1;

    const newUser = { id, name, email: email.toLowerCase(), passwordHash };
    users.push(newUser);
    await writeUsers(users);

    // retornar token já logado (opcional)
    const token = jwt.sign({ id: newUser.id, email: newUser.email, name: newUser.name }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES });
    res.json({ token, user: { id: newUser.id, email: newUser.email, name: newUser.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno.' });
  }
});

// LOGIN
app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'E-mail e senha são necessários.' });

    const users = await readUsers();
    const user = users.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (!user) return res.status(401).json({ error: 'E-mail ou senha inválidos.' });

    const valid = bcrypt.compareSync(password, user.passwordHash);
    if (!valid) return res.status(401).json({ error: 'E-mail ou senha inválidos.' });

    const token = jwt.sign({ id: user.id, email: user.email, name: user.name }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES });
    res.json({ token, user: { id: user.id, email: user.email, name: user.name } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Erro interno.' });
  }
});

// ROTA PROTEGIDA EXEMPLO (verificar token)
app.get('/me', (req, res) => {
  const authHeader = req.headers.authorization || req.headers['x-access-token'] || req.headers.token;
  const token = authHeader && authHeader.startsWith('Bearer ') ? authHeader.split(' ')[1] : authHeader;
  if (!token) return res.status(401).json({ error: 'Token ausente.' });

  try {
    const payload = jwt.verify(token, JWT_SECRET);
    res.json({ user: payload });
  } catch (err) {
    return res.status(401).json({ error: 'Token inválido.' });
  }
});

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Aurora Auth server rodando na porta ${PORT}`);
});
