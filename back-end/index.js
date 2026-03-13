import { createUser } from './src/controllers/userController.js';


await createUser({
    name: "João",
    surname: "Silva",
    email: "121251@email.com",
    password: "senha_super_segura",
    cpf: "13222143522"
});