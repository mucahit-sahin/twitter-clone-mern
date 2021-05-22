const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const router = require("./routers/users");

const app = express();

app.use(bodyParser.json({ limit: "20mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "20mb", extended: true }));

app.use(cors());
app.use("/", router);

const CONNECTION_URL =
  "mongodb+srv://dbtwitterclone:mucahitsahintwitterclone@cluster0.t1g6f.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => {
      console.log("connected port: " + PORT);
    })
  )
  .catch((error) => {
    console.log(error.message);
  });

mongoose.set("useFindAndModify", false);
