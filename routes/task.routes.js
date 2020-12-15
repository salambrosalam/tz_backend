const {Router} = require("express");
const router = Router();
const fetch = require('node-fetch');
let oauth2 = require('atlassian-oauth2');

//обрабатываем роут для получения всех тасков
router.get("/",async (req,res) => {
    try{
        //для CORS запросов
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        //Запрос на сервер JIRA на получение всех тасков
        fetch('https://salambrosalam.atlassian.net/rest/api/3/search?jql=project=SALAM', {
            method: 'GET',
            //Данные для авторизации запроса
            headers: {
                'Authorization': `Basic ${Buffer.from(
                    'romashkin1273@gmail.com:agUzXxaglJEGylgfAHZR69E4'
                ).toString('base64')}`,
                'Accept': 'application/json'
            }
        })
            //если все хорошо то преобразую все в json и логируем все на сервере
            .then(response => {
                console.log(
                    `Response: ${response.status} ${response.statusText}`
                );
                return response.json();
            })
            //отправляем их в "response" или если ошибка то выводим ее
            .then(text => {console.log("all tasks",text)
                res.json(text)})
            .catch(err => console.error(err));

    }catch(e){
        res.status(500).json({message: "Something is went wrong, try again"})
    }
})

module.exports = router;
