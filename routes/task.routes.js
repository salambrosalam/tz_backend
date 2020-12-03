const {Router} = require("express");
const router = Router();
const fetch = require('node-fetch');

router.get("/",async (req,res) => {
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'origin, content-type, accept');

        fetch('https://salambrosalam.atlassian.net/rest/api/3/search?jql=project=SALAM', {
            method: 'GET',
            headers: {
                'Authorization': `Basic ${Buffer.from(
                    'romashkin1273@gmail.com:agUzXxaglJEGylgfAHZR69E4'
                ).toString('base64')}`,
                'Accept': 'application/json'
            }
        })
           .then(response => {
               console.log(
                   `Response: ${response.status} ${response.statusText}`
               );
               return response.json();
           })
           .then(text => {console.log("hui",text)
           res.json(text)})
           .catch(err => console.error(err));
    }catch(e){
        res.status(500).json({message: "Something is went wrong, try again"})
    }
})

module.exports = router;
