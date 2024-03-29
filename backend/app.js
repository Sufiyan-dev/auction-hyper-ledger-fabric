const express = require("express");

const app = express();

// req input phraser
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hey');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
    console.log(`App listening to http://localhost:${PORT}`)
);