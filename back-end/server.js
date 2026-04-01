import app from './app.js';

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server rodando: ${PORT}`);
  console.log(`API disponível em: http://localhost:${PORT}/api/v1`);
});
