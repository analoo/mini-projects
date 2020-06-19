const express = require("express");
const router = require("express").Router();


const PORT = process.env.PORT || 4001;

const app = express()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build/index.html"))
})

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

app.listen(PORT, function(){
    console.log(`Coming to you live from PORT ${PORT}`)

})

