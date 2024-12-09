import express from "express";
import connectToDatabase from "./connect.js";
import userRoute from "./Routes/userRoute.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());
app.use("/user", userRoute);

app.listen(8080, () => {
    console.log("hello world");
    connectToDatabase();
});
