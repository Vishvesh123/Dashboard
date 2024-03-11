const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  "mongodb+srv://vishvesh_123:Pandey%402002@cluster0.gbo6ijv.mongodb.net/dashboardDB",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const dataPointSchema = new mongoose.Schema({
  end_year: Number,
  intensity: Number,
  sector: String,
  topic: String,
  insight: String,
  url: String,
  region: String,
  start_year: Number,
  impact: Number,
  added: String,
  published: String,
  country: String,
  relevance: Number,
  pestle: String,
  source: String,
  title: String,
  likelihood: Number,
});
const DataPoint = mongoose.model("data", dataPointSchema);

app.get("/api/data", async (req, res) => {
  try {
    const data = await DataPoint.find();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
