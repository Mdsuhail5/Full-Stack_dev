const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
const mainRouter = require("./routes/index");

app.use("/api/v1", mainRouter);




app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
