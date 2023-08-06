const express = require("express")
const app = express()

const cors = require("cors")
const mercadopago = require("mercadopago")

app.use(express.json())
app.use(cors())

const PORT = 8080

mercadopago.configure({
    access_token: process.env.VITE_TEST_ACCESS_TOKEN
})

const MERCADO_PAGO_ACCESS_TOKEN = process.env.VITE_TEST_ACCESS_TOKEN

app.post('/crear-preferencia', async (req, res) => {
    try {
      const { productos } = req.body;
      if (!productos || !Array.isArray(productos) || productos.length === 0) {
        return res.status(400).json({ error: 'El array de productos es inválido o está vacío' });
      }
  
      const url = 'https://api.mercadopago.com/checkout/preferences';
      const response = await axios.post(url, {
        items: productos,
      }, {
        headers: {
          Authorization: `Bearer ${MERCADO_PAGO_ACCESS_TOKEN}`,
        },
      });
  
      const preferencia = response.data;
      res.json(preferencia);
  
    } catch (error) {
      console.error('Error al crear la preferencia:', error.message);
      res.status(500).json({ error: 'Error al crear la preferencia' });
    }
  });

app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})