require("dotenv").config();
const express = require("express");
const cors = require("cors");

const healthRoute = require("./routes/health");
const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/", healthRoute);
app.use("/auth", authRoute);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
