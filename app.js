const express = require("express")
const config =require("config")
const app = express()
const cors = require("cors")

app.use(cors());

app.use(express.json({extended: true}))


app.use("/api/tasks",require("./routes/task.routes"));

app.use("/api/database",require("./routes/db.routes"));

const PORT =config.get("PORT") || 5000


app.listen(PORT,() => console.log(`App has been started on PORT: ${PORT}...`))
