const express = require("express");
const app = express();
const userRouter = require("./routes/user.router");
const cors = require("cors");
app.get("/health", (req, res) => {
  res.status(200).json({ message: "Success" });
});
app.use([cors(), express.json()]);
app.use("/user", userRouter);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server running at 5000");
});
