const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const router = require("./Routes/route");

//MIDDlEWARE
app.use(bodyParser.json());
app.use(cors());

//ROUTES
app.use("/items", router);

//DB CONNECTION AND APP LISTINING
const PORT = process.env.PORT || 1234;
mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("DB Connected..."))
  .then(() => {
    app.listen(PORT, () =>
      console.log(`App listining on http://localhost:${PORT}`)
    );
  })
  .catch((err) => console.log(err));
