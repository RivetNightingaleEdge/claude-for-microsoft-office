require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api", async (req, res) => {
  const { text, type, prompt } = req.body;

  let result = "";

  if (type === "summarize") {
    result = "Summary: " + text.slice(0, 100);
  } else if (type === "rewrite") {
    result = "Rewritten: " + text;
  } else if (type === "slide") {
    result = "Slide outline:\n- " + text.split(" ").slice(0, 5).join(" ");
  } else {
    result = "Custom: " + prompt + " → " + text;
  }

  res.json({ result });
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on port 3000");
});
