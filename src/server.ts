import express from "express";
import router from "./routes";
import helmet from "helmet";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Security middleware
app.use(helmet());

// Routes
app.use(router);

//
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})