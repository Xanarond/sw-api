import axios from 'axios';

export default axios.create({
    baseURL: 'https://swapi.dev/api/',
   /* headers: {
        'Content-type': 'application/json',
        'Access-Control-Allow-Credentials':'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers':'Authorization,Content-Type,Accept,Origin,User-Agent,DNT,Cache-Control,X-Mx-ReqToken',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Accept": "application/json",
        "X-Requested-With": "XMLHttpRequest",
    },*/
});
