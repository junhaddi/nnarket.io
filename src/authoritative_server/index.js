import express from "express";
import path from "path";

const app = express();
const server = require("http").Server(app);

app.use("/static", express.static(path.join(__dirname, "../")));
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../../dist/public/index.html"));
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
