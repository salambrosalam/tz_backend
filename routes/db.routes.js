const {Router} = require("express");
const router = Router();
const mysql = require("mysql");


router.get("/", async (req,res) => {

    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        const conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            database: "tracker",
            password: "root",
            port: "3306"
        })

        conn.connect( err => {
            if(err) {
                console.log(err);
            }else{
                console.log("Database: OK")
            }
        })
        let today = new Date();

        let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();

        let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

        let query = `INSERT INTO statuses (data,time,action,status) values(\"${date}\" ,\"${time}\", \"filter_changed\", \"success\")`;

        conn.query(query,(err,result) => {
            console.log(err);
            console.log("DB: Status Changed")
            console.log(result)
        })

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
        res.status(500).json({message: "Something is went wrong, try again"})
    }
})

module.exports = router;




