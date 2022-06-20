require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(cors());
app.use(express.json());
app.use(require("./routes"));
app.use("/public", express.static(path.resolve(__dirname, "public")));

mongoose.connect(process.env.MONGODV_SERV).then(() => {
  app.listen(port, () =>
    console.log(`Server has been started, http://localhost:${process.env.PORT}`)
  );
});
