const express = require("express");
const app = express();
const path = require("path");
const multer = require('multer')
const upload = multer({ dest: 'uploads/' })
const mongoose = require("mongoose");
const cloudinary = require("cloudinary");

cloudinary.config({
    cloud_name: 'dqxymgt3p',
    api_key: '751227388323896',
    api_secret: 'A1CLIfRUU0ivlsLO-nf7PZN9OXI'
});

app.use(express.static(path.join(__dirname, "static")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const Image = require("./model/image");

app.set('view engine', 'hbs');

app.get("/upload", (req, res) => {
    res.render("form");
})

app.post("/upload", upload.single('img'), async (req, res) => {
    console.log(req.body);
    console.log(req.file);
    const { filename } = req.body;
    const { path } = req.file;
    const newImage = new Image({ filename: filename, filepath: path });
    await newImage.save();
    res.end("File Uploaded");
})

app.get("/blog", async (req, res) => {
    const images = await Image.find({});
    res.render("blog", { images });
})

mongoose.connect("mongodb://127.0.0.1:27017/multer").then(() => {
    app.listen(3334, () => {
        console.log("Server Has Started");
    })
})
