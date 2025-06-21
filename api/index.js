const express=require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose=require("mongoose");
const authRouter = require("./routes/auth");
const userRouter = require("./routes/users");
const postRouter = require("./routes/posts");
const categoryRouter = require("./routes/categories");
const multer = require("multer");

dotenv.config();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
})
.then (console.log("Connected"))
.catch((err)=>console.log(err));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images");
  },
  filename: (req, file, cb) =>{
    cb(null, req.body.name);
  }
});

const upload = multer({storage: storage});
app.post("/api/upload", upload.single("file"), (req, res) =>{
  res.status(200).json("File has been uploaded");
})

app.use("/api/auth", authRouter);
app.use("/api/users", userRouter);
app.use("/api/posts", postRouter);
app.use("/api/categories", categoryRouter);

app.listen("5000",()=>{
    console.log("Backend is running");
})