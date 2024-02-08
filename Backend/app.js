import express, { json }  from "express";
import chalk from "chalk";
import { port } from "./config/config.js";
import  userRouter  from "./routes/User.js";
import  customerRouter  from "./routes/Customer.js";
import  consultantRouter  from "./routes/Consultant.js";
import cookieParser  from'cookie-parser';
import cors from 'cors'


const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(cors());



app.use('/api/user', userRouter);
app.use('/api/customer', customerRouter);
app.use('/api/consultant', consultantRouter);


app.listen(port, () => {
    console.log(`Server listening on ${chalk.green.bold(port)}`);
})


