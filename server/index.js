const express = require("express");
const cors = require("cors");
const app = express();

const SchoolRoutes = require("./routes/school");
const AuthRoutes = require("./routes/authentication");
const EnrollRoutes = require("./routes/enrollment");

app.use(cors());
app.use(express.json());

app.use('/Images', express.static('./Images'))


app.use("/schools", SchoolRoutes);
app.use("/auth", AuthRoutes);
app.use("/enroll", EnrollRoutes);

app.listen(5000, () => console.log("Server running at port 5000"));
