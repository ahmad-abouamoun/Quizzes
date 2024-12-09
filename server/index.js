import express from "express";
import connectToDatabase from "./connect.js";
import userRoute from "./Routes/userRoute.js";
const app = express();

app.use(express.json());

app.use("/user", userRoute);

app.listen(8080, () => {
    console.log("hello world");
    connectToDatabase();
});
