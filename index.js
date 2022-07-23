require('dotenv').config();
const app = require('express')();

app.get('/', (_req, res) => {
  try {
    res.status(200).json({ message: 'Hello World!' });
  } catch (error) {
    console.log('error', error);
    res.status(500).json({ message: error.message });
  }
});

const PORT = +process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🛸 Server running on port ${PORT} 🛸`));
