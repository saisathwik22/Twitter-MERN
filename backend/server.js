import express from 'express';
import dotenv from "dotenv";

import authRoutes from "./routes/auth.routes.js"
import connectMongoDB from './db/connectMongoDB.js';

dotenv.config();

const app = express()
const PORT = process.env.PORT || 5000;

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
      connectMongoDB();
<<<<<<< HEAD
})
=======
})
>>>>>>> 6ac79c57f2d3e774cdb5b23b792ab79bf9ff282c
