require("./database/mongoose");
const express = require("express");
const userRouter = require("./routers/users");
const eventRouter = require("./routers/events");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(eventRouter);

app.listen(port, () => {
  console.log("Server OK: " + port);
});
