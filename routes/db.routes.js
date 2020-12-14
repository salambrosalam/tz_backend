const {Router} = require("express");
const router = Router();
const mysql = require("mysql");

//обрабатываем роут для базы данных
router.get("/", async (req,res) => {

    try{
        //Для CORS запросов
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        //Создаем новое подключение к базе с следующей конфигурацией
        const conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "tracker",
            password: "root",
            port: "3306"
        })

        //Конектимся к нашей базу
        conn.connect( err => {
            if(err) {
                console.log(err);
            }else{
                console.log("Database: OK")
            }
        })
        //Формируем дату для запроса в базу
        let today = new Date();
        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        //Формируем запрос на логирование даты на изменения фильтра
        let query = `INSERT INTO statuses (data,time,action,status) values(\"${date}\" ,\"${time}\", \"filter_changed\", \"success\")`;

        //Делаем запрос в базу
        conn.query(query,(err,result) => {
            console.log(err);
            console.log("DB: Status Changed")
            console.log(result)
        })

        //Закрываем коннект с базой
        conn.end(err => {
            if(err) {
                console.log(err)
                return err;
            }else{
                console.log("DATABASE IS CLOSED...")
            }
        })

        res.json("OK")

    }catch{

        //если какая-то ошибка логируем ее и возвращаем 500 статус
        res.status(500).json({message: "Something is went wrong, try again"})
    }
})

module.exports = router;




