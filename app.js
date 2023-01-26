const dotenv = require("dotenv");
const axios = require("axios");
const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3009);

// let token = "";
// dotenv.config();

// async function doGetToken() {
//   let payload = { grant_type: "client_credentials" };
//   let res = await axios.post(
//     "https://sandbox.bni.co.id/api/oauth/token",
//     payload,
//     {
//       auth: {
//         username: process.env.OAUTH_CLIENT_ID,
//         password: process.env.OAUTH_SECRET_KEY,
//       },
//       headers: {
//         "Content-Type": "application/x-www-form-urlencoded",
//       },
//     }
//   );
//   token = res.data.access_token;
// }
