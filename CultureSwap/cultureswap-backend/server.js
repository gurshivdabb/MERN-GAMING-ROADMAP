const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json())

app.get('/', (req, res) => {
    res.send("Hello World from CultureSwap!")
});

app.post('/users', (req, res) => {
    res.send(req.body.name + ' says hi') // CultureSwap says hi
})

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));