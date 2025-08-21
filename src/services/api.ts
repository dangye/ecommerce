import axios from "axios"

//PARA RODAR O DB MOCK
//json-server --watch db.json

export const api = axios.create({
    baseURL: "http://localhost:3000"
})