const express = require("express")
const app = express();

const AuthRoute = require("./routes/home")
const LoginRoute = require("./routes/login")
const RegisterRoute = require("./routes/register")
app.use(express.json());

app.use("/", AuthRoute);
app.use("/home", LoginRoute);
app.use("/home", RegisterRoute)

app.listen(9000, () => {
    console.log("server listening at port 9000");
});
