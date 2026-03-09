const express = require("express");

const app = express();

app.use(cors());
app.use(express.json());


const user = {
    username: "admin",
    password: "admin123"
}

app.listen(5000, () => {
    console.log("listening on server 3000")
})