const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

const logs = [];

app.post("/api/log", (req, res) => {
  const { event, timestamp } = req.body;

  if (!event || !timestamp) {
    return res.status(400).json({ message: "Invalid data" });
  }

  logs.push({ event, timestamp });
  console.log("Event logged:", event, timestamp);

  res.json({ message: "Event logged successfully" });
});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
