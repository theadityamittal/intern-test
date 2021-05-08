import axios from "axios";

export async function fetchApiData(){
    const {data} = await axios.get("https://my-json-server.typicode.com/Codeinwp/front-end-internship-api/posts")
    return data;
}