import express from "express";
import cors from "cors";
import * as Controllers from "./src/controllers";
import * as Router from "./src/routers";
import * as Constants from "./src/globals/Constants";

const app=express();
app.use(cors({
    origin:true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(`${Constants.System.ROOT}/user`,Router.user);
app.use(`${Constants.System.ROOT}/room`,Router.room);
app.use(`${Constants.System.ROOT}/task`,Router.task);

app.listen(`${Constants.System.PORT}`,()=>{
    console.log(`Server running at port ${Constants.System.PORT}`);
});