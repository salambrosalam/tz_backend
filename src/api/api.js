import * as axios from "axios";

const instance = axios.create({
    baseURL: "https://salambrosalam.atlassian.net/rest/api/3/",
    headers: {
            "username": "romashkin1273@gmail.com",
            "password": "agUzXxaglJEGylgfAHZR69E4"
    }
})

const username = "romashkin127@gmail.com";
const password = "agUzXxaglJEGylgfAHZR69E4";

const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')

export const taskAPI = {
    getAllTasks(){
        return(
            instance.get(`search?jql=project="SALAM"`,{
                
            })
            )
    }
}
