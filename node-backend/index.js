const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();


app.get("/api", (req, res) => {
res.json({ message: "test", box1: "data1", box2: "data2" });
});

app.listen(PORT, () => {
console.log(`Server listening on ${PORT}`);
});