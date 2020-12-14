const express = require("express")
const config =require("config")
const app = express()
const fs = require("fs")
const cors = require("cors")

app.use(cors());

app.use(express.json({extended: true}))


app.use("/api/tasks",require("./routes/task.routes"));

app.use("/api/database",require("./routes/db.routes"));

const PORT =config.get("PORT") || 5000

// const httpsOptions = {
//     cert: fs.readFileSync( "cert.pem"),
//     key: fs.readFileSync("key.pem")
// }

app.listen( PORT,() => {
        console.log(`Listening on port ${PORT}...`)
    })

// app.listen(PORT,() => console.log(`App has been started on PORT: ${PORT}...`))
