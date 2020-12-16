const express = require("express")
const config =require("config")
const app = express()
const fs = require("fs")
const cors = require("cors")
const https = require("https")

//Оборачиваем в cors, чтобы принимать CORS запросы
app.use(cors());
app.use(express.json({extended: true}))

//Роуты
app.use("/api/tasks",require("./routes/task.routes"));
app.use("/api/database",require("./routes/db.routes"));

const PORT =config.get("PORT") || 5000

//Конфигурация сертификата
const httpsOptions = {
    //PATH certificates
    cert: fs.readFileSync( "./cert.key"),
    key: fs.readFileSync("./cert.crt")
}

//Сам сервер
https.createServer(httpsOptions, app)
    .listen(PORT, () => {
        console.log(`Listening on port ${PORT}...`)
    })


